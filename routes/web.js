import express from "express";
import StudentInfo from "../controller/studentController.js";

const routes=express.Router()

routes.get('/',StudentInfo.getAllDoc)
routes.post('/',StudentInfo.createDoc)
routes.get('/edit/:id',StudentInfo.editDoc)
routes.post('/update/:id',StudentInfo.UpdateDoc)
routes.post('/delete/:id',StudentInfo.deleteDoc)



export default routes


