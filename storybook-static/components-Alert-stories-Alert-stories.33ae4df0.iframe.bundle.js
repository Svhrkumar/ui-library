/*! For license information please see components-Alert-stories-Alert-stories.33ae4df0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_raghavsvh_pixelflex=self.webpackChunk_raghavsvh_pixelflex||[]).push([[55],{"./src/components/Alert/stories/Alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlertDanger:()=>AlertDanger,AlertInfo:()=>AlertInfo,AlertSuccess:()=>AlertSuccess,AlertWarning:()=>AlertWarning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Alert_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const AlertContext=(0,react.createContext)(void 0),revealAnimation=styled_components_browser_esm.i7`
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`,AlertContainer=styled_components_browser_esm.Ay.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 9999; /* Ensure it appears above other content */
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: none; /* Allow clicks through this container */
`,AlertMessageStyle=styled_components_browser_esm.Ay.div`
	padding: 0.1rem;
	border: 1px solid #ccc;
	border-radius: 9px;
	position: absolute;
	width: 25rem;
	z-index: 10000;
	pointer-events: auto;
	animation: ${revealAnimation} 0.5s ease-out;
	height: auto;
	background-color: #fff;
	&.danger {
		background-color: #de0404;
		color: #fff;
	}
	&.warning {
		background-color: #f2af11;
		color: #fff;
	}
	&.info {
		background-color: #116ff2;
		color: #fff;
	}
	&.success {
		background-color: #40e300;
		color: #fff;
	}
	&.top-left {
		top: 10px;
		left: 10px;
	}
	&.top-right {
		top: 10px;
		right: 10px;
	}
	&.bottom-right {
		bottom: 10px;
		right: 10px;
	}
	&.bottom-left {
		bottom: 10px;
		left: 10px;
	}
`,AlertBoodyStyle=styled_components_browser_esm.Ay.div`
	padding: 3px 6px;
	color: #fff;
`,AlertHeaderStyle=styled_components_browser_esm.Ay.div`
	border-bottom: 1px solid #fff;
	padding: 5px 6px;
	color: #fff;
`,AlertFooterStyle=styled_components_browser_esm.Ay.div`
	border-top: 1px solid #fff;
	padding: 5px 6px;
	color: #fff;
`,CloseButton=styled_components_browser_esm.Ay.button`
	position: absolute;
	top: 5px;
	right: 5px;
	background: none;
	border: none;
	font-size: 16px;
	cursor: pointer;
	color: inherit;
`,Alert_Alert=Object.assign((({children,open,onClose,variant,position,duration,dismissible})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1);if((0,react.useEffect)((()=>{let timer;return open?(setIsOpen(!0),dismissible||(timer=setTimeout((()=>{setIsOpen(!1),onClose&&onClose()}),duration||2e3))):setIsOpen(!1),()=>clearTimeout(timer)}),[open,duration,onClose,dismissible]),!isOpen)return null;const values={isOpen,onClose,variant,position};return react_dom.createPortal((0,jsx_runtime.jsx)(AlertContext.Provider,{value:values,children:(0,jsx_runtime.jsx)(AlertContainer,{className:"alert-container",children})}),document.getElementById("alert-root"))}),{Header:({children})=>(0,jsx_runtime.jsx)(AlertHeaderStyle,{children}),Container:({children})=>{const{isOpen,onClose,variant,position}=(()=>{const context=(0,react.useContext)(AlertContext);if(!context)throw new Error("AccordionHeader must be used within an AccordionItem");return context})();return(0,jsx_runtime.jsxs)(AlertMessageStyle,{className:classnames_default()(variant,position),children:[isOpen&&(0,jsx_runtime.jsx)(CloseButton,{onClick:onClose,children:"×"}),children]})},Body:({children})=>(0,jsx_runtime.jsx)(AlertBoodyStyle,{children}),Footer:({children})=>(0,jsx_runtime.jsx)(AlertFooterStyle,{children})}),AlertWrapper=props=>{const[isAlertOpen,setIsAlertOpen]=(0,react.useState)(!0),handleClose=()=>{setIsAlertOpen(!1)};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{id:"alert-root"}),(0,jsx_runtime.jsxs)(Alert_Alert,{...props,open:isAlertOpen,onClose:handleClose,children:[(0,jsx_runtime.jsxs)(Alert_Alert.Header,{children:[props.variant," Alert"]}),(0,jsx_runtime.jsxs)(Alert_Alert.Body,{children:["This is a ",props.variant," alert message."]}),(0,jsx_runtime.jsx)(Alert_Alert.Footer,{children:(0,jsx_runtime.jsx)("button",{onClick:handleClose,children:"Dismiss"})})]})]})},Example=AlertWrapper;AlertWrapper.__docgenInfo={description:"",methods:[],displayName:"AlertWrapper",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'success' | 'danger' | 'info' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"}]},description:""},position:{required:!1,tsType:{name:"union",raw:"'top-left' | 'top-right' | 'bottom-right' | 'bottom-left'",elements:[{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]},description:""},duration:{required:!1,tsType:{name:"number"},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:""}}};const Alert_stories={title:"UI Components/Alert",component:Example,argTypes:{variant:{control:"select",options:["success","danger","info","warning"]},position:{options:["top-left","top-right","bottom-right","bottom-left"],control:"inline-radio"},duration:{control:"number"},dismissible:{control:"boolean"}}},AlertSuccess={args:{variant:"success",position:"top-right",duration:3e3,dismissible:!0}},AlertInfo={args:{variant:"info",position:"bottom-right",duration:3e3,dismissible:!0}},AlertWarning={args:{variant:"warning",position:"bottom-left",duration:3e3,dismissible:!0}},AlertDanger={args:{variant:"danger",position:"bottom-right",duration:3e3,dismissible:!0}},__namedExportsOrder=["AlertSuccess","AlertInfo","AlertWarning","AlertDanger"];AlertSuccess.parameters={...AlertSuccess.parameters,docs:{...AlertSuccess.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'success',\n    position: 'top-right',\n    duration: 3000,\n    dismissible: true\n  }\n}",...AlertSuccess.parameters?.docs?.source}}},AlertInfo.parameters={...AlertInfo.parameters,docs:{...AlertInfo.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'info',\n    position: 'bottom-right',\n    duration: 3000,\n    dismissible: true\n  }\n}",...AlertInfo.parameters?.docs?.source}}},AlertWarning.parameters={...AlertWarning.parameters,docs:{...AlertWarning.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'warning',\n    position: 'bottom-left',\n    duration: 3000,\n    dismissible: true\n  }\n}",...AlertWarning.parameters?.docs?.source}}},AlertDanger.parameters={...AlertDanger.parameters,docs:{...AlertDanger.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'danger',\n    position: 'bottom-right',\n    duration: 3000,\n    dismissible: true\n  }\n}",...AlertDanger.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=components-Alert-stories-Alert-stories.33ae4df0.iframe.bundle.js.map