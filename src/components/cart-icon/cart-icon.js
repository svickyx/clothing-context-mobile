import React, {useContext} from 'react';

import {CartContext} from '../../provider/cart/cart-provider';

import {CartIconContainer, ShoppingBagIconContainer, ItemCount} from './cart-icon-style';

const CartIcon = ({itemCount})=> {
    const {toggleHidden, cartItemsCount} = useContext(CartContext);

    return(
        <CartIconContainer onClick={toggleHidden}>
            <ShoppingBagIconContainer />
            <ItemCount>{cartItemsCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;