import "./addForm.css";
import { ProductContext } from "../../Context/ProductContext";
import { useState, useContext } from "react";

const AddForm = ({closeModal}) => {

    const {addProduct} = useContext(ProductContext);

    const [newProduct, setNewProduct] = useState({
        img: "", name: "", desc: "", price: ""
    })

    const onInputChange = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value})
    }

    const {img, name, desc, price} = newProduct;

    const handleSubmit = (e) => {
        e.preventDefault()
        addProduct(img, name, desc, price);
        closeModal(false)
    }

  return (
    <div className="background">
        <form className="form" onSubmit={handleSubmit}>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <p className="h3 text-center">Add Product</p>

                <button onClick={() => {closeModal(false)}} className="close-btn">X</button>
            </div>

            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input type="text" className="form-control image-input" id="image" placeholder="Enter image url..." required name="img" value={img} onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Title</label>
                <input type="text" className="form-control title-input" id="name" placeholder="Enter name..." required name="name" value={name} onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control desc-input" id="description" placeholder="Describe a product" required name="desc" value={desc} onChange={(e) => onInputChange(e)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="text" className="form-control price-input" id="price" placeholder="Enter price..." required name="price" value={price} onChange={(e) => onInputChange(e)}/>
            </div>

            <button onClick={handleSubmit} type="submit" className="btn btn-success w-100">Add</button>
        </form>
    </div>
  )
}

export default AddForm