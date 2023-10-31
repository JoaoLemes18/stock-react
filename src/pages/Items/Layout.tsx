import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <main>
      <h1>Stock Items</h1>
      <Outlet />
    </main>
  );
}
