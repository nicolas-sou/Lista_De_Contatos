import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { BotaoSalvar, BotaoVoltar, MainContainer, Titulo } from '../../styles'
import { Campo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles'
import * as enums from '../../utils/enums/contato'
import Numero from '../../models/Numero'
import { cadastrar } from '../../store/reducers/contato'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setnome] = useState('')
  const [telefone, settelefone] = useState('')
  const [email, setemail] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(enums.Prioridade.TRABALHO)

  const cadastrarNumero = (evento: FormEvent) => {
    evento.preventDefault()
    const NumeroParaAdicionar = new Numero(
      nome,
      telefone,
      email,
      prioridade,
      descricao,
      9
    )

    dispatch(cadastrar(NumeroParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato:</Titulo>
      <Form onSubmit={cadastrarNumero}>
        <Campo
          value={nome}
          onChange={(evento) => setnome(evento.target.value)}
          type="text"
          placeholder="Nome:"
        />
        <Campo
          value={telefone}
          onChange={(evento) => settelefone(evento.target.value)}
          type="text"
          placeholder="Telefone:"
        />
        <Campo
          value={email}
          onChange={(evento) => setemail(evento.target.value)}
          type="text"
          placeholder="Email:"
        />
        <Campo
          value={descricao}
          onChange={({ target }) => setDescricao(target.value)}
          as="textarea"
          placeholder="Descrição do Contato:"
        />
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                value={prioridade}
                name="prioridade"
                type="radio"
                onChange={(evento) =>
                  setPrioridade(evento.target.value as enums.Prioridade)
                }
                id={prioridade}
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoVoltar onClick={() => navigate('/')}>Voltar</BotaoVoltar>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
