import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>TravelTrucks</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
      </nav>
    </header>
  );
};

export default Header;
