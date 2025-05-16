import type { PropsWithChildren } from "react";
import { AlertStyle } from "./styles";

export function AlertTypo({ children }: PropsWithChildren) {
  return <AlertStyle>{children}</AlertStyle>
}