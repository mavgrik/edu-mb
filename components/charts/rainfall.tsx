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

const chartData = [
  { mese: 'Gennaio', '2017': 17, '2018': 29, '2022': 40, '2023': 90 },
  { mese: 'Febbraio', '2017': 88, '2018': 138, '2022': 29, '2023': 28 },
  { mese: 'Marzo', '2017': 27, '2018': 135, '2022': 33, '2023': 50 },
  { mese: 'Aprile', '2017': 42, '2018': 41, '2022': 73, '2023': 27 },
  { mese: 'Maggio', '2017': 69, '2018': 103, '2022': 64, '2023': 151 },
  { mese: 'Giugno', '2017': 44, '2018': 62, '2022': 22, '2023': 75 },
  { mese: 'Luglio', '2017': 17, '2018': 51, '2022': 22, '2023': 28 },
  { mese: 'Agosto', '2017': 16, '2018': 53, '2022': 96, '2023': 51 },
  { mese: 'Settembre', '2017': 105, '2018': 40, '2022': 73, '2023': 31 },
  { mese: 'Ottobre', '2017': 13, '2018': 119, '2022': 7, '2023': 127 },
  { mese: 'Novembre', '2017': 159, '2018': 102, '2022': 107, '2023': 87 },
  { mese: 'Dicembre', '2017': 96, '2018': 28, '2022': 111, '2023': 46 },
];

const chartConfig = {
  '2017': {
    label: '2017',
    color: 'var(--color-chart-1)',
  },
  '2018': {
    label: '2018',
    color: 'var(--color-chart-2)',
  },
  '2022': {
    label: '2022',
    color: 'var(--color-chart-3)',
  },
  '2023': {
    label: '2023',
    color: 'var(--color-chart-4)',
  },
} satisfies ChartConfig;

export function PrecipitazioniChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full max-h-128 min-h-64 w-full">
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mese" tickFormatter={(value) => value.slice(0, 3)} tickMargin={10} />
        <YAxis tickMargin={10} width={40} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="2017" fill="var(--color-2017)" radius={3} />
        <Bar dataKey="2018" fill="var(--color-2018)" radius={3} />
        <Bar dataKey="2022" fill="var(--color-2022)" radius={3} />
        <Bar dataKey="2023" fill="var(--color-2023)" radius={3} />
      </BarChart>
    </ChartContainer>
  );
}
