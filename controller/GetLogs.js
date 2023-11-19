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
        const {level,message,resourceId,timestamp,traceId,spanId,commit,id}= req.body;
        console.log(level,message,resourceId,timestamp,traceId,spanId,commit,id);
        let response;
        if(level)
        {
              response= await  Logs.find({level});

        }
        if(message)
        {
              response= await  Logs.find({message});
        }
        if(resourceId)
        {
            response= await  Logs.find({resourceId});

        }
        if(timestamp)
        {
            response= await  Logs.find({timestamp});

        }
       if(commit)
       {
        response= await  Logs.find({commit});

       }
       if(spanId)
       {
        response= await  Logs.find({spanId});

       }
       if(traceId)
       {
        response= await  Logs.find({traceId});


       }
       if(id)
       {
        response= await  Logs.find({_id:id});

       }
       

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