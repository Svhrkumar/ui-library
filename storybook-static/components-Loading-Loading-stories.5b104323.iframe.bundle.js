"use strict";(self.webpackChunk_raghavsvh_pixelflex=self.webpackChunk_raghavsvh_pixelflex||[]).push([[647],{"./src/components/Loading/Loading.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Loading_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const spin=styled_components_browser_esm.i7`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`,LoadContainer=styled_components_browser_esm.Ay.div`
	display: grid;
	place-items: center;
	padding: 1rem 2rem;
	z-index: 99;
`,Spinner=styled_components_browser_esm.Ay.div`
	width: 50px;
	padding: 8px;
	aspect-ratio: 1;
	border-radius: 50%;
	background: ${props=>props.color?props.color:"#025ef2"};
	--_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
	-webkit-mask: var(--_m);
	mask: var(--_m);
	-webkit-mask-composite: source-out;
	mask-composite: subtract;
	animation: ${spin} 1s infinite linear;
`,Loading=({isLoading,color="#025ef2"})=>(0,jsx_runtime.jsx)(LoadContainer,{children:isLoading&&(0,jsx_runtime.jsx)(Spinner,{color})}),Loading_Loading=Loading;Loading.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{isLoading:{required:!0,tsType:{name:"boolean"},description:""},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'#025ef2'",computed:!1}}}};const Loading_stories={title:"UI Components/Loading",component:Loading_Loading,argTypes:{isLoading:{control:"boolean"},color:{control:"text"}}},Default={args:{isLoading:!0,color:"#e3a002"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    isLoading: true,\n    color: '#e3a002'\n  }\n}",...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=components-Loading-Loading-stories.5b104323.iframe.bundle.js.map