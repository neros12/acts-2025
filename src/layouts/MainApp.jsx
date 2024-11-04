import { Outlet } from "react-router-dom";

import { Header } from "components/Header";
import { Footer } from "components/Footer";

export default function MainApp({ children = <Outlet /> }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  );
}
