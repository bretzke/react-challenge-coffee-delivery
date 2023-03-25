import { SelectQuantityContainer } from './styles';

interface SelectQuantityProps {
  id: number;
  quantity: number;
}

export function SelectQuantity({ id, quantity }: SelectQuantityProps) {
  return (
    <SelectQuantityContainer>
      <button>-</button>
      <span>{quantity}</span>
      <button>+</button>
    </SelectQuantityContainer>
  );
}
