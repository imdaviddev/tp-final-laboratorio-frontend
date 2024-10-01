import Header from '../../components/HeaderComponent/Header';
import Recorrido from '../../components/Recorrido/Recorrido';
import './gerencia.css';

const GerenciaHomePage = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <div className="wrapper-mensaje-bienvenida">
            <h1>Hola, Val</h1>
        </div>
        <div className='container'>
            <div className='recorridos-container'>
                <div className='description-recorridos'><p><b>Se registraron 30 recorridos exitosos durante esta semana</b></p></div>
                <div className='recorridos'>
                    <Recorrido numero="#049" />
                    <Recorrido numero="#048" />
                    <Recorrido numero="#047" />
                </div>
            </div>
            <img src="./src/logoRecorridos.svg" alt="" className='LogoRecorridos'/>            

        </div>
    </div>
}

export default GerenciaHomePage;
