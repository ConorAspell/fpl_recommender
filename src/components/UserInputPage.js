import React, { useState } from 'react';

const UserInputPage = ({ onIdSubmit }) => {
  const [id, setId] = useState('');

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = () => {
    onIdSubmit(id);
  };

  return (
    <div>
      <h1>Fantasy Premier League Recommender</h1>
      <p>Enter your Fantasy Premier League ID to get a recommended team change.</p>
      <input type="text" value={id} onChange={handleIdChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UserInputPage;
