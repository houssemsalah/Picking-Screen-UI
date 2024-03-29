/*!
 * quasar-ui-qgrid v1.0.18
 * (c) 2023 pratikpatelpp802@gmail.com
 * Released under the MIT License.
 */
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("vue"), require("quasar")) : "function" == typeof define && define.amd ? define(["vue", "quasar"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).QGrid = t(e.Vue, e.Quasar)
}(this, function (C, o) {
    "use strict";

    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function a() {
        return (a = Object.assign || function (e) {
            for (var t = arguments, n = 1; n < arguments.length; n++) {
                var o, r = t[n];
                for (o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
            }
            return e
        }).apply(this, arguments)
    }

    function V(o) {
        for (var e = arguments, t = 1; t < arguments.length; t++) {
            var r = null != e[t] ? e[t] : {}, n = Object.keys(r);
            (n = "function" == typeof Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable
            })) : n).forEach(function (e) {
                var t, n;
                t = o, e = r[n = e], n in t ? Object.defineProperty(t, n, {
                    value: e,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = e
            })
        }
        return o
    }

    function i(e, t) {
        if (null == e) return {};
        var n, o = function (e, t) {
            if (null == e) return {};
            for (var n, o = {}, r = Object.keys(e), i = 0; i < r.length; i++) n = r[i], 0 <= t.indexOf(n) || (o[n] = e[n]);
            return o
        }(e, t);
        if (Object.getOwnPropertySymbols) for (var r = Object.getOwnPropertySymbols(e), i = 0; i < r.length; i++) n = r[i], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        return o
    }

    function e(e) {
        if ("undefined" != typeof window && window.navigator) return !!navigator.userAgent.match(e)
    }

    var v = e(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), w = e(/Edge/i), s = e(/firefox/i),
        c = e(/safari/i) && !e(/chrome/i) && !e(/android/i), t = e(/iP(ad|od|hone)/i),
        n = e(/chrome/i) && e(/android/i), l = {capture: !1, passive: !1};

    function u(e, t, n) {
        e.addEventListener(t, n, !v && l)
    }

    function d(e, t, n) {
        e.removeEventListener(t, n, !v && l)
    }

    function f(e, t) {
        if (t && (">" === t[0] && (t = t.substring(1)), e)) try {
            if (e.matches) return e.matches(t);
            if (e.msMatchesSelector) return e.msMatchesSelector(t);
            if (e.webkitMatchesSelector) return e.webkitMatchesSelector(t)
        } catch (e) {
            return
        }
    }

    function Y(e, t, n, o) {
        if (e) {
            n = n || document;
            do {
                if (null != t && (">" !== t[0] || e.parentNode === n) && f(e, t) || o && e === n) return e
            } while (e !== n && (e = (r = e).host && r !== document && r.host.nodeType ? r.host : r.parentNode))
        }
        var r;
        return null
    }

    var h, m = /\s+/g;

    function O(e, t, n) {
        var o;
        e && t && (e.classList ? e.classList[n ? "add" : "remove"](t) : (o = (" " + e.className + " ").replace(m, " ").replace(" " + t + " ", " "), e.className = (o + (n ? " " + t : "")).replace(m, " ")))
    }

    function T(e, t, n) {
        var o = e && e.style;
        if (o) {
            if (void 0 === n) return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(e, "") : e.currentStyle && (n = e.currentStyle), void 0 === t ? n : n[t];
            o[t = !(t in o || -1 !== t.indexOf("webkit")) ? "-webkit-" + t : t] = n + ("string" == typeof n ? "" : "px")
        }
    }

    function p(e, t) {
        var n = "";
        if ("string" == typeof e) n = e; else do {
            var o = T(e, "transform")
        } while (o && "none" !== o && (n = o + " " + n), !t && (e = e.parentNode));
        var r = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
        return r && new r(n)
    }

    function _(e, t, n) {
        if (e) {
            var o = e.getElementsByTagName(t), r = 0, i = o.length;
            if (n) for (; r < i; r++) n(o[r], r);
            return o
        }
        return []
    }

    function M() {
        var e = document.scrollingElement;
        return e || document.documentElement
    }

    function E(e, t, n, o, r) {
        if (e.getBoundingClientRect || e === window) {
            var i, a, l, s, u, c,
                d = e !== window && e.parentNode && e !== M() ? (a = (i = e.getBoundingClientRect()).top, l = i.left, s = i.bottom, u = i.right, c = i.height, i.width) : (l = a = 0, s = window.innerHeight, u = window.innerWidth, c = window.innerHeight, window.innerWidth);
            if ((t || n) && e !== window && (r = r || e.parentNode, !v)) do {
                if (r && r.getBoundingClientRect && ("none" !== T(r, "transform") || n && "static" !== T(r, "position"))) {
                    var f = r.getBoundingClientRect();
                    a -= f.top + parseInt(T(r, "border-top-width")), l -= f.left + parseInt(T(r, "border-left-width")), s = a + i.height, u = l + i.width;
                    break
                }
            } while (r = r.parentNode);
            return o && e !== window && (o = (t = p(r || e)) && t.a, e = t && t.d, t && (s = (a /= e) + (c /= e), u = (l /= o) + (d /= o))), {
                top: a,
                left: l,
                bottom: s,
                right: u,
                width: d,
                height: c
            }
        }
    }

    function P(e, t, n) {
        for (var o = U(e, !0), r = E(e)[t]; o;) {
            var i = E(o)[n];
            if (!("top" === n || "left" === n ? i <= r : r <= i)) return o;
            if (o === M()) break;
            o = U(o, !1)
        }
        return !1
    }

    function g(e, t, n) {
        for (var o = 0, r = 0, i = e.children; r < i.length;) {
            if ("none" !== i[r].style.display && i[r] !== Ee.ghost && i[r] !== Ee.dragged && Y(i[r], n.draggable, e, !1)) {
                if (o === t) return i[r];
                o++
            }
            r++
        }
        return null
    }

    function B(e, t) {
        for (var n = e.lastElementChild; n && (n === Ee.ghost || "none" === T(n, "display") || t && !f(n, t));) n = n.previousElementSibling;
        return n || null
    }

    function R(e, t) {
        var n = 0;
        if (!e || !e.parentNode) return -1;
        for (; e = e.previousElementSibling;) "TEMPLATE" === e.nodeName.toUpperCase() || e === Ee.clone || t && !f(e, t) || n++;
        return n
    }

    function y(e) {
        var t = 0, n = 0, o = M();
        if (e) do {
            var r = p(e), i = r.a, r = r.d
        } while (t += e.scrollLeft * i, n += e.scrollTop * r, e !== o && (e = e.parentNode));
        return [t, n]
    }

    function U(e, t) {
        if (!e || !e.getBoundingClientRect) return M();
        var n = e, o = !1;
        do {
            if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
                var r = T(n);
                if (n.clientWidth < n.scrollWidth && ("auto" == r.overflowX || "scroll" == r.overflowX) || n.clientHeight < n.scrollHeight && ("auto" == r.overflowY || "scroll" == r.overflowY)) {
                    if (!n.getBoundingClientRect || n === document.body) return M();
                    if (o || t) return n;
                    o = !0
                }
            }
        } while (n = n.parentNode);
        return M()
    }

    function b(e, t) {
        return Math.round(e.top) === Math.round(t.top) && Math.round(e.left) === Math.round(t.left) && Math.round(e.height) === Math.round(t.height) && Math.round(e.width) === Math.round(t.width)
    }

    function k(t, n) {
        return function () {
            var e;
            h || (1 === (e = arguments).length ? t.call(this, e[0]) : t.apply(this, e), h = setTimeout(function () {
                h = void 0
            }, n))
        }
    }

    function F(e, t, n) {
        e.scrollLeft += t, e.scrollTop += n
    }

    function x(e) {
        var t = window.Polymer, n = window.jQuery || window.Zepto;
        return t && t.dom ? t.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
    }

    var I = "Sortable" + (new Date).getTime();

    function S() {
        var t, o = [];
        return {
            captureAnimationState: function () {
                o = [], this.options.animation && [].slice.call(this.el.children).forEach(function (e) {
                    var t, n;
                    "none" !== T(e, "display") && e !== Ee.ghost && (o.push({
                        target: e,
                        rect: E(e)
                    }), t = V({}, o[o.length - 1].rect), !e.thisAnimationDuration || (n = p(e, !0)) && (t.top -= n.f, t.left -= n.e), e.fromRect = t)
                })
            }, addAnimationState: function (e) {
                o.push(e)
            }, removeAnimationState: function (e) {
                o.splice(function (e, t) {
                    for (var n in e) if (e.hasOwnProperty(n)) for (var o in t) if (t.hasOwnProperty(o) && t[o] === e[n][o]) return Number(n);
                    return -1
                }(o, {target: e}), 1)
            }, animateAll: function (e) {
                var u = this;
                if (!this.options.animation) return clearTimeout(t), void ("function" == typeof e && e());
                var c = !1, d = 0;
                o.forEach(function (e) {
                    var t = 0, n = e.target, o = n.fromRect, r = E(n), i = n.prevFromRect, a = n.prevToRect, l = e.rect,
                        s = p(n, !0);
                    s && (r.top -= s.f, r.left -= s.e), n.toRect = r, n.thisAnimationDuration && b(i, r) && !b(o, r) && (l.top - r.top) / (l.left - r.left) == (o.top - r.top) / (o.left - r.left) && (e = l, s = i, i = a, a = u.options, t = Math.sqrt(Math.pow(s.top - e.top, 2) + Math.pow(s.left - e.left, 2)) / Math.sqrt(Math.pow(s.top - i.top, 2) + Math.pow(s.left - i.left, 2)) * a.animation), b(r, o) || (n.prevFromRect = o, n.prevToRect = r, t = t || u.options.animation, u.animate(n, l, r, t)), t && (c = !0, d = Math.max(d, t), clearTimeout(n.animationResetTimer), n.animationResetTimer = setTimeout(function () {
                        n.animationTime = 0, n.prevFromRect = null, n.fromRect = null, n.prevToRect = null, n.thisAnimationDuration = null
                    }, t), n.thisAnimationDuration = t)
                }), clearTimeout(t), c ? t = setTimeout(function () {
                    "function" == typeof e && e()
                }, d) : "function" == typeof e && e(), o = []
            }, animate: function (e, t, n, o) {
                var r, i;
                o && (T(e, "transition", ""), T(e, "transform", ""), r = (i = p(this.el)) && i.a, i = i && i.d, r = (t.left - n.left) / (r || 1), i = (t.top - n.top) / (i || 1), e.animatingX = !!r, e.animatingY = !!i, T(e, "transform", "translate3d(" + r + "px," + i + "px,0)"), this.forRepaintDummy = e.offsetWidth, T(e, "transition", "transform " + o + "ms" + (this.options.easing ? " " + this.options.easing : "")), T(e, "transform", "translate3d(0,0,0)"), "number" == typeof e.animated && clearTimeout(e.animated), e.animated = setTimeout(function () {
                    T(e, "transition", ""), T(e, "transform", ""), e.animated = !1, e.animatingX = !1, e.animatingY = !1
                }, o))
            }
        }
    }

    var D = [], N = {initializeByDefault: !0}, H = {
        mount: function (t) {
            for (var e in N) !N.hasOwnProperty(e) || e in t || (t[e] = N[e]);
            D.forEach(function (e) {
                if (e.pluginName === t.pluginName) throw"Sortable: Cannot mount plugin ".concat(t.pluginName, " more than once")
            }), D.push(t)
        }, pluginEvent: function (t, n, o) {
            var e = this;
            this.eventCanceled = !1, o.cancel = function () {
                e.eventCanceled = !0
            };
            var r = t + "Global";
            D.forEach(function (e) {
                n[e.pluginName] && (n[e.pluginName][r] && n[e.pluginName][r](V({sortable: n}, o)), n.options[e.pluginName] && n[e.pluginName][t] && n[e.pluginName][t](V({sortable: n}, o)))
            })
        }, initializePlugins: function (n, o, r, e) {
            for (var t in D.forEach(function (e) {
                var t = e.pluginName;
                (n.options[t] || e.initializeByDefault) && ((e = new e(n, o, n.options)).sortable = n, e.options = n.options, n[t] = e, a(r, e.defaults))
            }), n.options) {
                var i;
                n.options.hasOwnProperty(t) && (void 0 !== (i = this.modifyOption(n, t, n.options[t])) && (n.options[t] = i))
            }
        }, getEventProperties: function (t, n) {
            var o = {};
            return D.forEach(function (e) {
                "function" == typeof e.eventProperties && a(o, e.eventProperties.call(n[e.pluginName], t))
            }), o
        }, modifyOption: function (t, n, o) {
            var r;
            return D.forEach(function (e) {
                t[e.pluginName] && e.optionListeners && "function" == typeof e.optionListeners[n] && (r = e.optionListeners[n].call(t[e.pluginName], o))
            }), r
        }
    };

    function W(e, t) {
        var n = (o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).evt, o = i(o, ["evt"]);
        H.pluginEvent.bind(Ee)(e, t, V({
            dragEl: L,
            parentEl: q,
            ghostEl: G,
            rootEl: j,
            nextEl: z,
            lastDownEl: X,
            cloneEl: $,
            cloneHidden: Z,
            dragStarted: ue,
            putSortable: ne,
            activeSortable: Ee.active,
            originalEvent: n,
            oldIndex: Q,
            oldDraggableIndex: K,
            newIndex: J,
            newDraggableIndex: ee,
            hideGhostForTarget: Ve,
            unhideGhostForTarget: Ye,
            cloneNowHidden: function () {
                Z = !0
            },
            cloneNowShown: function () {
                Z = !1
            },
            dispatchSortableEvent: function (e) {
                A({sortable: t, name: e, originalEvent: n})
            }
        }, o))
    }

    function A(e) {
        !function (e) {
            var t = e.sortable, n = e.rootEl, o = e.name, r = e.targetEl, i = e.cloneEl, a = e.toEl, l = e.fromEl,
                s = e.oldIndex, u = e.newIndex, c = e.oldDraggableIndex, d = e.newDraggableIndex, f = e.originalEvent,
                h = e.putSortable, m = e.extraEventProperties;
            if (t = t || n && n[I]) {
                var p, _ = t.options, e = "on" + o.charAt(0).toUpperCase() + o.substr(1);
                !window.CustomEvent || v || w ? (p = document.createEvent("Event")).initEvent(o, !0, !0) : p = new CustomEvent(o, {
                    bubbles: !0,
                    cancelable: !0
                }), p.to = a || n, p.from = l || n, p.item = r || n, p.clone = i, p.oldIndex = s, p.newIndex = u, p.oldDraggableIndex = c, p.newDraggableIndex = d, p.originalEvent = f, p.pullMode = h ? h.lastPutMode : void 0;
                var g, y = V({}, m, H.getEventProperties(o, t));
                for (g in y) p[g] = y[g];
                n && n.dispatchEvent(p), _[e] && _[e].call(t, p)
            }
        }(V({
            putSortable: ne,
            cloneEl: $,
            targetEl: L,
            rootEl: j,
            oldIndex: Q,
            oldDraggableIndex: K,
            newIndex: J,
            newDraggableIndex: ee
        }, e))
    }

    var L, q, G, j, z, X, $, Z, Q, J, K, ee, te, ne, oe, re, ie, ae, le, se, ue, ce, de, fe, he, me = !1, pe = !1,
        _e = [], ge = !1, ye = !1, ve = [], we = !1, be = [], ke = "undefined" != typeof document, xe = t,
        Ce = w || v ? "cssFloat" : "float", Se = ke && !n && !t && "draggable" in document.createElement("div"),
        De = function () {
            if (ke) {
                if (v) return !1;
                var e = document.createElement("x");
                return e.style.cssText = "pointer-events:auto", "auto" === e.style.pointerEvents
            }
        }(), Ne = function (e, t) {
            var n = T(e),
                o = parseInt(n.width) - parseInt(n.paddingLeft) - parseInt(n.paddingRight) - parseInt(n.borderLeftWidth) - parseInt(n.borderRightWidth),
                r = g(e, 0, t), i = g(e, 1, t), a = r && T(r), l = i && T(i),
                s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + E(r).width,
                e = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + E(i).width;
            if ("flex" === n.display) return "column" === n.flexDirection || "column-reverse" === n.flexDirection ? "vertical" : "horizontal";
            if ("grid" === n.display) return n.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
            if (r && a.float && "none" !== a.float) {
                t = "left" === a.float ? "left" : "right";
                return !i || "both" !== l.clear && l.clear !== t ? "horizontal" : "vertical"
            }
            return r && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || o <= s && "none" === n[Ce] || i && "none" === n[Ce] && o < s + e) ? "vertical" : "horizontal"
        }, Me = function (e) {
            function l(i, a) {
                return function (e, t, n, o) {
                    var r = e.options.group.name && t.options.group.name && e.options.group.name === t.options.group.name;
                    if (null == i && (a || r)) return !0;
                    if (null == i || !1 === i) return !1;
                    if (a && "clone" === i) return i;
                    if ("function" == typeof i) return l(i(e, t, n, o), a)(e, t, n, o);
                    t = (a ? e : t).options.group.name;
                    return !0 === i || "string" == typeof i && i === t || i.join && -1 < i.indexOf(t)
                }
            }

            var t = {}, n = e.group;
            n && "object" == r(n) || (n = {name: n}), t.name = n.name, t.checkPull = l(n.pull, !0), t.checkPut = l(n.put), t.revertClone = n.revertClone, e.group = t
        }, Ve = function () {
            !De && G && T(G, "display", "none")
        }, Ye = function () {
            !De && G && T(G, "display", "")
        };
    ke && document.addEventListener("click", function (e) {
        if (pe) return e.preventDefault(), e.stopPropagation && e.stopPropagation(), e.stopImmediatePropagation && e.stopImmediatePropagation(), pe = !1
    }, !0);

    function Oe(e) {
        if (L) {
            e = e.touches ? e.touches[0] : e;
            var t = (r = e.clientX, i = e.clientY, _e.some(function (e) {
                if (!B(e)) {
                    var t = E(e), n = e[I].options.emptyInsertThreshold, o = r >= t.left - n && r <= t.right + n,
                        t = i >= t.top - n && i <= t.bottom + n;
                    return n && o && t ? a = e : void 0
                }
            }), a);
            if (t) {
                var n, o = {};
                for (n in e) e.hasOwnProperty(n) && (o[n] = e[n]);
                o.target = o.rootEl = t, o.preventDefault = void 0, o.stopPropagation = void 0, t[I]._onDragOver(o)
            }
        }
        var r, i, a
    }

    function Te(e) {
        L && L.parentNode[I]._isOutsideThisEl(e.target)
    }

    function Ee(e, t) {
        if (!e || !e.nodeType || 1 !== e.nodeType) throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));
        this.el = e, this.options = t = a({}, t), e[I] = this;
        var n, o, r = {
            group: null,
            sort: !0,
            disabled: !1,
            store: null,
            handle: null,
            draggable: /^[uo]l$/i.test(e.nodeName) ? ">li" : ">*",
            swapThreshold: 1,
            invertSwap: !1,
            invertedSwapThreshold: null,
            removeCloneOnHide: !0,
            direction: function () {
                return Ne(e, this.options)
            },
            ghostClass: "sortable-ghost",
            chosenClass: "sortable-chosen",
            dragClass: "sortable-drag",
            ignore: "a, img",
            filter: null,
            preventOnFilter: !0,
            animation: 0,
            easing: null,
            setData: function (e, t) {
                e.setData("Text", t.textContent)
            },
            dropBubble: !1,
            dragoverBubble: !1,
            dataIdAttr: "data-id",
            delay: 0,
            delayOnTouchOnly: !1,
            touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
            forceFallback: !1,
            fallbackClass: "sortable-fallback",
            fallbackOnBody: !1,
            fallbackTolerance: 0,
            fallbackOffset: {x: 0, y: 0},
            supportPointer: !1 !== Ee.supportPointer && "PointerEvent" in window && !c,
            emptyInsertThreshold: 5
        };
        for (n in H.initializePlugins(this, e, r), r) n in t || (t[n] = r[n]);
        for (o in Me(t), this) "_" === o.charAt(0) && "function" == typeof this[o] && (this[o] = this[o].bind(this));
        this.nativeDraggable = !t.forceFallback && Se, this.nativeDraggable && (this.options.touchStartThreshold = 1), t.supportPointer ? u(e, "pointerdown", this._onTapStart) : (u(e, "mousedown", this._onTapStart), u(e, "touchstart", this._onTapStart)), this.nativeDraggable && (u(e, "dragover", this), u(e, "dragenter", this)), _e.push(this.el), t.store && t.store.get && this.sort(t.store.get(this) || []), a(this, S())
    }

    function Pe(e, t, n, o, r, i, a, l) {
        var s, u, c = e[I], d = c.options.onMove;
        return !window.CustomEvent || v || w ? (s = document.createEvent("Event")).initEvent("move", !0, !0) : s = new CustomEvent("move", {
            bubbles: !0,
            cancelable: !0
        }), s.to = t, s.from = e, s.dragged = n, s.draggedRect = o, s.related = r || t, s.relatedRect = i || E(t), s.willInsertAfter = l, s.originalEvent = a, e.dispatchEvent(s), u = d ? d.call(c, s, a) : u
    }

    function Be(e) {
        e.draggable = !1
    }

    function Re() {
        we = !1
    }

    function Ue(e) {
        return setTimeout(e, 0)
    }

    function Fe(e) {
        return clearTimeout(e)
    }

    Ee.prototype = {
        constructor: Ee, _isOutsideThisEl: function (e) {
            this.el.contains(e) || e === this.el || (ce = null)
        }, _getDirection: function (e, t) {
            return "function" == typeof this.options.direction ? this.options.direction.call(this, e, t, L) : this.options.direction
        }, _onTapStart: function (t) {
            if (t.cancelable) {
                var n = this, o = this.el, e = this.options, r = e.preventOnFilter, i = t.type,
                    a = t.touches && t.touches[0] || t.pointerType && "touch" === t.pointerType && t,
                    l = (a || t).target,
                    s = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || l,
                    u = e.filter;
                if (!function (e) {
                    be.length = 0;
                    var t = e.getElementsByTagName("input"), n = t.length;
                    for (; n--;) {
                        var o = t[n];
                        o.checked && be.push(o)
                    }
                }(o), !L && !(/mousedown|pointerdown/.test(i) && 0 !== t.button || e.disabled) && !s.isContentEditable && (this.nativeDraggable || !c || !l || "SELECT" !== l.tagName.toUpperCase()) && !((l = Y(l, e.draggable, o, !1)) && l.animated || X === l)) {
                    if (Q = R(l), K = R(l, e.draggable), "function" == typeof u) {
                        if (u.call(this, t, l, this)) return A({
                            sortable: n,
                            rootEl: s,
                            name: "filter",
                            targetEl: l,
                            toEl: o,
                            fromEl: o
                        }), W("filter", n, {evt: t}), void (r && t.cancelable && t.preventDefault())
                    } else if (u = u && u.split(",").some(function (e) {
                        if (e = Y(s, e.trim(), o, !1)) return A({
                            sortable: n,
                            rootEl: e,
                            name: "filter",
                            targetEl: l,
                            fromEl: o,
                            toEl: o
                        }), W("filter", n, {evt: t}), !0
                    })) return void (r && t.cancelable && t.preventDefault());
                    e.handle && !Y(s, e.handle, o, !1) || this._prepareDragStart(t, a, l)
                }
            }
        }, _prepareDragStart: function (e, t, n) {
            var o, r = this, i = r.el, a = r.options, l = i.ownerDocument;
            n && !L && n.parentNode === i && (o = E(n), j = i, q = (L = n).parentNode, z = L.nextSibling, X = n, te = a.group, oe = {
                target: Ee.dragged = L,
                clientX: (t || e).clientX,
                clientY: (t || e).clientY
            }, le = oe.clientX - o.left, se = oe.clientY - o.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, L.style["will-change"] = "all", o = function () {
                W("delayEnded", r, {evt: e}), Ee.eventCanceled ? r._onDrop() : (r._disableDelayedDragEvents(), !s && r.nativeDraggable && (L.draggable = !0), r._triggerDragStart(e, t), A({
                    sortable: r,
                    name: "choose",
                    originalEvent: e
                }), O(L, a.chosenClass, !0))
            }, a.ignore.split(",").forEach(function (e) {
                _(L, e.trim(), Be)
            }), u(l, "dragover", Oe), u(l, "mousemove", Oe), u(l, "touchmove", Oe), u(l, "mouseup", r._onDrop), u(l, "touchend", r._onDrop), u(l, "touchcancel", r._onDrop), s && this.nativeDraggable && (this.options.touchStartThreshold = 4, L.draggable = !0), W("delayStart", this, {evt: e}), !a.delay || a.delayOnTouchOnly && !t || this.nativeDraggable && (w || v) ? o() : Ee.eventCanceled ? this._onDrop() : (u(l, "mouseup", r._disableDelayedDrag), u(l, "touchend", r._disableDelayedDrag), u(l, "touchcancel", r._disableDelayedDrag), u(l, "mousemove", r._delayedDragTouchMoveHandler), u(l, "touchmove", r._delayedDragTouchMoveHandler), a.supportPointer && u(l, "pointermove", r._delayedDragTouchMoveHandler), r._dragStartTimer = setTimeout(o, a.delay)))
        }, _delayedDragTouchMoveHandler: function (e) {
            e = e.touches ? e.touches[0] : e;
            Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
        }, _disableDelayedDrag: function () {
            L && Be(L), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
        }, _disableDelayedDragEvents: function () {
            var e = this.el.ownerDocument;
            d(e, "mouseup", this._disableDelayedDrag), d(e, "touchend", this._disableDelayedDrag), d(e, "touchcancel", this._disableDelayedDrag), d(e, "mousemove", this._delayedDragTouchMoveHandler), d(e, "touchmove", this._delayedDragTouchMoveHandler), d(e, "pointermove", this._delayedDragTouchMoveHandler)
        }, _triggerDragStart: function (e, t) {
            t = t || "touch" == e.pointerType && e, !this.nativeDraggable || t ? this.options.supportPointer ? u(document, "pointermove", this._onTouchMove) : u(document, t ? "touchmove" : "mousemove", this._onTouchMove) : (u(L, "dragend", this), u(j, "dragstart", this._onDragStart));
            try {
                document.selection ? Ue(function () {
                    document.selection.empty()
                }) : window.getSelection().removeAllRanges()
            } catch (e) {
            }
        }, _dragStarted: function (e, t) {
            var n;
            me = !1, j && L ? (W("dragStarted", this, {evt: t}), this.nativeDraggable && u(document, "dragover", Te), n = this.options, e || O(L, n.dragClass, !1), O(L, n.ghostClass, !0), Ee.active = this, e && this._appendGhost(), A({
                sortable: this,
                name: "start",
                originalEvent: t
            })) : this._nulling()
        }, _emulateDragOver: function () {
            if (re) {
                this._lastX = re.clientX, this._lastY = re.clientY, Ve();
                for (var e = document.elementFromPoint(re.clientX, re.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(re.clientX, re.clientY)) !== t;) t = e;
                if (L.parentNode[I]._isOutsideThisEl(e), t) do {
                    if (t[I]) if (t[I]._onDragOver({
                        clientX: re.clientX,
                        clientY: re.clientY,
                        target: e,
                        rootEl: t
                    }) && !this.options.dragoverBubble) break
                } while (t = (e = t).parentNode);
                Ye()
            }
        }, _onTouchMove: function (e) {
            if (oe) {
                var t = this.options, n = t.fallbackTolerance, o = t.fallbackOffset, r = e.touches ? e.touches[0] : e,
                    i = G && p(G, !0), a = G && i && i.a, l = G && i && i.d, t = xe && he && y(he),
                    a = (r.clientX - oe.clientX + o.x) / (a || 1) + (t ? t[0] - ve[0] : 0) / (a || 1),
                    l = (r.clientY - oe.clientY + o.y) / (l || 1) + (t ? t[1] - ve[1] : 0) / (l || 1);
                if (!Ee.active && !me) {
                    if (n && Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) < n) return;
                    this._onDragStart(e, !0)
                }
                G && (i ? (i.e += a - (ie || 0), i.f += l - (ae || 0)) : i = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: a,
                    f: l
                }, i = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")"), T(G, "webkitTransform", i), T(G, "mozTransform", i), T(G, "msTransform", i), T(G, "transform", i), ie = a, ae = l, re = r), e.cancelable && e.preventDefault()
            }
        }, _appendGhost: function () {
            if (!G) {
                var e = this.options.fallbackOnBody ? document.body : j, t = E(L, !0, xe, !0, e), n = this.options;
                if (xe) {
                    for (he = e; "static" === T(he, "position") && "none" === T(he, "transform") && he !== document;) he = he.parentNode;
                    he !== document.body && he !== document.documentElement ? (he === document && (he = M()), t.top += he.scrollTop, t.left += he.scrollLeft) : he = M(), ve = y(he)
                }
                O(G = L.cloneNode(!0), n.ghostClass, !1), O(G, n.fallbackClass, !0), O(G, n.dragClass, !0), T(G, "transition", ""), T(G, "transform", ""), T(G, "box-sizing", "border-box"), T(G, "margin", 0), T(G, "top", t.top), T(G, "left", t.left), T(G, "width", t.width), T(G, "height", t.height), T(G, "opacity", "0.8"), T(G, "position", xe ? "absolute" : "fixed"), T(G, "zIndex", "100000"), T(G, "pointerEvents", "none"), Ee.ghost = G, e.appendChild(G), T(G, "transform-origin", le / parseInt(G.style.width) * 100 + "% " + se / parseInt(G.style.height) * 100 + "%")
            }
        }, _onDragStart: function (e, t) {
            var n = this, o = e.dataTransfer, r = n.options;
            W("dragStart", this, {evt: e}), Ee.eventCanceled ? this._onDrop() : (W("setupClone", this), Ee.eventCanceled || (($ = x(L)).draggable = !1, $.style["will-change"] = "", this._hideClone(), O($, this.options.chosenClass, !1), Ee.clone = $), n.cloneId = Ue(function () {
                W("clone", n), Ee.eventCanceled || (n.options.removeCloneOnHide || j.insertBefore($, L), n._hideClone(), A({
                    sortable: n,
                    name: "clone"
                }))
            }), t || O(L, r.dragClass, !0), t ? (pe = !0, n._loopId = setInterval(n._emulateDragOver, 50)) : (d(document, "mouseup", n._onDrop), d(document, "touchend", n._onDrop), d(document, "touchcancel", n._onDrop), o && (o.effectAllowed = "move", r.setData && r.setData.call(n, o, L)), u(document, "drop", n), T(L, "transform", "translateZ(0)")), me = !0, n._dragStartId = Ue(n._dragStarted.bind(n, t, e)), u(document, "selectstart", n), ue = !0, c && T(document.body, "user-select", "none"))
        }, _onDragOver: function (n) {
            var o, r, i, e, a = this.el, l = n.target, t = this.options, s = t.group, u = Ee.active, c = te === s,
                d = t.sort, f = ne || u, h = this, m = !1;
            if (!we) {
                if (void 0 !== n.preventDefault && n.cancelable && n.preventDefault(), l = Y(l, t.draggable, a, !0), S("dragOver"), Ee.eventCanceled) return m;
                if (L.contains(n.target) || l.animated && l.animatingX && l.animatingY || h._ignoreWhileAnimating === l) return N(!1);
                if (pe = !1, u && !t.disabled && (c ? d || (r = !j.contains(L)) : ne === this || (this.lastPutMode = te.checkPull(this, u, L, n)) && s.checkPut(this, u, L, n))) {
                    if (i = "vertical" === this._getDirection(n, l), o = E(L), S("dragOverValid"), Ee.eventCanceled) return m;
                    if (r) return q = j, D(), this._hideClone(), S("revert"), Ee.eventCanceled || (z ? j.insertBefore(L, z) : j.appendChild(L)), N(!0);
                    var p = B(a, t.draggable);
                    if (!p || function (e, t, n) {
                        n = E(B(n.el, n.options.draggable));
                        return t ? e.clientX > n.right + 10 || e.clientX <= n.right && e.clientY > n.bottom && e.clientX >= n.left : e.clientX > n.right && e.clientY > n.top || e.clientX <= n.right && e.clientY > n.bottom + 10
                    }(n, i, this) && !p.animated) {
                        if (p === L) return N(!1);
                        if ((l = p && a === n.target ? p : l) && (v = E(l)), !1 !== Pe(j, a, L, o, l, v, n, !!l)) return D(), a.appendChild(L), q = a, M(), N(!0)
                    } else if (l.parentNode === a) {
                        var _, g, y, v = E(l), w = L.parentNode !== a,
                            b = (b = L.animated && L.toRect || o, C = l.animated && l.toRect || v, k = i ? b.left : b.top, e = i ? b.right : b.bottom, s = i ? b.width : b.height, p = i ? C.left : C.top, b = i ? C.right : C.bottom, C = i ? C.width : C.height, !(k === p || e === b || k + s / 2 === p + C / 2)),
                            k = i ? "top" : "left", s = P(l, "top", "top") || P(L, "top", "top"),
                            p = s ? s.scrollTop : void 0;
                        if (ce !== l && (g = v[k], ge = !1, ye = !b && t.invertSwap || w), 0 !== (_ = function (e, t, n, o, r, i, a, l) {
                            var s = o ? e.clientY : e.clientX, u = o ? n.height : n.width, e = o ? n.top : n.left,
                                o = o ? n.bottom : n.right, n = !1;
                            if (!a) if (l && fe < u * r) {
                                if (ge = !ge && (1 === de ? e + u * i / 2 < s : s < o - u * i / 2) ? !0 : ge) n = !0; else if (1 === de ? s < e + fe : o - fe < s) return -de
                            } else if (e + u * (1 - r) / 2 < s && s < o - u * (1 - r) / 2) return function (e) {
                                return R(L) < R(e) ? 1 : -1
                            }(t);
                            if ((n = n || a) && (s < e + u * i / 2 || o - u * i / 2 < s)) return e + u / 2 < s ? 1 : -1;
                            return 0
                        }(n, l, v, i, b ? 1 : t.swapThreshold, null == t.invertedSwapThreshold ? t.swapThreshold : t.invertedSwapThreshold, ye, ce === l))) for (var x = R(L); (y = q.children[x -= _]) && ("none" === T(y, "display") || y === G);) ;
                        if (0 === _ || y === l) return N(!1);
                        de = _;
                        var C = (ce = l).nextElementSibling, w = !1, b = Pe(j, a, L, o, l, v, n, w = 1 === _);
                        if (!1 !== b) return 1 !== b && -1 !== b || (w = 1 === b), we = !0, setTimeout(Re, 30), D(), w && !C ? a.appendChild(L) : l.parentNode.insertBefore(L, w ? C : l), s && F(s, 0, p - s.scrollTop), q = L.parentNode, void 0 === g || ye || (fe = Math.abs(g - E(l)[k])), M(), N(!0)
                    }
                    if (a.contains(L)) return N(!1)
                }
                return !1
            }

            function S(e, t) {
                W(e, h, V({
                    evt: n,
                    isOwner: c,
                    axis: i ? "vertical" : "horizontal",
                    revert: r,
                    dragRect: o,
                    targetRect: v,
                    canSort: d,
                    fromSortable: f,
                    target: l,
                    completed: N,
                    onMove: function (e, t) {
                        return Pe(j, a, L, o, e, E(e), n, t)
                    },
                    changed: M
                }, t))
            }

            function D() {
                S("dragOverAnimationCapture"), h.captureAnimationState(), h !== f && f.captureAnimationState()
            }

            function N(e) {
                return S("dragOverCompleted", {insertion: e}), e && (c ? u._hideClone() : u._showClone(h), h !== f && (O(L, (ne || u).options.ghostClass, !1), O(L, t.ghostClass, !0)), ne !== h && h !== Ee.active ? ne = h : h === Ee.active && ne && (ne = null), f === h && (h._ignoreWhileAnimating = l), h.animateAll(function () {
                    S("dragOverAnimationComplete"), h._ignoreWhileAnimating = null
                }), h !== f && (f.animateAll(), f._ignoreWhileAnimating = null)), (l === L && !L.animated || l === a && !l.animated) && (ce = null), t.dragoverBubble || n.rootEl || l === document || (L.parentNode[I]._isOutsideThisEl(n.target), e || Oe(n)), !t.dragoverBubble && n.stopPropagation && n.stopPropagation(), m = !0
            }

            function M() {
                J = R(L), ee = R(L, t.draggable), A({
                    sortable: h,
                    name: "change",
                    toEl: a,
                    newIndex: J,
                    newDraggableIndex: ee,
                    originalEvent: n
                })
            }
        }, _ignoreWhileAnimating: null, _offMoveEvents: function () {
            d(document, "mousemove", this._onTouchMove), d(document, "touchmove", this._onTouchMove), d(document, "pointermove", this._onTouchMove), d(document, "dragover", Oe), d(document, "mousemove", Oe), d(document, "touchmove", Oe)
        }, _offUpEvents: function () {
            var e = this.el.ownerDocument;
            d(e, "mouseup", this._onDrop), d(e, "touchend", this._onDrop), d(e, "pointerup", this._onDrop), d(e, "touchcancel", this._onDrop), d(document, "selectstart", this)
        }, _onDrop: function (e) {
            var t = this.el, n = this.options;
            J = R(L), ee = R(L, n.draggable), W("drop", this, {evt: e}), q = L && L.parentNode, J = R(L), ee = R(L, n.draggable), Ee.eventCanceled || (ge = ye = me = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Fe(this.cloneId), Fe(this._dragStartId), this.nativeDraggable && (d(document, "drop", this), d(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), c && T(document.body, "user-select", ""), T(L, "transform", ""), e && (ue && (e.cancelable && e.preventDefault(), n.dropBubble || e.stopPropagation()), G && G.parentNode && G.parentNode.removeChild(G), (j === q || ne && "clone" !== ne.lastPutMode) && $ && $.parentNode && $.parentNode.removeChild($), L && (this.nativeDraggable && d(L, "dragend", this), Be(L), L.style["will-change"] = "", ue && !me && O(L, (ne || this).options.ghostClass, !1), O(L, this.options.chosenClass, !1), A({
                sortable: this,
                name: "unchoose",
                toEl: q,
                newIndex: null,
                newDraggableIndex: null,
                originalEvent: e
            }), j !== q ? (0 <= J && (A({
                rootEl: q,
                name: "add",
                toEl: q,
                fromEl: j,
                originalEvent: e
            }), A({sortable: this, name: "remove", toEl: q, originalEvent: e}), A({
                rootEl: q,
                name: "sort",
                toEl: q,
                fromEl: j,
                originalEvent: e
            }), A({
                sortable: this,
                name: "sort",
                toEl: q,
                originalEvent: e
            })), ne && ne.save()) : J !== Q && 0 <= J && (A({
                sortable: this,
                name: "update",
                toEl: q,
                originalEvent: e
            }), A({
                sortable: this,
                name: "sort",
                toEl: q,
                originalEvent: e
            })), Ee.active && (null != J && -1 !== J || (J = Q, ee = K), A({
                sortable: this,
                name: "end",
                toEl: q,
                originalEvent: e
            }), this.save())))), this._nulling()
        }, _nulling: function () {
            W("nulling", this), j = L = q = G = z = $ = X = Z = oe = re = ue = J = ee = Q = K = ce = de = ne = te = Ee.dragged = Ee.ghost = Ee.clone = Ee.active = null, be.forEach(function (e) {
                e.checked = !0
            }), be.length = ie = ae = 0
        }, handleEvent: function (e) {
            switch (e.type) {
                case"drop":
                case"dragend":
                    this._onDrop(e);
                    break;
                case"dragenter":
                case"dragover":
                    L && (this._onDragOver(e), function (e) {
                        e.dataTransfer && (e.dataTransfer.dropEffect = "move");
                        e.cancelable && e.preventDefault()
                    }(e));
                    break;
                case"selectstart":
                    e.preventDefault()
            }
        }, toArray: function () {
            for (var e, t = [], n = this.el.children, o = 0, r = n.length, i = this.options; o < r; o++) Y(e = n[o], i.draggable, this.el, !1) && t.push(e.getAttribute(i.dataIdAttr) || function (e) {
                var t = e.tagName + e.className + e.src + e.href + e.textContent, n = t.length, o = 0;
                for (; n--;) o += t.charCodeAt(n);
                return o.toString(36)
            }(e));
            return t
        }, sort: function (e, t) {
            var n = {}, o = this.el;
            this.toArray().forEach(function (e, t) {
                t = o.children[t];
                Y(t, this.options.draggable, o, !1) && (n[e] = t)
            }, this), t && this.captureAnimationState(), e.forEach(function (e) {
                n[e] && (o.removeChild(n[e]), o.appendChild(n[e]))
            }), t && this.animateAll()
        }, save: function () {
            var e = this.options.store;
            e && e.set && e.set(this)
        }, closest: function (e, t) {
            return Y(e, t || this.options.draggable, this.el, !1)
        }, option: function (e, t) {
            var n = this.options;
            if (void 0 === t) return n[e];
            var o = H.modifyOption(this, e, t);
            n[e] = void 0 !== o ? o : t, "group" === e && Me(n)
        }, destroy: function () {
            W("destroy", this);
            var e = this.el;
            e[I] = null, d(e, "mousedown", this._onTapStart), d(e, "touchstart", this._onTapStart), d(e, "pointerdown", this._onTapStart), this.nativeDraggable && (d(e, "dragover", this), d(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function (e) {
                e.removeAttribute("draggable")
            }), this._onDrop(), this._disableDelayedDragEvents(), _e.splice(_e.indexOf(this.el), 1), this.el = e = null
        }, _hideClone: function () {
            Z || (W("hideClone", this), Ee.eventCanceled || (T($, "display", "none"), this.options.removeCloneOnHide && $.parentNode && $.parentNode.removeChild($), Z = !0))
        }, _showClone: function (e) {
            "clone" === e.lastPutMode ? Z && (W("showClone", this), Ee.eventCanceled || (L.parentNode != j || this.options.group.revertClone ? z ? j.insertBefore($, z) : j.appendChild($) : j.insertBefore($, L), this.options.group.revertClone && this.animate(L, $), T($, "display", ""), Z = !1)) : this._hideClone()
        }
    }, ke && u(document, "touchmove", function (e) {
        (Ee.active || me) && e.cancelable && e.preventDefault()
    }), Ee.utils = {
        on: u,
        off: d,
        css: T,
        find: _,
        is: function (e, t) {
            return !!Y(e, t, e, !1)
        },
        extend: function (e, t) {
            if (e && t) for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
            return e
        },
        throttle: k,
        closest: Y,
        toggleClass: O,
        clone: x,
        index: R,
        nextTick: Ue,
        cancelNextTick: Fe,
        detectDirection: Ne,
        getChild: g
    }, Ee.get = function (e) {
        return e[I]
    }, Ee.mount = function () {
        for (var e = arguments, t = arguments.length, n = new Array(t), o = 0; o < t; o++) n[o] = e[o];
        (n = n[0].constructor === Array ? n[0] : n).forEach(function (e) {
            if (!e.prototype || !e.prototype.constructor) throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(e));
            e.utils && (Ee.utils = V({}, Ee.utils, e.utils)), H.mount(e)
        })
    }, Ee.create = function (e, t) {
        return new Ee(e, t)
    };
    var Ie, He, We, Ae, Le, qe, Ge = [], je = !(Ee.version = "1.13.0");

    function ze() {
        Ge.forEach(function (e) {
            clearInterval(e.pid)
        }), Ge = []
    }

    function Xe() {
        clearInterval(qe)
    }

    var $e = k(function (n, e, t, o) {
        if (e.scroll) {
            var r, i = (n.touches ? n.touches[0] : n).clientX, a = (n.touches ? n.touches[0] : n).clientY,
                l = e.scrollSensitivity, s = e.scrollSpeed, u = M(), c = !1;
            He !== t && (He = t, ze(), Ie = e.scroll, r = e.scrollFn, !0 === Ie && (Ie = U(t, !0)));
            var d = 0, f = Ie;
            do {
                var h = f, m = E(h), p = m.top, _ = m.bottom, g = m.left, y = m.right, v = m.width, w = m.height,
                    b = void 0, k = void 0, x = h.scrollWidth, C = h.scrollHeight, S = T(h), D = h.scrollLeft,
                    m = h.scrollTop,
                    k = h === u ? (b = v < x && ("auto" === S.overflowX || "scroll" === S.overflowX || "visible" === S.overflowX), w < C && ("auto" === S.overflowY || "scroll" === S.overflowY || "visible" === S.overflowY)) : (b = v < x && ("auto" === S.overflowX || "scroll" === S.overflowX), w < C && ("auto" === S.overflowY || "scroll" === S.overflowY)),
                    D = b && (Math.abs(y - i) <= l && D + v < x) - (Math.abs(g - i) <= l && !!D),
                    m = k && (Math.abs(_ - a) <= l && m + w < C) - (Math.abs(p - a) <= l && !!m);
                if (!Ge[d]) for (var N = 0; N <= d; N++) Ge[N] || (Ge[N] = {});
                Ge[d].vx == D && Ge[d].vy == m && Ge[d].el === h || (Ge[d].el = h, Ge[d].vx = D, Ge[d].vy = m, clearInterval(Ge[d].pid), 0 == D && 0 == m || (c = !0, Ge[d].pid = setInterval(function () {
                    o && 0 === this.layer && Ee.active._onTouchMove(Le);
                    var e = Ge[this.layer].vy ? Ge[this.layer].vy * s : 0,
                        t = Ge[this.layer].vx ? Ge[this.layer].vx * s : 0;
                    "function" == typeof r && "continue" !== r.call(Ee.dragged.parentNode[I], t, e, n, Le, Ge[this.layer].el) || F(Ge[this.layer].el, t, e)
                }.bind({layer: d}), 24))), d++
            } while (e.bubbleScroll && f !== u && (f = U(f, !1)));
            je = c
        }
    }, 30), n = function (e) {
        var t = e.originalEvent, n = e.putSortable, o = e.dragEl, r = e.activeSortable, i = e.dispatchSortableEvent,
            a = e.hideGhostForTarget, e = e.unhideGhostForTarget;
        t && (r = n || r, a(), t = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t = document.elementFromPoint(t.clientX, t.clientY), e(), r && !r.el.contains(t) && (i("spill"), this.onSpill({
            dragEl: o,
            putSortable: n
        })))
    };

    function Ze() {
    }

    function Qe() {
    }

    Ze.prototype = {
        startIndex: null, dragStart: function (e) {
            e = e.oldDraggableIndex;
            this.startIndex = e
        }, onSpill: function (e) {
            var t = e.dragEl, n = e.putSortable;
            this.sortable.captureAnimationState(), n && n.captureAnimationState();
            e = g(this.sortable.el, this.startIndex, this.options);
            e ? this.sortable.el.insertBefore(t, e) : this.sortable.el.appendChild(t), this.sortable.animateAll(), n && n.animateAll()
        }, drop: n
    }, a(Ze, {pluginName: "revertOnSpill"}), Qe.prototype = {
        onSpill: function (e) {
            var t = e.dragEl, e = e.putSortable || this.sortable;
            e.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), e.animateAll()
        }, drop: n
    }, a(Qe, {pluginName: "removeOnSpill"}), Ee.mount(new function () {
        function e() {
            for (var e in this.defaults = {
                scroll: !0,
                scrollSensitivity: 30,
                scrollSpeed: 10,
                bubbleScroll: !0
            }, this) "_" === e.charAt(0) && "function" == typeof this[e] && (this[e] = this[e].bind(this))
        }

        return e.prototype = {
            dragStarted: function (e) {
                e = e.originalEvent;
                this.sortable.nativeDraggable ? u(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? u(document, "pointermove", this._handleFallbackAutoScroll) : e.touches ? u(document, "touchmove", this._handleFallbackAutoScroll) : u(document, "mousemove", this._handleFallbackAutoScroll)
            }, dragOverCompleted: function (e) {
                e = e.originalEvent;
                this.options.dragOverBubble || e.rootEl || this._handleAutoScroll(e)
            }, drop: function () {
                this.sortable.nativeDraggable ? d(document, "dragover", this._handleAutoScroll) : (d(document, "pointermove", this._handleFallbackAutoScroll), d(document, "touchmove", this._handleFallbackAutoScroll), d(document, "mousemove", this._handleFallbackAutoScroll)), Xe(), ze(), clearTimeout(h), h = void 0
            }, nulling: function () {
                Le = He = Ie = je = qe = We = Ae = null, Ge.length = 0
            }, _handleFallbackAutoScroll: function (e) {
                this._handleAutoScroll(e, !0)
            }, _handleAutoScroll: function (t, n) {
                var o, r = this, i = (t.touches ? t.touches[0] : t).clientX, a = (t.touches ? t.touches[0] : t).clientY,
                    e = document.elementFromPoint(i, a);
                Le = t, n || w || v || c ? ($e(t, this.options, e, n), o = U(e, !0), !je || qe && i === We && a === Ae || (qe && Xe(), qe = setInterval(function () {
                    var e = U(document.elementFromPoint(i, a), !0);
                    e !== o && (o = e, ze()), $e(t, r.options, e, n)
                }, 10), We = i, Ae = a)) : this.options.bubbleScroll && U(e, !0) !== M() ? $e(t, this.options, U(e, !1), !1) : ze()
            }
        }, a(e, {pluginName: "scroll", initializeByDefault: !0})
    }), Ee.mount(Qe, Ze), t = void 0, n = function () {
        var e;

        function f() {
            return e.apply(null, arguments)
        }

        function a(e) {
            return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
        }

        function l(e) {
            return null != e && "[object Object]" === Object.prototype.toString.call(e)
        }

        function h(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }

        function s(e) {
            if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
            for (var t in e) if (h(e, t)) return;
            return 1
        }

        function u(e) {
            return void 0 === e
        }

        function c(e) {
            return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
        }

        function o(e) {
            return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
        }

        function r(e, t) {
            for (var n = [], o = e.length, r = 0; r < o; ++r) n.push(t(e[r], r));
            return n
        }

        function d(e, t) {
            for (var n in t) h(t, n) && (e[n] = t[n]);
            return h(t, "toString") && (e.toString = t.toString), h(t, "valueOf") && (e.valueOf = t.valueOf), e
        }

        function m(e, t, n, o) {
            return Vt(e, t, n, o, !0).utc()
        }

        function p(e) {
            return null == e._pf && (e._pf = {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidEra: null,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                era: null,
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }), e._pf
        }

        function _(e) {
            if (null == e._isValid) {
                var t = p(e), n = g.call(t.parsedDateParts, function (e) {
                        return null != e
                    }),
                    n = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                if (e._strict && (n = n && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return n;
                e._isValid = n
            }
            return e._isValid
        }

        function i(e) {
            var t = m(NaN);
            return null != e ? d(p(t), e) : p(t).userInvalidated = !0, t
        }

        var g = Array.prototype.some || function (e) {
            for (var t = Object(this), n = t.length >>> 0, o = 0; o < n; o++) if (o in t && e.call(this, t[o], o, t)) return !0;
            return !1
        }, y = f.momentProperties = [], t = !1;

        function v(e, t) {
            var n, o, r, i = y.length;
            if (u(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), u(t._i) || (e._i = t._i), u(t._f) || (e._f = t._f), u(t._l) || (e._l = t._l), u(t._strict) || (e._strict = t._strict), u(t._tzm) || (e._tzm = t._tzm), u(t._isUTC) || (e._isUTC = t._isUTC), u(t._offset) || (e._offset = t._offset), u(t._pf) || (e._pf = p(t)), u(t._locale) || (e._locale = t._locale), 0 < i) for (n = 0; n < i; n++) u(r = t[o = y[n]]) || (e[o] = r);
            return e
        }

        function w(e) {
            v(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, f.updateOffset(this), t = !1)
        }

        function b(e) {
            return e instanceof w || null != e && null != e._isAMomentObject
        }

        function k(e) {
            !1 === f.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }

        function n(a, l) {
            var s = !0;
            return d(function () {
                var e = arguments;
                if (null != f.deprecationHandler && f.deprecationHandler(null, a), s) {
                    for (var t, n, o = [], r = arguments.length, i = 0; i < r; i++) {
                        if (t = "", "object" == typeof e[i]) {
                            for (n in t += "\n[" + i + "] ", arguments[0]) h(e[0], n) && (t += n + ": " + e[0][n] + ", ");
                            t = t.slice(0, -2)
                        } else t = e[i];
                        o.push(t)
                    }
                    k(a + "\nArguments: " + Array.prototype.slice.call(o).join("") + "\n" + (new Error).stack), s = !1
                }
                return l.apply(this, arguments)
            }, l)
        }

        var x = {};

        function C(e, t) {
            null != f.deprecationHandler && f.deprecationHandler(e, t), x[e] || (k(t), x[e] = !0)
        }

        function S(e) {
            return "undefined" != typeof Function && e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
        }

        function D(e, t) {
            var n, o = d({}, e);
            for (n in t) h(t, n) && (l(e[n]) && l(t[n]) ? (o[n] = {}, d(o[n], e[n]), d(o[n], t[n])) : null != t[n] ? o[n] = t[n] : delete o[n]);
            for (n in e) h(e, n) && !h(t, n) && l(e[n]) && (o[n] = d({}, o[n]));
            return o
        }

        function N(e) {
            null != e && this.set(e)
        }

        f.suppressDeprecationWarnings = !1, f.deprecationHandler = null;
        var M = Object.keys || function (e) {
            var t, n = [];
            for (t in e) h(e, t) && n.push(t);
            return n
        };

        function V(e, t, n) {
            var o = "" + Math.abs(e);
            return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, t - o.length)).toString().substr(1) + o
        }

        var Y = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            O = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, T = {}, E = {};

        function P(e, t, n, o) {
            var r = "string" == typeof o ? function () {
                return this[o]()
            } : o;
            e && (E[e] = r), t && (E[t[0]] = function () {
                return V(r.apply(this, arguments), t[1], t[2])
            }), n && (E[n] = function () {
                return this.localeData().ordinal(r.apply(this, arguments), e)
            })
        }

        function B(e, t) {
            return e.isValid() ? (t = R(t, e.localeData()), T[t] = T[t] || function (o) {
                for (var e, r = o.match(Y), t = 0, i = r.length; t < i; t++) E[r[t]] ? r[t] = E[r[t]] : r[t] = (e = r[t]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
                return function (e) {
                    for (var t = "", n = 0; n < i; n++) t += S(r[n]) ? r[n].call(e, o) : r[n];
                    return t
                }
            }(t), T[t](e)) : e.localeData().invalidDate()
        }

        function R(e, t) {
            var n = 5;

            function o(e) {
                return t.longDateFormat(e) || e
            }

            for (O.lastIndex = 0; 0 <= n && O.test(e);) e = e.replace(O, o), O.lastIndex = 0, --n;
            return e
        }

        var U = {};

        function F(e, t) {
            var n = e.toLowerCase();
            U[n] = U[n + "s"] = U[t] = e
        }

        function I(e) {
            return "string" == typeof e ? U[e] || U[e.toLowerCase()] : void 0
        }

        function H(e) {
            var t, n, o = {};
            for (n in e) h(e, n) && (t = I(n)) && (o[t] = e[n]);
            return o
        }

        var W = {};

        function A(e, t) {
            W[e] = t
        }

        function L(e) {
            return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
        }

        function q(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
        }

        function G(e) {
            var t = +e, e = 0;
            return e = 0 != t && isFinite(t) ? q(t) : e
        }

        function j(t, n) {
            return function (e) {
                return null != e ? (X(this, t, e), f.updateOffset(this, n), this) : z(this, t)
            }
        }

        function z(e, t) {
            return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
        }

        function X(e, t, n) {
            e.isValid() && !isNaN(n) && ("FullYear" === t && L(e.year()) && 1 === e.month() && 29 === e.date() ? (n = G(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Me(n, e.month()))) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n))
        }

        var $ = /\d/, Z = /\d\d/, Q = /\d{3}/, J = /\d{4}/, K = /[+-]?\d{6}/, ee = /\d\d?/, te = /\d\d\d\d?/,
            ne = /\d\d\d\d\d\d?/, oe = /\d{1,3}/, re = /\d{1,4}/, ie = /[+-]?\d{1,6}/, ae = /\d+/, le = /[+-]?\d+/,
            se = /Z|[+-]\d\d:?\d\d/gi, ue = /Z|[+-]\d\d(?::?\d\d)?/gi,
            ce = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

        function de(e, n, o) {
            me[e] = S(n) ? n : function (e, t) {
                return e && o ? o : n
            }
        }

        function fe(e, t) {
            return h(me, e) ? me[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, o, r) {
                return t || n || o || r
            })))
        }

        function he(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }

        var me = {}, pe = {};

        function _e(e, n) {
            var t, o, r = n;
            for ("string" == typeof e && (e = [e]), c(n) && (r = function (e, t) {
                t[n] = G(e)
            }), o = e.length, t = 0; t < o; t++) pe[e[t]] = r
        }

        function ge(e, r) {
            _e(e, function (e, t, n, o) {
                n._w = n._w || {}, r(e, n._w, n, o)
            })
        }

        var ye, ve = 0, we = 1, be = 2, ke = 3, xe = 4, Ce = 5, Se = 6, De = 7, Ne = 8;

        function Me(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n, n = (t % (n = 12) + n) % n;
            return e += (t - n) / 12, 1 == n ? L(e) ? 29 : 28 : 31 - n % 7 % 2
        }

        ye = Array.prototype.indexOf || function (e) {
            for (var t = 0; t < this.length; ++t) if (this[t] === e) return t;
            return -1
        }, P("M", ["MM", 2], "Mo", function () {
            return this.month() + 1
        }), P("MMM", 0, 0, function (e) {
            return this.localeData().monthsShort(this, e)
        }), P("MMMM", 0, 0, function (e) {
            return this.localeData().months(this, e)
        }), F("month", "M"), A("month", 8), de("M", ee), de("MM", ee, Z), de("MMM", function (e, t) {
            return t.monthsShortRegex(e)
        }), de("MMMM", function (e, t) {
            return t.monthsRegex(e)
        }), _e(["M", "MM"], function (e, t) {
            t[we] = G(e) - 1
        }), _e(["MMM", "MMMM"], function (e, t, n, o) {
            o = n._locale.monthsParse(e, o, n._strict);
            null != o ? t[we] = o : p(n).invalidMonth = e
        });
        var Ve = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
            Ye = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Te = ce, Ee = ce;

        function Pe(e, t) {
            var n;
            if (!e.isValid()) return e;
            if ("string" == typeof t) if (/^\d+$/.test(t)) t = G(t); else if (!c(t = e.localeData().monthsParse(t))) return e;
            return n = Math.min(e.date(), Me(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
        }

        function Be(e) {
            return null != e ? (Pe(this, e), f.updateOffset(this, !0), this) : z(this, "Month")
        }

        function Re() {
            function e(e, t) {
                return t.length - e.length
            }

            for (var t, n = [], o = [], r = [], i = 0; i < 12; i++) t = m([2e3, i]), n.push(this.monthsShort(t, "")), o.push(this.months(t, "")), r.push(this.months(t, "")), r.push(this.monthsShort(t, ""));
            for (n.sort(e), o.sort(e), r.sort(e), i = 0; i < 12; i++) n[i] = he(n[i]), o[i] = he(o[i]);
            for (i = 0; i < 24; i++) r[i] = he(r[i]);
            this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function Ue(e) {
            return L(e) ? 366 : 365
        }

        P("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? V(e, 4) : "+" + e
        }), P(0, ["YY", 2], 0, function () {
            return this.year() % 100
        }), P(0, ["YYYY", 4], 0, "year"), P(0, ["YYYYY", 5], 0, "year"), P(0, ["YYYYYY", 6, !0], 0, "year"), F("year", "y"), A("year", 1), de("Y", le), de("YY", ee, Z), de("YYYY", re, J), de("YYYYY", ie, K), de("YYYYYY", ie, K), _e(["YYYYY", "YYYYYY"], ve), _e("YYYY", function (e, t) {
            t[ve] = 2 === e.length ? f.parseTwoDigitYear(e) : G(e)
        }), _e("YY", function (e, t) {
            t[ve] = f.parseTwoDigitYear(e)
        }), _e("Y", function (e, t) {
            t[ve] = parseInt(e, 10)
        }), f.parseTwoDigitYear = function (e) {
            return G(e) + (68 < G(e) ? 1900 : 2e3)
        };
        var Fe = j("FullYear", !0);

        function Ie(e, t, n, o, r, i, a) {
            var l;
            return e < 100 && 0 <= e ? (l = new Date(e + 400, t, n, o, r, i, a), isFinite(l.getFullYear()) && l.setFullYear(e)) : l = new Date(e, t, n, o, r, i, a), l
        }

        function He(e) {
            var t;
            return e < 100 && 0 <= e ? ((t = Array.prototype.slice.call(arguments))[0] = e + 400, t = new Date(Date.UTC.apply(null, t)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t
        }

        function We(e, t, n) {
            n = 7 + t - n;
            return n - (7 + He(e, 0, n).getUTCDay() - t) % 7 - 1
        }

        function Ae(e, t, n, o, r) {
            var i, r = 1 + 7 * (t - 1) + (7 + n - o) % 7 + We(e, o, r),
                r = r <= 0 ? Ue(i = e - 1) + r : r > Ue(e) ? (i = e + 1, r - Ue(e)) : (i = e, r);
            return {year: i, dayOfYear: r}
        }

        function Le(e, t, n) {
            var o, r, i = We(e.year(), t, n), i = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
            return i < 1 ? o = i + qe(r = e.year() - 1, t, n) : i > qe(e.year(), t, n) ? (o = i - qe(e.year(), t, n), r = e.year() + 1) : (r = e.year(), o = i), {
                week: o,
                year: r
            }
        }

        function qe(e, t, n) {
            var o = We(e, t, n), n = We(e + 1, t, n);
            return (Ue(e) - o + n) / 7
        }

        P("w", ["ww", 2], "wo", "week"), P("W", ["WW", 2], "Wo", "isoWeek"), F("week", "w"), F("isoWeek", "W"), A("week", 5), A("isoWeek", 5), de("w", ee), de("ww", ee, Z), de("W", ee), de("WW", ee, Z), ge(["w", "ww", "W", "WW"], function (e, t, n, o) {
            t[o.substr(0, 1)] = G(e)
        });

        function Ge(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t))
        }

        P("d", 0, "do", "day"), P("dd", 0, 0, function (e) {
            return this.localeData().weekdaysMin(this, e)
        }), P("ddd", 0, 0, function (e) {
            return this.localeData().weekdaysShort(this, e)
        }), P("dddd", 0, 0, function (e) {
            return this.localeData().weekdays(this, e)
        }), P("e", 0, 0, "weekday"), P("E", 0, 0, "isoWeekday"), F("day", "d"), F("weekday", "e"), F("isoWeekday", "E"), A("day", 11), A("weekday", 11), A("isoWeekday", 11), de("d", ee), de("e", ee), de("E", ee), de("dd", function (e, t) {
            return t.weekdaysMinRegex(e)
        }), de("ddd", function (e, t) {
            return t.weekdaysShortRegex(e)
        }), de("dddd", function (e, t) {
            return t.weekdaysRegex(e)
        }), ge(["dd", "ddd", "dddd"], function (e, t, n, o) {
            o = n._locale.weekdaysParse(e, o, n._strict);
            null != o ? t.d = o : p(n).invalidWeekday = e
        }), ge(["d", "e", "E"], function (e, t, n, o) {
            t[o] = G(e)
        });
        var je = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), $e = ce, Ze = ce,
            Qe = ce;

        function Je() {
            function e(e, t) {
                return t.length - e.length
            }

            for (var t, n, o, r = [], i = [], a = [], l = [], s = 0; s < 7; s++) o = m([2e3, 1]).day(s), t = he(this.weekdaysMin(o, "")), n = he(this.weekdaysShort(o, "")), o = he(this.weekdays(o, "")), r.push(t), i.push(n), a.push(o), l.push(t), l.push(n), l.push(o);
            r.sort(e), i.sort(e), a.sort(e), l.sort(e), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
        }

        function Ke() {
            return this.hours() % 12 || 12
        }

        function et(e, t) {
            P(e, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), t)
            })
        }

        function tt(e, t) {
            return t._meridiemParse
        }

        P("H", ["HH", 2], 0, "hour"), P("h", ["hh", 2], 0, Ke), P("k", ["kk", 2], 0, function () {
            return this.hours() || 24
        }), P("hmm", 0, 0, function () {
            return "" + Ke.apply(this) + V(this.minutes(), 2)
        }), P("hmmss", 0, 0, function () {
            return "" + Ke.apply(this) + V(this.minutes(), 2) + V(this.seconds(), 2)
        }), P("Hmm", 0, 0, function () {
            return "" + this.hours() + V(this.minutes(), 2)
        }), P("Hmmss", 0, 0, function () {
            return "" + this.hours() + V(this.minutes(), 2) + V(this.seconds(), 2)
        }), et("a", !0), et("A", !1), F("hour", "h"), A("hour", 13), de("a", tt), de("A", tt), de("H", ee), de("h", ee), de("k", ee), de("HH", ee, Z), de("hh", ee, Z), de("kk", ee, Z), de("hmm", te), de("hmmss", ne), de("Hmm", te), de("Hmmss", ne), _e(["H", "HH"], ke), _e(["k", "kk"], function (e, t, n) {
            e = G(e);
            t[ke] = 24 === e ? 0 : e
        }), _e(["a", "A"], function (e, t, n) {
            n._isPm = n._locale.isPM(e), n._meridiem = e
        }), _e(["h", "hh"], function (e, t, n) {
            t[ke] = G(e), p(n).bigHour = !0
        }), _e("hmm", function (e, t, n) {
            var o = e.length - 2;
            t[ke] = G(e.substr(0, o)), t[xe] = G(e.substr(o)), p(n).bigHour = !0
        }), _e("hmmss", function (e, t, n) {
            var o = e.length - 4, r = e.length - 2;
            t[ke] = G(e.substr(0, o)), t[xe] = G(e.substr(o, 2)), t[Ce] = G(e.substr(r)), p(n).bigHour = !0
        }), _e("Hmm", function (e, t, n) {
            var o = e.length - 2;
            t[ke] = G(e.substr(0, o)), t[xe] = G(e.substr(o))
        }), _e("Hmmss", function (e, t, n) {
            var o = e.length - 4, r = e.length - 2;
            t[ke] = G(e.substr(0, o)), t[xe] = G(e.substr(o, 2)), t[Ce] = G(e.substr(r))
        });
        var nt = j("Hours", !0);
        var ot, rt = {
            calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L"
            },
            longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A"
            },
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: /\d{1,2}/,
            relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years"
            },
            months: Ve,
            monthsShort: Ye,
            week: {dow: 0, doy: 6},
            weekdays: je,
            weekdaysMin: Xe,
            weekdaysShort: ze,
            meridiemParse: /[ap]\.?m?\.?/i
        }, it = {}, at = {};

        function lt(e) {
            return e && e.toLowerCase().replace("_", "-")
        }

        function st(e) {
            for (var t, n, o, r, i = 0; i < e.length;) {
                for (t = (r = lt(e[i]).split("-")).length, n = (n = lt(e[i + 1])) ? n.split("-") : null; 0 < t;) {
                    if (o = ut(r.slice(0, t).join("-"))) return o;
                    if (n && n.length >= t && function (e, t) {
                        for (var n = Math.min(e.length, t.length), o = 0; o < n; o += 1) if (e[o] !== t[o]) return o;
                        return n
                    }(r, n) >= t - 1) break;
                    t--
                }
                i++
            }
            return ot
        }

        function ut(t) {
            var e;
            if (void 0 === it[t] && "undefined" != typeof module && module && module.exports && null != t.match("^[^/\\\\]*$")) try {
                e = ot._abbr, require("./locale/" + t), ct(e)
            } catch (e) {
                it[t] = null
            }
            return it[t]
        }

        function ct(e, t) {
            return e && ((t = u(t) ? ft(e) : dt(e, t)) ? ot = t : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), ot._abbr
        }

        function dt(e, t) {
            if (null === t) return delete it[e], null;
            var n, o = rt;
            if (t.abbr = e, null != it[e]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), o = it[e]._config; else if (null != t.parentLocale) if (null != it[t.parentLocale]) o = it[t.parentLocale]._config; else {
                if (null == (n = ut(t.parentLocale))) return at[t.parentLocale] || (at[t.parentLocale] = []), at[t.parentLocale].push({
                    name: e,
                    config: t
                }), null;
                o = n._config
            }
            return it[e] = new N(D(o, t)), at[e] && at[e].forEach(function (e) {
                dt(e.name, e.config)
            }), ct(e), it[e]
        }

        function ft(e) {
            var t;
            if (!(e = e && e._locale && e._locale._abbr ? e._locale._abbr : e)) return ot;
            if (!a(e)) {
                if (t = ut(e)) return t;
                e = [e]
            }
            return st(e)
        }

        function ht(e) {
            var t = e._a;
            return t && -2 === p(e).overflow && (t = t[we] < 0 || 11 < t[we] ? we : t[be] < 1 || t[be] > Me(t[ve], t[we]) ? be : t[ke] < 0 || 24 < t[ke] || 24 === t[ke] && (0 !== t[xe] || 0 !== t[Ce] || 0 !== t[Se]) ? ke : t[xe] < 0 || 59 < t[xe] ? xe : t[Ce] < 0 || 59 < t[Ce] ? Ce : t[Se] < 0 || 999 < t[Se] ? Se : -1, p(e)._overflowDayOfYear && (t < ve || be < t) && (t = be), p(e)._overflowWeeks && -1 === t && (t = De), p(e)._overflowWeekday && -1 === t && (t = Ne), p(e).overflow = t), e
        }

        var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            pt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            _t = /Z|[+-]\d\d(?::?\d\d)?/,
            gt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]],
            yt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
            vt = /^\/?Date\((-?\d+)/i,
            wt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            bt = {
                UT: 0,
                GMT: 0,
                EDT: -240,
                EST: -300,
                CDT: -300,
                CST: -360,
                MDT: -360,
                MST: -420,
                PDT: -420,
                PST: -480
            };

        function kt(e) {
            var t, n, o, r, i, a, l = e._i, s = mt.exec(l) || pt.exec(l), u = gt.length, l = yt.length;
            if (s) {
                for (p(e).iso = !0, t = 0, n = u; t < n; t++) if (gt[t][1].exec(s[1])) {
                    r = gt[t][0], o = !1 !== gt[t][2];
                    break
                }
                if (null != r) {
                    if (s[3]) {
                        for (t = 0, n = l; t < n; t++) if (yt[t][1].exec(s[3])) {
                            i = (s[2] || " ") + yt[t][0];
                            break
                        }
                        if (null == i) return void (e._isValid = !1)
                    }
                    if (o || null == i) {
                        if (s[4]) {
                            if (!_t.exec(s[4])) return void (e._isValid = !1);
                            a = "Z"
                        }
                        e._f = r + (i || "") + (a || ""), Nt(e)
                    } else e._isValid = !1
                } else e._isValid = !1
            } else e._isValid = !1
        }

        function xt(e, t, n, o, r, i) {
            r = [function (e) {
                e = parseInt(e, 10);
                {
                    if (e <= 49) return 2e3 + e;
                    if (e <= 999) return 1900 + e
                }
                return e
            }(e), Ye.indexOf(t), parseInt(n, 10), parseInt(o, 10), parseInt(r, 10)];
            return i && r.push(parseInt(i, 10)), r
        }

        function Ct(e) {
            var t, n, o, r,
                i = wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
            i ? (t = xt(i[4], i[3], i[2], i[5], i[6], i[7]), n = i[1], o = t, r = e, n && ze.indexOf(n) !== new Date(o[0], o[1], o[2]).getDay() ? (p(r).weekdayMismatch = !0, r._isValid = !1) : (e._a = t, e._tzm = (r = i[8], t = i[9], i = i[10], r ? bt[r] : t ? 0 : 60 * (((t = parseInt(i, 10)) - (i = t % 100)) / 100) + i), e._d = He.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0)) : e._isValid = !1
        }

        function St(e, t, n) {
            return null != e ? e : null != t ? t : n
        }

        function Dt(e) {
            var t, n, o, r, i, a = [];
            if (!e._d) {
                for (r = e, i = new Date(f.now()), n = r._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()], e._w && null == e._a[be] && null == e._a[we] && function (e) {
                    var t, n, o, r, i, a, l, s;
                    null != (t = e._w).GG || null != t.W || null != t.E ? (i = 1, a = 4, n = St(t.GG, e._a[ve], Le(Yt(), 1, 4).year), o = St(t.W, 1), ((r = St(t.E, 1)) < 1 || 7 < r) && (l = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, s = Le(Yt(), i, a), n = St(t.gg, e._a[ve], s.year), o = St(t.w, s.week), null != t.d ? ((r = t.d) < 0 || 6 < r) && (l = !0) : null != t.e ? (r = t.e + i, (t.e < 0 || 6 < t.e) && (l = !0)) : r = i);
                    o < 1 || o > qe(n, i, a) ? p(e)._overflowWeeks = !0 : null != l ? p(e)._overflowWeekday = !0 : (a = Ae(n, o, r, i, a), e._a[ve] = a.year, e._dayOfYear = a.dayOfYear)
                }(e), null != e._dayOfYear && (o = St(e._a[ve], n[ve]), (e._dayOfYear > Ue(o) || 0 === e._dayOfYear) && (p(e)._overflowDayOfYear = !0), o = He(o, 0, e._dayOfYear), e._a[we] = o.getUTCMonth(), e._a[be] = o.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = a[t] = n[t];
                for (; t < 7; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                24 === e._a[ke] && 0 === e._a[xe] && 0 === e._a[Ce] && 0 === e._a[Se] && (e._nextDay = !0, e._a[ke] = 0), e._d = (e._useUTC ? He : Ie).apply(null, a), o = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ke] = 24), e._w && void 0 !== e._w.d && e._w.d !== o && (p(e).weekdayMismatch = !0)
            }
        }

        function Nt(e) {
            if (e._f !== f.ISO_8601) if (e._f !== f.RFC_2822) {
                e._a = [], p(e).empty = !0;
                for (var t, n, o, r, i, a = "" + e._i, l = a.length, s = 0, u = R(e._f, e._locale).match(Y) || [], c = u.length, d = 0; d < c; d++) n = u[d], (t = (a.match(fe(n, e)) || [])[0]) && (0 < (r = a.substr(0, a.indexOf(t))).length && p(e).unusedInput.push(r), a = a.slice(a.indexOf(t) + t.length), s += t.length), E[n] ? (t ? p(e).empty = !1 : p(e).unusedTokens.push(n), o = n, i = e, null != (r = t) && h(pe, o) && pe[o](r, i._a, i, o)) : e._strict && !t && p(e).unusedTokens.push(n);
                p(e).charsLeftOver = l - s, 0 < a.length && p(e).unusedInput.push(a), e._a[ke] <= 12 && !0 === p(e).bigHour && 0 < e._a[ke] && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[ke] = function (e, t, n) {
                    if (null == n) return t;
                    return null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((n = e.isPM(n)) && t < 12 && (t += 12), t = n || 12 !== t ? t : 0) : t
                }(e._locale, e._a[ke], e._meridiem), null !== (l = p(e).era) && (e._a[ve] = e._locale.erasConvertYear(l, e._a[ve])), Dt(e), ht(e)
            } else Ct(e); else kt(e)
        }

        function Mt(e) {
            var t = e._i, n = e._f;
            return e._locale = e._locale || ft(e._l), null === t || void 0 === n && "" === t ? i({nullInput: !0}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), b(t) ? new w(ht(t)) : (o(t) ? e._d = t : a(n) ? function (e) {
                var t, n, o, r, i, a, l = !1, s = e._f.length;
                if (0 === s) return p(e).invalidFormat = !0, e._d = new Date(NaN);
                for (r = 0; r < s; r++) i = 0, a = !1, t = v({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], Nt(t), _(t) && (a = !0), i += p(t).charsLeftOver, i += 10 * p(t).unusedTokens.length, p(t).score = i, l ? i < o && (o = i, n = t) : (null == o || i < o || a) && (o = i, n = t, a && (l = !0));
                d(e, n || t)
            }(e) : n ? Nt(e) : u(n = (t = e)._i) ? t._d = new Date(f.now()) : o(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? function (e) {
                var t = vt.exec(e._i);
                null === t ? (kt(e), !1 === e._isValid && (delete e._isValid, Ct(e), !1 === e._isValid && (delete e._isValid, e._strict ? e._isValid = !1 : f.createFromInputFallback(e)))) : e._d = new Date(+t[1])
            }(t) : a(n) ? (t._a = r(n.slice(0), function (e) {
                return parseInt(e, 10)
            }), Dt(t)) : l(n) ? function (e) {
                var t, n;
                e._d || (n = void 0 === (t = H(e._i)).day ? t.date : t.day, e._a = r([t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond], function (e) {
                    return e && parseInt(e, 10)
                }), Dt(e))
            }(t) : c(n) ? t._d = new Date(n) : f.createFromInputFallback(t), _(e) || (e._d = null), e))
        }

        function Vt(e, t, n, o, r) {
            var i = {};
            return !0 !== t && !1 !== t || (o = t, t = void 0), !0 !== n && !1 !== n || (o = n, n = void 0), (l(e) && s(e) || a(e) && 0 === e.length) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = r, i._l = n, i._i = e, i._f = t, i._strict = o, (i = new w(ht(Mt(i = i))))._nextDay && (i.add(1, "d"), i._nextDay = void 0), i
        }

        function Yt(e, t, n, o) {
            return Vt(e, t, n, o, !1)
        }

        f.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
            e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
        }), f.ISO_8601 = function () {
        }, f.RFC_2822 = function () {
        };
        var Ot = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var e = Yt.apply(null, arguments);
                return this.isValid() && e.isValid() ? e < this ? this : e : i()
            }),
            Tt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var e = Yt.apply(null, arguments);
                return this.isValid() && e.isValid() ? this < e ? this : e : i()
            });

        function Et(e, t) {
            var n, o;
            if (!(t = 1 === t.length && a(t[0]) ? t[0] : t).length) return Yt();
            for (n = t[0], o = 1; o < t.length; ++o) t[o].isValid() && !t[o][e](n) || (n = t[o]);
            return n
        }

        var Pt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

        function Bt(e) {
            var t = H(e), n = t.year || 0, o = t.quarter || 0, r = t.month || 0, i = t.week || t.isoWeek || 0,
                a = t.day || 0, l = t.hour || 0, s = t.minute || 0, u = t.second || 0, e = t.millisecond || 0;
            this._isValid = function (e) {
                var t, n, o = !1, r = Pt.length;
                for (t in e) if (h(e, t) && (-1 === ye.call(Pt, t) || null != e[t] && isNaN(e[t]))) return !1;
                for (n = 0; n < r; ++n) if (e[Pt[n]]) {
                    if (o) return !1;
                    parseFloat(e[Pt[n]]) !== G(e[Pt[n]]) && (o = !0)
                }
                return !0
            }(t), this._milliseconds = +e + 1e3 * u + 6e4 * s + 1e3 * l * 60 * 60, this._days = +a + 7 * i, this._months = +r + 3 * o + 12 * n, this._data = {}, this._locale = ft(), this._bubble()
        }

        function Rt(e) {
            return e instanceof Bt
        }

        function Ut(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
        }

        function Ft(e, n) {
            P(e, 0, 0, function () {
                var e = this.utcOffset(), t = "+";
                return e < 0 && (e = -e, t = "-"), t + V(~~(e / 60), 2) + n + V(~~e % 60, 2)
            })
        }

        Ft("Z", ":"), Ft("ZZ", ""), de("Z", ue), de("ZZ", ue), _e(["Z", "ZZ"], function (e, t, n) {
            n._useUTC = !0, n._tzm = Ht(ue, e)
        });
        var It = /([\+\-]|\d\d)/gi;

        function Ht(e, t) {
            t = (t || "").match(e);
            return null === t ? null : 0 === (t = 60 * (e = ((t[t.length - 1] || []) + "").match(It) || ["-", 0, 0])[1] + G(e[2])) ? 0 : "+" === e[0] ? t : -t
        }

        function Wt(e, t) {
            var n;
            return t._isUTC ? (n = t.clone(), t = (b(e) || o(e) ? e : Yt(e)).valueOf() - n.valueOf(), n._d.setTime(n._d.valueOf() + t), f.updateOffset(n, !1), n) : Yt(e).local()
        }

        function At(e) {
            return -Math.round(e._d.getTimezoneOffset())
        }

        function Lt() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }

        f.updateOffset = function () {
        };
        var qt = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Gt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

        function jt(e, t) {
            var n, o = e, r = null;
            return Rt(e) ? o = {
                ms: e._milliseconds,
                d: e._days,
                M: e._months
            } : c(e) || !isNaN(+e) ? (o = {}, t ? o[t] = +e : o.milliseconds = +e) : (r = qt.exec(e)) ? (n = "-" === r[1] ? -1 : 1, o = {
                y: 0,
                d: G(r[be]) * n,
                h: G(r[ke]) * n,
                m: G(r[xe]) * n,
                s: G(r[Ce]) * n,
                ms: G(Ut(1e3 * r[Se])) * n
            }) : (r = Gt.exec(e)) ? (n = "-" === r[1] ? -1 : 1, o = {
                y: zt(r[2], n),
                M: zt(r[3], n),
                w: zt(r[4], n),
                d: zt(r[5], n),
                h: zt(r[6], n),
                m: zt(r[7], n),
                s: zt(r[8], n)
            }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (n = function (e, t) {
                var n;
                if (!e.isValid() || !t.isValid()) return {milliseconds: 0, months: 0};
                t = Wt(t, e), e.isBefore(t) ? n = Xt(e, t) : ((n = Xt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
                return n
            }(Yt(o.from), Yt(o.to)), (o = {}).ms = n.milliseconds, o.M = n.months), o = new Bt(o), Rt(e) && h(e, "_locale") && (o._locale = e._locale), Rt(e) && h(e, "_isValid") && (o._isValid = e._isValid), o
        }

        function zt(e, t) {
            e = e && parseFloat(e.replace(",", "."));
            return (isNaN(e) ? 0 : e) * t
        }

        function Xt(e, t) {
            var n = {};
            return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
        }

        function $t(o, r) {
            return function (e, t) {
                var n;
                return null === t || isNaN(+t) || (C(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), Zt(this, jt(e, t), o), this
            }
        }

        function Zt(e, t, n, o) {
            var r = t._milliseconds, i = Ut(t._days), t = Ut(t._months);
            e.isValid() && (o = null == o || o, t && Pe(e, z(e, "Month") + t * n), i && X(e, "Date", z(e, "Date") + i * n), r && e._d.setTime(e._d.valueOf() + r * n), o && f.updateOffset(e, i || t))
        }

        jt.fn = Bt.prototype, jt.invalid = function () {
            return jt(NaN)
        };
        var Qt = $t(1, "add"), ce = $t(-1, "subtract");

        function Jt(e) {
            return "string" == typeof e || e instanceof String
        }

        function Kt(e) {
            return b(e) || o(e) || Jt(e) || c(e) || function (t) {
                var e = a(t), n = !1;
                e && (n = 0 === t.filter(function (e) {
                    return !c(e) && Jt(t)
                }).length);
                return e && n
            }(e) || function (e) {
                var t, n, o = l(e) && !s(e), r = !1,
                    i = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"],
                    a = i.length;
                for (t = 0; t < a; t += 1) n = i[t], r = r || h(e, n);
                return o && r
            }(e) || null == e
        }

        function en(e, t) {
            if (e.date() < t.date()) return -en(t, e);
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()), o = e.clone().add(n, "months"),
                o = t - o < 0 ? (t - o) / (o - e.clone().add(n - 1, "months")) : (t - o) / (e.clone().add(1 + n, "months") - o);
            return -(n + o) || 0
        }

        function tn(e) {
            return void 0 === e ? this._locale._abbr : (null != (e = ft(e)) && (this._locale = e), this)
        }

        f.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", f.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        te = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
            return void 0 === e ? this.localeData() : this.locale(e)
        });

        function nn() {
            return this._locale
        }

        var on = 126227808e5;

        function rn(e, t) {
            return (e % t + t) % t
        }

        function an(e, t, n) {
            return e < 100 && 0 <= e ? new Date(e + 400, t, n) - on : new Date(e, t, n).valueOf()
        }

        function ln(e, t, n) {
            return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - on : Date.UTC(e, t, n)
        }

        function sn(e, t) {
            return t.erasAbbrRegex(e)
        }

        function un() {
            for (var e = [], t = [], n = [], o = [], r = this.eras(), i = 0, a = r.length; i < a; ++i) t.push(he(r[i].name)), e.push(he(r[i].abbr)), n.push(he(r[i].narrow)), o.push(he(r[i].name)), o.push(he(r[i].abbr)), o.push(he(r[i].narrow));
            this._erasRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + n.join("|") + ")", "i")
        }

        function cn(e, t) {
            P(0, [e, e.length], 0, t)
        }

        function dn(e, t, n, o, r) {
            var i;
            return null == e ? Le(this, o, r).year : (i = qe(e, o, r), function (e, t, n, o, r) {
                r = Ae(e, t, n, o, r), r = He(r.year, 0, r.dayOfYear);
                return this.year(r.getUTCFullYear()), this.month(r.getUTCMonth()), this.date(r.getUTCDate()), this
            }.call(this, e, t = i < t ? i : t, n, o, r))
        }

        P("N", 0, 0, "eraAbbr"), P("NN", 0, 0, "eraAbbr"), P("NNN", 0, 0, "eraAbbr"), P("NNNN", 0, 0, "eraName"), P("NNNNN", 0, 0, "eraNarrow"), P("y", ["y", 1], "yo", "eraYear"), P("y", ["yy", 2], 0, "eraYear"), P("y", ["yyy", 3], 0, "eraYear"), P("y", ["yyyy", 4], 0, "eraYear"), de("N", sn), de("NN", sn), de("NNN", sn), de("NNNN", function (e, t) {
            return t.erasNameRegex(e)
        }), de("NNNNN", function (e, t) {
            return t.erasNarrowRegex(e)
        }), _e(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, o) {
            o = n._locale.erasParse(e, o, n._strict);
            o ? p(n).era = o : p(n).invalidEra = e
        }), de("y", ae), de("yy", ae), de("yyy", ae), de("yyyy", ae), de("yo", function (e, t) {
            return t._eraYearOrdinalRegex || ae
        }), _e(["y", "yy", "yyy", "yyyy"], ve), _e(["yo"], function (e, t, n, o) {
            var r;
            n._locale._eraYearOrdinalRegex && (r = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[ve] = n._locale.eraYearOrdinalParse(e, r) : t[ve] = parseInt(e, 10)
        }), P(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100
        }), P(0, ["GG", 2], 0, function () {
            return this.isoWeekYear() % 100
        }), cn("gggg", "weekYear"), cn("ggggg", "weekYear"), cn("GGGG", "isoWeekYear"), cn("GGGGG", "isoWeekYear"), F("weekYear", "gg"), F("isoWeekYear", "GG"), A("weekYear", 1), A("isoWeekYear", 1), de("G", le), de("g", le), de("GG", ee, Z), de("gg", ee, Z), de("GGGG", re, J), de("gggg", re, J), de("GGGGG", ie, K), de("ggggg", ie, K), ge(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, o) {
            t[o.substr(0, 2)] = G(e)
        }), ge(["gg", "GG"], function (e, t, n, o) {
            t[o] = f.parseTwoDigitYear(e)
        }), P("Q", 0, "Qo", "quarter"), F("quarter", "Q"), A("quarter", 7), de("Q", $), _e("Q", function (e, t) {
            t[we] = 3 * (G(e) - 1)
        }), P("D", ["DD", 2], "Do", "date"), F("date", "D"), A("date", 9), de("D", ee), de("DD", ee, Z), de("Do", function (e, t) {
            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
        }), _e(["D", "DD"], be), _e("Do", function (e, t) {
            t[be] = G(e.match(ee)[0])
        });
        ne = j("Date", !0);
        P("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), F("dayOfYear", "DDD"), A("dayOfYear", 4), de("DDD", oe), de("DDDD", Q), _e(["DDD", "DDDD"], function (e, t, n) {
            n._dayOfYear = G(e)
        }), P("m", ["mm", 2], 0, "minute"), F("minute", "m"), A("minute", 14), de("m", ee), de("mm", ee, Z), _e(["m", "mm"], xe);
        Ve = j("Minutes", !1);
        P("s", ["ss", 2], 0, "second"), F("second", "s"), A("second", 15), de("s", ee), de("ss", ee, Z), _e(["s", "ss"], Ce);
        var fn, je = j("Seconds", !1);
        for (P("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
        }), P(0, ["SS", 2], 0, function () {
            return ~~(this.millisecond() / 10)
        }), P(0, ["SSS", 3], 0, "millisecond"), P(0, ["SSSS", 4], 0, function () {
            return 10 * this.millisecond()
        }), P(0, ["SSSSS", 5], 0, function () {
            return 100 * this.millisecond()
        }), P(0, ["SSSSSS", 6], 0, function () {
            return 1e3 * this.millisecond()
        }), P(0, ["SSSSSSS", 7], 0, function () {
            return 1e4 * this.millisecond()
        }), P(0, ["SSSSSSSS", 8], 0, function () {
            return 1e5 * this.millisecond()
        }), P(0, ["SSSSSSSSS", 9], 0, function () {
            return 1e6 * this.millisecond()
        }), F("millisecond", "ms"), A("millisecond", 16), de("S", oe, $), de("SS", oe, Z), de("SSS", oe, Q), fn = "SSSS"; fn.length <= 9; fn += "S") de(fn, ae);

        function hn(e, t) {
            t[Se] = G(1e3 * ("0." + e))
        }

        for (fn = "S"; fn.length <= 9; fn += "S") _e(fn, hn);
        Xe = j("Milliseconds", !1), P("z", 0, 0, "zoneAbbr"), P("zz", 0, 0, "zoneName");
        re = w.prototype;

        function mn(e) {
            return e
        }

        re.add = Qt, re.calendar = function (e, t) {
            1 === arguments.length && (arguments[0] ? Kt(arguments[0]) ? (e = arguments[0], t = void 0) : function (e) {
                for (var t = l(e) && !s(e), n = !1, o = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], r = 0; r < o.length; r += 1) n = n || h(e, o[r]);
                return t && n
            }(arguments[0]) && (t = arguments[0], e = void 0) : t = e = void 0);
            var n = e || Yt(), e = Wt(n, this).startOf("day"), e = f.calendarFormat(this, e) || "sameElse",
                t = t && (S(t[e]) ? t[e].call(this, n) : t[e]);
            return this.format(t || this.localeData().calendar(e, this, Yt(n)))
        }, re.clone = function () {
            return new w(this)
        }, re.diff = function (e, t, n) {
            var o, r, i;
            if (!this.isValid()) return NaN;
            if (!(o = Wt(e, this)).isValid()) return NaN;
            switch (r = 6e4 * (o.utcOffset() - this.utcOffset()), t = I(t)) {
                case"year":
                    i = en(this, o) / 12;
                    break;
                case"month":
                    i = en(this, o);
                    break;
                case"quarter":
                    i = en(this, o) / 3;
                    break;
                case"second":
                    i = (this - o) / 1e3;
                    break;
                case"minute":
                    i = (this - o) / 6e4;
                    break;
                case"hour":
                    i = (this - o) / 36e5;
                    break;
                case"day":
                    i = (this - o - r) / 864e5;
                    break;
                case"week":
                    i = (this - o - r) / 6048e5;
                    break;
                default:
                    i = this - o
            }
            return n ? i : q(i)
        }, re.endOf = function (e) {
            var t, n;
            if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this;
            switch (n = this._isUTC ? ln : an, e) {
                case"year":
                    t = n(this.year() + 1, 0, 1) - 1;
                    break;
                case"quarter":
                    t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                    break;
                case"month":
                    t = n(this.year(), this.month() + 1, 1) - 1;
                    break;
                case"week":
                    t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                    break;
                case"isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                    break;
                case"day":
                case"date":
                    t = n(this.year(), this.month(), this.date() + 1) - 1;
                    break;
                case"hour":
                    t = this._d.valueOf(), t += 36e5 - rn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                    break;
                case"minute":
                    t = this._d.valueOf(), t += 6e4 - rn(t, 6e4) - 1;
                    break;
                case"second":
                    t = this._d.valueOf(), t += 1e3 - rn(t, 1e3) - 1
            }
            return this._d.setTime(t), f.updateOffset(this, !0), this
        }, re.format = function (e) {
            return e = e || (this.isUtc() ? f.defaultFormatUtc : f.defaultFormat), e = B(this, e), this.localeData().postformat(e)
        }, re.from = function (e, t) {
            return this.isValid() && (b(e) && e.isValid() || Yt(e).isValid()) ? jt({
                to: this,
                from: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, re.fromNow = function (e) {
            return this.from(Yt(), e)
        }, re.to = function (e, t) {
            return this.isValid() && (b(e) && e.isValid() || Yt(e).isValid()) ? jt({
                from: this,
                to: e
            }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
        }, re.toNow = function (e) {
            return this.to(Yt(), e)
        }, re.get = function (e) {
            return S(this[e = I(e)]) ? this[e]() : this
        }, re.invalidAt = function () {
            return p(this).overflow
        }, re.isAfter = function (e, t) {
            return e = b(e) ? e : Yt(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() > e.valueOf() : e.valueOf() < this.clone().startOf(t).valueOf())
        }, re.isBefore = function (e, t) {
            return e = b(e) ? e : Yt(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() < e.valueOf() : this.clone().endOf(t).valueOf() < e.valueOf())
        }, re.isBetween = function (e, t, n, o) {
            return e = b(e) ? e : Yt(e), t = b(t) ? t : Yt(t), !!(this.isValid() && e.isValid() && t.isValid()) && (("(" === (o = o || "()")[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === o[1] ? this.isBefore(t, n) : !this.isAfter(t, n)))
        }, re.isSame = function (e, t) {
            return e = b(e) ? e : Yt(e), !(!this.isValid() || !e.isValid()) && ("millisecond" === (t = I(t) || "millisecond") ? this.valueOf() === e.valueOf() : (e = e.valueOf(), this.clone().startOf(t).valueOf() <= e && e <= this.clone().endOf(t).valueOf()))
        }, re.isSameOrAfter = function (e, t) {
            return this.isSame(e, t) || this.isAfter(e, t)
        }, re.isSameOrBefore = function (e, t) {
            return this.isSame(e, t) || this.isBefore(e, t)
        }, re.isValid = function () {
            return _(this)
        }, re.lang = te, re.locale = tn, re.localeData = nn, re.max = Tt, re.min = Ot, re.parsingFlags = function () {
            return d({}, p(this))
        }, re.set = function (e, t) {
            if ("object" == typeof e) for (var n = function (e) {
                var t, n = [];
                for (t in e) h(e, t) && n.push({unit: t, priority: W[t]});
                return n.sort(function (e, t) {
                    return e.priority - t.priority
                }), n
            }(e = H(e)), o = n.length, r = 0; r < o; r++) this[n[r].unit](e[n[r].unit]); else if (S(this[e = I(e)])) return this[e](t);
            return this
        }, re.startOf = function (e) {
            var t, n;
            if (void 0 === (e = I(e)) || "millisecond" === e || !this.isValid()) return this;
            switch (n = this._isUTC ? ln : an, e) {
                case"year":
                    t = n(this.year(), 0, 1);
                    break;
                case"quarter":
                    t = n(this.year(), this.month() - this.month() % 3, 1);
                    break;
                case"month":
                    t = n(this.year(), this.month(), 1);
                    break;
                case"week":
                    t = n(this.year(), this.month(), this.date() - this.weekday());
                    break;
                case"isoWeek":
                    t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                    break;
                case"day":
                case"date":
                    t = n(this.year(), this.month(), this.date());
                    break;
                case"hour":
                    t = this._d.valueOf(), t -= rn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                    break;
                case"minute":
                    t = this._d.valueOf(), t -= rn(t, 6e4);
                    break;
                case"second":
                    t = this._d.valueOf(), t -= rn(t, 1e3)
            }
            return this._d.setTime(t), f.updateOffset(this, !0), this
        }, re.subtract = ce, re.toArray = function () {
            var e = this;
            return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
        }, re.toObject = function () {
            var e = this;
            return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds()
            }
        }, re.toDate = function () {
            return new Date(this.valueOf())
        }, re.toISOString = function (e) {
            if (!this.isValid()) return null;
            var t = !0 !== e;
            return (e = t ? this.clone().utc() : this).year() < 0 || 9999 < e.year() ? B(e, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : S(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(e, "Z")) : B(e, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
        }, re.inspect = function () {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var e, t = "moment", n = "";
            return this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", n = "Z"), e = "[" + t + '("]', t = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + (n + '[")]'))
        }, "undefined" != typeof Symbol && null != Symbol.for && (re[Symbol.for("nodejs.util.inspect.custom")] = function () {
            return "Moment<" + this.format() + ">"
        }), re.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
        }, re.toString = function () {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }, re.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
        }, re.valueOf = function () {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }, re.creationData = function () {
            return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
        }, re.eraName = function () {
            for (var e, t = this.localeData().eras(), n = 0, o = t.length; n < o; ++n) {
                if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].name;
                if (t[n].until <= e && e <= t[n].since) return t[n].name
            }
            return ""
        }, re.eraNarrow = function () {
            for (var e, t = this.localeData().eras(), n = 0, o = t.length; n < o; ++n) {
                if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].narrow;
                if (t[n].until <= e && e <= t[n].since) return t[n].narrow
            }
            return ""
        }, re.eraAbbr = function () {
            for (var e, t = this.localeData().eras(), n = 0, o = t.length; n < o; ++n) {
                if (e = this.clone().startOf("day").valueOf(), t[n].since <= e && e <= t[n].until) return t[n].abbr;
                if (t[n].until <= e && e <= t[n].since) return t[n].abbr
            }
            return ""
        }, re.eraYear = function () {
            for (var e, t, n = this.localeData().eras(), o = 0, r = n.length; o < r; ++o) if (e = n[o].since <= n[o].until ? 1 : -1, t = this.clone().startOf("day").valueOf(), n[o].since <= t && t <= n[o].until || n[o].until <= t && t <= n[o].since) return (this.year() - f(n[o].since).year()) * e + n[o].offset;
            return this.year()
        }, re.year = Fe, re.isLeapYear = function () {
            return L(this.year())
        }, re.weekYear = function (e) {
            return dn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }, re.isoWeekYear = function (e) {
            return dn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
        }, re.quarter = re.quarters = function (e) {
            return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
        }, re.month = Be, re.daysInMonth = function () {
            return Me(this.year(), this.month())
        }, re.week = re.weeks = function (e) {
            var t = this.localeData().week(this);
            return null == e ? t : this.add(7 * (e - t), "d")
        }, re.isoWeek = re.isoWeeks = function (e) {
            var t = Le(this, 1, 4).week;
            return null == e ? t : this.add(7 * (e - t), "d")
        }, re.weeksInYear = function () {
            var e = this.localeData()._week;
            return qe(this.year(), e.dow, e.doy)
        }, re.weeksInWeekYear = function () {
            var e = this.localeData()._week;
            return qe(this.weekYear(), e.dow, e.doy)
        }, re.isoWeeksInYear = function () {
            return qe(this.year(), 1, 4)
        }, re.isoWeeksInISOWeekYear = function () {
            return qe(this.isoWeekYear(), 1, 4)
        }, re.date = ne, re.day = re.days = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t, n, o = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - o, "d")) : o
        }, re.weekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == e ? t : this.add(e - t, "d")
        }, re.isoWeekday = function (e) {
            if (!this.isValid()) return null != e ? this : NaN;
            if (null == e) return this.day() || 7;
            var t = (t = e, e = this.localeData(), "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
            return this.day(this.day() % 7 ? t : t - 7)
        }, re.dayOfYear = function (e) {
            var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == e ? t : this.add(e - t, "d")
        }, re.hour = re.hours = nt, re.minute = re.minutes = Ve, re.second = re.seconds = je, re.millisecond = re.milliseconds = Xe, re.utcOffset = function (e, t, n) {
            var o, r = this._offset || 0;
            if (!this.isValid()) return null != e ? this : NaN;
            if (null == e) return this._isUTC ? r : At(this);
            if ("string" == typeof e) {
                if (null === (e = Ht(ue, e))) return this
            } else Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && t && (o = At(this)), this._offset = e, this._isUTC = !0, null != o && this.add(o, "m"), r !== e && (!t || this._changeInProgress ? Zt(this, jt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, f.updateOffset(this, !0), this._changeInProgress = null)), this
        }, re.utc = function (e) {
            return this.utcOffset(0, e)
        }, re.local = function (e) {
            return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(At(this), "m")), this
        }, re.parseZone = function () {
            var e;
            return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (e = Ht(se, this._i)) ? this.utcOffset(e) : this.utcOffset(0, !0)), this
        }, re.hasAlignedHourOffset = function (e) {
            return !!this.isValid() && (e = e ? Yt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
        }, re.isDST = function () {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }, re.isLocal = function () {
            return !!this.isValid() && !this._isUTC
        }, re.isUtcOffset = function () {
            return !!this.isValid() && this._isUTC
        }, re.isUtc = Lt, re.isUTC = Lt, re.zoneAbbr = function () {
            return this._isUTC ? "UTC" : ""
        }, re.zoneName = function () {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }, re.dates = n("dates accessor is deprecated. Use date instead.", ne), re.months = n("months accessor is deprecated. Use month instead", Be), re.years = n("years accessor is deprecated. Use year instead", Fe), re.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
            return null != e ? (this.utcOffset(e = "string" != typeof e ? -e : e, t), this) : -this.utcOffset()
        }), re.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
            if (!u(this._isDSTShifted)) return this._isDSTShifted;
            var e, t = {};
            return v(t, this), (t = Mt(t))._a ? (e = (t._isUTC ? m : Yt)(t._a), this._isDSTShifted = this.isValid() && 0 < function (e, t, n) {
                for (var o = Math.min(e.length, t.length), r = Math.abs(e.length - t.length), i = 0, a = 0; a < o; a++) (n && e[a] !== t[a] || !n && G(e[a]) !== G(t[a])) && i++;
                return i + r
            }(t._a, e.toArray())) : this._isDSTShifted = !1, this._isDSTShifted
        });
        J = N.prototype;

        function pn(e, t, n, o) {
            var r = ft(), t = m().set(o, t);
            return r[n](t, e)
        }

        function _n(e, t, n) {
            if (c(e) && (t = e, e = void 0), e = e || "", null != t) return pn(e, t, n, "month");
            for (var o = [], r = 0; r < 12; r++) o[r] = pn(e, r, n, "month");
            return o
        }

        function gn(e, t, n, o) {
            t = ("boolean" == typeof e ? c(t) && (n = t, t = void 0) : (t = e, e = !1, c(n = t) && (n = t, t = void 0)), t || "");
            var r, i = ft(), a = e ? i._week.dow : 0, l = [];
            if (null != n) return pn(t, (n + a) % 7, o, "day");
            for (r = 0; r < 7; r++) l[r] = pn(t, (r + a) % 7, o, "day");
            return l
        }

        J.calendar = function (e, t, n) {
            return S(e = this._calendar[e] || this._calendar.sameElse) ? e.call(t, n) : e
        }, J.longDateFormat = function (e) {
            var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
            return t || !n ? t : (this._longDateFormat[e] = n.match(Y).map(function (e) {
                return "MMMM" === e || "MM" === e || "DD" === e || "dddd" === e ? e.slice(1) : e
            }).join(""), this._longDateFormat[e])
        }, J.invalidDate = function () {
            return this._invalidDate
        }, J.ordinal = function (e) {
            return this._ordinal.replace("%d", e)
        }, J.preparse = mn, J.postformat = mn, J.relativeTime = function (e, t, n, o) {
            var r = this._relativeTime[n];
            return S(r) ? r(e, t, n, o) : r.replace(/%d/i, e)
        }, J.pastFuture = function (e, t) {
            return S(e = this._relativeTime[0 < e ? "future" : "past"]) ? e(t) : e.replace(/%s/i, t)
        }, J.set = function (e) {
            var t, n;
            for (n in e) h(e, n) && (S(t = e[n]) ? this[n] = t : this["_" + n] = t);
            this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }, J.eras = function (e, t) {
            for (var n, o = this._eras || ft("en")._eras, r = 0, i = o.length; r < i; ++r) switch ("string" == typeof o[r].since && (n = f(o[r].since).startOf("day"), o[r].since = n.valueOf()), typeof o[r].until) {
                case"undefined":
                    o[r].until = 1 / 0;
                    break;
                case"string":
                    n = f(o[r].until).startOf("day").valueOf(), o[r].until = n.valueOf()
            }
            return o
        }, J.erasParse = function (e, t, n) {
            var o, r, i, a, l, s = this.eras();
            for (e = e.toUpperCase(), o = 0, r = s.length; o < r; ++o) if (i = s[o].name.toUpperCase(), a = s[o].abbr.toUpperCase(), l = s[o].narrow.toUpperCase(), n) switch (t) {
                case"N":
                case"NN":
                case"NNN":
                    if (a === e) return s[o];
                    break;
                case"NNNN":
                    if (i === e) return s[o];
                    break;
                case"NNNNN":
                    if (l === e) return s[o]
            } else if (0 <= [i, a, l].indexOf(e)) return s[o]
        }, J.erasConvertYear = function (e, t) {
            var n = e.since <= e.until ? 1 : -1;
            return void 0 === t ? f(e.since).year() : f(e.since).year() + (t - e.offset) * n
        }, J.erasAbbrRegex = function (e) {
            return h(this, "_erasAbbrRegex") || un.call(this), e ? this._erasAbbrRegex : this._erasRegex
        }, J.erasNameRegex = function (e) {
            return h(this, "_erasNameRegex") || un.call(this), e ? this._erasNameRegex : this._erasRegex
        }, J.erasNarrowRegex = function (e) {
            return h(this, "_erasNarrowRegex") || un.call(this), e ? this._erasNarrowRegex : this._erasRegex
        }, J.months = function (e, t) {
            return e ? (a(this._months) ? this._months : this._months[(this._months.isFormat || Oe).test(t) ? "format" : "standalone"])[e.month()] : a(this._months) ? this._months : this._months.standalone
        }, J.monthsShort = function (e, t) {
            return e ? (a(this._monthsShort) ? this._monthsShort : this._monthsShort[Oe.test(t) ? "format" : "standalone"])[e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }, J.monthsParse = function (e, t, n) {
            var o, r;
            if (this._monthsParseExact) return function (e, t, n) {
                var o, r, i, e = e.toLocaleLowerCase();
                if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], o = 0; o < 12; ++o) i = m([2e3, o]), this._shortMonthsParse[o] = this.monthsShort(i, "").toLocaleLowerCase(), this._longMonthsParse[o] = this.months(i, "").toLocaleLowerCase();
                return n ? "MMM" === t ? -1 !== (r = ye.call(this._shortMonthsParse, e)) ? r : null : -1 !== (r = ye.call(this._longMonthsParse, e)) ? r : null : "MMM" === t ? -1 !== (r = ye.call(this._shortMonthsParse, e)) || -1 !== (r = ye.call(this._longMonthsParse, e)) ? r : null : -1 !== (r = ye.call(this._longMonthsParse, e)) || -1 !== (r = ye.call(this._shortMonthsParse, e)) ? r : null
            }.call(this, e, t, n);
            for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), o = 0; o < 12; o++) {
                if (r = m([2e3, o]), n && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[o] || (r = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[o] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[o].test(e)) return o;
                if (n && "MMM" === t && this._shortMonthsParse[o].test(e)) return o;
                if (!n && this._monthsParse[o].test(e)) return o
            }
        }, J.monthsRegex = function (e) {
            return this._monthsParseExact ? (h(this, "_monthsRegex") || Re.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (h(this, "_monthsRegex") || (this._monthsRegex = Ee), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
        }, J.monthsShortRegex = function (e) {
            return this._monthsParseExact ? (h(this, "_monthsRegex") || Re.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Te), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }, J.week = function (e) {
            return Le(e, this._week.dow, this._week.doy).week
        }, J.firstDayOfYear = function () {
            return this._week.doy
        }, J.firstDayOfWeek = function () {
            return this._week.dow
        }, J.weekdays = function (e, t) {
            return t = a(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"], !0 === e ? Ge(t, this._week.dow) : e ? t[e.day()] : t
        }, J.weekdaysMin = function (e) {
            return !0 === e ? Ge(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
        }, J.weekdaysShort = function (e) {
            return !0 === e ? Ge(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
        }, J.weekdaysParse = function (e, t, n) {
            var o, r;
            if (this._weekdaysParseExact) return function (e, t, n) {
                var o, r, i, e = e.toLocaleLowerCase();
                if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], o = 0; o < 7; ++o) i = m([2e3, 1]).day(o), this._minWeekdaysParse[o] = this.weekdaysMin(i, "").toLocaleLowerCase(), this._shortWeekdaysParse[o] = this.weekdaysShort(i, "").toLocaleLowerCase(), this._weekdaysParse[o] = this.weekdays(i, "").toLocaleLowerCase();
                return n ? "dddd" === t ? -1 !== (r = ye.call(this._weekdaysParse, e)) ? r : null : "ddd" === t ? -1 !== (r = ye.call(this._shortWeekdaysParse, e)) ? r : null : -1 !== (r = ye.call(this._minWeekdaysParse, e)) ? r : null : "dddd" === t ? -1 !== (r = ye.call(this._weekdaysParse, e)) || -1 !== (r = ye.call(this._shortWeekdaysParse, e)) || -1 !== (r = ye.call(this._minWeekdaysParse, e)) ? r : null : "ddd" === t ? -1 !== (r = ye.call(this._shortWeekdaysParse, e)) || -1 !== (r = ye.call(this._weekdaysParse, e)) || -1 !== (r = ye.call(this._minWeekdaysParse, e)) ? r : null : -1 !== (r = ye.call(this._minWeekdaysParse, e)) || -1 !== (r = ye.call(this._weekdaysParse, e)) || -1 !== (r = ye.call(this._shortWeekdaysParse, e)) ? r : null
            }.call(this, e, t, n);
            for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), o = 0; o < 7; o++) {
                if (r = m([2e3, 1]).day(o), n && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(r, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[o] || (r = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[o] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[o].test(e)) return o;
                if (n && "ddd" === t && this._shortWeekdaysParse[o].test(e)) return o;
                if (n && "dd" === t && this._minWeekdaysParse[o].test(e)) return o;
                if (!n && this._weekdaysParse[o].test(e)) return o
            }
        }, J.weekdaysRegex = function (e) {
            return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Je.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = $e), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }, J.weekdaysShortRegex = function (e) {
            return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Je.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ze), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }, J.weekdaysMinRegex = function (e) {
            return this._weekdaysParseExact ? (h(this, "_weekdaysRegex") || Je.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Qe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }, J.isPM = function (e) {
            return "p" === (e + "").toLowerCase().charAt(0)
        }, J.meridiem = function (e, t, n) {
            return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM"
        }, ct("en", {
            eras: [{
                since: "0001-01-01",
                until: 1 / 0,
                offset: 1,
                name: "Anno Domini",
                narrow: "AD",
                abbr: "AD"
            }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC"}],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
                var t = e % 10;
                return e + (1 === G(e % 100 / 10) ? "th" : 1 == t ? "st" : 2 == t ? "nd" : 3 == t ? "rd" : "th")
            }
        }), f.lang = n("moment.lang is deprecated. Use moment.locale instead.", ct), f.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ft);
        var yn = Math.abs;

        function vn(e, t, n, o) {
            n = jt(t, n);
            return e._milliseconds += o * n._milliseconds, e._days += o * n._days, e._months += o * n._months, e._bubble()
        }

        function wn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
        }

        function bn(e) {
            return 4800 * e / 146097
        }

        function kn(e) {
            return 146097 * e / 4800
        }

        function xn(e) {
            return function () {
                return this.as(e)
            }
        }

        ie = xn("ms"), K = xn("s"), $ = xn("m"), Z = xn("h"), oe = xn("d"), Q = xn("w"), Qt = xn("M"), Tt = xn("Q"), Ot = xn("y");

        function Cn(e) {
            return function () {
                return this.isValid() ? this._data[e] : NaN
            }
        }

        ce = Cn("milliseconds"), nt = Cn("seconds"), Ve = Cn("minutes"), je = Cn("hours"), Xe = Cn("days"), ne = Cn("months"), Fe = Cn("years");
        var Sn = Math.round, Dn = {ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11};

        function Nn(e, t, n, o) {
            var r = jt(e).abs(), i = Sn(r.as("s")), a = Sn(r.as("m")), l = Sn(r.as("h")), s = Sn(r.as("d")),
                u = Sn(r.as("M")), c = Sn(r.as("w")), r = Sn(r.as("y")),
                s = (i <= n.ss ? ["s", i] : i < n.s && ["ss", i]) || a <= 1 && ["m"] || a < n.m && ["mm", a] || l <= 1 && ["h"] || l < n.h && ["hh", l] || s <= 1 && ["d"] || s < n.d && ["dd", s];
            return (s = (s = null != n.w ? s || c <= 1 && ["w"] || c < n.w && ["ww", c] : s) || u <= 1 && ["M"] || u < n.M && ["MM", u] || r <= 1 && ["y"] || ["yy", r])[2] = t, s[3] = 0 < +e, s[4] = o, function (e, t, n, o, r) {
                return r.relativeTime(t || 1, !!n, e, o)
            }.apply(null, s)
        }

        var Mn = Math.abs;

        function Vn(e) {
            return (0 < e) - (e < 0) || +e
        }

        function Yn() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e, t, n, o, r, i, a, l = Mn(this._milliseconds) / 1e3, s = Mn(this._days), u = Mn(this._months),
                c = this.asSeconds();
            return c ? (e = q(l / 60), t = q(e / 60), l %= 60, e %= 60, n = q(u / 12), u %= 12, o = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", r = Vn(this._months) !== Vn(c) ? "-" : "", i = Vn(this._days) !== Vn(c) ? "-" : "", a = Vn(this._milliseconds) !== Vn(c) ? "-" : "", (c < 0 ? "-" : "") + "P" + (n ? r + n + "Y" : "") + (u ? r + u + "M" : "") + (s ? i + s + "D" : "") + (t || e || l ? "T" : "") + (t ? a + t + "H" : "") + (e ? a + e + "M" : "") + (l ? a + o + "S" : "")) : "P0D"
        }

        J = Bt.prototype;
        return J.isValid = function () {
            return this._isValid
        }, J.abs = function () {
            var e = this._data;
            return this._milliseconds = yn(this._milliseconds), this._days = yn(this._days), this._months = yn(this._months), e.milliseconds = yn(e.milliseconds), e.seconds = yn(e.seconds), e.minutes = yn(e.minutes), e.hours = yn(e.hours), e.months = yn(e.months), e.years = yn(e.years), this
        }, J.add = function (e, t) {
            return vn(this, e, t, 1)
        }, J.subtract = function (e, t) {
            return vn(this, e, t, -1)
        }, J.as = function (e) {
            if (!this.isValid()) return NaN;
            var t, n, o = this._milliseconds;
            if ("month" === (e = I(e)) || "quarter" === e || "year" === e) switch (t = this._days + o / 864e5, n = this._months + bn(t), e) {
                case"month":
                    return n;
                case"quarter":
                    return n / 3;
                case"year":
                    return n / 12
            } else switch (t = this._days + Math.round(kn(this._months)), e) {
                case"week":
                    return t / 7 + o / 6048e5;
                case"day":
                    return t + o / 864e5;
                case"hour":
                    return 24 * t + o / 36e5;
                case"minute":
                    return 1440 * t + o / 6e4;
                case"second":
                    return 86400 * t + o / 1e3;
                case"millisecond":
                    return Math.floor(864e5 * t) + o;
                default:
                    throw new Error("Unknown unit " + e)
            }
        }, J.asMilliseconds = ie, J.asSeconds = K, J.asMinutes = $, J.asHours = Z, J.asDays = oe, J.asWeeks = Q, J.asMonths = Qt, J.asQuarters = Tt, J.asYears = Ot, J.valueOf = function () {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * G(this._months / 12) : NaN
        }, J._bubble = function () {
            var e = this._milliseconds, t = this._days, n = this._months, o = this._data;
            return 0 <= e && 0 <= t && 0 <= n || e <= 0 && t <= 0 && n <= 0 || (e += 864e5 * wn(kn(n) + t), n = t = 0), o.milliseconds = e % 1e3, e = q(e / 1e3), o.seconds = e % 60, e = q(e / 60), o.minutes = e % 60, e = q(e / 60), o.hours = e % 24, t += q(e / 24), n += e = q(bn(t)), t -= wn(kn(e)), e = q(n / 12), n %= 12, o.days = t, o.months = n, o.years = e, this
        }, J.clone = function () {
            return jt(this)
        }, J.get = function (e) {
            return e = I(e), this.isValid() ? this[e + "s"]() : NaN
        }, J.milliseconds = ce, J.seconds = nt, J.minutes = Ve, J.hours = je, J.days = Xe, J.weeks = function () {
            return q(this.days() / 7)
        }, J.months = ne, J.years = Fe, J.humanize = function (e, t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var n = !1, o = Dn;
            return "object" == typeof e && (t = e, e = !1), "boolean" == typeof e && (n = e), "object" == typeof t && (o = Object.assign({}, Dn, t), null != t.s && null == t.ss && (o.ss = t.s - 1)), t = this.localeData(), o = Nn(this, !n, o, t), n && (o = t.pastFuture(+this, o)), t.postformat(o)
        }, J.toISOString = Yn, J.toString = Yn, J.toJSON = Yn, J.locale = tn, J.localeData = nn, J.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yn), J.lang = te, P("X", 0, 0, "unix"), P("x", 0, 0, "valueOf"), de("x", le), de("X", /[+-]?\d+(\.\d{1,3})?/), _e("X", function (e, t, n) {
            n._d = new Date(1e3 * parseFloat(e))
        }), _e("x", function (e, t, n) {
            n._d = new Date(G(e))
        }), f.version = "2.29.2", e = Yt, f.fn = re, f.min = function () {
            return Et("isBefore", [].slice.call(arguments, 0))
        }, f.max = function () {
            return Et("isAfter", [].slice.call(arguments, 0))
        }, f.now = function () {
            return Date.now ? Date.now() : +new Date
        }, f.utc = m, f.unix = function (e) {
            return Yt(1e3 * e)
        }, f.months = function (e, t) {
            return _n(e, t, "months")
        }, f.isDate = o, f.locale = ct, f.invalid = i, f.duration = jt, f.isMoment = b, f.weekdays = function (e, t, n) {
            return gn(e, t, n, "weekdays")
        }, f.parseZone = function () {
            return Yt.apply(null, arguments).parseZone()
        }, f.localeData = ft, f.isDuration = Rt, f.monthsShort = function (e, t) {
            return _n(e, t, "monthsShort")
        }, f.weekdaysMin = function (e, t, n) {
            return gn(e, t, n, "weekdaysMin")
        }, f.defineLocale = dt, f.updateLocale = function (e, t) {
            var n, o;
            return null != t ? (o = rt, null != it[e] && null != it[e].parentLocale ? it[e].set(D(it[e]._config, t)) : (t = D(o = null != (n = ut(e)) ? n._config : o, t), null == n && (t.abbr = e), (t = new N(t)).parentLocale = it[e], it[e] = t), ct(e)) : null != it[e] && (null != it[e].parentLocale ? (it[e] = it[e].parentLocale, e === ct() && ct(e)) : null != it[e] && delete it[e]), it[e]
        }, f.locales = function () {
            return M(it)
        }, f.weekdaysShort = function (e, t, n) {
            return gn(e, t, n, "weekdaysShort")
        }, f.normalizeUnits = I, f.relativeTimeRounding = function (e) {
            return void 0 === e ? Sn : "function" == typeof e && (Sn = e, !0)
        }, f.relativeTimeThreshold = function (e, t) {
            return void 0 !== Dn[e] && (void 0 === t ? Dn[e] : (Dn[e] = t, "s" === e && (Dn.ss = t - 1), !0))
        }, f.calendarFormat = function (e, t) {
            return (t = e.diff(t, "days", !0)) < -6 ? "sameElse" : t < -1 ? "lastWeek" : t < 0 ? "lastDay" : t < 1 ? "sameDay" : t < 2 ? "nextDay" : t < 7 ? "nextWeek" : "sameElse"
        }, f.prototype = re, f.HTML5_FMT = {
            DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
            DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
            DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
            DATE: "YYYY-MM-DD",
            TIME: "HH:mm",
            TIME_SECONDS: "HH:mm:ss",
            TIME_MS: "HH:mm:ss.SSS",
            WEEK: "GGGG-[W]WW",
            MONTH: "YYYY-MM"
        }, f
    }
    //, "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.moment = n();
    var Je = Object.freeze({__proto__: null});

    function Ke(e, t) {
        e = void 0 !== t ? t(e) : e;
        return '"' + (e = (e = null == e ? "" : String(e)).split('"').join('""')) + '"'
    }

    var et = C.defineComponent({
            name: "QGrid",
            props: ["data", "columns", "file_name", "csv_download", "excel_download", "columns_filter", "header_filter", "draggable", "draggable_columns", "classes", "separator", "dense", "dark", "flat", "bordered", "square", "selection", "selected", "fullscreen", "global_search", "groupby_filter", "visible_columns", "pagination", "loading", "row_key", "global_filter", "ssr_pagination"],
            setup: function (e) {
                var t = C.computed({
                    get: function () {
                        return e.pagination
                    }, set: function () {
                    }
                });
                return {
                    filter_data: C.ref({}),
                    pagination_this: t,
                    uuid: C.ref(""),
                    column_options: C.ref({}),
                    column_options_selected: C.ref({}),
                    filter_flags: C.ref({}),
                    selection_prop: C.ref(""),
                    name: C.ref(""),
                    selected_prop: C.ref([]),
                    filter: C.ref(""),
                    gorupby_option: C.ref([]),
                    group_pagination: {rowsPerPage: 0},
                    grouped_column: [{
                        name: "Grouped",
                        required: !0,
                        label: "Grouped Column Values",
                        align: "left",
                        field: "name",
                        sortable: !0
                    }],
                    sub_grouped_data: C.ref({}),
                    sub_grouped_columns: C.ref([]),
                    selected_group_by_filed: C.ref({label: "Group By Field", value: ""}),
                    final_column: C.ref([])
                }
            },
            mounted: function () {
                this.Sorting()
            },
            computed: {
                getFilteredData: function () {
                    var i = this, a = this.final_column.map(function (e) {
                        return e.field
                    });
                    return this.data.filter(function (e) {
                        for (var t = "", t = 0; t < a.length; t++) if ("" != i.filter_data[a[t]]) {
                            if (null == e[a[t]]) return !0;
                            if ((!i.final_column[t].hasOwnProperty("filter_type") || "text" == i.final_column[t].filter_type) && a[t] in i.filter_data && -1 == e[a[t]].toString().toLowerCase().indexOf(i.filter_data[a[t]].toLowerCase())) return !1;
                            if (i.final_column[t].hasOwnProperty("filter_type") && "date" == i.final_column[t].filter_type) {
                                var n = Je(e[a[t]], i.final_column[t].format),
                                    o = Je(i.filter_data[a[t]].from, "YYYY/MM/DD"),
                                    r = Je(i.filter_data[a[t]].to, "YYYY/MM/DD");
                                if (a[t] in i.filter_data && i.filter_data[a[t]].to && i.filter_data[a[t]].from && !(o <= n && n <= r)) return !1
                            }
                            if (i.final_column[t].hasOwnProperty("filter_type") && "number_range" == i.final_column[t].filter_type && a[t] in i.filter_data && "string" != typeof i.filter_data[a[t]].from && "string" != typeof i.filter_data[a[t]].to && !(parseFloat(e[a[t]]) >= i.filter_data[a[t]].from && parseFloat(e[a[t]]) <= i.filter_data[a[t]].to)) return !1
                        }
                        return !0
                    })
                }, getFilteredValuesData: function () {
                    var n = this;
                    this.column_options_selected = Object.assign({}, this.column_options_selected);
                    var e, t = this.getFilteredData.filter(function (e) {
                        for (var t = "", t = 0; t < n.columns.length; t++) if (0 != n.column_options_selected[n.columns[t].field].length && -1 == n.column_options_selected[n.columns[t].field].indexOf(e[n.columns[t].field].toString().toLowerCase())) return !1;
                        return !0
                    });
                    return this.groupby_filter && "" != this.selected_group_by_filed.value && (e = this.groupBy(t, this.selected_group_by_filed.value), t = [], Object.keys(e).filter(function (e) {
                        return t.push({name: e}), e
                    }), this.sub_grouped_data = e), t
                }, hasDefaultSlot: function () {
                    return this.$slots.hasOwnProperty("body")
                }, hasHeaderSlot: function () {
                    return this.$slots.hasOwnProperty("header")
                }
            },
            created: function () {
                this.uuid = o.uid(), void 0 === this.selection ? this.selection_prop = "none" : this.selection_prop = this.selection, void 0 === this.file_name ? this.name = "Download" : this.name = this.file_name, void 0 === this.selected ? this.selected_prop = [] : this.selected_prop = this.selected, this.gorupby_option = [{
                    label: "Group By Field",
                    value: ""
                }], this.setColumnsDefinition()
            },
            methods: {
                onRequest: function (e) {
                    this.$emit("OnRequest", e)
                }, rowClick: function (e) {
                    this.$emit("row-click", e)
                }, setColumnsDefinition: function () {
                    var n = this;
                    n.column_options = {}, n.columns.filter(function (e) {
                        return n.column_options[e.field] = [], n.column_options_selected[e.field] = [], n.filter_flags[e.field] = !1, e.hasOwnProperty("grouping") && e.grouping && n.gorupby_option.push({
                            label: e.label,
                            value: e.field
                        }), e
                    }), n.data.filter(function (t) {
                        n.columns.filter(function (e) {
                            null != t[e.field] && n.column_options[e.field].push({
                                label: t[e.field].toString(),
                                value: t[e.field].toString().toLowerCase().replace(/_/g, "_")
                            })
                        })
                    }), n.columns.filter(function (e) {
                        e.hasOwnProperty("filter_type") && "date" == e.filter_type && (n.filter_data[e.field] = {
                            from: "",
                            to: ""
                        }), e.hasOwnProperty("filter_type") && "number_range" == e.filter_type && (n.filter_data[e.field] = {
                            from: "",
                            to: ""
                        }), n.column_options[e.field] = [].concat(new Map(n.column_options[e.field].map(function (e) {
                            return [e.value, e]
                        })).values())
                    }), this.final_column = "" != this.selected_group_by_filed.value ? this.grouped_column : this.columns
                }, getColumnOptions: function (t) {
                    var e = [].concat(new Set(this.data.map(function (e) {
                        return e[t]
                    }))), n = [];
                    return e.filter(function (e) {
                        return n.push({label: e.toString(), value: e.toString().toLowerCase().replace(/_/g, "_")}), e
                    }), n
                }, exportTable: function (e) {
                    var n = this, t = [this.columns.map(function (e) {
                        return Ke(e.label)
                    })].concat(this.data.map(function (t) {
                        return n.columns.map(function (e) {
                            return Ke("function" == typeof e.field ? e.field(t) : t[void 0 === e.field ? e.name : e.field], e.format)
                        }).join(",")
                    })).join("\r\n");
                    !0 !== o.exportFile(this.file_name + "." + e, t, "text/" + e) && this.$q.notify({
                        message: "Browser denied file download...",
                        color: "negative",
                        icon: "warning"
                    })
                }, groupBy: function (e, t) {
                    var n = {};
                    return e.forEach(function (e) {
                        n[e[t]] || (n[e[t]] = []), n[e[t]].push(e)
                    }), n
                }, Sorting: function () {
                    var e = document.getElementById(this.uuid), t = e.querySelector("table tbody"),
                        e = e.querySelector("table thead tr:nth-of-type(1)"), o = this;
                    Ee.create(t, {
                        disabled: !this.draggable, onEnd: function (e) {
                            var t = o.data[e.oldIndex];
                            o.data[e.oldIndex] = o.data[e.newIndex], o.data[e.newIndex] = t, o.$emit("dragged_row", {
                                dragged_row: o.data[e.oldIndex],
                                old_index: e.oldIndex,
                                new_index: e.newIndex
                            })
                        }, onMove: function (e, t) {
                            if ("ignore-elements q-tr" == e.related.className) return !1
                        }
                    }), Ee.create(e, {
                        disabled: !this.draggable_columns, onEnd: function (e) {
                            var t, n = o.selection ? (t = e.oldIndex - 1, e.newIndex - 1) : (t = e.oldIndex, e.newIndex),
                                e = o.final_column[t];
                            o.final_column[t] = o.final_column[n], o.final_column[n] = e, o.$emit("dragged_column", {
                                dragged_column: o.final_column[t],
                                old_index: t,
                                new_index: n
                            })
                        }, onMove: function (e, t) {
                            if ("q-table--col-auto-width ignore-elements" == e.related.className) return !1
                        }
                    })
                }
            },
            watch: {
                selected_group_by_filed: function () {
                    this.final_column = this.groupby_filter && "" != this.selected_group_by_filed.value ? this.grouped_column : this.columns
                }, selected_prop: function () {
                    this.$emit("selected-val", this.selected_prop)
                }, columns: function () {
                    this.setColumnsDefinition()
                }, selected: function () {
                    void 0 === this.selected ? this.selected_prop = [] : this.selected_prop = this.selected
                }
            },
            emits: ["selected-val", "dragged_column", "row-click", "OnRequest"]
        }), tt = {class: "row inline"}, nt = {class: "column"}, ot = {class: "column"}, rt = {class: "q-pa-sm q-mt-md"},
        it = {class: "row items-center justify-end"}, at = {slot: "body", "slot-scope": "props"},
        lt = {class: "row inline"}, st = {class: "column"}, ut = {class: "column"}, ct = {class: "q-pa-sm q-mt-md"},
        dt = {class: "row items-center justify-end"}, ft = {slot: "body", "slot-scope": "props"};
    et.render = function (o, r, e, t, n, i) {
        var a = C.resolveComponent("q-checkbox"), l = C.resolveComponent("q-th"), s = C.resolveComponent("q-icon"),
            u = C.resolveComponent("q-space"), c = C.resolveComponent("q-btn"),
            d = C.resolveComponent("q-item-section"), f = C.resolveComponent("q-item-label"),
            h = C.resolveComponent("q-item"), m = C.resolveComponent("q-select"), p = C.resolveComponent("q-menu"),
            _ = C.resolveComponent("q-tr"), g = C.resolveComponent("q-input"), y = C.resolveComponent("q-date"),
            v = C.resolveComponent("q-popup-proxy"), w = C.resolveComponent("q-tooltip"),
            b = C.resolveComponent("q-td"), k = C.resolveComponent("q-table"), x = C.resolveDirective("close-popup");
        return C.openBlock(), C.createElementBlock("span", null, [o.ssr_pagination ? (C.openBlock(), C.createBlock(k, {
            key: 0,
            id: o.uuid,
            loading: o.loading,
            rows: o.getFilteredValuesData,
            columns: o.final_column,
            "row-key": o.row_key || "name",
            class: C.normalizeClass(o.classes),
            "visible-columns": o.visible_columns,
            separator: o.separator,
            dense: o.dense,
            dark: o.dark,
            flat: o.flat,
            bordered: o.bordered,
            square: o.square,
            selection: o.selection_prop,
            selected: o.selected_prop,
            "onUpdate:selected": r[6] || (r[6] = function (e) {
                return o.selected_prop = e
            }),
            filter: o.global_filter || o.filter,
            pagination: o.pagination_this,
            "onUpdate:pagination": r[7] || (r[7] = function (e) {
                return o.pagination_this = e
            }),
            onRequest: o.onRequest
        }, C.createSlots({
            header: C.withCtx(function (n) {
                return [C.withDirectives(C.createVNode(_, {props: n}, {
                    default: C.withCtx(function () {
                        return ["none" != o.selection_prop ? (C.openBlock(), C.createBlock(l, {
                            key: 0,
                            "auto-width": "",
                            class: "ignore-elements"
                        }, {
                            default: C.withCtx(function () {
                                return ["multiple" == o.selection_prop ? (C.openBlock(), C.createBlock(a, {
                                    key: 0,
                                    modelValue: n.selected,
                                    "onUpdate:modelValue": function (e) {
                                        return n.selected = e
                                    },
                                    "indeterminate-value": "some"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : C.createCommentVNode("", !0)]
                            }), _: 2
                        }, 1024)) : C.createCommentVNode("", !0), (C.openBlock(!0), C.createElementBlock(C.Fragment, null, C.renderList(n.cols, function (t) {
                            return C.openBlock(), C.createBlock(l, {
                                props: n,
                                onHover: r[1] || (r[1] = C.withModifiers(function () {
                                }, ["stop"])),
                                key: t.name
                            }, {
                                default: C.withCtx(function () {
                                    return [C.createElementVNode("div", tt, [C.createElementVNode("div", nt, [C.createElementVNode("p", null, C.toDisplayString(t.label), 1)]), C.createElementVNode("div", ot, [o.header_filter && t.hasOwnProperty("show_filter") && t.show_filter ? (C.openBlock(), C.createBlock(c, {
                                        key: 0,
                                        flat: "",
                                        dense: "",
                                        size: "sm",
                                        icon: "fa fa-filter",
                                        class: "q-ml-xs",
                                        onClick: r[0] || (r[0] = C.withModifiers(function () {
                                        }, ["stop"]))
                                    }, {
                                        default: C.withCtx(function () {
                                            return [0 < o.column_options_selected[t.field].length ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "fas fa-asterisk",
                                                color: "red",
                                                style: {"font-size": "7px"}
                                            })) : C.createCommentVNode("", !0), C.createVNode(p, null, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(u), C.withDirectives(C.createVNode(c, {
                                                        dense: "",
                                                        class: "float-right q-ma-sm bg-red text-white",
                                                        round: "",
                                                        size: "sm",
                                                        flat: "",
                                                        icon: "close"
                                                    }, null, 512), [[x]]), C.createElementVNode("div", rt, [C.createVNode(m, {
                                                        "map-options": "",
                                                        multiple: "",
                                                        "emit-value": "",
                                                        filled: "",
                                                        modelValue: o.column_options_selected[t.field],
                                                        "onUpdate:modelValue": function (e) {
                                                            return o.column_options_selected[t.field] = e
                                                        },
                                                        options: o.getColumnOptions(t.field),
                                                        style: {width: "150px !important"}
                                                    }, {
                                                        "before-options": C.withCtx(function () {
                                                            return [C.createVNode(h, {class: "sticky-top"}, {
                                                                default: C.withCtx(function () {
                                                                    return [C.createVNode(d, {avatar: ""}, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(a, {
                                                                                "onUpdate:modelValue": function (e) {
                                                                                    return o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length ? o.column_options_selected[t.field] = [] : o.column_options_selected[t.field] = o.getColumnOptions(t.field).map(function (e) {
                                                                                        return e.value
                                                                                    })
                                                                                },
                                                                                "model-value": o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length || 0 != o.column_options_selected[t.field].length && null,
                                                                                color: "teal"
                                                                            }, null, 8, ["onUpdate:modelValue", "model-value"])]
                                                                        }), _: 2
                                                                    }, 1024), C.createVNode(d, null, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(f, {innerHTML: "Select All"})]
                                                                        }), _: 1
                                                                    })]
                                                                }), _: 2
                                                            }, 1024)]
                                                        }), option: C.withCtx(function (e) {
                                                            return [C.createVNode(h, C.mergeProps(e.itemProps, C.toHandlers(e.itemEvents)), {
                                                                default: C.withCtx(function () {
                                                                    return [C.createVNode(d, {avatar: ""}, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(a, {
                                                                                modelValue: o.column_options_selected[t.field],
                                                                                "onUpdate:modelValue": function (e) {
                                                                                    return o.column_options_selected[t.field] = e
                                                                                },
                                                                                val: e.opt.value,
                                                                                color: "teal"
                                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "val"])]
                                                                        }), _: 2
                                                                    }, 1024), C.createVNode(d, null, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(f, {
                                                                                class: "text-black",
                                                                                innerHTML: e.opt.label
                                                                            }, null, 8, ["innerHTML"])]
                                                                        }), _: 2
                                                                    }, 1024)]
                                                                }), _: 2
                                                            }, 1040)]
                                                        }), _: 2
                                                    }, 1032, ["modelValue", "onUpdate:modelValue", "options"])]), C.withDirectives(C.createVNode(c, {
                                                        color: "primary",
                                                        class: "float-right q-mr-sm q-mb-sm text-capitalize",
                                                        size: "sm",
                                                        onClick: function (e) {
                                                            return o.column_options_selected[t.field] = []
                                                        },
                                                        label: "Clear"
                                                    }, null, 8, ["onClick"]), [[x]])]
                                                }), _: 2
                                            }, 1024)]
                                        }), _: 2
                                    }, 1024)) : C.createCommentVNode("", !0)])])]
                                }), _: 2
                            }, 1032, ["props"])
                        }), 128))]
                    }), _: 2
                }, 1032, ["props"]), [[C.vShow, !o.hasHeaderSlot]]), o.hasHeaderSlot ? C.renderSlot(o.$slots, "header", {
                    key: 0,
                    cols: n.cols
                }) : C.createCommentVNode("", !0), o.columns_filter ? (C.openBlock(), C.createBlock(_, {
                    key: 1,
                    props: n,
                    class: "ignore-elements"
                }, {
                    default: C.withCtx(function () {
                        return ["none" != o.selection_prop ? (C.openBlock(), C.createBlock(l, {
                            key: 0,
                            "auto-width": ""
                        })) : C.createCommentVNode("", !0), (C.openBlock(!0), C.createElementBlock(C.Fragment, null, C.renderList(n.cols, function (t) {
                            return C.openBlock(), C.createBlock(l, {key: t.name, style: {padding: "0px 0px 0px 0px"}}, {
                                default: C.withCtx(function () {
                                    return [t.hasOwnProperty("filter_type") && "text" != t.filter_type ? C.createCommentVNode("", !0) : (C.openBlock(), C.createBlock(g, {
                                        key: 0,
                                        dense: "",
                                        color: "teal",
                                        class: "q-pl-xs q-pr-xs",
                                        filled: "",
                                        modelValue: o.filter_data[t.field],
                                        "onUpdate:modelValue": function (e) {
                                            return o.filter_data[t.field] = e
                                        }
                                    }, C.createSlots({_: 2}, [o.filter_data[t.field] ? {
                                        name: "append",
                                        fn: C.withCtx(function () {
                                            return [C.createVNode(s, {
                                                name: "cancel",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.filter_data[t.field] = ""
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])]
                                        })
                                    } : void 0]), 1032, ["modelValue", "onUpdate:modelValue"])), t.hasOwnProperty("filter_type") && "select" == t.filter_type ? (C.openBlock(), C.createBlock(m, {
                                        key: 1,
                                        "map-options": "",
                                        multiple: "",
                                        "emit-value": "",
                                        filled: "",
                                        modelValue: o.column_options_selected[t.field],
                                        "onUpdate:modelValue": function (e) {
                                            return o.column_options_selected[t.field] = e
                                        },
                                        options: o.getColumnOptions(t.field),
                                        dense: ""
                                    }, {
                                        append: C.withCtx(function () {
                                            return [0 < o.column_options_selected[t.field].length ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "close",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.column_options_selected[t.field] = []
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])) : C.createCommentVNode("", !0)]
                                        }), "before-options": C.withCtx(function () {
                                            return [C.createVNode(h, {class: "sticky-top"}, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(d, {avatar: ""}, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(a, {
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length ? o.column_options_selected[t.field] = [] : o.column_options_selected[t.field] = o.getColumnOptions(t.field).map(function (e) {
                                                                        return e.value
                                                                    })
                                                                },
                                                                "model-value": o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length || 0 != o.column_options_selected[t.field].length && null,
                                                                color: "teal"
                                                            }, null, 8, ["onUpdate:modelValue", "model-value"])]
                                                        }), _: 2
                                                    }, 1024), C.createVNode(d, null, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(f, {innerHTML: "Select All"})]
                                                        }), _: 1
                                                    })]
                                                }), _: 2
                                            }, 1024)]
                                        }), option: C.withCtx(function (e) {
                                            return [C.createVNode(h, C.mergeProps(e.itemProps, C.toHandlers(e.itemEvents)), {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(d, {avatar: ""}, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(a, {
                                                                modelValue: o.column_options_selected[t.field],
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.column_options_selected[t.field] = e
                                                                },
                                                                val: e.opt.value,
                                                                color: "teal"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "val"])]
                                                        }), _: 2
                                                    }, 1024), C.createVNode(d, null, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(f, {innerHTML: e.opt.label}, null, 8, ["innerHTML"])]
                                                        }), _: 2
                                                    }, 1024)]
                                                }), _: 2
                                            }, 1040)]
                                        }), _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue", "options"])) : C.createCommentVNode("", !0), t.hasOwnProperty("filter_type") && "date" == t.filter_type ? (C.openBlock(), C.createBlock(g, {
                                        key: 2,
                                        dense: "",
                                        color: "teal",
                                        class: "q-pl-xs q-pr-xs",
                                        filled: "",
                                        "model-value": o.filter_data[t.field].from + (o.filter_data[t.field].from ? "-" : "") + o.filter_data[t.field].to
                                    }, {
                                        append: C.withCtx(function () {
                                            return [C.createVNode(s, {
                                                name: "event",
                                                class: "cursor-pointer"
                                            }, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(v, {
                                                        ref_for: !0,
                                                        ref: "qDateProxy",
                                                        cover: "",
                                                        "transition-show": "scale",
                                                        "transition-hide": "scale"
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(y, {
                                                                modelValue: o.filter_data[t.field],
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.filter_data[t.field] = e
                                                                },
                                                                range: ""
                                                            }, {
                                                                default: C.withCtx(function () {
                                                                    return [C.createElementVNode("div", it, [C.withDirectives(C.createVNode(c, {
                                                                        label: "Close",
                                                                        class: "text-capitalize",
                                                                        color: "primary",
                                                                        flat: ""
                                                                    }, null, 512), [[x]])])]
                                                                }), _: 2
                                                            }, 1032, ["modelValue", "onUpdate:modelValue"])]
                                                        }), _: 2
                                                    }, 1536)]
                                                }), _: 2
                                            }, 1024), "" != o.filter_data[t.field].from ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "cancel",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.filter_data[t.field] = {from: "", to: ""}
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])) : C.createCommentVNode("", !0)]
                                        }), _: 2
                                    }, 1032, ["model-value"])) : C.createCommentVNode("", !0), t.hasOwnProperty("filter_type") && "number_range" == t.filter_type ? (C.openBlock(), C.createBlock(g, {
                                        key: 3,
                                        dense: "",
                                        color: "teal",
                                        class: "q-pl-xs q-pr-xs",
                                        filled: "",
                                        "model-value": o.filter_data[t.field].from + ("string" != typeof o.filter_data[t.field].from ? "-" : "") + o.filter_data[t.field].to
                                    }, {
                                        append: C.withCtx(function () {
                                            return [C.createVNode(s, {
                                                name: "tag",
                                                class: "cursor-pointer"
                                            }, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(v, {
                                                        ref_for: !0,
                                                        ref: "qDateProxy",
                                                        cover: "",
                                                        class: "row q-pa-sm",
                                                        "transition-show": "scale",
                                                        "transition-hide": "scale"
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(g, {
                                                                label: "From",
                                                                type: "number",
                                                                color: "teal",
                                                                modelValue: o.filter_data[t.field].from,
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.filter_data[t.field].from = e
                                                                },
                                                                modelModifiers: {number: !0},
                                                                class: "q-pl-xs q-pr-xs",
                                                                filled: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]), C.createVNode(g, {
                                                                label: "To",
                                                                type: "number",
                                                                color: "teal",
                                                                modelValue: o.filter_data[t.field].to,
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.filter_data[t.field].to = e
                                                                },
                                                                modelModifiers: {number: !0},
                                                                class: "q-pl-xs q-pr-xs",
                                                                filled: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])]
                                                        }), _: 2
                                                    }, 1536)]
                                                }), _: 2
                                            }, 1024), "string" != typeof o.filter_data[t.field].from ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "cancel",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.filter_data[t.field] = {from: "", to: ""}
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])) : C.createCommentVNode("", !0)]
                                        }), _: 2
                                    }, 1032, ["model-value"])) : C.createCommentVNode("", !0)]
                                }), _: 2
                            }, 1024)
                        }), 128))]
                    }), _: 2
                }, 1032, ["props"])) : C.createCommentVNode("", !0)]
            }), body: C.withCtx(function (n) {
                return [o.hasDefaultSlot ? C.createCommentVNode("", !0) : (C.openBlock(), C.createBlock(_, {
                    key: 0,
                    props: n,
                    onClick: function (e) {
                        return o.rowClick(n.row)
                    }
                }, {
                    default: C.withCtx(function () {
                        return ["none" != o.selection_prop ? (C.openBlock(), C.createBlock(b, {key: 0}, {
                            default: C.withCtx(function () {
                                return [C.createVNode(a, {
                                    color: "primary",
                                    modelValue: n.selected,
                                    "onUpdate:modelValue": function (e) {
                                        return n.selected = e
                                    }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])]
                            }), _: 2
                        }, 1024)) : C.createCommentVNode("", !0), (C.openBlock(!0), C.createElementBlock(C.Fragment, null, C.renderList(n.cols, function (e, t) {
                            return C.openBlock(), C.createBlock(b, {
                                key: e.name,
                                props: n
                            }, {
                                default: C.withCtx(function () {
                                    return [o.groupby_filter && "" != o.selected_group_by_filed.value && 0 == t ? (C.openBlock(), C.createBlock(c, {
                                        key: 0,
                                        size: "sm",
                                        color: "accent",
                                        round: "",
                                        dense: "",
                                        onClick: function (e) {
                                            return n.expand = !n.expand
                                        },
                                        class: "q-mr-sm",
                                        icon: n.expand ? "remove" : "add"
                                    }, null, 8, ["onClick", "icon"])) : C.createCommentVNode("", !0), C.createTextVNode(" " + C.toDisplayString(n.row[e.field]), 1)]
                                }), _: 2
                            }, 1032, ["props"])
                        }), 128))]
                    }), _: 2
                }, 1032, ["props", "onClick"])), o.groupby_filter && "" != o.selected_group_by_filed.value ? C.withDirectives((C.openBlock(), C.createBlock(_, {
                    key: 1,
                    props: n
                }, {
                    default: C.withCtx(function () {
                        return [C.createVNode(b, {colspan: 2}, {
                            default: C.withCtx(function () {
                                return [C.createVNode(k, {
                                    rows: o.sub_grouped_data[n.row.name],
                                    columns: o.columns,
                                    "row-key": o.row_key || "name",
                                    pagination: o.group_pagination,
                                    "hide-bottom": ""
                                }, {
                                    default: C.withCtx(function () {
                                        return [C.createVNode(_, {
                                            slot: "header",
                                            "slot-scope": "props"
                                        }, {
                                            default: C.withCtx(function () {
                                                return [o.col.field != o.selected_group_by_filed ? (C.openBlock(!0), C.createElementBlock(C.Fragment, {key: 0}, C.renderList(n.cols, function (e) {
                                                    return C.openBlock(), C.createBlock(l, {
                                                        key: e.name,
                                                        props: n
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createTextVNode(C.toDisplayString(e.label), 1)]
                                                        }), _: 2
                                                    }, 1032, ["props"])
                                                }), 128)) : C.createCommentVNode("", !0)]
                                            }), _: 2
                                        }, 1024), C.createElementVNode("template", at, [C.createVNode(_, {props: n}, {
                                            default: C.withCtx(function () {
                                                return [o.col.field != o.selected_group_by_filed ? (C.openBlock(!0), C.createElementBlock(C.Fragment, {key: 0}, C.renderList(n.cols, function (e) {
                                                    return C.openBlock(), C.createBlock(b, {
                                                        key: e.name,
                                                        props: n
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createTextVNode(C.toDisplayString(n.row[e.field]), 1)]
                                                        }), _: 2
                                                    }, 1032, ["props"])
                                                }), 128)) : C.createCommentVNode("", !0)]
                                            }), _: 2
                                        }, 1032, ["props"])])]
                                    }), _: 2
                                }, 1032, ["rows", "columns", "row-key", "pagination"])]
                            }), _: 2
                        }, 1024)]
                    }), _: 2
                }, 1032, ["props"])), [[C.vShow, n.expand]]) : C.createCommentVNode("", !0), o.hasDefaultSlot ? C.renderSlot(o.$slots, "body", {
                    key: 2,
                    row: n.row
                }) : C.createCommentVNode("", !0)]
            }), _: 2
        }, [o.excel_download || o.csv_download || o.fullscreen || o.global_search ? {
            name: "top-right", fn: C.withCtx(function (e) {
                return [o.global_search ? (C.openBlock(), C.createBlock(g, {
                    key: 0,
                    filled: "",
                    borderless: "",
                    dense: "",
                    debounce: "300",
                    modelValue: o.filter,
                    "onUpdate:modelValue": r[2] || (r[2] = function (e) {
                        return o.filter = e
                    }),
                    class: "q-mr-md",
                    placeholder: "Search"
                }, {
                    append: C.withCtx(function () {
                        return [C.createVNode(s, {name: "search"})]
                    }), _: 1
                }, 8, ["modelValue"])) : C.createCommentVNode("", !0), o.excel_download ? (C.openBlock(), C.createBlock(c, {
                    key: 1,
                    class: "bg-grey-2 q-mr-sm",
                    icon: "fas fa-file-excel",
                    "no-caps": "",
                    onClick: r[3] || (r[3] = function (e) {
                        return o.exportTable("xlsx")
                    })
                })) : C.createCommentVNode("", !0), o.csv_download ? (C.openBlock(), C.createBlock(c, {
                    key: 2,
                    class: "bg-primary text-white",
                    icon: "fas fa-file-csv",
                    "no-caps": "",
                    onClick: r[4] || (r[4] = function (e) {
                        return o.exportTable("csv")
                    })
                })) : C.createCommentVNode("", !0), o.groupby_filter ? (C.openBlock(), C.createBlock(m, {
                    key: 3,
                    class: "q-mr-sm q-ml-sm",
                    outlined: "",
                    dense: "",
                    modelValue: o.selected_group_by_filed,
                    "onUpdate:modelValue": r[5] || (r[5] = function (e) {
                        return o.selected_group_by_filed = e
                    }),
                    options: o.gorupby_option,
                    style: {width: "150px"}
                }, null, 8, ["modelValue", "options"])) : C.createCommentVNode("", !0), o.fullscreen ? (C.openBlock(), C.createBlock(c, {
                    key: 4,
                    flat: "",
                    round: "",
                    class: "q-ml-sm",
                    dense: "",
                    icon: e.inFullscreen ? "fullscreen_exit" : "fullscreen",
                    onClick: e.toggleFullscreen
                }, {
                    default: C.withCtx(function () {
                        return [C.withDirectives((C.openBlock(), C.createBlock(w, {disable: o.$q.platform.is.mobile}, {
                            default: C.withCtx(function () {
                                return [C.createTextVNode(C.toDisplayString(e.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"), 1)]
                            }), _: 2
                        }, 1032, ["disable"])), [[x]])]
                    }), _: 2
                }, 1032, ["icon", "onClick"])) : C.createCommentVNode("", !0)]
            })
        } : void 0, o.$slots.loading ? {
            name: "loading", fn: C.withCtx(function () {
                return [C.renderSlot(o.$slots, "loading")]
            })
        } : void 0]), 1032, ["id", "loading", "rows", "columns", "row-key", "class", "visible-columns", "separator", "dense", "dark", "flat", "bordered", "square", "selection", "selected", "filter", "pagination", "onRequest"])) : (C.openBlock(), C.createBlock(k, {
            key: 1,
            id: o.uuid,
            loading: o.loading,
            rows: o.getFilteredValuesData,
            columns: o.final_column,
            "row-key": o.row_key || "name",
            class: C.normalizeClass(o.classes),
            "visible-columns": o.visible_columns,
            separator: o.separator,
            dense: o.dense,
            dark: o.dark,
            flat: o.flat,
            bordered: o.bordered,
            square: o.square,
            selection: o.selection_prop,
            selected: o.selected_prop,
            "onUpdate:selected": r[14] || (r[14] = function (e) {
                return o.selected_prop = e
            }),
            filter: o.global_filter || o.filter,
            pagination: o.pagination_this,
            onRequest: o.onRequest
        }, C.createSlots({
            header: C.withCtx(function (n) {
                return [C.withDirectives(C.createVNode(_, {props: n}, {
                    default: C.withCtx(function () {
                        return ["none" != o.selection_prop ? (C.openBlock(), C.createBlock(l, {
                            key: 0,
                            "auto-width": "",
                            class: "ignore-elements"
                        }, {
                            default: C.withCtx(function () {
                                return ["multiple" == o.selection_prop ? (C.openBlock(), C.createBlock(a, {
                                    key: 0,
                                    modelValue: n.selected,
                                    "onUpdate:modelValue": function (e) {
                                        return n.selected = e
                                    },
                                    "indeterminate-value": "some"
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])) : C.createCommentVNode("", !0)]
                            }), _: 2
                        }, 1024)) : C.createCommentVNode("", !0), (C.openBlock(!0), C.createElementBlock(C.Fragment, null, C.renderList(n.cols, function (t) {
                            return C.openBlock(), C.createBlock(l, {
                                props: n,
                                onHover: r[9] || (r[9] = C.withModifiers(function () {
                                }, ["stop"])),
                                key: t.name
                            }, {
                                default: C.withCtx(function () {
                                    return [C.createElementVNode("div", lt, [C.createElementVNode("div", st, [C.createElementVNode("p", null, C.toDisplayString(t.label), 1)]), C.createElementVNode("div", ut, [o.header_filter && t.hasOwnProperty("show_filter") && t.show_filter ? (C.openBlock(), C.createBlock(c, {
                                        key: 0,
                                        flat: "",
                                        dense: "",
                                        size: "sm",
                                        icon: "fa fa-filter",
                                        class: "q-ml-xs",
                                        onClick: r[8] || (r[8] = C.withModifiers(function () {
                                        }, ["stop"]))
                                    }, {
                                        default: C.withCtx(function () {
                                            return [0 < o.column_options_selected[t.field].length ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "fas fa-asterisk",
                                                color: "red",
                                                style: {"font-size": "7px"}
                                            })) : C.createCommentVNode("", !0), C.createVNode(p, null, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(u), C.withDirectives(C.createVNode(c, {
                                                        dense: "",
                                                        class: "float-right q-ma-sm bg-red text-white",
                                                        round: "",
                                                        size: "sm",
                                                        flat: "",
                                                        icon: "close"
                                                    }, null, 512), [[x]]), C.createElementVNode("div", ct, [C.createVNode(m, {
                                                        "map-options": "",
                                                        multiple: "",
                                                        "emit-value": "",
                                                        filled: "",
                                                        modelValue: o.column_options_selected[t.field],
                                                        "onUpdate:modelValue": function (e) {
                                                            return o.column_options_selected[t.field] = e
                                                        },
                                                        options: o.getColumnOptions(t.field),
                                                        style: {width: "150px !important"}
                                                    }, {
                                                        "before-options": C.withCtx(function () {
                                                            return [C.createVNode(h, {class: "sticky-top"}, {
                                                                default: C.withCtx(function () {
                                                                    return [C.createVNode(d, {avatar: ""}, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(a, {
                                                                                "onUpdate:modelValue": function (e) {
                                                                                    return o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length ? o.column_options_selected[t.field] = [] : o.column_options_selected[t.field] = o.getColumnOptions(t.field).map(function (e) {
                                                                                        return e.value
                                                                                    })
                                                                                },
                                                                                "model-value": o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length || 0 != o.column_options_selected[t.field].length && null,
                                                                                color: "teal"
                                                                            }, null, 8, ["onUpdate:modelValue", "model-value"])]
                                                                        }), _: 2
                                                                    }, 1024), C.createVNode(d, null, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(f, {innerHTML: "Select All"})]
                                                                        }), _: 1
                                                                    })]
                                                                }), _: 2
                                                            }, 1024)]
                                                        }), option: C.withCtx(function (e) {
                                                            return [C.createVNode(h, C.mergeProps(e.itemProps, C.toHandlers(e.itemEvents)), {
                                                                default: C.withCtx(function () {
                                                                    return [C.createVNode(d, {avatar: ""}, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(a, {
                                                                                modelValue: o.column_options_selected[t.field],
                                                                                "onUpdate:modelValue": function (e) {
                                                                                    return o.column_options_selected[t.field] = e
                                                                                },
                                                                                val: e.opt.value,
                                                                                color: "teal"
                                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "val"])]
                                                                        }), _: 2
                                                                    }, 1024), C.createVNode(d, null, {
                                                                        default: C.withCtx(function () {
                                                                            return [C.createVNode(f, {
                                                                                class: "text-black",
                                                                                innerHTML: e.opt.label
                                                                            }, null, 8, ["innerHTML"])]
                                                                        }), _: 2
                                                                    }, 1024)]
                                                                }), _: 2
                                                            }, 1040)]
                                                        }), _: 2
                                                    }, 1032, ["modelValue", "onUpdate:modelValue", "options"])]), C.withDirectives(C.createVNode(c, {
                                                        color: "primary",
                                                        class: "float-right q-mr-sm q-mb-sm text-capitalize",
                                                        size: "sm",
                                                        onClick: function (e) {
                                                            return o.column_options_selected[t.field] = []
                                                        },
                                                        label: "Clear"
                                                    }, null, 8, ["onClick"]), [[x]])]
                                                }), _: 2
                                            }, 1024)]
                                        }), _: 2
                                    }, 1024)) : C.createCommentVNode("", !0)])])]
                                }), _: 2
                            }, 1032, ["props"])
                        }), 128))]
                    }), _: 2
                }, 1032, ["props"]), [[C.vShow, !o.hasHeaderSlot]]), o.hasHeaderSlot ? C.renderSlot(o.$slots, "header", {
                    key: 0,
                    cols: n.cols
                }) : C.createCommentVNode("", !0), o.columns_filter ? (C.openBlock(), C.createBlock(_, {
                    key: 1,
                    props: n,
                    class: "ignore-elements"
                }, {
                    default: C.withCtx(function () {
                        return ["none" != o.selection_prop ? (C.openBlock(), C.createBlock(l, {
                            key: 0,
                            "auto-width": ""
                        })) : C.createCommentVNode("", !0), (C.openBlock(!0), C.createElementBlock(C.Fragment, null, C.renderList(n.cols, function (t) {
                            return C.openBlock(), C.createBlock(l, {key: t.name, style: {padding: "0px 0px 0px 0px"}}, {
                                default: C.withCtx(function () {
                                    return [t.hasOwnProperty("filter_type") && "text" != t.filter_type ? C.createCommentVNode("", !0) : (C.openBlock(), C.createBlock(g, {
                                        key: 0,
                                        dense: "",
                                        color: "teal",
                                        class: "q-pl-xs q-pr-xs",
                                        filled: "",
                                        modelValue: o.filter_data[t.field],
                                        "onUpdate:modelValue": function (e) {
                                            return o.filter_data[t.field] = e
                                        }
                                    }, C.createSlots({_: 2}, [o.filter_data[t.field] ? {
                                        name: "append",
                                        fn: C.withCtx(function () {
                                            return [C.createVNode(s, {
                                                name: "cancel",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.filter_data[t.field] = ""
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])]
                                        })
                                    } : void 0]), 1032, ["modelValue", "onUpdate:modelValue"])), t.hasOwnProperty("filter_type") && "select" == t.filter_type ? (C.openBlock(), C.createBlock(m, {
                                        key: 1,
                                        "map-options": "",
                                        multiple: "",
                                        "emit-value": "",
                                        filled: "",
                                        modelValue: o.column_options_selected[t.field],
                                        "onUpdate:modelValue": function (e) {
                                            return o.column_options_selected[t.field] = e
                                        },
                                        options: o.getColumnOptions(t.field),
                                        dense: ""
                                    }, {
                                        append: C.withCtx(function () {
                                            return [0 < o.column_options_selected[t.field].length ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "close",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.column_options_selected[t.field] = []
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])) : C.createCommentVNode("", !0)]
                                        }), "before-options": C.withCtx(function () {
                                            return [C.createVNode(h, {class: "sticky-top"}, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(d, {avatar: ""}, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(a, {
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length ? o.column_options_selected[t.field] = [] : o.column_options_selected[t.field] = o.getColumnOptions(t.field).map(function (e) {
                                                                        return e.value
                                                                    })
                                                                },
                                                                "model-value": o.getColumnOptions(t.field).length == o.column_options_selected[t.field].length || 0 != o.column_options_selected[t.field].length && null,
                                                                color: "teal"
                                                            }, null, 8, ["onUpdate:modelValue", "model-value"])]
                                                        }), _: 2
                                                    }, 1024), C.createVNode(d, null, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(f, {innerHTML: "Select All"})]
                                                        }), _: 1
                                                    })]
                                                }), _: 2
                                            }, 1024)]
                                        }), option: C.withCtx(function (e) {
                                            return [C.createVNode(h, C.mergeProps(e.itemProps, C.toHandlers(e.itemEvents)), {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(d, {avatar: ""}, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(a, {
                                                                modelValue: o.column_options_selected[t.field],
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.column_options_selected[t.field] = e
                                                                },
                                                                val: e.opt.value,
                                                                color: "teal"
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "val"])]
                                                        }), _: 2
                                                    }, 1024), C.createVNode(d, null, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(f, {innerHTML: e.opt.label}, null, 8, ["innerHTML"])]
                                                        }), _: 2
                                                    }, 1024)]
                                                }), _: 2
                                            }, 1040)]
                                        }), _: 2
                                    }, 1032, ["modelValue", "onUpdate:modelValue", "options"])) : C.createCommentVNode("", !0), t.hasOwnProperty("filter_type") && "date" == t.filter_type ? (C.openBlock(), C.createBlock(g, {
                                        key: 2,
                                        dense: "",
                                        color: "teal",
                                        class: "q-pl-xs q-pr-xs",
                                        filled: "",
                                        "model-value": o.filter_data[t.field].from + (o.filter_data[t.field].from ? "-" : "") + o.filter_data[t.field].to
                                    }, {
                                        append: C.withCtx(function () {
                                            return [C.createVNode(s, {
                                                name: "event",
                                                class: "cursor-pointer"
                                            }, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(v, {
                                                        ref_for: !0,
                                                        ref: "qDateProxy",
                                                        cover: "",
                                                        "transition-show": "scale",
                                                        "transition-hide": "scale"
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(y, {
                                                                modelValue: o.filter_data[t.field],
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.filter_data[t.field] = e
                                                                },
                                                                range: ""
                                                            }, {
                                                                default: C.withCtx(function () {
                                                                    return [C.createElementVNode("div", dt, [C.withDirectives(C.createVNode(c, {
                                                                        label: "Close",
                                                                        class: "text-capitalize",
                                                                        color: "primary",
                                                                        flat: ""
                                                                    }, null, 512), [[x]])])]
                                                                }), _: 2
                                                            }, 1032, ["modelValue", "onUpdate:modelValue"])]
                                                        }), _: 2
                                                    }, 1536)]
                                                }), _: 2
                                            }, 1024), "" != o.filter_data[t.field].from ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "cancel",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.filter_data[t.field] = {from: "", to: ""}
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])) : C.createCommentVNode("", !0)]
                                        }), _: 2
                                    }, 1032, ["model-value"])) : C.createCommentVNode("", !0), t.hasOwnProperty("filter_type") && "number_range" == t.filter_type ? (C.openBlock(), C.createBlock(g, {
                                        key: 3,
                                        dense: "",
                                        color: "teal",
                                        class: "q-pl-xs q-pr-xs",
                                        filled: "",
                                        "model-value": o.filter_data[t.field].from + ("string" != typeof o.filter_data[t.field].from ? "-" : "") + o.filter_data[t.field].to
                                    }, {
                                        append: C.withCtx(function () {
                                            return [C.createVNode(s, {
                                                name: "tag",
                                                class: "cursor-pointer"
                                            }, {
                                                default: C.withCtx(function () {
                                                    return [C.createVNode(v, {
                                                        ref_for: !0,
                                                        ref: "qDateProxy",
                                                        cover: "",
                                                        class: "row q-pa-sm",
                                                        "transition-show": "scale",
                                                        "transition-hide": "scale"
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createVNode(g, {
                                                                label: "From",
                                                                type: "number",
                                                                color: "teal",
                                                                modelValue: o.filter_data[t.field].from,
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.filter_data[t.field].from = e
                                                                },
                                                                modelModifiers: {number: !0},
                                                                class: "q-pl-xs q-pr-xs",
                                                                filled: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"]), C.createVNode(g, {
                                                                label: "To",
                                                                type: "number",
                                                                color: "teal",
                                                                modelValue: o.filter_data[t.field].to,
                                                                "onUpdate:modelValue": function (e) {
                                                                    return o.filter_data[t.field].to = e
                                                                },
                                                                modelModifiers: {number: !0},
                                                                class: "q-pl-xs q-pr-xs",
                                                                filled: ""
                                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])]
                                                        }), _: 2
                                                    }, 1536)]
                                                }), _: 2
                                            }, 1024), "string" != typeof o.filter_data[t.field].from ? (C.openBlock(), C.createBlock(s, {
                                                key: 0,
                                                name: "cancel",
                                                onClick: C.withModifiers(function (e) {
                                                    return o.filter_data[t.field] = {from: "", to: ""}
                                                }, ["stop"]),
                                                class: "cursor-pointer"
                                            }, null, 8, ["onClick"])) : C.createCommentVNode("", !0)]
                                        }), _: 2
                                    }, 1032, ["model-value"])) : C.createCommentVNode("", !0)]
                                }), _: 2
                            }, 1024)
                        }), 128))]
                    }), _: 2
                }, 1032, ["props"])) : C.createCommentVNode("", !0)]
            }), body: C.withCtx(function (n) {
                return [o.hasDefaultSlot ? C.createCommentVNode("", !0) : (C.openBlock(), C.createBlock(_, {
                    key: 0,
                    props: n,
                    onClick: function (e) {
                        return o.rowClick(n.row)
                    }
                }, {
                    default: C.withCtx(function () {
                        return ["none" != o.selection_prop ? (C.openBlock(), C.createBlock(b, {key: 0}, {
                            default: C.withCtx(function () {
                                return [C.createVNode(a, {
                                    color: "primary",
                                    modelValue: n.selected,
                                    "onUpdate:modelValue": function (e) {
                                        return n.selected = e
                                    }
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])]
                            }), _: 2
                        }, 1024)) : C.createCommentVNode("", !0), (C.openBlock(!0), C.createElementBlock(C.Fragment, null, C.renderList(n.cols, function (e, t) {
                            return C.openBlock(), C.createBlock(b, {
                                key: e.name,
                                props: n
                            }, {
                                default: C.withCtx(function () {
                                    return [o.groupby_filter && "" != o.selected_group_by_filed.value && 0 == t ? (C.openBlock(), C.createBlock(c, {
                                        key: 0,
                                        size: "sm",
                                        color: "accent",
                                        round: "",
                                        dense: "",
                                        onClick: function (e) {
                                            return n.expand = !n.expand
                                        },
                                        class: "q-mr-sm",
                                        icon: n.expand ? "remove" : "add"
                                    }, null, 8, ["onClick", "icon"])) : C.createCommentVNode("", !0), C.createTextVNode(" " + C.toDisplayString(n.row[e.field]), 1)]
                                }), _: 2
                            }, 1032, ["props"])
                        }), 128))]
                    }), _: 2
                }, 1032, ["props", "onClick"])), o.groupby_filter && "" != o.selected_group_by_filed.value ? C.withDirectives((C.openBlock(), C.createBlock(_, {
                    key: 1,
                    props: n
                }, {
                    default: C.withCtx(function () {
                        return [C.createVNode(b, {colspan: 2}, {
                            default: C.withCtx(function () {
                                return [C.createVNode(k, {
                                    rows: o.sub_grouped_data[n.row.name],
                                    columns: o.columns,
                                    "row-key": o.row_key || "name",
                                    pagination: o.group_pagination,
                                    "hide-bottom": ""
                                }, {
                                    default: C.withCtx(function () {
                                        return [C.createVNode(_, {
                                            slot: "header",
                                            "slot-scope": "props"
                                        }, {
                                            default: C.withCtx(function () {
                                                return [o.col.field != o.selected_group_by_filed ? (C.openBlock(!0), C.createElementBlock(C.Fragment, {key: 0}, C.renderList(n.cols, function (e) {
                                                    return C.openBlock(), C.createBlock(l, {
                                                        key: e.name,
                                                        props: n
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createTextVNode(C.toDisplayString(e.label), 1)]
                                                        }), _: 2
                                                    }, 1032, ["props"])
                                                }), 128)) : C.createCommentVNode("", !0)]
                                            }), _: 2
                                        }, 1024), C.createElementVNode("template", ft, [C.createVNode(_, {props: n}, {
                                            default: C.withCtx(function () {
                                                return [o.col.field != o.selected_group_by_filed ? (C.openBlock(!0), C.createElementBlock(C.Fragment, {key: 0}, C.renderList(n.cols, function (e) {
                                                    return C.openBlock(), C.createBlock(b, {
                                                        key: e.name,
                                                        props: n
                                                    }, {
                                                        default: C.withCtx(function () {
                                                            return [C.createTextVNode(C.toDisplayString(n.row[e.field]), 1)]
                                                        }), _: 2
                                                    }, 1032, ["props"])
                                                }), 128)) : C.createCommentVNode("", !0)]
                                            }), _: 2
                                        }, 1032, ["props"])])]
                                    }), _: 2
                                }, 1032, ["rows", "columns", "row-key", "pagination"])]
                            }), _: 2
                        }, 1024)]
                    }), _: 2
                }, 1032, ["props"])), [[C.vShow, n.expand]]) : C.createCommentVNode("", !0), o.hasDefaultSlot ? C.renderSlot(o.$slots, "body", {
                    key: 2,
                    row: n.row
                }) : C.createCommentVNode("", !0)]
            }), _: 2
        }, [o.excel_download || o.csv_download || o.fullscreen || o.global_search ? {
            name: "top-right", fn: C.withCtx(function (e) {
                return [o.global_search ? (C.openBlock(), C.createBlock(g, {
                    key: 0,
                    filled: "",
                    borderless: "",
                    dense: "",
                    debounce: "300",
                    modelValue: o.filter,
                    "onUpdate:modelValue": r[10] || (r[10] = function (e) {
                        return o.filter = e
                    }),
                    class: "q-mr-md",
                    placeholder: "Search"
                }, {
                    append: C.withCtx(function () {
                        return [C.createVNode(s, {name: "search"})]
                    }), _: 1
                }, 8, ["modelValue"])) : C.createCommentVNode("", !0), o.excel_download ? (C.openBlock(), C.createBlock(c, {
                    key: 1,
                    class: "bg-grey-2 q-mr-sm",
                    icon: "fas fa-file-excel",
                    "no-caps": "",
                    onClick: r[11] || (r[11] = function (e) {
                        return o.exportTable("xlsx")
                    })
                })) : C.createCommentVNode("", !0), o.csv_download ? (C.openBlock(), C.createBlock(c, {
                    key: 2,
                    class: "bg-primary text-white",
                    icon: "fas fa-file-csv",
                    "no-caps": "",
                    onClick: r[12] || (r[12] = function (e) {
                        return o.exportTable("csv")
                    })
                })) : C.createCommentVNode("", !0), o.groupby_filter ? (C.openBlock(), C.createBlock(m, {
                    key: 3,
                    class: "q-mr-sm q-ml-sm",
                    outlined: "",
                    dense: "",
                    modelValue: o.selected_group_by_filed,
                    "onUpdate:modelValue": r[13] || (r[13] = function (e) {
                        return o.selected_group_by_filed = e
                    }),
                    options: o.gorupby_option,
                    style: {width: "150px"}
                }, null, 8, ["modelValue", "options"])) : C.createCommentVNode("", !0), o.fullscreen ? (C.openBlock(), C.createBlock(c, {
                    key: 4,
                    flat: "",
                    round: "",
                    class: "q-ml-sm",
                    dense: "",
                    icon: e.inFullscreen ? "fullscreen_exit" : "fullscreen",
                    onClick: e.toggleFullscreen
                }, {
                    default: C.withCtx(function () {
                        return [C.withDirectives((C.openBlock(), C.createBlock(w, {disable: o.$q.platform.is.mobile}, {
                            default: C.withCtx(function () {
                                return [C.createTextVNode(C.toDisplayString(e.inFullscreen ? "Exit Fullscreen" : "Toggle Fullscreen"), 1)]
                            }), _: 2
                        }, 1032, ["disable"])), [[x]])]
                    }), _: 2
                }, 1032, ["icon", "onClick"])) : C.createCommentVNode("", !0)]
            })
        } : void 0, o.$slots.loading ? {
            name: "loading", fn: C.withCtx(function () {
                return [C.renderSlot(o.$slots, "loading")]
            })
        } : void 0]), 1032, ["id", "loading", "rows", "columns", "row-key", "class", "visible-columns", "separator", "dense", "dark", "flat", "bordered", "square", "selection", "selected", "filter", "pagination", "onRequest"]))])
    };
    return Object.freeze({
        __proto__: null, version: "1.0.18", QGrid: et, install: function (e) {
            e.component(et.name, et)
        }
    })
});