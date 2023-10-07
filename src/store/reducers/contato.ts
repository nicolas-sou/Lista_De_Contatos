import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Numero from '../../models/Numero'
import * as enums from '../../utils/enums/contato'

type NumeroState = {
  itens: Numero[]
}

const initialState: NumeroState = {
  itens: [
    {
      id: 1,
      nome: 'Secretaria Ana',
      telefone: '(11) 953245985',
      email: 'Analuisa123@gmail.com',
      descricao: 'Falar que tem papéis atrasados.',
      prioridade: enums.Prioridade.EMPRESA
    },
    {
      id: 2,
      nome: 'Guilherme',
      telefone: '(11) 95768493675',
      email: 'Guilhermesoares141@gmail.com',
      descricao: 'Marcar pra sair.',
      prioridade: enums.Prioridade.AMIGOS
    },
    {
      id: 3,
      nome: 'Pizza vaquira',
      telefone: '(11) 937593729',
      email: 'Pizzariavaquiro@gmail.com',
      descricao: 'Melhor pizzaria.',
      prioridade: enums.Prioridade.COMIDAS
    },
    {
      id: 4,
      nome: 'keven',
      telefone: '(11) 973573822',
      email: 'Kevenmarques87@gmail.com',
      descricao: 'Falar com patrão que está faltando mercadoria.',
      prioridade: enums.Prioridade.TRABALHO
    },
    {
      id: 5,
      nome: 'Brian',
      telefone: '(11) 983465728',
      email: 'Briansousa41@gmail.com',
      descricao: 'ligar para meu irmão pra me pagar.',
      prioridade: enums.Prioridade.FAMILIA
    }
  ]
}
const numeroSlice = createSlice({
  name: 'numero',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((numero) => numero.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Numero>) => {
      const indexDanumero = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDanumero >= 0) {
        state.itens[indexDanumero] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Numero>) => {
      const numeroJaExiste = state.itens.find(
        (numero) =>
          numero.nome.toLocaleLowerCase() ===
          action.payload.nome.toLocaleLowerCase()
      )

      if (numeroJaExiste) {
        alert('Já existe esse conatato ;)')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = numeroSlice.actions

export default numeroSlice.reducer
