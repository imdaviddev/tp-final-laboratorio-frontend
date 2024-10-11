import { MensajeBienvenida, ContainerPadre, ContainerHijo, Container } from '../ComponentsUI';
import BasicTabs from '../../components/BasicTabs/BasicTabs';

const ReportesGerencia = () => {
    return <>
        <ContainerPadre>
            <MensajeBienvenida>Reporte de Gastos</MensajeBienvenida>
            <ContainerHijo>
                <Container>
                    <BasicTabs 
                    subdesc="Gastos"
                    subdesc2do="Recorridos" 
                    descripcionBoton="Gastos" 
                    descripcionBoton2do="Recorridos"
                    />
                </Container>
            </ContainerHijo>
        </ContainerPadre>
    </>
}

export default ReportesGerencia;