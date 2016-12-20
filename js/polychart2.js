;
(function() {
    var n = this,
        t = n._,
        r = {},
        e = Array.prototype,
        u = Object.prototype,
        i = Function.prototype,
        a = e.push,
        o = e.slice,
        c = e.concat,
        l = u.toString,
        f = u.hasOwnProperty,
        s = e.forEach,
        p = e.map,
        v = e.reduce,
        h = e.reduceRight,
        g = e.filter,
        d = e.every,
        m = e.some,
        y = e.indexOf,
        b = e.lastIndexOf,
        x = Array.isArray,
        _ = Object.keys,
        j = i.bind,
        w = function(n) {
            return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : n._ = w, w.VERSION = "1.4.3";
    var A = w.each = w.forEach = function(n, t, e) {
        if (null != n)
            if (s && n.forEach === s)
                n.forEach(t, e);
            else if (n.length === +n.length) {
                for (var u = 0, i = n.length; i > u; u++)
                    if (t.call(e, n[u], u, n) === r)
                        return
            } else
                for (var a in n)
                    if (w.has(n, a) && t.call(e, n[a], a, n) === r)
                        return
    };
    w.map = w.collect = function(n, t, r) {
        var e = [];
        return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function(n, u, i) {
            e[e.length] = t.call(r, n, u, i)
        }), e)
    };
    var O = "Reduce of empty array with no initial value";
    w.reduce = w.foldl = w.inject = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), v && n.reduce === v)
            return e && (t = w.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
        if (A(n, function(n, i, a) {
            u ? r = t.call(e, r, n, i, a) : (r = n, u = !0)
        }), !u)
            throw new TypeError(O);
        return r
    }, w.reduceRight = w.foldr = function(n, t, r, e) {
        var u = arguments.length > 2;
        if (null == n && (n = []), h && n.reduceRight === h)
            return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
        var i = n.length;
        if (i !== +i) {
            var a = w.keys(n);
            i = a.length
        }
        if (A(n, function(o, c, l) {
            c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0)
        }), !u)
            throw new TypeError(O);
        return r
    }, w.find = w.detect = function(n, t, r) {
        var e;
        return E(n, function(n, u, i) {
            return t.call(r, n, u, i) ? (e = n, !0) : void 0
        }), e
    }, w.filter = w.select = function(n, t, r) {
        var e = [];
        return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function(n, u, i) {
            t.call(r, n, u, i) && (e[e.length] = n)
        }), e)
    }, w.reject = function(n, t, r) {
        return w.filter(n, function(n, e, u) {
            return !t.call(r, n, e, u)
        }, r)
    }, w.every = w.all = function(n, t, e) {
        t || (t = w.identity);
        var u = !0;
        return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function(n, i, a) {
            return (u = u && t.call(e, n, i, a)) ? void 0 : r
        }), !!u)
    };
    var E = w.some = w.any = function(n, t, e) {
        t || (t = w.identity);
        var u = !1;
        return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function(n, i, a) {
            return u || (u = t.call(e, n, i, a)) ? r : void 0
        }), !!u)
    };
    w.contains = w.include = function(n, t) {
        return null == n ? !1 : y && n.indexOf === y ? -1 != n.indexOf(t) : E(n, function(n) {
            return n === t
        })
    }, w.invoke = function(n, t) {
        var r = o.call(arguments, 2);
        return w.map(n, function(n) {
            return (w.isFunction(t) ? t : n[t]).apply(n, r)
        })
    }, w.pluck = function(n, t) {
        return w.map(n, function(n) {
            return n[t]
        })
    }, w.where = function(n, t) {
        return w.isEmpty(t) ? [] : w.filter(n, function(n) {
            for (var r in t)
                if (t[r] !== n[r])
                    return !1;
            return !0
        })
    }, w.max = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length)
            return Math.max.apply(Math, n);
        if (!t && w.isEmpty(n))
            return -1 / 0;
        var e = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            a >= e.computed && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.min = function(n, t, r) {
        if (!t && w.isArray(n) && n[0] === +n[0] && 65535 > n.length)
            return Math.min.apply(Math, n);
        if (!t && w.isEmpty(n))
            return 1 / 0;
        var e = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return A(n, function(n, u, i) {
            var a = t ? t.call(r, n, u, i) : n;
            e.computed > a && (e = {
                value: n,
                computed: a
            })
        }), e.value
    }, w.shuffle = function(n) {
        var t,
            r = 0,
            e = [];
        return A(n, function(n) {
            t = w.random(r++), e[r - 1] = e[t], e[t] = n
        }), e
    };
    var F = function(n) {
        return w.isFunction(n) ? n : function(t) {
            return t[n]
        }
    };
    w.sortBy = function(n, t, r) {
        var e = F(t);
        return w.pluck(w.map(n, function(n, t, u) {
            return {
                value: n,
                index: t,
                criteria: e.call(r, n, t, u)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r)
                    return 1;
                if (e > r || void 0 === e)
                    return -1
            }
            return n.index < t.index ? -1 : 1
        }), "value")
    };
    var k = function(n, t, r, e) {
        var u = {},
            i = F(t || w.identity);
        return A(n, function(t, a) {
            var o = i.call(r, t, a, n);
            e(u, o, t)
        }), u
    };
    w.groupBy = function(n, t, r) {
        return k(n, t, r, function(n, t, r) {
            (w.has(n, t) ? n[t] : n[t] = []).push(r)
        })
    }, w.countBy = function(n, t, r) {
        return k(n, t, r, function(n, t) {
            w.has(n, t) || (n[t] = 0), n[t]++
        })
    }, w.sortedIndex = function(n, t, r, e) {
        r = null == r ? w.identity : F(r);
        for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            u > r.call(e, n[o]) ? i = o + 1 : a = o
        }
        return i
    }, w.toArray = function(n) {
        return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : []
    }, w.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length
    }, w.first = w.head = w.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t)
    }, w.initial = function(n, t, r) {
        return o.call(n, 0, n.length - (null == t || r ? 1 : t))
    }, w.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0))
    }, w.rest = w.tail = w.drop = function(n, t, r) {
        return o.call(n, null == t || r ? 1 : t)
    }, w.compact = function(n) {
        return w.filter(n, w.identity)
    };
    var R = function(n, t, r) {
        return A(n, function(n) {
            w.isArray(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n)
        }), r
    };
    w.flatten = function(n, t) {
        return R(n, t, [])
    }, w.without = function(n) {
        return w.difference(n, o.call(arguments, 1))
    }, w.uniq = w.unique = function(n, t, r, e) {
        w.isFunction(t) && (e = r, r = t, t = !1);
        var u = r ? w.map(n, r, e) : n,
            i = [],
            a = [];
        return A(u, function(r, e) {
            (t ? e && a[a.length - 1] === r : w.contains(a, r)) || (a.push(r), i.push(n[e]))
        }), i
    }, w.union = function() {
        return w.uniq(c.apply(e, arguments))
    }, w.intersection = function(n) {
        var t = o.call(arguments, 1);
        return w.filter(w.uniq(n), function(n) {
            return w.every(t, function(t) {
                return w.indexOf(t, n) >= 0
            })
        })
    }, w.difference = function(n) {
        var t = c.apply(e, o.call(arguments, 1));
        return w.filter(n, function(n) {
            return !w.contains(t, n)
        })
    }, w.zip = function() {
        for (var n = o.call(arguments), t = w.max(w.pluck(n, "length")), r = Array(t), e = 0; t > e; e++)
            r[e] = w.pluck(n, "" + e);
        return r
    }, w.object = function(n, t) {
        if (null == n)
            return {};
        for (var r = {}, e = 0, u = n.length; u > e; e++)
            t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, w.indexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = 0,
            u = n.length;
        if (r) {
            if ("number" != typeof r)
                return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        if (y && n.indexOf === y)
            return n.indexOf(t, r);
        for (; u > e; e++)
            if (n[e] === t)
                return e;
        return -1
    }, w.lastIndexOf = function(n, t, r) {
        if (null == n)
            return -1;
        var e = null != r;
        if (b && n.lastIndexOf === b)
            return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
        for (var u = e ? r : n.length; u--;)
            if (n[u] === t)
                return u;
        return -1
    }, w.range = function(n, t, r) {
        1 >= arguments.length && (t = n || 0, n = 0), r = arguments[2] || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = Array(e); e > u;)
            i[u++] = n, n += r;
        return i
    };
    var I = function() {};
    w.bind = function(n, t) {
        var r,
            e;
        if (n.bind === j && j)
            return j.apply(n, o.call(arguments, 1));
        if (!w.isFunction(n))
            throw new TypeError;
        return r = o.call(arguments, 2), e = function() {
            if (!(this instanceof e))
                return n.apply(t, r.concat(o.call(arguments)));
            I.prototype = n.prototype;
            var u = new I;
            I.prototype = null;
            var i = n.apply(u, r.concat(o.call(arguments)));
            return Object(i) === i ? i : u
        }
    }, w.bindAll = function(n) {
        var t = o.call(arguments, 1);
        return 0 == t.length && (t = w.functions(n)), A(t, function(t) {
            n[t] = w.bind(n[t], n)
        }), n
    }, w.memoize = function(n, t) {
        var r = {};
        return t || (t = w.identity), function() {
            var e = t.apply(this, arguments);
            return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments)
        }
    }, w.delay = function(n, t) {
        var r = o.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, w.defer = function(n) {
        return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)))
    }, w.throttle = function(n, t) {
        var r,
            e,
            u,
            i,
            a = 0,
            o = function() {
                a = new Date, u = null, i = n.apply(r, e)
            };
        return function() {
            var c = new Date,
                l = t - (c - a);
            return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i
        }
    }, w.debounce = function(n, t, r) {
        var e,
            u;
        return function() {
            var i = this,
                a = arguments,
                o = function() {
                    e = null, r || (u = n.apply(i, a))
                },
                c = r && !e;
            return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u
        }
    }, w.once = function(n) {
        var t,
            r = !1;
        return function() {
            return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t)
        }
    }, w.wrap = function(n, t) {
        return function() {
            var r = [n];
            return a.apply(r, arguments), t.apply(this, r)
        }
    }, w.compose = function() {
        var n = arguments;
        return function() {
            for (var t = arguments, r = n.length - 1; r >= 0; r--)
                t = [n[r].apply(this, t)];
            return t[0]
        }
    }, w.after = function(n, t) {
        return 0 >= n ? t() : function() {
            return 1 > --n ? t.apply(this, arguments) : void 0
        }
    }, w.keys = _ || function(n) {
        if (n !== Object(n))
            throw new TypeError("Invalid object");
        var t = [];
        for (var r in n)
            w.has(n, r) && (t[t.length] = r);
        return t
    }, w.values = function(n) {
        var t = [];
        for (var r in n)
            w.has(n, r) && t.push(n[r]);
        return t
    }, w.pairs = function(n) {
        var t = [];
        for (var r in n)
            w.has(n, r) && t.push([r, n[r]]);
        return t
    }, w.invert = function(n) {
        var t = {};
        for (var r in n)
            w.has(n, r) && (t[n[r]] = r);
        return t
    }, w.functions = w.methods = function(n) {
        var t = [];
        for (var r in n)
            w.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, w.extend = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    n[r] = t[r]
        }), n
    }, w.pick = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        return A(r, function(r) {
            r in n && (t[r] = n[r])
        }), t
    }, w.omit = function(n) {
        var t = {},
            r = c.apply(e, o.call(arguments, 1));
        for (var u in n)
            w.contains(r, u) || (t[u] = n[u]);
        return t
    }, w.defaults = function(n) {
        return A(o.call(arguments, 1), function(t) {
            if (t)
                for (var r in t)
                    null == n[r] && (n[r] = t[r])
        }), n
    }, w.clone = function(n) {
        return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n
    }, w.tap = function(n, t) {
        return t(n), n
    };
    var S = function(n, t, r, e) {
        if (n === t)
            return 0 !== n || 1 / n == 1 / t;
        if (null == n || null == t)
            return n === t;
        n instanceof w && (n = n._wrapped), t instanceof w && (t = t._wrapped);
        var u = l.call(n);
        if (u != l.call(t))
            return !1;
        switch (u) {
        case "[object String]":
            return n == t + "";
        case "[object Number]":
            return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
        case "[object Date]":
        case "[object Boolean]":
            return +n == +t;
        case "[object RegExp]":
            return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof n || "object" != typeof t)
            return !1;
        for (var i = r.length; i--;)
            if (r[i] == n)
                return e[i] == t;
        r.push(n), e.push(t);
        var a = 0,
            o = !0;
        if ("[object Array]" == u) {
            if (a = n.length, o = a == t.length)
                for (; a-- && (o = S(n[a], t[a], r, e));)
                    ;
        } else {
            var c = n.constructor,
                f = t.constructor;
            if (c !== f && !(w.isFunction(c) && c instanceof c && w.isFunction(f) && f instanceof f))
                return !1;
            for (var s in n)
                if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e))))
                    break;
            if (o) {
                for (s in t)
                    if (w.has(t, s) && !a--)
                        break;
                o = !a
            }
        }
        return r.pop(), e.pop(), o
    };
    w.isEqual = function(n, t) {
        return S(n, t, [], [])
    }, w.isEmpty = function(n) {
        if (null == n)
            return !0;
        if (w.isArray(n) || w.isString(n))
            return 0 === n.length;
        for (var t in n)
            if (w.has(n, t))
                return !1;
        return !0
    }, w.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, w.isArray = x || function(n) {
        return "[object Array]" == l.call(n)
    }, w.isObject = function(n) {
        return n === Object(n)
    }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
        w["is" + n] = function(t) {
            return l.call(t) == "[object " + n + "]"
        }
    }), w.isArguments(arguments) || (w.isArguments = function(n) {
        return !(!n || !w.has(n, "callee"))
    }), w.isFunction = function(n) {
        return "function" == typeof n
    }, w.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, w.isNaN = function(n) {
        return w.isNumber(n) && n != +n
    }, w.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" == l.call(n)
    }, w.isNull = function(n) {
        return null === n
    }, w.isUndefined = function(n) {
        return void 0 === n
    }, w.has = function(n, t) {
        return f.call(n, t)
    }, w.noConflict = function() {
        return n._ = t, this
    }, w.identity = function(n) {
        return n
    }, w.times = function(n, t, r) {
        for (var e = Array(n), u = 0; n > u; u++)
            e[u] = t.call(r, u);
        return e
    }, w.random = function(n, t) {
        return null == t && (t = n, n = 0), n + (0 | Math.random() * (t - n + 1))
    };
    var T = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    T.unescape = w.invert(T.escape);
    var M = {
        escape: RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
        unescape: RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
    };
    w.each(["escape", "unescape"], function(n) {
        w[n] = function(t) {
            return null == t ? "" : ("" + t).replace(M[n], function(t) {
                return T[n][t]
            })
        }
    }), w.result = function(n, t) {
        if (null == n)
            return null;
        var r = n[t];
        return w.isFunction(r) ? r.call(n) : r
    }, w.mixin = function(n) {
        A(w.functions(n), function(t) {
            var r = w[t] = n[t];
            w.prototype[t] = function() {
                var n = [this._wrapped];
                return a.apply(n, arguments), z.call(this, r.apply(w, n))
            }
        })
    };
    var N = 0;
    w.uniqueId = function(n) {
        var t = "" + ++N;
        return n ? n + t : t
    }, w.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var q = /(.)^/,
        B = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "	": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    w.template = function(n, t, r) {
        r = w.defaults({}, r, w.templateSettings);
        var e = RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";
        n.replace(e, function(t, r, e, a, o) {
            return i += n.slice(u, o).replace(D, function(n) {
                return "\\" + B[n]
            }), r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), a && (i += "';\n" + a + "\n__p+='"), u = o + t.length, t
        }), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = Function(r.variable || "obj", "_", i)
        } catch (o) {
            throw o.source = i, o
        }
        if (t)
            return a(t, w);
        var c = function(n) {
            return a.call(this, n, w)
        };
        return c.source = "function(" + (r.variable || "obj") + "){\n" + i + "}", c
    }, w.chain = function(n) {
        return w(n).chain()
    };
    var z = function(n) {
        return this._chain ? w(n).chain() : n
    };
    w.mixin(w), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r)
        }
    }), A(["concat", "join", "slice"], function(n) {
        var t = e[n];
        w.prototype[n] = function() {
            return z.call(this, t.apply(this._wrapped, arguments))
        }
    }), w.extend(w.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);
;
// moment.js
// version : 1.7.2
// author : Tim Wood
// license : MIT
// momentjs.com
(function(a) {
    function E(a, b, c, d) {
        var e = c.lang();
        return e[a].call ? e[a](c, d) : e[a][b]
    }
    function F(a, b) {
        return function(c) {
            return K(a.call(this, c), b)
        }
    }
    function G(a) {
        return function(b) {
            var c = a.call(this, b);
            return c + this.lang().ordinal(c)
        }
    }
    function H(a, b, c) {
        this._d = a, this._isUTC = !!b, this._a = a._a || null, this._lang = c || !1
    }
    function I(a) {
        var b = this._data = {},
            c = a.years || a.y || 0,
            d = a.months || a.M || 0,
            e = a.weeks || a.w || 0,
            f = a.days || a.d || 0,
            g = a.hours || a.h || 0,
            h = a.minutes || a.m || 0,
            i = a.seconds || a.s || 0,
            j = a.milliseconds || a.ms || 0;
        this._milliseconds = j + i * 1e3 + h * 6e4 + g * 36e5, this._days = f + e * 7, this._months = d + c * 12, b.milliseconds = j % 1e3, i += J(j / 1e3), b.seconds = i % 60, h += J(i / 60), b.minutes = h % 60, g += J(h / 60), b.hours = g % 24, f += J(g / 24), f += e * 7, b.days = f % 30, d += J(f / 30), b.months = d % 12, c += J(d / 12), b.years = c, this._lang = !1
    }
    function J(a) {
        return a < 0 ? Math.ceil(a) : Math.floor(a)
    }
    function K(a, b) {
        var c = a + "";
        while (c.length < b)
            c = "0" + c;
        return c
    }
    function L(a, b, c) {
        var d = b._milliseconds,
            e = b._days,
            f = b._months,
            g;
        d && a._d.setTime(+a + d * c), e && a.date(a.date() + e * c), f && (g = a.date(), a.date(1).month(a.month() + f * c).date(Math.min(g, a.daysInMonth())))
    }
    function M(a) {
        return Object.prototype.toString.call(a) === "[object Array]"
    }
    function N(a, b) {
        var c = Math.min(a.length, b.length),
            d = Math.abs(a.length - b.length),
            e = 0,
            f;
        for (f = 0; f < c; f++)
            ~~a[f] !== ~~b[f] && e++;
        return e + d
    }
    function O(a, b, c, d) {
        var e,
            f,
            g = [];
        for (e = 0; e < 7; e++)
            g[e] = a[e] = a[e] == null ? e === 2 ? 1 : 0 : a[e];
        return a[7] = g[7] = b, a[8] != null && (g[8] = a[8]), a[3] += c || 0, a[4] += d || 0, f = new Date(0), b ? (f.setUTCFullYear(a[0], a[1], a[2]), f.setUTCHours(a[3], a[4], a[5], a[6])) : (f.setFullYear(a[0], a[1], a[2]), f.setHours(a[3], a[4], a[5], a[6])), f._a = g, f
    }
    function P(a, c) {
        var d,
            e,
            g = [];
        !c && h && (c = require("./lang/" + a));
        for (d = 0; d < i.length; d++)
            c[i[d]] = c[i[d]] || f.en[i[d]];
        for (d = 0; d < 12; d++)
            e = b([2e3, d]), g[d] = new RegExp("^" + (c.months[d] || c.months(e, "")) + "|^" + (c.monthsShort[d] || c.monthsShort(e, "")).replace(".", ""), "i");
        return c.monthsParse = c.monthsParse || g, f[a] = c, c
    }
    function Q(a) {
        var c = typeof a == "string" && a || a && a._lang || null;
        return c ? f[c] || P(c) : b
    }
    function R(a) {
        return a.match(/\[.*\]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }
    function S(a) {
        var b = a.match(k),
            c,
            d;
        for (c = 0, d = b.length; c < d; c++)
            D[b[c]] ? b[c] = D[b[c]] : b[c] = R(b[c]);
        return function(e) {
            var f = "";
            for (c = 0; c < d; c++)
                f += typeof b[c].call == "function" ? b[c].call(e, a) : b[c];
            return f
        }
    }
    function T(a, b) {
        function d(b) {
            return a.lang().longDateFormat[b] || b
        }
        var c = 5;
        while (c-- && l.test(b))
            b = b.replace(l, d);
        return A[b] || (A[b] = S(b)), A[b](a)
    }
    function U(a) {
        switch (a) {
        case "DDDD":
            return p;
        case "YYYY":
            return q;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
            return o;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
        case "a":
        case "A":
            return r;
        case "Z":
        case "ZZ":
            return s;
        case "T":
            return t;
        case "MM":
        case "DD":
        case "YY":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
            return n;
        default:
            return new RegExp(a.replace("\\", ""))
        }
    }
    function V(a, b, c, d) {
        var e,
            f;
        switch (a) {
        case "M":
        case "MM":
            c[1] = b == null ? 0 : ~~b - 1;
            break;
        case "MMM":
        case "MMMM":
            for (e = 0; e < 12; e++)
                if (Q().monthsParse[e].test(b)) {
                    c[1] = e, f = !0;
                    break
                }
            f || (c[8] = !1);
            break;
        case "D":
        case "DD":
        case "DDD":
        case "DDDD":
            b != null && (c[2] = ~~b);
            break;
        case "YY":
            c[0] = ~~b + (~~b > 70 ? 1900 : 2e3);
            break;
        case "YYYY":
            c[0] = ~~Math.abs(b);
            break;
        case "a":
        case "A":
            d.isPm = (b + "").toLowerCase() === "pm";
            break;
        case "H":
        case "HH":
        case "h":
        case "hh":
            c[3] = ~~b;
            break;
        case "m":
        case "mm":
            c[4] = ~~b;
            break;
        case "s":
        case "ss":
            c[5] = ~~b;
            break;
        case "S":
        case "SS":
        case "SSS":
            c[6] = ~~(("0." + b) * 1e3);
            break;
        case "Z":
        case "ZZ":
            d.isUTC = !0, e = (b + "").match(x), e && e[1] && (d.tzh = ~~e[1]), e && e[2] && (d.tzm = ~~e[2]), e && e[0] === "+" && (d.tzh = -d.tzh, d.tzm = -d.tzm)
        }
        b == null && (c[8] = !1)
    }
    function W(a, b) {
        var c = [0, 0, 1, 0, 0, 0, 0],
            d = {
                tzh: 0,
                tzm: 0
            },
            e = b.match(k),
            f,
            g;
        for (f = 0; f < e.length; f++)
            g = (U(e[f]).exec(a) || [])[0], g && (a = a.slice(a.indexOf(g) + g.length)), D[e[f]] && V(e[f], g, c, d);
        return d.isPm && c[3] < 12 && (c[3] += 12), d.isPm === !1 && c[3] === 12 && (c[3] = 0), O(c, d.isUTC, d.tzh, d.tzm)
    }
    function X(a, b) {
        var c,
            d = a.match(m) || [],
            e,
            f = 99,
            g,
            h,
            i;
        for (g = 0; g < b.length; g++)
            h = W(a, b[g]), e = T(new H(h), b[g]).match(m) || [], i = N(d, e), i < f && (f = i, c = h);
        return c
    }
    function Y(a) {
        var b = "YYYY-MM-DDT",
            c;
        if (u.exec(a)) {
            for (c = 0; c < 4; c++)
                if (w[c][1].exec(a)) {
                    b += w[c][0];
                    break
                }
            return s.exec(a) ? W(a, b + " Z") : W(a, b)
        }
        return new Date(a)
    }
    function Z(a, b, c, d, e) {
        var f = e.relativeTime[a];
        return typeof f == "function" ? f(b || 1, !!c, a, d) : f.replace(/%d/i, b || 1)
    }
    function $(a, b, c) {
        var e = d(Math.abs(a) / 1e3),
            f = d(e / 60),
            g = d(f / 60),
            h = d(g / 24),
            i = d(h / 365),
            j = e < 45 && ["s", e] || f === 1 && ["m"] || f < 45 && ["mm", f] || g === 1 && ["h"] || g < 22 && ["hh", g] || h === 1 && ["d"] || h <= 25 && ["dd", h] || h <= 45 && ["M"] || h < 345 && ["MM", d(h / 30)] || i === 1 && ["y"] || ["yy", i];
        return j[2] = b, j[3] = a > 0, j[4] = c, Z.apply({}, j)
    }
    function _(a, c) {
        b.fn[a] = function(a) {
            var b = this._isUTC ? "UTC" : "";
            return a != null ? (this._d["set" + b + c](a), this) : this._d["get" + b + c]()
        }
    }
    function ab(a) {
        b.duration.fn[a] = function() {
            return this._data[a]
        }
    }
    function bb(a, c) {
        b.duration.fn["as" + a] = function() {
            return +this / c
        }
    }
    var b,
        c = "1.7.2",
        d = Math.round,
        e,
        f = {},
        g = "en",
        h = typeof module != "undefined" && module.exports,
        i = "months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),
        j = /^\/?Date\((\-?\d+)/i,
        k = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,
        l = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,
        m = /([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,
        n = /\d\d?/,
        o = /\d{1,3}/,
        p = /\d{3}/,
        q = /\d{1,4}/,
        r = /[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,
        s = /Z|[\+\-]\d\d:?\d\d/i,
        t = /T/i,
        u = /^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,
        v = "YYYY-MM-DDTHH:mm:ssZ",
        w = [["HH:mm:ss.S", /T\d\d:\d\d:\d\d\.\d{1,3}/], ["HH:mm:ss", /T\d\d:\d\d:\d\d/], ["HH:mm", /T\d\d:\d\d/], ["HH", /T\d\d/]],
        x = /([\+\-]|\d\d)/gi,
        y = "Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),
        z = {
            Milliseconds: 1,
            Seconds: 1e3,
            Minutes: 6e4,
            Hours: 36e5,
            Days: 864e5,
            Months: 2592e6,
            Years: 31536e6
        },
        A = {},
        B = "DDD w M D d".split(" "),
        C = "M D H h m s w".split(" "),
        D = {
            M: function() {
                return this.month() + 1
            },
            MMM: function(a) {
                return E("monthsShort", this.month(), this, a)
            },
            MMMM: function(a) {
                return E("months", this.month(), this, a)
            },
            D: function() {
                return this.date()
            },
            DDD: function() {
                var a = new Date(this.year(), this.month(), this.date()),
                    b = new Date(this.year(), 0, 1);
                return ~~((a - b) / 864e5 + 1.5)
            },
            d: function() {
                return this.day()
            },
            dd: function(a) {
                return E("weekdaysMin", this.day(), this, a)
            },
            ddd: function(a) {
                return E("weekdaysShort", this.day(), this, a)
            },
            dddd: function(a) {
                return E("weekdays", this.day(), this, a)
            },
            w: function() {
                var a = new Date(this.year(), this.month(), this.date() - this.day() + 5),
                    b = new Date(a.getFullYear(), 0, 4);
                return ~~((a - b) / 864e5 / 7 + 1.5)
            },
            YY: function() {
                return K(this.year() % 100, 2)
            },
            YYYY: function() {
                return K(this.year(), 4)
            },
            a: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !0)
            },
            A: function() {
                return this.lang().meridiem(this.hours(), this.minutes(), !1)
            },
            H: function() {
                return this.hours()
            },
            h: function() {
                return this.hours() % 12 || 12
            },
            m: function() {
                return this.minutes()
            },
            s: function() {
                return this.seconds()
            },
            S: function() {
                return ~~(this.milliseconds() / 100)
            },
            SS: function() {
                return K(~~(this.milliseconds() / 10), 2)
            },
            SSS: function() {
                return K(this.milliseconds(), 3)
            },
            Z: function() {
                var a = -this.zone(),
                    b = "+";
                return a < 0 && (a = -a, b = "-"), b + K(~~(a / 60), 2) + ":" + K(~~a % 60, 2)
            },
            ZZ: function() {
                var a = -this.zone(),
                    b = "+";
                return a < 0 && (a = -a, b = "-"), b + K(~~(10 * a / 6), 4)
            }
        };
    while (B.length)
        e = B.pop(), D[e + "o"] = G(D[e]);
    while (C.length)
        e = C.pop(), D[e + e] = F(D[e], 2);
    D.DDDD = F(D.DDD, 3), b = function(c, d) {
        if (c === null || c === "")
            return null;
        var e,
            f;
        return b.isMoment(c) ? new H(new Date(+c._d), c._isUTC, c._lang) : (d ? M(d) ? e = X(c, d) : e = W(c, d) : (f = j.exec(c), e = c === a ? new Date : f ? new Date(+f[1]) : c instanceof Date ? c : M(c) ? O(c) : typeof c == "string" ? Y(c) : new Date(c)), new H(e))
    }, b.utc = function(a, c) {
        return M(a) ? new H(O(a, !0), !0) : (typeof a == "string" && !s.exec(a) && (a += " +0000", c && (c += " Z")), b(a, c).utc())
    }, b.unix = function(a) {
        return b(a * 1e3)
    }, b.duration = function(a, c) {
        var d = b.isDuration(a),
            e = typeof a == "number",
            f = d ? a._data : e ? {} : a,
            g;
        return e && (c ? f[c] = a : f.milliseconds = a), g = new I(f), d && (g._lang = a._lang), g
    }, b.humanizeDuration = function(a, c, d) {
        return b.duration(a, c === !0 ? null : c).humanize(c === !0 ? !0 : d)
    }, b.version = c, b.defaultFormat = v, b.lang = function(a, c) {
        var d;
        if (!a)
            return g;
        (c || !f[a]) && P(a, c);
        if (f[a]) {
            for (d = 0; d < i.length; d++)
                b[i[d]] = f[a][i[d]];
            b.monthsParse = f[a].monthsParse, g = a
        }
    }, b.langData = Q, b.isMoment = function(a) {
        return a instanceof H
    }, b.isDuration = function(a) {
        return a instanceof I
    }, b.lang("en", {
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        longDateFormat: {
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D YYYY",
            LLL: "MMMM D YYYY LT",
            LLLL: "dddd, MMMM D YYYY LT"
        },
        meridiem: function(a, b, c) {
            return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[last] dddd [at] LT",
            sameElse: "L"
        },
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        ordinal: function(a) {
            var b = a % 10;
            return ~~(a % 100 / 10) === 1 ? "th" : b === 1 ? "st" : b === 2 ? "nd" : b === 3 ? "rd" : "th"
        }
    }), b.fn = H.prototype = {
        clone: function() {
            return b(this)
        },
        valueOf: function() {
            return +this._d
        },
        unix: function() {
            return Math.floor(+this._d / 1e3)
        },
        toString: function() {
            return this._d.toString()
        },
        toDate: function() {
            return this._d
        },
        toArray: function() {
            var a = this;
            return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds(), !!this._isUTC]
        },
        isValid: function() {
            return this._a ? this._a[8] != null ? !!this._a[8] : !N(this._a, (this._a[7] ? b.utc(this._a) : b(this._a)).toArray()) : !isNaN(this._d.getTime())
        },
        utc: function() {
            return this._isUTC = !0, this
        },
        local: function() {
            return this._isUTC = !1, this
        },
        format: function(a) {
            return T(this, a ? a : b.defaultFormat)
        },
        add: function(a, c) {
            var d = c ? b.duration(+c, a) : b.duration(a);
            return L(this, d, 1), this
        },
        subtract: function(a, c) {
            var d = c ? b.duration(+c, a) : b.duration(a);
            return L(this, d, -1), this
        },
        diff: function(a, c, e) {
            var f = this._isUTC ? b(a).utc() : b(a).local(),
                g = (this.zone() - f.zone()) * 6e4,
                h = this._d - f._d - g,
                i = this.year() - f.year(),
                j = this.month() - f.month(),
                k = this.date() - f.date(),
                l;
            return c === "months" ? l = i * 12 + j + k / 30 : c === "years" ? l = i + (j + k / 30) / 12 : l = c === "seconds" ? h / 1e3 : c === "minutes" ? h / 6e4 : c === "hours" ? h / 36e5 : c === "days" ? h / 864e5 : c === "weeks" ? h / 6048e5 : h, e ? l : d(l)
        },
        from: function(a, c) {
            return b.duration(this.diff(a)).lang(this._lang).humanize(!c)
        },
        fromNow: function(a) {
            return this.from(b(), a)
        },
        calendar: function() {
            var a = this.diff(b().sod(), "days", !0),
                c = this.lang().calendar,
                d = c.sameElse,
                e = a < -6 ? d : a < -1 ? c.lastWeek : a < 0 ? c.lastDay : a < 1 ? c.sameDay : a < 2 ? c.nextDay : a < 7 ? c.nextWeek : d;
            return this.format(typeof e == "function" ? e.apply(this) : e)
        },
        isLeapYear: function() {
            var a = this.year();
            return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
        },
        isDST: function() {
            return this.zone() < b([this.year()]).zone() || this.zone() < b([this.year(), 5]).zone()
        },
        day: function(a) {
            var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return a == null ? b : this.add({
                d: a - b
            })
        },
        startOf: function(a) {
            switch (a.replace(/s$/, "")) {
            case "year":
                this.month(0);
            case "month":
                this.date(1);
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
            }
            return this
        },
        endOf: function(a) {
            return this.startOf(a).add(a.replace(/s?$/, "s"), 1).subtract("ms", 1)
        },
        sod: function() {
            return this.clone().startOf("day")
        },
        eod: function() {
            return this.clone().endOf("day")
        },
        zone: function() {
            return this._isUTC ? 0 : this._d.getTimezoneOffset()
        },
        daysInMonth: function() {
            return b.utc([this.year(), this.month() + 1, 0]).date()
        },
        lang: function(b) {
            return b === a ? Q(this) : (this._lang = b, this)
        }
    };
    for (e = 0; e < y.length; e++)
        _(y[e].toLowerCase(), y[e]);
    _("year", "FullYear"), b.duration.fn = I.prototype = {
        weeks: function() {
            return J(this.days() / 7)
        },
        valueOf: function() {
            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
        },
        humanize: function(a) {
            var b = +this,
                c = this.lang().relativeTime,
                d = $(b, !a, this.lang()),
                e = b <= 0 ? c.past : c.future;
            return a && (typeof e == "function" ? d = e(d) : d = e.replace(/%s/i, d)), d
        },
        lang: b.fn.lang
    };
    for (e in z)
        z.hasOwnProperty(e) && (bb(e, z[e]), ab(e.toLowerCase()));
    bb("Weeks", 6048e5), h && (module.exports = b), typeof ender == "undefined" && (this.moment = b), typeof define == "function" && define.amd && define("moment", [], function() {
        return b
    })
}).call(this);
;
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

(function(a) {
    var b = "0.3.4",
        c = "hasOwnProperty",
        d = /[\.\/]/,
        e = "*",
        f = function() {},
        g = function(a, b) {
            return a - b
        },
        h,
        i,
        j = {
            n: {}
        },
        k = function(a, b) {
            var c = j,
                d = i,
                e = Array.prototype.slice.call(arguments, 2),
                f = k.listeners(a),
                l = 0,
                m = !1,
                n,
                o = [],
                p = {},
                q = [],
                r = h,
                s = [];
            h = a, i = 0;
            for (var t = 0, u = f.length; t < u; t++)
                "zIndex" in f[t] && (o.push(f[t].zIndex), f[t].zIndex < 0 && (p[f[t].zIndex] = f[t]));
            o.sort(g);
            while (o[l] < 0) {
                n = p[o[l++]], q.push(n.apply(b, e));
                if (i) {
                    i = d;
                    return q
                }
            }
            for (t = 0; t < u; t++) {
                n = f[t];
                if ("zIndex" in n)
                    if (n.zIndex == o[l]) {
                        q.push(n.apply(b, e));
                        if (i)
                            break;
                        do {
                            l++, n = p[o[l]], n && q.push(n.apply(b, e));
                            if (i)
                                break
                        } while (n)
                    } else
                        p[n.zIndex] = n;
                else {
                    q.push(n.apply(b, e));
                    if (i)
                        break
                }
            }
            i = d, h = r;
            return q.length ? q : null
        };
    k.listeners = function(a) {
        var b = a.split(d),
            c = j,
            f,
            g,
            h,
            i,
            k,
            l,
            m,
            n,
            o = [c],
            p = [];
        for (i = 0, k = b.length; i < k; i++) {
            n = [];
            for (l = 0, m = o.length; l < m; l++) {
                c = o[l].n, g = [c[b[i]], c[e]], h = 2;
                while (h--)
                    f = g[h], f && (n.push(f), p = p.concat(f.f || []))
            }
            o = n
        }
        return p
    }, k.on = function(a, b) {
        var c = a.split(d),
            e = j;
        for (var g = 0, h = c.length; g < h; g++)
            e = e.n, !e[c[g]] && (e[c[g]] = {
                n: {}
            }), e = e[c[g]];
        e.f = e.f || [];
        for (g = 0, h = e.f.length; g < h; g++)
            if (e.f[g] == b)
                return f;
        e.f.push(b);
        return function(a) {
            +a == +a && (b.zIndex = +a)
        }
    }, k.stop = function() {
        i = 1
    }, k.nt = function(a) {
        if (a)
            return (new RegExp("(?:\\.|\\/|^)" + a + "(?:\\.|\\/|$)")).test(h);
        return h
    }, k.off = k.unbind = function(a, b) {
        var f = a.split(d),
            g,
            h,
            i,
            k,
            l,
            m,
            n,
            o = [j];
        for (k = 0, l = f.length; k < l; k++)
            for (m = 0; m < o.length; m += i.length - 2) {
                i = [m, 1], g = o[m].n;
                if (f[k] != e)
                    g[f[k]] && i.push(g[f[k]]);
                else
                    for (h in g)
                        g[c](h) && i.push(g[h]);
                o.splice.apply(o, i)
            }
        for (k = 0, l = o.length; k < l; k++) {
            g = o[k];
            while (g.n) {
                if (b) {
                    if (g.f) {
                        for (m = 0, n = g.f.length; m < n; m++)
                            if (g.f[m] == b) {
                                g.f.splice(m, 1);
                                break
                            }
                        !g.f.length && delete g.f
                    }
                    for (h in g.n)
                        if (g.n[c](h) && g.n[h].f) {
                            var p = g.n[h].f;
                            for (m = 0, n = p.length; m < n; m++)
                                if (p[m] == b) {
                                    p.splice(m, 1);
                                    break
                                }
                            !p.length && delete g.n[h].f
                        }
                } else {
                    delete g.f;
                    for (h in g.n)
                        g.n[c](h) && g.n[h].f && delete g.n[h].f
                }
                g = g.n
            }
        }
    }, k.once = function(a, b) {
        var c = function() {
            var d = b.apply(this, arguments);
            k.unbind(a, c);
            return d
        };
        return k.on(a, c)
    }, k.version = b, k.toString = function() {
        return "You are running Eve " + b
    }, typeof module != "undefined" && module.exports ? module.exports = k : typeof define != "undefined" ? define("eve", [], function() {
        return k
    }) : a.eve = k
})(this), function() {
    function cF(a) {
        for (var b = 0; b < cy.length; b++)
            cy[b].el.paper == a && cy.splice(b--, 1)
    }
    function cE(b, d, e, f, h, i) {
        e = Q(e);
        var j,
            k,
            l,
            m = [],
            o,
            p,
            q,
            t = b.ms,
            u = {},
            v = {},
            w = {};
        if (f)
            for (y = 0, z = cy.length; y < z; y++) {
                var x = cy[y];
                if (x.el.id == d.id && x.anim == b) {
                    x.percent != e ? (cy.splice(y, 1), l = 1) : k = x, d.attr(x.totalOrigin);
                    break
                }
            }
        else
            f = +v;
        for (var y = 0, z = b.percents.length; y < z; y++) {
            if (b.percents[y] == e || b.percents[y] > f * b.top) {
                e = b.percents[y], p = b.percents[y - 1] || 0, t = t / b.top * (e - p), o = b.percents[y + 1], j = b.anim[e];
                break
            }
            f && d.attr(b.anim[b.percents[y]])
        }
        if (!!j) {
            if (!k) {
                for (var A in j)
                    if (j[g](A))
                        if (U[g](A) || d.paper.customAttributes[g](A)) {
                            u[A] = d.attr(A), u[A] == null && (u[A] = T[A]), v[A] = j[A];
                            switch (U[A]) {
                            case C:
                                w[A] = (v[A] - u[A]) / t;
                                break;
                            case "colour":
                                u[A] = a.getRGB(u[A]);
                                var B = a.getRGB(v[A]);
                                w[A] = {
                                    r: (B.r - u[A].r) / t,
                                    g: (B.g - u[A].g) / t,
                                    b: (B.b - u[A].b) / t
                                };
                                break;
                            case "path":
                                var D = bR(u[A], v[A]),
                                    E = D[1];
                                u[A] = D[0], w[A] = [];
                                for (y = 0, z = u[A].length; y < z; y++) {
                                    w[A][y] = [0];
                                    for (var F = 1, G = u[A][y].length; F < G; F++)
                                        w[A][y][F] = (E[y][F] - u[A][y][F]) / t
                                }
                                break;
                            case "transform":
                                var H = d._,
                                    I = ca(H[A], v[A]);
                                if (I) {
                                    u[A] = I.from, v[A] = I.to, w[A] = [], w[A].real = !0;
                                    for (y = 0, z = u[A].length; y < z; y++) {
                                        w[A][y] = [u[A][y][0]];
                                        for (F = 1, G = u[A][y].length; F < G; F++)
                                            w[A][y][F] = (v[A][y][F] - u[A][y][F]) / t
                                    }
                                } else {
                                    var J = d.matrix || new cb,
                                        K = {
                                            _: {
                                                transform: H.transform
                                            },
                                            getBBox: function() {
                                                return d.getBBox(1)
                                            }
                                        };
                                    u[A] = [J.a, J.b, J.c, J.d, J.e, J.f], b$(K, v[A]), v[A] = K._.transform, w[A] = [(K.matrix.a - J.a) / t, (K.matrix.b - J.b) / t, (K.matrix.c - J.c) / t, (K.matrix.d - J.d) / t, (K.matrix.e - J.e) / t, (K.matrix.f - J.f) / t]
                                }
                                break;
                            case "csv":
                                var L = r(j[A])[s](c),
                                    M = r(u[A])[s](c);
                                if (A == "clip-rect") {
                                    u[A] = M, w[A] = [], y = M.length;
                                    while (y--)
                                        w[A][y] = (L[y] - u[A][y]) / t
                                }
                                v[A] = L;
                                break;
                            default:
                                L = [][n](j[A]), M = [][n](u[A]), w[A] = [], y = d.paper.customAttributes[A].length;
                                while (y--)
                                    w[A][y] = ((L[y] || 0) - (M[y] || 0)) / t
                            }
                        }
                var O = j.easing,
                    P = a.easing_formulas[O];
                if (!P) {
                    P = r(O).match(N);
                    if (P && P.length == 5) {
                        var R = P;
                        P = function(a) {
                            return cC(a, +R[1], +R[2], +R[3], +R[4], t)
                        }
                    } else
                        P = bf
                }
                q = j.start || b.start || +(new Date), x = {
                    anim: b,
                    percent: e,
                    timestamp: q,
                    start: q + (b.del || 0),
                    status: 0,
                    initstatus: f || 0,
                    stop: !1,
                    ms: t,
                    easing: P,
                    from: u,
                    diff: w,
                    to: v,
                    el: d,
                    callback: j.callback,
                    prev: p,
                    next: o,
                    repeat: i || b.times,
                    origin: d.attr(),
                    totalOrigin: h
                }, cy.push(x);
                if (f && !k && !l) {
                    x.stop = !0, x.start = new Date - t * f;
                    if (cy.length == 1)
                        return cA()
                }
                l && (x.start = new Date - x.ms * f), cy.length == 1 && cz(cA)
            } else
                k.initstatus = f, k.start = new Date - k.ms * f;
            eve("raphael.anim.start." + d.id, d, b)
        }
    }
    function cD(a, b) {
        var c = [],
            d = {};
        this.ms = b, this.times = 1;
        if (a) {
            for (var e in a)
                a[g](e) && (d[Q(e)] = a[e], c.push(Q(e)));
            c.sort(bd)
        }
        this.anim = d, this.top = c[c.length - 1], this.percents = c
    }
    function cC(a, b, c, d, e, f) {
        function o(a, b) {
            var c,
                d,
                e,
                f,
                j,
                k;
            for (e = a, k = 0; k < 8; k++) {
                f = m(e) - a;
                if (z(f) < b)
                    return e;
                j = (3 * i * e + 2 * h) * e + g;
                if (z(j) < 1e-6)
                    break;
                e = e - f / j
            }
            c = 0, d = 1, e = a;
            if (e < c)
                return c;
            if (e > d)
                return d;
            while (c < d) {
                f = m(e);
                if (z(f - a) < b)
                    return e;
                a > f ? c = e : d = e, e = (d - c) / 2 + c
            }
            return e
        }
        function n(a, b) {
            var c = o(a, b);
            return ((l * c + k) * c + j) * c
        }
        function m(a) {
            return ((i * a + h) * a + g) * a
        }
        var g = 3 * b,
            h = 3 * (d - b) - g,
            i = 1 - g - h,
            j = 3 * c,
            k = 3 * (e - c) - j,
            l = 1 - j - k;
        return n(a, 1 / (200 * f))
    }
    function cq() {
        return this.x + q + this.y + q + this.width + " × " + this.height
    }
    function cp() {
        return this.x + q + this.y
    }
    function cb(a, b, c, d, e, f) {
        a != null ? (this.a = +a, this.b = +b, this.c = +c, this.d = +d, this.e = +e, this.f = +f) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }
    function bH(b, c, d) {
        b = a._path2curve(b), c = a._path2curve(c);
        var e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o = d ? 0 : [];
        for (var p = 0, q = b.length; p < q; p++) {
            var r = b[p];
            if (r[0] == "M")
                e = i = r[1], f = j = r[2];
            else {
                r[0] == "C" ? (m = [e, f].concat(r.slice(1)), e = m[6], f = m[7]) : (m = [e, f, e, f, i, j, i, j], e = i, f = j);
                for (var s = 0, t = c.length; s < t; s++) {
                    var u = c[s];
                    if (u[0] == "M")
                        g = k = u[1], h = l = u[2];
                    else {
                        u[0] == "C" ? (n = [g, h].concat(u.slice(1)), g = n[6], h = n[7]) : (n = [g, h, g, h, k, l, k, l], g = k, h = l);
                        var v = bG(m, n, d);
                        if (d)
                            o += v;
                        else {
                            for (var w = 0, x = v.length; w < x; w++)
                                v[w].segment1 = p, v[w].segment2 = s, v[w].bez1 = m, v[w].bez2 = n;
                            o = o.concat(v)
                        }
                    }
                }
            }
        }
        return o
    }
    function bG(b, c, d) {
        var e = a.bezierBBox(b),
            f = a.bezierBBox(c);
        if (!a.isBBoxIntersect(e, f))
            return d ? 0 : [];
        var g = bB.apply(0, b),
            h = bB.apply(0, c),
            i = ~~(g / 5),
            j = ~~(h / 5),
            k = [],
            l = [],
            m = {},
            n = d ? 0 : [];
        for (var o = 0; o < i + 1; o++) {
            var p = a.findDotsAtSegment.apply(a, b.concat(o / i));
            k.push({
                x: p.x,
                y: p.y,
                t: o / i
            })
        }
        for (o = 0; o < j + 1; o++)
            p = a.findDotsAtSegment.apply(a, c.concat(o / j)), l.push({
                x: p.x,
                y: p.y,
                t: o / j
            });
        for (o = 0; o < i; o++)
            for (var q = 0; q < j; q++) {
                var r = k[o],
                    s = k[o + 1],
                    t = l[q],
                    u = l[q + 1],
                    v = z(s.x - r.x) < .001 ? "y" : "x",
                    w = z(u.x - t.x) < .001 ? "y" : "x",
                    x = bD(r.x, r.y, s.x, s.y, t.x, t.y, u.x, u.y);
                if (x) {
                    if (m[x.x.toFixed(4)] == x.y.toFixed(4))
                        continue;
                    m[x.x.toFixed(4)] = x.y.toFixed(4);
                    var y = r.t + z((x[v] - r[v]) / (s[v] - r[v])) * (s.t - r.t),
                        A = t.t + z((x[w] - t[w]) / (u[w] - t[w])) * (u.t - t.t);
                    y >= 0 && y <= 1 && A >= 0 && A <= 1 && (d ? n++ : n.push({
                        x: x.x,
                        y: x.y,
                        t1: y,
                        t2: A
                    }))
                }
            }
        return n
    }
    function bF(a, b) {
        return bG(a, b, 1)
    }
    function bE(a, b) {
        return bG(a, b)
    }
    function bD(a, b, c, d, e, f, g, h) {
        if (!(x(a, c) < y(e, g) || y(a, c) > x(e, g) || x(b, d) < y(f, h) || y(b, d) > x(f, h))) {
            var i = (a * d - b * c) * (e - g) - (a - c) * (e * h - f * g),
                j = (a * d - b * c) * (f - h) - (b - d) * (e * h - f * g),
                k = (a - c) * (f - h) - (b - d) * (e - g);
            if (!k)
                return;
            var l = i / k,
                m = j / k,
                n = +l.toFixed(2),
                o = +m.toFixed(2);
            if (n < +y(a, c).toFixed(2) || n > +x(a, c).toFixed(2) || n < +y(e, g).toFixed(2) || n > +x(e, g).toFixed(2) || o < +y(b, d).toFixed(2) || o > +x(b, d).toFixed(2) || o < +y(f, h).toFixed(2) || o > +x(f, h).toFixed(2))
                return;
            return {
                x: l,
                y: m
            }
        }
    }
    function bC(a, b, c, d, e, f, g, h, i) {
        if (!(i < 0 || bB(a, b, c, d, e, f, g, h) < i)) {
            var j = 1,
                k = j / 2,
                l = j - k,
                m,
                n = .01;
            m = bB(a, b, c, d, e, f, g, h, l);
            while (z(m - i) > n)
                k /= 2, l += (m < i ? 1 : -1) * k, m = bB(a, b, c, d, e, f, g, h, l);
            return l
        }
    }
    function bB(a, b, c, d, e, f, g, h, i) {
        i == null && (i = 1), i = i > 1 ? 1 : i < 0 ? 0 : i;
        var j = i / 2,
            k = 12,
            l = [-0.1252, .1252, -0.3678, .3678, -0.5873, .5873, -0.7699, .7699, -0.9041, .9041, -0.9816, .9816],
            m = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472],
            n = 0;
        for (var o = 0; o < k; o++) {
            var p = j * l[o] + j,
                q = bA(p, a, c, e, g),
                r = bA(p, b, d, f, h),
                s = q * q + r * r;
            n += m[o] * w.sqrt(s)
        }
        return j * n
    }
    function bA(a, b, c, d, e) {
        var f = -3 * b + 9 * c - 9 * d + 3 * e,
            g = a * f + 6 * b - 12 * c + 6 * d;
        return a * g - 3 * b + 3 * c
    }
    function by(a, b) {
        var c = [];
        for (var d = 0, e = a.length; e - 2 * !b > d; d += 2) {
            var f = [{
                x: +a[d - 2],
                y: +a[d - 1]
            }, {
                x: +a[d],
                y: +a[d + 1]
            }, {
                x: +a[d + 2],
                y: +a[d + 3]
            }, {
                x: +a[d + 4],
                y: +a[d + 5]
            }];
            b ? d ? e - 4 == d ? f[3] = {
                x: +a[0],
                y: +a[1]
            } : e - 2 == d && (f[2] = {
                x: +a[0],
                y: +a[1]
            }, f[3] = {
                x: +a[2],
                y: +a[3]
            }) : f[0] = {
                x: +a[e - 2],
                y: +a[e - 1]
            } : e - 4 == d ? f[3] = f[2] : d || (f[0] = {
                x: +a[d],
                y: +a[d + 1]
            }), c.push(["C", (-f[0].x + 6 * f[1].x + f[2].x) / 6, (-f[0].y + 6 * f[1].y + f[2].y) / 6, (f[1].x + 6 * f[2].x - f[3].x) / 6, (f[1].y + 6 * f[2].y - f[3].y) / 6, f[2].x, f[2].y])
        }
        return c
    }
    function bx() {
        return this.hex
    }
    function bv(a, b, c) {
        function d() {
            var e = Array.prototype.slice.call(arguments, 0),
                f = e.join("␀"),
                h = d.cache = d.cache || {},
                i = d.count = d.count || [];
            if (h[g](f)) {
                bu(i, f);
                return c ? c(h[f]) : h[f]
            }
            i.length >= 1e3 && delete h[i.shift()], i.push(f), h[f] = a[m](b, e);
            return c ? c(h[f]) : h[f]
        }
        return d
    }
    function bu(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            if (a[c] === b)
                return a.push(a.splice(c, 1)[0])
    }
    function bm(a) {
        if (Object(a) !== a)
            return a;
        var b = new a.constructor;
        for (var c in a)
            a[g](c) && (b[c] = bm(a[c]));
        return b
    }
    function a(c) {
        if (a.is(c, "function"))
            return b ? c() : eve.on("raphael.DOMload", c);
        if (a.is(c, E))
            return a._engine.create[m](a, c.splice(0, 3 + a.is(c[0], C))).add(c);
        var d = Array.prototype.slice.call(arguments, 0);
        if (a.is(d[d.length - 1], "function")) {
            var e = d.pop();
            return b ? e.call(a._engine.create[m](a, d)) : eve.on("raphael.DOMload", function() {
                e.call(a._engine.create[m](a, d))
            })
        }
        return a._engine.create[m](a, arguments)
    }
    a.version = "2.1.0", a.eve = eve;
    var b,
        c = /[, ]+/,
        d = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        e = /\{(\d+)\}/g,
        f = "prototype",
        g = "hasOwnProperty",
        h = {
            doc: document,
            win: window
        },
        i = {
            was: Object.prototype[g].call(h.win, "Raphael"),
            is: h.win.Raphael
        },
        j = function() {
            this.ca = this.customAttributes = {}
        },
        k,
        l = "appendChild",
        m = "apply",
        n = "concat",
        o = "createTouch" in h.doc,
        p = "",
        q = " ",
        r = String,
        s = "split",
        t = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),
        u = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        v = r.prototype.toLowerCase,
        w = Math,
        x = w.max,
        y = w.min,
        z = w.abs,
        A = w.pow,
        B = w.PI,
        C = "number",
        D = "string",
        E = "array",
        F = "toString",
        G = "fill",
        H = Object.prototype.toString,
        I = {},
        J = "push",
        K = a._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i,
        L = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,
        M = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        N = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        O = w.round,
        P = "setAttribute",
        Q = parseFloat,
        R = parseInt,
        S = r.prototype.toUpperCase,
        T = a._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        U = a._availableAnimAttrs = {
            blur: C,
            "clip-rect": "csv",
            cx: C,
            cy: C,
            fill: "colour",
            "fill-opacity": C,
            "font-size": C,
            height: C,
            opacity: C,
            path: "path",
            r: C,
            rx: C,
            ry: C,
            stroke: "colour",
            "stroke-opacity": C,
            "stroke-width": C,
            transform: "transform",
            width: C,
            x: C,
            y: C
        },
        V = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,
        W = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        X = {
            hs: 1,
            rg: 1
        },
        Y = /,?([achlmqrstvxz]),?/gi,
        Z = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        $ = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,
        _ = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,
        ba = a._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,
        bb = {},
        bc = function(a, b) {
            return a.key - b.key
        },
        bd = function(a, b) {
            return Q(a) - Q(b)
        },
        be = function() {},
        bf = function(a) {
            return a
        },
        bg = a._rectPath = function(a, b, c, d, e) {
            if (e)
                return [["M", a + e, b], ["l", c - e * 2, 0], ["a", e, e, 0, 0, 1, e, e], ["l", 0, d - e * 2], ["a", e, e, 0, 0, 1, -e, e], ["l", e * 2 - c, 0], ["a", e, e, 0, 0, 1, -e, -e], ["l", 0, e * 2 - d], ["a", e, e, 0, 0, 1, e, -e], ["z"]];
            return [["M", a, b], ["l", c, 0], ["l", 0, d], ["l", -c, 0], ["z"]]
        },
        bh = function(a, b, c, d) {
            d == null && (d = c);
            return [["M", a, b], ["m", 0, -d], ["a", c, d, 0, 1, 1, 0, 2 * d], ["a", c, d, 0, 1, 1, 0, -2 * d], ["z"]]
        },
        bi = a._getPath = {
            path: function(a) {
                return a.attr("path")
            },
            circle: function(a) {
                var b = a.attrs;
                return bh(b.cx, b.cy, b.r)
            },
            ellipse: function(a) {
                var b = a.attrs;
                return bh(b.cx, b.cy, b.rx, b.ry)
            },
            rect: function(a) {
                var b = a.attrs;
                return bg(b.x, b.y, b.width, b.height, b.r)
            },
            image: function(a) {
                var b = a.attrs;
                return bg(b.x, b.y, b.width, b.height)
            },
            text: function(a) {
                var b = a._getBBox();
                return bg(b.x, b.y, b.width, b.height)
            }
        },
        bj = a.mapPath = function(a, b) {
            if (!b)
                return a;
            var c,
                d,
                e,
                f,
                g,
                h,
                i;
            a = bR(a);
            for (e = 0, g = a.length; e < g; e++) {
                i = a[e];
                for (f = 1, h = i.length; f < h; f += 2)
                    c = b.x(i[f], i[f + 1]), d = b.y(i[f], i[f + 1]), i[f] = c, i[f + 1] = d
            }
            return a
        };
    a._g = h, a.type = h.win.SVGAngle || h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML";
    if (a.type == "VML") {
        var bk = h.doc.createElement("div"),
            bl;
        bk.innerHTML = '<v:shape adj="1"/>', bl = bk.firstChild, bl.style.behavior = "url(#default#VML)";
        if (!bl || typeof bl.adj != "object")
            return a.type = p;
        bk = null
    }
    a.svg = !(a.vml = a.type == "VML"), a._Paper = j, a.fn = k = j.prototype = a.prototype, a._id = 0, a._oid = 0, a.is = function(a, b) {
        b = v.call(b);
        if (b == "finite")
            return !M[g](+a);
        if (b == "array")
            return a instanceof Array;
        return b == "null" && a === null || b == typeof a && a !== null || b == "object" && a === Object(a) || b == "array" && Array.isArray && Array.isArray(a) || H.call(a).slice(8, -1).toLowerCase() == b
    }, a.angle = function(b, c, d, e, f, g) {
        if (f == null) {
            var h = b - d,
                i = c - e;
            if (!h && !i)
                return 0;
            return (180 + w.atan2(-i, -h) * 180 / B + 360) % 360
        }
        return a.angle(b, c, f, g) - a.angle(d, e, f, g)
    }, a.rad = function(a) {
        return a % 360 * B / 180
    }, a.deg = function(a) {
        return a * 180 / B % 360
    }, a.snapTo = function(b, c, d) {
        d = a.is(d, "finite") ? d : 10;
        if (a.is(b, E)) {
            var e = b.length;
            while (e--)
                if (z(b[e] - c) <= d)
                    return b[e]
        } else {
            b = +b;
            var f = c % b;
            if (f < d)
                return c - f;
            if (f > b - d)
                return c - f + b
        }
        return c
    };
    var bn = a.createUUID = function(a, b) {
        return function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a, b).toUpperCase()
        }
    }(/[xy]/g, function(a) {
        var b = w.random() * 16 | 0,
            c = a == "x" ? b : b & 3 | 8;
        return c.toString(16)
    });
    a.setWindow = function(b) {
        eve("raphael.setWindow", a, h.win, b), h.win = b, h.doc = h.win.document, a._engine.initWin && a._engine.initWin(h.win)
    };
    var bo = function(b) {
            if (a.vml) {
                var c = /^\s+|\s+$/g,
                    d;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), d = e.body
                } catch (f) {
                    d = createPopup().document.body
                }
                var g = d.createTextRange();
                bo = bv(function(a) {
                    try {
                        d.style.color = r(a).replace(c, p);
                        var b = g.queryCommandValue("ForeColor");
                        b = (b & 255) << 16 | b & 65280 | (b & 16711680) >>> 16;
                        return "#" + ("000000" + b.toString(16)).slice(-6)
                    } catch (e) {
                        return "none"
                    }
                })
            } else {
                var i = h.doc.createElement("i");
                i.title = "Raphaël Colour Picker", i.style.display = "none", h.doc.body.appendChild(i), bo = bv(function(a) {
                    i.style.color = a;
                    return h.doc.defaultView.getComputedStyle(i, p).getPropertyValue("color")
                })
            }
            return bo(b)
        },
        bp = function() {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        bq = function() {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        br = function() {
            return this.hex
        },
        bs = function(b, c, d) {
            c == null && a.is(b, "object") && "r" in b && "g" in b && "b" in b && (d = b.b, c = b.g, b = b.r);
            if (c == null && a.is(b, D)) {
                var e = a.getRGB(b);
                b = e.r, c = e.g, d = e.b
            }
            if (b > 1 || c > 1 || d > 1)
                b /= 255, c /= 255, d /= 255;
            return [b, c, d]
        },
        bt = function(b, c, d, e) {
            b *= 255, c *= 255, d *= 255;
            var f = {
                r: b,
                g: c,
                b: d,
                hex: a.rgb(b, c, d),
                toString: br
            };
            a.is(e, "finite") && (f.opacity = e);
            return f
        };
    a.color = function(b) {
        var c;
        a.is(b, "object") && "h" in b && "s" in b && "b" in b ? (c = a.hsb2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : a.is(b, "object") && "h" in b && "s" in b && "l" in b ? (c = a.hsl2rgb(b), b.r = c.r, b.g = c.g, b.b = c.b, b.hex = c.hex) : (a.is(b, "string") && (b = a.getRGB(b)), a.is(b, "object") && "r" in b && "g" in b && "b" in b ? (c = a.rgb2hsl(b), b.h = c.h, b.s = c.s, b.l = c.l, c = a.rgb2hsb(b), b.v = c.b) : (b = {
            hex: "none"
        }, b.r = b.g = b.b = b.h = b.s = b.v = b.l = -1)), b.toString = br;
        return b
    }, a.hsb2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "b" in a && (c = a.b, b = a.s, a = a.h, d = a.o), a *= 360;
        var e,
            f,
            g,
            h,
            i;
        a = a % 360 / 60, i = c * b, h = i * (1 - z(a % 2 - 1)), e = f = g = c - i, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
        return bt(e, f, g, d)
    }, a.hsl2rgb = function(a, b, c, d) {
        this.is(a, "object") && "h" in a && "s" in a && "l" in a && (c = a.l, b = a.s, a = a.h);
        if (a > 1 || b > 1 || c > 1)
            a /= 360, b /= 100, c /= 100;
        a *= 360;
        var e,
            f,
            g,
            h,
            i;
        a = a % 360 / 60, i = 2 * b * (c < .5 ? c : 1 - c), h = i * (1 - z(a % 2 - 1)), e = f = g = c - i / 2, a = ~~a, e += [i, h, 0, 0, h, i][a], f += [h, i, i, h, 0, 0][a], g += [0, 0, h, i, i, h][a];
        return bt(e, f, g, d)
    }, a.rgb2hsb = function(a, b, c) {
        c = bs(a, b, c), a = c[0], b = c[1], c = c[2];
        var d,
            e,
            f,
            g;
        f = x(a, b, c), g = f - y(a, b, c), d = g == 0 ? null : f == a ? (b - c) / g : f == b ? (c - a) / g + 2 : (a - b) / g + 4, d = (d + 360) % 6 * 60 / 360, e = g == 0 ? 0 : g / f;
        return {
            h: d,
            s: e,
            b: f,
            toString: bp
        }
    }, a.rgb2hsl = function(a, b, c) {
        c = bs(a, b, c), a = c[0], b = c[1], c = c[2];
        var d,
            e,
            f,
            g,
            h,
            i;
        g = x(a, b, c), h = y(a, b, c), i = g - h, d = i == 0 ? null : g == a ? (b - c) / i : g == b ? (c - a) / i + 2 : (a - b) / i + 4, d = (d + 360) % 6 * 60 / 360, f = (g + h) / 2, e = i == 0 ? 0 : f < .5 ? i / (2 * f) : i / (2 - 2 * f);
        return {
            h: d,
            s: e,
            l: f,
            toString: bq
        }
    }, a._path2string = function() {
        return this.join(",").replace(Y, "$1")
    };
    var bw = a._preload = function(a, b) {
        var c = h.doc.createElement("img");
        c.style.cssText = "position:absolute;left:-9999em;top:-9999em", c.onload = function() {
            b.call(this), this.onload = null, h.doc.body.removeChild(this)
        }, c.onerror = function() {
            h.doc.body.removeChild(this)
        }, h.doc.body.appendChild(c), c.src = a
    };
    a.getRGB = bv(function(b) {
        if (!b || !!((b = r(b)).indexOf("-") + 1))
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                error: 1,
                toString: bx
            };
        if (b == "none")
            return {
                r: -1,
                g: -1,
                b: -1,
                hex: "none",
                toString: bx
            };
        !X[g](b.toLowerCase().substring(0, 2)) && b.charAt() != "#" && (b = bo(b));
        var c,
            d,
            e,
            f,
            h,
            i,
            j,
            k = b.match(L);
        if (k) {
            k[2] && (f = R(k[2].substring(5), 16), e = R(k[2].substring(3, 5), 16), d = R(k[2].substring(1, 3), 16)), k[3] && (f = R((i = k[3].charAt(3)) + i, 16), e = R((i = k[3].charAt(2)) + i, 16), d = R((i = k[3].charAt(1)) + i, 16)), k[4] && (j = k[4][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), k[1].toLowerCase().slice(0, 4) == "rgba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100));
            if (k[5]) {
                j = k[5][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d /= 360), k[1].toLowerCase().slice(0, 4) == "hsba" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100);
                return a.hsb2rgb(d, e, f, h)
            }
            if (k[6]) {
                j = k[6][s](W), d = Q(j[0]), j[0].slice(-1) == "%" && (d *= 2.55), e = Q(j[1]), j[1].slice(-1) == "%" && (e *= 2.55), f = Q(j[2]), j[2].slice(-1) == "%" && (f *= 2.55), (j[0].slice(-3) == "deg" || j[0].slice(-1) == "°") && (d /= 360), k[1].toLowerCase().slice(0, 4) == "hsla" && (h = Q(j[3])), j[3] && j[3].slice(-1) == "%" && (h /= 100);
                return a.hsl2rgb(d, e, f, h)
            }
            k = {
                r: d,
                g: e,
                b: f,
                toString: bx
            }, k.hex = "#" + (16777216 | f | e << 8 | d << 16).toString(16).slice(1), a.is(h, "finite") && (k.opacity = h);
            return k
        }
        return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: bx
        }
    }, a), a.hsb = bv(function(b, c, d) {
        return a.hsb2rgb(b, c, d).hex
    }), a.hsl = bv(function(b, c, d) {
        return a.hsl2rgb(b, c, d).hex
    }), a.rgb = bv(function(a, b, c) {
        return "#" + (16777216 | c | b << 8 | a << 16).toString(16).slice(1)
    }), a.getColor = function(a) {
        var b = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: a || .75
            },
            c = this.hsb2rgb(b.h, b.s, b.b);
        b.h += .075, b.h > 1 && (b.h = 0, b.s -= .2, b.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: b.b
        }));
        return c.hex
    }, a.getColor.reset = function() {
        delete this.start
    }, a.parsePathString = function(b) {
        if (!b)
            return null;
        var c = bz(b);
        if (c.arr)
            return bJ(c.arr);
        var d = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            e = [];
        a.is(b, E) && a.is(b[0], E) && (e = bJ(b)), e.length || r(b).replace(Z, function(a, b, c) {
            var f = [],
                g = b.toLowerCase();
            c.replace(_, function(a, b) {
                b && f.push(+b)
            }), g == "m" && f.length > 2 && (e.push([b][n](f.splice(0, 2))), g = "l", b = b == "m" ? "l" : "L");
            if (g == "r")
                e.push([b][n](f));
            else
                while (f.length >= d[g]) {
                    e.push([b][n](f.splice(0, d[g])));
                    if (!d[g])
                        break
                }
        }), e.toString = a._path2string, c.arr = bJ(e);
        return e
    }, a.parseTransformString = bv(function(b) {
        if (!b)
            return null;
        var c = {
                r: 3,
                s: 4,
                t: 2,
                m: 6
            },
            d = [];
        a.is(b, E) && a.is(b[0], E) && (d = bJ(b)), d.length || r(b).replace($, function(a, b, c) {
            var e = [],
                f = v.call(b);
            c.replace(_, function(a, b) {
                b && e.push(+b)
            }), d.push([b][n](e))
        }), d.toString = a._path2string;
        return d
    });
    var bz = function(a) {
        var b = bz.ps = bz.ps || {};
        b[a] ? b[a].sleep = 100 : b[a] = {
            sleep: 100
        }, setTimeout(function() {
            for (var c in b)
                b[g](c) && c != a && (b[c].sleep--, !b[c].sleep && delete b[c])
        });
        return b[a]
    };
    a.findDotsAtSegment = function(a, b, c, d, e, f, g, h, i) {
        var j = 1 - i,
            k = A(j, 3),
            l = A(j, 2),
            m = i * i,
            n = m * i,
            o = k * a + l * 3 * i * c + j * 3 * i * i * e + n * g,
            p = k * b + l * 3 * i * d + j * 3 * i * i * f + n * h,
            q = a + 2 * i * (c - a) + m * (e - 2 * c + a),
            r = b + 2 * i * (d - b) + m * (f - 2 * d + b),
            s = c + 2 * i * (e - c) + m * (g - 2 * e + c),
            t = d + 2 * i * (f - d) + m * (h - 2 * f + d),
            u = j * a + i * c,
            v = j * b + i * d,
            x = j * e + i * g,
            y = j * f + i * h,
            z = 90 - w.atan2(q - s, r - t) * 180 / B;
        (q > s || r < t) && (z += 180);
        return {
            x: o,
            y: p,
            m: {
                x: q,
                y: r
            },
            n: {
                x: s,
                y: t
            },
            start: {
                x: u,
                y: v
            },
            end: {
                x: x,
                y: y
            },
            alpha: z
        }
    }, a.bezierBBox = function(b, c, d, e, f, g, h, i) {
        a.is(b, "array") || (b = [b, c, d, e, f, g, h, i]);
        var j = bQ.apply(null, b);
        return {
            x: j.min.x,
            y: j.min.y,
            x2: j.max.x,
            y2: j.max.y,
            width: j.max.x - j.min.x,
            height: j.max.y - j.min.y
        }
    }, a.isPointInsideBBox = function(a, b, c) {
        return b >= a.x && b <= a.x2 && c >= a.y && c <= a.y2
    }, a.isBBoxIntersect = function(b, c) {
        var d = a.isPointInsideBBox;
        return d(c, b.x, b.y) || d(c, b.x2, b.y) || d(c, b.x, b.y2) || d(c, b.x2, b.y2) || d(b, c.x, c.y) || d(b, c.x2, c.y) || d(b, c.x, c.y2) || d(b, c.x2, c.y2) || (b.x < c.x2 && b.x > c.x || c.x < b.x2 && c.x > b.x) && (b.y < c.y2 && b.y > c.y || c.y < b.y2 && c.y > b.y)
    }, a.pathIntersection = function(a, b) {
        return bH(a, b)
    }, a.pathIntersectionNumber = function(a, b) {
        return bH(a, b, 1)
    }, a.isPointInsidePath = function(b, c, d) {
        var e = a.pathBBox(b);
        return a.isPointInsideBBox(e, c, d) && bH(b, [["M", c, d], ["H", e.x2 + 10]], 1) % 2 == 1
    }, a._removedFactory = function(a) {
        return function() {
            eve("raphael.log", null, "Raphaël: you are calling to method “" + a + "” of removed object", a)
        }
    };
    var bI = a.pathBBox = function(a) {
            var b = bz(a);
            if (b.bbox)
                return b.bbox;
            if (!a)
                return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    x2: 0,
                    y2: 0
                };
            a = bR(a);
            var c = 0,
                d = 0,
                e = [],
                f = [],
                g;
            for (var h = 0, i = a.length; h < i; h++) {
                g = a[h];
                if (g[0] == "M")
                    c = g[1], d = g[2], e.push(c), f.push(d);
                else {
                    var j = bQ(c, d, g[1], g[2], g[3], g[4], g[5], g[6]);
                    e = e[n](j.min.x, j.max.x), f = f[n](j.min.y, j.max.y), c = g[5], d = g[6]
                }
            }
            var k = y[m](0, e),
                l = y[m](0, f),
                o = x[m](0, e),
                p = x[m](0, f),
                q = {
                    x: k,
                    y: l,
                    x2: o,
                    y2: p,
                    width: o - k,
                    height: p - l
                };
            b.bbox = bm(q);
            return q
        },
        bJ = function(b) {
            var c = bm(b);
            c.toString = a._path2string;
            return c
        },
        bK = a._pathToRelative = function(b) {
            var c = bz(b);
            if (c.rel)
                return bJ(c.rel);
            if (!a.is(b, E) || !a.is(b && b[0], E))
                b = a.parsePathString(b);
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            b[0][0] == "M" && (e = b[0][1], f = b[0][2], g = e, h = f, i++, d.push(["M", e, f]));
            for (var j = i, k = b.length; j < k; j++) {
                var l = d[j] = [],
                    m = b[j];
                if (m[0] != v.call(m[0])) {
                    l[0] = v.call(m[0]);
                    switch (l[0]) {
                    case "a":
                        l[1] = m[1], l[2] = m[2], l[3] = m[3], l[4] = m[4], l[5] = m[5], l[6] = +(m[6] - e).toFixed(3), l[7] = +(m[7] - f).toFixed(3);
                        break;
                    case "v":
                        l[1] = +(m[1] - f).toFixed(3);
                        break;
                    case "m":
                        g = m[1], h = m[2];
                    default:
                        for (var n = 1, o = m.length; n < o; n++)
                            l[n] = +(m[n] - (n % 2 ? e : f)).toFixed(3)
                    }
                } else {
                    l = d[j] = [], m[0] == "m" && (g = m[1] + e, h = m[2] + f);
                    for (var p = 0, q = m.length; p < q; p++)
                        d[j][p] = m[p]
                }
                var r = d[j].length;
                switch (d[j][0]) {
                case "z":
                    e = g, f = h;
                    break;
                case "h":
                    e += +d[j][r - 1];
                    break;
                case "v":
                    f += +d[j][r - 1];
                    break;
                default:
                    e += +d[j][r - 2], f += +d[j][r - 1]
                }
            }
            d.toString = a._path2string, c.rel = bJ(d);
            return d
        },
        bL = a._pathToAbsolute = function(b) {
            var c = bz(b);
            if (c.abs)
                return bJ(c.abs);
            if (!a.is(b, E) || !a.is(b && b[0], E))
                b = a.parsePathString(b);
            if (!b || !b.length)
                return [["M", 0, 0]];
            var d = [],
                e = 0,
                f = 0,
                g = 0,
                h = 0,
                i = 0;
            b[0][0] == "M" && (e = +b[0][1], f = +b[0][2], g = e, h = f, i++, d[0] = ["M", e, f]);
            var j = b.length == 3 && b[0][0] == "M" && b[1][0].toUpperCase() == "R" && b[2][0].toUpperCase() == "Z";
            for (var k, l, m = i, o = b.length; m < o; m++) {
                d.push(k = []), l = b[m];
                if (l[0] != S.call(l[0])) {
                    k[0] = S.call(l[0]);
                    switch (k[0]) {
                    case "A":
                        k[1] = l[1], k[2] = l[2], k[3] = l[3], k[4] = l[4], k[5] = l[5], k[6] = +(l[6] + e), k[7] = +(l[7] + f);
                        break;
                    case "V":
                        k[1] = +l[1] + f;
                        break;
                    case "H":
                        k[1] = +l[1] + e;
                        break;
                    case "R":
                        var p = [e, f][n](l.slice(1));
                        for (var q = 2, r = p.length; q < r; q++)
                            p[q] = +p[q] + e, p[++q] = +p[q] + f;
                        d.pop(), d = d[n](by(p, j));
                        break;
                    case "M":
                        g = +l[1] + e, h = +l[2] + f;
                    default:
                        for (q = 1, r = l.length; q < r; q++)
                            k[q] = +l[q] + (q % 2 ? e : f)
                    }
                } else if (l[0] == "R")
                    p = [e, f][n](l.slice(1)), d.pop(), d = d[n](by(p, j)), k = ["R"][n](l.slice(-2));
                else
                    for (var s = 0, t = l.length; s < t; s++)
                        k[s] = l[s];
                switch (k[0]) {
                case "Z":
                    e = g, f = h;
                    break;
                case "H":
                    e = k[1];
                    break;
                case "V":
                    f = k[1];
                    break;
                case "M":
                    g = k[k.length - 2], h = k[k.length - 1];
                default:
                    e = k[k.length - 2], f = k[k.length - 1]
                }
            }
            d.toString = a._path2string, c.abs = bJ(d);
            return d
        },
        bM = function(a, b, c, d) {
            return [a, b, c, d, c, d]
        },
        bN = function(a, b, c, d, e, f) {
            var g = 1 / 3,
                h = 2 / 3;
            return [g * a + h * c, g * b + h * d, g * e + h * c, g * f + h * d, e, f]
        },
        bO = function(a, b, c, d, e, f, g, h, i, j) {
            var k = B * 120 / 180,
                l = B / 180 * (+e || 0),
                m = [],
                o,
                p = bv(function(a, b, c) {
                    var d = a * w.cos(c) - b * w.sin(c),
                        e = a * w.sin(c) + b * w.cos(c);
                    return {
                        x: d,
                        y: e
                    }
                });
            if (!j) {
                o = p(a, b, -l), a = o.x, b = o.y, o = p(h, i, -l), h = o.x, i = o.y;
                var q = w.cos(B / 180 * e),
                    r = w.sin(B / 180 * e),
                    t = (a - h) / 2,
                    u = (b - i) / 2,
                    v = t * t / (c * c) + u * u / (d * d);
                v > 1 && (v = w.sqrt(v), c = v * c, d = v * d);
                var x = c * c,
                    y = d * d,
                    A = (f == g ? -1 : 1) * w.sqrt(z((x * y - x * u * u - y * t * t) / (x * u * u + y * t * t))),
                    C = A * c * u / d + (a + h) / 2,
                    D = A * -d * t / c + (b + i) / 2,
                    E = w.asin(((b - D) / d).toFixed(9)),
                    F = w.asin(((i - D) / d).toFixed(9));
                E = a < C ? B - E : E, F = h < C ? B - F : F, E < 0 && (E = B * 2 + E), F < 0 && (F = B * 2 + F), g && E > F && (E = E - B * 2), !g && F > E && (F = F - B * 2)
            } else
                E = j[0], F = j[1], C = j[2], D = j[3];
            var G = F - E;
            if (z(G) > k) {
                var H = F,
                    I = h,
                    J = i;
                F = E + k * (g && F > E ? 1 : -1), h = C + c * w.cos(F), i = D + d * w.sin(F), m = bO(h, i, c, d, e, 0, g, I, J, [F, H, C, D])
            }
            G = F - E;
            var K = w.cos(E),
                L = w.sin(E),
                M = w.cos(F),
                N = w.sin(F),
                O = w.tan(G / 4),
                P = 4 / 3 * c * O,
                Q = 4 / 3 * d * O,
                R = [a, b],
                S = [a + P * L, b - Q * K],
                T = [h + P * N, i - Q * M],
                U = [h, i];
            S[0] = 2 * R[0] - S[0], S[1] = 2 * R[1] - S[1];
            if (j)
                return [S, T, U][n](m);
            m = [S, T, U][n](m).join()[s](",");
            var V = [];
            for (var W = 0, X = m.length; W < X; W++)
                V[W] = W % 2 ? p(m[W - 1], m[W], l).y : p(m[W], m[W + 1], l).x;
            return V
        },
        bP = function(a, b, c, d, e, f, g, h, i) {
            var j = 1 - i;
            return {
                x: A(j, 3) * a + A(j, 2) * 3 * i * c + j * 3 * i * i * e + A(i, 3) * g,
                y: A(j, 3) * b + A(j, 2) * 3 * i * d + j * 3 * i * i * f + A(i, 3) * h
            }
        },
        bQ = bv(function(a, b, c, d, e, f, g, h) {
            var i = e - 2 * c + a - (g - 2 * e + c),
                j = 2 * (c - a) - 2 * (e - c),
                k = a - c,
                l = (-j + w.sqrt(j * j - 4 * i * k)) / 2 / i,
                n = (-j - w.sqrt(j * j - 4 * i * k)) / 2 / i,
                o = [b, h],
                p = [a, g],
                q;
            z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bP(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bP(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y)), i = f - 2 * d + b - (h - 2 * f + d), j = 2 * (d - b) - 2 * (f - d), k = b - d, l = (-j + w.sqrt(j * j - 4 * i * k)) / 2 / i, n = (-j - w.sqrt(j * j - 4 * i * k)) / 2 / i, z(l) > "1e12" && (l = .5), z(n) > "1e12" && (n = .5), l > 0 && l < 1 && (q = bP(a, b, c, d, e, f, g, h, l), p.push(q.x), o.push(q.y)), n > 0 && n < 1 && (q = bP(a, b, c, d, e, f, g, h, n), p.push(q.x), o.push(q.y));
            return {
                min: {
                    x: y[m](0, p),
                    y: y[m](0, o)
                },
                max: {
                    x: x[m](0, p),
                    y: x[m](0, o)
                }
            }
        }),
        bR = a._path2curve = bv(function(a, b) {
            var c = !b && bz(a);
            if (!b && c.curve)
                return bJ(c.curve);
            var d = bL(a),
                e = b && bL(b),
                f = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                g = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                },
                h = function(a, b) {
                    var c,
                        d;
                    if (!a)
                        return ["C", b.x, b.y, b.x, b.y, b.x, b.y];
                    !(a[0] in {
                        T: 1,
                        Q: 1
                    }) && (b.qx = b.qy = null);
                    switch (a[0]) {
                    case "M":
                        b.X = a[1], b.Y = a[2];
                        break;
                    case "A":
                        a = ["C"][n](bO[m](0, [b.x, b.y][n](a.slice(1))));
                        break;
                    case "S":
                        c = b.x + (b.x - (b.bx || b.x)), d = b.y + (b.y - (b.by || b.y)), a = ["C", c, d][n](a.slice(1));
                        break;
                    case "T":
                        b.qx = b.x + (b.x - (b.qx || b.x)), b.qy = b.y + (b.y - (b.qy || b.y)), a = ["C"][n](bN(b.x, b.y, b.qx, b.qy, a[1], a[2]));
                        break;
                    case "Q":
                        b.qx = a[1], b.qy = a[2], a = ["C"][n](bN(b.x, b.y, a[1], a[2], a[3], a[4]));
                        break;
                    case "L":
                        a = ["C"][n](bM(b.x, b.y, a[1], a[2]));
                        break;
                    case "H":
                        a = ["C"][n](bM(b.x, b.y, a[1], b.y));
                        break;
                    case "V":
                        a = ["C"][n](bM(b.x, b.y, b.x, a[1]));
                        break;
                    case "Z":
                        a = ["C"][n](bM(b.x, b.y, b.X, b.Y))
                    }
                    return a
                },
                i = function(a, b) {
                    if (a[b].length > 7) {
                        a[b].shift();
                        var c = a[b];
                        while (c.length)
                            a.splice(b++, 0, ["C"][n](c.splice(0, 6)));
                        a.splice(b, 1), l = x(d.length, e && e.length || 0)
                    }
                },
                j = function(a, b, c, f, g) {
                    a && b && a[g][0] == "M" && b[g][0] != "M" && (b.splice(g, 0, ["M", f.x, f.y]), c.bx = 0, c.by = 0, c.x = a[g][1], c.y = a[g][2], l = x(d.length, e && e.length || 0))
                };
            for (var k = 0, l = x(d.length, e && e.length || 0); k < l; k++) {
                d[k] = h(d[k], f), i(d, k), e && (e[k] = h(e[k], g)), e && i(e, k), j(d, e, f, g, k), j(e, d, g, f, k);
                var o = d[k],
                    p = e && e[k],
                    q = o.length,
                    r = e && p.length;
                f.x = o[q - 2], f.y = o[q - 1], f.bx = Q(o[q - 4]) || f.x, f.by = Q(o[q - 3]) || f.y, g.bx = e && (Q(p[r - 4]) || g.x), g.by = e && (Q(p[r - 3]) || g.y), g.x = e && p[r - 2], g.y = e && p[r - 1]
            }
            e || (c.curve = bJ(d));
            return e ? [d, e] : d
        }, null, bJ),
        bS = a._parseDots = bv(function(b) {
            var c = [];
            for (var d = 0, e = b.length; d < e; d++) {
                var f = {},
                    g = b[d].match(/^([^:]*):?([\d\.]*)/);
                f.color = a.getRGB(g[1]);
                if (f.color.error)
                    return null;
                f.color = f.color.hex, g[2] && (f.offset = g[2] + "%"), c.push(f)
            }
            for (d = 1, e = c.length - 1; d < e; d++)
                if (!c[d].offset) {
                    var h = Q(c[d - 1].offset || 0),
                        i = 0;
                    for (var j = d + 1; j < e; j++)
                        if (c[j].offset) {
                            i = c[j].offset;
                            break
                        }
                    i || (i = 100, j = e), i = Q(i);
                    var k = (i - h) / (j - d + 1);
                    for (; d < j; d++)
                        h += k, c[d].offset = h + "%"
                }
            return c
        }),
        bT = a._tear = function(a, b) {
            a == b.top && (b.top = a.prev), a == b.bottom && (b.bottom = a.next), a.next && (a.next.prev = a.prev), a.prev && (a.prev.next = a.next)
        },
        bU = a._tofront = function(a, b) {
            b.top !== a && (bT(a, b), a.next = null, a.prev = b.top, b.top.next = a, b.top = a)
        },
        bV = a._toback = function(a, b) {
            b.bottom !== a && (bT(a, b), a.next = b.bottom, a.prev = null, b.bottom.prev = a, b.bottom = a)
        },
        bW = a._insertafter = function(a, b, c) {
            bT(a, c), b == c.top && (c.top = a), b.next && (b.next.prev = a), a.next = b.next, a.prev = b, b.next = a
        },
        bX = a._insertbefore = function(a, b, c) {
            bT(a, c), b == c.bottom && (c.bottom = a), b.prev && (b.prev.next = a), a.prev = b.prev, b.prev = a, a.next = b
        },
        bY = a.toMatrix = function(a, b) {
            var c = bI(a),
                d = {
                    _: {
                        transform: p
                    },
                    getBBox: function() {
                        return c
                    }
                };
            b$(d, b);
            return d.matrix
        },
        bZ = a.transformPath = function(a, b) {
            return bj(a, bY(a, b))
        },
        b$ = a._extractTransform = function(b, c) {
            if (c == null)
                return b._.transform;
            c = r(c).replace(/\.{3}|\u2026/g, b._.transform || p);
            var d = a.parseTransformString(c),
                e = 0,
                f = 0,
                g = 0,
                h = 1,
                i = 1,
                j = b._,
                k = new cb;
            j.transform = d || [];
            if (d)
                for (var l = 0, m = d.length; l < m; l++) {
                    var n = d[l],
                        o = n.length,
                        q = r(n[0]).toLowerCase(),
                        s = n[0] != q,
                        t = s ? k.invert() : 0,
                        u,
                        v,
                        w,
                        x,
                        y;
                    q == "t" && o == 3 ? s ? (u = t.x(0, 0), v = t.y(0, 0), w = t.x(n[1], n[2]), x = t.y(n[1], n[2]), k.translate(w - u, x - v)) : k.translate(n[1], n[2]) : q == "r" ? o == 2 ? (y = y || b.getBBox(1), k.rotate(n[1], y.x + y.width / 2, y.y + y.height / 2), e += n[1]) : o == 4 && (s ? (w = t.x(n[2], n[3]), x = t.y(n[2], n[3]), k.rotate(n[1], w, x)) : k.rotate(n[1], n[2], n[3]), e += n[1]) : q == "s" ? o == 2 || o == 3 ? (y = y || b.getBBox(1), k.scale(n[1], n[o - 1], y.x + y.width / 2, y.y + y.height / 2), h *= n[1], i *= n[o - 1]) : o == 5 && (s ? (w = t.x(n[3], n[4]), x = t.y(n[3], n[4]), k.scale(n[1], n[2], w, x)) : k.scale(n[1], n[2], n[3], n[4]), h *= n[1], i *= n[2]) : q == "m" && o == 7 && k.add(n[1], n[2], n[3], n[4], n[5], n[6]), j.dirtyT = 1, b.matrix = k
                }
            b.matrix = k, j.sx = h, j.sy = i, j.deg = e, j.dx = f = k.e, j.dy = g = k.f, h == 1 && i == 1 && !e && j.bbox ? (j.bbox.x += +f, j.bbox.y += +g) : j.dirtyT = 1
        },
        b_ = function(a) {
            var b = a[0];
            switch (b.toLowerCase()) {
            case "t":
                return [b, 0, 0];
            case "m":
                return [b, 1, 0, 0, 1, 0, 0];
            case "r":
                return a.length == 4 ? [b, 0, a[2], a[3]] : [b, 0];
            case "s":
                return a.length == 5 ? [b, 1, 1, a[3], a[4]] : a.length == 3 ? [b, 1, 1] : [b, 1]
            }
        },
        ca = a._equaliseTransform = function(b, c) {
            c = r(c).replace(/\.{3}|\u2026/g, b), b = a.parseTransformString(b) || [], c = a.parseTransformString(c) || [];
            var d = x(b.length, c.length),
                e = [],
                f = [],
                g = 0,
                h,
                i,
                j,
                k;
            for (; g < d; g++) {
                j = b[g] || b_(c[g]), k = c[g] || b_(j);
                if (j[0] != k[0] || j[0].toLowerCase() == "r" && (j[2] != k[2] || j[3] != k[3]) || j[0].toLowerCase() == "s" && (j[3] != k[3] || j[4] != k[4]))
                    return;
                e[g] = [], f[g] = [];
                for (h = 0, i = x(j.length, k.length); h < i; h++)
                    h in j && (e[g][h] = j[h]), h in k && (f[g][h] = k[h])
            }
            return {
                from: e,
                to: f
            }
        };
    a._getContainer = function(b, c, d, e) {
        var f;
        f = e == null && !a.is(b, "object") ? h.doc.getElementById(b) : b;
        if (f != null) {
            if (f.tagName)
                return c == null ? {
                    container: f,
                    width: f.style.pixelWidth || f.offsetWidth,
                    height: f.style.pixelHeight || f.offsetHeight
                } : {
                    container: f,
                    width: c,
                    height: d
                };
            return {
                container: 1,
                x: b,
                y: c,
                width: d,
                height: e
            }
        }
    }, a.pathToRelative = bK, a._engine = {}, a.path2curve = bR, a.matrix = function(a, b, c, d, e, f) {
        return new cb(a, b, c, d, e, f)
    }, function(b) {
        function d(a) {
            var b = w.sqrt(c(a));
            a[0] && (a[0] /= b), a[1] && (a[1] /= b)
        }
        function c(a) {
            return a[0] * a[0] + a[1] * a[1]
        }
        b.add = function(a, b, c, d, e, f) {
            var g = [[], [], []],
                h = [[this.a, this.c, this.e], [this.b, this.d, this.f], [0, 0, 1]],
                i = [[a, c, e], [b, d, f], [0, 0, 1]],
                j,
                k,
                l,
                m;
            a && a instanceof cb && (i = [[a.a, a.c, a.e], [a.b, a.d, a.f], [0, 0, 1]]);
            for (j = 0; j < 3; j++)
                for (k = 0; k < 3; k++) {
                    m = 0;
                    for (l = 0; l < 3; l++)
                        m += h[j][l] * i[l][k];
                    g[j][k] = m
                }
            this.a = g[0][0], this.b = g[1][0], this.c = g[0][1], this.d = g[1][1], this.e = g[0][2], this.f = g[1][2]
        }, b.invert = function() {
            var a = this,
                b = a.a * a.d - a.b * a.c;
            return new cb(a.d / b, -a.b / b, -a.c / b, a.a / b, (a.c * a.f - a.d * a.e) / b, (a.b * a.e - a.a * a.f) / b)
        }, b.clone = function() {
            return new cb(this.a, this.b, this.c, this.d, this.e, this.f)
        }, b.translate = function(a, b) {
            this.add(1, 0, 0, 1, a, b)
        }, b.scale = function(a, b, c, d) {
            b == null && (b = a), (c || d) && this.add(1, 0, 0, 1, c, d), this.add(a, 0, 0, b, 0, 0), (c || d) && this.add(1, 0, 0, 1, -c, -d)
        }, b.rotate = function(b, c, d) {
            b = a.rad(b), c = c || 0, d = d || 0;
            var e = +w.cos(b).toFixed(9),
                f = +w.sin(b).toFixed(9);
            this.add(e, f, -f, e, c, d), this.add(1, 0, 0, 1, -c, -d)
        }, b.x = function(a, b) {
            return a * this.a + b * this.c + this.e
        }, b.y = function(a, b) {
            return a * this.b + b * this.d + this.f
        }, b.get = function(a) {
            return +this[r.fromCharCode(97 + a)].toFixed(4)
        }, b.toString = function() {
            return a.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, b.toFilter = function() {
            return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, b.offset = function() {
            return [this.e.toFixed(4), this.f.toFixed(4)]
        }, b.split = function() {
            var b = {};
            b.dx = this.e, b.dy = this.f;
            var e = [[this.a, this.c], [this.b, this.d]];
            b.scalex = w.sqrt(c(e[0])), d(e[0]), b.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * b.shear, e[1][1] - e[0][1] * b.shear], b.scaley = w.sqrt(c(e[1])), d(e[1]), b.shear /= b.scaley;
            var f = -e[0][1],
                g = e[1][1];
            g < 0 ? (b.rotate = a.deg(w.acos(g)), f < 0 && (b.rotate = 360 - b.rotate)) : b.rotate = a.deg(w.asin(f)), b.isSimple = !+b.shear.toFixed(9) && (b.scalex.toFixed(9) == b.scaley.toFixed(9) || !b.rotate), b.isSuperSimple = !+b.shear.toFixed(9) && b.scalex.toFixed(9) == b.scaley.toFixed(9) && !b.rotate, b.noRotation = !+b.shear.toFixed(9) && !b.rotate;
            return b
        }, b.toTransformString = function(a) {
            var b = a || this[s]();
            if (b.isSimple) {
                b.scalex = +b.scalex.toFixed(4), b.scaley = +b.scaley.toFixed(4), b.rotate = +b.rotate.toFixed(4);
                return (b.dx || b.dy ? "t" + [b.dx, b.dy] : p) + (b.scalex != 1 || b.scaley != 1 ? "s" + [b.scalex, b.scaley, 0, 0] : p) + (b.rotate ? "r" + [b.rotate, 0, 0] : p)
            }
            return "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
    }(cb.prototype);
    var cc = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    navigator.vendor == "Apple Computer, Inc." && (cc && cc[1] < 4 || navigator.platform.slice(0, 2) == "iP") || navigator.vendor == "Google Inc." && cc && cc[1] < 8 ? k.safari = function() {
        var a = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function() {
            a.remove()
        })
    } : k.safari = be;
    var cd = function() {
            this.returnValue = !1
        },
        ce = function() {
            return this.originalEvent.preventDefault()
        },
        cf = function() {
            this.cancelBubble = !0
        },
        cg = function() {
            return this.originalEvent.stopPropagation()
        },
        ch = function() {
            if (h.doc.addEventListener)
                return function(a, b, c, d) {
                    var e = o && u[b] ? u[b] : b,
                        f = function(e) {
                            var f = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                                i = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
                                j = e.clientX + i,
                                k = e.clientY + f;
                            if (o && u[g](b))
                                for (var l = 0, m = e.targetTouches && e.targetTouches.length; l < m; l++)
                                    if (e.targetTouches[l].target == a) {
                                        var n = e;
                                        e = e.targetTouches[l], e.originalEvent = n, e.preventDefault = ce, e.stopPropagation = cg;
                                        break
                                    }
                            return c.call(d, e, j, k)
                        };
                    a.addEventListener(e, f, !1);
                    return function() {
                        a.removeEventListener(e, f, !1);
                        return !0
                    }
                };
            if (h.doc.attachEvent)
                return function(a, b, c, d) {
                    var e = function(a) {
                        a = a || h.win.event;
                        var b = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                            e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
                            f = a.clientX + e,
                            g = a.clientY + b;
                        a.preventDefault = a.preventDefault || cd, a.stopPropagation = a.stopPropagation || cf;
                        return c.call(d, a, f, g)
                    };
                    a.attachEvent("on" + b, e);
                    var f = function() {
                        a.detachEvent("on" + b, e);
                        return !0
                    };
                    return f
                }
        }(),
        ci = [],
        cj = function(a) {
            var b = a.clientX,
                c = a.clientY,
                d = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                e = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft,
                f,
                g = ci.length;
            while (g--) {
                f = ci[g];
                if (o) {
                    var i = a.touches.length,
                        j;
                    while (i--) {
                        j = a.touches[i];
                        if (j.identifier == f.el._drag.id) {
                            b = j.clientX, c = j.clientY, (a.originalEvent ? a.originalEvent : a).preventDefault();
                            break
                        }
                    }
                } else
                    a.preventDefault();
                var k = f.el.node,
                    l,
                    m = k.nextSibling,
                    n = k.parentNode,
                    p = k.style.display;
                h.win.opera && n.removeChild(k), k.style.display = "none", l = f.el.paper.getElementByPoint(b, c), k.style.display = p, h.win.opera && (m ? n.insertBefore(k, m) : n.appendChild(k)), l && eve("raphael.drag.over." + f.el.id, f.el, l), b += e, c += d, eve("raphael.drag.move." + f.el.id, f.move_scope || f.el, b - f.el._drag.x, c - f.el._drag.y, b, c, a)
            }
        },
        ck = function(b) {
            a.unmousemove(cj).unmouseup(ck);
            var c = ci.length,
                d;
            while (c--)
                d = ci[c], d.el._drag = {}, eve("raphael.drag.end." + d.el.id, d.end_scope || d.start_scope || d.move_scope || d.el, b);
            ci = []
        },
        cl = a.el = {};
    for (var cm = t.length; cm--;)
        (function(b) {
            a[b] = cl[b] = function(c, d) {
                a.is(c, "function") && (this.events = this.events || [], this.events.push({
                    name: b,
                    f: c,
                    unbind: ch(this.shape || this.node || h.doc, b, c, d || this)
                }));
                return this
            }, a["un" + b] = cl["un" + b] = function(a) {
                var c = this.events || [],
                    d = c.length;
                while (d--)
                    if (c[d].name == b && c[d].f == a) {
                        c[d].unbind(), c.splice(d, 1), !c.length && delete this.events;
                        return this
                    }
                return this
            }
        })(t[cm]);
    cl.data = function(b, c) {
        var d = bb[this.id] = bb[this.id] || {};
        if (arguments.length == 1) {
            if (a.is(b, "object")) {
                for (var e in b)
                    b[g](e) && this.data(e, b[e]);
                return this
            }
            eve("raphael.data.get." + this.id, this, d[b], b);
            return d[b]
        }
        d[b] = c, eve("raphael.data.set." + this.id, this, c, b);
        return this
    }, cl.removeData = function(a) {
        a == null ? bb[this.id] = {} : bb[this.id] && delete bb[this.id][a];
        return this
    }, cl.hover = function(a, b, c, d) {
        return this.mouseover(a, c).mouseout(b, d || c)
    }, cl.unhover = function(a, b) {
        return this.unmouseover(a).unmouseout(b)
    };
    var cn = [];
    cl.drag = function(b, c, d, e, f, g) {
        function i(i) {
            (i.originalEvent || i).preventDefault();
            var j = h.doc.documentElement.scrollTop || h.doc.body.scrollTop,
                k = h.doc.documentElement.scrollLeft || h.doc.body.scrollLeft;
            this._drag.x = i.clientX + k, this._drag.y = i.clientY + j, this._drag.id = i.identifier, !ci.length && a.mousemove(cj).mouseup(ck), ci.push({
                el: this,
                move_scope: e,
                start_scope: f,
                end_scope: g
            }), c && eve.on("raphael.drag.start." + this.id, c), b && eve.on("raphael.drag.move." + this.id, b), d && eve.on("raphael.drag.end." + this.id, d), eve("raphael.drag.start." + this.id, f || e || this, i.clientX + k, i.clientY + j, i)
        }
        this._drag = {}, cn.push({
            el: this,
            start: i
        }), this.mousedown(i);
        return this
    }, cl.onDragOver = function(a) {
        a ? eve.on("raphael.drag.over." + this.id, a) : eve.unbind("raphael.drag.over." + this.id)
    }, cl.undrag = function() {
        var b = cn.length;
        while (b--)
            cn[b].el == this && (this.unmousedown(cn[b].start), cn.splice(b, 1), eve.unbind("raphael.drag.*." + this.id));
        !cn.length && a.unmousemove(cj).unmouseup(ck)
    }, k.circle = function(b, c, d) {
        var e = a._engine.circle(this, b || 0, c || 0, d || 0);
        this.__set__ && this.__set__.push(e);
        return e
    }, k.rect = function(b, c, d, e, f) {
        var g = a._engine.rect(this, b || 0, c || 0, d || 0, e || 0, f || 0);
        this.__set__ && this.__set__.push(g);
        return g
    }, k.ellipse = function(b, c, d, e) {
        var f = a._engine.ellipse(this, b || 0, c || 0, d || 0, e || 0);
        this.__set__ && this.__set__.push(f);
        return f
    }, k.path = function(b) {
        b && !a.is(b, D) && !a.is(b[0], E) && (b += p);
        var c = a._engine.path(a.format[m](a, arguments), this);
        this.__set__ && this.__set__.push(c);
        return c
    }, k.image = function(b, c, d, e, f) {
        var g = a._engine.image(this, b || "about:blank", c || 0, d || 0, e || 0, f || 0);
        this.__set__ && this.__set__.push(g);
        return g
    }, k.text = function(b, c, d) {
        var e = a._engine.text(this, b || 0, c || 0, r(d));
        this.__set__ && this.__set__.push(e);
        return e
    }, k.set = function(b) {
        !a.is(b, "array") && (b = Array.prototype.splice.call(arguments, 0, arguments.length));
        var c = new cG(b);
        this.__set__ && this.__set__.push(c);
        return c
    }, k.setStart = function(a) {
        this.__set__ = a || this.set()
    }, k.setFinish = function(a) {
        var b = this.__set__;
        delete this.__set__;
        return b
    }, k.setSize = function(b, c) {
        return a._engine.setSize.call(this, b, c)
    }, k.setViewBox = function(b, c, d, e, f) {
        return a._engine.setViewBox.call(this, b, c, d, e, f)
    }, k.top = k.bottom = null, k.raphael = a;
    var co = function(a) {
        var b = a.getBoundingClientRect(),
            c = a.ownerDocument,
            d = c.body,
            e = c.documentElement,
            f = e.clientTop || d.clientTop || 0,
            g = e.clientLeft || d.clientLeft || 0,
            i = b.top + (h.win.pageYOffset || e.scrollTop || d.scrollTop) - f,
            j = b.left + (h.win.pageXOffset || e.scrollLeft || d.scrollLeft) - g;
        return {
            y: i,
            x: j
        }
    };
    k.getElementByPoint = function(a, b) {
        var c = this,
            d = c.canvas,
            e = h.doc.elementFromPoint(a, b);
        if (h.win.opera && e.tagName == "svg") {
            var f = co(d),
                g = d.createSVGRect();
            g.x = a - f.x, g.y = b - f.y, g.width = g.height = 1;
            var i = d.getIntersectionList(g, null);
            i.length && (e = i[i.length - 1])
        }
        if (!e)
            return null;
        while (e.parentNode && e != d.parentNode && !e.raphael)
            e = e.parentNode;
        e == c.canvas.parentNode && (e = d), e = e && e.raphael ? c.getById(e.raphaelid) : null;
        return e
    }, k.getById = function(a) {
        var b = this.bottom;
        while (b) {
            if (b.id == a)
                return b;
            b = b.next
        }
        return null
    }, k.forEach = function(a, b) {
        var c = this.bottom;
        while (c) {
            if (a.call(b, c) === !1)
                return this;
            c = c.next
        }
        return this
    }, k.getElementsByPoint = function(a, b) {
        var c = this.set();
        this.forEach(function(d) {
            d.isPointInside(a, b) && c.push(d)
        });
        return c
    }, cl.isPointInside = function(b, c) {
        var d = this.realPath = this.realPath || bi[this.type](this);
        return a.isPointInsidePath(d, b, c)
    }, cl.getBBox = function(a) {
        if (this.removed)
            return {};
        var b = this._;
        if (a) {
            if (b.dirty || !b.bboxwt)
                this.realPath = bi[this.type](this), b.bboxwt = bI(this.realPath), b.bboxwt.toString = cq, b.dirty = 0;
            return b.bboxwt
        }
        if (b.dirty || b.dirtyT || !b.bbox) {
            if (b.dirty || !this.realPath)
                b.bboxwt = 0, this.realPath = bi[this.type](this);
            b.bbox = bI(bj(this.realPath, this.matrix)), b.bbox.toString = cq, b.dirty = b.dirtyT = 0
        }
        return b.bbox
    }, cl.clone = function() {
        if (this.removed)
            return null;
        var a = this.paper[this.type]().attr(this.attr());
        this.__set__ && this.__set__.push(a);
        return a
    }, cl.glow = function(a) {
        if (this.type == "text")
            return null;
        a = a || {};
        var b = {
                width: (a.width || 10) + (+this.attr("stroke-width") || 1),
                fill: a.fill || !1,
                opacity: a.opacity || .5,
                offsetx: a.offsetx || 0,
                offsety: a.offsety || 0,
                color: a.color || "#000"
            },
            c = b.width / 2,
            d = this.paper,
            e = d.set(),
            f = this.realPath || bi[this.type](this);
        f = this.matrix ? bj(f, this.matrix) : f;
        for (var g = 1; g < c + 1; g++)
            e.push(d.path(f).attr({
                stroke: b.color,
                fill: b.fill ? b.color : "none",
                "stroke-linejoin": "round",
                "stroke-linecap": "round",
                "stroke-width": +(b.width / c * g).toFixed(3),
                opacity: +(b.opacity / c).toFixed(3)
            }));
        return e.insertBefore(this).translate(b.offsetx, b.offsety)
    };
    var cr = {},
        cs = function(b, c, d, e, f, g, h, i, j) {
            return j == null ? bB(b, c, d, e, f, g, h, i) : a.findDotsAtSegment(b, c, d, e, f, g, h, i, bC(b, c, d, e, f, g, h, i, j))
        },
        ct = function(b, c) {
            return function(d, e, f) {
                d = bR(d);
                var g,
                    h,
                    i,
                    j,
                    k = "",
                    l = {},
                    m,
                    n = 0;
                for (var o = 0, p = d.length; o < p; o++) {
                    i = d[o];
                    if (i[0] == "M")
                        g = +i[1], h = +i[2];
                    else {
                        j = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6]);
                        if (n + j > e) {
                            if (c && !l.start) {
                                m = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n), k += ["C" + m.start.x, m.start.y, m.m.x, m.m.y, m.x, m.y];
                                if (f)
                                    return k;
                                l.start = k, k = ["M" + m.x, m.y + "C" + m.n.x, m.n.y, m.end.x, m.end.y, i[5], i[6]].join(), n += j, g = +i[5], h = +i[6];
                                continue
                            }
                            if (!b && !c) {
                                m = cs(g, h, i[1], i[2], i[3], i[4], i[5], i[6], e - n);
                                return {
                                    x: m.x,
                                    y: m.y,
                                    alpha: m.alpha
                                }
                            }
                        }
                        n += j, g = +i[5], h = +i[6]
                    }
                    k += i.shift() + i
                }
                l.end = k, m = b ? n : c ? l : a.findDotsAtSegment(g, h, i[0], i[1], i[2], i[3], i[4], i[5], 1), m.alpha && (m = {
                    x: m.x,
                    y: m.y,
                    alpha: m.alpha
                });
                return m
            }
        },
        cu = ct(1),
        cv = ct(),
        cw = ct(0, 1);
    a.getTotalLength = cu, a.getPointAtLength = cv, a.getSubpath = function(a, b, c) {
        if (this.getTotalLength(a) - c < 1e-6)
            return cw(a, b).end;
        var d = cw(a, c, 1);
        return b ? cw(d, b).end : d
    }, cl.getTotalLength = function() {
        if (this.type == "path") {
            if (this.node.getTotalLength)
                return this.node.getTotalLength();
            return cu(this.attrs.path)
        }
    }, cl.getPointAtLength = function(a) {
        if (this.type == "path")
            return cv(this.attrs.path, a)
    }, cl.getSubpath = function(b, c) {
        if (this.type == "path")
            return a.getSubpath(this.attrs.path, b, c)
    };
    var cx = a.easing_formulas = {
        linear: function(a) {
            return a
        },
        "<": function(a) {
            return A(a, 1.7)
        },
        ">": function(a) {
            return A(a, .48)
        },
        "<>": function(a) {
            var b = .48 - a / 1.04,
                c = w.sqrt(.1734 + b * b),
                d = c - b,
                e = A(z(d), 1 / 3) * (d < 0 ? -1 : 1),
                f = -c - b,
                g = A(z(f), 1 / 3) * (f < 0 ? -1 : 1),
                h = e + g + .5;
            return (1 - h) * 3 * h * h + h * h * h
        },
        backIn: function(a) {
            var b = 1.70158;
            return a * a * ((b + 1) * a - b)
        },
        backOut: function(a) {
            a = a - 1;
            var b = 1.70158;
            return a * a * ((b + 1) * a + b) + 1
        },
        elastic: function(a) {
            if (a == !!a)
                return a;
            return A(2, -10 * a) * w.sin((a - .075) * 2 * B / .3) + 1
        },
        bounce: function(a) {
            var b = 7.5625,
                c = 2.75,
                d;
            a < 1 / c ? d = b * a * a : a < 2 / c ? (a -= 1.5 / c, d = b * a * a + .75) : a < 2.5 / c ? (a -= 2.25 / c, d = b * a * a + .9375) : (a -= 2.625 / c, d = b * a * a + .984375);
            return d
        }
    };
    cx.easeIn = cx["ease-in"] = cx["<"], cx.easeOut = cx["ease-out"] = cx[">"], cx.easeInOut = cx["ease-in-out"] = cx["<>"], cx["back-in"] = cx.backIn, cx["back-out"] = cx.backOut;
    var cy = [],
        cz = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            setTimeout(a, 16)
        },
        cA = function() {
            var b = +(new Date),
                c = 0;
            for (; c < cy.length; c++) {
                var d = cy[c];
                if (d.el.removed || d.paused)
                    continue;
                var e = b - d.start,
                    f = d.ms,
                    h = d.easing,
                    i = d.from,
                    j = d.diff,
                    k = d.to,
                    l = d.t,
                    m = d.el,
                    o = {},
                    p,
                    r = {},
                    s;
                d.initstatus ? (e = (d.initstatus * d.anim.top - d.prev) / (d.percent - d.prev) * f, d.status = d.initstatus, delete d.initstatus, d.stop && cy.splice(c--, 1)) : d.status = (d.prev + (d.percent - d.prev) * (e / f)) / d.anim.top;
                if (e < 0)
                    continue;
                if (e < f) {
                    var t = h(e / f);
                    for (var u in i)
                        if (i[g](u)) {
                            switch (U[u]) {
                            case C:
                                p = +i[u] + t * f * j[u];
                                break;
                            case "colour":
                                p = "rgb(" + [cB(O(i[u].r + t * f * j[u].r)), cB(O(i[u].g + t * f * j[u].g)), cB(O(i[u].b + t * f * j[u].b))].join(",") + ")";
                                break;
                            case "path":
                                p = [];
                                for (var v = 0, w = i[u].length; v < w; v++) {
                                    p[v] = [i[u][v][0]];
                                    for (var x = 1, y = i[u][v].length; x < y; x++)
                                        p[v][x] = +i[u][v][x] + t * f * j[u][v][x];
                                    p[v] = p[v].join(q)
                                }
                                p = p.join(q);
                                break;
                            case "transform":
                                if (j[u].real) {
                                    p = [];
                                    for (v = 0, w = i[u].length; v < w; v++) {
                                        p[v] = [i[u][v][0]];
                                        for (x = 1, y = i[u][v].length; x < y; x++)
                                            p[v][x] = i[u][v][x] + t * f * j[u][v][x]
                                    }
                                } else {
                                    var z = function(a) {
                                        return +i[u][a] + t * f * j[u][a]
                                    };
                                    p = [["m", z(0), z(1), z(2), z(3), z(4), z(5)]]
                                }
                                break;
                            case "csv":
                                if (u == "clip-rect") {
                                    p = [], v = 4;
                                    while (v--)
                                        p[v] = +i[u][v] + t * f * j[u][v]
                                }
                                break;
                            default:
                                var A = [][n](i[u]);
                                p = [], v = m.paper.customAttributes[u].length;
                                while (v--)
                                    p[v] = +A[v] + t * f * j[u][v]
                            }
                            o[u] = p
                        }
                    m.attr(o), function(a, b, c) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + a, b, c)
                        })
                    }(m.id, m, d.anim)
                } else {
                    (function(b, c, d) {
                        setTimeout(function() {
                            eve("raphael.anim.frame." + c.id, c, d), eve("raphael.anim.finish." + c.id, c, d), a.is(b, "function") && b.call(c)
                        })
                    })(d.callback, m, d.anim), m.attr(k), cy.splice(c--, 1);
                    if (d.repeat > 1 && !d.next) {
                        for (s in k)
                            k[g](s) && (r[s] = d.totalOrigin[s]);
                        d.el.attr(r), cE(d.anim, d.el, d.anim.percents[0], null, d.totalOrigin, d.repeat - 1)
                    }
                    d.next && !d.stop && cE(d.anim, d.el, d.next, null, d.totalOrigin, d.repeat)
                }
            }
            a.svg && m && m.paper && m.paper.safari(), cy.length && cz(cA)
        },
        cB = function(a) {
            return a > 255 ? 255 : a < 0 ? 0 : a
        };
    cl.animateWith = function(b, c, d, e, f, g) {
        var h = this;
        if (h.removed) {
            g && g.call(h);
            return h
        }
        var i = d instanceof cD ? d : a.animation(d, e, f, g),
            j,
            k;
        cE(i, h, i.percents[0], null, h.attr());
        for (var l = 0, m = cy.length; l < m; l++)
            if (cy[l].anim == c && cy[l].el == b) {
                cy[m - 1].start = cy[l].start;
                break
            }
        return h
    }, cl.onAnimation = function(a) {
        a ? eve.on("raphael.anim.frame." + this.id, a) : eve.unbind("raphael.anim.frame." + this.id);
        return this
    }, cD.prototype.delay = function(a) {
        var b = new cD(this.anim, this.ms);
        b.times = this.times, b.del = +a || 0;
        return b
    }, cD.prototype.repeat = function(a) {
        var b = new cD(this.anim, this.ms);
        b.del = this.del, b.times = w.floor(x(a, 0)) || 1;
        return b
    }, a.animation = function(b, c, d, e) {
        if (b instanceof cD)
            return b;
        if (a.is(d, "function") || !d)
            e = e || d || null, d = null;
        b = Object(b), c = +c || 0;
        var f = {},
            h,
            i;
        for (i in b)
            b[g](i) && Q(i) != i && Q(i) + "%" != i && (h = !0, f[i] = b[i]);
        if (!h)
            return new cD(b, c);
        d && (f.easing = d), e && (f.callback = e);
        return new cD({
            100: f
        }, c)
    }, cl.animate = function(b, c, d, e) {
        var f = this;
        if (f.removed) {
            e && e.call(f);
            return f
        }
        var g = b instanceof cD ? b : a.animation(b, c, d, e);
        cE(g, f, g.percents[0], null, f.attr());
        return f
    }, cl.setTime = function(a, b) {
        a && b != null && this.status(a, y(b, a.ms) / a.ms);
        return this
    }, cl.status = function(a, b) {
        var c = [],
            d = 0,
            e,
            f;
        if (b != null) {
            cE(a, this, -1, y(b, 1));
            return this
        }
        e = cy.length;
        for (; d < e; d++) {
            f = cy[d];
            if (f.el.id == this.id && (!a || f.anim == a)) {
                if (a)
                    return f.status;
                c.push({
                    anim: f.anim,
                    status: f.status
                })
            }
        }
        if (a)
            return 0;
        return c
    }, cl.pause = function(a) {
        for (var b = 0; b < cy.length; b++)
            cy[b].el.id == this.id && (!a || cy[b].anim == a) && eve("raphael.anim.pause." + this.id, this, cy[b].anim) !== !1 && (cy[b].paused = !0);
        return this
    }, cl.resume = function(a) {
        for (var b = 0; b < cy.length; b++)
            if (cy[b].el.id == this.id && (!a || cy[b].anim == a)) {
                var c = cy[b];
                eve("raphael.anim.resume." + this.id, this, c.anim) !== !1 && (delete c.paused, this.status(c.anim, c.status))
            }
        return this
    }, cl.stop = function(a) {
        for (var b = 0; b < cy.length; b++)
            cy[b].el.id == this.id && (!a || cy[b].anim == a) && eve("raphael.anim.stop." + this.id, this, cy[b].anim) !== !1 && cy.splice(b--, 1);
        return this
    }, eve.on("raphael.remove", cF), eve.on("raphael.clear", cF), cl.toString = function() {
        return "Raphaël’s object"
    };
    var cG = function(a) {
            this.items = [], this.length = 0, this.type = "set";
            if (a)
                for (var b = 0, c = a.length; b < c; b++)
                    a[b] && (a[b].constructor == cl.constructor || a[b].constructor == cG) && (this[this.items.length] = this.items[this.items.length] = a[b], this.length++)
        },
        cH = cG.prototype;
    cH.push = function() {
        var a,
            b;
        for (var c = 0, d = arguments.length; c < d; c++)
            a = arguments[c], a && (a.constructor == cl.constructor || a.constructor == cG) && (b = this.items.length, this[b] = this.items[b] = a, this.length++);
        return this
    }, cH.pop = function() {
        this.length && delete this[this.length--];
        return this.items.pop()
    }, cH.forEach = function(a, b) {
        for (var c = 0, d = this.items.length; c < d; c++)
            if (a.call(b, this.items[c], c) === !1)
                return this;
        return this
    };
    for (var cI in cl)
        cl[g](cI) && (cH[cI] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a][m](c, b)
                })
            }
        }(cI));
    cH.attr = function(b, c) {
        if (b && a.is(b, E) && a.is(b[0], "object"))
            for (var d = 0, e = b.length; d < e; d++)
                this.items[d].attr(b[d]);
        else
            for (var f = 0, g = this.items.length; f < g; f++)
                this.items[f].attr(b, c);
        return this
    }, cH.clear = function() {
        while (this.length)
            this.pop()
    }, cH.splice = function(a, b, c) {
        a = a < 0 ? x(this.length + a, 0) : a, b = x(0, y(this.length - a, b));
        var d = [],
            e = [],
            f = [],
            g;
        for (g = 2; g < arguments.length; g++)
            f.push(arguments[g]);
        for (g = 0; g < b; g++)
            e.push(this[a + g]);
        for (; g < this.length - a; g++)
            d.push(this[a + g]);
        var h = f.length;
        for (g = 0; g < h + d.length; g++)
            this.items[a + g] = this[a + g] = g < h ? f[g] : d[g - h];
        g = this.items.length = this.length -= b - h;
        while (this[g])
            delete this[g++];
        return new cG(e)
    }, cH.exclude = function(a) {
        for (var b = 0, c = this.length; b < c; b++)
            if (this[b] == a) {
                this.splice(b, 1);
                return !0
            }
    }, cH.animate = function(b, c, d, e) {
        (a.is(d, "function") || !d) && (e = d || null);
        var f = this.items.length,
            g = f,
            h,
            i = this,
            j;
        if (!f)
            return this;
        e && (j = function() {
            !--f && e.call(i)
        }), d = a.is(d, D) ? d : j;
        var k = a.animation(b, c, d, j);
        h = this.items[--g].animate(k);
        while (g--)
            this.items[g] && !this.items[g].removed && this.items[g].animateWith(h, k, k);
        return this
    }, cH.insertAfter = function(a) {
        var b = this.items.length;
        while (b--)
            this.items[b].insertAfter(a);
        return this
    }, cH.getBBox = function() {
        var a = [],
            b = [],
            c = [],
            d = [];
        for (var e = this.items.length; e--;)
            if (!this.items[e].removed) {
                var f = this.items[e].getBBox();
                a.push(f.x), b.push(f.y), c.push(f.x + f.width), d.push(f.y + f.height)
            }
        a = y[m](0, a), b = y[m](0, b), c = x[m](0, c), d = x[m](0, d);
        return {
            x: a,
            y: b,
            x2: c,
            y2: d,
            width: c - a,
            height: d - b
        }
    }, cH.clone = function(a) {
        a = new cG;
        for (var b = 0, c = this.items.length; b < c; b++)
            a.push(this.items[b].clone());
        return a
    }, cH.toString = function() {
        return "Raphaël‘s set"
    }, a.registerFont = function(a) {
        if (!a.face)
            return a;
        this.fonts = this.fonts || {};
        var b = {
                w: a.w,
                face: {},
                glyphs: {}
            },
            c = a.face["font-family"];
        for (var d in a.face)
            a.face[g](d) && (b.face[d] = a.face[d]);
        this.fonts[c] ? this.fonts[c].push(b) : this.fonts[c] = [b];
        if (!a.svg) {
            b.face["units-per-em"] = R(a.face["units-per-em"], 10);
            for (var e in a.glyphs)
                if (a.glyphs[g](e)) {
                    var f = a.glyphs[e];
                    b.glyphs[e] = {
                        w: f.w,
                        k: {},
                        d: f.d && "M" + f.d.replace(/[mlcxtrv]/g, function(a) {
                            return {
                                    l: "L",
                                    c: "C",
                                    x: "z",
                                    t: "m",
                                    r: "l",
                                    v: "c"
                                }[a] || "M"
                        }) + "z"
                    };
                    if (f.k)
                        for (var h in f.k)
                            f[g](h) && (b.glyphs[e].k[h] = f.k[h])
                }
        }
        return a
    }, k.getFont = function(b, c, d, e) {
        e = e || "normal", d = d || "normal", c = +c || {
            normal: 400,
            bold: 700,
            lighter: 300,
            bolder: 800
        }[c] || 400;
        if (!!a.fonts) {
            var f = a.fonts[b];
            if (!f) {
                var h = new RegExp("(^|\\s)" + b.replace(/[^\w\d\s+!~.:_-]/g, p) + "(\\s|$)", "i");
                for (var i in a.fonts)
                    if (a.fonts[g](i) && h.test(i)) {
                        f = a.fonts[i];
                        break
                    }
            }
            var j;
            if (f)
                for (var k = 0, l = f.length; k < l; k++) {
                    j = f[k];
                    if (j.face["font-weight"] == c && (j.face["font-style"] == d || !j.face["font-style"]) && j.face["font-stretch"] == e)
                        break
                }
            return j
        }
    }, k.print = function(b, d, e, f, g, h, i) {
        h = h || "middle", i = x(y(i || 0, 1), -1);
        var j = r(e)[s](p),
            k = 0,
            l = 0,
            m = p,
            n;
        a.is(f, e) && (f = this.getFont(f));
        if (f) {
            n = (g || 16) / f.face["units-per-em"];
            var o = f.face.bbox[s](c),
                q = +o[0],
                t = o[3] - o[1],
                u = 0,
                v = +o[1] + (h == "baseline" ? t + +f.face.descent : t / 2);
            for (var w = 0, z = j.length; w < z; w++) {
                if (j[w] == "\n")
                    k = 0, B = 0, l = 0, u += t;
                else {
                    var A = l && f.glyphs[j[w - 1]] || {},
                        B = f.glyphs[j[w]];
                    k += l ? (A.w || f.w) + (A.k && A.k[j[w]] || 0) + f.w * i : 0, l = 1
                }
                B && B.d && (m += a.transformPath(B.d, ["t", k * n, u * n, "s", n, n, q, v, "t", (b - q) / n, (d - v) / n]))
            }
        }
        return this.path(m).attr({
            fill: "#000",
            stroke: "none"
        })
    }, k.add = function(b) {
        if (a.is(b, "array")) {
            var c = this.set(),
                e = 0,
                f = b.length,
                h;
            for (; e < f; e++)
                h = b[e] || {}, d[g](h.type) && c.push(this[h.type]().attr(h))
        }
        return c
    }, a.format = function(b, c) {
        var d = a.is(c, E) ? [0][n](c) : arguments;
        b && a.is(b, D) && d.length - 1 && (b = b.replace(e, function(a, b) {
            return d[++b] == null ? p : d[b]
        }));
        return b || p
    }, a.fullfill = function() {
        var a = /\{([^\}]+)\}/g,
            b = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
            c = function(a, c, d) {
                var e = d;
                c.replace(b, function(a, b, c, d, f) {
                    b = b || d, e && (b in e && (e = e[b]), typeof e == "function" && f && (e = e()))
                }), e = (e == null || e == d ? a : e) + "";
                return e
            };
        return function(b, d) {
            return String(b).replace(a, function(a, b) {
                return c(a, b, d)
            })
        }
    }(), a.ninja = function() {
        i.was ? h.win.Raphael = i.is : delete Raphael;
        return a
    }, a.st = cH, function(b, c, d) {
        function e() {
            /in/.test(b.readyState) ? setTimeout(e, 9) : a.eve("raphael.DOMload")
        }
        b.readyState == null && b.addEventListener && (b.addEventListener(c, d = function() {
            b.removeEventListener(c, d, !1), b.readyState = "complete"
        }, !1), b.readyState = "loading"), e()
    }(document, "DOMContentLoaded"), i.was ? h.win.Raphael = a : Raphael = a, eve.on("raphael.DOMload", function() {
        b = !0
    })
}(), window.Raphael.svg && function(a) {
    var b = "hasOwnProperty",
        c = String,
        d = parseFloat,
        e = parseInt,
        f = Math,
        g = f.max,
        h = f.abs,
        i = f.pow,
        j = /[, ]+/,
        k = a.eve,
        l = "",
        m = " ",
        n = "http://www.w3.org/1999/xlink",
        o = {
            block: "M5,0 0,2.5 5,5z",
            classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
            diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
            open: "M6,1 1,3.5 6,6",
            oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
        },
        p = {};
    a.toString = function() {
        return "Your browser supports SVG.\nYou are running Raphaël " + this.version
    };
    var q = function(d, e) {
            if (e) {
                typeof d == "string" && (d = q(d));
                for (var f in e)
                    e[b](f) && (f.substring(0, 6) == "xlink:" ? d.setAttributeNS(n, f.substring(6), c(e[f])) : d.setAttribute(f, c(e[f])))
            } else
                d = a._g.doc.createElementNS("http://www.w3.org/2000/svg", d), d.style && (d.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
            return d
        },
        r = function(b, e) {
            var j = "linear",
                k = b.id + e,
                m = .5,
                n = .5,
                o = b.node,
                p = b.paper,
                r = o.style,
                s = a._g.doc.getElementById(k);
            if (!s) {
                e = c(e).replace(a._radial_gradient, function(a, b, c) {
                    j = "radial";
                    if (b && c) {
                        m = d(b), n = d(c);
                        var e = (n > .5) * 2 - 1;
                        i(m - .5, 2) + i(n - .5, 2) > .25 && (n = f.sqrt(.25 - i(m - .5, 2)) * e + .5) && n != .5 && (n = n.toFixed(5) - 1e-5 * e)
                    }
                    return l
                }), e = e.split(/\s*\-\s*/);
                if (j == "linear") {
                    var t = e.shift();
                    t = -d(t);
                    if (isNaN(t))
                        return null;
                    var u = [0, 0, f.cos(a.rad(t)), f.sin(a.rad(t))],
                        v = 1 / (g(h(u[2]), h(u[3])) || 1);
                    u[2] *= v, u[3] *= v, u[2] < 0 && (u[0] = -u[2], u[2] = 0), u[3] < 0 && (u[1] = -u[3], u[3] = 0)
                }
                var w = a._parseDots(e);
                if (!w)
                    return null;
                k = k.replace(/[\(\)\s,\xb0#]/g, "_"), b.gradient && k != b.gradient.id && (p.defs.removeChild(b.gradient), delete b.gradient);
                if (!b.gradient) {
                    s = q(j + "Gradient", {
                        id: k
                    }), b.gradient = s, q(s, j == "radial" ? {
                        fx: m,
                        fy: n
                    } : {
                        x1: u[0],
                        y1: u[1],
                        x2: u[2],
                        y2: u[3],
                        gradientTransform: b.matrix.invert()
                    }), p.defs.appendChild(s);
                    for (var x = 0, y = w.length; x < y; x++)
                        s.appendChild(q("stop", {
                            offset: w[x].offset ? w[x].offset : x ? "100%" : "0%",
                            "stop-color": w[x].color || "#fff"
                        }))
                }
            }
            q(o, {
                fill: "url(#" + k + ")",
                opacity: 1,
                "fill-opacity": 1
            }), r.fill = l, r.opacity = 1, r.fillOpacity = 1;
            return 1
        },
        s = function(a) {
            var b = a.getBBox(1);
            q(a.pattern, {
                patternTransform: a.matrix.invert() + " translate(" + b.x + "," + b.y + ")"
            })
        },
        t = function(d, e, f) {
            if (d.type == "path") {
                var g = c(e).toLowerCase().split("-"),
                    h = d.paper,
                    i = f ? "end" : "start",
                    j = d.node,
                    k = d.attrs,
                    m = k["stroke-width"],
                    n = g.length,
                    r = "classic",
                    s,
                    t,
                    u,
                    v,
                    w,
                    x = 3,
                    y = 3,
                    z = 5;
                while (n--)
                    switch (g[n]) {
                    case "block":
                    case "classic":
                    case "oval":
                    case "diamond":
                    case "open":
                    case "none":
                        r = g[n];
                        break;
                    case "wide":
                        y = 5;
                        break;
                    case "narrow":
                        y = 2;
                        break;
                    case "long":
                        x = 5;
                        break;
                    case "short":
                        x = 2
                    }
                r == "open" ? (x += 2, y += 2, z += 2, u = 1, v = f ? 4 : 1, w = {
                    fill: "none",
                    stroke: k.stroke
                }) : (v = u = x / 2, w = {
                    fill: k.stroke,
                    stroke: "none"
                }), d._.arrows ? f ? (d._.arrows.endPath && p[d._.arrows.endPath]--, d._.arrows.endMarker && p[d._.arrows.endMarker]--) : (d._.arrows.startPath && p[d._.arrows.startPath]--, d._.arrows.startMarker && p[d._.arrows.startMarker]--) : d._.arrows = {};
                if (r != "none") {
                    var A = "raphael-marker-" + r,
                        B = "raphael-marker-" + i + r + x + y;
                    a._g.doc.getElementById(A) ? p[A]++ : (h.defs.appendChild(q(q("path"), {
                        "stroke-linecap": "round",
                        d: o[r],
                        id: A
                    })), p[A] = 1);
                    var C = a._g.doc.getElementById(B),
                        D;
                    C ? (p[B]++, D = C.getElementsByTagName("use")[0]) : (C = q(q("marker"), {
                        id: B,
                        markerHeight: y,
                        markerWidth: x,
                        orient: "auto",
                        refX: v,
                        refY: y / 2
                    }), D = q(q("use"), {
                        "xlink:href": "#" + A,
                        transform: (f ? "rotate(180 " + x / 2 + " " + y / 2 + ") " : l) + "scale(" + x / z + "," + y / z + ")",
                        "stroke-width": (1 / ((x / z + y / z) / 2)).toFixed(4)
                    }), C.appendChild(D), h.defs.appendChild(C), p[B] = 1), q(D, w);
                    var F = u * (r != "diamond" && r != "oval");
                    f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - F * m) : (s = F * m, t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), w = {}, w["marker-" + i] = "url(#" + B + ")";
                    if (t || s)
                        w.d = Raphael.getSubpath(k.path, s, t);
                    q(j, w), d._.arrows[i + "Path"] = A, d._.arrows[i + "Marker"] = B, d._.arrows[i + "dx"] = F, d._.arrows[i + "Type"] = r, d._.arrows[i + "String"] = e
                } else
                    f ? (s = d._.arrows.startdx * m || 0, t = a.getTotalLength(k.path) - s) : (s = 0, t = a.getTotalLength(k.path) - (d._.arrows.enddx * m || 0)), d._.arrows[i + "Path"] && q(j, {
                        d: Raphael.getSubpath(k.path, s, t)
                    }), delete d._.arrows[i + "Path"], delete d._.arrows[i + "Marker"], delete d._.arrows[i + "dx"], delete d._.arrows[i + "Type"], delete d._.arrows[i + "String"];
                for (w in p)
                    if (p[b](w) && !p[w]) {
                        var G = a._g.doc.getElementById(w);
                        G && G.parentNode.removeChild(G)
                    }
            }
        },
        u = {
            "": [0],
            none: [0],
            "-": [3, 1],
            ".": [1, 1],
            "-.": [3, 1, 1, 1],
            "-..": [3, 1, 1, 1, 1, 1],
            ". ": [1, 3],
            "- ": [4, 3],
            "--": [8, 3],
            "- .": [4, 3, 1, 3],
            "--.": [8, 3, 1, 3],
            "--..": [8, 3, 1, 3, 1, 3]
        },
        v = function(a, b, d) {
            b = u[c(b).toLowerCase()];
            if (b) {
                var e = a.attrs["stroke-width"] || "1",
                    f = {
                        round: e,
                        square: e,
                        butt: 0
                    }[a.attrs["stroke-linecap"] || d["stroke-linecap"]] || 0,
                    g = [],
                    h = b.length;
                while (h--)
                    g[h] = b[h] * e + (h % 2 ? 1 : -1) * f;
                q(a.node, {
                    "stroke-dasharray": g.join(",")
                })
            }
        },
        w = function(d, f) {
            var i = d.node,
                k = d.attrs,
                m = i.style.visibility;
            i.style.visibility = "hidden";
            for (var o in f)
                if (f[b](o)) {
                    if (!a._availableAttrs[b](o))
                        continue;
                    var p = f[o];
                    k[o] = p;
                    switch (o) {
                    case "blur":
                        d.blur(p);
                        break;
                    case "href":
                    case "title":
                    case "target":
                        var u = i.parentNode;
                        if (u.tagName.toLowerCase() != "a") {
                            var w = q("a");
                            u.insertBefore(w, i), w.appendChild(i), u = w
                        }
                        o == "target" ? u.setAttributeNS(n, "show", p == "blank" ? "new" : p) : u.setAttributeNS(n, o, p);
                        break;
                    case "cursor":
                        i.style.cursor = p;
                        break;
                    case "transform":
                        d.transform(p);
                        break;
                    case "arrow-start":
                        t(d, p);
                        break;
                    case "arrow-end":
                        t(d, p, 1);
                        break;
                    case "clip-rect":
                        var x = c(p).split(j);
                        if (x.length == 4) {
                            d.clip && d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);
                            var z = q("clipPath"),
                                A = q("rect");
                            z.id = a.createUUID(), q(A, {
                                x: x[0],
                                y: x[1],
                                width: x[2],
                                height: x[3]
                            }), z.appendChild(A), d.paper.defs.appendChild(z), q(i, {
                                "clip-path": "url(#" + z.id + ")"
                            }), d.clip = A
                        }
                        if (!p) {
                            var B = i.getAttribute("clip-path");
                            if (B) {
                                var C = a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g, l));
                                C && C.parentNode.removeChild(C), q(i, {
                                    "clip-path": l
                                }), delete d.clip
                            }
                        }
                        break;
                    case "path":
                        d.type == "path" && (q(i, {
                            d: p ? k.path = a._pathToAbsolute(p) : "M0,0"
                        }), d._.dirty = 1, d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1)));
                        break;
                    case "width":
                        i.setAttribute(o, p), d._.dirty = 1;
                        if (k.fx)
                            o = "x", p = k.x;
                        else
                            break;
                    case "x":
                        k.fx && (p = -k.x - (k.width || 0));
                    case "rx":
                        if (o == "rx" && d.type == "rect")
                            break;
                    case "cx":
                        i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                        break;
                    case "height":
                        i.setAttribute(o, p), d._.dirty = 1;
                        if (k.fy)
                            o = "y", p = k.y;
                        else
                            break;
                    case "y":
                        k.fy && (p = -k.y - (k.height || 0));
                    case "ry":
                        if (o == "ry" && d.type == "rect")
                            break;
                    case "cy":
                        i.setAttribute(o, p), d.pattern && s(d), d._.dirty = 1;
                        break;
                    case "r":
                        d.type == "rect" ? q(i, {
                            rx: p,
                            ry: p
                        }) : i.setAttribute(o, p), d._.dirty = 1;
                        break;
                    case "src":
                        d.type == "image" && i.setAttributeNS(n, "href", p);
                        break;
                    case "stroke-width":
                        if (d._.sx != 1 || d._.sy != 1)
                            p /= g(h(d._.sx), h(d._.sy)) || 1;
                        d.paper._vbSize && (p *= d.paper._vbSize), i.setAttribute(o, p), k["stroke-dasharray"] && v(d, k["stroke-dasharray"], f), d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                        break;
                    case "stroke-dasharray":
                        v(d, p, f);
                        break;
                    case "fill":
                        var D = c(p).match(a._ISURL);
                        if (D) {
                            z = q("pattern");
                            var F = q("image");
                            z.id = a.createUUID(), q(z, {
                                x: 0,
                                y: 0,
                                patternUnits: "userSpaceOnUse",
                                height: 1,
                                width: 1
                            }), q(F, {
                                x: 0,
                                y: 0,
                                "xlink:href": D[1]
                            }), z.appendChild(F), function(b) {
                                a._preload(D[1], function() {
                                    var a = this.offsetWidth,
                                        c = this.offsetHeight;
                                    q(b, {
                                        width: a,
                                        height: c
                                    }), q(F, {
                                        width: a,
                                        height: c
                                    }), d.paper.safari()
                                })
                            }(z), d.paper.defs.appendChild(z), q(i, {
                                fill: "url(#" + z.id + ")"
                            }), d.pattern = z, d.pattern && s(d);
                            break
                        }
                        var G = a.getRGB(p);
                        if (!G.error)
                            delete f.gradient, delete k.gradient, !a.is(k.opacity, "undefined") && a.is(f.opacity, "undefined") && q(i, {
                                opacity: k.opacity
                            }), !a.is(k["fill-opacity"], "undefined") && a.is(f["fill-opacity"], "undefined") && q(i, {
                                "fill-opacity": k["fill-opacity"]
                            });
                        else if ((d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && r(d, p)) {
                            if ("opacity" in k || "fill-opacity" in k) {
                                var H = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l));
                                if (H) {
                                    var I = H.getElementsByTagName("stop");
                                    q(I[I.length - 1], {
                                        "stop-opacity": ("opacity" in k ? k.opacity : 1) * ("fill-opacity" in k ? k["fill-opacity"] : 1)
                                    })
                                }
                            }
                            k.gradient = p, k.fill = "none";
                            break
                        }
                        G[b]("opacity") && q(i, {
                            "fill-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                        });
                    case "stroke":
                        G = a.getRGB(p), i.setAttribute(o, G.hex), o == "stroke" && G[b]("opacity") && q(i, {
                            "stroke-opacity": G.opacity > 1 ? G.opacity / 100 : G.opacity
                        }), o == "stroke" && d._.arrows && ("startString" in d._.arrows && t(d, d._.arrows.startString), "endString" in d._.arrows && t(d, d._.arrows.endString, 1));
                        break;
                    case "gradient":
                        (d.type == "circle" || d.type == "ellipse" || c(p).charAt() != "r") && r(d, p);
                        break;
                    case "opacity":
                        k.gradient && !k[b]("stroke-opacity") && q(i, {
                            "stroke-opacity": p > 1 ? p / 100 : p
                        });
                    case "fill-opacity":
                        if (k.gradient) {
                            H = a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g, l)), H && (I = H.getElementsByTagName("stop"), q(I[I.length - 1], {
                                "stop-opacity": p
                            }));
                            break
                        }
                        ;
                    default:
                        o == "font-size" && (p = e(p, 10) + "px");
                        var J = o.replace(/(\-.)/g, function(a) {
                            return a.substring(1).toUpperCase()
                        });
                        i.style[J] = p, d._.dirty = 1, i.setAttribute(o, p)
                    }
                }
            y(d, f), i.style.visibility = m
        },
        x = 1.2,
        y = function(d, f) {
            if (d.type == "text" && !!(f[b]("text") || f[b]("font") || f[b]("font-size") || f[b]("x") || f[b]("y"))) {
                var g = d.attrs,
                    h = d.node,
                    i = h.firstChild ? e(a._g.doc.defaultView.getComputedStyle(h.firstChild, l).getPropertyValue("font-size"), 10) : 10;
                if (f[b]("text")) {
                    g.text = f.text;
                    while (h.firstChild)
                        h.removeChild(h.firstChild);
                    var j = c(f.text).split("\n"),
                        k = [],
                        m;
                    for (var n = 0, o = j.length; n < o; n++)
                        m = q("tspan"), n && q(m, {
                            dy: i * x,
                            x: g.x
                        }), m.appendChild(a._g.doc.createTextNode(j[n])), h.appendChild(m), k[n] = m
                } else {
                    k = h.getElementsByTagName("tspan");
                    for (n = 0, o = k.length; n < o; n++)
                        n ? q(k[n], {
                            dy: i * x,
                            x: g.x
                        }) : q(k[0], {
                            dy: 0
                        })
                }
                q(h, {
                    x: g.x,
                    y: g.y
                }), d._.dirty = 1;
                var p = d._getBBox(),
                    r = g.y - (p.y + p.height / 2);
                r && a.is(r, "finite") && q(k[0], {
                    dy: r
                })
            }
        },
        z = function(b, c) {
            var d = 0,
                e = 0;
            this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.matrix = a.matrix(), this.realPath = null, this.paper = c, this.attrs = this.attrs || {}, this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                deg: 0,
                dx: 0,
                dy: 0,
                dirty: 1
            }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
        },
        A = a.el;
    z.prototype = A, A.constructor = z, a._engine.path = function(a, b) {
        var c = q("path");
        b.canvas && b.canvas.appendChild(c);
        var d = new z(c, b);
        d.type = "path", w(d, {
            fill: "none",
            stroke: "#000",
            path: a
        });
        return d
    }, A.rotate = function(a, b, e) {
        if (this.removed)
            return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
        if (b == null || e == null) {
            var f = this.getBBox(1);
            b = f.x + f.width / 2, e = f.y + f.height / 2
        }
        this.transform(this._.transform.concat([["r", a, b, e]]));
        return this
    }, A.scale = function(a, b, e, f) {
        if (this.removed)
            return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3])), a = d(a[0]), b == null && (b = a), f == null && (e = f);
        if (e == null || f == null)
            var g = this.getBBox(1);
        e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, b, e, f]]));
        return this
    }, A.translate = function(a, b) {
        if (this.removed)
            return this;
        a = c(a).split(j), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this.transform(this._.transform.concat([["t", a, b]]));
        return this
    }, A.transform = function(c) {
        var d = this._;
        if (c == null)
            return d.transform;
        a._extractTransform(this, c), this.clip && q(this.clip, {
            transform: this.matrix.invert()
        }), this.pattern && s(this), this.node && q(this.node, {
            transform: this.matrix
        });
        if (d.sx != 1 || d.sy != 1) {
            var e = this.attrs[b]("stroke-width") ? this.attrs["stroke-width"] : 1;
            this.attr({
                "stroke-width": e
            })
        }
        return this
    }, A.hide = function() {
        !this.removed && this.paper.safari(this.node.style.display = "none");
        return this
    }, A.show = function() {
        !this.removed && this.paper.safari(this.node.style.display = "");
        return this
    }, A.remove = function() {
        if (!this.removed && !!this.node.parentNode) {
            var b = this.paper;
            b.__set__ && b.__set__.exclude(this), k.unbind("raphael.*.*." + this.id), this.gradient && b.defs.removeChild(this.gradient), a._tear(this, b), this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
            for (var c in this)
                this[c] = typeof this[c] == "function" ? a._removedFactory(c) : null;
            this.removed = !0
        }
    }, A._getBBox = function() {
        if (this.node.style.display == "none") {
            this.show();
            var a = !0
        }
        var b = {};
        try {
            b = this.node.getBBox()
        } catch (c) {} finally {
            b = b || {}
        }
        a && this.hide();
        return b
    }, A.attr = function(c, d) {
        if (this.removed)
            return this;
        if (c == null) {
            var e = {};
            for (var f in this.attrs)
                this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e
        }
        if (d == null && a.is(c, "string")) {
            if (c == "fill" && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
            if (c == "transform")
                return this._.transform;
            var g = c.split(j),
                h = {};
            for (var i = 0, l = g.length; i < l; i++)
                c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return l - 1 ? h : h[g[0]]
        }
        if (d == null && a.is(c, "array")) {
            h = {};
            for (i = 0, l = c.length; i < l; i++)
                h[c[i]] = this.attr(c[i]);
            return h
        }
        if (d != null) {
            var m = {};
            m[c] = d
        } else
            c != null && a.is(c, "object") && (m = c);
        for (var n in m)
            k("raphael.attr." + n + "." + this.id, this, m[n]);
        for (n in this.paper.customAttributes)
            if (this.paper.customAttributes[b](n) && m[b](n) && a.is(this.paper.customAttributes[n], "function")) {
                var o = this.paper.customAttributes[n].apply(this, [].concat(m[n]));
                this.attrs[n] = m[n];
                for (var p in o)
                    o[b](p) && (m[p] = o[p])
            }
        w(this, m);
        return this
    }, A.toFront = function() {
        if (this.removed)
            return this;
        this.node.parentNode.tagName.toLowerCase() == "a" ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
        var b = this.paper;
        b.top != this && a._tofront(this, b);
        return this
    }, A.toBack = function() {
        if (this.removed)
            return this;
        var b = this.node.parentNode;
        b.tagName.toLowerCase() == "a" ? b.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : b.firstChild != this.node && b.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper);
        var c = this.paper;
        return this
    }, A.insertAfter = function(b) {
        if (this.removed)
            return this;
        var c = b.node || b[b.length - 1].node;
        c.nextSibling ? c.parentNode.insertBefore(this.node, c.nextSibling) : c.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
        return this
    }, A.insertBefore = function(b) {
        if (this.removed)
            return this;
        var c = b.node || b[0].node;
        c.parentNode.insertBefore(this.node, c), a._insertbefore(this, b, this.paper);
        return this
    }, A.blur = function(b) {
        var c = this;
        if (+b !== 0) {
            var d = q("filter"),
                e = q("feGaussianBlur");
            c.attrs.blur = b, d.id = a.createUUID(), q(e, {
                stdDeviation: +b || 1.5
            }), d.appendChild(e), c.paper.defs.appendChild(d), c._blur = d, q(c.node, {
                filter: "url(#" + d.id + ")"
            })
        } else
            c._blur && (c._blur.parentNode.removeChild(c._blur), delete c._blur, delete c.attrs.blur), c.node.removeAttribute("filter")
    }, a._engine.circle = function(a, b, c, d) {
        var e = q("circle");
        a.canvas && a.canvas.appendChild(e);
        var f = new z(e, a);
        f.attrs = {
            cx: b,
            cy: c,
            r: d,
            fill: "none",
            stroke: "#000"
        }, f.type = "circle", q(e, f.attrs);
        return f
    }, a._engine.rect = function(a, b, c, d, e, f) {
        var g = q("rect");
        a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = {
            x: b,
            y: c,
            width: d,
            height: e,
            r: f || 0,
            rx: f || 0,
            ry: f || 0,
            fill: "none",
            stroke: "#000"
        }, h.type = "rect", q(g, h.attrs);
        return h
    }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = q("ellipse");
        a.canvas && a.canvas.appendChild(f);
        var g = new z(f, a);
        g.attrs = {
            cx: b,
            cy: c,
            rx: d,
            ry: e,
            fill: "none",
            stroke: "#000"
        }, g.type = "ellipse", q(f, g.attrs);
        return g
    }, a._engine.image = function(a, b, c, d, e, f) {
        var g = q("image");
        q(g, {
            x: c,
            y: d,
            width: e,
            height: f,
            preserveAspectRatio: "none"
        }), g.setAttributeNS(n, "href", b), a.canvas && a.canvas.appendChild(g);
        var h = new z(g, a);
        h.attrs = {
            x: c,
            y: d,
            width: e,
            height: f,
            src: b
        }, h.type = "image";
        return h
    }, a._engine.text = function(b, c, d, e) {
        var f = q("text");
        b.canvas && b.canvas.appendChild(f);
        var g = new z(f, b);
        g.attrs = {
            x: c,
            y: d,
            "text-anchor": "middle",
            text: e,
            font: a._availableAttrs.font,
            stroke: "none",
            fill: "#000"
        }, g.type = "text", w(g, g.attrs);
        return g
    }, a._engine.setSize = function(a, b) {
        this.width = a || this.width, this.height = b || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox);
        return this
    }, a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments),
            c = b && b.container,
            d = b.x,
            e = b.y,
            f = b.width,
            g = b.height;
        if (!c)
            throw new Error("SVG container not found.");
        var h = q("svg"),
            i = "overflow:hidden;",
            j;
        d = d || 0, e = e || 0, f = f || 512, g = g || 342, q(h, {
            height: g,
            version: 1.1,
            width: f,
            xmlns: "http://www.w3.org/2000/svg"
        }), c == 1 ? (h.style.cssText = i + "position:absolute;left:" + d + "px;top:" + e + "px", a._g.doc.body.appendChild(h), j = 1) : (h.style.cssText = i + "position:relative", c.firstChild ? c.insertBefore(h, c.firstChild) : c.appendChild(h)), c = new a._Paper, c.width = f, c.height = g, c.canvas = h, c.clear(), c._left = c._top = 0, j && (c.renderfix = function() {}), c.renderfix();
        return c
    }, a._engine.setViewBox = function(a, b, c, d, e) {
        k("raphael.setViewBox", this, this._viewBox, [a, b, c, d, e]);
        var f = g(c / this.width, d / this.height),
            h = this.top,
            i = e ? "meet" : "xMinYMin",
            j,
            l;
        a == null ? (this._vbSize && (f = 1), delete this._vbSize, j = "0 0 " + this.width + m + this.height) : (this._vbSize = f, j = a + m + b + m + c + m + d), q(this.canvas, {
            viewBox: j,
            preserveAspectRatio: i
        });
        while (f && h)
            l = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
                "stroke-width": l
            }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
        this._viewBox = [a, b, c, d, !!e];
        return this
    }, a.prototype.renderfix = function() {
        var a = this.canvas,
            b = a.style,
            c;
        try {
            c = a.getScreenCTM() || a.createSVGMatrix()
        } catch (d) {
            c = a.createSVGMatrix()
        }
        var e = -c.e % 1,
            f = -c.f % 1;
        if (e || f)
            e && (this._left = (this._left + e) % 1, b.left = this._left + "px"), f && (this._top = (this._top + f) % 1, b.top = this._top + "px")
    }, a.prototype.clear = function() {
        a.eve("raphael.clear", this);
        var b = this.canvas;
        while (b.firstChild)
            b.removeChild(b.firstChild);
        this.bottom = this.top = null, (this.desc = q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël " + a.version)), b.appendChild(this.desc), b.appendChild(this.defs = q("defs"))
    }, a.prototype.remove = function() {
        k("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this)
            this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null
    };
    var B = a.st;
    for (var C in A)
        A[b](C) && !B[b](C) && (B[C] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a].apply(c, b)
                })
            }
        }(C))
}(window.Raphael), window.Raphael.vml && function(a) {
    var b = "hasOwnProperty",
        c = String,
        d = parseFloat,
        e = Math,
        f = e.round,
        g = e.max,
        h = e.min,
        i = e.abs,
        j = "fill",
        k = /[, ]+/,
        l = a.eve,
        m = " progid:DXImageTransform.Microsoft",
        n = " ",
        o = "",
        p = {
            M: "m",
            L: "l",
            C: "c",
            Z: "x",
            m: "t",
            l: "r",
            c: "v",
            z: "x"
        },
        q = /([clmz]),?([^clmz]*)/gi,
        r = / progid:\S+Blur\([^\)]+\)/g,
        s = /-?[^,\s-]+/g,
        t = "position:absolute;left:0;top:0;width:1px;height:1px",
        u = 21600,
        v = {
            path: 1,
            rect: 1,
            image: 1
        },
        w = {
            circle: 1,
            ellipse: 1
        },
        x = function(b) {
            var d = /[ahqstv]/ig,
                e = a._pathToAbsolute;
            c(b).match(d) && (e = a._path2curve), d = /[clmz]/g;
            if (e == a._pathToAbsolute && !c(b).match(d)) {
                var g = c(b).replace(q, function(a, b, c) {
                    var d = [],
                        e = b.toLowerCase() == "m",
                        g = p[b];
                    c.replace(s, function(a) {
                        e && d.length == 2 && (g += d + p[b == "m" ? "l" : "L"], d = []), d.push(f(a * u))
                    });
                    return g + d
                });
                return g
            }
            var h = e(b),
                i,
                j;
            g = [];
            for (var k = 0, l = h.length; k < l; k++) {
                i = h[k], j = h[k][0].toLowerCase(), j == "z" && (j = "x");
                for (var m = 1, r = i.length; m < r; m++)
                    j += f(i[m] * u) + (m != r - 1 ? "," : o);
                g.push(j)
            }
            return g.join(n)
        },
        y = function(b, c, d) {
            var e = a.matrix();
            e.rotate(-b, .5, .5);
            return {
                dx: e.x(c, d),
                dy: e.y(c, d)
            }
        },
        z = function(a, b, c, d, e, f) {
            var g = a._,
                h = a.matrix,
                k = g.fillpos,
                l = a.node,
                m = l.style,
                o = 1,
                p = "",
                q,
                r = u / b,
                s = u / c;
            m.visibility = "hidden";
            if (!!b && !!c) {
                l.coordsize = i(r) + n + i(s), m.rotation = f * (b * c < 0 ? -1 : 1);
                if (f) {
                    var t = y(f, d, e);
                    d = t.dx, e = t.dy
                }
                b < 0 && (p += "x"), c < 0 && (p += " y") && (o = -1), m.flip = p, l.coordorigin = d * -r + n + e * -s;
                if (k || g.fillsize) {
                    var v = l.getElementsByTagName(j);
                    v = v && v[0], l.removeChild(v), k && (t = y(f, h.x(k[0], k[1]), h.y(k[0], k[1])), v.position = t.dx * o + n + t.dy * o), g.fillsize && (v.size = g.fillsize[0] * i(b) + n + g.fillsize[1] * i(c)), l.appendChild(v)
                }
                m.visibility = "visible"
            }
        };
    a.toString = function() {
        return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
    };
    var A = function(a, b, d) {
            var e = c(b).toLowerCase().split("-"),
                f = d ? "end" : "start",
                g = e.length,
                h = "classic",
                i = "medium",
                j = "medium";
            while (g--)
                switch (e[g]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                    h = e[g];
                    break;
                case "wide":
                case "narrow":
                    j = e[g];
                    break;
                case "long":
                case "short":
                    i = e[g]
                }
            var k = a.node.getElementsByTagName("stroke")[0];
            k[f + "arrow"] = h, k[f + "arrowlength"] = i, k[f + "arrowwidth"] = j
        },
        B = function(e, i) {
            e.attrs = e.attrs || {};
            var l = e.node,
                m = e.attrs,
                p = l.style,
                q,
                r = v[e.type] && (i.x != m.x || i.y != m.y || i.width != m.width || i.height != m.height || i.cx != m.cx || i.cy != m.cy || i.rx != m.rx || i.ry != m.ry || i.r != m.r),
                s = w[e.type] && (m.cx != i.cx || m.cy != i.cy || m.r != i.r || m.rx != i.rx || m.ry != i.ry),
                t = e;
            for (var y in i)
                i[b](y) && (m[y] = i[y]);
            r && (m.path = a._getPath[e.type](e), e._.dirty = 1), i.href && (l.href = i.href), i.title && (l.title = i.title), i.target && (l.target = i.target), i.cursor && (p.cursor = i.cursor), "blur" in i && e.blur(i.blur);
            if (i.path && e.type == "path" || r)
                l.path = x(~c(m.path).toLowerCase().indexOf("r") ? a._pathToAbsolute(m.path) : m.path), e.type == "image" && (e._.fillpos = [m.x, m.y], e._.fillsize = [m.width, m.height], z(e, 1, 1, 0, 0, 0));
            "transform" in i && e.transform(i.transform);
            if (s) {
                var B = +m.cx,
                    D = +m.cy,
                    E = +m.rx || +m.r || 0,
                    G = +m.ry || +m.r || 0;
                l.path = a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", f((B - E) * u), f((D - G) * u), f((B + E) * u), f((D + G) * u), f(B * u))
            }
            if ("clip-rect" in i) {
                var H = c(i["clip-rect"]).split(k);
                if (H.length == 4) {
                    H[2] = +H[2] + +H[0], H[3] = +H[3] + +H[1];
                    var I = l.clipRect || a._g.doc.createElement("div"),
                        J = I.style;
                    J.clip = a.format("rect({1}px {2}px {3}px {0}px)", H), l.clipRect || (J.position = "absolute", J.top = 0, J.left = 0, J.width = e.paper.width + "px", J.height = e.paper.height + "px", l.parentNode.insertBefore(I, l), I.appendChild(l), l.clipRect = I)
                }
                i["clip-rect"] || l.clipRect && (l.clipRect.style.clip = "auto")
            }
            if (e.textpath) {
                var K = e.textpath.style;
                i.font && (K.font = i.font), i["font-family"] && (K.fontFamily = '"' + i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, o) + '"'), i["font-size"] && (K.fontSize = i["font-size"]), i["font-weight"] && (K.fontWeight = i["font-weight"]), i["font-style"] && (K.fontStyle = i["font-style"])
            }
            "arrow-start" in i && A(t, i["arrow-start"]), "arrow-end" in i && A(t, i["arrow-end"], 1);
            if (i.opacity != null || i["stroke-width"] != null || i.fill != null || i.src != null || i.stroke != null || i["stroke-width"] != null || i["stroke-opacity"] != null || i["fill-opacity"] != null || i["stroke-dasharray"] != null || i["stroke-miterlimit"] != null || i["stroke-linejoin"] != null || i["stroke-linecap"] != null) {
                var L = l.getElementsByTagName(j),
                    M = !1;
                L = L && L[0], !L && (M = L = F(j)), e.type == "image" && i.src && (L.src = i.src), i.fill && (L.on = !0);
                if (L.on == null || i.fill == "none" || i.fill === null)
                    L.on = !1;
                if (L.on && i.fill) {
                    var N = c(i.fill).match(a._ISURL);
                    if (N) {
                        L.parentNode == l && l.removeChild(L), L.rotate = !0, L.src = N[1], L.type = "tile";
                        var O = e.getBBox(1);
                        L.position = O.x + n + O.y, e._.fillpos = [O.x, O.y], a._preload(N[1], function() {
                            e._.fillsize = [this.offsetWidth, this.offsetHeight]
                        })
                    } else
                        L.color = a.getRGB(i.fill).hex, L.src = o, L.type = "solid", a.getRGB(i.fill).error && (t.type in {
                            circle: 1,
                            ellipse: 1
                        } || c(i.fill).charAt() != "r") && C(t, i.fill, L) && (m.fill = "none", m.gradient = i.fill, L.rotate = !1)
                }
                if ("fill-opacity" in i || "opacity" in i) {
                    var P = ((+m["fill-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+a.getRGB(i.fill).o + 1 || 2) - 1);
                    P = h(g(P, 0), 1), L.opacity = P, L.src && (L.color = "none")
                }
                l.appendChild(L);
                var Q = l.getElementsByTagName("stroke") && l.getElementsByTagName("stroke")[0],
                    T = !1;
                !Q && (T = Q = F("stroke"));
                if (i.stroke && i.stroke != "none" || i["stroke-width"] || i["stroke-opacity"] != null || i["stroke-dasharray"] || i["stroke-miterlimit"] || i["stroke-linejoin"] || i["stroke-linecap"])
                    Q.on = !0;
                (i.stroke == "none" || i.stroke === null || Q.on == null || i.stroke == 0 || i["stroke-width"] == 0) && (Q.on = !1);
                var U = a.getRGB(i.stroke);
                Q.on && i.stroke && (Q.color = U.hex), P = ((+m["stroke-opacity"] + 1 || 2) - 1) * ((+m.opacity + 1 || 2) - 1) * ((+U.o + 1 || 2) - 1);
                var V = (d(i["stroke-width"]) || 1) * .75;
                P = h(g(P, 0), 1), i["stroke-width"] == null && (V = m["stroke-width"]), i["stroke-width"] && (Q.weight = V), V && V < 1 && (P *= V) && (Q.weight = 1), Q.opacity = P, i["stroke-linejoin"] && (Q.joinstyle = i["stroke-linejoin"] || "miter"), Q.miterlimit = i["stroke-miterlimit"] || 8, i["stroke-linecap"] && (Q.endcap = i["stroke-linecap"] == "butt" ? "flat" : i["stroke-linecap"] == "square" ? "square" : "round");
                if (i["stroke-dasharray"]) {
                    var W = {
                        "-": "shortdash",
                        ".": "shortdot",
                        "-.": "shortdashdot",
                        "-..": "shortdashdotdot",
                        ". ": "dot",
                        "- ": "dash",
                        "--": "longdash",
                        "- .": "dashdot",
                        "--.": "longdashdot",
                        "--..": "longdashdotdot"
                    };
                    Q.dashstyle = W[b](i["stroke-dasharray"]) ? W[i["stroke-dasharray"]] : o
                }
                T && l.appendChild(Q)
            }
            if (t.type == "text") {
                t.paper.canvas.style.display = o;
                var X = t.paper.span,
                    Y = 100,
                    Z = m.font && m.font.match(/\d+(?:\.\d*)?(?=px)/);
                p = X.style, m.font && (p.font = m.font), m["font-family"] && (p.fontFamily = m["font-family"]), m["font-weight"] && (p.fontWeight = m["font-weight"]), m["font-style"] && (p.fontStyle = m["font-style"]), Z = d(m["font-size"] || Z && Z[0]) || 10, p.fontSize = Z * Y + "px", t.textpath.string && (X.innerHTML = c(t.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                var $ = X.getBoundingClientRect();
                t.W = m.w = ($.right - $.left) / Y, t.H = m.h = ($.bottom - $.top) / Y, t.X = m.x, t.Y = m.y + t.H / 2, ("x" in i || "y" in i) && (t.path.v = a.format("m{0},{1}l{2},{1}", f(m.x * u), f(m.y * u), f(m.x * u) + 1));
                var _ = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"];
                for (var ba = 0, bb = _.length; ba < bb; ba++)
                    if (_[ba] in i) {
                        t._.dirty = 1;
                        break
                    }
                switch (m["text-anchor"]) {
                case "start":
                    t.textpath.style["v-text-align"] = "left", t.bbx = t.W / 2;
                    break;
                case "end":
                    t.textpath.style["v-text-align"] = "right", t.bbx = -t.W / 2;
                    break;
                default:
                    t.textpath.style["v-text-align"] = "center", t.bbx = 0
                }
                t.textpath.style["v-text-kern"] = !0
            }
        },
        C = function(b, f, g) {
            b.attrs = b.attrs || {};
            var h = b.attrs,
                i = Math.pow,
                j,
                k,
                l = "linear",
                m = ".5 .5";
            b.attrs.gradient = f, f = c(f).replace(a._radial_gradient, function(a, b, c) {
                l = "radial", b && c && (b = d(b), c = d(c), i(b - .5, 2) + i(c - .5, 2) > .25 && (c = e.sqrt(.25 - i(b - .5, 2)) * ((c > .5) * 2 - 1) + .5), m = b + n + c);
                return o
            }), f = f.split(/\s*\-\s*/);
            if (l == "linear") {
                var p = f.shift();
                p = -d(p);
                if (isNaN(p))
                    return null
            }
            var q = a._parseDots(f);
            if (!q)
                return null;
            b = b.shape || b.node;
            if (q.length) {
                b.removeChild(g), g.on = !0, g.method = "none", g.color = q[0].color, g.color2 = q[q.length - 1].color;
                var r = [];
                for (var s = 0, t = q.length; s < t; s++)
                    q[s].offset && r.push(q[s].offset + n + q[s].color);
                g.colors = r.length ? r.join() : "0% " + g.color, l == "radial" ? (g.type = "gradientTitle", g.focus = "100%", g.focussize = "0 0", g.focusposition = m, g.angle = 0) : (g.type = "gradient", g.angle = (270 - p) % 360), b.appendChild(g)
            }
            return 1
        },
        D = function(b, c) {
            this[0] = this.node = b, b.raphael = !0, this.id = a._oid++, b.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = c, this.matrix = a.matrix(), this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                dx: 0,
                dy: 0,
                deg: 0,
                dirty: 1,
                dirtyT: 1
            }, !c.bottom && (c.bottom = this), this.prev = c.top, c.top && (c.top.next = this), c.top = this, this.next = null
        },
        E = a.el;
    D.prototype = E, E.constructor = D, E.transform = function(b) {
        if (b == null)
            return this._.transform;
        var d = this.paper._viewBoxShift,
            e = d ? "s" + [d.scale, d.scale] + "-1-1t" + [d.dx, d.dy] : o,
            f;
        d && (f = b = c(b).replace(/\.{3}|\u2026/g, this._.transform || o)), a._extractTransform(this, e + b);
        var g = this.matrix.clone(),
            h = this.skew,
            i = this.node,
            j,
            k = ~c(this.attrs.fill).indexOf("-"),
            l = !c(this.attrs.fill).indexOf("url(");
        g.translate(-0.5, -0.5);
        if (l || k || this.type == "image") {
            h.matrix = "1 0 0 1", h.offset = "0 0", j = g.split();
            if (k && j.noRotation || !j.isSimple) {
                i.style.filter = g.toFilter();
                var m = this.getBBox(),
                    p = this.getBBox(1),
                    q = m.x - p.x,
                    r = m.y - p.y;
                i.coordorigin = q * -u + n + r * -u, z(this, 1, 1, q, r, 0)
            } else
                i.style.filter = o, z(this, j.scalex, j.scaley, j.dx, j.dy, j.rotate)
        } else
            i.style.filter = o, h.matrix = c(g), h.offset = g.offset();
        f && (this._.transform = f);
        return this
    }, E.rotate = function(a, b, e) {
        if (this.removed)
            return this;
        if (a != null) {
            a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2])), a = d(a[0]), e == null && (b = e);
            if (b == null || e == null) {
                var f = this.getBBox(1);
                b = f.x + f.width / 2, e = f.y + f.height / 2
            }
            this._.dirtyT = 1, this.transform(this._.transform.concat([["r", a, b, e]]));
            return this
        }
    }, E.translate = function(a, b) {
        if (this.removed)
            return this;
        a = c(a).split(k), a.length - 1 && (b = d(a[1])), a = d(a[0]) || 0, b = +b || 0, this._.bbox && (this._.bbox.x += a, this._.bbox.y += b), this.transform(this._.transform.concat([["t", a, b]]));
        return this
    }, E.scale = function(a, b, e, f) {
        if (this.removed)
            return this;
        a = c(a).split(k), a.length - 1 && (b = d(a[1]), e = d(a[2]), f = d(a[3]), isNaN(e) && (e = null), isNaN(f) && (f = null)), a = d(a[0]), b == null && (b = a), f == null && (e = f);
        if (e == null || f == null)
            var g = this.getBBox(1);
        e = e == null ? g.x + g.width / 2 : e, f = f == null ? g.y + g.height / 2 : f, this.transform(this._.transform.concat([["s", a, b, e, f]])), this._.dirtyT = 1;
        return this
    }, E.hide = function() {
        !this.removed && (this.node.style.display = "none");
        return this
    }, E.show = function() {
        !this.removed && (this.node.style.display = o);
        return this
    }, E._getBBox = function() {
        if (this.removed)
            return {};
        return {
            x: this.X + (this.bbx || 0) - this.W / 2,
            y: this.Y - this.H,
            width: this.W,
            height: this.H
        }
    }, E.remove = function() {
        if (!this.removed && !!this.node.parentNode) {
            this.paper.__set__ && this.paper.__set__.exclude(this), a.eve.unbind("raphael.*.*." + this.id), a._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
            for (var b in this)
                this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null;
            this.removed = !0
        }
    }, E.attr = function(c, d) {
        if (this.removed)
            return this;
        if (c == null) {
            var e = {};
            for (var f in this.attrs)
                this.attrs[b](f) && (e[f] = this.attrs[f]);
            e.gradient && e.fill == "none" && (e.fill = e.gradient) && delete e.gradient, e.transform = this._.transform;
            return e
        }
        if (d == null && a.is(c, "string")) {
            if (c == j && this.attrs.fill == "none" && this.attrs.gradient)
                return this.attrs.gradient;
            var g = c.split(k),
                h = {};
            for (var i = 0, m = g.length; i < m; i++)
                c = g[i], c in this.attrs ? h[c] = this.attrs[c] : a.is(this.paper.customAttributes[c], "function") ? h[c] = this.paper.customAttributes[c].def : h[c] = a._availableAttrs[c];
            return m - 1 ? h : h[g[0]]
        }
        if (this.attrs && d == null && a.is(c, "array")) {
            h = {};
            for (i = 0, m = c.length; i < m; i++)
                h[c[i]] = this.attr(c[i]);
            return h
        }
        var n;
        d != null && (n = {}, n[c] = d), d == null && a.is(c, "object") && (n = c);
        for (var o in n)
            l("raphael.attr." + o + "." + this.id, this, n[o]);
        if (n) {
            for (o in this.paper.customAttributes)
                if (this.paper.customAttributes[b](o) && n[b](o) && a.is(this.paper.customAttributes[o], "function")) {
                    var p = this.paper.customAttributes[o].apply(this, [].concat(n[o]));
                    this.attrs[o] = n[o];
                    for (var q in p)
                        p[b](q) && (n[q] = p[q])
                }
            n.text && this.type == "text" && (this.textpath.string = n.text), B(this, n)
        }
        return this
    }, E.toFront = function() {
        !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && a._tofront(this, this.paper);
        return this
    }, E.toBack = function() {
        if (this.removed)
            return this;
        this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), a._toback(this, this.paper));
        return this
    }, E.insertAfter = function(b) {
        if (this.removed)
            return this;
        b.constructor == a.st.constructor && (b = b[b.length - 1]), b.node.nextSibling ? b.node.parentNode.insertBefore(this.node, b.node.nextSibling) : b.node.parentNode.appendChild(this.node), a._insertafter(this, b, this.paper);
        return this
    }, E.insertBefore = function(b) {
        if (this.removed)
            return this;
        b.constructor == a.st.constructor && (b = b[0]), b.node.parentNode.insertBefore(this.node, b.node), a._insertbefore(this, b, this.paper);
        return this
    }, E.blur = function(b) {
        var c = this.node.runtimeStyle,
            d = c.filter;
        d = d.replace(r, o), +b !== 0 ? (this.attrs.blur = b, c.filter = d + n + m + ".Blur(pixelradius=" + (+b || 1.5) + ")", c.margin = a.format("-{0}px 0 0 -{0}px", f(+b || 1.5))) : (c.filter = d, c.margin = 0, delete this.attrs.blur)
    }, a._engine.path = function(a, b) {
        var c = F("shape");
        c.style.cssText = t, c.coordsize = u + n + u, c.coordorigin = b.coordorigin;
        var d = new D(c, b),
            e = {
                fill: "none",
                stroke: "#000"
            };
        a && (e.path = a), d.type = "path", d.path = [], d.Path = o, B(d, e), b.canvas.appendChild(c);
        var f = F("skew");
        f.on = !0, c.appendChild(f), d.skew = f, d.transform(o);
        return d
    }, a._engine.rect = function(b, c, d, e, f, g) {
        var h = a._rectPath(c, d, e, f, g),
            i = b.path(h),
            j = i.attrs;
        i.X = j.x = c, i.Y = j.y = d, i.W = j.width = e, i.H = j.height = f, j.r = g, j.path = h, i.type = "rect";
        return i
    }, a._engine.ellipse = function(a, b, c, d, e) {
        var f = a.path(),
            g = f.attrs;
        f.X = b - d, f.Y = c - e, f.W = d * 2, f.H = e * 2, f.type = "ellipse", B(f, {
            cx: b,
            cy: c,
            rx: d,
            ry: e
        });
        return f
    }, a._engine.circle = function(a, b, c, d) {
        var e = a.path(),
            f = e.attrs;
        e.X = b - d, e.Y = c - d, e.W = e.H = d * 2, e.type = "circle", B(e, {
            cx: b,
            cy: c,
            r: d
        });
        return e
    }, a._engine.image = function(b, c, d, e, f, g) {
        var h = a._rectPath(d, e, f, g),
            i = b.path(h).attr({
                stroke: "none"
            }),
            k = i.attrs,
            l = i.node,
            m = l.getElementsByTagName(j)[0];
        k.src = c, i.X = k.x = d, i.Y = k.y = e, i.W = k.width = f, i.H = k.height = g, k.path = h, i.type = "image", m.parentNode == l && l.removeChild(m), m.rotate = !0, m.src = c, m.type = "tile", i._.fillpos = [d, e], i._.fillsize = [f, g], l.appendChild(m), z(i, 1, 1, 0, 0, 0);
        return i
    }, a._engine.text = function(b, d, e, g) {
        var h = F("shape"),
            i = F("path"),
            j = F("textpath");
        d = d || 0, e = e || 0, g = g || "", i.v = a.format("m{0},{1}l{2},{1}", f(d * u), f(e * u), f(d * u) + 1), i.textpathok = !0, j.string = c(g), j.on = !0, h.style.cssText = t, h.coordsize = u + n + u, h.coordorigin = "0 0";
        var k = new D(h, b),
            l = {
                fill: "#000",
                stroke: "none",
                font: a._availableAttrs.font,
                text: g
            };
        k.shape = h, k.path = i, k.textpath = j, k.type = "text", k.attrs.text = c(g), k.attrs.x = d, k.attrs.y = e, k.attrs.w = 1, k.attrs.h = 1, B(k, l), h.appendChild(j), h.appendChild(i), b.canvas.appendChild(h);
        var m = F("skew");
        m.on = !0, h.appendChild(m), k.skew = m, k.transform(o);
        return k
    }, a._engine.setSize = function(b, c) {
        var d = this.canvas.style;
        this.width = b, this.height = c, b == +b && (b += "px"), c == +c && (c += "px"), d.width = b, d.height = c, d.clip = "rect(0 " + b + " " + c + " 0)", this._viewBox && a._engine.setViewBox.apply(this, this._viewBox);
        return this
    }, a._engine.setViewBox = function(b, c, d, e, f) {
        a.eve("raphael.setViewBox", this, this._viewBox, [b, c, d, e, f]);
        var h = this.width,
            i = this.height,
            j = 1 / g(d / h, e / i),
            k,
            l;
        f && (k = i / e, l = h / d, d * k < h && (b -= (h - d * k) / 2 / k), e * l < i && (c -= (i - e * l) / 2 / l)), this._viewBox = [b, c, d, e, !!f], this._viewBoxShift = {
            dx: -b,
            dy: -c,
            scale: j
        }, this.forEach(function(a) {
            a.transform("...")
        });
        return this
    };
    var F;
    a._engine.initWin = function(a) {
        var b = a.document;
        b.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            !b.namespaces.rvml && b.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), F = function(a) {
                return b.createElement("<rvml:" + a + ' class="rvml">')
            }
        } catch (c) {
            F = function(a) {
                return b.createElement("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
            }
        }
    }, a._engine.initWin(a._g.win), a._engine.create = function() {
        var b = a._getContainer.apply(0, arguments),
            c = b.container,
            d = b.height,
            e,
            f = b.width,
            g = b.x,
            h = b.y;
        if (!c)
            throw new Error("VML container not found.");
        var i = new a._Paper,
            j = i.canvas = a._g.doc.createElement("div"),
            k = j.style;
        g = g || 0, h = h || 0, f = f || 512, d = d || 342, i.width = f, i.height = d, f == +f && (f += "px"), d == +d && (d += "px"), i.coordsize = u * 1e3 + n + u * 1e3, i.coordorigin = "0 0", i.span = a._g.doc.createElement("span"), i.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", j.appendChild(i.span), k.cssText = a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", f, d), c == 1 ? (a._g.doc.body.appendChild(j), k.left = g + "px", k.top = h + "px", k.position = "absolute") : c.firstChild ? c.insertBefore(j, c.firstChild) : c.appendChild(j), i.renderfix = function() {};
        return i
    }, a.prototype.clear = function() {
        a.eve("raphael.clear", this), this.canvas.innerHTML = o, this.span = a._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
    }, a.prototype.remove = function() {
        a.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
        for (var b in this)
            this[b] = typeof this[b] == "function" ? a._removedFactory(b) : null;
        return !0
    };
    var G = a.st;
    for (var H in E)
        E[b](H) && !G[b](H) && (G[H] = function(a) {
            return function() {
                var b = arguments;
                return this.forEach(function(c) {
                    c[a].apply(c, b)
                })
            }
        }(H))
}(window.Raphael)
;
window.polyjs = function(P) {
    if (!P) {
        var c = {};
        (function() {
            var f = [].indexOf || function(c) {
                for (var h = 0, b = this.length; h < b; h++)
                    if (h in this && this[h] === c)
                        return h;
                return -1
            };
            c.groupBy = function(f, h) {
                return _.groupBy(f, c.stringify(h))
            };
            c.stringify = function(c) {
                return function(h) {
                    return _.reduce(c, function(b, a) {
                        return "" + b + a + ":" + h[a] + ";"
                    }, "")
                }
            };
            c.cross = function(f, h) {
                var b,
                    a,
                    d,
                    e,
                    k,
                    n,
                    p,
                    m,
                    r,
                    q;
                null == h && (h = []);
                d = _.difference(_.keys(f), h);
                if (0 === d.length)
                    return [{}];
                b = [];
                e = d[0];
                d = c.cross(f, h.concat(e));
                q = f[e];
                n = 0;
                for (m =
                q.length; n < m; n++)
                    for (k = q[n], p = 0, r = d.length; p < r; p++)
                        a = d[p], a = _.clone(a), a[e] = k, b.push(a);
                return b
            };
            c.filter = function(c, h, b) {
                var a,
                    d,
                    e,
                    k;
                d = [];
                e = 0;
                for (k = c.length; e < k; e++)
                    a = c[e], a[h] === b && d.push(a);
                return d
            };
            c.intersect = function(c, h) {
                var b,
                    a,
                    d,
                    e,
                    k;
                a = function(b) {
                    var a,
                        d,
                        e,
                        q,
                        l;
                    d = [];
                    l = c[b]["in"];
                    e = 0;
                    for (q = l.length; e < q; e++)
                        a = l[e], 0 <= f.call(h[b]["in"], a) && d.push(a);
                    return {
                        "in": d
                    }
                };
                b = function(b) {
                    var a,
                        d,
                        e,
                        q,
                        l;
                    d = function(a) {
                        return a[b].lt ? {
                            type: "lt",
                            val: a[b].lt
                        } : a[b].le ? {
                            type: "le",
                            val: a[b].le
                        } : {
                            type: null,
                            val: null
                        }
                    };
                    a = function(a) {
                        return a[b].gt ? {
                            type: "gt",
                            val: a[b].gt
                        } : a[b].ge ? {
                            type: "ge",
                            val: a[b].ge
                        } : {
                            type: null,
                            val: null
                        }
                    };
                    a = [a(c), a(h)];
                    q = [d(c), d(h)];
                    a.sort(function(a, b) {
                        return b.val - a.val
                    });
                    q.sort(function(a, b) {
                        return a.val - b.val
                    });
                    d = {};
                    a[0].type && a[0].val && (l = a[0], e = l.type, l = l.val, a[0].val === a[1].val && a[0].type !== a[1].type && (e = "lt"), d[e] = l);
                    q[0].type && q[0].val && (l = q[0], e = l.type, l = l.val, q[0].val === q[1].val && q[0].type !== q[1].type && (e = "lt"), d[e] = l);
                    if (a[0].type && q[0].type && (a[0].val > q[0].val || a[0].val === q[0].val &&
                    ("lt" === a[0].key || "gt" === q[0].key)))
                        throw "No intersection found!";
                    return d
                };
                e = {};
                for (d in c)
                    k = c[d], e[d] = d in h ? "in" in c[d] ? a(d) : b(d) : k;
                for (d in h)
                    k = h[d], d in e || (e[d] = k);
                return e
            };
            c.linear = function(f, h, b, a) {
                if (_.isFinite(f) && _.isFinite(h) && _.isFinite(b) && _.isFinite(a))
                    return function(d) {
                        return (a - h) / (b - f) * (d - f) + h
                    };
                throw c.error.input("Attempting to create linear function from infinity");
            };
            c.median = function(c, h) {
                var b;
                null == h && (h = !1);
                h || (c = _.sortBy(c, function(a) {
                    return a
                }));
                b = c.length / 2;
                return 0 !==
                b % 1 ? c[Math.floor(b)] : (c[b - 1] + c[b]) / 2
            };
            c.counter = function() {
                var c;
                c = 0;
                return function() {
                    return c++
                }
            };
            c.sample = function(c, h) {
                return _.pick(c, _.shuffle(_.keys(c)).splice(0, h))
            };
            c.compare = function(c, h) {
                var b,
                    a,
                    d,
                    e,
                    k,
                    n,
                    p,
                    m,
                    r;
                r = _.sortBy(c, function(a) {
                    return a
                });
                m = _.sortBy(h, function(a) {
                    return a
                });
                a = [];
                d = [];
                b = [];
                for (p = k = 0; p < r.length || k < m.length;)
                    if (n = r[p], e = m[k], p >= r.length)
                        b.push(e), k += 1;
                    else if (k >= m.length)
                        a.push(n), p += 1;
                    else if (n < e)
                        a.push(n), p += 1;
                    else if (n > e)
                        b.push(e), k += 1;
                    else if (n === e)
                        d.push(n), p +=
                        1, k += 1;
                    else
                        throw DataError("Unknown data encounted");
                return {
                    deleted: a,
                    kept: d,
                    added: b
                }
            };
            c.flatten = function(f) {
                var h,
                    b,
                    a,
                    d;
                h = [];
                if (null != f)
                    if (_.isObject(f))
                        if ("scalefn" === f.t)
                            "novalue" !== f.f && h.push(f.v);
                        else
                            for (b in f)
                                a = f[b], h = h.concat(c.flatten(a));
                    else if (_.isArray(f))
                        for (b = 0, d = f.length; b < d; b++)
                            a = f[b], h = h.concat(c.flatten(a));
                    else
                        h.push(f);
                return h
            };
            c.getLabel = function(c, h) {
                return _.chain(c).map(function(b) {
                    return b.mapping[h]
                }).without(null, void 0).uniq().value().join(" | ")
            };
            c.strSize = function(c) {
                c =
                (c + "").length;
                return 10 > c ? 6 * c : 5 * (c - 10) + 60
            };
            c.sortArrays = function(c, h) {
                var b;
                b = _.zip.apply(_, h);
                b.sort(function(a, b) {
                    return c(a[0], b[0])
                });
                return _.zip.apply(_, b)
            };
            c.isDefined = function(f) {
                return _.isObject(f) ? "scalefn" === f.t && "novalue" !== f.f ? c.isDefined(f.v) : !0 : void 0 !== f && null !== f && !(_.isNumber(f) && _.isNaN(f))
            };
            c.isURI = function(c) {
                var h;
                return _.isString(c) ? (h = RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$",
                "i"), h.test(c)) : !1
            }
        }).call(this);
        (function() {
            c["const"] = {
                aes: "x y color size opacity shape id text".split(" "),
                noDomain: ["id", "text", "tooltip"],
                noLegend: ["x", "y", "id", "text", "tooltip"],
                trans: {
                    bin: ["key", "binwidth"],
                    lag: ["key", "lag"]
                },
                stat: {
                    count: ["key"],
                    unique: ["key"],
                    sum: ["key"],
                    mean: ["key"],
                    box: ["key"],
                    median: ["key"]
                },
                timerange: "second minute hour day week month twomonth quarter sixmonth year twoyear fiveyear decade".split(" "),
                metas: {
                    sort: null,
                    stat: null,
                    limit: null,
                    asc: !1
                },
                scaleFns: {
                    novalue: function() {
                        return {
                            v: null,
                            f: "novalue",
                            t: "scalefn"
                        }
                    },
                    max: function(c) {
                        return {
                            v: c,
                            f: "max",
                            t: "scalefn"
                        }
                    },
                    min: function(c) {
                        return {
                            v: c,
                            f: "min",
                            t: "scalefn"
                        }
                    },
                    upper: function(c, s, h) {
                        return {
                            v: c,
                            n: s,
                            m: h,
                            f: "upper",
                            t: "scalefn"
                        }
                    },
                    lower: function(c, s, h) {
                        return {
                            v: c,
                            n: s,
                            m: h,
                            f: "lower",
                            t: "scalefn"
                        }
                    },
                    middle: function(c) {
                        return {
                            v: c,
                            f: "middle",
                            t: "scalefn"
                        }
                    },
                    jitter: function(c) {
                        return {
                            v: c,
                            f: "jitter",
                            t: "scalefn"
                        }
                    },
                    identity: function(c) {
                        return {
                            v: c,
                            f: "identity",
                            t: "scalefn"
                        }
                    }
                },
                epsilon: Math.pow(10, -7),
                defaults: {
                    x: {
                        v: null,
                        f: "novalue",
                        t: "scalefn"
                    },
                    y: {
                        v: null,
                        f: "novalue",
                        t: "scalefn"
                    },
                    color: "steelblue",
                    size: 2,
                    opacity: 0.7
                }
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p = {}.hasOwnProperty,
                m = function(a, b) {
                    function l() {
                        this.constructor = a
                    }
                    for (var g in b)
                        p.call(b, g) && (a[g] = b[g]);
                    l.prototype = b.prototype;
                    a.prototype = new l;
                    a.__super__ = b.prototype;
                    return a
                };
            s = function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "DefinitionError"
                }
                m(b, a);
                return b
            }(Error);
            h = function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "DependencyError"
                }
                m(b, a);
                return b
            }(Error);
            a = function(a) {
                function b(a) {
                    this.message =
                    a;
                    this.name = "ModeError"
                }
                m(b, a);
                return b
            }(Error);
            f = function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "DataError"
                }
                m(b, a);
                return b
            }(Error);
            n = function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "UnknownInput"
                }
                m(b, a);
                return b
            }(Error);
            d = function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "ModeError"
                }
                m(b, a);
                return b
            }(Error);
            e = function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "ScaleError"
                }
                m(b, a);
                return b
            }(Error);
            b = function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "MissingData"
                }
                m(b, a);
                return b
            }(Error);
            k =
            function(a) {
                function b(a) {
                    this.message = a;
                    this.name = "Type"
                }
                m(b, a);
                return b
            }(Error);
            c.error = function(a) {
                return Error(a)
            };
            c.error.data = function(a) {
                return new f(a)
            };
            c.error.depn = function(a) {
                return new h(a)
            };
            c.error.defn = function(a) {
                return new s(a)
            };
            c.error.mode = function(b) {
                return new a(b)
            };
            c.error.impl = function(a) {
                return new d(a)
            };
            c.error.input = function(a) {
                return new n(a)
            };
            c.error.scale = function(a) {
                return new e(a)
            };
            c.error.missing = function(a) {
                return new b(a)
            };
            c.error.type = function(a) {
                return new k(a)
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e = {}.hasOwnProperty,
                k = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b)
                        e.call(b, d) && (a[d] = b[d]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                },
                n = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                };
            b = function() {
                function a() {}
                a.prototype.render = function() {
                    return c.error.impl()
                };
                a.prototype.dispose = function() {
                    return c.error.impl()
                };
                return a
            }();
            s = function(b) {
                function d() {
                    return a = d.__super__.constructor.apply(this, arguments)
                }
                k(d, b);
                d.prototype.getDimension = function() {
                    throw c.error.impl();
                };
                return d
            }(b);
            h = function(a) {
                function b() {
                    return d = b.__super__.constructor.apply(this, arguments)
                }
                k(b, a);
                b.prototype.getDimension = function() {
                    throw c.error.impl();
                };
                b.prototype.make = function() {
                    throw c.error.impl();
                };
                return b
            }(b);
            f = function(a) {
                function b(a) {
                    this.type = null != a ? a : null;
                    this.dispose = n(this.dispose, this);
                    this.geoms = {};
                    this.pts = {}
                }
                k(b, a);
                b.prototype.set = function(a) {
                    return this.geoms = a
                };
                b.prototype.render = function(a) {
                    var b,
                        l,
                        g,
                        d,
                        u,
                        t,
                        e;
                    u = {};
                    g = c.compare(_.keys(this.pts), _.keys(this.geoms));
                    l = g.deleted;
                    d = g.kept;
                    b = g.added;
                    t = 0;
                    for (e = l.length; t < e; t++)
                        g = l[t], this._delete(a, this.pts[g]);
                    l = 0;
                    for (t = b.length; l < t; l++)
                        g = b[l], u[g] = this._add(a, this.geoms[g]);
                    b = 0;
                    for (l = d.length; b < l; b++)
                        g = d[b], u[g] = this._modify(a, this.pts[g], this.geoms[g]);
                    return this.pts = u
                };
                b.prototype._delete = function(a, b) {
                    var l,
                        g,
                        d;
                    d = [];
                    for (l in b)
                        g = b[l], d.push(a.remove(g));
                    return d
                };
                b.prototype._modify = function(a, b, l) {
                    var g,
                        d,
                        c,
                        t;
                    c = {};
                    t = l.marks;
                    for (d in t) {
                        g = t[d];
                        try {
                            c[d] =
                            b[d] ? b[d].data("m").type === g.type ? a.animate(b[d], g, l.evtData, l.tooltip) : (a.remove(b[d]), a.add(g, l.evtData, l.tooltip, this.type)) : a.add(g, l.evtData, l.tooltip, this.type)
                        } catch (e) {
                            if (g = e, "MissingData" === g.name)
                                console.log(g.message);
                            else
                                throw g;
                        }
                    }
                    return c
                };
                b.prototype._add = function(a, b) {
                    var d,
                        g,
                        c,
                        u;
                    c = {};
                    u = b.marks;
                    for (g in u) {
                        d = u[g];
                        try {
                            c[g] = a.add(d, b.evtData, b.tooltip, this.type)
                        } catch (t) {
                            if (d = t, "MissingData" === d.name)
                                console.log(d.message);
                            else
                                throw d;
                        }
                    }
                    return c
                };
                b.prototype.dispose = function(a) {
                    var b,
                        d,
                        g;
                    g = this.pts;
                    for (b in g)
                        d = g[b], this._delete(a, d);
                    return this.pts = {}
                };
                return b
            }(b);
            c.Renderable = b;
            c.Guide = s;
            c.GuideSet = h;
            c.Geometry = f
        }).call(this);
        (function() {
            var f,
                s;
            c.offset = function(c) {
                var b,
                    a,
                    d;
                b = {
                    top: 0,
                    left: 0
                };
                if (a = c && c.ownerDocument)
                    return d = a.documentElement, "undefined" !== typeof c.getBoundingClientRect && (b = c.getBoundingClientRect()), c = null !== a && a === a.window ? a : 9 === a.nodeType && a.defaultView, {
                        top: b.top + c.pageYOffset - d.clientTop,
                        left: b.left + c.pageXOffset - d.clientLeft
                    }
            };
            c.getXY = function(c, b) {
                var a,
                    d;
                -1 !== b.type.indexOf("mouse") ? (d = b.clientX, a = b.clientY) : -1 !== b.type.indexOf("touch") && (a = b.changedTouches[0], d = a.clientX, a = a.clientY);
                return {
                    x: d + (document.documentElement && document.documentElement.scrollLeft || document.body.scrollLeft) - c.left,
                    y: a + (document.documentElement && document.documentElement.scrollTop || document.body.scrollTop) - c.top
                }
            };
            c.touchToMouse = function(c, b, a) {
                var d,
                    e,
                    k;
                null == a && (a = !1);
                d = b.lastEvent;
                k = 0 < d.touches.length && d.touches[0] || 0 < d.changedTouches.length && d.changedTouches[0];
                e = document.createEvent("MouseEvent");
                e.initMouseEvent(c, d.bubbles, d.cancelable, d.view, d.detail, k.screenX, k.screenY, k.clientX, k.clientY, d.ctrlKey, d.altKey, d.shiftKey, d.metaKey, 1, d.target);
                return a ? (window.clearTimeout(b.pressTimer), b.pressTimer = window.setTimeout(function() {
                    return d.target.dispatchEvent(e)
                }, a)) : d.target.dispatchEvent(e)
            };
            f = {
                lastStart: 0,
                lastTouch: 0,
                lastEvent: null,
                pressTimer: 0
            };
            s = window.alert;
            c.touch = function(h, b, a, d) {
                b.tooltip = b.data("t");
                b.evtData = b.data("e");
                f.lastEvent = a;
                a.preventDefault();
                if ("touchstart" === h)
                    return f.lastStart =
                    a.timeStamp, c.touchToMouse("mousedown", f), f.pressTimer = window.setTimeout(function() {
                        return c.touchToMouse("mouseover", f)
                    }, 800), window.alert = function() {
                        var a;
                        window.clearTimeout(f.pressTimer);
                        a = arguments;
                        return window.setTimeout(function() {
                            s.apply(window, a);
                            return window.alert = s
                        }, 100)
                    };
                if ("touchmove" === h) {
                    h = d.paper.getById(a.target.raphaelid);
                    d = c.offset(d.dom);
                    d = c.getXY(d, a);
                    if (600 < a.timeStamp - f.lastStart && h.isPointInside(d.x, d.y))
                        return c.touchToMouse("mouseover", f);
                    window.clearTimeout(f.pressTimer);
                    return c.touchToMouse("mouseout", f)
                }
                if ("touchend" === h) {
                    if (window.clearTimeout(f.pressTimer), c.touchToMouse("mouseup", f), c.touchToMouse("mouseout", f, 400), 800 > a.timeStamp - f.lastStart)
                        return c.touchToMouse("click", f)
                } else if ("touchcancel" === h)
                    return window.clearTimeout(f.pressTimer), c.touchToMouse("mouseout", f), c.touchToMouse("mouseup", f, 300)
            }
        }).call(this);
        (function() {
            var f,
                s,
                h;
            c.format = function(b, a) {
                switch (b) {
                case "cat":
                    return c.format.identity;
                case "num":
                    return c.format.number(a);
                case "date":
                    return c.format.date(a);
                case "none":
                    return c.format.identity
                }
            };
            c.format.identity = function(b) {
                return b
            };
            f = {
                0: "",
                3: "k",
                6: "m",
                9: "b",
                12: "t"
            };
            h = function(b, a) {
                return _.isUndefined(f[a]) ? b + "e" + (0 < a ? "+" : "-") + Math.abs(a) : b + f[a]
            };
            s = function(b) {
                var a,
                    d,
                    c;
                if (!isFinite(b))
                    return b;
                d = "" + b;
                a = Math.abs(b);
                1E4 <= a && (c = ("" + a).split(/\./), a = c[0].length % 3 || 3, c[0] = d.slice(0, a + (0 > b)) + c[0].slice(a).replace(/(\d{3})/g, ",$1"), d = c.join("."));
                return d
            };
            c.format.number = function(b) {
                return function(a) {
                    var c,
                        e;
                    e = 0;
                    c = null != b ? b : Math.floor(Math.log(Math.abs(0 ===
                    a ? 1 : a)) / Math.LN10);
                    null == b || 2 !== c && 5 !== c && 8 !== c && 11 !== c ? -1 === c ? (c = 0, e = null != b ? 1 : 2) : -2 === c ? (c = 0, e = null != b ? 2 : 3) : 1 === c || 2 === c ? c = 0 : 3 < c && 6 > c ? c = 3 : 6 < c && 9 > c ? c = 6 : 9 < c && 12 > c ? c = 9 : 12 < c && 15 > c ? c = 12 : e = null != b ? 0 : 1 : (c += 1, e = 1);
                    a = Math.round(a / Math.pow(10, c - e));
                    a /= Math.pow(10, e);
                    a = a.toFixed(e);
                    return h(s(a), c)
                }
            };
            c.format.date = function(b) {
                return -1 !== _.indexOf(c["const"].timerange, b) ? "second" === b ? function(a) {
                    return moment.unix(a).format("h:mm:ss a")
                } : "minute" === b ? function(a) {
                    return moment.unix(a).format("h:mm a")
                } : "hour" ===
                b ? function(a) {
                    return moment.unix(a).format("MMM D h a")
                } : "day" === b || "week" === b ? function(a) {
                    return moment.unix(a).format("MMM D")
                } : "month" === b || "twomonth" === b || "quarter" === b || "sixmonth" === b ? function(a) {
                    return moment.unix(a).format("YYYY/MM")
                } : function(a) {
                    return moment.unix(a).format("YYYY")
                } : function(a) {
                    return moment.unix(a).format(b)
                }
            };
            c.format._number_instance = c.format.number();
            c.format.value = function(b) {
                return _.isNumber(b) ? c.format._number_instance(b) : b
            }
        }).call(this);
        (function() {
            var f,
                s;
            c.type =
            {};
            c.type.impute = function(c) {
                var b,
                    a,
                    d,
                    e,
                    k,
                    n;
                k = a = e = b = 0;
                for (n = c.length; k < n; k++)
                    d = c[k], null != d && (void 0 !== d && null !== d) && (a++, isNaN(d) && isNaN(d.replace(/\$|\,/g, "")) || e++, d = moment(d), null != d && d.isValid() && b++);
                return e > 0.95 * a ? "num" : b > 0.95 * a ? "date" : "cat"
            };
            c.type.coerce = function(c, b) {
                if (_.isUndefined(c) || _.isNull(c) || "cat" === b.type)
                    return c;
                if ("num" === b.type)
                    return isNaN(c) ? +("" + c).replace(/\$|\,/g, "") : +c;
                if ("date" === b.type)
                    return b.format ? "unix" === b.format ? moment.unix(c).unix() : moment(c, b.format).unix() :
                    moment(c).unix()
            };
            c.type.compare = function(c) {
                switch (c) {
                case "cat":
                    return f;
                default:
                    return s
                }
            };
            f = function(c, b) {
                var a,
                    d;
                if (c === b)
                    return 0;
                _.isString(c) || (c = "" + c);
                _.isString(b) || (b = "" + b);
                a = c.toLowerCase();
                d = b.toLowerCase();
                return a === d ? c < b ? -1 : c > b ? 1 : 0 : a < d ? -1 : a > d ? 1 : 0
            };
            s = function(c, b) {
                return c === b ? 0 : null === c ? 1 : null === b ? -1 : c < b ? -1 : c > b ? 1 : 0
            }
        }).call(this);
        (function() {
            c.spec = {};
            c.spec.toStrictMode = function(f) {
                var s,
                    h,
                    b,
                    a,
                    d,
                    e,
                    k,
                    n;
                f = _.clone(f);
                null == f.layers && f.layer && (f.layers = [f.layer]);
                null == f.guides && f.guide &&
                (f.guides = f.guide);
                null == f.guides && (f.guides = {});
                if (f.layers)
                    for (e = f.layers, s = h = 0, a = e.length; h < a; s = ++h) {
                        b = e[s];
                        n = c["const"].aes;
                        d = 0;
                        for (k = n.length; d < k; d++)
                            s = n[d], b[s] && _.isString(b[s]) && (b[s] = {
                                "var": b[s]
                            });
                        null == b.sample && (b.sample = 500)
                    }
                if (f.facet)
                    for (b = ["var", "x", "y"], e = 0, s = b.length; e < s; e++)
                        a = b[e], (h = f.facet[a]) && _.isString(h) && (f.facet[a] = {
                            "var": h
                        });
                else
                    f.facet = {
                        type: "none"
                    };
                f.coord || (f.coord = {
                    type: "cartesian",
                    flip: !1
                });
                _.isString(f.dom) && (f.dom = document.getElementById(f.dom));
                return f
            };
            c.spec.check =
            function(f) {
                var s,
                    h,
                    b,
                    a,
                    d;
                if (null == f.layers || 0 === f.layers.length)
                    throw c.error.defn("No layers are defined in the specification.");
                d = f.layers;
                s = b = 0;
                for (a = d.length; b < a; s = ++b) {
                    h = d[s];
                    if (null == h.data)
                        throw c.error.defn("Layer " + (s + 1) + " does not have data to plot!");
                    if (!h.data.isData)
                        throw c.error.defn("Data must be a Polychart Data object.");
                }
                if ((null == f.render || !1 !== f.render) && !f.dom)
                    throw c.error.defn("No DOM element specified. Where to make plot?");
                return f
            }
        }).call(this);
        (function() {
            c.xhr = function(c,
            s, h) {
                var b;
                b = new XMLHttpRequest;
                3 > arguments.length ? (h = s, s = null) : s && b.overrideMimeType && b.overrideMimeType(s);
                b.open("GET", c, !0);
                s && b.setRequestHeader("Accept", s);
                b.onreadystatechange = function() {
                    var a;
                    if (4 === b.readyState)
                        return a = b.status, a = !a && b.response || 200 <= a && 300 > a || 304 === a ? b : null, h(a)
                };
                return b.send(null)
            };
            c.text = function(f, s, h) {
                3 > arguments.length && (h = s, s = null);
                return c.xhr(f, s, function(b) {
                    return h(b && b.responseText)
                })
            };
            c.json = function(f, s) {
                return c.text(f, "application/json", function(c) {
                    return s(c ?
                    JSON.parse(c) : null)
                })
            };
            c.dsv = function(f, s) {
                var h,
                    b,
                    a,
                    d,
                    e,
                    k,
                    n;
                n = RegExp("\r\n|[" + f + "\r\n]", "g");
                k = RegExp('["' + f + "\n]");
                h = f.charCodeAt(0);
                a = function(a) {
                    return a.map(d).join(f)
                };
                d = function(a) {
                    var b;
                    return null != (b = k.test(a)) ? b : '"' + a.replace(/\"/g, '""') + {
                        '"': a
                    }
                };
                e = null;
                b = function(a, d) {
                    return c.text(a, s, function(a) {
                        return d(a && b.parse(a))
                    })
                };
                b.parse = function(a) {
                    return b.parseRows(a, function(a, b) {
                        var c,
                            l,
                            g;
                        if (b) {
                            g = {};
                            c = -1;
                            for (l = e.length; ++c < l;)
                                g[e[c]] = a[c];
                            return g
                        }
                        e = a;
                        return null
                    })
                };
                b.parseRows = function(a,
                b) {
                    var c,
                        d,
                        l,
                        g,
                        w,
                        u,
                        t,
                        e;
                    d = {};
                    c = {};
                    u = [];
                    w = 0;
                    g = t = null;
                    n.lastIndex = 0;
                    for (e = function() {
                        var b,
                            t,
                            l;
                        if (n.lastIndex >= a.length)
                            return c;
                        if (g)
                            return g = !1, d;
                        l = n.lastIndex;
                        if (34 === a.charCodeAt(l)) {
                            for (t = l; t++ < a.length;)
                                if (34 === a.charCodeAt(t)) {
                                    if (34 !== a.charCodeAt(t + 1))
                                        break;
                                    t++
                                }
                            n.lastIndex = t + 2;
                            b = a.charCodeAt(t + 1);
                            13 === b ? (g = !0, 10 === a.charCodeAt(t + 2) && n.lastIndex++) : 10 === b && (g = !0);
                            return a.substring(l + 1, t).replace(/""/g, '"')
                        }
                        if (b = n.exec(a))
                            return g = b[0].charCodeAt(0) !== h, a.substring(l, b.index);
                        n.lastIndex = a.length;
                        return a.substring(l)
                    }; (t = e()) !== c;) {
                        for (l = []; t !== d && t !== c;)
                            l.push(t), t = e();
                        b && !(l = b(l, w++)) || u.push(l)
                    }
                    return u
                };
                b.format = function(b) {
                    return b.map(a).join("\n")
                };
                return b
            };
            c.csv = c.dsv(",", "text/csv")
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p,
                m,
                r,
                q,
                l,
                g,
                w,
                u,
                t,
                z,
                E,
                A,
                G,
                C,
                y,
                B,
                v,
                x,
                D,
                F,
                I,
                N,
                O,
                J,
                K,
                L = [].slice,
                M = {}.hasOwnProperty,
                H = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var g in b)
                        M.call(b, g) && (a[g] = b[g]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                };
            J = function(a,
            b) {
                var c,
                    g,
                    t,
                    l;
                c = a.length;
                l = ['"', "'"];
                g = 0;
                for (t = l.length; g < t; g++)
                    if (b = l[g], a[0] === b && a[c - 1] === b)
                        return a.slice(1, +(c - 2) + 1 || 9E9);
                return a
            };
            K = function(a) {
                return function(b, c) {
                    var g,
                        t,
                        l,
                        d,
                        u;
                    u = [];
                    g = l = 0;
                    for (d = b.length; l < d; g = ++l)
                        t = b[g], u.push(a(t, c[g]));
                    return u
                }
            }(function(a, b) {
                return [a, b]
            });
            r = function(a) {
                var b,
                    c,
                    g,
                    t,
                    l;
                c = {};
                t = 0;
                for (l = a.length; t < l; t++)
                    g = a[t], b = g[0], g = g[1], c[b] = g;
                return c
            };
            g = function(a, b, c) {
                null == c && (c = null);
                return b in a && a[b] || c
            };
            w = function(a, b) {
                var c,
                    t,
                    l;
                t = {};
                for (l in b)
                    c = b[l], c = g(a, l,
                    c), null !== c && (t[l] = c);
                return t
            };
            E = function(a) {
                var b,
                    c,
                    t,
                    l,
                    d;
                c = {};
                l = 0;
                for (d = a.length; l < d; l++)
                    for (t in b = a[l], b)
                        c[t] = b[t].concat(g(c, t, []));
                return c
            };
            q = function(a, b) {
                var c,
                    g,
                    t,
                    l,
                    d;
                null == b && (b = function(a) {
                    return a
                });
                c = {};
                l = 0;
                for (d = a.length; l < d; l++)
                    g = a[l], c[b(g)] = g;
                l = [];
                for (t in c)
                    g = c[t], l.push(g);
                return l
            };
            l = function(a) {
                return function(b) {
                    return q(b, function(b) {
                        return b[a]
                    })
                }
            };
            D = function(a, b) {
                return "" + a + "(" + b + ")"
            };
            F = function(a) {
                return "[" + a + "]"
            };
            n = function() {
                function a(b) {
                    var c,
                        g,
                        t,
                        l;
                    l = [];
                    g = 0;
                    for (t = b.length; g <
                    t; g++)
                        c = b[g], l.push(c);
                    this.buffer = l.reverse()
                }
                a.prototype.empty = function() {
                    return 0 === this.buffer.length
                };
                a.prototype.peek = function() {
                    return this.empty() ? null : this.buffer[this.buffer.length - 1]
                };
                a.prototype.get = function() {
                    return this.empty() ? null : this.buffer.pop()
                };
                a.prototype.toString = function() {
                    return D("Stream", F(L.call(this.buffer).reverse()))
                };
                return a
            }();
            m = function() {
                function a(b) {
                    this.tag = b
                }
                a.Tag = {
                    symbol: "symbol",
                    literal: "literal",
                    lparen: "(",
                    rparen: ")",
                    comma: ","
                };
                a.prototype.toString = function() {
                    return "<" +
                    this.contents().toString() + ">"
                };
                a.prototype.contents = function() {
                    return [this.tag]
                };
                return a
            }();
            p = function(a) {
                function b(a) {
                    this.name = a;
                    this.name = J(this.name);
                    b.__super__.constructor.call(this, m.Tag.symbol)
                }
                H(b, a);
                b.prototype.contents = function() {
                    return b.__super__.contents.call(this).concat([this.name])
                };
                return b
            }(m);
            e = function(a) {
                function b(a) {
                    this.val = a;
                    this.val = J(this.val);
                    b.__super__.constructor.call(this, m.Tag.literal)
                }
                H(b, a);
                b.prototype.contents = function() {
                    return b.__super__.contents.call(this).concat([this.val])
                };
                return b
            }(m);
            b = function() {
                var a,
                    b,
                    c,
                    g;
                c = [m.Tag.lparen, m.Tag.rparen, m.Tag.comma];
                g = [];
                a = 0;
                for (b = c.length; a < b; a++)
                    I = c[a], g.push(new m(I));
                return g
            }();
            d = b[0];
            k = b[1];
            s = b[2];
            O = [[/^\(/, function() {
                return d
            }], [/^\)/, function() {
                return k
            }], [/^,/, function() {
                return s
            }], [/^[+-]?(0x[0-9a-fA-F]+|0?\.\d+|[1-9]\d*(\.\d+)?|0)([eE][+-]?\d+)?/, function(a) {
                return new e(a)
            }], [/^(\w|[^\u0000-\u0080])+|'((\\.)|[^\\'])+'|"((\\.)|[^\\"])+"/, function(a) {
                return new p(a)
            }]];
            z = function(a) {
                var b,
                    g,
                    t,
                    l;
                t = 0;
                for (l = O.length; t < l; t++)
                    if (g =
                    O[t], b = g[0], g = g[1], b = b.exec(a))
                        return t = b[0], [a.slice(t.length), g(t)];
                throw c.error.defn("There is an error in your specification at " + a);
            };
            N = function(a) {
                var b,
                    c;
                for (c = [];;) {
                    a = a.replace(/^\s+/, "");
                    if (!a)
                        break;
                    b = z(a);
                    a = b[0];
                    b = b[1];
                    c.push(b)
                }
                return c
            };
            b = function() {
                function a() {}
                a.prototype.toString = function() {
                    return D(this.constructor.name, this.contents())
                };
                return a
            }();
            a = function(a) {
                function b(a) {
                    this.name = a
                }
                H(b, a);
                b.prototype.contents = function() {
                    return [this.name]
                };
                b.prototype.pretty = function() {
                    return this.name
                };
                b.prototype.visit = function(a) {
                    return a.ident(this, this.name)
                };
                return b
            }(b);
            h = function(a) {
                function b(a) {
                    this.val = a
                }
                H(b, a);
                b.prototype.contents = function() {
                    return [this.val]
                };
                b.prototype.pretty = function() {
                    return this.val
                };
                b.prototype.visit = function(a) {
                    return a["const"](this, this.val)
                };
                return b
            }(b);
            f = function(a) {
                function b(a, c) {
                    this.fname = a;
                    this.args = c
                }
                H(b, a);
                b.prototype.contents = function() {
                    return [this.fname, F(this.args)]
                };
                b.prototype.pretty = function() {
                    var a,
                        b = this.fname,
                        c,
                        g,
                        t,
                        l;
                    t = this.args;
                    l = [];
                    c = 0;
                    for (g =
                    t.length; c < g; c++)
                        a = t[c], l.push(a.pretty());
                    return D(b, l)
                };
                b.prototype.visit = function(a) {
                    var b;
                    return a.call(this, this.fname, function() {
                        var c,
                            g,
                            t,
                            l;
                        t = this.args;
                        l = [];
                        c = 0;
                        for (g = t.length; c < g; c++)
                            b = t[c], l.push(b.visit(a));
                        return l
                    }.call(this))
                };
                return b
            }(b);
            u = function(a, b, c) {
                var g,
                    t,
                    l,
                    d;
                t = a.peek();
                if (null !== t)
                    for (l = 0, d = c.length; l < d; l++)
                        if (g = c[l], I = g[0], g = g[1], t.tag === I)
                            return g(a);
                return b(a)
            };
            v = function(a) {
                throw c.error.defn("There is an error in your specification at " + a.toString());
            };
            A = function(a) {
                var b;
                b = new n(N(a));
                a = B(b);
                if (null !== b.peek())
                    throw c.error.defn("There is an error in your specification at " + b.toString());
                return a
            };
            B = function(a) {
                return u(a, v, [[m.Tag.literal, y], [m.Tag.symbol, x]])
            };
            y = function(a) {
                return new h(a.get().val)
            };
            x = function(b) {
                var c;
                c = b.get().name;
                return u(b, function() {
                    return new a(c)
                }, [[m.Tag.lparen, G(c)]])
            };
            G = function(a) {
                return function(b) {
                    b.get();
                    b = u(b, C([]), [[m.Tag.rparen, function(a) {
                        a.get();
                        return []
                    }]]);
                    return new f(a, b)
                }
            };
            C = function(a) {
                return function(b) {
                    var c,
                        g;
                    c = B(b);
                    g = a.concat([c]);
                    return u(b, v, [[m.Tag.rparen, function(a) {
                        a.get();
                        return g
                    }], [m.Tag.comma, function(a) {
                        a.get();
                        return C(g)(a)
                    }]])
                }
            };
            t = function(a) {
                var b;
                b = {
                    trans: [],
                    stat: []
                };
                a.visit({
                    ident: function(a, b) {
                        return b
                    },
                    "const": function(a, b) {
                        return b
                    },
                    call: function(a, g, t) {
                        var l,
                            d;
                        d = g in c["const"].trans ? "trans" : g in c["const"].stat ? "stat" : "none";
                        if ("none" !== d)
                            return l = c["const"][d][g], t = r(K(l, t)), t.name = a.pretty(), t[d] = g, b[d].push(t), t.name;
                        throw c.error.defn("The operation " + g + " is not recognized. Please check your specifications.");
                    }
                });
                return b
            };
            c.parser = {
                tokenize: N,
                parse: A,
                layerToData: function(a, b) {
                    var g,
                        d,
                        u,
                        e,
                        v,
                        x,
                        z,
                        D,
                        m,
                        F;
                    null == b && (b = []);
                    v = {};
                    z = null != (m = a.filter) ? m : {};
                    for (d in z)
                        m = z[d], v[A(d).pretty()] = m;
                    x = [];
                    z = 0;
                    for (m = b.length; z < m; z++)
                        d = b[z], x.push(A(d["var"]).pretty());
                    b = x;
                    g = _.pick(a, c["const"].aes);
                    for (d in g)
                        "var" in g[d] || delete g[d];
                    F = [];
                    m = [];
                    x = [];
                    z = {};
                    for (d in g)
                        u = g[d], "count(*)" === u["var"] ? m.push(u["var"]) : (e = A(u["var"]), u["var"] = e.pretty(), e = t(e), F.push(e), m.push(u["var"]), 0 === e.stat.length && x.push(u["var"]), "sort" in
                        u && (e = w(u, c["const"].metas), "count(*)" === e.sort ? D = {
                            sort: "count(*)",
                            asc: e.asc,
                            stat: [],
                            trans: []
                        } : (D = A(e.sort), e.sort = D.pretty(), D = t(D)), 0 !== D.stat.length && (e.stat = D.stat[0]), z[u["var"]] = e));
                    g = 0;
                    for (u = b.length; g < u; g++)
                        if (d = b[g], e = A(d), d = e.pretty(), e = t(e), F.push(e), m.push(d), 0 === e.stat.length)
                            x.push(d);
                        else
                            throw c.error.defn("Facet variable should not contain statistics!");
                    F = E(F);
                    d = l("name");
                    x = {
                        stats: d(F.stat),
                        groups: q(x)
                    };
                    return {
                        trans: d(F.trans),
                        stats: x,
                        meta: z,
                        select: q(m),
                        filter: v
                    }
                }
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d = {}.hasOwnProperty,
                e = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var e in b)
                        d.call(b, e) && (a[e] = b[e]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                },
                k = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                };
            s = function() {
                function a(b) {
                    var c;
                    this.spec = b;
                    null == this.spec && (this.spec = {});
                    this.flip = null != (c = this.spec.flip) ? c : !1;
                    this.scales = null;
                    b = this.flip ? ["y", "x"] : ["x", "y"];
                    this.x = b[0];
                    this.y = b[1]
                }
                a.prototype.make = function(a) {
                    return this.dims = a
                };
                a.prototype.setScales =
                function(a) {
                    return this.scales = {
                        x: a.x.f,
                        y: a.y.f
                    }
                };
                a.prototype.clipping = function(a) {
                    return [a.x, a.y, this.dims.eachWidth, this.dims.eachHeight]
                };
                a.prototype.getScale = function(a) {};
                a.prototype.ranges = function() {};
                return a
            }();
            f = function(a) {
                function d() {
                    return b = d.__super__.constructor.apply(this, arguments)
                }
                e(d, a);
                d.prototype.type = "cartesian";
                d.prototype.getScale = function(a) {
                    if ("x" === a || "y" === a)
                        return this.scales[this[a]];
                    throw c.error.input("Coordinates only keep x & y scales");
                };
                d.prototype.ranges = function() {
                    var a;
                    a = {};
                    a[this.x] = {
                        min: 0,
                        max: this.dims.eachWidth
                    };
                    a[this.y] = {
                        min: this.dims.eachHeight,
                        max: 0
                    };
                    return a
                };
                d.prototype.axisType = function(a) {
                    return this[a]
                };
                d.prototype.getXY = function(a, b) {
                    var c,
                        l;
                    if (a)
                        return c = {
                            x: _.isArray(b.x) ? _.map(b.x, this.scales.x) : this.scales.x(b.x),
                            y: _.isArray(b.y) ? _.map(b.y, this.scales.y) : this.scales.y(b.y)
                        }, {
                            x: c[this.x],
                            y: c[this.y]
                        };
                    c = this.scales[this.x];
                    l = this.scales[this.y];
                    return {
                        x: _.isArray(b.x) ? _.map(b.x, c) : c(b.x),
                        y: _.isArray(b.y) ? _.map(b.y, l) : l(b.y)
                    }
                };
                d.prototype.getAes = function(a,
                b, c) {
                    return {
                        x: c.x(a[this.x], b[this.x]),
                        y: c.y(a[this.y], b[this.y])
                    }
                };
                return d
            }(s);
            h = function(b) {
                function d() {
                    this.getXY = k(this.getXY, this);
                    return a = d.__super__.constructor.apply(this, arguments)
                }
                e(d, b);
                d.prototype.type = "polar";
                d.prototype.make = function(a) {
                    this.dims = a;
                    this.cx = this.dims.eachWidth / 2;
                    return this.cy = this.dims.eachHeight / 2
                };
                d.prototype.getScale = function(a) {
                    if ("r" === a)
                        return this.scales[this.x];
                    if ("t" === a)
                        return this.scales[this.y];
                    throw c.error.input("Coordinates only keep r & t scales");
                };
                d.prototype.ranges = function() {
                    var a,
                        b,
                        c;
                    b = [this.x, this.y];
                    a = b[0];
                    c = b[1];
                    b = {};
                    b[c] = {
                        min: 0,
                        max: 2 * Math.PI
                    };
                    b[a] = {
                        min: 0,
                        max: Math.min(this.dims.eachWidth, this.dims.eachHeight) / 2 - 10
                    };
                    return b
                };
                d.prototype.axisType = function(a) {
                    return "x" === this[a] ? "r" : "t"
                };
                d.prototype.getXY = function(a, b) {
                    var c,
                        d,
                        g,
                        w,
                        u,
                        t,
                        e,
                        k,
                        A,
                        f,
                        n,
                        y,
                        B,
                        v,
                        x = this;
                    f = function(a, b) {
                        return x.cx + a * Math.cos(b - Math.PI / 2)
                    };
                    n = function(a, b) {
                        return x.cy + a * Math.sin(b - Math.PI / 2)
                    };
                    w = [this.x, this.y];
                    u = w[0];
                    e = w[1];
                    if (a) {
                        if (_.isArray(b[u])) {
                            w = {
                                x: [],
                                y: [],
                                r: [],
                                t: []
                            };
                            B = b[u];
                            d = c = 0;
                            for (y = B.length; c < y; d = ++c)
                                t = B[d], t = this.scales[u](t), k = this.scales[e](b[e][d]), w.x.push(f(t, k)), w.y.push(n(t, k)), w.r.push(t), w.t.push(k);
                            return w
                        }
                        t = this.scales[u](b[u]);
                        k = this.scales[e](b[e]);
                        return {
                            x: f(t, k),
                            y: n(t, k),
                            r: t,
                            t: k
                        }
                    }
                    g = function(a) {
                        return _.isObject(a) && "scalefn" === a.t && "identity" === a.f
                    };
                    c = function(a, b) {
                        var c,
                            d;
                        c = g(a);
                        d = g(b);
                        if (c && !d)
                            return {
                                x: a.v,
                                y: n(x.scales[u](b), 0)
                            };
                        if (c && d)
                            return {
                                x: a.v,
                                y: b.v
                            };
                        if (!c && d)
                            return {
                                y: b.v,
                                x: n(x.scales[e](a), 0)
                            };
                        t = x.scales[u](b);
                        k = x.scales[e](a);
                        return {
                            x: f(t, k),
                            y: n(t, k)
                        }
                    };
                    if (_.isArray(b.x)) {
                        w = {
                            x: [],
                            y: []
                        };
                        v = b.x;
                        d = y = 0;
                        for (B = v.length; y < B; d = ++y)
                            A = v[d], d = b.y[d], A = c(A, d), d = A.x, A = A.y, w.x.push(d), w.y.push(A);
                        return w
                    }
                    return c(b.x, b.y)
                };
                return d
            }(s);
            c.coord = {
                cartesian: function(a) {
                    return new f(a)
                },
                polar: function(a) {
                    return new h(a)
                }
            };
            c.coord.make = function(a) {
                if (null == a || null == a.type)
                    return c.coord.cartesian();
                switch (a.type) {
                case "cartesian":
                    return c.coord.cartesian(a);
                case "polar":
                    return c.coord.polar(a);
                default:
                    throw c.error.defn("No such coordinate type " +
                    a.type + ".");
                }
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; b < c; b++)
                        if (b in this && this[b] === a)
                            return b;
                    return -1
                };
            b = c["const"].aes;
            c.domain = {};
            c.domain.make = function(a, b, d, l) {
                var g,
                    e,
                    u;
                g = [];
                for (u in a)
                    e = a[u], g.push(k(e.geoms, b[u], d, l));
                return c.domain.merge(g)
            };
            c.domain.compare = function(a) {
                return a ? "cat" === a.type ? function(b, c) {
                    b = _.indexOf(a.levels, b);
                    c = _.indexOf(a.levels, c);
                    return -1 === b ? 1 : -1 === c ? -1 : b < c ? -1 : b > c ? 1 : 0
                } : c.type.compare(a.type) : function(a) {
                    return a
                }
            };
            h = function() {
                return function(a) {
                    this.type = a.type;
                    this.min = a.min;
                    this.max = a.max;
                    this.bw = a.bw
                }
            }();
            s = function() {
                return function(a) {
                    this.type = a.type;
                    this.min = a.min;
                    this.max = a.max;
                    this.bw = a.bw
                }
            }();
            f = function() {
                return function(a) {
                    this.type = a.type;
                    this.levels = a.levels;
                    this.sorted = a.sorted
                }
            }();
            e = function(a) {
                "cat" !== a.type && a.max === a.min && (a.bw ? (a.max += a.bw, a.min -= a.bw) : 0 === a.max ? a.max += 1 : (a.max *= 1.1, a.min /= 1.1));
                switch (a.type) {
                case "num":
                    return new h(a);
                case "date":
                    return new s(a);
                case "cat":
                    return new f(a)
                }
            };
            k = function(a, b, k, l) {
                var g,
                    w,
                    u,
                    t,
                    z,
                    f,
                    A,
                    n,
                    C,
                    y,
                    B,
                    v,
                    x,
                    D,
                    F,
                    I,
                    h,
                    s,
                    J,
                    K,
                    L,
                    M,
                    H;
                u = {};
                for (g in b)
                    if (f = b[g], !(0 <= p.call(c["const"].noDomain, g)))
                        if (l)
                            u[g] = e(k[g]);
                        else {
                            A = d(a, g);
                            if (0 === A.length)
                                throw c.error.input("Dataset is none?");
                            t = function(a) {
                                return null != k[g] ? k[g][a] : null
                            };
                            switch (f.type) {
                            case "num":
                                w = null != (n = t("bw")) ? n : f.bw;
                                if (1 < A.length)
                                    f = null != (C = t("min")) ? C : _.min(A), z = null != (I = t("max")) ? I : _.max(A) + (null != w ? w : 0);
                                else if (1 === A.length) {
                                    debugger;
                                    w ? (f = null != (h = t("min")) ? h : A[0], z = null != (s = t("max")) ? s : A[0] +
                                    w) : (f = null != (J = t("min")) ? J : A[0] - 1, z = null != (K = t("max")) ? K : A[0] + 1)
                                } else
                                    f = null != (L = t("min")) ? L : 0, z = null != (M = null != (H = t("max")) ? H : w) ? M : 1;
                                u[g] = e({
                                    type: "num",
                                    min: f,
                                    max: z,
                                    bw: w
                                });
                                break;
                            case "date":
                                w = null != (y = t("bw")) ? y : f.bw;
                                f = null != (B = t("min")) ? B : _.min(A);
                                z = t("max");
                                null == z && (z = _.max(A), z = function() {
                                    switch (w) {
                                    case "week":
                                        return moment.unix(z).add("days", 7).unix();
                                    case "twomonth":
                                        return moment.unix(z).add("months", 2).unix();
                                    case "quarter":
                                        return moment.unix(z).add("months", 4).unix();
                                    case "sixmonth":
                                        return moment.unix(z).add("months",
                                        6).unix();
                                    case "twoyear":
                                        return moment.unix(z).add("years", 2).unix();
                                    case "fiveyear":
                                        return moment.unix(z).add("years", 5).unix();
                                    case "decade":
                                        return moment.unix(z).add("years", 10).unix();
                                    default:
                                        return moment.unix(z).add(w + "s", 1).unix()
                                    }
                                }());
                                u[g] = e({
                                    type: "date",
                                    min: f,
                                    max: z,
                                    bw: w
                                });
                                break;
                            case "cat":
                                u[g] = e({
                                    type: "cat",
                                    levels: null != (v = null != (x = t("levels")) ? x : f.levels) ? v : _.uniq(A),
                                    sorted: null != (D = null != (F = t("levels")) ? F : f.sorted) ? D : !1
                                })
                            }
                        }
                return u
            };
            d = function(a, b) {
                var d,
                    l,
                    g,
                    e,
                    u;
                e = [];
                for (l in a)
                    for (g in d =
                    a[l], u = d.marks, u)
                        d = u[g], e = e.concat(c.flatten(d[b]));
                u = [];
                g = 0;
                for (d = e.length; g < d; g++)
                    l = e[g], c.isDefined(l) && u.push(l);
                return u
            };
            c.domain.merge = function(a) {
                var c,
                    d,
                    l,
                    g,
                    e;
                l = {};
                g = 0;
                for (e = b.length; g < e; g++)
                    c = b[g], d = _.without(_.pluck(a, c), void 0), 0 < d.length && (l[c] = n(d));
                return l
            };
            a = {
                num: function(a) {
                    var b,
                        d;
                    b = _.compact(_.uniq(_.map(a, function(a) {
                        return a.bw
                    })));
                    if (1 < b.length)
                        throw c.error.data("Not all layers have the same binwidth.");
                    b = null != (d = b[0]) ? d : void 0;
                    d = _.min(_.map(a, function(a) {
                        return a.min
                    }));
                    a = _.max(_.map(a, function(a) {
                        return a.max
                    }));
                    return e({
                        type: "num",
                        min: d,
                        max: a,
                        bw: b
                    })
                },
                date: function(a) {
                    var b,
                        d;
                    b = _.compact(_.uniq(_.map(a, function(a) {
                        return a.bw
                    })));
                    if (1 < b.length)
                        throw c.error.data("Not all layers have the same binwidth.");
                    b = null != (d = b[0]) ? d : void 0;
                    d = _.min(_.map(a, function(a) {
                        return a.min
                    }));
                    a = _.max(_.map(a, function(a) {
                        return a.max
                    }));
                    return e({
                        type: "date",
                        min: d,
                        max: a,
                        bw: b
                    })
                },
                cat: function(a) {
                    var b,
                        d,
                        l,
                        g,
                        w,
                        u,
                        t,
                        z;
                    g = [];
                    w = 0;
                    for (t = a.length; w < t; w++)
                        if (d = a[w], d.sorted) {
                            b = !0;
                            u = 0;
                            for (z = g.length; u <
                            z; u++)
                                l = g[u], _.isEqual(l, d.levels) && (b = !1);
                            b && g.push(d.levels)
                        }
                    a = _.chain(a).filter(function(a) {
                        return !a.sorted
                    }).map(function(a) {
                        return a.levels
                    }).value();
                    if (1 < g.length && _.intersection.apply(this, g))
                        throw c.error.data("You are trying to combine incompatible sorted domains in the same axis.");
                    g = [_.flatten(g, !0)];
                    a = _.union.apply(this, g.concat(a));
                    0 === g[0].length && (a = a.sort());
                    return e({
                        type: "cat",
                        levels: a,
                        sorted: 0 !== g[0].length
                    })
                }
            };
            n = function(b) {
                var d;
                d = _.uniq(_.map(b, function(a) {
                    return a.type
                }));
                if (1 <
                d.length)
                    throw c.error.data("You are trying to merge data of different types in the same axis or legend.");
                return a[d[0]](b)
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b;
            c.tick = {};
            c.tick.make = function(a, d, e) {
                var k,
                    f,
                    p,
                    m,
                    r,
                    q,
                    l,
                    g;
                r = null;
                k = function(a) {
                    return a
                };
                null != d.ticks ? q = "num" === e ? _.filter(d.ticks, function(b) {
                    return b >= a.min && b <= a.max
                }) : d.ticks : (k = null != (q = d.numticks) ? q : 5, k = b[e](a, k), q = k.ticks, r = k.step);
                k = d.labels ? function(a) {
                    var b;
                    return null != (b = d.labels[a]) ? b : a
                } : d.formatter ? d.formatter : c.format(e.split("-")[0],
                r);
                r = {};
                e = h(e, k);
                if (q)
                    for (f = l = 0, g = q.length - 1; 0 <= g ? l <= g : l >= g; f = 0 <= g ? ++l : --l)
                        m = 0 === f ? null : q[f - 1], p = f === q.length - 1 ? null : q[f + 1], f = q[f], p = e(f, m, p), r[p.value] = p;
                return {
                    ticks: r,
                    ticksFormatter: k
                }
            };
            f = function() {
                return function(a) {
                    this.location = a.location;
                    this.value = a.value;
                    this.index = a.index;
                    this.evtData = a.evtData
                }
            }();
            h = function(a, b) {
                var c;
                c = 0;
                return function(k, n, h) {
                    var m;
                    "cat" === a ? m = {
                        "in": [k]
                    } : (m = {}, null != n && (m.ge = n), null != h && (m.le = h));
                    return new f({
                        location: k,
                        value: b(k),
                        index: c++,
                        evtData: m
                    })
                }
            };
            s = function(a,
            b) {
                var c,
                    k;
                k = Math.pow(10, Math.floor(Math.log(a / b) / Math.LN10));
                c = b / a * k;
                0.15 > c ? k *= 10 : 0.35 >= c ? k *= 5 : 0.75 >= c && (k *= 2);
                return k
            };
            b = {
                none: function() {
                    return {}
                },
                cat: function(a, b) {
                    var c,
                        k,
                        f,
                        h,
                        m,
                        r,
                        q;
                    f = Math.max(1, Math.round(a.levels.length / b));
                    h = [];
                    q = a.levels;
                    c = m = 0;
                    for (r = q.length; m < r; c = ++m)
                        k = q[c], 0 === c % f && h.push(k);
                    return {
                        ticks: h
                    }
                },
                num: function(a, b) {
                    var c,
                        k,
                        f,
                        h;
                    k = a.min;
                    c = a.max;
                    f = s(c - k, b);
                    h = Math.ceil(k / f) * f;
                    for (k = []; h < c;)
                        k.push(h), h += f;
                    return {
                        ticks: k,
                        step: Math.floor(Math.log(f) / Math.LN10)
                    }
                },
                "num-log": function(a,
                b) {
                    var e,
                        k,
                        f,
                        h,
                        m,
                        r,
                        q,
                        l,
                        g;
                    l = [];
                    r = a.min;
                    m = a.max;
                    k = function(a) {
                        return Math.log(a) / Math.LN10
                    };
                    e = function(a) {
                        return Math.exp(a * Math.LN10)
                    };
                    h = Math.max(k(r), 0);
                    f = k(m);
                    q = s(f - h, b);
                    for (g = Math.ceil(h / q) * q; g < f + c["const"].epsilon;) {
                        if (!(0 !== g % 1 && 0.1 >= g % 1)) {
                            if (g % 1 > c["const"].epsilon) {
                                if (h = Math.floor(g) + k(10 * (g % 1)), 0 === h % 1) {
                                    g += q;
                                    continue
                                }
                            } else
                                h = g;
                            h = e(h);
                            h < r || h > m || l.push(h)
                        }
                        g += q
                    }
                    return {
                        ticks: l
                    }
                },
                date: function(a, b) {
                    var c,
                        k,
                        f,
                        h,
                        m,
                        r;
                    f = a.min;
                    k = a.max;
                    m = (k - f) / b;
                    m = 1.4 > m ? "second" : 84 > m ? "minute" : 5040 > m ? "hour" : 120960 > m ? "day" :
                    846720 > m ? "week" : 3628800 > m ? "month" : 7257600 > m ? "twomonth" : 14515200 > m ? "quarter" : 21772800 > m ? "sixmonth" : 44150400 > m ? "year" : 88300800 > m ? "twoyear" : 220752E3 > m ? "fiveyear" : "decade";
                    r = [];
                    c = moment.unix(f).startOf(m);
                    h = function() {
                        switch (m) {
                        case "twomonth":
                            return ["months", 2];
                        case "quarter":
                            return ["months", 4];
                        case "sixmonth":
                            return ["months", 6];
                        case "twoyear":
                            return ["years", 2];
                        case "fiveyear":
                            return ["years", 5];
                        case "decade":
                            return ["years", 10];
                        default:
                            return [m + "s", 1]
                        }
                    }();
                    for (c.unix() < f && c.add(h[0], h[1]); c.unix() < k;)
                        r.push(c.unix()),
                        c.add(h[0], h[1]);
                    return {
                        ticks: r,
                        step: m
                    }
                }
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p,
                m = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                r = {}.hasOwnProperty,
                q = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b)
                        r.call(b, d) && (a[d] = b[d]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                };
            d = c["const"].scaleFns;
            f = function(a) {
                function b() {
                    this.render = m(this.render, this);
                    this.make = m(this.make, this);
                    this.position = "none";
                    this.title = this.titletext = null
                }
                q(b,
                a);
                b.prototype.make = function(a) {
                    var b,
                        c,
                        g,
                        d;
                    b = a.guideSpec;
                    g = a.title;
                    c = a.position;
                    this.size = a.size;
                    this.color = a.color;
                    a = function(a, c) {
                        var g;
                        return null != (g = b[a]) ? g : c
                    };
                    this.titletext = a("title", g);
                    this.position = null != (d = a("position", c)) ? d : this.defaultPosition;
                    if ("out" === this.position)
                        return this.position = "bottom"
                };
                b.prototype.render = function(a, b, c) {
                    if ("none" !== this.position)
                        return null != this.title && a.remove(this.title), this.title = a.add(this._makeTitle(b, c), null, null, "guide-" + this.titleType);
                    if (null !=
                    this.title)
                        return a.remove(this.title)
                };
                b.prototype.dispose = function(a) {
                    a.remove(this.title);
                    return this.title = null
                };
                b.prototype._makeTitle = function() {
                    throw c.error.impl();
                };
                b.prototype.getDimension = function() {
                    var a;
                    a = {};
                    "none" !== this.position && (a[this.position] = 10);
                    return a
                };
                return b
            }(c.Guide);
            h = function(a) {
                function b() {
                    return e = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.defaultPosition = "bottom";
                b.prototype.titleType = "titleH";
                b.prototype._makeTitle = function(a, b) {
                    var c,
                        g,
                        l,
                        e,
                        f;
                    c = "top" === this.position ? a.paddingTop + a.guideTop - (null != (g = b.top) ? g : 0) - 2 : a.height - a.paddingBottom - a.guideBottom + (null != (l = b.bottom) ? l : 0);
                    return {
                        type: "text",
                        x: d.identity(a.paddingLeft + a.guideLeft + (a.width - a.paddingLeft - a.guideLeft - a.paddingRight - a.guideRight) / 2),
                        y: d.identity(c),
                        color: d.identity(null != (e = this.color) ? e : "black"),
                        size: d.identity(null != (f = this.size) ? f : 12),
                        text: this.titletext,
                        "text-anchor": "middle"
                    }
                };
                return b
            }(f);
            a = function(a) {
                function b() {
                    return k = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.defaultPosition = "left";
                b.prototype.titleType = "titleV";
                b.prototype._makeTitle = function(a, b) {
                    var c,
                        g,
                        l,
                        e,
                        f;
                    c = "left" === this.position ? a.paddingLeft + a.guideLeft - (null != (g = b.left) ? g : 0) - 7 : a.width - a.paddingRight - a.guideRight + (null != (l = b.right) ? l : 0);
                    g = a.paddingTop + a.guideTop + (a.height - a.paddingTop - a.guideTop - a.paddingBottom - a.guideBottom) / 2;
                    return {
                        type: "text",
                        x: d.identity(c),
                        y: d.identity(g),
                        color: d.identity(null != (e = this.color) ? e : "black"),
                        size: d.identity(null != (f = this.size) ? f : 12),
                        text: this.titletext,
                        "text-anchor": "middle",
                        transform: "r270"
                    }
                };
                return b
            }(f);
            b = function(a) {
                function b() {
                    return n = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.titleType = "title";
                b.prototype._makeTitle = function(a, b) {
                    var c,
                        g;
                    return {
                        type: "text",
                        x: d.identity(a.width / 2),
                        y: d.identity(20),
                        color: d.identity(null != (c = this.color) ? c : "black"),
                        size: d.identity(null != (g = this.size) ? g : 12),
                        text: this.titletext,
                        "font-size": "13px",
                        "font-weight": "bold",
                        "text-anchor": "middle"
                    }
                };
                return b
            }(f);
            s = function(a) {
                function b() {
                    this.render =
                    m(this.render, this);
                    this.make = m(this.make, this);
                    return p = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.make = function(a) {
                    var b;
                    b = a.title;
                    this.size = a.size;
                    this.color = a.color;
                    return this.titletext = b
                };
                b.prototype.render = function(a, b, c) {
                    return null != this.title ? this.title = a.animate(this.title, this._makeTitle(b, c)) : this.title = a.add(this._makeTitle(b, c), null, null, "guide-facet-title")
                };
                b.prototype._makeTitle = function(a, b) {
                    var c,
                        g;
                    return {
                        type: "text",
                        x: d.identity(b.x + a.eachWidth / 2),
                        y: d.identity(b.y -
                        7),
                        color: d.identity(null != (c = this.color) ? c : "black"),
                        size: d.identity(null != (g = this.size) ? g : 12),
                        text: this.titletext,
                        "text-anchor": "middle"
                    }
                };
                return b
            }(f);
            null == c.guide && (c.guide = {});
            c.guide.title = function(c) {
                return "y" === c || "r" === c ? new a : "main" === c ? new b : "facet" === c ? new s : new h
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p,
                m,
                r = {}.hasOwnProperty,
                q = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var g in b)
                        r.call(b, g) && (a[g] = b[g]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                },
                l = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                g = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; b < c; b++)
                        if (b in this && this[b] === a)
                            return b;
                    return -1
                };
            e = c["const"].scaleFns;
            f = function(a) {
                function b() {
                    this.axesGeoms = {}
                }
                q(b, a);
                b.prototype.make = function(a) {
                    var b,
                        g,
                        d,
                        l;
                    this.domains = a.domains;
                    this.coord = a.coord;
                    this.scales = a.scales;
                    this.specs = a.specs;
                    this.labels = a.labels;
                    return this.axes = {
                        x: c.guide.axis(this.coord.axisType("x"), {
                            domain: this.domains.x,
                            type: this.scales.x.tickType(),
                            guideSpec: null != (b = this.specs.x) ? b : {},
                            key: null != (g = this.labels.x) ? g : "x"
                        }),
                        y: c.guide.axis(this.coord.axisType("y"), {
                            domain: this.domains.y,
                            type: this.scales.y.tickType(),
                            guideSpec: null != (d = this.specs.y) ? d : {},
                            key: null != (l = this.labels.y) ? l : "y"
                        })
                    }
                };
                b.prototype.getDimension = function(a) {
                    var b,
                        c,
                        g;
                    a = {};
                    g = this.axes;
                    for (c in g)
                        b = g[c], b = b.getDimension(), "left" === b.position ? a.left = b.width : "right" === b.position ? a.right = b.width : "bottom" === b.position ? a.bottom = b.height : "top" === b.position && (a.top = b.height);
                    return a
                };
                b.prototype.render = function(a, b, g) {
                    var d,
                        l,
                        e,
                        u,
                        w,
                        v,
                        x,
                        D,
                        f,
                        k,
                        h,
                        n,
                        q,
                        m,
                        p,
                        r;
                    w = _.keys(g.indices);
                    e = c.compare(_.keys(this.axesGeoms), w).deleted;
                    h = 0;
                    for (n = e.length; h < n; h++)
                        for (u in x = e[h], m = this.axesGeoms[x], m)
                            l = m[u], l.dispose(b());
                    l = {
                        top: 0,
                        left: 0,
                        right: a.eachWidth,
                        bottom: a.eachHeight,
                        width: a.eachWidth,
                        height: a.eachHeight
                    };
                    e = g.edge(this.axes.x.position);
                    u = g.edge(this.axes.y.position);
                    h = {
                        renderLabel: !1,
                        renderTick: !1
                    };
                    n = {
                        renderLabel: !1,
                        renderTick: !1
                    };
                    "r" === this.axes.x.type && (h.renderLine = !1);
                    "r" === this.axes.y.type &&
                    (n.renderLine = !1);
                    r = [];
                    m = 0;
                    for (p = w.length; m < p; m++)
                        x = w[m], D = g.getOffset(a, x), null == (q = this.axesGeoms)[x] && (q[x] = {
                            x: new c.Geometry("guide"),
                            y: new c.Geometry("guide")
                        }), k = b(D, !1, !1), D = e(x) ? {} : h, this.axesGeoms[x].x.set(this.axes.x.calculate(l, this.coord, D)), this.axesGeoms[x].x.render(k), D = u(x) ? {} : n, this.axesGeoms[x].y.set(this.axes.y.calculate(l, this.coord, D)), this.axesGeoms[x].y.render(k), r.push(function() {
                            var a,
                                b,
                                c,
                                g;
                            c = ["x", "y"];
                            g = [];
                            a = 0;
                            for (b = c.length; a < b; a++)
                                d = c[a], g.push(function() {
                                    var a,
                                        b;
                                    a = this.axesGeoms[x][d].pts;
                                    b = [];
                                    for (v in a)
                                        f = a[v], f.grid ? b.push(f.grid.toBack()) : b.push(void 0);
                                    return b
                                }.call(this));
                            return g
                        }.call(this));
                    return r
                };
                b.prototype.dispose = function(a) {
                    var b,
                        c,
                        g;
                    g = this.axesGeoms;
                    for (c in g)
                        b = g[c], b.x.dispose(a), b.y.dispose(a);
                    return this.axesGeoms = {}
                };
                return b
            }(c.GuideSet);
            s = function(a) {
                function b(a) {
                    this.calculate = l(this.calculate, this);
                    var d,
                        e,
                        u,
                        w,
                        f;
                    d = a.domain;
                    w = a.type;
                    e = a.guideSpec;
                    a = a.key;
                    u = function(a, b) {
                        var c;
                        return null != (c = e[a]) ? c : b
                    };
                    this.position = u("position", this.defaultPosition);
                    if (f =
                    this.position, 0 > g.call(this.validPositions, f))
                        throw c.error.defn("X-axis position can't be " + this.position + ".");
                    this.titletext = u("title", a);
                    this.renderTick = u("renderTick", this.renderTickDefault);
                    this.renderGrid = u("renderGrid", this.renderGridDefault);
                    this.renderLabel = u("renderLabel", this.renderLabelDefault);
                    this.renderLine = u("renderLine", this.renderLineDefault);
                    this.gridColor = u("gridColor", this.gridColor);
                    d = c.tick.make(d, e, w);
                    this.ticks = d.ticks;
                    this.ticksFormatter = d.ticksFormatter;
                    this.maxwidth = _.max(_.map(this.ticks,
                    function(a) {
                        return c.strSize(a.value)
                    }));
                    this.maxwidth = Math.max(this.maxwidth, 0)
                }
                q(b, a);
                b.prototype.renderTickDefault = !0;
                b.prototype.renderGridDefault = !0;
                b.prototype.renderLabelDefault = !0;
                b.prototype.renderLineDefault = !0;
                b.prototype.calculate = function(a, b, c) {
                    var g,
                        d,
                        l,
                        e,
                        u,
                        v,
                        x;
                    this.coord = b;
                    if ("none" === this.position)
                        return {};
                    null == c && (c = {});
                    a.centerx = a.left + a.width / 2;
                    a.centery = a.top + a.height / 2;
                    a.radius = Math.min(a.width, a.height) / 2 - 10;
                    b = {};
                    this.renderLine && (b.line = {
                        marks: {
                            0: this._renderline(a)
                        }
                    });
                    e =
                    this.ticks;
                    for (g in e)
                        l = e[g], d = {}, this.renderTick && (null != (u = c.renderTick) ? u : 1) && (d.tick = this._makeTick(a, l)), this.renderLabel && (null != (v = c.renderLabel) ? v : 1) && (d.text = this._makeLabel(a, l)), this.renderGrid && (null != (x = c.renderGrid) ? x : 1) && (d.grid = this._makeGrid(a, l)), b[g] = {
                            marks: d
                        };
                    return b
                };
                b.prototype._makeTick = function(a) {
                    if (!a)
                        throw c.error.impl();
                    a.type = "path";
                    a.stroke = e.identity("#666");
                    a.color = e.identity("#666");
                    return a
                };
                b.prototype._makeLabel = function(a) {
                    if (!a)
                        throw c.error.impl();
                    a.type = "text";
                    a.stroke = e.identity("#666");
                    a.color = e.identity("#666");
                    return a
                };
                b.prototype._makeGrid = function(a) {
                    if (!a)
                        throw c.error.impl();
                    a.stroke = null != this.gridColor ? this.gridColor : "#EFEFEF";
                    return a
                };
                return b
            }(c.Guide);
            a = function(a) {
                function b() {
                    return k = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.type = "x";
                b.prototype.renderGridDefault = !1;
                b.prototype.defaultPosition = "bottom";
                b.prototype.validPositions = ["top", "bottom", "none"];
                b.prototype._renderline = function(a) {
                    var b,
                        c;
                    c = "top" === this.position ?
                    e.identity(a.top) : e.identity(a.bottom);
                    b = e.identity(a.left);
                    a = e.identity(a.left + a.width);
                    return {
                        type: "path",
                        y: [c, c],
                        x: [b, a],
                        stroke: e.identity("#666")
                    }
                };
                b.prototype._makeTick = function(a, c) {
                    var g,
                        d;
                    "top" === this.position ? (g = e.identity(a.top), d = e.identity(a.top - 5)) : (g = e.identity(a.bottom), d = e.identity(a.bottom + 5));
                    return b.__super__._makeTick.call(this, {
                        x: [c.location, c.location],
                        y: [g, d]
                    })
                };
                b.prototype._makeLabel = function(a, c) {
                    var g;
                    g = "top" === this.position ? e.identity(a.top - 15) : e.identity(a.bottom + 15);
                    return b.__super__._makeLabel.call(this, {
                        x: c.location,
                        y: g,
                        text: c.value,
                        "text-anchor": "middle"
                    })
                };
                b.prototype._makeGrid = function(a, c) {
                    var g,
                        d;
                    g = e.identity(a.top);
                    d = e.identity(a.bottom);
                    return b.__super__._makeGrid.call(this, {
                        type: "path",
                        x: [c.location, c.location],
                        y: [g, d]
                    })
                };
                b.prototype.getDimension = function() {
                    var a;
                    return {
                        position: null != (a = this.position) ? a : "bottom",
                        height: 30,
                        width: "all"
                    }
                };
                return b
            }(s);
            d = function(a) {
                function b() {
                    return n = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.type =
                "y";
                b.prototype.renderLineDefault = !1;
                b.prototype.renderTickDefault = !1;
                b.prototype.defaultPosition = "left";
                b.prototype.validPositions = ["left", "right", "none"];
                b.prototype._renderline = function(a) {
                    var b,
                        c;
                    b = "left" === this.position ? e.identity(a.left) : e.identity(a.right);
                    c = e.identity(a.top);
                    a = e.identity(a.top + a.height);
                    return {
                        type: "path",
                        x: [b, b],
                        y: [c, a],
                        stroke: e.identity("#666")
                    }
                };
                b.prototype._makeTick = function(a, c) {
                    var g,
                        d;
                    "left" === this.position ? (g = e.identity(a.left), d = e.identity(a.left - 5)) : (g = e.identity(a.right),
                    d = e.identity(a.right + 5));
                    return b.__super__._makeTick.call(this, {
                        x: [g, d],
                        y: [c.location, c.location]
                    })
                };
                b.prototype._makeLabel = function(a, c) {
                    var g;
                    g = "left" === this.position ? e.identity(a.left - 7) : e.identity(a.right + 7);
                    return b.__super__._makeLabel.call(this, {
                        x: g,
                        y: c.location,
                        text: c.value,
                        "text-anchor": "left" === this.position ? "end" : "start"
                    })
                };
                b.prototype._makeGrid = function(a, c) {
                    var g,
                        d;
                    g = e.identity(a.left);
                    d = e.identity(a.right);
                    return b.__super__._makeGrid.call(this, {
                        type: "path",
                        y: [c.location, c.location],
                        x: [g, d]
                    })
                };
                b.prototype.getDimension = function() {
                    var a;
                    return {
                        position: null != (a = this.position) ? a : "right",
                        height: "all",
                        width: 5 + this.maxwidth
                    }
                };
                return b
            }(s);
            h = function(a) {
                function b() {
                    return p = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.type = "r";
                b.prototype.defaultPosition = "left";
                b.prototype.validPositions = ["left", "right", "none"];
                b.prototype._renderline = function(a) {
                    var b,
                        c;
                    b = e.identity(a.left);
                    c = e.identity(a.top);
                    a = e.identity(a.top + a.height / 2);
                    return {
                        type: "path",
                        x: [b, b],
                        y: [c, a],
                        stroke: e.identity("#666")
                    }
                };
                b.prototype._makeTick = function(a, c) {
                    return b.__super__._makeTick.call(this, {
                        x: [e.identity(a.left), e.identity(a.left - 5)],
                        y: [c.location, c.location]
                    })
                };
                b.prototype._makeLabel = function(a, c) {
                    return b.__super__._makeLabel.call(this, {
                        x: e.identity(a.left - 7),
                        y: c.location,
                        text: c.value,
                        "text-anchor": "end"
                    })
                };
                b.prototype._makeGrid = function(a, c) {
                    return b.__super__._makeGrid.call(this, {
                        type: "circle",
                        x: e.identity(a.centerx),
                        y: e.identity(a.centery),
                        size: e.identity(this.coord.getScale("r")(c.location)),
                        color: e.identity("none"),
                        "fill-opacity": 0,
                        "stroke-width": 1
                    })
                };
                b.prototype.getDimension = function() {
                    return {
                        position: "left",
                        height: "all",
                        width: 5 + this.maxwidth
                    }
                };
                return b
            }(s);
            b = function(a) {
                function b() {
                    return m = b.__super__.constructor.apply(this, arguments)
                }
                q(b, a);
                b.prototype.type = "t";
                b.prototype.defaultPosition = "out";
                b.prototype.validPositions = ["out", "none"];
                b.prototype._renderline = function(a) {
                    return {
                        type: "circle",
                        x: e.identity(a.centerx),
                        y: e.identity(a.centery),
                        size: e.identity(a.radius),
                        color: e.identity("none"),
                        stroke: e.identity("#666"),
                        "stroke-width": 1
                    }
                };
                b.prototype._makeTick = function(a, c) {
                    return b.__super__._makeTick.call(this, {
                        x: [c.location, c.location],
                        y: [e.max(0), e.max(3)]
                    })
                };
                b.prototype._makeLabel = function(a, c) {
                    return b.__super__._makeLabel.call(this, {
                        x: c.location,
                        y: e.max(12),
                        text: c.value,
                        "text-anchor": "middle"
                    })
                };
                b.prototype._makeGrid = function(a, c) {
                    var g,
                        d,
                        l,
                        w;
                    d = e.identity(a.centerx);
                    w = e.identity(a.centery);
                    g = this.coord.getScale("t")(c.location) - Math.PI / 2;
                    l = e.identity(a.centerx + a.radius * Math.cos(g));
                    g = e.identity(a.centery +
                    a.radius * Math.sin(g));
                    return b.__super__._makeGrid.call(this, {
                        type: "path",
                        y: [w, g],
                        x: [d, l]
                    })
                };
                b.prototype.getDimension = function() {
                    return {}
                };
                return b
            }(s);
            null == c.guide && (c.guide = {});
            c.guide.axis = function(c, g) {
                if ("x" === c)
                    return new a(g);
                if ("y" === c)
                    return new d(g);
                if ("r" === c)
                    return new h(g);
                if ("t" === c)
                    return new b(g)
            };
            c.guide.axes = function(a) {
                return new f(a)
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k = {}.hasOwnProperty,
                n = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var g in b)
                        k.call(b, g) && (a[g] =
                        b[g]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                },
                p = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; b < c; b++)
                        if (b in this && this[b] === a)
                            return b;
                    return -1
                },
                m = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                };
            a = c["const"].scaleFns;
            c.guide.legends = function() {
                return new h
            };
            c.guide.legend = function(a, c) {
                return "left" === c || "right" === c ? new b(a) : new f(a)
            };
            h = function(a) {
                function b() {
                    this.legends = [];
                    this.deletedLegends = []
                }
                n(b, a);
                b.prototype.make = function(a) {
                    var b,
                        d,
                        e,
                        t,
                        f,
                        k,
                        h,
                        n,
                        C,
                        y,
                        B,
                        v;
                    e = a.domains;
                    n = a.layers;
                    t = a.guideSpec;
                    B = a.scales;
                    h = a.layerMapping;
                    this.position = a.position;
                    d = a.dims;
                    null == this.postion && (this.postion = "right");
                    if ("none" !== this.position) {
                        b = this._mergeAes(e, n);
                        for (k = 0; k < this.legends.length;) {
                            C = this.legends[k];
                            y = !0;
                            for (f = 0; f < b.length;) {
                                a = b[f];
                                if (_.isEqual(a, C.aes)) {
                                    b.splice(f, 1);
                                    y = !1;
                                    break
                                }
                                f++
                            }
                            y ? (this.deletedLegends.push(C), this.legends.splice(k, 1)) : k++
                        }
                        C = 0;
                        for (f = b.length; C < f; C++)
                            a = b[C], this.legends.push(c.guide.legend(a, this.position));
                        k = this.legends;
                        y = [];
                        b = 0;
                        for (f = k.length; b < f; b++)
                            C = k[b], a = C.aes[0], y.push(C.make({
                                domain: e[a],
                                position: this.position,
                                guideSpec: null != (v = t[a]) ? v : {},
                                type: B[a].tickType(),
                                mapping: h,
                                keys: c.getLabel(n, a),
                                dims: d
                            }));
                        return y
                    }
                };
                b.prototype._mergeAes = function(a, b) {
                    var d,
                        e,
                        t,
                        f,
                        k,
                        h,
                        n;
                    k = [];
                    for (d in a)
                        if (!(0 <= p.call(c["const"].noLegend, d) || (t = _.map(b, function(a) {
                            return a.mapping[d]
                        }), _.all(t, _.isUndefined)))) {
                            f = !1;
                            h = 0;
                            for (n = k.length; h < n; h++)
                                if (e = k[h], _.isEqual(e.mapped, t)) {
                                    e.aes.push(d);
                                    f = !0;
                                    break
                                }
                            f || k.push({
                                aes: [d],
                                mapped: t
                            })
                        }
                    return _.pluck(k,
                    "aes")
                };
                b.prototype.getDimension = function(a) {
                    var b,
                        c,
                        d;
                    b = {};
                    if ("left" === (c = this.position) || "right" === c)
                        b[this.position] = this._leftrightWidth(a);
                    else if ("top" === (d = this.position) || "bottom" === d)
                        b[this.position] = this._topbottomHeight(a);
                    return b
                };
                b.prototype._leftrightWidth = function(a) {
                    var b,
                        c,
                        d,
                        e,
                        f,
                        k,
                        h,
                        n;
                    e = a.chartHeight;
                    f = 0;
                    b = 10;
                    c = 0;
                    n = this.legends;
                    k = 0;
                    for (h = n.length; k < h; k++)
                        d = n[k], d = d.getDimension(a), d.height + c > e && (b += f + 5, f = c = 0), d.width > f && (f = d.width), c += d.height;
                    return b + f
                };
                b.prototype._topbottomHeight =
                function(a) {
                    var b,
                        c,
                        d,
                        e,
                        f;
                    c = 10;
                    f = this.legends;
                    d = 0;
                    for (e = f.length; d < e; d++)
                        b = f[d], b = b.getDimension(a), c += b.height + 10;
                    return c
                };
                b.prototype.render = function(a, b, c) {
                    var d,
                        e,
                        f,
                        k,
                        h;
                    e = b();
                    h = this.deletedLegends;
                    f = 0;
                    for (k = h.length; f < k; f++)
                        d = h[f], d.dispose(e);
                    this.deletedLegends = [];
                    if ("left" === this.position || "right" === this.position)
                        return this._renderV(a, b, c);
                    if ("top" === this.position || "bottom" === this.position)
                        return this._renderH(a, b, c)
                };
                b.prototype._renderV = function(a, b, c) {
                    var d,
                        e,
                        f,
                        k,
                        h,
                        n,
                        m,
                        y,
                        B,
                        v,
                        x,
                        D,
                        F;
                    d = a.paddingTop +
                    a.guideTop;
                    e = "left" === this.position ? a.paddingLeft : a.width - a.guideRight - a.paddingRight;
                    h = 0;
                    k = a.height - a.guideTop - a.paddingTop;
                    y = 10;
                    m = "right" === this.position ? c.right : 0;
                    D = this.legends;
                    F = [];
                    v = 0;
                    for (x = D.length; v < x; v++)
                        f = D[v], n = f.getDimension(a), n.height + c.y > k && (m += h + 5, h = y = 0), n.width > h && (h = n.width), B = {
                            x: m + e,
                            y: y + d
                        }, f.render(b(B, !1, !1), h), F.push(y += n.height);
                    return F
                };
                b.prototype._renderH = function(a, b, c) {
                    var d,
                        e,
                        f,
                        k,
                        h,
                        n;
                    d = a.paddingLeft;
                    e = "top" === this.position ? a.paddingTop : a.height - a.guideBottom - a.paddingBottom;
                    e = {
                        x: d,
                        y: "top" === this.position ? c.top + e : c.bottom + e + 10
                    };
                    h = this.legends;
                    n = [];
                    f = 0;
                    for (k = h.length; f < k; f++)
                        c = h[f], d = c.getDimension(a), c.render(b(e, !1, !1)), n.push(e.y += d.height + 10);
                    return n
                };
                b.prototype.dispose = function(a) {
                    var b,
                        c,
                        d,
                        e,
                        f;
                    e = this.legends;
                    f = [];
                    c = 0;
                    for (d = e.length; c < d; c++)
                        b = e[c], f.push(b.dispose(a));
                    return f
                };
                return b
            }(c.GuideSet);
            s = function(b) {
                function d(a) {
                    this.aes = a;
                    this._makeEvtData = m(this._makeEvtData, this);
                    this._makeTick = m(this._makeTick, this);
                    this.geometry = new c.Geometry("guide")
                }
                n(d, b);
                d.prototype.TITLEHEIGHT = 15;
                d.prototype.TICKHEIGHT = 12;
                d.prototype.SPACING = 10;
                d.prototype.make = function(a) {
                    var b,
                        d,
                        e,
                        f,
                        k;
                    b = a.domain;
                    e = a.type;
                    d = a.guideSpec;
                    this.mapping = a.mapping;
                    this.position = a.position;
                    a = a.keys;
                    this.titletext = null != (f = d.title) ? f : a;
                    return k = c.tick.make(b, d, e), this.ticks = k.ticks, k
                };
                d.prototype.calculate = function() {
                    var a,
                        b,
                        c,
                        d,
                        e;
                    b = {};
                    b.title = {
                        marks: {
                            0: this._makeTitle(this.titletext)
                        }
                    };
                    e = this.ticks;
                    for (c in e)
                        a = e[c], d = {}, d.tick = this._makeTick(a), d.text = this._makeLabel(a), a = this._makeEvtData(a),
                        b[c] = {
                            marks: d,
                            evtData: a
                        };
                    return b
                };
                d.prototype.render = function(a) {
                    this.geometry.set(this.calculate());
                    return this.geometry.render(a)
                };
                d.prototype.dispose = function(a) {
                    return this.geometry.dispose(a)
                };
                d.prototype._makeTitle = function(b, c) {
                    null == c && (c = {
                        x: 0,
                        y: 0
                    });
                    return {
                        type: "text",
                        x: a.identity(c.x + 5),
                        y: a.identity(c.y),
                        color: a.identity("black"),
                        text: b,
                        "text-anchor": "start"
                    }
                };
                d.prototype._makeLabel = function(b, c) {
                    c || (c = {
                        x: 0,
                        y: 15 + 12 * b.index
                    });
                    return {
                        type: "text",
                        x: a.identity(c.x + 20),
                        y: a.identity(c.y + 1),
                        color: a.identity("black"),
                        text: b.value,
                        "text-anchor": "start"
                    }
                };
                d.prototype._makeTick = function(b, d) {
                    var e,
                        f,
                        k,
                        h;
                    d || (d = {
                        x: 0,
                        y: 15 + 12 * b.index
                    });
                    f = {
                        type: "circle",
                        x: a.identity(d.x + 10),
                        y: a.identity(d.y),
                        color: a.identity("steelblue")
                    };
                    h = this.mapping;
                    for (e in h)
                        k = h[e], 0 <= p.call(c["const"].noLegend, e) || (k = k[0], 0 <= p.call(this.aes, e) ? f[e] = b.location : null != k.type && "const" === k.type ? f[e] = a.identity(k.value) : _.isObject(k) ? f[e] = a.identity(c["const"].defaults[e]) : f[e] = a.identity(k));
                    _.isObject(f.size) && (f.size = a.identity(5));
                    return f
                };
                d.prototype._makeEvtData =
                function(a) {
                    var b,
                        c,
                        d,
                        e,
                        f,
                        k,
                        h;
                    c = {};
                    h = this.mapping;
                    for (b in h)
                        for (e = h[b], f = 0, k = e.length; f < k; f++)
                            d = e[f], 0 <= p.call(this.aes, b) && "map" === d.type && (c[d.value] = a.evtData);
                    return c
                };
                return d
            }(c.Guide);
            b = function(a) {
                function b() {
                    return d = b.__super__.constructor.apply(this, arguments)
                }
                n(b, a);
                b.prototype.make = function(a) {
                    var d;
                    b.__super__.make.call(this, a);
                    this.height = this.TITLEHEIGHT + this.SPACING + this.TICKHEIGHT * _.size(this.ticks);
                    d = c.strSize(this.titletext);
                    a = _.max(_.map(this.ticks, function(a) {
                        return c.strSize(a.value)
                    }));
                    return this.maxwidth = Math.max(d, a)
                };
                b.prototype.getDimension = function() {
                    return {
                        position: this.position,
                        height: this.height,
                        width: 15 + this.maxwidth
                    }
                };
                return b
            }(s);
            f = function(a) {
                function b() {
                    return e = b.__super__.constructor.apply(this, arguments)
                }
                n(b, a);
                b.prototype.TICKSPACING = 25;
                b.prototype.make = function(a) {
                    var d,
                        e,
                        f,
                        k;
                    b.__super__.make.call(this, a);
                    this.maxwidth = a.dims.width;
                    this.height = this.TITLEHEIGHT + this.SPACING;
                    a = 0;
                    this.height += this.TICKHEIGHT;
                    k = this.ticks;
                    e = 0;
                    for (f = k.length; e < f; e++)
                        d = k[e], d = c.strSize(d.value) +
                        this.TICKSPACING, a + d < this.maxwidth ? a += d : (this.height += this.TICKHEIGHT, a = d);
                    return null
                };
                b.prototype.calculate = function() {
                    var a,
                        b,
                        d,
                        e,
                        f,
                        k,
                        h;
                    b = {};
                    b.title = {
                        marks: {
                            0: this._makeTitle(this.titletext)
                        }
                    };
                    f = {
                        x: 0,
                        y: this.TITLEHEIGHT
                    };
                    h = this.ticks;
                    for (d in h)
                        k = h[d], e = {}, e.tick = this._makeTick(k, f), e.text = this._makeLabel(k, f), a = this._makeEvtData(k, f), b[d] = {
                            marks: e,
                            evtData: a
                        }, a = c.strSize(k.value) + this.TICKSPACING, f.x + a < this.maxwidth ? f.x += a : (f.x = 0, f.y += this.TICKHEIGHT);
                    return b
                };
                b.prototype.getDimension = function() {
                    return {
                        position: this.position,
                        height: this.height,
                        width: "all"
                    }
                };
                return b
            }(s)
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p,
                m,
                r,
                q,
                l,
                g,
                w,
                u,
                t = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                z = {}.hasOwnProperty,
                E = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b)
                        z.call(b, d) && (a[d] = b[d]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                };
            p = function() {
                function a(b) {
                    this.f = null
                }
                a.prototype.make = function(a) {
                    this.domain = a;
                    this.compare = c.domain.compare(a);
                    if (!a)
                        return this._makeNone();
                    switch (a.type) {
                    case "num":
                        return this._makeNum();
                    case "date":
                        return this._makeDate();
                    case "cat":
                        return this._makeCat()
                    }
                };
                a.prototype._makeNone = function() {
                    throw c.error.impl("You are using a scale that does not support null values");
                };
                a.prototype._makeNum = function() {
                    throw c.error.impl("You are using a scale that does not support numbers");
                };
                a.prototype._makeDate = function() {
                    throw c.error.impl("You are using a scale that does not support dates");
                };
                a.prototype._makeCat = function() {
                    throw c.error.impl("You are using a scale that does not support categories");
                };
                a.prototype.tickType = function() {
                    if (!this.domain)
                        return this._tickNone();
                    switch (this.domain.type) {
                    case "num":
                        return this._tickNum();
                    case "date":
                        return this._tickDate();
                    case "cat":
                        return this._tickCat()
                    }
                };
                a.prototype._tickNone = function() {
                    return "none"
                };
                a.prototype._tickNum = function() {
                    return "num"
                };
                a.prototype._tickDate = function() {
                    return "date"
                };
                a.prototype._tickCat = function() {
                    return "cat"
                };
                a.prototype._identityWrapper = function(a) {
                    return function(b) {
                        return _.isObject(b) && "scalefn" === b.t && "identity" ===
                        b.f ? b.v : a(b)
                    }
                };
                return a
            }();
            f = function(a) {
                function b(a) {
                    this._catWrapper = t(this._catWrapper, this);
                    this._dateWrapper = t(this._dateWrapper, this);
                    this._numWrapper = t(this._numWrapper, this);
                    this.finv = this.f = null
                }
                E(b, a);
                b.prototype.make = function(a, c, d) {
                    this.range = c;
                    this.space = d;
                    _.isNumber(this.space) || (this.space = 0.05);
                    return b.__super__.make.call(this, a)
                };
                b.prototype._makeNone = function() {
                    var a,
                        b = this;
                    a = (this.range.max - this.range.min) * this.space;
                    this.f = this._NaNCheckWrap(function(c) {
                        var d;
                        if (_.isObject(c)) {
                            if ("identity" ===
                            c.f)
                                return c.v;
                            if ("middle" === c.f)
                                return b.range.max / 2 + b.range.min / 2;
                            if ("max" === c.f)
                                return b.range.max;
                            if ("min" === c.f)
                                return b.range.min;
                            if ("upper" === c.f && !c.m)
                                return b.range.max - a;
                            if ("lower" === c.f && !c.m)
                                return b.range.min + a;
                            d = (b.range.max - b.range.min - 2 * a) / c.m;
                            if ("upper" === c.f)
                                return b.range.min + a + (c.n + 1) * d;
                            if ("lower" === c.f)
                                return b.range.min + a + c.n * d
                        }
                        return b.range.max / 2 + b.range.min / 2
                    });
                    return this.finv = function() {
                        return {}
                    }
                };
                b.prototype._NaNCheckWrap = function(a) {
                    return function(b) {
                        if (c.isDefined(b)) {
                            b =
                            a(b);
                            if (isNaN(b) || Infinity === b || -Infinity === b)
                                throw c.error.scale("Scale outputed a value that is not finite.");
                            return b
                        }
                    }
                };
                b.prototype._numWrapper = function(a, b) {
                    var d = this;
                    return this._NaNCheckWrap(function(g) {
                        var e,
                            f,
                            l;
                        if (_.isObject(g)) {
                            if ("scalefn" === g.t) {
                                if ("identity" === g.f)
                                    return g.v;
                                if ("middle" === g.f)
                                    return b(g.v + a.bw / 2);
                                if ("max" === g.f)
                                    return d.range.max + g.v;
                                if ("min" === g.f)
                                    return d.range.min + g.v;
                                if ("upper" === (e = g.f) || "lower" === e) {
                                    l = b(g.v + a.bw);
                                    e = b(g.v);
                                    f = (l - e) * d.space;
                                    if ("upper" === g.f && !g.m)
                                        return l -
                                        f;
                                    if ("lower" === g.f && !g.m)
                                        return e + f;
                                    l = (l - e - 2 * f) / g.m;
                                    if ("upper" === g.f)
                                        return e + f + (g.n + 1) * l;
                                    if ("lower" === g.f)
                                        return e + f + g.n * l
                                }
                            }
                            throw c.error.input("Unknown object " + g + " is passed to a scale");
                        }
                        return b(g)
                    })
                };
                b.prototype._dateWrapper = function(a, b) {
                    var d = this;
                    return this._NaNCheckWrap(function(g) {
                        var e,
                            f,
                            l,
                            k;
                        if (_.isObject(g)) {
                            if ("scalefn" === g.t) {
                                if ("identity" === g.f)
                                    return g.v;
                                if ("max" === g.f)
                                    return d.range.max + g.v;
                                if ("min" === g.f)
                                    return d.range.min + g.v;
                                if ("upper" === (e = g.f) || "middle" === e || "lower" === e) {
                                    k =
                                    function(a, b, c) {
                                        var d;
                                        null == c && (c = 0);
                                        d = moment.unix(g.v).startOf(b);
                                        d[b](a * Math.floor(d[b]() / a) + a * c);
                                        return d.unix()
                                    };
                                    l = function() {
                                        switch (a.bw) {
                                        case "week":
                                            return moment.unix(g.v).day(7).unix();
                                        case "twomonth":
                                            return k(2, "month");
                                        case "quarter":
                                            return k(4, "month");
                                        case "sixmonth":
                                            return k(6, "month");
                                        case "twoyear":
                                            return k(2, "year");
                                        case "fiveyear":
                                            return k(5, "year");
                                        case "decade":
                                            return k(10, "year");
                                        default:
                                            return moment.unix(g.v).endOf(a.bw).unix()
                                        }
                                    }();
                                    l = b(l);
                                    e = function() {
                                        switch (a.bw) {
                                        case "week":
                                            return moment.unix(g.v).day(0).unix();
                                        case "twomonth":
                                            return k(2, "month", 1);
                                        case "quarter":
                                            return k(4, "month", 1);
                                        case "sixmonth":
                                            return k(6, "month", 1);
                                        case "twoyear":
                                            return k(2, "year", 1);
                                        case "fiveyear":
                                            return k(5, "year", 1);
                                        case "decade":
                                            return k(10, "year", 1);
                                        default:
                                            return moment.unix(g.v).startOf(a.bw).unix()
                                        }
                                    }();
                                    e = b(e);
                                    f = (l - e) * d.space;
                                    if ("middle" === g.f)
                                        return l / 2 + e / 2;
                                    if ("upper" === g.f && !g.m)
                                        return l - f;
                                    if ("lower" === g.f && !g.m)
                                        return e + f;
                                    l = (l - e - 2 * f) / g.m;
                                    if ("upper" === g.f)
                                        return e + f + (g.n + 1) * l;
                                    if ("lower" === g.f)
                                        return e + f + g.n * l
                                }
                            }
                            throw c.error.input("Unknown object " +
                            g + " is passed to a scale");
                        }
                        return b(g)
                    })
                };
                b.prototype._catWrapper = function(a, b) {
                    var d = this;
                    return this._NaNCheckWrap(function(g) {
                        var e,
                            f,
                            l;
                        f = a * d.space;
                        if (_.isObject(g)) {
                            if ("scalefn" === g.t) {
                                if ("identity" === g.f)
                                    return g.v;
                                if ("max" === g.f)
                                    return d.range.max + g.v;
                                if ("min" === g.f)
                                    return d.range.min + g.v;
                                if ("upper" === (e = g.f) || "middle" === e || "lower" === e) {
                                    l = b(g.v) + a;
                                    e = b(g.v);
                                    if ("middle" === g.f)
                                        return l / 2 + e / 2;
                                    if ("upper" === g.f && !g.m)
                                        return l - f;
                                    if ("lower" === g.f && !g.m)
                                        return e + f;
                                    l = (l - e - 2 * f) / g.m;
                                    if ("upper" === g.f)
                                        return e +
                                        f + (g.n + 1) * l;
                                    if ("lower" === g.f)
                                        return e + f + g.n * l
                                }
                            }
                            throw c.error.input("Unknown object " + g + " is passed to a scale");
                        }
                        return b(g) + a / 2
                    })
                };
                return b
            }(p);
            d = function(a) {
                function b() {
                    return m = b.__super__.constructor.apply(this, arguments)
                }
                E(b, a);
                b.prototype._makeNum = function() {
                    var a,
                        b;
                    b = c.linear(this.domain.min, this.range.min, this.domain.max, this.range.max);
                    a = c.linear(this.range.min, this.domain.min, this.range.max, this.domain.max);
                    this.f = this._numWrapper(this.domain, b);
                    return this.finv = function(b, c) {
                        var d;
                        d = [a(b),
                        a(c)];
                        return {
                            ge: _.min(d),
                            le: _.max(d)
                        }
                    }
                };
                b.prototype._makeDate = function() {
                    var a,
                        b;
                    b = c.linear(this.domain.min, this.range.min, this.domain.max, this.range.max);
                    a = c.linear(this.range.min, this.domain.min, this.range.max, this.domain.max);
                    this.f = this._dateWrapper(this.domain, b);
                    return this.finv = function(b, c) {
                        var d;
                        d = [a(b), a(c)];
                        return {
                            ge: _.min(d),
                            le: _.max(d)
                        }
                    }
                };
                b.prototype._makeCat = function() {
                    var a,
                        b = this;
                    a = (this.range.max - this.range.min) / this.domain.levels.length;
                    this.f = this._catWrapper(a, function(c) {
                        c = _.indexOf(b.domain.levels,
                        c);
                        return -1 === c ? null : b.range.min + c * a
                    });
                    return this.finv = function(c, d) {
                        var g;
                        d < c && (g = [d, c], c = g[0], d = g[1]);
                        return {
                            "in": b.domain.levels.slice(Math.floor(c / a), +Math.floor(d / a) + 1 || 9E9)
                        }
                    }
                };
                return b
            }(f);
            e = function(a) {
                function b() {
                    return r = b.__super__.constructor.apply(this, arguments)
                }
                E(b, a);
                b.prototype._makeNum = function() {
                    var a,
                        b,
                        d,
                        g;
                    if (0 > this.domain.min)
                        throw c.error.input("Log scale cannot handle zero or negative input.");
                    a = Math.log;
                    d = c.linear(a(this.domain.min), this.range.min, a(this.domain.max), this.range.max);
                    this.f = this._numWrapper(this.domain, function(b) {
                        return d(a(b))
                    });
                    g = c.linear(this.range.min, a(this.domain.min), this.range.max, a(this.domain.max));
                    b = function(a) {
                        return Math.exp(g(a))
                    };
                    return this.finv = function(a, c) {
                        var d;
                        d = [b(a), b(c)];
                        return {
                            ge: _.min(d),
                            le: _.max(d)
                        }
                    }
                };
                b.prototype._tickNum = function() {
                    return "num-log"
                };
                return b
            }(f);
            f = function(a) {
                function b() {
                    this._makeDate = t(this._makeDate, this);
                    this._makeNum = t(this._makeNum, this);
                    return q = b.__super__.constructor.apply(this, arguments)
                }
                E(b, a);
                b.prototype._makeNum =
                function() {
                    var a,
                        b,
                        d;
                    a = 0 === this.domain.min ? 0 : 1;
                    b = Math.sqrt;
                    d = c.linear(b(this.domain.min), a, b(this.domain.max), 10);
                    return this.f = this._identityWrapper(function(a) {
                        return d(b(a))
                    })
                };
                b.prototype._makeDate = function() {
                    return this._makeNum()
                };
                return b
            }(p);
            k = function(a) {
                function b() {
                    this._makeDate = t(this._makeDate, this);
                    this._makeNum = t(this._makeNum, this);
                    return l = b.__super__.constructor.apply(this, arguments)
                }
                E(b, a);
                b.prototype._makeNum = function() {
                    return this.f = this._identityWrapper(c.linear(this.domain.min,
                    0 === this.domain.min ? 0 : 0.1, this.domain.max, 1))
                };
                b.prototype._makeDate = function() {
                    return this._makeNum()
                };
                return b
            }(p);
            n = function(a) {
                function b() {
                    this._makeCat = t(this._makeCat, this);
                    return g = b.__super__.constructor.apply(this, arguments)
                }
                E(b, a);
                b.prototype._makeCat = function() {
                    var a,
                        b,
                        c,
                        d = this;
                    c = this.domain.levels.length;
                    if (9 >= c)
                        return a = "#E41A1C #377EB8 #4DAF4A #984EA3 #FF7F00 #FFFF33 #A65628 #F781BF #999999".split(" "), this.f = function(b) {
                            b = _.indexOf(d.domain.levels, b);
                            return a[b]
                        };
                    b = function(a) {
                        return _.indexOf(d.domain.levels,
                        a) / c + 1 / (2 * c)
                    };
                    return this.f = function(a) {
                        return Raphael.hsl(b(a), 0.5, 0.5)
                    }
                };
                return b
            }(p);
            h = function(a) {
                function b(a) {
                    this._makeDate = t(this._makeDate, this);
                    this._makeNum = t(this._makeNum, this);
                    this.lower = a.lower;
                    this.upper = a.upper
                }
                E(b, a);
                b.prototype._makeNum = function() {
                    var a,
                        b,
                        d,
                        g,
                        e;
                    d = Raphael.color(this.lower);
                    e = Raphael.color(this.upper);
                    g = c.linear(this.domain.min, d.r, this.domain.max, e.r);
                    b = c.linear(this.domain.min, d.g, this.domain.max, e.g);
                    a = c.linear(this.domain.min, d.b, this.domain.max, e.b);
                    return this.f =
                    this._identityWrapper(function(c) {
                        return Raphael.rgb(g(c), b(c), a(c))
                    })
                };
                b.prototype._makeDate = function() {
                    return this._makeNum()
                };
                return b
            }(p);
            b = function(a) {
                function b(a) {
                    this._makeDate = t(this._makeDate, this);
                    this._makeCat = t(this._makeCat, this);
                    this._makeNum = t(this._makeNum, this);
                    this.lower = a.lower;
                    this.middle = a.middle;
                    this.upper = a.upper;
                    this.midpoint = a.midpoint;
                    null == this.midpoint && (this.midpoint = 0)
                }
                E(b, a);
                b.prototype._makeNum = function() {
                    var a,
                        b,
                        d,
                        g,
                        e,
                        f,
                        l,
                        k,
                        h,
                        t = this;
                    e = Raphael.color(this.lower);
                    f =
                    Raphael.color(this.middle);
                    h = Raphael.color(this.upper);
                    l = c.linear(this.domain.min, e.r, this.midpoint, f.r);
                    d = c.linear(this.domain.min, e.g, this.midpoint, f.g);
                    a = c.linear(this.domain.min, e.b, this.midpoint, f.b);
                    k = c.linear(this.midpoint, f.r, this.domain.max, h.r);
                    g = c.linear(this.midpoint, f.g, this.domain.max, h.g);
                    b = c.linear(this.midpoint, f.b, this.domain.max, h.b);
                    return this.f = this._identityWrapper(function(c) {
                        return c < t.midpoint ? Raphael.rgb(l(c), d(c), a(c)) : Raphael.rgb(k(c), g(c), b(c))
                    })
                };
                b.prototype._makeCat =
                function() {};
                b.prototype._makeDate = function() {
                    return this._makeNum()
                };
                return b
            }(p);
            s = function(a) {
                function b(a) {
                    this["function"] = a["function"]
                }
                E(b, a);
                b.prototype.make = function(a) {
                    this.domain = a;
                    this.compare = c.domain.compare(a);
                    return this.f = this._identityWrapper(this["function"])
                };
                return b
            }(p);
            (function(a) {
                function b() {
                    return w = b.__super__.constructor.apply(this, arguments)
                }
                E(b, a);
                b.prototype._makeCat = function() {};
                return b
            })(p);
            a = function(a) {
                function b() {
                    return u = b.__super__.constructor.apply(this, arguments)
                }
                E(b, a);
                b.prototype.make = function(a) {
                    this.domain = a;
                    this.compare = function(a, b) {
                        return 0
                    };
                    return this.f = this._identityWrapper(function(a) {
                        return a
                    })
                };
                return b
            }(p);
            c.scale = {};
            c.scale.Base = p;
            c.scale.classes = {
                linear: d,
                log: e,
                area: f,
                palette: n,
                gradient: h,
                gradient2: b,
                identity: a,
                opacity: k,
                custom: s
            };
            c.scale.make = function(a) {
                var b;
                b = a.type;
                if (b in c.scale.classes)
                    return new c.scale.classes[b](a);
                throw c.error.defn("No such scale " + a.type + ".");
            }
        }).call(this);
        (function() {
            var f,
                s = [].indexOf || function(c) {
                    for (var b =
                        0, a = this.length; b < a; b++)
                        if (b in this && this[b] === c)
                            return b;
                    return -1
                };
            c.scaleset = function(c, b, a) {
                return new f(c, b, a)
            };
            f = function() {
                function f(b, a) {
                    this.coord = a;
                    this.ranges = b;
                    this.axes = c.guide.axes();
                    this.legends = c.guide.legends()
                }
                f.prototype.make = function(b, a, c) {
                    this.guideSpec = b;
                    this.layers = c;
                    this.domains = a;
                    this.scales = this._makeScales(b, a, this.ranges);
                    this.reverse = {
                        x: this.scales.x.finv,
                        y: this.scales.y.finv
                    };
                    return this.layerMapping = this._mapLayers(c)
                };
                f.prototype.setRanges = function(b) {
                    var a,
                        c,
                        e,
                        f;
                    this.ranges = b;
                    e = ["x", "y"];
                    f = [];
                    a = 0;
                    for (c = e.length; a < c; a++)
                        b = e[a], f.push(this.scales[b].make(this.domains[b], this.ranges[b], this.getSpec(b).padding));
                    return f
                };
                f.prototype._makeScales = function(b, a, d) {
                    var e,
                        f;
                    f = function(a) {
                        var d,
                            e;
                        if (b && null != b[a] && null != b[a].scale) {
                            if (_.isFunction(b[a].scale))
                                return {
                                    type: "custom",
                                    "function": b[a].scale
                                };
                            switch (a) {
                            case "x":
                                d = ["linear", "log"];
                                break;
                            case "y":
                                d = ["linear", "log"];
                                break;
                            case "color":
                                d = ["palette", "gradient", "gradient2"];
                                break;
                            case "size":
                                d = ["linear", "log"];
                                break;
                            case "opacity":
                                d = ["opacity"];
                                break;
                            case "shape":
                                d = ["linear", "log", "area"];
                                break;
                            case "id":
                                d = ["identity"];
                                break;
                            case "text":
                                d = ["identity"];
                                break;
                            default:
                                d = []
                            }
                            if (e = b[a].scale.type, 0 <= s.call(d, e))
                                return b[a].scale;
                            throw c.error.scale("Aesthetic " + a + " cannot have scale " + b[a].scale.type);
                        }
                        return null
                    };
                    e = {};
                    e.x = c.scale.make(f("x") || {
                        type: "linear"
                    });
                    e.x.make(a.x, d.x, this.getSpec("x").padding);
                    e.y = c.scale.make(f("y") || {
                        type: "linear"
                    });
                    e.y.make(a.y, d.y, this.getSpec("y").padding);
                    null != a.color && ("cat" ===
                    a.color.type ? e.color = c.scale.make(f("color") || {
                        type: "palette"
                    }) : (d = {
                        type: "gradient",
                        upper: "steelblue",
                        lower: "red"
                    }, e.color = c.scale.make(f("color") || d)), e.color.make(a.color));
                    null != a.size && (e.size = c.scale.make(f("size") || {
                        type: "area"
                    }), e.size.make(a.size));
                    null != a.opacity && (e.opacity = c.scale.make(f("opacity") || {
                        type: "opacity"
                    }), e.opacity.make(a.opacity));
                    e.text = c.scale.make({
                        type: "identity"
                    });
                    e.text.make();
                    return e
                };
                f.prototype.fromPixels = function(b, a) {
                    var c,
                        e,
                        f,
                        h,
                        p,
                        m,
                        r;
                    null != b && null != a && (c = this.coord.getAes(b,
                    a, this.reverse), f = c.x, h = c.y);
                    e = {};
                    r = this.layerMapping.x;
                    p = 0;
                    for (m = r.length; p < m; p++)
                        c = r[p], null != c.type && "map" === c.type && (e[c.value] = null != f ? f : null);
                    m = this.layerMapping.y;
                    f = 0;
                    for (p = m.length; f < p; f++)
                        c = m[f], null != c.type && "map" === c.type && (e[c.value] = null != h ? h : null);
                    return e
                };
                f.prototype.getSpec = function(b) {
                    return null != this.guideSpec && null != this.guideSpec[b] ? this.guideSpec[b] : {}
                };
                f.prototype.makeGuides = function(b, a) {
                    var c,
                        e;
                    this.makeAxes();
                    this.makeTitles(null != (c = b.title) ? c : "");
                    this.makeLegends(null !=
                    (e = b.legendPosition) ? e : "right", a);
                    return {
                        axes: this.axes,
                        legends: this.legends,
                        title: this.title
                    }
                };
                f.prototype.renderGuides = function(b, a, c) {
                    this.axes.render(b, a, c);
                    this.renderTitles(b, a);
                    return this.renderLegends(b, a)
                };
                f.prototype.disposeGuides = function(b) {
                    this.axes.dispose(b);
                    this.legends.dispose(b);
                    this.titles.x.dispose(b);
                    this.titles.y.dispose(b);
                    this.titles.main.dispose(b);
                    return this.titles = {}
                };
                f.prototype.makeTitles = function(b) {
                    null == this.titles && (this.titles = {
                        x: c.guide.title(this.coord.axisType("x")),
                        y: c.guide.title(this.coord.axisType("y")),
                        main: c.guide.title("main")
                    });
                    this.titles.main.make({
                        title: b,
                        guideSpec: {},
                        position: "top"
                    });
                    this.titles.x.make({
                        guideSpec: this.getSpec("x"),
                        title: c.getLabel(this.layers, "x")
                    });
                    return this.titles.y.make({
                        guideSpec: this.getSpec("y"),
                        title: c.getLabel(this.layers, "y")
                    })
                };
                f.prototype.titleOffset = function(b) {
                    var a,
                        c,
                        e,
                        f,
                        h,
                        p,
                        m;
                    b = {};
                    p = this.titles;
                    for (c in p)
                        for (a = p[c], e = a.getDimension(), m = ["left", "right", "top", " bottom"], f = 0, h = m.length; f < h; f++)
                            a = m[f], e[a] && (null == b[a] &&
                            (b[a] = 0), b[a] += e[a]);
                    return b
                };
                f.prototype.renderTitles = function(b, a) {
                    var c;
                    a = a({}, !1, !1);
                    c = this.axesOffset(b);
                    this.titles.x.render(a, b, c);
                    this.titles.y.render(a, b, c);
                    return this.titles.main.render(a, b, c)
                };
                f.prototype.makeAxes = function() {
                    var b;
                    return this.axes.make({
                        domains: {
                            x: this.domains.x,
                            y: this.domains.y
                        },
                        coord: this.coord,
                        scales: this.scales,
                        specs: null != (b = this.guideSpec) ? b : {},
                        labels: {
                            x: c.getLabel(this.layers, "x"),
                            y: c.getLabel(this.layers, "y")
                        }
                    })
                };
                f.prototype.axesOffset = function(b) {
                    return this.axes.getDimension(b)
                };
                f.prototype._mapLayers = function(b) {
                    var a,
                        d,
                        e,
                        f,
                        h;
                    d = {};
                    h = c["const"].aes;
                    e = 0;
                    for (f = h.length; e < f; e++)
                        a = h[e], d[a] = _.map(b, function(b) {
                            return null != b.mapping[a] ? {
                                type: "map",
                                value: b.mapping[a]
                            } : null != b.consts[a] ? {
                                type: "const",
                                value: b.consts[a]
                            } : b.defaults[a]
                        });
                    return d
                };
                f.prototype.makeLegends = function(b, a) {
                    null == b && (b = "right");
                    return this.legends.make({
                        domains: this.domains,
                        layers: this.layers,
                        guideSpec: this.guideSpec,
                        scales: this.scales,
                        layerMapping: this.layerMapping,
                        position: b,
                        dims: a
                    })
                };
                f.prototype.legendOffset =
                function(b) {
                    return this.legends.getDimension(b)
                };
                f.prototype.renderLegends = function(b, a) {
                    var c,
                        e,
                        f,
                        h,
                        p,
                        m,
                        r,
                        q,
                        l;
                    f = {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    };
                    c = this.axesOffset(b);
                    h = this.titleOffset(b);
                    r = ["left", "right", "top", "bottom"];
                    p = 0;
                    for (m = r.length; p < m; p++)
                        e = r[p], f[e] += null != (q = c[e]) ? q : 0, f[e] += null != (l = h[e]) ? l : 0;
                    return this.legends.render(b, a, f)
                };
                return f
            }()
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p = {}.hasOwnProperty,
                m = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b)
                        p.call(b, d) && (a[d] =
                        b[d]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                },
                r = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; b < c; b++)
                        if (b in this && this[b] === a)
                            return b;
                    return -1
                },
                q = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                };
            c.data = function(a) {
                var b,
                    d;
                d = void 0;
                _.isObject(a) && 4 > _.keys(a).length && "data" in a ? (b = a.data, d = a.meta) : b = a;
                switch (k(b)) {
                case "json-object":
                case "json-grid":
                case "json-array":
                    return c.data.json(b, d, void 0);
                case "url":
                    return c.data.url(b, d, void 0);
                case "csv":
                    return c.data.csv(b,
                    d);
                case "api":
                    return c.data.api(b);
                default:
                    throw c.error.data("Unknown data format.");
                }
            };
            c.data.json = function(a, c, d) {
                return new b({
                    data: a,
                    meta: c,
                    type: d
                })
            };
            c.data.csv = function(a, c) {
                return new b({
                    data: a,
                    meta: c,
                    csv: "csv"
                })
            };
            c.data.url = function(a, b, c) {
                return new h({
                    url: a,
                    computeBackend: b,
                    limit: c
                })
            };
            c.data.api = function(a) {
                return new s({
                    apiFun: a
                })
            };
            k = function(a) {
                if (_.isArray(a))
                    return _.isArray(a[0]) ? "json-grid" : "json-array";
                if (_.isObject(a))
                    return "json-object";
                if (_.isString(a))
                    return c.isURI(a) ? "url" :
                    "csv";
                if (_.isFunction(a))
                    return "api";
                throw c.error.data("Unknown data format.");
            };
            a = function(a, b) {
                var d,
                    e,
                    f,
                    k,
                    h,
                    n,
                    m;
                if (0 < a.length) {
                    f = _.union(_.keys(b), _.keys(a[0]));
                    d = a.slice(0, 100);
                    k = 0;
                    for (h = f.length; k < h; k++)
                        e = f[k], null == b[e] && (b[e] = {}), b[e].type || (b[e].type = c.type.impute(_.pluck(d, e)));
                    k = 0;
                    for (n = a.length; k < n; k++)
                        for (d = a[k], h = 0, m = f.length; h < m; h++)
                            e = f[h], d[e] = c.type.coerce(d[e], b[e]);
                    e = f;
                    f = a
                } else
                    e = _.keys(b), f = [];
                return {
                    key: e,
                    raw: f,
                    meta: b
                }
            };
            d = function(a, b) {
                var d,
                    e,
                    f,
                    k,
                    h,
                    n,
                    m,
                    p,
                    y,
                    q,
                    v;
                n = [];
                if (0 < a.length) {
                    k =
                    b && _.isArray(b) ? b : b && _.isObject(b) ? _.keys(b) : _.keys(a[0]);
                    if (_.isArray(b) || !_.isObject(b))
                        b = {};
                    d = a.slice(0, 100);
                    e = h = 0;
                    for (m = k.length; h < m; e = ++h)
                        f = k[e], null == b[f] && (b[f] = {}), b[f].type || (b[f].type = c.type.impute(_.pluck(d, e)));
                    p = 0;
                    for (q = a.length; p < q; p++) {
                        d = a[p];
                        h = {};
                        e = y = 0;
                        for (v = d.length; y < v; e = ++y)
                            m = d[e], f = k[e], h[f] = c.type.coerce(m, b[f]);
                        n.push(h)
                    }
                    f = k;
                    e = n
                } else
                    f = _.keys(b), e = [];
                return {
                    key: f,
                    raw: e,
                    meta: b
                }
            };
            n = function(a, b) {
                var d,
                    e,
                    f,
                    k,
                    h,
                    n,
                    m,
                    p,
                    y;
                f = _.keys(a);
                h = [];
                n = 0;
                for (e = f.length; n < e; n++)
                    d = f[n], null == b[d] &&
                    (b[d] = {}), b[d].type || (b[d].type = c.type.impute(a[d].slice(0, 100)));
                if (0 < f.length && (e = a[f[0]].length, 0 < e))
                    for (d = n = 0, y = e - 1; 0 <= y ? n <= y : n >= y; d = 0 <= y ? ++n : --n) {
                        k = {};
                        m = 0;
                        for (p = f.length; m < p; m++)
                            e = f[m], k[e] = c.type.coerce(a[e][d], b[e]);
                        h.push(k)
                    }
                return {
                    key: f,
                    raw: h,
                    meta: b
                }
            };
            e = function(b, d) {
                return a(c.csv.parse(b), d)
            };
            f = function() {
                function a() {
                    this.raw = null;
                    this.meta = {};
                    this.key = [];
                    this.subscribed = [];
                    this.computeBackend = !1
                }
                a.prototype.isData = !0;
                a.prototype.update = function() {
                    var a,
                        b,
                        c,
                        d,
                        e;
                    d = this.subscribed;
                    e = [];
                    b = 0;
                    for (c = d.length; b < c; b++)
                        a = d[b], e.push(a());
                    return e
                };
                a.prototype.subscribe = function(a) {
                    if (-1 === _.indexOf(this.subscribed, a))
                        return this.subscribed.push(a)
                };
                a.prototype.unsubscribe = function(a) {
                    return this.subscribed.splice(_.indexOf(this.subscribed, a), 1)
                };
                a.prototype.keys = function() {
                    return this.key
                };
                a.prototype.rename = function() {
                    return !1
                };
                a.prototype.renameMany = function() {
                    return !1
                };
                a.prototype.remove = function() {
                    return !1
                };
                a.prototype.filter = function() {
                    return !1
                };
                a.prototype.sort = function() {
                    return !1
                };
                a.prototype.derive = function() {
                    return !1
                };
                a.prototype.get = function(a) {
                    if (this.raw)
                        return _.pluck(this.raw, a);
                    throw c.error.data("Data has not been fetched or is undefined.");
                };
                a.prototype.len = function() {
                    if (this.raw)
                        return this.raw.length;
                    throw c.error.data("Data has not been fetched or is undefined.");
                };
                a.prototype.getObject = function(a) {
                    if (this.raw)
                        return this.raw[a];
                    throw c.error.data("Data has not been fetched or is undefined.");
                };
                a.prototype.max = function(a) {
                    return _.max(this.get(a))
                };
                a.prototype.min =
                function(a) {
                    return _.min(this.get(a))
                };
                a.prototype.getMeta = function(a) {
                    if (this.meta)
                        return this.meta[a]
                };
                a.prototype.type = function(a) {
                    if (a in this.meta)
                        return a = this.meta[a].type, "num" === a ? "number" : a;
                    throw c.error.defn("Data does not have column " + a + ".");
                };
                return a
            }();
            b = function(b) {
                function g(a) {
                    g.__super__.constructor.call(this);
                    this._setData(a)
                }
                m(g, b);
                g.prototype.getData = function(a) {
                    return a(null, this)
                };
                g.prototype.update = function(a) {
                    this._setData(a);
                    return g.__super__.update.call(this)
                };
                g.prototype._setData =
                function(b) {
                    var g,
                        f,
                        h;
                    _.isObject(b) && 4 > _.keys(b).length && "data" in b ? (g = b.data, f = null != (h = b.meta) ? h : {}) : (g = b, f = {});
                    h = function() {
                        var h;
                        switch (null != (h = b.type) ? h : k(g)) {
                        case "json-object":
                            return n(g, f);
                        case "json-grid":
                            return d(g, f);
                        case "json-array":
                            return a(g, f);
                        case "csv":
                            return e(g, f);
                        default:
                            throw c.error.data("Unknown data format.");
                        }
                    }();
                    this.key = h.key;
                    this.raw = h.raw;
                    this.meta = h.meta;
                    return this.data = this.raw
                };
                g.prototype._checkRename = function(a, b) {
                    if ("" === b)
                        throw c.error.defn("Column names cannot be an empty string");
                    if (-1 === _.indexOf(this.key, a))
                        throw c.error.defn("The key " + a + " doesn't exist!");
                    if (-1 !== _.indexOf(this.key, b))
                        throw c.error.defn("The key " + b + " already exists!");
                };
                g.prototype.rename = function(a, b, c) {
                    var d,
                        e,
                        g;
                    null == c && (c = !1);
                    a = a.toString();
                    b = b.toString();
                    if (a === b)
                        return !0;
                    c || this._checkRename(a, b);
                    g = this.raw;
                    d = 0;
                    for (e = g.length; d < e; d++)
                        c = g[d], c[b] = c[a], delete c[a];
                    c = _.indexOf(this.key, a);
                    this.key[c] = b;
                    this.meta[b] = this.meta[a];
                    delete this.meta[a];
                    return !0
                };
                g.prototype.renameMany = function(a) {
                    var b,
                        c;
                    for (b in a)
                        c = a[b], b !== c && this._checkRename(b, c);
                    for (b in a)
                        c = a[b], b !== c && this.rename(b, c, !0);
                    return !0
                };
                g.prototype.remove = function(a) {
                    var b,
                        c,
                        d,
                        e;
                    b = _.indexOf(this.key, a);
                    if ("-1" === b)
                        return !1;
                    this.key.splice(b, 1);
                    delete this.meta[a];
                    e = this.raw;
                    c = 0;
                    for (d = e.length; c < d; c++)
                        b = e[c], delete b[a];
                    return !0
                };
                g.prototype.filter = function(a) {
                    var b,
                        d,
                        e,
                        g,
                        f;
                    a = _.isFunction(a) ? a : _.isString(a) ? new Function("d", "with(d) { return " + a + ";}") : function() {
                        return !0
                    };
                    d = [];
                    f = this.raw;
                    e = 0;
                    for (g = f.length; e < g; e++)
                        b = f[e], a(b) &&
                        d.push(b);
                    return c.data.json(d, this.meta)
                };
                g.prototype.sort = function(a, b) {
                    var d,
                        e,
                        g;
                    g = this.type(a);
                    d = _.clone(this.raw);
                    e = c.type.compare(g);
                    d.sort(function(b, c) {
                        return e(b[a], c[a])
                    });
                    b && d.reverse();
                    return c.data.json(d, this.meta)
                };
                g.prototype.derive = function(a, b, d) {
                    var e,
                        g,
                        f,
                        k,
                        h,
                        l,
                        n,
                        v;
                    null == d && (d = {});
                    g = d.dryrun;
                    e = d.context;
                    null == b && (b = _uniqueId("var_"));
                    null == e && (e = {});
                    _.isFunction(a) ? (d = a, f = !1) : (f = !0, d = new Function("d", "with(this) { with(d) { return " + a(a) + ";}}"));
                    v = this.raw;
                    l = 0;
                    for (n = v.length; l <
                    n; l++) {
                        k = v[l];
                        h = d.call(e, k);
                        if (_.isFunction(h))
                            throw c.error.defn("Derivation function returned another function.");
                        k[b] = h
                    }
                    if (g)
                        return {
                            success: !0,
                            values: _.pluck(this.raw.slice(0, 11), b)
                        };
                    0 <= r.call(this.key, b) || this.key.push(b);
                    this.meta[b] = {
                        type: c.type.impute(_.pluck(this.raw.slice(0, 101), b)),
                        derived: !0
                    };
                    f && (this.meta[b].formula = a);
                    return b
                };
                return g
            }(f);
            h = function(b) {
                function g(a) {
                    this.getData = q(this.getData, this);
                    g.__super__.constructor.call(this);
                    this.url = a.url;
                    this.computeBackend = a.computeBackend;
                    this.limit = a.limit;
                    null == this.computeBackend && (this.computeBackend = !1)
                }
                m(g, b);
                g.prototype.getData = function(b, g) {
                    var f,
                        h,
                        l = this;
                    if (null != this.raw && !this.computeBackend)
                        return b(null, this);
                    f = -1 === _.indexOf(this.url, "?") ? "?" : "&";
                    h = this.url;
                    this.limit && (h += "" + f + "limit=" + this.limit);
                    g && (h += "&spec=" + encodeURIComponent(JSON.stringify(g)));
                    return c.text(h, function(g) {
                        var f,
                            h,
                            m;
                        try {
                            g = JSON.parse(g)
                        } catch (t) {}
                        _.isObject(g) && 4 > _.keys(g).length && "data" in g ? (f = g.data, h = null != (m = g.meta) ? m : {}) : (f = g, h = {});
                        g = function() {
                            switch (k(f)) {
                            case "json-object":
                                return n(f,
                                h);
                            case "json-grid":
                                return d(f, h);
                            case "json-array":
                                return a(f, h);
                            case "csv":
                                return e(f, h);
                            default:
                                throw c.error.data("Unknown data format.");
                            }
                        }();
                        l.key = g.key;
                        l.raw = g.raw;
                        l.meta = g.meta;
                        l.data = l.raw;
                        return b(null, l)
                    })
                };
                g.prototype.update = function(a) {
                    this.raw = null;
                    return g.__super__.update.call(this)
                };
                g.prototype.renameMany = function(a) {
                    return 0 === _.keys(a).length
                };
                return g
            }(f);
            s = function(b) {
                function d(a) {
                    this.getData = q(this.getData, this);
                    d.__super__.constructor.call(this);
                    this.apiFun = a.apiFun;
                    this.computeBackend =
                    !0
                }
                m(d, b);
                d.prototype.getData = function(b, d) {
                    var g = this;
                    return this.apiFun(d, function(d, f) {
                        var h,
                            l,
                            m,
                            p,
                            q;
                        if (null != d)
                            return b(d, null);
                        try {
                            f = JSON.parse(f)
                        } catch (v) {
                            l = v
                        }
                        try {
                            return h = f.data, m = null != (p = f.meta) ? p : {}, q = function() {
                                switch (k(h)) {
                                case "json-object":
                                    return n(h, m);
                                case "json-grid":
                                    return _getArrayofArrays(h, m);
                                case "json-array":
                                    return a(h, m);
                                case "csv":
                                    return e(h, m);
                                default:
                                    throw c.error.data("Unknown data format.");
                                }
                            }(), g.key = q.key, g.raw = q.raw, g.meta = q.meta, g.data = g.raw, b(null, g)
                        } catch (x) {
                            return l =
                            x, b(l)
                        }
                    })
                };
                d.prototype.update = function(a) {
                    this.raw = null;
                    return d.__super__.update.call(this)
                };
                d.prototype.renameMany = function(a) {
                    return 0 === _.keys(a).length
                };
                return d
            }(f)
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p,
                m,
                r = function(a, b) {
                    return function() {
                        return a.apply(b, arguments)
                    }
                },
                q = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; b < c; b++)
                        if (b in this && this[b] === a)
                            return b;
                    return -1
                };
            f = function() {
                function a(b, d, e) {
                    this._wrap = r(this._wrap, this);
                    this.layerMeta = b.meta;
                    this.dataObj = b.data;
                    this.initialSpec =
                    c.parser.layerToData(b, d);
                    this.prevSpec = null;
                    this.strictmode = e;
                    this.statData = null;
                    this.metaData = {}
                }
                a.prototype.reset = function(a) {
                    return this.make(this.initialSpec, a)
                };
                a.prototype.make = function(a, b, d) {
                    var f,
                        h;
                    h = this._wrap(d);
                    this.strictmode && h({
                        data: this.dataObj.raw,
                        meta: this.dataObj.meta
                    });
                    if (this.dataObj.computeBackend)
                        return f = c.parser.layerToData(a, b), this.layerMeta && 1 > _.size(f.meta) && (f.meta = this.layerMeta), s(f, this.dataObj, h);
                    f = c.parser.layerToData(a, b);
                    return this.dataObj.getData(function(a,
                    b) {
                        var c,
                            d,
                            g,
                            k;
                        if (null != a)
                            return h(a, null);
                        if (0 <= q.call(f.select, "count(*)")) {
                            k = b.data;
                            d = 0;
                            for (g = k.length; d < g; d++)
                                c = k[d], c["count(*)"] = 1;
                            b.meta["count(*)"] = {};
                            b.meta["count(*)"].type = "num";
                            f.stats.stats.push({
                                key: "count(*)",
                                name: "count(*)",
                                stat: "count"
                            })
                        }
                        return e(f, b, h)
                    })
                };
                a.prototype._wrap = function(a) {
                    var b = this;
                    return function(c, d) {
                        var e,
                            f;
                        if (null != c)
                            return a(c, null, null);
                        e = d.data;
                        f = d.meta;
                        b.statData = e;
                        b.metaData = f;
                        return a(null, b.statData, b.metaData)
                    }
                };
                return a
            }();
            c.DataProcess = f;
            c.data.process =
            function(a, b, c, d) {
                a = new f(b, c);
                a.process(d);
                return a
            };
            m = {
                bin: function(a, b, d) {
                    var e,
                        f;
                    f = b.name;
                    e = b.binwidth;
                    if ("num" === d.type) {
                        if (isNaN(e))
                            throw c.error.defn("The binwidth " + e + " is invalid for a numeric varliable");
                        e = +e;
                        b = function(b) {
                            return b[f] = e * Math.floor(b[a] / e)
                        };
                        return {
                            trans: b,
                            meta: {
                                bw: e,
                                binned: !0,
                                type: "num"
                            }
                        }
                    }
                    if ("date" === d.type) {
                        if (!(0 <= q.call(c["const"].timerange, e)))
                            throw c.error.defn("The binwidth " + e + " is invalid for a datetime varliable");
                        b = function(b) {
                            var c;
                            c = function(c, d) {
                                var e;
                                e = moment.unix(b[a]).startOf(d);
                                e[d](c * Math.floor(e[d]() / c));
                                return b[f] = e.unix()
                            };
                            switch (e) {
                            case "week":
                                return b[f] = moment.unix(b[a]).day(0).unix();
                            case "twomonth":
                                return c(2, "month");
                            case "quarter":
                                return c(4, "month");
                            case "sixmonth":
                                return c(6, "month");
                            case "twoyear":
                                return c(2, "year");
                            case "fiveyear":
                                return c(5, "year");
                            case "decade":
                                return c(10, "year");
                            default:
                                return b[f] = moment.unix(b[a]).startOf(e).unix()
                            }
                        };
                        return {
                            trans: b,
                            meta: {
                                bw: e,
                                binned: !0,
                                type: "date"
                            }
                        }
                    }
                },
                lag: function(a, b, c) {
                    var d,
                        e,
                        f;
                    f = b.name;
                    d = b.lag;
                    e = function() {
                        var a,
                            b;
                        b = [];
                        for (a = 1; 1 <= d ? a <= d : a >= d; 1 <= d ? ++a : --a)
                            b.push(void 0);
                        return b
                    }();
                    return {
                        trans: function(b) {
                            e.push(b[a]);
                            return b[f] = e.shift()
                        },
                        meta: {
                            type: c.type
                        }
                    }
                }
            };
            p = function(a, b, c) {
                return m[b.trans](a, b, null != c ? c : {})
            };
            d = {
                lt: function(a, b) {
                    return a < b
                },
                le: function(a, b) {
                    return a <= b
                },
                gt: function(a, b) {
                    return a > b
                },
                ge: function(a, b) {
                    return a >= b
                },
                "in": function(a, b) {
                    return 0 <= q.call(b, a)
                }
            };
            a = function(a) {
                var b;
                b = [];
                _.each(a, function(a, c) {
                    return _.each(a, function(a, e) {
                        return b.push(function(b) {
                            return d[e](b[c], a)
                        })
                    })
                });
                return function(a) {
                    var c,
                        d,
                        e;
                    d = 0;
                    for (e = b.length; d < e; d++)
                        if (c = b[d], !c(a))
                            return !1;
                    return !0
                }
            };
            k = {
                sum: function(a) {
                    return function(a) {
                        return _.reduce(_.without(a, void 0, null), function(a, b) {
                            return a + b
                        }, 0)
                    }
                },
                mean: function(a) {
                    return function(a) {
                        a = _.without(a, void 0, null);
                        return _.reduce(a, function(a, b) {
                            return a + b
                        }, 0) / a.length
                    }
                },
                count: function(a) {
                    return function(a) {
                        return _.without(a, void 0, null).length
                    }
                },
                unique: function(a) {
                    return function(a) {
                        return _.uniq(_.without(a, void 0, null)).length
                    }
                },
                min: function(a) {
                    return function(a) {
                        return _.min(a)
                    }
                },
                max: function(a) {
                    return function(a) {
                        return _.max(a)
                    }
                },
                median: function(a) {
                    return function(a) {
                        return c.median(a)
                    }
                },
                box: function(a) {
                    return function(a) {
                        var b,
                            d,
                            e,
                            f,
                            h,
                            k;
                        d = a.length;
                        return 5 < d ? (f = d / 2, a = _.sortBy(a, function(a) {
                            return a
                        }), b = Math.ceil(f) / 2, 0 !== b % 1 ? (b = Math.floor(b), f = a[b], d = a[d - 1 - b]) : (f = (a[b] + a[b - 1]) / 2, d = (a[d - b] + a[d - b - 1]) / 2), b = d - f, e = f - 1.5 * b, h = d + 1.5 * b, b = _.groupBy(a, function(a) {
                            return a >= e && a <= h
                        }), {
                            q1: _.min(b["true"]),
                            q2: f,
                            q3: c.median(a, !0),
                            q4: d,
                            q5: _.max(b["true"]),
                            outliers: null != (k = b["false"]) ?
                            k : []
                        }) : {
                            outliers: a
                        }
                    }
                }
            };
            n = function(a) {
                return k[a.stat](a)
            };
            b = function(a, b) {
                var d,
                    e;
                e = {};
                _.each(b.stats, function(a) {
                    var b,
                        c,
                        d;
                    b = a.key;
                    c = a.name;
                    d = n(a);
                    return e[c] = function(a) {
                        return d(_.pluck(a, b))
                    }
                });
                d = c.groupBy(a, b.groups);
                return _.map(d, function(a) {
                    var c;
                    c = {};
                    _.each(b.groups, function(b) {
                        return c[b] = a[0][b]
                    });
                    _.each(e, function(b, d) {
                        return c[d] = b(a)
                    });
                    return c
                })
            };
            h = function(a, c, d) {
                var e,
                    f,
                    h,
                    k;
                h = c.sort;
                k = c.stat;
                e = c.limit;
                c = c.asc;
                k && (k = {
                    stats: [k],
                    groups: [a]
                }, d = b(d, k));
                f = c ? 1 : -1;
                d.sort(function(a, b) {
                    return a[h] ===
                    b[h] ? 0 : a[h] >= b[h] ? 1 * f : -1 * f
                });
                e && (d = d.slice(0, +(e - 1) + 1 || 9E9));
                a = _.uniq(_.pluck(d, a));
                return {
                    meta: {
                        levels: a,
                        sorted: !0
                    },
                    filter: {
                        "in": a
                    }
                }
            };
            e = function(d, e, f) {
                var k,
                    n,
                    m,
                    q,
                    r,
                    s,
                    C,
                    y,
                    B,
                    v,
                    x,
                    D,
                    F;
                C = _.clone(e.meta);
                e = _.clone(e.raw);
                null == C && (C = {});
                k = function(a, b) {
                    var c;
                    return C[a] = _.extend(null != (c = C[a]) ? c : {}, b)
                };
                if (d.trans)
                    for (F = d.trans, q = 0, x = F.length; q < x; q++) {
                        y = F[q];
                        r = y.key;
                        s = p(r, y, C[r]);
                        n = s.trans;
                        s = s.meta;
                        B = 0;
                        for (D = e.length; B < D; B++)
                            m = e[B], n(m);
                        k(y.name, s)
                    }
                d.filter && (e = _.filter(e, a(d.filter)));
                if (d.meta) {
                    n = {};
                    y = d.meta;
                    for (r in y)
                        s = y[r], q = h(r, s, e), s = q.meta, q = q.filter, n[r] = q, k(r, s);
                    e = _.filter(e, a(n))
                }
                if (d.stats && d.stats.stats && 0 < d.stats.stats.length)
                    for (e = b(e, d.stats), n = d.stats.stats, r = 0, s = n.length; r < s; r++)
                        y = n[r], y = y.name, k(y, {
                            type: "num"
                        });
                d = null != (v = d.select) ? v : [];
                v = 0;
                for (k = d.length; v < k; v++)
                    if (r = d[v], null == C[r] && "count(*)" !== r)
                        throw c.error.defn("You referenced a data column " + r + " that doesn't exist.");
                return f(null, {
                    data: e,
                    meta: C
                })
            };
            s = function(a, b, c) {
                return b.getData(c, a)
            };
            c.data.frontendProcess = e
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p,
                m,
                r,
                q,
                l,
                g,
                w,
                u,
                t,
                z,
                E,
                A,
                G,
                C = [].indexOf || function(a) {
                    for (var b = 0, c = this.length; b < c; b++)
                        if (b in this && this[b] === a)
                            return b;
                    return -1
                },
                y = {}.hasOwnProperty,
                B = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b)
                        y.call(b, d) && (a[d] = b[d]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                };
            m = c["const"].aes;
            q = c["const"].scaleFns;
            r = {
                x: q.novalue(),
                y: q.novalue(),
                color: "steelblue",
                size: 5,
                opacity: 0.9,
                shape: 1
            };
            b = function() {
                function a(b, c, d) {
                    var e;
                    this.spec = b;
                    this.guideSpec = d;
                    this.mapping = {};
                    this.consts = {};
                    d = 0;
                    for (e = m.length; d < e; d++)
                        c = m[d], b[c] && (b[c]["var"] && (this.mapping[c] = b[c]["var"]), b[c]["const"] && (this.consts[c] = b[c]["const"]))
                }
                a.prototype.defaults = r;
                a.prototype.calculate = function(a, b) {
                    var c,
                        d,
                        e;
                    this.statData = a;
                    this.meta = b;
                    this._calcGeoms();
                    this.geoms = this._sample(this.geoms);
                    b = {};
                    e = this.mapping;
                    for (c in e)
                        d = e[c], b[c] = this.meta[d];
                    return {
                        geoms: this.geoms,
                        meta: b
                    }
                };
                a.prototype._calcGeoms = function() {
                    throw c.error.impl();
                };
                a.prototype._tooltip =
                function(a) {
                    var b = this;
                    return "function" === typeof this.spec.tooltip ? function(c) {
                        return b.spec.tooltip(a)
                    } : null != this.spec.tooltip ? function(a) {
                        return b.spec.tooltip
                    } : function(d) {
                        var e,
                            f,
                            g,
                            k,
                            h,
                            l;
                        h = "";
                        k = [];
                        l = b.mapping;
                        for (e in l)
                            g = l[e], -1 === k.indexOf(g) && (k.push(g), f = null != d && null != d[e] ? c.format(d[e].domain.type, d[e].domain.bw) : function(a) {
                                return a
                            }, h += "\n" + g + ": " + f(a[g]));
                        return h.substr(1)
                    }
                };
                a.prototype._sample = function(a) {
                    if (!1 === this.spec.sample)
                        return a;
                    if (_.isNumber(this.spec.sample))
                        return c.sample(a,
                        this.spec.sample);
                    throw c.error.defn("A layer's 'sample' definition should be an integer, not " + this.spec.sample);
                };
                a.prototype._getValue = function(a, b) {
                    return this.mapping[b] ? a[this.mapping[b]] : this.consts[b] ? q.identity(this.consts[b]) : "x" === b || "y" === b ? this.defaults[b] : q.identity(this.defaults[b])
                };
                a.prototype._getIdFunc = function() {
                    var a = this;
                    return null != this.mapping.id ? function(b) {
                        return a._getValue(b, "id")
                    } : c.counter()
                };
                a.prototype._fillZeros = function(a, b) {
                    var c,
                        d,
                        e;
                    c = function() {
                        var b,
                            c,
                            e;
                        e = [];
                        b = 0;
                        for (c = a.length; b < c; b++)
                            d = a[b], e.push(this._getValue(d, "x"));
                        return e
                    }.call(this);
                    e = _.difference(b, c);
                    return {
                        x: c.concat(e),
                        y: function() {
                            var b,
                                c,
                                e;
                            e = [];
                            b = 0;
                            for (c = a.length; b < c; b++)
                                d = a[b], e.push(this._getValue(d, "y"));
                            return e
                        }.call(this).concat(function() {
                            var a,
                                b,
                                c;
                            c = [];
                            a = 0;
                            for (b = e.length; a < b; a++)
                                c.push(void 0);
                            return c
                        }())
                    }
                };
                a.prototype._stack = function(a) {
                    var b,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h = this;
                    a = c.groupBy(this.statData, a);
                    k = [];
                    for (e in a)
                        b = a[e], f = 0, g = null != this.mapping.y ? function(a) {
                            return a[h.mapping.y]
                        } : function(a) {
                            return 0
                        },
                        k.push(function() {
                            var a,
                                c,
                                e;
                            e = [];
                            a = 0;
                            for (c = b.length; a < c; a++)
                                d = b[a], d.$lower = f, f += parseFloat(g(d)), e.push(d.$upper = f);
                            return e
                        }());
                    return k
                };
                a.prototype._dodge = function(a) {
                    var b,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h,
                        l,
                        n,
                        m,
                        v,
                        p,
                        q = this;
                    e = _.without(_.keys(this.mapping), "x", "y", "id");
                    _.toArray(_.pick(this.mapping, e));
                    v = c.groupBy(this.statData, a);
                    p = [];
                    for (g in v) {
                        d = v[g];
                        h = {};
                        k = 1;
                        n = 0;
                        for (m = e.length; n < m; n++)
                            b = e[n], a = _.uniq(function() {
                                var a,
                                    c,
                                    e;
                                e = [];
                                a = 0;
                                for (c = d.length; a < c; a++)
                                    f = d[a], e.push(this._getValue(f, b));
                                return e
                            }.call(this)),
                            k *= a.length, a.sort(c.type.compare(this.meta[this.mapping[b]].type)), h[b] = a;
                        l = function(a) {
                            var c,
                                d,
                                f,
                                g;
                            c = k;
                            f = d = 0;
                            for (g = e.length; f < g; f++)
                                b = e[f], c /= h[b].length, d += c * _.indexOf(h[b], q._getValue(a, b));
                            return d
                        };
                        p.push(function() {
                            var a,
                                b,
                                c;
                            c = [];
                            a = 0;
                            for (b = d.length; a < b; a++)
                                f = d[a], f.$n = l(f), c.push(f.$m = k);
                            return c
                        }())
                    }
                    return p
                };
                a.prototype._inLevels = function(a) {
                    var b,
                        c,
                        d;
                    c = ["x", "y"];
                    for (b = c.length; 0 < b;)
                        return b = c[0], null != this.guideSpec[b] && null != this.guideSpec[b].levels ? (d = a[this.spec[b]["var"]], 0 <= C.call(this.guideSpec[b].levels,
                        d)) : !0
                };
                return a
            }();
            e = function(a) {
                function b() {
                    return l = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h;
                    b = this._getIdFunc();
                    this.geoms = {};
                    k = this.statData;
                    h = [];
                    f = 0;
                    for (g = k.length; f < g; f++) {
                        c = k[f];
                        a = {};
                        for (d in c)
                            e = c[d], a[d] = {
                                "in": [e]
                            };
                        h.push(this.geoms[b(c)] = {
                            marks: {
                                0: {
                                    type: "circle",
                                    x: this._getValue(c, "x"),
                                    y: this._getValue(c, "y"),
                                    color: this._getValue(c, "color"),
                                    size: this._getValue(c, "size"),
                                    opacity: this._inLevels(c) ? this._getValue(c, "opacity") :
                                    0
                                }
                            },
                            evtData: a,
                            tooltip: this._tooltip(c)
                        })
                    }
                    return h
                };
                return b
            }(b);
            d = function(a) {
                function b() {
                    return g = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        b,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h,
                        l,
                        n,
                        m,
                        v = this;
                    e = function() {
                        var a,
                            b,
                            c,
                            d;
                        c = _.without(_.keys(this.mapping), "x", "y");
                        d = [];
                        a = 0;
                        for (b = c.length; a < b; a++)
                            g = c[a], d.push(this.mapping[g]);
                        return d
                    }.call(this);
                    b = c.groupBy(this.statData, e);
                    f = this._getIdFunc();
                    this.geoms = {};
                    m = [];
                    for (g in b) {
                        a = b[g];
                        h = a[0];
                        d = {};
                        l = 0;
                        for (n = e.length; l < n; l++)
                            k = e[l],
                            d[k] = {
                                "in": [h[k]]
                            };
                        m.push(this.geoms[f(h)] = {
                            marks: {
                                0: {
                                    type: "path",
                                    x: _.map(a, function(a) {
                                        return v._getValue(a, "x")
                                    }),
                                    y: _.map(a, function(a) {
                                        return v._getValue(a, "y")
                                    }),
                                    color: this._getValue(h, "color"),
                                    opacity: this._getValue(h, "opacity"),
                                    size: this._getValue(h, "size")
                                }
                            },
                            evtData: d
                        })
                    }
                    return m
                };
                return b
            }(b);
            a = function(a) {
                function b() {
                    return w = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype.defaults = {
                    x: q.novalue(),
                    y: q.novalue(),
                    color: "steelblue",
                    size: 1,
                    opacity: 0.9,
                    shape: 1
                };
                b.prototype._calcGeoms =
                function() {
                    var a,
                        b,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h,
                        l,
                        n,
                        m,
                        v,
                        p,
                        x,
                        q,
                        r;
                    a = _.uniq(function() {
                        var a,
                            b,
                            c,
                            d;
                        c = this.statData;
                        d = [];
                        a = 0;
                        for (b = c.length; a < b; a++)
                            k = c[a], d.push(this._getValue(k, "x"));
                        return d
                    }.call(this));
                    f = function() {
                        var a,
                            b,
                            c,
                            d;
                        c = _.without(_.keys(this.mapping), "x", "y");
                        d = [];
                        a = 0;
                        for (b = c.length; a < b; a++)
                            h = c[a], d.push(this.mapping[h]);
                        return d
                    }.call(this);
                    d = _.pairs(c.groupBy(this.statData, f));
                    g = this._getIdFunc();
                    this.geoms = {};
                    m = 1 === _.max(d, function(a) {
                        return a[1].length
                    })[1].length;
                    r = [];
                    e = v = 0;
                    for (x = d.length; v < x; e = ++v) {
                        n =
                        d[e];
                        l = n[0];
                        b = n[1];
                        m && e + 1 < d.length && b.push(d[e + 1][1][0]);
                        n = b[0];
                        e = {};
                        p = 0;
                        for (q = f.length; p < q; p++)
                            l = f[p], e[l] = {
                                "in": [n[l]]
                            };
                        b = this._fillZeros(b, a);
                        l = b.x;
                        b = b.y;
                        r.push(this.geoms[g(n)] = {
                            marks: {
                                0: {
                                    type: "line",
                                    x: l,
                                    y: b,
                                    color: this._getValue(n, "color"),
                                    opacity: this._getValue(n, "opacity"),
                                    size: this._getValue(n, "size")
                                }
                            },
                            evtData: e
                        })
                    }
                    return r
                };
                return b
            }(b);
            k = function(a) {
                function b() {
                    return u = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        c,
                        d,
                        e,
                        f,
                        g;
                    b.__super__._calcGeoms.call(this);
                    f = this.geoms;
                    g = [];
                    for (c in f)
                        a = f[c], g.push(function() {
                            var b,
                                c;
                            b = a.marks;
                            c = [];
                            for (d in b)
                                e = b[d], c.push(e.type = "spline");
                            return c
                        }());
                    return g
                };
                return b
            }(a);
            s = function(a) {
                function b() {
                    return t = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        b;
                    if (this.mapping.y && "cat" === this.meta[this.mapping.y].type)
                        throw c.error.defn("The dependent variable of a bar chart cannot be categorical!");
                    if (this.mapping.x && (a = this.meta[this.mapping.x], "cat" !== a.type && !a.bw && !a.binned &&
                    "num" === a.type && null == this.guideSpec.x.bw))
                        throw c.error.type("Bar chart x-values need to be binned. Set binwidth or use the bin() transform!");
                    this.position = null != (b = this.spec.position) ? b : "stack";
                    if ("stack" === this.position)
                        return this._calcGeomsStack();
                    if ("dodge" === this.position)
                        return this._calcGeomsDodge();
                    throw c.error.defn("Bar chart position " + this.position + " is unknown.");
                };
                b.prototype._calcGeomsDodge = function() {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h,
                        l;
                    a = null != this.mapping.x ? [this.mapping.x] : [];
                    this._dodge(a);
                    this._stack(a.concat("$n"));
                    this.geoms = {};
                    b = this._getIdFunc();
                    h = this.statData;
                    l = [];
                    g = 0;
                    for (k = h.length; g < k; g++) {
                        c = h[g];
                        a = {};
                        for (d in c)
                            e = c[d], "y" !== d && (a[d] = {
                                "in": [e]
                            });
                        e = q.lower(this._getValue(c, "x"), c.$n, c.$m);
                        f = q.upper(this._getValue(c, "x"), c.$n, c.$m);
                        l.push(this.geoms[b(c)] = {
                            marks: {
                                0: {
                                    type: "rect",
                                    x: [e, f],
                                    y: [c.$lower, c.$upper],
                                    color: this._getValue(c, "color"),
                                    opacity: this._inLevels(c) ? this._getValue(c, "opacity") : 0
                                }
                            },
                            evtData: a,
                            tooltip: this._tooltip(c)
                        })
                    }
                    return l
                };
                b.prototype._calcGeomsStack = function() {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h;
                    this._stack(null != this.mapping.x ? [this.mapping.x] : []);
                    b = this._getIdFunc();
                    this.geoms = {};
                    k = this.statData;
                    h = [];
                    f = 0;
                    for (g = k.length; f < g; f++) {
                        c = k[f];
                        a = {};
                        for (d in c)
                            e = c[d], "y" !== d && (a[d] = {
                                "in": [e]
                            });
                        h.push(this.geoms[b(c)] = {
                            marks: {
                                0: {
                                    type: "rect",
                                    x: [q.lower(this._getValue(c, "x")), q.upper(this._getValue(c, "x"))],
                                    y: [c.$lower, c.$upper],
                                    color: this._getValue(c, "color"),
                                    opacity: this._inLevels(c) ? this._getValue(c, "opacity") : 0
                                }
                            },
                            evtData: a,
                            tooltip: this._tooltip(c)
                        })
                    }
                    return h
                };
                return b
            }(b);
            f = function(a) {
                function b() {
                    return z =
                    b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        b,
                        d,
                        e,
                        f,
                        g,
                        k,
                        h,
                        l,
                        n,
                        m,
                        v,
                        p,
                        q,
                        x,
                        r;
                    a = function() {
                        var a,
                            b,
                            d,
                            e;
                        d = this.statData;
                        e = [];
                        a = 0;
                        for (b = d.length; a < b; a++)
                            h = d[a], c.isDefined(this._getValue(h, "y")) && c.isDefined(v = this._getValue(h, "x")) && e.push(v);
                        return e
                    }.call(this);
                    a = _.uniq(a);
                    b = {};
                    e = 0;
                    for (f = a.length; e < f; e++)
                        n = a[e], b[n] = 0;
                    g = function() {
                        var a,
                            b,
                            c,
                            d;
                        c = _.without(_.keys(this.mapping), "x", "y");
                        d = [];
                        a = 0;
                        for (b = c.length; a < b; a++)
                            l = c[a], d.push(this.mapping[l]);
                        return d
                    }.call(this);
                    e = c.groupBy(this.statData, g);
                    k = this._getIdFunc();
                    this.geoms = {};
                    r = [];
                    for (l in e) {
                        d = e[l];
                        m = d[0];
                        f = {};
                        p = 0;
                        for (q = g.length; p < q; p++)
                            n = g[p], f[n] = {
                                "in": [m[n]]
                            };
                        n = function() {
                            var c,
                                d,
                                e;
                            e = [];
                            c = 0;
                            for (d = a.length; c < d; c++)
                                v = a[c], e.push(b[v]);
                            return e
                        }();
                        q = 0;
                        for (x = d.length; q < x; q++)
                            h = d[q], v = this._getValue(h, "x"), p = this._getValue(h, "y"), b[v] += p;
                        d = function() {
                            var c,
                                d,
                                e;
                            e = [];
                            c = 0;
                            for (d = a.length; c < d; c++)
                                v = a[c], e.push(b[v]);
                            return e
                        }();
                        r.push(this.geoms[k(m)] = {
                            marks: {
                                0: {
                                    type: "area",
                                    x: a,
                                    y: {
                                        bottom: n,
                                        top: d
                                    },
                                    color: this._getValue(m,
                                    "color"),
                                    opacity: this._getValue(m, "opacity")
                                }
                            },
                            evtData: f
                        })
                    }
                    return r
                };
                return b
            }(b);
            n = function(a) {
                function b() {
                    return E = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        k;
                    b = this._getIdFunc();
                    this.geoms = {};
                    h = this.statData;
                    k = [];
                    f = 0;
                    for (g = h.length; f < g; f++) {
                        c = h[f];
                        a = {};
                        for (d in c)
                            e = c[d], a[d] = {
                                "in": [e]
                            };
                        k.push(this.geoms[b(c)] = {
                            marks: {
                                0: {
                                    type: "text",
                                    x: this._getValue(c, "x"),
                                    y: this._getValue(c, "y"),
                                    text: this._getValue(c, "text"),
                                    color: this._getValue(c,
                                    "color"),
                                    size: this._getValue(c, "size"),
                                    opacity: this._getValue(c, "opacity"),
                                    "text-anchor": "center"
                                }
                            },
                            evtData: a
                        })
                    }
                    return k
                };
                return b
            }(b);
            p = function(a) {
                function b() {
                    return A = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        k;
                    b = this._getIdFunc();
                    this.geoms = {};
                    h = this.statData;
                    k = [];
                    f = 0;
                    for (g = h.length; f < g; f++) {
                        c = h[f];
                        a = {};
                        this._getValue(c, "x");
                        this._getValue(c, "y");
                        for (d in c)
                            e = c[d], "y" !== d && "x" !== d && (a[d] = {
                                "in": [e]
                            });
                        k.push(this.geoms[b(c)] = {
                            marks: {
                                0: {
                                    type: "rect",
                                    x: [q.lower(this._getValue(c, "x")), q.upper(this._getValue(c, "x"))],
                                    y: [q.lower(this._getValue(c, "y")), q.upper(this._getValue(c, "y"))],
                                    color: this._getValue(c, "color"),
                                    size: this._getValue(c, "size"),
                                    opacity: this._getValue(c, "opacity")
                                }
                            },
                            evtData: a,
                            tooltip: this._tooltip(c)
                        })
                    }
                    return k
                };
                return b
            }(b);
            h = function(a) {
                function b() {
                    return G = b.__super__.constructor.apply(this, arguments)
                }
                B(b, a);
                b.prototype._calcGeoms = function() {
                    var a,
                        b,
                        c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        k,
                        l,
                        n,
                        m,
                        v,
                        p,
                        r,
                        x;
                    c = this._getIdFunc();
                    this.geoms = {};
                    r = this.statData;
                    x = [];
                    m = 0;
                    for (v = r.length; m < v; m++) {
                        e = r[m];
                        b = {};
                        for (f in e)
                            a = e[f], "y" !== f && (b[f] = {
                                "in": [a]
                            });
                        k = this._getValue(e, "x");
                        n = this._getValue(e, "y");
                        a = this._getValue(e, "color");
                        d = this._getValue(e, "size");
                        g = this._inLevels(e) ? this._getValue(e, "opacity") : 0;
                        h = q.lower(k);
                        l = q.upper(k);
                        k = q.middle(k);
                        b = {
                            marks: {},
                            evtData: b
                        };
                        n.q1 && (b.marks = {
                            iqr: {
                                type: "rect",
                                x: [h, l],
                                y: [n.q2, n.q4],
                                stroke: a,
                                color: q.identity("white"),
                                size: d,
                                opacity: g,
                                "stroke-width": "1px"
                            },
                            q1: {
                                type: "pline",
                                x: [h, l],
                                y: [n.q1, n.q1],
                                color: a,
                                size: d,
                                opacity: g
                            },
                            lower: {
                                type: "pline",
                                x: [k, k],
                                y: [n.q1, n.q2],
                                color: a,
                                size: d,
                                opacity: g
                            },
                            q5: {
                                type: "pline",
                                x: [h, l],
                                y: [n.q5, n.q5],
                                color: a,
                                size: d,
                                opacity: g
                            },
                            upper: {
                                type: "pline",
                                x: [k, k],
                                y: [n.q4, n.q5],
                                color: a,
                                size: d,
                                opacity: g
                            },
                            middle: {
                                type: "pline",
                                x: [h, l],
                                y: [n.q3, n.q3],
                                color: a,
                                size: d,
                                opacity: g
                            }
                        });
                        p = n.outliers;
                        d = l = 0;
                        for (n = p.length; l < n; d = ++l)
                            h = p[d], b.marks[d] = {
                                type: "circle",
                                x: k,
                                y: h,
                                color: a,
                                size: q.identity(3),
                                opacity: g
                            };
                        x.push(this.geoms[c(e)] = b)
                    }
                    return x
                };
                return b
            }(b);
            c.layer = {};
            c.layer.Base = b;
            c.layer.classes = {
                point: e,
                text: n,
                line: a,
                path: d,
                area: f,
                bar: s,
                tile: p,
                box: h,
                spline: k
            };
            c.layer.make = function(a, b, d) {
                var e;
                e = a.type;
                if (e in c.layer.classes)
                    return new c.layer.classes[e](a, b, d);
                throw c.error.defn("No such layer " + a.type + ".");
            }
        }).call(this);
        (function() {
            var f,
                s = {}.hasOwnProperty,
                h = function(b, a) {
                    function c() {
                        this.constructor = b
                    }
                    for (var e in a)
                        s.call(a, e) && (b[e] = a[e]);
                    c.prototype = a.prototype;
                    b.prototype = new c;
                    b.__super__ = a.prototype;
                    return b
                };
            c.pane = {};
            c.pane.make = function(b, a) {
                return new f(b, a)
            };
            f = function(b) {
                function a(a, b) {
                    this.titleObj = b;
                    this.index =
                    a;
                    this.title = this.layers = null
                }
                h(a, b);
                a.prototype.make = function(a, b, f) {
                    var h,
                        p,
                        m,
                        r,
                        q;
                    this.layers = f;
                    if (!this.geoms)
                        for (this.geoms = {}, r = this.layers, f = m = 0, r = r.length; m < r; f = ++m)
                            this.geoms[f] = new c.Geometry;
                    this.metas = {};
                    q = this.layers;
                    f = m = 0;
                    for (r = q.length; m < r; f = ++m)
                        h = q[f], p = h.calculate(b[f].statData, b[f].metaData), h = p.geoms, p = p.meta, this.geoms[f].set(h), this.metas[f] = p;
                    null == this.title && (this.title = this._makeTitle(a));
                    this.title.make(this.titleObj);
                    return this.domains = this._makeDomains(a, this.geoms, this.metas)
                };
                a.prototype._makeTitle = function() {
                    return c.guide.title("facet")
                };
                a.prototype._makeDomains = function(a, b, f) {
                    return c.domain.make(b, f, a.guides, a.strict)
                };
                a.prototype.render = function(a, b, c, f) {
                    var h;
                    this.title.render(a({}, !1, !1), f, b);
                    b = a(b, c, !0);
                    c = this.geoms;
                    f = [];
                    for (h in c)
                        a = c[h], f.push(a.render(b));
                    return f
                };
                a.prototype.dispose = function(a) {
                    var b,
                        c,
                        f;
                    f = this.geoms;
                    for (c in f)
                        b = f[c], b.dispose(a);
                    this.geoms = {};
                    return this.title.dispose(a)
                };
                return a
            }(c.Renderable)
        }).call(this);
        (function() {
            c.dim = {};
            c.dim.make =
            function(c, s, h) {
                var b,
                    a,
                    d,
                    e,
                    k,
                    n,
                    p,
                    m;
                c = {
                    width: null != (a = c.width) ? a : 400,
                    height: null != (d = c.height) ? d : 400,
                    paddingLeft: null != (e = c.paddingLeft) ? e : 10,
                    paddingRight: null != (b = c.paddingRight) ? b : 10,
                    paddingTop: null != (k = c.paddingTop) ? k : 10,
                    paddingBottom: null != (n = c.paddingBottom) ? n : 10,
                    horizontalSpacing: null != (p = c.horizontalSpacing) ? p : 10,
                    verticalSpacing: null != (m = c.verticalSpacing) ? m : 20,
                    guideTop: 10,
                    guideRight: 0,
                    guideLeft: 5,
                    guideBottom: 5
                };
                b = s.axesOffset(c);
                a = b.left;
                d = b.right;
                e = b.top;
                b = b.bottom;
                c.guideLeft += null != a ? a :
                0;
                c.guideRight += null != d ? d : 0;
                c.guideBottom += null != b ? b : 0;
                c.guideTop += null != e ? e : 0;
                b = s.titleOffset(c);
                a = b.left;
                d = b.right;
                e = b.top;
                b = b.bottom;
                c.guideLeft += null != a ? a : 0;
                c.guideRight += null != d ? d : 0;
                c.guideBottom += null != b ? b : 0;
                c.guideTop += null != e ? e : 0;
                s = s.legendOffset(c);
                a = s.left;
                d = s.right;
                e = s.top;
                b = s.bottom;
                c.guideLeft += null != a ? a : 0;
                c.guideRight += null != d ? d : 0;
                c.guideBottom += null != b ? b : 0;
                c.guideTop += null != e ? e : 0;
                s = 0.4 * c.width;
                a = 0.4 * c.height;
                c.guideLeft > s && (c.guideLeft = s);
                c.guideRight > s && (c.guideRight = s);
                c.guideTop >
                a && (c.guideTop = a);
                c.guideBottom > a && (c.guideBottom = a);
                c.chartHeight = c.height - c.paddingTop - c.paddingBottom - c.guideTop - c.guideBottom;
                c.chartWidth = c.width - c.paddingLeft - c.paddingRight - c.guideLeft - c.guideRight;
                null != h.cols && 1 < h.cols ? (c.eachWidth = c.chartWidth - c.horizontalSpacing * h.cols, c.eachWidth /= h.cols) : c.eachWidth = c.chartWidth;
                null != h.rows && 1 < h.rows ? (c.eachHeight = c.chartHeight - c.verticalSpacing * (h.rows + 1), c.eachHeight /= h.rows) : c.eachHeight = c.chartHeight - c.verticalSpacing;
                return c
            };
            c.dim.guess = function(c,
            s) {
                var h,
                    b,
                    a,
                    d,
                    e,
                    k,
                    n,
                    p,
                    m;
                h = {
                    width: null != (b = c.width) ? b : 400,
                    height: null != (a = c.height) ? a : 400,
                    paddingLeft: null != (d = c.paddingLeft) ? d : 10,
                    paddingRight: null != (e = c.paddingRight) ? e : 10,
                    paddingTop: null != (k = c.paddingTop) ? k : 10,
                    paddingBottom: null != (n = c.paddingBottom) ? n : 10,
                    guideLeft: 30,
                    guideRight: 40,
                    guideTop: 10,
                    guideBottom: 30,
                    horizontalSpacing: null != (p = c.horizontalSpacing) ? p : 10,
                    verticalSpacing: null != (m = c.verticalSpacing) ? m : 10
                };
                h.chartHeight = h.height - h.paddingTop - h.paddingBottom - h.guideTop - h.guideBottom;
                h.chartWidth =
                h.width - h.paddingLeft - h.paddingRight - h.guideLeft - h.guideRight;
                h.eachWidth = null != s.cols && 1 < s.cols ? h.chartWidth - h.horizontalSpacing * (s.cols - 1) : h.chartWidth;
                h.eachHeight = null != s.rows && 1 < s.rows ? h.chartHeight - h.verticalSpacing * (s.rows - 1) : h.chartHeight;
                return h
            }
        }).call(this);
        (function() {
            var f,
                s,
                h,
                b,
                a,
                d,
                e,
                k,
                n,
                p,
                m,
                r,
                q,
                l,
                g,
                w,
                u,
                t,
                z,
                E,
                A = {}.hasOwnProperty,
                G = function(a, b) {
                    function c() {
                        this.constructor = a
                    }
                    for (var d in b)
                        A.call(b, d) && (a[d] = b[d]);
                    c.prototype = b.prototype;
                    a.prototype = new c;
                    a.__super__ = b.prototype;
                    return a
                };
            c.paper = function(a, b, d, e) {
                if ("undefined" === typeof Raphael || null === Raphael)
                    throw c.error.depn("The dependency Raphael is not included.");
                a = Raphael(a, b, d);
                b = a.rect(0, 0, b, d).attr({
                    fill: "white",
                    opacity: 0,
                    "stroke-width": 0
                });
                b.click(e.handleEvent("reset"));
                c.mouseEvents(e, b, !1);
                c.touchEvents(e.handleEvent, b, !0);
                return a
            };
            c.mouseEvents = function(a, b, d) {
                var e,
                    f,
                    g,
                    h,
                    k,
                    l;
                g = a.handleEvent("select");
                d && (h = null);
                l = f = k = e = null;
                return b.drag(function(b, g, n, m) {
                    if (null != l && null != k) {
                        if (e = {
                            x: k.x + b,
                            y: k.y + g
                        }, f = a.facet.getFacetInfo(a.dims,
                        e.x, e.y), null != h && null != f && f.col === l.col && f.row === l.row && d)
                            return n = {
                                x: Math.min(k.x, e.x),
                                y: Math.min(k.y, e.y),
                                width: Math.abs(k.x - e.x),
                                height: Math.abs(k.y - e.y)
                            }, h = h.attr(n)
                    } else if (b = c.offset(a.dom), k = {
                        x: n - b.left,
                        y: m - b.top
                    }, l = a.facet.getFacetInfo(a.dims, k.x, k.y), null != l && d)
                        return h = a.paper.rect(k.x, k.y, 0, 0, 2), h = h.attr({
                            fill: "black",
                            opacity: 0.2
                        })
                }, function() {
                    return e = k = null
                }, function() {
                    if (null != k && null != e)
                        return null != h && d && (h = h.hide(), h.remove()), g({
                            start: k,
                            end: e
                        })
                })
            };
            c.touchEvents = function(a, b, c) {
                null ==
                c && (c = !0);
                if (c)
                    return b.touchstart(a("touchstart")), b.touchend(a("touchend")), b.touchmove(a("touchmove")), b.touchcancel(a("touchcancel"))
            };
            c.render = function(a, b, d, e) {
                return function(f, g, h) {
                    null == f && (f = {});
                    null == g && (g = !1);
                    null == h && (h = !0);
                    if (null == e.type)
                        throw c.error.unknown("Coordinate don't have at type?");
                    if (null == p[e.type])
                        throw c.error.input("Unknown coordinate type " + e.type);
                    return {
                        add: function(k, l, n, m) {
                            var q;
                            if (null == p[e.type][k.type])
                                throw c.error.input("Coord " + e.type + " has no mark " + k.type);
                            q = p[e.type][k.type].render(b, d, e, f, k, h);
                            q.data("m", k);
                            l && 0 < _.keys(l).length && q.data("e", l);
                            n && q.data("t", n);
                            null != g && q.attr("clip-rect", g);
                            "guide" === m ? q.click(a("guide-click")) : "guide-title" === m || "guide-titleH" === m || "guide-titleV" === m ? q.click(a(m)) : (q.click(a("click")), q.hover(a("mover"), a("mout")));
                            c.touchEvents(a, q, !0);
                            return q
                        },
                        remove: function(a) {
                            return a.remove()
                        },
                        animate: function(a, b, c, k) {
                            p[e.type][b.type].animate(a, d, e, f, b, h);
                            null != g && a.attr("clip-rect", g);
                            c && 0 < _.keys(c).length && a.data("e",
                            c);
                            k && a.data("t", k);
                            a.data("m", b);
                            return a
                        }
                    }
                }
            };
            k = function() {
                function a() {}
                a.prototype.render = function(a, b, c, d, e, f) {
                    var g;
                    a = this._make(a);
                    c = this.attr(b, c, d, e, f);
                    for (g in c)
                        b = c[g], a.attr(g, b);
                    return a
                };
                a.prototype._make = function() {
                    throw c.error.impl();
                };
                a.prototype.animate = function(a, b, c, d, e, f) {
                    return a.animate(this.attr(b, c, d, e, f), 300)
                };
                a.prototype.attr = function(a, b, d, e, f) {
                    throw c.error.impl();
                };
                a.prototype._cantRender = function(a) {
                    throw c.error.missingdata();
                };
                a.prototype._makePath = function(a, b, c) {
                    null ==
                    c && (c = "L");
                    switch (c) {
                    case "spline":
                        a = _.map(a, function(a, c) {
                            return (0 === c ? "M " + a + " " + b[c] + " R " : "") + ("" + a + " " + b[c])
                        });
                        break;
                    default:
                        a = _.map(a, function(a, d) {
                            return (0 === d ? "M" : c) + a + " " + b[d]
                        })
                    }
                    return a.join(" ")
                };
                a.prototype._maybeApply = function(a, b, c) {
                    b = b[c];
                    return _.isObject(b) && "identity" === b.f ? b.v : null != a[c] ? a[c].f(b) : b
                };
                a.prototype._applyOffset = function(a, b, c) {
                    var d;
                    if (!c)
                        return {
                            x: a,
                            y: b
                        };
                    null == c.x && (c.x = 0);
                    null == c.y && (c.y = 0);
                    return {
                        x: _.isArray(a) ? function() {
                            var b,
                                e,
                                f;
                            f = [];
                            b = 0;
                            for (e = a.length; b < e; b++)
                                d =
                                a[b], f.push(d + c.x);
                            return f
                        }() : a + c.x,
                        y: _.isArray(b) ? function() {
                            var a,
                                e,
                                f;
                            f = [];
                            a = 0;
                            for (e = b.length; a < e; a++)
                                d = b[a], f.push(d + c.y);
                            return f
                        }() : b + c.y
                    }
                };
                a.prototype._shared = function(a, b, c) {
                    var d,
                        e = this;
                    d = function(d) {
                        if (null != b[d] && null == c[d])
                            return c[d] = e._maybeApply(a, b, d)
                    };
                    d("opacity");
                    d("stroke-width");
                    d("stroke-dasharray");
                    d("stroke-dashoffset");
                    d("transform");
                    d("font-size");
                    d("font-weight");
                    d("font-family");
                    return c
                };
                a.prototype._checkPointUndefined = function(a, b, d) {
                    null == d && (d = "Point");
                    if (void 0 ===
                    a || void 0 === b)
                        throw c.error.missing("" + d + " cannot be plotted due to undefined data.");
                };
                a.prototype._checkArrayUndefined = function(a, b, d) {
                    var e;
                    null == d && (d = "Line");
                    if (_.all(function() {
                        var c,
                            d,
                            f;
                        f = [];
                        e = c = 0;
                        for (d = a.length - 1; 0 <= d ? c <= d : c >= d; e = 0 <= d ? ++c : --c)
                            f.push(void 0 === a[e] || void 0 === b[e]);
                        return f
                    }()))
                        throw c.error.missing("" + d + " cannot be plotted due to too many missing points.");
                };
                a.prototype._checkArrayNaN = function(a, b) {
                    var c,
                        d;
                    d = _.map(_.zip(a, b), function(a, b) {
                        return isNaN(a[0]) || isNaN(a[1]) ? void 0 :
                        a
                    });
                    return {
                        x: function() {
                            var a,
                                b,
                                e;
                            e = [];
                            a = 0;
                            for (b = d.length; a < b; a++)
                                c = d[a], null != c && e.push(c[0]);
                            return e
                        }(),
                        y: function() {
                            var a,
                                b,
                                e;
                            e = [];
                            a = 0;
                            for (b = d.length; a < b; a++)
                                c = d[a], null != c && e.push(c[1]);
                            return e
                        }()
                    }
                };
                return a
            }();
            f = function(a) {
                function b() {
                    return m = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype.animate = function(a, b, c, d, e, f) {
                    var g,
                        h;
                    h = a.data("m");
                    g = this.attr(b, c, d, e, f);
                    if (_.isEqual(h.x, e.x))
                        return a.animate(g, 300);
                    b = this.attr(b, c, d, h, f);
                    return a.animate(b, 300, function() {
                        return a.attr(g)
                    })
                };
                return b
            }(k);
            s = function(a) {
                function b() {
                    return r = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype._make = function(a) {
                    return a.circle()
                };
                b.prototype.attr = function(a, b, c, d, e) {
                    e = b.getXY(e, d);
                    b = e.x;
                    e = e.y;
                    this._checkPointUndefined(b, e, "Circle");
                    c = this._applyOffset(b, e, c);
                    b = c.x;
                    e = c.y;
                    c = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
                    c = {
                        cx: b,
                        cy: e,
                        r: this._maybeApply(a, d, "size"),
                        stroke: c
                    };
                    (b = this._maybeApply(a, d, "color")) && "none" !== b && (c.fill = b);
                    return this._shared(a, d, c)
                };
                return b
            }(k);
            a = function(a) {
                function b() {
                    return q =
                    b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype._make = function(a) {
                    return a.path()
                };
                b.prototype.attr = function(a, b, c, d, e) {
                    var f;
                    e = b.getXY(e, d);
                    b = e.x;
                    e = e.y;
                    this._checkArrayUndefined(b, e, "Path");
                    c = this._applyOffset(b, e, c);
                    b = c.x;
                    e = c.y;
                    f = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
                    c = this._maybeApply(a, d, d.size ? "size" : "stroke-width");
                    return this._shared(a, d, {
                        path: this._makePath(b, e),
                        stroke: f,
                        "stroke-width": c
                    })
                };
                return b
            }(k);
            b = function(a) {
                function b() {
                    return l = b.__super__.constructor.apply(this,
                    arguments)
                }
                G(b, a);
                b.prototype._make = function(a) {
                    return a.path()
                };
                b.prototype.attr = function(a, b, d, e, f) {
                    var g,
                        h;
                    g = c.sortArrays(a.x.compare, [e.x, e.y]);
                    e.x = g[0];
                    e.y = g[1];
                    f = b.getXY(f, e);
                    b = f.x;
                    f = f.y;
                    this._checkArrayUndefined(b, f, "Line");
                    g = 0;
                    for (h = b.length; g < h; ++g)
                        ;
                    d = this._applyOffset(b, f, d);
                    b = d.x;
                    f = d.y;
                    d = this._checkArrayNaN(b, f);
                    b = d.x;
                    f = d.y;
                    g = this._maybeApply(a, e, e.stroke ? "stroke" : "color");
                    d = this._maybeApply(a, e, e.size ? "size" : "stroke-width");
                    return this._shared(a, e, {
                        path: this._makePath(b, f),
                        stroke: g,
                        "stroke-width": d
                    })
                };
                return b
            }(f);
            n = function(a) {
                function b() {
                    return g = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype.attr = function(a, b, d, e, f) {
                    var g,
                        h;
                    g = c.sortArrays(a.x.compare, [e.x, e.y]);
                    e.x = g[0];
                    e.y = g[1];
                    f = b.getXY(f, e);
                    b = f.x;
                    f = f.y;
                    this._checkArrayUndefined(b, f, "Spline");
                    g = 0;
                    for (h = b.length; g < h; ++g)
                        ;
                    d = this._applyOffset(b, f, d);
                    b = d.x;
                    f = d.y;
                    d = this._checkArrayNaN(b, f);
                    b = d.x;
                    f = d.y;
                    g = this._maybeApply(a, e, e.stroke ? "stroke" : "color");
                    d = this._maybeApply(a, e, e.size ? "size" : "stroke-width");
                    return this._shared(a,
                    e, {
                        path: this._makePath(b, f, "spline"),
                        stroke: g,
                        "stroke-width": d
                    })
                };
                return b
            }(b);
            d = function(a) {
                function b() {
                    return w = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype.attr = function(a, b, d, e, f) {
                    var g,
                        h,
                        k,
                        l,
                        n;
                    l = b.getXY(f, e);
                    f = l.x;
                    n = l.y;
                    b = l.r;
                    l = l.t;
                    this._checkArrayUndefined(f, n, "Line");
                    n = this._applyOffset(f, n, d);
                    f = n.x;
                    n = n.y;
                    var m,
                        p;
                    if (_.max(b) - _.min(b) < c["const"].epsilon)
                        for (b = b[0], d = "M " + f[0] + " " + n[0], h = m = 1, p = f.length - 1; 1 <= p ? m <= p : m >= p; h = 1 <= p ? ++m : --m)
                            k = Math.abs(l[h] - l[h - 1]) > Math.PI ? 1 : 0, g =
                            0 < l[h] - l[h - 1] ? 1 : 0, d += "A " + b + " " + b + " 0 " + k + " " + g + " " + f[h] + " " + n[h];
                    else
                        d = this._makePath(f, n);
                    b = this._maybeApply(a, e, e.stroke ? "stroke" : "color");
                    return this._shared(a, e, {
                        path: d,
                        stroke: b
                    })
                };
                return b
            }(b);
            f = function(a) {
                function b() {
                    return u = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype._make = function(a) {
                    return a.path()
                };
                b.prototype.attr = function(a, b, d, e, f) {
                    var g,
                        h,
                        k;
                    g = c.sortArrays(a.x.compare, [e.x, e.y.top]);
                    h = g[0];
                    k = g[1];
                    g = b.getXY(f, {
                        x: h,
                        y: k
                    });
                    g = this._applyOffset(g.x, g.y, d);
                    k = c.sortArrays(function(b,
                    c) {
                        return -a.x.compare(b, c)
                    }, [e.x, e.y.bottom]);
                    h = k[0];
                    k = k[1];
                    b = b.getXY(f, {
                        x: h,
                        y: k
                    });
                    b = this._applyOffset(b.x, b.y, d);
                    h = g.x.concat(b.x);
                    k = g.y.concat(b.y);
                    return this._shared(a, e, {
                        path: this._makePath(h, k),
                        stroke: this._maybeApply(a, e, "color"),
                        fill: this._maybeApply(a, e, "color"),
                        "stroke-width": "0px"
                    })
                };
                return b
            }(f);
            e = function(a) {
                function b() {
                    return t = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype._make = function(a) {
                    return a.rect()
                };
                b.prototype.attr = function(a, b, c, d, e) {
                    e = b.getXY(e, d);
                    b = e.x;
                    e = e.y;
                    this._checkPointUndefined(b[0], e[0], "Bar");
                    this._checkPointUndefined(b[1], e[1], "Bar");
                    c = this._applyOffset(b, e, c);
                    b = c.x;
                    e = c.y;
                    c = this._maybeApply(a, d, d.stroke ? "stroke" : "color");
                    return this._shared(a, d, {
                        x: _.min(b),
                        y: _.min(e),
                        width: Math.abs(b[1] - b[0]),
                        height: Math.abs(e[1] - e[0]),
                        fill: this._maybeApply(a, d, "color"),
                        stroke: c,
                        "stroke-width": this._maybeApply(a, d, "stroke-width")
                    })
                };
                return b
            }(k);
            h = function(a) {
                function b() {
                    return z = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype._make = function(a) {
                    return a.path()
                };
                b.prototype.attr = function(a, b, d, e, f) {
                    var g,
                        h,
                        k,
                        l;
                    g = e.x;
                    h = g[0];
                    g = g[1];
                    l = e.y;
                    k = l[0];
                    l = l[1];
                    this._checkPointUndefined(h, k, "Bar");
                    this._checkPointUndefined(g, l, "Bar");
                    e.x = [h, h, g, g];
                    e.y = [k, l, l, k];
                    g = b.getXY(f, e);
                    h = g.x;
                    k = g.y;
                    f = g.r;
                    g = g.t;
                    d = this._applyOffset(h, k, d);
                    h = d.x;
                    k = d.y;
                    b.flip && (h.push(h.splice(0, 1)[0]), k.push(k.splice(0, 1)[0]), f.push(f.splice(0, 1)[0]), g.push(g.splice(0, 1)[0]));
                    2 * Math.PI - Math.abs(g[1] - g[0]) < c["const"].epsilon ? (b = "M " + h[0] + " " + k[0] + " A " + f[0] + " " + f[0] + " 0 1 1 " + h[0] + " " + (k[0] + 2 * f[0]) +
                    " A " + f[1] + " " + f[1] + " 0 1 1 " + h[1] + " " + k[1], b += "M " + h[2] + " " + k[2] + " A " + f[2] + " " + f[2] + " 0 1 0 " + h[2] + " " + (k[2] + 2 * f[2]) + " A " + f[3] + " " + f[3] + " 0 1 0 " + h[3] + " " + k[3] + " Z") : (d = Math.abs(g[1] - g[0]) > Math.PI ? 1 : 0, b = "M " + h[0] + " " + k[0] + " A " + f[0] + " " + f[1] + " 0 " + d + " 1 " + h[1] + " " + k[1], d = Math.abs(g[3] - g[2]) > Math.PI ? 1 : 0, b += "L " + h[2] + " " + k[2] + " A " + f[2] + " " + f[3] + " 0 " + d + " 0 " + h[3] + " " + k[3] + " Z");
                    d = this._maybeApply(a, e, e.stroke ? "stroke" : "color");
                    return this._shared(a, e, {
                        path: b,
                        fill: this._maybeApply(a, e, "color"),
                        stroke: d,
                        "stroke-width": this._maybeApply(a, e, "stroke-width")
                    })
                };
                return b
            }(k);
            k = function(a) {
                function b() {
                    return E = b.__super__.constructor.apply(this, arguments)
                }
                G(b, a);
                b.prototype._make = function(a) {
                    return a.text()
                };
                b.prototype.attr = function(a, b, c, d, e) {
                    var f;
                    e = b.getXY(e, d);
                    b = e.x;
                    e = e.y;
                    this._checkPointUndefined(b, e, "Text");
                    c = this._applyOffset(b, e, c);
                    b = c.x;
                    e = c.y;
                    return this._shared(a, d, {
                        x: b,
                        y: e,
                        r: 10,
                        text: this._maybeApply(a, d, "text"),
                        "font-size": this._maybeApply(a, d, "size"),
                        "text-anchor": null != (f = d["text-anchor"]) ?
                        f : "left",
                        fill: this._maybeApply(a, d, "color") || "black"
                    })
                };
                return b
            }(k);
            p = {
                cartesian: {
                    circle: new s,
                    line: new b,
                    pline: new b,
                    area: new f,
                    path: new a,
                    text: new k,
                    rect: new e,
                    spline: new n
                },
                polar: {
                    circle: new s,
                    path: new a,
                    line: new b,
                    pline: new d,
                    area: new f,
                    text: new k,
                    rect: new h,
                    spline: new n
                }
            }
        }).call(this);
        (function() {
            var f = [].indexOf || function(c) {
                for (var f = 0, b = this.length; f < b; f++)
                    if (f in this && this[f] === c)
                        return f;
                return -1
            };
            c.handler = {};
            c.handler.tooltip = function() {
                var f,
                    h,
                    b,
                    a,
                    d,
                    e,
                    k;
                d = {};
                h = f = a = b = null;
                k = function(a) {
                    a =
                    c.getXY(b, a);
                    if (null != d.text)
                        return e(d, a)
                };
                e = function(a, b) {
                    var c,
                        d,
                        e,
                        k,
                        g,
                        w;
                    d = [b.x, b.y];
                    k = d[0];
                    d = d[1];
                    if (null != a.text)
                        return e = a.text.getBBox().height, k = {
                            x: k,
                            y: d - e / 2 - 20
                        }, a.text.attr(k), e = a.text.getBBox(), g = e.x, w = e.y, c = e.width, e = e.height, c = {
                            x: g - 5,
                            y: w - 5,
                            width: c + 10,
                            height: e + 10
                        }, 0 > c.y && (c.y = w + 30 + e, k.y = d + e / 2 + 15), c.x + c.width > f && (d = c.x + c.width - f, c.x -= d / 2, k.x -= d / 2), c.x < h && (k.x += h - c.x, c.x = h), a.text.attr(k), a.box.attr(c), a
                };
                return function(n, p, m, r) {
                    var q,
                        l;
                    b = c.offset(r.dom);
                    a = p.paper;
                    f = r.dims.chartWidth + r.dims.guideLeft +
                    r.dims.paddingLeft;
                    h = r.dims.guideLeft + r.dims.paddingLeft;
                    if ("mover" === n || "mout" === n)
                        if (null != d.text && (d.text.remove(), d.box.remove()), d = {}, "mover" === n && p.tooltip)
                            return n = c.getXY(b, m), p.getBBox(), m = [n.x, n.y], q = m[0], m = m[1], d.text = a.text(q, m, p.tooltip(r.scaleSet.scales)).attr({
                                "text-anchor": "middle",
                                fill: "white"
                            }), r = d.text.getBBox(), r = r.height, d.text.attr({
                                y: m - r / 2 - 20
                            }), r = d.text.getBBox(), q = r.x, l = r.y, m = r.width, r = r.height, d.box = a.rect(q - 5, l - 5, m + 10, r + 10, 10), d.box.attr({
                                fill: "#213"
                            }), d.text.toFront(), d =
                            e(d, n), p.mousemove(k)
                }
            };
            c.handler.drilldown = function(s, h, b) {
                var a,
                    d;
                null == b && (b = {});
                if (!_.isArray(h))
                    throw c.error.input("Parameter `levels` should be an array.");
                if (0 > f.call(c["const"].aes, s))
                    throw c.error.input("Unknown aesthetic " + s + ".");
                a = 0;
                d = [b];
                return function(b, c, f, p) {
                    var m,
                        r;
                    if ("reset" === b && 0 < a) {
                        c = p.spec;
                        d.pop();
                        b = d.unshift();
                        a--;
                        r = c.layers;
                        f = 0;
                        for (m = r.length; f < m; f++)
                            c = r[f], c.filter = b, c[s] = h[a], c.id = h[a];
                        return p.make(p.spec)
                    }
                    if ("click" === b && a < h.length - 1 && (b = c.evtData, c = p.spec, f = b[h[a]])) {
                        b =
                        {};
                        b[h[a]] = f;
                        a++;
                        b = _.extend(_.clone(d[d.length - 1]), b);
                        r = c.layers;
                        f = 0;
                        for (m = r.length; f < m; f++)
                            c = r[f], c.filter = b, c[s] = h[a], c.id = h[a];
                        d.push(b);
                        return p.make(p.spec)
                    }
                }
            };
            c.handler.zoom = function(f, h) {
                var b,
                    a,
                    d,
                    e,
                    k,
                    n;
                null == h && (h = {
                    x: !0,
                    y: !0
                });
                if (null == f)
                    throw c.error.input("Initial specification missing.");
                a = {
                    x: _.clone(null != (e = f.guides) ? e.x : void 0),
                    y: _.clone(null != (k = f.guides) ? k.y : void 0)
                };
                d = void 0;
                b = ["x", "y"];
                n = function(a) {
                    return function(b, c, d, e) {
                        return "reset" === b ? _.isFunction(a) ? a("resetZoom", c, d, e) :
                        a.handle("resetZoom", c, d, e) : _.isFunction(a) ? a(b, c, d, e) : a.handle(b, c, d, e)
                    }
                };
                return function(e, f, k, q) {
                    var l,
                        g,
                        s,
                        u,
                        t,
                        z,
                        E,
                        A,
                        G,
                        C;
                    null == d && (d = _.clone(q.handlers));
                    if ("cartesian" === q.coord.type) {
                        if ("resetZoom" === e) {
                            l = q.spec;
                            g = 0;
                            for (s = b.length; g < s; g++)
                                k = b[g], l.guides[k] = _.clone(a[k]);
                            q.handlers = _.clone(d);
                            q.make(q.spec)
                        }
                        if ("select" === e) {
                            f = f.evtData;
                            l = q.spec.guides;
                            E = q.spec.layers;
                            C = [];
                            s = 0;
                            for (t = E.length; s < t; s++) {
                                g = E[s];
                                u = 0;
                                for (z = b.length; u < z; u++)
                                    k = b[u], h[k] && null != g[k] && (e = g[k]["var"], ("num" === (A = q.axes.domains[k].type) ||
                                    "date" === A) && f[e].le - f[e].ge > c["const"].epsilon && (null == l[k] && (l[k] = {
                                        min: null,
                                        max: null
                                    }), G = [f[e].ge, f[e].le], l[k].min = G[0], l[k].max = G[1]), "cat" === q.axes.domains[k].type && 0 !== f[e]["in"].length && (null == l[k] && (l[k] = {
                                        levels: null
                                    }), l[k].levels = f[e]["in"]));
                                q.handlers = _.map(q.handlers, n);
                                C.push(q.make(q.spec))
                            }
                            return C
                        }
                    }
                }
            }
        }).call(this);
        (function() {
            var f,
                s = [].indexOf || function(c) {
                    for (var b = 0, a = this.length; b < a; b++)
                        if (b in this && this[b] === c)
                            return b;
                    return -1
                };
            c.facet = {};
            c.facet.make = function() {
                return new f
            };
            f = function() {
                function f() {
                    this.type = "none";
                    this.mapping = {};
                    this.specgroups = [];
                    this.groups = [];
                    this.panes = {};
                    this.deletedPanes = []
                }
                f.prototype.make = function(b) {
                    var a,
                        c;
                    this.spec = b;
                    b = this._getMappings(this.spec.facet);
                    this.type = b.type;
                    this.mapping = c = b.mapping;
                    this.groups = _.values(this.mapping);
                    this.specgroups = {};
                    for (a in c)
                        b = c[a], this.spec.facet[a] && (this.specgroups[b] = this.spec.facet[a]);
                    this.spec.facet.formatter && (this.formatter = this.spec.facet.formatter);
                    this.style = {};
                    this.spec.facet.size && (this.style.size =
                    this.spec.facet.size);
                    if (this.spec.facet.color)
                        return this.style.color = this.spec.facet.color
                };
                f.prototype.calculate = function(b, a) {
                    var d,
                        e,
                        f,
                        h,
                        p;
                    d = this._makeIndices(b, this.specgroups);
                    this.values = d.values;
                    this.indices = d.indices;
                    "none" === this.type ? this.rows = this.cols = 1 : (this.cols = this.spec.facet.cols, this.rows = this.spec.facet.rows, "wrap" === this.type ? (d = this.values[this.mapping["var"]].length, this.cols || this.rows || (this.cols = Math.min(3, d)), this.cols ? this.rows = Math.ceil(d / this.cols) : this.rows && (this.cols =
                    Math.ceil(d / this.rows))) : (this.rows = this.mapping.y ? this.values[this.mapping.y].length : 1, this.cols = this.mapping.x ? this.values[this.mapping.x].length : 1));
                    this.datas = this._groupData(b, this.indices);
                    d = c.compare(_.keys(this.panes), _.keys(this.indices));
                    e = d.deleted;
                    d = d.added;
                    h = 0;
                    for (p = e.length; h < p; h++)
                        f = e[h], this.deletedPanes.push(this.panes[f]), delete this.panes[f];
                    h = 0;
                    for (p = d.length; h < p; h++)
                        f = d[h], e = this.formatter ? this.formatter(this.indices[f]) : f, this.panes[f] = c.pane.make(this.indices[f], _.extend({
                            title: e
                        },
                        this.style));
                    d = this.indices;
                    e = [];
                    for (f in d)
                        e.push(this.panes[f].make(this.spec, this.datas[f], a));
                    return e
                };
                f.prototype.render = function(b, a, c) {
                    var e,
                        f,
                        h,
                        p,
                        m,
                        r;
                    if (0 < this.deletedPanes.length) {
                        e = b({}, !1, !1);
                        r = this.deletedPanes;
                        h = 0;
                        for (m = r.length; h < m; h++)
                            p = r[h], p.dispose(e);
                        this.deletedPanes = []
                    }
                    m = this.panes;
                    r = [];
                    for (f in m)
                        p = m[f], h = this.getOffset(a, f), e = c.clipping(h), r.push(p.render(b, h, e, a));
                    return r
                };
                f.prototype.dispose = function(b) {
                    var a,
                        c,
                        e,
                        f;
                    e = this.panes;
                    for (a in e)
                        c = e[a], this.deletedPanes.push(c),
                        delete this.panes[a];
                    if (b) {
                        f = this.deletedPanes;
                        a = 0;
                        for (e = f.length; a < e; a++)
                            c = f[a], c.dispose(b);
                        return this.deletedPanes = []
                    }
                };
                f.prototype.getGrid = function() {
                    return {
                        cols: this.cols,
                        rows: this.rows
                    }
                };
                f.prototype.getOffset = function(b, a) {
                    var c;
                    c = this._getRowCol(a);
                    return {
                        x: b.paddingLeft + b.guideLeft + (b.eachWidth + b.horizontalSpacing) * c.col,
                        y: b.paddingTop + b.guideTop + (b.eachHeight + b.verticalSpacing) * c.row + b.verticalSpacing
                    }
                };
                f.prototype.edge = function(b) {
                    var a,
                        c,
                        e,
                        f,
                        h,
                        p,
                        m,
                        r,
                        q = this;
                    if ("none" === this.type)
                        return function() {
                            return !0
                        };
                    "grid" === this.type ? (r = function(a) {
                        return _.indexOf(q.values[q.mapping.y], q.indices[a][q.mapping.y])
                    }, a = function(a) {
                        return _.indexOf(q.values[q.mapping.x], q.indices[a][q.mapping.x])
                    }) : (a = function(a) {
                        return _.indexOf(q.values[q.mapping["var"]], q.indices[a][q.mapping["var"]]) % q.cols
                    }, r = function(a) {
                        return Math.floor(_.indexOf(q.values[q.mapping["var"]], q.indices[a][q.mapping["var"]]) / q.cols)
                    });
                    if ("none" === b)
                        return function() {
                            return !1
                        };
                    if ("out" === b)
                        return function() {
                            return !0
                        };
                    e = "top" === b || "bottom" === b ?
                    a : r;
                    m = "top" === b ? r : "bottom" === b ? function(a) {
                        return -r(a)
                    } : "left" === b ? a : "right" === b ? function(b) {
                        return -a(b)
                    } : void 0;
                    b = {};
                    for (f in this.indices)
                        if (p = e(f), h = m(f), !b[p] || h < b[p].v)
                            b[p] = {
                                v: h,
                                k: f
                            };
                    c = _.pluck(b, "k");
                    return function(a) {
                        return 0 <= s.call(c, a)
                    }
                };
                f.prototype.getEvtData = function(b, a) {
                    var c,
                        e,
                        f,
                        h;
                    f = {};
                    h = this.mapping;
                    for (c in h)
                        e = h[c], f[e] = "x" === c || "y" === c ? {
                            "in": this.values[e][b]
                        } : {
                            "in": this.values[e][this.rows * a + b]
                        };
                    return f
                };
                f.prototype.getFacetInfo = function(b, a, d, e) {
                    var f,
                        h,
                        p;
                    if (e) {
                        if (null == e.col ||
                        null == e.row)
                            throw c.error.impl("Preset rows & columns are not present.");
                        f = e.col;
                        p = e.row
                    } else
                        f = (a - b.paddingLeft - b.guideLeft) / (b.eachWidth + b.horizontalSpacing), f = Math.floor(f), p = (d - b.paddingTop - b.guideTop - b.verticalSpacing) / (b.eachHeight + b.verticalSpacing), p = Math.floor(p);
                    if (0 > f || f >= this.cols || 0 > p || p >= this.rows)
                        return null;
                    h = {
                        x: b.paddingLeft + b.guideLeft + (b.eachWidth + b.horizontalSpacing) * f,
                        y: b.paddingTop + b.guideTop + (b.eachHeight + b.verticalSpacing) * p + b.verticalSpacing
                    };
                    a = {
                        x: a - h.x,
                        y: d - h.y
                    };
                    if (!e && (a.x >
                    b.eachWidth || a.y > b.eachHeight))
                        return null;
                    a.x = Math.max(Math.min(a.x, b.eachWidth), 0);
                    a.y = Math.max(Math.min(a.y, b.eachHeight), 0);
                    return {
                        row: p,
                        col: f,
                        offset: h,
                        adjusted: a,
                        evtData: this.getEvtData(f, p)
                    }
                };
                f.prototype._getMappings = function(b) {
                    var a;
                    a = {
                        type: "none",
                        mapping: {}
                    };
                    if (_.isObject(b))
                        if ("wrap" === b.type) {
                            a.type = "wrap";
                            if (!b["var"])
                                throw c.error.defn("You didn't specify a variable to facet on.");
                            b["var"] && (a.mapping["var"] = b["var"]["var"])
                        } else if ("grid" === b.type) {
                            a.type = "grid";
                            if (!b.x && b.y)
                                throw c.error.defn("You didn't specify a variable to facet on.");
                            b.x && (a.mapping.x = b.x["var"]);
                            b.y && (a.mapping.y = b.y["var"])
                        }
                    return a
                };
                f.prototype._makeIndices = function(b, a) {
                    var d,
                        e,
                        f,
                        h,
                        p,
                        m,
                        r,
                        q;
                    r = {};
                    for (d in a)
                        if (h = a[d], h.levels)
                            r[h["var"]] = h.levels;
                        else {
                            m = [];
                            for (f in b) {
                                e = b[f];
                                if (p = e.metaData[h["var"]])
                                    !p || "num" !== (q = p.type) && "date" !== q || c.type.compare(p.type);
                                m = _.uniq(_.union(m, _.pluck(e.statData, h["var"])))
                            }
                            r[h["var"]] = m
                        }
                    d = c.cross(r);
                    e = {};
                    f = c.stringify(_.pluck(a, "var"));
                    p = 0;
                    for (m = d.length; p < m; p++)
                        h = d[p], e[f(h)] = h;
                    return {
                        values: r,
                        indices: e
                    }
                };
                f.prototype._groupData =
                function(b, a) {
                    var d,
                        e,
                        f,
                        h,
                        p,
                        m,
                        r;
                    e = c.groupProcessedData(b, this.groups);
                    d = {};
                    r = this.indices;
                    for (f in r) {
                        h = r[f];
                        for (p = e; !0 === p.grouped;)
                            m = h[p.key], p = p.values[m];
                        d[f] = p
                    }
                    return d
                };
                f.prototype._getRowCol = function(b) {
                    var a;
                    a = {
                        row: 0,
                        col: 0
                    };
                    "wrap" === this.type ? (b = this.indices[b][this.mapping["var"]], b = _.indexOf(this.values[this.mapping["var"]], b), a.col = b % this.cols, a.row = Math.floor(b / this.cols)) : "grid" === this.type && (a.row = _.indexOf(this.values[this.mapping.y], this.indices[b][this.mapping.y]), a.col = _.indexOf(this.values[this.mapping.x],
                    this.indices[b][this.mapping.x]));
                    return a
                };
                return f
            }();
            c.groupProcessedData = function(f, b) {
                var a,
                    d,
                    e,
                    k,
                    n,
                    p,
                    m,
                    r,
                    q;
                if (0 === b.length)
                    return f;
                a = b.splice(0, 1)[0];
                p = [];
                for (e in f)
                    d = f[e], a in d.metaData && (p = _.union(p, _.uniq(_.pluck(d.statData, a))));
                n = {
                    grouped: !0,
                    key: a,
                    values: {}
                };
                r = 0;
                for (q = p.length; r < q; r++) {
                    m = p[r];
                    k = {};
                    for (e in f)
                        d = f[e], k[e] = {
                            metaData: d.metaData
                        }, k[e].statData = a in d.metaData ? c.filter(d.statData, a, m) : _.clone(d.statData);
                    n.values[m] = c.groupProcessedData(k, _.clone(b))
                }
                return n
            }
        }).call(this);
        (function() {
            var f,
                s = {}.hasOwnProperty,
                h = function(b, a) {
                    function c() {
                        this.constructor = b
                    }
                    for (var e in a)
                        s.call(a, e) && (b[e] = a[e]);
                    c.prototype = a.prototype;
                    b.prototype = new c;
                    b.__super__ = a.prototype;
                    return b
                };
            f = function(b) {
                function a(b, c) {
                    a.__super__.constructor.call(this);
                    this.eventName = "title-click";
                    this.detail = {
                        type: c,
                        data: b
                    }
                }
                h(a, b);
                return a
            }(function() {
                function b() {
                    this.eventName = "polyjsEvent";
                    this.cancelable = this.bubbles = !0;
                    this.detail = {
                        type: null,
                        data: null
                    }
                }
                b.prototype.dispatch = function(a) {
                    var b;
                    b =
                    new CustomEvent(this.eventName, {
                        detail: this.detail
                    });
                    if (null != a)
                        return a.dispatchEvent(b)
                };
                return b
            }());
            c.event = {};
            c.event.make = function(b, a) {
                if ("guide-title" === b || "guide-titleH" === b || "guide-titleV" === b)
                    return new f(a, b);
                throw c.error.defn("No such event " + b + ".");
            }
        }).call(this);
        (function() {
            var f,
                s = function(b, a) {
                    return function() {
                        return b.apply(a, arguments)
                    }
                },
                h = [].indexOf || function(b) {
                    for (var a = 0, c = this.length; a < c; a++)
                        if (a in this && this[a] === b)
                            return a;
                    return -1
                };
            f = function() {
                function b(a, b, e) {
                    null ==
                    b && (b = null);
                    null == e && (e = null);
                    this.handleEvent = s(this.handleEvent, this);
                    this.render = s(this.render, this);
                    this.mergeDomains = s(this.mergeDomains, this);
                    this.merge = s(this.merge, this);
                    this.maybeDispose = s(this.maybeDispose, this);
                    if (null == a)
                        throw c.error.defn("No graph specification is passed in!");
                    this.handlers = [];
                    this.coord = this.paper = this.dims = this.legends = this.axes = this.scaleSet = null;
                    this.facet = c.facet.make();
                    this.dataSubscribed = [];
                    this.callback = b;
                    this.prepare = e;
                    this.make(a);
                    this.addHandler(c.handler.tooltip())
                }
                b.prototype.maybeDispose = function(a) {
                    var b;
                    b = c.render(this.handleEvent, this.paper, this.scaleSet.scales, this.coord);
                    b = b();
                    if (this.coord && !_.isEqual(this.coord.spec, a.coord))
                        return this.scaleSet && (this.scaleSet.disposeGuides(b), this.scaleSet = null), this.coord = null
                };
                b.prototype.make = function(a) {
                    var b,
                        e,
                        f,
                        h,
                        p,
                        m,
                        r,
                        q,
                        l,
                        g = this;
                    null != a ? (a = c.spec.toStrictMode(a), c.spec.check(a), this.spec = a) : a = this.spec;
                    this.scaleSet && this.maybeDispose(a);
                    null == this.coord && (this.coord = c.coord.make(this.spec.coord));
                    this.facet.make(a);
                    e = this.handleEvent("data");
                    f = function() {
                        var b,
                            c,
                            d,
                            e;
                        d = a.layers;
                        e = [];
                        h = b = 0;
                        for (c = d.length; b < c; h = ++b)
                            p = d[h], e.push(p.data);
                        return e
                    }();
                    l = _.difference(f, this.dataSubscribed);
                    r = 0;
                    for (q = l.length; r < q; r++)
                        b = l[r], b.subscribe(e);
                    this.dataSubscribed = f;
                    m = _.after(a.layers.length, this.merge);
                    this.dataprocess = {};
                    this.processedData = {};
                    return _.each(a.layers, function(b, d) {
                        var e;
                        a = g.spec.layers[d];
                        e = _.values(g.facet.specgroups);
                        g.dataprocess[d] = new c.DataProcess(a, e, a.strict);
                        return g.dataprocess[d].make(a, e, function(a,
                        b, e) {
                            if (null != a)
                                if (console.error(a), null != g.callback)
                                    g.callback(a, null);
                                else
                                    throw c.error.defn("Error processing data!");
                            g.processedData[d] = {
                                statData: b,
                                metaData: e
                            };
                            return m()
                        })
                    })
                };
                b.prototype.merge = function() {
                    var a = this;
                    this.layers = _.map(this.spec.layers, function(b) {
                        return c.layer.make(b, a.spec.strict, a.spec.guides)
                    });
                    this.facet.calculate(this.processedData, this.layers);
                    this.mergeDomains();
                    return this.render()
                };
                b.prototype.mergeDomains = function() {
                    var a,
                        b,
                        e;
                    a = _.map(this.facet.panes, function(a) {
                        return a.domains
                    });
                    a = c.domain.merge(a);
                    this.scaleSet || (b = c.dim.guess(this.spec, this.facet.getGrid()), this.coord.make(b), e = this.coord.ranges(), this.scaleSet = c.scaleset(e, this.coord));
                    this.scaleSet.make(this.spec.guides, a, this.layers);
                    this.dims = this._makeDimensions(this.spec, this.scaleSet, this.facet, b);
                    this.coord.make(this.dims);
                    this.ranges = this.coord.ranges();
                    return this.scaleSet.setRanges(this.ranges)
                };
                b.prototype.render = function() {
                    var a,
                        b;
                    if (null == this.spec.render || !1 !== this.spec.render)
                        if (a = this.scaleSet.scales, this.coord.setScales(a),
                        this.scaleSet.coord = this.coord, b = this.scaleSet.makeGuides(this.spec, this.dims), this.axes = b.axes, this.titles = b.titles, this.legends = b.legends, null != this.prepare && this.prepare(this), this.dom = this.spec.dom, null == this.paper && (this.paper = this._makePaper(this.dom, this.dims.width, this.dims.height, this)), a = c.render(this.handleEvent, this.paper, a, this.coord), this.facet.render(a, this.dims, this.coord), this.scaleSet.renderGuides(this.dims, a, this.facet), null != this.callback)
                            return this.callback(null, this)
                };
                b.prototype.addHandler =
                function(a) {
                    if (0 > h.call(this.handlers, a))
                        return this.handlers.push(a)
                };
                b.prototype.removeHandler = function(a) {
                    return this.handlers.splice(_.indexOf(this.handlers, a), 1)
                };
                b.prototype.handleEvent = function(a) {
                    var b;
                    b = this;
                    return _.throttle(function(e) {
                        var f,
                            h,
                            p,
                            m,
                            r;
                        if ("touchstart" === a || "touchmove" === a || "touchend" === a || "touchcancel" === a)
                            c.touch(a, this, e, b);
                        else if ("select" === a) {
                            h = e.start;
                            f = e.end;
                            h = b.facet.getFacetInfo(b.dims, h.x, h.y);
                            if (!h)
                                return;
                            m = h.col;
                            r = h.row;
                            p = h.adjusted;
                            h = _.clone(p);
                            p = b.facet.getFacetInfo(b.dims,
                            f.x, f.y, {
                                col: m,
                                row: r
                            }).adjusted;
                            f = _.clone(p);
                            this.evtData = "cartesian" === b.coord.type ? b.scaleSet.fromPixels(h, f) : null
                        } else if ("data" === a)
                            this.evtData = {};
                        else if ("reset" === a || "click" === a || "mover" === a || "mout" === a || "guide-click" === a)
                            this.tooltip = this.data("t"), this.evtData = this.data("e");
                        else if ("guide-title" === a || "guide-titleH" === a || "guide-titleV" === a)
                            this.tooltip = this.data("t"), this.evtData = this.data("e"), e = c.event.make(a, this), e.dispatch(b.dom);
                        r = b.handlers;
                        p = [];
                        h = 0;
                        for (m = r.length; h < m; h++)
                            f = r[h], _.isFunction(f) ?
                            p.push(f(a, this, e, b)) : p.push(f.handle(a, this, e, b));
                        return p
                    }, 300)
                };
                b.prototype._makeScaleSet = function(a, b, e) {
                    a = this.coord.ranges();
                    return c.scaleset(a, this.coord)
                };
                b.prototype._makeDimensions = function(a, b, e, f) {
                    b.makeGuides(a, f);
                    return c.dim.make(a, b, e.getGrid())
                };
                b.prototype._makePaper = function(a, b, e, f) {
                    return c.paper(a, b, e, f)
                };
                return b
            }();
            c.chart = function(b, a, d) {
                try {
                    return new f(b, a, d)
                } catch (e) {
                    if (null != a)
                        return a(e, null);
                    throw c.error.defn("Bad specification.");
                }
            }
        }).call(this)
    }
    return {
        data: c.data,
        chart: c.chart,
        handler: c.handler,
        debug: c
    }
}(window.polyjs);