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
        const {level,message,resourceId,timestamp,traceId,spanId,commit,metadata}= req.body;
        console.log(level,message,resourceId,timestamp,traceId,spanId,commit,metadata)
        const  response= await  Logs.find({level});
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