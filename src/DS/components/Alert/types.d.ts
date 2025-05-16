import type { InputHTMLAttributes } from "react";

export interface DS_AlertProps {
  message: string
  visible: boolean
  onClose: () => void
}