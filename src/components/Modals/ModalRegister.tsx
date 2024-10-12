import { styled } from "styled-components";
import useConductorestore from "../../store/conductoresContext";
import { BotonModalForm, Campo, ModalCampoContainer, ModalContainer, ModalWrapper, TituloCampo, TituloModal } from "../../ui/RegisterModal";
import { useState } from "react";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

interface PropsRegister {
    cancelHandler: () => void;
}

const ModalFormRegister: React.FC<PropsRegister> = ({ cancelHandler }) => {
    const { crearConductor } = useConductorestore();
    const [data, setDataBody] = useState({
        nombre: "",
        apellido: "",
        dni: ""
    });
    const sendHandler = (event: React.FormEvent) => {
        event.preventDefault(); 
        if (!data.nombre || !data.apellido || !data.dni) {
            alert("Por favor complete todos los campos");
            return;
        }
        crearConductor({ ...data, rol: "CONDUCTOR" });
        setDataBody({ nombre: "", apellido: "", dni: "" });        
        cancelHandler();
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setDataBody((prev) => ({ ...prev, [name]: value })); 
    };

    return (
        <ModalWrapper>
            <ModalContainer>
                <TituloModal>
                    Ingrese los datos del conductor
                </TituloModal>

                <FormContainer onSubmit={sendHandler}>
                    <ModalCampoContainer>
                        <TituloCampo htmlFor="nombre">
                            Nombre
                        </TituloCampo>
                        <Campo
                            id="nombre"
                            name="nombre" 
                            type="text"
                            value={data.nombre} 
                            onChange={handleChange}
                        />
                    </ModalCampoContainer>
                    <ModalCampoContainer>
                        <TituloCampo htmlFor="apellido">
                            Apellido
                        </TituloCampo>
                        <Campo
                            id="apellido"
                            name="apellido" 
                            type="text"
                            value={data.apellido} 
                            onChange={handleChange} 
                        />
                    </ModalCampoContainer>
                    <ModalCampoContainer>
                        <TituloCampo htmlFor="dni">
                            DNI
                        </TituloCampo>
                        <Campo
                            id="dni"
                            name="dni" 
                            type="text"
                            value={data.dni} 
                            onChange={handleChange} 
                        />
                    </ModalCampoContainer>

                    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                        <BotonModalForm type="submit"> 
                            Agregar
                        </BotonModalForm>
                        <BotonModalForm type="button" onClick={cancelHandler}>
                            Cancel
                        </BotonModalForm>
                    </div>
                </FormContainer>
            </ModalContainer>
        </ModalWrapper>
    );
};

export default ModalFormRegister;
