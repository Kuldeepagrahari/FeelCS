// routes/userRoutes.js
import express from 'express';
import { getDashboard, getLeaderboard } from '../controllers/userController.js';

const router = express.Router();

// Route: GET /api/users/dashboard
router.get('/dashboard', getDashboard);

// Route: GET /api/users/leaderboard
router.get('/leaderboard', getLeaderboard);

export default router;