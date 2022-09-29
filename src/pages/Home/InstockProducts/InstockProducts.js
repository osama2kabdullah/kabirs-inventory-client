import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firbase.init";
import useLoadStocks from "../../../hooks/useLoadStocks";
import ButtonMe from "../../shared/ButtonMe";

const InstockProducts = () => {
  const [user] = useAuthState(auth);

  const [userProducts, setUserProducts] = useLoadStocks(
    "https://safe-garden-23742.herokuapp.com/userData?email=" + user?.email
  );

  console.log("user products", userProducts);

  const [products, setProducts] = useLoadStocks(
    "https://safe-garden-23742.herokuapp.com/inStocProducts"
  );
  console.log("products", products);
  const navigate = useNavigate();

  return (
    <div className="m-12">
      <h3 className="text-3xl text-center mb-12">In stock products</h3>
      <div className="grid grid-cols-3 gap-4">
        {(user && userProducts?.length) === 0 && <p> </p>}
        {(user && userProducts?.length) === 0 && (
          <p>
            You dont have any products yet{" "}
            <span
              onClick={() => navigate("/managestock")}
              className="hover:underline text-sky-500 cursor-pointer"
            >
              Add some products
            </span>
          </p>
        )}
        {products.map((product) => (
          <div key={product?._id} className="border">
            <img
              className="w-full"
              src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg"
              alt=""
            />
            <div className="p-2">
              <h4 className="text-xl font-bold">{product?.name}</h4>
              <p className="font-mono">price: {product?.balance}</p>
              <p>availble: {product?.age} pis</p>
              <p>{product?.about.slice(0, 90)}</p>
              <p className="font-bold mb-5">{product?.company}</p>
              {
                user ? <ButtonMe btn={() => alert("This is not your product")}>
                Update this product
              </ButtonMe>
              :
              <ButtonMe btn={() => navigate("/manageproducts/" + product?._id)}>
                Update this product
              </ButtonMe>
              }
            </div>
          </div>
        ))}
        {user &&
          userProducts.map((product) => (
            <div key={product?._id} className="border">
              <img
                className="w-full"
                src="https://betterstudio.com/wp-content/uploads/2019/05/1-1-instagram-1024x1024.jpg"
                alt=""
              />
              <div className="p-2">
                <h4 className="text-xl font-bold">{product?.name}</h4>
                <p className="font-mono">price: {product?.balance}</p>
                <p>availble: {product?.age} pis</p>
                <p>{product?.about.slice(0, 90)}</p>
                <p className="font-bold mb-5">{product?.company}</p>
                <ButtonMe
                  btn={() => navigate("/manageproducts/" + product?._id)}
                >
                  Update this product
                </ButtonMe>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center mt-12">
        <ButtonMe btn={() => navigate("/managestock")}>
          Manage Your stocks
        </ButtonMe>
      </div>
    </div>
  );
};

export default InstockProducts;
