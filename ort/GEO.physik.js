export const GEOP = {
    FIRE(v) { return { type: "FIRE", value: v }; },
    WATER(v) { return { type: "WATER", value: v }; },
    ICE(v) { return { type: "ICE", value: v }; },
    OVERWATER(v) { return { type: "OVERWATER", value: v }; },
    DONE(v) { return { type: "FIRE.DONE", value: v }; },

    cube(v) {
        return {
            fire: this.FIRE(v),
            water: this.WATER(v),
            ice: this.ICE(v),
            over: this.OVERWATER(v)
        };
    }
};

