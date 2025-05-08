## 1. Home

**Obiettivo:** Inquadrare subito il tema e “agganciare” il visitatore.
**Contenuto:**

* Titolo e sottotitolo descrittivi (“Siccità in Pianura Padana: crisi 2022‑23”)
* Hero image o breve video time‑lapse in autoplay (es. Po a Cremona)
* 2–3 bullet card con i numeri chiave (precipitazioni 2022 vs medie, livello Po minimo storico, area coinvolta)
* Call‑to‑action verso la mappa interattiva e il time‑lapse

---

## 2. Mappa Interattiva

**Obiettivo:** Far esplorare a colpo d’occhio il Combined Drought Indicator e altri layer.
**Contenuto:**

* Mappa Leaflet/Mapbox con WMS Copernicus EDO (CDI) aggiornata
* Controllo “Layer switcher” per:

  * CDI (siccità)
  * NDVI da Sentinel‑2
  * Soil moisture da Copernicus Land
* Tooltip/infobox al click su un punto (es. livello idrico Po, valori CDI)
* Time‑slider per scorrere la mappa nel periodo Feb ’22 → Set ’23

---

## 3. Time‑lapse Sentinel‑2

**Obiettivo:** Visualizzare l’evoluzione visiva della siccità.
**Contenuto:**

* Video HTML5 o canvas JS con serie mensile di immagini RGB o NDVI (Feb ’22 → Set ’23)
* Controlli play/pause e slider di avanzamento
* Breve legenda che spiega colore NDVI (se usato) o indicazioni di “secco” vs “umido”

---

## 4. Analisi Dati

**Obiettivo:** Offrire grafici e indicatori quantitativi.
**Contenuto:**

* Grafico a linee (chart.js o D3) delle precipitazioni mensili (ERA5/Arpae) vs medie 1991–2020
* Grafico a barre dei livelli medi mensili del Po (idrometro ARPAE)
* Tabella riassuntiva (HTML) con valori minimi, massimi e anomaly percentuale
* Box di approfondimento testuale (“cause meteorologiche”, “impatto su agricoltura”)

---

## 5. Risorse & Contatti

**Obiettivo:** Fornire trasparenza, link ai dataset e possibilità di feedback.
**Contenuto:**

* Link diretti:

  * EDO WMS/WCS (Copernicus)
  * Sentinel Hub EO‑Browser (NDVI, RGB)
  * ERA5 Climate Data Store
  * ARPAE e ISPRA
* Sezione “Scarica i dati” con CSV/GeoJSON di esempio
* Breve spiegazione di licenze (Copernicus open data)
* Modulo di contatto / link GitHub repo / social per feedback
