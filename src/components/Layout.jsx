import NavBar from "./Nav/NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="main my-8 lg:my-16">
        <div className="gradient"></div>
        <main className="app">{children}</main>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
