import process from "@yarlajs/core/module/internal/process/index.js";
import definition from "@yarlajs/core/module/constant/definition/index.js";

export default {
    DEVELOPMENT: process ? process.env.NODE_ENV === definition.DEVELOPMENT : false,
};
