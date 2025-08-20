import "@emotion/react";
import type { Theme as AppTheme } from "./themes";

declare module "@emotion/react" {
  export interface Theme extends AppTheme {}
}
