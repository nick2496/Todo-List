(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'body {\r\n    font-family: monospace;\r\n}\r\n\r\nh1 {\r\n    text-align: center;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n    grid-template-rows: none;\r\n    width: 50vw;\r\n    margin: auto;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 30px;\r\n}\r\n\r\n#left-pane{\r\n    background-color: grey;\r\n    border: 3px solid black;\r\n    height: 80vh;\r\n    position: relative;\r\n    clear: both;\r\n}\r\n\r\n#right-pane{\r\n    background-color: orange;\r\n    border: 3px solid black;\r\n    height: 80vh;\r\n}\r\n\r\n.todoButton {\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 40%;\r\n    overflow-wrap: break-word;\r\n    position: absolute;\r\n}\r\n\r\n.projectButton {\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 40%;\r\n    overflow-wrap: break-word;\r\n    position: absolute;\r\n}\r\n\r\n\r\n.todoCard {\r\n    border: 2px solid black;\r\n    cursor: pointer;\r\n    position: relative;\r\n    clear: both;\r\n}\r\n\r\n.projectCard {\r\n    border: 2px solid black;\r\n    cursor: pointer;\r\n}\r\n\r\n.defaultProjectCard {\r\n    border: 2px solid black;\r\n    cursor: pointer;\r\n}\r\n\r\n.deleteBtn {\r\n   float: right;\r\n}\r\n\r\n.dueDate {\r\n    position: absolute;\r\n    right: 80px;\r\n}\r\n\r\n.details {\r\n    display: none;\r\n}\r\n\r\ninput[type="checkbox"]:checked ~ todoTitle{\r\n    text-decoration: line-through;\r\n}\r\n\r\n.hide {\r\n    display: none;\r\n}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),t.push(d))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],d=t.base?c[0]+t.base:c[0],s=n[d]||0,l="".concat(d," ").concat(s);n[d]=s+1;var p=a(l),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:m(u,t),references:1}),r.push(l)}return r}function d(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,t){var n,r,o;if(t.singleton){var i=h++;n=f||(f=d(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=d(t),r=u.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var d=c(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=d}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(426);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;const o=document.querySelector("#content"),i=document.createElement("div");i.setAttribute("id","left-pane");const a=document.createElement("div");a.setAttribute("id","right-pane"),o.appendChild(i),o.appendChild(a);const c=document.createElement("button");c.setAttribute("class","todoButton"),c.textContent="Add Todo",i.appendChild(c);const d=document.createElement("button");d.setAttribute("class","projectButton"),d.textContent="Add Project",i.appendChild(d);const s=document.createElement("div");s.setAttribute("class","defaultProjectCard"),s.textContent="default",i.appendChild(s);const l=document.createElement("div");i.appendChild(l);let p=[];const u=()=>{a.innerHTML="",p.map((e=>{const t=document.createElement("div");t.setAttribute("class",`todoCard todoContent ${e.project}`),t.innerHTML=`<input type="checkbox"> <todoTitle> ${e.title} </todoTitle> <span class="dueDate">${e.dueDate} </span>`;const n=document.createElement("div");n.setAttribute("class","details"),n.innerHTML=`\n    <strong> description </strong>: ${e.description} <br>\n    <strong> priority </strong>: ${e.priority} <br>\n    <strong> project </strong>: ${e.project} <br>\n    `,t.appendChild(n),t.addEventListener("click",(()=>{"block"===n.style.display?n.style.display="none":n.style.display="block"}));const r=document.createElement("button");r.textContent="Remove",r.setAttribute("class","deleteBtn"),t.appendChild(r),r.addEventListener("click",(n=>{const r=p.indexOf(e);r>-1&&p.splice(r,1),a.removeChild(t)}));const o=document.createElement("button");o.textContent="Edit",o.setAttribute("class","editBtn"),n.appendChild(o),o.addEventListener("click",(t=>{let n=prompt("Which field you want to edit- priority | title | description | dueDate | project ?"),r=prompt(`Enter ${n} value`);"priority"===n?e.priority=r:"title"===n?e.title=r:"description"===n?e.description=r:"dueDate"===n?e.dueDate=r:"project"===n&&(e.project=r),u()})),a.appendChild(t)}))};c.addEventListener("click",(()=>{const e=((e,t,n,r,o)=>({title:e,description:t,dueDate:n,priority:r,project:o}))(prompt("Todo-title"),prompt("Todo-description"),prompt("Todo-Due date"),prompt("Todo-priority"),prompt("Todo-project"));p.push(e),u()}));const f=[];d.addEventListener("click",(()=>{const e=prompt("Enter project name");f.push(e),l.innerHTML="",f.map((e=>{const t=document.createElement("div");t.setAttribute("class","projectCard"),t.innerHTML=e,l.appendChild(t),t.addEventListener("click",(t=>{n(t,e)}));const n=(e,t)=>{let n=document.querySelectorAll(".todoContent");for(let e=0;e<n.length;e++)n[e].classList.add("hide");let r=document.querySelectorAll(`.${t}`);for(let e=0;e<r.length;e++)r[e].classList.remove("hide")}}))})),s.addEventListener("click",u)})()})();