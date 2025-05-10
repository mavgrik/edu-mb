import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Hero from '@/public/images/Hero.jpeg';

export default function Home() {
  return (
    <div className="space-y-4">
      <AspectRatio ratio={21 / 9} className="h-auto w-full">
        <Image src={Hero} alt="Hero Image" className="rounded-lg object-cover" priority />
      </AspectRatio>

      <div className="bg-muted rounded-lg p-6">
        <div className="mb-4">
          <p className="ftl:columns-2 columns-1 gap-4 text-pretty">
            Negli ultimi tre anni, la Pianura Padana ha vissuto una delle peggiori crisi idriche mai registrate. Il
            fiume Po, il più lungo d’Italia e risorsa idrica fondamentale per il Nord del Paese, ha toccato livelli di
            portata minimi storici, in particolare durante l’estate 2022 e nuovamente nel 2023. Le cause principali sono
            da ricercarsi in precipitazioni scarse, inverni con accumuli nevosi ridotti e temperature superiori alla
            media, che hanno accelerato i processi di evaporazione. L’impatto della siccità si è riflesso gravemente
            sull’agricoltura, sull’approvvigionamento idrico, sulla produzione di energia idroelettrica e sugli
            ecosistemi fluviali. La situazione del Po è diventata emblematica delle vulnerabilità idriche italiane ed
            europee in un contesto di cambiamento climatico. I dati satellitari del programma Copernicus, in particolare
            quelli provenienti dai satelliti Sentinel-2, hanno documentato in dettaglio il progressivo prosciugamento
            del fiume, la riduzione della vegetazione e l’inaridimento dei suoli agricoli circostanti. Attraverso queste
            immagini è possibile osservare l’evoluzione della siccità in modo oggettivo e aggiornato. Monitorare
            fenomeni come quello del Po non è solo utile dal punto di vista scientifico, ma anche essenziale per
            sensibilizzare l’opinione pubblica e supportare strategie di adattamento e gestione sostenibile della
            risorsa idrica.
          </p>
        </div>
        <div className="flex justify-end">
          <Button variant="link" className="border-input bg-background rounded-lg border">
            <Link href="/arco/sport" className="text-sm">
              Continua a leggere... Assorate
            </Link>
          </Button>
        </div>
      </div>

      <div className="ftl:flex-col-reverse flex w-full flex-col gap-6 space-x-4">
        <div className="bg-muted ftl:w-1/3 ftl:p-8 w-full rounded-lg p-6">
          <h2 className="mb-4 text-xl font-semibold">One Third</h2>
          <p>
            This div takes up 1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up
            1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up 1/3 of the screen
            width on desktop and tablet, but full width on mobile.
          </p>
        </div>

        <div className="bg-muted ftl:p-8 w-full rounded-lg p-6 md:w-2/3">
          <h2 className="mb-4 text-xl font-semibold">Two Thirds</h2>
          <p>This div takes up 2/3 of the screen width on desktop and tablet, but full width on mobile.</p>
          <p className="mt-4">
            The layout automatically stacks vertically on smaller screens for better mobile experience.
          </p>
        </div>
      </div>

      <div className="ftl:flex-row flex w-full flex-col-reverse gap-6 space-x-4">
        {/* First div - 1/3 width on desktop, full width on mobile */}
        <div className="bg-muted ftl:w-1/3 ftl:p-8 w-full rounded-lg p-6">
          <h2 className="mb-4 text-xl font-semibold">One Third</h2>
          <p>
            This div takes up 1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up
            1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up 1/3 of the screen
            width on desktop and tablet, but full width on mobile.
          </p>
        </div>

        {/* Second div - 2/3 width on desktop, full width on mobile */}
        <div className="bg-muted ftl:p-8 w-full rounded-lg p-6 md:w-2/3">
          <h2 className="mb-4 text-xl font-semibold">Two Thirds</h2>
          <p>This div takes up 2/3 of the screen width on desktop and tablet, but full width on mobile.</p>
          <p className="mt-4">
            The layout automatically stacks vertically on smaller screens for better mobile experience.
          </p>
        </div>
      </div>
    </div>
  );
}
