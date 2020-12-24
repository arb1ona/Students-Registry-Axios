const router = require("express").Router();
let Exercise = require("../models/exercise");
//GET
router.route("/").get((req, res) => {
  Exercise.find() //mongoose command
    .then((exercises) => res.json(exercises))
    .catch((error) => res.status(400).json("Error:" + error));
});
//POST
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
//GET by iD
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id) //mongoose command
    .then((exercise) => res.json(exercise))
    .catch((error) => res.status(400).json("Error:" + error));
});
//DELETE
router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id) //mongoose command
    .then(() => res.json("Exercise Deleted"))
    .catch((error) => res.status(400).json("Error:" + error));
});
// EDIT
router.route("/update/:id").post((req, res) => {
  Exercise.findById(req.params.id) //mongoose command
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!")) //its a promise
        .catch((error) => res.status(400).json("Error:" + error));
    })
    .catch((error) => res.status(400).json("Error:" + error));
});

module.exports = router;
