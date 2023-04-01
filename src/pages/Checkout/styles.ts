import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;
  margin-bottom: 32px;

  h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
  }
`;
