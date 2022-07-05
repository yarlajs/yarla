import NOOP from "@yarlajs/core/module/constant/NOOP/index.js";
import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import zone from "@yarlajs/core/lib/zone/index.js";
import Defer from "../../module/standard/Defer/index.js";
import VMRenderer from "../../module/standard/VMRenderer/index.js";
import insertBefore from "../../module/standard/insertBefore/index.js";
import isConnected from "../../module/standard/isConnected/index.js";
import clear from "../../module/standard/clear/index.js";
import history from "../history/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.VMNode} VMNode 
     * @param {HTMLElement | SVGElement | MathMLElement} container 
     * @param {any} [context] 
     * @param {boolean} [ignoreUpdate] 
     */
    function (
        VMNode,
        container,
        context,
        ignoreUpdate
    ) {
        var defer = Defer.init();
        var renderer = VMRenderer.init(null, VMNode, defer);
        var popstate = history.listen(skrinkSerializer(NOOP));
        var document = container.ownerDocument;
        var namespaceURI = container.namespaceURI;
        if (document.isDefaultNamespace(namespaceURI)) {
            namespaceURI = null;
        }
        var element = renderer.create(VMNode, document, namespaceURI, context);
        clear(container);
        insertBefore(container, element);
        defer.digest();
        return zone.mount({
            forceUpdate: skrinkSerializer(
                function () {
                    var element = renderer.update(VMNode, document, namespaceURI, context);
                    if (isConnected(element)) {
                        defer.digest();
                        return;
                    }
                    clear(container);
                    insertBefore(container, element);
                    defer.digest();
                }
            ),
            unmount: skrinkSerializer(
                function () {
                    popstate.cancel();
                    renderer.remove();
                }
            ),
        }, ignoreUpdate);
    }
);
