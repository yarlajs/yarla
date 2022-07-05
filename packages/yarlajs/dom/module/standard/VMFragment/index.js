import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import globalThis from "@yarlajs/core/module/internal/globalThis/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import isConnected from "../isConnected/index.js";
import contains from "../contains/index.js";
import remove from "../remove/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    nodeName: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         */
        function () {
            return Reflect.getInternal(this).nodeName;
        }
    ),
    nodeType: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         */
        function () {
            return Reflect.getInternal(this).nodeType;
        }
    ),
    childNodes: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         */
        function () {
            return Reflect.getInternal(this).childNodes;
        }
    ),
    isConnected: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         */
        function () {
            for (var
                i = 0,
                n = this.childNodes,
                l = n.length;
                i < l;
                i++
            ) {
                if (!isConnected(n[i])) {
                    return false;
                }
            }
            return this.childNodes.length > 0;
        }
    ),
    nextSibling: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         */
        function () {
            var n = this.childNodes;
            var l = n.length;
            if (l > 0) {
                return n[l - 1].nextSibling;
            }
            return null;
        }
    ),
    previousSibling: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         * @returns {Node | null}
         */
        function () {
            var n = this.childNodes;
            var l = n.length;
            if (l > 0) {
                return n[0].previousSibling;
            }
            return null;
        }
    ),
    addEventListener: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         * @param {string} type 
         * @param {EventListenerOrEventListenerObject} listener 
         * @param {AddEventListenerOptions} [opts] 
         */
        function (
            type,
            listener,
            opts
        ) {
            for (var
                i = 0,
                n = this.childNodes,
                l = n.length;
                i < l;
                i++
            ) {
                n[i].addEventListener(type, listener, opts);
            }
        }
    ),
    removeEventListener: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         * @param {string} type 
         * @param {EventListenerOrEventListenerObject} listener 
         * @param {EventListenerOptions} [opts] 
         */
        function (
            type,
            listener,
            opts
        ) {
            for (var
                i = 0,
                n = this.childNodes,
                l = n.length;
                i < l;
                i++
            ) {
                n[i].removeEventListener(type, listener, opts);
            }
        }
    ),
    dispatchEvent: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         * @param {Event} event 
         */
        function (
            event
        ) {
            for (var
                i = 0,
                n = this.childNodes,
                l = n.length;
                i < l;
                i++
            ) {
                n[i].dispatchEvent(event);
            }
            return event.defaultPrevented;
        }
    ),
    insertBefore: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         * @param {ChildNode} node 
         * @param {ChildNode | null} previous 
         * @returns {Node}
         */
        function (
            node,
            previous
        ) {
            var n = this.childNodes;
            if (previous) {
                var l = n.indexOf(previous);
                if (l === -1) {
                    throw new Error(message.FAILED_TO_EXECUTE_INSERT);
                }
                n.splice(l, 0, node);
            } else {
                n.push(node);
            }
            [].push()
            return node;
        }
    ),
    removeChild: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         * @param {ChildNode} node 
         * @returns {Node}
         */
        function (
            node
        ) {
            var n = this.childNodes;
            var l = n.indexOf(node);
            if (l === -1) {
                throw new Error(message.FAILED_TO_EXECUTE_REMOVE);
            }
            return n.splice(l, 1).forEach(remove), node;
        }
    ),
    contains: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         * @param {Node} node 
         * @returns {boolean}
         */
        function (
            node
        ) {
            for (var
                i = 0,
                n = this.childNodes,
                l = n.length;
                i < l;
                i++
            ) {
                if (n[i] === node || contains(n[i], node)) {
                    return true;
                }
            }
            return false;
        }
    ),
    remove: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMFragment}
         */
        function () {
            this.childNodes.forEach(remove);
        }
    ),
    textContent: {
        configurable: true,
        get: skrinkSerializer(
            /**
             * 
             * @this {Node}
             */
            function () {
                var r = [];
                for (var
                    i = 0,
                    n = this.childNodes,
                    l = n.length;
                    i < l;
                    i++
                ) {
                    r.push(n[i].textContent);
                }
                return r.join("");
            }
        ),
        set: skrinkSerializer(
            function () {
                throw new Error(message.NOT_SUPPORTED);
            }
        ),
    },
}, globalThis.Node || NOOP, "VMFragment"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.dom.VMFragment>}
         */
        function () {
            return Reflect.construct(this, {
                childNodes: [],
                nodeName: "VMFragment",
                nodeType: -1,
            });
        }
    ),
});
