// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a GET route to retrieve comments
app.get('/comments', (req, res) => {
  res.json([
    {
      id: 1,