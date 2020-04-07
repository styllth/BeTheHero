import React from 'react';

import './styles.css';

export default ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};
