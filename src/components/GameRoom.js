import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Import useParams to get roomId from URL
import '../styles/GameRoom.css';  // Adjust this path based on your directory structure
  // Import the CSS for styling

function GameRoom() {
  const { roomId } = useParams();  // Get roomId from the URL
  const [roomData, setRoomData] = useState(null);
  const [playerId, setPlayerId] = useState('');
  const [playerMove, setPlayerMove] = useState('');
  const [opponentMove, setOpponentMove] = useState('');
  const [result, setResult] = useState('');

  // Generate a playerId when the component mounts
  useEffect(() => {
    setPlayerId(Math.random().toString(36).substring(2, 9));
  }, []);

  // Fetch room data from the backend
  useEffect(() => {
    const fetchRoomData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/room/${roomId}`);
        setRoomData(response.data);
      } catch (error) {
        console.error('Error fetching room data:', error);
      }
    };

    fetchRoomData();
  }, [roomId]);

  // Function to submit a move
  const submitMove = async (move) => {
    setPlayerMove(move);
    try {
      const response = await axios.post('http://localhost:3001/submit-move', {
        roomId,
        playerId,
        move,
      });
      if (response.data.result) {
        const otherPlayerId = Object.keys(response.data.moves).find(id => id !== playerId);
        setOpponentMove(response.data.moves[otherPlayerId]);
        setResult(response.data.result);
      } else {
        setResult('Waiting for opponent...');
      }
    } catch (error) {
      console.error('Error submitting move:', error);
    }
  };

  return (
    <div className="game-container">
      <h1>Game Room: {roomId}</h1>

      <div>
        <h2>Make your move:</h2>
        <button onClick={() => submitMove('rock')}>Rock</button>
        <button onClick={() => submitMove('paper')}>Paper</button>
        <button onClick={() => submitMove('scissors')}>Scissors</button>
      </div>

      {result && (
        <div className="result-text">
          <h2>Result: {result}</h2>
          <p>Your Move: {playerMove}</p>
          <p className="opponent-move">Opponent's Move: {opponentMove}</p>
        </div>
      )}

      <h1>Room Information</h1>
      {roomData ? (
        <pre>{JSON.stringify(roomData, null, 2)}</pre>
      ) : (
        <p className="loading-text">Loading room data...</p>
      )}
    </div>
  );
}

export default GameRoom;
