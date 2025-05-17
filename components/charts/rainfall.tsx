'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

//TODO: Replace with real data

const chartData = [
  { mese: 'Gennaio', '2021': 45, '2022': 30, '2023': 25 },
  { mese: 'Febbraio', '2021': 50, '2022': 35, '2023': 30 },
  { mese: 'Marzo', '2021': 65, '2022': 45, '2023': 40 },
  { mese: 'Aprile', '2021': 70, '2022': 60, '2023': 55 },
  { mese: 'Maggio', '2021': 75, '2022': 65, '2023': 60 },
  { mese: 'Giugno', '2021': 60, '2022': 40, '2023': 35 },
  { mese: 'Luglio', '2021': 45, '2022': 25, '2023': 20 },
  { mese: 'Agosto', '2021': 40, '2022': 20, '2023': 15 },
  { mese: 'Settembre', '2021': 55, '2022': 45, '2023': 40 },
  { mese: 'Ottobre', '2021': 70, '2022': 60, '2023': 55 },
  { mese: 'Novembre', '2021': 65, '2022': 55, '2023': 50 },
  { mese: 'Dicembre', '2021': 55, '2022': 40, '2023': 35 },
];

const chartConfig = {
  '2021': {
    label: '2021',
    color: 'var(--color-chart-1)',
  },
  '2022': {
    label: '2022',
    color: 'var(--color-chart-2)',
  },
  '2023': {
    label: '2023',
    color: 'var(--color-chart-3)',
  },
} satisfies ChartConfig;

export function PrecipitazioniChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full max-h-128 w-full min-h-64">
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mese" tickFormatter={(value) => value.slice(0, 3)} tickMargin={10}/>
        <YAxis tickMargin={10} width={30}/>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="2021" fill="var(--color-2021)" radius={3}/>
        <Bar dataKey="2022" fill="var(--color-2022)" radius={3}/>
        <Bar dataKey="2023" fill="var(--color-2023)" radius={3}/>
      </BarChart>
    </ChartContainer>
  );
}
