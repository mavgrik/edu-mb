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
//FIXME: Tooltip space/design

const chartData = [
  { mese: 'Gen', '2021': 45, '2022': 30, '2023': 25 },
  { mese: 'Feb', '2021': 50, '2022': 35, '2023': 30 },
  { mese: 'Mar', '2021': 65, '2022': 45, '2023': 40 },
  { mese: 'Apr', '2021': 70, '2022': 60, '2023': 55 },
  { mese: 'Mag', '2021': 75, '2022': 65, '2023': 60 },
  { mese: 'Giu', '2021': 60, '2022': 40, '2023': 35 },
  { mese: 'Lug', '2021': 45, '2022': 25, '2023': 20 },
  { mese: 'Ago', '2021': 40, '2022': 20, '2023': 15 },
  { mese: 'Set', '2021': 55, '2022': 45, '2023': 40 },
  { mese: 'Ott', '2021': 70, '2022': 60, '2023': 55 },
  { mese: 'Nov', '2021': 65, '2022': 55, '2023': 50 },
  { mese: 'Dic', '2021': 55, '2022': 40, '2023': 35 },
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
    <ChartContainer config={chartConfig} className="h-full max-h-128 w-full">
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mese" />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="2021" fill="var(--color-2021)" />
        <Bar dataKey="2022" fill="var(--color-2022)" />
        <Bar dataKey="2023" fill="var(--color-2023)" />
      </BarChart>
    </ChartContainer>
  );
}
