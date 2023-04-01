import { useContext } from 'react';
import { OrderInfo } from './components/OrderInfo';
import { OrderRegistration } from './components/OrderRegistration';
import { CheckoutContainer } from './styles';
import { CoffeesContext } from '../../contexts/CoffeesContext';

export function Checkout() {
  const { cart } = useContext(CoffeesContext);
  return (
    <CheckoutContainer>
      {cart.length > 0 && (
        <>
          <OrderRegistration />
          <OrderInfo />
        </>
      )}
      {!cart.length && <h2>O carrinho está vazio até o momento</h2>}
    </CheckoutContainer>
  );
}
