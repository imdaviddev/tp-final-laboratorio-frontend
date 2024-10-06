import { styled } from "styled-components"

export const ContainerImgFondo = styled.div`
    position: relative;
    padding: 10px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('../../public/fondoMain.jpeg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(5px); /* Hace que el fondo se vea borroso */
    z-index: -1; /* Envía la imagen de fondo detrás del contenido */
    opacity: 0.7; /* Si quieres que la imagen sea semi-transparente */
`

export const BienvenidoInicio =styled.div`
    margin-top: 45px;
    display: flex;
    color: red;
    justify-content: center;
    font-family: "Bebas Neue", sans-serif;
    font-style: italic;
    font-size: 46px;
    font-weight: bold; /* Para engrosar el texto */
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); /* Sombras */
`

export const ContainerStatus =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StatusTextField = styled.div`
    height: 110px;
    width: 350px;
    padding: 20px;
    display: flex;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.8); /* Fondo blanco semi-transparente */
    flex-direction: column;
    border-radius: 15px;
    box-shadow: 5px 5px 5px gray;
    z-index: 1; /* Asegúrate de que este contenido esté encima de la imagen borrosa */
`

export const ButtonStatus = styled.div`
    margin: 15px;
    color: red;
    background-color: white;
    border-radius: 15px;
    box-shadow: 5px 5px 5px gray;
`

//Tarjetas del inicio

export const ContainerCardGroup = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
