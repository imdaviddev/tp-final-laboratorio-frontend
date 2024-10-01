import React, { useState } from 'react'; // Importa useState
import Header from '../../components/HeaderComponent/Header';
import Component from '../../components/PestañaEmergente/PestañaEmergente'; // El componente que deseas mostrar
import './conductor.css';
import './conductorModal.css'

const ConductorInicio = () => {
    // Estado para manejar la visibilidad del componente
    const [mostrarComponent, setMostrarComponent] = useState(false);

    // Función para manejar el clic del botón
    const handleGenerarListaClick = () => {
        setMostrarComponent(true); // Cambia el estado a true para mostrar el componente
    };

    // Función para cerrar el modal
    const handleCloseModal = () => {
        setMostrarComponent(false); // Cambia el estado a false para ocultar el componente
    };

    return (
        <div className='page-container'>
            <Header rol='Gerente' />
            <div className="wrapper-mensaje-bienvenida">
                <h1>Hola, Amin</h1>
            </div>
            <div className='container-conductor'>
                <p><b>Tenes un recorrido asignado</b></p>

                <div className='container-recorrido-conductor'>
                    <div className='descripction-recorrido'>
                        <img src="../../Imagenes/conductorInicio.svg" alt="Conductor Inicio" />
                        <ul>
                            <li>Recorrido: #012</li>
                            <li>Vehículo: #c4m1on45</li>
                            <li>paquetes a entregar: 20</li>
                            <li>KM a recorrer: 80</li>
                            <li>Horario estimado: 4hs</li>
                            <a href="#">Ver información</a>
                        </ul>
                    </div>

                    <button id="generarLista" className='button-conductor' onClick={handleGenerarListaClick}>
                        Cargar Paquetes
                    </button>
                </div>
            </div>

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
