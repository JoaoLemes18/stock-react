import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <h1>Stock Itens</h1>
      <div className="tabs">
        <Link to={"/items"}>Todos os itens</Link>

        <Link to={"/items/new"}>Novo item</Link>
      </div>
      <Outlet />
    </main>
  );
}
