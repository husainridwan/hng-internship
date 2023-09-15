import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from "./src/routes/personRoutes.js";


dotenv.config();
const app = express();
const port = 5000;

//Connect to database
mongoose.connect(process.env.DB_URI, 
                { useNewUrlParser: true, 
                useUnifiedTopology: true })
                .then(() => {
                    console.log("Connected to database.");
                })
                .catch((err) => {
                    console.log("Error connecting to database.", err);
                })

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
})


app.use("/api", router);
// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("*", (req, res) => {
    res.status(404).send("Page not found.");
});

export default app;