import React from 'react';

const Shape = ({ id, type, x, y, onRemove }) => {
  const style = {
    position: 'absolute',
    left: x,
    top: y,
    width: 40,
    height: 40,
    cursor: 'pointer',
  };

  const handleDoubleClick = (e) => {
    onRemove(id);
  };

  switch (type) {
    case 'circle':
      return <div style={{ ...style, borderRadius: '50%', border: '2px solid black', background: 'transparent' }} onDoubleClick={handleDoubleClick}></div>;
    case 'square':
      return <div style={{ ...style, border: '2px solid black', background: 'transparent' }} onDoubleClick={handleDoubleClick}></div>;      
    case 'triangle':
    return (
      <svg
        width="40"
        height="40"
        style={{ position: 'absolute', left: x, top: y, cursor: 'pointer' }}
        onDoubleClick={handleDoubleClick}
      >
        <polygon
          points="20,0 0,40 40,40"
          fill="none"
          stroke="black"
          strokeWidth="2"
        />
      </svg>
    );
      
      
      
    default:
      return null;
  }
};

export default Shape;
