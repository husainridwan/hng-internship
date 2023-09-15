import Joi from "joi";

const tracks = {
    backend: "backend",
    frontend: "frontend",
    design: "design",
    mobile: "mobile",
    marketing: "marketing",
    content: "content"
}

const validatePerson = (person) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        track: Joi.string().valid(...Object.values(tracks)).required()
    })
    return schema.validate(person);
};

export default validatePerson;