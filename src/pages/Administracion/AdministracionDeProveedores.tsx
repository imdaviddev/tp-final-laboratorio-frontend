import { TituloPage } from '../ComponentsUI'
import { Tabla } from '../Supervision/Components/Tabla'

const AdministracionDeProveedores = () => {
    const datos = [
        { id: 5226, nombre: "Miguel Angel", repuesto: 'bujia' },
        { id: 4398, nombre: "Ricardo García", repuesto: 'optica' },
        { id: 6235, nombre: "Ana López", repuesto: 'focos' },
        { id: 6234, nombre: "Ana López", repuesto: 'Aceite de Motor' }
    ]

    return <>
        <TituloPage>
            Proveedores
        </TituloPage>
        <Tabla datos={datos} />
    </>
}
export default AdministracionDeProveedores
