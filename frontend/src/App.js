import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import ShapeCounter from './components/ShapeCounter';

const App = () => {
  const [username, setUsername] = useState('alice');
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(null);
  const [title, setTitle] = useState('Untitled');

  const addShape = (x, y, type = selectedShape) => {
    if (!type) return;
  
    const size = 40;
    let offsetX = size / 2;
    let offsetY = size / 2;
  
    if (type === 'triangle') {
      offsetX = 20;
      offsetY = 40 / 2;
    }
  
    const newShape = {
      id: Date.now(),
      type,
      x: x - offsetX,
      y: y - offsetY,
    };
    setShapes([...shapes, newShape]);
  };
  

  const removeShape = (id) => {
    setShapes(shapes.filter((shape) => shape.id !== id));
  };

  // const exportShapes = () => {
  //   const data = {
  //     title,
  //     shapes,
  //   };
  //   const json = JSON.stringify(data, null, 2);
  //   const blob = new Blob([json], { type: 'application/json' });
  //   const url = URL.createObjectURL(blob);
  
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = `${title || 'drawing'}.json`;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  //   URL.revokeObjectURL(url);
  // };
  const saveToServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/drawing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          title,
          shapes,
        }),
      });
  
      if (!response.ok) throw new Error('Failed to save');
      alert('Saved to server!');
    } catch (err) {
      console.error(err);
      alert('Save failed.');
    }
  };

  // const importShapes = (e) => {
  //   const file = e.target.files[0];
  //   if (!file) return;
  
  //   const reader = new FileReader();
  
  //   reader.onload = (e) => {
  //     try {
  //       const data = JSON.parse(e.target.result);
  //       console.log('File imported:', data);
  
  //       if (!Array.isArray(data.shapes)) {
  //         alert('Invalid file format: shapes must be an array');
  //         return;
  //       }
  
  //       setTitle(data.title || 'Untitled');
  //       setShapes(data.shapes || []);
  //     } catch (err) {
  //       console.error('Failed to parse JSON:', err);
  //       alert('Failed to import file. Check console for details.');
  //     }
  //   };
  
  //   reader.readAsText(file);
  // };

  const loadFromServer = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/drawing/${username}`);
      if (!res.ok) throw new Error('No drawing found for user.');
      const data = await res.json();
      setTitle(data.title);
      setShapes(data.shapes);
      alert('Loaded from server!');
    } catch (err) {
      console.error(err);
      alert('Load failed.');
    }
  };
  

  return (
    <div className="app">
      <Header
        title={title}
        setTitle={setTitle}
        username={username}
        setUsername={setUsername}
        saveToServer={saveToServer}
        loadFromServer={loadFromServer}
      />
      <div className="main">
        <Sidebar setSelectedShape={setSelectedShape} />
        <Canvas shapes={shapes} addShape={addShape} removeShape={removeShape} selectedShape={selectedShape} setSelectedShape={setSelectedShape} />
      </div>
      <ShapeCounter shapes={shapes} />
    </div>
  );
};

export default App;
