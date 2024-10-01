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
  background-color: #d12c2c;
  color: white;
  font-weight: bold;
  border-radius: 0.2rem;
`;

const WrapperCol = styled.div`
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
                <WrapperRow key={rowIndex} style={{backgroundColor: "#7c7b7b", border: "solid 1px black", color: "#ffffff"}}>
                    {Object.values(fila).map((valor, colIndex) => (
                        <WrapperCol key={colIndex}>{parser(valor.toString())}</WrapperCol>
                    ))}
                </WrapperRow>
            ))}
        </WrapperTabla>
};


const ConductoresPage = () => {
    const datos = [
        { id: 5226, nombre: "Miguel Angel", viajesRealizados: 68 },
        { id: 3452, nombre: "Santiago Pérez", viajesRealizados: 102 },
        { id: 9812, nombre: "Carla Gómez", viajesRealizados: 47 },
        { id: 2765, nombre: "Laura Martínez", viajesRealizados: 86 },
        { id: 4398, nombre: "Ricardo García", viajesRealizados: 120 },
        { id: 6235, nombre: "Ana López", viajesRealizados: 54 }
    ]

    return <>
        <TituloPage>
            Conductores
        </TituloPage>
        <Tabla datos={datos} />
    </>
}

export default ConductoresPage;


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
