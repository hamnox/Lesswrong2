/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkuniversal"] = self["webpackChunkuniversal"] || []).push([["newSrc_components_async_CKCommentEditor_tsx"],{

/***/ "./newSrc/components/async/CKCommentEditor.tsx":
/*!*****************************************************!*\
  !*** ./newSrc/components/async/CKCommentEditor.tsx ***!
  \*****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _editor_ReactCKEditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor/ReactCKEditor */ \"./newSrc/components/editor/ReactCKEditor.tsx\");\n/* harmony import */ var _lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lesswrong/lesswrong-editor */ \"../../node_modules/@lesswrong/lesswrong-editor/build/ckeditor.js\");\n/* harmony import */ var _lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_ckEditorUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/ckEditorUtils */ \"./newSrc/lib/ckEditorUtils.ts\");\n/* harmony import */ var _lib_publicSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/publicSettings */ \"./newSrc/lib/publicSettings.ts\");\n\n\n\n\n\nconst CKCommentEditor = ({data, onSave, onChange, onInit}) => {\n  const ckEditorCloudConfigured = !!_lib_publicSettings__WEBPACK_IMPORTED_MODULE_3__.ckEditorWebsocketUrlSetting.get();\n  return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(_editor_ReactCKEditor__WEBPACK_IMPORTED_MODULE_1__.default, {\n    editor: _lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2__.CommentEditor,\n    onInit: (editor) => {\n      if (onInit)\n        onInit(editor);\n      return editor;\n    },\n    onChange,\n    config: {\n      cloudServices: ckEditorCloudConfigured ? {\n        tokenUrl: (0,_lib_ckEditorUtils__WEBPACK_IMPORTED_MODULE_4__.generateTokenRequest)(),\n        uploadUrl: _lib_publicSettings__WEBPACK_IMPORTED_MODULE_3__.ckEditorUploadUrlSetting.get()\n      } : void 0,\n      autosave: {\n        save(editor) {\n          return onSave && onSave(editor.getData());\n        }\n      },\n      initialData: data || \"\"\n    }\n  }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CKCommentEditor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXdTcmMvY29tcG9uZW50cy9hc3luYy9DS0NvbW1lbnRFZGl0b3IudHN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdW5pdmVyc2FsLy4vbmV3U3JjL2NvbXBvbmVudHMvYXN5bmMvQ0tDb21tZW50RWRpdG9yLnRzeD8zM2Y3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDS0VkaXRvciBmcm9tICcuLi9lZGl0b3IvUmVhY3RDS0VkaXRvcic7XG5pbXBvcnQgeyBDb21tZW50RWRpdG9yIH0gZnJvbSAnQGxlc3N3cm9uZy9sZXNzd3JvbmctZWRpdG9yJztcbmltcG9ydCB7IGdlbmVyYXRlVG9rZW5SZXF1ZXN0IH0gZnJvbSAnLi4vLi4vbGliL2NrRWRpdG9yVXRpbHMnO1xuaW1wb3J0IHsgY2tFZGl0b3JVcGxvYWRVcmxTZXR0aW5nLCBja0VkaXRvcldlYnNvY2tldFVybFNldHRpbmcgfSBmcm9tICcuLi8uLi9saWIvcHVibGljU2V0dGluZ3MnXG5cbi8vIFVuY29tbWVudCB0aGUgaW1wb3J0IGFuZCB0aGUgbGluZSBiZWxvdyB0byBhY3RpdmF0ZSB0aGUgZGVidWdnZXJcbi8vIGltcG9ydCBDS0VkaXRvckluc3BlY3RvciBmcm9tICdAY2tlZGl0b3IvY2tlZGl0b3I1LWluc3BlY3Rvcic7XG5cbmNvbnN0IENLQ29tbWVudEVkaXRvciA9ICh7IGRhdGEsIG9uU2F2ZSwgb25DaGFuZ2UsIG9uSW5pdCB9KSA9PiB7XG4gIGNvbnN0IGNrRWRpdG9yQ2xvdWRDb25maWd1cmVkID0gISFja0VkaXRvcldlYnNvY2tldFVybFNldHRpbmcuZ2V0KClcbiAgXG4gIHJldHVybiA8ZGl2PlxuICAgICAgPENLRWRpdG9yXG4gICAgICAgIGVkaXRvcj17IENvbW1lbnRFZGl0b3IgfVxuICAgICAgICBvbkluaXQ9eyBlZGl0b3IgPT4ge1xuICAgICAgICAgICAgLy8gVW5jb21tZW50IHRoZSBsaW5lIGJlbG93IGFuZCB0aGUgaW1wb3J0IGFib3ZlIHRvIGFjdGl2YXRlIHRoZSBkZWJ1Z2dlclxuICAgICAgICAgICAgLy8gQ0tFZGl0b3JJbnNwZWN0b3IuYXR0YWNoKGVkaXRvcilcbiAgICAgICAgICAgIGlmIChvbkluaXQpIG9uSW5pdChlZGl0b3IpXG4gICAgICAgICAgICByZXR1cm4gZWRpdG9yXG4gICAgICAgIH0gfVxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgIGNvbmZpZz17e1xuICAgICAgICAgIGNsb3VkU2VydmljZXM6IGNrRWRpdG9yQ2xvdWRDb25maWd1cmVkID8ge1xuICAgICAgICAgICAgdG9rZW5Vcmw6IGdlbmVyYXRlVG9rZW5SZXF1ZXN0KCksXG4gICAgICAgICAgICB1cGxvYWRVcmw6IGNrRWRpdG9yVXBsb2FkVXJsU2V0dGluZy5nZXQoKSxcbiAgICAgICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgICAgIGF1dG9zYXZlOiB7XG4gICAgICAgICAgICBzYXZlIChlZGl0b3IpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG9uU2F2ZSAmJiBvblNhdmUoIGVkaXRvci5nZXREYXRhKCkgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5pdGlhbERhdGE6IGRhdGEgfHwgXCJcIlxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbn1cbmV4cG9ydCBkZWZhdWx0IENLQ29tbWVudEVkaXRvclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUtBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./newSrc/components/async/CKCommentEditor.tsx\n");

