import Header from '../../components/HeaderComponent/Header';
import './conductor.css'


const ConductorInicio = () => {
    return <div className='page-container'>
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

                <button className='button-conductor'>Cargar Paquetes</button>

            </div>
        </div>
    </div>

}

export default ConductorInicio;