const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const courses = require('./data/courses.json');
const courseDetails = require('./data/details.json');

app.use(cors());

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const courseId = courses.find(c => c.id == id);
    res.send(courseId);
})

app.get('/details', (req, res) => {
    res.send(courseDetails)
})

app.get('/details/:id', (req, res) => {
    const id = req.params.id;
    const detailsId = courseDetails.find(d => d.course_id == id)
    res.send(detailsId);
})

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})