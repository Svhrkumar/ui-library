"use strict";(self.webpackChunk_raghavsvh_pixelflex=self.webpackChunk_raghavsvh_pixelflex||[]).push([[435],{"./src/components/Modal/stories/Modal.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ModalDark:()=>ModalDark,ModalLight:()=>ModalLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js");const ModalContext=(0,react.createContext)(void 0);var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),md=__webpack_require__("./node_modules/react-icons/md/index.mjs");const ModalContainer=styled_components_browser_esm.Ay.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`,ModalDisplay=styled_components_browser_esm.Ay.div`
	background-color: white;
	border-radius: 9px;
	padding: 0.5rem;
	max-width: 500px;
	width: 100%;
	box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
	animation: slide-down 0.3s ease-out;
	&.sm {
		max-width: 400px;
	}
	&.md {
		max-width: 600px;
	}
	&.lg {
		max-width: 1000px;
	}
	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}
`,ModalContentTheme=styled_components_browser_esm.Ay.div`
	padding: 0.5rem;
	width: 100%;
	max-height: 500px;
	overflow-y: scroll;
`,ModalHeaderTheme=styled_components_browser_esm.Ay.div`
	padding: 0.5rem;
	border-bottom: 1px solid #d1d1d1;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`,ModalFooterTheme=styled_components_browser_esm.Ay.div`
	padding: 0.5rem;
	border-top: 1px solid #d1d1d1;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`,ModalComponent=({children,className,isOpen,onClose,size,theme})=>{const contextValue={onClose};return isOpen?(0,jsx_runtime.jsx)(ModalContext.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(ModalContainer,{className:classnames_default()(className),children:(0,jsx_runtime.jsx)(ModalDisplay,{className:classnames_default()(className,size,theme),children})})}):null},Modal_Modal=Object.assign(ModalComponent,{Content:({className,children})=>(0,jsx_runtime.jsx)(ModalContentTheme,{className:classnames_default()(className),children}),Header:({className,children})=>{const{onClose}=(()=>{const context=(0,react.useContext)(ModalContext);if(!context)throw new Error("ModalBody must be used within an ModalButtom");return context})();return(0,jsx_runtime.jsxs)(ModalHeaderTheme,{className:classnames_default()(className),children:[children,(0,jsx_runtime.jsx)(md.m6K,{style:{cursor:"pointer",padding:"2px 6px"},onClick:()=>{onClose&&onClose()}})]})},Footer:({className,children})=>(0,jsx_runtime.jsx)(ModalFooterTheme,{className:classnames_default()(className),children})});ModalComponent.__docgenInfo={description:"",methods:[],displayName:"ModalComponent",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""}}};const Example=args=>(0,jsx_runtime.jsxs)(Modal_Modal,{...args,children:[(0,jsx_runtime.jsx)(Modal_Modal.Header,{...args,children:(0,jsx_runtime.jsx)("p",{children:"Modal Header"})}),(0,jsx_runtime.jsx)(Modal_Modal.Content,{...args,children:(0,jsx_runtime.jsxs)("p",{children:[" ","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"]})}),(0,jsx_runtime.jsx)(Modal_Modal.Footer,{children:(0,jsx_runtime.jsx)("button",{children:"Close"})})]}),stories_Example=Example;Example.__docgenInfo={description:"",methods:[],displayName:"Example",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},theme:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""}}};const Modal_stories={title:"UI Components/Modal",component:Modal_Modal,render:stories_Example,argTypes:{theme:{control:"select",options:["light","dark"]},size:{options:["sm","md","lg"],control:"inline-radio"},isOpen:{option:"boolean"}}},ModalLight={args:{theme:"light",size:"lg"}},ModalDark={args:{theme:"dark",size:"lg"}},__namedExportsOrder=["ModalLight","ModalDark"];ModalLight.parameters={...ModalLight.parameters,docs:{...ModalLight.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'light',\n    size: 'lg'\n  }\n}",...ModalLight.parameters?.docs?.source}}},ModalDark.parameters={...ModalDark.parameters,docs:{...ModalDark.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    size: 'lg'\n  }\n}",...ModalDark.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Modal-stories-Modal-stories.ea8e5486.iframe.bundle.js.map