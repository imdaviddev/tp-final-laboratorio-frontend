import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Header from "../../components/HeaderComponent/Header";
import { PageContainer } from "../ComponentsUI";
import CardHome from '../../components/CardHome'
import camion from '../../../public/camion.svg'
import imgInicio from '../../../public/imgDescInicio.svg'
import '../../css/main.css'

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
      <div className="container-img-status">
        <div className='welcome-header'>Bienvenidos a Amazona</div>
        <div className='container-status-group'>
          <div className='container-status' color="secondary">
            <TextField
              id="outlined-textarea"
              label="Ingresa tu codigo de seguimiento"
              placeholder="TX 00000485454878445"
              multiline
            />
          </div>
          <Button variant="contained" color="success">
            Consultar Estado
          </Button>

        </div>
      </div>
      <div>
            <div className='container-cards-group'>
                {cardData.map((card, index) => (
                    <CardHome 
                        key={index}
                        title={card.title}
                        contenido={card.contenido}
                        image={card.image}
                    />
                ))}
            </div>
        </div>
    </PageContainer>

  )
}

export default Inicio
