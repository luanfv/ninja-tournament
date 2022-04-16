interface IButton {
  text: string;
  disabled?: boolean;
  onPress: () => void;
}

export { IButton };
