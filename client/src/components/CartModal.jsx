import { saveOrder } from '../firebase';
import { useState } from 'react';



const CartModal = ({ isOpen, onClose, cartItems, setCartItems }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  // Only render if isOpen is true
  if (!isOpen) return null;

  // Calculate total item count including quantities
  const totalItemCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

  const handleCheckout = async () => {
    if (cartItems.length === 0) return;
    setIsProcessing(true);

    try {
      const totalPrice = cartItems.reduce((total, item) => {
        const price = parseFloat(item.price.replace('$', ''));
        const quantity = item.quantity || 1;
        return total + (price * quantity);
      }, 0).toFixed(2);
      
      const orderData = {
        items: cartItems,
        totalPrice,
        itemCount: totalItemCount,
      };
      
      const orderId = await saveOrder(orderData);
      
      alert(`Order placed successfully! Your order ID is: ${orderId}`);
      
      setCartItems([]);
      
      onClose();
      
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("There was an error processing your order. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      {/* Overlay to gray out the background */}
      <div 
        className="fixed inset-0 bg-gray-600 opacity-50 z-[999]"
        onClick={onClose}
      ></div>

      {/* Cart panel with Roboto font */}
      <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 z-[1000] font-['Roboto',sans-serif]">
        <button 
          className="absolute top-4 right-4 text-3xl text-[#5C3D2E] cursor-pointer hover:text-[#2CA6A4]"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mt-8 mb-2">Cart ({totalItemCount} items)</h2>
        <div className="w-full border-b border-[#5C3D2E] mt-2 mb-4"></div>

        <div className="flex flex-col gap-4 max-h-[70vh] overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gray-100 mr-3 flex items-center justify-center">
                    <img src={"/item.png"} alt={item.title} className="max-w-full max-h-full" />
                  </div>
                  <div>
                    <h3 className=" text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600 mt-1">{item.price}</p>
                    <div className="flex items-center mt-1">
                      <button 
                        className={`border border-[#5C3D2E] px-2 text-sm rounded  hover:text-white ${item.quantity === 1 ? 'opacity-10 ' : "cursor-pointer hover:bg-[#5C3D2E]"}`}
                        onClick={() => {
                          const newItems = [...cartItems];
                          const item = newItems[index];
                          if (item.quantity > 1) {
                            item.quantity -= 1;
                            setCartItems(newItems);
                          }
                        }}
                      >
                        -
                      </button>
                      <span className="mx-2 text-sm">{item.quantity || 1}</span>
                      <button 
                        className="border border-[#5C3D2E] px-2 text-sm rounded hover:bg-[#5C3D2E] hover:text-white cursor-pointer"
                        onClick={() => {
                          const newItems = [...cartItems];
                          const item = newItems[index];
                          item.quantity = (item.quantity || 1) + 1;
                          setCartItems(newItems);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <button 
                    className="text-red-500 text-sm mt-1 hover:text-red-700"
                    onClick={() => {
                      const newItems = [...cartItems];
                      newItems.splice(index, 1);
                      setCartItems(newItems);
                    }}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 my-8">Your cart is empty</p>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className="mt-auto pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal:</span>
              <span className="">
                ${cartItems.reduce((total, item) => {
                  const price = parseFloat(item.price.replace('$', ''));
                  const quantity = item.quantity || 1;
                  return total + (price * quantity);
                }, 0).toFixed(2)}
              </span>
            </div>
            <button 
              className="w-full bg-[#2CA6A4] text-[#5C3D2E] py-2 rounded font-semibold hover:bg-[#5C3D2E] hover:text-white transition-colors cursor-pointer"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Checkout'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartModal;