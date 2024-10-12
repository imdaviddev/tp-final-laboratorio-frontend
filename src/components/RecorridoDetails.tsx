import { useEffect } from "react";
import useRecorridostore from "../store/recorridosContext";

const RecorridoDetails = (props) => {
    const { recorridos, obtenerRecorridos, hasFetched } = useRecorridostore();

    useEffect(() => {
        if (!hasFetched) {
            obtenerRecorridos();
        }
    }, [obtenerRecorridos, hasFetched]);

    // Usar find si quieres mostrar solo uno
    const recorrido = recorridos.find(recorrido => recorrido.id_viaje === props.id_viaje);
    
    return (
        <div>
            {recorrido ? <h2>{props.id_viaje}</h2> : <p>No se encontró el recorrido</p>}
        </div>
    );
}

export default RecorridoDetails;
