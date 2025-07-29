// index.js
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import connectDB from './config/db.js';

// Import route handlers
import simulationRoutes from './routes/simulationRoutes.js';
import chatRoutes from './routes/chatRoutes.js';
import userRoutes from './routes/userRoutes.js';

// Connect to Database
connectDB();

const app = express();

// --- Core Middleware ---
app.use(cors());
app.use(helmet());
app.use(express.json());

// --- API Routes ---
app.get('/api', (req, res) => {
  res.send('FeelCS API is running!');
});

// Mount the individual routers
app.use('/api/simulate', simulationRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});