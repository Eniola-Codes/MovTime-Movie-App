import BrowseComponents from "../Components/BrowseComponents/BrowseComponents";
import SideBar from "../Components/Bars/SideBar";
import NavBar from "../Components/Bars/NavBar";

export default function Home() {
  return (
    <div className="container_content">
      <SideBar />
      <div className="container_main">
        <NavBar />
        <BrowseComponents />
      </div>
    </div>
  );
}
