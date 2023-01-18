import type { Meta, StoryObj } from '@storybook/react'
import { ToolTip, ToolTipProps, Text } from '@ignite-ui/react'

export default {
  title: 'Calendar/ToolTip',
  component: ToolTip,
  args: {
    children: <Text>21 de Outubro - Indisponível</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  onClick: { action: 'clicked' },
} as Meta<ToolTipProps>

export const Primary: StoryObj<ToolTipProps> = {}
