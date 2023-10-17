/*!jQuery v3.6.4 | (c) OpenJS Foundation and other contributors | jquery.org/license*/ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.4",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, y, s, c, v, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ye(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.cssHas = ce(function() {
                    try {
                        return C.querySelector(":has(*,:jqfake)"), !1
                    } catch (e) {
                        return !0
                    }
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), d.cssHas || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), v(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, y) {
                        var v = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === y ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (v) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= y) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ye(function() {
                        return [0]
                    }),
                    last: ye(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ye(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ye(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ye(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, y, v, e) {
            return y && !y[S] && (y = Ce(y)), v && !v[S] && (v = Ce(v, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r), y) {
                    i = Te(p, u), y(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, y, v, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = y[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = v[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function $() {
        E.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || S.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        S.event.special[t] = {
            setup: function() {
                return Se(this, t, Ce), !1
            },
            trigger: function() {
                return Se(this, t), !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ye(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Me = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ie = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        We = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t),
            u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = S.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(v, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        Ue = E.createElement("div").style,
        Xe = {};

    function Ve(e) {
        var t = S.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
            while (n--)
                if ((e = ze[n] + t) in Ue) return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Me(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Re.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ge.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function() {
                    return Ze(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Me(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Je(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Je)
    }), S.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = et.prototype.init, S.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, S.fx.interval), S.fx.tick())
    }

    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r]) continue;
                        g = !0
                    }
                    d[r] = y && y[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                    display: l
                }), o && (y.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = ft(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), tt = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        nt || (nt = !0, st())
    }, S.fx.stop = function() {
        nt = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, rt = E.createElement("input"), it = E.createElement("select").appendChild(E.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = E.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
    var pt, dt = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return B(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || S.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return B(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), v.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                S(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                S(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function(e) {
                S(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function() {
                if (s)
                    for (o = S(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : yt(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, v.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), v.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        Et = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var St = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || St.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = E.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function $t(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Bt(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Wt.href = Tt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, S.ajaxSettings), t) : Bt(S.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = S.ajaxSetup({}, t),
                v = y.context || y,
                m = y.context && (v.nodeType || v.jquery) ? S(v) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = y.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (y.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = S.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
            for (i in (g = S.event && y.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (Et.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
            if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(y, T, n)), !i && -1 < S.inArray("script", y.dataTypes) && S.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = S.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, S.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || S.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ut = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = _e(v.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
});
jQuery.noConflict(); /*!jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], a = 1; a <= 3; a++) {
                    if (+n[a] > +o[a]) return 1;
                    if (+n[a] < +o[a]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.4.0";
        var t = Object.create(null),
            o = (s.migrateDisablePatches = function() {
                for (var e = 0; e < arguments.length; e++) t[arguments[e]] = !0
            }, s.migrateEnablePatches = function() {
                for (var e = 0; e < arguments.length; e++) delete t[arguments[e]]
            }, s.migrateIsPatchEnabled = function(e) {
                return !t[e]
            }, n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion)), {});

        function i(e, t) {
            var r = n.console;
            !s.migrateIsPatchEnabled(e) || s.migrateDeduplicateWarnings && o[t] || (o[t] = !0, s.migrateWarnings.push(t + " [" + e + "]"), r && r.warn && !s.migrateMute && (r.warn("JQMIGRATE: " + t), s.migrateTrace && r.trace && r.trace()))
        }

        function r(e, t, r, n, o) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return i(n, o), r
                },
                set: function(e) {
                    i(n, o), r = e
                }
            })
        }

        function a(e, t, r, n, o) {
            var a = e[t];
            e[t] = function() {
                return o && i(n, o), (s.migrateIsPatchEnabled(n) ? r : a || s.noop).apply(this, arguments)
            }
        }

        function u(e, t, r, n, o) {
            if (!o) throw new Error("No warning message provided");
            a(e, t, r, n, o)
        }

        function d(e, t, r, n) {
            a(e, t, r, n)
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            o = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && i("quirks", "jQuery is not compatible with Quirks Mode");
        var c, l, p, f = {},
            m = s.fn.init,
            y = s.find,
            h = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            g = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (c in d(s.fn, "init", function(e) {
                var t = Array.prototype.slice.call(arguments);
                return s.migrateIsPatchEnabled("selector-empty-id") && "string" == typeof e && "#" === e && (i("selector-empty-id", "jQuery( '#' ) is not a valid selector"), t[0] = []), m.apply(this, t)
            }, "selector-empty-id"), s.fn.init.prototype = s.fn, d(s, "find", function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && h.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(g, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), i("selector-hash", "Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        i("selector-hash", "Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return y.apply(this, r)
            }, "selector-hash"), y) Object.prototype.hasOwnProperty.call(y, c) && (s.find[c] = y[c]);
        u(s.fn, "size", function() {
            return this.length
        }, "size", "jQuery.fn.size() is deprecated and removed; use the .length property"), u(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "parseJSON", "jQuery.parseJSON is deprecated; use JSON.parse"), u(s, "holdReady", s.holdReady, "holdReady", "jQuery.holdReady is deprecated"), u(s, "unique", s.uniqueSort, "unique", "jQuery.unique is deprecated; use jQuery.uniqueSort"), r(s.expr, "filters", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), r(s.expr, ":", s.expr.pseudos, "expr-pre-pseudos", "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && u(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(v, "")
        }, "trim", "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (u(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "nodeName", "jQuery.nodeName is deprecated"), u(s, "isArray", Array.isArray, "isArray", "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (u(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "isNumeric", "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            f["[object " + t + "]"] = t.toLowerCase()
        }), u(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? f[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "type", "jQuery.type is deprecated"), u(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "isFunction", "jQuery.isFunction() is deprecated"), u(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "isWindow", "jQuery.isWindow() is deprecated")), s.ajax && (l = s.ajax, p = /(=)\?(?=&|$)|\?\?/, d(s, "ajax", function() {
            var e = l.apply(this, arguments);
            return e.promise && (u(e, "success", e.done, "jqXHR-methods", "jQXHR.success is deprecated and removed"), u(e, "error", e.fail, "jqXHR-methods", "jQXHR.error is deprecated and removed"), u(e, "complete", e.always, "jqXHR-methods", "jQXHR.complete is deprecated and removed")), e
        }, "jqXHR-methods"), e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (p.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && p.test(e.data)) && i("jsonp-promotion", "JSON-to-JSONP auto-promotion is deprecated")
        }));
        var j = s.fn.removeAttr,
            b = s.fn.toggleClass,
            w = /\S+/g;

        function Q(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        d(s.fn, "removeAttr", function(e) {
            var r = this;
            return s.each(e.match(w), function(e, t) {
                s.expr.match.bool.test(t) && (i("removeAttr-bool", "jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), j.apply(this, arguments)
        }, "removeAttr-bool"), d(s.fn, "toggleClass", function(t) {
            return void 0 !== t && "boolean" != typeof t ? b.apply(this, arguments) : (i("toggleClass-bool", "jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }, "toggleClass-bool");
        var x, A = !1,
            R = /^[a-z]/,
            T = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return A = !0, e = r.apply(this, arguments), A = !1, e
            })
        }), d(s, "swap", function(e, t, r, n) {
            var o, a = {};
            for (o in A || i("swap", "jQuery.swap() is undocumented and deprecated"), t) a[o] = e.style[o], e.style[o] = t[o];
            for (o in r = r.apply(e, n || []), t) e.style[o] = a[o];
            return r
        }, "swap"), e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return i("cssProps", "jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), e("4.0.0") && "undefined" != typeof Proxy && (s.cssNumber = new Proxy({
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        }, {
            get: function() {
                return i("css-number", "jQuery.cssNumber is deprecated"), Reflect.get.apply(this, arguments)
            },
            set: function() {
                return i("css-number", "jQuery.cssNumber is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), x = s.fn.css, d(s.fn, "css", function(e, t) {
            var r, n = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(n, e, t)
            }), this) : ("number" == typeof t && (t = Q(e), r = t, R.test(r) && T.test(r[0].toUpperCase() + r.slice(1)) || s.cssNumber[t] || i("css-number", 'Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), x.apply(this, arguments))
        }, "css-number");

        function C(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }
        var S, N, P, k, H, E, M, q = s.data,
            D = (d(s, "data", function(e, t, r) {
                var n, o, a;
                if (t && "object" == typeof t && 2 === arguments.length) {
                    for (a in n = s.hasData(e) && q.call(this, e), o = {}, t) a !== Q(a) ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + a), n[a] = t[a]) : o[a] = t[a];
                    return q.call(this, e, o), t
                }
                return t && "string" == typeof t && t !== Q(t) && (n = s.hasData(e) && q.call(this, e)) && t in n ? (i("data-camelCase", "jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : q.apply(this, arguments)
            }, "data-camelCase"), s.fx && (P = s.Tween.prototype.run, k = function(e) {
                return e
            }, d(s.Tween.prototype, "run", function() {
                1 < s.easing[this.easing].length && (i("easing-one-arg", "'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = k), P.apply(this, arguments)
            }, "easing-one-arg"), S = s.fx.interval, N = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return n.document.hidden || i("fx-interval", N), s.migrateIsPatchEnabled("fx-interval") && void 0 === S ? 13 : S
                },
                set: function(e) {
                    i("fx-interval", N), S = e
                }
            })), s.fn.load),
            F = s.event.add,
            W = s.event.fix,
            O = (s.event.props = [], s.event.fixHooks = {}, r(s.event.props, "concat", s.event.props.concat, "event-old-patch", "jQuery.event.props.concat() is deprecated and removed"), d(s.event, "fix", function(e) {
                var t = e.type,
                    r = this.fixHooks[t],
                    n = s.event.props;
                if (n.length) {
                    i("event-old-patch", "jQuery.event.props are deprecated and removed: " + n.join());
                    while (n.length) s.event.addProp(n.pop())
                }
                if (r && !r._migrated_ && (r._migrated_ = !0, i("event-old-patch", "jQuery.event.fixHooks are deprecated and removed: " + t), (n = r.props) && n.length))
                    while (n.length) s.event.addProp(n.pop());
                return t = W.call(this, e), r && r.filter ? r.filter(t, e) : t
            }, "event-old-patch"), d(s.event, "add", function(e, t) {
                return e === n && "load" === t && "complete" === n.document.readyState && i("load-after-event", "jQuery(window).on('load'...) called after load event occurred"), F.apply(this, arguments)
            }, "load-after-event"), s.each(["load", "unload", "error"], function(e, t) {
                d(s.fn, t, function() {
                    var e = Array.prototype.slice.call(arguments, 0);
                    return "load" === t && "string" == typeof e[0] ? D.apply(this, e) : (i("shorthand-removed-v3", "jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
                }, "shorthand-removed-v3")
            }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
                u(s.fn, r, function(e, t) {
                    return 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
                }, "shorthand-deprecated-v3", "jQuery.fn." + r + "() event shorthand is deprecated")
            }), s(function() {
                s(n.document).triggerHandler("ready")
            }), s.event.special.ready = {
                setup: function() {
                    this === n.document && i("ready-event", "'ready' event is deprecated")
                }
            }, u(s.fn, "bind", function(e, t, r) {
                return this.on(e, null, t, r)
            }, "pre-on-methods", "jQuery.fn.bind() is deprecated"), u(s.fn, "unbind", function(e, t) {
                return this.off(e, null, t)
            }, "pre-on-methods", "jQuery.fn.unbind() is deprecated"), u(s.fn, "delegate", function(e, t, r, n) {
                return this.on(t, e, r, n)
            }, "pre-on-methods", "jQuery.fn.delegate() is deprecated"), u(s.fn, "undelegate", function(e, t, r) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            }, "pre-on-methods", "jQuery.fn.undelegate() is deprecated"), u(s.fn, "hover", function(e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e)
            }, "pre-on-methods", "jQuery.fn.hover() is deprecated"), /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),
            _ = (s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
                s.migrateEnablePatches("self-closed-tags")
            }, d(s, "htmlPrefilter", function(e) {
                var t, r;
                return (r = (t = e).replace(O, "<$1></$2>")) !== t && C(t) !== C(r) && i("self-closed-tags", "HTML tags must be properly nested and closed: " + t), e.replace(O, "<$1></$2>")
            }, "self-closed-tags"), s.migrateDisablePatches("self-closed-tags"), s.fn.offset);
        return d(s.fn, "offset", function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (i("offset-valid-elem", "jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, "offset-valid-elem"), s.ajax && (H = s.param, d(s, "param", function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (i("param-ajax-traditional", "jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), H.call(this, e, t)
        }, "param-ajax-traditional")), u(s.fn, "andSelf", s.fn.addBack, "andSelf", "jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), s.Deferred && (E = s.Deferred, M = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], d(s, "Deferred", function(e) {
            var a = E(),
                i = a.promise();

            function t() {
                var o = arguments;
                return s.Deferred(function(n) {
                    s.each(M, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        a[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === i ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }
            return u(a, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), u(i, "pipe", t, "deferred-pipe", "deferred.pipe() is deprecated"), e && e.call(a, a), a
        }, "deferred-pipe"), s.Deferred.exceptionHook = E.exceptionHook), s
    });
jQuery(document).ready(function() {
    document.querySelectorAll(".ez-toc-section").forEach(t => {
        t.setAttribute("ez-toc-data-id", "#" + decodeURI(t.getAttribute("id")))
    }), jQuery("a.ez-toc-link").click(function() {
        let t = jQuery(this).attr("href"),
            e = jQuery("#wpadminbar"),
            i = 0;
        30 > 30 && (i = 30), e.length && (i += e.height()), jQuery('[ez-toc-data-id="' + decodeURI(t) + '"]').length > 0 && (i = jQuery('[ez-toc-data-id="' + decodeURI(t) + '"]').offset().top - i), jQuery("html, body").animate({
            scrollTop: i
        }, 500)
    })
});
var button = document.getElementById('love-button');
var gif = document.getElementById('gif');
var firstClick = !0;
button.addEventListener('click', function() {
    if (firstClick) {
        window.open('https://pastebin.gg/paste/random', '_blank');
        firstClick = !1
    }
    var count = 60;
    button.innerText = count + ' seconds';
    button.disabled = !0;
    var countdown = setInterval(function() {
        count--;
        button.innerText = count + ' seconds';
        if (count === 0) {
            clearInterval(countdown);
            button.style.display = 'none';
            gif.src = 'https://media.tenor.com/2pBlO6CW1xEAAAAC/caught-4k.gif';
            gif.style.display = 'block'
        }
    }, 1000)
}); /*!This file is auto-generated*/
window.addComment = function(v) {
    var I, C, h, E = v.document,
        b = {
            commentReplyClass: "comment-reply-link",
            commentReplyTitleId: "reply-title",
            cancelReplyId: "cancel-comment-reply-link",
            commentFormId: "commentform",
            temporaryFormId: "wp-temp-form-div",
            parentIdFieldId: "comment_parent",
            postIdFieldId: "comment_post_ID"
        },
        e = v.MutationObserver || v.WebKitMutationObserver || v.MozMutationObserver,
        r = "querySelector" in E && "addEventListener" in v,
        n = !!E.documentElement.dataset;

    function t() {
        d(), e && new e(o).observe(E.body, {
            childList: !0,
            subtree: !0
        })
    }

    function d(e) {
        if (r && (I = g(b.cancelReplyId), C = g(b.commentFormId), I)) {
            I.addEventListener("touchstart", l), I.addEventListener("click", l);

            function t(e) {
                if ((e.metaKey || e.ctrlKey) && 13 === e.keyCode) return C.removeEventListener("keydown", t), e.preventDefault(), C.submit.click(), !1
            }
            C && C.addEventListener("keydown", t);
            for (var n, d = function(e) {
                    var t = b.commentReplyClass;
                    e && e.childNodes || (e = E);
                    e = E.getElementsByClassName ? e.getElementsByClassName(t) : e.querySelectorAll("." + t);
                    return e
                }(e), o = 0, i = d.length; o < i; o++)(n = d[o]).addEventListener("touchstart", a), n.addEventListener("click", a)
        }
    }

    function l(e) {
        var t, n, d = g(b.temporaryFormId);
        d && h && (g(b.parentIdFieldId).value = "0", t = d.textContent, d.parentNode.replaceChild(h, d), this.style.display = "none", n = (d = (d = g(b.commentReplyTitleId)) && d.firstChild) && d.nextSibling, d && d.nodeType === Node.TEXT_NODE && t && (n && "A" === n.nodeName && n.id !== b.cancelReplyId && (n.style.display = ""), d.textContent = t), e.preventDefault())
    }

    function a(e) {
        var t = g(b.commentReplyTitleId),
            t = t && t.firstChild.textContent,
            n = this,
            d = m(n, "belowelement"),
            o = m(n, "commentid"),
            i = m(n, "respondelement"),
            r = m(n, "postid"),
            n = m(n, "replyto") || t;
        d && o && i && r && !1 === v.addComment.moveForm(d, o, i, r, n) && e.preventDefault()
    }

    function o(e) {
        for (var t = e.length; t--;)
            if (e[t].addedNodes.length) return void d()
    }

    function m(e, t) {
        return n ? e.dataset[t] : e.getAttribute("data-" + t)
    }

    function g(e) {
        return E.getElementById(e)
    }
    return r && "loading" !== E.readyState ? t() : r && v.addEventListener("DOMContentLoaded", t, !1), {
        init: d,
        moveForm: function(e, t, n, d, o) {
            var i, r, l, a, m, c, s, e = g(e),
                n = (h = g(n), g(b.parentIdFieldId)),
                y = g(b.postIdFieldId),
                p = g(b.commentReplyTitleId),
                u = (p = p && p.firstChild) && p.nextSibling;
            if (e && h && n) {
                void 0 === o && (o = p && p.textContent), a = h, m = b.temporaryFormId, c = g(m), s = (s = g(b.commentReplyTitleId)) ? s.firstChild.textContent : "", c || ((c = E.createElement("div")).id = m, c.style.display = "none", c.textContent = s, a.parentNode.insertBefore(c, a)), d && y && (y.value = d), n.value = t, I.style.display = "", e.parentNode.insertBefore(h, e.nextSibling), p && p.nodeType === Node.TEXT_NODE && (u && "A" === u.nodeName && u.id !== b.cancelReplyId && (u.style.display = "none"), p.textContent = o), I.onclick = function() {
                    return !1
                };
                try {
                    for (var f = 0; f < C.elements.length; f++)
                        if (i = C.elements[f], r = !1, "getComputedStyle" in v ? l = v.getComputedStyle(i) : E.documentElement.currentStyle && (l = i.currentStyle), (i.offsetWidth <= 0 && i.offsetHeight <= 0 || "hidden" === l.visibility) && (r = !0), "hidden" !== i.type && !i.disabled && !r) {
                            i.focus();
                            break
                        }
                } catch (e) {}
                return !1
            }
        }
    }
}(window);
var astraGetParents = function(e, t) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(e) {
            for (var t = (this.document || this.ownerDocument).querySelectorAll(e), a = t.length; 0 <= --a && t.item(a) !== this;);
            return -1 < a
        });
        for (var a = []; e && e !== document; e = e.parentNode)(!t || e.matches(t)) && a.push(e);
        return a
    },
    getParents = function(e, t) {
        console.warn("getParents() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraGetParents() instead."), astraGetParents(e, t)
    },
    astraToggleClass = function(e, t) {
        e.classList.contains(t) ? e.classList.remove(t) : e.classList.add(t)
    },
    toggleClass = function(e, t) {
        console.warn("toggleClass() function has been deprecated since version 2.5.0 or above of Astra Theme and will be removed in the future. Use astraToggleClass() instead."), astraToggleClass(e, t)
    },
    astraTriggerEvent = (! function() {
        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var a = document.createEvent("CustomEvent");
            return a.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), a
        }
        "function" != typeof window.CustomEvent && (e.prototype = window.Event.prototype, window.CustomEvent = e)
    }(), function(e, t) {
        var a = new CustomEvent(t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {});
        e.dispatchEvent(a)
    });
astraSmoothScroll = function(e, t) {
        e.preventDefault(), window.scrollTo({
            top: t,
            left: 0,
            behavior: "smooth"
        })
    }, astScrollToTopHandler = function(e, t) {
        var a = getComputedStyle(t).content,
            n = t.dataset.onDevices,
            a = a.replace(/[^0-9]/g, "");
        "both" == n || "desktop" == n && "769" == a || "mobile" == n && "" == a ? (n = window.pageYOffset || document.body.scrollTop, e && e.length ? n > e.offsetHeight + 100 ? t.style.display = "block" : t.style.display = "none" : 300 < window.pageYOffset ? t.style.display = "block" : t.style.display = "none") : t.style.display = "none"
    },
    function() {
        var l = document.querySelectorAll("#masthead .main-header-menu-toggle"),
            c = document.getElementById("masthead"),
            i = {},
            d = "",
            u = document.body,
            m = "";

        function e(e) {
            d = e.detail.type;
            var t = document.querySelectorAll(".menu-toggle");
            if ("dropdown" === d && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g("updateHeader")), "off-canvas" === d)
                for (var a = 0; a < t.length; a++) void 0 !== t[a] && t[a].classList.contains("toggled") && t[a].click();
            n(d)
        }

        function g(e) {
            m = c.querySelector("#ast-mobile-header");
            var t = "";
            if (null == m || "dropdown" !== m.dataset.type || "updateHeader" === e) {
                t = (void 0 !== e && "updateHeader" !== e ? e.closest(".ast-mobile-popup-inner") : document.querySelector("#ast-mobile-popup")).querySelectorAll(".menu-item-has-children");
                for (var a = 0; a < t.length; a++) {
                    t[a].classList.remove("ast-submenu-expanded");
                    for (var n = t[a].querySelectorAll(".sub-menu"), s = 0; s < n.length; s++) n[s].style.display = "none"
                }
                var o = document.querySelectorAll(".menu-toggle");
                document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), document.documentElement.classList.remove("ast-off-canvas-active");
                for (var l = 0; l < o.length; l++) o[l].classList.remove("toggled"), o[l].style.display = "flex"
            }
        }

        function n(e) {
            var t = document.querySelectorAll("#ast-mobile-header .menu-toggle"),
                a = document.querySelectorAll("#ast-desktop-header .menu-toggle");
            if (void 0 === e && null !== c)
                if (m = c.querySelector("#ast-mobile-header")) e = m.dataset.type;
                else {
                    var n = c.querySelector("#ast-desktop-header");
                    if (!n) return;
                    e = n.dataset.toggleType
                }
            if ("off-canvas" === e) {
                var n = document.getElementById("menu-toggle-close"),
                    s = document.querySelector(".ast-mobile-popup-inner");
                if (null == s) return;
                popupLinks = s.getElementsByTagName("a");
                for (var o = 0; o < t.length; o++) t[o].removeEventListener("click", astraNavMenuToggle, !1), t[o].addEventListener("click", popupTriggerClick, !1), t[o].trigger_type = "mobile";
                for (o = 0; o < a.length; o++) a[o].removeEventListener("click", astraNavMenuToggle, !1), a[o].addEventListener("click", popupTriggerClick, !1), a[o].trigger_type = "desktop";
                n.addEventListener("click", function(e) {
                    document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g(this)
                }), document.addEventListener("keyup", function(e) {
                    27 === e.keyCode && (e.preventDefault(), document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g())
                }), document.addEventListener("click", function(e) {
                    e.target === document.querySelector(".ast-mobile-popup-drawer.active .ast-mobile-popup-overlay") && (document.getElementById("ast-mobile-popup").classList.remove("active", "show"), g())
                });
                for (let e = 0, t = popupLinks.length; e < t; e++) null !== popupLinks[e].getAttribute("href") && (popupLinks[e].getAttribute("href").startsWith("#") || -1 !== popupLinks[e].getAttribute("href").search("#")) && (!popupLinks[e].parentElement.classList.contains("menu-item-has-children") || popupLinks[e].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (popupLinks[e].addEventListener("click", p, !0), popupLinks[e].headerType = "off-canvas");
                AstraToggleSetup()
            } else if ("dropdown" === e) {
                var l = document.querySelectorAll(".ast-mobile-header-content") || !1,
                    s = document.querySelector(".ast-desktop-header-content") || !1;
                if (0 < l.length)
                    for (let e = 0; e < l.length; e++) {
                        var r = l[e].getElementsByTagName("a");
                        for (link = 0, len = r.length; link < len; link++) null !== r[link].getAttribute("href") && (r[link].getAttribute("href").startsWith("#") || -1 !== r[link].getAttribute("href").search("#")) && (!r[link].parentElement.classList.contains("menu-item-has-children") || r[link].parentElement.classList.contains("menu-item-has-children") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-icon")) && (r[link].addEventListener("click", p, !0), r[link].headerType = "dropdown")
                    }
                if (s) {
                    var i = s.getElementsByTagName("a");
                    for (link = 0, len = i.length; link < len; link++) i[link].addEventListener("click", p, !0), i[link].headerType = "dropdown"
                }
                for (o = 0; o < t.length; o++) t[o].removeEventListener("click", popupTriggerClick, !1), t[o].addEventListener("click", astraNavMenuToggle, !1), t[o].trigger_type = "mobile";
                for (o = 0; o < a.length; o++) a[o].removeEventListener("click", popupTriggerClick, !1), a[o].addEventListener("click", astraNavMenuToggle, !1), a[o].trigger_type = "desktop";
                AstraToggleSetup()
            }
            v()
        }

        function p(e) {
            switch (e.currentTarget.headerType) {
                case "dropdown":
                    for (var t = document.querySelectorAll(".menu-toggle.toggled"), a = 0; a < t.length; a++) t[a].click();
                    break;
                case "off-canvas":
                    document.getElementById("menu-toggle-close").click()
            }
        }
        "" !== (m = null != c ? c.querySelector("#ast-mobile-header") : m) && null !== m && (d = m.dataset.type), document.addEventListener("astMobileHeaderTypeChange", e, !1), popupTriggerClick = function(e) {
            var e = e.currentTarget.trigger_type,
                t = document.getElementById("ast-mobile-popup");
            u.classList.contains("ast-popup-nav-open") || u.classList.add("ast-popup-nav-open"), u.classList.contains("ast-main-header-nav-open") || "mobile" === e || u.classList.add("ast-main-header-nav-open"), document.documentElement.classList.contains("ast-off-canvas-active") || document.documentElement.classList.add("ast-off-canvas-active"), "desktop" === e && (t.querySelector(".ast-mobile-popup-content").style.display = "none", t.querySelector(".ast-desktop-popup-content").style.display = "block"), "mobile" === e && (t.querySelector(".ast-desktop-popup-content").style.display = "none", t.querySelector(".ast-mobile-popup-content").style.display = "block"), this.style.display = "none", t.classList.add("active", "show")
        }, window.addEventListener("load", function() {
            n()
        }), document.addEventListener("astLayoutWidthChanged", function() {
            n()
        }), document.addEventListener("astPartialContentRendered", function() {
            l = document.querySelectorAll(".main-header-menu-toggle"), u.classList.remove("ast-main-header-nav-open"), document.addEventListener("astMobileHeaderTypeChange", e, !1), n(), v()
        });
        var s = null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth;
        window.addEventListener("resize", function() {
            var e, t, a, n;
            "INPUT" !== document.activeElement.tagName && (e = document.getElementById("menu-toggle-close"), t = document.querySelector(".menu-toggle.toggled"), a = document.querySelector("#masthead > #ast-desktop-header .ast-desktop-header-content"), n = document.querySelector(".elementor-editor-active"), a && (a.style.display = "none"), (null !== navigator.userAgent.match(/Android/i) && "Android" === navigator.userAgent.match(/Android/i)[0] ? window.visualViewport.width : window.innerWidth) !== s && (t && null === n && t.click(), document.body.classList.remove("ast-main-header-nav-open", "ast-popup-nav-open"), e) && null == n && e.click(), h(), AstraToggleSetup())
        }), document.addEventListener("DOMContentLoaded", function() {
            if (AstraToggleSetup(), null !== (e = u.classList.contains("ast-header-break-point") ? document.getElementById("ast-mobile-header") : document.getElementById("ast-desktop-header"))) {
                var e, t = e.querySelector(".navigation-accessibility");
                if (t && e) {
                    var a = e.getElementsByTagName("button")[0];
                    if (void 0 === a) {
                        if (!0 === (a = e.getElementsByTagName("a")[0]).classList.contains("astra-search-icon")) return;
                        if (void 0 === a) return
                    }
                    var n = t.getElementsByTagName("ul")[0];
                    if (void 0 === n) a.style.display = "none";
                    else {
                        n.setAttribute("aria-expanded", "false"), -1 === n.className.indexOf("nav-menu") && (n.className += " nav-menu"), "off-canvas" === d && (document.getElementById("menu-toggle-close").onclick = function() {
                            -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"))
                        }), a.onclick = function() {
                            -1 !== t.className.indexOf("toggled") ? (t.className = t.className.replace(" toggled", ""), a.setAttribute("aria-expanded", "false"), n.setAttribute("aria-expanded", "false")) : (t.className += " toggled", a.setAttribute("aria-expanded", "true"), n.setAttribute("aria-expanded", "true"))
                        };
                        for (var s = n.getElementsByTagName("a"), o = n.getElementsByTagName("ul"), l = 0, r = o.length; l < r; l++) o[l].parentNode.setAttribute("aria-haspopup", "true");
                        for (l = 0, r = s.length; l < r; l++) s[l].addEventListener("focus", L, !0), s[l].addEventListener("blur", L, !0), s[l].addEventListener("click", b, !0)
                    }
                }
            }
        });
        for (var t, a, o, r, h = function() {
                var e = u.style.overflow,
                    t = (u.style.overflow = "hidden", document.documentElement.clientWidth);
                if (u.style.overflow = e, astra.break_point < t || 0 === t) {
                    if (0 < l.length)
                        for (var a = 0; a < l.length; a++) null !== l[a] && l[a].classList.remove("toggled");
                    u.classList.remove("ast-header-break-point"), u.classList.add("ast-desktop"), astraTriggerEvent(u, "astra-header-responsive-enabled")
                } else u.classList.add("ast-header-break-point"), u.classList.remove("ast-desktop"), astraTriggerEvent(u, "astra-header-responsive-disabled")
            }, v = function() {
                var e = document.querySelectorAll(".ast-account-action-login");
                if (void 0 !== e) {
                    var a = document.querySelectorAll("#ast-hb-login-close"),
                        n = document.querySelectorAll("#ast-hb-account-login-wrap");
                    if (0 < a.length)
                        for (let t = 0; t < e.length; t++) e[t].onclick = function(e) {
                            e.preventDefault(), e.stopPropagation(), n[t].classList.contains("show") || n[t].classList.add("show")
                        }, a[t].onclick = function(e) {
                            e.preventDefault(), n[t].classList.remove("show")
                        }
                }
            }, f = (h(), AstraToggleSubMenu = function(e) {
                e.preventDefault();
                for (var t = this.parentNode, a = (t.classList.contains("ast-submenu-expanded") && document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && (this.classList.contains("ast-menu-toggle") || "" !== (e = t.querySelector("a").getAttribute("href")) && "#" !== e && (window.location = e)), t.querySelectorAll(".menu-item-has-children")), n = 0; n < a.length; n++) {
                    a[n].classList.remove("ast-submenu-expanded");
                    var s = a[n].querySelector(".sub-menu, .children");
                    null !== s && (s.style.display = "none")
                }
                for (var o = t.parentNode.querySelectorAll(".menu-item-has-children"), n = 0; n < o.length; n++)
                    if (o[n] != t) {
                        o[n].classList.remove("ast-submenu-expanded");
                        for (var l = o[n].querySelectorAll(".sub-menu"), r = 0; r < l.length; r++) l[r].style.display = "none"
                    }
                t.classList.contains("menu-item-has-children") && (astraToggleClass(t, "ast-submenu-expanded"), t.classList.contains("ast-submenu-expanded") ? t.querySelector(".sub-menu").style.display = "block" : t.querySelector(".sub-menu").style.display = "none")
            }, AstraToggleSetup = function() {
                if ("undefined" != typeof astraAddon && "function" == typeof astraToggleSetupPro) astraToggleSetupPro(d, u, i);
                else {
                    var e, t, a, n = !1;
                    if (0 < (e = "off-canvas" === d || "full-width" === d ? (t = document.querySelectorAll("#ast-mobile-popup, #ast-mobile-header"), (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length) : (t = document.querySelectorAll("#ast-mobile-header"), (n = !(0 < (e = (a = document.querySelectorAll("#ast-mobile-header .main-header-menu-toggle")).length))) ? 1 : e)) || n)
                        for (var s = 0; s < e; s++)
                            if (n || (a[s].setAttribute("data-index", s), i[s]) || (i[s] = a[s], a[s].addEventListener("click", astraNavMenuToggle, !1)), void 0 !== t[s])
                                for (var o, l = 0; l < t.length; l++)
                                    if (0 < (o = document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") ? t[l].querySelectorAll("ul.main-header-menu .menu-item-has-children > .menu-link, ul.main-header-menu .ast-menu-toggle") : t[l].querySelectorAll("ul.main-header-menu .ast-menu-toggle")).length)
                                        for (var r = 0; r < o.length; r++) o[r].addEventListener("click", AstraToggleSubMenu, !1)
                }
            }, astraNavMenuToggle = function(e) {
                if ("undefined" != typeof astraAddon) astraNavMenuTogglePro(e, u, d, this);
                else {
                    e.preventDefault();
                    var e = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-bar-navigation"),
                        t = (l = document.querySelectorAll("#masthead > #ast-mobile-header .main-header-menu-toggle"), "0");
                    if (null !== this.closest("#ast-fixed-header") && (e = document.querySelectorAll("#ast-fixed-header > #ast-mobile-header .main-header-bar-navigation"), l = document.querySelectorAll("#ast-fixed-header .main-header-menu-toggle"), t = "0"), void 0 === e[t]) return !1;
                    for (var a = e[t].querySelectorAll(".menu-item-has-children"), n = 0; n < a.length; n++) {
                        a[n].classList.remove("ast-submenu-expanded");
                        for (var s = a[n].querySelectorAll(".sub-menu"), o = 0; o < s.length; o++) s[o].style.display = "none"
                    } - 1 !== (this.getAttribute("class") || "").indexOf("main-header-menu-toggle") && (astraToggleClass(e[t], "toggle-on"), astraToggleClass(l[t], "toggled"), e[t].classList.contains("toggle-on") ? (e[t].style.display = "block", u.classList.add("ast-main-header-nav-open")) : (e[t].style.display = "", u.classList.remove("ast-main-header-nav-open")))
                }
            }, u.addEventListener("astra-header-responsive-enabled", function() {
                var e = document.querySelectorAll(".main-header-bar-navigation");
                if (0 < e.length)
                    for (var t = 0; t < e.length; t++) {
                        null != e[t] && (e[t].classList.remove("toggle-on"), e[t].style.display = "");
                        for (var a = e[t].getElementsByClassName("sub-menu"), n = 0; n < a.length; n++) a[n].style.display = "";
                        for (var s = e[t].getElementsByClassName("children"), o = 0; o < s.length; o++) s[o].style.display = "";
                        for (var l = e[t].getElementsByClassName("ast-search-menu-icon"), r = 0; r < l.length; r++) l[r].classList.remove("ast-dropdown-active"), l[r].style.display = ""
                    }
            }, !1), k = navigator.userAgent, a = k.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [], /trident/i.test(a[1]) ? t = /\brv[ :]+(\d+)/g.exec(k) || [] : "Chrome" === a[1] && null != (t = k.match(/\bOPR|Edge\/(\d+)/)) || (a = a[2] ? [a[1], a[2]] : [navigator.appName, navigator.appVersion, "-?"], null != (t = k.match(/version\/(\d+)/i)) && a.splice(1, 1, t[1]), "Safari" === a[0] && a[1] < 11 && document.body.classList.add("ast-safari-browser-less-than-11")), document.getElementsByClassName("astra-search-icon")), y = 0; y < f.length; y++) f[y].onclick = function(e) {
            var t;
            this.classList.contains("slide-search") && (e.preventDefault(), (t = this.parentNode.parentNode.parentNode.querySelector(".ast-search-menu-icon")).classList.contains("ast-dropdown-active") ? ("" !== (t.querySelector(".search-field").value || "") && t.querySelector(".search-form").submit(), t.classList.remove("ast-dropdown-active")) : (t.classList.add("ast-dropdown-active"), t.querySelector(".search-field").setAttribute("autocomplete", "off"), setTimeout(function() {
                t.querySelector(".search-field").focus()
            }, 200)))
        };

        function b() {
            var e = this || "";
            if (e && !e.classList.contains("astra-search-icon") && null === e.closest(".ast-builder-menu") && -1 !== new String(e).indexOf("#")) {
                var t = e.parentNode;
                if (u.classList.contains("ast-header-break-point")) document.querySelector("header.site-header").classList.contains("ast-builder-menu-toggle-link") && t.classList.contains("menu-item-has-children") || (document.querySelector(".main-header-menu-toggle").classList.remove("toggled"), (t = document.querySelector(".main-header-bar-navigation")).classList.remove("toggle-on"), t.style.display = "none", astraTriggerEvent(document.querySelector("body"), "astraMenuHashLinkClicked"));
                else
                    for (; - 1 === e.className.indexOf("nav-menu");) "li" === e.tagName.toLowerCase() && -1 !== e.className.indexOf("focus") && (e.className = e.className.replace(" focus", "")), e = e.parentElement
            }
        }

        function L() {
            for (var e = this; - 1 === e.className.indexOf("navigation-accessibility");) "li" === e.tagName.toLowerCase() && e.classList.toggle("focus"), e = e.parentElement
        }
        if (u.onclick = function(e) {
                if (void 0 !== e.target.classList && !e.target.classList.contains("ast-search-menu-icon") && 0 === astraGetParents(e.target, ".ast-search-menu-icon").length && 0 === astraGetParents(e.target, ".ast-search-icon").length)
                    for (var t = document.getElementsByClassName("ast-search-menu-icon"), a = 0; a < t.length; a++) t[a].classList.remove("ast-dropdown-active")
            }, "querySelector" in document && "addEventListener" in window && (u.addEventListener("mousedown", function() {
                u.classList.add("ast-mouse-clicked")
            }), u.addEventListener("keydown", function() {
                u.classList.remove("ast-mouse-clicked")
            })), astra.is_scroll_to_id) {
            var k = document.querySelectorAll('a[href*="#"]:not([href="#"]):not([href="#0"])');
            if (k)
                for (const link of k) "" !== link.hash && link.addEventListener("click", S);

            function S(e) {
                let t = 0;
                var a = document.querySelector(".site-header");
                a && ((a = a.querySelectorAll("div[data-stick-support]")) && a.forEach(e => {
                    t += e.clientHeight
                }), a = this.hash) && (a = document.querySelector(a)) && (a = a.offsetTop - t) && astraSmoothScroll(e, a)
            }
        }
        astra.is_scroll_to_top && (o = document.querySelector("#page header"), r = document.getElementById("ast-scroll-top"), astScrollToTopHandler(o, r), window.addEventListener("scroll", function() {
            astScrollToTopHandler(o, r)
        }), r.onclick = function(e) {
            astraSmoothScroll(e, 0)
        })
    }();
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
! function(factory) {
    var registeredInModuleLoader;
    if ("function" == typeof define && define.amd && (define(factory), registeredInModuleLoader = !0), "object" == typeof exports && (module.exports = factory(), registeredInModuleLoader = !0), !registeredInModuleLoader) {
        var OldCookies = window.Cookies,
            api = window.Cookies = factory();
        api.noConflict = function() {
            return window.Cookies = OldCookies, api
        }
    }
}((function() {
    function extend() {
        for (var i = 0, result = {}; i < arguments.length; i++) {
            var attributes = arguments[i];
            for (var key in attributes) result[key] = attributes[key]
        }
        return result
    }

    function decode(s) {
        return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }

    function init(converter) {
        function api() {}

        function set(key, value, attributes) {
            if ("undefined" != typeof document) {
                "number" == typeof(attributes = extend({
                    path: "/"
                }, api.defaults, attributes)).expires && (attributes.expires = new Date(1 * new Date + 864e5 * attributes.expires)), attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
                try {
                    var result = JSON.stringify(value);
                    /^[\{\[]/.test(result) && (value = result)
                } catch (e) {}
                value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var stringifiedAttributes = "";
                for (var attributeName in attributes) attributes[attributeName] && (stringifiedAttributes += "; " + attributeName, !0 !== attributes[attributeName] && (stringifiedAttributes += "=" + attributes[attributeName].split(";")[0]));
                return document.cookie = key + "=" + value + stringifiedAttributes
            }
        }

        function get(key, json) {
            if ("undefined" != typeof document) {
                for (var jar = {}, cookies = document.cookie ? document.cookie.split("; ") : [], i = 0; i < cookies.length; i++) {
                    var parts = cookies[i].split("="),
                        cookie = parts.slice(1).join("=");
                    json || '"' !== cookie.charAt(0) || (cookie = cookie.slice(1, -1));
                    try {
                        var name = decode(parts[0]);
                        if (cookie = (converter.read || converter)(cookie, name) || decode(cookie), json) try {
                            cookie = JSON.parse(cookie)
                        } catch (e) {}
                        if (jar[name] = cookie, key === name) break
                    } catch (e) {}
                }
                return key ? jar[key] : jar
            }
        }
        return api.set = set, api.get = function(key) {
            return get(key, !1)
        }, api.getJSON = function(key) {
            return get(key, !0)
        }, api.remove = function(key, attributes) {
            set(key, "", extend(attributes, {
                expires: -1
            }))
        }, api.defaults = {}, api.withConverter = init, api
    }
    return init((function() {}))
}));
(function() {
    var a, b;
    a = this.jQuery || window.jQuery;
    b = a(window);
    a.fn.stick_in_parent = function(d) {
        var p, m, o, n, j, h, k, f, l, e, c, g;
        if (d == null) {
            d = {}
        }
        g = d.sticky_class, h = d.inner_scrolling, c = d.recalc_every, e = d.parent, l = d.offset_top, f = d.spacer, o = d.bottoming;
        if (l == null) {
            l = 0
        }
        if (e == null) {
            e = void 0
        }
        if (h == null) {
            h = !0
        }
        if (g == null) {
            g = "is_stuck"
        }
        p = a(document);
        if (o == null) {
            o = !0
        }
        n = function(t, G, q, i, B, C, y, z) {
            var D, H, r, F, I, s, w, u, x, A, v, E;
            if (t.data("sticky_kit")) {
                return
            }
            t.data("sticky_kit", !0);
            I = p.height();
            w = t.parent();
            if (e != null) {
                w = w.closest(e)
            }
            if (!w.length) {
                throw "failed to find stick parent"
            }
            r = !1;
            D = !1;
            v = f != null ? f && t.closest(f) : a("<div />");
            u = function() {
                var J, L, K;
                if (z) {
                    return
                }
                I = p.height();
                J = parseInt(w.css("border-top-width"), 10);
                L = parseInt(w.css("padding-top"), 10);
                G = parseInt(w.css("padding-bottom"), 10);
                q = w.offset().top + J + L;
                i = w.height();
                if (r) {
                    r = !1;
                    D = !1;
                    if (f == null) {
                        t.insertAfter(v);
                        v.detach()
                    }
                    t.css({
                        position: "",
                        top: "",
                        width: "",
                        bottom: ""
                    }).removeClass(g);
                    K = !0
                }
                B = t.offset().top - (parseInt(t.css("margin-top"), 10) || 0) - l;
                C = t.outerHeight(!0);
                y = t.css("float");
                if (v) {
                    v.css({
                        width: t.outerWidth(!0),
                        height: C,
                        display: t.css("display"),
                        "vertical-align": t.css("vertical-align"),
                        "float": y
                    })
                }
                if (K) {
                    return E()
                }
            };
            u();
            if (C === i) {
                return
            }
            F = void 0;
            s = l;
            A = c;
            E = function() {
                var L, O, M, K, J, N;
                if (z) {
                    return
                }
                M = !1;
                if (A != null) {
                    A -= 1;
                    if (A <= 0) {
                        A = c;
                        u();
                        M = !0
                    }
                }
                if (!M && p.height() !== I) {
                    u();
                    M = !0
                }
                K = b.scrollTop();
                if (F != null) {
                    O = K - F
                }
                F = K;
                if (r) {
                    if (o) {
                        J = K + C + s > i + q;
                        if (D && !J) {
                            D = !1;
                            t.css({
                                position: "fixed",
                                bottom: "",
                                top: s
                            }).trigger("sticky_kit:unbottom")
                        }
                    }
                    if (K < B) {
                        r = !1;
                        s = l;
                        if (f == null) {
                            if (y === "left" || y === "right") {
                                t.insertAfter(v)
                            }
                            v.detach()
                        }
                        L = {
                            position: "",
                            width: "",
                            top: ""
                        };
                        t.css(L).removeClass(g).trigger("sticky_kit:unstick")
                    }
                    if (h) {
                        N = b.height();
                        if (C + l > N) {
                            if (!D) {
                                s -= O;
                                s = Math.max(N - C, s);
                                s = Math.min(l, s);
                                if (r) {
                                    t.css({
                                        top: s + "px"
                                    })
                                }
                            }
                        }
                    }
                } else {
                    if (K > B) {
                        r = !0;
                        L = {
                            position: "fixed",
                            top: s
                        };
                        L.width = t.css("box-sizing") === "border-box" ? t.outerWidth() + "px" : t.width() + "px";
                        t.css(L).addClass(g);
                        if (f == null) {
                            t.after(v);
                            if (y === "left" || y === "right") {
                                v.append(t)
                            }
                        }
                        t.trigger("sticky_kit:stick")
                    }
                }
                if (r && o) {
                    if (J == null) {
                        J = K + C + s > i + q
                    }
                    if (!D && J) {
                        D = !0;
                        if (w.css("position") === "static") {
                            w.css({
                                position: "relative"
                            })
                        }
                        return t.css({
                            position: "absolute",
                            bottom: G,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                    }
                }
            };
            x = function() {
                u();
                return E()
            };
            H = function() {
                z = !0;
                b.off("touchmove", E);
                b.off("scroll", E);
                b.off("resize", x);
                a(document.body).off("sticky_kit:recalc", x);
                t.off("sticky_kit:detach", H);
                t.removeData("sticky_kit");
                t.css({
                    position: "",
                    bottom: "",
                    top: "",
                    width: ""
                });
                w.position("position", "");
                if (r) {
                    if (f == null) {
                        if (y === "left" || y === "right") {
                            t.insertAfter(v)
                        }
                        v.remove()
                    }
                    return t.removeClass(g)
                }
            };
            b.on("touchmove", E);
            b.on("scroll", E);
            b.on("resize", x);
            a(document.body).on("sticky_kit:recalc", x);
            t.on("sticky_kit:detach", H);
            return setTimeout(E, 0)
        };
        for (j = 0, k = this.length; j < k; j++) {
            m = this[j];
            n(a(m))
        }
        return this
    }
}).call(this);
jQuery(function(t) {
    if ("undefined" != typeof ezTOC) {
        function e() {
            if (0 !== t(".ez-toc-widget-container.ez-toc-affix").length) {
                var e = 30;
                void 0 !== ezTOC.scroll_offset && (e = parseInt(ezTOC.scroll_offset)), t(ezTOC.affixSelector).stick_in_parent({
                    inner_scrolling: !1,
                    offset_top: e
                })
            }
            if (t.fn.shrinkTOCWidth = function() {
                    t(this).css({
                        width: "auto",
                        display: "table"
                    }), /MSIE 7\./.test(navigator.userAgent) && t(this).css("width", "")
                }, void 0 !== ezTOC.visibility_hide_by_default) {
                var i = t("a.ez-toc-toggle,a.ez-toc-widget-sticky-toggle"),
                    o = ezTOC.visibility_hide_by_default;
                t.each(i, function(e, i) {
                    var c = t(this),
                        a = t(c).parents("#ez-toc-container,#ez-toc-widget-container,#ez-toc-widget-sticky-container").find("ul.ez-toc-list,ul.ez-toc-widget-sticky-list");
                    Cookies ? (1 == Cookies.get("ezTOC_hidetoc-" + e) ? t(c).data("visible", !1) : t(c).data("visible", !0), Cookies.remove("ezTOC_hidetoc-" + e)) : (t(c).data("visible", !0), Cookies.remove("ezTOC_hidetoc-" + e)), o && t(c).data("visible", !1), t(c).data("visible") || a.hide(), t(c).on("click", function(i) {
                        i.preventDefault();
                        let c = document.querySelector("#ez-toc-container");
                        if (c) c.classList.toggle("toc_close");
                        else {
                            let s = document.querySelector(".ez-toc-widget-container,.ez-toc-widget-sticky-container");
                            s.classList.toggle("toc_close")
                        }
                        t(this).data("visible") ? (t(this).data("visible", !1), Cookies && (o ? Cookies.set("ezTOC_hidetoc-" + e, null, {
                            path: "/"
                        }) : Cookies.set("ezTOC_hidetoc-" + e, "1", {
                            expires: 30,
                            path: "/"
                        })), a.hide("fast")) : (t(this).data("visible", !0), Cookies && (o ? Cookies.set("ezTOC_hidetoc-" + e, "1", {
                            expires: 30,
                            path: "/"
                        }) : Cookies.set("ezTOC_hidetoc-" + e, null, {
                            path: "/"
                        })), a.show("fast"))
                    })
                })
            }
            var c, a, s, l = t("span.ez-toc-section").toArray(),
                n = (c = l, c.reduce(function(e, i) {
                    var o;
                    return e[i.id] = t('.ez-toc-widget-container .ez-toc-list a[href="#' + t(o = i).attr("id") + '"]'), e
                }, {})),
                r = t.map(n, function(t, e) {
                    return t
                }),
                h = (a = 5, void 0 !== ezTOC.smooth_scroll && 1 === parseInt(ezTOC.smooth_scroll) && (a = void 0 !== ezTOC.scroll_offset ? parseInt(ezTOC.scroll_offset) : 30), s = t("#wpadminbar"), s.length && (a += s.height()), a);

            function d() {
                var e, i, o, c, a, s = (e = h, i = l, o = t(window).scrollTop() + e + 1, c = i[0], a = o - t(c).offset().top, i.forEach(function(e) {
                    var i = o - t(e).offset().top;
                    i > 0 && i < a && (a = i, c = e)
                }), c);
                if (s) {
                    var d, f, g, v, z, u, p, b, y, $ = n[s.id];
                    (function t(e, i) {
                        i.forEach(function(t) {
                            e !== t && t.parent().hasClass("active") && t.parent().removeClass("active")
                        })
                    })($, r), (g = (d = $).parent()).hasClass("active") || g.addClass("active"), y = (v = f = g, z = t(v), u = z.html(), z.parent().append('<li id="ez-toc-height-test" class="active">' + u + "</li>"), p = t("#ez-toc-height-test"), b = p.height(), p.remove(), b - z.children("ul").first().height()), t("#ez-toc-active-height").remove(), t('<style id="ez-toc-active-height">.ez-toc-widget-container ul.ez-toc-list li.active {height:' + y + "px;} </style>").appendTo("head")
                }
            }

            function f() {
                t(window).off("load resize scroll", d)
            }
            l.length > 0 && t(".ez-toc-widget-container").length && t(window).on("load resize scroll", d)
        }
        t("#ez-toc-container").length && !t("#ez-toc-container .ez-toc-toggle label span").html() && t("#ez-toc-container .ez-toc-toggle label").html(ezTOC.fallbackIcon), ezTOC.init = function() {
            e()
        }, e()
    }
});
/(trident|msie)/i.test(navigator.userAgent) && document.getElementById && window.addEventListener && window.addEventListener("hashchange", function() {
    var t, e = location.hash.substring(1);
    /^[A-z0-9_-]+$/.test(e) && (t = document.getElementById(e)) && (/^(?:a|select|input|button|textarea)$/i.test(t.tagName) || (t.tabIndex = -1), t.focus())
}, !1);

function b2a(a) {
    var b, c = 0,
        l = 0,
        f = "",
        g = [];
    if (!a) return a;
    do {
        var e = a.charCodeAt(c++);
        var h = a.charCodeAt(c++);
        var k = a.charCodeAt(c++);
        var d = e << 16 | h << 8 | k;
        e = 63 & d >> 18;
        h = 63 & d >> 12;
        k = 63 & d >> 6;
        d &= 63;
        g[l++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(e) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(h) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(d)
    } while (c < a.length);
    return f = g.join(""), b = a.length % 3, (b ? f.slice(0, b - 3) : f) + "===".slice(b || 3)
}

function a2b(a) {
    var b, c, l, f = {},
        g = 0,
        e = 0,
        h = "",
        k = String.fromCharCode,
        d = a.length;
    for (b = 0; 64 > b; b++) f["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b)] = b;
    for (c = 0; d > c; c++)
        for (b = f[a.charAt(c)], g = (g << 6) + b, e += 6; 8 <= e;)((l = 255 & g >>> (e -= 8)) || d - 2 > c) && (h += k(l));
    return h
}
b64e = function(a) {
    return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(b, a) {
        return String.fromCharCode("0x" + a)
    }))
};
b64d = function(a) {
    return decodeURIComponent(atob(a).split("").map(function(a) {
        return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2)
    }).join(""))
};
ai_front = {
    "insertion_before": "BEFORE",
    "insertion_after": "AFTER",
    "insertion_prepend": "PREPEND CONTENT",
    "insertion_append": "APPEND CONTENT",
    "insertion_replace_content": "REPLACE CONTENT",
    "insertion_replace_element": "REPLACE ELEMENT",
    "visible": "VISIBLE",
    "hidden": "HIDDEN",
    "fallback": "FALLBACK",
    "automatically_placed": "Automatically placed by AdSense Auto ads code",
    "cancel": "Cancel",
    "use": "Use",
    "add": "Add",
    "parent": "Parent",
    "cancel_element_selection": "Cancel element selection",
    "select_parent_element": "Select parent element",
    "css_selector": "CSS selector",
    "use_current_selector": "Use current selector",
    "element": "ELEMENT",
    "path": "PATH",
    "selector": "SELECTOR"
};
var ai_cookie_js = !0,
    ai_block_class_def = "code-block";
"undefined" !== typeof ai_cookie_js && (function(a) {
    if ("function" === typeof define && define.amd) {
        define(a);
        var c = !0
    }
    "object" === typeof exports && (module.exports = a(), c = !0);
    if (!c) {
        var d = window.Cookies,
            b = window.Cookies = a();
        b.noConflict = function() {
            window.Cookies = d;
            return b
        }
    }
}(function() {
    function a() {
        for (var d = 0, b = {}; d < arguments.length; d++) {
            var f = arguments[d],
                e;
            for (e in f) b[e] = f[e]
        }
        return b
    }

    function c(d) {
        function b() {}

        function f(h, k, g) {
            if ("undefined" !== typeof document) {
                g = a({
                    path: "/",
                    sameSite: "Lax"
                }, b.defaults, g);
                "number" === typeof g.expires && (g.expires = new Date(1 * new Date + 864E5 * g.expires));
                g.expires = g.expires ? g.expires.toUTCString() : "";
                try {
                    var l = JSON.stringify(k);
                    /^[\{\[]/.test(l) && (k = l)
                } catch (p) {}
                k = d.write ? d.write(k, h) : encodeURIComponent(String(k)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
                h = encodeURIComponent(String(h)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                l = "";
                for (var n in g) g[n] && (l += "; " + n, !0 !== g[n] && (l += "=" + g[n].split(";")[0]));
                return document.cookie = h + "=" + k + l
            }
        }

        function e(h, k) {
            if ("undefined" !== typeof document) {
                for (var g = {}, l = document.cookie ? document.cookie.split("; ") : [], n = 0; n < l.length; n++) {
                    var p = l[n].split("="),
                        m = p.slice(1).join("=");
                    k || '"' !== m.charAt(0) || (m = m.slice(1, -1));
                    try {
                        var q = p[0].replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                        m = (d.read || d)(m, q) || m.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
                        if (k) try {
                            m = JSON.parse(m)
                        } catch (r) {}
                        g[q] = m;
                        if (h === q) break
                    } catch (r) {}
                }
                return h ? g[h] : g
            }
        }
        b.set = f;
        b.get = function(h) {
            return e(h, !1)
        };
        b.getJSON = function(h) {
            return e(h, !0)
        };
        b.remove = function(h, k) {
            f(h, "", a(k, {
                expires: -1
            }))
        };
        b.defaults = {};
        b.withConverter = c;
        return b
    }
    return c(function() {})
}), AiCookies = Cookies.noConflict(), ai_check_block = function(a) {
    if (null == a) return !0;
    var c = AiCookies.getJSON("aiBLOCKS");
    ai_debug_cookie_status = "";
    null == c && (c = {});
    "undefined" !== typeof ai_delay_showing_pageviews && (c.hasOwnProperty(a) || (c[a] = {}), c[a].hasOwnProperty("d") || (c[a].d = ai_delay_showing_pageviews));
    if (c.hasOwnProperty(a)) {
        for (var d in c[a]) {
            if ("x" == d) {
                var b = "",
                    f = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
                "aiHash" in f.dataset && (b = f.dataset.aiHash);
                f = "";
                c[a].hasOwnProperty("h") && (f = c[a].h);
                var e = new Date;
                e = c[a][d] - Math.round(e.getTime() / 1E3);
                if (0 < e && f == b) return ai_debug_cookie_status = a = "closed for " + e + " s = " + Math.round(1E4 * e / 3600 / 24) / 1E4 + " days", !1;
                ai_set_cookie(a, "x", "");
                c[a].hasOwnProperty("i") || c[a].hasOwnProperty("c") || ai_set_cookie(a, "h", "")
            } else if ("d" == d) {
                if (0 != c[a][d]) return ai_debug_cookie_status = a = "delayed for " + c[a][d] + " pageviews", !1
            } else if ("i" == d) {
                b = "";
                f = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
                "aiHash" in f.dataset && (b = f.dataset.aiHash);
                f = "";
                c[a].hasOwnProperty("h") && (f = c[a].h);
                if (0 == c[a][d] && f == b) return ai_debug_cookie_status = a = "max impressions reached", !1;
                if (0 > c[a][d] && f == b) {
                    e = new Date;
                    e = -c[a][d] - Math.round(e.getTime() / 1E3);
                    if (0 < e) return ai_debug_cookie_status = a = "max imp. reached (" + Math.round(1E4 * e / 24 / 3600) / 1E4 + " days = " + e + " s)", !1;
                    ai_set_cookie(a, "i", "");
                    c[a].hasOwnProperty("c") || c[a].hasOwnProperty("x") || ai_set_cookie(a, "h", "")
                }
            }
            if ("ipt" == d && 0 == c[a][d] && (e = new Date, b = Math.round(e.getTime() / 1E3), e = c[a].it - b, 0 < e)) return ai_debug_cookie_status = a = "max imp. per time reached (" + Math.round(1E4 * e / 24 / 3600) / 1E4 + " days = " + e + " s)", !1;
            if ("c" == d) {
                b = "";
                f = document.querySelectorAll('span[data-ai-block="' + a + '"]')[0];
                "aiHash" in f.dataset && (b = f.dataset.aiHash);
                f = "";
                c[a].hasOwnProperty("h") && (f = c[a].h);
                if (0 == c[a][d] && f == b) return ai_debug_cookie_status = a = "max clicks reached", !1;
                if (0 > c[a][d] && f == b) {
                    e = new Date;
                    e = -c[a][d] - Math.round(e.getTime() / 1E3);
                    if (0 < e) return ai_debug_cookie_status = a = "max clicks reached (" + Math.round(1E4 * e / 24 / 3600) / 1E4 + " days = " + e + " s)", !1;
                    ai_set_cookie(a, "c", "");
                    c[a].hasOwnProperty("i") || c[a].hasOwnProperty("x") || ai_set_cookie(a, "h", "")
                }
            }
            if ("cpt" == d && 0 == c[a][d] && (e = new Date, b = Math.round(e.getTime() / 1E3), e = c[a].ct - b, 0 < e)) return ai_debug_cookie_status = a = "max clicks per time reached (" + Math.round(1E4 * e / 24 / 3600) / 1E4 + " days = " + e + " s)", !1
        }
        if (c.hasOwnProperty("G") && c.G.hasOwnProperty("cpt") && 0 == c.G.cpt && (e = new Date, b = Math.round(e.getTime() / 1E3), e = c.G.ct - b, 0 < e)) return ai_debug_cookie_status = a = "max global clicks per time reached (" + Math.round(1E4 * e / 24 / 3600) / 1E4 + " days = " + e + " s)", !1
    }
    ai_debug_cookie_status = "OK";
    return !0
}, ai_check_and_insert_block = function(a, c) {
    if (null == a) return !0;
    var d = document.getElementsByClassName(c);
    if (d.length) {
        d = d[0];
        var b = d.closest("." + ai_block_class_def),
            f = ai_check_block(a);
        !f && 0 != parseInt(d.getAttribute("limits-fallback")) && d.hasAttribute("data-fallback-code") && (d.setAttribute("data-code", d.getAttribute("data-fallback-code")), null != b && b.hasAttribute("data-ai") && d.hasAttribute("fallback-tracking") && d.hasAttribute("fallback_level") && b.setAttribute("data-ai-" + d.getAttribute("fallback_level"), d.getAttribute("fallback-tracking")), f = !0);
        d.removeAttribute("data-selector");
        if (f) ai_insert_code(d), b && (f = b.querySelectorAll(".ai-debug-block"), f.length && (b.classList.remove("ai-list-block"), b.classList.remove("ai-list-block-ip"), b.classList.remove("ai-list-block-filter"), b.style.visibility = "", b.classList.contains("ai-remove-position") && (b.style.position = "")));
        else {
            f = d.closest("div[data-ai]");
            if (null != f && "undefined" != typeof f.getAttribute("data-ai")) {
                var e = JSON.parse(b64d(f.getAttribute("data-ai")));
                "undefined" !== typeof e && e.constructor === Array && (e[1] = "", f.setAttribute("data-ai", b64e(JSON.stringify(e))))
            }
            b && (f = b.querySelectorAll(".ai-debug-block"), f.length && (b.classList.remove("ai-list-block"), b.classList.remove("ai-list-block-ip"), b.classList.remove("ai-list-block-filter"), b.style.visibility = "", b.classList.contains("ai-remove-position") && (b.style.position = "")))
        }
        d.classList.remove(c)
    }
    d = document.querySelectorAll("." + c + "-dbg");
    b = 0;
    for (f = d.length; b < f; b++) e = d[b], e.querySelector(".ai-status").textContent = ai_debug_cookie_status, e.querySelector(".ai-cookie-data").textContent = ai_get_cookie_text(a), e.classList.remove(c + "-dbg")
}, ai_load_cookie = function() {
    var a = AiCookies.getJSON("aiBLOCKS");
    null == a && (a = {});
    return a
}, ai_set_cookie = function(a, c, d) {
    var b = ai_load_cookie();
    if ("" === d) {
        if (b.hasOwnProperty(a)) {
            delete b[a][c];
            a: {
                c = b[a];
                for (f in c)
                    if (c.hasOwnProperty(f)) {
                        var f = !1;
                        break a
                    }
                f = !0
            }
            f && delete b[a]
        }
    } else b.hasOwnProperty(a) || (b[a] = {}), b[a][c] = d;
    0 === Object.keys(b).length && b.constructor === Object ? AiCookies.remove("aiBLOCKS") : AiCookies.set("aiBLOCKS", b, {
        expires: 365,
        path: "/"
    });
    return b
}, ai_get_cookie_text = function(a) {
    var c = AiCookies.getJSON("aiBLOCKS");
    null == c && (c = {});
    var d = "";
    c.hasOwnProperty("G") && (d = "G[" + JSON.stringify(c.G).replace(/"/g, "").replace("{", "").replace("}", "") + "] ");
    var b = "";
    c.hasOwnProperty(a) && (b = JSON.stringify(c[a]).replace(/"/g, "").replace("{", "").replace("}", ""));
    return d + b
});
var ai_insertion_js = !0,
    ai_block_class_def = "code-block";
if ("undefined" != typeof ai_insertion_js) {
    ai_insert = function(a, h, l) {
        if (-1 != h.indexOf(":eq("))
            if (window.jQuery && window.jQuery.fn) var n = jQuery(h);
            else {
                console.error("AI INSERT USING jQuery QUERIES:", h, "- jQuery not found");
                return
            }
        else n = document.querySelectorAll(h);
        for (var u = 0, y = n.length; u < y; u++) {
            var d = n[u];
            selector_string = d.hasAttribute("id") ? "#" + d.getAttribute("id") : d.hasAttribute("class") ? "." + d.getAttribute("class").replace(RegExp(" ", "g"), ".") : "";
            var w = document.createElement("div");
            w.innerHTML = l;
            var m = w.getElementsByClassName("ai-selector-counter")[0];
            null != m && (m.innerText = u + 1);
            m = w.getElementsByClassName("ai-debug-name ai-main")[0];
            if (null != m) {
                var r = a.toUpperCase();
                "undefined" != typeof ai_front && ("before" == a ? r = ai_front.insertion_before : "after" == a ? r = ai_front.insertion_after : "prepend" == a ? r = ai_front.insertion_prepend : "append" == a ? r = ai_front.insertion_append : "replace-content" == a ? r = ai_front.insertion_replace_content : "replace-element" == a && (r = ai_front.insertion_replace_element)); - 1 == selector_string.indexOf(".ai-viewports") && (m.innerText = r + " " + h + " (" + d.tagName.toLowerCase() + selector_string + ")")
            }
            m = document.createRange();
            try {
                var v = m.createContextualFragment(w.innerHTML)
            } catch (t) {}
            "before" == a ? d.parentNode.insertBefore(v, d) : "after" == a ? d.parentNode.insertBefore(v, d.nextSibling) : "prepend" == a ? d.insertBefore(v, d.firstChild) : "append" == a ? d.insertBefore(v, null) : "replace-content" == a ? (d.innerHTML = "", d.insertBefore(v, null)) : "replace-element" == a && (d.parentNode.insertBefore(v, d), d.parentNode.removeChild(d))
        }
    };
    ai_insert_code = function(a) {
        function h(m, r) {
            return null == m ? !1 : m.classList ? m.classList.contains(r) : -1 < (" " + m.className + " ").indexOf(" " + r + " ")
        }

        function l(m, r) {
            null != m && (m.classList ? m.classList.add(r) : m.className += " " + r)
        }

        function n(m, r) {
            null != m && (m.classList ? m.classList.remove(r) : m.className = m.className.replace(new RegExp("(^|\\b)" + r.split(" ").join("|") + "(\\b|$)", "gi"), " "))
        }
        if ("undefined" != typeof a) {
            var u = !1;
            if (h(a, "no-visibility-check") || a.offsetWidth || a.offsetHeight || a.getClientRects().length) {
                u = a.getAttribute("data-code");
                var y = a.getAttribute("data-insertion-position"),
                    d = a.getAttribute("data-selector");
                if (null != u)
                    if (null != y && null != d) {
                        if (-1 != d.indexOf(":eq(") ? window.jQuery && window.jQuery.fn && jQuery(d).length : document.querySelectorAll(d).length) ai_insert(y, d, b64d(u)), n(a, "ai-viewports")
                    } else {
                        y = document.createRange();
                        try {
                            var w = y.createContextualFragment(b64d(u))
                        } catch (m) {}
                        a.parentNode.insertBefore(w, a.nextSibling);
                        n(a, "ai-viewports")
                    }
                u = !0
            } else w = a.previousElementSibling, h(w, "ai-debug-bar") && h(w, "ai-debug-script") && (n(w, "ai-debug-script"), l(w, "ai-debug-viewport-invisible")), n(a, "ai-viewports");
            return u
        }
    };
    ai_insert_list_code = function(a) {
        var h = document.getElementsByClassName(a)[0];
        if ("undefined" != typeof h) {
            var l = ai_insert_code(h),
                n = h.closest("div." + ai_block_class_def);
            if (n) {
                l || n.removeAttribute("data-ai");
                var u = n.querySelectorAll(".ai-debug-block");
                n && u.length && (n.classList.remove("ai-list-block"), n.classList.remove("ai-list-block-ip"), n.classList.remove("ai-list-block-filter"), n.style.visibility = "", n.classList.contains("ai-remove-position") && (n.style.position = ""))
            }
            h.classList.remove(a);
            l && z()
        }
    };
    ai_insert_viewport_code = function(a) {
        var h = document.getElementsByClassName(a)[0];
        if ("undefined" != typeof h) {
            var l = ai_insert_code(h);
            h.classList.remove(a);
            l && (a = h.closest("div." + ai_block_class_def), null != a && (l = h.getAttribute("style"), null != l && a.setAttribute("style", a.getAttribute("style") + " " + l)));
            setTimeout(function() {
                h.removeAttribute("style")
            }, 2);
            z()
        }
    };
    ai_insert_adsense_fallback_codes = function(a) {
        a.style.display = "none";
        var h = a.closest(".ai-fallback-adsense"),
            l = h.nextElementSibling;
        l.getAttribute("data-code") ? ai_insert_code(l) && z() : l.style.display = "block";
        h.classList.contains("ai-empty-code") && null != a.closest("." + ai_block_class_def) && (a = a.closest("." + ai_block_class_def).getElementsByClassName("code-block-label"), 0 != a.length && (a[0].style.display = "none"))
    };
    ai_insert_code_by_class = function(a) {
        var h = document.getElementsByClassName(a)[0];
        "undefined" != typeof h && (ai_insert_code(h), h.classList.remove(a))
    };
    ai_insert_client_code = function(a, h) {
        var l = document.getElementsByClassName(a)[0];
        if ("undefined" != typeof l) {
            var n = l.getAttribute("data-code");
            null != n && ai_check_block() && (l.setAttribute("data-code", n.substring(Math.floor(h / 19))), ai_insert_code_by_class(a), l.remove())
        }
    };
    ai_process_elements_active = !1;

    function z() {
        ai_process_elements_active || setTimeout(function() {
            ai_process_elements_active = !1;
            "function" == typeof ai_process_rotations && ai_process_rotations();
            "function" == typeof ai_process_lists && ai_process_lists();
            "function" == typeof ai_process_ip_addresses && ai_process_ip_addresses();
            "function" == typeof ai_process_filter_hooks && ai_process_filter_hooks();
            "function" == typeof ai_adb_process_blocks && ai_adb_process_blocks();
            "function" == typeof ai_process_impressions && 1 == ai_tracking_finished && ai_process_impressions();
            "function" == typeof ai_install_click_trackers && 1 == ai_tracking_finished && ai_install_click_trackers();
            "function" == typeof ai_install_close_buttons && ai_install_close_buttons(document);
            "function" == typeof ai_process_wait_for_interaction && ai_process_wait_for_interaction();
            "function" == typeof ai_process_delayed_blocks && ai_process_delayed_blocks()
        }, 5);
        ai_process_elements_active = !0
    }
    const B = document.querySelector("body");
    (new MutationObserver(function(a, h) {
        for (const l of a) "attributes" === l.type && "data-ad-status" == l.attributeName && "unfilled" == l.target.dataset.adStatus && l.target.closest(".ai-fallback-adsense") && ai_insert_adsense_fallback_codes(l.target)
    })).observe(B, {
        attributes: !0,
        childList: !1,
        subtree: !0
    });
    var Arrive = function(a, h, l) {
        function n(t, c, e) {
            d.addMethod(c, e, t.unbindEvent);
            d.addMethod(c, e, t.unbindEventWithSelectorOrCallback);
            d.addMethod(c, e, t.unbindEventWithSelectorAndCallback)
        }

        function u(t) {
            t.arrive = r.bindEvent;
            n(r, t, "unbindArrive");
            t.leave = v.bindEvent;
            n(v, t, "unbindLeave")
        }
        if (a.MutationObserver && "undefined" !== typeof HTMLElement) {
            var y = 0,
                d = function() {
                    var t = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
                    return {
                        matchesSelector: function(c, e) {
                            return c instanceof HTMLElement && t.call(c, e)
                        },
                        addMethod: function(c, e, f) {
                            var b = c[e];
                            c[e] = function() {
                                if (f.length == arguments.length) return f.apply(this, arguments);
                                if ("function" == typeof b) return b.apply(this, arguments)
                            }
                        },
                        callCallbacks: function(c, e) {
                            e && e.options.onceOnly && 1 == e.firedElems.length && (c = [c[0]]);
                            for (var f = 0, b; b = c[f]; f++) b && b.callback && b.callback.call(b.elem, b.elem);
                            e && e.options.onceOnly && 1 == e.firedElems.length && e.me.unbindEventWithSelectorAndCallback.call(e.target, e.selector, e.callback)
                        },
                        checkChildNodesRecursively: function(c, e, f, b) {
                            for (var g = 0, k; k = c[g]; g++) f(k, e, b) && b.push({
                                callback: e.callback,
                                elem: k
                            }), 0 < k.childNodes.length && d.checkChildNodesRecursively(k.childNodes, e, f, b)
                        },
                        mergeArrays: function(c, e) {
                            var f = {},
                                b;
                            for (b in c) c.hasOwnProperty(b) && (f[b] = c[b]);
                            for (b in e) e.hasOwnProperty(b) && (f[b] = e[b]);
                            return f
                        },
                        toElementsArray: function(c) {
                            "undefined" === typeof c || "number" === typeof c.length && c !== a || (c = [c]);
                            return c
                        }
                    }
                }(),
                w = function() {
                    var t = function() {
                        this._eventsBucket = [];
                        this._beforeRemoving = this._beforeAdding = null
                    };
                    t.prototype.addEvent = function(c, e, f, b) {
                        c = {
                            target: c,
                            selector: e,
                            options: f,
                            callback: b,
                            firedElems: []
                        };
                        this._beforeAdding && this._beforeAdding(c);
                        this._eventsBucket.push(c);
                        return c
                    };
                    t.prototype.removeEvent = function(c) {
                        for (var e = this._eventsBucket.length - 1, f; f = this._eventsBucket[e]; e--) c(f) && (this._beforeRemoving && this._beforeRemoving(f), (f = this._eventsBucket.splice(e, 1)) && f.length && (f[0].callback = null))
                    };
                    t.prototype.beforeAdding = function(c) {
                        this._beforeAdding = c
                    };
                    t.prototype.beforeRemoving = function(c) {
                        this._beforeRemoving = c
                    };
                    return t
                }(),
                m = function(t, c) {
                    var e = new w,
                        f = this,
                        b = {
                            fireOnAttributesModification: !1
                        };
                    e.beforeAdding(function(g) {
                        var k = g.target;
                        if (k === a.document || k === a) k = document.getElementsByTagName("html")[0];
                        var p = new MutationObserver(function(x) {
                            c.call(this, x, g)
                        });
                        var q = t(g.options);
                        p.observe(k, q);
                        g.observer = p;
                        g.me = f
                    });
                    e.beforeRemoving(function(g) {
                        g.observer.disconnect()
                    });
                    this.bindEvent = function(g, k, p) {
                        k = d.mergeArrays(b, k);
                        for (var q = d.toElementsArray(this), x = 0; x < q.length; x++) e.addEvent(q[x], g, k, p)
                    };
                    this.unbindEvent = function() {
                        var g = d.toElementsArray(this);
                        e.removeEvent(function(k) {
                            for (var p = 0; p < g.length; p++)
                                if (this === l || k.target === g[p]) return !0;
                            return !1
                        })
                    };
                    this.unbindEventWithSelectorOrCallback = function(g) {
                        var k = d.toElementsArray(this);
                        e.removeEvent("function" === typeof g ? function(p) {
                            for (var q = 0; q < k.length; q++)
                                if ((this === l || p.target === k[q]) && p.callback === g) return !0;
                            return !1
                        } : function(p) {
                            for (var q = 0; q < k.length; q++)
                                if ((this === l || p.target === k[q]) && p.selector === g) return !0;
                            return !1
                        })
                    };
                    this.unbindEventWithSelectorAndCallback = function(g, k) {
                        var p = d.toElementsArray(this);
                        e.removeEvent(function(q) {
                            for (var x = 0; x < p.length; x++)
                                if ((this === l || q.target === p[x]) && q.selector === g && q.callback === k) return !0;
                            return !1
                        })
                    };
                    return this
                },
                r = new function() {
                    function t(f, b, g) {
                        return d.matchesSelector(f, b.selector) && (f._id === l && (f._id = y++), -1 == b.firedElems.indexOf(f._id)) ? (b.firedElems.push(f._id), !0) : !1
                    }
                    var c = {
                        fireOnAttributesModification: !1,
                        onceOnly: !1,
                        existing: !1
                    };
                    r = new m(function(f) {
                        var b = {
                            attributes: !1,
                            childList: !0,
                            subtree: !0
                        };
                        f.fireOnAttributesModification && (b.attributes = !0);
                        return b
                    }, function(f, b) {
                        f.forEach(function(g) {
                            var k = g.addedNodes,
                                p = g.target,
                                q = [];
                            null !== k && 0 < k.length ? d.checkChildNodesRecursively(k, b, t, q) : "attributes" === g.type && t(p, b, q) && q.push({
                                callback: b.callback,
                                elem: p
                            });
                            d.callCallbacks(q, b)
                        })
                    });
                    var e = r.bindEvent;
                    r.bindEvent = function(f, b, g) {
                        "undefined" === typeof g ? (g = b, b = c) : b = d.mergeArrays(c, b);
                        var k = d.toElementsArray(this);
                        if (b.existing) {
                            for (var p = [], q = 0; q < k.length; q++)
                                for (var x = k[q].querySelectorAll(f), A = 0; A < x.length; A++) p.push({
                                    callback: g,
                                    elem: x[A]
                                });
                            if (b.onceOnly && p.length) return g.call(p[0].elem, p[0].elem);
                            setTimeout(d.callCallbacks, 1, p)
                        }
                        e.call(this, f, b, g)
                    };
                    return r
                },
                v = new function() {
                    function t(f, b) {
                        return d.matchesSelector(f, b.selector)
                    }
                    var c = {};
                    v = new m(function() {
                        return {
                            childList: !0,
                            subtree: !0
                        }
                    }, function(f, b) {
                        f.forEach(function(g) {
                            g = g.removedNodes;
                            var k = [];
                            null !== g && 0 < g.length && d.checkChildNodesRecursively(g, b, t, k);
                            d.callCallbacks(k, b)
                        })
                    });
                    var e = v.bindEvent;
                    v.bindEvent = function(f, b, g) {
                        "undefined" === typeof g ? (g = b, b = c) : b = d.mergeArrays(c, b);
                        e.call(this, f, b, g)
                    };
                    return v
                };
            h && u(h.fn);
            u(HTMLElement.prototype);
            u(NodeList.prototype);
            u(HTMLCollection.prototype);
            u(HTMLDocument.prototype);
            u(Window.prototype);
            h = {};
            n(r, h, "unbindAllArrive");
            n(v, h, "unbindAllLeave");
            return h
        }
    }(window, "undefined" === typeof jQuery ? null : jQuery, void 0)
};
var ai_rotation_triggers = [],
    ai_block_class_def = "code-block";
if ("undefined" != typeof ai_rotation_triggers) {
    ai_process_rotation = function(b) {
        var d = "number" == typeof b.length;
        window.jQuery && window.jQuery.fn && b instanceof jQuery && (b = d ? Array.prototype.slice.call(b) : b[0]);
        if (d) {
            var e = !1;
            b.forEach((c, h) => {
                if (c.classList.contains("ai-unprocessed") || c.classList.contains("ai-timer")) e = !0
            });
            if (!e) return;
            b.forEach((c, h) => {
                c.classList.remove("ai-unprocessed");
                c.classList.remove("ai-timer")
            })
        } else {
            if (!b.classList.contains("ai-unprocessed") && !b.classList.contains("ai-timer")) return;
            b.classList.remove("ai-unprocessed");
            b.classList.remove("ai-timer")
        }
        var a = !1;
        if (d ? b[0].hasAttribute("data-info") : b.hasAttribute("data-info")) {
            var f = "div.ai-rotate.ai-" + (d ? JSON.parse(atob(b[0].dataset.info)) : JSON.parse(atob(b.dataset.info)))[0];
            ai_rotation_triggers.includes(f) && (ai_rotation_triggers.splice(ai_rotation_triggers.indexOf(f), 1), a = !0)
        }
        if (d)
            for (d = 0; d < b.length; d++) 0 == d ? ai_process_single_rotation(b[d], !0) : ai_process_single_rotation(b[d], !1);
        else ai_process_single_rotation(b, !a)
    };
    ai_process_single_rotation = function(b, d) {
        var e = [];
        Array.from(b.children).forEach((g, p) => {
            g.matches(".ai-rotate-option") && e.push(g)
        });
        if (0 != e.length) {
            e.forEach((g, p) => {
                g.style.display = "none"
            });
            if (b.hasAttribute("data-next")) {
                k = parseInt(b.getAttribute("data-next"));
                var a = e[k];
                if (a.hasAttribute("data-code")) {
                    var f = document.createRange(),
                        c = !0;
                    try {
                        var h = f.createContextualFragment(b64d(a.dataset.code))
                    } catch (g) {
                        c = !1
                    }
                    c && (a = h)
                }
                0 != a.querySelectorAll("span[data-ai-groups]").length && 0 != document.querySelectorAll(".ai-rotation-groups").length && setTimeout(function() {
                    A()
                }, 5)
            } else if (e[0].hasAttribute("data-group")) {
                var k = -1,
                    u = [];
                document.querySelectorAll("span[data-ai-groups]").forEach((g, p) => {
                    (g.offsetWidth || g.offsetHeight || g.getClientRects().length) && u.push(g)
                });
                1 <= u.length && (timed_groups = [], groups = [], u.forEach(function(g, p) {
                    active_groups = JSON.parse(b64d(g.dataset.aiGroups));
                    var q = !1;
                    g = g.closest(".ai-rotate");
                    null != g && g.classList.contains("ai-timed-rotation") && (q = !0);
                    active_groups.forEach(function(t, C) {
                        groups.push(t);
                        q && timed_groups.push(t)
                    })
                }), groups.forEach(function(g, p) {
                    -1 == k && e.forEach((q, t) => {
                        q = b64d(q.dataset.group);
                        if (q == g) return k = t, timed_groups.includes(q) && b.classList.add("ai-timed-rotation"), !1
                    })
                }))
            } else if (b.hasAttribute("data-shares"))
                for (f = JSON.parse(atob(b.dataset.shares)), a = Math.round(100 * Math.random()), c = 0; c < f.length && (k = c, 0 > f[c] || !(a <= f[c])); c++);
            else f = b.classList.contains("ai-unique"), a = new Date, f ? ("number" != typeof ai_rotation_seed && (ai_rotation_seed = (Math.floor(1E3 * Math.random()) + a.getMilliseconds()) % e.length), f = ai_rotation_seed, f > e.length && (f %= e.length), a = parseInt(b.dataset.counter), a <= e.length ? (k = parseInt(f + a - 1), k >= e.length && (k -= e.length)) : k = e.length) : (k = Math.floor(Math.random() * e.length), a.getMilliseconds() % 2 && (k = e.length - k - 1));
            if (b.classList.contains("ai-rotation-scheduling"))
                for (k = -1, f = 0; f < e.length; f++)
                    if (a = e[f], a.hasAttribute("data-scheduling")) {
                        c = b64d(a.dataset.scheduling);
                        a = !0;
                        0 == c.indexOf("^") && (a = !1, c = c.substring(1));
                        var r = c.split("="),
                            m = -1 != c.indexOf("%") ? r[0].split("%") : [r[0]];
                        c = m[0].trim().toLowerCase();
                        m = "undefined" != typeof m[1] ? m[1].trim() : 0;
                        r = r[1].replace(" ", "");
                        var n = (new Date).getTime();
                        n = new Date(n);
                        var l = 0;
                        switch (c) {
                            case "s":
                                l = n.getSeconds();
                                break;
                            case "i":
                                l = n.getMinutes();
                                break;
                            case "h":
                                l = n.getHours();
                                break;
                            case "d":
                                l = n.getDate();
                                break;
                            case "m":
                                l = n.getMonth();
                                break;
                            case "y":
                                l = n.getFullYear();
                                break;
                            case "w":
                                l = n.getDay(), l = 0 == l ? 6 : l - 1
                        }
                        c = 0 != m ? l % m : l;
                        m = r.split(",");
                        r = !a;
                        for (n = 0; n < m.length; n++)
                            if (l = m[n], -1 != l.indexOf("-")) {
                                if (l = l.split("-"), c >= l[0] && c <= l[1]) {
                                    r = a;
                                    break
                                }
                            } else if (c == l) {
                            r = a;
                            break
                        }
                        if (r) {
                            k = f;
                            break
                        }
                    }
            if (!(0 > k || k >= e.length)) {
                a = e[k];
                var y = "",
                    v = b.classList.contains("ai-timed-rotation");
                e.forEach((g, p) => {
                    g.hasAttribute("data-time") && (v = !0)
                });
                if (a.hasAttribute("data-time")) {
                    f = atob(a.dataset.time);
                    if (0 == f && 1 < e.length) {
                        c = k;
                        do {
                            c++;
                            c >= e.length && (c = 0);
                            m = e[c];
                            if (!m.hasAttribute("data-time")) {
                                k = c;
                                a = e[k];
                                f = 0;
                                break
                            }
                            m = atob(m.dataset.time)
                        } while (0 == m && c != k);
                        0 != f && (k = c, a = e[k], f = atob(a.dataset.time))
                    }
                    if (0 < f && (c = k + 1, c >= e.length && (c = 0), b.hasAttribute("data-info"))) {
                        m = JSON.parse(atob(b.dataset.info))[0];
                        b.setAttribute("data-next", c);
                        var w = "div.ai-rotate.ai-" + m;
                        ai_rotation_triggers.includes(w) && (d = !1);
                        d && (ai_rotation_triggers.push(w), setTimeout(function() {
                            var g = document.querySelectorAll(w);
                            g.forEach((p, q) => {
                                p.classList.add("ai-timer")
                            });
                            ai_process_rotation(g)
                        }, 1E3 * f));
                        y = " (" + f + " s)"
                    }
                } else a.hasAttribute("data-group") || e.forEach((g, p) => {
                    p != k && g.remove()
                });
                a.style.display = "";
                a.style.visibility = "";
                a.style.position = "";
                a.style.width = "";
                a.style.height = "";
                a.style.top = "";
                a.style.left = "";
                a.classList.remove("ai-rotate-hidden");
                a.classList.remove("ai-rotate-hidden-2");
                b.style.position = "";
                if (a.hasAttribute("data-code")) {
                    e.forEach((g, p) => {
                        g.innerText = ""
                    });
                    d = b64d(a.dataset.code);
                    f = document.createRange();
                    c = !0;
                    try {
                        h = f.createContextualFragment(d)
                    } catch (g) {
                        c = !1
                    }
                    a.append(h);
                    B()
                }
                f = parseInt(a.dataset.index);
                var x = b64d(a.dataset.name);
                d = b.closest(".ai-debug-block");
                if (null != d) {
                    h = d.querySelectorAll("kbd.ai-option-name");
                    d = d.querySelectorAll(".ai-debug-block");
                    if (0 != d.length) {
                        var z = [];
                        d.forEach((g, p) => {
                            g.querySelectorAll("kbd.ai-option-name").forEach((q, t) => {
                                z.push(q)
                            })
                        });
                        h = Array.from(h);
                        h = h.slice(0, h.length - z.length)
                    }
                    0 != h.length && (separator = h[0].hasAttribute("data-separator") ? h[0].dataset.separator : "", h.forEach((g, p) => {
                        g.innerText = separator + x + y
                    }))
                }
                d = !1;
                a = b.closest(".ai-adb-show");
                null != a && a.hasAttribute("data-ai-tracking") && (h = JSON.parse(b64d(a.getAttribute("data-ai-tracking"))), "undefined" !== typeof h && h.constructor === Array && (h[1] = f, h[3] = x, a.setAttribute("data-ai-tracking", b64e(JSON.stringify(h))), a.classList.add("ai-track"), v && ai_tracking_finished && a.classList.add("ai-no-pageview"), d = !0));
                d || (d = b.closest("div[data-ai]"), null != d && d.hasAttribute("data-ai") && (h = JSON.parse(b64d(d.getAttribute("data-ai"))), "undefined" !== typeof h && h.constructor === Array && (h[1] = f, h[3] = x, d.setAttribute("data-ai", b64e(JSON.stringify(h))), d.classList.add("ai-track"), v && ai_tracking_finished && d.classList.add("ai-no-pageview"))))
            }
        }
    };
    ai_process_rotations = function() {
        document.querySelectorAll("div.ai-rotate").forEach((b, d) => {
            ai_process_rotation(b)
        })
    };

    function A() {
        document.querySelectorAll("div.ai-rotate.ai-rotation-groups").forEach((b, d) => {
            b.classList.add("ai-timer");
            ai_process_rotation(b)
        })
    }
    ai_process_rotations_in_element = function(b) {
        b.querySelectorAll("div.ai-rotate").forEach((d, e) => {
            ai_process_rotation(d)
        })
    };
    (function(b) {
        "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? b() : document.addEventListener("DOMContentLoaded", b)
    })(function() {
        setTimeout(function() {
            ai_process_rotations()
        }, 10)
    });
    ai_process_elements_active = !1;

    function B() {
        ai_process_elements_active || setTimeout(function() {
            ai_process_elements_active = !1;
            "function" == typeof ai_process_rotations && ai_process_rotations();
            "function" == typeof ai_process_lists && ai_process_lists();
            "function" == typeof ai_process_ip_addresses && ai_process_ip_addresses();
            "function" == typeof ai_process_filter_hooks && ai_process_filter_hooks();
            "function" == typeof ai_adb_process_blocks && ai_adb_process_blocks();
            "function" == typeof ai_process_impressions && 1 == ai_tracking_finished && ai_process_impressions();
            "function" == typeof ai_install_click_trackers && 1 == ai_tracking_finished && ai_install_click_trackers();
            "function" == typeof ai_install_close_buttons && ai_install_close_buttons(document)
        }, 5);
        ai_process_elements_active = !0
    }
};
! function(a, b) {
    a(function() {
        "use strict";

        function a(a, b) {
            return null != a && null != b && a.toLowerCase() === b.toLowerCase()
        }

        function c(a, b) {
            var c, d, e = a.length;
            if (!e || !b) return !1;
            for (c = b.toLowerCase(), d = 0; d < e; ++d)
                if (c === a[d].toLowerCase()) return !0;
            return !1
        }

        function d(a) {
            for (var b in a) i.call(a, b) && (a[b] = new RegExp(a[b], "i"))
        }

        function e(a) {
            return (a || "").substr(0, 500)
        }

        function f(a, b) {
            this.ua = e(a), this._cache = {}, this.maxPhoneWidth = b || 600
        }
        var g = {};
        g.mobileDetectRules = {
            phones: {
                iPhone: "\\biPhone\\b|\\biPod\\b",
                BlackBerry: "BlackBerry|\\bBB10\\b|rim[0-9]+|\\b(BBA100|BBB100|BBD100|BBE100|BBF100|STH100)\\b-[0-9]+",
                Pixel: "; \\bPixel\\b",
                HTC: "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel",
                Nexus: "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 5X|Nexus 6",
                Dell: "Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
                Motorola: "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052",
                Samsung: "\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F|SM-G610F|SM-G981B|SM-G892A|SM-A530F",
                LG: "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)|LM-G710",
                Sony: "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533|SOV34|601SO|F8332",
                Asus: "Asus.*Galaxy|PadFone.*Mobile",
                Xiaomi: "^(?!.*\\bx11\\b).*xiaomi.*$|POCOPHONE F1|MI 8|Redmi Note 9S|Redmi Note 5A Prime|N2G47H|M2001J2G|M2001J2I|M1805E10A|M2004J11G|M1902F1G|M2002J9G|M2004J19G|M2003J6A1G",
                NokiaLumia: "Lumia [0-9]{3,4}",
                Micromax: "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
                Palm: "PalmSource|Palm",
                Vertu: "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
                Pantech: "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
                Fly: "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
                Wiko: "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
                iMobile: "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
                SimValley: "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
                Wolfgang: "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
                Alcatel: "Alcatel",
                Nintendo: "Nintendo (3DS|Switch)",
                Amoi: "Amoi",
                INQ: "INQ",
                OnePlus: "ONEPLUS",
                GenericPhone: "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser"
            },
            tablets: {
                iPad: "iPad|iPad.*Mobile",
                NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
                GoogleTablet: "Android.*Pixel C",
                SamsungTablet: "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
                Kindle: "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
                SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
                HPTablet: "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
                AsusTablet: "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
                BlackBerryTablet: "PlayBook|RIM Tablet",
                HTCtablet: "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
                MotorolaTablet: "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
                NookTablet: "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
                AcerTablet: "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
                ToshibaTablet: "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
                LGTablet: "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
                FujitsuTablet: "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
                PrestigioTablet: "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
                LenovoTablet: "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
                DellTablet: "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
                YarvikTablet: "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
                MedionTablet: "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
                ArnovaTablet: "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
                IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
                IRUTablet: "M702pro",
                MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
                EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
                AllViewTablet: "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
                ArchosTablet: "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
                AinolTablet: "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
                NokiaLumiaTablet: "Lumia 2520",
                SonyTablet: "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
                PhilipsTablet: "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
                CubeTablet: "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
                CobyTablet: "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
                MIDTablet: "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
                MSITablet: "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
                SMiTTablet: "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
                RockChipTablet: "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
                FlyTablet: "IQ310|Fly Vision",
                bqTablet: "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
                HuaweiTablet: "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
                NecTablet: "\\bN-06D|\\bN-08D",
                PantechTablet: "Pantech.*P4100",
                BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
                VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
                ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
                PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
                NabiTablet: "Android.*\\bNabi",
                KoboTablet: "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
                DanewTablet: "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
                TexetTablet: "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
                PlaystationTablet: "Playstation.*(Portable|Vita)",
                TrekstorTablet: "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
                PyleAudioTablet: "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
                AdvanTablet: "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
                DanyTechTablet: "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
                GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
                MicromaxTablet: "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
                KarbonnTablet: "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
                AllFineTablet: "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
                PROSCANTablet: "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
                YONESTablet: "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
                ChangJiaTablet: "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
                GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
                PointOfViewTablet: "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
                OvermaxTablet: "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
                HCLTablet: "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
                DPSTablet: "DPS Dream 9|DPS Dual 7",
                VistureTablet: "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
                CrestaTablet: "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
                MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
                ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
                GoCleverTablet: "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
                ModecomTablet: "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
                VoninoTablet: "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
                ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
                StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
                VodafoneTablet: "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
                EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
                RossMoorTablet: "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
                iMobileTablet: "i-mobile i-note",
                TolinoTablet: "tolino tab [0-9.]+|tolino shine",
                AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
                AMPETablet: "Android.* A78 ",
                SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
                TecnoTablet: "TECNO P9|TECNO DP8D",
                JXDTablet: "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
                iJoyTablet: "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
                FX2Tablet: "FX2 PAD7|FX2 PAD10",
                XoroTablet: "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
                ViewsonicTablet: "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
                VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
                OdysTablet: "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
                CaptivaTablet: "CAPTIVA PAD",
                IconbitTablet: "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
                TeclastTablet: "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
                OndaTablet: "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
                JaytechTablet: "TPC-PA762",
                BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
                DigmaTablet: "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
                EvolioTablet: "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
                LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
                AocTablet: "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
                MpmanTablet: "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
                CelkonTablet: "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
                WolderTablet: "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
                MediacomTablet: "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
                MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
                NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
                NexoTablet: "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
                LeaderTablet: "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
                UbislateTablet: "UbiSlate[\\s]?7C",
                PocketBookTablet: "Pocketbook",
                KocasoTablet: "\\b(TB-1207)\\b",
                HisenseTablet: "\\b(F5281|E2371)\\b",
                Hudl: "Hudl HT7S3|Hudl 2",
                TelstraTablet: "T-Hub2",
                GenericTablet: "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107"
            },
            oss: {
                AndroidOS: "Android",
                BlackBerryOS: "blackberry|\\bBB10\\b|rim tablet os",
                PalmOS: "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
                SymbianOS: "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
                WindowsMobileOS: "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Windows Mobile|Windows Phone [0-9.]+|WCE;",
                WindowsPhoneOS: "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
                iOS: "\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia",
                iPadOS: "CPU OS 13",
                SailfishOS: "Sailfish",
                MeeGoOS: "MeeGo",
                MaemoOS: "Maemo",
                JavaOS: "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
                webOS: "webOS|hpwOS",
                badaOS: "\\bBada\\b",
                BREWOS: "BREW"
            },
            uas: {
                Chrome: "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
                Dolfin: "\\bDolfin\\b",
                Opera: "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+$|Coast/[0-9.]+",
                Skyfire: "Skyfire",
                Edge: "\\bEdgiOS\\b|Mobile Safari/[.0-9]* Edge",
                IE: "IEMobile|MSIEMobile",
                Firefox: "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS",
                Bolt: "bolt",
                TeaShark: "teashark",
                Blazer: "Blazer",
                Safari: "Version((?!\\bEdgiOS\\b).)*Mobile.*Safari|Safari.*Mobile|MobileSafari",
                WeChat: "\\bMicroMessenger\\b",
                UCBrowser: "UC.*Browser|UCWEB",
                baiduboxapp: "baiduboxapp",
                baidubrowser: "baidubrowser",
                DiigoBrowser: "DiigoBrowser",
                Mercury: "\\bMercury\\b",
                ObigoBrowser: "Obigo",
                NetFront: "NF-Browser",
                GenericBrowser: "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
                PaleMoon: "Android.*PaleMoon|Mobile.*PaleMoon"
            },
            props: {
                Mobile: "Mobile/[VER]",
                Build: "Build/[VER]",
                Version: "Version/[VER]",
                VendorID: "VendorID/[VER]",
                iPad: "iPad.*CPU[a-z ]+[VER]",
                iPhone: "iPhone.*CPU[a-z ]+[VER]",
                iPod: "iPod.*CPU[a-z ]+[VER]",
                Kindle: "Kindle/[VER]",
                Chrome: ["Chrome/[VER]", "CriOS/[VER]", "CrMo/[VER]"],
                Coast: ["Coast/[VER]"],
                Dolfin: "Dolfin/[VER]",
                Firefox: ["Firefox/[VER]", "FxiOS/[VER]"],
                Fennec: "Fennec/[VER]",
                Edge: "Edge/[VER]",
                IE: ["IEMobile/[VER];", "IEMobile [VER]", "MSIE [VER];", "Trident/[0-9.]+;.*rv:[VER]"],
                NetFront: "NetFront/[VER]",
                NokiaBrowser: "NokiaBrowser/[VER]",
                Opera: [" OPR/[VER]", "Opera Mini/[VER]", "Version/[VER]"],
                "Opera Mini": "Opera Mini/[VER]",
                "Opera Mobi": "Version/[VER]",
                UCBrowser: ["UCWEB[VER]", "UC.*Browser/[VER]"],
                MQQBrowser: "MQQBrowser/[VER]",
                MicroMessenger: "MicroMessenger/[VER]",
                baiduboxapp: "baiduboxapp/[VER]",
                baidubrowser: "baidubrowser/[VER]",
                SamsungBrowser: "SamsungBrowser/[VER]",
                Iron: "Iron/[VER]",
                Safari: ["Version/[VER]", "Safari/[VER]"],
                Skyfire: "Skyfire/[VER]",
                Tizen: "Tizen/[VER]",
                Webkit: "webkit[ /][VER]",
                PaleMoon: "PaleMoon/[VER]",
                SailfishBrowser: "SailfishBrowser/[VER]",
                Gecko: "Gecko/[VER]",
                Trident: "Trident/[VER]",
                Presto: "Presto/[VER]",
                Goanna: "Goanna/[VER]",
                iOS: " \\bi?OS\\b [VER][ ;]{1}",
                Android: "Android [VER]",
                Sailfish: "Sailfish [VER]",
                BlackBerry: ["BlackBerry[\\w]+/[VER]", "BlackBerry.*Version/[VER]", "Version/[VER]"],
                BREW: "BREW [VER]",
                Java: "Java/[VER]",
                "Windows Phone OS": ["Windows Phone OS [VER]", "Windows Phone [VER]"],
                "Windows Phone": "Windows Phone [VER]",
                "Windows CE": "Windows CE/[VER]",
                "Windows NT": "Windows NT [VER]",
                Symbian: ["SymbianOS/[VER]", "Symbian/[VER]"],
                webOS: ["webOS/[VER]", "hpwOS/[VER];"]
            },
            utils: {
                Bot: "Googlebot|facebookexternalhit|Google-AMPHTML|s~amp-validator|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom|contentkingapp|AspiegelBot",
                MobileBot: "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
                DesktopMode: "WPDesktop",
                TV: "SonyDTV|HbbTV",
                WebKit: "(webkit)[ /]([\\w.]+)",
                Console: "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b",
                Watch: "SM-V700"
            }
        }, g.detectMobileBrowsers = {
            fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            tabletPattern: /android|ipad|playbook|silk/i
        };
        var h, i = Object.prototype.hasOwnProperty;
        return g.FALLBACK_PHONE = "UnknownPhone", g.FALLBACK_TABLET = "UnknownTablet", g.FALLBACK_MOBILE = "UnknownMobile", h = "isArray" in Array ? Array.isArray : function(a) {
                return "[object Array]" === Object.prototype.toString.call(a)
            },
            function() {
                var a, b, c, e, f, j, k = g.mobileDetectRules;
                for (a in k.props)
                    if (i.call(k.props, a)) {
                        for (b = k.props[a], h(b) || (b = [b]), f = b.length, e = 0; e < f; ++e) c = b[e], j = c.indexOf("[VER]"), j >= 0 && (c = c.substring(0, j) + "([\\w._\\+]+)" + c.substring(j + 5)), b[e] = new RegExp(c, "i");
                        k.props[a] = b
                    }
                d(k.oss), d(k.phones), d(k.tablets), d(k.uas), d(k.utils), k.oss0 = {
                    WindowsPhoneOS: k.oss.WindowsPhoneOS,
                    WindowsMobileOS: k.oss.WindowsMobileOS
                }
            }(), g.findMatch = function(a, b) {
                for (var c in a)
                    if (i.call(a, c) && a[c].test(b)) return c;
                return null
            }, g.findMatches = function(a, b) {
                var c = [];
                for (var d in a) i.call(a, d) && a[d].test(b) && c.push(d);
                return c
            }, g.getVersionStr = function(a, b) {
                var c, d, e, f, h = g.mobileDetectRules.props;
                if (i.call(h, a))
                    for (c = h[a], e = c.length, d = 0; d < e; ++d)
                        if (f = c[d].exec(b), null !== f) return f[1];
                return null
            }, g.getVersion = function(a, b) {
                var c = g.getVersionStr(a, b);
                return c ? g.prepareVersionNo(c) : NaN
            }, g.prepareVersionNo = function(a) {
                var b;
                return b = a.split(/[a-z._ \/\-]/i), 1 === b.length && (a = b[0]), b.length > 1 && (a = b[0] + ".", b.shift(), a += b.join("")), Number(a)
            }, g.isMobileFallback = function(a) {
                return g.detectMobileBrowsers.fullPattern.test(a) || g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
            }, g.isTabletFallback = function(a) {
                return g.detectMobileBrowsers.tabletPattern.test(a)
            }, g.prepareDetectionCache = function(a, c, d) {
                if (a.mobile === b) {
                    var e, h, i;
                    return (h = g.findMatch(g.mobileDetectRules.tablets, c)) ? (a.mobile = a.tablet = h, void(a.phone = null)) : (e = g.findMatch(g.mobileDetectRules.phones, c)) ? (a.mobile = a.phone = e, void(a.tablet = null)) : void(g.isMobileFallback(c) ? (i = f.isPhoneSized(d), i === b ? (a.mobile = g.FALLBACK_MOBILE, a.tablet = a.phone = null) : i ? (a.mobile = a.phone = g.FALLBACK_PHONE, a.tablet = null) : (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null)) : g.isTabletFallback(c) ? (a.mobile = a.tablet = g.FALLBACK_TABLET, a.phone = null) : a.mobile = a.tablet = a.phone = null)
                }
            }, g.mobileGrade = function(a) {
                var b = null !== a.mobile();
                return a.os("iOS") && a.version("iPad") >= 4.3 || a.os("iOS") && a.version("iPhone") >= 3.1 || a.os("iOS") && a.version("iPod") >= 3.1 || a.version("Android") > 2.1 && a.is("Webkit") || a.version("Windows Phone OS") >= 7 || a.is("BlackBerry") && a.version("BlackBerry") >= 6 || a.match("Playbook.*Tablet") || a.version("webOS") >= 1.4 && a.match("Palm|Pre|Pixi") || a.match("hp.*TouchPad") || a.is("Firefox") && a.version("Firefox") >= 12 || a.is("Chrome") && a.is("AndroidOS") && a.version("Android") >= 4 || a.is("Skyfire") && a.version("Skyfire") >= 4.1 && a.is("AndroidOS") && a.version("Android") >= 2.3 || a.is("Opera") && a.version("Opera Mobi") > 11 && a.is("AndroidOS") || a.is("MeeGoOS") || a.is("Tizen") || a.is("Dolfin") && a.version("Bada") >= 2 || (a.is("UC Browser") || a.is("Dolfin")) && a.version("Android") >= 2.3 || a.match("Kindle Fire") || a.is("Kindle") && a.version("Kindle") >= 3 || a.is("AndroidOS") && a.is("NookTablet") || a.version("Chrome") >= 11 && !b || a.version("Safari") >= 5 && !b || a.version("Firefox") >= 4 && !b || a.version("MSIE") >= 7 && !b || a.version("Opera") >= 10 && !b ? "A" : a.os("iOS") && a.version("iPad") < 4.3 || a.os("iOS") && a.version("iPhone") < 3.1 || a.os("iOS") && a.version("iPod") < 3.1 || a.is("Blackberry") && a.version("BlackBerry") >= 5 && a.version("BlackBerry") < 6 || a.version("Opera Mini") >= 5 && a.version("Opera Mini") <= 6.5 && (a.version("Android") >= 2.3 || a.is("iOS")) || a.match("NokiaN8|NokiaC7|N97.*Series60|Symbian/3") || a.version("Opera Mobi") >= 11 && a.is("SymbianOS") ? "B" : (a.version("BlackBerry") < 5 || a.match("MSIEMobile|Windows CE.*Mobile") || a.version("Windows Mobile") <= 5.2, "C")
            }, g.detectOS = function(a) {
                return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a)
            }, g.getDeviceSmallerSide = function() {
                return window.screen.width < window.screen.height ? window.screen.width : window.screen.height
            }, f.prototype = {
                constructor: f,
                mobile: function() {
                    return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile
                },
                phone: function() {
                    return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone
                },
                tablet: function() {
                    return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet
                },
                userAgent: function() {
                    return this._cache.userAgent === b && (this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)), this._cache.userAgent
                },
                userAgents: function() {
                    return this._cache.userAgents === b && (this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)), this._cache.userAgents
                },
                os: function() {
                    return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)), this._cache.os
                },
                version: function(a) {
                    return g.getVersion(a, this.ua)
                },
                versionStr: function(a) {
                    return g.getVersionStr(a, this.ua)
                },
                is: function(b) {
                    return c(this.userAgents(), b) || a(b, this.os()) || a(b, this.phone()) || a(b, this.tablet()) || c(g.findMatches(g.mobileDetectRules.utils, this.ua), b)
                },
                match: function(a) {
                    return a instanceof RegExp || (a = new RegExp(a, "i")), a.test(this.ua)
                },
                isPhoneSized: function(a) {
                    return f.isPhoneSized(a || this.maxPhoneWidth)
                },
                mobileGrade: function() {
                    return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)), this._cache.grade
                }
            }, "undefined" != typeof window && window.screen ? f.isPhoneSized = function(a) {
                return a < 0 ? b : g.getDeviceSmallerSide() <= a
            } : f.isPhoneSized = function() {}, f._impl = g, f.version = "1.4.5 2021-03-13", f
    })
}(function(a) {
    if ("undefined" != typeof module && module.exports) return function(a) {
        module.exports = a()
    };
    if ("function" == typeof define && define.amd) return define;
    if ("undefined" != typeof window) return function(a) {
        window.MobileDetect = a()
    };
    throw new Error("unknown environment")
}());
var ai_lists = !0,
    ai_block_class_def = "code-block";
if ("undefined" != typeof ai_lists) {
    function V(a, e) {
        for (var p = []; a = a.previousElementSibling;)("undefined" == typeof e || a.matches(e)) && p.push(a);
        return p
    }

    function ea(a, e) {
        for (var p = []; a = a.nextElementSibling;)("undefined" == typeof e || a.matches(e)) && p.push(a);
        return p
    }
    var host_regexp = RegExp(":\\/\\/(.[^/:]+)", "i");

    function fa(a) {
        a = a.match(host_regexp);
        return null != a && 1 < a.length && "string" === typeof a[1] && 0 < a[1].length ? a[1].toLowerCase() : null
    }

    function P(a) {
        return a.includes(":") ? (a = a.split(":"), 1E3 * (3600 * parseInt(a[0]) + 60 * parseInt(a[1]) + parseInt(a[2]))) : null
    }

    function W(a) {
        try {
            var e = Date.parse(a);
            isNaN(e) && (e = null)
        } catch (p) {
            e = null
        }
        if (null == e && a.includes(" ")) {
            a = a.split(" ");
            try {
                e = Date.parse(a[0]), e += P(a[1]), isNaN(e) && (e = null)
            } catch (p) {
                e = null
            }
        }
        return e
    }

    function X() {
        null == document.querySelector("#ai-iab-tcf-bar") && null == document.querySelector(".ai-list-manual") || "function" != typeof __tcfapi || "function" != typeof ai_load_blocks || "undefined" != typeof ai_iab_tcf_callback_installed || (__tcfapi("addEventListener", 2, function(a, e) {
            e && "useractioncomplete" === a.eventStatus && (ai_tcData = a, ai_load_blocks(), a = document.querySelector("#ai-iab-tcf-status"), null != a && (a.textContent = "IAB TCF 2.0 DATA LOADED"), a = document.querySelector("#ai-iab-tcf-bar"), null != a && (a.classList.remove("status-error"), a.classList.add("status-ok")))
        }), ai_iab_tcf_callback_installed = !0)
    }
    ai_process_lists = function(a) {
        function e(b, d, k) {
            if (0 == b.length) {
                if ("!@!" == k) return !0;
                d != k && ("true" == k.toLowerCase() ? k = !0 : "false" == k.toLowerCase() && (k = !1));
                return d == k
            }
            if ("object" != typeof d && "array" != typeof d) return !1;
            var l = b[0];
            b = b.slice(1);
            if ("*" == l)
                for (let [, n] of Object.entries(d)) {
                    if (e(b, n, k)) return !0
                } else if (l in d) return e(b, d[l], k);
            return !1
        }

        function p(b, d, k) {
            if ("object" != typeof b || -1 == d.indexOf("[")) return !1;
            d = d.replace(/]| /gi, "").split("[");
            return e(d, b, k)
        }

        function z() {
            if ("function" == typeof __tcfapi) {
                var b = document.querySelector("#ai-iab-tcf-status"),
                    d = document.querySelector("#ai-iab-tcf-bar");
                null != b && (b.textContent = "IAB TCF 2.0 DETECTED");
                __tcfapi("getTCData", 2, function(k, l) {
                    l ? (null != d && d.classList.add("status-ok"), "tcloaded" == k.eventStatus || "useractioncomplete" == k.eventStatus) ? (ai_tcData = k, k.gdprApplies ? null != b && (b.textContent = "IAB TCF 2.0 DATA LOADED") : null != b && (b.textContent = "IAB TCF 2.0 GDPR DOES NOT APPLY"), null != d && (d.classList.remove("status-error"), d.classList.add("status-ok")), setTimeout(function() {
                        ai_process_lists()
                    }, 10)) : "cmpuishown" == k.eventStatus && (ai_cmpuishown = !0, null != b && (b.textContent = "IAB TCF 2.0 CMP UI SHOWN"), null != d && (d.classList.remove("status-error"), d.classList.add("status-ok"))) : (null != b && (b.textContent = "IAB TCF 2.0 __tcfapi getTCData failed"), null != d && (d.classList.remove("status-ok"), d.classList.add("status-error")))
                })
            }
        }

        function C(b) {
            "function" == typeof __tcfapi ? ("undefined" == typeof ai_iab_tcf_callback_installed && X(), "undefined" == typeof ai_tcData_requested && (ai_tcData_requested = !0, z(), cookies_need_tcData = !0)) : b && (null != iab_tcf_status && (iab_tcf_status.textContent = "IAB TCF 2.0 MISSING: __tcfapi function not found"), null != iab_tcf_bar && (iab_tcf_bar.classList.remove("status-ok"), iab_tcf_bar.classList.add("status-error")))
        }
        if (null == a) a = document.querySelectorAll("div.ai-list-data, meta.ai-list-data");
        else {
            window.jQuery && window.jQuery.fn && a instanceof jQuery && (a = Array.prototype.slice.call(a));
            var x = [];
            a.forEach((b, d) => {
                b.matches(".ai-list-data") ? x.push(b) : (b = b.querySelectorAll(".ai-list-data"), b.length && b.forEach((k, l) => {
                    x.push(k)
                }))
            });
            a = x
        }
        if (a.length) {
            a.forEach((b, d) => {
                b.classList.remove("ai-list-data")
            });
            var I = ha(window.location.search);
            if (null != I.referrer) var A = I.referrer;
            else A = document.referrer, "" != A && (A = fa(A));
            var Q = window.navigator.userAgent,
                R = Q.toLowerCase(),
                Y = navigator.language,
                J = Y.toLowerCase();
            if ("undefined" !== typeof MobileDetect) var Z = new MobileDetect(Q);
            a.forEach((b, d) => {
                var k = document.cookie.split(";");
                k.forEach(function(f, h) {
                    k[h] = f.trim()
                });
                d = b.closest("div." + ai_block_class_def);
                var l = !0;
                if (b.hasAttribute("referer-list")) {
                    var n = b.getAttribute("referer-list");
                    n = b64d(n).split(",");
                    var t = b.getAttribute("referer-list-type"),
                        E = !1;
                    n.every((f, h) => {
                        f = f.trim();
                        if ("" == f) return !0;
                        if ("*" == f.charAt(0))
                            if ("*" == f.charAt(f.length - 1)) {
                                if (f = f.substr(1, f.length - 2), -1 != A.indexOf(f)) return E = !0, !1
                            } else {
                                if (f = f.substr(1), A.substr(-f.length) == f) return E = !0, !1
                            }
                        else if ("*" == f.charAt(f.length - 1)) {
                            if (f = f.substr(0, f.length - 1), 0 == A.indexOf(f)) return E = !0, !1
                        } else if ("#" == f) {
                            if ("" == A) return E = !0, !1
                        } else if (f == A) return E = !0, !1;
                        return !0
                    });
                    var u = E;
                    switch (t) {
                        case "B":
                            u && (l = !1);
                            break;
                        case "W":
                            u || (l = !1)
                    }
                }
                if (l && b.hasAttribute("client-list") && "undefined" !== typeof Z) switch (n = b.getAttribute("client-list"), n = b64d(n).split(","), t = b.getAttribute("client-list-type"), u = !1, n.every((f, h) => {
                    if ("" == f.trim()) return !0;
                    f.split("&&").every((c, v) => {
                        v = !0;
                        var w = !1;
                        for (c = c.trim();
                            "!!" == c.substring(0, 2);) v = !v, c = c.substring(2);
                        "language:" == c.substring(0, 9) && (w = !0, c = c.substring(9).toLowerCase());
                        var q = !1;
                        w ? "*" == c.charAt(0) ? "*" == c.charAt(c.length - 1) ? (c = c.substr(1, c.length - 2).toLowerCase(), -1 != J.indexOf(c) && (q = !0)) : (c = c.substr(1).toLowerCase(), J.substr(-c.length) == c && (q = !0)) : "*" == c.charAt(c.length - 1) ? (c = c.substr(0, c.length - 1).toLowerCase(), 0 == J.indexOf(c) && (q = !0)) : c == J && (q = !0) : "*" == c.charAt(0) ? "*" == c.charAt(c.length - 1) ? (c = c.substr(1, c.length - 2).toLowerCase(), -1 != R.indexOf(c) && (q = !0)) : (c = c.substr(1).toLowerCase(), R.substr(-c.length) == c && (q = !0)) : "*" == c.charAt(c.length - 1) ? (c = c.substr(0, c.length - 1).toLowerCase(), 0 == R.indexOf(c) && (q = !0)) : Z.is(c) && (q = !0);
                        return (u = q ? v : !v) ? !0 : !1
                    });
                    return u ? !1 : !0
                }), t) {
                    case "B":
                        u && (l = !1);
                        break;
                    case "W":
                        u || (l = !1)
                }
                var K = n = !1;
                for (t = 1; 2 >= t; t++)
                    if (l) {
                        switch (t) {
                            case 1:
                                var g = b.getAttribute("cookie-list");
                                break;
                            case 2:
                                g = b.getAttribute("parameter-list")
                        }
                        if (null != g) {
                            g = b64d(g);
                            switch (t) {
                                case 1:
                                    var y = b.getAttribute("cookie-list-type");
                                    break;
                                case 2:
                                    y = b.getAttribute("parameter-list-type")
                            }
                            g = g.replace("tcf-gdpr", "tcf-v2[gdprApplies]=true");
                            g = g.replace("tcf-no-gdpr", "tcf-v2[gdprApplies]=false");
                            g = g.replace("tcf-google", "tcf-v2[vendor][consents][755]=true && tcf-v2[purpose][consents][1]=true");
                            g = g.replace("tcf-no-google", "!!tcf-v2[vendor][consents][755]");
                            g = g.replace("tcf-media.net", "tcf-v2[vendor][consents][142]=true && tcf-v2[purpose][consents][1]=true");
                            g = g.replace("tcf-no-media.net", "!!tcf-v2[vendor][consents][142]");
                            g = g.replace("tcf-amazon", "tcf-v2[vendor][consents][793]=true && tcf-v2[purpose][consents][1]=true");
                            g = g.replace("tcf-no-amazon", "!!tcf-v2[vendor][consents][793]");
                            g = g.replace("tcf-ezoic", "tcf-v2[vendor][consents][347]=true && tcf-v2[purpose][consents][1]=true");
                            g = g.replace("tcf-no-ezoic", "!!tcf-v2[vendor][consents][347]");
                            var F = g.split(","),
                                aa = [];
                            k.forEach(function(f) {
                                f = f.split("=");
                                try {
                                    var h = JSON.parse(decodeURIComponent(f[1]))
                                } catch (c) {
                                    h = decodeURIComponent(f[1])
                                }
                                aa[f[0]] = h
                            });
                            u = !1;
                            var L = b;
                            F.every((f, h) => {
                                f.split("&&").every((c, v) => {
                                    v = !0;
                                    for (c = c.trim();
                                        "!!" == c.substring(0, 2);) v = !v, c = c.substring(2);
                                    var w = c,
                                        q = "!@!",
                                        D = -1 != c.indexOf("["),
                                        ba = (0 == c.indexOf("tcf-v2") || 0 == c.indexOf("euconsent-v2")) && -1 != c.indexOf("["); - 1 != c.indexOf("=") && (q = c.split("="), w = q[0], q = q[1], D = -1 != w.indexOf("["), ba = (0 == w.indexOf("tcf-v2") || 0 == w.indexOf("euconsent-v2")) && -1 != w.indexOf("["));
                                    if (ba) document.querySelector("#ai-iab-tcf-status"), D = document.querySelector("#ai-iab-tcf-bar"), null != D && (D.style.display = "block"), "object" == typeof ai_tcData ? (null != D && D.classList.add("status-ok"), w = w.replace(/]| /gi, "").split("["), w.shift(), u = (w = e(w, ai_tcData, q)) ? v : !v) : (L.classList.add("ai-list-data"), K = !0, "function" == typeof __tcfapi ? C(!1) : "undefined" == typeof ai_tcData_retrying && (ai_tcData_retrying = !0, setTimeout(function() {
                                        "function" == typeof __tcfapi ? C(!1) : setTimeout(function() {
                                            "function" == typeof __tcfapi ? C(!1) : setTimeout(function() {
                                                C(!0)
                                            }, 3E3)
                                        }, 1E3)
                                    }, 600)));
                                    else if (D) u = (w = p(aa, w, q)) ? v : !v;
                                    else {
                                        var S = !1;
                                        "!@!" == q ? k.every(function(ia) {
                                            return ia.split("=")[0] == c ? (S = !0, !1) : !0
                                        }) : S = -1 != k.indexOf(c);
                                        u = S ? v : !v
                                    }
                                    return u ? !0 : !1
                                });
                                return u ? !1 : !0
                            });
                            u && (K = !1);
                            switch (y) {
                                case "B":
                                    u && (l = !1);
                                    break;
                                case "W":
                                    u || (l = !1)
                            }
                        }
                    }
                b.classList.contains("ai-list-manual") && (l ? (L.classList.remove("ai-list-data"), L.classList.remove("ai-list-manual")) : (n = !0, L.classList.add("ai-list-data")));
                (l || !n && !K) && b.hasAttribute("data-debug-info") && (g = document.querySelector("." + b.dataset.debugInfo), null != g && (g = g.parentElement, null != g && g.classList.contains("ai-debug-info") && g.remove()));
                y = V(b, ".ai-debug-bar.ai-debug-lists");
                var ja = "" == A ? "#" : A;
                0 != y.length && y.forEach((f, h) => {
                    h = f.querySelector(".ai-debug-name.ai-list-info");
                    null != h && (h.textContent = ja, h.title = Q + "\n" + Y);
                    h = f.querySelector(".ai-debug-name.ai-list-status");
                    null != h && (h.textContent = l ? ai_front.visible : ai_front.hidden)
                });
                g = !1;
                if (l && b.hasAttribute("scheduling-start") && b.hasAttribute("scheduling-end") && b.hasAttribute("scheduling-days")) {
                    var r = b.getAttribute("scheduling-start");
                    t = b.getAttribute("scheduling-end");
                    y = b.getAttribute("scheduling-days");
                    g = !0;
                    r = b64d(r);
                    F = b64d(t);
                    var T = parseInt(b.getAttribute("scheduling-fallback")),
                        M = parseInt(b.getAttribute("gmt"));
                    if (r.includes("-") || F.includes("-")) N = W(r) + M, O = W(F) + M;
                    else var N = P(r),
                        O = P(F);
                    var U = b64d(y).split(",");
                    y = b.getAttribute("scheduling-type");
                    var B = (new Date).getTime() + M;
                    t = new Date(B);
                    var G = t.getDay();
                    r.includes("-") || F.includes("-") || (r = (new Date(t.getFullYear(), t.getMonth(), t.getDate())).getTime() + M, B -= r, 0 > B && (B += 864E5));
                    0 == G ? G = 6 : G--;
                    r = B >= N && B < O && U.includes(G.toString());
                    switch (y) {
                        case "B":
                            r = !r
                    }
                    r || (l = !1);
                    var ka = t.toISOString().split(".")[0].replace("T", " ");
                    y = V(b, ".ai-debug-bar.ai-debug-scheduling");
                    0 != y.length && y.forEach((f, h) => {
                        h = f.querySelector(".ai-debug-name.ai-scheduling-info");
                        null != h && (h.textContent = ka + " " + G + " current_time:" + Math.floor(B.toString() / 1E3) + "  start_date:" + Math.floor(N / 1E3).toString() + " =" + (B >= N).toString() + " end_date:" + Math.floor(O / 1E3).toString() + " =:" + (B < O).toString() + " days:" + U.toString() + " =:" + U.includes(G.toString()).toString());
                        h = f.querySelector(".ai-debug-name.ai-scheduling-status");
                        null != h && (h.textContent = l ? ai_front.visible : ai_front.hidden);
                        l || 0 == T || (f.classList.remove("ai-debug-scheduling"), f.classList.add("ai-debug-fallback"), h = f.querySelector(".ai-debug-name.ai-scheduling-status"), null != h && (h.textContent = ai_front.fallback + " = " + T))
                    })
                }
                if (n || !l && K) return !0;
                b.style.visibility = "";
                b.style.position = "";
                b.style.width = "";
                b.style.height = "";
                b.style.zIndex = "";
                if (l) {
                    if (null != d && (d.style.visibility = "", d.classList.contains("ai-remove-position") && (d.style.position = "")), b.hasAttribute("data-code")) {
                        n = b64d(b.dataset.code);
                        r = document.createRange();
                        g = !0;
                        try {
                            H = r.createContextualFragment(n)
                        } catch (f) {
                            g = !1
                        }
                        g && (null != b.closest("head") ? (b.parentNode.insertBefore(H, b.nextSibling), b.remove()) : b.append(H));
                        ca(b)
                    }
                } else if (g && !r && 0 != T) {
                    null != d && (d.style.visibility = "", d.classList.contains("ai-remove-position") && d.css({
                        position: ""
                    }));
                    n = ea(b, ".ai-fallback");
                    0 != n.length && n.forEach((f, h) => {
                        f.classList.remove("ai-fallback")
                    });
                    if (b.hasAttribute("data-fallback-code")) {
                        n = b64d(b.dataset.fallbackCode);
                        r = document.createRange();
                        g = !0;
                        try {
                            var H = r.createContextualFragment(n)
                        } catch (f) {
                            g = !1
                        }
                        g && b.append(H);
                        ca(b)
                    } else b.style.display = "none", null != d && null == d.querySelector(".ai-debug-block") && d.hasAttribute("style") && -1 == d.getAttribute("style").indexOf("height:") && (d.style.display = "none");
                    null != d && d.hasAttribute("data-ai") && (d.getAttribute("data-ai"), b.hasAttribute("fallback-tracking") && (H = b.getAttribute("fallback-tracking"), d.setAttribute("data-ai-" + b.getAttribute("fallback_level"), H)))
                } else b.style.display = "none", null != d && (d.removeAttribute("data-ai"), d.classList.remove("ai-track"), null != d.querySelector(".ai-debug-block") ? (d.style.visibility = "", d.classList.remove("ai-close"), d.classList.contains("ai-remove-position") && (d.style.position = "")) : d.hasAttribute("style") && -1 == d.getAttribute("style").indexOf("height:") && (d.style.display = "none"));
                b.setAttribute("data-code", "");
                b.setAttribute("data-fallback-code", "");
                null != d && d.classList.remove("ai-list-block")
            })
        }
    };

    function da(a) {
        a = `; ${document.cookie}`.split(`; ${a}=`);
        if (2 === a.length) return a.pop().split(";").shift()
    }

    function la(a, e, p) {
        da(a) && (document.cookie = a + "=" + (e ? ";path=" + e : "") + (p ? ";domain=" + p : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT")
    }

    function m(a) {
        da(a) && (la(a, "/", window.location.hostname), document.cookie = a + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")
    }(function(a) {
        "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? a() : document.addEventListener("DOMContentLoaded", a)
    })(function() {
        setTimeout(function() {
            ai_process_lists();
            setTimeout(function() {
                X();
                if ("function" == typeof ai_load_blocks) {
                    document.addEventListener("cmplzEnableScripts", e);
                    document.addEventListener("cmplz_event_marketing", e);

                    function e(p) {
                        "cmplzEnableScripts" != p.type && "all" !== p.consentLevel || ai_load_blocks()
                    }
                }
            }, 50);
            var a = document.querySelector(".ai-debug-page-type");
            null != a && a.addEventListener("dblclick", e => {
                e = document.querySelector("#ai-iab-tcf-status");
                null != e && (e.textContent = "CONSENT COOKIES");
                e = document.querySelector("#ai-iab-tcf-bar");
                null != e && (e.style.display = "block")
            });
            a = document.querySelector("#ai-iab-tcf-bar");
            null != a && a.addEventListener("click", e => {
                m("euconsent-v2");
                m("__lxG__consent__v2");
                m("__lxG__consent__v2_daisybit");
                m("__lxG__consent__v2_gdaisybit");
                m("CookieLawInfoConsent");
                m("cookielawinfo-checkbox-advertisement");
                m("cookielawinfo-checkbox-analytics");
                m("cookielawinfo-checkbox-necessary");
                m("complianz_policy_id");
                m("complianz_consent_status");
                m("cmplz_marketing");
                m("cmplz_consent_status");
                m("cmplz_preferences");
                m("cmplz_statistics-anonymous");
                m("cmplz_choice");
                m("cmplz_banner-status");
                m("cmplz_functional");
                m("cmplz_policy_id");
                m("cmplz_statistics");
                m("moove_gdpr_popup");
                m("real_cookie_banner-blog:1-tcf");
                m("real_cookie_banner-blog:1");
                e = document.querySelector("#ai-iab-tcf-status");
                null != e && (e.textContent = "CONSENT COOKIES DELETED")
            })
        }, 5)
    });

    function ca(a) {
        setTimeout(function() {
            "function" == typeof ai_process_rotations_in_element && ai_process_rotations_in_element(a);
            "function" == typeof ai_process_lists && ai_process_lists();
            "function" == typeof ai_process_ip_addresses && ai_process_ip_addresses();
            "function" == typeof ai_process_filter_hooks && ai_process_filter_hooks();
            "function" == typeof ai_adb_process_blocks && ai_adb_process_blocks(a);
            "function" == typeof ai_process_impressions && 1 == ai_tracking_finished && ai_process_impressions();
            "function" == typeof ai_install_click_trackers && 1 == ai_tracking_finished && ai_install_click_trackers();
            "function" == typeof ai_install_close_buttons && ai_install_close_buttons(document)
        }, 5)
    }

    function ha(a) {
        var e = a ? a.split("?")[1] : window.location.search.slice(1);
        a = {};
        if (e) {
            e = e.split("#")[0];
            e = e.split("&");
            for (var p = 0; p < e.length; p++) {
                var z = e[p].split("="),
                    C = void 0,
                    x = z[0].replace(/\[\d*\]/, function(I) {
                        C = I.slice(1, -1);
                        return ""
                    });
                z = "undefined" === typeof z[1] ? "" : z[1];
                x = x.toLowerCase();
                z = z.toLowerCase();
                a[x] ? ("string" === typeof a[x] && (a[x] = [a[x]]), "undefined" === typeof C ? a[x].push(z) : a[x][C] = z) : a[x] = z
            }
        }
        return a
    }
};
ai_js_code = !0;

function lazyLoadThumb(e) {
    var t = '<img loading="lazy" data-lazy-src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"><noscript><img src="https://i.ytimg.com/vi/ID/hqdefault.jpg" alt="" width="480" height="360"></noscript>',
        a = '<div class="play"></div>';
    return t.replace("ID", e) + a
}

function lazyLoadYoutubeIframe() {
    var e = document.createElement("iframe"),
        t = "ID?autoplay=1";
    t += 0 === this.dataset.query.length ? '' : '&' + this.dataset.query;
    e.setAttribute("src", t.replace("ID", this.dataset.src)), e.setAttribute("frameborder", "0"), e.setAttribute("allowfullscreen", "1"), e.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"), this.parentNode.replaceChild(e, this)
}
document.addEventListener("DOMContentLoaded", function() {
    var e, t, a = document.getElementsByClassName("rll-youtube-player");
    for (t = 0; t < a.length; t++) e = document.createElement("div"), e.setAttribute("data-id", a[t].dataset.id), e.setAttribute("data-query", a[t].dataset.query), e.setAttribute("data-src", a[t].dataset.src), e.innerHTML = lazyLoadThumb(a[t].dataset.id), e.onclick = lazyLoadYoutubeIframe, a[t].appendChild(e)
});