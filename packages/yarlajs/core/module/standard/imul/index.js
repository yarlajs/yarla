// eslint-disable-next-line es/no-math-imul
export default Math.imul || function (
    a,
    b
) {
    return (a * (b >>> 16) << 16) + a * (b & 0xFFFF) | 0;
};
