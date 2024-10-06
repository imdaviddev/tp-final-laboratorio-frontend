import Header from '../../components/HeaderComponent/Header';
import BasicBars from '../../components/reportesGerencia/BasicBars';
import { MensajeBienvenida, ContainerPadre, ContainerHijo, DescHijo, Reportes } from '.';
import './css/conductor.css'


const ConductorReportes = () => {
    return <div className='page-container'>
        <Header rol='Conductor' />
        <ContainerPadre>
            <MensajeBienvenida>Reportes</MensajeBienvenida>
            <ContainerHijo>
                <DescHijo>Recorridos realizados (en KM)</DescHijo>

                <Reportes>
                    <BasicBars></BasicBars> {/* GRAFICO DE BARRAS, ¿SE PODRIA GENERALIZAR EL ESTILO?*/}
                </Reportes>
            </ContainerHijo>
        </ContainerPadre>
    </div>

}

export default ConductorReportes;