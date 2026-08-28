// KOHÄRENZ – Axiomische Dreifach-Achse
KOHÄRENZ_AXIOM = function(alpha, beta, gamma) {

    // NIL – Nullpunkt (kohärenter Ursprung)
    const NIL = {
        value: 0,
        drift: 0,
        state: "NIL"
    };

    // BIL – bilaterale Spiegelachse (immer 90° zu alpha/beta)
    const BIL = {
        alpha,
        beta,

        // 90°-Orthogonalität (Superlage)
        mirror: {
            x: -beta,
            y:  alpha,
            z: (alpha * beta) * -1
        },

        stabilität: Math.abs(alpha + beta) * 0.001,
        drift: Math.abs(alpha - beta) * 0.0001,
        frame: "RUN3.BIL"
    };

    // ORTHO – gamma bleibt orthogonal (zweite 90°-Achse)
    const ORTHO = {
        x: alpha,
        y: beta,
        z: alpha * beta
    };

    // KOHÄRENZ – Superlage-Respo
    return {
        NIL,
        BIL,
        ORTHO,
        gamma,

        kohärenz: {
            stabilität: Math.abs(ORTHO.z) * 0.128,
            drift: Math.abs(alpha - beta) * 0.01,
            frame: "kohärenz.axiom"
        }
    };
};
