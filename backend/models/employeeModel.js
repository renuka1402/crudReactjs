
var mongoose =require("mongoose");

const stuSchema=new mongoose.Schema({
   empnumber:String,
    empname:String,
    empcity:String,
    empsallary:Number
})
module.exports=mongoose.model("employee",stuSchema);