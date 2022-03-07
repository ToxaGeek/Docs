"use strict";(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[78],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40393:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],u={sidebar_position:1},s="Getting Updates",l={unversionedId:"usage/getting_updates",id:"usage/getting_updates",title:"Getting Updates",description:"Currently, the framework mainly supports two different methods to process updates: Polling and Webhook mode.",source:"@site/docs/usage/getting_updates.md",sourceDirName:"usage",slug:"/usage/getting_updates",permalink:"/docs/./usage/getting_updates",editUrl:"https://github.com/nutgram/docs/tree/master/docs/usage/getting_updates.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Usage",permalink:"/docs/./category/usage"},next:{title:"Sending Requests",permalink:"/docs/./usage/sending_requests"}},p={},c=[{value:"Polling",id:"polling",level:2},{value:"Webhook",id:"webhook",level:2},{value:"Customization",id:"customization",level:2},{value:"Retrieving updates manually",id:"retrieving-updates-manually",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-updates"},"Getting Updates"),(0,a.kt)("p",null,"Currently, the framework mainly supports two different methods to process updates: ",(0,a.kt)("inlineCode",{parentName:"p"},"Polling")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Webhook")," mode."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Polling"),": mainly useful for small bots or with not much traffic, but especially for development mode, since it\nallows you to start developing a bot in a short time!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Webhook"),": Strongly recommended for bots with high traffic and more generally for production mode.")),(0,a.kt)("p",null,"To begin to process incoming updates, you must call the ",(0,a.kt)("inlineCode",{parentName:"p"},"->run()")," method, at the end:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']); // new instance\n\n// register callbacks\n// middlewares\n// do your stuff\n\n$bot->run(); // finally, begin to process incoming updates\n")),(0,a.kt)("h2",{id:"polling"},"Polling"),(0,a.kt)("p",null,"This is the ",(0,a.kt)("strong",{parentName:"p"},"default")," running mode, when the ",(0,a.kt)("inlineCode",{parentName:"p"},"->run()")," method is called, will block the script execution aand starts\nthe update loop. This is meant to be used on a CLI or in a service unit."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\RunningMode\\Polling;\n\n$bot = new Nutgram($_ENV['TOKEN']); // new instance\n$bot->setRunningMode(Polling::class);\n\n// ...\n\n$bot->run(); // start to listen to updates, until stopped\n")),(0,a.kt)("h2",{id:"webhook"},"Webhook"),(0,a.kt)("p",null,"This update mode is recommended for deploy your bot to production, but can be also used with ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com"},"ngrok")," or ",(0,a.kt)("a",{parentName:"p",href:"https://beyondco.de/docs/expose/introduction"},"expose")," for\ndevelopment, the only difference is that it requires the webhook set manually."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\RunningMode\\Webhook;\n\n$bot = new Nutgram($_ENV['TOKEN']); // new instance\n$bot->setRunningMode(Webhook::class);\n\n// ...\n\n$bot->run(); // after this, the script continues execution\n")),(0,a.kt)("p",null,"After processing the current update, the script continues execution, ",(0,a.kt)("strong",{parentName:"p"},"BUT")," you shouldn't put long operations after the\nmethod anyway, as Telegram expects a response quickly."),(0,a.kt)("h2",{id:"customization"},"Customization"),(0,a.kt)("p",null,"You can create your own running mode, if these do not satisfy you, in fact, you will just create a class that extends\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SergiX44/Nutgram/blob/master/src/RunningMode/RunningMode.php"},(0,a.kt)("inlineCode",{parentName:"a"},"RunningMode"))," interface."),(0,a.kt)("h2",{id:"retrieving-updates-manually"},"Retrieving updates manually"),(0,a.kt)("p",null,"You can also use the low level telegram methods, and take over the whole update management, like in the example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\nuse SergiX44\\Nutgram\\Telegram\\Types\\Common\\Update;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n// Retrieve te list of pending updates...\n$updates = $bot->getUpdates();\n\n/** @var Update $update */\nforeach ($updates as $update) {\n    // do stuff with your updates\n}\n")))}m.isMDXComponent=!0}}]);