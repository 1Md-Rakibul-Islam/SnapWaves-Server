import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

// middleware
app.use(cors());
app.use(express.json());


//Route
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'

//Mongoose setup
const uri = `mongodb+srv://SnapWaves:86zg7i5GwvaP1FUu@cluster0.gksews0.mongodb.net/SnapWaves?retryWrites=true&w=majority`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server runnin on: ${port}`)))
    .catch((error) => console.log(`${error} did not connect`))



// API
app.use('/users', UserRoute);
app.use('/posts', PostRoute);