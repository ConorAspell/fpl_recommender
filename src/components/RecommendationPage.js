import React from 'react';

const RecommendationPage = ({ recommendation }) => {
  const { recommended_change, recommended_starting_team, captain, substitutions, bedrock_text } = recommendation;

  return (
    <div>
      <h1>Recommended Team Change</h1>
      <p>Recommended change: {recommended_change}</p>
      <h2>Recommended Starting Team</h2>
      <ul>
        {recommended_starting_team.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
      <h2>Captain</h2>
      <p>{captain}</p>
      <h2>Substitutions</h2>
      <ul>
        {substitutions.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
      <h2>Bedrock Text</h2>
      <p>{bedrock_text}</p>
    </div>
  );
};

export default RecommendationPage;