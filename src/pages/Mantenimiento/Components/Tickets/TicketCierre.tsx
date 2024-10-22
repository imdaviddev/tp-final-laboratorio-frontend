import { FormEvent, useEffect, useState } from "react";
import { styled } from 'styled-components';
import { useParams } from "react-router-dom";
import useTicketstore from "../../../../store/ticketsContext";
import useRepuestoStore from "../../../../store/repuestosContext";
import { Boton, SubmitButton } from '../../../ComponentsUI/Botones';
import { ContainerPadre, MensajeBienvenida, LabelForm, InputForm, SelectForm } from "../../../ComponentsUI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { customScrollbar } from "../../../../constants/styles";
import { ITicket } from "../../../../api/models/tickets.models";

const GroupSelect = styled.div`
    display: flex;
    align-items: center;
    margin-right: 15px;
`;

const RepuestosGroup = styled.div`
    margin: 10px;
    max-height: 245px;
    overflow-y: auto;
    ${customScrollbar};
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    border: 3px solid red;
    border-radius: 5%;
`;

const TicketDetails = () => {
    const { ticketId } = useParams();
    const { repuestos, obtenerRepuestos, hasFetched } = useRepuestoStore();
    const { actualizarTicket, obtenerTicket, obtenerTickets } = useTicketstore();

    const [ticketParticular, setTicketParticular] = useState<ITicket | null>(null);
    const [descripcion, setDescripcion] = useState("");
    const [estado, setEstado] = useState("");
    const [repuestosUtilizados, setRepuestosUtilizados] = useState([{ id: 0, id_ticket: parseInt(ticketId), cantidad: 1, costo: 0 }]);

    useEffect(() => {
        if (!hasFetched) {
            obtenerRepuestos();
        }
    }, [obtenerRepuestos, hasFetched]);

    useEffect(() => {
        obtenerTickets().then(() => {
            obtenerTicket(parseInt(ticketId))
                .then(promise => {
                    setTicketParticular(promise);
                    setDescripcion(promise.motivo_ingreso);
                    setEstado(promise.estado);
                })
                .catch(error => console.log(error));
        });
    }, [ticketId, obtenerTicket, obtenerTickets]);

    const handleChangeTipo = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const repuestoId = parseInt(event.target.value);

        // Buscar el precio del repuesto seleccionado
        const repuestoSeleccionado = repuestos.find(repuesto => repuesto.id === repuestoId);
        const costo = repuestoSeleccionado ? repuestoSeleccionado.costo : 0;

        setRepuestosUtilizados(prev =>
            prev.map((repuesto, idx) =>
                idx === index ? { ...repuesto, id: repuestoId, costo } : repuesto
            )
        );
    };

    const añadirRepuesto = () => {
        setRepuestosUtilizados([...repuestosUtilizados, {
            id: 0, cantidad: 1,
            id_ticket: ticketParticular?.id || 0,
            costo: 0
        }]);
    };

    const eliminarRepuesto = (index: number) => {
        setRepuestosUtilizados(repuestosUtilizados.filter((_, idx) => idx !== index));
    };

    const incrementarCantidad = (index: number) => {
        setRepuestosUtilizados(prev =>
            prev.map((repuesto, idx) =>
                idx === index ? { ...repuesto, cantidad: repuesto.cantidad + 1 } : repuesto
            )
        );
    };

    const disminuirCantidad = (index: number) => {
        setRepuestosUtilizados(prev =>
            prev.map((repuesto, idx) =>
                idx === index && repuesto.cantidad > 1
                    ? { ...repuesto, cantidad: repuesto.cantidad - 1 }
                    : repuesto
            )
        );
    };

    const sendHandler = () => {
        const ticketData: ITicket = {
            id: ticketParticular!.id,
            estado: estado,
            nombre_usuario: ticketParticular!.nombre_usuario,
            motivo_ingreso: ticketParticular.motivo_ingreso,
            fecha_creacion: ticketParticular!.fecha_creacion,
            fecha_finalizacion: "",
            tipo: ticketParticular!.tipo,
            matricula: ticketParticular!.matricula,
            costoTotal: repuestosUtilizados.reduce((acc, repuesto) => acc + repuesto.cantidad * repuesto.costo, 0),  // Suma el costo total
            descripcion_reparaciones: descripcion,
            repuestos: repuestosUtilizados
        };

        actualizarTicket(ticketData)
            .then(() => {
                console.log('Ticket actualizado');
                console.log(ticketData)
            })
            .catch(error => console.error('Error al actualizar:', error));
    };

    if (ticketParticular == null) {
        return <div>Cargando...</div>;
    }

    return (
        <ContainerPadre>
            <MensajeBienvenida>Cierre de Ticket NRO-{ticketParticular.id}</MensajeBienvenida>
            <Container>
                <LabelForm>Descripción</LabelForm>
                <InputForm
                    type="text"
                    id="Descripcion"
                    name="descripcion"
                    required
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <LabelForm>Repuestos Utilizados</LabelForm>
                <RepuestosGroup>
                    {repuestosUtilizados.map((repuestoUtilizado, index) => (
                        <GroupSelect key={index}>
                            <SelectForm
                                id="repuesto"
                                name="repuesto"
                                required
                                onChange={(e) => handleChangeTipo(e, index)}
                                value={repuestoUtilizado.id || ""}
                            >
                                <option value="">Seleccionar repuesto</option>
                                {repuestos.map((repuesto) => (
                                    <option key={repuesto.id} value={repuesto.id}>
                                        {repuesto.nombre} - ${repuesto.costo}  {/* Mostrar nombre y precio */}
                                    </option>
                                ))}
                            </SelectForm>
                            <LabelForm>{repuestoUtilizado.cantidad}</LabelForm>
                            <Boton onClick={() => incrementarCantidad(index)}>+</Boton>
                            <Boton onClick={() => disminuirCantidad(index)}>-</Boton>
                            <Boton onClick={() => eliminarRepuesto(index)}><FontAwesomeIcon icon={faTrashCan} /></Boton>
                            <LabelForm>Costo: ${repuestoUtilizado.costo * repuestoUtilizado.cantidad}</LabelForm>
                        </GroupSelect>
                    ))}
                </RepuestosGroup>

                <Boton onClick={añadirRepuesto}>Añadir Repuesto</Boton>

                <LabelForm>Estado del Ticket</LabelForm>
                <SelectForm
                    id="estado"
                    name="estado"
                    required
                    onChange={(e) => setEstado(e.target.value)}
                    value={estado}
                >
                    <option value="">Seleccione Estado</option>
                    <option value="EN CURSO">En curso</option>
                    <option value="SIN SOLUCION">Sin solución</option>
                    <option value="RESUELTO">Resuelto</option>
                </SelectForm>

                <SubmitButton onClick={sendHandler}>Confirmar</SubmitButton>
            </Container>
        </ContainerPadre>
    );
};


export default TicketDetails;
