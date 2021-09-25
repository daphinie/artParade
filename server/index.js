import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import artsRoutes from './routes/arts.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json({ limit: "25mb", extended: true}));
app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(cors());
app.use('/arts', artsRoutes);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)))
    .catch((error) => console.log(error.message));

