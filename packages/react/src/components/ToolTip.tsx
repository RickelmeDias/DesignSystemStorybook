import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const ToolTip = styled('div', {
  position: 'relative',
  padding: '$3 $4',
  borderRadius: '$md',
  backgroundColor: '$gray900',
  border: '1px solid $gray600',
})

export interface ToolTipProps extends ComponentProps<typeof ToolTip> {
  as?: ElementType
}

ToolTip.displayName = 'ToolTip'
