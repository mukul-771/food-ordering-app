import React from 'react';

const OutletSelector = ({ outlets, onSelectOutlet }) => {
  return (
    <div className="outlet-selector">
      <h2 className="outlet-title">Select an Outlet</h2>
      <div className="outlet-grid">
        {outlets.map(outlet => (
          <div key={outlet.id} className="outlet-card">
            <img src={outlet.logo} className="outlet-logo" alt={outlet.name} />
            <div className="outlet-info">
              <h5 className="outlet-name">{outlet.name}</h5>
              <p className="outlet-time">{outlet.operationalTime}</p>
              <button onClick={() => onSelectOutlet(outlet)} className="select-button">
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutletSelector;
