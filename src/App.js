import React from "react";
import SideBar from "./Component/Bars/SideBar";
import Browse from "./pages/Browse.js";
import NavBar from "./Component/Bars/NavBar";

const App = () => {
  return (
    <div className="container_content">
      <SideBar />
    <div className='container_main'>
      <NavBar />
     <Browse />
     </div>
    </div>

  );
};

export default App;
