import { ActionTypes } from './actions';
import { produce } from 'immer';

export interface CoffeeCart {
  id: number;
  quantity: number;
}

export interface Coffee {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  quantity: number;
  image: string;
}

interface CoffeesState {
  cart: CoffeeCart[];
  coffees: Coffee[];
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
        draft.cart[currentCoffeeIndex].quantity += action.payload.quantity;
      });
    }

    default:
      return state;
  }
}
