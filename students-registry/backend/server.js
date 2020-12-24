const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

//create express server
const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
// this is going to allow us parse JSON 'cuz our server is going to sending and receiving JSON
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully!");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/users", usersRouter);
app.use("/exercises", exercisesRouter);

// starts the server on a certain port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
