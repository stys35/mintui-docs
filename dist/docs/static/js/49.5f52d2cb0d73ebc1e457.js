webpackJsonp([49],{152:function(t,v,s){t.exports=s(278)},278:function(t,v,s){var _=s(3)(null,s(377),null,null);t.exports=_.exports},377:function(t,v){t.exports={render:function(){var t=this,v=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,v=t.$createElement,s=t._self._c||v;return s("section",[s("h1",[t._v("Popup")]),t._v(" "),s("blockquote",[s("p",[t._v("弹出框，可自定义内容。")])]),t._v(" "),s("hr"),t._v(" "),s("h2",[t._v("引入")]),t._v(" "),s("pre",[s("code",{staticClass:"language-javascript"},[s("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" { Popup } "),s("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),s("span",{staticClass:"hljs-string"},[t._v("'mint-ui'")]),t._v(";\n\nVue.component(Popup.name, Popup);\n")])]),t._v(" "),s("h2",[t._v("例子")]),t._v(" "),s("p",[s("code",[t._v("position")]),t._v(" 属性指定了 "),s("code",[t._v("popup")]),t._v(" 的位置。比如，"),s("code",[t._v("position")]),t._v(" 为 'bottom' 时，"),s("code",[t._v("popup")]),t._v(" 会从屏幕下方移入，并最终固定在屏幕下方。移入/移出的动效会根据 "),s("code",[t._v("position")]),t._v(" 的不同而自动改变，无需手动配置。")]),t._v(" "),s("p",[t._v("将 "),s("code",[t._v("visible")]),t._v(" 属性与一个本地变量同步，通过操作这个变量即可控制 "),s("code",[t._v("popup")]),t._v(" 的显示与隐藏。")]),t._v(" "),s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v("\n  "),s("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"popupVisible"')]),t._v("\n  "),s("span",{staticClass:"hljs-attr"},[t._v("position")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"bottom"')]),t._v(">")]),t._v("\n  ...\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v(">")]),t._v("\n")])]),t._v(" "),s("p",[t._v("若省略 "),s("code",[t._v("position")]),t._v(" 属性，则 "),s("code",[t._v("popup")]),t._v(" 会相对于屏幕居中显示（若不想让其居中，可通过 CSS 对其重新定位）。此时建议将动效设置为 "),s("code",[t._v("popup-fade")]),t._v("，这样在显示/隐藏时会有淡入/淡出效果。")]),t._v(" "),s("pre",[s("code",{staticClass:"language-html"},[s("span",{staticClass:"hljs-tag"},[t._v("<"),s("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v("\n  "),s("span",{staticClass:"hljs-attr"},[t._v(":visible.sync")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"popupVisible"')]),t._v("\n  "),s("span",{staticClass:"hljs-attr"},[t._v("popup-transition")]),t._v("="),s("span",{staticClass:"hljs-string"},[t._v('"popup-fade"')]),t._v(">")]),t._v("\n  ...\n"),s("span",{staticClass:"hljs-tag"},[t._v("</"),s("span",{staticClass:"hljs-name"},[t._v("mt-popup")]),t._v(">")]),t._v("\n")])]),t._v(" "),s("h2",[t._v("API")]),t._v(" "),s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("visible")]),t._v(" "),s("td",[t._v("是否显示 "),s("code",[t._v("popup")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("position")]),t._v(" "),s("td",[s("code",[t._v("popup")]),t._v(" 的位置。省略则居中显示")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("'top'"),s("br"),t._v("'right'"),s("br"),t._v("'bottom'"),s("br"),t._v("'left'")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("pop-transition")]),t._v(" "),s("td",[t._v("显示/隐藏时的动效，仅在省略 "),s("code",[t._v("position")]),t._v(" 时可配置")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("'popup-fade'")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("modal")]),t._v(" "),s("td",[t._v("是否创建一个 modal 层")]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("true")])]),t._v(" "),s("tr",[s("td",[t._v("closeOnClickModal")]),t._v(" "),s("td",[t._v("是否可以通过点击 modal 层来关闭 "),s("code",[t._v("popup")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("true")])])])])]),s("h2",[t._v("Slot")]),t._v(" "),s("div",{staticClass:"table-container"},[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",[t._v("name")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-")]),t._v(" "),s("td",[t._v("弹出框的内容")])])])])])])}]}}});
//# sourceMappingURL=49.5f52d2cb0d73ebc1e457.js.map