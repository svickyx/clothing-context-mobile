import React, {useState, useEffect, createContext} from 'react';
import { addItemToCart,removeItemFromCart, filterItemFromCart, getCartItemsCount, getCartTotal } from './cart-utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: ()=> {},
    removeItem: ()=> {},
    clearItemFromCart: ()=> {},
    cartItemsCount: 0,
    total:0
});

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);
    // everytime the toggleHidden function is call, the setHidden will set the hidden value to the opposite value
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const toggleHidden = ()=> setHidden(!hidden);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
    useEffect(()=> {
        setCartItemsCount(getCartItemsCount(cartItems))
    }, [cartItems])
    useEffect(()=> {
        setCartTotal(getCartTotal(cartItems))
    }, [cartItems])

    return(
        <CartContext.Provider value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            clearItemFromCart,
            cartItemsCount,
            cartTotal
        }} >
            {children}
        </CartContext.Provider>
    )
};
//provider的意義是把所有需要用到cardContent 的components包起來，而children就是代表那些components

export default CartProvider;
//在這裡寫好cardProvider之後，放入index.js裡面去，把所有需要用到cardProvider的component包進去