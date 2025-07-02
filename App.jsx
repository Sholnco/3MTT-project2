import { useEffect, useState } from 'react';
import './App.css';
import ListComponent from './ListComponent';

function App() {
  const [users, setUsers] = useState([]);         // holds the data
  const [loading, setLoading] = useState(true);   // loading state
  const [error, setError] = useState(null);        // error state

  // Fetch data when component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('API request failed');
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <h1>User List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {!loading && !error && (
        <ListComponent
          items={users}
          renderItem={(user) => (
  <li key={user.id}>
    <strong>{user.name}</strong><br />
    Email: {user.email}<br />
    Phone: {user.phone}<br />
    Website: <a href={`https://${user.website}`} target="_blank">{user.website}</a>
  </li>
)}

        />
      )}
    </main>
  );
}

export default App;
