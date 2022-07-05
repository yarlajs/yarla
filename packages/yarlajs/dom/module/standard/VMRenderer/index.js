import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import message from "@yarlajs/core/module/constant/message/index.js";
import defineProperties from "@yarlajs/core/module/standard/defineProperties/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import getOwnPropertyDescriptors from "@yarlajs/core/module/standard/getOwnPropertyDescriptors/index.js";
import generateGetterDescriptor from "@yarlajs/core/module/standard/generateGetterDescriptor/index.js";
import generateMethodDescriptor from "@yarlajs/core/module/standard/generateMethodDescriptor/index.js";
import generateNormalDescriptor from "@yarlajs/core/module/standard/generateNormalDescriptor/index.js";
import generateClass from "@yarlajs/core/module/standard/generateClass/index.js";
import isNullOrUndefined from "@yarlajs/core/lib/isNullOrUndefined/index.js";
import isInstanceOf from "@yarlajs/core/lib/isInstanceOf/index.js";
import isFunction from "@yarlajs/core/lib/isFunction/index.js";
import VMElement from "@yarlajs/core/lib/VMElement/index.js";
import isNumber from "@yarlajs/core/lib/isNumber/index.js";
import Reflect from "@yarlajs/core/lib/Reflect/index.js";
import flat from "@yarlajs/core/lib/flat/index.js";
import zone from "@yarlajs/core/lib/zone/index.js";
import env from "../../constant/env/index.js";
import EffectionCollection from "../EffectionCollection/index.js";
import MemorableCollection from "../MemorableCollection/index.js";
import ReferenceCollection from "../ReferenceCollection/index.js";
import SituationCollection from "../SituationCollection/index.js";
import isDrearyComponent from "../isDrearyComponent/index.js";
import isShadowComponent from "../isShadowComponent/index.js";
import removeAttribute from "../removeAttribute/index.js";
import getSelfClosing from "../getSelfClosing/index.js";
import judgmentRedraw from "../judgmentRedraw/index.js";
import createTextNode from "../createTextNode/index.js";
import createFragment from "../createFragment/index.js";
import createElement from "../createElement/index.js";
import judgmentEvent from "../judgmentEvent/index.js";
import setAttribute from "../setAttribute/index.js";
import insertBefore from "../insertBefore/index.js";
import isConnected from "../isConnected/index.js";
import compare from "../compare/index.js";
import remove from "../remove/index.js";
import bean from "../bean/index.js";

