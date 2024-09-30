import Header from '../../components/HeaderComponent/Header';
import './reportesGerencia.css';
import BasicTabs from '../../components/reportesGerencia/BasicTabs';

const ReportesGerencia = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <div className="wrapper-mensaje-bienvenida">
            <h1>Reporte de Gastos</h1>
        </div>
        <div className='container'>
            <div className='container-graphs'>
                <BasicTabs></BasicTabs>
            </div>
        </div>

    </div>
}

export default ReportesGerencia;