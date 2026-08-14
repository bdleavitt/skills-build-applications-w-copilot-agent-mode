import { useEffect, useState } from 'react';
import { fetchCollection } from '../api.js';

function formatValue(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (typeof value === 'string' && value.includes('T')) {
    return new Date(value).toLocaleDateString();
  }

  return value ?? '-';
}

function CollectionView({ endpoint, title, description, columns }) {
  const [records, setRecords] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetchCollection(endpoint)
      .then((items) => {
        if (active) {
          setRecords(items);
        }
      })
      .catch((requestError) => {
        if (active) {
          setError(requestError.message);
        }
      })
      .finally(() => {
        if (active) {
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [endpoint]);

  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OctoFit Tracker</p>
          <h1>{title}</h1>
          <p className="section-description">{description}</p>
        </div>
        <span className="record-count">{records.length} records</span>
      </div>

      {loading && <div className="status-panel">Loading your team data...</div>}
      {error && <div className="status-panel status-error">{error}</div>}
      {!loading && !error && records.length === 0 && (
        <div className="status-panel">No records available yet.</div>
      )}
      {!loading && !error && records.length > 0 && (
        <div className="table-wrap">
          <table className="table tracker-table align-middle mb-0">
            <thead>
              <tr>
                {columns.map((column) => <th key={column.key}>{column.label}</th>)}
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record._id || record.id || index}>
                  {columns.map((column) => (
                    <td key={column.key}>{formatValue(record[column.key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default CollectionView;