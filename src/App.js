import React, { useState } from 'react';
import UserInputPage from './components/UserInputPage';
import RecommendationPage from './components/RecommendationPage';

const App = () => {
  const [id, setId] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  const handleIdSubmit = (id) => {
    // Make API call to fetch recommendation based on the provided ID
    fetch(`https://uci9x83zqa.execute-api.eu-west-1.amazonaws.com/default/bedrock_test_2?team_id=${id}`)
      .then((response) => response.json())
      .then((data) => setRecommendation(data))
      .catch((error) => console.error('Error fetching recommendation:', error));

    setId(id);
  };

  return (
    <div>
      {recommendation ? (
        <RecommendationPage recommendation={recommendation} />
      ) : (
        <UserInputPage onIdSubmit={handleIdSubmit} />
      )}
    </div>
  );
};

export default App;