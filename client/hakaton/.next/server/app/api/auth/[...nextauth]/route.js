'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
;(() => {
    var exports = {}
    exports.id = 'app/api/auth/[...nextauth]/route'
    exports.ids = ['app/api/auth/[...nextauth]/route']
    exports.modules = {
        /***/ '../../client/components/action-async-storage.external':
            /*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
            /***/ (module) => {
                module.exports = require('next/dist/client/components/action-async-storage.external.js')

                /***/
            },

        /***/ '../../client/components/request-async-storage.external':
            /*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
            /***/ (module) => {
                module.exports = require('next/dist/client/components/request-async-storage.external.js')

                /***/
            },

        /***/ '../../client/components/static-generation-async-storage.external':
            /*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
            /***/ (module) => {
                module.exports = require('next/dist/client/components/static-generation-async-storage.external.js')

                /***/
            },

        /***/ 'next/dist/compiled/next-server/app-route.runtime.dev.js':
            /*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
            /***/ (module) => {
                module.exports = require('next/dist/compiled/next-server/app-route.runtime.dev.js')

                /***/
            },

        /***/ assert:
            /*!*************************!*\
  !*** external "assert" ***!
  \*************************/
            /***/ (module) => {
                module.exports = require('assert')

                /***/
            },

        /***/ buffer:
            /*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
            /***/ (module) => {
                module.exports = require('buffer')

                /***/
            },

        /***/ crypto:
            /*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
            /***/ (module) => {
                module.exports = require('crypto')

                /***/
            },

        /***/ events:
            /*!*************************!*\
  !*** external "events" ***!
  \*************************/
            /***/ (module) => {
                module.exports = require('events')

                /***/
            },

        /***/ http:
            /*!***********************!*\
  !*** external "http" ***!
  \***********************/
            /***/ (module) => {
                module.exports = require('http')

                /***/
            },

        /***/ https:
            /*!************************!*\
  !*** external "https" ***!
  \************************/
            /***/ (module) => {
                module.exports = require('https')

                /***/
            },

        /***/ querystring:
            /*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
            /***/ (module) => {
                module.exports = require('querystring')

                /***/
            },

        /***/ url:
            /*!**********************!*\
  !*** external "url" ***!
  \**********************/
            /***/ (module) => {
                module.exports = require('url')

                /***/
            },

        /***/ util:
            /*!***********************!*\
  !*** external "util" ***!
  \***********************/
            /***/ (module) => {
                module.exports = require('util')

                /***/
            },

        /***/ zlib:
            /*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
            /***/ (module) => {
                module.exports = require('zlib')

                /***/
            },

        /***/ '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!':
            /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ "(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ "(rsc)/./node_modules/next/dist/server/future/route-kind.js");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ "(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _home_dima_WEB_hakaton_client_hakaton_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.ts */ "(rsc)/./src/app/api/auth/[...nextauth]/route.ts");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = ""\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: "/api/auth/[...nextauth]/route",\n        pathname: "/api/auth/[...nextauth]",\n        filename: "route",\n        bundlePath: "app/api/auth/[...nextauth]/route"\n    },\n    resolvedPagePath: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/api/auth/[...nextauth]/route.ts",\n    nextConfigOutput,\n    userland: _home_dima_WEB_hakaton_client_hakaton_src_app_api_auth_nextauth_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we\'ve moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = "/api/auth/[...nextauth]/route";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLnRzJmFwcERpcj0lMkZob21lJTJGZGltYSUyRiVEMCU5NCVEMCVCRSVEMCVCQSVEMSU4MyVEMCVCQyVEMCVCNSVEMCVCRCVEMSU4MiVEMSU4QiUyRldFQiUyRmhha2F0b24lMkZjbGllbnQlMkZoYWthdG9uJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZob21lJTJGZGltYSUyRiVEMCU5NCVEMCVCRSVEMCVCQSVEMSU4MyVEMCVCQyVEMCVCNSVEMCVCRCVEMSU4MiVEMSU4QiUyRldFQiUyRmhha2F0b24lMkZjbGllbnQlMkZoYWthdG9uJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3VDO0FBQ3BIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFrYXRvbi8/MTY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvaG9tZS9kaW1hL9CU0L7QutGD0LzQtdC90YLRiy9XRUIvaGFrYXRvbi9jbGllbnQvaGFrYXRvbi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL2hvbWUvZGltYS/QlNC+0LrRg9C80LXQvdGC0YsvV0VCL2hha2F0b24vY2xpZW50L2hha2F0b24vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n',
                )

                /***/
            },

        /***/ '(rsc)/./src/app/api/auth/[...nextauth]/route.ts':
            /*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.ts ***!
  \*************************************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _configs_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/configs/auth */ "(rsc)/./src/configs/auth.ts");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ "(rsc)/./node_modules/next-auth/next/index.js");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__["default"])(_configs_auth__WEBPACK_IMPORTED_MODULE_0__.authConfig);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEyQztBQUNOO0FBRXJDLE1BQU1FLFVBQVVELDBEQUFRQSxDQUFDRCxxREFBVUE7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL2hha2F0b24vLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUudHM/MDA5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoQ29uZmlnIH0gZnJvbSAnQC9jb25maWdzL2F1dGgnXG5pbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoL25leHQnXG5cbmNvbnN0IGhhbmRsZXIgPSBOZXh0QXV0aChhdXRoQ29uZmlnKVxuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH1cbiJdLCJuYW1lcyI6WyJhdXRoQ29uZmlnIiwiTmV4dEF1dGgiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.ts\n',
                )

                /***/
            },

        /***/ '(rsc)/./src/configs/auth.ts':
            /*!*****************************!*\
  !*** ./src/configs/auth.ts ***!
  \*****************************/
            /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                eval(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authConfig: () => (/* binding */ authConfig)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ "(rsc)/./node_modules/next-auth/providers/google.js");\n/* harmony import */ var next_auth_providers_yandex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/yandex */ "(rsc)/./node_modules/next-auth/providers/yandex.js");\n// import Credentials from "next-auth/providers/credentials";\n\n\nconst authConfig = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__["default"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_yandex__WEBPACK_IMPORTED_MODULE_1__["default"])({\n            clientId: process.env.YANDEX_CLIENT_ID,\n            clientSecret: process.env.YANDEX_CLIENT_SECRET\n        })\n    ],\n    pages: {\n        signIn: "/signIn"\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvY29uZmlncy9hdXRoLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLDZEQUE2RDtBQUNOO0FBQ0E7QUFFaEQsTUFBTUUsYUFBMEI7SUFDbkNDLFdBQVc7UUFDUEgsc0VBQWNBLENBQUM7WUFDWEksVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csb0JBQW9CO1FBQ2xEO1FBQ0FSLHNFQUFjQSxDQUFDO1lBQ1hHLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksZ0JBQWdCO1lBQ3RDRixjQUFjSCxRQUFRQyxHQUFHLENBQUNLLG9CQUFvQjtRQUNsRDtLQWtDSDtJQUNEQyxPQUFPO1FBQ0hDLFFBQVE7SUFDWjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWthdG9uLy4vc3JjL2NvbmZpZ3MvYXV0aC50cz9kNzVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnXG4vLyBpbXBvcnQgQ3JlZGVudGlhbHMgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZSdcbmltcG9ydCBZYW5kZXhQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL3lhbmRleCdcblxuZXhwb3J0IGNvbnN0IGF1dGhDb25maWc6IEF1dGhPcHRpb25zID0ge1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCEsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVUISxcbiAgICAgICAgfSksXG4gICAgICAgIFlhbmRleFByb3ZpZGVyKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ZQU5ERVhfQ0xJRU5UX0lEISxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuWUFOREVYX0NMSUVOVF9TRUNSRVQhLFxuICAgICAgICB9KSxcbiAgICAgICAgLy8gQ3JlZGVudGlhbHMoe1xuICAgICAgICAvLyAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgLy8gICAgICAgICBlbWFpbDoge1xuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDogJ2VtYWlsJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgdHlwZTogJ2VtYWlsJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdlbWFpbCcsXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAvLyAgICAgICAgICAgICBsYWJlbDogJ3Bhc3N3b3JkJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgdHlwZTogJ3Bhc3N3b3JkJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdwYXNzd29yZCcsXG4gICAgICAgIC8vICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfSxcbiAgICAgICAgLy8gICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuICAgICAgICAvLyAgICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgZmFrZSA9IFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNyddXG5cbiAgICAgICAgLy8gICAgICAgICBpZiAoZmFrZS5maW5kKHZhbHVlID0+IGNyZWRlbnRpYWxzLmVtYWlsID09PSB2YWx1ZSkpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlkOiBjcmVkZW50aWFscy5lbWFpbCxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5hbWU6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgZW1haWw6IGNyZWRlbnRpYWxzLmVtYWlsLFxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gaW1hZ2U6ICdodHRwczovL2kucHJhdmF0YXIuY2MvMTUwP2ltZz0nICsgY3JlZGVudGlhbHMuZW1haWxcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgICAvLyAgICAgICAgIH1cblxuICAgICAgICAvLyAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH0pXG4gICAgXSxcbiAgICBwYWdlczoge1xuICAgICAgICBzaWduSW46ICcvc2lnbkluJyxcbiAgICB9LFxufVxuIl0sIm5hbWVzIjpbIkdvb2dsZVByb3ZpZGVyIiwiWWFuZGV4UHJvdmlkZXIiLCJhdXRoQ29uZmlnIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiWUFOREVYX0NMSUVOVF9JRCIsIllBTkRFWF9DTElFTlRfU0VDUkVUIiwicGFnZXMiLCJzaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/configs/auth.ts\n',
                )

                /***/
            },
    }
    // load runtime
    var __webpack_require__ = require('../../../../webpack-runtime.js')
    __webpack_require__.C(exports)
    var __webpack_exec__ = (moduleId) => __webpack_require__((__webpack_require__.s = moduleId))
    var __webpack_exports__ = __webpack_require__.X(
        0,
        [
            'vendor-chunks/next',
            'vendor-chunks/next-auth',
            'vendor-chunks/@babel',
            'vendor-chunks/jose',
            'vendor-chunks/openid-client',
            'vendor-chunks/uuid',
            'vendor-chunks/oauth',
            'vendor-chunks/@panva',
            'vendor-chunks/yallist',
            'vendor-chunks/preact-render-to-string',
            'vendor-chunks/oidc-token-hash',
            'vendor-chunks/preact',
            'vendor-chunks/object-hash',
            'vendor-chunks/lru-cache',
            'vendor-chunks/cookie',
        ],
        () =>
            __webpack_exec__(
                '(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.ts&appDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fhome%2Fdima%2F%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B%2FWEB%2Fhakaton%2Fclient%2Fhakaton&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!',
            ),
    )
    module.exports = __webpack_exports__
})()
