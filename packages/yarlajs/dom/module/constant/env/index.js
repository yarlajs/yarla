import document from "@yarlajs/core/module/internal/document/index.js";

export default {
    BEHAVIOR: document ? "scrollBehavior" in document.documentElement.style : false,
    PASSIVED: document ? (function (PASSIVE) { return document.addEventListener("passive", function () { }, { get passive() { return PASSIVE = true; } }), PASSIVE; }(false)) : false,
    namespaceURI: {
        SVG: "http://www.w3.org/2000/svg",
        MathML: "http://www.w3.org/1998/Math/MathML",
    },
};
