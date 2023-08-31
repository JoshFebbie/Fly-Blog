const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({dest: 'uploads/'});

const salt = bcrypt.genSaltSync(10);
const secret = '1z2x3c4v5b6c5x4z3';

app.use(cors({credentials: true, origin: "http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser());


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
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
    //logged in
        jwt.sign({ username, id:userDoc._id}, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
            id: userDoc._id,
            username,
        });
     })    
    } else {
        res.status(400).json("Wrong Credentials");
    }
})

app.get("/profile", (req, res) => {
    const { token } = req.cookies;
    jwt.verify(token, secret, {}, (err, payload) => {
        if (err) return res.status(401).json(err);
        res.json(payload);
    });
})

app.post("/logout", (req, res) => {
    res.cookie("token", "").json("Success");
});

app.post("/post", uploadMiddleware.single("file"), (req, res) => {
    res.json(req.files);
});

app.listen(4000, () => console.log("Server running on port 4000"));

//mongodb+srv://joshdfebbie:feVxRRu15zpQDe7M@cluster0.dspooud.mongodb.net/?retryWrites=true&w=majority

//feVxRRu15zpQDe7M