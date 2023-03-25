import { Coffee, Cube, ShoppingCart, Timer } from 'phosphor-react';
import { MessageWithIconContainer } from './styles';

interface MessageWithIconProps {
  icon: string;
  message: string;
  backgroundColor: string;
}

export function MessageWithIcon({
  icon,
  message,
  backgroundColor,
}: MessageWithIconProps) {
  function getIcon(icon: string) {
    switch (icon) {
      case 'cart':
        return <ShoppingCart weight="fill" />;
      case 'cube':
        return <Cube weight="fill" />;
      case 'timer':
        return <Timer weight="fill" />;
      case 'coffee':
        return <Coffee weight="fill" />;
    }
  }

  return (
    <MessageWithIconContainer>
      <div style={{ backgroundColor }}>{getIcon(icon)}</div>
      <span>{message}</span>
    </MessageWithIconContainer>
  );
}
