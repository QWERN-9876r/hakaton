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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page.module.css */ \"(app-pages-browser)/./src/app/profile/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Box/Box.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_item_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/item/item */ \"(app-pages-browser)/./src/components/item/item.tsx\");\n/* harmony import */ var _components_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/settings */ \"(app-pages-browser)/./src/app/profile/components/settings.tsx\");\n/* harmony import */ var _components_family__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/family */ \"(app-pages-browser)/./src/app/profile/components/family.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Profile = ()=>{\n    var _session_data, _session_data1, _session_data_user, _session_data_user1, _session_data2, _session_data_user2, _session_data3;\n    _s();\n    // const session = await getServerSession(authConfig)\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    // const theme = useTheme()\n    console.log(((_session_data = session.data) === null || _session_data === void 0 ? void 0 : _session_data.user) && Object.keys((_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : _session_data1.user));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        style: {\n            margin: 0.5\n        },\n        children: (session === null || session === void 0 ? void 0 : session.status) === \"authenticated\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                component: \"div\",\n                sx: {\n                    display: \"grid\",\n                    gridTemplateRows: \"100px 500px 172px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: ((_session_data_user = session.data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.image) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().profileInfo),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: session.data.user.image,\n                                    alt: \"\",\n                                    width: 66,\n                                    height: 66\n                                }, void 0, false, {\n                                    fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 37\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftMargin),\n                                            children: (_session_data2 = session.data) === null || _session_data2 === void 0 ? void 0 : (_session_data_user1 = _session_data2.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 41\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                            style: {\n                                                opacity: 0.9\n                                            },\n                                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_7___default().leftMargin),\n                                            children: (_session_data3 = session.data) === null || _session_data3 === void 0 ? void 0 : (_session_data_user2 = _session_data3.user) === null || _session_data_user2 === void 0 ? void 0 : _session_data_user2.email\n                                        }, void 0, false, {\n                                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                                    lineNumber: 36,\n                                    columnNumber: 37\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 33\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        sx: {\n                            overflow: \"auto\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_family__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_item_item__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_settings__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n                lineNumber: 25,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false)\n    }, void 0, false, {\n        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/page.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Profile, \"TLdHK4K4L7Pm+aVG7dSGM4qSxic=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRXNDO0FBQ007QUFDa0Q7QUFDaEU7QUFJVztBQUNHO0FBQ0o7QUFHeEMsTUFBTU8sVUFBNkI7UUFLbkJDLGVBQWtDQSxnQkFhckJBLG9CQUk4Q0EscUJBQUFBLGdCQUU5QkEscUJBQUFBOztJQXZCekMscURBQXFEO0lBQ3JELE1BQU1BLFVBQVVQLDJEQUFVQTtJQUMxQiwyQkFBMkI7SUFFM0JRLFFBQVFDLEdBQUcsQ0FBQ0YsRUFBQUEsZ0JBQUFBLFFBQVFHLElBQUksY0FBWkgsb0NBQUFBLGNBQWNJLElBQUksS0FBSUMsT0FBT0MsSUFBSSxFQUFDTixpQkFBQUEsUUFBUUcsSUFBSSxjQUFaSCxxQ0FBQUEsZUFBY0ksSUFBSTtJQUNoRSxxQkFDSSw4REFBQ0c7UUFBS0MsT0FBTztZQUFFQyxRQUFRO1FBQUk7a0JBQ3RCVCxDQUFBQSxvQkFBQUEsOEJBQUFBLFFBQVNVLE1BQU0sTUFBSyxpQ0FDakI7c0JBQ0ksNEVBQUNoQiwrRUFBR0E7Z0JBQ0FpQixXQUFVO2dCQUNWQyxJQUFJO29CQUNBQyxTQUFTO29CQUNUQyxrQkFBa0I7Z0JBQ3RCOztrQ0FFQSw4REFBQ2xCLDZEQUFJQTtrQ0FDQUksRUFBQUEscUJBQUFBLFFBQVFHLElBQUksQ0FBQ0MsSUFBSSxjQUFqQkoseUNBQUFBLG1CQUFtQmUsS0FBSyxtQkFDckIsOERBQUNDOzRCQUFJQyxXQUFXekIscUVBQWtCOzs4Q0FDOUIsOERBQUNHLGtEQUFLQTtvQ0FBQ3dCLEtBQUtuQixRQUFRRyxJQUFJLENBQUNDLElBQUksQ0FBQ1csS0FBSztvQ0FBRUssS0FBSTtvQ0FBR0MsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7OzhDQUMvRCw4REFBQ0M7O3NEQUNHLDhEQUFDQzs0Q0FBR1AsV0FBV3pCLG9FQUFpQjt1REFBR1EsaUJBQUFBLFFBQVFHLElBQUksY0FBWkgsc0NBQUFBLHNCQUFBQSxlQUFjSSxJQUFJLGNBQWxCSiwwQ0FBQUEsb0JBQW9CMEIsSUFBSTs7Ozs7O3NEQUMzRCw4REFBQ0M7NENBQUduQixPQUFPO2dEQUFFb0IsU0FBUzs0Q0FBSTs0Q0FBR1gsV0FBV3pCLG9FQUFpQjt1REFDcERRLGlCQUFBQSxRQUFRRyxJQUFJLGNBQVpILHNDQUFBQSxzQkFBQUEsZUFBY0ksSUFBSSxjQUFsQkosMENBQUFBLG9CQUFvQjZCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU05Qyw4REFBQ2pDLDZEQUFJQTt3QkFBQ2dCLElBQUk7NEJBQUNrQixVQUFVO3dCQUFNO2tDQUN2Qiw0RUFBQ2hDLDBEQUFNQTs7Ozs7Ozs7OztrQ0FFWCw4REFBQ0YsNkRBQUlBO2tDQUNELDRFQUFDQyw0REFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckM7R0F6Q01FOztRQUVjTix1REFBVUE7OztLQUZ4Qk07QUEyQ04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9maWxlL3BhZ2UudHN4P2M0ZTYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9wYWdlLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBDaXJjdWxhclByb2dyZXNzLCBCb3gsIFRvZ2dsZUJ1dHRvbiwgVG9nZ2xlQnV0dG9uR3JvdXAgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgRmFjZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9GYWNlJ1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNpZ25PdXQgfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgSXRlbSBmcm9tICdAL2NvbXBvbmVudHMvaXRlbS9pdGVtJ1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4vY29tcG9uZW50cy9zZXR0aW5ncydcbmltcG9ydCBGYW1pbHkgZnJvbSAnLi9jb21wb25lbnRzL2ZhbWlseSdcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcblxuY29uc3QgUHJvZmlsZTogRnVuY3Rpb25Db21wb25lbnQgPSAoKSA9PiB7XG4gICAgLy8gY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aENvbmZpZylcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpXG4gICAgLy8gY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpXG5cbiAgICBjb25zb2xlLmxvZyhzZXNzaW9uLmRhdGE/LnVzZXIgJiYgT2JqZWN0LmtleXMoc2Vzc2lvbi5kYXRhPy51c2VyKSlcbiAgICByZXR1cm4gKFxuICAgICAgICA8bWFpbiBzdHlsZT17eyBtYXJnaW46IDAuNSB9fT5cbiAgICAgICAgICAgIHtzZXNzaW9uPy5zdGF0dXMgPT09ICdhdXRoZW50aWNhdGVkJyAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZVJvd3M6ICcxMDBweCA1MDBweCAxNzJweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi5kYXRhLnVzZXI/LmltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlSW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzZXNzaW9uLmRhdGEudXNlci5pbWFnZX0gYWx0PVwiXCIgd2lkdGg9ezY2fSBoZWlnaHQ9ezY2fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmxlZnRNYXJnaW59PntzZXNzaW9uLmRhdGE/LnVzZXI/Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgc3R5bGU9e3sgb3BhY2l0eTogMC45IH19IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRNYXJnaW59PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vzc2lvbi5kYXRhPy51c2VyPy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0gc3g9e3tvdmVyZmxvdzogJ2F1dG8nfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYW1pbHkgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5ncyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9JdGVtPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvbWFpbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTZXNzaW9uIiwiQm94IiwiSW1hZ2UiLCJJdGVtIiwiU2V0dGluZ3MiLCJGYW1pbHkiLCJQcm9maWxlIiwic2Vzc2lvbiIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidXNlciIsIk9iamVjdCIsImtleXMiLCJtYWluIiwic3R5bGUiLCJtYXJnaW4iLCJzdGF0dXMiLCJjb21wb25lbnQiLCJzeCIsImRpc3BsYXkiLCJncmlkVGVtcGxhdGVSb3dzIiwiaW1hZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwcm9maWxlSW5mbyIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsImgyIiwibGVmdE1hcmdpbiIsIm5hbWUiLCJoNSIsIm9wYWNpdHkiLCJlbWFpbCIsIm92ZXJmbG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.tsx\n"));

/***/ })

});