import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = ({ CartItem }) => {
  const { user } = useSelector((user) => ({ ...user }));

  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search");
    search.classList.toggle("active", window.scrollY > 100);
  });

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <img src={logo} alt="" />
          </div>

          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" placeholder="Search and hit enter..." />
            <span>All Category</span>
          </div>

          <div className="icon f_flex width">
            <div className="cart">
              <Link to="/cart">
                <i className="fa fa-shopping-bag icon-circle"></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <Link to="/profile" className="profile_link hover1">
              <img src={user?.user?.picture} alt="" />
              <i className="fa fa-user icon-circle"></i>
              <span>{user?.user?.name}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
