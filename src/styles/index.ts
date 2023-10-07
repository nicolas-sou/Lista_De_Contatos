import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Numeros/styles'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: bold;
`

export const Campo = styled.input`
  padding: 8px;
  background-color: #f0ffff;
  border-radius: 8px;
  font-weight: bold;
  color: #666666;
  border-color: #666666;
  width: 100%;
  margin-bottom: 10px;
`
export const BotaoVoltar = styled(Botao)`
  background-color: red;
  margin-right: 20px;
`

export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde};
`

export const Faixa = styled.main`
  background-color: #2f4f4f;
  text-align: center;
  padding: 24px;
  font-size: 23px;
  color: #ffff;
`
export default EstiloGlobal
