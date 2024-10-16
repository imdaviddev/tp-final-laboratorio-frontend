import React, { useState } from 'react';
import useVehiculoStore from '../../store/vehiculosContext';
import { BotonModalForm, Campo, FormContainer, ModalCampoContainer, ModalContainer, ModalWrapper, TituloCampo, TituloModal } from '../../ui/RegisterModal';
import { styled } from 'styled-components';

const SelectModalForm = styled.select`
    width: 80%;
    padding: 10px 5px;
    border-radius: 2px;
    border: 1px solid #ccc;
    background-color: #f9f9f9;
    font-size: 16px;
    font-family: 'Arial', sans-serif;
    color: #333;
    transition: border-color 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #007BFF;
        background-color: #fff;
        box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    }

    &:hover {
        border-color: #007BFF;
    }
`;

const OptionModalForm = styled.option`
    font-weight: 600;
    color: #555;
    padding: 5px;
    background-color: #fff;
    
    &:hover {
        background-color: #f0f0f0;
    }
`;

interface PropsRegister {
    cancelHandler: () => void;
}
const ModalFormRegisterVehiculo: React.FC<PropsRegister> = ({ cancelHandler }) => {
    const { crearVehiculo } = useVehiculoStore();
    const [data, setDataBody] = useState({
        marca: "",
        modelo: "",
        anio: 0,
        matricula: "",
        estadoVTV: "",
        fechaVTV: "",
        peso_admitido: 0,
        volumen_admitido: 0,
        estado: "",
        km_recorridos: 0,
    });

    const sendHandler = (event: React.FormEvent) => {
        event.preventDefault();
        if (!data.marca || !data.modelo || !data.matricula) {
            alert("Por favor complete todos los campos");
            return;
        }
        crearVehiculo({ ...data });
        setDataBody({
            marca: '',
            modelo: '',
            anio: 0,
            matricula: '',
            estadoVTV: '',
            fechaVTV: '',
            peso_admitido: 0,
            volumen_admitido: 0,
            estado: '',
            km_recorridos: 0,
        });

        cancelHandler();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setDataBody((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <ModalWrapper style={{position:"fixed"}}>
            <ModalContainer style={{marginTop:"28rem"}}>
                <TituloModal>
                    Ingrese los datos del Vehículo
                </TituloModal>

                <FormContainer onSubmit={sendHandler}>
                    <ModalCampoContainer>
                        <TituloCampo htmlFor="marca">Marca</TituloCampo>
                        <SelectModalForm id="marca" name="marca" value={data.marca} onChange={handleChange}>
                            <OptionModalForm value="">Seleccione una marca</OptionModalForm>
                            <OptionModalForm value="Toyota">Toyota</OptionModalForm>
                            <OptionModalForm value="Ford">Ford</OptionModalForm>
                            <OptionModalForm value="Chevrolet">Chevrolet</OptionModalForm>
                        </SelectModalForm>
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="modelo">Modelo</TituloCampo>
                        <SelectModalForm id="modelo" name="modelo" value={data.modelo} onChange={handleChange}>
                            <OptionModalForm value="">Seleccione un modelo</OptionModalForm>
                            <OptionModalForm value="Corolla">Corolla</OptionModalForm>
                            <OptionModalForm value="Focus">Focus</OptionModalForm>
                            <OptionModalForm value="Silverado">Silverado</OptionModalForm>
                        </SelectModalForm>
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="estadoVTV">Estado VTV</TituloCampo>
                        <SelectModalForm id="estadoVTV" name="estadoVTV" value={data.estadoVTV} onChange={handleChange}>
                            <OptionModalForm value="">Seleccione estado VTV</OptionModalForm>
                            <OptionModalForm value="Aprobado">Aprobado</OptionModalForm>
                            <OptionModalForm value="Rechazado">Rechazado</OptionModalForm>
                            <OptionModalForm value="Pendiente">Pendiente</OptionModalForm>
                        </SelectModalForm>
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="fechaVTV">Fecha VTV</TituloCampo>
                        <Campo
                            id="fechaVTV"
                            name="fechaVTV"
                            type="date"
                            value={data.fechaVTV}
                            onChange={handleChange}
                        />
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="estado">Estado</TituloCampo>
                        <SelectModalForm id="estado" name="estado" value={data.estado} onChange={handleChange}>
                            <OptionModalForm value="">Seleccione un estado</OptionModalForm>
                            <OptionModalForm value="APTO PARA CIRCULAR">APTO PARA CIRCULAR</OptionModalForm>
                            <OptionModalForm value="NO APTO PARA CIRCULAR">NO APTO PARA CIRCULAR</OptionModalForm>
                            <OptionModalForm value="EN REPARACIÓN">EN REPARACIÓN</OptionModalForm>
                        </SelectModalForm>
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="anio">Año</TituloCampo>
                        <SelectModalForm id="anio" name="anio" value={data.anio} onChange={handleChange}>
                            {Array.from({ length: 2024 - 2000 + 1 }, (_, i) => {
                                const year = 2000 + i;
                                return (
                                    <OptionModalForm key={year} value={year}>
                                        {year}
                                    </OptionModalForm>
                                );
                            })}
                        </SelectModalForm>
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="matricula">Matrícula</TituloCampo>
                        <Campo
                            id="matricula"
                            name="matricula"
                            type="text"
                            value={data.matricula}
                            onChange={handleChange}
                        />
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="peso_admitido">Peso Admitido (kg)</TituloCampo>
                        <Campo
                            id="peso_admitido"
                            name="peso_admitido"
                            type="number"
                            value={data.peso_admitido}
                            onChange={handleChange}
                        />
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="volumen_admitido">Volumen Admitido (m³)</TituloCampo>
                        <Campo
                            id="volumen_admitido"
                            name="volumen_admitido"
                            type="number"
                            value={data.volumen_admitido}
                            onChange={handleChange}
                        />
                    </ModalCampoContainer>

                    <ModalCampoContainer>
                        <TituloCampo htmlFor="km_recorridos">Kilómetros Recorridos</TituloCampo>
                        <Campo
                            id="km_recorridos"
                            name="km_recorridos"
                            type="number"
                            value={data.km_recorridos}
                            onChange={handleChange}
                        />
                    </ModalCampoContainer>

                    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                        <BotonModalForm type="submit">
                            Confirmar
                        </BotonModalForm>
                        <BotonModalForm type="button" onClick={cancelHandler}>
                            Cancelar
                        </BotonModalForm>
                    </div>
                </FormContainer>
            </ModalContainer>
        </ModalWrapper>
    );
}

export default ModalFormRegisterVehiculo;
