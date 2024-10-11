import Header from '../../components/HeaderComponent/Header';
import { MensajeBienvenida, ContainerPadre, ContainerHijo, Container } from '../ComponentsUI';
import BasicTabs from '../../components/BasicTabs/BasicTabs';

const ReportesGerencia = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <ContainerPadre>
            <MensajeBienvenida>Reporte de Gastos</MensajeBienvenida>
            <ContainerHijo>
                <Container>
                    <BasicTabs></BasicTabs>
                </Container>
            </ContainerHijo>
        </ContainerPadre>
    </div>
}

export default ReportesGerencia;