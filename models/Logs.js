const mongoose=require("mongoose");

const LogsSchema=new mongoose.Schema({
    level:
    {
      type:[String],
      required:true
    },
    message:{
        type:String
    },
    resourceId:{
        type:String,

    },
    timestamp:{
        // think
    },
    traceId:
    {

    },
    spanId:{

    },
    commit:{

    },
    metadata:{

    }
});
module.exports= mongoose.model("DataLogs",LogsSchema);