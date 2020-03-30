webpackJsonp([7],{195:function(s,t,a){s.exports=a(320)},320:function(s,t,a){var _=a(3)(null,a(403),null,null);s.exports=_.exports},403:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Tabbar")]),s._v(" "),s._m(0),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("引入")]),s._v(" "),s._m(1),s._v(" "),a("h2",[s._v("例子")]),s._v(" "),a("p",[s._v("搭配 "),a("router-link",{attrs:{to:{path:"/"+s.$route.meta.language+"/tab-container"}}},[s._v("tab-container")]),s._v(" 组件使用")],1),s._v(" "),s._m(2),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("h3",[s._v("tabbar")]),s._v(" "),s._m(3),a("h3",[s._v("tab-item")]),s._v(" "),s._m(4),a("h2",[s._v("Slot")]),s._v(" "),a("h3",[s._v("tabbar")]),s._v(" "),s._m(5),a("h3",[s._v("tab-item")]),s._v(" "),s._m(6)])},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("blockquote",[a("p",[s._v("底部选项卡，点击 tab 会切换显示的页面。依赖 tab-item 组件。")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Tabbar, TabItem } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'mint-ui'")]),s._v(";\n\nVue.component(Tabbar.name, Tabbar);\nVue.component(TabItem.name, TabItem);\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-tabbar")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("v-model")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"selected"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"外卖"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"icon"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"../assets/100x100.png"')]),s._v(">")]),s._v("\n    外卖\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"订单"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"icon"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"../assets/100x100.png"')]),s._v(">")]),s._v("\n    订单\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"发现"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"icon"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"../assets/100x100.png"')]),s._v(">")]),s._v("\n    发现\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("id")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"我的"')]),s._v(">")]),s._v("\n    "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("img")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("slot")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"icon"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("src")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"../assets/100x100.png"')]),s._v(">")]),s._v("\n    我的\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-tab-item")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-tabbar")]),s._v(">")]),s._v("\n")])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("fixed")]),s._v(" "),a("td",[s._v("固定在页面底部")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("返回当前选中的 tab-item 的 id")]),s._v(" "),a("td",[s._v("*")]),s._v(" "),a("td"),s._v(" "),a("td")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("可选值")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("id")]),s._v(" "),a("td",[s._v("选中后的返回值")]),s._v(" "),a("td",[s._v("*")]),s._v(" "),a("td"),s._v(" "),a("td")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("内容")])])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("描述")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("显示文字")])]),s._v(" "),a("tr",[a("td",[s._v("icon")]),s._v(" "),a("td",[s._v("icon 图标")])])])])])}]}}});
//# sourceMappingURL=7.39b77feff640af289d55.js.map