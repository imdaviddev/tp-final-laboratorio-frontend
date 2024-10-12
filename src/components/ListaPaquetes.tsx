import { List, ListItem, Paper } from '@mui/material';
import {DescHijo} from '../pages/ComponentsUI/index'
import PaquetePopup from './PaquetePopup'
import usePaquetestore from '../store/paquetesContext';
import { useEffect, useState } from "react";


const ListaPaquetes = () => {
  const { paquetes, obtenerPaquetes, hasFetched } = usePaquetestore();

  useEffect(() => {
    if (!hasFetched) {
      obtenerPaquetes();
    }
  }, [obtenerPaquetes, hasFetched]);


  return (
    <Paper style={{ maxWidth: 400, margin: 'auto' }}>
      <DescHijo>Lista de Paquetes</DescHijo>
      {paquetes.length == 0 ?
        <p>No hay paquetes asignados... </p> :
        <List style={{ maxHeight: 400, overflow: 'auto' }}>
          {paquetes.map((paquete) => (
            <ListItem key={paquete.id_paquete} disablePadding>
              <PaquetePopup paquete={paquete} />
            </ListItem>
          ))}
        </List>
      }

    </Paper>
  );
}

export default ListaPaquetes;