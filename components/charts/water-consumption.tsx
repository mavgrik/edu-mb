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
//FIXME: Responsive
//FIXME: Labels

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
  industria: {
    label: 'Industria',
    color: 'var(--color-chart-2)',
  },
  civile: {
    label: 'Civile',
    color: 'var(--color-chart-3)',
  },
} satisfies ChartConfig;

export function ConsumiIdriciChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
        <Pie
          data={charData}
          dataKey="value"
          nameKey="name"
          fontSize={16}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        />
        <ChartLegend content={<ChartLegendContent />} />
      </PieChart>
    </ChartContainer>
  );
}
