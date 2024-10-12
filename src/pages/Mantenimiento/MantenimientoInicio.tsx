import { styled } from 'styled-components'
import { BoxGeneral, ContainerGeneral, FilaGeneral, TituloDescripcion, TituloPage } from '../ComponentsUI'
import camionRojo from '../../../public/camion.svg';

export const VerDetalle = () => {
  return <p style={{
    color: 'red',
    textDecoration: 'underline',
  }}>ver detalle</p>
}

const MantenimientoInicio = () => {

  return <>
    <TituloPage>
        Hola, Melina
    </TituloPage>
    <ContainerGeneral>
         <TituloDescripcion style={{fontWeight: 'bold', fontSize: '1.3rem'}}>
           Ultimos Ingresos
         </TituloDescripcion>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
        <FilaGeneral>
          <BoxGeneral>
            <img src={camionRojo} alt="Camión Rojo" style={{ width: '100%', height: '100%' }} />
          </BoxGeneral>
          <BoxGeneral>
             <div style={{marginBottom: '1rem'}}>
              <p>Vehiculo: #c4m10l2</p>
              <p>Diagnostico VTV vencida</p>
            </div>
            <VerDetalle/>
          </BoxGeneral>
        </FilaGeneral>
    </ContainerGeneral>
    
  </>
}

export default MantenimientoInicio
