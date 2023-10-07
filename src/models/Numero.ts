import * as enums from '../utils/enums/contato'

class Numero {
  nome: string
  telefone: string
  email: string
  prioridade: enums.Prioridade
  descricao: string
  id: number

  constructor(
    nome: string,
    telefone: string,
    email: string,
    prioridade: enums.Prioridade,
    descricao: string,
    id: number
  ) {
    this.nome = nome
    this.telefone = telefone
    this.email = email
    this.prioridade = prioridade
    this.descricao = descricao
    this.id = id
  }
}

export default Numero
