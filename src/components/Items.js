import React, { useContext } from 'react'
import { GlobalContext } from '../App'

const Items = ({ id, title, description, price, img, quantity}) => {
    const {removeItem,increaseQuantity,decreaseQuantity} = useContext(GlobalContext);
    return (
        <div className='item' style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid grey'}}>
            <div>
                <img src={img} alt={title} style={{ width: '100px', height: '100px' }} />
            </div>
            <div>
                <h2 style={{ display: 'inline-block' }}>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <i class="fa-solid fa-plus" onClick={()=>{increaseQuantity(id)}}></i>
                <input type="text" placeholder={quantity}/>
                <i class="fa-solid fa-minus" onClick={()=>{decreaseQuantity(id)}}></i>
            </div>
            <div>
                <h3>Price: {price * quantity}</h3>
            </div>
            <div>
                <i class="fa-solid fa-trash-can" onClick={()=>{removeItem(id)}}></i>
            </div>
        </div>
    )
}

export default Items