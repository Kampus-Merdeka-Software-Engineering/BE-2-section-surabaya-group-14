require('dotenv').config();
const PORT = process.env.PORT || 4000;
const express = require('express');
const cors = require('cors');

const contactRoutes = require('./routes/contact');
const hotelRoutes = require('./routes/hotel');
const reservationRoutes = require('./routes/reservation');
const roomRoutes = require('./routes/room');

const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(cors());
app.use(middlewareLogRequest);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/contact', contactRoutes);
app.use('/hotel', hotelRoutes);
app.use('/reservation', reservationRoutes);
app.use('/room', roomRoutes);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`The Server Is Successfully Running On The Port ${PORT}`);
});
