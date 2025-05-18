'use client';

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

//TODO: Add time selector
//FIXME: Tooltip space

const chartData = [
  { mese: 'Gennaio 2017', portata: 883 },
  { mese: 'Febbraio 2017', portata: 1059 },
  { mese: 'Marzo 2017', portata: 1007 },
  { mese: 'Aprile 2017', portata: 927 },
  { mese: 'Maggio 2017', portata: 1185 },
  { mese: 'Giugno 2017', portata: 730 },
  { mese: 'Luglio 2017', portata: 682 },
  { mese: 'Agosto 2017', portata: 544 },
  { mese: 'Settembre 2017', portata: 961 },
  { mese: 'Ottobre 2017', portata: 742 },
  { mese: 'Novembre 2017', portata: 758 },
  { mese: 'Dicembre 2017', portata: 902 },

  { mese: 'Gennaio 2018', portata: 992 },
  { mese: 'Febbraio 2018', portata: 950 },
  { mese: 'Marzo 2018', portata: 1654 },
  { mese: 'Aprile 2018', portata: 1823 },
  { mese: 'Maggio 2018', portata: 2506 },
  { mese: 'Giugno 2018', portata: 2092 },
  { mese: 'Luglio 2018', portata: 905 },
  { mese: 'Agosto 2018', portata: 738 },
  { mese: 'Settembre 2018', portata: 969 },
  { mese: 'Ottobre 2018', portata: 971 },
  { mese: 'Novembre 2018', portata: 3409 },
  { mese: 'Dicembre 2018', portata: 1217 },

  { mese: 'Gennaio 2022', portata: 852 },
  { mese: 'Febbraio 2022', portata: 674 },
  { mese: 'Marzo 2022', portata: 533 },
  { mese: 'Aprile 2022', portata: 534 },
  { mese: 'Maggio 2022', portata: 605 },
  { mese: 'Giugno 2022', portata: 257 },
  { mese: 'Luglio 2022', portata: 160 },
  { mese: 'Agosto 2022', portata: 282 },
  { mese: 'Settembre 2022', portata: 465 },
  { mese: 'Ottobre 2022', portata: 578 },
  { mese: 'Novembre 2022', portata: 796 },
  { mese: 'Dicembre 2022', portata: 872 },

  { mese: 'Gennaio 2023', portata: 807 },
  { mese: 'Febbraio 2023', portata: 570 },
  { mese: 'Marzo 2023', portata: 570 },
  { mese: 'Aprile 2023', portata: 382 },
  { mese: 'Maggio 2023', portata: 1350 },
  { mese: 'Giugno 2023', portata: 1074 },
  { mese: 'Luglio 2023', portata: 509 },
  { mese: 'Agosto 2023', portata: 447 },
  { mese: 'Settembre 2023', portata: 1133 },
  { mese: 'Ottobre 2023', portata: 1313 },
  { mese: 'Novembre 2023', portata: 2280 },
  { mese: 'Dicembre 2023', portata: 1220 },
];

const chartConfig = {
  portata: {
    label: 'Portata (m³/s)',
    color: 'var(--color-chart-1)',
  },
} satisfies ChartConfig;

export function PortataPoChart() {
  return (
    <ChartContainer config={chartConfig} className="h-full min-h-64 w-full">
      <AreaChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis tickMargin={10} dataKey="mese" tickFormatter={(value) => value.split(' ')[0].slice(0, 3)} />
        <YAxis tickMargin={10} width={50} />
        <ChartTooltip content={<ChartTooltipContent hideIndicator />} />
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
