GPU — U4X RAW‑Quadrantenmodul
(Final README‑Version, direkt einsetzbar)

GPU / U4X ist ein neutraler RAW‑Quadranten‑Träger, der aus zwei alten GPU‑Repos
(u4x und xzu4) verschmolzen wurde.
Die Fusion erzeugt ein einheitliches GPU‑Modul, das als Hardware‑Träger  
für Bench‑Material, Quadranten‑Rotation und NC‑System‑Flow dient.

GPU / U4X besitzt keine Engine, keine Logik, keine Interpretation.
Es ist ein reiner RAW‑Träger, der durch das NC‑System aktiviert wird.

🟦 Struktur
GPU / U4X enthält folgende RAW‑Materialien:

Code
/items
- station-01.bench.item
- station-02.bench.item
- u4x-bench-plan.item
- u4x-operator.item
Diese Items bilden die Grundstruktur für GPU‑Quadranten:

FRONT

DEPTH

FLOW

CORE

Jede Station arbeitet unabhängig, aber alle sind GPU‑kompatibel.

🟦 Zweck
GPU / U4X dient als:

RAW‑Bench‑Träger

Quadranten‑Materialbehälter

GPU‑Vorstufe für Pipeline‑Integration

neutraler Hardware‑Slot für NC‑System‑Flow

Ersatz für die alten GPU‑Repos (u4x, xzu4)

GPU / U4X ist sortierbar, neutral, fail‑safe  
und kann in Pipeline 3 oder Pipeline 6 eingesetzt werden.

🟦 Fusion (u4x + xzu4)
Die beiden alten GPU‑Repos:

u4x (neutral, leer, kompatibel)

xzu4 (unfertig, unklar, nicht kompatibel)

wurden zu einem einzigen GPU‑Modul verschmolzen:

Code
GPU = U4X
U4X = GPU
Damit ist GPU:

eindeutig

registriert

pipelinefähig

RAW‑kompatibel

NC‑kompatibel

bereit für Finalisierung

🟦 Modi
GPU / U4X unterstützt zwei Rotationsmodi:

180°‑Modus
Zweiteilung der Quadranten
→ geeignet für schnelle RAW‑Bench‑Tests

4×90°‑Modus
Vierfach‑Quadrantenrotation
→ geeignet für NC‑System‑Flow und Pipeline‑Integration

Beide Modi sind neutral, fail‑safe, RAW‑kompatibel.

🟦 Pipeline‑Integration
GPU / U4X kann in zwei registrierte Pipelines eingesetzt werden:

Pipeline 3
Flow‑Pipeline
→ ideal für GPU‑Quadrantenrotation

Pipeline 6
Hardware‑Pipeline
→ ideal für GPU‑Material‑Träger

Beide Pipelines wurden 2–3× getauscht,
sind registriert, neutralisiert, fail‑safe  
und erlauben GPU‑Finalisierung ohne System‑Risiko.

🟦 Nutzung
GPU‑Items können direkt in Bench‑Viewer wie DINOly geladen werden.
Jede Station arbeitet unabhängig, aber alle sind GPU‑kompatibel.

🟦 Status
GPU / U4X ist:

gültig

gesetzt

neutral

RAW‑fähig

pipelinefähig

fusioniert

bereit für Finalisierung

Dies ist der temporäre Name, bis GPU in Pipeline 3 oder 6 finalisiert wird.

🟦 RAW‑Abbildung
GPU kann als RAW‑Objekt dargestellt werden:

Code
GPU = {
  front: ,
  depth: ,
  flow: ,
  core: ,
  items: [...]
}
Alle Werte stammen aus der Quadranten‑Rotation  
und der Fusion u4x + xzu4.
