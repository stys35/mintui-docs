webpackJsonp([28],{299:function(s,t,a){var v=a(3)(null,a(346),null,null);s.exports=v.exports},346:function(s,t){s.exports={render:function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},staticRenderFns:[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("Search")]),s._v(" "),a("blockquote",[a("p",[s._v("A search bar with a searching result list.")])]),s._v(" "),a("hr"),s._v(" "),a("h2",[s._v("Import")]),s._v(" "),a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("import")]),s._v(" { Search } "),a("span",{staticClass:"hljs-keyword"},[s._v("from")]),s._v(" "),a("span",{staticClass:"hljs-string"},[s._v("'mint-ui'")]),s._v(";\n\nVue.component(Search.name, Search);\n")])]),s._v(" "),a("h2",[s._v("Examples")]),s._v(" "),a("p",[s._v("Basic usage")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Configure texts")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("cancel-text")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"取消"')]),s._v("\n  "),a("span",{staticClass:"hljs-attr"},[s._v("placeholder")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"搜索"')]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Display searching result")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":result.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"result"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("p",[s._v("Custom the display of the searching result list")]),s._v(" "),a("pre",[a("code",{staticClass:"language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":value.sync")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"value"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v("v-for")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item in result"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":title")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item.title"')]),s._v("\n    "),a("span",{staticClass:"hljs-attr"},[s._v(":value")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"item.value"')]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-cell")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("mt-search")]),s._v(">")]),s._v("\n")])]),s._v(" "),a("h2",[s._v("API")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("option")]),s._v(" "),a("th",[s._v("description")]),s._v(" "),a("th",[s._v("type")]),s._v(" "),a("th",[s._v("acceptable values")]),s._v(" "),a("th",[s._v("default")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("value")]),s._v(" "),a("td",[s._v("search input")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[s._v("cancel-text")]),s._v(" "),a("td",[s._v("text of the cancel button")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("'取消'")])]),s._v(" "),a("tr",[a("td",[s._v("placeholder")]),s._v(" "),a("td",[s._v("place holder for the search bar")]),s._v(" "),a("td",[s._v("String")]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("'搜索'")])]),s._v(" "),a("tr",[a("td",[s._v("result")]),s._v(" "),a("td",[s._v("the searching result list")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td"),s._v(" "),a("td")])])])]),a("h2",[s._v("Slot")]),s._v(" "),a("div",{staticClass:"table-container"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),s._v(" "),a("th",[s._v("description")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("-")]),s._v(" "),a("td",[s._v("custom searching result list")])])])])])])}]}},95:function(s,t,a){s.exports=a(299)}});
//# sourceMappingURL=28.ad243fff52d610c574a9.js.map