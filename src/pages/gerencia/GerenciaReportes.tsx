import { MensajeBienvenida, ContainerPadre, ContainerHijo, Container } from '../ComponentsUI';
import BasicTabs from '../../components/Graphs/BasicTabs';

const ReportesGerencia = () => {
    return <>
        <ContainerPadre>
            <MensajeBienvenida>Reporte de Gastos</MensajeBienvenida>
            <ContainerHijo>
                <Container>
                    <BasicTabs></BasicTabs>
                </Container>
            </ContainerHijo>
        </ContainerPadre>
    </>

}

export default ReportesGerencia;