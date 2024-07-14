import axios from "axios";
import {useState} from "react"
const Search=()=>{
    const [sdata,setSdata]=useState("")
    const[ mydata,setMydata]=useState([]);

    let ans;

    const handlesubmit=()=>{
        let url="http://localhost:8000/search";
       axios.post(url,{empno:sdata}).then((res)=>{
            setMydata(res.data)
        })
    }
    if(mydata.length>=1){
        ans=mydata.map((key)=>{
            return(<>
            
            
            <h1>emp number:{key.empnumber}</h1>
            <h2>emp name:{key.empname}</h2>
            <h2>emp city:{key.empcity}</h2>
            <h2>salary:{key.empsallary}</h2>
            
            
            </>)
        })
    }
else{
    ans=<font color="red">no record found</font>
}






    return(<>
    <center>
        <h1>Search Employee Record</h1>
        Enter employee number:<input type="text"  id="search" value={sdata}  onChange={(e)=>{setSdata(e.target.value)}}/>
       
        <button onClick={handlesubmit}>search</button>
        <hr/>
        {ans}
    
        </center>
    
    
    </>)
}
export default Search
