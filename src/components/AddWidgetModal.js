import React, { useState } from 'react';

const AddWidgetModal = ({ addWidget, closeModal }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleAddWidget = () => {
    addWidget(selectedCategory, { id: Date.now().toString(), name: widgetName, text: widgetText });
  };

  return (
    <div className="modal">
      <div>
        <h2>Add Widget</h2>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="CSPM Executive Dashboard">CSPM Executive Dashboard</option>
          <option value="CWPP Dashboard">CWPP Dashboard</option>
          <option value="Registry Scan">Registry Scan</option>
        </select>
        <input type="text" placeholder="Widget Name" value={widgetName} onChange={(e) => setWidgetName(e.target.value)} />
        <textarea placeholder="Widget Text" value={widgetText} onChange={(e) => setWidgetText(e.target.value)} />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button onClick={handleAddWidget}>Confirm</button>
          <button onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;
