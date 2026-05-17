import type { Request, Response } from "express";
import { courses } from "../data/courses.js";

export const coursesController =(req:Request, res:Response)=>{
    res.json({
        success:true,
        count:courses.length,
        data:courses
    })
}