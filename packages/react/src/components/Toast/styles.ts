import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  gap: '$1',
  padding: '$5',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  color: '$gray200',
  border: '1px solid $gray600',
})

export const ToastHeaderContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  color: '$white',
  border: 'none',
  padding: 0,
  margin: 0,
  backgroundColor: 'transparent',
})

export const CloseButtonContainer = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'center',
  color: '$gray200',
  border: 'none',
  padding: 0,
  margin: 0,
  backgroundColor: 'transparent',

  '&:hover': {
    cursor: 'pointer',
    color: '$gray100',
  },
})
