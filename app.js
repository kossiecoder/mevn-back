import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
const app = express();
app.use(bodyParser.json());

app.post('/auth/signup', (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    res.json({
        message: 'success'
    })
});

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0-sptrf.mongodb.net/taskmanager?retryWrites=true&w=majority`).then(() => {
    app.listen(3000, () => console.log('listening to port 3000'));
}).catch(err => console.log(err));

