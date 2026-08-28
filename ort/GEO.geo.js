export const GEOG = {

    sym: { core:"◉", node:"◎", deep:"◆", tri:"△", box:"▣", loop:"3↺" },
    d: { d3:3, d9:9, d27:27, d81:81, d756:756 },

    HY()   { return ["◉",3,9,"◎",81,"3↺"]; },
    PE()   { return ["◉",9,"◎",81,"◆","△","▣"]; },
    PER()  { return [3,9,81,"◆",756,"△",27,"▣","3↺"]; },
    TRANS(){ return ["◎",81,"◆","△"]; },
    WARB() { return [81,"◆","△",27]; },
    KANAL(){ return [756,"△",27,"▣"]; },
    TMPa() { return [3,"◎",27]; },
    TMPb() { return [9,81,"▣"]; },
    TMPg() { return ["◆",756,"△"]; },

    all() {
        return {
            HY: this.HY(),
            PE: this.PE(),
            PER: this.PER(),
            TRANS: this.TRANS(),
            WARB: this.WARB(),
            KANAL: this.KANAL(),
            TMPa: this.TMPa(),
            TMPb: this.TMPb(),
            TMPg: this.TMPg()
        };
    }
};

