import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 100px; /* Ajusta el ancho según sea necesario */
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #93063E; /* Color secundario */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const GroupSelect = styled.div`
    display: flex;
    align-items: center;
`

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #C90035; /* Color terciario */
  border-radius: 4px;
  font-size: 16px;
  color: #5B1647; /* Color primario */
`;

const Select = styled.select`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #C90035; /* Color terciario */
  border-radius: 4px;
  font-size: 16px;
  color: #5B1647; /* Color primario */
`;

const Label = styled.label`
  margin: 10px 5px 5px;
  padding: 5px;
  font-weight: bold;
  font-size: 18px;
  color: red; /* Color secundario */
`;

const SubmitButton = styled.button`
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  background-color: red; /* Color primario */
  color: white;
  font-size: 16px;
  
  &:hover {
    background-color: #93063E; /* Color secundario */
  }
`;

const MantenimientoHistorial = () => {
    return (
        <FormContainer>
            <Label htmlFor="detalle">Detalles del Mantenimiento:</Label>
            <Input type="text" id="detalle" name="detalle" placeholder='Busqueda por matricula' required />

            <GroupSelect>
                <Label htmlFor="marca">Marca:</Label>
                <Select id="marca" name="marca" required>
                    <option value="">Selecciona una marca</option>
                    <option value="marca1">Marca 1</option>
                    <option value="marca2">Marca 2</option>
                    <option value="marca3">Marca 3</option>
                </Select>

                <Label htmlFor="modelo">Modelo:</Label>
                <Select id="modelo" name="modelo" required>
                    <option value="">Selecciona un modelo</option>
                    <option value="modelo1">Modelo 1</option>
                    <option value="modelo2">Modelo 2</option>
                    <option value="modelo3">Modelo 3</option>
                </Select>
            </GroupSelect>

            <SubmitButton type="submit">Filtrar</SubmitButton>
        </FormContainer>
    );
};

export default MantenimientoHistorial;

