import { useState } from "react";
import { Link } from "react-router-dom";

const List = () => {
    const [invoices, setInvoices] = useState([
        { id: 1, dueDate: "2023-03-08", name: "John Doe", price: 100 },
        { id: 2, dueDate: "2023-03-15", name: "Jane Doe", price: 200 },
        { id: 3, dueDate: "2023-03-22", name: "Michael Jones", price: 300 },
      ]);
      return (
        <div className="mt-10">
          <ul className="flex flex-col justify-center gap-4 px-48">
            {invoices.map((invoice) => (
              <li key={invoice.id} className="bg-[#252945] rounded-md py-3 px-2 flex items-center justify-between text-[#f8f8fb]">
                <Link to={`invoice?${invoice.id}`}> {invoice.id} Due{invoice.dueDate} {invoice.name} ${invoice.price}</Link>
              </li>
            ))}
          </ul>
        </div>
      );
    };
    

export default List