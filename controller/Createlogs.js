const Logs= require("../models/Logs");
exports.CreateLogs= async(req,res)=>
{
   try {
    const {level}= req.body;
    
    
    const Log= new Logs(
        {
            level
        }
    ) 
    
    
    const response= await Log.save();

    res.status(200).json({
        Log,
        response,
        status:true,

    })
    
   } catch (error) {

    
    res.status(500).json({
     
        status:false,
        error,
        message:"not saved"

    })
   }
}