import mongoose from "mongoose"
import * as dotenv from 'dotenv'
dotenv.config()

const ConnectionString = process.env.mongodb_url

export const dbConnection = () => {
    mongoose.connect(ConnectionString).then(() => {
        console.log('database is connected');
    })
};
