import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
  // 1st Argument: The schema definition
  {
    clerkUserId: { 
      type: String, 
      required: true, 
      unique: true, 
      index: true 
    },
    email: { 
      type: String, 
      required: true 
    },
    points: { 
      type: Number, 
      default: 0 
    },
    progress:{}
  },
  // 2nd Argument: The options object
  { 
    timestamps: true 
  }
);

export default mongoose.model('User', UserSchema);