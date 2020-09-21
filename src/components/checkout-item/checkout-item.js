import React, {useContext} from 'react';

import {CartContext} from '../../provider/cart/cart-provider';

import {CheckoutItemContainer, CheckoutImageContainer, TextContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item-style';

const CheckoutItem = ({cartItem})=> {
    const {name, quantity, price, imageUrl} = cartItem;
    const {addItem, removeItem, clearItemFromCart} = useContext(CartContext);

    return(
        <CheckoutItemContainer>
            <CheckoutImageContainer>
                <img src={imageUrl} alt='item' />
            </CheckoutImageContainer>
            <TextContainer>{name}</TextContainer>
            <QuantityContainer>
                <div onClick = {()=> removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick = {()=> addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <TextContainer>{price}</TextContainer>
            <RemoveButtonContainer onClick = {()=> clearItemFromCart(cartItem)}>&#10005;</RemoveButtonContainer>
        </CheckoutItemContainer>
    )
}


export default CheckoutItem;