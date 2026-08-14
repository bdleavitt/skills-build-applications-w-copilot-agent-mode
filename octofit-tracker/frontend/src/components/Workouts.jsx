import CollectionView from './CollectionView.jsx';

function Workouts() {
  return (
    <CollectionView
      endpoint="/api/workouts/"
      title="Workouts"
      description="Choose a session that fits the day and keeps your goals moving."
      columns={[
        { key: 'name', label: 'Workout' },
        { key: 'focus', label: 'Focus' },
        { key: 'difficulty', label: 'Difficulty' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'recommendedFor', label: 'Recommended for' },
      ]}
    />
  );
}

export default Workouts;