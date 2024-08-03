const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User');
const app = express();
const port = 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.post('/signup', async (req, res) => {
    console.log('Request received with body:', req.body);  // Log the request body
    const { email, password } = req.body;
    if (!email || !password) {
        console.log('Email or password missing');
        return res.status(400).send({ error: 'Email and password are required' });
    }
    try {
        const user = new User({ email, password });
        await user.save();
        console.log('User created successfully');
        res.status(201).send({ message: 'User created' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(400).send({ error: 'Failed to create user' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ error: 'Email and password are required' });
    }
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            return res.status(200).send({ message: 'Login successful', user });
        } else {
            return res.status(400).send({ error: 'Invalid email or password' });
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).send({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
