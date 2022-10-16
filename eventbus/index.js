const express = require('express');
const axios = require('axios');

const app = express();

const events = [];
// required to handle the request body
app.use(express.json());


app.post('/events', async(req, res) => {
    const event = req.body;

    // put code in here to publish the data to all services (to posts, comments, query)
    // ....


});
app.get('/events', (req, res) => {
  console.log(events);
  res.send(events);
});

app.listen(4005, () => {
    console.log('Listening to 4005');
});