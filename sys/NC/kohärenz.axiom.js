RUN3_BIL = function(alpha, beta, gamma) {

    // NIL – Nullpunkt (rein, driftfrei)
    const NIL = {
        value: 0,
        drift: 0,
        state: "NIL"
    };

    // BIL – bilaterale Spiegelachse (90°)
    const BIL = {
        alpha: alpha,
        beta: beta,

        // Orthogonale Spiegelung
        mirror: {
            x: -beta,
            y:  alpha,
            z: (alpha * beta) * -1
        },

        // Superlage – stabilisierte 90°-Achse
        superlage: {
            stabilität: Math.abs(alpha + beta) * 0.001,
            drift: Math.abs(alpha - beta) * 0.0001,
            frame: "RUN3.BIL"
        }
    };

    // ORTHO – gamma bleibt orthogonal (zweite 90°-Achse)
    const ORTHO = {
        x: alpha,
        y: beta,
        z: alpha * beta
    };

    // Rückgabe – Superlage Respo
    return {
        NIL,
        BIL,
        ORTHO,
        gamma,
        kohärenz: BIL.superlage
    };
};
