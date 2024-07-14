import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Insert from "./Insert";
import Display from "./Display";
import Update from "./update";
import Edit from "./edit";
import Search from "./search";
import "./main.css"

const App=()=> {

  return (
   <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="edit/:id" element={<Edit/>}/>
    <Route path="search" element={<Search/>}/>
  </Route>
</Routes>
</BrowserRouter>
   </>
  );
}

export default App;
