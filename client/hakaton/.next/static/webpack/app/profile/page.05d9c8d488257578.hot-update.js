"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/page.tsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/profile/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_item_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/item/item */ \"(app-pages-browser)/./src/components/item/item.tsx\");\n/* harmony import */ var _components_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings */ \"(app-pages-browser)/./src/app/profile/components/settings.tsx\");\n/* harmony import */ var _components_family__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/family */ \"(app-pages-browser)/./src/app/profile/components/family.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Profile = ()=>{\n    var _session_data, _session_data1, _session_data_user, _session_data_user1, _session_data2, _session_data_user2, _session_data3;\n    _s();\n    // const session = await getServerSession(authConfig)\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    // const theme = useTheme()\n    console.log(((_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user) && Object.keys((_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : _session_data1.user));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: {\n            margin: 0.5\n        },\n        children: (session === null || session === void 0 ? void 0 : session.status) === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                component: \"div\",\n                sx: {\n                    display: \"grid\",\n                    gridTemplateRows: \"100px 500px 172px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: ((_session_data_user = session.data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileInfo),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: session.data.user.image,\n                                    alt: \"\",\n                                    width: 66,\n                                    height: 66\n                                }, void 0, false, {\n                                    fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftMargin),\n                                            children: (_session_data2 = session.data) === null || _session_data2 === void 0 ? void 0 : (_session_data_user1 = _session_data2.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            style: {\n                                                opacity: 0.9\n                                            },\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftMargin),\n                                            children: (_session_data3 = session.data) === null || _session_data3 === void 0 ? void 0 : (_session_data_user2 = _session_data3.user) === null || _session_data_user2 === void 0 ? void 0 : _session_data_user2.email\n                                        }, void 0, false, {\n                                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 37\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_family__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Profile, \"TLdHK4K4L7Pm+aVG7dSGM4qSxic=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXNDO0FBQ007QUFDa0Q7QUFDaEU7QUFJVztBQUNHO0FBQ0o7QUFHeEMsTUFBTU8sVUFBNkI7UUFLbkJDLGVBQWtDQSxnQkFhckJBLG9CQUk4Q0EscUJBQUFBLGdCQUU5QkEscUJBQUFBOztJQXZCekMscURBQXFEO0lBQ3JELE1BQU1BLFVBQVVQLDJEQUFVQTtJQUMxQiwyQkFBMkI7SUFFM0JRLFFBQVFDLEdBQUcsQ0FBQ0YsRUFBQUEsZ0JBQUFBLFFBQVFHLElBQUksY0FBWkgsb0NBQUFBLGNBQWNJLElBQUksS0FBSUMsT0FBT0MsSUFBSSxFQUFDTixpQkFBQUEsUUFBUUcsSUFBSSxjQUFaSCxxQ0FBQUEsZUFBY0ksSUFBSTtJQUNoRSxxQkFDSSw4REFBQ0c7UUFBS0MsT0FBTztZQUFFQyxRQUFRO1FBQUk7a0JBQ3RCVCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNVLE1BQU0sTUFBSyxpQ0FDakI7c0JBQ0ksNEVBQUNoQiwrRUFBR0E7Z0JBQ0FpQixXQUFVO2dCQUNWQyxJQUFJO29CQUNBQyxTQUFTO29CQUNUQyxrQkFBa0I7Z0JBQ3RCOztrQ0FFQSw4REFBQ2xCLDZEQUFJQTtrQ0FDQUksRUFBQUEscUJBQUFBLFFBQVFHLElBQUksQ0FBQ0MsSUFBSSxjQUFqQkoseUNBQUFBLG1CQUFtQmUsS0FBSyxtQkFDckIsOERBQUNDOzRCQUFJQyxXQUFXekIscUVBQWtCOzs4Q0FDOUIsOERBQUNHLGtEQUFLQTtvQ0FBQ3dCLEtBQUtuQixRQUFRRyxJQUFJLENBQUNDLElBQUksQ0FBQ1csS0FBSztvQ0FBRUssS0FBSTtvQ0FBR0MsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7OzhDQUMvRCw4REFBQ0M7O3NEQUNHLDhEQUFDQzs0Q0FBR1AsV0FBV3pCLG9FQUFpQjt1REFBR1EsaUJBQUFBLFFBQVFHLElBQUksY0FBWkgsc0NBQUFBLHNCQUFBQSxlQUFjSSxJQUFJLGNBQWxCSiwwQ0FBQUEsb0JBQW9CMEIsSUFBSTs7Ozs7O3NEQUMzRCw4REFBQ0M7NENBQUduQixPQUFPO2dEQUFFb0IsU0FBUzs0Q0FBSTs0Q0FBR1gsV0FBV3pCLG9FQUFpQjt1REFDcERRLGlCQUFBQSxRQUFRRyxJQUFJLGNBQVpILHNDQUFBQSxzQkFBQUEsZUFBY0ksSUFBSSxjQUFsQkosMENBQUFBLG9CQUFvQjZCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU05Qyw4REFBQ2pDLDZEQUFJQTtrQ0FDRCw0RUFBQ0UsMERBQU1BOzs7Ozs7Ozs7O2tDQUVYLDhEQUFDRiw2REFBSUE7a0NBQ0QsNEVBQUNDLDREQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9yQztHQXpDTUU7O1FBRWNOLHVEQUFVQTs7O0tBRnhCTTtBQTJDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvcGFnZS50c3g/YzRlNiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyBCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MsIEJveCwgVG9nZ2xlQnV0dG9uLCBUb2dnbGVCdXR0b25Hcm91cCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBGYWNlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0ZhY2UnXG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCBJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9pdGVtL2l0ZW0nXG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi9jb21wb25lbnRzL3NldHRpbmdzJ1xuaW1wb3J0IEZhbWlseSBmcm9tICcuL2NvbXBvbmVudHMvZmFtaWx5J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuXG5jb25zdCBQcm9maWxlOiBGdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoQ29uZmlnKVxuICAgIGNvbnN0IHNlc3Npb24gPSB1c2VTZXNzaW9uKClcbiAgICAvLyBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKClcblxuICAgIGNvbnNvbGUubG9nKHNlc3Npb24uZGF0YT8udXNlciAmJiBPYmplY3Qua2V5cyhzZXNzaW9uLmRhdGE/LnVzZXIpKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIHN0eWxlPXt7IG1hcmdpbjogMC41IH19PlxuICAgICAgICAgICAge3Nlc3Npb24/LnN0YXR1cyA9PT0gJ2F1dGhlbnRpY2F0ZWQnICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlUm93czogJzEwMHB4IDUwMHB4IDE3MnB4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLmRhdGEudXNlcj8uaW1hZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVJbmZvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Nlc3Npb24uZGF0YS51c2VyLmltYWdlfSBhbHQ9XCJcIiB3aWR0aD17NjZ9IGhlaWdodD17NjZ9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMubGVmdE1hcmdpbn0+e3Nlc3Npb24uZGF0YT8udXNlcj8ubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBzdHlsZT17eyBvcGFjaXR5OiAwLjkgfX0gY2xhc3NOYW1lPXtzdHlsZXMubGVmdE1hcmdpbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXNzaW9uLmRhdGE/LnVzZXI/LmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFtaWx5IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0l0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ3MgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L21haW4+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2Vzc2lvbiIsIkJveCIsIkltYWdlIiwiSXRlbSIsIlNldHRpbmdzIiwiRmFtaWx5IiwiUHJvZmlsZSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInVzZXIiLCJPYmplY3QiLCJrZXlzIiwibWFpbiIsInN0eWxlIiwibWFyZ2luIiwic3RhdHVzIiwiY29tcG9uZW50Iiwic3giLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlUm93cyIsImltYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZmlsZUluZm8iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJoMiIsImxlZnRNYXJnaW4iLCJuYW1lIiwiaDUiLCJvcGFjaXR5IiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});