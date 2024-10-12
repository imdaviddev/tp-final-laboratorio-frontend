import { useState } from 'react';
import { TituloPage } from '../ComponentsUI';
import { styled } from 'styled-components';
import { ContainerGeneral } from '../../ComponentsUI';

const List = styled.ul`
  display: flex;
  flex-direction: column;
`
const Item = styled.li`
  flex: 1;

`

const SupervisionHomePage = () => {
  const [recorrido, setRecorrido] = useState(null);
  const [verRecorrido, setVerRecorrido] = useState(false);

  const handlerVerRecorrido = () => {
    setVerRecorrido(verRecorrido => !verRecorrido)
  }

  return <>
    <TituloPage>
        Recorridos
    </TituloPage> 

    <ContainerGeneral>
      <List>
        <Item>

        </Item>
      </List>
    </ContainerGeneral>
     


  </>
}

export default SupervisionHomePage

