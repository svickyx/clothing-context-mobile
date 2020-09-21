import React, {useContext} from 'react';

import {CartContext} from '../../provider/cart/cart-provider';

import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe/stripe-button';

import '../check-out/check-out.scss';

const CheckOutPage = ()=> {
    const {cartItems, cartTotal} = useContext(CartContext);

    return(
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>product</span>
                </div>
                <div className='header-block'>
                    <span>description</span>
                </div>
                <div className='header-block'>
                    <span>quantity</span>
                </div>
                <div className='header-block'>
                    <span>price</span>
                </div>
                <div className='header-block'>
                    <span>remove</span>
                </div>
            </div>
                {
                    cartItems.map(cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    ))
                }
            <div className='total'>Total is:${cartTotal}</div>
            <div className='test-warning'>
                *Please use the following credit card for payments8
                <br />
                4242 4242 4242 4242 - Exp: 01/25 - CVV: 123
            </div>
            <StripeCheckoutButton price={cartTotal} />
        </div>
    )
}



export default CheckOutPage;