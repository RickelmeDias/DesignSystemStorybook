import { ComponentProps } from 'react'
import {
  CloseButtonContainer,
  ToastHeaderContainer,
  ToastContainer,
} from './styles'
import { X } from 'phosphor-react'
import { Text } from '../Text'

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  message: string
}

export function Toast(props: ToastProps) {
  return (
    <ToastContainer {...props}>
      <ToastHeaderContainer>
        <Text size="xl" weights="bold">
          {props.title}
        </Text>
        <CloseButtonContainer>
          <X size={20} />
        </CloseButtonContainer>
      </ToastHeaderContainer>
      <Text size="sm" color="black">
        {props.message}
      </Text>
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
