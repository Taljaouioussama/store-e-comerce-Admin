import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AddProduct.css';  // Importer le fichier CSS

const AddProduct = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(), 
      title,
      price: parseFloat(price),
      img,
    };
    addProduct(newProduct); 
    navigate("/"); 
  };

  return (
    <div className="add-product-container">
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleAddProduct}>
        <div>
          <label>Titre du produit :</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Prix (MAD) :</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>URL de l'image :</label>
          <input
            type="text"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter le produit</button>
      </form>
    </div>
  );
};

export default AddProduct;
