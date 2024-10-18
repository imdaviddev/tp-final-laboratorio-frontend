import { Box, Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

export default function RepuestoDetails(props) {

    return <>
        <DialogTitle>Detalles del Repuesto</DialogTitle>
        <DialogContent>
            <Box>
                <Typography>ID Catálogo: {props.id_catalogo}</Typography>
                <Typography>Nombre: {props.nombre}</Typography>
                <Typography>Stock: {props.stock}</Typography>
                <Typography>Stock Mínimo:{props.stock_minimo}</Typography>
                <Typography>Descripción:{props.descripcion}</Typography>
            </Box>
        </DialogContent>
    </>;
}