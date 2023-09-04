import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {

    const [products, setProducts] = useState([
        {id: uuidv4(), img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481", name: "MacBook Pro", desc: "MacBook Pro: 13-inch Apple M2 chip with 8 16GB/256GB - Grey", price: "1600$"},
        {id: uuidv4(), img: "https://assets.asaxiy.uz/product/main_image/desktop//6332ef1a853ba.png.webp", name: "MacBook Air", desc: "MacBook Air: 13-inch Apple M2 chip with 16GB/512GB - Midnight", price: "1400$"}
    ]);

    useEffect(()=> {
        const storedData = JSON.parse(localStorage.getItem('products'));
        if (storedData) {
            setProducts(storedData || []);
        }
    },[])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    })

    const addProduct = (img, name, desc, price) => {
        setProducts([...products, {id: uuidv4(), img, name, desc, price}])
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id))
    }

    const updateProduct = (id, updatedProduct) => {
        setProducts(products.map((product) => product.id === id ? updatedProduct : product))
    }

  return (
    <ProductContext.Provider value={{products, addProduct, deleteProduct, updateProduct}}>
        {props.children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider