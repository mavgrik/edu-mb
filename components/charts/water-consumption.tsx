'use client';

import { Pie, PieChart } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

//FIXME: ChartLegend

const charData = [
  { name: 'Agricoltura', value: 60, fill: 'var(--color-agricoltura)' },
  { name: 'Civile', value: 25, fill: 'var(--color-civile)' },
  { name: 'Industriale', value: 15, fill: 'var(--color-industria)' },
];

const chartConfig = {
  agricoltura: {
    label: 'Agricoltura',
    color: 'var(--color-chart-1)',
  },
  civile: {
    label: 'Civile',
    color: 'var(--color-chart-2)',
  },
  industria: {
    label: 'Industria',
    color: 'var(--color-chart-3)',
  },
} satisfies ChartConfig;

export function ConsumiIdriciChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Pie data={charData} dataKey="value" />
      </PieChart>
    </ChartContainer>
  );
}
