import { useState } from "react";
import { Container, FilaGeneral, TituloPage } from "../ComponentsUI"
import { Boton } from "../ComponentsUI/Botones";  

function AdministracionReportes() {
  const [mostrar1, setMostrar1] = useState(false);
  const [mostrar2, setMostrar2] = useState(false);

  const handleClick = (n: number) => {
    setMostrar1(n == 1);
    setMostrar2(n == 2);
  }

  return <>
    <TituloPage>
        Reportes    
    </TituloPage>    
    <FilaGeneral style={{justifyContent: 'center', gap: '0.7rem '}}>
        <Boton onClick={() => handleClick(1)}>
            Historial de Compras
        </Boton>
        <Boton onClick={()=>handleClick(2)}>
            Historial de Uso
        </Boton>
    </FilaGeneral>
    <Container>
        {mostrar1 ? 
            <p>Mostrar el Grafico 1</p> : null
        }

        {mostrar2 ? 
            <p>Mostrar el Grafico 2</p> : null
        }
    </Container>
  
  </>
}

export default AdministracionReportes