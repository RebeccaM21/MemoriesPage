import bodyParser from "body-parser";
import cors from "cors"; 
import dotenv from 'dotenv'; 
import express from "express";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js"; 

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const app = express(); 

app.use('/posts', postRoutes); 

app.use(bodyParser.json({ limit: "30mb", extended: true })); 
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); 
app.use(cors()); 

// MongoDB cloud Atlas - MongoDB will host my database on their cloud

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const main = async () => {
    console.log(`connecting to database at ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI)
} 
    
    main().catch((error) => console.log(error.message)); 

const server = app.listen(PORT, HOST, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`app listening at http://${SERVERHOST}:${SERVERPORT}`);
})

    export default server; 
 