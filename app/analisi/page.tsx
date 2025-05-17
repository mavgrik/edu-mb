import { Home } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import PortataPoChart from '@/components/flow_rate_po';
import PrecipitazioniChart from '@/components/rainfall';
import { Button } from '@/components/ui/button';
import ConsumiIdriciChart from '@/components/water_consumption_graph';
import TimeLapse from '@/public/images/timelapse.jpeg'; // Update the path and extension as needed

//TODO: Make the page

/*
  Grafico a torta:
    Ripartizione settoriale dei consumi idrici (agricoltura vs industria vs civile) in Pianura Padana
    se disponibili dati regionali ARPAE/ISPRA in formato CSV.
      https://www.mdpi.com/2073-445X/11/1/35

  Grafico ad area:
    Portata del Po nel tempo

  Grafico a barre:
    Precipitazioni medie mensili negli anni
*/

export default function Analisi() {
  return (
    <div className="space-y-6">
      <div className="bg-muted rounded-lg border p-6">
        <h2 className="mb-4">Precipitazioni medie mensili negli anni</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget nisi enim. Ut sodales urna vitae urna
          mollis, non pretium justo sodales. Nulla ultricies, lorem quis aliquam eleifend, nunc leo dignissim orci, ut
          faucibus ex elit efficitur mauris.
        </p>
        <div className="mb-4">
          <PrecipitazioniChart />
        </div>
        <div className="mb-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget nisi enim. Ut sodales urna vitae
            urna mollis, non pretium justo sodales. Nulla ultricies, lorem quis aliquam eleifend, nunc leo dignissim
            orci, ut faucibus ex elit efficitur mauris. Vivamus tincidunt lacus ac dui eleifend, ut dignissim orci
            porttitor. Vivamus consectetur interdum congue. Vivamus nec ligula molestie, elementum lacus nec,
            scelerisque dolor. Sed molestie ipsum et eleifend blandit. In laoreet diam nec dapibus tristique.
            Pellentesque imperdiet ipsum mi, quis lobortis ante malesuada eu. Integer malesuada nunc ac purus varius,
            quis varius sem posuere. Maecenas commodo pulvinar vulputate. Morbi magna mauris, sagittis vel commodo eu,
            euismod vitae urna. Phasellus nec velit vel ipsum imperdiet rutrum et in libero. Nulla porttitor vitae mi ut
            accumsan. Aenean in luctus urna, quis lobortis odio. Cras viverra facilisis rutrum.
          </p>
        </div>
      </div>

      <div className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 flex w-full flex-col-reverse items-stretch space-y-6 space-y-reverse space-x-0">
        <div className="bg-muted ftl:w-1/2 flex w-full items-center justify-center overflow-hidden rounded-lg border p-6">
          <PortataPoChart />
        </div>

        <div className="bg-muted ftl:w-1/2 ftl:p-8 w-full rounded-lg border p-6">
          <h2 className="mb-4">In che ambiti viene impiegata maggiormente l&apos;acqua?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget nisi enim. Ut sodales urna vitae
            urna mollis, non pretium justo sodales. Nulla ultricies, lorem quis aliquam eleifend, nunc leo dignissim
            orci, ut faucibus ex elit efficitur mauris. Vivamus tincidunt lacus ac dui eleifend, ut dignissim orci
            porttitor. Vivamus consectetur interdum congue. Vivamus nec ligula molestie, elementum lacus nec,
            scelerisque dolor. Sed molestie ipsum et eleifend blandit. In laoreet diam nec dapibus tristique.
            Pellentesque imperdiet ipsum mi, quis lobortis ante malesuada eu. Integer malesuada nunc ac purus varius,
            quis varius sem posuere. Maecenas commodo pulvinar vulputate. Morbi magna mauris, sagittis vel commodo eu,
            euismod vitae urna. Phasellus nec velit vel ipsum imperdiet rutrum et in libero. Nulla porttitor vitae mi ut
            accumsan. Aenean in luctus urna, quis lobortis odio. Cras viverra facilisis rutrum.
          </p>
        </div>
      </div>

      <div className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 flex w-full flex-col-reverse items-stretch space-y-6 space-y-reverse space-x-0">
        <div className="bg-muted ftl:w-1/2 ftl:p-8 w-full rounded-lg border p-6">
          <h2 className="mb-4">In che ambiti viene impiegata maggiormente l&apos;acqua?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget nisi enim. Ut sodales urna vitae
            urna mollis, non pretium justo sodales. Nulla ultricies, lorem quis aliquam eleifend, nunc leo dignissim
            orci, ut faucibus ex elit efficitur mauris. Vivamus tincidunt lacus ac dui eleifend, ut dignissim orci
            porttitor. Vivamus consectetur interdum congue. Vivamus nec ligula molestie, elementum lacus nec,
            scelerisque dolor. Sed molestie ipsum et eleifend blandit. In laoreet diam nec dapibus tristique.
            Pellentesque imperdiet ipsum mi, quis lobortis ante malesuada eu. Integer malesuada nunc ac purus varius,
            quis varius sem posuere. Maecenas commodo pulvinar vulputate. Morbi magna mauris, sagittis vel commodo eu,
            euismod vitae urna. Phasellus nec velit vel ipsum imperdiet rutrum et in libero. Nulla porttitor vitae mi ut
            accumsan. Aenean in luctus urna, quis lobortis odio. Cras viverra facilisis rutrum.
          </p>
        </div>

        <div className="bg-muted ftl:w-1/2 flex w-full items-center justify-center overflow-hidden rounded-lg border p-6">
          <ConsumiIdriciChart />
        </div>
      </div>
    </div>
  );
}
