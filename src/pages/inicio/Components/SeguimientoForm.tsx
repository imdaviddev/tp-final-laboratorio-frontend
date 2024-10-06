import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { ContainerStatus,StatusTextField, ButtonStatus } from "..";

export default function SeguimientoForm() {
    return (
        <ContainerStatus>
      <StatusTextField>
        <TextField
          id="outlined-textarea"
          label="Ingresa tu codigo de seguimiento"
          placeholder="TX 00000485454878445"
          multiline
        />
      </StatusTextField>
  
      <ButtonStatus>
        <Button
          variant="contained"
          sx={{
            backgroundColor: 'white',
            color: 'red',
            '&:hover': {
              backgroundColor: '#f5f5f5',
            },
          }}
        >
          Consultar Estado
        </Button>
      </ButtonStatus>
    </ContainerStatus>
    )
}
    
  