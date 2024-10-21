/*! For license information please see components-Button-Button-stories.1ae60083.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_raghavsvh_pixelflex=self.webpackChunk_raghavsvh_pixelflex||[]).push([[721],{"./src/components/Button/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Disabled:()=>Disabled,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Button_stories,onClick:()=>onClick});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const ButtonTheme=styled_components_browser_esm.Ay.button`
	background-color: #e8ebe9;
	color: #4b4d4b;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #ffffff;
	}

	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}

	&.custom-class {
		background-color: #28a745;
		color: white;
	}
`,Button=({children,onClick,className,disabled,theme})=>(0,jsx_runtime.jsx)(ButtonTheme,{onClick,className:classnames_default()(className,`${theme}`),disabled,children}),Button_Button=Button;Button.__docgenInfo={description:"",methods:[],displayName:"Button"};const Button_stories={title:"UI Components/Button",component:Button_Button,argTypes:{theme:{control:"select",options:["light","dark"]},children:{control:"text"},disabled:{control:"boolean"}}},Light={args:{theme:"light",children:"Click"}},Dark={args:{theme:"dark",children:"Click"}},Disabled={args:{theme:"light",children:"Click",disabled:!0}},onClick={args:{theme:"light",children:"Click",disabled:!1,onClick:()=>alert("Clicked")}},__namedExportsOrder=["Light","Dark","Disabled","onClick"];Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'light',\n    children: 'Click'\n  }\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    children: 'Click'\n  }\n}",...Dark.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'light',\n    children: 'Click',\n    disabled: true\n  }\n}",...Disabled.parameters?.docs?.source}}},onClick.parameters={...onClick.parameters,docs:{...onClick.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'light',\n    children: 'Click',\n    disabled: false,\n    onClick: () => alert('Clicked')\n  }\n}",...onClick.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=components-Button-Button-stories.1ae60083.iframe.bundle.js.map