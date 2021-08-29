(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),a=t.n(r),c=t(6),o=t(3),u=t(1),i=t(4),d=t.n(i),l="/api/persons",s={getAll:function(){return d.a.get(l).then((function(e){return e.data}))},create:function(e){return d.a.post(l,e).then((function(e){return e.data}))},update:function(e,n){return d.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return d.a.delete("".concat(l,"/").concat(e)).then((function(e){return e}))}},b=t(0),h=function(e){var n=e.search,t=e.handleFilter;return Object(b.jsxs)("div",{children:["filter shown with ",Object(b.jsx)("input",{value:n,onChange:t})]})},f=function(e){var n=e.name,t=e.handleNameChange;return Object(b.jsxs)("div",{children:["name: ",Object(b.jsx)("input",{value:n,onChange:t})]})},j=function(e){var n=e.number,t=e.handleNumberChange;return Object(b.jsxs)("div",{children:["number: ",Object(b.jsx)("input",{value:n,onChange:t})]})},m=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("button",{type:"submit",children:"add"})})},p=function(e){var n=e.addPerson,t=e.handleNameChange,r=e.handleNumberChange,a=e.name,c=e.number;return Object(b.jsxs)("form",{onSubmit:n,children:[Object(b.jsx)(f,{name:a,handleNameChange:t}),Object(b.jsx)(j,{number:c,handleNumberChange:r}),Object(b.jsx)(m,{})]})},O=function(e){var n=e.person,t=e.handleDelete;return Object(b.jsxs)("p",{children:[n.name," ",n.number,Object(b.jsx)(g,{id:n.id,name:n.name,handleDelete:t})]})},g=function(e){var n=e.id,t=e.name,r=e.handleDelete;return Object(b.jsx)("button",{id:n,value:t,onClick:r,children:"delete"})},v=function(e){var n=e.persons,t=e.handleDelete;return n.map((function(e){return Object(b.jsx)(O,{person:e,handleDelete:t},e.name)}))},x=function(e){var n,t=e.feedback;if(null===t)return null;return n=t.error?{color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10}:{color:"green",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10},Object(b.jsx)("div",{style:n,children:t.message})},C=function(){var e=Object(u.useState)([]),n=Object(o.a)(e,2),t=n[0],r=n[1],a=Object(u.useState)(""),i=Object(o.a)(a,2),d=i[0],l=i[1],f=Object(u.useState)(""),j=Object(o.a)(f,2),m=j[0],O=j[1],g=Object(u.useState)(""),C=Object(o.a)(g,2),k=C[0],w=C[1],S=Object(u.useState)([]),D=Object(o.a)(S,2),y=D[0],N=D[1],U=Object(u.useState)(null),P=Object(o.a)(U,2),A=P[0],E=P[1];Object(u.useEffect)((function(){s.getAll().then((function(e){return r(e)}))}),[]);var B=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];E({message:e,error:n}),setTimeout((function(){E(null)}),5e3)},z=function(e){var n=e.target.value;window.confirm("Delete ".concat(n," ?"))&&s.remove(e.target.id).then((function(){r(t.filter((function(e){return e.name!==n}))),B("Deleted ".concat(n))})).catch((function(n){r(t.filter((function(n){return n.name!==e.target.value}))),B("Error: information for ".concat(e.target.value," had already been deleted"),!0)}))},F=function(e){var n=!1;return t.forEach((function(t){e.toUpperCase()===t.name.toUpperCase()&&(n=!0)})),n},J=function(e){window.confirm("".concat(e.name," is already added to phonebook, replace the old number with a new one?"))&&R(e)},R=function(e){var n=t.find((function(n){return n.name.toUpperCase()===e.name.toUpperCase()})),a=Object(c.a)(Object(c.a)({},n),{},{number:e.number});s.update(a.id,a).then((function(e){r(t.map((function(n){return n.id===e.id?e:n}))),B("Changed number for ".concat(a.name)),q()})).catch((function(e){B("".concat(e.response.data.error),!0)}))},I=function(){return alert("Please enter a name")},T=function(){return alert("Please enter a number")},q=function(){l(""),O("")};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Phonebook"}),Object(b.jsx)(x,{feedback:A}),Object(b.jsx)(h,{search:k,handleFilter:function(e){var n=e.target.value;w(n);var r=t.filter((function(e){return e.name.toUpperCase().includes(n.toUpperCase())}));N(r)}}),Object(b.jsx)("h3",{children:"Add a new"}),Object(b.jsx)(p,{addPerson:function(e){if(e.preventDefault(),d)if(m){var n={name:d,number:m};F(d)?J(n):s.create(n).then((function(e){r(t.concat(e)),B("Added ".concat(e.name)),q()})).catch((function(e){B("".concat(e.response.data.error),!0)}))}else T();else I()},handleNameChange:function(e){console.log(e.target.value),l(e.target.value)},handleNumberChange:function(e){console.log(e.target.value),O(e.target.value)},name:d,number:m}),Object(b.jsx)("h3",{children:"Numbers"}),k?Object(b.jsx)(v,{persons:y,handleDelete:z}):Object(b.jsx)(v,{persons:t,handleDelete:z})]})};a.a.render(Object(b.jsx)(C,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2537e8dd.chunk.js.map