import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

import * as enums from '../../utils/enums/contato'

type TagProps = {
  prioridade?: enums.Prioridade
  parametro: 'prioridade'
}

function retornaCorDeFundo(props: TagProps): string {
  if (props.parametro == 'prioridade') {
    if (props.prioridade === enums.Prioridade.EMPRESA) return variaveis.vermelho
    if (props.prioridade === enums.Prioridade.COMIDAS) return variaveis.amarelo
    if (props.prioridade === enums.Prioridade.TRABALHO) return variaveis.azul
    if (props.prioridade === enums.Prioridade.AMIGOS) return variaveis.roxo
    if (props.prioridade === enums.Prioridade.FAMILIA) return variaveis.verde2
    if (props.prioridade === enums.Prioridade.NORMAL) return variaveis.laranja
  }

  return '#ccc'
}

export const Card = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const Telefone = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 14px;
  color: #a4a4a4;
`
export const Email = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 14px;
  color: #a4a4a4;
`

export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`

export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none;
  border: none;
  background-color: transparent;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

export const Botao = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
`

export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
