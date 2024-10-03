import React, { useState } from 'react';
import { 
  Button, 
  Popover, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemText, 
  Paper,
  Box
} from '@mui/material';
import { styled } from '@mui/material/styles';
import paquete from '../../../public/paquete.svg';

interface Package {
  id: number;
  name: string;
  description: string;
}

const packages: Package[] = [
  { id: 1, name: "Paquete A", description: "Contiene artículos frágiles. Manipular con cuidado." },
  { id: 2, name: "Paquete B", description: "Paquete urgente. Entrega prioritaria." },
  { id: 3, name: "Paquete C", description: "Contiene documentos confidenciales." },
  { id: 4, name: "Paquete D", description: "Artículos electrónicos. Mantener seco." },
  { id: 5, name: "Paquete E", description: "Productos perecederos. Mantener refrigerado." },
  { id: 6, name: "Paquete F", description: "Materiales peligrosos. Seguir protocolos de seguridad." },
  { id: 7, name: "Paquete G", description: "Artículos de gran valor. Requiere firma." },
  { id: 8, name: "Paquete H", description: "Contiene muestras médicas. Manipular con precaución." },
  { id: 9, name: "Paquete I", description: "Equipo deportivo. Tamaño grande." },
  { id: 10, name: "Paquete J", description: "Artículos de colección. Tratar con cuidado." },
];

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  maxWidth: 300,
}));

const RedButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.error.dark,
  },
}));

const PackageImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: 'auto',
  maxHeight: 120,
  objectFit: 'cover',
  marginBottom: theme.spacing(2),
  borderStyle: 'none',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '&.small-image': {
    maxWidth: 115,
    maxHeight: 100,
    display: 'block',
    margin: '0 auto',
  },
}));

function PackagePopover({ pkg }: { pkg: Package }) {
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

export default function Component() {
  return (
    <Paper style={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ padding: 16 }}>
        Lista de Paquetes
      </Typography>
      <List style={{ maxHeight: 400, overflow: 'auto' }}>
        {packages.map((pkg) => (
          <ListItem key={pkg.id} disablePadding>
            <PackagePopover pkg={pkg} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}