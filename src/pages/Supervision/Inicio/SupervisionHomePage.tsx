import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TituloPage } from '../ComponentsUI'; 
import { ContainerGeneral } from '../../../ui/Container';
import { IRecorrido } from '../../../api/models/recorridos.models';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  background-color: #e20909;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(211, 211, 211, 0.1);
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    color: wheat;
  }
`;

const Label = styled.span`
  font-weight: bold;
  color: #ffffff;
`;

// Función para formatear la fecha al formato "día/mes/año"
const formatearFecha = (fecha: string) => {
  const date = new Date(fecha);
  return date.toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const SupervisionHomePage = () => {
  const [recorridos, setRecorridos] = useState<IRecorrido[]>([]);
  const [verRecorrido, setVerRecorrido] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/viajes')
      .then((response) => response.json())
      .then((data) => setRecorridos(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handlerVerRecorrido = () => {
    setVerRecorrido((verRecorrido) => !verRecorrido);
  };

  return (
    <>
      <TituloPage>Recorridos</TituloPage>

      <ContainerGeneral>
        <List>
          {recorridos.map((recorrido) => (
            <Item key={recorrido.id}>
              <div>
                <Label>ID:</Label> {recorrido.id}
              </div>
              <div>
                <Label>Conductor ID:</Label> {recorrido.id_conductor}
              </div>
              <div>
                <Label>Matrícula:</Label> {recorrido.matricula}
              </div>
              <div>
                <Label>Estado:</Label> {recorrido.estado}
              </div>
              <div>
                <Label>Fecha de Asignación:</Label> {formatearFecha(recorrido.f_asignacion)}
              </div>
              <div>
                <Label>Fecha de Inicio:</Label> {formatearFecha(recorrido.f_inicio)}
              </div>
              <div>
                <Label>Costo:</Label> ${recorrido.costo.toFixed(2)}
              </div>
              <div>
                <Label>Fecha de Finalización:</Label>{' '}
                {recorrido.f_finalizacion ? formatearFecha(recorrido.f_finalizacion) : 'En curso'}
              </div>
            </Item>
          ))}
        </List>
      </ContainerGeneral>
    </>
  );
};

export default SupervisionHomePage;
