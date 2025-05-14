import TimelapsePlayer from '@/components/video-player';

export default function timelapse() {
  return (
    <div className="space-y-6">
      <TimelapsePlayer src="../videos/timelapse.mp4" jumpSeconds={10} />

      <div className="ftl:space-y-0 flex w-full flex-row-reverse space-x-2 space-x-reverse sm:space-x-2 sm:space-x-reverse md:space-x-6 md:space-x-reverse">
        <div className="bg-muted ftl:w-5/6 flex w-5/6 flex-col rounded-lg border p-6">
          <h2 className="mb-4">Legenda:</h2>
          <p>
            Nel timelapse NDWI, il blu (NDWI ≈ +0.8) indica la presenza di acqua superficiale, come fiumi e laghi; il
            bianco (NDWI ≈ 0) segnala suoli umidi o zone di transizione tra acqua e terra; il verde (NDWI ≈ -0.8)
            rappresenta aree vegetate o suoli asciutti, privi di acqua visibile.
          </p>
        </div>

        <div className="bg-muted ftl:w-1/6 flex w-1/6 items-center justify-center rounded-lg border p-2 sm:p-4 md:p-6">
          <div
            className="h-full min-h-64 w-full max-w-24 rounded-lg"
            style={{ background: 'linear-gradient(to bottom, blue, white, green)' }}
          />
        </div>
      </div>

      <div className="bg-muted rounded-lg border p-6">
        <div className="mb-4">
          <h2 className="mb-4">Descrizione del timelapse</h2>
          <p className="ftl:columns-2 columns-1 gap-4 text-pretty">
            In questo timelapse NDWI della Pianura Padana — centrato sul fiume Po — è chiaramente visibile
            l&apos;evoluzione della superficie d&apos;acqua nel tempo. Il colore blu intenso rappresenta l’acqua, mentre
            le tonalità verdi indicano suolo vegetato o coltivato. L’immagine iniziale, datata 8 gennaio 2022, mostra un
            fiume Po ancora relativamente pieno, con alveo largo e numerosi specchi d’acqua laterali. Tuttavia, man mano
            che si avanza nel tempo, è possibile notare una progressiva riduzione dell’ampiezza del corso d’acqua e
            delle aree umide circostanti. In alcune fasi si osserva addirittura un’interruzione quasi completa della
            continuità fluviale, sintomo evidente della crisi idrica che ha colpito il bacino del Po a partire dal 2022.
            Questo fenomeno non è solo una preoccupazione ambientale: la scarsità d&apos;acqua compromette
            l’agricoltura, minaccia gli ecosistemi fluviali, e può danneggiare l’economia locale. Il timelapse mostra in
            modo diretto e tangibile quanto il cambiamento climatico e la gestione errata delle risorse idriche stiano
            già producendo effetti visibili sul territorio italiano.
          </p>
        </div>
      </div>
    </div>
  );
}
