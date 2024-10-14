import { styled } from "styled-components"


export const Boton = styled.button`
    margin:0.2rem;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    color: white;
    background-color: #c33c3c;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0 2px 0 0 gray;
    height: min-content;
`

export const BotonAgregarAbrirModal = styled.button`
    border: none;
    background-color: #e91e1e;
    color: white;
    padding: 0.5rem 2.5rem;
    text-align: center;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 3px 0px #a4a4a4;
    margin-bottom: 0.8rem;
    cursor: pointer;
`

export const SubmitButton = styled.button`
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 4px;
  background-color: #cc2514; /* Color primario */
  color: white;
  font-size: 16px;
  
  &:hover {
    background-color: #da7168; /* Color secundario */
  }
`;
