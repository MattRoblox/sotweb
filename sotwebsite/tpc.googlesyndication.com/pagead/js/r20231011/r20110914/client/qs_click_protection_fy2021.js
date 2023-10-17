(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var l = this || self;

    function aa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ba(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function q(a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return q.apply(null, arguments)
    }

    function ca(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.O = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.P = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    };
    var da, r;
    a: {
        for (var ea = ["CLOSURE_FLAGS"], w = l, ka = 0; ka < ea.length; ka++)
            if (w = w[ea[ka]], null == w) {
                r = null;
                break a
            }
        r = w
    }
    var la = r && r[610401301];
    da = null != la ? la : !1;
    var x;
    const ma = l.navigator;
    x = ma ? ma.userAgentData || null : null;

    function na(a) {
        return da ? x ? x.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function y(a) {
        var b;
        a: {
            if (b = l.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function A() {
        return da ? !!x && 0 < x.brands.length : !1
    }

    function oa() {
        return A() ? na("Chromium") : (y("Chrome") || y("CriOS")) && !(A() ? 0 : y("Edge")) || y("Silk")
    };

    function B(a, b) {
        Array.prototype.forEach.call(a, b, void 0)
    };
    !y("Android") || oa();
    oa();
    y("Safari") && (oa() || (A() ? 0 : y("Coast")) || (A() ? 0 : y("Opera")) || (A() ? 0 : y("Edge")) || (A() ? na("Microsoft Edge") : y("Edg/")) || A() && na("Opera"));

    function C(a) {
        return Array.prototype.slice.call(a)
    };
    const D = Symbol();

    function pa(a) {
        const b = a[D] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = C(a)), a[D] = b | 1)
    }

    function qa() {
        var a = [];
        a[D] |= 1;
        return a
    }

    function ra(a, b) {
        b[D] = (a | 0) & -255
    }

    function sa(a, b) {
        b[D] = (a | 34) & -221
    }

    function E(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var F = {};

    function G(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var H;
    const ta = [];
    ta[D] = 55;
    H = Object.freeze(ta);

    function ua(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function I(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function va(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.G === F) return a;
        if (d) {
            var e = d = a[D] | 0;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && (a[D] = e);
            return new b(a)
        }
    };
    let wa;

    function xa(a) {
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

    function ya(a, b, c) {
        a = C(a);
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

    function Ba(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[D] | 0) & 1 ? void 0 : f && (a[D] | 0) & 2 ? a : Ca(a, b, c, void 0 !== d, e, f);
            else if (G(a)) {
                const g = {};
                for (let h in a) g[h] = Ba(a[h], b, c, d, e, f);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Ca(a, b, c, d, e, f) {
        const g = d || c ? a[D] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = C(a);
        for (let h = 0; h < a.length; h++) a[h] = Ba(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function Da(a) {
        return a.G === F ? a.toJSON() : xa(a)
    };

    function Ea(a, b, c = sa) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[D] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[D] = (d | 34) & -5, a) : Ca(a, Ea, d & 4 ? sa : c, !0, !1, !0)
            }
            a.G === F && (c = a.l, d = c[D], a = d & 2 ? a : Fa(a, c, d, !0));
            return a
        }
    }

    function Fa(a, b, c, d) {
        a = a.constructor;
        wa = b = Ga(b, c, d);
        b = new a(b);
        wa = void 0;
        return b
    }

    function Ga(a, b, c) {
        const d = c || b & 2 ? sa : ra,
            e = !!(b & 32);
        a = ya(a, b, f => Ea(f, e, d));
        a[D] = a[D] | 32 | (c ? 2 : 0);
        return a
    }

    function Ha(a) {
        const b = a.l,
            c = b[D];
        return c & 2 ? Fa(a, b, c, !1) : a
    };

    function J(a, b) {
        a = a.l;
        return Ia(a, a[D], b)
    }

    function Ia(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= E(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function K(a, b, c, d) {
        var e = E(b);
        if (1 >= e || d) {
            d = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == c) return;
                e = a[e + (+!!(b & 512) - 1)] = {};
                d |= 256
            }
            e[1] = c;
            d !== b && (a[D] = d)
        } else a[1 + (+!!(b & 512) - 1)] = c, b & 256 && (a = a[a.length - 1], 1 in a && delete a[1])
    }

    function Ja(a) {
        var b = a.l,
            c = b[D],
            d = Ia(b, c, 1, !1);
        const e = va(d, Ka, c);
        e !== d && null != e && K(b, c, e, !1);
        b = e;
        if (null == b) return b;
        a = a.l;
        c = a[D];
        c & 2 || (d = Ha(b), d !== b && (b = d, K(a, c, b, !1)));
        return b
    }

    function La(a) {
        var b = a.l,
            c = b[D];
        a = !!(c & 2);
        var d = a ? 1 : 2,
            e = Ma,
            f = !!(c & 2),
            g = Ia(b, c, 1);
        Array.isArray(g) || (g = H);
        var h = g[D] | 0;
        h & 1 || (h |= 1, g[D] = h);
        c & 2 ? h & 2 || (g[D] |= 34) : h & 32 && !(h & 2) && (g[D] &= -33);
        if ((h = g === H) && 2 !== d) b = g;
        else if (!h && (g[D] | 0) & 4) 3 !== d && (f ? 2 === d && (d = g[D] | 0, g = C(g), g[D] = d, K(b, c, g)) : (e = Object.isFrozen(g), 1 === d ? e || Object.freeze(g) : (d = g[D] | 0, f = d & -33, e || d & 2 ? (g = C(g), g[D] = f & -3, K(b, c, g)) : d !== f && (g[D] = f)))), b = g;
        else {
            var k = g;
            g = !!(c & 2);
            h = !!((k[D] | 0) & 2);
            f = k;
            !g && h && (k = C(k));
            h = h || void 0;
            var n = c | (h ? 2 : 0),
                m = h;
            h = !1;
            let p = 0,
                t = 0;
            for (; p < k.length; p++) {
                const v = va(k[p], e, n);
                if (!(v instanceof e)) continue;
                const u = !!((v.l[D] | 0) & 2);
                m = m || u;
                h = h || !u;
                k[t++] = v
            }
            t < p && (k.length = t);
            e = k;
            k = e[D] | 0;
            n = k | 5;
            m = m ? n & -9 : n | 8;
            m = h ? m & -17 : m | 16;
            k != m && (Object.isFrozen(e) && (e = C(e)), e[D] = m);
            k = e;
            f !== k && K(b, c, k);
            (g && 2 !== d || 1 === d) && Object.freeze(k);
            b = k
        }
        if (!(a || (b[D] | 0) & 8)) {
            for (a = 0; a < b.length; a++) c = b[a], d = Ha(c), c !== d && (b[a] = d);
            b[D] |= 8
        }
        return b
    }

    function L(a, b) {
        a = J(a, b);
        return (null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0) ? ? !1
    }

    function M(a, b) {
        return ua(J(a, b)) ? ? 0
    };
    var O = class {
        constructor(a) {
            a: {
                null == a && (a = wa);wa = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[D] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (G(d)) {
                            b |= 256;
                            const f = +!!(b & 512) - 1;
                            e -= f;
                            if (1024 <= e) {
                                e = 1023 + f;
                                const g = c.length;
                                for (let h = e; h < g; h++) {
                                    const k = c[h];
                                    null != k && k !== d && (d[h - f] = k)
                                }
                                c.length = e + 1;
                                c[e] = d;
                                e = 1023
                            }
                            b = b & -2095105 | (e & 1023) << 11
                        }
                    }
                }
                a[D] = b
            }
            this.l = a
        }
        toJSON() {
            var a = Ca(this.l, Da, void 0, void 0, !1, !1);
            return Na(this, a, !0)
        }
    };
    O.prototype.G = F;
    O.prototype.toString = function() {
        return Na(this, this.l, !1).toString()
    };

    function Na(a, b, c) {
        var d = a.constructor.N,
            e = E((c ? a.l : b)[D]),
            f = !1;
        if (d) {
            if (!c) {
                b = C(b);
                var g;
                if (b.length && G(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = a.l[D];
            a = E(g);
            g = +!!(g & 512) - 1;
            var h;
            for (let z = 0; z < d.length; z++) {
                var k = d[z];
                if (k < a) {
                    k += g;
                    var n = e[k];
                    null == n ? e[k] = c ? H : qa() : c && n !== H && pa(n)
                } else {
                    if (!h) {
                        var m = void 0;
                        e.length && G(m = e[e.length - 1]) ? h = m : e.push(h = {})
                    }
                    n = h[k];
                    null == h[k] ? h[k] = c ? H : qa() : c && n !== H && pa(n)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let p,
            t;
        if (G(h = b[d - 1])) {
            a: {
                var v = h;m = {};e = !1;
                for (let z in v) c = v[z],
                Array.isArray(c) && c != c && (e = !0),
                null != c ? m[z] = c : e = !0;
                if (e) {
                    for (let z in m) {
                        v = m;
                        break a
                    }
                    v = null
                }
            }
            v != h && (p = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            t = !0
        }
        if (!p && !t) return b;
        var u;
        f ? u = b : u = Array.prototype.slice.call(b, 0, d);
        b = u;
        f && (b.length = d);
        v && b.push(v);
        return b
    };
    var Ma = class extends O {};
    var Ka = class extends O {};
    Ka.N = [1];
    var Oa = class extends O {};

    function Pa() {}

    function Qa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Ra = {
            capture: !0
        },
        Sa = {
            passive: !0
        },
        Ta = Qa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                l.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Ua(a) {
        return a ? a.passive && Ta() ? a : a.capture || !1 : !1
    }

    function P(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Ua(d))
    };
    var Q = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    Q.prototype.i = !0;
    Q.prototype.h = function() {
        return this.g.toString()
    };
    var Va = {},
        Wa = new Q("about:invalid#zClosurez", Va);

    function Xa(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) Xa(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    class Ya {
        constructor(a) {
            this.M = a
        }
    }

    function R(a) {
        return new Ya(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const Za = new Ya(a => /^[^:]*([/?#]|$)/.test(a));
    var $a = R("http"),
        ab = R("https"),
        bb = R("ftp"),
        cb = R("mailto");
    const db = [R("data"), $a, ab, cb, bb, Za];

    function eb(a = db) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Ya && c.M("#")) return new Q("#", Va)
        }
    }

    function fb(a = db) {
        return eb(a) || Wa
    };

    function gb(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    let hb = [];
    const ib = () => {
        const a = hb;
        hb = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var jb = a => {
        var b = S;
        "complete" === b.readyState || "interactive" === b.readyState ? (hb.push(a), 1 == hb.length && (window.Promise ? Promise.resolve().then(ib) : window.setImmediate ? setImmediate(ib) : setTimeout(ib, 0))) : b.addEventListener("DOMContentLoaded", a)
    };

    function kb(a = document) {
        return a.createElement("img")
    };

    function lb(a, b, c = null, d = !1) {
        mb(a, b, c, d)
    }

    function mb(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = kb(a.document);
        if (c || d) {
            const f = g => {
                c && c(g);
                if (d) {
                    g = a.google_image_requests;
                    var h = Array.prototype.indexOf.call(g, e, void 0);
                    0 <= h && Array.prototype.splice.call(g, h, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, Ua());
                e.removeEventListener && e.removeEventListener("error", f, Ua())
            };
            P(e, "load", f);
            P(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };

    function nb(a = null) {
        return a && "23" === a.getAttribute("data-jc") ? a : document.querySelector('[data-jc="23"]')
    }

    function ob() {
        if (!(.01 < Math.random())) {
            var a = nb(document.currentScript);
            a = a && "true" === a.getAttribute("data-jc-rcd") ? "pagead2.googlesyndication-cn.com" : "pagead2.googlesyndication.com";
            var b = (b = nb(document.currentScript)) && b.getAttribute("data-jc-version") || "unknown";
            a = `https://${a}/pagead/gen_204?id=jca&jc=${23}&version=${b}&sample=${.01}`;
            b = window;
            var c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : lb(b, a, void 0, !1)
        }
    };
    var S = document,
        T = window;
    var pb = (a = []) => {
        l.google_logging_queue || (l.google_logging_queue = []);
        l.google_logging_queue.push([12, a])
    };
    const qb = [$a, ab, cb, bb, Za, R("market"), R("itms"), R("intent"), R("itms-appss")];
    var rb = () => {
        var a = `${"http:"===T.location.protocol?"http:":"https:"}//${"pagead2.googlesyndication.com"}/pagead/gen_204`;
        return b => {
            b = {
                id: "unsafeurl",
                ctx: 625,
                url: b
            };
            var c = [];
            for (d in b) Xa(d, b[d], c);
            var d = c.join("&");
            if (d) {
                b = a.indexOf("#");
                0 > b && (b = a.length);
                c = a.indexOf("?");
                if (0 > c || c > b) {
                    c = b;
                    var e = ""
                } else e = a.substring(c + 1, b);
                b = [a.slice(0, c), e, a.slice(b)];
                c = b[1];
                b[1] = d ? c ? c + "&" + d : d : c;
                d = b[0] + (b[1] ? "?" + b[1] : "") + b[2]
            } else d = a;
            navigator.sendBeacon && navigator.sendBeacon(d, "")
        }
    };
    var sb = () => {
            var a = S;
            try {
                return a.querySelectorAll("*[data-ifc]")
            } catch (b) {
                return []
            }
        },
        tb = (a, b) => {
            a && gb(b, (c, d) => {
                a.style[d] = c
            })
        },
        ub = a => {
            var b = S.body;
            const c = document.createDocumentFragment(),
                d = a.length;
            for (let e = 0; e < d; ++e) c.appendChild(a[e]);
            b.appendChild(c)
        };
    let vb = null;

    function wb() {
        const a = l.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function xb() {
        const a = l.performance;
        return a && a.now ? a.now() : null
    };
    var yb = class {
        constructor(a, b) {
            var c = xb() || wb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const U = l.performance,
        zb = !!(U && U.mark && U.measure && U.clearMarks),
        V = Qa(() => {
            var a;
            if (a = zb) {
                var b;
                if (null === vb) {
                    vb = "";
                    try {
                        a = "";
                        try {
                            a = l.top.location.hash
                        } catch (c) {
                            a = l.location.hash
                        }
                        a && (vb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = vb;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Ab(a) {
        a && U && V() && (U.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), U.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Bb {
        constructor() {
            var a = window;
            this.g = [];
            this.i = a || l;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.g = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.h = V() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.h) return null;
            a = new yb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            U && V() && U.mark(b);
            return a
        }
        end(a) {
            if (this.h && "number" === typeof a.value) {
                a.duration = (xb() || wb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                U && V() && U.mark(b);
                !this.h || 2048 <
                    this.g.length || this.g.push(a)
            }
        }
    };

    function Cb(a, b, c, d, e) {
        const f = [];
        gb(a, function(g, h) {
            (g = Db(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Db(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Db(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Cb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Eb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Fb(a) {
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=fccs&",
            c = Eb(a) - 24;
        if (0 > c) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        let d = null,
            e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!c) {
                    d = null == d ? g : d;
                    break
                }
                let n = Cb(h[k], a.i, ",$");
                if (n) {
                    n = e + n;
                    if (c >= n.length) {
                        c -= n.length;
                        b += n;
                        e = a.i;
                        break
                    }
                    d = null == d ? g : d
                }
            }
        }
        a = "";
        null != d && (a = e + "trn=" + d);
        return b + a
    }
    class Gb {
        constructor() {
            this.i = "&";
            this.h = {};
            this.m = 0;
            this.g = []
        }
    };

    function Hb() {
        this.h = this.h;
        this.i = this.i
    }
    Hb.prototype.h = !1;

    function Ib(a) {
        a.h || (a.h = !0, a.m())
    }
    Hb.prototype.m = function() {
        if (this.i)
            for (; this.i.length;) this.i.shift()()
    };
    class Jb {};

    function Kb() {
        var a = Lb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }

    function Mb(a) {
        if (1 > Lb.g) try {
            let b;
            a instanceof Gb ? b = a : (b = new Gb, gb(a, (d, e) => {
                var f = b;
                const g = f.m++,
                    h = {};
                h[e] = d;
                d = [h];
                f.g.push(g);
                f.h[g] = d
            }));
            const c = Fb(b);
            c && lb(l, c)
        } catch (b) {}
    }
    class Nb {
        constructor() {
            this.g = Math.random()
        }
    };
    let Lb;
    const W = new Bb;
    var Ob = () => {
        window.google_measure_js_timing || (W.h = !1, W.g != W.i.google_js_reporting_queue && (V() && B(W.g, Ab), W.g.length = 0))
    };
    (a => {
        Lb = a ? ? new Nb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Kb();
        "complete" == window.document.readyState ? Ob() : W.h && P(window, "load", () => {
            Ob()
        })
    })();
    var Pb = a => {
        P(T, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "ig" !== c.googMsgType || a(c, b)
        })
    };

    function X(a, b, c) {
        Hb.call(this);
        this.o = a;
        this.C = b || 0;
        this.s = c;
        this.v = q(this.A, this)
    }
    ca(X, Hb);
    X.prototype.g = 0;
    X.prototype.m = function() {
        X.O.m.call(this);
        this.isActive() && l.clearTimeout(this.g);
        this.g = 0;
        delete this.o;
        delete this.s
    };
    X.prototype.start = function(a) {
        this.isActive() && l.clearTimeout(this.g);
        this.g = 0;
        var b = this.v;
        a = void 0 !== a ? a : this.C;
        if ("function" !== typeof b)
            if (b && "function" == typeof b.handleEvent) b = q(b.handleEvent, b);
            else throw Error("Invalid listener argument");
        this.g = 2147483647 < Number(a) ? -1 : l.setTimeout(b, a || 0)
    };
    X.prototype.isActive = function() {
        return 0 != this.g
    };
    X.prototype.A = function() {
        this.g = 0;
        this.o && this.o.call(this.s)
    };
    const Qb = {
            display: "inline-block",
            position: "absolute"
        },
        Rb = {
            display: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
        },
        Y = (a, b) => {
            a && (a.style.display = b ? "inline-block" : "none")
        };

    function Sb(a = "") {
        const b = {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        };
        a && (a = a.split(","), 4 === a.length && a.reduce((c, d) => c && !isNaN(+d), !0) && ([b.top, b.right, b.bottom, b.left] = a.map(c => +c)));
        return b
    }

    function Tb(a, b, c = 2147483647) {
        const d = S.createElement("div");
        tb(d, { ...Qb,
            "z-index": String(c),
            ...b
        });
        L(a.data, 10) && P(d, "click", Pa);
        if (L(a.data, 11)) {
            a = S.createElement("a");
            b = rb();
            c = fb(qb);
            c === Wa && b("#");
            b = c;
            if (b instanceof Q) var e = b;
            else if (b instanceof Q) e = b;
            else {
                b = "object" == typeof b && b.i ? b.h() : String(b);
                b: {
                    try {
                        e = new URL(b)
                    } catch (f) {
                        e = "https:";
                        break b
                    }
                    e = e.protocol
                }
                "javascript:" === e && (b = "about:invalid#zClosurez");
                e = new Q(b, Va)
            }
            a.href = e instanceof Q && e.constructor === Q ? e.g : "type_error:SafeUrl";
            a.appendChild(d);
            return a
        }
        return d
    }

    function Ub(a, b) {
        switch (J(b.j, 5) ? ? 1) {
            case 2:
                T.AFMA_Communicator ? .addEventListener ? .("onshow", () => {
                    Z(a, b)
                });
                break;
            case 10:
                P(T, "i-creative-view", () => {
                    Z(a, b)
                });
                break;
            case 4:
                P(S, "DOMContentLoaded", () => {
                    Z(a, b)
                });
                break;
            case 8:
                Pb(c => {
                    c.rr && Z(a, b)
                });
                break;
            case 9:
                if ("IntersectionObserver" in T) {
                    const c = new IntersectionObserver(d => {
                        for (const e of d)
                            if (0 < e.intersectionRatio) {
                                Z(a, b);
                                break
                            }
                    });
                    c.observe(S.body);
                    a.L.push(c)
                }
                break;
            case 11:
                T.AFMA_Communicator ? .addEventListener ? .("onAdVisibilityChanged", () => {
                    Z(a, b)
                })
        }
    }

    function Vb(a, b) {
        b = Sb(b);
        const c = M(a.data, 9);
        a.m = [{
            width: "100%",
            height: b.top + c + "px",
            top: -c + "px",
            left: "0"
        }, {
            width: b.right + c + "px",
            height: "100%",
            top: "0",
            right: -c + "px"
        }, {
            width: "100%",
            height: b.bottom + c + "px",
            bottom: -c + "px",
            left: "0"
        }, {
            width: b.left + c + "px",
            height: "100%",
            top: "0",
            left: -c + "px"
        }].map(d => Tb(a, d, 9019))
    }

    function Wb(a) {
        var b = 0;
        for (const d of a.K) {
            const e = d.j,
                f = a.A[J(e, 5) ? ? 1];
            d.u || void 0 === f || (b = Math.max(b, f + M(e, 2)))
        }
        a.o && Ib(a.o);
        b -= Date.now();
        const c = a.h;
        0 < b ? (Y(c, !0), a.o = new X(() => {
            Y(c, !1)
        }, b), a.o.start()) : Y(c, !1)
    }

    function Z(a, b) {
        b.u || (a.A[J(b.j, 5) ? ? 1] = Date.now(), L(b.j, 9) && (a.K.push(b), Wb(a)))
    }

    function Xb(a, b, c) {
        if (!a.g || !a.v || 300 <= b.timeStamp - a.g.timeStamp) return !1;
        const d = new Map;
        B(a.v.changedTouches, e => {
            d.set(e.identifier, {
                x: e.clientX,
                y: e.clientY
            })
        });
        b = M(c.j, 11) || 10;
        for (const e of a.g.changedTouches)
            if (a = d.get(e.identifier), !a || Math.abs(a.x - e.clientX) > b || Math.abs(a.y - e.clientY) > b) return !0;
        return !1
    }
    var Zb = class {
        constructor() {
            var a = Yb;
            this.m = [];
            this.o = this.h = null;
            this.K = [];
            this.data = null;
            this.C = [];
            this.i = [];
            this.s = [];
            this.A = {};
            this.L = [];
            this.v = this.g = null;
            this.H = "";
            this.I = "true" === a["send-fccs"];
            this.H = a.qid || ""
        }
        init(a) {
            pb([a]);
            this.data = new Oa(a);
            a = Ja(this.data);
            B(La(a), f => {
                this.s.push({
                    D: 0,
                    u: !1,
                    F: 0,
                    j: f,
                    B: -1
                })
            });
            this.i = sb();
            let b = !1;
            a = this.i.length;
            for (let f = 0; f < a; ++f) {
                var c = new Ka(JSON.parse(this.i[f].getAttribute("data-ifc") || "[]"));
                B(La(c), g => {
                    this.s.push({
                        D: 0,
                        u: !1,
                        F: 0,
                        j: g,
                        B: f
                    });
                    1 === (J(g,
                        4) ? ? 1) && (b = !0)
                })
            }
            c = a = !1;
            let d = L(this.data, 12);
            for (var e of this.s) {
                const f = e.j;
                0 < M(f, 2) && 0 < (J(f, 5) ? ? 1) ? (!this.h && L(f, 9) && (this.h = Tb(this, Rb)), Ub(this, e)) : (I(J(f, 1)) ? ? "") && L(f, 9) && Vb(this, I(J(f, 1)) ? ? "");
                (I(J(f, 1)) ? ? "") && (a = !0);
                0 < M(f, 11) && (c = !0);
                L(f, 12) && (d = !0)
            }
            e = [];
            this.h && e.push(this.h);
            !b && e.push(...this.m);
            S.body && ub(e);
            L(this.data, 13) && jb(() => {
                const f = S.body.querySelectorAll(".amp-fcp, .amp-bcp");
                for (let h = 0; h < f.length; ++h) {
                    var g = (g = f[h]) ? T.getComputedStyle(g).getPropertyValue("position") : void 0;
                    "absolute" === g && Y(f[h], !1)
                }
            });
            P(S, "click", f => {
                if (this.I) {
                    var g = {
                        cx: f.clientX,
                        cy: f.clientY,
                        et: Date.now(),
                        qid: this.H
                    };
                    var h = Jb;
                    var k = "J";
                    h.J && h.hasOwnProperty(k) || (k = new h, h.J = k);
                    h = [];
                    !g.eid && h.length && (g.eid = h.toString());
                    Mb(g);
                    this.I = !1
                }
                if (!1 === f.isTrusted && L(this.data, 15)) f.preventDefault ? f.preventDefault() : f.returnValue = !1, f.stopImmediatePropagation(), ob();
                else {
                    g = -1;
                    h = [];
                    for (var n of this.s) {
                        k = n.B;
                        var m = -1 !== k;
                        if (!(M(n.j, 3) <= g || n.u || m && !1 === h[k])) {
                            var p = !m || h[k] || this.i[k].contains(f.target);
                            m &&
                                p && (h[k] = !0);
                            if (k = p)
                                if (k = f, m = n.j, 0 < M(m, 2) && 0 < (J(m, 5) ? ? 1)) k = this.A[J(m, 5) ? ? 1], k = void 0 !== k && Date.now() < k + M(m, 2);
                                else if (I(J(m, 1)) ? ? "") {
                                {
                                    m = (0 <= n.B ? this.i[n.B] : S.body).getBoundingClientRect();
                                    p = Number;
                                    var t = (t = S.body) ? T.getComputedStyle(t).getPropertyValue("zoom") : void 0;
                                    const N = p(t || "1"),
                                        [cc, dc] = [k.clientX, k.clientY],
                                        [fa, ha, za, Aa] = [cc / N - m.left, dc / N - m.top, m.width, m.height];
                                    if (!(0 < za && 0 < Aa) || isNaN(fa) || isNaN(ha) || 0 > fa || 0 > ha) k = !1;
                                    else {
                                        p = Sb(I(J(n.j, 1)) ? ? "");
                                        t = !(fa >= p.left && za - fa > p.right && ha >= p.top && Aa -
                                            ha > p.bottom);
                                        var v = L(n.j, 12);
                                        if (this.g && (L(this.data, 12) || v) && 300 > k.timeStamp - this.g.timeStamp) {
                                            k = this.g.changedTouches[0];
                                            const [ia, ja] = [k.clientX / N - m.left, k.clientY / N - m.top];
                                            !isNaN(ia) && !isNaN(ja) && 0 <= ia && 0 <= ja && (t = (t = L(this.data, 16) || v ? t : !1) || !(ia >= p.left && za - ia > p.right && ja >= p.top && Aa - ja > p.bottom))
                                        }
                                        k = t
                                    }
                                }
                            } else k = 0 < M(m, 11) ? Xb(this, k, n) : !0;
                            if (k) {
                                var u = n;
                                g = M(n.j, 3)
                            }
                        }
                    }
                    if (u) switch (n = u.j, J(n, 4) ? ? 1) {
                        case 2:
                        case 3:
                            f.preventDefault ? f.preventDefault() : f.returnValue = !1;
                            g = Date.now();
                            500 < g - u.F && (u.F = g, ++u.D);
                            g = u.j;
                            if (M(g, 8) && u.D >= M(g, 8))
                                if (u.u = !0, this.h && 0 < M(g, 2)) Wb(this);
                                else if (0 < this.m.length && (I(J(g, 1)) ? ? ""))
                                for (var z of this.m) Y(z, !1);
                            ob();
                            z = n.toJSON();
                            for (const N of this.C) N(f, z)
                    }
                }
            }, Ra);
            c && P(S, "touchstart", f => {
                this.v = f
            }, Sa);
            (a && d || c) && P(S, "touchend", f => {
                this.g = f
            }, Sa)
        }
        registerCallback(a) {
            this.C.push(a)
        }
    };
    const $b = nb(document.currentScript);
    if (null == $b) throw Error("JSC not found 23");
    var Yb;
    const ac = {},
        bc = $b.attributes;
    for (let a = bc.length - 1; 0 <= a; a--) {
        const b = bc[a].name;
        0 === b.indexOf("data-jcp-") && (ac[b.substring(9)] = bc[a].value)
    }
    Yb = ac;
    const ec = window;
    ec.googqscp = new Zb;
    Yb["init-data"] && ec.googqscp.init(JSON.parse(Yb["init-data"]));
}).call(this);