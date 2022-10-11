import React from "react";
import SideBar from "./Component/Bars/SideBar";
import BrowseComponents from "./Component/BrowseComponents/BrowseComponents";
import NavBar from "./Component/Bars/NavBar";


const App = () => {

  return (
    <div className="container_content">
     <SideBar />
    <div className='container_main'>
      <NavBar />
     <BrowseComponents />
     </div>
    </div>

  );
};

export default App;
