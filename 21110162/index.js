const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

// Import routes
const routes = require('./routes/routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
