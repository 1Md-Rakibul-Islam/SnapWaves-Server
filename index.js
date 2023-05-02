import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const port = process.env.PORT || 5000;


dotenv.config();
const app = express();

// middleware
app.use(cors());
app.use(express.json());


//Route
import UserRoute from './Routes/UserRoute.js'

//Mongoose setup
const uri = `mongodb+srv://SnapWaves:86zg7i5GwvaP1FUu@cluster0.gksews0.mongodb.net/SnapWaves?retryWrites=true&w=majority`;
// // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4n6qqjh.mongodb.net/codersStackBox?retryWrites=true&w=majority`;

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`Server runnin on: ${port}`)))
    .catch((error) => console.log(`${error} did not connect`))



// API

app.use('/user', UserRoute)