export default (function () {
    /**
     * 
     * @param {number} phase
     * @param {Yarla.Object<T, (this: Yarla.dom.VMRenderer, ...argv: any[]) => any>} processor
     * @returns {T}
     * @template T 
     */
    function generate(
        phase,
        processor
    ) {
        // @ts-ignore
        return skrinkSerializer(
            /**
             * @this {Yarla.dom.VMRenderer}
             */
            function () {
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer>} */
                var instance = Reflect.getInternal(this);
                instance.effections.reset();
                instance.references.reset();
                instance.situations.reset();
                try {
                    return instance.phase = phase, zone.scope(this, function () {
                        // @ts-ignore
                        return processor.apply(this, arguments);
                        //
                    }, flat(arguments));
                } finally {
                    instance.phase = Renderer.NONE;
                }
            }
        );
    }
    /**
     * 
     * @param {Yarla.Object<T, (this: Yarla.dom.VMRenderer, ...argv: any[]) => any>} processor
     * @returns {Yarla.NormalPropertyDescriptor<T>}
     * @template T 
     */
    function generateCreateDescriptor(
        processor
    ) {
        return generateNormalDescriptor(generate(Renderer.PHASE_CREATING, processor));
    }
    /**
     * 
     * @param {Yarla.Object<T, (this: Yarla.dom.VMRenderer, ...argv: any[]) => any>} processor
     * @returns {Yarla.NormalPropertyDescriptor<T>}
     * @template T 
     */
    function generateUpdateDescriptor(
        processor
    ) {
        return generateNormalDescriptor(generate(Renderer.PHASE_UPDATING, processor));
    }
    /**
     * 
     * @param {Yarla.dom.VMRenderer} instance 
     * @param {ReadonlyArray<any>} children 
     * @param {Document} document 
     * @param {string | null} namespaceURI 
     * @param {any} context 
     */
    function applyChildrenCreate(
        instance,
        children,
        document,
        namespaceURI,
        context
    ) {
        for (var
            i = 0,
            l = children.length;
            i < l;
            i++
        ) {
            var r = Renderer.init(instance, children[i], instance.defer);
            var n = r.create(children[i], document, namespaceURI, context);
            insertBefore(instance.target, n);
            instance.children.push(r);
        }
    }
    /**
     * 
     * @param {Yarla.dom.VMRenderer} instance 
     * @param {ReadonlyArray<Yarla.VMNode>} children 
     * @param {Document} document 
     * @param {string | null} namespaceURI 
     * @param {any} context 
     */
    function applyChildrenUpdate(
        instance,
        children,
        document,
        namespaceURI,
        context
    ) {
        /**
         * 
         * @param {object} oldRenderer 
         * @param {Yarla.VMNode} oldRenderer.VMNode
         * @param {object} newRenderer 
         * @param {Yarla.VMNode} newRenderer.VMNode
         * @returns {boolean}
         */
        function VMModCompareWithElements(
            oldRenderer,
            newRenderer
        ) {
            return !judgmentRedraw(oldRenderer.VMNode, newRenderer.VMNode);
        }
        /**
         * 
         * @param {Node | null} previous 
         * @param {Node} node 
         * @param {boolean} [need] 
         */
        function VMModMoveOrInsertElement(
            previous,
            node,
            need
        ) {
            if (need || !isConnected(node)) {
                insertBefore(instance.target, node, previous);
            }
        }
        /**
         * 
         * @param {object} oldRenderer 
         * @param {Node} oldRenderer.target
         */
        function VMModGetOldRenderElement(
            oldRenderer
        ) {
            return oldRenderer.target;
        }
        /**
         * 
         * @param {object} newRenderer 
         * @param {Node | null} newRenderer.target
         */
        function VMModGetNewRenderElement(
            newRenderer
        ) {
            return newRenderer ? newRenderer.target : null;
        }
        /**
         * 
         * @param {Yarla.dom.VMRenderer} oldRenderer 
         * @param {object} newRenderer 
         * @param {Yarla.VMNode} newRenderer.VMNode
         * @param {Node | null} newRenderer.target
         * @param {number} index
         */
        function VMModInvokeUpdateElement(
            oldRenderer,
            newRenderer,
            index
        ) {
            newRenderer.target = oldRenderer.update(newRenderer.VMNode, document, namespaceURI, context);
            newCollection[index] = oldRenderer;
            return newRenderer.target;
        }
        /**
         * 
         * @param {object} newRenderer 
         * @param {Yarla.VMNode} newRenderer.VMNode
         * @param {Node | null} newRenderer.target
         * @param {number} start 
         * @param {number} end 
         */
        function VMModGetIndexFromMembers(
            newRenderer,
            start,
            end
        ) {
            oldTokenPairs = oldTokenPairs || VMModCreateIndexMapByKey(start, end);
            oldTokenIndex = isInstanceOf(newRenderer.VMNode, VMElement) && !isNullOrUndefined(newRenderer.VMNode.key) ? oldTokenPairs[newRenderer.VMNode.key] : VMModFindIndexByIterator(newRenderer, start, end);
        }
        /**
         * 
         * @param {number} start 
         * @param {number} end 
         * @returns {Readonly<Record<string, number | undefined>>}
         */
        function VMModCreateIndexMapByKey(
            start,
            end
        ) {
            /** @type {Record<string, number | undefined>} */
            var r = {};
            for (var
                i = start;
                i < end + 1;
                i++
            ) {
                var VMNode = oldRenderers[i].VMNode;
                if (isInstanceOf(VMNode, VMElement) && !isNullOrUndefined(VMNode.key)) {
                    r[VMNode.key] = i;
                }
            }
            return r;
        }
        /**
         * 
         * @param {object} newRenderer 
         * @param {Yarla.VMNode} newRenderer.VMNode
         * @param {Node | null} newRenderer.target
         * @param {number} start 
         * @param {number} end 
         */
        function VMModFindIndexByIterator(
            newRenderer,
            start,
            end
        ) {
            for (var
                i = start;
                i < end + 1;
                i++
            ) {
                if (oldRenderers[i] && VMModCompareWithElements(oldRenderers[i], newRenderer)) {
                    return i;
                }
            }
        }
        /**
         * 
         * @param {object} newRenderer 
         * @param {Yarla.VMNode} newRenderer.VMNode
         * @param {Node | null} newRenderer.target
         * @param {number} index 
         */
        function VMModCreateOrUpdateVMsgr(
            newRenderer,
            index
        ) {
            if (isNumber(oldTokenIndex)) {
                var oldRenderer = oldRenderers[oldTokenIndex];
                if (VMModCompareWithElements(oldRenderer, newRenderer)) {
                    // @ts-ignore
                    oldRenderers[oldTokenIndex] = null;
                    return VMModInvokeUpdateElement(oldRenderer, newRenderer, index);
                }
            }
            return VMModCreateSingleElement(newRenderer, index);
        }
        /**
         * 
         * @param {object} newRenderer 
         * @param {Yarla.VMNode} newRenderer.VMNode
         * @param {Node | null} newRenderer.target
         * @param {number} index 
         */
        function VMModCreateSingleElement(
            newRenderer,
            index
        ) {
            var r = Renderer.init(instance, newRenderer.VMNode, instance.defer);
            newRenderer.target = r.create(newRenderer.VMNode, document, namespaceURI, context);
            newCollection[index] = r;
            return newRenderer.target;
        }
        /**
         * 
         * @param {Node | null} previous 
         * @param {number} start
         * @param {number} end
         */
        function VMModBatchCreateElements(
            previous,
            start,
            end
        ) {
            for (var
                i = start;
                i < end + 1;
                i++
            ) {
                VMModMoveOrInsertElement(
                    previous,
                    VMModCreateSingleElement(newRenderers[i], i),
                    true
                );
            }
        }
        /**
         * 
         * @param {number} start
         * @param {number} end
         */
        function VMModBatchRemoveElements(
            start,
            end
        ) {
            for (var
                i = start;
                i < end + 1;
                i++
            ) {
                var n = oldRenderers[i];
                if (n) {
                    n.remove();
                }
            }
        }
        var oldRenderers = instance.children;
        var newRenderers = children.map(function (i) {
            return {
                VMNode: i,
                target: null,
            };
        });
        /** @type {number | undefined} */
        var oldTokenIndex;
        /** @type {Readonly<Record<string, number | undefined>>} */
        var oldTokenPairs;
        var oldStartIndex = 0;
        var newStartIndex = 0;
        var oldEndedIndex = oldRenderers.length - 1;
        var oldStartVMsgr = oldRenderers[0];
        var oldEndedVMsgr = oldRenderers[oldEndedIndex];
        var newEndedIndex = newRenderers.length - 1;
        var newStartVMsgr = newRenderers[0];
        var newEndedVMsgr = newRenderers[newEndedIndex];
        var newCollection = new Array(children.length);
        while (oldStartIndex <= oldEndedIndex && newStartIndex <= newEndedIndex) {
            if (isNullOrUndefined(oldStartVMsgr)) {
                oldStartVMsgr = oldRenderers[++oldStartIndex];
            } else if (isNullOrUndefined(oldEndedVMsgr)) {
                oldEndedVMsgr = oldRenderers[--oldEndedIndex];
            } else if (VMModCompareWithElements(oldStartVMsgr, newStartVMsgr)) {
                VMModMoveOrInsertElement(
                    VMModGetOldRenderElement(oldStartVMsgr).nextSibling,
                    VMModInvokeUpdateElement(oldStartVMsgr, newStartVMsgr, newStartIndex)
                );
                oldStartVMsgr = oldRenderers[++oldStartIndex];
                newStartVMsgr = newRenderers[++newStartIndex];
            } else if (VMModCompareWithElements(oldEndedVMsgr, newEndedVMsgr)) {
                VMModMoveOrInsertElement(
                    VMModGetOldRenderElement(oldEndedVMsgr).nextSibling,
                    VMModInvokeUpdateElement(oldEndedVMsgr, newEndedVMsgr, newEndedIndex)
                );
                oldEndedVMsgr = oldRenderers[--oldEndedIndex];
                newEndedVMsgr = newRenderers[--newEndedIndex];
            } else if (VMModCompareWithElements(oldStartVMsgr, newEndedVMsgr)) {
                VMModMoveOrInsertElement(
                    VMModGetOldRenderElement(oldEndedVMsgr).nextSibling,
                    VMModInvokeUpdateElement(oldStartVMsgr, newEndedVMsgr, newEndedIndex),
                    true
                );
                oldStartVMsgr = oldRenderers[++oldStartIndex];
                newEndedVMsgr = newRenderers[--newEndedIndex];
            } else if (VMModCompareWithElements(oldEndedVMsgr, newStartVMsgr)) {
                VMModMoveOrInsertElement(
                    VMModGetOldRenderElement(oldStartVMsgr),
                    VMModInvokeUpdateElement(oldEndedVMsgr, newStartVMsgr, newStartIndex),
                    true
                );
                oldEndedVMsgr = oldRenderers[--oldEndedIndex];
                newStartVMsgr = newRenderers[++newStartIndex];
            } else {
                VMModGetIndexFromMembers(newStartVMsgr, oldStartIndex, oldEndedIndex);
                VMModMoveOrInsertElement(
                    VMModGetOldRenderElement(oldStartVMsgr),
                    VMModCreateOrUpdateVMsgr(newStartVMsgr, newStartIndex),
                    true
                );
                newStartVMsgr = newRenderers[++newStartIndex];
            }
        }
        if (oldStartIndex > oldEndedIndex) {
            VMModBatchCreateElements(
                VMModGetNewRenderElement(newRenderers[newEndedIndex + 1]), newStartIndex, newEndedIndex);
        } else if (newStartIndex > newEndedIndex) {
            VMModBatchRemoveElements(oldStartIndex, oldEndedIndex);
        }
        Reflect.getInternal(instance).children = newCollection;
    }
    /**
     * 
     * @param {Yarla.VMElement} VMElement 
     * @param {any} context 
     */
    function applyNodeDirectives(
        VMElement,
        context
    ) {
        var cmd = VMElement.cmd;
        if (cmd) {
            for (var
                i = 0,
                l = cmd.length;
                i < l;
                i++
            ) {
                cmd[i].call(null, VMElement.props, context);
            }
        }
    }
    /**
     * 
     * @param {Yarla.VMElement} VMElement 
     * @param {Yarla.dom.VMRenderer} renderer 
     */
    function applyNodeReferences(
        VMElement,
        renderer
    ) {
        var ref = VMElement.ref;
        if (ref) {
            Reflect.getInternal(ref).target = renderer.target;
        }
    }
    /**
     * 
     * @param {Element} element 
     * @param {Readonly<Record<string, any>>} properties 
     */
    function defineElementProperties(
        element,
        properties
    ) {
        for (var name in properties) {
            var event;
            if (event = judgmentEvent(name)) {
                bean.attach(element, event.type, properties[name], event.opts);
            } else {
                setAttribute(element, name, properties[name]);
            }
        }
    }
    /**
     * 
     * @param {Element} element 
     * @param {Readonly<Record<string, any>>} properties 
     */
    function deleteElementProperties(
        element,
        properties
    ) {
        for (var name in properties) {
            var event;
            if (event = judgmentEvent(name)) {
                bean.detach(element, event.type, properties[name], event.opts);
            } else {
                removeAttribute(element, name);
            }
        }
    }
    /**
     * 
     * @param {Element} element 
     * @param {object} properties
     * @param {Readonly<Readonly<Record<string, any>>>} properties.added
     * @param {Readonly<Readonly<Record<string, any>>>} properties.deleted
     * @param {Readonly<Record<string, readonly [any, any]>>} properties.updated
     */
    function updateElementProperties(
        element,
        properties
    ) {
        defineElementProperties(element, properties.added);
        deleteElementProperties(element, properties.deleted);
        for (var name in properties.updated) {
            var event;
            if (event = judgmentEvent(name)) {
                bean.replace(element, event.type, properties.updated[name], event.opts);
            } else {
                setAttribute(element, name, properties.updated[name][1]);
            }
        }
    }
    var Renderer = defineProperties(generateClass(Reflect.BASE, {
        defer: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Yarla.dom.Defer}
             */
            function () {
                return Reflect.getInternal(this).defer;
            }
        ),
        phase: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {number}
             */
            function () {
                return Reflect.getInternal(this).phase;
            }
        ),
        parent: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Yarla.dom.VMRenderer | null}
             */
            function () {
                return Reflect.getInternal(this).parent;
            }
        ),
        target: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Node}
             */
            function () {
                var target = Reflect.getInternal(this).target;
                Reflect.set(target, Reflect.expr.RENDERER, this);
                return target;
            }
        ),
        VMNode: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Yarla.VMNode}
             */
            function () {
                return Reflect.getInternal(this).VMNode;
            }
        ),
        children: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Array<Yarla.dom.VMRenderer>}
             */
            function () {
                return Reflect.getInternal(this).children;
            }
        ),
        effections: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Yarla.dom.EffectionCollection}
             */
            function () {
                return Reflect.getInternal(this).effections;
            }
        ),
        memorables: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Yarla.dom.MemorableCollection}
             */
            function () {
                return Reflect.getInternal(this).effections;
            }
        ),
        references: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Yarla.dom.ReferenceCollection}
             */
            function () {
                return Reflect.getInternal(this).references;
            }
        ),
        situations: generateGetterDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {Yarla.dom.SituationCollection}
             */
            function () {
                return Reflect.getInternal(this).situations;
            }
        ),
        useRef: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @param {T} [target] 
             * @returns {Yarla.RefObject<T>}
             * @template T
             */
            function (
                target
            ) {
                if (this.phase === Renderer.PHASE_CREATING) {
                    return this.references.push(target);
                }
                if (this.phase === Renderer.PHASE_UPDATING) {
                    return this.references.next(target);
                }
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        useMemo: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @param {() => T} factory 
             * @param {ReadonlyArray<any>} [dependencies] 
             * @returns {T}
             * @template T
             */
            function (
                factory,
                dependencies
            ) {
                if (this.phase === Renderer.PHASE_CREATING) {
                    return this.memorables.push(factory, dependencies);
                }
                if (this.phase === Renderer.PHASE_UPDATING) {
                    return this.memorables.next(factory, dependencies);
                }
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        useState: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @param {T} [state] 
             * @returns {Yarla.Situation<T>}
             * @template T
             */
            function (
                state
            ) {
                if (this.phase === Renderer.PHASE_CREATING) {
                    return this.situations.push(state);
                }
                if (this.phase === Renderer.PHASE_UPDATING) {
                    return this.situations.next(state);
                }
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        useTarget: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @param {T & ThisType<T & Yarla.Node>} [patulous] 
             * @returns {T & Yarla.Node}
             * @template T
             */
            function (
                patulous
            ) {
                // @ts-ignore
                return defineProperties(bean.wrap(this.target), getOwnPropertyDescriptors(patulous || {}));
            }
        ),
        useEffect: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.Effection} effection 
             * @param {ReadonlyArray<any>} [dependencies] 
             */
            function (
                effection,
                dependencies
            ) {
                if (this.phase === Renderer.PHASE_CREATING) {
                    return this.defer.push(this.effections.push(effection, dependencies));
                }
                if (this.phase === Renderer.PHASE_UPDATING) {
                    return this.defer.push(this.effections.next(effection, dependencies));
                }
                throw new Error(message.ILLEGAL_INVOCATION);
            }
        ),
        create: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_IMPLEMENTED);
            }
        ),
        update: generateMethodDescriptor(
            function () {
                throw new Error(message.NOT_IMPLEMENTED);
            }
        ),
        remove: generateMethodDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @returns {void}
             */
            function () {
                this.children.forEach(
                    function (i) {
                        i.remove();
                    }
                );
                this.effections.destroy();
                this.references.destroy();
                this.situations.destroy();
                bean.destroy(this.target);
                remove(this.target);
            }
        ),
    }, NOOP, "Renderer"), {
        NONE: generateNormalDescriptor(0, true, true),
        PHASE_CREATING: generateNormalDescriptor(1, true, true),
        PHASE_UPDATING: generateNormalDescriptor(2, true, true),
        init: generateMethodDescriptor(
            /**
             * 
             * @param {Yarla.dom.VMRenderer | null} parent
             * @param {Yarla.VMNode} VMNode 
             * @param {Yarla.dom.Defer} defer 
             * @returns {Yarla.dom.VMRenderer}
             */
            function (
                parent,
                VMNode,
                defer
            ) {
                return Reflect.construct((function () {
                    if (isInstanceOf(VMNode, VMElement)) {
                        if (isFunction(VMNode.type)) {
                            if (isShadowComponent(VMNode.type)) {
                                return GalleryRenderer;
                            }
                            return VirtualRenderer;
                        }
                        return ElementRenderer;
                    }
                    return ContentRenderer;
                }()), {
                    defer: defer,
                    phase: Renderer.NONE,
                    target: null,
                    parent: parent || null,
                    VMNode: VMNode,
                    children: [],
                    effections: EffectionCollection.init(),
                    memorables: MemorableCollection.init(),
                    references: ReferenceCollection.init(),
                    situations: SituationCollection.init(),
                });
            }
        ),
    });
    var VirtualRenderer = generateClass(Reflect.BASE, {
        create: generateCreateDescriptor(
            /**
             *
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
             * @param {Document} document
             * @param {string | null} namespaceURI
             * @param {any} context
             * @returns {Node}
             */
            function (
                VMNode,
                document,
                namespaceURI,
                context
            ) {
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Node, Yarla.VMElement>>} */
                var instance = Reflect.getInternal(this);
                instance.target = createFragment(VMNode.type, document);
                applyChildrenCreate(this, flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                applyNodeDirectives(VMNode, context);
                applyNodeReferences(VMNode, this);
                instance.VMNode = VMNode;
                return instance.target;
            }
        ),
        update: generateUpdateDescriptor(
            /**
             *
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
             * @param {Document} document
             * @param {string | null} namespaceURI
             * @param {any} context
             * @returns {Node}
             */
            function (
                VMNode,
                document,
                namespaceURI,
                context
            ) {
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Node, Yarla.VMElement>>} */
                var instance = Reflect.getInternal(this);
                if (isDrearyComponent(VMNode.type)) {
                    instance.VMNode = VMNode;
                    return instance.target;
                }
                applyChildrenUpdate(this, flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                applyNodeDirectives(VMNode, context);
                applyNodeReferences(VMNode, this);
                instance.VMNode = VMNode;
                return instance.target;
            }
        ),
    }, Renderer, "VirtualRenderer");
    var GalleryRenderer = generateClass(Reflect.BASE, {
        create: generateCreateDescriptor(
            /**
             *
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
             * @param {Document} document
             * @param {string | null} namespaceURI
             * @param {any} context
             * @returns {Element}
             */
            function (
                VMNode,
                document,
                namespaceURI,
                context
            ) {
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                var instance = Reflect.getInternal(this);
                instance.target = createElement(Reflect.getMetadata(VMNode.type).tagName || "yarla-component", document, namespaceURI);
                if (instance.target.attachShadow) {
                    instance.target.attachShadow({ mode: "open" });
                }
                applyChildrenCreate(this, flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                applyNodeDirectives(VMNode, context);
                applyNodeReferences(VMNode, this);
                instance.VMNode = VMNode;
                return instance.target;
            }
        ),
        update: generateUpdateDescriptor(
            /**
             *
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.VMElement<Yarla.Component<any>>} VMNode
             * @param {Document} document
             * @param {string | null} namespaceURI
             * @param {any} context
             * @returns {Element}
             */
            function (
                VMNode,
                document,
                namespaceURI,
                context
            ) {
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                var instance = Reflect.getInternal(this);
                if (isDrearyComponent(VMNode.type)) {
                    instance.VMNode = VMNode;
                    return instance.target;
                }
                applyChildrenUpdate(this, flat([VMNode.type.call(null, VMNode.props, context)], 0, Infinity, true), document, namespaceURI, context);
                applyNodeDirectives(VMNode, context);
                applyNodeReferences(VMNode, this);
                instance.VMNode = VMNode;
                return instance.target;
            }
        ),
    }, Renderer, "GalleryRenderer");
    var ElementRenderer = generateClass(Reflect.BASE, {
        create: generateCreateDescriptor(
            /**
             *
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.VMElement<string>} VMNode
             * @param {Document} document
             * @param {string | null} namespaceURI
             * @param {any} context
             * @returns {Element}
             */
            function (
                VMNode,
                document,
                namespaceURI,
                context
            ) {
                if (VMNode.type === "svg") {
                    namespaceURI = env.namespaceURI.SVG;
                }
                if (VMNode.type === "math") {
                    namespaceURI = env.namespaceURI.MathML;
                }
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                var instance = Reflect.getInternal(this);
                instance.target = createElement(VMNode.type, document, namespaceURI);
                defineElementProperties(instance.target, VMNode.props);
                if (getSelfClosing(VMNode.type)) {
                    if (VMNode.props.children.length > 0) {
                        throw new Error(message.SELF_CLOSING_ELEMENTS_CANNOT_CONTAIN_CHILD_NODES + ": " + VMNode.type);
                    }
                }
                applyChildrenCreate(this, VMNode.props.children, document, namespaceURI, context);
                applyNodeDirectives(VMNode, context);
                applyNodeReferences(VMNode, this);
                instance.VMNode = VMNode;
                return instance.target;
            }
        ),
        update: generateUpdateDescriptor(
            /**
             *
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.VMElement<string>} VMNode
             * @param {Document} document
             * @param {string | null} namespaceURI
             * @param {any} context
             * @returns {Element}
             */
            function (
                VMNode,
                document,
                namespaceURI,
                context
            ) {
                if (VMNode.type === "svg") {
                    namespaceURI = env.namespaceURI.SVG;
                }
                if (VMNode.type === "math") {
                    namespaceURI = env.namespaceURI.MathML;
                }
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Element, Yarla.VMElement>>} */
                var instance = Reflect.getInternal(this);
                updateElementProperties(instance.target, compare(instance.VMNode.props, VMNode.props));
                applyChildrenUpdate(this, VMNode.props.children, document, namespaceURI, context);
                applyNodeDirectives(VMNode, context);
                applyNodeReferences(VMNode, this);
                instance.VMNode = VMNode;
                return instance.target;
            }
        ),
    }, Renderer, "ElementRenderer");
    var ContentRenderer = generateClass(Reflect.BASE, {
        create: generateCreateDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.Text} VMNode 
             * @param {Document} document 
             * @returns {Text}
             */
            function (
                VMNode,
                document
            ) {
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Text>>} */
                var instance = Reflect.getInternal(this);
                instance.target = createTextNode(isNullOrUndefined(VMNode) ? "" : String(VMNode), document);
                instance.VMNode = VMNode;
                return instance.target;
            }
        ),
        update: generateUpdateDescriptor(
            /**
             * 
             * @this {Yarla.dom.VMRenderer}
             * @param {Yarla.Text} VMNode 
             * @returns {Text}
             */
            function (
                VMNode
            ) {
                /** @type {Yarla.Writable<Yarla.dom.VMRenderer<Text>>} */
                var instance = Reflect.getInternal(this);
                if (instance.VMNode !== VMNode) {
                    instance.target.textContent = isNullOrUndefined(VMNode) ? "" : String(VMNode);
                    instance.VMNode = VMNode;
                }
                return instance.target;
            }
        ),
    }, Renderer, "ContentRenderer");
    return Renderer;
}());
