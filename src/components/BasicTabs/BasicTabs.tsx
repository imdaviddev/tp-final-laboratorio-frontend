import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicPie from '../Graphs/BasicPie';
import BasicBars from '../Graphs/BasicBars';
import ContainerGrafico from '../ContainerGrafico';
import { Boton } from '../../pages/ComponentsUI/Botones';
import { ButtonGroup, Container, Reportes } from '../../pages/ComponentsUI';
import { tabStyles, commonTabSx } from '../../constants/styles';
import a11yProps from './a11yProps'
import CustomTabPanel from './CustomTabPanel';

export default function BasicTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
          TabIndicatorProps={{
            style: { backgroundColor: tabStyles.indicatorColor },
          }}
        >
          <Tab label={props.subdesc} {...a11yProps(0)} sx={commonTabSx} />
          <Tab label={props.subdesc2do} {...a11yProps(1)} sx={commonTabSx} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Reportes>
          <ContainerGrafico tamanio="350" grafico={<BasicPie />}/>
        </Reportes>
        <Container>
          <ButtonGroup>
            <Boton> {props.descripcionBoton} Semanales</Boton>
            <Boton> {props.descripcionBoton} Mensuales</Boton>
          </ButtonGroup>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Reportes>
        <ContainerGrafico tamanio="350" grafico={<BasicBars />}/>
        </Reportes>
        <Container>
          <ButtonGroup>
            <Boton> {props.descripcionBoton2do} Semanales</Boton>
            <Boton> {props.descripcionBoton2do} Mensuales</Boton>
          </ButtonGroup>
        </Container>
      </CustomTabPanel>
    </Box>
  );
}
