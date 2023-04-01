import { useContext } from 'react';
import { CoffeesContext } from '../../../../contexts/CoffeesContext';
import { OrderColumn, OrderInfoContainer, OrderLineInfo } from './styles';
import { OrderItem } from './OrderItem';
import { FormatToReal } from '../../../../utils/formatToReal';
import { ConfirmOrderButton } from './OrderItem/styles';

export function OrderInfo() {
  const { cart, coffees } = useContext(CoffeesContext);
  const totalPrice = cart.reduce((prevTotal, currentProduct) => {
    const coffeeItem = coffees.find(
      (coffee) => coffee.id === currentProduct.id
    );

    if (!coffeeItem) return prevTotal;

    return prevTotal + coffeeItem.price * currentProduct.quantity;
  }, 0);
  const deliveryPrice = 3.5;

  return (
    <OrderInfoContainer>
      <h2>Cafés selecionados</h2>

      <section style={{ borderRadius: '6px 44px' }}>
        {cart?.map((orderItem) => (
          <OrderItem key={orderItem.id} {...orderItem} />
        ))}
        <OrderColumn>
          <OrderLineInfo>
            <p>Total de itens</p>
            <p>R$ {FormatToReal(totalPrice)}</p>
          </OrderLineInfo>
          <OrderLineInfo>
            <p>Entrega</p>
            <p>R$ {FormatToReal(deliveryPrice)}</p>
          </OrderLineInfo>
          <OrderLineInfo>
            <p>
              <strong>Total</strong>
            </p>
            <p>
              <strong>R$ {FormatToReal(totalPrice + deliveryPrice)}</strong>
            </p>
          </OrderLineInfo>
        </OrderColumn>

        <ConfirmOrderButton>Confirmar</ConfirmOrderButton>
      </section>
    </OrderInfoContainer>
  );
}
