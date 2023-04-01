import { CurrencyDollar, MapPinLine } from 'phosphor-react';
import { OrderRegistrationContainer, TitleContainer } from './styles';

export function OrderRegistration() {
  return (
    <OrderRegistrationContainer>
      <h2>Complete seu pedido</h2>

      <section>
        <TitleContainer iconColor="yellow">
          <MapPinLine width={22} height={22} />

          <div>
            <h4>Endereço de Entrega</h4>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </TitleContainer>
      </section>

      <section>
        <TitleContainer iconColor="purple">
          <CurrencyDollar width={22} height={22} />

          <div>
            <h4>Pagamento</h4>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </TitleContainer>
      </section>
    </OrderRegistrationContainer>
  );
}
