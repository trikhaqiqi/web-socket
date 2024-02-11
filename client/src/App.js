import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:4000';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const socket = io(SERVER_URL);
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('pesanDariServer', (pesan) => {
      console.log('Received message:', pesan);
      setMessage(pesan); // Mengatur pesan yang diterima dari server
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <h1>WebSockets React App</h1>
      <p>Pesan dari Server: {message}</p>
    </div>
  );
}

export default App;