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

/***/ "(app-pages-browser)/./src/app/profile/components/family.tsx":
/*!***********************************************!*\
  !*** ./src/app/profile/components/family.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Accordion/Accordion.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionSummary/AccordionSummary.js\");\n/* harmony import */ var _barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Accordion,AccordionDetails,AccordionSummary,Button,TextField!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionDetails/AccordionDetails.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../page.module.css */ \"(app-pages-browser)/./src/app/profile/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/main */ \"(app-pages-browser)/./src/api/main.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst api = new _api_main__WEBPACK_IMPORTED_MODULE_3__.Api();\nconst Family = ()=>{\n    _s();\n    const [family, setFamily] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [names, setNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [addedEmail, setAddedEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const session = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const updateData = async (email)=>{\n        const res = await api.getUsersInFamily(email);\n        if (!Array.isArray(res)) return setError(res ? res.error : \"error\");\n        setFamily([\n            ...res\n        ]);\n        for(let i = 0; i < res.length; i++){\n            const response = await api.getUserNameById(res[i]);\n            if (\"error\" in response) {\n                return setError(response.error);\n            }\n            res[i] = response.name;\n        }\n        setNames(res);\n    };\n    const addUserInFamily = async ()=>{\n        var _session_data_user, _session_data, _session_data_user1, _session_data1;\n        const res = await api.addUserInFamily((_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.email, addedEmail);\n        if (!res || \"error\" in res) return setError((res === null || res === void 0 ? void 0 : res.error) || \"error\");\n        else updateData((_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : (_session_data_user1 = _session_data1.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.email);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _session_data_user, _session_data, _session_data_user1, _session_data1;\n        if ((_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.email) updateData((_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : (_session_data_user1 = _session_data1.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.email);\n    }, [\n        session\n    ]);\n    const createFamily = async ()=>{\n        var _session_data_user, _session_data, _session_data_user1, _session_data_user2, _session_data1;\n        if (!((_session_data = session.data) === null || _session_data === void 0 ? void 0 : (_session_data_user = _session_data.user) === null || _session_data_user === void 0 ? void 0 : _session_data_user.email)) return;\n        const res = await api.createFamily((_session_data_user1 = session.data.user) === null || _session_data_user1 === void 0 ? void 0 : _session_data_user1.email);\n        if (res === null || res === void 0 ? void 0 : res.error) setError(res.error);\n        else updateData((_session_data1 = session.data) === null || _session_data1 === void 0 ? void 0 : (_session_data_user2 = _session_data1.user) === null || _session_data_user2 === void 0 ? void 0 : _session_data_user2.email);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Family\"\n            }, void 0, false, {\n                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, undefined),\n            !family.length ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().profileInfo), \" \").concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().containerForButton)),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            onClick: createFamily,\n                            color: \"primary\",\n                            variant: \"contained\",\n                            children: \"Create family\"\n                        }, void 0, false, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 25\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 25\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: \"Add user to family:\"\n                    }, void 0, false, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                variant: \"standard\",\n                                label: \"Email\",\n                                type: \"email\",\n                                onChange: (event)=>setAddedEmail(event.target.value)\n                            }, void 0, false, {\n                                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                style: {\n                                    marginBottom: 10\n                                },\n                                color: \"primary\",\n                                variant: \"contained\",\n                                onClick: addUserInFamily,\n                                children: \"Add\"\n                            }, void 0, false, {\n                                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, undefined),\n                            names.map((name, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                            children: name\n                                        }, void 0, false, {\n                                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                                            lineNumber: 90,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Accordion_AccordionDetails_AccordionSummary_Button_TextField_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                onClick: async ()=>{\n                                                    const res = await api.deleteUserFromFamily(family[i]);\n                                                },\n                                                children: \"delete\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                                                lineNumber: 92,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, name, true, {\n                                    fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 29\n                                }, undefined))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/home/dima/Документы/WEB/hakaton/client/hakaton/src/app/profile/components/family.tsx\",\n                lineNumber: 101,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Family, \"7TetuV4rJLrVZF/sV9KNcOtKgA4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Family;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Family);\nvar _c;\n$RefreshReg$(_c, \"Family\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2ZhbWlseS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVnRztBQUN6RDtBQUNJO0FBQ0M7QUFDWjtBQUVoQyxNQUFNVSxNQUFNLElBQUlELDBDQUFHQTtBQUVuQixNQUFNRSxTQUFTOztJQUNYLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ2pELE1BQU0sQ0FBQ08sT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBVyxFQUFFO0lBQy9DLE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTWEsVUFBVVosMkRBQVVBO0lBRTFCLE1BQU1hLGFBQWEsT0FBT0M7UUFDdEIsTUFBTUMsTUFBTSxNQUFNYixJQUFJYyxnQkFBZ0IsQ0FBQ0Y7UUFFdkMsSUFBSSxDQUFDRyxNQUFNQyxPQUFPLENBQUNILE1BQU0sT0FBT0osU0FBU0ksTUFBTUEsSUFBSUwsS0FBSyxHQUFHO1FBQzNETCxVQUFVO2VBQUlVO1NBQUk7UUFFbEIsSUFBSyxJQUFJSSxJQUFJLEdBQUdBLElBQUlKLElBQUlLLE1BQU0sRUFBRUQsSUFBSztZQUNqQyxNQUFNRSxXQUFXLE1BQU1uQixJQUFJb0IsZUFBZSxDQUFDUCxHQUFHLENBQUNJLEVBQUU7WUFFakQsSUFBSSxXQUFXRSxVQUFVO2dCQUNyQixPQUFPVixTQUFTVSxTQUFTWCxLQUFLO1lBQ2xDO1lBRUFLLEdBQUcsQ0FBQ0ksRUFBRSxHQUFHRSxTQUFTRSxJQUFJO1FBQzFCO1FBRUFoQixTQUFTUTtJQUNiO0lBRUEsTUFBTVMsa0JBQWtCO1lBQ2tCWixvQkFBQUEsZUFHdEJBLHFCQUFBQTtRQUhoQixNQUFNRyxNQUFNLE1BQU1iLElBQUlzQixlQUFlLEVBQUNaLGdCQUFBQSxRQUFRYSxJ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Oi8vX05fRS8uL3NyYy9hcHAvcHJvZmlsZS9jb21wb25lbnRzL2ZhbWlseS50c3g/NGUxMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIEFjY29yZGlvbiwgQWNjb3JkaW9uU3VtbWFyeSwgQWNjb3JkaW9uRGV0YWlscyB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3BhZ2UubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgeyBBcGkgfSBmcm9tICdAL2FwaS9tYWluJ1xuXG5jb25zdCBhcGkgPSBuZXcgQXBpKClcblxuY29uc3QgRmFtaWx5ID0gKCkgPT4ge1xuICAgIGNvbnN0IFtmYW1pbHksIHNldEZhbWlseV0gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gICAgY29uc3QgW25hbWVzLCBzZXROYW1lc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pXG4gICAgY29uc3QgW2FkZGVkRW1haWwsIHNldEFkZGVkRW1haWxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBzZXNzaW9uID0gdXNlU2Vzc2lvbigpXG5cbiAgICBjb25zdCB1cGRhdGVEYXRhID0gYXN5bmMgKGVtYWlsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldFVzZXJzSW5GYW1pbHkoZW1haWwpXG5cbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJlcykpIHJldHVybiBzZXRFcnJvcihyZXMgPyByZXMuZXJyb3IgOiAnZXJyb3InKVxuICAgICAgICBzZXRGYW1pbHkoWy4uLnJlc10pXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldFVzZXJOYW1lQnlJZChyZXNbaV0pXG5cbiAgICAgICAgICAgIGlmICgnZXJyb3InIGluIHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEVycm9yKHJlc3BvbnNlLmVycm9yKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXNbaV0gPSByZXNwb25zZS5uYW1lXG4gICAgICAgIH1cblxuICAgICAgICBzZXROYW1lcyhyZXMpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVXNlckluRmFtaWx5ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuYWRkVXNlckluRmFtaWx5KHNlc3Npb24uZGF0YT8udXNlcj8uZW1haWwgYXMgc3RyaW5nLCBhZGRlZEVtYWlsKVxuXG4gICAgICAgIGlmICghcmVzIHx8ICdlcnJvcicgaW4gcmVzKSByZXR1cm4gc2V0RXJyb3IocmVzPy5lcnJvciB8fCAnZXJyb3InKVxuICAgICAgICBlbHNlIHVwZGF0ZURhdGEoc2Vzc2lvbi5kYXRhPy51c2VyPy5lbWFpbCBhcyBzdHJpbmcpXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKHNlc3Npb24uZGF0YT8udXNlcj8uZW1haWwpIHVwZGF0ZURhdGEoc2Vzc2lvbi5kYXRhPy51c2VyPy5lbWFpbClcbiAgICB9LCBbc2Vzc2lvbl0pXG5cbiAgICBjb25zdCBjcmVhdGVGYW1pbHkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICghc2Vzc2lvbi5kYXRhPy51c2VyPy5lbWFpbCkgcmV0dXJuXG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmNyZWF0ZUZhbWlseShzZXNzaW9uLmRhdGEudXNlcj8uZW1haWwgYXMgc3RyaW5nKVxuXG4gICAgICAgIGlmIChyZXM/LmVycm9yKSBzZXRFcnJvcihyZXMuZXJyb3IpXG4gICAgICAgIGVsc2UgdXBkYXRlRGF0YShzZXNzaW9uLmRhdGE/LnVzZXI/LmVtYWlsKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDM+RmFtaWx5PC9oMz5cbiAgICAgICAgICAgIHshZmFtaWx5Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnByb2ZpbGVJbmZvfSAke3N0eWxlcy5jb250YWluZXJGb3JCdXR0b259YH0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2NyZWF0ZUZhbWlseX0gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENyZWF0ZSBmYW1pbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yfT57ZXJyb3J9PC9oND5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8aDU+QWRkIHVzZXIgdG8gZmFtaWx5OjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldEFkZGVkRW1haWwoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkVXNlckluRmFtaWx5fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bmFtZXMubWFwKChuYW1lLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiBrZXk9e25hbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeT57bmFtZX08L0FjY29yZGlvblN1bW1hcnk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25EZXRhaWxzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5kZWxldGVVc2VyRnJvbUZhbWlseShmYW1pbHlbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fSA+ZGVsZXRlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYW1pbHlcbiJdLCJuYW1lcyI6WyJUZXh0RmllbGQiLCJCdXR0b24iLCJBY2NvcmRpb24iLCJBY2NvcmRpb25TdW1tYXJ5IiwiQWNjb3JkaW9uRGV0YWlscyIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsIkFwaSIsImFwaSIsIkZhbWlseSIsImZhbWlseSIsInNldEZhbWlseSIsIm5hbWVzIiwic2V0TmFtZXMiLCJhZGRlZEVtYWlsIiwic2V0QWRkZWRFbWFpbCIsImVycm9yIiwic2V0RXJyb3IiLCJzZXNzaW9uIiwidXBkYXRlRGF0YSIsImVtYWlsIiwicmVzIiwiZ2V0VXNlcnNJbkZhbWlseSIsIkFycmF5IiwiaXNBcnJheSIsImkiLCJsZW5ndGgiLCJyZXNwb25zZSIsImdldFVzZXJOYW1lQnlJZCIsIm5hbWUiLCJhZGRVc2VySW5GYW1pbHkiLCJkYXRhIiwidXNlciIsImNyZWF0ZUZhbWlseSIsImgzIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZmlsZUluZm8iLCJjb250YWluZXJGb3JCdXR0b24iLCJvbkNsaWNrIiwiY29sb3IiLCJ2YXJpYW50IiwiaDQiLCJiciIsImg1IiwibGFiZWwiLCJ0eXBlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwic3R5bGUiLCJtYXJnaW5Cb3R0b20iLCJtYXAiLCJkZWxldGVVc2VyRnJvbUZhbWlseSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/components/family.tsx\n"));

/***/ })

});