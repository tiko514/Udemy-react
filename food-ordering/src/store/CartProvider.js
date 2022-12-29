import { useReducer } from "react";
import CartContext from "./cart-context"

const cartReducer = (state, action) => {
    let newStateItems;
    if (action.type === 'ADD') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];

        if (existingItem) {
            newStateItems = [
                ...state.items
            ];

            newStateItems[existingItemIndex] = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            }
        }
        else {
            newStateItems = state.items.concat(action.item);
        }

        const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: newStateItems,
            totalAmount: newTotalAmount
        }
    }
    else if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];

        if (existingItem.amount === 1) {
            newStateItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            newStateItems = [
                ...state.items
            ];

            newStateItems[existingItemIndex] = {
                ...existingItem,
                amount: existingItem.amount - 1
            }
        }

        const newTotalAmount = state.totalAmount - existingItem.price;

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