import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const MainLayout = ({ cartItemCount, openCart, closeCart }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <NavBar 
          cartItemCount={cartItemCount} 
          openCart={openCart} 
          closeCart={closeCart}
        />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
