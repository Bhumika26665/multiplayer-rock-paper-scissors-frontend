import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateRoom() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = async () => {
    try {
      const response = await axios.post('https://multiplayer-rock-paper-scissors-1.onrender.com/create-room');
      setRoomId(response.data.roomId);
    } catch (error) {
      console.error('Error creating room:', error);
    }
  };

  const handleStartGame = () => {
    if (roomId) {
      navigate(`/game/${roomId}`);
      console.log(`Navigating to game with Room ID: ${roomId}`);
    }
  };

  return (
    <div>
      <h1>Create a New Room</h1>
      {roomId ? (
        <div>
          <p>Room ID: {roomId}</p>
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      ) : (
        <button onClick={handleCreateRoom}>Generate Room ID</button>
      )}
    </div>
  );
}

export default CreateRoom;
