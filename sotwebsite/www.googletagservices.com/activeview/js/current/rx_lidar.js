(function() {
    var m, aa = function(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        },
        ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
            if (a == Array.prototype || a == Object.prototype) return a;
            a[b] = c.value;
            return a
        },
        ca = function(a) {
            a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                if (c && c.Math == Math) return c
            }
            throw Error("a");
        },
        da =
        ca(this),
        n = function(a, b) {
            if (b) a: {
                var c = da;a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var e = a[d];
                    if (!(e in c)) break a;
                    c = c[e]
                }
                a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
        };
    n("Symbol", function(a) {
        if (a) return a;
        var b = function(f, g) {
            this.cg = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        };
        b.prototype.toString = function() {
            return this.cg
        };
        var c = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            d = 0,
            e = function(f) {
                if (this instanceof e) throw new TypeError("b");
                return new b(c + (f || "") + "_" + d++, f)
            };
        return e
    });
    n("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ea(aa(this))
                }
            })
        }
        return a
    });
    n("Symbol.asyncIterator", function(a) {
        return a ? a : Symbol("Symbol.asyncIterator")
    });
    var ea = function(a) {
            a = {
                next: a
            };
            a[Symbol.iterator] = function() {
                return this
            };
            return a
        },
        fa = function(a) {
            return a.raw = a
        },
        ha = function(a, b) {
            a.raw = b;
            return a
        },
        t = function(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            if (b) return b.call(a);
            if ("number" == typeof a.length) return {
                next: aa(a)
            };
            throw Error("c`" + String(a));
        },
        u = function(a) {
            if (!(a instanceof Array)) {
                a = t(a);
                for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
                a = c
            }
            return a
        },
        ja = function(a, b) {
            return Object.prototype.hasOwnProperty.call(a,
                b)
        },
        ka = "function" == typeof Object.assign ? Object.assign : function(a, b) {
            for (var c = 1; c < arguments.length; c++) {
                var d = arguments[c];
                if (d)
                    for (var e in d) ja(d, e) && (a[e] = d[e])
            }
            return a
        };
    n("Object.assign", function(a) {
        return a || ka
    });
    var la = "function" == typeof Object.create ? Object.create : function(a) {
            var b = function() {};
            b.prototype = a;
            return new b
        },
        ma;
    if ("function" == typeof Object.setPrototypeOf) ma = Object.setPrototypeOf;
    else {
        var na;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                na = qa.a;
                break a
            } catch (a) {}
            na = !1
        }
        ma = na ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError("d`" + a);
            return a
        } : null
    }
    var ra = ma,
        v = function(a, b) {
            a.prototype = la(b.prototype);
            a.prototype.constructor = a;
            if (ra) ra(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.ii = b.prototype
        },
        sa = function() {
            this.Zb = !1;
            this.ab = null;
            this.Ie = void 0;
            this.ha = 1;
            this.Fa = this.bb = 0;
            this.Qd = this.da = null
        };
    m = sa.prototype;
    m.Za = function() {
        if (this.Zb) throw new TypeError("f");
        this.Zb = !0
    };
    m.dc = function(a) {
        this.Ie = a
    };
    m.oc = function(a) {
        this.da = {
            df: a,
            uf: !0
        };
        this.ha = this.bb || this.Fa
    };
    m.return = function(a) {
        this.da = {
            return: a
        };
        this.ha = this.Fa
    };
    m.kb = function(a) {
        this.ha = a
    };
    var ta = function(a, b, c) {
            c = a.Qd.splice(c || 0)[0];
            (c = a.da = a.da || c) ? c.uf ? a.ha = a.bb || a.Fa : void 0 != c.kb && a.Fa < c.kb ? (a.ha = c.kb, a.da = null) : a.ha = a.Fa: a.ha = b
        },
        ua = function(a) {
            this.s = new sa;
            this.Oh = a
        };
    ua.prototype.dc = function(a) {
        this.s.Za();
        if (this.s.ab) return va(this, this.s.ab.next, a, this.s.dc);
        this.s.dc(a);
        return wa(this)
    };
    var xa = function(a, b) {
        a.s.Za();
        var c = a.s.ab;
        if (c) return va(a, "return" in c ? c["return"] : function(d) {
            return {
                value: d,
                done: !0
            }
        }, b, a.s.return);
        a.s.return(b);
        return wa(a)
    };
    ua.prototype.oc = function(a) {
        this.s.Za();
        if (this.s.ab) return va(this, this.s.ab["throw"], a, this.s.dc);
        this.s.oc(a);
        return wa(this)
    };
    var va = function(a, b, c, d) {
            try {
                var e = b.call(a.s.ab, c);
                if (!(e instanceof Object)) throw new TypeError("e`" + e);
                if (!e.done) return a.s.Zb = !1, e;
                var f = e.value
            } catch (g) {
                return a.s.ab = null, a.s.oc(g), wa(a)
            }
            a.s.ab = null;
            d.call(a.s, f);
            return wa(a)
        },
        wa = function(a) {
            for (; a.s.ha;) try {
                var b = a.Oh(a.s);
                if (b) return a.s.Zb = !1, {
                    value: b.value,
                    done: !1
                }
            } catch (c) {
                a.s.Ie = void 0, a.s.oc(c)
            }
            a.s.Zb = !1;
            if (a.s.da) {
                b = a.s.da;
                a.s.da = null;
                if (b.uf) throw b.df;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        },
        ya = function(a) {
            this.next =
                function(b) {
                    return a.dc(b)
                };
            this.throw = function(b) {
                return a.oc(b)
            };
            this.return = function(b) {
                return xa(a, b)
            };
            this[Symbol.iterator] = function() {
                return this
            }
        },
        Aa = function(a) {
            function b(d) {
                return a.next(d)
            }

            function c(d) {
                return a.throw(d)
            }
            return new Promise(function(d, e) {
                function f(g) {
                    g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
                }
                f(a.next())
            })
        },
        Ba = function(a) {
            this[Symbol.asyncIterator] = function() {
                return this
            };
            this[Symbol.iterator] = function() {
                return a
            };
            this.next = function(b) {
                return Promise.resolve(a.next(b))
            };
            void 0 !== a["throw"] && (this["throw"] = function(b) {
                return Promise.resolve(a["throw"](b))
            });
            void 0 !== a["return"] && (this["return"] = function(b) {
                return Promise.resolve(a["return"](b))
            })
        },
        w = function() {
            for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
            return b
        };
    n("Promise", function(a) {
        function b() {
            this.Pa = null
        }

        function c(g) {
            return g instanceof e ? g : new e(function(h) {
                h(g)
            })
        }
        if (a) return a;
        b.prototype.Re = function(g) {
            if (null == this.Pa) {
                this.Pa = [];
                var h = this;
                this.Se(function() {
                    h.Ig()
                })
            }
            this.Pa.push(g)
        };
        var d = da.setTimeout;
        b.prototype.Se = function(g) {
            d(g, 0)
        };
        b.prototype.Ig = function() {
            for (; this.Pa && this.Pa.length;) {
                var g = this.Pa;
                this.Pa = [];
                for (var h = 0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.pg(l)
                    }
                }
            }
            this.Pa = null
        };
        b.prototype.pg = function(g) {
            this.Se(function() {
                throw g;
            })
        };
        var e = function(g) {
            this.Kb = 0;
            this.kc = void 0;
            this.Eb = [];
            this.xf = !1;
            var h = this.Hd();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        };
        e.prototype.Hd = function() {
            function g(l) {
                return function(q) {
                    k || (k = !0, l.call(h, q))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.Xh),
                reject: g(this.ue)
            }
        };
        e.prototype.Xh = function(g) {
            if (g === this) this.ue(new TypeError("g"));
            else if (g instanceof e) this.ci(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.Wh(g) : this.hf(g)
            }
        };
        e.prototype.Wh = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.ue(k);
                return
            }
            "function" == typeof h ? this.di(h, g) : this.hf(g)
        };
        e.prototype.ue = function(g) {
            this.Sf(2, g)
        };
        e.prototype.hf = function(g) {
            this.Sf(1, g)
        };
        e.prototype.Sf = function(g, h) {
            if (0 != this.Kb) throw Error("h`" + g + "`" + h + "`" + this.Kb);
            this.Kb = g;
            this.kc = h;
            2 === this.Kb && this.Zh();
            this.Jg()
        };
        e.prototype.Zh = function() {
            var g = this;
            d(function() {
                if (g.Ah()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.kc)
                }
            }, 1)
        };
        e.prototype.Ah = function() {
            if (this.xf) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.kc;
            return k(g)
        };
        e.prototype.Jg = function() {
            if (null != this.Eb) {
                for (var g = 0; g < this.Eb.length; ++g) f.Re(this.Eb[g]);
                this.Eb = null
            }
        };
        var f = new b;
        e.prototype.ci = function(g) {
            var h =
                this.Hd();
            g.Cc(h.resolve, h.reject)
        };
        e.prototype.di = function(g, h) {
            var k = this.Hd();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        e.prototype.then = function(g, h) {
            function k(p, x) {
                return "function" == typeof p ? function(A) {
                    try {
                        l(p(A))
                    } catch (F) {
                        q(F)
                    }
                } : x
            }
            var l, q, r = new e(function(p, x) {
                l = p;
                q = x
            });
            this.Cc(k(g, l), k(h, q));
            return r
        };
        e.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        e.prototype.Cc = function(g, h) {
            function k() {
                switch (l.Kb) {
                    case 1:
                        g(l.kc);
                        break;
                    case 2:
                        h(l.kc);
                        break;
                    default:
                        throw Error("i`" +
                            l.Kb);
                }
            }
            var l = this;
            null == this.Eb ? f.Re(k) : this.Eb.push(k);
            this.xf = !0
        };
        e.resolve = c;
        e.reject = function(g) {
            return new e(function(h, k) {
                k(g)
            })
        };
        e.race = function(g) {
            return new e(function(h, k) {
                for (var l = t(g), q = l.next(); !q.done; q = l.next()) c(q.value).Cc(h, k)
            })
        };
        e.all = function(g) {
            var h = t(g),
                k = h.next();
            return k.done ? c([]) : new e(function(l, q) {
                function r(A) {
                    return function(F) {
                        p[A] = F;
                        x--;
                        0 == x && l(p)
                    }
                }
                var p = [],
                    x = 0;
                do p.push(void 0), x++, c(k.value).Cc(r(p.length - 1), q), k = h.next(); while (!k.done)
            })
        };
        return e
    });
    n("Object.values", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ja(b, d) && c.push(b[d]);
            return c
        }
    });
    var Ca = function(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    };
    n("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return Ca(this, function(b) {
                return b
            })
        }
    });
    n("WeakMap", function(a) {
        function b() {}

        function c(k) {
            var l = typeof k;
            return "object" === l && null !== k || "function" === l
        }

        function d(k) {
            if (!ja(k, f)) {
                var l = new b;
                ba(k, f, {
                    value: l
                })
            }
        }

        function e(k) {
            var l = Object[k];
            l && (Object[k] = function(q) {
                if (q instanceof b) return q;
                Object.isExtensible(q) && d(q);
                return l(q)
            })
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var k = Object.seal({}),
                        l = Object.seal({}),
                        q = new a([
                            [k, 2],
                            [l, 3]
                        ]);
                    if (2 != q.get(k) || 3 != q.get(l)) return !1;
                    q.delete(k);
                    q.set(l, 4);
                    return !q.has(k) && 4 == q.get(l)
                } catch (r) {
                    return !1
                }
            }()) return a;
        var f = "$jscomp_hidden_" + Math.random();
        e("freeze");
        e("preventExtensions");
        e("seal");
        var g = 0,
            h = function(k) {
                this.Xb = (g += Math.random() + 1).toString();
                if (k) {
                    k = t(k);
                    for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
                }
            };
        h.prototype.set = function(k, l) {
            if (!c(k)) throw Error("j");
            d(k);
            if (!ja(k, f)) throw Error("k`" + k);
            k[f][this.Xb] = l;
            return this
        };
        h.prototype.get = function(k) {
            return c(k) && ja(k, f) ? k[f][this.Xb] : void 0
        };
        h.prototype.has = function(k) {
            return c(k) && ja(k, f) && ja(k[f], this.Xb)
        };
        h.prototype.delete = function(k) {
            return c(k) &&
                ja(k, f) && ja(k[f], this.Xb) ? delete k[f][this.Xb] : !1
        };
        return h
    });
    n("Map", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(t([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        q = l.next();
                    if (q.done || q.value[0] != h || "s" != q.value[1]) return !1;
                    q = l.next();
                    return q.done || 4 != q.value[0].x || "t" != q.value[1] || !l.next().done ? !1 : !0
                } catch (r) {
                    return !1
                }
            }()) return a;
        var b = new WeakMap,
            c = function(h) {
                this[0] = {};
                this[1] =
                    f();
                this.size = 0;
                if (h) {
                    h = t(h);
                    for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
                }
            };
        c.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this[0][l.id] = []);
            l.P ? l.P.value = k : (l.P = {
                next: this[1],
                Ja: this[1].Ja,
                head: this[1],
                key: h,
                value: k
            }, l.list.push(l.P), this[1].Ja.next = l.P, this[1].Ja = l.P, this.size++);
            return this
        };
        c.prototype.delete = function(h) {
            h = d(this, h);
            return h.P && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this[0][h.id], h.P.Ja.next = h.P.next, h.P.next.Ja = h.P.Ja,
                h.P.head = null, this.size--, !0) : !1
        };
        c.prototype.clear = function() {
            this[0] = {};
            this[1] = this[1].Ja = f();
            this.size = 0
        };
        c.prototype.has = function(h) {
            return !!d(this, h).P
        };
        c.prototype.get = function(h) {
            return (h = d(this, h).P) && h.value
        };
        c.prototype.entries = function() {
            return e(this, function(h) {
                return [h.key, h.value]
            })
        };
        c.prototype.keys = function() {
            return e(this, function(h) {
                return h.key
            })
        };
        c.prototype.values = function() {
            return e(this, function(h) {
                return h.value
            })
        };
        c.prototype.forEach = function(h, k) {
            for (var l = this.entries(),
                    q; !(q = l.next()).done;) q = q.value, h.call(k, q[1], q[0], this)
        };
        c.prototype[Symbol.iterator] = c.prototype.entries;
        var d = function(h, k) {
                var l = k && typeof k;
                "object" == l || "function" == l ? b.has(k) ? l = b.get(k) : (l = "" + ++g, b.set(k, l)) : l = "p_" + k;
                var q = h[0][l];
                if (q && ja(h[0], l))
                    for (h = 0; h < q.length; h++) {
                        var r = q[h];
                        if (k !== k && r.key !== r.key || k === r.key) return {
                            id: l,
                            list: q,
                            index: h,
                            P: r
                        }
                    }
                return {
                    id: l,
                    list: q,
                    index: -1,
                    P: void 0
                }
            },
            e = function(h, k) {
                var l = h[1];
                return ea(function() {
                    if (l) {
                        for (; l.head != h[1];) l = l.Ja;
                        for (; l.next != l.head;) return l =
                            l.next, {
                                done: !1,
                                value: k(l)
                            };
                        l = null
                    }
                    return {
                        done: !0,
                        value: void 0
                    }
                })
            },
            f = function() {
                var h = {};
                return h.Ja = h.next = h.head = h
            },
            g = 0;
        return c
    });
    var Fa = function(a, b, c) {
        if (null == a) throw new TypeError("l`" + c);
        if (b instanceof RegExp) throw new TypeError("m`" + c);
        return a + ""
    };
    n("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    n("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = Fa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    n("Number.isFinite", function(a) {
        return a ? a : function(b) {
            return "number" !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b
        }
    });
    n("Array.prototype.values", function(a) {
        return a ? a : function() {
            return Ca(this, function(b, c) {
                return c
            })
        }
    });
    n("Set", function(a) {
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(t([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        var b = function(c) {
            this.ya = new Map;
            if (c) {
                c =
                    t(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.ya.size
        };
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.ya.set(c, c);
            this.size = this.ya.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.ya.delete(c);
            this.size = this.ya.size;
            return c
        };
        b.prototype.clear = function() {
            this.ya.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.ya.has(c)
        };
        b.prototype.entries = function() {
            return this.ya.entries()
        };
        b.prototype.values = function() {
            return this.ya.values()
        };
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.ya.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    });
    n("Array.prototype.entries", function(a) {
        return a ? a : function() {
            return Ca(this, function(b, c) {
                return [b, c]
            })
        }
    });
    n("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    n("Math.log2", function(a) {
        return a ? a : function(b) {
            return Math.log(b) / Math.LN2
        }
    });
    n("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    n("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    n("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== Fa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    n("Number.MAX_SAFE_INTEGER", function() {
        return 9007199254740991
    });
    n("Number.isInteger", function(a) {
        return a ? a : function(b) {
            return Number.isFinite(b) ? b === Math.floor(b) : !1
        }
    });
    n("Number.isSafeInteger", function(a) {
        return a ? a : function(b) {
            return Number.isInteger(b) && Math.abs(b) <= Number.MAX_SAFE_INTEGER
        }
    });
    n("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(h) {
                return h
            };
            var e = [],
                f = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof f) {
                b = f.call(b);
                for (var g = 0; !(f = b.next()).done;) e.push(c.call(d, f.value, g++))
            } else
                for (f = b.length, g = 0; g < f; g++) e.push(c.call(d, b[g], g));
            return e
        }
    });
    n("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var e = this.length || 0;
            0 > c && (c = Math.max(0, e + c));
            if (null == d || d > e) d = e;
            d = Number(d);
            0 > d && (d = Math.max(0, e + d));
            for (c = Number(c || 0); c < d; c++) this[c] = b;
            return this
        }
    });
    var Ga = function(a) {
        return a ? a : Array.prototype.fill
    };
    n("Int8Array.prototype.fill", Ga);
    n("Uint8Array.prototype.fill", Ga);
    n("Uint8ClampedArray.prototype.fill", Ga);
    n("Int16Array.prototype.fill", Ga);
    n("Uint16Array.prototype.fill", Ga);
    n("Int32Array.prototype.fill", Ga);
    n("Uint32Array.prototype.fill", Ga);
    n("Float32Array.prototype.fill", Ga);
    n("Float64Array.prototype.fill", Ga);
    n("Object.entries", function(a) {
        return a ? a : function(b) {
            var c = [],
                d;
            for (d in b) ja(b, d) && c.push([d, b[d]]);
            return c
        }
    });
    n("Array.prototype.flat", function(a) {
        return a ? a : function(b) {
            b = void 0 === b ? 1 : b;
            var c = [];
            Array.prototype.forEach.call(this, function(d) {
                Array.isArray(d) && 0 < b ? (d = Array.prototype.flat.call(d, b - 1), c.push.apply(c, d)) : c.push(d)
            });
            return c
        }
    });
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var Ha = this || self,
        Ia = function(a) {
            var b = typeof a;
            return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
        },
        Ja = function(a) {
            var b = Ia(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        Ka = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        La = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.ii = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.Wi = function(d, e, f) {
                for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
                return b.prototype[e].apply(d,
                    g)
            }
        },
        Ma = function(a) {
            return a
        };
    var Oa = function() {
        this.Yf = 0
    };
    Oa.prototype.Na = function(a, b) {
        var c = this;
        return function() {
            var d = w.apply(0, arguments);
            c.Yf = a;
            return b.apply(null, u(d))
        }
    };
    var Pa = function() {
            var a = {};
            this.za = (a[3] = [], a[2] = [], a[1] = [], a);
            this.ee = !1
        },
        Ra = function(a, b, c) {
            var d = Qa(a, c);
            a.za[c].push(b);
            d && 1 === a.za[c].length && a.flush()
        },
        Qa = function(a, b) {
            return Object.keys(a.za).map(function(c) {
                return Number(c)
            }).filter(function(c) {
                return !isNaN(c) && c > b
            }).every(function(c) {
                return 0 === a.za[c].length
            })
        };
    Pa.prototype.flush = function() {
        if (!this.ee) {
            this.ee = !0;
            try {
                for (; Object.values(this.za).some(function(a) {
                        return 0 < a.length
                    });) Sa(this, 3), Sa(this, 2), Sa(this, 1)
            } catch (a) {
                throw Object.values(this.za).forEach(function(b) {
                    return void b.splice(0, b.length)
                }), a;
            } finally {
                this.ee = !1
            }
        }
    };
    var Sa = function(a, b) {
        for (; Qa(a, b) && 0 < a.za[b].length;) a.za[b][0](), a.za[b].shift()
    };
    da.Object.defineProperties(Pa.prototype, {
        Pf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Object.values(this.za).some(function(a) {
                    return 0 < a.length
                })
            }
        }
    });

    function Ta(a, b) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, Ta);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a));
        void 0 !== b && (this.cause = b)
    }
    La(Ta, Error);
    Ta.prototype.name = "CustomError";
    var Ua;

    function Va(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        Ta.call(this, c + a[d])
    }
    La(Va, Ta);
    Va.prototype.name = "AssertionError";

    function Wa(a, b, c, d) {
        var e = "Assertion failed";
        if (c) {
            e += ": " + c;
            var f = d
        } else a && (e += ": " + a, f = b);
        throw new Va("" + e, f || []);
    }
    var y = function(a, b, c) {
            a || Wa("", null, b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Xa = function(a, b, c) {
            null == a && Wa("Expected to exist: %s.", [a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ya = function(a, b) {
            throw new Va("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Za = function(a, b, c) {
            "number" !== typeof a && Wa("Expected number but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        $a = function(a, b, c) {
            "string" !== typeof a && Wa("Expected string but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2))
        },
        ab = function(a, b, c) {
            "function" !== typeof a && Wa("Expected function but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        bb = function(a, b, c) {
            Ka(a) || Wa("Expected object but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        cb = function(a, b, c) {
            Array.isArray(a) || Wa("Expected array but got %s: %s.", [Ia(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        fb = function(a, b, c, d) {
            a instanceof b || Wa("Expected instanceof %s but got %s.", [db(b), db(a)], c, Array.prototype.slice.call(arguments, 3));
            return a
        };

    function db(a) {
        return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a
    };
    var gb = Array.prototype.forEach ? function(a, b) {
            y(null != a.length);
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        hb = Array.prototype.map ? function(a, b) {
            y(null != a.length);
            return Array.prototype.map.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
            return d
        },
        ib = Array.prototype.some ? function(a, b) {
            y(null !=
                a.length);
            return Array.prototype.some.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) return !0;
            return !1
        };

    function jb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function kb(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function lb(a, b, c) {
        if (!Ja(a) || !Ja(b) || a.length != b.length) return !1;
        var d = a.length;
        c = c || mb;
        for (var e = 0; e < d; e++)
            if (!c(a[e], b[e])) return !1;
        return !0
    }

    function mb(a, b) {
        return a === b
    }

    function pb(a, b) {
        return jb.apply([], hb(a, b))
    };
    var qb;
    var sb = function(a) {
        if (rb !== rb) throw Error("n");
        this.Nh = a
    };
    sb.prototype.toString = function() {
        return this.Nh + ""
    };
    var rb = {},
        tb = function(a) {
            if (void 0 === qb) {
                var b = null;
                var c = Ha.trustedTypes;
                if (c && c.createPolicy) try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Ma,
                        createScript: Ma,
                        createScriptURL: Ma
                    })
                } catch (d) {
                    Ha.console && Ha.console.error(d.message)
                }
                qb = b
            }
            a = (b = qb) ? b.createScriptURL(a) : a;
            return new sb(a)
        };
    var ub = function(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    };
    var wb = function(a) {
        if (vb !== vb) throw Error("o");
        this.Mh = a
    };
    wb.prototype.toString = function() {
        return this.Mh.toString()
    };
    var vb = {};
    new wb("about:invalid#zClosurez");
    new wb("about:blank");
    var xb = {},
        yb = function() {
            if (xb !== xb) throw Error("p");
            this.Lh = ""
        };
    yb.prototype.toString = function() {
        return this.Lh.toString()
    };
    new yb;
    var zb = {},
        Ab = function() {
            if (zb !== zb) throw Error("q");
            this.Kh = ""
        };
    Ab.prototype.toString = function() {
        return this.Kh.toString()
    };
    new Ab;
    var Bb, Cb;
    a: {
        for (var Db = ["CLOSURE_FLAGS"], Eb = Ha, Fb = 0; Fb < Db.length; Fb++)
            if (Eb = Eb[Db[Fb]], null == Eb) {
                Cb = null;
                break a
            }
        Cb = Eb
    }
    var Gb = Cb && Cb[610401301];
    Bb = null != Gb ? Gb : !1;

    function Hb() {
        var a = Ha.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var Kb, Lb = Ha.navigator;
    Kb = Lb ? Lb.userAgentData || null : null;

    function Mb(a) {
        return Bb ? Kb ? Kb.brands.some(function(b) {
            return (b = b.brand) && -1 != b.indexOf(a)
        }) : !1 : !1
    }

    function E(a) {
        return -1 != Hb().indexOf(a)
    };

    function Nb() {
        return Bb ? !!Kb && 0 < Kb.brands.length : !1
    }

    function Ob() {
        return Nb() ? !1 : E("Opera")
    }

    function Pb() {
        return Nb() ? !1 : E("Trident") || E("MSIE")
    }

    function Qb() {
        return E("Safari") && !(Rb() || (Nb() ? 0 : E("Coast")) || Ob() || (Nb() ? 0 : E("Edge")) || (Nb() ? Mb("Microsoft Edge") : E("Edg/")) || (Nb() ? Mb("Opera") : E("OPR")) || E("Firefox") || E("FxiOS") || E("Silk") || E("Android"))
    }

    function Rb() {
        return Nb() ? Mb("Chromium") : (E("Chrome") || E("CriOS")) && !(Nb() ? 0 : E("Edge")) || E("Silk")
    }

    function Sb() {
        return E("Android") && !(Rb() || E("Firefox") || E("FxiOS") || Ob() || E("Silk"))
    }

    function Tb() {
        var a = Hb();
        if (Pb()) {
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
        } else a = "";
        return a
    }

    function Ub() {
        if (Nb()) {
            var a = Kb.brands.find(function(b) {
                return "Internet Explorer" === b.brand
            });
            if (!a || !a.version) return NaN;
            a = a.version.split(".")
        } else {
            a = Tb();
            if ("" === a) return NaN;
            a = a.split(".")
        }
        return 0 === a.length ? NaN : Number(a[0])
    };
    var Vb = {},
        Wb = function() {
            var a = Ha.trustedTypes && Ha.trustedTypes.emptyHTML || "";
            if (Vb !== Vb) throw Error("r");
            this.Jh = a
        };
    Wb.prototype.toString = function() {
        return this.Jh.toString()
    };
    new Wb;
    var Xb = function() {
        this.names = new Map
    };
    Xb.prototype.zb = function(a) {
        var b = this.names.get(a);
        if (b) return b;
        var c;
        b = null != (c = a.description) ? c : Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36);
        this.names.set(a, b);
        return b
    };
    /*


     Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

         http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.
    */
    var Yb = !1,
        Zb = {
            set va(a) {
                a ? console.warn("s`" + Error().stack) : Yb && console.log("t");
                Yb = a
            },
            get va() {
                return Yb
            }
        };
    var $b = "function" === typeof Symbol && Symbol.observable || "@@observable";

    function ac(a) {
        setTimeout(function() {
            throw a;
        }, 0)
    };
    var bc = {
        closed: !0,
        next: function() {},
        error: function(a) {
            if (Zb.va) throw a;
            ac(a)
        },
        complete: function() {}
    };
    var cc = function() {
        function a(b) {
            this.message = b ? b.length + " errors occurred during unsubscription:\n" + b.map(function(c, d) {
                return d + 1 + ") " + c.toString()
            }).join("\n  ") : "";
            this.name = "UnsubscriptionError";
            this.errors = b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var dc = Array.isArray || function(a) {
        return a && "number" === typeof a.length
    };

    function ec(a) {
        return "function" === typeof a
    };

    function fc(a) {
        return null !== a && "object" === typeof a
    };
    var H = function(a) {
        this.closed = !1;
        this.tb = this.Nb = null;
        a && (this.eg = !0, this.Ca = a)
    };
    H.prototype.unsubscribe = function() {
        if (!this.closed) {
            var a = this.Nb,
                b = this.eg,
                c = this.Ca,
                d = this.tb;
            this.closed = !0;
            this.tb = this.Nb = null;
            if (a instanceof H) a.remove(this);
            else if (null !== a)
                for (var e = 0; e < a.length; ++e) a[e].remove(this);
            if (ec(c)) {
                b && (this.Ca = void 0);
                try {
                    c.call(this)
                } catch (k) {
                    var f = k instanceof cc ? gc(k.errors) : [k]
                }
            }
            if (dc(d)) {
                e = -1;
                for (var g = d.length; ++e < g;) {
                    var h = d[e];
                    if (fc(h)) try {
                        h.unsubscribe()
                    } catch (k) {
                        f = f || [], k instanceof cc ? f = f.concat(gc(k.errors)) : f.push(k)
                    }
                }
            }
            if (f) throw new cc(f);
        }
    };
    H.prototype.add = function(a) {
        var b = a;
        if (!a) return H.EMPTY;
        switch (typeof a) {
            case "function":
                b = new H(a);
            case "object":
                if (b === this || b.closed || "function" !== typeof b.unsubscribe) return b;
                if (this.closed) return b.unsubscribe(), b;
                b instanceof H || (a = b, b = new H, b.tb = [a]);
                break;
            default:
                throw Error("u`" + a);
        }
        var c = b.Nb;
        if (null === c) b.Nb = this;
        else if (c instanceof H) {
            if (c === this) return b;
            b.Nb = [c, this]
        } else if (-1 === c.indexOf(this)) c.push(this);
        else return b;
        a = this.tb;
        null === a ? this.tb = [b] : a.push(b);
        return b
    };
    H.prototype.remove = function(a) {
        var b = this.tb;
        b && (a = b.indexOf(a), -1 !== a && b.splice(a, 1))
    };
    var hc = new H;
    hc.closed = !0;
    H.EMPTY = hc;

    function ic(a) {
        return a instanceof H || a && "closed" in a && "function" === typeof a.remove && "function" === typeof a.add && "function" === typeof a.unsubscribe
    }

    function gc(a) {
        return a.reduce(function(b, c) {
            return b.concat(c instanceof cc ? c.errors : c)
        }, [])
    };
    var I = function(a, b, c) {
        H.call(this);
        this.fd = null;
        this.D = this.ia = this.ed = !1;
        switch (arguments.length) {
            case 0:
                this.destination = bc;
                break;
            case 1:
                if (!a) {
                    this.destination = bc;
                    break
                }
                if ("object" === typeof a) {
                    a instanceof I ? (this.ia = a.ia, this.destination = a, a.add(this)) : (this.ia = !0, this.destination = new jc(this, a));
                    break
                }
            default:
                this.ia = !0, this.destination = new jc(this, a, b, c)
        }
    };
    v(I, H);
    I.EMPTY = H.EMPTY;
    I.create = function(a, b, c) {
        a = new I(a, b, c);
        a.ia = !1;
        return a
    };
    m = I.prototype;
    m.next = function(a) {
        this.D || this.o(a)
    };
    m.error = function(a) {
        this.D || (this.D = !0, this.X(a))
    };
    m.complete = function() {
        this.D || (this.D = !0, this.C())
    };
    m.unsubscribe = function() {
        this.closed || (this.D = !0, H.prototype.unsubscribe.call(this))
    };
    m.o = function(a) {
        this.destination.next(a)
    };
    m.X = function(a) {
        this.destination.error(a);
        this.unsubscribe()
    };
    m.C = function() {
        this.destination.complete();
        this.unsubscribe()
    };
    var jc = function(a, b, c, d) {
        I.call(this);
        this.Ob = a;
        var e = this;
        if (ec(b)) var f = b;
        else b && (f = b.next, c = b.error, d = b.complete, b !== bc && (e = Object.create(b), ic(b) && b.add(this.unsubscribe.bind(this)), e.unsubscribe = this.unsubscribe.bind(this)));
        this.Ba = e;
        this.o = f;
        this.X = c;
        this.C = d
    };
    v(jc, I);
    jc.EMPTY = I.EMPTY;
    jc.create = I.create;
    m = jc.prototype;
    m.next = function(a) {
        if (!this.D && this.o) {
            var b = this.Ob;
            Zb.va && b.ia ? this.pd(b, this.o, a) && this.unsubscribe() : this.qd(this.o, a)
        }
    };
    m.error = function(a) {
        if (!this.D) {
            var b = this.Ob,
                c = Zb.va;
            if (this.X) c && b.ia ? this.pd(b, this.X, a) : this.qd(this.X, a), this.unsubscribe();
            else if (b.ia) c ? (b.fd = a, b.ed = !0) : ac(a), this.unsubscribe();
            else {
                this.unsubscribe();
                if (c) throw a;
                ac(a)
            }
        }
    };
    m.complete = function() {
        var a = this;
        if (!this.D) {
            var b = this.Ob;
            if (this.C) {
                var c = function() {
                    return a.C.call(a.Ba)
                };
                Zb.va && b.ia ? this.pd(b, c) : this.qd(c)
            }
            this.unsubscribe()
        }
    };
    m.qd = function(a, b) {
        try {
            a.call(this.Ba, b)
        } catch (c) {
            this.unsubscribe();
            if (Zb.va) throw c;
            ac(c)
        }
    };
    m.pd = function(a, b, c) {
        if (!Zb.va) throw Error("v");
        try {
            b.call(this.Ba, c)
        } catch (d) {
            return Zb.va ? (a.fd = d, a.ed = !0) : ac(d), !0
        }
        return !1
    };
    m.Ca = function() {
        var a = this.Ob;
        this.Ob = this.Ba = null;
        a.unsubscribe()
    };

    function kc(a) {
        return a
    };

    function J() {
        return lc(w.apply(0, arguments))
    }

    function lc(a) {
        return 0 === a.length ? kc : 1 === a.length ? a[0] : function(b) {
            return a.reduce(function(c, d) {
                return d(c)
            }, b)
        }
    };

    function mc(a) {
        return a && "function" === typeof a.next && "function" === typeof a.error && "function" === typeof a.complete
    }
    var nc = function(a) {
        I.call(this);
        this.destination = a
    };
    v(nc, I);
    nc.EMPTY = I.EMPTY;
    nc.create = I.create;
    var K = function(a) {
        a && (this.ca = a)
    };
    m = K.prototype;
    m.Cb = function(a) {
        var b = new K;
        b.source = this;
        b.operator = a;
        return b
    };
    m.subscribe = function(a, b, c) {
        var d = this.operator;
        a: {
            if (a) {
                if (a instanceof I || mc(a) && ic(a)) break a;
                if (mc(a)) {
                    a = new nc(a);
                    break a
                }
            }
            a = a || b || c ? new I(a, b, c) : new I(bc)
        }
        d ? a.add(d.call(a, this.source)) : a.add(this.source || Zb.va && !a.ia ? this.ca(a) : this.vd(a));
        if (Zb.va && a.ia && (a.ia = !1, a.ed)) throw a.fd;
        return a
    };
    m.vd = function(a) {
        try {
            return this.ca(a)
        } catch (e) {
            Zb.va && (a.ed = !0, a.fd = e);
            var b;
            a: {
                for (b = a; b;) {
                    var c = b.destination,
                        d = b.D;
                    if (b.closed || d) {
                        b = !1;
                        break a
                    }
                    b = c && c instanceof I ? c : null
                }
                b = !0
            }
            b ? a.error(e) : console.warn(e)
        }
    };
    m.forEach = function(a, b) {
        var c = this;
        b = oc(b);
        return new b(function(d, e) {
            var f = c.subscribe(function(g) {
                try {
                    a(g)
                } catch (h) {
                    e(h), f && f.unsubscribe()
                }
            }, e, d)
        })
    };
    m.ca = function(a) {
        var b = this.source;
        return b && b.subscribe(a)
    };
    K.prototype[$b] = function() {
        return this
    };
    K.prototype.g = function() {
        var a = w.apply(0, arguments);
        return 0 === a.length ? this : lc(a)(this)
    };
    K.create = function(a) {
        return new K(a)
    };

    function oc(a) {
        a || (a = Promise);
        if (!a) throw Error("w");
        return a
    };
    var pc = function(a, b) {
        H.call(this);
        this.Uf = a;
        this.Ae = b;
        this.closed = !1
    };
    v(pc, H);
    pc.EMPTY = H.EMPTY;
    pc.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.closed = !0;
            var a = this.Uf,
                b = a.Ha;
            this.Uf = null;
            !b || 0 === b.length || a.D || a.closed || (a = b.indexOf(this.Ae), -1 !== a && b.splice(a, 1))
        }
    };
    var qc = function() {
        function a() {
            this.message = "object unsubscribed";
            this.name = "ObjectUnsubscribedError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    var L = function() {
        this.Ha = [];
        this.Vb = this.D = this.closed = !1;
        this.gd = null
    };
    v(L, K);
    m = L.prototype;
    m.Cb = function(a) {
        var b = new rc(this, this);
        b.operator = a;
        return b
    };
    m.next = function(a) {
        if (this.closed) throw new qc;
        if (!this.D) {
            var b = this.Ha,
                c = b.length;
            b = b.slice();
            for (var d = 0; d < c; d++) b[d].next(a)
        }
    };
    m.error = function(a) {
        if (this.closed) throw new qc;
        this.Vb = !0;
        this.gd = a;
        this.D = !0;
        var b = this.Ha,
            c = b.length;
        b = b.slice();
        for (var d = 0; d < c; d++) b[d].error(a);
        this.Ha.length = 0
    };
    m.complete = function() {
        if (this.closed) throw new qc;
        this.D = !0;
        var a = this.Ha,
            b = a.length;
        a = a.slice();
        for (var c = 0; c < b; c++) a[c].complete();
        this.Ha.length = 0
    };
    m.unsubscribe = function() {
        this.closed = this.D = !0;
        this.Ha = null
    };
    m.vd = function(a) {
        if (this.closed) throw new qc;
        return K.prototype.vd.call(this, a)
    };
    m.ca = function(a) {
        if (this.closed) throw new qc;
        if (this.Vb) return a.error(this.gd), H.EMPTY;
        if (this.D) return a.complete(), H.EMPTY;
        this.Ha.push(a);
        return new pc(this, a)
    };
    m.Y = function() {
        var a = new K;
        a.source = this;
        return a
    };
    L.create = function(a, b) {
        return new rc(a, b)
    };
    var rc = function(a, b) {
        L.call(this);
        this.destination = a;
        this.source = b
    };
    v(rc, L);
    rc.create = L.create;
    rc.prototype.next = function(a) {
        var b = this.destination;
        b && b.next && b.next(a)
    };
    rc.prototype.error = function(a) {
        var b = this.destination;
        b && b.error && this.destination.error(a)
    };
    rc.prototype.complete = function() {
        var a = this.destination;
        a && a.complete && this.destination.complete()
    };
    rc.prototype.ca = function(a) {
        return this.source ? this.source.subscribe(a) : H.EMPTY
    };
    var sc = function(a) {
        L.call(this);
        this.wd = a
    };
    v(sc, L);
    sc.create = L.create;
    sc.prototype.ca = function(a) {
        var b = L.prototype.ca.call(this, a);
        b && !b.closed && a.next(this.wd);
        return b
    };
    sc.prototype.next = function(a) {
        L.prototype.next.call(this, this.wd = a)
    };
    da.Object.defineProperties(sc.prototype, {
        value: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.Vb) throw this.gd;
                if (this.closed) throw new qc;
                return this.wd
            }
        }
    });
    var tc = new K(function(a) {
        return a.complete()
    });

    function uc(a, b) {
        return new K(function(c) {
            var d = new H,
                e = 0;
            d.add(b.B(function() {
                e === a.length ? c.complete() : (c.next(a[e++]), c.closed || d.add(this.B()))
            }));
            return d
        })
    };
    var vc = function(a) {
        return function(b) {
            for (var c = 0, d = a.length; c < d && !b.closed; c++) b.next(a[c]);
            b.complete()
        }
    };

    function wc(a, b) {
        return b ? uc(a, b) : new K(vc(a))
    };

    function xc(a) {
        return a && "function" === typeof a.B
    };

    function M() {
        var a = w.apply(0, arguments),
            b = a[a.length - 1];
        return xc(b) ? (a.pop(), uc(a, b)) : wc(a)
    };

    function yc(a) {
        return new K(function(b) {
            return b.error(a)
        })
    };
    var zc = {
        now: function() {
            return (zc.Dg || Date).now()
        },
        Dg: void 0
    };
    var Ac = function(a, b, c) {
        a = void 0 === a ? Infinity : a;
        b = void 0 === b ? Infinity : b;
        c = void 0 === c ? zc : c;
        L.call(this);
        this.li = c;
        this.uc = [];
        this.Oe = !1;
        this.Je = 1 > a ? 1 : a;
        this.kg = 1 > b ? 1 : b;
        Infinity === b ? (this.Oe = !0, this.next = this.xh) : this.next = this.zh
    };
    v(Ac, L);
    Ac.create = L.create;
    m = Ac.prototype;
    m.xh = function(a) {
        var b = this.uc;
        b.push(a);
        b.length > this.Je && b.shift();
        L.prototype.next.call(this, a)
    };
    m.zh = function(a) {
        this.uc.push({
            time: this.Me(),
            value: a
        });
        this.Pe();
        L.prototype.next.call(this, a)
    };
    m.ca = function(a) {
        var b = this.Oe,
            c = b ? this.uc : this.Pe(),
            d = c.length;
        if (this.closed) throw new qc;
        if (this.D || this.Vb) var e = H.EMPTY;
        else this.Ha.push(a), e = new pc(this, a);
        if (b)
            for (var f = 0; f < d && !a.closed; f++) a.next(c[f]);
        else
            for (f = 0; f < d && !a.closed; f++) a.next(c[f].value);
        this.Vb ? a.error(this.gd) : this.D && a.complete();
        return e
    };
    m.Me = function() {
        var a = this.li;
        return a ? a.now() : zc.now()
    };
    m.Pe = function() {
        for (var a = this.Me(), b = this.Je, c = this.kg, d = this.uc, e = d.length, f = 0; f < e && !(a - d[f].time < c);) f++;
        e > b && (f = Math.max(f, e - b));
        0 < f && d.splice(0, f);
        return d
    };
    var Cc = function(a, b) {
        b = void 0 === b ? Bc : b;
        this.dg = a;
        this.now = b
    };
    Cc.prototype.B = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        return (new this.dg(this, a)).B(c, b)
    };
    var Bc = zc.now;
    var Dc = function() {
        function a() {
            this.message = "no elements in sequence";
            this.name = "EmptyError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();

    function N(a, b) {
        if (a && "function" === typeof a.Cb) return a.Cb(b);
        throw new TypeError("x");
    };

    function Ec() {
        return function(a) {
            return N(a, new Gc)
        }
    }
    var Gc = function() {};
    Gc.prototype.call = function(a, b) {
        b.Pb++;
        a = new Hc(a, b);
        var c = b.subscribe(a);
        a.closed || (a.connection = b.connect());
        return c
    };
    var Hc = function(a, b) {
        I.call(this, a);
        this.vb = b;
        this.connection = null
    };
    v(Hc, I);
    Hc.EMPTY = I.EMPTY;
    Hc.create = I.create;
    Hc.prototype.Ca = function() {
        var a = this.vb;
        if (a) {
            this.vb = null;
            var b = a.Pb;
            0 >= b ? this.connection = null : (a.Pb = b - 1, 1 < b ? this.connection = null : (b = this.connection, a = a.sb, this.connection = null, !a || b && a !== b || a.unsubscribe()))
        } else this.connection = null
    };
    var Ic = function(a, b) {
        this.source = a;
        this.Vf = b;
        this.Pb = 0;
        this.vc = !1
    };
    v(Ic, K);
    Ic.create = K.create;
    Ic.prototype.ca = function(a) {
        return this.Nc().subscribe(a)
    };
    Ic.prototype.Nc = function() {
        var a = this.wc;
        if (!a || a.D) this.wc = this.Vf();
        return this.wc
    };
    Ic.prototype.connect = function() {
        var a = this.sb;
        a || (this.vc = !1, a = this.sb = new H, a.add(this.source.subscribe(new Jc(this.Nc(), this))), a.closed && (this.sb = null, a = H.EMPTY));
        return a
    };
    Ic.prototype.Nf = function() {
        return Ec()(this)
    };
    var Kc, Lc = Ic.prototype;
    Kc = {
        operator: {
            value: null
        },
        Pb: {
            value: 0,
            writable: !0
        },
        wc: {
            value: null,
            writable: !0
        },
        sb: {
            value: null,
            writable: !0
        },
        ca: {
            value: Lc.ca
        },
        vc: {
            value: Lc.vc,
            writable: !0
        },
        Nc: {
            value: Lc.Nc
        },
        connect: {
            value: Lc.connect
        },
        Nf: {
            value: Lc.Nf
        }
    };
    var Jc = function(a, b) {
        I.call(this);
        this.destination = a;
        this.vb = b
    };
    v(Jc, I);
    Jc.EMPTY = I.EMPTY;
    Jc.create = I.create;
    Jc.prototype.X = function(a) {
        this.Ca();
        I.prototype.X.call(this, a)
    };
    Jc.prototype.C = function() {
        this.vb.vc = !0;
        this.Ca();
        I.prototype.C.call(this)
    };
    Jc.prototype.Ca = function() {
        var a = this.vb;
        if (a) {
            this.vb = null;
            var b = a.sb;
            a.Pb = 0;
            a.wc = null;
            a.sb = null;
            b && b.unsubscribe()
        }
    };

    function O(a) {
        return function(b) {
            if ("function" !== typeof a) throw new TypeError("y");
            return N(b, new Mc(a))
        }
    }
    var Mc = function(a) {
        this.M = a;
        this.ja = void 0
    };
    Mc.prototype.call = function(a, b) {
        return b.subscribe(new Nc(a, this.M, this.ja))
    };
    var Nc = function(a, b, c) {
        I.call(this, a);
        this.M = b;
        this.count = 0;
        this.ja = c || this
    };
    v(Nc, I);
    Nc.EMPTY = I.EMPTY;
    Nc.create = I.create;
    Nc.prototype.o = function(a) {
        try {
            var b = this.M.call(this.ja, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var Oc = "function" === typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";
    var Pc = function(a) {
        return a && "number" === typeof a.length && "function" !== typeof a
    };

    function Qc(a) {
        return !!a && "function" !== typeof a.subscribe && "function" === typeof a.then
    };

    function Rc(a) {
        return function(b) {
            Sc(a, b).catch(function(c) {
                return b.error(c)
            })
        }
    }

    function Sc(a, b) {
        var c, d, e, f, g, h;
        return Aa(new ya(new ua(function(k) {
            switch (k.ha) {
                case 1:
                    k.bb = 2;
                    k.Fa = 3;
                    var l = a[Symbol.asyncIterator];
                    f = void 0 !== l ? l.call(a) : new Ba(t(a));
                case 5:
                    return l = f.next(), k.ha = 8, {
                        value: l
                    };
                case 8:
                    d = k.Ie;
                    if (d.done) {
                        k.kb(3);
                        break
                    }
                    g = d.value;
                    b.next(g);
                    k.kb(5);
                    break;
                case 3:
                    k.Qd = [k.da];
                    k.bb = 0;
                    k.Fa = 0;
                    k.bb = 0;
                    k.Fa = 9;
                    if (!d || d.done || !(e = f.return)) {
                        k.kb(9);
                        break
                    }
                    l = e.call(f);
                    k.ha = 9;
                    return {
                        value: l
                    };
                case 9:
                    k.Qd[1] = k.da;
                    k.bb = 0;
                    k.Fa = 0;
                    if (c) throw c.error;
                    ta(k, 10, 1);
                    break;
                case 10:
                    ta(k, 4);
                    break;
                case 2:
                    k.bb = 0;
                    l = k.da.df;
                    k.da = null;
                    h = l;
                    c = {
                        error: h
                    };
                    k.kb(3);
                    break;
                case 4:
                    b.complete(), k.ha = 0
            }
        })))
    };
    var Tc = function(a) {
        return function(b) {
            var c = a[Oc]();
            do {
                var d = void 0;
                try {
                    d = c.next()
                } catch (e) {
                    b.error(e);
                    return
                }
                if (d.done) {
                    b.complete();
                    break
                }
                b.next(d.value);
                if (b.closed) break
            } while (1);
            "function" === typeof c.return && b.add(function() {
                c.return && c.return()
            });
            return b
        }
    };
    var Uc = function(a) {
        return function(b) {
            var c = a[$b]();
            if ("function" !== typeof c.subscribe) throw new TypeError("z");
            return c.subscribe(b)
        }
    };
    var Vc = function(a) {
        return function(b) {
            a.then(function(c) {
                b.closed || (b.next(c), b.complete())
            }, function(c) {
                return b.error(c)
            }).then(null, ac);
            return b
        }
    };
    var Wc = function(a) {
        if (a && "function" === typeof a[$b]) return Uc(a);
        if (Pc(a)) return vc(a);
        if (Qc(a)) return Vc(a);
        if (a && "function" === typeof a[Oc]) return Tc(a);
        if (Symbol && Symbol.asyncIterator && a && "function" === typeof a[Symbol.asyncIterator]) return Rc(a);
        throw new TypeError("A`" + (fc(a) ? "an invalid object" : "'" + a + "'"));
    };
    var Xc = function(a) {
        I.call(this);
        this.parent = a
    };
    v(Xc, I);
    Xc.EMPTY = I.EMPTY;
    Xc.create = I.create;
    Xc.prototype.o = function(a) {
        this.parent.qa(a)
    };
    Xc.prototype.X = function(a) {
        this.parent.Xa(a);
        this.unsubscribe()
    };
    Xc.prototype.C = function() {
        this.parent.T();
        this.unsubscribe()
    };
    var Yc = function(a, b, c) {
        I.call(this);
        this.parent = a;
        this.If = b;
        this.Ih = c
    };
    v(Yc, I);
    Yc.EMPTY = I.EMPTY;
    Yc.create = I.create;
    Yc.prototype.o = function(a) {
        this.parent.qa(this.If, a, this.Ih, this)
    };
    Yc.prototype.X = function(a) {
        this.parent.Xa(a);
        this.unsubscribe()
    };
    Yc.prototype.C = function() {
        this.parent.T(this);
        this.unsubscribe()
    };
    var P = function() {
        I.apply(this, arguments)
    };
    v(P, I);
    P.EMPTY = I.EMPTY;
    P.create = I.create;
    P.prototype.qa = function(a) {
        this.destination.next(a)
    };
    P.prototype.Xa = function(a) {
        this.destination.error(a)
    };
    P.prototype.T = function() {
        this.destination.complete()
    };
    var Q = function() {
        I.apply(this, arguments)
    };
    v(Q, I);
    Q.EMPTY = I.EMPTY;
    Q.create = I.create;
    Q.prototype.qa = function(a, b) {
        this.destination.next(b)
    };
    Q.prototype.Xa = function(a) {
        this.destination.error(a)
    };
    Q.prototype.T = function() {
        this.destination.complete()
    };

    function Zc(a, b) {
        if (!b.closed) return a instanceof K ? a.subscribe(b) : Wc(a)(b)
    };
    var $c = {};

    function R() {
        var a = w.apply(0, arguments),
            b = void 0,
            c = void 0,
            d = void 0;
        xc(a[a.length - 1]) && (c = a.pop());
        "function" === typeof a[a.length - 1] && (b = a.pop());
        if (1 === a.length) {
            var e = a[0];
            dc(e) && (a = e);
            fc(e) && Object.getPrototypeOf(e) === Object.prototype && (d = Object.keys(e), a = d.map(function(f) {
                return e[f]
            }))
        }
        return N(wc(a, c), new ad(b, d))
    }
    var ad = function(a, b) {
        this.Ma = a;
        this.keys = b
    };
    ad.prototype.call = function(a, b) {
        return b.subscribe(new bd(a, this.Ma, this.keys))
    };
    var bd = function(a, b, c) {
        Q.call(this, a);
        this.Ma = b;
        this.keys = c;
        this.active = 0;
        this.values = [];
        this.Ya = []
    };
    v(bd, Q);
    bd.EMPTY = Q.EMPTY;
    bd.create = Q.create;
    m = bd.prototype;
    m.o = function(a) {
        this.values.push($c);
        this.Ya.push(a)
    };
    m.C = function() {
        var a = this.Ya,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            this.rb = this.active = b;
            for (var c = 0; c < b; c++) this.add(Zc(a[c], new Yc(this, null, c)))
        }
    };
    m.T = function() {
        0 === --this.active && this.destination.complete()
    };
    m.qa = function(a, b, c) {
        var d = this.values,
            e = d[c];
        e = this.rb ? e === $c ? --this.rb : this.rb : 0;
        d[c] = b;
        0 === e && (this.Ma ? this.gg(d) : this.destination.next(this.keys ? this.keys.reduce(function(f, g, h) {
            return f[g] = d[h], f
        }, {}) : d.slice()))
    };
    m.gg = function(a) {
        try {
            var b = this.Ma.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };

    function cd(a, b) {
        if (!a) throw Error("B");
        return new K(function(c) {
            var d = new H;
            d.add(b.B(function() {
                var e = a[Symbol.asyncIterator]();
                d.add(b.B(function() {
                    var f = this;
                    e.next().then(function(g) {
                        g.done ? c.complete() : (c.next(g.value), f.B())
                    })
                }))
            }));
            return d
        })
    };

    function dd(a, b) {
        if (!a) throw Error("B");
        return new K(function(c) {
            var d = new H,
                e;
            d.add(function() {
                e && "function" === typeof e.return && e.return()
            });
            d.add(b.B(function() {
                e = a[Oc]();
                d.add(b.B(function() {
                    if (!c.closed) {
                        try {
                            var f = e.next();
                            var g = f.value;
                            var h = f.done
                        } catch (k) {
                            c.error(k);
                            return
                        }
                        h ? c.complete() : (c.next(g), this.B())
                    }
                }))
            }));
            return d
        })
    };

    function ed(a, b) {
        return new K(function(c) {
            var d = new H;
            d.add(b.B(function() {
                var e = a[$b]();
                d.add(e.subscribe({
                    next: function(f) {
                        d.add(b.B(function() {
                            return c.next(f)
                        }))
                    },
                    error: function(f) {
                        d.add(b.B(function() {
                            return c.error(f)
                        }))
                    },
                    complete: function() {
                        d.add(b.B(function() {
                            return c.complete()
                        }))
                    }
                }))
            }));
            return d
        })
    };

    function fd(a, b) {
        return new K(function(c) {
            var d = new H;
            d.add(b.B(function() {
                return a.then(function(e) {
                    d.add(b.B(function() {
                        c.next(e);
                        d.add(b.B(function() {
                            return c.complete()
                        }))
                    }))
                }, function(e) {
                    d.add(b.B(function() {
                        return c.error(e)
                    }))
                })
            }));
            return d
        })
    };

    function gd(a) {
        var b = hd;
        if (null != a) {
            if (a && "function" === typeof a[$b]) return ed(a, b);
            if (Qc(a)) return fd(a, b);
            if (Pc(a)) return uc(a, b);
            if (a && "function" === typeof a[Oc] || "string" === typeof a) return dd(a, b);
            if (Symbol && Symbol.asyncIterator && "function" === typeof a[Symbol.asyncIterator]) return cd(a, b)
        }
        throw new TypeError("C`" + (null !== a && typeof a || a));
    };

    function id(a) {
        return a instanceof K ? a : new K(Wc(a))
    };

    function jd(a, b) {
        var c = void 0 === c ? Infinity : c;
        if ("function" === typeof b) return function(d) {
            return d.g(jd(function(e, f) {
                return id(a(e, f)).g(O(function(g, h) {
                    return b(e, g, f, h)
                }))
            }, c))
        };
        "number" === typeof b && (c = b);
        return function(d) {
            return N(d, new kd(a, c))
        }
    }
    var kd = function(a, b) {
        b = void 0 === b ? Infinity : b;
        this.M = a;
        this.Ed = b
    };
    kd.prototype.call = function(a, b) {
        return b.subscribe(new ld(a, this.M, this.Ed))
    };
    var ld = function(a, b, c) {
        c = void 0 === c ? Infinity : c;
        P.call(this, a);
        this.destination = a;
        this.M = b;
        this.Ed = c;
        this.Ab = !1;
        this.buffer = [];
        this.index = this.active = 0
    };
    v(ld, P);
    ld.EMPTY = P.EMPTY;
    ld.create = P.create;
    ld.prototype.o = function(a) {
        if (this.active < this.Ed) {
            var b = this.index++;
            try {
                var c = this.M(a, b)
            } catch (d) {
                this.destination.error(d);
                return
            }
            this.active++;
            a = new Xc(this);
            this.destination.add(a);
            Zc(c, a)
        } else this.buffer.push(a)
    };
    ld.prototype.C = function() {
        this.Ab = !0;
        0 === this.active && 0 === this.buffer.length && this.destination.complete();
        this.unsubscribe()
    };
    ld.prototype.qa = function(a) {
        this.destination.next(a)
    };
    ld.prototype.T = function() {
        var a = this.buffer;
        this.active--;
        0 < a.length ? this.o(a.shift()) : 0 === this.active && this.Ab && this.destination.complete()
    };

    function md(a) {
        a = void 0 === a ? Infinity : a;
        return jd(kc, a)
    };

    function nd() {
        return md(1)(M.apply(null, u(w.apply(0, arguments))))
    };

    function od(a, b, c) {
        if (ec(c)) {
            var d = c;
            c = void 0
        }
        return d ? od(a, b, c).g(O(function(e) {
            return dc(e) ? d.apply(null, u(e)) : d(e)
        })) : new K(function(e) {
            pd(a, b, function(f) {
                1 < arguments.length ? e.next(Array.prototype.slice.call(arguments)) : e.next(f)
            }, e, c)
        })
    }

    function pd(a, b, c, d, e) {
        if (a && "function" === typeof a.addEventListener && "function" === typeof a.removeEventListener) {
            a.addEventListener(b, c, e);
            var f = function() {
                return a.removeEventListener(b, c, e)
            }
        } else if (a && "function" === typeof a.Dh && "function" === typeof a.Ch) a.Dh(b, c), f = function() {
            return a.Ch(b, c)
        };
        else if (a && "function" === typeof a.addListener && "function" === typeof a.removeListener) a.addListener(b, c), f = function() {
            return a.removeListener(b, c)
        };
        else if (a && a.length)
            for (var g = 0, h = a.length; g < h; g++) pd(a[g], b,
                c, d, e);
        else throw new TypeError("D");
        d.add(f)
    };
    var qd = function() {
        H.call(this)
    };
    v(qd, H);
    qd.EMPTY = H.EMPTY;
    qd.prototype.B = function() {
        return this
    };
    var rd = function(a, b) {
        return setInterval.apply(null, [a, b].concat(u(w.apply(2, arguments))))
    };
    var sd = function(a, b) {
        H.call(this);
        this.scheduler = a;
        this.nd = b;
        this.pending = !1
    };
    v(sd, qd);
    sd.EMPTY = qd.EMPTY;
    m = sd.prototype;
    m.B = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (this.closed) return this;
        this.state = a;
        a = this.id;
        var c = this.scheduler;
        null != a && (this.id = this.ic(c, a, b));
        this.pending = !0;
        this.delay = b;
        this.id = this.id || this.jc(c, this.id, b);
        return this
    };
    m.jc = function(a, b, c) {
        return rd(a.flush.bind(a, this), void 0 === c ? 0 : c)
    };
    m.ic = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && this.delay === c && !1 === this.pending) return b;
        clearInterval(b)
    };
    m.execute = function(a, b) {
        if (this.closed) return Error("E");
        this.pending = !1;
        if (a = this.Ke(a, b)) return a;
        !1 === this.pending && null != this.id && (this.id = this.ic(this.scheduler, this.id, null))
    };
    m.Ke = function(a) {
        var b = !1,
            c = void 0;
        try {
            this.nd(a)
        } catch (d) {
            b = !0, c = !!d && d || Error(d)
        }
        if (b) return this.unsubscribe(), c
    };
    m.Ca = function() {
        var a = this.id,
            b = this.scheduler,
            c = b.actions,
            d = c.indexOf(this);
        this.state = this.nd = null;
        this.pending = !1;
        this.scheduler = null; - 1 !== d && c.splice(d, 1);
        null != a && (this.id = this.ic(b, a, null));
        this.delay = null
    };
    var td = function(a, b) {
        b = void 0 === b ? Bc : b;
        Cc.call(this, a, b);
        this.actions = [];
        this.active = !1;
        this.dd = void 0
    };
    v(td, Cc);
    td.prototype.flush = function(a) {
        var b = this.actions;
        if (this.active) b.push(a);
        else {
            var c;
            this.active = !0;
            do
                if (c = a.execute(a.state, a.delay)) break; while (a = b.shift());
            this.active = !1;
            if (c) {
                for (; a = b.shift();) a.unsubscribe();
                throw c;
            }
        }
    };

    function ud() {
        var a = w.apply(0, arguments),
            b = Infinity,
            c = void 0,
            d = a[a.length - 1];
        xc(d) ? (c = a.pop(), 1 < a.length && "number" === typeof a[a.length - 1] && (b = a.pop())) : "number" === typeof d && (b = a.pop());
        return !c && 1 === a.length && a[0] instanceof K ? a[0] : md(b)(wc(a, c))
    };

    function vd() {};
    var wd = new K(vd);

    function T(a) {
        return function(b) {
            return N(b, new xd(a))
        }
    }
    var xd = function(a) {
        this.ta = a;
        this.ja = void 0
    };
    xd.prototype.call = function(a, b) {
        return b.subscribe(new yd(a, this.ta, this.ja))
    };
    var yd = function(a, b, c) {
        I.call(this, a);
        this.ta = b;
        this.ja = c;
        this.count = 0
    };
    v(yd, I);
    yd.EMPTY = I.EMPTY;
    yd.create = I.create;
    yd.prototype.o = function(a) {
        try {
            var b = this.ta.call(this.ja, a, this.count++)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b && this.destination.next(a)
    };

    function zd() {
        var a = w.apply(0, arguments);
        if (1 === a.length)
            if (dc(a[0])) a = a[0];
            else return id(a[0]);
        return N(wc(a), new Ad)
    }
    var Ad = function() {};
    Ad.prototype.call = function(a, b) {
        return b.subscribe(new Bd(a))
    };
    var Bd = function(a) {
        Q.call(this, a);
        this.Wb = !1;
        this.Ya = [];
        this.nc = []
    };
    v(Bd, Q);
    Bd.EMPTY = Q.EMPTY;
    Bd.create = Q.create;
    m = Bd.prototype;
    m.o = function(a) {
        this.Ya.push(a)
    };
    m.C = function() {
        var a = this.Ya,
            b = a.length;
        if (0 === b) this.destination.complete();
        else {
            for (var c = 0; c < b && !this.Wb; c++) {
                var d = Zc(a[c], new Yc(this, null, c));
                this.nc && this.nc.push(d);
                this.add(d)
            }
            this.Ya = null
        }
    };
    m.qa = function(a, b, c) {
        if (!this.Wb) {
            this.Wb = !0;
            for (var d = 0; d < this.nc.length; d++)
                if (d !== c) {
                    var e = this.nc[d];
                    e.unsubscribe();
                    this.remove(e)
                }
            this.nc = null
        }
        this.destination.next(b)
    };
    m.T = function(a) {
        this.Wb = !0;
        Q.prototype.T.call(this, a)
    };
    m.Xa = function(a) {
        this.Wb = !0;
        Q.prototype.Xa.call(this, a)
    };

    function Cd() {
        var a = w.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        return N(wc(a), new Dd(b))
    }
    var Dd = function(a) {
        this.Ma = a
    };
    Dd.prototype.call = function(a, b) {
        return b.subscribe(new Ed(a, this.Ma))
    };
    var Ed = function(a, b, c) {
        void 0 === c && Object.create(null);
        I.call(this, a);
        this.ge = [];
        this.active = 0;
        this.Ma = b
    };
    v(Ed, I);
    Ed.EMPTY = I.EMPTY;
    Ed.create = I.create;
    Ed.prototype.o = function(a) {
        var b = this.ge;
        dc(a) ? b.push(new Fd(a)) : "function" === typeof a[Oc] ? b.push(new Gd(a[Oc]())) : b.push(new Id(this.destination, this, a))
    };
    Ed.prototype.C = function() {
        var a = this.ge,
            b = a.length;
        this.unsubscribe();
        if (0 === b) this.destination.complete();
        else {
            this.active = b;
            for (var c = 0; c < b; c++) {
                var d = a[c];
                d.gi ? this.destination.add(d.subscribe()) : this.active--
            }
        }
    };
    Ed.prototype.hg = function(a) {
        try {
            var b = this.Ma.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var Gd = function(a) {
        this.iterator = a;
        this.me = a.next()
    };
    Gd.prototype.hb = function() {
        return !0
    };
    Gd.prototype.next = function() {
        var a = this.me;
        this.me = this.iterator.next();
        return a
    };
    Gd.prototype.Ab = function() {
        var a = this.me;
        return a && !!a.done
    };
    var Fd = function(a) {
        this.zd = a;
        this.length = this.index = 0;
        this.length = a.length
    };
    Fd.prototype[Oc] = function() {
        return this
    };
    Fd.prototype.next = function() {
        var a = this.index++,
            b = this.zd;
        return a < this.length ? {
            value: b[a],
            done: !1
        } : {
            value: null,
            done: !0
        }
    };
    Fd.prototype.hb = function() {
        return this.zd.length > this.index
    };
    Fd.prototype.Ab = function() {
        return this.zd.length === this.index
    };
    var Id = function(a, b, c) {
        P.call(this, a);
        this.parent = b;
        this.observable = c;
        this.gi = !0;
        this.buffer = [];
        this.ce = !1
    };
    v(Id, P);
    Id.EMPTY = P.EMPTY;
    Id.create = P.create;
    Id.prototype[Oc] = function() {
        return this
    };
    m = Id.prototype;
    m.next = function() {
        var a = this.buffer;
        return 0 === a.length && this.ce ? {
            value: null,
            done: !0
        } : {
            value: a.shift(),
            done: !1
        }
    };
    m.hb = function() {
        return 0 < this.buffer.length
    };
    m.Ab = function() {
        return 0 === this.buffer.length && this.ce
    };
    m.T = function() {
        if (0 < this.buffer.length) {
            this.ce = !0;
            var a = this.parent;
            a.active--;
            0 === a.active && a.destination.complete()
        } else this.destination.complete()
    };
    m.qa = function(a) {
        this.buffer.push(a);
        a: {
            a = this.parent;
            for (var b = a.ge, c = b.length, d = a.destination, e = 0; e < c; e++) {
                var f = b[e];
                if ("function" === typeof f.hb && !f.hb()) break a
            }
            e = !1;f = [];
            for (var g = 0; g < c; g++) {
                var h = b[g],
                    k = h.next();
                h.Ab() && (e = !0);
                if (k.done) {
                    d.complete();
                    break a
                }
                f.push(k.value)
            }
            a.Ma ? a.hg(f) : d.next(f);e && d.complete()
        }
    };
    m.subscribe = function() {
        return Zc(this.observable, new Xc(this))
    };
    (function() {
        function a(b) {
            this.message = "Timeout has occurred";
            this.name = "TimeoutError";
            this.info = void 0 === b ? null : b;
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var Jd = 1,
        Kd, Ld = {};

    function Md(a) {
        return a in Ld ? (delete Ld[a], !0) : !1
    }
    var Nd = function(a) {
        var b = Jd++;
        Ld[b] = !0;
        Kd || (Kd = Promise.resolve());
        Kd.then(function() {
            return Md(b) && a()
        });
        return b
    };
    var Od = function() {
        return Nd.apply(null, u(w.apply(0, arguments)))
    };
    var Pd = function(a, b) {
        sd.call(this, a, b);
        this.scheduler = a;
        this.nd = b
    };
    v(Pd, sd);
    Pd.EMPTY = sd.EMPTY;
    Pd.prototype.jc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c) return sd.prototype.jc.call(this, a, b, c);
        a.actions.push(this);
        return a.dd || (a.dd = Od(a.flush.bind(a, void 0)))
    };
    Pd.prototype.ic = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        if (null !== c && 0 < c || null === c && 0 < this.delay) return sd.prototype.ic.call(this, a, b, c);
        0 === a.actions.length && (Md(b), a.dd = void 0)
    };
    var Qd = function() {
        td.apply(this, arguments)
    };
    v(Qd, td);
    Qd.prototype.flush = function(a) {
        this.active = !0;
        this.dd = void 0;
        var b = this.actions,
            c, d = -1;
        a = a || b.shift();
        var e = b.length;
        do
            if (c = a.execute(a.state, a.delay)) break; while (++d < e && (a = b.shift()));
        this.active = !1;
        if (c) {
            for (; ++d < e && (a = b.shift());) a.unsubscribe();
            throw c;
        }
    };
    var Rd = new Qd(Pd);
    var Sd = function(a, b) {
        sd.call(this, a, b);
        this.scheduler = a;
        this.nd = b
    };
    v(Sd, sd);
    Sd.EMPTY = sd.EMPTY;
    Sd.prototype.B = function(a, b) {
        b = void 0 === b ? 0 : b;
        if (0 < b) return sd.prototype.B.call(this, a, b);
        this.delay = b;
        this.state = a;
        this.scheduler.flush(this);
        return this
    };
    Sd.prototype.execute = function(a, b) {
        return 0 < b || this.closed ? sd.prototype.execute.call(this, a, b) : this.Ke(a, b)
    };
    Sd.prototype.jc = function(a, b, c) {
        c = void 0 === c ? 0 : c;
        return null !== c && 0 < c || null === c && 0 < this.delay ? sd.prototype.jc.call(this, a, b, c) : a.flush(this)
    };
    var Td = function() {
        td.apply(this, arguments)
    };
    v(Td, td);
    var hd = new Td(Sd);
    var Ud = function() {
        function a() {
            this.message = "argument out of range";
            this.name = "ArgumentOutOfRangeError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    }();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "NotFoundError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    (function() {
        function a(b) {
            this.message = b;
            this.name = "SequenceError";
            return this
        }
        a.prototype = Object.create(Error.prototype);
        return a
    })();
    var Vd = function() {
        this.A = new Oa;
        this.h = new Pa;
        this.dh = Symbol();
        this.af = new Xb
    };
    Vd.prototype.Td = function() {
        return wd
    };
    da.Object.defineProperties(Vd.prototype, {
        Lb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.dh
            }
        }
    });
    var Wd = function(a, b) {
        b = Error.call(this, b ? a + ": " + b : String(a));
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.code = a;
        this.__proto__ = Wd.prototype;
        this.name = String(a)
    };
    v(Wd, Error);
    var Xd = function(a) {
        Wd.call(this, 1E3, 'sfr:"' + a + '"');
        this.rh = a;
        this.__proto__ = Xd.prototype
    };
    v(Xd, Wd);
    var Yd = function() {
        Wd.call(this, 1003);
        this.__proto__ = Yd.prototype
    };
    v(Yd, Wd);
    var Zd = function() {
        Wd.call(this, 1009);
        this.__proto__ = Zd.prototype
    };
    v(Zd, Wd);
    var $d = function() {
        Wd.call(this, 1011);
        this.__proto__ = $d.prototype
    };
    v($d, Wd);
    var ae = function() {
        Wd.call(this, 1007);
        this.__proto__ = Yd.prototype
    };
    v(ae, Wd);
    var be = function() {
        Wd.call(this, 1008);
        this.__proto__ = Yd.prototype
    };
    v(be, Wd);
    var ce = function() {
        Wd.call(this, 1001);
        this.__proto__ = ce.prototype
    };
    v(ce, Wd);
    var de = function(a) {
        Wd.call(this, 1004, String(a));
        this.ah = a;
        this.__proto__ = de.prototype
    };
    v(de, Wd);
    var fe = function(a) {
        Wd.call(this, 1010, a);
        this.__proto__ = ee.prototype
    };
    v(fe, Wd);
    var ee = function(a) {
        Wd.call(this, 1005, a);
        this.__proto__ = ee.prototype
    };
    v(ee, Wd);
    var ge = function(a) {
        var b = w.apply(1, arguments),
            c = this;
        this.Fb = [];
        this.Fb.push(a);
        b.forEach(function(d) {
            c.Fb.push(d)
        })
    };
    ge.prototype.K = function(a) {
        return this.Fb.some(function(b) {
            return b.K(a)
        })
    };
    ge.prototype.S = function(a, b) {
        for (var c = 0; c < this.Fb.length; c++)
            if (this.Fb[c].K(b)) return this.Fb[c].S(a, b);
        throw new Zd;
    };

    function he(a) {
        var b, c, d;
        return !!a && "boolean" === typeof a.active && "function" === typeof(null == (b = a.clock) ? void 0 : b.now) && void 0 !== (null == (c = a.clock) ? void 0 : c.timeline) && !(null == (d = a.u) || !d.timestamp) && "function" === typeof a.ea && "function" === typeof a.ga && "function" === typeof a.na && "function" === typeof a.map && "function" === typeof a.pa
    };
    var ie = Symbol("time-origin"),
        je = Symbol("date"),
        ke = function(a, b) {
            this.value = a;
            this.timeline = b
        },
        le = function(a, b) {
            if (b.timeline !== a.timeline) throw new ae;
            return a.value - b.value
        };
    ke.prototype.equals = function(a) {
        return 0 === le(this, a)
    };
    ke.prototype.maximum = function(a) {
        if (a.timeline !== this.timeline) throw new ae;
        return this.value >= a.value ? this : a
    };
    ke.prototype.round = function() {
        return new ke(Math.round(this.value), this.timeline)
    };
    ke.prototype.toString = function() {
        return String(this.value)
    };

    function me(a) {
        function b(c) {
            return "boolean" === typeof c || "string" === typeof c || "number" === typeof c || void 0 === c || null === c
        }
        return b(a) ? !0 : Array.isArray(a) ? a.every(b) : "object" === typeof a ? Object.keys(a).every(function(c) {
            return "string" === typeof c
        }) && Object.values(a).every(function(c) {
            return Array.isArray(c) ? c.every(b) : b(c)
        }) : !1
    }

    function ne(a) {
        if (me(a)) return a;
        if (he(a)) return {
            u: {
                value: ne(a.u.value),
                timestamp: le(a.u.timestamp, new ke(0, a.u.timestamp.timeline))
            },
            active: a.active
        };
        try {
            return JSON.parse(JSON.stringify(a))
        } catch (b) {}
        return String(a)
    };

    function oe(a) {
        return function(b) {
            return N(b, function(c) {
                var d = this,
                    e = new H,
                    f = null,
                    g = !1,
                    h;
                f = c.subscribe({
                    next: function(k) {
                        return d.next(k)
                    },
                    error: function(k) {
                        try {
                            h = id(a(k, oe(a)(c)))
                        } catch (l) {
                            d.error(l)
                        }
                        h && (f ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : g = !0)
                    },
                    complete: function() {
                        return d.complete()
                    }
                });
                g ? (f.unsubscribe(), f = null, e.add(h.subscribe(d))) : e.add(f);
                return e
            })
        }
    };

    function pe() {
        var a = w.apply(0, arguments),
            b = void 0;
        "function" === typeof a[a.length - 1] && (b = a.pop());
        1 === a.length && dc(a[0]) && (a = a[0].slice());
        return function(c) {
            var d = id([c].concat(u(a))),
                e = new ad(b);
            if (c && "function" === typeof c.Cb) c = c.Cb.call(d, e);
            else throw new TypeError("x");
            return c
        }
    }

    function qe() {
        return pe.apply(null, u(w.apply(0, arguments)))
    };

    function re(a) {
        a = void 0 === a ? null : a;
        return function(b) {
            return N(b, new se(a))
        }
    }
    var se = function(a) {
        this.defaultValue = a
    };
    se.prototype.call = function(a, b) {
        return b.subscribe(new te(a, this.defaultValue))
    };
    var te = function(a, b) {
        I.call(this, a);
        this.defaultValue = b;
        this.Uc = !0
    };
    v(te, I);
    te.EMPTY = I.EMPTY;
    te.create = I.create;
    te.prototype.o = function(a) {
        this.Uc = !1;
        this.destination.next(a)
    };
    te.prototype.C = function() {
        this.Uc && this.destination.next(this.defaultValue);
        this.destination.complete()
    };

    function ue(a) {
        return function(b) {
            return N(b, new ve(a))
        }
    }
    var ve = function(a) {
        this.Kd = a
    };
    ve.prototype.call = function(a, b) {
        return b.subscribe(new we(a, this.Kd))
    };
    var we = function(a, b) {
        Q.call(this, a);
        this.Kd = b;
        this.We = !1;
        this.Hc = [];
        this.index = 0
    };
    v(we, Q);
    we.EMPTY = Q.EMPTY;
    we.create = Q.create;
    m = we.prototype;
    m.qa = function(a, b, c, d) {
        this.destination.next(a);
        xe(this, d);
        ye(this)
    };
    m.Xa = function(a) {
        this.X(a)
    };
    m.T = function(a) {
        (a = xe(this, a)) && this.destination.next(a);
        ye(this)
    };
    m.o = function(a) {
        var b = this.index++;
        try {
            var c = this.Kd(a, b);
            if (c) {
                var d = Zc(c, new Yc(this, a, 0));
                d && !d.closed && (this.destination.add(d), this.Hc.push(d))
            }
        } catch (e) {
            this.destination.error(e)
        }
    };
    m.C = function() {
        this.We = !0;
        ye(this);
        this.unsubscribe()
    };
    var xe = function(a, b) {
            b.unsubscribe();
            var c = a.Hc.indexOf(b); - 1 !== c && a.Hc.splice(c, 1);
            return b.If
        },
        ye = function(a) {
            a.We && 0 === a.Hc.length && a.destination.complete()
        };

    function ze(a) {
        return function(b) {
            return N(b, new Ae(a))
        }
    }
    var Ae = function(a) {
        this.Wa = a;
        this.Rg = void 0
    };
    Ae.prototype.call = function(a, b) {
        return b.subscribe(new Be(a, this.Wa, this.Rg))
    };
    var Be = function(a, b, c) {
        P.call(this, a);
        this.Wa = b;
        this.values = new Set;
        c && this.add(Zc(c, new Xc(this)))
    };
    v(Be, P);
    Be.EMPTY = P.EMPTY;
    Be.create = P.create;
    m = Be.prototype;
    m.qa = function() {
        this.values.clear()
    };
    m.Xa = function(a) {
        this.X(a)
    };
    m.o = function(a) {
        this.Wa ? this.ig(a) : this.Le(a, a)
    };
    m.ig = function(a) {
        var b = this.destination;
        try {
            var c = this.Wa(a)
        } catch (d) {
            b.error(d);
            return
        }
        this.Le(c, a)
    };
    m.Le = function(a, b) {
        var c = this.values;
        c.has(a) || (c.add(a), this.destination.next(b))
    };

    function V(a) {
        return function(b) {
            return N(b, new Ce(a))
        }
    }
    var Ce = function(a) {
        this.compare = a;
        this.Wa = void 0
    };
    Ce.prototype.call = function(a, b) {
        return b.subscribe(new De(a, this.compare, this.Wa))
    };
    var De = function(a, b, c) {
        I.call(this, a);
        this.Wa = c;
        this.pf = !1;
        "function" === typeof b && (this.compare = b)
    };
    v(De, I);
    De.EMPTY = I.EMPTY;
    De.create = I.create;
    De.prototype.compare = function(a, b) {
        return a === b
    };
    De.prototype.o = function(a) {
        try {
            var b = this.Wa;
            var c = b ? b(a) : a
        } catch (e) {
            return this.destination.error(e)
        }
        b = !1;
        if (this.pf) try {
            var d = this.compare;
            b = d(this.key, c)
        } catch (e) {
            return this.destination.error(e)
        } else this.pf = !0;
        b || (this.key = c, this.destination.next(a))
    };

    function Ee(a) {
        if (isNaN(a)) throw new TypeError("F");
        if (0 > a) throw new Ud;
        return function(b) {
            return 0 === a ? tc : N(b, new Fe(a))
        }
    }
    var Fe = function(a) {
        this.count = a
    };
    Fe.prototype.call = function(a, b) {
        return b.subscribe(new Ge(a, this.count))
    };
    var Ge = function(a, b) {
        I.call(this, a);
        this.count = b;
        this.jg = 0
    };
    v(Ge, I);
    Ge.EMPTY = I.EMPTY;
    Ge.create = I.create;
    Ge.prototype.o = function(a) {
        var b = this.count,
            c = ++this.jg;
        c <= b && (this.destination.next(a), c === b && (this.destination.complete(), this.unsubscribe()))
    };

    function He(a) {
        a = void 0 === a ? Ie : a;
        return function(b) {
            return N(b, new Je(a))
        }
    }
    var Je = function(a) {
        this.Od = a
    };
    Je.prototype.call = function(a, b) {
        return b.subscribe(new Ke(a, this.Od))
    };
    var Ke = function(a, b) {
        I.call(this, a);
        this.Od = b;
        this.hb = !1
    };
    v(Ke, I);
    Ke.EMPTY = I.EMPTY;
    Ke.create = I.create;
    Ke.prototype.o = function(a) {
        this.hb = !0;
        this.destination.next(a)
    };
    Ke.prototype.C = function() {
        if (this.hb) return this.destination.complete();
        try {
            var a = this.Od()
        } catch (b) {
            a = b
        }
        this.destination.error(a)
    };

    function Ie() {
        return new Dc
    };

    function Le() {
        var a = w.apply(0, arguments);
        return function(b) {
            return nd(b, M.apply(null, u(a)))
        }
    };

    function Me(a) {
        return function(b) {
            return N(b, new Ne(a, b))
        }
    }
    var Ne = function(a, b) {
        this.ta = a;
        this.ja = void 0;
        this.source = b
    };
    Ne.prototype.call = function(a, b) {
        return b.subscribe(new Oe(a, this.ta, this.ja, this.source))
    };
    var Oe = function(a, b, c, d) {
        I.call(this, a);
        this.ta = b;
        this.ja = c;
        this.source = d;
        this.index = 0;
        this.ja = c || this
    };
    v(Oe, I);
    Oe.EMPTY = I.EMPTY;
    Oe.create = I.create;
    Oe.prototype.T = function(a) {
        this.destination.next(a);
        this.destination.complete()
    };
    Oe.prototype.o = function(a) {
        var b = !1;
        try {
            b = this.ta.call(this.ja, a, this.index++, this.source)
        } catch (c) {
            this.destination.error(c);
            return
        }
        b || this.T(!1)
    };
    Oe.prototype.C = function() {
        this.T(!0)
    };

    function Pe() {
        return function(a) {
            return N(a, new Qe)
        }
    }
    var Qe = function() {};
    Qe.prototype.call = function(a, b) {
        return b.subscribe(new Re(a))
    };
    var Re = function() {
        I.apply(this, arguments)
    };
    v(Re, I);
    Re.EMPTY = I.EMPTY;
    Re.create = I.create;
    Re.prototype.o = function() {};

    function Se() {
        if (isNaN(1)) throw new TypeError("F");
        return function(a) {
            return N(a, new Te)
        }
    }
    var Te = function() {
        this.total = 1
    };
    Te.prototype.call = function(a, b) {
        return b.subscribe(new Ue(a, this.total))
    };
    var Ue = function(a, b) {
        I.call(this, a);
        this.total = b;
        this.Of = [];
        this.count = 0
    };
    v(Ue, I);
    Ue.EMPTY = I.EMPTY;
    Ue.create = I.create;
    Ue.prototype.o = function(a) {
        var b = this.Of,
            c = this.total,
            d = this.count++;
        b.length < c ? b.push(a) : b[d % c] = a
    };
    Ue.prototype.C = function() {
        var a = this.destination,
            b = this.count;
        if (0 < b)
            for (var c = this.count >= this.total ? this.total : this.count, d = this.Of, e = 0; e < c; e++) {
                var f = b++ % c;
                a.next(d[f])
            }
        a.complete()
    };

    function Ve(a, b) {
        var c = 2 <= arguments.length;
        return function(d) {
            return d.g(a ? T(function(e, f) {
                return a(e, f, d)
            }) : kc, Se(), c ? re(b) : He(function() {
                return new Dc
            }))
        }
    };

    function We(a) {
        return function(b) {
            return N(b, new Xe(a))
        }
    }
    var Xe = function(a) {
        this.value = a
    };
    Xe.prototype.call = function(a, b) {
        return b.subscribe(new Ye(a, this.value))
    };
    var Ye = function(a, b) {
        I.call(this, a);
        this.value = b
    };
    v(Ye, I);
    Ye.EMPTY = I.EMPTY;
    Ye.create = I.create;
    Ye.prototype.o = function() {
        this.destination.next(this.value)
    };

    function Ze(a, b) {
        var c = !1;
        2 <= arguments.length && (c = !0);
        return function(d) {
            return N(d, new $e(a, b, c))
        }
    }
    var $e = function(a, b, c) {
        this.xd = a;
        this.seed = b;
        this.Xg = void 0 === c ? !1 : c
    };
    $e.prototype.call = function(a, b) {
        return b.subscribe(new af(a, this.xd, this.seed, this.Xg))
    };
    var af = function(a, b, c, d) {
        I.call(this, a);
        this.xd = b;
        this.rd = c;
        this.Ne = d;
        this.index = 0
    };
    v(af, I);
    af.EMPTY = I.EMPTY;
    af.create = I.create;
    af.prototype.o = function(a) {
        var b = this.destination;
        if (this.Ne) {
            var c = this.index++;
            try {
                var d = this.xd(this.rd, a, c)
            } catch (e) {
                b.error(e);
                return
            }
            this.rd = d;
            b.next(d)
        } else this.rd = a, this.Ne = !0, b.next(a)
    };

    function bf(a) {
        return function(b) {
            var c = "function" === typeof a ? a : function() {
                return a
            };
            var d = Object.create(b, Kc);
            d.source = b;
            d.Vf = c;
            return d
        }
    };

    function df() {
        var a = w.apply(0, arguments);
        1 === a.length && dc(a[0]) && (a = a[0]);
        return function(b) {
            return N(b, new gf(a))
        }
    }
    var gf = function(a) {
        this.ne = a
    };
    gf.prototype.call = function(a, b) {
        return b.subscribe(new hf(a, this.ne))
    };
    var hf = function(a, b) {
        P.call(this, a);
        this.destination = a;
        this.ne = b
    };
    v(hf, P);
    hf.EMPTY = P.EMPTY;
    hf.create = P.create;
    hf.prototype.Xa = function() {
        jf(this)
    };
    hf.prototype.T = function() {
        jf(this)
    };
    hf.prototype.X = function() {
        jf(this);
        this.unsubscribe()
    };
    hf.prototype.C = function() {
        jf(this);
        this.unsubscribe()
    };
    var jf = function(a) {
        var b = a.ne.shift();
        if (b) {
            var c = new Xc(a);
            a.destination.add(c);
            Zc(b, c)
        } else a.destination.complete()
    };

    function kf(a) {
        var b = new Ac(a, void 0, void 0);
        return function(c) {
            return bf(function() {
                return b
            })(c)
        }
    };

    function lf() {
        var a = void 0 === a ? Infinity : a;
        return function(b) {
            return 0 >= a ? tc : N(b, function(c) {
                var d = this,
                    e = 0,
                    f = new H,
                    g, h = function() {
                        var k = !1;
                        g = c.subscribe({
                            next: function(l) {
                                return d.next(l)
                            },
                            error: function(l) {
                                return d.error(l)
                            },
                            complete: function() {
                                ++e < a ? g ? (g.unsubscribe(), g = null, h()) : k = !0 : d.complete()
                            }
                        });
                        k ? (g.unsubscribe(), g = null, h()) : f.add(g)
                    };
                h();
                return f
            })
        }
    };

    function mf() {
        return new L
    }

    function nf() {
        return function(a) {
            return Ec()(bf(mf)(a))
        }
    };

    function W() {
        var a = w.apply(0, arguments),
            b = a[a.length - 1];
        return xc(b) ? (a.pop(), function(c) {
            return nd(a, c, b)
        }) : function(c) {
            return nd(a, c)
        }
    };
    var of = function(a, b, c) {
        b = void 0 === b ? 0 : b;
        c = void 0 === c ? Rd : c;
        this.source = a;
        this.delayTime = b;
        this.scheduler = c;
        0 > b && (this.delayTime = 0);
        xc(c) || (this.scheduler = Rd)
    };
    v( of , K); of .create = K.create; of .Eg = function(a) {
        return this.add(a.source.subscribe(a.Ae))
    }; of .prototype.ca = function(a) {
        return this.scheduler.B( of .Eg, this.delayTime, {
            source: this.source,
            Ae: a
        })
    };

    function pf() {
        var a = void 0 === a ? 0 : a;
        return function(b) {
            return N(b, new qf(a))
        }
    }
    var qf = function(a) {
        this.scheduler = hd;
        this.delay = a
    };
    qf.prototype.call = function(a, b) {
        return (new of (b, this.delay, this.scheduler)).subscribe(a)
    };

    function X(a) {
        return function(b) {
            return N(b, new rf(a))
        }
    }
    var rf = function(a) {
        this.M = a
    };
    rf.prototype.call = function(a, b) {
        return b.subscribe(new sf(a, this.M))
    };
    var sf = function(a, b) {
        P.call(this, a);
        this.destination = a;
        this.M = b;
        this.index = 0
    };
    v(sf, P);
    sf.EMPTY = P.EMPTY;
    sf.create = P.create;
    m = sf.prototype;
    m.o = function(a) {
        var b = this.index++;
        try {
            var c = this.M(a, b)
        } catch (d) {
            this.destination.error(d);
            return
        }(a = this.Sc) && a.unsubscribe();
        a = new Xc(this);
        this.destination.add(a);
        this.Sc = a;
        Zc(c, a)
    };
    m.C = function() {
        var a = this.Sc;
        a && !a.closed || P.prototype.C.call(this);
        this.unsubscribe()
    };
    m.Ca = function() {
        this.Sc = void 0
    };
    m.T = function() {
        this.Sc = void 0;
        this.D && P.prototype.C.call(this)
    };
    m.qa = function(a) {
        this.destination.next(a)
    };

    function tf(a, b) {
        b = void 0 === b ? !1 : b;
        return function(c) {
            return N(c, new uf(a, b))
        }
    }
    var uf = function(a, b) {
        this.ta = a;
        this.Yd = b
    };
    uf.prototype.call = function(a, b) {
        return b.subscribe(new vf(a, this.ta, this.Yd))
    };
    var vf = function(a, b, c) {
        I.call(this, a);
        this.ta = b;
        this.Yd = c;
        this.index = 0
    };
    v(vf, I);
    vf.EMPTY = I.EMPTY;
    vf.create = I.create;
    vf.prototype.o = function(a) {
        var b = this.destination;
        try {
            var c = this.ta(a, this.index++)
        } catch (d) {
            b.error(d);
            return
        }
        b = this.destination;
        c ? b.next(a) : (this.Yd && b.next(a), b.complete())
    };

    function wf(a, b, c) {
        return function(d) {
            return N(d, new xf(a, b, c))
        }
    }
    var xf = function(a, b, c) {
        this.yh = a;
        this.error = b;
        this.complete = c
    };
    xf.prototype.call = function(a, b) {
        return b.subscribe(new yf(a, this.yh, this.error, this.complete))
    };
    var yf = function(a, b, c, d) {
        I.call(this, a);
        this.sd = this.td = this.ud = vd;
        this.td = c || vd;
        this.sd = d || vd;
        ec(b) ? (this.Ba = this, this.ud = b) : b && (this.Ba = b, this.ud = b.next || vd, this.td = b.error || vd, this.sd = b.complete || vd)
    };
    v(yf, I);
    yf.EMPTY = I.EMPTY;
    yf.create = I.create;
    yf.prototype.o = function(a) {
        try {
            this.ud.call(this.Ba, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.next(a)
    };
    yf.prototype.X = function(a) {
        try {
            this.td.call(this.Ba, a)
        } catch (b) {
            this.destination.error(b);
            return
        }
        this.destination.error(a)
    };
    yf.prototype.C = function() {
        try {
            this.sd.call(this.Ba)
        } catch (a) {
            this.destination.error(a);
            return
        }
        return this.destination.complete()
    };

    function zf() {
        var a = w.apply(0, arguments);
        return function(b) {
            var c;
            "function" === typeof a[a.length - 1] && (c = a.pop());
            return N(b, new Af(a, c))
        }
    }
    var Af = function(a, b) {
        this.Ya = a;
        this.M = b
    };
    Af.prototype.call = function(a, b) {
        return b.subscribe(new Bf(a, this.Ya, this.M))
    };
    var Bf = function(a, b, c) {
        Q.call(this, a);
        this.M = c;
        this.rb = [];
        a = b.length;
        this.values = Array(a);
        for (c = 0; c < a; c++) this.rb.push(c);
        for (c = 0; c < a; c++) this.add(Zc(b[c], new Yc(this, void 0, c)))
    };
    v(Bf, Q);
    Bf.EMPTY = Q.EMPTY;
    Bf.create = Q.create;
    Bf.prototype.qa = function(a, b, c) {
        this.values[c] = b;
        b = this.rb;
        0 < b.length && (c = b.indexOf(c), -1 !== c && b.splice(c, 1))
    };
    Bf.prototype.T = function() {};
    Bf.prototype.o = function(a) {
        0 === this.rb.length && (a = [a].concat(u(this.values)), this.M ? this.fg(a) : this.destination.next(a))
    };
    Bf.prototype.fg = function(a) {
        try {
            var b = this.M.apply(this, a)
        } catch (c) {
            this.destination.error(c);
            return
        }
        this.destination.next(b)
    };
    var Cf = function(a) {
        this.ra = a
    };
    Cf.prototype.K = function(a) {
        return (null == a ? 0 : a.Ac) ? !0 : "POST" === (null == a ? void 0 : a.ub) || (null == a ? 0 : a.wb) || (null == a ? 0 : a.Jd) ? !1 : this.ra.K()
    };
    Cf.prototype.ping = function() {
        var a = this,
            b = M.apply(null, u(w.apply(0, arguments))).g(jd(function(c) {
                return Df(a, c)
            }), Me(function(c) {
                return c
            }), kf(1));
        b.connect();
        return b
    };
    var Df = function(a, b) {
        var c = new Ac(1);
        Ef(a.ra, b, function() {
            c.next(!0);
            c.complete()
        }, function() {
            c.next(!1);
            c.complete()
        });
        return c
    };
    Cf.prototype.bd = function(a, b, c) {
        this.ping.apply(this, u(w.apply(3, arguments)))
    };

    function Ff(a, b) {
        var c = !1;
        return new K(function(d) {
            var e = a.setTimeout(function() {
                c = !0;
                d.next(!0);
                d.complete()
            }, b);
            return function() {
                c || a.clearTimeout(e)
            }
        })
    };
    var Gf = function(a) {
        this.ra = a;
        this.timeline = je
    };
    m = Gf.prototype;
    m.setTimeout = function(a, b) {
        return Number(this.ra.setTimeout(function() {
            return a()
        }, b))
    };
    m.clearTimeout = function(a) {
        this.ra.clearTimeout(a)
    };
    m.now = function() {
        return new ke(Date.now(), this.timeline)
    };
    m.interval = function(a, b) {
        var c = this.Va(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    m.Va = function(a) {
        return Ff(this, a).g(lf(), Ze(function(b) {
            return b + 1
        }, -1))
    };
    m.wa = function() {
        return !0
    };
    var Hf = function(a, b) {
        this.context = a;
        this.Gb = b
    };
    Hf.prototype.K = function(a) {
        return this.Gb.K(a)
    };
    Hf.prototype.S = function(a, b) {
        if (!this.K(b)) throw new Zd;
        return new If(this.context, this.Gb, null != b ? b : void 0, a)
    };
    var If = function(a, b, c, d) {
        var e = this;
        this.Gb = b;
        this.properties = c;
        this.url = d;
        this.Tc = !0;
        this.wb = new Map;
        this.body = void 0;
        var f;
        this.method = null != (f = null == c ? void 0 : c.ub) ? f : "GET";
        this.qg = a.Td().subscribe(function() {
            e.sendNow()
        })
    };
    If.prototype.deactivate = function() {
        this.Tc = !1
    };
    If.prototype.sendNow = function() {
        if (this.Tc)
            if (this.qg.unsubscribe(), this.Gb.K(this.properties)) try {
                if (0 < this.wb.size || void 0 !== this.body) {
                    var a, b;
                    this.Gb.bd(null != (a = this.properties) ? a : {}, this.wb, null != (b = this.body) ? b : "", this.url)
                } else this.Gb.ping(this.url);
                this.Tc = !1
            } catch (c) {} else this.Tc = !1
    };

    function Jf(a) {
        var b = Object.assign({}, a);
        delete b.timestamp;
        return {
            timestamp: new ke(a.timestamp, je),
            value: b
        }
    };

    function Kf(a) {
        return void 0 !== a && "number" === typeof a.x && "number" === typeof a.y && "number" === typeof a.width && "number" === typeof a.height
    };
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    var Lf = fa([""]),
        Mf = ha(["\x00"], ["\\0"]),
        Nf = ha(["\n"], ["\\n"]),
        Of = ha(["\x00"], ["\\u0000"]),
        Pf = fa([""]),
        Qf = ha(["\x00"], ["\\0"]),
        Rf = ha(["\n"], ["\\n"]),
        Sf = ha(["\x00"], ["\\u0000"]);

    function Tf(a) {
        return Object.isFrozen(a) && Object.isFrozen(a.raw)
    }

    function Uf(a) {
        return -1 === a.toString().indexOf("`")
    }
    var Vf = Uf(function(a) {
            return a(Lf)
        }) || Uf(function(a) {
            return a(Mf)
        }) || Uf(function(a) {
            return a(Nf)
        }) || Uf(function(a) {
            return a(Of)
        }),
        Wf = Tf(Pf) && Tf(Qf) && Tf(Rf) && Tf(Sf);
    var Xf = function(a, b) {
        this.name = a;
        this.value = b
    };
    Xf.prototype.toString = function() {
        return this.name
    };
    var Yf = new Xf("OFF", Infinity),
        Zf = new Xf("WARNING", 900),
        $f = new Xf("INFO", 800),
        ag = new Xf("CONFIG", 700),
        bg = function() {
            this.Dc = 0;
            this.clear()
        },
        cg;
    bg.prototype.clear = function() {
        this.Ue = Array(this.Dc);
        this.Ze = -1;
        this.vf = !1
    };
    var dg = function(a, b, c) {
        this.reset(a || Yf, b, c, void 0, void 0)
    };
    dg.prototype.reset = function(a, b, c, d) {
        d || Date.now();
        this.wh = b
    };
    dg.prototype.getMessage = function() {
        return this.wh
    };
    var eg = function(a, b) {
            this.level = null;
            this.Ug = [];
            this.parent = (void 0 === b ? null : b) || null;
            this.children = [];
            this.Bf = {
                zb: function() {
                    return a
                }
            }
        },
        fg = function(a) {
            if (a.level) return a.level;
            if (a.parent) return fg(a.parent);
            Ya("Root logger has no level set.");
            return Yf
        },
        gg = function(a, b) {
            for (; a;) a.Ug.forEach(function(c) {
                c(b)
            }), a = a.parent
        },
        hg = function() {
            this.entries = {};
            var a = new eg("");
            a.level = ag;
            this.entries[""] = a
        },
        ig, jg = function(a, b, c) {
            var d = a.entries[b];
            if (d) return void 0 !== c && (d.level = c), d;
            d = jg(a, b.slice(0,
                Math.max(b.lastIndexOf("."), 0)));
            var e = new eg(b, d);
            a.entries[b] = e;
            d.children.push(e);
            void 0 !== c && (e.level = c);
            return e
        },
        kg = function() {
            ig || (ig = new hg);
            return ig
        },
        lg = function(a, b) {
            var c = Zf,
                d;
            if (d = a)
                if (d = a && c) {
                    d = c.value;
                    var e = a ? fg(jg(kg(), a.zb())) : Yf;
                    d = d >= e.value
                }
            if (d) {
                c = c || Yf;
                d = jg(kg(), a.zb());
                "function" === typeof b && (b = b());
                cg || (cg = new bg);
                e = cg;
                a = a.zb();
                if (0 < e.Dc) {
                    var f = (e.Ze + 1) % e.Dc;
                    e.Ze = f;
                    e.vf ? (e = e.Ue[f], e.reset(c, b, a), a = e) : (e.vf = f == e.Dc - 1, a = e.Ue[f] = new dg(c, b, a))
                } else a = new dg(c, b, a);
                gg(d, a)
            }
        };
    var mg = [],
        ng = function(a) {
            var b = jg(kg(), "safevalues").Bf;
            b && lg(b, "A URL with content '" + a + "' was sanitized away.")
        }; - 1 === mg.indexOf(ng) && mg.push(ng);

    function og(a) {
        var b = w.apply(1, arguments);
        if (!Array.isArray(a) || !Array.isArray(a.raw) || a.length !== a.raw.length || !Vf && a === a.raw || !(Vf && !Wf || Tf(a)) || b.length + 1 !== a.length) throw new TypeError("G");
        if (0 === b.length) return tb(a[0]);
        var c = a[0].toLowerCase();
        if (/^data:/.test(c)) throw Error("N");
        if (/^https:\/\//.test(c) || /^\/\//.test(c)) {
            var d = c.indexOf("//") + 2;
            var e = c.indexOf("/", d);
            if (e <= d) throw Error("H");
            d = c.substring(d, e);
            if (!/^[0-9a-z.:-]+$/i.test(d)) throw Error("I");
            if (!/^[^:]*(:[0-9]+)?$/i.test(d)) throw Error("J");
            if (!/(^|\.)[a-z][^.]*$/i.test(d)) throw Error("K");
            d = !0
        } else d = !1;
        if (d = !d) {
            if (/^\//.test(c))
                if ("/" === c || 1 < c.length && "/" !== c[1] && "\\" !== c[1]) d = !0;
                else throw Error("M");
            else d = !1;
            d = !d
        }
        if (d) {
            if (/^about:blank/.test(c)) {
                if ("about:blank" !== c && !/^about:blank#/.test(c)) throw Error("L");
                c = !0
            } else c = !1;
            d = !c
        }
        if (d) throw Error("O");
        c = a[0];
        for (d = 0; d < b.length; d++) c += encodeURIComponent(b[d]) + a[d + 1];
        return tb(c)
    };
    var pg = fa(["https://pagead2.googlesyndication.com/pagead/managed/js/activeview/", "/reach_worklet.html"]),
        qg = fa(["./reach_worklet.js"]),
        rg = fa(["./reach_worklet.js"]),
        sg = fa(["./reach_worklet.html"]),
        tg = fa(["./reach_worklet.js"]),
        ug = fa(["./reach_worklet.js"]);

    function vg() {
        var a = {};
        return a[0] = og(pg, "current"), a[1] = og(qg), a[2] = og(rg), a
    }
    og(sg);
    og(tg);
    og(ug);
    var xg = function(a, b, c, d) {
        c = void 0 === c ? null : c;
        d = void 0 === d ? vg() : d;
        Vd.call(this);
        this.ra = a;
        this.si = b;
        this.eb = c;
        this.xe = new Ac(3);
        this.xe.g(T(function(e) {
            return "sessionStart" === e.value.type
        }));
        this.bi = this.xe.g(T(function(e) {
            return "sessionFinish" === e.value.type
        }));
        this.rf = new Ac(1);
        this.ti = new Ac;
        this.jf = new Ac(10);
        this.l = new Gf(a);
        this.I = new Hf(this, new Cf(a));
        this.jh = this.ra.K();
        wg(this)
    };
    v(xg, Vd);
    xg.prototype.validate = function() {
        return this.jh
    };
    var wg = function(a) {
        yg(a.ra, function(e) {
            return void a.xe.next(Jf(e))
        }, a.si);
        a.ra.addEventListener("geometryChange", function(e) {
            if (void 0 === e) var f = !1;
            else {
                f = e.data;
                var g;
                (g = void 0 === f) || (g = f.viewport, g = void 0 === g || void 0 !== g && "number" === typeof g.width && "number" === typeof g.height);
                g ? (f = f.adView, f = void 0 !== f && "number" === typeof f.percentageInView && (void 0 === f.geometry || Kf(f.geometry)) && (void 0 === f.onScreenGeometry || Kf(f.onScreenGeometry))) : f = !1
            }
            f ? a.jf.next(Jf(e)) : .01 >= Math.random() && (e = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&name=invalid_geo&context=1092&msg=" +
                JSON.stringify(e), a.I.S(e).sendNow())
        });
        for (var b = t("loaded start firstQuartile midpoint thirdQuartile complete pause resume bufferStart bufferFinish skipped volumeChange playerStateChange adUserInteraction".split(" ")), c = b.next(), d = {}; !c.done; d = {
                Ic: d.Ic
            }, c = b.next()) d.Ic = c.value, a.ra.addEventListener(d.Ic, function(e) {
            return function(f) {
                f.type === e.Ic && a.ti.next(Jf(f))
            }
        }(d));
        a.ra.addEventListener("impression", function(e) {
            a.rf.next(Jf(e))
        })
    };
    da.Object.defineProperties(xg.prototype, {
        global: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return zg
            }
        }
    });
    var zg = {};

    function Ag(a, b) {
        if (a) throw Error("P");
        b.push(65533)
    }

    function Bg(a, b) {
        b = String.fromCharCode.apply(null, b);
        return null == a ? b : a + b
    }
    var Cg = void 0,
        Dg, Eg, Fg = "undefined" !== typeof TextDecoder;
    var Gg = function(a) {
        Gg[" "](a);
        return a
    };
    Gg[" "] = function() {};
    var Hg = function(a, b) {
        try {
            return Gg(a[b]), !0
        } catch (c) {}
        return !1
    };
    var Ig = Ob(),
        Jg = Pb(),
        Kg = E("Edge"),
        Lg = E("Gecko") && !(ub(Hb(), "WebKit") && !E("Edge")) && !(E("Trident") || E("MSIE")) && !E("Edge"),
        Mg = ub(Hb(), "WebKit") && !E("Edge"),
        Ng = function() {
            var a = Ha.document;
            return a ? a.documentMode : void 0
        },
        Og;
    a: {
        var Pg = "",
            Qg = function() {
                var a = Hb();
                if (Lg) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Kg) return /Edge\/([\d\.]+)/.exec(a);
                if (Jg) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Mg) return /WebKit\/(\S+)/.exec(a);
                if (Ig) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Qg && (Pg = Qg ? Qg[1] : "");
        if (Jg) {
            var Rg = Ng();
            if (null != Rg && Rg > parseFloat(Pg)) {
                Og = String(Rg);
                break a
            }
        }
        Og = Pg
    }
    var Sg = Og,
        Tg;
    if (Ha.document && Jg) {
        var Ug = Ng();
        Tg = Ug ? Ug : parseInt(Sg, 10) || void 0
    } else Tg = void 0;
    var Vg = Tg;
    Sb();
    Rb();
    Qb();
    var Wg = {},
        Xg = null,
        Yg = Lg || Mg || "function" == typeof Ha.btoa,
        $g = function(a) {
            var b;
            y(Ja(a), "encodeByteArray takes an array as a parameter");
            void 0 === b && (b = 0);
            Zg();
            b = Wg[b];
            for (var c = Array(Math.floor(a.length / 3)), d = b[64] || "", e = 0, f = 0; e < a.length - 2; e += 3) {
                var g = a[e],
                    h = a[e + 1],
                    k = a[e + 2],
                    l = b[g >> 2];
                g = b[(g & 3) << 4 | h >> 4];
                h = b[(h & 15) << 2 | k >> 6];
                k = b[k & 63];
                c[f++] = "" + l + g + h + k
            }
            l = 0;
            k = d;
            switch (a.length - e) {
                case 2:
                    l = a[e + 1], k = b[(l & 15) << 2] || d;
                case 1:
                    a = a[e], c[f] = "" + b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d
            }
            return c.join("")
        },
        bh = function(a) {
            var b =
                a.length,
                c = 3 * b / 4;
            c % 3 ? c = Math.floor(c) : -1 != "=.".indexOf(a[b - 1]) && (c = -1 != "=.".indexOf(a[b - 2]) ? c - 2 : c - 1);
            var d = new Uint8Array(c),
                e = 0;
            ah(a, function(f) {
                d[e++] = f
            });
            return e !== c ? d.subarray(0, e) : d
        },
        ah = function(a, b) {
            function c(k) {
                for (; d < a.length;) {
                    var l = a.charAt(d++),
                        q = Xg[l];
                    if (null != q) return q;
                    if (!/^[\s\xa0]*$/.test(l)) throw Error("R`" + l);
                }
                return k
            }
            Zg();
            for (var d = 0;;) {
                var e = c(-1),
                    f = c(0),
                    g = c(64),
                    h = c(64);
                if (64 === h && -1 === e) break;
                b(e << 2 | f >> 4);
                64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h))
            }
        },
        Zg = function() {
            if (!Xg) {
                Xg = {};
                for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++) {
                    var d = a.concat(b[c].split(""));
                    Wg[c] = d;
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e],
                            g = Xg[f];
                        void 0 === g ? Xg[f] = e : y(g === e)
                    }
                }
            }
        };
    var ch = "undefined" !== typeof Uint8Array,
        dh = !Jg && "function" === typeof btoa;

    function eh(a) {
        if (!dh) return $g(a);
        for (var b = "", c = 0, d = a.length - 10240; c < d;) b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
        b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
        return btoa(b)
    }
    var fh = /[-_.]/g,
        hh = {
            "-": "+",
            _: "/",
            ".": "="
        };

    function ih(a) {
        return hh[a] || ""
    }

    function jh(a) {
        if (!dh) return bh(a);
        var b = a;
        fh.test(b) && (b = b.replace(fh, ih));
        try {
            var c = atob(b)
        } catch (d) {
            throw Error("S`" + a + "`" + d);
        }
        a = new Uint8Array(c.length);
        for (b = 0; b < c.length; b++) a[b] = c.charCodeAt(b);
        return a
    }
    var kh, lh = {};
    var mh, oh = function(a, b) {
        if (b !== lh) throw Error("T");
        this.sc = a;
        if (null != a && 0 === a.length) throw Error("U");
        this.dontPassByteStringToStructuredClone = nh
    };
    oh.prototype.Uc = function() {
        return null == this.sc
    };

    function nh() {};

    function ph(a) {
        if ("string" === typeof a) return {
            buffer: jh(a),
            ib: !1
        };
        if (Array.isArray(a)) return {
            buffer: new Uint8Array(a),
            ib: !1
        };
        if (a.constructor === Uint8Array) return {
            buffer: a,
            ib: !1
        };
        if (a.constructor === ArrayBuffer) return {
            buffer: new Uint8Array(a),
            ib: !1
        };
        if (a.constructor === oh) {
            fb(a, oh);
            if (lh !== lh) throw Error("T");
            var b = a.sc;
            null == b || ch && null != b && b instanceof Uint8Array || ("string" === typeof b ? b = jh(b) : (Ya("Cannot coerce to Uint8Array: " + Ia(b)), b = null));
            return {
                buffer: (null == b ? b : a.sc = b) || kh || (kh = new Uint8Array(0)),
                ib: !0
            }
        }
        if (a instanceof Uint8Array) return {
            buffer: new Uint8Array(a.buffer, a.byteOffset, a.byteLength),
            ib: !1
        };
        throw Error("ca");
    };
    var qh = "function" === typeof Uint8Array.prototype.slice,
        rh = 0,
        sh = 0;

    function th(a) {
        var b = 0 > a;
        a = Math.abs(a);
        var c = a >>> 0;
        a = Math.floor((a - c) / 4294967296);
        b && (c = t(uh(c, a)), b = c.next().value, a = c.next().value, c = b);
        rh = c >>> 0;
        sh = a >>> 0
    }

    function vh(a, b) {
        return 4294967296 * b + (a >>> 0)
    }

    function wh() {
        var a = rh,
            b = sh;
        b >>>= 0;
        a >>>= 0;
        if (2097151 >= b) var c = "" + (4294967296 * b + a);
        else "function" === typeof BigInt ? c = "" + (BigInt(b) << BigInt(32) | BigInt(a)) : (c = (a >>> 24 | b << 8) & 16777215, b = b >> 16 & 65535, a = (a & 16777215) + 6777216 * c + 6710656 * b, c += 8147497 * b, b *= 2, 1E7 <= a && (c += Math.floor(a / 1E7), a %= 1E7), 1E7 <= c && (b += Math.floor(c / 1E7), c %= 1E7), y(b), c = b + xh(c) + xh(a));
        return c
    }

    function xh(a) {
        a = String(a);
        return "0000000".slice(a.length) + a
    }

    function uh(a, b) {
        b = ~b;
        a ? a = ~a + 1 : b += 1;
        return [a, b]
    };
    var zh = function(a, b) {
            this.ka = null;
            this.Ad = !1;
            this.J = this.Ea = this.Za = 0;
            yh(this, a, b)
        },
        yh = function(a, b, c) {
            c = void 0 === c ? {} : c;
            a.zc = void 0 === c.zc ? !1 : c.zc;
            b && (b = ph(b), a.ka = b.buffer, a.Ad = b.ib, a.Za = 0, a.Ea = a.ka.length, a.J = a.Za)
        };
    m = zh.prototype;
    m.gf = function() {
        this.clear();
        100 > Ah.length && Ah.push(this)
    };
    m.clear = function() {
        this.ka = null;
        this.Ad = !1;
        this.J = this.Ea = this.Za = 0;
        this.zc = !1
    };
    m.setEnd = function(a) {
        this.Ea = a
    };
    m.reset = function() {
        this.J = this.Za
    };
    m.U = function() {
        return this.J
    };
    m.advance = function(a) {
        Bh(this, this.J + a)
    };
    m.re = function(a) {
        var b = 0,
            c = 0,
            d = 0,
            e = this.ka,
            f = this.J;
        do {
            var g = e[f++];
            b |= (g & 127) << d;
            d += 7
        } while (32 > d && g & 128);
        32 < d && (c |= (g & 127) >> 4);
        for (d = 3; 32 > d && g & 128; d += 7) g = e[f++], c |= (g & 127) << d;
        Bh(this, f);
        if (128 > g) return a(b >>> 0, c >>> 0);
        throw Error("$");
    };
    var Bh = function(a, b) {
            a.J = b;
            if (b > a.Ea) throw Error("aa`" + b + "`" + a.Ea);
        },
        Ch = function(a) {
            var b = a.ka,
                c = a.J,
                d = b[c++],
                e = d & 127;
            if (d & 128 && (d = b[c++], e |= (d & 127) << 7, d & 128 && (d = b[c++], e |= (d & 127) << 14, d & 128 && (d = b[c++], e |= (d & 127) << 21, d & 128 && (d = b[c++], e |= d << 28, d & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128 && b[c++] & 128))))) throw Error("$");
            Bh(a, c);
            return e
        };
    m = zh.prototype;
    m.Ka = function() {
        return Ch(this) >>> 0
    };
    m.Mf = function() {
        return this.re(vh)
    };
    m.Hb = function() {
        var a = this.ka,
            b = this.J,
            c = a[b + 0],
            d = a[b + 1],
            e = a[b + 2];
        a = a[b + 3];
        this.advance(4);
        return (c << 0 | d << 8 | e << 16 | a << 24) >>> 0
    };
    m.se = function() {
        var a = this.Hb(),
            b = this.Hb();
        return vh(a, b)
    };
    m.Kf = function() {
        var a = this.ka,
            b = this.J,
            c = a[b + 0],
            d = a[b + 1],
            e = a[b + 2];
        a = a[b + 3];
        this.advance(4);
        return c << 0 | d << 8 | e << 16 | a << 24
    };
    m.qe = function() {
        var a = this.Hb(),
            b = 2 * (a >> 31) + 1,
            c = a >>> 23 & 255;
        a &= 8388607;
        return 255 == c ? a ? NaN : Infinity * b : 0 == c ? b * Math.pow(2, -149) * a : b * Math.pow(2, c - 150) * (a + Math.pow(2, 23))
    };
    m.cd = function() {
        for (var a = 0, b = this.J, c = b + 10, d = this.ka; b < c;) {
            var e = d[b++];
            a |= e;
            if (0 === (e & 128)) return Bh(this, b), !!(a & 127)
        }
        throw Error("$");
    };
    m.Jf = function() {
        return Ch(this)
    };
    var Dh = function(a, b) {
        if (0 > b) throw Error("ba`" + b);
        var c = a.J,
            d = c + b;
        if (d > a.Ea) throw Error("aa`" + (a.Ea - c) + "`" + b);
        a.J = d;
        return c
    };
    zh.prototype.Lf = function(a, b) {
        var c = Dh(this, a),
            d = y(this.ka);
        if (Fg) {
            var e;
            b ? (e = Dg) || (e = Dg = new TextDecoder("utf-8", {
                fatal: !0
            })) : (e = Eg) || (e = Eg = new TextDecoder("utf-8", {
                fatal: !1
            }));
            var f = c + a;
            d = 0 === c && f === d.length ? d : d.subarray(c, f);
            try {
                var g = e.decode(d)
            } catch (q) {
                if (b) {
                    if (void 0 === Cg) {
                        try {
                            e.decode(new Uint8Array([128]))
                        } catch (r) {}
                        try {
                            e.decode(new Uint8Array([97])), Cg = !0
                        } catch (r) {
                            Cg = !1
                        }
                    }
                    b = !Cg
                }
                b && (Dg = void 0);
                throw q;
            }
        } else {
            a = c + a;
            g = [];
            for (var h = null, k, l; c < a;) k = d[c++], 128 > k ? g.push(k) : 224 > k ? c >= a ? Ag(b, g) : (l =
                d[c++], 194 > k || 128 !== (l & 192) ? (c--, Ag(b, g)) : (k = (k & 31) << 6 | l & 63, y(128 <= k && 2047 >= k), g.push(k))) : 240 > k ? c >= a - 1 ? Ag(b, g) : (l = d[c++], 128 !== (l & 192) || 224 === k && 160 > l || 237 === k && 160 <= l || 128 !== ((e = d[c++]) & 192) ? (c--, Ag(b, g)) : (k = (k & 15) << 12 | (l & 63) << 6 | e & 63, y(2048 <= k && 65535 >= k), y(55296 > k || 57343 < k), g.push(k))) : 244 >= k ? c >= a - 2 ? Ag(b, g) : (l = d[c++], 128 !== (l & 192) || 0 !== (k << 28) + (l - 144) >> 30 || 128 !== ((e = d[c++]) & 192) || 128 !== ((f = d[c++]) & 192) ? (c--, Ag(b, g)) : (k = (k & 7) << 18 | (l & 63) << 12 | (e & 63) << 6 | f & 63, y(65536 <= k && 1114111 >= k), k -= 65536, g.push((k >>
                10 & 1023) + 55296, (k & 1023) + 56320))) : Ag(b, g), 8192 <= g.length && (h = Bg(h, g), g.length = 0);
            y(c === a, "expected " + c + " === " + a);
            g = Bg(h, g)
        }
        return g
    };
    zh.prototype.pe = function(a) {
        if (0 == a) return mh || (mh = new oh(null, lh));
        var b = Dh(this, a);
        if (this.zc && this.Ad) b = this.ka.subarray(b, b + a);
        else {
            var c = y(this.ka);
            a = b + a;
            b = b === a ? kh || (kh = new Uint8Array(0)) : qh ? c.slice(b, a) : new Uint8Array(c.subarray(b, a))
        }
        fb(b, Uint8Array);
        return 0 == b.length ? mh || (mh = new oh(null, lh)) : new oh(b, lh)
    };
    var Ah = [];
    y(!0);
    var Fh = function(a, b) {
            if (Ah.length) {
                var c = Ah.pop();
                yh(c, a, b);
                a = c
            } else a = new zh(a, b);
            this.j = a;
            this.gb = this.j.U();
            this.m = this.Zc = this.Db = -1;
            Eh(this, b)
        },
        Eh = function(a, b) {
            b = void 0 === b ? {} : b;
            a.Md = void 0 === b.Md ? !1 : b.Md
        };
    Fh.prototype.gf = function() {
        this.j.clear();
        this.m = this.Db = this.Zc = -1;
        100 > Gh.length && Gh.push(this)
    };
    Fh.prototype.U = function() {
        return this.j.U()
    };
    Fh.prototype.reset = function() {
        this.j.reset();
        this.gb = this.j.U();
        this.m = this.Db = this.Zc = -1
    };
    Fh.prototype.advance = function(a) {
        this.j.advance(a)
    };
    var Hh = function(a) {
            var b = a.j;
            if (b.J == b.Ea) return !1; - 1 !== a.Zc && (b = a.j.U(), a.j.J = a.gb, a.j.Ka(), 4 === a.m || 3 === a.m ? y(b === a.j.U(), "Expected to not advance the cursor.  Group tags do not have values.") : y(b > a.j.U(), "Expected to read the field, did you forget to call a read or skip method?"), a.j.J = b);
            a.gb = a.j.U();
            b = a.j.Ka();
            var c = b >>> 3,
                d = b & 7;
            if (!(0 <= d && 5 >= d)) throw Error("W`" + d + "`" + a.gb);
            if (1 > c) throw Error("X`" + c + "`" + a.gb);
            a.Zc = b;
            a.Db = c;
            a.m = d;
            return !0
        },
        Ih = function(a) {
            switch (a.m) {
                case 0:
                    0 != a.m ? (Ya("Invalid wire type for skipVarintField"),
                        Ih(a)) : a.j.cd();
                    break;
                case 1:
                    y(1 === a.m);
                    a.j.advance(8);
                    break;
                case 2:
                    if (2 != a.m) Ya("Invalid wire type for skipDelimitedField"), Ih(a);
                    else {
                        var b = a.j.Ka();
                        a.j.advance(b)
                    }
                    break;
                case 5:
                    y(5 === a.m);
                    a.j.advance(4);
                    break;
                case 3:
                    b = a.Db;
                    do {
                        if (!Hh(a)) throw Error("Y");
                        if (4 == a.m) {
                            if (a.Db != b) throw Error("Z");
                            break
                        }
                        Ih(a)
                    } while (1);
                    break;
                default:
                    throw Error("W`" + a.m + "`" + a.gb);
            }
        };
    m = Fh.prototype;
    m.Kf = function() {
        y(0 == this.m);
        return Ch(this.j)
    };
    m.Hb = function() {
        y(0 == this.m);
        return this.j.Ka()
    };
    m.se = function() {
        y(0 == this.m);
        return this.j.Mf()
    };
    m.qe = function() {
        y(5 == this.m);
        return this.j.qe()
    };
    m.cd = function() {
        y(0 == this.m);
        return this.j.cd()
    };
    m.Jf = function() {
        y(0 == this.m);
        return Ch(this.j)
    };
    m.Lf = function() {
        return Jh(this)
    };
    var Jh = function(a) {
        y(2 == a.m);
        var b = a.j.Ka();
        return a.j.Lf(b, !0)
    };
    Fh.prototype.pe = function() {
        y(2 == this.m);
        var a = this.j.Ka();
        return this.j.pe(a)
    };
    Fh.prototype.re = function(a) {
        y(0 == this.m);
        return this.j.re(a)
    };
    var Kh = function(a, b, c) {
            y(2 == a.m);
            var d = a.j.Ka();
            for (d = a.j.U() + d; a.j.U() < d;) c.push(b.call(a.j))
        },
        Gh = [];
    var Lh = function(a, b, c) {
        this.od = a;
        this.bg = c
    };

    function Mh(a) {
        return Array.prototype.slice.call(a)
    };
    var Nh = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("INTERNAL_ARRAY_STATE") : void 0;
    y(10 === Math.log2(Math.max.apply(Math, u(Object.values({
        Li: 1,
        Ji: 2,
        Ii: 4,
        Pi: 8,
        Oi: 16,
        Ni: 32,
        yi: 64,
        Ri: 128,
        Hi: 256,
        Gi: 512,
        Ki: 1024
    })))));

    function Oh(a) {
        y((a & 2097151) == a)
    }
    var Ph = Nh ? function(a, b) {
            Oh(b);
            cb(a, "state is only maintained on arrays.");
            a[Nh] |= b
        } : function(a, b) {
            Oh(b);
            cb(a, "state is only maintained on arrays.");
            void 0 !== a.Ta ? a.Ta |= b : Object.defineProperties(a, {
                Ta: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        },
        Qh = Object.getOwnPropertyDescriptor(Array.prototype, "kh");
    Object.defineProperties(Array.prototype, {
        kh: {
            get: function() {
                function a(e, f) {
                    e & b && c.push(f)
                }
                var b = Rh(this),
                    c = [];
                a(1, "IS_REPEATED_FIELD");
                a(2, "IS_IMMUTABLE_ARRAY");
                a(4, "IS_API_FORMATTED");
                a(8, "ONLY_MUTABLE_VALUES");
                a(32, "MUTABLE_REFERENCES_ARE_OWNED");
                a(64, "CONSTRUCTED");
                a(128, "TRANSFERRED");
                a(256, "HAS_SPARSE_OBJECT");
                a(512, "HAS_MESSAGE_ID");
                var d = Sh(b);
                536870912 !== d && c.push("pivot: " + d);
                d = c.join(",");
                return Qh ? Qh.get.call(this) + "|" + d : d
            },
            configurable: !0,
            enumerable: !1
        }
    });
    var Rh = Nh ? function(a) {
        cb(a, "state is only maintained on arrays.");
        return a[Nh] | 0
    } : function(a) {
        cb(a, "state is only maintained on arrays.");
        return a.Ta | 0
    };

    function Th(a, b) {
        y(b & 64, "state for messages must be constructed");
        y(0 === (b & 5), "state for messages should not contain repeated field state");
        var c = Sh(b),
            d = a.length;
        y(c + (+!!(b & 512) - 1) >= d - 1, "pivot %s is pointing at an index earlier than the last index of the array, length: %s", c, d);
        b & 512 && y("string" === typeof a[0], "arrays with a message_id bit must have a string in the first position, got: %s", a[0]);
        a = d ? a[d - 1] : void 0;
        y((null != a && "object" === typeof a && a.constructor === Object) === !!(b & 256), "arraystate and array disagree on sparseObject presence")
    }
    var Uh = Nh ? function(a) {
            cb(a, "state is only maintained on arrays.");
            var b = a[Nh];
            Th(a, b);
            return b
        } : function(a) {
            cb(a, "state is only maintained on arrays.");
            var b = a.Ta;
            Th(a, b);
            return b
        },
        Vh = Nh ? function(a, b) {
            cb(a, "state is only maintained on arrays.");
            Oh(b);
            a[Nh] = b
        } : function(a, b) {
            cb(a, "state is only maintained on arrays.");
            Oh(b);
            void 0 !== a.Ta ? a.Ta = b : Object.defineProperties(a, {
                Ta: {
                    value: b,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        };

    function Wh(a, b) {
        Vh(b, (a | 0) & -255)
    }

    function Xh(a, b) {
        Vh(b, (a | 34) & -221)
    }

    function Yh(a, b) {
        Za(b);
        y(0 < b && 1023 >= b || 536870912 === b);
        return a & -2095105 | (b & 1023) << 11
    }

    function Sh(a) {
        a = a >> 11 & 1023;
        return 0 === a ? 536870912 : a
    };
    var Zh = {};

    function $h(a, b) {
        Za(a);
        y(0 < a);
        y(0 === b || -1 === b);
        return a + b
    }

    function ai(a, b) {
        Za(a);
        y(0 <= a);
        y(0 === b || -1 === b);
        return a - b
    }

    function bi(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var ci;

    function di(a, b, c) {
        if (!Array.isArray(a) || a.length) return !1;
        var d = Rh(a);
        if (d & 1) return !0;
        if (!(b && (Array.isArray(b) ? b.includes(c) : b.has(c)))) return !1;
        Vh(a, d | 1);
        return !0
    }
    var ei, fi = [];
    Vh(fi, 55);
    ei = Object.freeze(fi);

    function gi(a) {
        if (a & 2) throw Error("da");
    }

    function hi() {}
    var ii;

    function ji(a, b) {
        cb(a);
        cb(b);
        (b = ii ? cb(b)[ii] : void 0) && (a[ii] = Mh(b))
    }
    var ki;

    function li(a, b) {
        var c = Rh(cb(a));
        !b && c & 2 && c & 4 && y(Object.isFrozen(a));
        b = !!(c & 8);
        c = !!(c & 16 && c & 32);
        if (b || c) {
            var d, e, f;
            a.forEach(function(g) {
                Array.isArray(g) ? f = !0 : g && g.lb === Zh && (Rh(g.G) & 2 ? e = !0 : d = !0)
            });
            f && y(!e && !d);
            c && y(!f && !d);
            b && y(!f && !e)
        }
    };

    function mi(a) {
        a = Error(a);
        a.__closure__error__context__984382 || (a.__closure__error__context__984382 = {});
        a.__closure__error__context__984382.severity = "warning";
        return a
    };

    function ni(a) {
        return a.displayName || a.name || "unknown type name"
    }

    function oi(a) {
        if ("boolean" !== typeof a) throw Error("ea`" + Ia(a) + "`" + a);
        return !!a
    }

    function pi(a) {
        if (null == a) return a;
        if ("boolean" === typeof a || "number" === typeof a) return !!a
    }
    var qi = /^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;

    function ri(a) {
        var b = typeof a;
        return "number" === b ? Number.isFinite(a) : "string" !== b ? !1 : qi.test(a)
    }

    function si(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a | 0 : void 0
    }

    function ti(a) {
        return "Expected uint32 as finite number but got " + Ia(a) + ": " + a
    }

    function ui(a) {
        if (null == a) return a;
        if ("string" === typeof a) {
            if (!a) return;
            a = +a
        }
        if ("number" === typeof a) return Number.isFinite(a) ? a >>> 0 : void 0
    }

    function vi(a) {
        if (null == a) return a;
        if (ri(a)) {
            if ("string" === typeof a) {
                y(ri(a));
                var b = Math.trunc(Number(a));
                if (Number.isSafeInteger(b) && 0 <= b) a = String(b);
                else {
                    b = a.indexOf("."); - 1 !== b && (a = a.substring(0, b));
                    y(0 < a.length);
                    if (16 > a.length) th(Number(a));
                    else if ("function" === typeof BigInt) a = BigInt(a), rh = Number(a & BigInt(4294967295)) >>> 0, sh = Number(a >> BigInt(32) & BigInt(4294967295));
                    else {
                        y(0 < a.length);
                        b = +("-" === a[0]);
                        sh = rh = 0;
                        for (var c = a.length, d = 0 + b, e = (c - b) % 6 + b; e <= c; d = e, e += 6) d = Number(a.slice(d, e)), sh *= 1E6, rh = 1E6 *
                            rh + d, 4294967296 <= rh && (sh += Math.trunc(rh / 4294967296), sh >>>= 0, rh >>>= 0);
                        b && (b = t(uh(rh, sh)), a = b.next().value, b = b.next().value, rh = a, sh = b)
                    }
                    a = wh()
                }
                return a
            }
            if ("number" === typeof a) return y(ri(a)), a = Math.trunc(a), th(a), 0 > a ? (b = wh(), a = Number(b), a = Number.isSafeInteger(a) ? a : b) : a = vh(rh, sh), a
        }
    }

    function wi(a) {
        return null == a || "string" === typeof a ? a : void 0
    }

    function xi(a) {
        var b = Xa(yi);
        if (!(a instanceof b)) throw Error("ga`" + ni(b) + "`" + (a && ni(a.constructor)));
    }
    var zi = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol("defaultInstance") : "di";
    var Ai;

    function Bi(a, b) {
        y(!!(Rh(b) & 32));
        Ai = b;
        a = new a(b);
        Ai = void 0;
        return a
    }
    var Ci, Di;

    function Ei(a) {
        switch (typeof a) {
            case "boolean":
                return Ci || (Ci = [0, void 0, !0]);
            case "number":
                return 0 < a ? void 0 : 0 === a ? Di || (Di = [0, void 0]) : [-a, void 0];
            case "string":
                return [0, a];
            case "object":
                return cb(a), y(2 === a.length || 3 === a.length && !0 === a[2]), y(null == a[0] || "number" === typeof a[0] && 0 <= a[0]), y(null == a[1] || "string" === typeof a[1]), a
        }
    }

    function Fi(a, b) {
        cb(b);
        return Gi(a, b[0], b[1])
    }

    function Gi(a, b, c) {
        null == a && (a = Ai);
        Ai = void 0;
        if (null != a)
            for (var d = 0; d < a.length; d++) {
                var e = a[d];
                Array.isArray(e) && li(e)
            }
        if (null == a) e = 96, c ? (a = [c], e |= 512) : a = [], b && (e = Yh(e, b));
        else {
            if (!Array.isArray(a)) throw Error("ha`" + JSON.stringify(a) + "`" + Ia(a));
            if (Object.isFrozen(a) || !Object.isExtensible(a) || Object.isSealed(a)) throw Error("ia");
            e = Rh(a);
            if (e & 64) return Th(a, e), ki && delete a[ki], a;
            e |= 64;
            if (c && (e |= 512, c !== a[0])) throw Error("ja`" + c + "`" + JSON.stringify(a[0]) + "`" + Ia(a[0]));
            a: {
                d = a;c = e;
                if (e = d.length) {
                    var f =
                        e - 1;
                    if (bi(d[f])) {
                        c |= 256;
                        b = ai(f, +!!(c & 512) - 1);
                        if (1024 <= b) throw Error("ka`" + b);
                        e = Yh(c, b);
                        break a
                    }
                }
                if (b) {
                    b = Math.max(b, ai(e, +!!(c & 512) - 1));
                    if (1024 < b) throw Error("la`" + e);
                    e = Yh(c, b)
                } else e = c
            }
        }
        Vh(a, e);
        y(e & 64);
        return a
    };
    var Hi = function() {
        throw Error("ma");
    };
    if ("undefined" != typeof Symbol && "undefined" != typeof Symbol.hasInstance) {
        var Ii = function() {
                throw Error("na");
            },
            Ji = {};
        Object.defineProperties(Hi, (Ji[Symbol.hasInstance] = {
            value: Ii,
            configurable: !1,
            writable: !1,
            enumerable: !1
        }, Ji));
        y(Hi[Symbol.hasInstance] === Ii, "defineProperties did not work: was it monkey-patched?")
    };

    function Ki(a, b) {
        return Li(b)
    }

    function Li(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "boolean":
                return a ? 1 : 0;
            case "object":
                if (a) {
                    if (Array.isArray(a)) return di(a, void 0, 9999) ? void 0 : a;
                    if (ch && null != a && a instanceof Uint8Array) return eh(a);
                    if (a instanceof oh) {
                        var b = a.sc;
                        return null == b ? "" : "string" === typeof b ? b : a.sc = eh(b)
                    }
                }
        }
        return a
    };

    function Mi(a, b, c) {
        var d = Mh(a),
            e = d.length,
            f = b & 256 ? d[e - 1] : void 0;
        e += f ? -1 : 0;
        for (b = b & 512 ? 1 : 0; b < e; b++) d[b] = c(d[b]);
        if (f) {
            b = d[b] = {};
            for (var g in f) y(!isNaN(g), "should not have non-numeric keys in sparse objects after a constructor is called."), b[g] = c(f[g])
        }
        ji(d, a);
        return d
    }

    function Ni(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a)) a = e && 0 == a.length && Rh(a) & 1 ? void 0 : f && Rh(a) & 2 ? a : Oi(a, b, c, void 0 !== d, e, f);
            else if (bi(a)) {
                var g = {},
                    h;
                for (h in a) g[h] = Ni(a[h], b, c, d, e, f);
                a = g
            } else a = b(a, d);
            return a
        }
    }

    function Oi(a, b, c, d, e, f) {
        var g = d || c ? Rh(a) : 0;
        d = d ? !!(g & 32) : void 0;
        for (var h = Mh(a), k = 0; k < h.length; k++) h[k] = Ni(h[k], b, c, d, e, f);
        c && (ji(h, a), c(g, h));
        return h
    }

    function Pi(a) {
        return a.lb === Zh ? a.toJSON() : Li(a)
    };

    function Qi(a, b, c) {
        c = void 0 === c ? Xh : c;
        if (null != a) {
            if (ch && a instanceof Uint8Array) return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                var d = Rh(a);
                if (d & 2) return a;
                li(a);
                b && (b = 0 === d || !!(d & 32) && !(d & 64 || !(d & 16)));
                return b ? (Vh(a, (d | 34) & -5), a) : Oi(a, Qi, d & 4 ? Xh : c, !0, !1, !0)
            }
            a.lb === Zh && (y(a.lb === Zh), c = a.G, d = Uh(c), a = d & 2 ? a : Bi(a.constructor, Ri(c, d, !0)));
            return a
        }
    }

    function Ri(a, b, c) {
        var d = c || b & 2 ? Xh : Wh,
            e = !!(b & 32);
        a = Mi(a, b, function(f) {
            return Qi(f, e, d)
        });
        Ph(a, 32 | (c ? 2 : 0));
        return a
    }

    function Si(a) {
        var b = a.G,
            c = Uh(b);
        return c & 2 ? Bi(a.constructor, Ri(b, c, !1)) : a
    };
    var Ui = function(a, b) {
            a = a.G;
            return Ti(a, Uh(a), b)
        },
        Ti = function(a, b, c, d) {
            if (-1 === c) return null;
            if (c >= Sh(b)) {
                if (b & 256) return a[a.length - 1][c]
            } else {
                var e = a.length;
                if (d && b & 256 && (d = a[e - 1][c], null != d)) return d;
                b = $h(c, +!!(b & 512) - 1);
                if (b < e) return a[b]
            }
        },
        Wi = function(a, b, c) {
            var d = a.G,
                e = Uh(d);
            gi(e);
            Vi(d, e, b, c);
            return a
        };

    function Vi(a, b, c, d) {
        y(!bi(d), "Invalid object passed to a setter");
        var e = Sh(b);
        if (c >= e) {
            y(536870912 !== e);
            var f = b;
            if (b & 256) e = a[a.length - 1];
            else {
                if (null == d) return;
                e = $h(e, +!!(b & 512) - 1);
                y(e >= a.length && Number.isInteger(e) && 4294967295 > e, "Expected sparseObjectIndex (%s) to be >= %s and a valid array index", e, a.length);
                e = a[e] = {};
                f |= 256
            }
            e[c] = d;
            f !== b && Vh(a, f)
        } else a[$h(c, +!!(b & 512) - 1)] = d, b & 256 && (a = a[a.length - 1], c in a && delete a[c])
    }

    function Xi(a, b) {
        if (!a) return a;
        y(Rh(b) & 2 ? !!(Rh(a.G) & 2) : !0);
        return a
    }
    var Yi = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = Uh(a);
            y(!0);
            var e = d & 2;
            c = Ti(a, d, b, c);
            Array.isArray(c) || (c = ei);
            var f = !!(d & 32),
                g = Rh(c);
            0 === g && f && !e ? (g |= 33, Vh(c, g)) : g & 1 || (g |= 1, Vh(c, g));
            e ? (g & 2 || Ph(c, 34), Object.freeze(c)) : g & 2 && (c = Mh(c), e = 1, f && (e |= 32), Vh(c, e), Vi(a, d, b, c));
            b = c;
            d = !1;
            e = !0;
            d = void 0 === d ? !1 : d;
            e = void 0 === e ? !1 : e;
            li(b, d);
            d || (e || y(Object.isFrozen(b) || !(Rh(b) & 32)), y(Rh(a) & 2 ? Object.isFrozen(b) : !0));
            return b
        },
        Zi = function(a, b, c, d) {
            a = a.G;
            var e = Uh(a);
            d = Ti(a, e, c, d);
            var f = !1;
            if (null == d || "object" !== typeof d ||
                (f = Array.isArray(d)) || d.lb !== Zh)
                if (f) {
                    var g = f = Rh(d);
                    0 === g && (g |= e & 32);
                    g |= e & 2;
                    g !== f && Vh(d, g);
                    b = new b(d)
                } else b = void 0;
            else b = d;
            b !== d && null != b && Vi(a, e, c, b);
            return Xi(b, a)
        },
        aj = function(a) {
            var b = $i;
            (a = Zi(a, b, 2, !1)) ? b = a: (a = b[zi]) ? b = a : (a = new b, Ph(a.G, 34), b = b[zi] = a);
            return b
        },
        bj = function(a, b, c) {
            b = Zi(a, b, c, !1);
            if (null == b) return b;
            a = a.G;
            var d = Uh(a);
            if (!(d & 2)) {
                var e = Si(b);
                e !== b && (b = e, Vi(a, d, c, b))
            }
            return Xi(b, a)
        };

    function cj(a, b) {
        return null != a ? a : b
    }
    var dj = function(a, b, c) {
            c = void 0 === c ? !1 : c;
            return cj(pi(Ui(a, b)), c)
        },
        ej = function(a, b) {
            var c = void 0 === c ? 0 : c;
            return cj(si(Ui(a, b)), c)
        },
        fj = function(a) {
            a = wi(Ui(a, 3));
            return null == a ? void 0 : a
        },
        gj = function(a, b) {
            if (null != b) {
                if ("number" !== typeof b) throw mi(ti(b));
                if (!Number.isFinite(b)) throw mi(ti(b));
                b >>>= 0
            }
            Wi(a, 1, b)
        },
        hj = function(a, b, c) {
            if (null != c && "string" !== typeof c) throw Error("fa`" + c + "`" + Ia(c));
            return Wi(a, b, c)
        };
    if ("undefined" !== typeof Proxy) {
        var jj = ij;
        new Proxy({}, {
            getPrototypeOf: jj,
            setPrototypeOf: jj,
            isExtensible: jj,
            preventExtensions: jj,
            getOwnPropertyDescriptor: jj,
            defineProperty: jj,
            has: jj,
            get: jj,
            set: jj,
            deleteProperty: jj,
            apply: jj,
            construct: jj
        })
    }

    function ij() {
        throw Error("oa");
        throw Error();
    };
    var kj = function(a, b, c) {
        fb(this, kj, "The message constructor should only be used by subclasses");
        y(this.constructor !== kj, "Message is an abstract class and cannot be directly constructed");
        this.G = Gi(a, b, c);
        this.preventPassingToStructuredClone = hi
    };
    m = kj.prototype;
    m.toJSON = function() {
        if (ci) var a = lj(this, this.G, !1);
        else a = this.G, cb(a), a = Oi(a, Pi, void 0, void 0, !1, !1), a = lj(this, a, !0);
        return a
    };
    m.pb = function() {
        ci = !0;
        try {
            return JSON.stringify(this.toJSON(), Ki)
        } finally {
            ci = !1
        }
    };
    m.getExtension = function(a) {
        fb(this, a.Lg);
        var b = fb(this, kj);
        b = a.Tb ? a.Mc(b, a.Tb, a.Ub, !0) : a.yf ? a.Mc(b, a.Ub, !0) : a.Mc(b, a.Ub, a.defaultValue, !0);
        return a.Zi && null == b ? a.defaultValue : b
    };
    m.hasExtension = function(a) {
        y(!a.yf, "repeated extensions don't support hasExtension");
        if (a.Tb) a = void 0 !== Zi(this, a.Tb, a.Ub, !0);
        else {
            y(!a.yf, "repeated extensions don't support getExtensionOrUndefined");
            fb(this, a.Lg);
            var b = fb(this, kj);
            a = a.Tb ? a.Mc(b, a.Tb, a.Ub, !0) : a.Mc(b, a.Ub, null, !0);
            a = void 0 !== (null === a ? void 0 : a)
        }
        return a
    };
    m.clone = function() {
        var a = fb(this, kj);
        y(a.lb === Zh);
        var b = a.G,
            c = Uh(b);
        return Bi(a.constructor, Ri(b, c, !1))
    };
    m.ib = function() {
        return !!(Rh(this.G) & 2)
    };
    m.lb = Zh;
    m.toString = function() {
        return lj(this, this.G, !1).toString()
    };

    function lj(a, b, c) {
        var d = a.constructor.Uh,
            e = Uh(c ? a.G : b);
        a = b.length;
        if (!a) return b;
        var f;
        if (bi(c = b[a - 1])) {
            a: {
                var g = c;
                var h = {},
                    k = !1,
                    l;
                for (l in g) {
                    var q = g[l];
                    if (Array.isArray(q)) {
                        var r = q;
                        di(q, d, +l) && (q = null);
                        q != r && (k = !0)
                    }
                    null != q ? h[l] = q : k = !0
                }
                if (k) {
                    for (var p in h) {
                        g = h;
                        break a
                    }
                    g = null
                }
            }
            g != c && (f = !0);a--
        }
        for (l = +!!(e & 512) - 1; 0 < a; a--) {
            p = a - 1;
            c = b[p];
            if (null != c && !di(c, d, p - l)) break;
            var x = !0
        }
        if (!f && !x) return b;
        b = Array.prototype.slice.call(b, 0, a);
        g && b.push(g);
        return b
    };

    function mj(a, b, c) {
        if (Array.isArray(b)) {
            var d = Rh(b);
            if (d & 4) return b;
            for (var e = 0, f = 0; e < b.length; e++) {
                var g = a(b[e]);
                null != g && (b[f++] = g)
            }
            f < e && (b.length = f);
            c && (Vh(b, d | 5), d & 2 && Object.freeze(b));
            return b
        }
    }
    var nj = Symbol("deserializeBinaryFromReaderCache");

    function oj(a) {
        var b = a[nj];
        if (!b) {
            var c = pj(a),
                d = qj(a),
                e = d.th;
            b = e ? function(f, g) {
                return e(f, g, d)
            } : function(f, g) {
                for (; Hh(g) && 4 != g.m;) {
                    var h = g.Db,
                        k = d[h];
                    if (!k) {
                        var l = d.ef;
                        l && (l = l[h]) && (k = d[h] = rj(l))
                    }
                    if (!k || !k(g, f, h)) {
                        k = g;
                        h = k.gb;
                        Ih(k);
                        if (k.Md) k = void 0;
                        else {
                            l = k.j.U();
                            var q = l - h;
                            k.j.J = h;
                            h = k.j.pe(q);
                            y(l == k.j.U());
                            k = h
                        }
                        h = f;
                        cb(h);
                        k && (ii || (ii = Symbol("unknownBinaryFields")), (l = h[ii]) ? l.push(k) : h[ii] = [k])
                    }
                }
                for (var r in c) {
                    f[ki || (ki = Symbol("JSPB_COMPARISON_TYPE_INFO"))] = c;
                    break
                }
            };
            a[nj] = b
        }
        return b
    }

    function sj(a) {
        if (a = a.sg) return oj(a)
    }

    function rj(a) {
        var b = sj(a),
            c = a.dj.od;
        if (b) {
            var d = qj(y(a.sg)).je;
            return function(e, f, g) {
                return c(e, f, g, d, b)
            }
        }
        return function(e, f, g) {
            return c(e, f, g)
        }
    }
    var tj = Symbol("comparisonTypeInfoCache");

    function uj(a, b, c, d) {
        if (d) {
            var e = d[tj];
            var f = e ? e.je : y(Ei(d[0]));
            c[a] = null != e ? e : d
        }
        f && f === Ci ? (b = c.nh, b || (c.nh = b = []), cb(b).push(a)) : b.bg && (b = c.Th, b || (c.Th = b = []), cb(b).push(a))
    }

    function vj(a, b, c, d) {
        uj(a, b, y(d))
    }

    function wj(a, b, c, d, e) {
        uj(a, b, y(e), c)
    }

    function pj(a) {
        var b = a[tj];
        if (b) return b;
        b = a[tj] = {};
        return b = xj(a, b, vj, wj, b)
    }

    function xj(a, b, c, d, e) {
        cb(a);
        b.je = y(Ei(a[0]));
        var f = 1;
        if (a.length > f && !(a[f] instanceof Lh)) {
            var g = a[f++];
            if (Array.isArray(g)) return y(2 === g.length), b.th = ab(g[0]), c = bb(g[1]), y(c.constructor === Object), b.ef = c, y(2 === a.length), b;
            g = bb(g);
            y(g.constructor === Object);
            b.ef = g
        }
        for (g = 0; f < a.length;) {
            var h = fb(a[f++], Lh),
                k = a[f];
            "number" === typeof k ? (f++, g += k) : g++;
            for (k = f; k < a.length && !(a[k] instanceof Lh);) k++;
            var l = k - f;
            y(0 <= l && 3 > l);
            if (l) {
                var q = a,
                    r = f,
                    p = q[r];
                "function" == typeof p && (y(0 === p.length), p = p(), q[r] = p);
                if ((q = Array.isArray(p)) &&
                    !(q = yj in p || zj in p) && (q = 0 < p.length)) {
                    q = p;
                    r = q[0];
                    var x = Ei(r);
                    null != x && x !== r && (q[0] = x);
                    q = null != x
                }(p = q ? p : void 0) ? (f++, 1 === l ? (h = d(g, h, p, void 0, e), void 0 !== h && (b[g] = h)) : (h = d(g, h, p, cb(a[f++]), e), void 0 !== h && (b[g] = h))) : (h = c(g, h, cb(a[f++]), e), void 0 !== h && (b[g] = h))
            } else h = c(g, h, void 0, e), void 0 !== h && (b[g] = h);
            y(f == k)
        }
        return b
    }
    var zj = Symbol("serializerFnCache"),
        yj = Symbol("deserializerFnCache");

    function Aj(a, b, c) {
        var d = b.od;
        return c ? function(e, f, g) {
            return d(e, f, g, c)
        } : d
    }

    function Bj(a, b, c, d) {
        var e = b.od,
            f, g;
        return function(h, k, l) {
            return e(h, k, l, g || (g = qj(c).je), f || (f = oj(c)), d)
        }
    }

    function qj(a) {
        var b = a[yj];
        if (b) return b;
        pj(a);
        b = xj(a, a[yj] = {}, Aj, Bj);
        yj in a && zj in a && (a.length = 0);
        return b
    }

    function Cj(a, b) {
        return new Lh(a, b, !1)
    }

    function Dj(a, b, c) {
        Vi(a, Uh(a), b, c)
    }
    var Ej = Cj(function(a, b, c) {
            if (5 !== a.m) return !1;
            Dj(b, c, a.qe());
            return !0
        }, function(a, b, c) {
            b = null == b ? b : "number" === typeof b || "NaN" === b || "Infinity" === b || "-Infinity" === b ? Number(b) : void 0;
            a.lj(c, b)
        }),
        Fj = Cj(function(a, b, c) {
            if (0 !== a.m) return !1;
            Dj(b, c, a.se());
            return !0
        }, function(a, b, c) {
            a.sj(c, vi(b))
        }),
        Gj;
    Gj = new Lh(function(a, b, c) {
        if (0 !== a.m && 2 !== a.m) return !1;
        b = Yi(b, c);
        2 == a.m ? Kh(a, zh.prototype.Mf, b) : b.push(a.se());
        return !0
    }, function(a, b, c) {
        a.pj(c, mj(vi, b, !1))
    }, !0);
    var Hj = Cj(function(a, b, c) {
            if (0 !== a.m) return !1;
            Dj(b, c, a.Kf());
            return !0
        }, function(a, b, c) {
            a.mj(c, si(b))
        }),
        Ij = Cj(function(a, b, c) {
            if (0 !== a.m) return !1;
            Dj(b, c, a.cd());
            return !0
        }, function(a, b, c) {
            a.jj(c, pi(b))
        }),
        Jj = Cj(function(a, b, c) {
            if (2 !== a.m) return !1;
            Dj(b, c, Jh(a));
            return !0
        }, function(a, b, c) {
            a.qj(c, wi(b))
        }),
        Kj = Cj(function(a, b, c, d, e) {
            if (2 !== a.m) return !1;
            var f = Uh(b);
            gi(f);
            var g = Ti(b, f, c);
            if (null != g && g.lb === Zh) d = Si(g), d !== g && Vi(b, f, c, d), b = d.G;
            else {
                if (Array.isArray(g)) {
                    var h = Rh(g);
                    h = h & 2 ? Ri(g, h, !1) : g;
                    h = Fi(h, d)
                } else h =
                    Fi(void 0, d);
                h !== g && Vi(b, f, c, h);
                b = h
            }
            y(2 == a.m);
            c = a.j.Ea;
            f = a.j.Ka();
            g = a.j.U() + f;
            d = g - c;
            0 >= d && (a.j.setEnd(g), e(b, a, void 0, void 0, void 0), d = g - a.j.U());
            if (d) throw Error("V`" + f + "`" + (f - d));
            a.j.J = g;
            a.j.setEnd(c);
            return !0
        }, function(a, b, c, d, e) {
            a.nj(c, b instanceof kj ? b.G : Array.isArray(b) ? Fi(b, d) : void 0, e)
        }),
        Lj = Cj(function(a, b, c) {
            if (0 !== a.m) return !1;
            Dj(b, c, a.Hb());
            return !0
        }, function(a, b, c) {
            a.rj(c, ui(b))
        }),
        Mj;
    Mj = new Lh(function(a, b, c) {
        if (0 !== a.m && 2 !== a.m) return !1;
        b = Yi(b, c);
        2 == a.m ? Kh(a, zh.prototype.Ka, b) : b.push(a.Hb());
        return !0
    }, function(a, b, c) {
        a.oj(c, mj(ui, b, !0))
    }, !0);
    var Nj = Cj(function(a, b, c) {
        if (0 !== a.m) return !1;
        Dj(b, c, a.Jf());
        return !0
    }, function(a, b, c) {
        a.kj(c, si(b))
    });

    function Oj(a) {
        if (a instanceof kj) return a.constructor.Ua
    };

    function Pj(a, b) {
        b = void 0 === b ? new Set : b;
        if (b.has(a)) return "(Recursive reference)";
        switch (typeof a) {
            case "object":
                if (a) {
                    var c = Object.getPrototypeOf(a);
                    switch (c) {
                        case Map.prototype:
                        case Set.prototype:
                        case Array.prototype:
                            b.add(a);
                            var d = "[" + Array.from(a, function(e) {
                                return Pj(e, b)
                            }).join(", ") + "]";
                            b.delete(a);
                            c !== Array.prototype && (d = Qj(c.constructor) + "(" + d + ")");
                            return d;
                        case Object.prototype:
                            return b.add(a), c = "{" + Object.entries(a).map(function(e) {
                                var f = t(e);
                                e = f.next().value;
                                f = f.next().value;
                                return e +
                                    ": " + Pj(f, b)
                            }).join(", ") + "}", b.delete(a), c;
                        default:
                            return d = "Object", c && c.constructor && (d = Qj(c.constructor)), "function" === typeof a.toString && a.toString !== Object.prototype.toString ? d + "(" + String(a) + ")" : "(object " + d + ")"
                    }
                }
                break;
            case "function":
                return "function " + Qj(a);
            case "number":
                if (!Number.isFinite(a)) return String(a);
                break;
            case "bigint":
                return a.toString(10) + "n";
            case "symbol":
                return a.toString()
        }
        return JSON.stringify(a)
    }

    function Qj(a) {
        var b = a.name;
        b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : "(Anonymous)");
        return b
    };

    function Rj(a, b) {
        a.lf = "function" === typeof b ? b : function() {
            return b
        };
        return a
    }
    var Sj = void 0;

    function Tj() {
        throw Error(w.apply(0, arguments).map(function(a) {
            return "function" === typeof a ? a() : a
        }).filter(function(a) {
            return a
        }).join("\n").trim().replace(/:$/, ""));
    };
    (function() {
        var a = Ha.jspbGetTypeName;
        Ha.jspbGetTypeName = a ? function(b) {
            return a(b) || Oj(b)
        } : Oj
    })();
    var Uj = kj;
    var Vj = function(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    };
    m = Vj.prototype;
    m.clone = function() {
        return new Vj(this.x, this.y)
    };
    m.toString = function() {
        return "(" + this.x + ", " + this.y + ")"
    };
    m.equals = function(a) {
        return a instanceof Vj && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.translate = function(a, b) {
        a instanceof Vj ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };
    var Wj = function(a, b) {
        this.width = a;
        this.height = b
    };
    m = Wj.prototype;
    m.clone = function() {
        return new Wj(this.width, this.height)
    };
    m.toString = function() {
        return "(" + this.width + " x " + this.height + ")"
    };
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.Uc = function() {
        return !(this.width * this.height)
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };
    var Zj = function(a) {
            return a ? new Xj(Yj(a)) : Ua || (Ua = new Xj)
        },
        ak = function(a) {
            var b = a.scrollingElement ? a.scrollingElement : Mg || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
            a = a.parentWindow || a.defaultView;
            return Jg && a.pageYOffset != b.scrollTop ? new Vj(b.scrollLeft, b.scrollTop) : new Vj(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
        },
        bk = function(a, b, c) {
            function d(h) {
                h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
            }
            for (var e = 1; e < c.length; e++) {
                var f = c[e];
                if (!Ja(f) ||
                    Ka(f) && 0 < f.nodeType) d(f);
                else {
                    a: {
                        if (f && "number" == typeof f.length) {
                            if (Ka(f)) {
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
                    gb(g ? kb(f) : f, d)
                }
            }
        },
        Yj = function(a) {
            y(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        ck = function(a, b) {
            a && (a = a.parentNode);
            for (var c = 0; a;) {
                y("parentNode" != a.name);
                if (b(a)) return a;
                a = a.parentNode;
                c++
            }
            return null
        },
        Xj = function(a) {
            this.yb = a || Ha.document ||
                document
        };
    m = Xj.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.yb).getElementsByTagName(String(a))
    };
    m.createElement = function(a) {
        var b = this.yb;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    m.createTextNode = function(a) {
        return this.yb.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        y(null != a && null != b, "goog.dom.appendChild expects non-null arguments");
        a.appendChild(b)
    };
    m.append = function(a, b) {
        bk(Yj(a), a, arguments)
    };
    m.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    var ek = function() {
            return Bb && Kb ? Kb.mobile : !dk() && (E("iPod") || E("iPhone") || E("Android") || E("IEMobile"))
        },
        dk = function() {
            return Bb && Kb ? !Kb.mobile && (E("iPad") || E("Android") || E("Silk")) : E("iPad") || E("Android") && !E("Mobile") || E("Silk")
        };
    var fk = function(a) {
        try {
            return !!a && null != a.location.href && Hg(a, "foo")
        } catch (b) {
            return !1
        }
    };

    function gk() {
        var a = void 0 === a ? Ha : a;
        return (a = a.performance) && a.now ? a.now() : null
    };
    var hk = function(a, b) {
            b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
            2048 > b.length && b.push(a)
        },
        ik = function(a, b) {
            var c = void 0 === c ? !1 : c;
            var d = window,
                e = "undefined" !== typeof queueMicrotask;
            return function() {
                c && e && queueMicrotask(function() {
                    d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1;
                    d.google_rum_task_id_counter += 1
                });
                var f = gk(),
                    g = 3;
                try {
                    var h = b.apply(this, arguments)
                } catch (l) {
                    throw g = 13, l;
                } finally {
                    if (d.google_measure_js_timing && f) {
                        var k = gk() || 0;
                        hk(Object.assign({}, {
                            label: a.toString(),
                            value: f,
                            duration: k - f,
                            type: g
                        }, c && e && {
                            taskId: d.google_rum_task_id_counter = d.google_rum_task_id_counter || 1
                        }), d)
                    }
                }
                return h
            }
        };
    var jk = function() {
        Oa.apply(this, arguments)
    };
    v(jk, Oa);
    jk.prototype.Na = function(a, b) {
        return Oa.prototype.Na.call(this, a, ik(a, b))
    };

    function kk(a, b) {
        return function(c) {
            return new K(function(d) {
                return c.subscribe(function(e) {
                    a.Na(b, function() {
                        d.next(e)
                    })()
                }, function(e) {
                    a.Na(b, function() {
                        d.error(e)
                    })()
                }, function() {
                    a.Na(b, function() {
                        d.complete()
                    })()
                })
            })
        }
    };
    var mk = function() {
        for (var a = t(w.apply(0, arguments)), b = a.next(); !b.done; b = a.next())
            if (b = b.value, b.wa()) {
                this.l = b;
                return
            }
        this.l = new lk
    };
    m = mk.prototype;
    m.wa = function() {
        return this.l.wa()
    };
    m.now = function() {
        return this.l.now()
    };
    m.setTimeout = function(a, b) {
        return this.l.setTimeout(a, b)
    };
    m.clearTimeout = function(a) {
        this.l.clearTimeout(a)
    };
    m.interval = function(a, b) {
        var c = this.Va(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    m.Va = function(a) {
        return this.l.Va(a)
    };
    da.Object.defineProperties(mk.prototype, {
        timeline: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.l.timeline
            }
        }
    });
    var lk = function() {
        this.timeline = Symbol()
    };
    m = lk.prototype;
    m.wa = function() {
        return !1
    };
    m.now = function() {
        return new ke(0, this.timeline)
    };
    m.setTimeout = function() {
        return 0
    };
    m.clearTimeout = function() {};
    m.interval = function() {
        return function() {}
    };
    m.Va = function() {
        return wd
    };
    var nk = function(a, b) {
        this.H = a;
        this.A = b
    };
    m = nk.prototype;
    m.setTimeout = function(a, b) {
        return this.H.setTimeout(this.A.Na(734, a), b)
    };
    m.clearTimeout = function(a) {
        this.H.clearTimeout(a)
    };
    m.interval = function(a, b) {
        var c = this.Va(a).subscribe(b);
        return function() {
            return void c.unsubscribe()
        }
    };
    m.Va = function(a) {
        var b = this;
        return new K(function(c) {
            var d = 0,
                e = b.H.setInterval(function() {
                    c.next(d++)
                }, a);
            return function() {
                b.H.clearInterval(e)
            }
        })
    };
    m.wa = function() {
        return !!this.H.clearTimeout && "setTimeout" in this.H && "setInterval" in this.H && !!this.H.clearInterval
    };
    var ok = function(a, b) {
        nk.call(this, a, b);
        this.timeline = je
    };
    v(ok, nk);
    ok.prototype.now = function() {
        return new ke(this.H.Date.now(), this.timeline)
    };
    ok.prototype.wa = function() {
        return !!this.H.Date && !!this.H.Date.now && nk.prototype.wa.call(this)
    };
    var pk = function(a, b) {
        nk.call(this, a, b);
        this.timeline = ie
    };
    v(pk, nk);
    pk.prototype.now = function() {
        return new ke(this.H.performance.now(), this.timeline)
    };
    pk.prototype.wa = function() {
        return !!this.H.performance && !!this.H.performance.now && nk.prototype.wa.call(this)
    };
    var qk = function(a) {
        this.context = a
    };
    qk.prototype.K = function() {
        return !rk(this.context) && !!this.context.global.fetch
    };
    qk.prototype.ping = function() {
        var a = this;
        return ud.apply(null, u(w.apply(0, arguments).map(function(b) {
            return id(a.context.global.fetch(b, {
                method: "GET",
                cache: "no-cache",
                keepalive: !0,
                mode: "no-cors"
            })).g(O(function(c) {
                return 200 === c.status
            }))
        }))).g(Me(function(b) {
            return b
        }), Ve())
    };
    qk.prototype.bd = function(a, b, c) {
        for (var d = w.apply(3, arguments), e = this, f = new Headers, g = t(b.entries()), h = g.next(); !h.done; h = g.next()) {
            var k = t(h.value);
            h = k.next().value;
            k = k.next().value;
            f.set(h, k)
        }
        var l, q = null != (l = a.Af) ? l : !1;
        ud.apply(null, u(d.map(function(r) {
            return id(e.context.global.fetch(r, Object.assign({}, {
                method: String(a.ub),
                cache: "no-cache"
            }, q ? {
                keepalive: !0
            } : {}, {
                mode: "no-cors",
                headers: f,
                body: c
            }))).g(O(function(p) {
                return 200 === p.status
            }))
        }))).g(Me(function(r) {
            return r
        }), Ve())
    };
    var sk = function(a) {
        this.context = a
    };
    sk.prototype.K = function(a) {
        return (null == a ? 0 : a.Ac) || "POST" === (null == a ? void 0 : a.ub) || (null == a ? 0 : a.wb) || (null == a ? 0 : a.Jd) || (null == a ? 0 : a.Af) ? !1 : !rk(this.context)
    };
    sk.prototype.ping = function() {
        var a = this;
        return M(w.apply(0, arguments).map(function(b) {
            try {
                var c = a.context.global;
                c.google_image_requests || (c.google_image_requests = []);
                var d = c.document;
                d = void 0 === d ? document : d;
                var e = d.createElement("img");
                e.src = b;
                c.google_image_requests.push(e);
                return !0
            } catch (f) {
                return !1
            }
        }).every(function(b) {
            return b
        }))
    };
    sk.prototype.bd = function(a, b, c) {
        this.ping.apply(this, u(w.apply(3, arguments)))
    };

    function tk(a) {
        a = a.global;
        if (a.PendingGetBeacon) return a.PendingGetBeacon
    }
    var wk = function(a) {
            this.context = a;
            if (void 0 === uk) {
                var b, c, d = null == (b = a.global) ? void 0 : null == (c = b.document) ? void 0 : c.createElement("meta");
                try {
                    d && (d.httpEquiv = "origin-trial", d.content = "A/6hmwx8DpHud613fSYYa2C2T61iC513V4BYG/pBH4zs5sGsUc9RgaPKhfk3JhHF30N/9/NntWzEq28kkrMxpgQAAABweyJvcmlnaW4iOiJodHRwczovL2FkLmRvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUGVuZGluZ0JlYWNvbkFQSSIsImV4cGlyeSI6MTY3ODIzMzU5OSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", a.global.document.head.append(d))
                } catch (e) {}
                uk = d
            }
            vk = !0
        },
        uk;
    wk.prototype.K = function(a) {
        return vk && !rk(this.context) && void 0 !== tk(this.context) && !(null == a ? 0 : a.Ac) && "POST" !== (null == a ? void 0 : a.ub) && !(null == a ? 0 : a.wb) && !(null == a ? 0 : a.Jd)
    };
    wk.prototype.S = function(a, b) {
        if (!this.K(b)) throw new Zd;
        return new xk(this.context, a)
    };
    var vk = !1,
        xk = function(a, b) {
            this.context = a;
            this.Ce = b;
            a = tk(this.context);
            if (void 0 === a) throw Error();
            this.He = new a(yk(this), {})
        },
        yk = function(a) {
            a = a.Ce;
            return ("&" === a.slice(-1)[0] ? a : a + "&") + "pbapi=1"
        };
    xk.prototype.deactivate = function() {
        this.He.deactivate()
    };
    xk.prototype.sendNow = function() {
        this.He.sendNow()
    };
    da.Object.defineProperties(xk.prototype, {
        url: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Ce
            },
            set: function(a) {
                this.Ce = a;
                this.He.setURL(yk(this))
            }
        },
        method: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "GET"
            },
            set: function(a) {
                if ("GET" !== a) throw new Zd;
            }
        }
    });
    var zk = function(a) {
        this.context = a
    };
    zk.prototype.K = function(a) {
        if ((null == a ? 0 : a.Ac) || "GET" === (null == a ? void 0 : a.ub) || (null == a ? 0 : a.wb) || (null == a ? 0 : a.Jd) || (null == a ? 0 : a.Af)) return !1;
        var b;
        return !rk(this.context) && void 0 !== (null == (b = this.context.global.navigator) ? void 0 : b.sendBeacon)
    };
    zk.prototype.ping = function() {
        var a = this;
        return M(w.apply(0, arguments).map(function(b) {
            var c;
            return null == (c = a.context.global.navigator) ? void 0 : c.sendBeacon(b)
        }).every(function(b) {
            return b
        }))
    };
    zk.prototype.bd = function(a, b, c) {
        this.ping.apply(this, u(w.apply(3, arguments)))
    };

    function Ak(a) {
        return function(b) {
            return b.g(Bk(a, bf(new L)))
        }
    }

    function Y(a, b) {
        return function(c) {
            return c.g(Bk(a, kf(b)))
        }
    }

    function Bk(a, b) {
        function c(d) {
            return new K(function(e) {
                return d.subscribe(function(f) {
                    Ra(a, function() {
                        return void e.next(f)
                    }, 3)
                }, function(f) {
                    Ra(a, function() {
                        return void e.error(f)
                    }, 3)
                }, function() {
                    Ra(a, function() {
                        return void e.complete()
                    }, 3)
                })
            })
        }
        return J(c, pf(), b, Ec(), c)
    };
    var Z = function(a) {
        this.value = a
    };
    Z.prototype.Y = function(a) {
        return M(this.value).g(Y(a, 1))
    };

    function Ck(a) {
        var b = Dk(a);
        return null === b ? new Z(null) : b.g(O(function(c) {
            c = c.pb();
            if (Yg) c = Ha.btoa(c);
            else {
                for (var d = [], e = 0, f = 0; f < c.length; f++) {
                    var g = c.charCodeAt(f);
                    if (255 < g) throw Error("Q");
                    d[e++] = g
                }
                c = $g(d)
            }
            return c
        }), Ee(1), Y(a.h, 1))
    };

    function Ek(a) {
        var b = void 0 === b ? {} : b;
        if ("function" === typeof Event) return new Event(a, b);
        if ("undefined" !== typeof document) {
            var c = document.createEvent("CustomEvent");
            c.initCustomEvent(a, b.bubbles || !1, b.cancelable || !1, b.detail);
            return c
        }
        throw Error();
    };
    var Fk = function(a) {
        this.value = a;
        this.ve = new L
    };
    Fk.prototype.release = function() {
        this.ve.next();
        this.ve.complete();
        this.value = void 0
    };
    da.Object.defineProperties(Fk.prototype, {
        i: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            }
        },
        released: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.ve
            }
        }
    });
    var Gk = ["FRAME", "IMG", "IFRAME"],
        Hk = /^[01](px)?$/;

    function Ik(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }

    function Jk(a, b) {
        var c = !0,
            d = !0,
            e = void 0,
            f = !0;
        c = void 0 === c ? !0 : c;
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        var g = void 0 === g ? !1 : g;
        if (a = Ik(a)) {
            e || (e = function(ia, C, z) {
                ia.addEventListener(C, z)
            });
            for (var h = !1, k = function(ia) {
                    h || (h = !0, b(ia))
                }, l, q, r = 0; r < Gk.length; ++r)
                if (Gk[r] == a.tagName) {
                    q = 3;
                    l = [a];
                    break
                }
            l || (l = a.querySelectorAll(Gk.join(",")), q = 2);
            var p = 0,
                x = 0,
                A = !g,
                F = a = !1;
            r = {};
            for (var D = 0; D < l.length; r = {
                    Yb: r.Yb
                }, D++) {
                var B = l[D];
                if (!("IMG" == B.tagName && (B.complete && (!B.naturalWidth || !B.naturalHeight) || (void 0 === g ? 0 : g) &&
                        B.style && "none" === B.style.display) || Hk.test(B.getAttribute("width")) && Hk.test(B.getAttribute("height")))) {
                    r.Yb = "IMG" === B.tagName;
                    if ("IMG" == B.tagName) var S = B.naturalWidth && B.naturalHeight ? !0 : !1;
                    else try {
                        S = "complete" === (B.readyState ? B.readyState : B.contentWindow && B.contentWindow.document && B.contentWindow.document.readyState) ? !0 : !1
                    } catch (ia) {
                        S = void 0 === d ? !1 : d
                    }
                    if (S) a = !0, r.Yb && (A = !0);
                    else {
                        p++;
                        var oa = function(ia) {
                            return function(C) {
                                p--;
                                !p && A && k(q);
                                ia.Yb && (C = C && "error" === C.type, x--, C || (A = !0), !x && F && A && k(q))
                            }
                        }(r);
                        e(B, "load", oa);
                        r.Yb && (x++, e(B, "error", oa))
                    }
                }
            }
            0 === x && (A = !0);
            l = null;
            if (0 === p && !a && "complete" === Ha.document.readyState) q = 5;
            else if (p || !a) {
                e(Ha, "load", function() {
                    !f || !x && A ? k(4) : F = !0
                });
                return
            }
            c && k(q)
        }
    };

    function Kk(a, b, c) {
        if (a)
            for (var d = 0; null != a && 500 > d && !c(a); ++d) a = b(a)
    }

    function Lk(a, b) {
        Kk(a, function(c) {
            try {
                return c === c.parent ? null : c.parent
            } catch (d) {}
            return null
        }, b)
    }

    function Mk(a, b) {
        if ("IFRAME" == a.tagName) b(a);
        else {
            a = a.querySelectorAll("IFRAME");
            for (var c = 0; c < a.length && !b(a[c]); ++c);
        }
    }

    function Nk(a) {
        return (a = a.ownerDocument) && (a.parentWindow || a.defaultView) || null
    }

    function Ok(a, b, c) {
        try {
            var d = JSON.parse(c.data)
        } catch (g) {}
        if ("object" === typeof d && d && "creativeLoad" === d.type) {
            var e = Nk(a);
            if (c.source && e) {
                var f;
                Lk(c.source, function(g) {
                    try {
                        if (g.parent === e) return f = g, !0
                    } catch (h) {}
                });
                f && Mk(a, function(g) {
                    if (g.contentWindow === f) return b(d), !0
                })
            }
        }
    }

    function Pk(a) {
        return "string" === typeof a ? document.getElementById(a) : a
    }
    var Qk = function(a, b) {
        var c = Pk(a);
        if (c)
            if (c.onCreativeLoad) c.onCreativeLoad(b);
            else {
                var d = b ? [b] : [],
                    e = function(f) {
                        for (var g = 0; g < d.length; ++g) try {
                            d[g](1, f)
                        } catch (h) {}
                        d = {
                            push: function(h) {
                                h(1, f)
                            }
                        }
                    };
                c.onCreativeLoad = function(f) {
                    d.push(f)
                };
                c.setAttribute("data-creative-load-listener", "");
                c.addEventListener("creativeLoad", function(f) {
                    e(f.detail)
                });
                Ha.addEventListener("message", function(f) {
                    Ok(c, e, f)
                })
            }
    };
    var Rk = function(a, b) {
            var c = this;
            this.global = a;
            this.ad = b;
            this.Hh = this.document ? ud(M(!0), od(this.document, "visibilitychange")).g(kk(this.ad.A, 748), O(function() {
                return c.document ? c.document.visibilityState : "visible"
            }), V()) : M("visible");
            this.Eh = this.document ? od(this.document, "DOMContentLoaded").g(kk(this.ad.A, 739), Ee(1)) : M(Ek("DOMContentLoaded"))
        },
        Tk = function(a) {
            return a.document ? a.document.readyState : "complete"
        },
        Uk = function(a) {
            return null !== a.document && void 0 !== a.document.visibilityState
        };
    Rk.prototype.querySelector = function(a) {
        return this.document ? this.document.querySelector(a) : null
    };
    Rk.prototype.querySelectorAll = function(a) {
        return this.document ? kb(this.document.querySelectorAll(a)) : []
    };
    var Vk = function(a) {
        return null !== a.document && "function" === typeof a.document.elementFromPoint
    };
    Rk.prototype.elementFromPoint = function(a, b) {
        if (!this.document || !Vk(this)) return null;
        a = this.document.elementFromPoint(a, b);
        return null === a ? null : new Fk(a)
    };
    var Wk = function(a, b, c) {
        c = void 0 === c ? !1 : c;
        if (void 0 === b.i || !a.document) return M(b).g(kk(a.ad.A, 749));
        var d = new Ac(1),
            e = function() {
                d.next(b)
            };
        c || Qk(b.i, e);
        Jk(b.i, e);
        return d.g(kk(a.ad.A, 749), Ee(1))
    };
    da.Object.defineProperties(Rk.prototype, {
        document: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return Hg(this.global, "document") ? this.global.document || null : null
            }
        }
    });
    var Xk = {
        left: 0,
        top: 0,
        width: 0,
        height: 0
    };

    function Yk(a, b) {
        return a.left === b.left && a.top === b.top && a.width === b.width && a.height === b.height
    }

    function Zk(a, b) {
        return {
            left: Math.max(a.left, b.left),
            top: Math.max(a.top, b.top),
            width: Math.max(0, Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left)),
            height: Math.max(0, Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top))
        }
    }

    function $k(a, b) {
        return {
            left: Math.round(a.left + b.x),
            top: Math.round(a.top + b.y),
            width: a.width,
            height: a.height
        }
    };
    var al = function(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    };
    m = al.prototype;
    m.Ud = function() {
        return this.right - this.left
    };
    m.Sd = function() {
        return this.bottom - this.top
    };
    m.clone = function() {
        return new al(this.top, this.right, this.bottom, this.left)
    };
    m.toString = function() {
        return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
    };
    m.contains = function(a) {
        return this && a ? a instanceof al ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    m.expand = function(a, b, c, d) {
        Ka(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    m.translate = function(a, b) {
        a instanceof Vj ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (Za(a), this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };
    var yi = function(a) {
        Uj.call(this, a)
    };
    v(yi, Uj);
    yi.prototype.kf = function() {
        var a = void 0 === a ? "" : a;
        return cj(wi(Ui(this, 2)), a)
    };
    yi.Ua = "wireless.mdl.UserAgentClientHints.BrandAndVersion";
    var bl = function(a) {
        Uj.call(this, a)
    };
    v(bl, Uj);
    var cl = function(a, b) {
            return hj(a, 2, b)
        },
        dl = function(a, b) {
            return hj(a, 3, b)
        },
        el = function(a, b) {
            return hj(a, 4, b)
        },
        fl = function(a, b) {
            return hj(a, 5, b)
        },
        gl = function(a, b) {
            return hj(a, 9, b)
        },
        hl = function(a, b) {
            var c = b;
            b = a.G;
            var d = Uh(b);
            gi(d);
            if (null != c) {
                cb(c);
                var e = !1,
                    f = !0;
                if (Rh(c) & 2)
                    for (var g = 0; g < c.length; g++) xi(c[g]);
                else
                    for (e = !0, g = 0; g < c.length; g++) {
                        var h = c[g];
                        xi(h);
                        h = !!(Rh(h.G) & 2);
                        e = e && !h;
                        f = f && h
                    }
                var k = void 0 === k ? !1 : k;
                g = Rh(c);
                h = g | 5;
                e = e ? h | 8 : h & -9;
                e = f ? e | 16 : e & -17;
                g != e && (f = c, Object.isFrozen(f) && (f = Mh(f)), Vh(f, e),
                    c = f, !k && e & 2 && Object.freeze(c));
                li(c, k)
            }
            null == c && (c = void 0);
            Vi(b, d, 10, c);
            return a
        },
        il = function(a, b) {
            return Wi(a, 11, null == b ? b : oi(b))
        },
        jl = function(a, b) {
            return hj(a, 1, b)
        },
        kl = function(a, b) {
            return Wi(a, 7, null == b ? b : oi(b))
        };
    bl.Ua = "wireless.mdl.UserAgentClientHints";
    bl.Uh = [10, 6];
    var ll = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");

    function ml(a) {
        var b;
        return null != (b = a.google_tag_data) ? b : a.google_tag_data = {}
    }

    function nl(a) {
        var b, c;
        return "function" === typeof(null == (b = a.navigator) ? void 0 : null == (c = b.userAgentData) ? void 0 : c.getHighEntropyValues)
    }

    function ol(a) {
        if (!nl(a)) return null;
        var b = ml(a);
        if (b.uach_promise) return b.uach_promise;
        a = a.navigator.userAgentData.getHighEntropyValues(ll).then(function(c) {
            null != b.uach || (b.uach = c);
            return c
        });
        return b.uach_promise = a
    }

    function pl(a) {
        var b;
        return il(hl(fl(cl(jl(el(kl(gl(dl(new bl, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), (null == (b = a.fullVersionList) ? void 0 : b.map(function(c) {
            var d = new yi;
            d = hj(d, 1, c.brand);
            return hj(d, 2, c.version)
        })) || []), a.wow64 || !1)
    }

    function ql(a) {
        var b, c;
        return null != (c = null == (b = ol(a)) ? void 0 : b.then(function(d) {
            return pl(d)
        })) ? c : null
    };
    var rl = function(a, b, c, d) {
        a = void 0 === a ? window : a;
        b = void 0 === b ? null : b;
        c = void 0 === c ? new Oa : c;
        void 0 === d && vg();
        Vd.call(this);
        this.global = a;
        this.eb = b;
        this.A = c;
        this.Fh = od(this.global, "pagehide").g(kk(this.A, 941));
        this.Hf = od(this.global, "load").g(kk(this.A, 738), Ee(1));
        this.Gh = od(this.global, "resize").g(kk(this.A, 741));
        this.onMessage = od(this.global, "message").g(kk(this.A, 740));
        this.document = new Rk(this.global, this);
        this.l = new mk(new pk(this.H, this.A), new ok(this.H, this.A));
        this.I = new ge(new wk(this), new Hf(this,
            new qk(this)), new Hf(this, new zk(this)), new Hf(this, new sk(this)))
    };
    v(rl, Vd);
    var rk = function(a) {
        var b = a.global;
        return !!a.global.HTMLFencedFrameElement && !!b.fence && "function" === typeof b.fence.reportEvent
    };
    rl.prototype.nb = function(a) {
        rk(this) && this.global.fence.reportEvent(a)
    };
    rl.prototype.Td = function() {
        return this.Fh.g(kk(this.A, 942), Y(this.h, 1), O(function() {}))
    };
    var sl = function(a) {
            var b = new rl(a.global.top, a.eb);
            b.I = a.I;
            return b
        },
        tl = function(a, b) {
            b.start();
            return od(b, "message").g(kk(a.A, 740))
        };
    rl.prototype.postMessage = function(a, b, c) {
        c = void 0 === c ? [] : c;
        this.global.postMessage(a, b, c)
    };
    rl.prototype.Ud = function() {
        return fk(this.global) ? this.global.width : 0
    };
    rl.prototype.Sd = function() {
        return fk(this.global) ? this.global.height : 0
    };
    var ul = function(a, b) {
        try {
            var c = a.global;
            try {
                b && (c = c.top);
                a = c;
                var d = dk() || ek();
                b && null !== a && a != a.top && (a = a.top);
                try {
                    if (void 0 === d ? 0 : d) var e = (new Wj(a.innerWidth, a.innerHeight)).round();
                    else {
                        var f = (a || window).document,
                            g = "CSS1Compat" == f.compatMode ? f.documentElement : f.body;
                        e = (new Wj(g.clientWidth, g.clientHeight)).round()
                    }
                    var h = e
                } catch (A) {
                    h = new Wj(-12245933, -12245933)
                }
                b = h;
                var k = b.height,
                    l = b.width;
                if (-12245933 === l) var q = new al(l, l, l, l);
                else {
                    var r = ak(Zj(c.document).yb),
                        p = r.x,
                        x = r.y;
                    q = new al(x, p + l, x + k, p)
                }
            } catch (A) {
                q =
                    new al(-12245933, -12245933, -12245933, -12245933)
            }
            return {
                left: q.left,
                top: q.top,
                width: q.Ud(),
                height: q.Sd()
            }
        } catch (A) {
            return Xk
        }
    };
    rl.prototype.validate = function() {
        var a = this.I.K() || rk(this);
        return this.global && this.l.wa() && a
    };
    var Dk = function(a) {
        return (a = ql(a.global)) ? id(a) : null
    };
    da.Object.defineProperties(rl.prototype, {
        sharedStorage: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.sharedStorage
            }
        },
        H: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return window
            }
        },
        Bb: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !fk(this.global.top)
            }
        },
        Xd: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Bb || this.global.top !== this.global
            }
        },
        scrollY: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.global.scrollY
            }
        },
        MutationObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H.MutationObserver
            }
        },
        ResizeObserver: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.H.ResizeObserver
            }
        },
        hh: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                y(!0, "Major version must be an integer");
                return 8 <= Ub()
            }
        },
        vg: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return "vu" in this.global || "vv" in this.global
            }
        }
    });
    var vl = !Jg && !Qb(),
        wl = function(a, b) {
            if (/-[a-z]/.test(b)) return null;
            if (vl && a.dataset) {
                if (Sb() && !(b in a.dataset)) return null;
                a = a.dataset[b];
                return void 0 === a ? null : a
            }
            return a.getAttribute("data-" + String(b).replace(/([A-Z])/g, "-$1").toLowerCase())
        };
    var xl = {},
        yl = (xl["data-google-av-cxn"] = "_avicxn_", xl["data-google-av-cpmav"] = "_cvu_", xl["data-google-av-metadata"] = "_avm_", xl["data-google-av-adk"] = "_adk_", xl["data-google-av-btr"] = void 0, xl["data-google-av-override"] = void 0, xl["data-google-av-dm"] = void 0, xl["data-google-av-immediate"] = void 0, xl["data-google-av-aid"] = void 0, xl["data-google-av-naid"] = void 0, xl["data-google-av-inapp"] = void 0, xl["data-google-av-slift"] = void 0, xl["data-google-av-itpl"] = void 0, xl["data-google-av-ext-cxn"] = void 0, xl["data-google-av-rs"] =
            void 0, xl["data-google-av-flags"] = void 0, xl["data-google-av-turtlex"] = void 0, xl["data-google-av-ufs-integrator-metadata"] = void 0, xl["data-google-av-vattr"] = void 0, xl["data-google-av-vrus"] = void 0, xl),
        zl = {},
        Al = (zl["data-google-av-adk"] = "googleAvAdk", zl["data-google-av-btr"] = "googleAvBtr", zl["data-google-av-cpmav"] = "googleAvCpmav", zl["data-google-av-dm"] = "googleAvDm", zl["data-google-av-ext-cxn"] = "googleAvExtCxn", zl["data-google-av-immediate"] = "googleAvImmediate", zl["data-google-av-inapp"] = "googleAvInapp",
            zl["data-google-av-itpl"] = "googleAvItpl", zl["data-google-av-metadata"] = "googleAvMetadata", zl["data-google-av-naid"] = "googleAvNaid", zl["data-google-av-override"] = "googleAvOverride", zl["data-google-av-rs"] = "googleAvRs", zl["data-google-av-slift"] = "googleAvSlift", zl["data-google-av-cxn"] = "googleAvCxn", zl["data-google-av-aid"] = void 0, zl["data-google-av-flags"] = "googleAvFlags", zl["data-google-av-turtlex"] = "googleAvTurtlex", zl["data-google-av-ufs-integrator-metadata"] = "googleAvUfsIntegratorMetadata", zl["data-google-av-vattr"] =
            "googleAvVattr", zl["data-google-av-vrus"] = "googleAvVurs", zl);

    function Bl(a, b) {
        if (void 0 === a.i) return null;
        try {
            var c;
            var d = null != (c = a.i.getAttribute(b)) ? c : null;
            if (null !== d) return d
        } catch (g) {}
        try {
            var e = yl[b];
            if (e && (d = a.i[e], void 0 !== d)) return d
        } catch (g) {}
        try {
            var f = Al[b];
            if (f) return wl(a.i, f)
        } catch (g) {}
        return null
    }

    function Cl(a) {
        return O(function(b) {
            return Bl(b, a)
        })
    };
    var Dl = J(function(a) {
        return O(function(b) {
            return a.map(function(c) {
                return Bl(b, c)
            })
        })
    }(["data-google-av-cxn", "data-google-av-turtlex"]), O(function(a) {
        var b = t(a);
        a = b.next().value;
        b = b.next().value;
        if (!a) {
            if (null !== b) return [];
            throw new ce;
        }
        return a.split("|")
    }));
    var El = function() {
        return J(jd(function(a) {
            return a.element.g(Dl, oe(function() {
                return M([""])
            })).g(O(function(b) {
                return {
                    Aa: b,
                    Fc: a
                }
            }))
        }), ze(function(a) {
            return a.Aa.sort().join(";")
        }), O(function(a) {
            return a.Fc
        }))
    };
    var Gl = function() {
            return jd(function(a) {
                return id(Fl(a)).g(Ak(a.h))
            })
        },
        Fl = function(a) {
            return a.document.querySelectorAll(".GoogleActiveViewElement,.GoogleActiveViewClass").map(function(b) {
                return new Fk(b)
            })
        };

    function Hl(a) {
        var b = a.Hf,
            c = a.document.Eh;
        return ud(M({}), c, b).g(O(function() {
            return a
        }))
    };
    var Jl = O(Il);

    function Il(a) {
        var b = Number(Bl(a, "data-google-av-rs"));
        if (!isNaN(b) && 0 !== b) return b;
        var c;
        return (a = null == (c = a.i) ? void 0 : c.id) ? a.startsWith("DfaVisibilityIdentifier") ? 6 : a.startsWith("YtKevlarVisibilityIdentifier") ? 15 : a.startsWith("YtSparklesVisibilityIdentifier") ? 17 : a.startsWith("YtKabukiVisibilityIdentifier") ? 18 : 0 : 0
    };

    function Kl() {
        return J(T(function(a) {
            return void 0 !== a
        }), O(function(a) {
            return a
        }))
    };

    function Ll() {
        return function(a) {
            var b = [];
            return a.g(T(function(c) {
                if (void 0 === c.i || b.some(function(d) {
                        return d.i === c.i
                    })) return !1;
                b.push(c);
                return !0
            }))
        }
    };

    function Ml(a, b) {
        b = void 0 === b ? tc : b;
        return ud(Hl(a), b).g(Gl(), Ll(), Kl(), Y(a.h, 1))
    };

    function Nl(a, b) {
        return new K(function(c) {
            var d = !1,
                e = Array(b.length);
            e.fill(void 0);
            var f = new Set,
                g = new Set,
                h = function(r, p) {
                    a.Pf ? (e[p] = r, f.add(p), d || (d = !0, Ra(a, function() {
                        d = !1;
                        c.next(kb(e))
                    }, 1))) : c.error(new de(p))
                },
                k = function(r, p) {
                    g.add(p);
                    f.add(p);
                    Ra(a, function() {
                        c.error(r)
                    }, 1)
                },
                l = function(r) {
                    g.add(r);
                    Ra(a, function() {
                        g.size === b.length && c.complete()
                    }, 1)
                },
                q = b.map(function(r, p) {
                    return r.subscribe(function(x) {
                        return void h(x, p)
                    }, function(x) {
                        return void k(x, p)
                    }, function() {
                        return void l(p)
                    })
                });
            return function() {
                q.forEach(function(r) {
                    return void r.unsubscribe()
                })
            }
        })
    };

    function Ol(a, b, c) {
        function d() {
            if (b.eb) {
                var D = b.eb,
                    B = D.next;
                var S = {
                    creativeId: b.af.zb(c),
                    requiredSignals: e,
                    signals: Object.assign({}, f),
                    hasPrematurelyCompleted: g,
                    errorMessage: h,
                    erroredSignalKey: k
                };
                S = {
                    specMajor: 2,
                    specMinor: 0,
                    specPatch: 0,
                    timestamp: le(b.l.now(), new ke(0, b.l.timeline)),
                    instanceId: b.af.zb(b.Lb),
                    creativeState: S
                };
                B.call(D, S)
            }
        }
        for (var e = Object.keys(a), f = {}, g = !1, h = null, k = null, l = {}, q = new Set, r = [], p = [], x = t(e), A = x.next(), F = {}; !A.done; F = {
                aa: F.aa
            }, A = x.next()) F.aa = A.value, A = a[F.aa], A instanceof
        Z ? (l[F.aa] = A.value, q.add(F.aa), b.eb && (f[String(F.aa)] = ne(A.value))) : (A = A.g(V(function(D, B) {
                return he(D) || he(B) ? !1 : D === B
            }), O(function(D) {
                return function(B) {
                    b.eb && (f[String(D.aa)] = ne(B), d());
                    var S = {};
                    return S[D.aa] = B, S
                }
            }(F)), oe(function(D) {
                return function(B) {
                    if (B instanceof de) throw new fe(String(D.aa));
                    throw B;
                }
            }(F)), wf(function(D) {
                return function() {
                    q.add(D.aa)
                }
            }(F), function(D) {
                return function(B) {
                    k = String(D.aa);
                    h = String(B);
                    d()
                }
            }(F), function(D) {
                return function() {
                    q.has(D.aa) || (g = !0, d())
                }
            }(F))), p.push(F.aa),
            r.push(A));
        (a = 0 < Object.keys(f).length) && d();
        x = Nl(b.h, r).g(oe(function(D) {
            if (D instanceof de) throw new ee(String(p[D.ah]));
            throw D;
        }), O(function(D) {
            return Object.freeze(Object.assign.apply(Object, [{}, l].concat(u(D))))
        }));
        return (r = 0 < r.length) && a ? ud(M(Object.freeze(l)), x) : r ? x : M(Object.freeze(l))
    };

    function Pl(a, b, c, d) {
        var e = Ql(Rl(Ql(Sl, Tl), Ul), Vl, Wl);
        return a.A.Na.bind(a.A)(733, function() {
            var f = {};
            try {
                return b.g(oe(function(g) {
                    d(Object.assign({}, f, {
                        error: g
                    }));
                    return tc
                }), jd(function(g) {
                    try {
                        var h = c(a, g)
                    } catch (l) {
                        return d(Object.assign({}, f, {
                            error: l instanceof Error ? l : String(l)
                        })), tc
                    }
                    var k = {};
                    return Ol(h, a, g.Lb).g(wf(function(l) {
                        k = l
                    }), kf(1), Ec()).g(e, oe(function(l) {
                        d(Object.assign({}, k, {
                            error: l
                        }));
                        return tc
                    }), Le(void 0), O(function() {
                        return !0
                    }))
                })).g(Ze(function(g) {
                    return g + 1
                }, 0), oe(function(g) {
                    d(Object.assign({},
                        f, {
                            error: g
                        }));
                    return tc
                }))
            } catch (g) {
                return d(Object.assign({}, f, {
                    error: g
                })), tc
            }
        })()
    };

    function Xl(a, b) {
        return J(X(function(c) {
            var d = a(c),
                e = b(c),
                f = {};
            return d && e && f ? new K(function(g) {
                e(d, f, function(h) {
                    g.next(Object.assign({}, c, {
                        ug: h
                    }));
                    g.complete()
                });
                return function() {}
            }) : wd
        }), T(function(c) {
            return c.ug
        }))
    };
    var Vl = J(T(function(a) {
        var b = a.I,
            c = a.Bc,
            d = a.Mb,
            e = a.nb,
            f = a.jb,
            g = a.Qb;
        return void 0 !== a.fb && void 0 !== g && void 0 !== b && void 0 !== c && void 0 !== d && (!f || void 0 !== e)
    }), tf(function(a) {
        return !(!1 === a.tf && void 0 !== a.Nd)
    }, !1), T(function(a) {
        return !0 === a.tf
    }), Xl(function(a) {
        return a.Qb
    }, function(a) {
        return a.fb
    }), O(function(a) {
        if (a.jb) {
            var b;
            a.nb({
                eventType: "active-view-begin-to-render",
                eventData: null != (b = a.ld) ? b : "",
                destination: ["buyer"]
            })
        } else a.Mb(a.Bc, a).forEach(function(c) {
            a.I.S(c).sendNow()
        })
    }), Ee(1), Pe());

    function Yl(a) {
        var b = new Map;
        if ("object" !== typeof a || null === a) return b;
        Object.values(a).forEach(function(c) {
            c && "function" === typeof c.ga && (b.has(c.clock.timeline) || b.set(c.clock.timeline, c.clock.now()))
        });
        return b
    };

    function Zl(a, b) {
        var c = $l,
            d = am,
            e = bm;
        b = void 0 === b ? .01 : b;
        return function(f) {
            0 < b && Math.random() <= b && (a.global.HTMLFencedFrameElement && a.global.fence && "function" === typeof a.global.fence.reportEvent && a.global.fence.reportEvent({
                eventType: "active-view-error",
                eventData: "",
                destination: ["buyer"]
            }), f = Object.assign({}, f, {
                errorMessage: f.error instanceof Error && f.error.message ? f.error.message : String(f.error),
                cf: f.error instanceof Error && f.error.stack ? String(f.error.stack) : null,
                Gg: f.error instanceof Error && f.error.name ?
                    String(f.error.name) : null,
                Fg: String(a.A.Yf)
            }), d(Object.assign({}, f, {
                sa: function() {
                    return function(g) {
                        try {
                            return e(Object.assign({}, g))
                        } catch (h) {
                            return {}
                        }
                    }
                }(),
                Aa: [c]
            }), Yl(f)).forEach(function(g) {
                a.I.S(g).sendNow()
            }))
        }
    };
    var Wl = J(O(function(a) {
        var b = a.I,
            c = a.Mg;
        if (void 0 === b || void 0 === c) return !1;
        if (void 0 !== a.Nd) return !0;
        if (null === c) return !1;
        for (a = 0; a < c; a++) b.S("https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=extra&rnd=" + Math.floor(1E7 * Math.random())).sendNow();
        return !0
    }), tf(function(a) {
        return !a
    }), Pe());
    var bm = function(a) {
        return {
            id: a.oe,
            mcvt: a.bc,
            p: a.Gc,
            asp: a.Ti,
            mtos: a.cc,
            tos: a.pc,
            v: a.tg,
            bin: a.rg,
            avms: a.Ff,
            bs: a.Te,
            mc: a.Cf,
            "if": a.zg,
            vu: a.Cg,
            app: a.Sa,
            mse: a.ke,
            mtop: a.le,
            itpl: a.Zd,
            adk: a.yd,
            exk: a.Vi,
            rs: a.La,
            la: a.wf,
            cr: a.de,
            uach: a.rc,
            vs: a.De,
            r: a.te,
            pay: a.Vg,
            rst: a.mg,
            rpt: a.lg,
            isd: a.Zg,
            lsd: a.mh,
            context: a.Fg,
            msg: a.errorMessage,
            stack: a.cf,
            name: a.Gg,
            ec: a.Wg,
            sfr: a.ze,
            met: a.Sb,
            wmsd: a.Ge,
            pv: a.bj,
            epv: a.Yi,
            pbe: a.sf,
            vae: a.Yg,
            spb: a.Wf,
            ffslot: a.gh,
            reach: a.ei,
            io2: a.md
        }
    };

    function Ql() {
        var a = w.apply(0, arguments);
        return function(b) {
            var c = b.g(kf(1), Ec());
            b = a.map(function(d) {
                return c.g(d, Le(!0))
            });
            return R(b).g(Ee(1), Pe())
        }
    };

    function Rl() {
        var a = w.apply(0, arguments);
        return function(b) {
            var c = b.g(kf(1), Ec());
            b = a.map(function(d) {
                return c.g(d, Le(!0))
            });
            return ud.apply(null, u(b)).g(Ee(1), Pe())
        }
    };
    var Tl = function(a) {
        var b = [];
        return a.g(O(function(c) {
            var d = c.I,
                e = c.Pg,
                f = c.pc,
                g = c.ki,
                h = c.sa,
                k = c.ji,
                l = c.hd,
                q = c.qc,
                r = c.Ee,
                p = c.nf,
                x = c.sf,
                A = c.Wf,
                F = c.ld;
            if (!c.Rd || !p || void 0 === c.cc || void 0 === f || void 0 === g || void 0 === h || void 0 === k || void 0 === q || void 0 === d) return !1;
            if (c.jb) {
                if (void 0 === l) return !1;
                g = c.nb;
                if (!g) return !1;
                g({
                    eventType: "active-view-time-on-screen",
                    eventData: null != F ? F : "",
                    destination: ["buyer"]
                });
                return !0
            }
            if (!x && !l) return !1;
            F = Yl(c);
            var D;
            r = null != (D = null == r ? void 0 : r.oa(F).value) ? D : !1;
            c = q(Object.assign({},
                c, {
                    oe: k,
                    De: r ? 4 : 3,
                    te: null != l ? l : "u",
                    sa: h,
                    Aa: g
                }), F);
            if (x) {
                for (; b.length > g.length;) x = void 0, null == (x = b.shift()) || x.deactivate();
                c.forEach(function(B, S) {
                    S >= b.length ? b.push(d.S(B)) : b[S].url = B
                });
                return A && e && void 0 !== l ? (c.forEach(function(B) {
                    e.S(B).sendNow()
                }), !0) : void 0 !== l
            }
            return A && e && void 0 !== l ? (c.forEach(function(B) {
                e.S(B).sendNow()
            }), !0) : void 0 !== l ? (c.forEach(function(B) {
                d.S(B).sendNow()
            }), !0) : !1
        }), tf(function(c) {
            return !c
        }), Pe())
    };

    function cm(a) {
        return function(b) {
            return b.g(O(function(c) {
                a.Pf || Ya("Assertion on queued Observable output failed");
                return c
            }))
        }
    };

    function dm(a) {
        return function(b) {
            return new K(function(c) {
                var d = !1,
                    e = b.g(cm(a)).subscribe(function(f) {
                        d = !0;
                        c.next(f)
                    }, c.error.bind(c), c.complete.bind(c));
                Ra(a, function() {
                    d || c.next(null)
                }, 3);
                return e
            })
        }
    };

    function em(a, b) {
        return function(c) {
            return c.g(X(function(d) {
                return new K(function(e) {
                    function f() {
                        h.disconnect();
                        k.unsubscribe()
                    }
                    var g = a.MutationObserver;
                    if (g && void 0 !== d.i) {
                        var h = new g(function(l) {
                            e.next(l)
                        });
                        h.observe(d.i, b);
                        var k = d.released.subscribe(f);
                        return f
                    }
                })
            }))
        }
    };
    var fm = {
        Si: 0,
        zi: 1,
        Bi: 2,
        Ai: 3,
        0: "UNKNOWN",
        1: "DEFER_MEASUREMENT",
        2: "DO_NOT_DEFER_MEASUREMENT",
        3: "DEFER_MEASUREMENT_AND_PING"
    };

    function gm(a, b) {
        var c = b.g(em(a, {
            attributes: !0
        }), Y(a.h, 1));
        return R([b, c.g(Y(a.h, 1), dm(a.h))]).g(O(function(d) {
            return t(d).next().value
        }), Cl("data-google-av-dm"), O(hm))
    }

    function hm(a) {
        return a && a in fm ? Number(a) : 2
    };

    function im(a) {
        if (3 === a.qh) return null;
        if (void 0 !== a.hd) {
            var b = !1 === a.yg ? "n" : !a.Ld && !1 === a.Rd && a.hd ? a.hd : null;
            if (null !== b) return b
        }
        return a.Kc instanceof Xd ? "msf" : a.Fd instanceof Yd ? "c" : !1 === a.xg ? "pv" : a.Kc || a.Fd ? "x" : null
    }
    var Ul = J(T(function(a) {
        return void 0 !== a.Pc && void 0 !== a.sa && void 0 !== a.qc && void 0 !== a.Qc && void 0 !== a.I
    }), T(function(a) {
        return null !== im(a)
    }), Xl(function(a) {
        return a.xc
    }, function(a) {
        return a.fb
    }), O(function(a) {
        if (a.jb) {
            var b = a.nb;
            if (b) {
                var c;
                b({
                    eventType: "active-view-unmeasurable",
                    eventData: null != (c = a.ld) ? c : "",
                    destination: ["buyer"]
                })
            }
        } else {
            c = void 0;
            var d = im(a);
            if ("x" === d) {
                var e, f = null != (e = a.Kc) ? e : a.Fd;
                f && (b = f.stack, c = f.message)
            }
            a.qc(Object.assign({}, a, {
                Aa: a.Pc,
                sa: a.sa,
                oe: a.Qc,
                De: 2,
                te: d,
                errorMessage: c,
                cf: b
            }), Yl(a)).forEach(function(g) {
                a.I.S(g).sendNow()
            })
        }
    }), Ee(1), Pe());

    function jm(a, b) {
        return "string" === typeof a ? encodeURIComponent(a) : "number" === typeof a ? String(a) : Array.isArray(a) ? a.map(function(c) {
            return jm(c, b)
        }).join(",") : a instanceof ke ? a.toString() : a && "function" === typeof a.ga ? jm(a.oa(b).value, b) : !0 === a ? "1" : !1 === a ? "0" : void 0 === a || null === a ? null : [a.top, a.left, a.top + a.height, a.left + a.width].join()
    }

    function km(a, b) {
        a = Object.entries(a).map(function(c) {
            var d = t(c);
            c = d.next().value;
            d = d.next().value;
            d = jm(d, b);
            return null === d ? "" : c + "=" + d
        }).filter(function(c) {
            return "" !== c
        });
        return a.length ? a.join("&") : ""
    };
    var lm = /(?:\[|%5B)([a-zA-Z0-9_]+)(?:\]|%5D)/g,
        mm = jg(kg(), "google3.javascript.ads.common.url_macros_substitutor", $f).Bf;

    function nm(a, b) {
        return a.replace(lm, function(c, d) {
            try {
                var e = null !== b && d in b ? b[d] : void 0;
                if (null == e) return mm && lg(mm, "No value supplied for unsupported macro: " + d), c;
                if (null == e.toString()) return mm && lg(mm, "The toString method of value returns null for macro: " + d), c;
                e = e.toString();
                if ("" == e || !/^[\s\xa0]*$/.test(null == e ? "" : String(e))) return encodeURIComponent(e).replace(/%2C/g, ",");
                mm && lg(mm, "Null value supplied for macro: " + d)
            } catch (f) {
                mm && lg(mm, "Failed to set macro: " + d)
            }
            return c
        })
    };

    function om(a, b) {
        var c = Object.assign({}, a),
            d = a.rc;
        c = (delete c.rc, c);
        c = a.sa(c);
        var e = km(c, b);
        return hb(a.Aa, function(f) {
            var g = "";
            "string" === typeof d && (g = "&" + km({
                uach: d
            }, b));
            var h = {};
            return nm(f, (h.VIEWABILITY = e, h)) + g
        })
    };

    function am(a, b) {
        var c = a.sa(a),
            d = km(c, b);
        return d ? hb(a.Aa, function(e) {
            e = 0 <= e.indexOf("?") ? e : e + "?";
            e = 0 <= "?&".indexOf(e.slice(-1)) ? e : e + "&";
            return e + d
        }) : a.Aa
    };

    function pm(a, b) {
        return hb(a, function(c) {
            if ("string" === typeof b.rc) {
                var d = "&" + km({
                    uach: b.rc
                }, new Map);
                return "&adurl=" == c.substring(c.length - 7) ? c.substring(0, c.length - 7) + d + "&adurl=" : c + d
            }
            return c
        })
    };
    var Sl = J(T(function(a) {
        return void 0 !== a.sa && void 0 !== a.Pc && void 0 !== a.qc && void 0 !== a.Qc && void 0 !== a.I
    }), tf(function(a) {
        return void 0 === a.Nd
    }), O(function(a) {
        return Object.assign({}, a, {
            Zf: Yl(a)
        })
    }), T(function(a) {
        var b = a.Ee,
            c = a.Zf,
            d;
        return !!a.nf && (null != (d = null == b ? void 0 : b.oa(c).value) ? d : !1)
    }), Xl(function(a) {
        return a.yc
    }, function(a) {
        return a.fb
    }), O(function(a) {
        var b = a.I,
            c = a.ld;
        if (a.jb) {
            var d = a.nb;
            if (!d) return !1;
            d({
                eventType: "active-view-viewable",
                eventData: null != c ? c : "",
                destination: ["buyer"]
            });
            return !0
        }
        c =
            a.qc(Object.assign({}, a, {
                Aa: a.Pc,
                sa: a.sa,
                oe: a.Qc,
                De: 4,
                te: "v"
            }), a.Zf);
        (d = a.Gd) && 0 < d.length && a.Mb && a.Mb(d, a).forEach(function(e) {
            b.S(e).sendNow()
        });
        (d = a.Fe) && 0 < d.length && a.Mb && a.Mb(d, a).forEach(function(e) {
            b.S(e).sendNow()
        });
        c.forEach(function(e) {
            b.S(e, {
                Ac: a.fe
            }).sendNow()
        });
        return !0
    }), tf(function(a) {
        return !a
    }), Pe());

    function qm(a) {
        var b = Math.pow(10, 2);
        return Math.round(a * b) / b
    };

    function rm(a, b, c, d) {
        var e = Object.keys(c).map(function(h) {
                return h
            }),
            f = e.filter(function(h) {
                var k = c[h];
                h = d[h];
                return k instanceof Z && h instanceof Z && k.value === h.value
            }),
            g = f.reduce(function(h, k) {
                var l = {};
                return Object.assign({}, h, (l[k] = c[k], l))
            }, {});
        return e.reduce(function(h, k) {
            if (0 <= f.indexOf(k)) return h;
            var l = {};
            return Object.assign({}, h, (l[k] = b.g(X(function(q) {
                return (q = q ? c[k] : d[k]) && (q instanceof K || "function" === typeof q.Cb && "function" === typeof q.subscribe) ? q : q.Y(a)
            })), l))
        }, g)
    };

    function sm(a) {
        return J(O(function() {
            return !0
        }), W(!1), Y(a, 1))
    };

    function tm(a) {
        return 0 >= a.length ? tc : R(a.map(function(b) {
            var c = 0;
            return b.g(O(function(d) {
                return {
                    index: c++,
                    value: d
                }
            }))
        })).g(T(function(b) {
            return b.every(function(c) {
                return c.index === b[0].index
            })
        }), O(function(b) {
            return b.map(function(c) {
                return c.value
            })
        }))
    };

    function um(a, b) {
        a.Da && (a.mb = a.Da);
        a.Da = b;
        a.mb && a.mb.value ? (b = Math.max(0, le(b.timestamp, a.mb.timestamp)), a.totalTime += b, a.ma += b) : a.ma = 0;
        return a
    }

    function vm() {
        return J(Ze(um, {
            totalTime: 0,
            ma: 0
        }), O(function(a) {
            return a.totalTime
        }))
    }

    function wm() {
        return J(Ze(um, {
            totalTime: 0,
            ma: 0
        }), O(function(a) {
            return a.ma
        }))
    };

    function xm(a, b) {
        return J(Cl("data-google-av-metadata"), O(function(c) {
            if (null === c) return b(void 0);
            c = c.split("&").map(function(d) {
                return d.split("=")
            }).filter(function(d) {
                return d[0] === a
            });
            return 0 === c.length ? b(void 0) : b(c[0].slice(1).join("="))
        }))
    };
    var ym = {
        wi: "asmreq",
        xi: "asmres"
    };
    var zm = function(a) {
        Uj.call(this, a)
    };
    v(zm, Uj);
    zm.prototype.Rf = function(a) {
        gj(this, a)
    };
    zm.Ua = "tagging.common.osd.AdSpeedMetricsRequest";
    var Am = function(a) {
        Uj.call(this, a)
    };
    v(Am, Uj);
    Am.Ua = "tagging.common.osd.AdSpeedMetricsResponse.Box";
    var Bm = function(a) {
        Uj.call(this, a)
    };
    v(Bm, Uj);
    Bm.prototype.Rf = function(a) {
        gj(this, a)
    };
    var Cm = function(a) {
        return function(b) {
            ab(a);
            if (null == b || "" == b) b = fb(new a, kj);
            else {
                $a(b);
                b = JSON.parse(b);
                if (!Array.isArray(b)) throw Error("pa`" + Ia(b) + "`" + b);
                Ph(b, 32);
                b = Bi(a, b)
            }
            return b
        }
    }(Bm);
    Bm.Ua = "tagging.common.osd.AdSpeedMetricsResponse";

    function Dm(a, b) {
        var c = void 0 === c ? sl(a) : c;
        var d = new MessageChannel;
        b = b.g(O(function(f) {
            return Number(f)
        }), T(function(f) {
            return !isNaN(f) && 0 !== f
        }), wf(function(f) {
            var g = new zm;
            g.Rf(f);
            f = {
                type: "asmreq",
                payload: g.pb()
            };
            c.postMessage(f, "*", [d.port2])
        }), Ee(1));
        var e = tl(a, d.port1).g(T(function(f) {
                return "object" === typeof f.data
            }), O(function(f) {
                var g = f.data,
                    h = Object.values(ym).includes(g.type);
                g = "string" === typeof g.payload;
                if (!h || !g || "asmres" !== f.data.type) return null;
                try {
                    return Cm(f.data.payload)
                } catch (k) {
                    return null
                }
            }),
            T(function(f) {
                return null !== f
            }), O(function(f) {
                return f
            }));
        return b.g(X(function(f) {
            return M(f).g(qe(e))
        }), T(function(f) {
            var g = t(f);
            f = g.next().value;
            g = g.next().value;
            if (null != ui(Ui(g, 1))) {
                var h = void 0 === h ? 0 : h;
                h = cj(ui(Ui(g, 1)), h) === f
            } else h = !1;
            return h
        }), O(function(f) {
            f = t(f);
            f.next();
            return f.next().value
        }), Ak(a.h))
    };

    function Em(a, b, c) {
        var d = b.ac.g(Ee(1), X(function() {
            return Dm(a, c)
        }), T(function(f) {
            return dj(f, 2) && void 0 !== Zi(f, Am, 3, !1) && null != si(Ui(f, 4)) && null != si(Ui(f, 5))
        }), Ee(1), Ak(a.h));
        b = d.g(O(function(f) {
            return {
                x: ej(bj(f, Am, 3), 2),
                y: ej(bj(f, Am, 3), 1)
            }
        }), V(function(f, g) {
            return f.x === g.x && f.y === g.y
        }), Y(a.h, 1));
        var e = d.g(O(function(f) {
            return ej(f, 4)
        }), Y(a.h, 1));
        d = d.g(O(function(f) {
            return ej(f, 5)
        }), Y(a.h, 1));
        return {
            Zg: e,
            og: b,
            mh: d
        }
    };

    function Fm(a, b) {
        return b.ac.g(Ee(1), O(function() {
            return a.l.now().round()
        }))
    };
    var Gm = O(function(a) {
        return [a.value.N.width, a.value.N.height]
    });

    function Hm(a, b) {
        return function(c) {
            return tm(b.map(function(d) {
                return c.g(a(d))
            }))
        }
    };

    function Im() {
        var a;
        return J(wf(function(b) {
            return void(a = b.timestamp)
        }), wm(), O(function(b) {
            return {
                timestamp: a,
                value: Math.round(b)
            }
        }))
    };
    var Jm = function(a, b) {
            this.Bd = a;
            this.options = b;
            this.L = this.be = this.ae = null
        },
        Km = function(a, b) {
            2 === b.L || 3 === b.L ? a.L || (b = Object.assign({}, a.options, {
                delay: 100,
                trackVisibility: !0
            }), a.L = new IntersectionObserver(a.Bd, b)) : 1 === b.L ? a.be || (b = Object.assign({}, a.options, {
                delay: 100
            }), a.be = new IntersectionObserver(a.Bd, b)) : a.ae || (a.ae = new IntersectionObserver(a.Bd, a.options))
        },
        Lm = function(a, b) {
            a = 2 === b || 3 === b ? a.L : 1 === b ? a.be : a.ae;
            if (!a) throw new $d;
            return a
        };
    Jm.prototype.observe = function(a, b) {
        Lm(this, a).observe(b)
    };
    Jm.prototype.unobserve = function(a, b) {
        Lm(this, a).unobserve(b)
    };
    Jm.prototype.disconnect = function(a) {
        Lm(this, a).disconnect()
    };
    Jm.prototype.takeRecords = function(a) {
        return Lm(this, a).takeRecords()
    };
    var Mm = {
        W: "ns",
        Z: Xk,
        N: Xk,
        V: new L,
        O: "ns",
        F: Xk,
        R: Xk,
        ba: {
            x: 0,
            y: 0
        }
    };

    function Nm(a, b) {
        return Yk(a.N, b.N) && Yk(a.F, b.F) && Yk(a.Z, b.Z) && Yk(a.R, b.R) && a.O === b.O && a.V === b.V && a.W === b.W && a.ba.x === b.ba.x && a.ba.y === b.ba.y
    };
    var Om = function(a) {
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
    };

    function Pm(a, b) {
        return function(c) {
            return function(d) {
                var e = d.g(bf(new L), Ec());
                d = c.element.g(V());
                e = e.g(O(function(f) {
                    return f.value
                }));
                return R([d, e, b]).g(O(function(f) {
                    var g = t(f);
                    f = g.next().value;
                    var h = g.next().value;
                    g = g.next().value;
                    if (void 0 === f.i) var k = {
                        top: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    };
                    else {
                        k = f.i.getBoundingClientRect();
                        var l = f.i,
                            q = a.global,
                            r = new Vj(0, 0);
                        var p = (p = Yj(l)) ? p.parentWindow || p.defaultView : window;
                        if (Hg(p, "parent")) {
                            do {
                                if (p == q) {
                                    var x = l,
                                        A = Yj(x);
                                    bb(x, "Parameter is required");
                                    var F = new Vj(0,
                                        0);
                                    var D = A ? Yj(A) : document;
                                    D = !Jg || 9 <= Number(Vg) || "CSS1Compat" == Zj(D).yb.compatMode ? D.documentElement : D.body;
                                    x != D && (x = Om(x), A = ak(Zj(A).yb), F.x = x.left + A.x, F.y = x.top + A.y)
                                } else F = y(l), F = Om(F), F = new Vj(F.left, F.top);
                                r.x += F.x;
                                r.y += F.y
                            } while (p && p != q && p != p.parent && (l = p.frameElement) && (p = p.parent))
                        }
                        k = {
                            top: r.y,
                            left: r.x,
                            width: k.width,
                            height: k.height
                        }
                    }
                    k = $k(k, h.ba);
                    q = Zk(k, h.Z);
                    r = a.l.now();
                    p = Object;
                    l = p.assign;
                    if (2 !== g || a.Bb || 0 >= q.width || 0 >= q.height) var B = !1;
                    else try {
                        var S = a.document.elementFromPoint(q.left + q.width /
                            2, q.top + q.height / 2);
                        B = S ? !Qm(S, f) : !1
                    } catch (oa) {
                        B = !1
                    }
                    return {
                        timestamp: r,
                        value: l.call(p, {}, h, {
                            O: "geo",
                            R: B ? Mm.R : q,
                            F: k
                        })
                    }
                }), Ak(a.h))
            }
        }
    }

    function Qm(a, b, c) {
        c = void 0 === c ? 0 : c;
        return void 0 === a.i || void 0 === b.i ? !1 : a.i === b.i || ck(b.i, function(d) {
            return d === a.i
        }) ? !0 : b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView === b.i.ownerDocument.defaultView.top ? !1 : 10 > c && b.i.ownerDocument && b.i.ownerDocument.defaultView && b.i.ownerDocument.defaultView.frameElement ? Qm(a, new Fk(b.i.ownerDocument.defaultView.frameElement), c + 1) : !0
    };

    function Rm(a) {
        return function(b) {
            return b.g(a.ResizeObserver ? Sm(a) : Tm(a), kf(1), Ec())
        }
    }

    function Sm(a) {
        return function(b) {
            return b.g(X(function(c) {
                var d = a.ResizeObserver;
                if (!d || void 0 === c.i) return M(Mm.F);
                var e = (new K(function(f) {
                    function g() {
                        void 0 !== c.i && h.unobserve(c.i);
                        h.disconnect();
                        k.unsubscribe()
                    }
                    if (void 0 === c.i) return f.complete(),
                        function() {};
                    var h = new d(function(l) {
                        l.forEach(function(q) {
                            f.next(q)
                        })
                    });
                    h.observe(c.i);
                    var k = c.released.subscribe(g);
                    return g
                })).g(kk(a.A, 736), O(function(f) {
                    return f.contentRect
                }));
                return ud(M(c.i.getBoundingClientRect()), e)
            }), V(Yk))
        }
    }

    function Tm(a) {
        return function(b) {
            var c = b.g(em(a, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                })),
                d = a.Gh;
            c = ud(b.g(O(function() {
                return Ek("resize")
            })), c, d);
            return R(b, c).g(kk(a.A, 737), O(function(e) {
                e = t(e).next().value;
                return void 0 === e.i ? void 0 : e.i.getBoundingClientRect()
            }), Kl(), V(Yk))
        }
    };

    function Um(a, b) {
        var c = Vm(a, b).g(kf(1), Ec());
        return function(d) {
            return function(e) {
                e = e.g(X(function(f) {
                    return f.element
                }), V());
                return R([c, e]).g(X(function(f) {
                    var g = t(f);
                    f = g.next().value;
                    g = g.next().value;
                    return Wm(a, f.eh, Rm(a), f.Bh, d, f.Qg, g)
                }), Ak(a.h))
            }
        }
    }

    function Xm(a, b, c) {
        var d = Um(a, c)(b);
        return function(e) {
            var f = d(M(e));
            return function(g) {
                return R([g, f]).g(O(function(h) {
                    var k = t(h);
                    h = k.next().value;
                    k = k.next().value;
                    var l = $k(k.value.F, h.value.ba),
                        q = Zk($k(k.value.R, h.value.ba), h.value.Z);
                    return {
                        timestamp: h.timestamp.maximum(k.timestamp),
                        value: Object.assign({}, h.value, {
                            O: "nio",
                            R: q,
                            F: l
                        })
                    }
                }))
            }
        }
    }

    function Ym(a) {
        return O(function(b) {
            return "nio" !== b.value.W ? b : Object.assign({}, b, {
                value: Object.assign({}, b.value, {
                    Z: ul(a, !0),
                    N: ul(a, !0)
                })
            })
        })
    }

    function Zm(a, b) {
        return M(b).g(a, O(function() {
            return b
        }))
    }

    function Vm(a, b) {
        return a.l.timeline !== ie ? yc(new Xd(2)) : a.MutationObserver ? "undefined" === typeof IntersectionObserver ? yc(new Xd(0)) : (new K(function(c) {
            var d = new L,
                e = new Jm(d.next.bind(d), {
                    threshold: [].concat(u(b))
                });
            c.next({
                Bh: d.g(kk(a.A, 735)),
                eh: e,
                Qg: function(f) {
                    f = e.takeRecords(f.L);
                    0 < f.length && d.next(f)
                }
            })
        })).g(Ee(1), kf(1), Ec()) : yc(new Xd(1))
    }

    function $m(a) {
        return gd(a.sort(function(b, c) {
            return b.time - c.time
        }))
    }

    function Wm(a, b, c, d, e, f, g) {
        return new K(function(h) {
            function k() {
                A || (A = !0, void 0 !== g.i && b.unobserve(e.L, g.i), q.unsubscribe(), x.unsubscribe(), p.unsubscribe(), F.unsubscribe())
            }
            if (void 0 !== g.i) {
                Km(b, e);
                b.observe(e.L, g.i);
                var l = new sc({
                        timestamp: a.l.now(),
                        value: Object.assign({}, Mm, {
                            W: "nio",
                            O: "nio"
                        })
                    }),
                    q = d.g(jd(function(D) {
                        return $m(D)
                    }), T(function(D) {
                        return D.target === g.i
                    }), O(function(D) {
                        return {
                            timestamp: new ke(D.time, ie),
                            value: {
                                W: "nio",
                                Z: D.rootBounds || Xk,
                                N: D.rootBounds || ul(a, !0),
                                V: r,
                                O: "nio",
                                R: D.intersectionRect,
                                F: D.boundingClientRect,
                                ba: {
                                    x: 0,
                                    y: 0
                                },
                                isIntersecting: D.isIntersecting,
                                zf: D.isVisible
                            }
                        }
                    }), bf(l), Ec()).subscribe(h),
                    r = new L,
                    p = r.subscribe(function() {
                        f(e);
                        h.next({
                            timestamp: a.l.now(),
                            value: l.value.value
                        });
                        void 0 !== g.i && (b.unobserve(e.L, g.i), b.observe(e.L, g.i))
                    }),
                    x = Zm(c, g).subscribe(function() {
                        r.next()
                    }),
                    A = !1,
                    F = g.released.subscribe(function() {
                        return k()
                    });
                return k
            }
        })
    };

    function an(a, b) {
        var c = a.Td().g(O(function() {
            return "b"
        }));
        return zd(b, c).g(Ee(1), Y(a.h, 1))
    };

    function bn(a) {
        return function(b) {
            var c;
            return b.g(wf(function(d) {
                return void(c = d.timestamp)
            }), O(function(d) {
                return d.value
            }), a, O(function(d) {
                return {
                    timestamp: c,
                    value: d
                }
            }))
        }
    };
    var cn = function(a) {
            return a.R.width * a.R.height / (a.F.width * a.F.height)
        },
        dn = bn(J(O(function(a) {
            var b;
            return null != (b = a.Jc) ? b : cn(a)
        }), O(function(a) {
            return isFinite(a) ? a : 0
        }))),
        en = bn(J(O(function(a) {
            var b;
            return null != (b = a.Jc) ? b : cn(a)
        }), O(function(a) {
            return isFinite(a) ? a : -1
        })));
    var fn = function(a, b) {
        this.a = a;
        this.b = b;
        if (a.clock.timeline !== b.clock.timeline) throw Error();
    };
    fn.prototype.ea = function(a) {
        return a instanceof fn ? this.a.ea(a.a) && this.b.ea(a.b) : !1
    };
    fn.prototype.na = function(a) {
        var b = this.a.na(a).value,
            c = this.b.na(a).value;
        return {
            timestamp: a,
            value: [b, c]
        }
    };
    da.Object.defineProperties(fn.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.active || this.b.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.a.clock
            }
        },
        u: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a = this.a.u.timestamp.maximum(this.b.u.timestamp),
                    b = this.a.u.timestamp.equals(a) ? this.a.u.value : this.a.na(a).value,
                    c = this.b.u.timestamp.equals(a) ? this.b.u.value : this.b.na(a).value;
                return {
                    timestamp: a,
                    value: [b, c]
                }
            }
        }
    });
    var gn = function(a, b) {
        this.input = a;
        this.Xc = b;
        this.u = {
            timestamp: this.input.u.timestamp,
            value: this.Xc(this.input.u.value)
        }
    };
    gn.prototype.ea = function(a) {
        return a instanceof gn ? this.input.ea(a.input) && this.Xc === a.Xc : !1
    };
    gn.prototype.na = function(a) {
        a = this.input.na(a);
        return {
            timestamp: a.timestamp,
            value: this.Xc(a.value)
        }
    };
    da.Object.defineProperties(gn.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.active
            }
        },
        clock: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.input.clock
            }
        }
    });

    function hn(a, b, c) {
        c = void 0 === c ? function(d, e) {
            return d === e
        } : c;
        return a.timestamp.equals(b.timestamp) && c(a.value, b.value)
    };
    var jn = function(a, b, c) {
        this.clock = a;
        this.u = b;
        this.active = c
    };
    jn.prototype.ea = function(a) {
        return a instanceof jn ? this.active === a.active && this.clock.timeline === a.clock.timeline && hn(this.u, a.u) : !1
    };
    jn.prototype.na = function(a) {
        return {
            timestamp: a,
            value: this.u.value + (this.active ? Math.max(0, le(a, this.u.timestamp)) : 0)
        }
    };
    var kn = function() {};
    kn.prototype.ga = function() {
        return this.na(this.clock.now())
    };
    kn.prototype.oa = function(a) {
        var b;
        a = null != (b = a.get(this.clock.timeline)) ? b : this.clock.now();
        return this.na(a)
    };
    kn.prototype.map = function(a) {
        return new ln(this, a)
    };
    kn.prototype.pa = function(a) {
        return new mn(this, a)
    };
    var mn = function() {
        fn.apply(this, arguments);
        this.map = kn.prototype.map;
        this.pa = kn.prototype.pa;
        this.ga = kn.prototype.ga;
        this.oa = kn.prototype.oa
    };
    v(mn, fn);
    var nn = function() {
        jn.apply(this, arguments);
        this.map = kn.prototype.map;
        this.pa = kn.prototype.pa;
        this.ga = kn.prototype.ga;
        this.oa = kn.prototype.oa
    };
    v(nn, jn);
    var ln = function() {
        gn.apply(this, arguments);
        this.map = kn.prototype.map;
        this.pa = kn.prototype.pa;
        this.ga = kn.prototype.ga;
        this.oa = kn.prototype.oa
    };
    v(ln, gn);

    function on(a, b) {
        a.Da && (a.mb = a.Da);
        a.Da = b;
        a.mb && a.mb.value ? (b = Math.max(0, le(b.timestamp, a.mb.timestamp)), a.totalTime += b, a.ma += b) : a.ma = 0;
        return a
    }

    function pn(a) {
        return J(Ze(on, {
            totalTime: 0,
            ma: 0
        }), O(function(b) {
            return new nn(a, {
                timestamp: b.Da.timestamp,
                value: b.totalTime
            }, b.Da.value)
        }))
    }

    function qn(a) {
        return J(Ze(on, {
            totalTime: 0,
            ma: 0
        }), O(function(b) {
            return new nn(a, {
                timestamp: b.Da.timestamp,
                value: b.ma
            }, b.Da.value)
        }))
    };

    function rn(a) {
        return J(qn(a), O(function(b) {
            return b.map(function(c) {
                return Math.round(c)
            })
        }))
    };
    var sn = function(a, b) {
        this.u = b;
        this.ga = kn.prototype.ga;
        this.oa = kn.prototype.oa;
        this.map = kn.prototype.map;
        this.pa = kn.prototype.pa;
        this.clock = a
    };
    sn.prototype.ea = function(a) {
        return a.active
    };
    sn.prototype.na = function() {
        return this.u
    };
    da.Object.defineProperties(sn.prototype, {
        active: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return !1
            }
        }
    });

    function tn(a, b) {
        return b.g(O(function(c) {
            return new sn(a.l, {
                timestamp: a.l.now(),
                value: c
            })
        }))
    };

    function un(a, b) {
        return 1 <= a ? !0 : 0 >= a ? !1 : a >= b
    };

    function vn(a) {
        return function(b) {
            return b.g(zf(a), O(function(c) {
                var d = t(c);
                c = d.next().value;
                d = d.next().value;
                return {
                    timestamp: c.timestamp,
                    value: un(c.value, d)
                }
            }))
        }
    };
    var wn = O(function(a) {
        if ("omid" === a.value.W) {
            if ("nio" === a.value.O) return "omio";
            if ("geo" === a.value.O) return "omgeo"
        }
        return "geo" === a.value.O || "nio" === a.value.O ? a.value.W : a.value.O
    });

    function xn() {
        return J(T(function(a, b) {
            return 0 < b
        }), yn, W(-1), V())
    }
    var yn = J(T(function(a) {
        return !isNaN(a)
    }), Ze(function(a, b) {
        return isNaN(a) ? b : Math.min(a, b)
    }, NaN), V());
    var zn = bn(J(O(function(a) {
        return a.R.width * a.R.height / (a.Z.width * a.Z.height)
    }), O(function(a) {
        return isFinite(a) ? Math.min(1, a) : 0
    })));

    function An(a, b, c) {
        return a ? R([b, c]).g(T(function(d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            return d.timestamp.equals(e.timestamp)
        }), O(function(d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            return d.value > e.value ? d : e
        })) : b
    }

    function Bn(a) {
        return function(b) {
            var c = b.g(dn),
                d = b.g(zn);
            return a instanceof K ? a.g(X(function(e) {
                return An(e, c, d)
            })) : An(a.value, c, d)
        }
    };
    var Cn = J(bn(O(function(a) {
        a = a.Jc ? a.Jc * a.F.width * a.F.height / (a.N.width * a.N.height) : a.R.width * a.R.height / (a.N.width * a.N.height);
        return isFinite(a) ? a : 0
    })));

    function Dn(a, b, c, d) {
        var e = d.Lc,
            f = d.Pd,
            g = d.ag,
            h = d.Qe,
            k = d.he,
            l = d.Df,
            q = d.Oc,
            r = d.fa;
        b = En(a, c, b);
        c = Fn(a, c);
        d = Gn(b, r);
        r = Hn(a, e, l, d, r, b);
        var p = r.g(O(function(z) {
                return z.value
            }), V(), Y(a, 1), Ze(function(z, U) {
                return Math.max(z, U)
            }, 0)),
            x = r.g(O(function(z) {
                return z.value
            }), xn(), Y(a, 1)),
            A = b.g(en, O(function(z) {
                return z.value
            }), Ee(2), V(), Y(a, 1));
        g = In(a, b, g, h);
        var F = g.g(W(!1), V(), O(function(z) {
            return z ? k : f
        }));
        h = r.g(vn(F), V(), Y(a, 1));
        var D = R([h, b]).g(T(function(z) {
                var U = t(z);
                z = U.next().value;
                U = U.next().value;
                return z.timestamp.equals(U.timestamp)
            }),
            O(function(z) {
                var U = t(z);
                z = U.next().value;
                U = U.next().value;
                return {
                    visible: z.value,
                    geometry: U.value.F
                }
            }), Ze(function(z, U) {
                return !U.visible && z.visible ? z : U
            }, {
                visible: !1,
                geometry: Xk
            }), O(function(z) {
                return z.geometry
            }), W(Xk), Y(a, 1), V(Yk));
        l = l instanceof K ? l.g(V(), We()) : wd;
        F = R([l, F]).g(We());
        var B = b.g(T(function(z) {
                return "ns" !== z.value.W && "ns" !== z.value.O
            }), Ze(function(z) {
                return z + 1
            }, 0), W(0), Y(a, 1)),
            S = c.g(We(!0), W(!1), Y(a, 1));
        S = R([q, S]).g(O(function(z) {
            var U = t(z);
            z = U.next().value;
            U = U.next().value;
            return z &&
                !U
        }), Y(a, 1));
        var oa = b.g(Cn, V()),
            ia = oa.g(O(function(z) {
                return z.value
            }), Ze(function(z, U) {
                return Math.max(z, U)
            }, 0), V(), Y(a, 1)),
            C = oa.g(O(function(z) {
                return z.value
            }), xn(), Y(a, 1));
        return {
            ye: l,
            lc: F,
            xa: {
                Qh: b,
                Ff: b.g(wn),
                Gc: D.g(V(Yk)),
                visible: h.g(V(hn)),
                Be: r.g(V(hn)),
                Cf: p,
                vh: x,
                Te: b.g(Gm, V(lb)),
                mi: oa,
                oh: ia,
                uh: C,
                Kc: c,
                V: (new Z(new L)).Y(a),
                wf: g,
                Lc: e,
                Oc: q,
                Rd: S,
                pi: B,
                lh: A,
                md: d
            }
        }
    }

    function Fn(a, b) {
        return b.g(T(function() {
            return !1
        }), O(function(c) {
            return c
        }), oe(function(c) {
            return (new Z(c)).Y(a)
        }))
    }

    function Gn(a, b) {
        b = b.g(O(function(d) {
            return d.L
        }));
        a = R([a, b]).g(O(function(d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            if (0 !== e && 1 !== e && d.value.isIntersecting) return d.value.zf
        }), V());
        b = a.g(O(function(d) {
            return void 0 === d ? !0 : d
        }), Ze(function(d, e) {
            return d || !e
        }, !1));
        var c = a.g(Ze(function(d, e) {
            return void 0 === e ? d : e ? !1 : null != d ? d : !0
        }, void 0), O(function(d) {
            return !!d
        }));
        return Cd(a, b, c).g(O(function(d) {
            var e = t(d);
            d = e.next().value;
            var f = e.next().value;
            e = e.next().value;
            var g = 0;
            if (void 0 === d) return 0;
            d &&
                (g |= 1);
            d || (g |= 2);
            f && (g |= 4);
            e && (g |= 8);
            return g
        }))
    }

    function En(a, b, c) {
        return b.g(df(wd), Y(a, 1)).g(V(function(d, e) {
            return hn(d, e, Nm)
        }), W({
            timestamp: c.now(),
            value: Mm
        }), Y(a, 1))
    }

    function Hn(a, b, c, d, e, f) {
        c = f.g(Bn(c), bn(O(function(g) {
            return qm(g)
        })), Y(a, 1));
        if (b instanceof Z) return c;
        e = e.g(O(function(g) {
            return g.L
        }));
        return R([c, b, d, e]).g(O(function(g) {
            var h = t(g);
            g = h.next().value;
            var k = h.next().value,
                l = h.next().value;
            h = 3 === h.next().value && 0 !== (l & 2);
            return {
                timestamp: k.timestamp.maximum(g.timestamp),
                value: k.value || h ? 0 : g.value
            }
        }), V(hn), Y(a, 10))
    }

    function In(a, b, c, d) {
        b = [b.g(O(function(e) {
            return 242500 <= e.value.F.width * e.value.F.height
        }))];
        c instanceof K && b.push(c.g(O(function(e) {
            return !!e
        })));
        c = R(b);
        return d ? c.g(O(function(e) {
            return e.some(function(f) {
                return f
            })
        }), W(!1), V(), Y(a, 1)) : (new Z(!1)).Y(a)
    };
    var Jn = function(a) {
            this.l = a;
            this.jd = null;
            this.timeout = new L
        },
        Ln = function(a, b) {
            Kn(a);
            a.jd = a.l.setTimeout(function() {
                return void a.timeout.next()
            }, b)
        },
        Kn = function(a) {
            null !== a.jd && (a.l.clearTimeout(a.jd), a.jd = null)
        };

    function Mn(a, b, c, d) {
        var e = Nn.Xf,
            f = new Jn(b);
        c = c.g(W(void 0), X(function() {
            Kn(f);
            return d
        })).g(O(function(g) {
            Kn(f);
            var h = g.u,
                k = g.active;
            h.value >= e || !k || (k = b.now(), k = Math.max(0, le(k, h.timestamp)), Ln(f, Math.max(0, e - h.value - k)));
            return g.map(function(l) {
                return l >= e
            })
        }));
        return R([c, ud(f.timeout, M(void 0))]).g(O(function(g) {
            return t(g).next().value
        }), tf(function(g) {
            return !g.ga().value
        }, !0), Y(a, 1))
    };

    function On(a) {
        var b = new nn(a, {
            timestamp: a.now(),
            value: 0
        }, !1);
        return J(qn(a), Ze(function(c, d) {
            return c.u.value > d.u.value ? new nn(a, c.u, !1) : d
        }, b), O(function(c) {
            return c.map(function(d) {
                return Math.round(d)
            })
        }))
    };

    function Pn(a) {
        return function(b) {
            return J(vn(M(b)), On(a))
        }
    };

    function Qn(a) {
        return function(b) {
            return J(bn(O(function(c) {
                return un(c, b)
            })), pn(a), O(function(c) {
                return c.map(function(d) {
                    return Math.round(d)
                })
            }))
        }
    };

    function Rn(a) {
        return a.map(function(b) {
            return b.map(function(c) {
                return [c]
            })
        }).reduce(function(b, c) {
            return b.pa(c).map(function(d) {
                return d.flat()
            })
        })
    }

    function Sn(a, b) {
        return a.pa(b).map(function(c) {
            var d = t(c);
            c = d.next().value;
            d = d.next().value;
            return c - d
        })
    }

    function Tn(a, b, c, d, e, f) {
        var g = Un;
        if (1 < g.length)
            for (var h = 0; h < g.length - 1; h++)
                if (g[h] < g[h + 1]) throw Error();
        h = f.g(W(void 0), X(function() {
            return d.g(rn(a))
        }), V(function(k, l) {
            return k.ea(l)
        }), Y(b, 1));
        f = f.g(W(void 0), X(function() {
            return d.g(On(a))
        }), V(function(k, l) {
            return k.ea(l)
        }), Y(b, 1));
        return {
            cc: e.g(W(void 0), X(function() {
                return c.g(Hm(Pn(a), g))
            }), O(Rn), V(function(k, l) {
                return k.ea(l)
            }), Y(b, 1)),
            pc: e.g(W(void 0), X(function() {
                return c.g(Hm(Qn(a), g), O(function(k) {
                    return k.map(function(l, q) {
                        return 0 < q ?
                            Sn(l, k[q - 1]) : l
                    })
                }))
            }), O(Rn), V(function(k, l) {
                return k.ea(l)
            }), Y(b, 1)),
            bc: f,
            cb: h.g(V(function(k, l) {
                return k.ea(l)
            }), Y(b, 1))
        }
    };

    function Vn(a) {
        var b;
        if (b = Wn(a)) b = !Xn(a, "abgcp") && !Xn(a, "abgc") && !("string" === typeof a.id && "abgb" === a.id) && !("string" === typeof a.id && "mys-abgc" === a.id) && !Xn(a, "cbb");
        return b
    }

    function Xn(a, b) {
        return a.classList ? a.classList.contains(b) : -1 < (" " + a.className + " ").indexOf(" " + b + " ")
    }

    function Wn(a) {
        try {
            var b = a.getBoundingClientRect();
            return b && 30 <= b.height && 30 <= b.width
        } catch (c) {
            return !1
        }
    }

    function Yn(a, b) {
        if (void 0 === a.i || !a.i.children) return a;
        for (var c = kb(a.i.children); c.length;) {
            var d = b ? c.filter(Vn) : c.filter(Wn);
            if (1 === d.length) return new Fk(d[0]);
            if (1 < d.length) break;
            c = pb(c, function(e) {
                return kb(e.children)
            })
        }
        return a
    }

    function Zn(a, b, c, d, e) {
        if (c) return {
            Fc: b,
            ob: M(null)
        };
        c = b.element.g(O(function(f) {
            a: if (void 0 === f.i || Wn(f.i)) f = {
                    Yc: f,
                    ob: "mue"
                };
                else {
                    var g = Yn(f, e);
                    if (void 0 !== g.i && Wn(g.i)) f = {
                        Yc: g,
                        ob: "ie"
                    };
                    else {
                        if (d || a.Xd)
                            if (g = a.document.querySelector(".GoogleActiveViewInnerContainer")) {
                                f = {
                                    Yc: new Fk(g),
                                    ob: "ce"
                                };
                                break a
                            }
                        f = {
                            Yc: f,
                            ob: "mue"
                        }
                    }
                }return f
        }), nf());
        return {
            Fc: {
                Lb: b.Lb,
                element: c.g(O(function(f) {
                    return f.Yc
                }))
            },
            ob: c.g(O(function(f) {
                return f.ob
            }))
        }
    };

    function $n(a, b, c, d) {
        var e = d.Lc,
            f = d.Pd,
            g = d.ag,
            h = d.Qe,
            k = d.he,
            l = d.Df,
            q = d.Oc,
            r = d.fa;
        b = ao(a, c, b);
        c = bo(a, c);
        d = co(b, r);
        r = eo(a, e, l, d, r, b);
        var p = r.g(O(function(C) {
                return C.value
            }), V(), Y(a, 1), Ze(function(C, z) {
                return Math.max(C, z)
            }, 0)),
            x = r.g(O(function(C) {
                return C.value
            }), xn(), Y(a, 1)),
            A = b.g(en, O(function(C) {
                return C.value
            }), Ee(2), V(), Y(a, 1));
        g = fo(a, b, g, h);
        var F = g.g(W(!1), V(), O(function(C) {
            return C ? k : f
        }));
        h = r.g(vn(F), V(), Y(a, 1));
        var D = R([h, b]).g(T(function(C) {
                var z = t(C);
                C = z.next().value;
                z = z.next().value;
                return C.timestamp.equals(z.timestamp)
            }),
            O(function(C) {
                var z = t(C);
                C = z.next().value;
                z = z.next().value;
                return {
                    visible: C.value,
                    geometry: z.value.F
                }
            }), Ze(function(C, z) {
                return !z.visible && C.visible ? C : z
            }, {
                visible: !1,
                geometry: Xk
            }), O(function(C) {
                return C.geometry
            }), W(Xk), Y(a, 1), V(Yk));
        l = l instanceof K ? l.g(V(), We()) : wd;
        F = R([l, F]).g(We());
        var B = b.g(T(function(C) {
                return "ns" !== C.value.W && "ns" !== C.value.O
            }), Ze(function(C) {
                return C + 1
            }, 0), W(0), Y(a, 1)),
            S = c.g(We(!0), W(!1), Y(a, 1));
        S = R([q, S]).g(O(function(C) {
            var z = t(C);
            C = z.next().value;
            z = z.next().value;
            return C &&
                !z
        }), Y(a, 1));
        var oa = b.g(Cn, V()),
            ia = oa.g(O(function(C) {
                return C.value
            }), Ze(function(C, z) {
                return Math.max(C, z)
            }, 0), V(), Y(a, 1));
        a = oa.g(O(function(C) {
            return C.value
        }), xn(), Y(a, 1));
        return {
            ye: l,
            lc: F,
            xa: {
                Qh: b,
                Ff: b.g(wn),
                Gc: D.g(V(Yk)),
                visible: h.g(V(hn)),
                Be: r.g(V(hn)),
                Cf: p,
                vh: x,
                Te: b.g(Gm, V(lb)),
                mi: oa,
                oh: ia,
                uh: a,
                Kc: c,
                V: b.g(O(function(C) {
                    return C.value.V
                })),
                wf: g,
                Lc: e,
                Oc: q,
                Rd: S,
                pi: B,
                lh: A,
                md: d
            }
        }
    }

    function bo(a, b) {
        return b.g(T(function() {
            return !1
        }), O(function(c) {
            return c
        }), oe(function(c) {
            return (new Z(c)).Y(a)
        }))
    }

    function ao(a, b, c) {
        return b.g(df(wd), Y(a, 1)).g(V(function(d, e) {
            return hn(d, e, Nm)
        }), W({
            timestamp: c.now(),
            value: Mm
        }), Y(a, 1))
    }

    function eo(a, b, c, d, e, f) {
        c = f.g(Bn(c), bn(O(function(g) {
            return qm(g)
        })), Y(a, 1));
        if (b instanceof Z) return c;
        e = e.g(O(function(g) {
            return g.L
        }));
        return R([c, b, d, e]).g(O(function(g) {
            var h = t(g);
            g = h.next().value;
            var k = h.next().value,
                l = h.next().value;
            h = 3 === h.next().value && 0 !== (l & 2);
            return {
                timestamp: k.timestamp.maximum(g.timestamp),
                value: k.value || h ? 0 : g.value
            }
        }), V(hn), Y(a, 1))
    }

    function fo(a, b, c, d) {
        b = [b.g(O(function(e) {
            return 242500 <= e.value.F.width * e.value.F.height
        }))];
        c instanceof K && b.push(c.g(O(function(e) {
            return !!e
        })));
        c = R(b);
        return d ? c.g(O(function(e) {
            return e.some(function(f) {
                return f
            })
        }), W(!1), V(), Y(a, 1)) : (new Z(!1)).Y(a)
    }

    function co(a, b) {
        b = b.g(O(function(d) {
            return d.L
        }));
        a = R([a, b]).g(O(function(d) {
            var e = t(d);
            d = e.next().value;
            e = e.next().value;
            if (0 !== e && 1 !== e && d.value.isIntersecting) return d.value.zf
        }), V());
        b = a.g(O(function(d) {
            return void 0 === d ? !0 : d
        }), Ze(function(d, e) {
            return d || !e
        }, !1));
        var c = a.g(Ze(function(d, e) {
            return void 0 === e ? d : e ? !1 : null != d ? d : !0
        }, void 0), O(function(d) {
            return !!d
        }));
        return Cd(a, b, c).g(O(function(d) {
            var e = t(d);
            d = e.next().value;
            var f = e.next().value;
            e = e.next().value;
            var g = 0;
            if (void 0 === d) return 0;
            d &&
                (g |= 1);
            d || (g |= 2);
            f && (g |= 4);
            e && (g |= 8);
            return g
        }))
    };
    var go = J(Cl("data-google-av-itpl"), O(function(a) {
        return Number(a)
    }), O(function(a) {
        return isNaN(a) ? 1 : a
    }));
    var ho = {
            vi: "addEventListener",
            Ci: "getMaxSize",
            Di: "getScreenSize",
            Ei: "getState",
            Fi: "getVersion",
            Qi: "removeEventListener",
            Mi: "isViewable"
        },
        io = function(a, b) {
            this.ua = null;
            this.bh = new L;
            b = b || this.ri;
            var c = a.Xd,
                d = !a.Bb;
            if (c && d) {
                var e = a.global.top.mraid;
                if (e) {
                    this.Ec = b(e);
                    this.ua = e;
                    this.qb = 3;
                    return
                }
            }(a = a.global.mraid) ? (this.Ec = b(a), this.ua = a, this.qb = c ? d ? 2 : 1 : 0) : (this.qb = -1, this.Ec = 2)
        };
    io.prototype.addEventListener = function(a, b) {
        return this.Ib("addEventListener", a, b)
    };
    io.prototype.removeEventListener = function(a, b) {
        return this.Ib("removeEventListener", a, b)
    };
    io.prototype.kf = function() {
        var a = this.Ib("getVersion");
        return "string" === typeof a ? a : ""
    };
    io.prototype.getState = function() {
        var a = this.Ib("getState");
        return "string" === typeof a ? a : ""
    };
    var jo = function(a) {
            a = a.Ib("isViewable");
            return "boolean" === typeof a ? a : !1
        },
        ko = function(a) {
            if (a.ua) return a = a.ua.AFMA_LIDAR, "string" === typeof a ? a : void 0
        };
    io.prototype.ri = function(a) {
        return a ? a.IS_GMA_SDK ? Object.values(ho).every(function(b) {
            return "function" === typeof a[b]
        }) ? 0 : 1 : 2 : 1
    };
    io.prototype.Ib = function(a) {
        var b = w.apply(1, arguments);
        if (this.ua) try {
            return this.ua[a].apply(this.ua, u(b))
        } catch (c) {
            this.bh.next(a)
        }
    };
    da.Object.defineProperties(io.prototype, {
        bf: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (this.ua) {
                    var a = this.ua.AFMA_LIDAR_EXP_1;
                    return void 0 === a ? void 0 : !!a
                }
            },
            set: function(a) {
                this.ua && (this.ua.AFMA_LIDAR_EXP_1 = a)
            }
        }
    });

    function lo(a, b) {
        return -1 !== (new io(a)).qb ? (new Z(!0)).Y(a.h) : b.g(Cl("data-google-av-inapp"), O(function(c) {
            return null !== c
        }), Y(a.h, 1))
    };
    var no = function(a, b) {
            var c = this;
            this.l = a;
            this.ie = this.Vc = null;
            this.Vh = b.g(V()).subscribe(function(d) {
                mo(c);
                c.ie = d
            })
        },
        oo = function(a, b) {
            mo(a);
            a.Vc = a.l.setTimeout(function() {
                var c;
                return void(null == (c = a.ie) ? void 0 : c.next())
            }, b)
        },
        mo = function(a) {
            null !== a.Vc && a.l.clearTimeout(a.Vc);
            a.Vc = null
        };
    no.prototype.xb = function() {
        mo(this);
        this.Vh.unsubscribe();
        this.ie = null
    };

    function po(a, b, c, d, e) {
        var f = Nn.Xf;
        var g = void 0 === g ? new no(b, d) : g;
        return (new K(function(h) {
            var k = c.g(W(void 0), X(function() {
                return qo(e)
            })).g(O(function(l) {
                var q = l.value;
                l = l.timestamp;
                var r = q.visible;
                q = q.cb;
                var p = q >= f;
                p || !r ? mo(g) : (l = Math.max(0, le(b.now(), l)), oo(g, Math.max(0, f - q - l)));
                return p
            }), Ze(function(l, q) {
                return q || l
            }, !1), V()).subscribe(h);
            return function() {
                g.xb();
                k.unsubscribe()
            }
        })).g(tf(function(h) {
            return !h
        }, !0), Y(a, 1))
    }

    function qo(a) {
        return tm([a, a.g(Im())]).g(O(function(b) {
            var c = t(b);
            b = c.next().value;
            c = c.next().value;
            return {
                timestamp: b.timestamp,
                value: {
                    visible: b.value,
                    cb: c.value
                }
            }
        }), V(function(b, c) {
            return hn(b, c, function(d, e) {
                return d.cb === e.cb && d.visible === e.visible
            })
        }))
    };

    function ro(a, b) {
        return {
            yd: b.g(Cl("data-google-av-adk")),
            Bc: b.g(Cl("data-google-av-btr"), V(), O(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Gd: b.g(Cl("data-google-av-cpmav"), V(), O(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Fe: b.g(Cl("data-google-av-vrus"), V(), O(function(c) {
                return null === c ? [] : c.split("|").filter(function(d) {
                    return "" !== d
                })
            })),
            Bg: gm(a, b),
            flags: b.g(Cl("data-google-av-flags"), V()),
            Sa: lo(a, b),
            de: b.g(xm("cr", function(c) {
                return "1" ===
                    c
            }), V()),
            ih: b.g(xm("omid", function(c) {
                return "1" === c
            }), V()),
            Zd: b.g(go),
            metadata: b.g(Cl("data-google-av-metadata")),
            La: b.g(Jl),
            Aa: b.g(Dl),
            ui: b.g(xm("la", function(c) {
                return "1" === c
            }), V()),
            jb: b.g(Cl("data-google-av-turtlex"), O(function(c) {
                return null !== c
            }), V()),
            fe: b.g(Cl("data-google-av-vattr"), O(function(c) {
                return null !== c
            }), V())
        }
    };

    function so() {
        return J(wm(), Ze(function(a, b) {
            return Math.max(a, b)
        }, 0), O(function(a) {
            return Math.round(a)
        }))
    };

    function to(a) {
        return J(vn(M(a)), so())
    };

    function uo(a, b, c, d, e) {
        c = c.g(O(function() {
            return !1
        }));
        d = R([e, d]).g(X(function(f) {
            f = t(f).next().value;
            return vo(b, f)
        }));
        return ud(M(!1), c, d).g(V(), Y(a.h, 1))
    }

    function vo(a, b) {
        return a.g(O(function(c) {
            return b || 0 === c || 2 === c
        }))
    };
    var wo = [33, 32],
        xo = J(go, O(function(a) {
            return 0 <= wo.indexOf(a)
        }), V());

    function yo(a, b, c, d, e, f) {
        var g = c.g(O(function(k) {
                return 9 === k
            })),
            h = b.element.g(xo);
        c = e.g(T(function(k) {
            return k
        }), X(function() {
            return R([g, h])
        }), O(function(k) {
            k = t(k);
            var l = k.next().value;
            return !k.next().value || l
        }), V());
        f = R([c, d.g(V()), f]).g(O(function(k) {
            var l = t(k);
            k = l.next().value;
            var q = l.next().value;
            l = l.next().value;
            return Zn(a, b, !k, q, l)
        }), kf(1), Ec());
        d = f.g(O(function(k) {
            return k.Fc
        }));
        f = f.g(X(function(k) {
            return k.ob
        }), W(null), V(), Y(a.h, 1));
        return {
            Ga: d,
            Sb: f
        }
    };

    function zo(a) {
        var b = void 0 === b ? !1 : b;
        return J(X(function(c) {
            return Wk(a.document, c, b)
        }), Y(a.h, 1))
    };
    var Ao = function(a, b, c, d, e, f) {
        this.ac = b.element.g(zo(a), Y(a.h, 1));
        this.Tf = uo(a, c, b.element, this.ac, d);
        c = yo(a, b, e, d, this.Tf, f);
        d = c.Sb;
        this.Ga = c.Ga;
        this.Sb = d;
        this.Ge = ud((new Z(1)).Y(a.h), b.element.g(Ee(1), O(function() {
            return 2
        }), Y(a.h, 1)), this.ac.g(Ee(1), O(function() {
            return 3
        }), Y(a.h, 1)), this.Tf.g(T(Boolean), Ee(1), O(function() {
            return 0
        }), Y(a.h, 1))).g(tf(function(g) {
            return 0 !== g
        }, !0), Y(a.h, 0))
    };

    function Bo(a, b) {
        return a && 0 === b ? 15 : a || 1 !== b ? null : 14
    }

    function Co(a, b, c) {
        return b instanceof K ? b.g(X(function(d) {
            return (d = Bo(d, c)) ? yc(new Xd(d)) : a
        })) : (b = Bo(b.value, c)) ? yc(new Xd(b)) : a
    };

    function Do(a) {
        var b = new Xd(13);
        if (1 > a.length) return {
            Ve: tc,
            Dd: tc
        };
        var c = new L;
        return {
            Ve: a.slice(1).reduce(function(d, e) {
                return d.g(oe(function(f) {
                    c.next(f);
                    return e
                }))
            }, a[0]).g(oe(function(d) {
                c.next(d);
                return yc(b)
            }), bf(new L), Ec()),
            Dd: c
        }
    };
    var Eo = function() {};
    var Fo = function(a, b) {
        this.context = a;
        this.hi = b
    };
    v(Fo, Eo);
    Fo.prototype.Qa = function(a, b) {
        var c = this.hi.map(function(f) {
                return f.Qa(a, b)
            }),
            d = Do(c.map(function(f) {
                return f.Ra
            })),
            e = d.Dd.g(Go());
        return {
            Ra: d.Ve.g(Y(this.context.h, 1)),
            Oa: Object.assign.apply(Object, [{
                ze: e,
                gj: d.Dd
            }].concat(u(c.map(function(f) {
                return f.Oa
            }))))
        }
    };
    var Go = function() {
        return Ze(function(a, b) {
            b instanceof Xd ? a.push(b.rh) : a.push(-1);
            return a
        }, [])
    };

    function Ho(a, b) {
        var c = a.g(bf(new L), Ec());
        return X(function(d) {
            return c.g(b(d))
        })
    };

    function Io(a, b) {
        var c = void 0 === c ? function() {
            var f = (fk(a.global) ? a.global.innerWidth : 0) || a.Ud() || 0,
                g = (fk(a.global) ? a.global.innerHeight : 0) || a.Sd() || 0;
            return {
                left: 0,
                top: 0,
                width: f,
                height: g
            }
        } : c;
        var d = a.Bb ? Vk(a.document) ? a.hh ? null : yc(new Xd(5)) : yc(new Xd(4)) : yc(new Xd(3));
        if (d) return d;
        var e = new L;
        return ud(M({}), b, e).g(O(function() {
            var f = Jo(a, c);
            return {
                timestamp: a.l.now(),
                value: {
                    W: "iem",
                    Z: f,
                    N: f,
                    V: e,
                    ba: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Y(a.h, 1))
    }

    function Jo(a, b) {
        b = b();
        var c = ak(document),
            d = function(p, x) {
                return !!a.document.elementFromPoint(p, x)
            },
            e = Math.floor(b.left - c.x),
            f = Math.floor(b.top - c.y),
            g = Math.floor(b.left + b.width - c.x),
            h = Math.floor(b.top + b.height - c.y);
        b = d(e, f);
        c = d(g, h);
        if (b && c) return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        };
        var k = d(g, f),
            l = d(e, h);
        if (b) h = Ko(f, h, function(p) {
            return d(e, p)
        }), g = Ko(e, g, function(p) {
            return d(p, f)
        });
        else if (k) h = Ko(f, h, function(p) {
            return d(g, p)
        }), e = Ko(g, e, function(p) {
            return d(p, f)
        });
        else if (l) f = Ko(h, f, function(p) {
            return d(e,
                p)
        }), g = Ko(e, g, function(p) {
            return d(p, h)
        });
        else if (c) f = Ko(h, f, function(p) {
            return d(g, p)
        }), e = Ko(g, e, function(p) {
            return d(p, h)
        });
        else {
            var q = Math.floor((e + g) / 2),
                r = Math.floor((f + h) / 2);
            if (!d(q, r)) return {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            };
            f = Ko(r, f, function(p) {
                return d(q, p)
            });
            h = Ko(r, h, function(p) {
                return d(q, p)
            });
            e = Ko(q, e, function(p) {
                return d(p, r)
            });
            g = Ko(q, g, function(p) {
                return d(p, r)
            })
        }
        return {
            top: f,
            left: e,
            width: g - e,
            height: h - f
        }
    }

    function Ko(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e === a || e === b) break;
            c(e) ? a = e : b = e
        }
        return a
    };
    var Lo = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    v(Lo, Eo);
    Lo.prototype.Qa = function(a, b) {
        var c = Ho(Io(this.context, this.Ia), Pm(this.context, b.La));
        return {
            Ra: Co(a.Ga.g(c), b.Sa, 0),
            Oa: {}
        }
    };

    function Mo(a, b) {
        if (a.Bb) return yc(new Xd(6));
        var c = new L;
        return ud(M({}), b, c).g(O(function() {
            return {
                timestamp: a.l.now(),
                value: {
                    W: "geo",
                    Z: No(a),
                    N: ul(a, !0),
                    V: c,
                    ba: {
                        x: 0,
                        y: 0
                    }
                }
            }
        }), Ak(a.h))
    }

    function No(a) {
        var b = ul(a, !1);
        if (!a.Xd || !fk(a.global.parent) || a.global.parent === a.global) return b;
        var c = new rl(a.global.parent, a.eb);
        c.I = a.I;
        c = No(c);
        a = a.global.frameElement.getBoundingClientRect();
        return Zk($k(Zk(c, a), {
            x: b.left - a.left,
            y: b.top - a.top
        }), b)
    };
    var Oo = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    v(Oo, Eo);
    Oo.prototype.Qa = function(a, b) {
        var c = Ho(Mo(this.context, this.Ia), Pm(this.context, b.La));
        return {
            Ra: Co(a.Ga.g(c), b.Sa, 0),
            Oa: {}
        }
    };
    var Po = function(a, b, c) {
        c = void 0 === c ? Um(a, b) : c;
        this.context = a;
        this.fh = c
    };
    v(Po, Eo);
    Po.prototype.Qa = function(a, b) {
        var c = this.fh(b.fa);
        return {
            Ra: Co(a.Ga.g(c, Ym(this.context)), b.Sa, 0),
            Oa: {}
        }
    };

    function Qo(a, b, c, d, e) {
        var f = void 0 === f ? new io(a) : f;
        var g = void 0 === g ? Ff(a.l, 500) : g;
        var h = void 0 === h ? Ff(a.l, 100) : h;
        e = M(f).g(Ro(c), wf(function(k) {
            d.next(k.qb)
        }), So(a, h), To(a), Uo(a, e), kf(1), Ec());
        f = new L;
        b = ud(M({}), b, f);
        return e.g(Vo(a, f, b, g, c), Y(a.h, 1))
    }

    function Uo(a, b) {
        return J(function(c) {
            return R([c, b])
        }, ue(function(c) {
            c = t(c);
            var d = c.next().value;
            return 9 !== c.next().value || jo(d) ? M(!0) : Wo(a, d, "viewableChange").g(T(function(e) {
                return t(e).next().value
            }), Ee(1))
        }), O(function(c) {
            return t(c).next().value
        }))
    }

    function Ro(a) {
        return X(function(b) {
            if (-1 === b.qb) return a.next("if"), yc(new Xd(7));
            if (0 !== b.Ec) switch (b.Ec) {
                case 1:
                    return a.next("mm"), yc(new Xd(18));
                case 2:
                    return a.next("ng"), yc(new Xd(17));
                default:
                    return a.next("i"), yc(new Xd(8))
            }
            return M(b)
        })
    }

    function So(a, b) {
        return ue(function() {
            var c = a.Hf;
            return "complete" === Tk(a.document) ? M(!0) : c.g(ue(function() {
                return b
            }))
        })
    }
    var To = function(a) {
        return X(function(b) {
            return "loading" !== b.getState() ? M(b) : Wo(a, b, "ready").g(O(function() {
                return b
            }))
        })
    };

    function Vo(a, b, c, d, e) {
        return X(function(f) {
            var g = ko(f);
            if ("string" !== typeof g) return e.next("nc"), yc(new Xd(9));
            void 0 !== f.bf && (f.bf = !0);
            g = Wo(a, f, g, Xo);
            var h = {
                version: f.kf(),
                qb: f.qb
            };
            g = g.g(O(function(l) {
                return Yo.apply(null, [a, b, f, h].concat(u(l)))
            }));
            var k = d.g(wf(function() {
                e.next("mt")
            }), X(function() {
                return yc(new Xd(10))
            }));
            g = zd(g, k);
            return R([g, c]).g(O(function(l) {
                l = t(l).next().value;
                return Object.assign({}, l, {
                    timestamp: a.l.now()
                })
            }))
        })
    }

    function Xo(a, b) {
        return (null === b || "number" === typeof b) && (null === a || !!a && "number" === typeof a.height && "number" === typeof a.width && "number" === typeof a.x && "number" === typeof a.y)
    }

    function Yo(a, b, c, d, e, f) {
        e = e ? {
            left: e.x,
            top: e.y,
            width: e.width,
            height: e.height
        } : Xk;
        c = c.Ib("getMaxSize");
        var g = null != c && "number" === typeof c.width && "number" === typeof c.height ? c : {
            width: 0,
            height: 0
        };
        c = {
            left: 0,
            top: 0,
            width: -1,
            height: -1
        };
        if (g) {
            var h = Number(String(g.width));
            g = Number(String(g.height));
            c = isNaN(h) || isNaN(g) ? c : {
                left: 0,
                top: 0,
                width: h,
                height: g
            }
        }
        a = {
            value: {
                Z: e,
                N: c,
                W: "mraid",
                V: b,
                ba: {
                    x: 0,
                    y: 0
                }
            },
            timestamp: a.l.now()
        };
        return Object.assign({}, a, d, {
            Ui: f
        })
    }

    function Wo(a, b, c, d) {
        d = void 0 === d ? function() {
            return !0
        } : d;
        return (new K(function(e) {
            var f = a.A.Na(745, function() {
                e.next(w.apply(0, arguments))
            });
            b.addEventListener(c, f);
            return function() {
                b.removeEventListener(c, f)
            }
        })).g(T(function(e) {
            return d.apply(null, u(e))
        }))
    };
    var Zo = function(a, b) {
        this.context = a;
        this.Ia = b
    };
    v(Zo, Eo);
    Zo.prototype.Qa = function(a, b) {
        var c = new Ac(1),
            d = new Ac(1),
            e = Ho(Qo(this.context, this.Ia, c, d, b.La), Pm(this.context, b.La));
        return {
            Ra: Co(a.Ga.g(e), b.Sa, 1),
            Oa: {
                ke: c.g(Y(this.context.h, 1)),
                le: d.g(Y(this.context.h, 1))
            }
        }
    };

    function $o(a) {
        return ["backgrounded", "notFound", "hidden", "noOutputDevice"].includes(a)
    };

    function ap() {
        var a = Error;
        return Rj(function(b) {
            return b instanceof a
        }, function() {
            return Qj(a)
        })
    };

    function bp(a, b) {
        var c = void 0 === c ? null : c;
        var d = new L,
            e = void 0,
            f = a.jf,
            g = d.g(O(function() {
                return e ? Object.assign({}, e, {
                    timestamp: a.l.now()
                }) : null
            }), T(function(k) {
                return null !== k
            }), O(function(k) {
                return k
            }));
        b = R([ud(f, g), b]);
        var h = c;
        return b.g(T(function(k) {
            k = t(k).next().value;
            null === h && (h = k.value.ng);
            return k.value.ng === h
        }), wf(function(k) {
            return void(e = t(k).next().value)
        }), O(function(k) {
            var l = t(k);
            k = l.next().value;
            l = l.next().value;
            try {
                var q = k.value.data,
                    r = k.timestamp,
                    p = q.viewport,
                    x, A, F = Object.assign({},
                        p, {
                            width: null != (x = null == p ? void 0 : p.width) ? x : 0,
                            height: null != (A = null == p ? void 0 : p.height) ? A : 0,
                            x: 0,
                            y: 0,
                            cj: p ? p.width * p.height : 0
                        }),
                    D = cp(F),
                    B = q.adView,
                    S = B.measuringElement && B.containerGeometry ? cp(B.containerGeometry) : cp(B.geometry),
                    oa = cp(B.geometry),
                    ia = B.reasons.some($o),
                    C = ia ? Xk : cp(B.onScreenGeometry),
                    z;
                l && (z = B.percentageInView / 100);
                l && ia && (z = 0);
                return {
                    timestamp: r,
                    value: {
                        W: "omid",
                        Z: S,
                        N: D,
                        V: d,
                        O: "omid",
                        F: oa,
                        ba: {
                            x: S.left,
                            y: S.top
                        },
                        R: C,
                        Jc: z
                    }
                }
            } catch (Ib) {
                A = Ib;
                q = ap();
                r = Sj;
                Sj = void 0;
                p = [];
                x = q(A, p);
                !x && p && (A = "Expected " +
                    q.lf() + ", got " + Pj(A), p.push(A));
                x || Tj.apply(null, [void 0, r, "Guard " + q.lf() + " failed:"].concat(u(p.reverse())));
                var U, nb;
                q = null != (nb = null == (U = Ib) ? void 0 : U.message) ? nb : "An unknown error occurred";
                U = "Error while processing geometryChange event: " + JSON.stringify(k.value) + "; " + q;
                throw Error(U);
            }
        }), kf(1), Ec())
    }

    function cp(a) {
        var b, c, d, e;
        return {
            left: Math.floor(null != (b = null == a ? void 0 : a.x) ? b : 0),
            top: Math.floor(null != (c = null == a ? void 0 : a.y) ? c : 0),
            width: Math.floor(null != (d = null == a ? void 0 : a.width) ? d : 0),
            height: Math.floor(null != (e = null == a ? void 0 : a.height) ? e : 0)
        }
    };

    function dp(a, b, c, d) {
        c = void 0 === c ? wd : c;
        var e = a.h;
        if (null === b) return yc(new Xd(20));
        if (!b.validate()) return yc(new Xd(21));
        var f;
        d = ep(e, b, d).g(O(function(g) {
            var h = g.value;
            g = g.timestamp;
            var k = b.l,
                l = a.l;
            if (k.timeline !== g.timeline) throw new be;
            g = new ke(g.value - k.now().value + l.now().value, l.timeline);
            return f = {
                value: h,
                timestamp: g
            }
        }));
        return ud(d, c.g(O(function() {
            return f
        }))).g(T(function(g) {
            return void 0 !== g
        }), O(function(g) {
            return g
        }), Y(a.h, 1))
    }

    function ep(a, b, c) {
        return bp(b, c).g(Y(a, 1), O(function(d) {
            return {
                timestamp: d.timestamp,
                value: {
                    ba: {
                        x: d.value.F.left,
                        y: d.value.F.top
                    },
                    Z: d.value.R,
                    N: d.value.N,
                    W: d.value.O,
                    V: d.value.V
                }
            }
        }))
    };
    var fp = function(a, b, c) {
        this.hc = a;
        this.tc = b;
        this.Ia = c
    };
    v(fp, Eo);
    fp.prototype.Qa = function(a, b) {
        var c = b.La;
        b = dp(this.tc, this.hc, this.Ia, b.Gf);
        c = Ho(b, Pm(this.tc, c));
        return {
            Ra: a.Ga.g(c),
            Oa: {}
        }
    };
    var gp = function(a, b, c) {
        this.hc = a;
        this.tc = b;
        this.Kg = c
    };
    v(gp, Eo);
    gp.prototype.Qa = function(a, b) {
        var c = dp(this.tc, this.hc, void 0, b.Gf);
        b = Xm(this.tc, b.fa, this.Kg);
        c = Ho(c, b);
        return {
            Ra: a.Ga.g(c),
            Oa: {}
        }
    };

    function hp(a) {
        return a.document.Hh.g(O(function(b) {
            return "visible" === b
        }), V(), Y(a.h, 1))
    };
    var ip;
    ip = ["av.key", "js", "20231011"].slice(-1)[0].substring(0, 8);

    function jp(a, b, c) {
        var d;
        return b.g(V(), X(function(e) {
            return c.g(O(function() {
                if (!d) {
                    d = !0;
                    try {
                        e.next()
                    } finally {
                        d = !1
                    }
                }
                return !0
            }))
        }), W(!1), Y(a.h, 1))
    };

    function kp(a) {
        return J(bn(O(function(b) {
            return un(b, a)
        })), vm(), O(function(b) {
            return Math.round(b)
        }))
    };

    function lp(a, b, c, d, e) {
        var f = Un;
        if (1 < f.length)
            for (var g = 0; g < f.length - 1; g++)
                if (f[g] < f[g + 1]) throw Error();
        g = e.g(W(void 0), X(function() {
            return c.g(Im())
        }), V(), Y(a, 1));
        e = e.g(W(void 0), X(function() {
            return c.g(so())
        }), V(), Y(a, 1));
        return {
            cc: d.g(W(void 0), X(function() {
                return b.g(Hm(to, f))
            }), V(lb), Y(a, 1)),
            pc: d.g(W(void 0), X(function() {
                return b.g(Hm(kp, f), O(function(h) {
                    return h.map(function(k, l) {
                        return 0 < l ? k - h[l - 1] : k
                    })
                }))
            }), V(lb), Y(a, 1)),
            bc: e,
            cb: g.g(V(hn), Y(a, 1))
        }
    };

    function mp(a, b, c) {
        var d = c.g(O(function(e) {
            return {
                value: e,
                timestamp: a.l.now()
            }
        }), V(hn));
        return b instanceof K ? b.g(V(), X(function(e) {
            return e ? (new Z({
                value: !1,
                timestamp: a.l.now()
            })).Y(a.h) : d
        })) : !1 === b.value ? d : new Z(!1)
    }

    function np(a, b, c, d, e, f, g) {
        var h = Nn;
        b = b instanceof K ? b.g(W(!1), V()) : b;
        var k = !(dk() || ek());
        c = mp(a, c, d);
        a = f.Ga.g(sm(a.h));
        return Object.assign({}, h, {
            Lc: c,
            ag: e,
            Qe: k,
            Df: b,
            Oc: a,
            fa: g
        })
    };

    function op(a) {
        a = a.global;
        if ("undefined" === typeof a.__google_lidar_) return a.__google_lidar_ = 1, !1;
        a.__google_lidar_ = Number(a.__google_lidar_) + 1;
        var b = a.__google_lidar_adblocks_count_;
        if ("number" === typeof b && 0 < b && (a = a.__google_lidar_radf_, "function" === typeof a)) try {
            a()
        } catch (c) {}
        return !0
    }

    function pp(a) {
        var b = a.global;
        b.osdlfm = function() {
            return b.__google_lidar_radf_
        };
        if (void 0 !== b.__google_lidar_radf_) return tc;
        b.__google_lidar_adblocks_count_ = 1;
        var c = new L;
        b.__google_lidar_radf_ = function() {
            return void c.next(a)
        };
        return c.g(kk(a.A, 743))
    };
    var qp = function(a) {
            this.key = a;
            this.defaultValue = !1;
            this.valueType = "boolean"
        },
        rp = function(a) {
            this.key = a;
            this.defaultValue = 0;
            this.valueType = "number"
        };
    var sp = new qp("45430027"),
        tp = new qp("100006"),
        up = new qp("45424363"),
        vp = new rp("45362137"),
        wp = new qp("45377435"),
        xp = new rp("45411635"),
        yp = new qp("45372163"),
        zp = new qp("45407241"),
        Ap = new qp("45428757"),
        Bp = new qp("45382077"),
        Cp = new qp("45407239"),
        Dp = new qp("45407240"),
        Ep = new qp("45427308");
    var Fp = new rp("45389692");
    var $i = function(a) {
        Uj.call(this, a)
    };
    v($i, Uj);
    $i.Ua = "ads.branding.measurement.client.serving.integrations.active_view.ActiveViewMetadata";
    var Gp = [0, Jj, Jj, Jj, Ij];
    var Hp = [0, Jj, Jj, Ij, Kj, [0, Lj, Lj, Lj, Lj, Lj, Nj, Ij, Hj, Ej, Lj, Ej, Lj, Hj, Lj, Lj, Kj, [0, Hj, Hj, Hj, Hj], Mj, Gj, Lj, Fj, Fj, Hj, Hj, Fj, Ej]];
    var Ip = function(a) {
        Uj.call(this, a)
    };
    v(Ip, Uj);
    Ip.Ua = "ads.branding.measurement.client.serving.IntegratorMetadata";
    var Jp = function(a, b) {
        return function(c, d) {
            a: {
                if (Gh.length) {
                    var e = Gh.pop();
                    Eh(e, d);
                    yh(e.j, c, d);
                    c = e
                } else c = new Fh(c, d);
                try {
                    var f = new a,
                        g = f.G;
                    oj(b)(g, c);
                    ki && delete g[ki];
                    var h = f;
                    break a
                } finally {
                    c.gf()
                }
                h = void 0
            }
            return h
        }
    }(Ip, [0, Kj, Hp, Kj, Gp]);
    var Kp = function() {
            this.ff = {}
        },
        Lp = function(a, b) {
            a = a.ff[b.key];
            if ("proto" === b.valueType) {
                try {
                    var c = JSON.parse(a);
                    if (Array.isArray(c)) return c
                } catch (d) {}
                return b.defaultValue
            }
            return typeof a === typeof b.defaultValue ? a : b.defaultValue
        };
    var Mp = function() {
        this.Ye = new Map
    };
    Mp.prototype.start = function(a, b, c, d) {
        var e = this;
        void 0 === this.we && (this.Xe = d, c = op(a), d = pp(a), d = Ml(a, d), this.we = (c ? tc : d.g(O(function(f) {
            var g = void 0 === g ? Symbol() : g;
            return Object.freeze({
                Lb: g,
                element: (new Z(f)).Y(a.h)
            })
        }), El())).subscribe(function(f) {
            var g = f.Lb;
            e.Ye.set(g, f);
            f.element.g(Ee(1)).subscribe(function(h) {
                var k = Bl(h, "data-google-av-flags"),
                    l = new Kp;
                if (null !== k) try {
                    var q = JSON.parse(k)[0];
                    k = "";
                    for (var r = 0; r < q.length; r++) k += String.fromCharCode(q.charCodeAt(r) ^ "\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(r %
                        10));
                    l.ff = JSON.parse(k)
                } catch (cf) {}
                var p, x, A, F, D, B, S, oa, ia, C, z, U, nb, Ib;
                q = {
                    wg: null != (p = null == l ? void 0 : Lp(l, tp)) ? p : !1,
                    Ng: null != (x = null == l ? void 0 : Lp(l, vp)) ? x : 0,
                    Og: null != (A = null == l ? void 0 : Lp(l, wp)) ? A : !1,
                    Yh: null != (F = null == l ? void 0 : Lp(l, yp)) ? F : !1,
                    fi: null != (D = null == l ? void 0 : Lp(l, Bp)) ? D : !1,
                    Ag: null != (B = null == l ? void 0 : Lp(l, Fp)) ? B : 0,
                    ni: null != (S = null == l ? void 0 : Lp(l, Cp)) ? S : !1,
                    oi: null != (oa = null == l ? void 0 : Lp(l, Dp)) ? oa : !1,
                    fj: null != (ia = null == l ? void 0 : Lp(l, Ap)) ? ia : !1,
                    ai: null != (C = null == l ? void 0 : Lp(l, zp)) ? C : !1,
                    L: null !=
                        (z = null == l ? void 0 : Lp(l, xp)) ? z : 0,
                    Ld: null != (U = null == l ? void 0 : Lp(l, up)) ? U : !1,
                    ij: null != (nb = null == l ? void 0 : Lp(l, Ep)) ? nb : !1,
                    Xi: null != (Ib = null == l ? void 0 : Lp(l, sp)) ? Ib : !1
                };
                h = Bl(h, "data-google-av-ufs-integrator-metadata");
                a: {
                    if (null !== h) try {
                        var za = Jp(h);
                        break a
                    } catch (cf) {}
                    za = new Ip
                }
                b(g, za, q)
            })
        }), c && this.xb())
    };
    Mp.prototype.xb = function() {
        var a, b;
        null == (a = this.we) || null == (b = a.unsubscribe) || b.call(a);
        this.we = void 0;
        var c;
        null == (c = this.Xe) || c.call(this);
        this.Xe = void 0
    };
    var Np = function(a) {
        Uj.call(this, a)
    };
    v(Np, Uj);
    var Op = function(a, b) {
        return hj(a, 1, b)
    };
    Np.Ua = "contentads.bow.rendering.client.TurtleDoveReportingData";

    function Pp() {
        var a = Hb();
        return a ? ib("AmazonWebAppPlatform;Android TV;Apple TV;AppleTV;BRAVIA;BeyondTV;Freebox;GoogleTV;HbbTV;LongTV;MiBOX;MiTV;NetCast.TV;Netcast;Opera TV;PANASONIC;POV_TV;SMART-TV;SMART_TV;SWTV;Smart TV;SmartTV;TV Store;UnionTV;WebOS".split(";"), function(b) {
            return ub(a, b)
        }) || ub(a, "OMI/") && !ub(a, "XiaoMi/") ? !0 : ub(a, "Presto") && ub(a, "Linux") && !ub(a, "X11") && !ub(a, "Android") && !ub(a, "Mobi") : !1
    };
    var Nn = Object.freeze({
            Xf: 1E3,
            Pd: .5,
            he: .3
        }),
        Un = Object.freeze([1, .75, Nn.Pd, Nn.he, 0]),
        $l = "https://pagead2.googlesyndication.com/pagead/gen_204?id=av-js&type=error&bin=7&v=" + ip,
        Qp = function(a, b) {
            var c = Symbol(),
                d = Symbol(),
                e = Symbol(),
                f = Symbol(),
                g = this;
            this.Ph = a;
            this.Wc = b;
            this.qf = c;
            this.Qb = d;
            this.xc = e;
            this.yc = f;
            this.name = "rxlidar";
            this.Ef = new Ac;
            this.ph = new K(function(h) {
                var k = g.Ef.subscribe(h);
                return function() {
                    k.unsubscribe();
                    g.xb()
                }
            });
            this.controlledEvents = [];
            this.subscribedEvents = [];
            this.Id = new Ac;
            this.controlledEvents.push(this.qf,
                this.Qb, this.xc, this.yc)
        };
    Qp.prototype.start = function(a) {
        void 0 === this.Vd && (this.Vd = Rp(a, this.Id.g(Y(a.h, 1)), this.Wc.Hg, this.Wc.sh, this.Wc.Ia, this.Wc.hc, this.qf, this.Qb, this.xc, this.yc).subscribe(this.Ef))
    };
    Qp.prototype.xb = function() {
        this.Id.complete();
        var a;
        null == (a = this.Vd) || a.unsubscribe();
        this.Vd = void 0
    };
    Qp.prototype.handleEvent = function() {};

    function Rp(a, b, c, d, e, f, g, h, k, l) {
        var q = hp(a).g(O(function(p) {
                return !p
            })),
            r = new Fo(a, [new Po(a, Un), new Oo(a, e), new Lo(a, e), new gp(f, a, Un), new fp(f, a, e), new Zo(a, e)]);
        return Pl(a, b, function(p, x) {
                var A = ro(p, x.element),
                    F = A.yd,
                    D = A.Bc,
                    B = A.Gd,
                    S = A.Fe,
                    oa = A.Bg,
                    ia = A.Sa,
                    C = A.ih,
                    z = A.Zd,
                    U = A.de,
                    nb = A.La,
                    Ib = A.Aa,
                    za = A.ui,
                    cf = A.jb;
                A = A.fe;
                var ef, eb = null != (ef = fj(aj(x.metadata))) ? ef : "";
                ef = Op(new Np, atob(eb)).pb();
                eb = (new Z(x.fa)).Y(p.h);
                var Jb = eb.g(O(function(G) {
                        return G.fi
                    })),
                    Da = ia.g(qe(C), O(function(G) {
                        var Na = t(G);
                        G = Na.next().value;
                        Na = Na.next().value;
                        (G = G || Na) || ((G = ub(Hb(), "CrKey") || ub(Hb(), "PlayStation") || ub(Hb(), "Roku") || Pp() || ub(Hb(), "Xbox")) || (G = Hb(), G = ub(G, "AppleTV") || ub(G, "Apple TV") || ub(G, "CFNetwork") || ub(G, "tvOS")), G || (G = Hb(), G = ub(G, "sdk_google_atv_x86") || ub(G, "Android TV")));
                        return G
                    }));
                C = new Ao(p, x, oa, ia, nb, Jb);
                Jb = eb.g(O(function(G) {
                    return G.wg
                }));
                Jb = r.Qa(C, {
                    Sa: ia,
                    fa: x.fa,
                    La: nb,
                    Gf: Jb
                });
                var Ea = Jb.Ra,
                    Hd = Jb.Oa;
                Jb = Hd.ke;
                var nq = Hd.le;
                Hd = Hd.ze;
                var ob = np(p, U, Da, q, za, C, eb);
                za = $n(p.h, p.l, Ea, ob);
                Da = lp(p.h, za.xa.Be, za.xa.visible,
                    za.ye, za.lc);
                var Fc = po(p.h, p.l, za.lc, za.xa.V, za.xa.visible);
                Ea = Dn(p.h, p.l, Ea, ob);
                ob = Tn(p.l, p.h, Ea.xa.Be, Ea.xa.visible, Ea.ye, Ea.lc);
                var ff = {
                        Ee: Mn(p.h, p.l, Ea.lc, ob.bc)
                    },
                    gh = eb.g(O(function(G) {
                        return G.Og
                    }), W(!1));
                Ea = rm(p.h, gh, Object.assign({}, Ea.xa, ob, ff), Object.assign({}, za.xa, {
                    Ee: tn(p, Fc),
                    cc: tn(p, Da.cc),
                    pc: tn(p, Da.pc),
                    bc: tn(p, Da.bc),
                    cb: Da.cb.g(O(function(G) {
                        return new sn(p.l, G)
                    }))
                }));
                Da = an(p, d.g(We("t")));
                Fc = null !== f && f.validate();
                ob = (Fc ? f.bi : wd).g(Y(p.h, 1), We("u"));
                Da = zd(Da, ob);
                Fc = (Fc ? f.rf.g(Ee(1),
                    We(!0), W(!1)) : (new Z(!0)).Y(p.h)).g(X(function(G) {
                    return G ? new K(function(Na) {
                        x.fb(g, {}, function(oq) {
                            Na.next(oq);
                            Na.complete()
                        })
                    }) : wd
                }), W(!1), Y(p.h, 1));
                ob = jp(p, Ea.V, Da.g(T(function(G) {
                    return null !== G
                })));
                ff = Sp(p, C, F);
                gh = Tp(p, Da, x.element);
                var rq = ff.og.g(W({
                        x: 0,
                        y: 0
                    })),
                    sq = eb.g(O(function(G) {
                        return G.Yh
                    }), W(!1), V(), wf(function(G) {
                        vk = G
                    }), Y(p.h, 1)),
                    Sk = z.g(O(function(G) {
                        return 40 === G || 41 === G
                    }));
                return Object.assign({}, {
                    I: new Z(p.I),
                    Qc: new Z("lidar2"),
                    ji: new Z("lidartos"),
                    tg: new Z(ip),
                    rg: new Z(7),
                    Fd: new Z(p.validate() ?
                        null : new Yd),
                    xg: new Z(Uk(p.document)),
                    sa: new Z(bm),
                    Nd: Da,
                    hd: Da,
                    ej: ob,
                    nf: Fc,
                    fb: new Z(x.fb),
                    Qb: new Z(h),
                    xc: new Z(k),
                    yc: new Z(l),
                    zg: new Z(p.Bb ? 1 : void 0),
                    Cg: new Z(p.vg ? 1 : void 0),
                    Sa: ia,
                    jb: cf,
                    ld: new Z(ef),
                    nb: cf.g(T(function(G) {
                        return G
                    }), O(function() {
                        return p.nb.bind(p)
                    })),
                    ke: Jb.g(Y(p.h, 1)),
                    le: nq.g(Y(p.h, 1)),
                    Mg: eb.g(O(function(G) {
                        return G.Ng
                    })),
                    sf: sq,
                    fe: A,
                    gh: Sk,
                    Yg: eb.g(O(function(G) {
                        return G.Ag
                    })),
                    Pg: new Z(new Hf(p, new qk(p))),
                    Wf: new Z(vk && (new wk(p)).K({
                        ub: "GET"
                    })),
                    ei: new Z(Number(x.fa.oi) << 0 + Number(x.fa.ni) <<
                        1 + Number(x.fa.ai) << 2),
                    yg: x.element.g(O(function(G) {
                        return null !== G
                    })),
                    Pc: Ib,
                    ki: Ib,
                    Gd: B.g(W([])),
                    Fe: S.g(W([])),
                    Vg: B.g(O(function(G) {
                        return 0 < G.length ? !0 : null
                    }), W(null), V()),
                    Bc: D.g(W([]), Y(p.h, 1)),
                    aj: eb,
                    yd: F,
                    Sb: C.Sb,
                    Zd: z.g(W(0), Y(p.h, 1)),
                    qh: oa,
                    La: nb.g(W(0), Y(p.h, 1)),
                    qc: Sk.g(O(function(G) {
                        return G ? om : am
                    })),
                    Mb: new Z(pm),
                    de: U,
                    tf: C.ac.g(sm(p.h)),
                    Ge: C.Ge
                }, Ea, {
                    Gc: R([Ea.Gc, rq]).g(O(function(G) {
                        var Na = t(G);
                        G = Na.next().value;
                        Na = Na.next().value;
                        return $k(G, Na)
                    }), V(Yk))
                }, ff, {
                    rc: Ck(p),
                    Wg: gh,
                    ze: Hd,
                    md: za.xa.md,
                    Ld: new Z(x.fa.Ld)
                })
            },
            Zl(a, c))
    }

    function Sp(a, b, c) {
        var d = void 0 === d ? Ha : d;
        var e, f;
        d = (null == (e = d.performance) ? void 0 : null == (f = e.timing) ? void 0 : f.navigationStart) || 0;
        return Object.assign({}, {
            mg: new Z(d),
            lg: Fm(a, b)
        }, Em(a, b, c))
    }

    function Tp(a, b, c) {
        return b.g(T(function(d) {
            return null !== d
        }), X(function() {
            return c
        }), O(function(d) {
            var e = Fl(a);
            return 0 < e.length && 0 <= e.indexOf(d)
        }), O(function(d) {
            return !d
        }))
    };

    function Up(a, b) {
        var c = new Mp,
            d = new Qp(c, b);
        d.start(a);
        var e = function(f, g, h) {
            h(!0)
        };
        c.start(a, function(f, g, h) {
            void 0 !== Zi(g, $i, 2, !1) && !dj(bj(g, $i, 2), 4, !0) || d.Id.next(Object.assign({}, d.Ph.Ye.get(f), {
                metadata: g,
                fa: h,
                hj: f,
                fb: e
            }))
        }, function() {}, function() {
            d.xb()
        });
        return d.ph
    };

    function Vp(a, b) {
        if (!b) throw Error("qa`" + a);
        if ("string" !== typeof b && !(b instanceof String)) throw Error("ra`" + a);
        if ("" === b.trim()) throw Error("sa`" + a);
    }

    function Wp(a) {
        if (!a) throw Error("va`functionToExecute");
    }

    function Xp(a, b) {
        if (null == b) throw Error("ta`" + a);
        if ("number" !== typeof b || isNaN(b)) throw Error("ua`" + a);
        if (0 > b) throw Error("wa`" + a);
    };

    function Yp() {
        return /\d+\.\d+\.\d+(-.*)?/.test("1.4.8-google_20230803")
    }

    function Zp() {
        for (var a = ["1", "4", "8"], b = ["1", "0", "3"], c = 0; 3 > c; c++) {
            var d = parseInt(a[c], 10),
                e = parseInt(b[c], 10);
            if (d > e) break;
            else if (d < e) return !1
        }
        return !0
    };
    var $p = function(a, b, c, d) {
            this.mf = a;
            this.method = b;
            this.version = c;
            this.args = d
        },
        aq = function(a) {
            return !!a && void 0 !== a.omid_message_guid && void 0 !== a.omid_message_method && void 0 !== a.omid_message_version && "string" === typeof a.omid_message_guid && "string" === typeof a.omid_message_method && "string" === typeof a.omid_message_version && (void 0 === a.omid_message_args || void 0 !== a.omid_message_args)
        },
        bq = function(a) {
            return new $p(a.omid_message_guid, a.omid_message_method, a.omid_message_version, a.omid_message_args)
        };
    $p.prototype.pb = function() {
        var a = {};
        a = (a.omid_message_guid = this.mf, a.omid_message_method = this.method, a.omid_message_version = this.version, a);
        void 0 !== this.args && (a.omid_message_args = this.args);
        return a
    };
    var cq = function(a) {
        this.kd = a
    };
    cq.prototype.pb = function() {
        return JSON.stringify(void 0)
    };
    var dq = function(a) {
        return ["omid_v1_present", "omid_v1_present_web", "omid_v1_present_app"].some(function(b) {
            try {
                var c = a.frames && !!a.frames[b]
            } catch (d) {
                c = !1
            }
            return c
        })
    };

    function eq(a, b) {
        return a && (a[b] || (a[b] = {}))
    };

    function fq() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
            var b = 16 * Math.random() | 0;
            return "y" === a ? (b & 3 | 8).toString(16) : b.toString(16)
        })
    };

    function gq() {
        var a = w.apply(0, arguments);
        hq(function() {
            throw new(Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat(u(a))));
        }, function() {
            return console.error.apply(console, u(a))
        })
    }

    function hq(a, b) {
        "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b()
    };
    var iq = function() {
        if ("undefined" !== typeof omidGlobal && omidGlobal) return omidGlobal;
        if ("undefined" !== typeof global && global) return global;
        if ("undefined" !== typeof window && window) return window;
        if ("undefined" !== typeof globalThis && globalThis) return globalThis;
        var a = Function("return this")();
        if (a) return a;
        throw Error("xa");
    }();
    var jq = function(a) {
        this.kd = a;
        this.handleExportedMessage = jq.prototype.Sg.bind(this)
    };
    v(jq, cq);
    jq.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.kd : b;
        if (!b) throw Error("ya");
        b.handleExportedMessage(a.pb(), this)
    };
    jq.prototype.Sg = function(a, b) {
        if (aq(a) && this.onMessage) this.onMessage(bq(a), b)
    };

    function kq(a) {
        return null != a && "undefined" !== typeof a.top && null != a.top
    }

    function lq(a) {
        if (a === iq) return !1;
        try {
            if ("undefined" === typeof a.location.hostname) return !0
        } catch (b) {
            return !0
        }
        return !1
    };
    var mq = function(a, b) {
        this.kd = b = void 0 === b ? iq : b;
        var c = this;
        a.addEventListener("message", function(d) {
            if ("object" === typeof d.data) {
                var e = d.data;
                if (aq(e) && d.source && c.onMessage) c.onMessage(bq(e), d.source)
            }
        })
    };
    v(mq, cq);
    mq.prototype.sendMessage = function(a, b) {
        b = void 0 === b ? this.kd : b;
        if (!b) throw Error("ya");
        b.postMessage(a.pb(), "*")
    };
    var pq = ["omid", "v1_VerificationServiceCommunication"],
        qq = ["omidVerificationProperties", "serviceWindow"];

    function tq(a, b) {
        return b.reduce(function(c, d) {
            return c && c[d]
        }, a)
    };
    var uq = function(a) {
        if (!a) {
            var b;
            "undefined" === typeof b && "undefined" !== typeof window && window && (b = window);
            b = kq(b) ? b : iq;
            var c = void 0 === c ? dq : c;
            a = [];
            var d = tq(b, qq);
            d && a.push(d);
            a.push(kq(b) ? b.top : iq);
            a: {
                a = t(a);
                for (var e = a.next(); !e.done; e = a.next()) {
                    b: {
                        d = b;e = e.value;
                        var f = c;
                        if (!lq(e)) try {
                            var g = tq(e, pq);
                            if (g) {
                                var h = new jq(g);
                                break b
                            }
                        } catch (k) {}
                        h = f(e) ? new mq(d, e) : null
                    }
                    if (d = h) {
                        a = d;
                        break a
                    }
                }
                a = null
            }
        }
        if (this.Rb = a) this.Rb.onMessage = this.Tg.bind(this);
        else if (c = (c = iq.omid3p) && "function" === typeof c.registerSessionObserver &&
            "function" === typeof c.addEventListener ? c : null) this.fc = c;
        this.Rh = this.Sh = 0;
        this.Cd = {};
        this.Wd = [];
        this.Rc = (c = iq.omidVerificationProperties) ? c.injectionId : void 0
    };
    uq.prototype.K = function() {
        return !(!this.Rb && !this.fc)
    };
    var yg = function(a, b, c) {
        Wp(b);
        a.fc ? a.fc.registerSessionObserver(b, c, a.Rc) : a.Jb("addSessionListener", b, c, a.Rc)
    };
    uq.prototype.addEventListener = function(a, b) {
        Vp("eventType", a);
        Wp(b);
        this.fc ? this.fc.addEventListener(a, b, this.Rc) : this.Jb("addEventListener", b, a, this.Rc)
    };
    var Ef = function(a, b, c, d) {
            Vp("url", b);
            iq.document && iq.document.createElement ? vq(a, b, c, d) : a.Jb("sendUrl", function(e) {
                e && c ? c() : !e && d && d()
            }, b)
        },
        vq = function(a, b, c, d) {
            var e = iq.document.createElement("img");
            a.Wd.push(e);
            var f = function(g) {
                var h = a.Wd.indexOf(e);
                0 <= h && a.Wd.splice(h, 1);
                g && g()
            };
            e.addEventListener("load", f.bind(a, c));
            e.addEventListener("error", f.bind(a, d));
            e.src = b
        };
    uq.prototype.setTimeout = function(a, b) {
        Wp(a);
        Xp("timeInMillis", b);
        if (wq()) return iq.setTimeout(a, b);
        var c = this.Sh++;
        this.Jb("setTimeout", a, c, b);
        return c
    };
    uq.prototype.clearTimeout = function(a) {
        Xp("timeoutId", a);
        wq() ? iq.clearTimeout(a) : this.Qf("clearTimeout", a)
    };
    uq.prototype.setInterval = function(a, b) {
        Wp(a);
        Xp("timeInMillis", b);
        if (xq()) return iq.setInterval(a, b);
        var c = this.Rh++;
        this.Jb("setInterval", a, c, b);
        return c
    };
    uq.prototype.clearInterval = function(a) {
        Xp("intervalId", a);
        xq() ? iq.clearInterval(a) : this.Qf("clearInterval", a)
    };
    var wq = function() {
            return "function" === typeof iq.setTimeout && "function" === typeof iq.clearTimeout
        },
        xq = function() {
            return "function" === typeof iq.setInterval && "function" === typeof iq.clearInterval
        };
    uq.prototype.Tg = function(a) {
        var b = a.method,
            c = a.mf;
        a = a.args;
        if ("response" === b && this.Cd[c]) {
            var d = Yp() && Zp() ? a ? a : [] : a && "string" === typeof a ? JSON.parse(a) : [];
            this.Cd[c].apply(this, d)
        }
        "error" === b && window.console && gq(a)
    };
    uq.prototype.Qf = function(a) {
        this.Jb.apply(this, [a, null].concat(u(w.apply(1, arguments))))
    };
    uq.prototype.Jb = function(a, b) {
        var c = w.apply(2, arguments);
        if (this.Rb) {
            var d = fq();
            b && (this.Cd[d] = b);
            var e = "VerificationService." + a;
            c = Yp() && Zp() ? c : JSON.stringify(c);
            this.Rb.sendMessage(new $p(d, e, "1.4.8-google_20230803", c))
        }
    };
    var yq = void 0;
    if (yq = void 0 === yq ? "undefined" === typeof omidExports ? null : omidExports : yq) {
        var zq = ["OmidVerificationClient"];
        zq.slice(0, zq.length - 1).reduce(eq, yq)[zq[zq.length - 1]] = uq
    };
    var Aq = null;
    try {
        var Bq = new uq;
        Aq = new xg(Bq, "doubleclickbygoogle.com-omid")
    } catch (a) {
        Aq = null
    }
    var Cq = new rl(window, null, new jk),
        Dq, Eq = Aq;
    Dq = {
        Hg: .01,
        sh: Ff(Cq.l, 36E5),
        Ia: Cq.l.Va(100).g(Y(Cq.h, 1)),
        hc: Eq
    };
    (function(a, b) {
        return a.A.Na(742, function() {
            return Up(a, b)
        })()
    })(Cq, Dq).subscribe();
}).call(this);