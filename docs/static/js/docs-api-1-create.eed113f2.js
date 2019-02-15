(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docs/api/1-create.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return f});var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/@mdx-js/tag/dist/index.js"),c=t("./docs/api/UserFactory.tsx");function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,n){return!n||"object"!==i(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,n){return(m=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var f=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=p(this,u(n).call(this,e))).layout=null,t}var t,r,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&m(e,n)}(n,a.a.Component),t=n,(r=[{key:"render",value:function(){var e=this.props,n=e.components;l(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:n},a.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"factorycreateoverrides"}},a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"h2"},"Factory.create([overrides])")),a.a.createElement(o.MDXTag,{name:"p",components:n},a.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"args:")),a.a.createElement(o.MDXTag,{name:"ul",components:n},a.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"overrides (IDataObject [optional])"),": These are value which should be overridden on the generated data (default: ",a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"{}"),")")),a.a.createElement(o.MDXTag,{name:"p",components:n},a.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"return:")),a.a.createElement(o.MDXTag,{name:"ul",components:n},a.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},a.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"data (IDataObject)"),": Data object generated by your generator function")),a.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"description"}},"Description"),a.a.createElement(o.MDXTag,{name:"p",components:n},"This method is used to generate a data object."),a.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"example"}},"Example"),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"UserFactory.create()\n")),a.a.createElement(c.a,{parse:function(e){return e.create()}}),a.a.createElement(o.MDXTag,{name:"pre",components:n},a.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"UserFactory.create({ name: 'JOHN DOE' })\n")),a.a.createElement(c.a,{parse:function(e){return e.create({name:"JOHN DOE"})}}))}}])&&s(t.prototype,r),i&&s(t,i),n}()},"./docs/api/UserFactory.tsx":function(e,n,t){"use strict";var r=t("./node_modules/react/index.js"),a=t.n(r),o=t("./node_modules/faker/index.js"),c=t.n(o);function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){l(e,n,t[n])})}return e}function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s=function(e){var n=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i({},e(c.a),n)},t={create:n,make:function(){var e=function(e){var n,t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"number"!==typeof e?(t=e,n=1):(t=r,n=e>0?e:1),{data:t,length:n}}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),t=e.data,r=e.length;return Array.from({length:r}).map(function(){return n(t)})},only:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n(t);return Array.isArray(e)?e.reduce(function(e,n){return i({},e,l({},n,r[n]))},{}):l({},e,r[e])},seed:function(e){return c.a.seed(e),t}};return t};try{s.displayName="factory",s.__docgenInfo={description:"",displayName:"factory",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#factory"]={docgenInfo:s.__docgenInfo,name:"factory",path:"src/index.ts#factory"})}catch(u){}var p=s(function(e){return{id:e.random.uuid(),name:e.name.findName(),email:e.internet.email()}});n.a=function(e){var n,t,r=e.parse;return a.a.createElement("pre",{style:{background:"#EEF1F5",borderLeft:"5px solid #CED4DE",color:"#7D899C",margin:"-30px 0 25px 2px",padding:"20px",fontStyle:"italic",fontSize:"18px"},dangerouslySetInnerHTML:{__html:(n=r(p),t={number:"color: #3490DC",key:"color: #6CB2EB",string:"color: #3490DC",boolean:"color: #621B18",null:"color: #E3342F"},"string"!=typeof n&&(n=JSON.stringify(n,void 0,2)),(n=n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var n="number";return/^"/.test(e)?n=/:$/.test(e)?"key":"string":/true|false/.test(e)?n="boolean":/null/.test(e)&&(n="null"),'<span style="'+t[n]+'">'+e+"</span>"}))}})};try{p.displayName="UserFactory",p.__docgenInfo={description:"",displayName:"UserFactory",props:{parse:{defaultValue:null,description:"",name:"parse",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/api/UserFactory.tsx#UserFactory"]={docgenInfo:p.__docgenInfo,name:"UserFactory",path:"docs/api/UserFactory.tsx#UserFactory"})}catch(u){}}}]);
//# sourceMappingURL=docs-api-1-create.5b8b1f95dc2a238980fa.js.map