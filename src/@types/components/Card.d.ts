import { IShinobi } from '../';

interface ICard {
  shinobi: IShinobi;
  isSelected?: boolean;
  disabled?: boolean;
  margin?: number;
  onPress?: () => void;
  onLongPress?: () => void;
}

export { ICard };
