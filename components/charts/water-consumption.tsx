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

//TODO: Replace with real data
//TODO: Fix design
//FIXME: Tooltip space/design

const charData = [
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
