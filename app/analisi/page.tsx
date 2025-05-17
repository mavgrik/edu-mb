import { CloudRain, Users, Waves } from 'lucide-react';
import Link from 'next/link';
import { PortataPoChart } from '@/components/charts/flow-rate';
import { PrecipitazioniChart } from '@/components/charts/rainfall';
import { ConsumiIdriciChart } from '@/components/charts/water-consumption';
import { Separator } from '@/components/ui/separator';

//TODO: Add the text content to the charts

export default function Analisi() {
  return (
    <div className="flex flex-col items-start justify-start space-y-6">
      <div className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 flex w-full flex-col items-start justify-between space-y-6 space-x-0">
        <div className="ftl:w-3/5 flex flex-col items-start justify-start">
          <h1 className="mb-4 text-3xl">Analisi situazione climatica</h1>
          <p className="text-muted-foreground">
            Negli ultimi anni la Pianura Padana ha vissuto una grave siccità, con il Po ai minimi storici per scarse
            piogge e alte temperature. Questo ha colpito agricoltura, acqua, energia e ambiente, evidenziando la
            necessità di strategie di gestione sostenibile delle risorse idriche.
          </p>
        </div>

        <div className="ftl:w-2/5 bg-muted flex w-full flex-col items-start justify-between rounded-lg border p-3">
          <h2 className="text-lg">Indice</h2>
          <Separator className="mt-2 mb-4" />
          <div className="flex w-full flex-row flex-wrap items-start justify-around space-y-2 space-x-6">
            <Link
              href="#precipitazioni"
              className="hover:text-primary flex items-center text-sm transition-colors hover:underline"
            >
              <CloudRain className="mr-2 h-4 w-4" />
              Precipitazioni mensili
            </Link>
            <Link
              href="#portata"
              className="hover:text-primary flex items-center text-sm transition-colors hover:underline"
            >
              <Waves className="mr-2 h-4 w-4" />
              Portata del Po
            </Link>
            <Link
              href="#utilizzi"
              className="hover:text-primary flex items-center text-sm transition-colors hover:underline"
            >
              <Users className="mr-2 h-4 w-4" />
              Utilizzi dell&apos;acqua
            </Link>
          </div>
        </div>
      </div>

      <div
        id="precipitazioni"
        className="bg-muted flex w-full flex-col items-start justify-start space-y-4 rounded-lg border p-6"
      >
        <h2 className="text-2xl">Precipitazioni medie mensili negli anni</h2>
        <PrecipitazioniChart />
        <div className="bg-card rounded-lg border p-4 transition-transform hover:scale-102">
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

      <div
        id="portata"
        className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 flex w-full flex-col-reverse items-stretch space-y-6 space-y-reverse space-x-0"
      >
        <div className="bg-muted ftl:w-2/5 flex w-full items-center justify-center rounded-lg border p-6">
          <PortataPoChart />
        </div>

        <div className="bg-muted ftl:w-3/5 ftl:p-8 w-full rounded-lg border p-6">
          <h2 className="mb-4 text-2xl">Portata del Po nel tempo</h2>
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

      <div
        id="utilizzi"
        className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 space-y flex w-full flex-col items-stretch space-y-6 space-x-0"
      >
        <div className="bg-muted ftl:w-3/5 ftl:p-8 w-full rounded-lg border p-6">
          <h2 className="mb-4 text-2xl">In che ambiti viene impiegata maggiormente l&apos;acqua?</h2>
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

        <div className="bg-muted ftl:w-2/5 flex w-full items-center justify-center rounded-lg border p-6">
          <ConsumiIdriciChart />
        </div>
      </div>
    </div>
  );
}
