import React from 'react';
import { Link } from 'react-router-dom';

const Landing = ({ users }) => {
  return (
    <div className="category-list">
      {users.map((user, i) => (
        <Link key={i} to={`/catalog/${user.id}`}>
          <div className="card category-card" style={{ backgroundColor: user.color }}>
            <h2 id={user.name}> {user.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Landing;
