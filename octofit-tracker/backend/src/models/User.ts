import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    displayName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    age: { type: Number, required: true, min: 13 },
    teamName: { type: String, required: true, trim: true },
    goals: [{ type: String, required: true, trim: true }],
  },
  { timestamps: true },
);

export const User = model('User', userSchema);