import React, {useContext} from 'react';
import {auth} from '../../firebase/firebase.utils';

import {HeaderContainer, LogoContainer, OptionContainer, OptionLink} from './header-style';

import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import CurrentUserContext from '../../context/current-user/current-user-context';
import {CartContext} from '../../provider/cart/cart-provider';


const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const {hidden} = useContext(CartContext)

    return(
        <HeaderContainer>
            <LogoContainer to='/'>
              <Logo className='logo'/> 
            </LogoContainer>
            <OptionContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {currentUser ? (
                <OptionLink as='div' onClick = {() => auth.signOut()}>SIGN OUT</OptionLink>
                ):(
                <OptionLink to='/signin'>SIGN IN</OptionLink>
                )}              
                <CartIcon />
            </OptionContainer>
            { hidden ? null : <CartDropdown /> }           
        </HeaderContainer>
    )
}


export default Header;