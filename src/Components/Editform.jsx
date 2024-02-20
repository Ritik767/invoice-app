import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Editform = ({isOpen}) => {
  const showToastMessage = () => toast("Changes Saved !") 
  const [inputData, setInputData] = useState({
    streetAddress:"",
    city:"",
    postCode:"",
    country:"",
    clientName:"",
    clientEmail:"",
    streetAddress1:"",
    city1:"",
    postCode1:"",
    country1:"",
    invoiceDate:"",
    paymentTerms:"",
    projectDescription:""

  })
const handleDiscard=()=>{
  setInputData({
    streetAddress:"",
    city:"",
    postCode:"",
    country:"",
    clientName:"",
    clientEmail:"",
    streetAddress1:"",
    city1:"",
    postCode1:"",
    country1:"",
    invoiceDate:"",
    paymentTerms:"",
    projectDescription:""
  })
}

  const [error, setError] = useState({});
  const [isValidate, setIsValidate] = useState(false);
  const validation = (value) => {
    let newErr = {};
    if (!value.streetAddress) {
      newErr = { ...newErr, streetAddress: "No streetAddress" };
    }
    if (!value.city) {
      newErr = { ...newErr, city: "No city" };
    }
    if (!value.postCode) {
      newErr = { ...newErr, postCode: "No postCode" };
    } 
    if (!value.country) {
      newErr = { ...newErr, country: "No country" };
    }if (!value.clientName) {
      newErr = { ...newErr, clientName: "No clientName" };
     }
    if (!value.clientEmail) {
      newErr = { ...newErr, clientEmail: "No Email" };
    }
    // else if((/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i).test(value.clientEmail)){
    //   newErr = { ...newErr, clientEmail: "strong Email needed" };
    // }
    if (!value.streetAddress1) {
      newErr = { ...newErr, streetAddress1: "No streetAddress" };
    }
    if (!value.city1) {
      newErr = { ...newErr, city1: "No city" };
    }
    if (!value.postCode1) {
      newErr = { ...newErr, postCode1: "No postCode" };
    } 
    if (!value.country1) {
      newErr = { ...newErr, country1: "No country" };
    }if (!value.invoiceDate) {
      newErr = { ...newErr, invoiceDate: "No invoiceDate" };
    }
    // if (!value.paymentTerms) {
    //   newErr = { ...newErr, paymentTerms: "No paymentTerms" };
    // }
    if (!value.projectDescription) {
      newErr = { ...newErr, projectDescription: " Project Description Needed" };
    }
    return newErr;
  };

  const handleSubmit =(e)=>{
e.preventDefault();
setError(validation(inputData));
    setIsValidate(true);
  }



 const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputData((pre) => {
      console.log(name)
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  const postData = () => {
    console.log("datas are", inputData);
  };

  useEffect(() => {
    if (Object.keys(error).length === 0 && isValidate) {
      postData();
    }
  }, [error, isValidate]);


  return (
    <div className={`w-1/2 h-screen bg-[#1E2139] px-10 pt-10 fixed top-0 overflow-y-auto left-20 z-10${
      isOpen ? "w-1/2" : "w-0"
    }`}>
    <div className="mt-12">
      <h1 className="text-[#7C5DFA] text-[16px]">Bill From</h1>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-3 gap-6 py-6">
        <div className="productInput col-span-3">
          <label htmlFor="streetAddress">Street Address</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.streetAddress}
            name="streetAddress"
            id="streetAddress"
          />
          <p className="text-sm text-red-500">{error?.streetAddress}</p>
        </div>
        <div className="productInput">
          <label htmlFor="city">City</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.city}
            name="city"
            id="city"
          />
          <p className="text-sm text-red-500">{error?.city}</p>
        </div>
        <div className="productInput">
          <label htmlFor="postCode">Post Code</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.postCode}
            name="postCode"
            id="postCode"
          />
          <p className="text-sm text-red-500">{error?.postCode}</p>
        </div>
        <div className="productInput">
          <label htmlFor="country">Country</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.country}
            name="country"
            id="country"
          />
          <p className="text-sm text-red-500">{error?.country}</p>
        </div>

        <h1 className="text-[#7C5DFA] text-[16px] pt-4">Bill To</h1>

        <div className="productInput col-span-3">
          <label htmlFor="clientName">Client&#39;s Name</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.clientName}
            name="clientName"
            id="clientName"
          />
          <p className="text-sm text-red-500">{error?.clientName}</p>
        </div>
        <div className="productInput col-span-3">
          <label htmlFor="clientEmail">Client&#39;s Email</label>
          <input
            type="text"
            onChange={handleChange}
            value={inputData.clientName}
            name="clientEmail"
            id="clientEmail"
          />
          <p className="text-sm text-red-500">{error?.clientName}</p>
        </div>
        <div className="productInput col-span-3">
            <label htmlFor="streetAddress">Street Address</label>
            <input
              type="text"
              onChange={handleChange}
              value={inputData.streetAddress1}
              name="streetAddress1"
              id="streetAddress"
            />
            <p className="text-sm text-red-500">{error?.streetAddress1}</p>
          </div>
          <div className="productInput">
            <label htmlFor="city">City</label>
            <input
              type="text"
              onChange={handleChange}
              value={inputData.city1}
              name="city1"
              id="city"
            />
            <p className="text-sm text-red-500">{error?.city1}</p>
          </div>
          <div className="productInput">
            <label htmlFor="postCode">Post Code</label>
            <input
              type="text"
              onChange={handleChange}
              value={inputData.postCode1}
              name="postCode1"
              id="postCode"
            />
            <p className="text-sm text-red-500">{error?.postCode1}</p>
          </div>
          <div className="productInput">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              onChange={handleChange}
              value={inputData.country1}
              name="country1"
              id="country"
            />
            <p className="text-sm text-red-500">{error?.country1}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 py-6">
          <div className="productInput">
            <label htmlFor="invoiceDate">Invoice Date</label>
            <input
              type="date"
              onChange={handleChange}
              value={inputData.invoiceDate}
              name="invoiceDate"
              id="invoiceDate"
            />
            <p className="text-sm text-red-500">{error?.invoiceDate}</p>
          </div>

          <div className="productInput">
            <label htmlFor="paymentTerms">Payment Terms</label>
            {/* <input
            type="date"
            // onChange={handleChange}
            // value={inputData.name}
            name="paymentTerms"
            id="paymentTerms"
          /> */}
            <select name="paymentTerms" id="paymentTerms" className="bg-[]" onChange={handleChange}
            value={inputData.paymentTerms}>
              <option value="">Net 30 Days</option>
              <option value="">Net 1 Day</option>
              <option value="">Net 7 Days</option>
              <option value="">Net 14 Days</option>
            </select>
            <p className="text-sm text-red-500">{error?.paymentTerms}</p>
            </div>
            <div className="productInput col-span-2">
            <label htmlFor="projectDescription">Project Description</label>
            <input
              type="text"
              onChange={handleChange}
              value={inputData.projectDescription}
              name="projectDescription"
              id="projectDescription"
            />
            <p className="text-sm text-red-500">{error?.projectDescription}</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4">
                <button onClick={handleDiscard} type="submit" className="px-6 py-3 rounded-full bg-[#888EB0] text-[#F8F8FB] font-semibold">Cancel</button>
                <button onClick={showToastMessage} type="submit" className="px-6 py-3 rounded-full bg-[#7C5DFA] text-[#F8F8FB] font-semibold">Save Changes</button>
                <ToastContainer/>
          </div>
    </form>
  </div>
  )
}

export default Editform