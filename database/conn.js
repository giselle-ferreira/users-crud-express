import mongoose from "mongoose";

try {
    mongoose.connect(process.env.DB_URI)
    console.log('Connected to Database')
} catch (error) {
    console.log('Error connecting to Databse', error)
}


