import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})

const time = new Date();
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]

let today = days[time.getDay()];

// Create endpoint
app.get('/', (req, res) => {
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    if(!slack_name || !track) {
        console.log('Provide slack name and track.');
    }
    // const query = req.query;
    res.status(200).send({
        slack_name,
        "current_day": today,
        "utc_time": time,
        track,
        "github_file_url": "https://github.com/husainridwan/hng-internship/blob/master/stage-one/index.js",
        "github_repo_url": "https://github.com/husainridwan/hng-internship",
        "status_code": 200
    });
});