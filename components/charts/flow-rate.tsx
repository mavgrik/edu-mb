'use client';

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const data = [
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

export default function PortataPoChart() {
  return (
    <ChartContainer
      config={{
        portata: {
          label: 'Portata (m³/s)',
          color: 'hsl(var(--chart-1))',
        },
      }}
      className="h-full w-full"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mese" tickFormatter={(value) => value.split(' ')[0]} />
          <YAxis label={{ value: 'Portata (m³/s)', angle: -90, position: 'insideLeft' }} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="portata"
            stroke="var(--color-portata)"
            fill="var(--color-portata)"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
