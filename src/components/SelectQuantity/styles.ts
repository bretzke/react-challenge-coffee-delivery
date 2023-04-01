import styled from 'styled-components';

export const SelectQuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  gap: 4px;
  height: 40px;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    color: ${(props) => props.theme.purple};
    width: 14px;
    height: 14px;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
    width: 25px;
    text-align: center;
  }
`;
