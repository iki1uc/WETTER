CHROMIUM_OS = {
    kernel: "chromium",
    engine: "blink",
    js: "v8",
    ballast: 0,
    drift: 0,
    userBrowser: null,

    loadBrowser(name) {
        this.userBrowser = name;
        return {
            kernel: this.kernel,
            browser: name,
            state: "ready"
        };
    }
};

