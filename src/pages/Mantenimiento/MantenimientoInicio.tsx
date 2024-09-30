import { styled } from 'styled-components'
import { TituloDescripcion, TituloPage } from '../ComponentsUI'
import camionRojo from '../../../Imagenes/camion.svg';


export const ContainerGeneral = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    gap: 0.5rem;
    background-color: #e8eae8cc;
    align-self: center;
    max-width: 500px;
    border-radius: 0.5rem;
    width: 100%;
`

export const FilaGeneral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  width: 100%;
  background-color: #f9f9f9e3;
  border-radius: 0.5rem;
`

export const BoxGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  max-width: 150px;
  border-radius: 0.5rem;
`

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
