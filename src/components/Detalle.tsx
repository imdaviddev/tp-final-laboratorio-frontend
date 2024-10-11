
interface Props{

    tipo: string | number // | Puede ser un tipo de dato O el otro
    valor: string | number 
}

export default function Detalle(props: Props) {
    return (
        <div>{props.tipo}: {props.valor}</div>
    )
}

