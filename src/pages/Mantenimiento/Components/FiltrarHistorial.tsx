import { SubmitButton } from '../../ComponentsUI/Botones';
import { LabelForm, InputForm, SelectForm, FormContainer, GroupSelectForm } from '../../ComponentsUI/index';

const MantenimientoHistorial = () => {
  return (
    <FormContainer>
      <LabelForm htmlFor="detalle">Detalles del Mantenimiento:</LabelForm>
      <InputForm type="text" id="detalle" name="detalle" placeholder='Busqueda por matricula' required />

      <GroupSelectForm>
        <LabelForm htmlFor="marca">Marca:</LabelForm>
        <SelectForm id="marca" name="marca" required>
          <option value="">Selecciona una marca</option>
          <option value="marca1">Marca 1</option>
          <option value="marca2">Marca 2</option>
          <option value="marca3">Marca 3</option>
        </SelectForm>

        <LabelForm htmlFor="modelo">Modelo:</LabelForm>
        <SelectForm id="modelo" name="modelo" required>
          <option value="">Selecciona un modelo</option>
          <option value="modelo1">Modelo 1</option>
          <option value="modelo2">Modelo 2</option>
          <option value="modelo3">Modelo 3</option>
        </SelectForm>
      </GroupSelectForm>

      <SubmitButton type="submit">Filtrar</SubmitButton>
    </FormContainer>
  );
};

export default MantenimientoHistorial;

