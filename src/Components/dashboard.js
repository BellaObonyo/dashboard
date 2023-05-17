
import '../Components/dashboard.css';
import HomeLogo from './home.js';
import Sidebar from "./Sidebar";
import "../App.css";



function Dashboardcontainer() {
  return (
    <div className="sidebarcontents">
        <div> 
        <HomeLogo/>
        </div>
        <Sidebar/>


    </div>
   
  );
}

export default Dashboardcontainer;

