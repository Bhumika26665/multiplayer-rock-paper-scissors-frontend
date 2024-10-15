import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Game() {
  const { roomId } = useParams();
  const [playerId, setPlayerId] = useState('');
  const [playerMove, setPlayerMove] = useState('');
  const [opponentMove, setOpponentMove] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Generate a unique player ID when the component mounts
    setPlayerId(Math.random().toString(36).substring(2, 9));
  }, []);

  const submitMove = async (move) => {
    setPlayerMove(move);
    setLoading(true); // Set loading state
    console.log({ roomId, playerId, move });

    try {
      const response = await axios.post('https://multiplayer-rock-paper-scissors-1.onrender.com/submit-move', {
        roomId,
        playerId,
        move,
      });
      if (response.data.result) {
        const otherPlayer = response.data.moves[playerId] === move ? 'opponent' : playerId;
        setOpponentMove(response.data.moves[otherPlayer]);
        setResult(response.data.result);
      } else {
        setResult('Waiting for opponent...');
      }
    } catch (error) {
      console.error(error);
      setResult('Error submitting move. Please try again.'); // User-friendly error message
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div>
      <h1>Game Room: {roomId}</h1>
      <div>
        <h2>Make your move:</h2>
        <button onClick={() => submitMove('rock')} disabled={loading}>Rock</button>
        <button onClick={() => submitMove('paper')} disabled={loading}>Paper</button>
        <button onClick={() => submitMove('scissors')} disabled={loading}>Scissors</button>
      </div>

      {loading && <p>Submitting your move...</p>}

      {result && (
        <div>
          <h2>Result: {result}</h2>
          <p>Your Move: {playerMove}</p>
          <p>Opponent's Move: {opponentMove}</p>
        </div>
      )}
    </div>
  );
}

export default Game;
