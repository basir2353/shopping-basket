import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BasketItem, addToBasket } from "./features/basketSlice";
import "./ProductList.css"; // Import the CSS file

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string; // The image URL or path as a string
  title: string; // The title of the product
  // ... other properties
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [fetchedProducts, setFetchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setFetchedProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching products.");
        setLoading(false);
      });
  }, []);

  const handleAddToBasket = (product: Product) => {
    const item: BasketItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image, // Replace this with the actual image path from the product data
      titel: product.title, // Replace this with the actual title from the product data
    };
    dispatch(addToBasket(item));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className="card-container"> {/* Use a container class */}
        {fetchedProducts.map((product) => (
          <li key={product.id} className="card"> {/* Use the card class */}
            <div className="card-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="card-title">
              <h3>{product.title}</h3>
            </div>
            <div className="card-subtitle">
              {product.description}
            </div>
            <div className="card-price">
              ${product.price}
            </div>
            <div >
              <button className="card-btn" onClick={() => handleAddToBasket(product)}>Add to Basket</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
