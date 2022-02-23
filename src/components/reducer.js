export const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_ITEM":
            return {
                ...state,
                products: state.products.filter((curItem) => {
                    return curItem.id !== action.payload
                })
            };
        case "CLEAR_ALL":
            return {
                ...state,
                products: []
            };
        case "INCREASE_QUANTITY":
            return {
                ...state,
                products: state.products.map((curItem) => {
                    if (curItem.id === action.payload) {
                        return { ...curItem, quantity: curItem.quantity + 1 }
                    }
                    return curItem;
                }),
            };
        case "DECREASE_QUANTITY":
            return {
                ...state,
                products: state.products.map((curItem) => {
                    if (curItem.id === action.payload) {
                        return { ...curItem, quantity: curItem.quantity - 1 }
                    }
                    return curItem;
                }).filter(curItem => curItem.quantity !== 0),
            }
        case "GET_TOTAL":
            let { totalItems, totalAmount } = state.products.reduce(
                (accum, curVal) => {
                    let { price, quantity } = curVal;

                    let updatedTotalAmount = price * quantity;
                    accum.totalAmount += updatedTotalAmount;

                    accum.totalItems += quantity;
                    return accum;
                },
                {
                    totalItems: 0,
                    totalAmount: 0,
                }
            );
            return { ...state, totalItems, totalAmount };


        default: return state;
    }
}


