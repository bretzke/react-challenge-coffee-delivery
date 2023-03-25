import {
  CardContainer,
  CardDescription,
  CardInfo,
  CardPrice,
  CardTag,
  CardText,
} from './style';
import { SelectQuantity } from './../../../../components/SelectQuantity/index';

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

        <SelectQuantity quantity={quantity} id={id} />
      </CardInfo>
    </CardContainer>
  );
}
