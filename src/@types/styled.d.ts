import 'styled-components';

interface IStyleGuide {
  colors: {
    white: string;
    black: string;
    gray: string;
    grayDark: string;
    red: string;
    green: string;
    gold: string;
  };
  fonts: {
    large: string;
    medium: string;
    small: string;
  };
  spacing: number;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends IStyleGuide {}
}
