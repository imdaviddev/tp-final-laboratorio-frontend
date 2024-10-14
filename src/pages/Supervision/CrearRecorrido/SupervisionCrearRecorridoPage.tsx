import { styled } from "styled-components"
import { ContainerGeneral } from "../../../ui/Container"
import { useEffect, useState } from "react"
import usePaqueteStore from "../../../store/paqueteStore"
import useVehiculoStore from "../../../store/vehiculosContext"
import imgPaquete from "../../../../public/paquete.svg"
import { BotonAgregarAbrirModal } from "../../ComponentsUI/Botones"
import { TituloDescripcion, TituloPage } from "../ComponentsUI"
import useConductorestore from "../../../store/conductoresContext"
import { IPaquete } from "../../../api/models/paquetes.models"
import imgConductor from '../../../../public/conductorInicio.svg'
import { IConductor } from "../../../api/models/conductores.models"
import { IVehiculo } from "../../../api/models/vehiculos.models"
import imgVehiculo from "../../../../public/camion.svg"
import { useRouteError } from "react-router-dom"
import useRecorridoStore from "../../../store/recorridosStore"
import { IRecorridoCreate } from "../../../api/models/recorridos.models"

const ItemPaquete = styled.div<{ selected?: boolean }>`
    display: flex;
    width: 100%;
    color: ${({ selected }) => (selected ? "white" : "red")};;
    gap: 1rem;
    align-items: center;
    background-color: ${({ selected }) => (selected ? "#f03919b5" : "")};
    padding: 1rem;
    border-radius: 0.2rem;

    p {
        font-size: 14px;
    }
`
const ImgPaqueteWrapper = styled.div`
    width: 50px;
`

const ImgPaquete = () => {
    return <img src={imgPaquete} style={{ width: "100%" }} />
}

type PropsPaquete = {
    paquete: IPaquete
    selected?: boolean
    onClick?: () => void
}

const PaqueteItem: React.FC<PropsPaquete> = ({ paquete, selected, onClick }) => {

    return <ItemPaquete selected={selected} onClick={onClick}>
        <ImgPaqueteWrapper>
            <ImgPaquete />
        </ImgPaqueteWrapper>
        <div>
            <p>{paquete.id}</p>
            <p>{paquete.direccion_entrega}</p>
        </div>
    </ItemPaquete>
}

const ItemConductor = styled.div<{ selected?: boolean }>`
    display: flex;
    width: 100%;
    color: ${({ selected }) => (selected ? "white" : "red")};;
    gap: 1rem;
    align-items: center;
    background-color: ${({ selected }) => (selected ? "#f03919b5" : "")};
    padding: 1rem;
    border-radius: 0.2rem;

    p {
        font-size: 14px;
    }
`
const ImgConductorWrapper = styled.div`
    width: 50px;
`

const ImgConductor = () => {
    return <img src={imgConductor} style={{ width: "100%" }} />
}

type PropsConductor = {
    conductor: IConductor
    selected?: boolean
    onClick?: () => void
}

const ConductorItem:React.FC<PropsConductor> = ({conductor, selected, onClick}) => {
    return <ItemConductor selected={selected} onClick={onClick}>
        <ImgConductorWrapper>
            <ImgConductor/>
        </ImgConductorWrapper>
        <div>
            <p>{conductor.nombre}</p>
            <p>{conductor.apellido}</p>
            <p>{conductor.dni}</p>
        </div>

    </ItemConductor>
}

const ItemVehiculo = styled.div<{ selected?: boolean }>`
    display: flex;
    width: 100%;
    color: ${({ selected }) => (selected ? "white" : "red")};;
    gap: 1rem;
    align-items: center;
    background-color: ${({ selected }) => (selected ? "#f03919b5" : "")};
    padding: 1rem;
    border-radius: 0.2rem;

    p {
        font-size: 14px;
    }
`
const ImgVehiculoWrapper = styled.div`
    width: 50px;
`

const ImgVehiculo = () => {
    return <img src={imgVehiculo} style={{ width: "100%" }} />
}

type PropsVehiculo = {
    vehiculo: IVehiculo
    selected?: boolean
    onClick?: () => void
}

const VehiculoItem:React.FC<PropsVehiculo> = ({vehiculo, selected, onClick}) => {
    return <ItemVehiculo selected={selected} onClick={onClick}>
        <ImgVehiculoWrapper>
            <ImgVehiculo/>
        </ImgVehiculoWrapper>
        <div>
            <p>{vehiculo.matricula}</p>
            <p>{vehiculo.estado}</p>
            <p>{vehiculo.modelo}</p>
        </div>

    </ItemVehiculo>
}


