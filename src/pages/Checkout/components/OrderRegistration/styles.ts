import styled from 'styled-components';

export const OrderRegistrationContainer = styled.div`
  width: 53%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ICON_COLOR = {
  yellow: 'yellow-dark',
  purple: 'purple-dark',
} as const;

interface TitleContainerProps {
  iconColor: keyof typeof ICON_COLOR;
}

export const TitleContainer = styled.div<TitleContainerProps>`
  display: flex;
  gap: 8px;
  align-items: flex-start;

  h4 {
    font-size: 16px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
  }

  svg {
    color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
  }
`;
