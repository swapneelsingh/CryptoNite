import React, { useContext } from "react";
import "./Navbar.css";
import logo2 from "../../assets/logo2.png";
import upRightArrow from "../../assets/upRightArrow.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (evt) => {
    switch (evt.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
        <img src={logo2} alt="" className="logo2" />
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select name="" id="" onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up
          <img src={upRightArrow} alt="Arrow icon" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;