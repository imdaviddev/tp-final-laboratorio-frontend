import { useEffect, useState } from 'react';
import { TituloPage } from "../ComponentsUI";  
import { Tabla } from "../Components/Tabla";
import { BotonAgregarAbrirModal } from "../../ComponentsUI/Botones";
import ModalFormRegisterVehiculo from '../../../components/Modals/ModalRegisterVehiculo';
import useVehiculoStore from '../../../store/vehiculosContext';
import { IVehiculo } from '../../../api/models/vehiculos.models';

const SupervisionVehiculosPage = () => {
    const [viewModalFormRegister, setViewModalFormRegister] = useState<boolean>(false);
    const { vehiculos, obtenerVehiculos } = useVehiculoStore();
    const [datos, setDatos] = useState([]);

    const parsearVehiculos = (vehiculos: IVehiculo[]) => {
        return vehiculos.map((vehiculo) => ({
            id: vehiculo.id,
            matricula: vehiculo.matricula,
            modelo: vehiculo.modelo,
            marca: vehiculo.marca,
            "año": vehiculo.anio,
        }));
    };

    useEffect(() => {
        obtenerVehiculos()
            .then(() => setDatos(parsearVehiculos(vehiculos)))
            .catch((error) => console.error("No se pudo obtener los datos", error));
    }, []); 

    return (
        <>
            <TituloPage>
                Vehículos
            </TituloPage>
            <BotonAgregarAbrirModal onClick={() => setViewModalFormRegister(true)}>
                Registrar Vehículo
            </BotonAgregarAbrirModal>

            {datos != undefined && datos != null ? (
                <Tabla datos={datos} />
            ) : (
                <p>No hay vehículos disponibles.</p>
            )}

            {viewModalFormRegister && (
                <ModalFormRegisterVehiculo cancelHandler={() => setViewModalFormRegister(false)} />
            )}
        </>
    );
}

export default SupervisionVehiculosPage;
