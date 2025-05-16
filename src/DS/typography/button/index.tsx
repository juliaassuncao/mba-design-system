import type { PropsWithChildren } from "react";
import { ButtonStyle } from "./styles";

export function ButtonTypo({ children }: PropsWithChildren) {
  return <ButtonStyle>{children}</ButtonStyle>
}
