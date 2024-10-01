import { BoxGeneral, ContainerGeneral, FilaGeneral, TituloPage, VerDetalle } from "../ComponentsUI"
import { ColumnaGeneral, TituloGeneral } from "./Mantenimientoingresos"
import Camion from '../../../imagenes/camion.svg';

const MantenimientoHistorial = () => {
  return <>
    <TituloPage>
      Historial de Tickets
    </TituloPage>       
    <ContainerGeneral style={{background:'none'}}>
        <FilaGeneral style={{justifyContent: 'none'}}>
            <ColumnaGeneral style={{width: '150px', backgroundColor: 'white', boxShadow: 'none'}}>
              <img src={Camion} style={{width: '100&', height: '100%'}} />
            </ColumnaGeneral>
            <BoxGeneral style={{flex: '1', display: 'flex'}}>
              <TituloGeneral style={{fontSize: '1.5rem', textAlign:'center'}}>
                  Vehiculo #C4222
              </TituloGeneral>
              <BoxGeneral>
                <p>Matricula 2443f</p>
                <p>Diagnostico</p>
                <p>Cambio de Bujia</p>
              </BoxGeneral>
              <VerDetalle/>
            </BoxGeneral>
        </FilaGeneral>
    </ContainerGeneral>
  </>    
}

export default MantenimientoHistorial
