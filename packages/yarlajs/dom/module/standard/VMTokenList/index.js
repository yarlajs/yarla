import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import flat from "@yarlajs/core/lib/flat/index.js";

export default defineProperties(generateClass(Reflect.BASE, {
    value: generateGetterDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMTokenList}
         * @returns {string}
         */
        function () {
            return Reflect.getInternal(this).element.className;
        }
    ),
    add: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMTokenList}
         */
        function () {
            var u = false,
                /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                o = Reflect.getInternal(this),
                e = o.element,
                r = o.classes;
            for (var
                i = 0,
                s = flat(arguments, 0, Infinity, true),
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                var j = r.indexOf(n);
                if (j === -1) {
                    r.push(n);
                    u = true;
                }
            }
            if (u) {
                e.className = r.join(" ");
            }
        }
    ),
    contains: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMTokenList}
         * @param {string} token 
         * @returns {boolean}
         */
        function (
            token
        ) {
            return Reflect.getInternal(this).classes.indexOf(token) !== -1;
        }
    ),
    remove: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMTokenList}
         */
        function () {
            var u = false,
                /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                o = Reflect.getInternal(this),
                e = o.element,
                r = o.classes;
            for (var
                i = 0,
                s = flat(arguments, 0, Infinity, true),
                l = s.length;
                i < l;
                i++
            ) {
                var n = s[i];
                var j = r.indexOf(n);
                if (j !== -1) {
                    r.splice(j, 1);
                    u = true;
                }
            }
            if (u) {
                e.className = r.join(" ");
            }
        }
    ),
    replace: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMTokenList}
         * @param {string} previous 
         * @param {string} token 
         */
        function (
            previous,
            token
        ) {
            var u = false,
                /** @type {{ readonly element: Element; readonly classes: string[]; }} */
                o = Reflect.getInternal(this),
                e = o.element,
                r = o.classes,
                i = r.indexOf(previous),
                j = r.indexOf(token);
            if (i !== -1) {
                if (j === -1) {
                    r.splice(i, 1, token);
                } else {
                    r.splice(i, 1);
                }
                u = true;
            }
            if (u) {
                e.className = r.join(" ");
            }
        }
    ),
    toggle: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.dom.VMTokenList}
         * @param {string} token 
         * @returns {boolean}
         */
        function (
            token
        ) {
            /** @type {{ readonly element: Element; readonly classes: string[]; }} */
            var o = Reflect.getInternal(this),
                e = o.element,
                r = o.classes,
                i = r.indexOf(token),
                b = i !== -1;
            if (b) {
                r.splice(i, 1);
            } else {
                r.push(token);
            }
            e.className = r.join(" ");
            return b;
        }
    ),
}, NOOP, "VMTokenList"), {
    init: generateMethodDescriptor(
        /**
         * 
         * @this {Yarla.Proto<Yarla.dom.VMTokenList>}
         * @param {Element} element 
         */
        function (
            element
        ) {
            return Reflect.construct(this, {
                get element() {
                    return element;
                },
                get classes() {
                    return element.className.split(/\s+/).filter(function (i) { return i.length > 0; });
                },
            });
        }
    ),
});
