import React from 'react';

const Header = ({ title, setTitle, username, setUsername, saveToServer, loadFromServer }) => {
  return (
    <div className="header">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Painting Title"
      />
      
      <select value={username} onChange={(e) => setUsername(e.target.value)}>
        <option value="alice">alice</option>
        <option value="bob">bob</option>
      </select>

      <button onClick={saveToServer}>Save to Server</button>
      <button onClick={loadFromServer}>Load from Server</button>
      
    </div>
  );
};

export default Header;
