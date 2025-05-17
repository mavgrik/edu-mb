'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

//TODO: Replace with real data
//TODO: Add time selector
//FIXME: Tooltip space/design

const chartData = [
  { mese: 'Gen 2020', portata: 1800 },
  { mese: 'Apr 2020', portata: 2100 },
  { mese: 'Lug 2020', portata: 1200 },
  { mese: 'Ott 2020', portata: 1500 },
  { mese: 'Gen 2021', portata: 1700 },
  { mese: 'Apr 2021', portata: 1900 },
  { mese: 'Lug 2021', portata: 900 },
  { mese: 'Ott 2021', portata: 1300 },
  { mese: 'Gen 2022', portata: 1400 },
  { mese: 'Apr 2022', portata: 1600 },
  { mese: 'Lug 2022', portata: 500 },
  { mese: 'Ott 2022', portata: 1100 },
  { mese: 'Gen 2023', portata: 1300 },
  { mese: 'Apr 2023', portata: 1500 },
  { mese: 'Lug 2023', portata: 600 },
  { mese: 'Ott 2023', portata: 1000 },
];

const chartConfig = {
  portata: {
    label: 'Portata (m³/s)',
    color: 'var(--color-chart-1)',
  },
} satisfies ChartConfig;

export function PortataPoChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full w-full">
      <AreaChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="mese" tickFormatter={(value) => value.split(' ')[0]} />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
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
