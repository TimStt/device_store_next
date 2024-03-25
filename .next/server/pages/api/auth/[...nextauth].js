"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\auth\\[...nextauth].ts */ \"(api)/./pages/api/auth/[...nextauth].ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_auth_nextauth_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYXV0aCU1QyU1Qi4uLm5leHRhdXRoJTVELnRzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2lFO0FBQ2pFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyx3REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsd0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2aWNlX3N0b3JlX25leHQvPzY5MTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZXNBUElSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF0udHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__]);\naxios__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_2___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"Credentials\",\n            credentials: {},\n            async authorize (credentials) {\n                try {\n                    const urlApi = process.env.API_URL;\n                    const { data: users } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(`${urlApi}/users`);\n                    //  проверяем, зарегистрирован ли пользователь\n                    const findUser = users.find(({ username })=>username === credentials?.username);\n                    if (!findUser) return null;\n                    const validPassword = (0,bcryptjs__WEBPACK_IMPORTED_MODULE_5__.compare)(credentials?.password, findUser.password);\n                    if (!validPassword) return null;\n                    // const { data: user } = await axios.get(`${urlApi}/users`, {\n                    //   headers: { Authorization: \"Bearer \" + token.token },\n                    // });\n                    // let { password, ...currentUser } = user;\n                    // const userRole = [\"user\", \"admin\"];\n                    return {\n                        id: findUser.id,\n                        name: findUser.username,\n                        email: findUser.email\n                    };\n                } catch (error) {\n                    console.error(error);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        jwt: async ({ token, user })=>{\n            if (user && user.accessToken) {\n                token.accessToken = user.accessToken;\n            }\n            return token;\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3RDtBQUNBO0FBQ3ZCO0FBRWlDO0FBQ3hDO0FBRVM7QUFFbkMsaUVBQWVFLGdEQUFRQSxDQUFDO0lBQ3RCSSxXQUFXO1FBQ1ROLGlFQUFjQSxDQUFDO1lBQ2JPLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUMvQkMsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyxhQUFhO1FBQ3pDO1FBQ0FYLGlFQUFjQSxDQUFDO1lBQ2JNLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0ksU0FBUztZQUMvQkYsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxhQUFhO1FBQ3pDO1FBQ0FYLHNFQUFtQkEsQ0FBQztZQUNsQlksTUFBTTtZQUNOQyxhQUFhLENBQUM7WUFDZCxNQUFNQyxXQUFVRCxXQUFnQjtnQkFDOUIsSUFBSTtvQkFDRixNQUFNRSxTQUFTVixRQUFRQyxHQUFHLENBQUNVLE9BQU87b0JBRWxDLE1BQU0sRUFBRUMsTUFBTUMsS0FBSyxFQUFFLEdBQUcsTUFBTWpCLGlEQUFTLENBQUMsQ0FBQyxFQUFFYyxPQUFPLE1BQU0sQ0FBQztvQkFFekQsOENBQThDO29CQUM5QyxNQUFNSyxXQUFXRixNQUFNRyxJQUFJLENBQ3pCLENBQUMsRUFBRUMsUUFBUSxFQUF3QixHQUNqQ0EsYUFBYVQsYUFBYVM7b0JBRTlCLElBQUksQ0FBQ0YsVUFBVSxPQUFPO29CQUV0QixNQUFNRyxnQkFBZ0JyQixpREFBT0EsQ0FDM0JXLGFBQWFXLFVBQ2JKLFNBQVNJLFFBQVE7b0JBR25CLElBQUksQ0FBQ0QsZUFBZSxPQUFPO29CQUMzQiw4REFBOEQ7b0JBQzlELHlEQUF5RDtvQkFDekQsTUFBTTtvQkFFTiwyQ0FBMkM7b0JBQzNDLHNDQUFzQztvQkFFdEMsT0FBTzt3QkFDTEUsSUFBSUwsU0FBU0ssRUFBRTt3QkFDZmIsTUFBTVEsU0FBU0UsUUFBUTt3QkFDdkJJLE9BQU9OLFNBQVNNLEtBQUs7b0JBQ3ZCO2dCQUNGLEVBQUUsT0FBT0MsT0FBTztvQkFDZEMsUUFBUUQsS0FBSyxDQUFDQTtvQkFDZCxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtLQUNEO0lBRURFLFdBQVc7UUFDVEMsS0FBSyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUE2QjtZQUNwRCxJQUFJQSxRQUFRQSxLQUFLQyxXQUFXLEVBQUU7Z0JBQzVCRixNQUFNRSxXQUFXLEdBQUdELEtBQUtDLFdBQVc7WUFDdEM7WUFFQSxPQUFPRjtRQUNUO0lBVUY7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZpY2Vfc3RvcmVfbmV4dC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcclxuXHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgVXNlclR5cGUgfSBmcm9tIFwiQC90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQhLFxyXG4gICAgfSksXHJcbiAgICBHaXRIdWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQhLFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge30sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHVybEFwaSA9IHByb2Nlc3MuZW52LkFQSV9VUkwgYXMgc3RyaW5nO1xyXG5cclxuICAgICAgICAgIGNvbnN0IHsgZGF0YTogdXNlcnMgfSA9IGF3YWl0IGF4aW9zLmdldChgJHt1cmxBcGl9L3VzZXJzYCk7XHJcblxyXG4gICAgICAgICAgLy8gINC/0YDQvtCy0LXRgNGP0LXQvCwg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9INC70Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GMXHJcbiAgICAgICAgICBjb25zdCBmaW5kVXNlciA9IHVzZXJzLmZpbmQoXHJcbiAgICAgICAgICAgICh7IHVzZXJuYW1lIH06IHsgdXNlcm5hbWU6IHN0cmluZyB9KSA9PlxyXG4gICAgICAgICAgICAgIHVzZXJuYW1lID09PSBjcmVkZW50aWFscz8udXNlcm5hbWVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBpZiAoIWZpbmRVc2VyKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICBjb25zdCB2YWxpZFBhc3N3b3JkID0gY29tcGFyZShcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM/LnBhc3N3b3JkLFxyXG4gICAgICAgICAgICBmaW5kVXNlci5wYXNzd29yZFxyXG4gICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICBpZiAoIXZhbGlkUGFzc3dvcmQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgLy8gY29uc3QgeyBkYXRhOiB1c2VyIH0gPSBhd2FpdCBheGlvcy5nZXQoYCR7dXJsQXBpfS91c2Vyc2AsIHtcclxuICAgICAgICAgIC8vICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLnRva2VuIH0sXHJcbiAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAvLyBsZXQgeyBwYXNzd29yZCwgLi4uY3VycmVudFVzZXIgfSA9IHVzZXI7XHJcbiAgICAgICAgICAvLyBjb25zdCB1c2VyUm9sZSA9IFtcInVzZXJcIiwgXCJhZG1pblwiXTtcclxuXHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZDogZmluZFVzZXIuaWQsXHJcbiAgICAgICAgICAgIG5hbWU6IGZpbmRVc2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZmluZFVzZXIuZW1haWwsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcblxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9OiB7IHRva2VuOiBhbnk7IHVzZXI6IGFueSB9KSA9PiB7XHJcbiAgICAgIGlmICh1c2VyICYmIHVzZXIuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IHVzZXIuYWNjZXNzVG9rZW47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gICAgIHNlc3Npb24oeyBzZXNzaW9uLCB1c2VyIH0pIHtcclxuICAgIC8vICAgICAgIGlmIChzZXNzaW9uPy51c2VyICYmIHVzZXIuaWQpIHtcclxuICAgIC8vICAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdXNlci5pZDtcclxuICAgIC8vIHNlc3Npb24udXNlci5cclxuICAgIC8vICAgICAgICAgLy8gc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuID0gdXNlci5hY2Nlc3NUb2tlbiBhcyBzdHJpbmc7XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAvLyAgICAgICByZXR1cm4gc2Vzc2lvbjtcclxuICAgIC8vICAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiR29vZ2xlUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsImF4aW9zIiwiY29tcGFyZSIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwidXJsQXBpIiwiQVBJX1VSTCIsImRhdGEiLCJ1c2VycyIsImdldCIsImZpbmRVc2VyIiwiZmluZCIsInVzZXJuYW1lIiwidmFsaWRQYXNzd29yZCIsInBhc3N3b3JkIiwiaWQiLCJlbWFpbCIsImVycm9yIiwiY29uc29sZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwidXNlciIsImFjY2Vzc1Rva2VuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cauth%5C%5B...nextauth%5D.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();