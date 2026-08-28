# NOel – Industrie‑6.0 Kernmodul

NOel ist das zentrale Lage‑ und Identitätsmodul der Industrie‑6.0‑Architektur.
Es verbindet die drei Hauptschienen:

- **SURE** – Stabilität / Stand
- **ZEN** – Neutralzone / Ausgleich
- **NC** – Bewegung / Lauf

NOel dient als Ober‑Modul für Lage, Raum, Identität und Segment‑Navigation.

---

## Module

NOel nutzt folgende Kernmodule:

- **GEO.physik** – FIRE / WATER / ICE / OVERWATER / DONE  
- **GEO.geo** – HY / PE / PER / TRANS / WARB / KANAL / TMP‑α/β/γ  
- **NC.engine** – geo + kraft  
- **dyn.js** – dynamische Achsen  
- **neo.lauf.js** – Höhe / Breite / Tiefe  
- **hardware.stand.js** – CPU / RAM / ROM / GPU  
- **sure.stand.js** – SURE‑Stand  
- **zen.stand.js** – ZEN‑Stand

Alle Module sind vollständig kompatibel.

---

## GEO‑Segmente

NOel nutzt die geometrischen Segmente:

- HY → ◉ → 3 → 9 → ◎ → 81 → 3↺  
- PE → ◉ → 9 → ◎ → 81 → ◆ → △ → ▣  
- PER → 3 → 9 → 81 → ◆ → 756 → △ → 27 → ▣ → 3↺  
- TRANS → ◎ → 81 → ◆ → △  
- WARB → 81 → ◆ → △ → 27  
- KANAL → 756 → △ → 27 → ▣  
- TMP‑α → 3 → ◎ → 27  
- TMP‑β → 9 → 81 → ▣  
- TMP‑γ → ◆ → 756 → △

Diese Segmente bilden die Lage‑Geometrie von NOel.

---

## NC.engine

NOel ruft NC.engine über:

```js
NC.run(v)
