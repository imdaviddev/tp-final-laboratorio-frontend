import Recorrido from '../../components/Recorrido';
import { MensajeBienvenida, ContainerPadre, ContainerHijo, ContainerDetalle, DescHijo } from '../ComponentsUI';
import logoRecorridos from '../../../public/logoRecorridos.svg'
import { styled } from "styled-components"
import useRecorridostore from '../../store/recorridosContext';
import { useEffect } from 'react';

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
const recorridosPrueba = [
    {
        id_viaje: "K560",
        estado: "EN CURSO"
    },
    {
        id_viaje: "F360",
        estado: "FINALIZADO"
    },
    {
        id_viaje: "k560",
        estado: "EN CURSO"
    },
    {
        id_viaje: "k560",
        estado: "ASIGNADO"
    },
    {
        id_viaje: "k560",
        estado: "NO FINALIZADO"
    }

]
const GerenciaHomePage = () => {

    const { recorridos, obtenerRecorridos, hasFetched } = useRecorridostore();

    useEffect(() => {
        if (!hasFetched) obtenerRecorridos();
    }, [obtenerRecorridos, hasFetched]);

    return <>
        <ContainerPadre>
            <MensajeBienvenida>Hola, Val</MensajeBienvenida>

            <ContainerHijo>
                <DescHijo>Recorridos durante esta semana</DescHijo>
                <ContainerDetalle>
                    <Prueba>
                        {recorridosPrueba.map((recorrido) => (
                            <Recorrido
                                key={recorrido.id_viaje}
                                id_viaje={recorrido.id_viaje}
                                estado={recorrido.estado}
                            />
                        ))}
                    </Prueba>
                </ContainerDetalle>
            </ContainerHijo>
        </ContainerPadre>
    </>
}

export default GerenciaHomePage;
