import "./productList.css";
import { useContext, useState, useRef } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Product from "../Product/Product";
import Logo from "../../assets/images/Logo.svg";
import AddForm from "../AddForm/AddForm";

const ProductList = () => {

    const {products} = useContext(ProductContext);

    const [show, setShow] = useState(false)
    const blur = useRef()

    const handleShow = () => {
        setShow(true);
    }

  return (
    <>
        <header className="header">
            <div className="container">
                <img className="header__logo" src={Logo} alt="logo" width="220" height="24"/>
            </div>
        </header>

        <main ref={blur} className="main">
            <section className="hero-section pt-4">
                <div className="container">
                    <div className="hero-section__wrapper d-flex align-items-center justify-content-between">
                        <h2 className="hero-section__title m-0 p-0">Product List</h2>

                        <button onClick={handleShow} className="hero-section__add-btn">Add new product</button>
                    </div>

                    <ul className="hero-section__product-list mt-4">
                        {
                            products ? products.map(product => (
                                <Product key={product.id} product={product}/>
                            )) : "Not Found"
                        }
                    </ul>
                </div>
            </section>
        </main>

        {show && <AddForm closeModal={setShow}/>}
    </>
  )
}

export default ProductList