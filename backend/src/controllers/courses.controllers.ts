import type { Request, Response } from "express";
import { courses } from "../data/courses.js";

export const coursesController =(req:Request, res:Response)=>{
    res.json({
        success:true,
        count:courses.length,
        data:courses
    })
}

export const getCourseBySlugController =(req:Request , res:Response)=>{

    const {slug} = req.params;

    const course = courses.find((cr) =>cr.slug ===slug);

    if(!course){
        return res.status(404).json({
            success:false,
            message:"Course not found"
        })
    }
    res.json({
        success:true,
        data:course
    })
}