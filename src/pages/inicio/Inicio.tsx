import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from "../../components/HeaderComponent/Header";
import { ContainerImgFondo, BienvenidoInicio, ContainerStatus, StatusTextField, ButtonStatus, ContainerCardGroup } from './index'
import { PageContainer } from "../ComponentsUI";
import CardHome from '../../components/CardHome'
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
        <ContainerStatus>
          <StatusTextField>
            <TextField
              id="outlined-textarea"
              label="Ingresa tu codigo de seguimiento"
              placeholder="TX 00000485454878445"
              multiline
            />
          </StatusTextField>

          <ButtonStatus>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'red',
                '&:hover': {
                  backgroundColor: '#f5f5f5' // Color cuando haces hover
                }
              }}
            >
              Consultar Estado
            </Button>

          </ButtonStatus>

        </ContainerStatus>
      </ContainerImgFondo>

      <ContainerCardGroup>
        {cardData.map((card, index) => (
          <CardHome
            key={index}
            title={card.title}
            contenido={card.contenido}
            image={card.image}
          />
        ))}
      </ContainerCardGroup>
    </PageContainer>
  )
}

export default Inicio
