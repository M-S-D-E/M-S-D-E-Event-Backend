import express from "express";
import mongoose from "mongoose";
import 'dotenv/config'
import expressOasGenerator from "express-oas-generator"; 
import { dbConnection } from "./config/db.js";
import { eventRouter } from "./router/msderouter.js";


// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs:true,
    tags: [ 'event'],
   // mongooseModels: mongoose.modelNames(),
});


// create middleware
app.use(express.json());

dbConnection();
app.use(eventRouter);



//  Use Routes
app.use(eventRouter);
expressOasGenerator.handleRequests();
app.use((req,res) => res.redirect('/api-docs/'));

// listening for incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})