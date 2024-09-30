import '../css/main.css'
import Estatus from './Estatus'
import CardHome from './CardHome'

export default function Main() {
    const cardData = [
        {
            title: "Lo mejor para tus encomiendas",
            contenido: "Contamos con un equipo de profesionales capacitados para brindarte el mejor servicio",
            image: "./Imagenes/imgDescInicio.svg"
        },
        {
            title: "Conectados por todo el pais",
            contenido: "Amazona realiza envios a todo el pais y dispone de sucursales donde podrás retirar tus paquetes",
            image: "./Imagenes/camion.svg"
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

