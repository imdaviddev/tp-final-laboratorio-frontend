import Header from '../../components/HeaderComponent/Header';
import { Button, RecorridoDetalle } from '../Conductor/ComponentsUI/index';
import './conductor.css'


const CoductorRecorrido = () => {
    return <div className='page-container'>
        <Header rol='Conductor' />
        <div className="wrapper-mensaje-bienvenida">
            <h1>Tus recorridos</h1>
        </div>
        <div className='container-conductor'>
            <div>
                <Button>Reporte Semanal</Button>
                <Button>Reporte Semanal</Button>
            </div>
            <br />
            <br />
            <p><b>Reporte de rutas</b></p>

            <div className='container-recorrido-conductor'>

                <RecorridoDetalle>
                    <ul>
                        <li>Recorrido: #012</li>
                        <li>Fecha: 23/08/2024</li>
                    </ul>
                    <a href="#">ver detalle</a>
                </RecorridoDetalle>
                <RecorridoDetalle>
                    <ul>
                        <li>Recorrido: #059</li>
                        <li>Fecha: 20/08/2024</li>
                    </ul>
                    <a href="#">ver detalle</a>
                </RecorridoDetalle>

            </div>
        </div>
    </div>

}

export default CoductorRecorrido;