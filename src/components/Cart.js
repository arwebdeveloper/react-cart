import React, { useContext } from 'react'
import Items from './Items'
import { GlobalContext } from '../App'

const Cart = () => {
    const { products, clearCart, totalAmount, totalItems } = useContext(GlobalContext);
    return (
        products.length ?
            (<>
                <header className='header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='back-to-shopping'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Continue Shopping</span>
                    </div>
                    <div className='shopping-cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>{totalItems}</p>
                    </div>
                </header>
                <section>
                    <div>
                        <h1>Shopping Cart</h1>
                        <p>You have <span>{totalItems}</span> items in the cart</p>
                    </div>
                    <div className='cart-items'>
                        {products.map(cartItem => (
                            <Items key={cartItem.id} {...cartItem} />
                        ))}
                    </div>
                    <div>
                        <h3>
                            Cart total: <span>{totalAmount}</span>
                        </h3>
                        <button>Checkout</button>
                        <button onClick={clearCart}>Clear</button>
                    </div>

                </section>

            </>) :
            (<>
                <header className='header' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='back-to-shopping'>
                        <i className="fa-solid fa-arrow-left"></i>
                        <span>Continue Shopping</span>
                    </div>
                    <div className='shopping-cart'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <p>{products.length}</p>
                    </div>
                </header>
                <section>
                    <div>
                        <h1>Shopping Cart</h1>
                        <p>You have <span>{totalItems}</span> items in the cart</p>
                    </div>

                    <h1> Your Cart is Empty</h1>
                </section>
                </>)
                )
}

                export default Cart