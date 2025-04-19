import dotenv from 'dotenv';
dotenv.config({ path: './config/config.env' });

import express from 'express';
import path from 'path';
import app from './app.js';

// Required when using ES modules (import)
const __dirname = path.resolve();

// Serve static files from the React frontend build folder
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
