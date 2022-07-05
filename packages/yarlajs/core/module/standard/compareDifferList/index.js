/**
 * 
 * @param {ReadonlyArray<any> | null | undefined} dependence1 
 * @param {ReadonlyArray<any> | null | undefined} dependence2 
 */
export default function (
    dependence1,
    dependence2
) {
    return !dependence1
        || !dependence2
        || dependence1.length !== dependence2.length
        || dependence1.some(function (v, i) { return v !== dependence2[i]; });
}
