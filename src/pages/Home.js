import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleJoinRoom = () => {
    if (roomId) {
      navigate(`/game/${roomId}`);
    } else {
      alert("Please enter a Room ID."); // Alert for empty Room ID
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Rock Paper Scissors Game</h1>
      <button onClick={() => navigate('/create-room')}>Create Room</button>
      <div style={{ margin: '20px 0' }}>
        <input
          type="text"
          placeholder="Enter Room ID"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          style={{ padding: '10px', width: '200px' }}
        />
        <button onClick={handleJoinRoom} style={{ marginLeft: '10px' }}>Join Room</button>
      </div>
    </div>
  );
}

export default Home;
