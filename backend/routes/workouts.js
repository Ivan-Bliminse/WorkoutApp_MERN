const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

//get all workouts
router.get("/", getWorkouts);

//Get single workout

router.get("/:id", getWorkout);

// Post a new workout

router.post("/", createWorkout);

// Delete workout
router.delete("/:id", deleteWorkout);

// Update the workout
router.patch("/:id", updateWorkout);

module.exports = router;
