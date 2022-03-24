import Footer from "../footer";
import Navbar from "../navbar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
