import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}
