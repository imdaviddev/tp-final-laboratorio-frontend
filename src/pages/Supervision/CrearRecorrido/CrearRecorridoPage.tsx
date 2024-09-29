import { styled } from "styled-components"

const TituloPage = styled.div`
    width: 100%;
    text-align: center;
    padding: 1.5rem 0;
    font-weight: bold;
    font-size: 1.2rem;
`

const Titulo = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
`
const TituloDescripcion = styled.p`
    font-size: 1rem;
    font-weight: 1.2rem;
`
const ContainerControles = styled.div`
    background-color: #c4c1c1;
    padding: 1rem;
    flex: 1;
    margin: 0 1rem 1rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
`

const Button = styled.button`
    color: white;
    background-color: #ec4848;
    border-radius: 0.5rem;
    height: min-content;
    padding: 0.5rem 1.5rem;
    border: solid 1px #9c9c9e;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
` 

const Controles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ControlesConfirmar = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex: 1;
` 

interface PropsButtonControl {
    texto: string
    accion: () => void
}

const WrapperButtonControl = styled.div`
    border: none;
    color: white;
    background-color: gray;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.5rem;
    > p {
       text-align: center;
       flex: 1; 
       font-size: 0.7rem;
    }

    > button {
        background-color: #a80f0f;
        color: red;
        border-radius: 0.5rem;
        padding: 0.6rem 1rem;
        font-size: 1.2rem;
        border: none;
    }
`

const ButtonControl: React.FC<PropsButtonControl> = (props) => {
    return <WrapperButtonControl>
        <p>{props.texto}</p>
        <button onClick={props.accion}>+</button>
    </WrapperButtonControl>
}

const WrapperListaPaquetes = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    background-color: gray;
    margin-top: 0.6rem;
    border-radius: 0.5rem;
    width: 100%;
    padding: 0.5rem;

    > li {
        font-size: 0.9rem;
        text-align: center;
        color: white;
    }
`

const ListaPaquetesIngresados = () => {
    const lista = [
        {
            id: 10,
            direccion: "avenida 25",
        },
        {
            id: 11,
            direccion: "avenida 28",
        },
        {
            id: 15,
            direccion: "la casa de PEPE",
        }
    ]

    return <WrapperListaPaquetes>
        {lista.map(paqueteIngresado => {
            return <li>{paqueteIngresado.id} <br/> {paqueteIngresado.direccion}</li>
        })}

    </WrapperListaPaquetes>
}

const CrearRecorridoPage = () => {
  return <>
    <TituloPage>
        Crear Recorrido
    </TituloPage>
    <ContainerControles>
        <Row>
            <Titulo>Recorrido #012</Titulo>
            <ControlesConfirmar>
                <Button>CONFIRMAR</Button>
                <Button>CANCELAR</Button>
            </ControlesConfirmar>
        </Row>
        <Controles>
            <Container>
                <TituloDescripcion>
                    Ingresar Paquetes
                </TituloDescripcion>
                <ButtonControl texto="paqueteid / direccion de paquetes" accion={() => null} />
                <ListaPaquetesIngresados/>                
            </Container>
            <Container>
            </Container>
            <Container>

            </Container>
        </Controles>
    
    </ContainerControles>
  </>
}
    
export default CrearRecorridoPage