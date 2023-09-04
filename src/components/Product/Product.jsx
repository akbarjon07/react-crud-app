import "./product.css";
import React, { useEffect } from 'react';
import { useContext, useState } from "react";
import {ProductContext} from "../../Context/ProductContext";
import EditForm from "../EditForm/EditForm";

const Product = ({product}) => {

  const {deleteProduct} = useContext(ProductContext);

  const [show, setShow] = useState(false)

  const handleShow = () => {
    setShow(true);
  }

  const handleClose = () => {
    setShow(false);
  }

  useEffect(() => {
    handleClose()
  },[product])

  return (
    <>
      <li key={product.id} className="hero-section__product-item">
        <img className="hero-section__product-img" src={product.img} alt="img" width="200" height="200" />

        <div className="hero-section__product-info mt-4">
            <h3 className="hero-section__product-title">{product.name}</h3>
            <p className="hero-section__product-desc">{product.desc}</p>
            <p className="hero-section__product-price">{product.price}</p>
        </div>

        <div className="d-flex align-items-center">
            <button onClick={() => deleteProduct(product.id)} className="btn btn-danger w-50">Delete</button>
            <button onClick={handleShow} className="btn btn-primary w-50 ms-3">Edit</button>
        </div>
    </li>

    {show && <EditForm theProduct={product} closeModal={setShow}/>}
    </>
  )
}

export default Product