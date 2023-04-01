import { useContext, useState } from 'react';
import { CoffeesContext } from '../../../../../contexts/CoffeesContext';
import { SelectQuantity } from '../../../../../components/SelectQuantity';
import { FormatToReal } from '../../../../../utils/formatToReal';
import {
  ButtonRemove,
  OrderItemActions,
  OrderItemContainer,
  OrderItemDetails,
  OrderItemDivisor,
} from './styles';
import { Trash } from 'phosphor-react';

interface OrderItemProps {
  id: number;
  quantity: number;
}

export function OrderItem(orderItem: OrderItemProps) {
  const { cart, coffees, updateCoffeeQuantity, removeCoffeeFromCart } =
    useContext(CoffeesContext);
  const [quantity, setQuantity] = useState(orderItem.quantity);

  const coffee = coffees.find((coffee) => coffee.id === orderItem.id);

  function updateQuantityToBuy(newQuantity: number) {
    setQuantity(newQuantity);
    updateCoffeeQuantity({ id: orderItem.id, quantity: newQuantity });
  }

  function handleRemoveItem() {
    removeCoffeeFromCart(orderItem.id);
  }

  if (!coffee) return <span></span>;

  return (
    <>
      <OrderItemContainer>
        <OrderItemDetails>
          <img
            src={coffee.image}
            alt={coffee.description}
            width={64}
            height={64}
          />
          <OrderItemActions>
            <p>{coffee.name}</p>
            <div>
              <SelectQuantity
                maxQuantity={coffee.quantity}
                quantityToBuy={quantity}
                updateQuantityToBuy={updateQuantityToBuy}
                key={orderItem.id}
              />
              <ButtonRemove onClick={handleRemoveItem}>
                <Trash /> Remover
              </ButtonRemove>
            </div>
          </OrderItemActions>
        </OrderItemDetails>
        <h4>R$ {FormatToReal(coffee.price * orderItem.quantity)}</h4>
      </OrderItemContainer>
      <OrderItemDivisor />
    </>
  );
}
