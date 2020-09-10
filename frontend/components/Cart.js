import React from 'react';
import CartStyles from '../components/styles/CartStyles';
import Supreme from '../components/styles/Supreme';
import CloseButton from '../components/styles/CloseButton';
import SickButton from '../components/styles/SickButton';

const Cart = () => {
    return (
        <CartStyles open>
            <header>
                <CloseButton title="close">&times;</CloseButton>
                <Supreme>Your Cart</Supreme>
                <p>You have __ items in your cart.</p>
            </header>
            <footer>
                <p>$10.00</p>
                <SickButton>Checkout</SickButton>
            </footer>
        </CartStyles>
    );
};

export default Cart;
