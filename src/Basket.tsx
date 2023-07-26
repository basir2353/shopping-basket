import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "./store";
import { BasketItem, removeFromBasket } from "./features/basketSlice";
import './ProductList.css' // Import the CSS file for consistent styling

const Basket: React.FC = () => {
  const basketItems = useSelector((state: RootState) => state.basket.items);
  const dispatch = useDispatch();

  const handleRemoveFromBasket = (item: BasketItem) => {
    dispatch(removeFromBasket(item.id));
  };
  

  return (
    <div className="product-list-container"> {/* Add a class for centering the content */}
      <h2>Basket</h2>
      {basketItems.length === 0 ? (
        <p>No items in the basket.</p>
      ) : (
        <ul className="product-list"> {/* Use the same class name for consistent styling */}
          {basketItems.map((item) => (
            <li key={item.id} className="card"> {/* Use the same class name for consistent styling */}
              <div className="card-img">
                <img src={item.image} alt={item.titel} />
              </div>
              <div>
                <div className="card-title">
                  <p>{item.titel}</p> {/* Change the tag to 'p' for consistent styling */}
                </div>
                <div className="card-price">
                  <p>Price: ${item.price}</p> {/* Change the tag to 'p' for consistent styling */}
                </div>
                <button onClick={() => handleRemoveFromBasket(item)} className="card-btn"> {/* Use the same class name for consistent styling */}
                  Remove from Basket
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/" className="go-back-link">Go back to Home</Link> {/* Add a class for styling */}
    </div>
  );
};

export default Basket;
