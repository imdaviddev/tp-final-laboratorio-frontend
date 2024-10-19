import React, { useEffect, useState } from 'react';
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
import useProveedorestore from '../../store/proveedoresContext';
import { IProveedor } from '../../api/models/proveedores.models';
import useCatalogostore from '../../store/catalogosContext';
import useRepuestoStore from '../../store/repuestosContext';


export default function administracionProveedores() {
    const [open, setOpen] = useState(false);
    const { proveedores, obtenerProveedores, hasFetched } = useProveedorestore();
    const { catalogos, obtenerCatalogos } = useCatalogostore();
    const { repuestos, obtenerRepuestos } = useRepuestoStore();
    const [selectedProveedor, setSelectedProveedor] = useState<number>(null);
    const [expandedCatalogo, setExpandedCatalogo] = useState<number>(null);

    useEffect(() => {
        if (!hasFetched) {
            obtenerProveedores();
            obtenerCatalogos();
            obtenerRepuestos();
        }
    }, [obtenerProveedores, obtenerCatalogos, obtenerRepuestos, hasFetched]);

    const handleProveedorClick = (idProveedor: number) => {
        setSelectedProveedor(idProveedor);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedProveedor(null);
        setExpandedCatalogo(null);
    };

    const handleCatalogoClick = (catalogoId: number) => {
        setExpandedCatalogo(expandedCatalogo === catalogoId ? null : catalogoId);
    };

    if (proveedores == null || repuestos == null || catalogos == null) {
        return (
            <div>Cargando...</div>
        )
    }

    return (
        <ContainerPadre>
            <MensajeBienvenida>Proveedores</MensajeBienvenida>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Gmail</TableCell>
                            <TableCell>Nro. Teléfono</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {proveedores.map((proveedor) => (
                            <TableRow
                                key={proveedor.id}
                                onClick={() => handleProveedorClick(proveedor.id)}

                                style={{ cursor: 'pointer' }}
                            >
                                <TableCell>{proveedor.nombre_empresa}</TableCell>
                                <TableCell>{proveedor.mail}</TableCell>
                                <TableCell>{proveedor.telefono}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle> - Catálogos</DialogTitle>
                <DialogContent>
                    <List>
                        {(catalogos.filter((catalogo => catalogo.id === selectedProveedor))
                            .map((catalogo) => {
                                return (
                                    <React.Fragment key={catalogo.id}>
                                        <ListItem onClick={() => handleCatalogoClick(catalogo.id)}>
                                            <ListItemText primary={`Catálogo ${catalogo.id} - ${catalogo.mes_vigencia}`} />
                                            {expandedCatalogo === catalogo.id ? <ExpandLess /> : <ExpandMore />}
                                        </ListItem>
                                        <Collapse in={expandedCatalogo === catalogo.id} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {(repuestos.filter((repuesto => repuesto.id_catalogo === expandedCatalogo)))
                                                    .map((repuesto) => (
                                                        <ListItem key={repuesto.id} sx={{ pl: 4 }}>
                                                            <ListItemText
                                                                primary={repuesto.nombre}
                                                                secondary={
                                                                    <Typography component="span" variant="body2" color="text.primary">
                                                                        ID: {repuesto.id} - Precio: ${repuesto.costo}
                                                                    </Typography>
                                                                }
                                                            />
                                                        </ListItem>
                                                    ))}
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                );
                            })
                        )}
                    </List>

                </DialogContent>
            </Dialog>
        </ContainerPadre>
    );
}
