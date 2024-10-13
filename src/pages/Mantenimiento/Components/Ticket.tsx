import { styled } from 'styled-components'
import Detalle from '../../../components/Detalle'
import { Boton } from '../../ComponentsUI/Botones'
import camionRojo from '../../../../public/camion-mantenimiento.svg';


const Ticket = (props) => {

    const ContainerTicket = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 25px 0;
        min-width: 70vh;
        min-height: 30vh;
        border: 1px solid black;
    `
    const NameTicket = styled.div`
        margin: 25px 0;
        font-size: 1.85rem;
        font-weight: bold;
        border-bottom: 3px solid red
    `

    const ContainerDescTicket = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const ImgTicket = styled.div`
        margin: 0 25px;
        min-width: 20vh;
        min-height: 15vh;
        background-image: url("${camionRojo}");
        background-size: cover;
        background-position: center;
    `
    const DescTicket = styled.div``

    return(
        <ContainerTicket>
            <NameTicket> Ticket {props.name}</NameTicket>
            <ContainerDescTicket>
                <ImgTicket></ImgTicket>
                <DescTicket>
                    <Detalle tipo={"Matricula"} valor={props.matricula}></Detalle>
                    <Detalle tipo={"Tipo"} valor={props.estado}></Detalle>
                    <Boton>Ver Detalle</Boton>
                    <Boton>Cerrar Ticket</Boton>
                </DescTicket>
            </ContainerDescTicket>
        </ContainerTicket>
    )
}


export default Ticket;