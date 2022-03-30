import Footer from "../footer";
import Navbar from "../navbar/index_backup";

export default function Layout({ children }) {
  return (
    <div className="h-screen relative">
      <div className="mx-auto max-w-7xl px-4">
        <Navbar />
        <div className="fit mb-4">{children}</div>
      </div>
      <Footer />
    </div>
  );
}
