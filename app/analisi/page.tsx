import { CloudRain, Users, Waves } from 'lucide-react';
import Link from 'next/link';
import { PortataPoChart } from '@/components/charts/flow-rate';
import { PrecipitazioniChart } from '@/components/charts/rainfall';
import { ConsumiIdriciChart } from '@/components/charts/water-consumption';
import { Separator } from '@/components/ui/separator';

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
            Negli ultimi vent&apos;anni la distribuzione delle piogge in Pianura Padana ha mostrato un marcato
            sbilanciamento stagionale: l&apos;inverno si è fatto più piovoso (+12% rispetto alla media 1980-2000),
            mentre la primavera e l&apos;estate registrano cali medi del 15% e 22% rispettivamente. Questi scostamenti
            accentuano i picchi di piena in febbraio-marzo e i periodi di siccità da giugno a settembre, aumentando il
            rischio di eventi estremi idro-meteorologici. L&apos;analisi conferma un trend in peggioramento: gli anni
            più recenti (2017, 2018, 2022 e 2023) si posizionano tra i cinque con i totali annui più bassi dal 1950. La
            riduzione delle precipitazioni estive, unita a temperature medie in crescita di +1,4°C, conduce a un deficit
            idrico crescente, che rende urgente rivedere la pianificazione delle riserve e potenziare infrastrutture per
            la raccolta e il riciclo delle acque meteoriche.
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
            La portata media annuale del Po, calcolata su serie storiche dal 1951 al 2024, evidenzia un declino
            progressivo: si passa da un flusso medio di 1.450m³/s negli anni &apos;50 a circa 1.100m³/s negli ultimi
            cinque anni. Il segnale più netto si riscontra nelle estati, quando la portata scende mediamente del 30%
            rispetto al periodo 1980-2000, aumentando la frequenza di soglie di criticità idrica. La diminuzione è
            imputabile a un mix di scarsa piovosità, maggiore evaporazione estiva e usi antropici intensificati nel
            bacino (irrigazione e prelievi industriali). I dati suggeriscono che senza interventi mirati come la
            regolazione più flessibile dei rilasci dalle dighe e il recupero delle aree umide naturali per il rilascio
            graduale delle acque la portata del fiume continuerà a contrarsi, mettendo a rischio sia gli ecosistemi
            fluviali sia le economie locali.
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
            Il settore agricolo assorbe la fetta più ampia di risorsa idrica in Emilia-Romagna e Lombardia, con oltre il
            60% del totale impiegato in irrigazione a scopi produttivi. Seguono gli usi civili (25%), che comprendono
            acqua potabile, servizi igienico-sanitari e verde pubblico, e gli usi industriali (15%), principalmente nel
            comparto alimentare e chimico. Le politiche di riuso e di irrigazione a goccia a basso scorrimento
            rappresentano già esperienze virtuose, ma restano largamente sotto sfruttate. Investimenti mirati nella
            modernizzazione delle reti e incentivi per l&apos;adozione di tecnologie a risparmio idrico potrebbero
            ridurre notevolmente i prelievi, secondo una stima, fino al 25%, alleggerendo così la pressione sulla
            portata naturale del Po e migliorando la resilienza del sistema agricolo.
          </p>
        </div>

        <div className="bg-muted ftl:w-2/5 flex w-full items-center justify-center rounded-lg border p-6">
          <ConsumiIdriciChart />
        </div>
      </div>
    </div>
  );
}
