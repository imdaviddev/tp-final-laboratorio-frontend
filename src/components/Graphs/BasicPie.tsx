import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
            { id: 3, value: 5, label: 'series D' },
            { id: 4, value: 5, label: 'series E' },
            { id: 5, value: 25, label: 'series F' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}



