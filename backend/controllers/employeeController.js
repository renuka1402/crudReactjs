
const stuModel=require("../models/employeeModel");

const InsertData=async(req,res)=>{
    let empNo=req.body.empno;
    let empNm=req.body.empnm;
    let empCt =req.body.empct;
    let empSell=req.body.empsell;
    const mydata=new stuModel({
        empnumber:empNo,
        empname:empNm,
        empcity:empCt,
         empsallary:empSell
    })
    mydata.save();
   // let myData=({rollno:roll,name:name,city:city,fees:fees})
   // console.log(myData);
    res.json(mydata);
}
const DisplayData=async(req,res)=>{
    stuModel.find().then((mydata)=>{
        res.json(mydata);
    })
}


const Update=async(req,res)=>{
    stuModel.find().then((mydata)=>{
        res.json(mydata);
    })
}


const Delete= async(req,res)=>{
    let id= req.body.id;
    stuModel.findByIdAndDelete(id).then((myData)=>{
        res.json(myData);
    })
}
const EditData=async(req,res)=>{
    let id= req.body.id;
    stuModel.findById(id).then((myData)=>{
        res.json(myData)
    })
}
const upData=async(req,res)=>{
    let Emid=req.body._id;
    let empNo=req.body.empnumber;
    let empNm=req.body.empname;
    let empCt =req.body.empcity;
    let empSell=req.body.empsallary;
    stuModel.findByIdAndUpdate(Emid,{
        empnumber:empNo,
        empname:empNm,
        empcity:empCt,
         empsallary:empSell
    }).then((mydata)=>{

   res.send("save")
    })

}
const empSearch=async(req,res)=>{
    let emno=req.body.empno;
    stuModel.find({empnumber:emno}).then((mydata)=>{
        res.json(mydata)
    })
}

module.exports={
    InsertData,
    DisplayData,
    Update,
    Delete,
    EditData,
    upData,
    empSearch
}