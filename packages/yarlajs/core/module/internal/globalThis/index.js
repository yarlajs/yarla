export default (
    // eslint-disable-next-line no-undef
    typeof global !== "undefined" ? global :
        // eslint-disable-next-line no-undef
        typeof window !== "undefined" ? window :
            // eslint-disable-next-line no-undef
            self
);
