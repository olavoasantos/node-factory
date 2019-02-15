(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docs/api/3-make.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return d});var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./docs/api/UserFactory.tsx");function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function i(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,n){return!n||"object"!==s(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,n){return(u=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var d=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=m(this,p(n).call(this,e))).layout=null,t}var t,a,s;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&u(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components;l(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"factorymakecount-overrides"}},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"Factory.make([count, overrides])")),r.a.createElement(o.MDXTag,{name:"p",components:n},r.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"args:")),r.a.createElement(o.MDXTag,{name:"ul",components:n},r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"count (number [optional])"),": This argument defines how many objects should be generated (default: 1)"),r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"overrides (IDataObject [optional])"),": These are value which should be overridden on the generated data (default: {})")),r.a.createElement(o.MDXTag,{name:"blockquote",components:n},r.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"blockquote"},"If an object is passed in as the first argument, it will be used to override the values and the count will be set to 1.")),r.a.createElement(o.MDXTag,{name:"p",components:n},r.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"return:")),r.a.createElement(o.MDXTag,{name:"ul",components:n},r.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"data (IDataObject[])"),": Array containing data objects generated by your generator function")),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"description"}},"Description"),r.a.createElement(o.MDXTag,{name:"p",components:n},"This method is used to generate many data objects at once."),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"example"}},"Example"),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"UserFactory.make()\n")),r.a.createElement(c.a,{parse:function(e){return e.make()}}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"UserFactory.make({ id: '123' })\n")),r.a.createElement(c.a,{parse:function(e){return e.make({id:"123"})}}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"UserFactory.make(2)\n")),r.a.createElement(c.a,{parse:function(e){return e.make(2)}}),r.a.createElement(o.MDXTag,{name:"pre",components:n},r.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"UserFactory.make(2, { id: '123' })\n")),r.a.createElement(c.a,{parse:function(e){return e.make(2,{id:"123"})}}))}}])&&i(t.prototype,a),s&&i(t,s),n}()},"./docs/api/UserFactory.tsx":function(e,n,t){"use strict";var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/faker/index.js"),c=t.n(o);function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var i=function(e){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s({},e(c.a),n)},t={create:n,make:function(){var e=function(e){var n,t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"!==typeof e?(t=e,n=1):(t=a,n=e>0?e:1),{data:t,length:n}}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),t=e.data,a=e.length;return Array.from({length:a}).map(function(){return n(t)})},only:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n(t);return Array.isArray(e)?e.reduce(function(e,n){return s({},e,l({},n,a[n]))},{}):l({},e,a[e])},seed:function(e){return c.a.seed(e),t}};return t};try{i.displayName="factory",i.__docgenInfo={description:"",displayName:"factory",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#factory"]={docgenInfo:i.__docgenInfo,name:"factory",path:"src/index.ts#factory"})}catch(p){}var m=i(function(e){return{id:e.random.uuid(),name:e.name.findName(),email:e.internet.email()}});n.a=function(e){var n,t,a=e.parse;return r.a.createElement("pre",{style:{background:"#EEF1F5",borderLeft:"5px solid #CED4DE",color:"#7D899C",margin:"-30px 0 25px 2px",padding:"20px",fontStyle:"italic",fontSize:"18px"},dangerouslySetInnerHTML:{__html:(n=a(m),t={number:"color: #3490DC",key:"color: #6CB2EB",string:"color: #3490DC",boolean:"color: #621B18",null:"color: #E3342F"},"string"!=typeof n&&(n=JSON.stringify(n,void 0,2)),(n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var n="number";return/^"/.test(e)?n=/:$/.test(e)?"key":"string":/true|false/.test(e)?n="boolean":/null/.test(e)&&(n="null"),'<span style="'+t[n]+'">'+e+"</span>"}))}})};try{m.displayName="UserFactory",m.__docgenInfo={description:"",displayName:"UserFactory",props:{parse:{defaultValue:null,description:"",name:"parse",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/api/UserFactory.tsx#UserFactory"]={docgenInfo:m.__docgenInfo,name:"UserFactory",path:"docs/api/UserFactory.tsx#UserFactory"})}catch(p){}}}]);
//# sourceMappingURL=docs-api-3-make.5b8b1f95dc2a238980fa.js.map