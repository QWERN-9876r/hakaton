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
                    '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ CustomizedTabs; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "(app-pages-browser)/./node_modules/@mui/material/styles/styled.js");\n/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tabs */ "(app-pages-browser)/./node_modules/@mui/material/Tabs/Tabs.js");\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tab */ "(app-pages-browser)/./node_modules/@mui/material/Tab/Tab.js");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ "(app-pages-browser)/./node_modules/@mui/material/Box/Box.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst StyledTabs = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])((props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {\n        ...props,\n        TabIndicatorProps: {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {\n                className: "MuiTabs-indicatorSpan"\n            }, void 0, false, {\n                fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                lineNumber: 14,\n                columnNumber: 53\n            }, void 0)\n        }\n    }, void 0, false, {\n        fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined))({\n    "& .MuiTabs-indicator": {\n        display: "flex",\n        justifyContent: "center",\n        backgroundColor: "transparent",\n        minHeight: "500px",\n        zIndex: -1,\n        borderRadius: "15px"\n    },\n    "& .MuiTabs-indicatorSpan": {\n        display: "block",\n        width: "100%",\n        backgroundColor: "#000"\n    }\n});\n_c = StyledTabs;\nconst StyledTab = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])((props)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {\n        disableRipple: true,\n        ...props\n    }, void 0, false, {\n        fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n        lineNumber: 35,\n        columnNumber: 53\n    }, undefined))((param)=>{\n    let { theme } = param;\n    return {\n        textTransform: "none",\n        fontWeight: theme.typography.fontWeightRegular,\n        fontSize: theme.typography.pxToRem(15),\n        marginRight: theme.spacing(1),\n        color: "rgba(255, 255, 255, 0.7)",\n        "&.Mui-selected": {\n            color: "#fff"\n        },\n        "&.Mui-focusVisible": {\n            backgroundColor: "rgba(100, 95, 228, 0.32)"\n        }\n    };\n});\n_c1 = StyledTab;\nfunction CustomizedTabs() {\n    _s();\n    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChange = (event, newValue)=>{\n        setValue(newValue);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {\n        sx: {\n            width: "100%"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {\n            sx: {\n                bgcolor: "none"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTabs, {\n                    value: value,\n                    onChange: handleChange,\n                    "aria-label": "styled tabs example",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTab, {\n                            label: "Workflows"\n                        }, void 0, false, {\n                            fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledTab, {\n                            label: "Datasets"\n                        }, void 0, false, {\n                            fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {\n                    sx: {\n                        p: 3\n                    }\n                }, void 0, false, {\n                    fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n            lineNumber: 58,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: "/home/dima/Документы/WEB/hakaton/client/hakaton/src/components/customTubs/customTubs.tsx",\n        lineNumber: 57,\n        columnNumber: 9\n    }, this);\n}\n_s(CustomizedTabs, "qPBOvRc2Co1iWTsdTL0g7j/rpjU=");\n_c2 = CustomizedTabs;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, "StyledTabs");\n$RefreshReg$(_c1, "StyledTab");\n$RefreshReg$(_c2, "CustomizedTabs");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2N1c3RvbVR1YnMvY3VzdG9tVHVicy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNSO0FBQ0Y7QUFDQTtBQUNIO0FBUWhDLE1BQU1LLGFBQWFMLGdFQUFNQSxDQUFDLENBQUNNLHNCQUN2Qiw4REFBQ0wsMERBQUlBO1FBQUUsR0FBR0ssS0FBSztRQUFFQyxtQkFBbUI7WUFBRUMsd0JBQVUsOERBQUNDO2dCQUFLQyxXQUFVOzs7Ozs7UUFBMkI7Ozs7O21CQUM1RjtJQUNDLHdCQUF3QjtRQUNwQkMsU0FBUztRQUNUQyxnQkFBZ0I7UUFDaEJDLGlCQUFpQjtRQUNqQkMsV0FBVztRQUNYQyxRQUFRLENBQUM7UUFDVEMsY0FBYztJQUNsQjtJQUNBLDRCQUE0QjtRQUN4QkwsU0FBUztRQUNUTSxPQUFPO1FBQ1BKLGlCQUFpQjtJQUNyQjtBQUNKO0tBaEJNUjtBQXNCTixNQUFNYSxZQUFZbEIsZ0VBQU1BLENBQUMsQ0FBQ00sc0JBQTBCLDhEQUFDSix5REFBR0E7UUFBQ2lCLGFBQWE7UUFBRSxHQUFHYixLQUFLOzs7OzttQkFBTTtRQUFDLEVBQUVjLEtBQUssRUFBRTtXQUFNO1FBQ2xHQyxlQUFlO1FBQ2ZDLFlBQVlGLE1BQU1HLFVBQVUsQ0FBQ0MsaUJBQWlCO1FBQzlDQyxVQUFVTCxNQUFNRyxVQUFVLENBQUNHLE9BQU8sQ0FBQztRQUNuQ0MsYUFBYVAsTUFBTVEsT0FBTyxDQUFDO1FBQzNCQyxPQUFPO1FBQ1Asa0JBQWtCO1lBQ2RBLE9BQU87UUFDWDtRQUNBLHNCQUFzQjtZQUNsQmhCLGlCQUFpQjtRQUNyQjtJQUNKOztNQVpNSztBQWNTLFNBQVNZOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBRzVCLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU02QixlQUFlLENBQUNDLE9BQTZCQztRQUMvQ0gsU0FBU0c7SUFDYjtJQUVBLHFCQUNJLDhEQUFDaEMseURBQUdBO1FBQUNpQyxJQUFJO1lBQUVuQixPQUFPO1FBQU87a0JBQ3JCLDRFQUFDZCx5REFBR0E7WUFBQ2lDLElBQUk7Z0JBQUVDLFNBQVM7WUFBTzs7OEJBQ3ZCLDhEQUFDaEM7b0JBQVcwQixPQUFPQTtvQkFBT08sVUFBVUw7b0JBQWNNLGNBQVc7O3NDQUN6RCw4REFBQ3JCOzRCQUFVc0IsT0FBTTs7Ozs7O3NDQUNqQiw4REFBQ3RCOzRCQUFVc0IsT0FBTTs7Ozs7Ozs7Ozs7OzhCQUVyQiw4REFBQ3JDLHlEQUFHQTtvQkFBQ2lDLElBQUk7d0JBQUVLLEdBQUc7b0JBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhDO0dBbEJ3Qlg7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY3VzdG9tVHVicy9jdXN0b21UdWJzLnRzeD9kMWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwvc3R5bGVzJ1xuaW1wb3J0IFRhYnMgZnJvbSAnQG11aS9tYXRlcmlhbC9UYWJzJ1xuaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYidcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgU3R5bGVkVGFic1Byb3BzIHtcbiAgICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZVxuICAgIHZhbHVlOiBudW1iZXJcbiAgICBvbkNoYW5nZTogKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCwgbmV3VmFsdWU6IG51bWJlcikgPT4gdm9pZFxufVxuXG5jb25zdCBTdHlsZWRUYWJzID0gc3R5bGVkKChwcm9wczogU3R5bGVkVGFic1Byb3BzKSA9PiAoXG4gICAgPFRhYnMgey4uLnByb3BzfSBUYWJJbmRpY2F0b3JQcm9wcz17eyBjaGlsZHJlbjogPHNwYW4gY2xhc3NOYW1lPVwiTXVpVGFicy1pbmRpY2F0b3JTcGFuXCIgLz4gfX0gLz5cbikpKHtcbiAgICAnJiAuTXVpVGFicy1pbmRpY2F0b3InOiB7XG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgIG1pbkhlaWdodDogJzUwMHB4JyxcbiAgICAgICAgekluZGV4OiAtMSxcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCdcbiAgICB9LFxuICAgICcmIC5NdWlUYWJzLWluZGljYXRvclNwYW4nOiB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAnLFxuICAgIH0sXG59KVxuXG5pbnRlcmZhY2UgU3R5bGVkVGFiUHJvcHMge1xuICAgIGxhYmVsOiBzdHJpbmdcbn1cblxuY29uc3QgU3R5bGVkVGFiID0gc3R5bGVkKChwcm9wczogU3R5bGVkVGFiUHJvcHMpID0+IDxUYWIgZGlzYWJsZVJpcHBsZSB7Li4ucHJvcHN9IC8+KSgoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRSZWd1bGFyLFxuICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTUpLFxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxuICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcbiAgICAnJi5NdWktc2VsZWN0ZWQnOiB7XG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXG4gICAgfSxcbiAgICAnJi5NdWktZm9jdXNWaXNpYmxlJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDEwMCwgOTUsIDIyOCwgMC4zMiknLFxuICAgIH0sXG59KSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9taXplZFRhYnMoKSB7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgwKVxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5TeW50aGV0aWNFdmVudCwgbmV3VmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICBzZXRWYWx1ZShuZXdWYWx1ZSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94IHN4PXt7IHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICAgICAgICA8Qm94IHN4PXt7IGJnY29sb3I6ICdub25lJyB9fT5cbiAgICAgICAgICAgICAgICA8U3R5bGVkVGFicyB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGFyaWEtbGFiZWw9XCJzdHlsZWQgdGFicyBleGFtcGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxTdHlsZWRUYWIgbGFiZWw9XCJXb3JrZmxvd3NcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8U3R5bGVkVGFiIGxhYmVsPVwiRGF0YXNldHNcIiAvPlxuICAgICAgICAgICAgICAgIDwvU3R5bGVkVGFicz5cbiAgICAgICAgICAgICAgICA8Qm94IHN4PXt7IHA6IDMgfX0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICApXG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiVGFicyIsIlRhYiIsIkJveCIsInVzZVN0YXRlIiwiU3R5bGVkVGFicyIsInByb3BzIiwiVGFiSW5kaWNhdG9yUHJvcHMiLCJjaGlsZHJlbiIsInNwYW4iLCJjbGFzc05hbWUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsIlN0eWxlZFRhYiIsImRpc2FibGVSaXBwbGUiLCJ0aGVtZSIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwidHlwb2dyYXBoeSIsImZvbnRXZWlnaHRSZWd1bGFyIiwiZm9udFNpemUiLCJweFRvUmVtIiwibWFyZ2luUmlnaHQiLCJzcGFjaW5nIiwiY29sb3IiLCJDdXN0b21pemVkVGFicyIsInZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsIm5ld1ZhbHVlIiwic3giLCJiZ2NvbG9yIiwib25DaGFuZ2UiLCJhcmlhLWxhYmVsIiwibGFiZWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/customTubs/customTubs.tsx\n',
                ),
            )

            /***/
        },
})