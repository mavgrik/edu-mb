import Image from 'next/image';
import Link from 'next/link';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Button } from '@/components/ui/button';
import Hero from '@/public/images/Hero.jpeg';

//TODO: Aggiungere link verso le altre pagine delle mappe
//TODO: Aggiungere immagini dentro al 2/3
//FIXME:  Sistemare padding/spacing tra due 1/3 2/3

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
            sull&apos;agricoltura, sull&apos;approvvigionamento idrico, sulla produzione di energia idroelettrica e
            sugli ecosistemi fluviali. La situazione del Po è diventata emblematica delle vulnerabilità idriche italiane
            ed europee in un contesto di cambiamento climatico. I dati satellitari del programma Copernicus, in
            particolare quelli provenienti dai satelliti Sentinel-2, hanno documentato in dettaglio il progressivo
            prosciugamento del fiume, la riduzione della vegetazione e l’inaridimento dei suoli agricoli circostanti.
            Attraverso queste immagini è possibile osservare l’evoluzione della siccità in modo oggettivo e aggiornato.
            Monitorare fenomeni come quello del Po non è solo utile dal punto di vista scientifico, ma anche essenziale
            per sensibilizzare l’opinione pubblica e supportare strategie di adattamento e gestione sostenibile della
            risorsa idrica.
          </p>
        </div>
        <div className="flex justify-end">
          <Button variant="link" className="border-input bg-background rounded-lg border">
            <Link href="/arco/sport" className="text-sm">
              Continua a leggere...
            </Link>
          </Button>
        </div>
      </div>

      <div className="ftl:flex-row-reverse ftl:space-x-6 ftl:space-x-reverse ftl:space-y-0 flex w-full flex-col-reverse items-stretch space-y-reverse">
        <div className="bg-muted ftl:w-1/3 flex w-full flex-col space-y-6 rounded-lg p-6">
          <h2 className="mb-4">DESCR</h2>
          <p>
            This div takes up 1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up
            1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up 1/3 of the screen
            width on desktop and tablet, but full width on mobile.
          </p>
        </div>

        <div className="bg-muted ftl:w-2/3 flex w-full flex-col space-y-6 rounded-lg p-6">
          <h2 className="mb-4">IMG</h2>
          <p>
            This div takes up 2/3 of the screen width on desktop and tablet, but full width on mobile. The layout
            automatically stacks vertically on smaller screens for better mobile experience.
          </p>
        </div>
      </div>

      <div className="ftl:flex-row ftl:space-x-6 flex w-full flex-col-reverse space-y-6 space-y-reverse">
        <div className="bg-muted ftl:w-1/3 ftl:p-8 w-full rounded-lg p-6">
          <h2 className="mb-4">DESCR</h2>
          <p>
            This div takes up 1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up
            1/3 of the screen width on desktop and tablet, but full width on mobile.his div takes up 1/3 of the screen
            width on desktop and tablet, but full width on mobile.
          </p>
        </div>

        <div className="bg-muted ftl:w-2/3 w-full rounded-lg p-6">
          <h2 className="mb-4">IMG</h2>
          <p>
            This div takes up 2/3 of the screen width on desktop and tablet, but full width on mobile. The layout
            automatically stacks vertically on smaller screens for better mobile experience.
          </p>
        </div>
      </div>
    </div>
  );
}
