import './recorrido.css';
import camionRojo from '../../../public/camionRojo.svg'

interface Props{

    numero: string | number // | Puede ser un tipo de dato O el otro 
}

export default function Recorrido(props:Props) {
    return (
        <div className="recorrido">
            <img src={camionRojo} alt="" className='image-recorrido' />
            <div className="desc-recorrido">
                <div>
                    Recorrido {props.numero}
                </div>
                <a href="#">Ver detalle</a>
            </div>
        </div>
    )   
}