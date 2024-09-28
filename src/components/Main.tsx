import '../css/main.css'
import Estatus from './Estatus'
import CardHome from './CardHome'

export default function Main() {
    return (
        <div>
            <Estatus/>
            <div className='container-cards-group'>
                <CardHome title="Hola" contenido="soy contenido" image="img 1.svg"/>
                <CardHome/>
                <CardHome/>
            </div>
        </div>
    )
}
