import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store";
import Basket from "./Basket";
import ProductList from "./ProductList";

// Sample data for products
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10,
    description: "This is product 1",
    image: "product1.jpg",
    title: "Product 1 Title",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20,
    description: "This is product 2",
    image: "product2.jpg",
    title: "Product 2 Title",
  },
  // Add more products as needed
];

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div style={{ textAlign: "center" }}>
          <h1>Shopping App</h1>
          <nav>
            <ul style={{ display: "flex", listStyle: "none", justifyContent: "center", gap: "10px" }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/basket">Basket</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
