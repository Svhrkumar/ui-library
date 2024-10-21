/*! For license information please see components-Input-Input-stories.b60718a7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_raghavsvh_pixelflex=self.webpackChunk_raghavsvh_pixelflex||[]).push([[115],{"./src/components/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{InputCheckbox:()=>InputCheckbox,InputDate:()=>InputDate,InputEmail:()=>InputEmail,InputNumber:()=>InputNumber,InputPassword:()=>InputPassword,InputRadio:()=>InputRadio,InputSelect:()=>InputSelect,InputText:()=>InputText,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Input_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const commonStyle=styled_components_browser_esm.AH`
	padding: 5px 10px !important;
	width: 80% !important;
	border-radius: 9px;
	border: 1px solid gray;
	margin: 5px;
	&:focus {
		border: 1px solid blue !important;
	}
	&.sm {
		width: 20% !important;
	}
	&.md {
		width: 35% !important;
	}
	&.lg {
		width: 90% !important;
	}
`,InputTheme=styled_components_browser_esm.Ay.input`
	${props=>"checkbox"===props.type||"radio"===props.type?styled_components_browser_esm.AH`
					width: auto !important;
					padding: 0 !important;
					margin: 5px 5px;
			  `:commonStyle}
`,SelectTheme=styled_components_browser_esm.Ay.select`
	${commonStyle}
`,FormControl=({type,onChange,placeholder,className,value,checked,size,disabled,options})=>{const id=(0,react.useId)();return(0,jsx_runtime.jsx)(react.Fragment,{children:"select"!==type?(0,jsx_runtime.jsx)(InputTheme,{type,onChange:e=>onChange(e),placeholder,className:classnames_default()(className,size),value,checked,disabled}):(0,jsx_runtime.jsxs)(SelectTheme,{onChange:e=>onChange(e),className:classnames_default()(className,size),value,disabled,children:[(0,jsx_runtime.jsx)("option",{value:"",children:"Select an option"}),options?.map((({label,value},index)=>(0,jsx_runtime.jsx)("option",{value,children:label},`${id}-${index}`)))]})})},Input=FormControl;FormControl.__docgenInfo={description:"",methods:[],displayName:"FormControl",props:{type:{required:!0,tsType:{name:"union",raw:"| 'text'\r\n| 'checkbox'\r\n| 'radio'\r\n| 'password'\r\n| 'number'\r\n| 'date'\r\n| 'email'\r\n| 'textarea'\r\n| 'select'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'checkbox'"},{name:"literal",value:"'radio'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'date'"},{name:"literal",value:"'email'"},{name:"literal",value:"'textarea'"},{name:"literal",value:"'select'"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(\r\n\tevent: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>\r\n) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement | HTMLSelectElement>",elements:[{name:"union",raw:"HTMLInputElement | HTMLSelectElement",elements:[{name:"HTMLInputElement"},{name:"HTMLSelectElement"}]}]},name:"event"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},checked:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{\r\n\tlabel: string;\r\n\tvalue: string;\r\n}",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}}]}}],raw:"{\r\n\tlabel: string;\r\n\tvalue: string;\r\n}[]"},description:""}}};const Input_stories={title:"UI Components/Input",component:Input,argTypes:{type:{control:"select",options:["text","checkbox","radio","password","number","date","email","password","select"]},placeholder:{control:"text"},size:{options:["sm","md","lg"],control:"inline-radio"},disabled:{control:"boolean"}}},InputText={args:{type:"text",size:"md",placeholder:"enter name"}},InputCheckbox={args:{type:"checkbox"}},InputRadio={args:{type:"radio"}},InputPassword={args:{type:"password",size:"md",placeholder:"enter password"}},InputNumber={args:{type:"number",size:"md",placeholder:"enter number"}},InputDate={args:{type:"date",size:"md"}},InputEmail={args:{type:"email",size:"md",placeholder:"enter email"}},InputSelect={args:{type:"select",size:"md",options:[{label:"option 1",value:"option 1"},{label:"option 2",value:"option 2"}]}},__namedExportsOrder=["InputText","InputCheckbox","InputRadio","InputPassword","InputNumber","InputDate","InputEmail","InputSelect"];InputText.parameters={...InputText.parameters,docs:{...InputText.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'text',\n    size: 'md',\n    placeholder: 'enter name'\n  }\n}",...InputText.parameters?.docs?.source}}},InputCheckbox.parameters={...InputCheckbox.parameters,docs:{...InputCheckbox.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'checkbox'\n  }\n}",...InputCheckbox.parameters?.docs?.source}}},InputRadio.parameters={...InputRadio.parameters,docs:{...InputRadio.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'radio'\n  }\n}",...InputRadio.parameters?.docs?.source}}},InputPassword.parameters={...InputPassword.parameters,docs:{...InputPassword.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'password',\n    size: 'md',\n    placeholder: 'enter password'\n  }\n}",...InputPassword.parameters?.docs?.source}}},InputNumber.parameters={...InputNumber.parameters,docs:{...InputNumber.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'number',\n    size: 'md',\n    placeholder: 'enter number'\n  }\n}",...InputNumber.parameters?.docs?.source}}},InputDate.parameters={...InputDate.parameters,docs:{...InputDate.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'date',\n    size: 'md'\n  }\n}",...InputDate.parameters?.docs?.source}}},InputEmail.parameters={...InputEmail.parameters,docs:{...InputEmail.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'email',\n    size: 'md',\n    placeholder: 'enter email'\n  }\n}",...InputEmail.parameters?.docs?.source}}},InputSelect.parameters={...InputSelect.parameters,docs:{...InputSelect.parameters?.docs,source:{originalSource:"{\n  args: {\n    type: 'select',\n    size: 'md',\n    options: [{\n      label: 'option 1',\n      value: 'option 1'\n    }, {\n      label: 'option 2',\n      value: 'option 2'\n    }]\n  }\n}",...InputSelect.parameters?.docs?.source}}}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);
//# sourceMappingURL=components-Input-Input-stories.b60718a7.iframe.bundle.js.map