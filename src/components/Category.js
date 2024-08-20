import React from 'react';

const Category = ({ category }) => {
  return (
    <div className="category">
      <h2>{category.name}</h2>
      <div className="sub-category">
        {category.widgets.map(widget => (
          <div key={widget.id} className="widget">
            <h3>{widget.name}</h3>
            {widget.component ? widget.component : <p>{widget.text}</p>} {/* Render component or text */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
