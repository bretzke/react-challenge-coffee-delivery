import {
  BannerContainer,
  MessageIconBox,
  MessageIconContainer,
} from './styles';
import { MessageWithIcon } from '../MessageWithIcon';
import { defaultTheme } from '../../../../styles/themes/default';
import banner from '../../../../assets/banner.png';

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h3>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </h3>

        <MessageIconBox>
          <MessageIconContainer>
            <MessageWithIcon
              icon="cart"
              message="Compra simples e segura"
              backgroundColor={defaultTheme['yellow-dark']}
            />
            <MessageWithIcon
              icon="cube"
              message="Embalagem mantém o café intacto"
              backgroundColor={defaultTheme['base-text']}
            />
          </MessageIconContainer>
          <MessageIconContainer>
            <MessageWithIcon
              icon="timer"
              message="Entrega rápida e rastreada"
              backgroundColor={defaultTheme.yellow}
            />
            <MessageWithIcon
              icon="coffee"
              message="O café chega fresquinho até você"
              backgroundColor={defaultTheme.purple}
            />
          </MessageIconContainer>
        </MessageIconBox>
      </div>
      <div>
        <img src={banner} alt="Banner - Um copo de café com o nome da marca" />
      </div>
    </BannerContainer>
  );
}
