import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MenuPage from "./pages/MenuPage";
import { useState, useEffect } from "react";
import CartModal from "./components/CartModal";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  
  const addToCart = (item) => {
    // Check if the item is already in the cart
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.title === item.title
    );

    if (existingItemIndex !== -1) {
      // Item exists, update its quantity
      const updatedItems = [...cartItems];
      const existingItem = updatedItems[existingItemIndex];
      updatedItems[existingItemIndex] = {
        ...existingItem,
        quantity: (existingItem.quantity || 1) + (item.quantity || 1)
      };
      setCartItems(updatedItems);
    } else {
      // Item doesn't exist, add it to cart
      setCartItems([...cartItems, item]);
    }
    
    // Open cart when item is added
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
    // Force a re-render after cart closes
    setRenderKey(prevKey => prevKey + 1);
  };

  // Calculate total item count including quantities
  const totalItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  // Use effect to ensure page updates when cart state changes
  useEffect(() => {
  }, [cartItems, isCartOpen, totalItemCount]);

  // Create a router with cart props passed to each route
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path="/" 
        element={
          <MainLayout 
            cartItemCount={totalItemCount}
            openCart={() => setIsCartOpen(true)} 
            closeCart={closeCart}
          />
        }
      >
        <Route 
          index 
          element={<HomePage key={renderKey} addToCart={addToCart} />} 
        />
        <Route 
          path="/menu" 
          element={<MenuPage key={renderKey} addToCart={addToCart} />} 
        />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} key={renderKey} />
      <CartModal 
        isOpen={isCartOpen} 
        onClose={closeCart}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};

export default App;
