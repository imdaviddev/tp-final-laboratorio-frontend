import { styled } from 'styled-components'
import { ContainerPadre, MensajeBienvenida } from '../ComponentsUI'
import FormNuevoIngreso from './Components/FormNuevoIngreso'

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

const MantenimientoIngresos = () => {
  return (
    <ContainerPadre>
      <MensajeBienvenida>Nuevo Ingreso</MensajeBienvenida>
      <FormNuevoIngreso></FormNuevoIngreso>
    </ContainerPadre>
  )
}

export default MantenimientoIngresos