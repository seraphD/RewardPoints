import './App.css';
import { useEffect, useState } from 'react';
import { getPoints } from './api/points';

function App() {
  const [reward, setReward] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    let newReward = 0;

    if (points > 50) {
      newReward += Math.min(50, points - 50);
    }

    if (points > 100) {
      newReward += 2 * (points - 100); 
    }

    setReward(newReward);
  }, [points]);

  const getNewPoints = () => {
    getPoints().then(p => setPoints(p))
  }

  return (
    <div className="App">
      <h1 data-testid="points">Current Points: {points}</h1>
      <h1 data-testid="reward">Reward: {reward}</h1>
      <button data-testid="button" onClick={getNewPoints}>get new points</button>
    </div>
  );
}

export default App;
