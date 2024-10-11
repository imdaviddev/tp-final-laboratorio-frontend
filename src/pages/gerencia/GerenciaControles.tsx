import { MensajeBienvenida, Container } from '../ComponentsUI';
import VerticalTabs from '../../components/Graphs/VerticalTabs';

const ControlesGerencia = () => {
    return <>
        <Container>
            <MensajeBienvenida>Registros de Flota</MensajeBienvenida>
        </Container>
        <VerticalTabs /> {/*Menu vertical, contiene Graficos*/}
    </>

}

export default ControlesGerencia;