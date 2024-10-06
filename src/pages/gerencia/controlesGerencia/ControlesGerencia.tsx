import Header from '../../../components/HeaderComponent/Header';
import './controlesGerencia.css';
import VerticalTabs from '../../../components/controlesGerencia/VerticalTabs';

const ControlesGerencia = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <div className="wrapper-mensaje-bienvenida">
            <h1>Registros de Flota</h1>
        </div>
        <div className='container'>
            <VerticalTabs></VerticalTabs>
        </div>
    </div>

}

export default ControlesGerencia;