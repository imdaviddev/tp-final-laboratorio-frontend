import { styled } from 'styled-components'
import { BoxGeneral, ContainerGeneral, FilaGeneral, TituloPage, VerDetalle } from '../ComponentsUI'
import { ColumnaGeneral } from './Mantenimientoingresos'
import Camion from '../../../imagenes/camion.svg';

export const TituloGeneral = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: red;
  width: 100%;
  text-align: center;
`
export const ButtonGeneral = styled.div`
  padding: 0.5rem 1rem;
  color: white;
  background-color: red;
  box-shadow: 2px 2px 2px gray;
  text-align: center;
  width: 180px;
  font-size: 0.8rem;
`


const MantenimientoReparaciones = () => {
  return <>
    <TituloPage>
        Reparaciones
    </TituloPage>
    <ContainerGeneral style={{background: 'none'}}>
      <ColumnaGeneral style={{alignItems: 'center', gap:'0.8rem'}}>
        <TituloGeneral> Vehiculo #C4MION12</TituloGeneral>
        <FilaGeneral style={{background: 'none'}}>
          <BoxGeneral>
            <img src={Camion} style={{width: '100%', height:'100%'}}/>  
          </BoxGeneral>
          <BoxGeneral>
            <p>Matricula: ISO 120</p>  
            <p>Diagnostic</p>
            <p>Cambio de aceite</p>
            <p>Estado: TERMINADO</p>
            <VerDetalle/>
          </BoxGeneral>  
        </FilaGeneral>   
        <ButtonGeneral>
          CERRAR TICKET  
        </ButtonGeneral>     
      </ColumnaGeneral>
    </ContainerGeneral>
  </>
  
}

export default MantenimientoReparaciones