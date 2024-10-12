import { styled } from "styled-components";
import { camelCaseToNormal as parser } from "../../../utils";

export const WrapperTabla = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.5rem;
  gap: 0.5rem;

  max-width: 600px;
`;

export const WrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #d12c2c;
  color: white;
  font-weight: bold;
  border-radius: 0.2rem;
  padding: 1rem; 
`;

export const WrapperCol = styled.div`
  flex: 1;  
`;

export interface PropsTable {
    datos: any[];
}

export const Tabla: React.FC<PropsTable> = ({ datos }) => {
    return <WrapperTabla>
            {datos.length > 0 && (
                <WrapperRow>
                    {Object.keys(datos[0]).map((col, index) => (
                        <WrapperCol key={index}>{col.toUpperCase()}</WrapperCol>
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
