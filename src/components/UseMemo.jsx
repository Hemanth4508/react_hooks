import React from 'react';
import { Link } from 'react-router-dom';

export default function UseEffect() {
  return (
    <div>
      <h2>ℹ️ useEffectt Page</h2>
      <p>This app uses React Router for navigation.</p>
      <Link to="/">← Back to Home</Link>
    </div>
  );
}
