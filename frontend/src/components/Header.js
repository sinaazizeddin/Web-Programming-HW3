import React from 'react';

const Header = ({ title, setTitle, exportShapes, importShapes }) => {
  return (
    <div className="header">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Painting Title"
      />
      <button onClick={exportShapes}>Export</button>
      <label for="file-upload">
        Import
      </label>
      <input
        id="file-upload"
        type="file"
        accept=".json"
        onChange={importShapes}
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default Header;
