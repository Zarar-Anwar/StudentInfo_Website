import mongoose from 'mongoose'

const StudentSchema=new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    age:{type:Number,required:true,min:18,max:60},
    fees:{type:mongoose.Decimal128,required:true},
})

const StudentModel=mongoose.model('student',StudentSchema)

export default StudentModel 
