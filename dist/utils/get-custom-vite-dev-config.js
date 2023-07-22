"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getCustomViteDevConfig = void 0;
var plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
var path_1 = require("path");
var getCustomViteDevConfig = function (_a) {
    var _b = _a.backend, backend = _b === void 0 ? "http://localhost:9000" : _b, _c = _a.port, port = _c === void 0 ? 7001 : _c;
    var uiPath = (0, path_1.resolve)(__dirname, "..", "..", "ui");
    return {
        define: {
            __BASE__: JSON.stringify("/"),
            __MEDUSA_BACKEND_URL__: JSON.stringify(backend)
        },
        plugins: [(0, plugin_react_1["default"])()],
        root: uiPath,
        mode: "development",
        server: {
            port: port
        }
    };
};
exports.getCustomViteDevConfig = getCustomViteDevConfig;
