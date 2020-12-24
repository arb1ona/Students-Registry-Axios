const router = require("express").Router();
let Exercise = require("../models/exercise");

router.route("/").get((req, res) => {
  Exercise.find() //mongoose command
    .then((exercises) => res.json(exercises))
    .catch((error) => res.status(400).json("Error:" + error));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });
  newExercise
    .save()
    .then(() => res.json("Exercise added!")) //its a promise
    .catch((error) => res.status(400).json("Error:" + error));
});

module.exports = router;