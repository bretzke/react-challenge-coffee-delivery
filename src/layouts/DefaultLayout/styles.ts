import styled from 'styled-components';

export const LayoutContainer = styled.div`
  padding: 0px 160px;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    line-height: 130%;
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

  h3 {
    margin-top: 16px;
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
    font-weight: normal;
    line-height: 130%;
  }
`;
