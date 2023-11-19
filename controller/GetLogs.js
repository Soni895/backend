const { response } = require("express");

const Logs= require("../models/Logs");

exports.GetAllLogs= async(req,res)=>
{
    try {
        const  response= await  Logs.find({});
        console.log(response);

       return  res.status(200).json(
            {
                status:true,
                response,
            }
        );
        
    } catch (error) {
        
        return res.status(500).json(
            {
                status:false,
                error,
                error:" Log exist",
            }
        )
        
    }
}

exports.GetLogs= async(req,res)=>
{
    try {
        const {type,value}=req.body;
        console.log(type);


        let response=await Logs.find({[type]:value});
        
        console.log(response);
       return  res.status(200).json(
            {
                status:true,
                response,
            }
        );
                
    } catch (error) {
        
        return res.status(500).json(
            {
                status:false,
                error,
                error:" Log not found",
            }
        )
        
    }
}