const express = require('express');
const app = express();
const port = 3000;

// Middleware to check working hours
const checkWorkingHours = (req, res, next) => {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay();
    const currentHour = currentDate.getHours();
  
    if (dayOfWeek >= 1 && dayOfWeek <= 5 && currentHour >= 9 && currentHour < 17) {
      next(); // Continue with the request
    } else {
      res.status(403).send('This web application is only available during working hours.');
    }
  };
  
  // Apply the middleware to all routes
  app.use(checkWorkingHours); 
  
  // Serve static CSS files
  app.use(express.static('public'));
  
  // Define routes
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });
  
  app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/services.html');
  });
  
  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
  });
  
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:3000`);
  });
  
  
  
  
  
  
  