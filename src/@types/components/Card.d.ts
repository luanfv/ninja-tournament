import { INinja } from '@src/@types';

interface ICard {
  ninja: INinja;
  isSelected?: boolean;
  disabled?: boolean;
  margin?: number;
  position?: number;
  onPress?: () => void;
  onLongPress?: () => void;
}

export { ICard };
