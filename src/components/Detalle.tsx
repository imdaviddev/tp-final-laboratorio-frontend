import { styled } from "styled-components"

interface Props {

    tipo: string | number // | Puede ser un tipo de dato O el otro
    valor: string | number
}

const StyleDetalle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    font-family: arial;
    font-size: 15px; 
    color: red;
`

export default function Detalle(props: Props) {
    return (
        <StyleDetalle> <b>{props.tipo}:</b> {props.valor}</StyleDetalle>
    )
}

