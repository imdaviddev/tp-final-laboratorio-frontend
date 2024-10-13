import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px; /* Ajusta el ancho según sea necesario */
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9; /* Color de fondo */
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Label = styled.label`
  margin: 10px 0 5px;
  font-weight: bold;
  font-size: 16px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  background-color: #5B1647; /* Color primario */
  color: white;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #93063E; /* Color secundario */
  }
`;

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
            <Label htmlFor="matricula">Matrícula:</Label>
            <Input type="text" id="matricula" name="matricula" required onChange={handleChange} />

            <Label htmlFor="motivo">Motivo de ingreso:</Label>
            <Input type="text" id="motivo" name="motivo" required onChange={handleChange} />

            <Label htmlFor="tecnico">Técnico a cargo:</Label>
            <Input type="text" id="tecnico" name="tecnico" required onChange={handleChange} />

            <Label htmlFor="tipoTicket">Tipo de Ticket:</Label>
            <Select id="tipo" name="tipo" required value={tipoTicket} onChange={handleChangeTipo}>
                <option value="">Selecciona un tipo de ticket</option>
                <option value="incidencia">Incidencia</option>
                <option value="solicitud">Solicitud</option>
                <option value="consulta">Consulta</option>
            </Select>

            <SubmitButton type="submit">Enviar</SubmitButton>
        </FormContainer>
    );

};

export default FormNuevoIngreso;

