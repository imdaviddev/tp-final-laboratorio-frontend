import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BasicPie from './BasicPie';
import BasicBars from './BasicBars';
import BasicLineChart from './BasicLineChart';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Gastos" {...a11yProps(0)} />
          <Tab label="Recorridos" {...a11yProps(1)} />
          <Tab label="Satisfaccion del cliente" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className='container-reports'>
          <div className='graph-container'>
            <BasicPie />
          </div>
          <div className='button-container'>
            <button> Ver Gastos Semanales</button>
            <button> Ver Gastos Mensuales</button>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className='container-reports'>
          <div className='graph-container'>
            <BasicBars />
          </div>
          <div className='button-container'>
            <button> Ver recorridos Semanales</button>
            <button> Ver recorridos Mensuales</button>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className='container-reports'>
          <div className='graph-container'>
            <BasicLineChart />
          </div>
          <div className='button-container'>
            <button> Ver puntuacion Semanal</button>
            <button> Ver puntuacion Mensual</button>
          </div>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
