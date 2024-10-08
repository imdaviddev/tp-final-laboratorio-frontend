import { MensajeBienvenida, ContainerPadre, ContainerHijo, DescHijo } from '.';
import BasicTabs from './Components/BasicTabs';
import './css/conductor.css'


const CoductorRecorrido = () => {
    return <>
        <ContainerPadre>

            <MensajeBienvenida>Tus recorridos</MensajeBienvenida>
            <ContainerHijo>
                <DescHijo>Reporte de rutas</DescHijo>
                <BasicTabs></BasicTabs>
            </ContainerHijo>
        </ContainerPadre>
    </>

}

export default CoductorRecorrido;