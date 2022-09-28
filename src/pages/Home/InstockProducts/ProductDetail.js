import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useLoadStocks from "../../../hooks/useLoadStocks";
import ButtonMe from "../../shared/ButtonMe";

const ProductDetail = () => {
  const { productId } = useParams();
  const [products, setProducts] = useLoadStocks(
    `https://safe-garden-23742.herokuapp.com/inStocProduct/${productId}`
  );

  const age = products?.age;
  const [newAge, setNewAge] = useState();

  console.log("new age", newAge);
  console.log("age", age);

  const updateItems = { id: products?._id, age: newAge };
  if (newAge) {
    fetch("https://safe-garden-23742.herokuapp.com/updateProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItems),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const updateBtn = () => {
    //decrease quantity number
    if (newAge) {
      const minusAge = newAge - 1;
      setNewAge(minusAge);
    } else {
      const minusAge = age - 1;
      setNewAge(minusAge);
    }
  };

  return (
    <div className="flex mx-12 gap-5">
      <div>
        <h2 className="text-4xl mb-8 font-bold">{products?.name}</h2>
        <p>{products?.about}</p>
        <div className="text-xl">
          <p className="mt-5">price: {products?.balance}</p>
          <p>product id: {products?._id}</p>
          <p className="mb-8">Company Name: {products?.company}</p>
        </div>
        <ButtonMe btn={updateBtn}>Deleverd</ButtonMe>
        <p className="mt-12 text-2xl font-bold">
          quantity: {products?.age} pis
        </p>
      </div>
      <img
        className="w-3/6"
        src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg"
        alt=""
      />
    </div>
  );
};

export default ProductDetail;
