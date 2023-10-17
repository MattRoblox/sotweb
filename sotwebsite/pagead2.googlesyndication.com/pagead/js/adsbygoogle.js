(function(sttc) {
    'use strict';
    var aa = {};
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n = this || self;

    function ba(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

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

    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ia = 0;

    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ka(a, b, c) {
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

    function la(a, b, c) {
        la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return la.apply(null, arguments)
    }

    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function na(a, b, c) {
        a = a.split(".");
        c = c || n;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function oa(a) {
        return a
    };
    let pa = (new Date).getTime();

    function qa(a) {
        n.setTimeout(() => {
            throw a;
        }, 0)
    };

    function ra(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function sa(a, b) {
        let c = 0;
        a = ra(String(a)).split(".");
        b = ra(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = ta(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || ta(0 == e[2].length, 0 == f[2].length) || ta(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function ta(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var ua, va = ba("CLOSURE_FLAGS"),
        wa = va && va[610401301];
    ua = null != wa ? wa : !1;

    function xa() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var ya;
    const za = n.navigator;
    ya = za ? za.userAgentData || null : null;

    function Aa(a) {
        return ua ? ya ? ya.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function p(a) {
        return -1 != xa().indexOf(a)
    };

    function Ba() {
        return ua ? !!ya && 0 < ya.brands.length : !1
    }

    function Ca() {
        return Ba() ? !1 : p("Trident") || p("MSIE")
    }

    function Da() {
        return Ba() ? Aa("Microsoft Edge") : p("Edg/")
    }

    function Ea() {
        !p("Safari") || Fa() || (Ba() ? 0 : p("Coast")) || (Ba() ? 0 : p("Opera")) || (Ba() ? 0 : p("Edge")) || Da() || Ba() && Aa("Opera")
    }

    function Fa() {
        return Ba() ? Aa("Chromium") : (p("Chrome") || p("CriOS")) && !(Ba() ? 0 : p("Edge")) || p("Silk")
    }

    function Ga(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Ha() {
        var a = xa();
        if (Ca()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ga(b);
        return (Ba() ? 0 : p("Opera")) ? a(["Version",
            "Opera"
        ]) : (Ba() ? 0 : p("Edge")) ? a(["Edge"]) : Da() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Fa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ia(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ka(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ma(a, b) {
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

    function Na(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Oa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Pa(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Qa(a, b) {
        return 0 <= Ia(a, b)
    }

    function Ra(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Sa(a) {
        Sa[" "](a);
        return a
    }
    Sa[" "] = function() {};
    var Ta = Ca();
    !p("Android") || Fa();
    Fa();
    Ea();
    var Ua = null;

    function Va(a) {
        var b = [];
        Wa(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Wa(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var m = a.charAt(d++),
                    l = Ua[m];
                if (null != l) return l;
                if (!/^[\s\xa0]*$/.test(m)) throw Error("Unknown base64 encoding at char: " + m);
            }
            return k
        }
        Xa();
        for (var d = 0;;) {
            var e = c(-1),
                f = c(0),
                g = c(64),
                h = c(64);
            if (64 === h && -1 === e) break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
        }
    }

    function Xa() {
        if (!Ua) {
            Ua = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Ua[f] && (Ua[f] = e)
                }
        }
    };

    function Za(a) {
        return Array.prototype.slice.call(a)
    };
    const r = Symbol();

    function $a(a) {
        const b = a[r] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Za(a)), a[r] = b | 1)
    }

    function ab() {
        var a = [];
        a[r] |= 1;
        return a
    }

    function bb(a) {
        a[r] |= 32;
        return a
    }

    function cb(a, b) {
        b[r] = (a | 0) & -255
    }

    function db(a, b) {
        b[r] = (a | 34) & -221
    }

    function eb(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var gb = {};

    function hb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let ib;
    var jb;
    const kb = [];
    kb[r] = 55;
    jb = Object.freeze(kb);

    function lb(a) {
        if (a & 2) throw Error();
    };

    function mb(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    let nb;

    function ob(a) {
        if (nb) throw Error("");
        nb = a
    }

    function pb(a) {
        if (nb) try {
            nb(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function qb() {
        const a = rb();
        nb ? n.setTimeout(() => {
            pb(a)
        }, 0) : qa(a)
    }

    function sb() {
        const a = Error();
        mb(a, "warning");
        pb(a);
        return a
    }

    function rb() {
        const a = Error();
        mb(a, "incident");
        return a
    };

    function ub(a) {
        if (null != a) {
            if ("boolean" !== typeof a) throw Error(`Expected boolean but got ${ca(a)}: ${a}`);
            a = !!a
        }
        return a
    }
    const vb = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function wb(a) {
        return "number" === typeof a && Number.isFinite(a) || !!a && "string" === typeof a && isFinite(a)
    }

    function xb(a) {
        null != a && (Number.isFinite(a) || qb());
        return a
    }

    function yb(a) {
        return a
    }

    function zb(a) {
        if ("number" !== typeof a) throw sb();
        Number.isFinite(a) || qb();
        return a
    }

    function Ab(a) {
        return null == a ? a : zb(a)
    }

    function Bb(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function Db(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function Eb(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function Fb(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function Gb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function Hb(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.ma === gb) return a;
        if (!e) return c ? d & 2 ? (a = b[Ib]) ? b = a : (a = new b, d = a.u, d[r] |= 34, b = b[Ib] = a) : b = new b : b = void 0, b;
        e = c = a[r] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[r] = e);
        return new b(a)
    }
    const Ib = Symbol();
    let Jb;

    function Kb(a, b) {
        Jb = b;
        a = new a(b);
        Jb = void 0;
        return a
    };

    function Lb(a, b) {
        return Mb(b)
    }

    function Mb(a) {
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

    function Nb(a, b, c) {
        a = Za(a);
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

    function Ob(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[r] | 0) & 1 ? void 0 : f && (a[r] | 0) & 2 ? a : Pb(a, b, c, void 0 !== d, e, f);
            else if (hb(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Ob(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Pb(a, b, c, d, e, f) {
        const g = d || c ? a[r] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Za(a);
        for (let h = 0; h < a.length; h++) a[h] = Ob(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function Qb(a) {
        return a.ma === gb ? Rb(a, Pb(a.u, Qb, void 0, void 0, !1, !1), !0) : null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    }

    function Sb(a) {
        return a.ma === gb ? a.toJSON() : Mb(a)
    }
    var Tb = "undefined" != typeof structuredClone ? structuredClone : a => Pb(a, Qb, void 0, void 0, !1, !1);

    function Ub(a, b, c = db) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[r] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[r] = d | 34, d & 4 && Object.freeze(a), a) : Pb(a, Ub, d & 4 ? db : c, !0, !1, !0)
            }
            a.ma === gb && (c = a.u, d = c[r], a = d & 2 ? a : Kb(a.constructor, Vb(c, d, !0)));
            return a
        }
    }

    function Vb(a, b, c) {
        const d = c || b & 2 ? db : cb,
            e = !!(b & 32);
        a = Nb(a, b, f => Ub(f, e, d));
        a[r] = a[r] | 32 | (c ? 2 : 0);
        return a
    }

    function Wb(a) {
        const b = a.u,
            c = b[r];
        return c & 2 ? Kb(a.constructor, Vb(b, c, !1)) : a
    };

    function t(a, b) {
        a = a.u;
        return Zb(a, a[r], b)
    }

    function Zb(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= eb(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function u(a, b, c) {
        const d = a.u,
            e = d[r];
        lb(e);
        y(d, e, b, c);
        return a
    }

    function y(a, b, c, d, e) {
        var f = eb(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[r] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function $b(a, b, c) {
        return void 0 !== ac(a, b, c, !1)
    }

    function bc(a, b, c) {
        a = Zb(a, b, c);
        Array.isArray(a) || (a = jb);
        c = a[r] | 0;
        c & 1 || (c |= 1, a[r] = c);
        b & 2 ? c & 2 || (a[r] |= 34) : c & 32 && !(c & 2) && (b = a, b[r] &= -33);
        return a
    }

    function cc(a, b) {
        a = t(a, b);
        return null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0
    }

    function dc(a, b, c) {
        a = a.u;
        const d = a[r],
            e = d & 2;
        let f = bc(a, d, b),
            g = f[r] | 0;
        if (!(g & 4)) {
            if (Object.isFrozen(f)) {
                f = Za(f);
                var h = g = g & -3 | 32;
                f[r] = h;
                y(a, d, b, f)
            }
            let k = h = 0;
            for (; h < f.length; h++) {
                const m = c(f[h]);
                null != m && (f[k++] = m)
            }
            k < h && (f.length = k);
            g |= 21;
            e ? g |= 34 : g &= -33;
            f[r] = g;
            g & 2 && Object.freeze(f)
        }!e && (g & 2 || Object.isFrozen(f)) && (f = Za(f), f[r] = g & -35, y(a, d, b, f));
        return f
    }

    function ec(a, b, c, d) {
        const e = a.u,
            f = e[r];
        lb(f);
        if (null == c) return y(e, f, b), a;
        if (!((c[r] | 0) & 4)) {
            Object.isFrozen(c) && (c = Za(c));
            for (let g = 0; g < c.length; g++) c[g] = d(c[g]);
            c[r] = 5
        }
        y(e, f, b, c);
        return a
    }

    function A(a, b, c, d) {
        const e = a.u,
            f = e[r];
        lb(f);
        y(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }

    function fc(a, b, c, d) {
        const e = a.u,
            f = e[r];
        lb(f);
        (c = gc(e, f, c)) && c !== b && null != d && y(e, f, c);
        y(e, f, b, d);
        return a
    }

    function hc(a, b, c) {
        a = a.u;
        return gc(a, a[r], b) === c ? c : -1
    }

    function ic(a, b) {
        a = a.u;
        return gc(a, a[r], b)
    }

    function gc(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != Zb(a, b, f) && (0 !== d && y(a, b, d), d = f)
        }
        return d
    }

    function jc(a) {
        var b = kc;
        a = a.u;
        const c = a[r];
        lb(c);
        const d = Zb(a, c, 3);
        b = Wb(Hb(d, b, !0, c));
        d !== b && y(a, c, 3, b);
        return b
    }

    function ac(a, b, c, d) {
        a = a.u;
        const e = a[r],
            f = Zb(a, e, c, d);
        b = Hb(f, b, !1, e);
        b !== f && null != b && y(a, e, c, b, d);
        return b
    }

    function B(a, b, c) {
        b = ac(a, b, c, !1);
        if (null == b) return b;
        a = a.u;
        const d = a[r];
        if (!(d & 2)) {
            const e = Wb(b);
            e !== b && (b = e, y(a, d, c, b, !1))
        }
        return b
    }

    function lc(a, b, c, d = !1) {
        let e = a[r] | 0;
        var f = e | 5;
        b = b ? f | 8 : f & -9;
        b = c ? b | 16 : b & -17;
        e != b && (Object.isFrozen(a) && (a = Za(a)), a[r] = b, !d && b & 2 && Object.freeze(a));
        return a
    }

    function D(a, b, c) {
        var d = a.u,
            e = d[r];
        a = !!(e & 2);
        var f = a ? 1 : 2,
            g = !!(e & 2),
            h = bc(d, e, c),
            k = h === jb;
        if (k && 2 !== f) c = h;
        else if (!k && (h[r] | 0) & 4) 3 !== f && (g ? 2 === f && (b = h[r] | 0, h = Za(h), h[r] = b, y(d, e, c, h)) : (b = Object.isFrozen(h), 1 === f ? b || Object.freeze(h) : (f = h[r] | 0, g = f & -33, b || f & 2 ? (h = Za(h), h[r] = g & -3, y(d, e, c, h)) : f !== g && (h[r] = g)))), c = h;
        else {
            g = !!(e & 2);
            var m = !!((h[r] | 0) & 2);
            k = h;
            !g && m && (h = Za(h));
            var l = m || void 0;
            m = e | (l ? 2 : 0);
            let q = !1,
                x = 0,
                v = 0;
            for (; x < h.length; x++) {
                const w = Hb(h[x], b, !1, m);
                if (null == w) continue;
                const z = !!((w.u[r] | 0) & 2);
                l =
                    l || z;
                q = q || !z;
                h[v++] = w
            }
            v < x && (h.length = v);
            h = lc(h, !l, !q, !0);
            k !== h && y(d, e, c, h);
            (g && 2 !== f || 1 === f) && Object.freeze(h);
            c = h
        }
        if (!(a || (c[r] | 0) & 8)) {
            for (a = 0; a < c.length; a++) d = c[a], e = Wb(d), d !== e && (c[a] = e);
            c[r] |= 8
        }
        return c
    }

    function mc(a, b, c) {
        null == c && (c = void 0);
        return u(a, b, c)
    }

    function nc(a, b, c, d) {
        null == d && (d = void 0);
        return fc(a, b, c, d)
    }

    function oc(a, b, c) {
        const d = a.u,
            e = d[r];
        lb(e);
        if (null != c) {
            let f = !1,
                g = !0;
            if (!((c[r] | 0) & 2)) {
                f = !0;
                for (let h = 0; h < c.length; h++) {
                    const k = !!((c[h].u[r] | 0) & 2);
                    f = f && !k;
                    g = g && k
                }
            }
            c = lc(c, f, g)
        }
        null == c && (c = void 0);
        y(d, e, b, c);
        return a
    }

    function pc(a, b) {
        return Bb(t(a, b))
    }

    function qc(a, b) {
        a = t(a, b);
        a = null == a ? a : wb(a) ? "number" === typeof a ? a : a : void 0;
        return a
    }

    function E(a, b) {
        return Gb(t(a, b))
    }

    function rc(a, b) {
        return t(a, b)
    }

    function sc(a) {
        return a ? ? 0
    }

    function F(a, b, c = !1) {
        return cc(a, b) ? ? c
    }

    function tc(a, b) {
        return sc(pc(a, b))
    }

    function uc(a, b) {
        a = a.u;
        const c = a[r],
            d = Zb(a, c, b);
        var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && y(a, c, b, e);
        return e ? ? 0
    }

    function G(a, b) {
        return E(a, b) ? ? ""
    }

    function H(a, b) {
        return t(a, b) ? ? 0
    }

    function vc(a, b, c, d) {
        return B(a, b, hc(a, d, c))
    }

    function wc(a, b, c) {
        if (null != c) {
            if (!wb(c)) throw sb();
            const d = typeof c;
            ("number" === d ? Number.isFinite(c) : "string" !== d ? 0 : vb.test(c)) || qb();
            c = "string" === typeof c ? c : c
        }
        return A(a, b, c, "0")
    }

    function xc(a, b) {
        var c = performance.now();
        if (null != c && "number" !== typeof c) throw Error(`Value of float/double field must be a number, found ${typeof c}: ${c}`);
        A(a, b, c, 0)
    }

    function yc(a, b, c) {
        return A(a, b, Fb(c), "")
    }

    function I(a, b, c) {
        return A(a, b, xb(c), 0)
    };
    var J = class {
        constructor(a) {
            a: {
                null == a && (a = Jb);Jb = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[r] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (hb(d)) {
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
                a[r] = b
            }
            this.u = a
        }
        toJSON() {
            if (ib) var a = Rb(this, this.u, !1);
            else a = Pb(this.u, Sb, void 0, void 0, !1, !1), a = Rb(this,
                a, !0);
            return a
        }
    };
    J.prototype.ma = gb;

    function Rb(a, b, c) {
        var d = a.constructor.s,
            e = eb((c ? a.u : b)[r]),
            f = !1;
        if (d) {
            if (!c) {
                b = Za(b);
                var g;
                if (b.length && hb(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = a.u[r];
            a = eb(g);
            g = +!!(g & 512) - 1;
            var h;
            for (let z = 0; z < d.length; z++) {
                var k = d[z];
                if (k < a) {
                    k += g;
                    var m = e[k];
                    null == m ? e[k] = c ? jb : ab() : c && m !== jb && $a(m)
                } else {
                    if (!h) {
                        var l = void 0;
                        e.length && hb(l = e[e.length - 1]) ? h = l : e.push(h = {})
                    }
                    m = h[k];
                    null == h[k] ? h[k] = c ? jb : ab() : c && m !== jb && $a(m)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let q, x;
        if (hb(h = b[d - 1])) {
            a: {
                var v = h;l = {};e = !1;
                for (let z in v) Object.prototype.hasOwnProperty.call(v, z) && (c = v[z], Array.isArray(c) && c != c && (e = !0), null != c ? l[z] = c : e = !0);
                if (e) {
                    for (let z in l) {
                        v = l;
                        break a
                    }
                    v = null
                }
            }
            v != h && (q = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            x = !0
        }
        if (!q && !x) return b;
        var w;
        f ? w = b : w = Array.prototype.slice.call(b, 0, d);
        b = w;
        f && (b.length = d);
        v && b.push(v);
        return b
    }

    function zc(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[r] |= 128;
        return Kb(a, bb(b))
    };

    function Ac(a, b) {
        const c = Bc;
        Bc = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    const Cc = a => null !== a && void 0 !== a;
    let Bc = void 0;

    function Dc(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Kb(a, bb(b))
            }
            return b
        }
    };
    var Ec = class extends J {};
    var Fc = class extends J {};
    Fc.s = [2, 3, 4];

    function Gc(a, b) {
        this.h = a === Hc && b || "";
        this.g = Jc
    }
    var Jc = {},
        Hc = {};

    function Kc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function Lc(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function Mc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    };

    function Nc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function Oc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1), !0) : !1
    };

    function Pc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Qc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Rc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function Sc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    };
    var Tc;
    var Uc = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    };

    function Vc(a, b) {
        a = Wc.exec(Xc(a).toString());
        var c = a[3] || "";
        return Yc(a[1] + Zc("?", a[2] || "", b) + Zc("#", c))
    }

    function Xc(a) {
        return a instanceof Uc && a.constructor === Uc ? a.h : "type_error:TrustedResourceUrl"
    }
    var Wc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        $c = {};

    function Yc(a) {
        if (void 0 === Tc) {
            var b = null;
            var c = n.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (d) {
                    n.console && n.console.error(d.message)
                }
                Tc = b
            } else Tc = b
        }
        a = (b = Tc) ? b.createScriptURL(a) : a;
        return new Uc(a, $c)
    }

    function Zc(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var ad = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    };

    function bd(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function cd(a, b, c) {
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
                Ka(g ? Ra(f) : f, d)
            }
        }
    }

    function dd(a) {
        this.g = a || n.document || document
    }
    dd.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    dd.prototype.createElement = function(a) {
        var b = this.g;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    dd.prototype.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    };
    dd.prototype.append = function(a, b) {
        cd(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    dd.prototype.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function ed() {
        return ua && ya ? ya.mobile : !fd() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }

    function fd() {
        return ua && ya ? !ya.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    };
    var gd = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        hd = /#|$/;

    function id(a, b) {
        var c = a.search(hd);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    };

    function jd(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    const kd = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function ld(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Sa(a.foo);
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

    function md(a) {
        return ld(a.top) ? a.top : null
    }

    function nd(a, b) {
        const c = od("SCRIPT", a);
        c.src = Xc(b);
        (void 0) ? .lc || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function pd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function qd() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function rd(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function sd(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var td = /^([0-9.]+)px$/,
        ud = /^(-?[0-9.]{1,30})$/;

    function vd(a) {
        if (!ud.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function N(a) {
        return (a = td.exec(a)) ? +a[1] : null
    }
    var wd = (a, b) => {
            for (let e = 0; 50 > e; ++e) {
                try {
                    var c = !(!a.frames || !a.frames[b])
                } catch {
                    c = !1
                }
                if (c) return a;
                a: {
                    try {
                        const f = a.parent;
                        if (f && f != a) {
                            var d = f;
                            break a
                        }
                    } catch {}
                    d = null
                }
                if (!(a = d)) break
            }
            return null
        },
        xd = Lc(() => ed() ? 2 : fd() ? 1 : 0),
        yd = a => {
            rd({
                display: "none"
            }, (b, c) => {
                a.style.setProperty(c, b, "important")
            })
        };
    let zd = [];
    const Ad = () => {
        const a = zd;
        zd = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var Bd = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        Cd = a => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: Bd(),
                    configurable: !1
                })
            } catch (b) {}
            return Number(a.goog_pvsid) || -1
        },
        Ed = a => {
            var b = Dd;
            "complete" === b.readyState || "interactive" === b.readyState ? (zd.push(a), 1 == zd.length && (window.Promise ? Promise.resolve().then(Ad) : window.setImmediate ? setImmediate(Ad) : setTimeout(Ad, 0))) : b.addEventListener("DOMContentLoaded", a)
        };

    function od(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function Fd(a, b, c = null, d = !1, e = !1) {
        Gd(a, b, c, d, e)
    }

    function Gd(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = od("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = Ia(h, f);
                    0 <= k && Array.prototype.splice.call(h, k, 1)
                }
                Oc(f, "load", g);
                Oc(f, "error", g)
            };
            Nc(f, "load", g);
            Nc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Id = a => {
            let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
            rd(a, (c, d) => {
                if (c || 0 === c) b += `&${d}=${encodeURIComponent(""+c)}`
            });
            Hd(b)
        },
        Hd = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Fd(b, a, void 0, !1, !1)
        };
    let Jd = null;
    var Dd = document,
        P = window;
    let Kd = null;
    var Ld = (a, b = []) => {
        let c = !1;
        n.google_logging_queue || (c = !0, n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Kd) {
                Kd = !1;
                try {
                    var d = md(n);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Kd = !0);
                    n.localStorage.getItem("google_logging") && (Kd = !0)
                } catch (e) {}
            }
            a = Kd
        }
        a && (d = n.document, a = new Gc(Hc, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Yc(a instanceof Gc && a.constructor === Gc && a.g === Jc ? a.h : "type_error:Const"), nd(d, a))
    };

    function Md(a = n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function Nd(a = Md()) {
        return a ? ld(a.master) ? a.master : null : null
    };

    function Od(a, ...b) {
        if (0 === b.length) return Yc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Yc(c)
    };
    var Pd = a => {
            a = Nd(Md(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1;
            return a.google_unique_id
        },
        Qd = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a : 0
        },
        Sd = () => {
            if (!P) return !1;
            try {
                return !(!P.navigator.standalone && !P.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        Td = a => {
            if (!a) return "";
            a = a.toLowerCase();
            "ca-" != a.substring(0, 3) && (a = "ca-" + a);
            return a
        };
    class Ud {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var Vd = a => !!(a.error && a.meta && a.id);
    const Wd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Xd = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        Yd = class {
            constructor(a, b, c) {
                this.url = a;
                this.l = b;
                this.Ya = !!c;
                this.depth = null
            }
        };
    let Zd = null;

    function $d() {
        if (null === Zd) {
            Zd = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Zd = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Zd
    };

    function ae() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function be() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    };
    var ce = class {
        constructor(a, b) {
            var c = be() || ae();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const de = n.performance,
        ee = !!(de && de.mark && de.measure && de.clearMarks),
        fe = Lc(() => {
            var a;
            if (a = ee) a = $d(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function ge(a) {
        a && de && fe() && (de.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), de.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function he(a) {
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (fe() && Ka(a.h, ge), a.h.length = 0)
    }
    class ie {
        constructor(a) {
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = fe() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new ce(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            de && fe() && de.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (be() || ae()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                de && fe() && de.mark(b);
                !this.g || 2048 < this.h.length ||
                    this.h.push(a)
            }
        }
    };

    function je(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function ke(a, b, c, d, e) {
        const f = [];
        rd(a, function(g, h) {
            (g = le(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function le(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(le(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(ke(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function me(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function ne(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = me(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f],
                h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let m = ke(h[k], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.i;
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
    class oe {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function pe(a) {
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
    var re = class {
        constructor(a, b, c = null) {
            this.v = a;
            this.A = b;
            this.h = c;
            this.g = null;
            this.i = !1;
            this.m = this.I
        }
        gb(a) {
            this.m = a
        }
        Ba(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        ea(a, b, c) {
            let d, e;
            try {
                this.h && this.h.g ? (e = this.h.start(a.toString(), 3), d = b(), this.h.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    ge(e), b = this.m(a, new Ud(f, {
                        message: pe(f)
                    }), void 0, c)
                } catch (g) {
                    this.I(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        oa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        I(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const K = new oe;
                K.g.push(1);
                K.h[1] = je("context", a);
                Vd(b) || (b = new Ud(b, {
                    message: pe(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    K.g.push(2);
                    K.h[2] = je("msg", g)
                }
                const tb = b.meta || {};
                if (this.g) try {
                    this.g(tb)
                } catch (Ja) {}
                if (d) try {
                    d(tb)
                } catch (Ja) {}
                b = [tb];
                K.g.push(3);
                K.h[3] = b;
                d = n;
                b = [];
                g = null;
                do {
                    var h = d;
                    if (ld(h)) {
                        var k = h.location.href;
                        g = h.document && h.document.referrer || null
                    } else k = g, g = null;
                    b.push(new Yd(k || "", h));
                    try {
                        d = h.parent
                    } catch (Ja) {
                        d = null
                    }
                } while (d && h != d);
                for (let Ja = 0, Ic = b.length - 1; Ja <= Ic; ++Ja) b[Ja].depth = Ic - Ja;
                h = n;
                if (h.location &&
                    h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                    for (k = 1; k < b.length; ++k) {
                        var m = b[k];
                        m.url || (m.url = h.location.ancestorOrigins[k - 1] || "", m.Ya = !0)
                    }
                var l = b;
                let Xb = new Yd(n.location.href, n, !1);
                h = null;
                const Yb = l.length - 1;
                for (m = Yb; 0 <= m; --m) {
                    var q = l[m];
                    !h && Wd.test(q.url) && (h = q);
                    if (q.url && !q.Ya) {
                        Xb = q;
                        break
                    }
                }
                q = null;
                const Rd = l.length && l[Yb].url;
                0 != Xb.depth && Rd && (q = l[Yb]);
                f = new Xd(Xb, q);
                if (f.h) {
                    var x = f.h.url || "";
                    K.g.push(4);
                    K.h[4] = je("top", x)
                }
                var v = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var w =
                        f.g.url.match(gd),
                        z = w[1],
                        C = w[3],
                        L = w[4];
                    l = "";
                    z && (l += z + ":");
                    C && (l += "//", l += C, L && (l += ":" + L));
                    var M = l
                } else M = "";
                v = [v, {
                    url: M
                }];
                K.g.push(5);
                K.h[5] = v;
                qe(this.v, e, K, this.i, c)
            } catch (K) {
                try {
                    qe(this.v, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: pe(K),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (tb) {}
            }
            return this.A
        }
        aa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.I(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    var se = a => "string" === typeof a,
        te = a => void 0 === a;
    var ue = class extends J {};
    ue.s = [2, 8];
    var ve = [3, 4, 5],
        we = [6, 7];

    function xe(a) {
        return null != a ? !a : a
    }

    function ye(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function ze(a, b) {
        var c = D(a, ue, 2);
        if (!c.length) return Ae(a, b);
        a = H(a, 1);
        if (1 === a) return xe(ze(c[0], b));
        c = Na(c, d => () => ze(d, b));
        switch (a) {
            case 2:
                return ye(c, !1);
            case 3:
                return ye(c, !0)
        }
    }

    function Ae(a, b) {
        const c = ic(a, ve);
        a: {
            switch (c) {
                case 3:
                    var d = H(a, hc(a, ve, 3));
                    break a;
                case 4:
                    d = H(a, hc(a, ve, 4));
                    break a;
                case 5:
                    d = H(a, hc(a, ve, 5));
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b(...dc(a, 8, Gb))
            } catch (f) {
                return
            }
            b = H(a, 1);
            if (4 === b) return !!e;
            if (5 === b) return null != e;
            if (12 === b) a = G(a, hc(a, we, 7));
            else a: {
                switch (c) {
                    case 4:
                        a = uc(a, hc(a, we, 6));
                        break a;
                    case 5:
                        a = G(a, hc(a, we, 7));
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === sa(String(e), a);
                if (null != e) switch (b) {
                    case 7:
                        return e <
                            a;
                    case 8:
                        return e > a;
                    case 12:
                        return se(a) && se(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === sa(String(e), a);
                    case 11:
                        return null != e && 1 === sa(String(e), a)
                }
            }
        }
    }

    function Be(a, b) {
        return !a || !(!b || !ze(a, b))
    };
    var Ce = class extends J {};
    Ce.s = [4];
    var De = class extends J {
        getValue() {
            return B(this, Ce, 2)
        }
    };
    var Ee = class extends J {},
        Fe = Dc(Ee);
    Ee.s = [5];
    var Ge = [1, 2, 3, 6, 7];
    var He = class extends J {
        constructor() {
            super()
        }
    };
    He.s = [2];

    function Ie(a) {
        var b = new Ke;
        return u(b, 1, xb(a))
    }
    var Ke = class extends J {
        constructor() {
            super()
        }
        getValue() {
            return H(this, 1)
        }
    };

    function Le(a, b) {
        return wc(a, 1, b)
    }

    function Me(a, b) {
        return wc(a, 2, b)
    }
    var Ne = class extends J {
        constructor() {
            super()
        }
        getWidth() {
            return sc(qc(this, 1))
        }
        getHeight() {
            return sc(qc(this, 2))
        }
    };

    function Oe(a, b) {
        return mc(a, 1, b)
    }

    function Pe(a, b) {
        return mc(a, 2, b)
    }

    function Qe(a, b) {
        mc(a, 3, b)
    }

    function Re(a, b) {
        return A(a, 5, ub(b), !1)
    }
    var Se = class extends J {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 4)
        }
    };
    var kc = class extends J {};
    var Te = class extends J {};
    var Ue = class extends J {
        constructor() {
            super()
        }
        getContentUrl() {
            return G(this, 1)
        }
    };

    function Ve(a) {
        var b = new We;
        return I(b, 1, a)
    }
    var We = class extends J {
        constructor() {
            super()
        }
    };

    function Xe(a, b) {
        return nc(a, 4, Ye, b)
    }
    var Ze = class extends J {
            constructor() {
                super()
            }
        },
        Ye = [4, 5, 6, 8, 9, 10, 11];
    var $e = class extends J {
        constructor() {
            super()
        }
    };

    function af(a, b) {
        return I(a, 1, b)
    }

    function bf(a, b) {
        return I(a, 2, b)
    }
    var cf = class extends J {
        constructor() {
            super()
        }
    };
    var df = class extends J {
            constructor() {
                super()
            }
        },
        ef = [1, 2];

    function ff(a, b) {
        return mc(a, 1, b)
    }

    function gf(a, b) {
        return oc(a, 2, b)
    }

    function hf(a, b) {
        return ec(a, 4, b, zb)
    }

    function jf(a, b) {
        return oc(a, 5, b)
    }

    function kf(a, b) {
        return I(a, 6, b)
    }
    var lf = class extends J {
        constructor() {
            super()
        }
    };
    lf.s = [2, 4, 5];
    var mf = class extends J {
        constructor() {
            super()
        }
    };
    mf.s = [5];
    var nf = [1, 2, 3, 4];
    var of = class extends J {
        constructor() {
            super()
        }
    }; of .s = [2, 3];

    function pf(a) {
        var b = new qf;
        return nc(b, 4, rf, a)
    }
    var qf = class extends J {
            constructor() {
                super()
            }
            getTagSessionCorrelator() {
                return sc(qc(this, 2))
            }
        },
        rf = [4, 5, 7, 8];
    var sf = class extends J {
        constructor() {
            super()
        }
    };
    var tf = class extends J {
        constructor() {
            super()
        }
    };
    tf.s = [4, 5];
    var uf = class extends J {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return sc(qc(this, 1))
        }
    };
    uf.s = [2];
    var vf = class extends J {
            constructor() {
                super()
            }
        },
        wf = [4, 6];

    function xf(a, ...b) {
        yf(a, ...b.map(c => ({
            la: !0,
            Ca: 3,
            za: c.toJSON()
        })))
    }

    function zf(a, ...b) {
        yf(a, ...b.map(c => ({
            la: !0,
            Ca: 4,
            za: c.toJSON()
        })))
    }

    function Af(a, ...b) {
        yf(a, ...b.map(c => ({
            la: !0,
            Ca: 7,
            za: c.toJSON()
        })))
    };
    var Bf = class extends J {
        constructor() {
            super()
        }
    };

    function Cf(a, b) {
        const c = d => [{
            [d.Ca]: d.za
        }];
        return JSON.stringify([a.filter(d => d.la).map(c), b.toJSON(), a.filter(d => !d.la).map(c)])
    };
    var Df = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function Ef() {
        this.m = this.m;
        this.i = this.i
    }
    Ef.prototype.m = !1;

    function Ff(a, b) {
        a.m ? b() : (a.i || (a.i = []), a.i.push(b))
    };

    function Gf(a, b, c, d) {
        Nc(b, c, d);
        Ff(a, () => Oc(b, c, d))
    }

    function Hf(a, b) {
        1 !== a.h && (a.h = 1, a.H && a.H(b), 0 < a.g.size && If(a, b))
    }

    function Jf(a) {
        a.l.document.visibilityState ? Gf(a, a.l.document, "visibilitychange", b => {
            "hidden" === a.l.document.visibilityState && Hf(a, b);
            "visible" === a.l.document.visibilityState && (a.h = 0)
        }) : "onpagehide" in a.l ? (Gf(a, a.l, "pagehide", b => {
            Hf(a, b)
        }), Gf(a, a.l, "pageshow", () => {
            a.h = 0
        })) : Gf(a, a.l, "beforeunload", b => {
            Hf(a, b)
        })
    }

    function Kf(a, b) {
        a.H || 0 < a.g.size || Jf(a);
        a.H = b
    }

    function Lf(a, b, c = 0) {
        0 < a.g.size || a.H || Jf(a);
        c = Math.min(Math.max(0, c), 9);
        const d = a.g.get(c);
        d ? d.push(b) : a.g.set(c, [b])
    }

    function If(a, b) {
        for (let c = 9; 0 <= c; c--) a.g.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var Mf = class extends Ef {
        constructor(a) {
            super();
            this.l = a;
            this.h = 0;
            this.H = null;
            this.g = new Map
        }
    };

    function yf(a, ...b) {
        a.G && 65536 <= Cf(a.g.concat(b), a.m).length && Nf(a);
        a.i && !a.v && (a.v = !0, Lf(a.i, () => {
            Nf(a)
        }));
        a.g.push(...b);
        a.g.length >= a.B && Nf(a);
        a.g.length && null === a.h && (a.h = setTimeout(() => {
            Nf(a)
        }, a.U))
    }

    function Of(a, b, c, d) {
        a.i || (a.j || (a.j = new Mf(b), Kf(a.j, () => {
            for (const e of a.A) e();
            c()
        })), d && 1 !== a.j.h && a.A.push(d))
    }

    function Nf(a) {
        null !== a.h && (clearTimeout(a.h), a.h = null);
        if (a.g.length) {
            var b = Cf(a.g, a.m);
            a.P("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }

    function Pf(a, b, c) {
        Of(a, b, () => {
            Nf(a)
        }, c)
    }
    var Qf = class {
            constructor(a, b, c, d, e, f) {
                this.P = Df;
                this.U = c;
                this.B = d;
                this.G = e;
                this.i = f;
                this.A = [];
                this.g = [];
                this.h = null;
                this.v = !1;
                c = new Bf;
                a = I(c, 1, a);
                b = yc(a, 2, b);
                a = b.u;
                c = a[r];
                this.m = c & 2 ? b : Kb(b.constructor, Vb(a, c, !0))
            }
        },
        Rf = class extends Qf {
            constructor(a, b, c = 1E3, d = 100, e = !1, f) {
                super(a, b, c, d, e && !0, f)
            }
        };

    function Sf(a, b) {
        b = wc(b, 1, Date.now());
        var c = Cd(window);
        b = wc(b, 2, c);
        return wc(b, 6, a.m)
    }

    function Tf(a, b, c, d, e, f) {
        if (a.i) {
            var g = bf(af(new cf, b), c);
            b = kf(gf(ff(jf(hf(new lf, d), e), g), a.g.slice()), f);
            b = pf(b);
            zf(a.h, Sf(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(h => H(h, 1) === H(g, 1) && H(h, 2) === c)) a.g.push(g), 100 < a.g.length && a.g.shift()
        }
    }

    function Uf(a, b, c, d) {
        if (a.i && a.j) {
            var e = new of ;
            b = oc(e, 2, b);
            c = oc(b, 3, c);
            d && A(c, 1, Ab(d), 0);
            d = new qf;
            d = nc(d, 7, rf, c);
            zf(a.h, Sf(a, d))
        }
    }

    function Vf(a, b, c, d) {
        if (a.i) {
            var e = new $e;
            b = u(e, 1, Ab(b));
            c = u(b, 2, Ab(c));
            d = u(c, 3, xb(d));
            c = new qf;
            d = nc(c, 8, rf, d);
            zf(a.h, Sf(a, d))
        }
    }
    var Wf = class {
        constructor(a, b, c, d = new Rf(6, "unknown", b)) {
            this.m = a;
            this.j = c;
            this.h = d;
            this.g = [];
            this.i = 0 < a && qd() < 1 / a
        }
    };
    var Q = a => {
        var b = "ya";
        if (a.ya && a.hasOwnProperty(b)) return a.ya;
        b = new a;
        return a.ya = b
    };
    var Xf = class {
        constructor() {
            this.F = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    };
    var Yf = /^true$/.test("false");

    function Zf(a, b) {
        switch (b) {
            case 1:
                return H(a, hc(a, Ge, 1));
            case 2:
                return H(a, hc(a, Ge, 2));
            case 3:
                return H(a, hc(a, Ge, 3));
            case 6:
                return H(a, hc(a, Ge, 6));
            default:
                return null
        }
    }

    function $f(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return F(a, 1);
            case 7:
                return G(a, 3);
            case 2:
                return uc(a, 2);
            case 3:
                return G(a, 3);
            case 6:
                return dc(a, 4, Gb);
            default:
                return null
        }
    }
    const ag = Lc(() => {
        if (!Yf) return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch {}
        return {}
    });

    function bg(a, b, c, d = 0) {
        Q(cg).i[d] = Q(cg).i[d] ? .add(b) ? ? (new Set).add(b);
        const e = ag();
        if (null != e[b]) return e[b];
        b = dg(d)[b];
        if (!b) return c;
        b = Fe(JSON.stringify(b));
        b = eg(b);
        a = $f(b, a);
        return null != a ? a : c
    }

    function eg(a) {
        const b = Q(Xf).F;
        if (b) {
            const c = Pa(D(a, De, 5), d => Be(B(d, ue, 1), b));
            if (c) return c.getValue() ? ? null
        }
        return B(a, Ce, 4) ? ? null
    }
    class cg {
        constructor() {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new Map
        }
    }

    function fg(a, b = !1, c) {
        return !!bg(1, a, b, c)
    }

    function gg(a, b = 0, c) {
        a = Number(bg(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function hg(a, b = "", c) {
        a = bg(3, a, b, c);
        return "string" === typeof a ? a : b
    }

    function ig(a, b = [], c) {
        a = bg(6, a, b, c);
        return Array.isArray(a) ? a : b
    }

    function dg(a) {
        return Q(cg).h[a] || (Q(cg).h[a] = {})
    }

    function jg(a, b) {
        const c = dg(b);
        rd(a, (d, e) => c[e] = d)
    }

    function kg(a, b, c, d, e = !1) {
        const f = [],
            g = [];
        Ka(b, h => {
            const k = dg(h);
            Ka(a, m => {
                var l = ic(m, Ge);
                const q = Zf(m, l);
                if (q) {
                    var x = Q(cg).g.get(h) ? .get(q) ? .slice(0) ? ? [];
                    a: {
                        const v = new mf;
                        switch (l) {
                            case 1:
                                fc(v, 1, nf, xb(q));
                                break;
                            case 2:
                                fc(v, 2, nf, xb(q));
                                break;
                            case 3:
                                fc(v, 3, nf, xb(q));
                                break;
                            case 6:
                                fc(v, 4, nf, xb(q));
                                break;
                            default:
                                l = void 0;
                                break a
                        }
                        ec(v, 5, x, zb);l = v
                    }
                    if (x = l) x = !!Q(cg).i[h] ? .has(q);
                    x && f.push(l);
                    if (x = l) x = !!Q(cg).g.get(h) ? .has(q);
                    x && g.push(l);
                    e || (l = Q(cg), l.g.has(h) || l.g.set(h, new Map), l.g.get(h).has(q) || l.g.get(h).set(q, []), d && l.g.get(h).get(q).push(d));
                    k[q] = m.toJSON()
                }
            })
        });
        (f.length || g.length) && Uf(c, f, g, d ? ? void 0)
    }

    function lg(a, b) {
        const c = dg(b);
        Ka(a, d => {
            var e = Fe(JSON.stringify(d));
            const f = ic(e, Ge);
            (e = Zf(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function mg() {
        return Na(Object.keys(Q(cg).h), a => Number(a))
    }

    function ng(a) {
        Qa(Q(cg).j, a) || jg(dg(4), a)
    };

    function R(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }

    function og(a, b, c) {
        return b[a] || c
    }

    function pg(a) {
        R(5, fg, a);
        R(6, gg, a);
        R(7, hg, a);
        R(8, ig, a);
        R(13, lg, a);
        R(15, ng, a)
    }

    function qg(a) {
        R(4, b => {
            Q(Xf).F = b
        }, a);
        R(9, (b, c) => {
            var d = Q(Xf);
            null == d.F[3][b] && (d.F[3][b] = c)
        }, a);
        R(10, (b, c) => {
            var d = Q(Xf);
            null == d.F[4][b] && (d.F[4][b] = c)
        }, a);
        R(11, (b, c) => {
            var d = Q(Xf);
            null == d.F[5][b] && (d.F[5][b] = c)
        }, a);
        R(14, b => {
            var c = Q(Xf);
            for (const d of [3, 4, 5]) Object.assign(c.F[d], b[d])
        }, a)
    }

    function rg(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function sg(a, b, c) {
        a.i = og(1, b, () => {});
        a.j = (d, e) => og(2, b, () => [])(d, c, e);
        a.g = () => og(3, b, () => [])(c);
        a.h = d => {
            og(16, b, () => {})(d, c)
        }
    }
    class tg {
        i() {}
        h() {}
        j() {
            return []
        }
        g() {
            return []
        }
    };

    function qe(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof oe ? f = c : (f = new oe, rd(c, (h, k) => {
                var m = f;
                const l = m.j++;
                h = je(k, h);
                m.g.push(l);
                m.h[l] = h
            }));
            const g = ne(f, "/pagead/gen_204?id=" + b + "&");
            g && Fd(n, g)
        } catch (f) {}
    }

    function ug(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    class vg {
        constructor() {
            this.g = Math.random()
        }
    };
    let wg, xg;
    const yg = new ie(window);
    (a => {
        wg = a ? ? new vg;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        ug(wg, window.google_srt);
        xg = new re(wg, !0, yg);
        xg.Ba(() => {});
        xg.j(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || he(yg) : yg.g && Nc(window, "load", () => {
            window.google_measure_js_timing || he(yg)
        })
    })();
    var zg = {
        Vb: 0,
        Ub: 1,
        Rb: 2,
        Mb: 3,
        Sb: 4,
        Nb: 5,
        Tb: 6,
        Pb: 7,
        Qb: 8,
        Lb: 9,
        Ob: 10,
        Wb: 11
    };
    var Ag = {
        Yb: 0,
        Zb: 1,
        Xb: 2
    };

    function Bg(a) {
        if (0 != a.g) throw Error("Already resolved/rejected.");
    }
    var Eg = class {
        constructor() {
            this.h = new Cg(this);
            this.g = 0
        }
        resolve(a) {
            Bg(this);
            this.g = 1;
            this.j = a;
            Dg(this.h)
        }
    };

    function Dg(a) {
        switch (a.g.g) {
            case 0:
                break;
            case 1:
                a.h && a.h(a.g.j);
                break;
            case 2:
                a.i && a.i(a.g.i);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var Cg = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.h) throw Error("Then functions already set.");
            this.h = a;
            this.i = b;
            Dg(this)
        }
    };
    const Fg = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Fg(Ma(this.g, a))
        }
        apply(a) {
            return new Fg(a(this.g.slice(0)))
        }
        sort(a) {
            return new Fg(this.g.slice(0).sort(a))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new Fg(b)
        }
    };

    function Gg(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };
    const Ig = class {
        constructor() {
            this.g = {};
            this.h = {}
        }
        set(a, b) {
            const c = Hg(a);
            this.g[c] = b;
            this.h[c] = a
        }
        get(a, b) {
            a = Hg(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.h = {}
        }
    };

    function Hg(a) {
        return a instanceof Object ? String(fa(a)) : a + ""
    };

    function Jg(a) {
        return new Kg({
            value: a
        }, null)
    }

    function Lg(a) {
        return new Kg(null, a)
    }

    function Mg(a) {
        try {
            return Jg(a())
        } catch (b) {
            return Lg(b)
        }
    }

    function Ng(a) {
        return null != a.g ? a.getValue() : null
    }

    function Og(a, b) {
        null != a.g && b(a.getValue());
        return a
    }

    function Pg(a, b) {
        null != a.g || b(a.h);
        return a
    }
    class Kg {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()), a instanceof Kg ? a : Jg(a)) : this
        }
    };
    const Qg = class {
        constructor(a) {
            this.g = new Ig;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.g.g[Hg(a)]
        }
    };
    class Rg {
        constructor() {
            this.g = new Ig
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new Qg, this.g.set(a, c));
            c.add(b)
        }
    };
    var S = class extends J {
        getId() {
            return E(this, 3)
        }
    };
    S.s = [4];
    class Sg {
        constructor({
            kb: a,
            ac: b,
            kc: c,
            Bb: d
        }) {
            this.g = b;
            this.j = new Fg(a || []);
            this.i = d;
            this.h = c
        }
    };
    const Ug = a => {
            const b = [],
                c = a.j;
            c && c.g.length && b.push({
                X: "a",
                da: Tg(c)
            });
            null != a.g && b.push({
                X: "as",
                da: a.g
            });
            null != a.h && b.push({
                X: "i",
                da: String(a.h)
            });
            null != a.i && b.push({
                X: "rp",
                da: String(a.i)
            });
            b.sort(function(d, e) {
                return d.X.localeCompare(e.X)
            });
            b.unshift({
                X: "t",
                da: "aa"
            });
            return b
        },
        Tg = a => {
            a = a.g.slice(0).map(Vg);
            a = JSON.stringify(a);
            return sd(a)
        },
        Vg = a => {
            const b = {};
            null != E(a, 7) && (b.q = E(a, 7));
            null != pc(a, 2) && (b.o = pc(a, 2));
            null != pc(a, 5) && (b.p = pc(a, 5));
            return b
        };
    var Wg = class extends J {
        setLocation(a) {
            return u(this, 1, xb(a))
        }
    };

    function Xg(a) {
        const b = [].slice.call(arguments).filter(Kc(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Ua || []);
            d = Object.assign(d, e.fb)
        });
        return new Yg(c, d)
    }

    function Zg(a) {
        switch (a) {
            case 1:
                return new Yg(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Yg(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Yg(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Yg(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function $g(a) {
        if (null == a) var b = null;
        else {
            var c = Ug(a);
            a = [];
            for (b of c) c = String(b.da), a.push(b.X + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new Yg(null, {
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Yg {
        constructor(a, b) {
            this.Ua = a;
            this.fb = b
        }
    };
    const ah = new Yg(["google-auto-placed"], {
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var bh = Dc(class extends J {});
    var ch = class extends J {};
    var dh = class extends J {};
    var eh = class extends J {};
    eh.s = [6, 7, 9, 10, 11];
    var fh = class extends J {};
    var gh = class extends J {
        constructor() {
            super()
        }
    };
    gh.s = [1];

    function hh(a) {
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
    var T = class {
            constructor(a, b = !1) {
                this.g = a;
                this.defaultValue = b
            }
        },
        ih = class {
            constructor(a, b = 0) {
                this.g = a;
                this.defaultValue = b
            }
        },
        jh = class {
            constructor(a, b = []) {
                this.g = a;
                this.defaultValue = b
            }
        };
    var kh = new T(1082, !0),
        lh = new T(1271),
        mh = new ih(1130, 100),
        nh = new class {
            constructor(a, b = "") {
                this.g = a;
                this.defaultValue = b
            }
        }(14),
        oh = new T(1247, !0),
        ph = new T(1304),
        qh = new T(1272),
        rh = new T(316),
        sh = new T(1207, !0),
        th = new T(313),
        uh = new T(369),
        vh = new T(1289),
        wh = new T(1298),
        xh = new T(1230, !0),
        yh = new T(1229, !0),
        zh = new T(1231, !0),
        Ah = new T(1303, !0),
        Bh = new T(1302),
        Ch = new T(217),
        Dh = new T(1288),
        Eh = new T(568515114),
        Fh = new jh(556791602, ["1"]),
        Gh = new T(558761323),
        Hh = new T(529362570, !0),
        Ih = new T(506914611),
        Jh = new T(506852289),
        Kh = new T(1120),
        Lh = new T(567362967, !0),
        Mh = new ih(1079, 5),
        Nh = new T(10009, !0),
        Oh = new jh(1934, ["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==",
            "A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==",
            "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="
        ]),
        Ph = new T(84);
    var Qh = class {
        constructor() {
            const a = {};
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.g = (b, c) => null != a[b] ? a[b] : c;
            this.h = (b, c) => null != a[b] ? a[b] : c;
            this.i = (b, c) => null != a[b] ? a[b] : c;
            this.m = () => {}
        }
    };

    function U(a) {
        return Q(Qh).j(a.g, a.defaultValue)
    };

    function Rh(a, b, c) {
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
        hh(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function Sh(a, b) {
        const c = e => {
                e = Th(e);
                return null == e ? !1 : 0 < e
            },
            d = e => {
                e = Th(e);
                return null == e ? !1 : 0 > e
            };
        switch (b) {
            case 0:
                return {
                    init: Wh(a.previousSibling, c),
                    ha: e => Wh(e.previousSibling, c),
                    na: 0
                };
            case 2:
                return {
                    init: Wh(a.lastChild, c),
                    ha: e => Wh(e.previousSibling, c),
                    na: 0
                };
            case 3:
                return {
                    init: Wh(a.nextSibling, d),
                    ha: e => Wh(e.nextSibling, d),
                    na: 3
                };
            case 1:
                return {
                    init: Wh(a.firstChild, d),
                    ha: e => Wh(e.nextSibling, d),
                    na: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function Th(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function Wh(a, b) {
        return a && b(a) ? a : null
    };
    var Xh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Yh = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };

    function Zh(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function $h(a) {
        return Zh(a).clientWidth
    };
    var ai = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && ld(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var bi = (a, b) => {
        do {
            const c = pd(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function ci(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = N(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var di = (a, b) => !((ud.test(b.google_ad_width) || td.test(a.style.width)) && (ud.test(b.google_ad_height) || td.test(a.style.height))),
        fi = (a, b) => (a = ei(a, b)) ? a.y : 0,
        ei = (a, b) => {
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
        gi = (a, b, c, d, e) => {
            if (a !== a.top) return md(a) ? 3 : 16;
            if (!(488 > $h(a))) return 4;
            if (!(a.innerHeight >= a.innerWidth)) return 5;
            const f = $h(a);
            if (!f || (f - c) / f > d) a = 6;
            else {
                if (c = "true" != e.google_full_width_responsive) a: {
                    c =
                    b.parentElement;
                    for (b = $h(a); c; c = c.parentElement)
                        if ((d = pd(c, a)) && (e = N(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
                a = c ? 7 : !0
            }
            return a
        },
        hi = (a, b, c, d) => {
            const e = gi(b, c, a, .3, d);
            !0 !== e ? a = e : "true" == d.google_full_width_responsive || bi(c, b) ? (b = $h(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
            return a
        },
        ii = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const ji = (a, b) => {
            if (3 == b.nodeType) return /\S/.test(b.data);
            if (1 == b.nodeType) {
                if (/^(script|style)$/i.test(b.nodeName)) return !1;
                let c;
                try {
                    c = pd(b, a)
                } catch (d) {}
                return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
            }
            return !1
        },
        ki = (a, b, c) => {
            a = ei(b, a);
            return "rtl" == c ? -a.x : a.x
        };
    var li = (a, b) => {
        var c;
        c = (c = b.parentElement) ? (c = pd(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            ii(b, c, "0px");
            b.style.width = $h(a) + "px";
            if (0 !== ki(a, b, c)) {
                ii(b, c, "0px");
                var d = ki(a, b, c);
                ii(b, c, -1 * d + "px");
                a = ki(a, b, c);
                0 !== a && a !== d && ii(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };
    var mi = class {
        constructor(a, b) {
            this.J = a;
            this.i = b
        }
        height() {
            return this.i
        }
        g(a) {
            return 300 < a && 300 < this.i ? this.J : Math.min(1200, Math.round(a))
        }
        h() {}
    };
    var ni = (a, b, c, d = e => e) => {
            let e;
            return a.style && a.style[c] && d(a.style[c]) || (e = pd(a, b)) && e[c] && d(e[c]) || null
        },
        oi = a => b => b.J <= a,
        ri = (a, b, c, d) => {
            const e = a && pi(c, b),
                f = qi(b, d);
            return g => !(e && g.height() >= f)
        },
        si = a => b => b.height() <= a,
        pi = (a, b) => fi(a, b) < Zh(b).clientHeight - 100,
        ti = (a, b) => {
            var c = ni(b, a, "height", N);
            if (c) return c;
            var d = b.style.height;
            b.style.height = "inherit";
            c = ni(b, a, "height", N);
            b.style.height = d;
            if (c) return c;
            c = Infinity;
            do(d = b.style && N(b.style.height)) && (c = Math.min(c, d)), (d = ni(b, a, "maxHeight", N)) && (c =
                Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
            return c
        };
    const qi = (a, b) => {
        const c = 0 == Qd(a);
        return b && c ? Math.max(250, 2 * Zh(a).clientHeight / 3) : 250
    };
    var ui = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0,
        google_overlays: !0,
        google_privacy_treatments: !0
    };
    const vi = RegExp("(^| )adsbygoogle($| )");

    function wi(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = bd(d.property);
            a[e] = d.value
        }
    };
    var xi = class extends J {};
    var yi = class extends J {};
    var zi = class extends J {
        g() {
            return cc(this, 23)
        }
    };
    var Ai = class extends J {};
    var Bi = class extends J {};
    var Ci = class extends J {};
    var Di = class extends J {};
    var Ei = class extends J {};
    var Fi = class extends J {
            getName() {
                return E(this, 4)
            }
        },
        Gi = [1, 2, 3];
    var Hi = class extends J {};
    Hi.s = [2, 5, 6, 11];
    var Ii = class extends J {};
    var Ki = class extends J {
            g() {
                return vc(this, Ii, 2, Ji)
            }
        },
        Ji = [1, 2];
    var Li = class extends J {
        g() {
            return B(this, Ki, 3)
        }
    };
    Li.s = [1, 4];
    var Mi = class extends J {},
        Ni = Dc(Mi);
    Mi.s = [1, 2, 5, 7];

    function Oi(a) {
        var b = [];
        Gg(a.getElementsByTagName("p"), function(c) {
            100 <= Pi(c) && b.push(c)
        });
        return b
    }

    function Pi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Gg(a.childNodes, function(c) {
            b += Pi(c)
        });
        return b
    }

    function Qi(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Ri(a, b) {
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
    const Si = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.j)
            } catch (f) {}
            if (!b.length) return [];
            a = Ra(b);
            a = Ri(this, a);
            "number" === typeof this.h && (b = this.h, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.i) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Oi(a[c]),
                        e = this.i;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.j,
                occurrenceIndex: this.h,
                paragraphIndex: this.i,
                ignoreMode: this.g
            })
        }
    };
    class Ti {
        constructor() {
            var a = Od `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.m = Math.random();
            this.h = this.I;
            this.v = a
        }
        Ba(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        gb(a) {
            this.h = a
        }
        I(a, b, c = .01, d, e = "jserror") {
            if ((this.i ? this.m : Math.random()) > c) return !1;
            Vd(b) || (b = new Ud(b, {
                context: a,
                id: e
            }));
            if (d || this.g) b.meta = {}, this.g && this.g(b.meta), d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (nd(n.document, this.v), n.error_rep_loaded = !0);
            return !1
        }
        ea(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.h(a, d, .01, c, "jserror")) throw d;
            }
        }
        oa(a, b) {
            return (...c) => this.ea(a, () => b.apply(void 0, c))
        }
        aa(a, b) {
            b.catch(c => {
                c = c ? c : "unknown rejection";
                this.I(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            })
        }
    };
    const Ui = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var Vi = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = be();
                let k, m = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (l) {
                    m = 13;
                    if (!c) throw l;
                    c(a, l)
                } finally {
                    f.google_measure_js_timing && h && Ui({
                        label: a.toString(),
                        value: h,
                        duration: (be() || 0) - h,
                        type: m,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        Wi = (a, b) => Vi(a, b, (c, d) => {
            (new Ti).I(c, d)
        }, void 0, !1);

    function Xi(a, b, c) {
        return Vi(a, b, void 0, c, !0).apply()
    }

    function Yi(a) {
        if (!a) return null;
        var b = E(a, 7);
        if (E(a, 1) || a.getId() || 0 < dc(a, 4, Gb).length) {
            var c = dc(a, 4, Gb);
            b = pc(a, 2);
            var d = pc(a, 5),
                e = Zi(t(a, 6)),
                f = E(a, 3),
                g = E(a, 1);
            a = "";
            g && (a += g);
            f && (a += "#" + Qi(f));
            if (c)
                for (f = 0; f < c.length; f++) a += "." + Qi(c[f]);
            b = (c = a) ? new Si(c, b, d, e) : null
        } else b = b ? new Si(b, pc(a, 2), pc(a, 5), Zi(t(a, 6))) : null;
        return b
    }
    var $i = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Zi(a) {
        return null == a ? a : $i[a]
    }
    var aj = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function bj(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function cj(a) {
        a = bj(a);
        return a.optimization = a.optimization || {}
    };
    var dj = a => {
        switch (t(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = B(a, S, 1), null == b ? b = null : (a = t(a, 2), b = null == a ? null : new Sg({
                    kb: [b],
                    Bb: a
                }));
                return null != b ? Jg(b) : Lg(Error("Missing dimension when creating placement id"));
            case 3:
                return Lg(Error("Missing dimension when creating placement id"));
            default:
                return Lg(Error("Invalid type: " + t(a, 8)))
        }
    };
    var ej = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function fj(a, b) {
        const c = new Rg,
            d = new Qg;
        b.forEach(e => {
            if (vc(e, Di, 1, Gi)) {
                e = vc(e, Di, 1, Gi);
                if (B(e, ch, 1) && B(B(e, ch, 1), S, 1) && B(e, ch, 2) && B(B(e, ch, 2), S, 1)) {
                    const g = gj(a, B(B(e, ch, 1), S, 1)),
                        h = gj(a, B(B(e, ch, 2), S, 1));
                    if (g && h)
                        for (var f of ej({
                                anchor: g,
                                position: rc(B(e, ch, 1), 2)
                            }, {
                                anchor: h,
                                position: rc(B(e, ch, 2), 2)
                            })) c.set(fa(f.anchor), f.position)
                }
                B(e, ch, 3) && B(B(e, ch, 3), S, 1) && (f = gj(a, B(B(e, ch, 3), S, 1))) && c.set(fa(f), rc(B(e, ch, 3), 2))
            } else vc(e, Ei, 2, Gi) ? hj(a, vc(e, Ei, 2, Gi), c) : vc(e, Ci, 3, Gi) && ij(a, vc(e, Ci, 3, Gi), d)
        });
        return new jj(c,
            d)
    }
    class jj {
        constructor(a, b) {
            this.h = a;
            this.g = b
        }
    }
    const hj = (a, b, c) => {
            B(b, ch, 2) ? (b = B(b, ch, 2), (a = gj(a, B(b, S, 1))) && c.set(fa(a), t(b, 2))) : B(b, S, 1) && (a = kj(a, B(b, S, 1))) && a.forEach(d => {
                d = fa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        ij = (a, b, c) => {
            B(b, S, 1) && (a = kj(a, B(b, S, 1))) && a.forEach(d => {
                c.add(fa(d))
            })
        },
        gj = (a, b) => (a = kj(a, b)) && 0 < a.length ? a[0] : null,
        kj = (a, b) => (b = Yi(b)) ? b.query(a) : null;
    class V extends Error {
        constructor(a = "") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, V) : this.stack = Error().stack || ""
        }
    };
    let lj, W;
    const mj = new ie(n);
    var nj = a => {
        null != a && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || he(mj)
    };
    ((a, b = !0) => {
        lj = a || new vg;
        "number" !== typeof n.google_srt && (n.google_srt = Math.random());
        ug(lj, n.google_srt);
        W = new re(lj, b, mj);
        W.j(!0);
        "complete" == n.document.readyState ? nj() : mj.g && Nc(n, "load", () => {
            nj()
        })
    })();
    var oj = (a, b, c) => W.ea(a, b, c),
        pj = (a, b, c) => {
            const d = Q(tg).g();
            !b.eid && d.length && (b.eid = d.toString());
            qe(lj, a, b, !0, c)
        },
        qj = (a, b) => {
            W.aa(a, b)
        },
        rj = (a, b, c, d) => {
            let e;
            Vd(b) ? e = b.msg || pe(b.error) : e = pe(b);
            return 0 == e.indexOf("TagError") ? ((b instanceof Ud ? b.error : b).pbr = !0, !1) : W.I(a, b, c, d)
        };
    var sj = class {
        constructor() {
            this.g = Bd();
            this.h = 0
        }
    };

    function tj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (uj(b)) return !0;
            if (a.g.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.g.add(d));
        return !1
    }

    function vj(a) {
        a = wj(a);
        return a.has("all") || a.has("after")
    }

    function xj(a) {
        a = wj(a);
        return a.has("all") || a.has("before")
    }

    function wj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function uj(a) {
        const b = wj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var yj = class {
        constructor() {
            this.g = new Set;
            this.h = new sj
        }
    };

    function zj(a, b) {
        if (!a) return !1;
        a = pd(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function Aj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function Bj(a) {
        return !!a.nextSibling || !!a.parentNode && Bj(a.parentNode)
    };

    function Cj(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    const Dj = a => {
        const b = Cj(a);
        return b ? Ma(Na(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
    };
    var Ej = a => {
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

    function Fj(a, b) {
        if (a.j) return !0;
        a.j = !0;
        const c = D(a.i, eh, 1);
        a.h = 0;
        const d = Gj(a.B);
        var e = a.g;
        var f;
        try {
            var g = (f = e.localStorage.getItem("google_ama_settings")) ? bh(f) : null
        } catch (q) {
            g = null
        }
        f = null !== g && F(g, 2, !1);
        g = bj(e);
        f && (g.eatf = !0, Ld(7, [!0, 0, !1]));
        b: {
            var h = {
                    rb: !1,
                    sb: !1
                },
                k = Ra(e.document.querySelectorAll(".google-auto-placed"));
            const q = Ra(e.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
                x = Ra(e.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            var m = (Dj(e) || Ra(e.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ra(e.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const v = Ra(e.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]")),
                w = Ra(e.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
                z = Ra(e.document.querySelectorAll("div.googlepublisherpluginad")),
                C = Ra(e.document.querySelectorAll("html > ins.adsbygoogle"));
            let L = [].concat(Ra(e.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ra(e.document.querySelectorAll("body ins.adsbygoogle")));f = [];
            for (const [M, K] of [
                    [h.dc, k],
                    [h.rb, q],
                    [h.ic, x],
                    [h.ec, m],
                    [h.jc, v],
                    [h.cc, w],
                    [h.hc, z],
                    [h.sb, C]
                ]) !1 === M ? f = f.concat(K) : L = L.concat(K);h = Ej(L);f = Ej(f);h = h.slice(0);
            for (l of f)
                for (f = 0; f < h.length; f++)(l.contains(h[f]) || h[f].contains(l)) && h.splice(f, 1);
            var l = h;e = Zh(e).clientHeight;
            for (f = 0; f < l.length; f++)
                if (!(l[f].getBoundingClientRect().top > e)) {
                    e = !0;
                    break b
                }
            e = !1
        }
        e = e ? g.eatfAbg = !0 : !1;
        if (e) return !0;
        e = new Qg([2]);
        for (g = 0; g < c.length; g++) {
            l = a;
            h = c[g];
            f = g;
            m = b;
            if (B(h, Wg, 4) && e.contains(rc(B(h, Wg, 4), 1)) && 1 === t(h, 8) && Hj(h, d)) {
                l.h++;
                if (m = Ij(l, h, m, d)) k = bj(l.g), k.numAutoAdsPlaced || (k.numAutoAdsPlaced = 0), B(h, S, 1) && null != pc(B(h, S, 1), 5) && (k.numPostPlacementsPlaced ? k.numPostPlacementsPlaced++ :
                    k.numPostPlacementsPlaced = 1), null == k.placed && (k.placed = []), k.numAutoAdsPlaced++, k.placed.push({
                    index: f,
                    element: m.ga
                }), Ld(7, [!1, l.h, !0]);
                l = m
            } else l = null;
            if (l) return !0
        }
        Ld(7, [!1, a.h, !1]);
        return !1
    }

    function Ij(a, b, c, d) {
        if (!Hj(b, d) || 1 != t(b, 8)) return null;
        d = B(b, S, 1);
        if (!d) return null;
        d = Yi(d);
        if (!d) return null;
        d = d.query(a.g.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = aj[t(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                    case 0:
                        f = zj(Aj(d), f);
                        break a;
                    case 3:
                        f = zj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = zj(g ? 1 == g.nodeType ? g : Aj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !Bj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !hh(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c = f)) {
            c = a.v;
            f = t(b, 2);
            g = fa(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.g.contains(fa(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.g.contains(fa(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c) {
            c = a.A;
            g = t(b, 2);
            a: switch (g) {
                case 1:
                    f = vj(d.previousElementSibling) || xj(d);
                    break a;
                case 4:
                    f = vj(d) || xj(d.nextElementSibling);
                    break a;
                case 2:
                    f = xj(d.firstElementChild);
                    break a;
                case 3:
                    f = vj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + g);
            }
            g = tj(c, d, g);
            c = c.h;
            pj("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.h++,
                dvc: xd()
            }, .1);
            c = f || g
        }
        if (c) return null;
        f = B(b, dh, 3);
        c = {};
        f && (c.ib = E(f, 1), c.Sa = E(f, 2), c.nb = !!cc(f, 3));
        f = B(b, Wg, 4) && rc(B(b, Wg, 4), 2) ? rc(B(b, Wg, 4), 2) : null;
        f = Zg(f);
        g = null != pc(b, 12) ? pc(b, 12) : null;
        g = null == g ? null : new Yg(null, {
            google_ml_rank: g
        });
        b = Jj(a, b);
        b = Xg(a.m, f, g, b);
        f = a.g;
        a = a.G;
        var h = f.document,
            k = c.nb || !1;
        g = (new dd(h)).createElement("DIV");
        const m = g.style;
        m.width = "100%";
        m.height = "auto";
        m.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign =
            "center";
        c.Ab && wi(k, c.Ab);
        h = (new dd(h)).createElement("INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.ib && (k.marginTop = c.ib);
        c.Sa && (k.marginBottom = c.Sa);
        c.jb && wi(k, c.jb);
        g.appendChild(h);
        c = {
            wa: g,
            ga: h
        };
        c.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ua) c.wa.className = h.join(" ");
        h = c.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var l = c.wa;
                if (U(th)) {
                    {
                        const z = Sh(d, e);
                        if (z.init) {
                            var q =
                                z.init;
                            for (d = q; d = z.ha(d);) q = d;
                            var x = {
                                anchor: q,
                                position: z.na
                            }
                        } else x = {
                            anchor: d,
                            position: e
                        }
                    }
                    l["google-ama-order-assurance"] = 0;
                    Rh(l, x.anchor, x.position)
                } else Rh(l, d, e);
                b: {
                    var v = c.ga;v.dataset.adsbygoogleStatus = "reserved";v.className += " adsbygoogle-noablate";l = {
                        element: v
                    };
                    var w = b && b.fb;
                    if (v.hasAttribute("data-pub-vars")) {
                        try {
                            w = JSON.parse(v.getAttribute("data-pub-vars"))
                        } catch (z) {
                            break b
                        }
                        v.removeAttribute("data-pub-vars")
                    }
                    w && (l.params = w);
                    (f.adsbygoogle = f.adsbygoogle || []).push(l)
                }
            } catch (z) {
                (v = c.wa) && v.parentNode &&
                    (w = v.parentNode, w.removeChild(v), hh(w) && (w.style.display = w.getAttribute("data-init-display") || "none"));
                v = !1;
                break a
            }
            v = !0
        }
        return v ? c : null
    }

    function Jj(a, b) {
        return Ng(Pg(dj(b).map($g), c => {
            bj(a.g).exception = c
        }))
    }
    const Kj = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.G = b;
            this.i = c;
            this.m = e || null;
            this.v = (this.B = d) ? fj(a.document, D(d, Fi, 5)) : fj(a.document, []);
            this.A = new yj;
            this.h = 0;
            this.j = !1
        }
    };

    function Gj(a) {
        const b = {};
        a && dc(a, 6, yb).forEach(c => {
            b[c] = !0
        });
        return b
    }

    function Hj(a, b) {
        return a && $b(a, Wg, 4) && b[rc(B(a, Wg, 4), 2)] ? !1 : !0
    };
    var Lj = Dc(class extends J {});

    function Mj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? Mg(() => Lj(c)) : Jg(null)
    };

    function Nj() {
        if (Oj) return Oj;
        const a = Nd() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Oj = b : a.google_persistent_state_async = Oj = new Pj
    }

    function Qj(a, b, c) {
        b = Rj[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Sj(a, b, c) {
        return Qj(a, b, () => c)
    }

    function Tj(a, b, c) {
        a.S[Rj[b] || "google_ps_" + b] = c
    }

    function Uj(a, b) {
        Tj(a, 38, b)
    }
    class Pj {
        constructor() {
            this.S = {}
        }
    }
    var Oj = null;
    const Rj = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function Vj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    Vj.prototype.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.mc, g = c.nc || !1, f = c.domain || void 0, e = c.path || void 0, d = c.xb);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    Vj.prototype.get = function(a, b) {
        const c = a + "=",
            d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = ra(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    Vj.prototype.isEmpty = function() {
        return !this.g.cookie
    };
    Vj.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = ra(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            xb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function Wj(a, b = window) {
        if (F(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    };

    function Xj(a) {
        var b = new Yj;
        return u(b, 5, ub(a))
    }
    var Yj = class extends J {
        constructor() {
            super()
        }
    };
    Yj.s = [10];
    const Zj = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function ak(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Zj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Id({
            e: String(a.internalErrorState)
        }), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function bk(a) {
        if (a.g) return a.g;
        a.g = wd(a.h, "__tcfapiLocator");
        return a.g
    }

    function ck(a) {
        return "function" === typeof a.h.__tcfapi || null != bk(a)
    }

    function dk(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (bk(a)) {
            ek(a);
            const e = ++a.G;
            a.A[e] = c;
            a.g && a.g.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function ek(a) {
        a.j || (a.j = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.A[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Nc(a.h, "message", a.j))
    }
    class fk extends Ef {
        constructor(a) {
            var b = {};
            super();
            this.h = a;
            this.g = null;
            this.A = {};
            this.G = 0;
            this.B = b.timeoutMs ? ? 500;
            this.v = b.bc ? ? !1;
            this.j = null
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.v
            };
            const c = Mc(() => a(b));
            let d = 0; - 1 !== this.B && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.B));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Zj(b), b.internalBlockOnErrors = this.v, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState =
                    3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                dk(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && dk(this, "removeEventListener", null, a.listenerId)
        }
    };
    var kk = ({
            l: a,
            V: b,
            timeoutMs: c,
            H: d,
            ia: e = !1,
            ja: f = !1
        }) => {
            b = gk({
                l: a,
                V: b,
                ia: e,
                ja: f
            });
            null != b.g || "tcunav" != b.h.message ? d(b) : hk(a, c).then(g => g.map(ik)).then(g => g.map(h => jk(a, h))).then(d)
        },
        gk = ({
            l: a,
            V: b,
            ia: c = !1,
            ja: d = !1
        }) => {
            if (!lk({
                    l: a,
                    V: b,
                    ia: c,
                    ja: d
                })) return jk(a, Xj(!0));
            b = Nj();
            return (b = Sj(b, 24)) ? jk(a, ik(b)) : Lg(Error("tcunav"))
        };

    function lk({
        l: a,
        V: b,
        ia: c,
        ja: d
    }) {
        if (!(d = !d && ck(new fk(a)))) {
            if (c = !c) {
                if (b) {
                    a = Mj(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != t(a, 1)) b: switch (a = t(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else W.I(806, a.h, void 0, void 0), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function hk(a, b) {
        return Promise.race([mk(), nk(a, b)])
    }

    function mk() {
        return (new Promise(a => {
            var b = Nj();
            a = {
                resolve: a
            };
            const c = Sj(b, 25, []);
            c.push(a);
            Tj(b, 25, c)
        })).then(ok)
    }

    function nk(a, b) {
        return new Promise(c => {
            a.setTimeout(c, b, Lg(Error("tcto")))
        })
    }

    function ok(a) {
        return a ? Jg(a) : Lg(Error("tcnull"))
    }

    function ik(a) {
        if (ak(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return Xj(a)
    }

    function jk(a, b) {
        return (a = Wj(b, a)) ? Jg(a) : Lg(Error("unav"))
    };
    var pk = class extends J {};
    pk.s = [1, 2, 3];
    var qk = class extends J {};
    qk.s = [1, 2, 3];
    var rk = class extends J {
        g() {
            return B(this, pk, 2)
        }
        h() {
            return B(this, qk, 3)
        }
    };
    const sk = class {
        constructor(a) {
            this.exception = a
        }
    };

    function tk(a, b) {
        try {
            var c = a.h,
                d = c.resolve,
                e = a.g;
            bj(e.g);
            D(e.i, eh, 1);
            d.call(c, new sk(b))
        } catch (f) {
            a = a.h, b = f, Bg(a), a.g = 2, a.i = b, Dg(a.h)
        }
    }
    var uk = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.h = c
        }
        start() {
            this.j()
        }
        j() {
            try {
                switch (this.i.document.readyState) {
                    case "complete":
                    case "interactive":
                        Fj(this.g, !0);
                        tk(this);
                        break;
                    default:
                        Fj(this.g, !1) ? tk(this) : this.i.setTimeout(la(this.j, this), 100)
                }
            } catch (a) {
                tk(this, a)
            }
        }
    };
    var vk = class extends J {
        constructor() {
            super()
        }
    };
    const wk = {
            "-": 0,
            Y: 2,
            N: 1
        },
        xk = {
            [0]: "-",
            [2]: "Y",
            [1]: "N"
        };
    var yk = class extends J {
        constructor() {
            super()
        }
        getVersion() {
            return tc(this, 2)
        }
    };
    yk.s = [3];

    function zk(a) {
        return Va(2 > (a.length + 3) % 4 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function Ak(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function Bk(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function Ck(a) {
        var b = zk(a + "A"),
            c = Ak(b.slice(0, 6));
        a = Ak(b.slice(6, 12));
        var d = new yk;
        c = A(d, 1, Ab(c), 0);
        a = A(c, 2, Ab(a), 0);
        b = b.slice(12);
        c = Ak(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === Ak(e[0]);
            e = e.slice(1);
            var g = Dk(e, b),
                h = 0 === d.length ? 0 : d[d.length - 1];
            h = Bk(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = Dk(e, b);
                g = Bk(f);
                for (let m = 0; m <= g; m++) d.push(h + m);
                e = e.slice(f.length)
            }
        }
        if (0 <
            e.length) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return ec(a, 3, d, zb)
    }

    function Dk(a, b) {
        const c = a.indexOf("11");
        if (-1 === c) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var Ek = class extends J {
        constructor() {
            super()
        }
    };
    var Fk = class extends J {
        constructor() {
            super()
        }
    };

    function Gk(a) {
        var b = new Hk;
        return A(b, 1, Ab(a), 0)
    }
    var Hk = class extends J {
        getVersion() {
            return tc(this, 1)
        }
    };
    var Ik = class extends J {
        constructor() {
            super()
        }
    };

    function Jk(a) {
        var b = new Kk;
        return mc(b, 1, a)
    }
    var Kk = class extends J {
        constructor() {
            super()
        }
    };
    const Lk = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        Mk = Lk.reduce((a, b) => a + b);
    var Nk = "a".charCodeAt(),
        Ok = Rc(zg),
        Pk = Rc(Ag);

    function Qk() {
        var a = new Rk;
        return wc(a, 1, 0)
    }

    function Sk(a) {
        const b = sc(qc(a, 1));
        a = tc(a, 2);
        return new Date(1E3 * b + a / 1E6)
    }
    var Rk = class extends J {};

    function Tk(a, b) {
        if (a.g + b > a.h.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }

    function Uk(a) {
        let b = Tk(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!Tk(a, 1),
                e = Tk(a, 16);
            if (d)
                for (d = Tk(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function Vk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (Tk(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function Wk(a) {
        const b = Tk(a, 16);
        return !0 === !!Tk(a, 1) ? (a = Uk(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : Vk(a, b)
    }
    class Xk {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.h = a;
            this.g = 0
        }
    };
    var Zk = (a, b) => {
        try {
            var c = Va(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new Xk(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = Tk(d, 12);
            c.cmpVersion = Tk(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = Tk(d, 6);
            c.isServiceSpecific = !!Tk(d, 1);
            c.useNonStandardStacks = !!Tk(d, 1);
            c.specialFeatureOptins = Yk(Vk(d, 12, Pk), Pk);
            c.purpose = {
                consents: Yk(Vk(d, 24, Ok), Ok),
                legitimateInterests: Yk(Vk(d, 24, Ok), Ok)
            };
            c.purposeOneTreatment = !!Tk(d, 1);
            c.publisherCC = String.fromCharCode(Nk + Tk(d, 6)) + String.fromCharCode(Nk +
                Tk(d, 6));
            c.vendor = {
                consents: Yk(Wk(d), b),
                legitimateInterests: Yk(Wk(d), b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const Yk = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var $k = new T(203);
    var al = class extends J {
        g() {
            return null != E(this, 2)
        }
    };
    var bl = class extends J {
        g() {
            return null != E(this, 2)
        }
    };
    var cl = class extends J {};
    var dl = class extends J {},
        el = Dc(dl);
    dl.s = [7];

    function fl() {
        {
            const b = gl(P.document);
            try {
                var a = b ? el(b) : null
            } catch (c) {
                a = null
            }
        }
        return a ? B(a, cl, 4) || null : null
    }

    function gl(a) {
        a = (new Vj(a)).get("FCCDCF", "");
        if (a)
            if (a.startsWith("%")) try {
                var b = decodeURIComponent(a)
            } catch (c) {
                b = null
            } else b = a;
            else b = null;
        return b
    };
    [...(new Map([
        [8, "usca"],
        [9, "usva"],
        [10, "usco"],
        [12, "usct"]
    ]))].sort((a, b) => a[0] - b[0]).map(a => a[1]);
    const hl = Jk(Gk(1));

    function il(a) {
        try {
            if (0 === a.length) throw Error("Cannot decode empty USCA section string");
            const Cb = a.split(".");
            if (2 < Cb.length) throw Error(`Expected at most 1 sub-section but got ${Cb.length-1} when decoding ${a}`);
            let Ya = zk(Cb[0]);
            const Je = Ak(Ya.slice(0, 6));
            Ya = Ya.slice(6);
            if (1 !== Je) throw Error(`Unable to decode unsupported USCA Section specification version ${Je} - only version 1 is supported.`);
            if (Ya.length < Mk)
                if (Ya.length + 8 >= Mk) Ya += "00000000";
                else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${Mk} but was ${Ya.length+8}`);
            a = 0;
            const O = [];
            for (let La = 0; La < Lk.length; La++) {
                const fb = Lk[La];
                O.push(Ak(Ya.slice(a, a + fb)));
                a += fb
            }
            var b = Gk(Je),
                c = O.shift();
            var d = I(b, 2, c);
            var e = O.shift();
            var f = I(d, 3, e);
            var g = O.shift();
            var h = I(f, 4, g);
            var k = O.shift();
            var m = I(h, 5, k);
            var l = O.shift();
            var q = I(m, 6, l);
            var x = new Fk,
                v = O.shift();
            var w = I(x, 1, v);
            var z = O.shift();
            var C = I(w, 2, z);
            var L = O.shift();
            var M = I(C, 3, L);
            var K = O.shift();
            var tb = I(M, 4, K);
            var Xb = O.shift();
            var Yb = I(tb, 5, Xb);
            var Rd = O.shift();
            var Ja = I(Yb, 6, Rd);
            var Ic = O.shift();
            var kn = I(Ja, 7, Ic);
            var ln = O.shift();
            var mn = I(kn, 8, ln);
            var nn = O.shift();
            var on = I(mn, 9, nn);
            var pn = mc(q, 7, on);
            var qn = new Ek,
                rn = O.shift();
            var sn = I(qn, 1, rn);
            var tn = O.shift();
            var un = I(sn, 2, tn);
            var vn = mc(pn, 8, un);
            var wn = O.shift();
            var xn = I(vn, 9, wn);
            var yn = O.shift();
            var zn = I(xn, 10, yn);
            var An = O.shift();
            var Bn = I(zn, 11, An);
            var Cn = O.shift();
            var Uh = I(Bn, 12, Cn);
            if (1 === Cb.length) var Vh = Jk(Uh);
            else {
                var Dn = Jk(Uh);
                const La = zk(Cb[1]);
                if (3 > La.length) throw Error(`Invalid GPC Segment [${La}]. Expected length ${3}, but was ${La.length}.`);
                const fb = Ak(La.slice(0, 2));
                if (0 > fb || 1 < fb) throw Error(`Attempting to decode unknown GPC segment subsection type ${fb}.`);
                var En = fb + 1;
                const Fn = Ak(La.charAt(2));
                var Gn = new Ik;
                var Hn = I(Gn, 2, En);
                var In = A(Hn, 1, ub(!!Fn), !1);
                Vh = mc(Dn, 2, In)
            }
            return Vh
        } catch (Cb) {
            return null
        }
    }

    function jl(a) {
        var b = new vk;
        b = A(b, 1, Ab(1), 0);
        var c = H(B(a.g, Hk, 1), 2);
        const d = H(B(a.g, Hk, 1), 3);
        0 === c && 0 === d ? I(b, 2, 0) : 2 === c || 2 === d ? I(b, 2, 1) : I(b, 2, 2);
        c = H(B(a.g, Hk, 1), 5);
        a = H(B(a.g, Hk, 1), 6);
        0 === c && 0 === a ? I(b, 3, 0) : 1 === c || 1 === a ? I(b, 3, 2) : I(b, 3, 1);
        I(b, 4, 1);
        a = [tc(b, 1), xk[H(b, 2)], xk[H(b, 3)], xk[H(b, 4)]].join("");
        return 4 === a.length && (-1 === a.indexOf("-") || "---" === a.substring(1)) && "1" <= a[0] && "9" >= a[0] && wk.hasOwnProperty(a[1]) && wk.hasOwnProperty(a[2]) && wk.hasOwnProperty(a[3]) ? a : null
    }
    var kl = class {
        constructor(a = hl, b = new Rk) {
            this.g = a;
            this.timestamp = b
        }
        getTimestamp() {
            return this.timestamp
        }
    };
    Rc(zg).map(a => Number(a));
    Rc(Ag).map(a => Number(a));

    function ll(a) {
        a.__tcfapiPostMessageReady || ml(new nl(a))
    }

    function ml(a) {
        a.h = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f, g) => {
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f,
                    b.origin);
                return f
            }, e.parameter)
        };
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    }
    var nl = class {
        constructor(a) {
            this.g = a;
            this.h = null
        }
    };
    var ol = class extends J {
        g() {
            return $b(this, Rk, 2)
        }
    };
    var pl = class extends J {
            g() {
                return null != E(this, 1)
            }
        },
        ql = Dc(pl);
    pl.s = [2];
    var rl = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = od("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };

    function sl() {
        if (P === P.top && !P.__uspapi && !P.frames.__uspapiLocator) {
            var a = new tl;
            ul(a);
            vl(a)
        }
    }

    function ul(a) {
        !a.j || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc", rl(a.g, "__uspapiLocator"), na("__uspapi", (...b) => wl(a, ...b), a.g))
    }

    function vl(a) {
        !a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc", rl(a.g, "__tcfapiLocator"), a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [], na("__tcfapi", (...b) => xl(a, ...b), a.g), ll(a.g))
    }

    function wl(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.j
        }, !0)
    }

    function yl(a) {
        if (!a ? .g() || 0 === G(a, 1).length) return null;
        var b = D(a, ol, 2).find(c => 8 === tc(c, 1));
        b = b ? .g() ? B(b, Rk, 2) : Qk();
        a = G(a, 1);
        try {
            const c = Ck(a.split("~")[0]),
                d = a.includes("~") ? a.split("~").slice(1) : [],
                e = dc(c, 3, Bb).indexOf(8);
            return -1 === e ? null : {
                uspString: jl(new kl(il(d[e]) ? ? hl, b)),
                va: Sk(b)
            }
        } catch (c) {
            return null
        }
    }

    function zl(a) {
        a = a.find(b => 13 === H(b, 1));
        if (a ? .g()) try {
            return ql(G(a, 2))
        } catch (b) {}
        return null
    }

    function xl(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && (2.1 < c || 1 >= c)) d(null, !1);
            else switch (c = a.g.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(Al(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.1",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(Al(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function Al(a, b, c) {
        if (!a.h) return null;
        b = Zk(a.h, b);
        b.addtlConsent = null != a.i ? a.i : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class tl {
        constructor() {
            this.g = P;
            var a = gl(this.g.document);
            try {
                var b = a ? el(a) : null
            } catch (d) {
                b = null
            }(a = b) ? (b = B(a, bl, 5) || null, a = D(a, al, 7) ? ? [], a = zl(a), b = {
                Ta: b,
                Xa: a
            }) : b = {
                Ta: null,
                Xa: null
            };
            a = b;
            b = yl(a.Xa);
            a = a.Ta;
            if (a ? .g() && 0 !== G(a, 2).length) {
                var c = $b(a, Rk, 1) ? B(a, Rk, 1) : Qk();
                a = {
                    uspString: G(a, 2),
                    va: Sk(c)
                }
            } else a = null;
            this.j = a && b ? b.va > a.va ? b.uspString : a.uspString : a ? a.uspString : b ? b.uspString : null;
            this.h = (b = fl()) && null != E(b, 1) ? G(b, 1) : null;
            this.i = (b = fl()) && null != E(b, 2) ? G(b, 2) : null
        }
    };
    const Bl = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function Cl(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        pj("ama", b, .01)
    }

    function Dl(a) {
        const b = {};
        rd(Bl, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };
    const El = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        Fl = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var Gl = a => {
            a = dc(a, 2, yb);
            if (!a) return !1;
            for (let b = 0; b < a.length; b++)
                if (1 == a[b]) return !0;
            return !1
        },
        Il = (a, b) => {
            a = Fl(El(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = sd(a),
                d = Hl(a);
            return b.find(e => {
                if ($b(e, Bi, 7)) {
                    var f = B(e, Bi, 7);
                    f = Db(t(f, 1))
                } else f = Db(t(e, 1));
                e = $b(e, Bi, 7) ? rc(B(e, Bi, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        };
    const Hl = a => {
        const b = {};
        for (;;) {
            b[sd(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var Jl = a => {
        a = B(a, Ai, 3);
        return !a || qc(a, 1) <= Date.now() ? !1 : !0
    };

    function Kl(a) {
        if (U(rh)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? Ni(b) : null
        } catch (d) {
            c = null
        }
        return c
    };
    var Ll = class extends J {
        g() {
            return B(this, rk, 2)
        }
        h() {
            return F(this, 3)
        }
    };
    var Ml = class extends J {
        g() {
            return dc(this, 1, Gb)
        }
        h() {
            return B(this, Ll, 2)
        }
    };
    Ml.s = [1];
    var Nl = class extends J {
        getId() {
            return tc(this, 1)
        }
    };
    Nl.s = [2];
    var Ol = class extends J {};
    Ol.s = [2];
    var Pl = class extends J {};
    Pl.s = [2];
    var Ql = class extends J {
        g() {
            return sc(qc(this, 2))
        }
        h() {
            return sc(qc(this, 4))
        }
        i() {
            return F(this, 3)
        }
    };
    var Rl = class extends J {};
    Rl.s = [1, 4, 2, 3];
    var Tl = class extends J {
        h() {
            return vc(this, Ll, 13, Sl)
        }
        j() {
            return void 0 !== ac(this, Ll, hc(this, Sl, 13))
        }
        g() {
            return vc(this, Ml, 14, Sl)
        }
        i() {
            return void 0 !== ac(this, Ml, hc(this, Sl, 14))
        }
    };
    Tl.s = [19];
    var Sl = [13, 14];
    let Ul = void 0;

    function Vl(a) {
        Ac(Ul, te);
        Ul = a
    };

    function X(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function Wl(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ra: !0,
            Gb: b,
            ta: a.ablation_viewport_offset
        } : null
    }

    function Xl(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function Yl(a) {
        X(P).allow_second_reactive_tag = a
    }

    function Zl() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function $l(a) {
        return X(a) ? .head_tag_slot_vars ? .google_ad_host ? ? am(a)
    }

    function am(a) {
        return a.document ? .querySelector('meta[name="google-adsense-platform-account"]') ? .getAttribute("content") ? ? null
    };
    const bm = [2, 7, 1];
    var em = (a, b, c = "", d = null) => 1 === b && cm(c, d) ? !0 : dm(a, c, e => Oa(D(e, Ec, 2), f => t(f, 1) === b)),
        cm = (a, b) => b ? b.j() ? F(b.h(), 1) : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a ? F(b.g().h(), 1) : !1 : !1,
        fm = (a, b) => {
            b = tc(b, 18); - 1 !== b && (a.tmod = b)
        },
        hm = a => {
            const b = md(P) || P;
            return gm(b, a) ? !0 : dm(P, "", c => Oa(dc(c, 3, yb), d => d === a))
        };

    function gm(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Qa(a.split(","), b.toString())
    }

    function dm(a, b, c) {
        a = md(a) || a;
        const d = im(a);
        b && (b = Td(String(b)));
        return Qc(d, (e, f) => Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }

    function im(a) {
        a = jm(a);
        const b = {};
        rd(a, (c, d) => {
            try {
                const e = new Fc(c);
                b[d] = e
            } catch (e) {}
        });
        return b
    }
    var jm = a => U(kh) ? (Ac(Ul, Cc), a = gk({
        l: a,
        V: Ul
    }), null != a.g ? km(a.getValue()) : {}) : km(a.localStorage);

    function km(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Pc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function lm(a) {
        pj("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const mm = a => {
            pj("overlay_settings_from_ppabg", {
                p_s: a
            }, .01)
        },
        nm = (a, b) => {
            if ($l(n)) return bm;
            if (b ? .j()) {
                var c = G(b.h(), 9);
                b = b ? .h() ? .g() ? .h();
                if (!a || c != a || !b) return bm;
                mm(!1);
                return dc(b, 3, yb)
            }
            if (b ? .i()) {
                c = b ? .g() ? .g();
                if (!c || 1 !== c.length || !a || c[0] !== a || G(b, 17) != n.location.host) return bm;
                a = b ? .g() ? .h() ? .g() ? .h();
                if (!a) return bm;
                mm(!0);
                return dc(a, 3, yb)
            }
            return bm
        };
    var om = (a, b) => {
        const c = [];
        let d = bm;
        if (U(yh) || U(xh) || U(zh)) d = nm(a, b);
        U(yh) && !d.includes(1) && c.push(1);
        U(xh) && !d.includes(2) && c.push(2);
        U(zh) && !d.includes(7) && c.push(7);
        return c
    };

    function pm(a, b, c, d) {
        qm(new rm(a, b, c, d))
    }

    function qm(a) {
        Pg(Og(gk({
            l: a.l,
            V: F(a.g, 6)
        }), b => {
            sm(a, b, !0)
        }), () => {
            tm(a)
        })
    }

    function sm(a, b, c) {
        Pg(Og(um(b), d => {
            vm("ok");
            a.h(d, {
                fromLocalStorage: !0
            })
        }), () => {
            var d = a.l;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Cl(d, {
                    lserr: 1
                })
            }
            c ? tm(a) : a.h(null, null)
        })
    }

    function tm(a) {
        Pg(Og(wm(a), b => {
            a.h(b, {
                fromPABGSettings: !0
            })
        }), () => {
            xm(a)
        })
    }

    function um(a) {
        return (a = (a = Kl(a)) ? Jl(a) ? a : null : null) ? Jg(a) : Lg(Error("invlocst"))
    }

    function wm(a) {
        if ($l(a.l) && !F(a.g, 22)) return Lg(Error("invtag"));
        a: {
            var b = a.l;
            var c = a.i;a = a.g;
            if (a ? .j())(b = a ? .h() ? .g() ? .g()) && (0 < D(b, eh, 1).length || U(sh) && 0 < D(b, fh, 3).length) ? lm(!1) : b = null;
            else {
                if (a ? .i()) {
                    const d = a ? .g() ? .g(),
                        e = a ? .g() ? .h() ? .g() ? .g();
                    if (d && 1 === d.length && d[0] === c && e && (0 < D(e, eh, 1).length || U(sh) && 0 < D(e, fh, 3).length) && G(a, 17) === b.location.host) {
                        lm(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Mi, a = D(b, eh, 1), c = oc(c, 1, a), a = D(b, Hi, 2), c = oc(c, 7, a), U(sh) && 0 < D(b, fh, 3).length && (a = new gh, b = D(b, fh, 3), b = oc(a,
            1, b), mc(c, 6, b)), b = Jg(c)) : b = Lg(Error("invtag"));
        return b
    }

    function xm(a) {
        kk({
            l: a.l,
            V: F(a.g, 6),
            timeoutMs: 50,
            H: b => {
                ym(a, b)
            }
        })
    }

    function ym(a, b) {
        Pg(Og(b, c => {
            sm(a, c, !1)
        }), c => {
            vm(c.message);
            a.h(null, null)
        })
    }

    function vm(a) {
        pj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class rm {
        constructor(a, b, c, d) {
            this.l = a;
            this.g = b;
            this.i = c;
            this.h = d
        }
    };
    var Bm = (a, b, c, d) => {
        try {
            const e = Il(a, D(c, Hi, 7));
            if (e && Gl(e)) {
                E(e, 4) && (d = Xg(d, new Yg(null, {
                    google_package: E(e, 4)
                })));
                const f = new Kj(a, b, c, e, d);
                Xi(1E3, () => {
                    var g = new Eg;
                    (new uk(a, f, g)).start();
                    return g.h
                }, a).then(ma(zm, a), ma(Am, a))
            }
        } catch (e) {
            Cl(a, {
                atf: -1
            })
        }
    };
    const zm = a => {
            Cl(a, {
                atf: 1
            })
        },
        Am = (a, b) => {
            (a.google_ama_state = a.google_ama_state || {}).exception = b;
            Cl(a, {
                atf: 0
            })
        };

    function Cm(a) {
        a.easpi = U(Kh);
        a.asla = .4;
        a.asaa = -1;
        a.sedf = !1;
        a.asro = U(Ih);
        U(Hh) && (a.asiscm = !0);
        a.sefa = !0;
        U(Jh) && (a.sugawps = !0);
        U(Gh) && (a.sepiia = !0);
        U(Eh) && (a.ascmds = !0);
        const b = Q(Qh).i(Fh.g, Fh.defaultValue);
        b.length && (a.seiel = b.join("~"))
    };

    function Dm(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = Em(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function Em(a) {
        let b = "";
        rd(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    };
    Ta || Ea();

    function Fm() {
        const a = {};
        Q(Qh).h(nh.g, nh.defaultValue) && (a.bust = Q(Qh).h(nh.g, nh.defaultValue));
        var b = Nj();
        b = Sj(b, 38, "");
        "" !== b && (a.sbust = b);
        return a
    };
    class Gm {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function Hm() {
        const {
            promise: a,
            resolve: b
        } = new Gm;
        return {
            promise: a,
            resolve: b
        }
    };

    function Im(a = () => {}) {
        n.google_llp || (n.google_llp = {});
        const b = n.google_llp;
        let c = b[7];
        if (c) return c;
        c = Hm();
        b[7] = c;
        a();
        return c
    }

    function Jm(a) {
        return Im(() => {
            nd(n.document, a)
        }).promise
    };

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
    var Nm = a => {
        if (n.google_apltlad || n !== n.top && !U(Bh) || !a.google_ad_client) return null;
        n.google_apltlad = !0;
        const b = {
                enable_page_level_ads: {
                    pltais: !0
                },
                google_ad_client: a.google_ad_client
            },
            c = b.enable_page_level_ads;
        rd(a, (d, e) => {
            ui[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        Cm(c);
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    };

    function Om(a, b) {
        X(P).ama_ran_on_page || Xi(1001, () => {
            Pm(new Qm(a, b))
        }, n)
    }

    function Pm(a) {
        pm(a.l, a.h, a.g.google_ad_client || "", (b, c) => {
            var d = a.l,
                e = a.g;
            X(P).ama_ran_on_page || b && Rm(d, e, b, c)
        })
    }
    class Qm {
        constructor(a, b) {
            this.l = n;
            this.g = a;
            this.h = b
        }
    }

    function Rm(a, b, c, d) {
        d && (bj(a).configSourceInAbg = d);
        $b(c, Li, 24) && (d = cj(a), d.availableAbg = !0, d.ablationFromStorage = !!B(c, Li, 24) ? .g() ? .g());
        if (ea(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            if (!Il(a, D(c, Hi, 7))) {
                pj("amaait", {
                    value: "true"
                });
                return
            }
            pj("amaait", {
                value: "false"
            })
        }
        X(P).ama_ran_on_page = !0;
        B(c, zi, 15) ? .g() && (X(a).enable_overlap_observer = !0);
        var e = B(c, yi, 13);
        e && 1 === t(e, 1) ? (d = 0, (e = B(e, xi, 6)) && pc(e, 3) && (d = pc(e, 3) || 0), Xl(a, d)) : B(c, Li, 24) ? .g() ? .g() && (cj(a).ablatingThisPageview = !0, Xl(a, 1));
        Ld(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = Dl(ea(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = Xg(ah, new Yg(null, b));
        oj(782, () => {
            Bm(a, f, c, g)
        })
    };

    function Sm(a, b) {
        a = a.document;
        for (var c = void 0, d = 0; !c || a.getElementById(c + "_host");) c = "aswift_" + d++;
        a = c;
        c = Number(b.google_ad_width || 0);
        b = Number(b.google_ad_height || 0);
        d = document.createElement("div");
        d.id = a + "_host";
        const e = d.style;
        e.border = "none";
        e.height = `${b}px`;
        e.width = `${c}px`;
        e.margin = "0px";
        e.padding = "0px";
        e.position = "relative";
        e.visibility = "visible";
        e.backgroundColor = "transparent";
        e.display = "inline-block";
        return {
            qb: a,
            Ib: d
        }
    };

    function Tm({
        ua: a,
        Aa: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var Um = {
            google_analytics_domain_name: !0,
            google_analytics_uacct: !0,
            google_pause_ad_requests: !0,
            google_user_agent_client_hint: !0
        },
        Vm = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        Wm = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        Xm = a => {
            switch (a) {
                case "true":
                    return !0;
                case "false":
                    return !1;
                case "null":
                    return null;
                case "undefined":
                    break;
                default:
                    try {
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function Ym(a) {
        if (a.google_ad_client) var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars ? .google_ad_client ? ? a.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) &&
                    /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Sd() ? Vm : Wm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b);) c[d[1]] = Xm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else b = ""
            }
            b = b ? ? ""
        }
        return b
    };
    var Zm = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function $m(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function an() {
        var a = Q(Qh).i(Oh.g, Oh.defaultValue),
            b = P.document;
        if (a.length && b.head)
            for (const c of a) c && b.head && (a = od("META"), b.head.appendChild(a), a.httpEquiv = "origin-trial", a.content = c)
    }

    function bn(a, b = document) {
        return !!b.featurePolicy ? .features().includes(a)
    }

    function cn(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };
    var dn = class extends J {
        constructor() {
            super()
        }
        getVersion() {
            return G(this, 2)
        }
    };

    function en(a, b) {
        return u(a, 2, Fb(b))
    }

    function fn(a, b) {
        return u(a, 3, Fb(b))
    }

    function gn(a, b) {
        return u(a, 4, Fb(b))
    }

    function hn(a, b) {
        return u(a, 5, Fb(b))
    }

    function jn(a, b) {
        return u(a, 9, Fb(b))
    }

    function Jn(a, b) {
        return oc(a, 10, b)
    }

    function Kn(a, b) {
        return u(a, 11, ub(b))
    }

    function Ln(a, b) {
        return u(a, 1, Fb(b))
    }

    function Mn(a, b) {
        return u(a, 7, ub(b))
    }
    var Nn = class extends J {
        constructor() {
            super()
        }
    };
    Nn.s = [10, 6];
    const On = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function Pn() {
        if ("function" !== typeof P.navigator ? .userAgentData ? .getHighEntropyValues) return null;
        const a = P.google_tag_data ? ? (P.google_tag_data = {});
        if (a.uach_promise) return a.uach_promise;
        const b = P.navigator.userAgentData.getHighEntropyValues(On).then(c => {
            a.uach ? ? (a.uach = c);
            return c
        });
        return a.uach_promise = b
    }

    function Qn(a) {
        return Kn(Jn(hn(en(Ln(gn(Mn(jn(fn(new Nn, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList ? .map(b => {
            var c = new dn;
            c = u(c, 1, Fb(b.brand));
            return u(c, 2, Fb(b.version))
        }) || []), a.wow64 || !1)
    }

    function Rn() {
        return Pn() ? .then(a => Qn(a)) ? ? null
    };

    function Sn(a, b) {
        b.google_ad_host || (a = am(a)) && (b.google_ad_host = a)
    }

    function Tn(a, b, c = "") {
        P.google_sa_impl && !P.document.getElementById("google_shimpl") && (delete P.google_sa_queue, delete P.google_sa_impl);
        P.google_sa_queue || (P.google_sa_queue = [], P.google_process_slots = W.oa(215, () => {
            Un(P.google_sa_queue)
        }), a = Vn(c, a, b), nd(P.document, a).id = "google_shimpl")
    }

    function Un(a) {
        const b = a.shift();
        "function" === typeof b && W.ea(216, b);
        a.length && n.setTimeout(W.oa(215, () => {
            Un(a)
        }), 0)
    }

    function Wn(a, b) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? b() : a.google_sa_queue.push(b)
    }

    function Vn(a, b, c) {
        b = F(c, 4) ? b.Cb : b.Db;
        const d = {};
        a: {
            if (F(c, 4)) {
                if (a = a || Ym(P)) {
                    a = {
                        client: a,
                        plah: P.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        Xn(a, d);
        Xn(Fm(), d);
        return Vc(b, d)
    }

    function Xn(a, b) {
        rd(a, (c, d) => {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function Yn(a) {
        a: {
            var b = [n.top];
            var c = [];
            let e = 0,
                f;
            for (; f = b[e++];) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g) b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++) try {
                var d = b[c].frames.google_esf;
                if (d) {
                    Jd = d;
                    break a
                }
            } catch (g) {}
            Jd = null
        }
        if (Jd) return null;d = od("IFRAME");d.id = "google_esf";d.name = "google_esf";a = U(Dh) ? a.Jb : a.Kb;U(vh) && (a = Vc(a, {
            hello: "world"
        }));d.src = Xc(a).toString();d.style.display = "none";
        return d
    }

    function Zn(a, b, c, d) {
        const {
            qb: e,
            Ib: f
        } = Sm(a, b);
        c.appendChild(f);
        $n(a, c, b);
        c = b.google_start_time ? ? pa;
        const g = (new Date).getTime();
        b.google_lrv = Tm({
            ua: "m202310100101",
            Aa: G(d, 2)
        });
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        Wn(a, () => {
            var h = f;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"), null == h) throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) &&
            W.aa(911, h)
        })
    }

    function $n(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Zm[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = sd(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let m = 0; m < h.length; ++m) {
                            const l = h[m];
                            if (l.nodeName && l.nodeName.toString().toLowerCase() === g) {
                                if (b === l) {
                                    g = "." + k;
                                    break a
                                }++k
                            }
                        }
                    }
                    g =
                    ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a) try {
                let h = a.parent;
                for (d = 0; h && h !== a && 25 > d; ++d) {
                    const k = h.frames;
                    for (f = 0; f < k.length; ++f)
                        if (a === k[f]) {
                            e.push(f);
                            break
                        }
                    a = h;
                    h = a.parent
                }
            } catch (h) {}
            c.google_ad_dom_fingerprint = sd(b + e.join()).toString()
        }
    }

    function ao() {
        var a = md(n);
        a && (a = Km(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function bo() {
        const a = Rn();
        null != a && a.then(b => {
            a: {
                ib = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), Lb);
                    break a
                } finally {
                    ib = !1
                }
                c = void 0
            }
            P.google_user_agent_client_hint = c
        });
        an()
    };

    function co(a) {
        return b => !!(b.fa & a)
    }
    class Y extends mi {
        constructor(a, b, c, d = !1) {
            super(a, b);
            this.fa = c;
            this.ub = d
        }
        pa() {
            return this.fa
        }
        h(a, b, c) {
            if (!b.google_ad_resize || U(wh)) c.style.height = this.height() + "px", b.rpe = !0
        }
    };
    const eo = {
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
        fo = {
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
        go = {
            pub_control_image_stacked: 100,
            pub_control_image_sidebyside: 200,
            pub_control_image_card_stacked: 150,
            pub_control_image_card_sidebyside: 250,
            pub_control_text: 100,
            pub_control_text_card: 150
        };

    function ho(a) {
        var b = 0;
        a.T && b++;
        a.K && b++;
        a.L && b++;
        if (3 > b) return {
            O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.T.split(",");
        const c = a.L.split(",");
        a = a.K.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
        };
        const d = [],
            e = [];
        for (let g = 0; g <
            b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f) return {
                O: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
            };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f) return {
                O: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
            };
            e.push(f)
        }
        return {
            L: d,
            K: e,
            ab: b
        }
    }

    function io(a) {
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
    const jo = Sa("script");

    function ko(a, b, c) {
        null != a.fa && (c.google_responsive_formats = a.fa);
        null != a.P && (c.google_safe_for_responsive_override = a.P);
        null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.h));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        const e = a.size().height();
        if (!c.google_ad_resize || U(wh)) {
            c.google_ad_width = d;
            c.google_ad_height = e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.v;
            null != a.g && (c.armr = a.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.A && (c.gfwroml = a.A);
        null != a.B && (c.gfwromr = a.B);
        null != a.j && (c.gfwroh = a.j);
        null != a.m && (c.gfwrow = a.m);
        null != a.G && (c.gfwroz = a.G);
        b = md(window) || window;
        Dm(b.location, "google_responsive_dummy_ad") && (Qa([1, 2, 3, 4, 5, 6, 7, 8], a.v) || 1 ===
            a.g) && 2 !== a.g && (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }), c.dash = `<${jo}>window.top.postMessage('${a}', '*'); 
          </${jo}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x${e}</p> 
            <p>Rendered size:${d}x${e}</p> 
          </div>`)
    }
    class lo {
        constructor(a, b, c = null, d = null, e = null, f = null, g = null, h = null, k = null, m = null, l = null, q = null) {
            this.v = a;
            this.U = b;
            this.fa = c;
            this.g = d;
            this.P = e;
            this.h = f;
            this.i = g;
            this.A = h;
            this.B = k;
            this.j = m;
            this.m = l;
            this.G = q
        }
        size() {
            return this.U
        }
    };
    const mo = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var no = class extends mi {
            g(a) {
                return Math.min(1200, Math.max(this.J, Math.round(a)))
            }
        },
        qo = (a, b) => {
            oo(a, b);
            if ("pedestal" == b.google_content_recommendation_ui_type) return new lo(9, new no(a, Math.floor(a * b.google_phwr)));
            var c = ed();
            468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * eo.mobile_banner_image_sidebyside + fo.mobile_banner_image_sidebyside) + 96), a = {
                ca: a,
                ba: c,
                K: 1,
                L: 12,
                T: "mobile_banner_image_sidebyside"
            }) : (a = io(a), a = {
                ca: a.width,
                ba: a.height,
                K: 1,
                L: 13,
                T: "image_sidebyside"
            }) : (a = io(a), a = {
                ca: a.width,
                ba: a.height,
                K: 4,
                L: 2,
                T: "image_stacked"
            });
            po(b, a);
            return new lo(9, new no(a.ca, a.ba))
        },
        ro = (a, b) => {
            oo(a, b);
            var c = ho({
                L: b.google_content_recommendation_rows_num,
                K: b.google_content_recommendation_columns_num,
                T: b.google_content_recommendation_ui_type
            });
            if (c.O) a = {
                ca: 0,
                ba: 0,
                K: 0,
                L: 0,
                T: "image_stacked",
                O: c.O
            };
            else {
                var d = 2 === c.ab.length && 468 <= a ? 1 : 0;
                var e = c.ab[d];
                e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
                var f = go[e];
                let g = c.K[d];
                for (; a / g < f && 1 < g;) g--;
                f = g;
                d = c.L[d];
                c = Math.floor(((a - 8 * f - 8) / f * eo[e] + fo[e]) *
                    d + 8 * d + 8);
                a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    Eb: "Calculated slot width is too large: " + a
                } : 1500 < c ? {
                    width: 0,
                    height: 0,
                    Eb: "Calculated slot height is too large: " + c
                } : {
                    width: a,
                    height: c
                };
                a = {
                    ca: a.width,
                    ba: a.height,
                    K: f,
                    L: d,
                    T: e
                }
            }
            if (a.O) throw new V(a.O);
            po(b, a);
            return new lo(9, new no(a.ca, a.ba))
        };

    function oo(a, b) {
        if (0 >= a) throw new V("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function po(a, b) {
        a.google_content_recommendation_ui_type = b.T;
        a.google_content_recommendation_columns_num = b.K;
        a.google_content_recommendation_rows_num = b.L
    };
    class so extends mi {
        g() {
            return this.J
        }
        h(a, b, c) {
            li(a, c);
            if (!b.google_ad_resize || U(wh)) c.style.height = this.height() + "px", b.rpe = !0
        }
    };
    const to = {
        "image-top": a => 600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a => 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a => 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a => 500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a => 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var uo = class extends mi {
            g() {
                return Math.min(1200, this.J)
            }
        },
        vo = (a, b, c, d, e) => {
            var f = e.google_ad_layout || "image-top";
            if ("in-article" == f) {
                var g = a;
                if ("false" == e.google_full_width_responsive) a = g;
                else if (a = gi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
                else if (a = $h(b))
                    if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                        b: {
                            g = c;
                            for (let h = 0; 100 > h && g.parentElement; ++h) {
                                const k = g.parentElement.childNodes;
                                for (let m = 0; m < k.length; ++m) {
                                    const l = k[m];
                                    if (l != g && ji(b, l)) break b
                                }
                                g = g.parentElement;
                                g.style.width = "100%";
                                g.style.height = "auto"
                            }
                        }
                        li(b, c)
                    }
                else a = g;
                else a = g
            }
            if (250 > a) throw new V("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
            a = Math.min(1200, Math.floor(a));
            if (d && "in-article" != f) {
                f = Math.ceil(d);
                if (50 > f) throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                return new lo(11, new mi(a, f))
            }
            if ("in-article" != f && (d = e.google_ad_layout_key)) {
                f = "" + d;
                c = Math.pow(10, 3);
                if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                    for (b = [], g = 0; g < e; g++) b.push(parseInt(d[g], 36) / c);
                else b = null;
                if (!b) throw new V("Invalid data-ad-layout-key value: " + f);
                f = (a + -725) / 1E3;
                c = 0;
                d = 1;
                e = b.length;
                for (g = 0; g < e; g++) c += b[g] * d, d *= f;
                f = Math.ceil(1E3 * c - -725 + 10);
                if (isNaN(f)) throw new V("Invalid height: height=" + f);
                if (50 > f) throw new V("Fluid responsive ads must be at least 50px tall: height=" + f);
                if (1200 < f) throw new V("Fluid responsive ads must be at most 1200px tall: height=" + f);
                return new lo(11, new mi(a, f))
            }
            d = to[f];
            if (!d) throw new V("Invalid data-ad-layout value: " + f);
            c = pi(c, b);
            b = $h(b);
            b = "in-article" !== f ||
                c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
            return new lo(11, "in-article" == f ? new uo(a, b) : new mi(a, b))
        };
    var wo = a => b => {
            for (let c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        },
        yo = (a, b) => {
            var c = xo.slice(0);
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
    var Z = [new Y(970, 90, 2), new Y(728, 90, 2), new Y(468, 60, 2), new Y(336, 280, 1), new Y(320, 100, 2), new Y(320, 50, 2), new Y(300, 600, 4), new Y(300, 250, 1), new Y(250, 250, 1), new Y(234, 60, 2), new Y(200, 200, 1), new Y(180, 150, 1), new Y(160, 600, 4), new Y(125, 125, 1), new Y(120, 600, 4), new Y(120, 240, 4), new Y(120, 120, 1, !0)],
        xo = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    var Ao = (a, b, c, d, e) => {
            "false" == e.google_full_width_responsive ? c = {
                C: a,
                D: 1
            } : "autorelaxed" == b && e.google_full_width_responsive || zo(b) || e.google_ad_resize ? (b = hi(a, c, d, e), c = !0 !== b ? {
                C: a,
                D: b
            } : {
                C: $h(c) || a,
                D: !0
            }) : c = {
                C: a,
                D: 2
            };
            const {
                C: f,
                D: g
            } = c;
            return !0 !== g ? {
                C: a,
                D: g
            } : d.parentElement ? {
                C: f,
                D: g
            } : {
                C: a,
                D: g
            }
        },
        Do = (a, b, c, d, e) => {
            const {
                C: f,
                D: g
            } = oj(247, () => Ao(a, b, c, d, e));
            var h = !0 === g;
            const k = N(d.style.width),
                m = N(d.style.height),
                {
                    Z: l,
                    W: q,
                    pa: x,
                    Za: v
                } = Bo(f, b, c, d, e, h);
            h = Co(b, x);
            var w;
            const z = (w = ni(d, c, "marginLeft", N)) ? w + "px" :
                "",
                C = (w = ni(d, c, "marginRight", N)) ? w + "px" : "";
            w = ni(d, c, "zIndex") || "";
            return new lo(h, l, x, null, v, g, q, z, C, m, k, w)
        },
        zo = a => "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a),
        Bo = (a, b, c, d, e, f) => {
            b = Eo(c, a, b);
            let g;
            var h = !1;
            let k = !1;
            var m = 488 > $h(c);
            if (m) {
                g = bi(d, c);
                var l = pi(d, c);
                h = !l && g;
                k = l && g
            }
            l = [oi(a), co(b)];
            l.push(ri(m, c, d, k));
            null != e.google_max_responsive_height && l.push(si(e.google_max_responsive_height));
            m = [w => !w.ub];
            if (h || k) h = ti(c, d), m.push(si(h));
            let q = yo(wo(l), wo(m));
            if (!q) throw new V("No slot size for availableWidth=" +
                a);
            const {
                Z: x,
                W: v
            } = oj(248, () => {
                var w;
                a: if (f) {
                    if (e.gfwrnh && (w = N(e.gfwrnh))) {
                        w = {
                            Z: new so(a, w),
                            W: !0
                        };
                        break a
                    }
                    w = a / 1.2;
                    var z = Math;
                    var C = z.min;
                    if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var L = Infinity;
                    else {
                        L = d;
                        let K = Infinity;
                        do {
                            var M = ni(L, c, "height", N);
                            M && (K = Math.min(K, M));
                            (M = ni(L, c, "maxHeight", N)) && (K = Math.min(K, M))
                        } while ((L = L.parentElement) && "HTML" != L.tagName);
                        L = K
                    }
                    z = C.call(z, w, L);
                    if (z < .5 * w || 100 > z) z = w;
                    w = {
                        Z: new so(a, Math.floor(z)),
                        W: z < w ? 102 : !0
                    }
                } else w = {
                    Z: q,
                    W: 100
                };
                return w
            });
            return "in-article" ===
                e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
                    Z: Fo(a, c, d, x, e),
                    W: !1,
                    pa: b,
                    Za: g
                } : {
                    Z: x,
                    W: v,
                    pa: b,
                    Za: g
                }
        };
    const Co = (a, b) => {
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
        Eo = (a, b, c) => {
            if ("auto" == c) c = Math.min(1200, $h(a)), b = .25 >= b / c ? 4 : 3;
            else {
                b = 0;
                for (let d in Xh) - 1 != c.indexOf(d) && (b |= Xh[d])
            }
            return b
        },
        Fo = (a, b, c, d, e) => {
            const f = e.google_ad_height || ni(c, b, "height", N);
            b = vo(a, b, c, f, e).size();
            return b.J * b.height() > a * d.height() ? new Y(b.J, b.height(), 1) : d
        };
    var Go = (a, b, c, d, e) => {
        var f;
        (f = $h(b)) ? 488 > $h(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, li(b, c), f = {
            C: f,
            D: !0
        }) : f = {
            C: a,
            D: 5
        } : f = {
            C: a,
            D: 4
        }: f = {
            C: a,
            D: 10
        };
        const {
            C: g,
            D: h
        } = f;
        if (!0 !== h || a == g) return new lo(12, new mi(a, d), null, null, !0, h, 100);
        const {
            Z: k,
            W: m,
            pa: l
        } = Bo(g, "auto", b, c, e, !0);
        return new lo(1, k, l, 2, !0, h, m)
    };
    var Io = (a, b) => {
            const c = b.google_ad_format;
            if ("autorelaxed" == c) {
                a: {
                    if ("pedestal" != b.google_content_recommendation_ui_type)
                        for (const d of mo)
                            if (null != b[d]) {
                                a = !0;
                                break a
                            }
                    a = !1
                }
                return a ? 9 : 5
            }
            if (zo(c)) return 1;
            if ("link" === c) return 4;
            if ("fluid" == c) return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (Ho(b), 1);
            if (27 === b.google_reactive_ad_format) return Ho(b), 1
        },
        Ko = (a, b, c, d, e = !1) => {
            e = b.offsetWidth || (c.google_ad_resize || e) && ni(b, d, "width",
                N) || c.google_ad_width || 0;
            4 === a && (c.google_ad_format = "auto", a = 1);
            var f = (f = Jo(a, e, b, c, d)) ? f : Do(e, c.google_ad_format, d, b, c);
            f.size().h(d, c, b);
            ko(f, e, c);
            1 != a && (a = f.size().height(), b.style.height = a + "px")
        };
    const Jo = (a, b, c, d, e) => {
            const f = d.google_ad_height || ni(c, e, "height", N);
            switch (a) {
                case 5:
                    const {
                        C: g,
                        D: h
                    } = oj(247, () => Ao(b, d.google_ad_format, e, c, d));
                    !0 === h && b != g && li(e, c);
                    !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = h);
                    return qo(g, d);
                case 9:
                    return ro(b, d);
                case 8:
                    return vo(b, e, c, f, d);
                case 10:
                    return Go(b, e, c, f, d)
            }
        },
        Ho = a => {
            a.google_ad_format = "auto";
            a.armr = 3
        };

    function Lo(a, b) {
        a.google_resizing_allowed = !0;
        a.ovlp = !0;
        a.google_ad_format = "auto";
        a.iaaso = !0;
        a.armr = b
    };

    function Mo(a, b) {
        var c = md(b);
        if (c) {
            c = $h(c);
            const d = pd(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };

    function No(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return /^true$/.test(b);
            default:
                return b
        }
    }

    function Oo(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "",
                d = id(c, "client");
            d && (b.google_ad_client = No("google_ad_client", d));
            (c = id(c, "host")) && (b.google_ad_host = No("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = ra(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = No(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function Po(a) {
        if (a = Md(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function Qo(a, b, c, d) {
        Oo(a, b);
        if (c.document && c.document.body && !Io(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Mo(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Zm[e + "x" + g];
                var h = f;
                if (e) {
                    const k = $m(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new V("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                U(wh) ? Lo(b, 4) : (h = Do(f, "auto", c, a, b),
                    g = f, h.size().h(c, b, a), ko(h, g, b), g = h.size(), b.google_responsive_formats = null, U(Ah) && (b.ovlp = !0), g.J > f && !e && (b.google_ad_width = g.J, a.style.width = `${g.J}px`))
            }
        }
        if (488 > $h(c)) {
            f = md(c) || c;
            (e = a.offsetWidth) || (e = ni(a, c, "width", N));
            e = e || b.google_ad_width || 0;
            g = b.google_ad_client;
            if (d = Dm(f.location, "google_responsive_slot_preview") || U(Ch) || em(f, 1, g, d)) b: if (b.google_reactive_ad_format || b.google_ad_resize || Io(c, b) || di(a, b)) d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = pd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Qa(["static",
                                "relative"
                            ], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = gi(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d, d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (Lo(b, 1), d = !0) : d = !1
        } else d = !1;
        if (e = Io(c, b)) Ko(e, a, b, c, d);
        else {
            if (di(a, b)) {
                if (d = pd(a, c)) a.style.width = d.width, a.style.height = d.height, ci(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = Po(c)
            } else ci(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 ==
                b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Ko(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = hi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };
    async function Ro(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function So(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = Cd(a.l)
    }

    function To(a) {
        const b = a.g.wpc;
        return null !== b && "" !== b ? b : a.g.wpc = Ym(a.l)
    }

    function Uo(a, b) {
        var c = new Ze;
        var d = So(a);
        c = wc(c, 1, d);
        d = To(a);
        c = yc(c, 2, d);
        c = wc(c, 3, a.g.sd);
        return wc(c, 7, Math.round(b || a.l.performance.now()))
    }
    async function Vo(a) {
        await Ro(a.l, () => !(!So(a) || !To(a)))
    }

    function Wo(a) {
        var b = Q(Xo);
        b.j && oj(1178, () => {
            const c = b.v;
            a(c);
            b.g.psi = c.toJSON()
        })
    }
    async function Yo(a) {
        var b = Q(Xo);
        if (b.j && !b.g.le.includes(1)) {
            b.g.le.push(1);
            var c = b.l.performance.now();
            await Vo(b);
            a = Oe(Pe(Re(new Se, a), Me(Le(new Ne, Zh(b.l).scrollWidth), Zh(b.l).scrollHeight)), Me(Le(new Ne, $h(b.l)), Zh(b.l).clientHeight));
            var d = new Ue;
            U(oh) ? (yc(a, 4, b.i), yc(d, 1, b.i)) : (yc(a, 4, b.l ? .document ? .URL), yc(d, 1, b.l ? .document ? .URL));
            var e = ai(b.l);
            0 !== e && Qe(a, Ie(e));
            Af(b.h, Xe(Uo(b, c), a));
            c = () => {
                try {
                    if (null != b.g ? .psi) {
                        var f = zc(Te, Tb(b.g.psi));
                        mc(d, 2, f)
                    }
                } catch {}
                f = b.h;
                var g = Uo(b);
                g = nc(g, 8, Ye, d);
                Af(f, g)
            };
            U(ph) ? Lf(b.m, c, 9) : Pf(b.h, b.l, c)
        }
    }
    async function Zo(a, b, c) {
        if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.l.performance.now();
            await Vo(a);
            var e = a.h;
            a = Uo(a, d);
            d = new He;
            b = I(d, 1, b);
            c = ec(b, 2, c, zb);
            c = nc(a, 9, Ye, c);
            Af(e, c)
        }
    }
    async function $o(a, b) {
        await Vo(a);
        var c = a.h;
        a = Uo(a);
        a = wc(a, 3, 1);
        b = nc(a, 10, Ye, b);
        Af(c, b)
    }
    var Xo = class {
        constructor(a, b) {
            this.l = Nd() || window;
            this.m = U(ph) ? b ? ? new Mf(this.l) : void 0;
            this.h = a ? ? new Rf(2, "m202310100101", 100, 100, !0, this.m);
            this.g = Qj(Nj(), 33, () => {
                const c = Q(Qh).g(mh.g, mh.defaultValue);
                return {
                    sd: c,
                    ssp: 0 < c && qd() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null
                }
            })
        }
        get j() {
            return this.g.ssp
        }
        get i() {
            return this.g.cu
        }
        set i(a) {
            this.g.cu = a
        }
        get v() {
            return null === this.g.psi ? new Te : zc(Te, Tb(this.g.psi))
        }
    };

    function ap() {
        var a = window;
        return "on" === n.google_adtest || "on" === n.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") ? a.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(b => Math.floor(Number(b))).filter(b => !isNaN(b) && 0 < b) || [] : []
    };

    function bp(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function cp(a) {
        var b = P.document;
        if (b.currentScript) return bp(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === bp(c, a)) return 0;
        return 1
    };

    function dp(a, b) {
        return {
            [3]: {
                [55]: () => 0 === a,
                [23]: c => em(P, Number(c)),
                [24]: c => hm(Number(c)),
                [61]: () => F(b, 6),
                [63]: () => F(b, 6) || ".google.ch" === G(b, 8)
            },
            [4]: {},
            [5]: {
                [6]: () => G(b, 15)
            }
        }
    };

    function ep(a = n) {
        return a.ggeac || (a.ggeac = {})
    };

    function fp(a, b) {
        try {
            const d = a.split(".");
            a = n;
            let e = 0,
                f;
            for (; null != a && e < d.length; e++) f = a, a = a[d[e]], "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b) return c
        } catch {}
    }
    var gp = {
        [3]: {
            [8]: a => {
                try {
                    return null != ba(a)
                } catch {}
            },
            [9]: a => {
                try {
                    var b = ba(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b) b = b && b.toString && b.toString(), a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            },
            [10]: () => window === window.top,
            [6]: a => Qa(Q(tg).g(), Number(a)),
            [27]: a => {
                a = fp(a, "boolean");
                return void 0 !== a ? a : void 0
            },
            [60]: a => {
                try {
                    return !!n.document.querySelector(a)
                } catch {}
            },
            [69]: a => bn(a, n.document),
            [70]: a => cn(a, n.document)
        },
        [4]: {
            [3]: () => xd(),
            [6]: a => {
                a = fp(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: () => window.location.href,
            [3]: () => {
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            },
            [4]: a => {
                a = fp(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };

    function hp(a, b) {
        const c = new Map;
        for (const [f, g] of a[1].entries()) {
            var d = f,
                e = g;
            const {
                hb: h,
                bb: k,
                eb: m
            } = e[e.length - 1];
            c.set(d, h + k * m)
        }
        for (const f of b)
            for (const g of D(f, Ol, 2))
                if (0 !== D(g, Nl, 2).length) {
                    b = sc(Db(t(g, 8)));
                    H(g, 4) && !H(g, 13) && (b = c.get(H(g, 4)) ? ? 0, d = sc(Db(t(g, 1))) * D(g, Nl, 2).length, c.set(H(g, 4), b + d));
                    d = [];
                    for (e = 0; e < D(g, Nl, 2).length; e++) {
                        const h = {
                            hb: b,
                            bb: sc(Db(t(g, 1))),
                            eb: D(g, Nl, 2).length,
                            yb: e,
                            Wa: H(f, 1),
                            qa: g,
                            R: D(g, Nl, 2)[e]
                        };
                        d.push(h)
                    }
                    ip(a[2], H(g, 10), d) || ip(a[1], H(g, 4), d) || ip(a[0], D(g, Nl, 2)[0].getId(),
                        d)
                }
        return a
    }

    function ip(a, b, c) {
        if (!b) return !1;
        a.has(b) || a.set(b, []);
        a.get(b).push(...c);
        return !0
    };

    function jp(a = qd()) {
        return b => sd(`${b} + ${a}`) % 1E3
    };
    const kp = [12, 13, 20];

    function lp(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        a.includes(b) || a.push(b)
    }

    function mp(a, b, c, d) {
        const e = [];
        var f;
        if (f = 9 !== b) a.j[b] ? f = !0 : (a.j[b] = !0, f = !1);
        if (f) return Tf(a.M, b, c, e, [], 4), e;
        f = kp.includes(b);
        const g = [],
            h = Q(Xf).F,
            k = [];
        for (const x of [0, 1, 2])
            for (const [v, w] of a.ka[x].entries()) {
                var m = v,
                    l = w;
                const z = new df;
                var q = l.filter(C => C.Wa === b && !!a.h[C.R.getId()] && Be(B(C.qa, ue, 3), h) && Be(B(C.R, ue, 3), h));
                if (q.length)
                    for (const C of q) k.push(C.R);
                else if (!a.xa && (2 === x ? (q = d[1], fc(z, 2, ef, xb(m))) : q = d[0], m = q ? .(String(m)) ? ? (2 === x && 1 === H(l[0].qa, 11) ? void 0 : d[0](String(m))), void 0 !== m)) {
                    for (const C of l)
                        if (C.Wa ===
                            b) {
                            l = m - C.hb;
                            q = C.bb;
                            const L = C.eb,
                                M = C.yb;
                            0 <= l && l < q * L && l % L === M && Be(B(C.qa, ue, 3), h) && Be(B(C.R, ue, 3), h) && (l = H(C.qa, 13), 0 !== l && void 0 !== l && (q = a.i[String(l)], void 0 !== q && q !== C.R.getId() ? Vf(a.M, a.i[String(l)], C.R.getId(), l) : a.i[String(l)] = C.R.getId()), k.push(C.R))
                        }
                    0 !== ic(z, ef) && (A(z, 3, Ab(m), 0), g.push(z))
                }
            }
        for (const x of k) d = x.getId(), e.push(d), lp(a, d, f ? 4 : c), kg(D(x, Ee, 2), f ? mg() : [c], a.M, d);
        Tf(a.M, b, c, e, g, 1);
        return e
    }

    function np(a, b) {
        b = b.map(c => new Pl(c)).filter(c => !kp.includes(H(c, 1)));
        a.ka = hp(a.ka, b)
    }

    function op(a, b) {
        R(1, c => {
            a.h[c] = !0
        }, b);
        R(2, (c, d, e) => mp(a, c, d, e), b);
        R(3, c => (a.g[c] || []).concat(a.g[4]), b);
        R(12, c => void np(a, c), b);
        R(16, (c, d) => void lp(a, c, d), b)
    }
    var pp = class {
        constructor(a, b, c, {
            xa: d = !1,
            oc: e = []
        } = {}) {
            this.ka = a;
            this.M = c;
            this.j = {};
            this.xa = d;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            this.i = {};
            if (a = $d()) {
                a = a.split(",") || [];
                for (const f of a)(a = Number(f)) && (this.h[a] = !0)
            }
            for (const f of e) this.h[f] = !0
        }
    };

    function qp(a, b) {
        a.g = og(14, b, () => {})
    }
    class rp {
        constructor() {
            this.g = () => {}
        }
    }

    function sp(a) {
        Q(rp).g(a)
    };

    function tp({
        pb: a,
        F: b,
        config: c,
        lb: d = ep(),
        mb: e = 0,
        M: f = new Wf(B(a, Ql, 5) ? .g() ? ? 0, B(a, Ql, 5) ? .h() ? ? 0, B(a, Ql, 5) ? .i() ? ? !1),
        ka: g = hp({
            [0]: new Map,
            [1]: new Map,
            [2]: new Map
        }, D(a, Pl, 2))
    }) {
        d.hasOwnProperty("init-done") ? (og(12, d, () => {})(D(a, Pl, 2).map(h => h.toJSON())), og(13, d, () => {})(D(a, Ee, 1).map(h => h.toJSON()), e), b && og(14, d, () => {})(b), up(e, d)) : (op(new pp(g, e, f, c), d), pg(d), qg(d), rg(d), up(e, d), kg(D(a, Ee, 1), [e], f, void 0, !0), Yf = Yf || !(!c || !c.tb), sp(gp), b && sp(b))
    }

    function up(a, b = ep()) {
        sg(Q(tg), b, a);
        vp(b, a);
        qp(Q(rp), b);
        Q(Qh).m()
    }

    function vp(a, b) {
        const c = Q(Qh);
        c.j = (d, e) => og(5, a, () => !1)(d, e, b);
        c.g = (d, e) => og(6, a, () => 0)(d, e, b);
        c.h = (d, e) => og(7, a, () => "")(d, e, b);
        c.i = (d, e) => og(8, a, () => [])(d, e, b);
        c.m = () => {
            og(15, a, () => {})(b)
        }
    };

    function wp(a, b) {
        b = {
            [0]: jp(Cd(b).toString())
        };
        b = Q(tg).j(a, b);
        xg.aa(1085, Zo(Q(Xo), a, b))
    }
    var xp = (a, b, c) => {
        var d = X(a);
        if (d.plle) up(1, ep(a));
        else {
            d.plle = !0;
            d = B(b, Rl, 12);
            var e = F(b, 9);
            tp({
                pb: d,
                F: dp(c, b),
                config: {
                    xa: e && !!a.google_disable_experiments,
                    tb: e
                },
                lb: ep(a),
                mb: 1
            });
            if (c = G(b, 15)) c = Number(c), Q(tg).i(c);
            for (const f of dc(b, 19, Bb)) Q(tg).h(f);
            wp(12, a);
            wp(10, a);
            a = md(a) || a;
            Dm(a.location, "google_mc_lab") && Q(tg).h(44738307);
            Dm(a.location, "google_auto_storify_swipeable") && Q(tg).h(44773747);
            Dm(a.location, "google_auto_storify_scrollable") && Q(tg).h(44773746)
        }
    };

    function yp(a) {
        W.Ba(b => {
            b.shv = String(a);
            b.mjsv = Tm({
                ua: "m202310100101",
                Aa: a
            });
            const c = Q(tg).g(),
                d = ap();
            b.eid = c.concat(d).join(",")
        })
    };

    function zp(a) {
        var b = W;
        try {
            return Ac(a, se), new Tl(JSON.parse(a))
        } catch (c) {
            b.I(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new Tl
    };

    function Ap(a) {
        if (a.g) return a.g;
        a.v && a.v(a.h) ? a.g = a.h : a.g = wd(a.h, a.B);
        return a.g ? ? null
    }
    var Bp = class extends Ef {
        constructor(a, b) {
            super();
            this.B = a;
            this.v = b;
            this.A = new Map;
            this.j = new Map;
            this.h = P
        }
    };
    const Cp = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.H({
                    consentData: c ? ? void 0,
                    ob: d ? void 0 : 2
                })
            })
        },
        Dp = {
            vb: a => a.H,
            wb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            zb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    ob: b.success ? void 0 : 2
                })
            }
        };
    var Ep = class extends Ef {
        constructor() {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new Bp("__uspapiLocator", a => "function" === typeof a.__uspapi);
            this.caller.A.set("getDataWithCallback", Cp);
            this.caller.j.set("getDataWithCallback", Dp)
        }
    };
    var Fp = Dc(class extends J {});
    const Gp = (a, b) => {
            const c = {
                cb: d => {
                    d = Fp(d);
                    b.H({
                        consentData: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        Hp = {
            vb: a => a.H,
            wb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            zb: (a, b) => {
                a({
                    consentData: b
                })
            }
        };
    var Ip = class extends Ef {
        constructor() {
            super();
            this.g = this.h = !1;
            this.caller = new Bp("googlefcPresent");
            this.caller.A.set("getDataWithCallback", Gp);
            this.caller.j.set("getDataWithCallback", Hp)
        }
    };
    var Jp = a => {
        Nc(window, "message", b => {
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }!c || "sc-cnf" !== c.googMsgType || a(c, b)
        })
    };

    function Kp(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function Lp(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function Mp() {
        const a = new Set,
            b = Cj();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function Np(a) {
        a = a.id;
        return null != a && (Mp().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function Op(a, b, c) {
        if (!a.sources) return !1;
        switch (Pp(a)) {
            case 2:
                const d = Qp(a);
                if (d) return c.some(f => Rp(d, f));
                break;
            case 1:
                const e = Sp(a);
                if (e) return b.some(f => Rp(e, f))
        }
        return !1
    }

    function Pp(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function Sp(a) {
        return Tp(a, b => b.currentRect)
    }

    function Qp(a) {
        return Tp(a, b => b.previousRect)
    }

    function Tp(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Rp(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function Up() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(Np),
            b = [...Mp()].map(c => document.getElementById(c)).filter(c => null !== c);
        Vp = window.scrollX;
        Wp = window.scrollY;
        return Xp = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function Yp() {
        var a = new Zp;
        if (U($k)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                a.Da.Va && b.push("event");
                for (const c of b) b = {
                    type: c,
                    buffered: !0
                }, "event" === c && (b.durationThreshold = 40), $p(a).observe(b);
                aq(a)
            }
        }
    }

    function $p(a) {
        a.M || (a.M = new PerformanceObserver(Wi(640, b => {
            const c = Vp !== window.scrollX || Wp !== window.scrollY ? [] : Xp,
                d = Up();
            for (const f of b.getEntries()) switch (b = f.entryType, b) {
                case "layout-shift":
                    b = a;
                    if (!f.hadRecentInput) {
                        b.A += Number(f.value);
                        Number(f.value) > b.P && (b.P = Number(f.value));
                        b.U += 1;
                        var e = Op(f, c, d);
                        e && (b.m += f.value, b.La++);
                        if (5E3 < f.startTime - b.Ka || 1E3 < f.startTime - b.Na) b.Ka = f.startTime, b.g = 0, b.j = 0;
                        b.Na = f.startTime;
                        b.g += f.value;
                        e && (b.j += f.value);
                        b.g > b.sa && (b.sa = b.g, b.Qa = b.j, b.Pa = f.startTime +
                            f.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = f;
                    a.Ja = Math.floor(b.renderTime || b.loadTime);
                    a.Ia = b.size;
                    break;
                case "first-input":
                    b = f;
                    a.Fa = Number((b.processingStart - b.startTime).toFixed(3));
                    a.Ga = !0;
                    break;
                case "longtask":
                    b = Math.max(0, f.duration - 50);
                    a.v += b;
                    a.G = Math.max(a.G, b);
                    a.ra += 1;
                    break;
                case "event":
                    bq(a, f);
                    break;
                default:
                    jd(b, void 0)
            }
        })));
        return a.M
    }

    function aq(a) {
        const b = Wi(641, () => {
                var d = document;
                2 === (d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && cq(a)
            }),
            c = Wi(641, () => void cq(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.Ea = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            $p(a).disconnect()
        }
    }

    function cq(a) {
        if (!a.Ma) {
            a.Ma = !0;
            $p(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Lp("cls", a.A), b += Lp("mls", a.P), b += Kp("nls", a.U), window.LayoutShiftAttribution && (b += Lp("cas", a.m), b += Kp("nas", a.La), b += Lp("was", a.Qa)), b += Lp("wls", a.sa), b += Lp("tls", a.Pa));
            window.LargestContentfulPaint && (b += Kp("lcp", a.Ja), b += Kp("lcps", a.Ia));
            window.PerformanceEventTiming && a.Ga && (b += Kp("fid", a.Fa));
            window.PerformanceLongTaskTiming && (b += Kp("cbt", a.v),
                b += Kp("mbt", a.G), b += Kp("nlt", a.ra));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) Np(c) && d++;
            b += Kp("nif", d);
            b += Kp("ifi", Qd(window));
            c = Q(tg).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n===n.top?1:0}`;
            b += a.Oa ? `&${"qqid"}=${encodeURIComponent(a.Oa)}` : Kp("pvsid", Cd(n));
            window.googletag && (b += "&gpt=1");
            c = Math.max(a.h, a.B);
            0 <= c && (b += Kp("inp", c));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.Ea()
        }
    }

    function bq(a, {
        interactionId: b,
        duration: c
    }) {
        a.Da.Va && b && (c >= a.h ? (a.i = a.h, a.h = c) : c >= a.i && (a.i = c), 50 === ++a.Ha && (a.B = Math.max(a.B, a.i), a.Ha = 0, a.h = Number.NEGATIVE_INFINITY, a.i = Number.NEGATIVE_INFINITY))
    }
    var Zp = class {
            constructor() {
                var a = {
                    Va: U(Lh)
                };
                this.j = this.g = this.U = this.P = this.A = 0;
                this.Na = this.Ka = Number.NEGATIVE_INFINITY;
                this.Ha = 0;
                this.i = this.h = this.B = Number.NEGATIVE_INFINITY;
                this.Fa = this.Ia = this.Ja = this.La = this.Qa = this.m = this.Pa = this.sa = 0;
                this.Ga = !1;
                this.ra = this.G = this.v = 0;
                this.M = null;
                this.Ma = !1;
                this.Ea = () => {};
                const b = document.querySelector("[data-google-query-id]");
                this.Oa = b ? b.getAttribute("data-google-query-id") : null;
                this.Da = a
            }
        },
        Vp, Wp, Xp = [];
    let dq = null;
    const eq = [],
        fq = new Map;
    let gq = -1;

    function hq(a) {
        return vi.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }

    function iq(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        jq(a, b, c)
    }

    function jq(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = Qo);
        var e = b.google_reactive_ads_config;
        e || Qo(a, b, d, c);
        Sn(d, b);
        if (!kq(a, b, d)) {
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(P).page_contains_reactive_tag && !X(P).allow_second_reactive_tag) {
                    if (e.pltais) {
                        Yl(!1);
                        return
                    }
                    throw new V("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(P).page_contains_reactive_tag = !0;
                Yl(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Pd(d);
            rd(Um, (f, g) => {
                b[g] = b[g] || d[g]
            });
            "sd" !== b.google_loader_used && (b.google_loader_used =
                "aa");
            b.google_reactive_tag_first = 1 === (X(P).first_tag_on_page || 0);
            oj(164, () => {
                Zn(d, b, a, c)
            })
        }
    }

    function kq(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = Wl(c);
        if (f && f.Ra && "on" !== b.google_adtest && !e) {
            e = fi(a, c);
            const g = Zh(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.ta || f.ta && (e || 0) >= f.ta) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = fa(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", String(d)), "slot" === f.Gb && (null !== vd(a.getAttribute("width")) &&
                a.setAttribute("width", "0"), null !== vd(a.getAttribute("height")) && a.setAttribute("height", "0"), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = pd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function lq(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (hq(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a)) return e
        }
        return null
    }

    function mq(a, b, c) {
        if (a && "shift" in a) {
            Wo(e => {
                uc(jc(e), 2) || (e = jc(e), xc(e, 2))
            });
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    nq(a.shift(), b, c)
                } catch (e) {
                    setTimeout(() => {
                        throw e;
                    })
                }--d
            }
        }
    }

    function oq() {
        const a = od("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        yd(a);
        return a
    }

    function pq(a, b) {
        const c = {},
            d = om(a.google_ad_client, b);
        rd(Yh, (g, h) => {
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        });
        ea(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = oq();
        Dd.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(P).pause_ad_requests;
        iq(e, f, b);
        Wo(g => {
            uc(jc(g), 6) || (g = jc(g), xc(g, 6))
        })
    }

    function qq(a, b) {
        Km(n).wasPlaTagProcessed = !0;
        const c = () => {
                pq(a, b)
            },
            d = n.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState) pq(a, b);
        else {
            const e = Mc(W.oa(191, c));
            Nc(d, "DOMContentLoaded", e);
            (new n.MutationObserver((f, g) => {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function nq(a, b, c) {
        const d = {};
        oj(165, () => {
            rq(a, d, b, c)
        }, e => {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function sq(a) {
        delete a.google_checked_head;
        rd(a, (b, c) => {
            ui[c] || (delete a[c], b = c.replace("google", "data").replace(/_/g, "-"), n.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        })
    }

    function tq(a, b) {
        var c = P.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || P.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars) uq(c);
            else {
                Wo(g => {
                    g = jc(g);
                    A(g, 7, ub(!0), !1)
                });
                var e = {};
                Oo(c, e);
                sq(e);
                var f = Sc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                "bottom" ===
                e.google_overlays && (c.overlays = {
                    bottom: !0
                });
                delete e.google_overlays;
                P.adsbygoogle || (P.adsbygoogle = []);
                d = P.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.h() ? .h() ? vq(f, a) : Jp(() => {
                    vq(f, a)
                })
            }
        }
    }

    function uq(a) {
        const b = X(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = id(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new V("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function wq(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function rq(a, b, c, d) {
        if (null == a) throw new V("push() called with no parameters.");
        Wo(f => {
            uc(jc(f), 3) || (f = jc(f), xc(f, 3))
        });
        d.i() && xq(a, d.g().g(), G(d, 2));
        var e = wq(a);
        if (0 !== e)
            if (d = Zl(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = pa), null == dq) yq(a), eq.push(a);
            else if (3 === e) {
            const f = dq;
            oj(787, () => {
                f.handleAdConfig(a)
            })
        } else qj(730, dq.handleAdBreak(a));
        else {
            pa = (new Date).getTime();
            Tn(c, d, zq(a));
            Aq();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" ===
                        typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new V("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Wo(f => {
                uc(jc(f), 4) || (f = jc(f), xc(f, 4))
            }), Bq(a, d);
            else if ((e = a.params) && rd(e, (f, g) => {
                    b[g] = f
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Cq(a.element);
                Oo(e, b);
                c = X(n).head_tag_slot_vars || {};
                rd(c, (f, g) => {
                    b.hasOwnProperty(g) || (b[g] = f)
                });
                if (e.hasAttribute("data-require-head") &&
                    !X(n).head_tag_slot_vars) throw new V("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new V("Ad client is missing from the slot.");
                if (c = 0 === (X(P).first_tag_on_page || 0) && Nm(b)) Wo(f => {
                    uc(jc(f), 5) || (f = jc(f), xc(f, 5))
                }), Dq(c);
                0 === (X(P).first_tag_on_page || 0) && (X(P).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(P).pause_ad_requests;
                iq(e, b, d)
            }
        }
    }
    let Eq = !1;

    function xq(a, b, c) {
        Eq || (Eq = !0, a = zq(a) || Ym(P), pj("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }

    function zq(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function Aq() {
        if (U(uh)) {
            var a = Wl(P);
            if (!(a = a && a.Ra)) {
                try {
                    var b = P.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Kl(b) : null;
                a = !(b && Jl(b) && b)
            }
            a || Xl(P, 1)
        }
    }

    function Dq(a) {
        Ed(() => {
            Km(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
        })
    }

    function Bq(a, b) {
        0 === (X(P).first_tag_on_page || 0) && (X(P).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(n);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        Om(a, b);
        qq(a, b)
    }

    function Cq(a) {
        if (a) {
            if (!hq(a) && (a.id ? a = lq(a.id) : a = null, !a)) throw new V("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new V("'element' is not a good DOM element.");
        } else if (a = lq(), !a) throw new V("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Fq() {
        var a = new fk(P),
            b = new Ep;
        const c = new Ip;
        var d = P.__cmp ? 1 : 0;
        a = ck(a) ? 1 : 0;
        b = Ap(b.caller) ? 1 : 0;
        c.h || (c.g = !!Ap(c.caller), c.h = !0);
        pj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c.g ? 1 : 0,
            ptt: 9
        }, .001)
    }

    function Gq(a) {
        var b = Nj();
        Tj(b, 26, !!Number(a))
    }

    function Hq(a) {
        Number(a) ? X(P).pause_ad_requests = !0 : (X(P).pause_ad_requests = !1, a = () => {
            if (!X(P).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b) : (c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                P.dispatchEvent(c)
            }
        }, n.setTimeout(a, 0), n.setTimeout(a, 1E3))
    }

    function Iq(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function vq(a, b) {
        b = Jm(Vc(b.Fb, Fm())).then(c => {
            null == dq && (c.init(a), dq = c, Jq(c))
        });
        W.aa(723, b);
        b.finally(() => {
            eq.length = 0;
            pj("slotcar", {
                event: "api_ld",
                time: Date.now() - pa,
                time_pr: Date.now() - gq
            });
            U(Nh) && $o(Q(Xo), Ve(23))
        })
    }

    function Jq(a) {
        for (const [c, d] of fq) {
            var b = c;
            const e = d; - 1 !== e && (n.clearTimeout(e), fq.delete(b))
        }
        for (b = 0; b < eq.length; b++) {
            if (fq.has(b)) continue;
            const c = eq[b],
                d = wq(c);
            oj(723, () => {
                if (3 === d) a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    W.aa(730, e)
                }
            })
        }
    }

    function yq(a) {
        var b = eq.length;
        if (2 === wq(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone; - 1 === gq && (gq = Date.now());
            var d = n.setTimeout(() => {
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), fq.set(b, -1), pj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    }), U(Nh) && $o(Q(Xo), Ve(22))
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }, 1E3 * Q(Qh).g(Mh.g, Mh.defaultValue));
            fq.set(b, d)
        }
    }

    function Kq() {
        var a = P.document,
            b = Od `https://googleads.g.doubleclick.net`;
        const c = a.createElement("LINK");
        c.crossOrigin = "";
        a: {
            if (b instanceof Uc) c.href = Xc(b).toString();
            else {
                if (-1 === kd.indexOf("preconnect")) throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
                if (b instanceof ad) b = b instanceof ad && b.constructor === ad ? b.g : "type_error:SafeUrl";
                else {
                    c: {
                        try {
                            var d = new URL(b)
                        } catch (e) {
                            d = "https:";
                            break c
                        }
                        d = d.protocol
                    }
                    b = "javascript:" !== d ? b : void 0
                }
                if (void 0 === b) break a;
                c.href = b
            }
            c.rel =
            "preconnect"
        }
        a.head.appendChild(c)
    };
    (function(a, b, c, d = () => {}) {
        W.gb(rj);
        oj(166, () => {
            const e = new Rf(2, a);
            try {
                ob(q => {
                    var x = new vf;
                    var v = new uf;
                    try {
                        var w = Cd(window);
                        wc(v, 1, w)
                    } catch (M) {}
                    try {
                        var z = Q(tg).g();
                        ec(v, 2, z, zb)
                    } catch (M) {}
                    try {
                        yc(v, 3, window.document.URL)
                    } catch (M) {}
                    x = mc(x, 2, v);
                    v = new tf;
                    v = I(v, 1, 1191);
                    try {
                        var C = se(q ? .name) ? q.name : "Unknown error";
                        yc(v, 2, C)
                    } catch (M) {}
                    try {
                        var L = se(q ? .message) ? q.message : `Caught ${q}`;
                        yc(v, 3, L)
                    } catch (M) {}
                    try {
                        const M = se(q ? .stack) ? q.stack : Error().stack;
                        M && ec(v, 4, M.split(/\n\s*/), Eb)
                    } catch (M) {}
                    q = mc(x, 1, v);
                    C =
                        new sf;
                    try {
                        yc(C, 1, "m202310100101")
                    } catch {}
                    nc(q, 6, wf, C);
                    wc(q, 5, 1);
                    xf(e, q)
                })
            } catch (q) {}
            const f = zp(b);
            yp(G(f, 2));
            Vl(F(f, 6));
            Uj(Nj(), G(f, 24));
            d();
            Ld(16, [1, f.toJSON()]);
            var g = Nd(Md(P)) || P;
            const h = c(Tm({
                ua: a,
                Aa: G(f, 2)
            }), f);
            var k = null === P.document.currentScript ? 1 : cp(h.Hb);
            fm(g, f);
            xp(g, f, k);
            U(lh) && Kq();
            Wo(q => {
                var x = tc(q, 1) + 1;
                A(q, 1, Ab(x), 0);
                P.top === P && (x = tc(q, 2) + 1, A(q, 2, Ab(x), 0));
                uc(jc(q), 1) || (q = jc(q), xc(q, 1))
            });
            qj(1086, Yo(0 === k));
            if (!Ca() || 0 <= sa(Ha(), 11)) {
                nj(U(Ph));
                bo();
                sl();
                try {
                    Yp()
                } catch {}
                ao();
                tq(h, f);
                g = window;
                k = g.adsbygoogle;
                if (!k || !k.loaded) {
                    pj("new_abg_tag", {
                        value: `${F(f,16)}`,
                        host_v: `${F(f,22)}`,
                        frequency: .01
                    }, .01);
                    Fq();
                    var m = {
                        push: q => {
                            nq(q, h, f)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(m, "requestNonPersonalizedAds", {
                            set: Gq
                        }), Object.defineProperty(m, "pauseAdRequests", {
                            set: Hq
                        }), Object.defineProperty(m, "onload", {
                            set: Iq
                        })
                    } catch {}
                    if (k)
                        for (var l of ["requestNonPersonalizedAds", "pauseAdRequests"]) void 0 !== k[l] && (m[l] = k[l]);
                    mq(k, h, f);
                    g.adsbygoogle = m;
                    k && (m.onload = k.onload);
                    U(qh) || (l = Yn(h)) && document.documentElement.appendChild(l)
                }
            }
        })
    })("m202310100101",
        "undefined" === typeof sttc ? void 0 : sttc,
        function(a, b) {
            const c = 2012 < tc(b, 1) ? `_fy${tc(b,1)}` : "";
            var d = G(b, 3);
            const e = G(b, 2);
            b = Od `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`;
            const f = Od `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
            d = Od `https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup${c}.html`;
            return {
                Fb: b,
                Db: Od `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl${c}.js`,
                Cb: Od `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}show_ads_impl_with_ama${c}.js`,
                Kb: f,
                Jb: d,
                Hb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
            }
        });
}).call(this, "[2021,\"r20231011\",\"r20190131\",1,null,1,null,\".google.lt\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[1]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[1304,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[1267,null,null,[1]],[1268,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1241,null,null,[1]],[1287,null,null,[1]],[1285,null,null,[1]],[1300,null,null,[1]],[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1167,null,null,[1]],[1129,null,null,[1]],[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]],[1303,null,null,[1]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1198,null,null,[1]],[1206,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[1284,null,null,[1]],[null,566560958,null,[null,30000]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[null,547455356,null,[null,49]],[null,null,null,[null,null,null,[\"1\"]],null,556791602],[572581365,null,null,[1]],[529362570,null,null,[1]],[null,null,549581487,[null,null,\"#1A73E8\"]],[null,null,549581486,[null,null,\"#FFFFFF\"]],[null,564316610,null,[null,0.2]],[null,561668774,null,[null,0.1]],[null,469675170,null,[null,30000]],[542046278,null,null,[1]],[567362967,null,null,[1]],[568558478,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1086,null,null,[1]],[10010,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[10009,null,null,[1]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10005,null,null,[1]],[555237685,null,null,[1]],[45414947,null,null,[1]],[null,472785970,null,[null,500]],[561451331,null,null,[1]],[null,null,null,[null,null,null,[\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1000,[[31078663,null,[2,[[4,null,70,null,null,null,null,[\"browsing-topics\"]],[4,null,8,null,null,null,null,[\"document.browsingTopics\"]]]]]]],[1000,[[31078664,null,[2,[[4,null,69,null,null,null,null,[\"browsing-topics\"]],[1,[[4,null,70,null,null,null,null,[\"browsing-topics\"]]]]]]]]],[1000,[[31078665,null,[2,[[4,null,8,null,null,null,null,[\"navigator.runAdAuction\"]],[4,null,70,null,null,null,null,[\"run-ad-auction\"]],[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]],[1000,[[31078666,null,[2,[[4,null,69,null,null,null,null,[\"join-ad-interest-group\"]],[1,[[4,null,70,null,null,null,null,[\"join-ad-interest-group\"]]]]]]]]],[1000,[[31078667,null,[2,[[4,null,69,null,null,null,null,[\"run-ad-auction\"]],[1,[[4,null,70,null,null,null,null,[\"run-ad-auction\"]]]]]]]]],[1000,[[31078668,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]],[1000,[[31078669,null,[2,[[4,null,69,null,null,null,null,[\"attribution-reporting\"]],[1,[[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]]]]]]],[1000,[[31078670,null,[4,null,70,null,null,null,null,[\"shared-storage\"]]]]],[1000,[[31078671,null,[2,[[4,null,69,null,null,null,null,[\"shared-storage\"]],[1,[[4,null,70,null,null,null,null,[\"shared-storage\"]]]]]]]]]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[100,[[31077327],[31077328,[[555237685,null,null,[]]]]]],[10,[[31078019],[31078020]]],[10,[[31078237],[31078238,[[1302,null,null,[1]]]]]],[200,[[31078297],[31078301,[[1230,null,null,[]],[1229,null,null,[]],[1231,null,null,[]]]]],null,87],[100,[[31078362],[31078363,[[563731719,null,null,[1]]]]]],[10,[[31078480],[31078481,[[1282,null,null,[1]]]]]],[100,[[31078593],[31078594,[[null,null,null,[null,null,null,[\"1\",\"2\"]],null,556791602]]]]],[10,[[31078597],[31078598,[[1290,null,null,[1]]]]]],[100,[[31078701],[31078702,[[561451331,null,null,[1]]]]]],[1000,[[31078772,[[null,null,14,[null,null,\"31078772\"]]],[6,null,null,null,6,null,\"31078772\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31078773,[[null,null,14,[null,null,\"31078773\"]]],[6,null,null,null,6,null,\"31078773\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31078801,[[null,null,14,[null,null,\"31078801\"]]],[6,null,null,null,6,null,\"31078801\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31078802,[[null,null,14,[null,null,\"31078802\"]]],[6,null,null,null,6,null,\"31078802\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[100,[[31078830],[31078831,[[569475159,null,null,[1]]]]]],[1000,[[31078858,[[null,null,14,[null,null,\"31078858\"]]],[6,null,null,null,6,null,\"31078858\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1000,[[31078859,[[null,null,14,[null,null,\"31078859\"]]],[6,null,null,null,6,null,\"31078859\"]]],[4,null,55],63,null,null,null,null,null,null,null,null,2],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[50,[[42532334],[42532335,[[1280,null,null,[1]]]]]],[1,[[42532360],[42532361,[[1260,null,null,[1]],[1291,null,null,[1]]]]],null,90],[1,[[42532362],[42532363]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[10,[[44776368],[44779257],[44804781]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[1,[[44795552],[44795553,[[1260,null,null,[1]]]]],null,90],[1,[[44795554],[44795555]]],[100,[[44795921],[44795922,[[1222,null,null,[1]]]],[44798934,[[1222,null,null,[1]]]]]],[10,[[44800658],[44800659,[[1185,null,null,[1]]]]],null,76],[50,[[44801484],[44801485,[[1298,null,null,[1]]]]]],[1,[[44801778],[44801779,[[506914611,null,null,[1]]]]],[4,null,55]],[1000,[[44802674,[[506852289,null,null,[1]]],[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"]]],[4,null,55]],[10,[[44803789],[44803790,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,76],[50,[[44803791],[44803793,[[1185,null,null,[1]]]]],null,76],[10,[[44803792],[44803794,[[1185,null,null,[1]]]]],null,76],[50,[[44804683,[[1289,null,null,[1]]]],[44804684,[[1289,null,null,[1]],[1288,null,null,[1]]]]]],[500,[[44805112],[44805113,[[568515114,null,null,[1]]]]],[4,null,55]],[10,[[44805130],[44805131,[[568572979,null,null,[1]]]]],[4,null,55]],[100,[[44805533],[44805534,[[570054060,null,null,[1]]]]],[4,null,55]],[null,[[44805674],[44805675,[[570095433,null,null,[1]]]]],[4,null,55]],[100,[[44805680],[44805681,[[570059447,null,null,[1]]]]],[4,null,55]],[10,[[44805914],[44805915,[[571859167,null,null,[1]]]]],[4,null,55]],[200,[[44805918],[44805919,[[null,570003060,null,[null,20]]]],[44805920,[[null,570003060,null,[null,50]]]],[44805921,[[null,570003060,null,[null,100]]]]],[4,null,55]],[10,[[44805931],[44805932,[[null,571329679,null,[null,20]]]],[44805933,[[null,571329679,null,[null,50]]]],[44805934,[[null,571329679,null,[null,100]]]]],[4,null,55]]]],[17,[[10,[[31078630],[31078631,[[557143911,null,null,[1]],[541943501,null,null,[1]],[null,550718588,null,[null,250]],[null,1245,null,[null,600]],[1284,null,null,[]]]],[31078632,[[557143911,null,null,[1]],[541943501,null,null,[1]],[null,550718588,null,[null,250]]]]],null,null,null,null,null,null,null,120],[48,[[44796896,[[541943501,null,null,[1]],[null,1245,null,[null,600]]]]],[2,[[4,null,55],[7,null,null,15,null,20230711]]],null,null,null,null,440,null,120,1],[504,[[44796897,[[541943501,null,null,[1]],[null,1245,null,[null,600]]],[4,null,71,null,null,null,null,[\"120\",\"14\"]]]],[2,[[4,null,55],[7,null,null,15,null,20230711]]],null,null,null,null,488,null,120,1],[1,[[44797663,[[null,506871937,null,[null,44797663]],[1120,null,null,[1]]]],[44797664,[[null,506871937,null,[null,44797664]],[160889229,null,null,[1]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,300,null,123],[32,[[44804171,[[null,506871937,null,[null,44804171]],[1120,null,null,[1]]]],[44804172,[[566279275,null,null,[1]],[null,506871937,null,[null,44804172]],[1120,null,null,[1]]]],[44804173,[[566279276,null,null,[1]],[null,506871937,null,[null,44804173]],[1120,null,null,[1]]]],[44804179,[[null,506871937,null,[null,44804179]]]],[44804180,[[545453532,null,null,[1]],[null,506871937,null,[null,44804180]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,null,null,123],[1,[[44805927,[[null,506871937,null,[null,44805927]],[1120,null,null,[1]]]],[44805928,[[569978025,null,null,[1]],[564316609,null,null,[1]],[561639568,null,null,[1]],[null,564316610,null,[null,0.3]],[562711461,null,null,[1]],[null,506871937,null,[null,44805928]],[1120,null,null,[1]]]]],[4,null,55],null,null,null,null,590,null,123]]]],null,null,[null,\"1000\",1,\"1000\"]],[null,[null,[[[[null,0,null,null,null,null,\"HEADER\"],4,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV#ast-desktop-header\\u003eDIV.ast-main-header-wrap.main-header-bar-wrap\\u003eDIV.ast-primary-header-bar.ast-primary-header.main-header-bar.site-header-focus-item\\u003eDIV.site-primary-header-wrap.ast-builder-grid-row-container.site-header-focus-item.ast-container\\u003eDIV.ast-builder-grid-row.ast-grid-center-col-layout-only.ast-flex.ast-grid-center-col-layout\"],4,[\"10px\",\"10px\",1],[2],null,null,null,1]],[[null,[1,3,2],null,\"8841784383\",null,null,[0,2],1,null,[1,null,1]]],[[[null,10,null,null,null,null,\"DIV#primary\\u003eMAIN#main.site-main\\u003eARTICLE.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-fortnite.tag-fortnite.tag-freecheats.tag-skin-changer.tag-skin-generator.ast-article-single\\u003eDIV.ast-post-format-\\u003eDIV.entry-content.clear\\u003eP\"],[]],[[null,null,null,null,null,null,\"DIV#primary\\u003eMAIN#main.site-main\\u003eARTICLE.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-roblox-scripts-hacks.tag-bedwars.tag-bedwars-hack.tag-freecheats.tag-hacking-in-bedwars.ast-article-single\\u003eDIV.ast-post-format-\\u003eDIV.entry-content.clear\\u003eOL\"],[null,null,null,null,null,null,\"LI\"],null,[null,null,null,null,null,null,\"LI\"]],[[null,null,null,null,null,null,\"DIV#primary\\u003eMAIN#main.site-main\\u003eARTICLE.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-roblox-scripts-hacks.tag-bedwars.tag-bedwars-hack.tag-freecheats.tag-hacking-in-bedwars.ast-article-single\\u003eDIV.ast-post-format-\\u003eDIV.entry-content.clear\"],[null,null,null,null,null,null,\"P\"],null,[null,null,null,null,null,null,\"H2,H3,IMG.fr-fic.fr-dib.alignnone,LI,P\"]],[[null,null,null,null,null,null,\"DIV#primary\\u003eMAIN#main.site-main\\u003eARTICLE.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-fortnite.tag-fortnite.tag-freecheats.tag-skin-changer.tag-skin-generator.ast-article-single\\u003eDIV.ast-post-format-\\u003eDIV.entry-content.clear\"],[null,null,null,null,null,null,\"P,UL\"],null,[null,null,null,null,null,null,\"H2,H3,IMG.size-medium,LI,P\"]],[[null,3,null,null,null,null,\"DIV#primary\\u003eMAIN#main.site-main\\u003eARTICLE.post.type-post.status-publish.format-standard.has-post-thumbnail.hentry.category-fortnite.tag-fortnite.tag-freecheats.tag-skin-changer.tag-skin-generator.ast-article-single\\u003eDIV.ast-post-format-\\u003eDIV.entry-content.clear\\u003eUL\"],[null,null,null,null,null,null,\"LI\"],null,[null,null,null,null,null,null,\"H2,LI\"]]]],[null,null,[1,2,7]]],null,null,null,null,null,null,\"ca-pub-1101978191620274\"],null,null,1,\"cheaterboss.com\",1031727560,[44759876,44759927]]");