import { MensajeBienvenida, ContainerPadre, ContainerHijo, Container } from '../ComponentsUI';
import BasicTabs from '../../components/BasicTabs/BasicTabs';

//Consumo de gasolina semanal y mensual
//reparaciones semanales y mensuales

const ControlesGerencia = () => {
    return <>
        <ContainerPadre>
            <MensajeBienvenida>Registros de Flota</MensajeBienvenida>
            <ContainerHijo>
                <Container>
                    <BasicTabs
                        subdesc="Consumo"
                        subdesc2do="Reparaciones"
                        descripcionBoton="Consumos" 
                        descripcionBoton2do="Reparaciones"
                    />
                </Container>
            </ContainerHijo>
        </ContainerPadre>
    </>

}

export default ControlesGerencia;