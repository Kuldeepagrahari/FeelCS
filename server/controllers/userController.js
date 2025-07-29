// controllers/userController.js
import User from '../models/User.js';

export const getDashboard = async (req, res) => {
  try {
    // Assuming user is identified via auth middleware in a real app
    const clerkUserId = 'DUMMY_USER_ID'; 
    const user = await User.findOne({ clerkUserId });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ points: user.points, progress: user.progress });
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching dashboard data.' });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const topUsers = await User.find({})
    .sort({ points: -1 })
    .limit(10)
    .select('email points');
    res.json(topUsers);
  } catch (error) {
    res.status(500).json({ error: 'Server error fetching leaderboard.' });
  }
};