import express from 'express';
import { connectToDatabase } from './config/database.js';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models/index.js';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

app.get('/api/', (_request, response) => {
  response.json({
    name: 'OctoFit Tracker API',
    baseUrl,
    endpoints: {
      users: `${baseUrl}/api/users/`,
      teams: `${baseUrl}/api/teams/`,
      activities: `${baseUrl}/api/activities/`,
      leaderboard: `${baseUrl}/api/leaderboard/`,
      workouts: `${baseUrl}/api/workouts/`,
    },
  });
});

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', baseUrl });
});

app.get('/api/users/', async (_request, response) => {
  const users = await User.find().sort({ displayName: 1 }).lean();
  response.json(users);
});

app.get('/api/teams/', async (_request, response) => {
  const teams = await Team.find().sort({ name: 1 }).lean();
  response.json(teams);
});

app.get('/api/activities/', async (_request, response) => {
  const activities = await Activity.find().sort({ completedAt: -1 }).lean();
  response.json(activities);
});

app.get('/api/leaderboard/', async (_request, response) => {
  const leaderboard = await LeaderboardEntry.find().sort({ rank: 1 }).lean();
  response.json(leaderboard);
});

app.get('/api/workouts/', async (_request, response) => {
  const workouts = await Workout.find().sort({ name: 1 }).lean();
  response.json(workouts);
});

await connectToDatabase();

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening at ${baseUrl}`);
});
