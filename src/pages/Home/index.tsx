import { Banner } from './components/Banner';
import { Card } from './components/Card/index';
import { CoffeesContainer } from './style';
import { useContext } from 'react';
import { CoffeesContext } from '../../contexts/CoffeesContext';

export function Home() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <div>
      <Banner />

      <h1 style={{ marginBottom: '54px' }}>Nossos cafés</h1>

      <CoffeesContainer>
        {coffees?.map((coffee) => {
          return <Card key={coffee.id} {...coffee} />;
        })}
      </CoffeesContainer>
    </div>
  );
}
