import type { InputHTMLAttributes } from "react";

export interface DS_InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
    state: "default" | "checkbox"
}