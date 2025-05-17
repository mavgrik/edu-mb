'use client';

import { Legend, Pie, PieChart } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
  { name: 'Agricoltura', value: 70, fill: 'var(--color-agricoltura)' },
  { name: 'Industria', value: 15, fill: 'var(--color-industria)' },
  { name: 'Civile', value: 15, fill: 'var(--color-civile)' },
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

export default function ConsumiIdriciChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <PieChart>
        <ChartTooltip content={<ChartTooltipContent />} />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
        />
        <Legend layout="horizontal" verticalAlign="bottom" align="center" />
      </PieChart>
    </ChartContainer>
  );
}
