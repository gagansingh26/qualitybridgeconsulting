import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileBookCallFAB from "./MobileBookCallFAB";
import MobileBottomNav from "./MobileBottomNav";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <main className="flex-1 pb-16 md:pb-0">{children}</main>
    <Footer />
    <MobileBottomNav />
    <MobileBookCallFAB />
  </div>
);

export default Layout;

