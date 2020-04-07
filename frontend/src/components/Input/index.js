import React from 'react';

import './styles.css';

export default function Input({ children, ...props }) {
  return <input {...props}>{children}</input>;
}

export function Textarea({ children, ...props }) {
  return <textarea {...props}>{children}</textarea>;
}
