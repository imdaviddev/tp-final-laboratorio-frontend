import '../css/main.css'
import Estatus from './Estatus'
import CardHome from './CardHome'
import camion from '../../public/camion.svg'
import imgInicio from '../../public/imgDescInicio.svg'

export default function Main() {
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

    return (
        <div>
            <Estatus />
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
    )
}

