import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Main.css";
import axios from "axios";
import ProductForm from "../../components/ProductForm/ProductForm";
import ProductList from "../../components/ProductList/ProductList";







const Main = () => {
  const [allProducts, setAllProducts] = useState([]); // lifting state

  const removeFromDom = (productId) => {
    setAllProducts(allProducts.filter(elt => elt._id != productId)); 
  }

  return (
    <div className="Main">
      <ProductForm allProducts={allProducts} setAllProducts={setAllProducts} />
      <ProductList allProducts={allProducts} setAllProducts={setAllProducts} removeFromDom={removeFromDom} />
    </div>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;