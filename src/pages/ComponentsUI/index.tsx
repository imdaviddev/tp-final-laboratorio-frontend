import { styled } from "styled-components"

export const TituloPage = styled.div`
    width: 100%;
    text-align: center;
    padding: 1.5rem 0;
    font-weight: bold;
    font-size: 1.2rem;
`

export const Titulo = styled.div`
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;
`
export const TituloDescripcion = styled.p`
    font-size: 1rem;
    font-weight: 1.2rem;
    text-align: center;
`
export const ContainerControles = styled.div`
    background-color: #c4c1c1;
    padding: 1rem;
    flex: 1;
    margin: 0 1rem 1rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
`

export const Button = styled.button`
    color: white;
    background-color: #c33c3c;
    border-radius: 0.2rem;
    box-shadow: 0 2px 0 0 gray;
    height: min-content;
    padding: 0.2rem 1rem;
    border: solid 1px #9c9c9e;
    font-size: 0.7rem;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
` 

export const Controles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    gap: 0.5rem;
`;

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ControlesConfirmar = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: row;
    flex: 1;
` 

export interface PropsButtonControl {
    texto: string
    accion: () => void
}

export const WrapperButtonControl = styled.div`
    border: none;
    color: white;
    background-color: gray;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 0.5rem;
    min-width: 200px;
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

export const ButtonControl: React.FC<PropsButtonControl> = (props) => {
    return <WrapperButtonControl>
        <p>{props.texto}</p>
        <button onClick={props.accion}>+</button>
    </WrapperButtonControl>
}

export const WrapperListaPaquetes = styled.ul`
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

export const ListaPaquetesIngresados = () => {
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

export const ContainerGeneral = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    align-items: center;
    gap: 0.5rem;
    background-color: #e8eae8cc;
    align-self: center;
    max-width: 500px;
    border-radius: 0.5rem;
    width: 100%;
`

export const FilaGeneral = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
  width: 100%;
  background-color: #f9f9f9e3;
  border-radius: 0.5rem;
`

export const BoxGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  max-width: 150px;
  border-radius: 0.5rem;
`

export const VerDetalle = () => {
  return <p style={{
    color: 'red',
    textDecoration: 'underline',
  }}>ver detalle</p>
}