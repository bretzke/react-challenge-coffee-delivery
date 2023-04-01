import { useEffect, useReducer, createContext, ReactNode } from 'react';
import {
  addCoffeeToCartAction,
  removeCoffeeFromCartAction,
  updateCoffeeQuantityAction,
} from '../reducers/coffees/actions';
import {
  Coffee,
  CoffeeCart,
  coffeesReducer,
} from '../reducers/coffees/reducers';
import coffeesJSON from '../data/coffees.json';

interface CoffeesContextType {
  cart: CoffeeCart[];
  coffees: Coffee[];
  addCoffeeToCart: ({ id, quantity }: CoffeeCart) => void;
  updateCoffeeQuantity: ({ id, quantity }: CoffeeCart) => void;
  removeCoffeeFromCart: (id: number) => void;
}

export const CoffeesContext = createContext({} as CoffeesContextType);

const CART_KEY_ON_LOCAL_STORAGE = '@coffee-delivery:coffees-state-1.0.0';

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffeesState, dispatch] = useReducer(
    coffeesReducer,
    { cart: [], coffees: coffeesJSON },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(CART_KEY_ON_LOCAL_STORAGE);

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { cart, coffees } = coffeesState;

  function addCoffeeToCart({ id, quantity }: CoffeeCart) {
    dispatch(addCoffeeToCartAction({ id, quantity }));
  }

  function updateCoffeeQuantity({ id, quantity }: CoffeeCart) {
    dispatch(updateCoffeeQuantityAction({ id, quantity }));
  }

  function removeCoffeeFromCart(id: number) {
    dispatch(removeCoffeeFromCartAction(id));
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeesState);

    localStorage.setItem(CART_KEY_ON_LOCAL_STORAGE, stateJSON);
  }, [coffeesState]);

  return (
    <CoffeesContext.Provider
      value={{
        cart,
        coffees,
        addCoffeeToCart,
        updateCoffeeQuantity,
        removeCoffeeFromCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
