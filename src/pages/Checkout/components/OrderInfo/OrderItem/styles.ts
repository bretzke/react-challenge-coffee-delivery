import styled from 'styled-components';

export const OrderItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 8px 4px;

  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-text']};
  }
`;

export const OrderItemActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  height: 40px;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme['base-text']};

  &:hover {
    color: ${(props) => props.theme['base-subtitle']};
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${(props) => props.theme.purple};
  }
`;

export const OrderItemDivisor = styled.hr`
  width: 100%;
  height: 0px;
  margin: 24px 0px;
  border: 1px solid ${(props) => props.theme['base-button']};
`;

export const ConfirmOrderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 8px;
  gap: 4px;
  height: 46px;
  width: 100%;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  margin-top: 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`;
