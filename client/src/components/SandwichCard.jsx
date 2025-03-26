import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import { useState } from "react";

const SandwichCard = ({ id, title, description, price, className, addToCart }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    return (
        <>
            <NavLink 
                to={`/menu/${id}`}
                onClick={openModal}
                className={`border border-[#5C3D2E] rounded p-4 h-full flex flex-col transform transition-transform duration-200 hover:scale-105 ${className || ''}`}
            >
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-xs pb-6">{description}</p>
                <p className="text-sm font-bold mt-auto">{price}</p>
            </NavLink>

            {showModal && (
                <Modal 
                    onClose={() => setShowModal(false)} 
                    title={title}
                    description={description}
                    price={price}
                    addToCart={addToCart}
                >
                </Modal>
            )}
        </>
    );
};

export default SandwichCard;
