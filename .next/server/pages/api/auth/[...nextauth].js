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

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "react-hot-toast":
/*!**********************************!*\
  !*** external "react-hot-toast" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("react-hot-toast");;

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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var _shared_api_get_user_by_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/api/get-user-by-name */ \"(api)/./src/shared/api/get-user-by-name/index.ts\");\n/* harmony import */ var _shared_api_create_item_on_db__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/shared/api/create-item-on-db */ \"(api)/./src/shared/api/create-item-on-db/index.ts\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_5__, _shared_api_get_user_by_name__WEBPACK_IMPORTED_MODULE_6__, _shared_api_create_item_on_db__WEBPACK_IMPORTED_MODULE_7__, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__]);\n([axios__WEBPACK_IMPORTED_MODULE_5__, _shared_api_get_user_by_name__WEBPACK_IMPORTED_MODULE_6__, _shared_api_create_item_on_db__WEBPACK_IMPORTED_MODULE_7__, _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3___default()({\n            name: \"Credentials\",\n            credentials: {},\n            async authorize (credentials) {\n                try {\n                    const API_AURL = \"https://658ec1272871a9866e79bce7.mockapi.io\";\n                    const { data: users } = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(`${API_AURL}/users`);\n                    //  проверяем, зарегистрирован ли пользователь\n                    const findUser = users.find(({ username })=>username === credentials?.username);\n                    console.log(\"findUser\", findUser);\n                    if (!findUser) return null;\n                    const validPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_4__.compare)(credentials?.password, findUser.password);\n                    console.log(\" credentials?.password\", await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_4__.hash)(credentials?.password, 12));\n                    if (!validPassword) return null;\n                    // const { data: user } = await axios.get(`${urlApi}/users`, {\n                    //   headers: { Authorization: \"Bearer \" + token.token },\n                    // });\n                    // let { password, ...currentUser } = user;\n                    // const userRole = [\"user\", \"admin\"];\n                    return {\n                        id: findUser.id.toString(),\n                        name: findUser.username,\n                        email: findUser.email\n                    };\n                } catch (error) {\n                    console.error(error.message);\n                    return null;\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 60,\n        updateAge: 24 * 60 * 60\n    },\n    callbacks: {\n        signIn: async ({ profile })=>{\n            if (!profile) return true;\n            try {\n                const findUser = await (0,_shared_api_get_user_by_name__WEBPACK_IMPORTED_MODULE_6__.getUserByName)(profile?.name);\n                if (findUser) return true;\n                const { name, ...otherInfo } = profile;\n                const newUser = {\n                    id: (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_8__.nanoid)(3),\n                    username: profile?.name,\n                    email: profile?.email\n                };\n                //ts-ignore-next-line\n                const image = otherInfo?.picture || otherInfo?.avatar || otherInfo?.image;\n                if (image) newUser.image = image;\n                await (0,_shared_api_create_item_on_db__WEBPACK_IMPORTED_MODULE_7__.createItemOnDb)(\"users\", newUser);\n                return true;\n            } catch (error) {\n                console.error(error.message);\n                return false;\n            }\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoLCB7XHJcbiAgQXV0aE9wdGlvbnMsXHJcbiAgRGVmYXVsdFNlc3Npb24sXHJcbiAgTmV4dEF1dGhPcHRpb25zLFxyXG4gIFNlc3Npb24sXHJcbn0gZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IHsgY29tcGFyZSwgaGFzaCB9IGZyb20gXCJiY3J5cHRqc1wiO1xyXG5pbXBvcnQgYXBpSW5zdGFuY2UgZnJvbSBcIkAvc2hhcmVkL2NvbmZpZy9hcGlpbnN0YW5jZVwiO1xyXG5pbXBvcnQgeyBJVXNlciwgSVVzZXJGcmVlIH0gZnJvbSBcIkAvc2hhcmVkL3R5cGVzL2F1dGhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQnlOYW1lIH0gZnJvbSBcIkAvc2hhcmVkL2FwaS9nZXQtdXNlci1ieS1uYW1lXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUl0ZW1PbkRiIH0gZnJvbSBcIkAvc2hhcmVkL2FwaS9jcmVhdGUtaXRlbS1vbi1kYlwiO1xyXG5pbXBvcnQgeyBuYW5vaWQgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQhLFxyXG4gICAgfSksXHJcbiAgICBHaXRIdWJQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQhLFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQhLFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge30sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFsczogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IEFQSV9BVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTF9VU0VSUztcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YTogdXNlcnMgfSA9IGF3YWl0IGF4aW9zLmdldDxJVXNlcltdPihgJHtBUElfQVVSTH0vdXNlcnNgKTtcclxuXHJcbiAgICAgICAgICAvLyAg0L/RgNC+0LLQtdGA0Y/QtdC8LCDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0g0LvQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YxcclxuICAgICAgICAgIGNvbnN0IGZpbmRVc2VyID0gdXNlcnMuZmluZChcclxuICAgICAgICAgICAgKHsgdXNlcm5hbWUgfSkgPT4gdXNlcm5hbWUgPT09IGNyZWRlbnRpYWxzPy51c2VybmFtZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmluZFVzZXJcIiwgZmluZFVzZXIpO1xyXG4gICAgICAgICAgaWYgKCFmaW5kVXNlcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgY29uc3QgdmFsaWRQYXNzd29yZCA9IGF3YWl0IGNvbXBhcmUoXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzPy5wYXNzd29yZCEsXHJcbiAgICAgICAgICAgIGZpbmRVc2VyLnBhc3N3b3JkXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBcIiBjcmVkZW50aWFscz8ucGFzc3dvcmRcIixcclxuICAgICAgICAgICAgYXdhaXQgaGFzaChjcmVkZW50aWFscz8ucGFzc3dvcmQhLCAxMilcclxuICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgaWYgKCF2YWxpZFBhc3N3b3JkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgIC8vIGNvbnN0IHsgZGF0YTogdXNlciB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAke3VybEFwaX0vdXNlcnNgLCB7XHJcbiAgICAgICAgICAvLyAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbi50b2tlbiB9LFxyXG4gICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgLy8gbGV0IHsgcGFzc3dvcmQsIC4uLmN1cnJlbnRVc2VyIH0gPSB1c2VyO1xyXG4gICAgICAgICAgLy8gY29uc3QgdXNlclJvbGUgPSBbXCJ1c2VyXCIsIFwiYWRtaW5cIl07XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IGZpbmRVc2VyLmlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgIG5hbWU6IGZpbmRVc2VyLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICBlbWFpbDogZmluZFVzZXIuZW1haWwsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gICAgbWF4QWdlOiAzMCAqIDYwLCAvLyAzMCBtaW51dGVzXHJcbiAgICB1cGRhdGVBZ2U6IDI0ICogNjAgKiA2MCwgLy8gMjQgaG91cnNcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgc2lnbkluOiBhc3luYyAoeyBwcm9maWxlIH0pID0+IHtcclxuICAgICAgaWYgKCFwcm9maWxlKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaW5kVXNlciA9IGF3YWl0IGdldFVzZXJCeU5hbWUocHJvZmlsZT8ubmFtZSBhcyBzdHJpbmcpO1xyXG5cclxuICAgICAgICBpZiAoZmluZFVzZXIpIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGNvbnN0IHsgbmFtZSwgLi4ub3RoZXJJbmZvIH0gPSBwcm9maWxlO1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXI6IElVc2VyRnJlZSA9IHtcclxuICAgICAgICAgIGlkOiBuYW5vaWQoMyksXHJcbiAgICAgICAgICB1c2VybmFtZTogcHJvZmlsZT8ubmFtZSxcclxuICAgICAgICAgIGVtYWlsOiBwcm9maWxlPy5lbWFpbCxcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vdHMtaWdub3JlLW5leHQtbGluZVxyXG4gICAgICAgIGNvbnN0IGltYWdlID1cclxuICAgICAgICAgIChvdGhlckluZm8gYXMgeyBwaWN0dXJlOiBzdHJpbmcgfSk/LnBpY3R1cmUgfHxcclxuICAgICAgICAgIChcclxuICAgICAgICAgICAgb3RoZXJJbmZvIGFzIHtcclxuICAgICAgICAgICAgICBhdmF0YXI6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKT8uYXZhdGFyIHx8XHJcbiAgICAgICAgICBvdGhlckluZm8/LmltYWdlO1xyXG5cclxuICAgICAgICBpZiAoaW1hZ2UpIG5ld1VzZXIuaW1hZ2UgPSBpbWFnZTtcclxuICAgICAgICBhd2FpdCBjcmVhdGVJdGVtT25EYihcInVzZXJzXCIsIG5ld1VzZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8gand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9OiB7IHRva2VuOiBhbnk7IHVzZXI6IGFueSB9KSA9PiB7XHJcbiAgICAvLyAgIHJldHVybiB7XHJcbiAgICAvLyAgICAgLi4udG9rZW4sXHJcbiAgICAvLyAgICAgLi4udXNlcixcclxuICAgIC8vICAgfTtcclxuICAgIC8vIH0sXHJcbiAgICAvLyBzZXNzaW9uOiBhc3luYyAoc2Vzc2lvbjogYW55KSA9PiB7XHJcbiAgICAvLyAgIGlmICghc2Vzc2lvbikgcmV0dXJuO1xyXG4gICAgLy8gICBjb25zdCBmaW5kVXNlciA9IGF3YWl0IGdldFVzZXJCeU5hbWUoc2Vzc2lvbi51c2VyLm5hbWUpO1xyXG4gICAgLy8gICBpZiAoIWZpbmRVc2VyKSByZXR1cm4gc2Vzc2lvbjtcclxuICAgIC8vICAgcmV0dXJuIHtcclxuICAgIC8vICAgICB1c2VyOiB7XHJcbiAgICAvLyAgICAgICBpZDogZmluZFVzZXIuaWQsXHJcbiAgICAvLyAgICAgICB1c2VybmFtZTogZmluZFVzZXIudXNlcm5hbWUsXHJcbiAgICAvLyAgICAgICBlbWFpbDogZmluZFVzZXIuZW1haWwsXHJcbiAgICAvLyAgICAgICBpbWFnZTogZmluZFVzZXIuaW1hZ2UsXHJcbiAgICAvLyAgICAgICBwaG9uZTogZmluZFVzZXIucGhvbmUsXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgICAuLi5zZXNzaW9uLFxyXG4gICAgLy8gICB9O1xyXG4gICAgLy8gfSxcclxuICB9LFxyXG59KTtcclxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR29vZ2xlUHJvdmlkZXIiLCJHaXRIdWJQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJjb21wYXJlIiwiaGFzaCIsImF4aW9zIiwiZ2V0VXNlckJ5TmFtZSIsImNyZWF0ZUl0ZW1PbkRiIiwibmFub2lkIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsIkdJVEhVQl9JRCIsIkdJVEhVQl9TRUNSRVQiLCJuYW1lIiwiY3JlZGVudGlhbHMiLCJhdXRob3JpemUiLCJBUElfQVVSTCIsIk5FWFRfUFVCTElDX0FQSV9VUkxfVVNFUlMiLCJkYXRhIiwidXNlcnMiLCJnZXQiLCJmaW5kVXNlciIsImZpbmQiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJsb2ciLCJ2YWxpZFBhc3N3b3JkIiwicGFzc3dvcmQiLCJpZCIsInRvU3RyaW5nIiwiZW1haWwiLCJlcnJvciIsIm1lc3NhZ2UiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJ1cGRhdGVBZ2UiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJwcm9maWxlIiwib3RoZXJJbmZvIiwibmV3VXNlciIsImltYWdlIiwicGljdHVyZSIsImF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "(api)/./src/shared/api/create-item-on-db/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/api/create-item-on-db/index.ts ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createItemOnDb: () => (/* binding */ createItemOnDb)\n/* harmony export */ });\n/* harmony import */ var _shared_config_apiinstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/shared/config/apiinstance */ \"(api)/./src/shared/config/apiinstance/index.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"react-hot-toast\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared_config_apiinstance__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__]);\n([_shared_config_apiinstance__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__, react_hot_toast__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst createItemOnDb = async (collection, postData)=>{\n    try {\n        if (collection === \"users\") {\n            const URL_API = \"https://658ec1272871a9866e79bce7.mockapi.io\";\n            return await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(`${URL_API}/${collection}`, postData);\n        }\n        await _shared_config_apiinstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(`/${collection}`, postData);\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(`${collection === \"products\" ? \"Продукт\" : \"Пользователь\"} добавлен успешно`);\n    } catch (error) {\n        console.error(error.message);\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2hhcmVkL2FwaS9jcmVhdGUtaXRlbS1vbi1kYi9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXNEO0FBQzVCO0FBQ1U7QUFFN0IsTUFBTUcsaUJBQWlCLE9BQzVCQyxZQUNBQztJQUVBLElBQUk7UUFDRixJQUFJRCxlQUFlLFNBQVM7WUFDMUIsTUFBTUUsVUFBVUMsNkNBQXFDO1lBQ3JELE9BQU8sTUFBTU4sa0RBQVUsQ0FBQyxDQUFDLEVBQUVLLFFBQVEsQ0FBQyxFQUFFRixXQUFXLENBQUMsRUFBRUM7UUFDdEQ7UUFFQSxNQUFNTCx1RUFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRUksV0FBVyxDQUFDLEVBQUVDO1FBQ3pDSCwrREFBYSxDQUNYLENBQUMsRUFDQ0UsZUFBZSxhQUFhLFlBQVksZUFDekMsaUJBQWlCLENBQUM7SUFFdkIsRUFBRSxPQUFPUSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxNQUFpQkUsT0FBTztJQUN4QztBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZpY2Vfc3RvcmVfbmV4dC8uL3NyYy9zaGFyZWQvYXBpL2NyZWF0ZS1pdGVtLW9uLWRiL2luZGV4LnRzPzU0YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaUluc3RhbmNlIGZyb20gXCJAL3NoYXJlZC9jb25maWcvYXBpaW5zdGFuY2VcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZW1PbkRiID0gYXN5bmMgPFBvc3REYXRhPihcclxuICBjb2xsZWN0aW9uOiBcInByb2R1Y3RzXCIgfCBcInVzZXJzXCIsXHJcbiAgcG9zdERhdGE6IFBvc3REYXRhXHJcbikgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoY29sbGVjdGlvbiA9PT0gXCJ1c2Vyc1wiKSB7XHJcbiAgICAgIGNvbnN0IFVSTF9BUEkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMX1VTRVJTO1xyXG4gICAgICByZXR1cm4gYXdhaXQgYXhpb3MucG9zdChgJHtVUkxfQVBJfS8ke2NvbGxlY3Rpb259YCwgcG9zdERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGF3YWl0IGFwaUluc3RhbmNlLnBvc3QoYC8ke2NvbGxlY3Rpb259YCwgcG9zdERhdGEpO1xyXG4gICAgdG9hc3Quc3VjY2VzcyhcclxuICAgICAgYCR7XHJcbiAgICAgICAgY29sbGVjdGlvbiA9PT0gXCJwcm9kdWN0c1wiID8gXCLQn9GA0L7QtNGD0LrRglwiIDogXCLQn9C+0LvRjNC30L7QstCw0YLQtdC70YxcIlxyXG4gICAgICB9INC00L7QsdCw0LLQu9C10L0g0YPRgdC/0LXRiNC90L5gXHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsiYXBpSW5zdGFuY2UiLCJheGlvcyIsInRvYXN0IiwiY3JlYXRlSXRlbU9uRGIiLCJjb2xsZWN0aW9uIiwicG9zdERhdGEiLCJVUkxfQVBJIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9VUkxfVVNFUlMiLCJwb3N0Iiwic3VjY2VzcyIsImVycm9yIiwiY29uc29sZSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/shared/api/create-item-on-db/index.ts\n");

/***/ }),

/***/ "(api)/./src/shared/api/get-user-by-name/index.ts":
/*!**************************************************!*\
  !*** ./src/shared/api/get-user-by-name/index.ts ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getUserByName: () => (/* binding */ getUserByName)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst getUserByName = async (usernameFind)=>{\n    const API_URL = \"https://658ec1272871a9866e79bce7.mockapi.io\";\n    const { data: users } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(`${API_URL}/users`);\n    const findUser = users.find(({ username })=>username === usernameFind);\n    return findUser;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2hhcmVkL2FwaS9nZXQtdXNlci1ieS1uYW1lL2luZGV4LnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTBCO0FBRW5CLE1BQU1DLGdCQUFnQixPQUFPQztJQUNsQyxNQUFNQyxVQUFVQyw2Q0FBcUM7SUFDckQsTUFBTSxFQUFFRyxNQUFNQyxLQUFLLEVBQUUsR0FBRyxNQUFNUixpREFBUyxDQUFVLENBQUMsRUFBRUcsUUFBUSxNQUFNLENBQUM7SUFDbkUsTUFBTU8sV0FBV0YsTUFBTUcsSUFBSSxDQUFDLENBQUMsRUFBRUMsUUFBUSxFQUFFLEdBQUtBLGFBQWFWO0lBQzNELE9BQU9RO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2RldmljZV9zdG9yZV9uZXh0Ly4vc3JjL3NoYXJlZC9hcGkvZ2V0LXVzZXItYnktbmFtZS9pbmRleC50cz8xM2I1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGlJbnN0YW5jZSBmcm9tIFwiQC9zaGFyZWQvY29uZmlnL2FwaWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IElVc2VyIH0gZnJvbSBcIkAvc2hhcmVkL3R5cGVzL2F1dGhcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJCeU5hbWUgPSBhc3luYyAodXNlcm5hbWVGaW5kOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTF9VU0VSUztcclxuICBjb25zdCB7IGRhdGE6IHVzZXJzIH0gPSBhd2FpdCBheGlvcy5nZXQ8SVVzZXJbXT4oYCR7QVBJX1VSTH0vdXNlcnNgKTtcclxuICBjb25zdCBmaW5kVXNlciA9IHVzZXJzLmZpbmQoKHsgdXNlcm5hbWUgfSkgPT4gdXNlcm5hbWUgPT09IHVzZXJuYW1lRmluZCk7XHJcbiAgcmV0dXJuIGZpbmRVc2VyO1xyXG59O1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRVc2VyQnlOYW1lIiwidXNlcm5hbWVGaW5kIiwiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMX1VTRVJTIiwiZGF0YSIsInVzZXJzIiwiZ2V0IiwiZmluZFVzZXIiLCJmaW5kIiwidXNlcm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/shared/api/get-user-by-name/index.ts\n");

/***/ }),

/***/ "(api)/./src/shared/config/apiinstance/index.ts":
/*!************************************************!*\
  !*** ./src/shared/config/apiinstance/index.ts ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst apiInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"https://fakestoreapi.com\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiInstance);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2hhcmVkL2NvbmZpZy9hcGlpbnN0YW5jZS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUUxQixNQUFNQyxjQUFjRCxvREFBWSxDQUFDO0lBQy9CRyxTQUFTQywwQkFBd0M7SUFFakRHLFNBQVM7UUFDUCxnQkFBZ0I7SUFDbEI7QUFDRjtBQUVBLGlFQUFlTixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2aWNlX3N0b3JlX25leHQvLi9zcmMvc2hhcmVkL2NvbmZpZy9hcGlpbnN0YW5jZS9pbmRleC50cz83NWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGFwaUluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMX1BST0RVQ1RTLFxyXG5cclxuICBoZWFkZXJzOiB7XHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaUluc3RhbmNlO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJhcGlJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1VSTF9QUk9EVUNUUyIsImhlYWRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/shared/config/apiinstance/index.ts\n");

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