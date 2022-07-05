import url from "@yarlajs/core/module/internal/url/index.js";
import process from "@yarlajs/core/module/internal/process/index.js";
import location from "@yarlajs/core/module/internal/location/index.js";

export default {
    BASE_URI: location ? location.protocol + "//" + location.host : url.pathToFileURL(process.cwd()),
};
