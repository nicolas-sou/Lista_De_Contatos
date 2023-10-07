import { useSelector } from 'react-redux'
import Contato from '../../components/Numeros'
import { MainContainer, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeNumeros = () => {
  const { itens } = useSelector((state: RootReducer) => state.tarefas)
  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraNumero = () => {
    let numerosFiltradas = itens
    if (termo !== undefined) {
      numerosFiltradas = numerosFiltradas.filter(
        (item) => item.nome.toLowerCase().search(termo.toLowerCase()) >= 0
      )

      if (criterio === 'prioridade') {
        numerosFiltradas = numerosFiltradas.filter(
          (item) => item.prioridade === valor
        )
      }

      return numerosFiltradas
    } else {
      return itens
    }
  }

  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = ''
    const complementacao =
      termo !== undefined && termo.length > 0 ? `e "${termo}"` : ''

    if (criterio === 'todas') {
      mensagem = `${quantidade} Contato encontrado como: todas ${complementacao}`
    } else {
      mensagem = `${quantidade} Contato encotrado como: "${`${valor}`}" ${complementacao}`
    }

    return mensagem
  }

  const Numeros = filtraNumero()
  const mensagem = exibeResultadoFiltragem(Numeros.length)

  return (
    <MainContainer>
      <Titulo as="p">{mensagem}</Titulo>
      <ul>
        {filtraNumero().map((t) => (
          <li key={t.nome}>
            <Contato
              id={t.id}
              nome={t.nome}
              telefone={t.telefone}
              email={t.email}
              descricao={t.descricao}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeNumeros
