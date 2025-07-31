import React from 'react';
import Shape from './Shape';

const Canvas = ({ shapes, addShape, removeShape, selectedShape, setSelectedShape }) => {
  const handleClick = (e) => {
      if(!selectedShape) return;
      const rect = e.currentTarget.getBoundingClientRect();
      addShape(e.clientX - rect.left, e.clientY - rect.top);
      setSelectedShape(null);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const shapeType = e.dataTransfer.getData('shapeType');
    if (!shapeType) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    addShape(x, y, shapeType);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="canvas" onClick={handleClick} onDrop={handleDrop} onDragOver={handleDragOver}>
      {shapes.map((shape) => (
        <Shape key={shape.id} {...shape} onRemove={removeShape} />
      ))}
    </div>
  );
};

export default Canvas;
