require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

const UserSchema = new mongoose.Schema({
  fullName: String,
  username: String,
  age: Number,
  country: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/signup', async (req, res) => {
  const { fullName, username, age, country, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ fullName, username, age, country, email, password: hashedPassword });

  try {
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch(err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    const isCorrectPassword = await bcrypt.compare(password, user.password);

    if (!isCorrectPassword) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.json(user);
  } catch(err) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  app.listen(5000, () => {
    console.log('Server listening on port 5000');
  });
})
.catch((err) => console.log(err));
