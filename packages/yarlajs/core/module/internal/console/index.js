import globalThis from "../globalThis/index.js";

export default globalThis.console || {
    error: function () {},
    warn: function () {},
    info: function () {},
    log: function () {},
};
