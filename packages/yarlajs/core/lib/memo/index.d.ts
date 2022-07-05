/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

/**
 * Indicates that the component will not be updated.
 * 
 * @param component A component.
 */
export default function <T extends Yarla.Component<any>>(component: T): T;
