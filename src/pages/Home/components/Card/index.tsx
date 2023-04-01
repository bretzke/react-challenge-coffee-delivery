import {
  CardContainer,
  CardDescription,
  CardInfo,
  CardPrice,
  CardTag,
  CardTagContainer,
  CardText,
  CoffeeBuyContainer,
  ShoppingCartButton,
} from './style';
import { SelectQuantity } from './../../../../components/SelectQuantity/index';
import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';
import { CoffeesContext } from '../../../../contexts/CoffeesContext';
import { FormatToReal } from '../../../../utils/formatToReal';

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
  const { addCoffeeToCart } = useContext(CoffeesContext);
  const [quantityToBuy, setquantityToBuy] = useState(1);

  function updateQuantityToBuy(newQuantity: number) {
    setquantityToBuy(newQuantity);
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart({ id, quantity: quantityToBuy });

    updateQuantityToBuy(1);
  }

  return (
    <CardContainer key={id}>
      <img src={image} alt={description} />

      <CardText>
        <CardTagContainer>
          {tags.map((tag) => {
            return <CardTag key={tag}>{tag}</CardTag>;
          })}
        </CardTagContainer>

        <h2>{name}</h2>

        <CardDescription>{description}</CardDescription>
      </CardText>

      <CardInfo>
        <CardPrice>
          R$
          <span>{FormatToReal(price)}</span>
        </CardPrice>

        <CoffeeBuyContainer>
          {quantity > 0 && (
            <>
              <SelectQuantity
                maxQuantity={quantity}
                quantityToBuy={quantityToBuy}
                updateQuantityToBuy={updateQuantityToBuy}
              />
              <ShoppingCartButton onClick={handleAddCoffeeToCart}>
                <ShoppingCart weight="fill" />
              </ShoppingCartButton>
            </>
          )}

          {quantity <= 0 && (
            <h2 style={{ width: '100%', margin: 0 }}>ESGOTADO</h2>
          )}
        </CoffeeBuyContainer>
      </CardInfo>
    </CardContainer>
  );
}
