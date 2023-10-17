(function(sttc) {
    'use strict';
    var p, aa = {};
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var t = this || self;

    function ca(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function da(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function x(a) {
        return Object.prototype.hasOwnProperty.call(a, fa) && a[fa] || (a[fa] = ++ja)
    }
    var fa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ja = 0;

    function ka(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function la(a, b, c) {
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

    function y(a, b, c) {
        y = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
        return y.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function na(a) {
        return a
    };
    var oa;

    function pa(a) {
        t.setTimeout(() => {
            throw a;
        }, 0)
    };
    var qa, ra;
    a: {
        for (var sa = ["CLOSURE_FLAGS"], ta = t, ua = 0; ua < sa.length; ua++)
            if (ta = ta[sa[ua]], null == ta) {
                ra = null;
                break a
            }
        ra = ta
    }
    var va = ra && ra[610401301];
    qa = null != va ? va : !1;

    function wa() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var xa;
    const ya = t.navigator;
    xa = ya ? ya.userAgentData || null : null;

    function za(a) {
        return qa ? xa ? xa.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function A(a) {
        return -1 != wa().indexOf(a)
    };

    function Aa() {
        return qa ? !!xa && 0 < xa.brands.length : !1
    }

    function Ba() {
        return Aa() ? !1 : A("Trident") || A("MSIE")
    }

    function Ca() {
        !A("Safari") || Da() || (Aa() ? 0 : A("Coast")) || (Aa() ? 0 : A("Opera")) || (Aa() ? 0 : A("Edge")) || (Aa() ? za("Microsoft Edge") : A("Edg/")) || Aa() && za("Opera")
    }

    function Da() {
        return Aa() ? za("Chromium") : (A("Chrome") || A("CriOS")) && !(Aa() ? 0 : A("Edge")) || A("Silk")
    };

    function Ea(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Fa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ga(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ha(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ia(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ja(a, b) {
        return 0 <= Ea(a, b)
    }

    function Ka(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function La(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (da(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function Ma(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function Na(a) {
        Na[" "](a);
        return a
    }
    Na[" "] = function() {};
    var Oa = Aa() ? !1 : A("Opera"),
        Pa = Ba(),
        Qa = A("Edge"),
        Sa = A("Gecko") && !(-1 != wa().toLowerCase().indexOf("webkit") && !A("Edge")) && !(A("Trident") || A("MSIE")) && !A("Edge"),
        Ta = -1 != wa().toLowerCase().indexOf("webkit") && !A("Edge");

    function Ua() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var Va;
    a: {
        var Wa = "",
            Xa = function() {
                var a = wa();
                if (Sa) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Qa) return /Edge\/([\d\.]+)/.exec(a);
                if (Pa) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Ta) return /WebKit\/(\S+)/.exec(a);
                if (Oa) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Xa && (Wa = Xa ? Xa[1] : "");
        if (Pa) {
            var Ya = Ua();
            if (null != Ya && Ya > parseFloat(Wa)) {
                Va = String(Ya);
                break a
            }
        }
        Va = Wa
    }
    var Za = Va,
        $a;
    if (t.document && Pa) {
        var ab = Ua();
        $a = ab ? ab : parseInt(Za, 10) || void 0
    } else $a = void 0;
    var bb = $a;
    !A("Android") || Da();
    Da();
    Ca();

    function cb(a) {
        return Array.prototype.slice.call(a)
    };
    const B = Symbol();

    function eb(a) {
        const b = a[B] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = cb(a)), a[B] = b | 1)
    }

    function fb() {
        var a = [];
        a[B] |= 1;
        return a
    }

    function gb(a, b) {
        b[B] = (a | 0) & -255
    }

    function hb(a, b) {
        b[B] = (a | 34) & -221
    }

    function ib(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var jb = {};

    function kb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let lb;
    var mb;
    const nb = [];
    nb[B] = 55;
    mb = Object.freeze(nb);

    function ob(a) {
        if (a & 2) throw Error();
    };

    function pb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let qb;

    function rb(a) {
        if (qb) throw Error("");
        qb = a
    }

    function sb(a) {
        if (qb) try {
            qb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function tb() {
        const a = ub();
        qb ? t.setTimeout(() => {
            sb(a)
        }, 0) : pa(a)
    }

    function vb() {
        const a = Error();
        pb(a, "warning");
        sb(a);
        return a
    }

    function ub() {
        const a = Error();
        pb(a, "incident");
        return a
    };
    const wb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function xb(a) {
        return "number" === typeof a && Number.isFinite(a) || !!a && "string" === typeof a && isFinite(a)
    }

    function yb(a) {
        Number.isFinite(a) || tb();
        return a
    }

    function zb(a) {
        return a
    }

    function Ab(a) {
        if ("number" !== typeof a) throw vb();
        Number.isFinite(a) || tb();
        return a
    }

    function Bb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function Cb(a) {
        if (!xb(a)) throw vb();
        const b = typeof a;
        ("number" === b ? Number.isFinite(a) : "string" !== b ? 0 : wb.test(a)) || tb();
        return "string" === typeof a ? a : a
    }

    function Db(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function Eb(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function Fb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Gb(a, b, c) {
        var d = !1;
        if (null != a && "object" === typeof a && !(d = Array.isArray(a)) && a.Db === jb) return a;
        if (d) {
            var e = d = a[B] | 0;
            0 === e && (e |= c & 32);
            e |= c & 2;
            e !== d && (a[B] = e);
            return new b(a)
        }
    };
    let Hb;

    function Ib(a, b) {
        Hb = b;
        a = new a(b);
        Hb = void 0;
        return a
    };

    function Jb(a, b) {
        return Kb(b)
    }

    function Kb(a) {
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

    function Lb(a, b, c) {
        a = cb(a);
        var d = a.length;
        const e = b & 256 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < d; b++) a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e) Object.prototype.hasOwnProperty.call(e, f) && (b[f] = c(e[f]))
        }
        return a
    }

    function Mb(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[B] | 0) & 1 ? void 0 : f && (a[B] | 0) & 2 ? a : Nb(a, b, c, void 0 !== d, e, f);
            else if (kb(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Mb(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Nb(a, b, c, d, e, f) {
        const g = d || c ? a[B] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = cb(a);
        for (let h = 0; h < a.length; h++) a[h] = Mb(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function Ob(a) {
        return a.Db === jb ? a.toJSON() : Kb(a)
    };

    function Pb(a, b, c = hb) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[B] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[B] = d | 34, d & 4 && Object.freeze(a), a) : Nb(a, Pb, d & 4 ? hb : c, !0, !1, !0)
            }
            a.Db === jb && (c = a.X, d = c[B], a = d & 2 ? a : Ib(a.constructor, Qb(c, d, !0)));
            return a
        }
    }

    function Qb(a, b, c) {
        const d = c || b & 2 ? hb : gb,
            e = !!(b & 32);
        a = Lb(a, b, f => Pb(f, e, d));
        a[B] = a[B] | 32 | (c ? 2 : 0);
        return a
    }

    function Rb(a) {
        const b = a.X,
            c = b[B];
        return c & 2 ? Ib(a.constructor, Qb(b, c, !1)) : a
    };

    function Sb(a, b) {
        a = a.X;
        return Ub(a, a[B], b)
    }

    function Ub(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= ib(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function Vb(a, b, c) {
        const d = a.X,
            e = d[B];
        ob(e);
        C(d, e, b, c);
        return a
    }

    function C(a, b, c, d, e) {
        var f = ib(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[B] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Wb(a, b, c) {
        a = Ub(a, b, c);
        Array.isArray(a) || (a = mb);
        c = a[B] | 0;
        c & 1 || (c |= 1, a[B] = c);
        b & 2 ? c & 2 || (a[B] |= 34) : c & 32 && !(c & 2) && (b = a, b[B] &= -33);
        return a
    }

    function Xb(a, b) {
        a = Sb(a, b);
        return null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0
    }

    function Yb(a, b, c) {
        a = a.X;
        const d = a[B],
            e = d & 2;
        let f = Wb(a, d, b),
            g = f[B] | 0;
        if (!(g & 4)) {
            if (Object.isFrozen(f)) {
                f = cb(f);
                var h = g = g & -3 | 32;
                f[B] = h;
                C(a, d, b, f)
            }
            let k = h = 0;
            for (; h < f.length; h++) {
                const l = c(f[h]);
                null != l && (f[k++] = l)
            }
            k < h && (f.length = k);
            g |= 21;
            e ? g |= 34 : g &= -33;
            f[B] = g;
            g & 2 && Object.freeze(f)
        }!e && (g & 2 || Object.isFrozen(f)) && (f = cb(f), f[B] = g & -35, C(a, d, b, f));
        return f
    }

    function Zb(a, b, c, d) {
        a = a.X;
        const e = a[B];
        ob(e);
        if (null == c) C(a, e, b);
        else {
            if (!((c[B] | 0) & 4)) {
                Object.isFrozen(c) && (c = cb(c));
                for (let f = 0; f < c.length; f++) c[f] = d(c[f]);
                c[B] = 5
            }
            C(a, e, b, c)
        }
    }

    function $b(a, b, c, d) {
        const e = a.X,
            f = e[B];
        ob(f);
        C(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }

    function ac(a, b, c) {
        a = a.X;
        const d = a[B],
            e = Ub(a, d, c, !1);
        b = Gb(e, b, d);
        b !== e && null != b && C(a, d, c, b, !1);
        return b
    }

    function bc(a, b, c) {
        b = ac(a, b, c);
        if (null == b) return b;
        a = a.X;
        const d = a[B];
        if (!(d & 2)) {
            const e = Rb(b);
            e !== b && (b = e, C(a, d, c, b, !1))
        }
        return b
    }

    function cc(a, b, c) {
        var d = a.X,
            e = d[B];
        a = !!(e & 2);
        var f = a ? 1 : 2,
            g = !!(e & 2),
            h = Wb(d, e, c),
            k = h === mb;
        if (k && 2 !== f) c = h;
        else if (!k && (h[B] | 0) & 4) 3 !== f && (g ? 2 === f && (f = h[B] | 0, h = cb(h), h[B] = f, C(d, e, c, h)) : (g = Object.isFrozen(h), 1 === f ? g || Object.freeze(h) : (f = h[B] | 0, b = f & -33, g || f & 2 ? (h = cb(h), h[B] = b & -3, C(d, e, c, h)) : f !== b && (h[B] = b)))), c = h;
        else {
            var l = h;
            h = !!(e & 2);
            k = !!((l[B] | 0) & 2);
            g = l;
            !h && k && (l = cb(l));
            k = k || void 0;
            var m = e | (k ? 2 : 0),
                n = k;
            k = !1;
            let q = 0,
                r = 0;
            for (; q < l.length; q++) {
                const u = Gb(l[q], b, m);
                if (null == u) continue;
                const v = !!((u.X[B] | 0) &
                    2);
                n = n || v;
                k = k || !v;
                l[r++] = u
            }
            r < q && (l.length = r);
            b = l;
            l = b[B] | 0;
            m = l | 5;
            n = n ? m & -9 : m | 8;
            n = k ? n & -17 : n | 16;
            l != n && (Object.isFrozen(b) && (b = cb(b)), b[B] = n);
            l = b;
            g !== l && C(d, e, c, l);
            (h && 2 !== f || 1 === f) && Object.freeze(l);
            c = l
        }
        if (!(a || (c[B] | 0) & 8)) {
            for (a = 0; a < c.length; a++) d = c[a], e = Rb(d), d !== e && (c[a] = e);
            c[B] |= 8
        }
        return c
    }

    function dc(a, b, c) {
        null == c && (c = void 0);
        return Vb(a, b, c)
    }

    function ec(a, b) {
        return Bb(Sb(a, b))
    }

    function fc(a, b) {
        return Fb(Sb(a, b))
    }

    function gc(a, b, c = !1) {
        return Xb(a, b) ? ? c
    };
    var D = class {
        constructor(a) {
            a: {
                null == a && (a = Hb);Hb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[B] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (kb(d)) {
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
                a[B] = b
            }
            this.X = a
        }
        toJSON() {
            if (lb) var a = hc(this, this.X, !1);
            else a = Nb(this.X, Ob, void 0, void 0, !1, !1), a = hc(this,
                a, !0);
            return a
        }
    };
    D.prototype.Db = jb;

    function hc(a, b, c) {
        var d = a.constructor.La,
            e = ib((c ? a.X : b)[B]),
            f = !1;
        if (d) {
            if (!c) {
                b = cb(b);
                var g;
                if (b.length && kb(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = a.X[B];
            a = ib(g);
            g = +!!(g & 512) - 1;
            var h;
            for (let v = 0; v < d.length; v++) {
                var k = d[v];
                if (k < a) {
                    k += g;
                    var l = e[k];
                    null == l ? e[k] = c ? mb : fb() : c && l !== mb && eb(l)
                } else {
                    if (!h) {
                        var m = void 0;
                        e.length && kb(m = e[e.length - 1]) ? h = m : e.push(h = {})
                    }
                    l = h[k];
                    null == h[k] ? h[k] = c ? mb : fb() : c && l !== mb && eb(l)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let n, q;
        if (kb(h = b[d - 1])) {
            a: {
                var r = h;m = {};e = !1;
                for (let v in r) Object.prototype.hasOwnProperty.call(r, v) && (c = r[v], Array.isArray(c) && c != c && (e = !0), null != c ? m[v] = c : e = !0);
                if (e) {
                    for (let v in m) {
                        r = m;
                        break a
                    }
                    r = null
                }
            }
            r != h && (n = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            q = !0
        }
        if (!n && !q) return b;
        var u;
        f ? u = b : u = Array.prototype.slice.call(b, 0, d);
        b = u;
        f && (b.length = d);
        r && b.push(r);
        return b
    };

    function ic(a, b) {
        const c = jc;
        jc = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    let jc = void 0;

    function kc(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b[B] |= 32;
                b = Ib(a, b)
            }
            return b
        }
    };

    function lc() {
        return !1
    }

    function mc() {
        return !0
    }

    function nc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function oc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function pc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function qc(a) {
        function b() {
            d = t.setTimeout(c, 100);
            let g = f;
            f = [];
            a.apply(void 0, g)
        }

        function c() {
            d = 0;
            e && (e = !1, b())
        }
        let d = 0,
            e = !1,
            f = [];
        return function(g) {
            f = arguments;
            d ? e = !0 : b()
        }
    };
    var rc = {
            capture: !0
        },
        sc = {
            passive: !0
        },
        tc = oc(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function uc(a) {
        return a ? a.passive && tc() ? a : a.capture || !1 : !1
    }

    function G(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, uc(d)), !0) : !1
    }

    function H(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, uc(d)), !0) : !1
    };
    var vc = Pa || Ta;
    var wc;

    function xc() {
        if (void 0 === wc) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: na,
                        createScript: na,
                        createScriptURL: na
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                wc = a
            } else wc = a
        }
        return wc
    };
    var yc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        },
        zc = {};

    function Ac(a) {
        const b = xc();
        a = b ? b.createScriptURL(a) : a;
        return new yc(a, zc)
    };
    var Bc = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g.toString()
            }
        },
        Cc = {},
        Dc = new Bc("about:invalid#zClosurez", Cc);
    const Ec = {};

    function Fc() {
        var a = Gc `* { pointer-events: none; }`;
        return a instanceof Hc && a.constructor === Hc ? a.g : "type_error:SafeStyleSheet"
    }
    class Hc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };
    const Ic = {};

    function Jc(a) {
        return a instanceof Kc && a.constructor === Kc ? a.g : "type_error:SafeHtml"
    }
    class Kc {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    var Lc = new Kc(t.trustedTypes && t.trustedTypes.emptyHTML || "", Ic);
    var Mc = oc(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Jc(Lc);
        return !b.parentElement
    });

    function Nc(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Oc(a) {
        return Nc.apply(null, arguments) / arguments.length
    };

    function I(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }

    function Pc(a, b) {
        return new I(a.x - b.x, a.y - b.y)
    }
    I.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    I.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    I.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Qc(a, b) {
        this.width = a;
        this.height = b
    }
    p = Qc.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Rc(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Sc, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            if (!g) {
                g = e + " ";
                g = (f = xc()) ? f.createHTML(g) : g;
                g = new Kc(g, Ic);
                if (Mc())
                    for (; d.lastChild;) d.removeChild(d.lastChild);
                d.innerHTML = Jc(g);
                g = d.firstChild.nodeValue.slice(0, -1)
            }
            return c[e] = g
        })
    }
    var Sc = /&([^;\s<&]+);?/g;

    function Tc(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Uc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Vc(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Wc(a) {
        return a ? new Xc(Yc(a)) : oa || (oa = new Xc)
    }

    function Zc(a) {
        a = a.document;
        a = $c(a) ? a.documentElement : a.body;
        return new Qc(a.clientWidth, a.clientHeight)
    }

    function ad(a) {
        var b = a.document,
            c = 0;
        if (b) {
            c = b.body;
            var d = b.documentElement;
            if (!d || !c) return 0;
            a = Zc(a).height;
            if ($c(b) && d.scrollHeight) c = d.scrollHeight != a ? d.scrollHeight : d.offsetHeight;
            else {
                b = d.scrollHeight;
                var e = d.offsetHeight;
                d.clientHeight != e && (b = c.scrollHeight, e = c.offsetHeight);
                c = b > a ? b > e ? b : e : b < e ? b : e
            }
        }
        return c
    }

    function cd(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function dd(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!da(f) || ea(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ea(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Fa(g ? Ka(f) : f, d)
            }
        }
    }

    function ed(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function $c(a) {
        return "CSS1Compat" == a.compatMode
    }

    function fd(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    }

    function Yc(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function gd(a, b, c, d) {
        a && !c && (a = a.parentNode);
        for (c = 0; a && (null == d || c <= d);) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Xc(a) {
        this.g = a || t.document || document
    }
    p = Xc.prototype;
    p.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    p.createElement = function(a) {
        return ed(this.g, a)
    };
    p.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    p.append = function(a, b) {
        dd(Yc(a), a, arguments)
    };
    p.contains = fd;

    function hd() {
        return qa && xa ? xa.mobile : !id() && (A("iPod") || A("iPhone") || A("Android") || A("IEMobile"))
    }

    function id() {
        return qa && xa ? !xa.mobile && (A("iPad") || A("Android") || A("Silk")) : A("iPad") || A("Android") && !A("Mobile") || A("Silk")
    };
    var jd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    class kd {
        constructor(a) {
            this.Ic = a
        }
    }

    function ld(a) {
        return new kd(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const md = [ld("data"), ld("http"), ld("https"), ld("mailto"), ld("ftp"), new kd(a => /^[^:]*([/?#]|$)/.test(a))];

    function nd(a, b = md) {
        if (a instanceof Bc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof kd && d.Ic(a)) return new Bc(a, Cc)
        }
    };

    function od(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Na(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch {
            return !1
        }
    }

    function pd(a) {
        return od(a.top) ? a.top : null
    }

    function qd(a, b) {
        const c = rd("SCRIPT", a);
        c.src = b instanceof yc && b.constructor === yc ? b.g : "type_error:TrustedResourceUrl";
        (void 0) ? .Jd || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function sd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function td() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function ud(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function vd(a) {
        const b = [];
        ud(a, function(c) {
            b.push(c)
        });
        return b
    }
    var wd = /^([0-9.]+)px$/,
        xd = /^(-?[0-9.]{1,30})$/;

    function yd(a) {
        if (!xd.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function L(a) {
        return (a = wd.exec(a)) ? +a[1] : null
    }
    var zd = oc(() => hd() ? 2 : id() ? 1 : 0),
        M = (a, b) => {
            ud(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        Ad = (a, b) => {
            for (a = [a]; a.length;) {
                var c = a.shift();
                !1 !== b(c) && (c = Ga(c.children || c.childNodes || [], d => 1 === d.nodeType), c.length && a.unshift(...c))
            }
        },
        Cd = (a, b) => {
            if ("length" in a.style) {
                a = a.style;
                const c = a.length;
                for (let d = 0; d < c; d++) {
                    const e = a[d];
                    b(a[e], e, a)
                }
            } else a = Bd(a.style.cssText), ud(a, b)
        },
        Bd = a => {
            const b = {};
            if (a) {
                const c = /\s*:\s*/;
                Fa((a || "").split(/\s*;\s*/), d => {
                    if (d) {
                        var e = d.split(c);
                        d = e[0];
                        e = e[1];
                        d && e && (b[d.toLowerCase()] =
                            e)
                    }
                })
            }
            return b
        },
        Dd = (a, b = () => !0) => {
            const c = /!\s*important/i;
            Cd(a, (d, e) => {
                !c.test(d) && b(e, d) ? a.style.setProperty(e, d, "important") : c.test(d) && !b(e, d) && a.style.setProperty(e, d, "")
            })
        };
    const Ed = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        Fd = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        Gd = /.*domain\.test$/,
        Hd = /\.prod\.google\.com(:\d+)?$/;
    var Id = a => Ed[a] || Fd.test(a) || Gd.test(a) || Hd.test(a),
        Jd = a => {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1
        };

    function rd(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Kd(a) {
        t.google_image_requests || (t.google_image_requests = []);
        const b = rd("IMG", t.document);
        b.src = a;
        t.google_image_requests.push(b)
    };

    function Ld(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = Ld.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function Md(a) {
        return new Ld(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof Ld ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function Nd(a, ...b) {
        if (0 === b.length) return Ac(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Ac(c)
    };

    function Gc(a) {
        return new Hc(a[0], Ec)
    };

    function N(a, b, c) {
        if ("string" === typeof b)(b = Od(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Od(c, d);
                f && (c.style[f] = e)
            }
    }
    var Pd = {};

    function Od(a, b) {
        var c = Pd[b];
        if (!c) {
            var d = Uc(b);
            c = d;
            void 0 === a.style[d] && (d = (Ta ? "Webkit" : Sa ? "Moz" : Pa ? "ms" : null) + Vc(d), void 0 !== a.style[d] && (c = d));
            Pd[b] = c
        }
        return c
    }

    function Qd(a, b) {
        var c = Yc(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Rd(a, b) {
        return Qd(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Sd(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Td(a) {
        var b = Yc(a),
            c = new I(0, 0);
        var d = b ? Yc(b) : document;
        d = !Pa || 9 <= Number(bb) || $c(Wc(d).g) ? d.documentElement : d.body;
        if (a == d) return c;
        a = Sd(a);
        d = Wc(b).g;
        b = d.scrollingElement ? d.scrollingElement : !Ta && $c(d) ? d.documentElement : d.body || d.documentElement;
        d = d.parentWindow || d.defaultView;
        b = Pa && d.pageYOffset != b.scrollTop ? new I(b.scrollLeft, b.scrollTop) : new I(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Ud(a) {
        if (1 == a.nodeType) return a = Sd(a), new I(a.left, a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new I(a.clientX, a.clientY)
    }

    function Vd(a, b) {
        if (b instanceof Qc) {
            var c = b.height;
            b = b.width
        } else throw Error("missing height argument");
        a.style.width = Wd(b, !0);
        a.style.height = Wd(c, !0)
    }

    function Wd(a, b) {
        "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
        return a
    }

    function Xd(a) {
        var b = Yd;
        if ("none" != Rd(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function Yd(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Ta && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Sd(a), new Qc(a.right - a.left, a.bottom - a.top)) : new Qc(b, c)
    }

    function Zd(a, b) {
        var c = a.currentStyle ? a.currentStyle[b] : null;
        if (c)
            if (/^\d+px?$/.test(c)) a = parseInt(c, 10);
            else {
                b = a.style.left;
                var d = a.runtimeStyle.left;
                a.runtimeStyle.left = a.currentStyle.left;
                a.style.left = c;
                c = a.style.pixelLeft;
                a.style.left = b;
                a.runtimeStyle.left = d;
                a = +c
            }
        else a = 0;
        return a
    }

    function $d(a, b) {
        if (Pa) {
            var c = Zd(a, b + "Left"),
                d = Zd(a, b + "Right"),
                e = Zd(a, b + "Top");
            a = Zd(a, b + "Bottom");
            return new Ld(e, d, a, c)
        }
        c = Qd(a, b + "Left");
        d = Qd(a, b + "Right");
        e = Qd(a, b + "Top");
        a = Qd(a, b + "Bottom");
        return new Ld(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
    };
    var ae = a => "number" === typeof a && 0 < a;
    class be {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const ce = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var de = class {
            constructor(a, b) {
                this.g = a;
                this.j = b
            }
        },
        ee = class {
            constructor(a, b) {
                this.url = a;
                this.Qb = !!b;
                this.depth = null
            }
        };
    let fe = null;

    function ge() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function he(a = t) {
        return (a = a.performance) && a.now ? a.now() : null
    }

    function ie(a, b = t) {
        return b.performance ? .timing ? .[a] || 0
    }

    function je(a = t) {
        const b = Math.min(ie("domLoading", a) || Infinity, ie("domInteractive", a) || Infinity);
        return Infinity === b ? Math.max(ie("responseEnd", a), ie("navigationStart", a)) : b
    };
    var ke = class {
        constructor(a, b) {
            var c = he() || ge();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const le = t.performance,
        me = !!(le && le.mark && le.measure && le.clearMarks),
        ne = oc(() => {
            var a;
            if (a = me) {
                var b;
                if (null === fe) {
                    fe = "";
                    try {
                        a = "";
                        try {
                            a = t.top.location.hash
                        } catch (c) {
                            a = t.location.hash
                        }
                        a && (fe = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = fe;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function oe(a) {
        a && le && ne() && (le.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), le.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function pe(a) {
        a.g = !1;
        a.j != a.l.google_js_reporting_queue && (ne() && Fa(a.j, oe), a.j.length = 0)
    }
    class qe {
        constructor(a) {
            this.j = [];
            this.l = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.j = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = ne() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new ke(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            le && ne() && le.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (he() || ge()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                le && ne() && le.mark(b);
                !this.g || 2048 < this.j.length ||
                    this.j.push(a)
            }
        }
    };

    function re(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function se(a, b, c, d, e) {
        const f = [];
        ud(a, function(g, h) {
            (g = te(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function te(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(te(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(se(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function ue(a) {
        let b = 1;
        for (const c in a.j) b = c.length > b ? c.length : b;
        return 3997 - b - a.l.length - 1
    }

    function ve(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = ue(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.j[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = se(h[k], a.l, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.l;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class we {
        constructor() {
            this.l = "&";
            this.j = {};
            this.m = 0;
            this.g = []
        }
    };

    function xe(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d;) d = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    var ze = class {
        constructor(a, b, c = null) {
            this.v = a;
            this.A = b;
            this.g = c;
            this.j = null;
            this.l = !1;
            this.G = this.Qa
        }
        Gb(a) {
            this.j = a
        }
        m(a) {
            this.l = a
        }
        ua(a, b, c) {
            let d, e;
            try {
                this.g && this.g.g ? (e = this.g.start(a.toString(), 3), d = b(), this.g.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    oe(e), b = this.G(a, new be(f, {
                        message: xe(f)
                    }), void 0, c)
                } catch (g) {
                    this.Qa(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        K(a, b) {
            return (...c) => this.ua(a, () => b.apply(void 0, c))
        }
        Qa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const w = new we;
                w.g.push(1);
                w.j[1] = re("context", a);
                b.error && b.meta && b.id || (b = new be(b, {
                    message: xe(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    w.g.push(2);
                    w.j[2] = re("msg", g)
                }
                const z = b.meta || {};
                if (this.j) try {
                    this.j(z)
                } catch (ha) {}
                if (d) try {
                    d(z)
                } catch (ha) {}
                b = [z];
                w.g.push(3);
                w.j[3] = b;
                d = t;
                b = [];
                g = null;
                do {
                    var h = d;
                    if (od(h)) {
                        var k = h.location.href;
                        g = h.document && h.document.referrer || null
                    } else k = g, g = null;
                    b.push(new ee(k || ""));
                    try {
                        d = h.parent
                    } catch (ha) {
                        d = null
                    }
                } while (d && h != d);
                for (let ha = 0, ba = b.length - 1; ha <= ba; ++ha) b[ha].depth = ba - ha;
                h = t;
                if (h.location &&
                    h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                    for (k = 1; k < b.length; ++k) {
                        var l = b[k];
                        l.url || (l.url = h.location.ancestorOrigins[k - 1] || "", l.Qb = !0)
                    }
                var m = b;
                let F = new ee(t.location.href, !1);
                h = null;
                const X = m.length - 1;
                for (l = X; 0 <= l; --l) {
                    var n = m[l];
                    !h && ce.test(n.url) && (h = n);
                    if (n.url && !n.Qb) {
                        F = n;
                        break
                    }
                }
                n = null;
                const ia = m.length && m[X].url;
                0 != F.depth && ia && (n = m[X]);
                f = new de(F, n);
                if (f.j) {
                    var q = f.j.url || "";
                    w.g.push(4);
                    w.j[4] = re("top", q)
                }
                var r = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var u = f.g.url.match(jd),
                        v = u[1],
                        E = u[3],
                        J = u[4];
                    m = "";
                    v && (m += v + ":");
                    E && (m += "//", m += E, J && (m += ":" + J));
                    var K = m
                } else K = "";
                r = [r, {
                    url: K
                }];
                w.g.push(5);
                w.j[5] = r;
                ye(this.v, e, w, this.l, c)
            } catch (w) {
                try {
                    ye(this.v, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: xe(w),
                        url: f && f.g.url
                    }, this.l, c)
                } catch (z) {}
            }
            return this.A
        }
    };
    var Ae = a => "string" === typeof a,
        Be = a => void 0 === a;
    var Ce = class extends D {
        constructor() {
            super()
        }
    };
    var De = class extends D {
        constructor() {
            super()
        }
    };
    De.La = [4, 5];
    var Ee = class extends D {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            var a = Sb(this, 1);
            a = null == a ? a : xb(a) ? "number" === typeof a ? a : a : void 0;
            return a ? ? 0
        }
    };
    Ee.La = [2];
    var Fe = class extends D {
            constructor() {
                super()
            }
        },
        Ge = [4, 6];

    function He(a, ...b) {
        Ie(a, ...b.map(c => ({
            Wb: !0,
            cd: 3,
            Kc: c.toJSON()
        })))
    };
    var Je = class extends D {
        constructor() {
            super()
        }
    };

    function Ke(a, b) {
        const c = d => [{
            [d.cd]: d.Kc
        }];
        return JSON.stringify([a.filter(d => d.Wb).map(c), b.toJSON(), a.filter(d => !d.Wb).map(c)])
    };
    var Le = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Me(a) {
        a && "function" == typeof a.Fa && a.Fa()
    };

    function Ne() {
        this.G = this.G;
        this.R = this.R
    }
    Ne.prototype.G = !1;
    Ne.prototype.Fa = function() {
        this.G || (this.G = !0, this.wa())
    };

    function O(a, b) {
        P(a, ma(Me, b))
    }

    function P(a, b) {
        a.G ? b() : (a.R || (a.R = []), a.R.push(b))
    }
    Ne.prototype.wa = function() {
        if (this.R)
            for (; this.R.length;) this.R.shift()()
    };

    function Ie(a, ...b) {
        a.g.push(...b);
        100 <= a.g.length && Oe(a);
        a.g.length && null === a.j && (a.j = setTimeout(() => {
            Oe(a)
        }, 1E3))
    }

    function Oe(a) {
        null !== a.j && (clearTimeout(a.j), a.j = null);
        if (a.g.length) {
            var b = Ke(a.g, a.l);
            a.m("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    var Pe = class {
            constructor() {
                this.m = Le;
                this.g = [];
                this.j = null;
                var a = new Je;
                a = $b(a, 1, yb(2), 0);
                a = $b(a, 2, Eb("m202310100101"), "");
                const b = a.X,
                    c = b[B];
                this.l = c & 2 ? a : Ib(a.constructor, Qb(b, c, !0))
            }
        },
        Qe = class extends Pe {};
    var Q = a => {
        var b = "Bb";
        if (a.Bb && a.hasOwnProperty(b)) return a.Bb;
        b = new a;
        return a.Bb = b
    };

    function Re(a, b, c) {
        return b[a] || c
    };

    function Se(a, b) {
        a.g = () => Re(3, b, () => [])(1)
    }
    class Te {
        g() {
            return []
        }
    };

    function ye(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof we ? f = c : (f = new we, ud(c, (h, k) => {
                var l = f;
                const m = l.m++;
                h = re(k, h);
                l.g.push(m);
                l.j[m] = h
            }));
            const g = ve(f, "/pagead/gen_204?id=" + b + "&");
            g && Kd(g)
        } catch (f) {}
    }

    function Ue(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class Ve {
        constructor() {
            this.g = Math.random()
        }
    };
    let We, Xe;
    const Ye = new qe(window);
    (a => {
        We = a ? ? new Ve;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Ue(We, window.google_srt);
        Xe = new ze(We, !0, Ye);
        Xe.Gb(() => {});
        Xe.m(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || pe(Ye) : Ye.g && G(window, "load", () => {
            window.google_measure_js_timing || pe(Ye)
        })
    })();

    function Ze(a, b) {
        return void 0 !== a.g[$e(b)]
    }

    function af(a) {
        const b = [];
        for (const c in a.g) void 0 !== a.g[c] && a.g.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const R = class {
        constructor() {
            this.g = {};
            this.j = {}
        }
        set(a, b) {
            const c = $e(a);
            this.g[c] = b;
            this.j[c] = a
        }
        get(a, b) {
            a = $e(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        yb() {
            return af(this).length
        }
        clear() {
            this.g = {};
            this.j = {}
        }
    };

    function $e(a) {
        return a instanceof Object ? String(x(a)) : a + ""
    };
    var bf = class {
            constructor(a) {
                this.A = null != a.g ? a.g : !0;
                this.v = null != a.B ? a.B : 0;
                this.m = null != a.v ? a.v : .9;
                this.j = null != a.j ? a.j : 1.05;
                this.minWidth = null != a.G ? a.G : 0;
                this.G = null != a.m ? a.m : 25;
                this.l = null != a.l ? a.l : 0;
                this.D = null != a.A ? a.A : !1;
                this.B = a.D || null;
                this.g = a.F || null
            }
        },
        cf = class {
            build() {
                return new bf(this)
            }
        };

    function df(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    };
    var ef = 728 * 1.38;

    function ff(a) {
        return a.innerHeight >= a.innerWidth
    }

    function S(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function T(a) {
        return S(a).clientWidth
    }

    function gf(a, b) {
        const c = S(a);
        return b ? c.scrollHeight === S(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
    }

    function hf(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function jf(a) {
        const b = T(a);
        a = a.innerWidth;
        return .05 > Math.abs((b && a ? b / a : 0) - 1)
    }

    function U(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function kf(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function lf(a) {
        const b = {};
        let c;
        Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
        if (c)
            for (a = 0; a < c.length; a++) {
                const d = c[a];
                if ("key" in d && "value" in d) {
                    const e = d.value;
                    b[d.key] = null == e ? null : String(e)
                }
            }
        return b
    }

    function mf(a) {
        const b = {
            bottom: "auto",
            clear: "none",
            display: "inline",
            "float": "none",
            height: "auto",
            left: "auto",
            margin: 0,
            "margin-bottom": 0,
            "margin-left": 0,
            "margin-right": "0",
            "margin-top": 0,
            "max-height": "none",
            "max-width": "none",
            opacity: 1,
            overflow: "visible",
            padding: 0,
            "padding-bottom": 0,
            "padding-left": 0,
            "padding-right": 0,
            "padding-top": 0,
            position: "static",
            right: "auto",
            top: "auto",
            "vertical-align": "baseline",
            visibility: "visible",
            width: "auto",
            "z-index": "auto"
        };
        Fa(Object.keys(b), c => {
            var d = a.style[Uc(c)];
            ("undefined" !==
                typeof d ? d : a.style[Od(a, c)]) || N(a, c, b[c])
        });
        Dd(a)
    };

    function nf(a, b) {
        var c = T(a);
        var d = S(a).clientHeight;
        if ("number" !== typeof c || "number" !== typeof d) throw Error("No VP width and/or height.");
        c = new Qc(c, d);
        d = kf(a);
        a = U(a);
        a = of (a, c.width + d, c.height + a, d);
        return (df(b, a) ? new Ld(Math.max(b.top, a.top), Math.min(b.right, a.right), Math.min(b.bottom, a.bottom), Math.max(b.left, a.left)) : null) || of (0, 0, 0, 0)
    }

    function pf(a, b) {
        const c = kf(b),
            d = U(b);
        if (a.getBoundingClientRect) return a = a.getBoundingClientRect(), qf(a) ? of (a.top + d, a.right + c, a.bottom + d, a.left + c) : of (0, 0, 0, 0);
        b = b.document.createRange();
        b.selectNodeContents(a);
        return b.collapsed ? of (0, 0, 0, 0) : b.getBoundingClientRect ? (a = b.getBoundingClientRect(), qf(a) ? of (a.top + d, a.right + c, a.bottom + d, a.left + c) : of (0, 0, 0, 0)) : of (0, 0, 0, 0)
    }

    function qf(a) {
        return !!a && "number" === typeof a.top && !isNaN(a.top) && "number" === typeof a.right && !isNaN(a.right) && "number" === typeof a.bottom && !isNaN(a.bottom) && "number" === typeof a.left && !isNaN(a.left)
    }
    const of = (a, b, c, d) => new Ld(Math.ceil(a), Math.floor(b), Math.floor(c), Math.ceil(d));

    function rf(a, b) {
        sf(a).forEach(b, void 0)
    }

    function sf(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };
    const tf = class {
        constructor(a) {
            this.g = new R;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return Ze(this.g, a)
        }
    };
    class uf {
        constructor(a, b) {
            this.g = a[t.Symbol.iterator]();
            this.j = b
        }[Symbol.iterator]() {
            return this
        }
        next() {
            const a = this.g.next();
            return {
                value: a.done ? void 0 : this.j.call(void 0, a.value),
                done: a.done
            }
        }
    }

    function vf(a, b) {
        return new uf(a, b)
    };

    function wf() {}
    wf.prototype.next = function() {
        return xf
    };
    var xf = {
        done: !0,
        value: void 0
    };
    wf.prototype.ya = function() {
        return this
    };

    function yf(a) {
        if (a instanceof wf) return a;
        if ("function" == typeof a.ya) return a.ya(!1);
        if (da(a)) {
            let b = 0;
            const c = new wf;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) return xf;
                    if (b in a) return {
                        value: a[b++],
                        done: !1
                    };
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function zf(a) {
        a = yf(a);
        const {
            done: b,
            value: c
        } = a.next();
        return b ? null : c
    };

    function Af(a) {
        if (a instanceof Bf || a instanceof Cf || a instanceof Df) return a;
        if ("function" == typeof a.next) return new Bf(() => a);
        if ("function" == typeof a[Symbol.iterator]) return new Bf(() => a[Symbol.iterator]());
        if ("function" == typeof a.ya) return new Bf(() => a.ya());
        throw Error("Not an iterator or iterable.");
    }
    class Bf {
        constructor(a) {
            this.g = a
        }
        ya() {
            return new Cf(this.g())
        }[Symbol.iterator]() {
            return new Df(this.g())
        }
        j() {
            return new Df(this.g())
        }
    }
    class Cf extends wf {
        constructor(a) {
            super();
            this.g = a
        }
        next() {
            return this.g.next()
        }[Symbol.iterator]() {
            return new Df(this.g)
        }
        j() {
            return new Df(this.g)
        }
    }
    class Df extends Bf {
        constructor(a) {
            super(() => a);
            this.l = a
        }
        next() {
            return this.l.next()
        }
    };

    function Ef(a, b) {
        this.j = {};
        this.g = [];
        this.l = this.size = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a)
            if (a instanceof Ef)
                for (c = Ff(a), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
            else
                for (d in a) this.set(d, a[d])
    }
    p = Ef.prototype;
    p.yb = function() {
        return this.size
    };

    function Ff(a) {
        Gf(a);
        return a.g.concat()
    }
    p.has = function(a) {
        return Object.prototype.hasOwnProperty.call(this.j, a)
    };
    p.isEmpty = function() {
        return 0 == this.size
    };
    p.clear = function() {
        this.j = {};
        this.l = this.size = this.g.length = 0
    };

    function Gf(a) {
        if (a.size != a.g.length) {
            for (var b = 0, c = 0; b < a.g.length;) {
                var d = a.g[b];
                Object.prototype.hasOwnProperty.call(a.j, d) && (a.g[c++] = d);
                b++
            }
            a.g.length = c
        }
        if (a.size != a.g.length) {
            var e = {};
            for (c = b = 0; b < a.g.length;) d = a.g[b], Object.prototype.hasOwnProperty.call(e, d) || (a.g[c++] = d, e[d] = 1), b++;
            a.g.length = c
        }
    }
    p.get = function(a, b) {
        return Object.prototype.hasOwnProperty.call(this.j, a) ? this.j[a] : b
    };
    p.set = function(a, b) {
        Object.prototype.hasOwnProperty.call(this.j, a) || (this.size += 1, this.g.push(a), this.l++);
        this.j[a] = b
    };
    p.forEach = function(a, b) {
        for (var c = Ff(this), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    p.keys = function() {
        return Af(this.ya(!0)).j()
    };
    p.values = function() {
        return Af(this.ya(!1)).j()
    };
    p.entries = function() {
        const a = this;
        return vf(this.keys(), function(b) {
            return [b, a.get(b)]
        })
    };
    p.ya = function(a) {
        Gf(this);
        var b = 0,
            c = this.l,
            d = this,
            e = new wf;
        e.next = function() {
            if (c != d.l) throw Error("The map has changed since the iterator was created");
            if (b >= d.g.length) return xf;
            var f = d.g[b++];
            return {
                value: a ? f : d.j[f],
                done: !1
            }
        };
        return e
    };

    function Hf(a) {
        return "transparent" == a || "rgba" == a.substring(0, 4) && (a = a.split(","), 4 == a.length && .5 > parseFloat(a[3])) ? !0 : !1
    }

    function If() {
        Fa(Jf, a => {
            a.F = null;
            a.G = null
        })
    }

    function Kf(a) {
        if (!a.C.ownerDocument) throw Error("Wrapped node should have an owner document.");
        return a.C.ownerDocument
    }

    function Lf(a) {
        a = Kf(a);
        return a.defaultView || a.parentWindow
    }

    function Mf(a) {
        const b = a.l.g(a.l.j);
        return b == a || b != a && fd(b.C, a.C)
    }

    function Nf(a) {
        return sf(a.C.childNodes).map(b => a.l.g(b)).filter(nc(b => null === b))
    }

    function Of(a) {
        if (!a.g()) return null;
        const b = Nf(a.g());
        a = Ea(b, a);
        if (-1 == a) return null;
        for (a += 1; a < b.length; ++a)
            if (b[a].m() || b[a].I()) return b[a];
        return null
    }

    function Pf(a) {
        const b = Of(a);
        return b ? b : a.g() ? Pf(a.g()) : null
    }

    function Qf(a, b) {
        b.push(a);
        a = Nf(a);
        for (let c = 0; c < a.length; ++c) Qf(a[c], b)
    }

    function Rf(a) {
        var b = a.j();
        if (0 != b.top || 0 != b.right || 0 != b.bottom || 0 != b.left) {
            var c = kf(Lf(a));
            a = U(Lf(a));
            c = -c;
            a = -a;
            c instanceof I ? (b.left += c.x, b.right += c.x, b.top += c.y, b.bottom += c.y) : (b.left += c, b.right += c, "number" === typeof a && (b.top += a, b.bottom += a))
        }
        return b
    }

    function V(a, b) {
        if (1 != a.C.nodeType) return null;
        a.v = a.v || Lf(a).getComputedStyle(a.C);
        return a.v ? a.v[b] || a.v.getPropertyValue(b) || "" : ""
    }

    function Sf(a, b, c) {
        if (void 0 !== a.B[b]) return a.B[b];
        a.B[b] = Tf(a, b, c);
        return a.B[b]
    }

    function Uf(a) {
        if (void 0 !== a.H) return a.H;
        var b = V(a, "position");
        if ("fixed" == b || "sticky" == b) b = a;
        else {
            var c = a.g();
            b = c && "BODY" != a.C.tagName ? (c = Uf(c)) || "absolute" != b && "relative" != b ? c : a : null
        }
        a.H = b;
        return a.H
    }

    function Vf(a, b) {
        const c = Uf(a);
        if (c && "relative" != V(c, "position"))
            if (null != b) a: {
                do {
                    const d = a.j();
                    if ((d.right - d.left) * (d.bottom - d.top) > b) {
                        b = !1;
                        break a
                    }
                    if (a == c) break;
                    a = a.g()
                } while (null !== a);b = !0
            }
        else b = !0;
        else b = !1;
        return b
    }

    function Tf(a, b, c) {
        const d = V(a, "position");
        a: switch (b) {
            case 0:
                var e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-x") || "scroll" == V(a, "overflow-x");
                break a;
            case 1:
                e = "hidden" == V(a, "overflow") || "scroll" == V(a, "overflow") || "hidden" == V(a, "overflow-y") || "scroll" == V(a, "overflow-y");
                break a;
            default:
                throw Error("Unknown pageAxis: " + b);
        }
        switch (d) {
            case "fixed":
                if (e) return a;
                break;
            case "static":
            case "":
            case null:
                if (e && !c) return a;
                if (a.g()) return Sf(a.g(), b, c);
                break;
            case "absolute":
            case "relative":
                if (e) return a;
                if (a.g()) return Sf(a.g(), b, "absolute" == d);
                break;
            default:
                t.console.error("Unknown position value: " + d)
        }
        return null
    }

    function Wf(a) {
        var b = a.C.scrollHeight;
        const c = a.C.clientHeight,
            d = Kf(a).createElement("div");
        d.style.width = "100%";
        d.style.height = Math.max(b, c) + 100 + "px";
        d.style.clear = "both";
        a.C.appendChild(d);
        b = a.C.scrollHeight > a.C.clientHeight && a.C.scrollHeight - b > a.C.clientHeight - c;
        a.C.removeChild(d);
        return b
    }

    function Xf(a) {
        return null !== a.D ? a.D : "1" != V(a, "opacity") || a.g() && !Xf(a.g()) ? a.D = !1 : a.D = !0
    }

    function Yf(a) {
        a = a.j();
        a = new Ld(Math.max(a.top, 0), Math.max(a.right, 0), Math.max(a.bottom, 0), Math.max(a.left, 0));
        return a.left < a.right && a.top < a.bottom
    }

    function Zf(a) {
        return null !== a.A ? a.A : a.g() && Zf(a.g()) || "0" == V(a, "opacity") || "none" == V(a, "display") || "hidden" == V(a, "visibility") || a.C.tagName && "input" == a.C.tagName.toLowerCase() && a.C.type && "hidden" == a.C.type ? a.A = !0 : a.A = !1
    }

    function $f(a, b) {
        return b(a) ? !0 : a.g() ? $f(a.g(), b) : !1
    }

    function ag(a) {
        return !$f(a, b => "hidden" == V(b, "overflow-y"))
    }

    function bg(a) {
        a = V(a, "position");
        return "absolute" == a || "relative" == a
    }

    function cg(a) {
        return a.m() && (a = parseInt(V(a, "z-index"), 10), !isNaN(a)) ? a : 0
    }

    function dg(a, b) {
        return $f(a, c => !!c.C.tagName && c.C.tagName == b)
    }

    function eg(a, b) {
        return $f(a, c => {
            c = c.C;
            return !!c.id && !!c.id.match && !!c.id.match(b)
        })
    }

    function fg(a, b) {
        return $f(a, c => {
            a: {
                c = gg(c);
                for (let d = 0; d < c.length; ++d)
                    if (c[d].match(b)) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            return c
        })
    }

    function gg(a) {
        return (a = a.C.className) && "function" === typeof a.split ? /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1].split(/\s+/) : []
    }

    function hg(a) {
        return "A" == a.C.tagName ? a.C.getAttribute("href") : (a = a.g()) ? hg(a) : null
    }

    function ig(a) {
        if (1 != a.C.nodeType) {
            var b = a.g();
            return b ? ig(b) : 0
        }
        const c = Kf(a).createTextNode("A");
        a.C.appendChild(c);
        b = a.l.g(c);
        if (!b) throw a.C.removeChild(c), Error("Unable to insert textnode");
        a = b.j();
        b.C.parentNode && b.C.parentNode.removeChild(b.C);
        return a.bottom - a.top
    }

    function jg(a, b) {
        if (b || null == a.R) {
            if (b && !b(a)) return 0;
            let c = 0;
            if (a.I()) c = a.C.textContent.trim().length;
            else {
                const d = Nf(a);
                for (let e = 0; e < d.length; e++) c += jg(d[e], b)
            }
            b || (a.R = c);
            return c
        }
        return a.R
    }
    class kg {
        constructor(a, b) {
            this.C = a;
            this.l = b;
            this.A = this.D = this.J = this.wa = null;
            this.B = {};
            this.v = this.G = this.R = null;
            new Ef
        }
        g() {
            return this.C != this.l.j && this.C.parentNode ? this.l.g(this.C.parentNode) : null
        }
        m() {
            return 1 == this.C.nodeType
        }
        I() {
            return 3 == this.C.nodeType
        }
        j() {
            if (!this.F) {
                this.G || (this.G = pf(this.C, Lf(this)));
                var a = Md(this.G);
                var b = V(this, "position");
                if ("fixed" == b) a = nf(Lf(this), a);
                else if (this.g()) {
                    var c = Sf(this.g(), 0, "absolute" == b);
                    if (c) {
                        var d = c.j();
                        c = d.left;
                        d = d.right;
                        a = a.left >= d || a.right <= c ?
                            null : of (a.top, Math.min(a.right, d), a.bottom, Math.max(a.left, c))
                    }
                    a && (b = Sf(this.g(), 1, "absolute" == b)) && (c = b.j(), b = c.top, c = c.bottom, a = a.top >= c || a.bottom <= b ? null : of (Math.max(a.top, b), a.right, Math.min(a.bottom, c), a.left));
                    a = a && Uf(this) && "fixed" == V(Uf(this), "position") ? nf(Lf(this), a) : a || new Ld(0, 0, 0, 0)
                }
                this.F = a
            }
            return Md(this.F)
        }
        Ja() {
            return !Yf(this) || Zf(this)
        }
        Cb() {
            var a = V(this, "background-color");
            if (a = a ? Hf(a) : !0) a = V(this, "background-image"), a = !(a && "none" != a);
            return a
        }
        toString() {
            switch (this.C.nodeType) {
                case 1:
                    const a =
                        this.C;
                    let b = a.tagName;
                    a.id && (b += "#" + a.id);
                    a.className && "function" === typeof a.className.split && (b += "." + a.className.split(/\s+/).join("."));
                    return b;
                case 3:
                    return "TEXT#" + this.C.textContent.substr(0, 10);
                default:
                    return "HtmlNode"
            }
        }
    }

    function lg(a, b) {
        const c = x(b);
        var d = a.m.get(c);
        if ("boolean" === typeof d) return d;
        d = a.v && 3 == b.nodeType ? !/\S/.test(b.data) : 1 != b.nodeType && 3 != b.nodeType && 9 != b.nodeType || b.tagName && ("SCRIPT" == b.tagName || "STYLE" == b.tagName) ? !0 : !1;
        !d && b.parentNode && b != a.j && (d = lg(a, b.parentNode));
        a.m.set(c, d);
        return d
    }
    var mg = class {
            constructor(a, b) {
                this.j = a;
                this.v = b;
                this.m = new R;
                this.l = new R
            }
            g(a) {
                const b = x(a),
                    c = this.l.get(b);
                if (c) return c;
                if (lg(this, a)) return null;
                a = new kg(a, this);
                this.l.set(b, a);
                return a
            }
        },
        Jf = [];
    class ng {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            return og(this.l, a).contains(this.j)
        }
    };

    function og(a, b) {
        const c = x(b),
            d = a.j.get(c);
        if (d) return d;
        b = a.g(b);
        a.j.set(c, b);
        return b
    }
    class pg {
        constructor() {
            this.j = new R
        }
    };

    function qg(a, b) {
        let c = hg(b);
        if (a.l.g(b) && null !== c) return c;
        b = Nf(b);
        if (1 > b.length) return null;
        c = qg(a, b[0]);
        for (let d = 1; d < b.length; ++d)
            if (qg(a, b[d]) != c) return null;
        return c
    }
    class rg extends pg {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new tf(null !== qg(this, a) ? [1] : [])
        }
    };
    class sg extends pg {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            a: if (3 == a.C.nodeType) var b = this.l.g(a);
                else {
                    b = !1;
                    a = Nf(a);
                    for (let c of a) {
                        if ((a = V(c, "display")) && "inline" != a) {
                            b = !1;
                            break a
                        }
                        og(this, c).contains(0) && (b = !0)
                    }
                }return new tf(b ? [0] : [])
        }
    };

    function tg(a, b) {
        return jg(b, c => !a.l.g(c))
    }
    class ug extends pg {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.l = b;
            this.v = c
        }
        g(a) {
            if (this.m.g(a) && !this.l.g(a) && !this.v.g(a) && 50 <= tg(this, a)) {
                var b = ig(a);
                a = a.j();
                b = a.bottom - a.top >= 2 * b || !1
            } else b = !1;
            return new tf(b ? [3] : [])
        }
    };

    function vg(a) {
        return a.classList ? a.classList.contains("adsbygoogle") : Ja(a.classList ? a.classList : ("string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || "").match(/\S+/g) || [], "adsbygoogle")
    };

    function wg(a, b) {
        return a.l.g(b) ? $f(b, function(c) {
            switch (c.C.tagName) {
                case "H1":
                case "H2":
                case "H3":
                case "H4":
                case "H5":
                case "H6":
                    return !0
            }
            return !1
        }) || xg(b) && 5 <= jg(b) ? !0 : (b = b.g()) ? og(a, b).contains(2) : !1 : !1
    }

    function xg(a) {
        a = gg(a);
        for (let b of a)
            if (b.match(/title|titulo|hdg|heading|header|^h[1-6]$/) && !b.match(/subtitle/)) return !0;
        return !1
    }
    class yg extends pg {
        constructor(a) {
            super();
            this.l = a
        }
        g(a) {
            return new tf(wg(this, a) ? [2] : [])
        }
    };

    function zg(a) {
        const b = [];
        Fa(a, c => {
            1 == c.C.nodeType && (Ag(c, ":before", b), Ag(c, ":after", b))
        });
        return b
    }

    function Bg(a) {
        a = V(a, "content");
        if (!a || "none" == a || /\(.*\)/.test(a)) return !1;
        /^['"].*['"]$/.test(a) && (a = a.substring(1, a.length - 1));
        return 0 < a.trim().length
    }
    class Cg extends kg {
        constructor(a, b) {
            super(a.C, a.l);
            this.P = a;
            this.M = b;
            this.v = Lf(a).getComputedStyle(a.C, this.M)
        }
        m() {
            return !1
        }
        I() {
            return !1
        }
        Ja() {
            if (!Bg(this) && this.Cb()) var a = !0;
            else if (!(a = this.g().Ja() || Zf(this) || !Yf(this))) {
                a = Bg(this);
                const c = V(this, "width");
                var b = V(this, "height");
                b = a && "auto" == b || 0 < parseFloat(b);
                a = !((a && "auto" == c || 0 < parseFloat(c)) && b)
            }
            return a
        }
        g() {
            return this.P
        }
        Cb() {
            const a = Rd(this.g().C, "backgroundColor"),
                b = V(this, "background-color");
            return null == b || b == a || Hf(b) || "fixed" != V(this,
                "position")
        }
        j() {
            switch (V(this, "position")) {
                case "absolute":
                    var a = this.g().j();
                    const b = a.top + parseInt(V(this, "top"), 10);
                    a = a.left + parseInt(V(this, "left"), 10);
                    let c = parseInt(V(this, "width"), 10),
                        d = parseInt(V(this, "height"), 10);
                    return new Ld(b, a + c, b + d, a);
                case "fixed":
                    return new Ld(0, parseInt(V(this, "width"), 10), parseInt(V(this, "height"), 10), 0);
                default:
                    return this.g().j()
            }
        }
    }
    const Ag = (a, b, c) => {
        if (":before" == b || ":after" == b) {
            var d = new Cg(a, b);
            if (!d.Ja()) switch (c.push(d), b) {
                case ":before":
                    a.wa = d;
                    break;
                case ":after":
                    a.J = d;
                    break;
                default:
                    throw Error("Unsupported pseudo type " + b);
            }
        }
    };
    const Dg = new tf("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    class Eg extends pg {
        g(a) {
            var b = a.C,
                c = Kf(a);
            if (3 == b.nodeType) {
                var d = b.data;
                c = -1 != d.indexOf("&") ? Rc(d, c) : d;
                c = /\S/.test(c)
            } else c = !1;
            (c = c || (a instanceof Cg ? Bg(a) : !1)) || (c = (b = b.tagName) && Dg.contains(b.toUpperCase()));
            a = c && !a.Ja();
            return new tf(a ? [6] : [])
        }
    };

    function Fg(a) {
        a.v || (a.v = new Eg);
        return a.v
    }

    function Gg(a) {
        a.j || (a.j = new sg(new ng(Fg(a), 6)));
        return a.j
    }

    function Hg(a) {
        a.l || (a.l = new yg(new ng(Gg(a), 0)));
        return a.l
    }
    class Ig {
        constructor() {
            this.m = this.l = this.g = this.j = this.v = null
        }
    };
    const Jg = class {
        constructor() {
            this.g = new Ig
        }
    };

    function Kg(a) {
        const b = [];
        for (const c of a.g) b.push(c);
        return b
    }
    class Lg {
        constructor() {
            this.g = [];
            this.l = new tf
        }
        contains(a) {
            return this.l.contains(x(a))
        }
    };
    class Mg {
        constructor(a, b, c) {
            this.g = a;
            this.j = b;
            this.l = c
        }
        aa() {
            return this.l
        }
    }
    const Og = (a, b, c) => {
            b = Ng(a.wa, b, c);
            const d = new Mg(a, 0, b++);
            c.oa.push(d);
            for (var e of Nf(a)) b = Og(e, b, c);
            e = new Mg(a, 1, b++);
            c.oa.push(e);
            c.map.set(x(a), {
                start: d,
                end: e
            });
            return b = Ng(a.J, b, c)
        },
        Ng = (a, b, c) => {
            if (!a) return b;
            const d = new Mg(a, 0, b++),
                e = new Mg(a, 1, b++);
            c.oa.push(d);
            c.oa.push(e);
            c.map.set(x(a), {
                start: d,
                end: e
            });
            return b
        };

    function Pg(a) {
        if (a instanceof Cg) return !0;
        if (!a.m()) return !1;
        const b = a.C,
            c = V(a, "position");
        if ("HTML" == b.tagName || "fixed" == c || "auto" != V(a, "z-index") && ("absolute" == c || "relative" == c)) return !0;
        a = V(a, "opacity");
        return "1" != a && "" != a ? !0 : !1
    }

    function Qg(a) {
        const b = a.g.g();
        return b ? Rg(a.j, b) : null
    }
    class Sg {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
    }

    function Tg(a, b, c) {
        var d = Rg(a.g, b);
        a = Rg(a.g, c);
        d = Ug(d, a);
        if (!d) return 0;
        switch (d.sb) {
            case 0:
                return cg(b) - cg(d.pb.g);
            case 1:
                return cg(d.ob.g) - cg(c);
            case 2:
                return cg(d.ob.g) - cg(d.pb.g);
            default:
                throw Error("Unhandled adjacency.");
        }
    }
    var Wg = class {
        constructor() {
            this.g = new Vg
        }
    };

    function Rg(a, b) {
        const c = x(b);
        var d = a.g.get(c);
        if (d) return d;
        d = b.g();
        b = !d || Pg(b) ? new Sg(b, a) : Rg(a, d);
        a.g.set(c, b);
        return b
    }
    var Vg = class {
        constructor() {
            this.g = new R
        }
    };

    function Ug(a, b) {
        if (a == b) return null;
        const c = new R;
        var d = b;
        let e;
        for (; e = Qg(d);) {
            if (a == e) return {
                ob: a,
                sb: 0,
                pb: d
            };
            c.set(x(e), d);
            d = e
        }
        for (; e = Qg(a);) {
            if (e == b) return {
                ob: a,
                sb: 1,
                pb: b
            };
            if (d = c.get(x(e))) return {
                ob: a,
                sb: 2,
                pb: d
            };
            a = e
        }
        throw Error("Contexts not in same DOM.");
    };

    function Xg(a, b, c, d = []) {
        a = [].concat(a, d);
        b = new Yg(b, c);
        for (let e of a) e.Cb() || e.Ja() || (c = e, b.g.push(c), b.l.add(x(c)));
        return b
    }
    class Yg extends Lg {
        constructor(a, b) {
            super();
            this.j = a;
            this.v = b
        }
        m(a, b = !1) {
            const c = a.j();
            b = b ? Kg(this) : this.g.slice(0);
            for (let f = 0; f < b.length; ++f) {
                var d = b[f];
                if (!Mf(d)) continue;
                var e = d.j();
                if (!df(e, c)) continue;
                const g = Tg(this.v, d, a);
                !(e = 0 < g) && (e = 0 == g && !(d != a && fd(d.C, a.C))) && (e = a, bg(d) && !bg(e) ? e = !0 : !bg(d) && bg(e) ? e = !1 : (e = this.j.map.get(x(e)), d = this.j.map.get(x(d)), e = e && d && e.end.aa() < d.start.aa() ? !0 : !1));
                if (e) return !0
            }
            return !1
        }
    };
    class Zg {
        constructor(a, b) {
            this.Jc = a;
            this.Pc = b
        }
    };

    function $g(a, b) {
        let c = 0,
            d = null;
        const e = a.g.slice(0);
        for (let f = 0; f < e.length; ++f) {
            const g = a.j.map.get(x(e[f]));
            g.end.aa() < b && g.end.aa() > c && (d = g, c = g.end.aa())
        }
        return d
    }
    class ah extends Lg {
        constructor(a) {
            super();
            this.j = a
        }
    };
    const bh = class extends ah {
        constructor(a, b) {
            super(a);
            this.v = b
        }
        m(a, b = !1) {
            const c = a.j(),
                d = Vf(a);
            b = b ? Kg(this) : this.g.slice(0);
            for (let e = 0; e < b.length; ++e) {
                const f = b[e];
                if (Mf(f) && (d || !(0 < Tg(this.v, a, f))) && df(b[e].j(), c)) return !0
            }
            return !1
        }
    };
    const ch = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.g = c
        }
    };
    const dh = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.j = a;
            this.v = b;
            this.L = c;
            this.O = d;
            this.m = e;
            this.l = f;
            this.g = g;
            this.A = h
        }
    };
    const eh = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.m = b;
            this.l = c;
            this.g = d
        }
    };
    class fh {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a) return [9];
            a = a.j();
            a = a.right - a.left;
            return this.j <= a && a <= this.l ? [] : [4]
        }
    };
    const gh = class {
        constructor(a, b) {
            this.g = a;
            this.j = b || null
        }
    };

    function hh(a) {
        if (0 != a.l) throw Error("Already resolved/rejected.");
    }
    var kh = class {
        constructor() {
            this.g = new ih(this);
            this.l = 0
        }
        resolve(a) {
            hh(this);
            this.l = 1;
            this.v = a;
            jh(this.g)
        }
        j(a) {
            hh(this);
            this.l = 2;
            this.m = a;
            jh(this.g)
        }
    };

    function jh(a) {
        switch (a.g.l) {
            case 0:
                break;
            case 1:
                a.j && a.j(a.g.v);
                break;
            case 2:
                a.l && a.l(a.g.m);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var ih = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.j) throw Error("Then functions already set.");
            this.j = a;
            this.l = b;
            jh(this)
        }
    };

    function lh(a, b, c) {
        var d = new kh;
        a.g(new gh(function() {
            d.resolve(b())
        }, c));
        return d.g
    }

    function mh(a, b, c, d) {
        a.g(new gh(function() {
            b.resolve(c)
        }, d))
    }

    function nh(a, b) {
        a.g(new gh(function() {
            b.j("n")
        }, "rrej"))
    }
    var oh = class {};
    class ph {
        constructor(a) {
            this.g = a
        }
    };

    function qh(a, b) {
        var c = new kh;
        a.g.g(new gh(function() {
            rh(a, b, c)
        }, "idom"));
        return c.g
    }

    function sh(a) {
        return lh(a.g, function() {
            return new Jg
        }, "icla")
    }

    function th(a, b, c) {
        var d = new kh;
        uh(a, b, new ph(c.g)).then(function(e) {
            vh(a, b).then(function(f) {
                wh(a, b, e).then(function(g) {
                    d.resolve(new ch(f, g, e))
                })
            })
        });
        return d.g
    }

    function xh(a, b, c) {
        var d = new kh;
        qh(a, b).then(function(e) {
            sh(a).then(function(f) {
                th(a, e, f).then(function(g) {
                    mh(a.g, d, new eh(e, g, f, c))
                }, y(d.j, d))
            }, y(d.j, d))
        }, y(d.j, d));
        return d.g
    }

    function rh(a, b, c) {
        var d = b.document.body;
        if (d) {
            var e = b.document.body.getBoundingClientRect().width;
            if (null == e) c.j("bw");
            else {
                var f = T(b),
                    g = S(b).clientHeight;
                if (null == f || null == g) c.j("vp");
                else {
                    var h = (new mg(d, !0)).g(d);
                    if (h) {
                        var k = new Wg;
                        yh(a, h).then(function(l) {
                            Jf = l;
                            zh(a, h).then(function(m) {
                                c.resolve(new dh(b, e, f, g, h, l, m, k))
                            })
                        })
                    } else c.j("nt")
                }
            }
        } else c.j("b")
    }

    function yh(a, b) {
        return lh(a.g, function() {
            const c = [];
            Qf(b, c);
            return c
        }, "iflt")
    }

    function zh(a, b) {
        return lh(a.g, function() {
            const c = {
                map: new R,
                oa: []
            };
            Og(b, 0, c);
            return c
        }, "intm")
    }

    function uh(a, b, c) {
        return lh(a.g, function() {
            var d = b.l;
            const e = new bh(b.g, b.A),
                f = new ng(Fg(c.g), 6);
            for (let g of d) f.g(g) && (d = g, e.g.push(d), e.l.add(x(d)));
            return e
        }, "ivis")
    }

    function vh(a, b) {
        return lh(a.g, function() {
            var c = zg(b.l);
            return Xg(b.l, b.g, b.A, c)
        }, "ibck")
    }

    function wh(a, b, c) {
        return lh(a.g, function() {
            var d = b.g;
            const e = new R;
            var f = 0;
            for (var g = 0; g < d.oa.length; ++g) {
                var h = d.oa[g],
                    k = h.g,
                    l;
                if (l = 1 == h.j) l = V(k, "float"), l = "left" == l || "right" == l;
                l && (k = k.j().bottom, k > f && (f = k));
                e.set(x(h), f)
            }
            f = new R;
            g = Number.MAX_VALUE;
            for (h = d.oa.length - 1; 0 <= h; --h) k = d.oa[h], l = k.g, 0 == k.j && c.contains(l) && (l = l.j().top, l < g && (g = l)), f.set(x(k), g);
            d = new R;
            g = af(e);
            for (h = 0; h < g.length; ++h) {
                k = e.get(g[h]);
                l = f.get(g[h]);
                if ("number" !== typeof l) throw Error("No entry in minSubsequentTopBounds for terminal UID!");
                d.set(g[h], new Zg(k, l))
            }
            return d
        }, "irel")
    }
    var Ah = class {
        constructor(a) {
            this.g = a
        }
    };

    function Bh(a) {
        var b = [];
        rf(a.getElementsByTagName("p"), function(c) {
            100 <= Ch(c) && b.push(c)
        });
        return b
    }

    function Ch(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        rf(a.childNodes, function(c) {
            b += Ch(c)
        });
        return b
    }

    function Dh(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Eh(a, b) {
        if (null == a.g) return b;
        switch (a.g) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const Fh = class {
        constructor(a, b, c, d) {
            this.m = a;
            this.j = b;
            this.l = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.m)
            } catch (f) {}
            if (!b.length) return [];
            a = Ka(b);
            a = Eh(this, a);
            "number" === typeof this.j && (b = this.j, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.l) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Bh(a[c]),
                        e = this.l;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.m,
                occurrenceIndex: this.j,
                paragraphIndex: this.l,
                ignoreMode: this.g
            })
        }
    };

    function Gh(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };
    class Hh {
        constructor(a = 1) {
            this.g = a
        }
        next() {
            var a = 48271 * this.g % 2147483647;
            this.g = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.g / 2147483647
        }
    };

    function Ih(a, b, c) {
        const d = [];
        for (const e of a.g) b(e) ? d.push(e) : c(e);
        return new Jh(d)
    }

    function Kh(a, b = 1) {
        a = a.g.slice(0);
        const c = new Hh(b);
        Ma(a, () => c.next());
        return new Jh(a)
    }
    const Jh = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Jh(Ga(this.g, a))
        }
        apply(a) {
            return new Jh(a(this.g.slice(0)))
        }
        sort(a) {
            return new Jh(this.g.slice(0).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new Jh(b)
        }
    };
    var Lh = class extends D {
        getId() {
            return fc(this, 3)
        }
    };
    Lh.La = [4];
    class Mh {
        constructor(a, {
            uc: b,
            xd: c,
            Hd: d,
            Vc: e
        }) {
            this.v = a;
            this.j = c;
            this.m = new Jh(b || []);
            this.g = e;
            this.l = d
        }
    };
    var Nh = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new R;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Ph = a => {
            var b = Oh(a);
            a = [];
            for (let c of b) b = String(c.Wa), a.push(c.Na + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Oh = a => {
            const b = [],
                c = a.m;
            c && c.g.length && b.push({
                Na: "a",
                Wa: Qh(c)
            });
            null != a.j && b.push({
                Na: "as",
                Wa: a.j
            });
            null != a.l && b.push({
                Na: "i",
                Wa: String(a.l)
            });
            null != a.g && b.push({
                Na: "rp",
                Wa: String(a.g)
            });
            b.sort(function(d, e) {
                return d.Na.localeCompare(e.Na)
            });
            b.unshift({
                Na: "t",
                Wa: Rh(a.v)
            });
            return b
        },
        Rh = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Qh = a => {
            a = a.g.slice(0).map(Sh);
            a = JSON.stringify(a); {
                const c = a.length;
                if (0 == c) a = 0;
                else {
                    var b = 305419896;
                    for (let d = 0; d <
                        c; d++) b ^= (b << 5) + (b >> 2) + a.charCodeAt(d) & 4294967295;
                    a = 0 < b ? b : 4294967296 + b
                }
            }
            return a
        },
        Sh = a => {
            const b = {};
            null != fc(a, 7) && (b.q = fc(a, 7));
            null != ec(a, 2) && (b.o = ec(a, 2));
            null != ec(a, 5) && (b.p = ec(a, 5));
            return b
        };
    var Th = class extends D {
        setLocation(a) {
            return Vb(this, 1, null == a ? a : yb(a))
        }
    };
    var Uh = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        Vh = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var Wh = new Uh(1196),
        Xh = new Uh(313),
        Yh = new Uh(1298),
        Zh = new Vh(1245, 3600),
        $h = new Uh(1284, !0),
        ai = new Uh(557143911),
        bi = new Uh(541943501),
        ci = new Vh(550718588),
        di = new Uh(531007060),
        ei = new Uh(531582260);
    var fi = class {
        constructor() {
            const a = {};
            this.l = (b, c) => null != a[b] ? a[b] : c;
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.v = (b, c) => null != a[b] ? a[b] : c;
            this.j = () => {}
        }
    };

    function gi(a) {
        return Q(fi).l(a.g, a.defaultValue)
    };

    function hi(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        Gh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function ii(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Gh(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var ki = (a, b, c) => {
        if (gi(Xh)) {
            var d = ji(b, c);
            if (d.qa) {
                for (c = b = d.qa; c = d.W(c);) b = c;
                d = {
                    anchor: b,
                    position: d.mb
                }
            } else d = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = 0;
            hi(a, d.anchor, d.position)
        } else hi(a, b, c)
    };

    function ji(a, b) {
        const c = e => {
                e = li(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = li(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    qa: mi(a.previousSibling, c),
                    W: e => mi(e.previousSibling, c),
                    mb: 0
                };
            case 2:
                return {
                    qa: mi(a.lastChild, c),
                    W: e => mi(e.previousSibling, c),
                    mb: 0
                };
            case 3:
                return {
                    qa: mi(a.nextSibling, d),
                    W: e => mi(e.nextSibling, d),
                    mb: 3
                };
            case 1:
                return {
                    qa: mi(a.firstChild, d),
                    W: e => mi(e.nextSibling, d),
                    mb: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function li(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function mi(a, b) {
        return a && b(a) ? a : null
    };
    var ni = {
        0: 0,
        1: 1,
        2: 2,
        3: 3
    };
    var oi = {
            BODY: {
                ba: [1, 2],
                ja: !1,
                ka: 2,
                ia: 4
            },
            HEADER: {
                ba: [0, 3, 1, 2],
                ja: !1,
                ka: 1,
                ia: 3
            },
            NAV: {
                ba: [0, 3],
                ja: !1,
                ka: 1,
                ia: 3
            },
            H1: {
                ba: [0],
                ja: !1,
                ka: 1,
                ia: 2
            },
            IMG: {
                ba: [0, 3],
                ja: !0,
                ka: 0,
                ia: 1
            },
            DIV: {
                ba: [0, 3, 1, 2],
                ja: !0,
                ka: 0,
                ia: 1
            },
            TABLE: {
                ba: [0, 3],
                ja: !0,
                ka: 0,
                ia: 1
            },
            TD: {
                ba: [1, 2],
                ja: !0,
                ka: 0,
                ia: 1
            },
            ASIDE: {
                ba: [0, 3, 1, 2],
                ja: !0,
                ka: 0,
                ia: 1
            },
            LI: {
                ba: [1, 2],
                ja: !0,
                ka: 0,
                ia: 1
            },
            SECTION: {
                ba: [0, 3, 1, 2],
                ja: !0,
                ka: 0,
                ia: 1
            }
        },
        pi = a => ({
            ba: a.ba.slice(0),
            ja: a.ja,
            ka: a.ka,
            ia: a.ia
        }),
        qi = (a, b) => {
            const c = pi(a);
            c.ba = Ga(a.ba, d => b[d]);
            return c
        };

    function ri(a) {
        var b = a.length - 1,
            c = new wf;
        c.next = function() {
            return 0 > b ? xf : {
                value: a[b--],
                done: !1
            }
        };
        return c
    };
    var si = {
            0: !0,
            1: !0
        },
        ti = {
            2: !0,
            3: !0
        },
        ui = {
            3: !0
        },
        vi = class {
            constructor(a, b, c) {
                this.l = a;
                this.j = b;
                this.g = c
            }
            W() {
                for (var a = zf(this.j); null !== a; a = zf(this.j)) {
                    var b = a.g;
                    if (1 != b.C.nodeType) b = null;
                    else {
                        var c = oi[b.C.tagName];
                        c ? (a = qi(c, 0 == a.j ? si : 0 < Nf(a.g).length ? ti : ui), b = {
                            node: b,
                            tb: a,
                            identifier: {}
                        }) : b = null
                    }
                    if (b && (a = b.node.j().getWidth(), c = this.l, null == a || null == c ? 0 : a >= c * this.g.m && a <= c * this.g.j)) return a = new kh, a.resolve(b), a.g
                }
                b = new kh;
                b.j("na");
                return b.g
            }
        };
    var wi = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var xi = (a, b) => {
        do {
            const c = sd(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };
    var yi = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        zi = (a, b, c, d, e) => {
            if (a !== a.top) return pd(a) ? 3 : 16;
            if (!(488 > T(a))) return 4;
            if (!ff(a)) return 5;
            const f = T(a);
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c = b.parentElement;
                    for (b = T(a); c; c = c.parentElement)
                        if ((d = sd(c, a)) && (e = L(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        Ai = (a, b,
            c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Bi = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = sd(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        Ci = (a, b, c) => {
            a = yi(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var Di = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = sd(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Ai(b, c, "0px");
            b.style.width = T(a) + "px";
            if (0 !== Ci(a, b, c)) {
                Ai(b, c, "0px");
                var d = Ci(a, b, c);
                Ai(b, c, -1 * d + "px");
                a = Ci(a, b, c);
                0 !== a && a !== d && Ai(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var Ei = class {
        constructor(a, b) {
            this.Ka = a;
            this.l = b
        }
        height() {
            return this.l
        }
        g(a) {
            return 300 < a && 300 < this.l ? this.Ka : Math.min(1200, Math.round(a))
        }
        j() {}
    };
    var Fi = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = sd(a, b)) && e[c] && d(e[c]) || null
        },
        Gi = a => b => b.Ka <= a,
        Ji = (a, b, c, d) => {
            const e = a && Hi(c, b),
                f = Ii(b, d);
            return g => !(e && g.height() >= f)
        },
        Ki = a => b => b.height() <= a,
        Hi = (a, b) => {
            a = yi(a, b);
            return (a ? a.y : 0) < S(b).clientHeight - 100
        },
        Li = (a, b) => {
            var c = Fi(b, a, "height", L);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = Fi(b, a, "height", L);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && L(b.style.height)) && (c = Math.min(c, d)), (d = Fi(b,
                a, "maxHeight", L)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const Ii = (a, b) => {
        const c = a.google_unique_id;
        return b && 0 == ("number" === typeof c ? c : 0) ? Math.max(250, 2 * S(a).clientHeight / 3) : 250
    };

    function Mi(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Uc(d.property);
            a[e] = d.value
        }
    }

    function Ni(a, b, c) {
        var d = [];
        if (c = c && c.g()) a.Ya.className = c.join(" ");
        a = a.Ea;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        d.length && a.setAttribute("data-ad-channel", d.join("+"))
    }

    function Oi(a, b) {
        var c = b.vb || !1;
        const d = (new Xc(a)).createElement("DIV"),
            e = d.style;
        e.width = "100%";
        e.height = "auto";
        e.clear = c ? "both" : "none";
        c = d.style;
        c.textAlign = "center";
        b.lb && Mi(c, b.lb);
        a = (new Xc(a)).createElement("INS");
        c = a.style;
        c.display = "block";
        c.margin = "auto";
        c.backgroundColor = "transparent";
        b.Hb && (c.marginTop = b.Hb);
        b.ub && (c.marginBottom = b.ub);
        b.eb && Mi(c, b.eb);
        d.appendChild(a);
        return {
            Ya: d,
            Ea: a
        }
    };

    function Pi(a, b = !1) {
        if (a.na) return a.na;
        if (b = a.G(b)) If(), !a.g && b && (a.g = b.j());
        return b
    }

    function Qi(a) {
        return a.D.node || null
    }

    function Ri(a) {
        return (a = Qi(a)) && a.m() ? Gh(a.C) : !1
    }

    function Si(a) {
        return af(a.F.g).map(b => {
            switch (b) {
                case 1:
                    return "IN ARTICLE";
                case 2:
                    return "ABOVE FOOTER";
                case 3:
                    return "ABOVE COMMENT";
                case 4:
                    return "PEDESTAL";
                case 5:
                    return "BELOW CONTENT";
                default:
                    return null
            }
        }).filter(b => null != b).join(", ")
    }
    class Ti {
        constructor(a) {
            this.D = a.j;
            this.j = a.m;
            this.g = this.na = null;
            this.m = !1;
            this.F = new tf(af(a.g.g))
        }
        A() {}
        G() {}
        B() {}
        l() {}
    }
    var Ui = class {
        constructor(a, b) {
            this.j = a;
            this.m = b;
            this.g = new tf;
            this.l = []
        }
        build() {}
    };

    function Vi(a, b) {
        La(a.l, b);
        return a
    }
    class Wi {
        constructor() {
            this.j = [];
            this.l = [];
            this.m = []
        }
        g(a) {
            if (a = Qi(a)) {
                for (var b = 0; b < this.m.length; ++b)
                    if (dg(a, this.m[b])) return [6];
                for (b = 0; b < this.j.length; ++b)
                    if (eg(a, this.j[b])) return [6];
                for (b = 0; b < this.l.length; ++b)
                    if (fg(a, this.l[b])) return [6]
            }
            return []
        }
    }
    var Xi = [/cookie/, /(^|(-|_))sticky((-|_)|$)/],
        Yi = [/(^|(-|_))tab((-|_)|$)/, /(^|(-|_))tabs((-|_)|$)/],
        Zi = [/(^|(-|_))slider((-|_)|$)/, /(^|(-|_))swiper((-|_)|$)/],
        $i = [/(^|(-|_))taboola((-|_)|$)/, /(^|(-|_))OUTBRAIN((-|_)|$)/, /(^|(-|_))revcontent((-|_)|$)/],
        aj = ["A", "FORM", "BUTTON"];

    function bj(a) {
        return b => !!(b.bb & a)
    }
    class W extends Ei {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.bb = c;
            this.Hc = d
        }
        qb() {
            return this.bb
        }
        j(a, b, c) {
            if (!b.google_ad_resize || gi(Yh)) c.style.height = this.height() + "px", b.rpe = !0
        }
    };
    const cj = {
            image_stacked: 1 / 1.91,
            image_sidebyside: 1 / 3.82,
            mobile_banner_image_sidebyside: 1 / 3.82,
            pub_control_image_stacked: 1 / 1.91,
            pub_control_image_sidebyside: 1 / 3.82,
            pub_control_image_card_stacked: 1 / 1.91,
            pub_control_image_card_sidebyside: 1 / 3.74,
            pub_control_text: 0,
            pub_control_text_card: 0
        },
        dj = {
            image_stacked: 80,
            image_sidebyside: 0,
            mobile_banner_image_sidebyside: 0,
            pub_control_image_stacked: 80,
            pub_control_image_sidebyside: 0,
            pub_control_image_card_stacked: 85,
            pub_control_image_card_sidebyside: 0,
            pub_control_text: 80,
            pub_control_text_card: 80
        },
        ej = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function gj(a) {
        var b = 0;
        a.Da && b++;
        a.ra && b++;
        a.sa && b++;
        if (3 > b) return {
            va: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.Da.split(",");
        const c = a.sa.split(",");
        a = a.ra.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            va: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            va: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                va: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                va: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            sa: d,
            ra: e,
            Ub: b
        }
    }

    function hj(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };

    function ij(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = jj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function jj(a) {
        let b = "";
        ud(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    const kj = Na("script");
    class lj {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, l = null, m = null, n = null) {
            this.A = a;
            this.R = b;
            this.bb = c;
            this.g = d;
            this.F = e;
            this.j = f;
            this.l = g;
            this.G = h;
            this.B = k;
            this.m = l;
            this.v = m;
            this.D = n
        }
        size() {
            return this.R
        }
    };
    class mj extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, mj) : this.stack = Error().stack || ""
        }
    };
    var nj = class extends Ei {
            g(a) {
                return Math.min(1200, Math.max(this.Ka, Math.round(a)))
            }
        },
        qj = (a, b) => {
            oj(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new lj(9, new nj(a, Math.floor(a * b.google_phwr)));
            var c = hd();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * cj.mobile_banner_image_sidebyside + dj.mobile_banner_image_sidebyside) + 96), a = {
                Va: a,
                Ua: c,
                ra: 1,
                sa: 12,
                Da: "mobile_banner_image_sidebyside"
            }) : (a = hj(a), a = {
                Va: a.width,
                Ua: a.height,
                ra: 1,
                sa: 13,
                Da: "image_sidebyside"
            }) : (a = hj(a), a = {
                Va: a.width,
                Ua: a.height,
                ra: 4,
                sa: 2,
                Da: "image_stacked"
            });
            pj(b, a);
            return new lj(9, new nj(a.Va, a.Ua))
        },
        rj = (a, b) => {
            oj(a, b);
            var c = gj({
                sa: b.google_content_recommendation_rows_num,
                ra: b.google_content_recommendation_columns_num,
                Da: b.google_content_recommendation_ui_type
            });
            if (c.va) a = {
                Va: 0,
                Ua: 0,
                ra: 0,
                sa: 0,
                Da: "image_stacked",
                va: c.va
            };
            else {
                var d = 2 === c.Ub.length && 468 <= a ? 1 : 0;
                var e = c.Ub[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = ej[e];
                let g = c.ra[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.sa[d];
                c = Math.floor(((a - 8 * f - 8) / f *
                    cj[e] + dj[e]) * d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    Xc: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    Xc: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    Va: a.width,
                    Ua: a.height,
                    ra: f,
                    sa: d,
                    Da: e
                }
            }
            if (a.va) throw new mj(a.va);
            pj(b, a);
            return new lj(9, new nj(a.Va, a.Ua))
        };

    function oj(a, b) {
        if (0 >= a) throw new mj("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function pj(a, b) {
        a.google_content_recommendation_ui_type = b.Da;
        a.google_content_recommendation_columns_num = b.ra;
        a.google_content_recommendation_rows_num = b.sa
    };
    class sj extends Ei {
        g() {
            return this.Ka
        }
        j(a, b, c) {
            Di(a, c);
            if (!b.google_ad_resize || gi(Yh)) c.style.height = this.height() + "px", b.rpe = !0
        }
    };
    const tj = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var uj = class extends Ei {
            g() {
                return Math.min(1200, this.Ka)
            }
        },
        vj = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = zi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = T(b))
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const k = g.parentElement.childNodes;
                                for (let l = 0; l < k.length; ++l) {
                                    const m = k[l];
                                    if (m != g && Bi(b, m)) break b
                                }
                                g = g.parentElement;
                                g.style.width = "100%";
                                g.style.height = "auto"
                            }
                        }
                        Di(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new mj("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new mj("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new lj(11, new Ei(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b = null;
                if (!b) throw new mj("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new mj("Invalid height: height=" + f);
                if (50 > f) throw new mj("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new mj("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new lj(11, new Ei(a, f))
            }
            d = tj[f];
            if (!d) throw new mj("Invalid data-ad-layout value: " + f);
            c = Hi(c, b);
            b = T(b);
            b = "in-article" !==
                f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new lj(11, "in-article" == f ? new uj(a, b) : new Ei(a, b))
        };
    var wj = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        yj = (a, b) => {
            var c = xj.slice(0);
            const d = c.length;
            let e = null;
            for (let f = 0; f < d; ++f) {
                const g = c[f];
                if (a(g)) {
                    if (!b || b(g)) return g;
                    null === e && (e = g)
                }
            }
            return e
        };
    var Y = [new W(970, 90, 2), new W(728, 90, 2), new W(468, 60, 2), new W(336, 280, 1), new W(320, 100, 2), new W(320, 50, 2), new W(300, 600, 4), new W(300, 250, 1), new W(250, 250, 1), new W(234, 60, 2), new W(200, 200, 1), new W(180, 150, 1), new W(160, 600, 4), new W(125, 125, 1), new W(120, 600, 4), new W(120, 240, 4), new W(120, 120, 1, !0)],
        xj = [Y[6], Y[12], Y[3], Y[0], Y[7], Y[14], Y[1], Y[8], Y[10], Y[4], Y[15], Y[2], Y[11], Y[5], Y[13], Y[9], Y[16]];
    let zj, Aj;
    const Bj = new qe(t);
    ((a, b = !0) => {
        zj = a || new Ve;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        Ue(zj, t.google_srt);
        Aj = new ze(zj, b, Bj);
        Aj.m(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || pe(Bj) : Bj.g && G(t, "load", () => {
            t.google_measure_js_timing || pe(Bj)
        })
    })();
    var Cj = (a, b, c) => Aj.ua(a, b, c),
        Dj = (a, b) => Aj.K(a, b),
        Ej = (a, b, c) => {
            const d = Q(Te).g();
            !b.eid && d.length && (b.eid = d.toString());
            ye(zj, a, b, !0, c)
        };
    var Fj = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                ga: a,
                ha: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || "auto" == b || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(b) || e.google_ad_resize ? (b = zi(c, d, a, .3, e), !0 !== b ? e = b : "true" == e.google_full_width_responsive || xi(d, c) ? (e = T(c), b = e - a, e = e && 0 <= b ? !0 : e ? -10 > b ? 11 : 0 > b ? 14 : 12 : 10) : e = 9, c = !0 !== e ? {
                ga: a,
                ha: e
            } : {
                ga: T(c) || a,
                ha: !0
            }) : c = {
                ga: a,
                ha: 2
            };
            const {
                ga: f,
                ha: g
            } = c;
            return !0 !== g ? {
                ga: a,
                ha: g
            } : d.parentElement ? {
                ga: f,
                ha: g
            } : {
                ga: a,
                ha: g
            }
        },
        Ij = (a, b, c, d, e) => {
            const {
                ga: f,
                ha: g
            } = Cj(247, () => Fj(a, b, c, d, e));
            var h = !0 === g;
            const k = L(d.style.width),
                l = L(d.style.height),
                {
                    Oa: m,
                    Ia: n,
                    qb: q,
                    Rb: r
                } = Gj(f, b, c, d, e, h);
            h = Hj(b, q);
            var u;
            const v = (u = Fi(d, c, "marginLeft", L)) ? u + "px" : "",
                E = (u = Fi(d, c, "marginRight", L)) ? u + "px" : "";
            u = Fi(d, c, "zIndex") || "";
            return new lj(h, m, q, null, r, g, n, v, E, l, k, u)
        },
        Gj = (a, b, c, d, e, f) => {
            b = Jj(c, a, b);
            let g;
            var h = !1;
            let k = !1;
            var l = 488 > T(c);
            if (l) {
                g = xi(d, c);
                var m = Hi(d, c);
                h = !m && g;
                k = m && g
            }
            m = [Gi(a), bj(b)];
            m.push(Ji(l, c, d, k));
            null != e.google_max_responsive_height && m.push(Ki(e.google_max_responsive_height));
            l = [u => !u.Hc];
            if (h || k) h = Li(c, d), l.push(Ki(h));
            let n = yj(wj(m), wj(l));
            if (!n) throw new mj("No slot size for availableWidth=" + a);
            const {
                Oa: q,
                Ia: r
            } = Cj(248, () => {
                var u;
                a: if (f) {
                    if (e.gfwrnh && (u = L(e.gfwrnh))) {
                        u = {
                            Oa: new sj(a, u),
                            Ia: !0
                        };
                        break a
                    }
                    u = a / 1.2;
                    var v = Math;
                    var E = v.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var J = Infinity;
                    else {
                        J = d;
                        let w = Infinity;
                        do {
                            var K = Fi(J, c, "height", L);
                            K && (w = Math.min(w, K));
                            (K = Fi(J, c, "maxHeight", L)) && (w = Math.min(w, K))
                        } while ((J = J.parentElement) && "HTML" != J.tagName);
                        J = w
                    }
                    v = E.call(v, u, J);
                    if (v < .5 * u || 100 > v) v = u;
                    u = {
                        Oa: new sj(a, Math.floor(v)),
                        Ia: v < u ? 102 : !0
                    }
                } else u = {
                    Oa: n,
                    Ia: 100
                };
                return u
            });
            return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                Oa: Kj(a, c, d, q, e),
                Ia: !1,
                qb: b,
                Rb: g
            } : {
                Oa: q,
                Ia: r,
                qb: b,
                Rb: g
            }
        };
    const Hj = (a, b) => {
            if ("auto" == a) return 1;
            switch (b) {
                case 2:
                    return 2;
                case 1:
                    return 3;
                case 4:
                    return 4;
                case 3:
                    return 5;
                case 6:
                    return 6;
                case 5:
                    return 7;
                case 7:
                    return 8
            }
            throw Error("bad mask");
        },
        Jj = (a, b, c) => {
            if ("auto" == c) c = Math.min(1200, T(a)), b = .25 >= b / c ? 4 : 3;
            else {
                b = 0;
                for (let d in wi) - 1 != c.indexOf(d) && (b |= wi[d])
            }
            return b
        },
        Kj = (a, b, c, d, e) => {
            const f = e.google_ad_height || Fi(c, b, "height", L);
            b = vj(a, b, c, f, e).size();
            return b.Ka * b.height() > a * d.height() ? new W(b.Ka, b.height(), 1) : d
        };
    var Lj = (a, b, c, d, e) => {
        var f;
        (f = T(b)) ? 488 > T(b) ? ff(b) ? (e.google_full_width_responsive_allowed = !0, Di(b, c), f = {
            ga: f,
            ha: !0
        }) : f = {
            ga: a,
            ha: 5
        } : f = {
            ga: a,
            ha: 4
        }: f = {
            ga: a,
            ha: 10
        };
        const {
            ga: g,
            ha: h
        } = f;
        if (!0 !== h || a == g) return new lj(12, new Ei(a, d), null, null, !0, h, 100);
        const {
            Oa: k,
            Ia: l,
            qb: m
        } = Gj(g, "auto", b, c, e, !0);
        return new lj(1, k, m, 2, !0, h, l)
    };
    const Mj = (a, b, c, d, e) => {
        const f = d.google_ad_height || Fi(c, e, "height", L);
        switch (a) {
            case 5:
                const {
                    ga: g,
                    ha: h
                } = Cj(247, () => Fj(b, d.google_ad_format, e, c, d));
                !0 === h && b != g && Di(e, c);
                !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                return qj(g, d);
            case 9:
                return rj(b, d);
            case 8:
                return vj(b, e, c, f, d);
            case 10:
                return Lj(b, e, c, f, d)
        }
    };
    class Nj extends Ti {
        constructor(a) {
            super(a);
            this.v = ""
        }
        A() {
            return 1
        }
        G(a = !1) {
            const b = Qi(this);
            if (!b) return null;
            Ri(this) && (this.v = b.C.style.display);
            var c = Si(this),
                d = Kf(b),
                e = Oi(d, {
                    Hb: "10px",
                    ub: "10px",
                    vb: this.m
                });
            e.Ya.className = "google-auto-placed";
            const f = e.Ea;
            var g = f.style;
            g.display = "inline-block";
            g.boxSizing = "border-box";
            g.width = "100%";
            g.height = a ? "auto" : "100px";
            g.backgroundColor = "#f60";
            g.border = "#000 solid 1px";
            c && (g = d.createElement("span"), g.style.fontSize = "small", g.appendChild(d.createTextNode(c)),
                f.appendChild(g));
            c = e.Ya;
            e = e.Ea;
            ki(c, b.C, ni[this.j]);
            if (a) try {
                this.B(e, cd())
            } catch (h) {
                e.style.height = "100px"
            }
            this.na = b.l.g(c);
            this.na || (c.parentNode.removeChild(c), Ri(this) && (b.C.style.display = this.v));
            return this.na
        }
        B(a, b) {
            var c = {
                    google_ad_format: "auto"
                },
                d = 1,
                e = a.offsetWidth || (c.google_ad_resize || !1) && Fi(a, b, "width", L) || c.google_ad_width || 0;
            4 === d && (c.google_ad_format = "auto", d = 1);
            var f = (f = Mj(d, e, a, c, b)) ? f : Ij(e, c.google_ad_format, b, a, c);
            f.size().j(b, c, a);
            null != f.bb && (c.google_responsive_formats = f.bb);
            null != f.F && (c.google_safe_for_responsive_override = f.F);
            null != f.j && (!0 === f.j ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = f.j));
            null != f.l && !0 !== f.l && (c.gfwrnher = f.l);
            b = f.v || c.google_ad_width;
            null != b && (c.google_resizing_width = b);
            b = f.m || c.google_ad_height;
            null != b && (c.google_resizing_height = b);
            b = f.size().g(e);
            const g = f.size().height();
            if (!c.google_ad_resize || gi(Yh)) {
                c.google_ad_width = b;
                c.google_ad_height = g;
                var h = f.size();
                e = h.g(e) + "x" + h.height();
                c.google_ad_format =
                    e;
                c.google_responsive_auto_format = f.A;
                null != f.g && (c.armr = f.g);
                c.google_ad_resizable = !0;
                c.google_override_format = 1;
                c.google_loader_features_used = 128;
                !0 === f.j && (c.gfwrnh = f.size().height() + "px")
            }
            null != f.G && (c.gfwroml = f.G);
            null != f.B && (c.gfwromr = f.B);
            null != f.m && (c.gfwroh = f.m);
            null != f.v && (c.gfwrow = f.v);
            null != f.D && (c.gfwroz = f.D);
            e = pd(window) || window;
            ij(e.location, "google_responsive_dummy_ad") && (Ja([1, 2, 3, 4, 5, 6, 7, 8], f.A) || 1 === f.g) && 2 !== f.g && (e = JSON.stringify({
                    googMsgType: "adpnt",
                    key_value: [{
                        key: "qid",
                        value: "DUMMY_AD"
                    }]
                }),
                c.dash = `<${kj}>window.top.postMessage('${e}', '*'); 
          </${kj}> 
          <div id="dummyAd" style="width:${b}px;height:${g}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${b}x${g}</p> 
            <p>Rendered size:${b}x${g}</p> 
          </div>`);
            1 != d && (c = f.size().height(), a.style.height = c + "px")
        }
        l() {
            if (this.na) {
                var a = this.na;
                a.C.parentNode && a.C.parentNode.removeChild(a.C);
                this.na = null;
                Ri(this) && (Qi(this).C.style.display = this.v);
                If()
            }
        }
    }
    var Oj = class extends Ui {
        build() {
            return new Nj(this)
        }
    };
    new tf(["comments"]);
    new tf(["allcomments"]);
    new tf(["post-container", "post", "type-post"]);
    var Qj = (a, b, c) => {
            const d = [];
            a.map(e => Pj(e, b, c)).forEach(e => La(d, e));
            return d
        },
        Pj = (a, b, c) => {
            const d = a.tb.ba,
                e = a.node;
            if (!e) return [];
            const f = [];
            e.g() && Ja(d, 0) && f.push(0);
            Ja(d, 1) && f.push(1);
            Ja(d, 2) && (!Ja(d, 1) || 0 < Nf(e).length) && f.push(2);
            e.g() && Ja(d, 3) && f.push(3);
            return f.map(g => {
                g = new Oj(a, g);
                b.forEach(g.g.add, g.g);
                g.l.push(...c);
                return g.build()
            })
        },
        Rj = (a, b) => {
            a = Qi(b) ? a.map.get(x(Qi(b))) : void 0;
            if (!a) return -1;
            switch (b.j) {
                case 0:
                    return a.start.aa();
                case 1:
                    return a.start.aa() + 1;
                case 2:
                    return a.end.aa();
                case 3:
                    return a.end.aa() + 1
            }
            return -1
        },
        Sj = (a, b) => {
            a = Qi(b) ? a.map.get(x(Qi(b))) : void 0;
            if (!a) return -1;
            switch (b.j) {
                case 0:
                    return a.start.aa() - .1;
                case 3:
                    return a.end.aa() + .1;
                case 1:
                    return a.start.aa() + .1;
                case 2:
                    return a.end.aa() - .1
            }
            return -1
        };

    function Tj(a, b) {
        b && a.g.push(b);
        return a
    }

    function Uj(a, b) {
        a.j.push(b);
        return a
    }

    function Vj(a, b) {
        return lh(a.m, () => {
            const c = [];
            for (let d = 0; d < a.j.length; ++d) {
                const e = a.j[d].g(b);
                La(c, e);
                if (0 < e.length) break
            }
            return c
        }, "flap")
    }

    function Wj(a, b) {
        return lh(a.m, () => {
            if (0 == a.g.length) var c = [];
            else {
                var d = Math.floor(Sj(a.v, b));
                if ((d = -1 != d ? d + b.A() + "|" + b.m + "|10px|10px" : null) && Ze(a.l, d)) c = a.l.get(d);
                else {
                    var e = [],
                        f = Pi(b);
                    try {
                        for (let g = 0; g < a.g.length; ++g)
                            if (c = a.g[g].g(f), La(e, c), 0 < c.length) {
                                b.l();
                                break
                            }
                    } finally {
                        b.l()
                    }
                    null != d && a.l.set(d, e);
                    c = e
                }
            }
            return c
        }, "flfa")
    }

    function Xj(a, b) {
        const c = new kh;
        Vj(a, b).then(d => {
            0 < d.length ? c.resolve(d) : Wj(a, b).then(e => {
                c.resolve(d.concat(e))
            })
        });
        return c.g
    }
    class Yj {
        constructor(a, b) {
            this.m = a;
            this.g = [];
            this.j = [];
            this.v = b;
            this.l = new R
        }
    };
    class Zj {
        constructor(a) {
            this.j = a
        }
        g(a) {
            if (!a) return [];
            for (let b = 0; b < this.j.length; ++b)
                if (this.j[b].m(a, !1)) return [2];
            return []
        }
    };
    class ak {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (!a) return [9];
            const b = gf(this.j, !0);
            return null == b ? [16] : b - a.j().bottom < this.l ? [17] : []
        }
    };
    class bk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            for (a = Math.floor(Sj(this.j, a)); 0 < a; a--) {
                const b = this.j.oa[a];
                if (!b.g.Ja()) {
                    if ((0 == b.j ? Rf(b.g).top : Rf(b.g).bottom) <= this.l) break;
                    return []
                }
            }
            return [10]
        }
    };
    class ck {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
    };
    class dk {
        constructor(a) {
            const b = [];
            a = a.g.slice(0);
            for (let c = 0; c < a.length; ++c) b.push(a[c].j());
            this.l = b;
            this.j = new R
        }
        g(a) {
            const b = x(a);
            if (Ze(this.j, b)) return this.j.get(b);
            a: {
                var c = a.j();c = new ck(c.left, c.top + a.C.scrollHeight, a.C.scrollWidth);
                for (e of this.l) {
                    b: {
                        if (c.g >= Math.floor(e.bottom)) {
                            var d = !1;
                            break b
                        }
                        d = Math.ceil(e.left);
                        const f = c.j + c.l;d = !(Math.floor(e.right) <= c.j || f <= d)
                    }
                    if (d) {
                        var e = !0;
                        break a
                    }
                }
                e = !1
            }
            e = !e && a.C.scrollHeight > a.C.clientHeight && ag(a);
            c = a.g();
            c = !c || this.g(c);
            a = e && c ? !0 : e ? Wf(a) : c &&
                !Wf(a);
            this.j.set(b, a);
            return a
        }
    };
    class ek {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
        g(a) {
            const b = Qi(a);
            if (!b) return [];
            switch (a.j) {
                case 0:
                case 3:
                    return a = b.g(), b != this.l && a && this.j.g(a) ? [] : [14];
                case 1:
                case 2:
                    return this.j.g(b) ? [] : [14];
                default:
                    throw Error("Unhandled position.");
            }
        }
    };
    class fk {
        constructor(a) {
            this.j = a
        }
        g(a) {
            return (a = Qi(a)) && Vf(a, this.j) ? [11] : []
        }
    };
    class gk {};

    function hk(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var kk = (a, b) => {
            var c = Ka(b.document.querySelectorAll(".google-auto-placed"));
            const d = Ka(b.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
                e = Ka(b.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var f;
            (f = ik(b)) || (f = Ka(b.document.querySelectorAll("div[id^=div-gpt-ad]")));
            f = f.concat(Ka(b.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const g = Ka(b.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                h = Ka(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                k = Ka(b.document.querySelectorAll("div.googlepublisherpluginad")),
                l = Ka(b.document.querySelectorAll("html > ins.adsbygoogle"));
            let m = [].concat(Ka(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ka(b.document.querySelectorAll("body ins.adsbygoogle")));
            b = [];
            for (const [n, q] of [
                    [a.Bd, c],
                    [a.Pb, d],
                    [a.Ed, e],
                    [a.Cd, f],
                    [a.Fd, g],
                    [a.Ad, h],
                    [a.Dd, k],
                    [a.Gd, l]
                ]) !1 === n ? b = b.concat(q) : m = m.concat(q);
            a = jk(m);
            c = jk(b);
            a = a.slice(0);
            for (const n of c)
                for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
            return a
        },
        mk = a => {
            const b = ik(cd(Yc(a))) || [];
            return !!gd(a, c => {
                if (!ea(c) || 1 != c.nodeType) return !1;
                const d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return !d || Ja(b, c) || Ia(vd(lk), e => d.call(c, e))
            }, !1, 20)
        };
    const ik = a => {
            const b = hk(a);
            return b ? Ga(Ha(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        lk = {
            hd: "ins.adsbygoogle-ablated-ad-slot",
            kd: "body ins.adsbygoogle",
            jd: "iframe[id^=aswift_],iframe[id^=google_ads_frame]",
            ld: ".google-auto-placed",
            md: "ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]",
            pd: "iframe[id^=google_ads_iframe]",
            rd: "div[id^=div-gpt-ad]",
            td: "ins.adsbygoogle[data-ad-format=autorelaxed]",
            ud: "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]",
            qd: "div.googlepublisherpluginad",
            vd: "html > ins.adsbygoogle"
        };
    var jk = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var nk = Aj.K(453, kk);

    function ok(a) {
        a = pk(a);
        qk(a);
        return new rk(a)
    }

    function sk(a) {
        return a.g.map(b => b.box)
    }
    class rk {
        constructor(a) {
            this.g = a.slice(0)
        }
    }

    function pk(a) {
        const b = nk({
                Pb: !1
            }, a),
            c = kf(a),
            d = U(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || 1 < (f.bottom - f.top) * (f.right - f.left) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                yd: e ? 1 : 0
            } : null
        }).filter(nc(e => null === e))
    }

    function qk(a) {
        Ha(a, () => new gk)
    };
    class tk {
        constructor(a, b, c) {
            this.j = nk({}, c).map(y(a.g, a)).filter(nc(d => null === d));
            this.l = b
        }
        g(a) {
            if (!a) return [9];
            a = a.j();
            for (let d = 0; d < this.j.length; d++) {
                const e = this.j[d].j();
                var b;
                if (b = 1 < (e.bottom - e.top) * (e.right - e.left)) {
                    b = a.top;
                    var c = this.l;
                    (b = e.top - c < b && b < e.bottom + c) || (b = a.bottom, c = this.l, b = e.top - c < b && b < e.bottom + c)
                }
                if (b) return [8]
            }
            return []
        }
    };
    class uk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        g(a) {
            if (Ri(a)) return [];
            a = Sj(this.j.j, a);
            var b = $g(this.j, a);
            if (!b) return [];
            const c = this.l.g(b.start.g);
            b = b.end.aa();
            return c && 10 >= a - b ? [5] : []
        }
    };
    const vk = "ASIDE DIV IMG LI SECTION TABLE TD".split(" ");
    class wk {
        g(a) {
            a = Qi(a);
            if (!a) return [12];
            if (!vk.includes(a.C.tagName) || a.C.id) return [];
            const b = gg(a),
                c = Kf(a);
            for (const d of b)
                if (1 == c.getElementsByClassName(d).length) return [];
            return 150 >= a.j().getHeight() ? [13] : []
        }
    };
    class xk {
        g(a) {
            return a && !a.Ja() && Xf(a) ? [] : [3]
        }
    };

    function yk(a, b) {
        return 0 < a.g.length ? (b.resolve(a.g.shift()), !0) : !1
    }
    class zk {
        constructor(a, b) {
            this.j = a;
            this.v = b;
            this.G = [];
            this.m = [];
            this.g = []
        }
        W() {
            const a = new kh;
            this.j.g(new gh(y(this.l, this, a), "p"));
            return a.g
        }
        l(a) {
            yk(this, a) || this.v.W().then(y(this.A, this, a), y(a.j, a))
        }
        A(a, b) {
            b = Qj([b], this.G, this.m);
            La(this.g, b);
            yk(this, a) || this.j.g(new gh(y(this.l, this, a), "p"))
        }
    };
    class Ak {
        constructor(a) {
            this.g = a.filter(b => Ri(b));
            this.j = a.filter(b => !Ri(b))
        }
        W() {
            return this.g.shift() || this.j.shift() || null
        }
    };
    class Bk {};

    function Ck(a, b) {
        a.j.g(new gh(() => {
            const c = a.g ? a.g.W() : null;
            c ? Dk(a, b, c) : a.v.W().then(y(a.A, a, b), y(a.B, a, b))
        }, "r"))
    }

    function Dk(a, b, c) {
        a.m && a.m.apply(c);
        a.l ? Xj(a.l, c).then(function(d) {
            0 == d.length ? (0 < a.g.g.length || (a.g = null), mh(a.j, b, c, "rres")) : (a.G.push(new Bk), Ck(a, b))
        }) : mh(a.j, b, c, "rres")
    }
    class Ek {
        constructor(a, b, c, d) {
            this.j = a;
            this.v = b;
            this.m = c;
            this.l = d;
            this.g = null;
            this.G = []
        }
        W() {
            const a = new kh;
            Ck(this, a);
            return a.g
        }
        A(a, b) {
            this.g = b;
            Ck(this, a)
        }
        B(a) {
            nh(this.j, a)
        }
    };
    class Fk {
        constructor(a) {
            this.g = a
        }
        W() {
            const a = new kh;
            this.g.W().then(b => {
                a.resolve(new Ak([b]))
            }, y(a.j, a));
            return a.g
        }
    };
    class Gk {
        constructor(a, b) {
            this.g = a;
            this.j = b
        }
        apply(a) {
            var b = Rj(this.g, a);
            b = this.j.get(x(this.g.oa[b]));
            a.m = b.Jc <= b.Pc
        }
    };
    class Hk {
        constructor(a) {
            this.j = a
        }
        g(a) {
            a: {
                const b = Qi(a);
                if (b) {
                    switch (a.j) {
                        case 0:
                        case 3:
                            if (a = b.g()) break a;
                            throw Error("An ad placement with BEFORE or AFTER position cannot have an anchor with no parent.");
                        case 1:
                        case 2:
                            a = b;
                            break a
                    }
                    throw Error("Un-handled ad placement position.");
                }
                a = null
            }
            return a && Ja(this.j, a.C) ? [18] : []
        }
    };
    var Ik = [{
        hostname: /^([a-z]+.)?m.wikihow.com$/,
        Fc: "mw-mf-viewport"
    }];
    const Jk = a => {
        if (!a.location || !a.location.hostname) return [];
        var b = a.location.hostname,
            c = [];
        Fa(Ik, function(d) {
            b.match(d.hostname) && (d = a.document.getElementById(d.Fc)) && c.push(d)
        });
        return c
    };

    function Kk(a, b) {
        a.j.g(new gh(function() {
            if (a.g)
                if (a.l.g(a.g)) {
                    var c = a.g;
                    a.g = Pf(a.g);
                    b.resolve(c)
                } else {
                    a: {
                        c = a.g;
                        const d = Nf(c);
                        for (let e = 0; e < d.length; ++e)
                            if (d[e].m()) {
                                c = d[e];
                                break a
                            }
                        c = Pf(c)
                    }
                    a.g = c;Kk(a, b)
                }
            else b.j(null)
        }, "fpar"))
    }
    const Lk = class {
        constructor(a, b, c) {
            this.j = a;
            this.g = b;
            this.l = c
        }
        W() {
            var a = new kh;
            Kk(this, a);
            return a.g
        }
    };
    class Mk {
        constructor(a) {
            this.j = a;
            this.g = []
        }
        reset() {
            const a = this.g;
            this.g = [];
            return a
        }
    };
    var Nk = {
            ba: [3],
            ja: !1,
            ka: 0,
            ia: 1
        },
        Ok = new tf(["LI", "TR", "TD", "TH"]);

    function Pk(a, b) {
        a.j.g(new gh(function() {
            a.v.W().then(y(a.m, a, b), y(a.l, a, b))
        }, "para"))
    }
    const Qk = class {
        constructor(a, b, c) {
            this.j = a;
            this.v = b;
            this.g = new Mk(c)
        }
        W() {
            var a = new kh;
            Pk(this, a);
            return a.g
        }
        m(a, b) {
            var c = this.g;
            if (c.g.length) {
                var d = c.g[c.g.length - 1];
                var e = c.j;
                const f = e.j.map.get(x(b));
                (e = f ? $g(e, f.start.aa()) : null) ? (e = e.start.g, d = d == e || d != e && fd(d.C, e.C)) : d = !0
            } else d = !0;
            d ? c.g.push(b) : c.g = [b];
            b = this.g;
            (b = 3 <= b.g.length ? b.g[b.g.length - 3 + 1] : null) && !Ok.contains(b.C.tagName) ? a.resolve({
                node: b,
                tb: pi(Nk),
                identifier: {}
            }) : Pk(this, a)
        }
        l(a) {
            a.j("na")
        }
    };
    const Rk = class extends oh {
        constructor() {
            super();
            this.j = [];
            this.l = !1
        }
        g(a) {
            this.j.push(a);
            if (!this.l) {
                this.l = !0;
                try {
                    for (; 0 < this.j.length;) this.j.shift().g()
                } finally {
                    this.l = !1
                }
            }
        }
    };
    const Sk = class {
        constructor() {
            this.g = Date.now();
            this.j = Date.now()
        }
    };
    var Tk;

    function Uk() {
        var a = t.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !A("Presto") && (a = function() {
            var e = ed(document, "IFRAME");
            e.style.display = "none";
            document.documentElement.appendChild(e);
            var f = e.contentWindow;
            e = f.document;
            e.open();
            e.close();
            var g = "callImmediate" + Math.random(),
                h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
            e = y(function(k) {
                if (("*" == h || k.origin == h) && k.data == g) this.port1.onmessage()
            }, this);
            f.addEventListener("message", e, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    f.postMessage(g, h)
                }
            }
        });
        if ("undefined" !== typeof a && !Ba()) {
            var b = new a,
                c = {},
                d = c;
            b.port1.onmessage = function() {
                if (void 0 !== c.next) {
                    c = c.next;
                    var e = c.cb;
                    c.cb = null;
                    e()
                }
            };
            return function(e) {
                d.next = {
                    cb: e
                };
                d = d.next;
                b.port2.postMessage(0)
            }
        }
        return function(e) {
            t.setTimeout(e, 0)
        }
    };
    class Vk {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.j = 0;
            this.g = null
        }
        get() {
            let a;
            0 < this.j ? (this.j--, a = this.g, this.g = a.next, a.next = null) : a = this.l();
            return a
        }
    };

    function Wk() {
        var a = Xk;
        let b = null;
        a.g && (b = a.g, a.g = a.g.next, a.g || (a.j = null), b.next = null);
        return b
    }
    class Yk {
        constructor() {
            this.j = this.g = null
        }
        add(a, b) {
            const c = Zk.get();
            c.set(a, b);
            this.j ? this.j.next = c : this.g = c;
            this.j = c
        }
    }
    var Zk = new Vk(() => new $k, a => a.reset());
    class $k {
        constructor() {
            this.next = this.g = this.j = null
        }
        set(a, b) {
            this.j = a;
            this.g = b;
            this.next = null
        }
        reset() {
            this.next = this.g = this.j = null
        }
    };
    let al, bl = !1,
        Xk = new Yk,
        dl = () => {
            if (t.Promise && t.Promise.resolve) {
                const a = t.Promise.resolve(void 0);
                al = () => {
                    a.then(cl)
                }
            } else al = () => {
                var a = cl;
                "function" !== typeof t.setImmediate || t.Window && t.Window.prototype && (Aa() || !A("Edge")) && t.Window.prototype.setImmediate == t.setImmediate ? (Tk || (Tk = Uk()), Tk(a)) : t.setImmediate(a)
            }
        };
    var cl = () => {
        for (var a; a = Wk();) {
            try {
                a.j.call(a.g)
            } catch (c) {
                pa(c)
            }
            var b = Zk;
            b.m(a);
            100 > b.j && (b.j++, a.next = b.g, b.g = a)
        }
        bl = !1
    };
    var el = class extends oh {
        constructor(a, b, c) {
            var d = new Sk;
            super();
            this.D = a;
            this.j = d;
            this.A = b || null;
            this.m = c || null;
            this.l = [];
            this.v = !1
        }
        g(a) {
            this.l.push(a);
            this.v || (a = this.B, al || dl(), bl || (al(), bl = !0), Xk.add(a, this))
        }
        B() {
            this.A ? this.A(y(this.G, this)) : this.G()
        }
        G() {
            if (!this.v) {
                this.v = !0;
                try {
                    for (this.j.g = Date.now(); 0 < this.l.length;) {
                        var a = this.l.shift();
                        this.j.j = Date.now();
                        a.g();
                        this.m && this.m.j(Date.now() - this.j.j, a.j);
                        if (50 < Date.now() - this.j.g + 10) break
                    }
                    0 < this.l.length && this.D.setTimeout(y(this.B, this),
                        0)
                } finally {
                    this.v = !1, this.m && this.m.g(Date.now() - this.j.g)
                }
            }
        }
    };

    function fl(a, b) {
        var c = new kh,
            d = b.D ? new el(a, ma(Cj, b.g ? "lr:apf:" + b.g : "lr:apf"), b.B) : new Rk;
        d.g(new gh(function() {
            xh(new Ah(d), a, b).then(function(e) {
                var f = e.j,
                    g = e.m,
                    h = e.l;
                a: {
                    var k = e.j,
                        l = e.g.v;
                    switch (l) {
                        case 2:
                            var m = k.m;
                            l = e.l.g;
                            l.m || (k = new ng(Gg(l), 0), l.g || (l.g = new rg(new ng(Gg(l), 0))), l.m = new ug(k, new ng(l.g, 1), new ng(Hg(l), 2)));
                            m = new Qk(d, new Lk(d, m, new ng(l.m, 3)), e.m.g);
                            break a;
                        default:
                            m = k.v;
                            var n = k.g.oa;
                            k = e.g;
                            l = 1 == l ? ri(n) : yf(n);
                            m = new vi(m, l, k)
                    }
                }
                m = new Fk(new zk(d, m));
                l = new Gk(f.g, g.l);
                k = new Yj(d,
                    f.g);
                e.g.A && Uj(k, new bk(f.g, f.O));
                n = Jk(f.j);
                h = Uj(Uj(Uj(Uj(k, new Hk(n)), new uk(g.g, new ng(Hg(h.g), 2))), new wk), new ek(f.m, new dk(g.g)));
                n = new Wi;
                La(n.j, Xi);
                n = Vi(Vi(n, Yi), Zi);
                La(n.m, aj);
                La(n.j, $i);
                h = Tj(Uj(Uj(h, Vi(n, $i)), new fk(f.L * f.O)), new xk);
                var q = e.g,
                    r = e.j.v;
                n = Math.max(r * q.m, q.minWidth);
                q = r * q.j;
                n = void 0 !== n ? n : 0;
                q = void 0 !== q ? q : Infinity;
                if (0 > n || 0 > q) throw Error("apf::wf");
                Tj(Tj(Tj(h, 0 >= n && Infinity === q ? null : new fh(n, q)), new tk(f.m.l, e.g.G, f.j)), new Zj([g.g, g.j]));
                0 < e.g.l && Tj(k, new ak(f.j, e.g.l));
                mh(d,
                    c, new Ek(d, m, l, k), "itres")
            }, y(c.j, c))
        }, "i"));
        return c.g
    };
    class gl {
        constructor(a) {
            this.g = new tf(a)
        }
        contains(a) {
            return this.g.contains(a)
        }
    };
    class hl {
        constructor(a) {
            this.g = a
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()), a instanceof hl ? a : new hl({
                value: a
            })) : this
        }
    };

    function il(a) {
        return b => {
            for (const c of a) c(b)
        }
    };
    var jl = class extends D {
        getValue() {
            return fc(this, 2)
        }
    };
    var kl = class extends D {};
    kl.La = [3, 4];
    var ll = class extends D {};
    var ml = class extends D {};
    ml.La = [6, 7, 9, 10, 11];
    var nl = class extends D {},
        ol = kc(nl);
    nl.La = [1, 2, 5, 7];
    Ph(new Mh(0, {}));
    Ph(new Mh(1, {}));
    class pl {
        constructor() {
            var a = Nd `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.j = !1;
            this.v = Math.random();
            this.l = this.Qa;
            this.A = a
        }
        Gb(a) {
            this.g = a
        }
        m(a) {
            this.j = a
        }
        Qa(a, b, c = .01, d, e = "jserror") {
            if ((this.j ? this.v : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new be(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (qd(t.document, this.A), t.error_rep_loaded = !0);
            return !1
        }
        ua(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.l(a, d, .01, c, "jserror")) throw d;
            }
        }
        K(a, b) {
            return (...c) => this.ua(a, () => b.apply(void 0, c))
        }
    };
    const ql = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var rl = (a, b, c) => {
            const d = c || window,
                e = "undefined" !== typeof queueMicrotask;
            return function() {
                e && queueMicrotask(() => {
                    d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                    d.google_rum_task_id_counter += 1
                });
                const f = he();
                let g, h = 3;
                try {
                    g = a.apply(this, arguments)
                } catch (k) {
                    h = 13;
                    if (!b) throw k;
                    b(754, k)
                } finally {
                    d.google_measure_js_timing && f && ql({
                        label: (754).toString(),
                        value: f,
                        duration: (he() || 0) - f,
                        type: h,
                        ...(e && {
                            taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                        })
                    }, d)
                }
                return g
            }
        },
        sl = (a, b) =>
        rl(a, (c, d) => {
            (new pl).Qa(c, d)
        }, b);

    function tl(a, b) {
        return sl(a, b).apply()
    }
    var ul = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function vl(a) {
        return null == a ? a : ul[a]
    }

    function wl(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = fc(a[c], 1),
                e = fc(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function xl(a, b) {
        var c = {};
        a && (c.Hb = fc(a, 1), c.ub = fc(a, 2), c.vb = !!Xb(a, 3));
        b && (c.lb = wl(cc(b, jl, 3)), c.eb = wl(cc(b, jl, 4)));
        return c
    }
    var yl = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    const zl = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            c = Oi(d.document, this.g);
            c.Ea.setAttribute("data-ad-format", "auto");
            Ni(c, a, b);
            return c
        }
    };
    const Al = class {
        constructor(a) {
            this.g = a
        }
        j(a, b, c, d) {
            var e = 0 < cc(this.g, kl, 9).length ? cc(this.g, kl, 9)[0] : null,
                f = xl(bc(this.g, ll, 3), e);
            if (!e) return null;
            if (e = fc(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Xc(d)).createElement(g);
                c.style.clear = f.vb ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.lb && Mi(c.style, f.lb);
                d = (new Xc(d)).createElement("INS");
                f.eb && Mi(d.style, f.eb);
                c.appendChild(d);
                f = {
                    Ya: c,
                    Ea: d
                };
                f.Ea.setAttribute("data-ad-type", "text");
                f.Ea.setAttribute("data-native-settings-key",
                    e);
                Ni(f, a, b);
                a = f
            } else a = null;
            return a
        }
    };

    function Bl(a, b) {
        a = a.j.query(b.document);
        return 0 < a.length ? a[0] : null
    }
    const Cl = class {
        constructor(a, b) {
            this.j = a;
            this.g = b
        }
    };

    function Dl(a) {
        return a.m
    }

    function El(a) {
        return gi(Wh) ? (a.v || (a.v = Bl(a.g, a.l)), a.v) : Bl(a.g, a.l)
    }

    function Fl(a) {
        var b = a.R;
        a = a.l.document.createElement("div");
        gi(Wh) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Gl(a, b) {
        Ze(a.A, 0) || a.A.set(0, []);
        a.A.get(0).push(b)
    }
    class Hl {
        constructor(a, b, c, d, e, f, g, h = null, k = null) {
            this.g = a;
            this.F = b;
            this.R = c;
            this.Vb = d;
            e || new Th;
            this.l = f;
            this.B = g;
            this.G = h;
            (this.D = k) && bc(k, Lh, 1) && ec(bc(k, Lh, 1), 5);
            this.H = [];
            this.m = !1;
            this.A = new R;
            this.v = this.j = null
        }
        aa() {
            return this.B
        }
    };
    var Il = a => {
        switch (a.Vb) {
            case 0:
            case 1:
                var b = a.D;
                null == b ? a = null : (a = bc(b, Lh, 1), null == a ? a = null : (b = Sb(b, 2), a = null == b ? null : new Mh(0, {
                    uc: [a],
                    Vc: b
                })));
                return null != a ? new hl({
                    value: a
                }) : new hl(null);
            case 2:
                return new hl(null);
            default:
                return new hl(null)
        }
    };

    function Jl(a) {
        return Il(a.pa).map(b => Ph(b))
    }

    function Kl(a) {
        a.j = a.j || Jl(a);
        return a.j
    }
    const Ll = class {
        constructor(a, b, c) {
            this.pa = a;
            this.g = b;
            this.Ma = c;
            this.j = null
        }
        fill(a, b) {
            var c = this.pa;
            if (a = c.F.j(a, b, this.g, c.l)) {
                b = a.Ya;
                if (this.pa.m) throw Error("AMA:AP:AP");
                ki(b, this.g, this.pa.g.g);
                c = this.pa;
                c.m = !0;
                gi(Wh) && (c.j && ii(c.j), c.j = null);
                null != b && c.H.push(b)
            }
            return a
        }
    };

    function Ml(a) {
        switch (a) {
            case 0:
                return 0;
            case 1:
                return 1;
            case 2:
                return 2;
            case 3:
                return 3;
            default:
                return null
        }
    };

    function Nl(a, b) {
        return tl(() => {
            if (gi(Wh)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = El(f);
                    if (g) {
                        if (!f.j && !f.m) {
                            var h = null;
                            try {
                                var k = El(f);
                                if (k) {
                                    h = Fl(f);
                                    ki(h, k, f.g.g);
                                    var l = h
                                } else l = null
                            } catch (r) {
                                throw ii(h), r;
                            }
                            f.j = l
                        }(h = f.j) && d.push({
                            Tc: f,
                            fb: g,
                            na: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = U(b), k = kf(b), e = 0; e < d.length; e++) {
                        const {
                            Tc: r,
                            fb: u,
                            na: v
                        } = d[e];
                        f = Ol(v, k, l);
                        c.push(new Ll(r, u, f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const r = [];
                    for (let u = 0; u < a.length; u++) {
                        var m = a[u],
                            n = El(m);
                        n && r.push({
                            nb: m,
                            fb: n
                        })
                    }
                    for (n = 0; n < r.length; n++) {
                        m =
                            k;
                        g = m.push; {
                            var q = r[n];
                            const u = q.fb,
                                v = q.nb,
                                E = Fl(v);
                            try {
                                ki(E, u, v.g.g), h = E
                            } catch (J) {
                                throw ii(E), J;
                            }
                        }
                        g.call(m, h)
                    }
                    c = U(b);
                    d = kf(b);
                    for (g = 0; g < k.length; g++) e = Ol(k[g], d, c), f = r[g], l.push(new Ll(f.nb, f.fb, e))
                } finally {
                    for (c = 0; c < k.length; c++) ii(k[c])
                }
            }
            return l
        }, b)
    }

    function Ol(a, b, c) {
        a = a.getBoundingClientRect();
        return new ck(a.left + b, a.top + c, a.right - a.left)
    };

    function Pl(a, b) {
        const c = {
            top: b.g - 25,
            right: b.j + b.l,
            bottom: b.g + 25,
            left: b.j
        };
        return !Ia(a, d => df(d, c))
    };

    function Ql(a) {
        return function(b) {
            return Nl(b, a)
        }
    }

    function Rl(a) {
        const b = sk(ok(a));
        return c => Pl(b, c.Ma)
    }

    function Sl(a) {
        if (!a.length) return lc;
        const b = new gl(a);
        return c => b.contains(c.Vb)
    }

    function Tl(a, b) {
        if (0 >= a) return mc;
        const c = S(b).scrollHeight - a;
        return function(d) {
            return d.Ma.g <= c
        }
    }
    const Ul = (a, b) => b.Ma.g >= a,
        Vl = (a, b, c) => {
            c = c.Ma.l;
            return a <= c && c <= b
        };
    var Wl = class {
        Ha(a) {
            return Rl(a)
        }
        Ca() {
            return 9
        }
    };
    var Xl = class {
        constructor(a) {
            this.g = a
        }
        Ha(a) {
            return Tl(this.g, a)
        }
        Ca() {
            return 13
        }
    };
    var Yl = class {
        Ha(a) {
            const b = S(a).clientHeight;
            return b ? ma(Ul, b + U(a)) : lc
        }
        Ca() {
            return 12
        }
    };
    var Zl = class {
        constructor(a) {
            this.g = a
        }
        Ha() {
            return Sl(this.g)
        }
        Ca() {
            return 1
        }
    };
    var $l = class {
        Ha() {
            return nc(Dl)
        }
        Ca() {
            return 7
        }
    };
    var am = class {
        constructor(a, b) {
            this.minWidth = a;
            this.g = b
        }
        Ha() {
            return ma(Vl, this.minWidth, this.g)
        }
        Ca() {
            return 10
        }
    };
    var bm = class {
        constructor(a) {
            this.m = a.j.slice(0);
            this.j = a.g.slice(0);
            this.l = a.l;
            this.v = a.v;
            this.g = a.m
        }
    };

    function cm(a = 0, b = Infinity) {
        var c = new dm,
            d = [0];
        c.m = d;
        c.j.push(new Zl(d));
        c.j.push(new $l);
        c.g.push(new Wl);
        c.g.push(new am(a, b));
        return c
    }

    function em(a, b = 0) {
        a.g.push(new Xl(b));
        return a
    }
    var dm = class {
        constructor() {
            this.l = 0;
            this.v = !1;
            this.j = [].slice(0);
            this.g = [].slice(0)
        }
        build() {
            return new bm(this)
        }
    };

    function fm(a, b, c) {
        Ze(a.g, b) || a.g.set(b, []);
        a.g.get(b).push(c)
    }
    class gm {
        constructor() {
            this.g = new R
        }
    };

    function hm(a, b, c) {
        const d = b.pa;
        if (!Ze(a.g, d)) {
            var e = a.g,
                f = e.set;
            b = Kl(b);
            null != b.g && b.getValue();
            f.call(e, d, new im)
        }
        c(a.g.get(d))
    }

    function jm(a, b) {
        hm(a, b, c => {
            c.g = !0
        })
    }

    function km(a, b) {
        hm(a, b, c => {
            c.j = !0
        })
    }
    var lm = class {
        constructor() {
            this.g = new R
        }
    };
    class im {
        constructor() {
            this.j = this.g = !1
        }
    };
    class mm {
        constructor(a) {
            this.j = a;
            this.g = -1
        }
    };

    function nm(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function om(a) {
        const b = null.od.filter(c => af(c.wb).every(d => c.wb.get(d) === a.get(d)));
        return 0 === b.length ? (null.gd.push(19), null) : b.reduce((c, d) => c.wb.yb() > d.wb.yb() ? c : d, b[0])
    }

    function pm(a) {
        a = Kl(a);
        if (null == a.g) return null.gd.push(18), null;
        a = a.getValue();
        if (Ze(null.Sb, a)) return null.Sb.get(a);
        var b = Nh(a);
        b = om(b);
        null.Sb.set(a, b);
        return b
    };

    function qm(a) {
        return 0 == a.g.length ? a : a.sort((b, c) => (pm(b) ? .Uc ? ? Number.MAX_VALUE) - (pm(c) ? .Uc ? ? Number.MAX_VALUE))
    }

    function rm(a, b) {
        var c = b.g;
        const d = b.pa.g.g;
        c = b.Ma.g + 200 * Math.min(20, 0 == d || 3 == d ? nm(c.parentElement) : nm(c));
        a = a.g;
        0 > a.g && (a.g = S(a.j).scrollHeight || 0);
        b = a.g - b.Ma.g;
        return c + (1E3 < b ? 0 : 2 * (1E3 - b))
    }

    function sm(a, b) {
        return 0 == b.g.length ? b : b.sort((c, d) => rm(a, c) - rm(a, d))
    }

    function tm(a, b) {
        return b.sort((c, d) => {
            const e = c.pa.G,
                f = d.pa.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? rm(a, c) - rm(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class um {
        constructor(a) {
            this.g = new mm(a)
        }
    };

    function vm(a, b) {
        var c = a.l;
        for (var d of b.m) c = Ih(c, d.Ha(a.g), wm(d.Ca()));
        d = c = c.apply(Ql(a.g));
        for (const e of b.j) d = Ih(d, e.Ha(a.g), il([xm(e.Ca()), f => {
            (void 0) ? .Id(f, e.Ca())
        }]));
        switch (b.l) {
            case 1:
                d = sm(a.j, d);
                break;
            case 2:
                d = tm(a.j, d);
                break;
            case 3:
                const e = Q(lm);
                d = qm(d);
                c.forEach(f => {
                    jm(e, f);
                    null ? .nd(f)
                });
                d.forEach(f => km(e, f))
        }
        b.v && (d = Kh(d, Tc(a.g.location.href + a.g.localStorage.google_experiment_mod)));
        1 === b.g ? .length && fm(a.m, b.g[0], {
            zd: c.g.length,
            Nd: d.g.length
        });
        return d.g.slice(0)
    }
    class ym {
        constructor(a, b) {
            this.l = new Jh(a);
            this.j = new um(b);
            this.g = b;
            this.m = new gm
        }
    }
    const wm = a => b => Gl(b, a),
        xm = a => b => Gl(b.pa, a);
    var zm = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            G(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = H(a, "message", e));
                return g
            }
        },
        Am = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Am(a[f], b, c, d, --e)
        };

    function Bm(a, b, c, d) {
        return zm(a, "fullscreen", d.K(952, (e, f) => {
            if (f.source === b) {
                if (!("eventType" in e)) throw Error(`bad message ${JSON.stringify(e)}`);
                delete e.googMsgType;
                c(e)
            }
        }))
    };
    class Cm {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };
    async function Dm(a) {
        return a.m.promise
    }
    async function Em(a) {
        return a.j.promise
    }
    async function Fm(a) {
        return a.l.promise
    }

    function Gm(a, b) {
        b.type = "err_st";
        b.slot = a.slotType;
        b.freq = .25;
        a.qem && (b.qem = a.qem);
        b.tag_type = a.rb.Yc;
        b.version = a.rb.version;
        ye(a.A, "fullscreen_tag", b, !1, .25)
    }
    class Hm extends Ne {
        constructor(a, b, c, d, e) {
            super();
            this.slotType = 1;
            this.pubWin = a;
            this.Kb = b;
            this.v = c;
            this.A = d;
            this.rb = e;
            this.g = 1;
            this.qem = null;
            this.m = new Cm;
            this.j = new Cm;
            this.l = new Cm
        }
        qa() {
            const a = Bm(this.pubWin, this.Kb, b => {
                if ("adError" === b.eventType) this.l.resolve(), this.g = 0;
                else if ("adReady" === b.eventType && 1 === this.g) this.qem = b.qem, b.slotType !== this.slotType && (Gm(this, {
                    cur_st: this.g,
                    evt: b.eventType,
                    adp_tp: b.slotType
                }), this.g = 0), this.m.resolve(), this.g = 2;
                else if ("adClosed" === b.eventType && 2 === this.g) this.j.resolve(b.result),
                    this.g = 3;
                else if ("adClosed" !== b.eventType || 3 !== this.g) Gm(this, {
                    cur_st: this.g,
                    evt: b.eventType
                }), this.g = 0
            }, this.v);
            P(this, a)
        }
    }

    function Im(a, b, c, d, e) {
        a = new Hm(a, b, c, d, e);
        a.qa();
        return a
    };
    var Jm = class extends D {};
    Jm.La = [19];

    function Km(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new Lm;
        return a.google_reactive_ads_global_state
    }
    class Lm {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Mm;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var Mm = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function Nm(a, b) {
        a = Km(a) ? .tagSpecificState[1];
        return null == a ? null : a.debugCard ? .getAdType() === b ? a.debugCard : null
    }

    function Om(a, b) {
        (a = Nm(a, 4)) && a.displayAdLoadedContent(b)
    };
    let Pm = void 0;

    function Qm(a) {
        ic(Pm, Be);
        Pm = a
    };

    function Rm(a, b) {
        var c = b.adClient;
        if ("string" === typeof c && c) {
            a.j = c;
            a.m = !!b.adTest;
            c = b.pubVars;
            ea(c) && (a.A = c);
            if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                a.g = {};
                for (d of b.fillMessage) a.g[d.key] = d.value
            }
            a.v = b.adWidth;
            a.l = b.adHeight;
            a.D = !!b.delayVisibleUntilCreativeReadyMessage;
            ae(a.v) && ae(a.l) || Ej("rctnosize", b);
            var d = !0
        } else d = !1;
        return d && a.G(b)
    }
    class Sm {
        constructor() {
            this.g = this.A = this.m = this.j = null;
            this.l = this.v = 0;
            this.D = !1
        }
        G() {
            return !0
        }
    };
    class Tm extends Sm {
        G(a) {
            a.hasFillMessage || (this.g = null);
            return !0
        }
    };

    function Um({
        kc: a,
        Lb: b,
        ac: c,
        lc: d,
        Mb: e,
        bc: f
    }) {
        const g = [];
        for (let l = 0; l < f; l++)
            for (let m = 0; m < c; m++) {
                var h = c - 1,
                    k = f - 1;
                g.push({
                    x: a + (0 === h ? 0 : m / h) * (b - a),
                    y: d + (0 === k ? 0 : l / k) * (e - d)
                })
            }
        return g
    }

    function Vm(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function Wm(a, b) {
        for (const e of b) {
            var c;
            b = a;
            var d = Vm(b.N.document, e);
            if (d) {
                if (!(c = Xm(b, d, e))) a: {
                    c = b.N.document;
                    for (d = d.offsetParent; d && d !== c.body; d = d.offsetParent) {
                        const f = Xm(b, d, e);
                        if (f) {
                            c = f;
                            break a
                        }
                    }
                    c = null
                }
                b = c || null
            } else b = null;
            if (b) return b
        }
        return null
    }

    function Xm(a, b, c) {
        if ("fixed" !== Rd(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= Xd(b).width && 1 >= Xd(b).height || a.g.Ec && !a.g.Ec(b) ? !0 : !1;
        a.g.Ob && a.g.Ob(b, c, d);
        return d ? null : b
    }
    var Ym = class {
        constructor(a) {
            this.N = a;
            this.g = {
                Ob: void 0
            }
        }
    };
    var Zm = a => {
        const b = 812 === a.screen.height && 375 === a.screen.width || 812 === a.screen.width && 375 === a.screen.height || 414 === a.screen.width && 896 === a.screen.height || 896 === a.screen.width && 414 === a.screen.height;
        return null != (a.navigator && a.navigator.userAgent && a.navigator.userAgent.match(/iPhone OS 1[1-9]|[2-9]\d/)) && b
    };
    const $m = 90 * 1.38;
    Pa || Ca();

    function an() {
        var a = new bn; {
            t.google_llp || (t.google_llp = {});
            var b = t.google_llp;
            let c = b[1];
            if (!c) {
                const {
                    promise: d,
                    resolve: e
                } = new Cm;
                c = {
                    promise: d,
                    resolve: e
                };
                b[1] = c
            }
            b = c
        }
        b.resolve(a)
    };

    function cn(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    };

    function dn(a) {
        const b = d => {
                d.isTrusted && (a.m = !0, a.l(d.timeStamp))
            },
            c = d => {
                d.isTrusted && (a.m = !1, a.l(d.timeStamp))
            };
        G(a.g, "focus", b);
        G(a.g, "blur", c);
        P(a, () => void a.g.removeEventListener("focus", b));
        P(a, () => void a.g.removeEventListener("blur", c));
        a.m = a.g.document.hasFocus()
    }

    function en(a) {
        const b = c => {
            c.isTrusted && (a.j = 1 === cn(a.g.document) ? !0 : !1, a.l(c.timeStamp))
        };
        G(a.g.document, "visibilitychange", b);
        P(a, () => void a.g.document.removeEventListener("visibilitychange", b));
        a.j = 1 === cn(a.g.document)
    }

    function fn(a) {
        const b = a.g.document.body.getBoundingClientRect().top + 10,
            c = d => {
                d.isTrusted && (a.v = d.clientY < b ? !0 : !1, a.l(d.timeStamp))
            };
        G(a.g.document.body, "mouseleave", c);
        G(a.g.document.body, "mouseenter", c);
        P(a, () => void a.g.document.body.removeEventListener("mouseleave", c));
        P(a, () => void a.g.document.body.removeEventListener("mouseenter", c));
        a.v = !1
    }
    var gn = class extends Ne {
        constructor(a, b) {
            super();
            this.g = a;
            this.v = this.m = this.j = !1;
            if (he(a) && b.length)
                for (const c of b) switch (c) {
                    case 0:
                        dn(this);
                        break;
                    case 1:
                        en(this);
                        break;
                    case 2:
                        fn(this)
                } else this.Fa()
        }
        qa() {
            this.G || this.l(he(this.g))
        }
    };
    var hn = class extends gn {
        constructor() {
            super(...arguments);
            this.D = new Cm;
            this.B = this.D.promise
        }
    };
    var jn = class extends hn {
        constructor(a) {
            super(a, [1]);
            this.qa()
        }
        l(a) {
            this.A ? ? (this.A = 0);
            switch (this.A) {
                case 0:
                    this.j && (this.A = 1);
                    break;
                case 1:
                    this.j || (this.A = 2, this.H = a);
                    break;
                case 2:
                    this.j && (this.F = a - this.H, this.D.resolve(a), this.Fa())
            }
        }
    };
    var kn = class extends Ne {
        constructor(a, b, c) {
            super();
            c.promise.then(() => void this.Fa());
            for (const d of b) switch (d) {
                case 2:
                    b = new jn(a), O(this, b), b.B.then(() => void c.resolve(2))
            }
        }
    };

    function ln(a, b = []) {
        const c = Date.now();
        return Ga(b, d => c - d < 1E3 * a)
    }

    function mn(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Ia(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = ln(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    };
    const nn = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1,
            NOSCRIPT: 1
        },
        on = {
            IMG: " ",
            BR: "\n"
        };
    var pn = (a, b, c, d) => {
            if (!(a.nodeName in nn))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in on) d && "IMG" == a.nodeName && a.hasAttribute("alt") && b.push(" " + a.getAttribute("alt")), b.push(on[a.nodeName]);
            else
                for (a = a.firstChild; a;) pn(a, b, c, d), a = a.nextSibling
        },
        qn = / \xAD /g,
        rn = /\xAD/g,
        sn = /\u200B/g,
        tn = / +/g,
        un = /^\s*/;

    function vn(a, b) {
        return null !== gd(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c), !0)
    }

    function wn(a, b) {
        return gd(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position, !0)
    }

    function xn(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function yn(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function zn(a) {
        return `${a.position}-${yn(a.L)}x${yn(a.O)}-${yn(a.scrollY+a.Ra)}Y`
    }

    function An(a) {
        return `f-${zn({position:a.position,Ra:a.Ra,scrollY:0,L:a.L,O:a.O})}`
    }

    function Bn(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function Cn(a, b, c) {
        const d = Km(c.N).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.O),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.L);
                for (var k = .3 * c.L; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = An({
                            position: "left",
                            Ra: f,
                            L: c.L,
                            O: c.O
                        });
                        b.set(l, Bn(b.get(l), h))
                    }
                    if (h < c.L && e > c.L - k) {
                        l = An({
                            position: "right",
                            Ra: f,
                            L: c.L,
                            O: c.O
                        });
                        const m = c.L - e;
                        b.set(l, Bn(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    };
    var Dn = (a, b, c) => {
        a.dataset.adsbygoogleStatus = "reserved";
        a.className += " adsbygoogle-noablate";
        c.adsbygoogle || (c.adsbygoogle = [], qd(c.document, Nd `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`));
        c.adsbygoogle.push({
            element: a,
            params: b
        })
    };
    const En = [1, 2];

    function Fn(a, b, c) {
        const d = ed(document, "INS");
        d.className = "adsbygoogle";
        b.document.body.appendChild(d);
        const e = c.A || {};
        e.google_ad_client = c.j;
        e.google_ad_width = c.v;
        e.google_ad_height = c.l;
        e.google_reactive_ad_format = a.g;
        c.g && (e.google_reactive_fill_message = c.g);
        c.m && (e.google_adtest = "on");
        c.D && (e.gdvucrm = c.D);
        Dn(d, e, b)
    }
    class Gn {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            const c = Km(a);
            if (c.wasReactiveAdConfigReceived[this.g]) return !1;
            const d = new Tm;
            if (!Rm(d, b)) return !1;
            En.forEach(e => {
                c.wasReactiveAdConfigReceived[e] = !0
            });
            Fn(this, a, d);
            return !0
        }
    };
    class Hn {
        constructor(a, b) {
            this.l = a;
            this.g = !1;
            this.m = b;
            this.j = this.m.K(264, c => {
                this.g && (In || (c = Date.now()), this.l(c), In ? Jn.call(t, this.j) : t.setTimeout(this.j, 17))
            })
        }
        start() {
            this.g || (this.g = !0, In ? Jn.call(t, this.j) : this.j(0))
        }
    }
    var Jn = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
        In = !!Jn && !/'iPhone'/.test(t.navigator.userAgent);

    function Kn(a) {
        return a * a * a
    }

    function Ln(a) {
        a = 1 - a;
        return 1 - a * a * a
    }
    class Mn {
        constructor(a, b, c, d) {
            this.j = a;
            this.G = b;
            this.R = c;
            this.progress = 0;
            this.g = null;
            this.A = !1;
            this.m = [];
            this.v = null;
            this.l = new Hn(y(this.H, this), d)
        }
        H(a) {
            if (this.A) this.l.g = !1;
            else {
                null === this.g && (this.g = a);
                this.progress = (a - this.g) / this.R;
                1 <= this.progress && (this.progress = 1);
                a = this.v ? this.v(this.progress) : this.progress;
                this.m = [];
                for (let b = 0; b < this.j.length; b++) this.m.push((this.G[b] - this.j[b]) * a + this.j[b]);
                this.F();
                1 == this.progress && (this.l.g = !1, this.B())
            }
        }
        B() {}
        F() {}
        reset(a, b, c) {
            this.g = null;
            this.j =
                a;
            this.G = b;
            this.R = c;
            this.progress = 0
        }
    };
    class Nn extends Mn {
        constructor(a, b, c, d, e, f, g, h) {
            super([b], [c], d, f);
            this.I = a;
            this.J = e;
            this.D = g ? g : null;
            this.v = h || null
        }
        F() {
            const a = {};
            a[this.J] = this.m[0] + "px";
            N(this.I, a)
        }
        B() {
            this.D && this.D()
        }
    };

    function On(a) {
        a.g && H(a.g, a.j, a.l, rc)
    }
    class Pn extends Ne {
        constructor(a, b, c) {
            super();
            this.g = a;
            this.j = b;
            this.l = c;
            G(this.g, this.j, this.l, rc);
            P(this, () => void On(this))
        }
    }
    class Qn {
        constructor() {
            this.reset()
        }
        add(a) {
            const b = Date.now();
            this.g.push({
                time: b,
                coords: a
            });
            for (a = this.j; a < this.g.length; ++a)
                if (100 <= b - this.g[a].time) delete this.g[a];
                else break;
            this.j = a;
            a >= this.g.length && this.reset()
        }
        reset() {
            this.g = [];
            this.j = 0
        }
    }

    function Rn(a, b) {
        a.A && Sn(a);
        a.A = !0;
        a.l = a.J();
        a.j = Tn(b);
        a.g = a.j;
        a.v = new Qn;
        a.v.add(a.j);
        a.F = new Pn(a.m, "mousemove", y(a.Y, a));
        O(a, a.F);
        a.I = new Pn(a.m, "touchmove", y(a.Y, a));
        O(a, a.I);
        a.D = new Pn(a.m, "mouseup", y(a.Z, a));
        O(a, a.D);
        a.H = new Pn(a.m, "touchend", y(a.Z, a));
        O(a, a.H)
    }

    function Tn(a) {
        a = a.touches && a.touches[0] || a;
        return new I(a.clientX, a.clientY)
    }

    function Sn(a) {
        a.A = !1;
        a.B = !1;
        a.l = null;
        a.j = null;
        a.g = null;
        a.v = null;
        a.F && On(a.F);
        a.I && On(a.I);
        a.D && On(a.D);
        a.H && On(a.H)
    }
    class Un extends Ne {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.target = b;
            this.handle = c || b;
            this.B = this.A = this.P = !1;
            this.v = this.g = this.j = this.l = this.H = this.D = this.I = this.F = null;
            this.la = new Pn(this.handle, "mousedown", d => {
                0 == d.button && Rn(this, d)
            });
            O(this, this.la);
            this.ma = new Pn(this.handle, "touchstart", d => Rn(this, d));
            O(this, this.ma);
            this.da = new Pn(this.handle, "click", d => {
                this.P ? this.P = !1 : d.stopPropagation()
            });
            O(this, this.da)
        }
        M() {
            if (this.l && this.j && this.g) {
                var a = this.l,
                    b = Pc(this.g, this.j);
                var c = new I(a.x +
                    b.x, a.y + b.y);
                a = this.target;
                c instanceof I ? (b = c.x, c = c.y) : (b = c, c = void 0);
                a.style.left = Wd(b, !1);
                a.style.top = Wd(c, !1)
            }
        }
        T() {}
        J() {
            var a = this.target,
                b;
            a: {
                if (vc && (b = a.parentElement)) break a;b = a.parentNode;b = ea(b) && 1 == b.nodeType ? b : null
            }
            var c = b;
            b = Ud(a);
            c = Ud(c);
            b = new I(b.x - c.x, b.y - c.y);
            a = $d(a, "margin");
            return Pc(b, new I(a.left, a.top))
        }
        Y(a) {
            if (this.A)
                if (a.preventDefault(), this.g = Tn(a), this.v.add(this.g), this.B) this.M();
                else {
                    var b = this.j,
                        c = this.g;
                    a = b.x - c.x;
                    b = b.y - c.y;
                    10 <= Math.sqrt(a * a + b * b) && (this.M(), this.B = !0)
                }
        }
        Z(a) {
            this.B ?
                (a.preventDefault(), this.g = Tn(a), this.T()) : this.P = !0;
            Sn(this)
        }
    };

    function Vn(a) {
        const b = Wn(a);
        Fa(a.g.maxZIndexListeners, c => c(b))
    }

    function Wn(a) {
        a = vd(a.g.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function Xn(a, b) {
        a.g.maxZIndexListeners.push(b);
        b(Wn(a))
    }
    class Yn {
        constructor(a) {
            this.g = Km(a).floatingAdsStacking
        }
    }
    class Zn {
        constructor(a) {
            this.j = a;
            this.g = null
        }
    };

    function $n(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "18");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "12");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "18");
        a.appendChild(b)
    }

    function ao(a) {
        var b = a.ownerDocument;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "line");
        c.setAttribute("x1", "22");
        c.setAttribute("y1", "12");
        c.setAttribute("x2", "28");
        c.setAttribute("y2", "18");
        a.appendChild(c);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "28");
        b.setAttribute("y1", "18");
        b.setAttribute("x2", "34");
        b.setAttribute("y2", "12");
        a.appendChild(b)
    }

    function bo(a, b) {
        if (!a.v && a.l) {
            var c = parseInt(a.l.style[a.g], 10),
                d = -a.A.height - (b ? 30 : 0),
                e = (c - d) / .1;
            "bottom" == a.g && Zm(a.N) && a.D.ua(405, () => co(a, "21px", e, "ease-in"));
            b || eo(a, !0);
            c === d ? a.m = !b : (a.v = !0, c = new Nn(a.l, c, d, e, a.g, a.D, () => {
                a.v = !1;
                a.m = !b;
                b || eo(a, !0);
                b && a.Z();
                a.l.setAttribute("data-anchor-status", "dismissed")
            }, Kn), a.fa(), c.A = !1, c.l.start())
        }
    }

    function fo(a, b) {
        mf(b);
        M(b, {
            "background-color": "#FAFAFA",
            display: "block",
            position: "relative",
            "z-index": 1,
            height: "5px",
            "box-shadow": "top" == a.g ? "rgba(0, 0, 0, 0.2) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px" : "rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
        });
        "top" == a.g && M(a.j ? ? b, {
            position: "absolute",
            top: a.A.height + "px",
            width: "100%"
        });
        const c = rd("SPAN", a.N.document);
        c.appendChild(go(a));
        const d = e => {
            e.target === c && (e.preventDefault && e.preventDefault(), e.stopImmediatePropagation &&
                e.stopImmediatePropagation(), e.stopPropagation && e.stopPropagation())
        };
        G(c, "click", d);
        P(a, () => H(c, "click", d));
        ho(a, c);
        b.className = "ee";
        b.appendChild(c)
    }

    function go(a) {
        let b;
        let c, d;
        switch (a.g) {
            case "top":
                var e = "dropShadowBottom";
                b = "M0,4 L0,22 A6,6 0 0,0 6,28 L50,28 A6,6 0 0,0 56,22 L56,10 A6,6 0 0,1 61,4 Z";
                var f = "0";
                c = "up";
                d = $n;
                break;
            case "bottom":
                e = "dropShadowTop", b = "M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z", f = "25", c = "down", d = ao
        }
        const g = a.N.document,
            h = g.createElementNS("http://www.w3.org/2000/svg", "svg");
        h.style.setProperty("margin", "0 0 0 0px", "important");
        h.style.setProperty("position", "absolute", "important");
        h.style.setProperty(a.g, "0", "important");
        h.style.setProperty("left", "0%", "important");
        h.style.setProperty("display", "block", "important");
        h.style.setProperty("width", "80px", "important");
        h.style.setProperty("height", "30px", "important");
        h.style.setProperty("transform", "none", "important");
        h.style.setProperty("pointer-events", "initial", "important");
        a = g.createElementNS("http://www.w3.org/2000/svg", "defs");
        const k = g.createElementNS("http://www.w3.org/2000/svg", "filter");
        k.setAttribute("id", e);
        k.setAttribute("filterUnits",
            "userSpaceOnUse");
        k.setAttribute("color-interpolation-filters", "sRGB");
        var l = g.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        l.setAttribute("in", "SourceAlpha");
        l.setAttribute("result", "TransferredAlpha");
        var m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        m = g.createElementNS("http://www.w3.org/2000/svg", "feFuncB");
        m.setAttribute("type", "discrete");
        m.setAttribute("tableValues", "0.5");
        l.appendChild(m);
        k.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        l.setAttribute("in", "TransferredAlpha");
        l.setAttribute("stdDeviation", "2");
        k.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        l.setAttribute("dx", "0");
        l.setAttribute("dy", "0");
        l.setAttribute("result", "offsetblur");
        k.appendChild(l);
        l = g.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        l.appendChild(g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode"));
        m = g.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        m.setAttribute("in", "SourceGraphic");
        l.appendChild(m);
        k.appendChild(l);
        a.appendChild(k);
        h.appendChild(a);
        a = g.createElementNS("http://www.w3.org/2000/svg", "path");
        a.setAttribute("d", b);
        a.setAttribute("stroke", "#FAFAFA");
        a.setAttribute("stroke-width", "1");
        a.setAttribute("fill", "#FAFAFA");
        a.style.setProperty("filter",
            `url(#${e})`);
        h.appendChild(a);
        e = g.createElementNS("http://www.w3.org/2000/svg", "rect");
        e.setAttribute("x", "0");
        e.setAttribute("y", f);
        e.setAttribute("width", "80");
        e.setAttribute("height", "5");
        e.style.setProperty("fill", "#FAFAFA");
        h.appendChild(e);
        f = g.createElementNS("http://www.w3.org/2000/svg", "g");
        f.setAttribute("class", c);
        f.setAttribute("stroke", "#616161");
        f.setAttribute("stroke-width", "2px");
        f.setAttribute("stroke-linecap", "square");
        d(f);
        h.appendChild(f);
        return h
    }

    function ho(a, b) {
        const c = b.getElementsByTagName("svg")[0];
        M(b, {
            display: "block",
            width: "80px",
            height: "45px",
            [a.g]: "0",
            left: "0%",
            marginLeft: "0px",
            "pointer-events": "none"
        });
        Dd(c)
    }

    function io(a) {
        if (!a.v) {
            var b = parseInt(a.l.style[a.g], 10);
            if (b) {
                a.v = !0;
                const c = -b / .1;
                "bottom" == a.g && Zm(a.N) && a.D.ua(404, () => co(a, "0px", c, "ease-out"));
                eo(a, !1);
                b = new Nn(a.l, b, 0, c, a.g, a.D, () => {
                    a.v = !1;
                    a.m = !1;
                    jo(a);
                    a.l.setAttribute("data-anchor-status", "displayed");
                    a.l.setAttribute("data-anchor-shown", !0);
                    eo(a, !1)
                }, Ln);
                a.V();
                b.A = !1;
                b.l.start()
            } else a.m = !1
        }
    }

    function ko(a) {
        return a.j ? ? a.B
    }

    function eo(a, b) {
        const c = a.B.getElementsByTagName("svg")[0].getElementsByTagName("g")[0];
        for (var d; d = c.firstChild;) c.removeChild(d);
        switch (a.g) {
            case "top":
                (b ? ao : $n)(c);
                break;
            case "bottom":
                (b ? $n : ao)(c)
        }
    }

    function lo(a, b, c, d) {
        b = {
            i: b,
            dc: a.m ? "1" : "0",
            fdc: c ? "1" : "0",
            ds: a.H ? "1" : "0",
            expId: a.da,
            sc: a.M ? "1" : "0",
            off: d,
            vw: T(a.N),
            req: a.J.src,
            tp: a.g,
            h: a.A.height,
            w: a.A.width,
            qemId: a.ca
        };
        ye(a.Y, "flgr", b, !0, 1)
    }

    function co(a, b, c, d) {
        N(a.J, {
            transition: c / 1E3 + "s",
            "transition-timing-function": d,
            "margin-top": b
        })
    }

    function jo(a) {
        a.T();
        a.T = () => {}
    }

    function mo(a, b) {
        if ("bottom" !== a.g && "top" !== a.g) throw Error("unsupported reactive type");
        const c = f => {
                f.preventDefault();
                a.v || (a.I = !0, a.m ? io(a) : bo(a, a.H), lo(a, "c", !a.m, 0))
            },
            d = a.B;
        G(d, "click", c);
        P(a, () => H(d, "click", c));
        a.j && (G(a.j, "click", c), P(a, () => a.j && H(a.j, "click", c)));
        N(b, {
            opacity: 1
        });
        var e = a.N.document;
        e && (a.l = b, a.ma && (a.P = new("top" == a.g ? no : oo)(a, e, a.A.height, b, a.B), O(a, a.P)), e = {
            position: "fixed",
            left: "0px"
        }, e[a.g] = -a.A.height - 30 + "px", N(b, e), M(b, {
            overflow: "visible",
            background: "#FAFAFA"
        }), Xn(a.la,
            f => {
                const g = null == a.U ? 2147483647 : a.U;
                N(b, {
                    zIndex: null == f ? g : Math.min(f, g)
                })
            }), io(a))
    }
    class po extends Ne {
        constructor(a, b, c, d, e, f, g, h, k, l, m) {
            super();
            this.config = a;
            this.N = b;
            this.J = c;
            this.A = d;
            this.Z = f || (() => {});
            this.T = g || (() => {});
            this.D = h;
            this.Y = k;
            this.fa = l;
            this.V = m;
            P(this, () => bo(this, !0));
            this.B = rd("INS", b.document);
            P(this, () => this.B = null);
            this.j = null;
            HTMLElement.prototype.attachShadow && !this.D.ua(1013, () => {
                this.j = rd("DIV", b.document);
                this.j.className = "grippy-host";
                this.j.attachShadow({
                    mode: "closed"
                }).appendChild(this.B);
                P(this, () => this.j = null);
                return !0
            }) && (this.j = null);
            this.m = this.v = !1;
            this.F = 0;
            this.g = e;
            this.I = !1;
            this.l = this.P = null;
            this.O = b.innerHeight;
            this.M = "true" === this.config.scroll_detached;
            this.H = "true" === this.config.dismissable;
            this.ma = "true" === this.config.draggable || "top" != this.g;
            this.da = this.config.expId || "";
            this.ca = this.config.qemId || "";
            a = parseInt(this.config.z_index_override, 10);
            this.U = isNaN(a) ? null : a;
            this.la = new Yn(b);
            !this.H && t.navigator.userAgent.match(/iPhone OS 7/) && b.setInterval(() => {
                const n = this.N.innerHeight;
                if (2 > Math.abs(n - 460) || 2 > Math.abs(n - 529)) n < this.O &&
                    2 > Math.abs(U(this.N) - this.F - 68) && (this.I = !0, this.m && io(this)), this.O = n
            }, 300);
            fo(this, this.B)
        }
    }
    class qo extends Un {
        constructor(a, b, c, d, e) {
            super(b, d, e);
            this.ca = a;
            this.V = c
        }
        T() {
            var a = this.ca;
            if (!a.v) {
                const b = parseInt(a.l.style[a.g], 10);
                b >= -(a.A.height / 2) ? (io(a), lo(a, "d", !1, b)) : (bo(a, a.H), lo(a, "d", !0, b))
            }
        }
        M() {
            if (null !== this.l && null !== this.j && null !== this.g) {
                var a = this.fa(this.l.y, Pc(this.g, this.j).y);
                0 < a && (a = 0);
                a < -this.V && (a = -this.V);
                var b = {};
                b[this.U()] = a + "px";
                N(this.target, b)
            }
        }
    }
    class no extends qo {
        J() {
            return new I(0, parseInt(this.target.style.top, 10))
        }
        fa(a, b) {
            return b - a
        }
        U() {
            return "top"
        }
    }
    class oo extends qo {
        J() {
            return new I(0, parseInt(this.target.style.bottom, 10))
        }
        fa(a, b) {
            return a - b
        }
        U() {
            return "bottom"
        }
    };

    function ro(a, b, c, d) {
        if (!a.P) {
            a.P = [];
            for (var e = a.l.parentElement; e;) {
                a.P.push(e);
                if (a.ca(e)) break;
                e = e.parentNode && 1 === e.parentNode.nodeType ? e.parentNode : null
            }
        }
        e = a.P.slice();
        !c && a.ca(e[e.length - 1]) && e.pop();
        let f;
        if (d)
            for (c = e.length - 1; 0 <= c; --c)(f = e[c]) && b.call(a, f, c, e);
        else
            for (c = 0; c < e.length; ++c)(f = e[c]) && b.call(a, f, c, e)
    }
    var so = class extends Ne {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.g = b;
            this.j = c;
            this.P = null;
            P(this, () => this.P = null)
        }
        ca(a) {
            return this.j === a
        }
    };

    function to(a, b, c) {
        null !== b && null !== yd(a.getAttribute("width")) && a.setAttribute("width", String(b));
        null !== c && null !== yd(a.getAttribute("height")) && a.setAttribute("height", String(c));
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    };

    function uo(a) {
        vo(a);
        const b = a.g.innerWidth;
        a = Xd(a.l).height || +a.l.height || 0;
        return new Qc(b, a)
    }

    function wo(a) {
        if (a.U) {
            var b = a.j;
            b && (b.style.display = "none");
            xo(a, a.fa, !0, !0);
            a.U = !1
        }
    }

    function yo(a) {
        a.I = "touchcancel";
        t.setTimeout(a.A.K(274, () => {
            "touchcancel" === a.I && (a.J = 0, a.M = !1, zo(a))
        }), 1E3)
    }

    function Ao(a, b) {
        if (b && b.touches) {
            a.I = "touchend";
            var c = b.touches.length;
            2 > c ? t.setTimeout(a.A.K(256, () => {
                "touchend" === a.I && (a.J = c, a.M = !1, zo(a))
            }), 1E3) : (a.J = c, zo(a));
            !a.H || jf(a.g) || bo(a.m, !0)
        }
    }

    function Bo(a) {
        const b = a.g;
        H(b, "orientationchange", a.hb);
        H(b, "resize", a.ib);
        H(b, "scroll", a.ec);
        H(b, "touchcancel", a.hc);
        H(b, "touchend", a.ic);
        H(b, "touchmove", a.jc);
        H(b, "touchstart", a.mc)
    }

    function Co(a) {
        const b = a.g;
        G(b, "orientationchange", a.hb);
        G(b, "resize", a.ib);
        G(b, "scroll", a.ec);
        G(b, "touchcancel", a.hc);
        G(b, "touchend", a.ic);
        G(b, "touchmove", a.jc);
        G(b, "touchstart", a.mc);
        P(a, () => Bo(a))
    }

    function Do(a, b) {
        const c = parseInt(b.ht, 10),
            d = 0 < c ? c : null;
        b = parseInt(b.wd, 10);
        const e = 0 < b ? b : null;
        null != d && (a.B.height = d);
        null != e && (a.B.width = e);
        ro(a, f => {
            to(f, e, d)
        }, !1, !0);
        to(a.l, e, d)
    }

    function Eo(a, b) {
        b = new po(b, a.g, a.l, a.B, a.v, () => {
            if (!a.Pa) {
                a.Pa = !0;
                Bo(a);
                var c = a.j;
                c && c.parentNode && c.parentNode.removeChild(c);
                xo(a, a.fa, !0, !0);
                c && (c.style.display = "none")
            }
        }, () => void Fo(a), a.A, a.dd, () => {
            a.T || (a.T = !0, Go(a, null))
        }, () => {
            a.T && (a.T = !1, Go(a, null))
        });
        O(a, b);
        return b
    }

    function Fo(a) {
        a.rc && !a.Zb && (a.Zb = !0, a.A.ua(257, () => {
            const b = {
                    msg_type: "manual-send-view"
                },
                c = a.l.contentWindow;
            c && c.postMessage(a.g.JSON.stringify(b), "*")
        }))
    }

    function Ho(a) {
        if (!a.za() || a.da && !a.Za) return !1;
        const b = a.g;
        if (!a.H && a.V) switch (a.Tb && (a.F += Math.max(U(a.g) - a.Aa, 0)), a.v) {
            case "bottom":
                return a.F >= a.fd || a.Xa;
            case "top":
                return a.F > Io(a)
        }
        return jf(b)
    }

    function Jo(a) {
        const b = a.j;
        if (b && a.l.parentElement) {
            Vd(b, a.Z);
            var c = a.g.innerWidth;
            S(a.g).scrollWidth > c ? b.style.width = c : b.style.width = "100%";
            Ko(a)
        }
    }

    function Lo(a) {
        const b = a.j;
        if (b) {
            var c = a.m,
                d = c.N,
                e = U(d);
            if (!(10 > Math.abs(e - c.F))) {
                var f = 10 > e;
                d = e + 10 + S(d).clientHeight > gf(d);
                f = f || d;
                c.M || c.I || c.v || (c.m || f ? c.m && f && io(c) : bo(c, !1));
                c.F = e
            }
            a.U || (c = xo, vo(a), e = $d(a.g.document.body, "padding"), "bottom" == a.v && (e.bottom += a.Z.height + 25), c(a, e), b.style.display = "block", a.U = !0)
        }
    }

    function Mo(a) {
        a.cc = !0;
        if (!a.H && Ho(a) && (a.la || !a.xa)) {
            var b = a.j;
            b && (Jo(a), ro(a, c => {
                mf(c)
            }, !0), mo(a.m, b), Lo(a), a.H = !0, (a = a.l.contentWindow) && Am(a, "ig", {
                rr: "vis-aa"
            }, "*", 2))
        }
    }

    function xo(a, b, c = !0, d = !1) {
        const e = a.D.top - b.top,
            f = U(a.g);
        f < e && !d || (d = a.g.document.body, d.style.paddingTop = b.top + "px", d.style.paddingRight = b.right + "px", d.style.paddingBottom = b.bottom + "px", d.style.paddingLeft = b.left + "px", a.D = b, c && a.g.scrollTo(0, f - e))
    }

    function Ko(a) {
        ro(a, b => {
            Vd(b, a.B);
            b.style.width = "100%"
        }, !1, !0);
        a.l.style.display = "block";
        a.l.style.margin = "0 auto";
        if (a.qc) {
            const b = a.j;
            Ad(b, c => {
                Dd(c, d => c === b && /display|bottom/i.test(d) ? !1 : !0);
                if ("svg" === c.nodeName) return !1
            })
        }
    }

    function vo(a) {
        if ("bottom" !== a.v && "top" !== a.v) throw Error("Unexpected position: " + a.v);
    }

    function zo(a) {
        !a.Y || a.Pa || 2 <= a.J && a.M || !Ho(a) ? wo(a) : (Mo(a), Lo(a))
    }

    function Go(a, b) {
        const c = a.U ? Io(a, a.T) : a.fa.top;
        if ("top" === a.v && a.g.document.body && a.Y && a.m && a.H && a.D.top !== c && 0 !== b) {
            var d = Md(a.D);
            null === b ? (d.top = c, xo(a, d)) : (0 < b && a.D.top > c && (d.top = Math.max(c, a.D.top - b), xo(a, d, !1)), 0 > b && a.D.top < c && (d.top = Math.min(c, a.D.top - b), xo(a, d, !1)))
        }
    }

    function Io(a, b = !1) {
        return b ? a.fa.top + 30 : a.fa.top + 30 + a.Z.height - 5
    }
    class No extends so {
        constructor(a, b, c, d) {
            var e = Aj,
                f = zj;
            super(a, b, d);
            this.A = e;
            this.dd = f;
            this.F = this.Ba = this.Aa = 0;
            this.Pa = this.nc = !1;
            this.m = null;
            this.M = this.Y = !1;
            this.I = null;
            this.fa = $d(b.document.body, "padding");
            this.D = $d(b.document.body, "padding");
            this.J = 0;
            this.cc = this.H = !1;
            this.U = !0;
            this.v = c;
            this.B = uo(this);
            this.Z = null;
            this.Za = this.da = this.V = this.xa = this.la = this.Zb = this.qc = this.rc = !1;
            this.fd = Zc(b || window).height / 2;
            this.jb = Zc(b || window).height;
            this.Xb = ad(b);
            this.Tb = this.T = this.Xa = !1;
            wo(this);
            this.hb =
                this.A.K(266, () => {
                    zo(this)
                });
            this.ib = this.A.K(267, () => {
                zo(this)
            });
            this.ec = this.A.K(268, () => {
                if (this.H && this.j && this.m) {
                    var g = this.m;
                    g.F = U(g.N)
                }
                g = U(this.g);
                const h = g - this.Aa;
                Go(this, h);
                this.V && (0 < h && (this.F += h), this.Xa = this.Xb - g <= this.jb, this.Aa = g);
                zo(this)
            });
            this.hc = this.A.K(269, () => {
                yo(this)
            });
            this.ic = this.A.K(270, g => {
                Ao(this, g)
            });
            this.jc = this.A.K(271, g => {
                if (g && g.touches) {
                    this.I = "touchmove";
                    this.J = g.touches.length;
                    this.M = !0;
                    zo(this);
                    if (!this.nc && g.touches && 0 != g.touches.length && g.touches[0]) {
                        g = g.touches[0].pageY;
                        var h = g - this.Ba;
                        this.Ba = g;
                        g = h
                    } else g = 0;
                    0 < g && (this.F += g);
                    Go(this, g)
                }
            });
            this.mc = this.A.K(272, g => {
                g && g.touches && g.touches[0] && (this.I = "touchstart", this.J = g.touches.length, this.M = !1, zo(this), this.Ba = g.touches[0].pageY, this.nc = (g = g.target) && "top" == this.v && this.Y && this.m && ko(this.m) && 1 === g.nodeType ? fd(ko(this.m), g) : !1)
            });
            this.Ga = this.A.K(273, () => {
                this.ma()
            });
            G(a, "load", this.Ga);
            P(this, () => H(a, "load", this.Ga))
        }
        ma() {
            if (this.la) return !1;
            this.la = !0;
            H(this.l, "load", this.Ga);
            if (this.xa && !this.cc) return !1;
            zo(this);
            return !0
        }
        za() {
            return ff(this.g)
        }
    }
    var Oo = {
        ui: "gr",
        gvar: "ar",
        scroll_detached: "true",
        dismissable: "false"
    };
    class Po extends No {
        ca(a) {
            return vg(a)
        }
        ma() {
            if (!super.ma()) return !1;
            const a = Nm(this.g, "top" === this.v ? 3 : 2);
            a && a.displayAdLoadedContent(!this.V && !this.da);
            return !0
        }
        za() {
            if (this.B.width > ef) {
                var a = this.g;
                var b = this.B.width;
                a = a.innerWidth >= b && a.innerHeight >= (b > ef ? 650 : 0)
            } else a = super.za();
            return a
        }
    };

    function Qo(a, b, c) {
        try {
            if (!Id(c.origin) || !hf(c, a.F.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Pa[d]) && a.v.ua(168, () => {
            e.call(a, b, c)
        })
    }
    class Ro extends Ne {
        constructor(a, b, c, d, e = {}) {
            super();
            this.g = a;
            this.F = b;
            this.v = c;
            this.Xa = d;
            this.Pa = {};
            this.hb = this.v.K(168, (f, g) => void Qo(this, f, g));
            this.jb = this.v.K(169, (f, g) => {
                ye(this.Xa, "ras::xsf", {
                    c: g.data.substring(0, 500),
                    u: this.g.location.href.substring(0, 500)
                }, !0, .1);
                return !0
            });
            this.fa = [];
            this.P(this.Pa, e);
            this.fa.push(zm(this.g, "sth", this.hb, this.jb))
        }
        wa() {
            for (const a of this.fa) a();
            this.fa.length = 0;
            super.wa()
        }
    };
    class So extends Ro {
        constructor(a, b) {
            super(a, b, Aj, zj)
        }
    };

    function To(a) {
        const b = c => {
            try {
                const e = JSON.parse(c.data);
                if ("floating" === e.type && "loaded" === e.message) {
                    var d = a.j;
                    d.Za = !0;
                    const f = d.j;
                    d.da && d.Za && f ? .setAttribute("data-anchor-status", "ready-to-display");
                    Mo(a.j);
                    a.g.removeEventListener("message", b)
                }
            } catch {}
        };
        a.g.addEventListener("message", b);
        P(a, () => {
            a.g.removeEventListener("message", b)
        })
    }
    class Uo extends So {
        constructor(a, b, c, d = !1) {
            super(a, b.l);
            a = this.j = b;
            if ((b = a.j) && !a.m) {
                for (var e in Oo) !Oo.hasOwnProperty(e) || e in c || (c[e] = Oo[e]);
                a.rc = "true" === c.use_manual_view || "top" === a.v || !!Km(a.g).wasReactiveAdConfigReceived[2];
                a.qc = "true" === c.use_important;
                if (e = c.af_l) a.xa = "true" === e;
                a.V = "true" === c.wait_for_scroll || "top" == a.v;
                a.Tb = a.V && "true" === c.tsec;
                Do(a, c);
                a.m = Eo(a, c);
                c = a.B.height + 5;
                "bottom" == a.v && Zm(a.g) && (c += 20);
                a.Z = new Qc(a.B.width, c);
                a.Xa = a.jb >= a.Xb;
                c = a.j;
                e = a.m && ko(a.m);
                c && e && ("top" ==
                    a.v ? c.appendChild(e) : c.insertBefore(e, c.firstChild));
                Co(a);
                a.Y = !0;
                b.setAttribute("data-anchor-status", "ready-to-display")
            }
            d ? (d = this.j, d.da = !0, d.j ? .removeAttribute("data-anchor-status"), To(this)) : Mo(this.j)
        }
        P(a) {
            a.dismiss = pc(() => {
                var b = this.j;
                b.m && bo(b.m, !0)
            })
        }
    };
    var Vo = class extends D {},
        Wo = kc(Vo);

    function Xo(a) {
        Yo(a, !1);
        const b = a.j;
        ro(a, c => {
            M(c, Zo);
            mf(c)
        }, !0);
        a.l.setAttribute("width", "");
        a.l.setAttribute("height", "");
        N(a.l, Zo);
        N(a.l, $o);
        N(b, ap);
        mf(b);
        mf(a.l)
    }

    function Yo(a, b) {
        const c = a.j;
        b ? bp(a, c) : (M(c, {
            display: "none"
        }), a.m && M(a.m, {
            display: "none"
        }), a.A && (t.clearInterval(a.A), a.A = 0), cp(a))
    }

    function dp(a, b) {
        const c = a.j;
        if (!b) return !1;
        var d = Qi(b);
        if (!d || !d.m()) return !1;
        d = d.C;
        if (!d) return !1;
        a.m = a.g.document.createElement("ins");
        M(a.m, {
            display: "inline-block",
            width: "100%"
        });
        ki(a.m, d, ni[b.j]);
        a.B();
        M(c, {
            position: "absolute"
        });
        Yo(a, !0);
        return !0
    }

    function bp(a, b) {
        M(b, {
            display: "block"
        });
        a.A = t.setInterval(() => a.B, 250)
    }

    function cp(a) {
        null != a.D && (a.v.body.style.overflow = a.D);
        null != a.F && (a.v.documentElement.style.overflow = a.F)
    }

    function ep(a) {
        const b = a.j,
            c = a.g.innerHeight;
        M(b, {
            height: c + "px"
        });
        a.g.scrollTo(0, Td(a.m).y);
        b && (M(b, {
            top: "0"
        }), a.m && M(a.m, {
            height: c + "px"
        }), M(b, {
            position: "fixed"
        }), a.v.body && "hidden" != a.v.body.style.overflow && (a.D = a.v.body.style.overflow, a.F = a.v.documentElement.style.overflow, a.v.body.style.overflow = "hidden", a.v.documentElement.style.overflow = "hidden"))
    }
    class fp extends so {
        constructor(a, b, c) {
            super(a, b, c);
            this.D = null;
            this.A = 0;
            this.F = null;
            this.H = 0;
            this.v = b.document;
            this.m = null;
            this.I = 0;
            Xo(this)
        }
        B() {
            if ("hidden" != this.v.body.style.overflow && "fixed" != this.v.body.style.position) {
                var a = this.j;
                const b = this.g.innerHeight;
                if (this.I < b) {
                    const c = {
                        height: b + "px"
                    };
                    M(a, c);
                    this.m && M(this.m, c);
                    this.I = b
                }(a = this.j) && this.m && (this.H = Td(this.m).y, a.style.top != this.H + "px" && M(a, {
                    top: this.H + "px"
                }))
            }
        }
    }
    var ap = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            display: "none !important",
            zIndex: "2147483646"
        },
        Zo = {
            width: "100%",
            height: "100%",
            zIndex: "2147483646"
        },
        $o = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    var gp = (a, b) => {
            var c = a.document.body;
            if (!c || !b) return Ej("sci_evt", {
                amacerr: 1
            }, .1), null;
            b = cc(b, ml, 1);
            var d = [];
            for (let v = 0; v < b.length; v++) {
                var e = b[v];
                var f = v,
                    g = a,
                    h = bc(e, Lh, 1);
                if (h) {
                    var k;
                    if (k = h) {
                        var l = fc(k, 7);
                        if (fc(k, 1) || k.getId() || 0 < Yb(k, 4, Fb).length) {
                            var m = Yb(k, 4, Fb);
                            l = ec(k, 2);
                            var n = ec(k, 5),
                                q = fc(k, 3),
                                r = fc(k, 1),
                                u = "";
                            r && (u += r);
                            q && (u += "#" + Dh(q));
                            if (m)
                                for (q = 0; q < m.length; q++) u += "." + Dh(m[q]);
                            k = (m = u) ? new Fh(m, l, n, vl(Sb(k, 6))) : null
                        } else k = l ? new Fh(l, ec(k, 2), ec(k, 5), vl(Sb(k, 6))) : null
                    } else k = null;
                    (l = k) ? (k =
                        yl[Sb(e, 2)], n = void 0 === k ? null : k, null === n ? e = null : (k = (k = bc(e, ll, 3)) ? Xb(k, 3) : null, l = new Cl(l, n), n = Yb(e, 10, zb).slice(0), null != ec(h, 5) && n.push(1), h = ec(e, 12), n = void 0 !== ac(e, Th, 4) ? bc(e, Th, 4) : null, e = 1 == Sb(e, 8) ? new Hl(l, new zl(xl(bc(e, ll, 3), null)), k, 0, n, g, f, h, e) : 2 == Sb(e, 8) ? new Hl(l, new Al(e), k, 1, n, g, f, h, e) : null)) : e = null
                } else e = null;
                null !== e && d.push(e)
            }
            b = new ym(d, a);
            d = a.innerHeight;
            a = a.innerWidth;
            a = em(cm(.85 * a, a), d);
            a.g.push(new Yl);
            a.l = 1;
            a = a.build();
            a = vm(b, a)[0] || null;
            if (!a) return null;
            c = {
                node: (new mg(c, !1)).g(a.g) || void 0,
                tb: void 0,
                identifier: {}
            };
            if (!c.node) throw Error("amac:n");
            b = Ml(a.pa.g.g);
            if (null === b) throw Error("amac:p");
            return (c = (new Oj(c, b)).build()) ? {
                nb: c,
                ed: a.Ma.g
            } : null
        },
        hp = a => {
            var b = new cf;
            b.g = !0;
            b.v = .85;
            b.j = 1;
            b.m = 25;
            b.l = a.innerHeight;
            b.A = !0;
            b = b.build();
            return fl(a, b)
        };

    function ip(a) {
        const b = gf(a, !0),
            c = S(a).scrollWidth,
            d = S(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = U(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            u = 0,
            v = Infinity,
            E = Infinity,
            J = null;
        var K = kk({
            Pb: !1
        }, a);
        for (const ia of K) {
            K = ia.getBoundingClientRect();
            const ha = b - (K.bottom + f);
            var w = void 0,
                z = void 0;
            if (ia.className && -1 != ia.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                w = ia.getAttribute("google_element_uid");
                z = a.google_sv_map;
                if (!w || !z || !z[w]) continue;
                a: {
                    var F = z[w];w = Number(F.google_ad_width);z = Number(F.google_ad_height);
                    if (!(0 < w && 0 < z)) {
                        b: {
                            try {
                                const ba = String(F.google_ad_format);
                                if (ba && ba.match) {
                                    const db = ba.match(/(\d+)x(\d+)/i);
                                    if (db) {
                                        const Ra = parseInt(db[1], 10),
                                            Tb = parseInt(db[2], 10);
                                        if (0 < Ra && 0 < Tb) {
                                            var X = {
                                                width: Ra,
                                                height: Tb
                                            };
                                            break b
                                        }
                                    }
                                }
                            } catch (ba) {}
                            X = null
                        }
                        F = X;
                        if (!F) {
                            w = null;
                            break a
                        }
                        w = 0 < w ? w : F.width;z = 0 < z ? z : F.height
                    }
                    w = {
                        width: w,
                        height: z
                    }
                }
                w = (z = w) ? z.height : 0;
                z = z ? z.width : 0
            } else if (w = K.bottom - K.top, z = K.right - K.left, 1 >= w || 1 >= z) continue;
            g.push(w);
            k.push(z);
            l.push(w * z);
            ia.className && -1 != ia.className.indexOf("google-auto-placed") ? (u += 1, ia.className && -1 != ia.className.indexOf("pedestal_container") && (J = w)) : (v = Math.min(v, ha), n.push(K), r += 1, h.push(w), m.push(w * z));
            E = Math.min(E, ha);
            q.push(K)
        }
        v = Infinity === v ? null : v;
        E = Infinity === E ? null : E;
        f = jp(n);
        q = jp(q);
        h = kp(b, h);
        n = kp(b, g);
        m = kp(b * c, m);
        X = kp(b * c, l);
        return new lp(a, {
            Dc: e,
            fc: b,
            Rc: c,
            Qc: d,
            Yb: r,
            Ib: u,
            Jb: mp(g),
            yc: mp(k),
            xc: mp(l),
            Oc: f,
            Nc: q,
            Mc: v,
            Lc: E,
            Bc: h,
            Ac: n,
            wc: m,
            vc: X,
            Sc: J
        })
    }

    function np(a, b = 0) {
        a = ip(a);
        return ((a.g.Jb || 0) * (a.g.Yb + a.g.Ib) + b) / (a.g.fc + b)
    }

    function op(a, b) {
        const c = hd() && !(900 <= T(a.j)),
            d = Ga([], e => Ja(a.l, e)).join(",");
        return {
            wpc: "",
            su: b,
            eid: d,
            doc: a.g.Dc,
            pg_h: Z(a.g.fc),
            pg_w: Z(a.g.Rc),
            pg_hs: Z(a.g.Qc),
            c: Z(a.g.Yb),
            aa_c: Z(a.g.Ib),
            av_h: Z(a.g.Jb),
            av_w: Z(a.g.yc),
            av_a: Z(a.g.xc),
            s: Z(a.g.Oc),
            all_s: Z(a.g.Nc),
            b: Z(a.g.Mc),
            all_b: Z(a.g.Lc),
            d: Z(a.g.Bc),
            all_d: Z(a.g.Ac),
            ard: Z(a.g.wc),
            all_ard: Z(a.g.vc),
            pd_h: Z(a.g.Sc),
            dt: c ? "m" : "d"
        }
    }
    class lp {
        constructor(a, b) {
            this.j = a;
            this.g = b;
            this.l = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function mp(a) {
        return Oc.apply(null, Ga(a, b => 0 < b)) || null
    }

    function kp(a, b) {
        return 0 >= a ? null : Nc.apply(null, b) / a
    }

    function jp(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Z(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function pp(a, b, c) {
        var d;
        if (!(d = 0 >= c) && !(d = null == b)) {
            try {
                b.setItem("__storage_test__", "__storage_test__");
                const f = b.getItem("__storage_test__");
                b.removeItem("__storage_test__");
                var e = "__storage_test__" === f
            } catch (f) {
                e = !1
            }
            d = !e
        }
        b = d ? null : mn(b, c);
        a.g = b;
        if (b = !!a.g) a = a.g, b = !!a && 1 > a.length;
        return b
    }

    function qp(a, b, c) {
        try {
            if (!b || !pp(a, b, c)) return !1;
            a.g.push(Date.now());
            const d = JSON.stringify(a.g);
            b.setItem("__lsv__", d);
            return b.getItem("__lsv__") == d
        } catch (d) {
            return !1
        }
    }
    class rp {
        constructor() {
            this.g = null
        }
    };

    function sp(a, b) {
        if (a.xa) Promise.resolve(!1);
        else {
            a.xa = !0;
            b = lf(b);
            a.da = "true" === b["i-fvs"];
            var c = b.i_expid;
            c && (a.T = c);
            b.qid && (a.Z = b.qid);
            a.D = parseFloat(b.den_lim) || 0;
            b = parseInt(b.sti_lt, 10);
            isNaN(b) || (a.V = b);
            a.J = !0;
            if (tp(a)) Promise.resolve(!1);
            else {
                var d = new Cm,
                    e = () => {
                        const g = gf(a.g, !0);
                        up(a, {
                            nip: 1,
                            ph: g,
                            vh: a.g.innerHeight,
                            iplt: Date.now() - a.U,
                            ama: a.M,
                            url: a.g.location ? a.g.location.href : void 0
                        }, .1);
                        a.H.push("Could not locate a suitable placement in the content below the fold.");
                        Om(a.g, a.H);
                        d.resolve(!1)
                    },
                    f = (g, h) => {
                        up(a, {
                            iplt: Date.now() - a.U,
                            ama: a.M,
                            y: h
                        }, .01);
                        d.resolve(vp(a, g))
                    };
                a.U = Date.now();
                a.M ? (b = gp(a.g, a.Ga)) && a.J && !tp(a) ? f(b.nb, b.ed) : (up(a, {
                    amacerr: 1
                }, .1), e()) : hp(a.g).then(g => {
                    if (a.J && !tp(a)) return g.W().then(h => {
                        if (h.g) var k = h.g;
                        else h.na || (Pi(h, !1), h.l()), k = h.na, !h.g && k && (h.g = k.j()), k = h.g;
                        f(h, k ? k.top : -1)
                    }, e);
                    d.resolve(!1)
                })
            }
        }
    }

    function tp(a) {
        return a.da ? !1 : Km(a.g).wasReactiveAdVisible[8] ? (up(a, {
            vigs: 1
        }, .1), !0) : !1
    }

    function up(a, b, c) {
        b = b || {};
        a.Z && (b.qid = a.Z);
        a.T && (b.eid = a.T);
        a.j && (b.tsl = Date.now() - a.j);
        a.Y && (b.tslo = Date.now() - a.Y, b.tl = a.Aa);
        a.F.src && (b.req = a.F.src);
        Ej("sci_evt", b, c)
    }

    function vp(a, b) {
        wp(a) && xp(a) && dp(a.l, b) && (a.j = Date.now(), yp(a), a.da ? zp(a) : a.ca.call(a.g, () => Ap(a)));
        Om(a.g, a.H);
        return !!a.j
    }

    function Bp(a) {
        a.I = !0;
        a.m = !1;
        Yo(a.l, !1);
        a.A && (H(a.g, "orientationchange", a.A), a.A = null);
        a.B && (H(a.g, "resize", a.B), a.B = null)
    }

    function wp(a) {
        const b = a.g.innerHeight;
        if (!b) return !1;
        const c = !ff(a.g);
        var d = a.g;
        const e = T(d);
        d = S(d).scrollWidth <= e;
        let f;
        if (c) return up(a, {
            lnd: 1
        }, .1), a.H.push("Landscape is not supported"), !1;
        if (a.D && (f = np(a.g, b)) > a.D) return up(a, Object.assign({
            den: f,
            lim: a.D
        }, op(ip(a.g), a.g.location.hostname)), 1), a.H.push(`Insertion would cause ad density greater than ${100*a.D}%.`), !1;
        d || up(a, {
            Kd: 1
        }, .1);
        return !0
    }

    function xp(a) {
        return a.la ? !0 : pp(Q(rp), a.ma, 3600)
    }

    function yp(a) {
        a.A = Dj(519, () => {
            !a.I && a.m && up(a, {
                tto: Date.now() - a.j,
                por: ff(a.g) ? 1 : 0
            }, .1)
        });
        G(a.g, "orientationchange", a.A);
        a.B = Dj(520, () => {
            a.I || (a.l.B(), a.m && up(a, {
                ttre: Date.now() - a.j
            }, .1))
        });
        G(a.g, "resize", a.B)
    }

    function zp(a) {
        a.za || (a.F.contentWindow.postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "https://googleads.g.doubleclick.net"), a.za = !0)
    }

    function Ap(a) {
        if (!a.I)
            if (tp(a)) Bp(a);
            else {
                var b = a.l.j.getBoundingClientRect().top,
                    c = a.g.innerHeight;
                a.l.B();
                .5 <= (c - b) / c && zp(a);
                b < c && (Km(a.g).wasReactiveAdVisible[9] = !0, a.la || qp(Q(rp), a.ma, 3600), a.Ba = !0);
                0 >= b ? (0 <= a.V && Cp(a), up(a, {
                    sice: !0,
                    vh: c,
                    gvto: b
                }, .1)) : a.ca && a.ca.call(a.g, () => Ap(a))
            }
    }

    function Cp(a) {
        a.Y = Date.now();
        a.m = !0;
        a.Aa++;
        ep(a.l);
        t.setTimeout(() => {
            if (a.m) {
                a.m = !1;
                var b = a.l;
                const c = b.j;
                M(c, {
                    top: Td(b.m).y + "px"
                });
                M(c, {
                    position: "absolute"
                });
                cp(b)
            }
        }, Math.max(0, a.V))
    }
    class Dp extends So {
        constructor(a, b, c, d, e, f) {
            super(a, b);
            this.ma = f;
            this.la = d;
            this.I = !1;
            this.T = null;
            this.da = this.J = this.xa = !1;
            this.H = [];
            this.m = !1;
            this.Aa = this.Y = this.j = 0;
            this.B = this.A = this.Z = null;
            this.ca = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
            this.za = !1;
            this.l = new fp(b, a, e);
            this.Ba = !1;
            this.U = this.V = 0;
            this.M = gc(c, 1, !1);
            this.Ga = bc(c, nl, 2);
            this.D = 0
        }
        P(a) {
            a["sti-fill"] = b => {
                sp(this, b)
            };
            a["i-no"] = () => {
                this.J = !1;
                !this.Ba && this.j && Bp(this)
            }
        }
    };
    var Ep = class extends Sm {
        constructor() {
            super(...arguments);
            this.F = !1;
            this.B = null
        }
        G(a) {
            this.F = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = ol(a)
            } catch (c) {
                b = null
            } else b = null;
            this.B = b;
            return !0
        }
    };
    class Fp {
        verifyAndProcessConfig(a, b, c) {
            var d = Km(a);
            if (d.wasReactiveAdConfigReceived[9]) return !1;
            const e = new Ep;
            if (!Rm(e, b)) return !1;
            d.wasReactiveAdConfigReceived[9] = !0;
            if (!e.m && !pp(Q(rp), c, 3600)) return !1;
            b = ed(document, "INS");
            b.className = "adsbygoogle";
            M(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = e.A || {};
            c.google_ad_client = e.j;
            c.google_ad_height = S(a).clientHeight || 0;
            c.google_ad_width = T(a) || 0;
            c.google_reactive_ad_format = 9;
            d = new Vo;
            var f = e.F;
            if (null != f) {
                if ("boolean" !== typeof f) throw Error(`Expected boolean but got ${ca(f)}: ${f}`);
                f = !!f
            }
            d = Vb(d, 1, f);
            e.B && dc(d, 2, e.B);
            a: {
                lb = !0;
                try {
                    var g = JSON.stringify(d.toJSON(), Jb);
                    break a
                } finally {
                    lb = !1
                }
                g = void 0
            }
            c.google_rasc = g;
            e.m && (c.google_adtest = "on");
            Dn(b, c, a);
            return !0
        }
    };
    var Ip = class extends So {
        constructor(a, b) {
            super(a, b.l);
            this.j = b
        }
        P(a) {
            a.dismiss = () => {
                var b = this.j;
                Gp(b, -30);
                Hp(b, "dismissed")
            }
        }
    };
    const Jp = (a, b) => {
        const c = rd("STYLE", a);
        c.textContent = Fc();
        a ? .head.appendChild(c);
        setTimeout(() => {
            a ? .head.removeChild(c)
        }, b)
    };
    var Lp = (a, b, c) => {
        if (!a.body) return null;
        const d = new Kp;
        d.apply(a, b);
        return () => {
            var e = c || 0;
            0 < e && Jp(b.document, e);
            N(a.body, {
                filter: d.g,
                webkitFilter: d.g,
                overflow: d.l,
                position: d.m,
                top: d.v
            });
            b.scrollTo(0, d.j)
        }
    };
    class Kp {
        constructor() {
            this.g = this.v = this.m = this.l = null;
            this.j = 0
        }
        apply(a, b) {
            this.l = a.body.style.overflow;
            this.m = a.body.style.position;
            this.v = a.body.style.top;
            this.g = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
            this.j = U(b);
            N(a.body, "top", -this.j + "px")
        }
    };

    function Mp(a, b) {
        const c = a.j;
        if (c)
            if (b) {
                b = a.A;
                if (null == b.g) {
                    var d = b.j;
                    const e = d.g.nextRestrictionId++;
                    d.g.maxZIndexRestrictions[e] = 2147483646;
                    Vn(d);
                    b.g = e
                }
                M(c, {
                    display: "block"
                });
                a.v.body && !a.m && (a.m = Lp(a.v, a.g, a.B));
                c.setAttribute("tabindex", "0");
                c.setAttribute("aria-hidden", "false");
                a.v.body.setAttribute("aria-hidden", "true")
            } else b = a.A, null != b.g && (d = b.j, delete d.g.maxZIndexRestrictions[b.g], Vn(d), b.g = null), M(c, {
                display: "none"
            }), a.m && (a.m(), a.m = null), a.v.body.setAttribute("aria-hidden", "false"), c.setAttribute("aria-hidden",
                "true")
    }

    function Np(a) {
        Mp(a, !1);
        const b = a.j;
        if (b) {
            var c = {
                width: "100vw",
                height: "100vh"
            };
            ro(a, d => {
                M(d, c);
                mf(d)
            }, !0);
            a.l.setAttribute("width", "");
            a.l.setAttribute("height", "");
            N(a.l, c);
            N(a.l, Op);
            N(b, Pp);
            N(b, {
                background: "transparent"
            });
            M(b, {
                display: "none",
                position: "fixed"
            });
            mf(b);
            mf(a.l)
        }
    }
    class Qp extends so {
        constructor(a, b, c) {
            var d = Q(fi).g(ci.g, ci.defaultValue);
            super(a, b, c);
            this.m = null;
            this.v = b.document;
            this.B = d;
            a = new Yn(b);
            this.A = new Zn(a)
        }
    }
    var Pp = {
            backgroundColor: "white",
            opacity: "1",
            position: "fixed",
            left: "0px",
            top: "0px",
            margin: "0px",
            padding: "0px",
            display: "none",
            zIndex: "2147483647"
        },
        Op = {
            left: "0",
            position: "absolute",
            top: "0"
        };
    class Rp extends Qp {
        constructor(a, b, c) {
            super(b, a, c);
            Np(this)
        }
        ca(a) {
            return vg(a)
        }
    };
    var Sp = class extends hn {
        constructor(a) {
            super(a, [0, 1, 2]);
            this.A = 0;
            this.qa()
        }
        l(a) {
            switch (this.A) {
                case 0:
                    this.m && !this.v && (this.A = 1);
                    break;
                case 1:
                    if (!this.m && this.j && this.v) {
                        this.A = 2;
                        const b = setTimeout(() => {
                            this.l(a)
                        }, 200);
                        P(this, () => void clearTimeout(b))
                    }
                    break;
                case 2:
                    !this.m && this.j && this.v ? (this.D.resolve(a), this.Fa()) : this.A = 1
            }
        }
    };

    function Tp(a) {
        let b = null;
        const c = ({
                timeStamp: e,
                isTrusted: f
            }) => {
                f && (b = e)
            },
            d = ({
                timeStamp: e,
                isTrusted: f
            }) => {
                if (f) {
                    e = {
                        Zc: e,
                        ...(b ? {
                            bd: e - b
                        } : null)
                    };
                    for (const g of a.j) try {
                        g(e)
                    } catch (h) {}
                }
            };
        a.g.addEventListener("focus", d);
        a.g.addEventListener("blur", c);
        P(a, () => {
            a.g.removeEventListener("focus", d);
            a.g.removeEventListener("blur", c)
        })
    }
    var Up = class extends Ne {
        constructor(a) {
            super();
            this.g = a;
            this.j = [];
            this.l = pc(() => {
                Tp(this)
            })
        }
        listen(a) {
            this.l();
            this.j.push(a)
        }
    };
    var Vp = class extends Ne {
        constructor(a, b, c, d, e) {
            super();
            this.j = c;
            this.m = d;
            this.l = Math.floor(2147483647 * td());
            this.g = (f, g, h = {}) => {
                f = Object.assign({
                    etc: this.l,
                    e: f,
                    t: Math.round(g),
                    qqid: this.m,
                    ptt: 9
                }, h);
                ye(this.j, "eit", f, !0, 1)
            };
            this.g(1, b);
            for (const f of e) switch (f) {
                case 101:
                    b = new Sp(a);
                    b.B.then(h => void this.g(f, h));
                    O(this, b);
                    break;
                case 102:
                    const g = new jn(a);
                    g.B.then(h => void this.g(f, h, {
                        tbd: Math.round(g.F || -1)
                    }));
                    O(this, g);
                    break;
                case 103:
                    b = new Up(a), b.listen(h => {
                        this.g(f, h.Zc, {
                            tsb: h.bd ? ? -1
                        })
                    }), O(this,
                        b)
            }
        }
    };

    function Wp(a) {
        a = a.match(jd);
        const b = a[6];
        return (a[5] || "") + (b ? "?" + b : "") || "/"
    }

    function Xp(a, b) {
        b ? a.g = new RegExp("\\b(" + b.join("|").toLowerCase() + ")\\b", "ig") : a.g = null
    }

    function Yp(a, b, c, d, e) {
        if (!c) return !1;
        switch (b.target) {
            case "_top":
            case "_parent":
                break;
            case "":
            case "_self":
                if (e) return !1;
                break;
            default:
                return !1
        }
        return !d || Zp(a, d) && Wp(c) == a.m ? !1 : !0
    }

    function Zp(a, b) {
        return b.replace($p, "") == a.l.replace($p, "")
    }

    function aq(a, b, c) {
        if (Ia(["data-google-vignette", "data-google-interstitial"], f => "false" === b.getAttribute(f) || !1)) return !1;
        const d = b.href,
            e = d && (d.match(jd)[3] || null);
        if (!Yp(a, b, d, e, c)) return !1;
        a.j = !!e && Zp(a, e);
        return a.j || !c && !mk(b) && /^https?:\/\//i.test(d) && !/((facebook|whatsapp|youtube|google)\.com)|\/ads?\//i.test(d)
    }

    function bq(a, b) {
        if (!b || !a.g) return [];
        var c = [];
        pn(b, c, !0, !0);
        b = c.join("");
        b = b.replace(qn, " ").replace(rn, "");
        b = b.replace(sn, "");
        b = b.replace(tn, " ");
        " " != b && (b = b.replace(un, ""));
        if (!b) return [];
        a = b.match(a.g);
        b = [];
        for (c = 0; a && c < a.length; c++) {
            const d = a[c].toLowerCase();
            0 <= Ea(b, d) || b.push(d)
        }
        return b
    }
    class cq {
        constructor(a) {
            this.g = null;
            this.l = a.match(jd)[3] || "";
            this.m = Wp(a);
            this.j = !1
        }
    }
    var $p = /^(www\.|m\.|mobile\.)*/i;

    function dq(a) {
        a.j ? .setAttribute("data-vignette-loaded", "true")
    }

    function eq(a) {
        a.B && (Dm(a.B).then(() => {
            dq(a.I);
            a.m.kb || (a.m.kb = ge())
        }), Em(a.B).then(() => void fq(a)), Fm(a.B).then(() => {
            a.m.Ab = !0
        }))
    }

    function gq(a) {
        if (!a.l.ta) {
            a.l.ta = a.v.K(527, c => {
                hq(a, c)
            });
            if (null !== a.l.ta) {
                const c = a.l.ta;
                G(a.g.document, "click", d => {
                    c(d)
                }, rc)
            }
            var b = a.g.frames;
            for (let c = 0; c < b.length; c++) try {
                a.Z(b[c].frameElement) || G(b[c].document, "click", a.l.ta, rc)
            } catch (d) {}
        }
    }

    function iq(a, b) {
        if (jq(a)) {
            b = 1 === b;
            if (a.H.Cc) {
                let c;
                (c = a.j).gb || (c.gb = !b)
            }
            a.da() ? (a.j.ab = Date.now(), Km(a.g).wasReactiveAdVisible[8] = !0, b && a.l.ea && (a.j.Eb = a.l.ea.href), kq(a), a.l.ea && lq(a, a.l.ea.href), mq(a), G(a.g, "pagehide", a.v.K(528, () => {
                nq(a)
            })), b && a.Za ? .(a.j.ab), Mp(a.I, !0), a.ca ? .Fa()) : b && a.l.ea && oq(a, a.l.ea.href)
        }
    }

    function fq(a) {
        a.j.gb ? pq(a) ? a.g.history.back() : nq(a) : (t.setTimeout(() => {
            nq(a)
        }, 1E3), a.j.Eb && (a.j.Fb && (a.j.zb = !1), oq(a, a.j.Eb)))
    }

    function pq(a) {
        return -1 !== a.g.location.hash.indexOf("google_vignette")
    }

    function nq(a) {
        a.j.ab && (a.j.tc = !0, a.l.ta && (H(a.g.document, "click", a.l.ta), a.l.ta = void 0), a.j.Ta && a.j.Ta.parentNode && (a.j.Ta.parentNode.removeChild(a.j.Ta), a.j.Ta = void 0), a.j.Sa && a.j.Sa.parentNode && (a.j.Sa.parentNode.removeChild(a.j.Sa), a.j.Sa = void 0), Mp(a.I, !1), a.Y())
    }

    function oq(a, b) {
        a = a.g.location;
        b = nd(b, md) || Dc;
        if (b instanceof Bc) var c = b instanceof Bc && b.constructor === Bc ? b.g : "type_error:SafeUrl";
        else {
            b: {
                try {
                    c = new URL(b)
                } catch (d) {
                    c = "https:";
                    break b
                }
                c = c.protocol
            }
            c = "javascript:" !== c ? b : void 0
        }
        void 0 !== c && a.replace(c)
    }

    function mq(a) {
        pq(a) || (a.g.location.hash = "google_vignette");
        a.j.Fb = a.v.K(526, () => {
            a.j.zb && (pq(a) ? oq(a, a.l.ea.href) : nq(a))
        });
        t.setTimeout(ma(G, a.g, "hashchange", a.j.Fb), 0)
    }

    function jq(a, b) {
        var c = ge();
        const d = !Km(a.g).wasReactiveAdVisible[9];
        b = b ? bq(a.A, b) : [];
        const e = a.H.Gc || jf(a.g),
            f = a.V.width < a.V.height === ff(a.g);
        if (c = 864E5 > c - a.xa) a: switch (a.T.tag) {
            case 0:
                c = !0;
                break a;
            case 1:
                c = !1;
                break a;
            default:
                c = !1
        }
        return c && !a.m.Ab && !pq(a) && !!a.m.kb && (a.Aa || d) && !b.length && e && f
    }

    function qq(a, b, c) {
        a = rd("LINK", a.g.document);
        a.setAttribute("rel", c);
        a.setAttribute("href", b);
        return a
    }

    function lq(a, b) {
        a.j.Ta = qq(a, b, "prerender");
        a.j.Sa = qq(a, b, "prefetch");
        a.g.document.body.appendChild(a.j.Ta);
        a.g.document.body.appendChild(a.j.Sa)
    }

    function rq(a, b) {
        for (b = b.target; b;) {
            if ("nodeName" in b && "A" === b.nodeName) {
                if (aq(a.A, b, b.ownerDocument !== a.g.document)) return b;
                break
            }
            b = "parentElement" in b ? b.parentElement : null
        }
        return null
    }

    function hq(a, b) {
        if (!(!b || b.defaultPrevented || a.j.ab || a.j.Eb || a.G || a.l.ea)) {
            var c = rq(a, b);
            c && jq(a, c) && (a.l.ea = c, Jd(b), b.preventDefault = () => b && (b.preventDefaultTriggered = !0), t.setTimeout(y(a.Ga, a, b), 0))
        }
    }

    function kq(a) {
        a.Ba || (a.B ? t.IntersectionObserver || a.B.Kb.postMessage(JSON.stringify({
            eventType: "visible",
            googMsgType: "fullscreen"
        }), "*") : (a.F ? .contentWindow).postMessage(JSON.stringify({
            msg_type: "i-view"
        }), "*"))
    }
    var sq = class extends Ro {
        constructor(a, b, c, d, e, f, g, h) {
            var k = new Set(gi(bi) ? [2] : []);
            super(a, b, c, e, {
                fullscreenApi: h.oc
            });
            this.I = d;
            this.V = f;
            this.H = h;
            this.xa = ge();
            this.Aa = "true" === g["i-fvs"];
            this.ib = g.qid;
            this.A = new cq(a.location.href);
            this.Ba = "true" === g.iobs && "IntersectionObserver" in this.g;
            Xp(this.A, g.stop_word ? .split(";") ? ? null);
            this.B = this.H.oc ? Im(a, b.contentWindow, c, e, this.H.rb) : null;
            this.m = {
                Ab: !1
            };
            this.l = {};
            this.T = {
                tag: 0
            };
            this.j = {
                Ld: !0,
                tc: !1,
                gb: !1,
                zb: !0
            };
            eq(this);
            gq(this);
            k.size && (b = new Cm, b.promise.then(l => {
                this.j.ab || this.G || iq(this, l)
            }), this.ca = new kn(a, k, b), O(this, this.ca));
            if (h.Nb ? .length && (k = he(a))) {
                const l = new Vp(a, k, e, this.ib, h.Nb);
                O(this, l);
                this.Za = m => {
                    l.g(2, m - je(a))
                }
            }
        }
        P(a, b) {
            a["i-blur"] = () => {
                this.j.gb = !0;
                this.j.Fb && (this.j.zb = !0)
            };
            a["i-no"] = c => {
                this.T = {
                    tag: 1,
                    Md: c.i_tslv ? c.i_tslv : void 0
                }
            };
            b.fullscreenApi || (a["i-adframe-load"] = () => {
                dq(this.I);
                this.m.kb || (this.m.kb = ge())
            }, a["i-dismiss"] = () => {
                fq(this)
            }, a.i_iif = () => {
                this.m.Ab = !0
            })
        }
        wa() {
            super.wa();
            pq(this) && oq(this, this.l.ea.href);
            this.l.ta && (H(this.g.document,
                "click", this.l.ta), this.l.ta = void 0)
        }
        Y() {}
        Z() {
            return !1
        }
        Ga(a) {
            if (!this.j.ab && !this.G && this.l.ea) {
                a = !!a.preventDefaultTriggered;
                var b = aq(this.A, this.l.ea, this.l.ea.ownerDocument !== this.g.document);
                !a && b && jq(this, this.l.ea) ? iq(this, 1) : a ? this.l.ea = void 0 : oq(this, this.l.ea.href)
            }
        }
        da() {
            return !0
        }
    };

    function tq(a, b) {
        b = b || a.g.document;
        if (!b.getElementById("vignette-style-id")) {
            var c = Wc(b).createElement("STYLE");
            c.id = "vignette-style-id";
            c.textContent = "a.google_vignette_inst {border:1px solid #000;color:#6c12b9}";
            b.head.appendChild(c);
            a.D.push(c)
        }
    }

    function uq(a, b, c) {
        let d = 0;
        for (let e = b.links.length; 0 <= e; e--) {
            const f = b.links[e];
            f && (f.classList.remove("google_vignette_inst"), aq(a.A, f, c) && !bq(a.A, f).length && (d++, f.classList.add("google_vignette_inst")))
        }
        return d
    }
    class vq extends sq {
        constructor(a, b, c, d, e, f, g, h) {
            var k = Aj;
            const l = [];
            gi(di) && 0 === zd() && l.push(101);
            gi(ei) && l.push(102);
            super(a, b, k, new Rp(a, b, e), zj, d, h, {
                oc: !0,
                Nb: l,
                Cc: gi(ai),
                rb: {
                    Yc: 1,
                    version: "m202310100101"
                },
                Gc: !1
            });
            this.ma = f;
            this.D = [];
            this.J = 0;
            this.U = ij(this.g.location, "google_ia_debug");
            this.la = c;
            this.za = g;
            this.U && (this.M(), this.J = t.setInterval(y(this.M, this), 5E3))
        }
        Y() {
            if (this.U) {
                for (let b = 0; b < this.D.length; ++b) {
                    var a = this.D[b];
                    (a = a.ownerNode || a.owningElement || a) && a.parentNode && a.parentNode.removeChild(a)
                }
                this.D = [];
                this.J && t.clearInterval(this.J)
            }
        }
        M() {
            let a = uq(this, this.g.document, !1);
            tq(this);
            var b = this.g.frames;
            for (let c = 0; c < b.length; c++) try {
                a += uq(this, b[c].document, !0), tq(this, b[c].document)
            } catch (d) {}
            b = Nm(this.g, 1);
            null != b && b.setLinksInstrumented(a)
        }
        da() {
            return this.la || qp(Q(rp), this.ma, gi($h) ? this.za : Q(fi).g(Zh.g, Zh.defaultValue))
        }
        Z(a) {
            return /aswift_[0-9]+/.test(a.id)
        }
    };

    function wq(a) {
        const b = a.j.document.createElement("span"),
            c = Math.round((xq(a) - 50) / 2);
        M(b, {
            background: "#FAFAFA",
            position: "absolute",
            left: c + "px",
            right: c + "px",
            top: yq(a) + 5 + "px",
            "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
        });
        b.className = `${a.l}-side-rail-dismiss-btn`;
        b.appendChild(zq(a));
        const d = () => {
            a.B()
        };
        G(b, "click", d);
        P(a, () => H(b, "click", d));
        return b
    }

    function yq(a) {
        return Number(Xd(a.g).height || a.g.height)
    }

    function xq(a) {
        return Number(Xd(a.g).width || a.g.width)
    }

    function zq(a) {
        var b = a.j.document;
        const c = b.createElementNS("http://www.w3.org/2000/svg", "svg");
        M(c, {
            position: "absolute",
            top: "0px",
            display: "block",
            width: "50px",
            height: "30px",
            "margin-top": "-5px",
            transform: "none",
            "pointer-events": "initial"
        });
        var d = b.createElementNS("http://www.w3.org/2000/svg", "defs"),
            e = b.createElementNS("http://www.w3.org/2000/svg", "filter");
        a = `${a.l}-side-rail-drop-shadow`;
        e.setAttribute("id", a);
        e.setAttribute("filterUnits", "userSpaceOnUse");
        e.setAttribute("color-interpolation-filters",
            "sRGB");
        var f = b.createElementNS("http://www.w3.org/2000/svg", "feComponentTransfer");
        f.setAttribute("in", "SourceAlpha");
        f.setAttribute("result", "TransferredAlpha");
        var g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncR");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg", "feFuncG");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        g = b.createElementNS("http://www.w3.org/2000/svg",
            "feFuncB");
        g.setAttribute("type", "discrete");
        g.setAttribute("tableValues", "0.5");
        f.appendChild(g);
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        f.setAttribute("in", "TransferredAlpha");
        f.setAttribute("stdDeviation", "2");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feOffset");
        f.setAttribute("dx", "0");
        f.setAttribute("dy", "0");
        f.setAttribute("result", "offsetblur");
        e.appendChild(f);
        f = b.createElementNS("http://www.w3.org/2000/svg", "feMerge");
        f.appendChild(b.createElementNS("http://www.w3.org/2000/svg",
            "feMergeNode"));
        g = b.createElementNS("http://www.w3.org/2000/svg", "feMergeNode");
        g.setAttribute("in", "SourceGraphic");
        f.appendChild(g);
        e.appendChild(f);
        d.appendChild(e);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "path");
        d.setAttribute("d", "M5,5 L5,17 A8,8 0 0,0 13,25 L37,25 A8,8 0 0,0 45,17 L45,5 Z");
        d.setAttribute("stroke", "#FAFAFA");
        d.setAttribute("stroke-width", "1");
        d.setAttribute("fill", "#FAFAFA");
        d.style.setProperty("filter", `url(#${a})`);
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg",
            "rect");
        d.setAttribute("x", "0");
        d.setAttribute("y", "0");
        d.setAttribute("width", "50");
        d.setAttribute("height", "5");
        d.style.setProperty("fill", "#FAFAFA");
        c.appendChild(d);
        d = b.createElementNS("http://www.w3.org/2000/svg", "g");
        d.setAttribute("stroke", "#616161");
        d.setAttribute("stroke-width", "2px");
        d.setAttribute("stroke-linecap", "square");
        e = b.createElementNS("http://www.w3.org/2000/svg", "line");
        e.setAttribute("x1", "18");
        e.setAttribute("y1", "18");
        e.setAttribute("x2", "25");
        e.setAttribute("y2", "12");
        d.appendChild(e);
        b = b.createElementNS("http://www.w3.org/2000/svg", "line");
        b.setAttribute("x1", "25");
        b.setAttribute("y1", "12");
        b.setAttribute("x2", "32");
        b.setAttribute("y2", "18");
        d.appendChild(b);
        c.appendChild(d);
        return c
    }
    var Aq = class extends Ne {
        constructor(a, b, c, d, e) {
            super();
            this.g = a;
            this.j = b;
            this.m = c;
            this.l = d;
            this.B = e;
            a = this.j.document.createElement("span");
            a.className = `${this.l}-side-rail-edge`;
            M(a, {
                background: "#FAFAFA",
                position: "absolute",
                left: "0px",
                top: yq(this) + "px",
                width: xq(this) + "px",
                height: "5px",
                "box-shadow": "rgba(0, 0, 0, 0.5) 0px 1px 5px -1px, rgba(0, 0, 0, 0.1) 0px -1px 2px -1px"
            });
            this.v = a;
            this.A = wq(this);
            this.m.appendChild(this.v);
            this.m.appendChild(this.A)
        }
    };

    function Hp(a, b) {
        "dismissed" !== a.m && (a.m = b, a.j.setAttribute("data-side-rail-status", a.m))
    }

    function Bq(a, b) {
        if ("dismissed" === a.m) var c = !1;
        else {
            c = a.j;
            var d = a.g;
            var e = a.position;
            var f = a.g.innerWidth,
                g = a.g.innerHeight,
                h = new Set([c]),
                k = a.A.width + 15,
                l = a.A.height + 35;
            if (1200 > f || 650 > g) e = null;
            else {
                var m = Km(d).sideRailAvailableSpace,
                    n = {
                        N: d,
                        L: f,
                        O: g,
                        xb: h
                    },
                    q = `f-${yn(n.L)}x${yn(n.O)}`;
                if (!m.has(q)) {
                    m.set(q, 0);
                    Km(n.N).sideRailProcessedFixedElements.clear();
                    q = new Set([...Array.from(n.N.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...n.xb]);
                    for (var r of xn(n.N)) vn(r, q) || Cn(r,
                        m, n)
                }
                n = [];
                q = .9 * g;
                var u = U(d),
                    v = r = (g - q) / 2,
                    E = q / 7;
                for (let ia = 0; 8 > ia; ia++) {
                    var J = n,
                        K = J.push;
                    c: {
                        var w = v;
                        var z = e,
                            F = {
                                N: d,
                                L: f,
                                O: g,
                                xb: h
                            };
                        const ha = An({
                                position: z,
                                Ra: w,
                                L: F.L,
                                O: F.O
                            }),
                            ba = zn({
                                position: z,
                                Ra: w,
                                scrollY: u,
                                L: F.L,
                                O: F.O
                            });
                        if (m.has(ba)) {
                            w = Bn(m.get(ha), m.get(ba));
                            break c
                        }
                        const db = "left" === z ? 20 : F.L - 20;
                        let Ra = db;z = .3 * F.L / 5 * ("left" === z ? 1 : -1);
                        for (let Tb = 0; 6 > Tb; Tb++) {
                            const bd = Vm(F.N.document, {
                                x: Math.round(Ra),
                                y: Math.round(w)
                            });
                            var X = vn(bd, F.xb);
                            const fj = wn(bd, F.N);
                            if (!X && null !== fj) {
                                Cn(fj, m, F);
                                m.delete(ba);
                                break
                            }
                            X ||
                                (X = bd.offsetHeight >= .25 * F.O, X = bd.offsetWidth >= .9 * F.L && X);
                            if (X) m.set(ba, Math.round(Math.abs(Ra - db) + 20));
                            else if (Ra !== db) Ra -= z, z /= 2;
                            else {
                                m.set(ba, 0);
                                break
                            }
                            Ra += z
                        }
                        w = Bn(m.get(ha), m.get(ba))
                    }
                    K.call(J, w);
                    v += E
                }
                d = Math.round(q / 8);
                f = Math.round(r);
                m = [];
                g = Array(n.length).fill(0);
                for (h = 0; h < n.length; h++) {
                    for (; 0 !== m.length && n[m[m.length - 1]] >= n[h];) m.pop();
                    g[h] = 0 === m.length ? 0 : m[m.length - 1] + 1;
                    m.push(h)
                }
                m = [];
                r = n.length - 1;
                h = Array(n.length).fill(0);
                for (q = r; 0 <= q; q--) {
                    for (; 0 !== m.length && n[m[m.length - 1]] >= n[q];) m.pop();
                    h[q] = 0 === m.length ? r : m[m.length - 1] - 1;
                    m.push(q)
                }
                m = null;
                for (r = 0; r < n.length; r++)
                    if (q = {
                            position: e,
                            width: Math.round(n[r]),
                            height: Math.round((h[r] - g[r] + 1) * d),
                            offsetY: f + g[r] * d
                        }, q.width >= k && q.height >= l) {
                        m = q;
                        break
                    }
                e = m
            }
            e ? (k = Math.round(e.width - a.A.width - 15), a.v = Math.min(a.v ? ? k, k), a.offsetY = Math.round(e.offsetY), M(c, {
                margin: "0px",
                padding: "0px",
                position: "fixed",
                [a.position]: a.v + "px",
                top: a.offsetY + "px",
                transition: "all 500ms ease-in",
                overflow: "visible"
            }), a.D || M(c, {
                "z-index": "2147483647"
            }), c = !0) : c = !1
        }
        c ? Cq(a, b) : Gp(a,
            b)
    }

    function Gp(a, b = 0) {
        "displayed" === a.m && (M(a.j, {
            transition: "all 500ms ease-in",
            opacity: "0",
            top: a.offsetY + b + "px"
        }), clearTimeout(a.B), a.B = setTimeout(() => {
            Hp(a, "idle");
            M(a.j, {
                display: "none"
            })
        }, 500))
    }

    function Cq(a, b = 0) {
        "idle" === a.m && (M(a.j, {
            transition: "",
            display: "block",
            opacity: "0",
            top: a.offsetY - b + "px"
        }), clearTimeout(a.B), a.B = setTimeout(() => {
            Hp(a, "displayed");
            M(a.j, {
                transition: "all 500ms ease-in",
                opacity: "1",
                top: a.offsetY + "px"
            })
        }, 10))
    }
    var Dq = class extends so {
        constructor(a, b, c, d, e, f, g) {
            super(a, b, c);
            this.A = e;
            this.D = g;
            this.m = "idle";
            this.offsetY = this.B = 0;
            this.v = null;
            this.F = 0;
            this.position = 3 === d ? "left" : "right";
            new Aq(a, b, c, this.position, () => {
                Gp(this, -30);
                Hp(this, "dismissed")
            });
            Hp(this, "idle");
            M(c, {
                display: "none"
            });
            const h = f.K(273, () => {
                Bq(this)
            });
            G(a, "load", h);
            P(this, () => H(a, "load", h));
            const k = f.K(267, () => {
                this.v = null;
                Bq(this)
            });
            G(b, "resize", k);
            P(this, () => H(b, "resize", k));
            const l = f.K(268, qc(() => {
                const m = U(this.g);
                Bq(this, this.A.height /
                    3 * Math.sign(this.F - m));
                this.F = m
            }));
            G(b, "scroll", l, sc);
            P(this, () => H(b, "scroll", l));
            this.D && Xn(this.D, m => {
                M(c, {
                    "z-index": String(m || 2147483647)
                })
            })
        }
    };
    var Eq = class {
        constructor(a) {
            this.g = a
        }
        verifyAndProcessConfig(a, b) {
            if (3 !== this.g && 4 !== this.g) return !1;
            const c = new Sm;
            if (!Rm(c, b)) return !1;
            b = a.document.createElement("ins");
            b.className = "adsbygoogle";
            a.document.body.appendChild(b);
            const d = c.A || {};
            d.google_ad_client = c.j;
            d.google_ad_width = c.v;
            d.google_ad_height = c.l;
            d.google_reactive_ad_format = this.g;
            Dn(b, d, a);
            return !0
        }
    };
    var Fq = class extends Sm {
        constructor() {
            super(...arguments);
            this.B = 86400
        }
        G(a) {
            a.capIntervalMinutes && (this.B = 60 * a.capIntervalMinutes);
            return !0
        }
    };
    class Gq {
        verifyAndProcessConfig(a, b) {
            var c = Km(a);
            if (c.wasReactiveAdConfigReceived[8]) return !1;
            const d = new Fq;
            if (!Rm(d, b)) return !1;
            c.wasReactiveAdConfigReceived[8] = !0;
            b = rd("INS");
            b.className = "adsbygoogle";
            M(b, {
                display: "none"
            });
            a.document.documentElement.appendChild(b);
            c = d.A || {};
            c.google_ad_client = d.j;
            c.google_ad_width = d.v;
            c.google_ad_height = d.l;
            c.google_reactive_ad_format = 8;
            gi($h) && (c.vfcs = d.B);
            d.g && (c.google_reactive_fill_message = d.g);
            d.m && (c.google_adtest = "on");
            Dn(b, c, a);
            return !0
        }
    };
    class bn {
        configProcessorForAdFormat(a) {
            switch (a) {
                case 1:
                case 2:
                    return new Gn(a);
                case 3:
                case 4:
                    return new Eq(a);
                case 8:
                    return Q(Gq);
                case 9:
                    return Q(Fp);
                default:
                    return null
            }
        }
        createAdSlot(a, b, c, d, e) {
            a: {
                var f = b.google_reactive_ad_format;
                switch (f) {
                    case 1:
                    case 2:
                        e = a && ij(a.location, "google_anchor_debug");
                        if (2 === f || e) e = Um({
                            kc: 0,
                            Lb: a.innerWidth,
                            ac: 3,
                            lc: 0,
                            Mb: Math.min(Math.round(a.innerWidth / 320 * 50), $m) + 15,
                            bc: 3
                        }), e = null != Wm(new Ym(a), e) ? "bottom" : "top";
                        else {
                            e = a.innerWidth;
                            var g = a.innerHeight;
                            f = Math.min(Math.round(a.innerWidth /
                                320 * 50), $m) + 15;
                            const h = Um({
                                kc: 0,
                                Lb: e,
                                ac: 3,
                                lc: g - f,
                                Mb: g,
                                bc: 3
                            });
                            25 < f && h.push({
                                x: e - 25,
                                y: g - 25
                            });
                            e = null != Wm(new Ym(a), h) ? "top" : "bottom"
                        }
                        c = new Po(c, a, e, d);
                        new Uo(a, c, b.google_reactive_fill_message, b.gdvucrm);
                        break a;
                    case 3:
                    case 4:
                        new Ip(a, new Dq(c, a, d, f, new Qc(b.google_ad_width, b.google_ad_height), Aj, new Yn(a)));
                        break a;
                    case 8:
                        new vq(a, c, "on" == b.google_adtest, new Qc(b.google_ad_width, b.google_ad_height), d, e, b.vfcs, b.google_reactive_fill_message);
                        break a;
                    case 9:
                        f = b.google_rasc;
                        if (void 0 === f || null === f) g = null;
                        else try {
                            g = Wo(f)
                        } catch (h) {
                            Ej("rasf_fsi_ama", {}, .1), g = null
                        }
                        g = g || new Vo;
                        new Dp(a, c, g, "on" == b.google_adtest, d, e)
                }
            }
        }
    };

    function Hq() {
        var a = window;
        return "on" === t.google_adtest || "on" === t.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && 0 < b) || [] : []
    };
    class Iq {};

    function Jq() {
        var a = t.ggeac || (t.ggeac = {});
        Se(Q(Te), a);
        Kq(a);
        Q(Iq);
        Q(fi).j()
    }

    function Kq(a) {
        const b = Q(fi);
        b.l = (c, d) => Re(5, a, () => !1)(c, d, 1);
        b.g = (c, d) => Re(6, a, () => 0)(c, d, 1);
        b.m = (c, d) => Re(7, a, () => "")(c, d, 1);
        b.v = (c, d) => Re(8, a, () => [])(c, d, 1);
        b.j = () => {
            Re(15, a, () => {})(1)
        }
    };

    function Lq({
        zc: a,
        Wc: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function Mq(a) {
        Aj.Gb(b => {
            b.shv = String(a);
            b.mjsv = Lq({
                zc: "m202310100101",
                Wc: a
            });
            const c = Q(Te).g(),
                d = Hq();
            b.eid = c.concat(d).join(",")
        })
    };
    var Nq = "undefined" === typeof sttc ? void 0 : sttc;

    function Oq() {
        var a = Aj;
        try {
            return ic(Nq, Ae), new Jm(JSON.parse(Nq))
        } catch (b) {
            a.Qa(838, b instanceof Error ? b : Error(String(b)), void 0, c => {
                c.jspb = String(Nq)
            })
        }
        return new Jm
    };
    Cj(210, () => {
        const a = new Qe;
        try {
            rb(c => {
                var d = new Fe;
                var e = new Ee;
                try {
                    var f = window;
                    if ("number" !== typeof f.goog_pvsid) try {
                        var g = Object,
                            h = g.defineProperty,
                            k = Math.random;
                        var l = Math.floor(k() * 2 ** 52);
                        h.call(g, f, "goog_pvsid", {
                            value: l,
                            configurable: !1
                        })
                    } catch (E) {}
                    var m = Number(f.goog_pvsid) || -1;
                    var n = null == m ? m : Cb(m);
                    $b(e, 1, n, "0")
                } catch (E) {}
                try {
                    var q = Q(Te).g();
                    Zb(e, 2, q, Ab)
                } catch (E) {}
                try {
                    $b(e, 3, Eb(window.document.URL), "")
                } catch (E) {}
                d = dc(d, 2, e);
                e = new De;
                e = $b(e, 1, yb(1195), 0);
                try {
                    var r = Ae(c ? .name) ? c.name : "Unknown error";
                    $b(e, 2, Eb(r), "")
                } catch (E) {}
                try {
                    var u = Ae(c ? .message) ? c.message : `Caught ${c}`;
                    $b(e, 3, Eb(u), "")
                } catch (E) {}
                try {
                    var v = Ae(c ? .stack) ? c.stack : Error().stack;
                    v && Zb(e, 4, v.split(/\n\s*/), Db)
                } catch (E) {}
                c = dc(d, 1, e);
                r = new Ce;
                try {
                    $b(r, 1, Eb("m202310100101"), "")
                } catch {}
                null == r && (r = void 0);
                u = c.X;
                v = u[B];
                ob(v);
                d = 0;
                for (e = 0; e < Ge.length; e++) f = Ge[e], null != Ub(u, v, f) && (0 !== d && C(u, v, d), d = f);
                d && 6 !== d && null != r && C(u, v, d);
                C(u, v, 6, r);
                $b(c, 5, Cb(1), "0");
                He(a, c)
            })
        } catch (c) {}
        const b = Oq();
        Mq(fc(b, 2) ? ? "");
        Qm(gc(b, 6));
        Jq();
        an()
    });
}).call(this, "[2021,\"r20231011\",\"r20110914\",1,null,1,null,\".google.lt\",null,null,null,null,null,null,null,null,null,-1,[44759926,44759875]]");