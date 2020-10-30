import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const { userInfo } = props;
  return (
    <header className="header">
      <div className="nav-list">
        <div className="brand">
          {/* <button onClick={openMenu}>&#9776;</button> */}
          <Link to="/">Let's Shopping</Link>
        </div>
        <ul className="nav-list-items">
          <li className="nav-list-item">
            {userInfo ? (
              <Link to="/profile"> {userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </li>
          {userInfo ? (
            <li className="nav-list-item">
              {userInfo.isAdmin && <Link to="/products"> Admin</Link>}
            </li>
          ) : null}
          <li className="nav-list-item">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
