import { StyledPaper, RedButton, PackageImage } from '../constants/styles'
import paqueteImg from '../../public/paquete.svg';
import React, { useState } from 'react';
import { Button, Popover, ListItemText } from '@mui/material';
import Detalle from '../components/Detalle';

export default function PackagePopover({ paquete }) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `popover-${paquete.id_paquete}` : undefined;

    return (
        <div>
            <Button onClick={handleClick}>
                <ListItemText primary={`Paquete NRO: ${paquete.id_paquete}`} />
            </Button>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <StyledPaper>
                    <PackageImage
                        src={paqueteImg}
                        alt={`Imagen de ${paquete.id_paquete}`}
                        className="small-image"
                    />
                    <Detalle tipo="KG" valor={paquete.peso_kg} />
                    <Detalle tipo="Descripcion" valor={paquete.descripcion} />
                    <Detalle tipo="Cliente" valor={paquete.nombre_cliente} />
                    <Detalle tipo="Direccion" valor={paquete.direccion_entrega} />
                    <Detalle tipo="Volumen" valor={paquete.volumen} />

                    <RedButton
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            console.log(`Escanear QR para ${paquete.id_paquete}`);
                            handleClose();
                        }}
                    >
                        Escanear QR
                    </RedButton>
                </StyledPaper>
            </Popover>
        </div>
    );
}