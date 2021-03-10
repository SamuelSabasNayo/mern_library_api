const express = require('express');
const { config } = require('dotenv');
const connectToDB = require('./database/db');
const ErrorsMiddleware = require('./middleware/errorMiddleware');
const LibraryError = require('./utils/libraryError');
const bookRoutes = require('./routes/bookRoutes');

// initialize the app
const app = express();

process.on('uncaughtException', (error) => {
  console.log('Uncaught Exception.....🌶  🎭 🖊 🐤 stopping the server.....');
  console.log(error.name, error.message);
  
  process.exit(1);
});

// enable app to parse JSON
app.use(express.json());

config();

connectToDB();

// declare PORT
const PORT = process.env.PORT || 5000;

// mount/ create Routes
app.get('/test', (req, res) => {
  res.json({
    Hi: "Welcome to the MERN Library API"
  });
});

app.use('/api/v1/', bookRoutes);

// error middleware 
app.all('*', (req, res, next) => {
  next(new LibraryError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use(ErrorsMiddleware);

// make the server listen on the declared PORT variable
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} !`));

process.on('unhandledRejection', (error) => {
  console.log('Unhandled Rejection.....🌶 🎭 🖊 🐤 stopping the server.....');
  console.log(error.name, error.message);
  
  server.close(() => {
    process.exit(1);
  });
});


