import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'

import * as S from './styles'
import * as enums from '../../utils/enums/contato'
import { Campo } from '../../styles'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <S.Aside>
      <div>
        <Campo
          type="text"
          placeholder="Buscar"
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
        <S.Filtros>
          <FiltroCard
            valor={enums.Prioridade.FAMILIA}
            criterio="prioridade"
            legenda="Familia"
          />
          <FiltroCard
            valor={enums.Prioridade.AMIGOS}
            criterio="prioridade"
            legenda="Amigos"
          />
          <FiltroCard
            valor={enums.Prioridade.EMPRESA}
            criterio="prioridade"
            legenda="Empresa"
          />
          <FiltroCard
            valor={enums.Prioridade.COMIDAS}
            criterio="prioridade"
            legenda="Comidas"
          />
          <FiltroCard
            valor={enums.Prioridade.TRABALHO}
            criterio="prioridade"
            legenda="Trabalho"
          />
          <FiltroCard criterio="todas" legenda="Todos" />
        </S.Filtros>
      </div>
    </S.Aside>
  )
}

export default BarraLateral
