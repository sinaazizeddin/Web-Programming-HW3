import React from 'react';

const shapeStyle = {
  width: 40,
  height: 40,
  margin: '15px auto',
  cursor: 'grab',
};

const handleDragStart = (e, shapeType) => {
  e.dataTransfer.setData('shapeType', shapeType);

  const preview = document.createElement('div');
  preview.style.width = '40px';
  preview.style.height = '40px';
  preview.style.position = 'absolute';
  preview.style.pointerEvents = 'none';

  if (shapeType === 'circle') {
    preview.style.border = '2px solid black';
    preview.style.borderRadius = '50%';
    preview.style.background = 'transparent';
  } else if (shapeType === 'square') {
    preview.style.border = '2px solid black';
    preview.style.background = 'transparent';
  } else if (shapeType === 'triangle') {
    preview.innerHTML = `
      <svg width="40" height="40">
        <polygon points="20,0 0,40 40,40" fill="none" stroke="black" stroke-width="2" />
      </svg>
    `;
  }

  document.body.appendChild(preview);
  e.dataTransfer.setDragImage(preview, 20, 20);
  setTimeout(() => document.body.removeChild(preview), 0);
};

const Sidebar = ({ setSelectedShape }) => {
  return (
    <div className="sidebar" style={{ textAlign: 'center', paddingRight: 10 }}>
      <h3 style={{ marginBottom: 20 }}>ابزارها</h3>

      {/* دایره */}
      <div
        className="shape-tool"
        draggable
        onDragStart={(e) => handleDragStart(e, 'circle')}
        onClick={() => setSelectedShape('circle')}
        style={{
          ...shapeStyle,
          borderRadius: '50%',
          background: 'transparent',
          border: '2px solid black',
        }}
      ></div>

      {/* مربع */}
      <div
        className="shape-tool"
        draggable
        onDragStart={(e) => handleDragStart(e, 'square')}
        onClick={() => setSelectedShape('square')}
        style={{
          ...shapeStyle,
          background: 'transparent',
          border: '2px solid black',
        }}
      ></div>

      {/* مثلث */}
      {/* <div
        className="shape-tool"
        draggable
        onDragStart={(e) => handleDragStart(e, 'triangle')}
        onClick={() => setSelectedShape('triangle')}
        style={{
          width: 0,
          height: 0,
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderBottom: '40px solid black',
          background: 'transparent',
          margin: '15px auto',
          cursor: 'grab',
        }}
      ></div> */}

      <div
        className="shape-tool"
        draggable
        onDragStart={(e) => handleDragStart(e, 'triangle')}
        onClick={() => setSelectedShape('triangle')}
        style={{ margin: '15px auto', cursor: 'grab', width: 40, height: 40 }}
      >
        <svg width="40" height="40">
          <polygon
            points="20,0 0,40 40,40"
            fill="none"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
      </div>

    </div>
  );
};

export default Sidebar;
