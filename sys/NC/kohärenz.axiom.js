RUN3_BIL = function(alpha, beta, gamma) {

    // NIL – Nullpunkt
    const NIL = 0;

    // BIL – bilaterale Spiegelung (90°)
    const BIL = {
        alpha: alpha,
        beta: beta,

        // Spiegelachse (immer orthogonal)
        mirror: {
            x: -beta,
            y:  alpha,
            z:  (alpha * beta) * -1
        },

        // Superlage – stabilisierte 90°-Achse
        superlage: {
            stabilität: Math.abs(alpha + beta) * 0.001,
            drift: Math.abs(alpha - beta) * 0.0001,
            frame: "RUN3.BIL"
        }
    };

    // Rückgabe – Superlage Respo
    return {
        NIL,
        BIL,
        gamma,
        kohärenz: BIL.superlage
    };
};

