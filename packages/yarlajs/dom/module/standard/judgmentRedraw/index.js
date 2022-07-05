import skrinkSerializer from "@yarlajs/core/module/standard/skrinkSerializer/index.js";
import isInstanceOf from "@yarlajs/core/lib/isInstanceOf/index.js";
import VMElement from "@yarlajs/core/lib/VMElement/index.js";
import getTypeSimilar from "../getTypeSimilar/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.VMElement} VMNode1 
     * @param {Yarla.VMElement} VMNode2 
     */
    function (
        VMNode1,
        VMNode2
    ) {
        var i1 = isInstanceOf(VMNode1, VMElement);
        var i2 = isInstanceOf(VMNode2, VMElement);
        if (i1 !== i2) {
            return true;
        }
        if (i1) {
            var k1 = VMNode1.key;
            var k2 = VMNode2.key;
            if (k1 !== k2) {
                return true;
            }
            var t1 = VMNode1.type;
            var t2 = VMNode2.type;
            if (t1 !== t2) {
                return true;
            }
            if (t1 === "input") {
                var p1 = VMNode1.props.type;
                var p2 = VMNode2.props.type;
                if (p1 !== p2) {
                    return getTypeSimilar(p1) !== getTypeSimilar(p2);
                }
            }
        }
        return false;
    }
);
