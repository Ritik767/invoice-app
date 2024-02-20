// import avatar from "../assets/images/avatar.jpg";
import { useState } from "react";
import { mainInvIcon } from "../assets/icons";
import { arrowDownIcon } from "../assets/icons";
import { plusIcon } from "../assets/icons";
import List from "./List";
// import Viewinvoice from "./Viewinvoice";



const Invoice = ({handleOpenForm}) => {
  // const [view, setView] = useState("");
  const view = null;
  return (
    <div className="bg-primary w-full h-screen px-40">
      <div className="text-[#FFF] flex items-center justify-between mx-28 pt-14 pb-10">
        <div className="">
          <h1 className="text-[56px] font-bold">Invoices</h1>
          <h1 className="text-[20px]">No invoices</h1>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center justify-center gap-3">
            <h1 className="text-[20px] font-semibold"> Filter by status</h1>
            <img src={arrowDownIcon} alt="" className="pt-[3px] w-5 h-4 cursor-pointer" />
          </div>
          {/* <div className="flex items-center justify-between bg-primaryBtn rounded-full px-5 py-3 cursor-pointer">
            <div className="bg-[#F8F8FB] rounded-full px-3 py-2 mt-1">
              <img
                src={plusIcon}
                alt=""
                className="w-[14px] h-5 text-primaryBtn cursor-pointer"
              />
            </div>
            <button className="text-[20px] font-semibold"
            onClick={handleOpenForm}
            >New Invoice</button>
          </div> */}
          <button onClick={handleOpenForm} className="flex items-center bg-[#7C5DFA] text-[20px] font-semibold text-white py-3 px-4 rounded-full gap-3">
      <img
                src={plusIcon}
                alt=""
                className="bg-[#f8f8fb] rounded-full py-2 px-2 mt-1"
              />
      New Invoice
    </button>
        </div>
      </div>

      {view ? <div className="flex justify-center flex-col items-center gap-4">
        <img src={mainInvIcon} alt="" />
          <h1 className="text-[#F8F8FB] text-[20px] font-[Spartan] mt-10" >There is nothing here</h1>
          <p className="text-[#f5f5fe] text-[16px] font-[Spartan] w-50 text-pretty">
           &nbsp; Create an invoice by clicking the <br /><span className="font-bold cursor-pointer">New Invoice</span> button and
            get started
          </p>
        
      </div>: <List/>}
    </div>
  );
};

export default Invoice;
