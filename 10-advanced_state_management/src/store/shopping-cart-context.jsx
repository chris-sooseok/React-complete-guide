import { createContext, useState, useReducer } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products.js";

function shoppingCartReducer(state, action) {
    // ? reducer functions used on CartContext
    // ? action is used to define behavior
    // ? state contains data
    if (action.type === 'ADD_ITEM') {
      const updatedItems = [...state.items];
      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        const product = DUMMY_PRODUCTS.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload,
          name: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      return {
        items: updatedItems,
      };
    }

    if (action.type === 'UPDATE_ITEM') {
        const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    }

  return state;
}

export const CartContext = createContext({
  // skeletons of context
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

export default function CartContextProvider({ children }) {

  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
        type: 'ADD_ITEM',
        payload: id
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
        type: 'UPDATE_ITEM',
        payload: {
            productId: productId,
            amount: amount
        }
    })
  }

  // This is cart context packapge which will be used by all other components
  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children} </CartContext.Provider>
  );
}
