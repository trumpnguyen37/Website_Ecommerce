import React, { useState, useEffect } from "react";
import axios from "axios";
import Ndata from "./Ndata";

const Cart = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get("/api/allProduct");
        const { data } = response;

        if (data.allProduct) {
          setProducts(data.allProduct);
        } else {
          console.log("No products found.");
        }
      } catch (error) {
        console.error("Error retrieving product data:", error.message);
      }
    };
    getProductsData();
  }, []);

  return (
    <>
      <div className="content grid product">
        {products.map((val, index) => {
          return (
            <div className="box" key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
