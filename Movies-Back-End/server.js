const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerConfig');
connectDb();
const app = express();

// Configure CORS to allow requests from http://localhost:3000
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/favoriteMoviess", require("./routes/favoriteMoviesRoutes"));
// Serve Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
