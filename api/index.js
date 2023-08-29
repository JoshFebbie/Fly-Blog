const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = '1z2x3c4v5b6c5x4z3';

app.use(cors({credentials: true, origin: ""}));
app.use(express.json());

mongoose.connect('mongodb+srv://joshdfebbie:feVxRRu15zpQDe7M@cluster0.dspooud.mongodb.net/?retryWrites=true&w=majority')

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
          username,
          password: bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
    //logged in
        jwt.sign({ username, id:userDoc._id}, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json("ok");
     })    
    } else {
        res.status(400).json("Wrong Credentials");
    }
})

app.listen(4000)

//mongodb+srv://joshdfebbie:feVxRRu15zpQDe7M@cluster0.dspooud.mongodb.net/?retryWrites=true&w=majority

//feVxRRu15zpQDe7M