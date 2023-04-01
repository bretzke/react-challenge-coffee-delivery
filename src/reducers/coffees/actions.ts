import { CoffeeCart } from './reducers';

export enum ActionTypes {
  ADD_NEW_COFFEE_TO_CART = 'ADD_NEW_COFFEE_TO_CART',
  UPDATE_COFFEE_QUANTITY = 'UPDATE_COFFEE_QUANTITY',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
}

export function addCoffeeToCartAction({ id, quantity }: CoffeeCart) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_TO_CART,
    payload: {
      id,
      quantity,
    },
  };
}

export function updateCoffeeQuantityAction({ id, quantity }: CoffeeCart) {
  return {
    type: ActionTypes.UPDATE_COFFEE_QUANTITY,
    payload: {
      id,
      quantity,
    },
  };
}

export function removeCoffeeFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      id,
    },
  };
}
