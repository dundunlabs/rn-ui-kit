import type { ModalProps as RNModalProps } from "react-native";

export interface ModalProps extends RNModalProps {}

export const defaultModalProps: Partial<ModalProps> = {
  transparent: true,
  animationType: 'fade'
}