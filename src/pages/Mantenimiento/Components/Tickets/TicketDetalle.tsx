import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useTicketstore from "../../../../store/ticketsContext";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Card,
    CardHeader,
    CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import { Estado } from "../../../../api/models/tickets.models";

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 800,
    margin: 'auto',
    marginTop: theme.spacing(3),
    backgroundColor: red[50],
}));

const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
    backgroundColor: red[700],
    color: theme.palette.common.white,
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
    marginTop: theme.spacing(2),

}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    borderBottom: `1px solid ${red[100]}`,
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:hover': {
        backgroundColor: red[100],
        transition: 'background-color 0.3s',
    },
}));

const TicketsDetalle = () => {

    const { ticketId } = useParams();
    const { obtenerTicket, obtenerTickets } = useTicketstore();
    const [ticketDetalle, setTicketParticular] = useState(null);

    useEffect(() => {
        obtenerTickets().then(() => {
            obtenerTicket(parseInt(ticketId))
                .then(promise => setTicketParticular(promise))
                .catch(error => console.log(error));
        });
    }, [ticketId, obtenerTicket, obtenerTickets]);

    if (ticketDetalle == null) {
        return <div>Cargando...</div>;
    }

    return (
        <StyledCard>
            <StyledCardHeader
                avatar={<ConfirmationNumberIcon />}
                title={`Ticket NRO-${ticketDetalle.id_ticket}`}
            />
            <CardContent>
                <StyledTableContainer >
                    <Table aria-label="fancy ticket table" >
                        <TableBody>
                            <StyledTableRow>
                                <StyledTableCell>Matrícula</StyledTableCell>
                                <StyledTableCell>{ticketDetalle.matricula}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>Fecha de Creación</StyledTableCell>
                                <StyledTableCell>{ticketDetalle.fecha_creacion}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>Fecha de Finalización</StyledTableCell>
                                {ticketDetalle.estado === Estado.EN_CURSO ? (
                                    <StyledTableCell><b>Pendiente de cálculo</b></StyledTableCell>
                                ) : (
                                    <StyledTableCell>{ticketDetalle.fecha_finalizacion}</StyledTableCell>
                                )}
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>Tecnico</StyledTableCell>
                                <StyledTableCell>{ticketDetalle.nombre_usuario}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>Estado</StyledTableCell>
                                <StyledTableCell>{ticketDetalle.estado}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>Tipo</StyledTableCell>
                                <StyledTableCell>{ticketDetalle.tipo}</StyledTableCell>
                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>Costo Total</StyledTableCell>
                                {ticketDetalle.estado === Estado.EN_CURSO ? (
                                    <StyledTableCell><b>Pendiente de cálculo</b></StyledTableCell>
                                ) : (
                                    <StyledTableCell>${ticketDetalle.costoTotal}</StyledTableCell>
                                )}

                            </StyledTableRow>
                            <StyledTableRow>
                                <StyledTableCell>Descripcion</StyledTableCell>
                                <StyledTableCell>{ticketDetalle.descripcion_problemas}</StyledTableCell>
                            </StyledTableRow>
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </CardContent>
        </StyledCard>
    );

}

export default TicketsDetalle;
