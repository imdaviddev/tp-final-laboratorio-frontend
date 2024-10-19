import React, { useEffect, useState } from 'react';
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
  DialogActions,
} from '@mui/material';
import { Container, ContainerPadre, InputForm, MensajeBienvenida } from '../ComponentsUI';
import { Boton, SubmitButton } from '../ComponentsUI/Botones';
import useRepuestoStore from '../../store/repuestosContext';
import { IRepuesto } from '../../api/models/respuestos.models';
import RepuestoDetails from './components/RepuestoDetails';

export default function administracionRepuestos() {
  const { repuestos, obtenerRepuestos, hasFetched } = useRepuestoStore();
  const [repuestosFiltrados, setRepuestosFiltrados] = useState<IRepuesto[]>(repuestos); // Lista filtrada
  const [cambios, setCambios] = useState<Set<string>>(new Set());
  const [detallesAbiertos, setDetallesAbiertos] = useState(false);
  const [repuestoSeleccionado, setRepuestoSeleccionado] = useState<IRepuesto | null>(null);
  const [inputFiltro, setInputFiltro] = useState("");

  useEffect(() => {
    if (!hasFetched) {
      obtenerRepuestos();
    }
  }, [obtenerRepuestos, hasFetched]);

  useEffect(() => {
    setRepuestosFiltrados(repuestos);
  }, [repuestos]);

  const filterInputChange = (input: string) => {
    if (input.trim() === "") {
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
    setInputFiltro(e.target.value);
  };

  const handleButtonClick = () => {
    filterInputChange(inputFiltro);
  };

  const handleUmbralChange = (idRepuesto: string, nuevoUmbral: number) => {
    // Actualiza los repuestos filtrados
    const filtradosActualizados = repuestosFiltrados.map(repuesto =>
      String(repuesto.id) === idRepuesto
        ? { ...repuesto, stock_minimo: nuevoUmbral }
        : repuesto
    );

    setRepuestosFiltrados(filtradosActualizados);

    // Crea un nuevo Set para registrar los cambios y forzar un re-render
    const nuevosCambios = new Set(cambios);
    nuevosCambios.add(idRepuesto);
    setCambios(nuevosCambios); // Actualiza el estado con una nueva referencia al Set
  };


  const handleVerDetalles = (repuesto: IRepuesto) => {
    setRepuestoSeleccionado(repuesto);
    setDetallesAbiertos(true);
  };

  const handleCerrarDetalles = () => {
    setDetallesAbiertos(false);
    setRepuestoSeleccionado(null);
  };

  const handleConfirmar = () => {
    console.log('Cambios confirmados:', repuestosFiltrados.filter(r => cambios.has(String(r.id))));
    // enviar los cambios al backend
    // actualizarRepuestos(repuestosFiltrados); <-- persistir cambio
    setCambios(new Set()); // Resetear los cambios despues de confirmar
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
                <TableCell>Nombre</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Umbral de Compra Mínima</TableCell>
                <TableCell>Stock Disponible</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {repuestosFiltrados.map((repuesto) => (
                <TableRow key={repuesto.id}>
                  <TableCell>{repuesto.nombre}</TableCell>
                  <TableCell>${repuesto.costo.toFixed(2)}</TableCell>
                  <TableCell>
                    <TextField
                      type="number"
                      value={repuesto.stock_minimo}  // Reflejar el valor correcto
                      onChange={(e) => handleUmbralChange(String(repuesto.id), parseInt(e.target.value, 10))}
                      inputProps={{ min: 0 }}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{repuesto.stock}</TableCell>
                  <TableCell>
                    <Boton onClick={() => handleVerDetalles(repuesto)}>Ver Detalles</Boton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <SubmitButton onClick={handleConfirmar} disabled={cambios.size === 0}>Confirmar Cambios</SubmitButton>

        <Dialog open={detallesAbiertos} onClose={handleCerrarDetalles}>
          {repuestoSeleccionado && (
            <RepuestoDetails
              id_catalogo={repuestoSeleccionado.id_catalogo}
              nombre={repuestoSeleccionado.nombre}
              stock={repuestoSeleccionado.stock}
              stock_minimo={repuestoSeleccionado.stock_minimo}
              descripcion={repuestoSeleccionado.descripcion}
            />
          )}
          <DialogActions>
            <Button onClick={handleCerrarDetalles}>Cerrar</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ContainerPadre>
  );
}

