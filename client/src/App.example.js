// import React, { useEffect } from 'react';
// import io from 'socket.io-client';

// const SERVER_URL = 'http://localhost:4000';

// function App() {
//   useEffect(() => {
//     const socket = io(SERVER_URL);
//     socket.on('connect', () => {
//       console.log('Connected to server');
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>WebSockets React App</h1>
//     </div>
//   );
// }

// export default App;


// ===============================================================================
// import React, { useEffect } from 'react';
// import io from 'socket.io-client';

// const SERVER_URL = io('http://localhost:7878');

// function App() {
//   useEffect(() => {
//     // Membuat koneksi Socket.IO saat komponen dimuat
//     const socket = io(SERVER_URL);

//     // Menutup koneksi Socket.IO saat komponen dibongkar
//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>WebSockets React App</h1>
//     </div>
//   );
// }

// export default App;


// =========================================== Test terima pesan ===========================================================
// import React, { useEffect, useState } from 'react';
// import io from 'socket.io-client';

// const SERVER_URL = 'http://localhost:4000';

// function App() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const socket = io(SERVER_URL);
//     socket.on('connect', () => {
//       console.log('Connected to server');
//     });

//     socket.on('pesanDariServer', (pesan) => {
//       console.log('Received message:', pesan);
//       setMessage(pesan); // Mengatur pesan yang diterima dari server
//     });

//     return () => {
//       socket.disconnect();
//     };
//   }, []);

//   return (
//     <div className="App">
//       <h1>WebSockets React App</h1>
//       <p>Pesan dari Server: {message}</p>
//     </div>
//   );
// }

// export default App;

// =======================================================================================
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const SERVER_URL = 'http://localhost:7878';

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