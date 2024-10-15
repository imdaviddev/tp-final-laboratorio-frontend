import { FormEvent, useEffect, useState } from "react";
import { styled } from 'styled-components'
import { useParams } from "react-router-dom";
import { ITicket } from "../api/models/tickets.models";
import useTicketstore from "../store/ticketsContext";
import { Boton, SubmitButton } from '../pages/ComponentsUI/Botones';
import { ContainerPadre, MensajeBienvenida, FormContainer, LabelForm, InputForm, SelectForm } from "../pages/ComponentsUI";
import BotonIncremental from './BotonIncremental'

const GroupSelect = styled.div`
    display: flex;
    align-items: center;
`

const RepuestosGroup = styled.div`

`

function sendHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
}

const TicketDetails = () => {
    const { obtenerTicket, obtenerTickets } = useTicketstore();
    const [ticketParticular, setTicketParticular] = useState<ITicket>();
    const { ticketId } = useParams();

    // Estado para manejar los repuestos
    const [repuestos, setRepuestos] = useState([{ id: "", cantidad: 1 }]);

    useEffect(() => {
        obtenerTickets()
            .then(() => {
                obtenerTicket(parseInt(ticketId))
                    .then(promise => setTicketParticular(promise))
                    .catch(error => console.log(error))
            })

    }, [ticketParticular]);

    // Función para añadir un nuevo repuesto
    const añadirRepuesto = () => {
        setRepuestos([...repuestos, { id: "", cantidad: 1 }]);
    };

    if (ticketParticular == null) {
        return (
            <div>Cargando...</div>
        )
    }

    return (
        <ContainerPadre>
            <MensajeBienvenida>Cierre de Ticket</MensajeBienvenida>
            <FormContainer onSubmit={sendHandler}>
                <LabelForm>Descripcion</LabelForm>
                <InputForm></InputForm>
                <LabelForm>Repuestos Utilizados</LabelForm>

                <RepuestosGroup>
                    {repuestos.map((repuesto, index) => (
                        <GroupSelect key={index}>
                            <SelectForm>
                                <option value="">Seleccionar repuesto</option>
                                {/* Aquí podrías agregar las opciones de repuestos */}
                            </SelectForm>
                            <BotonIncremental />
                        </GroupSelect>
                    ))}
                </RepuestosGroup>

                <Boton onClick={añadirRepuesto}>Añadir Repuesto</Boton>
                <SubmitButton>Confirmar</SubmitButton>
            </FormContainer>
        </ContainerPadre>
    )
}

export default TicketDetails;
