(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dom-7eb7509a-7eb7509a-js"],{

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/dom-7eb7509a-7eb7509a.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/dom-7eb7509a-7eb7509a.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function(){var t=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function e(e){var n=t.has(e);return e=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e),!n&&e}function n(t){var e=t.isConnected;if(void 0!==e)return e;for(;t&&!(t.__CE_isImportDocument||t instanceof Document);)t=t.parentNode||(window.ShadowRoot&&t instanceof ShadowRoot?t.host:void 0);return !(!t||!(t.__CE_isImportDocument||t instanceof Document))}function o(t,e){for(;e&&e!==t&&!e.nextSibling;)e=e.parentNode;return e&&e!==t?e.nextSibling:null}function i(t,e,n){n=void 0===n?new Set:n;for(var r=t;r;){if(r.nodeType===Node.ELEMENT_NODE){var a=r;e(a);var l=a.localName;if("link"===l&&"import"===a.getAttribute("rel")){if((r=a.import)instanceof Node&&!n.has(r))for(n.add(r),r=r.firstChild;r;r=r.nextSibling)i(r,e,n);r=o(t,a);continue}if("template"===l){r=o(t,a);continue}if(a=a.__CE_shadowRoot)for(a=a.firstChild;a;a=a.nextSibling)i(a,e,n);}r=r.firstChild?r.firstChild:o(t,r);}}function r(t,e,n){t[e]=n;}function a(){this.a=new Map,this.f=new Map,this.c=[],this.b=!1;}function l(t,e){t.b=!0,t.c.push(e);}function c(t,e){t.b&&i(e,function(e){return s(t,e)});}function s(t,e){if(t.b&&!e.__CE_patched){e.__CE_patched=!0;for(var n=0;n<t.c.length;n++)t.c[n](e);}}function h(t,e){var n=[];for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state?t.connectedCallback(o):f(t,o);}}function u(t,e){var n=[];for(i(e,function(t){return n.push(t)}),e=0;e<n.length;e++){var o=n[e];1===o.__CE_state&&t.disconnectedCallback(o);}}function p(t,e,n){var o=(n=void 0===n?{}:n).u||new Set,r=n.h||function(e){return f(t,e)},a=[];if(i(e,function(e){if("link"===e.localName&&"import"===e.getAttribute("rel")){var n=e.import;n instanceof Node&&(n.__CE_isImportDocument=!0,n.__CE_hasRegistry=!0),n&&"complete"===n.readyState?n.__CE_documentLoadHandled=!0:e.addEventListener("load",function(){var n=e.import;if(!n.__CE_documentLoadHandled){n.__CE_documentLoadHandled=!0;var i=new Set(o);i.delete(n),p(t,n,{u:i,h:r});}});}else a.push(e);},o),t.b)for(e=0;e<a.length;e++)s(t,a[e]);for(e=0;e<a.length;e++)r(a[e]);}function f(t,e){if(void 0===e.__CE_state){var o=e.ownerDocument;if((o.defaultView||o.__CE_isImportDocument&&o.__CE_hasRegistry)&&(o=t.a.get(e.localName))){o.constructionStack.push(e);var i=o.constructorFunction;try{try{if(new i!==e)throw Error("The custom element constructor did not produce the element being upgraded.")}finally{o.constructionStack.pop();}}catch(t){throw e.__CE_state=2,t}if(e.__CE_state=1,e.__CE_definition=o,o.attributeChangedCallback)for(o=o.observedAttributes,i=0;i<o.length;i++){var r=o[i],a=e.getAttribute(r);null!==a&&t.attributeChangedCallback(e,r,null,a,null);}n(e)&&t.connectedCallback(e);}}}function d(t){var e=document;this.c=t,this.a=e,this.b=void 0,p(this.c,this.a),"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}));}function m(t){t.b&&t.b.disconnect();}function w(){var t=this;this.b=this.a=void 0,this.c=new Promise(function(e){t.b=e,t.a&&e(t.a);});}function b(t){if(t.a)throw Error("Already resolved.");t.a=void 0,t.b&&t.b(void 0);}function y(t){this.c=!1,this.a=t,this.j=new Map,this.f=function(t){return t()},this.b=!1,this.i=[],this.o=new d(t);}a.prototype.connectedCallback=function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t);},a.prototype.disconnectedCallback=function(t){var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t);},a.prototype.attributeChangedCallback=function(t,e,n,o,i){var r=t.__CE_definition;r.attributeChangedCallback&&-1<r.observedAttributes.indexOf(e)&&r.attributeChangedCallback.call(t,e,n,o,i);},d.prototype.f=function(t){var e=this.a.readyState;for("interactive"!==e&&"complete"!==e||m(this),e=0;e<t.length;e++)for(var n=t[e].addedNodes,o=0;o<n.length;o++)p(this.c,n[o]);},y.prototype.l=function(t,n){var o=this;if(!(n instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!e(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this.a.a.get(t))throw Error("A custom element with name '"+t+"' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var i=function(t){var e=r[t];if(void 0!==e&&!(e instanceof Function))throw Error("The '"+t+"' callback must be a function.");return e},r=n.prototype;if(!(r instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var a=i("connectedCallback"),l=i("disconnectedCallback"),c=i("adoptedCallback"),s=i("attributeChangedCallback"),h=n.observedAttributes||[];}catch(t){return}finally{this.c=!1;}n={localName:t,constructorFunction:n,connectedCallback:a,disconnectedCallback:l,adoptedCallback:c,attributeChangedCallback:s,observedAttributes:h,constructionStack:[]},function(t,e,n){t.a.set(e,n),t.f.set(n.constructorFunction,n);}(this.a,t,n),this.i.push(n),this.b||(this.b=!0,this.f(function(){return function(t){if(!1!==t.b){t.b=!1;for(var e=t.i,n=[],o=new Map,i=0;i<e.length;i++)o.set(e[i].localName,[]);for(p(t.a,document,{h:function(e){if(void 0===e.__CE_state){var i=e.localName,r=o.get(i);r?r.push(e):t.a.a.get(i)&&n.push(e);}}}),i=0;i<n.length;i++)f(t.a,n[i]);for(;0<e.length;){var r=e.shift();i=r.localName,r=o.get(r.localName);for(var a=0;a<r.length;a++)f(t.a,r[a]);(i=t.j.get(i))&&b(i);}}}(o)}));},y.prototype.h=function(t){p(this.a,t);},y.prototype.get=function(t){if(t=this.a.a.get(t))return t.constructorFunction},y.prototype.m=function(t){if(!e(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var n=this.j.get(t);return n?n.c:(n=new w,this.j.set(t,n),this.a.a.get(t)&&!this.i.some(function(e){return e.localName===t})&&b(n),n.c)},y.prototype.s=function(t){m(this.o);var e=this.f;this.f=function(n){return t(function(){return e(n)})};},window.CustomElementRegistry=y,y.prototype.define=y.prototype.l,y.prototype.upgrade=y.prototype.h,y.prototype.get=y.prototype.get,y.prototype.whenDefined=y.prototype.m,y.prototype.polyfillWrapFlushCallback=y.prototype.s;var g=window.Document.prototype.createElement,v=window.Document.prototype.createElementNS,E=window.Document.prototype.importNode,_=window.Document.prototype.prepend,C=window.Document.prototype.append,N=window.DocumentFragment.prototype.prepend,S=window.DocumentFragment.prototype.append,k=window.Node.prototype.cloneNode,D=window.Node.prototype.appendChild,T=window.Node.prototype.insertBefore,A=window.Node.prototype.removeChild,j=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),M=window.Element.prototype.attachShadow,H=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),x=window.Element.prototype.getAttribute,O=window.Element.prototype.setAttribute,F=window.Element.prototype.removeAttribute,R=window.Element.prototype.getAttributeNS,P=window.Element.prototype.setAttributeNS,I=window.Element.prototype.removeAttributeNS,z=window.Element.prototype.insertAdjacentElement,W=window.Element.prototype.insertAdjacentHTML,B=window.Element.prototype.prepend,U=window.Element.prototype.append,V=window.Element.prototype.before,X=window.Element.prototype.after,$=window.Element.prototype.replaceWith,q=window.Element.prototype.remove,G=window.HTMLElement,J=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),K=window.HTMLElement.prototype.insertAdjacentElement,Q=window.HTMLElement.prototype.insertAdjacentHTML,Y=new function(){};function Z(t,e,o){function i(e){return function(o){for(var i=[],r=0;r<arguments.length;++r)i[r]=arguments[r];r=[];for(var a=[],l=0;l<i.length;l++){var c=i[l];if(c instanceof Element&&n(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)r.push(c);else r.push(c);}for(e.apply(this,i),i=0;i<a.length;i++)u(t,a[i]);if(n(this))for(i=0;i<r.length;i++)(a=r[i])instanceof Element&&h(t,a);}}void 0!==o.g&&(e.prepend=i(o.g)),void 0!==o.append&&(e.append=i(o.append));}var tt,et=window.customElements;if(!et||"function"!=typeof et.define||"function"!=typeof et.get){var nt=new a;tt=nt,window.HTMLElement=function(){function t(){var t=this.constructor,e=tt.f.get(t);if(!e)throw Error("The custom element being constructed was not registered with `customElements`.");var n=e.constructionStack;if(0===n.length)return n=g.call(document,e.localName),Object.setPrototypeOf(n,t.prototype),n.__CE_state=1,n.__CE_definition=e,s(tt,n),n;var o=n[e=n.length-1];if(o===Y)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return n[e]=Y,Object.setPrototypeOf(o,t.prototype),s(tt,o),o}return t.prototype=G.prototype,Object.defineProperty(t.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:t}),t}(),function(){var t=nt;r(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.a.get(e);if(n)return new n.constructorFunction}return e=g.call(this,e),s(t,e),e}),r(Document.prototype,"importNode",function(e,n){return e=E.call(this,e,!!n),this.__CE_hasRegistry?p(t,e):c(t,e),e}),r(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var o=t.a.get(n);if(o)return new o.constructorFunction}return e=v.call(this,e,n),s(t,e),e}),Z(t,Document.prototype,{g:_,append:C});}(),Z(nt,DocumentFragment.prototype,{g:N,append:S}),function(){function t(t,o){Object.defineProperty(t,"textContent",{enumerable:o.enumerable,configurable:!0,get:o.get,set:function(t){if(this.nodeType===Node.TEXT_NODE)o.set.call(this,t);else{var i=void 0;if(this.firstChild){var r=this.childNodes,a=r.length;if(0<a&&n(this)){i=Array(a);for(var l=0;l<a;l++)i[l]=r[l];}}if(o.set.call(this,t),i)for(t=0;t<i.length;t++)u(e,i[t]);}}});}var e=nt;r(Node.prototype,"insertBefore",function(t,o){if(t instanceof DocumentFragment){var i=Array.prototype.slice.apply(t.childNodes);if(t=T.call(this,t,o),n(this))for(o=0;o<i.length;o++)h(e,i[o]);return t}return i=n(t),o=T.call(this,t,o),i&&u(e,t),n(this)&&h(e,t),o}),r(Node.prototype,"appendChild",function(t){if(t instanceof DocumentFragment){var o=Array.prototype.slice.apply(t.childNodes);if(t=D.call(this,t),n(this))for(var i=0;i<o.length;i++)h(e,o[i]);return t}return o=n(t),i=D.call(this,t),o&&u(e,t),n(this)&&h(e,t),i}),r(Node.prototype,"cloneNode",function(t){return t=k.call(this,!!t),this.ownerDocument.__CE_hasRegistry?p(e,t):c(e,t),t}),r(Node.prototype,"removeChild",function(t){var o=n(t),i=A.call(this,t);return o&&u(e,t),i}),r(Node.prototype,"replaceChild",function(t,o){if(t instanceof DocumentFragment){var i=Array.prototype.slice.apply(t.childNodes);if(t=j.call(this,t,o),n(this))for(u(e,o),o=0;o<i.length;o++)h(e,i[o]);return t}i=n(t);var r=j.call(this,t,o),a=n(this);return a&&u(e,o),i&&u(e,t),a&&h(e,t),r}),L&&L.get?t(Node.prototype,L):l(e,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)A.call(this,this.firstChild);D.call(this,document.createTextNode(t));}});});}(),function(){function t(t,e){Object.defineProperty(t,"innerHTML",{enumerable:e.enumerable,configurable:!0,get:e.get,set:function(t){var o=this,r=void 0;if(n(this)&&(r=[],i(this,function(t){t!==o&&r.push(t);})),e.set.call(this,t),r)for(var l=0;l<r.length;l++){var s=r[l];1===s.__CE_state&&a.disconnectedCallback(s);}return this.ownerDocument.__CE_hasRegistry?p(a,this):c(a,this),t}});}function e(t,e){r(t,"insertAdjacentElement",function(t,o){var i=n(o);return t=e.call(this,t,o),i&&u(a,o),n(t)&&h(a,o),t});}function o(t,e){function n(t,e){for(var n=[];t!==e;t=t.nextSibling)n.push(t);for(e=0;e<n.length;e++)p(a,n[e]);}r(t,"insertAdjacentHTML",function(t,o){if("beforebegin"===(t=t.toLowerCase())){var i=this.previousSibling;e.call(this,t,o),n(i||this.parentNode.firstChild,this);}else if("afterbegin"===t)i=this.firstChild,e.call(this,t,o),n(this.firstChild,i);else if("beforeend"===t)i=this.lastChild,e.call(this,t,o),n(i||this.firstChild,null);else{if("afterend"!==t)throw new SyntaxError("The value provided ("+String(t)+") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");i=this.nextSibling,e.call(this,t,o),n(this.nextSibling,i);}});}var a=nt;M&&r(Element.prototype,"attachShadow",function(t){return this.__CE_shadowRoot=M.call(this,t)}),H&&H.get?t(Element.prototype,H):J&&J.get?t(HTMLElement.prototype,J):l(a,function(e){t(e,{enumerable:!0,configurable:!0,get:function(){return k.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName,n=e?this.content:this,o=v.call(document,this.namespaceURI,this.localName);for(o.innerHTML=t;0<n.childNodes.length;)A.call(n,n.childNodes[0]);for(t=e?o.content:o;0<t.childNodes.length;)D.call(n,t.childNodes[0]);}});}),r(Element.prototype,"setAttribute",function(t,e){if(1!==this.__CE_state)return O.call(this,t,e);var n=x.call(this,t);O.call(this,t,e),e=x.call(this,t),a.attributeChangedCallback(this,t,n,e,null);}),r(Element.prototype,"setAttributeNS",function(t,e,n){if(1!==this.__CE_state)return P.call(this,t,e,n);var o=R.call(this,t,e);P.call(this,t,e,n),n=R.call(this,t,e),a.attributeChangedCallback(this,e,o,n,t);}),r(Element.prototype,"removeAttribute",function(t){if(1!==this.__CE_state)return F.call(this,t);var e=x.call(this,t);F.call(this,t),null!==e&&a.attributeChangedCallback(this,t,e,null,null);}),r(Element.prototype,"removeAttributeNS",function(t,e){if(1!==this.__CE_state)return I.call(this,t,e);var n=R.call(this,t,e);I.call(this,t,e);var o=R.call(this,t,e);n!==o&&a.attributeChangedCallback(this,e,n,o,t);}),K?e(HTMLElement.prototype,K):z?e(Element.prototype,z):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),Q?o(HTMLElement.prototype,Q):W?o(Element.prototype,W):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."),Z(a,Element.prototype,{g:B,append:U}),function(t){function e(e){return function(o){for(var i=[],r=0;r<arguments.length;++r)i[r]=arguments[r];r=[];for(var a=[],l=0;l<i.length;l++){var c=i[l];if(c instanceof Element&&n(c)&&a.push(c),c instanceof DocumentFragment)for(c=c.firstChild;c;c=c.nextSibling)r.push(c);else r.push(c);}for(e.apply(this,i),i=0;i<a.length;i++)u(t,a[i]);if(n(this))for(i=0;i<r.length;i++)(a=r[i])instanceof Element&&h(t,a);}}var o=Element.prototype;void 0!==V&&(o.before=e(V)),void 0!==V&&(o.after=e(X)),void 0!==$&&r(o,"replaceWith",function(e){for(var o=[],i=0;i<arguments.length;++i)o[i]=arguments[i];i=[];for(var r=[],a=0;a<o.length;a++){var l=o[a];if(l instanceof Element&&n(l)&&r.push(l),l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)i.push(l);else i.push(l);}for(a=n(this),$.apply(this,o),o=0;o<r.length;o++)u(t,r[o]);if(a)for(u(t,this),o=0;o<i.length;o++)(r=i[o])instanceof Element&&h(t,r);}),void 0!==q&&r(o,"remove",function(){var e=n(this);q.call(this),e&&u(t,this);});}(a);}(),document.__CE_hasRegistry=!0;var ot=new y(nt);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:ot});}}).call(self);

