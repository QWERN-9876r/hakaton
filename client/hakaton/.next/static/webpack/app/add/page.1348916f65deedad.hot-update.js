'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('app/add/page', {
    /***/ '(app-pages-browser)/./src/components/customTubs/customTubs.tsx':
        /*!**************************************************!*\
  !*** ./src/components/customTubs/customTubs.tsx ***!
  \**************************************************/
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            eval(
                __webpack_require__.ts(
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ CustomizedTabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "(app-pages-browser)/./node_modules/@mui/material/styles/styled.js");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tabs */ "(app-pages-browser)/./node_modules/@mui/material/Tabs/Tabs.js");\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tab */ "(app-pages-browser)/./node_modules/@mui/material/Tab/Tab.js");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "(app-pages-browser)/./node_modules/@mui/material/Box/Box.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst StyledTabs = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])((props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {\n        ...props,\n        TabIndicatorProps: {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                className: "MuiTabs-indicatorSpan"\n            }, void 0, false, {\n                fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                lineNumber: 14,\n                columnNumber: 53\n            }, void 0)\n        }\n    }, void 0, false, {\n        fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined))({\n    "& .MuiTabs-indicator": {\n        display: "flex",\n        justifyContent: "center",\n        backgroundColor: "transparent"\n    },\n    "& .MuiTabs-indicatorSpan": {\n        display: "block",\n        maxWidth: 40,\n        width: "100%",\n        minHeight: "500px",\n        backgroundColor: "#000"\n    }\n});\n_c = StyledTabs;\nconst StyledTab = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])((props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {\n        disableRipple: true,\n        ...props\n    }, void 0, false, {\n        fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n        lineNumber: 34,\n        columnNumber: 53\n    }, undefined))((param)=>{\n    let { theme } = param;\n    return {\n        textTransform: "none",\n        fontWeight: theme.typography.fontWeightRegular,\n        fontSize: theme.typography.pxToRem(15),\n        marginRight: theme.spacing(1),\n        color: "rgba(255, 255, 255, 0.7)",\n        "&.Mui-selected": {\n            color: "#fff"\n        },\n        "&.Mui-focusVisible": {\n            backgroundColor: "rgba(100, 95, 228, 0.32)"\n        }\n    };\n});\n_c1 = StyledTab;\nfunction CustomizedTabs() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {\n        sx: {\n            width: "100%"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {\n            sx: {\n                bgcolor: "none"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTabs, {\n                    value: value,\n                    onChange: handleChange,\n                    "aria-label": "styled tabs example",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTab, {\n                            label: "Workflows"\n                        }, void 0, false, {\n                            fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTab, {\n                            label: "Datasets"\n                        }, void 0, false, {\n                            fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                    sx: {\n                        p: 3\n                    }\n                }, void 0, false, {\n                    fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n            lineNumber: 57,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(CustomizedTabs, "qPBOvRc2Co1iWTsdTL0g7j/rpjU=");\n_c2 = CustomizedTabs;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, "StyledTabs");\n$RefreshReg$(_c1, "StyledTab");\n$RefreshReg$(_c2, "CustomizedTabs");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbVR1YnMvY3VzdG9tVHVicy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNSO0FBQ0Y7QUFDQTtBQUNIO0FBUWhDLE1BQU1LLGFBQWFMLGdFQUFNQSxDQUFDLENBQUNNLHNCQUN2Qiw4REFBQ0wsMERBQUlBO1FBQUUsR0FBR0ssS0FBSztRQUFFQyxtQkFBbUI7WUFBRUMsd0JBQVUsOERBQUNDO2dCQUFLQyxXQUFVOzs7Ozs7UUFBMkI7Ozs7O21CQUM1RjtJQUNDLHdCQUF3QjtRQUNwQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLGlCQUFpQjtJQUNyQjtJQUNBLDRCQUE0QjtRQUN4QkYsU0FBUztRQUNURyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsV0FBVztRQUNYSCxpQkFBaUI7SUFDckI7QUFDSjtLQWZNUjtBQXFCTixNQUFNWSxZQUFZakIsZ0VBQU1BLENBQUMsQ0FBQ00sc0JBQTBCLDhEQUFDSix5REFBR0E7UUFBQ2dCLGFBQWE7UUFBRSxHQUFHWixLQUFLOzs7OzttQkFBTTtRQUFDLEVBQUVhLEtBQUssRUFBRTtXQUFNO1FBQ2xHQyxlQUFlO1FBQ2ZDLFlBQVlGLE1BQU1HLFVBQVUsQ0FBQ0MsaUJBQWlCO1FBQzlDQyxVQUFVTCxNQUFNRyxVQUFVLENBQUNHLE9BQU8sQ0FBQztRQUNuQ0MsYUFBYVAsTUFBTVEsT0FBTyxDQUFDO1FBQzNCQyxPQUFPO1FBQ1Asa0JBQWtCO1lBQ2RBLE9BQU87UUFDWDtRQUNBLHNCQUFzQjtZQUNsQmYsaUJBQWlCO1FBQ3JCO0lBQ0o7O01BWk1JO0FBY1MsU0FBU1k7O0lBQ3BCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHM0IsK0NBQVFBLENBQUM7SUFFbkMsTUFBTTRCLGVBQWUsQ0FBQ0MsT0FBNkJDO1FBQy9DSCxTQUFTRztJQUNiO0lBRUEscUJBQ0ksOERBQUMvQix5REFBR0E7UUFBQ2dDLElBQUk7WUFBRXBCLE9BQU87UUFBTztrQkFDckIsNEVBQUNaLHlEQUFHQTtZQUFDZ0MsSUFBSTtnQkFBRUMsU0FBUztZQUFPOzs4QkFDdkIsOERBQUMvQjtvQkFBV3lCLE9BQU9BO29CQUFPTyxVQUFVTDtvQkFBY00sY0FBVzs7c0NBQ3pELDhEQUFDckI7NEJBQVVzQixPQUFNOzs7Ozs7c0NBQ2pCLDhEQUFDdEI7NEJBQVVzQixPQUFNOzs7Ozs7Ozs7Ozs7OEJBRXJCLDhEQUFDcEMseURBQUdBO29CQUFDZ0MsSUFBSTt3QkFBRUssR0FBRztvQkFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEM7R0FsQndCWDtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jdXN0b21UdWJzL2N1c3RvbVR1YnMudHN4P2QxYTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGVkIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG5pbXBvcnQgVGFicyBmcm9tICdAbXVpL21hdGVyaWFsL1RhYnMnXG5pbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJ1xuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmludGVyZmFjZSBTdHlsZWRUYWJzUHJvcHMge1xuICAgIGNoaWxkcmVuPzogUmVhY3QuUmVhY3ROb2RlXG4gICAgdmFsdWU6IG51bWJlclxuICAgIG9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LlN5bnRoZXRpY0V2ZW50LCBuZXdWYWx1ZTogbnVtYmVyKSA9PiB2b2lkXG59XG5cbmNvbnN0IFN0eWxlZFRhYnMgPSBzdHlsZWQoKHByb3BzOiBTdHlsZWRUYWJzUHJvcHMpID0+IChcbiAgICA8VGFicyB7Li4ucHJvcHN9IFRhYkluZGljYXRvclByb3BzPXt7IGNoaWxkcmVuOiA8c3BhbiBjbGFzc05hbWU9XCJNdWlUYWJzLWluZGljYXRvclNwYW5cIiAvPiB9fSAvPlxuKSkoe1xuICAgICcmIC5NdWlUYWJzLWluZGljYXRvcic6IHtcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcbiAgICB9LFxuICAgICcmIC5NdWlUYWJzLWluZGljYXRvclNwYW4nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiA0MCxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnNTAwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJyxcbiAgICB9LFxufSlcblxuaW50ZXJmYWNlIFN0eWxlZFRhYlByb3BzIHtcbiAgICBsYWJlbDogc3RyaW5nXG59XG5cbmNvbnN0IFN0eWxlZFRhYiA9IHN0eWxlZCgocHJvcHM6IFN0eWxlZFRhYlByb3BzKSA9PiA8VGFiIGRpc2FibGVSaXBwbGUgey4uLnByb3BzfSAvPikoKHsgdGhlbWUgfSkgPT4gKHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgZm9udFdlaWdodDogdGhlbWUudHlwb2dyYXBoeS5mb250V2VpZ2h0UmVndWxhcixcbiAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE1KSxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcbiAgICBjb2xvcjogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KScsXG4gICAgJyYuTXVpLXNlbGVjdGVkJzoge1xuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgIH0sXG4gICAgJyYuTXVpLWZvY3VzVmlzaWJsZSc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncmdiYSgxMDAsIDk1LCAyMjgsIDAuMzIpJyxcbiAgICB9LFxufSkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbWl6ZWRUYWJzKCkge1xuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoMClcblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQsIG5ld1ZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveCBzeD17eyB3aWR0aDogJzEwMCUnIH19PlxuICAgICAgICAgICAgPEJveCBzeD17eyBiZ2NvbG9yOiAnbm9uZScgfX0+XG4gICAgICAgICAgICAgICAgPFN0eWxlZFRhYnMgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBhcmlhLWxhYmVsPVwic3R5bGVkIHRhYnMgZXhhbXBsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFiIGxhYmVsPVwiV29ya2Zsb3dzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFN0eWxlZFRhYiBsYWJlbD1cIkRhdGFzZXRzXCIgLz5cbiAgICAgICAgICAgICAgICA8L1N0eWxlZFRhYnM+XG4gICAgICAgICAgICAgICAgPEJveCBzeD17eyBwOiAzIH19IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgKVxufVxuIl0sIm5hbWVzIjpbInN0eWxlZCIsIlRhYnMiLCJUYWIiLCJCb3giLCJ1c2VTdGF0ZSIsIlN0eWxlZFRhYnMiLCJwcm9wcyIsIlRhYkluZGljYXRvclByb3BzIiwiY2hpbGRyZW4iLCJzcGFuIiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwibWF4V2lkdGgiLCJ3aWR0aCIsIm1pbkhlaWdodCIsIlN0eWxlZFRhYiIsImRpc2FibGVSaXBwbGUiLCJ0aGVtZSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZm9udFNpemUiLCJweFRvUmVtIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiY29sb3IiLCJDdXN0b21pemVkVGFicyIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwic3giLCJiZ2NvbG9yIiwib25DaGFuZ2UiLCJhcmlhLWxhYmVsIiwibGFiZWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/customTubs/customTubs.tsx\n',
                ),
            )

            /***/
        },
})