import { styled } from "styled-components"
import { Container } from "../pages/ComponentsUI"

export default function ContainerGrafico(props) {

    const Tamanio = props.tamanio

    const ContainerGrafico = styled.div`
        display: flex;
        align-items:center;
        justify-content: center;
        width: ${Tamanio}px;
        height: ${Tamanio}px;
    `
    return (
        <Container>
            <ContainerGrafico>
                {props.grafico}
            </ContainerGrafico>
        </Container>

    )
}