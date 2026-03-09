import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileBookCallFAB from "./MobileBookCallFAB";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
    <MobileBookCallFAB />
  </div>
);

export default Layout;

