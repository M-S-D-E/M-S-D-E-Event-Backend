import express from "express";
import 'dotenv/config'
import { dbConnection } from "./config/db.js";
import { eventRouter } from "./router/msderouter.js";


// create express app
const app = express();

// create middleware
app.use(express.json());

dbConnection();
app.use(eventRouter);


// Define routes
app.get('/', (req,res) => {
    res.json('Welcome to Event');
});

// listening for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})