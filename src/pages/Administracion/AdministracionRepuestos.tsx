import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { Container, ContainerPadre, InputForm, MensajeBienvenida } from '../ComponentsUI';
import { Boton } from '../ComponentsUI/Botones';


interface Repuesto {
  id: string;
  nombre: string;
  umbralCompraMinima: number;
  precio: number;
  id_catalogo: string;
  stock: number;
  stock_minimo: number;
  descripcion: string;
}

const repuestosIniciales: Repuesto[] = [
  {
    id: '1',
    nombre: 'Filtro de aceite',
    umbralCompraMinima: 10,
    precio: 15.99,
    id_catalogo: 'CAT001',
    stock: 50,
    stock_minimo: 10,
    descripcion: 'Filtro de aceite de alta calidad para motores de automóviles.'
  },
  {
    id: '2',
    nombre: 'Pastillas de freno',
    umbralCompraMinima: 5,
    precio: 45.50,
    id_catalogo: 'CAT002',
    stock: 30,
    stock_minimo: 8,
    descripcion: 'Pastillas de freno de cerámica para un frenado suave y eficiente.'
  },
  {
    id: '3',
    nombre: 'Bujías',
    umbralCompraMinima: 8,
    precio: 8.75,
    id_catalogo: 'CAT001',
    stock: 100,
    stock_minimo: 20,
    descripcion: 'Bujías de encendido para motores de gasolina.'
  },
  {
    id: '4',
    nombre: 'Amortiguadores',
    umbralCompraMinima: 2,
    precio: 89.99,
    id_catalogo: 'CAT003',
    stock: 15,
    stock_minimo: 4,
    descripcion: 'Amortiguadores de gas para una conducción suave y estable.'
  },
  {
    id: '5',
    nombre: 'Correa de distribución',
    umbralCompraMinima: 1,
    precio: 35.25,
    id_catalogo: 'CAT002',
    stock: 25,
    stock_minimo: 5,
    descripcion: 'Correa de distribución resistente para motores de 4 cilindros.'
  },
];

export default function administracionRepuestos() {
  const [repuestos, setRepuestos] = useState<Repuesto[]>(repuestosIniciales); // Lista original
  const [repuestosFiltrados, setRepuestosFiltrados] = useState<Repuesto[]>(repuestosIniciales); // Lista filtrada
  const [cambios, setCambios] = useState<Set<string>>(new Set());
  const [detallesAbiertos, setDetallesAbiertos] = useState(false);
  const [repuestoSeleccionado, setRepuestoSeleccionado] = useState<Repuesto | null>(null);
  const [inputFiltro, setInputFiltro] = useState("");

  const filterInputChange = (input: string) => {
    if (input.trim() === "") {
      // Si el input esta vacio devuelve todos los repuestos 
      setRepuestosFiltrados(repuestos);
    } else {
      setRepuestosFiltrados(
        repuestos.filter(repuesto =>
          repuesto.nombre.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFiltro(e.target.value); // Guarda el valor del input en el estado
  };

  const handleButtonClick = () => {
    filterInputChange(inputFiltro);
  };

  const handleUmbralChange = (id: string, nuevoUmbral: number) => {
    setRepuestos(repuestos.map(repuesto =>
      repuesto.id === id ? { ...repuesto, umbralCompraMinima: nuevoUmbral } : repuesto
    ));
    setCambios(new Set(cambios.add(id)));
  };

  const handleConfirmar = () => {
    console.log('Cambios confirmados:', repuestos.filter(r => cambios.has(r.id)));
    // Aquí puedes enviar los cambios a tu backend o realizar otras acciones necesarias
    setCambios(new Set()); // Resetear los cambios después de confirmar
  };

  const handleVerDetalles = (repuesto: Repuesto) => {
    setRepuestoSeleccionado(repuesto);
    setDetallesAbiertos(true);
  };

  const handleCerrarDetalles = () => {
    setDetallesAbiertos(false);
    setRepuestoSeleccionado(null);
  };

  return (
    <ContainerPadre>
      <MensajeBienvenida>Tabla de Repuestos</MensajeBienvenida>

      <Box sx={{ width: '100%', overflowX: 'auto' }}>
        <Typography variant="h4" gutterBottom>
        </Typography>
        <TableContainer component={Paper}>
          <Container>
            <InputForm onChange={handleInputChange} value={inputFiltro} />
            <Boton onClick={handleButtonClick}>Filtrar</Boton>
          </Container>

          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Umbral de Compra Mínima</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repuestosFiltrados.map((repuesto) => (
                <TableRow
                  key={repuesto.id}
                  sx={{
                    '&:last-child td, &:last-child th': { border: 0 },
                    backgroundColor: cambios.has(repuesto.id) ? 'rgba(76, 175, 80, 0.1)' : 'inherit'
                  }}
                >
                  <TableCell component="th" scope="row">
                    {repuesto.id}
                  </TableCell>
                  <TableCell>{repuesto.nombre}</TableCell>
                  <TableCell>${repuesto.precio.toFixed(2)}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={repuesto.umbralCompraMinima}
                      onChange={(e) => handleUmbralChange(repuesto.id, parseInt(e.target.value, 10))}
                      inputProps={{ min: 0 }}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={() => handleVerDetalles(repuesto)}
                    >
                      Ver Detalles
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleConfirmar}
            disabled={cambios.size === 0}
          >
            Confirmar Cambios
          </Button>
        </Box>

        <Dialog open={detallesAbiertos} onClose={handleCerrarDetalles}>
          <DialogTitle>Detalles del Repuesto</DialogTitle>
          <DialogContent>
            {repuestoSeleccionado && (
              <Box>
                <Typography><strong>ID Repuesto:</strong> {repuestoSeleccionado.id}</Typography>
                <Typography><strong>ID Catálogo:</strong> {repuestoSeleccionado.id_catalogo}</Typography>
                <Typography><strong>Nombre:</strong> {repuestoSeleccionado.nombre}</Typography>
                <Typography><strong>Stock:</strong> {repuestoSeleccionado.stock}</Typography>
                <Typography><strong>Stock Mínimo:</strong> {repuestoSeleccionado.stock_minimo}</Typography>
                <Typography><strong>Descripción:</strong> {repuestoSeleccionado.descripcion}</Typography>
              </Box>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCerrarDetalles}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ContainerPadre>
  );
}