/***/ }),

/***/ "./newSrc/components/editor/ReactCKEditor.tsx":
/*!****************************************************!*\
  !*** ./newSrc/components/editor/ReactCKEditor.tsx ***!
  \****************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ CKEditor\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lesswrong/lesswrong-editor */ \"../../node_modules/@lesswrong/lesswrong-editor/build/ckeditor.js\");\n/* harmony import */ var _lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2__);\n/**\n * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.\n * For licensing, see LICENSE.md.\n */\n\n\n\nclass CKEditor extends react__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(props) {\n    super(props);\n    this.editor = null;\n    this.domContainer = react__WEBPACK_IMPORTED_MODULE_0__.createRef();\n    this.watchdog = new _lesswrong_lesswrong_editor__WEBPACK_IMPORTED_MODULE_2__.EditorWatchdog();\n  }\n  shouldComponentUpdate(nextProps) {\n    if (!this.editor) {\n      return false;\n    }\n    if (this._shouldUpdateContent(nextProps)) {\n      this.editor.setData(nextProps.data);\n    }\n    if (\"disabled\" in nextProps) {\n      this.editor.isReadOnly = nextProps.disabled;\n    }\n    return false;\n  }\n  componentDidMount() {\n    this._initializeEditor();\n  }\n  componentWillUnmount() {\n    this._destroyEditor();\n  }\n  render() {\n    return /* @__PURE__ */ react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      ref: this.domContainer\n    });\n  }\n  _initializeEditor() {\n    this.watchdog.setCreator((el, config) => {\n      return this.props.editor.create(el, config).then((editor) => {\n        this.editor = editor;\n        if (\"disabled\" in this.props) {\n          editor.isReadOnly = this.props.disabled;\n        }\n        if (this.props.onInit) {\n          this.props.onInit(editor);\n        }\n        const modelDocument = editor.model.document;\n        const viewDocument = editor.editing.view.document;\n        modelDocument.on(\"change:data\", (event) => {\n          if (this.props.onChange) {\n            this.props.onChange(event, editor);\n          }\n        });\n        viewDocument.on(\"focus\", (event) => {\n          if (this.props.onFocus) {\n            this.props.onFocus(event, editor);\n          }\n        });\n        viewDocument.on(\"blur\", (event) => {\n          if (this.props.onBlur) {\n            this.props.onBlur(event, editor);\n          }\n        });\n        return editor;\n      }).catch((error) => {\n        console.error(error);\n      });\n    });\n    this.watchdog.setDestructor((editor) => editor.destroy());\n    this.watchdog.create(this.domContainer.current, this.props.config);\n    this.watchdog.on(\"error\", () => {\n      console.log(\"Editor crashed.\");\n    });\n    this.watchdog.on(\"restart\", () => {\n      console.log(\"Editor was restarted.\");\n    });\n  }\n  _destroyEditor() {\n    if (this.watchdog && this.editor) {\n      this.editor.destroy().then(() => {\n        this.editor = null;\n      });\n    }\n  }\n  _shouldUpdateContent(nextProps) {\n    if (this.props.data === nextProps.data) {\n      return false;\n    }\n    if (this.editor.getData() === nextProps.data) {\n      return false;\n    }\n    return true;\n  }\n}\n;\nCKEditor.propTypes = {\n  editor: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),\n  data: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),\n  config: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().object),\n  onChange: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  onInit: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  onFocus: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  onBlur: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func),\n  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool)\n};\nCKEditor.defaultProps = {\n  config: {}\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXdTcmMvY29tcG9uZW50cy9lZGl0b3IvUmVhY3RDS0VkaXRvci50c3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bml2ZXJzYWwvLi9uZXdTcmMvY29tcG9uZW50cy9lZGl0b3IvUmVhY3RDS0VkaXRvci50c3g/ZTNlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwMy0yMDE5LCBDS1NvdXJjZSAtIEZyZWRlcmljbyBLbmFiYmVuLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogRm9yIGxpY2Vuc2luZywgc2VlIExJQ0VOU0UubWQuXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBFZGl0b3JXYXRjaGRvZyB9IGZyb20gJ0BsZXNzd3JvbmcvbGVzc3dyb25nLWVkaXRvcidcblxuaW50ZXJmYWNlIENLRWRpdG9yUHJvcHMge1xuICBkYXRhPzogYW55LFxuICBlZGl0b3I6IGFueSxcbiAgZGlzYWJsZWQ/OiBhbnksXG4gIG9uSW5pdD86IGFueSxcbiAgb25DaGFuZ2U/OiBhbnksXG4gIG9uRm9jdXM/OiBhbnksXG4gIG9uQmx1cj86IGFueSxcbiAgY29uZmlnPzogYW55LFxufVxuXG4vLyBDb3BpZWQgZnJvbSBhbmQgbW9kaWZpZWQ6IGh0dHBzOi8vZ2l0aHViLmNvbS9ja2VkaXRvci9ja2VkaXRvcjUtcmVhY3QvYmxvYi9tYXN0ZXIvc3JjL2NrZWRpdG9yLmpzeFxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ0tFZGl0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8Q0tFZGl0b3JQcm9wcyx7fT4ge1xuICBkb21Db250YWluZXI6IGFueVxuICB3YXRjaGRvZzogYW55XG4gIGVkaXRvcjogYW55XG4gIFxuICBjb25zdHJ1Y3Rvcihwcm9wczogQ0tFZGl0b3JQcm9wcykge1xuICAgIHN1cGVyKCBwcm9wcyApO1xuICAgIFxuICAgIC8vIEFmdGVyIG1vdW50aW5nIHRoZSBlZGl0b3IsIHRoZSB2YXJpYWJsZSB3aWxsIGNvbnRhaW4gYSByZWZlcmVuY2UgdG8gdGhlIGNyZWF0ZWQgZWRpdG9yLlxuICAgIC8vIEBzZWU6IGh0dHBzOi8vY2tlZGl0b3IuY29tL2RvY3MvY2tlZGl0b3I1L2xhdGVzdC9hcGkvbW9kdWxlX2NvcmVfZWRpdG9yX2VkaXRvci1FZGl0b3IuaHRtbFxuICAgIHRoaXMuZWRpdG9yID0gbnVsbDtcbiAgICB0aGlzLmRvbUNvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICAgIHRoaXMud2F0Y2hkb2cgPSBuZXcgRWRpdG9yV2F0Y2hkb2coKVxuICB9XG4gIFxuICAvLyBUaGlzIGNvbXBvbmVudCBzaG91bGQgbmV2ZXIgYmUgdXBkYXRlZCBieSBSZWFjdCBpdHNlbGYuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZSggbmV4dFByb3BzICkge1xuICAgIGlmICggIXRoaXMuZWRpdG9yICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIHRoaXMuX3Nob3VsZFVwZGF0ZUNvbnRlbnQoIG5leHRQcm9wcyApICkge1xuICAgICAgdGhpcy5lZGl0b3Iuc2V0RGF0YSggbmV4dFByb3BzLmRhdGEgKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCAnZGlzYWJsZWQnIGluIG5leHRQcm9wcyApIHtcbiAgICAgIHRoaXMuZWRpdG9yLmlzUmVhZE9ubHkgPSBuZXh0UHJvcHMuZGlzYWJsZWQ7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBcbiAgLy8gSW5pdGlhbGl6ZSB0aGUgZWRpdG9yIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLl9pbml0aWFsaXplRWRpdG9yKCk7XG4gIH1cbiAgXG4gIC8vIERlc3Ryb3kgdGhlIGVkaXRvciBiZWZvcmUgdW5tb3V0aW5nIHRoZSBjb21wb25lbnQuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuX2Rlc3Ryb3lFZGl0b3IoKTtcbiAgfVxuICBcbiAgLy8gUmVuZGVyIGEgPGRpdj4gZWxlbWVudCB3aGljaCB3aWxsIGJlIHJlcGxhY2VkIGJ5IENLRWRpdG9yLlxuICByZW5kZXIoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBpbmplY3QgaW5pdGlhbCBkYXRhIHRvIHRoZSBjb250YWluZXIgd2hlcmUgdGhlIGVkaXRhYmxlIHdpbGwgYmUgZW5hYmxlZC4gVXNpbmcgYGVkaXRvci5zZXREYXRhKClgXG4gICAgLy8gaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCBpbml0aWFsaXplcyB0aGUgZGF0YSBhZnRlciBldmVyeSBuZXcgY29ubmVjdGlvbiAoaW4gY2FzZSBvZiBjb2xsYWJvcmF0aW9uIHVzYWdlKS5cbiAgICAvLyBJdCBsZWFkcyB0byByZXNldCB0aGUgZW50aXJlIGNvbnRlbnQuIFNlZTogIzY4XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXsgdGhpcy5kb21Db250YWluZXIgfSA+PC9kaXY+XG4gICAgKTtcbiAgfVxuICAgIFxuICBfaW5pdGlhbGl6ZUVkaXRvcigpIHtcbiAgICB0aGlzLndhdGNoZG9nLnNldENyZWF0b3IoKGVsLCBjb25maWcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmVkaXRvclxuICAgICAgICAuY3JlYXRlKCBlbCAsIGNvbmZpZyApXG4gICAgICAgIC50aGVuKCBlZGl0b3IgPT4ge1xuICAgICAgICAgIHRoaXMuZWRpdG9yID0gZWRpdG9yO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICggJ2Rpc2FibGVkJyBpbiB0aGlzLnByb3BzICkge1xuICAgICAgICAgICAgZWRpdG9yLmlzUmVhZE9ubHkgPSB0aGlzLnByb3BzLmRpc2FibGVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoIHRoaXMucHJvcHMub25Jbml0ICkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkluaXQoIGVkaXRvciApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBtb2RlbERvY3VtZW50ID0gZWRpdG9yLm1vZGVsLmRvY3VtZW50O1xuICAgICAgICAgIGNvbnN0IHZpZXdEb2N1bWVudCA9IGVkaXRvci5lZGl0aW5nLnZpZXcuZG9jdW1lbnQ7XG4gICAgICAgICAgXG4gICAgICAgICAgbW9kZWxEb2N1bWVudC5vbiggJ2NoYW5nZTpkYXRhJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgICAgICAgIGlmICggdGhpcy5wcm9wcy5vbkNoYW5nZSApIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSggZXZlbnQsIGVkaXRvciApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gKTtcbiAgICAgICAgICBcbiAgICAgICAgICB2aWV3RG9jdW1lbnQub24oICdmb2N1cycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICAgICAgICBpZiAoIHRoaXMucHJvcHMub25Gb2N1cyApIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkZvY3VzKCBldmVudCwgZWRpdG9yICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSApO1xuICAgICAgICAgIFxuICAgICAgICAgIHZpZXdEb2N1bWVudC5vbiggJ2JsdXInLCBldmVudCA9PiB7XG4gICAgICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgICAgICAgaWYgKCB0aGlzLnByb3BzLm9uQmx1ciApIHtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoIGV2ZW50LCBlZGl0b3IgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9ICk7XG4gICAgICAgICAgcmV0dXJuIGVkaXRvclxuICAgICAgICB9IClcbiAgICAgICAgLmNhdGNoKCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCBlcnJvciApO1xuICAgICAgICB9ICk7XG4gICAgfSlcbiAgICB0aGlzLndhdGNoZG9nLnNldERlc3RydWN0b3IoZWRpdG9yID0+IGVkaXRvci5kZXN0cm95KCkpXG4gICAgdGhpcy53YXRjaGRvZy5jcmVhdGUodGhpcy5kb21Db250YWluZXIuY3VycmVudCwgdGhpcy5wcm9wcy5jb25maWcpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICB0aGlzLndhdGNoZG9nLm9uKCAnZXJyb3InLCAoKSA9PiB7IGNvbnNvbGUubG9nKCAnRWRpdG9yIGNyYXNoZWQuJyApIH0gKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgIHRoaXMud2F0Y2hkb2cub24oICdyZXN0YXJ0JywgKCkgPT4geyBjb25zb2xlLmxvZyggJ0VkaXRvciB3YXMgcmVzdGFydGVkLicgKSB9ICk7XG4gIH1cbiAgICBcbiAgX2Rlc3Ryb3lFZGl0b3IoKSB7XG4gICAgaWYgKCB0aGlzLndhdGNoZG9nICYmIHRoaXMuZWRpdG9yICkge1xuICAgICAgLy8gV2Ugc2hvdWxkIHByb2JhYmx5IGNhbGwgd2F0Y2hkb2cuZGVzdHJveSgpIGhlcmUgaW5zdGVhZCwgYnV0IHRoYXQgc2VlbXMgdG8gcmVsaWFibHkgcmVzdWx0IGluIGVycm9ycyBJIGRvbid0IHVuZGVyc3RhbmQuIFNvIHRoZXJlIGlzIHNvbWUgY2hhbmNlIHRoaXMgaXMgY2F1c2luZyBzb21lIG1lbW9yeSBsZWFrcy4gXG4gICAgICAvLyBTZWUgdGhpcyBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2NrZWRpdG9yL2NrZWRpdG9yNS9pc3N1ZXMvNTg5N1xuICAgICAgdGhpcy5lZGl0b3IuZGVzdHJveSgpXG4gICAgICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5lZGl0b3IgPSBudWxsO1xuICAgICAgICB9ICk7XG4gICAgfVxuICB9XG4gICAgXG4gIF9zaG91bGRVcGRhdGVDb250ZW50KCBuZXh0UHJvcHMgKSB7XG4gICAgLy8gQ2hlY2sgd2hldGhlciBgbmV4dFByb3BzLmRhdGFgIGlzIGVxdWFsIHRvIGB0aGlzLnByb3BzLmRhdGFgIGlzIHJlcXVpcmVkIGlmIHNvbWVib2R5IGRlZmluZWQgdGhlIGAjZGF0YWBcbiAgICAvLyBwcm9wZXJ0eSBhcyBhIHN0YXRpYyBzdHJpbmcgYW5kIHVwZGF0ZWQgYSBzdGF0ZSBvZiBjb21wb25lbnQgd2hlbiB0aGUgZWRpdG9yJ3MgY29udGVudCBoYXMgYmVlbiBjaGFuZ2VkLlxuICAgIC8vIElmIHdlIGF2b2lkIGNoZWNraW5nIHRob3NlIHByb3BlcnRpZXMsIHRoZSBlZGl0b3IncyBjb250ZW50IHdpbGwgYmFjayB0byB0aGUgaW5pdGlhbCB2YWx1ZSBiZWNhdXNlXG4gICAgLy8gdGhlIHN0YXRlIGhhcyBiZWVuIGNoYW5nZWQgYW5kIFJlYWN0IHdpbGwgY2FsbCB0aGlzIG1ldGhvZC5cbiAgICBpZiAoIHRoaXMucHJvcHMuZGF0YSA9PT0gbmV4dFByb3BzLmRhdGEgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIC8vIFdlIHNob3VsZCBub3QgY2hhbmdlIGRhdGEgaWYgdGhlIGVkaXRvcidzIGNvbnRlbnQgaXMgZXF1YWwgdG8gdGhlIGAjZGF0YWAgcHJvcGVydHkuXG4gICAgaWYgKCB0aGlzLmVkaXRvci5nZXREYXRhKCkgPT09IG5leHRQcm9wcy5kYXRhICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuLy8gUHJvcGVydGllcyBkZWZpbml0aW9uLlxuKENLRWRpdG9yIGFzIGFueSkucHJvcFR5cGVzID0ge1xuICBlZGl0b3I6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRhdGE6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbmZpZzogUHJvcFR5cGVzLm9iamVjdCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICBvbkluaXQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuXG4vLyBEZWZhdWx0IHZhbHVlcyBmb3Igbm9uLXJlcXVpcmVkIHByb3BlcnRpZXMuXG4oQ0tFZGl0b3IgYXMgYW55KS5kZWZhdWx0UHJvcHMgPSB7XG4gIGNvbmZpZzoge31cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBUEE7QUFxQkE7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFLQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBR0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQUE7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./newSrc/components/editor/ReactCKEditor.tsx\n");

