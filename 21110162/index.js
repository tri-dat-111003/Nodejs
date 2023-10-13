const express = require('express');
const app = express();
const port = 5000;

// Middleware log
const logRequest = (req, res, next) => {
  const method = req.method; // Lấy phương thức (GET hoặc POST)
  const url = req.originalUrl; // Lấy URL

  console.log(`Received a ${method} request to ${url}`);
  next(); // Tiếp tục xử lý request
};

// Sử dụng middleware log trước các route
app.use(logRequest);

app.use(express.json());

// Import routes
const routes = require('./routes/routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
