// routes/simulationRoutes.js
import express from 'express';
import { createFcfsSimulation } from '../controllers/simulationController.js';

const router = express.Router();

// Route: POST /api/simulate/os/fcfs
router.post('/os/fcfs', createFcfsSimulation);

export default router;