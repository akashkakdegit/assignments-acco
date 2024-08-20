import React from 'react';

const Widget = ({ widget }) => {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
    </div>
  );
};

export default Widget;
