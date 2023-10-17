(function(sttc) {
    'use strict';
    var r, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        ea = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        fa = {},
        ha = {};

    function ia(a, b, c) {
        if (!c || null != a) {
            c = ha[b];
            if (null == c) return a[b];
            c = a[c];
            return void 0 !== c ? c : a[b]
        }
    }

    function ja(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in fa ? f = fa : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = ea && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(fa, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = ea ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ja("String.prototype.replaceAll", function(a) {
        return a ? a : function(b, c) {
            if (b instanceof RegExp && !b.global) throw new TypeError("String.prototype.replaceAll called with a non-global RegExp argument.");
            return b instanceof RegExp ? this.replace(b, c) : this.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g"), c)
        }
    }, "es_2021");
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ma;
    if (ea && "function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var oa = {
                    a: !0
                },
                pa = {};
            try {
                pa.__proto__ = oa;
                na = pa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = ma;

    function ra(a, b) {
        a.prototype = la(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.qj = b.prototype
    }
    ja("AggregateError", function(a) {
        function b(c, d) {
            d = Error(d);
            "stack" in d && (this.stack = d.stack);
            this.errors = c;
            this.message = d.message
        }
        if (a) return a;
        ra(b, Error);
        b.prototype.name = "AggregateError";
        return b
    }, "es_2021");
    ja("Promise.any", function(a) {
        return a ? a : function(b) {
            b = b instanceof Array ? b : Array.from(b);
            return Promise.all(b.map(function(c) {
                return Promise.resolve(c).then(function(d) {
                    throw d;
                }, function(d) {
                    return d
                })
            })).then(function(c) {
                throw new fa.AggregateError(c, "All promises were rejected");
            }, function(c) {
                return c
            })
        }
    }, "es_2021");
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var t = this || self;

    function sa(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }

    function ua(a) {
        var b = sa(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function va(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function wa(a) {
        return Object.prototype.hasOwnProperty.call(a, ya) && a[ya] || (a[ya] = ++Aa)
    }
    var ya = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Aa = 0;

    function Ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Ca(a, b, c) {
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

    function Fa(a, b, c) {
        Fa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ba : Ca;
        return Fa.apply(null, arguments)
    }

    function Ga(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ha(a, b, c) {
        a = a.split(".");
        c = c || t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function Ia(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.qj = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.On = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Ja(a) {
        return a
    };
    var Ka = {
        Im: 0,
        Hm: 1,
        Gm: 2
    };

    function La(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, La);
        else {
            const c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    Ia(La, Error);
    La.prototype.name = "CustomError";
    var Ma;

    function Oa(a, b) {
        a = a.split("%s");
        let c = "";
        const d = a.length - 1;
        for (let e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        La.call(this, c + a[d])
    }
    Ia(Oa, La);
    Oa.prototype.name = "AssertionError";

    function Pa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Qa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Ra(a, b) {
        var c = a.length;
        const d = "string" === typeof a ? a.split("") : a;
        for (--c; 0 <= c; --c) c in d && b.call(void 0, d[c], c, a)
    }

    function Sa(a, b) {
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

    function Ua(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Va(a, b, c) {
        let d = c;
        Qa(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Wa(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Xa(a, b) {
        return 0 <= Pa(a, b)
    }

    function Ya(a, b) {
        b = Pa(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function Za(a, b) {
        let c = 0;
        Ra(a, function(d, e) {
            b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++
        })
    }

    function $a(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function ab(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function bb(a, b) {
        for (let c = 1; c < arguments.length; c++) {
            const d = arguments[c];
            if (ua(d)) {
                const e = a.length || 0,
                    f = d.length || 0;
                a.length = e + f;
                for (let g = 0; g < f; g++) a[e + g] = d[g]
            } else a.push(d)
        }
    }

    function cb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function db(a, b, c) {
        c = c || eb;
        let d = 0,
            e = a.length,
            f;
        for (; d < e;) {
            const g = d + (e - d >>> 1);
            let h;
            h = c(b, a[g]);
            0 < h ? d = g + 1 : (e = g, f = !h)
        }
        return f ? d : -d - 1
    }

    function fb(a, b) {
        if (!ua(a) || !ua(b) || a.length != b.length) return !1;
        const c = a.length,
            d = gb;
        for (let e = 0; e < c; e++)
            if (!d(a[e], b[e])) return !1;
        return !0
    }

    function eb(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function gb(a, b) {
        return a === b
    }

    function hb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = hb.apply(null, cb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function jb(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };
    var kb = {
        Ej: "google_adtest",
        Ij: "google_ad_client",
        Jj: "google_ad_format",
        Lj: "google_ad_height",
        Yj: "google_ad_width",
        Pj: "google_ad_layout",
        Qj: "google_ad_layout_key",
        Rj: "google_ad_output",
        Sj: "google_ad_region",
        Vj: "google_ad_slot",
        Wj: "google_ad_type",
        Xj: "google_ad_url",
        Zj: "google_allow_expandable_ads",
        wk: "google_analytics_domain_name",
        xk: "google_analytics_uacct",
        Lk: "google_container_id",
        Vk: "google_gl",
        yl: "google_enable_ose",
        Il: "google_full_width_responsive",
        Lm: "google_rl_filtering",
        Km: "google_rl_mode",
        Mm: "google_rt",
        Jm: "google_rl_dest_url",
        om: "google_max_radlink_len",
        um: "google_num_radlinks",
        vm: "google_num_radlinks_per_unit",
        Hj: "google_ad_channel",
        nm: "google_max_num_ads",
        pm: "google_max_responsive_height",
        Gk: "google_color_border",
        xl: "google_enable_content_recommendations",
        Sk: "google_content_recommendation_ui_type",
        Rk: "google_source_type",
        Qk: "google_content_recommendation_rows_num",
        Pk: "google_content_recommendation_columns_num",
        Ok: "google_content_recommendation_ad_positions",
        Tk: "google_content_recommendation_use_square_imgs",
        Ik: "google_color_link",
        Hk: "google_color_line",
        Kk: "google_color_url",
        Fj: "google_ad_block",
        Uj: "google_ad_section",
        Gj: "google_ad_callback",
        Dk: "google_captcha_token",
        Jk: "google_color_text",
        lk: "google_alternate_ad_url",
        Oj: "google_ad_host_tier_id",
        Ek: "google_city",
        Mj: "google_ad_host",
        Nj: "google_ad_host_channel",
        mk: "google_alternate_color",
        Fk: "google_color_bg",
        zl: "google_encoding",
        Gl: "google_font_face",
        Yk: "google_cust_ch",
        bl: "google_cust_job",
        al: "google_cust_interests",
        Zk: "google_cust_id",
        dl: "google_cust_u_url",
        Kl: "google_hints",
        am: "google_image_size",
        qm: "google_mtl",
        vn: "google_cpm",
        Nk: "google_contents",
        sm: "google_native_settings_key",
        Uk: "google_country",
        mn: "google_targeting",
        Hl: "google_font_size",
        il: "google_disable_video_autoplay",
        Jn: "google_video_product_type",
        In: "google_video_doc_id",
        Hn: "google_cust_gender",
        dn: "google_cust_lh",
        cn: "google_cust_l",
        un: "google_tfs",
        rm: "google_native_ad_template",
        gm: "google_kw",
        hn: "google_tag_for_child_directed_treatment",
        jn: "google_tag_for_under_age_of_consent",
        Om: "google_region",
        Xk: "google_cust_criteria",
        Tj: "google_safe",
        Wk: "google_ctr_threshold",
        Pm: "google_resizing_allowed",
        Rm: "google_resizing_width",
        Qm: "google_resizing_height",
        Gn: "google_cust_age",
        LANGUAGE: "google_language",
        hm: "google_kw_type",
        Dm: "google_pucrd",
        Bm: "google_page_url",
        ln: "google_tag_partner",
        Vm: "google_restrict_data_processing",
        Aj: "google_adbreak_test",
        Kj: "google_ad_frequency_hint",
        Cj: "google_admob_interstitial_slot",
        Dj: "google_admob_rewarded_slot",
        Bj: "google_admob_ads_only",
        mm: "google_max_ad_content_rating",
        Fm: "google_ad_public_floor",
        Em: "google_ad_private_floor",
        Fn: "google_traffic_source",
        Zm: "google_shadow_mode",
        ym: "google_overlays",
        Cm: "google_privacy_treatments",
        fn: "google_special_category_data"
    };

    function lb(a, b) {
        this.l = a === mb && b || "";
        this.m = nb
    }
    lb.prototype.Pa = !0;
    lb.prototype.j = function() {
        return this.l
    };

    function ob(a) {
        return a instanceof lb && a.constructor === lb && a.m === nb ? a.l : "type_error:Const"
    }

    function pb(a) {
        return new lb(mb, a)
    }
    var nb = {},
        mb = {};

    function qb() {
        return !1
    }

    function rb() {
        return !0
    }

    function sb(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function tb(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function ub(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function vb(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function wb(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function xb(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var yb = {
            passive: !0
        },
        zb = ub(function() {
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

    function Ab(a) {
        return a ? a.passive && zb() ? a : a.capture || !1 : !1
    }

    function Bb(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, Ab(d)), !0) : !1
    }

    function Cb(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, Ab(d)), !0) : !1
    };
    var Db, Eb;
    a: {
        for (var Fb = ["CLOSURE_FLAGS"], Gb = t, Hb = 0; Hb < Fb.length; Hb++)
            if (Gb = Gb[Fb[Hb]], null == Gb) {
                Eb = null;
                break a
            }
        Eb = Gb
    }
    var Ib = Eb && Eb[610401301];
    Db = null != Ib ? Ib : !1;

    function Jb(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Kb(a) {
        if (!Lb.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Mb, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Nb, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ob, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Pb, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Qb, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Rb, "&#0;"));
        return a
    }
    var Mb = /&/g,
        Nb = /</g,
        Ob = />/g,
        Pb = /"/g,
        Qb = /'/g,
        Rb = /\x00/g,
        Lb = /[\x00&<>"']/;

    function Sb(a, b) {
        return -1 != a.indexOf(b)
    };

    function Tb() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Ub;
    const Vb = t.navigator;
    Ub = Vb ? Vb.userAgentData || null : null;

    function Wb(a) {
        return Db ? Ub ? Ub.brands.some(({
            brand: b
        }) => b && Sb(b, a)) : !1 : !1
    }

    function u(a) {
        return Sb(Tb(), a)
    };

    function Xb() {
        return Db ? !!Ub && 0 < Ub.brands.length : !1
    }

    function Yb() {
        return Xb() ? !1 : u("Opera")
    }

    function Zb() {
        return Xb() ? !1 : u("Trident") || u("MSIE")
    }

    function $b() {
        return u("Safari") && !(ac() || (Xb() ? 0 : u("Coast")) || Yb() || (Xb() ? 0 : u("Edge")) || (Xb() ? Wb("Microsoft Edge") : u("Edg/")) || (Xb() ? Wb("Opera") : u("OPR")) || u("Firefox") || u("FxiOS") || u("Silk") || u("Android"))
    }

    function ac() {
        return Xb() ? Wb("Chromium") : (u("Chrome") || u("CriOS")) && !(Xb() ? 0 : u("Edge")) || u("Silk")
    }

    function bc() {
        return u("Android") && !(ac() || u("Firefox") || u("FxiOS") || Yb() || u("Silk"))
    };

    function cc(a) {
        cc[" "](a);
        return a
    }
    cc[" "] = function() {};

    function dc(a, b) {
        try {
            return cc(a[b]), !0
        } catch (c) {}
        return !1
    };
    var ec = Yb(),
        fc = Zb(),
        gc = u("Edge"),
        hc = gc || fc,
        ic = u("Gecko") && !(Sb(Tb().toLowerCase(), "webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        jc = Sb(Tb().toLowerCase(), "webkit") && !u("Edge");

    function kc() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var lc;
    a: {
        var mc = "",
            nc = function() {
                var a = Tb();
                if (ic) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (gc) return /Edge\/([\d\.]+)/.exec(a);
                if (fc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (jc) return /WebKit\/(\S+)/.exec(a);
                if (ec) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();nc && (mc = nc ? nc[1] : "");
        if (fc) {
            var oc = kc();
            if (null != oc && oc > parseFloat(mc)) {
                lc = String(oc);
                break a
            }
        }
        lc = mc
    }
    var pc = lc,
        qc;
    if (t.document && fc) {
        var rc = kc();
        qc = rc ? rc : parseInt(pc, 10) || void 0
    } else qc = void 0;
    var sc = qc;

    function tc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function uc(a) {
        var b = vc;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function xc(a) {
        const b = [];
        let c = 0;
        for (const d in a) b[c++] = a[d];
        return b
    }

    function yc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const zc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ac(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < zc.length; f++) c = zc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Bc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Cc;

    function Dc() {
        if (void 0 === Cc) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: Ja,
                        createScript: Ja,
                        createScriptURL: Ja
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                Cc = a
            } else Cc = a
        }
        return Cc
    };
    class Ec {
        constructor(a) {
            this.l = a;
            this.Pa = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l.toString()
        }
    };
    var Fc = class {
        constructor(a) {
            this.l = a
        }
        toString() {
            return this.l + ""
        }
    };
    Fc.prototype.Pa = !0;
    Fc.prototype.j = function() {
        return this.l.toString()
    };

    function Gc(a, b) {
        a = Hc.exec(Ic(a).toString());
        var c = a[3] || "";
        return Jc(a[1] + Kc("?", a[2] || "", b) + Kc("#", c))
    }

    function Ic(a) {
        return a instanceof Fc && a.constructor === Fc ? a.l : "type_error:TrustedResourceUrl"
    }

    function Lc(a, b) {
        var c = ob(a);
        if (!Mc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Nc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof lb ? ob(d) : encodeURIComponent(String(d))
        });
        return Jc(a)
    }
    var Nc = /%{(\w+)}/g,
        Mc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Hc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Oc = {};

    function Jc(a) {
        const b = Dc();
        a = b ? b.createScriptURL(a) : a;
        return new Fc(a, Oc)
    }

    function Kc(a, b, c) {
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
    var Pc = class {
        constructor(a) {
            this.l = a
        }
        toString() {
            return this.l.toString()
        }
    };
    Pc.prototype.Pa = !0;
    Pc.prototype.j = function() {
        return this.l.toString()
    };

    function Qc(a) {
        return a instanceof Pc && a.constructor === Pc ? a.l : "type_error:SafeUrl"
    }
    var Rc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
        Sc = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function Tc(a) {
        if (a instanceof Pc) return a;
        a = "object" == typeof a && a.Pa ? a.j() : String(a);
        Sc.test(a) ? a = new Pc(a, Uc) : (a = String(a).replace(/(%0A|%0D)/g, ""), a = a.match(Rc) ? new Pc(a, Uc) : null);
        return a
    }
    var Uc = {},
        Vc = new Pc("about:invalid#zClosurez", Uc);
    const Zc = {};

    function $c(a) {
        return a instanceof ad && a.constructor === ad ? a.l : "type_error:SafeStyle"
    }

    function bd(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(cd).join(" ") : cd(d), b += `${c}:${d};`)
            }
        return b ? new ad(b, Zc) : dd
    }
    class ad {
        constructor(a) {
            this.l = a;
            this.Pa = !0
        }
        j() {
            return this.l
        }
        toString() {
            return this.l.toString()
        }
    }
    var dd = new ad("", Zc);

    function cd(a) {
        if (a instanceof Pc) return 'url("' + Qc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof lb) a = ob(a);
        else {
            a = String(a);
            var b = a.replace(ed, "$1").replace(ed, "$1").replace(fd, "url");
            if (gd.test(b)) {
                if (b = !hd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && id(a)
                }
                a = b ? jd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Oa("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function id(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const gd = RegExp("^[-+,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        fd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        ed = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|radial-gradient|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|steps|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        hd = /\/\*/;

    function jd(a) {
        return a.replace(fd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, k) => {
                f = h;
                return k
            });
            b = (Tc(d) || Vc).j();
            return c + f + b + f + e
        })
    };
    const kd = {};

    function ld(a) {
        return a instanceof md && a.constructor === md ? a.l : "type_error:SafeStyleSheet"
    }
    class md {
        constructor(a) {
            this.l = a;
            this.Pa = !0
        }
        toString() {
            return this.l.toString()
        }
        j() {
            return this.l
        }
    };
    const nd = {};

    function od(a) {
        return a instanceof pd && a.constructor === pd ? a.l : "type_error:SafeHtml"
    }

    function qd(a) {
        return a instanceof pd ? a : rd(Kb("object" == typeof a && a.Pa ? a.j() : String(a)))
    }

    function rd(a) {
        const b = Dc();
        a = b ? b.createHTML(a) : a;
        return new pd(a, nd)
    }

    function sd(a) {
        if (!td.test(a)) throw Error("");
        if (a.toUpperCase() in ud) throw Error("");
    }

    function vd(a, b, c) {
        var d = "";
        if (b)
            for (let g in b)
                if (Object.prototype.hasOwnProperty.call(b, g)) {
                    if (!td.test(g)) throw Error("");
                    var e = b[g];
                    if (null != e) {
                        var f = g;
                        if (e instanceof lb) e = ob(e);
                        else if ("style" == f.toLowerCase()) {
                            if (!va(e)) throw Error("");
                            e instanceof ad || (e = bd(e));
                            e = $c(e)
                        } else {
                            if (/^on/i.test(f)) throw Error("");
                            if (f.toLowerCase() in wd)
                                if (e instanceof Fc) e = Ic(e).toString();
                                else if (e instanceof Pc) e = Qc(e);
                            else if ("string" === typeof e) e = (Tc(e) || Vc).j();
                            else throw Error("");
                        }
                        e.Pa && (e = e.j());
                        f = `${f}="` +
                            Kb(String(e)) + '"';
                        d += " " + f
                    }
                }
        b = `<${a}` + d;
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Bc[a.toLowerCase()] ? b += ">" : (c = xd(c), b += ">" + od(c).toString() + "</" + a + ">");
        return rd(b)
    }

    function yd(a) {
        const b = qd(zd),
            c = [],
            d = e => {
                Array.isArray(e) ? e.forEach(d) : (e = qd(e), c.push(od(e).toString()))
            };
        a.forEach(d);
        return rd(c.join(od(b).toString()))
    }

    function xd(a) {
        return yd(Array.prototype.slice.call(arguments))
    }
    class pd {
        constructor(a) {
            this.l = a;
            this.Pa = !0
        }
        j() {
            return this.l.toString()
        }
        toString() {
            return this.l.toString()
        }
    }
    const td = /^[a-zA-Z0-9-]+$/,
        wd = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        ud = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Ad = rd("<!DOCTYPE html>"),
        zd = new pd(t.trustedTypes && t.trustedTypes.emptyHTML || "", nd),
        Bd = rd("<br>");
    var Cd = ub(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = od(zd);
        return !b.parentElement
    });

    function Dd(a, b) {
        if (Cd())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = od(b)
    }
    var Ed = /^[\w+/_-]+[=]{0,2}$/;

    function Fd(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function Gd(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function Hd(a) {
        return Gd.apply(null, arguments) / arguments.length
    };

    function Id(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    Id.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    Id.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    Id.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function Jd(a, b) {
        this.width = a;
        this.height = b
    }

    function Kd(a, b) {
        return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
    }
    r = Jd.prototype;
    r.aspectRatio = function() {
        return this.width / this.height
    };
    r.isEmpty = function() {
        return !(this.width * this.height)
    };
    r.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    r.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    r.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function Ld(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(Md, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.slice(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = rd(e + " "), Dd(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var Md = /&([^;\s<&]+);?/g;

    function Nd(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }

    function Od(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function Pd(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function Qd(a) {
        return a ? new Rd(Sd(a)) : Ma || (Ma = new Rd)
    }

    function Td(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Jd(a.clientWidth, a.clientHeight)
    }

    function Ud(a) {
        var b = a.scrollingElement ? a.scrollingElement : jc || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = Vd(a);
        return fc && a.pageYOffset != b.scrollTop ? new Id(b.scrollLeft, b.scrollTop) : new Id(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function Vd(a) {
        return a.parentWindow || a.defaultView
    }

    function Wd(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!ua(f) || va(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (va(f)) {
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
                Qa(g ? ab(f) : f, d)
            }
        }
    }

    function Xd(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Yd(a, b) {
        var c = Xd(a, "DIV");
        fc ? (b = xd(Bd, b), Dd(c, b), c.removeChild(c.firstChild)) : Dd(c, b);
        if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
        else {
            for (a = a.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
            c = a
        }
        return c
    }

    function Sd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var Zd = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        $d = {
            IMG: " ",
            BR: "\n"
        };

    function ae(a) {
        var b = [];
        be(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function be(a, b, c) {
        if (!(a.nodeName in Zd))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in $d) b.push($d[a.nodeName]);
        else
            for (a = a.firstChild; a;) be(a, b, c), a = a.nextSibling
    }

    function ce(a, b, c) {
        if (!b && !c) return null;
        var d = b ? String(b).toUpperCase() : null;
        return de(a, function(e) {
            return (!d || e.nodeName == d) && (!c || "string" === typeof e.className && Xa(e.className.split(/\s+/), c))
        })
    }

    function de(a, b) {
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function Rd(a) {
        this.j = a || t.document || document
    }
    r = Rd.prototype;
    r.jh = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    r.zj = Rd.prototype.jh;
    r.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    r.createElement = function(a) {
        return Xd(this.j, a)
    };
    r.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };

    function ee(a, b) {
        return Yd(a.j, b)
    }
    r.X = function() {
        return Vd(this.j)
    };
    r.append = function(a, b) {
        Wd(Sd(a), a, arguments)
    };
    r.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    r.ki = function(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    };

    function fe() {
        return Db && Ub ? Ub.mobile : !he() && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    }

    function he() {
        return Db && Ub ? !Ub.mobile && (u("iPad") || u("Android") || u("Silk")) : u("iPad") || u("Android") && !u("Mobile") || u("Silk")
    };
    var ie = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function je(a, b) {
        if (!b) return a;
        var c = a.indexOf("#");
        0 > c && (c = a.length);
        var d = a.indexOf("?");
        if (0 > d || d > c) {
            d = c;
            var e = ""
        } else e = a.substring(d + 1, c);
        a = [a.slice(0, d), e, a.slice(c)];
        c = a[1];
        a[1] = b ? c ? c + "&" + b : b : c;
        return a[0] + (a[1] ? "?" + a[1] : "") + a[2]
    }

    function ke(a, b, c) {
        if (Array.isArray(b))
            for (var d = 0; d < b.length; d++) ke(a, String(b[d]), c);
        else null != b && c.push(a + ("" === b ? "" : "=" + encodeURIComponent(String(b))))
    };

    function le(a, b) {
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = b
    };
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function me(a) {
        a: {
            try {
                var b = new URL(a)
            } catch (c) {
                b = "https:";
                break a
            }
            b = b.protocol
        }
        if ("javascript:" !== b) return a
    };

    function ne(a) {
        var b = oe("#", pe) || Vc;
        b = b instanceof Pc ? Qc(b) : me(b);
        void 0 !== b && (a.href = b)
    };
    var qe = class {};
    class re extends qe {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j
        }
    };

    function se(a, b, c) {
        var d = [te `width`, te `height`];
        if (0 === d.length) throw Error("");
        d = d.map(f => {
            if (f instanceof re) f = f.j;
            else throw Error("");
            return f
        });
        const e = b.toLowerCase();
        if (d.every(f => 0 !== e.indexOf(f))) throw Error(`Attribute "${b}" does not match any of the allowed prefixes.`);
        a.setAttribute(b, c)
    };

    function ue(a, b = `unexpected value ${a}!`) {
        throw Error(b);
    };
    const ve = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function we(a, b, c) {
        if (b instanceof Fc) a.href = Ic(b).toString();
        else {
            if (-1 === ve.indexOf(c)) throw Error(`TrustedResourceUrl href attribute required with rel="${c}"`);
            b = b instanceof Pc ? Qc(b) : me(b);
            if (void 0 === b) return;
            a.href = b
        }
        a.rel = c
    };

    function xe(a, b) {
        a.src = Ic(b);
        (void 0) ? .Un || (b = (b = (a.ownerDocument && a.ownerDocument.defaultView || window).document.querySelector ? .("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    };
    class ye {
        constructor(a) {
            this.Gi = a
        }
    }

    function ze(a) {
        return new ye(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const pe = [ze("data"), ze("http"), ze("https"), ze("mailto"), ze("ftp"), new ye(a => /^[^:]*([/?#]|$)/.test(a))];

    function oe(a, b = pe) {
        if (a instanceof Pc) return a;
        for (let c = 0; c < b.length; ++c) {
            const d = b[c];
            if (d instanceof ye && d.Gi(a)) return new Pc(a, Uc)
        }
    };

    function Ae(a) {
        try {
            return !!a && null != a.location.href && dc(a, "foo")
        } catch {
            return !1
        }
    }

    function Be(a, b = t) {
        b = Ce(b);
        let c = 0;
        for (; b && 40 > c++ && !a(b);) b = Ce(b)
    }

    function Ce(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch {}
        return null
    }

    function De(a) {
        return Ae(a.top) ? a.top : null
    }

    function Ee(a, b) {
        const c = Fe("SCRIPT", a);
        xe(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Ge(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function He() {
        if (!globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }

    function Ie(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Je(a) {
        const b = [];
        Ie(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Ke(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Me = ub(() => Wa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Le) || 1E-4 > Math.random());
    const Le = a => Sb(Tb(), a);
    var Ne = /^([0-9.]+)px$/,
        Oe = /^(-?[0-9.]{1,30})$/;

    function Pe(a) {
        if (!Oe.test(a)) return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }

    function Qe(a) {
        return (a = Ne.exec(a)) ? +a[1] : null
    }

    function Re() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch {}
        return ""
    }
    var Se = {
        ak: "allow-forms",
        bk: "allow-modals",
        ck: "allow-orientation-lock",
        dk: "allow-pointer-lock",
        ek: "allow-popups",
        fk: "allow-popups-to-escape-sandbox",
        gk: "allow-presentation",
        hk: "allow-same-origin",
        ik: "allow-scripts",
        jk: "allow-top-navigation",
        kk: "allow-top-navigation-by-user-activation"
    };
    const Te = ub(() => Je(Se));

    function Ue() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = Te();
        return a.length ? Sa(b, c => !Xa(a, c)) : b
    }

    function Ve() {
        const a = Fe("IFRAME"),
            b = {};
        Qa(Te(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var We = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch {
                return !1
            }
        },
        Xe = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (We(a, b)) return a;
                if (!(a = Ce(a))) break
            }
            return null
        },
        Ye = ub(() => fe() ? 2 : he() ? 1 : 0),
        w = (a, b) => {
            Ie(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        };
    const Ze = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        $e = /\.proxy\.(googleprod|googlers)\.com(:\d+)?$/,
        af = /.*domain\.test$/,
        bf = /\.prod\.google\.com(:\d+)?$/;
    var cf = a => Ze[a] || $e.test(a) || af.test(a) || bf.test(a);
    let df = [];
    const ef = () => {
        const a = df;
        df = [];
        for (const b of a) try {
            b()
        } catch {}
    };
    var ff = () => {
            var a = Math.random;
            return Math.floor(a() * 2 ** 52)
        },
        gf = (a, b) => {
            if ("number" !== typeof a.goog_pvsid) try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: ff(),
                    configurable: !1
                })
            } catch (c) {
                b && b.Ba(784, c)
            }
            a = Number(a.goog_pvsid);
            b && (!a || 0 >= a) && b.Ba(784, Error(`Invalid correlator, ${a}`));
            return a || -1
        },
        hf = (a, b) => {
            "complete" === a.document.readyState ? (df.push(b), 1 == df.length && (window.Promise ? Promise.resolve().then(ef) : window.setImmediate ? setImmediate(ef) : setTimeout(ef, 0))) : a.addEventListener("load", b)
        },
        jf = (a,
            b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function Fe(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var kf = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Ae(a) && (b = a);
        return b
    };

    function lf(a) {
        t.setTimeout(() => {
            throw a;
        }, 0)
    };
    bc();
    ac();
    $b();
    var mf = {},
        nf = null;

    function of (a) {
        var b = 3;
        void 0 === b && (b = 0);
        pf();
        b = mf[b];
        const c = Array(Math.floor(a.length / 3)),
            d = b[64] || "";
        let e = 0,
            f = 0;
        for (; e < a.length - 2; e += 3) {
            var g = a[e],
                h = a[e + 1],
                k = a[e + 2],
                l = b[g >> 2];
            g = b[(g & 3) << 4 | h >> 4];
            h = b[(h & 15) << 2 | k >> 6];
            k = b[k & 63];
            c[f++] = l + g + h + k
        }
        l = 0;
        k = d;
        switch (a.length - e) {
            case 2:
                l = a[e + 1], k = b[(l & 15) << 2] || d;
            case 1:
                a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
        }
        return c.join("")
    }

    function qf(a) {
        var b = [];
        rf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function rf(a, b) {
        function c(k) {
            for (; d < a.length;) {
                var l = a.charAt(d++),
                    m = nf[l];
                if (null != m) return m;
                if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
            }
            return k
        }
        pf();
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

    function pf() {
        if (!nf) {
            nf = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                var d = a.concat(b[c].split(""));
                mf[c] = d;
                for (var e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === nf[f] && (nf[f] = e)
                }
            }
        }
    };

    function sf(a) {
        let b = "",
            c = 0;
        const d = a.length - 10240;
        for (; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    const tf = /[-_.]/g,
        uf = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function vf(a) {
        return uf[a] || ""
    }

    function wf(a) {
        return null != a && a instanceof Uint8Array
    }
    let xf;
    var yf = {};
    let zf;

    function Af(a) {
        if (a !== yf) throw Error("illegal external caller");
    }

    function Bf() {
        return zf || (zf = new Cf(null, yf))
    }
    var Cf = class {
        constructor(a, b) {
            Af(b);
            this.M = a;
            if (null != a && 0 === a.length) throw Error("ByteString should be constructed with non-empty values");
        }
        isEmpty() {
            return null == this.M
        }
    };

    function Df(a) {
        return Array.prototype.slice.call(a)
    };
    const y = Symbol();

    function Gf(a) {
        const b = a[y] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = Df(a)), a[y] = b | 1)
    }

    function Hf() {
        var a = [];
        a[y] |= 1;
        return a
    }

    function If(a) {
        a[y] |= 34;
        return a
    }

    function Jf(a) {
        a[y] |= 32;
        return a
    }

    function Kf(a, b) {
        b[y] = (a | 0) & -255
    }

    function Lf(a, b) {
        b[y] = (a | 34) & -221
    }

    function Mf(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Nf = {};

    function Of(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Pf;

    function Qf(a, b, c) {
        if (null != a)
            if ("string" === typeof a) a = a ? new Cf(a, yf) : Bf();
            else if (a.constructor !== Cf)
            if (wf(a)) {
                var d;
                c ? d = 0 == a.length ? Bf() : new Cf(a, yf) : d = a.length ? new Cf(new Uint8Array(a), yf) : Bf();
                a = d
            } else {
                if (!b) throw Error();
                a = void 0
            }
        return a
    }
    var Rf;
    const Sf = [];
    Sf[y] = 55;
    Rf = Object.freeze(Sf);

    function Tf(a) {
        if (a & 2) throw Error();
    }
    class Uf {
        constructor(a, b, c) {
            this.m = 0;
            this.j = a;
            this.l = b;
            this.v = c
        }
        next() {
            if (this.m < this.j.length) {
                const a = this.j[this.m++];
                return {
                    done: !1,
                    value: this.l ? this.l.call(this.v, a) : a
                }
            }
            return {
                done: !0,
                value: void 0
            }
        }[Symbol.iterator]() {
            return new Uf(this.j, this.l, this.v)
        }
    }
    var Vf = {};
    let Wf;

    function Xf(a) {
        if (Wf) throw Error("");
        Wf = a
    }

    function Yf(a) {
        if (Wf) try {
            Wf(a)
        } catch (b) {
            throw b.cause = a, b;
        }
    }

    function Zf() {
        const a = $f();
        Wf ? t.setTimeout(() => {
            Yf(a)
        }, 0) : lf(a)
    }

    function ag() {
        const a = Error();
        le(a, "warning");
        Yf(a);
        return a
    }

    function $f() {
        const a = Error();
        le(a, "incident");
        return a
    };

    function bg(a) {
        if (null != a && "number" !== typeof a) throw Error(`Value of float/double field must be a number, found ${typeof a}: ${a}`);
        return a
    }

    function cg(a) {
        if ("boolean" !== typeof a) throw Error(`Expected boolean but got ${sa(a)}: ${a}`);
        return !!a
    }
    const dg = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function eg(a) {
        const b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : dg.test(a)
    }

    function fg(a) {
        return "number" === typeof a && Number.isFinite(a) || !!a && "string" === typeof a && isFinite(a)
    }

    function gg(a) {
        null != a && (Number.isFinite(a) || Zf());
        return a
    }

    function hg(a) {
        return a
    }

    function ig(a) {
        if ("number" !== typeof a) throw ag();
        Number.isFinite(a) || Zf();
        return a
    }

    function jg(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function kg(a) {
        if ("number" !== typeof a) throw ag();
        Number.isFinite(a) || Zf();
        return a
    }

    function lg(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return a
    }

    function mg(a) {
        if (!fg(a)) throw ag();
        eg(a) || Zf();
        return "string" === typeof a ? a : a
    }

    function ng(a) {
        if (null == a) return a;
        if (fg(a)) return "number" === typeof a ? a : a
    }

    function og(a) {
        if (!fg(a)) throw ag();
        eg(a) || Zf();
        return a
    }

    function pg(a) {
        return null == a ? a : og(a)
    }

    function qg(a) {
        if ("string" !== typeof a) throw Error();
        return a
    }

    function rg(a) {
        if (null != a && "string" !== typeof a) throw Error();
        return a
    }

    function sg(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function tg(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.Re === Nf) return a;
        if (!e) return c ? d & 2 ? ug(b) : new b : void 0;
        e = c = a[y] | 0;
        0 === e && (e |= d & 32);
        e |= d & 2;
        e !== c && (a[y] = e);
        return new b(a)
    }
    const vg = Symbol();

    function ug(a) {
        var b = a[vg];
        if (b) return b;
        b = new a;
        If(b.U);
        return a[vg] = b
    }

    function wg(a) {
        return a
    }

    function xg(a, b, c) {
        return "string" === typeof a ? a : c ? "" : void 0
    };

    function yg(a) {
        if (a.l & 2) throw Error("Cannot mutate an immutable Map");
    }
    var Cg = class extends Map {
        constructor(a, b, c = wg, d = wg) {
            super();
            let e = a[y] | 0;
            e |= 64;
            this.l = a[y] = e;
            this.m = b;
            this.j = c || wg;
            this.A = this.m ? zg : d || wg;
            for (let f = 0; f < a.length; f++) {
                const g = a[f],
                    h = c(g[0], !1, !0);
                let k = g[1];
                b ? void 0 === k && (k = null) : k = d(g[1], !1, !0, void 0, void 0, e);
                super.set(h, k)
            }
        }
        C(a = Ag) {
            return this.v(a)
        }
        v(a = Ag) {
            const b = [],
                c = super.entries();
            for (var d; !(d = c.next()).done;) d = d.value, d[0] = a(d[0]), d[1] = a(d[1]), b.push(d);
            return b
        }
        clear() {
            yg(this);
            super.clear()
        }
        delete(a) {
            yg(this);
            return super.delete(this.j(a, !0, !1))
        }
        entries() {
            var a = this.B();
            return new Uf(a, Bg, this)
        }
        keys() {
            return this.F()
        }
        values() {
            var a = this.B();
            return new Uf(a, Cg.prototype.get, this)
        }
        forEach(a, b) {
            super.forEach((c, d) => {
                a.call(b, this.get(d), d, this)
            })
        }
        set(a, b) {
            yg(this);
            a = this.j(a, !0, !1);
            return null == a ? this : null == b ? (super.delete(a), this) : super.set(a, this.A(b, !0, !0, this.m, !1, this.l))
        }
        has(a) {
            return super.has(this.j(a, !1, !1))
        }
        get(a) {
            a = this.j(a, !1, !1);
            const b = super.get(a);
            if (void 0 !== b) {
                var c = this.m;
                return c ? (c = this.A(b, !1, !0, c, this.G, this.l),
                    c !== b && super.set(a, c), c) : b
            }
        }
        B() {
            return Array.from(super.keys())
        }
        F() {
            return super.keys()
        }[Symbol.iterator]() {
            return this.entries()
        }
    };
    Cg.prototype.toJSON = void 0;

    function zg(a, b, c, d, e, f) {
        a = tg(a, d, c, f);
        e && (a = Dg(a));
        return a
    }

    function Ag(a) {
        return a
    }

    function Bg(a) {
        return [a, this.get(a)]
    };
    let Eg;

    function Fg(a, b) {
        Eg = b;
        a = new a(b);
        Eg = void 0;
        return a
    };

    function Gg(a, b) {
        return Hg(b)
    }

    function Hg(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a && !Array.isArray(a)) {
                    if (wf(a)) return sf(a);
                    if (a instanceof Cf) {
                        const b = a.M;
                        return null == b ? "" : "string" === typeof b ? b : a.M = sf(b)
                    }
                    if (a instanceof Cg) return a.C()
                }
        }
        return a
    };

    function Ig(a, b, c) {
        a = Df(a);
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

    function Jg(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && (a[y] | 0) & 1 ? void 0 : f && (a[y] | 0) & 2 ? a : Kg(a, b, c, void 0 !== d, e, f);
            else if (Of(a)) {
                const g = {};
                for (let h in a) Object.prototype.hasOwnProperty.call(a, h) && (g[h] = Jg(a[h], b, c, d, e, f));
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Kg(a, b, c, d, e, f) {
        const g = d || c ? a[y] | 0 : 0;
        d = d ? !!(g & 32) : void 0;
        a = Df(a);
        for (let h = 0; h < a.length; h++) a[h] = Jg(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }

    function Lg(a) {
        return Jg(a, Mg, void 0, void 0, !1, !1)
    }

    function Mg(a) {
        return a.Re === Nf ? a.toJSON() : a instanceof Cg ? a.C(Lg) : Hg(a)
    };

    function Ng(a, b, c = Lf) {
        if (null != a) {
            if (a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = a[y] | 0;
                if (d & 2) return a;
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (a[y] = d | 34, d & 4 && Object.freeze(a), a) : Kg(a, Ng, d & 4 ? Lf : c, !0, !1, !0)
            }
            a.Re === Nf ? (c = a.U, d = c[y], a = d & 2 ? a : Fg(a.constructor, Og(c, d, !0))) : a instanceof Cg && (c = If(a.v(Ng)), a = new Cg(c, a.m, a.j, a.A));
            return a
        }
    }

    function Pg(a) {
        const b = a.U;
        return Fg(a.constructor, Og(b, b[y], !1))
    }

    function Og(a, b, c) {
        const d = c || b & 2 ? Lf : Kf,
            e = !!(b & 32);
        a = Ig(a, b, f => Ng(f, e, d));
        a[y] = a[y] | 32 | (c ? 2 : 0);
        return a
    }

    function Dg(a) {
        const b = a.U,
            c = b[y];
        return c & 2 ? Fg(a.constructor, Og(b, c, !1)) : a
    };

    function z(a, b) {
        a = a.U;
        return Qg(a, a[y], b)
    }

    function Qg(a, b, c, d) {
        if (-1 === c) return null;
        if (c >= Mf(b)) {
            if (b & 256) return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
            b = c + (+!!(b & 512) - 1);
            if (b < e) return a[b]
        }
    }

    function Rg(a, b, c) {
        const d = a.U,
            e = d[y];
        Tf(e);
        Sg(d, e, b, c);
        return a
    }

    function Sg(a, b, c, d, e) {
        var f = Mf(b);
        if (c >= f || e) {
            e = b;
            if (b & 256) f = a[a.length - 1];
            else {
                if (null == d) return;
                f = a[f + (+!!(b & 512) - 1)] = {};
                e |= 256
            }
            f[c] = d;
            e !== b && (a[y] = e)
        } else a[c + (+!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Tg(a, b, c) {
        return void 0 !== Ug(a, b, c, !1)
    }

    function Vg(a, b, c, d, e) {
        var f = b & 2;
        let g = Qg(a, b, c, e);
        Array.isArray(g) || (g = Rf);
        const h = !(d & 2),
            k = !(d & 1);
        d = !!(b & 32);
        let l = g[y] | 0;
        0 !== l || !d || f || h ? l & 1 || (l |= 1, g[y] = l) : (l |= 33, g[y] = l);
        f ? (l & 2 || If(g), k && Object.freeze(g)) : (f = l & 2, k && f ? (g = Df(g), f = 1, d && !h && (f |= 32), g[y] = f, Sg(a, b, c, g, e)) : h && l & 32 && !f && (g[y] &= -33));
        return g
    }

    function Wg(a, b) {
        a = a.U;
        const c = a[y],
            d = Qg(a, c, b);
        var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && Sg(a, c, b, e);
        return e
    }

    function Xg(a, b) {
        a = z(a, b);
        return null == a ? a : "boolean" !== typeof a && "number" !== typeof a ? void 0 : !!a
    }

    function Yg(a, b, c, d, e) {
        a = a.U;
        const f = a[y],
            g = f & 2;
        let h = Vg(a, f, b, e ? ? 1, d),
            k = h[y] | 0;
        if (!(k & 4)) {
            if (Object.isFrozen(h)) {
                h = Df(h);
                var l = k = k & -3 | 32;
                h[y] = l;
                Sg(a, f, b, h, d)
            }
            let m = l = 0;
            for (; l < h.length; l++) {
                const n = c(h[l]);
                null != n && (h[m++] = n)
            }
            m < l && (h.length = m);
            k |= 21;
            g ? k |= 34 : e && e & 2 || (k &= -33);
            h[y] = k;
            k & 2 && Object.freeze(h)
        }
        if (e && e & 2) return h;
        !g && (k & 2 || Object.isFrozen(h)) && (h = Df(h), h[y] = k & -35, Sg(a, f, b, h, d));
        return h
    }
    let Zg;

    function $g() {
        return Zg ? ? (Zg = new Cg(If([]), void 0, void 0, void 0, Vf))
    }

    function ah(a, b, c) {
        var d = bh,
            e = b & 2;
        let f = !1;
        if (null == c) {
            if (e) return $g();
            c = []
        } else if (c.constructor === Cg) {
            if (0 == (c.l & 2) || e) return c;
            c = c.v()
        } else Array.isArray(c) ? f = !!((c[y] | 0) & 2) : c = [];
        if (e) {
            if (!c.length) return $g();
            f || (f = !0, If(c))
        } else if (f) {
            f = !1;
            e = Df(c);
            for (c = 0; c < e.length; c++) {
                const g = e[c] = Df(e[c]);
                Array.isArray(g[1]) && (g[1] = If(g[1]))
            }
            c = e
        }
        f || ((c[y] | 0) & 64 ? c[y] &= -33 : 32 & b && Jf(c));
        d = new Cg(c, d, xg, void 0);
        Sg(a, b, 14, d, !1);
        return d
    }

    function ch(a, b, c, d) {
        const e = a.U,
            f = e[y];
        Tf(f);
        if (null == c) return Sg(e, f, b), a;
        if (!((c[y] | 0) & 4)) {
            Object.isFrozen(c) && (c = Df(c));
            for (let g = 0; g < c.length; g++) c[g] = d(c[g]);
            c[y] = 5
        }
        Sg(e, f, b, c);
        return a
    }

    function dh(a, b, c, d) {
        const e = a.U,
            f = e[y];
        Tf(f);
        Sg(e, f, b, ("0" === d ? 0 === Number(c) : c === d) ? void 0 : c);
        return a
    }

    function eh(a, b, c, d) {
        const e = a.U,
            f = e[y];
        Tf(f);
        (c = fh(e, f, c)) && c !== b && null != d && Sg(e, f, c);
        Sg(e, f, b, d);
        return a
    }

    function gh(a, b, c) {
        a = a.U;
        return fh(a, a[y], b) === c ? c : -1
    }

    function fh(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != Qg(a, b, f) && (0 !== d && Sg(a, b, d), d = f)
        }
        return d
    }

    function Ug(a, b, c, d) {
        a = a.U;
        const e = a[y],
            f = Qg(a, e, c, d);
        b = tg(f, b, !1, e);
        b !== f && null != b && Sg(a, e, c, b, d);
        return b
    }

    function B(a, b, c) {
        b = Ug(a, b, c, !1);
        if (null == b) return b;
        a = a.U;
        const d = a[y];
        if (!(d & 2)) {
            const e = Dg(b);
            e !== b && (b = e, Sg(a, d, c, b, !1))
        }
        return b
    }

    function hh(a, b, c, d, e, f) {
        var g = !!(b & 2),
            h = Vg(a, b, d, 1, e),
            k = h === Rf;
        if (k && 2 !== f) return h;
        if (k || !((h[y] | 0) & 4)) {
            g = !!(b & 2);
            var l = !!((h[y] | 0) & 2);
            k = h;
            !g && l && (h = Df(h));
            var m = l || void 0;
            l = b | (m ? 2 : 0);
            let n = !1,
                p = 0,
                q = 0;
            for (; p < h.length; p++) {
                const x = tg(h[p], c, !1, l);
                if (null == x) continue;
                const v = !!((x.U[y] | 0) & 2);
                m = m || v;
                n = n || !v;
                h[q++] = x
            }
            q < p && (h.length = q);
            h = ih(h, !m, !n, !0);
            k !== h && Sg(a, b, d, h, e);
            (g && 2 !== f || 1 === f) && Object.freeze(h);
            return h
        }
        if (3 === f) return h;
        g ? 2 === f && (f = h[y] | 0, h = Df(h), h[y] = f, Sg(a, b, d, h, e)) : (c = Object.isFrozen(h),
            1 === f ? c || Object.freeze(h) : (f = h[y] | 0, g = f & -33, c || f & 2 ? (h = Df(h), h[y] = g & -3, Sg(a, b, d, h, e)) : f !== g && (h[y] = g)));
        return h
    }

    function ih(a, b, c, d = !1) {
        let e = a[y] | 0;
        var f = e | 5;
        b = b ? f | 8 : f & -9;
        b = c ? b | 16 : b & -17;
        e != b && (Object.isFrozen(a) && (a = Df(a)), a[y] = b, !d && b & 2 && Object.freeze(a));
        return a
    }

    function C(a, b, c) {
        var d = a.U;
        const e = d[y];
        a = !!(e & 2);
        b = hh(d, e, b, c, void 0, a ? 1 : 2);
        if (!(a || (b[y] | 0) & 8)) {
            for (c = 0; c < b.length; c++) a = b[c], d = Dg(a), a !== d && (b[c] = d);
            b[y] |= 8
        }
        return b
    }

    function G(a, b, c) {
        null == c && (c = void 0);
        return Rg(a, b, c)
    }

    function jh(a, b, c, d) {
        null == d && (d = void 0);
        return eh(a, b, c, d)
    }

    function kh(a, b, c) {
        const d = a.U,
            e = d[y];
        Tf(e);
        if (null != c) {
            let f = !1,
                g = !0;
            if (!((c[y] | 0) & 2)) {
                f = !0;
                for (let h = 0; h < c.length; h++) {
                    const k = !!((c[h].U[y] | 0) & 2);
                    f = f && !k;
                    g = g && k
                }
            }
            c = ih(c, f, g)
        }
        null == c && (c = void 0);
        Sg(d, e, b, c);
        return a
    }

    function lh(a, b, c, d, e, f, g) {
        a = a.U;
        const h = a[y];
        Tf(h);
        b = hh(a, h, c, b, f, 2);
        c = null != d ? d : new c;
        if (g && ("number" !== typeof e || 0 > e || e > b.length)) throw Error();
        void 0 != e ? b.splice(e, g, c) : b.push(c);
        b[y] = (c.U[y] | 0) & 2 ? b[y] & -9 : b[y] & -17
    }

    function mh(a, b) {
        return jg(z(a, b))
    }

    function nh(a, b) {
        return ng(z(a, b))
    }

    function H(a, b) {
        return sg(z(a, b))
    }

    function oh(a, b) {
        return z(a, b)
    }

    function ph(a) {
        return a ? ? 0
    }

    function I(a, b, c = !1) {
        return Xg(a, b) ? ? c
    }

    function qh(a, b) {
        return ph(mh(a, b))
    }

    function L(a, b) {
        return H(a, b) ? ? ""
    }

    function rh(a, b) {
        return z(a, b) ? ? 0
    }

    function sh(a, b, c, d) {
        return B(a, b, gh(a, d, c))
    }

    function th(a, b) {
        a = mh(a, b);
        return null == a ? void 0 : a
    }

    function uh(a) {
        a = Wg(a, 4);
        return null == a ? void 0 : a
    }

    function vh(a, b, c) {
        return Rg(a, b, null == c ? c : cg(c))
    }

    function wh(a, b, c) {
        return dh(a, b, null == c ? c : cg(c), !1)
    }

    function xh(a, b, c) {
        return Rg(a, b, null == c ? c : ig(c))
    }

    function yh(a, b, c) {
        return dh(a, b, null == c ? c : ig(c), 0)
    }

    function zh(a, b, c) {
        return Rg(a, b, null == c ? c : mg(c))
    }

    function M(a, b, c) {
        return dh(a, b, null == c ? c : mg(c), "0")
    }

    function Ah(a, b, c) {
        return Rg(a, b, rg(c))
    }

    function Bh(a, b, c) {
        return dh(a, b, rg(c), "")
    }

    function N(a, b, c) {
        return dh(a, b, gg(c), 0)
    };

    function Ch(a) {
        Pf = !0;
        try {
            return JSON.stringify(a.toJSON(), Gg)
        } finally {
            Pf = !1
        }
    }
    var O = class {
        constructor(a) {
            a: {
                null == a && (a = Eg);Eg = void 0;
                if (null == a) {
                    var b = 96;
                    a = []
                } else {
                    if (!Array.isArray(a)) throw Error();
                    b = a[y] | 0;
                    if (b & 64) break a;
                    var c = a;
                    b |= 64;
                    var d = c.length;
                    if (d) {
                        var e = d - 1;
                        d = c[e];
                        if (Of(d)) {
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
                a[y] = b
            }
            this.U = a
        }
        toJSON() {
            if (Pf) var a = Dh(this, this.U, !1);
            else a = Kg(this.U, Mg, void 0, void 0, !1, !1), a = Dh(this,
                a, !0);
            return a
        }
        l() {
            const a = this.U,
                b = a[y];
            return b & 2 ? this : Fg(this.constructor, Og(a, b, !0))
        }
    };
    O.prototype.Re = Nf;

    function Dh(a, b, c) {
        var d = a.constructor.P,
            e = Mf((c ? a.U : b)[y]),
            f = !1;
        if (d) {
            if (!c) {
                b = Df(b);
                var g;
                if (b.length && Of(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = a.U[y];
            a = Mf(g);
            g = +!!(g & 512) - 1;
            var h;
            for (let v = 0; v < d.length; v++) {
                var k = d[v];
                if (k < a) {
                    k += g;
                    var l = e[k];
                    null == l ? e[k] = c ? Rf : Hf() : c && l !== Rf && Gf(l)
                } else {
                    if (!h) {
                        var m = void 0;
                        e.length && Of(m = e[e.length - 1]) ? h = m : e.push(h = {})
                    }
                    l = h[k];
                    null == h[k] ? h[k] = c ? Rf : Hf() : c && l !== Rf && Gf(l)
                }
            }
        }
        d = b.length;
        if (!d) return b;
        let n, p;
        if (Of(h = b[d - 1])) {
            a: {
                var q = h;m = {};e = !1;
                for (let v in q) Object.prototype.hasOwnProperty.call(q, v) && (c = q[v], Array.isArray(c) && c != c && (e = !0), null != c ? m[v] = c : e = !0);
                if (e) {
                    for (let v in m) {
                        q = m;
                        break a
                    }
                    q = null
                }
            }
            q != h && (n = !0);d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h) break;
            p = !0
        }
        if (!n && !p) return b;
        var x;
        f ? x = b : x = Array.prototype.slice.call(b, 0, d);
        b = x;
        f && (b.length = d);
        q && b.push(q);
        return b
    }

    function Eh(a, b) {
        if (null == b) return new a;
        if (!Array.isArray(b)) throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b)) throw Error("arrays passed to jspb constructors must be mutable");
        b[y] |= 128;
        return Fg(a, Jf(b))
    };

    function Fh(a, b) {
        const c = Gh;
        Gh = void 0;
        if (!b(a)) throw b = c ? c() + "\n" : "", Error(b + String(a));
    }
    const Hh = a => null !== a && void 0 !== a;
    let Gh = void 0;

    function Ih(a) {
        return b => {
            if (null == b || "" == b) b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error(void 0);
                b = Fg(a, Jf(b))
            }
            return b
        }
    };
    var Jh = pb("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function Kh(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                f.onload = null;
                f.onerror = null;
                f.parentElement ? .removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            xe(f, a);
            "complete" !== b.document.readyState ? Bb(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Lh(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.hc}`;
        let c = void 0;
        try {
            c = await Mh(b)
        } catch (g) {}
        if (c) {
            b = a.Cc || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.m ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.v,
                Fh: c.bg_hash_basename,
                Eh: c.bg_binary,
                Ii: a.j + "_" + a.l,
                Cc: b,
                hc: a.hc,
                zd: d,
                Td: e,
                xd: f
            }
        }
    }
    let Mh = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Nh(a) {
        var b = await Lh(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Fh,
                _bgp_: b.Eh,
                _li_: b.Ii,
                _jk_: b.Cc,
                _st_: b.hc,
                _rc_: b.zd,
                _dl_: b.Td,
                _g2_: b.xd
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Lc(Jh, {
                basename: "sodar2"
            });
            Kh(a)
        }
    };

    function Oh(a, b) {
        return Bh(a, 1, b)
    }
    var Ph = class extends O {
        j() {
            return L(this, 1)
        }
    };

    function Qh(a, b) {
        return G(a, 5, b)
    }

    function Rh(a, b) {
        return Bh(a, 3, b)
    }

    function Sh(a, b) {
        return wh(a, 6, b)
    }
    var Vh = class extends O {
        constructor() {
            super()
        }
    };

    function Wh(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Xh = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.m;
                this.v = a.v;
                this.Cc = a.Cc;
                this.win = a.X();
                this.hc = a.hc;
                this.zd = a.zd;
                this.Td = a.Td;
                this.xd = a.xd;
                this.m = a.j
            }
        },
        Yh = class {
            constructor(a, b, c) {
                this.l = a;
                this.m = b;
                this.v = c;
                this.win = window;
                this.hc = "env";
                this.zd = "n";
                this.Td = "0";
                this.xd = "1";
                this.j = !0
            }
            X() {
                return this.win
            }
            build() {
                return new Xh(this)
            }
        };

    function Zh(a) {
        var b = new $h;
        return Ah(b, 1, a)
    }

    function ai(a, b) {
        return zh(a, 2, b)
    }

    function bi(a, b) {
        return Ah(a, 3, b)
    }

    function ci(a, b) {
        return Ah(a, 4, b)
    }
    var $h = class extends O {
        getValue() {
            return H(this, 1)
        }
        getVersion() {
            return z(this, 5)
        }
    };
    var di = class extends O {};
    di.P = [2, 3, 4];
    var ei = class extends O {};
    ei.P = [5];

    function fi() {
        var a = new gi;
        a = Ah(a, 1, "Toggle toolbar expansion");
        a = Ah(a, 2, "Toggle privacy and legal settings display");
        return Ah(a, 3, "Dismiss privacy and legal settings display")
    }
    var gi = class extends O {};
    var hi = class extends O {
            nd() {
                return L(this, 18)
            }
            pd() {
                return L(this, 19)
            }
            Fe() {
                return L(this, 20)
            }
        },
        ii = Ih(hi);
    hi.P = [15];
    var ji = window;

    function ki(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    r = ki.prototype;
    r.getWidth = function() {
        return this.right - this.left
    };
    r.getHeight = function() {
        return this.bottom - this.top
    };

    function li(a) {
        return new ki(a.top, a.right, a.bottom, a.left)
    }
    r.contains = function(a) {
        return this && a ? a instanceof ki ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function mi(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    r.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    r.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    r.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function ni(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function oi(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new ni(c, e, d - c, a - e)
        }
        return null
    }

    function pi(a, b) {
        var c = oi(a, b);
        if (!c || !c.height || !c.width) return [new ni(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            k = b.top + b.height;
        b.top > a.top && (c.push(new ni(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        k < g && (c.push(new ni(a.left, k, a.width, g - k)), e = k - d);
        b.left > a.left && c.push(new ni(a.left, d, b.left - a.left, e));
        h < f && c.push(new ni(h, d, f - h, e));
        return c
    }
    ni.prototype.contains = function(a) {
        return a instanceof Id ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    ni.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    ni.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    ni.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const qi = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function ri(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch {}
        return b ? .pageViewId && b ? .canonicalUrl ? b : null
    }

    function si(a = ri()) {
        return a && a.mode ? +a.mode.version || null : null
    }

    function ti(a = ri()) {
        if (a && a.container) {
            a = a.container.split(",");
            const b = [];
            for (let c = 0; c < a.length; c++) b.push(qi[a[c]] || "x");
            return b.join()
        }
        return null
    }

    function ui() {
        var a = ri();
        return a && a.initialIntersection
    }

    function vi() {
        const a = ui();
        return a && va(a.rootBounds) ? new Jd(a.rootBounds.width, a.rootBounds.height) : null
    }

    function wi(a = ri()) {
        return a ? Ae(a.master) ? a.master : null : null
    }

    function xi(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            Ya(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, k = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !k && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Ee(a.document, g ? Lc(pb("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Jc(ob(pb("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, Bb(a, "message", f), d = () => {
            Cb(a, "message", f)
        });
        return e
    };

    function te(a) {
        return new re(a[0].toLowerCase())
    };

    function yi(a) {
        var b = {};
        if (a instanceof pd) return a;
        a = zi(String(a));
        b.Wn && (a = a.replace(/(^|[\r\n\t ]) /g, "$1&#160;"));
        b.Vn && (a = a.replace(/(\r\n|\n|\r)/g, "<br>"));
        b.Xn && (a = a.replace(/(\t+)/g, '<span style="white-space:pre">$1</span>'));
        return rd(a)
    }

    function zi(a) {
        return a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
    }

    function Ai(a) {
        const b = yi("");
        return rd(a.map(c => od(yi(c))).join(od(b).toString()))
    }
    const Bi = /^[a-z][a-z\d-]*$/i,
        Ci = "APPLET BASE EMBED IFRAME LINK MATH META OBJECT SCRIPT STYLE SVG TEMPLATE".split(" "),
        Di = "AREA BR COL COMMAND HR IMG INPUT KEYGEN PARAM SOURCE TRACK WBR".split(" "),
        Ei = ["action", "formaction", "href"];

    function Fi(a, b) {
        if (!Bi.test("body")) throw Error("");
        if (-1 !== Ci.indexOf("BODY")) throw Error("");
        let c = "<body";
        a && (c += Gi(a));
        Array.isArray(b) || (b = void 0 === b ? [] : [b]); - 1 !== Di.indexOf("BODY") ? c += ">" : (a = Ai(b.map(d => d instanceof pd ? d : yi(String(d)))), c += ">" + a.toString() + "</body>");
        return rd(c)
    }

    function Gi(a) {
        var b = "";
        const c = Object.keys(a);
        for (let f = 0; f < c.length; f++) {
            var d = c[f],
                e = a[d];
            if (!Bi.test(d)) throw Error("");
            if (void 0 !== e && null !== e) {
                if (/^on/i.test(d)) throw Error(""); - 1 !== Ei.indexOf(d.toLowerCase()) && (e = e instanceof Pc ? e.toString() : me(String(e)) || "about:invalid#zClosurez");
                d = `${d}="${yi(String(e))}"`;
                b += " " + d
            }
        }
        return b
    };

    function Hi(a, ...b) {
        if (0 === b.length) return Jc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return Jc(c)
    };

    function Ii(a) {
        return new md(a[0], kd)
    };
    var Ji = () => a => {
        a = {
            id: "unsafeurl",
            ctx: 638,
            url: a
        };
        var b = [];
        for (c in a) ke(c, a[c], b);
        var c = je("https://pagead2.googlesyndication.com/pagead/gen_204", b.join("&"));
        navigator.sendBeacon && navigator.sendBeacon(c, "")
    };

    function Ki(a, b, c) {
        if ("string" === typeof b)(b = Li(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Li(c, d);
                f && (c.style[f] = e)
            }
    }
    var Mi = {};

    function Li(a, b) {
        var c = Mi[b];
        if (!c) {
            var d = Od(b);
            c = d;
            void 0 === a.style[d] && (d = (jc ? "Webkit" : ic ? "Moz" : fc ? "ms" : null) + Pd(d), void 0 !== a.style[d] && (c = d));
            Mi[b] = c
        }
        return c
    }

    function Ni(a, b) {
        var c = Sd(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Oi(a, b) {
        return Ni(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Pi(a) {
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

    function Qi(a) {
        var b = Sd(a),
            c = new Id(0, 0);
        var d = b ? Sd(b) : document;
        d = !fc || 9 <= Number(sc) || "CSS1Compat" == Qd(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Pi(a);
        b = Ud(Qd(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Ri(a) {
        var b = Si;
        if ("none" != Oi(a, "display")) return b(a);
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

    function Si(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = jc && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Pi(a), new Jd(a.right - a.left, a.bottom - a.top)) : new Jd(b, c)
    }

    function Ti(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function Ui(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Ti(a, b) : 0
    }
    var Vi = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function Wi(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in Vi ? Vi[b] : Ti(a, b)
    };
    var Xi = a => "number" === typeof a && 0 < a,
        Zi = (a, b) => {
            a = Yi(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        Yi = a => Object.entries($i(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        $i = a => {
            const b = {};
            Ie(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        aj = () => {
            try {
                return ji.history.length
            } catch (a) {
                return 0
            }
        },
        bj = a => {
            a = wi(ri(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        cj = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        dj = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g = d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        ej = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        fj = () => {
            if (!ji) return !1;
            try {
                return !(!ji.navigator.standalone && !ji.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        gj = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        hj = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        };
    class ij {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const jj = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var kj = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        lj = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.ug = !!c;
                this.depth = null
            }
        };
    let mj = null;

    function nj() {
        if (null === mj) {
            mj = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    mj = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return mj
    };

    function oj() {
        const a = t.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function pj() {
        const a = t.performance;
        return a && a.now ? a.now() : null
    };
    var qj = class {
        constructor(a, b) {
            var c = pj() || oj();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.taskId = this.slotId = void 0;
            this.uniqueId = Math.random()
        }
    };
    const rj = t.performance,
        sj = !!(rj && rj.mark && rj.measure && rj.clearMarks),
        tj = ub(() => {
            var a;
            if (a = sj) a = nj(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function uj(a) {
        a && rj && tj() && (rj.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), rj.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function vj(a) {
        a.j = !1;
        a.l != a.m.google_js_reporting_queue && (tj() && Qa(a.l, uj), a.l.length = 0)
    }

    function wj(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw uj(c), e;
        }
        a.end(c);
        return d
    }
    class xj {
        constructor(a) {
            this.l = [];
            this.m = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.l = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = tj() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new qj(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            rj && tj() && rj.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (pj() || oj()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                rj && tj() && rj.mark(b);
                !this.j || 2048 < this.l.length ||
                    this.l.push(a)
            }
        }
    };

    function yj(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function zj(a, b, c, d, e) {
        const f = [];
        Ie(a, function(g, h) {
            (g = Aj(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Aj(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(Aj(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(zj(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Bj(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.m.length - 1
    }

    function Cj(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Bj(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let l = zj(h[k], a.m, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.m;
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
    class Dj {
        constructor() {
            this.m = "&";
            this.l = {};
            this.v = 0;
            this.j = []
        }
    };

    function Ej(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Fj(a.stack, b));
        return b
    }

    function Fj(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
            return a.replace(RegExp("\n *", "g"), "\n")
        } catch (c) {
            return b
        }
    }
    var Hj = class {
        constructor(a, b, c = null) {
            this.va = a;
            this.A = b;
            this.l = c;
            this.j = null;
            this.m = !1;
            this.B = this.Ba
        }
        jf(a) {
            this.j = a
        }
        v(a) {
            this.m = a
        }
        Lc(a, b, c) {
            let d, e;
            try {
                this.l && this.l.j ? (e = this.l.start(a.toString(), 3), d = b(), this.l.end(e)) : d = b()
            } catch (f) {
                b = this.A;
                try {
                    uj(e), b = this.B(a, new ij(f, {
                        message: Ej(f)
                    }), void 0, c)
                } catch (g) {
                    this.Ba(217, g)
                }
                if (b) window.console ? .error ? .(f);
                else throw f;
            }
            return d
        }
        Qa(a, b, c, d) {
            return (...e) => this.Lc(a, () => b.apply(c, e), d)
        }
        Ba(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const A = new Dj;
                A.j.push(1);
                A.l[1] = yj("context", a);
                b.error && b.meta && b.id || (b = new ij(b, {
                    message: Ej(b)
                }));
                if (b.msg) {
                    var g = b.msg.substring(0, 512);
                    A.j.push(2);
                    A.l[2] = yj("msg", g)
                }
                const J = b.meta || {};
                if (this.j) try {
                    this.j(J)
                } catch (U) {}
                if (d) try {
                    d(J)
                } catch (U) {}
                b = [J];
                A.j.push(3);
                A.l[3] = b;
                d = t;
                b = [];
                g = null;
                do {
                    var h = d;
                    if (Ae(h)) {
                        var k = h.location.href;
                        g = h.document && h.document.referrer || null
                    } else k = g, g = null;
                    b.push(new lj(k || "", h));
                    try {
                        d = h.parent
                    } catch (U) {
                        d = null
                    }
                } while (d && h != d);
                for (let U = 0, Ta = b.length - 1; U <= Ta; ++U) b[U].depth = Ta - U;
                h = t;
                if (h.location &&
                    h.location.ancestorOrigins && h.location.ancestorOrigins.length == b.length - 1)
                    for (k = 1; k < b.length; ++k) {
                        var l = b[k];
                        l.url || (l.url = h.location.ancestorOrigins[k - 1] || "", l.ug = !0)
                    }
                var m = b;
                let K = new lj(t.location.href, t, !1);
                h = null;
                const Q = m.length - 1;
                for (l = Q; 0 <= l; --l) {
                    var n = m[l];
                    !h && jj.test(n.url) && (h = n);
                    if (n.url && !n.ug) {
                        K = n;
                        break
                    }
                }
                n = null;
                const za = m.length && m[Q].url;
                0 != K.depth && za && (n = m[Q]);
                f = new kj(K, n);
                if (f.l) {
                    var p = f.l.url || "";
                    A.j.push(4);
                    A.l[4] = yj("top", p)
                }
                var q = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var x = f.j.url.match(ie),
                        v = x[1],
                        D = x[3],
                        E = x[4];
                    m = "";
                    v && (m += v + ":");
                    D && (m += "//", m += D, E && (m += ":" + E));
                    var F = m
                } else F = "";
                q = [q, {
                    url: F
                }];
                A.j.push(5);
                A.l[5] = q;
                Gj(this.va, e, A, this.m, c)
            } catch (A) {
                try {
                    Gj(this.va, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Ej(A),
                        url: f && f.j.url
                    }, this.m, c)
                } catch (J) {}
            }
            return this.A
        }
        gb(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.Ba(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    var Ij = a => "string" === typeof a,
        Jj = a => void 0 === a;

    function Kj() {
        var a = Lj;
        return b => {
            for (const c in a)
                if (b === a[c] && !/^[0-9]+$/.test(c)) return !0;
            return !1
        }
    };
    var Mj = class extends O {
        getValue() {
            return rh(this, 1)
        }
    };

    function Nj(a) {
        var b = new Oj;
        return Rg(b, 1, gg(a))
    }
    var Oj = class extends O {
        getValue() {
            return rh(this, 1)
        }
    };
    var Pj = class extends O {
        constructor() {
            super()
        }
        getValue() {
            return rh(this, 1)
        }
    };

    function Qj(a, b) {
        return M(a, 1, b)
    }

    function Rj(a, b) {
        return M(a, 2, b)
    }

    function Sj(a, b) {
        return M(a, 3, b)
    }

    function Tj(a, b) {
        return M(a, 4, b)
    }

    function Uj(a, b) {
        return M(a, 5, b)
    }

    function Vj(a, b) {
        return dh(a, 8, bg(b), 0)
    }

    function Wj(a, b) {
        return dh(a, 9, bg(b), 0)
    }
    var Xj = class extends O {
        constructor() {
            super()
        }
    };

    function Yj(a, b) {
        return M(a, 1, b)
    }

    function Zj(a, b) {
        return M(a, 2, b)
    }
    var ak = class extends O {};

    function bk(a, b) {
        lh(a, 1, ak, b)
    }
    var bh = class extends O {
        Wg(a) {
            lh(this, 1, ak, void 0, a, !1, 1);
            return this
        }
    };
    bh.P = [1];
    var ck = class extends O {
        constructor() {
            super()
        }
    };

    function dk(a, b) {
        return ch(a, 1, b, qg)
    }

    function ek(a, b) {
        return ch(a, 12, b, og)
    }

    function fk() {
        var a = new gk,
            b = qg("irr"),
            c = a.U;
        const d = c[y];
        Tf(d);
        Vg(c, d, 2, 2).push(b);
        return a
    }

    function hk(a, b) {
        return wh(a, 3, b)
    }

    function ik(a, b) {
        return wh(a, 4, b)
    }

    function jk(a, b) {
        return wh(a, 5, b)
    }

    function kk(a, b) {
        return wh(a, 7, b)
    }

    function lk(a, b) {
        return wh(a, 8, b)
    }

    function mk(a, b) {
        return M(a, 9, b)
    }

    function nk(a, b) {
        return kh(a, 10, b)
    }

    function ok(a, b) {
        return ch(a, 11, b, mg)
    }
    var gk = class extends O {
        constructor() {
            super()
        }
    };
    gk.P = [1, 12, 2, 10, 11];

    function pk(a) {
        var b = qk();
        G(a, 1, b)
    }

    function rk(a, b) {
        return M(a, 2, b)
    }

    function sk(a, b) {
        return kh(a, 3, b)
    }

    function tk(a, b) {
        return kh(a, 4, b)
    }

    function uk(a, b) {
        lh(a, 4, Oj, b);
        return a
    }

    function vk(a, b) {
        return kh(a, 5, b)
    }

    function wk(a, b) {
        return ch(a, 6, b, qg)
    }

    function xk(a, b) {
        return M(a, 7, b)
    }

    function yk(a, b) {
        G(a, 9, b)
    }

    function zk(a, b) {
        return wh(a, 10, b)
    }

    function Ak(a, b) {
        return wh(a, 11, b)
    }

    function Bk(a, b) {
        return wh(a, 12, b)
    }

    function Ck(a) {
        var b = a.U;
        const c = b[y];
        a = c & 2;
        b = ah(b, c, Qg(b, c, 14));
        null == b ? a = b : (!a && bh && (b.G = !0), a = b);
        return a
    }
    var Dk = class extends O {
        constructor() {
            super()
        }
        H(a) {
            lh(this, 3, Mj, void 0, a, !1, 1);
            return this
        }
        G(a) {
            return M(this, 8, a)
        }
    };
    Dk.P = [3, 4, 5, 15, 6];
    var Ek = class extends O {
        constructor() {
            super()
        }
    };
    Ek.P = [2];
    var Fk = class extends O {
        constructor() {
            super()
        }
    };
    var Gk = class extends O {
            constructor() {
                super()
            }
        },
        Hk = [1];

    function Ik(a) {
        var b = new Jk;
        return N(b, 1, a)
    }
    var Jk = class extends O {
        constructor() {
            super()
        }
    };
    var Kk = class extends O {
        constructor() {
            super()
        }
    };
    var Lk = class extends O {
        constructor() {
            super()
        }
    };
    var Mk = class extends O {
        constructor() {
            super()
        }
        getContentUrl() {
            return L(this, 1)
        }
    };
    var Nk = class extends O {
        constructor() {
            super()
        }
    };
    Nk.P = [1];
    var Ok = class extends O {
        constructor() {
            super()
        }
    };
    var Pk = class extends O {
            constructor() {
                super()
            }
        },
        Qk = [1, 2, 3, 5, 6, 7, 8];
    var Rk = class extends O {
        constructor() {
            super()
        }
    };
    Rk.P = [1];
    var Sk = class extends O {
        constructor() {
            super()
        }
    };
    Sk.P = [2];
    var Tk = class extends O {
        constructor() {
            super()
        }
    };
    var Uk = class extends O {
        constructor() {
            super()
        }
    };

    function Vk(a) {
        var b = new Wk;
        return N(b, 1, a)
    }
    var Wk = class extends O {
        constructor() {
            super()
        }
    };
    Wk.P = [9];
    var Xk = class extends O {
        constructor() {
            super()
        }
    };
    var Yk = class extends O {
        constructor() {
            super()
        }
    };
    Yk.P = [2];
    var Zk = class extends O {
        constructor() {
            super()
        }
    };
    var $k = class extends O {
            constructor() {
                super()
            }
        },
        al = [4, 5];
    var bl = class extends O {
        constructor() {
            super()
        }
    };
    var cl = class extends O {
        constructor() {
            super()
        }
    };
    cl.P = [3];
    var dl = class extends O {
        constructor() {
            super()
        }
    };
    var el = class extends O {
        constructor() {
            super()
        }
    };
    var fl = class extends O {
        constructor() {
            super()
        }
    };
    var gl = class extends O {
        constructor() {
            super()
        }
    };
    var hl = class extends O {
            constructor() {
                super()
            }
        },
        il = [2, 3];
    var jl = class extends O {
            constructor() {
                super()
            }
        },
        kl = [3, 4, 5, 6, 7, 8, 9, 11];
    var ll = class extends O {
            constructor() {
                super()
            }
            ec(a) {
                return Bh(this, 2, a)
            }
        },
        ml = [4, 5, 6, 8, 9, 10, 11];
    var nl = class extends O {
        constructor() {
            super()
        }
    };
    var ol = class extends O {
        constructor() {
            super()
        }
    };
    ol.P = [4, 5];
    var pl = class extends O {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return ph(nh(this, 1))
        }
    };
    pl.P = [2];
    var ql = class extends O {
            constructor() {
                super()
            }
        },
        rl = [4, 6];

    function sl(a, ...b) {
        tl(a, ...b.map(c => ({
            Ne: !0,
            ah: 3,
            Ag: c.toJSON()
        })))
    }

    function ul(a, ...b) {
        tl(a, ...b.map(c => ({
            Ne: !0,
            ah: 7,
            Ag: c.toJSON()
        })))
    };
    var vl = class extends O {
        constructor() {
            super()
        }
    };

    function wl(a, b) {
        const c = d => [{
            [d.ah]: d.Ag
        }];
        return JSON.stringify([a.filter(d => d.Ne).map(c), b.toJSON(), a.filter(d => !d.Ne).map(c)])
    };
    var xl = (a, b) => {
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(() => {})
    };

    function yl(a) {
        a && "function" == typeof a.ma && a.ma()
    };

    function P() {
        this.B = this.B;
        this.G = this.G
    }
    P.prototype.B = !1;
    P.prototype.ma = function() {
        this.B || (this.B = !0, this.l())
    };

    function zl(a, b) {
        Al(a, Ga(yl, b))
    }

    function Al(a, b) {
        a.B ? b() : (a.G || (a.G = []), a.G.push(b))
    }
    P.prototype.l = function() {
        if (this.G)
            for (; this.G.length;) this.G.shift()()
    };

    function Bl(a, b, c, d) {
        Bb(b, c, d);
        Al(a, () => Cb(b, c, d))
    }

    function Cl(a, b) {
        1 !== a.m && (a.m = 1, a.callback && a.callback(b), 0 < a.j.size && Dl(a, b))
    }

    function El(a) {
        a.win.document.visibilityState ? Bl(a, a.win.document, "visibilitychange", b => {
            "hidden" === a.win.document.visibilityState && Cl(a, b);
            "visible" === a.win.document.visibilityState && (a.m = 0)
        }) : "onpagehide" in a.win ? (Bl(a, a.win, "pagehide", b => {
            Cl(a, b)
        }), Bl(a, a.win, "pageshow", () => {
            a.m = 0
        })) : Bl(a, a.win, "beforeunload", b => {
            Cl(a, b)
        })
    }

    function Fl(a, b) {
        0 < a.j.size || a.callback || El(a);
        const c = a.j.get(0);
        c ? c.push(b) : a.j.set(0, [b])
    }

    function Dl(a, b) {
        for (let c = 9; 0 <= c; c--) a.j.get(c) ? .forEach(d => {
            d(b)
        })
    }
    var Gl = class extends P {
        constructor(a) {
            super();
            this.win = a;
            this.m = 0;
            this.callback = null;
            this.j = new Map
        }
    };

    function tl(a, ...b) {
        a.C && 65536 <= wl(a.j.concat(b), a.v).length && Hl(a);
        a.m && !a.A && (a.A = !0, Fl(a.m, () => {
            Hl(a)
        }));
        a.j.push(...b);
        a.j.length >= a.B && Hl(a);
        a.j.length && null === a.l && (a.l = setTimeout(() => {
            Hl(a)
        }, a.F))
    }

    function Hl(a) {
        null !== a.l && (clearTimeout(a.l), a.l = null);
        if (a.j.length) {
            var b = wl(a.j, a.v);
            a.G("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.j = []
        }
    }
    var Il = class {
            constructor(a, b, c, d, e) {
                this.G = xl;
                this.F = b;
                this.B = c;
                this.C = d;
                this.m = e;
                this.j = [];
                this.l = null;
                this.A = !1;
                b = new vl;
                b = N(b, 1, 2);
                this.v = Bh(b, 2, a).l()
            }
        },
        Jl = class extends Il {
            constructor(a, b = 1E3, c = 100, d = !1, e) {
                super(a, b, c, d && !0, e)
            }
        };
    var R = a => {
        var b = "Je";
        if (a.Je && a.hasOwnProperty(b)) return a.Je;
        b = new a;
        return a.Je = b
    };

    function Kl(a, b, c) {
        return b[a] || c
    };

    function Ll(a, b) {
        a.l = (c, d) => Kl(2, b, () => [])(c, 1, d);
        a.j = () => Kl(3, b, () => [])(1)
    }
    class Tl {
        l() {
            return []
        }
        j() {
            return []
        }
    }

    function Ul(a, b) {
        return R(Tl).l(a, b)
    };

    function Vl(a, b, c = null, d = !1, e = !1) {
        Wl(a, b, c, d, e)
    }

    function Wl(a, b, c, d, e = !1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = Fe("IMG", a.document);
        if (c || d) {
            const g = h => {
                c && c(h);
                d && Ya(a.google_image_requests, f);
                Cb(f, "load", g);
                Cb(f, "error", g)
            };
            Bb(f, "load", g);
            Bb(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Yl = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Ie(a, (d, e) => {
                if (d || 0 === d) c += `&${e}=${encodeURIComponent(""+d)}`
            });
            Xl(c)
        },
        Xl = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Vl(b, a, void 0, !1, !1)
        };

    function Gj(a, b, c, d = !1, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Dj ? f = c : (f = new Dj, Ie(c, (h, k) => {
                var l = f;
                const m = l.v++;
                h = yj(k, h);
                l.j.push(m);
                l.l[m] = h
            }));
            const g = Cj(f, "/pagead/gen_204?id=" + b + "&");
            g && Vl(t, g)
        } catch (f) {}
    }

    function Zl(a, b) {
        0 <= b && 1 >= b && (a.j = b)
    }
    class $l {
        constructor() {
            this.j = Math.random()
        }
    };
    let am, bm;
    const cm = new xj(t);
    ((a, b = !0) => {
        am = a || new $l;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        Zl(am, t.google_srt);
        bm = new Hj(am, b, cm);
        bm.v(!0);
        "complete" == t.document.readyState ? t.google_measure_js_timing || vj(cm) : cm.j && Bb(t, "load", () => {
            t.google_measure_js_timing || vj(cm)
        })
    })();
    var dm = (a, b) => bm.Lc(a, b),
        em = (a, b) => bm.Qa(a, b),
        fm = (a, b, c) => {
            const d = R(Tl).j();
            !b.eid && d.length && (b.eid = d.toString());
            Gj(am, a, b, !0, c)
        },
        gm = (a, b) => bm.Ba(a, b, void 0, void 0),
        hm = (a, b, c) => {
            bm.gb(a, b, c)
        };
    Jc(ob(pb("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var im = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (k) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            Bb(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = Cb(a, "message", e));
                return g
            }
        },
        jm = (a, b, c, d = null) => {
            const e = im(a, b, sb(c, () => e()), d);
            return e
        },
        km = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && km(a[f], b, c, d, --e)
        };

    function lm(a, b, c, d) {
        cf(d.origin) && "expandable-xpc-ready" == c.notify && mm(a, b)
    }

    function mm(a, b) {
        var c = a.Ie;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Gb,
            f: a.aj,
            g: a.uh,
            h: a.Ci,
            i: void 0
        });
        t.setTimeout(em(220, ej(() => {
            Ee(c.document, b)
        })), 0)
    };
    var nm = class extends O {
        constructor() {
            super()
        }
    };
    nm.P = [15];
    var om = class extends O {
        constructor() {
            super()
        }
        getCorrelator() {
            return ph(nh(this, 1))
        }
        setCorrelator(a) {
            return M(this, 1, a)
        }
    };
    var pm = class extends O {
        constructor() {
            super()
        }
    };
    let qm = null,
        rm = null;
    var sm = () => {
            if (null != qm) return qm;
            qm = !1;
            try {
                const a = De(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (qm = !0);
                t.localStorage.getItem("google_logging") && (qm = !0)
            } catch (a) {}
            return qm
        },
        tm = () => {
            if (null != rm) return rm;
            rm = !1;
            try {
                const a = De(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) rm = !0
            } catch (a) {}
            return rm
        },
        um = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && sm() && Ee(t.document,
                Jc(ob(pb("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    let vm, wm;
    const xm = new xj(window);
    (a => {
        vm = a ? ? new $l;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Zl(vm, window.google_srt);
        wm = new Hj(vm, !0, xm);
        wm.jf(() => {});
        wm.v(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || vj(xm) : xm.j && Bb(window, "load", () => {
            window.google_measure_js_timing || vj(xm)
        })
    })();
    let ym = (new Date).getTime();
    var zm = {
        Vl: 0,
        Ul: 1,
        Rl: 2,
        Ml: 3,
        Sl: 4,
        Nl: 5,
        Tl: 6,
        Pl: 7,
        Ql: 8,
        Ll: 9,
        Ol: 10,
        Wl: 11
    };
    var Am = {
        Yl: 0,
        Zl: 1,
        Xl: 2
    };

    function Bm(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function Cm(a) {
        a = Ua(a, b => new ki(b.top, b.right, b.bottom, b.left));
        a = Dm(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function Dm(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return Va(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, li(a[0]))
    };
    var vc = {
        Nm: 0,
        Al: 1,
        Dl: 2,
        Bl: 3,
        Cl: 4,
        Jl: 8,
        Ym: 9,
        km: 10,
        lm: 11,
        Um: 16,
        gl: 17,
        fl: 24,
        im: 25,
        zk: 26,
        yk: 27,
        kh: 30,
        cm: 32,
        fm: 40,
        gn: 41,
        an: 42
    };
    var Em = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5,
            full_page: 6,
            side_rails: 7
        },
        Fm = {
            [1]: 1,
            [2]: 1,
            [3]: 7,
            [4]: 7,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };
    var Gm = 728 * 1.38;

    function Hm(a) {
        return a !== a.top ? 512 : 0
    }

    function Im(a, b = 420, c = !1) {
        return (a = Jm(a, c)) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384
    }

    function Km(a) {
        var b = Jm(a);
        a = a.innerWidth;
        return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
    }

    function Lm(a) {
        return Math.max(0, Mm(a, !0) - Nm(a))
    }

    function Om(a) {
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Nm(a) {
        return Om(a).clientHeight
    }

    function Jm(a, b = !1) {
        var c = Om(a).clientWidth;
        if (b) {
            if (ac())
                if (a) {
                    b = 0 === Ye();
                    var d = !!a.document.querySelector('meta[name=viewport][content*="width=device-width"]'),
                        e = a.innerWidth;
                    a = a.outerWidth;
                    a = 0 === e ? 1 : b || d ? Math.round(100 * (a / e + Number.EPSILON)) / 100 : Math.round(100 * (a / e / .4 + Number.EPSILON)) / 100
                } else a = 1;
            else a = 1;
            c *= a
        }
        return c
    }

    function Mm(a, b) {
        const c = Om(a);
        return b ? (a = Nm(a), c.scrollHeight === a ? c.offsetHeight : c.scrollHeight) : c.offsetHeight
    }

    function Pm(a, b) {
        return Qm(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] && !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1
    }

    function Rm(a, b) {
        return a && a.source ? a.source === b || a.source.parent === b : !1
    }

    function Sm(a) {
        return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset
    }

    function Tm(a) {
        return void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset
    }

    function Um(a) {
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

    function Vm(a, b, c, d) {
        Gj(c, b, {
            c: d.data.substring(0, 500),
            u: a.location.href.substring(0, 500)
        }, !0, .1);
        return !0
    }

    function Qm(a) {
        return 26 === a || 27 === a || 40 === a || 41 === a
    };

    function Wm(a, b) {
        Xm(a).forEach(b, void 0)
    }

    function Xm(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Ym(a, b) {
        return void 0 !== a.j[Zm(b)]
    }

    function $m(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function an(a) {
        const b = [];
        for (const c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const bn = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Zm(a);
            this.j[c] = b;
            this.l[c] = a
        }
        get(a, b) {
            a = Zm(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ac() {
            return $m(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Zm(a) {
        return a instanceof Object ? String(wa(a)) : a + ""
    };
    const cn = class {
        constructor(a) {
            this.j = new bn;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        contains(a) {
            return Ym(this.j, a)
        }
    };
    const dn = new cn("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));

    function en(a, {
        ib: b,
        bb: c,
        Eb: d
    }) {
        return d && c(b) ? b : (b = b.parentElement) ? fn(a, {
            ib: b,
            bb: c,
            Eb: !0
        }) : null
    }

    function fn(a, {
        ib: b,
        bb: c,
        Eb: d = !1
    }) {
        const e = gn({
                ib: b,
                bb: c,
                Eb: d
            }),
            f = a.j.get(e);
        if (f) return f.element;
        b = en(a, {
            ib: b,
            bb: c,
            Eb: d
        });
        a.j.set(e, {
            element: b
        });
        return b
    }
    var hn = class {
        constructor() {
            this.j = new Map
        }
    };

    function gn({
        ib: a,
        bb: b,
        Eb: c
    }) {
        a = wa(a);
        b = wa(b);
        return `${a}:${b}:${c}`
    };

    function jn(a) {
        cc(a.document.body.offsetHeight)
    };

    function kn(a) {
        a.j.forEach((b, c) => {
            if (b.overrides.delete(a)) {
                b = Array.from(b.overrides.values()).pop() || b.originalValue;
                var d = a.element;
                b ? d.style.setProperty(c, b.value, b.priority) : d.style.removeProperty(c)
            }
        })
    }

    function ln(a, b, c) {
        c = {
            value: c,
            priority: "important"
        };
        var d = a.j.get(b);
        if (!d) {
            d = a.element;
            var e = d.style.getPropertyValue(b);
            d = {
                originalValue: e ? {
                    value: e,
                    priority: d.style.getPropertyPriority(b)
                } : null,
                overrides: new Map
            };
            a.j.set(b, d)
        }
        d.overrides.delete(a);
        d.overrides.set(a, c);
        a = a.element;
        c ? a.style.setProperty(b, c.value, c.priority) : a.style.removeProperty(b)
    }
    var mn = class extends P {
        constructor(a, b) {
            super();
            this.element = b;
            a = a.googTempStyleOverrideInfo = a.googTempStyleOverrideInfo || new Map;
            var c = a.get(b);
            c ? b = c : (c = new Map, a.set(b, c), b = c);
            this.j = b
        }
        l() {
            kn(this);
            super.l()
        }
    };

    function nn(a) {
        const b = new S(a.getValue());
        a.listen(c => b.j(c));
        return b
    }

    function on(a, b) {
        const c = new S({
            first: a.M,
            second: b.M
        });
        a.listen(() => c.j({
            first: a.M,
            second: b.M
        }));
        b.listen(() => c.j({
            first: a.M,
            second: b.M
        }));
        return c
    }

    function pn(...a) {
        const b = [...a],
            c = () => b.every(f => f.M),
            d = new S(c()),
            e = () => {
                d.j(c())
            };
        b.forEach(f => f.listen(e));
        return qn(d)
    }

    function rn(...a) {
        const b = [...a],
            c = () => -1 !== b.findIndex(f => f.M),
            d = new S(c()),
            e = () => {
                d.j(c())
            };
        b.forEach(f => f.listen(e));
        return qn(d)
    }

    function qn(a, b = sn) {
        var c = a.M;
        const d = new S(a.M);
        a.listen(e => {
            b(e, c) || (c = e, d.j(e))
        });
        return d
    }

    function T(a, b, c) {
        return a.l(d => {
            d === b && c()
        })
    }

    function tn(a, b, c) {
        if (a.M === b) c();
        else {
            var d = {
                Zc: null
            };
            d.Zc = T(a, b, () => {
                d.Zc && (d.Zc(), d.Zc = null);
                c()
            })
        }
    }

    function un(a, b, c) {
        qn(a).listen(d => {
            d === b && c()
        })
    }

    function vn(a, b) {
        a.v && a.v();
        a.v = b.listen(c => a.j(c), !0)
    }

    function wn(a, b, c, d) {
        const e = new S(!1);
        var f = null;
        a = a.map(d);
        T(a, !0, () => {
            null === f && (f = b.setTimeout(() => {
                e.j(!0)
            }, c))
        });
        T(a, !1, () => {
            e.j(!1);
            null !== f && (b.clearTimeout(f), f = null)
        });
        return qn(e)
    }

    function xn(a) {
        return {
            listen: b => a.listen(b),
            getValue: () => a.M
        }
    }
    class S {
        constructor(a) {
            this.M = a;
            this.m = new Map;
            this.B = 1;
            this.v = null
        }
        listen(a, b = !1) {
            const c = this.B++;
            this.m.set(c, a);
            b && a(this.M);
            return () => {
                this.m.delete(c)
            }
        }
        l(a) {
            return this.listen(a, !0)
        }
        A() {
            return this.M
        }
        j(a) {
            this.M = a;
            this.m.forEach(b => {
                b(this.M)
            })
        }
        map(a) {
            const b = new S(a(this.M));
            this.listen(c => b.j(a(c)));
            return b
        }
    }

    function sn(a, b) {
        return a == b
    };

    function yn(a) {
        return new zn(a)
    }

    function An(a, b) {
        Qa(a.j, c => {
            c(b)
        })
    }
    var Bn = class {
        constructor() {
            this.j = []
        }
    };
    class zn {
        constructor(a) {
            this.j = a
        }
        listen(a) {
            this.j.j.push(a)
        }
        map(a) {
            const b = new Bn;
            this.listen(c => An(b, a(c)));
            return yn(b)
        }
        delay(a, b) {
            const c = new Bn;
            this.listen(d => {
                a.setTimeout(() => {
                    An(c, d)
                }, b)
            });
            return yn(c)
        }
    }

    function Cn(...a) {
        const b = new Bn;
        a.forEach(c => {
            c.listen(d => {
                An(b, d)
            })
        });
        return yn(b)
    };

    function Dn(a) {
        return qn(on(a.j, a.m).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : En(c, b)
        }))
    }
    var Gn = class {
        constructor(a) {
            this.l = a;
            this.j = new S(null);
            this.m = new S(null);
            this.v = new Bn;
            this.C = b => {
                null == this.j.M && 1 == b.touches.length && this.j.j(b.touches[0])
            };
            this.A = b => {
                const c = this.j.M;
                null != c && (b = Fn(c, b.changedTouches), null != b && (this.j.j(null), this.m.j(null), An(this.v, En(c, b))))
            };
            this.B = b => {
                var c = this.j.M;
                null != c && (c = Fn(c, b.changedTouches), null != c && (this.m.j(c), b.preventDefault()))
            }
        }
    };

    function En(a, b) {
        return {
            hh: b.pageX - a.pageX,
            ih: b.pageY - a.pageY
        }
    }

    function Fn(a, b) {
        if (null == b) return null;
        for (let c = 0; c < b.length; ++c)
            if (b[c].identifier == a.identifier) return b[c];
        return null
    };

    function Hn(a) {
        return qn(on(a.j, a.l).map(b => {
            var c = b.first;
            b = b.second;
            return null == c || null == b ? null : In(c, b)
        }))
    }
    var Jn = class {
        constructor(a, b) {
            this.v = a;
            this.A = b;
            this.j = new S(null);
            this.l = new S(null);
            this.m = new Bn;
            this.G = c => {
                this.j.j(c)
            };
            this.B = c => {
                const d = this.j.M;
                null != d && (this.j.j(null), this.l.j(null), An(this.m, In(d, c)))
            };
            this.C = c => {
                null != this.j.M && (this.l.j(c), c.preventDefault())
            }
        }
    };

    function In(a, b) {
        return {
            hh: b.screenX - a.screenX,
            ih: b.screenY - a.screenY
        }
    };
    var Mn = (a, b, c) => {
        const d = new Kn(a, b, c);
        return () => Ln(d)
    };

    function Ln(a) {
        if (a.j) return !1;
        if (null == a.l) return Nn(a), !0;
        const b = a.l + a.A - (new Date).getTime();
        if (1 > b) return Nn(a), !0;
        On(a, b);
        return !0
    }

    function Nn(a) {
        a.l = (new Date).getTime();
        a.v()
    }

    function On(a, b) {
        a.j = !0;
        a.m.setTimeout(() => {
            a.j = !1;
            Nn(a)
        }, b)
    }
    class Kn {
        constructor(a, b, c) {
            this.m = a;
            this.A = b;
            this.v = c;
            this.l = null;
            this.j = !1
        }
    };

    function Pn(a) {
        return Qn(Hn(a.j), Dn(a.l))
    }

    function Rn(a) {
        return Cn(yn(a.j.m), yn(a.l.v))
    }
    var Sn = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Qn(a, b) {
        return on(a, b).map(({
            first: c,
            second: d
        }) => c || d || null)
    };
    var Tn = class {
        constructor() {
            this.cache = new Map
        }
        getBoundingClientRect(a) {
            var b = this.cache.get(a);
            if (b) return b;
            b = a.getBoundingClientRect();
            this.cache.set(a, b);
            return b
        }
    };

    function Un(a) {
        null == a.A && (a.A = new S(a.C.getBoundingClientRect()));
        return a.A
    }
    class Vn extends P {
        constructor(a, b) {
            super();
            this.m = a;
            this.C = b;
            this.F = !1;
            this.A = null;
            this.v = () => {
                Un(this).j(this.C.getBoundingClientRect())
            }
        }
        j() {
            this.F || (this.F = !0, this.m.addEventListener("resize", this.v), this.m.addEventListener("scroll", this.v));
            return Un(this)
        }
        l() {
            this.m.removeEventListener("resize", this.v);
            this.m.removeEventListener("scroll", this.v);
            super.l()
        }
    };

    function Wn(a, b) {
        return new Xn(a, b)
    }

    function Yn(a) {
        a.win.requestAnimationFrame(() => {
            a.B || a.m.j(new Jd(a.element.offsetWidth, a.element.offsetHeight))
        })
    }

    function Zn(a) {
        a.j || (a.j = !0, a.v.observe(a.element));
        return qn(a.m, Kd)
    }
    var Xn = class extends P {
        constructor(a, b) {
            super();
            this.win = a;
            this.element = b;
            this.j = !1;
            this.m = new S(new Jd(this.element.offsetWidth, this.element.offsetHeight));
            this.v = new ResizeObserver(() => {
                Yn(this)
            })
        }
        l() {
            this.v.disconnect();
            super.l()
        }
    };

    function $n(a, b) {
        return {
            top: a.j - b,
            right: a.m + a.l,
            bottom: a.j + b,
            left: a.m
        }
    }
    class ao {
        constructor(a, b, c) {
            this.m = a;
            this.j = b;
            this.l = c
        }
    };

    function bo(a, b) {
        a = a.getBoundingClientRect();
        return new co(a.top + Sm(b), a.bottom - a.top)
    }

    function eo(a) {
        return new co(Math.round(a.j), Math.round(a.l))
    }
    class co {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };
    var go = (a, b) => {
        const c = a.google_pso_loaded_fonts || (a.google_pso_loaded_fonts = []),
            d = new cn(c);
        b = b.filter(e => !d.contains(e));
        b.length && (fo(a, b), bb(c, b))
    };

    function fo(a, b) {
        for (const f of b) {
            b = Fe("LINK", a.document);
            b.type = "text/css";
            var c = Jc(ob(pb("//fonts.googleapis.com/css"))),
                d = Ji();
            c = Gc(c, {
                family: f
            });
            if (c instanceof Fc) d = c;
            else if (c instanceof Pc) d = c;
            else {
                var e = oe(c, pe) || Vc;
                e === Vc && d(c);
                d = e
            }
            c = b;
            c.rel = "stylesheet";
            if (Sb("stylesheet", "stylesheet")) {
                c.href = Ic(d).toString();
                a: if (d = (c.ownerDocument && c.ownerDocument.defaultView || t).document, d.querySelector) {
                    if ((d = d.querySelector('style[nonce],link[rel="stylesheet"][nonce]')) && (d = d.nonce || d.getAttribute("nonce")) &&
                        Ed.test(d)) break a;
                    d = ""
                } else d = "";
                d && c.setAttribute("nonce", d)
            } else {
                if (d instanceof Fc) d = Ic(d).toString();
                else if (d instanceof Pc) d = Qc(d);
                else {
                    if (!(d instanceof Pc)) {
                        d = "object" == typeof d && d.Pa ? d.j() : String(d);
                        b: {
                            e = void 0;
                            try {
                                e = new URL(d)
                            } catch (g) {
                                e = "https:";
                                break b
                            }
                            e = e.protocol
                        }
                        "javascript:" === e && (d = "about:invalid#zClosurez");
                        d = new Pc(d, Uc)
                    }
                    d = Qc(d)
                }
                c.href = d
            }
            a.document.head.appendChild(b)
        }
    };

    function ho(a, b) {
        a.F ? b(a.v) : a.m.push(b)
    }

    function io(a, b) {
        a.F = !0;
        a.v = b;
        a.m.forEach(c => {
            c(a.v)
        });
        a.m = []
    }
    class jo extends P {
        constructor(a) {
            super();
            this.j = a;
            this.m = [];
            this.F = !1;
            this.C = this.v = null;
            this.H = Mn(a, 1E3, () => {
                if (null != this.C) {
                    var b = Mm(this.j, !0) - this.C;
                    1E3 < b && io(this, b)
                }
            });
            this.A = null
        }
        K(a, b) {
            null == a ? (this.C = a = Mm(this.j, !0), this.j.addEventListener("scroll", this.H), null != b && b(a)) : this.A = this.j.setTimeout(() => {
                this.K(void 0, b)
            }, a)
        }
        l() {
            null != this.A && this.j.clearTimeout(this.A);
            this.j.removeEventListener("scroll", this.H);
            this.m = [];
            this.v = null;
            super.l()
        }
    };
    var ko = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class lo {
        constructor(a = 1) {
            this.j = a
        }
        next() {
            var a = 48271 * this.j % 2147483647;
            this.j = 0 > 2147483647 * a ? a + 2147483647 : a;
            return this.j / 2147483647
        }
    };

    function mo(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new no(d)
    }

    function oo(a) {
        return a.j.slice(0)
    }

    function po(a, b = 1) {
        a = oo(a);
        const c = new lo(b);
        jb(a, () => c.next());
        return new no(a)
    }
    const no = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new no(Sa(this.j, a))
        }
        apply(a) {
            return new no(a(oo(this)))
        }
        sort(a) {
            return new no(oo(this).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = oo(this);
            b.push(a);
            return new no(b)
        }
    };
    class qo {
        constructor(a) {
            this.j = new cn(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function ro(a) {
        return new so({
            value: a
        }, null)
    }

    function to(a) {
        return new so(null, a)
    }

    function uo(a) {
        try {
            return ro(a())
        } catch (b) {
            return to(b)
        }
    }

    function vo(a) {
        return null != a.j ? a.getValue() : null
    }

    function wo(a, b) {
        null != a.j && b(a.getValue());
        return a
    }

    function xo(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class so {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getValue() {
            return this.j.value
        }
        map(a) {
            return null != this.j ? (a = a(this.getValue()), a instanceof so ? a : ro(a)) : this
        }
    };
    class yo {
        constructor() {
            this.j = new bn
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new cn, this.j.set(a, c));
            c.add(b)
        }
    };

    function zo(a) {
        return !a
    }

    function Ao(a) {
        return b => {
            for (const c of a) c(b)
        }
    };

    function Bo(a) {
        return null !== a
    };
    var Co = class extends O {
        getId() {
            return H(this, 3)
        }
    };
    Co.P = [4];
    class Do {
        constructor(a, {
            Ff: b,
            mh: c,
            Ai: d,
            Sg: e
        }) {
            this.A = a;
            this.m = c;
            this.v = new no(b || []);
            this.l = e;
            this.j = d
        }
    };
    var Eo = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new bn;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        Go = a => {
            var b = Fo(a);
            a = [];
            for (let c of b) b = String(c.qc), a.push(c.yb + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const Fo = a => {
            const b = [],
                c = a.v;
            c && c.j.length && b.push({
                yb: "a",
                qc: Ho(c)
            });
            null != a.m && b.push({
                yb: "as",
                qc: a.m
            });
            null != a.j && b.push({
                yb: "i",
                qc: String(a.j)
            });
            null != a.l && b.push({
                yb: "rp",
                qc: String(a.l)
            });
            b.sort(function(d, e) {
                return d.yb.localeCompare(e.yb)
            });
            b.unshift({
                yb: "t",
                qc: Io(a.A)
            });
            return b
        },
        Io = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        Ho = a => {
            a = oo(a).map(Jo);
            a = JSON.stringify(a);
            return Ke(a)
        },
        Jo = a => {
            const b = {};
            null != H(a, 7) && (b.q = H(a, 7));
            null != mh(a,
                2) && (b.o = mh(a, 2));
            null != mh(a, 5) && (b.p = mh(a, 5));
            return b
        };

    function Ko() {
        var a = new Lo;
        return Rg(a, 2, gg(1))
    }
    var Lo = class extends O {
        j() {
            return z(this, 1)
        }
        setLocation(a) {
            return Rg(this, 1, gg(a))
        }
    };

    function Mo(a) {
        const b = [].slice.call(arguments).filter(tb(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Of || []);
            d = Object.assign(d, e.Bc())
        });
        return new No(c, d)
    }

    function Oo(a) {
        switch (a) {
            case 1:
                return new No(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new No(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new No(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new No(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Po(a) {
        return null == a ? null : new No(null, {
            google_ml_rank: a
        })
    }

    function Qo(a) {
        return null == a ? null : new No(null, {
            google_placement_id: Go(a)
        })
    }

    function Ro({
        Rh: a,
        gi: b = null
    }) {
        if (null == a) return null;
        a = {
            google_daaos_ts: a
        };
        null != b && (a.google_erank = b + 1);
        return new No(null, a)
    }
    class No {
        constructor(a, b) {
            this.Of = a;
            this.j = b
        }
        Bc() {
            return this.j
        }
    };
    var So = class extends O {};
    var To = class extends O {};
    var Uo = class extends O {};
    var Vo = class extends O {};
    var Wo = class extends O {
        A() {
            return H(this, 2)
        }
        v() {
            return H(this, 5)
        }
        j() {
            return C(this, Vo, 3)
        }
        Nb() {
            return mh(this, 4)
        }
        m() {
            return Wg(this, 6)
        }
        B() {
            return Tg(this, Uo, 7)
        }
    };
    Wo.P = [3];
    var Xo = class extends O {};
    var Yo = class extends O {};
    var Zo = class extends O {
        constructor() {
            super()
        }
    };
    var $o = class extends O {
        j() {
            return z(this, 3)
        }
        Nb() {
            return nh(this, 4)
        }
        m() {
            return Xg(this, 6)
        }
    };
    var ap = class extends O {};
    var bp = class extends O {};
    var cp = class extends O {
        ia() {
            return B(this, Co, 1)
        }
        j() {
            return z(this, 2)
        }
    };
    var dp = class extends O {};
    var ep = class extends O {};
    var fp = class extends O {
            getName() {
                return H(this, 4)
            }
        },
        gp = [1, 2, 3];
    var hp = class extends O {
        j() {
            return B(this, $o, 10)
        }
    };
    hp.P = [2, 5, 6, 11];
    var ip = class extends O {
        j() {
            return Xg(this, 2)
        }
    };
    var jp = class extends O {
        j() {
            return nh(this, 1)
        }
    };
    var kp = class extends O {};
    var lp = class extends O {
        j() {
            return rh(this, 1)
        }
        m() {
            return L(this, 3)
        }
        v() {
            return L(this, 4)
        }
    };
    var mp = class extends O {
        j() {
            return ph(nh(this, 1))
        }
    };
    var np = class extends O {
        j() {
            return L(this, 1)
        }
        m() {
            return L(this, 2)
        }
        A() {
            return L(this, 3)
        }
        v() {
            return L(this, 4)
        }
    };
    var op = class extends O {
        m() {
            return B(this, lp, 8)
        }
        v() {
            return B(this, lp, 9)
        }
        B() {
            return B(this, np, 4)
        }
        j() {
            return B(this, mp, 5)
        }
        C() {
            return I(this, 7)
        }
        A() {
            return L(this, 10)
        }
        G() {
            return I(this, 12)
        }
        F() {
            return I(this, 14)
        }
    };
    var pp = class extends O {
        m() {
            return I(this, 1)
        }
        v() {
            return I(this, 3)
        }
        j() {
            return I(this, 4)
        }
    };
    var qp = class extends O {
        m() {
            return B(this, np, 5)
        }
        j() {
            return B(this, mp, 6)
        }
        A() {
            return L(this, 8)
        }
        B() {
            return I(this, 9)
        }
        C() {
            return I(this, 11)
        }
        v() {
            return B(this, pp, 12)
        }
    };
    var rp = class extends O {
        j() {
            return B(this, gi, 1)
        }
    };
    var sp = class extends O {};
    sp.P = [2];
    var tp = class extends O {};
    var up = class extends O {};
    up.P = [1];
    var vp = class extends O {
        setProperty(a) {
            return Ah(this, 1, a)
        }
        getValue() {
            return H(this, 2)
        }
    };
    var wp = class extends O {};
    wp.P = [3, 4];
    var xp = class extends O {};
    var yp = class extends O {
        ia() {
            return B(this, Co, 1)
        }
        j() {
            return z(this, 2)
        }
    };
    yp.P = [6, 7, 9, 10, 11];
    var zp = class extends O {};
    zp.P = [4];
    var Ap = class extends O {};
    var Bp = class extends O {};
    var Cp = class extends O {
        Ge() {
            return Tg(this, Ap, 2)
        }
    };
    var Dp = class extends O {
        j() {
            return ph(nh(this, 1))
        }
    };
    var Ep = class extends O {};
    var Gp = class extends O {
            j() {
                return sh(this, Ep, 2, Fp)
            }
        },
        Fp = [1, 2];
    var Hp = class extends O {
        j() {
            return B(this, Gp, 3)
        }
    };
    var Ip = class extends O {};
    var Jp = class extends O {
        j() {
            return C(this, Ip, 1)
        }
    };
    Jp.P = [1];
    var Kp = class extends O {
        j() {
            return Yg(this, 1, sg)
        }
        m() {
            return B(this, Hp, 3)
        }
    };
    Kp.P = [1, 4];

    function Lp(a) {
        return B(a, To, 13)
    }

    function Mp(a) {
        return B(a, Yo, 15)
    }
    var Np = class extends O {},
        Op = Ih(Np);
    Np.P = [1, 2, 5, 7];
    var Pp = class extends O {},
        Qp = Ih(Pp);

    function Rp(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? Qp(b) : null
        } catch (b) {
            return null
        }
    }

    function Sp(a, b) {
        if (void 0 !== a.ve) {
            let c = Rp(b);
            c || (c = new Pp);
            void 0 !== a.ve && vh(c, 2, a.ve);
            zh(c, 1, Date.now() + 864E5);
            a = Ch(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Rp(b)) && nh(a, 1) < Date.now()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };
    var Tp = {
            Xa: "ama_success",
            Ra: .1,
            Ua: !0,
            Ya: !0
        },
        Up = {
            Xa: "ama_failure",
            Ra: .1,
            Ua: !0,
            Ya: !0
        },
        Vp = {
            Xa: "ama_coverage",
            Ra: .1,
            Ua: !0,
            Ya: !0
        },
        Wp = {
            Xa: "ama_opt",
            Ra: .1,
            Ua: !0,
            Ya: !1
        },
        Xp = {
            Xa: "ama_auto_rs",
            Ra: 1,
            Ua: !0,
            Ya: !1
        },
        Yp = {
            Xa: "ama_auto_prose",
            Ra: 1,
            Ua: !0,
            Ya: !1
        },
        Zp = {
            Xa: "ama_improv",
            Ra: .1,
            Ua: !0,
            Ya: !1
        },
        $p = {
            Xa: "ama_constraints",
            Ra: 0,
            Ua: !0,
            Ya: !0
        };

    function aq(a, b, c) {
        var d = 0 === a.l ? a.j.m() : a.j.v(),
            e = a.m,
            f = Nm(a.win),
            g = a.j.j() ? .j() || 0;
        a: switch (d ? .j()) {
            case 1:
                d = "AUTO_PROSE_TOP_ANCHOR";
                break a;
            case 2:
                d = "AUTO_PROSE_BOTTOM_ANCHOR";
                break a;
            default:
                d = "UNKNOWN_POSITION"
        }
        a: switch (a.l) {
            case 0:
                a = "DESKTOP";
                break a;
            case 2:
                a = "MOBILE";
                break a;
            default:
                a = "OTHER_VIEWPORT"
        }
        bq(e, Yp, { ...c,
            evt: b,
            vh: f,
            eid: g,
            pos: d,
            vpt: a
        })
    }

    function cq(a, b) {
        aq(a, "place", {
            sts: b
        })
    }
    var dq = class {
        constructor(a, b, c) {
            this.win = a;
            this.m = b;
            this.j = c;
            this.l = Ye()
        }
    };
    var eq = {},
        fq = {},
        gq = {},
        hq = {},
        iq = {};

    function jq() {
        throw Error("Do not instantiate directly");
    }
    jq.prototype.Rf = null;
    jq.prototype.Na = function() {
        return this.content
    };
    jq.prototype.toString = function() {
        return this.content
    };

    function kq(a) {
        if (a.Sf !== eq) throw Error("Sanitized content was not of kind HTML.");
        return rd(a.toString())
    }

    function lq() {
        jq.call(this)
    }
    Ia(lq, jq);
    lq.prototype.Sf = eq;

    function mq(a, b) {
        return null != a && a.Sf === b
    };

    function nq(a) {
        if (null != a) switch (a.Rf) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function oq(a) {
        return mq(a, eq) ? a : a instanceof pd ? pq(od(a).toString()) : a instanceof pd ? pq(od(a).toString()) : pq(String(String(a)).replace(qq, rq), nq(a))
    }
    var pq = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Rf = d);
            return c
        }
    }(lq);

    function sq(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function tq(a) {
        return mq(a, eq) ? String(String(a.Na()).replace(uq, "").replace(vq, "&lt;")).replace(wq, rq) : String(a).replace(qq, rq)
    }

    function xq(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let k = 0; k < g; k++) {
                var h = e[f + k];
                if (d[k] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function yq(a) {
        if (null == a) return " null ";
        if (mq(a, fq)) return a.Na();
        if (a instanceof Ec || a instanceof Ec) return (a instanceof Ec && a.constructor === Ec ? a.l : "type_error:SafeScript").toString();
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(zq, Aq) + "'"
        }
    }

    function V(a) {
        mq(a, iq) ? a = sq(a.Na()) : null == a ? a = "" : a instanceof ad ? a = sq($c(a)) : a instanceof ad ? a = sq($c(a)) : a instanceof md ? a = sq(ld(a)) : a instanceof md ? a = sq(ld(a)) : (a = String(a), a = Bq.test(a) ? a : "zSoyz");
        return a
    }
    const Cq = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function rq(a) {
        return Cq[a]
    }
    const Dq = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function Aq(a) {
        return Dq[a]
    }
    const Eq = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Fq(a) {
        return Eq[a]
    }
    const qq = /[\x00\x22\x26\x27\x3c\x3e]/g,
        wq = /[\x00\x22\x27\x3c\x3e]/g,
        Gq = /[\x00\x09-\x0d \x22\x26\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        Hq = /[\x00\x09-\x0d \x22\x27\x2d\/\x3c-\x3e`\x85\xa0\u2028\u2029]/g,
        zq = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        Iq = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Bq = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\((?:[-\u0020\t,+.!#%_0-9a-zA-Z]|(?:calc|cubic-bezier|drop-shadow|hsl|hsla|hue-rotate|invert|linear-gradient|max|min|rgb|rgba|rotate|rotateZ|translate|translate3d|translateX|translateY|var)\([-\u0020\t,+.!#%_0-9a-zA-Z]+\))+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Jq =
        /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+-]+;base64,[a-z0-9+\/]+=*$|^blob:/i;

    function Kq(a) {
        return String(a).replace(Iq, Fq)
    }
    const uq = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        vq = /</g;

    function Lq(a) {
        a = void 0 === a ? "white" : a;
        return pq('<svg width="' + tq(18) + '" height="' + tq(18) + '" viewBox="0 0 ' + tq(18) + " " + tq(18) + '"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.76 10.27L17.49 16L16 17.49L10.27 11.76C9.2 12.53 7.91 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 7.91 12.53 9.2 11.76 10.27ZM6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2Z" fill=' + (mq(a, eq) ? String(String(a.Na()).replace(uq, "").replace(vq,
            "&lt;")).replace(Hq, rq) : String(a).replace(Gq, rq)) + " /></svg>")
    };
    /* 
     
     
     Copyright Mathias Bynens <http://mathiasbynens.be/> 
     
     Permission is hereby granted, free of charge, to any person obtaining 
     a copy of this software and associated documentation files (the 
     "Software"), to deal in the Software without restriction, including 
     without limitation the rights to use, copy, modify, merge, publish, 
     distribute, sublicense, and/or sell copies of the Software, and to 
     permit persons to whom the Software is furnished to do so, subject to 
     the following conditions: 
     
     The above copyright notice and this permission notice shall be 
     included in all copies or substantial portions of the Software. 
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, 
     EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF 
     MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND 
     NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
     LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
     OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
     WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 
    */
    const Mq = Math.floor;
    var Nq = /^xn--/,
        Oq = /[\x2E\u3002\uFF0E\uFF61]/g;
    const Pq = {
        xm: "Overflow: input needs wider integers to process",
        tm: "Illegal input >= 0x80 (not a basic code point)",
        em: "Invalid input"
    };

    function Qq(a) {
        throw RangeError(Pq[a]);
    }

    function Rq(a, b) {
        const c = a.split("@");
        let d = "";
        1 < c.length && (d = c[0] + "@", a = c[1]);
        a = a.replace(Oq, ".");
        a = a.split(".").map(b).join(".");
        return d + a
    }

    function Sq(a) {
        return Rq(a, b => {
            if (Nq.test(b) && 4 < b.length) {
                b = b.slice(4).toLowerCase();
                const h = [],
                    k = b.length;
                let l = 0,
                    m = 128;
                var c = 72,
                    d = b.lastIndexOf("-");
                0 > d && (d = 0);
                for (var e = 0; e < d; ++e) 128 <= b.charCodeAt(e) && Qq("Illegal input >= 0x80 (not a basic code point)"), h.push(b.charCodeAt(e));
                for (d = 0 < d ? d + 1 : 0; d < k;) {
                    e = l;
                    for (let n = 1, p = 36;; p += 36) {
                        d >= k && Qq("Invalid input");
                        var f = b.charCodeAt(d++);
                        f = 10 > f - 48 ? f - 22 : 26 > f - 65 ? f - 65 : 26 > f - 97 ? f - 97 : 36;
                        (36 <= f || f > Mq((2147483647 - l) / n)) && Qq("Overflow: input needs wider integers to process");
                        l += f * n;
                        var g = p <= c ? 1 : p >= c + 26 ? 26 : p - c;
                        if (f < g) break;
                        f = 36 - g;
                        n > Mq(2147483647 / f) && Qq("Overflow: input needs wider integers to process");
                        n *= f
                    }
                    f = h.length + 1;
                    c = l - e;
                    g = 0;
                    c = 0 == e ? Mq(c / 700) : c >> 1;
                    for (c += Mq(c / f); 455 < c; g += 36) c = Mq(c / 35);
                    c = Mq(g + 36 * c / (c + 38));
                    Mq(l / f) > 2147483647 - m && Qq("Overflow: input needs wider integers to process");
                    m += Mq(l / f);
                    l %= f;
                    h.splice(l++, 0, m)
                }
                b = String.fromCodePoint.apply(null, h)
            }
            return b
        })
    };
    const Tq = pb("558153351");

    function Uq(a, b, c) {
        const d = a.Oa.contentWindow;
        a.A ? d.postMessage({
            action: "search",
            searchTerm: b,
            rsToken: c,
            experimentId: a.m
        }, "https://www.gstatic.com") : d.google.search.cse.element.getElement(a.B).execute(b, void 0, {
            rsToken: c,
            afsExperimentId: a.m,
            hostName: a.host
        })
    }

    function Vq(a, b) {
        if (a.G) {
            const c = a.Oa.contentDocument ? .getElementById("prose-empty-serp-container");
            b && c && Bb(b, "input", () => {
                c.style.display = "none"
            })
        }
    }
    var Wq = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m = !1, n = !1) {
            this.Oa = a;
            this.l = b;
            this.B = c;
            this.j = d;
            this.H = e;
            this.host = f.host;
            this.origin = f.origin;
            this.v = g;
            this.C = h;
            this.m = k;
            this.F = m;
            this.A = l;
            this.G = n
        }
        K() {
            this.Oa.setAttribute("id", "prose-iframe");
            this.Oa.setAttribute("width", "100%");
            this.Oa.setAttribute("height", "100%");
            var a = this.Oa,
                b = bd({
                    "box-sizing": "border-box",
                    border: "unset"
                });
            a.style.cssText = $c(b);
            a = "https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(this.host);
            var c = oe(a, pe) ||
                Vc;
            var d = Sq(this.host.startsWith("www.") ? this.host.slice(4) : this.host);
            a = this.B;
            b = this.j;
            var e = this.H,
                f = this.host;
            d = this.C.replace("${website}", d);
            const g = this.G;
            var h = pq,
                k = "<style>.cse-favicon {display: block; float: left; height: 16px; position: absolute; left: 15px; width: 16px;}.cse-header {font-size: 16px; font-family: Arial; margin-left: 35px; margin-top: 6px; margin-bottom: unset; line-height: 16px;}.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}.prose-container {max-width: 652px;}#prose-empty-serp-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 52px; position: relative; width: 248px; height: 259px; margin: auto; top: 100px;}#prose-empty-serp-icon-image {display: flex; flex-direction: row; justify-content: center; align-items: center; padding: 30px; gap: 10px; width: 124px; height: 124px; border-radius: 62px; flex: none; order: 1; flex-grow: 0; position: absolute; top: 0;}#prose-empty-serp-text-container {display: flex; flex-direction: column; align-items: center; padding: 0; gap: 19px; width: 248px; height: 83px; flex: none; order: 2; align-self: stretch; flex-grow: 0; position: absolute; top: 208px;}#prose-empty-serp-text-div {display: flex; flex-direction: column; align-items: flex-start; padding: 0; gap: 11px; width: 248px; height: 83px; flex: none; order: 0; align-self: stretch; flex-grow: 0;}#prose-empty-serp-supporting-text {width: 248px; height: 40px; font-family: 'Arial'; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px; text-align: center; letter-spacing: 0.2px; color: #202124; flex: none; order: 1; align-self: stretch; flex-grow: 0;}</style>" +
                (this.F ? '<script>window.__gcse={initializationCallback:function(){top.postMessage({action:"init",adChannel:"' + String(e).replace(zq, Aq) + '"},top.location.origin);}};\x3c/script>' : "") + '<div class="prose-container"><img class="cse-favicon" src="';
            mq(c, gq) || mq(c, hq) ? c = Kq(c) : c instanceof Pc ? c = Kq(Qc(c)) : c instanceof Pc ? c = Kq(Qc(c)) : c instanceof Fc ? c = Kq(Ic(c).toString()) : c instanceof Fc ? c = Kq(Ic(c).toString()) : (c = String(c), c = Jq.test(c) ? c.replace(Iq, Fq) : "about:invalid#zSoyz");
            a = h(k + tq(c) + '" alt="' + tq(f) + ' icon"><p class="cse-header"><strong>' +
                oq(d) + '</strong></p><div class="gcse-search" data-gname="' + tq(a) + '" data-adclient="' + tq(b) + '" data-adchannel="' + tq(e) + '" data-as_sitesearch="' + tq(f) + '" data-personalizedAds="false"></div></div>' + (g ? "<div id=\"prose-empty-serp-container\"><img id='prose-empty-serp-icon-image' src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjQiIGhlaWdodD0iMTI0IiByeD0iNjIiIGZpbGw9IiNGMUYzRjQiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02OS4zNiA2NS4zODY3TDg0LjY0IDgwLjY2NjdMODAuNjY2NyA4NC42NEw2NS4zODY3IDY5LjM2QzYyLjUzMzMgNzEuNDEzMyA1OS4wOTMzIDcyLjY2NjcgNTUuMzMzMyA3Mi42NjY3QzQ1Ljc2IDcyLjY2NjcgMzggNjQuOTA2NyAzOCA1NS4zMzMzQzM4IDQ1Ljc2IDQ1Ljc2IDM4IDU1LjMzMzMgMzhDNjQuOTA2NyAzOCA3Mi42NjY3IDQ1Ljc2IDcyLjY2NjcgNTUuMzMzM0M3Mi42NjY3IDU5LjA5MzMgNzEuNDEzMyA2Mi41MzMzIDY5LjM2IDY1LjM4NjdaTTU1LjMzMzMgNDMuMzMzM0M0OC42OTMzIDQzLjMzMzMgNDMuMzMzMyA0OC42OTMzIDQzLjMzMzMgNTUuMzMzM0M0My4zMzMzIDYxLjk3MzMgNDguNjkzMyA2Ny4zMzMzIDU1LjMzMzMgNjcuMzMzM0M2MS45NzMzIDY3LjMzMzMgNjcuMzMzMyA2MS45NzMzIDY3LjMzMzMgNTUuMzMzM0M2Ny4zMzMzIDQ4LjY5MzMgNjEuOTczMyA0My4zMzMzIDU1LjMzMzMgNDMuMzMzM1oiIGZpbGw9IiM5QUEwQTYiLz4KPC9zdmc+Cg==' alt=''><div id='prose-empty-serp-text-container'><div id='prose-empty-serp-text-div'><div id='prose-empty-serp-supporting-text'>Search this website by entering a keyword.</div></div></div></div>" :
                    ""));
            a = kq(a);
            this.A ? (a = Lc(pb("https://www.gstatic.com/prose/protected/%{version}/iframe.html?cx=%{cxId}&host=%{host}&hl=%{lang}&lrh=%{lrh}&client=%{client}&origin=%{origin}"), {
                version: Tq,
                cxId: this.l,
                host: this.host,
                lang: this.v,
                lrh: this.C,
                client: this.j,
                origin: this.origin
            }), this.Oa.src = Ic(a).toString()) : (b = {
                    style: bd({
                        margin: 0
                    })
                }, f = Lc(pb("https://cse.google.com/cse.js?cx=%{cxId}&language=%{lang}"), {
                    cxId: this.l,
                    lang: this.v
                }), e = {}, f = `<script src="${zi(Ic(f).toString())}"`, e.async && (f += " async"), e.nonce &&
                (f += ` nonce="${zi(e.nonce)}"`), e = rd(f + ">\x3c/script>"), a = Fi(b, [a, e]), this.Oa.srcdoc = od(a))
        }
    };

    function Xq(a) {
        var b = [];
        Wm(a.getElementsByTagName("p"), function(c) {
            100 <= Yq(c) && b.push(c)
        });
        return b
    }

    function Yq(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Wm(a.childNodes, function(c) {
            b += Yq(c)
        });
        return b
    }

    function Zq(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function $q(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }
    const ar = class {
        constructor(a, b, c, d) {
            this.v = a;
            this.l = b;
            this.m = c;
            this.j = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.v)
            } catch (f) {}
            if (!b.length) return [];
            a = ab(b);
            a = $q(this, a);
            "number" === typeof this.l && (b = this.l, 0 > b && (b += a.length), a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.m) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = Xq(a[c]),
                        e = this.m;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.v,
                occurrenceIndex: this.l,
                paragraphIndex: this.m,
                ignoreMode: this.j
            })
        }
    };

    function br(a) {
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
    }

    function cr(a) {
        return Xm(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };
    var W = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        dr = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        er = class {
            constructor(a, b = "") {
                this.j = a;
                this.defaultValue = b
            }
        },
        fr = class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var gr = new W(1082, !0),
        hr = new W(1277),
        ir = new W(1275),
        jr = new dr(1130, 100),
        kr = new W(1270, !0),
        lr = new dr(1032, 200),
        mr = new er(14),
        nr = new W(1304),
        or = new dr(1224, .01),
        pr = new W(1122, !0),
        qr = new W(1260),
        rr = new W(1239),
        sr = new W(1196),
        tr = new W(1160),
        ur = new W(316),
        vr = new W(1290),
        wr = new W(334),
        xr = new dr(1263, -1),
        yr = new dr(54),
        zr = new dr(1265, -1),
        Ar = new dr(1264, -1),
        Br = new W(1291),
        Cr = new W(1267, !0),
        Dr = new W(1268, !0),
        Er = new W(1266),
        Fr = new W(313),
        Gr = new dr(66, -1),
        Hr = new dr(65, -1),
        Ir = new W(1256),
        Jr = new W(369),
        Kr = new W(1241, !0),
        Lr = new W(368),
        Mr = new W(1300, !0),
        Nr = new fr(1273, ["en", "de"]),
        Or = new W(1223, !0),
        Pr = new fr(1261, ["44786015", "44786016"]),
        Qr = new W(1289),
        Rr = new W(1280),
        Sr = new W(1230, !0),
        Tr = new W(1229, !0),
        Ur = new W(1231, !0),
        Vr = new W(1292),
        Wr = new W(1282),
        Xr = new W(1250),
        Yr = new W(1151),
        Zr = new W(1288),
        $r = new dr(1072, .75),
        as = new W(290),
        bs = new W(1222),
        cs = new W(1238),
        ds = new W(1237),
        es = new dr(1245, 3600),
        fs = new W(1284, !0),
        gs = new W(571859167),
        hs = new dr(566560958, 3E4),
        is = new W(563731719),
        js = new dr(506864295, 300),
        ks = new dr(508040914,
            100),
        ls = new dr(547455356, 49),
        ms = new W(568515114),
        ns = new W(566279275),
        os = new W(566279276),
        ps = new W(567107015),
        qs = new fr(556791602, ["1"]),
        rs = new W(569978025),
        ss = new W(564316609),
        ts = new W(561639568),
        us = new W(558761323),
        vs = new W(566560957),
        ws = new W(529362570, !0),
        xs = new dr(571329679),
        ys = new W(570054060),
        zs = new W(556739145),
        As = new dr(564316610, .2),
        Bs = new dr(570003060),
        Cs = new W(570059447),
        Ds = new dr(561668774, .1),
        Es = new W(545453532),
        Fs = new W(554474127),
        Gs = new W(550910941),
        Hs = new W(562711461),
        Is = new W(506914611),
        Js = new W(568572979),
        Ks = new dr(469675170, 3E4),
        Ls = new dr(506871937),
        Ms = new W(569475461),
        Ns = new W(160889229),
        Os = new W(506852289),
        Ps = new W(1120),
        Qs = new W(570095433),
        Rs = new W(562896595),
        Ss = new W(542046278, !0),
        Ts = new W(568558478),
        Us = new er(1166),
        Vs = new W(1E4),
        Ws = new W(562874197),
        Xs = new W(562874196),
        Ys = new W(555237685, !0),
        Zs = new W(569475159),
        $s = new W(45414947, !0),
        at = new dr(472785970, 500),
        bt = new W(561451331),
        ct = new W(439828594),
        dt = new W(483962503),
        et = new W(506738118),
        ft = new W(77),
        gt = new W(78),
        ht = new W(83),
        it = new W(80),
        jt = new W(76),
        kt = new W(84),
        lt = new W(1973),
        mt = new W(188),
        nt = new W(485990406);
    var ot = class {
        constructor() {
            const a = {};
            this.m = (b, c) => null != a[b] ? a[b] : c;
            this.v = (b, c) => null != a[b] ? a[b] : c;
            this.A = (b, c) => null != a[b] ? a[b] : c;
            this.j = (b, c) => null != a[b] ? a[b] : c;
            this.l = () => {}
        }
    };

    function X(a) {
        return R(ot).m(a.j, a.defaultValue)
    }

    function pt(a) {
        return R(ot).v(a.j, a.defaultValue)
    }

    function qt(a) {
        return R(ot).A(a.j, a.defaultValue)
    };

    function rt(a, b) {
        a = (new Rd(a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function st(a, b, c) {
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
        br(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function tt(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            br(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var vt = (a, b, c, d = 0) => {
            var e = ut(b, c, d);
            if (e.K) {
                for (c = b = e.K; c = e.od(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Jd
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            st(a, e.anchor, e.position)
        },
        wt = (a, b, c, d = 0) => {
            X(Fr) ? vt(a, b, c, d) : st(a, b, c)
        };

    function ut(a, b, c) {
        const d = f => {
                f = xt(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = xt(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    K: yt(a.previousSibling, d),
                    od: f => yt(f.previousSibling, d),
                    Jd: 0
                };
            case 2:
                return {
                    K: yt(a.lastChild, d),
                    od: f => yt(f.previousSibling, d),
                    Jd: 0
                };
            case 3:
                return {
                    K: yt(a.nextSibling, e),
                    od: f => yt(f.nextSibling, e),
                    Jd: 3
                };
            case 1:
                return {
                    K: yt(a.firstChild, e),
                    od: f => yt(f.nextSibling, e),
                    Jd: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function xt(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function yt(a, b) {
        return a && b(a) ? a : null
    };
    var zt = (a, b = !1) => {
        try {
            return b ? (new Jd(a.innerWidth, a.innerHeight)).round() : Td(a || window).round()
        } catch (c) {
            return new Jd(-12245933, -12245933)
        }
    };

    function At(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function Bt(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new Id(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function Ct(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function Dt(a) {
        -1 === a.j && (a.j = a.data.reduce((b, c, d) => b + (c ? 2 ** d : 0), 0));
        return a.j
    }
    var Et = class {
        constructor() {
            this.data = [];
            this.j = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && Number.isInteger(a) && this.data[a] !== b && (this.data[a] = b, this.j = -1)
        }
        get(a) {
            return !!this.data[a]
        }
    };

    function Ft(a) {
        let b = a.location.href;
        if (a === a.top) return {
            url: b,
            Me: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent === a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 === b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            Me: c
        }
    };
    var Gt = (a, b, c) => {
        b = b || a.google_ad_width;
        c = c || a.google_ad_height;
        if (a && a.top == a) return !1;
        const d = a.document,
            e = d.documentElement;
        if (b && c) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : d.body && (f = d.body.clientWidth, g = d.body.clientHeight);
            if (g > 2 * c || f > 2 * b) return !1
        }
        return !0
    };

    function Ht(a, b) {
        Ie(a, (c, d) => {
            b[d] = c
        })
    }
    var It = a => {
        if (a == a.top) return 0;
        for (; a && a != a.top && Ae(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };
    var Jt = (a, b) => {
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
        Kt = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        Lt = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const Mt = (a, b, c) => {
        a = Jt(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var Nt = (a, b) => {
            b = b.parentElement;
            return b ? (a = Ge(b, a)) ? a.direction : "" : ""
        },
        Ot = (a, b, c) => {
            if (0 !== Mt(a, b, c)) {
                Lt(b, c, "0px");
                var d = Mt(a, b, c);
                Lt(b, c, -1 * d + "px");
                a = Mt(a, b, c);
                0 !== a && a !== d && Lt(b, c, d / (a - d) * d + "px")
            }
        };
    const Pt = RegExp("(^| )adsbygoogle($| )");

    function Qt(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c],
                e = Od(d.property);
            a[e] = d.value
        }
    }

    function Rt(a, b, c, d, e, f) {
        a = St(a, e);
        a.xa.setAttribute("data-ad-format", d ? d : "auto");
        Tt(a, b, c, f);
        return a
    }

    function Ut(a, b, c = null) {
        a = St(a, {});
        Tt(a, b, null, c);
        return a
    }

    function Tt(a, b, c, d) {
        var e = [];
        if (d = d && d.Of) a.ob.className = d.join(" ");
        a = a.xa;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function St(a, b) {
        const c = rt(a, b.clearBoth || !1);
        var d = c.style;
        d.textAlign = "center";
        b.Id && Qt(d, b.Id);
        a = (new Rd(a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.qf && (d.marginTop = b.qf);
        b.he && (d.marginBottom = b.he);
        b.kc && Qt(d, b.kc);
        c.appendChild(a);
        return {
            ob: c,
            xa: a
        }
    }

    function Vt(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        const d = {
            element: b
        };
        c = c && c.Bc();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function Wt(a) {
        const b = cr(a.document);
        Qa(b, function(c) {
            const d = Xt(a, c);
            var e;
            if (e = d) {
                e = (e = Jt(c, a)) ? e.y : 0;
                const f = Nm(a);
                e = !(e < f)
            }
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), Vt(a, c))
        })
    }

    function Xt(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in kb) a[kb[c]] && (b[kb[c]] = a[kb[c]]);
        return b
    };
    class Yt {
        constructor() {
            var a = Hi `https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.j = null;
            this.l = !1;
            this.A = Math.random();
            this.m = this.Ba;
            this.B = a
        }
        jf(a) {
            this.j = a
        }
        v(a) {
            this.l = a
        }
        Ba(a, b, c = .01, d, e = "jserror") {
            if ((this.l ? this.A : Math.random()) > c) return !1;
            b.error && b.meta && b.id || (b = new ij(b, {
                context: a,
                id: e
            }));
            if (d || this.j) b.meta = {}, this.j && this.j(b.meta), d && d(b.meta);
            t.google_js_errors = t.google_js_errors || [];
            t.google_js_errors.push(b);
            t.error_rep_loaded || (Ee(t.document, this.B), t.error_rep_loaded = !0);
            return !1
        }
        Lc(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.m(a, d, .01, c, "jserror")) throw d;
            }
        }
        Qa(a, b, c, d) {
            return (...e) => this.Lc(a, () => b.apply(c, e), d)
        }
        gb(a, b, c) {
            b.catch(d => {
                d = d ? d : "unknown rejection";
                this.Ba(a, d instanceof Error ? d : Error(d), void 0, c || this.j || void 0)
            })
        }
    };
    const Zt = (a, b) => {
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    };
    var $t = (a, b, c, d, e = !1) => {
            const f = d || window,
                g = "undefined" !== typeof queueMicrotask;
            return function() {
                e && g && queueMicrotask(() => {
                    f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                    f.google_rum_task_id_counter += 1
                });
                const h = pj();
                let k, l = 3;
                try {
                    k = b.apply(this, arguments)
                } catch (m) {
                    l = 13;
                    if (!c) throw m;
                    c(a, m)
                } finally {
                    f.google_measure_js_timing && h && Zt({
                        label: a.toString(),
                        value: h,
                        duration: (pj() || 0) - h,
                        type: l,
                        ...(e && g && {
                            taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                        })
                    }, f)
                }
                return k
            }
        },
        au = (a, b, c, d = !1) => $t(a, b, (e, f) => {
            (new Yt).Ba(e, f)
        }, c, d);

    function bu(a, b, c) {
        return $t(a, b, void 0, c, !0).apply()
    }

    function cu(a, b) {
        return au(754, a, b, !0).apply()
    }

    function du(a) {
        if (!a) return null;
        var b = H(a, 7);
        if (H(a, 1) || a.getId() || 0 < Yg(a, 4, sg).length) {
            var c = Yg(a, 4, sg);
            b = mh(a, 2);
            var d = mh(a, 5),
                e = eu(z(a, 6)),
                f = H(a, 3),
                g = H(a, 1);
            a = "";
            g && (a += g);
            f && (a += "#" + Zq(f));
            if (c)
                for (f = 0; f < c.length; f++) a += "." + Zq(c[f]);
            b = (c = a) ? new ar(c, b, d, e) : null
        } else b = b ? new ar(b, mh(a, 2), mh(a, 5), eu(z(a, 6))) : null;
        return b
    }
    var fu = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function eu(a) {
        return null == a ? a : fu[a]
    }

    function gu(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = H(a[c], 1),
                e = H(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.property = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function hu(a, b) {
        var c = {};
        a && (c.qf = H(a, 1), c.he = H(a, 2), c.clearBoth = !!Xg(a, 3));
        b && (c.Id = gu(C(b, vp, 3)), c.kc = gu(C(b, vp, 4)));
        return c
    }
    var iu = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        ju = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const ku = ["-webkit-text-fill-color"];

    function lu(a) {
        if (hc) {
            {
                const c = Ge(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = mu(a)
                } else a = nu()
            }
        } else a = nu();
        return a
    }
    var nu = () => {
        const a = {
            all: "initial"
        };
        Qa(ku, b => {
            a[b] = "unset"
        });
        return a
    };

    function mu(a) {
        Qa(ku, b => {
            delete a[b]
        });
        return a
    };

    function ou(a, b) {
        const c = a.document.createElement("div");
        w(c, lu(a));
        a = c.attachShadow({
            mode: "open"
        });
        b && c.classList.add(b);
        return {
            Wa: c,
            shadowRoot: a
        }
    };

    function pu({
        ic: a,
        Jb: b,
        Xb: c,
        jc: d,
        Kb: e,
        Yb: f
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

    function qu(a, b) {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b.x, b.y));
        return a.elementFromPoint(b.x, b.y)
    };

    function ru(a, b) {
        for (const c of b)
            if (b = su(a, c)) return b;
        return null
    }

    function tu(a, {
        Hi: b,
        sj: c,
        width: d,
        height: e
    }) {
        b = pu({
            ic: b,
            Jb: b + d,
            Xb: 10,
            jc: c,
            Kb: c + e,
            Yb: 10
        });
        return ru(a, b)
    }

    function uu(a, b) {
        var c = pu({
            ic: b.left,
            Jb: b.right,
            Xb: 10,
            jc: b.top,
            Kb: b.bottom,
            Yb: 10
        });
        b = new Set;
        for (const d of c)(c = su(a, d)) && b.add(c);
        return b
    }

    function vu(a, b, c) {
        if ("fixed" !== Oi(b, "position")) return null;
        var d = "GoogleActiveViewInnerContainer" === b.getAttribute("class") || 1 >= Ri(b).width && 1 >= Ri(b).height || a.j.bi && !a.j.bi(b) ? !0 : !1;
        a.j.fg && a.j.fg(b, c, d);
        return d ? null : b
    }

    function su(a, b) {
        var c = qu(a.I.document, b);
        if (c) {
            var d;
            if (!(d = vu(a, c, b))) a: {
                d = a.I.document;
                for (c = c.offsetParent; c && c !== d.body; c = c.offsetParent) {
                    const e = vu(a, c, b);
                    if (e) {
                        d = e;
                        break a
                    }
                }
                d = null
            }
            a = d || null
        } else a = null;
        return a
    }
    var wu = class {
        constructor(a, b = {}) {
            this.I = a;
            this.j = b
        }
    };

    function xu(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map), null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new yu;
        return a.google_reactive_ads_global_state
    }
    class yu {
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
            this.floatingAdsStacking = new zu;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var zu = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };

    function Au(a, b) {
        return new Bu(a, b)
    }

    function Cu(a) {
        const b = Du(a);
        Qa(a.j.maxZIndexListeners, c => c(b))
    }

    function Du(a) {
        a = Je(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }

    function Eu(a, b) {
        Za(a.j.maxZIndexListeners, c => c === b)
    }
    class ov {
        constructor(a) {
            this.j = xu(a).floatingAdsStacking
        }
    }

    function pv(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.m;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            Cu(b);
            a.j = d
        }
    }

    function qv(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            Cu(b);
            a.j = null
        }
    }
    class Bu {
        constructor(a, b) {
            this.l = a;
            this.m = b;
            this.j = null
        }
    };

    function rv(a) {
        a = a.activeElement;
        const b = a ? .shadowRoot;
        return b ? rv(b) || a : a
    }

    function sv(a, b) {
        return tv(b, a.document.body).flatMap(c => uv(c))
    }

    function tv(a, b) {
        var c = a;
        for (a = []; c && c !== b;) {
            a.push(c);
            let e;
            var d;
            (d = c.parentElement) || (c = c.getRootNode(), d = (null == (e = c.mode && c.host ? c : null) ? void 0 : e.host) || null);
            c = d
        }
        return c !== b ? [] : a
    }

    function uv(a) {
        const b = a.parentElement;
        return b ? Array.from(b.children).filter(c => c !== a) : []
    };

    function vv(a) {
        null !== a.j && (a.j.di.forEach(b => {
            b.inert = !1
        }), a.j.Zi ? .focus(), a.j = null)
    }

    function wv(a, b) {
        vv(a);
        const c = rv(a.win.document);
        b = sv(a.win, b).filter(d => !d.inert);
        b.forEach(d => {
            d.inert = !0
        });
        a.j = {
            Zi: c,
            di: b
        }
    }
    var xv = class {
        constructor(a) {
            this.win = a;
            this.j = null
        }
        Ud() {
            vv(this)
        }
    };

    function yv(a) {
        return new zv(a, new mn(a, a.document.body), new mn(a, a.document.documentElement), new mn(a, a.document.documentElement))
    }

    function Av(a) {
        ln(a.m, "scroll-behavior", "auto");
        const b = Bv(a.win);
        b.activePageScrollPreventers.add(a);
        null === b.previousWindowScroll && (b.previousWindowScroll = a.win.scrollY);
        ln(a.j, "position", "fixed");
        ln(a.j, "top", `${-b.previousWindowScroll}px`);
        ln(a.j, "width", "100%");
        ln(a.j, "overflow-x", "hidden");
        ln(a.j, "overflow-y", "hidden");
        ln(a.l, "overflow-x", "hidden");
        ln(a.l, "overflow-y", "hidden")
    }

    function Cv(a) {
        kn(a.j);
        kn(a.l);
        const b = Bv(a.win);
        b.activePageScrollPreventers.delete(a);
        0 === b.activePageScrollPreventers.size && (a.win.scrollTo(0, b.previousWindowScroll || 0), b.previousWindowScroll = null);
        kn(a.m)
    }
    var zv = class {
        constructor(a, b, c, d) {
            this.win = a;
            this.j = b;
            this.l = c;
            this.m = d
        }
    };

    function Bv(a) {
        return a.googPageScrollPreventerInfo = a.googPageScrollPreventerInfo || {
            previousWindowScroll: null,
            activePageScrollPreventers: new Set
        }
    }

    function Dv(a) {
        return a.googPageScrollPreventerInfo && 0 < a.googPageScrollPreventerInfo.activePageScrollPreventers.size ? !0 : !1
    };

    function Ev(a, b) {
        return Fv(`#${a}`, b)
    }

    function Gv(a, b) {
        return Fv(`.${a}`, b)
    }

    function Fv(a, b) {
        b = b.querySelector(a);
        if (!b) throw Error(`Element (${a}) does not exist`);
        return b
    };

    function Hv(a, b) {
        b = ou(a, b);
        a.document.body.appendChild(b.Wa);
        return b
    }

    function Iv(a, b) {
        const c = new S(b.M);
        un(b, !0, () => void c.j(!0));
        un(b, !1, () => {
            a.setTimeout(() => {
                b.M || c.j(!1)
            }, 700)
        });
        return qn(c)
    };

    function Jv(a) {
        const b = a.yc;
        var c = a.Qd,
            d = a.xc;
        const e = a.mc,
            f = a.Lf,
            g = a.ee,
            h = a.Ja;
        a = "<style>#hd-drawer-container {position: fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#hd-drawer-container.hd-revealed {pointer-events: auto;}#hd-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.hd-revealed > #hd-modal-background {opacity: 0.5;}#hd-drawer {position: absolute; top: 0; height: 100%; width: " +
            V(b) + "; background-color: white; display: flex; flex-direction: column; box-sizing: border-box; padding-bottom: ";
        c = c ? h ? 20 : 16 : 0;
        a += V(c) + "px; transition: transform " + V(g) + "s ease-in-out;" + (d ? "left: 0; border-top-right-radius: " + V(c) + "px; border-bottom-right-radius: " + V(c) + "px; transform: translateX(-100%);" : "right: 0; border-top-left-radius: " + V(c) + "px; border-bottom-left-radius: " + V(c) + "px; transform: translateX(100%);") + "}.hd-revealed > #hd-drawer {transform: translateY(0);}" + (h ? "#hd-control-bar {height: 24px;}" :
                "") + ".hd-control-button {border: none; background: none; cursor: pointer;" + (h ? "" : "padding: 24px;") + "}#hd-back-arrow-button {" + (d ? "float: right;" : "float: left;") + "}#hd-close-button {" + (d ? "float: left;" : "float: right;") + '}#hd-content-container {flex-grow: 1; overflow: auto;}#hd-content-container::-webkit-scrollbar * {background: transparent;}.hd-hidden {visibility: hidden;}</style><div id="hd-drawer-container" class="hd-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="hd-modal-background"></div><div id="hd-drawer"><div id="hd-control-bar"><button id="hd-back-arrow-button" class="hd-control-button hd-hidden" aria-label="' +
            tq(f) + '">';
        d = h ? "#5F6368" : "#444746";
        a += '<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + tq(d) + '"><path d="m12 20-8-8 8-8 1.425 1.4-5.6 5.6H20v2H7.825l5.6 5.6Z"/></svg></button><button id="hd-close-button" class="hd-control-button" aria-label="' + tq(e) + '"><svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="' + tq(d) + '"><path d="M6.4 19 5 17.6 10.6 12 5 6.4 6.4 5 12 10.6 17.6 5 19 6.4 13.4 12 19 17.6 17.6 19 12 13.4Z"/></svg></button></div><div id="hd-content-container"></div></div></div>';
        return pq(a)
    };

    function Kv(a) {
        a = a.top;
        if (!a) return null;
        try {
            var b = a.history
        } catch (c) {
            b = null
        }
        b = b && b.pushState && "function" === typeof b.pushState ? b : null;
        if (!b) return null;
        if (a.googNavStack) return a.googNavStack;
        b = new Lv(a, b);
        b.K();
        return b ? a.googNavStack = b : null
    }

    function Mv(a, b) {
        return b ? b.googNavStackId === a.m ? b : null : null
    }

    function Nv(a, b) {
        for (let c = b.length - 1; 0 <= c; --c) {
            const d = 0 === c;
            a.I.requestAnimationFrame(() => void b[c].jj({
                isFinal: d
            }))
        }
    }

    function Ov(a, b) {
        b = db(a.stack, b, (c, d) => c - d.ng.googNavStackStateId);
        if (0 <= b) return a.stack.splice(b, a.stack.length - b);
        b = -b - 1;
        return a.stack.splice(b, a.stack.length - b)
    }
    class Lv extends P {
        constructor(a, b) {
            super();
            this.I = a;
            this.j = b;
            this.stack = [];
            this.m = 1E9 * Math.random() >>> 0;
            this.A = 0;
            this.v = c => {
                (c = Mv(this, c.state)) ? Nv(this, Ov(this, c.googNavStackStateId + .5)): Nv(this, this.stack.splice(0, this.stack.length))
            }
        }
        pushEvent() {
            const a = {
                    googNavStackId: this.m,
                    googNavStackStateId: this.A++
                },
                b = new Promise(c => {
                    this.stack.push({
                        jj: c,
                        ng: a
                    })
                });
            this.j.pushState(a, "");
            return {
                navigatedBack: b,
                triggerNavigateBack: () => {
                    const c = Ov(this, a.googNavStackStateId);
                    var d;
                    if (d = 0 < c.length) {
                        d = c[0].ng;
                        const e = Mv(this, this.j.state);
                        d = e && e.googNavStackId === d.googNavStackId && e.googNavStackStateId === d.googNavStackStateId
                    }
                    d && this.j.go(-c.length);
                    Nv(this, c)
                }
            }
        }
        K() {
            this.I.addEventListener("popstate", this.v)
        }
        l() {
            this.I.removeEventListener("popstate", this.v);
            super.l()
        }
    };

    function Pv(a) {
        return (a = Kv(a)) ? new Qv(a) : null
    }

    function Rv(a) {
        if (!a.j) {
            var {
                navigatedBack: b,
                triggerNavigateBack: c
            } = a.v.pushEvent();
            a.j = c;
            b.then(() => {
                a.j && !a.B && (a.j = null, An(a.m))
            })
        }
    }
    var Qv = class extends P {
        constructor(a) {
            super();
            this.v = a;
            this.m = new Bn;
            this.j = null
        }
    };

    function Sv(a, b, c) {
        var d = c.se ? null : new xv(a);
        const e = Au(new ov(a), c.zIndex - 1);
        b = Tv(a, b, c);
        d = new Uv(a, b, d, c.sb, yv(a), e);
        d.K();
        (c.gd || void 0 === c.gd) && Vv(d);
        c.qb && ((a = Pv(a)) ? Wv(d, a, c.Ve) : c.Ve ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function Vv(a) {
        a.A = b => {
            "Escape" === b.key && a.j.M && a.collapse()
        };
        a.win.document.body.addEventListener("keydown", a.A)
    }

    function Wv(a, b, c) {
        un(a.j, !0, () => {
            try {
                Rv(b)
            } catch (d) {
                c ? .(d)
            }
        });
        un(a.j, !1, () => {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                c ? .(d)
            }
        });
        yn(b.m).listen(() => void a.collapse());
        zl(a, b)
    }

    function Xv(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function Yv(a) {
        a.win.setTimeout(() => {
            a.j.M && Xv(a).Ka.focus()
        }, 500)
    }

    function Zv(a) {
        const {
            Ue: b,
            Lh: c
        } = Xv(a);
        b.addEventListener("click", () => void a.collapse());
        c.addEventListener("click", () => void a.collapse())
    }

    function $v(a) {
        un(a.m, !1, () => {
            Xv(a).Ka.classList.add("hd-hidden")
        })
    }
    var Uv = class extends P {
        constructor(a, b, c, d = !0, e, f) {
            super();
            this.win = a;
            this.C = b;
            this.v = c;
            this.sb = d;
            this.j = new S(!1);
            this.m = Iv(a, this.j);
            un(this.m, !0, () => {
                Av(e);
                pv(f)
            });
            un(this.m, !1, () => {
                Cv(e);
                qv(f)
            })
        }
        show({
            Yf: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            Xv(this).Ka.classList.remove("hd-hidden");
            jn(this.win);
            Xv(this).Ka.classList.add("hd-revealed");
            this.j.j(!0);
            this.v && (wv(this.v, Xv(this).hb.Wa), this.sb && Yv(this));
            a && un(this.m, !1, () => {
                this.ma()
            })
        }
        collapse() {
            Xv(this).Ka.classList.remove("hd-revealed");
            this.j.j(!1);
            this.v ? .Ud()
        }
        isVisible() {
            return this.m
        }
        K() {
            Zv(this);
            $v(this)
        }
        l() {
            this.A && this.win.document.body.removeEventListener("keydown", this.A);
            const a = this.C.hb.Wa,
                b = a.parentNode;
            b && b.removeChild(a);
            this.v ? .Ud();
            super.l()
        }
    };

    function Tv(a, b, c) {
        const d = Hv(a, c.ue),
            e = d.shadowRoot;
        e.appendChild(ee(new Rd(a.document), kq(Jv({
            yc: c.yc,
            Qd: c.Qd ? ? !0,
            xc: c.xc || !1,
            mc: c.mc,
            Lf: c.Lf || "",
            zIndex: c.zIndex,
            ee: .5,
            Ja: c.Ja || !1
        }))));
        const f = Ev("hd-drawer-container", e);
        c.Be ? .l(g => {
            f.setAttribute("aria-label", g)
        });
        c = Ev("hd-content-container", e);
        c.appendChild(b);
        jn(a);
        return {
            Ka: f,
            Ue: Ev("hd-modal-background", e),
            ke: c,
            Lh: Ev("hd-close-button", e),
            Nn: Ev("hd-back-arrow-button", e),
            hb: d
        }
    };

    function aw(a) {
        const b = a.Ti,
            c = a.ni;
        var d = a.ee;
        const e = a.Ja;
        a = "<style>#ved-drawer-container {position:  fixed; left: 0; top: 0; width: 100vw; height: 100%; overflow: hidden; z-index: " + V(a.zIndex) + "; pointer-events: none;}#ved-drawer-container.ved-revealed {pointer-events: auto;}#ved-modal-background {position: absolute; left: 0; bottom: 0; background-color: black; transition: opacity .5s ease-in-out; width: 100%; height: 100%; opacity: 0;}.ved-revealed > #ved-modal-background {opacity: 0.5;}#ved-ui-revealer {position: absolute; left: 0; bottom: 0; width: 100%; height: " +
            V(c) + "%; transition: transform " + V(d) + "s ease-in-out; transform: translateY(100%);}#ved-ui-revealer.ved-no-animation {transition-property: none;}.ved-revealed > #ved-ui-revealer {transform: translateY(0);}#ved-scroller-container {position: absolute; left: 0; bottom: 0; width: 100%; height: 100%; clip-path: inset(0 0 -50px 0 round ";
        d = e ? 20 : 28;
        a += V(d) + "px);}#ved-scroller {position: relative; width: 100%; height: 100%; overflow-y: scroll; -ms-overflow-style: none; scrollbar-width: none; overflow-y: scroll; overscroll-behavior: none; scroll-snap-type: y mandatory;}#ved-scroller.ved-scrolling-paused {overflow: hidden;}#ved-scroller.ved-no-snap {scroll-snap-type: none;}#ved-scroller::-webkit-scrollbar {display: none;}#ved-scrolled-stack {width: 100%; height: 100%; overflow: visible;}#ved-scrolled-stack.ved-with-background {background-color: white;}.ved-snap-point-top {scroll-snap-align: start;}.ved-snap-point-bottom {scroll-snap-align: end;}#ved-fully-closed-anchor {height: " +
            V(b / c * 100) + "%;}.ved-with-background #ved-fully-closed-anchor {background-color: white;}#ved-partially-extended-anchor {height: " + V((c - b) / c * 100) + "%;}.ved-with-background #ved-partially-extended-anchor {background-color: white;}#ved-moving-handle-holder {scroll-snap-stop: always;}.ved-with-background #ved-moving-handle-holder {background-color: white;}#ved-fixed-handle-holder {position: absolute; left: 0; top: 0; width: 100%;}#ved-visible-scrolled-items {display: flex; flex-direction: column; min-height: " +
            V(b / c * 100) + "%;}#ved-content-background {width: 100%; flex-grow: 1; padding-top: 1px; margin-top: -1px; background-color: white;}#ved-content-sizer {overflow: hidden; width: 100%; height: 100%;}#ved-content-container {width: 100%;}#ved-over-scroll-block {display: flex; flex-direction: column; position: absolute; bottom: 0; left: 0; width: 100%; height: " + V(b / c * 100) + "%; pointer-events: none;}#ved-over-scroll-handle-spacer {height: " + V(80) + "px;}#ved-over-scroll-background {flex-grow: 1; background-color: white;}.ved-handle {align-items: flex-end; border-radius: " +
            V(d) + "px " + V(d) + "px 0 0; background: white; display: flex; height: " + V(30) + "px; justify-content: center; cursor: grab;}.ved-handle-icon {" + (e ? "background: #dadce0; width: 50px;" : "background: #747775; opacity: 0.4; width: 32px;") + 'border-radius: 2px; height: 4px; margin-bottom: 8px;}.ved-hidden {visibility: hidden;}</style><div id="ved-drawer-container" class="ved-hidden" aria-modal="true" role="dialog" tabindex="0"><div id="ved-modal-background"></div><div id="ved-ui-revealer"><div id="ved-over-scroll-block" class="ved-hidden"><div id=\'ved-over-scroll-handle-spacer\'></div><div id=\'ved-over-scroll-background\'></div></div><div id="ved-scroller-container"><div id="ved-scroller"><div id="ved-scrolled-stack"><div id="ved-fully-closed-anchor" class="ved-snap-point-top"></div><div id="ved-partially-extended-anchor" class="ved-snap-point-top"></div><div id="ved-visible-scrolled-items"><div id="ved-moving-handle-holder" class="ved-snap-point-top">' +
            bw("ved-moving-handle") + '</div><div id="ved-content-background"><div id="ved-content-sizer" class="ved-snap-point-bottom"><div id="ved-content-container"></div></div></div></div></div></div></div><div id="ved-fixed-handle-holder" class="ved-hidden">' + bw("ved-fixed-handle") + "</div></div></div>";
        return pq(a)
    }

    function bw(a) {
        return pq('<div class="ved-handle" id="' + tq(a) + '"><div class="ved-handle-icon"></div></div>')
    };

    function cw(a) {
        return Pn(a.j).map(b => b ? dw(a, b) : 0)
    }

    function dw(a, b) {
        switch (a.direction) {
            case 0:
                return ew(-b.ih);
            case 1:
                return ew(-b.hh);
            default:
                throw Error(`Unhandled direction: ${a.direction}`);
        }
    }

    function fw(a) {
        return Rn(a.j).map(b => dw(a, b))
    }
    var gw = class {
        constructor(a) {
            this.j = a;
            this.direction = 0
        }
    };

    function ew(a) {
        return 0 === a ? 0 : a
    };

    function Y(a) {
        if (a.B) throw Error("Accessing domItems after disposal");
        return a.C
    }

    function hw(a) {
        a.win.setTimeout(() => {
            a.j.M && Y(a).Ka.focus()
        }, 500)
    }

    function iw(a) {
        Y(a).Ka.classList.remove("ved-hidden");
        jn(a.win);
        const {
            qa: b,
            eb: c
        } = Y(a);
        c.getBoundingClientRect().top <= b.getBoundingClientRect().top || jw(a);
        Y(a).Ka.classList.add("ved-revealed");
        a.j.j(!0);
        a.m && (wv(a.m, Y(a).hb.Wa), a.sb && hw(a))
    }

    function kw(a) {
        return Iv(a.win, a.j)
    }

    function lw(a, b) {
        const c = new S(b());
        yn(a.H).listen(() => void c.j(b()));
        return qn(c)
    }

    function mw(a) {
        const {
            qa: b,
            Hd: c
        } = Y(a);
        return lw(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function nw(a) {
        const {
            qa: b,
            Hd: c
        } = Y(a);
        return lw(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top - 1)
    }

    function ow(a) {
        const {
            qa: b
        } = Y(a);
        return lw(a, () => b.scrollTop === b.scrollHeight - b.clientHeight)
    }

    function pw(a) {
        return rn(mw(a), ow(a))
    }

    function qw(a) {
        const {
            qa: b,
            eb: c
        } = Y(a);
        return lw(a, () => c.getBoundingClientRect().top < b.getBoundingClientRect().top - 1)
    }

    function jw(a) {
        Y(a).eb.classList.add("ved-snap-point-top");
        var b = rw(a, Y(a).eb);
        Y(a).qa.scrollTop = b;
        sw(a)
    }

    function tw(a) {
        T(mw(a), !0, () => {
            const {
                gg: b,
                Nc: c
            } = Y(a);
            b.classList.remove("ved-hidden");
            c.classList.add("ved-with-background")
        });
        T(mw(a), !1, () => {
            const {
                gg: b,
                Nc: c
            } = Y(a);
            b.classList.add("ved-hidden");
            c.classList.remove("ved-with-background")
        })
    }

    function uw(a) {
        const b = Wn(a.win, Y(a).ke);
        Zn(b).l(() => void vw(a));
        zl(a, b)
    }

    function ww(a) {
        T(xw(a), !0, () => {
            Y(a).Mg.classList.remove("ved-hidden")
        });
        T(xw(a), !1, () => {
            Y(a).Mg.classList.add("ved-hidden")
        })
    }

    function yw(a) {
        const b = () => void An(a.F),
            {
                Ue: c,
                eb: d,
                mi: e
            } = Y(a);
        c.addEventListener("click", b);
        d.addEventListener("click", b);
        e.addEventListener("click", b);
        un(zw(a), !0, b)
    }

    function Aw(a) {
        un(kw(a), !1, () => {
            jw(a);
            Y(a).Ka.classList.add("ved-hidden")
        })
    }

    function sw(a) {
        tn(a.v, !1, () => void An(a.H))
    }

    function vw(a) {
        if (!a.v.M) {
            var {
                Tf: b,
                ke: c
            } = Y(a), d = c.getBoundingClientRect().height;
            d = Math.max(Bw(a), d);
            a.v.j(!0);
            var e = Cw(a);
            b.style.setProperty("height", `${d}px`);
            e();
            a.win.requestAnimationFrame(() => {
                a.win.requestAnimationFrame(() => {
                    a.v.j(!1)
                })
            })
        }
    }

    function xw(a) {
        const {
            qa: b,
            eb: c
        } = Y(a);
        return lw(a, () => c.getBoundingClientRect().top <= b.getBoundingClientRect().top)
    }

    function zw(a) {
        return pn(a.A.map(zo), Dw(a))
    }

    function Dw(a) {
        return lw(a, () => 0 === Y(a).qa.scrollTop)
    }

    function rw(a, b) {
        ({
            Nc: a
        } = Y(a));
        a = a.getBoundingClientRect().top;
        return b.getBoundingClientRect().top - a
    }

    function Ew(a, b) {
        a.A.j(!0);
        const {
            Nc: c,
            qa: d
        } = Y(a);
        d.scrollTop = 0;
        d.classList.add("ved-scrolling-paused");
        c.style.setProperty("margin-top", `-${b}px`);
        return () => void Fw(a, b)
    }

    function Fw(a, b) {
        const {
            Nc: c,
            qa: d
        } = Y(a);
        c.style.removeProperty("margin-top");
        d.classList.remove("ved-scrolling-paused");
        Y(a).qa.scrollTop = b;
        sw(a);
        a.A.j(!1)
    }

    function Cw(a) {
        const b = Y(a).qa.scrollTop;
        Ew(a, b);
        return () => void Fw(a, b)
    }

    function Bw(a) {
        const {
            qa: b,
            Hd: c,
            Tf: d,
            eb: e
        } = Y(a);
        a = b.getBoundingClientRect();
        const f = c.getBoundingClientRect();
        var g = d.getBoundingClientRect();
        const h = e.getBoundingClientRect();
        g = g.top - f.top;
        return Math.max(a.height - h.height - g, Math.min(a.height, a.bottom - f.top) - g)
    }
    var Gw = class extends P {
        constructor(a, b, c, d, e = !0) {
            super();
            this.win = a;
            this.C = b;
            this.J = c;
            this.m = d;
            this.sb = e;
            this.F = new Bn;
            this.H = new Bn;
            this.j = new S(!1);
            this.A = new S(!1);
            this.v = new S(!1)
        }
        K() {
            jw(this);
            tw(this);
            uw(this);
            ww(this);
            yw(this);
            Aw(this);
            Y(this).qa.addEventListener("scroll", () => void sw(this))
        }
        l() {
            const a = this.C.hb.Wa,
                b = a.parentNode;
            b && b.removeChild(a);
            this.m ? .Ud();
            super.l()
        }
    };

    function Hw(a, b, c) {
        const d = Hv(a, c.ue),
            e = d.shadowRoot;
        e.appendChild(ee(new Rd(a.document), kq(aw({
            Ti: 100 * c.af,
            ni: 100 * c.Ee,
            zIndex: c.zIndex,
            ee: .5,
            Ja: c.Ja || !1
        }))));
        const f = Ev("ved-drawer-container", e);
        c.Be ? .l(g => {
            f.setAttribute("aria-label", g)
        });
        c = Ev("ved-content-container", e);
        c.appendChild(b);
        jn(a);
        return {
            Ka: f,
            Ue: Ev("ved-modal-background", e),
            bh: Ev("ved-ui-revealer", e),
            qa: Ev("ved-scroller", e),
            Nc: Ev("ved-scrolled-stack", e),
            mi: Ev("ved-fully-closed-anchor", e),
            eb: Ev("ved-partially-extended-anchor", e),
            Tf: Ev("ved-content-sizer",
                e),
            ke: c,
            Tn: Ev("ved-moving-handle", e),
            Hd: Ev("ved-moving-handle-holder", e),
            li: Ev("ved-fixed-handle", e),
            gg: Ev("ved-fixed-handle-holder", e),
            Mg: Ev("ved-over-scroll-block", e),
            hb: d
        }
    };

    function Iw(a, b, c) {
        var d = Au(new ov(a), c.zIndex - 1);
        b = Hw(a, b, c);
        const e = c.se ? null : new xv(a);
        var f = b.li;
        f = new Sn(new Jn(a, f), new Gn(f));
        var g = f.j;
        g.A.addEventListener("mousedown", g.G);
        g.v.addEventListener("mouseup", g.B);
        g.v.addEventListener("mousemove", g.C, {
            passive: !1
        });
        g = f.l;
        g.l.addEventListener("touchstart", g.C);
        g.l.addEventListener("touchend", g.A);
        g.l.addEventListener("touchmove", g.B, {
            passive: !1
        });
        b = new Gw(a, b, new gw(f), e, c.sb);
        b.K();
        d = new Jw(a, b, yv(a), d);
        zl(d, b);
        d.K();
        c.qb && ((a = Pv(a)) ? Kw(d, a, c.Ve) :
            c.Ve ? .(Error("Unable to create closeNavigator")));
        return d
    }

    function Kw(a, b, c) {
        un(a.j.j, !0, () => {
            try {
                Rv(b)
            } catch (d) {
                c ? .(d)
            }
        });
        un(a.j.j, !1, () => {
            try {
                b.j && (b.j(), b.j = null)
            } catch (d) {
                c ? .(d)
            }
        });
        yn(b.m).listen(() => void a.collapse());
        zl(a, b)
    }

    function Lw(a) {
        un(pn(pw(a.j), qw(a.j)), !0, () => {
            Y(a.j).eb.classList.remove("ved-snap-point-top")
        });
        T(nw(a.j), !0, () => {
            Y(a.j).qa.classList.add("ved-no-snap")
        });
        T(nw(a.j), !1, () => {
            Y(a.j).qa.classList.remove("ved-no-snap")
        });
        un(nw(a.j), !1, () => {
            var b = a.j;
            var c = Y(b).Hd;
            c = Ew(b, rw(b, c));
            b.win.setTimeout(c, 100)
        })
    }

    function Mw(a) {
        const b = a.j.J;
        cw(b).listen(c => {
            c = -c;
            if (0 < c) {
                const {
                    bh: d
                } = Y(a.j);
                d.classList.add("ved-no-animation");
                d.style.setProperty("transform", `translateY(${c}px)`)
            } else({
                bh: c
            } = Y(a.j)), c.classList.remove("ved-no-animation"), c.style.removeProperty("transform")
        });
        fw(b).listen(c => {
            30 < -c && a.collapse()
        })
    }
    var Jw = class extends P {
        constructor(a, b, c, d) {
            super();
            this.win = a;
            this.j = b;
            un(kw(b), !0, () => {
                Av(c);
                pv(d)
            });
            un(kw(b), !1, () => {
                Cv(c);
                qv(d)
            })
        }
        show({
            Yf: a = !1
        } = {}) {
            if (this.B) throw Error("Cannot show drawer after disposal");
            iw(this.j);
            a && un(kw(this.j), !1, () => {
                this.ma()
            })
        }
        collapse() {
            var a = this.j;
            Y(a).Ka.classList.remove("ved-revealed");
            a.j.j(!1);
            a.m ? .Ud()
        }
        isVisible() {
            return kw(this.j)
        }
        K() {
            yn(this.j.F).listen(() => {
                this.collapse()
            });
            Lw(this);
            Mw(this);
            jn(this.win)
        }
    };
    var Nw = class {
        constructor(a, b, c) {
            this.position = a;
            this.Ab = b;
            this.He = c
        }
    };

    function Ow(a, b) {
        this.start = a < b ? a : b;
        this.end = a < b ? b : a
    };

    function Pw(a, b, c) {
        var d = Nm(a);
        d = new Nw(b.dc.Fg(b.nb), b.Ab + 2 * b.nb, Math.min(d, b.Cd) - b.dc.md() + 2 * b.nb);
        d = d.position.Uf(a, d.Ab, d.He);
        var e = Jm(a),
            f = Nm(a);
        c = Qw(a, new ki(Fd(d.top, 0, f - 1), Fd(d.right, 0, e - 1), Fd(d.bottom, 0, f - 1), Fd(d.left, 0, e - 1)), c);
        f = Rw(c);
        let g = d.top;
        e = [];
        for (let h = 0; h < f.length; h++) f[h].start > g && e.push(new Ow(g, f[h].start)), g = f[h].end;
        g < d.bottom && e.push(new Ow(g, d.bottom));
        a = Nm(a);
        d = [];
        for (f = e.length - 1; 0 <= f; f--) d.push(new Ow(a - e[f].end, a - e[f].start));
        a: {
            for (const h of d)
                if (a = h.start + b.nb, a >
                    b.dc.md() + b.Pe ? a = null : (d = Math.min(h.end - b.nb, b.Cd) - a, a = d < b.Se ? null : {
                        position: b.dc.gh(a),
                        Gc: d
                    }), a) {
                    b = a;
                    break a
                }
            b = null
        }
        return {
            ge: b,
            Mn: c
        }
    }

    function Qw(a, b, c) {
        const d = uu(new wu(a), b);
        c.forEach(e => void d.delete(e));
        return d
    }

    function Rw(a) {
        return Array.from(a).map(Sw).sort((b, c) => b.start - c.start)
    }

    function Sw(a) {
        a = a.getBoundingClientRect();
        return new Ow(a.top, a.bottom)
    };

    function Tw({
        ba: a,
        ua: b
    }) {
        return new Uw(a, b)
    }
    var Uw = class {
        constructor(a, b) {
            this.ba = a;
            this.ua = b
        }
        Fg(a) {
            return new Uw(this.ba - a, this.ua - a)
        }
        Uf(a, b, c) {
            a = Nm(a) - this.ba - c;
            return new ki(a, this.ua + b, a + c, this.ua)
        }
        Hf(a) {
            a.bottom = `${this.ba}px`;
            a.left = `${this.ua}px`;
            a.right = ""
        }
        ig() {
            return 0
        }
        md() {
            return this.ba
        }
        gh(a) {
            return new Uw(a, this.ua)
        }
    };

    function Vw({
        ba: a,
        Ea: b
    }) {
        return new Ww(a, b)
    }
    var Ww = class {
        constructor(a, b) {
            this.ba = a;
            this.Ea = b
        }
        Fg(a) {
            return new Ww(this.ba - a, this.Ea - a)
        }
        Uf(a, b, c) {
            var d = Jm(a);
            a = Nm(a) - this.ba - c;
            d = d - this.Ea - b;
            return new ki(a, d + b, a + c, d)
        }
        Hf(a) {
            a.bottom = `${this.ba}px`;
            a.right = `${this.Ea}px`;
            a.left = ""
        }
        ig() {
            return 1
        }
        md() {
            return this.ba
        }
        gh(a) {
            return new Ww(a, this.Ea)
        }
    };

    function Xw(a) {
        const b = a.ei,
            c = a.Nh,
            d = a.Hh,
            e = a.pj,
            f = a.Ih;
        a = a.Gh;
        return pq('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500,700" rel="stylesheet"><style>.ft-styless-button {border: none; background: none; user-select: none; cursor: pointer; border-radius: ' + V(16) + "px;}.ft-container {position: fixed;}.ft-menu {position: absolute; bottom: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); min-height: " +
            V(d) + "px;}.ft-menu:not(.ft-multiple-buttons *) {transition: padding 0.25s 0.25s, margin 0.25s 0.25s, border-radius 0.25s 0.25s, background-color 0s 0.5s; padding: 0; margin: " + V(a) + "px; border-radius: " + V(16) + "px; background-color: rgba(255, 255, 255, 0);}.ft-multiple-buttons .ft-menu {transition: margin 0.25s, padding 0.25s, border-radius 0.25s 0.25s, background-color 0s; padding: " + V(a) + "px; margin: 0; border-radius: " + V(16 + a) + "px; background-color: rgba(255, 255, 255, 1);}.ft-left-pos .ft-menu {left: 0;}.ft-right-pos .ft-menu {right: 0;}.ft-container.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}.ft-container:not(.ft-hidden) {transition: opacity 0.25s, bottom 0.5s ease; opacity: 1;}.google-symbols {font-size: 26px; color: #3c4043;}.ft-button-holder {display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 0;}.ft-flip-vertically {transform: scaleY(-1);}.ft-expand-toggle {width: " +
            V(d) + "px; height: " + V(d) + "px;}.ft-collapsed .ft-expand-icon {transition: transform 0.25s; transform: rotate(180deg);}.ft-expand-icon:not(.ft-collapsed *) {transition: transform 0.25s; transform: rotate(0deg);}.ft-button {position: relative; height: " + V(d) + "px; margin-bottom: " + V(f) + "px; transform: margin 0.25s 0.25s;}.ft-button.ft-last-button {margin-bottom: 0;}.ft-button > button {position: relative; height: " + V(d) + "px; width: " + V(d) + "px; margin: 0; padding: 0; border: none;}.ft-button > button > * {position: relative;}.ft-button .ft-highlighter {position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); height: " +
            V(d - 6) + "px; width: " + V(d - 6) + "px; border-radius: " + V(d / 2) + "px; background-color: #d2e3fc; opacity: 0; transition: opacity 0.25s;}.ft-button.ft-highlighted .ft-highlighter {opacity: 1;}.ft-button-corner-info {display: none;}.ft-button.ft-show-corner-info .ft-button-corner-info {position: absolute; left: -5px; top: 4px; background: #b3261e; border: 1.5px solid #ffffff; box-shadow: 0 1px 2px rgba(60, 64, 67, 0.3), 0 1px 3px 1px rgba(60, 64, 67, 0.15); border-radius: 100px; color: ffffff; font-family: 'Google Sans Text'; font-style: normal; font-weight: 700; font-size: 11px; line-height: 14px; min-width: 16px; height: 16px; display: flex; flex-direction: row; justify-content: center; align-items: center;}.ft-separator {display: block; width: 100%; height: " +
            V(e) + "px;}.ft-separator > span {display: block; width: 28px; margin: 0 auto 10px auto; height: 0; border-bottom: 1px solid #dadce0;}.ft-expand-toggle-container {height: " + V(d) + "px;}.ft-hidden {transition: opacity 0.25s, visibility 0.5s 0s; opacity: 0; visibility: hidden;}:not(.ft-hidden) {transition: opacity 0.25s; opacity: 1;}.ft-collapsed .ft-collapsible, .ft-collapsible.ft-collapsed, .ft-expand-toggle-container.ft-collapsed {transition: opacity 0.25s, margin 0.25s 0.25s, height 0.25s 0.25s, overflow 0.25s 0s, visibility 1s 0s; height: 0; opacity: 0; overflow: hidden; visibility: hidden; margin: 0;}.ft-collapsible:not(.ft-collapsed *):not(.ft-collapsed), .ft-expand-toggle-container:not(.ft-collapsed) {transition: margin 0.25s, height 0.25s, opacity 0.25s 0.25s; opacity: 1;}.ft-symbol-font-load-test {position: fixed; left: -1000px; top: -1000px; font-size: 26px; visibility: hidden;}.ft-reg-bubble {position: absolute; bottom: 0; padding: 10px 10px 0 10px; background: #fff; box-shadow: 0 4px 8px 3px rgba(60, 64, 67, 0.15), 0 1px 3px rgba(60, 64, 67, 0.3); border-radius: " +
            V(16) + "px; max-width: calc(90vw - " + V(2 * d) + "px); width: 300px; height: 200px;}.ft-left-pos .ft-reg-bubble {left: " + V(d + 10 + a) + "px;}.ft-right-pos .ft-reg-bubble {right: " + V(d + 10 + a) + "px;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-collapsed {transition: width 0.25s ease-in 0.25s, height 0.25s ease-in 0.25s, opacity 0.05s linear 0.45s, overflow 0s 0.25s, visibility 0s 0.5s; width: 0; overflow: hidden; opacity: 0; visibility: hidden;}.ft-collapsed .ft-reg-bubble, .ft-reg-bubble.ft-no-messages {height: 0 !important;}.ft-reg-bubble:not(.ft-collapsed *):not(.ft-collapsed) {transition: width 0.25s ease-out, height 0.25s ease-out, opacity 0.05s linear;}.ft-reg-bubble-content {display: flex; flex-direction: row; max-width: calc(90vw - " +
            V(2 * d) + 'px); width: 300px;}.ft-collapsed .ft-reg-bubble-content {transition: opacity 0.25s; opacity: 0;}.ft-reg-bubble-content:not(.ft-collapsed *) {transition: opacity 0.25s 0.25s; opacity: 1;}.ft-reg-message-holder {flex-grow: 1; display: flex; flex-direction: column; height: auto;}.ft-reg-controls {flex-grow: 0; padding-left: 5px;}.ft-reg-bubble-close-icon {font-size: 16px;}.ft-reg-message {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; padding-bottom: 5px; margin-bottom: 5px; border-bottom: 1px solid #dadce0;}.ft-reg-message:last-of-type {border-bottom: none;}.ft-reg-message-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ft-display-none {display: none;}</style><toolbar id="ft-floating-toolbar" class="ft-container ft-hidden"><div class="ft-menu"><div class="ft-button-holder"></div><div class="ft-separator ft-collapsible ft-collapsed"><span></span></div><div class="ft-bottom-button-holder"></div><div class="ft-expand-toggle-container"><button class="ft-expand-toggle ft-styless-button" aria-controls="ft-floating-toolbar" aria-label="' +
            tq(b) + '"><span class="google-symbols ft-expand-icon" aria-hidden="true">expand_more</span></button></div></div><div id="ft-reg-bubble" class="ft-reg-bubble ft-collapsed ft-no-messages"><div class="ft-reg-bubble-content"><div class="ft-reg-message-holder"></div><div class="ft-reg-controls"><button class="ft-reg-bubble-close ft-styless-button" aria-controls="ft-reg-bubble" aria-label="' + tq(c) + '"><span class="google-symbols ft-reg-bubble-close-icon" aria-hidden="true">close</span></button></div></div></div></toolbar><span inert class="ft-symbol-font-load-test"><span class="ft-symbol-reference google-symbols" aria-hidden="true">keyboard_double_arrow_right</span><span class="ft-text-reference" aria-hidden="true">keyboard_double_arrow_right</span></span>')
    }

    function Yw(a) {
        const b = a.googleIconName,
            c = a.backgroundColorCss;
        return pq('<div class="ft-button ft-collapsible ft-collapsed ft-last-button"><button class="ft-styless-button" aria-label="' + tq(a.ariaLabel) + '" style="background-color: ' + tq(V(c)) + '"><span class="ft-highlighter"></span><span class="google-symbols" aria-hidden="true">' + oq(b) + '</span></button><span class="ft-button-corner-info"></span></div>')
    };
    const Zw = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500,700"];

    function $w(a, b) {
        a = new ax(a, b, bx(a, b));
        a.K();
        return a
    }

    function cx() {
        var {
            oc: a
        } = {
            oc: 2
        };
        return 1 < a ? 50 : 120
    }

    function dx(a, b, c) {
        0 === ex(a) && b.classList.remove("ft-collapsed");
        fx(b, c);
        jn(a.win);
        b.classList.remove("ft-collapsed");
        gx(a);
        return () => void hx(a, b, c)
    }

    function ix(a) {
        0 === jx(a.j.pa.Ed).length ? (a.v.M ? .dj(), a.v.j(null), a.j.pa.Ge.j(!1), a.j.pa.tg.j(!1), a.j.pa.Ke.j(!1)) : (a.j.pa.Ge.j(!0), kx(a))
    }

    function lx(a, {
        oh: b = 0,
        Ln: c = 0
    }) {
        b = Math.max(jx(a.j.Fb).length + b, 0);
        c = Math.max(jx(a.j.mb).length + c, 0);
        const d = b + c;
        let e = 50 * d;
        0 < b && 0 < c && (e += 11);
        e += 10 * Math.max(0, d - 1);
        d >= a.m.oc && (e += 60);
        1 < d && (e += 10);
        return e
    }

    function ex(a) {
        const b = a.j.mb;
        return jx(a.j.Fb).length + jx(b).length
    }

    function gx(a) {
        const b = a.j.mb,
            c = a.j.separator;
        0 < jx(a.j.Fb).length && 0 < jx(b).length ? c.classList.remove("ft-collapsed") : c.classList.add("ft-collapsed");
        ex(a) >= a.m.oc ? a.j.sg.j(!0) : a.j.sg.j(!1);
        1 < ex(a) ? a.j.mg.j(!0) : a.j.mg.j(!1);
        0 < ex(a) ? a.j.isVisible.j(!0) : a.j.isVisible.j(!1);
        mx(a);
        nx(a)
    }

    function hx(a, b, c) {
        b.classList.contains("ft-removing") || (b.classList.add("ft-removing"), b.classList.add("ft-collapsed"), gx(a), a.win.setTimeout(() => {
            c.removeChild(b)
        }, 750))
    }

    function mx(a) {
        const b = jx(a.j.Fb).concat(jx(a.j.mb));
        b.forEach(c => {
            c.classList.remove("ft-last-button")
        });
        ex(a) >= a.m.oc || b[b.length - 1] ? .classList.add("ft-last-button")
    }

    function nx(a) {
        const b = jx(a.j.Fb).concat(jx(a.j.mb)).filter(c => !c.classList.contains("ft-reg-button"));
        a.F.j(0 < b.length)
    }

    function ox(a) {
        Wm(a.j.pa.Ed.children, b => {
            const c = a.j.pa.Od;
            hx(a, b, a.j.pa.Ed);
            const d = c.get(b);
            c.delete(b);
            d ? .isDismissed.j(!0)
        });
        ix(a)
    }

    function kx(a) {
        if (!a.v.M) {
            var b = px(a.win, {
                googleIconName: "verified_user",
                ariaLabel: L(a.m.Ma, 2),
                orderingIndex: 0,
                onClick: () => {
                    a.j.pa.tg.j(!a.j.pa.isVisible.M);
                    for (const [, c] of a.j.pa.Od) c.wg = !0;
                    a.j.pa.Ke.j(!1)
                },
                backgroundColorCss: "#fff"
            });
            b.Wc.classList.add("ft-reg-button");
            dx(a, b.Wc, a.j.mb);
            vn(b.Fi, a.j.pa.isVisible);
            a.v.j({
                Pn: b,
                dj: () => void hx(a, b.Wc, a.j.mb)
            })
        }
    }

    function qx(a) {
        var b = a.j.pa.Ke,
            c = b.j;
        a: {
            for ([, d] of a.j.pa.Od)
                if (a = d, a.showUnlessUserInControl && !a.wg) {
                    var d = !0;
                    break a
                }
            d = !1
        }
        c.call(b, d)
    }

    function rx(a) {
        a.j.pa.Mh.listen(() => {
            ox(a)
        })
    }
    var ax = class extends P {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.m = b;
            this.j = c;
            this.v = new S(null);
            this.F = new S(!1)
        }
        addButton(a) {
            a = px(this.win, a);
            return dx(this, a.Wc, this.j.Fb)
        }
        addRegulatoryMessage(a) {
            const b = this.j.pa.Ed,
                c = sx(this.win, a);
            fx(c.zg, b);
            this.j.pa.Od.set(c.zg, c);
            ix(this);
            return {
                showUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !0;
                    qx(this)
                },
                hideUnlessUserInControl: () => {
                    c.showUnlessUserInControl = !1;
                    qx(this)
                },
                isDismissed: xn(c.isDismissed)
            }
        }
        H() {
            return qn(this.v.map(a => null != a))
        }
        C() {
            return qn(this.F)
        }
        A() {
            return [this.j.container]
        }
        l() {
            const a =
                this.j.hb.Wa;
            a.parentNode ? .removeChild(a);
            super.l()
        }
        K() {
            go(this.win, Zw);
            vn(this.j.wj, this.m.Hc);
            this.win.document.body.appendChild(this.j.hb.Wa);
            rx(this)
        }
    };

    function bx(a, b) {
        const c = ou(a),
            d = c.shadowRoot;
        d.appendChild(ee(new Rd(a.document), kq(Xw({
            ei: L(b.Ma, 1),
            Nh: L(b.Ma, 3),
            Hh: 50,
            pj: 11,
            Ih: 10,
            Gh: 5
        }))));
        const e = Gv("ft-container", d),
            f = Gv("ft-expand-toggle", d),
            g = Gv("ft-expand-toggle-container", d),
            h = new S(null);
        h.l(p => {
            e.style.zIndex = String(p ? ? 2147483647)
        });
        const k = new S(!0);
        T(k, !0, () => {
            e.classList.remove("ft-collapsed");
            f.setAttribute("aria-expanded", "true")
        });
        T(k, !1, () => {
            e.classList.add("ft-collapsed");
            f.setAttribute("aria-expanded", "false")
        });
        f.addEventListener("click",
            () => {
                k.j(!k.M)
            });
        const l = new S(!1);
        T(l, !0, () => {
            g.classList.remove("ft-collapsed");
            e.classList.add("ft-toolbar-collapsible")
        });
        T(l, !1, () => {
            g.classList.add("ft-collapsed");
            e.classList.remove("ft-toolbar-collapsible");
            k.j(!0)
        });
        const m = new S(!1);
        T(m, !0, () => {
            e.classList.add("ft-multiple-buttons")
        });
        T(m, !1, () => {
            e.classList.remove("ft-multiple-buttons")
        });
        b.position.l(p => {
            if (p) {
                p.Hf(e.style);
                p = p.ig();
                switch (p) {
                    case 0:
                        e.classList.add("ft-left-pos");
                        e.classList.remove("ft-right-pos");
                        break;
                    case 1:
                        e.classList.add("ft-right-pos");
                        e.classList.remove("ft-left-pos");
                        break;
                    default:
                        throw Error(`Unknown HorizontalAnchoring: ${p}`);
                }
                jn(a)
            }
        });
        const n = new S(!1);
        b = pn(tx(a, d), n, b.position.map(p => null !== p));
        T(b, !0, () => {
            e.classList.remove("ft-hidden")
        });
        T(b, !1, () => {
            e.classList.add("ft-hidden")
        });
        b = ux(a, Gv("ft-reg-bubble", d));
        return {
            container: e,
            Fb: Gv("ft-button-holder", d),
            mb: Gv("ft-bottom-button-holder", d),
            separator: Gv("ft-separator", d),
            hb: c,
            wj: h,
            Sn: k,
            sg: l,
            mg: m,
            isVisible: n,
            pa: b
        }
    }

    function ux(a, b) {
        const c = new S(!1),
            d = new S(!1),
            e = rn(c, d);
        T(e, !0, () => {
            b.classList.remove("ft-collapsed")
        });
        T(e, !1, () => {
            b.classList.add("ft-collapsed")
        });
        const f = new S(!1);
        T(f, !0, () => {
            b.classList.remove("ft-no-messages")
        });
        T(f, !1, () => {
            b.classList.add("ft-no-messages")
        });
        const g = Gv("ft-reg-bubble-close", b),
            h = new Bn;
        g.addEventListener("click", () => {
            An(h)
        });
        const k = Gv("ft-reg-message-holder", b);
        Zn(Wn(a, k)).l(() => {
            b.style.height = `${k.offsetHeight}px`
        });
        return {
            Ed: k,
            tg: c,
            Ke: d,
            isVisible: e,
            Ge: f,
            Od: new Map,
            Mh: yn(h)
        }
    }

    function px(a, b) {
        const c = ee(new Rd(a.document), kq(Yw({
            googleIconName: b.googleIconName,
            ariaLabel: b.ariaLabel,
            backgroundColorCss: b.backgroundColorCss || "#e2eaf6"
        })));
        if (void 0 !== b.cornerNumber) {
            const d = Fd(Math.round(b.cornerNumber), 0, 99);
            Gv("ft-button-corner-info", c).appendChild(a.document.createTextNode(String(d)));
            c.classList.add("ft-show-corner-info")
        }
        c.orderingIndex = b.orderingIndex;
        b.onClick && Fv("BUTTON", c).addEventListener("click", b.onClick);
        a = new S(!1);
        T(a, !0, () => {
            c.classList.add("ft-highlighted")
        });
        T(a, !1, () => {
            c.classList.remove("ft-highlighted")
        });
        return {
            Wc: c,
            Fi: a
        }
    }

    function sx(a, b) {
        a = new Rd(a.document);
        var c = pq('<div class="ft-reg-message"><button class="ft-reg-message-button"></button><div class="ft-reg-message-info"></div></div>');
        a = ee(a, kq(c));
        c = Gv("ft-reg-message-button", a);
        b.regulatoryMessage.actionButton ? (c.appendChild(b.regulatoryMessage.actionButton.buttonText), c.addEventListener("click", b.regulatoryMessage.actionButton.onClick)) : c.classList.add("ft-display-none");
        c = Gv("ft-reg-message-info", a);
        b.regulatoryMessage.informationText ? c.appendChild(b.regulatoryMessage.informationText) :
            c.classList.add("ft-display-none");
        a.orderingIndex = b.orderingIndex;
        return {
            zg: a,
            showUnlessUserInControl: !1,
            wg: !1,
            isDismissed: new S(!1)
        }
    }

    function fx(a, b) {
        a: {
            var c = Array.from(b.children);
            for (let d = 0; d < c.length; ++d)
                if (c[d].orderingIndex >= a.orderingIndex) {
                    c = d;
                    break a
                }
            c = c.length
        }
        b.insertBefore(a, b.childNodes[c] || null)
    }

    function jx(a) {
        return Array.from(a.children).filter(b => !b.classList.contains("ft-removing"))
    }

    function tx(a, b) {
        const c = new S(!1),
            d = Gv("ft-symbol-font-load-test", b);
        b = Gv("ft-symbol-reference", d);
        const e = Gv("ft-text-reference", d),
            f = Wn(a, b);
        tn(Zn(f).map(g => 0 < g.width && g.width < e.offsetWidth / 2), !0, () => {
            c.j(!0);
            d.parentNode ? .removeChild(d);
            f.ma()
        });
        return c
    };

    function vx(a) {
        const b = new Bn,
            c = Mn(a, 2500, () => void An(b));
        return new wx(a, () => void xx(a, () => void c()), yn(b))
    }

    function yx(a) {
        const b = new MutationObserver(() => {
            a.j()
        });
        b.observe(a.win.document.documentElement, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            attributeFilter: ["class", "style"]
        });
        Al(a, () => void b.disconnect())
    }

    function zx(a) {
        a.win.addEventListener("resize", a.j);
        Al(a, () => void a.win.removeEventListener("resize", a.j))
    }
    var wx = class extends P {
        constructor(a, b, c) {
            super();
            this.win = a;
            this.j = b;
            this.v = c;
            this.m = !1
        }
    };

    function xx(a, b) {
        b();
        a.setTimeout(b, 1500)
    };

    function Ax(a) {
        return a.j[a.j.length - 1]
    }

    function Bx(a, b) {
        Za(a.j, c => c === b);
        a.l.delete(b)
    }
    var Dx = class {
        constructor() {
            this.m = Cx;
            this.j = [];
            this.l = new Set
        }
        add(a) {
            if (this.l.has(a)) return !1;
            const b = db(this.j, a, this.m);
            this.j.splice(0 <= b ? b : -b - 1, 0, a);
            this.l.add(a);
            return !0
        }
        first() {
            return this.j[0]
        }
        has(a) {
            return this.l.has(a)
        }
        clear() {
            this.l.clear();
            return this.j.splice(0, this.j.length)
        }
        size() {
            return this.j.length
        }
    };

    function Ex(a) {
        var b = a.Gc.M;
        let c;
        for (; a.m.Qh() > b && (c = a.l.first());) {
            var d = a,
                e = c;
            Fx(d, e);
            d.j.add(e)
        }
        for (;
            (d = Ax(a.j)) && a.m.ti() <= b;) Gx(a, d);
        for (;
            (d = Ax(a.j)) && (c = a.l.first()) && d.priority > c.priority;) b = a, e = c, Fx(b, e), b.j.add(e), Gx(a, d)
    }

    function Gx(a, b) {
        Bx(a.j, b);
        a.l.add(b) && (b.rf = a.m.addButton(b.buttonSpec));
        b.isInToolbar.j(!0)
    }

    function Fx(a, b) {
        b.rf && b.rf();
        b.rf = void 0;
        Bx(a.l, b);
        b.isInToolbar.j(!1)
    }
    var Hx = class {
        constructor(a, b) {
            this.Gc = a;
            this.m = b;
            this.j = new Dx;
            this.l = new Dx;
            this.v = 0;
            this.Gc.listen(() => void Ex(this))
        }
        addButton(a) {
            const b = {
                buttonSpec: a.buttonSpec,
                priority: a.priority,
                xf: this.v++,
                isInToolbar: new S(!1)
            };
            this.j.add(b);
            Ex(this);
            return {
                isInToolbar: xn(qn(b.isInToolbar)),
                removeCallback: () => {
                    Fx(this, b);
                    Bx(this.j, b);
                    Ex(this)
                }
            }
        }
    };

    function Cx(a, b) {
        return a.priority === b.priority ? b.xf - a.xf : a.priority - b.priority
    };

    function Ix(a) {
        a = new Jx(a);
        a.K();
        return a
    }

    function Kx(a) {
        if (!Dv(a.win)) {
            if (a.m.M) {
                const b = Sm(a.win);
                if (b > a.j + 100 || b < a.j - 100) a.m.j(!1), a.j = Lm(a.win)
            }
            a.v && a.win.clearTimeout(a.v);
            a.v = a.win.setTimeout(() => void Lx(a), 200)
        }
    }

    function Lx(a) {
        if (!Dv(a.win)) {
            var b = Lm(a.win);
            a.j && a.j > b && (a.j = b);
            b = Sm(a.win);
            b >= a.j - 100 && (a.j = Math.max(a.j, b), a.m.j(!0))
        }
    }
    var Jx = class extends P {
        constructor(a) {
            super();
            this.win = a;
            this.m = new S(!1);
            this.j = 0;
            this.v = null;
            this.A = () => void Kx(this)
        }
        K() {
            this.win.addEventListener("scroll", this.A);
            this.j = Lm(this.win);
            Lx(this)
        }
        l() {
            this.win.removeEventListener("scroll", this.A);
            this.m.j(!1);
            super.l()
        }
    };

    function Mx(a) {
        if (!a.j) {
            const b = Ix(a.win);
            a.j = qn(b.m);
            zl(a, b)
        }
        return a.j
    }

    function Nx(a, b) {
        const c = Mx(a),
            d = a.m.addRegulatoryMessage(b.messageSpec),
            e = T(c, !0, () => void d.showUnlessUserInControl()),
            f = T(c, !1, () => void d.hideUnlessUserInControl());
        T(nn(d.isDismissed), !0, () => {
            e();
            f()
        })
    }
    var Ox = class extends P {
        constructor(a, b) {
            super();
            this.win = a;
            this.m = b;
            this.j = null
        }
        addRegulatoryMessage(a) {
            tn(Mx(this), !0, () => void Nx(this, a))
        }
    };

    function Px(a, b) {
        a.googFloatingToolbarManager || (a.googFloatingToolbarManager = new Qx(a, b));
        return a.googFloatingToolbarManager
    }

    function Rx(a) {
        a.j || (a.j = Sx(a.win, a.Lb, a.Hc), zl(a, a.j.Mb), zl(a, a.j.Rg), Tx(a), Ux(a, a.j.Mb));
        return a.j
    }

    function Vx(a) {
        var b = [];
        a.j ? .Mb ? .C().A() ? (b.push(() => Wx(a)), b.push(() => Xx(a))) : (b.push(() => Xx(a)), b.push(() => Wx(a)));
        a.j ? .Mb ? .H() ? .A() && b.push(() => {
            const c = Nm(a.win);
            return {
                position: Tw({
                    ba: Math.floor(c / 3),
                    ua: 10
                }),
                Gc: 0
            }
        });
        for (const c of b)
            if (b = c()) return b;
        return null
    }

    function Tx(a) {
        null === a.Hc.M && a.j ? .position.j(Vx(a))
    }

    function Ux(a, b) {
        const c = vx(a.win);
        c.m || (yx(c), zx(c), c.m = !0);
        c.v.listen(() => void Tx(a));
        zl(a, c);
        b.H().listen(() => void Tx(a));
        b.C().listen(() => void Tx(a));
        a.Hc.listen(() => void Tx(a))
    }

    function Wx(a) {
        var b = a.win;
        const c = Nm(a.win);
        return Pw(b, {
            dc: Vw({
                ba: 50,
                Ea: 10
            }),
            Pe: Math.floor(c / 3),
            Ab: 60,
            Se: cx(),
            Cd: Math.floor(c / 2),
            nb: 20
        }, [...(a.j ? .Mb.A() ? ? []), a.win.document.body]).ge
    }

    function Xx(a) {
        var b = a.win;
        const c = Nm(a.win);
        return Pw(b, {
            dc: Tw({
                ba: 50,
                ua: 10
            }),
            Pe: Math.floor(c / 3),
            Ab: 60,
            Se: cx(),
            Cd: Math.floor(c / 2),
            nb: 40
        }, [...(a.j ? .Mb.A() ? ? []), a.win.document.body]).ge
    }
    class Qx extends P {
        constructor(a, b) {
            super();
            this.win = a;
            this.Lb = b;
            this.j = null;
            this.Hc = Yx(this.win, this)
        }
        addButton(a) {
            return Rx(this).Oi.addButton(a)
        }
        addRegulatoryMessage(a) {
            Rx(this).Rg.addRegulatoryMessage(a)
        }
    }

    function Sx(a, b, c) {
        const d = new S(null),
            e = $w(a, {
                oc: 2,
                position: d.map(f => f ? .position ? ? null),
                Ma: b,
                Hc: c
            });
        b = new Hx(d.map(f => f ? .Gc || 0), {
            addButton: f => e.addButton(f),
            Qh: () => lx(e, {}),
            ti: () => lx(e, {
                oh: 1
            })
        });
        a = new Ox(a, {
            addRegulatoryMessage: f => e.addRegulatoryMessage(f)
        });
        return {
            Mb: e,
            position: d,
            Oi: b,
            Rg: a
        }
    }

    function Yx(a, b) {
        const c = new ov(a),
            d = new S(null),
            e = f => void d.j(f);
        Al(b, () => {
            Eu(c, e)
        });
        c.j.maxZIndexListeners.push(e);
        d.j(Du(c));
        return d
    };

    function Zx(a) {
        return Px(a.win, a.Ma)
    }
    var $x = class {
        constructor(a, b) {
            this.win = a;
            this.Ma = b
        }
    };

    function ay(a) {
        if (a.H) {
            var b = Zx(new $x(a.j, a.H)).addButton({
                buttonSpec: {
                    googleIconName: "search",
                    ariaLabel: a.Ha,
                    orderingIndex: 0,
                    onClick: () => {
                        by(a)
                    }
                },
                priority: 0
            });
            tn(nn(b.isInToolbar), !0, () => {
                cy(a)
            });
            a.j.setTimeout(() => {
                b.isInToolbar.getValue() || cq(a.m, "pfmsb")
            }, 5E3);
            dy(a)
        } else ey(a)
    }

    function ey(a) {
        var b = fy(a);
        b = tu(new wu(a.j), b);
        b ? .className.startsWith("adsbygoogle") ? cq(a.m, "pfeaa") : b ? cq(a.m, "pfeofe") : (a.aa.appendChild(a.B.Wa), a.B.shadowRoot.appendChild(Yd(document, (() => {
            if (a.v) {
                var c = gy(a),
                    d = {
                        backgroundColor: c.backgroundColor,
                        Pb: c.Pb,
                        offsetTop: c.Ig,
                        We: c.Hg,
                        zIndex: 2147483643
                    },
                    e = d.Pi,
                    f = d.We;
                c = d.backgroundColor;
                var g = d.Pb;
                e = void 0 === e ? 16 : e;
                var h = d.offsetTop;
                f = void 0 === f ? 2 : f;
                g = void 0 === g ? "white" : g;
                d = d.zIndex;
                c = "<style>.autoprose-search-button {background: " + V(void 0 === c ? "#000" :
                    c) + "; border-radius: ";
                c += V(24) + "px;" + (h ? "top: " + V(h) + "%;" : "bottom: " + V(f) + "%;") + "border-width: 0; box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; height: " + V(48) + "px; position: fixed; right: " + V(e) + "px; width: 48px; z-index: " + V(d) + ';}.autoprose-search-icon {position: relative;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + Lq(g) + "</div></button>";
                c = pq(c);
                return kq(c)
            }
            c = gy(a);
            d = {
                nj: c.mj,
                backgroundColor: c.backgroundColor,
                Pb: c.Pb,
                offsetTop: c.Ig,
                We: c.Hg,
                zIndex: 2147483643
            };
            e = d.Pi;
            f = d.We;
            c = d.backgroundColor;
            var k = d.Pb;
            e = void 0 === e ? 16 : e;
            h = d.offsetTop;
            f = void 0 === f ? 2 : f;
            g = d.nj;
            k = void 0 === k ? "white" : k;
            d = d.zIndex;
            c = "<style>.autoprose-search-button {align-items: center; background: " + V(void 0 === c ? "#000" : c) + "; border-radius: ";
            c += V(24) + "px; border-width: 0;" + (h ? "top: " + V(h) + "%;" : "bottom: " + V(f) + "%;") + "box-shadow: 0 0 10px rgba(0, 0, 0, 0.35); cursor: pointer; display: flex; height: " + V(48) + "px; line-height: 1; padding: 0 20px; position: fixed; right: " + V(e) +
                "px; z-index: " + V(d) + ";}.autoprose-search-text {color: " + V(k) + '; font-family: Google Sans, Roboto, sans-serif; font-size: 16px; margin: 10px; user-select: none;}</style><button class="autoprose-search-button"><div class="autoprose-search-icon">' + Lq(k) + '</div><div class="autoprose-search-text">' + oq(g) + "</div></button>";
            c = pq(c);
            return kq(c)
        })())), (b = hy(a)) ? (cy(a), Bb(b, "click", () => {
            by(a)
        })) : cq(a.m, "pfmsb"), dy(a))
    }

    function by(a) {
        a.J || (bu(1139, () => a.G.K(), a.j), a.J = !0);
        aq(a.m, "click", {});
        iy(a)
    }

    function cy(a) {
        aq(a.m, "place", {
            sts: "ok"
        });
        jy(a)
    }

    function dy(a) {
        a.v && un(a.C.isVisible(), !1, () => {
            a.l.contentDocument.activeElement.blur()
        })
    }

    function fy(a) {
        let b;
        b = a.v ? 50 : 150;
        var c = a.j.innerHeight;
        const d = a.F ? 20 : 2;
        c = 2 === a.A ? .j() ? (100 - d) / 100 * c : .2 * c;
        return {
            Hi: a.j.innerWidth - 16 - b,
            sj: c,
            width: b,
            height: 50
        }
    }

    function gy(a) {
        const b = a.A ? .m() || void 0,
            c = a.A ? .v() || void 0;
        let d, e;
        2 === a.A ? .j() ? e = a.F ? 20 : 2 : d = 20;
        return {
            backgroundColor: b,
            Pb: c,
            Ig: d,
            Hg: e,
            mj: a.Ca
        }
    }

    function hy(a) {
        const b = a.B.shadowRoot.querySelectorAll(".autoprose-search-button")[0];
        return b ? b : a.B.shadowRoot.querySelectorAll(".autoprose-searchbox")[0]
    }

    function jy(a) {
        Bb(a.j.top, "message", b => {
            b.data && "init" === b.data.action && "AutoProseVariant" === b.data.adChannel && (b = ky(a), Vq(a.G, b), ly(a), my(a))
        })
    }

    function iy(a) {
        ly(a);
        a.C.show();
        my(a)
    }

    function ky(a) {
        if (a = a.l.contentDocument ? .getElementsByTagName("input")[0]) return a;
        console.warn("searchbox missing");
        return null
    }

    function ly(a) {
        const b = new ResizeObserver(async d => {
                a.l.height = 0;
                await new Promise(e => a.j.requestAnimationFrame(e));
                a.l.height = d[0].target.scrollHeight
            }),
            c = () => {
                const d = a.l.contentDocument ? .documentElement;
                d ? b.observe(d) : (console.warn("iframe body missing"), setTimeout(c, 1E3))
            };
        c()
    }

    function my(a) {
        a.C.isVisible() && ky(a) ? .focus({
            preventScroll: !0
        })
    }
    var ny = class {
        constructor(a, b, c, d, e, f, g, h) {
            this.j = a;
            this.v = (this.ga = h) ? 500 > this.j.innerWidth : 2 === Ye();
            this.F = !!e ? .G();
            this.Bb = !!e ? .F();
            this.J = !1;
            this.aa = c;
            this.B = ou(this.j);
            this.m = d;
            c = e ? .B();
            this.wa = c ? .j() || "en";
            this.kb = c ? .m() || "Search results from ${website}";
            this.Ca = c ? .A() || "Search";
            this.Ha = c ? .v() || "Open AutoSearch";
            this.T = b.replace("ca", "partner");
            this.O = new Rd(window.document);
            this.l = this.O.createElement("IFRAME");
            this.G = new Wq(this.l, e ? .A() || "", "auto-prose", this.T, "AutoProseVariant", a.location,
                this.wa, this.kb, f, !!e ? .C(), !0, !0);
            a = this.l;
            this.C = this.v ? Iw(this.j, a, {
                af: .95,
                Ee: .95,
                zIndex: 2147483645,
                qb: !0,
                gd: !0,
                sb: !1,
                Ja: !0
            }) : Sv(this.j, a, {
                yc: "min(65vw, 768px)",
                mc: "",
                xc: !1,
                zIndex: 2147483645,
                qb: !0,
                gd: !0,
                sb: !1,
                Qd: !1,
                Ja: !0
            });
            this.A = this.v ? e ? .v() : e ? .m();
            this.H = g
        }
        K() {
            this.Bb ? ay(this) : ey(this)
        }
    };

    function oy(a, b) {
        for (var c = 0; c < b.length; c++) a.ya(b[c]);
        return a
    }

    function py(a, b) {
        a.m = a.m ? a.m : b;
        return a
    }
    class qy {
        constructor(a) {
            this.C = {};
            this.C.c = a;
            this.A = [];
            this.m = null;
            this.B = [];
            this.F = 0
        }
        ec(a) {
            this.C.wpc = a;
            return this
        }
        ya(a) {
            for (var b = 0; b < this.A.length; b++)
                if (this.A[b] == a) return this;
            this.A.push(a);
            return this
        }
        v(a) {
            var b = yc(this.C);
            0 < this.F && (b.t = this.F);
            b.err = this.A.join();
            b.warn = this.B.join();
            this.m && (b.excp_n = this.m.name, b.excp_m = this.m.message && this.m.message.substring(0, 512), b.excp_s = this.m.stack && Fj(this.m.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function bq(a, b, c) {
        let d = b.Ra;
        b.Ya && X(Ir) && (d = 1, "r" in c && (c.r += "F"));
        0 >= d || (!b.Ua || "pvc" in c || (c.pvc = gf(a.j)), fm(b.Xa, c, d))
    }

    function ry(a, b, c) {
        c = c.v(a.j);
        b.Ua && (c.pvc = gf(a.j));
        0 <= b.Ra && (c.r = b.Ra, bq(a, b, c))
    }
    var sy = class {
        constructor(a) {
            this.j = a
        }
    };

    function ty(a) {
        const b = a.l ? .j() ? .j() || 0,
            c = a.m.document,
            d = c.createElement("div");
        d.classList.add("auto-prose-wrapper");
        c.body.appendChild(d);
        bu(1138, () => (new ny(a.m, a.A, d, a.v, a.l, b, B(a.j, rp, 33) ? .j() ? .l() ? ? null, B(a.j, ip, 25) ? .j() || !1)).K(), a.m)
    }
    async function uy(a) {
        await new Promise(b => {
            setTimeout(() => {
                b(ty(a))
            })
        })
    }
    var vy = class {
        constructor(a, b, c, d) {
            this.m = a;
            this.j = c;
            this.l = B(this.j, op, 31);
            this.v = new dq(a, b, this.l || new op);
            this.A = d
        }
    };

    function wy(a, b) {
        bq(a.l, Xp, { ...b,
            evt: "place",
            vh: Nm(a.win),
            eid: a.j.j() ? .j() || 0,
            hl: a.j.m() ? .j() || ""
        })
    }

    function xy(a, b, c) {
        b = {
            sts: b
        };
        c && (b.excp_n = c.name, b.excp_m = c.message && c.message.substring(0, 512), b.excp_s = c.stack && Fj(c.stack, "") || "");
        wy(a, b)
    }
    var yy = class {
        constructor(a, b, c) {
            this.win = a;
            this.l = b;
            this.j = c
        }
    };
    var zy = class {
        constructor(a) {
            this.j = a
        }
        Na(a) {
            const b = a.document.createElement("div");
            w(b, lu(a));
            w(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            w(c, lu(a));
            w(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var By = (a, b, c) => {
        if (!b || !c) return !1;
        var d = b.parentElement;
        const e = c.parentElement;
        if (!d || !e || d != e) return !1;
        d = 0;
        for (b = b.nextSibling; 10 > d && b;) {
            if (b == c) return !0;
            if (Ay(a, b)) break;
            b = b.nextSibling;
            d++
        }
        return !1
    };
    const Ay = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = Sb(b, "&") ? Ld(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && dn.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (Ay(a, b[c])) return !0
        }
        return !1
    };
    var Cy = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    const Dy = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return Rt(d.document, a, null, null, this.j, b)
        }
        m(a) {
            return Cy(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };
    const Ey = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return Rt(d.document, a, null, null, this.j, b)
        }
        m() {
            return null
        }
    };
    class Fy {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = Cy(a);
            return new No(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    const Gy = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        l() {
            return this.v
        }
        j() {
            return this.m
        }
    };
    const Hy = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < C(this.j, wp, 9).length ? C(this.j, wp, 9)[0] : null,
                f = hu(B(this.j, xp, 3), e);
            if (!e) return null;
            if (e = H(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new Rd(d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Id && Qt(c.style, f.Id);
                d = (new Rd(d)).createElement("INS");
                f.kc && Qt(d.style, f.kc);
                c.appendChild(d);
                f = {
                    ob: c,
                    xa: d
                };
                f.xa.setAttribute("data-ad-type", "text");
                f.xa.setAttribute("data-native-settings-key",
                    e);
                Tt(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        m() {
            var a = 0 < C(this.j, wp, 9).length ? C(this.j, wp, 9)[0] : null;
            if (!a) return null;
            a = C(a, vp, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == H(c, 1) && 0 < parseInt(H(c, 2), 10)) return parseInt(H(c, 2), 10)
            }
            return null
        }
    };
    const Iy = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const k = c.item(h);
                    "width" !== k && "height" !== k && g.push({
                        property: k,
                        value: c.getPropertyValue(k)
                    })
                }
                c = {
                    kc: g
                }
            } else c = {};
            a = Rt(d.document, a, f, e, c, b);
            a.xa.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        m() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        Bc() {
            return this.j
        }
    };
    class Jy {
        constructor(a) {
            this.l = a
        }
        j() {
            return new No([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    const Ky = class {
        constructor(a, b) {
            this.v = a;
            this.m = b
        }
        j() {
            return this.m
        }
        l(a) {
            a = this.v.query(a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Ly(a, b, c) {
        const d = [];
        for (let q = 0; q < a.length; q++) {
            var e = a[q];
            var f = q,
                g = b,
                h = c,
                k = e.ia();
            if (k) {
                var l = du(k);
                if (l) {
                    var m = iu[z(e, 2)],
                        n = void 0 === m ? null : m;
                    if (null === n) e = null;
                    else {
                        m = (m = B(e, xp, 3)) ? Xg(m, 3) : null;
                        l = new Ky(l, n);
                        n = Yg(e, 10, hg).slice(0);
                        null != mh(k, 5) && n.push(1);
                        var p = h ? h : {};
                        h = mh(e, 12);
                        k = Tg(e, Lo, 4) ? B(e, Lo, 4) : null;
                        1 == z(e, 8) ? (p = p.Ch || null, e = new My(l, new Ey(hu(B(e, xp, 3), null)), p, m, 0, n, k, g, f, h, e)) : e = 2 == z(e, 8) ? new My(l, new Hy(e), p.Bi || new Jy("text"), m, 1, n, k, g, f, h, e) : null
                    }
                } else e = null
            } else e = null;
            null !== e && d.push(e)
        }
        return d
    }

    function Ny(a) {
        return a.A
    }

    function Oy(a) {
        return a.Ca
    }

    function Py(a) {
        return X(sr) ? (a.O || (a.O = a.F.l(a.m)), a.O) : a.F.l(a.m)
    }

    function Qy(a) {
        var b = a.H;
        a = a.m.document.createElement("div");
        X(sr) ? a.className = "google-auto-placed-ad-placeholder" : a.className = "google-auto-placed";
        var c = a.style;
        c.textAlign = "center";
        c.width = "100%";
        c.height = "0px";
        c.clear = b ? "both" : "none";
        return a
    }

    function Ry(a) {
        return a.C instanceof Iy ? a.C.Bc() : null
    }

    function Sy(a, b, c) {
        Ym(a.J, b) || a.J.set(b, []);
        a.J.get(b).push(c)
    }

    function Ty(a, b) {
        a.A = !0;
        X(sr) && (a.l && tt(a.l), a.l = null);
        null != b && a.aa.push(b)
    }

    function Uy(a) {
        return rt(a.m.document, a.H || !1)
    }

    function Vy(a) {
        return a.C.m(a.m)
    }

    function Wy(a, b = null, c = null) {
        return new My(a.F, b || a.C, c || a.T, a.H, a.Rb, a.Ad, a.Sd, a.m, a.wa, a.G, a.v, a.B, a.ga)
    }
    class My {
        constructor(a, b, c, d, e, f, g, h, k, l = null, m = null, n = null, p = null) {
            this.F = a;
            this.C = b;
            this.T = c;
            this.H = d;
            this.Rb = e;
            this.Ad = f;
            this.Sd = g ? g : new Lo;
            this.m = h;
            this.wa = k;
            this.G = l;
            this.v = m;
            (a = !m) || (a = !(m.ia() && null != mh(m.ia(), 5)));
            this.Ca = !a;
            this.B = n;
            this.ga = p;
            this.aa = [];
            this.A = !1;
            this.J = new bn;
            this.O = this.l = null
        }
        X() {
            return this.m
        }
        j() {
            return this.F.j()
        }
    };

    function Xy(a, b, c, d, e, f) {
        const g = Ko();
        return new My(new Gy(c, e), new Dy, new Fy(a), !0, 2, [], g, d, null, null, null, b, f)
    }

    function Yy(a, b, c, d, e) {
        const f = Ko();
        return new My(new Gy(b, d), new Ey({
            clearBoth: !0
        }), null, !0, 2, [], f, c, null, null, null, a, e)
    };
    var Zy = class {
        constructor(a, b, c) {
            this.articleStructure = a;
            this.element = b;
            this.win = c
        }
        X() {
            return this.win
        }
        A(a) {
            return Xy(a, this.articleStructure, this.element, this.win, 3, null)
        }
        m() {
            return Yy(this.articleStructure, this.element, this.win, 3, null)
        }
    };
    const $y = {
        TABLE: {
            tc: new qo([1, 2])
        },
        THEAD: {
            tc: new qo([0, 3, 1, 2])
        },
        TBODY: {
            tc: new qo([0, 3, 1, 2])
        },
        TR: {
            tc: new qo([0, 3, 1, 2])
        },
        TD: {
            tc: new qo([0, 3])
        }
    };

    function az(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Pa(e, f), 0 > c || b.push(new bz(a, [f], c, f, 3, ae(f).trim(), d));
        return b
    }

    function cz(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            k = "";
        for (let n = 0; n < g; n++) {
            var l = f[n];
            if (1 == l.nodeType || 3 == l.nodeType) {
                if (1 != l.nodeType) var m = null;
                else "BR" == l.tagName ? m = l : (m = c.getComputedStyle(l).getPropertyValue("display"), m = "inline" == m || "inline-block" == m ? null : l);
                m ? (d.length && k && e.push(new bz(a, d, n - 1, m, 0, k, c)), d = [], h = n + 1, k = "") : (d.push(l), l = ae(l).trim(), k += l && k ? " " + l : l)
            }
        }
        d.length && k && e.push(new bz(a, d, h, b, 2, k, c));
        return e
    }

    function dz(a, b) {
        return a.j - b.j
    }
    class bz {
        constructor(a, b, c, d, e, f, g) {
            this.v = a;
            this.cd = b.slice(0);
            this.j = c;
            this.Vd = d;
            this.Wd = e;
            this.B = f;
            this.l = g
        }
        X() {
            return this.l
        }
        A(a) {
            return Xy(a, this.v, this.Vd, this.l, this.Wd, this.j)
        }
        m() {
            return Yy(this.v, this.Vd, this.l, this.Wd, this.j)
        }
    };

    function ez(a) {
        return $a(a.B ? cz(a.j, a.m, a.l) : [], a.A ? az(a.j, a.A, a.m, a.l) : []).filter(b => {
            var c = b.Vd.tagName;
            c ? (c = $y[c.toUpperCase()], b = null != c && c.tc.contains(b.Wd)) : b = !1;
            return !b
        })
    }
    class fz {
        constructor(a, b, c) {
            this.m = a;
            this.A = b.bd;
            this.B = b.eg;
            this.j = b.articleStructure;
            this.l = c;
            this.v = b.Ef
        }
    };

    function gz(a, b) {
        if (!b) return !1;
        const c = wa(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = gz(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function hz(a, b) {
        return Wa(b.cd, c => gz(a, c))
    }
    class iz {
        constructor(a) {
            this.j = new bn;
            this.l = a
        }
    };
    class jz {
        constructor(a, b) {
            this.v = a;
            this.j = [];
            this.l = [];
            this.m = b
        }
    };
    var lz = (a, {
            rg: b = !1,
            kf: c = !1,
            Dg: d = c || X(rr) ? 2 : 3,
            hf: e = null
        } = {}) => {
            a = ez(a);
            return kz(a, {
                rg: b,
                kf: c,
                Dg: d,
                hf: e
            })
        },
        kz = (a, {
            rg: b = !1,
            kf: c = !1,
            Dg: d = c || X(rr) ? 2 : 3,
            hf: e = null
        } = {}) => {
            if (2 > d) throw Error("minGroupSize should be at least 2, found " + d);
            var f = a.slice(0);
            f.sort(dz);
            a = [];
            b = new jz(b, e);
            for (const g of f) {
                e = {
                    Kd: g,
                    vd: 51 > g.B.length ? !1 : null != b.m ? !hz(b.m, g) : !0
                };
                if (b.v || e.vd) b.j.length ? (f = b.j[b.j.length - 1].Kd, f = By(f.X(), f.cd[f.cd.length - 1], e.Kd.cd[0])) : f = !0, f ? (b.j.push(e), e.vd && b.l.push(e.Kd)) : (b.j = [e], b.l = e.vd ? [e.Kd] : []);
                if (b.l.length >= d) {
                    e = c || X(rr) ? 0 : 1;
                    if (0 > e || e >= b.l.length) e = null;
                    else {
                        for (e = b.l[e]; b.j.length && !b.j[0].vd;) b.j.shift();
                        b.j.shift();
                        b.l.shift()
                    }
                    e && a.push(e)
                }
            }
            return a
        };
    var nz = (a, b, c = !1) => {
            a = mz(a, b);
            const d = new iz(b);
            return ko(a, e => lz(e, {
                kf: c,
                hf: d
            }))
        },
        oz = (a, b) => {
            a = mz(a, b);
            const c = new iz(b);
            return ko(a, d => {
                if (d.v) {
                    var e = d.j;
                    var f = d.l;
                    d = d.m.querySelectorAll(d.v);
                    var g = [];
                    for (var h of d) g.push(new Zy(e, h, f));
                    e = g
                } else e = [];
                d = e.slice(0);
                if (d.length) {
                    e = [];
                    f = d[0];
                    for (g = 1; g < d.length; g++) {
                        const m = d[g];
                        h = f;
                        b: {
                            if (h.element.hasAttributes())
                                for (l of h.element.attributes)
                                    if ("style" === l.name.toLowerCase() && l.value.toLowerCase().includes("background-image")) {
                                        var k = !0;
                                        break b
                                    }
                            k =
                            h.element.tagName;k = "IMG" === k || "SVG" === k
                        }(k || 1 < h.element.textContent.length) && !gz(c, f.element) && By(m.X(), f.element, m.element) && e.push(f);
                        f = m
                    }
                    var l = e
                } else l = [];
                return l
            })
        },
        mz = (a, b) => {
            const c = new bn;
            a.forEach(d => {
                var e = du(B(d, Co, 1));
                if (e) {
                    var f = e.toString();
                    Ym(c, f) || c.set(f, {
                        articleStructure: d,
                        sh: e,
                        bd: null,
                        eg: !1,
                        Ef: null
                    });
                    e = c.get(f);
                    (f = (f = B(d, Co, 2)) ? H(f, 7) : null) ? e.bd = e.bd ? e.bd + "," + f : f: e.eg = !0;
                    d = B(d, Co, 4);
                    e.Ef = d ? H(d, 7) : null
                }
            });
            return an(c).map(d => {
                const e = d.sh.query(b.document);
                return e.length ? new fz(e[0],
                    d, b) : null
            }).filter(d => null != d)
        };

    function pz(a, b) {
        const c = B(b, up, 6);
        if (!c) return [];
        b = B(b, qp, 28) ? .v();
        return (b ? .j() ? oz(C(c, tp, 1), a) : nz(C(c, tp, 1), a, !!b ? .m())).map(d => d.m())
    };

    function qz(a) {
        ((d, e) => {
            d[e] = d[e] || function() {
                (d[e].q = d[e].q || []).push(arguments)
            };
            d[e].t = (new Date).getTime()
        })(a.win, "_googCsa");
        const b = a.aa.map(d => ({
                container: d,
                relatedSearches: 5
            })),
            c = {
                pubId: a.A,
                styleId: "5134551505",
                hl: a.T,
                fexp: a.O,
                channel: "AutoRsVariant",
                resultsPageBaseUrl: "http://google.com",
                resultsPageQueryParam: "q",
                relatedSearchTargeting: "content",
                relatedSearchResultClickedCallback: a.Ha.bind(a),
                relatedSearchUseResultCallback: !0,
                cx: a.C
            };
        a.ga && (c.adLoadedCallback = a.wa.bind(a));
        a.win._googCsa("relatedsearch",
            c, b)
    }

    function rz(a) {
        a.win.addEventListener("message", b => {
            "https://www.gstatic.com" === b.origin && "resize" === b.data.action && (a.j.style.height = `${Math.ceil(b.data.height)+1}px`)
        })
    }
    var sz = class extends P {
        constructor(a, b, c, d, e, f, g, h) {
            super();
            this.win = a;
            this.aa = b;
            this.J = e;
            this.O = f;
            this.v = h;
            this.T = d ? .j() || "en";
            this.Ca = d ? .m() || "Search results from ${website}";
            this.ga = X(Kr);
            this.A = c.replace("ca", "partner");
            this.F = new Rd(a.document);
            this.j = this.F.createElement("IFRAME");
            this.C = g.l ? g.j : "9d449ff4a772956c6";
            this.m = new Wq(this.j, this.C, "auto-rs-prose", this.A, "AutoRsVariant", a.location, this.T, this.Ca, this.O, this.v);
            a = this.j;
            this.H = 2 === Ye() ? Iw(this.win, a, {
                af: .95,
                Ee: .95,
                zIndex: 2147483645,
                qb: !0,
                Ja: !0
            }) : Sv(this.win, a, {
                yc: "min(65vw, 768px)",
                mc: "",
                xc: !1,
                zIndex: 2147483645,
                qb: !0,
                Qd: !1,
                Ja: !0
            });
            zl(this, this.H)
        }
        K() {
            0 !== this.aa.length && (this.ga || bu(1075, () => {
                this.m.K()
            }, this.win), bu(1076, () => {
                const a = this.F.createElement("SCRIPT");
                xe(a, Hi `https://www.google.com/adsense/search/async-ads.js`);
                this.win.document.head.appendChild(a)
            }, this.win), qz(this), wy(this.J, {
                sts: "ok"
            }), this.v && rz(this))
        }
        wa(a, b) {
            b ? bu(1075, () => {
                this.m.K()
            }, this.win) : xy(this.J, "pfns")
        }
        Ha(a, b) {
            Uq(this.m, a, b);
            (() => {
                if (!this.v) {
                    const c =
                        new ResizeObserver(async e => {
                            this.j.height = "0";
                            await new Promise(f => {
                                this.win.requestAnimationFrame(f)
                            });
                            this.j.height = e[0].target.scrollHeight.toString()
                        }),
                        d = () => {
                            const e = this.j.contentDocument ? .documentElement;
                            e ? c.observe(e) : (console.warn("iframe body missing"), setTimeout(d, 1E3))
                        };
                    d()
                }
                this.H.show()
            })()
        }
    };
    var tz = class {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    };
    var uz = a => a ? .google_ad_slot ? ro(new Do(1, {
            mh: a.google_ad_slot
        })) : to(Error("Missing dimension when creating placement id")),
        wz = a => {
            switch (a.Rb) {
                case 0:
                case 1:
                    var b = a.v;
                    null == b ? a = null : (a = b.ia(), null == a ? a = null : (b = z(b, 2), a = null == b ? null : new Do(0, {
                        Ff: [a],
                        Sg: b
                    })));
                    return null != a ? ro(a) : to(Error("Missing dimension when creating placement id"));
                case 2:
                    return a = vz(a), null != a ? ro(a) : to(Error("Missing dimension when creating placement id"));
                default:
                    return to(Error("Invalid type: " + a.Rb))
            }
        };
    const vz = a => {
        if (null == a || null == a.B) return null;
        const b = B(a.B, Co, 1),
            c = B(a.B, Co, 2);
        if (null == b || null == c) return null;
        const d = a.ga;
        if (null == d) return null;
        a = a.j();
        return null == a ? null : new Do(0, {
            Ff: [b, c],
            Ai: d,
            Sg: ju[a]
        })
    };

    function xz(a) {
        const b = Ry(a.ea);
        return (b ? uz(b) : wz(a.ea)).map(c => Go(c))
    }

    function yz(a) {
        a.j = a.j || xz(a);
        return a.j
    }

    function zz(a, b) {
        if (a.ea.A) throw Error("AMA:AP:AP");
        wt(b, a.ia(), a.ea.j());
        Ty(a.ea, b)
    }
    const Az = class {
        constructor(a, b, c) {
            this.ea = a;
            this.l = b;
            this.ka = c;
            this.j = null
        }
        ia() {
            return this.l
        }
        fill(a, b) {
            var c = this.ea;
            (a = c.C.l(a, b, this.l, c.m)) && zz(this, a.ob);
            return a
        }
    };

    function Bz(a, b) {
        return cu(() => {
            if (X(sr)) {
                var c = [],
                    d = [];
                for (var e = 0; e < a.length; e++) {
                    var f = a[e],
                        g = Py(f);
                    if (g) {
                        if (!f.l && !f.A) {
                            var h = null;
                            try {
                                var k = Py(f);
                                if (k) {
                                    h = Qy(f);
                                    wt(h, k, f.j());
                                    var l = h
                                } else l = null
                            } catch (q) {
                                throw tt(h), q;
                            }
                            f.l = l
                        }(h = f.l) && d.push({
                            Xi: f,
                            anchorElement: g,
                            ji: h
                        })
                    }
                }
                if (0 < d.length)
                    for (l = Sm(b), k = Tm(b), e = 0; e < d.length; e++) {
                        const {
                            Xi: q,
                            anchorElement: x,
                            ji: v
                        } = d[e];
                        f = Cz(v, k, l);
                        c.push(new Az(q, x, f))
                    }
                l = c
            } else {
                l = [];
                k = [];
                try {
                    const q = [];
                    for (let x = 0; x < a.length; x++) {
                        var m = a[x],
                            n = Py(m);
                        n && q.push({
                            Og: m,
                            anchorElement: n
                        })
                    }
                    for (n =
                        0; n < q.length; n++) {
                        m = k;
                        g = m.push; {
                            var p = q[n];
                            const x = p.anchorElement,
                                v = p.Og,
                                D = Qy(v);
                            try {
                                wt(D, x, v.j()), h = D
                            } catch (E) {
                                throw tt(D), E;
                            }
                        }
                        g.call(m, h)
                    }
                    c = Sm(b);
                    d = Tm(b);
                    for (g = 0; g < k.length; g++) e = Cz(k[g], d, c), f = q[g], l.push(new Az(f.Og, f.anchorElement, e))
                } finally {
                    for (c = 0; c < k.length; c++) tt(k[c])
                }
            }
            return l
        }, b)
    }

    function Cz(a, b, c) {
        a = a.getBoundingClientRect();
        return new ao(a.left + b, a.top + c, a.right - a.left)
    };
    const Dz = {
            1: "0.5vp",
            2: "300px"
        },
        Ez = {
            1: 700,
            2: 1200
        },
        Fz = {
            [1]: {
                Yg: "3vp",
                mf: "1vp",
                Xg: "0.3vp"
            },
            [2]: {
                Yg: "900px",
                mf: "300px",
                Xg: "90px"
            }
        };

    function Gz(a, b, c) {
        var d = Hz(a),
            e = Nm(a) || Ez[d],
            f = void 0;
        c && (f = (c = (c = Iz(C(c, Wo, 2), d)) ? B(c, Uo, 7) : void 0) ? Jz(c, e) : void 0);
        c = f;
        f = Hz(a);
        a = Nm(a) || Ez[f];
        const g = Kz(Fz[f].mf, a);
        a = null === g ? Lz(f, a) : new Mz(g, g, Nz(g, 8), 8, .3, c);
        c = Kz(Fz[d].Yg, e);
        f = Kz(Fz[d].mf, e);
        d = Kz(Fz[d].Xg, e);
        e = a.m;
        c && d && f && void 0 !== b && (e = .5 >= b ? f + (1 - 2 * b) * (c - f) : d + (2 - 2 * b) * (f - d));
        return new Mz(e, e, Nz(e, a.l), a.l, a.v, a.j)
    }

    function Oz(a, b) {
        const c = a.Nb();
        a = Wg(a, 5);
        return null == c || null == a ? b : new Mz(a, 0, [], c, 1)
    }

    function Pz(a, b) {
        const c = Hz(a);
        a = Nm(a) || Ez[c];
        if (!b) return Lz(c, a);
        if (b = Iz(C(b, Wo, 2), c))
            if (b = Qz(b, a)) return b;
        return Lz(c, a)
    }

    function Rz(a) {
        const b = Hz(a);
        a = Nm(a) || Ez[b];
        return Lz(b, a)
    }

    function Sz(a, b) {
        let c = {
            Jc: a.m,
            ub: a.B
        };
        for (let d of a.A) d.adCount <= b && (c = d.Oc);
        return c
    }

    function Tz(a, b, c) {
        var d = Xg(b, 2);
        b = B(b, Wo, 1);
        var e = Hz(c);
        var f = Nm(c) || Ez[e];
        c = Kz(b ? .A(), f) ? ? a.m;
        e = Kz(b ? .v(), f) ? ? a.B;
        d = d ? [] : Uz(b ? .j(), f) ? ? a.A;
        const g = b ? .Nb() ? ? a.l,
            h = b ? .m() ? ? a.v;
        a = (b ? .B() ? Jz(B(b, Uo, 7), f) : null) ? ? a.j;
        return new Mz(c, e, d, g, h, a)
    }

    function Vz(a, b) {
        var c = Hz(b);
        const d = new Xo,
            e = new Wo;
        let f = !1;
        var g = pt(xr);
        0 <= g && (xh(e, 4, g), f = !0);
        g = null;
        1 === c ? (c = pt(Ar), 0 <= c && (g = c + "vp")) : (c = pt(zr), 0 <= c && (g = c + "px"));
        null !== g && (Ah(e, 2, g), f = !0);
        c = X(Cr) ? "0px" : null;
        null !== c && (Ah(e, 5, c), f = !0);
        if (X(Er)) vh(d, 2, !0), f = !0;
        else if (null !== c || null !== g) {
            const m = [];
            for (const n of a.A) {
                var h = m,
                    k = h.push;
                var l = new Vo;
                l = xh(l, 1, n.adCount);
                l = Ah(l, 3, c ? ? n.Oc.ub + "px");
                l = Ah(l, 2, g ? ? n.Oc.Jc + "px");
                k.call(h, l)
            }
            kh(e, 3, m)
        }
        return f ? (G(d, 1, e), Tz(a, d, b)) : a
    }
    class Mz {
        constructor(a, b, c, d, e, f) {
            this.m = a;
            this.B = b;
            this.A = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.v = e;
            this.j = f
        }
        Nb() {
            return this.l
        }
    }

    function Iz(a, b) {
        for (let c of a)
            if (z(c, 1) == b) return c;
        return null
    }

    function Uz(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = mh(d, 1);
            const e = Kz(H(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                Oc: {
                    Jc: e,
                    ub: Kz(H(d, 3), b)
                }
            })
        }
        return c
    }

    function Qz(a, b) {
        const c = Kz(H(a, 2), b),
            d = Kz(H(a, 5), b);
        if (null === c) return null;
        const e = mh(a, 4);
        if (null == e) return null;
        var f = a.j();
        f = Uz(f, b);
        if (null === f) return null;
        const g = B(a, Uo, 7);
        b = g ? Jz(g, b) : void 0;
        return new Mz(c, d, f, e, Wg(a, 6), b)
    }

    function Lz(a, b) {
        a = Kz(Dz[a], b);
        return X(vr) ? new Mz(null === a ? Infinity : a, null, [], 8, .3) : new Mz(null === a ? Infinity : a, null, [], 3, null)
    }

    function Kz(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Hz(a) {
        a = 900 <= Jm(a);
        return fe() && !a ? 1 : 2
    }

    function Nz(a, b) {
        if (4 > b) return [];
        const c = Math.ceil(b / 2);
        return [{
            adCount: c,
            Oc: {
                Jc: 2 * a,
                ub: 2 * a
            }
        }, {
            adCount: c + Math.ceil((b - c) / 2),
            Oc: {
                Jc: 3 * a,
                ub: 3 * a
            }
        }]
    }

    function Jz(a, b) {
        const c = Kz(H(a, 2), b) || 0,
            d = mh(a, 3) || 1;
        return {
            Eg: c,
            yg: d,
            nc: Kz(H(a, 1), b) || 0
        }
    };

    function Wz(a, b, c) {
        return Bm({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Xz(a) {
        if (!a.length) return null;
        const b = Cm(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Yz(b, a)
    }
    class Yz {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Zz(a = null) {
        ({
            googletag: a
        } = a ? ? window);
        return a ? .apiReady ? a : void 0
    };
    var eA = (a, b) => {
        var c = ab(b.document.querySelectorAll(".google-auto-placed"));
        const d = $z(b),
            e = aA(b),
            f = bA(b),
            g = cA(b),
            h = ab(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = ab(b.document.querySelectorAll("div.googlepublisherpluginad")),
            l = ab(b.document.querySelectorAll("html > ins.adsbygoogle"));
        let m = [].concat(ab(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), ab(b.document.querySelectorAll("body ins.adsbygoogle")));
        b = [];
        for (const [n, p] of [
                [a.qd, c],
                [a.Qb,
                    d
                ],
                [a.yi, e],
                [a.rd, f],
                [a.ud, g],
                [a.wi, h],
                [a.xi, k],
                [a.zi, l]
            ]) !1 === n ? b = b.concat(p) : m = m.concat(p);
        a = dA(m);
        c = dA(b);
        a = a.slice(0);
        for (const n of c)
            for (c = 0; c < a.length; c++)(n.contains(a[c]) || a[c].contains(n)) && a.splice(c, 1);
        return a
    };
    const fA = a => {
            const b = Zz(a);
            return b ? Sa(Ua(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        $z = a => ab(a.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]")),
        aA = a => ab(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        bA = a => (fA(a) || ab(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(ab(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        cA = a => ab(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var dA = a => {
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
    var gA = bm.Qa(453, eA),
        hA;
    hA = bm.Qa(454, (a, b) => {
        const c = ab(b.document.querySelectorAll(".google-auto-placed")),
            d = $z(b),
            e = aA(b),
            f = bA(b),
            g = cA(b),
            h = ab(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            k = ab(b.document.querySelectorAll("div.googlepublisherpluginad"));
        b = ab(b.document.querySelectorAll("html > ins.adsbygoogle"));
        return dA([].concat(!0 === a.qd ? c : [], !0 === a.Qb ? d : [], !0 === a.yi ? e : [], !0 === a.rd ? f : [], !0 === a.ud ? g : [], !0 === a.wi ? h : [], !0 === a.xi ? k : [], !0 === a.zi ? b : []))
    });

    function iA(a, b, c) {
        const d = jA(a);
        b = kA(d, b, c);
        return new lA(a, d, b)
    }

    function mA(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function nA(a) {
        return a.j.map(b => b.box)
    }

    function oA(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class lA {
        constructor(a, b, c) {
            this.m = a;
            this.j = b.slice(0);
            this.v = c.slice(0);
            this.l = null
        }
    }

    function jA(a) {
        const b = gA({
                Qb: !1
            }, a),
            c = Tm(a),
            d = Sm(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && Sb(e.className, "google-auto-placed")) || mA(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                Kn: e ? 1 : 0
            } : null
        }).filter(tb(e => null === e))
    }

    function kA(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? pA(a, b) : Ua(a, d => new Yz(d.box, 1))
    }

    function pA(a, b) {
        a = Ua(a, d => new Yz(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Wz(d, a[f], b)) {
                        d = Xz([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function qA(a, b, c) {
        const d = $n(c, b);
        return !Wa(a, e => Bm(e, d))
    }

    function rA(a, b, c, d, e) {
        e = e.ka;
        const f = $n(e, b),
            g = $n(e, c),
            h = $n(e, d);
        return !Wa(a, k => Bm(k, g) || Bm(k, f) && !Bm(k, h))
    }

    function sA(a, b, c, d) {
        const e = nA(a);
        if (qA(e, b, d.ka)) return !0;
        if (!rA(e, b, c.Eg, c.nc, d)) return !1;
        const f = new Yz($n(d.ka, 0), 1);
        a = Sa(a.v, g => Wz(g, f, c.nc));
        b = Va(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.yg ? !1 : !0
    };
    var tA = (a, b) => {
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

    function uA(a, b) {
        const c = new yo,
            d = new cn;
        b.forEach(e => {
            if (sh(e, dp, 1, gp)) {
                e = sh(e, dp, 1, gp);
                if (B(e, cp, 1) && B(e, cp, 1).ia() && B(e, cp, 2) && B(e, cp, 2).ia()) {
                    const g = vA(a, B(e, cp, 1).ia()),
                        h = vA(a, B(e, cp, 2).ia());
                    if (g && h)
                        for (var f of tA({
                                anchor: g,
                                position: oh(B(e, cp, 1), 2)
                            }, {
                                anchor: h,
                                position: oh(B(e, cp, 2), 2)
                            })) c.set(wa(f.anchor), f.position)
                }
                B(e, cp, 3) && B(e, cp, 3).ia() && (f = vA(a, B(e, cp, 3).ia())) && c.set(wa(f), oh(B(e, cp, 3), 2))
            } else sh(e, ep, 2, gp) ? wA(a, sh(e, ep, 2, gp), c) : sh(e, bp, 3, gp) && xA(a, sh(e, bp, 3, gp), d)
        });
        return new yA(c,
            d)
    }
    class yA {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const wA = (a, b, c) => {
            B(b, cp, 2) ? (b = B(b, cp, 2), (a = vA(a, b.ia())) && c.set(wa(a), z(b, 2))) : B(b, Co, 1) && (a = zA(a, B(b, Co, 1))) && a.forEach(d => {
                d = wa(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        xA = (a, b, c) => {
            B(b, Co, 1) && (a = zA(a, B(b, Co, 1))) && a.forEach(d => {
                c.add(wa(d))
            })
        },
        vA = (a, b) => (a = zA(a, b)) && 0 < a.length ? a[0] : null,
        zA = (a, b) => (b = du(b)) ? b.query(a) : null;
    var AA = class {
        constructor() {
            this.j = ff();
            this.l = 0
        }
    };

    function BA(a, b, c) {
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
            if (CA(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function DA(a) {
        a = EA(a);
        return a.has("all") || a.has("after")
    }

    function FA(a) {
        a = EA(a);
        return a.has("all") || a.has("before")
    }

    function EA(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function CA(a) {
        const b = EA(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var GA = class {
        constructor() {
            this.j = new Set;
            this.l = new AA
        }
    };

    function HA(a) {
        return function(b) {
            return Bz(b, a)
        }
    }

    function IA(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return qb;
        const d = nA(c || iA(b));
        return e => qA(d, a, e.ka)
    }

    function JA(a, b, c, d) {
        if (0 > a || 0 > b.Eg || 0 > b.yg || 0 > b.nc) throw Error("ama::ead:nd");
        return Infinity === a ? qb : e => sA(d || iA(c, b.nc), a, b, e)
    }

    function KA(a) {
        if (!a.length) return qb;
        const b = new qo(a);
        return c => b.contains(c.Rb)
    }

    function LA(a) {
        return function(b) {
            for (let c of b.Ad)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function MA(a) {
        return a.length ? function(b) {
            const c = b.Ad;
            return a.some(d => -1 < c.indexOf(d))
        } : rb
    }

    function NA(a, b) {
        if (0 >= a) return rb;
        const c = Om(b).scrollHeight - a;
        return function(d) {
            return d.ka.j <= c
        }
    }

    function OA(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[z(c.Sd, 2) || 0]
        }
    }

    function PA(a) {
        return a.length ? b => a.includes(z(b.Sd, 1) || 0) : rb
    }

    function QA(a, b) {
        const c = uA(a, b);
        return function(d) {
            var e = d.ia();
            d = ju[d.ea.j()];
            var f = wa(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(wa(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(wa(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function RA() {
        const a = new GA;
        return function(b) {
            var c = b.ia(),
                d = ju[b.ea.j()];
            a: switch (d) {
                case 1:
                    b = DA(c.previousElementSibling) || FA(c);
                    break a;
                case 4:
                    b = DA(c) || FA(c.nextElementSibling);
                    break a;
                case 2:
                    b = FA(c.firstElementChild);
                    break a;
                case 3:
                    b = DA(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + d);
            }
            c = BA(a, c, d);
            d = a.l;
            fm("ama_exclusion_zone", {
                typ: b ? c ? "siuex" : "siex" : c ? "suex" : "noex",
                cor: d.j,
                num: d.l++,
                dvc: Ye()
            }, .1);
            return !(b || c)
        }
    }
    const SA = (a, b) => b.ka.j >= a,
        TA = (a, b, c) => {
            c = c.ka.l;
            return a <= c && c <= b
        };

    function UA(a) {
        const b = Uy(a.v.ea),
            c = a.B.Na(a.G, () => a.l());
        b.appendChild(c);
        a.A && (b.className = a.A);
        return {
            ai: b,
            Ph: c
        }
    }
    class VA {
        constructor(a, b, c, d) {
            this.G = a;
            this.v = b;
            this.B = c;
            this.A = d || null;
            this.j = null;
            this.m = new S(null)
        }
        K() {
            const a = UA(this);
            this.j = a.ai;
            zz(this.v, this.j);
            this.m.j(a.Ph)
        }
        l() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            this.m.j(null)
        }
        C() {
            return this.m
        }
    };
    async function WA(a) {
        await new Promise(b => {
            setTimeout(() => {
                try {
                    XA(a)
                } catch (c) {
                    xy(a.l, "pfere", c)
                }
                b()
            })
        })
    }

    function XA(a) {
        if ((!a.jd || !YA(a.config, a.Z, a.l)) && ZA(a.j ? .m(), a.l)) {
            var b = pz(a.win, a.config);
            b = $A(a.win, b, a.Z, a.l, {
                tj: !!a.j ? .v() ? .v(),
                jd: a.jd
            });
            var c = aB(b, a.win),
                d = a.j ? .j() ? .j() || 0,
                e = bB(a.j),
                f = !!a.j ? .B();
            B(a.config, ip, 25) ? .j() || bu(1074, () => {
                (new sz(a.win, c, a.webPropertyCode, a.j ? .m(), a.l, d, e, f)).K()
            }, a.win)
        }
    }
    var cB = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.config = c;
            this.webPropertyCode = d;
            this.Z = e;
            this.jd = f;
            this.l = new yy(a, b, B(this.config, qp, 28) || new qp);
            this.j = B(this.config, qp, 28)
        }
    };

    function YA(a, b, c) {
        a = B(a, qp, 28) ? .j() ? .j() || 0;
        const d = R(ot).j(Pr.j, Pr.defaultValue);
        return d && d.includes(a.toString()) ? !1 : 0 === (b ? Yg(b, 2, hg) : []).length ? (xy(c, "pfeu"), !0) : !1
    }

    function ZA(a, b) {
        const c = R(ot).j(Nr.j, Nr.defaultValue);
        return c && 0 !== c.length && !c.includes((a ? .j() || "").toString()) ? (xy(b, "pflna"), !1) : !0
    }

    function dB(a, b, c, d) {
        c = c ? C(c, fp, 5) : [];
        const e = QA(a.document, c),
            f = RA();
        b = b.filter(g => e(g));
        if (0 === b.length) return xy(d, "pfaz"), [];
        b = b.filter(g => f(g));
        return 0 === b.length ? (xy(d, "pfet"), []) : b
    }

    function $A(a, b, c, d, e) {
        b = Bz(b, a).sort(eB);
        return 0 === b.length ? (xy(d, "pfno"), []) : e.jd && (b = dB(a, b, c, d), 0 === b.length) ? [] : [b[e.tj ? 0 : Math.floor(b.length / 2)]]
    }

    function eB(a, b) {
        return a.ka.j - b.ka.j
    }

    function aB(a, b) {
        const c = [];
        for (let d = 0; d < a.length; d++) {
            const e = a[d],
                f = "autors-container-" + d.toString(),
                g = b.document.createElement("div");
            g.setAttribute("id", f);
            (new VA(b, e, new zy(g))).K();
            c.push(f)
        }
        return c
    }

    function bB(a) {
        return new tz(a ? .C() || !1, a ? .A() || "")
    };
    var fB = (a, b) => {
        const c = [];
        B(a, zp, 18) && c.push(2);
        b.Z && c.push(0);
        B(a, qp, 28) && 1 == rh(B(a, qp, 28), 1) && c.push(1);
        B(a, op, 31) && 1 == rh(B(a, op, 31), 1) && c.push(5);
        B(a, kp, 32) && c.push(6);
        B(a, Cp, 34) && I(B(a, Cp, 34), 3) && c.push(7);
        return c
    };

    function gB(a, b) {
        const c = Qd(a).createElement("IMG");
        hB(a, c);
        c.src = "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg";
        w(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function iB(a, b) {
        const c = b.document.createElement("button");
        hB(b, c);
        w(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.m();
            d.stopPropagation()
        });
        return c
    }

    function jB(a, b, c) {
        const d = Qd(b).createElement("IMG");
        d.src = "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg";
        d.setAttribute("aria-label", a.v);
        hB(b, d);
        w(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function kB(a) {
        const b = a.document.createElement("ins");
        hB(a, b);
        w(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class lB {
        constructor(a, b, c) {
            this.l = a;
            this.v = b;
            this.m = c;
            this.j = new S(!1)
        }
        Na(a, b, c, d) {
            const e = gB(a, d),
                f = gB(a),
                g = iB(this, a),
                h = jB(this, a, c);
            a = kB(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            this.j.listen(k => {
                w(e, {
                    display: k ? "none" : "inline"
                });
                w(f, {
                    display: k ? "inline" : "none"
                });
                k ? (w(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), w(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (w(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), w(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        hg() {
            return 40
        }
        Kg() {
            this.j.j(!1);
            return 0
        }
        Lg() {
            this.j.j(!0)
        }
    }

    function hB(a, b) {
        w(b, lu(a));
        w(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function mB(a, b) {
        const c = b.document.createElement("button");
        nB(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        w(c, b);
        c.addEventListener("click", d => {
            a.B();
            d.stopPropagation()
        });
        return c
    }

    function oB(a, b, c, d) {
        const e = b.document.createElement("div");
        w(e, lu(b));
        w(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        w(f, lu(b));
        w(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (w(e, {
                    "flex-direction": "row"
                }), a.j && w(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), w(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                w(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (w(e, {
                border: "0",
                "flex-direction": "column"
            }), w(f, {
                "margin-left": "0",
                "text-align": "center"
            }), w(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && w(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function nB(a, b, c) {
        w(c, lu(b));
        w(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.C,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.G,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class pB {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.A = a;
            this.B = b;
            this.G = c;
            this.l = d;
            this.C = e;
            this.v = f;
            this.j = g;
            this.m = h
        }
        Na(a) {
            const b = a.document.createElement("div");
            nB(this, a, b);
            w(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.v) {
                var c = Qd(a).createElement("IMG");
                c.src = this.v;
                nB(this, a, c);
                w(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            nB(this, a, c);
            w(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.A));
            b.appendChild(c);
            c = mB(this, a);
            c.appendChild(b);
            return this.m ? oB(this, a, c, this.m) : c
        }
    };

    function qB(a, b) {
        b = b.filter(c => 5 === B(c, Lo, 4) ? .j() && 1 === z(c, 8));
        b = Ly(b, a);
        a = Bz(b, a);
        a.sort((c, d) => d.ka.j - c.ka.j);
        return a[0] || null
    };

    function rB({
        I: a,
        Te: b,
        Qe: c,
        Nf: d,
        va: e,
        Kh: f,
        bo: g
    }) {
        let h = 0;
        try {
            h |= Hm(a);
            const k = Math.min(a.screen.width || 0, a.screen.height || 0);
            h |= k ? 320 > k ? 8192 : 0 : 2048;
            h |= a.navigator && sB(a.navigator.userAgent) ? 1048576 : 0;
            h = b ? h | (a.innerHeight >= b ? 0 : 1024) : h | (a.innerHeight >= a.innerWidth ? 0 : 8);
            h |= Im(a, c, g);
            h |= Km(a)
        } catch {
            h |= 32
        }
        switch (d) {
            case 2:
                tB(a, e) && (h |= 16777216);
                break;
            case 1:
                uB(a, e) && (h |= 16777216)
        }
        f && vB(a, e) && (h |= 16777216);
        return h
    }

    function sB(a) {
        return /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a)
    }
    var tB = (a, b = null) => {
            const c = pu({
                ic: 0,
                Jb: a.innerWidth,
                Xb: 3,
                jc: 0,
                Kb: Math.min(Math.round(a.innerWidth / 320 * 50), wB) + 15,
                Yb: 3
            });
            return null != ru(xB(a, b), c)
        },
        uB = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), wB) + 15,
                f = pu({
                    ic: 0,
                    Jb: c,
                    Xb: 3,
                    jc: d - e,
                    Kb: d,
                    Yb: 3
                });
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return null != ru(xB(a, b), f)
        };

    function vB(a, b = null) {
        return null != yB(a, b)
    }

    function yB(a, b = null) {
        var c = a.innerHeight;
        c = pu({
            ic: 0,
            Jb: a.innerWidth,
            Xb: 10,
            jc: c - 66,
            Kb: c,
            Yb: 10
        });
        return ru(xB(a, b), c)
    }

    function zB(a, b) {
        const c = a.innerWidth,
            d = a.innerHeight;
        let e = d;
        for (; e > b;) {
            var f = pu({
                ic: 0,
                Jb: c,
                Xb: 9,
                jc: e - b,
                Kb: e,
                Yb: 9
            });
            f = ru(xB(a), f);
            if (!f) return d - e;
            e = f.getBoundingClientRect().top - 1
        }
        return null
    }

    function xB(a, b = null) {
        return new wu(a, {
            fg: AB(a, b)
        })
    }

    function AB(a, b = null) {
        if (b) return (c, d, e) => {
            Gj(b, "ach_evt", {
                tn: c.tagName,
                id: c.getAttribute("id") ? ? "",
                cls: c.getAttribute("class") ? ? "",
                ign: String(e),
                pw: a.innerWidth,
                ph: a.innerHeight,
                x: d.x,
                y: d.y
            }, !0, 1)
        }
    }
    const wB = 90 * 1.38;

    function BB(a) {
        a.j || (a.j = CB(a));
        w(a.j, {
            display: "block"
        });
        a.A.Lg();
        a.m.j(a.B)
    }

    function DB(a) {
        const b = a.A.Kg();
        switch (b) {
            case 0:
                a.m.j(a.B);
                break;
            case 1:
                a.j && (w(a.j, {
                    display: "none"
                }), a.m.j(null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function CB(a) {
        var b = zB(a.v, a.A.hg() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.v.document.createElement("div");
        w(c, lu(a.v));
        w(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.B = a.A.Na(a.v, () => a.l(), () => {
            a.G.ma();
            DB(a)
        }, () => {
            a.G.ma();
            BB(a)
        });
        c.appendChild(a.B);
        a.F && (c.className = a.F);
        a.v.document.body.appendChild(c);
        return c
    }
    class EB {
        constructor(a, b, c) {
            this.v = a;
            this.A = b;
            this.B = null;
            this.m = new S(null);
            this.F = c || null;
            this.G = Ix(a);
            this.j = null
        }
        K() {
            const a = qn(this.G.m);
            T(a, !0, () => void BB(this));
            un(a, !1, () => void DB(this))
        }
        l() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            this.G.ma();
            this.m.j(null)
        }
        C() {
            return this.m
        }
    };

    function FB(a) {
        a.G.j(0);
        null != a.v && (a.v.l(), a.v = null);
        null != a.m && (a.m.l(), a.m = null)
    }

    function GB(a) {
        a.m = new EB(a.B, a.J, a.F);
        a.m.K();
        vn(a.A, a.m.C());
        a.G.j(2)
    }
    class HB {
        constructor(a, b, c, d, e) {
            this.B = a;
            this.H = b;
            this.O = c;
            this.J = d;
            this.F = e;
            this.G = new S(0);
            this.A = new S(null);
            this.m = this.v = this.j = null
        }
        K() {
            this.H ? (this.v = new VA(this.B, this.H, this.O, this.F), this.v.K(), vn(this.A, this.v.C()), this.G.j(1), null == this.j && (this.j = new jo(this.B), this.j.K(2E3)), ho(this.j, () => {
                FB(this);
                GB(this)
            })) : GB(this)
        }
        l() {
            FB(this);
            this.j && (this.j.ma(), this.j = null)
        }
        C() {
            return this.A
        }
    };
    var IB = (a, b, c, d, e) => {
        a = new HB(a, qB(a, e), new pB(b, d, "#FFF", "#4A4A4A", "normal"), new lB(b, c, d), "google-dns-link-placeholder");
        a.K();
        return a
    };
    var JB = a => a.googlefc = a.googlefc || {},
        KB = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function LB(a) {
        var b = KB(a.j);
        if (MB(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = IB(a.j, c, b, () => NB(a), a.v))
        }
    }

    function OB(a) {
        const b = JB(a.j);
        KB(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => LB(a)
        })
    }

    function NB(a) {
        pv(a.m);
        KB(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.l(), a.l = null);
            qv(a.m)
        })
    }
    class PB {
        constructor(a, b, c) {
            this.j = a;
            this.m = Au(b, 2147483643);
            this.v = c;
            this.l = null
        }
    }

    function MB(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function QB(a) {
        const b = a.document.createElement("ins");
        RB(a, b);
        w(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function SB(a, b, c, d) {
        const e = Qd(a).createElement("IMG");
        e.src = b;
        d && e.setAttribute("aria-label", d);
        RB(a, e);
        w(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function TB(a, b) {
        const c = b.document.createElement("span");
        RB(b, c);
        w(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.v));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function UB(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.m));
        w(c, lu(b));
        w(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function VB(a) {
        const b = a.document.createElement("div");
        w(b, lu(a));
        w(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class WB {
        constructor(a, b, c, d) {
            this.v = a;
            this.A = b;
            this.m = c;
            this.l = d;
            this.j = new S(!1)
        }
        Na(a, b, c, d) {
            c = QB(a);
            const e = SB(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = SB(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = TB(this, a),
                h = SB(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.A);
            w(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const k = UB(this, a);
            a = VB(a);
            a.appendChild(c);
            a.appendChild(k);
            this.j.listen(l => {
                w(e, {
                    display: l ? "none" : "inline"
                });
                w(f, {
                    display: l ? "inline" : "none"
                });
                l ? (w(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), w(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), w(k, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (w(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), w(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), w(k, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        hg() {
            return 71
        }
        Kg() {
            this.j.j(!1);
            return 0
        }
        Lg() {
            this.j.j(!0)
        }
    }

    function RB(a, b) {
        w(b, lu(a));
        w(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };
    var XB = class extends O {
        constructor() {
            super()
        }
    };

    function YB(a) {
        ZB(a.l, b => {
            var c = a.v,
                d = b.kj,
                e = b.Oh,
                f = b.wh;
            b = b.showRevocationMessage;
            (new HB(c, qB(c, a.m), new pB(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new WB(d, e, f, b), "google-revocation-link-placeholder")).K()
        }, () => {
            qv(a.j)
        })
    }
    class $B {
        constructor(a, b, c, d) {
            this.v = a;
            this.j = Au(b, 2147483643);
            this.m = c;
            this.l = d
        }
    };
    var aC = a => {
        if (!a || null == z(a, 1)) return !1;
        a = z(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function bC(a) {
        if (!0 !== a.l.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            aC(a.j) && (b = new $B(a.l, a.A, a.v || C(a.j, yp, 4), a.m), pv(b.j), YB(b), b = !0);
            var c;
            a: if ((c = a.j) && null != z(c, 3)) switch (c = z(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (OB(new PB(a.l, a.A, a.v || C(a.j, yp, 4))), b = !0);
            c = (c = a.j) ? !0 === Xg(c, 5) : !1;
            var d = a.j;
            d = (d ? !0 === Xg(d, 6) : !1) || X(Yr);
            c && (b = !0);
            b && (b = new XB, b = vh(b, 1, c && d), a.m.start(b), a.l.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class cC {
        constructor(a, b, c, d, e) {
            this.l = a;
            this.m = b;
            this.j = c;
            this.A = d;
            this.v = e || null
        }
    };

    function dC(a, b, c, d, e, f) {
        try {
            const g = a.j,
                h = Fe("SCRIPT", g);
            h.async = !0;
            xe(h, b);
            g.head.appendChild(h);
            h.addEventListener("load", () => {
                e();
                d && g.head.removeChild(h)
            });
            h.addEventListener("error", () => {
                0 < c ? dC(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
            })
        } catch (g) {
            f()
        }
    }

    function eC(a, b, c = () => {}, d = () => {}) {
        dC(Qd(a), b, 0, !1, c, d)
    };
    var fC = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    xc(zm).map(a => Number(a));
    xc(Am).map(a => Number(a));
    const gC = t.URL;

    function hC(a) {
        var b = (new gC(a.location.href)).searchParams;
        a = b.get("fcconsent");
        b = b.get("fc");
        return "alwaysshow" === b ? b : "alwaysshow" === a ? a : null
    }

    function iC(a) {
        const b = ["ab", "gdpr", "consent", "ccpa", "monetization"];
        return (a = (new gC(a.location.href)).searchParams.get("fctype")) && -1 !== b.indexOf(a) ? a : null
    };
    var jC = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Fe("IFRAME", c);
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
    var kC = Ih(class extends O {});

    function lC(a) {
        if (a.j) return a.j;
        a.J && a.J(a.v) ? a.j = a.v : a.j = Xe(a.v, a.O);
        return a.j ? ? null
    }

    function mC(a) {
        a.C || (a.C = b => {
            try {
                var c = a.H ? a.H(b) : void 0;
                if (c) {
                    var d = c.bf,
                        e = a.F.get(d);
                    e && (e.Wi || a.F.delete(d), e.vb ? .(e.Th, c.payload))
                }
            } catch (f) {}
        }, Bb(a.v, "message", a.C))
    }

    function nC(a, b, c) {
        if (lC(a))
            if (a.j === a.v)(b = a.A.get(b)) && b(a.j, c);
            else {
                var d = a.m.get(b);
                if (d && d.Sb) {
                    mC(a);
                    var e = ++a.T;
                    a.F.set(e, {
                        vb: d.vb,
                        Th: d.Dc(c),
                        Wi: "addEventListener" === b
                    });
                    a.j.postMessage(d.Sb(c, e), "*")
                }
            }
    }
    var oC = class extends P {
        constructor(a, b, c, d) {
            super();
            this.O = b;
            this.J = c;
            this.H = d;
            this.A = new Map;
            this.T = 0;
            this.m = new Map;
            this.F = new Map;
            this.C = void 0;
            this.v = a
        }
        l() {
            delete this.j;
            this.A.clear();
            this.m.clear();
            this.F.clear();
            this.C && (Cb(this.v, "message", this.C), delete this.C);
            delete this.v;
            delete this.H;
            super.l()
        }
    };
    const pC = (a, b) => {
            const c = {
                cb: d => {
                    d = kC(d);
                    b.callback({
                        consentData: d
                    })
                }
            };
            b.spsp && (c.spsp = b.spsp);
            a = a.googlefc || (a.googlefc = {});
            a.__fci = a.__fci || [];
            a.__fci.push(b.command, c)
        },
        qC = {
            Dc: a => a.callback,
            Sb: (a, b) => ({
                __fciCall: {
                    callId: b,
                    command: a.command,
                    spsp: a.spsp || void 0
                }
            }),
            vb: (a, b) => {
                a({
                    consentData: b
                })
            }
        };

    function rC(a) {
        a = kC(a.data.__fciReturn);
        return {
            payload: a,
            bf: ph(nh(a, 1))
        }
    }

    function sC(a) {
        a.m || (a.j = !!lC(a.caller), a.m = !0);
        return a.j
    }

    function tC(a) {
        return new Promise(b => {
            sC(a) && nC(a.caller, "getDataWithCallback", {
                command: "loaded",
                callback: c => {
                    b(c.consentData)
                }
            })
        })
    }

    function uC(a, b) {
        sC(a) && nC(a.caller, "getDataWithCallback", {
            command: "prov",
            spsp: Ch(b),
            callback: () => {}
        })
    }
    var vC = class extends P {
        constructor(a) {
            super();
            this.j = this.m = !1;
            this.caller = new oC(a, "googlefcPresent", void 0, rC);
            this.caller.A.set("getDataWithCallback", pC);
            this.caller.m.set("getDataWithCallback", qC)
        }
        l() {
            this.caller.ma();
            super.l()
        }
    };
    const wC = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function xC(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = wC(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Yl({
            e: String(a.internalErrorState)
        }, "tcfe"), !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }

    function yC(a) {
        return xC(a) ? !1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length ? zC(a, "1") : !0 : !1
    }

    function zC(a, b) {
        a: {
            if (a.publisher && a.publisher.restrictions) {
                var c = a.publisher.restrictions[b];
                if (void 0 !== c) {
                    c = c["755"];
                    break a
                }
            }
            c = void 0
        }
        if (0 === c) return !1;a.purpose && a.vendor ? (c = a.vendor.consents, (c = !(!c || !c["755"])) && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? b = !0 : (c && (a = a.purpose.consents, c = !(!a || !a[b])), b = c)) : b = !0;
        return b
    }

    function AC(a) {
        var b = ["3", "4"];
        return !1 === a.gdprApplies ? !0 : b.every(c => zC(a, c))
    }

    function BC(a) {
        if (a.j) return a.j;
        a.j = Xe(a.m, "__tcfapiLocator");
        return a.j
    }

    function CC(a) {
        return "function" === typeof a.m.__tcfapi || null != BC(a)
    }

    function DC(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.m.__tcfapi) a = a.m.__tcfapi, a(b, 2, c, d);
        else if (BC(a)) {
            EC(a);
            const e = ++a.H;
            a.C[e] = c;
            a.j && a.j.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function FC(a, b) {
        let c = {
            internalErrorState: 0,
            internalBlockOnErrors: a.A
        };
        const d = vb(() => b(c));
        let e = 0; - 1 !== a.F && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.F));
        DC(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = wC(c), c.internalBlockOnErrors = a.A, xC(c) ? (0 != c.internalErrorState && (c.tcString = "tcunavailable"), DC(a, "removeEventListener", null, c.listenerId), (f = e) && clearTimeout(f), d()) : ("error" === c.cmpStatus || 0 !== c.internalErrorState) && (f = e) && clearTimeout(f))
        })
    }

    function EC(a) {
        a.v || (a.v = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.C[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Bb(a.m, "message", a.v))
    }
    class GC extends P {
        constructor(a, b = {}) {
            super();
            this.m = a;
            this.j = null;
            this.C = {};
            this.H = 0;
            this.F = b.timeoutMs ? ? 500;
            this.A = b.Dh ? ? !1;
            this.v = null
        }
        l() {
            this.C = {};
            this.v && (Cb(this.m, "message", this.v), delete this.v);
            delete this.C;
            delete this.m;
            delete this.j;
            super.l()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.A
            };
            const c = vb(() => a(b));
            let d = 0; - 1 !== this.F && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.F));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = wC(b),
                    b.internalBlockOnErrors = this.A, g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                DC(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && DC(this, "removeEventListener", null, a.listenerId)
        }
    };

    function ZB(a, b, c) {
        const d = fC(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = fC(a.j),
                    f = new GC(a.j);
                CC(f) && FC(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        kj: e.getDefaultConsentRevocationText(),
                        Oh: e.getDefaultConsentRevocationCloseText(),
                        wh: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }

    function HC(a, b) {
        var c = hC(a.j);
        const d = iC(a.j);
        c = IC(a.l, {
            fc: c,
            fctype: d
        });
        eC(a.j, c, () => {}, () => {});
        b && uC(new vC(a.j), b)
    }

    function IC(a, b) {
        b = { ...b,
            ers: 2
        };
        return Gc(Lc(pb("https://fundingchoicesmessages.google.com/i/%{id}"), {
            id: a
        }), b)
    }
    class JC {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start(a) {
            if (this.j === this.j.top) try {
                jC(this.j, "googlefcPresent"), HC(this, a)
            } catch (b) {}
        }
    };
    const KC = new Set(["ARTICLE", "SECTION"]);
    var LC = class {
        constructor(a) {
            this.j = a
        }
    };

    function MC(a, b) {
        return Array.from(b.classList).map(c => `${a}=${c}`)
    }

    function NC(a) {
        return 0 < a.classList.length
    }

    function OC(a) {
        return KC.has(a.tagName)
    };
    var PC = class {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function QC(a) {
        return va(a) && 1 == a.nodeType && "FIGURE" == a.tagName ? a : (a = a.parentNode) ? QC(a) : null
    };
    var RC = a => {
        var b = a.src;
        const c = a.getAttribute("data-src") || a.getAttribute("data-lazy-src");
        (b && b.startsWith("data:") && c ? c : b || c) ? (a.getAttribute("srcset"), b = (b = QC(a)) ? (b = b.getElementsByTagName("figcaption")[0]) ? b.textContent : null : null, a = new PC(a, b || a.getAttribute("alt") || null)) : a = null;
        return a
    };
    var SC = class {
        constructor() {
            this.map = new Map
        }
        clear() {
            this.map.clear()
        }
        get(a) {
            return [...(this.map.get(a) ? ? [])]
        }
        keys() {
            return this.map.keys()
        }
        add(a, b) {
            let c = this.map.get(a);
            c || this.map.set(a, c = new Set);
            c.add(b)
        }
        get size() {
            let a = 0;
            for (const b of this.map.values()) a += b.size;
            return a
        }
        values() {
            const a = this.map;
            return function*() {
                for (const b of a.values()) yield* b
            }()
        }[Symbol.iterator]() {
            const a = this.map;
            return function*() {
                for (const [b, c] of a) {
                    const d = b,
                        e = c;
                    for (const f of e) yield [d, f]
                }
            }()
        }
    };

    function TC(a) {
        return [a[0],
            [...a[1]]
        ]
    };

    function UC(a) {
        return Array.from(VC(a).map.values()).filter(b => 3 <= b.size).map(b => [...b])
    }

    function WC(a, b) {
        return b.every(c => {
            var d = a.j.getBoundingClientRect(c.j);
            if (d = 50 <= d.height && d.width >= a.A) {
                var e = a.j.getBoundingClientRect(c.j);
                d = a.v;
                e = new Ow(e.left, e.right);
                d = Math.max(d.start, e.start) <= Math.min(d.end, e.end)
            }
            return d && null === fn(a.m, {
                ib: c.j,
                bb: XC,
                Eb: !0
            })
        })
    }

    function YC(a) {
        return UC(a).sort(ZC).find(b => WC(a, b)) || []
    }

    function VC(a) {
        return $C(Array.from(a.win.document.getElementsByTagName("IMG")).map(RC).filter(Bo), b => {
            var c = [...MC("CLASS_NAME", b.j)],
                d = b.j.parentElement;
            d = [...(d ? MC("PARENT_CLASS_NAME", d) : [])];
            var e = b.j.parentElement ? .parentElement;
            e = [...(e ? MC("GRANDPARENT_CLASS_NAME", e) : [])];
            var f = (f = fn(a.l.j, {
                ib: b.j,
                bb: NC
            })) ? MC("NEAREST_ANCESTOR_CLASS_NAME", f) : [];
            return [...c, ...d, ...e, ...f, ...(b.l ? ["HAS_CAPTION=true"] : []), ...(fn(a.l.j, {
                ib: b.j,
                bb: OC
            }) ? ["ARTICLE_LIKE_ANCESTOR=true"] : [])]
        })
    }
    var aD = class {
        constructor(a, b, c, d, e) {
            var f = new Tn;
            this.win = a;
            this.v = b;
            this.A = c;
            this.j = f;
            this.m = d;
            this.l = e
        }
    };

    function $C(a, b) {
        const c = new SC;
        for (const d of a)
            for (const e of b(d)) c.add(e, d);
        return c
    }

    function XC(a) {
        return "A" === a.tagName && a.hasAttribute("href")
    }

    function ZC(a, b) {
        return b.length - a.length
    };

    function bD(a) {
        const b = a.v.parentNode;
        if (!b) throw Error("Image not in the DOM");
        const c = cD(a.m),
            d = dD(a.m);
        c.appendChild(d);
        b.insertBefore(c, a.v.nextSibling);
        a.A.j().l(e => {
            var f = a.m;
            const g = d.getBoundingClientRect(),
                h = g.top - e.top,
                k = g.left - e.left,
                l = g.width - e.width;
            e = g.height - e.height;
            1 > Math.abs(h) && 1 > Math.abs(k) && 1 > Math.abs(l) && 1 > Math.abs(e) || (f = f.getComputedStyle(d), w(d, {
                top: parseInt(f.top, 10) - h + "px",
                left: parseInt(f.left, 10) - k + "px",
                width: parseInt(f.width, 10) - l + "px",
                height: parseInt(f.height, 10) - e + "px"
            }))
        });
        return d
    }

    function eD(a) {
        a.j || (a.j = bD(a));
        return a.j
    }
    var fD = class extends P {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.v = b;
            this.A = c;
            this.j = null
        }
        l() {
            if (this.j) {
                var a = this.j;
                const b = a.parentNode;
                b && b.removeChild(a);
                this.j = null
            }
            super.l()
        }
    };

    function dD(a) {
        const b = a.document.createElement("div");
        w(b, lu(a));
        w(b, {
            position: "absolute",
            left: "0",
            top: "0",
            width: "0",
            height: "0",
            "pointer-events": "none"
        });
        return b
    }

    function cD(a) {
        const b = a.document.createElement("div");
        w(b, lu(a));
        w(b, {
            position: "relative",
            width: "0",
            height: "0"
        });
        return b
    };

    function gD(a) {
        const b = new S(a.dataset.adStatus || null);
        (new MutationObserver(() => {
            b.j(a.dataset.adStatus || null)
        })).observe(a, {
            attributes: !0
        });
        return qn(b)
    };
    const hD = ["Google Material Icons", "Roboto"];

    function iD({
        win: a,
        Aa: b,
        ui: c,
        webPropertyCode: d,
        Ma: e,
        la: f
    }) {
        const g = new Vn(a, c);
        c = new fD(a, c, g);
        zl(c, g);
        a = new jD(a, d, e, b, c, f);
        zl(a, c);
        a.K()
    }
    var jD = class extends P {
        constructor(a, b, c, d, e, f) {
            super();
            this.win = a;
            this.webPropertyCode = b;
            this.Ma = c;
            this.Aa = d;
            this.m = e;
            this.la = f;
            this.j = new S(!1)
        }
        K() {
            const a = kD(this.win, this.webPropertyCode, this.Ma);
            eD(this.m).appendChild(a.ci);
            Vt(this.win, a.xa);
            gD(a.xa).l(b => {
                if (null !== b) {
                    switch (b) {
                        case "unfilled":
                            this.ma();
                            break;
                        case "filled":
                            this.j.j(!0);
                            break;
                        default:
                            this.la ? .reportError("Unhandled AdStatus: " + String(b)), this.ma()
                    }
                    this.la ? .gj(this.Aa, b)
                }
            });
            tn(this.j, !0, () => void a.Ei.j(!0));
            a.Xh.listen(() => void this.ma());
            a.Wh.listen(() => void this.la ? .ej(this.Aa))
        }
    };

    function kD(a, b, c) {
        const d = new S(!1),
            e = a.document.createElement("div");
        w(e, lu(a));
        w(e, {
            position: "absolute",
            top: "50%",
            left: "0",
            transform: "translateY(-50%)",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "background-color": "rgba(0, 0, 0, 0.75)",
            opacity: "0",
            transition: "opacity 0.25s ease-in-out",
            "box-sizing": "border-box",
            padding: "40px 5px 5px 5px"
        });
        T(d, !0, () => void w(e, {
            opacity: "1"
        }));
        T(d, !1, () => void w(e, {
            opacity: "0"
        }));
        const f = a.document.createElement("div");
        w(f, lu(a));
        w(f, {
            display: "block",
            width: "100%",
            height: "100%"
        });
        e.appendChild(f);
        const {
            lh: g,
            Di: h
        } = lD(a, b);
        f.appendChild(g);
        e.appendChild(mD(a, L(c, 1)));
        b = nD(a, L(c, 2));
        e.appendChild(b.Jh);
        b.je.listen(() => void d.j(!1));
        return {
            Ei: d,
            ci: e,
            xa: h,
            Wh: b.je,
            Xh: b.je.delay(a, 450)
        }
    }

    function mD(a, b) {
        const c = a.document.createElement("div");
        w(c, lu(a));
        w(c, {
            position: "absolute",
            top: "10px",
            width: "100%",
            color: "white",
            "font-family": "Roboto",
            "font-size": "12px",
            "line-height": "16px",
            "text-align": "center"
        });
        c.appendChild(a.document.createTextNode(b));
        return c
    }

    function nD(a, b) {
        const c = a.document.createElement("button");
        c.setAttribute("aria-label", b);
        w(c, lu(a));
        w(c, {
            position: "absolute",
            top: "10px",
            right: "10px",
            display: "block",
            cursor: "pointer",
            width: "24px",
            height: "24px",
            "font-size": "24px",
            "user-select": "none",
            color: "white"
        });
        b = a.document.createElement("gm-icon");
        b.className = "google-material-icons";
        b.appendChild(a.document.createTextNode("close"));
        c.appendChild(b);
        const d = new Bn;
        c.addEventListener("click", () => void An(d));
        return {
            Jh: c,
            je: yn(d)
        }
    }

    function lD(a, b) {
        a = Rt(a.document, b, null, null, {});
        return {
            lh: a.ob,
            Di: a.xa
        }
    };

    function oD({
        target: a,
        threshold: b = 0
    }) {
        const c = new pD;
        c.K(a, b);
        return c
    }
    var pD = class extends P {
        constructor() {
            super();
            this.j = new S(!1)
        }
        K(a, b) {
            const c = new IntersectionObserver(d => {
                for (const e of d)
                    if (e.target === a) {
                        this.j.j(e.isIntersecting);
                        break
                    }
            }, {
                threshold: b
            });
            c.observe(a);
            Al(this, () => void c.disconnect())
        }
    };

    function qD(a) {
        const b = rD(a.win, th(a.j, 2) ? ? 250, th(a.j, 3) ? ? 300);
        let c = 1;
        return YC(a.v).map(d => ({
            Aa: c++,
            image: d,
            jb: b(d)
        }))
    }

    function sD(a, b) {
        const c = oD({
            target: b.image.j,
            threshold: uh(a.j) ? ? .8
        });
        a.m.push(c);
        tn(wn(c.j, a.win, th(a.j, 5) ? ? 3E3, d => d), !0, () => {
            if (a.l < (th(a.j, 1) ? ? 1)) {
                iD({
                    win: a.win,
                    Aa: b.Aa,
                    ui: b.image.j,
                    webPropertyCode: a.webPropertyCode,
                    Ma: a.Ma,
                    la: a.la
                });
                a.l++;
                if (!(a.l < (th(a.j, 1) ? ? 1)))
                    for (; a.m.length;) a.m.pop() ? .ma();
                a.la ? .fj(b.Aa)
            }
        })
    }

    function tD(a) {
        const b = qD(a);
        b.filter(uD).forEach(c => void sD(a, c));
        a.la ? .hj(b.map(c => ({
            Aa: c.Aa,
            jb: c.jb
        })))
    }
    var vD = class {
        constructor(a, b, c, d, e, f) {
            this.win = a;
            this.webPropertyCode = b;
            this.j = c;
            this.Ma = d;
            this.v = e;
            this.la = f;
            this.m = [];
            this.l = 0
        }
    };

    function uD(a) {
        return 0 === a.jb.rejectionReasons.length
    }

    function rD(a, b, c) {
        const d = Nm(a);
        return e => {
            e = e.j.getBoundingClientRect();
            const f = [];
            e.width < b && f.push(1);
            e.height < c && f.push(2);
            e.top <= d && f.push(3);
            return {
                Ab: e.width,
                He: e.height,
                Yh: e.top - d,
                rejectionReasons: f
            }
        }
    };

    function wD(a, b) {
        a.Aa = b;
        return a
    }
    var xD = class {
        constructor(a, b, c, d) {
            this.v = a;
            this.webPropertyCode = b;
            this.hostname = c;
            this.m = d;
            this.errorMessage = this.l = this.Aa = this.j = null
        }
    };

    function yD(a, b) {
        return new xD(b, a.webPropertyCode, a.hostname, a.l)
    }

    function zD(a, b, c) {
        var d = a.m++;
        null === a.j ? (a.j = oj(), a = 0) : a = oj() - a.j;
        if (b.j) {
            var e = {
                imcnt: b.j.length
            };
            var f = Math.min(b.j.length, 10);
            for (let g = 0; g < f; g++) {
                const h = `im${g}`;
                e[`${h}_id`] = b.j[g].Aa;
                e[`${h}_s_w`] = b.j[g].jb.Ab;
                e[`${h}_s_h`] = b.j[g].jb.He;
                e[`${h}_s_dbf`] = b.j[g].jb.Yh;
                0 < b.j[g].jb.rejectionReasons.length && (e[`${h}_s_rej`] = b.j[g].jb.rejectionReasons.join(","))
            }
        } else e = null;
        fm("abg::imovad", {
            typ: b.v,
            wpc: b.webPropertyCode,
            hst: b.hostname,
            pvsid: b.m,
            rate: c,
            num: d,
            tim: a,
            ...(null === b.Aa ? {} : {
                imid: b.Aa
            }),
            ...(null === b.l ? {} : {
                astat: b.l
            }),
            ...(null === b.errorMessage ? {} : {
                errm: b.errorMessage
            }),
            ...e
        }, c)
    }
    var AD = class {
        constructor(a, b) {
            var c = gf(t);
            this.webPropertyCode = a;
            this.hostname = b;
            this.l = c;
            this.m = 0;
            this.j = null
        }
        hj(a) {
            var b = yD(this, "fndi");
            b.j = a;
            zD(this, b, 0 < a.length ? 1 : .1)
        }
        fj(a) {
            a = wD(yD(this, "adpl"), a);
            zD(this, a, 1)
        }
        gj(a, b) {
            a = wD(yD(this, "adst"), a);
            a.l = b;
            zD(this, a, 1)
        }
        ej(a) {
            a = wD(yD(this, "adis"), a);
            zD(this, a, 1)
        }
        reportError(a) {
            var b = yD(this, "err");
            b.errorMessage = a;
            zD(this, b, .1)
        }
    };

    function BD(a, b, c) {
        return (a = Mp(a)) && Xg(a, 11) ? c.map(d => d.m()) : c.map(d => d.A(b))
    };
    var CD = class extends O {
        getHeight() {
            return qh(this, 2)
        }
    };

    function DD(a, b) {
        return xh(a, 1, b)
    }

    function ED(a, b) {
        return kh(a, 2, b)
    }
    var FD = class extends O {};
    FD.P = [2];
    var GD = class extends O {
        constructor() {
            super()
        }
    };
    GD.P = [5];
    var HD = class extends O {
            constructor() {
                super()
            }
        },
        ID = [1, 2];
    const JD = new Set([7, 1]);
    var KD = class {
        constructor() {
            this.m = new SC;
            this.v = []
        }
        j(a, b) {
            JD.has(b) || xo(wo(yz(a), c => void this.m.add(c, b)), c => void this.v.push(c))
        }
        l(a, b) {
            for (const c of a) this.j(c, b)
        }
    };

    function LD(a) {
        return new No(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class MD {
        j(a) {
            return LD(Math.floor(a.l))
        }
    };
    var ND = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Xm: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function OD(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."];
        a = xu(a) ? .tagSpecificState[1];
        (a = null == a ? null : 4 === a.debugCard ? .getAdType() ? a.debugCard : null) && a.displayAdLoadedContent(b)
    };
    var PD = class extends O {
        constructor() {
            super()
        }
    };

    function QD(a, b) {
        var c = b.adClient;
        if ("string" !== typeof c || !c) return !1;
        a.Xd = c;
        a.m = !!b.adTest;
        c = b.pubVars;
        va(c) && (a.D = c);
        if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
            a.B = {};
            for (const d of b.fillMessage) a.B[d.key] = d.value
        }
        a.v = b.adWidth;
        a.l = b.adHeight;
        Xi(a.v) && Xi(a.l) || fm("rctnosize", b);
        return !0
    }
    class RD {
        constructor() {
            this.B = this.D = this.m = this.Xd = null;
            this.l = this.v = 0
        }
        C() {
            return !0
        }
    };
    var SD = new W(380025941);

    function TD(a) {
        try {
            a.setItem("__storage_test__", "__storage_test__");
            const b = a.getItem("__storage_test__");
            a.removeItem("__storage_test__");
            return "__storage_test__" === b
        } catch (b) {
            return !1
        }
    }

    function UD(a, b = []) {
        const c = Date.now();
        return Sa(b, d => c - d < 1E3 * a)
    }

    function VD(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || Wa(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = UD(b, d);
            d.length || a ? .removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function WD(a, b) {
        return 0 >= b || null == a || !TD(a) ? null : VD(a, b)
    };
    var XD = (a, b, c) => {
        let d = 0;
        try {
            d |= Hm(a);
            d |= Km(a);
            d |= Im(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = WD(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            X(SD) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    var YD = class extends RD {
        constructor() {
            super(...arguments);
            this.A = !1;
            this.j = null
        }
        C(a) {
            this.A = !!a.enableAma;
            if (a = a.amaConfig) try {
                var b = Op(a)
            } catch (c) {
                b = null
            } else b = null;
            this.j = b;
            return !0
        }
    };
    const ZD = {};

    function $D(a, b, c) {
        let d = aE(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.C.Nb();
        for (; d.ac && d.ac.length;) {
            const h = d.ac.shift();
            var g = Vy(h.ea);
            const k = h.ka.j,
                l = !!c.m.lf || !!c.m.tf || c.Za() || !!c.m.Vf || X(Dr) || k > e;
            g = !g || g <= d.Vc;
            if (!l) c.B ? .j(h, 20);
            else if (!g) c.B ? .j(h, 18);
            else if (bE(c, h, {
                    Bd: d.Vc
                })) {
                e = k;
                if (d.Tc.j.length + 1 >= f) return c.B ? .l(d.ac, 19), !0;
                d = aE(a, c, b);
                if (!d) return !0
            }
        }
        return c.v
    }
    const aE = (a, b, c) => {
        var d = b.C.Nb(),
            e = b.C.v,
            f = b.C;
        f = iA(b.X(), f.j ? f.j.nc : void 0, d);
        if (f.j.length >= d) return b.B ? .l(cE(b, f, {
            types: a
        }, c), 19), null;
        e ? (d = f.l || (f.l = Om(f.m).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - oA(f)) : e = void 0;
        const g = (d = null == e || 50 <= e) ? cE(b, f, {
            types: a
        }, c) : null;
        d || b.B ? .l(cE(b, f, {
            types: a
        }, c), 18);
        return {
            Tc: f,
            Vc: e,
            ac: g
        }
    };
    ZD[2] = Ga(function(a, b) {
        a = cE(b, iA(b.X()), {
            types: a,
            Cb: Rz(b.X())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (bE(b, a[c])) return !0;
        return b.v ? (b.A.push(11), !0) : !1
    }, [0]);
    ZD[5] = Ga($D, [0], 5);
    ZD[10] = Ga(function(a, b) {
        a = [];
        const c = b.Ha;
        c.includes(3) && a.push(2);
        c.includes(1) && a.push(0);
        c.includes(2) && !X(tr) && a.push(1);
        return $D(a, 10, b)
    }, 10);
    ZD[3] = function(a) {
        if (!a.v) return !1;
        var b = cE(a, iA(a.X()), {
            types: [0],
            Cb: Rz(a.X())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (bE(a, b[c])) return !0;
        a.A.push(11);
        return !0
    };
    const dE = a => {
            var b;
            a.m.eh ? b = X(vr) ? new Mz(0, null, [], 8, .3) : new Mz(0, null, [], 3, null) : b = Rz(a.X());
            return {
                types: [0],
                Cb: b
            }
        },
        fE = a => {
            const b = a.X().document.body.getBoundingClientRect().width;
            eE(a, LD(b))
        },
        hE = (a, b) => {
            var c = dE(a);
            c.ij = [5];
            c = cE(a, iA(a.X()), c, 8);
            gE(a, c.reverse(), b)
        },
        gE = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.ka), bE(a, d, {
                        Yd: b
                    })) return !0;
            return !1
        };
    ZD[8] = function(a) {
        var b = a.X().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => ZD[8](a), {
            once: !0
        }), !0;
        if (!a.v) return !1;
        if (!a.yd()) return !0;
        b = dE(a);
        b.ef = [2, 4, 5];
        b = cE(a, iA(a.X()), b, 8);
        const c = new MD;
        if (gE(a, b, c)) return !0;
        if (a.m.dg) switch (a.m.Ng || 0) {
            case 1:
                hE(a, c);
                break;
            default:
                fE(a)
        }
        return !0
    };
    ZD[6] = Ga($D, [2], 6);
    ZD[7] = Ga($D, [1], 7);
    ZD[9] = function(a) {
        const b = aE([0, 2], a, 9);
        if (!b || !b.ac) return a.A.push(17), OD(a.X()), a.v;
        for (const d of b.ac) {
            var c = a.m.De || null;
            null == c ? c = null : (c = Wy(d.ea, new iE, new jE(c, a.X())), c = new Az(c, d.ia(), d.ka));
            if (c && !(Vy(c.ea) > b.Vc) && bE(a, c, {
                    Bd: b.Vc,
                    ie: !0
                })) return a = c.ea.aa, Ty(d.ea, 0 < a.length ? a[0] : null), !0
        }
        a.A.push(17);
        OD(a.X());
        return a.v
    };
    class iE {
        l(a, b, c, d) {
            return Ut(d.document, a, b)
        }
        m(a) {
            return Nm(a) || 0
        }
    };
    var kE = class {
        constructor(a, b, c) {
            this.l = a;
            this.j = b;
            this.Tc = c
        }
        Da(a) {
            return this.j ? JA(this.l, this.j, a, this.Tc) : IA(this.l, a, this.Tc)
        }
        za() {
            return this.j ? 16 : 9
        }
    };
    var lE = class {
        constructor(a) {
            this.Zd = a
        }
        Da(a) {
            return QA(a.document, this.Zd)
        }
        za() {
            return 11
        }
    };
    var mE = class {
        constructor(a) {
            this.ub = a
        }
        Da(a) {
            return NA(this.ub, a)
        }
        za() {
            return 13
        }
    };
    var nE = class {
        Da(a) {
            const b = Nm(a);
            return b ? Ga(SA, b + Sm(a)) : qb
        }
        za() {
            return 12
        }
    };
    var oE = class {
        constructor(a) {
            this.wc = a
        }
        Da() {
            return LA(this.wc)
        }
        za() {
            return 2
        }
    };
    var pE = class {
        constructor(a) {
            this.j = a
        }
        Da() {
            return OA(this.j)
        }
        za() {
            return 3
        }
    };
    var qE = class {
        Da() {
            return RA()
        }
        za() {
            return 17
        }
    };
    var rE = class {
        constructor(a) {
            this.j = a
        }
        Da() {
            return KA(this.j)
        }
        za() {
            return 1
        }
    };
    var sE = class {
        Da() {
            return tb(Ny)
        }
        za() {
            return 7
        }
    };
    var tE = class {
        constructor(a) {
            this.ef = a
        }
        Da() {
            return MA(this.ef)
        }
        za() {
            return 6
        }
    };
    var uE = class {
        constructor(a) {
            this.j = a
        }
        Da() {
            return PA(this.j)
        }
        za() {
            return 5
        }
    };
    var vE = class {
        constructor(a, b) {
            this.minWidth = a;
            this.maxWidth = b
        }
        Da() {
            return Ga(TA, this.minWidth, this.maxWidth)
        }
        za() {
            return 10
        }
    };
    var wE = class {
        constructor(a) {
            this.v = a.l.slice(0);
            this.l = a.j.slice(0);
            this.m = a.m;
            this.A = a.v;
            this.j = a.A
        }
    };

    function xE(a) {
        var b = new yE;
        b.A = a;
        b.l.push(new rE(a));
        return b
    }

    function zE(a, b) {
        a.l.push(new tE(b));
        return a
    }

    function AE(a, b) {
        a.l.push(new oE(b));
        return a
    }

    function BE(a, b) {
        a.l.push(new uE(b));
        return a
    }

    function CE(a, b) {
        a.l.push(new pE(b));
        return a
    }

    function DE(a) {
        a.l.push(new sE);
        return a
    }

    function EE(a) {
        a.j.push(new nE);
        return a
    }

    function FE(a, b = 0, c, d) {
        a.j.push(new kE(b, c, d));
        return a
    }

    function GE(a, b = 0, c = Infinity) {
        a.j.push(new vE(b, c));
        return a
    }

    function HE(a) {
        a.j.push(new qE);
        return a
    }

    function IE(a, b = 0) {
        a.j.push(new mE(b));
        return a
    }

    function JE(a, b) {
        a.m = b;
        return a
    }
    var yE = class {
        constructor() {
            this.m = 0;
            this.v = !1;
            this.l = [].slice(0);
            this.j = [].slice(0)
        }
        build() {
            return new wE(this)
        }
    };
    class jE {
        constructor(a, b) {
            this.l = a;
            this.m = b
        }
        j() {
            var a = this.l,
                b = this.m;
            const c = a.D || {};
            c.google_ad_client = a.Xd;
            c.google_ad_height = Nm(b) || 0;
            c.google_ad_width = Jm(b) || 0;
            c.google_reactive_ad_format = 9;
            b = new PD;
            b = vh(b, 1, a.A);
            a.j && G(b, 2, a.j);
            c.google_rasc = Ch(b);
            a.m && (c.google_adtest = "on");
            return new No(["fsi_container"], c)
        }
    };
    var KE = Go(new Do(0, {})),
        LE = Go(new Do(1, {})),
        ME = a => a === KE || a === LE;

    function NE(a, b, c) {
        Ym(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class OE {
        constructor() {
            this.j = new bn
        }
    };

    function PE(a, b) {
        b && (a.j.apv = H(b, 4), Tg(b, jp, 23) && (a.j.sat = "" + nh(B(b, jp, 23), 1)));
        return a
    }

    function QE(a, b) {
        a.j.afm = b.join(",");
        return a
    }
    var RE = class extends qy {
        constructor(a) {
            super(a);
            this.j = {}
        }
        H(a) {
            this.j.a = a.join(",");
            return this
        }
        G(a) {
            null != a && (this.j.allp = a);
            return this
        }
        Wg(a) {
            if (a) {
                const b = [];
                for (const c of $m(a))
                    if (0 < a.get(c).length) {
                        const d = a.get(c)[0];
                        b.push("(" + [c, d.Jf, d.fh].join() + ")")
                    }
                this.j.fd = b.join(",")
            }
            return this
        }
        v(a) {
            try {
                this.j.su = a.location.hostname
            } catch (b) {
                this.j.su = "_ex"
            }
            a = super.v(a);
            Ac(a, this.j);
            return a
        }
    };

    function SE(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function TE(a, b, c, d = 30) {
        c.length <= d ? a[b] = UE(c) : (a[b] = UE(c.slice(0, d)), a[b + "_c"] = c.length.toString())
    }

    function UE(a) {
        const b = 0 < a.length && "string" === typeof a[0];
        a = a.map(c => c ? .toString() ? ? "null");
        b && (a = a.map(c => ia(c, "replaceAll").call(c, "~", "")));
        return a.join("~")
    }

    function VE(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function WE(a, b) {
        a.l.op = VE(b)
    }

    function XE(a, b, c) {
        TE(a.l, "fap", b);
        a.l.fad = VE(c)
    }

    function YE(a, b, c) {
        TE(a.l, "fmp", b);
        a.l.fmd = VE(c)
    }

    function ZE(a, b, c) {
        TE(a.l, "vap", b);
        a.l.vad = VE(c)
    }

    function $E(a, b, c) {
        TE(a.l, "vmp", b);
        a.l.vmd = VE(c)
    }

    function aF(a, b, c) {
        TE(a.l, "pap", b);
        a.l.pad = VE(c)
    }

    function bF(a, b, c) {
        TE(a.l, "pmp", b);
        a.l.pmd = VE(c)
    }

    function cF(a, b) {
        TE(a.l, "psq", b)
    }
    var dF = class extends RE {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.l = {};
            this.errors = []
        }
        v(a) {
            a = super.v(a);
            Object.assign(a, this.l);
            0 < this.errors.length && (a.e = UE(this.errors));
            return a
        }
    };

    function eF(a, b, c) {
        const d = b.ea;
        Ym(a.j, d) || a.j.set(d, new fF(vo(yz(b)) ? ? ""));
        c(a.j.get(d))
    }

    function gF(a, b) {
        eF(a, b, c => {
            c.j = !0
        })
    }

    function hF(a, b) {
        eF(a, b, c => {
            c.l = !0
        })
    }

    function iF(a, b) {
        eF(a, b, c => {
            c.m = !0
        });
        a.J.push(b.ea)
    }

    function jF(a, b, c) {
        eF(a, b, d => {
            d.Tb = c
        })
    }

    function kF(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) ME(f.Tb ? ? "") ? ++e : (b = a.l.get(f.Tb ? ? "", null), d.push(b));
        return {
            list: d.sort((f, g) => (f ? ? -1) - (g ? ? -1)),
            Ub: e
        }
    }

    function lF(a, b) {
        WE(b, a.l.Ac());
        var c = an(a.j).filter(f => 0 === (f.xb.startsWith(KE) ? 0 : 1)),
            d = an(a.j).filter(f => 1 === (f.xb.startsWith(KE) ? 0 : 1)),
            e = kF(a, f => f.j, c);
        XE(b, e.list, e.Ub);
        e = kF(a, f => f.j, d);
        YE(b, e.list, e.Ub);
        e = kF(a, f => f.l, c);
        ZE(b, e.list, e.Ub);
        e = kF(a, f => f.l, d);
        $E(b, e.list, e.Ub);
        c = kF(a, f => f.m, c);
        aF(b, c.list, c.Ub);
        d = kF(a, f => f.m, d);
        bF(b, d.list, d.Ub);
        cF(b, a.J.map(f => a.j.get(f) ? .Tb).map(f => a.l.get(f) ? ? null))
    }

    function qk() {
        var a = R(mF);
        if (!a.A) return fk();
        const b = ok(nk(mk(lk(kk(jk(ik(hk(ek(dk(new gk, a.A ? ? []), a.H ? ? []), a.B), a.G), a.F), a.O), a.T), a.C ? ? 0), an(a.j).map(c => {
            var d = new ck;
            d = Bh(d, 1, c.xb);
            var e = a.l.get(c.Tb ? ? "", -1);
            d = M(d, 2, e);
            d = wh(d, 3, c.j);
            return wh(d, 4, c.l)
        })), a.J.map(c => a.j.get(c) ? .Tb).map(c => a.l.get(c) ? ? null));
        null != a.m && wh(b, 6, a.m);
        null != a.v && dh(b, 13, pg(a.v), "0");
        return b
    }
    var mF = class {
        constructor() {
            this.v = this.H = this.A = null;
            this.F = this.G = !1;
            this.m = null;
            this.T = this.B = this.O = !1;
            this.C = null;
            this.l = new bn;
            this.j = new bn;
            this.J = []
        }
    };
    class fF {
        constructor(a) {
            this.m = this.l = this.j = !1;
            this.Tb = null;
            this.xb = a
        }
    };
    class nF {
        constructor(a = 0) {
            this.j = a
        }
    };
    class oF {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function pF(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function qF(a, b) {
        const c = a.H.filter(d => $m(d.ed).every(e => d.ed.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.ed.Ac() > e.ed.Ac() ? d : e, c[0])
    }

    function rF(a, b) {
        b = yz(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.getValue();
        if (Ym(a.m, b)) return a.m.get(b);
        var c = Eo(b);
        c = qF(a, c);
        a.m.set(b, c);
        return c
    }
    var sF = class {
        constructor(a) {
            this.j = a;
            this.m = new bn;
            this.H = (B(a, Jp, 2) ? .j() || []).map(b => {
                const c = Eo(L(b, 1)),
                    d = ph(nh(b, 2));
                return {
                    ed: c,
                    Pg: d,
                    xb: L(b, 1)
                }
            });
            this.l = []
        }
        F() {
            const a = R(mF);
            var b = this.v();
            a.A = b;
            b = this.B();
            a.H = b;
            b = this.A();
            null != b && (a.v = b);
            b = !!this.j.m() ? .j() ? .j();
            a.F = b;
            b = new bn;
            for (const c of B(this.j, Jp, 2) ? .j() ? ? []) b.set(L(c, 1), ph(nh(c, 2)));
            a.l = b
        }
        C() {
            return [...this.l]
        }
        v() {
            return [...this.j.j()]
        }
        B() {
            return [...Yg(this.j, 4, ng)]
        }
        A() {
            return B(this.j, Dp, 5) ? .j() ? ? null
        }
        G(a) {
            const b = rF(this, a);
            null !=
                b ? .xb && jF(R(mF), a, b.xb)
        }
        J(a) {
            const b = pt($r) || 0;
            if (0 == a.length || 0 == b) return !0;
            const c = (new no(a)).filter(d => {
                d = rF(this, d) ? .xb || "";
                return "" != d && !(d === KE || d === LE)
            });
            return b <= c.j.length / a.length
        }
    };

    function tF(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => (rF(a.j, c) ? .Pg ? ? Number.MAX_VALUE) - (rF(a.j, d) ? .Pg ? ? Number.MAX_VALUE))
    }

    function uF(a, b) {
        var c = b.ka.j,
            d = Math,
            e = d.min;
        const f = b.ia(),
            g = b.ea.j();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? pF(f.parentElement) : pF(f));
        d = a.m;
        0 > d.j && (d.j = Om(d.l).scrollHeight || 0);
        d = d.j - b.ka.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.ia();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function vF(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => uF(a, c) - uF(a, d))
    }

    function wF(a, b) {
        return b.sort((c, d) => {
            const e = c.ea.G,
                f = d.ea.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? uF(a, c) - uF(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class xF {
        constructor(a, b = 0, c = null) {
            this.m = new oF(a);
            this.l = new nF(b);
            this.j = c && new sF(c)
        }
    };

    function yF(a, b, c = 0, d) {
        var e = a.l;
        for (var f of b.v) e = mo(e, f.Da(a.m), zF(f.za(), c));
        f = e = e.apply(HA(a.m));
        for (const g of b.l) f = mo(f, g.Da(a.m), Ao([AF(g.za(), c), h => {
            d ? .j(h, g.za())
        }]));
        switch (b.m) {
            case 1:
                f = vF(a.j, f);
                break;
            case 2:
                f = wF(a.j, f);
                break;
            case 3:
                const g = R(mF);
                f = tF(a.j, f);
                e.forEach(h => {
                    gF(g, h);
                    a.j.j ? .G(h)
                });
                f.forEach(h => hF(g, h))
        }
        b.A && (f = po(f, Nd(a.m.location.href + a.m.localStorage.google_experiment_mod)));
        1 === b.j ? .length && NE(a.v, b.j[0], {
            Jf: e.j.length,
            fh: f.j.length
        });
        return oo(f)
    }
    class BF {
        constructor(a, b, c = 0, d = null) {
            this.l = new no(a);
            this.j = new xF(b, c, d);
            this.m = b;
            this.v = new OE
        }
        A() {
            this.l.forEach(a => {
                a.l && tt(a.l);
                a.l = null
            })
        }
    }
    const zF = (a, b) => c => Sy(c, b, a),
        AF = (a, b) => c => Sy(c.ea, b, a);

    function CF(a, b, c, d) {
        a: {
            switch (b) {
                case 0:
                    a = DF(EF(c), a);
                    break a;
                case 3:
                    a = DF(c, a);
                    break a;
                case 2:
                    var e = c.lastChild;
                    a = DF(e ? 1 == e.nodeType ? e : EF(e) : null, a);
                    break a
            }
            a = !1
        }
        if (d = !a && !(!d && 2 == b && !FF(c))) b = 1 == b || 2 == b ? c : c.parentNode,
        d = !(b && !br(b) && 0 >= b.offsetWidth);
        return d
    }

    function DF(a, b) {
        if (!a) return !1;
        a = Ge(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function EF(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function FF(a) {
        return !!a.nextSibling || !!a.parentNode && FF(a.parentNode)
    };
    var GF = !fc && !$b();

    function HF(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (GF && a.dataset) {
            if (bc() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var IF = (a, b, c) => {
            if (!b) return null;
            const d = Xd(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = Nm(a);
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var k = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = k - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        JF = a => {
            const b = a.document.body;
            var c = IF(a, b, null);
            if (c) return c;
            if (a.document.body) {
                c = Math.floor(a.document.body.getBoundingClientRect().width);
                for (var d = [{
                        element: a.document.body,
                        depth: 0,
                        height: 0
                    }], e = -1, f = null; 0 <
                    d.length;) {
                    const h = d.pop(),
                        k = h.element;
                    var g = h.height;
                    0 < h.depth && g > e && (e = g, f = k);
                    if (5 > h.depth)
                        for (g = 0; g < k.children.length; g++) {
                            const l = k.children[g],
                                m = l.getBoundingClientRect().width;
                            (null == m || null == c ? 0 : m >= .9 * c && m <= 1.01 * c) && d.push({
                                element: l,
                                depth: h.depth + 1,
                                height: l.getBoundingClientRect().height
                            })
                        }
                }
                c = f
            } else c = null;
            return c ? IF(a, c.parentNode || b, c) : null
        },
        LF = a => {
            let b = 0;
            try {
                b |= Hm(a), fe() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), KF(a) && (b |= 33554432)
            } catch (c) {
                b |=
                    32
            }
            return b
        },
        KF = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == HF(a[b])) return !0;
            return !1
        };

    function MF(a) {
        const b = Mm(a, !0),
            c = Om(a).scrollWidth,
            d = Om(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = Sm(a);
        const g = [];
        var h = [];
        const k = [],
            l = [];
        var m = [],
            n = [],
            p = [];
        let q = 0,
            x = 0,
            v = Infinity,
            D = Infinity,
            E = null;
        var F = eA({
            Qb: !1
        }, a);
        for (var A of F) {
            F = A.getBoundingClientRect();
            const Q = b - (F.bottom + f);
            var J = void 0,
                K = void 0;
            if (A.className && Sb(A.className, "adsbygoogle-ablated-ad-slot")) {
                J = A.getAttribute("google_element_uid");
                K = a.google_sv_map;
                if (!J || !K ||
                    !K[J]) continue;
                J = (K = hj(K[J])) ? K.height : 0;
                K = K ? K.width : 0
            } else if (J = F.bottom - F.top, K = F.right - F.left, 1 >= J || 1 >= K) continue;
            g.push(J);
            k.push(K);
            l.push(J * K);
            A.className && Sb(A.className, "google-auto-placed") ? (x += 1, A.className && Sb(A.className, "pedestal_container") && (E = J)) : (v = Math.min(v, Q), n.push(F), q += 1, h.push(J), m.push(J * K));
            D = Math.min(D, Q);
            p.push(F)
        }
        v = Infinity === v ? null : v;
        D = Infinity === D ? null : D;
        f = NF(n);
        p = NF(p);
        h = OF(b, h);
        n = OF(b, g);
        m = OF(b * c, m);
        A = OF(b * c, l);
        return new PF(a, {
            Zh: e,
            Xe: b,
            Si: c,
            Ri: d,
            Ji: q,
            xh: x,
            Ah: QF(g),
            Bh: QF(k),
            yh: QF(l),
            Ni: f,
            Mi: p,
            Li: v,
            Ki: D,
            re: h,
            qe: n,
            rh: m,
            qh: A,
            Ui: E
        })
    }

    function RF(a, b, c, d) {
        const e = fe() && !(900 <= Jm(a.l));
        d = Sa(d, f => Xa(a.m, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Zh,
            pg_h: SF(a.j.Xe),
            pg_w: SF(a.j.Si),
            pg_hs: SF(a.j.Ri),
            c: SF(a.j.Ji),
            aa_c: SF(a.j.xh),
            av_h: SF(a.j.Ah),
            av_w: SF(a.j.Bh),
            av_a: SF(a.j.yh),
            s: SF(a.j.Ni),
            all_s: SF(a.j.Mi),
            b: SF(a.j.Li),
            all_b: SF(a.j.Ki),
            d: SF(a.j.re),
            all_d: SF(a.j.qe),
            ard: SF(a.j.rh),
            all_ard: SF(a.j.qh),
            pd_h: SF(a.j.Ui),
            dt: e ? "m" : "d"
        }
    }
    class PF {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.m = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function QF(a) {
        return Hd.apply(null, Sa(a, b => 0 < b)) || null
    }

    function OF(a, b) {
        return 0 >= a ? null : Gd.apply(null, b) / a
    }

    function NF(a) {
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

    function SF(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function TF(a, b) {
        b = (Nm(b) || 0) - Sm(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            mA(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function UF(a) {
        const b = {};
        var c = gA({
            Qb: !1,
            qd: !1,
            rd: !1,
            ud: !1
        }, a).map(d => d.getBoundingClientRect()).filter(mA);
        b.yf = c.length;
        c = hA({
            rd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(mA);
        b.ag = c.length;
        c = hA({
            ud: !0
        }, a).map(d => d.getBoundingClientRect()).filter(mA);
        b.Gg = c.length;
        c = hA({
            qd: !0
        }, a).map(d => d.getBoundingClientRect()).filter(mA);
        b.Df = c.length;
        c = (Nm(a) || 0) - Sm(a);
        c = gA({
            Qb: !1
        }, a).map(d => d.getBoundingClientRect()).filter(mA).filter(Fa(VF, null, c));
        b.zf = c.length;
        a = MF(a);
        c = null != a.j.re ? a.j.re : null;
        null !=
            c && (b.xg = c);
        a = null != a.j.qe ? a.j.qe : null;
        null != a && (b.Af = a);
        return b
    }

    function bE(a, b, {
        Bd: c,
        Yd: d,
        ie: e
    } = {}) {
        return bu(997, () => WF(a, b, {
            Bd: c,
            Yd: d,
            ie: e
        }), a.j)
    }

    function cE(a, b, c, d) {
        var e = c.Cb ? c.Cb : a.C;
        const f = Sz(e, b.j.length);
        e = a.m.Bf ? e.j : void 0;
        const g = HE(IE(EE(GE(FE(DE(BE(CE(zE(AE(xE(c.types), a.ga), c.ef || []), a.aa), c.ij || [])), f.Jc || void 0, e, b), c.minWidth, c.maxWidth)), f.ub || void 0));
        a.T && g.j.push(new lE(a.T));
        b = 1;
        a.m.tf ? b = 2 : a.Za() && (b = 3);
        JE(g, b);
        a.m.lf && (g.v = !0);
        return bu(995, () => yF(a.l, g.build(), d, a.B || void 0), a.j)
    }

    function eE(a, b) {
        const c = JF(a.j);
        if (c) {
            const d = Mo(a.J, b),
                e = Rt(a.j.document, a.G, null, null, {}, d);
            e && (wt(e.ob, c, 2, 256), bu(996, () => XF(a, e, d), a.j))
        }
    }

    function YF(a) {
        return a.F ? a.F : a.F = a.j.google_ama_state
    }

    function WF(a, b, {
        Bd: c,
        Yd: d,
        ie: e
    } = {}) {
        const f = b.ea;
        if (f.A) return !1;
        var g = b.ia(),
            h = f.j();
        if (!CF(a.j, h, g, a.v)) return !1;
        h = null;
        f.Ad ? .includes(6) ? (h = Math.round(g.getBoundingClientRect().height), h = new No(null, {
            google_max_responsive_height: null == c ? h : Math.min(c, h),
            google_full_width_responsive: "false"
        })) : h = null == c ? null : new No(null, {
            google_max_responsive_height: c
        });
        c = Oo(z(f.Sd, 2) || 0);
        g = Po(f.G);
        const k = ZF(a, f),
            l = $F(a),
            m = Mo(a.J, f.T ? f.T.j(b.ka) : null, h, d || null, c, g, k, l),
            n = b.fill(a.G, m);
        if (e && !aG(a, n, m) || !bu(996,
                () => XF(a, n, m), a.j)) return !1;
        um(9, [f.G, f.Rb]);
        a.Za() && iF(R(mF), b);
        return !0
    }

    function ZF(a, b) {
        return vo(xo(wz(b).map(Qo), () => {
            a.A.push(18)
        }))
    }

    function $F(a) {
        if (!a.Za()) return null;
        var b = a.l.j.j ? .B();
        if (null == b) return null;
        b = b.join("~");
        a = a.l.j.j ? .A() ? ? null;
        return Ro({
            Rh: b,
            gi: a
        })
    }

    function aG(a, b, c) {
        if (!b) return !1;
        var d = b.xa,
            e = d.style.width;
        d.style.width = "100%";
        var f = d.offsetWidth;
        d.style.width = e;
        d = a.j;
        e = b.xa;
        c = c && c.Bc() || {};
        if (d !== d.top) var g = De(d) ? 3 : 16;
        else if (488 > Jm(d))
            if (d.innerHeight >= d.innerWidth)
                if (g = Jm(d), !g || .3 < (g - f) / g) g = 6;
                else {
                    if (g = "true" != c.google_full_width_responsive) b: {
                        var h = e.parentElement;
                        for (g = Jm(d); h; h = h.parentElement) {
                            const k = Ge(h, d);
                            if (!k) continue;
                            const l = Qe(k.width);
                            if (l && !(l >= g) && "visible" != k.overflow) {
                                g = !0;
                                break b
                            }
                        }
                        g = !1
                    }
                    g = g ? 7 : !0
                }
        else g = 5;
        else g = 4;
        if (!0 !==
            g) f = g;
        else {
            if (!(c = "true" == c.google_full_width_responsive)) a: {
                do
                    if ((c = Ge(e, d)) && "fixed" == c.position) {
                        c = !1;
                        break a
                    }
                while (e = e.parentElement);
                c = !0
            }
            c ? (d = Jm(d), f = d - f, f = d && 0 <= f ? !0 : d ? -10 > f ? 11 : 0 > f ? 14 : 12 : 10) : f = 9
        }
        if (f) {
            a = a.j;
            b = b.xa;
            if (f = Nt(a, b)) b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none", b.style.borderSpacing = b.style.padding = "0", Lt(b, f, "0px"), b.style.width = Jm(a) + "px", Ot(a, b, f), b.style.zIndex = 30;
            return !0
        }
        tt(b.ob);
        return !1
    }

    function XF(a, b, c) {
        if (!b) return !1;
        try {
            Vt(a.j, b.xa, c)
        } catch (d) {
            return tt(b.ob), a.A.push(6), !1
        }
        return !0
    }
    class bG {
        constructor(a, b, c, d, e = {}, f = [], g = !1) {
            this.l = a;
            this.G = b;
            this.j = c;
            this.C = d.Cb;
            this.ga = d.wc || [];
            this.J = d.ii || null;
            this.aa = d.Uh || [];
            this.T = d.Zd || [];
            this.m = e;
            this.v = !1;
            this.O = [];
            this.A = [];
            this.H = this.F = void 0;
            this.Ha = f;
            this.B = g ? new KD : null
        }
        Ca() {
            return this.l
        }
        X() {
            return this.j
        }
        ya(a) {
            this.O.push(a)
        }
        Za() {
            if (0 == (this.l.j.j ? .v().length ? ? 0)) return !1;
            if (0 == (pt($r) || 0)) return !0;
            if (void 0 === this.H) {
                const a = JE(EE(DE(xE([0, 1, 2]))), 1).build(),
                    b = bu(995, () => yF(this.l, a), this.j);
                this.H = this.l.j.j ? .J(b) || !1
            }
            return this.H
        }
        Le() {
            return !!this.m.Tg
        }
        yd() {
            return !KF(this.j)
        }
        wa() {
            return this.B
        }
    }
    const VF = (a, b) => b.top <= a;

    function cG(a, b, c, d, e, f = 0, g = 0) {
        this.Sa = a;
        this.Md = f;
        this.Ld = g;
        this.errors = b;
        this.zb = c;
        this.j = d;
        this.l = e
    };
    var dG = (a, {
        yd: b = !1,
        Le: c = !1,
        lj: d = !1,
        Za: e = !1
    } = {}) => {
        const f = [];
        d && f.push(9);
        if (e) {
            a.includes(4) && !c && b && f.push(8);
            a.includes(1) && f.push(1);
            d = a.includes(3);
            e = a.includes(2) && !X(tr);
            const g = a.includes(1);
            (d || e || g) && f.push(10)
        } else a.includes(3) && f.push(6), a.includes(4) && !c && b && f.push(8), a.includes(1) && f.push(1, 5), a.includes(2) && !X(tr) && f.push(7);
        a.includes(4) && c && b && f.push(8);
        return f
    };

    function eG(a, b, c) {
        a = dG(a, {
            yd: b.yd(),
            Le: b.Le(),
            lj: !!b.m.De,
            Za: b.Za()
        });
        return new fG(a, b, c)
    }

    function gG(a, b) {
        const c = ZD[b];
        return c ? bu(998, () => c(a.j), a.A) : (a.j.ya(12), !0)
    }

    function hG(a, b) {
        return new Promise(c => {
            setTimeout(() => {
                c(gG(a, b))
            })
        })
    }

    function iG(a) {
        a.j.v = !0;
        return Promise.all(a.l.map(b => hG(a, b))).then(b => {
            b.includes(!1) && a.j.ya(5);
            a.l.splice(0, a.l.length)
        })
    }
    class fG {
        constructor(a, b, c) {
            this.v = a.slice(0);
            this.l = a.slice(0);
            this.m = Ya(this.l, 1);
            this.j = b;
            this.A = c
        }
    };
    const jG = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };

    function kG(a) {
        return iG(a).then(() => {
            var b = a.j.l.l.filter(Ny).j.length;
            var c = a.j.O.slice(0);
            var d = a.j;
            d = [...d.A, ...(d.l.j.j ? .C() || [])];
            b = new cG(b, c, d, a.j.l.l.j.length, a.j.l.v.j, a.j.l.l.filter(Ny).filter(Oy).j.length, a.j.l.l.filter(Oy).j.length);
            return new jG(b)
        })
    };
    class lG {
        j() {
            return new No([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class mG {
        j() {
            return new No(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function nG(a) {
        return cr(a.j.document).map(b => {
            const c = new Gy(b, 3);
            b = new Iy(Xt(a.j, b));
            return new My(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class oG {
        constructor(a) {
            var b = new mG;
            this.j = a;
            this.l = b || null
        }
    };
    const pG = {
        qf: "10px",
        he: "10px"
    };

    function qG(a) {
        return Xm(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new My(new Gy(b, 1), new Ey(pG), a.l, !1, 0, [], null, a.j, null))
    }
    class rG {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function sG(a, b) {
        const c = [];
        b.forEach((d, e) => {
            c.push(ia(e, "replaceAll").call(e, "~", "_") + "--" + d.map(f => Number(f)).join("_"))
        });
        TE(a.l, "cnstr", c, 80)
    }
    var tG = class extends qy {
        constructor() {
            super(-1);
            this.l = {}
        }
        v(a) {
            a = super.v(a);
            Object.assign(a, this.l);
            return a
        }
    };

    function uG(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function vG(a, b, c) {
        const d = uG(c.ld, "gapsMeasurementWindow") || uG(c.zc, "gapsPerMeasurementWindow") || uG(c.Fc, "maxGapsToReport");
        return null != d ? to(Error(d)) : c.Cf || -1 != c.zc || -1 != c.Fc ? ro(new wG(a, b, c)) : to(Error("ShouldHaveLimits"))
    }

    function xG(a) {
        return YF(a.m) && YF(a.m).placed || []
    }

    function yG(a) {
        return xG(a).map(b => eo(bo(b.element, a.j)))
    }

    function zG(a) {
        return xG(a).map(b => b.index)
    }

    function AG(a, b) {
        const c = b.ea;
        return !a.B && c.v && null != z(c.v, 8) && 1 == z(c.v, 8) ? [] : c.A ? (c.aa || []).map(d => eo(bo(d, a.j))) : [eo(new co(b.ka.j, 0))]
    }

    function BG(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new co(c, f - c)), c = d)
        }
        return b
    }

    function CG(a, b) {
        b = b.map(c => {
            var d = new CD;
            d = xh(d, 1, c.j);
            c = c.getHeight();
            return xh(d, 2, c)
        });
        return ED(DD(new FD, a), b)
    }

    function DG(a) {
        const b = C(a, CD, 2).map(c => `G${qh(c,1)}~${c.getHeight()}`);
        return `W${qh(a,1)}${b.join("")}`
    }

    function EG(a, b) {
        const c = [];
        let d = 0;
        for (const e of $m(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.F || f.splice(a.A, f.length);
            !a.C && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(CG(e, f));
            d += f.length;
            if (!a.C && d >= a.l) break
        }
        return c
    }

    function FG(a) {
        const b = C(a, FD, 5).map(c => DG(c));
        return `M${qh(a,1)}H${qh(a,2)}C${qh(a,3)}B${Number(!!I(a,4))}${b.join("")}`
    }

    function GG(a) {
        var b = Bz(oo(a.m.l.l), a.j),
            c = yG(a),
            d = new cn(zG(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = AG(a, b[e]);
                c.push(...f)
            }
        c.push(new co(0, 0));
        c.push(eo(new co(Om(a.j).scrollHeight, 0)));
        b = BG(c);
        c = new bn;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.G ? 0 : Math.floor(e.j / a.v), Ym(c, f) || c.set(f, []), c.get(f).push(e);
        b = EG(a, c);
        c = new GD;
        c = xh(c, 1, a.l);
        c = xh(c, 2, a.v);
        c = xh(c, 3, a.A);
        a = vh(c, 4, a.B);
        return kh(a, 5, b)
    }

    function HG(a) {
        a = GG(a);
        return FG(a)
    }
    var wG = class {
        constructor(a, b, c) {
            this.G = -1 == c.ld;
            this.v = c.ld;
            this.F = -1 == c.zc;
            this.A = c.zc;
            this.C = -1 == c.Fc;
            this.l = c.Fc;
            this.B = c.qg;
            this.m = b;
            this.j = a
        }
    };
    const IG = {
        google_ad_channel: !0,
        google_ad_host: !0
    };

    function JG(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        fm("ama", b, .01)
    }

    function KG(a) {
        const b = {};
        Ie(IG, (c, d) => {
            d in a && (b[d] = a[d])
        });
        return b
    };
    const LG = a => {
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
        MG = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var NG = (a, b) => {
            a = Yg(a, 2, hg);
            if (!a) return !1;
            for (let c = 0; c < a.length; c++)
                if (a[c] == b) return !0;
            return !1
        },
        PG = (a, b) => {
            a = MG(LG(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Ke(a),
                d = OG(a);
            return b.find(e => {
                const f = Tg(e, ap, 7) ? lg(z(B(e, ap, 7), 1)) : lg(z(e, 1));
                e = Tg(e, ap, 7) ? oh(B(e, ap, 7), 2) : 2;
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
    const OG = a => {
        const b = {};
        for (;;) {
            b[Ke(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var QG = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                JG(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            JG(a, {
                lserr: 1
            })
        }
    };

    function RG(a) {
        return a.google_ad_modifications = a.google_ad_modifications || {}
    }

    function SG(a, b) {
        a = RG(a);
        a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
        const c = !a.processed_sra_frame_pingbacks[b];
        a.processed_sra_frame_pingbacks[b] = !0;
        return c
    };

    function TG() {
        if (UG) return UG;
        const a = wi() || window,
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? UG = b : a.google_persistent_state_async = UG = new VG
    }

    function WG(a, b, c) {
        b = XG[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(), a[b]) : d
    }

    function Z(a, b, c) {
        return WG(a, b, () => c)
    }

    function YG(a, b, c) {
        return a.S[XG[b] || "google_ps_" + b] = c
    }

    function ZG(a, b) {
        return YG(a, b, Z(a, b, 0) + 1)
    }

    function $G() {
        var a = TG();
        return Z(a, 20, {})
    }

    function aH() {
        var a = TG();
        const b = Z(a, 31, !1);
        b || YG(a, 31, !0);
        return !b
    }

    function bH() {
        var a = TG();
        return Z(a, 26)
    }

    function cH() {
        var a = TG();
        return Z(a, 28, [])
    }
    class VG {
        constructor() {
            this.S = {}
        }
    }
    var UG = null;
    const XG = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    var dH = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_daaos_ts: "daaos",
            google_erank: "epr",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl",
            easpi: "easpi",
            asptt: "asptt",
            asro: "asro",
            asiscm: "asiscm",
            sugawps: "aseaascu",
            asla: "aslmt",
            asaa: "asamt",
            sedf: "asedf",
            sefa: "asefa",
            sepiia: "asepiia",
            seiel: "aseiel",
            ascmds: "ascmds",
            vmsli: "itsi"
        },
        eH = a => (a = a.innerText || a.innerHTML) &&
        (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        fH = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        gH = a => {
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
                        const b =
                            a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };
    async function hH(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d, e) => {
            const f = a.setInterval(() => {
                --c ? b() && (a.clearInterval(f), d()) : (a.clearInterval(f), e())
            }, 200)
        })
    };

    function iH(a) {
        const b = a.j.pc;
        return null !== b && 0 !== b ? b : a.j.pc = gf(a.win)
    }

    function jH(a) {
        var b = a.j.wpc;
        if (null === b || "" === b) {
            b = a.j;
            var c = a.win;
            if (c.google_ad_client) a = String(c.google_ad_client);
            else {
                if (null == (a = RG(c).head_tag_slot_vars ? .google_ad_client ? ? c.document.querySelector(".adsbygoogle[data-ad-client]") ? .getAttribute("data-ad-client"))) {
                    b: {
                        a = c.document.getElementsByTagName("script");c = c.navigator && c.navigator.userAgent || "";c = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(c) ||
                        /i(phone|pad|pod)/i.test(c) && /applewebkit/i.test(c) && !/version|safari/i.test(c) && !fj() ? eH : fH;
                        for (var d = a.length - 1; 0 <= d; d--) {
                            var e = a[d];
                            if (!e.google_parsed_script_for_pub_code && (e.google_parsed_script_for_pub_code = !0, e = c(e))) {
                                a = e;
                                break b
                            }
                        }
                        a = null
                    }
                    if (a) {
                        c = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                        for (d = {}; e = c.exec(a);) d[e[1]] = gH(e[2]);
                        a = d;
                        a = a.google_ad_client ? a.google_ad_client : ""
                    } else a = ""
                }
                a = a ? ? ""
            }
            b = b.wpc = a
        }
        return b
    }

    function kH(a, b) {
        var c = new ll,
            d = iH(a);
        c = M(c, 1, d).ec(jH(a));
        c = M(c, 3, a.j.sd);
        return M(c, 7, Math.round(b || a.win.performance.now()))
    }
    async function lH(a) {
        await hH(a.win, () => !(!iH(a) || !jH(a)))
    }
    async function mH(a, b, c) {
        if (a.l && c.length && !a.j.lgdp.includes(Number(b))) {
            a.j.lgdp.push(Number(b));
            var d = a.win.performance.now();
            await lH(a);
            var e = a.va;
            a = kH(a, d);
            d = new Ek;
            b = N(d, 1, b);
            c = ch(b, 2, c, ig);
            c = jh(a, 9, ml, c);
            ul(e, c)
        }
    }
    async function nH(a, b) {
        await lH(a);
        var c = kH(a);
        b = jh(c, 5, ml, b);
        a.l && !a.j.le.includes(2) && (a.j.le.push(2), ul(a.va, b))
    }
    async function oH(a, b) {
        await lH(a);
        var c = a.va;
        a = kH(a);
        a = M(a, 3, 1);
        b = jh(a, 6, ml, b);
        ul(c, b)
    }
    async function pH(a, b) {
        if (a.l) {
            await lH(a);
            var c = a.va;
            a = kH(a);
            b = jh(a, 11, ml, b);
            ul(c, b)
        }
    }
    var qH = class {
        constructor(a, b) {
            this.win = wi() || window;
            this.m = X(nr) ? b ? ? new Gl(this.win) : void 0;
            this.va = a ? ? new Jl("m202310100101", 100, 100, !0, this.m);
            this.j = WG(TG(), 33, () => {
                const c = pt(jr);
                return {
                    sd: c,
                    ssp: 0 < c && He() < 1 / c,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null
                }
            })
        }
        get l() {
            return this.j.ssp
        }
        get dd() {
            return this.j.cu
        }
        set dd(a) {
            this.j.cu = a
        }
    };
    var sH = (a, b, c, d, e, f = null, g = null) => {
            rH(a, new sy(a), b, c, d, e, f, g)
        },
        rH = (a, b, c, d, e, f, g = null, h = null) => {
            if (c)
                if (d) {
                    var k = fB(d, e);
                    try {
                        const l = new tH(a, b, c, d, e, k, f, g, h);
                        bu(990, () => uH(l), a)
                    } catch (l) {
                        tm() && um(15, [l]), ry(b, Up, py(QE(PE((new RE(0)).ec(c), d), k).ya(1), l)), nH(R(qH), uk(new Dk, Nj(1)))
                    }
                } else ry(b, Up, (new RE(0)).ec(c).ya(8)), nH(R(qH), uk(new Dk, Nj(8)));
            else ry(b, Up, (new RE(0)).ya(9)), nH(R(qH), uk(new Dk, Nj(9)))
        };

    function uH(a) {
        a.F.forEach(b => {
            switch (b) {
                case 0:
                    bu(991, () => vH(a), a.j);
                    break;
                case 1:
                    bu(1073, () => {
                        const c = X(Or);
                        WA(new cB(a.j, a.B, a.l, a.A, a.m.Z, c))
                    }, a.j);
                    break;
                case 5:
                    bu(1137, () => {
                        uy(new vy(a.j, a.B, a.l, a.A))
                    }, a.j);
                    break;
                case 2:
                    wH(a);
                    break;
                case 6:
                    a.runAutoGames();
                    break;
                case 7:
                    bu(1203, () => {
                        var c = B(a.l, Cp, 34);
                        if (c) {
                            var d = a.j,
                                e = a.A,
                                f = c.l();
                            c = new AD(e, d.location.hostname);
                            const k = B(f, Bp, 1);
                            if (k)
                                if (f = B(f, Ap, 2)) {
                                    go(d, hD);
                                    const l = new hn;
                                    var g = d.innerWidth;
                                    var h = .375 * g;
                                    g = new Ow(h, g - h);
                                    h = d.innerWidth;
                                    h = 900 <=
                                        Jm(d) ? .2 * h : .5 * h;
                                    tD(new vD(d, e, k, f, new aD(d, g, h, l, new LC(l)), c))
                                } else c.reportError("No messages");
                            else c.reportError("No settings")
                        }
                    }, a.j)
            }
        })
    }

    function vH(a) {
        if (Lp(a.l) && 1 === oh(Lp(a.l), 1)) {
            var b = B(Lp(a.l), So, 6);
            b && 2 === z(b, 1) && (Wt(a.j), a.C = "b")
        }
        var c = X(vr) ? void 0 : a.m.Yi;
        b = null;
        b = X(vr) ? Rz(a.j) : Pz(a.j, c);
        if (a.m.Z && Tg(a.m.Z, $o, 10)) {
            var d = Wg(a.m.Z.j(), 1);
            null !== d && void 0 !== d && (b = Gz(a.j, d, c));
            X(Mr) && 2 === a.m.Z.j() ? .j() && (b = Oz(a.m.Z.j(), b))
        }
        Tg(a.l, Xo, 26) && (b = Tz(b, B(a.l, Xo, 26), a.j));
        b = Vz(b, a.j);
        c = a.m.Z ? Yg(a.m.Z, 6, hg) : [];
        d = a.m.Z ? C(a.m.Z, fp, 5) : [];
        const e = a.m.Z ? Yg(a.m.Z, 2, hg) : [],
            f = bu(993, () => {
                var g = a.l,
                    h = C(g, yp, 1),
                    k = a.m.Z && NG(a.m.Z, 1);
                k = X(Xr) ? "" : k ?
                    "text_image" : "text";
                var l = new lG,
                    m = Ly(h, a.j, {
                        Ch: l,
                        Bi: new Jy(k)
                    });
                h.length != m.length && a.H.push(13);
                m = m.concat(qG(new rG(a.j, l)));
                h = 0;
                l = X(Jr);
                var n = !1;
                if (Lp(g) && 1 === oh(Lp(g), 1)) {
                    var p = B(Lp(g), So, 6);
                    p && (h = mh(p, 2) || 0, 1 === z(p, 1) && (n = !0))
                }
                p = B(g, Kp, 24) ? .m() ? .j() ? .j() || !1;
                if (l || n || p) l = nG(new oG(a.j)), n = R(mF), m = m.concat(l), n.O = !0, n.C = l.length, "n" === a.C && (a.C = B(g, Kp, 24) ? .j() ? .length ? "o" : "p");
                l = X(Mr) && 2 === a.m.Z.j() ? .j() && a.m.Z.j() ? .m();
                l = X(qr) || l;
                a: {
                    if (n = B(g, up, 6))
                        for (q of C(n, tp, 1))
                            if (Tg(q, Co, 4)) {
                                var q = !0;
                                break a
                            }
                    q = !1
                }
                l && q ? (q = m.concat, l = a.j, (n = B(g, up, 6)) ? (l = oz(C(n, tp, 1), l), k = BD(g, k, l)) : k = [], k = q.call(m, k)) : (q = m.concat, l = a.j, (n = B(g, up, 6)) ? (l = nz(C(n, tp, 1), l), k = BD(g, k, l)) : k = [], k = q.call(m, k));
                m = k;
                g = B(g, Kp, 24);
                return new BF(m, a.j, h, g)
            }, a.j);
        a.v = new bG(f, a.A, a.j, {
            Cb: b,
            ii: a.O,
            wc: a.m.wc,
            Uh: c,
            Zd: d
        }, xH(a), e, X(Ir));
        YF(a.v) ? .optimization ? .ablatingThisPageview && !a.v.Za() && (Wt(a.j), R(mF).B = !0, a.C = "f");
        a.G = eG(e, a.v, a.j);
        bu(992, () => kG(a.G), a.j).then(bu(994, () => a.ga.bind(a), a.j), a.aa.bind(a))
    }

    function wH(a) {
        const b = B(a.l, zp, 18);
        b && bC(new cC(a.j, new JC(a.j, a.A), b, new ov(a.j), C(a.l, yp, 1)))
    }

    function xH(a) {
        const b = X(Lr);
        if (!Mp(a.l)) return {
            lf: b,
            tf: !1,
            Vf: !1,
            eh: !1,
            dg: !1,
            Tg: !1,
            Vi: 0,
            Ng: 0,
            Bf: yH(a),
            De: a.J
        };
        const c = Mp(a.l);
        return {
            lf: b || I(c, 14, !1),
            tf: I(c, 2, !1),
            Vf: I(c, 3, !1),
            eh: I(c, 4, !1),
            dg: I(c, 5, !1),
            Tg: I(c, 6, !1),
            Vi: ph(Wg(c, 8)),
            Ng: z(c, 10),
            Bf: yH(a),
            De: a.J
        }
    }

    function yH(a) {
        return X(Br) || X(Mr) && 2 === a.m.Z ? .j() ? .j() ? !1 : a.m.Z && Tg(a.m.Z, $o, 10) ? .5 <= (Wg(a.m.Z.j(), 1) || 0) : !0
    }

    function zH(a, b) {
        for (var c = oy(oy(new RE(b.Sa), b.errors), a.H), d = b.zb, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.B.length; g++)
                if (c.B[g] == f) break a;c.B.push(f)
        }
        c.j.pp = b.Ld;
        c.j.ppp = b.Md;
        c.j.ppos = b.placementPositionDiffs;
        c.j.eatf = b.rc;
        c.j.eatfAbg = b.sc;
        c.j.reatf = b.Ob;
        c = QE(PE(c.H(a.G.v.slice(0)), a.l), a.F).ec(a.A);
        if (d = b.Ia) c.j.as_count = d.yf, c.j.d_count = d.ag, c.j.ng_count = d.Gg, c.j.am_count = d.Df, c.j.atf_count = d.zf, c.j.mdns = SE(d.xg), c.j.alldns = SE(d.Af);
        c = c.G(b.Zb).Wg(b.kd);
        d = b.Xe;
        null != d && (c.j.pgh = d);
        c.j.abl =
            b.lg;
        c.j.rr = a.C;
        void 0 !== b.exception && py(c, b.exception).ya(1);
        return c
    }

    function AH(a, b) {
        var c = zH(a, b);
        ry(a.B, 0 < b.errors.length || 0 < a.H.length || void 0 !== b.exception ? Up : Tp, c);
        if (B(a.l, Kp, 24)) {
            a.v.l.j.j ? .F();
            b = YF(a.v);
            const d = R(mF);
            d.m = !!b ? .optimization ? .ablationFromStorage;
            b ? .optimization ? .ablatingThisPageview && (d.G = !0);
            d.T = !!b ? .optimization ? .availableAbg;
            b = R(mF);
            c = new dF(c);
            b.A ? (c.l.sl = UE(b.A ? ? []), c.l.daaos = UE(b.H ? ? []), c.l.ab = VE(b.G), c.l.rr = VE(b.O), c.l.oab = VE(b.F), null != b.m && (c.l.sab = VE(b.m)), b.B && (c.l.fb = VE(b.B)), c.l.ls = VE(b.T), WE(c, b.l.Ac()), null != b.C && (c.l.rp = VE(b.C)),
                null != b.v && (c.l.expl = VE(b.v)), lF(b, c)) : c.errors.push("irr");
            ry(a.B, Wp, c)
        }
        c = a.v ? .wa();
        X(Ir) && null != c && (c = new Map([...c.m.map.entries()].map(TC)), b = new tG, sG(b, c), ry(a.B, $p, b))
    }

    function BH(a, b) {
        const c = R(qH);
        if (c.l) {
            var d = new Dk,
                e = b.zb.filter(g => null !== g),
                f = a.H.concat(b.errors, b.exception ? [1] : []).filter(g => null !== g);
            yk(wk(Bk(Ak(zk(xk(rk(tk(vk(sk(d, a.G.v.slice(0).map(g => {
                var h = new Mj;
                return Rg(h, 1, gg(g))
            })), e.map(g => {
                var h = new Pj;
                return Rg(h, 1, gg(g))
            })), f.map(g => Nj(g))), B(a.l, jp, 23) ? .j()), b.Sa).G(b.Zb), b.Ob), b.rc), b.sc), a.F.map(g => g.toString())), Wj(Vj(Uj(Tj(Sj(Rj(Qj(new Xj, b.Ia ? .yf), b.Ia ? .ag), b.Ia ? .Gg), b.Ia ? .Df), b.Ia ? .zf), b.Ia ? .xg), b.Ia ? .Af));
            if (b.kd)
                for (let g of $m(b.kd)) {
                    e =
                        new bh;
                    for (let h of b.kd.get(g)) bk(e, Zj(Yj(new ak, h.Jf), h.fh));
                    Ck(d).set(g.toString(), e)
                }
            B(a.l, Kp, 24) && pk(d);
            nH(c, d)
        }
    }

    function CH(a) {
        return Lp(a.l) && 1 === oh(Lp(a.l), 1) ? !(B(Lp(a.l), So, 6) && 1 <= (mh(B(Lp(a.l), So, 6), 3) || 0)) : !1
    }

    function DH(a) {
        if (CH(a)) {
            a = a.v;
            var b = hA({
                rd: !0,
                ud: !0
            }, a.j);
            a = 0 < TF(b, a.j)
        } else a = a.v.j, b = gA({
            Qb: !1,
            qd: !1
        }, a), a = 0 < TF(b, a);
        return a
    }

    function EH(a, b) {
        try {
            X(sr) && a.v ? .Ca() ? .A()
        } catch (c) {
            ry(a.B, Zp, py(QE(PE((new RE(b)).ec(a.A), a.l), a.F).ya(14), c))
        }
    }

    function FH(a, b, c) {
        {
            var d = YF(a.v),
                e = b.j;
            const f = e.j,
                g = e.Ld;
            let h = e.Sa,
                k = e.Md,
                l = e.errors.slice(),
                m = e.zb.slice(),
                n = b.exception;
            const p = RG(a.j).had_ads_ablation ? ? !1;
            d ? (d.numAutoAdsPlaced ? h += d.numAutoAdsPlaced : a.G.m && m.push(13), void 0 !== d.exception && (n = d.exception), d.numPostPlacementsPlaced && (k += d.numPostPlacementsPlaced), c = {
                Sa: h,
                Ld: g,
                Md: k,
                Zb: f,
                errors: e.errors.slice(),
                zb: m,
                exception: n,
                Ob: c,
                rc: !!d.eatf,
                sc: !!d.eatfAbg,
                lg: p
            }) : (m.push(12), a.G.m && m.push(13), c = {
                Sa: h,
                Ld: g,
                Md: k,
                Zb: f,
                errors: l,
                zb: m,
                exception: n,
                Ob: c,
                rc: !1,
                sc: !1,
                lg: p
            })
        }
        c.Ia = UF(a.v.j);
        if (b = b.j.l) c.kd = b;
        c.Xe = Om(a.j).scrollHeight;
        if (tm()) {
            d = oo(a.v.l.l);
            b = [];
            for (const f of d) {
                d = {};
                e = f.J;
                for (const g of $m(e)) d[g] = e.get(g);
                d = {
                    anchorElement: Py(f),
                    position: f.j(),
                    clearBoth: f.H,
                    locationType: f.Rb,
                    placed: f.A,
                    placementProto: f.v ? f.v.toJSON() : null,
                    articleStructure: f.B ? f.B.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            um(14, [{
                placementIdentifiers: b
            }, a.v.G, c.Ia])
        }
        return c
    }

    function GH(a, b) {
        var c = a.v.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Zb;
        c.numAutoAdsPlaced = b.Sa;
        c.hasAtfAd = b.Ob;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.v && (a = vG(a.j, a.v, {
            ld: -1,
            zc: -1,
            Fc: -1,
            qg: !0,
            Cf: !0
        }), null != a.j ? (c.placementPositionDiffs = HG(a.getValue()), b = GG(a.getValue()), a = new HD, a = jh(a, 2, ID, b), c.placementPositionDiffsReport = Ch(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new HD, a = eh(a, 1, ID, rg(b)), c.placementPositionDiffsReport = Ch(a)))
    }

    function HH(a, b) {
        AH(a, {
            Sa: 0,
            Zb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Ob: void 0,
            rc: void 0,
            sc: void 0,
            Ia: void 0
        });
        BH(a, {
            Sa: 0,
            Zb: void 0,
            errors: [],
            zb: [],
            exception: b,
            Ob: void 0,
            rc: void 0,
            sc: void 0,
            Ia: void 0
        })
    }
    class tH {
        constructor(a, b, c, d, e, f, g, h, k) {
            this.j = a;
            this.B = b;
            this.A = c;
            this.l = d;
            this.m = e;
            this.F = f;
            this.O = h || null;
            this.H = [];
            this.J = k;
            this.T = g;
            this.C = "n"
        }
        runAutoGames() {
            const a = B(this.l, kp, 32);
            a && this.T.runAutoGames({
                win: this.j,
                webPropertyCode: this.A,
                If: a,
                Lb: (B(this.l, rp, 33) ? .j() ? .l() ? ? null) || fi().l()
            })
        }
        ga(a) {
            try {
                EH(this, a.j.Sa);
                const b = DH(this) || CH(this) ? DH(this) : void 0;
                Sp({
                    ve: b
                }, this.j);
                const c = FH(this, a, DH(this));
                Tg(this.l, ip, 25) && Xg(B(this.l, ip, 25), 1) && GH(this, c);
                AH(this, c);
                BH(this, c);
                em(753, () => {
                    if (X(wr) &&
                        null != this.v) {
                        var d = vG(this.j, this.v, {
                                ld: pt(Hr),
                                zc: pt(Gr),
                                Fc: pt(yr),
                                qg: !0,
                                Cf: !1
                            }),
                            e = yc(c);
                        null != d.j ? (d = HG(d.getValue()), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = zH(this, e);
                        ry(this.B, Vp, e)
                    }
                })()
            } catch (b) {
                HH(this, b)
            }
        }
        aa(a) {
            EH(this, 0);
            HH(this, a)
        }
    };
    var IH = class extends O {},
        JH = Ih(IH);

    function KH(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? uo(() => JH(c)) : ro(null)
    };

    function LH(a) {
        this.j = a || {
            cookie: ""
        }
    }
    r = LH.prototype;
    r.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.Yn, g = c.oj || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Oe);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    r.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Jb(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.slice(c.length);
            if (f == a) return ""
        }
        return b
    };
    r.isEmpty = function() {
        return !this.j.cookie
    };
    r.Ac = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    r.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Jb(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--) a = b[c], this.get(a), this.set(a, "", {
            Oe: 0,
            path: void 0,
            domain: void 0
        })
    };

    function MH(a, b = window) {
        if (I(a, 5)) try {
            return b.localStorage
        } catch {}
        return null
    }

    function NH(a) {
        return "null" !== a.origin
    }

    function OH(a, b, c) {
        b = I(b, 5) && NH(c) ? c.document.cookie : null;
        return null === b ? null : (new LH({
            cookie: b
        })).get(a) || ""
    }

    function PH(a, b, c, d, e) {
        I(b, 5) && NH(c) && (b = new LH(c.document), b.get(a), b.set(a, "", {
            Oe: 0,
            path: d,
            domain: e
        }))
    };

    function QH(a, b) {
        return vh(a, 5, b)
    }
    var RH = class extends O {
        constructor() {
            super()
        }
        j() {
            return I(this, 6)
        }
    };
    RH.P = [10];
    var UH = ({
        win: a,
        wd: b,
        og: c = !1,
        pg: d = !1
    }) => SH({
        win: a,
        wd: b,
        og: c,
        pg: d
    }) ? (b = Z(TG(), 24)) ? TH(a, QH(new RH, yC(b))) : to(Error("tcunav")) : TH(a, QH(new RH, !0));

    function SH({
        win: a,
        wd: b,
        og: c,
        pg: d
    }) {
        if (!(d = !d && CC(new GC(a)))) {
            if (c = !c) {
                if (b) {
                    a = KH(a);
                    if (null != a.j)
                        if ((a = a.getValue()) && null != z(a, 1)) b: switch (a = z(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else gm(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function TH(a, b) {
        return (a = MH(b, a)) ? ro(a) : to(Error("unav"))
    };
    var VH = class extends O {};
    class WH {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.v = b;
            this.B = c;
            this.l = !1;
            this.m = d;
            this.A = e
        }
    };
    class XH {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function YH() {
        const {
            promise: a,
            resolve: b
        } = new XH;
        return {
            promise: a,
            resolve: b
        }
    };

    function ZH(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = YH();
        b[a] = d;
        c();
        return d
    }

    function $H(a, b, c) {
        return ZH(a, b, () => {
            Ee(b.document, c)
        }).promise
    };
    var aI = class {
        constructor(a) {
            this.lb = a
        }
        runAutoGames({
            win: a,
            webPropertyCode: b,
            If: c,
            Lb: d
        }) {
            hm(1116, $H(12, a, this.lb).then(e => {
                e.runAutoGames({
                    win: a,
                    webPropertyCode: b,
                    serializedAutoGamesConfig: Ch(c),
                    serializedFloatingToolbarMessages: Ch(d)
                })
            }))
        }
    };
    var bI = {
            Ak: "google_ads_preview",
            jl: "google_mc_lab",
            Fl: "google_anchor_debug",
            El: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            bm: "google_scr_debug",
            dm: "google_ia_debug_allow_onclick",
            Am: "googleads",
            kh: "google_pedestal_debug",
            Tm: "google_responsive_slot_preview",
            Sm: "google_responsive_dummy_ad",
            nk: "google_audio_sense",
            rk: "google_auto_gallery",
            vk: "google_auto_storify_swipeable",
            tk: "google_auto_storify_scrollable",
            qk: "google_games_single_game",
            pk: "google_games_catalog"
        },
        cI = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };

    function dI(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = eI(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function eI(a) {
        let b = "";
        Ie(a.split("_"), c => {
            b += c.substr(0, 2)
        });
        return b
    }

    function fI() {
        var a = t.location;
        let b = !1;
        Ie(bI, c => {
            dI(a, c) && (b = !0)
        });
        return b
    }

    function gI(a, b) {
        switch (a) {
            case 1:
                return dI(b, "google_ia_debug");
            case 2:
                return dI(b, "google_bottom_anchor_debug");
            case 3:
                return dI(b, "google_anchor_debug") || dI(b, "googleads");
            case 4:
                return dI(b, "google_scr_debug")
        }
    };

    function hI({
        win: a,
        webPropertyCode: b,
        lb: c
    }) {
        dI(a.location, "google_games_single_game") ? iI(a, b, 1, c) : dI(a.location, "google_games_catalog") && iI(a, b, 2, c)
    }

    function iI(a, b, c, d) {
        var e = new kp;
        c = Rg(e, 1, gg(c));
        (new aI(d)).runAutoGames({
            win: a,
            webPropertyCode: b,
            If: c,
            Lb: fi().l()
        })
    };

    function jI(a) {
        var b = new kI;
        return yh(b, 1, a)
    }
    var kI = class extends O {
        constructor() {
            super()
        }
        jg() {
            return rh(this, 3)
        }
    };
    const lI = {
        "-": 0,
        Y: 2,
        N: 1
    };
    const mI = {
            "-": 0,
            Y: 2,
            N: 1
        },
        nI = {
            [0]: "-",
            [2]: "Y",
            [1]: "N"
        };
    var oI = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return qh(this, 2)
        }
    };
    oI.P = [3];

    function pI(a) {
        return a.includes("~") ? a.split("~").slice(1) : []
    };

    function qI(a) {
        return qf(2 > (a.length + 3) % 4 ? a + "A" : a).map(b => b.toString(2).padStart(8, "0")).join("")
    }

    function rI(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        return parseInt(a, 2)
    }

    function sI(a) {
        if (!/^[0-1]+$/.test(a)) throw Error(`Invalid input [${a}] not a bit string.`);
        const b = [1, 2, 3, 5];
        let c = 0;
        for (let d = 0; d < a.length - 1; d++) b.length <= d && b.push(b[d - 1] + b[d - 2]), c += parseInt(a[d], 2) * b[d];
        return c
    };

    function tI(a) {
        var b = qI(a + "A"),
            c = rI(b.slice(0, 6));
        a = rI(b.slice(6, 12));
        var d = new oI;
        c = yh(d, 1, c);
        a = yh(c, 2, a);
        b = b.slice(12);
        c = rI(b.slice(0, 12));
        d = [];
        let e = b.slice(12).replace(/0+$/, "");
        for (let k = 0; k < c; k++) {
            if (0 === e.length) throw Error(`Found ${k} of ${c} sections [${d}] but reached end of input [${b}]`);
            var f = 0 === rI(e[0]);
            e = e.slice(1);
            var g = uI(e, b),
                h = 0 === d.length ? 0 : d[d.length - 1];
            h = sI(g) + h;
            e = e.slice(g.length);
            if (f) d.push(h);
            else {
                f = uI(e, b);
                g = sI(f);
                for (let l = 0; l <= g; l++) d.push(h + l);
                e = e.slice(f.length)
            }
        }
        if (0 <
            e.length) throw Error(`Found ${c} sections [${d}] but has remaining input [${e}], entire input [${b}]`);
        return ch(a, 3, d, ig)
    }

    function uI(a, b) {
        const c = a.indexOf("11");
        if (-1 === c) throw Error(`Expected section bitstring but not found in [${a}] part of [${b}]`);
        return a.slice(0, c + 2)
    };
    var vI = class extends O {
        constructor() {
            super()
        }
    };
    var wI = class extends O {
        constructor() {
            super()
        }
    };

    function xI(a) {
        var b = new yI;
        return yh(b, 1, a)
    }
    var yI = class extends O {
        getVersion() {
            return qh(this, 1)
        }
    };
    var zI = class extends O {
        constructor() {
            super()
        }
    };

    function AI(a) {
        var b = new BI;
        return G(b, 1, a)
    }
    var BI = class extends O {
        constructor() {
            super()
        }
    };
    const CI = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        DI = CI.reduce((a, b) => a + b);

    function EI(a) {
        if (0 === a.length) throw Error("Cannot decode empty USCA section string");
        var b = a.split(".");
        if (2 < b.length) throw Error(`Expected at most 1 sub-section but got ${b.length-1} when decoding ${a}`);
        var c = qI(b[0]),
            d = rI(c.slice(0, 6));
        c = c.slice(6);
        if (1 !== d) throw Error(`Unable to decode unsupported USCA Section specification version ${d} - only version 1 is supported.`);
        if (c.length < DI)
            if (c.length + 8 >= DI) c += "00000000";
            else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${DI} but was ${c.length+8}`);
        var e = 0;
        a = [];
        for (let f = 0; f < CI.length; f++) {
            const g = CI[f];
            a.push(rI(c.slice(e, e + g)));
            e += g
        }
        c = xI(d);
        d = a.shift();
        c = N(c, 2, d);
        d = a.shift();
        c = N(c, 3, d);
        d = a.shift();
        c = N(c, 4, d);
        d = a.shift();
        c = N(c, 5, d);
        d = a.shift();
        c = N(c, 6, d);
        d = new wI;
        e = a.shift();
        d = N(d, 1, e);
        e = a.shift();
        d = N(d, 2, e);
        e = a.shift();
        d = N(d, 3, e);
        e = a.shift();
        d = N(d, 4, e);
        e = a.shift();
        d = N(d, 5, e);
        e = a.shift();
        d = N(d, 6, e);
        e = a.shift();
        d = N(d, 7, e);
        e = a.shift();
        d = N(d, 8, e);
        e = a.shift();
        d = N(d, 9, e);
        c = G(c, 7, d);
        d = new vI;
        e = a.shift();
        d = N(d, 1, e);
        e = a.shift();
        d = N(d, 2, e);
        c = G(c, 8,
            d);
        d = a.shift();
        c = N(c, 9, d);
        d = a.shift();
        c = N(c, 10, d);
        d = a.shift();
        c = N(c, 11, d);
        a = a.shift();
        a = N(c, 12, a);
        if (1 === b.length) b = AI(a);
        else {
            a = AI(a);
            c = qI(b[1]);
            if (3 > c.length) throw Error(`Invalid GPC Segment [${c}]. Expected length ${3}, but was ${c.length}.`);
            b = rI(c.slice(0, 2));
            if (0 > b || 1 < b) throw Error(`Attempting to decode unknown GPC segment subsection type ${b}.`);
            b += 1;
            c = rI(c.charAt(2));
            d = new zI;
            b = N(d, 2, b);
            b = wh(b, 1, !!c);
            b = G(a, 2, b)
        }
        return b
    };
    var FI = class extends O {
        constructor() {
            super()
        }
    };
    var GI = class extends O {
        getVersion() {
            return qh(this, 1)
        }
    };
    var HI = class extends O {
        constructor() {
            super()
        }
    };

    function II(a) {
        var b = new JI;
        return G(b, 1, a)
    }
    var JI = class extends O {
        constructor() {
            super()
        }
    };
    const KI = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        LI = KI.reduce((a, b) => a + b);
    var MI = class extends O {
        constructor() {
            super()
        }
    };
    var NI = class extends O {
        constructor() {
            super()
        }
    };
    var OI = class extends O {
        getVersion() {
            return qh(this, 1)
        }
    };
    var PI = class extends O {
        constructor() {
            super()
        }
    };

    function QI(a) {
        var b = new RI;
        return G(b, 1, a)
    }
    var RI = class extends O {
        constructor() {
            super()
        }
    };
    const SI = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        TI = SI.reduce((a, b) => a + b);
    var UI = class extends O {
        constructor() {
            super()
        }
    };
    var VI = class extends O {
        constructor() {
            super()
        }
        getVersion() {
            return qh(this, 1)
        }
    };
    const WI = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
        XI = WI.reduce((a, b) => a + b);
    var YI = "a".charCodeAt(),
        ZI = xc(zm),
        $I = xc(Am);

    function aJ() {
        var a = new bJ;
        return M(a, 1, 0)
    }

    function cJ(a) {
        const b = ph(nh(a, 1));
        a = qh(a, 2);
        return new Date(1E3 * b + a / 1E6)
    }
    var bJ = class extends O {};

    function dJ(a, b) {
        if (a.j + b > a.l.length) throw Error("Requested length " + b + " is past end of string.");
        const c = a.l.substring(a.j, a.j + b);
        a.j += b;
        return parseInt(c, 2)
    }

    function eJ(a) {
        let b = dJ(a, 12);
        const c = [];
        for (; b--;) {
            var d = !0 === !!dJ(a, 1),
                e = dJ(a, 16);
            if (d)
                for (d = dJ(a, 16); e <= d; e++) c.push(e);
            else c.push(e)
        }
        c.sort((f, g) => f - g);
        return c
    }

    function fJ(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (dJ(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f)) throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }

    function gJ(a) {
        const b = dJ(a, 16);
        return !0 === !!dJ(a, 1) ? (a = eJ(a), a.forEach(c => {
            if (c > b) throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }), a) : fJ(a, b)
    }
    class hJ {
        constructor(a) {
            if (/[^01]/.test(a)) throw Error(`Input bitstring ${a} is malformed!`);
            this.l = a;
            this.j = 0
        }
    };
    var jJ = (a, b) => {
        try {
            var c = qf(a.split(".")[0]).map(e => e.toString(2).padStart(8, "0")).join("");
            const d = new hJ(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.j += 78;
            c.cmpId = dJ(d, 12);
            c.cmpVersion = dJ(d, 12);
            d.j += 30;
            c.tcfPolicyVersion = dJ(d, 6);
            c.isServiceSpecific = !!dJ(d, 1);
            c.useNonStandardStacks = !!dJ(d, 1);
            c.specialFeatureOptins = iJ(fJ(d, 12, $I), $I);
            c.purpose = {
                consents: iJ(fJ(d, 24, ZI), ZI),
                legitimateInterests: iJ(fJ(d, 24, ZI), ZI)
            };
            c.purposeOneTreatment = !!dJ(d, 1);
            c.publisherCC = String.fromCharCode(YI + dJ(d, 6)) + String.fromCharCode(YI +
                dJ(d, 6));
            c.vendor = {
                consents: iJ(gJ(d), b),
                legitimateInterests: iJ(gJ(d), b)
            };
            return c
        } catch (d) {
            return null
        }
    };
    const iJ = (a, b) => {
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b) c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a) c[d] = !0;
        delete c[0];
        return c
    };
    var kJ = new W(557811243),
        lJ = new er(549581487, "#1A73E8"),
        mJ = new er(549581486, "#FFFFFF");
    var nJ = class extends O {
        j() {
            return null != H(this, 2)
        }
    };
    var oJ = class extends O {
        j() {
            return null != H(this, 2)
        }
    };
    var pJ = class extends O {};
    var qJ = class extends O {},
        rJ = Ih(qJ);
    qJ.P = [7];

    function sJ(a) {
        a = tJ(a);
        try {
            var b = a ? rJ(a) : null
        } catch (c) {
            b = null
        }
        return b ? B(b, pJ, 4) || null : null
    }

    function tJ(a) {
        a = (new LH(a)).get("FCCDCF", "");
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
    const uJ = AI(xI(1));

    function vJ(a) {
        var b = jI(1),
            c = rh(B(a.j, yI, 1), 2);
        const d = rh(B(a.j, yI, 1), 3);
        0 === c && 0 === d ? N(b, 2, 0) : 2 === c || 2 === d ? N(b, 2, 1) : N(b, 2, 2);
        c = rh(B(a.j, yI, 1), 5);
        a = rh(B(a.j, yI, 1), 6);
        0 === c && 0 === a ? N(b, 3, 0) : 1 === c || 1 === a ? N(b, 3, 2) : N(b, 3, 1);
        N(b, 4, 1);
        b = [qh(b, 1), nI[rh(b, 2)], nI[b.jg()], nI[rh(b, 4)]].join("");
        return 4 === b.length && (-1 === b.indexOf("-") || "---" === b.substring(1)) && "1" <= b[0] && "9" >= b[0] && mI.hasOwnProperty(b[1]) && mI.hasOwnProperty(b[2]) && mI.hasOwnProperty(b[3]) ? b : null
    }
    var wJ = class {
        constructor(a = uJ, b = new bJ) {
            this.j = a;
            this.timestamp = b
        }
        getTimestamp() {
            return this.timestamp
        }
    };

    function xJ(a) {
        a.__tcfapiPostMessageReady || yJ(new zJ(a))
    }

    function yJ(a) {
        a.l = b => {
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.j.__tcfapi(e.command, e.version, (f, g) => {
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
        a.j.addEventListener("message", a.l);
        a.j.__tcfapiPostMessageReady = !0
    }
    var zJ = class {
        constructor(a) {
            this.j = a;
            this.l = null
        }
    };
    var AJ = class extends O {
        j() {
            return Tg(this, bJ, 2)
        }
    };
    var BJ = class extends O {
            j() {
                return null != H(this, 1)
            }
        },
        CJ = Ih(BJ);
    BJ.P = [2];

    function DJ(a) {
        a !== a.top || a.__uspapi || a.frames.__uspapiLocator || (a = new EJ(a), FJ(a), GJ(a))
    }

    function FJ(a) {
        !a.v || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", jC(a.j, "__uspapiLocator"), Ha("__uspapi", (...b) => HJ(a, ...b), a.j))
    }

    function GJ(a) {
        !a.l || a.j.__tcfapi || a.j.frames.__tcfapiLocator || (a.j.__tcfapiManager = "fc", jC(a.j, "__tcfapiLocator"), a.j.__tcfapiEventListeners = a.j.__tcfapiEventListeners || [], Ha("__tcfapi", (...b) => IJ(a, ...b), a.j), xJ(a.j))
    }

    function HJ(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.v
        }, !0)
    }

    function JJ(a) {
        if (!a ? .j() || 0 === L(a, 1).length) return null;
        var b = C(a, AJ, 2).find(e => 8 === qh(e, 1));
        b = b ? .j() ? B(b, bJ, 2) : aJ();
        a = L(a, 1);
        try {
            const e = tI(a.split("~")[0]),
                f = pI(a),
                g = Yg(e, 3, jg).indexOf(8);
            if (-1 === g) var c = null;
            else {
                try {
                    var d = EI(f[g])
                } catch (h) {
                    d = null
                }
                c = {
                    uspString: vJ(new wJ(d ? ? uJ, b)),
                    pe: cJ(b)
                }
            }
            return c
        } catch (e) {
            return null
        }
    }

    function KJ(a) {
        a = a.find(b => 13 === rh(b, 1));
        if (a ? .j()) try {
            return CJ(L(a, 2))
        } catch (b) {}
        return null
    }

    function IJ(a, b, c, d, e = null) {
        if ("function" === typeof d)
            if (c && (2.1 < c || 1 >= c)) d(null, !1);
            else switch (c = a.j.__tcfapiEventListeners, b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f => "number" === typeof f) ? d(LJ(a, e, null), !0) : d(null, !1);
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
                    d(LJ(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null, d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
            }
    }

    function LJ(a, b, c) {
        if (!a.l) return null;
        b = jJ(a.l, b);
        b.addtlConsent = null != a.m ? a.m : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class EJ {
        constructor(a) {
            this.j = a;
            var b = tJ(this.j.document);
            try {
                var c = b ? rJ(b) : null
            } catch (e) {
                c = null
            }(b = c) ? (c = B(b, oJ, 5) || null, b = C(b, nJ, 7) ? ? [], b = KJ(b), c = {
                Mf: c,
                kg: b
            }) : c = {
                Mf: null,
                kg: null
            };
            b = c;
            c = JJ(b.kg);
            b = b.Mf;
            if (b ? .j() && 0 !== L(b, 2).length) {
                var d = Tg(b, bJ, 1) ? B(b, bJ, 1) : aJ();
                b = {
                    uspString: L(b, 2),
                    pe: cJ(d)
                }
            } else b = null;
            this.v = b && c ? c.pe > b.pe ? c.uspString : b.uspString : b ? b.uspString : c ? c.uspString : null;
            this.l = (c = sJ(a.document)) && null != H(c, 1) ? L(c, 1) : null;
            this.m = (a = sJ(a.document)) && null != H(a, 2) ? L(a, 2) : null
        }
    };
    const MJ = a => {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    };
    var NJ = (a, b) => {
        a = MJ(a);
        b = MJ(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    var OJ = Promise;
    class PJ {
        constructor(a) {
            this.m = a
        }
        l(a, b, c) {
            this.m.then(d => {
                d.l(a, b, c)
            })
        }
        j(a, b) {
            return this.m.then(c => c.j(a, b))
        }
    };
    class QJ {
        constructor(a) {
            this.data = a
        }
    };

    function RJ(a, b) {
        SJ(a, b);
        return new TJ(a)
    }
    class TJ {
        constructor(a) {
            this.m = a
        }
        l(a, b, c = []) {
            const d = new MessageChannel;
            SJ(d.port1, b);
            this.m.postMessage(a, [d.port2].concat(c))
        }
        j(a, b) {
            return new OJ(c => {
                this.l(a, c, b)
            })
        }
    }

    function SJ(a, b) {
        b && (a.onmessage = c => {
            b(new QJ(c.data, RJ(c.ports[0])))
        })
    };
    var WJ = ({
        destination: a,
        Oa: b,
        origin: c,
        Gb: d = "ZNWN1d",
        onMessage: e,
        Jg: f
    }) => UJ({
        destination: a,
        oi: () => b.contentWindow,
        Qi: VJ(c),
        Gb: d,
        onMessage: e,
        Jg: f
    });
    const UJ = ({
            destination: a,
            oi: b,
            Qi: c,
            ao: d,
            Gb: e,
            onMessage: f,
            Jg: g
        }) => {
            const h = Object.create(null);
            c.forEach(k => {
                h[k] = !0
            });
            return new PJ(new OJ((k, l) => {
                const m = n => {
                    n.source && n.source === b() && !0 === h[n.origin] && (n.data.n || n.data) === e && (a.removeEventListener("message", m, !1), d && n.data.t !== d ? l(Error(`Token mismatch while establishing channel "${e}". Expected ${d}, but received ${n.data.t}.`)) : (k(RJ(n.ports[0], f)), g && g(n)))
                };
                a.addEventListener("message", m, !1)
            }))
        },
        VJ = a => {
            a = "string" === typeof a ? [a] : a;
            const b = Object.create(null);
            a.forEach(c => {
                if ("null" === c) throw Error("Receiving from null origin not allowed without token verification. Please use NullOriginConnector.");
                b[c] = !0
            });
            return a
        };

    function XJ(a, b, c, d, e, f, g = null) {
        try {
            var h = a.localStorage
        } catch (n) {
            h = null
        }
        if (h) {
            if (X(ur)) var k = null;
            else try {
                k = h.getItem("google_ama_config")
            } catch (n) {
                k = null
            }
            try {
                var l = k ? Op(k) : null
            } catch (n) {
                l = null
            }
            k = l
        } else k = null;
        a: {
            if (d) try {
                var m = Op(d);
                break a
            } catch (n) {
                JG(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            m = null
        }
        if (d = m) {
            if (e) {
                m = new Zo;
                G(d, 3, m);
                k = Mp(d) && nh(Mp(d), 13) ? nh(Mp(d), 13) : 1;
                k = Date.now() + 864E5 * k;
                Number.isFinite(k) && zh(m, 1, Math.round(k));
                m = Pg(d);
                Mp(d) && (k = new Yo, l = Mp(d), l = Xg(l, 23), k = vh(k, 23, null == l ? void 0 : l), l = I(Mp(d), 12, !1),
                    k = vh(k, 12, l), l = I(Mp(d), 15, !1), k = vh(k, 15, l), G(m, 15, k));
                k = C(m, yp, 1);
                for (l = 0; l < k.length; l++) Rg(k[l], 11);
                Rg(m, 22);
                if (X(ur)) QG(a);
                else try {
                    (e || a.localStorage).setItem("google_ama_config", Ch(m))
                } catch (n) {
                    JG(a, {
                        lserr: 1
                    })
                }
            }
            e = PG(a, C(d, hp, 7));
            m = {};
            X(vr) || (m.Yi = B(d, sp, 8) || new sp);
            e && (m.Z = e);
            e && NG(e, 3) && (m.wc = [1]);
            e = m;
            if (7 === c.google_pgb_reactive && !e.Z) return !1;
            SG(a, 2) && (um(5, [d.toJSON()]), c = KG(c), f = new aI(f), m = e.Z, c.google_package = m && H(m, 4) || "", sH(a, b, d, e, f, new No(["google-auto-placed"], c), g));
            return !0
        }
        k && (JG(a, {
            cfg: 1,
            cl: 1
        }), QG(a));
        return !1
    };
    var ZJ = a => {
        const b = a.D;
        null == b.google_ad_output && (b.google_ad_output = "html");
        if (null != b.google_ad_client) {
            var c;
            (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
            b.google_ad_client = c
        }
        null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
        b.google_webgl_support = !!ji.WebGLRenderingContext;
        b.google_ad_section = b.google_ad_section || b.google_ad_region || "";
        b.google_country = b.google_country || b.google_gl || "";
        c = (new Date).getTime();
        Array.isArray(b.google_color_bg) &&
            (b.google_color_bg = YJ(a, b.google_color_bg, c));
        Array.isArray(b.google_color_text) && (b.google_color_text = YJ(a, b.google_color_text, c));
        Array.isArray(b.google_color_link) && (b.google_color_link = YJ(a, b.google_color_link, c));
        Array.isArray(b.google_color_url) && (b.google_color_url = YJ(a, b.google_color_url, c));
        Array.isArray(b.google_color_border) && (b.google_color_border = YJ(a, b.google_color_border, c));
        Array.isArray(b.google_color_line) && (b.google_color_line = YJ(a, b.google_color_line, c))
    };

    function YJ(a, b, c) {
        a.j |= 2;
        return b[c % b.length]
    };

    function $J(a, b) {
        var c = bm,
            d;
        var e;
        d = (e = (e = ri()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new ni(d.left, d.top, d.width, d.height) : null) ? new Id(e.left, e.top) : (d = ui()) && va(d.rootBounds) ? new Id(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new Id(0, 0),
                g = Sd(b);
            var h = g ? Vd(g) : window;
            if (dc(h, "parent")) {
                do {
                    if (h == a) var k = Qi(b);
                    else {
                        var l = Pi(b);
                        k = new Id(l.left,
                            l.top)
                    }
                    g = k;
                    f.x += g.x;
                    f.y += g.y
                } while (h && h != a && h != h.parent && (b = h.frameElement) && (h = h.parent))
            }
            return f
        } catch (m) {
            return c.Ba(888, m), new Id(-12245933, -12245933)
        }
    };

    function aK(a, b, c) {
        return c ? OH(b, c, a.j) : null
    }

    function bK(a, b, c, d) {
        if (d) {
            var e = nh(c, 2) - Date.now() / 1E3;
            e = {
                Oe: Math.max(e, 0),
                path: H(c, 3),
                domain: H(c, 4),
                oj: !1
            };
            c = c.getValue();
            a = a.j;
            I(d, 5) && NH(a) && (new LH(a.document)).set(b, c, e)
        }
    }

    function cK(a, b, c) {
        if (c && OH(b, c, a.j))
            for (const d of dK(a.j.location.hostname)) PH(b, c, a.j, "/", d)
    }
    var eK = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function dK(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    };

    function fK(a, b, c) {
        return em(629, function(d) {
            delete a._gfp_s_;
            if (X(kr) && Z(TG(), 37, !1)) return Promise.resolve();
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    k = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof k || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = ci(bi(ai(Zh(g),
                    h), k), e);
                switch (d) {
                    case 1:
                        bK(c, "__gads", e, b);
                        break;
                    case 2:
                        bK(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function gK(a, b, c) {
        let d;
        if (0 === a.l) {
            if (aK(a, "__gads", b)) var e = !0;
            else e = a.j, I(b, 5) && NH(e) && (new LH(e.document)).set("GoogleAdServingTest", "Good", void 0), (e = "Good" === OH("GoogleAdServingTest", b, a.j)) && PH("GoogleAdServingTest", b, a.j);
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = fK(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function hK(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = aK(b, "__gads", a);
        e && (d.cookie = e);
        (e = aK(b, "__gpi", a)) && !e.includes("&") && (d.gpic = e);
        const f = Gc(Jc(ob(pb("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = gK(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = k => {
                g(k).then(h)
            };
            Ee(c.document, f)
        }) : Promise.resolve()
    }

    function iK(a, b, c) {
        "_gfp_p_" in b || (b._gfp_p_ = !1);
        var d = new eK(b);
        c = b.google_ad_client || c;
        const e = b._gfp_p_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
        e ? Promise.resolve() : hK(a, d, b, c)
    };
    const jK = (a, b) => {
            b = b.listener;
            (a = (0, a.__gpp)("addEventListener", b)) && b(a, !0)
        },
        kK = (a, b) => {
            (0, a.__gpp)("removeEventListener", b.listener, b.listenerId)
        },
        lK = (a, b) => {
            (0, a.__gpp)("getSection", c => {
                b.callback({
                    consentData: c ? ? void 0,
                    hd: c ? void 0 : 4
                })
            }, b.apiPrefix)
        },
        mK = {
            Dc: a => a.listener,
            Sb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "addEventListener",
                    version: "1.1"
                }
            }),
            vb: (a, b) => {
                b = b.__gppReturn;
                a(b.returnValue, b.success)
            }
        },
        nK = {
            Dc: a => a.listener,
            Sb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "removeEventListener",
                    version: "1.1",
                    parameter: a.listenerId
                }
            }),
            vb: (a, b) => {
                b = b.__gppReturn;
                const c = b.returnValue.data;
                a ? .(c, b.success)
            }
        },
        oK = {
            Dc: a => a.callback,
            Sb: (a, b) => ({
                __gppCall: {
                    callId: b,
                    command: "getSection",
                    version: "1.1",
                    parameter: a.apiPrefix
                }
            }),
            vb: (a, b) => {
                b = b.__gppReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    hd: b.success ? void 0 : 2
                })
            }
        };

    function pK(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            bf: b.__gppReturn.callId
        }
    }

    function qK(a) {
        const b = tI(a.split("~")[0]),
            c = pI(a);
        for (let Th = 0; Th < Yg(b, 3, jg).length; ++Th) {
            const Fu = Yg(b, 3, jg)[Th],
                wc = c[Th];
            switch (Fu) {
                case 8:
                    var d = EI(wc);
                    const Gu = B(d, yI, 1);
                    if (1 === rh(Gu, 5) || 1 === rh(Gu, 6)) return !0;
                    break;
                case 10:
                    if (0 === wc.length) throw Error("Cannot decode empty USCO section string.");
                    const Ef = wc.split(".");
                    if (2 < Ef.length) throw Error(`Expected at most 2 segments but got ${Ef.length} when decoding ${wc}`);
                    var e = void 0,
                        f = void 0,
                        g = void 0,
                        h = void 0,
                        k = void 0,
                        l = void 0,
                        m = void 0,
                        n = void 0,
                        p = void 0,
                        q = void 0,
                        x = void 0,
                        v = void 0,
                        D = void 0,
                        E = void 0,
                        F = void 0,
                        A = void 0,
                        J = void 0,
                        K = void 0;
                    let Wc = qI(Ef[0]);
                    const Ml = rI(Wc.slice(0, 6));
                    Wc = Wc.slice(6);
                    if (1 !== Ml) throw Error(`Unable to decode unsupported USCO Section specification version ${Ml} - only version 1 is supported.`);
                    if (Wc.length < LI)
                        if (Wc.length + 8 >= LI) Wc += "00000000";
                        else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${LI} but was ${Wc.length+8}`);
                    let Nl = 0;
                    const Na = [];
                    for (let ka = 0; ka < KI.length; ka++) {
                        const Da =
                            KI[ka];
                        Na.push(rI(Wc.slice(Nl, Nl + Da)));
                        Nl += Da
                    }
                    var Q = new GI;
                    K = yh(Q, 1, Ml);
                    var za = Na.shift();
                    J = N(K, 2, za);
                    var U = Na.shift();
                    A = N(J, 3, U);
                    var Ta = Na.shift();
                    F = N(A, 4, Ta);
                    var ib = Na.shift();
                    E = N(F, 5, ib);
                    var xa = Na.shift();
                    D = N(E, 6, xa);
                    var Uh = new FI,
                        da = Na.shift();
                    v = N(Uh, 1, da);
                    var ge = Na.shift();
                    x = N(v, 2, ge);
                    var zN = Na.shift();
                    q = N(x, 3, zN);
                    var AN = Na.shift();
                    p = N(q, 4, AN);
                    var BN = Na.shift();
                    n = N(p, 5, BN);
                    var CN = Na.shift();
                    m = N(n, 6, CN);
                    var DN = Na.shift();
                    l = N(m, 7, DN);
                    k = G(D, 7, l);
                    var EN = Na.shift();
                    h = N(k, 8, EN);
                    var FN = Na.shift();
                    g =
                        N(h, 9, FN);
                    var GN = Na.shift();
                    f = N(g, 10, GN);
                    var HN = Na.shift();
                    const Hu = e = N(f, 11, HN);
                    if (1 === Ef.length) var Iu = II(Hu);
                    else {
                        var IN = II(Hu),
                            Ju = void 0,
                            Ku = void 0,
                            Lu = void 0;
                        const ka = qI(Ef[1]);
                        if (3 > ka.length) throw Error(`Invalid GPC Segment [${ka}]. Expected length ${3}, but was ${ka.length}.`);
                        const Da = rI(ka.slice(0, 2));
                        if (0 > Da || 1 < Da) throw Error(`Attempting to decode unknown GPC segment subsection type ${Da}.`);
                        Lu = Da + 1;
                        const Ol = rI(ka.charAt(2));
                        var JN = new HI;
                        Ku = N(JN, 2, Lu);
                        Ju = wh(Ku, 1, !!Ol);
                        Iu = G(IN, 2, Ju)
                    }
                    const Mu =
                        B(Iu, GI, 1);
                    if (1 === rh(Mu, 5) || 1 === rh(Mu, 6)) return !0;
                    break;
                case 12:
                    if (0 === wc.length) throw Error("Cannot decode empty usct section string.");
                    const Ff = wc.split(".");
                    if (2 < Ff.length) throw Error(`Expected at most 2 segments but got ${Ff.length} when decoding ${wc}`);
                    var KN = void 0,
                        Nu = void 0,
                        Ou = void 0,
                        Pu = void 0,
                        Qu = void 0,
                        Ru = void 0,
                        Su = void 0,
                        Tu = void 0,
                        Uu = void 0,
                        Vu = void 0,
                        Wu = void 0,
                        Xu = void 0,
                        Yu = void 0,
                        Zu = void 0,
                        $u = void 0,
                        av = void 0,
                        bv = void 0,
                        cv = void 0,
                        dv = void 0,
                        ev = void 0,
                        fv = void 0,
                        gv = void 0;
                    let Xc = qI(Ff[0]);
                    const Pl =
                        rI(Xc.slice(0, 6));
                    Xc = Xc.slice(6);
                    if (1 !== Pl) throw Error(`Unable to decode unsupported USCT Section specification version ${Pl} - only version 1 is supported.`);
                    if (Xc.length < TI)
                        if (Xc.length + 8 >= TI) Xc += "00000000";
                        else throw Error(`Expected core segment bitstring minus version plus padding to be at least of length ${TI} but was ${Xc.length+8}`);
                    let Ql = 0;
                    const ta = [];
                    for (let ka = 0; ka < SI.length; ka++) {
                        const Da = SI[ka];
                        ta.push(rI(Xc.slice(Ql, Ql + Da)));
                        Ql += Da
                    }
                    var LN = new OI;
                    gv = yh(LN, 1, Pl);
                    var MN = ta.shift();
                    fv = N(gv,
                        2, MN);
                    var NN = ta.shift();
                    ev = N(fv, 3, NN);
                    var ON = ta.shift();
                    dv = N(ev, 4, ON);
                    var PN = ta.shift();
                    cv = N(dv, 5, PN);
                    var QN = ta.shift();
                    bv = N(cv, 6, QN);
                    var RN = new NI,
                        SN = ta.shift();
                    av = N(RN, 1, SN);
                    var TN = ta.shift();
                    $u = N(av, 2, TN);
                    var UN = ta.shift();
                    Zu = N($u, 3, UN);
                    var VN = ta.shift();
                    Yu = N(Zu, 4, VN);
                    var WN = ta.shift();
                    Xu = N(Yu, 5, WN);
                    var XN = ta.shift();
                    Wu = N(Xu, 6, XN);
                    var YN = ta.shift();
                    Vu = N(Wu, 7, YN);
                    var ZN = ta.shift();
                    Uu = N(Vu, 8, ZN);
                    Tu = G(bv, 7, Uu);
                    var $N = new MI,
                        aO = ta.shift();
                    Su = N($N, 1, aO);
                    var bO = ta.shift();
                    Ru = N(Su, 2, bO);
                    var cO = ta.shift();
                    Qu = N(Ru, 3, cO);
                    Pu = G(Tu, 8, Qu);
                    var dO = ta.shift();
                    Ou = N(Pu, 9, dO);
                    var eO = ta.shift();
                    Nu = N(Ou, 10, eO);
                    var fO = ta.shift();
                    const hv = KN = N(Nu, 11, fO);
                    if (1 === Ff.length) var iv = QI(hv);
                    else {
                        var gO = QI(hv),
                            jv = void 0,
                            kv = void 0,
                            lv = void 0;
                        const ka = qI(Ff[1]);
                        if (3 > ka.length) throw Error(`Invalid GPC Segment [${ka}]. Expected length ${3}, but was ${ka.length}.`);
                        const Da = rI(ka.slice(0, 2));
                        if (0 > Da || 1 < Da) throw Error(`Attempting to decode unknown GPC segment subsection type ${Da}.`);
                        lv = Da + 1;
                        const Ol = rI(ka.charAt(2));
                        var hO = new PI;
                        kv = N(hO, 2, lv);
                        jv = wh(kv, 1, !!Ol);
                        iv = G(gO, 2, jv)
                    }
                    const mv = B(iv, OI, 1);
                    if (1 === rh(mv, 5) || 1 === rh(mv, 6)) return !0;
                    break;
                case 9:
                    if (0 === wc.length) throw Error("Cannot decode empty USVA section string.");
                    let Yc = qI(wc);
                    const Rl = rI(Yc.slice(0, 6));
                    Yc = Yc.slice(6);
                    if (1 !== Rl) throw Error(`Unable to decode unsupported USVA Section specification version ${Rl} - only version 1 is supported.`);
                    if (Yc.length < XI)
                        if (Yc.length + 8 >= XI) Yc += "00000000";
                        else throw Error(`Expected bitstring minus version plus padding to be at least of length ${XI} but was ${Yc.length+ 
8}`);
                    let Sl = 0;
                    const Ea = [];
                    for (let ka = 0; ka < WI.length; ka++) {
                        const Da = WI[ka];
                        Ea.push(rI(Yc.slice(Sl, Sl + Da)));
                        Sl += Da
                    }
                    var iO = Rl,
                        jO = new VI;
                    var kO = yh(jO, 1, iO);
                    var lO = Ea.shift();
                    var mO = N(kO, 2, lO);
                    var nO = Ea.shift();
                    var oO = N(mO, 3, nO);
                    var pO = Ea.shift();
                    var qO = N(oO, 4, pO);
                    var rO = Ea.shift();
                    var sO = N(qO, 5, rO);
                    var tO = Ea.shift();
                    var uO = N(sO, 6, tO);
                    var vO = new UI,
                        wO = Ea.shift();
                    var xO = N(vO, 1, wO);
                    var yO = Ea.shift();
                    var zO = N(xO, 2, yO);
                    var AO = Ea.shift();
                    var BO = N(zO, 3, AO);
                    var CO = Ea.shift();
                    var DO = N(BO, 4, CO);
                    var EO = Ea.shift();
                    var FO = N(DO, 5, EO);
                    var GO = Ea.shift();
                    var HO = N(FO, 6, GO);
                    var IO = Ea.shift();
                    var JO = N(HO, 7, IO);
                    var KO = Ea.shift();
                    var LO = N(JO, 8, KO);
                    var MO = G(uO, 7, LO);
                    var NO = Ea.shift();
                    var OO = N(MO, 8, NO);
                    var PO = Ea.shift();
                    var QO = N(OO, 9, PO);
                    var RO = Ea.shift();
                    var SO = N(QO, 10, RO);
                    var TO = Ea.shift(),
                        nv = N(SO, 11, TO);
                    if (1 === rh(nv, 5) || 1 === rh(nv, 6)) return !0;
                    break;
                default:
                    ue(Fu, void 0)
            }
        }
        return !1
    }
    var sK = class extends P {
        constructor(a) {
            super();
            this.caller = new oC(a, "__gppLocator", b => "function" === typeof b.__gpp, pK);
            this.caller.A.set("addEventListener", jK);
            this.caller.m.set("addEventListener", mK);
            this.caller.A.set("removeEventListener", kK);
            this.caller.m.set("removeEventListener", nK);
            this.caller.A.set("getDataWithCallback", lK);
            this.caller.m.set("getDataWithCallback", oK);
            this.timeoutMs = -1
        }
        l() {
            this.caller.ma();
            super.l()
        }
        addEventListener(a) {
            const b = vb(() => {
                    a({}, !1)
                }),
                c = -1 === this.timeoutMs ? void 0 : setTimeout(() => {
                    b()
                }, this.timeoutMs);
            nC(this.caller, "addEventListener", {
                listener: (d, e) => {
                    clearTimeout(c);
                    void 0 === d.pingData ? .gppVersion || "1" === d.pingData.gppVersion || "1.0" === d.pingData.gppVersion ? (this.removeEventListener(d.listenerId), a(rK, !0)) : a(d, e)
                }
            })
        }
        removeEventListener(a) {
            nC(this.caller, "removeEventListener", {
                listenerId: a
            })
        }
    };
    const rK = {
        eventName: "signalStatus",
        data: "ready",
        pingData: {
            internalErrorState: 1
        },
        listenerId: -1
    };

    function tK(a) {
        return !a || 1 === a.length && -1 === a[0]
    };

    function uK(a, b) {
        if (1 !== b.internalErrorState)
            if (tK(b.applicableSections)) {
                var c = ch(a, 10, b.applicableSections, mg);
                vh(c, 12, !1)
            } else {
                c = !1;
                try {
                    c = qK(b.gppString)
                } catch (d) {
                    gm(1182, d)
                }
                a = ch(a, 10, b.applicableSections, mg);
                b = Ah(a, 11, b.gppString);
                vh(b, 12, c)
            }
    }

    function vK(a) {
        const b = new sK(a.pubWin);
        if (!lC(b.caller)) return Promise.resolve(null);
        const c = TG(),
            d = Z(c, 35);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Z(c, 36, []);
            g.push(f);
            YG(c, 36, g)
        });
        d || null === d || (YG(c, 35, null), b.addEventListener(f => {
            if ("ready" === f.pingData.signalStatus || tK(f.pingData.applicableSections)) {
                f = f.pingData;
                YG(c, 35, f);
                uK(a.l, f);
                for (const g of Z(c, 36, [])) g.resolve(f);
                YG(c, 36, [])
            }
        }));
        return e
    };

    function wK(a) {
        a.easpi = X(Ps);
        a.asla = .4;
        a.asaa = -1;
        a.sedf = !1;
        a.asro = X(Is);
        X(ws) && (a.asiscm = !0);
        a.sefa = !0;
        X(Os) && (a.sugawps = !0);
        X(us) && (a.sepiia = !0);
        X(ms) && (a.ascmds = !0);
        const b = R(ot).j(qs.j, qs.defaultValue);
        b.length && (a.seiel = b.join("~"))
    };

    function xK(a, b) {
        return rB({
            I: a,
            Qe: 3E3,
            Te: a.innerWidth > Gm ? 650 : 0,
            va: am,
            Nf: b
        })
    };
    var yK = a => {
        let b = 0;
        try {
            b |= Hm(a), X(Vr) || (b |= Im(a, 1E4))
        } catch (c) {
            b |= 32
        }
        return b
    };
    var zK = a => {
        let b = 0;
        try {
            b |= Hm(a), b |= Im(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function AK() {
        const a = {};
        qt(mr) && (a.bust = qt(mr));
        var b = TG();
        b = Z(b, 38, "");
        "" !== b && (a.sbust = b);
        return a
    };

    function BK(a) {
        return a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function CK(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function DK(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };
    var EK = (a, b, c, d = !1) => {
        let e = 0;
        try {
            e |= Hm(a);
            var f;
            if (!(f = !a.navigator)) {
                var g = a.navigator;
                f = "brave" in g && "isBrave" in g.brave || !1
            }
            e |= f || /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            e |= Im(a, 2500, !1);
            e |= Km(a);
            if (0 < c)
                if (d) b && TD(b) || (e |= 4194304);
                else {
                    var h = WD(b, c);
                    h && 1 > h.length || (e |= 134217728)
                }
        } catch (k) {
            e |= 32
        }
        return e
    };

    function FK(a, b, c, d = null) {
        let e = Hm(a);
        sB(a.navigator ? .userAgent) && (e |= 1048576);
        const f = a.innerWidth;
        1200 > f && (e |= 65536);
        const g = a.innerHeight;
        650 > g && (e |= 2097152);
        d && 0 === e && (d = 3 === d ? "left" : "right", (b = GK({
            I: a,
            vg: b,
            Ug: 1,
            position: d,
            R: f,
            V: g,
            rb: new Set,
            minWidth: 120,
            minHeight: 500
        })) ? c && xu(a).sideRailPlasParam.set(d, `${b.width}x${b.height}_${String(d).charAt(0)}`) : e |= 16);
        return e
    }

    function HK(a) {
        if (X(cs)) return [...xu(a).sideRailPlasParam.values()].join("|");
        if (0 !== FK(a, !0, !1)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = GK({
                I: a,
                vg: !0,
                Ug: 1,
                position: e,
                R: c,
                V: d,
                rb: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function IK(a, b) {
        return null !== de(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function JK(a, b) {
        return de(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function KK(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function LK(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function MK(a) {
        return `${a.position}-${LK(a.R)}x${LK(a.V)}-${LK(a.scrollY+a.cc)}Y`
    }

    function NK(a) {
        return `f-${MK({position:a.position,cc:a.cc,scrollY:0,R:a.R,V:a.V})}`
    }

    function OK(a, b) {
        a = Math.min(a ? ? Infinity, b ? ? Infinity);
        return Infinity !== a ? a : 0
    }

    function PK(a, b, c) {
        const d = xu(c.I).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top - 10, 0),
                    g = Math.min(e.bottom + 10, c.V),
                    h = Math.max(e.left - 10, 0);
                e = Math.min(e.right + 10, c.R);
                for (var k = .3 * c.R; f <= g; f += 10) {
                    if (0 < e && h < k) {
                        var l = NK({
                            position: "left",
                            cc: f,
                            R: c.R,
                            V: c.V
                        });
                        b.set(l, OK(b.get(l), h))
                    }
                    if (h < c.R && e > c.R - k) {
                        l = NK({
                            position: "right",
                            cc: f,
                            R: c.R,
                            V: c.V
                        });
                        const m = c.R - e;
                        b.set(l, OK(b.get(l), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function GK(a) {
        if (1200 > a.R || 650 > a.V) return null;
        var b = xu(a.I).sideRailAvailableSpace;
        if (!a.vg) {
            var c = {
                    I: a.I,
                    R: a.R,
                    V: a.V,
                    rb: a.rb
                },
                d = `f-${LK(c.R)}x${LK(c.V)}`;
            if (!b.has(d)) {
                b.set(d, 0);
                xu(c.I).sideRailProcessedFixedElements.clear();
                d = new Set([...Array.from(c.I.document.querySelectorAll("[data-anchor-status],[data-side-rail-status]")), ...c.rb]);
                for (var e of KK(c.I)) IK(e, d) || PK(e, b, c)
            }
        }
        c = [];
        d = .9 * a.V;
        var f = Sm(a.I),
            g = e = (a.V - d) / 2,
            h = d / 7;
        for (var k = 0; 8 > k; k++) {
            var l = c,
                m = l.push;
            a: {
                var n = g;
                var p = a.position,
                    q = {
                        I: a.I,
                        R: a.R,
                        V: a.V,
                        rb: a.rb
                    };
                const v = NK({
                        position: p,
                        cc: n,
                        R: q.R,
                        V: q.V
                    }),
                    D = MK({
                        position: p,
                        cc: n,
                        scrollY: f,
                        R: q.R,
                        V: q.V
                    });
                if (b.has(D)) {
                    n = OK(b.get(v), b.get(D));
                    break a
                }
                const E = "left" === p ? 20 : q.R - 20;
                let F = E;p = .3 * q.R / 5 * ("left" === p ? 1 : -1);
                for (let A = 0; 6 > A; A++) {
                    const J = qu(q.I.document, {
                        x: Math.round(F),
                        y: Math.round(n)
                    });
                    var x = IK(J, q.rb);
                    const K = JK(J, q.I);
                    if (!x && null !== K) {
                        PK(K, b, q);
                        b.delete(D);
                        break
                    }
                    x || (x = J.offsetHeight >= .25 * q.V, x = J.offsetWidth >= .9 * q.R && x);
                    if (x) b.set(D, Math.round(Math.abs(F - E) + 20));
                    else if (F !== E) F -= p, p /=
                        2;
                    else {
                        b.set(D, 0);
                        break
                    }
                    F += p
                }
                n = OK(b.get(v), b.get(D))
            }
            m.call(l, n);
            g += h
        }
        b = a.Ug;
        f = a.position;
        d = Math.round(d / 8);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (l = 0; l < c.length; l++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[l];) m.pop();
            h[l] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(l)
        }
        m = [];
        k = c.length - 1;
        l = Array(c.length).fill(0);
        for (n = k; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            l[n] = 0 === m.length ? k : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (k = 0; k < c.length; k++)
            if (n = {
                    position: f,
                    width: Math.round(c[k]),
                    height: Math.round((l[k] - h[k] + 1) * d),
                    offsetY: e + h[k] * d
                }, q = n.width >= g && n.height >= a, 0 === b && q) {
                m = n;
                break
            } else 1 === b && q && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const QK = {
        [27]: 512,
        [26]: 128
    };
    var RK = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === xK(a, c);
                case 3:
                case 4:
                    return 0 === FK(a, !1, !1, c);
                case 8:
                    return b = "on" === b.google_adtest || dI(a.location, "google_ia_debug") ? -1 : pt(es), c = X(fs), 0 == EK(a, d, b, c);
                case 9:
                    return b = !("on" === b.google_adtest || dI(a.location, "google_scr_debug")), !XD(a, b, d);
                case 30:
                    return 0 == LF(a);
                case 26:
                    return 0 == zK(a);
                case 27:
                    return 0 === yK(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        SK = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return xK(a, c);
                case 3:
                case 4:
                    return FK(a,
                        X(ds), X(cs), c);
                case 8:
                    return EK(a, d, "on" === b.google_adtest || dI(a.location, "google_ia_debug") ? -1 : pt(es), X(fs));
                case 9:
                    return XD(a, !("on" === b.google_adtest || dI(a.location, "google_scr_debug")), d);
                case 16:
                    return Kt(b, a) ? 0 : 8388608;
                case 30:
                    return LF(a);
                case 26:
                    return zK(a);
                case 27:
                    return yK(a);
                default:
                    return 32
            }
        },
        TK = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!uc(d)) return !1;
            a = De(a);
            if (!a || !RK(a, b, d, c)) return !1;
            b = xu(a);
            if (Pm(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        VK =
        a => {
            const b = a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && UK(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b && 41 !== b
        },
        WK = a => {
            if (!a.hash) return null;
            let b = null;
            Ie(bI, c => {
                !b && dI(a, c) && (b = cI[c])
            });
            return b
        },
        YK = (a, b) => {
            const c = xu(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Ie(ND, d => {
                !c.debugCardRequested && "number" === typeof d && gI(d, a.location) && (c.debugCardRequested = !0, XK(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        $K = (a, b, c) => {
            if (!b) return null;
            const d = xu(b);
            let e = 0;
            Ie(vc, f => {
                const g =
                    QK[f];
                g && 0 === ZK(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        aL = (a, b, c) => {
            const d = [];
            Ie(vc, e => {
                const f = ZK(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        bL = a => {
            const b = [],
                c = {};
            Ie(a, (d, e) => {
                if ((e = Em[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        cL = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        ZK = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            var f = xu(b),
                g = Pm(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Ie(f.reactiveTypeDisabledByPublisher, (k, l) => {
                String(c) === String(l) && (h = !0)
            });
            if (h && WK(b.location) !== c) {
                e |= 128;
                f = X(Tr) && (2 == c || 1 == c);
                g = X(Ur) && (3 == c || 4 == c);
                const k = X(Sr) && 8 == c;
                if (f || g || k) return e
            }
            return e | SK(b, a, c, d)
        },
        dL = (a, b) => {
            if (a) {
                var c = xu(a),
                    d = {};
                Ie(b, (e, f) => {
                    (f = Em[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Ie(vc, e => {
                    d[Fm[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        eL = (a, b, c) => {
            b = bm.Qa(b, c);
            return $H(1, window,
                Gc(a, AK())).then(b)
        },
        XK = (a, b, c) => {
            c = bm.Qa(212, c);
            $H(3, a, b).then(c)
        },
        fL = a => {
            a = a.google_reactive_ad_format;
            return uc(a) ? "" + a : null
        },
        UK = a => !!fL(a) || null != a.google_pgb_reactive,
        gL = a => {
            a = fL(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a || 41 == a
        };

    function hL(a) {
        return "number" === typeof a.google_reactive_sra_index
    }

    function iL(a, b, c) {
        const d = b.I || b.pubWin,
            e = b.D;
        var f = aL(d, e, c);
        e.google_reactive_plat = f;
        (f = bL(a)) && (e.google_reactive_plaf = f);
        (f = cL(a)) && (e.google_reactive_fba = f);
        (f = HK(d)) && (e.google_plas = f);
        jL(a, e);
        f = WK(b.pubWin.location);
        kL(a, f, e);
        f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
        wK(e);
        e.fsapi = !0;
        X(fs) && 8 !== f && (f = WD(c, 86400), f ? .length && (e.vmsli = Math.floor((Date.now() - Math.max(...f)) / 6E4)));
        vi() || zt(b.pubWin.top);
        f = jm(b.pubWin, "rsrai", em(429, (g, h) => lL(b, d, e.google_ad_client, a, g, h, c)),
            em(430, (g, h) => Vm(b.pubWin, "431", am, h)));
        b.m.push(f);
        xu(d).wasReactiveTagRequestSent = !0;
        mL(b, a, c)
    }

    function mL(a, b, c) {
        const d = a.D,
            e = va(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = jm(a.pubWin, "apcnf", em(353, (f, g) => {
            const h = Gc(a.ra.lb, AK());
            var k = a.pubWin,
                l = d.google_ad_client;
            return cf(g.origin) ? XJ(k, l, e, f.config, c, h, null) : !1
        }), em(353, (f, g) => Vm(a.pubWin, "353", am, g)));
        a.m.push(b)
    }

    function lL(a, b, c, d, e, f, g) {
        if (!cf(f.origin)) return !1;
        f = e.data;
        if (!Array.isArray(f)) return !1;
        if (!SG(b, 1)) return !0;
        f && um(6, [f]);
        e = e.amaConfig;
        const h = [],
            k = [],
            l = xu(b);
        let m = null;
        for (let n = 0; n < f.length; n++) {
            if (!f[n]) continue;
            const p = f[n],
                q = p.adFormat;
            l && p.enabledInAsfe && (l.reactiveTypeEnabledInAsfe[q] = !0);
            if (!p.noCreative) {
                p.google_reactive_sra_index = n;
                if (9 === q && e) {
                    p.pubVars = Object.assign(p.pubVars || {}, nL(d, p));
                    const x = new YD;
                    if (QD(x, p) && x.C(p)) {
                        m = x;
                        continue
                    }
                }
                h.push(p);
                k.push(q)
            }
        }
        h.length && eL(a.ra.Qg,
            522, n => {
                oL(h, b, n, d, g)
            });
        e && XJ(b, c, d, e, g, Gc(a.ra.lb, AK()), m);
        return !0
    }

    function nL(a, b) {
        const c = b.adFormat,
            d = b.adKey;
        delete b.adKey;
        const e = {};
        a = a.page_level_pubvars;
        va(a) && Object.assign(e, a);
        e.google_ad_unit_key = d;
        e.google_reactive_sra_index = b.google_reactive_sra_index;
        30 === c && (e.google_reactive_ad_format = 30);
        e.google_pgb_reactive = e.google_pgb_reactive || 5;
        return b.pubVars = e
    }

    function oL(a, b, c, d, e) {
        const f = [];
        for (let g = 0; g < a.length; g++) {
            const h = a[g],
                k = h.adFormat,
                l = h.adKey,
                m = c.configProcessorForAdFormat(k);
            k && m && l && (h.pubVars = nL(d, h), delete h.google_reactive_sra_index, f.push(k), dm(466, () => m.verifyAndProcessConfig(b, h, e)))
        }
    }

    function jL(a, b) {
        const c = [];
        let d = !1;
        Ie(Em, (e, f) => {
            let g;
            a.hasOwnProperty(f) && (f = a[f], f ? .google_ad_channel && (g = String(f.google_ad_channel)));
            --e;
            c[e] && "+" !== c[e] || (c[e] = g ? g.replace(/,/g, "+") : "+", d || (d = !!g))
        });
        d && (b.google_reactive_sra_channels = c.join(","))
    }

    function kL(a, b, c) {
        if (!c.google_adtest) {
            var d = a.page_level_pubvars;
            if ("on" === a.google_adtest || "on" === d ? .google_adtest || b) c.google_adtest = "on"
        }
    };
    cc("script");
    var pL = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function qL(a, b) {
        if (!Kt(b, a)) return () => {};
        a = rL(b, a);
        if (!a) return () => {};
        const c = cH();
        b = yc(b);
        const d = {
            wb: a,
            D: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => Ya(c, d)
    }

    function rL(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !Pt.test(a.className);) a = a.parentElement;
        return a
    }

    function sL(a, b) {
        for (let f = 0; f < a.childNodes.length; f++) {
            const g = {},
                h = a.childNodes[f];
            var c = h.style,
                d = ["width", "height"];
            for (let k = 0; k < d.length; k++) {
                const l = "google_ad_" + d[k];
                if (!g.hasOwnProperty(l)) {
                    var e = Qe(c[d[k]]);
                    e = null === e ? null : Math.round(e);
                    null != e && (g[l] = e)
                }
            }
            if (g.google_ad_width == b.google_ad_width && g.google_ad_height == b.google_ad_height) return h
        }
        return null
    }

    function tL(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function uL(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = cH();
            for (const d of a)
                if (d.wb.offsetWidth != d.offsetWidth || d.D.google_full_width_responsive_allowed) d.offsetWidth = d.wb.offsetWidth, dm(467, () => {
                    var e = d.wb,
                        f = d.D;
                    const g = sL(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    b.google_spfd(e, f, b);
                    const h = sL(e, f);
                    !h && g && 1 == e.childNodes.length ? (tL(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", b.adsbygoogle || (b.adsbygoogle = [], Ee(b.document, Hi `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)),
                        b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g && h != g && (tL(g, !1), tL(h, !0))
                })
        }
    }
    var vL = class extends P {
        constructor() {
            super(...arguments);
            this.j = null
        }
        K(a) {
            const b = TG();
            if (!Z(b, 27, !1)) {
                YG(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => {
                    uL(this, a)
                };
                Bb(a, "resize", c);
                Al(this, () => {
                    Cb(a, "resize", c)
                })
            }
        }
    };
    var wL = class {
        constructor(a, b) {
            this.I = a;
            this.wb = b;
            this.j = null;
            this.m = 0
        }
        l() {
            10 <= ++this.m && t.clearInterval(this.j);
            var a = Nt(this.I, this.wb);
            Ot(this.I, this.wb, a);
            a = Jt(this.wb, this.I);
            null != a && 0 === a.x || t.clearInterval(this.j)
        }
    };
    var xL = class {
        constructor(a) {
            this.C = -1;
            this.j = 0;
            this.l = this.F = null;
            this.G = 0;
            this.m = [];
            this.vc = this.B = "";
            this.v = this.A = null;
            this.I = a.I;
            this.pubWin = a.pubWin;
            this.D = a.D;
            this.Ga = a.Ga;
            this.ra = a.ra;
            this.tb = a.tb;
            this.ha = a.ha
        }
    };

    function yL(a, b) {
        var c = QH(a, yC(b));
        c = Ah(c, 2, b.tcString);
        c = Ah(c, 4, b.addtlConsent || "");
        Rg(c, 7, gg(b.internalErrorState));
        c = !AC(b);
        vh(a, 9, c);
        null != b.gdprApplies && vh(a, 3, b.gdprApplies)
    }

    function zL(a) {
        const b = new GC(a.pubWin, {
            timeoutMs: -1,
            Dh: !0
        });
        if (!CC(b)) return Promise.resolve(null);
        const c = TG(),
            d = Z(c, 24);
        if (d) return Promise.resolve(d);
        const e = new Promise(f => {
            f = {
                resolve: f
            };
            const g = Z(c, 25, []);
            g.push(f);
            YG(c, 25, g)
        });
        d || null === d || (YG(c, 24, null), b.addEventListener(f => {
            if (xC(f)) {
                YG(c, 24, f);
                yL(a.l, f);
                for (const g of Z(c, 25, [])) g.resolve(f);
                YG(c, 25, [])
            } else YG(c, 24, null)
        }));
        return e
    };

    function AL(a, b, c = 1E5) {
        a -= b;
        return a >= c ? "M" : 0 <= a ? a : "-M"
    };
    var CL = (a, b, c) => {
        const d = b.parentElement ? .classList.contains("adsbygoogle") ? b.parentElement : b;
        c.addEventListener("load", () => BL(d));
        return jm(a, "adpnt", (e, f) => {
            if (Rm(f, c.contentWindow)) {
                e = Um(e).qid;
                try {
                    c.setAttribute("data-google-query-id", e), a.googletag ? ? (a.googletag = {
                        cmd: []
                    }), a.googletag.queryIds = a.googletag.queryIds ? ? [], a.googletag.queryIds.push(e), 500 < a.googletag.queryIds.length && a.googletag.queryIds.shift()
                } catch {}
                d.dataset.adStatus = "filled";
                e = !0
            } else e = !1;
            return e
        })
    };

    function BL(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };
    var DL = class extends O {
        j() {
            return I(this, 6)
        }
        m() {
            return I(this, 7)
        }
    };
    var EL = class extends O {
        j() {
            return Yg(this, 1, sg)
        }
    };
    EL.P = [1];
    var FL = class extends O {};
    FL.P = [19];
    var GL = [13, 14];
    let HL = void 0;

    function IL() {
        Fh(HL, Hh);
        return HL
    }

    function JL(a) {
        Fh(HL, Jj);
        HL = a
    };

    function KL(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : tc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    };

    function LL(a, b, c) {
        try {
            if (!cf(c.origin) || !Rm(c, a.j.contentWindow)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.Ca[d]) && a.T.Lc(168, () => {
            e.call(a, b, c)
        })
    }
    class ML extends P {
        constructor(a, b) {
            var c = bm,
                d = am;
            super();
            this.A = a;
            this.j = b;
            this.T = c;
            this.va = d;
            this.Ca = {};
            this.Qc = this.T.Qa(168, (e, f) => void LL(this, e, f));
            this.Sc = this.T.Qa(169, (e, f) => Vm(this.A, "ras::xsf", this.va, f));
            this.aa = [];
            this.ga(this.Ca);
            this.aa.push(im(this.A, "sth", this.Qc, this.Sc))
        }
        l() {
            for (const a of this.aa) a();
            this.aa.length = 0;
            super.l()
        }
    };
    class NL extends ML {};

    function OL(a, b, c = null) {
        return new PL(a, b, c)
    }
    var PL = class extends NL {
        constructor(a, b, c) {
            super(a, b);
            this.v = c;
            this.C = R(qH);
            this.m = () => {};
            Bb(this.j, "load", this.m)
        }
        l() {
            Cb(this.j, "load", this.m);
            super.l()
        }
        ga(a) {
            a["adsense-labs"] = b => {
                if (b = Um(b).settings)
                    if (b = Eh(di, JSON.parse(b)), null != H(b, 1)) {
                        var c;
                        if (c = X(kr)) c = b.U, c = 0 < hh(c, c[y], $h, 4, !1, 3).length;
                        if (c) {
                            c = C(b, $h, 4);
                            var d = this.C;
                            const g = new Fk;
                            for (var e of c) switch (e.getVersion()) {
                                case 1:
                                    vh(g, 1, !0);
                                    break;
                                case 2:
                                    vh(g, 2, !0)
                            }
                            e = new Gk;
                            e = jh(e, 1, Hk, g);
                            pH(d, e);
                            d = this.A;
                            e = this.v;
                            if (!Z(TG(), 37, !1)) {
                                d = new eK(d);
                                for (var f of c) switch (f.getVersion()) {
                                    case 1:
                                        bK(d, "__gads", f, e);
                                        break;
                                    case 2:
                                        bK(d, "__gpi", f, e)
                                }
                                YG(TG(), 37, !0)
                            }
                            Rg(b, 4)
                        }
                        f = this.A;
                        c = L(b, 1) || "";
                        if (X(gr) ? null != UH({
                                win: f,
                                wd: IL()
                            }).j : 1) {
                            X(gr) ? (e = UH({
                                win: f,
                                wd: IL()
                            }), e = null != e.j ? KL(e.getValue()) : {}) : e = KL(f.localStorage);
                            null !== b && (e[c] = b.toJSON());
                            try {
                                f.localStorage.setItem("google_adsense_settings", JSON.stringify(e))
                            } catch (g) {}
                        }
                    }
            }
        }
    };

    function QL(a) {
        a.v = a.C;
        a.F.style.transition = "height 500ms";
        a.m.style.transition = "height 500ms";
        a.j.style.transition = "height 500ms";
        RL(a)
    }

    function SL(a, b) {
        a.j.contentWindow.postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function RL(a) {
        const b = `rect(0px, ${a.j.width}px, ${a.v}px, 0px)`;
        a.j.style.clip = b;
        a.m.style.clip = b;
        a.j.setAttribute("height", a.v);
        a.j.style.height = a.v + "px";
        a.m.setAttribute("height", a.v);
        a.m.style.height = a.v + "px";
        a.F.style.height = a.v + "px"
    }

    function TL(a, b) {
        b = Pe(b.r_nh);
        a.C = null == b ? 0 : b;
        if (0 >= a.C) return "1";
        a.J = Qi(a.F).y;
        a.H = Sm(a.A);
        if (a.J + a.v < a.H) return "2";
        if (a.J > Mm(a.A) - a.A.innerHeight) return "3";
        b = a.H;
        a.j.setAttribute("height", a.C);
        a.j.style.height = a.C + "px";
        a.m.style.overflow = "hidden";
        a.F.style.position = "relative";
        a.F.style.transition = "height 100ms";
        a.m.style.transition = "height 100ms";
        a.j.style.transition = "height 100ms";
        b = Math.min(b + a.A.innerHeight - a.J, a.v);
        Ki(a.m, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.j.width}px, ${b}px, 0px)`;
        Ki(a.j, {
            clip: b
        });
        Ki(a.m, {
            clip: b
        });
        return "0"
    }
    class UL extends NL {
        constructor(a, b) {
            super(a.I, b);
            this.m = a.ha;
            this.F = this.m.parentElement && this.m.parentElement.classList.contains("adsbygoogle") ? this.m.parentElement : this.m;
            this.v = parseInt(this.m.style.height, 10);
            this.Ha = this.kb = !1;
            this.wa = this.H = this.C = 0;
            this.Rc = this.v / 5;
            this.J = Qi(this.F).y;
            this.Bb = xb(em(651, () => {
                this.J = Qi(this.F).y;
                var c = this.H;
                this.H = Sm(this.A);
                this.v < this.C ? (c = this.H - c, 0 < c && (this.wa += c, this.wa >= this.Rc ? (QL(this), SL(this, this.C)) : (this.v = Math.min(this.C, this.v + c), SL(this, c), RL(this)))) :
                    Cb(this.A, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.Bb;
                ji.requestAnimationFrame ? ji.requestAnimationFrame(c) : c()
            }
        }
        ga(a) {
            a["expand-on-scroll"] = (b, c) => {
                b = Um(b);
                this.kb || (this.kb = !0, b = TL(this, b), "0" === b && Bb(this.A, "scroll", this.O, yb), c.source.postMessage(JSON.stringify({
                    msg_type: "expand-on-scroll-result",
                    eos_success: "0" === b,
                    googMsgType: "sth"
                }), "*"))
            };
            a["expand-on-scroll-force-expand"] = () => {
                this.Ha || (this.Ha = !0, QL(this), Cb(this.A, "scroll", this.O))
            }
        }
        l() {
            this.O && Cb(this.A, "scroll", this.O, yb);
            super.l()
        }
    };

    function VL(a) {
        const b = a.J.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.m.innerHeight) && !c
    }
    class WL extends P {
        constructor(a, b, c) {
            super();
            this.m = a;
            this.A = b;
            this.J = c;
            this.C = 0;
            this.v = VL(this);
            this.H = wb(this.F, this);
            this.j = em(433, () => {
                var d = this.H;
                ji.requestAnimationFrame ? ji.requestAnimationFrame(d) : d()
            });
            Bb(this.m, "scroll", this.j, yb)
        }
        F() {
            const a = VL(this);
            if (a && !this.v) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.A.contentWindow;
                c && (km(c, "ig", b, "*", 2), 10 <= ++this.C && this.j && Cb(this.m, "scroll", this.j, yb))
            }
            this.v = a
        }
    };

    function XL(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.property + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Ki(a, "transition", b.join(","))
    }
    var YL = ub(function() {
        if (fc) return !0;
        var a = Xd(document, "DIV"),
            b = jc ? "-webkit" : ic ? "-moz" : fc ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = {
            style: c
        };
        sd("div");
        b = vd("div", b);
        Dd(a, b);
        a = a.firstChild;
        b = a.style[Od("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Li(a, "transition")] || "")
    });

    function ZL(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function $L(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function aM(a, b, c, d) {
        return "" != a.errors || b ? null : "" == a.j.replace(bM, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function cM(a) {
        var b = aM(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var dM = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.errors = b || ""
        }
        ya(a) {
            0 > this.errors.indexOf(a) && (this.errors = a + this.errors);
            return this
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.errors].join("|")
        }
    };

    function eM(a) {
        let b = a.T;
        a.G = () => {};
        fM(a, a.B, b);
        let c = a.B.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Ge(c, b)
            } catch (g) {
                a.j.ya("c")
            }
            const f = gM(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.O = !0);
            if (d && !f && hM(e)) {
                $L(a.j, "l");
                a.F = c;
                break
            }
            d = d && f;
            if (e && iM(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.pubWin) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Ae(b)) {
                        $L(a.j, "c");
                        break
                    }
                } catch (g) {
                    $L(a.j,
                        "c");
                    break
                }
            }
        }
        a.C && a.A && jM(a);
        return a.j
    }

    function kM(a) {
        function b(m) {
            for (let n = 0; n < m.length; n++) Ki(k, m[n], "0px")
        }

        function c() {
            lM(d, g, h);
            !k || l || h || (b(mM), b(nM))
        }
        const d = a.B;
        d.style.overflow = a.Uc ? "visible" : "hidden";
        a.C && (a.F ? (XL(d, oM()), XL(a.F, oM())) : XL(d, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.J && (d.style.opacity = String(a.J));
        const e = null != a.width && null != a.m && (a.Pd || a.m > a.width) ? a.m : null,
            f = null != a.height && null != a.l && (a.Pd || a.l > a.height) ? a.l : null;
        if (a.H) {
            const m =
                a.H.length;
            for (let n = 0; n < m; n++) lM(a.H[n], e, f)
        }
        const g = a.m,
            h = a.l,
            k = a.F,
            l = a.O;
        a.C ? t.setTimeout(c, 1E3) : c()
    }

    function pM(a) {
        if (a.A && !a.aa || null == a.m && null == a.l && null == a.J && a.A) return a.j;
        var b = a.A;
        a.A = !1;
        eM(a);
        a.A = b;
        if (!b || null != a.check && !aM(a.j, a.check, a.m, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.width = null, a.height = null);
        if (null == a.width && null !== a.m || null == a.height && null !== a.l) a.C = !1;
        (0 == a.m || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.m = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.errors = "";
        kM(a);
        return eM(a)
    }

    function iM(a, b) {
        let c = !1;
        "none" == b.display && ($L(a.j, "n"), a.A && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || $L(a.j, "v");
        "hidden" == b.overflow && $L(a.j, "o");
        "absolute" == b.position ? ($L(a.j, "a"), c = !0) : "fixed" == b.position && ($L(a.j, "f"), c = !0);
        return c
    }

    function fM(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let k = 0; k < g.length; k++) {
            var h = g[k];
            h == b ? e = !0 : (h = qM(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && ZL(a.j, 0, "o"), d & 4 && ZL(a.j, 1, "o"));
        return !(d & 1)
    }

    function gM(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (v) {
            a.j.ya("s")
        }
        var f = c.getAttribute("width"),
            g = Pe(f),
            h = c.getAttribute("height"),
            k = Pe(h),
            l = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        b = fM(a, c, b);
        var m = d && d.width;
        const n = d && d.height;
        var p = e && e.width,
            q = e && e.height,
            x = Qe(m) == a.width && Qe(n) == a.height;
        m = x ? m : p;
        q = x ? n : q;
        p = Qe(m);
        x = Qe(q);
        g = null !== a.width && (null !== p && a.width >= p || null !== g && a.width >= g);
        x = null !== a.height && (null !== x && a.height >= x || null !== k && a.height >= k);
        k = !b && hM(d);
        x = b || x || k || !(f ||
            m || d && (!rM(String(d.minWidth)) || !sM(String(d.maxWidth))));
        l = b || g || k || l || !(h || q || d && (!rM(String(d.minHeight)) || !sM(String(d.maxHeight))));
        tM(a, 0, x, c, "width", f, a.width, a.m);
        uM(a, 0, "d", x, e, d, "width", m, a.width, a.m);
        uM(a, 0, "m", x, e, d, "minWidth", e && e.minWidth, a.width, a.m);
        uM(a, 0, "M", x, e, d, "maxWidth", e && e.maxWidth, a.width, a.m);
        a.ff ? (c = /^html|body$/i.test(c.nodeName), f = Qe(n), h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1, h = null != a.l && d && f && Math.round(f) !== a.l && !h && "100%" !== d.minHeight, a.A && !c && h && (e.setProperty("height",
            "auto", "important"), d && !rM(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !sM(String(d.maxHeight)) && a.l && Math.round(f) < a.l && e.setProperty("max-height", "none", "important"))) : (tM(a, 1, l, c, "height", h, a.height, a.l), uM(a, 1, "d", l, e, d, "height", q, a.height, a.l), uM(a, 1, "m", l, e, d, "minHeight", e && e.minHeight, a.height, a.l), uM(a, 1, "M", l, e, d, "maxHeight", e && e.maxHeight, a.height, a.l));
        return b
    }

    function jM(a) {
        function b() {
            if (0 < c) {
                var l = Ge(e, d) || {
                    width: 0,
                    height: 0
                };
                const m = Qe(l.width);
                l = Qe(l.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== l && null !== g && h && h(1, g - l);
                --c
            } else t.clearInterval(k), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.T,
            e = a.B,
            f = a.m,
            g = a.l,
            h = a.G;
        let k;
        t.setTimeout(() => {
            k = t.setInterval(b, 16)
        }, 990)
    }

    function qM(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Ge(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.v.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.v.boundingClientRect.left ? 2 : 0) | (c.bottom > a.v.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function tM(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Pe(f);
                null == f && (a.j.ya("n"), ZL(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.A)
                        if (a.C) {
                            const k = Math.max(f + h - (g || 0), 0),
                                l = a.G;
                            a.G = (m, n) => {
                                m == b && se(d, e, String(k - n));
                                l && l(m, n)
                            }
                        } else se(d, e, String(h))
                } else ZL(a.j, b, "d")
        }
    }

    function uM(a, b, c, d, e, f, g, h, k, l) {
        if (null != l) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? rM(f) : sM(f)) || (f = Qe(f), null == f ? $L(a.j, "p") : null != k && $L(a.j, f == k ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? rM(h) : sM(h)) return;
                h = Qe(h);
                null == h && (a.j.ya("p"), ZL(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.A)
                        if (a.C) {
                            const m = Math.max(h + l - (k || 0), 0),
                                n = a.G;
                            a.G = (p, q) => {
                                p == b && (e[g] = m - q + "px");
                                n && n(p, q)
                            }
                        } else e[g] = l + "px"
                } else ZL(a.j, b, c)
        }
    }
    var zM = class {
        constructor(a, b, c, d, e, f, g) {
            this.pubWin = a;
            this.B = b;
            this.H = c;
            this.v = new vM(this.B);
            this.F = this.G = null;
            this.O = !1;
            this.T = (a = this.B.ownerDocument) && (a.defaultView || a.parentWindow);
            this.v = new vM(this.B);
            this.A = g;
            this.aa = wM(this.v, d.nf, d.height, d.Mc);
            this.width = this.A ? this.v.boundingClientRect ? this.v.boundingClientRect.right - this.v.boundingClientRect.left : null : e;
            this.height = this.A ? this.v.boundingClientRect ? this.v.boundingClientRect.bottom - this.v.boundingClientRect.top : null : f;
            this.m = xM(d.width);
            this.l = xM(d.height);
            this.J = this.A ? xM(d.opacity) : null;
            this.check = d.check;
            this.Mc = !!d.Mc;
            this.C = "animate" == d.nf && !yM(this.v, this.l, this.Mc) && YL();
            this.Uc = !!d.Uc;
            this.j = new dM;
            yM(this.v, this.l, this.Mc) && $L(this.j, "r");
            e = this.v;
            e.j && e.l >= e.V && $L(this.j, "b");
            this.Pd = !!d.Pd;
            this.ff = !!d.ff
        }
    };

    function yM(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.visible) && (c ? (b = a.l + Math.min(b, xM(a.getHeight())), a = a.j && b >= a.V) : a = a.j && a.l >= a.V, d = a);
        return d
    }
    var vM = class {
        constructor(a) {
            this.boundingClientRect = null;
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && De(c);
            this.j = !!c;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.V = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && BK(b);
            this.visible = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.visible
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function wM(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return yM(a, c, d)
        }
    }

    function hM(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function AM(a, b, c, d) {
        return pM(new zM(a, b, d, c, null, null, !0))
    }
    var BM = new dM("s", ""),
        bM = RegExp("[lonvafrbpEe]", "g");

    function sM(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function rM(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function lM(a, b, c) {
        null !== b && null !== Pe(a.getAttribute("width")) && a.setAttribute("width", String(b));
        null !== c && null !== Pe(a.getAttribute("height")) && a.setAttribute("height", String(c));
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var mM = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        nM = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");

    function oM() {
        let a = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
            b = mM;
        for (var c = 0; c < b.length; c++) a += ", " + b[c] + " .2s cubic-bezier(.4, 0, 1, 1)";
        b = nM;
        for (c = 0; c < b.length; c++) a += ", " + b[c] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
        return a
    }

    function xM(a) {
        return "string" === typeof a ? Pe(a) : "number" === typeof a && isFinite(a) ? a : null
    };
    var CM = class extends NL {
        constructor(a, b, c) {
            super(a, b);
            this.m = c
        }
        ga(a) {
            a["resize-me"] = (b, c) => {
                b = Um(b);
                var d = b.r_chk;
                if (null == d || "" === d) {
                    var e = Pe(b.r_nw),
                        f = Pe(b.r_nh),
                        g = Pe(b.r_no);
                    null != g || 0 !== e && 0 !== f || (g = 0);
                    var h = b.r_str;
                    h = h ? h : null; {
                        var k = /^true$/.test(b.r_ao),
                            l = /^true$/.test(b.r_ifr),
                            m = /^true$/.test(b.r_cab);
                        const q = window;
                        if (q)
                            if ("no_rsz" === h) b.err = "7", e = !0;
                            else {
                                var n = new vM(this.j);
                                if (n.j) {
                                    var p = n.getWidth();
                                    null != p && (b.w = p);
                                    p = n.getHeight();
                                    null != p && (b.h = p);
                                    wM(n, h, f, m) ? (n = this.m, d = AM(q, n, {
                                        width: e,
                                        height: f,
                                        opacity: g,
                                        check: d,
                                        nf: h,
                                        Uc: k,
                                        Pd: l,
                                        Mc: m
                                    }, [this.j]), b.r_cui && /^true$/.test(b.r_cui.toString()) && w(n, {
                                        height: (null === f ? 0 : f - 48) + "px",
                                        top: "24px"
                                    }), null != e && (b.nw = e), null != f && (b.nh = f), b.rsz = d.toString(), b.abl = cM(d), b.frsz = ("force" === h).toString(), b.err = "0", e = !0) : (b.err = "1", e = !1)
                                } else b.err = "3", e = !1
                            }
                        else b.err = "2", e = !1
                    }
                    c.source.postMessage(JSON.stringify({
                        msg_type: "resize-result",
                        r_str: h,
                        r_status: e,
                        googMsgType: "sth"
                    }), "*");
                    this.j.dataset.googleQueryId || this.j.setAttribute("data-google-query-id",
                        b.qid)
                }
            }
        }
    };
    const DM = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const EM = /^blogger$/,
        FM = /^wordpress(.|\s|$)/i,
        GM = /^joomla!/i,
        HM = /^drupal/i,
        IM = /\/wp-content\//,
        JM = /\/wp-content\/plugins\/advanced-ads/,
        KM = /\/wp-content\/themes\/genesis/,
        LM = /\/wp-content\/plugins\/genesis/;

    function MM(a) {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src") || "";
                if (JM.test(e)) return 5;
                if (LM.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href") || "", KM.test(e) || LM.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content") ||
                    "";
                if (EM.test(f)) return 1;
                if (FM.test(f)) return 2;
                if (GM.test(f)) return 3;
                if (HM.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href") || "", IM.test(d))) return 2;
        return 0
    };
    let NM = navigator;
    var OM = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        PM = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return OM(a.toLowerCase())
        };
    const QM = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        RM = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        SM = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");

    function TM(a) {
        var b = window;
        return "on" === a.google_adtest || "on" === a.google_adbreak_test || b.location.host.endsWith("h5games.usercontent.goog") ? b.document.querySelector('meta[name="h5-games-eids"]') ? .getAttribute("content") ? .split(",").map(c => Math.floor(Number(c))).filter(c => !isNaN(c) && 0 < c) || [] : []
    };

    function UM(a, b) {
        b && !a.j && (b = b.split(":"), a.j = b.find(c => 0 === c.indexOf("ID=")) || null, a.m = b.find(c => 0 === c.indexOf("T=")) ? .substring(2) || null)
    }
    var VM = class {
            constructor() {
                this.v = new Date(Date.now());
                this.m = this.j = null;
                this.l = {
                    [3]: {},
                    [4]: {},
                    [5]: {}
                };
                this.l[3] = {
                    [71]: (...a) => {
                        var b = this.j,
                            c = Number(a[1]);
                        a = null !== b ? Ke(`${"w5uHecUBa2S"}:${Number(a[0])}:${b}`) % c === Math.floor(this.v.valueOf() / 864E5) % c : void 0;
                        return a
                    }
                };
                this.l[4] = {
                    [15]: () => {
                        var a = Number(this.m || void 0);
                        isNaN(a) ? a = void 0 : (a = new Date(1E3 * a), a = 1E4 * a.getFullYear() + 100 * (a.getMonth() + 1) + a.getDate());
                        return a
                    }
                }
            }
        },
        WM;

    function XM(a = t) {
        return a.ggeac || (a.ggeac = {})
    };

    function YM(a, b = document) {
        return !!b.featurePolicy ? .allowedFeatures().includes(a)
    };

    function ZM(a = He()) {
        return b => Ke(`${b} + ${a}`) % 1E3
    };

    function $M(a, b) {
        a.j = Kl(14, b, () => {})
    }
    class aN {
        constructor() {
            this.j = () => {}
        }
    }

    function bN(a) {
        R(aN).j(a)
    };

    function cN(a = XM()) {
        Ll(R(Tl), a);
        dN(a);
        $M(R(aN), a);
        R(ot).l()
    }

    function dN(a) {
        const b = R(ot);
        b.m = (c, d) => Kl(5, a, () => !1)(c, d, 1);
        b.v = (c, d) => Kl(6, a, () => 0)(c, d, 1);
        b.A = (c, d) => Kl(7, a, () => "")(c, d, 1);
        b.j = (c, d) => Kl(8, a, () => [])(c, d, 1);
        b.l = () => {
            Kl(15, a, () => {})(1)
        }
    };

    function eN(a, b, c) {
        var d = {
            [0]: ZM(gf(b).toString())
        };
        if (c) {
            c = aK(new eK(b), "__gads", c) || "";
            WM || (WM = new VM);
            b = WM;
            UM(b, c);
            bN(b.l);
            const e = (new RegExp(/(?:^|:)(ID=[^\s:]+)/)).exec(c) ? .[1];
            d[1] = f => e ? ZM(e)(f) : void 0
        }
        d = Ul(a, d);
        wm.gb(1085, mH(R(qH), a, d))
    }
    var fN = (a, b) => {
            eN(20, a, b);
            eN(17, a, b)
        },
        gN = a => {
            const b = R(Tl).j();
            a = TM(a);
            return b.concat(a).join(",")
        },
        hN = a => {
            const b = nj();
            b && (a.debug_experiment_id = b)
        };

    function iN() {
        const a = new Et;
        "SVGElement" in t && "createElementNS" in t.document && a.set(0);
        const b = Ve();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        "TextDecoder" in t && "TextEncoder" in t && a.set(4);
        return Dt(a)
    };
    const jN = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        kN = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function lN(a) {
        try {
            const b = a.performance ? .getEntriesByType("navigation") ? .[0];
            if (b ? .type) return jN.get(b.type) ? ? null
        } catch {}
        return kN.get(a.performance ? .navigation ? .type) ? ? null
    };

    function mN(a, b) {
        if (ac()) {
            var c = a.document.documentElement.lang;
            nN(a) ? oN(b, gf(a), !0, "", c) : (new MutationObserver((d, e) => {
                nN(a) && (oN(b, gf(a), !1, c, a.document.documentElement.lang), e.disconnect())
            })).observe(a.document.documentElement, {
                attributeFilter: ["class"]
            })
        }
    }

    function nN(a) {
        a = a.document ? .documentElement ? .classList;
        return !(!a ? .contains("translated-rtl") && !a ? .contains("translated-ltr"))
    }

    function oN(a, b, c, d, e) {
        Yl({
            ptt: `${a}`,
            pvsid: `${b}`,
            ibatl: String(c),
            pl: d,
            nl: e
        }, "translate-event")
    };

    function pN(a) {
        if (a = a.navigator ? .userActivation) {
            var b = 0;
            a ? .hasBeenActive && (b |= 1);
            a ? .isActive && (b |= 2);
            return b
        }
    };
    const qN = /[+, ]/;

    function rN(a, b) {
        const c = a.D;
        var d = a.pubWin,
            e = {},
            f = d.document;
        var g = kf(d);
        var h = Gt(d, c.google_ad_width, c.google_ad_height);
        var k = Ft(g).Me;
        var l = d.top == d ? 0 : Ae(d.top) ? 1 : 2;
        var m = 4;
        h || 1 != l ? h || 2 != l ? h && 1 == l ? m = 7 : h && 2 == l && (m = 8) : m = 6 : m = 5;
        k && (m |= 16);
        k = "" + m;
        l = It(d);
        m = !!c.google_page_url;
        e.google_iframing = k;
        0 != l && (e.google_iframing_environment = l);
        if (!m && "ad.yieldmanager.com" == f.domain) {
            for (k = f.URL.substring(f.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                k = decodeURIComponent(k)
            } catch (p) {
                break
            }
            c.google_page_url = k;
            m = !!k
        }
        m ? (e.google_page_url = c.google_page_url, e.google_page_location = (h ? f.referrer : f.URL) || "EMPTY") : (h && Ae(d.top) && f.referrer && d.top.document.referrer === f.referrer ? e.google_page_url = d.top.document.URL : e.google_page_url = h ? f.referrer : f.URL, e.google_page_location = null);
        if (f.URL === e.google_page_url) try {
            var n = Math.round(Date.parse(f.lastModified) / 1E3) || null
        } catch {
            n = null
        } else n = null;
        e.google_last_modified_time = n;
        d = g == g.top ? g.document.referrer : (d = ri()) && d.referrer || "";
        e.google_referrer_url = d;
        Ht(e, c);
        e = c.google_page_location ||
            c.google_page_url;
        "EMPTY" == e && (e = c.google_page_url);
        e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in DM), 2 <= e.length && (d = d || e[e.length - 2] in DM), e = d) : e = !1;
        e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
        b = sN(a, b);
        d = a.D;
        f = d.google_ad_channel;
        g = "/pagead/ads?";
        "ca-pub-6219811747049371" === d.google_ad_client && tN.test(f) &&
            (g = "/pagead/lopri?");
        a = Zi(b, `https://${e}${g}` + (I(a.Ga, 9) && c.google_debug_params ? c.google_debug_params : ""));
        return c.google_ad_url = a
    }

    function uN(a) {
        try {
            if (a.parentNode) return a.parentNode
        } catch {
            return null
        }
        if (9 === a.nodeType) a: {
            try {
                const c = a ? Vd(a) : window;
                if (c) {
                    const d = c.frameElement;
                    if (d && Ae(c.parent)) {
                        var b = d;
                        break a
                    }
                }
            } catch {}
            b = null
        }
        else b = null;
        return b
    }

    function vN(a, b) {
        var c = gN(a.pubWin);
        a.D.saaei && (c += ("" === c ? "" : ",") + a.D.saaei);
        b.eid = c;
        c = a.D.google_loeid;
        "string" === typeof c && (a.j |= 4096, b.loeid = c)
    }

    function wN(a, b) {
        a = (a = De(a.pubWin)) && a.document ? Bt(a.document, a) : new Id(-12245933, -12245933);
        b.scr_x = Math.round(a.x);
        b.scr_y = Math.round(a.y)
    }

    function xN(a) {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch {}
        return ""
    }

    function yN(a, b, c) {
        const d = a.D;
        var e = a.pubWin,
            f = a.I,
            g = kf(window);
        d.fsapi && (b.fsapi = !0);
        b.ref = d.google_referrer_url;
        b.loc = d.google_page_location;
        var h;
        (h = ri(e)) && va(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null : h) : h = null;
        h && (b.apn = h.substr(0, 10));
        g = Ft(g);
        b.url || b.loc || !g.url || (b.url = g.url, g.Me || (b.usrc = 1));
        g.url != (b.loc || b.url) && (b.top = g.url);
        a.vc && (b.etu = a.vc);
        (c = $K(d, f, f ? MH(c, f) : null)) && (b.fc = c);
        if (!gj(d)) {
            c = a.pubWin.document;
            g = "";
            if (c.documentMode &&
                (h = (new Rd(c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute", c.body)) {
                c.body.appendChild(h);
                try {
                    const da = h.contentWindow.document;
                    da.open();
                    da.write(od(Ad));
                    da.close();
                    g += da.documentMode
                } catch (da) {}
                c.body.removeChild(h)
            }
            b.docm = g
        }
        let k, l, m, n, p, q, x, v, D;
        try {
            var E = e.screenX;
            k = e.screenY
        } catch (da) {}
        try {
            l = e.outerWidth, m = e.outerHeight
        } catch (da) {}
        try {
            n = e.innerWidth, p = e.innerHeight
        } catch (da) {}
        try {
            q = e.screenLeft, x = e.screenTop
        } catch (da) {}
        try {
            n = e.innerWidth,
                p = e.innerHeight
        } catch (da) {}
        try {
            v = e.screen.availWidth, D = e.screen.availTop
        } catch (da) {}
        b.brdim = [q, x, E, k, v, D, l, m, n, p].join();
        E = 0;
        void 0 === t.postMessage && (E |= 1);
        0 < E && (b.osd = E);
        b.vis = BK(e.document);
        E = a.ha;
        e = UK(d) ? BM : pM(new zM(e, E, null, {
            width: 0,
            height: 0
        }, d.google_ad_width, d.google_ad_height, !1));
        b.rsz = e.toString();
        b.abl = cM(e);
        if (!UK(d) && (e = hj(d), null != e)) {
            E = 0;
            a: {
                try {
                    {
                        var F = d.google_async_iframe_id;
                        const da = window.document;
                        if (F) var A = da.getElementById(F);
                        else {
                            var J = da.getElementsByTagName("script"),
                                K = J[J.length -
                                    1];
                            A = K && K.parentNode || null
                        }
                    }
                    if (F = A) {
                        A = [];
                        J = 0;
                        for (var Q = Date.now(); 100 >= ++J && 50 > Date.now() - Q && (F = uN(F));) 1 === F.nodeType && A.push(F);
                        var za = A;
                        b: {
                            for (Q = 0; Q < za.length; Q++) {
                                c: {
                                    var U = za[Q];
                                    try {
                                        if (U.parentNode && 0 < U.offsetWidth && 0 < U.offsetHeight && U.style && "none" !== U.style.display && "hidden" !== U.style.visibility && (!U.style.opacity || 0 !== Number(U.style.opacity))) {
                                            const da = U.getBoundingClientRect();
                                            var Ta = 0 < da.right && 0 < da.bottom;
                                            break c
                                        }
                                    } catch (da) {}
                                    Ta = !1
                                }
                                if (!Ta) {
                                    var ib = !1;
                                    break b
                                }
                            }
                            ib = !0
                        }
                        if (ib) {
                            b: {
                                const da = Date.now();
                                ib = /^html|body$/i;Ta = /^fixed/i;
                                for (U = 0; U < za.length && 50 > Date.now() - da; U++) {
                                    const ge = za[U];
                                    if (!ib.test(ge.tagName) && Ta.test(ge.style.position || Oi(ge, "position"))) {
                                        var xa = ge;
                                        break b
                                    }
                                }
                                xa = null
                            }
                            break a
                        }
                    }
                } catch {}
                xa = null
            }
            xa && xa.offsetWidth * xa.offsetHeight <= 4 * e.width * e.height && (E = 1);
            b.pfx = E
        }
        a: {
            if (.05 > Math.random() && f) try {
                const da = f.document.getElementsByTagName("head")[0];
                var Uh = da ? MM(da) : 0;
                break a
            } catch (da) {}
            Uh = 0
        }
        f = Uh;
        0 !== f && (b.cms = f);
        d.google_lrv !== a.tb && (b.alvm = d.google_lrv || "none")
    }

    function UO(a, b) {
        let c = 0;
        a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : Be(() => {
            c++;
            return !1
        }, a);
        c && (b.nhd = c)
    }

    function VO(a, b) {
        const c = Z(b, 8, {});
        b = Z(b, 9, {});
        const d = a.google_ad_section,
            e = a.google_ad_format;
        a = a.google_ad_slot;
        e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
    }

    function WO(a, b, c) {
        const d = a.D;
        var e = a.D;
        b.dt = ym;
        e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
        a: {
            try {
                var f = t.performance;
                if (f && f.timing && f.now) {
                    var g = f.timing.navigationStart + Math.round(f.now()) - f.timing.domLoading;
                    break a
                }
            } catch (K) {}
            g = null
        }(e = (e = g) ? AL(e, t.Date.now() - ym, 1E6) : null) && (b.bdt = e);
        b.idt = AL(a.G, ym);
        e = a.D;
        b.shv = L(a.Ga, 2);
        a.tb && (b.mjsv = a.tb);
        "sd" == e.google_loader_used ? b.ptt = 5 : "aa" == e.google_loader_used && (b.ptt = 9);
        /^\w{1,3}$/.test(e.google_loader_used) && (b.saldr = e.google_loader_used);
        if (e = ri(a.pubWin)) b.is_amp = 1, b.amp_v = si(e), (e = ti(e)) && (b.act = e);
        e = a.pubWin;
        e == e.top && (b.abxe = 1);
        e = new eK(a.pubWin);
        (g = aK(e, "__gads", c)) && (b.cookie = g);
        (g = aK(e, "__gpi", c)) && !g.includes("&") && (b.gpic = g);
        "1" === aK(e, "__gpi_opt_out", c) && (b.pdopt = "1");
        e = TG();
        f = Z(e, 8, {});
        g = d.google_ad_section;
        f[g] && (b.prev_fmts = f[g]);
        f = Z(e, 9, {});
        f[g] && (b.prev_slotnames = f[g].toLowerCase());
        VO(d, e);
        g = Z(e, 15, 0);
        0 < g && (b.nras = String(g));
        (f = ri(window)) ? (f ? (g = f.pageViewId, f = f.clientId, "string" === typeof f && (g += f.replace(/\D/g, "").substr(0,
            6))) : g = null, g = +g) : (g = kf(window), (f = g.google_global_correlator) || (g.google_global_correlator = f = 1 + Math.floor(Math.random() * Math.pow(2, 43))), g = f);
        b.correlator = Z(e, 7, g);
        X(ht) && (b.rume = 1);
        if (d.google_ad_channel) {
            g = Z(e, 10, {});
            f = "";
            var h = d.google_ad_channel.split(qN);
            for (var k = 0; k < h.length; k++) {
                var l = h[k];
                g[l] ? f += l + "+" : g[l] = !0
            }
            b.pv_ch = f
        }
        if (d.google_ad_host_channel) {
            f = Z(e, 11, []);
            h = d.google_ad_host_channel.split("|");
            e = -1;
            g = [];
            for (k = 0; k < h.length; k++) {
                l = h[k].split(qN);
                f[k] || (f[k] = {});
                var m = "";
                for (var n = 0; n <
                    l.length; n++) {
                    var p = l[n];
                    "" !== p && (f[k][p] ? m += "+" + p : f[k][p] = !0)
                }
                m = m.slice(1);
                g[k] = m;
                "" !== m && (e = k)
            }
            f = "";
            if (-1 < e) {
                for (h = 0; h < e; h++) f += g[h] + "|";
                f += g[e]
            }
            b.pv_h_ch = f
        }
        b.frm = d.google_iframing;
        b.ife = d.google_iframing_environment;
        e = d.google_ad_client;
        try {
            var q = kf(window),
                x = q.google_prev_clients;
            x || (x = q.google_prev_clients = {});
            if (e in x) var v = 1;
            else x[e] = !0, v = 2
        } catch {
            v = 0
        }
        b.pv = v;
        a.I && X(bs) && (v = a.I, v = ac() && nN(v) ? v.document.documentElement.lang : void 0, v && (b.tl = v));
        x = a.pubWin.document;
        v = a.D;
        e = a.pubWin;
        q = x.domain;
        e = (I(c, 5) && NH(e) ? e.document.cookie : null) || "";
        h = a.pubWin.screen;
        k = x.referrer;
        m = aj();
        if (ri()) var D = window.gaGlobal || {};
        else {
            g = Math.round((new Date).getTime() / 1E3);
            f = v.google_analytics_domain_name;
            c = "undefined" == typeof f ? PM("auto", q) : PM(f, q);
            n = -1 < e.indexOf("__utma=" + c + ".");
            l = -1 < e.indexOf("__utmb=" + c);
            (q = (wi() || window).gaGlobal) || (q = {}, (wi() || window).gaGlobal = q);
            x = !1;
            if (n) {
                var E = e.split("__utma=" + c + ".")[1].split(";")[0].split(".");
                l ? q.sid = E[3] : q.sid || (q.sid = g + "");
                q.vid = E[0] + "." + E[1];
                q.from_cookie = !0
            } else {
                q.sid ||
                    (q.sid = g + "");
                if (!q.vid) {
                    x = !0;
                    l = Math.round(2147483647 * Math.random());
                    n = NM.appName;
                    p = NM.version;
                    var F = NM.language ? NM.language : NM.browserLanguage,
                        A = NM.platform,
                        J = NM.userAgent;
                    try {
                        E = NM.javaEnabled()
                    } catch (K) {
                        E = !1
                    }
                    E = [n, p, F, A, J, E ? 1 : 0].join("");
                    h ? E += h.width + "x" + h.height + h.colorDepth : t.java && t.java.awt && (h = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), E += h.screen.width + "x" + h.screen.height);
                    E = E + e + (k || "");
                    for (h = E.length; 0 < m;) E += m-- ^ h++;
                    q.vid = (l ^ OM(E) & 2147483647) + "." + g
                }
                q.from_cookie || (q.from_cookie = !1)
            }
            if (!q.cid) {
                b: for (g = f, E = 999, g && (g = 0 == g.indexOf(".") ? g.substr(1) : g, E = g.split(".").length), g = 999, e = e.split(";"), f = 0; f < e.length; f++)
                    if (h = QM.exec(e[f]) || RM.exec(e[f]) || SM.exec(e[f])) {
                        k = h[1] || 0;
                        if (k == E) {
                            D = h[2];
                            break b
                        }
                        k < g && (g = k, D = h[2])
                    }x && D && -1 != D.search(/^\d+\.\d+$/) ? (q.vid = D, q.from_cookie = !0) : D != q.vid && (q.cid = D)
            }
            q.dh = c;
            q.hid || (q.hid = Math.round(2147483647 * Math.random()));
            D = q
        }
        b.ga_vid = D.vid;
        b.ga_sid = D.sid;
        b.ga_hid = D.hid;
        b.ga_fc = D.from_cookie;
        b.ga_cid = D.cid;
        b.ga_wpids = v.google_analytics_uacct;
        UO(a.pubWin,
            b);
        (a = d.google_ad_layout) && 0 <= pL[a] && (b.rplot = pL[a])
    }

    function XO(a, b) {
        a = a.l;
        if (a ? .j() || bH()) b.npa = 1;
        if (a) {
            null != Xg(a, 3) && (b.gdpr = I(a, 3) ? "1" : "0");
            var c = H(a, 1);
            c && (b.us_privacy = c);
            (c = H(a, 2)) && (b.gdpr_consent = c);
            (c = H(a, 4)) && (b.addtl_consent = c);
            (c = z(a, 7)) && (b.tcfe = c);
            X(ir) && ((c = L(a, 11)) && (b.gpp = c), (a = Yg(a, 10, ng)) && 0 < a.length && (b.gpp_sid = a.join(",")))
        }
    }

    function YO(a, b) {
        const c = a.D;
        XO(a, b);
        Ie(dH, (d, e) => {
            b[d] = c[e]
        });
        UK(c) && (a = fL(c), b.fa = a);
        b.pi || null == c.google_ad_slot || (a = uz(c), null != a.j && (a = Go(a.getValue()), b.pi = a))
    }

    function ZO(a, b) {
        var c = vi() || zt(a.pubWin.top);
        c && (b.biw = c.width, b.bih = c.height);
        c = a.pubWin;
        c !== c.top && (a = zt(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
    }

    function $O(a, b) {
        var c = a.pubWin;
        null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = zt(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Ke(a.join(""))) : a = 0;
        0 !== a && (b.ifk = a)
    }

    function aP(a, b) {
        (a = $G()[a.D.google_ad_client]) && (b.psts = a.join())
    }

    function bP(a, b) {
        (a = a.pubWin.tmod) && (b.tmod = a)
    }

    function cP(a, b) {
        if (a = a.pubWin.google_user_agent_client_hint) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a.charCodeAt(e);
                255 < f && (c[d++] = f & 255, f >>= 8);
                c[d++] = f
            }
            a = of (c);
            b.uach = a
        }
    }

    function dP(a, b) {
        try {
            const e = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
            if (e) {
                var c = JSON.parse(e("os-mode")),
                    d = parseInt(c["os-mode"], 10);
                0 <= d && (b.wsm = d + 1)
            }
        } catch {}
    }

    function eP(a, b) {
        0 <= a.D.google_ad_public_floor && (b.pubf = a.D.google_ad_public_floor);
        0 <= a.D.google_ad_private_floor && (b.pvtf = a.D.google_ad_private_floor)
    }

    function fP(a, b) {
        const c = Number(a.D.google_traffic_source);
        c && Object.values(Ka).includes(c) && (b.trt = a.D.google_traffic_source)
    }

    function gP(a, b) {
        X(nt) || "runAdAuction" in a.pubWin.navigator && "joinAdInterestGroup" in a.pubWin.navigator && (b.td = 1)
    }

    function hP(a, b) {
        X(et) || YM("attribution-reporting", a.pubWin.document) && (b.nt = 1)
    }

    function iP(a, b) {
        if (X(Ts) && "string" === typeof a.D.google_privacy_treatments) {
            var c = new Map([
                ["disablePersonalization", 1]
            ]);
            a = a.D.google_privacy_treatments.split(",");
            var d = [];
            for (const [e, f] of c.entries()) c = f, a.includes(e) && d.push(c);
            d.length && (b.ppt = d.join("~"))
        }
    }

    function sN(a, b) {
        const c = {};
        YO(a, c);
        cP(a, c);
        WO(a, c, b);
        c.u_tz = -(new Date).getTimezoneOffset();
        c.u_his = aj();
        c.u_h = ji.screen ? .height;
        c.u_w = ji.screen ? .width;
        c.u_ah = ji.screen ? .availHeight;
        c.u_aw = ji.screen ? .availWidth;
        c.u_cd = ji.screen ? .colorDepth;
        c.u_sd = At(a.pubWin);
        c.dmc = a.pubWin.navigator ? .deviceMemory;
        dm(889, () => {
            if (null == a.I) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = $J(a.I, a.ha);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                Ct(a.ha) || (c.adx = -12245933,
                    c.ady = -12245933, a.j |= 32768)
            }
        });
        ZO(a, c);
        $O(a, c);
        wN(a, c);
        vN(a, c);
        c.oid = 2;
        aP(a, c);
        c.pvsid = gf(a.pubWin, bm);
        bP(a, c);
        dP(a, c);
        c.uas = pN(a.pubWin);
        const d = lN(a.pubWin);
        d && (c.nvt = d);
        a.B && (c.scar = a.B);
        a.v instanceof Uint8Array ? c.topics = of (a.v) : a.v && (c.topics = a.v, c.tps = a.v);
        yN(a, c, b);
        c.fu = a.j;
        c.bc = iN();
        I(a.Ga, 9) && (hN(c), c.creatives = xN(/\b(?:creatives)=([\d,]+)/), c.adgroups = xN(/\b(?:adgroups)=([\d,]+)/), c.adgroups && (c.adtest = "on", c.disable_budget_throttling = !0, c.use_budget_filtering = !1, c.retrieve_only = !0, c.disable_fcap = !0));
        sm() && (c.atl = !0);
        eP(a, c);
        fP(a, c);
        gP(a, c);
        hP(a, c);
        iP(a, c);
        null == qt(Us) || !1 !== a.D.google_video_play_muted && !0 !== X(Vs) || 10 !== a.D.google_reactive_ad_format && 11 !== a.D.google_reactive_ad_format || (c.sdkv = qt(Us));
        return c
    }
    const tN = /YtLoPri/;
    var jP = class extends O {},
        kP = Ih(jP);
    jP.P = [3];
    const lP = [255, 255, 255];

    function mP(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a || "" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function nP(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = mP(b.backgroundColor);
        var c = oP(b);
        if (c) return c;
        a = (a = a.parentElement) ? nP(a) : lP;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function oP(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var qP = class {
        constructor(a, b, c, d) {
            this.gf = b;
            this.fe = c;
            this.Vb = d;
            this.l = 0;
            this.j = new pP(a)
        }
    };

    function rP(a, b) {
        b -= a.v;
        for (const c of a.j.keys()) {
            const d = a.j.get(c);
            let e = 0;
            for (; e < d.length && d[e] < b;) e++;
            a.l -= e;
            0 < e && a.j.set(c, d.slice(e))
        }
    }
    class pP {
        constructor(a) {
            this.v = a;
            this.j = new Map;
            this.l = 0
        }
        get m() {
            return this.l
        }
    };

    function sP(a) {
        w(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    };

    function tP(a, b) {
        a = uP(a.document, "search");
        w(a, b);
        a.className = "google-material-icons";
        return a
    }

    function vP(a, b) {
        a = uP(a, "close");
        w(a, {
            color: qt(mJ) || "#5F6368",
            display: "block",
            "font-size": "20px",
            left: "13px",
            right: "",
            "pointer-events": "initial",
            position: "absolute",
            top: "15px",
            transform: "none"
        });
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }

    function uP(a, b) {
        const c = a.createElement("SPAN");
        c.appendChild(a.createTextNode(b));
        sP(c);
        w(c, {
            "font-family": '"Google Material Icons"',
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        });
        c.className = "google-material-icons";
        return c
    };

    function wP(a, b) {
        return xP(a, "100 -1000 840 840", `calc(${b} - 2px)`, b, "m784-120-252-252q-30 24-69 38t-83 14q-109 0-184.5-75.5t-75.5-184.5q0-109 75.5-184.5t184.5-75.5q109 0 184.5 75.5t75.5 184.5q0 44-14 83t-38 69l252 252-56 56zm-404-280q75 0 127.5-52.5t52.5-127.5q0-75-52.5-127.5t-127.5-52.5q-75 0-127.5 52.5t-52.5 127.5q0 75 52.5 127.5t127.5 52.5z")
    }

    function yP(a, b) {
        a = xP(a, "0 -960 960 960", "20px", "20px", "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z");
        a.role = "button";
        a.ariaLabel = b;
        a.tabIndex = 0;
        return a
    }

    function xP(a, b, c, d, e) {
        const f = a.createElementNS("http://www.w3.org/2000/svg", "path");
        f.setAttribute("d", e);
        a = a.createElementNS("http://www.w3.org/2000/svg", "svg");
        a.setAttribute("viewBox", b);
        a.setAttribute("width", c);
        a.setAttribute("height", d);
        sP(a);
        a.appendChild(f);
        return a
    };
    const zP = ["Google Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200", "Google Sans Text:400,500"];

    function AP(a, b, c, d, e) {
        a = new BP(a, b, c, d, e);
        if (a.v) {
            go(a.win, zP);
            var f = a.win;
            b = a.message;
            c = ou(f);
            e = c.shadowRoot;
            d = e.appendChild;
            f = new Rd(f.document);
            var g = pq('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Google+Symbols:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/><link href="https://fonts.googleapis.com/css?family=Google+Sans+Text:400,500" rel="stylesheet"><style>.ipr-container {font-family: \'Google Sans Text\'; font-style: normal; font-weight: 400; font-size: 12px; line-height: 14px; color: #000; border-top: 2px solid rgb(236, 237, 237); border-bottom: 2px solid rgb(236, 237, 237); background-color: #fff; padding: 5px; margin: 5px 0; text-align: center;}.ipr-button {border: none; background: none; font-family: \'Google Sans Text\'; color: #0b57d0; font-weight: 500; font-size: 14px; line-height: 22px; cursor: pointer; margin: 0; padding: 0;}.ipr-display-none {display: none;}</style><div class="ipr-container"><button class="ipr-button"></button><div class="ipr-info"></div></div>');
            d.call(e,
                ee(f, kq(g)));
            d = Gv("ipr-container", e);
            e = Gv("ipr-button", d);
            b.actionButton ? (e.appendChild(b.actionButton.buttonText), e.addEventListener("click", b.actionButton.onClick)) : e.classList.add("ipr-display-none");
            d = Gv("ipr-info", d);
            b.informationText ? d.appendChild(b.informationText) : d.classList.add("ipr-display-none");
            a.j = c.Wa;
            zz(a.v, a.j);
            a.m && a.m(Ik(1));
            CP(a)
        } else DP(a)
    }

    function CP(a) {
        const b = new jo(a.win);
        b.K(2E3);
        zl(a, b);
        ho(b, () => {
            EP(a);
            DP(a);
            b.ma()
        })
    }

    function DP(a) {
        Px(a.win, a.Lb).addRegulatoryMessage({
            messageSpec: {
                regulatoryMessage: a.message,
                orderingIndex: 0
            }
        });
        a.m && a.m(Ik(2))
    }

    function EP(a) {
        a.j && (a.j.parentNode ? .removeChild(a.j), a.j = null)
    }
    var BP = class extends P {
        constructor(a, b, c, d, e) {
            super();
            this.win = a;
            this.v = b;
            this.message = c;
            this.Lb = d;
            this.m = e;
            this.j = null
        }
        l() {
            EP(this);
            super.l()
        }
    };

    function FP(a, b, c, d, e, f, g) {
        if (!a.j) {
            var h = b.document.createElement("span");
            h.appendChild(f ? wP(b.document, "12px") : tP(b, {}));
            h.appendChild(b.document.createTextNode(d));
            AP(b, c || null, {
                informationText: h
            }, e, g ? k => {
                var l = g.handle,
                    m = GP(g, 16);
                k = jh(m, 11, kl, k);
                l.call(g, k)
            } : g);
            a.j = !0
        }
    }
    var HP = class {
        constructor() {
            this.j = !1
        }
    };
    const IP = [{
        Rd: "1907259590",
        Fd: 480,
        Db: 220
    }, {
        Rd: "2837189651",
        Fd: 400,
        Db: 180
    }, {
        Rd: "9211025045",
        Fd: 360,
        Db: 160
    }, {
        Rd: "6584860439",
        Fd: -Infinity,
        Db: 150
    }];

    function JP(a) {
        return IP.find(b => b.Fd <= a)
    };

    function KP(a, b) {
        return b ? a.replace("ca", "partner") : "pub-adfiliates-query-origin"
    };

    function LP(a) {
        MP.j.push(a)
    }
    const MP = new class {
        constructor() {
            this.j = []
        }
    };
    let NP = !1;

    function OP(a) {
        PP(a.config, 1065, a.win, () => {
            if (!a.j) {
                var b = new hl;
                b = M(b, 1, a.l);
                var c = new gl;
                b = jh(b, 2, il, c);
                QP(a.config.la, b)
            }
        }, 1E4)
    }
    class RP {
        constructor(a, b, c) {
            this.win = a;
            this.config = b;
            this.l = c;
            this.j = !1
        }
        cancel(a) {
            this.win.clearTimeout(a)
        }
    }

    function SP(a, b, c, d, e, f) {
        const g = JP(a.document.body.clientWidth);
        d = b.sa ? TP(a, b, d, g, e, f) : UP(a, b, d, g, e, f);
        un(d.isVisible(), !1, () => {
            NP = !1;
            var k = MP;
            for (const l of k.j) l();
            k.j.length = 0
        });
        d.show({
            Yf: !0
        });
        NP = !0;
        const h = new RP(a, b, c);
        OP(h);
        LP(() => {
            var k = b.la;
            var l = new hl;
            l = M(l, 1, c);
            var m = new fl;
            l = jh(l, 3, il, m);
            QP(k, l);
            h.j = !0
        })
    }

    function TP(a, b, c, d, e, f) {
        d = b.L.Pc ? VP(a, b, c, f) : WP(a, b, c, {
            me: d,
            Zf: a.innerWidth,
            Xf: "100%",
            Bg: "15px",
            Wf: "13px",
            Cg: "center",
            Zg: 0
        }, e, f);
        return Iw(a, d, {
            af: .75,
            Ee: .95,
            zIndex: 100001,
            qb: !0,
            ue: "adpub-drawer-root",
            se: !1,
            Ja: !0,
            Be: new S(L(b.W, 10).replace("TERM", c))
        })
    }

    function UP(a, b, c, d, e, f) {
        a: {
            var g = a.document.body.clientWidth;
            var h = .9 * g;
            for (g = 768 >= g ? 3 : 4; 1 <= g; g--) {
                const k = d.Db * g + 42;
                if (k <= h) {
                    h = k;
                    break a
                }
            }
        }
        d = b.L.Pc ? VP(a, b, c, f) : WP(a, b, c, {
            me: d,
            Zf: h,
            Xf: "600px",
            Bg: "24px",
            Wf: "24px",
            Cg: "start",
            Zg: 0
        }, e, f);
        return Sv(a, d, {
            yc: `${h}px`,
            xc: b.na(),
            mc: L(b.W, 14),
            zIndex: 100001,
            qb: !0,
            gd: !0,
            ue: "adpub-drawer-root",
            se: !1,
            Ja: !0,
            Be: new S(L(b.W, 10).replace("TERM", c))
        })
    }

    function VP(a, b, c, d) {
        const e = a.document.createElement("iframe");
        var f = b.W;
        f = new Wq(e, L(f, 16), "anno-cse", KP(b.l, I(f, 22)), "ShoppingVariant", a.location, L(f, 7), L(f, 10).replace("TERM", c), b.L.ne, !1, !0);
        f.K();
        XP(a, b, e, c, f, d);
        return e
    }

    function WP(a, b, c, d, e, f) {
        var g = b.W,
            h = L(g, 10),
            k = h.indexOf("TERM"),
            l = d.Zf,
            m = d.me;
        l = Math.max(Math.floor((l - Math.floor(l / m.Db) * m.Db) / 2), 5);
        m = d.Xf;
        const n = L(g, 3),
            p = d.Bg,
            q = d.Wf,
            x = d.Cg,
            v = L(g, 6),
            D = h.substring(0, k);
        h = h.substring(k + 4);
        k = !!I(g, 13);
        e = pq('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700&display=swap" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 ' + tq(V(p)) +
            " " + tq(V(q)) + "; text-align: " + tq(V(x)) + ';">' + (e ? '<div style="max-width: ' + tq(V(m)) + '">' + oq(n) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + oq(v) + "</a></div>" : "") + "</div><div style=\"border-bottom: 1px solid #eee; color: #202124; font-family: 'Google Sans'; font-size: 15px; line-height: 24px; padding: 15px " + tq(V(p)) + "; text-align: " + tq(V(x)) + '"><div style="display: -webkit-box; overflow: hidden; -webkit-line-clamp: 2; -webkit-box-orient: vertical;"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">search</span><span style="color:#80868b"> ' +
            oq(D) + "</span>" + oq(c) + '<span style="color:#80868b">' + oq(h) + '</span></div></div><div id="anno-csa" style="margin:5px ' + tq(V(l)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');parent.postMessage({query:" + xq(yq(c)) + "},parent.location.origin);\x3c/script>" + (k ? "<script>const el = document.getElementById('anno-csa'); el.dir = 'ltr'; el.style.height = '800px'; el.style.width = '75vw'; el.style.overflow = 'hidden'; el.style.overflowWrap = 'break-word'; el.textContent = JSON.stringify(window._googCsa.q);\x3c/script>" :
                '<script async="async" src="https://www.google.com/adsense/search/ads.js">\x3c/script>') + "</div>");
        g = {
            dir: b.na() ? "rtl" : "ltr",
            lang: L(g, 7),
            style: bd({
                margin: "0",
                height: "100%",
                "padding-top": `${d.Zg}px`,
                overflow: "hidden"
            })
        };
        e = kq(e);
        sd("body");
        g = vd("body", g, e);
        e = a.document.createElement("IFRAME");
        w(e, {
            border: "0",
            width: "100%"
        });
        YP(a, b, e, c, d.me, f);
        e.srcdoc = od(g);
        return e
    }

    function YP(a, b, c, d, e, f) {
        const g = ZP(b, a, function(h) {
            h.data.query === d && $P(a, b, c, d, e, f)
        });
        LP(() => {
            a.removeEventListener("message", g)
        })
    }

    function XP(a, b, c, d, e, f) {
        const g = ZP(b, a.top, function(h) {
            "init" === h.data.action && "ShoppingVariant" === h.data.adChannel && aQ(a, b, c, e, d, f)
        });
        LP(() => {
            a.top.removeEventListener("message", g)
        })
    }

    function $P(a, b, c, d, e, f) {
        const g = c.contentDocument ? .documentElement;
        g && ((new ResizeObserver(() => {
            c.height = `${g.offsetHeight}px`
        })).observe(g), bQ(b, a, () => {
            const h = g.offsetHeight;
            h && (c.height = `${h}px`)
        }), cQ(b, c, d, e, f))
    }

    function aQ(a, b, c, d, e, f) {
        I(b.W, 13) || Uq(d, e, f);
        const g = c.contentDocument.documentElement,
            h = new ResizeObserver(() => {
                c.height = `${Math.ceil(g.offsetHeight+22)}px`
            });
        h.observe(g);
        const k = bQ(b, a, () => {
            const l = g.offsetHeight;
            l && (c.height = `${l+22}px`)
        });
        LP(() => {
            h.disconnect();
            a.clearInterval(k)
        })
    }

    function cQ(a, b, c, d, e) {
        const f = a.W,
            g = b.contentWindow;
        b = b ? .contentDocument || b.contentWindow ? .document;
        if (g) {
            if (void 0 === g._googCsa) throw Error("No _googCsa");
            if (!b) throw Error("No contentDocument");
        } else throw Error("No googCsa window");
        a = {
            pubId: KP(a.l, I(f, 22)),
            styleId: d.Rd,
            disableCarousel: !0,
            query: c,
            hl: L(f, 7),
            personalizedAds: "false",
            fexp: a.L.Ic.join(","),
            adfiliateWp: a.l,
            adtest: a.ae ? "on" : ""
        };
        e && (a.afdToken = e);
        g._googCsa("ads", a, {
            container: "anno-csa",
            linkTarget: "_blank",
            number: 8,
            width: b.body.offsetWidth -
                30
        });
        I(f, 13) && (e = b.getElementById("anno-csa"), e.dir = "ltr", e.style.height = "800px", e.style.width = "75vw", e.style.overflow = "hidden", e.style.j = "break-word", e.textContent = JSON.stringify(g._googCsa.q))
    };
    var dQ = class {
            constructor(a) {
                this.j = a
            }
            La() {
                return this.j.now()
            }
        },
        eQ = class {
            La() {
                return Date.now()
            }
        };

    function fQ(a) {
        a = mP(a);
        var b = new Tk;
        b = yh(b, 1, a[0]);
        b = yh(b, 2, a[1]);
        b = yh(b, 3, a[2]);
        return dh(b, 4, bg(a[3]), 0)
    };

    function gQ(a, b) {
        var c;
        if (!(c = hQ(a, b))) {
            if (b.uc) a: {
                c = b.R;
                var d = iQ(a, b);a = 16;
                for (const e of d) {
                    d = e.start;
                    const f = e.end;
                    if (d > a) {
                        if (d - a - 16 >= b.Wb) {
                            b = jQ(b, d, a);
                            break a
                        }
                        a = f + 16
                    } else f >= a && (a = f + 16)
                }
                b = c - a - 16 >= b.Wb ? jQ(b, c, a) : null
            }
            else b = null;
            c = b
        }
        return c
    }

    function hQ(a, b) {
        const c = b.sa === b.na;
        var d = b.Ib ? kQ(a, b, c) : null;
        if (b.Ib && !d) return null;
        d = d ? d.position.md() : 16;
        a = lQ(a, d, b, function(f) {
            f = f.getBoundingClientRect();
            return c ? b.R - f.right : f.left
        });
        if (!a || a - 16 < b.Wb) return null;
        const e = b.R;
        return {
            ua: c ? e - a : 16,
            Ea: c ? 16 : e - a,
            ba: d
        }
    }

    function mQ(a, b) {
        const c = Jm(a),
            d = Nm(a);
        return 0 < uu(new wu(a), new ki(d - b.ba - 50, c - b.Ea, d - b.ba, b.ua)).size
    }

    function kQ(a, b, c) {
        b = Math.floor(b.V * b.Ec);
        return 66 > b ? null : Pw(a, {
            dc: c ? Vw({
                ba: 16,
                Ea: 16
            }) : Tw({
                ba: 16,
                ua: 16
            }),
            Pe: b - 66,
            Ab: 50,
            Se: 50,
            Cd: b,
            nb: 16
        }, [a.document.body]).ge
    }

    function lQ(a, b, c, d) {
        a = c.sa ? nQ(a, b, c) : oQ(a, b, c);
        b = c.R;
        let e = c.sa ? b : .35 * b;
        a.forEach(f => {
            e = Math.min(e, d(f))
        });
        return 16 > e ? null : e - 16
    }

    function nQ(a, b, c) {
        const d = c.V;
        return uu(new wu(a), new ki(d - b - 50, c.R - 16, d - b, 16))
    }

    function oQ(a, b, c) {
        const d = c.V,
            e = c.R;
        c = c.na;
        return uu(new wu(a), new ki(d - b - 50, (c ? .35 * e : e) - 16, d - b, (c ? 16 : .65 * e) + 16))
    }

    function jQ(a, b, c) {
        const d = a.na;
        return {
            ua: d ? pQ(a, b, c) : c,
            Ea: d ? c : pQ(a, b, c),
            ba: 16
        }
    }

    function pQ(a, b, c) {
        const d = a.R;
        return a.sa ? d - b + 16 : Math.max(d - c - .35 * d, d - b + 16)
    }

    function iQ(a, b) {
        const c = b.na,
            d = b.R;
        a = b.sa ? nQ(a, 16, b) : oQ(a, 16, b);
        return Array.from(a).map(e => new Ow(c ? d - e.getBoundingClientRect().right : e.getBoundingClientRect().left, c ? d - e.getBoundingClientRect().left : e.getBoundingClientRect().right)).sort((e, f) => e.start - f.start)
    };

    function qQ(a, b, c, d, e, f, g) {
        w(c, {
            width: "50px",
            bottom: g ? g.ba + "px" : "16px",
            left: b.na() === b.sa ? "" : g ? g.ua + "px" : "16px",
            right: b.na() === b.sa ? g ? g.Ea + "px" : "16px" : ""
        });
        c.role = "button";
        c.ariaLabel = b.Fe();
        w(e, {
            display: "none"
        });
        w(d, {
            display: "none"
        });
        const h = uP(a.document, "shoppingmode");
        w(h, {
            position: "absolute",
            top: "13px",
            left: "12px",
            color: qt(mJ) || "#1967D2"
        });
        c.appendChild(h);
        rQ(b, 1064, c, k => {
            h.remove();
            w(c, {
                bottom: g ? g.ba + "px" : "16px",
                left: g ? g.ua + "px" : b.sa ? "16px" : b.na() ? "16px" : "65%",
                right: g ? g.Ea + "px" : sQ(b),
                width: ""
            });
            c.role = "";
            c.ariaLabel = "";
            w(e, {
                display: ""
            });
            w(d, {
                display: "flex"
            });
            f.focus();
            k.preventDefault();
            return !1
        });
        c.focus()
    }

    function sQ(a) {
        return a.na() ? a.sa ? "16px" : "65%" : "16px"
    };

    function tQ(a, b, c, d, e, f) {
        const g = document.createElement("SPAN");
        g.id = "gda";
        g.appendChild(b.Fa() ? yP(a.document, b.nd()) : vP(a.document, b.nd()));
        rQ(b, 1064, g, h => {
            qQ(a, b, c, d, g, e, f);
            h.preventDefault();
            h.stopImmediatePropagation();
            return !1
        });
        return g
    }

    function uQ(a) {
        (new MutationObserver(b => {
            b.forEach(c => {
                "attributes" === c.type && "0px" === a.document.body.style.paddingBottom && w(a.document.body, {
                    "padding-bottom": (X(kJ) ? 66 : 45) + "px"
                })
            })
        })).observe(a.document.body, {
            attributes: !0
        })
    }

    function vQ(a, b, c, d, e) {
        var f = a.getComputedStyle(a.document.body).paddingBottom.match(/\d+/);
        f = (f && f.length ? Number(f[0]) : 0) + (X(kJ) ? 66 : 45);
        w(a.document.body, {
            "padding-bottom": f + "px"
        });
        uQ(a);
        f = document.createElement("div");
        f.id = "google-anno-sa";
        f.dir = b.na() ? "rtl" : "ltr";
        f.tabIndex = 0;
        var g = {
            background: qt(lJ) || "white",
            "border-style": "solid",
            bottom: e ? e.ba + "px" : "16px",
            "border-radius": "16px",
            height: "50px",
            position: "fixed",
            "text-align": "center",
            border: "0px",
            left: e ? e.ua + "px" : b.sa ? "16px" : b.na() ? "16px" : "65%",
            right: e ? e.Ea + "px" : sQ(b),
            "box-shadow": "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
            "z-index": "1000"
        };
        w(f, g);
        b.Fa() && w(f, {
            fill: "white"
        });
        const h = document.createElement("SPAN");
        g = document.createElement("SPAN");
        sP(g);
        var k = {
            position: "absolute",
            top: "2.5px",
            bottom: "2.5px",
            left: (b.na(), "50px"),
            right: b.na() ? "24px" : "12px",
            display: "flex",
            "flex-direction": "row",
            color: qt(mJ) || "#1967D2",
            cursor: "pointer",
            transition: "width 5s"
        };
        w(g, k);
        b.sa || w(g, {
            "justify-content": ""
        });
        k = b.Fa() ? xP(a.document,
            "0 -960 960 960", "20px", "20px", "M503-104q-24 24-57 24t-57-24L103-390q-23-23-23-56.5t23-56.5l352-353q11-11 26-17.5t32-6.5h286q33 0 56.5 23.5T879-800v286q0 17-6.5 32T855-456L503-104Zm196-536q25 0 42.5-17.5T759-700q0-25-17.5-42.5T699-760q-25 0-42.5 17.5T639-700q0 25 17.5 42.5T699-640ZM446-160l353-354v-286H513L160-446l286 286Zm353-640Z") : uP(a.document, "shoppingmode");
        if (b.Fa()) {
            var l = b.na();
            l = {
                "margin-left": l ? "6px" : "4px",
                "margin-right": l ? "4px" : "6px",
                "margin-top": "12px"
            }
        } else l = b.na(), l = {
            "font-size": "20px",
            width: "15px",
            height: "15px",
            "margin-left": l ? "10px" : "",
            "margin-right": l ? "" : "10px",
            "margin-top": "12px",
            "line-height": "normal"
        };
        w(k, l);
        g.appendChild(k);
        h.classList ? .add("google-anno-sa-qtx", "google-anno-skip");
        k = b.pd();
        h.tabIndex = 0;
        h.role = "link";
        h.ariaLive = "polite";
        h.ariaLabel = k.replace("TERM", d);
        w(h, {
            height: "40px",
            "align-items": "center",
            "line-height": "44px",
            "font-size": "16px",
            "font-weight": "400",
            "font-style": "normal",
            "font-family": "Roboto",
            "text-overflow": "ellipsis",
            "white-space": "nowrap",
            overflow: "hidden",
            "-webkit-tap-highlight-color": "transparent"
        });
        rQ(b, 999, g, c);
        g.appendChild(h);
        a = tQ(a, b, f, g, h, e);
        f.appendChild(g);
        f.appendChild(a);
        return f
    }

    function wQ(a, b, c) {
        b = b.getElementsByClassName("google-anno-sa-qtx")[0];
        b instanceof HTMLElement && (b.innerText = c.L.ce ? a.j : L(c.W, 11).replace("TERM", a.j));
        b.ariaLabel = c.W.pd().replace("TERM", a.j);
        c = c.la;
        b = new Lk;
        b = zh(b, 1, a.m);
        b = Bh(b, 4, a.j);
        a = c.handle;
        var d = GP(c, 13);
        b = jh(d, 6, kl, b);
        return a.call(c, b)
    }

    function xQ(a, b, c, d) {
        if (c.L.Ta && c.L.df && mQ(b, d) || !c.L.Ta && vB(b)) return null;
        d = vQ(b, c, f => {
            var g = c.la;
            var h = new bl;
            h = Bh(h, 4, a.j);
            h = zh(h, 1, a.m);
            h = zh(h, 3, a.l);
            g = yQ(g, h);
            SP(b, c, g, a.j, !1, c.v.get(a.j) || "");
            f.preventDefault();
            return !1
        }, a.j, d);
        const e = wQ(a, d, c);
        b.document.body.appendChild(d);
        return e
    }

    function zQ(a, b, c, d, e, f) {
        if (a.j !== d || null !== a.m || a.v !== e) {
            if (null !== a.l) {
                var g = a.l,
                    h = c.la;
                var k = new Kk;
                k = M(k, 1, g);
                g = h.handle;
                var l = GP(h, 14);
                k = jh(l, 7, kl, k);
                g.call(h, k)
            }
            a.j = d;
            a.m = null;
            a.v = e;
            I(c.W, 17) || (d = b.document.getElementById("google-anno-sa"), a.l = d ? wQ(a, d, c) : xQ(a, b, c, f))
        }
    }
    var AQ = class {
        constructor() {
            this.j = "";
            this.m = null;
            this.v = "";
            this.l = null
        }
    };

    function BQ(a, b) {
        a.j >= a.l.length && (a.j = 0);
        if (NP) LP(() => void BQ(a, b));
        else {
            var c = a.l[a.j++];
            a.m = !1;
            zQ(a.A, a.win, a.config, c.j, c.l, a.v);
            PP(a.config, 898, a.win, () => void BQ(a, b), a.pf)
        }
    }
    var CQ = class {
        constructor(a, b, c) {
            var d = new AQ;
            this.win = a;
            this.config = b;
            this.A = d;
            this.v = c;
            this.l = [];
            this.m = !0;
            this.j = 0;
            this.pf = b.lc.pf
        }
    };
    class DQ {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function EQ(a, b, c, d) {
        b.forEach(e => {
            var f = Vk(1);
            f = Bh(f, 4, e);
            FQ(c, f);
            d.l.push(new DQ(e, e));
            d.m && BQ(d, a)
        })
    };
    const GQ = /[\s!'",:;\\(\\)\\?\\.\u00bf\u00a1\u30a0\uff1d\u037e\u061f\u3002\uff1f\uff1b\uff1a\u2014\u2014\uff5e\u300a\u300b\u3008\u3009\uff08\uff09\u300c\u300d\u3001\u00b7\u2026\u2025\uff01\uff0c\u00b7\u2019\u060c\u061b\u060d\u06d4\u0648]/;

    function HQ(a, b) {
        switch (b) {
            case 1:
                b = 0;
                for (let c = a.length - 1; 0 <= c; c--) GQ.test(a[c]) || b++;
                return b;
            default:
                return a = a.trim(), "" === a ? 0 : a.split(/\s+/).length
        }
    }
    const IQ = {
        ar: 6.36,
        bg: 6.81,
        bn: 6.9,
        ca: 6.61,
        cs: 7.36,
        da: 7.28,
        de: 7.99,
        el: 7.4,
        en: 6.47,
        es: 6.51,
        fi: 9.48,
        fr: 6.58,
        gu: 6.48,
        hi: 5.57,
        hr: 7.34,
        hu: 8.59,
        id: 7.52,
        it: 6.85,
        iw: 6.13,
        ja: 1.89,
        kn: 9.33,
        ko: 4.42,
        lt: 8.31,
        lv: 7.95,
        ml: 10.18,
        mr: 7.36,
        ms: 7.37,
        nl: 7.58,
        no: 7.16,
        pl: 7.67,
        pt: 6.85,
        ro: 7.04,
        ru: 7.86,
        sk: 7.49,
        sr: 6.77,
        sv: 7.31,
        ta: 10.44,
        te: 8.2,
        th: 5,
        tr: 8.58,
        uk: 7.71,
        ur: 5.05,
        vi: 4.76,
        zh: 1.15
    };

    function JQ(a, b) {
        switch (b) {
            case 1:
                return !0;
            default:
                return "" === a || GQ.test(a)
        }
    }

    function KQ(a, b, c, d) {
        return JQ(a.charAt(b - 1), d) && JQ(a.charAt(c + 1), d)
    };
    var LQ = class {
        constructor(a) {
            this.j = a
        }
        isEmpty() {
            return this.j.isEmpty()
        }
        match(a) {
            return this.j.match(a)
        }
    };
    class MQ {
        constructor(a) {
            this.A = a;
            this.size = 1;
            this.j = [new NQ];
            this.l = [];
            this.v = new Map;
            this.m = new Map;
            this.B = 0
        }
        isEmpty() {
            return 0 === this.B
        }
        match(a) {
            let b = 0;
            const c = [];
            for (let f = 0; f < a.length; f++) {
                for (;;) {
                    var d = a.charCodeAt(f),
                        e = this.j[b];
                    if (e.contains(d)) {
                        b = e.m.get(d);
                        break
                    }
                    if (0 === b) break;
                    b = e.j
                }
                for (d = b;;) {
                    d = this.j[d].l;
                    if (0 === d) break;
                    e = f + 1 - this.l[this.j[d].C];
                    const g = f;
                    KQ(a, e, g, this.A) && c.push(new OQ(e, g, this.m.get(this.j[d].v)));
                    d = this.j[d].j
                }
            }
            return c
        }
    }
    class NQ {
        constructor() {
            this.m = new Map;
            this.J = !1;
            this.ga = this.H = this.F = this.aa = this.O = this.T = -1
        }
        contains(a) {
            return this.m.has(a)
        }
        set B(a) {
            this.T = a
        }
        get B() {
            return this.T
        }
        set G(a) {
            this.O = a
        }
        get G() {
            return this.O
        }
        set A(a) {
            this.J = a
        }
        get A() {
            return this.J
        }
        set v(a) {
            this.H = a
        }
        get v() {
            return this.H
        }
        set j(a) {
            this.aa = a
        }
        get j() {
            return this.aa
        }
        set l(a) {
            this.F = a
        }
        get l() {
            return this.F
        }
        set C(a) {
            this.ga = a
        }
        get C() {
            return this.ga
        }
        get childNodes() {
            return this.m.values()
        }
    }
    var OQ = class {
        constructor(a, b, c) {
            this.m = a;
            this.l = b;
            this.B = c
        }
        get v() {
            return this.m
        }
        get A() {
            return this.l
        }
        get j() {
            return this.B
        }
        get length() {
            return this.l - this.m
        }
    };
    const PQ = ["block", "inline", "inline-block", "list-item", "table-cell"];
    async function QQ(a, b, c, d, e, f) {
        if (!c.L.Fa && !I(c.W, 17)) {
            var g = a.document,
                h = g.createElement("style");
            h.textContent = ld(Ii `@font-face{font-family:"goog-matfb";size-adjust:39.13%;src:local("Times New Roman"),local("Tinos");}`);
            g.head.appendChild(h)
        }
        d.j.La(5) >= d.l && await RQ(d, 6);
        c.L.we || (g = C(c.W, ei, 15), h = c.L.Ta ? gQ(a, SQ(a, c)) : null, g.length && TQ(a, b, c, e, g, h));
        c.L.xe || await UQ(a, c, d, e, f)
    }

    function TQ(a, b, c, d, e, f) {
        c.L.Ce && !f ? PP(c, 898, a, () => {
            VQ(a, b, c, d, e, gQ(a, SQ(a, c)))
        }, c.L.be) : VQ(a, b, c, d, e, f)
    }

    function WQ(a, b, c, d) {
        var e = !0;
        const f = b.va;
        let g = rB({
            I: a,
            Qe: 3E3,
            Te: 400,
            va: f,
            Kh: !b.L.Ta
        });
        b.L.Ta && !c && (g |= 16777216);
        if (c = g) e = XQ(d), M(e, 2, c), e = !1;
        d.j >= b.lc.Kc || (wh(XQ(d), 5, !0), e = !1);
        0 !== b.Ae || 0 !== YQ(a, 1, f) || b.sa && 0 === YQ(a, 2, f) || (wh(XQ(d), 3, !0), e = !1);
        return e
    }

    function YQ(a, b, c) {
        return rB({
            I: a,
            Qe: 3E3,
            Te: a.innerWidth > Gm ? 650 : 0,
            va: c,
            Nf: b
        })
    }
    async function UQ(a, b, c, d, e) {
        var f = C(b.W, ei, 15);
        var g = new MQ(b.j);
        for (var h of f)
            if (I(h, 3)) {
                f = L(h, 1);
                var k = g.v.has(f) ? g.v.get(f) : g.B++;
                g.v.set(f, k);
                g.m.set(k, f);
                var l = 0;
                for (var m = 0; m < f.length; m++) {
                    const p = f.charCodeAt(m);
                    g.j[l].contains(p) || (g.j.push(new NQ), g.j[g.size].B = l, g.j[g.size].G = p, g.j[l].m.set(p, g.size), g.size++);
                    l = g.j[l].m.get(p)
                }
                g.j[l].A = !0;
                g.j[l].v = k;
                g.j[l].C = g.l.length;
                g.l.push(f.length)
            }
        h = [];
        for (h.push(0); 0 < h.length;) {
            k = h.shift();
            f = g;
            l = f.j[k];
            if (0 === k) l.j = 0, l.l = 0;
            else if (0 === l.B) l.j =
                0, l.l = l.A ? k : f.j[f.j[k].j].l;
            else {
                l = f.j[f.j[k].B].j;
                for (m = f.j[k].G;;) {
                    if (f.j[l].contains(m)) {
                        f.j[k].j = f.j[l].m.get(m);
                        break
                    }
                    if (0 === l) {
                        f.j[k].j = 0;
                        break
                    }
                    l = f.j[l].j
                }
                f.j[k].l = f.j[k].A ? k : f.j[f.j[k].j].l
            }
            for (var n of g.j[k].childNodes) h.push(n)
        }
        g = new LQ(g);
        if ((n = !g.isEmpty()) && !(n = b.L.Nd || b.L.ze)) {
            n = g.j;
            a: {
                h = 0;
                for (f = 0; f < e.length; f++) {
                    for (;;) {
                        k = e.charCodeAt(f);
                        if (n.j[h].contains(k)) {
                            h = n.j[h].m.get(k);
                            break
                        }
                        if (0 === h) break;
                        h = n.j[h].j
                    }
                    for (k = h;;) {
                        k = n.j[k].l;
                        if (0 === k) break;
                        l = f + 1 - n.l[n.j[k].C];
                        m = f;
                        if (KQ(e, l, m,
                                n.A)) {
                            e = new OQ(l, m, n.m.get(n.j[k].v));
                            break a
                        }
                        k = n.j[k].j
                    }
                }
                e = void 0
            }
            n = void 0 !== e
        }
        n && (d.j >= b.Va.Kc ? (e = b.L.Nd ? ZQ(C(b.W, ei, 15)) : null, await b.gb(898, $Q(a, b, c, d, g, e, new qP(b.Va.uj, b.Va.gf, b.Va.fe, b.Va.Vb)))) : wh(XQ(d), 4, !0))
    }

    function ZQ(a) {
        return RegExp(a.filter(b => I(b, 3)).map(b => L(b, 1).replace(/[/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "u")
    }
    async function $Q(a, b, c, d, e, f, g) {
        var h = new HP,
            k = a.document.body;
        if (I(b.W, 17) || B(b.W, gi, 21))
            for (; k;) {
                c.j.La(7) >= c.l && await RQ(c, 8);
                if (k.nodeType === Node.TEXT_NODE && "" !== k.textContent && k.parentElement) {
                    var l = k.parentElement;
                    a: {
                        var m = a;
                        var n = b,
                            p = k.textContent,
                            q = d,
                            x = e,
                            v = g;
                        const ib = [];b: {
                            var D = p;
                            switch (n.j) {
                                case 1:
                                    var E = Array(D.length),
                                        F = 0;
                                    for (var A = 0; A < D.length; A++) GQ.test(D[A]) || F++, E[A] = F;
                                    D = E;
                                    break b;
                                default:
                                    E = Array(D.length);
                                    for (A = F = 0; A < D.length;) {
                                        for (;
                                            /\s/.test(D[A]);) E[A] = F, A++;
                                        for (var J = !1; A < D.length &&
                                            !/\s/.test(D[A]);) J = !0, E[A] = F, A++;
                                        J && (F++, E[A - 1] = F)
                                    }
                                    D = E
                            }
                        }
                        if (p.includes("\u00bb")) x = [];
                        else {
                            E = x.match(p);
                            x = new Map;
                            for (const xa of E) E = xa.v, x.has(E) ? (F = x.get(E), xa.length > F.length && x.set(E, xa)) : x.set(E, xa);
                            x = Array.from(x.values())
                        }
                        F = -1;
                        for (const xa of x) {
                            E = xa.v;
                            x = xa.A;
                            A = v;
                            var K = xa.j;
                            rP(A.j, A.l + D[E]);
                            J = A;
                            var Q = J.j;
                            if ((Q.j.has(K) ? Q.j.get(K).length : 0) < J.gf && A.j.m < A.fe) {
                                A = m.getComputedStyle(l);
                                J = A.fontSize.match(/\d+/);
                                if (!(J && 12 <= Number(J[0]) && 22 >= Number(J[0]) && Xa(PQ, A.display))) {
                                    v.l += D[D.length - 1];
                                    m = [];
                                    break a
                                }
                                F += 1;
                                F < E && ib.push(m.document.createTextNode(p.substring(F, E)));
                                F = p.substring(E, x + 1);
                                J = x + 1;
                                A = m;
                                var za = F,
                                    U = p.substring(Math.max(E - 30, 0), E) + "~~" + p.substring(J, Math.min(J + 30, p.length));
                                K = xa.j;
                                Q = D[E];
                                J = l.getBoundingClientRect();
                                var Ta = Vk(2);
                                za = Bh(Ta, 2, za);
                                za = Bh(za, 3, U);
                                K = Bh(za, 4, K);
                                Q = yh(K, 5, Q);
                                Q = yh(Q, 6, Math.round(J.x));
                                J = yh(Q, 7, Math.round(J.y));
                                A = A.getComputedStyle(l);
                                Q = new Uk;
                                Q = Bh(Q, 1, A.fontFamily);
                                K = fQ(A.color);
                                Q = G(Q, 7, K);
                                K = fQ(A.backgroundColor);
                                Q = G(Q, 8, K);
                                K = A.fontSize.match(/^(\d+(\.\d+)?)px$/);
                                Q = yh(Q, 4, K ? Math.round(Number(K[1])) : 0);
                                K = Math.round(Number(A.fontWeight));
                                isNaN(K) || 400 === K || yh(Q, 5, K);
                                "none" !== A.textDecorationLine && Bh(Q, 6, A.textDecorationLine);
                                A = G(J, 8, Q);
                                za = [];
                                for (U = l; U && 20 > za.length;) {
                                    J = za;
                                    Q = J.push;
                                    K = U;
                                    Ta = new Sk;
                                    Ta = Bh(Ta, 1, K.tagName);
                                    "" !== K.className && ch(Ta, 2, K.className.split(" "), qg);
                                    Q.call(J, Ta);
                                    if ("BODY" === U.tagName) break;
                                    U = U.parentElement
                                }
                                J = za.reverse();
                                A = kh(A, 9, J);
                                A = FQ(q, A);
                                ib.push(aR(m, n, A, xa.j, F, l));
                                F = v.j;
                                A = xa.j;
                                E = v.l + D[E];
                                J = [];
                                F.j.has(A) && (J = F.j.get(A));
                                J.push(E);
                                F.l++;
                                F.j.set(A, J);
                                F = x;
                                if (0 < v.Vb && v.j.m >= v.Vb) break
                            }
                        }
                        n = F + 1;0 !== n && n < p.length && ib.push(m.document.createTextNode(p.substring(n)));v.l += D[D.length - 1];m = ib
                    }
                    if (0 < m.length && !I(b.W, 17)) {
                        FP(h, a, b.Va.Vh, L(b.W, 3), B(b.W, gi, 21).l(), b.L.Fa, b.la);
                        for (const ib of m) l.insertBefore(ib, k), bR(ib);
                        l.removeChild(k);
                        for (k = m[m.length - 1]; k.lastChild;) k = k.lastChild;
                        if (0 < g.Vb && g.j.m >= g.Vb) break
                    }
                }
                a: {
                    p = f;l = g;m = b.j;
                    if (k.firstChild && (k.nodeType !== Node.ELEMENT_NODE ? 0 : !k.classList ? .contains("google-anno-skip") && k.offsetHeight)) {
                        b: {
                            switch (k.tagName ? .toUpperCase ? .()) {
                                case "IFRAME":
                                case "A":
                                case "AUDIO":
                                case "BUTTON":
                                case "CANVAS":
                                case "CITE":
                                case "CODE":
                                case "EMBED":
                                case "FOOTER":
                                case "FORM":
                                case "KBD":
                                case "LABEL":
                                case "OBJECT":
                                case "PRE":
                                case "SAMP":
                                case "SCRIPT":
                                case "SELECT":
                                case "STYLE":
                                case "SUB":
                                case "SUPER":
                                case "SVG":
                                case "TEXTAREA":
                                case "TIME":
                                case "VAR":
                                case "VIDEO":
                                case null:
                                    p = !1;
                                    break b
                            }
                            p = !(k.className.toUpperCase ? .() ? .includes("CRUMB") || k.id.toUpperCase ? .() ? .includes("CRUMB")) && (!p || 2 > (k.parentNode ? .childElementCount ? ? 0) || !!k.textContent ? .match(p))
                        }
                        if (p) {
                            k = k.firstChild;
                            break a
                        }
                        k.textContent ? .length && (m = HQ(k.textContent, m), rP(l.j, l.l + m))
                    }
                    for (;;) {
                        if (k.nextSibling) {
                            k = k.nextSibling;
                            break a
                        }
                        if (!k.parentNode) {
                            k = null;
                            break a
                        }
                        k = k.parentNode
                    }
                }
            }
    }

    function SQ(a, b) {
        return {
            na: b.na(),
            sa: b.sa,
            R: Jm(a),
            V: Nm(a),
            Wb: b.L.Wb,
            Ib: b.L.Ib,
            Ec: b.L.Ec,
            uc: b.L.uc
        }
    }

    function VQ(a, b, c, d, e, f) {
        if (c.L.Gd || WQ(a, c, f, d)) e = e.filter(g => I(g, 4) || 0 < Yg(g, 5, sg, void 0, 2).length).map(g => L(g, 1)), 0 === e.length || c.L.Gd && !WQ(a, c, f, d) || (c.L.cf && jb(e), EQ(b, e, d, new CQ(a, c, f)))
    }

    function bR(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = oP(mP(getComputedStyle(a.parentElement).color)),
                    c = oP(mP(getComputedStyle(a).color));
                var d = nP(a);
                if (d = b && c && d ? NJ(c, d) < Math.min(NJ(b, d), 2.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).slice(1) : "#" + c.toString(16);
                    w(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) bR(a.children[b])
        }
    }
    class cR {
        constructor() {
            this.j = null
        }
        get l() {
            return this.j
        }
    }

    function aR(a, b, c, d, e, f) {
        const g = a.document.createElement("SPAN");
        sP(g);
        w(g, {
            "text-decoration": "underline"
        });
        w(g, {
            "text-decoration-style": "dotted"
        });
        w(g, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        });
        g.appendChild(a.document.createTextNode(e));
        e = a.document.createElement("A");
        sP(e);
        b.L.Fa ? w(e, {
            "text-decoration": "none",
            fill: "currentColor"
        }) : w(e, {
            "text-decoration": "none"
        });
        ne(e);
        e.className = "google-anno";
        b.L.Fa ? e.appendChild(wP(a.document, a.getComputedStyle(f).fontSize)) :
            e.appendChild(tP(a, {
                bottom: "-1px",
                "font-family": '"Google Material Icons", "goog-matfb"',
                "font-size": "90%",
                position: "relative"
            }));
        e.appendChild(a.document.createTextNode("\u00a0"));
        e.appendChild(g);
        const h = dR(b, c, e);
        rQ(b, 999, e, k => {
            try {
                var l = b.la,
                    m = new bl;
                var n = Bh(m, 4, d);
                var p = zh(n, 1, c);
                var q = zh(p, 2, h.l);
                const x = yQ(l, q);
                SP(a, b, x, d, !0, b.A.get(d) || "");
                return !1
            } finally {
                k.preventDefault(), k.stopImmediatePropagation()
            }
        });
        return e
    }

    function dR(a, b, c) {
        const d = new cR;
        eR(a, e => {
            for (const k of e)
                if (k.isIntersecting) {
                    var f = b;
                    e = a.la;
                    var g = new el;
                    g = f = M(g, 1, f);
                    f = e.handle;
                    var h = GP(e, 11);
                    g = jh(h, 4, kl, g);
                    e = f.call(e, g);
                    d.j = e
                } else d.j && (e = a.la, f = new dl, g = f = M(f, 1, d.j), f = e.handle, h = GP(e, 12), g = jh(h, 5, kl, g), f.call(e, g), d.j = null)
        }).observe(c);
        return d
    };

    function FQ(a, b) {
        a.entries.push(Pg(b));
        return a.entries.length - 1
    }

    function XQ(a) {
        return a.l = a.l ? ? new Xk
    }
    var fR = class {
        constructor() {
            this.entries = [];
            this.j = 0;
            this.l = this.m = null
        }
    };

    function QP(a, b) {
        var c = a.handle,
            d = GP(a, 15);
        b = jh(d, 9, kl, b);
        c.call(a, b)
    }

    function yQ(a, b) {
        var c = a.handle,
            d = GP(a, 10);
        b = jh(d, 8, kl, b);
        return c.call(a, b)
    }

    function GP(a, b) {
        var c = new jl;
        var d = a.A++;
        c = M(c, 1, d);
        b = M(c, 2, Math.round(a.j.La(b) - a.l));
        return G(b, 10, a.m)
    }
    var gR = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.l = b;
            this.m = c;
            this.A = 1;
            this.v = [...d]
        }
        handle(a) {
            for (const b of this.v) b(a);
            return ph(nh(a, 1))
        }
    };
    var hR = class {
        constructor(a) {
            this.ne = a.ne;
            this.Ic = a.Ic ? ? [];
            this.Gf = a.Gf ? ? 300;
            this.Dd = a.Dd ? ? 0;
            this.Pc = a.Pc ? ? !1;
            this.Ye = a.Ye ? ? .1;
            this.Ze = a.Ze ? ? !1;
            this.cf = a.cf ? ? !1;
            this.Nd = !!a.Nd;
            this.Fa = !!a.Fa;
            this.Wb = a.Wb ? ? 200;
            this.Ta = a.Ta ? ? !1;
            this.df = !!a.df;
            this.ce = !!a.ce;
            this.sf = !!a.sf;
            this.Ib = !!a.Ib;
            this.Ec = a.Ec ? ? .2;
            this.we = a.we ? ? !1;
            this.xe = a.xe ? ? !1;
            this.ye = !!a.ye;
            this.Ce = !!a.Ce;
            this.be = a.be ? ? 3E4;
            this.ze = a.ze ? ? !1;
            this.Gd = !!a.Gd;
            this.uc = !!a.uc
        }
    };

    function PP(a, b, c, d, e) {
        c.setTimeout(iR(a, b, d), e)
    }

    function ZP(a, b, c) {
        a = iR(a, 999, c);
        b.addEventListener("message", a);
        return a
    }

    function bQ(a, b, c) {
        return b.setInterval(iR(a, 1066, c), 1E3)
    }

    function rQ(a, b, c, d) {
        c.addEventListener("click", iR(a, b, d))
    }

    function eR(a, b) {
        return new IntersectionObserver(iR(a, 1065, b), {
            threshold: .98
        })
    }

    function iR(a, b, c) {
        return a.m.Qa(b, c, void 0, d => void jR(a, d))
    }

    function kR(a, b, c) {
        return new Promise(d => {
            b.requestIdleCallback ? b.requestIdleCallback(iR(a, 898, () => void d()), {
                timeout: c
            }) : PP(a, 898, b, d, c)
        })
    }

    function jR(a, b) {
        b.es = a.L.Ic.join(",");
        b.c = `${a.C}`
    }
    var mR = class {
        constructor(a, b, c, d, e, f, g, h, k, l, m, n, p = !1) {
            this.l = a;
            this.sa = b;
            this.Ae = c;
            this.W = d;
            this.C = e;
            this.m = f;
            this.la = g;
            this.va = h;
            this.B = k;
            this.Va = l;
            this.lc = m;
            this.ae = p;
            this.L = new hR(n);
            this.j = Xa(lR, L(d, 7)) ? 1 : 0;
            this.A = new Map;
            this.v = new Map;
            for (const q of C(this.W, ei, 15)) null != H(q, 6) && this.A.set(L(q, 1), L(q, 6)), null != H(q, 7) && this.v.set(L(q, 1), L(q, 7))
        }
        gb(a, b) {
            this.m.gb(a, b, c => void jR(this, c));
            return b
        }
        La(a) {
            return this.B.La(a)
        }
        na() {
            return 2 === rh(this.W, 12)
        }
        nd() {
            return this.W.nd()
        }
        Fe() {
            return this.W.Fe()
        }
        pd() {
            return this.W.pd()
        }
        Ta() {
            return this.L.Ta
        }
        Fa() {
            return this.L.Fa
        }
    };
    const lR = ["ja", "zh_CN", "zh_TW"];

    function nR(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }

    function oR(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }

    function pR() {
        const a = new Set,
            b = Zz();
        try {
            if (!b) return a;
            const c = b.pubads();
            for (const d of c.getSlots()) a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }

    function qR(a) {
        a = a.id;
        return null != a && (pR().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }

    function rR(a, b, c) {
        if (!a.sources) return !1;
        switch (sR(a)) {
            case 2:
                const d = tR(a);
                if (d) return c.some(f => uR(d, f));
                break;
            case 1:
                const e = vR(a);
                if (e) return b.some(f => uR(e, f))
        }
        return !1
    }

    function sR(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(b => b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function vR(a) {
        return wR(a, b => b.currentRect)
    }

    function tR(a) {
        return wR(a, b => b.previousRect)
    }

    function wR(a, b) {
        return a.sources.reduce((c, d) => {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function uR(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function xR() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(qR),
            b = [...pR()].map(c => document.getElementById(c)).filter(c => null !== c);
        yR = window.scrollX;
        zR = window.scrollY;
        return AR = [...a, ...b].map(c => c.getBoundingClientRect())
    }

    function BR(a) {
        a.T || (a.T = new PerformanceObserver(au(640, b => {
            const c = yR !== window.scrollX || zR !== window.scrollY ? [] : AR,
                d = xR();
            for (const f of b.getEntries()) switch (b = f.entryType, b) {
                case "layout-shift":
                    b = a;
                    if (!f.hadRecentInput) {
                        b.C += Number(f.value);
                        Number(f.value) > b.H && (b.H = Number(f.value));
                        b.J += 1;
                        var e = rR(f, c, d);
                        e && (b.A += f.value, b.Sc++);
                        if (5E3 < f.startTime - b.Rc || 1E3 < f.startTime - b.vf) b.Rc = f.startTime, b.j = 0, b.v = 0;
                        b.vf = f.startTime;
                        b.j += f.value;
                        e && (b.v += f.value);
                        b.j > b.aa && (b.aa = b.j, b.cg = b.v, b.Kf = f.startTime +
                            f.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = f;
                    a.Qc = Math.floor(b.renderTime || b.loadTime);
                    a.Bb = b.size;
                    break;
                case "first-input":
                    b = f;
                    a.Ca = Number((b.processingStart - b.startTime).toFixed(3));
                    a.Ha = !0;
                    break;
                case "longtask":
                    b = Math.max(0, f.duration - 50);
                    a.B += b;
                    a.F = Math.max(a.F, b);
                    a.O += 1;
                    break;
                case "event":
                    CR(a, f);
                    break;
                default:
                    ue(b, void 0)
            }
        })));
        return a.T
    }

    function DR(a) {
        const b = au(641, () => {
                2 === BK(document) && ER(a)
            }),
            c = au(641, () => void ER(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.wa = () => {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            BR(a).disconnect()
        }
    }

    function ER(a) {
        if (!a.uf) {
            a.uf = !0;
            BR(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += oR("cls", a.C), b += oR("mls", a.H), b += nR("nls", a.J), window.LayoutShiftAttribution && (b += oR("cas", a.A), b += nR("nas", a.Sc), b += oR("was", a.cg)), b += oR("wls", a.aa), b += oR("tls", a.Kf));
            window.LargestContentfulPaint && (b += nR("lcp", a.Qc), b += nR("lcps", a.Bb));
            window.PerformanceEventTiming && a.Ha && (b += nR("fid", a.Ca));
            window.PerformanceLongTaskTiming && (b += nR("cbt", a.B),
                b += nR("mbt", a.F), b += nR("nlt", a.O));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe")) qR(c) && d++;
            b += nR("nif", d);
            b += nR("ifi", cj(window));
            c = R(Tl).j();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${t===t.top?1:0}`;
            b += a.wf ? `&${"qqid"}=${encodeURIComponent(a.wf)}` : nR("pvsid", gf(t));
            window.googletag && (b += "&gpt=1");
            c = Math.max(a.l, a.G);
            0 <= c && (b += nR("inp", c));
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.wa()
        }
    }

    function CR(a, {
        interactionId: b,
        duration: c
    }) {
        a.ga.Pf && b && (c >= a.l ? (a.m = a.l, a.l = c) : c >= a.m && (a.m = c), 50 === ++a.kb && (a.G = Math.max(a.G, a.m), a.kb = 0, a.l = Number.NEGATIVE_INFINITY, a.m = Number.NEGATIVE_INFINITY))
    }
    var FR = class {
            constructor() {
                this.v = this.j = this.J = this.H = this.C = 0;
                this.vf = this.Rc = Number.NEGATIVE_INFINITY;
                this.kb = 0;
                this.m = this.l = this.G = Number.NEGATIVE_INFINITY;
                this.Ca = this.Bb = this.Qc = this.Sc = this.cg = this.A = this.Kf = this.aa = 0;
                this.Ha = !1;
                this.O = this.F = this.B = 0;
                this.T = null;
                this.uf = !1;
                this.wa = () => {};
                const a = document.querySelector("[data-google-query-id]");
                this.wf = a ? a.getAttribute("data-google-query-id") : null;
                this.ga = {
                    Pf: !1
                }
            }
            observe() {
                var a = window;
                if (!a.google_plmetrics && window.PerformanceObserver) {
                    a.google_plmetrics = !0;
                    a = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                    this.ga.Pf && a.push("event");
                    for (const b of a) a = {
                        type: b,
                        buffered: !0
                    }, "event" === b && (a.durationThreshold = 40), BR(this).observe(a);
                    DR(this)
                }
            }
        },
        yR, zR, AR = [];
    async function GR(a, b, c, d, e, f, g, h) {
        var k = bm,
            l = am;
        try {
            cc(a.document)
        } catch (m) {
            return
        }(h = (h = aK(new eK(a), "__gads", h)) ? Ke(h + "t2Z7mVic") % 20 : null) || (h = Me() ? null : Math.floor(20 * He()));
        null != h && await HR(a, b, c, d, h, k, e, l, f, g)
    }
    async function HR(a, b, c, d, e, f, g, h, k, l) {
        var m = c.W;
        if (Math.random() < c.L.Ye) try {
            (new FR).observe()
        } catch (D) {
            f.Ba(1161, D instanceof Error ? D : Error("Unknown error."))
        }
        if (!c.L.Ze) {
            var n = k.La(0),
                p = 488 > Jm(a);
            if (!c.L.Fa && !I(m, 17) && 0 < C(m, ei, 15).length) {
                var q = a.document,
                    x = q.createElement("LINK");
                const D = Hi `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                we(x, D, "stylesheet");
                q.head.appendChild(x)
            }
            q = c.L;
            x = new cl;
            x = yh(x, 2, e);
            q = ch(x, 3, q.Ic, mg);
            g = new gR(k, n, q, g);
            e = new mR(d, p, c.Ae,
                m, e, f, g, h, k, c.Va, c.lc, c.L, c.ae);
            d = new fR;
            0 < c.L.Dd && await kR(e, a, c.L.Dd);
            b = await IR(a, a.document, b, e, l, d);
            k = k.La(9) - n;
            e.L.ye || I(m, 17) || !d.entries.length || I(m, 13) || (n = a.document, l = n.createElement("LINK"), we(l, c.L.Pc ? Hi `https://cse.google.com/cse.js?cx=${L(m,16)}&language=${L(m,7)}` : Hi `https://www.google.com/adsense/search/ads.js`, "prefetch"), l.as = "script", l.fetchPriority = "low", n.head.appendChild(l));
            n = c.dd;
            l = a.location.hostname;
            c = c.ri;
            a = new $k;
            e = new Mk;
            n = Bh(e, 1, n);
            n = Bh(n, 2, l);
            p = wh(n, 3, p);
            p = zh(p, 4, d.j);
            p = G(a, 1, p);
            a = new Nk;
            a = Bh(a, 2, d.m);
            c = Bh(a, 3, c);
            p = G(p, 2, c);
            p = M(p, 3, Math.round(k));
            k = C(m, ei, 15);
            c = n = a = 0;
            for (v of k) a += (I(v, 3) ? 1 : 0) + (I(v, 4) ? 1 : 0) + Yg(v, 5, sg).length, l = I(v, 3) ? 1 : 0, e = I(v, 4) || Yg(v, 5, sg).length ? 1 : 0, n += l + e, c += I(v, 3) ? 1 : 0;
            var v = new Zk;
            v = xh(v, 1, k.length);
            v = xh(v, 2, a);
            v = Rg(v, 3, null == n ? n : kg(n));
            v = Rg(v, 4, null == c ? c : kg(c));
            v = G(p, 6, v);
            b.length ? (m = new Rk, m = kh(m, 1, b), jh(v, 5, al, m)) : (b = new Yk, b = kh(b, 2, d.entries), m = C(m, ei, 15).length, m = M(b, 3, m), m = G(m, 4, d.l), jh(v, 4, al, m));
            m = g.handle;
            d = GP(g, 9);
            v = jh(d, 3, kl, v);
            m.call(g, v)
        }
    }
    async function IR(a, b, c, d, e, f) {
        b = b.body;
        if (!b || !JR(b)) return a = new Pk, c = new Ok, [jh(a, 1, Qk, c)];
        b = b.innerText ? ? "";
        var g = d.L.sf ? Math.ceil(b.length / (IQ[L(d.W, 7)] ? ? 7.06)) : HQ(b, d.j);
        f.j = g;
        e.j.La(3) >= e.l && await RQ(e, 4);
        var h;
        h = (h = L(d.W, 7)) ? (h = h.match(/^[a-z]{2,3}/i)) ? h[0].toLowerCase() : "" : "";
        f.m = h;
        h = [];
        if (g < Math.min(d.Va.Kc, d.lc.Kc)) {
            g = h.push;
            var k = new Pk;
            var l = new Ok;
            k = jh(k, 2, Qk, l);
            g.call(h, k)
        }
        a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') && (g = h.push, k = new Pk, l = new Ok, k =
            jh(k, 3, Qk, l), g.call(h, k));
        h.length || await QQ(a, c, d, e, f, b);
        return h
    }

    function JR(a) {
        try {
            cc(new ResizeObserver(() => {})), cc(new MutationObserver(() => {}))
        } catch {
            return !1
        }
        return a.classList && void 0 !== a.classList.contains && void 0 !== a.attachShadow
    };
    async function KR(a, b, c, d, e, f, g, h) {
        const k = xu(a);
        k.wasReactiveAdConfigReceived[42] || (k.wasReactiveAdConfigReceived[42] = !0, await GR(a, b, d, e, [l => void oH(c, l)], f, g, h))
    };

    function LR(a, b) {
        a = Bz(Ly(b, a), a);
        if (0 !== a.length) return a.reduce((c, d) => c.ka.j > d.ka.j ? c : d)
    };

    function MR({
        Qf: a,
        Vg: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };

    function NR(a) {
        bm.jf(b => {
            b.shv = String(a);
            b.mjsv = MR({
                Qf: "m202310100101",
                Vg: a
            });
            b.eid = gN(t)
        })
    };
    var OR = "undefined" === typeof sttc ? void 0 : sttc;

    function PR(a) {
        var b = bm;
        try {
            return Fh(a, Ij), new FL(JSON.parse(a))
        } catch (c) {
            b.Ba(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new FL
    };
    const QR = (a, b) => {
            (0, a.__uspapi)("getUSPData", 1, (c, d) => {
                b.callback({
                    consentData: c ? ? void 0,
                    hd: d ? void 0 : 2
                })
            })
        },
        RR = {
            Dc: a => a.callback,
            Sb: (a, b) => ({
                __uspapiCall: {
                    callId: b,
                    command: "getUSPData",
                    version: 1
                }
            }),
            vb: (a, b) => {
                b = b.__uspapiReturn;
                a({
                    consentData: b.returnValue ? ? void 0,
                    hd: b.success ? void 0 : 2
                })
            }
        };

    function SR(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            bf: b.__uspapiReturn.callId
        }
    }

    function TR(a, b) {
        let c = {};
        if (lC(a.caller)) {
            var d = vb(() => {
                b(c)
            });
            nC(a.caller, "getDataWithCallback", {
                callback: e => {
                    e.hd || (c = e.consentData);
                    d()
                }
            });
            setTimeout(d, a.timeoutMs)
        } else b(c)
    }
    var UR = class extends P {
        constructor(a) {
            super();
            this.timeoutMs = {}.timeoutMs ? ? 500;
            this.caller = new oC(a, "__uspapiLocator", b => "function" === typeof b.__uspapi, SR);
            this.caller.A.set("getDataWithCallback", QR);
            this.caller.m.set("getDataWithCallback", RR)
        }
        l() {
            this.caller.ma();
            super.l()
        }
    };

    function VR(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = Td(a.j.X() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = WR(a, b, c, a.j.j.elementsFromPoint(Fd(c.left + c.width / 2, c.left, c.right - 1), Fd(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = WR(a, b, c, a.j.j.elementsFromPoint(Fd(c.left + c.width / 2, c.left, c.right - 1), Fd(c.top + 2, c.top, c.bottom - 1)), 2, e.pb),
            g = WR(a, b, c, a.j.j.elementsFromPoint(Fd(c.left + 2, c.left, c.right - 1), Fd(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.pb, ...f.pb]);
        const h = WR(a, b, c, a.j.j.elementsFromPoint(Fd(c.right - 1 - 2, c.left, c.right - 1), Fd(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.pb, ...f.pb, ...g.pb]);
        var k = YR(a, b, c),
            l = n => Xa(a.m, n.overlapType) && Xa(a.v, n.overlapDepth) && Xa(a.l, n.overlapDetectionPoint);
        e = Sa([...e.entries, ...f.entries, ...g.entries, ...h.entries], l);
        l = Sa(k, l);
        k = [...e, ...l];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < k.length || f;
        g = Ud(a.j.j);
        const m = new ni(c.left, c.top, c.width, c.height);
        e = [...Ua(e, n => new ni(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...hb(Ua(l, n => pi(m, n.elementRect))), ...Sa(pi(m, new ni(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: k,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? ZR(m, e) : $R(c, e)
        }
    }

    function aS(a, b) {
        const c = a.j.X(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(k => {
                                    const l = new xj,
                                        m = wj(l, () => VR(a, k));
                                    m && (l.l.length && (m.executionTime = Math.round(Number(l.l[0].duration))), h.disconnect(), e(m))
                                }, bS);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function WR(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            pb: []
        };
        const g = [],
            h = [];
        for (let m = 0; m < d.length; m++) {
            const n = d[m];
            if (n === b) continue;
            if (Xa(f, n)) continue;
            h.push(n);
            const p = n.getBoundingClientRect();
            if (a.j.contains(n, b)) {
                g.push(cS(a, c, n, p, 1, e));
                continue
            }
            if (a.j.contains(b, n)) {
                g.push(cS(a, c, n, p, 2, e));
                continue
            }
            a: {
                var k = a;
                var l = b;
                const v = k.j.ki(l, n);
                if (!v) {
                    k = null;
                    break a
                }
                const {
                    suspectAncestor: D,
                    Hb: E
                } = dS(k, l, v, n) || {},
                {
                    suspectAncestor: F,
                    Hb: A
                } = dS(k, n, v, l) || {};k = D && E && F && A ? E <= A ? {
                    suspectAncestor: D,
                    overlapType: eS[E]
                } : {
                    suspectAncestor: F,
                    overlapType: fS[A]
                } : D && E ? {
                    suspectAncestor: D,
                    overlapType: eS[E]
                } : F && A ? {
                    suspectAncestor: F,
                    overlapType: fS[A]
                } : null
            }
            const {
                suspectAncestor: q,
                overlapType: x
            } = k || {};
            q && x ? g.push(cS(a, c, n, p, x, e, q)) : g.push(cS(a, c, n, p, 9, e))
        }
        return {
            entries: g,
            pb: h
        }
    }

    function YR(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Ge(b, a.j.X());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(cS(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(cS(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(cS(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function ZR(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = oi(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function $R(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function cS(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (Xa(a.m, e) && Xa(a.l, f)) {
            b = new ki(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = gS(a, c)) && mi(b, a)) c = 4;
            else {
                a = hS(c, d);
                if (fc) {
                    e = Ui(c, "paddingLeft");
                    f = Ui(c, "paddingRight");
                    var k = Ui(c, "paddingTop"),
                        l = Ui(c, "paddingBottom");
                    e = new ki(k, f, l, e)
                } else e = Ni(c, "paddingLeft"), f = Ni(c, "paddingRight"), k = Ni(c, "paddingTop"), l = Ni(c, "paddingBottom"), e = new ki(parseFloat(k), parseFloat(f), parseFloat(l), parseFloat(e));
                mi(b, new ki(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = hS(c, d), c = mi(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function dS(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.X();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Ge(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Hb: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Hb: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Hb: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const k = iS(a, e.slice(0, f), h);
                    if (g || k) return {
                        suspectAncestor: h,
                        Hb: 4
                    }
                }
            }
        }
        return (a = iS(a, e, b)) ? {
                suspectAncestor: a,
                Hb: 5
            } :
            null
    }

    function iS(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Ge(f, a.j.X());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function gS(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new ki(a.top, a.right, a.bottom, a.left)
    }

    function hS(a, b) {
        if (!fc || 9 <= Number(sc)) {
            var c = Ni(a, "borderLeftWidth");
            d = Ni(a, "borderRightWidth");
            e = Ni(a, "borderTopWidth");
            a = Ni(a, "borderBottomWidth");
            c = new ki(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = Wi(a, "borderLeft");
            var d = Wi(a, "borderRight"),
                e = Wi(a, "borderTop");
            a = Wi(a, "borderBottom");
            c = new ki(e, d, a, c)
        }
        return new ki(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class jS {
        constructor(a) {
            var b = kS;
            this.j = Qd(a);
            this.m = [5, 8, 9];
            this.v = [3, 4];
            this.l = b
        }
    }
    const eS = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        fS = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Sa(Je({
        vl: 1,
        wl: 2,
        on: 3,
        pn: 4,
        rn: 5,
        ll: 6,
        ql: 7,
        ul: 8,
        wm: 9,
        qn: 10,
        rl: 11,
        nn: 12,
        kl: 13
    }), a => !Xa([1, 2], a));
    Je({
        Bk: 1,
        zm: 2,
        Mk: 3,
        sn: 4
    });
    const kS = Je({
            Ck: 1,
            wn: 2,
            jm: 3,
            Wm: 4
        }),
        bS = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function lS(a, b, c, d) {
        const e = new XH;
        let f = "";
        const g = k => {
            try {
                const l = "object" === typeof k.data ? k.data : JSON.parse(k.data);
                f === l.paw_id && (Cb(a, "message", g), l.error ? e.j(Error(l.error)) : e.resolve(d(l)))
            } catch (l) {}
        };
        var h = "function" === typeof a.gmaSdk ? .getQueryInfo ? a.gmaSdk : void 0;
        if (h) return Bb(a, "message", g), f = c(h), e.promise;
        c = "function" === typeof a.webkit ? .messageHandlers ? .getGmaQueryInfo ? .postMessage || "function" === typeof a.webkit ? .messageHandlers ? .getGmaSig ? .postMessage ? a.webkit.messageHandlers : void 0;
        return c ? (f = String(Math.floor(2147483647 * He())), Bb(a, "message", g), b(c, f), e.promise) : null
    }

    function mS(a) {
        return lS(a, (b, c) => void(b.getGmaQueryInfo ? ? b.getGmaSig) ? .postMessage(c), b => b.getQueryInfo(), b => b.signal)
    };
    async function RQ(a, b) {
        await new Promise(c => {
            0 < a.m && a.win.requestIdleCallback ? a.win.requestIdleCallback(() => void c(), {
                timeout: a.m
            }) : a.win.setTimeout(c, 0)
        });
        a.l = a.j.La(b) + a.v
    }
    var nS = class {
        constructor(a, b) {
            var c = pt(ls),
                d = pt(xs);
            this.win = a;
            this.j = b;
            this.v = c;
            this.m = d;
            this.l = b.La(2) + c
        }
    };
    const oS = (a, b) => {
        try {
            const k = void 0 === I(b, 6) ? !0 : I(b, 6);
            var c = Wh(rh(b, 2)),
                d = L(b, 3);
            a: switch (rh(b, 4)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Yh(c, d, e),
                g = B(b, Ph, 5) ? .j() ? ? "";
            f.Cc = g;
            f.j = k;
            f.win = a;
            var h = f.build();
            Nh(h)
        } catch {}
    };

    function pS(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? oS(a, b) : Bb(a, "load", () => void oS(a, b)))
    };

    function qS(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function rS(a) {
        if (a === a.top || Ae(a.top)) return Promise.resolve({
            status: 4
        });
        a: {
            try {
                var b = (a.top ? .frames ? ? {}).google_ads_top_frame;
                break a
            } catch (d) {}
            b = null
        }
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && qS(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new XH;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                vc: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };
    var Lj = {
        En: 0,
        An: 1,
        Bn: 9,
        xn: 2,
        yn: 3,
        Dn: 5,
        Cn: 7,
        zn: 10
    };
    var sS = class extends O {},
        tS = Ih(sS),
        uS = [1, 3];
    const vS = Hi `https://securepubads.g.doubleclick.net/static/topics/topics_frame.html`;

    function wS(a) {
        const b = a.google_tag_topics_state ? ? (a.google_tag_topics_state = {});
        return b.messageChannelSendRequestFn ? Promise.resolve(b.messageChannelSendRequestFn) : new Promise(c => {
            function d(h) {
                return g.j(h).then(({
                    data: k
                }) => k)
            }
            const e = Fe("IFRAME");
            e.style.display = "none";
            e.name = "goog_topics_frame";
            e.src = Ic(vS).toString();
            const f = (new URL(vS.toString())).origin,
                g = WJ({
                    destination: a,
                    Oa: e,
                    origin: f,
                    Gb: "goog:gRpYw:doubleclick"
                });
            g.j("goog:topics:frame:handshake:ack").then(({
                data: h
            }) => {
                "goog:topics:frame:handshake:ack" ===
                h && c(d)
            });
            b.messageChannelSendRequestFn = d;
            a.document.documentElement.appendChild(e)
        })
    }

    function xS(a, b, c) {
        var d = bm,
            e = {
                skipTopicsObservation: X($s)
            };
        const {
            Yc: f,
            Xc: g
        } = yS(c);
        b = b.google_tag_topics_state ? ? (b.google_tag_topics_state = {});
        b.getTopicsPromise || (a = a({
            message: "goog:topics:frame:get:topics",
            skipTopicsObservation: e.skipTopicsObservation,
            includeBuyerTopics: e.includeBuyerTopics,
            sendPingToRCS: !1
        }).then(h => {
            let k = g;
            if (h instanceof Uint8Array) k || (k = !(f instanceof Uint8Array && fb(h, f)));
            else if (Kj()(h)) k || (k = h !== f);
            else return d.Ba(989, Error(JSON.stringify(h))), 7;
            if (k && c) try {
                var l = new sS;
                var m = zh(l, 2, oj());
                h instanceof Uint8Array ? eh(m, 1, uS, Qf(h, !1, !1)) : eh(m, 3, uS, gg(h));
                c.setItem("goog:cached:topics", Ch(m))
            } catch {}
            return h
        }), b.getTopicsPromise = a);
        return f && !g ? Promise.resolve(f) : b.getTopicsPromise
    }

    function yS(a) {
        if (!a) return {
            Yc: null,
            Xc: !0
        };
        try {
            const m = a.getItem("goog:cached:topics");
            if (!m) return {
                Yc: null,
                Xc: !0
            };
            const n = tS(m);
            let p;
            const q = n.U;
            var b = fh(q, q[y], uS);
            switch (b) {
                case 0:
                    p = null;
                    break;
                case 1:
                    var c, d = gh(n, uS, 1);
                    const v = n.U,
                        D = v[y],
                        E = Qg(v, D, d),
                        F = Qf(E, !0, !!(D & 34));
                    null != F && F !== E && Sg(v, D, d, F);
                    var e = F;
                    var f = null == e ? Bf() : e;
                    Af(yf);
                    var g = f.M;
                    if (null == g || wf(g)) var h = g;
                    else {
                        if ("string" === typeof g) {
                            a = g;
                            tf.test(a) && (a = a.replace(tf, vf));
                            let A;
                            A = atob(a);
                            const J = new Uint8Array(A.length);
                            for (a = 0; a < A.length; a++) J[a] =
                                A.charCodeAt(a);
                            var k = J
                        } else k = null;
                        h = k
                    }
                    var l = h;
                    p = (c = null == l ? l : f.M = l) ? new Uint8Array(c) : xf || (xf = new Uint8Array(0));
                    break;
                case 3:
                    p = rh(n, gh(n, uS, 3));
                    break;
                default:
                    ue(b, void 0)
            }
            const x = ph(nh(n, 2)) + 6048E5 < oj();
            return {
                Yc: p,
                Xc: x
            }
        } catch {
            return {
                Yc: null,
                Xc: !0
            }
        }
    };

    function zS(a) {
        a = a.innerInsElement;
        if (!a) throw Error("no_wrapper_element_in_loader_provided_slot");
        return a
    }
    async function AS({
        Ga: a,
        ra: b,
        tb: c,
        slot: d
    }) {
        const e = d.vars,
            f = De(d.pubWin),
            g = zS(d),
            h = new xL({
                I: f,
                pubWin: d.pubWin,
                D: e,
                Ga: a,
                ra: b,
                tb: c,
                ha: g
            });
        h.G = Date.now();
        um(1, [h.D]);
        dm(1032, () => {
            if (f && X(lt)) {
                var k = h.D;
                Z(TG(), 32, !1) || (YG(TG(), 32, !0), mN(f, "sd" === k.google_loader_used ? 5 : 9))
            }
        });
        try {
            await BS(h)
        } catch (k) {
            if (!gm(159, k)) throw k;
        }
        dm(639, () => {
            var k;
            var l = h.D;
            (k = h.I) && 1 === l.google_responsive_auto_format && !0 === l.google_full_width_responsive_allowed ? (l = (l = k.document.getElementById(l.google_async_iframe_id)) ? ce(l,
                "INS", "adsbygoogle") : null) ? (k = new wL(k, l), k.j = t.setInterval(Fa(k.l, k), 500), k.l(), k = !0) : k = !1 : k = !1;
            return k
        });
        f ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/) ? hm(1008, CS(f, e, h.m, Ch(DS()), h.l, L(a, 8)), ES) : jm(h.pubWin, "affa", k => {
            k = CS(f, e, h.m, k.config, h.l, L(a, 8));
            bm.gb(1008, k, ES);
            return !0
        });
        return h
    }

    function ES(a) {
        a.es = R(Tl).j().join(",")
    }
    async function CS(a, b, c, d, e, f) {
        a = await FS(a, b, c, d, e, f);
        X(Js) && 0 !== a && Gj(am, "adfil-imp", {
            wp: b.google_ad_client ? ? "",
            e: pt(Ls),
            h: b.google_page_url ? ? "",
            o: a
        }, !0, 1)
    }
    async function FS(a, b, c, d, e, f) {
        if (!a) return 1;
        if (!X(gs) && !a.performance ? .now) return 2;
        const g = X(gs) && !a.performance ? .now ? new eQ : new dQ(a.performance),
            h = new nS(a, g),
            k = b.google_ad_client;
        if ("string" !== typeof k) return 3;
        if ("string" !== typeof d) return 4;
        if (Zb()) return 5;
        var l = R(qH),
            m = kP(d);
        d = b.google_page_url;
        d = "string" === typeof d ? d : "";
        b = "on" === b.google_adtest;
        var n = B(m, DL, 2);
        try {
            const x = a ? .location ? .hash ? .match(/\bgoog_cpmi=([^&]*)/);
            if (x) {
                var p = decodeURIComponent(x[1]);
                var q = ii(p)
            } else q = null
        } catch (x) {
            q =
                null
        }
        q || (q = (q = Ug(m, hi, 1, !1)) ? q : ug(hi));
        n = n ? .j() && (488 > Jm(a) || !n ? .m()) ? 0 : 1;
        m = C(m, yp, 3);
        m = {
            uj: pt(ks),
            Kc: 300,
            gf: 2,
            fe: 5,
            Vb: 300,
            Vh: LR(a, m)
        };
        f = {
            W: q,
            dd: d,
            Ae: n,
            ri: f,
            Va: m,
            lc: {
                Kc: 50,
                pf: pt(Ks)
            },
            L: new hR({
                ne: pt(Ls),
                Ic: R(Tl).j(),
                Gf: pt(js),
                Dd: pt(Bs),
                Ye: pt(Ds),
                Pc: X(Ns),
                Ze: X(Es),
                cf: X(Gs),
                Nd: X(Fs),
                Fa: X(Qs),
                Ta: X(ts),
                df: X(Hs),
                ce: X(is),
                sf: X(Ms),
                Ib: X(ss),
                Ec: pt(As),
                we: X(ns),
                xe: X(os),
                ye: X(ps),
                Ce: X(vs),
                be: pt(hs),
                ze: X(ys),
                Gd: X(Cs),
                uc: X(rs)
            }),
            ae: b
        };
        await KR(a, c, l, f, k, g, h, e);
        return 0
    }

    function DS() {
        const a = new jP;
        if (!X(Is)) {
            var b = new DL;
            b = wh(b, 5, !0);
            G(a, 2, b)
        }
        if (!X(zs)) {
            b = new yp;
            b = Rg(b, 2, gg(4));
            b = Rg(b, 8, gg(1));
            var c = new Co;
            c = Ah(c, 7, "#dpId");
            b = G(b, 1, c);
            lh(a, 3, yp, b)
        }
        return a
    }

    function BS(a) {
        if (/_sdo/.test(a.D.google_ad_format)) return Promise.resolve();
        var b = a.pubWin;
        eN(13, b);
        eN(11, b);
        b = TG();
        var c = Z(b, 23, !1);
        c || YG(b, 23, !0);
        if (!c) {
            b = a.D.google_ad_client;
            c = a.Ga;
            b = void 0 !== Ug(c, DL, gh(c, GL, 13)) ? B(sh(c, DL, 13, GL), VH, 2) : fb(sh(c, EL, 14, GL) ? .j() ? ? [], [b]) ? B(B(sh(c, EL, 14, GL), DL, 2), VH, 2) : new VH;
            b = new WH(a.pubWin, a.D.google_ad_client, b, I(a.Ga, 6), I(a.Ga, 20));
            b.l = !0;
            c = B(b.B, zp, 1);
            if (b.l) {
                var d = b.j;
                if (b.m && !aC(c)) {
                    var e = new IH;
                    e = Rg(e, 1, gg(1))
                } else e = null;
                if (e) {
                    e = Ch(e);
                    try {
                        d.localStorage.setItem("google_auto_fc_cmp_setting",
                            e)
                    } catch (f) {}
                }
            }
            d = aC(c) && (b.m || b.A);
            c && d && bC(new cC(b.j, new JC(b.j, b.v), c, new ov(b.j)))
        }
        b = !ri() && !Yb();
        return !b || b && !GS(a) ? HS(a) : Promise.resolve()
    }

    function IS(a, b, c = !1) {
        b = $J(a.I, b);
        const d = vi() || zt(a.pubWin.top);
        if (!b || -12245933 === b.y || -12245933 === d.width || -12245933 === d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = Bt(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function GS(a) {
        return JS(a) || KS(a)
    }

    function JS(a) {
        const b = a.D;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                fm("abg:cmppar", {
                    client: a.D.google_ad_client,
                    url: a.D.google_page_url
                })
            }, 1E4),
            d = em(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                GS(a) || HS(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function KS(a) {
        const b = a.pubWin.document,
            c = LS();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.ha,
            e = CK(b);
        if (!e) return !1;
        if (!DK(b)) return MS(a, c.visible, d);
        const f = 3 === BK(b);
        if (IS(a, d) <= c.hidden && !f) return !1;
        let g = em(332, () => {
            !DK(b) && g && (Cb(b, e, g), MS(a, c.visible, d) || HS(a), g = null)
        });
        return Bb(b, e, g)
    }

    function LS() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        fe() && (a.visible *= 2);
        return a
    }

    function MS(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.D;
        if (!Qm(d.google_reactive_ad_format) && (UK(d) || d.google_reactive_ads_config) || !Ct(c) || IS(a, c) <= b) return !1;
        var e = TG(),
            f = Z(e, 8, {});
        e = Z(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        f = new Promise(h => {
            const k = new t.IntersectionObserver((l, m) => {
                Qa(l, n => {
                    0 >= n.intersectionRatio || (m.unobserve(n.target), h(void 0))
                })
            }, {
                rootMargin: `${100*b}%`
            });
            a.F = k;
            k.observe(c)
        });
        e = new Promise(h => {
            c.addEventListener("adsbygoogle-close-to-visible-event",
                () => {
                    h(void 0)
                })
        });
        ia(Promise, "any").call(Promise, [f, e]).then(() => {
            dm(294, () => {
                HS(a)
            })
        });
        return !0
    }

    function HS(a) {
        dm(326, () => {
            if (1 === cj(a.D)) {
                var c = X(mt),
                    d = c || X(kt),
                    e = a.pubWin;
                if (d && e === a.I) {
                    var f = new om;
                    d = new pm;
                    var g = f.setCorrelator(gf(a.pubWin));
                    var h = gN(a.pubWin);
                    g = Bh(g, 5, h);
                    N(g, 2, 1);
                    f = G(d, 1, f);
                    g = new nm;
                    g = wh(g, 10, !0);
                    h = X(ft);
                    g = wh(g, 8, h);
                    h = X(gt);
                    g = wh(g, 12, h);
                    h = X(jt);
                    g = wh(g, 7, h);
                    h = X(it);
                    g = wh(g, 13, h);
                    G(f, 2, g);
                    e.google_rum_config = d.toJSON();
                    Ee(e.document, I(a.Ga, 9) && c ? a.ra.bj : a.ra.cj)
                } else vj(cm)
            }
        });
        a.D.google_ad_channel = NS(a, a.D.google_ad_channel);
        a.D.google_tag_partner = OS(a, a.D.google_tag_partner);
        PS(a);
        const b = a.D.google_start_time;
        "number" === typeof b && (ym = b, a.D.google_start_time = null);
        ZJ(a);
        a.I && YK(a.I, Gc(a.ra.Sh, AK()));
        aH() && hI({
            win: a.pubWin,
            webPropertyCode: a.D.google_ad_client,
            lb: Gc(a.ra.lb, AK())
        });
        UK(a.D) && (fI() && (a.D.google_adtest = a.D.google_adtest || "on"), a.D.google_pgb_reactive = a.D.google_pgb_reactive || 3);
        return QS(a)
    }

    function NS(a, b) {
        return (b ? [b] : []).concat(RG(a.pubWin).ad_channels || []).join("+")
    }

    function OS(a, b) {
        return (b ? [b] : []).concat(RG(a.pubWin).tag_partners || []).join("+")
    }

    function RS(a) {
        const b = Fe("IFRAME");
        Ie(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function SS(a, b, c) {
        return 9 === a.D.google_reactive_ad_format && ce(a.ha, null, "fsi_container") ? (a.ha.appendChild(b), Promise.resolve(b)) : eL(a.ra.Qg, 525, d => {
            a.ha.appendChild(b);
            d.createAdSlot(a.I, a.D, b, a.ha.parentElement, MH(c, a.pubWin));
            return b
        })
    }

    function TS(a, b, c, d) {
        R(qH).dd = a.D.google_page_url;
        pS(a.pubWin, Sh(Rh(N(N(Qh(new Vh, Oh(new Ph, String(gf(a.pubWin)))), 4, 1), 2, 1), L(a.Ga, 2)), I(d, 5)));
        const e = a.I;
        a.D.google_acr && a.D.google_acr(b);
        Bb(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = e ? RG(e).enable_overlap_observer || !1 : !1;
            (a.D.ovlp || f) && e && e === a.pubWin && US(e, a, a.ha, b)
        });
        d = f => {
            f && a.m.push(() => {
                f.ma()
            })
        };
        VS(a, b);
        WS(a, b);
        !e || UK(a.D) && !gL(a.D) || (d(new CM(e, b, a.ha)), d(new UL(a, b)), d(e.IntersectionObserver ? null : new WL(e, b, a.ha)));
        e && (d(OL(e, b, a.l)), a.m.push(qL(e, a.D)), R(vL).K(e), a.m.push(CL(e, a.ha, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.D.iaaso;
        if (null != c) {
            d = a.ha;
            const f = d.parentElement;
            (f && Pt.test(f.className) ? f : d).setAttribute("data-auto-ad-size", c)
        }
        c = a.ha;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        XS(a)
    }

    function VS(a, b) {
        const c = a.pubWin,
            d = a.D.google_ad_client,
            e = $G();
        let f = null;
        const g = im(c, "pvt", (h, k) => {
            "string" === typeof h.token && k.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.m.push(g)
    }

    function YS(a, b) {
        var c = aK(a, "__gpi_opt_out", b.l);
        c && (c = ci(bi(ai(Zh(c), 2147483647), "/"), b.pubWin.location.hostname), bK(a, "__gpi_opt_out", c, b.l))
    }

    function WS(a, b) {
        const c = im(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = ci(bi(ai(Zh(d.userOptOut ? "1" : "0"), 2147483647), "/"), a.pubWin.location.hostname);
                var f = new eK(a.pubWin);
                bK(f, "__gpi_opt_out", e, a.l);
                if (d.userOptOut || d.clearAdsData) cK(f, "__gads", a.l), cK(f, "__gpi", a.l)
            }
        });
        a.m.push(c)
    }

    function XS(a) {
        const b = ri(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                Bb(a.pubWin, "message", bm.Qa(616, c));
                a.m.push(() => {
                    Cb(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function US(a, b, c, d) {
        aS(new jS(a), c).then(e => {
            um(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && Pt.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.D.armr || "",
                g = e.executionTime || "",
                h = null == b.D.iaaso ? "" : Number(b.D.iaaso),
                k = Number(e.isOverlappingOrOutsideViewport),
                l = Ua(e.entries, D => `${D.overlapType}:${D.overlapDepth}:${D.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId || "",
                p =
                m * e.targetRect.width * e.targetRect.height,
                q = `${e.scrollPosition.scrollX},${e.scrollPosition.scrollY}`,
                x = dj(e.target),
                v = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = `${e.viewportSize.width}x${e.viewportSize.height}`;
            fm("ovlp", {
                adf: b.D.google_ad_dom_fingerprint,
                armr: f,
                client: b.D.google_ad_client,
                eid: gN(b.D),
                et: g,
                fwrattr: b.D.google_full_width_responsive,
                iaaso: h,
                io: k,
                saldr: b.D.google_loader_used,
                oa: m,
                oe: l.join(","),
                qid: n,
                rafmt: b.D.google_responsive_auto_format,
                roa: p,
                slot: b.D.google_ad_slot,
                sp: q,
                tgt: x,
                tr: v,
                url: b.D.google_page_url,
                vp: e,
                pvc: gf(a)
            }, 1)
        }).catch(e => {
            um(8, ["Error:", e.message, c]);
            fm("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function ZS(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function $S(a, b, c, d) {
        var e = a.D;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var k = hL(e),
            l = {
                id: f,
                name: f
            };
        YM("browsing-topics", a.pubWin.document) && aT(a) && !X(Ws) && (l.browsingTopics = "true");
        l.style = k ? [`width:${g}px !IMPORTANT`, `height:${h}px !IMPORTANT`].join(";") : "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`;
        var m = Ve();
        m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"] && (X(Wr) && k || (m = "=" + encodeURIComponent("1"),
            b = je(b, "fsb" + m)), l.sandbox = Ue().join(" "));
        X(pr) && !1 === e.google_video_play_muted && ZS("autoplay", l);
        m = b;
        61440 < m.length && (m = m.substring(0, 61432), m = m.replace(/%\w?$/, ""), m = m.replace(/&[^=]*=?$/, ""), m += "&trunc=1");
        if (m !== b) {
            var n = b.lastIndexOf("&", 61432); - 1 === n && (n = b.lastIndexOf("?", 61432));
            fm("trn", {
                ol: b.length,
                tr: -1 === n ? "" : b.substring(n + 1),
                url: b
            }, .01)
        }
        b = m;
        n = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (l.width = String(g));
        null != h && (l.height = String(h));
        l.frameborder = "0";
        l.marginwidth = "0";
        l.marginheight =
            "0";
        l.vspace = "0";
        l.hspace = "0";
        l.allowtransparency = "true";
        l.scrolling = "no";
        m = "";
        if (c) {
            m = 10;
            for (n = ""; 0 < m--;) n += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 * Math.random()));
            n = m = n;
            const p = Re();
            b = b + (-1 == b.indexOf("?") ? "?" : "&") + [0 < p.length ? "google_debug" + (p ? "=" + p : "") + "&" : "", "xpc=", n, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
        } else b = n;
        e.dash && (l.srcdoc = e.dash);
        a.pubWin.document.featurePolicy ? .features().includes("attribution-reporting") &&
            ZS("attribution-reporting", l);
        X(ct) && (n = a.pubWin, void 0 !== n.credentialless && (X(dt) || n.crossOriginIsolated) && (l.credentialless = "true"));
        if (k) l.src = b, l = RS(l), l = SS(a, l, d);
        else {
            d = {};
            d.dtd = AL((new Date).getTime(), ym);
            d = Zi(d, b);
            l.src = d;
            d = a.pubWin;
            d = d == d.top;
            l = RS(l);
            d && a.m.push(xi(a.pubWin, l));
            a.ha.style.visibility = "visible";
            for (d = a.ha; k = d.firstChild;) d.removeChild(k);
            d.appendChild(l);
            l = Promise.resolve(l)
        }
        c && (c = a.ra.vj, e = {
            id: f,
            url: b,
            width: g,
            height: h,
            Gb: m,
            aj: a.pubWin,
            uh: f,
            Qn: `google_expandable_ad_slot${cj(e)}`,
            Ci: c.toString(),
            Ie: a.pubWin
        }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Gb || !e.Ie ? void 0 : im(e.Ie, "ct", Ga(lm, e, c)), null != e && a.m.push(e));
        return l
    }
    async function bT(a) {
        var b = a.D,
            c = a.pubWin;
        const d = a.l;
        I(d, 5) && YS(new eK(a.pubWin), a);
        var e = MH(d, a.pubWin);
        if (!I(d, 5)) return fm("afc_noc_req", {}, pt(or)), Promise.resolve();
        if (!X(Ys)) {
            var f = YM("shared-storage", a.pubWin.document),
                g = YM("browsing-topics", a.pubWin.document);
            if (f || g) try {
                a.A = wS(a.pubWin)
            } catch (h) {
                gm(984, h)
            }
        }
        X(hr) || iK(d, a.pubWin, a.D.google_ad_client);
        fN(a.pubWin, d);
        if (f = a.D.google_reactive_ads_config) dL(a.I, f), iL(f, a, MH(d)), f = f.page_level_pubvars, va(f) && Ac(a.D, f);
        f = YM("shared-storage", a.pubWin.document);
        a.A && I(d, 5) && f && !X(Rs) && !Z(TG(), 34, !1) && (YG(TG(), 34, !0), f = a.A.then(h => {
            h({
                message: "goog:spam:client_age",
                pvsid: gf(a.pubWin),
                sendPingToRCS: X(Ss)
            })
        }), bm.gb(1069, f));
        if (YM("browsing-topics", a.pubWin.document) && a.A && !X(Xs))
            if (aT(a)) {
                a.v = 1;
                const h = MH(a.l, a.pubWin);
                f = a.A.then(async k => {
                    await xS(k, a.pubWin, h).then(l => {
                        a.v = l
                    })
                });
                g = pt(at);
                0 < g ? await Promise.race([f, jf(g)]) : await f
            } else a.v = 5;
        f = "";
        hL(b) ? (e = X(Zr) ? a.ra.xj : a.ra.yj, X(Qr) && (e = Gc(e, {
            hello: "world"
        })), f = e.toString() + "#" + (encodeURIComponent("RS-" + b.google_reactive_sra_index +
            "-") + "&" + Yi({
            adk: b.google_ad_unit_key,
            client: b.google_ad_client,
            fa: b.google_reactive_ad_format
        })), VO(b, TG()), cT(b)) : (5 === b.google_pgb_reactive && b.google_reactive_ads_config || !VK(b) || TK(c, b, e)) && cT(b) && (f = rN(a, d));
        um(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || bj(c);
        e = cj(b);
        b = a.pubWin === a.I ? "a!" + e.toString(36) : `${e.toString(36)}.${Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)}`;
        c = 0 < IS(a, a.ha, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = TG(), e.btvi = Z(c, 21, 1), ZG(c, 21));
        f = Zi(e, f);
        c = $S(a, f, 0 === a.C, d);
        a.D.rpe && AM(a.pubWin, a.ha, {
            height: a.D.google_ad_height,
            nf: "force",
            Uc: !0,
            ff: !0,
            Xd: a.D.google_ad_client
        });
        c = await c;
        try {
            TS(a, c, b, d)
        } catch (h) {
            gm(223, h)
        }
    }

    function dT(a) {
        const b = new UR(a);
        return new Promise(c => {
            TR(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function eT(a) {
        var b = We(t.top, "googlefcPresent");
        t.googlefc && !b && fm("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function fT(a, b) {
        var c = b.rj,
            d = b.uspString;
        b = b.si;
        c ? yL(a, c) : QH(a, !0);
        d && (Ah(a, 1, d), X(bt) && (c = d.toUpperCase(), 4 == c.length && (-1 == c.indexOf("-") || "---" === c.substring(1)) && "1" <= c[0] && "9" >= c[0] && lI.hasOwnProperty(c[1]) && lI.hasOwnProperty(c[2]) && lI.hasOwnProperty(c[3]) ? (d = jI(parseInt(c[0], 10)), d = N(d, 2, lI[c[1]]), d = N(d, 3, lI[c[2]]), c = N(d, 4, lI[c[3]])) : c = null, c = 2 === c ? .jg(), vh(a, 13, c)));
        b && uK(a, b)
    }

    function gT(a) {
        const b = pt(lr);
        if (0 >= b) return null;
        const c = oj(),
            d = mS(a.pubWin);
        if (!d) return null;
        a.B = "0";
        return Promise.race([d, jf(b, "0")]).then(e => {
            fm("adsense_paw", {
                time: oj() - c
            });
            1E4 < e ? .length ? gm(809, Error(`ML:${e.length}`)) : a.B = e
        }).catch(e => {
            gm(809, e)
        })
    }

    function hT(a) {
        const b = oj();
        return Promise.race([dm(832, () => rS(a)), jf(200)]).then(c => {
            fm("afc_etu", {
                etus: c ? .status ? ? 100,
                sig: oj() - b,
                tms: 200
            });
            return c ? .vc
        })
    }
    async function iT(a) {
        const b = gT(a),
            c = dm(868, () => hT(a.pubWin));
        DJ(a.pubWin);
        eT(a.D.google_ad_client);
        var d = new vC(a.pubWin);
        await (sC(d) ? tC(d) : Promise.resolve(null));
        a.l = new RH;
        d = [zL(a), dT(a.pubWin), X(ir) ? vK(a) : null];
        d = await Promise.all(d);
        fT(a.l, {
            rj: d[0],
            uspString: d[1],
            si: d[2]
        });
        await b;
        a.vc = await c || "";
        await bT(a)
    }

    function aT(a) {
        const b = a.l;
        a = a.D;
        return !a.google_restrict_data_processing && 1 !== a.google_tag_for_under_age_of_consent && 1 !== a.google_tag_for_child_directed_treatment && !!I(b, 5) && !b.j() && !bH() && !I(b, 9) && (!X(bt) || !I(b, 13)) && (!X(ir) || !I(b, 12)) && (!X(Zs) || "string" !== typeof a.google_privacy_treatments || !a.google_privacy_treatments.split(",").includes("disablePersonalization"))
    }

    function QS(a) {
        if (X(Rr)) var b = 16;
        else {
            const f = a.pubWin.document;
            var c = a.D;
            const g = c.google_ad_width,
                h = c.google_ad_height;
            let k = 0;
            try {
                !1 === c.google_allow_expandable_ads && (k |= 1);
                if (!f.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(f.location.protocol)) k |= 2; {
                    c = navigator;
                    const l = c.userAgent,
                        m = c.platform,
                        n = c.product;
                    if (!/Win|Mac|Linux|iPad|iPod|iPhone/.test(m) && /^Opera/.test(l)) b = !1;
                    else if (/Win/.test(m) && /Trident/.test(l) && 11 <= f.documentMode) b = !0;
                    else {
                        var d = (/WebKit\/(\d+)/.exec(l) || [0, 0])[1],
                            e = (/rv:(\d+\.\d+)/.exec(l) || [0, 0])[1];
                        b = !d && "Gecko" === n && 27 <= e && !/ rv: 1\.8([^.] |\.0) /.test(l) || 536 <= d ? !0 : !1
                    }
                }
                b || (k |= 4);
                Gt(a.pubWin, g, h) && (k |= 2)
            } catch (l) {
                k |= 8
            }
            b = k
        }
        a.C = b;
        0 === a.C || (a.D.google_allow_expandable_ads = !1);
        kf(a.pubWin) !== a.pubWin && (a.j |= 4);
        3 === BK(a.pubWin.document) && (a.j |= 32);
        if (b = a.I) b = a.I, d = Jm(b), b = !(Om(b).scrollWidth <= d);
        b && (a.j |= 1024);
        a.pubWin.Prototype ? .Version && (a.j |= 16384);
        a.D.google_loader_features_used && (a.j |= a.D.google_loader_features_used);
        return iT(a)
    }

    function cT(a) {
        const b = TG(),
            c = a.google_ad_section;
        UK(a) && ZG(b, 15);
        if (gj(a)) {
            if (100 < ZG(b, 5)) return !1
        } else if (100 < ZG(b, 6) - Z(b, 15, 0) && "" === c) return !1;
        return !0
    }

    function PS(a) {
        const b = a.I;
        if (b && !RG(b).ads_density_stats_processed && !ri(b) && (RG(b).ads_density_stats_processed = !0, X(as) || .01 > He())) {
            const c = () => {
                if (b) {
                    var d = RF(MF(b), a.D.google_ad_client, b.location.hostname, gN(a.D).split(","));
                    fm("ama_stats", d, 1)
                }
            };
            hf(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    };
    (function(a, b, c) {
        dm(843, () => {
            if (!t.google_sa_impl) {
                var d = new Jl(b);
                try {
                    Xf(k => {
                        var l = new ql;
                        var m = new pl;
                        try {
                            var n = gf(window);
                            M(m, 1, n)
                        } catch (v) {}
                        try {
                            var p = R(Tl).j();
                            ch(m, 2, p, ig)
                        } catch (v) {}
                        try {
                            Bh(m, 3, window.document.URL)
                        } catch (v) {}
                        l = G(l, 2, m);
                        m = new ol;
                        m = N(m, 1, 1192);
                        try {
                            var q = Ij(k ? .name) ? k.name : "Unknown error";
                            Bh(m, 2, q)
                        } catch (v) {}
                        try {
                            var x = Ij(k ? .message) ? k.message : `Caught ${k}`;
                            Bh(m, 3, x)
                        } catch (v) {}
                        try {
                            const v = Ij(k ? .stack) ? k.stack : Error().stack;
                            v && ch(m, 4, v.split(/\n\s*/), qg)
                        } catch (v) {}
                        k = G(l, 1, m);
                        q = new nl;
                        try {
                            Bh(q, 1, "m202310100101")
                        } catch {}
                        jh(k, 6, rl, q);
                        M(k, 5, 1);
                        sl(d, k)
                    })
                } catch (k) {}
                var e = PR(a);
                NR(L(e, 2));
                JL(I(e, 6));
                um(16, [3, e.toJSON()]);
                var f = MR({
                        Qf: b,
                        Vg: L(e, 2)
                    }),
                    g = c(f, e);
                t.google_sa_impl = k => AS({
                    Ga: e,
                    ra: g,
                    tb: f,
                    slot: k
                });
                cN(XM(t));
                t.google_process_slots ? .();
                var h = (t.Prototype || {}).Version;
                null != h && fm("prtpjs", {
                    version: h
                })
            }
        })
    })(OR, "m202310100101", function(a, b) {
        const c = 2012 < qh(b, 1) ? `_fy${qh(b,1)}` : "",
            d = L(b, 3);
        b = L(b, 2);
        return {
            cj: Hi `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            bj: Hi `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Qg: Hi `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}reactive_library${c}.js`,
            Sh: Hi `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}debug_card_library${c}.js`,
            vj: Hi `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            yj: Hi `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            xj: Hi `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup${c}.html`,
            Zn: Hi `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}slotcar_library${c}.js`,
            Rn: Hi `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`,
            lb: Hi `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/${""}autogames${c}.js`
        }
    });
}).call(this, "[2021,\"r20231011\",\"r20110914\",1,null,1,null,\".google.lt\",null,null,null,null,[null,[[1,null,1,[[[null,0,null,null,null,null,\"BODY\"],3,[\"10px\",\"10px\",1],[5],null,null,null,1],[[null,0,null,null,null,null,\"DIV.ast-builder-grid-row-container-inner\\u003eDIV.ast-builder-footer-grid-columns.site-below-footer-inner-wrap.ast-builder-grid-row\\u003eDIV.site-footer-section\"],4,[\"10px\",\"10px\",1],[5],null,null,null,1],[[null,0,null,null,null,null,\"DIV#content\\u003eDIV.ast-container\"],4,[\"10px\",\"10px\",1],[5],null,null,null,1],[[null,0,null,null,null,null,\"DIV#page\\u003eFOOTER#colophon.site-footer\\u003eDIV.site-below-footer-wrap.ast-builder-grid-row-container.site-footer-focus-item.ast-builder-grid-row-full.ast-builder-grid-row-tablet-full.ast-builder-grid-row-mobile-full.ast-footer-row-stack.ast-footer-row-tablet-stack.ast-footer-row-mobile-stack\"],1,[\"10px\",\"10px\",1],[5],null,null,null,1],[[null,0,null,null,null,null,\"BODY\\u003eFOOTER#colophon.site-footer\\u003eDIV.site-below-footer-wrap.ast-builder-grid-row-container.site-footer-focus-item.ast-builder-grid-row-full.ast-builder-grid-row-tablet-full.ast-builder-grid-row-mobile-full.ast-footer-row-stack.ast-footer-row-tablet-stack.ast-footer-row-mobile-stack\"],1,[\"10px\",\"37.5px\",1],[5],null,null,null,1,null,[5]],[[null,0,null,null,null,null,\"DIV.ast-builder-grid-row-container-inner\"],4,[\"10px\",\"10px\",1],[5],null,null,null,1,null,[5]]],null,1]],null,null,null,null,null,null,\"ca-pub-1101978191620274\"],null,null,null,null,-1,[44759876,44759927]]");