import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 0px;

  nav {
    display: flex;
    align-items: center;
    gap: 12px;

    a {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      width: 38px;
      height: 38px;
      border-radius: 6px;
      background: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};

      &:hover {
      }

      &.active {
      }
    }

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 8px;
      gap: 4px;
      width: 143px;
      height: 38px;
      border-radius: 6px;
      border: none;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }
`;

export const CartTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20px;
  height: 20px;
  right: -8.35px;
  top: -8px;
  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 1000px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
`;
