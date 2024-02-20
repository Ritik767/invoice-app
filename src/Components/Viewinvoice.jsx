import { useParams } from "react-router-dom";
import { arrowLeftIcon } from "../assets/icons";

const Viewinvoice = ({handleOpenForm }) => {
    
  const { id } = useParams();

 
 
  const invoiceData = {
    id: id,
    number: `INV-${id}`,
    amount: 1000, // Example data
   
  };
  

  return (

    <div
      className="bg-primary w-full h-screen px-96 space-y-5 "
    >
      <div className="cursor-pointer pt-10 flex items-center gap-6">
        <img src={arrowLeftIcon} alt="" className="pt-1" />
        <button className="text-[#F8F8FB] font-semibold ">Go Back</button>
      </div>
      <div className="bg-[#1E2139] flex items-center justify-end rounded-md min-h-20 gap-2 px-5">
        <button onClick={handleOpenForm} className="font-semibold px-6 py-3 text-[#F8F8FB] bg-[#141625] rounded-full text-center">
          Edit
        </button>
        <button className="font-semibold px-6 py-3 text-[#F8F8FB] bg-[#EC5757] rounded-full text-center">
          Delete
        </button>
        <button className="font-semibold px-6 py-3 text-[#F8F8FB] bg-[#7C5DFA] rounded-full text-center">
          Mark as Paid
        </button>
      </div>
      <div className="bg-[#1E2139] rounded-md px-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col text-[#F8F8FB]">
            <h1>Id</h1>
            <h1 className="text-[#DFE3FA]">Project Description</h1>
          </div>
          <div className="text-end pt-10 pr-3 text-[#DFE3FA]">
            <h1>Street Address</h1>
            <h1>City</h1>
            <h1>Post Code</h1>
            <h1>Country</h1>
          </div>
        </div>
        <div className="flex items-start justify-between pt-5">
          <div className="flex flex-col gap-5">
            <dl className="text-[#DFE3FA]">
              Invoice Date
              <dd className="text-[#f8f8fb]">Date</dd>
            </dl>
            <dl className="text-[#DFE3FA]">
              Payment Due
              <dd className="text-[#f8f8fb]">Date</dd>
            </dl>
          </div>
          <div>
            <dl className="text-[#DFE3FA]">
              Bill to
              <dd className="text-[#f8f8fb]">Name</dd>
              <dd className="text-[#DFE3FA]">StreeAddress</dd>
              <dd className="text-[#DFE3FA]">city</dd>
              <dd className="text-[#DFE3FA]">postcode</dd>
              <dd className="text-[#DFE3FA]">Country</dd>
            </dl>
          </div>
          <div className="pr-3">
            <dl className="text-[#DFE3FA]">
              Sent to <dd className="text-[#f8f8fb]">example@gmail.com</dd>
            </dl>
          </div>
        </div>
        <div className="py-5">
          <table className="table-auto w-full bg-[#252945]">
            <thead>
              <tr>
                <th className="text-[#DFE3FA] font-medium">Items</th>
                <th className="text-[#DFE3FA] font-medium">Qty</th>
                <th className="text-[#DFE3FA] font-medium">Price</th>
                <th className="text-[#DFE3FA] font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-[#f8f8fb]">shoe</td>
                <td className="text-[#f8f8fb]">2</td>
                <td className="text-[#f8f8fb]">$400</td>
                <td className="text-[#f8f8fb]">$800</td>
              </tr>

              <tr className="text-[#f7f6f9] bg-[#0C0E16] !rounded-b-md">
                <td>Amount Due</td>
                <td></td>
                <td></td>
                <td>${invoiceData.amount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Viewinvoice;
