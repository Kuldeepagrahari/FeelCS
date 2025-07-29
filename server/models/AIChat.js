import mongoose from 'mongoose';

const AIChatSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true, 
    index: true 
  },
  simulationId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Simulation', 
    index: true 
  },
  history:{

  }},
  {
    timestamps: true 
  }
  );

export default mongoose.model('AIChat', AIChatSchema);