/***/ }),

/***/ "./newSrc/lib/ckEditorUtils.ts":
/*!*************************************!*\
  !*** ./newSrc/lib/ckEditorUtils.ts ***!
  \*************************************/
/*! namespace exports */
/*! export generateTokenRequest [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getCKEditorDocumentId [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getCKEditorDocumentId\": () => /* binding */ getCKEditorDocumentId,\n/* harmony export */   \"generateTokenRequest\": () => /* binding */ generateTokenRequest\n/* harmony export */ });\nconst getCKEditorDocumentId = (documentId, userId, formType) => {\n  if (documentId)\n    return `${documentId}-${formType}`;\n  return `${userId}-${formType}`;\n};\nfunction generateTokenRequest(documentId, userId, formType) {\n  return () => {\n    return new Promise((resolve, reject) => {\n      const xhr = new XMLHttpRequest();\n      xhr.open(\"GET\", \"/ckeditor-token\");\n      xhr.addEventListener(\"load\", () => {\n        const statusCode = xhr.status;\n        const xhrResponse = xhr.response;\n        if (statusCode < 200 || statusCode > 299) {\n          return reject(new Error(\"Cannot download a new token!\"));\n        }\n        return resolve(xhrResponse);\n      });\n      xhr.addEventListener(\"error\", () => reject(new Error(\"Network error\")));\n      xhr.addEventListener(\"abort\", () => reject(new Error(\"Abort\")));\n      if (documentId)\n        xhr.setRequestHeader(\"document-id\", documentId);\n      if (userId)\n        xhr.setRequestHeader(\"user-id\", userId);\n      if (formType)\n        xhr.setRequestHeader(\"form-type\", formType);\n      xhr.send();\n    });\n  };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXdTcmMvbGliL2NrRWRpdG9yVXRpbHMudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91bml2ZXJzYWwvLi9uZXdTcmMvbGliL2NrRWRpdG9yVXRpbHMudHM/OTIzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjb25zdCBnZXRDS0VkaXRvckRvY3VtZW50SWQgPSAoZG9jdW1lbnRJZDogc3RyaW5nLCB1c2VySWQ6IHN0cmluZywgZm9ybVR5cGU6IHN0cmluZykgPT4ge1xuICBpZiAoZG9jdW1lbnRJZCkgcmV0dXJuIGAke2RvY3VtZW50SWR9LSR7Zm9ybVR5cGV9YFxuICByZXR1cm4gYCR7dXNlcklkfS0ke2Zvcm1UeXBlfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlVG9rZW5SZXF1ZXN0KGRvY3VtZW50SWQ/OiBzdHJpbmcsIHVzZXJJZD86IHN0cmluZywgZm9ybVR5cGU/OiBzdHJpbmcpIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoICggcmVzb2x2ZSwgcmVqZWN0ICkgPT4ge1xuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgXG4gICAgICAgIHhoci5vcGVuKCAnR0VUJywgJy9ja2VkaXRvci10b2tlbicgKTtcbiAgXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXR1c0NvZGUgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgY29uc3QgeGhyUmVzcG9uc2UgPSB4aHIucmVzcG9uc2U7XG4gIFxuICAgICAgICAgICAgaWYgKCBzdGF0dXNDb2RlIDwgMjAwIHx8IHN0YXR1c0NvZGUgPiAyOTkgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlamVjdCggbmV3IEVycm9yKCAnQ2Fubm90IGRvd25sb2FkIGEgbmV3IHRva2VuIScgKSApO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKCB4aHJSZXNwb25zZSApO1xuICAgICAgICB9ICk7XG4gIFxuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgKCkgPT4gcmVqZWN0KCBuZXcgRXJyb3IoICdOZXR3b3JrIGVycm9yJyApICkgKTtcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoICdhYm9ydCcsICgpID0+IHJlamVjdCggbmV3IEVycm9yKCAnQWJvcnQnICkgKSApO1xuICBcbiAgICAgICAgaWYgKGRvY3VtZW50SWQpIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCAnZG9jdW1lbnQtaWQnLCBkb2N1bWVudElkICk7XG4gICAgICAgIGlmICh1c2VySWQpIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCAndXNlci1pZCcsIHVzZXJJZCApO1xuICAgICAgICBpZiAoZm9ybVR5cGUpIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCAnZm9ybS10eXBlJywgZm9ybVR5cGUgKTtcbiAgXG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgfSApO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./newSrc/lib/ckEditorUtils.ts\n");

/***/ })

}]);