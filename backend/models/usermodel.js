const mongoose=require("mongoose");

const userSchema =mongoose.Schema({
    username:String,
    emeil:String
})
module.exports=mongoose.model("user",userSchema)