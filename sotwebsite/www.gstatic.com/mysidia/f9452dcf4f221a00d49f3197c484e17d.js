(function() {
    'use strict';
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var g = this || self;

    function aa(a) {
        g.setTimeout(() => {
            throw a;
        }, 0)
    };
    var m, n;
    a: {
        for (var p = ["CLOSURE_FLAGS"], q = g, u = 0; u < p.length; u++)
            if (q = q[p[u]], null == q) {
                n = null;
                break a
            }
        n = q
    }
    var v = n && n[610401301];
    m = null != v ? v : !1;
    var y;
    const z = g.navigator;
    y = z ? z.userAgentData || null : null;

    function A(a) {
        return m ? y ? y.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function B(a) {
        var b;
        a: {
            if (b = g.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function C() {
        return m ? !!y && 0 < y.brands.length : !1
    }

    function D() {
        return C() ? A("Chromium") : (B("Chrome") || B("CriOS")) && !(C() ? 0 : B("Edge")) || B("Silk")
    };
    !B("Android") || D();
    D();
    B("Safari") && (D() || (C() ? 0 : B("Coast")) || (C() ? 0 : B("Opera")) || (C() ? 0 : B("Edge")) || (C() ? A("Microsoft Edge") : B("Edg/")) || C() && A("Opera"));

    function E(a) {
        return Array.prototype.slice.call(a)
    };
    const F = Symbol();

    function G(a) {
        const b = a[F] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = E(a)), a[F] = b | 1)
    }

    function ba() {
        var a = [];
        a[F] |= 1;
        return a
    }

    function ca(a, b) {
        b[F] = (a | 0) & -255
    }

    function H(a, b) {
        b[F] = (a | 34) & -221
    }

    function I(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var J = {};

    function K(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var L;
    const da = [];
    da[F] = 55;
    L = Object.freeze(da);

    function ea(a) {
        if (null == a) return a;
        if ("boolean" === typeof a || "number" === typeof a) return !!a
    }

    function fa(a) {
        if (!Number.isFinite(a)) {
            const b = Error();
            b.__closure__error__context__984382 || (b.__closure__error__context__984382 = {});
            b.__closure__error__context__984382.severity = "incident";
            aa(b)
        }
        return a
    };
    let M;

    function N(a, b) {
        M = b;
        a = new a(b);
        M = void 0;
        return a
    };

    function ha(a) {
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

    function ia(a, b, c) {
        a = E(a);
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

    function la(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[F] | 0) & 1 ? void 0 : f && (a[F] | 0) & 2 ? a : O(a, b, c, void 0 !== d, e, f);
            else if (K(a)) {
                const k = {};
                for (let h in a) k[h] = la(a[h], b, c, d, e, f);
                a = k
            } else a = b(a, d);
            return a
        }
    }

    function O(a, b, c, d, e, f) {
        const k = d || c ? a[F] | 0 : 0;
        d = d ? !!(k & 32) : void 0;
        a = E(a);
        for (let h = 0; h < a.length; h++) a[h] = la(a[h], b, c, d, e, f);
        c && c(k, a);
        return a
    }

    function ma(a) {
        return a.m === J ? a.toJSON() : ha(a)
    };

    function na(a, b, c = H) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[F] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[F] = d | 34, d & 4 && Object.freeze(a), a) : O(a, na, d & 4 ? H : c, !0, !1, !0)
            }
            a.m === J && (c = a.j, d = c[F], a = d & 2 ? a : N(a.constructor, oa(c, d, !0)));
            return a
        }
    }

    function oa(a, b, c) {
        const d = c || b & 2 ? H : ca,
            e = !!(b & 32);
        a = ia(a, b, f => na(f, e, d));
        a[F] = a[F] | 32 | (c ? 2 : 0);
        return a
    };

    function pa(a) {
        a = a.j;
        return P(a, a[F], 16)
    }

    function P(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= I(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function Q(a, b, c, d) {
        var e = I(b);
        if (c >= e) {
            let f = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == d) return;
                e = a[e + (+!!(b & 512) - 1)] = {};
                f |= 256
            }
            e[c] = d;
            f !== b && (a[F] = f)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function qa(a, b, c) {
        var d = a.j,
            e = d[F],
            f = P(d, e, c, !1);
        var k = !1;
        if (null == f || "object" !== typeof f || (k = Array.isArray(f)) || f.m !== J)
            if (k) {
                let h = k = f[F] | 0;
                0 === h && (h |= e & 32);
                h |= e & 2;
                h !== k && (f[F] = h);
                b = new b(f)
            } else b = void 0;
        else b = f;
        b !== f && null != b && Q(d, e, c, b);
        d = b;
        if (null == d) return d;
        a = a.j;
        e = a[F];
        e & 2 || (f = d, b = f.j, k = b[F], f = k & 2 ? N(f.constructor, oa(b, k, !1)) : f, f !== d && (d = f, Q(a, e, c, d)));
        return d
    }

    function ra(a) {
        return null != a ? a : !1
    };
    var R = class {
        constructor(a) {
            a: {
                null == a && (a = M);M = void 0;
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
                        if (K(d)) {
                            b |= 256;
                            const f = +!!(b & 512) - 1;
                            e -= f;
                            if (1024 <= e) {
                                e = 1023 + f;
                                const k = c.length;
                                for (let h = e; h < k; h++) {
                                    const l = c[h];
                                    null != l && l !== d && (d[h - f] = l)
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
            var a = O(this.j, ma, void 0, void 0, !1, !1);
            return sa(this, a, !0)
        }
    };
    R.prototype.m = J;
    R.prototype.toString = function() {
        return sa(this, this.j, !1).toString()
    };

    function sa(a, b, c) {
        var d = a.constructor.o,
            e = I((c ? a.j : b)[F]),
            f = !1;
        if (d) {
            if (!c) {
                b = E(b);
                var k;
                if (b.length && K(k = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, k);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            k = a.j[F];
            a = I(k);
            k = +!!(k & 512) - 1;
            var h;
            for (let r = 0; r < d.length; r++) {
                var l = d[r];
                if (l < a) {
                    l += k;
                    var w = e[l];
                    null == w ? e[l] = c ? L : ba() : c && w !== L && G(w)
                } else {
                    if (!h) {
                        var x = void 0;
                        e.length && K(x = e[e.length - 1]) ? h = x : e.push(h = {})
                    }
                    w = h[l];
                    null == h[l] ? h[l] = c ? L : ba() : c && w !== L && G(w)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let ja,
            ka;
        if (K(h = b[d - 1])) {
            a: {
                var t = h;x = {};e = !1;
                for (let r in t) c = t[r],
                Array.isArray(c) && c != c && (e = !0),
                null != c ? x[r] = c : e = !0;
                if (e) {
                    for (let r in x) {
                        t = x;
                        break a
                    }
                    t = null
                }
            }
            t != h && (ja = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            ka = !0
        }
        if (!ja && !ka) return b;
        var T;
        f ? T = b : T = Array.prototype.slice.call(b, 0, d);
        b = T;
        f && (b.length = d);
        t && b.push(t);
        return b
    };

    function ta(a) {
        let b = 0;
        for (const c in a) b++
    };
    var ua = class extends R {};
    ua.o = [17];
    var va = class extends R {};
    va.o = [76, 27];
    var wa = function(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b[F] |= 32;
                b = N(a, b)
            }
            return b
        }
    }(class extends R {});
    let S = null;

    function xa() {
        const a = g.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function ya() {
        const a = g.performance;
        return a && a.now ? a.now() : null
    };
    var za = class {
        constructor(a, b) {
            var c = ya() || xa();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const U = g.performance,
        Aa = !!(U && U.mark && U.measure && U.clearMarks),
        V = function(a) {
            let b = !1,
                c;
            return function() {
                b || (c = a(), b = !0);
                return c
            }
        }(() => {
            var a;
            if (a = Aa) {
                var b;
                if (null === S) {
                    S = "";
                    try {
                        a = "";
                        try {
                            a = g.top.location.hash
                        } catch (c) {
                            a = g.location.hash
                        }
                        a && (S = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = S;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ba(a) {
        a && U && V() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Ca {
        constructor() {
            var a = window;
            this.g = [];
            this.v = a || g;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.l = V() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.l) return null;
            a = new za(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && V() && U.mark(b);
            return a
        }
        end(a) {
            if (this.l && "number" === typeof a.value) {
                a.duration = (ya() || xa()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && V() && U.mark(b);
                !this.l || 2048 <
                    this.g.length || this.g.push(a)
            }
        }
    };
    const W = new Ca;
    var Da = () => {
        window.google_measure_js_timing || (W.l = !1, W.g != W.v.google_js_reporting_queue && (V() && Array.prototype.forEach.call(W.g, Ba, void 0), W.g.length = 0))
    };
    "number" !== typeof window.google_srt && (window.google_srt = Math.random());
    if ("complete" == window.document.readyState) Da();
    else if (W.l) {
        var Ea = () => {
                Da()
            },
            X = window;
        X.addEventListener && X.addEventListener.call(X, "load", Ea, !1)
    };
    ta({
        L: 0,
        K: 1,
        H: 2,
        B: 3,
        I: 4,
        C: 5,
        J: 6,
        F: 7,
        G: 8,
        A: 9,
        D: 10,
        M: 11
    });
    ta({
        O: 0,
        P: 1,
        N: 2
    });

    function Y(a) {
        var b = new Fa,
            c = b.j;
        const d = c[F] | 0;
        if (b.j[F] & 2) throw Error();
        var e = d & 2;
        b = P(c, d, 1, !1);
        Array.isArray(b) || (b = L);
        const f = !!(d & 32);
        let k = b[F] | 0;
        0 === k && f && !e ? (k |= 33, b[F] = k) : k & 1 || (k |= 1, b[F] = k);
        e ? (k & 2 || (b[F] |= 34), Object.freeze(b)) : k & 2 && (b = E(b), e = 1, f && (e |= 32), b[F] = e, Q(c, d, 1, b));
        c = b;
        if (Array.isArray(a))
            for (var h = 0; h < a.length; h++) c.push(fa(a[h]));
        else
            for (h of a) c.push(fa(h))
    }
    var Fa = class extends R {
        constructor() {
            super()
        }
    };
    Fa.o = [1];
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2].reduce((a, b) => a + b);
    Y([1, 8, 10, 11, 12, 2, 3, 4, 5]);
    Y([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5]);
    Y([1, 6, 7, 8, 9, 10, 11, 12, 2, 3, 4, 5]);

    function Z(a, b) {
        a = a.getElementsByTagName("META");
        for (let c = 0; c < a.length; ++c)
            if (a[c].getAttribute("name") === b) return a[c].getAttribute("content") || "";
        return ""
    };

    function Ga(a) {
        if (!(0 < a.g.length)) {
            var b = Z(a.body, "environment");
            for (const c of b.split("|")) c && a.g.push(c)
        }
    }
    var Ha = class {
        constructor(a) {
            this.body = a;
            this.g = [];
            Z(a, "sampling_mod");
            var b = Z(a, "namespace");
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
            Ga(this)
        }
        addEventListener(a, b) {
            this.body.addEventListener(a, b)
        }
    };

    function Ia(a, b) {
        if (b) {
            b = JSON.parse(b);
            for (const c in b) b.hasOwnProperty(c) && a.set(c, b[c])
        }
    }
    var Ja = class {
        constructor() {
            this.g = {}
        }
        clear() {
            this.g = {}
        }
        set(a, b) {
            this.g[a] = b
        }
        get(a) {
            return this.g[a]
        }
    };

    function Ka({
        threshold: a,
        target: b,
        u: c,
        R: d
    }) {
        if (window.IntersectionObserver) {
            var e = !1;
            (new IntersectionObserver(f => {
                0 !== f.length && f[0].isIntersecting && (!e && c && c(), e = !0, d && d())
            }, {
                threshold: a
            })).observe(b)
        }
    };
    var La = class {
        constructor() {
            this.channel = 1;
            (this.g = !(!window.mys || !window.mys.pingback)) && this.setData(43, Date.now() - window.mys.pingback.getBaseTime())
        }
        setAttribute(a, b) {
            this.g && window.mys.pingback.setAttribute(a, b)
        }
        setData(a, b) {
            this.g && window.mys.pingback.setData(a, b, this.channel)
        }
        send(a) {
            this.g && window.mys.pingback.send(a)
        }
        tick(a, b) {
            this.g && (this.setData(a, Date.now() - window.mys.pingback.getBaseTime()), this.send(b))
        }
    };
    var Ma = class {
        constructor(a) {
            this.context = a;
            this.l = new Ja;
            this.pingback = new La
        }
        g() {}
    };
    var Na = class extends Ma {};
    var Oa = class extends Na {
        constructor(a) {
            super(a)
        }
        g() {
            Ka({
                threshold: .9,
                target: document.querySelector(".x-layout"),
                u: () => {
                    const a = document.querySelector(".x-layout");
                    a && a.classList.add("web-on-show")
                }
            })
        }
    };
    (function(a) {
        var b = document.getElementById("mys-content");
        if (b) {
            b = new Ha(b);
            var c = new a(b);
            Ia(c.l, Z(b.body, "runtime_data"));
            a = wa(Z(b.body, "render_config") || "[]");
            var d;
            Ga(b);
            0 <= b.g.indexOf("amp") || (null == (d = qa(qa(a, va, 1), ua, 10)) ? 0 : ra(ea(pa(d)))) || (d = mys.engine ? mys.engine.stage() : 0, 0 === (d & 1) && b.addEventListener("overallStart", () => {}), 0 !== (d & 4) && c.g(), b.addEventListener("browserStart", () => {}), b.addEventListener("browserReady", () => {
                c.g()
            }), b.addEventListener("browserQuiet", () => {}))
        }
    })(class extends Oa {});
}).call(this);