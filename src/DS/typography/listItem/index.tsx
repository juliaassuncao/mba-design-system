import type { PropsWithChildren } from "react";
import { ListItemStyle } from "./styles";

type ListItemTypoProps = {
  $checked: boolean;
};

export function ListItemTypo({ children, $checked }: PropsWithChildren & ListItemTypoProps) {
  return <ListItemStyle $checked={$checked}>{children}</ListItemStyle>;
}