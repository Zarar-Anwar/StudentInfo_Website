import express from "express";
import mongoose from "mongoose";
import {join} from "path"
import connectDb from "./db/dbConnection.js";
import web from './routes/web.js'


const app=express()
const port=process.env.port
const DATABASE_URL=process.env.DATABASE_URL
app.set('view engine','ejs')

connectDb(DATABASE_URL)

app.use(express.urlencoded({extended:false}))


app.use('/Student',express.static(join(process.cwd(),'public')))
app.use('/Student/edit',express.static(join(process.cwd(),'public')))

app.use('/Student',web)

app.listen(port,(req,res)=>{
    console.log(`The Server is Ruuning at http://localhost:${port}`)
})