(self.webpackChunknutgram_docs=self.webpackChunknutgram_docs||[]).push([[423],{45671:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=t(87462),s=t(63366),o=(t(67294),t(3905)),i=t(93456),r=["components"],l={sidebar_position:5},u="Conversations",d={unversionedId:"usage/conversations",id:"usage/conversations",title:"Conversations",description:"If you are using the Webhook update mode, you need a persistent cache adapter to use this feature!",source:"@site/docs/usage/conversations.md",sourceDirName:"usage",slug:"/usage/conversations",permalink:"/docs/./usage/conversations",editUrl:"https://github.com/nutgram/docs/tree/master/docs/usage/conversations.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Middleware",permalink:"/docs/./usage/middleware"},next:{title:"Inline Menu",permalink:"/docs/./usage/inline_menu"}},p={},c=[{value:"Concept",id:"concept",level:2},{value:"Creating Conversations",id:"creating-conversations",level:2},{value:"Begin a Conversation",id:"begin-a-conversation",level:2},{value:"Funnel Escaping",id:"funnel-escaping",level:2},{value:"Middleware",id:"middleware",level:2},{value:"Ending a conversation",id:"ending-a-conversation",level:2},{value:"Procedural Usage",id:"procedural-usage",level:2},{value:"Inline Usage",id:"inline-usage",level:2}],m={toc:c};function g(e){var n=e.components,t=(0,s.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"conversations"},"Conversations"),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Webhook")," update mode, you need a persistent cache adapter to use this feature!"))),(0,o.kt)("h2",{id:"concept"},"Concept"),(0,o.kt)("p",null,"Often, compared to a simple question and answer, you have to make the user perform a series of steps in a certain\nsequence: the framework implements a ",(0,o.kt)("strong",{parentName:"p"},"conversations system"),", that allows you to create funnels with which you can make\nyour users perform a series of steps."),(0,o.kt)(i.Mermaid,{chart:"sequenceDiagram\n    User--\x3e>Bot: Send a message\n    Note over Bot: run the first step, and serializes the conversation\n    Bot--\x3e>User: Reply with the first step\n    User--\x3e>Bot: Send reply to the first step\n    Note over Bot: deserializes the conversation, run the second step and the conversation ends\n    Bot--\x3e>User: Reply with the second step",mdxType:"Mermaid"}),(0,o.kt)("h2",{id:"creating-conversations"},"Creating Conversations"),(0,o.kt)("p",null,"To create a conversation, you must define a class that extends the framework ",(0,o.kt)("inlineCode",{parentName:"p"},"Conversation")," class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    public function start(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->next('secondStep');\n    }\n\n    public function secondStep(Nutgram $bot)\n    {\n        $bot->sendMessage('Bye!');\n        $this->end();\n    }\n}\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', MyConversation::class);\n\n$bot->run();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Wait wait, whats going on here?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When the user type ",(0,o.kt)("em",{parentName:"li"},'"/start"')," for the first time, the first step of conversation is invoked, by default is\nthe ",(0,o.kt)("inlineCode",{parentName:"li"},"start")," method."),(0,o.kt)("li",{parentName:"ul"},"At the end of the first step, we define the next step of the conversation, setting the name of the next function,\nthat will be ",(0,o.kt)("strong",{parentName:"li"},"serialized to cache"),"."),(0,o.kt)("li",{parentName:"ul"},"In the second step, we are ending the conversation.")))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a conversation is not explicitly terminated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"end()"),", at the user next message will repeat the lastest saved step!"))),(0,o.kt)("p",null,"If you want to customize the name of the first step, you just need to override the ",(0,o.kt)("inlineCode",{parentName:"p"},"$step")," property from conversation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    protected ?string $step = 'myStart';\n\n    public function myStart(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n    }\n\n    // ...\n")),(0,o.kt)("p",null,"A more complete example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;use SergiX44\\Nutgram\\Nutgram;use SergiX44\\Nutgram\\Telegram\\Types\\Keyboard\\InlineKeyboardButton;use SergiX44\\Nutgram\\Telegram\\Types\\Keyboard\\InlineKeyboardMarkup;\n\nclass AskIceCreamConversation extends Conversation {\n\n    protected ?string $step = 'askCupSize';\n\n    public $cupSize;\n\n    public function askCupSize(Nutgram $bot)\n    {\n        $bot->sendMessage('How big should be you ice cream cup?', [\n            'reply_markup' => InlineKeyboardMarkup::make()\n                ->addRow(InlineKeyboardButton::make('Small', callback_data: 'S'), InlineKeyboardButton::make('Medium', callback_data: 'M'))\n                ->addRow(InlineKeyboardButton::make('Big', callback_data: 'L'), InlineKeyboardButton::make('Super Big', callback_data: 'XL')),\n        ]);\n        $this->next('askFlavors');\n    }\n\n    public function askFlavors(Nutgram $bot)\n    {\n        // if is not a callback query, ask again!\n        if (!$bot->isCallbackQuery()) {\n            $this->askCupSize($bot);\n            return;\n        }\n\n        $this->cupSize = $bot->callbackQuery()->data;\n\n        $bot->sendMessage('What flavors do you like?');\n        $this->next('recap');\n    }\n\n    public function recap(Nutgram $bot)\n    {\n        $flavors = $bot->message()->text;\n        $bot->sendMessage(\"You want an $this->cupSize cup with this flavors: $flavors\");\n        $this->end();\n    }\n}\n")),(0,o.kt)("h2",{id:"begin-a-conversation"},"Begin a Conversation"),(0,o.kt)("p",null,"As you have already seen in the previous examples, conversation can be used in replacement for handlers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\StartConversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', StartConversation::class);\n\n$bot->run();\n")),(0,o.kt)("p",null,"But, you can also start a conversation at any time from another handlers, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"begin")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\StartConversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', function (Nutgram $bot) {\n    // do stuff\n    StartConversation::begin($bot); // the first step will be automatically fired\n});\n\n$bot->run();\n")),(0,o.kt)("h2",{id:"funnel-escaping"},"Funnel Escaping"),(0,o.kt)("p",null,"By default, sends a message that match with a typed ",(0,o.kt)("strong",{parentName:"p"},"specific")," handler, the current conversation will be discarded, in\nany case, it may be necessary to force the user inside a funnel (for example in a settings modification flow):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    // ..\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->setSkipHandlers(true)\n            ->next('secondStep');\n    }\n\n    // ..\n}\n")),(0,o.kt)("p",null,"In this way, your will force the next step execution."),(0,o.kt)("h2",{id:"middleware"},"Middleware"),(0,o.kt)("p",null,"By default, global middlewares are also applied before the conversation step, there may be situations, however, where\nyou want to be avoided (e.g. in a registration flow):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    // ..\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->setSkipMiddlewares(true)\n            ->next('secondStep');\n    }\n\n    // ..\n}\n")),(0,o.kt)("p",null,"In this way, your next step will be executed without any middleware before."),(0,o.kt)("p",null,"The two options before are also stackable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    // ..\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('This is the first step!');\n        $this->setSkipHandlers(true)\n            ->setSkipMiddlewares(true)\n            ->next('secondStep');\n    }\n\n    // ..\n}\n")),(0,o.kt)("h2",{id:"ending-a-conversation"},"Ending a conversation"),(0,o.kt)("p",null,"You can define a method that will be called once the current conversation is terminated:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Conversations\\Conversation;\nuse SergiX44\\Nutgram\\Nutgram;\n\nclass MyConversation extends Conversation {\n\n    public function step(Nutgram $bot)\n    {\n        $bot->sendMessage('Time to say goodbye!');\n        $this->end();\n    }\n    /**\n    * This method will be called!\n    */\n    public function closing(Nutgram $bot)\n    {\n        $bot->sendMessage('Bye!');\n    }\n}\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"closing")," method will be called every time a conversation is terminated, due to explicit call to ",(0,o.kt)("inlineCode",{parentName:"p"},"end"),", or because\n",(0,o.kt)("a",{parentName:"p",href:"/docs/./usage/conversations#funnel-escaping"},"funnel escaping"),"."),(0,o.kt)("p",null,"This is useful for shutting stuff down, saving to a database or simply let the user know that the conversation is\nterminated."),(0,o.kt)("h2",{id:"procedural-usage"},"Procedural Usage"),(0,o.kt)("p",null,"It's possible to start a conversation also without a OOP approach, in this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', 'firstStep');\n\n\nfunction firstStep(Nutgram $bot)\n{\n    // do stuff\n    $bot->stepConversation('secondStep');\n}\n\nfunction secondStep(Nutgram $bot)\n{\n    // do stuff\n    $bot->endConversation();\n}\n\n$bot->run();\n")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using conversations in this way, you will not be able to skip middlewares or skip handlers!"),(0,o.kt)("p",{parentName:"div"},"By default, it will always allow funnel escaping and will always apply global middlewares."))),(0,o.kt)("h2",{id:"inline-usage"},"Inline Usage"),(0,o.kt)("p",null,"For very short conversations, you can also define the next step as a closure, with the same limitations of the\nprocedural usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use SergiX44\\Nutgram\\Nutgram;\n\n$bot = new Nutgram($_ENV['TOKEN']);\n\n$bot->onCommand('start', function (Nutgram $bot) {\n    // step one\n    $bot->stepConversation(function (Nutgram $bot){\n        // step two\n        $bot->endConversation();\n    });\n});\n\n$bot->run();\n")))}g.isMDXComponent=!0},11748:function(e,n,t){var a={"./locale":89234,"./locale.js":89234};function s(e){var n=o(e);return t(n)}function o(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=o,e.exports=s,s.id=11748}}]);