import 'dotenv/config';
import mongoose from 'mongoose';
import { Worker } from 'bullmq';
import { execFile } from 'node:child_process';
import util from 'node:util';

// Import local modules
import { workerConnection } from './queues/redisClient.js';
import Simulation from './models/Simulation.js';

// Promisify execFile for async/await usage [5]
const execFilePromise = util.promisify(execFile);

// Connect to the database for the worker process
mongoose.connect(process.env.MONGO_URI)
 .then(() => console.log('Worker connected to MongoDB.'))
 .catch(err => console.error('Worker MongoDB connection error:', err));

// Create a new worker that connects to the 'simulation-queue'
const worker = new Worker('simulation-queue', async (job) => {
  const { simulationId, type, input } = job.data;
  console.log(`Processing simulation ${simulationId} of type ${type}`);

  try {
    // Define the path to the compiled C++ executable
    const executablePath = './simulators/fcfs_simulator';
    
    // Convert the job's input data into command-line arguments
    const args = input.map(String);

    // Execute the C++ binary and capture its standard output [5]
    const { stdout } = await execFilePromise(executablePath, args);

    // The C++ program outputs a JSON string, which we parse here
    const result = JSON.parse(stdout);

    // Save the output to the corresponding simulation document in the database
    await Simulation.findByIdAndUpdate(simulationId, { output: result });

    console.log(`Simulation ${simulationId} completed successfully.`);
  } catch (error) {
    console.error(`Error executing simulation ${simulationId}:`, error);
    // If an error occurs, update the document and re-throw to mark the job as failed
    await Simulation.findByIdAndUpdate(simulationId, { output: { error: error.message } });
    throw error;
  }
}, { connection: workerConnection });

// Event listeners for monitoring the worker's status
worker.on('completed', (job) => {
  console.log(`${job.id} has completed!`);
});

worker.on('failed', (job, err) => {
  console.error(`${job.id} has failed with ${err.message}`);
});

console.log('Worker is listening for jobs...');