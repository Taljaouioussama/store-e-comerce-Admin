import React, { useState } from "react";
import Data from "../Data"; // Import des données produits
import "./Productes.css"; // Import du fichier CSS

const Productes = () => {
  const [products, setProducts] = useState(Data);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((item) => item.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Titre</th>
            <th>Prix (MAD)</th>
            <th>Opérations</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img src={item.img} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productes;
