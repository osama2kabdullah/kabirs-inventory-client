import React from "react";
import useLoadStocks from "../../../hooks/useLoadStocks";

const ManageStock = () => {
  const [products, setProducts] = useLoadStocks(
    "https://safe-garden-23742.herokuapp.com/inStocProducts"
  );
  
  const deletProductBtn = id => {
    const procced = window.confirm('are you sure you want to delete?');
    if(procced){
      fetch('http://localhost:5000/deleteProduct/'+id, {
        method: 'DELETE'
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.acknowledged){
          const rest = products.filter(product=>product._id !== id);
          setProducts(rest);
        }
      }) 
    }
  }
  
  return (
    <div className="m-12">
      <h1 className="text-3xl">Your Current Stocked Products</h1>
      <table className="mt-5 w-3/6">
        <thead>
          <tr className="text-left bg-red-100">
            <th className="p-3 ">#</th>
            <th className="">Product Name</th>
            <th className="">Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr className="border" key={product._id}>
              <td className="p-3">{index + 1}</td>
              <td>{product.name}</td>
              <td className="">{product.age}</td>
              <td>
                <svg
                onClick={()=>deletProductBtn(product._id)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 bg-red-300 p-2 h-8 rounded-full hover:bg-red-400 active:bg-red-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStock;
