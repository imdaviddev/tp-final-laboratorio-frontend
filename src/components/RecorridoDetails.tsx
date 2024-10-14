import { useEffect, useState } from "react";
import useRecorridostore from "../store/recorridosContext";
import { useParams } from "react-router-dom";
import Detalle from "./Detalle";
import { IRecorrido } from "../api/models/recorridos.models";

const RecorridoDetails = () => {


    const { obtenerRecorrido, obtenerRecorridos } = useRecorridostore();
    const [recorridoParticular, setRecorridoParticular] = useState<IRecorrido>();
    const { recorridoId } = useParams();

    useEffect(() => {
        obtenerRecorridos()
            .then(() => {
                obtenerRecorrido(parseInt(recorridoId))
                    .then(promise => setRecorridoParticular(promise))
                    .catch(error => console.log(error))
            })

    }, [recorridoParticular]);

    if (recorridoParticular == null) {
        return (
            <div>Cargando...</div>
        )
    }

    return (
        <div>
            <Detalle tipo={recorridoParticular.id_viaje} valor={recorridoParticular.estado.nombre} />
        </div>

    );
}

export default RecorridoDetails;

