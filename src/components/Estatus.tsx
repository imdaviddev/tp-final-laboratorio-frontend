import TextField from '@mui/material/TextField';
import ButtonConsultarEstado from '../components/Button';


export default function Estatus() {
    return (
        <div className="container-img-status">
            <div className='container-status-group'>
                <div className='container-status' color="secondary">
                    <TextField
                        id="outlined-textarea"
                        label="Ingresa tu codigo de seguimiento"
                        placeholder="TX 00000485454878445"
                        multiline
                    />
                </div>
                <ButtonConsultarEstado />
            </div>
        </div>
    )
}