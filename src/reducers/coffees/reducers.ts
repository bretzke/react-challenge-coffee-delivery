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

    case ActionTypes.UPDATE_COFFEE_QUANTITY:
      return produce(state, (draft) => {
        const orderItem = draft.cart.find(
          (coffee) => coffee.id === action.payload.id
        );

        if (!orderItem) return draft;

        orderItem.quantity = action.payload.quantity;
      });

    case ActionTypes.REMOVE_COFFEE_FROM_CART: {
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (coffee) => coffee.id !== action.payload.id
        );
      });
    }
    default:
      return state;
  }
}
