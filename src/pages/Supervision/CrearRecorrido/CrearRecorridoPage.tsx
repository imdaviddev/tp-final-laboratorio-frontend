import { styled } from "styled-components"
import Header from "../../../components/HeaderComponent/Header";


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    color: red;

    font-family: sans-serif;
`;

const TituloPage = styled.div`
    width: 100%;
    text-align: center;
    padding: 1rem 0;
`

const ContainerControles = styled.div`
    background-color: gray;
    padding: 1rem;
`

const Button = styled.div`
    color: white;
    background-color: red;
    padding: 1rem 2rem;
` 

const TituloDescripcion = styled.h2`
    font-size: 1.2rem;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
` 

const Controles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const ControlesConfirmar = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
` 

interface PropsBoton{
    accion?: () => void
    nombre: string
    styledComponent?: React.ReactNode
}


const ButtonComponent: React.FC<PropsBoton> = ({nombre}) => {
    return <Button>
        nombre
    </Button>
}


const CrearRecorridoPage = () => {
  return <PageContainer>
    <Header rol="Supervisor"/>
    <TituloPage>
        Crear Recorrido
    </TituloPage>
    <ContainerControles>
        <Row>
            <TituloPage>Recorrido #012</TituloPage>
            <ControlesConfirmar>
                <Button>Confirmar</Button>
                <Button>Cancelar</Button>
            </ControlesConfirmar>
        </Row>
        <Controles>
            <Container>
                <TituloDescripcion>
                    Ingresar Paquetes
                </TituloDescripcion>

            </Container>
            <Container>

            </Container>
            <Container>

            </Container>
        </Controles>
    
    </ContainerControles>
  </PageContainer>

}
    
export default CrearRecorridoPage