import "./Nav.css";

function Nav({ children }) {
  return (
    <nav className="shop__navbar">
      <p className="navbar__title">RCT</p>
      {children}
    </nav>
  );
}

export default Nav;
