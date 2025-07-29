import { Queue } from 'bullmq';
import { producerConnection } from './redisClient.js';

// Create a new queue instance with a specific name.
// This name is used by both the producer and worker to identify the queue.
const simulationQueue = new Queue('simulation-queue', {
  connection: producerConnection,
});

export default simulationQueue;