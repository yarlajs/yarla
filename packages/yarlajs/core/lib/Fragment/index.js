import skrinkSerializer from "../../module/standard/skrinkSerializer/index.js";

export default skrinkSerializer(
    /**
     * 
     * @param {Yarla.ChildrenAttributes} props 
     */
    function (
        props
    ) {
        return props.children;
    }
);
