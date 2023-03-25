import { Banner } from './components/Banner';
import { Card } from './components/Card/index';
import { CoffeesContainer } from './style';
import coffees from '../../data/coffees.json';

export function Home() {
  return (
    <div>
      <Banner />

      <h1 style={{ marginBottom: '54px' }}>Nossos cafés</h1>

      <CoffeesContainer>
        {coffees.map((coffee) => {
          return <Card key={coffee.id} {...coffee} />;
        })}
      </CoffeesContainer>
    </div>
  );
}
