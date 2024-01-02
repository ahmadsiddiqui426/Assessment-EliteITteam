import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import connectDB from './mongoDB/connect.js';
import ProductModel from './mongoDB/ProductRating.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  res.send('Hello World!');
});

app.get('/api/getAllRatings', async (req, res) => {
  try {
    // Retrieve all ratings from the database
    const allRatings = await ProductModel.find();
    res.status(200).json(allRatings);
  } catch (error) {
    console.error('Error retrieving ratings:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/api/saveRating', async (req, res) => {
  try {
    const { name, email, productName, stars } = req.body;

    console.log(name, email, productName, stars);

    // Create a new instance of the ProductModel
    const newRating = new ProductModel({
      name: name,
      email: email,
      ProductName: productName,
      stars: stars,
    });

    // Save the new rating to the database
    await newRating.save();

    res.status(201).json({ message: 'Rating saved successfully' });
  } catch (error) {
    console.error('Error saving rating:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(3001, async () => {
  try {
    await connectDB();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Could not connect to MongoDB');
    console.error(error);
  }
  console.log('Server is running on port 3001');
});
