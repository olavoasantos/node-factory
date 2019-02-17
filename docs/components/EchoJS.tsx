// tslint:disable
import React from 'react';

export default ({ children }) => (
  <pre style={{
    background: '#EEF1F5',
    borderLeft: '5px solid #CED4DE',
    color: '#7D899C',
    margin: '25px 0 25px 2px',
    padding: '20px',
    fontStyle: 'italic',
    fontSize: '18px',
    maxWidth: '100%',
    overflowY: 'auto',
  }}>
  {children()}
  </pre>
);
