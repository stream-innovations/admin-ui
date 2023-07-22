"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.getCustomViteConfig = void 0;
var plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
var path_1 = require("path");
var format_base_1 = require("./format-base");
var getCustomViteConfig = function (config) {
    var _a = config.globals, globals = _a === void 0 ? {} : _a, _b = config.build, build = _b === void 0 ? {} : _b;
    var uiPath = (0, path_1.resolve)(__dirname, "..", "..", "ui");
    var globalReplacements = function () {
        var backend = undefined;
        if (globals.backend) {
            try {
                // Test if the backend is a valid URL
                new URL(globals.backend);
                backend = globals.backend;
            }
            catch (_e) {
                throw new Error("The provided backend URL is not valid: ".concat(globals.backend, ". Please provide a valid URL (e.g. https://my-medusa-server.com)."));
            }
        }
        var global = {};
        global["__BASE__"] = JSON.stringify(globals.base ? "/".concat(globals.base) : "/");
        global["__MEDUSA_BACKEND_URL__"] = JSON.stringify(backend ? backend : "/");
        return global;
    };
    var buildConfig = function () {
        var outDir = build.outDir;
        var destDir;
        if (!outDir) {
            /**
             * Default build directory is at the root of the `@medusajs/admin-ui` package.
             */
            destDir = (0, path_1.resolve)(process.cwd(), "build");
        }
        else {
            /**
             * If a custom build directory is specified, it is resolved relative to the
             * current working directory.
             */
            destDir = (0, path_1.resolve)(process.cwd(), outDir);
        }
        return {
            outDir: destDir,
            emptyOutDir: true
        };
    };
    return {
        plugins: [(0, plugin_react_1["default"])()],
        root: uiPath,
        mode: "production",
        base: (0, format_base_1.formatBase)(globals.base),
        define: globalReplacements(),
        build: buildConfig(),
        resolve: {
            alias: {
                "@tanstack/react-query": (0, path_1.resolve)(require.resolve("@tanstack/react-query"))
            }
        },
        clearScreen: false,
        logLevel: "error"
    };
};
exports.getCustomViteConfig = getCustomViteConfig;
