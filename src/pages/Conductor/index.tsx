import { styled } from "styled-components"
import ConductorInicio from "./ConductorInicio"
import ConductorReportes from "./ConductorReportes"
import ConductorRecorrido from "./ConductorRecorrido"
import ConductorPageLayout from "./ConductorPageLayout"
import { customScrollbar } from "../../constants/styles"

export const MensajeBienvenida = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
  padding: 20px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: white;
  background-color: red;
  border-radius: 10px;
  box-shadow: 3px 3px 3px gray;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  /* Estilos para pantallas pequeñas (móviles) */
  @media (max-width: 600px) {
    width: 250px;
    font-size: 18px;
  }
`

export const DescHijo = styled.div`
  margin-top: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: red;
  background-color: #f9f9f9;
  border: 1px solid #C90035; /* Bordecito bonito con el terciario */
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px; /* Para que no se extienda demasiado en pantallas grandes */
`

//Centra todo lo disponible de la pagina ¿Se puede mejorar?
export const ContainerPadre = styled.div`
    margin-top: 125px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

//Contiene bordes de sombra y los datos en si del recorrido
export const ContainerHijo = styled.div`
    height: 350px;
    width: 450px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    box-shadow: 5px 5px 5px 6px gray;

    @media (max-width: 600px) {
        width: 350px
    }
`
//Centra El detalle e imagen del recorrido
export const ContainerDetalle = styled.div`
  height: 200px;
  padding-top: 55px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  ${customScrollbar}
`

export const ContainerImgDetalle = styled.div`
  display: flex;
  align-items: center;
`
export const ImgConductorInicio = styled.div`
  background-image: url("../../../public/conductorInicio.svg");
  background-size: cover; 
  background-position: center; 
  width: 160px; 
  height: 160px; 

  @media (max-width: 600px) {
    width: 100px; 
    height: 100px; 
    }
`;

export const Button = styled.button`
    padding: 15px;
    margin: 10px;
    color: white;
    background-color: red;
    border-style: none;
    border-radius: 15px;
    box-shadow: 5px 5px 5px gray;
`

export const RecorridoDetalle = styled.div`
  margin: 5px;
  padding:10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 10px;

  @media (max-width: 600px) {
    font-size: 12px;
  }

`
//Estilo para los reportes, podria verse de otra forma
export const Reportes = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: center;
    height: 200px;
    width: 450px;

    @media (max-width: 600px) {
        width: 350px
    }
`

export {
  ConductorInicio,
  ConductorRecorrido,
  ConductorReportes,
  ConductorPageLayout
}