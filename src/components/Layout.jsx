import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout(props) {
  const { heading, about, children } = props;
  return (
    <div>
      <h2>{heading}</h2>
      <p>{about}</p>
      <div>{children}</div>
    </div>
  );
}
