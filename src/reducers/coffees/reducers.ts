import { ActionTypes } from './actions';
import { produce } from 'immer';

export interface Coffee {
  id: number;
  quantity: number;
}

interface CoffeesState {
  cart: Coffee[];
}

export function coffeesReducer(state: CoffeesState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE_TO_CART: {
      const currentCoffeeIndex = state.cart.findIndex((coffee) => {
        return coffee.id === action.payload.id;
      });

      if (currentCoffeeIndex < 0) {
        return produce(state, (draft) => {
          draft.cart.push(action.payload);
        });
      }

      return produce(state, (draft) => {
        let quantity =
          draft.cart[currentCoffeeIndex].quantity + action.payload.quantity;

        // TODO: lógica para colocar o estoque máximo do produto caso a quantidade for maior
        if (quantity > 10) {
          quantity = 10;
        }

        draft.cart[currentCoffeeIndex].quantity = quantity;
      });
    }

    default:
      return state;
  }
}
