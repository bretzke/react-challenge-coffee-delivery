import { BannerContainer, MessageIconContainer } from './styles';
import { MessageWithIcon } from './MessageWithIcon';
import { defaultTheme } from '../../../../styles/themes/default';
import banner from '../../../../assets/banner.png';

export function Banner() {
  const messages = [
    {
      icon: 'cart',
      message: 'Compra simples e segura',
      backgroundColor: defaultTheme['yellow-dark'],
    },
    {
      icon: 'cube',
      message: 'Embalagem mantém o café intacto',
      backgroundColor: defaultTheme['base-text'],
    },
    {
      icon: 'timer',
      message: 'Entrega rápida e rastreada',
      backgroundColor: defaultTheme.yellow,
    },
    {
      icon: 'coffee',
      message: 'O café chega fresquinho até você',
      backgroundColor: defaultTheme.purple,
    },
  ];
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>

        <MessageIconContainer>
          {messages.map((message) => {
            return <MessageWithIcon key={message.icon} {...message} />;
          })}
        </MessageIconContainer>
      </div>
      <div>
        <img src={banner} alt="Banner - Um copo de café com o nome da marca" />
      </div>
    </BannerContainer>
  );
}
