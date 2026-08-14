import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, unique: true, trim: true },
    city: { type: String, required: true, trim: true },
    coach: { type: String, required: true, trim: true },
    memberCount: { type: Number, required: true, min: 1 },
    weeklyGoalMinutes: { type: Number, required: true, min: 1 },
  },
  { timestamps: true },
);

export const Team = model('Team', teamSchema);