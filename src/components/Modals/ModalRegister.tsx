import { BotonModalForm, Campo, ModalCampoContainer, ModalContainer, ModalWrapper, TituloCampo, TituloModal } from "../../ui/RegisterModal"

interface PropsRegister {
    cancelHandler: () => void
}

const ModalFormRegister: React.FC<PropsRegister> = ({cancelHandler}) => {

    const sendHandler = () => {

    }


    return <ModalWrapper>
        <ModalContainer>
            <TituloModal>
                Ingrese los datos del conductor
            </TituloModal>

            <ModalCampoContainer>
                <TituloCampo htmlFor="nombre">
                    Nombre
                </TituloCampo>
                <Campo id="nombre" type="text"/>
            </ModalCampoContainer>
            <ModalCampoContainer>
                <TituloCampo htmlFor="apellido">
                    Apellido
                </TituloCampo>
                <Campo id="apellido" type="text"/>
            </ModalCampoContainer>
            <ModalCampoContainer>
                <TituloCampo htmlFor="dni">
                    DNI
                </TituloCampo>
                <Campo id="dni" type="text"/>
            </ModalCampoContainer>

            <div style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
                <BotonModalForm onClick={sendHandler}>
                    Agregar
                </BotonModalForm>
                <BotonModalForm onClick={cancelHandler}>
                    Cancel
                </BotonModalForm>
            </div>
        </ModalContainer>
    </ModalWrapper>
}

export default ModalFormRegister;