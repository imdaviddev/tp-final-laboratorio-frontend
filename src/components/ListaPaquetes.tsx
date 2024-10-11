import {Typography, List, ListItem, Paper} from '@mui/material';
import PaquetePopup from './PaquetePopup'


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

export default function ListaPaquetes() {
  return (
    <Paper style={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h4" component="h1" gutterBottom style={{ padding: 16 }}>
        Lista de Paquetes
      </Typography>
      <List style={{ maxHeight: 400, overflow: 'auto' }}>
        {packages.map((pkg) => (
          <ListItem key={pkg.id} disablePadding>
            <PaquetePopup pkg={pkg} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}