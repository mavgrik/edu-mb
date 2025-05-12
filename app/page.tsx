import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Hero from '@/public/images/hero.jpeg';
import Mappa from '@/public/images/mappa.png';
import TimeLapse from '@/public/images/timelapse.png';

//TODO: Caricare le immagini

export default function Home() {
  return (
    <div className="space-y-6">
      <AspectRatio ratio={21 / 9} className="h-auto w-full">
        <Image src={Hero} alt="Hero Image" className="rounded-lg object-cover" priority />
      </AspectRatio>

      <div className="bg-muted rounded-lg p-6">
        <div className="mb-4">
          <p className="ftl:columns-2 columns-1 gap-4 text-pretty">
            Negli ultimi tre anni, la Pianura Padana ha vissuto una delle peggiori crisi idriche mai registrate. Il
            fiume Po, il più lungo d&apos;Italia e risorsa idrica fondamentale per il Nord del Paese, ha toccato livelli
            di portata minimi storici, in particolare durante l&apos;estate 2022 e nuovamente nel 2023. Le cause
            principali sono da ricercarsi in precipitazioni scarse, inverni con accumuli nevosi ridotti e temperature
            superiori alla media, che hanno accelerato i processi di evaporazione. L&apos;impatto della siccità si è
            riflesso gravemente sull&apos;agricoltura, sull&apos;approvvigionamento idrico, sulla produzione di energia
            idroelettrica e sugli ecosistemi fluviali. La situazione del Po è diventata emblematica delle vulnerabilità
            idriche italiane ed europee in un contesto di cambiamento climatico. I dati satellitari del programma
            Copernicus, in particolare quelli provenienti dai satelliti Sentinel-2, hanno documentato in dettaglio il
            progressivo prosciugamento del fiume, la riduzione della vegetazione e l&apos;inaridimento dei suoli
            agricoli circostanti. Attraverso queste immagini è possibile osservare l&apos;evoluzione della siccità in
            modo oggettivo e aggiornato. Monitorare fenomeni come quello del Po non è solo utile dal punto di vista
            scientifico, ma anche essenziale per sensibilizzare l&apos;opinione pubblica e supportare strategie di
            adattamento e gestione sostenibile della risorsa idrica.
          </p>
        </div>
        <div className="flex justify-end">
          <Button variant="link" className="border-input bg-background rounded-lg border">
            <Link href="/analisi" className="text-sm">
              Continua a leggere...
            </Link>
          </Button>
        </div>
      </div>

      <div className="ftl:flex-row-reverse ftl:space-x-6 ftl:space-x-reverse ftl:space-y-0 flex w-full flex-col-reverse items-stretch space-y-6 space-y-reverse space-x-0">
        <div className="bg-muted ftl:w-1/3 flex w-full flex-col rounded-lg p-6">
          <h2 className="mb-4">Mappa Interattiva</h2>
          <p>
            Esplora la Pianura Padana e il corso del fiume Po con una mappa interattiva dettagliata e intuitiva. Potrai
            visualizzare le principali città, le aree agricole, i parchi fluviali e le trasformazioni idrografiche lungo
            tutto il bacino.
          </p>
          <div className="mt-4 flex justify-end">
            <Button variant="link" className="border-input bg-background rounded-lg border">
              <Link href="/mappe/interattiva" className="text-sm">
                Continua a leggere...
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-muted ftl:w-2/3 flex w-full items-center justify-center rounded-lg p-6">
          <Image src={Mappa} alt="Mappa Image" className="h-auto w-auto rounded-lg object-cover" priority />
        </div>
      </div>

      <div className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 flex w-full flex-col-reverse items-stretch space-y-6 space-y-reverse space-x-0">
        <div className="bg-muted ftl:w-1/3 ftl:p-8 w-full rounded-lg p-6">
          <h2 className="mb-4">Timelapse</h2>
          <p>
            Osserva i cambiamenti della Pianura Padana e del Po nel tempo con il nostro timelapse interattivo. Dalle
            trasformazioni del paesaggio agricolo alle variazioni del corso del fiume, ogni fotogramma racconta
            l’evoluzione di un territorio vivo.
          </p>
          <div className="mt-4 flex justify-end">
            <Button variant="link" className="border-input bg-background rounded-lg border">
              <Link href="/mappe/timelapse" className="text-sm">
                Continua a leggere...
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-muted ftl:w-2/3 flex w-full items-center justify-center rounded-lg p-6">
          <Image src={TimeLapse} alt="Timelapse Image" className="h-auto w-auto rounded-lg object-cover" priority />
        </div>
      </div>
    </div>
  );
}
