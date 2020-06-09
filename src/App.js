import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import data from "./data";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("sidebar-open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("sidebar-open");
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button className="brand-button" onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">Shop</Link>
          </div>
          <div className="header-links">
            <a href="#">Cart</a>
            <a href="#">SignIn</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Categories</h3>
          <button onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="#">Pants</a>
            </li>
            <li>
              <a href="#">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All rights are mine</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
