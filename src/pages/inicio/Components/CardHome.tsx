interface Props{

    title: string | number // | Puede ser un tipo de dato O el otro 
    contenido: string 
    image: string      //? El signo de pregunta me permite o no enviar el tipo de dato
}


export default function CardHome(props:Props) { 

    return (
        <div className="container-card">
            <div className="card-text">
                <div className='card-title'>
                    <b>{props.title}</b>
                </div>
                <div className='card-main'><b>{props.contenido}</b>
                </div>
            </div>
            <img src= {props.image} alt="" className='card-image' />
        </div>
    );
}