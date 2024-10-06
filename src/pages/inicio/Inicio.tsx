
import Header from "../../components/HeaderComponent/Header";
import SeguimientoForm from "./Components/SeguimientoForm";
import CardGroup from "./Components/CardGroup";
import { ContainerImgFondo, BienvenidoInicio } from './index'
import { PageContainer } from "../ComponentsUI";
import camion from '../../../public/camion.svg'
import imgInicio from '../../../public/imgDescInicio.svg'
import './cards.css'


const cardData = [
  {
    title: "Lo mejor para tus encomiendas",
    contenido: "Contamos con un equipo de profesionales capacitados para brindarte el mejor servicio",
    image: `${imgInicio}`
  },
  {
    title: "Conectados por todo el pais",
    contenido: "Amazona realiza envios a todo el pais y dispone de sucursales donde podrás retirar tus paquetes",
    image: `${camion}`
  }
];

const Inicio = () => {

  return (
    <PageContainer>
      <Header rol="Cliente" />
      <ContainerImgFondo>
        <BienvenidoInicio>Bienvenidos a Amazona</BienvenidoInicio>
        <SeguimientoForm></SeguimientoForm>
      </ContainerImgFondo>

    <CardGroup cardData={cardData}/>
    </PageContainer>
  )
}

export default Inicio
