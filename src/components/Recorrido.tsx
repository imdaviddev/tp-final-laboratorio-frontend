interface Props{

    numero: string | number // | Puede ser un tipo de dato O el otro 
}

export default function Recorrido(props:Props) {
    return (
        <div className="recorrido">
            <div className="image-recorrido"></div>
            <div className="desc-recorrido">
                <div>
                    Recorrido {props.numero}
                </div>
                <a href="#">Ver detalle</a>
            </div>
        </div>
    )
    
}