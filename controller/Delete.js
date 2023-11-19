const { response } = require("express");

const Logs= require("../models/Logs");

exports.DeleteLog= async(req,res)=>
{
    try {
       
        const  response= await  Logs.deleteMany();
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