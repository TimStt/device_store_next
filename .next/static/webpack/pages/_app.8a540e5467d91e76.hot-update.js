"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/shared/api/get-one-device/index.ts":
/*!************************************************!*\
  !*** ./src/shared/api/get-one-device/index.ts ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getOneDevice: function() { return /* binding */ getOneDevice; }\n/* harmony export */ });\n/* harmony import */ var _shared_config_apiinstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/config/apiinstance */ \"./src/shared/config/apiinstance/index.ts\");\n\nconst getOneDevice = async (id)=>{\n    try {\n        const { data: device } = await _shared_config_apiinstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"/products/\".concat(id));\n        return Object(device) ? device : null;\n    } catch (error) {\n        console.log(error.message);\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2hhcmVkL2FwaS9nZXQtb25lLWRldmljZS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFzRDtBQUcvQyxNQUFNQyxlQUFlLE9BQU9DO0lBQ2pDLElBQUk7UUFDRixNQUFNLEVBQUVDLE1BQU1DLE1BQU0sRUFBRSxHQUFHLE1BQU1KLHNFQUFlLENBQzVDLGFBQWdCLE9BQUhFO1FBR2YsT0FBT0ksT0FBT0YsVUFBVUEsU0FBUztJQUNuQyxFQUFFLE9BQU9HLE9BQU87UUFDZEMsUUFBUUMsR0FBRyxDQUFDLE1BQWlCQyxPQUFPO0lBQ3RDO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2hhcmVkL2FwaS9nZXQtb25lLWRldmljZS9pbmRleC50cz9mOGRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGlJbnN0YW5jZSBmcm9tIFwiQC9zaGFyZWQvY29uZmlnL2FwaWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IElEZXZpY2VzVHlwZXMgfSBmcm9tIFwiQC9zaGFyZWQvdHlwZXMvcHJvZHVjdHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRPbmVEZXZpY2UgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IGRldmljZSB9ID0gYXdhaXQgYXBpSW5zdGFuY2UuZ2V0PElEZXZpY2VzVHlwZXMgfCBudWxsPihcclxuICAgICAgYC9wcm9kdWN0cy8ke2lkfWBcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIE9iamVjdChkZXZpY2UpID8gZGV2aWNlIDogbnVsbDtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5sb2coKGVycm9yIGFzIEVycm9yKS5tZXNzYWdlKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJhcGlJbnN0YW5jZSIsImdldE9uZURldmljZSIsImlkIiwiZGF0YSIsImRldmljZSIsImdldCIsIk9iamVjdCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/shared/api/get-one-device/index.ts\n"));

/***/ })

});