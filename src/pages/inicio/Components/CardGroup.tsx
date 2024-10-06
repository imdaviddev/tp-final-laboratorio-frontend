import { ContainerCardGroup } from ".."
import CardHome from "./CardHome"

export default function CardGroup({ cardData }) {
    return (
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
    )
}

