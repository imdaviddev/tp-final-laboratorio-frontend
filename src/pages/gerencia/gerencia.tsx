import Header from '../../components/HeaderComponent/Header';
import Recorrido from '../../components/Recorrido/Recorrido';
import { MensajeBienvenida, ContainerPadre, ContainerHijo, ContainerDetalle, DescHijo } from '../ComponentsUI';
import logoRecorridos from '../../../public/logoRecorridos.svg'

const GerenciaHomePage = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <ContainerPadre>
            <MensajeBienvenida>Hola, Val</MensajeBienvenida>

            <ContainerHijo>
            <DescHijo>Recorridos durante esta semana</DescHijo>
                <ContainerDetalle>
                        <Recorrido numero="#049" />
                        <Recorrido numero="#048" />
                        <Recorrido numero="#047" />
                </ContainerDetalle>
            </ContainerHijo>   
        </ContainerPadre>
    </div>
}

export default GerenciaHomePage;
