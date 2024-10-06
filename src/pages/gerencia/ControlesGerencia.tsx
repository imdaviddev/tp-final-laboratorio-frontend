import Header from '../../components/HeaderComponent/Header';
import { MensajeBienvenida, Container } from '../ComponentsUI';
import VerticalTabs from '../../components/controlesGerencia/VerticalTabs';

const ControlesGerencia = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <Container>
            <MensajeBienvenida>Registros de Flota</MensajeBienvenida>
        </Container>
        <VerticalTabs/> {/*Menu vertical, contiene Graficos*/}
    </div>
}

export default ControlesGerencia;