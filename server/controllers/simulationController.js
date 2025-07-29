// controllers/simulationController.js
import simulationQueue from '../queues/simulationQueue.js';
import Simulation from '../models/Simulation.js';
import User from '../models/User.js';

export const createFcfsSimulation = async (req, res) => {
  try {
    // In a real app, user would come from an auth middleware
    const user = await User.findOneAndUpdate(
        { clerkUserId: 'DUMMY_USER_ID' },
        { email: 'test@example.com' },
        { upsert: true, new: true }
    );

    const { burstTimes } = req.body;

    if (!burstTimes ||!Array.isArray(burstTimes)) {
        return res.status(400).json({ error: 'burstTimes array is required.' });
    }

    const newSimulation = new Simulation({
      userId: user._id,
      type: 'FCFS',
      course: 'Operating Systems',
      input: { burstTimes },
    });
    await newSimulation.save();

    // Add job to the queue
    await simulationQueue.add('fcfs-job', {
      simulationId: newSimulation._id,
      type: 'FCFS',
      input: burstTimes,
    });

    res.status(202).json({
      message: 'Simulation job accepted.',
      simulationId: newSimulation._id,
    });
  } catch (error) {
    console.error('Error in createFcfsSimulation:', error);
    res.status(500).json({ error: 'Failed to queue simulation job.' });
  }
};