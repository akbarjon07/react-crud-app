import "./editForm.css";
import { ProductContext } from "../../Context/ProductContext";
import { useState, useContext } from "react";


const EditForm = ({closeModal, theProduct}) => {

    const id = theProduct.id;

    const [img, setImg] = useState(theProduct.img);
    const [name, setName] = useState(theProduct.name);
    const [desc, setDesc] = useState(theProduct.desc);
    const [price, setPrice] = useState(theProduct.price);

    const {updateProduct} = useContext(ProductContext);

    const updatedProduct = {id, img, name, desc, price};

    const handleSubmit = (e) => {
        e.preventDefault()
        updateProduct(id, updatedProduct)
    }

  return (
    <div className="background">
        <form onSubmit={handleSubmit} className="form-update" id="form-edit">
            <div className="d-flex align-items-center justify-content-between mb-4">
                <p className="h3 text-center">Edit Product</p>

                <button onClick={() => closeModal(false)} className="close-btn">X</button>
            </div>

            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image URL</label>
                <input type="text" className="form-control image-input-update" id="image" placeholder="Enter image url..." required name="img" defaultValue={img} onChange={(e) => setImg(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="name" className="form-label">Title</label>
                <input type="text" className="form-control title-input-update" id="name" placeholder="Enter name..." required name="name" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input type="text" className="form-control desc-input-update" id="description" placeholder="Describe a product" required name="desc" defaultValue={desc} onChange={(e) => setDesc(e.target.value)}/>
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price</label>
                <input type="text" className="form-control price-input-update" id="price" placeholder="Enter price..." required name="price" defaultValue={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>

            <button className="btn btn-success w-100" id="update-button">Edit</button>
        </form>
    </div>
  )
}

export default EditForm