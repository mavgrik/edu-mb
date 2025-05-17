'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

//TODO: Replace with real data
//TODO: Add time selector
//FIXME: Tooltip space

const chartData = [
  { mese: 'Gennaio 2020', portata: 1800 },
  { mese: 'Aprile 2020', portata: 2100 },
  { mese: 'Luglio 2020', portata: 1200 },
  { mese: 'Ottobre 2020', portata: 1500 },
  { mese: 'Gennaio 2021', portata: 1700 },
  { mese: 'Aprile 2021', portata: 1900 },
  { mese: 'Luglio 2021', portata: 900 },
  { mese: 'Ottobre 2021', portata: 1300 },
  { mese: 'Gennaio 2022', portata: 1400 },
  { mese: 'Aprile 2022', portata: 1600 },
  { mese: 'Luglio 2022', portata: 500 },
  { mese: 'Ottobre 2022', portata: 1100 },
  { mese: 'Gennaio 2023', portata: 1300 },
  { mese: 'Aprile 2023', portata: 1500 },
  { mese: 'Luglio 2023', portata: 600 },
  { mese: 'Ottobre 2023', portata: 1000 },
];

const chartConfig = {
  portata: {
    label: 'Portata (m³/s)',
    color: 'var(--color-chart-1)',
  },
} satisfies ChartConfig;

export function PortataPoChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full min-h-64">
      <AreaChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickMargin={10} dataKey="mese" tickFormatter={(value) => value.split(' ')[0].slice(0, 3)} />
        <YAxis tickMargin={10} width={50}/>
        <ChartTooltip content={<ChartTooltipContent hideIndicator/>} />
        <Area
          type="monotone"
          dataKey="portata"
          stroke="var(--color-portata)"
          fill="var(--color-portata)"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ChartContainer>
  );
}
