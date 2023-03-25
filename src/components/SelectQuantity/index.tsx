import { Minus, Plus } from 'phosphor-react';
import { SelectQuantityContainer } from './styles';

interface SelectQuantityProps {
  quantityToBuy: number;
  maxQuantity: number;
  updateQuantityToBuy: (newQuantity: number) => void;
}

export function SelectQuantity({
  quantityToBuy,
  maxQuantity,
  updateQuantityToBuy,
}: SelectQuantityProps) {
  function decrementQuantity() {
    updateQuantityToBuy(quantityToBuy - 1);
  }

  function incrementQuantity() {
    updateQuantityToBuy(quantityToBuy + 1);
  }

  return (
    <SelectQuantityContainer>
      <button disabled={quantityToBuy === 1} onClick={decrementQuantity}>
        <Minus />
      </button>
      <span>{quantityToBuy}</span>
      <button
        disabled={quantityToBuy === maxQuantity}
        onClick={incrementQuantity}
      >
        <Plus />
      </button>
    </SelectQuantityContainer>
  );
}
