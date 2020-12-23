const express = require("express");
const cors = require("cors");

require("dotenv").config();

//create express server
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
// this is going to allow us parse JSON 'cuz our server
// is going to sending and receiving JSON

// starts the server on a certain port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
