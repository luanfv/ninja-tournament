import 'styled-components';

interface IStyleGuide {
  colors: {
    white: string;
    black: string;
    gray: string;
    red: string;
    green: string;
    primary: string;
    secondary: string;
  };
  fonts: {
    large: number;
    medium: number;
    small: number;
  };
  spacing: number;
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends IStyleGuide {}
}
