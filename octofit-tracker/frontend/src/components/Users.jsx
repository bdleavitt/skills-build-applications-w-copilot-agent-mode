import CollectionView from './CollectionView.jsx';

function Users() {
  return (
    <CollectionView
      endpoint="/api/users/"
      title="Athletes"
      description="Meet the people making progress across the OctoFit community."
      columns={[
        { key: 'displayName', label: 'Name' },
        { key: 'username', label: 'Username' },
        { key: 'teamName', label: 'Team' },
        { key: 'age', label: 'Age' },
        { key: 'goals', label: 'Goals' },
      ]}
    />
  );
}

export default Users;