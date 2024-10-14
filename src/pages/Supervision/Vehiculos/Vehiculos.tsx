import { useState } from 'react';
import { TituloPage } from "../ComponentsUI";  
import { Tabla } from "../Components/Tabla";
import { BotonAgregarAbrirModal } from "../../ComponentsUI/Botones";
import ModalFormRegisterVehiculo from '../../../components/Modals/ModalRegisterVehiculo';

const SupervisionVehiculosPage = () => {
    const [viewModalFormRegister, setViewModalFormRegister] = useState<boolean>(false);
    const datos = [
        { id: 1123, tipo: "Auto", viajesRealizados: 58 },
        { id: 2356, tipo: "Camioneta", viajesRealizados: 94 },
        { id: 3478, tipo: "Motocicleta", viajesRealizados: 72 },
        { id: 4591, tipo: "Camión", viajesRealizados: 36 },
        { id: 5129, tipo: "Auto", viajesRealizados: 123 }
    ]

    return <>
        <TituloPage>
            Vehiculos
        </TituloPage>
        <BotonAgregarAbrirModal onClick={() => setViewModalFormRegister(prev=>true)}>
            Registrar Vehiculo
        </BotonAgregarAbrirModal>
        <Tabla datos={datos} />

        {viewModalFormRegister && <ModalFormRegisterVehiculo cancelHandler={() => setViewModalFormRegister(prev=>false)} />}
    </>
}

export default SupervisionVehiculosPage;