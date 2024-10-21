"use strict";(self.webpackChunk_raghavsvh_pixelflex=self.webpackChunk_raghavsvh_pixelflex||[]).push([[187],{"./src/components/Accordion/stories/Accordion.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AccordionDark:()=>AccordionDark,AccordionLight:()=>AccordionLight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Accordion_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),fa=__webpack_require__("./node_modules/react-icons/fa/index.mjs");const AccordionContext=(0,react.createContext)(void 0),useAccordionContext=()=>{const context=(0,react.useContext)(AccordionContext);if(!context)throw new Error("AccordionHeader must be used within an AccordionItem");return context};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames);const AccordionContainer=styled_components_browser_esm.Ay.div`
	display: flex;
	flex-direction: column;
`,AccordionItemContainer=styled_components_browser_esm.Ay.div`
	margin-bottom: 1.5rem;
	border-radius: 5px;
	&.sm {
		width: 50%;
	}
	&.md {
		width: 60%;
	}
	&.lg {
		width: 90%;
	}
`,AccordionHeaderContainer=styled_components_browser_esm.Ay.div`
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-bottom: 0.5rem;
	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}
`,AccordionBodyContainer=styled_components_browser_esm.Ay.div`
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
	display: ${props=>props.isOpen?"block":"none"};
	&.light {
		background-color: #e8ebe9;
		color: #4b4d4b;
	}
	&.dark {
		background-color: #4b4d4b;
		color: #e8ebe9;
	}
`,AccordionComponent=({children})=>(0,jsx_runtime.jsx)(AccordionContainer,{children}),Accordion_Accordion=Object.assign(AccordionComponent,{Item:({children,size,theme=""})=>{const[isOpen,setIsOpen]=(0,react.useState)(!1),values={isOpen,setIsOpen,theme};return(0,jsx_runtime.jsx)(AccordionContext.Provider,{value:values,children:(0,jsx_runtime.jsx)(AccordionItemContainer,{className:classnames_default()(size),children})})},Header:({children,className,isIcon})=>{const{isOpen,setIsOpen,theme}=useAccordionContext();return(0,jsx_runtime.jsxs)(AccordionHeaderContainer,{className:classnames_default()(className,theme),isOpen,onClick:()=>setIsOpen((prev=>!prev)),children:[children,isIcon&&(0,jsx_runtime.jsx)(react.Fragment,{children:isOpen?(0,jsx_runtime.jsx)(fa.Ucs,{}):(0,jsx_runtime.jsx)(fa.Vr3,{})})]})},Body:({children,className})=>{const{isOpen,theme}=useAccordionContext();return(0,jsx_runtime.jsx)(AccordionBodyContainer,{className:classnames_default()(className,theme),isOpen,children})}});AccordionComponent.__docgenInfo={description:"",methods:[],displayName:"AccordionComponent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},isIcon:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""}}};const Example=args=>(0,jsx_runtime.jsx)(Accordion_Accordion,{children:(0,jsx_runtime.jsxs)(Accordion_Accordion.Item,{...args,children:[(0,jsx_runtime.jsx)(Accordion_Accordion.Header,{...args,children:(0,jsx_runtime.jsx)("span",{children:"Accordion one"})}),(0,jsx_runtime.jsx)(Accordion_Accordion.Body,{...args,children:(0,jsx_runtime.jsx)("span",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})})]})});Example.__docgenInfo={description:"",methods:[],displayName:"Example",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},isIcon:{required:!1,tsType:{name:"boolean"},description:""},theme:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:""}}};const Accordion_stories={title:"UI Components/Accordion",component:Accordion_Accordion,argTypes:{theme:{control:"select",options:["light","dark"]},size:{options:["sm","md","lg"],control:"inline-radio"},isIcon:{control:"boolean"}},render:Example},AccordionLight={args:{theme:"light",size:"lg",isIcon:!0}},AccordionDark={args:{theme:"dark",size:"lg",isIcon:!0}},__namedExportsOrder=["AccordionLight","AccordionDark"];AccordionLight.parameters={...AccordionLight.parameters,docs:{...AccordionLight.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'light',\n    size: 'lg',\n    isIcon: true\n  }\n}",...AccordionLight.parameters?.docs?.source}}},AccordionDark.parameters={...AccordionDark.parameters,docs:{...AccordionDark.parameters?.docs,source:{originalSource:"{\n  args: {\n    theme: 'dark',\n    size: 'lg',\n    isIcon: true\n  }\n}",...AccordionDark.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Accordion-stories-Accordion-stories.a624973a.iframe.bundle.js.map