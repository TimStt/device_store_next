/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/pages/profile/ui/profile-info/profile-info.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/pages/profile/ui/profile-info/profile-info.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".profile-info_root__uVhQX {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 24px;\\n  margin-bottom: 98px;\\n}\\n.profile-info_root__image__YuI19 {\\n  border-radius: 50%;\\n  aspect-ratio: 1;\\n  object-fit: cover;\\n  max-width: 130px;\\n  width: 100%;\\n  height: 100%;\\n}\\n@media (max-width: 600px) {\\n  .profile-info_root__image__YuI19 {\\n    margin: auto;\\n  }\\n}\\n.profile-info_root__group_info__xNA7V {\\n  display: flex;\\n  gap: 12px;\\n}\\n.profile-info_root__group_info__label__mFf1I {\\n  font-weight: 600;\\n}\\n@media (max-width: 600px) {\\n  .profile-info_root__group_info__xNA7V {\\n    flex-direction: column;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/pages/profile/ui/profile-info/profile-info.module.scss\",\"webpack://src/styles/libs/_mixins.scss\"],\"names\":[],\"mappings\":\"AAEA;ECeE,aAAA;EAEA,sBAAA;EDfA,SAAA;EACA,mBAAA;AAAF;AAEE;EACE,kBAAA;EACA,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;AAAJ;AAEI;EARF;IASI,YAAA;EACJ;AACF;AAEE;EC0DA,aAAA;EACA,SAAA;ADzDF;AAAI;EACE,gBAAA;AAEN;AACI;EANF;IAOI,sBAAA;EAEJ;AACF\",\"sourcesContent\":[\"@import \\\"../../../../styles/libs/veriables\\\", \\\"../../../../styles/libs/adaptive\\\",\\r\\n  \\\"../../../../styles/libs/mixins\\\";\\r\\n.root {\\r\\n  @include flex-column;\\r\\n  gap: 24px;\\r\\n  margin-bottom: 98px;\\r\\n\\r\\n  &__image {\\r\\n    border-radius: 50%;\\r\\n    aspect-ratio: 1;\\r\\n    object-fit: cover;\\r\\n    max-width: 130px;\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n\\r\\n    @media (max-width: 600px) {\\r\\n      margin: auto;\\r\\n    }\\r\\n  }\\r\\n\\r\\n  &__group_info {\\r\\n    @include flex-gap(12px);\\r\\n    &__label {\\r\\n      font-weight: 600;\\r\\n    }\\r\\n\\r\\n    @media (max-width: 600px) {\\r\\n      flex-direction: column;\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\",\"@mixin flex-center-between {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n@mixin flex-center-center {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n@mixin flex-center {\\r\\n  display: flex;\\r\\n\\r\\n  align-items: center;\\r\\n}\\r\\n@mixin flex-column {\\r\\n  display: flex;\\r\\n\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n@mixin logo {\\r\\n  @include flex-center-between;\\r\\n  gap: 20px;\\r\\n  span {\\r\\n    color: gray;\\r\\n  }\\r\\n  h2 {\\r\\n    font-size: 20px;\\r\\n    margin-bottom: 4px;\\r\\n    font-weight: 700;\\r\\n    color: black;\\r\\n    text-transform: uppercase;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin button(\\r\\n  $background-color: #353434,\\r\\n  $background-color-hover: $color-main,\\r\\n  $font-color: white,\\r\\n  $font-color-hover: $color-black-18\\r\\n) {\\r\\n  border-radius: 10px;\\r\\n  padding: 12px 20px;\\r\\n\\r\\n  cursor: pointer;\\r\\n  background: $background-color;\\r\\n  color: $font-color;\\r\\n  border: 1px solid $color-black-18;\\r\\n  transition: all 0.4s;\\r\\n  &:hover {\\r\\n    background: $background-color-hover;\\r\\n    color: $font-color-hover;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin authDiscription {\\r\\n  color: $color-gray-a1;\\r\\n  margin-block: 15px 30px;\\r\\n  font-size: 15px;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n@mixin activeItemMenuMob {\\r\\n  span {\\r\\n    color: $blue-active-item;\\r\\n  }\\r\\n\\r\\n  svg {\\r\\n    stroke: $blue-active-item;\\r\\n  }\\r\\n}\\r\\n\\r\\n@mixin color($color) {\\r\\n  border-color: $color;\\r\\n}\\r\\n@mixin flex-gap($gap: 10) {\\r\\n  display: flex;\\r\\n  gap: #{$gap};\\r\\n}\\r\\n\\r\\n@mixin fluid-text($max: 48, $min: 16, $property: font-size) {\\r\\n  #{$property}: clamp(#{$min}px, #{$max / 1527 * 100}vw, #{$max}px);\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"root\": \"profile-info_root__uVhQX\",\n\t\"root__image\": \"profile-info_root__image__YuI19\",\n\t\"root__group_info\": \"profile-info_root__group_info__xNA7V\",\n\t\"root__group_info__label\": \"profile-info_root__group_info__label__mFf1I\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZlsxMF0udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbMl0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbMTBdLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzEwXS51c2VbNF0hLi9zcmMvcGFnZXMvcHJvZmlsZS91aS9wcm9maWxlLWluZm8vcHJvZmlsZS1pbmZvLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsK0tBQTJGO0FBQ3JJO0FBQ0E7QUFDQSxxRUFBcUUsa0JBQWtCLDJCQUEyQixjQUFjLHdCQUF3QixHQUFHLG9DQUFvQyx1QkFBdUIsb0JBQW9CLHNCQUFzQixxQkFBcUIsZ0JBQWdCLGlCQUFpQixHQUFHLDZCQUE2QixzQ0FBc0MsbUJBQW1CLEtBQUssR0FBRyx5Q0FBeUMsa0JBQWtCLGNBQWMsR0FBRyxnREFBZ0QscUJBQXFCLEdBQUcsNkJBQTZCLDJDQUEyQyw2QkFBNkIsS0FBSyxHQUFHLE9BQU8sb0tBQW9LLFVBQVUsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLEtBQUssS0FBSyxLQUFLLFdBQVcsS0FBSyxzSkFBc0osV0FBVywyQkFBMkIsZ0JBQWdCLDBCQUEwQixvQkFBb0IsMkJBQTJCLHdCQUF3QiwwQkFBMEIseUJBQXlCLG9CQUFvQixxQkFBcUIsdUNBQXVDLHVCQUF1QixTQUFTLE9BQU8seUJBQXlCLGdDQUFnQyxrQkFBa0IsMkJBQTJCLFNBQVMsdUNBQXVDLGlDQUFpQyxTQUFTLE9BQU8sS0FBSyxtQ0FBbUMsb0JBQW9CLHFDQUFxQywwQkFBMEIsS0FBSyxtQ0FBbUMsb0JBQW9CLDhCQUE4QiwwQkFBMEIsS0FBSyx3QkFBd0Isb0JBQW9CLDhCQUE4QixLQUFLLHdCQUF3QixvQkFBb0IsaUNBQWlDLEtBQUsscUJBQXFCLG1DQUFtQyxnQkFBZ0IsWUFBWSxvQkFBb0IsT0FBTyxVQUFVLHdCQUF3QiwyQkFBMkIseUJBQXlCLHFCQUFxQixrQ0FBa0MsT0FBTyxLQUFLLDBLQUEwSywwQkFBMEIseUJBQXlCLDBCQUEwQixvQ0FBb0MseUJBQXlCLHdDQUF3QywyQkFBMkIsZUFBZSw0Q0FBNEMsaUNBQWlDLE9BQU8sS0FBSyxnQ0FBZ0MsNEJBQTRCLDhCQUE4QixzQkFBc0IsdUJBQXVCLEtBQUssa0NBQWtDLFlBQVksaUNBQWlDLE9BQU8sZUFBZSxrQ0FBa0MsT0FBTyxLQUFLLDhCQUE4QiwyQkFBMkIsS0FBSywrQkFBK0Isb0JBQW9CLGFBQWEsTUFBTSxLQUFLLHFFQUFxRSxRQUFRLFVBQVUsVUFBVSxLQUFLLE1BQU0sa0JBQWtCLE1BQU0sS0FBSyxJQUFJLEtBQUssdUJBQXVCO0FBQ241RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9maWxlL3VpL3Byb2ZpbGUtaW5mby9wcm9maWxlLWluZm8ubW9kdWxlLnNjc3M/OTFjOSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnByb2ZpbGUtaW5mb19yb290X191VmhRWCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMjRweDtcXG4gIG1hcmdpbi1ib3R0b206IDk4cHg7XFxufVxcbi5wcm9maWxlLWluZm9fcm9vdF9faW1hZ2VfX1l1STE5IHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFzcGVjdC1yYXRpbzogMTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgbWF4LXdpZHRoOiAxMzBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5wcm9maWxlLWluZm9fcm9vdF9faW1hZ2VfX1l1STE5IHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG4ucHJvZmlsZS1pbmZvX3Jvb3RfX2dyb3VwX2luZm9fX3hOQTdWIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEycHg7XFxufVxcbi5wcm9maWxlLWluZm9fcm9vdF9fZ3JvdXBfaW5mb19fbGFiZWxfX21GZjFJIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLnByb2ZpbGUtaW5mb19yb290X19ncm91cF9pbmZvX194TkE3ViB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvcGFnZXMvcHJvZmlsZS91aS9wcm9maWxlLWluZm8vcHJvZmlsZS1pbmZvLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9saWJzL19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQ2VFLGFBQUE7RUFFQSxzQkFBQTtFRGZBLFNBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjtBQUVJO0VBUkY7SUFTSSxZQUFBO0VBQ0o7QUFDRjtBQUVFO0VDMERBLGFBQUE7RUFDQSxTQUFBO0FEekRGO0FBQUk7RUFDRSxnQkFBQTtBQUVOO0FBQ0k7RUFORjtJQU9JLHNCQUFBO0VBRUo7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IFxcXCIuLi8uLi8uLi8uLi9zdHlsZXMvbGlicy92ZXJpYWJsZXNcXFwiLCBcXFwiLi4vLi4vLi4vLi4vc3R5bGVzL2xpYnMvYWRhcHRpdmVcXFwiLFxcclxcbiAgXFxcIi4uLy4uLy4uLy4uL3N0eWxlcy9saWJzL21peGluc1xcXCI7XFxyXFxuLnJvb3Qge1xcclxcbiAgQGluY2x1ZGUgZmxleC1jb2x1bW47XFxyXFxuICBnYXA6IDI0cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA5OHB4O1xcclxcblxcclxcbiAgJl9faW1hZ2Uge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIG1heC13aWR0aDogMTMwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZ3JvdXBfaW5mbyB7XFxyXFxuICAgIEBpbmNsdWRlIGZsZXgtZ2FwKDEycHgpO1xcclxcbiAgICAmX19sYWJlbCB7XFxyXFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQG1peGluIGZsZXgtY2VudGVyLWJldHdlZW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmbGV4LWNlbnRlci1jZW50ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuQG1peGluIGZsZXgtY2VudGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5AbWl4aW4gZmxleC1jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBsb2dvIHtcXHJcXG4gIEBpbmNsdWRlIGZsZXgtY2VudGVyLWJldHdlZW47XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBzcGFuIHtcXHJcXG4gICAgY29sb3I6IGdyYXk7XFxyXFxuICB9XFxyXFxuICBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBidXR0b24oXFxyXFxuICAkYmFja2dyb3VuZC1jb2xvcjogIzM1MzQzNCxcXHJcXG4gICRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyOiAkY29sb3ItbWFpbixcXHJcXG4gICRmb250LWNvbG9yOiB3aGl0ZSxcXHJcXG4gICRmb250LWNvbG9yLWhvdmVyOiAkY29sb3ItYmxhY2stMThcXHJcXG4pIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuXFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZC1jb2xvcjtcXHJcXG4gIGNvbG9yOiAkZm9udC1jb2xvcjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1ibGFjay0xODtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kLWNvbG9yLWhvdmVyO1xcclxcbiAgICBjb2xvcjogJGZvbnQtY29sb3ItaG92ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBhdXRoRGlzY3JpcHRpb24ge1xcclxcbiAgY29sb3I6ICRjb2xvci1ncmF5LWExO1xcclxcbiAgbWFyZ2luLWJsb2NrOiAxNXB4IDMwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gYWN0aXZlSXRlbU1lbnVNb2Ige1xcclxcbiAgc3BhbiB7XFxyXFxuICAgIGNvbG9yOiAkYmx1ZS1hY3RpdmUtaXRlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIHN2ZyB7XFxyXFxuICAgIHN0cm9rZTogJGJsdWUtYWN0aXZlLWl0ZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBjb2xvcigkY29sb3IpIHtcXHJcXG4gIGJvcmRlci1jb2xvcjogJGNvbG9yO1xcclxcbn1cXHJcXG5AbWl4aW4gZmxleC1nYXAoJGdhcDogMTApIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6ICN7JGdhcH07XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmbHVpZC10ZXh0KCRtYXg6IDQ4LCAkbWluOiAxNiwgJHByb3BlcnR5OiBmb250LXNpemUpIHtcXHJcXG4gICN7JHByb3BlcnR5fTogY2xhbXAoI3skbWlufXB4LCAjeyRtYXggLyAxNTI3ICogMTAwfXZ3LCAjeyRtYXh9cHgpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwicHJvZmlsZS1pbmZvX3Jvb3RfX3VWaFFYXCIsXG5cdFwicm9vdF9faW1hZ2VcIjogXCJwcm9maWxlLWluZm9fcm9vdF9faW1hZ2VfX1l1STE5XCIsXG5cdFwicm9vdF9fZ3JvdXBfaW5mb1wiOiBcInByb2ZpbGUtaW5mb19yb290X19ncm91cF9pbmZvX194TkE3VlwiLFxuXHRcInJvb3RfX2dyb3VwX2luZm9fX2xhYmVsXCI6IFwicHJvZmlsZS1pbmZvX3Jvb3RfX2dyb3VwX2luZm9fX2xhYmVsX19tRmYxSVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[10].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[10].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[10].use[4]!./src/pages/profile/ui/profile-info/profile-info.module.scss\n"));

/***/ })

});