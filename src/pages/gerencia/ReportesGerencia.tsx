import Header from '../../components/HeaderComponent/Header';
import { MensajeBienvenida, ContainerPadre, ContainerHijo } from '../ComponentsUI';
import BasicTabs from '../../components/reportesGerencia/BasicTabs';

const ReportesGerencia = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <ContainerPadre>
            <MensajeBienvenida>Reporte de Gastos</MensajeBienvenida>
            <ContainerHijo>
                    <div className='container-graphs'>
                        <BasicTabs></BasicTabs>
                    </div>
            </ContainerHijo>
        </ContainerPadre>
    </div>
}

export default ReportesGerencia;