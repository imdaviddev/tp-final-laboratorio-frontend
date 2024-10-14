import React, { FormEvent, useState } from 'react';
import { SubmitButton } from '../../ComponentsUI/Botones';
import { LabelForm, InputForm, SelectForm, FormContainer } from '../../ComponentsUI/index';
import useTicketstore from '../../../store/ticketsContext';
import {ITicketCreate} from '../../../api/models/tickets.models'

const FormNuevoIngreso = () => {
  const { crearTicket } = useTicketstore();

  // Estado inicial
  const [data, setDataBody] = useState<ITicketCreate>({
    matricula: "",
    descripcion_problemas: "",
    nombre_usuario: "",
    tipo: ""
  });

  const handleChangeTipo = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    
    // Actualiza 'tipo' dentro de 'data'
    setDataBody((prev) => ({
      ...prev,
      tipo: value
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataBody((prev) => ({ ...prev, [name]: value }));
  };

  function sendHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    console.log(data);

    crearTicket({
      matricula: data.matricula,
      descripcion_problemas: data.descripcion_problemas,
      nombre_usuario: data.nombre_usuario,
      tipo: data.tipo  // Usa el valor seleccionado de 'tipo'
    });

    setDataBody({ matricula: "", descripcion_problemas: "", nombre_usuario: "", tipo: "" });
  }

  return (
    <FormContainer onSubmit={sendHandler}>
      <LabelForm htmlFor="matricula">Matrícula:</LabelForm>
      <InputForm type="text" id="matricula" name="matricula" value={data.matricula} required onChange={handleChange} />

      <LabelForm htmlFor="descripcion_problemas">Motivo de ingreso:</LabelForm>
      <InputForm type="text" id="descripcion_problemas" name="descripcion_problemas" value={data.descripcion_problemas} required onChange={handleChange} />

      <LabelForm htmlFor="nombre_usuario">Técnico a cargo:</LabelForm>
      <InputForm type="text" id="nombre_usuario" name="nombre_usuario" value={data.nombre_usuario} required onChange={handleChange} />

      <LabelForm htmlFor="tipoTicket">Tipo de Ticket:</LabelForm>
      <SelectForm id="tipo" name="tipo" required value={data.tipo} onChange={handleChangeTipo}>
        <option value="">Selecciona un tipo de ticket</option>
        <option value="MANTENIMIENTO">Mantenimiento</option>
        <option value="REPARACION">Reparacion</option>
      </SelectForm>

      <SubmitButton type="submit">Enviar</SubmitButton>
    </FormContainer>
  );
};

export default FormNuevoIngreso;
