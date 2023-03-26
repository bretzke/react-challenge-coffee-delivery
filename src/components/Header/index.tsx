import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { CartTotal, HeaderContainer } from './styles';
import logoCoffeeDelivery from '../../assets/logo.svg';
import { CoffeesContext } from './../../contexts/CoffeesContext';
import { useContext } from 'react';

export function Header() {
  const { cart } = useContext(CoffeesContext);

  const totalAmount = cart.reduce(
    (prev, currentValue) => (prev += currentValue.quantity),
    0
  );

  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={logoCoffeeDelivery}
          alt="Logo Coffee Delivery - Um copo de café com o título"
        />
      </NavLink>
      <nav>
        <button>
          <MapPin />
          Guabiruba, SC
        </button>
        <NavLink to="/checkout" title="Checkout">
          <ShoppingCart size={24} weight="fill" />
          {totalAmount > 0 && (
            <CartTotal>
              <span>{totalAmount}</span>
            </CartTotal>
          )}
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
