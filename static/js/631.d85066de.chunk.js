/*! For license information please see 631.d85066de.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkshiryoku=self.webpackChunkshiryoku||[]).push([[631],{5758:function(e,r,n){var t=n(4836);r.Z=void 0;!function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=a(r);if(n&&n.has(e))return n.get(e);var t={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var s=o?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(t,i,s):t[i]=e[i]}t.default=e,n&&n.set(e,t)}(n(2791));var o=t(n(5649)),i=n(184);function a(e){if("function"!==typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:r})(e)}var s=(0,o.default)((0,i.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");r.Z=s},5629:function(e,r,n){n.d(r,{Z:function(){return m}});var t=n(3366),o=n(7462),i=n(2791),a=n(8182),s=n(4419),l=n(277),u=n(5513),c=n(8826),d=n(1217);function f(e){return(0,d.Z)("MuiList",e)}(0,n(5878).Z)("MuiList",["root","padding","dense","subheader"]);var p=n(184),v=["children","className","component","dense","disablePadding","subheader"],h=(0,l.ZP)("ul",{name:"MuiList",slot:"Root",overridesResolver:function(e,r){var n=e.ownerState;return[r.root,!n.disablePadding&&r.padding,n.dense&&r.dense,n.subheader&&r.subheader]}})((function(e){var r=e.ownerState;return(0,o.Z)({listStyle:"none",margin:0,padding:0,position:"relative"},!r.disablePadding&&{paddingTop:8,paddingBottom:8},r.subheader&&{paddingTop:0})})),m=i.forwardRef((function(e,r){var n=(0,u.Z)({props:e,name:"MuiList"}),l=n.children,d=n.className,m=n.component,b=void 0===m?"ul":m,g=n.dense,y=void 0!==g&&g,Z=n.disablePadding,P=void 0!==Z&&Z,w=n.subheader,M=(0,t.Z)(n,v),x=i.useMemo((function(){return{dense:y}}),[y]),S=(0,o.Z)({},n,{component:b,dense:y,disablePadding:P}),C=function(e){var r=e.classes,n={root:["root",!e.disablePadding&&"padding",e.dense&&"dense",e.subheader&&"subheader"]};return(0,s.Z)(n,f,r)}(S);return(0,p.jsx)(c.Z.Provider,{value:x,children:(0,p.jsxs)(h,(0,o.Z)({as:b,className:(0,a.Z)(C.root,d),ref:r,ownerState:S},M,{children:[w,l]}))})}))},8826:function(e,r,n){var t=n(2791).createContext({});r.Z=t},6992:function(e,r,n){n.d(r,{Z:function(){return U}});var t=n(7462),o=n(3366),i=n(2791),a=(n(8457),n(8182)),s=n(4419),l=n(5783),u=n(5629),c=n(7137).Z,d=n(7933),f=n(3026),p=n(184),v=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function h(e,r,n){return e===r?e.firstChild:r&&r.nextElementSibling?r.nextElementSibling:n?null:e.firstChild}function m(e,r,n){return e===r?n?e.firstChild:e.lastChild:r&&r.previousElementSibling?r.previousElementSibling:n?null:e.lastChild}function b(e,r){if(void 0===r)return!0;var n=e.innerText;return void 0===n&&(n=e.textContent),0!==(n=n.trim().toLowerCase()).length&&(r.repeating?n[0]===r.keys[0]:0===n.indexOf(r.keys.join("")))}function g(e,r,n,t,o,i){for(var a=!1,s=o(e,r,!!r&&n);s;){if(s===e.firstChild){if(a)return!1;a=!0}var l=!t&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&b(s,i)&&!l)return s.focus(),!0;s=o(e,s,n)}return!1}var y=i.forwardRef((function(e,r){var n=e.actions,a=e.autoFocus,s=void 0!==a&&a,y=e.autoFocusItem,Z=void 0!==y&&y,P=e.children,w=e.className,M=e.disabledItemsFocusable,x=void 0!==M&&M,S=e.disableListWrap,C=void 0!==S&&S,k=e.onKeyDown,E=e.variant,O=void 0===E?"selectedMenu":E,T=(0,o.Z)(e,v),R=i.useRef(null),D=i.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,f.Z)((function(){s&&R.current.focus()}),[s]),i.useImperativeHandle(n,(function(){return{adjustStyleForScrollbar:function(e,r){var n=!R.current.style.width;if(e.clientHeight<R.current.clientHeight&&n){var t="".concat(c((0,l.Z)(e)),"px");R.current.style["rtl"===r.direction?"paddingLeft":"paddingRight"]=t,R.current.style.width="calc(100% + ".concat(t,")")}return R.current}}}),[]);var j=(0,d.Z)(R,r),F=-1;i.Children.forEach(P,(function(e,r){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===O&&e.props.selected||-1===F)&&(F=r))}));var z=i.Children.map(P,(function(e,r){if(r===F){var n={};return Z&&(n.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===O&&(n.tabIndex=0),i.cloneElement(e,n)}return e}));return(0,p.jsx)(u.Z,(0,t.Z)({role:"menu",ref:j,className:w,onKeyDown:function(e){var r=R.current,n=e.key,t=(0,l.Z)(r).activeElement;if("ArrowDown"===n)e.preventDefault(),g(r,t,C,x,h);else if("ArrowUp"===n)e.preventDefault(),g(r,t,C,x,m);else if("Home"===n)e.preventDefault(),g(r,null,C,x,h);else if("End"===n)e.preventDefault(),g(r,null,C,x,m);else if(1===n.length){var o=D.current,i=n.toLowerCase(),a=performance.now();o.keys.length>0&&(a-o.lastTime>500?(o.keys=[],o.repeating=!0,o.previousKeyMatched=!0):o.repeating&&i!==o.keys[0]&&(o.repeating=!1)),o.lastTime=a,o.keys.push(i);var s=t&&!o.repeating&&b(t,o);o.previousKeyMatched&&(s||g(r,t,!1,x,h,o))?e.preventDefault():o.previousKeyMatched=!1}k&&k(e)},tabIndex:s?0:-1},T,{children:z}))})),Z=n(6650),P=n(277),w=n(5513),M=n(2977),x=n(8195),S=n(8085),C=n(4978),k=n(1217),E=n(5878);function O(e){return(0,k.Z)("MuiPopover",e)}(0,E.Z)("MuiPopover",["root","paper"]);var T=["onEntering"],R=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"];function D(e,r){var n=0;return"number"===typeof r?n=r:"center"===r?n=e.height/2:"bottom"===r&&(n=e.height),n}function j(e,r){var n=0;return"number"===typeof r?n=r:"center"===r?n=e.width/2:"right"===r&&(n=e.width),n}function F(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function z(e){return"function"===typeof e?e():e}var L=(0,P.ZP)(C.Z,{name:"MuiPopover",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),N=(0,P.ZP)(Z.Z,{name:"MuiPopover",slot:"Paper",overridesResolver:function(e,r){return r.paper}})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),I=i.forwardRef((function(e,r){var n=(0,w.Z)({props:e,name:"MuiPopover"}),u=n.action,c=n.anchorEl,f=n.anchorOrigin,v=void 0===f?{vertical:"top",horizontal:"left"}:f,h=n.anchorPosition,m=n.anchorReference,b=void 0===m?"anchorEl":m,g=n.children,y=n.className,Z=n.container,P=n.elevation,C=void 0===P?8:P,k=n.marginThreshold,E=void 0===k?16:k,I=n.open,H=n.PaperProps,W=void 0===H?{}:H,A=n.transformOrigin,K=void 0===A?{vertical:"top",horizontal:"left"}:A,_=n.TransitionComponent,$=void 0===_?S.Z:_,B=n.transitionDuration,V=void 0===B?"auto":B,G=n.TransitionProps,U=(G=void 0===G?{}:G).onEntering,X=(0,o.Z)(n.TransitionProps,T),Y=(0,o.Z)(n,R),q=i.useRef(),J=(0,d.Z)(q,W.ref),Q=(0,t.Z)({},n,{anchorOrigin:v,anchorReference:b,elevation:C,marginThreshold:E,PaperProps:W,transformOrigin:K,TransitionComponent:$,transitionDuration:V,TransitionProps:X}),ee=function(e){var r=e.classes;return(0,s.Z)({root:["root"],paper:["paper"]},O,r)}(Q),re=i.useCallback((function(){if("anchorPosition"===b)return h;var e=z(c),r=(e&&1===e.nodeType?e:(0,l.Z)(q.current).body).getBoundingClientRect();return{top:r.top+D(r,v.vertical),left:r.left+j(r,v.horizontal)}}),[c,v.horizontal,v.vertical,h,b]),ne=i.useCallback((function(e){return{vertical:D(e,K.vertical),horizontal:j(e,K.horizontal)}}),[K.horizontal,K.vertical]),te=i.useCallback((function(e){var r={width:e.offsetWidth,height:e.offsetHeight},n=ne(r);if("none"===b)return{top:null,left:null,transformOrigin:F(n)};var t=re(),o=t.top-n.vertical,i=t.left-n.horizontal,a=o+r.height,s=i+r.width,l=(0,x.Z)(z(c)),u=l.innerHeight-E,d=l.innerWidth-E;if(o<E){var f=o-E;o-=f,n.vertical+=f}else if(a>u){var p=a-u;o-=p,n.vertical+=p}if(i<E){var v=i-E;i-=v,n.horizontal+=v}else if(s>d){var h=s-d;i-=h,n.horizontal+=h}return{top:"".concat(Math.round(o),"px"),left:"".concat(Math.round(i),"px"),transformOrigin:F(n)}}),[c,b,re,ne,E]),oe=i.useCallback((function(){var e=q.current;if(e){var r=te(e);null!==r.top&&(e.style.top=r.top),null!==r.left&&(e.style.left=r.left),e.style.transformOrigin=r.transformOrigin}}),[te]);i.useEffect((function(){I&&oe()})),i.useImperativeHandle(u,(function(){return I?{updatePosition:function(){oe()}}:null}),[I,oe]),i.useEffect((function(){if(I){var e=(0,M.Z)((function(){oe()})),r=(0,x.Z)(c);return r.addEventListener("resize",e),function(){e.clear(),r.removeEventListener("resize",e)}}}),[c,I,oe]);var ie=V;"auto"!==V||$.muiSupportAuto||(ie=void 0);var ae=Z||(c?(0,l.Z)(z(c)).body:void 0);return(0,p.jsx)(L,(0,t.Z)({BackdropProps:{invisible:!0},className:(0,a.Z)(ee.root,y),container:ae,open:I,ref:r,ownerState:Q},Y,{children:(0,p.jsx)($,(0,t.Z)({appear:!0,in:I,onEntering:function(e,r){U&&U(e,r),oe()},timeout:ie},X,{children:(0,p.jsx)(N,(0,t.Z)({elevation:C},W,{ref:J,className:(0,a.Z)(ee.paper,W.className),children:g}))}))}))})),H=n(4142);function W(e){return(0,k.Z)("MuiMenu",e)}(0,E.Z)("MuiMenu",["root","paper","list"]);var A=["onEntering"],K=["autoFocus","children","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant"],_={vertical:"top",horizontal:"right"},$={vertical:"top",horizontal:"left"},B=(0,P.ZP)(I,{shouldForwardProp:function(e){return(0,P.FO)(e)||"classes"===e},name:"MuiMenu",slot:"Root",overridesResolver:function(e,r){return r.root}})({}),V=(0,P.ZP)(Z.Z,{name:"MuiMenu",slot:"Paper",overridesResolver:function(e,r){return r.paper}})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),G=(0,P.ZP)(y,{name:"MuiMenu",slot:"List",overridesResolver:function(e,r){return r.list}})({outline:0}),U=i.forwardRef((function(e,r){var n=(0,w.Z)({props:e,name:"MuiMenu"}),l=n.autoFocus,u=void 0===l||l,c=n.children,d=n.disableAutoFocusItem,f=void 0!==d&&d,v=n.MenuListProps,h=void 0===v?{}:v,m=n.onClose,b=n.open,g=n.PaperProps,y=void 0===g?{}:g,Z=n.PopoverClasses,P=n.transitionDuration,M=void 0===P?"auto":P,x=n.TransitionProps,S=(x=void 0===x?{}:x).onEntering,C=n.variant,k=void 0===C?"selectedMenu":C,E=(0,o.Z)(n.TransitionProps,A),O=(0,o.Z)(n,K),T=(0,H.Z)(),R="rtl"===T.direction,D=(0,t.Z)({},n,{autoFocus:u,disableAutoFocusItem:f,MenuListProps:h,onEntering:S,PaperProps:y,transitionDuration:M,TransitionProps:E,variant:k}),j=function(e){var r=e.classes;return(0,s.Z)({root:["root"],paper:["paper"],list:["list"]},W,r)}(D),F=u&&!f&&b,z=i.useRef(null),L=-1;return i.Children.map(c,(function(e,r){i.isValidElement(e)&&(e.props.disabled||("selectedMenu"===k&&e.props.selected||-1===L)&&(L=r))})),(0,p.jsx)(B,(0,t.Z)({classes:Z,onClose:m,anchorOrigin:{vertical:"bottom",horizontal:R?"right":"left"},transformOrigin:R?_:$,PaperProps:(0,t.Z)({component:V},y,{classes:(0,t.Z)({},y.classes,{root:j.paper})}),className:j.root,open:b,ref:r,transitionDuration:M,TransitionProps:(0,t.Z)({onEntering:function(e,r){z.current&&z.current.adjustStyleForScrollbar(e,T),S&&S(e,r)}},E),ownerState:D},O,{children:(0,p.jsx)(G,(0,t.Z)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),m&&m(e,"tabKeyDown"))},actions:z,autoFocus:u&&(-1===L||f),autoFocusItem:F,variant:k},h,{className:(0,a.Z)(j.list,h.className),children:c}))}))}))},6532:function(e,r){var n,t=Symbol.for("react.element"),o=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),m=Symbol.for("react.offscreen");function b(e){if("object"===typeof e&&null!==e){var r=e.$$typeof;switch(r){case t:switch(e=e.type){case i:case s:case a:case f:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case d:case h:case v:case l:return e;default:return r}}case o:return r}}}n=Symbol.for("react.module.reference")},8457:function(e,r,n){n(6532)}}]);
//# sourceMappingURL=631.d85066de.chunk.js.map