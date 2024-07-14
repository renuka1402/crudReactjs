const mongoose=require("mongoose");

const profileSchema=mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user,
        unique:true

    },
    firstname:String,
    lastname:String,
    

})