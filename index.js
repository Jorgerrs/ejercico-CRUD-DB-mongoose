require('dotenv').config();
const express = require('express');
const connectDB = require('./config/config');
const tasksRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/', tasksRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor en http://localhost:${PORT}`);
  });
});