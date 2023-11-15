import { useContext } from 'react';
import NavBar from "./Nav/NavBar";
import Footer from "./Footer";
import { SnackbarContext } from '../SnackbarContext';
import CustomSnackbar from './CustomSnackbar';

const Layout = ({ children }) => {
  const { snackbar, closeSnackbar } = useContext(SnackbarContext);

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
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        type={snackbar.type}
        onClose={closeSnackbar}
      />
    </div>
  );
};

export default Layout;
