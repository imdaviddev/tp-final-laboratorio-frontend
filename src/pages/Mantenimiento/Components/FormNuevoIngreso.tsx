import React, { FormEvent, useState } from 'react';
import { SubmitButton } from '../../ComponentsUI/Botones';
import { LabelForm, InputForm, SelectForm, FormContainer } from '../../ComponentsUI/index';

const FormNuevoIngreso = () => {

  const [data, setDataBody] = useState({
    matricula: "",
    motivo_ingreso: "",
    nombre_usuario: "",
    tipo: ""
  });

  const [tipoTicket, setTipoTicket] = useState('');

  const handleChangeTipo = (event) => {
    setTipoTicket(event.target.value);
    const { name, value } = event.target;
    setDataBody((prev) => ({ ...prev, [name]: value }));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDataBody((prev) => ({ ...prev, [name]: value }));
  };

  function sendHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    //crearTicket({ ...data});
    setDataBody({ matricula: "", motivo_ingreso: "", nombre_usuario: "", tipo: "" });
  }

  return (
    <FormContainer onSubmit={sendHandler}>
      <LabelForm htmlFor="matricula">Matrícula:</LabelForm>
      <InputForm type="text" id="matricula" name="matricula" required onChange={handleChange} />

      <LabelForm htmlFor="motivo">Motivo de ingreso:</LabelForm>
      <InputForm type="text" id="motivo" name="motivo" required onChange={handleChange} />

      <LabelForm htmlFor="tecnico">Técnico a cargo:</LabelForm>
      <InputForm type="text" id="tecnico" name="tecnico" required onChange={handleChange} />

      <LabelForm htmlFor="tipoTicket">Tipo de Ticket:</LabelForm>
      <SelectForm id="tipo" name="tipo" required value={tipoTicket} onChange={handleChangeTipo}>
        <option value="">Selecciona un tipo de ticket</option>
        <option value="incidencia">Incidencia</option>
        <option value="solicitud">Solicitud</option>
        <option value="consulta">Consulta</option>
      </SelectForm>

      <SubmitButton type="submit">Enviar</SubmitButton>
    </FormContainer>
  );

};

export default FormNuevoIngreso;

