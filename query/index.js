// change history
// hs002 implement the event bus communication
//   when a new post is generated the post info will be sent via http req. to the eventbus service
//   listening on port 4005

const express = require('express');
const app = express();

const cors = require('cors'); 
app.use(cors());
// required to handle the request body
app.use(express.json());

const axios = require('axios');

const posts = {};

app.get('/posts',(req,res)=> {
    console.log(posts);
    res.send(posts);
});

app.post('/events', (req,res)=> {
    const {type, data} = req.body;

    if (type === 'PostCreated') {

        // put code here to get the id and tile info out from data and put it into your data structure posts
         
    }
    if (type === 'CommentCreated') {
        const {id, content, postId} = data;

        // put code here to get the id and content and postId your data structure posts
        
    }
    console.log(posts);
    res.send({});
});

app.listen(4002, () => {
    console.log('Listening on 4002');
});