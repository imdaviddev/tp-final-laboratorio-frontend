import Recorrido from '../../components/Recorrido';
import { MensajeBienvenida, ContainerPadre, ContainerHijo, ContainerDetalle, DescHijo } from '../ComponentsUI';
import logoRecorridos from '../../../public/logoRecorridos.svg'
import { styled } from "styled-components"

const Prueba = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start; 
    min-height: 40vh; 
    padding: 20px 0; /* Espaciado dinámico sin sobrecargar */

    /* Estilos para pantallas celulares y tablets*/
    @media (max-width: 800px) {
    min-height: 30vh
  }
`

const GerenciaHomePage = () => {
    return <>
        <ContainerPadre>
            <MensajeBienvenida>Hola, Val</MensajeBienvenida>

            <ContainerHijo>
                <DescHijo>Recorridos durante esta semana</DescHijo>
                <ContainerDetalle>
                    <Prueba>
                        <Recorrido numero="#069" />
                        <Recorrido numero="#048" />
                        <Recorrido numero="#049" />
                        <Recorrido numero="#051" />
                        <Recorrido numero="#052" />
                    </Prueba>
                </ContainerDetalle>
            </ContainerHijo>
        </ContainerPadre>
    </>
}

export default GerenciaHomePage;
