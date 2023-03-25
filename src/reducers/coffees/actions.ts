import { Coffee } from './reducers';

export enum ActionTypes {
  ADD_NEW_COFFEE_TO_CART = 'ADD_NEW_COFFEE_TO_CART',
}

export function addCoffeeToCartAction({ id, quantity }: Coffee) {
  return {
    type: ActionTypes.ADD_NEW_COFFEE_TO_CART,
    payload: {
      id,
      quantity,
    },
  };
}
