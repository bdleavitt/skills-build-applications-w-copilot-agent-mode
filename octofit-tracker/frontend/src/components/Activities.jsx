import CollectionView from './CollectionView.jsx';

function Activities() {
  return (
    <CollectionView
      endpoint="/activities/"
      title="Activity log"
      description="See the movement that is powering your team's momentum."
      columns={[
        { key: 'username', label: 'Athlete' },
        { key: 'activityType', label: 'Activity' },
        { key: 'durationMinutes', label: 'Minutes' },
        { key: 'caloriesBurned', label: 'Calories' },
        { key: 'completedAt', label: 'Completed' },
      ]}
    />
  );
}

export default Activities;