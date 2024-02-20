import Form from "./Form"
import Invoice from "./invoice"
import { useState } from "react";
// import Alert from "./Components/Alert"

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
  const handleOpenForm = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div className="flex">
    <Invoice handleOpenForm={handleOpenForm} />
    {isOpen && <Form isOpen={isOpen} setIsOpen={setIsOpen}/>}
    {/* <Viewinvoice handleOpenForm={handleOpenForm}/>
     {isOpen &&<Editform isOpen={isOpen} setIsOpen={setIsOpen}/>} */}
    {/* <List/> */}
    {/* <Alert/> */}
    </div>
  )
}

export default Home