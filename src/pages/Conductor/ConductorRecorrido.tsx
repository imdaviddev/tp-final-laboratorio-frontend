import Header from '../../components/HeaderComponent/Header';
import { RecorridoDetalle, MensajeBienvenida, ContainerPadre, ContainerHijo, DescHijo, Button } from './ComponentsUI';
import Detalle from './Components/Detalle';
import './conductor.css'


const CoductorRecorrido = () => {
    return <div className='page-container'>
        <Header rol='Conductor' />
        <ContainerPadre>

            <MensajeBienvenida>Tus recorridos</MensajeBienvenida>

            <ContainerHijo>
                <DescHijo>Reporte de rutas</DescHijo>
                <RecorridoDetalle>
                    <Detalle tipo="Recorrido" valor="#064"></Detalle>
                    <Detalle tipo="Fecha" valor="25/08/2024"></Detalle>
                    <a href="#">ver detalle</a>
                </RecorridoDetalle>
                <RecorridoDetalle>
                    <Detalle tipo="Recorrido" valor="#059"></Detalle>
                    <Detalle tipo="Fecha" valor="20/08/2024"></Detalle>
                    <a href="#">ver detalle</a>
                </RecorridoDetalle>

                <div>
                    <Button>Reporte Semanal</Button>
                    <Button>Reporte Semanal</Button>
                </div>

            </ContainerHijo>
        </ContainerPadre>
    </div>

}

export default CoductorRecorrido;