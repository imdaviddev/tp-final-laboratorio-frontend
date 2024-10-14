import {useState, useEffect} from 'react'
import { styled } from "styled-components";

// Interfaz genérica para Props
interface Props<T> {
    lista: T[];
    setSeleccionados: (seleccionados: T[]) => void;
    maxSeleccionados?: number;
    renderItem: (item: T) => React.ReactNode; // Función para renderizar cada item
  }
  
  // Estilos
  const WrapperModalSeleccionarList = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #b6b3b37a;
  `;
  
  const ListModalSeleccionarList = styled.ul`
    background: white;
    padding: 1rem;
    border-radius: 8px;
    height: 400px;
    overflow-y: auto;
  `;
  
  const ItemListModalSeleccionarList = styled.li<{ selected: boolean }>`
    padding: 0.5rem;
    cursor: pointer;
    background-color: ${({ selected }) => (selected ? 'lightblue' : 'white')};
    border: 1px solid #ccc;
    margin-bottom: 0.5rem;
    &:hover {
      background-color: lightgray;
    }
  `;
  
  // Componente ModalListaSeleccionable
  const ModalListaSeleccionable = <T,>({
    lista,
    setSeleccionados,
    maxSeleccionados,
    renderItem,
  }: Props<T>) => {
    const [seleccionadosInterno, setSeleccionadosInterno] = useState<T[]>([]);
  
    const toggleSeleccion = (item: T) => {
      setSeleccionadosInterno((prev) => {
        if (prev.includes(item)) {
          return prev.filter((i) => i !== item);
        } else if (!maxSeleccionados || prev.length < maxSeleccionados) {
          return [...prev, item];
        }
        return prev;
      });
    };
  
    useEffect(() => {
      setSeleccionados(seleccionadosInterno);
    }, [seleccionadosInterno, setSeleccionados]);
  
    return (
      <WrapperModalSeleccionarList>
        <ListModalSeleccionarList>
          {lista.map((item, index) => (
            <ItemListModalSeleccionarList
              key={index}
              selected={seleccionadosInterno.includes(item)}
              onClick={() => toggleSeleccion(item)}
            >
              {renderItem(item)} 
            </ItemListModalSeleccionarList>
          ))}
        </ListModalSeleccionarList>
        <p>{`Seleccionados: ${seleccionadosInterno.length} ${
          maxSeleccionados ? `/ ${maxSeleccionados}` : ''
        }`}</p>
      </WrapperModalSeleccionarList>
    );
  };

export default ModalListaSeleccionable;
