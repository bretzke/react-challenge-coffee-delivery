import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';
import { HeaderContainer } from './styles';
import logoCoffeeDelivery from '../../assets/logo.svg';

export function Header() {
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
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
