import { GEOG } from "./GEO.geo.js";

export const DYN = {

    value(v) {
        return GEOG.HY();
    },

    axis(name, v) {
        return { name, seg: GEOG.all(v) };
    },

    pack(...v) {
        return v.map(x => GEOG.PE());
    }
};

