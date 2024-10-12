import { TituloPage } from "../ComponentsUI";  
import { Tabla } from "../Components/Tabla";
import { useEffect, useState } from "react";
import { BotonAgregarAbrirModal } from "../../../ui/Botones";
import ModalFormRegister from "../../../components/Modals/ModalRegister";
import useConductorestore from "../../../store/conductoresContext";

const ConductoresPage = () => {
    const { conductores, obtenerConductores, hasFetched } = useConductorestore();
    const [viewModalForm, setViewModalForm] = useState(false);

    useEffect(() => {
        if (!hasFetched) {
            obtenerConductores(); 
        }
    }, [obtenerConductores, hasFetched]);

    function openModal(): void {
        setViewModalForm(true)
    }

    function cancelModal(): void {
        setViewModalForm(false)
    }

    return <>
        <TituloPage>
            Conductores
        </TituloPage>
        <BotonAgregarAbrirModal onClick={openModal}>
            Registrar un Conductor
        </BotonAgregarAbrirModal>
        {conductores.length == 0 ? 
            <p>No hay informacion disponible actualmente sobre los conductores... </p>: 
            <Tabla datos={conductores} />
        }

        {viewModalForm && <ModalFormRegister cancelHandler={cancelModal}/>}
    </>
}

export default ConductoresPage;