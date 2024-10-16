import { FormEvent, useEffect, useState } from "react";
import { styled } from 'styled-components';
import { useParams } from "react-router-dom";
import { ITicketUpdate } from "../api/models/tickets.models";
import useTicketstore from "../store/ticketsContext";
import useRepuestoStore from "../store/repuestosContext";
import { Boton, SubmitButton } from '../pages/ComponentsUI/Botones';
import { ContainerPadre, MensajeBienvenida, LabelForm, InputForm, SelectForm } from "../pages/ComponentsUI";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { customScrollbar } from "../constants/styles";


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

    const [ticketParticular, setTicketParticular] = useState(null);
    const [repuestosUtilizados, setRepuestosUtilizados] = useState([{ id: 0, cantidad: 1 }]);

    //A QUIEN LE TENGO QUE ENVIAR ESTOS DATOS? AL TICKET LE PASO EL ID Y EL ESTADO, PERO Y LOS REPUESTOS?

    const [data, setDataBody] = useState<ITicketUpdate>({
        id_ticket: 0,
        estado: "",
        descripcion: "",
        repuestos: []
    });

    useEffect(() => {
        if (!hasFetched) {
            obtenerRepuestos();
        }
    }, [obtenerRepuestos, hasFetched]);

    useEffect(() => {
        obtenerTickets().then(() => {
            obtenerTicket(parseInt(ticketId))
                .then(promise => setTicketParticular(promise))
                .catch(error => console.log(error));
        });
    }, [ticketId, obtenerTicket, obtenerTickets]);


    const handleChange = (e) => {
        setDataBody({ ...data, [e.target.name]: e.target.value });
    };

    const handleChangeTipo = (event, index) => {
        setRepuestosUtilizados(prev =>
            prev.map((repuesto, idx) =>
                idx === index ? { ...repuesto, id: event.target.value } : repuesto
            )
        );
    };

    const añadirRepuesto = () => {
        setRepuestosUtilizados([...repuestosUtilizados, { id: 0, cantidad: 1 }]);
    };

    const eliminarRepuesto = (index) => {
        setRepuestosUtilizados(repuestosUtilizados.filter((_, idx) => idx !== index));
    };

    const incrementarCantidad = (index) => {
        setRepuestosUtilizados(prev =>
            prev.map((repuesto, idx) =>
                idx === index ? { ...repuesto, cantidad: repuesto.cantidad + 1 } : repuesto
            )
        );
    };

    const disminuirCantidad = (index) => {
        setRepuestosUtilizados(prev =>
            prev.map((repuesto, idx) =>
                idx === index && repuesto.cantidad > 0
                    ? { ...repuesto, cantidad: repuesto.cantidad - 1 }
                    : repuesto
            )
        );
    };

    const sendHandler = () => {
        const ticketData = {
            id_ticket: ticketParticular?.id_ticket,
            estado: data.estado,
            descripcion: data.descripcion,
            repuestos: repuestosUtilizados
        };

        actualizarTicket(ticketData)
            .then(() => {
                console.log('Ticket actualizado');
            })
            .catch(error => console.error('Error al actualizar:', error));

        setDataBody({ id_ticket: 0, estado: "", descripcion: "", repuestos: [] });
    };

    if (ticketParticular == null) {
        return <div>Cargando...</div>;
    }

    return (
        <ContainerPadre>
            <MensajeBienvenida>Cierre de Ticket NRO-{ticketParticular.id_ticket}</MensajeBienvenida>
            <Container>
                <LabelForm>Descripción</LabelForm>
                <InputForm
                    type="text"
                    id="Descripcion"
                    name="descripcion"
                    value={ticketParticular.descripcion_problemas}
                    required
                    onChange={handleChange}
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
                                        {repuesto.nombre}
                                    </option>
                                ))}
                            </SelectForm>
                            <LabelForm>{repuestoUtilizado.cantidad}</LabelForm>
                            <Boton onClick={() => incrementarCantidad(index)}>+</Boton>
                            <Boton onClick={() => disminuirCantidad(index)}>-</Boton>
                            <Boton onClick={() => eliminarRepuesto(index)}><FontAwesomeIcon icon={faTrashCan} /></Boton>
                        </GroupSelect>
                    ))}
                </RepuestosGroup>

                <Boton onClick={añadirRepuesto}>Añadir Repuesto</Boton>

                <LabelForm>Estado del Ticket</LabelForm>
                <SelectForm
                    id="estado"
                    name="estado"
                    required
                    onChange={(e) => setDataBody(prev => ({ ...prev, estado: e.target.value }))}
                    value={data.estado}
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

