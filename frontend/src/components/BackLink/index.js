import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export default ({ children, ...props }) => {
  return (
    <Link className="back-link" {...props}>
      {children}
    </Link>
  );
};
