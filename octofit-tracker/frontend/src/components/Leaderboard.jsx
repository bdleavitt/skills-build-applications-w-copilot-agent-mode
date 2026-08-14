import CollectionView from './CollectionView.jsx';

function Leaderboard() {
  return (
    <CollectionView
      endpoint="/api/leaderboard/"
      title="Leaderboard"
      description="A friendly nudge for every team member to keep showing up."
      columns={[
        { key: 'rank', label: 'Rank' },
        { key: 'username', label: 'Athlete' },
        { key: 'teamName', label: 'Team' },
        { key: 'points', label: 'Points' },
        { key: 'weeklyMinutes', label: 'Weekly minutes' },
      ]}
    />
  );
}

export default Leaderboard;