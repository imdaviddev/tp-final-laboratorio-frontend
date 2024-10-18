import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    List,
    ListItem,
    ListItemText,
    Collapse,
    Typography,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ContainerPadre, MensajeBienvenida } from '../ComponentsUI';

// Tipos de datos
interface Repuesto {
    id: string;
    nombre: string;
    precio: number;
}

interface Catalogo {
    id: string;
    mesVigencia: string;
    repuestos: Repuesto[];
}

interface Proveedor {
    id: string;
    nombre: string;
    gmail: string;
    nroTelefono: string;
    catalogos: Catalogo[];
}

// Datos de ejemplo
const proveedores: Proveedor[] = [
    {
        id: '1',
        nombre: 'Proveedor A',
        gmail: 'proveedora@example.com',
        nroTelefono: '123-456-7890',
        catalogos: [
            {
                id: 'C1',
                mesVigencia: 'Enero 2024',
                repuestos: [
                    { id: 'R1', nombre: 'Repuesto 1', precio: 100 },
                    { id: 'R2', nombre: 'Repuesto 2', precio: 200 },
                ],
            },
            {
                id: 'C2',
                mesVigencia: 'Febrero 2024',
                repuestos: [
                    { id: 'R3', nombre: 'Repuesto 3', precio: 150 },
                    { id: 'R4', nombre: 'Repuesto 4', precio: 250 },
                ],
            },
        ],
    },
    {
        id: '1',
        nombre: 'Proveedor A',
        gmail: 'proveedora@example.com',
        nroTelefono: '123-456-7890',
        catalogos: [
            {
                id: 'C1',
                mesVigencia: 'Enero 2024',
                repuestos: [
                    { id: 'R1', nombre: 'Repuesto 1', precio: 100 },
                    { id: 'R2', nombre: 'Repuesto 2', precio: 200 },
                ],
            },
            {
                id: 'C2',
                mesVigencia: 'Febrero 2024',
                repuestos: [
                    { id: 'R3', nombre: 'Repuesto 3', precio: 150 },
                    { id: 'R4', nombre: 'Repuesto 4', precio: 250 },
                ],
            },
        ],
    },
    {
        id: '1',
        nombre: 'Proveedor A',
        gmail: 'proveedora@example.com',
        nroTelefono: '123-456-7890',
        catalogos: [
            {
                id: 'C1',
                mesVigencia: 'Enero 2024',
                repuestos: [
                    { id: 'R1', nombre: 'Repuesto 1', precio: 100 },
                    { id: 'R2', nombre: 'Repuesto 2', precio: 200 },
                ],
            },
            {
                id: 'C2',
                mesVigencia: 'Febrero 2024',
                repuestos: [
                    { id: 'R3', nombre: 'Repuesto 3', precio: 150 },
                    { id: 'R4', nombre: 'Repuesto 4', precio: 250 },
                ],
            },
        ],
    },
];

export default function administracionProveedores() {
    const [open, setOpen] = useState(false);
    const [selectedProveedor, setSelectedProveedor] = useState<Proveedor | null>(null);
    const [expandedCatalogo, setExpandedCatalogo] = useState<string | null>(null);

    const handleProveedorClick = (proveedor: Proveedor) => {
        setSelectedProveedor(proveedor);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProveedor(null);
        setExpandedCatalogo(null);
    };

    const handleCatalogoClick = (catalogoId: string) => {
        setExpandedCatalogo(expandedCatalogo === catalogoId ? null : catalogoId);
    };

    return (
        <ContainerPadre>
            <MensajeBienvenida>Proveedores</MensajeBienvenida>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Gmail</TableCell>
                            <TableCell>Nro. Teléfono</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {proveedores.map((proveedor) => (
                            <TableRow
                                key={proveedor.id}
                                onClick={() => handleProveedorClick(proveedor)}
                                style={{ cursor: 'pointer' }}
                            >
                                <TableCell>{proveedor.id}</TableCell>
                                <TableCell>{proveedor.nombre}</TableCell>
                                <TableCell>{proveedor.gmail}</TableCell>
                                <TableCell>{proveedor.nroTelefono}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle>{selectedProveedor?.nombre} - Catálogos</DialogTitle>
                <DialogContent>
                    <List>
                        {selectedProveedor?.catalogos.map((catalogo) => (
                            <React.Fragment key={catalogo.id}>
                                <ListItem onClick={() => handleCatalogoClick(catalogo.id)}>
                                    <ListItemText primary={`Catálogo ${catalogo.id} - ${catalogo.mesVigencia}`} />
                                    {expandedCatalogo === catalogo.id ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={expandedCatalogo === catalogo.id} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        {catalogo.repuestos.map((repuesto) => (
                                            <ListItem key={repuesto.id} sx={{ pl: 4 }}>
                                                <ListItemText
                                                    primary={repuesto.nombre}
                                                    secondary={
                                                        <Typography component="span" variant="body2" color="text.primary">
                                                            ID: {repuesto.id} - Precio: ${repuesto.precio}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Collapse>
                            </React.Fragment>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>
        </ContainerPadre>
    );
}
