import React, { useState } from 'react'; // Importa useState
import ListaPaquetes from './Components/ListaPaquetes'; // El componente que deseas mostrar

import './css/conductor.css'
import './css/conductorModal.css'
import {ContainerPadre, ContainerHijo, MensajeBienvenida, DescHijo } from '../ComponentsUI/index'
import { RecorridoDetalle, ImgConductorInicio, ContainerImgDetalle } from '.';
import Detalle from '../../components/Detalle'

const ConductorInicio = () => {
    // Estado para manejar la visibilidad del componente
    const [mostrarComponent, setMostrarComponent] = useState(false);

    const handleGenerarListaClick = () => {
        setMostrarComponent(true); // Cambia el estado a true para mostrar el componente
    };

    const handleCloseModal = () => {
        setMostrarComponent(false); // Cambia el estado a false para ocultar el componente
    };

    return <>
        <ContainerPadre>
            <MensajeBienvenida>Bienvenido, Amin</MensajeBienvenida>

            <ContainerHijo>
                <DescHijo>Recorrido en curso</DescHijo>
                <ContainerImgDetalle>
                        <ImgConductorInicio></ImgConductorInicio>
                        <RecorridoDetalle>
                            <Detalle tipo="Recorrido" valor="#012"></Detalle>
                            <Detalle tipo="Vehículo" valor="#c4m1on45"></Detalle>
                            <Detalle tipo="Paquetes" valor="20"></Detalle>
                            <Detalle tipo="KM a recorrer" valor="80"></Detalle>
                            <Detalle tipo="Horario estimado" valor="4hs"></Detalle>
                            <a href="#">Ver información</a>
                        </RecorridoDetalle>
                    </ContainerImgDetalle>


                <button id="generarLista" className='button-conductor' onClick={handleGenerarListaClick}>
                    Entregar Paquetes
                </button>
            </ContainerHijo>
        </ContainerPadre>

        {/* Renderizado condicional del modal con fondo oscuro */}
        {
            mostrarComponent && (
                <div className='modal-overlay' onClick={handleCloseModal}>
                    <div className='modal-content' onClick={e => e.stopPropagation()}>
                        <ListaPaquetes />
                        <button className="close-button" onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )
        }
    </>
};

export default ConductorInicio;
