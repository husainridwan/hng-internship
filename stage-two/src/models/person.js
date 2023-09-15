import mongoose from 'mongoose';

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    track: {
        type: String,
        required: true,
        enum: ["backend", "frontend", "design", "mobile", "marketing", "content"]
    }
});

const Person = mongoose.model("Person", personSchema);
export default Person;