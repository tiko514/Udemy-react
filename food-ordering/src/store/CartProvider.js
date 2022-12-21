import { useReducer } from "react";
import CartContext from "./cart-context"

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const newStateItems = state.items.concat(action.item);
        const newTotalAmount = state.totalAmount + action.item.price * action.item.totalAmount;

        return {
            items: newStateItems,
            totalAmount: newTotalAmount
        }
    }
    return defaultCartState;
};

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: 'REMOVE',
            id: id
        })
    };

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;