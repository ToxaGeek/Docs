"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[354],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86116:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={sidebar_position:1},u="Installation",c={unversionedId:"configuration/installation",id:"configuration/installation",title:"Installation",description:"Composer",source:"@site/docs/configuration/installation.md",sourceDirName:"configuration",slug:"/configuration/installation",permalink:"/docs/./configuration/installation",editUrl:"https://github.com/nutgram/docs/tree/master/docs/configuration/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/./category/getting-started"},next:{title:"Cache",permalink:"/docs/./configuration/cache"}},p={},s=[{value:"Composer",id:"composer",level:2},{value:"Configuration",id:"configuration",level:2},{value:"<code>api_url</code>",id:"api_url",level:3},{value:"<code>timeout</code>",id:"timeout",level:3},{value:"<code>cache</code>",id:"cache",level:3},{value:"<code>client</code>",id:"client",level:3},{value:"<code>polling</code>",id:"polling",level:3}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"composer"},"Composer"),(0,o.kt)("p",null,"You can install the package as usual via Composer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"composer require sergix44/nutgram\n")),(0,o.kt)("p",null,"And you ready to go!"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"The framework can work out-of-the-box without much configuration, the only mandatory parameter is (obviously) the\nTelegram API token:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram('you telegram token here');\n")),(0,o.kt)("p",null,"In addition, it's possible to specify a list of options as second argument, like that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$config = [\n    'timeout' => 10, // default in seconds, when contacting the Telegram API\n];\n\n$bot = new Nutgram('you telegram token here', $config);\n")),(0,o.kt)("p",null,"Here a list of all the options you can specify:"),(0,o.kt)("h3",{id:"api_url"},(0,o.kt)("inlineCode",{parentName:"h3"},"api_url")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:")," string"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"'https://api.telegram.org'")),(0,o.kt)("li",{parentName:"ul"},"Useful if you need to change to a local API server.")),(0,o.kt)("h3",{id:"timeout"},(0,o.kt)("inlineCode",{parentName:"h3"},"timeout")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:")," integer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"10")),(0,o.kt)("li",{parentName:"ul"},"In seconds, define the timeout when sending requests to the Telegram API.")),(0,o.kt)("h3",{id:"cache"},(0,o.kt)("inlineCode",{parentName:"h3"},"cache")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:")," string or instance"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"ArrayCache")),(0,o.kt)("li",{parentName:"ul"},"The object used to store conversation and data, must implements the PSR-16 ",(0,o.kt)("inlineCode",{parentName:"li"},"CacheInterface"),".")),(0,o.kt)("h3",{id:"client"},(0,o.kt)("inlineCode",{parentName:"h3"},"client")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:")," array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"[]")),(0,o.kt)("li",{parentName:"ul"},"An array of options for the underlying ",(0,o.kt)("a",{parentName:"li",href:"https://docs.guzzlephp.org/en/stable/quickstart.html"},"Guzzle HTTP client"),".\nCheckout the Guzzle documentation for further informations.")),(0,o.kt)("h3",{id:"polling"},(0,o.kt)("inlineCode",{parentName:"h3"},"polling")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"type:")," array"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"default:")," ",(0,o.kt)("inlineCode",{parentName:"li"},"['timeout' => 10, 'limit' => 100]")),(0,o.kt)("li",{parentName:"ul"},"Contains all the options that used when requesting updates to Telegram via the ",(0,o.kt)("inlineCode",{parentName:"li"},"getUpdates"),", it's possible to specify\nalso the field ",(0,o.kt)("inlineCode",{parentName:"li"},"allowed_updates")," if you want.")))}d.isMDXComponent=!0}}]);