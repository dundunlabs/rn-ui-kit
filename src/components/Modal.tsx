import React from "react"
import withStyle from "../hocs/withStyle"
import { ModalProps } from "../theme/components/modal"
import { Modal as RNModal, View } from "react-native"
import useTheme from "../hooks/useTheme"

const ModalBackdrop = withStyle(View)(({ colors }) => ({
  backgroundColor: colors.backdrop,
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}))

const ModalContent = withStyle(View)(({ colors, space }) => ({
  backgroundColor: colors.background,
  borderRadius: space(2),
  marginHorizontal: space(2)
}))

function Modal({ children, ...props }: ModalProps) {
  const { components: { Modal: { defaultProps } }} = useTheme()

  return (
    <RNModal
      {...defaultProps}
      {...props}
    >
      <ModalBackdrop>
        <ModalContent>
          {children}
        </ModalContent>
      </ModalBackdrop>
    </RNModal>
  )
}

export default Modal