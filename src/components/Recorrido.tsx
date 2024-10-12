import camionRojo from '../../public/camionRojo.svg'
import { styled } from "styled-components"
import Detalle from './Detalle';
import { Boton } from '../pages/ComponentsUI/Botones';
import {Link} from 'react-router-dom'


const RecorridoContainer = styled.div`
    margin: 10px;
    padding: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgb(175, 169, 169);
    border-radius: 0.5rem;
    padding-left: 0.2rem;
`

const ImgRecorrido = styled.div`
    border-radius: 10px;
    margin: 5px;
    background-image: url("${camionRojo}");
    width: 3.8rem;
    height: 3.8rem;
`

const DescRecorrido = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default function Recorrido(props) {
    return (
        <RecorridoContainer>
            <ImgRecorrido></ImgRecorrido>
            <DescRecorrido>
               <Detalle tipo="Recorrido" valor={props.id_viaje}></Detalle>
               <Detalle tipo="estado" valor={props.estado}></Detalle>
     
                <Boton><Link to={`recorrido/${props.id_viaje}`}>Ver Detalle</Link></Boton>
            </DescRecorrido>
        </RecorridoContainer>

    )
}