// Polyfill CustomEvent
if (typeof window.CustomEvent !== 'function') {
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
}

/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
(function(a){"function"!==typeof a.matches&&(a.matches=a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||function(a){a=(this.document||this.ownerDocument).querySelectorAll(a);for(var b=0;a[b]&&a[b]!==this;)++b;return !!a[b]});"function"!==typeof a.closest&&(a.closest=function(a){for(var b=this;b&&1===b.nodeType;){if(b.matches(a))return b;b=b.parentNode;}return null});})(window.Element.prototype);
/*!
Element.getRootNode()
*/
(function(c){function d(a){a=b(a);return 11===a.nodeType?d(a.host):a}function b(a){return a.parentNode?b(a.parentNode):a}"function"!==typeof c.getRootNode&&(c.getRootNode=function(a){return a&&a.composed?d(this):b(this)});})(Element.prototype);
/*!
Element.remove()
*/
(function(b){b.forEach(function(a){a.hasOwnProperty("remove")||Object.defineProperty(a,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this);}});});})([Element.prototype,CharacterData.prototype,DocumentType.prototype]);


/***/ }),

/***/ "./node_modules/@ionic/pwa-elements/dist/esm/legacy/dom-7eb7509a-7eb7509a.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/legacy/dom-7eb7509a-7eb7509a.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function () { var t = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ")); function e(e) { var n = t.has(e); return e = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(e), !n && e; } function n(t) { var e = t.isConnected; if (void 0 !== e)
    return e; for (; t && !(t.__CE_isImportDocument || t instanceof Document);)
    t = t.parentNode || (window.ShadowRoot && t instanceof ShadowRoot ? t.host : void 0); return !(!t || !(t.__CE_isImportDocument || t instanceof Document)); } function o(t, e) { for (; e && e !== t && !e.nextSibling;)
    e = e.parentNode; return e && e !== t ? e.nextSibling : null; } function i(t, e, n) { n = void 0 === n ? new Set : n; for (var r = t; r;) {
    if (r.nodeType === Node.ELEMENT_NODE) {
        var a = r;
        e(a);
        var l = a.localName;
        if ("link" === l && "import" === a.getAttribute("rel")) {
            if ((r = a.import) instanceof Node && !n.has(r))
                for (n.add(r), r = r.firstChild; r; r = r.nextSibling)
                    i(r, e, n);
            r = o(t, a);
            continue;
        }
        if ("template" === l) {
            r = o(t, a);
            continue;
        }
        if (a = a.__CE_shadowRoot)
            for (a = a.firstChild; a; a = a.nextSibling)
                i(a, e, n);
    }
    r = r.firstChild ? r.firstChild : o(t, r);
} } function r(t, e, n) { t[e] = n; } function a() { this.a = new Map, this.f = new Map, this.c = [], this.b = !1; } function l(t, e) { t.b = !0, t.c.push(e); } function c(t, e) { t.b && i(e, function (e) { return s(t, e); }); } function s(t, e) { if (t.b && !e.__CE_patched) {
    e.__CE_patched = !0;
    for (var n = 0; n < t.c.length; n++)
        t.c[n](e);
} } function h(t, e) { var n = []; for (i(e, function (t) { return n.push(t); }), e = 0; e < n.length; e++) {
    var o = n[e];
    1 === o.__CE_state ? t.connectedCallback(o) : f(t, o);
} } function u(t, e) { var n = []; for (i(e, function (t) { return n.push(t); }), e = 0; e < n.length; e++) {
    var o = n[e];
    1 === o.__CE_state && t.disconnectedCallback(o);
} } function p(t, e, n) { var o = (n = void 0 === n ? {} : n).u || new Set, r = n.h || function (e) { return f(t, e); }, a = []; if (i(e, function (e) { if ("link" === e.localName && "import" === e.getAttribute("rel")) {
    var n = e.import;
    n instanceof Node && (n.__CE_isImportDocument = !0, n.__CE_hasRegistry = !0), n && "complete" === n.readyState ? n.__CE_documentLoadHandled = !0 : e.addEventListener("load", function () { var n = e.import; if (!n.__CE_documentLoadHandled) {
        n.__CE_documentLoadHandled = !0;
        var i = new Set(o);
        i.delete(n), p(t, n, { u: i, h: r });
    } });
}
else
    a.push(e); }, o), t.b)
    for (e = 0; e < a.length; e++)
        s(t, a[e]); for (e = 0; e < a.length; e++)
    r(a[e]); } function f(t, e) { if (void 0 === e.__CE_state) {
    var o = e.ownerDocument;
    if ((o.defaultView || o.__CE_isImportDocument && o.__CE_hasRegistry) && (o = t.a.get(e.localName))) {
        o.constructionStack.push(e);
        var i = o.constructorFunction;
        try {
            try {
                if (new i !== e)
                    throw Error("The custom element constructor did not produce the element being upgraded.");
            }
            finally {
                o.constructionStack.pop();
            }
        }
        catch (t) {
            throw e.__CE_state = 2, t;
        }
        if (e.__CE_state = 1, e.__CE_definition = o, o.attributeChangedCallback)
            for (o = o.observedAttributes, i = 0; i < o.length; i++) {
                var r = o[i], a = e.getAttribute(r);
                null !== a && t.attributeChangedCallback(e, r, null, a, null);
            }
        n(e) && t.connectedCallback(e);
    }
} } function d(t) { var e = document; this.c = t, this.a = e, this.b = void 0, p(this.c, this.a), "loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, { childList: !0, subtree: !0 })); } function m(t) { t.b && t.b.disconnect(); } function w() { var t = this; this.b = this.a = void 0, this.c = new Promise(function (e) { t.b = e, t.a && e(t.a); }); } function b(t) { if (t.a)
    throw Error("Already resolved."); t.a = void 0, t.b && t.b(void 0); } function y(t) { this.c = !1, this.a = t, this.j = new Map, this.f = function (t) { return t(); }, this.b = !1, this.i = [], this.o = new d(t); } a.prototype.connectedCallback = function (t) { var e = t.__CE_definition; e.connectedCallback && e.connectedCallback.call(t); }, a.prototype.disconnectedCallback = function (t) { var e = t.__CE_definition; e.disconnectedCallback && e.disconnectedCallback.call(t); }, a.prototype.attributeChangedCallback = function (t, e, n, o, i) { var r = t.__CE_definition; r.attributeChangedCallback && -1 < r.observedAttributes.indexOf(e) && r.attributeChangedCallback.call(t, e, n, o, i); }, d.prototype.f = function (t) { var e = this.a.readyState; for ("interactive" !== e && "complete" !== e || m(this), e = 0; e < t.length; e++)
    for (var n = t[e].addedNodes, o = 0; o < n.length; o++)
        p(this.c, n[o]); }, y.prototype.l = function (t, n) { var o = this; if (!(n instanceof Function))
    throw new TypeError("Custom element constructors must be functions."); if (!e(t))
    throw new SyntaxError("The element name '" + t + "' is not valid."); if (this.a.a.get(t))
    throw Error("A custom element with name '" + t + "' has already been defined."); if (this.c)
    throw Error("A custom element is already being defined."); this.c = !0; try {
    var i = function (t) { var e = r[t]; if (void 0 !== e && !(e instanceof Function))
        throw Error("The '" + t + "' callback must be a function."); return e; }, r = n.prototype;
    if (!(r instanceof Object))
        throw new TypeError("The custom element constructor's prototype is not an object.");
    var a = i("connectedCallback"), l = i("disconnectedCallback"), c = i("adoptedCallback"), s = i("attributeChangedCallback"), h = n.observedAttributes || [];
}
catch (t) {
    return;
}
finally {
    this.c = !1;
} n = { localName: t, constructorFunction: n, connectedCallback: a, disconnectedCallback: l, adoptedCallback: c, attributeChangedCallback: s, observedAttributes: h, constructionStack: [] }, function (t, e, n) { t.a.set(e, n), t.f.set(n.constructorFunction, n); }(this.a, t, n), this.i.push(n), this.b || (this.b = !0, this.f(function () { return function (t) { if (!1 !== t.b) {
    t.b = !1;
    for (var e = t.i, n = [], o = new Map, i = 0; i < e.length; i++)
        o.set(e[i].localName, []);
    for (p(t.a, document, { h: function (e) { if (void 0 === e.__CE_state) {
            var i = e.localName, r = o.get(i);
            r ? r.push(e) : t.a.a.get(i) && n.push(e);
        } } }), i = 0; i < n.length; i++)
        f(t.a, n[i]);
    for (; 0 < e.length;) {
        var r = e.shift();
        i = r.localName, r = o.get(r.localName);
        for (var a = 0; a < r.length; a++)
            f(t.a, r[a]);
        (i = t.j.get(i)) && b(i);
    }
} }(o); })); }, y.prototype.h = function (t) { p(this.a, t); }, y.prototype.get = function (t) { if (t = this.a.a.get(t))
    return t.constructorFunction; }, y.prototype.m = function (t) { if (!e(t))
    return Promise.reject(new SyntaxError("'" + t + "' is not a valid custom element name.")); var n = this.j.get(t); return n ? n.c : (n = new w, this.j.set(t, n), this.a.a.get(t) && !this.i.some(function (e) { return e.localName === t; }) && b(n), n.c); }, y.prototype.s = function (t) { m(this.o); var e = this.f; this.f = function (n) { return t(function () { return e(n); }); }; }, window.CustomElementRegistry = y, y.prototype.define = y.prototype.l, y.prototype.upgrade = y.prototype.h, y.prototype.get = y.prototype.get, y.prototype.whenDefined = y.prototype.m, y.prototype.polyfillWrapFlushCallback = y.prototype.s; var g = window.Document.prototype.createElement, v = window.Document.prototype.createElementNS, E = window.Document.prototype.importNode, _ = window.Document.prototype.prepend, C = window.Document.prototype.append, N = window.DocumentFragment.prototype.prepend, S = window.DocumentFragment.prototype.append, k = window.Node.prototype.cloneNode, D = window.Node.prototype.appendChild, T = window.Node.prototype.insertBefore, A = window.Node.prototype.removeChild, j = window.Node.prototype.replaceChild, L = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), M = window.Element.prototype.attachShadow, H = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), x = window.Element.prototype.getAttribute, O = window.Element.prototype.setAttribute, F = window.Element.prototype.removeAttribute, R = window.Element.prototype.getAttributeNS, P = window.Element.prototype.setAttributeNS, I = window.Element.prototype.removeAttributeNS, z = window.Element.prototype.insertAdjacentElement, W = window.Element.prototype.insertAdjacentHTML, B = window.Element.prototype.prepend, U = window.Element.prototype.append, V = window.Element.prototype.before, X = window.Element.prototype.after, $ = window.Element.prototype.replaceWith, q = window.Element.prototype.remove, G = window.HTMLElement, J = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), K = window.HTMLElement.prototype.insertAdjacentElement, Q = window.HTMLElement.prototype.insertAdjacentHTML, Y = new function () { }; function Z(t, e, o) { function i(e) { return function (o) { for (var i = [], r = 0; r < arguments.length; ++r)
    i[r] = arguments[r]; r = []; for (var a = [], l = 0; l < i.length; l++) {
    var c = i[l];
    if (c instanceof Element && n(c) && a.push(c), c instanceof DocumentFragment)
        for (c = c.firstChild; c; c = c.nextSibling)
            r.push(c);
    else
        r.push(c);
} for (e.apply(this, i), i = 0; i < a.length; i++)
    u(t, a[i]); if (n(this))
    for (i = 0; i < r.length; i++)
        (a = r[i]) instanceof Element && h(t, a); }; } void 0 !== o.g && (e.prepend = i(o.g)), void 0 !== o.append && (e.append = i(o.append)); } var tt, et = window.customElements; if (!et || "function" != typeof et.define || "function" != typeof et.get) {
    var nt = new a;
    tt = nt, window.HTMLElement = function () { function t() { var t = this.constructor, e = tt.f.get(t); if (!e)
        throw Error("The custom element being constructed was not registered with `customElements`."); var n = e.constructionStack; if (0 === n.length)
        return n = g.call(document, e.localName), Object.setPrototypeOf(n, t.prototype), n.__CE_state = 1, n.__CE_definition = e, s(tt, n), n; var o = n[e = n.length - 1]; if (o === Y)
        throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times."); return n[e] = Y, Object.setPrototypeOf(o, t.prototype), s(tt, o), o; } return t.prototype = G.prototype, Object.defineProperty(t.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: t }), t; }(), function () { var t = nt; r(Document.prototype, "createElement", function (e) { if (this.__CE_hasRegistry) {
        var n = t.a.get(e);
        if (n)
            return new n.constructorFunction;
    } return e = g.call(this, e), s(t, e), e; }), r(Document.prototype, "importNode", function (e, n) { return e = E.call(this, e, !!n), this.__CE_hasRegistry ? p(t, e) : c(t, e), e; }), r(Document.prototype, "createElementNS", function (e, n) { if (this.__CE_hasRegistry && (null === e || "http://www.w3.org/1999/xhtml" === e)) {
        var o = t.a.get(n);
        if (o)
            return new o.constructorFunction;
    } return e = v.call(this, e, n), s(t, e), e; }), Z(t, Document.prototype, { g: _, append: C }); }(), Z(nt, DocumentFragment.prototype, { g: N, append: S }), function () { function t(t, o) { Object.defineProperty(t, "textContent", { enumerable: o.enumerable, configurable: !0, get: o.get, set: function (t) { if (this.nodeType === Node.TEXT_NODE)
            o.set.call(this, t);
        else {
            var i = void 0;
            if (this.firstChild) {
                var r = this.childNodes, a = r.length;
                if (0 < a && n(this)) {
                    i = Array(a);
                    for (var l = 0; l < a; l++)
                        i[l] = r[l];
                }
            }
            if (o.set.call(this, t), i)
                for (t = 0; t < i.length; t++)
                    u(e, i[t]);
        } } }); } var e = nt; r(Node.prototype, "insertBefore", function (t, o) { if (t instanceof DocumentFragment) {
        var i = Array.prototype.slice.apply(t.childNodes);
        if (t = T.call(this, t, o), n(this))
            for (o = 0; o < i.length; o++)
                h(e, i[o]);
        return t;
    } return i = n(t), o = T.call(this, t, o), i && u(e, t), n(this) && h(e, t), o; }), r(Node.prototype, "appendChild", function (t) { if (t instanceof DocumentFragment) {
        var o = Array.prototype.slice.apply(t.childNodes);
        if (t = D.call(this, t), n(this))
            for (var i = 0; i < o.length; i++)
                h(e, o[i]);
        return t;
    } return o = n(t), i = D.call(this, t), o && u(e, t), n(this) && h(e, t), i; }), r(Node.prototype, "cloneNode", function (t) { return t = k.call(this, !!t), this.ownerDocument.__CE_hasRegistry ? p(e, t) : c(e, t), t; }), r(Node.prototype, "removeChild", function (t) { var o = n(t), i = A.call(this, t); return o && u(e, t), i; }), r(Node.prototype, "replaceChild", function (t, o) { if (t instanceof DocumentFragment) {
        var i = Array.prototype.slice.apply(t.childNodes);
        if (t = j.call(this, t, o), n(this))
            for (u(e, o), o = 0; o < i.length; o++)
                h(e, i[o]);
        return t;
    } i = n(t); var r = j.call(this, t, o), a = n(this); return a && u(e, o), i && u(e, t), a && h(e, t), r; }), L && L.get ? t(Node.prototype, L) : l(e, function (e) { t(e, { enumerable: !0, configurable: !0, get: function () { for (var t = [], e = 0; e < this.childNodes.length; e++)
            t.push(this.childNodes[e].textContent); return t.join(""); }, set: function (t) { for (; this.firstChild;)
            A.call(this, this.firstChild); D.call(this, document.createTextNode(t)); } }); }); }(), function () { function t(t, e) { Object.defineProperty(t, "innerHTML", { enumerable: e.enumerable, configurable: !0, get: e.get, set: function (t) { var o = this, r = void 0; if (n(this) && (r = [], i(this, function (t) { t !== o && r.push(t); })), e.set.call(this, t), r)
            for (var l = 0; l < r.length; l++) {
                var s = r[l];
                1 === s.__CE_state && a.disconnectedCallback(s);
            } return this.ownerDocument.__CE_hasRegistry ? p(a, this) : c(a, this), t; } }); } function e(t, e) { r(t, "insertAdjacentElement", function (t, o) { var i = n(o); return t = e.call(this, t, o), i && u(a, o), n(t) && h(a, o), t; }); } function o(t, e) { function n(t, e) { for (var n = []; t !== e; t = t.nextSibling)
        n.push(t); for (e = 0; e < n.length; e++)
        p(a, n[e]); } r(t, "insertAdjacentHTML", function (t, o) { if ("beforebegin" === (t = t.toLowerCase())) {
        var i = this.previousSibling;
        e.call(this, t, o), n(i || this.parentNode.firstChild, this);
    }
    else if ("afterbegin" === t)
        i = this.firstChild, e.call(this, t, o), n(this.firstChild, i);
    else if ("beforeend" === t)
        i = this.lastChild, e.call(this, t, o), n(i || this.firstChild, null);
    else {
        if ("afterend" !== t)
            throw new SyntaxError("The value provided (" + String(t) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
        i = this.nextSibling, e.call(this, t, o), n(this.nextSibling, i);
    } }); } var a = nt; M && r(Element.prototype, "attachShadow", function (t) { return this.__CE_shadowRoot = M.call(this, t); }), H && H.get ? t(Element.prototype, H) : J && J.get ? t(HTMLElement.prototype, J) : l(a, function (e) { t(e, { enumerable: !0, configurable: !0, get: function () { return k.call(this, !0).innerHTML; }, set: function (t) { var e = "template" === this.localName, n = e ? this.content : this, o = v.call(document, this.namespaceURI, this.localName); for (o.innerHTML = t; 0 < n.childNodes.length;)
            A.call(n, n.childNodes[0]); for (t = e ? o.content : o; 0 < t.childNodes.length;)
            D.call(n, t.childNodes[0]); } }); }), r(Element.prototype, "setAttribute", function (t, e) { if (1 !== this.__CE_state)
        return O.call(this, t, e); var n = x.call(this, t); O.call(this, t, e), e = x.call(this, t), a.attributeChangedCallback(this, t, n, e, null); }), r(Element.prototype, "setAttributeNS", function (t, e, n) { if (1 !== this.__CE_state)
        return P.call(this, t, e, n); var o = R.call(this, t, e); P.call(this, t, e, n), n = R.call(this, t, e), a.attributeChangedCallback(this, e, o, n, t); }), r(Element.prototype, "removeAttribute", function (t) { if (1 !== this.__CE_state)
        return F.call(this, t); var e = x.call(this, t); F.call(this, t), null !== e && a.attributeChangedCallback(this, t, e, null, null); }), r(Element.prototype, "removeAttributeNS", function (t, e) { if (1 !== this.__CE_state)
        return I.call(this, t, e); var n = R.call(this, t, e); I.call(this, t, e); var o = R.call(this, t, e); n !== o && a.attributeChangedCallback(this, e, n, o, t); }), K ? e(HTMLElement.prototype, K) : z ? e(Element.prototype, z) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."), Q ? o(HTMLElement.prototype, Q) : W ? o(Element.prototype, W) : console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched."), Z(a, Element.prototype, { g: B, append: U }), function (t) { function e(e) { return function (o) { for (var i = [], r = 0; r < arguments.length; ++r)
        i[r] = arguments[r]; r = []; for (var a = [], l = 0; l < i.length; l++) {
        var c = i[l];
        if (c instanceof Element && n(c) && a.push(c), c instanceof DocumentFragment)
            for (c = c.firstChild; c; c = c.nextSibling)
                r.push(c);
        else
            r.push(c);
    } for (e.apply(this, i), i = 0; i < a.length; i++)
        u(t, a[i]); if (n(this))
        for (i = 0; i < r.length; i++)
            (a = r[i]) instanceof Element && h(t, a); }; } var o = Element.prototype; void 0 !== V && (o.before = e(V)), void 0 !== V && (o.after = e(X)), void 0 !== $ && r(o, "replaceWith", function (e) { for (var o = [], i = 0; i < arguments.length; ++i)
        o[i] = arguments[i]; i = []; for (var r = [], a = 0; a < o.length; a++) {
        var l = o[a];
        if (l instanceof Element && n(l) && r.push(l), l instanceof DocumentFragment)
            for (l = l.firstChild; l; l = l.nextSibling)
                i.push(l);
        else
            i.push(l);
    } for (a = n(this), $.apply(this, o), o = 0; o < r.length; o++)
        u(t, r[o]); if (a)
        for (u(t, this), o = 0; o < i.length; o++)
            (r = i[o]) instanceof Element && h(t, r); }), void 0 !== q && r(o, "remove", function () { var e = n(this); q.call(this), e && u(t, this); }); }(a); }(), document.__CE_hasRegistry = !0;
    var ot = new y(nt);
    Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: ot });
} }).call(self);
// Polyfill CustomEvent
if (typeof window.CustomEvent !== 'function') {
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
}
/*!
Element.closest and Element.matches
https://github.com/jonathantneal/closest
Creative Commons Zero v1.0 Universal
*/
(function (a) { "function" !== typeof a.matches && (a.matches = a.msMatchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || function (a) { a = (this.document || this.ownerDocument).querySelectorAll(a); for (var b = 0; a[b] && a[b] !== this;)
    ++b; return !!a[b]; }); "function" !== typeof a.closest && (a.closest = function (a) { for (var b = this; b && 1 === b.nodeType;) {
    if (b.matches(a))
        return b;
    b = b.parentNode;
} return null; }); })(window.Element.prototype);
/*!
Element.getRootNode()
*/
(function (c) { function d(a) { a = b(a); return 11 === a.nodeType ? d(a.host) : a; } function b(a) { return a.parentNode ? b(a.parentNode) : a; } "function" !== typeof c.getRootNode && (c.getRootNode = function (a) { return a && a.composed ? d(this) : b(this); }); })(Element.prototype);
/*!
Element.remove()
*/
(function (b) { b.forEach(function (a) { a.hasOwnProperty("remove") || Object.defineProperty(a, "remove", { configurable: !0, enumerable: !0, writable: !0, value: function () { null !== this.parentNode && this.parentNode.removeChild(this); } }); }); })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);


/***/ })

}]);
//# sourceMappingURL=dom-7eb7509a-7eb7509a-js-es2015.js.map