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
