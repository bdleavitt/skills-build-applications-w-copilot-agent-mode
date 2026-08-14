import CollectionView from './CollectionView.jsx';

function Teams() {
  return (
    <CollectionView
      endpoint="/api/teams/"
      title="Teams"
      description="Find your crew, their coach, and the goals you are chasing together."
      columns={[
        { key: 'name', label: 'Team' },
        { key: 'city', label: 'City' },
        { key: 'coach', label: 'Coach' },
        { key: 'memberCount', label: 'Members' },
        { key: 'weeklyGoalMinutes', label: 'Weekly goal' },
      ]}
    />
  );
}

export default Teams;