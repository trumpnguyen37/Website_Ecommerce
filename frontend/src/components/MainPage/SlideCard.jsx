import React, { useState, useEffect } from "react";
import axios from "axios";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      try {
        const response = await axios.get("/api/allProduct");
        const { data } = response;

        if (data.allProduct) {
          setProducts(data.allProduct);
        } else {
          console.log("Không có sản phẩm nào được tìm thấy.");
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error.message);
      }
    };
    getProductsData();
  }, []);

  return (
    <>
      <Slider {...settings}>
        {products.map((value, index) => {
          return (
            <>
              <div className="box d_flex top" key={index}>
                <div className="left">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className="btn-primary">Visit Collections</button>
                </div>
                <div className="right">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
