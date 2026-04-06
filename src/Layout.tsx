import { Outlet } from "react-router-dom";
import Navbar from "./Components/nav";
import Footer from "./Components/footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen gap-20 bg-(--primary) text-white">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
