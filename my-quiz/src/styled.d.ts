import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    Primary_1: string;
    Primary_2: string;
    Primary_3: string;
    Success_1: string;
    Success_2: string;
    Danger_1: string;
    Danger_2: string;
    Warning_1: string;
    Warning_2: string;

    // 직접 입력하기.4
  }
}
