import { StyledPaper, RedButton, PackageImage } from '../constants/styles'
import paquete from '../../public/paquete.svg';
import React, { useState } from 'react';
import {Button, Popover, Typography, ListItemText} from '@mui/material';


interface Package {
    id: number;
    name: string;
    description: string;
}

export default function PackagePopover({ pkg }: { pkg: Package }) {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? `popover-${pkg.id}` : undefined;

    return (
        <div>
            <Button onClick={handleClick}>
                <ListItemText primary={pkg.name} />
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
                        src={paquete}
                        alt={`Imagen de ${pkg.name}`}
                        className="small-image"
                    />
                    <Typography variant="h6" component="h2" gutterBottom>
                        {pkg.name}
                    </Typography>
                    <Typography variant="body2" color="error" gutterBottom>
                        {pkg.description}
                    </Typography>
                    <RedButton
                        variant="contained"
                        fullWidth
                        onClick={() => {
                            console.log(`Escanear QR para ${pkg.name}`);
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