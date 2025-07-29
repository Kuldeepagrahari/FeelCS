import mongoose from 'mongoose';

const SimulationSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    index: true 
  },
  type: { 
    type: String, 
    required: true  // e.g., "FCFS", "RoundRobin"
  },
  course: { 
    type: String, 
    required: true  // e.g., "Operating Systems", "Computer Networks"
  },
  input: { 
    type: Object, 
    required: true 
  },
  output: { 
    type: Object 
  },
}, { timestamps: true });

export default mongoose.model('Simulation', SimulationSchema);