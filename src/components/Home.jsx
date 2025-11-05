import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <h1>React Hooks</h1>
      <ul className="hooks-list">
        <li className="hooks-list-element">
          {' '}
          <Link className="hook-links" to="/use-effect">
            UseEffect()
          </Link>
        </li>
        <li className="hooks-list-element">
          {' '}
          <Link className="hook-links" to="/use-state">
            UseState()
          </Link>
        </li>
        <li className="hooks-list-element">
          {' '}
          <Link className="hook-links" to="/use-memo">
            UseMemo()
          </Link>
        </li>
      </ul>
    </div>
  );
}
