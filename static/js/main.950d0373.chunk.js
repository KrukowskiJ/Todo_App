(this.webpackJsonptodo_list_react=this.webpackJsonptodo_list_react||[]).push([[0],{15:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var c=o(2),n=o.n(c),s=o(8),a=o.n(s),r=(o(15),o(3)),i=o(1);var l=function(e){var t=Object(c.useState)(e.edit?e.edit.value:""),o=Object(r.a)(t,2),n=o[0],s=o[1],a=Object(c.useRef)(null);Object(c.useEffect)((function(){a.current.focus()}));var l=function(e){s(e.target.value)},d=function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:n}),s("")};return Object(i.jsx)("form",{onSubmit:d,className:"todo-form",children:e.edit?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{placeholder:"Update your item",value:n,onChange:l,name:"text",ref:a,className:"todo-input edit"}),Object(i.jsx)("button",{onClick:d,className:"todo-button edit",children:"Update"})]}):Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("input",{placeholder:"Add a todo",value:n,onChange:l,name:"text",className:"todo-input",ref:a}),Object(i.jsx)("button",{onClick:d,className:"todo-button",children:"Add todo"})]})})},d=o(5),u=o(9),j=o(10),b=function(e){var t=e.todos,o=e.completeTodo,n=e.removeTodo,s=e.updateTodo,a=Object(c.useState)({id:null,value:""}),d=Object(r.a)(a,2),b=d[0],m=d[1];return b.id?Object(i.jsx)(l,{edit:b,onSubmit:function(e){s(b.id,e),m({id:null,value:""})}}):Object(i.jsx)("div",{className:"todo-list",children:t.map((function(e,t){return Object(i.jsxs)("div",{className:e.isComplete?"todo-row complete":"todo-row",children:[Object(i.jsx)("div",{className:"todo-name",onClick:function(){return o(e.id)},children:e.text},e.id),Object(i.jsxs)("div",{className:"icons",children:[Object(i.jsx)(u.a,{onClick:function(){return n(e.id)},className:"delete-icon"}),Object(i.jsx)(j.a,{onClick:function(){return m({id:e.id,value:e.text})},className:"edit-icon"})]})]},t)}))})};o(17);var m=function(e){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)("h1",{children:"Your progress bar!"}),Object(i.jsxs)("div",{className:"progressbar-container",children:[Object(i.jsx)("div",{className:"progressbar-complete",style:{width:"".concat(e.progress,"%")},children:Object(i.jsx)("div",{className:"progressbar-liquid"})}),Object(i.jsxs)("span",{className:"progress",children:[e.progress?e.progress:0," %"]})]})]})};var p=function(){var e=Object(c.useState)([]),t=Object(r.a)(e,2),o=t[0],n=t[1],s=Object(c.useState)(0),a=Object(r.a)(s,2),u=a[0],j=a[1],p=Object(c.useState)(0),O=Object(r.a)(p,2),f=O[0],x=O[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{children:"What's the plan for Today?"}),Object(i.jsx)(l,{onSubmit:function(e){var t;if(e.text&&!/^\s*$/.test(e.text)){var c=[e].concat(Object(d.a)(o));n(c),(t=console).log.apply(t,Object(d.a)(o)),j(u+1),console.log(u)}}}),Object(i.jsx)(b,{todos:o,completeTodo:function(e){var t=o.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete,t.isComplete?x(f+1):x(f-1),console.log("complete!!!!!")),t}));n(t),console.log(u,f)},removeTodo:function(e){var t=Object(d.a)(o).find((function(t){return t.id==e}));console.log("status"+t.isComplete);var c=Object(d.a)(o).filter((function(t){return t.id!==e}));console.log("remove!!!!!"),t.isComplete&&x(f-1),n(c),j(u-1),console.log(u,f)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&(console.log("update!!!!!"),n((function(o){return o.map((function(o){return o.id===e?t:o}))})))}}),Object(i.jsx)(m,{progress:Math.round(f/u*100*100)/100})]})};o.p;var O=function(){return Object(i.jsx)("div",{className:"main-component",children:Object(i.jsx)("div",{className:"todo-app",children:Object(i.jsx)(p,{})})})};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.950d0373.chunk.js.map