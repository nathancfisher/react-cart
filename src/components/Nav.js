import "./Nav.css";

function Nav({ children }) {
  return (
    <nav className="shop__navbar">
      <p className="navbar__title">react-cart</p>
      {children}
    </nav>
  );
}

export default Nav;
