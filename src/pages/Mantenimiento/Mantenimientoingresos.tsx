import { styled } from 'styled-components'
import { BoxGeneral, ContainerGeneral, FilaGeneral, TituloPage, VerDetalle } from '../ComponentsUI'
import Camion from '../../../public/camion.svg';

export const ColumnaGeneral = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeecec;
  box-shadow: 2px 2px 2px gray;
  padding: 1rem;
  border-radius: 0.5rem;
`

export const TituloGeneral = styled.div`
  color: red;
  font-size: 2rem;
  font-weight: bold;
`

const Mantenimientoingresos = () => {
  return <>
    <TituloPage>
        Ingresos
    </TituloPage>
    <ContainerGeneral style={{background: 'none'}}>
      <ColumnaGeneral>
        <TituloGeneral>
          Vehiculo #C4m10n15
        </TituloGeneral>
        <FilaGeneral style={{background: 'none'}}>
          <BoxGeneral style={{width: '120px'}}>
            <img src={Camion} style={{width: '100$', height: '100%'}}/>
          </BoxGeneral>
          <BoxGeneral>
            <p>Matricula AIE: S40</p>
            <p>Diagnostico: Optica Rota</p>
            <p>Estado: pendiente</p>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
      </ColumnaGeneral>

      <ColumnaGeneral>
        <TituloGeneral>
          Vehiculo #C4m10n15
        </TituloGeneral>
        <FilaGeneral style={{background: 'none'}}>
          <BoxGeneral style={{width: '120px'}}>
            <img src={Camion} style={{width: '100$', height: '100%'}}/>
          </BoxGeneral>
          <BoxGeneral>
            <p>Matricula AIE: S40</p>
            <p>Diagnostico: Optica Rota</p>
            <p>Estado: pendiente</p>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
      </ColumnaGeneral>
      <ColumnaGeneral>
        <TituloGeneral>
          Vehiculo #C4m10n15
        </TituloGeneral>
        <FilaGeneral style={{background: 'none'}}>
          <BoxGeneral style={{width: '120px'}}>
            <img src={Camion} style={{width: '100$', height: '100%'}}/>
          </BoxGeneral>
          <BoxGeneral>
            <p>Matricula AIE: S40</p>
            <p>Diagnostico: Optica Rota</p>
            <p>Estado: pendiente</p>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
      </ColumnaGeneral>
    </ContainerGeneral>
  </>
}

export default Mantenimientoingresos