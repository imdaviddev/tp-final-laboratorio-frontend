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

const GroupCont = styled.div`

`

function sendHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
}

const TicketDetails = () => {


    const { obtenerTicket, obtenerTickets } = useTicketstore();
    const [ticketParticular, setTicketParticular] = useState<ITicket>();
    const { ticketId } = useParams();

    useEffect(() => {
        obtenerTickets()
            .then(() => {
                obtenerTicket(parseInt(ticketId))
                    .then(promise => setTicketParticular(promise))
                    .catch(error => console.log(error))
            })

    }, [ticketParticular]);

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

                <GroupSelect>

                    <SelectForm>
                        <option value="">Seleccionar repuesto</option>
                    </SelectForm>
                    <BotonIncremental />
                </GroupSelect>

                <GroupSelect>
                    <SelectForm>
                        <option value="">Seleccionar repuesto</option>
                    </SelectForm>
                    <BotonIncremental />
                </GroupSelect>

                <Boton>Añadir Repuesto</Boton>
                <SubmitButton>Confirmar</SubmitButton>
            </FormContainer>
        </ContainerPadre>

    )
}

export default TicketDetails;