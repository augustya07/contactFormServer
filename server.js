import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose'
import asyncHandler from 'express-async-handler'
import ContactForm from './cnform.js';

const app =express()

app.use(cors())

app.use(express.json())

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://augustya:<password>@cluster0.o1hck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

connectDB()
const PORT = 5000

app.post('/' , asyncHandler (async (req,res ) => {
  const { firstName, lastName, email, phoneNumber, message} = req.body

  const form = await ContactForm.create({
    firstName,
    lastName,
    email,
    phoneNumber,
    message
  })

  res.status(201).json (form)

}))


app.listen(
  PORT,
  console.log(
    `Server running inmode on port ${PORT}`
  )
)
