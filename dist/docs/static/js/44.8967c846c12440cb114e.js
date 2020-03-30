webpackJsonp([44],{283:function(s,t,a){var n=a(3)(null,a(369),null,null);s.exports=n.exports},369:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Quick start")]),s._v(" "),a("p",[s._v("This part walks you through the process of using Mint UI in a webpack project.")]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("Use vue-cli")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm install -g vue-cli\n\nvue init webpack projectname\n")])]),s._v(" "),a("h2",[s._v("Install Mint UI")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm install --save mint-ui\n")])]),s._v(" "),a("p",[s._v("You can import Mint UI entirely, or just import what you need. Let's first take a look at full import.")]),s._v(" "),a("h3",[s._v("Full import")]),s._v(" "),a("p",[s._v("In main.js:")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" MintUI "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'mint-ui'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'mint-ui/lib/style.css'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" App "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./App.vue'")]),s._v("\n\nVue.use(MintUI)\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n  "),a("span",{staticClass:"hljs-attr"},[s._v("el")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(",\n  "),a("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": { App }\n})\n")])]),s._v(" "),a("p",[s._v("The above imports Mint UI entirely. Note that CSS file needs to be imported separately.")]),s._v(" "),a("h3",[s._v("On demand")]),s._v(" "),a("p",[s._v("With the help of "),a("a",{attrs:{href:"https://github.com/QingWei-Li/babel-plugin-component"}},[s._v("babel-plugin-component")]),s._v(", we can import components we actually need, making the project smaller than otherwise.")]),s._v(" "),a("p",[s._v("First install babel-plugin-component:")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm install babel-plugin-component -D\n")])]),s._v(" "),a("p",[s._v("Then edit .babelrc:")]),s._v(" "),a("pre",[a("code",{staticClass:"language-json"},[s._v("{\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"presets"')]),s._v(": [\n    ["),a("span",{staticClass:"hljs-string"},[s._v('"es2015"')]),s._v(", { "),a("span",{staticClass:"hljs-attr"},[s._v('"modules"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v(" }]\n  ],\n  "),a("span",{staticClass:"hljs-attr"},[s._v('"plugins"')]),s._v(": [["),a("span",{staticClass:"hljs-string"},[s._v('"component"')]),s._v(", [\n    {\n      "),a("span",{staticClass:"hljs-attr"},[s._v('"libraryName"')]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v('"mint-ui"')]),s._v(",\n      "),a("span",{staticClass:"hljs-attr"},[s._v('"style"')]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n    }\n  ]]]\n}\n")])]),s._v(" "),a("p",[s._v("If you need Button and Cell, edit main.js:")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" Vue "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'vue'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Button, Cell } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'mint-ui'")]),s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" App "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'./App.vue'")]),s._v("\n\nVue.component(Button.name, Button)\nVue.component(Cell.name, Cell)\n"),a("span",{staticClass:"hljs-comment"},[s._v("/* or\n * Vue.use(Button)\n * Vue.use(Cell)\n */")]),s._v("\n\n"),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Vue({\n  "),a("span",{staticClass:"hljs-attr"},[s._v("el")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'#app'")]),s._v(",\n  "),a("span",{staticClass:"hljs-attr"},[s._v("components")]),s._v(": { App }\n})\n")])]),s._v(" "),a("h2",[s._v("Start coding")]),s._v(" "),a("p",[s._v("Now you have implemented Vue and Mint UI to your project, and it's time to write your code. Start development mode:")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm run dev\n")])]),s._v(" "),a("p",[s._v("Build:")]),s._v(" "),a("pre",[a("code",{staticClass:"language-bash"},[s._v("npm run build\n")])]),s._v(" "),a("p",[s._v("Please refer to each component's documentation to learn their usage.")])])}]}},91:function(s,t,a){s.exports=a(283)}});
//# sourceMappingURL=44.8967c846c12440cb114e.js.map