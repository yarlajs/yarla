/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns a trampoline function that resolves recursive functions exceeding the maximum call stack size.
 * 
 * @param argc A recursive function.
 */
export default function <T extends Yarla.BasicFunc>(argc: T): T;
