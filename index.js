import express from "express";
import 'dotenv/config'
import cors from "cors";
import expressOasGenerator from "express-oas-generator"; 
import { dbConnection } from "./config/db.js";
import { eventRouter } from "./router/msderouter.js";


// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs:true,
    tags: [ 'event'],
  
});


// create middleware
app.use(cors());
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