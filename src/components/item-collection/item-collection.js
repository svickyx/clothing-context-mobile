import React, {useContext} from 'react';

import {ItemCollectionContainer, ImageContainer, Button, FooterContainer, FooterName, FooterPrice} from './item-collection-style';

import {CartContext} from '../../provider/cart/cart-provider';

const ItemCollection = ({item})=> {
    const {name, price, imageUrl} = item;
    const {addItem} = useContext(CartContext);

    return (
        <ItemCollectionContainer>
            <ImageContainer 
            className='background-image'
            imageUrl = {imageUrl}
            />
            <FooterContainer>
                <FooterName>{name}</FooterName> 
                <FooterPrice>{price}</FooterPrice>
            </FooterContainer>
            <Button 
            onClick = {()=> addItem(item)} inverted>
            Add to cart
            </Button>
        </ItemCollectionContainer>
    )
}

export default ItemCollection;