// ------------------------------


const WrapperModalList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    height: 100%;
    width: 100%;
    max-height: 100vh;
    background-color: #7e7e7e87;
    top: 0;
    left: 0;
    padding: 3rem;
    overflow-y: auto;
`

const ContainerModalList = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f1f1f1;
    min-width: 300px;
    max-width: 500px;
    height: 500px;
    border-radius: 0.3rem;
    padding: 1rem;
`

const ModalList = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    border: solid 1px red;
    overflow-y: auto;
    height: 100%;
    border: solid 1px red;
    gap: 0.5rem;
    background-color: white;
`

const ListPaquetesAgregados = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.3rem;
    border: solid 1px red;
    max-height: 400px;
    overflow-y: auto;
    align-items:center;
    padding: 1rem;
    background-color: white;
    gap: 1rem;
`

const BotonQuitar = styled.button`
    background-color: white;
    border:none;
`

const QuitarBotonList = styled.div`
    width: 25px;
    height: 5px;
    border-radius: 5px;
    background-color: red;

    &:hover {
        background-color: gray;
    }
`

const ListConductorAsignado = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.3rem;
    border: solid 1px red;
    max-height: 400px;
    overflow-y: auto;
    align-items:center;
    padding: 1rem;
    background-color: white;
    gap: 1rem;
`

const ListVehiculoAsignado = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 0.3rem;
    border: solid 1px red;
    max-height: 400px;
    overflow-y: auto;
    align-items:center;
    padding: 1rem;
    background-color: white;
    gap: 1rem;
`

