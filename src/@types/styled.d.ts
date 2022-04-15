import 'styled-components';

interface IStyleGuide {
  colors: {
    white: string;
    black: string;
    gray: string;
    red: string;
    green: string;
  };
  fonts: {
    large: string;
    medium: string;
    small: string;
  };
}

declare module 'styled-components/native' {
  export interface DefaultTheme extends IStyleGuide {}
}
