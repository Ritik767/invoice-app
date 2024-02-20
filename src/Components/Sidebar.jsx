import { moonIcon } from "../assets/icons";
import avatar from "../assets/images/avatar.jpg";

const Sidebar = () => {
  return (
  
    <div className="fixed left-0 h-screen w-20 m-0 flex flex-col items-center justify-end pb-8 gap-12 bg-primaryInput shadow rounded-r-lg">
      <img src={moonIcon} alt="" className="rounded-full h-11 w-11" />
      <div> 
      <img src={avatar} alt="" className="rounded-full h-12 w-12" />
     </div>
    </div>
    
    
  );
};

export default Sidebar;
