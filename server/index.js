import express from "express";
import cors from "cors"; 
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"; 

const app = express(); 

app.use('/posts', postRoutes); 

app.use(bodyParser.json({ limit: "30mb", extended: true })); 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 
app.use(cors()); 

// MongoDB cloud Atlas - MongoDB will host my database on their cloud

const CONNECTION_URL = 'mongodb+srv://beckympi:beckympi123@cluster0.cr6swu1.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000; 

mongoose.connect(CONNECTION_URL, { useNewURLParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message)); 