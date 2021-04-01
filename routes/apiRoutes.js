const db = require("../models");
module.exports = (app) => {
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create({})
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    app.get("/api/workouts", (req, res) => {
        db.Workout.find()
            .then((dbWorkout) => {
                res.json(dbWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find()
            .then((dbWorkouts) => {
                res.json(dbWorkouts);
            })
            .catch((err) => {
                res.json(err);
            });
    });

    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({})
            .then((dbWorkout) => res.json(dbWorkout))
            .catch((err) => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        db.Workout.findByIdAndUpdate(
                params.id, { $push: { exercises: body } }, { new: true, runValidators: true }
            )
            .then((updatedWorkout) => {
                res.json(updatedWorkout);
            })
            .catch((err) => {
                res.json(err);
            });
    });
};