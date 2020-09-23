import React from 'react'
import CartItem from './CartItem'

export default function CartList({value}) {
  const { cart } = value;

    return (
      <div>
        {cart.map(item => {
         return <CartItem item={item} value={value} key={item.id} />;
        })}
        
      </div>
    );
}
