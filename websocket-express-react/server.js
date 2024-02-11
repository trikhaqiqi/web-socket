// const express = require('express');
// const http = require('http');
// const socketIo = require('socket.io');
// const cors = require('cors');

// const PORT = process.env.PORT || 4000;

// const app = express();
// app.use(cors());

// const server = http.createServer(app);
// const io = socketIo(server, {
//   cors: {
//     origin: '*',
//   }
// });

// io.on('connection', (socket) => {
//   console.log('Client connected');

//   socket.on('disconnect', () => {
//     console.log('Client disconnected');
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });


const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());

const server = http.createServer(app);
const inputX = io(server, {
  cors: {
    origin: '*',
  }
});

inputX.on('connection', (socket) => {
  console.log('Client connected');

  // Fungsi untuk mengirim pesan setiap 10 detik
  const sendPesanPeriodik = () => {
    setInterval(() => {
      socket.emit('pesanDariServer', 'Pesan setiap 10 detik');
    }, 10000); // Setiap 10 detik
  };

  sendPesanPeriodik(); // Memulai pengiriman pesan periodik saat koneksi dibuat

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
