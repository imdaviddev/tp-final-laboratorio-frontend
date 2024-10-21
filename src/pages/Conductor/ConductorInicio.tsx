import React, { useState, useRef, useEffect } from 'react';
import ListaPaquetes from './Components/ListaPaquetes';

import './css/conductor.css'
import './css/conductorModal.css'
import { ContainerPadre, ContainerHijo, MensajeBienvenida, DescHijo } from '../ComponentsUI/index';
import { RecorridoDetalle, ImgConductorInicio, ContainerImgDetalle } from '.';
import Detalle from '../../components/Detalle';
import { Boton, SubmitButton } from '../ComponentsUI/Botones';
import PackagePopover from './Components/PaquetePopup';

const ConductorInicio = () => {
    const [mostrarComponent, setMostrarComponent] = useState(false);

    const handleGenerarListaClick = () => {
        setMostrarComponent(true);
    };

    const handleClose = () => {
        setMostrarComponent(false);
    };

    return (
        <>
            <ContainerPadre>
                <MensajeBienvenida>Bienvenido, Amin</MensajeBienvenida>
                <ContainerHijo>
                    <DescHijo>Recorrido en curso</DescHijo>
                    <ContainerImgDetalle>
                        <ImgConductorInicio />
                        <RecorridoDetalle>
                            <Detalle tipo="Recorrido" valor="#012" />
                            <Detalle tipo="Vehículo" valor="#c4m1on45" />
                            <Detalle tipo="Paquetes" valor="20" />
                            <Detalle tipo="KM a recorrer" valor="80" />
                            <Detalle tipo="Horario estimado" valor="4hs" />
                            <Boton>Ver información</Boton>
                        </RecorridoDetalle>
                    </ContainerImgDetalle>
                    <SubmitButton id="generarLista" onClick={handleGenerarListaClick}>
                        Entregar Paquetes
                    </SubmitButton>
                </ContainerHijo>
            </ContainerPadre>

            {mostrarComponent && (
                <PackagePopover open={mostrarComponent} handleClose={handleClose}/>
            )}
        </>
    );
};

export default ConductorInicio;
