export default function (
    argc
) {
    // eslint-disable-next-line es/no-object-getownpropertydescriptors
    if (Object.getOwnPropertyDescriptors) {
        // eslint-disable-next-line es/no-object-getownpropertydescriptors
        return Object.getOwnPropertyDescriptors(argc);
    }
    return Object.getOwnPropertyNames(argc).reduce(
        function (v, i) {
            return v[i] = Object.getOwnPropertyDescriptor(argc, i), v;
        },
        Object.create(null));
}
