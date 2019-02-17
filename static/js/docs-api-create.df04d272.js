(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/api/create.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return p});var a=n("./node_modules/react/index.js"),r=n.n(a),i=n("./node_modules/@mdx-js/tag/dist/index.js"),o=n("./node_modules/docz/dist/index.m.js"),l=n("./docs/components/FormatJson.tsx"),s=n("./docs/components/Factory.ts");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function m(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=m(this,h(t).call(this,e))).layout=null,n}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components;u(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"factorycreateoverrides"}},r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"h1"},"Factory.create([overrides])")),r.a.createElement(i.MDXTag,{name:"h3",components:t,props:{id:"args"}},"args"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"overrides"),r.a.createElement(o.c,{to:"/api/types#idataobject"},r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"(IDataObject [optional])")),": These are value which should be overridden on the generated data ",r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"(default: {})"))),r.a.createElement(i.MDXTag,{name:"h3",components:t,props:{id:"return"}},"return"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"data"),r.a.createElement(o.c,{to:"/api/types#idataobject"},r.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"(IDataObject)")),": Data object generated by your generator function")),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"description"}},"Description"),r.a.createElement(i.MDXTag,{name:"p",components:t},"This method is used to generate a data object."),r.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),r.a.createElement(i.MDXTag,{name:"pre",components:t},r.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"UserFactory.create()\n")),r.a.createElement(l.a,{parse:function(){return s.a.create()}}),r.a.createElement(i.MDXTag,{name:"pre",components:t},r.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js"}},"UserFactory.create({ name: 'JOHN DOE' })\n")),r.a.createElement(l.a,{parse:function(){return s.a.create({name:"JOHN DOE"})}}))}}])&&d(n.prototype,a),c&&d(n,c),t}()},"./docs/components/Factory.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return r});var a=n("./src/index.ts"),r=Object(a.a)(function(e){return{id:e.random.uuid(),name:e.name.findName(),email:e.internet.email()}})},"./docs/components/FormatJson.tsx":function(e,t,n){"use strict";var a=n("./node_modules/react/index.js"),r=n.n(a);t.a=function(e){var t,n,a=e.parse;return r.a.createElement("pre",{style:{background:"#EEF1F5",borderLeft:"5px solid #CED4DE",color:"#7D899C",margin:"-30px 0 25px 2px",padding:"20px",fontStyle:"italic",fontSize:"18px",maxWidth:"100%",overflowY:"auto"},dangerouslySetInnerHTML:{__html:(t=a(),n={number:"color: #3490DC",key:"color: #6CB2EB",string:"color: #3490DC",boolean:"color: #621B18",null:"color: #E3342F"},"string"!=typeof t&&(t=JSON.stringify(t,void 0,2)),(t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")).replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,function(e){var t="number";return/^"/.test(e)?t=/:$/.test(e)?"key":"string":/true|false/.test(e)?t="boolean":/null/.test(e)&&(t="null"),'<span style="'+n[t]+'">'+e+"</span>"}))}})};try{FormatJson.displayName="FormatJson",FormatJson.__docgenInfo={description:"",displayName:"FormatJson",props:{parse:{defaultValue:null,description:"",name:"parse",required:!0,type:{name:"any"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["docs/components/FormatJson.tsx#FormatJson"]={docgenInfo:FormatJson.__docgenInfo,name:"FormatJson",path:"docs/components/FormatJson.tsx#FormatJson"})}catch(i){}},"./src/index.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n("./node_modules/faker/index.js"),r=n.n(a);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){l(e,t,n[t])})}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(function(e,t){return"number"===typeof t?o({},e,{length:t>0?t:1}):"object"===i(t)?o({},e,{data:t}):e},{length:1,data:{}})},c=function(e){var t=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function e(t,n){return Object.keys(t).reduce(function(a,r){return a.wasMerged?a.data=o({},a.data,l({},r,t[r])):n[r]?(a.data=o({},a.data,l({},r,n[r])),a.wasMerged=!0):a.data=o({},a.data,l({},r,"object"!==i(t[r])?t[r]:e(t[r],n))),a},{wasMerged:!1,data:{}}).data}(e(r.a),t)},n={create:t,make:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1?arguments[1]:void 0,a=s(e,n),r=a.data,i=a.length;return Array.from({length:i}).map(function(){return t(r)})},only:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t(n);return Array.isArray(e)?e.reduce(function(e,t){return o({},e,l({},t,a[t]))},{}):l({},e,a[e])},seed:function(e){return r.a.seed(e),n}};return n};try{s.displayName="resolveArgs",s.__docgenInfo={description:"",displayName:"resolveArgs",props:{length:{defaultValue:null,description:"Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.",name:"length",required:!0,type:{name:"number"}},toString:{defaultValue:null,description:"Returns a string representation of an array.",name:"toString",required:!0,type:{name:"() => string"}},toLocaleString:{defaultValue:null,description:"Returns a string representation of an array. The elements are converted to string using their toLocalString methods.",name:"toLocaleString",required:!0,type:{name:"() => string"}},pop:{defaultValue:null,description:"Removes the last element from an array and returns it.",name:"pop",required:!0,type:{name:"() => any"}},push:{defaultValue:null,description:"Appends new elements to an array, and returns the new length of the array.\n@param items New elements of the Array.",name:"push",required:!0,type:{name:"(...items: any[]) => number"}},concat:{defaultValue:null,description:"Combines two or more arrays.\nCombines two or more arrays.\n@param items Additional items to add to the end of array1.\n@param items Additional items to add to the end of array1.",name:"concat",required:!0,type:{name:"{ (...items: ConcatArray<any>[]): any[]; (...items: any[]): any[]; }"}},join:{defaultValue:null,description:"Adds all the elements of an array separated by the specified separator string.\n@param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.",name:"join",required:!0,type:{name:"(separator?: string) => string"}},reverse:{defaultValue:null,description:"Reverses the elements in an Array.",name:"reverse",required:!0,type:{name:"() => any[]"}},shift:{defaultValue:null,description:"Removes the first element from an array and returns it.",name:"shift",required:!0,type:{name:"() => any"}},slice:{defaultValue:null,description:"Returns a section of an array.\n@param start The beginning of the specified portion of the array.\n@param end The end of the specified portion of the array.",name:"slice",required:!0,type:{name:"(start?: number, end?: number) => any[]"}},sort:{defaultValue:null,description:"Sorts an array.\n@param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.",name:"sort",required:!0,type:{name:"(compareFn?: (a: any, b: any) => number) => any[]"}},splice:{defaultValue:null,description:"Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\nRemoves elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.\n@param start The zero-based location in the array from which to start removing elements.\n@param deleteCount The number of elements to remove.\n@param start The zero-based location in the array from which to start removing elements.\n@param deleteCount The number of elements to remove.\n@param items Elements to insert into the array in place of the deleted elements.",name:"splice",required:!0,type:{name:"{ (start: number, deleteCount?: number): any[]; (start: number, deleteCount: number, ...items: any[]): any[]; }"}},unshift:{defaultValue:null,description:"Inserts new elements at the start of an array.\n@param items Elements to insert at the start of the Array.",name:"unshift",required:!0,type:{name:"(...items: any[]) => number"}},indexOf:{defaultValue:null,description:"Returns the index of the first occurrence of a value in an array.\n@param searchElement The value to locate in the array.\n@param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.",name:"indexOf",required:!0,type:{name:"(searchElement: any, fromIndex?: number) => number"}},lastIndexOf:{defaultValue:null,description:"Returns the index of the last occurrence of a specified value in an array.\n@param searchElement The value to locate in the array.\n@param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.",name:"lastIndexOf",required:!0,type:{name:"(searchElement: any, fromIndex?: number) => number"}},every:{defaultValue:null,description:"Determines whether all the members of an array satisfy the specified test.\n@param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"every",required:!0,type:{name:"(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any) => boolean"}},some:{defaultValue:null,description:"Determines whether the specified callback function returns true for any element of an array.\n@param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"some",required:!0,type:{name:"(callbackfn: (value: any, index: number, array: any[]) => boolean, thisArg?: any) => boolean"}},forEach:{defaultValue:null,description:"Performs the specified action for each element in an array.\n@param callbackfn A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"forEach",required:!0,type:{name:"(callbackfn: (value: any, index: number, array: any[]) => void, thisArg?: any) => void"}},map:{defaultValue:null,description:"Calls a defined callback function on each element of an array, and returns an array that contains the results.\n@param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"map",required:!0,type:{name:"<U>(callbackfn: (value: any, index: number, array: any[]) => U, thisArg?: any) => U[]"}},filter:{defaultValue:null,description:"Returns the elements of an array that meet the condition specified in a callback function.\nReturns the elements of an array that meet the condition specified in a callback function.\n@param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.\n@param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.",name:"filter",required:!0,type:{name:"{ <S extends any>(callbackfn: (value: any, index: number, array: any[]) => value is S, thisArg?: any): S[]; (callbackfn: (value: any, index: number, array: any[]) => any, thisArg?: any): any[]; }"}},reduce:{defaultValue:null,description:"Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\nCalls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n@param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.",name:"reduce",required:!0,type:{name:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ..."}},reduceRight:{defaultValue:null,description:"Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\nCalls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.\n@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.\n@param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array.\n@param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.",name:"reduceRight",required:!0,type:{name:"{ (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any): any; (callbackfn: (previousValue: any, currentValue: any, currentIndex: number, array: any[]) => any, initialValue: any): any; <U>(callbackfn: (previousValue: U, currentValue: any, currentIndex: number, array: any[]) ..."}},find:{defaultValue:null,description:"Returns the value of the first element in the array where predicate is true, and undefined\notherwise.\n@param predicate find calls predicate once for each element of the array, in ascending\norder, until it finds one where predicate returns true. If such an element is found, find\nimmediately returns that element value. Otherwise, find returns undefined.\n@param thisArg If provided, it will be used as the this value for each invocation of\npredicate. If it is not provided, undefined is used instead.",name:"find",required:!0,type:{name:"{ <S extends any>(predicate: (this: void, value: any, index: number, obj: any[]) => value is S, thisArg?: any): S; (predicate: (value: any, index: number, obj: any[]) => boolean, thisArg?: any): any; }"}},findIndex:{defaultValue:null,description:"Returns the index of the first element in the array where predicate is true, and -1\notherwise.\n@param predicate find calls predicate once for each element of the array, in ascending\norder, until it finds one where predicate returns true. If such an element is found,\nfindIndex immediately returns that element index. Otherwise, findIndex returns -1.\n@param thisArg If provided, it will be used as the this value for each invocation of\npredicate. If it is not provided, undefined is used instead.",name:"findIndex",required:!0,type:{name:"(predicate: (value: any, index: number, obj: any[]) => boolean, thisArg?: any) => number"}},fill:{defaultValue:null,description:"Returns the this object after filling the section identified by start and end with value\n@param value value to fill array section with\n@param start index to start filling the array at. If start is negative, it is treated as\nlength+start where length is the length of the array.\n@param end index to stop filling the array at. If end is negative, it is treated as\nlength+end.",name:"fill",required:!0,type:{name:"(value: any, start?: number, end?: number) => any[]"}},copyWithin:{defaultValue:null,description:"Returns the this object after copying a section of the array identified by start and end\nto the same array starting at position target\n@param target If target is negative, it is treated as length+target where length is the\nlength of the array.\n@param start If start is negative, it is treated as length+start. If end is negative, it\nis treated as length+end.\n@param end If not specified, length of the this object is used as its default value.",name:"copyWithin",required:!0,type:{name:"(target: number, start: number, end?: number) => any[]"}},"__@iterator":{defaultValue:null,description:"Iterator",name:"__@iterator",required:!0,type:{name:"() => IterableIterator<any>"}},entries:{defaultValue:null,description:"Returns an iterable of key, value pairs for every entry in the array",name:"entries",required:!0,type:{name:"() => IterableIterator<[number, any]>"}},keys:{defaultValue:null,description:"Returns an iterable of keys in the array",name:"keys",required:!0,type:{name:"() => IterableIterator<number>"}},values:{defaultValue:null,description:"Returns an iterable of values in the array",name:"values",required:!0,type:{name:"() => IterableIterator<any>"}},"__@unscopables":{defaultValue:null,description:"Returns an object whose properties have the value 'true'\nwhen they will be absent when used in a 'with' statement.",name:"__@unscopables",required:!0,type:{name:"() => { copyWithin: boolean; entries: boolean; fill: boolean; find: boolean; findIndex: boolean; keys: boolean; values: boolean; }"}},includes:{defaultValue:null,description:"Determines whether an array includes a certain element, returning true or false as appropriate.\n@param searchElement The element to search for.\n@param fromIndex The position in this array at which to begin searching for searchElement.",name:"includes",required:!0,type:{name:"(searchElement: any, fromIndex?: number) => boolean"}},flatMap:{defaultValue:null,description:"Calls a defined callback function on each element of an array. Then, flattens the result into\na new array.\nThis is identical to a map followed by flat with depth 1.\n@param callback A function that accepts up to three arguments. The flatMap method calls the\ncallback function one time for each element in the array.\n@param thisArg An object to which the this keyword can refer in the callback function. If\nthisArg is omitted, undefined is used as the this value.",name:"flatMap",required:!0,type:{name:"<U, This = undefined>(callback: (this: This, value: any, index: number, array: any[]) => U | ReadonlyArray<U>, thisArg?: This) => U[]"}},flat:{defaultValue:null,description:"Returns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth.\nReturns a new array with all sub-array elements concatenated into it recursively up to the\nspecified depth. If no depth is provided, flat method defaults to the depth of 1.\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth\n@param depth The maximum recursion depth",name:"flat",required:!0,type:{name:"{ <U>(this: U[][][][][][][][], depth: 7): U[]; <U>(this: U[][][][][][][], depth: 6): U[]; <U>(this: U[][][][][][], depth: 5): U[]; <U>(this: U[][][][][], depth: 4): U[]; <U>(this: U[][][][], depth: 3): U[]; <U>(this: U[][][], depth: 2): U[]; <U>(this: U[][], depth?: 1): U[]; <U>(this: U[], depth: 0): U[]; <U>(depth?..."}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#resolveArgs"]={docgenInfo:s.__docgenInfo,name:"resolveArgs",path:"src/index.ts#resolveArgs"})}catch(u){}try{c.displayName="factory",c.__docgenInfo={description:"",displayName:"factory",props:{}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.ts#factory"]={docgenInfo:c.__docgenInfo,name:"factory",path:"src/index.ts#factory"})}catch(u){}}}]);
//# sourceMappingURL=docs-api-create.2b0c4cd60813ed7fe6a7.js.map