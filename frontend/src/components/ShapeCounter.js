import React from 'react';

const ShapeCounter = ({ shapes }) => {
  const count = {
    circle: 0,
    square: 0,
    triangle: 0,
  };

  shapes.forEach((shape) => count[shape.type]++);

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  };

  return (
    <div className="counter" style={{ display: 'flex', justifyContent: 'space-around', marginTop: 15 }}>
      {/* دایره */}
      <div style={iconStyle}>
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: '50%',
            background: 'transparent',
            border: '2px solid black',
          }}
        ></div>
        <span>{count.circle}</span>
      </div>

      {/* مربع */}
      <div style={iconStyle}>
        <div
          style={{
            width: 15,
            height: 15,
            background: 'transparent',
            border: '2px solid black',
          }}
        ></div>
        <span>{count.square}</span>
      </div>
      <div style={iconStyle}>
        <svg width="15" height="15">
          <polygon points="7.5,2 2,13 13,13" stroke="black" strokeWidth="2" fill="none" />
        </svg>
        <span>{count.triangle}</span>
      </div>
    </div>
  );
};

export default ShapeCounter;
