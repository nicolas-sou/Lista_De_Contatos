import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import { remover, editar } from '../../store/reducers/contato'
import NumeroClass from '../../models/Numero'
import { BotaoSalvar } from '../../styles'

type Props = NumeroClass

const Numeros = ({
  id,
  nome,
  telefone,
  email,
  prioridade,
  descricao: descricaoOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  return (
    <S.Card>
      <S.Titulo>{nome}</S.Titulo>
      <S.Telefone>Número: {telefone}</S.Telefone>
      <S.Email>Email: {email}</S.Email>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar
              onClick={() => {
                dispatch(
                  editar({
                    id,
                    nome,
                    telefone,
                    email,
                    prioridade,
                    descricao
                  })
                )
                setEstaEditando(false)
              }}
            >
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>Editar</S.Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Numeros
