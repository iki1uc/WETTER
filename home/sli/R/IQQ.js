ID.set(mode)
ID.info()
ID.system(whirl)
WHIRL(v)
TMP_Whirl(w)
PQ_PC_Parallel(w)
RESPO_Whirl(w)
NC_link_Whirl(w)
PIPELINE_LOAD(input)
// =========================
// ROM (Archiv)
// =========================

const ROM_FRAMES = [];

function ROM_Store(frame){
    ROM_FRAMES.push({
        frame,
        stamp: Date.now()
    });
    return ROM_FRAMES;
}
const romFrame = ROM_Store(out.whirl);
document.getElementById("rom").textContent =
    JSON.stringify(ROM_FRAMES, null, 2);
<h2>ROM Archiv</h2>
<pre id="rom">Noch keine Frames</pre>
