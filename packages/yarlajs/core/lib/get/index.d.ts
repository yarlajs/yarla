/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Returns the value of a specified property of an object.
 * 
 * @param argc An object.
 * @param expr The property expression.
 * @param defaultValue The default value when the value is null or undefined. 
 */
export default function <T>(argc: any, expr: Yarla.PropertyExpr, defaultValue?: T): T;
