import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      white: string;
      black: string;
      red: string;
      grey: string;
    };
  }
}
