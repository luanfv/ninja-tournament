interface IMenuItem {
  isMain?: boolean;
  type: 'tournament' | 'battle' | 'historic';
  onPress: () => void;
}

interface IMenuList {
  items: IMenuItem[];
}

export { IMenuList, IMenuItem };
