/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/pages/product/ui/aside-actions-product/aside-actions-device.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/pages/product/ui/aside-actions-product/aside-actions-device.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".aside-actions-device_root__DhI1t {\\n  display: flex;\\n  gap: 20px;\\n  /* gap: 21px; */\\n  width: 100%;\\n  /* padding: 16px 20px 20px; */\\n  /* border-radius: 16px; */\\n  /* box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08); */\\n  /* flex-direction: column; */\\n  align-items: center;\\n  /* width: max-content; */\\n  height: max-content;\\n  justify-content: space-between;\\n}\\n.aside-actions-device_root__DhI1t span {\\n  font-size: 24px;\\n  font-weight: 600;\\n}\\n.aside-actions-device_root__DhI1t button {\\n  border-radius: 10px;\\n  padding: 12px 20px;\\n  cursor: pointer;\\n  background: #353434;\\n  color: white;\\n  border: 1px solid #1a1818;\\n  transition: all 0.4s;\\n}\\n.aside-actions-device_root__DhI1t button:hover {\\n  background: #f6f6f6;\\n  color: #1a1818;\\n}\\n.aside-actions-device_root__control__R2t8I {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n}\\n.aside-actions-device_root__control__R2t8I button {\\n  padding: 6px;\\n  display: flex;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/pages/product/ui/aside-actions-product/aside-actions-device.module.scss\",\"webpack://src/styles/libs/_mixins.scss\",\"webpack://src/styles/libs/_veriables.scss\"],\"names\":[],\"mappings\":\"AAGA;EC2EE,aAAA;EACA,SAAA;EDzEA,eAAA;EACA,WAAA;EACA,6BAAA;EACA,yBAAA;EACA,gDAAA;EACA,4BAAA;EACA,mBAAA;EACA,wBAAA;EACA,mBAAA;EACA,8BAAA;AAFF;AAGE;EACE,eAAA;EACA,gBAAA;AADJ;AAGE;ECuBA,mBAAA;EACA,kBAAA;EAEA,eAAA;EACA,mBATmB;EAUnB,YARa;EASb,yBAAA;EACA,oBAAA;ADxBF;ACyBE;EACE,mBCjDS;EDkDT,cC/Ca;AFwBjB;AANE;ECZA,aAAA;EAEA,mBAAA;EDYE,SAAA;AASJ;AARI;EACE,YAAA;EACA,aAAA;AAUN\",\"sourcesContent\":[\"@import \\\"../../../../styles/libs/veriables\\\", \\\"../../../../styles/libs/adaptive\\\",\\r\\n  \\\"../../../../styles/libs/mixins\\\";\\r\\n\\r\\n.root {\\r\\n  @include flex-gap(20px);\\r\\n\\r\\n  /* gap: 21px; */\\r\\n  width: 100%;\\r\\n  /* padding: 16px 20px 20px; */\\r\\n  /* border-radius: 16px; */\\r\\n  /* box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08); */\\r\\n  /* flex-direction: column; */\\r\\n  align-items: center;\\r\\n  /* width: max-content; */\\r\\n  height: max-content;\\r\\n  justify-content: space-between;\\r\\n  span {\\r\\n    font-size: 24px;\\r\\n    font-weight: 600;\\r\\n  }\\r\\n  button {\\r\\n    @include button;\\r\\n  }\\r\\n\\r\\n  &__control {\\r\\n    @include flex-center;\\r\\n    gap: 20px;\\r\\n    button {\\r\\n      padding: 6px;\\r\\n      display: flex;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\",\"@mixin flex-center-between {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n@mixin flex-center-center {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n@mixin flex-center {\\r\\n  display: flex;\\r\\n\\r\\n  align-items: center;\\r\\n}\\r\\n@mixin flex-column {\\r\\n  display: flex;\\r\\n\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n@mixin logo {\\r\\n  @include flex-center-between;\\r\\n  gap: 20px;\\r\\n  span {\\r\\n    color: gray;\\r\\n  }\\r\\n  h2 {\\r\\n    font-size: 20px;\\r\\n    margin-bottom: 4px;\\r\\n    font-weight: 700;\\r\\n    color: black;\\r\\n    text-transform: uppercase;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin button(\\r\\n  $background-color: #353434,\\r\\n  $background-color-hover: $color-main,\\r\\n  $font-color: white,\\r\\n  $font-color-hover: $color-black-18\\r\\n) {\\r\\n  border-radius: 10px;\\r\\n  padding: 12px 20px;\\r\\n\\r\\n  cursor: pointer;\\r\\n  background: $background-color;\\r\\n  color: $font-color;\\r\\n  border: 1px solid $color-black-18;\\r\\n  transition: all 0.4s;\\r\\n  &:hover {\\r\\n    background: $background-color-hover;\\r\\n    color: $font-color-hover;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin authDiscription {\\r\\n  color: $color-gray-a1;\\r\\n  margin-block: 15px 30px;\\r\\n  font-size: 15px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n@mixin activeItemMenuMob {\\r\\n  span {\\r\\n    color: $blue-active-item;\\r\\n  }\\r\\n\\r\\n  svg {\\r\\n    stroke: $blue-active-item;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin color($color) {\\r\\n  border-color: $color;\\r\\n}\\r\\n@mixin flex-gap($gap: 10) {\\r\\n  display: flex;\\r\\n  gap: #{$gap};\\r\\n}\\r\\n\\r\\n@mixin fluid-text($max: 48, $min: 16, $property: font-size) {\\r\\n  #{$property}: clamp(#{$min}px, #{$max / 1527 * 100}vw, #{$max}px);\\r\\n}\\r\\n\",\"$container-max-width: 1530px;\\r\\n$container-padding-x: 40px;\\r\\n$duration: 0.3s;\\r\\n$color-main: #f6f6f6;\\r\\n$color-gray-a1: #a1a1a1;\\r\\n$color-gray-2: #f5f5f5;\\r\\n$color-black-18: #1a1818;\\r\\n$color-black-39: #393737;\\r\\n$forest-green: forestgreen;\\r\\n$red-ec: #ec6b6b;\\r\\n$red-error: #ff5c5c;\\r\\n$blue-gitHub: #3e75c3;\\r\\n$blue-active-item: rgb(71, 71, 226);\\r\\n$blue-notRegister: blue;\\r\\n$google-peach: #e0ac53;\\r\\n\\r\\n$font-size-h1: 38px;\\r\\n$font-size-h2: 18px;\\r\\n$height-header: 120px;\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"aside-actions-device_root__DhI1t\",\n\t\"root__control\": \"aside-actions-device_root__control__R2t8I\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbNF0hLi9zcmMvcGFnZXMvcHJvZHVjdC91aS9hc2lkZS1hY3Rpb25zLXByb2R1Y3QvYXNpZGUtYWN0aW9ucy1kZXZpY2UubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywrS0FBMkY7QUFDckk7QUFDQTtBQUNBLDZFQUE2RSxrQkFBa0IsY0FBYyxrQkFBa0Isa0JBQWtCLGdDQUFnQyw4QkFBOEIscURBQXFELGlDQUFpQywwQkFBMEIsMkJBQTJCLDBCQUEwQixtQ0FBbUMsR0FBRywwQ0FBMEMsb0JBQW9CLHFCQUFxQixHQUFHLDRDQUE0Qyx3QkFBd0IsdUJBQXVCLG9CQUFvQix3QkFBd0IsaUJBQWlCLDhCQUE4Qix5QkFBeUIsR0FBRyxrREFBa0Qsd0JBQXdCLG1CQUFtQixHQUFHLDhDQUE4QyxrQkFBa0Isd0JBQXdCLGNBQWMsR0FBRyxxREFBcUQsaUJBQWlCLGtCQUFrQixHQUFHLE9BQU8saU9BQWlPLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxzSkFBc0osZUFBZSw4QkFBOEIsd0JBQXdCLG9CQUFvQixrQ0FBa0MsZ0NBQWdDLHVEQUF1RCxtQ0FBbUMsNEJBQTRCLDZCQUE2Qiw0QkFBNEIscUNBQXFDLFlBQVksd0JBQXdCLHlCQUF5QixPQUFPLGNBQWMsd0JBQXdCLE9BQU8sc0JBQXNCLDZCQUE2QixrQkFBa0IsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsU0FBUyxPQUFPLEtBQUssbUNBQW1DLG9CQUFvQixxQ0FBcUMsMEJBQTBCLEtBQUssbUNBQW1DLG9CQUFvQiw4QkFBOEIsMEJBQTBCLEtBQUssd0JBQXdCLG9CQUFvQiw4QkFBOEIsS0FBSyx3QkFBd0Isb0JBQW9CLGlDQUFpQyxLQUFLLHFCQUFxQixtQ0FBbUMsZ0JBQWdCLFlBQVksb0JBQW9CLE9BQU8sVUFBVSx3QkFBd0IsMkJBQTJCLHlCQUF5QixxQkFBcUIsa0NBQWtDLE9BQU8sS0FBSywwS0FBMEssMEJBQTBCLHlCQUF5QiwwQkFBMEIsb0NBQW9DLHlCQUF5Qix3Q0FBd0MsMkJBQTJCLGVBQWUsNENBQTRDLGlDQUFpQyxPQUFPLEtBQUssZ0NBQWdDLDRCQUE0Qiw4QkFBOEIsc0JBQXNCLHVCQUF1QixLQUFLLGtDQUFrQyxZQUFZLGlDQUFpQyxPQUFPLGVBQWUsa0NBQWtDLE9BQU8sS0FBSyw4QkFBOEIsMkJBQTJCLEtBQUssK0JBQStCLG9CQUFvQixhQUFhLE1BQU0sS0FBSyxxRUFBcUUsUUFBUSxVQUFVLFVBQVUsS0FBSyxNQUFNLGtCQUFrQixNQUFNLEtBQUssSUFBSSxLQUFLLG9DQUFvQywrQkFBK0Isb0JBQW9CLHlCQUF5Qiw0QkFBNEIsMkJBQTJCLDZCQUE2Qiw2QkFBNkIsK0JBQStCLHFCQUFxQix3QkFBd0IsMEJBQTBCLHdDQUF3Qyw0QkFBNEIsMkJBQTJCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLHVCQUF1QjtBQUMvL0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9kdWN0L3VpL2FzaWRlLWFjdGlvbnMtcHJvZHVjdC9hc2lkZS1hY3Rpb25zLWRldmljZS5tb2R1bGUuc2Nzcz82NzE2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXNpZGUtYWN0aW9ucy1kZXZpY2Vfcm9vdF9fRGhJMXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMjBweDtcXG4gIC8qIGdhcDogMjFweDsgKi9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgLyogcGFkZGluZzogMTZweCAyMHB4IDIwcHg7ICovXFxuICAvKiBib3JkZXItcmFkaXVzOiAxNnB4OyAqL1xcbiAgLyogYm94LXNoYWRvdzogMCAycHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMDgpOyAqL1xcbiAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAvKiB3aWR0aDogbWF4LWNvbnRlbnQ7ICovXFxuICBoZWlnaHQ6IG1heC1jb250ZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4uYXNpZGUtYWN0aW9ucy1kZXZpY2Vfcm9vdF9fRGhJMXQgc3BhbiB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4uYXNpZGUtYWN0aW9ucy1kZXZpY2Vfcm9vdF9fRGhJMXQgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjMzUzNDM0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzFhMTgxODtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcbn1cXG4uYXNpZGUtYWN0aW9ucy1kZXZpY2Vfcm9vdF9fRGhJMXQgYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxuICBjb2xvcjogIzFhMTgxODtcXG59XFxuLmFzaWRlLWFjdGlvbnMtZGV2aWNlX3Jvb3RfX2NvbnRyb2xfX1IydDhJIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG4uYXNpZGUtYWN0aW9ucy1kZXZpY2Vfcm9vdF9fY29udHJvbF9fUjJ0OEkgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvcGFnZXMvcHJvZHVjdC91aS9hc2lkZS1hY3Rpb25zLXByb2R1Y3QvYXNpZGUtYWN0aW9ucy1kZXZpY2UubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL2xpYnMvX21peGlucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9saWJzL192ZXJpYWJsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQzJFRSxhQUFBO0VBQ0EsU0FBQTtFRHpFQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnREFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFGRjtBQUdFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFHRTtFQ3VCQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLG1CQVRtQjtFQVVuQixZQVJhO0VBU2IseUJBQUE7RUFDQSxvQkFBQTtBRHhCRjtBQ3lCRTtFQUNFLG1CQ2pEUztFRGtEVCxjQy9DYTtBRndCakI7QUFORTtFQ1pBLGFBQUE7RUFFQSxtQkFBQTtFRFlFLFNBQUE7QUFTSjtBQVJJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFVTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi8uLi9zdHlsZXMvbGlicy92ZXJpYWJsZXNcXFwiLCBcXFwiLi4vLi4vLi4vLi4vc3R5bGVzL2xpYnMvYWRhcHRpdmVcXFwiLFxcclxcbiAgXFxcIi4uLy4uLy4uLy4uL3N0eWxlcy9saWJzL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLnJvb3Qge1xcclxcbiAgQGluY2x1ZGUgZmxleC1nYXAoMjBweCk7XFxyXFxuXFxyXFxuICAvKiBnYXA6IDIxcHg7ICovXFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIC8qIHBhZGRpbmc6IDE2cHggMjBweCAyMHB4OyAqL1xcclxcbiAgLyogYm9yZGVyLXJhZGl1czogMTZweDsgKi9cXHJcXG4gIC8qIGJveC1zaGFkb3c6IDAgMnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTsgKi9cXHJcXG4gIC8qIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLyogd2lkdGg6IG1heC1jb250ZW50OyAqL1xcclxcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICB9XFxyXFxuICBidXR0b24ge1xcclxcbiAgICBAaW5jbHVkZSBidXR0b247XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19jb250cm9sIHtcXHJcXG4gICAgQGluY2x1ZGUgZmxleC1jZW50ZXI7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgYnV0dG9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkBtaXhpbiBmbGV4LWNlbnRlci1iZXR3ZWVuIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmxleC1jZW50ZXItY2VudGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbkBtaXhpbiBmbGV4LWNlbnRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1peGluIGZsZXgtY29sdW1uIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gbG9nbyB7XFxyXFxuICBAaW5jbHVkZSBmbGV4LWNlbnRlci1iZXR3ZWVuO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgc3BhbiB7XFxyXFxuICAgIGNvbG9yOiBncmF5O1xcclxcbiAgfVxcclxcbiAgaDIge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYnV0dG9uKFxcclxcbiAgJGJhY2tncm91bmQtY29sb3I6ICMzNTM0MzQsXFxyXFxuICAkYmFja2dyb3VuZC1jb2xvci1ob3ZlcjogJGNvbG9yLW1haW4sXFxyXFxuICAkZm9udC1jb2xvcjogd2hpdGUsXFxyXFxuICAkZm9udC1jb2xvci1ob3ZlcjogJGNvbG9yLWJsYWNrLTE4XFxyXFxuKSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcblxcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogJGJhY2tncm91bmQtY29sb3I7XFxyXFxuICBjb2xvcjogJGZvbnQtY29sb3I7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItYmxhY2stMTg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvci1ob3ZlcjtcXHJcXG4gICAgY29sb3I6ICRmb250LWNvbG9yLWhvdmVyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYXV0aERpc2NyaXB0aW9uIHtcXHJcXG4gIGNvbG9yOiAkY29sb3ItZ3JheS1hMTtcXHJcXG4gIG1hcmdpbi1ibG9jazogMTVweCAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGFjdGl2ZUl0ZW1NZW51TW9iIHtcXHJcXG4gIHNwYW4ge1xcclxcbiAgICBjb2xvcjogJGJsdWUtYWN0aXZlLWl0ZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzdmcge1xcclxcbiAgICBzdHJva2U6ICRibHVlLWFjdGl2ZS1pdGVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gY29sb3IoJGNvbG9yKSB7XFxyXFxuICBib3JkZXItY29sb3I6ICRjb2xvcjtcXHJcXG59XFxyXFxuQG1peGluIGZsZXgtZ2FwKCRnYXA6IDEwKSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAjeyRnYXB9O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmx1aWQtdGV4dCgkbWF4OiA0OCwgJG1pbjogMTYsICRwcm9wZXJ0eTogZm9udC1zaXplKSB7XFxyXFxuICAjeyRwcm9wZXJ0eX06IGNsYW1wKCN7JG1pbn1weCwgI3skbWF4IC8gMTUyNyAqIDEwMH12dywgI3skbWF4fXB4KTtcXHJcXG59XFxyXFxuXCIsXCIkY29udGFpbmVyLW1heC13aWR0aDogMTUzMHB4O1xcclxcbiRjb250YWluZXItcGFkZGluZy14OiA0MHB4O1xcclxcbiRkdXJhdGlvbjogMC4zcztcXHJcXG4kY29sb3ItbWFpbjogI2Y2ZjZmNjtcXHJcXG4kY29sb3ItZ3JheS1hMTogI2ExYTFhMTtcXHJcXG4kY29sb3ItZ3JheS0yOiAjZjVmNWY1O1xcclxcbiRjb2xvci1ibGFjay0xODogIzFhMTgxODtcXHJcXG4kY29sb3ItYmxhY2stMzk6ICMzOTM3Mzc7XFxyXFxuJGZvcmVzdC1ncmVlbjogZm9yZXN0Z3JlZW47XFxyXFxuJHJlZC1lYzogI2VjNmI2YjtcXHJcXG4kcmVkLWVycm9yOiAjZmY1YzVjO1xcclxcbiRibHVlLWdpdEh1YjogIzNlNzVjMztcXHJcXG4kYmx1ZS1hY3RpdmUtaXRlbTogcmdiKDcxLCA3MSwgMjI2KTtcXHJcXG4kYmx1ZS1ub3RSZWdpc3RlcjogYmx1ZTtcXHJcXG4kZ29vZ2xlLXBlYWNoOiAjZTBhYzUzO1xcclxcblxcclxcbiRmb250LXNpemUtaDE6IDM4cHg7XFxyXFxuJGZvbnQtc2l6ZS1oMjogMThweDtcXHJcXG4kaGVpZ2h0LWhlYWRlcjogMTIwcHg7XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicm9vdFwiOiBcImFzaWRlLWFjdGlvbnMtZGV2aWNlX3Jvb3RfX0RoSTF0XCIsXG5cdFwicm9vdF9fY29udHJvbFwiOiBcImFzaWRlLWFjdGlvbnMtZGV2aWNlX3Jvb3RfX2NvbnRyb2xfX1IydDhJXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/pages/product/ui/aside-actions-product/aside-actions-device.module.scss\n"));

/***/ })

});