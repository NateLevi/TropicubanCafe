import { createPortal } from "react-dom";
import { useState } from "react";

const Modal = ({ onClose, title, description, price, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [specialRequest, setSpecialRequest] = useState("");

  const handleAddToCart = () => {
    // Create item object
    const item = {
      title,
      description,
      price,
      quantity,
      specialRequest,
    };
    
    // Call the addToCart function from props
    addToCart(item);
    
    // Close the modal
    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Modal Box */}
      <div className="relative bg-white p-6 rounded shadow-lg z-10 w-full max-w-lg text-[#5C3D2E] font-['Roboto',sans-serif]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-[#5C3D2E] cursor-pointer"
        >
          &times;
        </button>

        {/* Title + Description */}
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm mb-4">{description}</p>

        {/* Special Request */}
        <label className="block text-sm font-semibold mb-2">
          Special Request
        </label>
        <textarea
          className="border border-gray-300 w-full p-2 rounded text-sm mb-4"
          placeholder="We'll do our best to accommodate any requests when possible."
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
        />

        {/* Quantity */}
        <label className="block text-sm font-semibold mb-2">Quantity</label>
        <div className="flex items-center space-x-2 mb-4">
          <button 
            className={`border border-[#5C3D2E] px-2 py-1 rounded ${quantity > 1 ? 'cursor-pointer hover:bg-[#5C3D2E] hover:text-white' : 'cursor-pointer'}`}
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            -
          </button>
          <span className="text-sm">{quantity}</span>
          <button 
            className="border border-[#5C3D2E] px-2 py-1 rounded cursor-pointer hover:bg-[#5C3D2E] hover:text-white"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </button>
        </div>

        {/* Add to Cart Button */}
        <button 
          className="bg-[#2CA6A4] text-[#5C3D2E] px-4 py-2 rounded font-semibold cursor-pointer"
          onClick={handleAddToCart}
        >
          Add to cart | {price}
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
