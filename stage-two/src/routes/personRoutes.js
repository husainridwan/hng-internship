import Person from "../models/person.js";
import validatePerson from "../controllers/validation.js";
import express from 'express';


const router = express.Router();

// Endpoint to get all persons
router.get("/", async (req, res) => {
    try {
      const persons = await Person.find().sort("name");
      res.send(persons);
    } catch (err) {
      res.status(500).send("Internal Server Error");
    }
  });
  
// Endpoint to get a single person
router.get("/:name", async (req, res) => {
try {
    const person = await Person.findOne({ name: req.params.name });
    if (person) {
    res.send(person);
    } else {
    res.status(404).send("Person not found.");
    }
} catch (err) {
    res.status(500).send("Internal Server Error");
    }
});

// Endpoint to create a person
router.post("/create", async (req, res) => {
const { error } = validatePerson(req.body);
if (error) {
    res.status(400).send(error.details[0].message);
    return;
    }

try {
    const person = new Person({
    name: req.body.name,
    track: req.body.track,
    });

    const result = await person.save();
    res.send(result);
} catch (err) {
    res.status(500).send("Internal Server Error");
    }
});

// Endpoint to update a person
router.put("/update/:name", async (req, res) => {
try {
    const person = await Person.findOne({ name: req.params.name });
    if (person) {
    person.name = req.body.name;
    person.track = req.body.track;
    const result = await person.save();
    res.send(result);
    } else {
    res.status(404).send("Person not found");
    }
} catch (err) {
    res.status(500).send("Internal Server Error");
}
});

// Endpoint to delete a person
router.delete("/delete/:name", async (req, res) => {
try {
    const person = await Person.findOneAndDelete({ name: req.params.name });
    if (person) {
    res.send(person);
    } else {
    res.status(404).send("Person not found!");
    }
} catch (err) {
    res.status(500).send("Internal Server Error");
}
});

export default router;