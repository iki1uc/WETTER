import { GEOP } from "./GEO.physik.js";
import { GEOG } from "./GEO.geo.js";

export const NC = {

    geo(v) {
        return GEOG.all(v);
    },

    kraft(v) {
        return GEOP.cube(v);
    },

    run(v) {
        return {
            geo: this.geo(v),
            kraft: this.kraft(v)
        };
    }
};

