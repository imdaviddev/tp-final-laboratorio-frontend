import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function BasicBars(props) {
  let response = [];
  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const semanas = ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4']

  if (props.esMensual) {
    response = meses;
  }
  else {
    response = semanas
  }

  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: response }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }, { data: [10, 15, 6] }]}
      width={500}
      height={300}
    />
  )
}
