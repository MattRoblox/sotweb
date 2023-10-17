(function() {
    'use strict';
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var k = this || self;

    function aa(a) {
        return a
    };
    var ba, m;
    a: {
        for (var ca = ["CLOSURE_FLAGS"], q = k, da = 0; da < ca.length; da++)
            if (q = q[ca[da]], null == q) {
                m = null;
                break a
            }
        m = q
    }
    var ea = m && m[610401301];
    ba = null != ea ? ea : !1;
    var r;
    const ha = k.navigator;
    r = ha ? ha.userAgentData || null : null;

    function ia(a) {
        return ba ? r ? r.brands.some(({
            brand: b
        }) => b && -1 != b.indexOf(a)) : !1 : !1
    }

    function x(a) {
        var b;
        a: {
            if (b = k.navigator)
                if (b = b.userAgent) break a;b = ""
        }
        return -1 != b.indexOf(a)
    };

    function y() {
        return ba ? !!r && 0 < r.brands.length : !1
    }

    function ja() {
        return y() ? ia("Chromium") : (x("Chrome") || x("CriOS")) && !(y() ? 0 : x("Edge")) || x("Silk")
    };

    function ka(a, b) {
        return Array.prototype.indexOf.call(a, b, void 0)
    };

    function la(a) {
        la[" "](a);
        return a
    }
    la[" "] = function() {};
    !x("Android") || ja();
    ja();
    x("Safari") && (ja() || (y() ? 0 : x("Coast")) || (y() ? 0 : x("Opera")) || (y() ? 0 : x("Edge")) || (y() ? ia("Microsoft Edge") : x("Edg/")) || y() && ia("Opera"));
    const z = Symbol();

    function ma(a) {
        const b = a[z] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Array.prototype.slice.call(a)), a[z] = b | 1)
    }

    function na() {
        var a = [];
        a[z] |= 1;
        return a
    }

    function oa(a, b) {
        b[z] = (a | 0) & -255
    }

    function pa(a, b) {
        b[z] = (a | 34) & -221
    }

    function B(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var C = {};

    function E(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let qa;
    var F;
    const ra = [];
    ra[z] = 55;
    F = Object.freeze(ra);

    function G(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    };
    let I;

    function sa(a, b) {
        I = b;
        a = new a(b);
        I = void 0;
        return a
    };

    function ta(a, b) {
        return ua(b)
    }

    function ua(a) {
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

    function va(a, b, c) {
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

    function wa(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[z] | 0) & 1 ? void 0 : f && (a[z] | 0) & 2 ? a : xa(a, b, c, void 0 !== d, e, f);
            else if (E(a)) {
                const h = {};
                for (let g in a) h[g] = wa(a[g], b, c, d, e, f);
                a = h
            } else a = b(a, d);
            return a
        }
    }

    function xa(a, b, c, d, e, f) {
        const h = d || c ? a[z] | 0 : 0;
        d = d ? !!(h & 32) : void 0;
        a = Array.prototype.slice.call(a);
        for (let g = 0; g < a.length; g++) a[g] = wa(a[g], b, c, d, e, f);
        c && c(h, a);
        return a
    }

    function ya(a) {
        return a.v === C ? a.toJSON() : ua(a)
    };

    function za(a, b, c = pa) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[z] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[z] = (d | 34) & -5, a) : xa(a, za, d & 4 ? pa : c, !0, !1, !0)
            }
            a.v === C && (c = a.l, d = c[z], a = d & 2 ? a : sa(a.constructor, Aa(c, d, !0)));
            return a
        }
    }

    function Aa(a, b, c) {
        const d = c || b & 2 ? pa : oa,
            e = !!(b & 32);
        a = va(a, b, f => za(f, e, d));
        a[z] = a[z] | 32 | (c ? 2 : 0);
        return a
    };

    function J(a, b) {
        a = a.l;
        return Ba(a, a[z], b)
    }

    function Ba(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= B(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function Ca(a, b, c, d, e) {
        var f = B(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[z] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Ga(a) {
        var b = Ha;
        a = a.l;
        const c = a[z],
            d = Ba(a, c, 1, !1);
        var e = !1;
        if (null == d || "object" !== typeof d || (e = Array.isArray(d)) || d.v !== C)
            if (e) {
                let f = e = d[z] | 0;
                0 === f && (f |= c & 32);
                f |= c & 2;
                f !== e && (d[z] = f);
                b = new b(d)
            } else b = void 0;
        else b = d;
        b !== d && null != b && Ca(a, c, 1, b, !1);
        return b
    }

    function Ia(a) {
        let b = Ga(a);
        if (null == b) return b;
        a = a.l;
        const c = a[z];
        if (!(c & 2)) {
            var d = b;
            const e = d.l,
                f = e[z];
            d = f & 2 ? sa(d.constructor, Aa(e, f, !1)) : d;
            d !== b && (b = d, Ca(a, c, 1, b, !1))
        }
        return b
    }

    function K(a, b) {
        a = J(a, b);
        return null == a || "string" === typeof a ? a : void 0
    }

    function L(a, b) {
        a = J(a, b);
        return (null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0) ? ? !1
    }

    function M(a, b, c) {
        if (null != c && "string" !== typeof c) throw Error();
        a = a.l;
        const d = a[z];
        if (d & 2) throw Error();
        Ca(a, d, b, c)
    };
    var Ka = class {
        constructor(a) {
            a: {
                null == a && (a = I);I = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[z] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (E(d)) {
                            b |= 256;
                            const f = +!!(b & 512) - 1;
                            e -= f;
                            if (1024 <= e) {
                                e = 1023 + f;
                                const h = c.length;
                                for (let g = e; g < h; g++) {
                                    const n = c[g];
                                    null != n && n !== d && (d[g - f] = n)
                                }
                                c.length = e + 1;
                                c[e] = d;
                                e = 1023
                            }
                            b = b & -2095105 | (e & 1023) << 11
                        }
                    }
                }
                a[z] = b
            }
            this.l = a
        }
        toJSON() {
            if (qa) var a = Ja(this, this.l, !1);
            else a = xa(this.l, ya, void 0, void 0, !1, !1), a = Ja(this,
                a, !0);
            return a
        }
    };
    Ka.prototype.v = C;

    function Ja(a, b, c) {
        var d = a.constructor.N,
            e = B((c ? a.l : b)[z]),
            f = !1;
        if (d) {
            if (!c) {
                b = Array.prototype.slice.call(b);
                var h;
                if (b.length && E(h = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, h);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            h = a.l[z];
            a = B(h);
            h = +!!(h & 512) - 1;
            var g;
            for (let v = 0; v < d.length; v++) {
                var n = d[v];
                if (n < a) {
                    n += h;
                    var l = e[n];
                    null == l ? e[n] = c ? F : na() : c && l !== F && ma(l)
                } else {
                    if (!g) {
                        var p = void 0;
                        e.length && E(p = e[e.length - 1]) ? g = p : e.push(g = {})
                    }
                    l = g[n];
                    null == g[n] ? g[n] = c ? F : na() : c && l !== F && ma(l)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let t, w;
        if (E(g = b[d - 1])) {
            a: {
                var A = g;p = {};e = !1;
                for (let v in A) c = A[v],
                Array.isArray(c) && c != c && (e = !0),
                null != c ? p[v] = c : e = !0;
                if (e) {
                    for (let v in p) {
                        A = p;
                        break a
                    }
                    A = null
                }
            }
            A != g && (t = !0);d--
        }
        for (; 0 < d; d--) {
            g = b[d - 1];
            if (null != g) break;
            w = !0
        }
        if (!t && !w) return b;
        var H;
        f ? H = b : H = Array.prototype.slice.call(b, 0, d);
        b = H;
        f && (b.length = d);
        A && b.push(A);
        return b
    };
    var Ha = class extends Ka {};
    Ha.N = [28];
    var La = class extends Ka {},
        Ma = function(a) {
            return b => {
                if (null == b || "" == b) b = new a;
                else {
                    b = JSON.parse(b);
                    if (!Array.isArray(b)) throw Error(void 0);
                    b[z] |= 32;
                    b = sa(a, b)
                }
                return b
            }
        }(La);
    La.N = [21];
    var Na = class extends Ka {
        constructor() {
            super()
        }
    };

    function Oa(a = window) {
        return a
    };

    function Pa(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };
    var Qa = {
            passive: !0
        },
        Ra = Pa(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                k.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function Sa(a) {
        return a ? a.passive && Ra() ? a : a.capture || !1 : !1
    }

    function N(a, b, c, d) {
        a.addEventListener && a.addEventListener(b, c, Sa(d))
    };
    var Ta;
    var Ua = class {
            constructor(a) {
                this.g = a
            }
            toString() {
                return this.g + ""
            }
        },
        Va = {};

    function O(a) {
        var b = document;
        return "string" === typeof a ? b.getElementById(a) : a
    }

    function Wa(a) {
        var b = document;
        b.getElementsByClassName ? a = b.getElementsByClassName(a)[0] : (b = document, a = b.querySelectorAll && b.querySelector && a ? b.querySelector(a ? "." + a : "") : Xa(b, a)[0] || null);
        return a || null
    }

    function Xa(a, b) {
        var c, d;
        if (a.querySelectorAll && a.querySelector && b) return a.querySelectorAll(b ? "." + b : "");
        if (b && a.getElementsByClassName) {
            var e = a.getElementsByClassName(b);
            return e
        }
        e = a.getElementsByTagName("*");
        if (b) {
            var f = {};
            for (c = d = 0; a = e[c]; c++) {
                var h = a.className,
                    g;
                if (g = "function" == typeof h.split) g = 0 <= ka(h.split(/\s+/), b);
                g && (f[d++] = a)
            }
            f.length = d;
            return f
        }
        return e
    }

    function Ya(a) {
        a && a.parentNode && a.parentNode.removeChild(a)
    };
    var Za = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        $a = /#|$/;

    function ab(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function bb(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    };

    function cb(a, b, c = null, d = !1) {
        db(a, b, c, d)
    }

    function db(a, b, c, d) {
        a.google_image_requests || (a.google_image_requests = []);
        const e = bb("IMG", a.document);
        if (c || d) {
            const f = h => {
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const g = ka(h, e);
                    0 <= g && Array.prototype.splice.call(h, g, 1)
                }
                e.removeEventListener && e.removeEventListener("load", f, Sa());
                e.removeEventListener && e.removeEventListener("error", f, Sa())
            };
            N(e, "load", f);
            N(e, "error", f)
        }
        e.src = b;
        a.google_image_requests.push(e)
    };
    let eb = 0;

    function fb(a) {
        return (a = gb(a, document.currentScript)) && a.getAttribute("data-jc-version") || "unknown"
    }

    function gb(a, b = null) {
        return b && b.getAttribute("data-jc") === String(a) ? b : document.querySelector(`[${"data-jc"}="${a}"]`)
    }

    function hb() {
        if (!(.01 < Math.random())) {
            var a = gb(60, document.currentScript);
            a = `https://${a&&"true"===a.getAttribute("data-jc-rcd")?"pagead2.googlesyndication-cn.com":"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${60}&version=${fb(60)}&sample=${.01}`;
            var b = window,
                c;
            if (c = b.navigator) c = b.navigator.userAgent, c = /Chrome/.test(c) && !/Edge/.test(c) ? !0 : !1;
            c && b.navigator.sendBeacon ? b.navigator.sendBeacon(a) : cb(b, a, void 0, !1)
        }
    };
    var ib = document,
        P = window;

    function jb(a) {
        return "string" == typeof a.className ? a.className : a.getAttribute && a.getAttribute("class") || ""
    }

    function kb(a, b) {
        a.classList ? b = a.classList.contains(b) : (a = a.classList ? a.classList : jb(a).match(/\S+/g) || [], b = 0 <= ka(a, b));
        return b
    }

    function Q(a, b) {
        if (a.classList) a.classList.add(b);
        else if (!kb(a, b)) {
            var c = jb(a);
            b = c + (0 < c.length ? " " + b : b);
            "string" == typeof a.className ? a.className = b : a.setAttribute && a.setAttribute("class", b)
        }
    };
    var lb = class {
        constructor(a) {
            this.serializedAttributionData = a.toJSON();
            var b = a.l;
            this.g = sa(a.constructor, Aa(b, b[z], !1));
            this.isMutableImpression = void 0 !== Ga(this.g) && !!L(Ia(this.g), 33);
            this.X = !!L(this.g, 11);
            this.hasUserFeedbackData = !!this.g && void 0 !== Ga(this.g);
            this.R = !!L(this.g, 4);
            this.U = !!L(this.g, 6);
            this.P = !!L(this.g, 13);
            G(J(this.g, 8));
            this.creativeIndexSuffix = 1 < (G(J(this.g, 8)) ? ? 0) ? (G(J(this.g, 7)) ? ? 0).toString() : "";
            null != K(this.g, 34) && (this.creativeIndexSuffix = (K(this.g, 34) ? ? "") + "_" + this.creativeIndexSuffix);
            this.Y = !!L(this.g, 17);
            this.W = !!L(this.g, 18);
            this.O = !!L(this.g, 14);
            this.F = !!L(this.g, 15);
            this.Z = !!L(this.g, 31);
            this.V = 1 == L(this.g, 9);
            this.openAttributionInline = 1 == L(this.g, 10);
            this.isMobileDevice = !!L(this.g, 12);
            this.u = null;
            this.T = (a = ib.querySelector("[data-slide]")) ? "true" === a.getAttribute("data-slide") : !1;
            (this.H = 1 < (G(J(this.g, 8)) ? ? 0)) && void 0 === P.goog_multislot_cache && (P.goog_multislot_cache = {});
            if (this.H && !this.T) {
                if (a = P.goog_multislot_cache.hd, void 0 === a) {
                    a = !1;
                    if (b = ib.querySelector("[data-dim]"))
                        if (b =
                            b.getBoundingClientRect(), 150 <= b.right - b.left && 150 <= b.bottom - b.top) a = !1;
                        else {
                            var c = document.body.getBoundingClientRect();
                            150 > (1 >= Math.abs(c.left - b.left) && 1 >= Math.abs(c.right - b.right) ? b.bottom - b.top : b.right - b.left) && (a = !0)
                        }
                    else a = !1;
                    window.goog_multislot_cache.hd = a
                }
            } else a = !1;
            this.G = a;
            this.B = O("abgcp" + this.creativeIndexSuffix);
            this.A = O("abgc" + this.creativeIndexSuffix);
            this.h = O("abgs" + this.creativeIndexSuffix);
            O("abgl" + this.creativeIndexSuffix);
            this.s = O("abgb" + this.creativeIndexSuffix);
            this.D = O("abgac" +
                this.creativeIndexSuffix);
            O("mute_panel" + this.creativeIndexSuffix);
            this.C = Wa("goog_delegate_attribution" + this.creativeIndexSuffix);
            this.isDelegateAttributionActive = !!this.C && !!this.O && !Wa("goog_delegate_disabled") && !this.F;
            if (this.h) a: for (a = this.h, b = a.childNodes, c = 0; c < b.length; c++) {
                const d = b.item(c);
                if ("undefined" != typeof d.tagName && "A" == d.tagName.toUpperCase()) {
                    a = d;
                    break a
                }
            } else a = null;
            this.m = a;
            this.j = this.isDelegateAttributionActive ? this.C : O("cbb" + this.creativeIndexSuffix);
            this.S = this.G ? "0" === this.creativeIndexSuffix :
                !0;
            this.enableDelegateDismissableMenu = !!this.j && kb(this.j, "goog_dismissable_menu");
            this.o = null;
            this.I = 0;
            this.i = this.isDelegateAttributionActive ? this.C : this.U && this.B ? this.B : this.A;
            this.autoExpandOnLoad = !!L(this.g, 19);
            this.adbadgeEnabled = !!L(this.g, 24);
            this.enableNativeJakeUi = !!L(this.g, 27)
        }
    };
    var mb = class {
        constructor(a, b) {
            if (!a) throw Error("bad conv util ctor args");
            this.g = a;
            this.h = b
        }
    };
    var R = (a, b) => {
        a && ab(b, (c, d) => {
            a.style[d] = c
        })
    };
    class nb {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const tb = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var ub = class {
            constructor(a, b) {
                this.g = a;
                this.h = b
            }
        },
        vb = class {
            constructor(a, b) {
                this.url = a;
                this.L = !!b;
                this.depth = null
            }
        };
    let wb = null;

    function xb() {
        const a = k.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function yb() {
        const a = k.performance;
        return a && a.now ? a.now() : null
    };
    var zb = class {
        constructor(a, b) {
            var c = yb() || xb();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const S = k.performance,
        Ab = !!(S && S.mark && S.measure && S.clearMarks),
        T = Pa(() => {
            var a;
            if (a = Ab) {
                var b;
                if (null === wb) {
                    wb = "";
                    try {
                        a = "";
                        try {
                            a = k.top.location.hash
                        } catch (c) {
                            a = k.location.hash
                        }
                        a && (wb = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = wb;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Bb(a) {
        a && S && T() && (S.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), S.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }
    class Cb {
        constructor() {
            var a = window;
            this.h = [];
            this.i = a || k;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.g = T() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g) return null;
            a = new zb(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            S && T() && S.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (yb() || xb()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                S && T() && S.mark(b);
                !this.g || 2048 <
                    this.h.length || this.h.push(a)
            }
        }
    };

    function Db(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function Eb(a, b, c, d, e) {
        const f = [];
        ab(a, function(h, g) {
            (h = Fb(h, b, c, d, e)) && f.push(g + "=" + h)
        });
        return f.join(b)
    }

    function Fb(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let h = 0; h < a.length; h++) f.push(Fb(a[h], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Eb(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Gb(a) {
        let b = 1;
        for (const c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }

    function Hb(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Gb(a) - b.length;
        if (0 > d) return "";
        a.g.sort(function(f, h) {
            return f - h
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const h = a.g[f],
                g = a.h[h];
            for (let n = 0; n < g.length; n++) {
                if (!d) {
                    b = null == b ? h : b;
                    break
                }
                let l = Eb(g[n], a.i, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.i;
                        break
                    }
                    b = null == b ? h : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Ib {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    };

    function Jb(a) {
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

    function Kb(a, b, c) {
        let d, e;
        try {
            a.g && a.g.g ? (e = a.g.start(b.toString(), 3), d = c(), a.g.end(e)) : d = c()
        } catch (f) {
            c = !0;
            try {
                Bb(e), c = a.m(b, new nb(f, {
                    message: Jb(f)
                }), void 0, void 0)
            } catch (h) {
                a.j(217, h)
            }
            if (c) window.console ? .error ? .(f);
            else throw f;
        }
        return d
    }

    function Lb(a, b) {
        var c = U;
        return (...d) => Kb(c, a, () => b.apply(void 0, d))
    }
    var Ob = class {
        constructor(a = null) {
            this.pinger = Mb;
            this.g = a;
            this.h = null;
            this.i = !1;
            this.m = this.j
        }
        j(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const u = new Ib;
                u.g.push(1);
                u.h[1] = Db("context", a);
                b.error && b.meta && b.id || (b = new nb(b, {
                    message: Jb(b)
                }));
                if (b.msg) {
                    var h = b.msg.substring(0, 512);
                    u.g.push(2);
                    u.h[2] = Db("msg", h)
                }
                const fa = b.meta || {};
                if (this.h) try {
                    this.h(fa)
                } catch (D) {}
                if (d) try {
                    d(fa)
                } catch (D) {}
                b = [fa];
                u.g.push(3);
                u.h[3] = b;
                d = k;
                b = [];
                let Da;
                h = null;
                do {
                    var g = d;
                    try {
                        var n;
                        if (n = !!g && null != g.location.href) b: {
                            try {
                                la(g.foo);
                                n = !0;
                                break b
                            } catch (D) {}
                            n = !1
                        }
                        var l = n
                    } catch {
                        l = !1
                    }
                    l ? (Da = g.location.href, h = g.document && g.document.referrer || null) : (Da = h, h = null);
                    b.push(new vb(Da || ""));
                    try {
                        d = g.parent
                    } catch (D) {
                        d = null
                    }
                } while (d && g != d);
                for (let D = 0, ob = b.length - 1; D <= ob; ++D) b[D].depth = ob - D;
                g = k;
                if (g.location && g.location.ancestorOrigins && g.location.ancestorOrigins.length == b.length - 1)
                    for (l = 1; l < b.length; ++l) {
                        var p = b[l];
                        p.url || (p.url = g.location.ancestorOrigins[l - 1] || "", p.L = !0)
                    }
                var t = b;
                let Ea = new vb(k.location.href, !1);
                g = null;
                const Fa = t.length - 1;
                for (p = Fa; 0 <= p; --p) {
                    var w = t[p];
                    !g && tb.test(w.url) && (g = w);
                    if (w.url && !w.L) {
                        Ea = w;
                        break
                    }
                }
                w = null;
                const Xb = t.length && t[Fa].url;
                0 != Ea.depth && Xb && (w = t[Fa]);
                f = new ub(Ea, w);
                if (f.h) {
                    var A = f.h.url || "";
                    u.g.push(4);
                    u.h[4] = Db("top", A)
                }
                var H = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var v = f.g.url.match(Za),
                        pb = v[1],
                        qb = v[3],
                        rb = v[4];
                    t = "";
                    pb && (t += pb + ":");
                    qb && (t += "//", t += qb, rb && (t += ":" + rb));
                    var sb = t
                } else sb = "";
                H = [H, {
                    url: sb
                }];
                u.g.push(5);
                u.h[5] = H;
                Nb(this.pinger, e, u, this.i, c)
            } catch (u) {
                try {
                    Nb(this.pinger, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Jb(u),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (fa) {}
            }
            return !0
        }
    };

    function Nb(a, b, c, d = !1, e) {
        if ((d ? a.g : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Ib ? f = c : (f = new Ib, ab(c, (g, n) => {
                var l = f;
                const p = l.j++;
                g = Db(n, g);
                l.g.push(p);
                l.h[p] = g
            }));
            const h = Hb(f, "/pagead/gen_204?id=" + b + "&");
            h && cb(k, h)
        } catch (f) {}
    }

    function Pb() {
        var a = Mb,
            b = window.google_srt;
        0 <= b && 1 >= b && (a.g = b)
    }
    class Qb {
        constructor() {
            this.g = Math.random()
        }
    };
    let Mb, U;
    const V = new Cb;
    var Rb = () => {
        window.google_measure_js_timing || (V.g = !1, V.h != V.i.google_js_reporting_queue && (T() && Array.prototype.forEach.call(V.h, Bb, void 0), V.h.length = 0))
    };
    (a => {
        Mb = a ? ? new Qb;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Pb();
        U = new Ob(V);
        U.h = b => {
            const c = eb;
            0 !== c && (b.jc = String(c), b.shv = fb(c))
        };
        U.i = !0;
        "complete" == window.document.readyState ? Rb() : V.g && N(window, "load", () => {
            Rb()
        })
    })();
    var W = (a, b) => Lb(a, b);

    function Sb(a) {
        if (a.g.m && a.g.W) {
            const b = Ia(a.g.g);
            b && null != K(b, 5) && null != K(b, 6) && (a.i = new mb(K(b, 5) ? ? "", K(b, 19) ? ? ""));
            N(a.g.m, "click", W(452, () => {
                if (!a.j && (a.j = !0, a.i)) {
                    var c = a.i;
                    var d = c.g;
                    var e = d.search($a),
                        f;
                    b: {
                        for (f = 0; 0 <= (f = d.indexOf("ad_signals", f)) && f < e;) {
                            var h = d.charCodeAt(f - 1);
                            if (38 == h || 63 == h)
                                if (h = d.charCodeAt(f + 10), !h || 61 == h || 38 == h || 35 == h) break b;
                            f += 11
                        }
                        f = -1
                    }
                    if (0 > f) d = null;
                    else {
                        h = d.indexOf("&", f);
                        if (0 > h || h > e) h = e;
                        d = decodeURIComponent(d.slice(f + 11, -1 !== h ? h : 0).replace(/\+/g, " "))
                    }
                    if (d) {
                        if (d = {
                                J: d,
                                label: "closebutton_whythisad_click",
                                M: "1",
                                K: ""
                            }, c = new Na, null != d && (null != d.J && M(c, 1, d.J), null != d.aa && M(c, 3, d.aa), null != d.label && M(c, 6, d.label), null != d.M && M(c, 7, d.M), null != d.K && M(c, 8, d.K)), null != (d = Oa(k).fence)) {
                            e = d.reportEvent;
                            a: {
                                qa = !0;
                                try {
                                    var g = JSON.stringify(c.toJSON(), ta);
                                    break a
                                } finally {
                                    qa = !1
                                }
                                g = void 0
                            }
                            e.call(d, {
                                eventType: "interaction",
                                eventData: g,
                                destination: ["buyer"]
                            })
                        }
                    } else g = c.g + "&label=closebutton_whythisad_click", g += "&label_instance=1", c.h && (g += "&cid=" + c.h), cb(window, g)
                }
            }))
        }
    }

    function Tb(a) {
        if (a.g.X) N(a.g.i, "click", W(365, b => {
            const c = P.goog_interstitial_display;
            c && (c(b), b && (b.stopPropagation(), b.preventDefault()))
        }));
        else if (a.g.isMutableImpression && a.g.isMobileDevice) N(a.g.i, "click", () => a.h());
        else if (a.g.isMutableImpression && !a.g.isMobileDevice && (a.g.j && (N(a.g.j, "click", () => a.h()), N(a.g.j, "keydown", b => {
                "Enter" !== b.code && "Space" !== b.code || a.h()
            })), a.g.Z && a.g.h && N(a.g.h, "click", () => a.h())), a.g.R) Ub(a);
        else {
            N(a.g.i, "mouseover", W(367, () => Ub(a)));
            N(a.g.i, "mouseout", W(369,
                () => Vb(a, 500)));
            N(a.g.i, "touchstart", W(368, () => Ub(a)), Qa);
            const b = W(370, () => Vb(a, 4E3));
            N(a.g.i, "mouseup", b);
            N(a.g.i, "touchend", b);
            N(a.g.i, "touchcancel", b);
            a.g.m && N(a.g.m, "click", W(371, c => a.preventDefault(c)))
        }
    }

    function Ub(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.h && "block" == a.g.h.style.display || (a.g.I = Date.now(), a.g.s && a.g.h && (a.g.s.style.display = "none", a.g.h.style.display = "block"))
    }

    function Vb(a, b) {
        window.clearTimeout(a.g.o);
        a.g.o = window.setTimeout(() => Wb(a), b)
    }

    function Yb(a) {
        const b = a.g.D;
        void 0 !== b && (b.style.display = "block", a.g.enableNativeJakeUi && window.requestAnimationFrame(() => {
            Q(b, "abgacfo")
        }))
    }

    function Wb(a) {
        window.clearTimeout(a.g.o);
        a.g.o = null;
        a.g.s && a.g.h && (a.g.s.style.display = "block", a.g.h.style.display = "none")
    }
    class Zb {
        constructor(a, b) {
            this.g = a;
            this.h = b;
            this.g.Y || (this.j = !1, this.i = null, !this.g.G || this.g.adbadgeEnabled || this.g.S ? Sb(this) : (a = {
                display: "none"
            }, b = {
                width: "15px",
                height: "15px"
            }, this.g.isMobileDevice ? (R(this.g.s, a), R(this.g.h, a), R(this.g.B, b), R(this.g.A, b)) : R(this.g.A, a)), Tb(this), this.g.enableNativeJakeUi && Q(this.g.D, "abgnac"), this.g.isDelegateAttributionActive ? (Q(document.body, "goog_delegate_active"), Q(document.body, "jaa")) : (!this.g.isMutableImpression && this.g.j && Ya(this.g.j), setTimeout(() => {
                Q(document.body,
                    "jar")
            }, this.g.P ? 750 : 100)), this.g.F && Q(document.body, "goog_delegate_disabled"), this.g.autoExpandOnLoad && P.addEventListener("load", () => this.h()))
        }
        preventDefault(a) {
            if (this.g.h && "block" == this.g.h.style.display && 500 > Date.now() - this.g.I) a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            else if (this.g.openAttributionInline) {
                var b = this.g.m.getAttribute("href");
                window.adSlot ? window.adSlot.openAttribution(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openAttribution && (window.openAttribution(b),
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            } else this.g.V && (b = this.g.m.getAttribute("href"), window.adSlot ? window.adSlot.openSystemBrowser(b) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) : window.openSystemBrowser && (window.openSystemBrowser(b), a.preventDefault ? a.preventDefault() : a.returnValue = !1))
        }
    };

    function $b(a) {
        if (!a.g && (a.g = !0, P.goog_delegate_deferred_token = void 0, a.h)) {
            var b = a.i;
            a = Ma(JSON.stringify(a.h));
            if (!a) throw Error("bad attrdata");
            a = new lb(a);
            new b(a)
        }
    }
    class ac {
        constructor(a) {
            var b = bc;
            if (!b) throw Error("bad ctor");
            this.i = b;
            this.h = a;
            this.g = !1;
            Wa("goog_delegate_deferred") ? void 0 !== P.goog_delegate_deferred_token ? $b(this) : (a = () => {
                $b(this)
            }, P.goog_delegate_deferred_token = a, setTimeout(a, 5E3)) : $b(this)
        }
    };
    var cc = (a = []) => {
        k.google_logging_queue || (k.google_logging_queue = []);
        k.google_logging_queue.push([11, a])
    };
    class dc {
        constructor() {
            this.promise = new Promise(a => {
                this.resolve = a
            })
        }
    };

    function ec() {
        const {
            promise: a,
            resolve: b
        } = new dc;
        return {
            promise: a,
            resolve: b
        }
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function fc(a, b = () => {}) {
        a.google_llp || (a.google_llp = {});
        a = a.google_llp;
        let c = a[5];
        if (c) return c;
        c = ec();
        a[5] = c;
        b();
        return c
    }

    function gc(a, b) {
        return fc(a, () => {
            var c = a.document;
            const d = bb("SCRIPT", c);
            d.src = b instanceof Ua && b.constructor === Ua ? b.g : "type_error:TrustedResourceUrl";
            if (!(void 0) ? .ba) {
                var e;
                (e = (e = (d.ownerDocument && d.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? e.nonce || e.getAttribute("nonce") || "" : "") && d.setAttribute("nonce", e)
            }(c = c.getElementsByTagName("script")[0]) && c.parentNode && c.parentNode.insertBefore(d, c)
        }).promise
    };

    function hc(a) {
        a = null === a ? "null" : void 0 === a ? "undefined" : a;
        if (void 0 === Ta) {
            var b = null;
            var c = k.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: aa,
                        createScript: aa,
                        createScriptURL: aa
                    })
                } catch (d) {
                    k.console && k.console.error(d.message)
                }
                Ta = b
            } else Ta = b
        }
        a = (b = Ta) ? b.createScriptURL(a) : a;
        return new Ua(a, Va)
    };

    function ic(a) {
        cc([a]);
        new ac(a)
    }

    function jc(a) {
        const b = Oa();
        b.fence && b.fence.setReportEventDataForAutomaticBeacons && b.fence.setReportEventDataForAutomaticBeacons({
            eventType: "reserved.top_navigation",
            eventData: "mute_button_click",
            destination: []
        });
        a.g.u ? a.g.u.expandAttributionCard() : (Kb(U, 373, () => {
            Wb(a.h);
            Yb(a.h)
        }), gc(window, hc(`https://${"pagead2.googlesyndication.com"}${"/pagead/js/"+(K(a.g.g,33)??"")+"/abg_survey.js"}`)).then(c => {
            c.createAttributionCard(a.g);
            a.g.u = c;
            c.expandAttributionCard()
        }), hb())
    }
    var bc = class {
        constructor(a) {
            this.g = a;
            this.h = new Zb(this.g, W(359, () => jc(this)))
        }
    };
    eb = 60;
    const kc = gb(60, document.currentScript);
    if (null == kc) throw Error("JSC not found 60");
    const lc = {},
        mc = kc.attributes;
    for (let a = mc.length - 1; 0 <= a; a--) {
        const b = mc[a].name;
        0 === b.indexOf("data-jcp-") && (lc[b.substring(9)] = mc[a].value)
    }
    if (lc["attribution-data"]) ic(JSON.parse(lc["attribution-data"]));
    else {
        var X = ["buildAttribution"],
            Y = k;
        X[0] in Y || "undefined" == typeof Y.execScript || Y.execScript("var " + X[0]);
        for (var Z; X.length && (Z = X.shift());) X.length || void 0 === ic ? Y[Z] && Y[Z] !== Object.prototype[Z] ? Y = Y[Z] : Y = Y[Z] = {} : Y[Z] = ic
    };
}).call(this);