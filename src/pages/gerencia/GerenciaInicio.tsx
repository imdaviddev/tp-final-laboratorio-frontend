import Recorrido from '../../components/Recorrido';
import { MensajeBienvenida, ContainerPadre, ContainerHijo, ContainerDetalle, DescHijo } from '../ComponentsUI';
import logoRecorridos from '../../../public/logoRecorridos.svg'

const GerenciaHomePage = () => {
    return <>
        <ContainerPadre>
            <MensajeBienvenida>Hola, Val</MensajeBienvenida>

            <ContainerHijo>
                <DescHijo>Recorridos durante esta semana</DescHijo>
                <ContainerDetalle>
                        <Recorrido numero="#049" />
                        <Recorrido numero="#048" />
                        <Recorrido numero="#049" />
                        <Recorrido numero="#051" />
                        <Recorrido numero="#052" />
                </ContainerDetalle>
            </ContainerHijo>
        </ContainerPadre>
    </>
}

export default GerenciaHomePage;
