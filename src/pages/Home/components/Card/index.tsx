import {
  CardContainer,
  CardDescription,
  CardInfo,
  CardPrice,
  CardTag,
  CardText,
  CoffeeBuyContainer,
  ShoppingCartButton,
} from './style';
import { SelectQuantity } from './../../../../components/SelectQuantity/index';
import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffeesContext } from '../../../../contexts/CoffeesContext';

interface ICardProps {
  id: number;
  name: string;
  tags: string[];
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export function Card({
  id,
  name,
  tags,
  description,
  price,
  quantity,
  image,
}: ICardProps) {
  const { cart, addCoffeeToCart } = useContext(CoffeesContext);
  const [quantityToBuy, setquantityToBuy] = useState(1);

  function updateQuantityToBuy(newQuantity: number) {
    setquantityToBuy(newQuantity);
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart({ id, quantity: quantityToBuy });

    updateQuantityToBuy(1);
  }

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'code',
  })
    .format(price)
    .replace('BRL', '');

  return (
    <CardContainer key={id}>
      <img src={image} alt={description} />

      <CardText>
        {tags.map((tag) => {
          return <CardTag key={tag}>{tag}</CardTag>;
        })}

        <h2>{name}</h2>

        <CardDescription>{description}</CardDescription>
      </CardText>

      <CardInfo>
        <CardPrice>
          R$
          <span>{priceFormatted}</span>
        </CardPrice>

        <CoffeeBuyContainer>
          <SelectQuantity
            maxQuantity={quantity}
            quantityToBuy={quantityToBuy}
            updateQuantityToBuy={updateQuantityToBuy}
          />
          <ShoppingCartButton onClick={handleAddCoffeeToCart}>
            <ShoppingCart weight="fill" />
          </ShoppingCartButton>
        </CoffeeBuyContainer>
      </CardInfo>
    </CardContainer>
  );
}
