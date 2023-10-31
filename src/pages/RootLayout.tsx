import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/"> React Stock</Link>
        <nav>
          <Link to={"/"}>Imicio</Link>
          <Link to={"/src/pages/Items"}>Items</Link>
        </nav>
      </header>
      <div>
        <Outlet />
      </div>
      <footer>Feito por, João Lemes :D </footer>
    </>
  );
}
