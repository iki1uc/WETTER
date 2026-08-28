CHROMIUM_OS = {
    kernel: "chromium",
    engine: "blink",
    js: "v8",

    // NET Loader – Browser dynamisch laden
    net: {
        loader: function(pkg) {
            return {
                package: pkg,
                state: "net-loaded",
                kernel: "chromium",
                engine: "blink",
                js: "v8"
            };
        }
    },

    // User-Browser (Slot)
    userBrowser: null,

    // Browser laden über NET Loader
    loadBrowser(name) {
        const netPackage = this.net.loader(name);
        this.userBrowser = name;

        return {
            kernel: this.kernel,
            browser: name,
            net: netPackage.state,
            state: "ready"
        };
    },

    ballast: 0,
    drift: 0
};
