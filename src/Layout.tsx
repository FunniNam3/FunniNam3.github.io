import { Outlet } from "react-router-dom";
import Navbar from "./Components/nav";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen p-6 gap-20 bg-(--primary) text-white">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-6 text-center">
        <p>© 2026 FunniNam3</p>
      </footer>
    </div>
  );
}
