import React from "react";
import merch from "../Pictures/merch.jpeg";
import "../Components/Merch.css";

function Merch() {
  return (
    <>
      <div className="merch-background">
        <div className="merch-container">
          <p className="merch-p">Limited Edition Merch</p>
          <img className="merch-img" src={merch} alt="hoodie-sale" />
          <p className="merch-p">Rest Your Head Zip-ups</p>
          <p className="merch-price">$44.99</p>
          <div className="merch-link">
            <a
              className="merch-link"
              href="https://bachyardshop.myshopify.com/"
            >
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Merch;
