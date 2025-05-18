import { SiGithub } from '@icons-pack/react-simple-icons';
import { Code, Database, FileText, GitBranch, Globe, Package, Server, Workflow } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function ResourcesPage() {
  return (
    <div className="flex flex-col items-start justify-start space-y-6">
      <div className="ftl:flex-row ftl:space-x-6 ftl:space-y-0 flex w-full flex-col items-start justify-between space-y-6 space-x-0">
        <div className="ftl:w-2/5 flex flex-col items-start justify-start">
          <h1 className="mb-4 text-3xl">Risorse</h1>
          <p className="text-muted-foreground">
            Trova informazioni sulle nostre licenze, fonti di dati, tecnologie e processo di sviluppo.
          </p>
        </div>

        <div className="ftl:w-3/5 bg-muted flex w-full flex-col items-start justify-between rounded-lg border p-3">
          <h2 className="text-lg">Indice</h2>
          <Separator className="mt-2 mb-4" />
          <div className="flex w-full flex-row flex-wrap items-start justify-start space-y-2 space-x-6">
            <div className="flex flex-grow flex-row items-start justify-around space-x-6">
              <Link
                href="#licensing"
                className="hover:text-primary flex items-center text-sm transition-colors hover:underline"
              >
                <FileText className="mr-2 h-4 w-4" />
                Informazioni sulle Licenze
              </Link>
              <Link
                href="#datasets"
                className="hover:text-primary flex items-center text-sm transition-colors hover:underline"
              >
                <Database className="mr-2 h-4 w-4" />
                Dataset
              </Link>
            </div>
            <div className="flex flex-grow flex-row items-start justify-around space-x-6">
              <Link
                href="#technologies"
                className="hover:text-primary flex items-center text-sm transition-colors hover:underline"
              >
                <Code className="mr-2 h-4 w-4" />
                Tecnologie usate
              </Link>
              <Link
                href="#cicd"
                className="hover:text-primary flex items-center text-sm transition-colors hover:underline"
              >
                <Workflow className="mr-2 h-4 w-4" />
                Pipeline CI/CD
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="licensing" className="flex w-full flex-col items-start justify-start">
        <div className="mb-4 flex items-center space-x-2">
          <FileText className="h-5 w-5" />
          <h2 className="text-2xl">Informazioni sulle Licenze</h2>
        </div>
        <Separator className="mb-4" />
        <div className="bg-muted flex w-full flex-col items-start justify-start rounded-lg border p-6">
          <h3 className="text-xl">Licenza Generale</h3>
          <p className="text-muted-foreground text-sm">Termini di utilizzo per il nostro sito web</p>
          <p className="mt-4 mb-2">
            Tutti i contenuti di questo sito web sono concessi in licenza sotto la Licenza MIT, salvo diversa
            indicazione. Questo significa che sei libero di utilizzare, copiare, modificare e distribuire i contenuti, a
            condizione che includa l&apos;avviso di copyright originale e la dichiarazione di esclusione di
            responsabilità.
          </p>
          <div className="bg-card rounded-lg border p-4 transition-transform hover:scale-102">
            <h4 className="mb-2 text-lg">Licenze dei Dati</h4>
            <p className="text-sm">
              I dati satellitari visualizzati su questo sito web provengono dal Copernicus Browser e sono soggetti alla
              politica sui dati di Copernicus, che generalmente consente un accesso libero e aperto per la maggior parte
              degli utilizzi. Quando utilizzi questi dati, fornisci un&apos;appropriata attribuzione a Copernicus.
            </p>
          </div>
        </div>
      </div>

      <div id="datasets" className="flex w-full flex-col items-start justify-start">
        <div className="mb-4 flex items-center space-x-2">
          <Database className="h-5 w-5" />
          <h2 className="text-2xl">Dataset</h2>
        </div>
        <Separator className="mb-4" />
        <div className="bg-muted flex w-full flex-col items-start justify-start rounded-lg border p-6">
          <h3 className="text-xl">Copernicus Browser</h3>
          <p className="text-muted-foreground text-sm">La nostra fonte principale per i dati satellitari</p>
          <p className="mt-4 mb-2">
            Utilizziamo il Copernicus Browser come nostra principale fonte di dati. Copernicus fornisce dati di
            osservazione della Terra di alta qualità attraverso i suoi satelliti Sentinel.
          </p>
          <p>
            Il programma Copernicus offre un accesso completo, gratuito e aperto ai dati di osservazione della Terra,
            permettendoci di fornire informazioni accurate e aggiornate ai nostri utenti.
          </p>
        </div>
      </div>

      <div id="technologies" className="flex w-full flex-col items-start justify-start">
        <div className="mb-4 flex items-center space-x-2">
          <Code className="h-5 w-5" />
          <h2 className="text-2xl">Tecnologie usate</h2>
        </div>
        <Separator className="mb-4" />
        <div className="ftl:grid-cols-2 grid w-full grid-cols-1 gap-6">
          <div className="bg-muted flex w-full flex-col rounded-lg border p-6 transition-transform hover:scale-105">
            <div className="mb-2 flex flex-row items-center justify-start space-x-2">
              <Package className="text-muted-foreground h-5 w-5" />
              <h4 className="text-lg">pnpm</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Gestore di pacchetti veloce ed efficiente in termini di spazio su disco che alimenta il nostro flusso di
              lavoro di sviluppo.
            </p>
          </div>

          <div className="bg-muted flex w-full flex-col rounded-lg border p-6 transition-transform hover:scale-105">
            <div className="mb-2 flex flex-row items-center justify-start space-x-2">
              <Code className="text-muted-foreground h-5 w-5" />
              <h4 className="text-lg">Next.js</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Framework React che permette rendering lato server e generazione di siti statici e dinamici performanti,
              ottimizzati per SEO e caricamenti veloci.
            </p>
          </div>

          <div className="bg-muted flex w-full flex-col rounded-lg border p-6 transition-transform hover:scale-105">
            <div className="mb-2 flex flex-row items-center justify-start space-x-2">
              <Server className="text-muted-foreground h-5 w-5" />
              <h4 className="text-lg">Vercel</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Hosting cloud ottimizzato per frontend moderni che consente deployment automatici, CDN globale e
              integrazione continua con Git per siti veloci e scalabili.
            </p>
          </div>

          <div className="bg-muted flex w-full flex-col rounded-lg border p-6 transition-transform hover:scale-105">
            <div className="mb-2 flex flex-row items-center justify-start space-x-2">
              <SiGithub className="text-muted-foreground h-5 w-5" />
              <h4 className="text-lg">GitHub</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Piattaforma di versionamento e collaborazione che consente gestione del codice, controllo delle modifiche
              e integrazione continua tramite Git in modo semplice e centralizzato.
            </p>
          </div>

          <div className="bg-muted flex w-full flex-col rounded-lg border p-6 transition-transform hover:scale-105">
            <div className="mb-2 flex flex-row items-center justify-start space-x-2">
              <Globe className="text-muted-foreground h-5 w-5" />
              <h4 className="text-lg">Tailwind CSS</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Framework CSS utility-first che consente di creare interfacce moderne, responsive e personalizzabili
              direttamente nel markup senza scrivere fogli di stile tradizionali.
            </p>
          </div>

          <div className="bg-muted flex w-full flex-col rounded-lg border p-6 transition-transform hover:scale-105">
            <div className="mb-2 flex flex-row items-center justify-start space-x-2">
              <GitBranch className="text-muted-foreground h-5 w-5" />
              <h4 className="text-lg">TypeScript</h4>
            </div>
            <p className="text-muted-foreground text-sm">
              Superset di JavaScript che aggiunge tipizzazione statica e strumenti avanzati per scrivere codice più
              sicuro, scalabile e mantenibile.
            </p>
          </div>
        </div>
      </div>

      <div id="cicd" className="flex w-full flex-col items-start justify-start">
        <div className="mb-4 flex items-center space-x-2">
          <Workflow className="h-5 w-5" />
          <h2 className="text-2xl">Pipeline CI/CD</h2>
        </div>
        <Separator className="mb-4" />
        <div className="bg-muted flex w-full flex-col items-start justify-start space-y-4 rounded-lg border p-6">
          <h4>Integrazione e Distribuzione Continua</h4>
          <p>Il nostro flusso di lavoro e di sviluppo automatizzato</p>

          <div className="bg-card w-full rounded-lg border p-4 transition-transform hover:scale-102">
            <h4 className="mb-2 font-medium">Integrazione con GitHub</h4>
            <p className="text-muted-foreground">
              Il nostro processo di sviluppo inizia con GitHub, dove tutte le modifiche al codice vengono tracciate e
              revisionate. Utilizziamo pull request per le revisioni del codice e regole di protezione dei branch per
              garantire la qualità del codice.
            </p>
          </div>

          <div className="bg-card w-full rounded-lg border p-4 transition-transform hover:scale-102">
            <h4 className="mb-2 font-medium">Test Automatizzati</h4>
            <p className="text-muted-foreground">
              Ogni modifica al codice attiva test automatizzati tramite GitHub Actions. Questo include test di
              formattazione e linting per mantenere la qualità e coerenza del codice e prevenire errori o inconsistenze.
            </p>
          </div>

          <div className="bg-card w-full rounded-lg border p-4 transition-transform hover:scale-102">
            <h4 className="mb-2 font-medium">Processo di Build</h4>
            <p className="text-muted-foreground">
              Dopo il successo dei test, il nostro processo di build compila il codice TypeScript, ottimizza le risorse
              e prepara l&apos;applicazione per la distribuzione utilizzando le ottimizzazioni di build di Next.js.
              Inoltre, utilizziamo PostCSS per trasformare e ottimizzare i nostri file CSS, applicando plugin come
              autoprefixer e cssnano per garantire compatibilità e prestazioni elevate.
            </p>
          </div>

          <div className="bg-card w-full rounded-lg border p-4 transition-transform hover:scale-102">
            <h4 className="mb-2 font-medium">Distribuzione con Vercel</h4>
            <p className="text-muted-foreground">
              Utilizziamo Vercel per le distribuzioni automatiche. Ogni pull request genera una distribuzione di
              anteprima, mentre le fusioni nel branch principale attivano distribuzioni in produzione. Questo garantisce
              una consegna continua di nuove funzionalità e correzioni di bug.
            </p>
          </div>

          <div className="bg-card w-full rounded-lg border p-4 transition-transform hover:scale-102">
            <h4 className="mb-2 font-medium">Automazione del Flusso di Lavoro</h4>
            <p className="text-muted-foreground">
              La nostra pipeline CI/CD automatizza l&apos;intero processo, dal commit del codice alla distribuzione in
              produzione, riducendo l&apos;intervento manuale e garantendo rilasci consistenti e affidabili. Questo
              approccio ci consente di fornire aggiornamenti rapidamente mantenendo alti standard di qualità.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
