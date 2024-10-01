import Header from '../../components/HeaderComponent/Header';
import './conductor.css'


const CoductorRecorrido = () => {
    return <div className='page-container'>
        <Header rol='Gerente' />
        <div className="wrapper-mensaje-bienvenida">
            <h1>Tus recorridos</h1>
        </div>
        <div className='container-conductor'>
            <div>
                <button className='button-conductor'>Reporte Semanal</button>
                <button className='button-conductor'>Reporte Mensual</button>
            </div>
            <br />
            <br />
            <p><b>Reporte de rutas</b></p>

            <div className='container-recorrido-conductor'>


                <div className='recorrido-detalle'>
                    <ul>
                        <li>Recorrido: #012</li>
                        <li>Fecha: 23/08/2024</li>
                    </ul>
                    <a href="#">ver detalle</a>
                </div>
                <div className='recorrido-detalle'>
                    <ul>
                        <li>Recorrido: #059</li>
                        <li>Fecha: 20/08/2024</li>
                    </ul>
                    <a href="#">ver detalle</a>
                </div>

            </div>
        </div>
    </div>

}

export default CoductorRecorrido;