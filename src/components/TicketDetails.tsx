import { FormEvent, useEffect, useState } from "react";
import { styled } from 'styled-components';
import { useParams } from "react-router-dom";
import { ITicketUpdate } from "../api/models/tickets.models";
import useTicketstore from "../store/ticketsContext";
import useRepuestoStore from "../store/repuestosContext";
import { Boton, SubmitButton } from '../pages/ComponentsUI/Botones';
import { ContainerPadre, MensajeBienvenida, LabelForm, InputForm, SelectForm } from "../pages/ComponentsUI";

const GroupSelect = styled.div`
    display: flex;
    align-items: center;
`;

const RepuestosGroup = styled.div`
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const TicketDetails = () => {
    const { repuestos, obtenerRepuestos, hasFetched } = useRepuestoStore();
    const { actualizarTicket } = useTicketstore();
    const { obtenerTicket, obtenerTickets } = useTicketstore();
    const { ticketId } = useParams();

    const [ticketParticular, setTicketParticular] = useState(null);
    const [repuestosUtilizados, setRepuestosUtilizados] = useState([{ id: 0, cantidad: 1 }]);
    const [data, setDataBody] = useState<ITicketUpdate>({
        id_ticket: 0,
        estado: "",
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataBody(prev => ({ ...prev, [name]: value }));
    };

    const handleChangeTipo = (event: React.ChangeEvent<HTMLSelectElement>, index: number) => {
        const repuestoId = event.target.value;

        setRepuestosUtilizados(prevRepuestos =>
            prevRepuestos.map((repuesto, idx) =>
                idx === index
                    ? { ...repuesto, id: parseInt(repuestoId) } // Actualiza el ID del repuesto seleccionado
                    : repuesto
            )
        );
    };

    const incrementarCantidad = (id_repuesto: number) => {
        setRepuestosUtilizados(prevRepuestos =>
            prevRepuestos.map(repuesto =>
                repuesto.id === id_repuesto
                    ? { ...repuesto, cantidad: repuesto.cantidad + 1 }
                    : repuesto
            )
        );
    };

    const añadirRepuesto = () => {
        setRepuestosUtilizados([...repuestosUtilizados, { id: 0, cantidad: 1 }]);
    };

    const sendHandler = () => {
        const ticketData = {
            id_ticket: ticketParticular?.id_ticket,
            estado: data.estado,
            repuestos: repuestosUtilizados.map(repuesto => ({
                id: repuesto.id,
                cantidad: repuesto.cantidad
            }))
        };

        actualizarTicket(ticketData); // Envía la data del ticket y los repuestos utilizados ¿A DONDE?
        console.log(ticketData);

        setDataBody({ id_ticket: 0, estado: "", repuestos: [] });
    };

    if (ticketParticular == null) {
        return <div>Cargando...</div>;
    }

    return (
        <ContainerPadre>
            <MensajeBienvenida>Cierre de Ticket</MensajeBienvenida>
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
                            <Boton onClick={() => incrementarCantidad(repuestoUtilizado.id)}>+</Boton>
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

