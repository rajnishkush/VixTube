import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

async function connect() {
    try {
      const uri = process.env.MONGO_URI;
      await mongoose.connect(uri);
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Error connecting to MongoDB Atlas:', error.message);
      process.exit(1);
    }
  }

app.listen(8800, () => {
    connect();
    console.log('server started');
});