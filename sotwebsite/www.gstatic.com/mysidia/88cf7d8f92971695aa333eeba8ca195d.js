(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var g = this || self;

    function m(a, b) {
        a = a.split(".");
        var c = g;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    };
    var n, p;
    a: {
        for (var q = ["CLOSURE_FLAGS"], w = g, x = 0; x < q.length; x++)
            if (w = w[q[x]], null == w) {
                p = null;
                break a
            }
        p = w
    }
    var y = p && p[610401301];
    n = null != y ? y : !1;
    var z;
    const A = g.navigator;
    z = A ? A.userAgentData || null : null;

    function B(a) {
        return n ? z ? z.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function C(a) {
        var b;
        a: {
            if (b = g.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function D() {
        return n ? !!z && 0 < z.brands.length : !1
    }

    function E() {
        return D() ? B("Chromium") : (C("Chrome") || C("CriOS")) && !(D() ? 0 : C("Edge")) || C("Silk")
    };
    !C("Android") || E();
    E();
    C("Safari") && (E() || (D() ? 0 : C("Coast")) || (D() ? 0 : C("Opera")) || (D() ? 0 : C("Edge")) || (D() ? B("Microsoft Edge") : C("Edg/")) || D() && B("Opera"));
    const F = Symbol();

    function G(a) {
        const b = a[F] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), a[F] = b | 1)
    }

    function H() {
        var a = [];
        a[F] |= 1;
        return a
    }

    function aa(a, b) {
        b[F] = (a | 0) & -255
    }

    function I(a, b) {
        b[F] = (a | 34) & -221
    }

    function J(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var K = {};

    function L(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var M;
    const N = [];
    N[F] = 55;
    M = Object.freeze(N);
    const O = Symbol();
    let P;

    function R(a, b) {
        P = b;
        a = new a(b);
        P = void 0;
        return a
    };

    function ba(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a) && null != a && a instanceof Uint8Array) {
                    let b = "",
                        c = 0;
                    const d = a.length - 10240;
                    for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                    b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                    return btoa(b)
                }
        }
        return a
    };

    function ca(a, b, c) {
        a = Array.prototype.slice.call(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) b[f] = c(e[f])
        }
        return a
    }

    function S(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[F] | 0) & 1 ? void 0 : f && (a[F] | 0) & 2 ? a : T(a, b, c, void 0 !== d, e, f);
            else if (L(a)) {
                const h = {};
                for (let k in a) h[k] = S(a[k], b, c, d, e, f);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function T(a, b, c, d, e, f) {
        const h = d || c ? a[F] | 0 : 0;
        d = d ? !!(h & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let k = 0; k < a.length; k++) a[k] = S(a[k], b, c, d, e, f);
        c && c(h, a);
        return a
    }

    function fa(a) {
        return a.o === K ? a.toJSON() : ba(a)
    };

    function ha(a, b, c = I) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[F] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[F] = d | 34, d & 4 && Object.freeze(a), a) : T(a, ha, d & 4 ? I : c, !0, !1, !0)
            }
            a.o === K && (c = a.j, d = c[F], a = d & 2 ? a : R(a.constructor, ia(c, d, !0)));
            return a
        }
    }

    function ia(a, b, c) {
        const d = c || b & 2 ? I : aa,
            e = !!(b & 32);
        a = ca(a, b, f => ha(f, e, d));
        a[F] = a[F] | 32 | (c ? 2 : 0);
        return a
    };

    function U(a, b, c) {
        a = a.j;
        const d = a[F];
        if (d & 2) throw Error();
        a: if (-1 === c) var e = null;
            else {
                if (c >= J(d)) {
                    if (d & 256) {
                        e = a[a.length - 1][c];
                        break a
                    }
                } else if (e = c + (+!!(d & 512) - 1), e < a.length) {
                    e = a[e];
                    break a
                }
                e = void 0
            }
        var f = !1;
        if (null == e || "object" !== typeof e || (f = Array.isArray(e)) || e.o !== K)
            if (f) {
                var h = f = e[F] | 0;
                0 === h && (h |= d & 32);
                h |= d & 2;
                h !== f && (e[F] = h);
                b = new b(e)
            } else d & 2 ? (f = b[O]) ? b = f : (f = new b, h = f.j, h[F] |= 34, b = b[O] = f) : b = new b;
        else b = e;
        f = b.j;
        h = f[F];
        b = h & 2 ? R(b.constructor, ia(f, h, !1)) : b;
        if (e !== b) a: if (f = J(d), c >= f) {
            e = d;
            if (d &
                256) f = a[a.length - 1];
            else {
                if (null == b) break a;
                f = a[f + (+!!(d & 512) - 1)] = {};
                e |= 256
            }
            f[c] = b;
            e !== d && (a[F] = e)
        } else a[c + (+!!(d & 512) - 1)] = b, d & 256 && (a = a[a.length - 1], c in a && delete a[c]);
        return b
    };
    var V = class {
        constructor(a) {
            a: {
                null == a && (a = P);P = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[F] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (L(d)) {
                            b |= 256;
                            const f = +!!(b & 512) - 1;
                            e -= f;
                            if (1024 <= e) {
                                e = 1023 + f;
                                const h = c.length;
                                for (let k = e; k < h; k++) {
                                    const l = c[k];
                                    null != l && l !== d && (d[k - f] = l)
                                }
                                c.length = e + 1;
                                c[e] = d;
                                e = 1023
                            }
                            b = b & -2095105 | (e & 1023) << 11
                        }
                    }
                }
                a[F] = b
            }
            this.j = a
        }
        toJSON() {
            var a = T(this.j, fa, void 0, void 0, !1, !1);
            return ja(this, a, !0)
        }
    };
    V.prototype.o = K;
    V.prototype.toString = function() {
        return ja(this, this.j, !1).toString()
    };

    function ja(a, b, c) {
        var d = a.constructor.m,
            e = J((c ? a.j : b)[F]),
            f = !1;
        if (d) {
            if (!c) {
                b = Array.prototype.slice.call(b);
                var h;
                if (b.length && L(h = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, h);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            h = a.j[F];
            a = J(h);
            h = +!!(h & 512) - 1;
            var k;
            for (let r = 0; r < d.length; r++) {
                var l = d[r];
                if (l < a) {
                    l += h;
                    var u = e[l];
                    null == u ? e[l] = c ? M : H() : c && u !== M && G(u)
                } else {
                    if (!k) {
                        var v = void 0;
                        e.length && L(v = e[e.length - 1]) ? k = v : e.push(k = {})
                    }
                    u = k[l];
                    null == k[l] ? k[l] = c ? M : H() : c && u !== M && G(u)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let da, ea;
        if (L(k = b[d - 1])) {
            a: {
                var t = k;v = {};e = !1;
                for (let r in t) c = t[r],
                Array.isArray(c) && c != c && (e = !0),
                null != c ? v[r] = c : e = !0;
                if (e) {
                    for (let r in v) {
                        t = v;
                        break a
                    }
                    t = null
                }
            }
            t != k && (da = !0);d--
        }
        for (; 0 < d; d--) {
            k = b[d - 1];
            if (null != k) break;
            ea = !0
        }
        if (!da && !ea) return b;
        var Q;
        f ? Q = b : Q = Array.prototype.slice.call(b, 0, d);
        b = Q;
        f && (b.length = d);
        t && b.push(t);
        return b
    };

    function ka(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b[F] |= 32;
                b = R(a, b)
            }
            return b
        }
    };
    var la = class extends V {};
    la.m = [17];
    var ma = class extends V {};
    ma.m = [76, 27];
    var na = class extends V {};
    na.m = [8];
    var oa = ka(class extends V {});
    var pa = class extends V {},
        qa = ka(pa);
    pa.m = [1, 2, 3];

    function W(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function X(a, b) {
        a = a.body;
        var c = {
            detail: void 0
        };
        let d;
        "function" === typeof window.CustomEvent ? d = new CustomEvent(b, c) : (d = document.createEvent("CustomEvent"), d.initCustomEvent(b, !!c.bubbles, !!c.cancelable, c.detail));
        a.dispatchEvent(d)
    }
    var ra = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            W(a, "sampling_mod");
            var b = W(a, "namespace");
            if (!b) {
                b = "ns-" + (0, Math.random)().toString(36).substr(2, 5);
                a: {
                    var c = a.getElementsByTagName("META");
                    for (let d = 0; d < c.length; ++d)
                        if ("namespace" === c[d].getAttribute("name") && c[d].getAttribute("index") === (0).toString()) {
                            c[d].setAttribute("content", b);
                            break a
                        }
                    c = a.querySelector("#mys-meta");c || (c = document.createElement("div"), c.id = "mys-meta", c.style.position = "absolute", c.style.display = "none", a.appendChild(c));a = document.createElement("META");
                    a.setAttribute("name", "namespace");a.setAttribute("content", b);a.setAttribute("index", (0).toString());c.appendChild(a)
                }
            }
            if (!(0 < this.g.length)) {
                a = W(this.body, "environment");
                for (const d of a.split("|")) d && this.g.push(d)
            }
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function sa(a) {
        var b = document;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };

    function ta(a) {
        if (1 >= a.i.offsetWidth || 1 >= a.i.offsetHeight) return !1;
        a.g.remove();
        X(a.context, "spanReady");
        return !0
    }
    var ua = class {
        constructor(a) {
            this.context = a;
            this.config = {
                A: !1,
                v: 100
            };
            this.i = sa("SPAN");
            this.g = sa("DIV");
            this.i.style.fontSize = "6px";
            this.i.textContent = "go";
            this.g.style.position = "absolute";
            this.g.style.top = "100%";
            this.g.style.left = "100%";
            this.g.style.width = "1px";
            this.g.style.height = "0";
            this.g.style.overflow = "hidden";
            this.g.style.visibility = "hidden";
            this.g.appendChild(this.i)
        }
        wait() {
            if (!this.config.A && (X(this.context, "spanStart"), this.context.body.appendChild(this.g), !ta(this))) return new Promise(a => {
                const b = setInterval(() => {
                    ta(this) && (clearInterval(b), a())
                }, this.config.v)
            })
        }
    };
    var va = class {
        constructor(a, b) {
            this.context = a;
            this.config = b;
            this.g = U(b, ma, 1);
            U(b, na, 12);
            U(this.g, la, 10)
        }
    };

    function wa(a) {
        a.l.length = 0;
        a.i = !0
    }

    function xa(a, b) {
        a.g = !0;
        const c = () => {
            a.i = !1;
            const d = a.l.shift();
            return void 0 === d ? (a.g = !1, Promise.resolve()) : xa(a, d())
        };
        return b ? b.then(c, () => {
            if (a.i) return c();
            a.g = !1;
            return Promise.reject()
        }) : c()
    }

    function ya(a, b) {
        for (const c of b) a.l.push(c);
        if (!a.g) return xa(a)
    }
    var za = class {
        constructor() {
            this.i = this.g = !1;
            this.l = []
        }
    };

    function Aa(a) {
        wa(a.l);
        return ya(a.l, [() => {
            if (!a.s) {
                var b = W(a.context.body, "render_config") || "[]";
                b = oa(b);
                b = new va(a.context, b);
                a.s = b
            }
            b = (new ua(a.context)).wait();
            X(a.context, "browserStart");
            X(a.context, "browserStartEnd");
            a.g &= -31;
            a.g |= 2;
            return b
        }, () => {
            X(a.context, "browserReady");
            X(a.context, "browserReadyEnd");
            a.g |= 4;
            X(a.context, "overallReady")
        }, () => {
            X(a.context, "browserQuiet");
            X(a.context, "browserQuietEnd");
            a.g |= 8
        }])
    }

    function Ba(a) {
        qa(W(a.context.body, "engine_msg") || "[]");
        return Aa(a) || Promise.resolve()
    }
    var Y = class {
        constructor(a, b) {
            this.l = new za;
            this.g = 0;
            this.context = new ra(b)
        }
        u() {
            return this.g
        }
        i() {
            this.g &= -31;
            this.g |= 1;
            let a = 0;
            const b = this.context.body;
            b.addEventListener("browserRender", () => {
                ++a;
                if (1 === a) X(this.context, "overallStart"), Ba(this).then(() => {
                    X(this.context, "overallQuiet")
                });
                else {
                    var c = b.clientHeight;
                    b.clientWidth && c && Ba(this)
                }
            })
        }
    };
    let Z;
    m("mys.engine.init", (a, b) => {
        Z = new Y(a, b);
        Z.i()
    });
    m("mys.engine.stage", () => {
        let a;
        return (null == (a = Z) ? void 0 : a.g) || 0
    });
    m("mys.Engine", Y);
    m("mys.Engine.prototype.i", Y.prototype.i);
    m("mys.Engine.prototype.s", Y.prototype.u);
}).call(this);