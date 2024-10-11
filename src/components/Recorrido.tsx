import camionRojo from '../../public/camionRojo.svg'
import { styled } from "styled-components"
import Detalle from './Detalle';


interface Props {

    numero: string | number // | Puede ser un tipo de dato O el otro 
}

const RecorridoContainer = styled.div`
    margin: 5px;
    padding: 5px;
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
    width: 3.5rem;
    height: 3.5rem;
`

const DescRecorrido = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export default function Recorrido(props: Props) {
    return (
        <RecorridoContainer>
            <ImgRecorrido></ImgRecorrido>
            <DescRecorrido>
               <Detalle tipo="Recorrido" valor={props.numero}></Detalle>
                <a href="#">Ver detalle</a>
            </DescRecorrido>
        </RecorridoContainer>

    )
}