const SupervisionCrearRecorridoPage = () => {
    const [paquetesSeleccionados, setPaquetesSeleccionados] = useState<Set<IPaquete>>(new Set());
    const [conductorSeleccionado, setConductorSeleccionado] = useState<IConductor>();
    const [vehiculoSeleccionado, setVehiculoSeleccionado] = useState<IVehiculo>();

    const [paquetesAgregados, setPaquetesAgregdos] = useState<Set<IPaquete>>(new Set())
    const [conductorAsignado, setConductorAsignado] = useState<IConductor>();
    const [vehiculoAsignado, setVehiculoAsignado] = useState<IVehiculo>()

    const { paquetes, obtenerPaquetes } = usePaqueteStore();
    const { vehiculos, obtenerVehiculos } = useVehiculoStore();
    const { conductores, obtenerConductores } = useConductorestore();
    const { crearRecorrido } = useRecorridoStore();

    const [viewModalSeleccionablePaquetes, setViewModalSeleccionablePaquetes] = useState<boolean>();
    const [viewModalSeleccionableVehiculos, setViewModalSeleccionableVehiculos] = useState<boolean>();
    const [viewModalSeleccionableConductores, setViewModalSeleccionableConductores] = useState<boolean>();
    const cerrarModalSeleccionable = () => {
        setViewModalSeleccionableVehiculos(prev => false);
        setViewModalSeleccionableConductores(prev => false);
        setViewModalSeleccionablePaquetes(prev => false);
    }
    const abrirModalSeleccionable = (tipo: string) => {
        setViewModalSeleccionableVehiculos(tipo == "vehiculos")
        setViewModalSeleccionableConductores(tipo == "conductores")
        setViewModalSeleccionablePaquetes(tipo == "paquetes")
    }

    useEffect(() => {
        obtenerPaquetes()
        obtenerVehiculos()
        obtenerConductores()
    }, [])

    const seleccionarPaquete = (id: number) => {
        setPaquetesSeleccionados(prev => {
            const paqueteSeleccionado = paquetes.find(p => p.id === id);
            const nuevosSeleccionados = new Set(prev);

            if (paqueteSeleccionado) {
                if (nuevosSeleccionados.has(paqueteSeleccionado)) {
                    nuevosSeleccionados.delete(paqueteSeleccionado);
                } else {
                    nuevosSeleccionados.add(paqueteSeleccionado);
                }
            }

            return nuevosSeleccionados;
        });
    };

    const agregarPaquetes = () => {
        setPaquetesAgregdos(paquetesSeleccionados);
        cerrarModalSeleccionable();
    }

    const quitarPaqueteAgregado = (id: number) => {
        const paqueteAquitar = paquetes.find(p => p.id === id)
        setPaquetesSeleccionados(prev => {
            const nuevos = new Set(prev)
            if (paqueteAquitar) {
                paquetesSeleccionados.delete(paqueteAquitar);
            }

            return nuevos;
        })
        setPaquetesSeleccionados(prev => {
            const nuevos = new Set(prev)
            if (paqueteAquitar) {
                paquetesAgregados.delete(paqueteAquitar);
            }

            return nuevos;
        })
    }

    const quitarPaquetesAgregados = () => {
        setPaquetesSeleccionados(new Set)
        setPaquetesAgregdos(new Set)
    }

    const seleccionarConductor = (id: number) => {
        setConductorSeleccionado(prev => {
            const conductorNuevo = conductores.find(c => c.id === id);
            if(conductorNuevo && conductorAsignado !== conductorNuevo){
                return conductorNuevo;
            }else {
                return null;
            }
        })
    }

    const agregarConductor = () => {
        setConductorAsignado(conductorSeleccionado);
        cerrarModalSeleccionable();
    }

    const quitarConductorAgregado = () => {
        setConductorSeleccionado(prev => null)
        setConductorAsignado(prev => null)
    }

    const seleccionarVehiculo = (matricula: string) => {
        setVehiculoSeleccionado(prev => {
            const vehiculoNuevo = vehiculos.find(v => v.matricula === matricula);
            if(vehiculoNuevo && vehiculoAsignado !== vehiculoNuevo){
                return vehiculoNuevo;
            }else {
                return null;
            }
        })
    }

    const agregarVehiculo = () => {
        setVehiculoAsignado(vehiculoSeleccionado);
        cerrarModalSeleccionable();
    }

    const quitarVehiculoAgregado = () => {
        setVehiculoSeleccionado(prev => null)
        setVehiculoAsignado(prev => null)
    }

    const crearNuevoRecorrido = () => {
        if(paquetesAgregados.size <= 0 || !conductorAsignado || !vehiculoAsignado){
            alert("Todos los campos deben estar completos");
        }

        const nuevoRecorrido: IRecorridoCreate = {
            id_conductor: conductorAsignado.id,
            matricula: vehiculoAsignado.matricula,
            estado: "ASIGNADO",
            f_asignacion: new Date().toISOString(),
            f_inicio: "",
            f_finalizacion: "",
            costo: 0,    
        }
        crearRecorrido(nuevoRecorrido).then(() => {
            quitarConductorAgregado()
            quitarVehiculoAgregado()
            quitarPaquetesAgregados()
        } ).catch(error => alert("No se pudo crear el Recorrido: " + error))
        .then(() => alert("Se creo exitosamente el recorrido"));
    }

    return <>
        <TituloPage>
            Crear Recorrido
        </TituloPage>
        <ContainerGeneral style={{marginBottom: "2rem"}}>
            <TituloDescripcion style={{ fontWeight: 'bold' }}>Crear Recorrido</TituloDescripcion>
            <ContainerGeneral>
                <TituloDescripcion style={{ fontWeight: 'bold' }}>Paquetes</TituloDescripcion>
                {paquetesAgregados.size > 0 &&
                    <ListPaquetesAgregados>
                        {[...paquetesAgregados].map(paquete => (<div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-around" }}>
                            <PaqueteItem paquete={paquete} key={paquete.id} />
                            <BotonQuitar onClick={() => quitarPaqueteAgregado(paquete.id)}>
                                <QuitarBotonList />
                            </BotonQuitar>
                        </div>
                        ))}
                    </ListPaquetesAgregados>
                }
                {viewModalSeleccionablePaquetes &&

                    <WrapperModalList>
                        <ContainerModalList>
                            <TituloDescripcion style={{ fontWeight: 'bold' }}>Paquetes</TituloDescripcion>
                            <ModalList>
                                {paquetes.map(paquete => {
                                    return !paquetesAgregados.has(paquete) &&
                                        <PaqueteItem onClick={() => seleccionarPaquete(paquete.id)}
                                            selected={paquetesSeleccionados.has(paquete)} paquete={paquete} key={paquete.id} />
                                })}
                            </ModalList>

                            <BotonAgregarAbrirModal style={{ marginBottom: 0, marginTop: "1rem" }} onClick={agregarPaquetes}>
                                Agregar
                            </BotonAgregarAbrirModal>

                            <BotonAgregarAbrirModal style={{ backgroundColor: "gray", marginBottom: 0, marginTop: "1rem" }} onClick={cerrarModalSeleccionable}>
                                Cancelar
                            </BotonAgregarAbrirModal>
                        </ContainerModalList>
                    </WrapperModalList>

                }
                <BotonAgregarAbrirModal onClick={() => abrirModalSeleccionable("paquetes")}>
                    Asignar Paquetes
                </BotonAgregarAbrirModal>
            </ContainerGeneral>
            <ContainerGeneral>
    <TituloDescripcion style={{ fontWeight: 'bold' }}>Conductores</TituloDescripcion>
    {conductorAsignado &&
        <ListConductorAsignado>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-around" }} key={conductorAsignado.id}>
                <ConductorItem conductor={conductorAsignado} />
                <BotonQuitar onClick={() => quitarConductorAgregado()}>
                    <QuitarBotonList />
                </BotonQuitar>
            </div>
        </ListConductorAsignado>
    }

    {viewModalSeleccionableConductores &&
        <WrapperModalList>
            <ContainerModalList>
                <TituloDescripcion style={{ fontWeight: 'bold' }}>Conductores</TituloDescripcion>
                <ModalList>
                    {conductores.map(conductor => {
                        return !(conductorAsignado === conductor) && (
                            <ConductorItem
                                onClick={() => seleccionarConductor(conductor.id)}
                                selected={conductorSeleccionado === conductor}
                                conductor={conductor}
                                key={conductor.id}
                            />
                        )
                    })}
                </ModalList>

                <BotonAgregarAbrirModal style={{ marginBottom: 0, marginTop: "1rem" }} onClick={agregarConductor}>
                    Agregar
                </BotonAgregarAbrirModal>

                <BotonAgregarAbrirModal style={{ backgroundColor: "gray", marginBottom: 0, marginTop: "1rem" }} onClick={cerrarModalSeleccionable}>
                    Cancelar
                </BotonAgregarAbrirModal>
            </ContainerModalList>
        </WrapperModalList>
    }

    <BotonAgregarAbrirModal onClick={() => abrirModalSeleccionable("conductores")}>
        Asignar Conductor
    </BotonAgregarAbrirModal>
            </ContainerGeneral>


            <ContainerGeneral>
    <TituloDescripcion style={{ fontWeight: 'bold' }}>Vehículos</TituloDescripcion>
    {vehiculoAsignado &&
        <ListVehiculoAsignado>
            <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center", justifyContent: "space-around" }} key={vehiculoAsignado.id}>
                <VehiculoItem vehiculo={vehiculoAsignado} />
                <BotonQuitar onClick={() => quitarVehiculoAgregado()}>
                    <QuitarBotonList />
                </BotonQuitar>
            </div>
        </ListVehiculoAsignado>
    }

    {viewModalSeleccionableVehiculos &&
        <WrapperModalList>
            <ContainerModalList>
                <TituloDescripcion style={{ fontWeight: 'bold' }}>Vehículos</TituloDescripcion>
                <ModalList>
                    {vehiculos.map(vehiculo => {
                        return !(vehiculoAsignado === vehiculo) && (
                            <VehiculoItem
                                onClick={() => seleccionarVehiculo(vehiculo.matricula)}
                                selected={vehiculoSeleccionado === vehiculo}
                                vehiculo={vehiculo}
                                key={vehiculo.matricula}
                            />
                        )
                    })}
                </ModalList>

                <BotonAgregarAbrirModal style={{ marginBottom: 0, marginTop: "1rem" }} onClick={agregarVehiculo}>
                    Agregar
                </BotonAgregarAbrirModal>

                <BotonAgregarAbrirModal style={{ backgroundColor: "gray", marginBottom: 0, marginTop: "1rem" }} onClick={cerrarModalSeleccionable}>
                    Cancelar
                </BotonAgregarAbrirModal>
            </ContainerModalList>
        </WrapperModalList>
    }

            <BotonAgregarAbrirModal onClick={() => abrirModalSeleccionable("vehiculos")}>
                Asignar Vehículo
            </BotonAgregarAbrirModal>
        </ContainerGeneral>
        <BotonAgregarAbrirModal onClick={crearNuevoRecorrido}>
            Confirmar Recorrido
        </BotonAgregarAbrirModal>

        </ContainerGeneral>
    </>
}
export default SupervisionCrearRecorridoPage