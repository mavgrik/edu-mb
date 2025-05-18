'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { mese: 'Gennaio', '2017': 883, '2018': 992, '2022': 852, '2023': 807 },
  { mese: 'Febbraio', '2017': 1059, '2018': 950, '2022': 674, '2023': 570 },
  { mese: 'Marzo', '2017': 1007, '2018': 1654, '2022': 533, '2023': 570 },
  { mese: 'Aprile', '2017': 927, '2018': 1823, '2022': 534, '2023': 382 },
  { mese: 'Maggio', '2017': 1185, '2018': 2506, '2022': 605, '2023': 1350 },
  { mese: 'Giugno', '2017': 730, '2018': 2092, '2022': 257, '2023': 1074 },
  { mese: 'Luglio', '2017': 682, '2018': 905, '2022': 160, '2023': 509 },
  { mese: 'Agosto', '2017': 544, '2018': 738, '2022': 282, '2023': 447 },
  { mese: 'Settembre', '2017': 961, '2018': 969, '2022': 465, '2023': 1133 },
  { mese: 'Ottobre', '2017': 742, '2018': 971, '2022': 578, '2023': 1313 },
  { mese: 'Novembre', '2017': 758, '2018': 3409, '2022': 796, '2023': 2280 },
  { mese: 'Dicembre', '2017': 902, '2018': 1217, '2022': 872, '2023': 1220 },
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

export function PortataPoChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full min-h-64 w-full">
      <AreaChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickMargin={10} dataKey="mese" tickFormatter={(value) => value.split(' ')[0].slice(0, 3)} />
        <YAxis tickMargin={10} width={50} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area type="natural" dataKey="2017" stroke="var(--color-2017)" fill="var(--color-2017)" fillOpacity={0.3} />
        <Area type="natural" dataKey="2018" stroke="var(--color-2018)" fill="var(--color-2018)" fillOpacity={0.3} />
        <Area type="natural" dataKey="2022" stroke="var(--color-2022)" fill="var(--color-2022)" fillOpacity={0.3} />
        <Area type="natural" dataKey="2023" stroke="var(--color-2023)" fill="var(--color-2023)" fillOpacity={0.3} />
      </AreaChart>
    </ChartContainer>
  );
}
