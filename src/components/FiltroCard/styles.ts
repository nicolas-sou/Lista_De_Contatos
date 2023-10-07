import styled from 'styled-components'

type Props = {
  ativo: boolean
}
export const Card = styled.div<Props>`
  padding: 8px;
  border: 1px solid ${(props) => (props.ativo ? '#ffff' : '#f3ffff')};
  background-color: ${(props) => (props.ativo ? '#5F9EA0' : '#F0FFFF')};
  color: ${(props) => (props.ativo ? '#ffff' : '#5F9EA0')};
  border-radius: 8px;
  cursor: pointer;
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
