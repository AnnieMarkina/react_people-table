(this["webpackJsonpreact_people-table"]=this["webpackJsonpreact_people-table"]||[]).push([[0],{17:function(e,t,a){e.exports=a(31)},22:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),m=a(6),u=a(16),o=a(1),i=(a(22),function(){return l.a.createElement("header",null,l.a.createElement("nav",{className:"Nav"},l.a.createElement("ul",{className:"Nav__list"},l.a.createElement("li",{className:"Nav__item"},l.a.createElement(m.b,{to:"/",exact:!0,className:"Nav__item"},"Home")),l.a.createElement("li",{className:"Nav__item"},l.a.createElement(m.b,{to:"/people",className:"Nav__item"},"People Page")))))}),E=(a(28),function(){return l.a.createElement("div",{className:"search__container"},l.a.createElement("input",{type:"text",placeholder:"Does not work right now"}))}),p=function(e){var t=e.index,a=e.name,n=e.sex,r=e.born,c=e.died,m=e.mother,u=e.father,i=e.slug,E=Object(o.f)(),p=Math.ceil(c/100),s="f"===n?"red":"blue";return l.a.createElement("tr",{style:{color:s},onClick:function(){return e=i,void E.push({pathname:"/people/".concat(e)});var e}},l.a.createElement("td",null,t),l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,r),l.a.createElement("td",null,c),l.a.createElement("td",null,c-r),l.a.createElement("td",null,p),l.a.createElement("td",null,u),l.a.createElement("td",null,m))},s=(a(29),function(e){var t=e.people;return l.a.createElement("div",{className:"people__container"},l.a.createElement("h1",null,"People Table"),l.a.createElement(E,null),l.a.createElement("div",{className:"people__table"},l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Sex"),l.a.createElement("th",null,"Born"),l.a.createElement("th",null,"Died"),l.a.createElement("th",null,"Age"),l.a.createElement("th",null,"Century"),l.a.createElement("th",null,"Father"),l.a.createElement("th",null,"Mother")),t.map((function(e,t){var a=e.name,n=e.sex,r=e.born,c=e.died,m=e.fatherName,u=e.motherName,o=e.slug;return l.a.createElement(p,{index:t+1,name:a,sex:n,born:r,died:c,father:m,mother:u,slug:o})})))))}),h=(a(30),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(i,null),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",exact:!0,component:function(){return l.a.createElement("h1",null,"Home")}}),l.a.createElement(o.a,{path:"/people/:personSlug?",render:function(){return l.a.createElement(s,{people:a})}}),l.a.createElement(o.a,{component:function(){return l.a.createElement("h1",null,"Not found")}})))});c.a.render(l.a.createElement(m.a,null,l.a.createElement(h,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5a407a8d.chunk.js.map