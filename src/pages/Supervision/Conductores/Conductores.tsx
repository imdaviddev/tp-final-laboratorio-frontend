import { styled } from "styled-components";
import { TituloPage } from "../ComponentsUI";  // Asumo que "TituloPage" lo necesitas en otro lado

import { camelCaseToNormal as parser } from "../../../utils";

const WrapperTabla = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;
`;

const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.5rem;
  background-color: #d12c2c;
  color: white;
  font-weight: bold;
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
    return (
        <WrapperTabla>
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
                        <WrapperCol key={colIndex}>{parser(valor)}</WrapperCol>
                    ))}
                </WrapperRow>
            ))}
        </WrapperTabla>
    );
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
