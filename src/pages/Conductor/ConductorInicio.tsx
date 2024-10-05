import React, { useState } from 'react'; // Importa useState
import Header from '../../components/HeaderComponent/Header';
import Component from '../../components/PestañaEmergente/PestañaEmergente'; // El componente que deseas mostrar
import conductorInicio from '../../../public/conductorInicio.svg'
import './conductor.css';
import './conductorModal.css'
import { RecorridoDetalle, MensajeBienvenida, ContainerPadre, ContainerHijo, ContainerDetalle, DescHijo } from './ComponentsUI';
import Detalle from './Components/Detalle'

const ConductorInicio = () => {
    // Estado para manejar la visibilidad del componente
    const [mostrarComponent, setMostrarComponent] = useState(false);

    const handleGenerarListaClick = () => {
        setMostrarComponent(true); // Cambia el estado a true para mostrar el componente
    };

    const handleCloseModal = () => {
        setMostrarComponent(false); // Cambia el estado a false para ocultar el componente
    };

    return (
        <div className='page-container'>
            <Header rol='Conductor' />

            <ContainerPadre>

                <MensajeBienvenida>Bienvenido, Amin</MensajeBienvenida>

                <ContainerHijo>
                    <DescHijo>Recorrido en curso</DescHijo>
                    <ContainerDetalle>
                        <img src={conductorInicio} alt="Conductor Inicio" />

                        <RecorridoDetalle>
                            <Detalle tipo="Recorrido" valor="#012"></Detalle>
                            <Detalle tipo="Vehículo" valor="#c4m1on45"></Detalle>
                            <Detalle tipo="paquetes a entregar" valor="20"></Detalle>
                            <Detalle tipo="KM a recorrer" valor="80"></Detalle>
                            <Detalle tipo="Horario estimado" valor="4hs"></Detalle>
                            <a href="#">Ver información</a>
                        </RecorridoDetalle>
                    </ContainerDetalle>

                    <button id="generarLista" className='button-conductor' onClick={handleGenerarListaClick}>
                        Entregar Paquetes
                    </button>
                </ContainerHijo>
            </ContainerPadre>

            {/* Renderizado condicional del modal con fondo oscuro */}
            {mostrarComponent && (
                <div className='modal-overlay' onClick={handleCloseModal}>
                    <div className='modal-content' onClick={e => e.stopPropagation()}>
                        <Component />
                        <button className="close-button" onClick={handleCloseModal}>Cerrar</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConductorInicio;
