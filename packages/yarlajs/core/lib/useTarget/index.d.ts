/// <reference no-default-lib="true" />
/// <reference lib="esnext" />
/// <reference lib="dom" />

export default function <T extends Yarla.AnyObject>(patulous?: T & ThisType<T & Yarla.Node>): T & Yarla.Node;
