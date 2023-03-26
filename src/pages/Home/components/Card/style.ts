import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 256px;
  height: 310px;
  position: relative;
  padding: 20px;
  background-color: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  border-radius: 6px 36px;
  margin-bottom: 40px;

  img {
    position: absolute;
    top: -20px;
    width: 120px;
    height: 120px;
  }

  h2 {
    margin: 16px 0px 8px 0px;
  }
`;

export const CardText = styled.div`
  margin-top: 92px;
`;

export const CardTagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
`;

export const CardTag = styled.p`
  display: inline;
  padding: 4px 8px;
  background: ${(props) => props.theme['yellow-light']};
  border-radius: 100px;
  font-weight: bold;
  font-size: 10px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-dark']};
`;

export const CardDescription = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme['base-label']};
`;

export const CardInfo = styled.div`
  height: 36px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardPrice = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme['base-text']};

  span {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 130%;
  }
`;

export const CoffeeBuyContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 131px;
  text-align: center;
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 40px;
  width: 38px;
  border: none;
  background: ${(props) => props.theme['purple-dark']};
  border-radius: 6px;
  font-size: 18px;
  color: #f3f2f2;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`;
