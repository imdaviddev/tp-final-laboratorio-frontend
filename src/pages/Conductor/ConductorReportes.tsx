import Header from '../../components/HeaderComponent/Header';
import BasicBars from '../../components/reportesGerencia/BasicBars';
import './conductor.css'


const ConductorReportes = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <div className="wrapper-mensaje-bienvenida">
            <h1>Reportes</h1>
        </div>
        <div className='container-conductor'>
            <p><b>Recorridos realizados (en km)</b></p>
            <div className='reportes-conductor'>
                <BasicBars></BasicBars>
            </div>
        </div>
    </div>

}

export default ConductorReportes;