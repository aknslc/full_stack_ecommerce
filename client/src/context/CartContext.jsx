import React, { createContext, useContext, useState, useEffect } from "react";

// confirm alert
import { confirmAlert } from 'react-confirm-alert';

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [total, setTotal] = useState(0);

    

    // confirm alert func
    const confirmAlertFunc = (product) => {

        confirmAlert({

            customUI: ({ onClose }) => {
                return (
                    <div className='confirm-custom-ui'>
                        <h1>Are you sure?</h1>
                        <p>You want to delete this product?</p>
                        <button className="btn btn-outline-secondary btn-lg" onClick={onClose}>No</button>
                        <button className="btn btn-danger btn-lg mx-2"
                            onClick={() => {
                                removeItem(product)
                                onClose();
                            }}
                        >
                            Yes, Delete it!
                        </button>
                    </div>
                )
            }
        });
    };

    // add to cart
    const addToCart = (product, cb) => {
        const checkCart = cart.find(item => item._id === product._id);
        // Product already added
        if (checkCart) {
            alert("product already added")
        } else {
            setCart([...cart, {
                _id: product._id,
                amount: 1,
                title: product.title,
                price: product.price,
                images: product.images
            }]);
            cb();
            setTotal((prev) => prev + product.price)
        }
    }

    const removeItem = (product) => {
        const checkCart = cart.find(item => item._id === product._id);
        setCart([...cart.filter(item => item._id !== product._id)])
        setTotal(prev => prev -= (checkCart.price * checkCart.amount))
    }

    const increase = (product) => {
        const checkCart = cart.find(item => item._id === product._id);
        checkCart.amount += 1
        setTotal(prev => prev += checkCart.price)
    }
    const decrease = (product) => {
        const checkCart = cart.find(item => item._id === product._id);
        if (checkCart.amount > 1) {
            checkCart.amount -= 1
            setTotal(prev => prev -= checkCart.price)
        } else {
        }
    }


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))

        const cartTotal = cart
        .reduce((a, b) => a + b.price * b.amount, 0)
        .toFixed(2);
        setTotal(cartTotal)
    }, [cart, total])

    const values = {
        cart,
        setCart,
        addToCart,
        total,
        setTotal,
        increase,
        decrease,
        removeItem,
        confirmAlertFunc
    };


    return <CartContext.Provider value={values}> {children}</CartContext.Provider>;

}



const useCart = () => useContext(CartContext)

export { CartProvider, useCart };