import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
           <div>
    
    <div className="mainclass1">
      
    <ul>
        <li> <Link to="home">Home</Link></li>
     
        <li><Link to="insert">Insert Data</Link></li>
       
        <li><Link to="display">Display Data</Link></li>
        <li><Link to="update">Update Data</Link></li>
        
      
       <li> <Link to ="search"><input type="search"  id="box" placeholder="Search Data"/></Link></li>
        
    </ul>


    </div>
</div>
<div id="showdata">
<Outlet/> 
</div>
<br/><br/><br/>

<div className="footer">
    <center>
   
    <br/>
    Contact No:-97860453434<br/>

    www.mycompany@.com
    <br/> <br/> <br/> <br/>
    </center>

</div>
        </>
    )
}
export default Layout;