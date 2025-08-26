// A simple Node.js web server using Express.
// This is the main application file, often named index.js or app.js.

// Import the Express library to create our web server.
const express = require('express');

// Create a new Express application instance.
const app = express();

// Use the PORT environment variable provided by Render, or default to 3000.
// This is a critical step for deploying to Render.
const port = process.env.PORT || 3000;

// Serve static files from the 'public' directory.
// This allows the server to send HTML, CSS, and JavaScript files to the browser.
app.use(express.static('public'));

// Define a route for the root URL ('/').
// When a user visits the homepage, this function will be executed.
app.get('/', (req, res) => {
  // Send the 'index.html' file from the 'public' directory.
  // We use res.sendFile to ensure the file is sent correctly.
  res.sendFile(__dirname + '/public/index.html');
});

// Start the server and listen for incoming requests on the specified port.
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
