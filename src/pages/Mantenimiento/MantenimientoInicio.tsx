import { ContainerPadre, MensajeBienvenida } from '../ComponentsUI';
import BasicTabs from './Components/BasicTabs/BasicTabs';


const MantenimientoInicio = () => {

  return <>
    <ContainerPadre>
      <MensajeBienvenida>Hola, Melina</MensajeBienvenida>
      <BasicTabs
      subdesc ="En curso"
      subdesc2do ="Cerrados"
      ></BasicTabs>
    </ContainerPadre>
  </>
}

export default MantenimientoInicio
