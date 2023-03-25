import { useEffect, useReducer, createContext, ReactNode } from 'react';
import { addCoffeeToCartAction } from '../reducers/coffees/actions';
import { Coffee, coffeesReducer } from '../reducers/coffees/reducers';

interface CoffeesContextType {
  cart: Coffee[];
  addCoffeeToCart: ({ id, quantity }: Coffee) => void;
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
    { cart: [] },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(CART_KEY_ON_LOCAL_STORAGE);

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return initialState;
    }
  );

  const { cart } = coffeesState;

  function addCoffeeToCart({ id, quantity }: Coffee) {
    console.log('antes do dispatch');
    dispatch(addCoffeeToCartAction({ id, quantity }));
  }

  useEffect(() => {
    console.log(coffeesState);
    const stateJSON = JSON.stringify(coffeesState);

    localStorage.setItem(CART_KEY_ON_LOCAL_STORAGE, stateJSON);
  }, [coffeesState]);

  return (
    <CoffeesContext.Provider value={{ cart, addCoffeeToCart }}>
      {children}
    </CoffeesContext.Provider>
  );
}
