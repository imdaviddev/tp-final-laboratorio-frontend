import { styled } from "styled-components";
import { TituloPage } from "../ComponentsUI";  
import { camelCaseToNormal as parser } from "../../../utils";

const WrapperTabla = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;

  max-width: 600px;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background-color: #d12c2c;
  color: white;
  font-weight: bold;
  border-radius: 0.2rem;
`;

const WrapperCol = styled.div`
  text-align: center;
  padding: 0.5rem;
  flex: 1;  
`;

interface PropsTable {
    datos: any[];
}

const Tabla: React.FC<PropsTable> = ({ datos }) => {
    return <WrapperTabla>
            {datos.length > 0 && (
                <WrapperRow>
                    {Object.keys(datos[0]).map((col, index) => (
                        <WrapperCol key={index}>{parser(col)}</WrapperCol>
                    ))}
                </WrapperRow>
            )}

            {datos.map((fila, rowIndex) => (
                <WrapperRow key={rowIndex}>
                    {Object.values(fila).map((valor, colIndex) => (
                        <WrapperCol key={colIndex}>{parser(valor.toString())}</WrapperCol>
                    ))}
                </WrapperRow>
            ))}
        </WrapperTabla>
};


const SupervisionVehiculosPage = () => {
    const datos = [
        { id: 1123, tipo: "Auto", viajesRealizados: 58 },
        { id: 2356, tipo: "Camioneta", viajesRealizados: 94 },
        { id: 3478, tipo: "Motocicleta", viajesRealizados: 72 },
        { id: 4591, tipo: "Camión", viajesRealizados: 36 },
        { id: 5129, tipo: "Auto", viajesRealizados: 123 }
    ]

    return <>
        <TituloPage>
            Vehiculos
        </TituloPage>
        <Tabla datos={datos} />
    </>
}

export default SupervisionVehiculosPage;


const WrapperModal = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #6d6d6da5;
` 

const Modal: React.FC = () => {
    return <WrapperModal>
    
    </WrapperModal>
}
