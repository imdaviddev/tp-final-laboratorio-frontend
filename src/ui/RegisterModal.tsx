import { styled } from "styled-components";

export const ModalWrapper = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 2rem 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    background: #10101078;
    overflow-y: auto;
`

export const ModalContainer = styled.div`
    width: 500px;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    background: linear-gradient(120deg,rgba(200, 1, 1, 0.756), #170505); 
    backdrop-filter: blur(10px); 
    -webkit-backdrop-filter: blur(10px); 
    border-radius: 10px; 
    border: 1px solid rgba(255, 255, 255, 0.3); 
    padding: 20px;
    box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1); 

    @media (width < 500px) {
        width: 300px;
        height: 300px;
    }
`

export const ModalCampoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
`

export const BotonModalForm = styled.button`
    text-align: center;
    padding: 0.4rem 2rem;
    background-color: #f71b1b;
    border-radius: 0.3rem;
    border: 2px solid transparent;
    color: #f1f1f1;
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #000000;
        border-color: #f1f1f1;
    }
`

export const TituloModal = styled.div`
    font-weight: bold;
    font-size: 1.4rem;    
    color: #f1f1f1;
    letter-spacing: 1px;
`

export const TituloCampo = styled.label`
    text-align: center;
    font-weight: bold;
    color: #f1f1f1;
    font-size: 0.8rem;
`

export const Campo = styled.input`
    width: 150%;
    padding: 0.3rem;
    border-radius: 0.1rem;
    border: none;
    box-shadow: 1px 2px 3px 0px #5c5a5a;
    font-weight: bold;
    text-align: center;
    border: solid 1px white;
    letter-spacing: 1px;
    outline: none; 
    cursor: pointer;
    max-width: 230px;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`