import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models/index.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const users = [
  {
    username: 'maya-rivera',
    displayName: 'Maya Rivera',
    email: 'maya.rivera@example.com',
    age: 29,
    teamName: 'OctoFit Originals',
    goals: ['Run a 10K', 'Improve recovery consistency'],
  },
  {
    username: 'dev-patel',
    displayName: 'Dev Patel',
    email: 'dev.patel@example.com',
    age: 35,
    teamName: 'Tentacle Titans',
    goals: ['Build upper-body strength', 'Log four workouts weekly'],
  },
  {
    username: 'jordan-lee',
    displayName: 'Jordan Lee',
    email: 'jordan.lee@example.com',
    age: 24,
    teamName: 'OctoFit Originals',
    goals: ['Increase weekly activity minutes', 'Try yoga'],
  },
];

const teams = [
  {
    name: 'OctoFit Originals',
    city: 'Seattle',
    coach: 'Avery Chen',
    memberCount: 8,
    weeklyGoalMinutes: 1200,
  },
  {
    name: 'Tentacle Titans',
    city: 'Austin',
    coach: 'Morgan Blake',
    memberCount: 6,
    weeklyGoalMinutes: 900,
  },
];

const activities = [
  {
    username: 'maya-rivera',
    activityType: 'Outdoor run',
    durationMinutes: 42,
    caloriesBurned: 420,
    completedAt: new Date('2026-08-10T13:30:00.000Z'),
  },
  {
    username: 'dev-patel',
    activityType: 'Strength training',
    durationMinutes: 55,
    caloriesBurned: 510,
    completedAt: new Date('2026-08-11T22:00:00.000Z'),
  },
  {
    username: 'jordan-lee',
    activityType: 'Power yoga',
    durationMinutes: 35,
    caloriesBurned: 230,
    completedAt: new Date('2026-08-12T12:15:00.000Z'),
  },
];

const leaderboard = [
  {
    rank: 1,
    username: 'dev-patel',
    teamName: 'Tentacle Titans',
    points: 1480,
    weeklyMinutes: 245,
  },
  {
    rank: 2,
    username: 'maya-rivera',
    teamName: 'OctoFit Originals',
    points: 1325,
    weeklyMinutes: 218,
  },
  {
    rank: 3,
    username: 'jordan-lee',
    teamName: 'OctoFit Originals',
    points: 980,
    weeklyMinutes: 174,
  },
];

const workouts = [
  {
    name: 'Harbor Sprint Builder',
    focus: 'Cardio endurance',
    difficulty: 'Intermediate',
    durationMinutes: 36,
    recommendedFor: ['Runners', 'Team challenge prep'],
  },
  {
    name: 'Core Stability Circuit',
    focus: 'Strength and balance',
    difficulty: 'Beginner',
    durationMinutes: 28,
    recommendedFor: ['Desk workers', 'Recovery days'],
  },
  {
    name: 'Full-Body Power Session',
    focus: 'Functional strength',
    difficulty: 'Advanced',
    durationMinutes: 50,
    recommendedFor: ['Strength goals', 'Leaderboard push'],
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Seed the octofit_db database with test data');
    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Promise.all([
      User.insertMany(users),
      Team.insertMany(teams),
      Activity.insertMany(activities),
      LeaderboardEntry.insertMany(leaderboard),
      Workout.insertMany(workouts),
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
