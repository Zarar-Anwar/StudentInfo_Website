import StudentModel from "../models/models.js"

class StudentInfo{
    static createDoc= async(req,res)=>{
        try {
            // With Destruction 

            // const {name,age,fees}=req.body
            // const doc=new StudentModel({
            //     name:name,
            //     age:age,
            //     fees:fees,
            // })
            
            // Non Destuction
            const doc=new StudentModel(req.body)
            
            const result=await doc.save()
            
            res.redirect('/Student')
        } 
        catch (error) {
            console.log(error)
        }
    }


    static getAllDoc= async(req,res)=>{

        const result=await StudentModel.find();   
        
        res.render('index',{data:result})

    }

    
    static editDoc= async(req,res)=>{
        try {
            const result=new StudentModel.findById(req.params.id)
            res.render('edit',{data:result})
        } catch (error) {
            console.log(error)
        }

    }


    static UpdateDoc=async(req,res)=>{
        try {
            const result=await StudentModel.findByIdAndUpdate(req.params.id,req.body)
            res.redirect('/Student')
        } catch (error) {
            console.log(error)
            
        }

    }


    static deleteDoc=async(req,res)=>{
        try {
            const result=await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect('/Student')
        } catch (error) {
            console.log(error)
            
        }
    }
}


export default StudentInfo