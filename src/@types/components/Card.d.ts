import { IShinobi } from '@src/@types';

interface ICard {
  shinobi: IShinobi;
  isSelected?: boolean;
  disabled?: boolean;
  margin?: number;
  position?: number;
  onPress?: () => void;
  onLongPress?: () => void;
}

export { ICard };
