import styled from 'styled-components';

export const MessageWithIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  div {
    padding: 8px;
    gap: 8px;
    color: ${(props) => props.theme.background};
    width: 32px;
    height: 32px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 1000px;
  }

  span {
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
  }
`;
