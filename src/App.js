import React, { createContext,useReducer,useEffect } from 'react';
import Cart from './components/Cart';
import { products } from './components/product';
import {reducer} from './components/reducer';

export const GlobalContext = createContext()

const initialState ={
  products: products,
  totalAmount: 0,
  totalItems: 0,
}
const App = () => {
  const [state, dispatch] = useReducer(reducer,initialState)

  const removeItem =(id)=>{
    return dispatch({
        type: 'DELETE_ITEM',
        payload: id
      })
  }
  const clearCart =()=>{
    return dispatch({
      type: 'CLEAR_ALL',
    })
  }
  const increaseQuantity=(id)=>{
    return dispatch({
      type: 'INCREASE_QUANTITY',
      payload: id
    })
  }
  const decreaseQuantity=(id)=>{
    return dispatch({
      type: 'DECREASE_QUANTITY',
      payload: id
    })
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.products]);

  return (
    <div style={{ padding: '50px 100px' }}>
      <GlobalContext.Provider value={{...state, removeItem, clearCart, increaseQuantity, decreaseQuantity}}>
        <Cart />
      </GlobalContext.Provider>
    </div>
  )
}

export default App;