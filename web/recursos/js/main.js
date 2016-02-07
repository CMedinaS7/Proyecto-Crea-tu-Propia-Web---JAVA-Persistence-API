function getInnerHeight() {
  return self.innerHeight ? self.innerHeight : document.documentElement && document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body ? document.body.clientHeight : void 0
}
function levenshtein(e, t) {
  if (e == t) return 0;
  var i = e.length,
  n = t.length;
  if (0 === i) return n;
  if (0 === n) return i;
  var o = !1;
  try {
    o = !'0'[0]
  } catch (s) {
    o = !0
  }
  o && (e = e.split(''), t = t.split(''));
  var r = new Array(i + 1),
  a = new Array(i + 1),
  l = 0,
  c = 0,
  u = 0;
  for (l = 0; i + 1 > l; l++) r[l] = l;
  var d = '',
  h = '';
  for (c = 1; n >= c; c++) {
    for (a[0] = c, h = t[c - 1], l = 0; i > l; l++) {
      d = e[l],
      u = d == h ? 0 : 1;
      var p = r[l + 1] + 1,
      f = a[l] + 1,
      m = r[l] + u;
      p > f && (p = f),
      p > m && (p = m),
      a[l + 1] = p
    }
    var g = r;
    r = a,
    a = g
  }
  return r[i]
}
var _wAMD;
if (function () {
  if (!_wAMD || !_wAMD.requirejs) {
    _wAMD ? t = _wAMD : _wAMD = {
    };
    var e,
    t,
    i;
    !function (n) {
      function o(e, t) {
        return w.call(e, t)
      }
      function s(e, t) {
        var i,
        n,
        o,
        s,
        r,
        a,
        l,
        c,
        u,
        d,
        h = t && t.split('/'),
        p = b.map,
        f = p && p['*'] || {
        };
        if (e && '.' === e.charAt(0)) if (t) {
          for (h = h.slice(0, h.length - 1), e = h.concat(e.split('/')), c = 0; c < e.length; c += 1) if (d = e[c], '.' === d) e.splice(c, 1),
          c -= 1;
           else if ('..' === d) {
            if (1 === c && ('..' === e[2] || '..' === e[0])) break;
            c > 0 && (e.splice(c - 1, 2), c -= 2)
          }
          e = e.join('/')
        } else 0 === e.indexOf('./') && (e = e.substring(2));
        if ((h || f) && p) {
          for (i = e.split('/'), c = i.length; c > 0; c -= 1) {
            if (n = i.slice(0, c).join('/'), h) for (u = h.length; u > 0; u -= 1) if (o = p[h.slice(0, u).join('/')], o && (o = o[n])) {
              s = o,
              r = c;
              break
            }
            if (s) break;
            !a && f && f[n] && (a = f[n], l = c)
          }
          !s && a && (s = a, r = l),
          s && (i.splice(0, r, s), e = i.join('/'))
        }
        return e
      }
      function r(e, t) {
        return function () {
          return p.apply(n, _.call(arguments, 0).concat([e,
          t]))
        }
      }
      function a(e) {
        return function (t) {
          return s(t, e)
        }
      }
      function l(e) {
        return function (t) {
          g[e] = t
        }
      }
      function c(e) {
        if (o(v, e)) {
          var t = v[e];
          delete v[e],
          y[e] = !0,
          h.apply(n, t)
        }
        if (!o(g, e) && !o(y, e)) throw new Error('No ' + e);
        return g[e]
      }
      function u(e) {
        var t,
        i = e ? e.indexOf('!')  : - 1;
        return i > - 1 && (t = e.substring(0, i), e = e.substring(i + 1, e.length)),
        [
          t,
          e
        ]
      }
      function d(e) {
        return function () {
          return b && b.config && b.config[e] || {
          }
        }
      }
      var h,
      p,
      f,
      m,
      g = {
      },
      v = {
      },
      b = {
      },
      y = {
      },
      w = Object.prototype.hasOwnProperty,
      _ = [
      ].slice;
      f = function (e, t) {
        var i,
        n = u(e),
        o = n[0];
        return e = n[1],
        o && (o = s(o, t), i = c(o)),
        o ? e = i && i.normalize ? i.normalize(e, a(t))  : s(e, t)  : (e = s(e, t), n = u(e), o = n[0], e = n[1], o && (i = c(o))),
        {
          f: o ? o + '!' + e : e,
          n: e,
          pr: o,
          p: i
        }
      },
      m = {
        require: function (e) {
          return r(e)
        },
        exports: function (e) {
          var t = g[e];
          return 'undefined' != typeof t ? t : g[e] = {
          }
        },
        module: function (e) {
          return {
            id: e,
            uri: '',
            exports: g[e],
            config: d(e)
          }
        }
      },
      h = function (e, t, i, s) {
        var a,
        u,
        d,
        h,
        p,
        b,
        w = [
        ];
        if (s = s || e, 'function' == typeof i) {
          for (t = !t.length && i.length ? [
            'require',
            'exports',
            'module'
          ] : t, p = 0; p < t.length; p += 1) if (h = f(t[p], s), u = h.f, 'require' === u) w[p] = m.require(e);
           else if ('exports' === u) w[p] = m.exports(e),
          b = !0;
           else if ('module' === u) a = w[p] = m.module(e);
           else if (o(g, u) || o(v, u) || o(y, u)) w[p] = c(u);
           else {
            if (!h.p) throw new Error(e + ' missing ' + u);
            h.p.load(h.n, r(s, !0), l(u), {
            }),
            w[p] = g[u]
          }
          d = i.apply(g[e], w),
          e && (a && a.exports !== n && a.exports !== g[e] ? g[e] = a.exports : d === n && b || (g[e] = d))
        } else e && (g[e] = i)
      },
      e = t = p = function (e, t, i, o, s) {
        return 'string' == typeof e ? m[e] ? m[e](t)  : c(f(e, t).f)  : (e.splice || (b = e, t.splice ? (e = t, t = i, i = null)  : e = n), t = t || function () {
        }, 'function' == typeof i && (i = o, o = s), o ? h(n, e, t, i)  : setTimeout(function () {
          h(n, e, t, i)
        }, 4), p)
      },
      p.config = function (e) {
        return b = e,
        b.deps && p(b.deps, b.callback),
        p
      },
      i = function (e, t, i) {
        t.splice || (i = t, t = [
        ]),
        o(g, e) || o(v, e) || (v[e] = [
          e,
          t,
          i
        ])
      },
      i.amd = {
        jQuery: !0
      }
    }(),
    _wAMD.requirejs = e,
    _wAMD.require = t,
    _wAMD.define = i
  }
}(), _wAMD.define('vendor/almond', function () {
}), function () {
  function e(e, t) {
    s > 0 && 0 >= r ? e()  : t ? a.unshift(e)  : a.push(e)
  }
  function t() {
    var e = Array.prototype.slice.apply(arguments);
    if (1 === e.length && 'string' == typeof e[0]);
     else {
      var t;
      'function' == typeof e[e.length - 1] && (t = e.pop()),
      s++,
      r++,
      e.push(function () {
        var e;
        if (t && (e = t.apply(this, arguments)), r--, s > 0 && 0 >= r) for (; a.length; ) a.shift() ();
        return e
      })
    }
    return p.apply(this, e)
  }
  function i() {
    window.define = l,
    window.require = c,
    window.requirejs = u
  }
  function n() {
    Weebly.jQuery.noConflict(!0),
    window.jQuery = window.jQuery || Weebly.jQuery
  }
  function o() {
    i(),
    n()
  }
  _W = Weebly = window.Weebly || {
  },
  _W.tl = _W.tl || function (e) {
    return e
  },
  Weebly.ns = function (e, t) {
    for (var t = t || window, i = e.split('.'), n = 0, o = i.length; o > n; n++) {
      var s = i[n];
      'string' != typeof s ? t = s : (t[s] || (t[s] = {
      }), t = t[s])
    }
    return t
  };
  var s = 0,
  r = 0,
  a = [
  ];
  Weebly.ready = e;
  var l = window.define,
  c = window.require,
  u = window.requirejs,
  d = window._wAMD || {
  },
  h = d.define || window.define,
  p = d.require || window.require,
  f = d.requirejs || window.requirejs;
  window.define = d.define = h,
  window.require = d.require = t,
  window.requirejs = d.requirejs = f,
  Weebly.relinquishAMD = i,
  Weebly.jQuery = jQuery,
  Weebly.relinquishJQuery = n;
  var m = jQuery.fn.ready;
  jQuery.fn.ready = function () {
    var t = this,
    i = arguments;
    return e(function () {
      m.apply(t, i)
    }),
    t
  },
  Weebly.relinquish = o
}(), window.console || (window.console = {
}), window.console.log || (window.console.log = function () {
}, window.console.warn = window.console.log, window.console.info = window.console.log, window.console.error = window.console.log), _wAMD.define('init', function () {
}), _wAMD.define('jquery', [
], function () {
  return Weebly.jQuery
}), function () {
  var e = this,
  t = e._,
  i = {
  },
  n = Array.prototype,
  o = Object.prototype,
  s = Function.prototype,
  r = n.push,
  a = n.slice,
  l = n.concat,
  c = o.toString,
  u = o.hasOwnProperty,
  d = n.forEach,
  h = n.map,
  p = n.reduce,
  f = n.reduceRight,
  m = n.filter,
  g = n.every,
  v = n.some,
  b = n.indexOf,
  y = n.lastIndexOf,
  w = Array.isArray,
  _ = Object.keys,
  C = s.bind,
  k = function (e) {
    return e instanceof k ? e : this instanceof k ? (this._wrapped = e, void 0)  : new k(e)
  };
  'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = k), exports._ = k)  : e._ = k,
  k.VERSION = '1.6.0';
  var x = k.each = k.forEach = function (e, t, n) {
    if (null == e) return e;
    if (d && e.forEach === d) e.forEach(t, n);
     else if (e.length === + e.length) {
      for (var o = 0, s = e.length; s > o; o++) if (t.call(n, e[o], o, e) === i) return
    } else for (var r = k.keys(e), o = 0, s = r.length; s > o; o++) if (t.call(n, e[r[o]], r[o], e) === i) return;
    return e
  };
  k.map = k.collect = function (e, t, i) {
    var n = [
    ];
    return null == e ? n : h && e.map === h ? e.map(t, i)  : (x(e, function (e, o, s) {
      n.push(t.call(i, e, o, s))
    }), n)
  };
  var M = 'Reduce of empty array with no initial value';
  k.reduce = k.foldl = k.inject = function (e, t, i, n) {
    var o = arguments.length > 2;
    if (null == e && (e = [
    ]), p && e.reduce === p) return n && (t = k.bind(t, n)),
    o ? e.reduce(t, i)  : e.reduce(t);
    if (x(e, function (e, s, r) {
      o ? i = t.call(n, i, e, s, r)  : (i = e, o = !0)
    }), !o) throw new TypeError(M);
    return i
  },
  k.reduceRight = k.foldr = function (e, t, i, n) {
    var o = arguments.length > 2;
    if (null == e && (e = [
    ]), f && e.reduceRight === f) return n && (t = k.bind(t, n)),
    o ? e.reduceRight(t, i)  : e.reduceRight(t);
    var s = e.length;
    if (s !== + s) {
      var r = k.keys(e);
      s = r.length
    }
    if (x(e, function (a, l, c) {
      l = r ? r[--s] : --s,
      o ? i = t.call(n, i, e[l], l, c)  : (i = e[l], o = !0)
    }), !o) throw new TypeError(M);
    return i
  },
  k.find = k.detect = function (e, t, i) {
    var n;
    return S(e, function (e, o, s) {
      return t.call(i, e, o, s) ? (n = e, !0)  : void 0
    }),
    n
  },
  k.filter = k.select = function (e, t, i) {
    var n = [
    ];
    return null == e ? n : m && e.filter === m ? e.filter(t, i)  : (x(e, function (e, o, s) {
      t.call(i, e, o, s) && n.push(e)
    }), n)
  },
  k.reject = function (e, t, i) {
    return k.filter(e, function (e, n, o) {
      return !t.call(i, e, n, o)
    }, i)
  },
  k.every = k.all = function (e, t, n) {
    t || (t = k.identity);
    var o = !0;
    return null == e ? o : g && e.every === g ? e.every(t, n)  : (x(e, function (e, s, r) {
      return (o = o && t.call(n, e, s, r)) ? void 0 : i
    }), !!o)
  };
  var S = k.some = k.any = function (e, t, n) {
    t || (t = k.identity);
    var o = !1;
    return null == e ? o : v && e.some === v ? e.some(t, n)  : (x(e, function (e, s, r) {
      return o || (o = t.call(n, e, s, r)) ? i : void 0
    }), !!o)
  };
  k.contains = k.include = function (e, t) {
    return null == e ? !1 : b && e.indexOf === b ? - 1 != e.indexOf(t)  : S(e, function (e) {
      return e === t
    })
  },
  k.invoke = function (e, t) {
    var i = a.call(arguments, 2),
    n = k.isFunction(t);
    return k.map(e, function (e) {
      return (n ? t : e[t]).apply(e, i)
    })
  },
  k.pluck = function (e, t) {
    return k.map(e, k.property(t))
  },
  k.where = function (e, t) {
    return k.filter(e, k.matches(t))
  },
  k.findWhere = function (e, t) {
    return k.find(e, k.matches(t))
  },
  k.max = function (e, t, i) {
    if (!t && k.isArray(e) && e[0] === + e[0] && e.length < 65535) return Math.max.apply(Math, e);
    var n = - 1 / 0,
    o = - 1 / 0;
    return x(e, function (e, s, r) {
      var a = t ? t.call(i, e, s, r)  : e;
      a > o && (n = e, o = a)
    }),
    n
  },
  k.min = function (e, t, i) {
    if (!t && k.isArray(e) && e[0] === + e[0] && e.length < 65535) return Math.min.apply(Math, e);
    var n = 1 / 0,
    o = 1 / 0;
    return x(e, function (e, s, r) {
      var a = t ? t.call(i, e, s, r)  : e;
      o > a && (n = e, o = a)
    }),
    n
  },
  k.shuffle = function (e) {
    var t,
    i = 0,
    n = [
    ];
    return x(e, function (e) {
      t = k.random(i++),
      n[i - 1] = n[t],
      n[t] = e
    }),
    n
  },
  k.sample = function (e, t, i) {
    return null == t || i ? (e.length !== + e.length && (e = k.values(e)), e[k.random(e.length - 1)])  : k.shuffle(e).slice(0, Math.max(0, t))
  };
  var T = function (e) {
    return null == e ? k.identity : k.isFunction(e) ? e : k.property(e)
  };
  k.sortBy = function (e, t, i) {
    return t = T(t),
    k.pluck(k.map(e, function (e, n, o) {
      return {
        value: e,
        index: n,
        criteria: t.call(i, e, n, o)
      }
    }).sort(function (e, t) {
      var i = e.criteria,
      n = t.criteria;
      if (i !== n) {
        if (i > n || void 0 === i) return 1;
        if (n > i || void 0 === n) return - 1
      }
      return e.index - t.index
    }), 'value')
  };
  var A = function (e) {
    return function (t, i, n) {
      var o = {
      };
      return i = T(i),
      x(t, function (s, r) {
        var a = i.call(n, s, r, t);
        e(o, a, s)
      }),
      o
    }
  };
  k.groupBy = A(function (e, t, i) {
    k.has(e, t) ? e[t].push(i)  : e[t] = [
      i
    ]
  }),
  k.indexBy = A(function (e, t, i) {
    e[t] = i
  }),
  k.countBy = A(function (e, t) {
    k.has(e, t) ? e[t]++ : e[t] = 1
  }),
  k.sortedIndex = function (e, t, i, n) {
    i = T(i);
    for (var o = i.call(n, t), s = 0, r = e.length; r > s; ) {
      var a = s + r >>> 1;
      i.call(n, e[a]) < o ? s = a + 1 : r = a
    }
    return s
  },
  k.toArray = function (e) {
    return e ? k.isArray(e) ? a.call(e)  : e.length === + e.length ? k.map(e, k.identity)  : k.values(e)  : [
    ]
  },
  k.size = function (e) {
    return null == e ? 0 : e.length === + e.length ? e.length : k.keys(e).length
  },
  k.first = k.head = k.take = function (e, t, i) {
    return null == e ? void 0 : null == t || i ? e[0] : 0 > t ? [
    ] : a.call(e, 0, t)
  },
  k.initial = function (e, t, i) {
    return a.call(e, 0, e.length - (null == t || i ? 1 : t))
  },
  k.last = function (e, t, i) {
    return null == e ? void 0 : null == t || i ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
  },
  k.rest = k.tail = k.drop = function (e, t, i) {
    return a.call(e, null == t || i ? 1 : t)
  },
  k.compact = function (e) {
    return k.filter(e, k.identity)
  };
  var D = function (e, t, i, n) {
    if (t && k.every(e, k.isArray)) return l.apply(n, e);
    for (var o = 0, s = e.length; s > o; o++) {
      var a = e[o];
      k.isArray(a) || k.isArguments(a) ? t ? r.apply(n, a)  : D(a, t, i, n)  : i || n.push(a)
    }
    return n
  };
  k.flatten = function (e, t) {
    return D(e, t, !1, [
    ])
  },
  k.without = function (e) {
    return k.difference(e, a.call(arguments, 1))
  },
  k.partition = function (e, t, i) {
    t = T(t);
    var n = [
    ],
    o = [
    ];
    return x(e, function (e) {
      (t.call(i, e) ? n : o).push(e)
    }),
    [
      n,
      o
    ]
  },
  k.uniq = k.unique = function (e, t, i, n) {
    k.isFunction(t) && (n = i, i = t, t = !1);
    var o = i ? k.map(e, i, n)  : e,
    s = [
    ],
    r = [
    ];
    return x(o, function (i, n) {
      (t ? n && r[r.length - 1] === i : k.contains(r, i)) || (r.push(i), s.push(e[n]))
    }),
    s
  },
  k.union = function () {
    return k.uniq(D(arguments, !0, !0, [
    ]))
  },
  k.intersection = function (e) {
    var t = a.call(arguments, 1);
    return k.filter(k.uniq(e), function (e) {
      return k.every(t, function (t) {
        return k.contains(t, e)
      })
    })
  },
  k.difference = function (e) {
    var t = D(a.call(arguments, 1), !0, !0, [
    ]);
    return k.filter(e, function (e) {
      return !k.contains(t, e)
    })
  },
  k.zip = function () {
    for (var e = k.max(k.pluck(arguments, 'length').concat(0)), t = new Array(e), i = 0; e > i; i++) t[i] = k.pluck(arguments, '' + i);
    return t
  },
  k.object = function (e, t) {
    if (null == e) return {
    };
    for (var i = {
    }, n = 0, o = e.length; o > n; n++) t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
    return i
  },
  k.indexOf = function (e, t, i) {
    if (null == e) return - 1;
    var n = 0,
    o = e.length;
    if (i) {
      if ('number' != typeof i) return n = k.sortedIndex(e, t),
      e[n] === t ? n : - 1;
      n = 0 > i ? Math.max(0, o + i)  : i
    }
    if (b && e.indexOf === b) return e.indexOf(t, i);
    for (; o > n; n++) if (e[n] === t) return n;
    return - 1
  },
  k.lastIndexOf = function (e, t, i) {
    if (null == e) return - 1;
    var n = null != i;
    if (y && e.lastIndexOf === y) return n ? e.lastIndexOf(t, i)  : e.lastIndexOf(t);
    for (var o = n ? i : e.length; o--; ) if (e[o] === t) return o;
    return - 1
  },
  k.range = function (e, t, i) {
    arguments.length <= 1 && (t = e || 0, e = 0),
    i = arguments[2] || 1;
    for (var n = Math.max(Math.ceil((t - e) / i), 0), o = 0, s = new Array(n); n > o; ) s[o++] = e,
    e += i;
    return s
  };
  var E = function () {
  };
  k.bind = function (e, t) {
    var i,
    n;
    if (C && e.bind === C) return C.apply(e, a.call(arguments, 1));
    if (!k.isFunction(e)) throw new TypeError;
    return i = a.call(arguments, 2),
    n = function () {
      if (!(this instanceof n)) return e.apply(t, i.concat(a.call(arguments)));
      E.prototype = e.prototype;
      var o = new E;
      E.prototype = null;
      var s = e.apply(o, i.concat(a.call(arguments)));
      return Object(s) === s ? s : o
    }
  },
  k.partial = function (e) {
    var t = a.call(arguments, 1);
    return function () {
      for (var i = 0, n = t.slice(), o = 0, s = n.length; s > o; o++) n[o] === k && (n[o] = arguments[i++]);
      for (; i < arguments.length; ) n.push(arguments[i++]);
      return e.apply(this, n)
    }
  },
  k.bindAll = function (e) {
    var t = a.call(arguments, 1);
    if (0 === t.length) throw new Error('bindAll must be passed function names');
    return x(t, function (t) {
      e[t] = k.bind(e[t], e)
    }),
    e
  },
  k.memoize = function (e, t) {
    var i = {
    };
    return t || (t = k.identity),
    function () {
      var n = t.apply(this, arguments);
      return k.has(i, n) ? i[n] : i[n] = e.apply(this, arguments)
    }
  },
  k.delay = function (e, t) {
    var i = a.call(arguments, 2);
    return setTimeout(function () {
      return e.apply(null, i)
    }, t)
  },
  k.defer = function (e) {
    return k.delay.apply(k, [
      e,
      1
    ].concat(a.call(arguments, 1)))
  },
  k.throttle = function (e, t, i) {
    var n,
    o,
    s,
    r = null,
    a = 0;
    i || (i = {
    });
    var l = function () {
      a = i.leading === !1 ? 0 : k.now(),
      r = null,
      s = e.apply(n, o),
      n = o = null
    };
    return function () {
      var c = k.now();
      a || i.leading !== !1 || (a = c);
      var u = t - (c - a);
      return n = this,
      o = arguments,
      0 >= u ? (clearTimeout(r), r = null, a = c, s = e.apply(n, o), n = o = null)  : r || i.trailing === !1 || (r = setTimeout(l, u)),
      s
    }
  },
  k.debounce = function (e, t, i) {
    var n,
    o,
    s,
    r,
    a,
    l = function () {
      var c = k.now() - r;
      t > c ? n = setTimeout(l, t - c)  : (n = null, i || (a = e.apply(s, o), s = o = null))
    };
    return function () {
      s = this,
      o = arguments,
      r = k.now();
      var c = i && !n;
      return n || (n = setTimeout(l, t)),
      c && (a = e.apply(s, o), s = o = null),
      a
    }
  },
  k.once = function (e) {
    var t,
    i = !1;
    return function () {
      return i ? t : (i = !0, t = e.apply(this, arguments), e = null, t)
    }
  },
  k.wrap = function (e, t) {
    return k.partial(t, e)
  },
  k.compose = function () {
    var e = arguments;
    return function () {
      for (var t = arguments, i = e.length - 1; i >= 0; i--) t = [
        e[i].apply(this, t)
      ];
      return t[0]
    }
  },
  k.after = function (e, t) {
    return function () {
      return --e < 1 ? t.apply(this, arguments)  : void 0
    }
  },
  k.keys = function (e) {
    if (!k.isObject(e)) return [];
    if (_) return _(e);
    var t = [
    ];
    for (var i in e) k.has(e, i) && t.push(i);
    return t
  },
  k.values = function (e) {
    for (var t = k.keys(e), i = t.length, n = new Array(i), o = 0; i > o; o++) n[o] = e[t[o]];
    return n
  },
  k.pairs = function (e) {
    for (var t = k.keys(e), i = t.length, n = new Array(i), o = 0; i > o; o++) n[o] = [
      t[o],
      e[t[o]]
    ];
    return n
  },
  k.invert = function (e) {
    for (var t = {
    }, i = k.keys(e), n = 0, o = i.length; o > n; n++) t[e[i[n]]] = i[n];
    return t
  },
  k.functions = k.methods = function (e) {
    var t = [
    ];
    for (var i in e) k.isFunction(e[i]) && t.push(i);
    return t.sort()
  },
  k.extend = function (e) {
    return x(a.call(arguments, 1), function (t) {
      if (t) for (var i in t) e[i] = t[i]
    }),
    e
  },
  k.pick = function (e) {
    var t = {
    },
    i = l.apply(n, a.call(arguments, 1));
    return x(i, function (i) {
      i in e && (t[i] = e[i])
    }),
    t
  },
  k.omit = function (e) {
    var t = {
    },
    i = l.apply(n, a.call(arguments, 1));
    for (var o in e) k.contains(i, o) || (t[o] = e[o]);
    return t
  },
  k.defaults = function (e) {
    return x(a.call(arguments, 1), function (t) {
      if (t) for (var i in t) void 0 === e[i] && (e[i] = t[i])
    }),
    e
  },
  k.clone = function (e) {
    return k.isObject(e) ? k.isArray(e) ? e.slice()  : k.extend({
    }, e)  : e
  },
  k.tap = function (e, t) {
    return t(e),
    e
  };
  var P = function (e, t, i, n) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return e === t;
    e instanceof k && (e = e._wrapped),
    t instanceof k && (t = t._wrapped);
    var o = c.call(e);
    if (o != c.call(t)) return !1;
    switch (o) {
      case '[object String]':
        return e == String(t);
      case '[object Number]':
        return e != + e ? t != + t : 0 == e ? 1 / e == 1 / t : e == + t;
      case '[object Date]':
      case '[object Boolean]':
        return + e == + t;
      case '[object RegExp]':
        return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
    }
    if ('object' != typeof e || 'object' != typeof t) return !1;
    for (var s = i.length; s--; ) if (i[s] == e) return n[s] == t;
    var r = e.constructor,
    a = t.constructor;
    if (r !== a && !(k.isFunction(r) && r instanceof r && k.isFunction(a) && a instanceof a) && 'constructor' in e && 'constructor' in t) return !1;
    i.push(e),
    n.push(t);
    var l = 0,
    u = !0;
    if ('[object Array]' == o) {
      if (l = e.length, u = l == t.length) for (; l-- && (u = P(e[l], t[l], i, n)); );
  } else {
    for (var d in e) if (k.has(e, d) && (l++, !(u = k.has(t, d) && P(e[d], t[d], i, n)))) break;
    if (u) {
      for (d in t) if (k.has(t, d) && !l--) break;
      u = !l
    }
}
return i.pop(),
n.pop(),
u
};
k.isEqual = function (e, t) {
return P(e, t, [
], [
])
},
k.isEmpty = function (e) {
if (null == e) return !0;
if (k.isArray(e) || k.isString(e)) return 0 === e.length;
for (var t in e) if (k.has(e, t)) return !1;
return !0
},
k.isElement = function (e) {
return !(!e || 1 !== e.nodeType)
},
k.isArray = w || function (e) {
return '[object Array]' == c.call(e)
},
k.isObject = function (e) {
return e === Object(e)
},
x(['Arguments',
'Function',
'String',
'Number',
'Date',
'RegExp'], function (e) {
k['is' + e] = function (t) {
  return c.call(t) == '[object ' + e + ']'
}
}),
k.isArguments(arguments) || (k.isArguments = function (e) {
return !(!e || !k.has(e, 'callee'))
}),
'function' != typeof /./ && (k.isFunction = function (e) {
return 'function' == typeof e
}),
k.isFinite = function (e) {
return isFinite(e) && !isNaN(parseFloat(e))
},
k.isNaN = function (e) {
return k.isNumber(e) && e != + e
},
k.isBoolean = function (e) {
return e === !0 || e === !1 || '[object Boolean]' == c.call(e)
},
k.isNull = function (e) {
return null === e
},
k.isUndefined = function (e) {
return void 0 === e
},
k.has = function (e, t) {
return u.call(e, t)
},
k.noConflict = function () {
return e._ = t,
this
},
k.identity = function (e) {
return e
},
k.constant = function (e) {
return function () {
  return e
}
},
k.property = function (e) {
return function (t) {
  return t[e]
}
},
k.matches = function (e) {
return function (t) {
  if (t === e) return !0;
  for (var i in e) if (e[i] !== t[i]) return !1;
  return !0
}
},
k.times = function (e, t, i) {
for (var n = Array(Math.max(0, e)), o = 0; e > o; o++) n[o] = t.call(i, o);
return n
},
k.random = function (e, t) {
return null == t && (t = e, e = 0),
e + Math.floor(Math.random() * (t - e + 1))
},
k.now = Date.now || function () {
return (new Date).getTime()
};
var R = {
escape: {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  '\'': '&#x27;'
}
};
R.unescape = k.invert(R.escape);
var O = {
escape: new RegExp('[' + k.keys(R.escape).join('') + ']', 'g'),
unescape: new RegExp('(' + k.keys(R.unescape).join('|') + ')', 'g')
};
k.each(['escape',
'unescape'], function (e) {
k[e] = function (t) {
  return null == t ? '' : ('' + t).replace(O[e], function (t) {
    return R[e][t]
  })
}
}),
k.result = function (e, t) {
if (null == e) return void 0;
var i = e[t];
return k.isFunction(i) ? i.call(e)  : i
},
k.mixin = function (e) {
x(k.functions(e), function (t) {
  var i = k[t] = e[t];
  k.prototype[t] = function () {
    var e = [
      this._wrapped
    ];
    return r.apply(e, arguments),
    z.call(this, i.apply(k, e))
  }
})
};
var F = 0;
k.uniqueId = function (e) {
var t = ++F + '';
return e ? e + t : t
},
k.templateSettings = {
evaluate: /<%([\s\S]+?)%>/g,
interpolate: /<%=([\s\S]+?)%>/g,
escape: /<%-([\s\S]+?)%>/g
};
var I = /(.)^/,
W = {
'\'': '\'',
'\\': '\\',
'\r': 'r',
'\n': 'n',
'\t': 't',
'.': 'u2028',
'.': 'u2029'
},
N = /\\|'|\r|\n|\t|\u2028|\u2029/g;
k.template = function (e, t, i) {
var n;
i = k.defaults({
}, i, k.templateSettings);
var o = new RegExp([(i.escape || I).source,
(i.interpolate || I).source,
(i.evaluate || I).source].join('|') + '|$', 'g'),
s = 0,
r = '__p+=\'';
e.replace(o, function (t, i, n, o, a) {
  return r += e.slice(s, a).replace(N, function (e) {
    return '\\' + W[e]
  }),
  i && (r += '\'+\n((__t=(' + i + '))==null?\'\':_.escape(__t))+\n\''),
  n && (r += '\'+\n((__t=(' + n + '))==null?\'\':__t)+\n\''),
  o && (r += '\';\n' + o + '\n__p+=\''),
  s = a + t.length,
  t
}),
r += '\';\n',
i.variable || (r = 'with(obj||{}){\n' + r + '}\n'),
r = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + r + 'return __p;\n';
try {
  n = new Function(i.variable || 'obj', '_', r)
} catch (a) {
  throw a.source = r,
  a
}
if (t) return n(t, k);
var l = function (e) {
  return n.call(this, e, k)
};
return l.source = 'function(' + (i.variable || 'obj') + '){\n' + r + '}',
l
},
k.chain = function (e) {
return k(e).chain()
};
var z = function (e) {
return this._chain ? k(e).chain()  : e
};
k.mixin(k),
x(['pop',
'push',
'reverse',
'shift',
'sort',
'splice',
'unshift'], function (e) {
var t = n[e];
k.prototype[e] = function () {
  var i = this._wrapped;
  return t.apply(i, arguments),
  'shift' != e && 'splice' != e || 0 !== i.length || delete i[0],
  z.call(this, i)
}
}),
x(['concat',
'join',
'slice'], function (e) {
var t = n[e];
k.prototype[e] = function () {
  return z.call(this, t.apply(this._wrapped, arguments))
}
}),
k.extend(k.prototype, {
chain: function () {
  return this._chain = !0,
  this
},
value: function () {
  return this._wrapped
}
}),
'function' == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define('underscore', [
], function () {
return k
})
}.call(this),
function (e, t) {
if ('function' == typeof _wAMD.define && _wAMD.define.amd) _wAMD.define('backbone', [
'underscore',
'jquery',
'exports'
], function (i, n, o) {
e.Backbone = t(e, o, i, n)
});
 else if ('undefined' != typeof exports) {
var i = require('underscore');
t(e, exports, i)
} else e.Backbone = t(e, {
}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}(this, function (e, t, i, n) {
var o = e.Backbone,
s = [
];
s.push;
var r = s.slice;
s.splice,
t.VERSION = '1.1.2',
t.$ = n,
t.noConflict = function () {
return e.Backbone = o,
this
},
t.emulateHTTP = !1,
t.emulateJSON = !1;
var a = t.Events = {
on: function (e, t, i) {
  if (!c(this, 'on', e, [
    t,
    i
  ]) || !t) return this;
  this._events || (this._events = {
  });
  var n = this._events[e] || (this._events[e] = [
  ]);
  return n.push({
    callback: t,
    context: i,
    ctx: i || this
  }),
  this
},
once: function (e, t, n) {
  if (!c(this, 'once', e, [
    t,
    n
  ]) || !t) return this;
  var o = this,
  s = i.once(function () {
    o.off(e, s),
    t.apply(this, arguments)
  });
  return s._callback = t,
  this.on(e, s, n)
},
off: function (e, t, n) {
  var o,
  s,
  r,
  a,
  l,
  u,
  d,
  h;
  if (!this._events || !c(this, 'off', e, [
    t,
    n
  ])) return this;
  if (!e && !t && !n) return this._events = void 0,
  this;
  for (a = e ? [
    e
  ] : i.keys(this._events), l = 0, u = a.length; u > l; l++) if (e = a[l], r = this._events[e]) {
    if (this._events[e] = o = [
    ], t || n) for (d = 0, h = r.length; h > d; d++) s = r[d],
    (t && t !== s.callback && t !== s.callback._callback || n && n !== s.context) && o.push(s);
    o.length || delete this._events[e]
  }
  return this
},
trigger: function (e) {
  if (!this._events) return this;
  var t = r.call(arguments, 1);
  if (!c(this, 'trigger', e, t)) return this;
  var i = this._events[e],
  n = this._events.all;
  return i && u(i, t),
  n && u(n, arguments),
  this
},
stopListening: function (e, t, n) {
  var o = this._listeningTo;
  if (!o) return this;
  var s = !t && !n;
  n || 'object' != typeof t || (n = this),
  e && ((o = {
  }) [e._listenId] = e);
  for (var r in o) e = o[r],
  e.off(t, n, this),
  (s || i.isEmpty(e._events)) && delete this._listeningTo[r];
  return this
}
},
l = /\s+/,
c = function (e, t, i, n) {
if (!i) return !0;
if ('object' == typeof i) {
  for (var o in i) e[t].apply(e, [
    o,
    i[o]
  ].concat(n));
  return !1
}
if (l.test(i)) {
  for (var s = i.split(l), r = 0, a = s.length; a > r; r++) e[t].apply(e, [
    s[r]
  ].concat(n));
  return !1
}
return !0
},
u = function (e, t) {
var i,
n = - 1,
o = e.length,
s = t[0],
r = t[1],
a = t[2];
switch (t.length) {
  case 0:
    for (; ++n < o; ) (i = e[n]).callback.call(i.ctx);
    return;
  case 1:
    for (; ++n < o; ) (i = e[n]).callback.call(i.ctx, s);
    return;
  case 2:
    for (; ++n < o; ) (i = e[n]).callback.call(i.ctx, s, r);
    return;
  case 3:
    for (; ++n < o; ) (i = e[n]).callback.call(i.ctx, s, r, a);
    return;
  default:
    for (; ++n < o; ) (i = e[n]).callback.apply(i.ctx, t);
    return
}
},
d = {
listenTo: 'on',
listenToOnce: 'once'
};
i.each(d, function (e, t) {
a[t] = function (t, n, o) {
  var s = this._listeningTo || (this._listeningTo = {
  }),
  r = t._listenId || (t._listenId = i.uniqueId('l'));
  return s[r] = t,
  o || 'object' != typeof n || (o = this),
  t[e](n, o, this),
  this
}
}),
a.bind = a.on,
a.unbind = a.off,
i.extend(t, a);
var h = t.Model = function (e, t) {
var n = e || {
};
t || (t = {
}),
this.cid = i.uniqueId('c'),
this.attributes = {
},
t.collection && (this.collection = t.collection),
t.parse && (n = this.parse(n, t) || {
}),
n = i.defaults({
}, n, i.result(this, 'defaults')),
this.set(n, t),
this.changed = {
},
this.initialize.apply(this, arguments)
};
i.extend(h.prototype, a, {
changed: null,
validationError: null,
idAttribute: 'id',
initialize: function () {
},
toJSON: function () {
  return i.clone(this.attributes)
},
sync: function () {
  return t.sync.apply(this, arguments)
},
get: function (e) {
  return this.attributes[e]
},
escape: function (e) {
  return i.escape(this.get(e))
},
has: function (e) {
  return null != this.get(e)
},
set: function (e, t, n) {
  var o,
  s,
  r,
  a,
  l,
  c,
  u,
  d;
  if (null == e) return this;
  if ('object' == typeof e ? (s = e, n = t)  : (s = {
  }) [e] = t, n || (n = {
  }), !this._validate(s, n)) return !1;
  r = n.unset,
  l = n.silent,
  a = [
  ],
  c = this._changing,
  this._changing = !0,
  c || (this._previousAttributes = i.clone(this.attributes), this.changed = {
  }),
  d = this.attributes,
  u = this._previousAttributes,
  this.idAttribute in s && (this.id = s[this.idAttribute]);
  for (o in s) t = s[o],
  i.isEqual(d[o], t) || a.push(o),
  i.isEqual(u[o], t) ? delete this.changed[o] : this.changed[o] = t,
  r ? delete d[o] : d[o] = t;
  if (!l) {
    a.length && (this._pending = n);
    for (var h = 0, p = a.length; p > h; h++) this.trigger('change:' + a[h], this, d[a[h]], n)
  }
  if (c) return this;
  if (!l) for (; this._pending; ) n = this._pending,
  this._pending = !1,
  this.trigger('change', this, n);
  return this._pending = !1,
  this._changing = !1,
  this
},
unset: function (e, t) {
  return this.set(e, void 0, i.extend({
  }, t, {
    unset: !0
  }))
},
clear: function (e) {
  var t = {
  };
  for (var n in this.attributes) t[n] = void 0;
  return this.set(t, i.extend({
  }, e, {
    unset: !0
  }))
},
hasChanged: function (e) {
  return null == e ? !i.isEmpty(this.changed)  : i.has(this.changed, e)
},
changedAttributes: function (e) {
  if (!e) return this.hasChanged() ? i.clone(this.changed)  : !1;
  var t,
  n = !1,
  o = this._changing ? this._previousAttributes : this.attributes;
  for (var s in e) i.isEqual(o[s], t = e[s]) || ((n || (n = {
  })) [s] = t);
  return n
},
previous: function (e) {
  return null != e && this._previousAttributes ? this._previousAttributes[e] : null
},
previousAttributes: function () {
  return i.clone(this._previousAttributes)
},
fetch: function (e) {
  e = e ? i.clone(e)  : {
  },
  void 0 === e.parse && (e.parse = !0);
  var t = this,
  n = e.success;
  return e.success = function (i) {
    return t.set(t.parse(i, e), e) ? (n && n(t, i, e), t.trigger('sync', t, i, e), void 0)  : !1
  },
  N(this, e),
  this.sync('read', this, e)
},
save: function (e, t, n) {
  var o,
  s,
  r,
  a = this.attributes;
  if (null == e || 'object' == typeof e ? (o = e, n = t)  : (o = {
  }) [e] = t, n = i.extend({
    validate: !0
  }, n), o && !n.wait) {
    if (!this.set(o, n)) return !1
  } else if (!this._validate(o, n)) return !1;
  o && n.wait && (this.attributes = i.extend({
  }, a, o)),
  void 0 === n.parse && (n.parse = !0);
  var l = this,
  c = n.success;
  return n.success = function (e) {
    l.attributes = a;
    var t = l.parse(e, n);
    return n.wait && (t = i.extend(o || {
    }, t)),
    i.isObject(t) && !l.set(t, n) ? !1 : (c && c(l, e, n), l.trigger('sync', l, e, n), void 0)
  },
  N(this, n),
  s = this.isNew() ? 'create' : n.patch ? 'patch' : 'update',
  'patch' === s && (n.attrs = o),
  r = this.sync(s, this, n),
  o && n.wait && (this.attributes = a),
  r
},
destroy: function (e) {
  e = e ? i.clone(e)  : {
  };
  var t = this,
  n = e.success,
  o = function () {
    t.trigger('destroy', t, t.collection, e)
  };
  if (e.success = function (i) {
    (e.wait || t.isNew()) && o(),
    n && n(t, i, e),
    t.isNew() || t.trigger('sync', t, i, e)
  }, this.isNew()) return e.success(),
  !1;
  N(this, e);
  var s = this.sync('delete', this, e);
  return e.wait || o(),
  s
},
url: function () {
  var e = i.result(this, 'urlRoot') || i.result(this.collection, 'url') || W();
  return this.isNew() ? e : e.replace(/([^\/])$/, '$1/') + encodeURIComponent(this.id)
},
parse: function (e) {
  return e
},
clone: function () {
  return new this.constructor(this.attributes)
},
isNew: function () {
  return !this.has(this.idAttribute)
},
isValid: function (e) {
  return this._validate({
  }, i.extend(e || {
  }, {
    validate: !0
  }))
},
_validate: function (e, t) {
  if (!t.validate || !this.validate) return !0;
  e = i.extend({
  }, this.attributes, e);
  var n = this.validationError = this.validate(e, t) || null;
  return n ? (this.trigger('invalid', this, n, i.extend(t, {
    validationError: n
  })), !1)  : !0
}
});
var p = [
'keys',
'values',
'pairs',
'invert',
'pick',
'omit'
];
i.each(p, function (e) {
h.prototype[e] = function () {
  var t = r.call(arguments);
  return t.unshift(this.attributes),
  i[e].apply(i, t)
}
});
var f = t.Collection = function (e, t) {
t || (t = {
}),
t.model && (this.model = t.model),
void 0 !== t.comparator && (this.comparator = t.comparator),
this._reset(),
this.initialize.apply(this, arguments),
e && this.reset(e, i.extend({
  silent: !0
}, t))
},
m = {
add: !0,
remove: !0,
merge: !0
},
g = {
add: !0,
remove: !1
};
i.extend(f.prototype, a, {
model: h,
initialize: function () {
},
toJSON: function (e) {
  return this.map(function (t) {
    return t.toJSON(e)
  })
},
sync: function () {
  return t.sync.apply(this, arguments)
},
add: function (e, t) {
  return this.set(e, i.extend({
    merge: !1
  }, t, g))
},
remove: function (e, t) {
  var n = !i.isArray(e);
  e = n ? [
    e
  ] : i.clone(e),
  t || (t = {
  });
  var o,
  s,
  r,
  a;
  for (o = 0, s = e.length; s > o; o++) a = e[o] = this.get(e[o]),
  a && (delete this._byId[a.id], delete this._byId[a.cid], r = this.indexOf(a), this.models.splice(r, 1), this.length--, t.silent || (t.index = r, a.trigger('remove', a, this, t)), this._removeReference(a, t));
  return n ? e[0] : e
},
set: function (e, t) {
  t = i.defaults({
  }, t, m),
  t.parse && (e = this.parse(e, t));
  var n = !i.isArray(e);
  e = n ? e ? [
    e
  ] : [
  ] : i.clone(e);
  var o,
  s,
  r,
  a,
  l,
  c,
  u,
  d = t.at,
  p = this.model,
  f = this.comparator && null == d && t.sort !== !1,
  g = i.isString(this.comparator) ? this.comparator : null,
  v = [
  ],
  b = [
  ],
  y = {
  },
  w = t.add,
  _ = t.merge,
  C = t.remove,
  k = !f && w && C ? [
  ] : !1;
  for (o = 0, s = e.length; s > o; o++) {
    if (l = e[o] || {
    }, r = l instanceof h ? a = l : l[p.prototype.idAttribute || 'id'], c = this.get(r)) C && (y[c.cid] = !0),
    _ && (l = l === a ? a.attributes : l, t.parse && (l = c.parse(l, t)), c.set(l, t), f && !u && c.hasChanged(g) && (u = !0)),
    e[o] = c;
     else if (w) {
      if (a = e[o] = this._prepareModel(l, t), !a) continue;
      v.push(a),
      this._addReference(a, t)
    }
    a = c || a,
    !k || !a.isNew() && y[a.id] || k.push(a),
    y[a.id] = !0
  }
  if (C) {
    for (o = 0, s = this.length; s > o; ++o) y[(a = this.models[o]).cid] || b.push(a);
    b.length && this.remove(b, t)
  }
  if (v.length || k && k.length) if (f && (u = !0), this.length += v.length, null != d) for (o = 0, s = v.length; s > o; o++) this.models.splice(d + o, 0, v[o]);
   else {
    k && (this.models.length = 0);
    var x = k || v;
    for (o = 0, s = x.length; s > o; o++) this.models.push(x[o])
  }
  if (u && this.sort({
    silent: !0
  }), !t.silent) {
    for (o = 0, s = v.length; s > o; o++) (a = v[o]).trigger('add', a, this, t);
    (u || k && k.length) && this.trigger('sort', this, t)
  }
  return n ? e[0] : e
},
reset: function (e, t) {
  t || (t = {
  });
  for (var n = 0, o = this.models.length; o > n; n++) this._removeReference(this.models[n], t);
  return t.previousModels = this.models,
  this._reset(),
  e = this.add(e, i.extend({
    silent: !0
  }, t)),
  t.silent || this.trigger('reset', this, t),
  e
},
push: function (e, t) {
  return this.add(e, i.extend({
    at: this.length
  }, t))
},
pop: function (e) {
  var t = this.at(this.length - 1);
  return this.remove(t, e),
  t
},
unshift: function (e, t) {
  return this.add(e, i.extend({
    at: 0
  }, t))
},
shift: function (e) {
  var t = this.at(0);
  return this.remove(t, e),
  t
},
slice: function () {
  return r.apply(this.models, arguments)
},
get: function (e) {
  return null == e ? void 0 : this._byId[e] || this._byId[e.id] || this._byId[e.cid]
},
at: function (e) {
  return this.models[e]
},
where: function (e, t) {
  return i.isEmpty(e) ? t ? void 0 : [
  ] : this[t ? 'find' : 'filter'](function (t) {
    for (var i in e) if (e[i] !== t.get(i)) return !1;
    return !0
  })
},
findWhere: function (e) {
  return this.where(e, !0)
},
sort: function (e) {
  if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
  return e || (e = {
  }),
  i.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this)  : this.models.sort(i.bind(this.comparator, this)),
  e.silent || this.trigger('sort', this, e),
  this
},
pluck: function (e) {
  return i.invoke(this.models, 'get', e)
},
fetch: function (e) {
  e = e ? i.clone(e)  : {
  },
  void 0 === e.parse && (e.parse = !0);
  var t = e.success,
  n = this;
  return e.success = function (i) {
    var o = e.reset ? 'reset' : 'set';
    n[o](i, e),
    t && t(n, i, e),
    n.trigger('sync', n, i, e)
  },
  N(this, e),
  this.sync('read', this, e)
},
create: function (e, t) {
  if (t = t ? i.clone(t)  : {
  }, !(e = this._prepareModel(e, t))) return !1;
  t.wait || this.add(e, t);
  var n = this,
  o = t.success;
  return t.success = function (e, i) {
    t.wait && n.add(e, t),
    o && o(e, i, t)
  },
  e.save(null, t),
  e
},
parse: function (e) {
  return e
},
clone: function () {
  return new this.constructor(this.models)
},
_reset: function () {
  this.length = 0,
  this.models = [
  ],
  this._byId = {
  }
},
_prepareModel: function (e, t) {
  if (e instanceof h) return e;
  t = t ? i.clone(t)  : {
  },
  t.collection = this;
  var n = new this.model(e, t);
  return n.validationError ? (this.trigger('invalid', this, n.validationError, t), !1)  : n
},
_addReference: function (e) {
  this._byId[e.cid] = e,
  null != e.id && (this._byId[e.id] = e),
  e.collection || (e.collection = this),
  e.on('all', this._onModelEvent, this)
},
_removeReference: function (e) {
  this === e.collection && delete e.collection,
  e.off('all', this._onModelEvent, this)
},
_onModelEvent: function (e, t, i, n) {
  ('add' !== e && 'remove' !== e || i === this) && ('destroy' === e && this.remove(t, n), t && e === 'change:' + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
}
});
var v = [
'forEach',
'each',
'map',
'collect',
'reduce',
'foldl',
'inject',
'reduceRight',
'foldr',
'find',
'detect',
'filter',
'select',
'reject',
'every',
'all',
'some',
'any',
'include',
'contains',
'invoke',
'max',
'min',
'toArray',
'size',
'first',
'head',
'take',
'initial',
'rest',
'tail',
'drop',
'last',
'without',
'difference',
'indexOf',
'shuffle',
'lastIndexOf',
'isEmpty',
'chain',
'sample'
];
i.each(v, function (e) {
f.prototype[e] = function () {
  var t = r.call(arguments);
  return t.unshift(this.models),
  i[e].apply(i, t)
}
});
var b = [
'groupBy',
'countBy',
'sortBy',
'indexBy'
];
i.each(b, function (e) {
f.prototype[e] = function (t, n) {
  var o = i.isFunction(t) ? t : function (e) {
    return e.get(t)
  };
  return i[e](this.models, o, n)
}
});
var y = t.View = function (e) {
this.cid = i.uniqueId('view'),
e || (e = {
}),
i.extend(this, i.pick(e, _)),
this._ensureElement(),
this.initialize.apply(this, arguments),
this.delegateEvents()
},
w = /^(\S+)\s*(.*)$/,
_ = [
'model',
'collection',
'el',
'id',
'attributes',
'className',
'tagName',
'events'
];
i.extend(y.prototype, a, {
tagName: 'div',
$: function (e) {
  return this.$el.find(e)
},
initialize: function () {
},
render: function () {
  return this
},
remove: function () {
  return this.$el.remove(),
  this.stopListening(),
  this
},
setElement: function (e, i) {
  return this.$el && this.undelegateEvents(),
  this.$el = e instanceof t.$ ? e : t.$(e),
  this.el = this.$el[0],
  i !== !1 && this.delegateEvents(),
  this
},
delegateEvents: function (e) {
  if (!e && !(e = i.result(this, 'events'))) return this;
  this.undelegateEvents();
  for (var t in e) {
    var n = e[t];
    if (i.isFunction(n) || (n = this[e[t]]), n) {
      var o = t.match(w),
      s = o[1],
      r = o[2];
      n = i.bind(n, this),
      s += '.delegateEvents' + this.cid,
      '' === r ? this.$el.on(s, n)  : this.$el.on(s, r, n)
    }
  }
  return this
},
undelegateEvents: function () {
  return this.$el.off('.delegateEvents' + this.cid),
  this
},
_ensureElement: function () {
  if (this.el) this.setElement(i.result(this, 'el'), !1);
   else {
    var e = i.extend({
    }, i.result(this, 'attributes'));
    this.id && (e.id = i.result(this, 'id')),
    this.className && (e['class'] = i.result(this, 'className'));
    var n = t.$('<' + i.result(this, 'tagName') + '>').attr(e);
    this.setElement(n, !1)
  }
}
}),
t.sync = function (e, n, o) {
var s = k[e];
i.defaults(o || (o = {
}), {
  emulateHTTP: t.emulateHTTP,
  emulateJSON: t.emulateJSON
});
var r = {
  type: s,
  dataType: 'json'
};
if (o.url || (r.url = i.result(n, 'url') || W()), null != o.data || !n || 'create' !== e && 'update' !== e && 'patch' !== e || (r.contentType = 'application/json', r.data = JSON.stringify(o.attrs || n.toJSON(o))), o.emulateJSON && (r.contentType = 'application/x-www-form-urlencoded', r.data = r.data ? {
  model: r.data
}
 : {
}), o.emulateHTTP && ('PUT' === s || 'DELETE' === s || 'PATCH' === s)) {
  r.type = 'POST',
  o.emulateJSON && (r.data._method = s);
  var a = o.beforeSend;
  o.beforeSend = function (e) {
    return e.setRequestHeader('X-HTTP-Method-Override', s),
    a ? a.apply(this, arguments)  : void 0
  }
}
'GET' === r.type || o.emulateJSON || (r.processData = !1),
'PATCH' === r.type && C && (r.xhr = function () {
  return new ActiveXObject('Microsoft.XMLHTTP')
});
var l = o.xhr = t.ajax(i.extend(r, o));
return n.trigger('request', n, l, o),
l
};
var C = !('undefined' == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent),
k = {
create: 'POST',
update: 'PUT',
patch: 'PATCH',
'delete': 'DELETE',
read: 'GET'
};
t.ajax = function () {
return t.$.ajax.apply(t.$, arguments)
};
var x = t.Router = function (e) {
e || (e = {
}),
e.routes && (this.routes = e.routes),
this._bindRoutes(),
this.initialize.apply(this, arguments)
},
M = /\((.*?)\)/g,
S = /(\(\?)?:\w+/g,
T = /\*\w+/g,
A = /[\-{}\[\]+?.,\\\^$|#\s]/g;
i.extend(x.prototype, a, {
initialize: function () {
},
route: function (e, n, o) {
  i.isRegExp(e) || (e = this._routeToRegExp(e)),
  i.isFunction(n) && (o = n, n = ''),
  o || (o = this[n]);
  var s = this;
  return t.history.route(e, function (i) {
    var r = s._extractParameters(e, i);
    s.execute(o, r),
    s.trigger.apply(s, [
      'route:' + n
    ].concat(r)),
    s.trigger('route', n, r),
    t.history.trigger('route', s, n, r)
  }),
  this
},
execute: function (e, t) {
  e && e.apply(this, t)
},
navigate: function (e, i) {
  return t.history.navigate(e, i),
  this
},
_bindRoutes: function () {
  if (this.routes) {
    this.routes = i.result(this, 'routes');
    for (var e, t = i.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e])
  }
},
_routeToRegExp: function (e) {
  return e = e.replace(A, '\\$&').replace(M, '(?:$1)?').replace(S, function (e, t) {
    return t ? e : '([^/?]+)'
  }).replace(T, '([^?]*?)'),
  new RegExp('^' + e + '(?:\\?([\\s\\S]*))?$')
},
_extractParameters: function (e, t) {
  var n = e.exec(t).slice(1);
  return i.map(n, function (e, t) {
    return t === n.length - 1 ? e || null : e ? decodeURIComponent(e)  : null
  })
}
});
var D = t.History = function () {
this.handlers = [
],
i.bindAll(this, 'checkUrl'),
'undefined' != typeof window && (this.location = window.location, this.history = window.history)
},
E = /^[#\/]|\s+$/g,
P = /^\/+|\/+$/g,
R = /msie [\w.]+/,
O = /\/$/,
F = /#.*$/;
D.started = !1,
i.extend(D.prototype, a, {
interval: 50,
atRoot: function () {
  return this.location.pathname.replace(/[^\/]$/, '$&/') === this.root
},
getHash: function (e) {
  var t = (e || this).location.href.match(/#(.*)$/);
  return t ? t[1] : ''
},
getFragment: function (e, t) {
  if (null == e) if (this._hasPushState || !this._wantsHashChange || t) {
    e = decodeURI(this.location.pathname + this.location.search);
    var i = this.root.replace(O, '');
    e.indexOf(i) || (e = e.slice(i.length))
  } else e = this.getHash();
  return e.replace(E, '')
},
start: function (e) {
  if (D.started) throw new Error('Backbone.history has already been started');
  D.started = !0,
  this.options = i.extend({
    root: '/'
  }, this.options, e),
  this.root = this.options.root,
  this._wantsHashChange = this.options.hashChange !== !1,
  this._wantsPushState = !!this.options.pushState,
  this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
  var n = this.getFragment(),
  o = document.documentMode,
  s = R.exec(navigator.userAgent.toLowerCase()) && (!o || 7 >= o);
  if (this.root = ('/' + this.root + '/').replace(P, '/'), s && this._wantsHashChange) {
    var r = t.$('<iframe src="javascript:0" tabindex="-1">');
    this.iframe = r.hide().appendTo('body') [0].contentWindow,
    this.navigate(n)
  }
  this._hasPushState ? t.$(window).on('popstate', this.checkUrl)  : this._wantsHashChange && 'onhashchange' in window && !s ? t.$(window).on('hashchange', this.checkUrl)  : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
  this.fragment = n;
  var a = this.location;
  if (this._wantsHashChange && this._wantsPushState) {
    if (!this._hasPushState && !this.atRoot()) return this.fragment = this.getFragment(null, !0),
    this.location.replace(this.root + '#' + this.fragment),
    !0;
    this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(E, ''), this.history.replaceState({
    }, document.title, this.root + this.fragment))
  }
  return this.options.silent ? void 0 : this.loadUrl()
},
stop: function () {
  t.$(window).off('popstate', this.checkUrl).off('hashchange', this.checkUrl),
  this._checkUrlInterval && clearInterval(this._checkUrlInterval),
  D.started = !1
},
route: function (e, t) {
  this.handlers.unshift({
    route: e,
    callback: t
  })
},
checkUrl: function () {
  var e = this.getFragment();
  return e === this.fragment && this.iframe && (e = this.getFragment(this.getHash(this.iframe))),
  e === this.fragment ? !1 : (this.iframe && this.navigate(e), this.loadUrl(), void 0)
},
loadUrl: function (e) {
  return e = this.fragment = this.getFragment(e),
  i.any(this.handlers, function (t) {
    return t.route.test(e) ? (t.callback(e), !0)  : void 0
  })
},
navigate: function (e, t) {
  if (!D.started) return !1;
  t && t !== !0 || (t = {
    trigger: !!t
  });
  var i = this.root + (e = this.getFragment(e || ''));
  if (e = e.replace(F, ''), this.fragment !== e) {
    if (this.fragment = e, '' === e && '/' !== i && (i = i.slice(0, - 1)), this._hasPushState) this.history[t.replace ? 'replaceState' : 'pushState']({
    }, document.title, i);
     else {
      if (!this._wantsHashChange) return this.location.assign(i);
      this._updateHash(this.location, e, t.replace),
      this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
    }
    return t.trigger ? this.loadUrl(e)  : void 0
  }
},
_updateHash: function (e, t, i) {
  if (i) {
    var n = e.href.replace(/(javascript:|#).*$/, '');
    e.replace(n + '#' + t)
  } else e.hash = '#' + t
}
}),
t.history = new D;
var I = function (e, t) {
var n,
o = this;
n = e && i.has(e, 'constructor') ? e.constructor : function () {
  return o.apply(this, arguments)
},
i.extend(n, o, t);
var s = function () {
  this.constructor = n
};
return s.prototype = o.prototype,
n.prototype = new s,
e && i.extend(n.prototype, e),
n.__super__ = o.prototype,
n
};
h.extend = f.extend = x.extend = y.extend = D.extend = I;
var W = function () {
throw new Error('A "url" property or function must be specified')
},
N = function (e, t) {
var i = t.error;
t.error = function (n) {
  i && i(e, n, t),
  e.trigger('error', e, n, t)
}
};
return t
}), function (e) {
if ('object' == typeof exports) module.exports = e(require('underscore'), require('backbone'));
 else if ('function' == typeof define && define.amd) _wAMD.define('backbone-pageable', [
'underscore',
'backbone'
], e);
 else if ('undefined' != typeof _ && 'undefined' != typeof Backbone) {
var t = Backbone.PageableCollection,
i = e(_, Backbone);
Backbone.PageableCollection.noConflict = function () {
  return Backbone.PageableCollection = t,
  i
}
}
}(function (e, t) {
function i(t, i) {
if (!e.isNumber(t) || e.isNaN(t) || !e.isFinite(t) || ~~t !== t) throw new TypeError('`' + i + '` must be a finite integer');
return t
}
function n(e) {
for (var t, i, n, o, s = {
}, r = decodeURIComponent, a = e.split('&'), l = 0, c = a.length; c > l; l++) {
  var u = a[l];
  t = u.split('='),
  i = t[0],
  n = t[1] || !0,
  i = r(i),
  n = r(n),
  o = s[i],
  f(o) ? o.push(n)  : s[i] = o ? [
    o,
    n
  ] : n
}
return s
}
function o(e, t, i) {
var n = e._events[t];
if (n && n.length) {
  var o = n[n.length - 1],
  s = o.callback;
  o.callback = function () {
    try {
      s.apply(this, arguments),
      i()
    } catch (e) {
      throw e
    } finally {
      o.callback = s
    }
  }
} else i()
}
var s = e.extend,
r = e.omit,
a = e.clone,
l = e.each,
c = e.pick,
u = e.contains,
d = e.isEmpty,
h = e.pairs,
p = e.invert,
f = e.isArray,
m = e.isFunction,
g = e.isObject,
v = e.keys,
b = e.isUndefined,
y = e.result,
w = Math.ceil,
_ = Math.floor,
C = Math.max,
k = t.Collection.prototype,
x = /[\s'"]/g,
M = /[<>\s'"]/g,
S = t.PageableCollection = t.Collection.extend({
state: {
  firstPage: 1,
  lastPage: null,
  currentPage: null,
  pageSize: 25,
  totalPages: null,
  totalRecords: null,
  sortKey: null,
  order: - 1
},
mode: 'server',
queryParams: {
  currentPage: 'page',
  pageSize: 'per_page',
  totalPages: 'total_pages',
  totalRecords: 'total_entries',
  sortKey: 'sort_by',
  order: 'order',
  directions: {
    '-1': 'asc',
    1: 'desc'
  }
},
constructor: function (e, t) {
  k.constructor.apply(this, arguments),
  t = t || {
  };
  var i = this.mode = t.mode || this.mode || T.mode,
  n = s({
  }, T.queryParams, this.queryParams, t.queryParams || {
  });
  n.directions = s({
  }, T.queryParams.directions, this.queryParams.directions, n.directions || {
  }),
  this.queryParams = n;
  var o = this.state = s({
  }, T.state, this.state, t.state || {
  });
  o.currentPage = null == o.currentPage ? o.firstPage : o.currentPage,
  f(e) || (e = e ? [
    e
  ] : [
  ]),
  'server' == i || null != o.totalRecords || d(e) || (o.totalRecords = e.length),
  this.switchMode(i, s({
    fetch: !1,
    resetState: !1,
    models: e
  }, t));
  var r = t.comparator;
  if (o.sortKey && !r && this.setSorting(o.sortKey, o.order, t), 'server' != i) {
    var l = this.fullCollection;
    r && t.full && (this.comparator = null, l.comparator = r),
    t.full && l.sort(),
    e && !d(e) && (this.reset([].slice.call(e), s({
      silent: !0
    }, t)), this.getPage(o.currentPage), e.splice.apply(e, [
      0,
      e.length
    ].concat(this.models)))
  }
  this._initState = a(this.state)
},
_makeFullCollection: function (e, i) {
  var n,
  o,
  s,
  r = [
    'url',
    'model',
    'sync',
    'comparator'
  ],
  a = this.constructor.prototype,
  l = {
  };
  for (n = 0, o = r.length; o > n; n++) s = r[n],
  b(a[s]) || (l[s] = a[s]);
  var c = new (t.Collection.extend(l)) (e, i);
  for (n = 0, o = r.length; o > n; n++) s = r[n],
  this[s] !== a[s] && (c[s] = this[s]);
  return c
},
_makeCollectionEventHandler: function (e, t) {
  return function (i, n, r, c) {
    var u = e._handlers;
    l(v(u), function (i) {
      var n = u[i];
      e.off(i, n),
      t.off(i, n)
    });
    var d = a(e.state),
    h = d.firstPage,
    p = 0 === h ? d.currentPage : d.currentPage - 1,
    f = d.pageSize,
    m = p * f,
    g = m + f;
    if ('add' == i) {
      var y,
      _,
      C,
      k,
      c = c || {
      };
      if (r == t) _ = t.indexOf(n),
      _ >= m && g > _ && (k = e, y = C = _ - m);
       else {
        y = e.indexOf(n),
        _ = m + y,
        k = t;
        var C = b(c.at) ? _ : c.at + m
      }
      if (c.onRemove || (++d.totalRecords, delete c.onRemove), e.state = e._checkState(d), k) {
        k.add(n, s({
        }, c || {
        }, {
          at: C
        }));
        var x = y >= f ? n : !b(c.at) && g > C && e.length > f ? e.at(f)  : null;
        x && o(r, i, function () {
          e.remove(x, {
            onAdd: !0
          })
        })
      }
    }
    if ('remove' == i) if (c.onAdd) delete c.onAdd;
     else {
      if (--d.totalRecords) {
        var M = d.totalPages = w(d.totalRecords / f);
        d.lastPage = 0 === h ? M - 1 : M || h,
        d.currentPage > M && (d.currentPage = d.lastPage)
      } else d.totalRecords = null,
      d.totalPages = null;
      e.state = e._checkState(d);
      var S,
      T = c.index;
      r == e ? ((S = t.at(g)) && o(e, i, function () {
        e.push(S, {
          onRemove: !0
        })
      }), t.remove(n))  : T >= m && g > T && ((S = t.at(g - 1)) && o(e, i, function () {
        e.push(S, {
          onRemove: !0
        })
      }), e.remove(n))
    }
    if ('reset' == i) if (c = r, r = n, r == e && null == c.from && null == c.to) {
      var A = t.models.slice(0, m),
      D = t.models.slice(m + e.models.length);
      t.reset(A.concat(e.models).concat(D), c)
    } else r == t && ((d.totalRecords = t.models.length) || (d.totalRecords = null, d.totalPages = null), 'client' == e.mode && (d.lastPage = d.currentPage = d.firstPage), e.state = e._checkState(d), e.reset(t.models.slice(m, g), s({
    }, c, {
      parse: !1
    })));
    'sort' == i && (c = r, r = n, r === t && e.reset(t.models.slice(m, g), s({
    }, c, {
      parse: !1
    }))),
    l(v(u), function (i) {
      var n = u[i];
      l([e,
      t], function (e) {
        e.on(i, n);
        var t = e._events[i] || [];
        t.unshift(t.pop())
      })
    })
  }
},
_checkState: function (e) {
  var t = this.mode,
  n = this.links,
  o = e.totalRecords,
  s = e.pageSize,
  r = e.currentPage,
  a = e.firstPage,
  l = e.totalPages;
  if (null != o && null != s && null != r && null != a && ('infinite' == t ? n : !0)) {
    if (o = i(o, 'totalRecords'), s = i(s, 'pageSize'), r = i(r, 'currentPage'), a = i(a, 'firstPage'), 1 > s) throw new RangeError('`pageSize` must be >= 1');
    if (l = e.totalPages = w(o / s), 0 > a || a > 1) throw new RangeError('`firstPage must be 0 or 1`');
    if (e.lastPage = 0 === a ? C(0, l - 1)  : l || a, 'infinite' == t) {
      if (!n[r + '']) throw new RangeError('No link found for page ' + r)
    } else if (a > r || l > 0 && (a ? r > l : r >= l)) throw new RangeError('`currentPage` must be firstPage <= currentPage ' + (a ? '>' : '>=') + ' totalPages if ' + a + '-based. Got ' + r + '.')
  }
  return e
},
setPageSize: function (e, t) {
  e = i(e, 'pageSize'),
  t = t || {
    first: !1
  };
  var n = this.state,
  o = w(n.totalRecords / e),
  a = o ? C(n.firstPage, _(o * (n.firstPage ? n.currentPage : n.currentPage + 1) / n.totalPages))  : n.firstPage;
  return n = this.state = this._checkState(s({
  }, n, {
    pageSize: e,
    currentPage: t.first ? n.firstPage : a,
    totalPages: o
  })),
  this.getPage(n.currentPage, r(t, [
    'first'
  ]))
},
switchMode: function (t, i) {
  if (!u(['server',
  'client',
  'infinite'], t)) throw new TypeError('`mode` must be one of "server", "client" or "infinite"');
  i = i || {
    fetch: !0,
    resetState: !0
  };
  var n = this.state = i.resetState ? a(this._initState)  : this._checkState(s({
  }, this.state));
  this.mode = t;
  var o,
  c = this,
  d = this.fullCollection,
  h = this._handlers = this._handlers || {
  };
  if ('server' == t || d) 'server' == t && d && (l(v(h), function (e) {
    o = h[e],
    c.off(e, o),
    d.off(e, o)
  }), delete this._handlers, this._fullComparator = d.comparator, delete this.fullCollection);
   else {
    d = this._makeFullCollection(i.models || [], i),
    d.pageableCollection = this,
    this.fullCollection = d;
    var p = this._makeCollectionEventHandler(this, d);
    l(['add',
    'remove',
    'reset',
    'sort'], function (t) {
      h[t] = o = e.bind(p, {
      }, t),
      c.on(t, o),
      d.on(t, o)
    }),
    d.comparator = this._fullComparator
  }
  if ('infinite' == t) for (var f = this.links = {
  }, m = n.firstPage, g = w(n.totalRecords / n.pageSize), b = 0 === m ? C(0, g - 1)  : g || m, y = n.firstPage; b >= y; y++) f[y] = this.url;
   else this.links && delete this.links;
  return i.fetch ? this.fetch(r(i, 'fetch', 'resetState'))  : this
},
hasPrevious: function () {
  var e = this.state,
  t = e.currentPage;
  return 'infinite' != this.mode ? t > e.firstPage : !!this.links[t - 1]
},
hasNext: function () {
  var e = this.state,
  t = this.state.currentPage;
  return 'infinite' != this.mode ? t < e.lastPage : !!this.links[t + 1]
},
getFirstPage: function (e) {
  return this.getPage('first', e)
},
getPreviousPage: function (e) {
  return this.getPage('prev', e)
},
getNextPage: function (e) {
  return this.getPage('next', e)
},
getLastPage: function (e) {
  return this.getPage('last', e)
},
getPage: function (e, t) {
  var n = this.mode,
  o = this.fullCollection;
  t = t || {
    fetch: !1
  };
  var a = this.state,
  l = a.firstPage,
  c = a.currentPage,
  u = a.lastPage,
  h = a.pageSize,
  p = e;
  switch (e) {
    case 'first':
      p = l;
      break;
    case 'prev':
      p = c - 1;
      break;
    case 'next':
      p = c + 1;
      break;
    case 'last':
      p = u;
      break;
    default:
      p = i(e, 'index')
  }
  this.state = this._checkState(s({
  }, a, {
    currentPage: p
  })),
  t.from = c,
  t.to = p;
  var f = (0 === l ? p : p - 1) * h,
  m = o && o.length ? o.models.slice(f, f + h)  : [
  ];
  return 'client' != n && ('infinite' != n || d(m)) || t.fetch ? ('infinite' == n && (t.url = this.links[p]), this.fetch(r(t, 'fetch')))  : (this.reset(m, r(t, 'fetch')), this)
},
getPageByOffset: function (e, t) {
  if (0 > e) throw new RangeError('`offset must be > 0`');
  e = i(e);
  var n = _(e / this.state.pageSize);
  return 0 !== this.state.firstPage && n++,
  n > this.state.lastPage && (n = this.state.lastPage),
  this.getPage(n, t)
},
sync: function (e, i, n) {
  var o = this;
  if ('infinite' == o.mode) {
    var r = n.success,
    a = o.state.currentPage;
    n.success = function (e, t, i) {
      var l = o.links,
      c = o.parseLinks(e, s({
        xhr: i
      }, n));
      c.first && (l[o.state.firstPage] = c.first),
      c.prev && (l[a - 1] = c.prev),
      c.next && (l[a + 1] = c.next),
      r && r(e, t, i)
    }
  }
  return (k.sync || t.sync).call(o, e, i, n)
},
parseLinks: function (e, t) {
  var i = {
  },
  n = t.xhr.getResponseHeader('Link');
  if (n) {
    var o = [
      'first',
      'prev',
      'next'
    ];
    l(n.split(','), function (e) {
      var t = e.split(';'),
      n = t[0].replace(M, ''),
      s = t.slice(1);
      l(s, function (e) {
        var t = e.split('='),
        s = t[0].replace(x, ''),
        r = t[1].replace(x, '');
        'rel' == s && u(o, r) && (i[r] = n)
      })
    })
  }
  return i
},
parse: function (e, t) {
  var i = this.parseState(e, a(this.queryParams), a(this.state), t);
  return i && (this.state = this._checkState(s({
  }, this.state, i))),
  this.parseRecords(e, t)
},
parseState: function (t, i, n) {
  if (t && 2 === t.length && g(t[0]) && f(t[1])) {
    var o = a(n),
    s = t[0];
    return l(h(r(i, 'directions')), function (t) {
      var i = t[0],
      n = t[1],
      r = s[n];
      b(r) || e.isNull(r) || (o[i] = s[n])
    }),
    s.order && (o.order = 1 * p(i.directions) [s.order]),
    o
  }
},
parseRecords: function (e) {
  return e && 2 === e.length && g(e[0]) && f(e[1]) ? e[1] : e
},
fetch: function (e) {
  e = e || {
  };
  var t = this._checkState(this.state),
  i = this.mode;
  'infinite' != i || e.url || (e.url = this.links[t.currentPage]);
  var o = e.data || {
  },
  l = y(e, 'url') || y(this, 'url') || '',
  u = l.indexOf('?');
  - 1 != u && (s(o, n(l.slice(u + 1))), l = l.slice(0, u)),
  e.url = l,
  e.data = o;
  var d,
  p,
  f,
  g,
  w = 'client' == this.mode ? c(this.queryParams, 'sortKey', 'order')  : r(c(this.queryParams, v(T.queryParams)), 'directions'),
  _ = h(w),
  C = a(this);
  for (d = 0; d < _.length; d++) p = _[d],
  f = p[0],
  g = p[1],
  g = m(g) ? g.call(C)  : g,
  null != t[f] && null != g && (o[g] = t[f]);
  t.sortKey && t.order ? o[w.order] = this.queryParams.directions[t.order + ''] : t.sortKey || delete o[w.order];
  var x = h(r(this.queryParams, v(T.queryParams)));
  for (d = 0; d < x.length; d++) p = x[d],
  g = p[1],
  g = m(g) ? g.call(C)  : g,
  null != g && (o[p[0]] = g);
  if ('server' != i) {
    var M = this,
    S = this.fullCollection,
    A = e.success;
    return e.success = function (t, n, o) {
      o = o || {
      },
      b(e.silent) ? delete o.silent : o.silent = e.silent;
      var r = t.models;
      'client' == i ? S.reset(r, o)  : (S.add(r, s({
        at: S.length
      }, s(o, {
        parse: !1
      }))), M.trigger('reset', M, o)),
      A && A(t, n, o)
    },
    k.fetch.call(this, s({
    }, e, {
      silent: !0
    }))
  }
  return k.fetch.call(this, e)
},
_makeComparator: function (e, t, i) {
  var n = this.state;
  return e = e || n.sortKey,
  t = t || n.order,
  e && t ? (i || (i = function (e, t) {
    return e.get(t)
  }), function (n, o) {
    var s,
    r = i(n, e),
    a = i(o, e);
    return 1 === t && (s = r, r = a, a = s),
    r === a ? 0 : a > r ? - 1 : 1
  })  : void 0
},
setSorting: function (t, i, n) {
  var o = this.state;
  o.sortKey = t,
  o.order = i = i || o.order;
  var r = this.fullCollection,
  a = !1,
  l = !1;
  t || (a = l = !0);
  var c = this.mode;
  n = s({
    side: 'client' == c ? c : 'server',
    full: !0
  }, n);
  var u = this._makeComparator(t, i, n.sortValue),
  d = n.full,
  h = n.side;
  return 'client' == h ? d ? (r && (r.comparator = u), a = !0)  : (this.comparator = u, l = !0)  : 'server' != h || d || (this.comparator = u),
  a && (this.comparator = null),
  l && r && (r.comparator = null),
  this.fetchOptions = e.extend({
  }, this.fetchOptions, {
    sort: [
      {
        property: t,
        direction: i > 0 ? 'ASC' : 'DESC'
      }
    ]
  }),
  this
}
}), T = S.prototype; return S
}), function (e) {
'object' == typeof exports ? module.exports = e(require('backbone'), require('underscore'))  : 'function' == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define('backbone-validation', [
'backbone',
'underscore'
], e)
}(function (e, t) {
return e.Validation = function (t) {
var i = {
  forceUpdate: !1,
  selector: 'name',
  labelFormatter: 'sentenceCase',
  valid: Function.prototype,
  invalid: Function.prototype
},
n = {
  formatLabel: function (e, t) {
    return c[i.labelFormatter](e, t)
  },
  format: function () {
    var e = Array.prototype.slice.call(arguments),
    t = e.shift();
    return t.replace(/\{(\d+)\}/g, function (t, i) {
      return 'undefined' != typeof e[i] ? e[i] : t
    })
  }
},
o = function (i, n, s) {
  return n = n || {
  },
  s = s || '',
  t.each(i, function (t, r) {
    i.hasOwnProperty(r) && (!t || 'object' != typeof t || t instanceof Array || t instanceof Date || t instanceof RegExp || t instanceof e.Model || t instanceof e.Collection ? n[s + r] = t : o(t, n, s + r + '.'))
  }),
  n
},
s = function () {
  var e = function (e) {
    return t.reduce(t.keys(t.result(e, 'validation') || {
    }), function (e, t) {
      return e[t] = void 0,
      e
    }, {
    })
  },
  s = function (e, i) {
    var n = e.validation ? t.result(e, 'validation') [i] || {
    }
     : {
    };
    return (t.isFunction(n) || t.isString(n)) && (n = {
      fn: n
    }),
    t.isArray(n) || (n = [
      n
    ]),
    t.reduce(n, function (e, i) {
      return t.each(t.without(t.keys(i), 'msg'), function (t) {
        e.push({
          fn: u[t],
          val: i[t],
          msg: i.msg
        })
      }),
      e
    }, [
    ])
  },
  a = function (e, i, o, r) {
    return t.reduce(s(e, i), function (s, a) {
      var l = t.extend({
      }, n, u),
      c = a.fn.call(l, o, i, a.val, e, r);
      return c === !1 || s === !1 ? !1 : c && !s ? t.result(a, 'msg') || c : s
    }, '')
  },
  l = function (e, i) {
    var n,
    s = {
    },
    r = !0,
    l = t.clone(i),
    c = o(i);
    return t.each(c, function (t, i) {
      n = a(e, i, t, l),
      n && (s[i] = n, r = !1)
    }),
    {
      invalidAttrs: s,
      isValid: r
    }
  },
  c = function (i, n) {
    return {
      preValidate: function (e, i) {
        var n,
        o = this,
        s = {
        };
        return t.isObject(e) ? (t.each(e, function (e, t) {
          n = o.preValidate(t, e),
          n && (s[t] = n)
        }), t.isEmpty(s) ? void 0 : s)  : a(this, e, i, t.extend({
        }, this.attributes))
      },
      isValid: function (e) {
        var i = o(this.attributes);
        return t.isString(e) ? !a(this, e, i[e], t.extend({
        }, this.attributes))  : t.isArray(e) ? t.reduce(e, function (e, n) {
          return e && !a(this, n, i[n], t.extend({
          }, this.attributes))
        }, !0, this)  : (e === !0 && this.validate(), this.validation ? this._isValid : !0)
      },
      validate: function (s, r) {
        var a = this,
        c = !s,
        u = t.extend({
        }, n, r),
        d = e(a),
        h = t.extend({
        }, d, a.attributes, s),
        p = o(s || h),
        f = l(a, h);
        return a._isValid = f.isValid,
        t.each(d, function (e, t) {
          var n = f.invalidAttrs.hasOwnProperty(t);
          n || u.valid(i, t, u.selector)
        }),
        t.each(d, function (e, t) {
          var n = f.invalidAttrs.hasOwnProperty(t),
          o = p.hasOwnProperty(t);
          n && (o || c) && u.invalid(i, t, f.invalidAttrs[t], u.selector)
        }),
        t.defer(function () {
          a.trigger('validated', a._isValid, a, f.invalidAttrs),
          a.trigger('validated:' + (a._isValid ? 'valid' : 'invalid'), a, f.invalidAttrs)
        }),
        !u.forceUpdate && t.intersection(t.keys(f.invalidAttrs), t.keys(p)).length > 0 ? f.invalidAttrs : void 0
      }
    }
  },
  d = function (e, i, n) {
    t.extend(i, c(e, n))
  },
  h = function (e) {
    delete e.validate,
    delete e.preValidate,
    delete e.isValid
  },
  p = function (e) {
    d(this.view, e, this.options)
  },
  f = function (e) {
    h(e)
  };
  return {
    version: '0.9.1',
    configure: function (e) {
      t.extend(i, e)
    },
    bind: function (e, n) {
      n = t.extend({
      }, i, r, n);
      var o = n.model || e.model,
      s = n.collection || e.collection;
      if ('undefined' == typeof o && 'undefined' == typeof s) throw 'Before you execute the binding your view must have a model or a collection.\nSee http://thedersen.com/projects/backbone-validation/#using-form-model-validation for more information.';
      o ? d(e, o, n)  : s && (s.each(function (t) {
        d(e, t, n)
      }), s.bind('add', p, {
        view: e,
        options: n
      }), s.bind('remove', f))
    },
    unbind: function (e, i) {
      i = t.extend({
      }, i);
      var n = i.model || e.model,
      o = i.collection || e.collection;
      n ? h(n)  : o && (o.each(function (e) {
        h(e)
      }), o.unbind('add', p), o.unbind('remove', f))
    },
    mixin: c(null, i)
  }
}(),
r = s.callbacks = {
  valid: function (e, t, i) {
    e.$('[' + i + '~="' + t + '"]').removeClass('invalid').removeAttr('data-error')
  },
  invalid: function (e, t, i, n) {
    e.$('[' + n + '~="' + t + '"]').addClass('invalid').attr('data-error', i)
  }
},
a = s.patterns = {
  digits: /^\d+$/,
  number: /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,
  email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
  url: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/i,
  domain: /^(?:[a-zA-Z0-9]+(?:\-*[a-zA-Z0-9])*\.)+[a-zA-Z]{2,6}$/
},
l = s.messages = {
  required: '{0} is required',
  acceptance: '{0} must be accepted',
  min: '{0} must be greater than or equal to {1}',
  max: '{0} must be less than or equal to {1}',
  range: '{0} must be between {1} and {2}',
  length: '{0} must be {1} characters',
  minLength: '{0} must be at least {1} characters',
  maxLength: '{0} must be at most {1} characters',
  rangeLength: '{0} must be between {1} and {2} characters',
  oneOf: '{0} must be one of: {1}',
  equalTo: '{0} must be the same as {1}',
  digits: '{0} must only contain digits',
  number: '{0} must be a number',
  'int': '{0} must be a whole number',
  email: '{0} must be a valid email',
  url: '{0} must be a valid url',
  domain: '{0} must be a valid domain',
  inlinePattern: '{0} is invalid'
},
c = s.labelFormatters = {
  none: function (e) {
    return e
  },
  sentenceCase: function (e) {
    return e.replace(/(?:^\w|[A-Z]|\b\w)/g, function (e, t) {
      return 0 === t ? e.toUpperCase()  : ' ' + e.toLowerCase()
    }).replace(/_/g, ' ')
  },
  label: function (e, t) {
    return t.labels && t.labels[e] || c.sentenceCase(e, t)
  }
},
u = s.validators = function () {
  var e = String.prototype.trim ? function (e) {
    return null === e ? '' : String.prototype.trim.call(e)
  }
   : function (e) {
    var t = /^\s+/,
    i = /\s+$/;
    return null === e ? '' : e.toString().replace(t, '').replace(i, '')
  },
  i = function (e) {
    return t.isNumber(e) || t.isString(e) && e.match(a.number)
  },
  n = function (i) {
    return !(t.isNull(i) || t.isUndefined(i) || t.isString(i) && '' === e(i) || t.isArray(i) && t.isEmpty(i))
  };
  return {
    fn: function (e, i, n, o, s) {
      return t.isString(n) && (n = o[n]),
      n.call(o, e, i, s)
    },
    required: function (e, i, o, s, r) {
      var a = t.isFunction(o) ? o.call(s, e, i, r)  : o;
      return a || n(e) ? a && !n(e) ? this.format(l.required, this.formatLabel(i, s))  : void 0 : !1
    },
    acceptance: function (e, i, n, o) {
      return 'true' === e || t.isBoolean(e) && e !== !1 ? void 0 : this.format(l.acceptance, this.formatLabel(i, o))
    },
    min: function (e, t, n, o) {
      return !i(e) || n > e ? this.format(l.min, this.formatLabel(t, o), n)  : void 0
    },
    max: function (e, t, n, o) {
      return !i(e) || e > n ? this.format(l.max, this.formatLabel(t, o), n)  : void 0
    },
    range: function (e, t, n, o) {
      return !i(e) || e < n[0] || e > n[1] ? this.format(l.range, this.formatLabel(t, o), n[0], n[1])  : void 0
    },
    length: function (e, i, n, o) {
      return t.isString(e) && e.length === n ? void 0 : this.format(l.length, this.formatLabel(i, o), n)
    },
    minLength: function (e, i, n, o) {
      return !t.isString(e) || e.length < n ? this.format(l.minLength, this.formatLabel(i, o), n)  : void 0
    },
    maxLength: function (e, i, n, o) {
      return !t.isString(e) || e.length > n ? this.format(l.maxLength, this.formatLabel(i, o), n)  : void 0
    },
    rangeLength: function (e, i, n, o) {
      return !t.isString(e) || e.length < n[0] || e.length > n[1] ? this.format(l.rangeLength, this.formatLabel(i, o), n[0], n[1])  : void 0
    },
    oneOf: function (e, i, n, o) {
      return t.include(n, e) ? void 0 : this.format(l.oneOf, this.formatLabel(i, o), n.join(', '))
    },
    equalTo: function (e, t, i, n, o) {
      return e !== o[i] ? this.format(l.equalTo, this.formatLabel(t, n), this.formatLabel(i, n))  : void 0
    },
    pattern: function (e, t, i, o) {
      return n(e) && e.toString().match(a[i] || i) ? void 0 : this.format(l[i] || l.inlinePattern, this.formatLabel(t, o), i)
    },
    url: function (e, t, i, n) {
      return a.url.test(e) ? void 0 : this.format(l.url, this.formatLabel(t, n))
    },
    domain: function (e, t, i, n) {
      return a.domain.test(e) ? void 0 : this.format(l.domain, this.formatLabel(t, n))
    },
    email: function (e, t, i, n) {
      return a.email.test(e) ? void 0 : this.format(l.email, this.formatLabel(t, n))
    },
    number: function (e, t, i, n) {
      return isNaN(parseFloat(e)) || !isFinite(e) ? this.format(l.number, this.formatLabel(t, n))  : void 0
    },
    'int': function (e, t, i, n) {
      return 0 !== e % 1 ? this.format(l.int, this.formatLabel(t, n))  : void 0
    }
  }
}();
return t.each(u, function (e, i) {
  u[i] = t.bind(u[i], t.extend({
  }, n, u))
}),
s
}(t),
e.Validation
}), function (e, t) {
'function' == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define('backbone-relational', [
'exports',
'backbone',
'underscore'
], t)  : 'undefined' != typeof exports ? t(exports, require('backbone'), require('underscore'))  : t(e, e.Backbone, e._)
}(this, function (e, t, i) {
t.Relational = {
showWarnings: !0
},
t.Semaphore = {
_class: 'Backbone.Semaphore',
_permitsAvailable: null,
_permitsUsed: 0,
acquire: function () {
  if (this._permitsAvailable && this._permitsUsed >= this._permitsAvailable) throw new Error('Max permits acquired');
  this._permitsUsed++
},
release: function () {
  if (0 === this._permitsUsed) throw new Error('All permits released');
  this._permitsUsed--
},
isLocked: function () {
  return this._permitsUsed > 0
},
setAvailablePermits: function (e) {
  if (this._permitsUsed > e) throw new Error('Available permits cannot be less than used permits');
  this._permitsAvailable = e
}
},
t.BlockingQueue = function () {
this._queue = [
]
},
i.extend(t.BlockingQueue.prototype, t.Semaphore, {
_class: 'Backbone.BlockingQueue',
_queue: null,
add: function (e) {
  this.isBlocked() ? this._queue.push(e)  : e()
},
process: function () {
  var e = this._queue;
  for (this._queue = [
  ]; e && e.length; ) e.shift() ()
},
block: function () {
  this.acquire()
},
unblock: function () {
  this.release(),
  this.isBlocked() || this.process()
},
isBlocked: function () {
  return this.isLocked()
}
}),
t.Relational.eventQueue = new t.BlockingQueue,
t.Store = function () {
this._collections = [
],
this._reverseRelations = [
],
this._orphanRelations = [
],
this._subModels = [
],
this._modelScopes = [
  e
]
},
i.extend(t.Store.prototype, t.Events, {
_class: 'Backbone.Store',
initializeRelation: function (e, n, o) {
  var s = i.isString(n.type) ? t[n.type] || this.getObjectByName(n.type)  : n.type;
  s && s.prototype instanceof t.Relation ? new s(e, n, o)  : t.Relational.showWarnings && 'undefined' != typeof console && console.warn('Relation=%o; missing or invalid relation type!', n)
},
addModelScope: function (e) {
  this._modelScopes.push(e)
},
removeModelScope: function (e) {
  this._modelScopes = i.without(this._modelScopes, e)
},
addSubModels: function (e, t) {
  this._subModels.push({
    superModelType: t,
    subModels: e
  })
},
setupSuperModel: function (e) {
  i.find(this._subModels, function (t) {
    return i.each(t.subModels || [], function (i, n) {
      var o = this.getObjectByName(i);
      return e === o ? (t.superModelType._subModels[n] = e, e._superModel = t.superModelType, e._subModelTypeValue = n, e._subModelTypeAttribute = t.superModelType.prototype.subModelTypeAttribute, !0)  : void 0
    }, this)
  }, this)
},
addReverseRelation: function (e) {
  var t = i.any(this._reverseRelations, function (t) {
    return i.all(e || [], function (e, i) {
      return e === t[i]
    })
  });
  !t && e.model && e.type && (this._reverseRelations.push(e), this._addRelation(e.model, e), this.retroFitRelation(e))
},
addOrphanRelation: function (e) {
  var t = i.any(this._orphanRelations, function (t) {
    return i.all(e || [], function (e, i) {
      return e === t[i]
    })
  });
  !t && e.model && e.type && this._orphanRelations.push(e)
},
processOrphanRelations: function () {
  i.each(this._orphanRelations.slice(0), function (e) {
    var n = t.Relational.store.getObjectByName(e.relatedModel);
    n && (this.initializeRelation(null, e), this._orphanRelations = i.without(this._orphanRelations, e))
  }, this)
},
_addRelation: function (e, t) {
  e.prototype.relations || (e.prototype.relations = [
  ]),
  e.prototype.relations.push(t),
  i.each(e._subModels || [], function (e) {
    this._addRelation(e, t)
  }, this)
},
retroFitRelation: function (e) {
  var t = this.getCollection(e.model, !1);
  t && t.each(function (t) {
    t instanceof e.model && new e.type(t, e)
  }, this)
},
getCollection: function (e, n) {
  e instanceof t.RelationalModel && (e = e.constructor);
  for (var o = e; o._superModel; ) o = o._superModel;
  var s = i.find(this._collections, function (e) {
    return e.model === o
  });
  return s || n === !1 || (s = this._createCollection(o)),
  s
},
getObjectByName: function (e) {
  var t = e.split('.'),
  n = null;
  return i.find(this._modelScopes, function (e) {
    return n = i.reduce(t || [], function (e, t) {
      return e ? e[t] : void 0
    }, e),
    n && n !== e ? !0 : void 0
  }, this),
  n
},
_createCollection: function (e) {
  var i;
  return e instanceof t.RelationalModel && (e = e.constructor),
  e.prototype instanceof t.RelationalModel && (i = new t.Collection, i.model = e, this._collections.push(i)),
  i
},
resolveIdForItem: function (e, n) {
  var o = i.isString(n) || i.isNumber(n) ? n : null;
  return null === o && (n instanceof t.RelationalModel ? o = n.id : i.isObject(n) && (o = e.prototype._getNewId(n))),
  o || 0 === o || (o = null),
  o
},
find: function (e, t) {
  var i = this.resolveIdForItem(e, t),
  n = this.getCollection(e);
  if (n) {
    var o = n.get(i);
    if (o instanceof e) return o
  }
  return null
},
register: function (e) {
  var t = this.getCollection(e);
  if (t) {
    var i = e.collection;
    t.add(e),
    e.collection = i
  }
},
checkId: function (e, i) {
  var n = this.getCollection(e),
  o = n && n.get(i);
  if (o && e !== o) throw t.Relational.showWarnings && 'undefined' != typeof console && console.warn('Duplicate id! Old RelationalModel=%o, new RelationalModel=%o', o, e),
  new Error('Cannot instantiate more than one Backbone.RelationalModel with the same id per type!')
},
update: function (e) {
  var t = this.getCollection(e);
  t.contains(e) || this.register(e),
  t._onModelEvent('change:' + e.idAttribute, e, t),
  e.trigger('relational:change:id', e, t)
},
unregister: function (e) {
  var n,
  o;
  e instanceof t.Model ? (n = this.getCollection(e), o = [
    e
  ])  : e instanceof t.Collection ? (n = this.getCollection(e.model), o = i.clone(e.models))  : (n = this.getCollection(e), o = i.clone(n.models)),
  i.each(o, function (e) {
    this.stopListening(e),
    i.invoke(e.getRelations(), 'stopListening')
  }, this),
  i.contains(this._collections, e) ? n.reset([])  : i.each(o, function (e) {
    n.get(e) ? n.remove(e)  : n.trigger('relational:remove', e, n)
  }, this)
},
reset: function () {
  this.stopListening(),
  i.each(this._collections, function (e) {
    this.unregister(e)
  }, this),
  this._collections = [
  ],
  this._subModels = [
  ],
  this._modelScopes = [
    e
  ]
}
}),
t.Relational.store = new t.Store,
t.Relation = function (e, n, o) {
if (this.instance = e, n = i.isObject(n) ? n : {
}, this.reverseRelation = i.defaults(n.reverseRelation || {
}, this.options.reverseRelation), this.options = i.defaults(n, this.options, t.Relation.prototype.options), this.reverseRelation.type = i.isString(this.reverseRelation.type) ? t[this.reverseRelation.type] || t.Relational.store.getObjectByName(this.reverseRelation.type)  : this.reverseRelation.type, this.key = this.options.key, this.keySource = this.options.keySource || this.key, this.keyDestination = this.options.keyDestination || this.keySource || this.key, this.model = this.options.model || this.instance.constructor, this.relatedModel = this.options.relatedModel, !i.isFunction(this.relatedModel) || this.relatedModel.prototype instanceof t.RelationalModel || (this.relatedModel = i.result(this, 'relatedModel')), i.isString(this.relatedModel) && (this.relatedModel = t.Relational.store.getObjectByName(this.relatedModel)), this.checkPreconditions() && (!this.options.isAutoRelation && this.reverseRelation.type && this.reverseRelation.key && t.Relational.store.addReverseRelation(i.defaults({
  isAutoRelation: !0,
  model: this.relatedModel,
  relatedModel: this.model,
  reverseRelation: this.options
}, this.reverseRelation)), e)) {
  var s = this.keySource;
  s !== this.key && 'object' == typeof this.instance.get(this.key) && (s = this.key),
  this.setKeyContents(this.instance.get(s)),
  this.relatedCollection = t.Relational.store.getCollection(this.relatedModel),
  this.keySource !== this.key && delete this.instance.attributes[this.keySource],
  this.instance._relations[this.key] = this,
  this.initialize(o),
  this.options.autoFetch && this.instance.fetchRelated(this.key, i.isObject(this.options.autoFetch) ? this.options.autoFetch : {
  }),
  this.listenTo(this.instance, 'destroy', this.destroy).listenTo(this.relatedCollection, 'relational:add relational:change:id', this.tryAddRelated).listenTo(this.relatedCollection, 'relational:remove', this.removeRelated)
}
},
t.Relation.extend = t.Model.extend,
i.extend(t.Relation.prototype, t.Events, t.Semaphore, {
_class: 'Backbone.Relation',
options: {
  createModels: !0,
  includeInJSON: !0,
  isAutoRelation: !1,
  autoFetch: !1,
  parse: !1
},
instance: null,
key: null,
keyContents: null,
relatedModel: null,
relatedCollection: null,
reverseRelation: null,
related: null,
checkPreconditions: function () {
  var e = this.instance,
  n = this.key,
  o = this.model,
  s = this.relatedModel,
  r = t.Relational.showWarnings && 'undefined' != typeof console;
  if (!o || !n || !s) return r && console.warn('Relation=%o: missing model, key or relatedModel (%o, %o, %o).', this, o, n, s),
  !1;
  if (!(o.prototype instanceof t.RelationalModel)) return r && console.warn('Relation=%o: model does not inherit from Backbone.RelationalModel (%o).', this, e),
  !1;
  if (!(s.prototype instanceof t.RelationalModel)) return r && console.warn('Relation=%o: relatedModel does not inherit from Backbone.RelationalModel (%o).', this, s),
  !1;
  if (this instanceof t.HasMany && this.reverseRelation.type === t.HasMany) return r && console.warn('Relation=%o: relation is a HasMany, and the reverseRelation is HasMany as well.', this),
  !1;
  if (e && i.keys(e._relations).length) {
    var a = i.find(e._relations, function (e) {
      return e.key === n
    }, this);
    if (a) return r && console.warn('Cannot create relation=%o on %o for model=%o: already taken by relation=%o.', this, n, e, a),
    !1
  }
  return !0
},
setRelated: function (e) {
  this.related = e,
  this.instance.attributes[this.key] = e
},
_isReverseRelation: function (e) {
  return e.instance instanceof this.relatedModel && this.reverseRelation.key === e.key && this.key === e.reverseRelation.key
},
getReverseRelations: function (e) {
  var t = [
  ],
  n = i.isUndefined(e) ? this.related && (this.related.models || [this.related])  : [
    e
  ];
  return i.each(n || [], function (e) {
    i.each(e.getRelations() || [], function (e) {
      this._isReverseRelation(e) && t.push(e)
    }, this)
  }, this),
  t
},
destroy: function () {
  this.stopListening(),
  this instanceof t.HasOne ? this.setRelated(null)  : this instanceof t.HasMany && this.setRelated(this._prepareCollection()),
  i.each(this.getReverseRelations(), function (e) {
    e.removeRelated(this.instance)
  }, this)
}
}),
t.HasOne = t.Relation.extend({
_class: 'Backbone.HasOne',
options: {
  reverseRelation: {
    type: 'HasMany'
  }
},
initialize: function (e) {
  this.listenTo(this.instance, 'relational:change:' + this.key, this.onChange);
  var t = this.findRelated(e);
  this.setRelated(t),
  i.each(this.getReverseRelations(), function (t) {
    t.addRelated(this.instance, e)
  }, this)
},
findRelated: function (e) {
  var t = null;
  if (e = i.defaults({
    parse: this.options.parse
  }, e), this.keyContents instanceof this.relatedModel) t = this.keyContents;
   else if (this.keyContents || 0 === this.keyContents) {
    var n = i.defaults({
      create: this.options.createModels
    }, e);
    t = this.relatedModel.findOrCreate(this.keyContents, n)
  }
  return t && (this.keyId = null),
  t
},
setKeyContents: function (e) {
  this.keyContents = e,
  this.keyId = t.Relational.store.resolveIdForItem(this.relatedModel, this.keyContents)
},
onChange: function (e, n, o) {
  if (!this.isLocked()) {
    this.acquire(),
    o = o ? i.clone(o)  : {
    };
    var s = i.isUndefined(o.__related),
    r = s ? this.related : o.__related;
    if (s) {
      this.setKeyContents(n);
      var a = this.findRelated(o);
      this.setRelated(a)
    }
    if (r && this.related !== r && i.each(this.getReverseRelations(r), function (e) {
      e.removeRelated(this.instance, null, o)
    }, this), i.each(this.getReverseRelations(), function (e) {
      e.addRelated(this.instance, o)
    }, this), !o.silent && this.related !== r) {
      var l = this;
      this.changed = !0,
      t.Relational.eventQueue.add(function () {
        l.instance.trigger('change:' + l.key, l.instance, l.related, o, !0),
        l.changed = !1
      })
    }
    this.release()
  }
},
tryAddRelated: function (e, t, i) {
  !this.keyId && 0 !== this.keyId || e.id !== this.keyId || (this.addRelated(e, i), this.keyId = null)
},
addRelated: function (e, t) {
  var n = this;
  e.queue(function () {
    if (e !== n.related) {
      var o = n.related || null;
      n.setRelated(e),
      n.onChange(n.instance, e, i.defaults({
        __related: o
      }, t))
    }
  })
},
removeRelated: function (e, t, n) {
  if (this.related && e === this.related) {
    var o = this.related || null;
    this.setRelated(null),
    this.onChange(this.instance, e, i.defaults({
      __related: o
    }, n))
  }
}
}),
t.HasMany = t.Relation.extend({
_class: 'Backbone.HasMany',
collectionType: null,
options: {
  reverseRelation: {
    type: 'HasOne'
  },
  collectionType: t.Collection,
  collectionKey: !0,
  collectionOptions: {
  }
},
initialize: function (e) {
  if (this.listenTo(this.instance, 'relational:change:' + this.key, this.onChange), this.collectionType = this.options.collectionType, !i.isFunction(this.collectionType) || this.collectionType === t.Collection || this.collectionType.prototype instanceof t.Collection || (this.collectionType = i.result(this, 'collectionType')), i.isString(this.collectionType)) {
    var n = this.collectionType;
    this.collectionType = t.Relational.store.getObjectByName(this.collectionType)
  }
  if (this.collectionType || (n && t.Relational.showWarnings && 'undefined' != typeof console && console.warn('`collectionType` of ' + n + ' not found, using Backbone.Collection in its place.'), this.collectionType = t.Collection), this.collectionType !== t.Collection && !(this.collectionType.prototype instanceof t.Collection)) throw new Error('`collectionType` must inherit from Backbone.Collection');
  var o = this.findRelated(e);
  this.setRelated(o)
},
_prepareCollection: function (e) {
  if (this.related && this.stopListening(this.related), !(e && e instanceof t.Collection)) {
    var n = i.isFunction(this.options.collectionOptions) ? this.options.collectionOptions(this.instance)  : this.options.collectionOptions;
    e = new this.collectionType(null, n)
  }
  if (e.model = this.relatedModel, this.options.collectionKey) {
    var o = this.options.collectionKey === !0 ? this.options.reverseRelation.key : this.options.collectionKey;
    e[o] && e[o] !== this.instance ? t.Relational.showWarnings && 'undefined' != typeof console && console.warn('Relation=%o; collectionKey=%s already exists on collection=%o', this, o, this.options.collectionKey)  : o && (e[o] = this.instance)
  }
  return this.listenTo(e, 'relational:add', this.handleAddition).listenTo(e, 'relational:remove', this.handleRemoval).listenTo(e, 'relational:reset', this.handleReset),
  e
},
findRelated: function (e) {
  var n = null;
  if (e = i.defaults({
    parse: this.options.parse
  }, e), this.keyContents instanceof t.Collection) this._prepareCollection(this.keyContents),
  n = this.keyContents;
   else {
    var o = [
    ];
    i.each(this.keyContents, function (t) {
      if (t instanceof this.relatedModel) var n = t;
       else n = this.relatedModel.findOrCreate(t, i.extend({
        merge: !0
      }, e, {
        create: this.options.createModels
      }));
      n && o.push(n)
    }, this),
    n = this.related instanceof t.Collection ? this.related : this._prepareCollection(),
    n.set(o, i.defaults({
      merge: !1,
      parse: !1
    }, e))
  }
  return this.keyIds = i.difference(this.keyIds, i.pluck(n.models, 'id')),
  n
},
setKeyContents: function (e) {
  this.keyContents = e instanceof t.Collection ? e : null,
  this.keyIds = [
  ],
  this.keyContents || !e && 0 !== e || (this.keyContents = i.isArray(e) ? e : [
    e
  ], i.each(this.keyContents, function (e) {
    var i = t.Relational.store.resolveIdForItem(this.relatedModel, e);
    (i || 0 === i) && this.keyIds.push(i)
  }, this))
},
onChange: function (e, n, o) {
  o = o ? i.clone(o)  : {
  },
  this.setKeyContents(n),
  this.changed = !1;
  var s = this.findRelated(o);
  if (this.setRelated(s), !o.silent) {
    var r = this;
    t.Relational.eventQueue.add(function () {
      r.changed && (r.instance.trigger('change:' + r.key, r.instance, r.related, o, !0), r.changed = !1)
    })
  }
},
handleAddition: function (e, n, o) {
  o = o ? i.clone(o)  : {
  },
  this.changed = !0,
  i.each(this.getReverseRelations(e), function (e) {
    e.addRelated(this.instance, o)
  }, this);
  var s = this;
  !o.silent && t.Relational.eventQueue.add(function () {
    s.instance.trigger('add:' + s.key, e, s.related, o)
  })
},
handleRemoval: function (e, n, o) {
  o = o ? i.clone(o)  : {
  },
  this.changed = !0,
  i.each(this.getReverseRelations(e), function (e) {
    e.removeRelated(this.instance, null, o)
  }, this);
  var s = this;
  !o.silent && t.Relational.eventQueue.add(function () {
    s.instance.trigger('remove:' + s.key, e, s.related, o)
  })
},
handleReset: function (e, n) {
  var o = this;
  n = n ? i.clone(n)  : {
  },
  !n.silent && t.Relational.eventQueue.add(function () {
    o.instance.trigger('reset:' + o.key, o.related, n)
  })
},
tryAddRelated: function (e, t, n) {
  var o = i.contains(this.keyIds, e.id);
  o && (this.addRelated(e, n), this.keyIds = i.without(this.keyIds, e.id))
},
addRelated: function (e, t) {
  var n = this;
  e.queue(function () {
    n.related && !n.related.get(e) && n.related.add(e, i.defaults({
      parse: !1
    }, t))
  })
},
removeRelated: function (e, t, i) {
  this.related.get(e) && this.related.remove(e, i)
}
}),
t.RelationalModel = t.Model.extend({
_class: 'Backbone.RelationalModel',
relations: null,
_relations: null,
_isInitialized: !1,
_deferProcessing: !1,
_queue: null,
_attributeChangeFired: !1,
subModelTypeAttribute: 'type',
subModelTypes: null,
keydefs: {
},
compoundKeyDelim: '-',
constructor: function (e, n) {
  if (n && n.collection) {
    var o = this,
    s = this.collection = n.collection;
    delete n.collection,
    this._deferProcessing = !0;
    var r = function (e) {
      e === o && (o._deferProcessing = !1, o.processQueue(), s.off('relational:add', r))
    };
    s.on('relational:add', r),
    i.defer(function () {
      r(o)
    })
  }
  t.Relational.store.processOrphanRelations(),
  t.Relational.store.listenTo(this, 'relational:unregister', t.Relational.store.unregister),
  this._queue = new t.BlockingQueue,
  this._queue.block(),
  t.Relational.eventQueue.block();
  try {
    t.Model.apply(this, arguments)
  } finally {
    t.Relational.eventQueue.unblock()
  }
  this.createSavepoint(),
  this.on('sync', this.createSavepoint, this)
},
createSavepoint: function () {
  return this.savepoint = JSON.parse(JSON.stringify(this)),
  this
},
rollback: function (e) {
  e = e || {
  },
  this.set(this.savepoint),
  this.changed = [
  ],
  e.silent || this.trigger('rollback', this, e)
},
commit: function (e) {
  e = e || {
  };
  var n = this,
  o = n.isNew(),
  s = [
  ],
  r = [
  ];
  return (o || n.hasChangedDeepSinceSavepoint()) && (o || i.each(n.relations, function (t) {
    if (t.includeInJSON && (s.push(t), t.includeInJSON = !1, !t.isAutoRelation)) {
      var i = n.get(t.key);
      r.push(i.commit(e))
    }
  }), r.push(n.save(null, e)), i.each(s, function (e) {
    e.includeInJSON = !0
  }), e.silent || n.trigger('commit', n, e)),
  t.$.when.apply(t.$, r)
},
hasChangedDeepSinceSavepoint: function () {
  return !i.isEqual(this.toJSON(), this.savepoint)
},
trigger: function (e) {
  if (e.length > 5 && 0 === e.indexOf('change')) {
    var i = this,
    n = arguments;
    t.Relational.eventQueue.add(function () {
      if (i._isInitialized) {
        var o = !0;
        if ('change' === e) o = i.hasChanged() || i._attributeChangeFired,
        i._attributeChangeFired = !1;
         else {
          var s = e.slice(7),
          r = i.getRelation(s);
          r ? (o = n[4] === !0, o ? i.changed[s] = n[2] : r.changed || delete i.changed[s])  : o && (i._attributeChangeFired = !0)
        }
        o && t.Model.prototype.trigger.apply(i, n)
      }
    })
  } else 'destroy' === e ? (t.Model.prototype.trigger.apply(this, arguments), t.Relational.store.unregister(this))  : t.Model.prototype.trigger.apply(this, arguments);
  return this
},
initializeRelations: function (e) {
  this.acquire(),
  this._relations = {
  },
  i.each(this.relations || [], function (i) {
    t.Relational.store.initializeRelation(this, i, e)
  }, this),
  this._isInitialized = !0,
  this.release(),
  this.processQueue()
},
updateRelations: function (e, t) {
  this._isInitialized && !this.isLocked() && i.each(this._relations, function (i) {
    if (!e || i.keySource in e || i.key in e) {
      var n = this.attributes[i.keySource] || this.attributes[i.key],
      o = e && (e[i.keySource] || e[i.key]);
      (i.related !== n || null === n && null === o) && this.trigger('relational:change:' + i.key, this, n, t || {
      })
    }
    i.keySource !== i.key && delete this.attributes[i.keySource]
  }, this)
},
queue: function (e) {
  this._queue.add(e)
},
processQueue: function () {
  this._isInitialized && !this._deferProcessing && this._queue.isBlocked() && this._queue.unblock()
},
getRelation: function (e) {
  return this._relations[e]
},
getRelations: function () {
  return i.values(this._relations)
},
fetchRelated: function (e, n, o) {
  n = i.extend({
    update: !0,
    remove: !1
  }, n);
  var s,
  r,
  a = [
  ],
  l = this.getRelation(e),
  c = l && (l.keyIds && l.keyIds.slice(0) || (l.keyId || 0 === l.keyId ? [
    l.keyId
  ] : [
  ]));
  if (o && (s = l.related instanceof t.Collection ? l.related.models : [
    l.related
  ], i.each(s, function (e) {
    (e.id || 0 === e.id) && c.push(e.id)
  })), c && c.length) {
    var u = [
    ];
    if (s = i.map(c, function (e) {
      var t = l.relatedModel.findModel(e);
      if (!t) {
        var i = {
        };
        i[l.relatedModel.prototype.idAttribute] = e,
        t = l.relatedModel.findOrCreate(i, n),
        u.push(t)
      }
      return t
    }, this), l.related instanceof t.Collection && i.isFunction(l.related.url) && (r = l.related.url(s)), r && r !== l.related.url()) {
      var d = i.defaults({
        error: function () {
          var e = arguments;
          i.each(u, function (t) {
            t.trigger('destroy', t, t.collection, n),
            n.error && n.error.apply(t, e)
          })
        },
        url: r
      }, n);
      a = [
        l.related.fetch(d)
      ]
    } else a = i.map(s, function (e) {
      var t = i.defaults({
        error: function () {
          i.contains(u, e) && (e.trigger('destroy', e, e.collection, n), n.error && n.error.apply(e, arguments))
        }
      }, n);
      return e.fetch(t)
    }, this)
  }
  return a
},
get: function (e) {
  var n = t.Model.prototype.get.call(this, e);
  if (!this.dotNotation || - 1 === e.indexOf('.')) return n;
  var o = e.split('.'),
  s = i.reduce(o, function (e, n) {
    if (i.isNull(e) || i.isUndefined(e)) return void 0;
    if (e instanceof t.Model) return t.Model.prototype.get.call(e, n);
    if (e instanceof t.Collection) return t.Collection.prototype.at.call(e, n);
    throw new Error('Attribute must be an instanceof Backbone.Model or Backbone.Collection. Is: ' + e + ', currentSplit: ' + n)
  }, this);
  if (void 0 !== n && void 0 !== s) throw new Error('Ambiguous result for \'' + e + '\'. direct result: ' + n + ', dotNotation: ' + s);
  return n || s
},
_getNewId: function (e) {
  var t,
  i = this,
  n = null,
  o = '',
  s = !1,
  r = i.keydefs.PRIMARY;
  return r && (r.forEach(function (n) {
    t = e[n] || i.attributes && i.attributes[n],
    t || 0 === t ? o += (o ? i.compoundKeyDelim : '') + (e[n] || i.attributes && i.attributes[n])  : s = !0
  }), s || (n = o)),
  n || (n = e && i.idAttribute in e && e[i.idAttribute]),
  n
},
set: function (e, n, o) {
  t.Relational.eventQueue.block();
  var s;
  i.isObject(e) || null == e ? (s = e, o = n)  : (s = {
  }, s[e] = n);
  try {
    var r = this.id,
    a = this._getNewId(s);
    t.Relational.store.checkId(this, a);
    var l = t.Model.prototype.set.apply(this, arguments);
    a && (this.id = a),
    this._isInitialized || this.isLocked() ? a && a !== r && t.Relational.store.update(this)  : (this.constructor.initializeModelHierarchy(), (a || 0 === a) && t.Relational.store.register(this), this.initializeRelations(o)),
    s && this.updateRelations(s, o)
  } finally {
    t.Relational.eventQueue.unblock()
  }
  return l
},
clone: function () {
  var e = i.clone(this.attributes);
  return i.isUndefined(e[this.idAttribute]) || (e[this.idAttribute] = null),
  i.each(this.getRelations(), function (t) {
    delete e[t.key]
  }),
  new this.constructor(e)
},
toJSON: function (e) {
  if (this.isLocked()) return this.id;
  this.acquire();
  var n = t.Model.prototype.toJSON.call(this, e);
  return !this.constructor._superModel || this.constructor._subModelTypeAttribute in n || (n[this.constructor._subModelTypeAttribute] = this.constructor._subModelTypeValue),
  i.each(this._relations, function (o) {
    var s = n[o.key],
    r = o.options.includeInJSON,
    a = null;
    r === !0 ? s && i.isFunction(s.toJSON) && (a = s.toJSON(e))  : i.isString(r) ? (s instanceof t.Collection ? a = s.pluck(r)  : s instanceof t.Model && (a = s.get(r)), r === o.relatedModel.prototype.idAttribute && (o instanceof t.HasMany ? a = a.concat(o.keyIds)  : o instanceof t.HasOne && (a = a || o.keyId, a || i.isObject(o.keyContents) || (a = o.keyContents || null))))  : i.isArray(r) ? s instanceof t.Collection ? (a = [
    ], s.each(function (e) {
      var t = {
      };
      i.each(r, function (i) {
        t[i] = e.get(i)
      }),
      a.push(t)
    }))  : s instanceof t.Model && (a = {
    }, i.each(r, function (e) {
      a[e] = s.get(e)
    }))  : delete n[o.key],
    r && (n[o.keyDestination] = a),
    o.keyDestination !== o.key && delete n[o.key]
  }),
  this.release(),
  n
}
}, {
setup: function () {
  return this.prototype.relations = (this.prototype.relations || []).slice(0),
  this._subModels = {
  },
  this._superModel = null,
  this.prototype.hasOwnProperty('subModelTypes') ? t.Relational.store.addSubModels(this.prototype.subModelTypes, this)  : this.prototype.subModelTypes = null,
  i.each(this.prototype.relations || [], function (e) {
    if (e.model || (e.model = this), e.reverseRelation && e.model === this) {
      var n = !0;
      if (i.isString(e.relatedModel)) {
        var o = t.Relational.store.getObjectByName(e.relatedModel);
        n = o && o.prototype instanceof t.RelationalModel
      }
      n ? t.Relational.store.initializeRelation(null, e)  : i.isString(e.relatedModel) && t.Relational.store.addOrphanRelation(e)
    }
  }, this),
  this
},
build: function (e, t) {
  this.initializeModelHierarchy();
  var i = this._findSubModelType(this, e) || this;
  return new i(e, t)
},
_findSubModelType: function (e, t) {
  if (e._subModels && e.prototype.subModelTypeAttribute in t) {
    var i = t[e.prototype.subModelTypeAttribute],
    n = e._subModels[i];
    if (n) return n;
    for (i in e._subModels) if (n = this._findSubModelType(e._subModels[i], t)) return n
  }
  return null
},
initializeModelHierarchy: function () {
  if (this.inheritRelations(), this.prototype.subModelTypes) {
    var e = i.keys(this._subModels),
    n = i.omit(this.prototype.subModelTypes, e);
    i.each(n, function (e) {
      var i = t.Relational.store.getObjectByName(e);
      i && i.initializeModelHierarchy()
    })
  }
},
inheritRelations: function () {
  if (i.isUndefined(this._superModel) || i.isNull(this._superModel)) if (t.Relational.store.setupSuperModel(this), this._superModel) {
    if (this._superModel.inheritRelations(), this._superModel.prototype.relations) {
      var e = i.filter(this._superModel.prototype.relations || [], function (e) {
        return !i.any(this.prototype.relations || [], function (t) {
          return e.relatedModel === t.relatedModel && e.key === t.key
        }, this)
      }, this);
      this.prototype.relations = e.concat(this.prototype.relations)
    }
  } else this._superModel = !1
},
findOrCreate: function (e, t) {
  t || (t = {
  });
  var n = i.isObject(e) && t.parse && this.prototype.parse ? this.prototype.parse(i.clone(e))  : e,
  o = this.findModel(n);
  return i.isObject(e) && (o && t.merge !== !1 ? (delete t.collection, delete t.url, o.set(n, t))  : o || t.create === !1 || (o = this.build(e, t))),
  o
},
find: function (e, t) {
  return t || (t = {
  }),
  t.create = !1,
  this.findOrCreate(e, t)
},
findModel: function (e) {
  return t.Relational.store.find(this, e)
}
}),
i.extend(t.RelationalModel.prototype, t.Semaphore);
var n = t.Collection.prototype.__initialize = t.Collection.prototype.initialize;
t.Collection.prototype.initialize = function () {
n.apply(this, arguments),
this.createSavepoint(),
this.on('sync', this.createSavepoint, this)
},
t.Collection.prototype.createSavepoint = function () {
return this._added = [
],
this._removed = [
],
this
},
t.Collection.prototype.rollback = function (e) {
return e = e || {
},
this.add(this._removed, {
  silent: !0
}),
i.each(this.models, function (e) {
  e.rollback()
}),
this.remove(this._added, {
  silent: !0
}),
this.createSavepoint(),
e.silent || this.trigger('rollback', this, e),
this
},
t.Collection.prototype.hasChangedDeepSinceSavepoint = function () {
return this._removed.length || this._added.length ? !0 : !!i.find(this.models, function (e) {
  return e.hasChangedDeepSinceSavepoint()
})
},
t.Collection.prototype.commit = function (e) {
var n = [
];
return this.hasChangedDeepSinceSavepoint() && (e = e || {
}, i.each(this._removed, function (e) {
  n.push(e.destroy())
}), i.each(this.models, function (e) {
  n.push(e.commit())
}), this.createSavepoint(), e.silent || this.trigger('commit', this, e)),
t.$.when.apply(t.$, n)
},
t.Collection.prototype._class = 'Backbone.Collection',
t.Collection.prototype.__prepareModel = t.Collection.prototype._prepareModel,
t.Collection.prototype._prepareModel = function (e, n) {
var o;
return e instanceof t.Model ? (e.collection || (e.collection = this), o = e)  : (n = n ? i.clone(n)  : {
}, n.collection = this, o = 'undefined' != typeof this.model.findOrCreate ? this.model.findOrCreate(e, n)  : new this.model(e, n), o && o.validationError && (this.trigger('invalid', this, e, n), o = !1)),
o
};
var o = t.Collection.prototype.__set = t.Collection.prototype.set;
t.Collection.prototype.set = function (e, n) {
if (!(this.model.prototype instanceof t.RelationalModel)) return o.apply(this, arguments);
n && n.parse && (e = this.parse(e, n));
var s = !i.isArray(e),
r = [
],
a = [
];
e = s ? e ? [
  e
] : [
] : i.clone(e),
i.each(e, function (e) {
  e instanceof t.Model || (e = t.Collection.prototype._prepareModel.call(this, e, n)),
  e && (a.push(e), this.get(e) || this.get(e.cid) ? null != e.id && (this._byId[e.id] = e)  : r.push(e))
}, this),
a = s ? a.length ? a[0] : null : a;
var l = o.call(this, a, i.defaults({
  parse: !1
}, n));
return i.each(r, function (e) {
  (this.get(e) || this.get(e.cid)) && this.trigger('relational:add', e, this, n)
}, this),
l
};
var s = t.Collection.prototype.__get = t.Collection.prototype.get;
t.Collection.prototype.get = function (e) {
if (!(this.model.prototype instanceof t.RelationalModel)) return s.apply(this, arguments);
if (null == e) return void 0;
var i = t.Relational.store.resolveIdForItem(this.model, e);
return this._byId[null != i ? i : e.cid || e]
};
var r = t.Collection.prototype.__add = t.Collection.prototype.add;
t.Collection.prototype.add = function (e, n) {
if (!(this.model.prototype instanceof t.RelationalModel)) return r.apply(this, arguments);
var o = r.call(this, e, i.defaults(n || {
}, {
  add: !0,
  merge: !1,
  remove: !1
}));
return this._added = this._added.concat(o),
o
};
var a = t.Collection.prototype.__remove = t.Collection.prototype.remove;
t.Collection.prototype.remove = function (e, n) {
if (!(this.model.prototype instanceof t.RelationalModel)) return this._removed = this._removed.concat(e),
a.apply(this, arguments);
var o = !i.isArray(e),
s = [
];
e = o ? e ? [
  e
] : [
] : i.clone(e),
n || (n = {
}),
i.each(e, function (e) {
  e = this.get(e) || e && this.get(e.cid),
  e && s.push(e)
}, this);
var r = a.call(this, o ? s.length ? s[0] : null : s, n);
return i.each(s, function (e) {
  this.trigger('relational:remove', e, this, n)
}, this),
this._removed = this._removed.concat(s),
r
};
var l = t.Collection.prototype.__reset = t.Collection.prototype.reset;
t.Collection.prototype.reset = function (e, n) {
n = i.extend({
  merge: !0
}, n);
var o = l.call(this, e, n);
return this._added = [
],
this._removed = [
],
this.model.prototype instanceof t.RelationalModel && this.trigger('relational:reset', this, n),
this.createSavepoint(),
o
};
var c = t.Collection.prototype.__sort = t.Collection.prototype.sort;
t.Collection.prototype.sort = function (e) {
var i = c.call(this, e);
return this.model.prototype instanceof t.RelationalModel && this.trigger('relational:reset', this, e),
i
};
var u = t.Collection.prototype.__trigger = t.Collection.prototype.trigger;
t.Collection.prototype.trigger = function (e) {
if (!(this.model.prototype instanceof t.RelationalModel)) return u.apply(this, arguments);
if ('add' === e || 'remove' === e || 'reset' === e || 'sort' === e) {
  var n = this,
  o = arguments;
  i.isObject(o[3]) && (o = i.toArray(o), o[3] = i.clone(o[3])),
  t.Relational.eventQueue.add(function () {
    u.apply(n, o)
  })
} else u.apply(this, arguments);
return this
},
t.RelationalModel.extend = function () {
var e = t.Model.extend.apply(this, arguments);
return e.setup(this),
e
}
}), function (e, t) {
if ('object' == typeof exports) {
var i = require('underscore'),
n = require('backbone');
module.exports = t(i, n)
} else 'function' == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define('backbone.wreqr', [
'underscore',
'backbone'
], t)
}(this, function (e, t) {
return t.Wreqr = function (e, t, i) {
var n = {
};
return n.Handlers = function (e, t) {
  var i = function (e) {
    this.options = e,
    this._wreqrHandlers = {
    },
    t.isFunction(this.initialize) && this.initialize(e)
  };
  return i.extend = e.Model.extend,
  t.extend(i.prototype, e.Events, {
    setHandlers: function (e) {
      t.each(e, function (e, i) {
        var n = null;
        t.isObject(e) && !t.isFunction(e) && (n = e.context, e = e.callback),
        this.setHandler(i, e, n)
      }, this)
    },
    setHandler: function (e, t, i) {
      var n = {
        callback: t,
        context: i
      };
      this._wreqrHandlers[e] = n,
      this.trigger('handler:add', e, t, i)
    },
    hasHandler: function (e) {
      return !!this._wreqrHandlers[e]
    },
    getHandler: function (e) {
      var t = this._wreqrHandlers[e];
      if (!t) throw new Error('Handler not found for \'' + e + '\'');
      return function () {
        var e = Array.prototype.slice.apply(arguments);
        return t.callback.apply(t.context, e)
      }
    },
    removeHandler: function (e) {
      delete this._wreqrHandlers[e]
    },
    removeAllHandlers: function () {
      this._wreqrHandlers = {
      }
    }
  }),
  i
}(e, i),
n.CommandStorage = function () {
  var t = function (e) {
    this.options = e,
    this._commands = {
    },
    i.isFunction(this.initialize) && this.initialize(e)
  };
  return i.extend(t.prototype, e.Events, {
    getCommands: function (e) {
      var t = this._commands[e];
      return t || (t = {
        command: e,
        instances: [
        ]
      }, this._commands[e] = t),
      t
    },
    addCommand: function (e, t) {
      var i = this.getCommands(e);
      i.instances.push(t)
    },
    clearCommands: function (e) {
      var t = this.getCommands(e);
      t.instances = [
      ]
    }
  }),
  t
}(),
n.Commands = function (e) {
  return e.Handlers.extend({
    storageType: e.CommandStorage,
    constructor: function (t) {
      this.options = t || {
      },
      this._initializeStorage(this.options),
      this.on('handler:add', this._executeCommands, this);
      var i = Array.prototype.slice.call(arguments);
      e.Handlers.prototype.constructor.apply(this, i)
    },
    execute: function (e, t) {
      e = arguments[0],
      t = Array.prototype.slice.call(arguments, 1),
      this.hasHandler(e) ? this.getHandler(e).apply(this, t)  : this.storage.addCommand(e, t)
    },
    _executeCommands: function (e, t, n) {
      var o = this.storage.getCommands(e);
      i.each(o.instances, function (e) {
        t.apply(n, e)
      }),
      this.storage.clearCommands(e)
    },
    _initializeStorage: function (e) {
      var t,
      n = e.storageType || this.storageType;
      t = i.isFunction(n) ? new n : n,
      this.storage = t
    }
  })
}(n),
n.RequestResponse = function (e) {
  return e.Handlers.extend({
    request: function () {
      var e = arguments[0],
      t = Array.prototype.slice.call(arguments, 1);
      return this.getHandler(e).apply(this, t)
    }
  })
}(n),
n.EventAggregator = function (e, t) {
  var i = function () {
  };
  return i.extend = e.Model.extend,
  t.extend(i.prototype, e.Events),
  i
}(e, i),
n
}(t, t.Marionette, e),
t.Wreqr
}), function (e, t) {
if ('object' == typeof exports) {
var i = require('underscore'),
n = require('backbone');
module.exports = t(i, n)
} else 'function' == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define('backbone.babysitter', [
'underscore',
'backbone'
], t)
}(this, function (e, t) {
'option strict';
return t.ChildViewContainer = function (e, t) {
var i = function (e) {
  this._views = {
  },
  this._indexByModel = {
  },
  this._indexByCustom = {
  },
  this._updateLength(),
  t.each(e, this.add, this)
};
t.extend(i.prototype, {
  add: function (e, t) {
    var i = e.cid;
    this._views[i] = e,
    e.model && (this._indexByModel[e.model.cid] = i),
    t && (this._indexByCustom[t] = i),
    this._updateLength()
  },
  findByModel: function (e) {
    return this.findByModelCid(e.cid)
  },
  findByModelCid: function (e) {
    var t = this._indexByModel[e];
    return this.findByCid(t)
  },
  findByCustom: function (e) {
    var t = this._indexByCustom[e];
    return this.findByCid(t)
  },
  findByIndex: function (e) {
    return t.values(this._views) [e]
  },
  findByCid: function (e) {
    return this._views[e]
  },
  remove: function (e) {
    var i = e.cid;
    e.model && delete this._indexByModel[e.model.cid],
    t.any(this._indexByCustom, function (e, t) {
      return e === i ? (delete this._indexByCustom[t], !0)  : void 0
    }, this),
    delete this._views[i],
    this._updateLength()
  },
  call: function (e) {
    this.apply(e, t.tail(arguments))
  },
  apply: function (e, i) {
    t.each(this._views, function (n) {
      t.isFunction(n[e]) && n[e].apply(n, i || [])
    })
  },
  _updateLength: function () {
    this.length = t.size(this._views)
  }
});
var n = [
  'forEach',
  'each',
  'map',
  'find',
  'detect',
  'filter',
  'select',
  'reject',
  'every',
  'all',
  'some',
  'any',
  'include',
  'contains',
  'invoke',
  'toArray',
  'first',
  'initial',
  'rest',
  'last',
  'without',
  'isEmpty',
  'pluck'
];
return t.each(n, function (e) {
  i.prototype[e] = function () {
    var i = t.values(this._views),
    n = [
      i
    ].concat(t.toArray(arguments));
    return t[e].apply(t, n)
  }
}),
i
}(t, e),
t.ChildViewContainer
}), function (e, t) {
if ('object' == typeof exports) {
var i = require('underscore'),
n = require('backbone'),
o = require('backbone.wreqr'),
s = require('backbone.babysitter');
module.exports = t(i, n, o, s)
} else 'function' == typeof _wAMD.define && _wAMD.define.amd && _wAMD.define('backbone-marionette', [
'underscore',
'backbone',
'backbone.wreqr',
'backbone.babysitter'
], t)
}(this, function (e, t) {
return function (e, t, i) {
function n(e) {
  return r.call(e)
}
function o(e, t) {
  var i = new Error(e);
  throw i.name = t || 'Error',
  i
}
var s = {
};
t.Marionette = s,
s.$ = t.$;
var r = Array.prototype.slice;
return s.extend = t.Model.extend,
s.getOption = function (e, t) {
  if (e && t) {
    var i;
    return i = e.options && t in e.options && void 0 !== e.options[t] ? e.options[t] : e[t]
  }
},
s.normalizeMethods = function (e) {
  var t,
  n = {
  };
  return i.each(e, function (e, o) {
    t = e,
    i.isFunction(t) || (t = this[t]),
    t && (n[o] = t)
  }, this),
  n
},
s.triggerMethod = function () {
  function e(e, t, i) {
    return i.toUpperCase()
  }
  var t = /(^|:)(\w)/gi,
  n = function (n) {
    var o = 'on' + n.replace(t, e),
    s = this[o];
    return i.isFunction(this.trigger) && this.trigger.apply(this, arguments),
    i.isFunction(s) ? s.apply(this, i.tail(arguments))  : void 0
  };
  return n
}(),
s.MonitorDOMRefresh = function (e) {
  function t(e) {
    e._isShown = !0,
    o(e)
  }
  function n(e) {
    e._isRendered = !0,
    o(e)
  }
  function o(e) {
    e._isShown && e._isRendered && s(e) && i.isFunction(e.triggerMethod) && e.triggerMethod('dom:refresh')
  }
  function s(t) {
    return e.contains(t.el)
  }
  return function (e) {
    e.listenTo(e, 'show', function () {
      t(e)
    }),
    e.listenTo(e, 'render', function () {
      n(e)
    })
  }
}(document.documentElement),
function (e) {
  function t(e, t, n, s) {
    var r = s.split(/\s+/);
    i.each(r, function (i) {
      var s = e[i];
      s || o('Method \'' + i + '\' was configured as an event handler, but does not exist.'),
      e.listenTo(t, n, s, e)
    })
  }
  function n(e, t, i, n) {
    e.listenTo(t, i, n, e)
  }
  function s(e, t, n, o) {
    var s = o.split(/\s+/);
    i.each(s, function (i) {
      var o = e[i];
      e.stopListening(t, n, o, e)
    })
  }
  function r(e, t, i, n) {
    e.stopListening(t, i, n, e)
  }
  function a(e, t, n, o, s) {
    t && n && (i.isFunction(n) && (n = n.call(e)), i.each(n, function (n, r) {
      i.isFunction(n) ? o(e, t, r, n)  : s(e, t, r, n)
    }))
  }
  e.bindEntityEvents = function (e, i, o) {
    a(e, i, o, n, t)
  },
  e.unbindEntityEvents = function (e, t, i) {
    a(e, t, i, r, s)
  }
}(s),
s.Callbacks = function () {
  this._deferred = s.$.Deferred(),
  this._callbacks = [
  ]
},
i.extend(s.Callbacks.prototype, {
  add: function (e, t) {
    this._callbacks.push({
      cb: e,
      ctx: t
    }),
    this._deferred.done(function (i, n) {
      t && (i = t),
      e.call(i, n)
    })
  },
  run: function (e, t) {
    this._deferred.resolve(t, e)
  },
  reset: function () {
    var e = this._callbacks;
    this._deferred = s.$.Deferred(),
    this._callbacks = [
    ],
    i.each(e, function (e) {
      this.add(e.cb, e.ctx)
    }, this)
  }
}),
s.Controller = function (e) {
  this.triggerMethod = s.triggerMethod,
  this.options = e || {
  },
  i.isFunction(this.initialize) && this.initialize(this.options)
},
s.Controller.extend = s.extend,
i.extend(s.Controller.prototype, t.Events, {
  close: function () {
    this.stopListening(),
    this.triggerMethod('close'),
    this.unbind()
  }
}),
s.Region = function (e) {
  if (this.options = e || {
  }, this.el = s.getOption(this, 'el'), !this.el) {
    var t = new Error('An \'el\' must be specified for a region.');
    throw t.name = 'NoElError',
    t
  }
  if (this.initialize) {
    var i = Array.prototype.slice.apply(arguments);
    this.initialize.apply(this, i)
  }
},
i.extend(s.Region, {
  buildRegion: function (e, t) {
    var n = 'string' == typeof e,
    o = 'string' == typeof e.selector,
    s = 'undefined' == typeof e.regionType,
    r = 'function' == typeof e;
    if (!r && !n && !o) throw new Error('Region must be specified as a Region type, a selector string or an object with selector property');
    var a,
    l;
    n && (a = e),
    e.selector && (a = e.selector, delete e.selector),
    r && (l = e),
    !r && s && (l = t),
    e.regionType && (l = e.regionType, delete e.regionType),
    (n || r) && (e = {
    }),
    e.el = a;
    var c = new l(e);
    return e.parentEl && (c.getEl = function (t) {
      var n = e.parentEl;
      return i.isFunction(n) && (n = n()),
      n.find(t)
    }),
    c
  }
}),
i.extend(s.Region.prototype, t.Events, {
  show: function (e) {
    this.ensureEl();
    var t = e.isClosed || i.isUndefined(e.$el),
    n = e !== this.currentView;
    n && this.close(),
    e.render(),
    (n || t) && this.open(e),
    this.currentView = e,
    s.triggerMethod.call(this, 'show', e),
    s.triggerMethod.call(e, 'show')
  },
  ensureEl: function () {
    this.$el && 0 !== this.$el.length || (this.$el = this.getEl(this.el))
  },
  getEl: function (e) {
    return s.$(e)
  },
  open: function (e) {
    this.$el.empty().append(e.el)
  },
  close: function () {
    var e = this.currentView;
    e && !e.isClosed && (e.close ? e.close()  : e.remove && e.remove(), s.triggerMethod.call(this, 'close', e), delete this.currentView)
  },
  attachView: function (e) {
    this.currentView = e
  },
  reset: function () {
    this.close(),
    delete this.$el
  }
}),
s.Region.extend = s.extend,
s.RegionManager = function (e) {
  var t = e.Controller.extend({
    constructor: function (t) {
      this._regions = {
      },
      e.Controller.prototype.constructor.call(this, t)
    },
    addRegions: function (e, t) {
      var n = {
      };
      return i.each(e, function (e, o) {
        'string' == typeof e && (e = {
          selector: e
        }),
        e.selector && (e = i.defaults({
        }, e, t));
        var s = this.addRegion(o, e);
        n[o] = s
      }, this),
      n
    },
    addRegion: function (t, n) {
      var o,
      s = i.isObject(n),
      r = i.isString(n),
      a = !!n.selector;
      return o = r || s && a ? e.Region.buildRegion(n, e.Region)  : i.isFunction(n) ? e.Region.buildRegion(n, e.Region)  : n,
      this._store(t, o),
      this.triggerMethod('region:add', t, o),
      o
    },
    get: function (e) {
      return this._regions[e]
    },
    removeRegion: function (e) {
      var t = this._regions[e];
      this._remove(e, t)
    },
    removeRegions: function () {
      i.each(this._regions, function (e, t) {
        this._remove(t, e)
      }, this)
    },
    closeRegions: function () {
      i.each(this._regions, function (e) {
        e.close()
      }, this)
    },
    close: function () {
      this.removeRegions();
      var t = Array.prototype.slice.call(arguments);
      e.Controller.prototype.close.apply(this, t)
    },
    _store: function (e, t) {
      this._regions[e] = t,
      this._setLength()
    },
    _remove: function (e, t) {
      t.close(),
      delete this._regions[e],
      this._setLength(),
      this.triggerMethod('region:remove', e, t)
    },
    _setLength: function () {
      this.length = i.size(this._regions)
    }
  }),
  n = [
    'forEach',
    'each',
    'map',
    'find',
    'detect',
    'filter',
    'select',
    'reject',
    'every',
    'all',
    'some',
    'any',
    'include',
    'contains',
    'invoke',
    'toArray',
    'first',
    'initial',
    'rest',
    'last',
    'without',
    'isEmpty',
    'pluck'
  ];
  return i.each(n, function (e) {
    t.prototype[e] = function () {
      var t = i.values(this._regions),
      n = [
        t
      ].concat(i.toArray(arguments));
      return i[e].apply(i, n)
    }
  }),
  t
}(s),
s.TemplateCache = function (e) {
  this.templateId = e
},
i.extend(s.TemplateCache, {
  templateCaches: {
  },
  get: function (e) {
    var t = this.templateCaches[e];
    return t || (t = new s.TemplateCache(e), this.templateCaches[e] = t),
    t.load()
  },
  clear: function () {
    var e,
    t = n(arguments),
    i = t.length;
    if (i > 0) for (e = 0; i > e; e++) delete this.templateCaches[t[e]];
     else this.templateCaches = {
    }
  }
}),
i.extend(s.TemplateCache.prototype, {
  load: function () {
    if (this.compiledTemplate) return this.compiledTemplate;
    var e = this.loadTemplate(this.templateId);
    return this.compiledTemplate = this.compileTemplate(e),
    this.compiledTemplate
  },
  loadTemplate: function (e) {
    var t = s.$(e).html();
    return t && 0 !== t.length || o('Could not find template: \'' + e + '\'', 'NoTemplateError'),
    t
  },
  compileTemplate: function (e) {
    return i.template(e)
  }
}),
s.Renderer = {
  render: function (e, t) {
    if (!e) {
      var i = new Error('Cannot render the template since it\'s false, null or undefined.');
      throw i.name = 'TemplateNotFoundError',
      i
    }
    var n;
    return n = 'function' == typeof e ? e : s.TemplateCache.get(e),
    n(t)
  }
},
s.View = t.View.extend({
  constructor: function (e) {
    i.bindAll(this, 'render');
    var n = Array.prototype.slice.apply(arguments);
    this.options = i.extend({
    }, i.result(this, 'options'), i.isFunction(e) ? e.call(this)  : e),
    this.events = this.normalizeUIKeys(i.result(this, 'events')),
    t.View.prototype.constructor.apply(this, n),
    s.MonitorDOMRefresh(this),
    this.listenTo(this, 'show', this.onShowCalled, this)
  },
  triggerMethod: s.triggerMethod,
  normalizeMethods: s.normalizeMethods,
  getTemplate: function () {
    return s.getOption(this, 'template')
  },
  mixinTemplateHelpers: function (e) {
    e = e || {
    };
    var t = s.getOption(this, 'templateHelpers');
    return i.isFunction(t) && (t = t.call(this)),
    i.extend(e, t)
  },
  normalizeUIKeys: function (e) {
    return 'undefined' != typeof e ? (i.each(i.keys(e), function (t) {
      var i = t.split('@ui.');
      2 === i.length && (e[i[0] + this.ui[i[1]]] = e[t], delete e[t])
    }, this), e)  : void 0
  },
  configureTriggers: function () {
    if (this.triggers) {
      var e = {
      },
      t = this.normalizeUIKeys(i.result(this, 'triggers'));
      return i.each(t, function (t, n) {
        var o = i.isObject(t),
        s = o ? t.event : t;
        e[n] = function (e) {
          if (e) {
            var i = e.preventDefault,
            n = e.stopPropagation,
            r = o ? t.preventDefault : i,
            a = o ? t.stopPropagation : n;
            r && i && i.apply(e),
            a && n && n.apply(e)
          }
          var l = {
            view: this,
            model: this.model,
            collection: this.collection
          };
          this.triggerMethod(s, l)
        }
      }, this),
      e
    }
  },
  delegateEvents: function (e) {
    this._delegateDOMEvents(e),
    s.bindEntityEvents(this, this.model, s.getOption(this, 'modelEvents')),
    s.bindEntityEvents(this, this.collection, s.getOption(this, 'collectionEvents'))
  },
  _delegateDOMEvents: function (e) {
    e = e || this.events,
    i.isFunction(e) && (e = e.call(this));
    var n = {
    },
    o = this.configureTriggers();
    i.extend(n, e, o),
    t.View.prototype.delegateEvents.call(this, n)
  },
  undelegateEvents: function () {
    var e = Array.prototype.slice.call(arguments);
    t.View.prototype.undelegateEvents.apply(this, e),
    s.unbindEntityEvents(this, this.model, s.getOption(this, 'modelEvents')),
    s.unbindEntityEvents(this, this.collection, s.getOption(this, 'collectionEvents'))
  },
  onShowCalled: function () {
  },
  close: function () {
    if (!this.isClosed) {
      var e = this.triggerMethod('before:close');
      e !== !1 && (this.isClosed = !0, this.triggerMethod('close'), this.unbindUIElements(), this.remove())
    }
  },
  bindUIElements: function () {
    if (this.ui) {
      this._uiBindings || (this._uiBindings = this.ui);
      var e = i.result(this, '_uiBindings');
      this.ui = {
      },
      i.each(i.keys(e), function (t) {
        var i = e[t];
        this.ui[t] = this.$(i)
      }, this)
    }
  },
  unbindUIElements: function () {
    this.ui && this._uiBindings && (i.each(this.ui, function (e, t) {
      delete this.ui[t]
    }, this), this.ui = this._uiBindings, delete this._uiBindings)
  }
}),
s.ItemView = s.View.extend({
  constructor: function () {
    s.View.prototype.constructor.apply(this, n(arguments))
  },
  serializeData: function () {
    var e = {
    };
    return this.model ? e = this.model.toJSON()  : this.collection && (e = {
      items: this.collection.toJSON()
    }),
    e
  },
  render: function () {
    this.isClosed = !1,
    this.triggerMethod('before:render', this),
    this.triggerMethod('item:before:render', this);
    var e = this.serializeData();
    e = this.mixinTemplateHelpers(e);
    var t = this.getTemplate(),
    i = s.Renderer.render(t, e);
    return this.$el.html(i),
    this.bindUIElements(),
    this.triggerMethod('render', this),
    this.triggerMethod('item:rendered', this),
    this
  },
  close: function () {
    this.isClosed || (this.triggerMethod('item:before:close'), s.View.prototype.close.apply(this, n(arguments)), this.triggerMethod('item:closed'))
  }
}),
s.CollectionView = s.View.extend({
  itemViewEventPrefix: 'itemview',
  constructor: function () {
    this._initChildViewStorage(),
    s.View.prototype.constructor.apply(this, n(arguments)),
    this._initialEvents(),
    this.initRenderBuffer()
  },
  initRenderBuffer: function () {
    this.elBuffer = document.createDocumentFragment(),
    this._bufferedChildren = [
    ]
  },
  startBuffering: function () {
    this.initRenderBuffer(),
    this.isBuffering = !0
  },
  endBuffering: function () {
    this.isBuffering = !1,
    this.appendBuffer(this, this.elBuffer),
    this._triggerShowBufferedChildren(),
    this.initRenderBuffer()
  },
  _triggerShowBufferedChildren: function () {
    this._isShown && (i.each(this._bufferedChildren, function (e) {
      s.triggerMethod.call(e, 'show')
    }), this._bufferedChildren = [
    ])
  },
  _initialEvents: function () {
    this.collection && (this.listenTo(this.collection, 'add', this.addChildView, this), this.listenTo(this.collection, 'remove', this.removeItemView, this), this.listenTo(this.collection, 'reset', this.render, this))
  },
  addChildView: function (e) {
    this.closeEmptyView();
    var t = this.getItemView(e),
    i = this.collection.indexOf(e);
    this.addItemView(e, t, i)
  },
  onShowCalled: function () {
    this.children.each(function (e) {
      s.triggerMethod.call(e, 'show')
    })
  },
  triggerBeforeRender: function () {
    this.triggerMethod('before:render', this),
    this.triggerMethod('collection:before:render', this)
  },
  triggerRendered: function () {
    this.triggerMethod('render', this),
    this.triggerMethod('collection:rendered', this)
  },
  render: function () {
    return this.isClosed = !1,
    this.triggerBeforeRender(),
    this._renderChildren(),
    this.triggerRendered(),
    this
  },
  _renderChildren: function () {
    this.startBuffering(),
    this.closeEmptyView(),
    this.closeChildren(),
    this.isEmpty(this.collection) ? this.showEmptyView()  : this.showCollection(),
    this.endBuffering()
  },
  showCollection: function () {
    var e;
    this.collection.each(function (t, i) {
      e = this.getItemView(t),
      this.addItemView(t, e, i)
    }, this)
  },
  showEmptyView: function () {
    var e = this.getEmptyView();
    if (e && !this._showingEmptyView) {
      this._showingEmptyView = !0;
      var i = new t.Model;
      this.addItemView(i, e, 0)
    }
  },
  closeEmptyView: function () {
    this._showingEmptyView && (this.closeChildren(), delete this._showingEmptyView)
  },
  getEmptyView: function () {
    return s.getOption(this, 'emptyView')
  },
  getItemView: function () {
    var e = s.getOption(this, 'itemView');
    return e || o('An `itemView` must be specified', 'NoItemViewError'),
    e
  },
  addItemView: function (e, t, n) {
    var o = s.getOption(this, 'itemViewOptions');
    i.isFunction(o) && (o = o.call(this, e, n));
    var r = this.buildItemView(e, t, o);
    return this.addChildViewEventForwarding(r),
    this.triggerMethod('before:item:added', r),
    this.children.add(r),
    this.renderItemView(r, n),
    this._isShown && !this.isBuffering && s.triggerMethod.call(r, 'show'),
    this.triggerMethod('after:item:added', r),
    r
  },
  addChildViewEventForwarding: function (e) {
    var t = s.getOption(this, 'itemViewEventPrefix');
    this.listenTo(e, 'all', function () {
      var o = n(arguments),
      r = o[0],
      a = this.normalizeMethods(this.getItemEvents());
      o[0] = t + ':' + r,
      o.splice(1, 0, e),
      'undefined' != typeof a && i.isFunction(a[r]) && a[r].apply(this, o),
      s.triggerMethod.apply(this, o)
    }, this)
  },
  getItemEvents: function () {
    return i.isFunction(this.itemEvents) ? this.itemEvents.call(this)  : this.itemEvents
  },
  renderItemView: function (e, t) {
    e.render(),
    this.appendHtml(this, e, t)
  },
  buildItemView: function (e, t, n) {
    var o = i.extend({
      model: e
    }, n);
    return new t(o)
  },
  removeItemView: function (e) {
    var t = this.children.findByModel(e);
    this.removeChildView(t),
    this.checkEmpty()
  },
  removeChildView: function (e) {
    e && (this.stopListening(e), e.close ? e.close()  : e.remove && e.remove(), this.children.remove(e)),
    this.triggerMethod('item:removed', e)
  },
  isEmpty: function () {
    return !this.collection || 0 === this.collection.length
  },
  checkEmpty: function () {
    this.isEmpty(this.collection) && this.showEmptyView()
  },
  appendBuffer: function (e, t) {
    e.$el.append(t)
  },
  appendHtml: function (e, t) {
    e.isBuffering ? (e.elBuffer.appendChild(t.el), e._bufferedChildren.push(t))  : e.$el.append(t.el)
  },
  _initChildViewStorage: function () {
    this.children = new t.ChildViewContainer
  },
  close: function () {
    this.isClosed || (this.triggerMethod('collection:before:close'), this.closeChildren(), this.triggerMethod('collection:closed'), s.View.prototype.close.apply(this, n(arguments)))
  },
  closeChildren: function () {
    this.children.each(function (e) {
      this.removeChildView(e)
    }, this),
    this.checkEmpty()
  }
}),
s.CompositeView = s.CollectionView.extend({
  constructor: function () {
    s.CollectionView.prototype.constructor.apply(this, n(arguments))
  },
  _initialEvents: function () {
    this.once('render', function () {
      this.collection && (this.listenTo(this.collection, 'add', this.addChildView, this), this.listenTo(this.collection, 'remove', this.removeItemView, this), this.listenTo(this.collection, 'reset', this._renderChildren, this))
    })
  },
  getItemView: function () {
    var e = s.getOption(this, 'itemView') || this.constructor;
    return e || o('An `itemView` must be specified', 'NoItemViewError'),
    e
  },
  serializeData: function () {
    var e = {
    };
    return this.model && (e = this.model.toJSON()),
    e
  },
  render: function () {
    this.isRendered = !0,
    this.isClosed = !1,
    this.resetItemViewContainer(),
    this.triggerBeforeRender();
    var e = this.renderModel();
    return this.$el.html(e),
    this.bindUIElements(),
    this.triggerMethod('composite:model:rendered'),
    this._renderChildren(),
    this.triggerMethod('composite:rendered'),
    this.triggerRendered(),
    this
  },
  _renderChildren: function () {
    this.isRendered && (this.triggerMethod('composite:collection:before:render'), s.CollectionView.prototype._renderChildren.call(this), this.triggerMethod('composite:collection:rendered'))
  },
  renderModel: function () {
    var e = {
    };
    e = this.serializeData(),
    e = this.mixinTemplateHelpers(e);
    var t = this.getTemplate();
    return s.Renderer.render(t, e)
  },
  appendBuffer: function (e, t) {
    var i = this.getItemViewContainer(e);
    i.append(t)
  },
  appendHtml: function (e, t) {
    if (e.isBuffering) e.elBuffer.appendChild(t.el),
    e._bufferedChildren.push(t);
     else {
      var i = this.getItemViewContainer(e);
      i.append(t.el)
    }
  },
  getItemViewContainer: function (e) {
    if ('$itemViewContainer' in e) return e.$itemViewContainer;
    var t,
    n = s.getOption(e, 'itemViewContainer');
    if (n) {
      var r = i.isFunction(n) ? n.call(this)  : n;
      t = e.$(r),
      t.length <= 0 && o('The specified `itemViewContainer` was not found: ' + e.itemViewContainer, 'ItemViewContainerMissingError')
    } else t = e.$el;
    return e.$itemViewContainer = t,
    t
  },
  resetItemViewContainer: function () {
    this.$itemViewContainer && delete this.$itemViewContainer
  }
}),
s.Layout = s.ItemView.extend({
  regionType: s.Region,
  constructor: function (e) {
    e = e || {
    },
    this._firstRender = !0,
    this._initializeRegions(e),
    s.ItemView.prototype.constructor.call(this, e)
  },
  render: function () {
    this.isClosed && this._initializeRegions(),
    this._firstRender ? this._firstRender = !1 : this.isClosed || this._reInitializeRegions();
    var e = Array.prototype.slice.apply(arguments),
    t = s.ItemView.prototype.render.apply(this, e);
    return t
  },
  close: function () {
    if (!this.isClosed) {
      this.regionManager.close();
      var e = Array.prototype.slice.apply(arguments);
      s.ItemView.prototype.close.apply(this, e)
    }
  },
  addRegion: function (e, t) {
    var i = {
    };
    return i[e] = t,
    this._buildRegions(i) [e]
  },
  addRegions: function (e) {
    return this.regions = i.extend({
    }, this.regions, e),
    this._buildRegions(e)
  },
  removeRegion: function (e) {
    return delete this.regions[e],
    this.regionManager.removeRegion(e)
  },
  _buildRegions: function (e) {
    var t = this,
    i = {
      regionType: s.getOption(this, 'regionType'),
      parentEl: function () {
        return t.$el
      }
    };
    return this.regionManager.addRegions(e, i)
  },
  _initializeRegions: function (e) {
    var t;
    this._initRegionManager(),
    t = i.isFunction(this.regions) ? this.regions(e)  : this.regions || {
    },
    this.addRegions(t)
  },
  _reInitializeRegions: function () {
    this.regionManager.closeRegions(),
    this.regionManager.each(function (e) {
      e.reset()
    })
  },
  _initRegionManager: function () {
    this.regionManager = new s.RegionManager,
    this.listenTo(this.regionManager, 'region:add', function (e, t) {
      this[e] = t,
      this.trigger('region:add', e, t)
    }),
    this.listenTo(this.regionManager, 'region:remove', function (e, t) {
      delete this[e],
      this.trigger('region:remove', e, t)
    })
  }
}),
s.AppRouter = t.Router.extend({
  constructor: function (e) {
    t.Router.prototype.constructor.apply(this, n(arguments)),
    this.options = e || {
    };
    var i = s.getOption(this, 'appRoutes'),
    o = this._getController();
    this.processAppRoutes(o, i)
  },
  appRoute: function (e, t) {
    var i = this._getController();
    this._addAppRoute(i, e, t)
  },
  processAppRoutes: function (e, t) {
    if (t) {
      var n = i.keys(t).reverse();
      i.each(n, function (i) {
        this._addAppRoute(e, i, t[i])
      }, this)
    }
  },
  _getController: function () {
    return s.getOption(this, 'controller')
  },
  _addAppRoute: function (e, t, n) {
    var o = e[n];
    if (!o) throw new Error('Method \'' + n + '\' was not found on the controller');
    this.route(t, n, i.bind(o, e))
  }
}),
s.Application = function (e) {
  this._initRegionManager(),
  this._initCallbacks = new s.Callbacks,
  this.vent = new t.Wreqr.EventAggregator,
  this.commands = new t.Wreqr.Commands,
  this.reqres = new t.Wreqr.RequestResponse,
  this.submodules = {
  },
  i.extend(this, e),
  this.triggerMethod = s.triggerMethod
},
i.extend(s.Application.prototype, t.Events, {
  execute: function () {
    var e = Array.prototype.slice.apply(arguments);
    this.commands.execute.apply(this.commands, e)
  },
  request: function () {
    var e = Array.prototype.slice.apply(arguments);
    return this.reqres.request.apply(this.reqres, e)
  },
  addInitializer: function (e) {
    this._initCallbacks.add(e)
  },
  start: function (e) {
    this.triggerMethod('initialize:before', e),
    this._initCallbacks.run(e, this),
    this.triggerMethod('initialize:after', e),
    this.triggerMethod('start', e)
  },
  addRegions: function (e) {
    return this._regionManager.addRegions(e)
  },
  closeRegions: function () {
    this._regionManager.closeRegions()
  },
  removeRegion: function (e) {
    this._regionManager.removeRegion(e)
  },
  getRegion: function (e) {
    return this._regionManager.get(e)
  },
  module: function (e, t) {
    var i = s.Module;
    t && (i = t.moduleClass || i);
    var o = n(arguments);
    return o.unshift(this),
    i.create.apply(i, o)
  },
  _initRegionManager: function () {
    this._regionManager = new s.RegionManager,
    this.listenTo(this._regionManager, 'region:add', function (e, t) {
      this[e] = t
    }),
    this.listenTo(this._regionManager, 'region:remove', function (e) {
      delete this[e]
    })
  }
}),
s.Application.extend = s.extend,
s.Module = function (e, t, n) {
  this.moduleName = e,
  this.options = i.extend({
  }, this.options, n),
  this.initialize = n.initialize || this.initialize,
  this.submodules = {
  },
  this._setupInitializersAndFinalizers(),
  this.app = t,
  this.startWithParent = !0,
  this.triggerMethod = s.triggerMethod,
  i.isFunction(this.initialize) && this.initialize(this.options, e, t)
},
s.Module.extend = s.extend,
i.extend(s.Module.prototype, t.Events, {
  initialize: function () {
  },
  addInitializer: function (e) {
    this._initializerCallbacks.add(e)
  },
  addFinalizer: function (e) {
    this._finalizerCallbacks.add(e)
  },
  start: function (e) {
    this._isInitialized || (i.each(this.submodules, function (t) {
      t.startWithParent && t.start(e)
    }), this.triggerMethod('before:start', e), this._initializerCallbacks.run(e, this), this._isInitialized = !0, this.triggerMethod('start', e))
  },
  stop: function () {
    this._isInitialized && (this._isInitialized = !1, s.triggerMethod.call(this, 'before:stop'), i.each(this.submodules, function (e) {
      e.stop()
    }), this._finalizerCallbacks.run(void 0, this), this._initializerCallbacks.reset(), this._finalizerCallbacks.reset(), s.triggerMethod.call(this, 'stop'))
  },
  addDefinition: function (e, t) {
    this._runModuleDefinition(e, t)
  },
  _runModuleDefinition: function (e, n) {
    if (e) {
      var o = i.flatten([this,
      this.app,
      t,
      s,
      s.$,
      i,
      n]);
      e.apply(this, o)
    }
  },
  _setupInitializersAndFinalizers: function () {
    this._initializerCallbacks = new s.Callbacks,
    this._finalizerCallbacks = new s.Callbacks
  }
}),
i.extend(s.Module, {
  create: function (e, t, o) {
    var s = e,
    r = n(arguments);
    r.splice(0, 3),
    t = t.split('.');
    var a = t.length,
    l = [
    ];
    return l[a - 1] = o,
    i.each(t, function (t, i) {
      var n = s;
      s = this._getModule(n, t, e, o),
      this._addModuleDefinition(n, s, l[i], r)
    }, this),
    s
  },
  _getModule: function (e, t, n, o) {
    var r = s.Module,
    a = i.extend({
    }, o);
    o && (r = o.moduleClass || r);
    var l = e[t];
    return l || (l = new r(t, n, a), e[t] = l, e.submodules[t] = l),
    l
  },
  _addModuleDefinition: function (e, t, n, o) {
    var s,
    r;
    i.isFunction(n) ? (s = n, r = !0)  : i.isObject(n) ? (s = n.define, r = 'undefined' != typeof n.startWithParent ? n.startWithParent : !0)  : r = !0,
    s && t.addDefinition(s, o),
    t.startWithParent = t.startWithParent && r,
    t.startWithParent && !t.startWithParentIsConfigured && (t.startWithParentIsConfigured = !0, e.addInitializer(function (e) {
      t.startWithParent && t.start(e)
    }))
  }
}),
s
}(this, t, e),
t.Marionette
}), _wAMD.define('util/backbone-prevent', [
'jquery',
'underscore',
'backbone'
], function (e, t, i) {
i.preventClose = function (n) {
var o = this;
if (!this.defer) {
  if (this.defer = e.Deferred(), i.preventClose.preventer) {
    var s = i.preventClose.preventer();
    s && s.promise ? this.defer = s : s ? this.defer.resolve()  : this.defer.reject(),
    this.defer.fail(function () {
      delete i.preventClose.preventer
    })
  } else this.defer.reject();
  this.defer.always(function () {
    t.defer(function () {
      delete o.defer
    })
  })
}
this.defer.fail(function () {
  n()
})
},
i.preventClose.ifModelChanged = function (i) {
if (!i.hasChangedDeepSinceSavepoint()) return !1;
var n = e.Deferred();
return t.defer(function () {
  confirm('Are you sure? You\'ll lose your current changes.') ? n.reject()  : n.resolve()
}),
n.promise()
};
var n = i.View.prototype.constructor;
i.View.prototype.constructor = function () {
n.apply(this, arguments),
this.preventClose && (i.preventClose.preventer = t.bind(this.preventClose, this))
}
}), jsonrpc = {
}, jsonrpc.CallStack = function (e, t, i, n) {
this._counter = 0,
this._enterFn = e,
this._exitFn = i,
this._enterScope = t,
this._exitScope = n
}, jsonrpc.CallStack.prototype = {
enter: function () {
this._counter = this._counter < 0 ? 1 : this._counter + 1,
1 === this._counter && this._enterFn.apply(this._enterScope, arguments)
},
exit: function () {
this._counter -= 1,
0 === this._counter && this._exitFn.apply(this._exitScope, arguments)
}
}, jsonrpc.DelayedTask = function (e, t, i) {
this._fn = e || function () {
},
this._scope = t || void 0,
this._args = i || [],
this._id = null
}, jsonrpc.Observable = function () {
this._listeners = [
]
}, jsonrpc.Observable.prototype = {
bind: function (e, t) {
var i = {
  fn: e,
  scope: t || this
};
return this._listeners.push(i),
i
},
unbind: function (e) {
var t = this._listeners.indexOf(e);
- 1 !== t && this._listeners.splice(t, 1)
},
trigger: function () {
var e;
for (e = 0; e < this._listeners.length; e += 1) this._listeners[e].fn.apply(this._listeners[e].scope, arguments)
}
}, jsonrpc.DelayedTask.prototype = {
delay: function (e, t, i, n) {
var o = this;
this._fn = t || this._fn,
this._scope = i || this._scope,
this._args = n || this._args,
this.cancel(),
this._id = window.setInterval(function () {
  window.clearInterval(o._id),
  o._id = null,
  o._fn.apply(o._scope, o._args)
}, e)
},
cancel: function () {
this._id && (window.clearInterval(this._id), this._id = null)
}
}, jsonrpc.JsonRpc = function (e) {
this._url = e,
this.loading = new jsonrpc.Observable,
this.loaded = new jsonrpc.Observable,
this.unhandledFailure = new jsonrpc.Observable,
this._loadingState = new jsonrpc.CallStack(this.loading.trigger, this.loading, this.loaded.trigger, this.loaded),
this._requests = [
],
this._batchingMilliseconds = 10,
this._delayedTask = new jsonrpc.DelayedTask
}, jsonrpc.JsonRpc.prototype = {
setBatchingMilliseconds: function (e) {
this._batchingMilliseconds = e
},
call: function () {
var e = this._getParams.apply(this, arguments);
this._loadingState.enter(),
this._requests.push(e),
this._batchingMilliseconds ? this._delayedTask.delay(this._batchingMilliseconds, this._sendRequests, this)  : this._sendRequests()
},
_sendRequests: function () {
function e(e, o, s) {
  var r;
  if (e) r = i._isArray(o) ? o : [
    o
  ];
   else for (r = [
  ], t = 0; t < n.length; t += 1) r[t] = {
    id: t,
    error: {
      message: o
    }
  };
  i._handleResponses(n, r, s)
}
var t,
i = this,
n = this._requests,
o = [
],
s = [
];
for (i._requests = [
], t = 0; t < n.length; t += 1) n[t].request.id = t,
n[t].secure ? s.push(n[t].request)  : o.push(n[t].request);
o.length > 0 && (1 === o.length && (o = o[0]), i._doJsonPost(i._url, o, e)),
s.length > 0 && (1 === s.length && (s = s[0]), i._doJsonpGet(i._url, s, e))
},
_handleResponses: function (e, t, i) {
var n,
o,
s;
for (n = 0; n < t.length; n += 1) o = t[n],
s = e[o.id],
this._handleResponse(s, o, i)
},
_handleResponse: function (e, t, i) {
var n = !t.error,
o = n ? t.result : t.error.message;
this._loadingState.exit(),
n ? e.success.call(e.scope, o, i)  : e.failure.call(e.scope, o, i),
e.callback.call(e.scope, n, o, i)
},
_getParams: function () {
var e = this,
t = Array.prototype.slice.call(arguments),
i = {
  request: {
    jsonrpc: '2.0',
    method: t.shift()
  }
};
for (i.request.params = [
]; t.length > 1 && !this._isFunction(t[0]); ) i.request.params.push(t.shift());
return this._isFunction(t[0]) ? (i.success = t[0], i.scope = t[1])  : (i.success = t[0].success, i.failure = t[0].failure, i.callback = t[0].callback, i.scope = t[0].scope, i.secure = !!t[0].secure),
i.success = i.success || function () {
},
i.failure = i.failure || function () {
  e.unhandledFailure.trigger.apply(e.unhandledFailure, arguments)
},
i.callback = i.callback || function () {
},
i
},
_isArray: function (e) {
return '[object Array]' === Object.prototype.toString.apply(e)
},
_isFunction: function (e) {
return '[object Function]' === Object.prototype.toString.apply(e)
},
_beforeSend: function () {
},
_doJsonPost: function (e, t, i) {
var n = Weebly.jQuery.ajax({
  type: 'POST',
  url: e,
  cache: !1,
  contentType: 'application/json; charset=UTF-8',
  dataType: 'json',
  beforeSend: this._beforeSend,
  data: JSON.stringify(t),
  headers: {
    'x-wtok': Weebly.RequestToken
  }
}).done(function (e) {
  var t = n.getResponseHeader('Content-Type');
  200 !== n.status ? i(!1, 'Expected HTTP response "200 OK", found "' + n.status + ' ' + n.statusText + '"', n)  : 0 !== t.indexOf('application/json') ? i(!1, 'Expected JSON encoded response, found "' + t + '"', n)  : i(!0, e, n)
})
},
_doJsonpGet: function (e, t, i) {
e = 'https://' + _W.securePrefix + e,
Weebly.jQuery.ajax({
  type: 'GET',
  url: e,
  cache: !1,
  jsonpCallback: 'WJsonp',
  dataType: 'jsonp',
  beforeSend: this._beforeSend,
  data: t,
  headers: {
    'x-wtok': Weebly.RequestToken
  }
}).done(function (e) {
  i(!0, e)
})
}
}, _wAMD.define('vendor/jsonrpc', function () {
}), function (e, t) {
'function' == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define('util/backbone-rpc', [
'underscore',
'backbone'
], t)  : t(e._, e.Backbone)
}(this, function (e, t) {
var i = t.sync;
e.extend(t, {
sync: function (n, o, s) {
  if (!o.rpc) return i.apply(t, arguments);
  var r;
  switch (n) {
    case 'delete':
      n = 'destroy';
    case 'create':
    case 'update':
    case 'patch':
      r = s.attrs || o.toJSON(s);
      break;
    case 'read':
      if (o.rpc && 'read' == n) {
        s = e.extend({
        }, e.omit(s, 'data'), s.data),
        r = e.extend({
          filter: [
          ]
        }, s);
        var a = o.keydefs || o.model.prototype.keydefs;
        if (a.PRIMARY) for (var l = 0; l < a.PRIMARY.length; l++) {
          var c = a.PRIMARY[l];
          void 0 == o.get(c) || e.findWhere(r.filter, {
            property: c
          }) || r.filter.push({
            property: c,
            value: o.get(c)
          })
        }
      }
      break;
    default:
      console.warn(n + ' params not defined for this model ', o),
      r = s.attrs || o.toJSON()
  }
  if (o.rpc[n]) {
    var u = o.rpc[n](r);
    return u.done(function (e) {
      return e.success === !1 ? s.error(e)  : s.success(e)
    }),
    u.fail(function (e) {
      return s.error(e)
    }),
    u
}
console.warn(n + ' not defined for this model ', o)
}
})
}), function () {
Weebly.setup_rpc = function (e) {
var t = Weebly.ns(e.namespace),
i = new jsonrpc.JsonRpc(e.url),
n = function (e, t, n) {
return function () {
  var o = Array.prototype.slice.call(arguments);
  if (o.length < t) return console.error('Wrong number of args for ' + e),
  void 0;
  n = !!n,
  o.unshift(e);
  var s = Weebly.jQuery.Deferred();
  return o.push({
    success: s.resolve,
    failure: s.reject,
    scope: s,
    secure: n
  }),
  i.call.apply(i, o),
  s
}
};
for (var o in e.actions) if (e.actions.hasOwnProperty(o)) for (var s = Weebly.ns(o, t), r = e.actions[o] || [], a = 0; a < r.length; a++) {
var l = r[a];
s[l.name] = n(o + '::' + l.name, l.len, l.secure, l.multiple)
}
},
Weebly.setup_model_rpc = function (e) {
var t = Weebly.ns(e.rpc_namespace),
i = Weebly.ns(e.model_namespace),
n = Weebly.ns(e.collection_namespace),
o = Weebly.ns(e.bootstrap_namespace);
_.extend(i, e.models),
_.extend(n, e.collections),
_.extend(o, e.bootstrap);
for (var s in n) t[s] && (n[s].rpc = t[s]);
for (var s in i) if (t[s]) {
i[s].rpc = t[s];
var r = i[s].relations;
if (r) for (var a = 0; a < r.length; a++) {
  var l = r[a];
  n[l.relatedModel] && (l.collectionType = l.relatedModel + 'Collection')
}
}
}
}(), _wAMD.define('backbone-all', [
'backbone',
'backbone-pageable',
'backbone-validation',
'backbone-relational',
'backbone-marionette',
'util/backbone-prevent',
'util/backbone-rpc'
], function (e) {
var t = {
},
i = e.RelationalModel.extend;
return e.Relational.store.addModelScope(t),
e.RelationalModel.extend = function (e) {
var n = i.apply(this, arguments),
o = e._class;
return o && (o = o.split('.'), o = o[o.length - 1], t[o] = n),
n
},
e
}), !function (e) {
var t = {
sectionContainer: 'section',
easing: 'ease',
animationTime: 1000,
pagination: !0,
updateURL: !1,
keyboard: !0,
beforeMove: null,
afterMove: null,
loop: !1,
responsiveFallback: !1
};
e.fn.swipeEvents = function () {
return this.each(function () {
function t(e) {
  var t = e.originalEvent.touches;
  t && t.length && (n = t[0].pageX, o = t[0].pageY, s.bind('touchmove', i))
}
function i(e) {
  var t = e.originalEvent.touches;
  if (t && t.length) {
    var r = n - t[0].pageX,
    a = o - t[0].pageY;
    r >= 50 && s.trigger('swipeLeft'),
    - 50 >= r && s.trigger('swipeRight'),
    a >= 50 && s.trigger('swipeUp'),
    - 50 >= a && s.trigger('swipeDown'),
    (Math.abs(r) >= 50 || Math.abs(a) >= 50) && s.unbind('touchmove', i)
  }
}
var n,
o,
s = e(this);
s.bind('touchstart', t)
})
},
e.fn.onepage_scroll = function (i) {
function n() {
e(window).width() < s.responsiveFallback ? (e('body').addClass('disabled-onepage-scroll'), e(document).unbind('mousewheel DOMMouseScroll'), r.swipeEvents().unbind('swipeDown swipeUp'))  : (e('body').hasClass('disabled-onepage-scroll') && (e('body').removeClass('disabled-onepage-scroll'), e('html, body, .wrapper').animate({
  scrollTop: 0
}, 'fast')), r.swipeEvents().bind('swipeDown', function (t) {
  e('body').hasClass('disabled-onepage-scroll') || t.preventDefault(),
  r.moveUp()
}).bind('swipeUp', function (t) {
  e('body').hasClass('disabled-onepage-scroll') || t.preventDefault(),
  r.moveDown()
}), e(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (t) {
  var i = e(this);
  if (!i.data('pauseEvents')) {
    t.preventDefault();
    var n = t.originalEvent.wheelDelta || - t.originalEvent.detail;
    o(t, n)
  }
}))
}
function o(e, t) {
deltaOfInterest = t;
var i = (new Date).getTime();
return i - lastAnimation < quietPeriod + s.animationTime ? (e.preventDefault(), void 0)  : (Math.abs(t) > 1 && (0 > deltaOfInterest ? r.moveDown()  : r.moveUp(), lastAnimation = i), void 0)
}
var s = e.extend({
}, t, i),
r = e(this),
a = e(s.sectionContainer);
return total = a.length,
status = 'off',
topPos = 0,
lastAnimation = 0,
quietPeriod = 750,
paginationList = '',
e.fn.transformPage = function (t, i, n) {
document.all && !window.atob ? e(this).animate({
  top: i + '%'
}, t.animationTime, function () {
  'function' == typeof t.afterMove && t.afterMove(n)
})  : (e(this).css({
  '-webkit-transform': 'translate3d(0, ' + i + '%, 0)',
  '-webkit-transition': 'all ' + t.animationTime + 'ms ' + t.easing,
  '-moz-transform': 'translate3d(0, ' + i + '%, 0)',

  '-moz-transition': 'all ' + t.animationTime + 'ms ' + t.easing,
  '-ms-transform': 'translate3d(0, ' + i + '%, 0)',
  '-ms-transition': 'all ' + t.animationTime + 'ms ' + t.easing,
  transform: 'translate3d(0, ' + i + '%, 0)',
  transition: 'all ' + t.animationTime + 'ms ' + t.easing
}), e(this).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
  'function' == typeof t.afterMove && t.afterMove(n)
}))
},
e.fn.moveDown = function () {
var t = e(this);
if (index = e(s.sectionContainer + '.active').data('index'), current = e(s.sectionContainer + '[data-index=\'' + index + '\']'), next = e(s.sectionContainer + '[data-index=\'' + (index + 1) + '\']'), next.length < 1) {
  if (1 != s.loop) return;
  pos = 0,
  next = e(s.sectionContainer + '[data-index=\'1\']')
} else pos = - 1 * 100 * index;
if ('function' == typeof s.beforeMove && s.beforeMove(next.data('index')), current.removeClass('active'), next.addClass('active'), 1 == s.pagination && (e('.onepage-pagination li a[data-index=\'' + index + '\']').removeClass('active'), e('.onepage-pagination li a[data-index=\'' + next.data('index') + '\']').addClass('active')), e('body') [0].className = e('body') [0].className.replace(/\bviewing-page-\d.*?\b/g, ''), e('body').addClass('viewing-page-' + next.data('index')), history.replaceState && 1 == s.updateURL) {
  var i = window.location.href.substr(0, window.location.href.indexOf('#')) + '#' + (index + 1);
  history.pushState({
  }, document.title, i)
}
t.transformPage(s, pos, next.data('index')),
setTimeout(function () {
  next.trigger('isActive')
}, 300)
},
e.fn.moveUp = function () {
var t = e(this);
if (index = e(s.sectionContainer + '.active').data('index'), current = e(s.sectionContainer + '[data-index=\'' + index + '\']'), next = e(s.sectionContainer + '[data-index=\'' + (index - 1) + '\']'), next.length < 1) {
  if (1 != s.loop) return;
  pos = - 1 * 100 * (total - 1),
  next = e(s.sectionContainer + '[data-index=\'' + total + '\']')
} else pos = - 1 * 100 * (next.data('index') - 1);
if ('function' == typeof s.beforeMove && s.beforeMove(next.data('index')), current.removeClass('active'), next.addClass('active'), 1 == s.pagination && (e('.onepage-pagination li a[data-index=\'' + index + '\']').removeClass('active'), e('.onepage-pagination li a[data-index=\'' + next.data('index') + '\']').addClass('active')), e('body') [0].className = e('body') [0].className.replace(/\bviewing-page-\d.*?\b/g, ''), e('body').addClass('viewing-page-' + next.data('index')), history.replaceState && 1 == s.updateURL) {
  var i = window.location.href.substr(0, window.location.href.indexOf('#')) + '#' + (index - 1);
  history.pushState({
  }, document.title, i)
}
t.transformPage(s, pos, next.data('index')),
setTimeout(function () {
  next.trigger('isActive')
}, 300)
},
e.fn.moveTo = function (t) {
if (current = e(s.sectionContainer + '.active'), next = e(s.sectionContainer + '[data-index=\'' + t + '\']'), next.length > 0) {
  if ('function' == typeof s.beforeMove && s.beforeMove(next.data('index')), current.removeClass('active'), next.addClass('active'), e('.onepage-pagination li a.active').removeClass('active'), e('.onepage-pagination li a[data-index=\'' + t + '\']').addClass('active'), e('body') [0].className = e('body') [0].className.replace(/\bviewing-page-\d.*?\b/g, ''), e('body').addClass('viewing-page-' + next.data('index')), pos = - 1 * 100 * (t - 1), history.replaceState && 1 == s.updateURL) {
    var i = window.location.href.substr(0, window.location.href.indexOf('#')) + '#' + (t - 1);
    history.pushState({
    }, document.title, i)
  }
  r.transformPage(s, pos, t),
  setTimeout(function () {
    next.trigger('isActive')
  }, 300)
}
},
r.addClass('onepage-wrapper').css('position', 'relative'),
e.each(a, function (t) {
e(this).css({
  position: 'absolute',
  top: topPos + '%'
}).addClass('section').attr('data-index', t + 1),
topPos += 100,
1 == s.pagination && (paginationList += '<li><a data-index=\'' + (t + 1) + '\' href=\'#' + (t + 1) + '\'></a></li>')
}),
r.swipeEvents().bind('swipeDown', function (t) {
e('body').hasClass('disabled-onepage-scroll') || t.preventDefault(),
r.moveUp()
}).bind('swipeUp', function (t) {
e('body').hasClass('disabled-onepage-scroll') || t.preventDefault(),
r.moveDown()
}),
1 == s.pagination && (e('<ul class=\'onepage-pagination\'>' + paginationList + '</ul>').prependTo('body'), posTop = - 1 * (r.find('.onepage-pagination').height() / 2), r.find('.onepage-pagination').css('margin-top', posTop)),
e(s.sectionContainer + '[data-index=\'1\']').addClass('active'),
e('body').addClass('viewing-page-1'),
1 == s.pagination && e('.onepage-pagination li a[data-index=\'1\']').addClass('active'),
1 == s.pagination && e('.onepage-pagination li a').click(function (t) {
t.preventDefault();
var i = e(this).data('index');
r.moveTo(i)
}),
e(document).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function (t) {
var i = e(this);
if (!i.data('pauseEvents')) {
  t.preventDefault();
  var n = t.originalEvent.wheelDelta || - t.originalEvent.detail;
  e('body').hasClass('disabled-onepage-scroll') || o(t, n)
}
}),
0 != s.responsiveFallback && (e(window).resize(function () {
n()
}), n()),
1 == s.keyboard && e(document).keydown(function (t) {
var i = t.target.tagName.toLowerCase();
if (!e('body').hasClass('disabled-onepage-scroll')) switch (t.which) {
  case 38:
    'input' != i && 'textarea' != i && r.moveUp();
    break;
  case 40:
    'input' != i && 'textarea' != i && r.moveDown();
    break;
  default:
    return
}
}), !1
}
}(window.jQuery),
_wAMD.define('vendor/jquery.onepage-scroll', [
'jquery'
], function () {
}),
_wAMD.define('public/vertical/shared/app', [
'backbone-all',
'jquery',
'vendor/jquery.onepage-scroll'
], function (e) {
var t = new e.Marionette.Application;
return t.addRegions({
menuRegion: '#menu-region',
loginRegion: '#login-region',
mainRegion: 'body',
headerRegion: '#header_panel',
featuresRegion: '#features_panel',
plansRegion: '#plans_panel',
footerRegion: '#footer_panel',
overlayBaseRegion: '#overlay_base_region',
overlayRegion: '#overlay_region',
fixturesRegion: '#fixture_region',
internalFooter: '#footer'
}),
e.Marionette.Region.prototype.open = function (e) {
e.template && this.$el.empty().append(e.el)
},
window.app = t,
t
}),
_wAMD.define('public/vertical/shared/views/FloatingMenu', [
'backbone',
'jquery',
'public/vertical/shared/app'
], function (e, t, i) {
var n = e.Marionette.ItemView.extend({
el: t('.menu-overlay'),
initialize: function () {
var e = this;
e.bindUIElements()
},
events: {
'click .btn-x': 'closeMenu',
'click .login-link': 'onLoginClick',
'click .signup-link': 'onSignupClick',
'click .themes-link': 'onThemesClick'
},
onShow: function () {
this.$el.fadeIn(400);
var e = this;
e.highlightActive(),
i.vent.on('key:escape', function () {
  e.closeMenu()
}),
i.vent.trigger('overlay:shown')
},
highlightActive: function () {
var e = t('body').data('pagename');
this.$el.find('[data-name=' + e + ']').addClass('active')
},
onLoginClick: function (e) {
var t = this;
e.preventDefault(),
t.$el.fadeOut(400, function () {
  i.vent.off('key:escape'),
  i.vent.trigger('menu:closed'),
  i.vent.trigger('login:open')
})
},
onThemesClick: function (e) {
var t = this;
e.preventDefault(),
t.$el.fadeOut(400, function () {
  i.vent.off('key:escape'),
  i.vent.trigger('menu:closed'),
  i.vent.trigger('themes:open')
})
},
onSignupClick: function (e) {
var t = this;
e.preventDefault(),
t.$el.fadeOut(400, function () {
  i.vent.off('key:escape'),
  i.vent.trigger('menu:closed'),
  i.vent.trigger('signup:open')
})
},
closeMenu: function (e) {
var t = this;
e && e.preventDefault(),
t.$el.fadeOut(400, function () {
  i.vent.off('key:escape'),
  i.vent.trigger('menu:closed')
})
}
});
return n
}),
function (e) {
!function (e, t) {
'object' == typeof exports && exports ? module.exports = t : 'function' == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define('public_legacy/mustache', t)  : e.Mustache = t
}(this, function () {
function e(e, t) {
return b.call(e, t)
}
function t(t) {
return !e(f, t)
}
function i(e) {
return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
}
function n(e) {
return String(e).replace(/[&<>"'\/]/g, function (e) {
  return _[e]
})
}
function o(e) {
this.string = e,
this.tail = e,
this.pos = 0
}
function s(e, t) {
this.view = e,
this.parent = t,
this._cache = {
}
}
function r() {
this.clearCache()
}
function a(e, t, i, n) {
for (var o, s, r, l = '', c = 0, u = e.length; u > c; ++c) switch (o = e[c], s = o[1], o[0]) {
  case '#':
    if (r = i.lookup(s), 'object' == typeof r) if (w(r)) for (var h = 0, p = r.length; p > h; ++h) l += a(o[4], t, i.push(r[h]), n);
     else r && (l += a(o[4], t, i.push(r), n));
     else if ('function' == typeof r) {
      var f = null == n ? null : n.slice(o[3], o[5]);
      r = r.call(i.view, f, function (e) {
        return t.render(e, i)
      }),
      null != r && (l += r)
    } else r && (l += a(o[4], t, i, n));
    break;
  case '^':
    r = i.lookup(s),
    (!r || w(r) && 0 === r.length) && (l += a(o[4], t, i, n));
    break;
  case '>':
    r = t.getPartial(s),
    'function' == typeof r && (l += r(i));
    break;
  case '&':
    r = i.lookup(s),
    null != r && (l += r);
    break;
  case 'name':
    r = i.lookup(s),
    null != r && (l += d.escape(r));
    break;
  case 'text':
    l += s
}
return l
}
function l(e) {
for (var t, i = [
], n = i, o = [
], s = 0, r = e.length; r > s; ++s) switch (t = e[s], t[0]) {
  case '#':
  case '^':
    o.push(t),
    n.push(t),
    n = t[4] = [
    ];
    break;
  case '/':
    var a = o.pop();
    a[5] = t[2],
    n = o.length > 0 ? o[o.length - 1][4] : i;
    break;
  default:
    n.push(t)
}
return i
}
function c(e) {
for (var t, i, n = [
], o = 0, s = e.length; s > o; ++o) t = e[o],
t && ('text' === t[0] && i && 'text' === i[0] ? (i[1] += t[1], i[3] = t[3])  : (i = t, n.push(t)));
return n
}
function u(e) {
return [new RegExp(i(e[0]) + '\\s*'),
new RegExp('\\s*' + i(e[1]))]
}
var d = {
};
d.name = 'mustache.js',
d.version = '0.7.2',
d.tags = [
'{{',
'}}'
],
d.Scanner = o,
d.Context = s,
d.Writer = r;
var h = /\s*/,
p = /\s+/,
f = /\S/,
m = /\s*=/,
g = /\s*\}/,
v = /#|\^|\/|>|\{|&|=|!/,
b = RegExp.prototype.test,
y = Object.prototype.toString,
w = Array.isArray || function (e) {
return '[object Array]' === y.call(e)
},
_ = {
'&': '&amp;',
'<': '&lt;',
'>': '&gt;',
'"': '&quot;',
'\'': '&#39;',
'/': '&#x2F;'
};
d.escape = n,
o.prototype.eos = function () {
return '' === this.tail
},
o.prototype.scan = function (e) {
var t = this.tail.match(e);
return t && 0 === t.index ? (this.tail = this.tail.substring(t[0].length), this.pos += t[0].length, t[0])  : ''
},
o.prototype.scanUntil = function (e) {
var t,
i = this.tail.search(e);
switch (i) {
  case - 1:
    t = this.tail,
    this.pos += this.tail.length,
    this.tail = '';
    break;
  case 0:
    t = '';
    break;
  default:
    t = this.tail.substring(0, i),
    this.tail = this.tail.substring(i),
    this.pos += i
}
return t
},
s.make = function (e) {
return e instanceof s ? e : new s(e)
},
s.prototype.push = function (e) {
return new s(e, this)
},
s.prototype.lookup = function (e) {
var t = this._cache[e];
if (!t) {
  if ('.' == e) t = this.view;
   else for (var i = this; i; ) {
    if (e.indexOf('.') > 0) {
      t = i.view;
      for (var n = e.split('.'), o = 0; t && o < n.length; ) t = t[n[o++]]
    } else t = i.view[e];
    if (null != t) break;
    i = i.parent
  }
  this._cache[e] = t
}
return 'function' == typeof t && (t = t.call(this.view)),
t
},
r.prototype.clearCache = function () {
this._cache = {
},
this._partialCache = {
}
},
r.prototype.compile = function (e, t) {
var i = this._cache[e];
if (!i) {
  var n = d.parse(e, t);
  i = this._cache[e] = this.compileTokens(n, e)
}
return i
},
r.prototype.compilePartial = function (e, t, i) {
var n = this.compile(t, i);
return this._partialCache[e] = n,
n
},
r.prototype.getPartial = function (e) {
return e in this._partialCache || !this._loadPartial || this.compilePartial(e, this._loadPartial(e)),
this._partialCache[e]
},
r.prototype.compileTokens = function (e, t) {
var i = this;
return function (n, o) {
  if (o) if ('function' == typeof o) i._loadPartial = o;
   else for (var r in o) i.compilePartial(r, o[r]);
  return a(e, i, s.make(n), t)
}
},
r.prototype.render = function (e, t, i) {
return this.compile(e) (t, i)
},
d.parse = function (e, n) {
function s() {
  if (M && !S) for (; x.length; ) delete k[x.pop()];
   else x = [
  ];
  M = !1,
  S = !1
}
if (e = e || '', n = n || d.tags, 'string' == typeof n && (n = n.split(p)), 2 !== n.length) throw new Error('Invalid tags: ' + n.join(', '));
for (var r, a, f, b, y, w = u(n), _ = new o(e), C = [
], k = [
], x = [
], M = !1, S = !1; !_.eos(); ) {
  if (r = _.pos, f = _.scanUntil(w[0])) for (var T = 0, A = f.length; A > T; ++T) b = f.charAt(T),
  t(b) ? x.push(k.length)  : S = !0,
  k.push(['text',
  b,
  r,
  r + 1]),
  r += 1,
  '\n' == b && s();
  if (!_.scan(w[0])) break;
  if (M = !0, a = _.scan(v) || 'name', _.scan(h), '=' === a ? (f = _.scanUntil(m), _.scan(m), _.scanUntil(w[1]))  : '{' === a ? (f = _.scanUntil(new RegExp('\\s*' + i('}' + n[1]))), _.scan(g), _.scanUntil(w[1]), a = '&')  : f = _.scanUntil(w[1]), !_.scan(w[1])) throw new Error('Unclosed tag at ' + _.pos);
  if (y = [
    a,
    f,
    r,
    _.pos
  ], k.push(y), '#' === a || '^' === a) C.push(y);
   else if ('/' === a) {
    if (0 === C.length) throw new Error('Unopened section "' + f + '" at ' + r);
    var D = C.pop();
    if (D[1] !== f) throw new Error('Unclosed section "' + D[1] + '" at ' + r)
  } else if ('name' === a || '{' === a || '&' === a) S = !0;
   else if ('=' === a) {
    if (n = f.split(p), 2 !== n.length) throw new Error('Invalid tags at ' + r + ': ' + n.join(', '));
    w = u(n)
  }
}
var D = C.pop();
if (D) throw new Error('Unclosed section "' + D[1] + '" at ' + _.pos);
return k = c(k),
l(k)
};
var C = new r;
return d.clearCache = function () {
return C.clearCache()
},
d.compile = function (e, t) {
return C.compile(e, t)
},
d.compilePartial = function (e, t, i) {
return C.compilePartial(e, t, i)
},
d.compileTokens = function (e, t) {
return C.compileTokens(e, t)
},
d.render = function (e, t, i) {
return C.render(e, t, i)
},
d.to_html = function (e, t, i, n) {
var o = d.render(e, t, i);
return 'function' != typeof n ? o : (n(o), void 0)
},
d
}()),
e.mustache = function (e, t, i) {
return Mustache.render(e, t, i)
},
e.fn.mustache = function (t, i) {
return e(this).map(function (n, o) {
var s = e.trim(e(o).html()),
r = e.mustache(s, t, i);
return e(r).get()
})
}
}(jQuery),
function (e) {
function t(e, t, i) {
switch (arguments.length) {
case 2:
  return null != e ? e : t;
case 3:
  return null != e ? e : null != t ? t : i;
default:
  throw new Error('Implement me')
}
}
function i() {
return {
empty: !1,
unusedTokens: [
],
unusedInput: [
],
overflow: - 2,
charsLeftOver: 0,
nullInput: !1,
invalidMonth: null,
invalidFormat: !1,
userInvalidated: !1,
iso: !1
}
}
function n(e) {
vt.suppressDeprecationWarnings === !1 && 'undefined' != typeof console && console.warn && console.warn('Deprecation warning: ' + e)
}
function o(e, t) {
var i = !0;
return d(function () {
return i && (n(e), i = !1),
t.apply(this, arguments)
}, t)
}
function s(e, t) {
pi[e] || (n(t), pi[e] = !0)
}
function r(e, t) {
return function (i) {
return f(e.call(this, i), t)
}
}
function a(e, t) {
return function (i) {
return this.localeData().ordinal(e.call(this, i), t)
}
}
function l() {
}
function c(e, t) {
t !== !1 && E(e),
h(this, e),
this._d = new Date( + e._d)
}
function u(e) {
var t = k(e),
i = t.year || 0,
n = t.quarter || 0,
o = t.month || 0,
s = t.week || 0,
r = t.day || 0,
a = t.hour || 0,
l = t.minute || 0,
c = t.second || 0,
u = t.millisecond || 0;
this._milliseconds = + u + 1000 * c + 60000 * l + 3600000 * a,
this._days = + r + 7 * s,
this._months = + o + 3 * n + 12 * i,
this._data = {
},
this._locale = vt.localeData(),
this._bubble()
}
function d(e, t) {
for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
return t.hasOwnProperty('toString') && (e.toString = t.toString),
t.hasOwnProperty('valueOf') && (e.valueOf = t.valueOf),
e
}
function h(e, t) {
var i,
n,
o;
if ('undefined' != typeof t._isAMomentObject && (e._isAMomentObject = t._isAMomentObject), 'undefined' != typeof t._i && (e._i = t._i), 'undefined' != typeof t._f && (e._f = t._f), 'undefined' != typeof t._l && (e._l = t._l), 'undefined' != typeof t._strict && (e._strict = t._strict), 'undefined' != typeof t._tzm && (e._tzm = t._tzm), 'undefined' != typeof t._isUTC && (e._isUTC = t._isUTC), 'undefined' != typeof t._offset && (e._offset = t._offset), 'undefined' != typeof t._pf && (e._pf = t._pf), 'undefined' != typeof t._locale && (e._locale = t._locale), Pt.length > 0) for (i in Pt) n = Pt[i],
o = t[n],
'undefined' != typeof o && (e[n] = o);
return e
}
function p(e) {
return 0 > e ? Math.ceil(e)  : Math.floor(e)
}
function f(e, t, i) {
for (var n = '' + Math.abs(e), o = e >= 0; n.length < t; ) n = '0' + n;
return (o ? i ? '+' : '' : '-') + n
}
function m(e, t) {
var i = {
milliseconds: 0,
months: 0
};
return i.months = t.month() - e.month() + 12 * (t.year() - e.year()),
e.clone().add(i.months, 'M').isAfter(t) && --i.months,
i.milliseconds = + t - + e.clone().add(i.months, 'M'),
i
}
function g(e, t) {
var i;
return t = I(t, e),
e.isBefore(t) ? i = m(e, t)  : (i = m(t, e), i.milliseconds = - i.milliseconds, i.months = - i.months),
i
}
function v(e, t) {
return function (i, n) {
var o,
r;
return null === n || isNaN( + n) || (s(t, 'moment().' + t + '(period, number) is deprecated. Please use moment().' + t + '(number, period).'), r = i, i = n, n = r),
i = 'string' == typeof i ? + i : i,
o = vt.duration(i, n),
b(this, o, e),
this
}
}
function b(e, t, i, n) {
var o = t._milliseconds,
s = t._days,
r = t._months;
n = null == n ? !0 : n,
o && e._d.setTime( + e._d + o * i),
s && dt(e, 'Date', ut(e, 'Date') + s * i),
r && ct(e, ut(e, 'Month') + r * i),
n && vt.updateOffset(e, s || r)
}
function y(e) {
return '[object Array]' === Object.prototype.toString.call(e)
}
function w(e) {
return '[object Date]' === Object.prototype.toString.call(e) || e instanceof Date
}
function _(e, t, i) {
var n,
o = Math.min(e.length, t.length),
s = Math.abs(e.length - t.length),
r = 0;
for (n = 0; o > n; n++) (i && e[n] !== t[n] || !i && M(e[n]) !== M(t[n])) && r++;
return r + s
}
function C(e) {
if (e) {
var t = e.toLowerCase().replace(/(.)s$/, '$1');
e = ri[e] || ai[t] || t
}
return e
}
function k(e) {
var t,
i,
n = {
};
for (i in e) e.hasOwnProperty(i) && (t = C(i), t && (n[t] = e[i]));
return n
}
function x(t) {
var i,
n;
if (0 === t.indexOf('week')) i = 7,
n = 'day';
 else {
if (0 !== t.indexOf('month')) return;
i = 12,
n = 'month'
}
vt[t] = function (o, s) {
var r,
a,
l = vt._locale[t],
c = [
];
if ('number' == typeof o && (s = o, o = e), a = function (e) {
  var t = vt().utc().set(n, e);
  return l.call(vt._locale, t, o || '')
}, null != s) return a(s);
for (r = 0; i > r; r++) c.push(a(r));
return c
}
}
function M(e) {
var t = + e,
i = 0;
return 0 !== t && isFinite(t) && (i = t >= 0 ? Math.floor(t)  : Math.ceil(t)),
i
}
function S(e, t) {
return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
}
function T(e, t, i) {
return st(vt([e,
11,
31 + t - i]), t, i).week
}
function A(e) {
return D(e) ? 366 : 365
}
function D(e) {
return 0 === e % 4 && 0 !== e % 100 || 0 === e % 400
}
function E(e) {
var t;
e._a && - 2 === e._pf.overflow && (t = e._a[xt] < 0 || e._a[xt] > 11 ? xt : e._a[Mt] < 1 || e._a[Mt] > S(e._a[kt], e._a[xt]) ? Mt : e._a[St] < 0 || e._a[St] > 23 ? St : e._a[Tt] < 0 || e._a[Tt] > 59 ? Tt : e._a[At] < 0 || e._a[At] > 59 ? At : e._a[Dt] < 0 || e._a[Dt] > 999 ? Dt : - 1, e._pf._overflowDayOfYear && (kt > t || t > Mt) && (t = Mt), e._pf.overflow = t)
}
function P(e) {
return null == e._isValid && (e._isValid = !isNaN(e._d.getTime()) && e._pf.overflow < 0 && !e._pf.empty && !e._pf.invalidMonth && !e._pf.nullInput && !e._pf.invalidFormat && !e._pf.userInvalidated, e._strict && (e._isValid = e._isValid && 0 === e._pf.charsLeftOver && 0 === e._pf.unusedTokens.length)),
e._isValid
}
function R(e) {
return e ? e.toLowerCase().replace('_', '-')  : e
}
function O(e) {
for (var t, i, n, o, s = 0; s < e.length; ) {
for (o = R(e[s]).split('-'), t = o.length, i = R(e[s + 1]), i = i ? i.split('-')  : null; t > 0; ) {
  if (n = F(o.slice(0, t).join('-'))) return n;
  if (i && i.length >= t && _(o, i, !0) >= t - 1) break;
  t--
}
s++
}
return null
}
function F(e) {
var t = null;
if (!Et[e] && Rt) try {
t = vt.locale(),
require('./locale/' + e),
vt.locale(t)
} catch (i) {
}
return Et[e]
}
function I(e, t) {
return t._isUTC ? vt(e).zone(t._offset || 0)  : vt(e).local()
}
function W(e) {
return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, '')  : e.replace(/\\/g, '')
}
function N(e) {
var t,
i,
n = e.match(Wt);
for (t = 0, i = n.length; i > t; t++) n[t] = hi[n[t]] ? hi[n[t]] : W(n[t]);
return function (o) {
var s = '';
for (t = 0; i > t; t++) s += n[t] instanceof Function ? n[t].call(o, e)  : n[t];
return s
}
}
function z(e, t) {
return e.isValid() ? (t = L(t, e.localeData()), li[t] || (li[t] = N(t)), li[t](e))  : e.localeData().invalidDate()
}
function L(e, t) {
function i(e) {
return t.longDateFormat(e) || e
}
var n = 5;
for (Nt.lastIndex = 0; n >= 0 && Nt.test(e); ) e = e.replace(Nt, i),
Nt.lastIndex = 0,
n -= 1;
return e
}
function B(e, t) {
var i,
n = t._strict;
switch (e) {
case 'Q':
  return Gt;
case 'DDDD':
  return Jt;
case 'YYYY':
case 'GGGG':
case 'gggg':
  return n ? Qt : Bt;
case 'Y':
case 'G':
case 'g':
  return Zt;
case 'YYYYYY':
case 'YYYYY':
case 'GGGGG':
case 'ggggg':
  return n ? Kt : Ht;
case 'S':
  if (n) return Gt;
case 'SS':
  if (n) return Xt;
case 'SSS':
  if (n) return Jt;
case 'DDD':
  return Lt;
case 'MMM':
case 'MMMM':
case 'dd':
case 'ddd':
case 'dddd':
  return jt;
case 'a':
case 'A':
  return t._locale._meridiemParse;
case 'X':
  return Ut;
case 'Z':
case 'ZZ':
  return qt;
case 'T':
  return Vt;
case 'SSSS':
  return $t;
case 'MM':
case 'DD':
case 'YY':
case 'GG':
case 'gg':
case 'HH':
case 'hh':
case 'mm':
case 'ss':
case 'ww':
case 'WW':
  return n ? Xt : zt;
case 'M':
case 'D':
case 'd':
case 'H':
case 'h':
case 'm':
case 's':
case 'w':
case 'W':
case 'e':
case 'E':
  return zt;
case 'Do':
  return Yt;
default:
  return i = new RegExp(X(G(e.replace('\\', '')), 'i'))
}
}
function H(e) {
e = e || '';
var t = e.match(qt) || [],
i = t[t.length - 1] || [],
n = (i + '').match(oi) || ['-',
0,
0],
o = + (60 * n[1]) + M(n[2]);
return '+' === n[0] ? - o : o
}
function $(e, t, i) {
var n,
o = i._a;
switch (e) {
case 'Q':
  null != t && (o[xt] = 3 * (M(t) - 1));
  break;
case 'M':
case 'MM':
  null != t && (o[xt] = M(t) - 1);
  break;
case 'MMM':
case 'MMMM':
  n = i._locale.monthsParse(t),
  null != n ? o[xt] = n : i._pf.invalidMonth = t;
  break;
case 'D':
case 'DD':
  null != t && (o[Mt] = M(t));
  break;
case 'Do':
  null != t && (o[Mt] = M(parseInt(t, 10)));
  break;
case 'DDD':
case 'DDDD':
  null != t && (i._dayOfYear = M(t));
  break;
case 'YY':
  o[kt] = vt.parseTwoDigitYear(t);
  break;
case 'YYYY':
case 'YYYYY':
case 'YYYYYY':
  o[kt] = M(t);
  break;
case 'a':
case 'A':
  i._isPm = i._locale.isPM(t);
  break;
case 'H':
case 'HH':
case 'h':
case 'hh':
  o[St] = M(t);
  break;
case 'm':
case 'mm':
  o[Tt] = M(t);
  break;
case 's':
case 'ss':
  o[At] = M(t);
  break;
case 'S':
case 'SS':
case 'SSS':
case 'SSSS':
  o[Dt] = M(1000 * ('0.' + t));
  break;
case 'X':
  i._d = new Date(1000 * parseFloat(t));
  break;
case 'Z':
case 'ZZ':
  i._useUTC = !0,
  i._tzm = H(t);
  break;
case 'dd':
case 'ddd':
case 'dddd':
  n = i._locale.weekdaysParse(t),
  null != n ? (i._w = i._w || {
  }, i._w.d = n)  : i._pf.invalidWeekday = t;
  break;
case 'w':
case 'ww':
case 'W':
case 'WW':
case 'd':
case 'e':
case 'E':
  e = e.substr(0, 1);
case 'gggg':
case 'GGGG':
case 'GGGGG':
  e = e.substr(0, 2),
  t && (i._w = i._w || {
  }, i._w[e] = M(t));
  break;
case 'gg':
case 'GG':
  i._w = i._w || {
  },
  i._w[e] = vt.parseTwoDigitYear(t)
}
}
function j(e) {
var i,
n,
o,
s,
r,
a,
l;
i = e._w,
null != i.GG || null != i.W || null != i.E ? (r = 1, a = 4, n = t(i.GG, e._a[kt], st(vt(), 1, 4).year), o = t(i.W, 1), s = t(i.E, 1))  : (r = e._locale._week.dow, a = e._locale._week.doy, n = t(i.gg, e._a[kt], st(vt(), r, a).year), o = t(i.w, 1), null != i.d ? (s = i.d, r > s && ++o)  : s = null != i.e ? i.e + r : r),
l = rt(n, o, s, a, r),
e._a[kt] = l.year,
e._dayOfYear = l.dayOfYear
}
function q(e) {
var i,
n,
o,
s,
r = [
];
if (!e._d) {
for (o = U(e), e._w && null == e._a[Mt] && null == e._a[xt] && j(e), e._dayOfYear && (s = t(e._a[kt], o[kt]), e._dayOfYear > A(s) && (e._pf._overflowDayOfYear = !0), n = tt(s, 0, e._dayOfYear), e._a[xt] = n.getUTCMonth(), e._a[Mt] = n.getUTCDate()), i = 0; 3 > i && null == e._a[i]; ++i) e._a[i] = r[i] = o[i];
for (; 7 > i; i++) e._a[i] = r[i] = null == e._a[i] ? 2 === i ? 1 : 0 : e._a[i];
e._d = (e._useUTC ? tt : et).apply(null, r),
null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() + e._tzm)
}
}
function V(e) {
var t;
e._d || (t = k(e._i), e._a = [
t.year,
t.month,
t.day,
t.hour,
t.minute,
t.second,
t.millisecond
], q(e))
}
function U(e) {
var t = new Date;
return e._useUTC ? [
t.getUTCFullYear(),
t.getUTCMonth(),
t.getUTCDate()
] : [
t.getFullYear(),
t.getMonth(),
t.getDate()
]
}
function Y(e) {
if (e._f === vt.ISO_8601) return Q(e),
void 0;
e._a = [
],
e._pf.empty = !0;
var t,
i,
n,
o,
s,
r = '' + e._i,
a = r.length,
l = 0;
for (n = L(e._f, e._locale).match(Wt) || [], t = 0; t < n.length; t++) o = n[t],
i = (r.match(B(o, e)) || []) [0],
i && (s = r.substr(0, r.indexOf(i)), s.length > 0 && e._pf.unusedInput.push(s), r = r.slice(r.indexOf(i) + i.length), l += i.length),
hi[o] ? (i ? e._pf.empty = !1 : e._pf.unusedTokens.push(o), $(o, i, e))  : e._strict && !i && e._pf.unusedTokens.push(o);
e._pf.charsLeftOver = a - l,
r.length > 0 && e._pf.unusedInput.push(r),
e._isPm && e._a[St] < 12 && (e._a[St] += 12),
e._isPm === !1 && 12 === e._a[St] && (e._a[St] = 0),
q(e),
E(e)
}
function G(e) {
return e.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, i, n, o) {
return t || i || n || o
})
}
function X(e) {
return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}
function J(e) {
var t,
n,
o,
s,
r;
if (0 === e._f.length) return e._pf.invalidFormat = !0,
e._d = new Date(0 / 0),
void 0;
for (s = 0; s < e._f.length; s++) r = 0,
t = h({
}, e),
t._pf = i(),
t._f = e._f[s],
Y(t),
P(t) && (r += t._pf.charsLeftOver, r += 10 * t._pf.unusedTokens.length, t._pf.score = r, (null == o || o > r) && (o = r, n = t));
d(e, n || t)
}
function Q(e) {
var t,
i,
n = e._i,
o = ei.exec(n);
if (o) {
for (e._pf.iso = !0, t = 0, i = ii.length; i > t; t++) if (ii[t][1].exec(n)) {
  e._f = ii[t][0] + (o[6] || ' ');
  break
}
for (t = 0, i = ni.length; i > t; t++) if (ni[t][1].exec(n)) {
  e._f += ni[t][0];
  break
}
n.match(qt) && (e._f += 'Z'),
Y(e)
} else e._isValid = !1
}
function K(e) {
Q(e),
e._isValid === !1 && (delete e._isValid, vt.createFromInputFallback(e))
}
function Z(t) {
var i,
n = t._i;
n === e ? t._d = new Date : w(n) ? t._d = new Date( + n)  : null !== (i = Ot.exec(n)) ? t._d = new Date( + i[1])  : 'string' == typeof n ? K(t)  : y(n) ? (t._a = n.slice(0), q(t))  : 'object' == typeof n ? V(t)  : 'number' == typeof n ? t._d = new Date(n)  : vt.createFromInputFallback(t)
}
function et(e, t, i, n, o, s, r) {
var a = new Date(e, t, i, n, o, s, r);
return 1970 > e && a.setFullYear(e),
a
}
function tt(e) {
var t = new Date(Date.UTC.apply(null, arguments));
return 1970 > e && t.setUTCFullYear(e),
t
}
function it(e, t) {
if ('string' == typeof e) if (isNaN(e)) {
if (e = t.weekdaysParse(e), 'number' != typeof e) return null
} else e = parseInt(e, 10);
return e
}
function nt(e, t, i, n, o) {
return o.relativeTime(t || 1, !!i, e, n)
}
function ot(e, t, i) {
var n = vt.duration(e).abs(),
o = Ct(n.as('s')),
s = Ct(n.as('m')),
r = Ct(n.as('h')),
a = Ct(n.as('d')),
l = Ct(n.as('M')),
c = Ct(n.as('y')),
u = o < ci.s && ['s',
o] || 1 === s && ['m'] || s < ci.m && ['mm',
s] || 1 === r && ['h'] || r < ci.h && ['hh',
r] || 1 === a && ['d'] || a < ci.d && ['dd',
a] || 1 === l && ['M'] || l < ci.M && ['MM',
l] || 1 === c && ['y'] || ['yy',
c];
return u[2] = t,
u[3] = + e > 0,
u[4] = i,
nt.apply({
}, u)
}
function st(e, t, i) {
var n,
o = i - t,
s = i - e.day();
return s > o && (s -= 7),
o - 7 > s && (s += 7),
n = vt(e).add(s, 'd'),
{
week: Math.ceil(n.dayOfYear() / 7),
year: n.year()
}
}
function rt(e, t, i, n, o) {
var s,
r,
a = tt(e, 0, 1).getUTCDay();
return a = 0 === a ? 7 : a,
i = null != i ? i : o,
s = o - a + (a > n ? 7 : 0) - (o > a ? 7 : 0),
r = 7 * (t - 1) + (i - o) + s + 1,
{
year: r > 0 ? e : e - 1,
dayOfYear: r > 0 ? r : A(e - 1) + r
}
}
function at(t) {
var i = t._i,
n = t._f;
return t._locale = t._locale || vt.localeData(t._l),
null === i || n === e && '' === i ? vt.invalid({
nullInput: !0
})  : ('string' == typeof i && (t._i = i = t._locale.preparse(i)), vt.isMoment(i) ? new c(i, !0)  : (n ? y(n) ? J(t)  : Y(t)  : Z(t), new c(t)))
}
function lt(e, t) {
var i,
n;
if (1 === t.length && y(t[0]) && (t = t[0]), !t.length) return vt();
for (i = t[0], n = 1; n < t.length; ++n) t[n][e](i) && (i = t[n]);
return i
}
function ct(e, t) {
var i;
return 'string' == typeof t && (t = e.localeData().monthsParse(t), 'number' != typeof t) ? e : (i = Math.min(e.date(), S(e.year(), t)), e._d['set' + (e._isUTC ? 'UTC' : '') + 'Month'](t, i), e)
}
function ut(e, t) {
return e._d['get' + (e._isUTC ? 'UTC' : '') + t]()
}
function dt(e, t, i) {
return 'Month' === t ? ct(e, i)  : e._d['set' + (e._isUTC ? 'UTC' : '') + t](i)
}
function ht(e, t) {
return function (i) {
return null != i ? (dt(this, e, i), vt.updateOffset(this, t), this)  : ut(this, e)
}
}
function pt(e) {
return 400 * e / 146097
}
function ft(e) {
return 146097 * e / 400
}
function mt(e) {
vt.duration.fn[e] = function () {
return this._data[e]
}
}
function gt(e) {
'undefined' == typeof ender && (bt = _t.moment, _t.moment = e ? o('Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.', vt)  : vt)
}
for (var vt, bt, yt, wt = '2.8.1', _t = 'undefined' != typeof global ? global : this, Ct = Math.round, kt = 0, xt = 1, Mt = 2, St = 3, Tt = 4, At = 5, Dt = 6, Et = {
}, Pt = [
], Rt = 'undefined' != typeof module && module.exports, Ot = /^\/?Date\((\-?\d+)/i, Ft = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, It = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Wt = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, Nt = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, zt = /\d\d?/, Lt = /\d{1,3}/, Bt = /\d{1,4}/, Ht = /[+\-]?\d{1,6}/, $t = /\d+/, jt = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, qt = /Z|[\+\-]\d\d:?\d\d/gi, Vt = /T/i, Ut = /[\+\-]?\d+(\.\d{1,3})?/, Yt = /\d{1,2}/, Gt = /\d/, Xt = /\d\d/, Jt = /\d{3}/, Qt = /\d{4}/, Kt = /[+-]?\d{6}/, Zt = /[+-]?\d+/, ei = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ti = 'YYYY-MM-DDTHH:mm:ssZ', ii = [
['YYYYYY-MM-DD',
/[+-]\d{6}-\d{2}-\d{2}/],
[
'YYYY-MM-DD',
/\d{4}-\d{2}-\d{2}/
],
[
'GGGG-[W]WW-E',
/\d{4}-W\d{2}-\d/
],
[
'GGGG-[W]WW',
/\d{4}-W\d{2}/
],
[
'YYYY-DDD',
/\d{4}-\d{3}/
]
], ni = [
['HH:mm:ss.SSSS',
/(T| )\d\d:\d\d:\d\d\.\d+/],
[
'HH:mm:ss',
/(T| )\d\d:\d\d:\d\d/
],
[
'HH:mm',
/(T| )\d\d:\d\d/
],
[
'HH',
/(T| )\d\d/
]
], oi = /([\+\-]|\d\d)/gi, si = ('Date|Hours|Minutes|Seconds|Milliseconds'.split('|'), {
Milliseconds: 1,
Seconds: 1000,
Minutes: 60000,
Hours: 3600000,
Days: 86400000,
Months: 2592000000,
Years: 31536000000
}), ri = {
ms: 'millisecond',
s: 'second',
m: 'minute',
h: 'hour',
d: 'day',
D: 'date',
w: 'week',
W: 'isoWeek',
M: 'month',
Q: 'quarter',
y: 'year',
DDD: 'dayOfYear',
e: 'weekday',
E: 'isoWeekday',
gg: 'weekYear',
GG: 'isoWeekYear'
}, ai = {
dayofyear: 'dayOfYear',
isoweekday: 'isoWeekday',
isoweek: 'isoWeek',
weekyear: 'weekYear',
isoweekyear: 'isoWeekYear'
}, li = {
}, ci = {
s: 45,
m: 45,
h: 22,
d: 26,
M: 11
}, ui = 'DDD w W M D d'.split(' '), di = 'M D H h m s w W'.split(' '), hi = {
M: function () {
return this.month() + 1
},
MMM: function (e) {
return this.localeData().monthsShort(this, e)
},
MMMM: function (e) {
return this.localeData().months(this, e)
},
D: function () {
return this.date()
},
DDD: function () {
return this.dayOfYear()
},
d: function () {
return this.day()
},
dd: function (e) {
return this.localeData().weekdaysMin(this, e)
},
ddd: function (e) {
return this.localeData().weekdaysShort(this, e)
},
dddd: function (e) {
return this.localeData().weekdays(this, e)
},
w: function () {
return this.week()
},
W: function () {
return this.isoWeek()
},
YY: function () {
return f(this.year() % 100, 2)
},
YYYY: function () {
return f(this.year(), 4)
},
YYYYY: function () {
return f(this.year(), 5)
},
YYYYYY: function () {
var e = this.year(),
t = e >= 0 ? '+' : '-';
return t + f(Math.abs(e), 6)
},
gg: function () {
return f(this.weekYear() % 100, 2)
},
gggg: function () {
return f(this.weekYear(), 4)
},
ggggg: function () {
return f(this.weekYear(), 5)
},
GG: function () {
return f(this.isoWeekYear() % 100, 2)
},
GGGG: function () {
return f(this.isoWeekYear(), 4)
},
GGGGG: function () {
return f(this.isoWeekYear(), 5)
},
e: function () {
return this.weekday()
},
E: function () {
return this.isoWeekday()
},
a: function () {
return this.localeData().meridiem(this.hours(), this.minutes(), !0)
},
A: function () {
return this.localeData().meridiem(this.hours(), this.minutes(), !1)
},
H: function () {
return this.hours()
},
h: function () {
return this.hours() % 12 || 12
},
m: function () {
return this.minutes()
},
s: function () {
return this.seconds()
},
S: function () {
return M(this.milliseconds() / 100)
},
SS: function () {
return f(M(this.milliseconds() / 10), 2)
},
SSS: function () {
return f(this.milliseconds(), 3)
},
SSSS: function () {
return f(this.milliseconds(), 3)
},
Z: function () {
var e = - this.zone(),
t = '+';
return 0 > e && (e = - e, t = '-'),
t + f(M(e / 60), 2) + ':' + f(M(e) % 60, 2)
},
ZZ: function () {
var e = - this.zone(),
t = '+';
return 0 > e && (e = - e, t = '-'),
t + f(M(e / 60), 2) + f(M(e) % 60, 2)
},
z: function () {
return this.zoneAbbr()
},
zz: function () {
return this.zoneName()
},
X: function () {
return this.unix()
},
Q: function () {
return this.quarter()
}
}, pi = {
}, fi = [
'months',
'monthsShort',
'weekdays',
'weekdaysShort',
'weekdaysMin'
]; ui.length; ) yt = ui.pop(),
hi[yt + 'o'] = a(hi[yt], yt);
for (; di.length; ) yt = di.pop(),
hi[yt + yt] = r(hi[yt], 2);
hi.DDDD = r(hi.DDD, 3),
d(l.prototype, {
set: function (e) {
var t,
i;
for (i in e) t = e[i],
'function' == typeof t ? this[i] = t : this['_' + i] = t
},
_months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
months: function (e) {
return this._months[e.month()]
},
_monthsShort: 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
monthsShort: function (e) {
return this._monthsShort[e.month()]
},
monthsParse: function (e) {
var t,
i,
n;
for (this._monthsParse || (this._monthsParse = [
]), t = 0; 12 > t; t++) if (this._monthsParse[t] || (i = vt.utc([2000,
t]), n = '^' + this.months(i, '') + '|^' + this.monthsShort(i, ''), this._monthsParse[t] = new RegExp(n.replace('.', ''), 'i')), this._monthsParse[t].test(e)) return t
},
_weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
weekdays: function (e) {
return this._weekdays[e.day()]
},
_weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
weekdaysShort: function (e) {
return this._weekdaysShort[e.day()]
},
_weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
weekdaysMin: function (e) {
return this._weekdaysMin[e.day()]
},
weekdaysParse: function (e) {
var t,
i,
n;
for (this._weekdaysParse || (this._weekdaysParse = [
]), t = 0; 7 > t; t++) if (this._weekdaysParse[t] || (i = vt([2000,
1]).day(t), n = '^' + this.weekdays(i, '') + '|^' + this.weekdaysShort(i, '') + '|^' + this.weekdaysMin(i, ''), this._weekdaysParse[t] = new RegExp(n.replace('.', ''), 'i')), this._weekdaysParse[t].test(e)) return t
},
_longDateFormat: {
LT: 'h:mm A',
L: 'MM/DD/YYYY',
LL: 'MMMM D, YYYY',
LLL: 'MMMM D, YYYY LT',
LLLL: 'dddd, MMMM D, YYYY LT'
},
longDateFormat: function (e) {
var t = this._longDateFormat[e];
return !t && this._longDateFormat[e.toUpperCase()] && (t = this._longDateFormat[e.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (e) {
  return e.slice(1)
}), this._longDateFormat[e] = t),
t
},
isPM: function (e) {
return 'p' === (e + '').toLowerCase().charAt(0)
},
_meridiemParse: /[ap]\.?m?\.?/i,
meridiem: function (e, t, i) {
return e > 11 ? i ? 'pm' : 'PM' : i ? 'am' : 'AM'
},
_calendar: {
sameDay: '[Today at] LT',
nextDay: '[Tomorrow at] LT',
nextWeek: 'dddd [at] LT',
lastDay: '[Yesterday at] LT',
lastWeek: '[Last] dddd [at] LT',
sameElse: 'L'
},
calendar: function (e, t) {
var i = this._calendar[e];
return 'function' == typeof i ? i.apply(t)  : i
},
_relativeTime: {
future: 'in %s',
past: '%s ago',
s: 'a few seconds',
m: 'a minute',
mm: '%d minutes',
h: 'an hour',
hh: '%d hours',
d: 'a day',
dd: '%d days',
M: 'a month',
MM: '%d months',
y: 'a year',
yy: '%d years'
},
relativeTime: function (e, t, i, n) {
var o = this._relativeTime[i];
return 'function' == typeof o ? o(e, t, i, n)  : o.replace(/%d/i, e)
},
pastFuture: function (e, t) {
var i = this._relativeTime[e > 0 ? 'future' : 'past'];
return 'function' == typeof i ? i(t)  : i.replace(/%s/i, t)
},
ordinal: function (e) {
return this._ordinal.replace('%d', e)
},
_ordinal: '%d',
preparse: function (e) {
return e
},
postformat: function (e) {
return e
},
week: function (e) {
return st(e, this._week.dow, this._week.doy).week
},
_week: {
dow: 0,
doy: 6
},
_invalidDate: 'Invalid date',
invalidDate: function () {
return this._invalidDate
}
}),
vt = function (t, n, o, s) {
var r;
return 'boolean' == typeof o && (s = o, o = e),
r = {
},
r._isAMomentObject = !0,
r._i = t,
r._f = n,
r._l = o,
r._strict = s,
r._isUTC = !1,
r._pf = i(),
at(r)
},
vt.suppressDeprecationWarnings = !1,
vt.createFromInputFallback = o('moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.', function (e) {
e._d = new Date(e._i)
}),
vt.min = function () {
var e = [
].slice.call(arguments, 0);
return lt('isBefore', e)
},
vt.max = function () {
var e = [
].slice.call(arguments, 0);
return lt('isAfter', e)
},
vt.utc = function (t, n, o, s) {
var r;
return 'boolean' == typeof o && (s = o, o = e),
r = {
},
r._isAMomentObject = !0,
r._useUTC = !0,
r._isUTC = !0,
r._l = o,
r._i = t,
r._f = n,
r._strict = s,
r._pf = i(),
at(r).utc()
},
vt.unix = function (e) {
return vt(1000 * e)
},
vt.duration = function (e, t) {
var i,
n,
o,
s,
r = e,
a = null;
return vt.isDuration(e) ? r = {
ms: e._milliseconds,
d: e._days,
M: e._months
}
 : 'number' == typeof e ? (r = {
}, t ? r[t] = e : r.milliseconds = e)  : (a = Ft.exec(e)) ? (i = '-' === a[1] ? - 1 : 1, r = {
y: 0,
d: M(a[Mt]) * i,
h: M(a[St]) * i,
m: M(a[Tt]) * i,
s: M(a[At]) * i,
ms: M(a[Dt]) * i
})  : (a = It.exec(e)) ? (i = '-' === a[1] ? - 1 : 1, o = function (e) {
var t = e && parseFloat(e.replace(',', '.'));
return (isNaN(t) ? 0 : t) * i
}, r = {
y: o(a[2]),
M: o(a[3]),
d: o(a[4]),
h: o(a[5]),
m: o(a[6]),
s: o(a[7]),
w: o(a[8])
})  : 'object' == typeof r && ('from' in r || 'to' in r) && (s = g(vt(r.from), vt(r.to)), r = {
}, r.ms = s.milliseconds, r.M = s.months),
n = new u(r),
vt.isDuration(e) && e.hasOwnProperty('_locale') && (n._locale = e._locale),
n
},
vt.version = wt,
vt.defaultFormat = ti,
vt.ISO_8601 = function () {
},
vt.momentProperties = Pt,
vt.updateOffset = function () {
},
vt.relativeTimeThreshold = function (t, i) {
return ci[t] === e ? !1 : i === e ? ci[t] : (ci[t] = i, !0)
},
vt.lang = o('moment.lang is deprecated. Use moment.locale instead.', function (e, t) {
return vt.locale(e, t)
}),
vt.locale = function (e, t) {
var i;
return e && (i = 'undefined' != typeof t ? vt.defineLocale(e, t)  : vt.localeData(e), i && (vt.duration._locale = vt._locale = i)),
vt._locale._abbr
},
vt.defineLocale = function (e, t) {
return null !== t ? (t.abbr = e, Et[e] || (Et[e] = new l), Et[e].set(t), vt.locale(e), Et[e])  : (delete Et[e], null)
},
vt.langData = o('moment.langData is deprecated. Use moment.localeData instead.', function (e) {
return vt.localeData(e)
}),
vt.localeData = function (e) {
var t;
if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return vt._locale;
if (!y(e)) {
if (t = F(e)) return t;
e = [
  e
]
}
return O(e)
},
vt.isMoment = function (e) {
return e instanceof c || null != e && e.hasOwnProperty('_isAMomentObject')
},
vt.isDuration = function (e) {
return e instanceof u
};
for (yt = fi.length - 1; yt >= 0; --yt) x(fi[yt]);
vt.normalizeUnits = function (e) {
return C(e)
},
vt.invalid = function (e) {
var t = vt.utc(0 / 0);
return null != e ? d(t._pf, e)  : t._pf.userInvalidated = !0,
t
},
vt.parseZone = function () {
return vt.apply(null, arguments).parseZone()
},
vt.parseTwoDigitYear = function (e) {
return M(e) + (M(e) > 68 ? 1900 : 2000)
},
d(vt.fn = c.prototype, {
clone: function () {
return vt(this)
},
valueOf: function () {
return + this._d + 60000 * (this._offset || 0)
},
unix: function () {
return Math.floor( + this / 1000)
},
toString: function () {
return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
},
toDate: function () {
return this._offset ? new Date( + this)  : this._d
},
toISOString: function () {
var e = vt(this).utc();
return 0 < e.year() && e.year() <= 9999 ? z(e, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]')  : z(e, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]')
},
toArray: function () {
var e = this;
return [e.year(),
e.month(),
e.date(),
e.hours(),
e.minutes(),
e.seconds(),
e.milliseconds()]
},
isValid: function () {
return P(this)
},
isDSTShifted: function () {
return this._a ? this.isValid() && _(this._a, (this._isUTC ? vt.utc(this._a)  : vt(this._a)).toArray()) > 0 : !1
},
parsingFlags: function () {
return d({
}, this._pf)
},
invalidAt: function () {
return this._pf.overflow
},
utc: function (e) {
return this.zone(0, e)
},
local: function (e) {
return this._isUTC && (this.zone(0, e), this._isUTC = !1, e && this.add(this._d.getTimezoneOffset(), 'm')),
this
},
format: function (e) {
var t = z(this, e || vt.defaultFormat);
return this.localeData().postformat(t)
},
add: v(1, 'add'),
subtract: v( - 1, 'subtract'),
diff: function (e, t, i) {
var n,
o,
s = I(e, this),
r = 60000 * (this.zone() - s.zone());
return t = C(t),
'year' === t || 'month' === t ? (n = 43200000 * (this.daysInMonth() + s.daysInMonth()), o = 12 * (this.year() - s.year()) + (this.month() - s.month()), o += (this - vt(this).startOf('month') - (s - vt(s).startOf('month'))) / n, o -= 60000 * (this.zone() - vt(this).startOf('month').zone() - (s.zone() - vt(s).startOf('month').zone())) / n, 'year' === t && (o /= 12))  : (n = this - s, o = 'second' === t ? n / 1000 : 'minute' === t ? n / 60000 : 'hour' === t ? n / 3600000 : 'day' === t ? (n - r) / 86400000 : 'week' === t ? (n - r) / 604800000 : n),
i ? o : p(o)
},
from: function (e, t) {
return vt.duration({
  to: this,
  from: e
}).locale(this.locale()).humanize(!t)
},
fromNow: function (e) {
return this.from(vt(), e)
},
calendar: function (e) {
var t = e || vt(),
i = I(t, this).startOf('day'),
n = this.diff(i, 'days', !0),
o = - 6 > n ? 'sameElse' : - 1 > n ? 'lastWeek' : 0 > n ? 'lastDay' : 1 > n ? 'sameDay' : 2 > n ? 'nextDay' : 7 > n ? 'nextWeek' : 'sameElse';
return this.format(this.localeData().calendar(o, this))
},
isLeapYear: function () {
return D(this.year())
},
isDST: function () {
return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
},
day: function (e) {
var t = this._isUTC ? this._d.getUTCDay()  : this._d.getDay();
return null != e ? (e = it(e, this.localeData()), this.add(e - t, 'd'))  : t
},
month: ht('Month', !0),
startOf: function (e) {
switch (e = C(e)) {
  case 'year':
    this.month(0);
  case 'quarter':
  case 'month':
    this.date(1);
  case 'week':
  case 'isoWeek':
  case 'day':
    this.hours(0);
  case 'hour':
    this.minutes(0);
  case 'minute':
    this.seconds(0);
  case 'second':
    this.milliseconds(0)
}
return 'week' === e ? this.weekday(0)  : 'isoWeek' === e && this.isoWeekday(1),
'quarter' === e && this.month(3 * Math.floor(this.month() / 3)),
this
},
endOf: function (e) {
return e = C(e),
this.startOf(e).add(1, 'isoWeek' === e ? 'week' : e).subtract(1, 'ms')
},
isAfter: function (e, t) {
return t = 'undefined' != typeof t ? t : 'millisecond',
+ this.clone().startOf(t) > + vt(e).startOf(t)
},
isBefore: function (e, t) {
return t = 'undefined' != typeof t ? t : 'millisecond',
+ this.clone().startOf(t) < + vt(e).startOf(t)
},
isSame: function (e, t) {
return t = t || 'ms',
+ this.clone().startOf(t) === + I(e, this).startOf(t)
},
min: o('moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function (e) {
return e = vt.apply(null, arguments),
this > e ? this : e
}),
max: o('moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function (e) {
return e = vt.apply(null, arguments),
e > this ? this : e
}),
zone: function (e, t) {
var i,
n = this._offset || 0;
return null == e ? this._isUTC ? n : this._d.getTimezoneOffset()  : ('string' == typeof e && (e = H(e)), Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (i = this._d.getTimezoneOffset()), this._offset = e, this._isUTC = !0, null != i && this.subtract(i, 'm'), n !== e && (!t || this._changeInProgress ? b(this, vt.duration(n - e, 'm'), 1, !1)  : this._changeInProgress || (this._changeInProgress = !0, vt.updateOffset(this, !0), this._changeInProgress = null)), this)
},
zoneAbbr: function () {
return this._isUTC ? 'UTC' : ''
},
zoneName: function () {
return this._isUTC ? 'Coordinated Universal Time' : ''
},
parseZone: function () {
return this._tzm ? this.zone(this._tzm)  : 'string' == typeof this._i && this.zone(this._i),
this
},
hasAlignedHourOffset: function (e) {
return e = e ? vt(e).zone()  : 0,
0 === (this.zone() - e) % 60
},
daysInMonth: function () {
return S(this.year(), this.month())
},
dayOfYear: function (e) {
var t = Ct((vt(this).startOf('day') - vt(this).startOf('year')) / 86400000) + 1;
return null == e ? t : this.add(e - t, 'd')
},
quarter: function (e) {
return null == e ? Math.ceil((this.month() + 1) / 3)  : this.month(3 * (e - 1) + this.month() % 3)
},
weekYear: function (e) {
var t = st(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
return null == e ? t : this.add(e - t, 'y')
},
isoWeekYear: function (e) {
var t = st(this, 1, 4).year;
return null == e ? t : this.add(e - t, 'y')
},
week: function (e) {
var t = this.localeData().week(this);
return null == e ? t : this.add(7 * (e - t), 'd')
},
isoWeek: function (e) {
var t = st(this, 1, 4).week;
return null == e ? t : this.add(7 * (e - t), 'd')
},
weekday: function (e) {
var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
return null == e ? t : this.add(e - t, 'd')
},
isoWeekday: function (e) {
return null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7)
},
isoWeeksInYear: function () {
return T(this.year(), 1, 4)
},
weeksInYear: function () {
var e = this.localeData()._week;
return T(this.year(), e.dow, e.doy)
},
get: function (e) {
return e = C(e),
this[e]()
},
set: function (e, t) {
return e = C(e),
'function' == typeof this[e] && this[e](t),
this
},
locale: function (t) {
return t === e ? this._locale._abbr : (this._locale = vt.localeData(t), this)
},
lang: o('moment().lang() is deprecated. Use moment().localeData() instead.', function (t) {
return t === e ? this.localeData()  : (this._locale = vt.localeData(t), this)
}),
localeData: function () {
return this._locale
}
}), vt.fn.millisecond = vt.fn.milliseconds = ht('Milliseconds', !1), vt.fn.second = vt.fn.seconds = ht('Seconds', !1), vt.fn.minute = vt.fn.minutes = ht('Minutes', !1), vt.fn.hour = vt.fn.hours = ht('Hours', !0), vt.fn.date = ht('Date', !0), vt.fn.dates = o('dates accessor is deprecated. Use date instead.', ht('Date', !0)), vt.fn.year = ht('FullYear', !0), vt.fn.years = o('years accessor is deprecated. Use year instead.', ht('FullYear', !0)), vt.fn.days = vt.fn.day, vt.fn.months = vt.fn.month, vt.fn.weeks = vt.fn.week, vt.fn.isoWeeks = vt.fn.isoWeek, vt.fn.quarters = vt.fn.quarter, vt.fn.toJSON = vt.fn.toISOString, d(vt.duration.fn = u.prototype, {
_bubble: function () {
var e,
t,
i,
n = this._milliseconds,
o = this._days,
s = this._months,
r = this._data,
a = 0;
r.milliseconds = n % 1000,
e = p(n / 1000),
r.seconds = e % 60,
t = p(e / 60),
r.minutes = t % 60,
i = p(t / 60),
r.hours = i % 24,
o += p(i / 24),
a = p(pt(o)),
o -= p(ft(a)),
s += p(o / 30),
o %= 30,
a += p(s / 12),
s %= 12,
r.days = o,
r.months = s,
r.years = a
},
abs: function () {
return this._milliseconds = Math.abs(this._milliseconds),
this._days = Math.abs(this._days),
this._months = Math.abs(this._months),
this._data.milliseconds = Math.abs(this._data.milliseconds),
this._data.seconds = Math.abs(this._data.seconds),
this._data.minutes = Math.abs(this._data.minutes),
this._data.hours = Math.abs(this._data.hours),
this._data.months = Math.abs(this._data.months),
this._data.years = Math.abs(this._data.years),
this
},
weeks: function () {
return p(this.days() / 7)
},
valueOf: function () {
return this._milliseconds + 86400000 * this._days + 2592000000 * (this._months % 12) + 31536000000 * M(this._months / 12)
},
humanize: function (e) {
var t = ot(this, !e, this.localeData());
return e && (t = this.localeData().pastFuture( + this, t)),
this.localeData().postformat(t)
},
add: function (e, t) {
var i = vt.duration(e, t);
return this._milliseconds += i._milliseconds,
this._days += i._days,
this._months += i._months,
this._bubble(),
this
},
subtract: function (e, t) {
var i = vt.duration(e, t);
return this._milliseconds -= i._milliseconds,
this._days -= i._days,
this._months -= i._months,
this._bubble(),
this
},
get: function (e) {
return e = C(e),
this[e.toLowerCase() + 's']()
},
as: function (e) {
var t,
i;
if (e = C(e), t = this._days + this._milliseconds / 86400000, 'month' === e || 'year' === e) return i = this._months + 12 * pt(t),
'month' === e ? i : i / 12;
switch (t += ft(this._months / 12), e) {
  case 'week':
    return t / 7;
  case 'day':
    return t;
  case 'hour':
    return 24 * t;
  case 'minute':
    return 60 * 24 * t;
  case 'second':
    return 60 * 60 * 24 * t;
  case 'millisecond':
    return 1000 * 60 * 60 * 24 * t;
  default:
    throw new Error('Unknown unit ' + e)
}
},
lang: vt.fn.lang,
locale: vt.fn.locale,
toIsoString: o('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', function () {
return this.toISOString()
}),
toISOString: function () {
var e = Math.abs(this.years()),
t = Math.abs(this.months()),
i = Math.abs(this.days()),
n = Math.abs(this.hours()),
o = Math.abs(this.minutes()),
s = Math.abs(this.seconds() + this.milliseconds() / 1000);
return this.asSeconds() ? (this.asSeconds() < 0 ? '-' : '') + 'P' + (e ? e + 'Y' : '') + (t ? t + 'M' : '') + (i ? i + 'D' : '') + (n || o || s ? 'T' : '') + (n ? n + 'H' : '') + (o ? o + 'M' : '') + (s ? s + 'S' : '')  : 'P0D'
},
localeData: function () {
return this._locale
}
}); for (yt in si) si.hasOwnProperty(yt) && mt(yt.toLowerCase()); vt.duration.fn.asMilliseconds = function () {
return this.as('ms')
}, vt.duration.fn.asSeconds = function () {
return this.as('s')
}, vt.duration.fn.asMinutes = function () {
return this.as('m')
}, vt.duration.fn.asHours = function () {
return this.as('h')
}, vt.duration.fn.asDays = function () {
return this.as('d')
}, vt.duration.fn.asWeeks = function () {
return this.as('weeks')
}, vt.duration.fn.asMonths = function () {
return this.as('M')
}, vt.duration.fn.asYears = function () {
return this.as('y')
}, vt.locale('en', {
ordinal: function (e) {
var t = e % 10,
i = 1 === M(e % 100 / 10) ? 'th' : 1 === t ? 'st' : 2 === t ? 'nd' : 3 === t ? 'rd' : 'th';
return e + i
}
}), Rt ? module.exports = vt : 'function' == typeof _wAMD.define && _wAMD.define.amd ? (_wAMD.define('moment', [
'require',
'exports',
'module'
], function (e, t, i) {
return i.config && i.config() && i.config().noGlobal === !0 && (_t.moment = bt),
vt
}), gt(!0))  : gt()
}.call(this), _wAMD.define('mustache', [
'jquery',
'public_legacy/mustache',
'moment'
], function (e, t, i) {
window.Mustache = t;
var n = {
date: 'MMMM D, YYYY',
shortDate: 'M/D/YY',
longDate: 'M/D/YYYY',
time: 'h:mm a'
},
o = function (e) {
return function (t, o) {
var s = o(t),
r = i.unix(s);
return r.format(n[e])
}
},
s = {
buildTime: 'undefined' != typeof buildTime ? buildTime : null,
ASSETS_BASE: 'undefined' != typeof ASSETS_BASE ? ASSETS_BASE : null,
tl: function () {
return function (e, t) {
  return t(_W.tl(e))
}
},
esc_attr: function () {
return function (e, t) {
  return _.escape(t(e))
}
},
fmt: {
date: function () {
  return o('date')
},
shortDate: function () {
  return o('shortDate')
},
longDate: function () {
  return o('longDate')
},
time: function () {
  return o('time')
}
}
};
t.origRender = t.render,
t.render = function (i, n) {
return e.extend(n, s),
t.origRender.apply(this, arguments)
};
var r = t.Writer.prototype;
return r.origCompile = r.compile,
r.compile = function (t) {
var i = r.origCompile.apply(this, [
t
]);
return function () {
var t = Array.prototype.slice.call(arguments);
return t[0] = e.extend(t[0] || {
}, s),
i.apply(this, t)
}
},
t
}), _wAMD.define('text', {
}), _wAMD.define('tpl', [
'text'
], function (e) {
var t = {
};
return {
load: function (i, n, o, s) {
if (s.isBuild && s.inlineTpl === !1) return o();
var r = function (e) {
  s.isBuild && (t[i] = e),
  o(e)
};
e.get(n.toUrl('templates/' + i + '.tpl'), r, o.error)
},
write: function (i, n, o) {
if (t.hasOwnProperty(n)) {
  var s = e.jsEscape(t[n]);
  o.asModule(i + '!' + n, 'define(function () { return \'' + s + '\'; });\n')
}
}
}
}), _wAMD.define('tpl!public/vertical/components/login', [
], function () {
return '<div class="login-overlay">\n\t<span class="btn-x">&times;</span>\n\t<div style="text-align:center;"><br><img src="recursos/images/logo1.png" height="50px"></div>\n\t<div class="login-container">\n\t\t<h2 class="login-overlay-title">{{#tl}}Log in{{/tl}}</h2>\n\t\t<div class="left">\n\t\t\t<div class="oauth-unknown">\n\t\t\t\t<a href="#" class="btn-facebook-flat oauth-button">\n\t\t\t\t\t{{#tl}}Log In{{/tl}}\n\t\t\t\t</a>\n\t\t\t\t<a href="#" class="btn-googleplus-flat oauth-button">\n\t\t\t\t\t{{#tl}}Login{{/tl}}\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t\t<div class="oauth-known">\n\t\t\t\t<div class="oauth-user-container">\n\t\t\t\t\t<div class="oauth-profile-icon"></div>\n\t\t\t\t\t<p class="oauth-name-p"></p>\n\t\t\t\t</div>\n\t\t\t\t<div class="oauth-explanation">Login to your existing Weebly account here and we\'ll pair it with your account to login with in the future.</div>\n\t\t\t\t<p class="error-msg" id="weebly-oauth-error"></p>\n\t\t\t\t{{^login_email}}\n\t\t\t\t\t<p class="oauth-force-signup-link">\n\t\t\t\t\t\t<a href="#">\n\t\t\t\t\t\t\t{{#tl}}Create a new Weebly account instead{{/tl}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t</p>\n\t\t\t\t{{/login_email}}\n\t\t\t</div>\n\t\t\t<div style="clear: both"></div>\n\t\t</div>\n\t\t<div class="right">\n\t\t\t<form id="weebly-login" method="post" action="controlador">\n\t\t\t\t<input type="text" id="weebly-username" class="" name="user" placeholder="{{#esc_attr}}{{#tl}}Email{{/tl}}{{/esc_attr}}">\n\n\t\t\t\t<input type="password" id="weebly-password" class="" name="pass" placeholder="{{#esc_attr}}{{#tl}}Password{{/tl}}{{/esc_attr}}"><input type="hidden" value="2" id="flag" class="" name="flag">\n\n\t\t\t\t<p class="error-msg" id="weebly-login-error"></p>\n\n\t\t\t\t<p class="remember-me">\n\t\t\t\t\t<label>\n\t\t\t\t\t\t<input type="checkbox" id="weebly-remember" name="rememberme" checked="">\n\t\t\t\t\t\t{{#tl}}Recordarme{{/tl}}\n\t\t\t\t\t</label>\n\t\t\t\t</p>\n\t\t\t\t\n\t\t\t\t<div class="reset-password">\n\t\t\t\t\t<a href="#">\n\t\t\t\t\t\t{{#tl}}Olvide mi password{{/tl}}\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\n\t\t\t\t<p class="submit-button">\n\t\t\t\t\t<input type="submit" class="login-btn submit-btn" value="{{#esc_attr}}{{#tl}}Log In{{/tl}}{{/esc_attr}}">\n\t\t\t\t</p>\n\t\t\t</form>\n\t\t\t<form action="#" method="post" id="oauth-email-form">\n\t\t\t\t<input type="text" id="oauth-email" name="email" placeholder="{{#esc_attr}}{{#tl}}Email{{/tl}}{{/esc_attr}}">\n\t\t\t\t<input type="hidden" name="pos" value="emailavailable">\n\n\t\t\t\t<p class="submit-button">\n\t\t\t\t\t<input type="submit" class="oauth-submit-associate-email submit-btn" value="{{#esc_attr}}{{#tl}}Submit{{/tl}}{{/esc_attr}}">\n\t\t\t\t</p>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n'
}), _wAMD.define('util/general-utils', [
], function () {
var e = {
htmlDecode: function (e) {
var t = document.createElement('div');
return t.innerHTML = e,
0 === t.childNodes.length ? '' : t.childNodes[0].nodeValue
},
isIE: function () {
return /(MSIE|Trident)/.test(navigator.userAgent)
},
getURLParameter: function (e) {
for (var t = window.location.search.substring(1), i = t.split('&'), n = 0; n < i.length; n++) {
  var o = i[n].split('=');
  if (o[0] == e) return decodeURIComponent(o[1])
}
return ''
},
splitName: function (e) {
var t;
return /^[^\s]*\s[^\s]*\s?$/i.test(e) ? e.split(' ')  : (t = e.match(/^([^\s]*\s[^\s]\.?)\s(.*)\s?$/i)) ? t.slice(1)  : (t = e.match(/^(.*)\s([^\s]*)\s(jr|sr|ii|iii|iv|v|vi|vii|viii|ix|x)\.?\s?$/i)) ? t.slice(1)  : (t = e.match(/^([^\s]*\s[^\s]*)\s(.*)\s?$/i)) ? t.slice(1)  : [
  e,
  ''
]
},
isValidEmail: function (e) {
return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
},
numberWithCommas: function (e) {
return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
},
getSiteDomain: function () {
var e = !1;
return Weebly.Location.custom_domain ? e = Weebly.Location.custom_domain : Weebly.Location.weebly_subdomain && (e = Weebly.Location.weebly_subdomain + '.weebly.com'),
e
},
generateTimeInterval: function (e, t) {
var i,
n,
o = [
],
e = e || 12,
t = t || 30;
for (i = 0; 23 >= i; i++) for (n = 0; 60 > n; n += t) {
  var s = ('00' + n).slice( - 2),
  r = i,
  a = '';
  12 === e ? (a = 'am', 0 === i ? r = 12 : 12 === i ? (r = i, a = 'pm')  : i > 12 && (r = i - e, a = 'pm'))  : r = ('00' + i).slice( - 2),
  o.push(r + ':' + s + ' ' + a)
}
return o
}
};
return e
}), _wAMD.define('public/vertical/shared/oauth_flow', [
'jquery',
'public/vertical/shared/app'
], function () {
var e = {
init: function () {
return this.initialized || (this.parseURI(), this.initialized = !0),
this.config
},
initialized: !1,
config: {
showLogin: !1,
showOauthLoginChoices: !1,
oauthAssociate: !1,
oauthEmail: !1,
startError: null,
oauthError: null
},
parseURI: function () {
if (window.location.href.match(/#login$|show_login=1|login_email/) && (this.config.showLogin = !0), window.location.href.match(/\?login=1/)) {
  this.config.showLogin = !0;
  var e = window.location.href.match(/deleted=1/) ? 'accountDeleted' : 'loginToAccess';
  this.config.startError = errorMsgs[e]
}
window.location.href.match(/\?session-expired=1/) && (this.config.showLogin = !0, this.config.startError = errorMsgs.loginAgain),
window.location.href.match(/oauth_fail=/) && (this.config.showOauthLoginChoices = !0, this.config.oauthError = _W.tl('There was an error loading data. Please try again.')),
window.location.href.match(/oauth_email=/) && (this.config.oauthEmail = !0),
window.location.href.match(/oauth_associate=/) && (this.config.oauthAssociate = !0)
}
};
return e
}), window.Weebly || (Weebly = {
}), Weebly.AllDialogs = {
}, Weebly.Dialog = function (e, t) {
function i() {
a.height(document.body.offsetHeight);
var e = r(window).height();
e > document.body.offsetHeight && a.height(e)
}
function n(i, n) {
e = i,
n || c.empty(),
c.append(e),
e = c.children().first(),
l.show(),
s(),
t.onOpen && t.onOpen.call(l, e)
}
function o() {
var e = r('<div>'),
i = t.outerClass || '';
e.addClass(t.inner_class || 'weebly-dialog-inner');
var n = document.createElement('div');
if (n.innerHTML = '<div class=\'weebly-dialog ' + i + '\'>' + '  <div class=\'weebly-dialog-border\'>' + '    <div class=\'weebly-dialog-content\'>' + '    </div>' + '  </div>' + '</div>', l = r(n.firstChild), l.find('div.weebly-dialog-content').first().append(e), t.showClose !== !1) {
'function' != typeof showClose && (showClose = function () {
  d()
});
var o = r('<div class="weebly-dialog-close">').on('click', 'function' == typeof t.closeFunction ? t.closeFunction : function () {
  d(!0)
});
e.append(o)
}
c = r('<div>'),
e.append(c),
t.iframe ? c.css('line-height', 0)  : (t.width && c.width(t.width), t.height && c.height(t.height)),
l.css('position', 'absolute'),
l.css('left', '-10000px'),
l.css('z-index', t.zIndex || 999),
r(document.body).append(l)
}
function s() {
if (l) {
var n = e[0].scrollHeight + 29,
o = r(window).height(),
s = l[0].scrollHeight;
s = Math.max(n, s),
l.css('top', r(window).scrollTop() + Math.max(10, Math.round(o / 2 - s / 2)) + 'px'),
l.css('left', Math.round(r(document.body).width() / 2 - l.width() / 2) + 'px'),
!t.noScrollbars && s > o - 20 ? (e.height(e.scrollHeight - (s - (o - 20))), t.iframe || e.css('overflow', 'auto'))  : t.iframe ? t.height && (e.height = t.height)  : (e.css('height', ''), e.css('overflow', '')),
a && a.is(':visible') && i()
}
}
var r = jQuery;
t || 'object' != typeof e || e.nodeName ? (e = 'string' == typeof e ? r('#' + e)  : r(e), t = t || {
}, Weebly.AllDialogs[e.attr('id')] = this)  : (t = e, e = null),
this.options = t;
var a,
l,
c;
this.setOption = function (e, t) {
void 0 === t ? delete this.options[e] : this.options[e] = t
},
this.open = function (s, c) {
if (s && (t.url = s), c && (t.parameters = c), t.modal) if (a) a.show();
 else {
a = r('<div class="weebly-blackout">').attr('id', t.blackoutID || ''),
r(document.body).append(a),
a.css('z-index', t.zIndex || 999);
var u = void 0 !== t.blackoutOpacity ? t.blackoutOpacity : 0.5;
a.css('opacity', u),
i()
}
if (l || o(), t.modal && r(document.body).append(l), t.iframe) {
var d = '';
t.parameters && (d = r.param(t.parameters), d = - 1 == t.url.indexOf('?') ? '?' + d : '&' + d);
var h = {
};
h.border = 0,
t.width && (h.width = t.width + 'px'),
t.height && (h.height = t.width + 'px'),
n(r('<iframe src="' + t.url + d + '" frameborder="0">').css(h))
} else t.url ? new r.ajax(t.url, {
type: t.method || 'get',
data: t.parameters,
success: function (e) {
  n(e)
}
})  : n(e.show(), !0)
},
this.update = function (t) {
e = t,
c.empty().append(e),
s()
},
this.positionDialog = s;
var u;
r(window).on('resize', function () {
!u && e && e.offsetWidth && (u = !0, s(), u = !1)
});
var d = this.close = function (e) {
l && (t.onClose && t.onClose.call(l, e) === !1 || (a && a.hide(), l.hide()))
};
this.destroy = function () {
a && a.remove(),
c && c.remove()
}
}, !window.getInnerHeight, _wAMD.define('legacy/weebly_dialog', function (e) {
return function () {
var t;
return t || e.Weebly.Dialog
}
}(this)), Weebly = window.Weebly || {
}, function () {
var e,
t,
i = jQuery;
Weebly.ensureAccount = function (n, o, s) {
function r() {
e.close(),
t()
}
function a(n) {
'1' == n ? t()  : (e || (e = new Weebly.Dialog('weebly-login-signup', s), new Weebly.login({
  onLoginSuccess: r,
  onSignupSuccess: r
})), i('#weebly-login-signup h2').eq(0).html(o || 'You must be signed in to use Weebly.'), e.open())
}
this.options = s,
t = n,
s && s.skipCheck ? a(0)  : i.ajax('/weebly/publicBackend.php', {
data: {
  pos: 'loggedin'
},
type: 'POST',
success: function (e) {
  a(i.trim(e))
}
})
}
}(), Weebly.login = function (e) {
var t = jQuery;
e = t.extend({
email_is_username: !1,
require_tos_check: !0,
login_username_field: 'weebly-username',
login_password_field: 'weebly-password',
login_remember_field: 'weebly-remember',
login_errors_area: 'weebly-login-error',
login_form: 'weebly-login',
login_button: 'weebly-login-button',
login_only: !1,
submit_form_onSuccess: !1,
onLoginLoadingStart: function () {
},
onLoginLoadingStop: function () {
},
onLoginSuccess: function (e) {
window.location.href = e.location
},
onLoginFormSuccess: function () {
},
signup_username_field: 'weebly-new-username',
onLoginError: function (i) {
t('#' + e.login_errors_area).html(i).show()
},
hideLoginErrors: function () {
t('#' + e.login_errors_area).hide()
},
signup_email_field: 'weebly-email',
signup_name_field: null,
signup_password_field: 'weebly-new-password',
signup_tos_field: 'weebly-tos',
signup_response_field: 'weebly-login-signup-response',
signup_errors_area: 'weebly-signup-error',
signup_error_handler: null,
signup_only: !1,
campaign_field: 'weebly-campaign',
hide_signup_error: null,
signup_form: 'weebly-signup',
signup_button: 'weebly-signup-button',
suggest_email: !1,
check_email_exists: !1,
onSignupSuccess: function () {
window.location.href = '/weebly/userHome.php'
},
captcha_area: 'weebly-login-signup-captcha',
captcha_errors_area: 'weebly-login-signup-caperr',
open_captcha_function: null,
close_captcha_function: null,
captcha_options: {
theme: 'blackglass',
tabindex: 0,
callback: (window.Recaptcha || {
}).focus_response_field
},
display_captcha_onload: !1,
use_ssl_login: !1,
designer_signup: !1,
designer_company: null,
designer_portal: null,
ajax_signup_params: {
},
onLoadingStart: function () {
},
onLoadingStop: function () {
},
onLoginInstead: function () {
return !0
},
urlBase: ''
}, e),
this.params = e,
t('#' + this.params.signup_username_field).length || (this.params.email_is_username = !0),
this.captcha_tries = 0,
this._resetFields(e);
var i = this;
e.signup_only || (t('#' + e.login_form).on('keypress', function (e) {
13 == e.keyCode && (i._onLogin(e), e.preventDefault())
}).on('submit', function (e) {
i._onLogin(e)
}), t('#' + e.login_button).on('click', function (e) {
i._onLogin(e)
}), e.submit_form_onSuccess && t('#' + e.login_form).append('<input type="hidden" name="force-submit" id="force-submit" value="0" />')),
e.login_only || (t('#' + e.signup_form).on('submit', function (e) {
i._onSignup(e)
}), t('#' + e.signup_button).on('click', function (e) {
i._onSignup(e)
}), e.suggest_email && t('#' + e.signup_email_field).on('blur', function (e) {
i.emailSuggest(e)
}), e.check_email_exists && t('#' + e.signup_email_field).on('blur', function (e) {
i.checkEmailExists(e)
}), e.display_captcha_onload && this.showCaptcha()),
this.isLoading = !1
}, Weebly.login.prototype._onLogin = function (e) {
var t = jQuery;
return this.params.hideLoginErrors(),
'1' == t('#force-submit').val() ? !0 : (this._loginRequest(t.extend({
username: t('#' + this.params.login_username_field).val(),
password: t('#' + this.params.login_password_field).val(),
remember: t('#' + this.params.login_remember_field).is(':checked') ? 1 : 0
}, this.params)), e.preventDefault(), void 0)
}, Weebly.login.prototype._onSignup = function (e) {
var t = jQuery;
e.preventDefault();
var i = t('#' + this.params.signup_password_field).val(),
n = this.params.email_is_username ? t('#' + this.params.signup_email_field).val()  : t('#' + this.params.signup_username_field).val();
if (i) if (this.params.require_tos_check && !t('#' + this.params.signup_tos_field).is(':checked')) this.showSignupError(_W.tl('You must agree to the terms of service to continue.'), t('#' + this.params.signup_tos_field));
 else if (!this.params.email_is_username && n.match(/[^a-zA-Z0-9\-\_]/)) this.showSignupError(_W.tl('Your username may only contain numbers, letters, a dash (-) or an underscore (_).'), this.params.email_is_username ? t('#' + this.params.signup_email_field)  : t('#' + this.params.signup_username_field));
 else if ('' == n) this.showSignupError(this.params.email_is_username ? _W.tl('Porfavor ingrese un email.')  : _W.tl('Debe ingresar su nombre de usuario.'), this.params.email_is_username ? t('#' + this.params.signup_email_field)  : t('#' + this.params.signup_username_field));
 else if (i.match(/.{4}/)) if (t('#' + this.params.signup_email_field).val().toLowerCase().match(/^[a-z0-9\-\+\_]+(\.[a-z0-9\-\+\_]+)*@[a-z0-9\-]+(\.[a-z0-9\-]+)*(\.[a-z]{2,255})$/) || 'optional' == t('#' + this.params.signup_email_field).val()) if (this.captcha_tries || window.DISABLE_SIGNUP_CAPTCHA) {
if (this.params.hide_signup_error && this.params.hide_signup_error(), this.params.signup_error_handler || t('#' + this.params.captcha_errors_area).hide(), this.isLoading) return;
this.isLoading = !0,
this.params.onLoadingStart();
var o = this;
t.ajax(this.params.urlBase + '/weebly/publicBackend.php', {
data: t.extend({
  pos: 'signup',
  user: n,
  name: this.params.signup_name_field ? t('#' + this.params.signup_name_field).val()  : '',
  pass: i,
  campaign: t('#' + this.params.campaign_field).length ? t('#' + this.params.campaign_field).val()  : '',
  email: t('#' + this.params.signup_email_field).val(),
  create_designer: this.params.designer_signup ? '1' : '',
  designer_company: this.params.designer_company ? t('#' + this.params.designer_company).val()  : '',
  designer_portal: this.params.designer_portal ? t('#' + this.params.designer_portal).val()  : '',
  response: t('#' + this.params.signup_response_field).val(),
  recaptcha_response_field: t('#recaptcha_response_field').length ? t('#recaptcha_response_field').val()  : '',
  recaptcha_challenge_field: t('#recaptcha_challenge_field').length ? t('#recaptcha_challenge_field').val()  : '',
  easy_login: 1
}, this.params.ajax_signup_params),
type: 'POST',
success: function (e) {
  o.isLoading = !1,
  o.params.onLoadingStop();
  var s = t.trim(e);
  - 1 != s.indexOf('%%SUCCESS%%') ? o.params.onSignupSuccess(e)  : '%%LOGININSTEAD%%' == s ? o.params.onLoginInstead() && o._loginRequest(t.extend({
    username: n || t('#' + o.params.signup_email_field).val(),
    password: i,
    remember: t('#' + o.params.login_remember_field).is(':checked') ? 1 : 0
  }, o.params))  : s.match('%%INVALID%%') ? (t('#recaptcha_response_field') && o.captcha_tries > 0 && o.showSignupError('Please try again.', t('#recaptcha_response_field')), o.showCaptcha())  : (o.params.close_captcha_function && o.params.close_captcha_function(), o.showSignupError(s))
}
})
} else this.params.hide_signup_error && this.params.hide_signup_error(),
this.showCaptcha();
 else this.showSignupError(_W.tl('Porfavor ingrese un email.'), t('#' + this.params.signup_email_field));
 else this.showSignupError(_W.tl('El password debe tener al menos 4 digitos.'), t('#' + this.params.signup_password_field));
 else this.showSignupError(_W.tl('Porfavor ingrese password.'), t('#' + this.params.signup_password_field))
}, Weebly.login.prototype.showCaptcha = function () {
var e = jQuery;
!window.DISABLE_SIGNUP_CAPTCHA && window.Recaptcha && (this.params.open_captcha_function ? this.params.open_captcha_function()  : e('#' + this.params.captcha_area).show(), e.ajax(this.params.urlBase + '/weebly/apps/stats.php?stat=recaptcha.shown&location=signup', {
type: 'POST'
}), Recaptcha.create('6Lf4O9USAAAAAOSa9cF4SEtxBcjrwrLe1_yP00ke', this.params.captcha_area, this.params.captcha_options), setTimeout(function () {
if (e('#recaptcha_response_field').length) try {
e('#recaptcha_response_field').focus()
} catch (t) {
}
}, 0), this.captcha_tries++)
}, Weebly.login.prototype.showSignupError = function (e, t) {
var i = jQuery;
this.params.signup_error_handler ? this.params.signup_error_handler(e, t)  : i('#' + this.params.signup_errors_area).html(e).show()
}, Weebly.login.prototype.emailSuggest = function () {
var e = jQuery,
t = this,
n = e('#' + this.params.signup_email_field).val();
if (n) {
var o = [
'yahoo.com',
'hotmail.com',
'hotmail.co.uk',
'gmail.com',
'excite.com',
'aol.com',
'comcast.net'
],
s = n.split('@');
if (name = s[0], n = s[1], !n) return;
var r = - 1;
for (i = 0; i < o.length; i++) {
var a = levenshtein(n, o[i]);
if (0 == a) {
  var l = o[i],
  r = 0;
  break
}(r >= a || 0 > r) && (l = o[i], r = a)
}
if (0 == r) return !1;
r / n.length <= 0.375 && (this.showSignupError('Did you mean <a href="#" id="signup-error-link"><b>' + name + '@' + l + '</b></a>?', e('#' + this.params.signup_email_field)), e('#signup-error-link').on('click', function () {
e('#' + t.params.signup_email_field).val(name + '@' + l),
t.params.hide_signup_error && t.params.hide_signup_error()
}))
}
}, Weebly.login.prototype.checkEmailExists = function () {
var e = jQuery,
t = this;
e.ajax(this.params.urlBase + '/weebly/publicBackend.php', {
data: {
pos: 'emailexists',
email: e('#' + this.params.signup_email_field).val()
},
type: 'POST',
success: function (e) {
e.match(/%%EXISTS%%/) && t.params.onLoginInstead && t.params.onLoginInstead()
}
})
}, Weebly.login.prototype._loginRequest = function (e) {
var t = jQuery;
if (1 == e.use_ssl_login) var i = 'https://www.weebly.com';
 else if (e.urlBase) var i = e.urlBase;
 else var i = 'http://' + document.location.hostname;
var n = window.location.href.match(/oauth_associate=/) ? '1' : '';
e.onLoginLoadingStart(),
t.ajax(i + '/weebly/apps/login.php', {
data: {
username: e.username,
password: e.password,
remember: e.remember,
domain: document.location.hostname,
softLogin: 1 == e.submit_form_onSuccess,
associate_oauth: n,
redirect: e.redirect
},
type: 'POST',
dataType: 'jsonp',
success: function (i) {
if (e.onLoginLoadingStop(), 1 == i.result) e.submit_form_onSuccess ? (e.onLoginFormSuccess(), t('#force-submit').val('1'), t('#' + e.login_form).append('<input type="hidden" name="associate_oauth" value="' + n + '">'), t('#' + e.login_form).submit())  : e.onLoginSuccess(i);
 else if (i.external_association) window.location.href = '#';
 else if ('deleted-user' == i.message) window.location.href = '#';
 else {
  var o = i.message || _W.tl('Wrong username or password');
  e.onLoginError(o)
}
}
})
}, Weebly.login.prototype._resetFields = function (e) {
var t = jQuery;
e.signup_only || (e.hideLoginErrors(), t('#' + e.login_password_field).val(''), t('#' + e.login_remember_field).attr('checked', !0)),
e.login_only || (e.signup_error_handler || (t('#' + e.signup_errors_area).empty().hide(), t('#' + e.captcha_errors_area).hide()), t('#' + e.signup_password_field).val(''), e.require_tos_check && t('#' + e.signup_tos_field).attr('checked', !1), t('#' + e.signup_response_field).val(''), t('#' + e.captcha_area).hide())
}, _wAMD.define('legacy/weebly_ensure_account', [
'legacy/weebly_dialog'
], function () {
}), function (e) {
'function' == typeof _wAMD.define && _wAMD.define.amd ? _wAMD.define('util/ui/wInput', [
'jquery'
], e)  : e(window.jQuery)
}(function (e) {
function t(t, i) {
var n = function () {
};
return n.prototype = new t,
n.prototype.constructor = n,
n.prototype.parent = t.prototype,
n.prototype = e.extend(n.prototype, i),
n
}
if ('undefined' == typeof e.fn.wRadio && 'undefined' == typeof e.fn.wCheckbox) {
var i;
i = t(Object, {
inputName: 'winput',
bind: function (e) {
  var t = this;
  return function () {
    e.apply(t, arguments)
  }
},
init: function (e) {
  this.initializing = !0,
  this.opts = e = this.prepareOpts(e),
  e.element.data(this.inputName) && this.destroy(),
  this.container = this.createContainer();
  var t = e.element.prop('checked') || e.element.prop('defaultChecked');
  t && (this.opts.element.removeAttr('checked'), this.check());
  var i = e.element.prop('readonly');
  void 0 === i && (i = !1),
  this.readonly(i);
  var n = e.element.prop('disabled');
  void 0 === n && (n = !1),
  this.enable(!n),
  this.initContainer(),
  this.initializing = !1
},
initContainer: function () {
  this._tabindex = this.opts.element.attr('tabindex'),
  this.opts.element.addClass('w-input-offscreen').data(this.inputName, this).before(this.container).attr('tabindex', '-1'),
  this.container.data(this.inputName, this).attr('tabindex', this._tabindex || 0),
  this.container.on('keypress.' + this.inputName, this.bind(function (e) {
    32 === e.which && (this.toggleCheck(), e.preventDefault())
  })),
  this.opts.element.on('change', this.bind(function (e) {
    var t = e.currentTarget.checked;
    e.internal || this.assign(t)
  }))
},
prepareOpts: function (e) {
  return e
},
updateInterface: function () {
  var e = !this._readonly && !!this._enabled;
  return this._enabledInterface === e ? !1 : (this._enabledInterface = e, this.container.toggleClass('disabled', !e), e)
},
readonly: function (e) {
  return void 0 === e && (e = !1),
  this._readyonly === e ? !1 : (this._readonly = e, this.opts.element.prop('readonly', e), this.updateInterface(), e)
},
enable: function (e) {
  return void 0 === e && (e = !0),
  this._enabled === e ? !1 : (this._enabled = e, this.opts.element.prop('disabled', !e), this.updateInterface(), e)
},
disable: function () {
  return this.enable(!1)
},
uncheck: function () {
  return this.checking(!1)
},
check: function () {
  return this.checking(!0)
},
checking: function (e) {
  return this.opts.element.prop('defaultChecked') || this.opts.element.prop('checked') !== e ? (this.assign(e), !0)  : !1
},
assign: function (e) {
  return this._readonly === !0 || this._enabled === !1 ? !1 : (this.opts.element.prop('checked', e), this.opts.element.closest('label.box').toggleClass('checked', e), this.container.toggleClass('checked', e), void 0)
},
toggleCheck: function () {
  this.opts.element.prop('checked') ? this.uncheck()  : this.check()
},
reset: function () {
  var e = this.opts.element.prop('checked') || this.opts.element.prop('defaultChecked');
  this.opts.element.prop('checked', e),
  this.container.toggleClass('checked', e)
},
destroy: function () {
  var e = this.opts.element.data(this.inputName);
  void 0 !== e && (e.container.remove(), e.opts.element.attr('tabindex', this._tabindex).removeData(this.inputName).removeClass('w-input-offscreen')),
  this.opts.element.off('.' + this.inputName)
}
}),
WCheckbox = t(i, {
inputName: 'wcheckbox',
prepareOpts: function () {
  var e = this.parent.prepareOpts.apply(this, arguments);
  return e
},
createContainer: function () {
  var t = e(document.createElement('span')).addClass('w-checkbox-container');
  return t
},
initContainer: function () {
  this.parent.initContainer.apply(this, arguments),
  this.container.on('click.' + this.inputName, this.bind(function (e) {
    e.preventDefault(),
    e.stopPropagation(),
    this.toggleCheck()
  }))
},
checking: function () {
  var t = e.Event('change', {
    internal: !0
  });
  this.parent.checking.apply(this, arguments),
  this.initializing || this.opts.element.trigger(t)
}
}),
WRadio = t(i, {
inputName: 'wradio',
prepareOpts: function () {
  var e = this.parent.prepareOpts.apply(this, arguments);
  return e
},
createContainer: function () {
  var t = e(document.createElement('span')).addClass('w-radio-container');
  return t
},
initContainer: function () {
  this.parent.initContainer.apply(this, arguments),
  this.initSet(),
  this.container.on('click.' + this.inputName, this.bind(function (t) {
    t.preventDefault(),
    t.stopPropagation(),
    this.check(),
    this._readonly !== !0 && this._enabled !== !1 && this.opts.element.trigger(e.Event('click'))
  })),
  label = this.opts.element.closest('label'),
  0 === label.length && (label = e('label[for=' + this.opts.element.attr('id') + ']')),
  label.on('click.' + this.inputName, this.bind(function (e) {
    e.preventDefault(),
    e.stopPropagation(),
    this.check()
  })),
  this.opts.label = label
},
check: function () {
  return this.opts.element.prop('checked') ? void 0 : (this._enabled && !this._readonly && this.uncheckAll(), this.parent.check.apply(this, arguments))
},
initSet: function () {
  var t = this.opts.element.closest('form'),
  i = this.opts.element.attr('name');
  if (t.length || i) {
    inputs = t.length > 0 ? t.find('input[type=radio][name=' + i + ']')  : e('input[type=radio][name=' + i + ']');
    for (var n = [
    ], o = 0; o < inputs.length; o++) inputs.eq(o).data(this.inputName) && n.push(inputs.eq(o).data(this.inputName));
    for (var o = 0; o < n.length; o++) n[o]._set = n;
    this._set = n,
    inputs.off('reread').on('reread', this.bind(this.resetAll))
  }
},
resetAll: function () {
  for (var e = this._set, t = e.length, i = 0; t > i; i++) e[i].reset()
},
uncheckAll: function () {
  void 0 === this._set && this.initSet();
  for (var e = 0; e < this._set.length; e++) this._set[e].uncheck()
},
toggleCheck: function () {
  this.uncheckAll(),
  this.parent.toggleCheck.apply(this, arguments)
},
checking: function (t) {
  if (this.initializing) return this.parent.checking.apply(this, arguments);
  if (!this._readonly && this._enabled) {
    var i = this.opts.element.prop('checked'),
    n = this.parent.checking.apply(this, arguments),
    o = i !== n;
    return o && t && this.opts.element.trigger(e.Event('change')),
    n
  }
},
destroy: function () {
  var e = this.opts.element.data(this.inputName);
  void 0 !== e && e.opts.label.off('.' + this.inputName),
  this.parent.destroy.apply(this, arguments)
}
}),
e.fn.wCheckbox = function () {
var t,
i,
n = Array.prototype.slice.call(arguments, 0),
o = [
  'check',
  'uncheck',
  'toggleCheck',
  'enable',
  'disable',
  'readonly',
  'destroy'
];
return this.each(function (s, r) {
  if (0 === n.length || 'object' == typeof n[0]) {
    if (i = 0 === n.length ? {
    }
     : e.extend({
    }, n[0]), 'input' !== r.tagName.toLowerCase() || 'checkbox' !== r.type.toLowerCase()) throw 'Invalid input, wCheckbox only allowed for checkboxes';
    i.element = e(r),
    t = new WCheckbox,
    t.init(i)
  } else {
    if ('string' != typeof n[0]) throw 'Invalid arguments to wCheckbox: ' + n;
    if (method = n[0], radio = e(r).data('wcheckbox'), - 1 === e.inArray(method, o)) throw 'Method not found: ' + method;
    if (void 0 === radio) throw 'Element is not a wCheckbox element';
    radio[method].apply(radio, n.slice(1))
  }
}),
this
},
e.fn.wRadio = function () {
var t,
i,
n,
o = Array.prototype.slice.call(arguments, 0),
s = [
  'check',
  'uncheck',
  'enable',
  'disable',
  'readonly',
  'destroy'
];
return this.each(function (r, a) {
  if (0 === o.length || 'object' == typeof o[0]) if (n = 0 === o.length ? {
  }
   : e.extend({
  }, o[0]), 'input' === a.tagName.toLowerCase() && 'radio' === a.type.toLowerCase()) n.element = e(a),
  i = new WRadio,
  i.init(n);
   else {
    if ('form' !== a.tagName.toLowerCase()) throw 'Invalid element, wRadio only allowed for radios and forms with radios';
    e(a).find('input[type=radio]').each(function () {
      e(this).wRadio()
    })
  } else {
    if ('string' != typeof o[0]) throw 'Invalid arguments to wRadio: ' + o;
    if (t = o[0], i = e(a).data('wradio'), - 1 === e.inArray(t, s)) throw 'Method not found: ' + t;
    if (void 0 === i) throw 'Element is not a wRadio element';
    i[t].apply(i, o.slice(1))
  }
}),
this
}
}
}), function (e, t, i) {
function n(e) {
var t = {
},
n = /^jQuery\d+$/;
return i.each(e.attributes, function (e, i) {
i.specified && !n.test(i.name) && (t[i.name] = i.value)
}),
t
}
function o(e, t) {
var n = this,
o = i(n);
if (n.value == o.attr('placeholder') && o.hasClass('placeholder')) if (o.data('placeholder-password')) {
if (o = o.hide().next().show().attr('id', o.removeAttr('id').data('placeholder-id')), e === !0) return o[0].value = t;
o.focus()
} else n.value = '',
o.removeClass('placeholder'),
n == r() && n.select()
}
function s() {
var e,
t = this,
s = i(t),
r = this.id;
if ('' == t.value) {
if ('password' == t.type) {
  if (!s.data('placeholder-textinput')) {
    try {
      e = s.clone().attr({
        type: 'text'
      })
    } catch (a) {
      e = i('<input>').attr(i.extend(n(this), {
        type: 'text'
      }))
    }
    e.removeAttr('name').data({
      'placeholder-password': s,
      'placeholder-id': r
    }).bind('focus.placeholder', o),
    s.data({
      'placeholder-textinput': e,
      'placeholder-id': r
    }).before(e)
  }
  s = s.removeAttr('id').hide().prev().attr('id', r).show()
}
s.addClass('placeholder'),
s[0].value = s.attr('placeholder')
} else s.removeClass('placeholder')
}
function r() {
try {
return t.activeElement
} catch (e) {
}
}
var a,
l,
c = '[object OperaMini]' == Object.prototype.toString.call(e.operamini),
u = 'placeholder' in t.createElement('input') && !c,
d = 'placeholder' in t.createElement('textarea') && !c,
h = i.fn,
p = i.valHooks,
f = i.propHooks;
u && d ? (l = h.placeholder = function () {
return this
}, l.input = l.textarea = !0)  : (l = h.placeholder = function () {
var e = this;
return e.filter((u ? 'textarea' : ':input') + '[placeholder]').not('.placeholder').bind({
'focus.placeholder': o,
'blur.placeholder': s
}).data('placeholder-enabled', !0).trigger('blur.placeholder'),
e
}, l.input = u, l.textarea = d, a = {
get: function (e) {
var t = i(e),
n = t.data('placeholder-password');
return n ? n[0].value : t.data('placeholder-enabled') && t.hasClass('placeholder') ? '' : e.value
},
set: function (e, t) {
var n = i(e),
a = n.data('placeholder-password');
return a ? a[0].value = t : n.data('placeholder-enabled') ? ('' == t ? (e.value = t, e != r() && s.call(e))  : n.hasClass('placeholder') ? o.call(e, !0, t) || (e.value = t)  : e.value = t, n)  : e.value = t
}
}, u || (p.input = a, f.value = a), d || (p.textarea = a, f.value = a), i(function () {
i(t).delegate('form', 'submit.placeholder', function () {
var e = i('.placeholder', this).each(o);
setTimeout(function () {
  e.each(s)
}, 10)
})
}), i(e).bind('beforeunload.placeholder', function () {
i('.placeholder').each(function () {
this.value = ''
})
}))
}(this, document, jQuery), _wAMD.define('vendor/jquery.placeholder', function () {
}), _wAMD.define('public/vertical/shared/views/LoginView', [
'backbone',
'jquery',
'mustache',
'public/vertical/shared/app',
'tpl!public/vertical/components/login',
'util/general-utils',
'public/vertical/shared/oauth_flow',
'legacy/weebly_ensure_account',
'util/ui/wInput',
'vendor/jquery.placeholder'
], function (e, t, i, n, o, s, r) {
var a = e.Marionette.ItemView.extend({
template: i.compile(o),
ui: {
loginOverlay: '.login-overlay',
overlayTitle: '.login-overlay-title',
errorMsg: '#weebly-login-error',
loginForm: '#weebly-login',
loginEmail: '#weebly-username',
loginPass: '#weebly-password',
loginSubmit: '.submit-btn',
rememberCheckbox: '#weebly-remember',
overlayInputs: '.login-overlay input',
oauthKnown: '.oauth-known',
oauthUnknown: '.oauth-unknown',
oauthProfilePic: '.oauth-profile-icon',
oauthName: '.oauth-name-p',
oauthExplanation: '.oauth-explanation',
oauthError: '#weebly-oauth-error',
oauthAssociateEmailForm: '#oauth-email-form',
oauthForceSignupLink: '.oauth-force-signup-link'
},
templateHelpers: function () {
return {
  login_email: window.location.href.match(/login_email/),
  oauth_source: window.oauth && window.oauth.user ? window.oauth.user.source : 'facebook'
}
},
initialize: function () {
this.bindUIElements(),
window.location.hash = 'login'
},
events: {
'click .btn-x': 'fadeOutOverlay',
'submit .login-btn': 'disableSubmit',
'submit #oauth-email-form': 'handleOauthEmailForm',
'click .reset-password': 'resetPassword'
},
onShow: function () {
var e = this;
if (e.ui.loginOverlay.fadeIn(400), e.ui.rememberCheckbox.wCheckbox(), new Weebly.login({
  use_ssl_login: loginData.use_ssl,
  login_only: !0,
  redirect: s.getURLParameter('redirect'),
  onLoginError: function (t) {
    e.ui.errorMsg.text(t),
    e.ui.errorMsg.show(),
    e.ui.loginEmail.addClass('input-error'),
    e.ui.loginPass.addClass('input-error')
  },
  onLoginLoadingStart: function () {
    e.ui.errorMsg.hide(),
    e.ui.loginEmail.removeClass('input-error'),
    e.ui.loginPass.removeClass('input-error')
  }
}), e.options.fromRouter) {
  var t = r.init();
  t.oauthEmail ? e.changeToAssociateEmail()  : t.oauthAssociate ? (e.ui.overlayTitle.text(_W.tl('Link Weebly Account')), e.ui.oauthKnown.show(), e.ui.oauthUnknown.hide(), t.oauthError && (e.ui.oauthError.text(oauthError), e.ui.oauthError.show()))  : t.startError && e.showErrorMessage(t.startError)
}
window.oauth && window.oauth.user && e.showOauthUser(),
e.ui.overlayInputs.placeholder(),
n.vent.on('key:escape', function () {
  e.fadeOutOverlay()
}),
e.updateOauthLoginHref(),
n.vent.trigger('overlay:shown')
},
resetPassword: function (e) {
e && e.preventDefault(),
this.ui.loginOverlay.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close'),
  n.vent.trigger('reset:open')
})
},
onRender: function () {
var e = this,
i = s.isIE();
i || setTimeout(function () {
  t(e.ui.loginEmail).focus(),
  t(e.ui.loginEmail).select()
}, 200)
},
fadeOutOverlay: function (e) {
var t = this;
e && e.preventDefault(),
t.ui.loginOverlay.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close')
})
},
updateOauthLoginHref: function () {
this.$el.find('.oauth_button').each(function () {
  var e = t(this).attr('href');
  t(this).attr('href', e + '&form_url=' + window.location.pathname)
})
},
disableSubmit: function (e) {
e.preventDefault(),
this.ui.loginSubmit.prop('disabled', !0),
this.ui.loginSubmit.addClass('disabled')
},
showOauthUser: function () {
if (window.oauth && window.oauth.user) {
  var e = window.oauth.user;
  this.ui.oauthProfilePic.css('background-image', 'url(' + e.pic + ')'),
  this.ui.oauthName.text(e.name)
}
},
handleOauthEmailForm: function (e) {
e.preventDefault();
var i = window.oauth.user.source || 'facebook',
n = this.ui.oauthAssociateEmailForm.find('[name=email]').val();
t.post(this.ui.oauthAssociateEmailForm.attr('action'), t(this.ui.oauthAssociateEmailForm).serialize(), function (e) {
  e.match(/%%AVALABLE%%/) ? window.location.href = '/weebly/oauth_login.php?source=' + i + '&type=force_signup&force_email=' + encodeURIComponent(n)  : e.match(/%%TAKEN%%/) && (window.location.href = '/start/?oauth_associate=' + i + '&login_email=' + encodeURIComponent(n))
})
},
changeToAssociateEmail: function () {
this.ui.overlayTitle.text(_W.tl('Link Weebly Account')),
this.ui.oauthKnown.show(),
this.ui.oauthUnknown.hide(),
this.ui.oauthForceSignupLink.hide(),
this.ui.oauthExplanation.text(_W.tl('We ask for your email in case you forget your password.')),
this.ui.loginForm.hide(),
this.ui.oauthAssociateEmailForm.show()
},
showErrorMessage: function (e) {
this.ui.errorMsg.text(e),
this.ui.errorMsg.show()
}
});
return a
}), _wAMD.define('tpl!public/vertical/components/signup', [
], function () {
return '<div class="signup-overlay">\n\t<span class="btn-x">&times;</span>\n\t<div style="text-align:center;"><br><img src="recursos/images/logo1.png" height="50px"></div>\n\t<div class="signup-container">\n\t\t<h2>{{#tl}}Registrarse{{/tl}}</h2>\n\t\t<div class="left">\n\t\t\t<a href="#" class="btn-facebook-flat oauth-button">\n\t\t\t\t{{#tl}}Registrase{{/tl}}\n\t\t\t</a>\n\t\t\t<a href="#" class="btn-googleplus-flat oauth-button">\n\t\t\t\t{{#tl}}Registrarse{{/tl}}\n\t\t\t</a>\n\t\t</div>\n\t\t<div class="right">\n\t\t\t<form id="overlay-signup-form" method="post" action="controlador">\n\t\t\t\t<input type="text" id="overlay-signup-form-name" name="name" class="signup-name" placeholder="{{#esc_attr}}{{#tl}}Nombre de usuario{{/tl}}{{/esc_attr}}" autocomplete="off">\n\t\t\t\t<input type="text" id="overlay-signup-form-email" name="email" placeholder="{{#esc_attr}}{{#tl}}Email{{/tl}}{{/esc_attr}}" autocomplete="off">\n\t\t\t\t<input type="password" id="overlay-signup-form-pass" name="pass" placeholder="{{#esc_attr}}{{#tl}}Password{{/tl}}{{/esc_attr}}" autocomplete="off"><input type="hidden" name="flag" value="2" placeholder="{{#esc_attr}}{{#tl}}Password{{/tl}}{{/esc_attr}}" autocomplete="off">\n\n\t\t\t\t<p id="overlay-signup-form-error"></p>\n\n\t\t\t\t<p class="submit-button">\n\t\t\t\t\t<input type="submit" class="signup-btn submit-btn" value="{{#esc_attr}}{{#tl}}Registrate Gratis{{/tl}}{{/esc_attr}}">\n\t\t\t\t</p>\n\n\t\t\t\t<input type="hidden" name="flag" id="overlay-signup-form-response" value="2" data-original-title="" title="">\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n'
}), _wAMD.define('public/vertical/shared/views/SignupView', [
'backbone',
'jquery',
'mustache',
'public/vertical/shared/app',
'tpl!public/vertical/components/signup',
'util/general-utils',
'legacy/weebly_ensure_account',
'vendor/jquery.placeholder'
], function (e, t, i, n, o, s) {
var r = e.Marionette.ItemView.extend({
template: i.compile(o),
ui: {
signupOverlay: '.signup-overlay',
errorMsg: '#overlay-signup-form-error',
signupName: '#overlay-signup-form-name',
signupEmail: '#overlay-signup-form-email',
signupPass: '#overlay-signup-form-pass',
signupSubmit: '.submit-btn',
overlayInputs: '.signup-overlay input'
},
events: {
'click .btn-x': 'fadeOutOverlay',
'submit form': 'disableSubmit'
},
onShow: function () {
var e = this;
e.ui.signupOverlay.fadeIn(400),
new Weebly.login({
  signup_only: !0,
  require_tos_check: !1,
  signup_form: 'overlay-signup-form',
  signup_name_field: 'overlay-signup-form-name',
  signup_email_field: 'overlay-signup-form-email',
  signup_password_field: 'overlay-signup-form-pass',
  signup_response_field: 'overlay-signup-form-response',
  signup_error_handler: function (t) {
    e.ui.errorMsg.text(t),
    e.ui.errorMsg.show(),
    e.ui.signupName.addClass('input-error'),
    e.ui.signupEmail.addClass('input-error'),
    e.ui.signupPass.addClass('input-error')
  },
  onLoadingStart: function () {
    e.ui.errorMsg.hide(),
    e.ui.signupName.removeClass('input-error'),
    e.ui.signupEmail.removeClass('input-error'),
    e.ui.signupPass.removeClass('input-error')
  },
  onSignupSuccess: function () {
    window.bootstrapData && 'signup' === window.bootstrapData.showPricing ? n.vent.trigger('plans:select')  : window.location.href = '/weebly/userHome.php?'
  },
  onLoginInstead: function () {
    e.ui.signupOverlay.fadeOut(400, function () {
      e.trigger('overlay:close');
      var t = {
        message: _W.tl('You already have an account. Please log in.'),
        username: e.ui.signupEmail.val(),
        password: e.ui.signupPass.val()
      };
      n.vent.trigger('login:open:suggestion', t)
    })
  }
});
var t = s.isIE();
t || setTimeout(function () {
  e.ui.signupName.focus()
}, 200),
e.ui.overlayInputs.placeholder(),
n.vent.on('key:escape', function () {
  e.fadeOutOverlay()
}),
e.updateOauthSignupHref(),
n.vent.trigger('overlay:shown')
},
updateOauthSignupHref: function () {
this.$el.find('.oauth_button').each(function () {
  var e = t(this).attr('href');
  t(this).attr('href', e + '&form_url=' + window.location.pathname)
})
},
fadeOutOverlay: function (e) {
var t = this;
e && e.preventDefault(),
t.ui.signupOverlay.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close')
})
},
disableSubmit: function (e) {
e.preventDefault(),
this.ui.signupSubmit.prop('disabled', !0),
this.ui.signupSubmit.addClass('disabled')
}
});
return r
}), _wAMD.define('tpl!public/vertical/components/video-dialog', [
], function () {
return '<div id="video-holder" class="video-overlay">\n\t<iframe class="main-video" width="1280" height="720" src="//www.youtube.com/embed/LJZVcNNWyhk?rel=0&enablejsapi=1&wmode=opaque" frameborder="0" allowfullscreen></iframe>\n\t<span class="btn-x">&times;</span>\n</div>\n'
}), _wAMD.define('public/vertical/shared/views/VideoDialogView', [
'backbone',
'jquery',
'mustache',
'public/vertical/shared/app',
'tpl!public/vertical/components/video-dialog'
], function (e, t, i, n, o) {
var s = e.Marionette.ItemView.extend({
template: i.compile(o),
interval: null,
ui: {
overlay: '.video-overlay',
ytVideo: '.main-video'
},
events: {
'click .btn-x': 'fadeOutOverlay'
},
onRender: function () {
var e = this;
e.ui.overlay.fadeIn(400),
window.addEventListener('message', function (t) {
  e.messageEventReceived(e, t)
})
},
onShow: function () {
var e = this;
e.interval = setInterval(function () {
  e.checkPlayerReady(e)
}, 250),
n.vent.on('key:escape', function () {
  e.fadeOutOverlay()
}),
n.vent.trigger('overlay:shown')
},
checkPlayerReady: function (e) {
var t = e.ui.ytVideo[0];
t && t.contentWindow && t.contentWindow.postMessage('{"event":"listening","id":"video-holder"}', '*')
},
messageEventReceived: function (e, t) {
try {
  0 === JSON.parse(t.data).info.playerState && e.fadeOutOverlay()
} catch (i) {
}
t.source === e.ui.ytVideo[0].contentWindow && (e.interval && (e.interval = clearInterval(e.interval)), e.sendVideoPlayMessage())
},
sendVideoPlayMessage: function () {
var e = this;
e.ui.ytVideo[0].contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
},
fadeOutOverlay: function () {
var e = this;
e.ui.ytVideo[0].contentWindow && e.ui.ytVideo[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*'),
e.ui.overlay.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close')
})
}
});
return s
}), _wAMD.define('tpl!public/vertical/components/reset-password', [
], function () {
return '<div class="reset reset-overlay overlay">\n\t<span class="btn-x">&times;</span>\n\t<div class="weebly-overlay-logo w-icon-li-weebly-logo"></div>\n\t<div class="reset-container">\n\t\t<h1 class="reset-overlay-title">{{#tl}}Password Reset{{/tl}}</h1>\n\t\t<input type="text" id="resetEmail" class="reset-email" placeholder="{{#esc_attr}}{{#tl}}Email Address{{/tl}}{{/esc_attr}}">\n\t\t<input type="submit" value="Reset" id="resetBtn">\n\t\t<p class="error-msg msg"></p>\n\t\t<p class="success-msg msg">{{#tl}}Instructions for resetting your password have been sent. Please check your email<br><a href="javascript:void(0);" id="returnLink">Click here</a> to return to the main page.{{/tl}}</p>\n\t</div>\n</div>\n'
}), _wAMD.define('public/vertical/shared/views/ResetPasswordOverlayView', [
'backbone-all',
'jquery',
'mustache',
'public/vertical/shared/app',
'tpl!public/vertical/components/reset-password'
], function (e, t, i, n, o) {
var s = e.Marionette.ItemView.extend({
template: i.compile(o),
ui: {
resetOverlay: '.reset-overlay',
resetEmail: '#resetEmail',
successMsg: '.success-msg',
errorMsg: '.error-msg',
loadingMsg: '.loading-msg'
},
events: {
'click #resetBtn': 'submitReset',
'keypress #resetEmail': 'handleKeypress',
'click .btn-x': 'fadeOutOverlay',
'click #returnLink': 'fadeOutOverlay'
},
onShow: function () {
var e = this;
e.ui.resetOverlay.fadeIn(400),
n.vent.on('key:escape', function () {
  e.fadeOutOverlay()
}),
n.vent.trigger('overlay:shown')
},
fadeOutOverlay: function () {
this.ui.resetOverlay.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close')
})
},
submitReset: function (e) {
var i = this;
e.preventDefault(),
i.ui.errorMsg.hide(),
i.ui.successMsg.hide(),
i.ui.loadingMsg.show(),
t.post('/weebly/publicBackend.php', {
  pos: 'resetpassword',
  email: i.ui.resetEmail.val()
}).done(function (e) {
  i.ui.loadingMsg.hide(),
  '%%SUCCESS%%\n' == e ? (i.ui.successMsg.show(), i.ui.resetEmail.val(''))  : (i.ui.errorMsg.show(), i.ui.errorMsg.html(e.replace('<br/><br/>', '<br>')))
})
},
handleKeypress: function (e) {
e.keyCode == KeyboardEvent.KEY_RETURN && this.submitReset(e)
}
});
return s
}), _wAMD.define('tpl!public/vertical/components/theme-selector-item', [
], function () {
return '<div class="overlay">{{#tl}}Choose Theme{{/tl}}</div>\n'
}), _wAMD.define('public/vertical/shared/views/ThemeSelectItemView', [
'backbone-all',
'mustache',
'public/vertical/shared/app',
'tpl!public/vertical/components/theme-selector-item'
], function (e, t, i, n) {
var o = e.Marionette.ItemView.extend({
route: 'theme',
getTemplate: function () {
return t.compile(n)
},
attributes: function () {
var e = this.model;
return {
  'data-id': e.get('theme'),
  'data-category': e.get('theme_category'),
  style: 'background-image: url(' + e.get('screenshots').image + ')'
}
},
className: 'theme',
events: {
click: 'openTheme'
},
initialize: function (e) {
this.allowBack = e.allowBack
},
openTheme: function () {
var e = this;
i.vent.trigger(e.route + ':open', e.model.get('url_theme_name'), e.allowBack)
}
});
return o
}), _wAMD.define('tpl!public/vertical/components/theme-selector', [
], function () {
return '<div class="theme-selector">\n\t{{^standalone}}\n\t<span class="btn-x">&times;</span>\n\t{{/standalone}}\n\t<span class="btn-back">\n\t\t<i class="w-icon-chevron-left-light"></i>\n\t</span>\n\t<div class="weebly-overlay-logo w-icon-li-weebly-logo"></div>\n\t<div class="theme-menu">\n\t\t<div class="filters">\n\t\t\t<div class="select-wrap">\n\t\t\t\t<a href="#" data-filter="All" class="active">{{#tl}}All{{/tl}}</a>\n\t\t\t\t<a href="#" data-filter="Blog">{{#tl}}Blog{{/tl}}</a>\n\t\t\t\t<a href="#" data-filter="Business">{{#tl}}Business{{/tl}}</a>\n\t\t\t\t<a href="#" data-filter="Creative">{{#tl}}Creative{{/tl}}</a>\n\t\t\t\t<a href="#" data-filter="Non-Profit">{{#tl}}Non-Profit{{/tl}}</a>\n\t\t\t\t<a href="#" data-filter="Store">{{#tl}}Store{{/tl}}</a>\n\t\t\t</div>\n\n\t\t\t<div class="filter-tag"></div>\n\t\t</div>\n\n\t\t<div class="choice-wrapper">\n\t\t\t<div class="choices">\n\t\t\t\t{{#themes}}\n\t\t\t\t\t{{.}}\n\t\t\t\t{{/themes}}\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>\n'
}), _wAMD.define('jquery-ui/core', [
'jquery'
], function (e) {
!function (e, t) {
function i(t, i) {
var o,
s,
r,
a = t.nodeName.toLowerCase();
return 'area' === a ? (o = t.parentNode, s = o.name, t.href && s && 'map' === o.nodeName.toLowerCase() ? (r = e('img[usemap=#' + s + ']') [0], !!r && n(r))  : !1)  : (/input|select|textarea|button|object/.test(a) ? !t.disabled : 'a' === a ? t.href || i : i) && n(t)
}
function n(t) {
return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
  return 'hidden' === e.css(this, 'visibility')
}).length
}
var o = 0,
s = /^ui-id-\d+$/;
e.ui = e.ui || {
},
e.extend(e.ui, {
version: '1.10.2',
keyCode: {
  BACKSPACE: 8,
  COMMA: 188,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 27,
  HOME: 36,
  LEFT: 37,
  NUMPAD_ADD: 107,
  NUMPAD_DECIMAL: 110,
  NUMPAD_DIVIDE: 111,
  NUMPAD_ENTER: 108,
  NUMPAD_MULTIPLY: 106,
  NUMPAD_SUBTRACT: 109,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PERIOD: 190,
  RIGHT: 39,
  SPACE: 32,
  TAB: 9,
  UP: 38
}
}),
e.fn.extend({
focus: function (t) {
  return function (i, n) {
    return 'number' == typeof i ? this.each(function () {
      var t = this;
      setTimeout(function () {
        e(t).focus(),
        n && n.call(t)
      }, i)
    })  : t.apply(this, arguments)
  }
}(e.fn.focus),
scrollParent: function () {
  var t;
  return t = e.ui.ie && /(static|relative)/.test(this.css('position')) || /absolute/.test(this.css('position')) ? this.parents().filter(function () {
    return /(relative|absolute|fixed)/.test(e.css(this, 'position')) && /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'))
  }).eq(0)  : this.parents().filter(function () {
    return /(auto|scroll)/.test(e.css(this, 'overflow') + e.css(this, 'overflow-y') + e.css(this, 'overflow-x'))
  }).eq(0),
  /fixed/.test(this.css('position')) || !t.length ? e(document)  : t
},
zIndex: function (i) {
  if (i !== t) return this.css('zIndex', i);
  if (this.length) for (var n, o, s = e(this[0]); s.length && s[0] !== document; ) {
    if (n = s.css('position'), ('absolute' === n || 'relative' === n || 'fixed' === n) && (o = parseInt(s.css('zIndex'), 10), !isNaN(o) && 0 !== o)) return o;
    s = s.parent()
  }
  return 0
},
uniqueId: function () {
  return this.each(function () {
    this.id || (this.id = 'ui-id-' + ++o)
  })
},
removeUniqueId: function () {
  return this.each(function () {
    s.test(this.id) && e(this).removeAttr('id')
  })
}
}),
e.extend(e.expr[':'], {
data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
  return function (i) {
    return !!e.data(i, t)
  }
})  : function (t, i, n) {
  return !!e.data(t, n[3])
},
focusable: function (t) {
  return i(t, !isNaN(e.attr(t, 'tabindex')))
},
tabbable: function (t) {
  var n = e.attr(t, 'tabindex'),
  o = isNaN(n);
  return (o || n >= 0) && i(t, !o)
}
}),
e('<a>').outerWidth(1).jquery || e.each(['Width',
'Height'], function (i, n) {
function o(t, i, n, o) {
  return e.each(s, function () {
    i -= parseFloat(e.css(t, 'padding' + this)) || 0,
    n && (i -= parseFloat(e.css(t, 'border' + this + 'Width')) || 0),
    o && (i -= parseFloat(e.css(t, 'margin' + this)) || 0)
  }),
  i
}
var s = 'Width' === n ? [
  'Left',
  'Right'
] : [
  'Top',
  'Bottom'
],
r = n.toLowerCase(),
a = {
  innerWidth: e.fn.innerWidth,
  innerHeight: e.fn.innerHeight,
  outerWidth: e.fn.outerWidth,
  outerHeight: e.fn.outerHeight
};
e.fn['inner' + n] = function (i) {
  return i === t ? a['inner' + n].call(this)  : this.each(function () {
    e(this).css(r, o(this, i) + 'px')
  })
},
e.fn['outer' + n] = function (t, i) {
  return 'number' != typeof t ? a['outer' + n].call(this, t)  : this.each(function () {
    e(this).css(r, o(this, t, !0, i) + 'px')
  })
}
}),
e.fn.addBack || (e.fn.addBack = function (e) {
return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
}),
e('<a>').data('a-b', 'a').removeData('a-b').data('a-b') && (e.fn.removeData = function (t) {
return function (i) {
  return arguments.length ? t.call(this, e.camelCase(i))  : t.call(this)
}
}(e.fn.removeData)),
e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
e.support.selectstart = 'onselectstart' in document.createElement('div'),
e.fn.extend({
disableSelection: function () {
  return this.bind((e.support.selectstart ? 'selectstart' : 'mousedown') + '.ui-disableSelection', function (e) {
    e.preventDefault()
  })
},
enableSelection: function () {
  return this.unbind('.ui-disableSelection')
}
}),
e.extend(e.ui, {
plugin: {
  add: function (t, i, n) {
    var o,
    s = e.ui[t].prototype;
    for (o in n) s.plugins[o] = s.plugins[o] || [],
    s.plugins[o].push([i,
    n[o]])
  },
  call: function (e, t, i) {
    var n,
    o = e.plugins[t];
    if (o && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType) for (n = 0; n < o.length; n++) e.options[o[n][0]] && o[n][1].apply(e.element, i)
  }
},
hasScroll: function (t, i) {
  if ('hidden' === e(t).css('overflow')) return !1;
  var n = i && 'left' === i ? 'scrollLeft' : 'scrollTop',
  o = !1;
  return t[n] > 0 ? !0 : (t[n] = 1, o = t[n] > 0, t[n] = 0, o)
}
})
}(e)
}), _wAMD.define('public/vertical/shared/views/ThemeSelectView', [
'backbone',
'jquery',
'mustache',
'public/vertical/shared/app',
'public/vertical/shared/views/ThemeSelectItemView',
'tpl!public/vertical/components/theme-selector',
'util/general-utils',
'jquery-ui/core',
'legacy/weebly_ensure_account'
], function (e, t, i, n, o, s) {
var r = e.Marionette.CompositeView.extend({
itemView: o,
itemViewContainer: '.choices',
itemViewOptions: {
allowBack: !0
},
template: i.compile(s),
templateHelpers: function () {
return {
  standalone: this.standalone
}
},
ui: {
filterLinks: '.filters a',
themeList: '.choices',
menu: '.theme-menu',
preview: '.theme-form',
filterTag: '.filter-tag',
closeButton: '.btn-x',
weeblyLogo: '.weebly-overlay-logo',
backButton: '.btn-back',
selector: '.theme-selector',
overlayInputs: '.theme-selector input'
},
events: {
'click .btn-x': 'fadeOutOverlay',
'click .btn-back': 'goBack',
'click .filters a': 'selectFilter'
},
initialize: function (e) {
e = e || {
},
this.allow_back = e.allow_back,
this.visibileThemes = this.collection.get('All'),
this.bindUIElements()
},
onRender: function () {
this.$el.find('.theme-selector').fadeIn(200),
this.ui.overlayInputs.placeholder()
},
onShow: function () {
var e = this;
e.setFilterTag(),
e.showThemeChoices(),
this.standalone || n.vent.on('key:escape', function () {
  e.fadeOutOverlay()
}),
n.vent.trigger('overlay:shown')
},
selectFilter: function (e) {
e.preventDefault();
var i,
n,
o = t(e.target).data('filter'),
s = this,
r = s.ui.themeList.children('.theme');
i = 'All' == o ? r : r.filter('[data-category=' + o + ']'),
n = r.filter(':visible'),
s.ui.filterLinks.removeClass('active'),
t(e.target).addClass('active'),
s.setFilterTag(),
n.length ? n.fadeOut(200, function () {
  s.showSelectedCategory(i)
})  : s.showSelectedCategory(i)
},
showSelectedCategory: function (e) {
var t = this;
e.length < 3 ? t.ui.themeList.addClass('center')  : t.ui.themeList.removeClass('center'),
e.fadeIn(300)
},
setFilterTag: function () {
var e = this,
t = e.ui.filterLinks.filter('.active').position().left;
e.ui.filterTag.css('left', t)
},
goBack: function (e) {
e && e.preventDefault(),
n.vent.trigger('themes:open')
},
fadeOutOverlay: function (e) {
e && e.preventDefault();
var t = this;
t.ui.selector.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close')
})
},
showThemeChoices: function () {
this.ui.themeList.css('top', '0px')
}
});
return r
}), _wAMD.define('tpl!public/vertical/components/theme-signup', [
], function () {
return '{{^standalone}}\n<span class="btn-x">&times;</span>\n{{/standalone}}\n<span class="btn-back">\n\t<i class="w-icon-chevron-left-light"></i>\n</span>\n<div style="text-align:center;"><br><img src="recursos/images/logo1.png" height="50px"></div>\n\n<div class="theme-form">\n\t<div class="preview">\n\t\t<div class="theme" data-id="{{theme_id}}" class="theme" style="background-image: url({{screenshots.image}})"></div>\n\t\t<div class="theme-meta">\n\t\t\t<span class="theme-name">{{theme_name}}</span>\n\t\t\t{{#theme_demo}}\n\t\t\t\t<span class="theme-separator">|</span>\n\t\t\t\t<a href="#" target="_blank" rel="nofollow" class="theme-demo">{{#tl}}Vista previa{{/tl}}</a>\n\t\t\t{{/theme_demo}}\n\t\t</div>\n\t</div>\n\n\t<div class="form">\n\t\t<h1>{{#tl}}Registrese para continuar{{/tl}}</h1>\n\t\t<form  action="controlador">\n\t\t\t<input type="text" required name="name" placeholder="{{#esc_attr}}{{#tl}}Nombre de Usuario{{/tl}}{{/esc_attr}}" autocomplete="off" class="full-name" id="theme-signup-form-name">\n\t\t\t<input type="text" required name="email" placeholder="{{#esc_attr}}{{#tl}}Email{{/tl}}{{/esc_attr}}" autocomplete="off" id="theme-signup-form-email">\n\t\t\t<input required type="password" name="pass" placeholder="{{#esc_attr}}{{#tl}}Password{{/tl}}{{/esc_attr}}" autocomplete="off" id="theme-signup-form-pass">\n\t\t\t<input type="hidden" name="flag" id="theme-signup-form-theme-id" value="1">\n\t\t\t<input type="hidden" name="response" id="theme-signup-form-response">\n\t\t\t<p id="theme-signup-form-error"></p>\n\t\t\t<input type="submit" value="{{#esc_attr}}{{#tl}}Registrese Gratis{{/tl}}{{/esc_attr}}" class="button" id="theme-signup-form-submit">\n\t\t</form>\n\t</div>\n</div>\n'
}), _wAMD.define('public/vertical/shared/views/ThemeSignupView', [
'backbone',
'mustache',
'public/vertical/shared/app',
'util/general-utils',
'tpl!public/vertical/components/theme-signup',
'legacy/weebly_ensure_account'
], function (e, t, i, n, o) {
var s = e.Marionette.ItemView.extend({
standalone: !1,
className: 'theme-selector',
ui: {
form: '.signup-form',
previewImage: '.preview .theme',
menu: '.theme-menu',
preview: '.theme-form',
closeButton: '.btn-x',
weeblyLogo: '.weebly-overlay-logo',
backButton: '.btn-back',
errorMsg: '#theme-signup-form-error',
signupName: '#theme-signup-form-name',
signupEmail: '#theme-signup-form-email',
signupPass: '#theme-signup-form-pass',
signupTheme: '#theme-signup-form-theme-id',
signupSubmit: '#theme-signup-form-submit',
overlayInputs: 'input'
},
events: {
'click @ui.weeblyLogo': 'fadeOutOverlay',
'click @ui.closeButton': 'fadeOutOverlay',
'click @ui.backButton': 'goBack'
},
template: t.compile(o),
initialize: function (e) {
var t = this;
t.allowBack = e.allow_back,
t.standalone || i.vent.on('key:escape', function () {
  t.fadeOutOverlay()
})
},
onRender: function () {
var e = this;
e.$el.fadeIn(200),
e.ui.overlayInputs.placeholder()
},
onShow: function () {
var e = this;
e.model,
e.allowBack && e.ui.closeButton.fadeOut(100),
e.initSignup(),
e.ui.backButton.hide(),
e.ui.weeblyLogo.show(),
e.ui.preview.fadeIn(200, function () {
  e.allowBack && e.ui.backButton.fadeIn(200);
  var t = n.isIE();
  t || e.ui.preview.find('.full-name').focus()
}),
i.vent.trigger('overlay:shown')
},
initSignup: function () {
var e = this;
e.signup || (e.signup = new Weebly.login({
  signup_only: !0,
  require_tos_check: !1,
  signup_form: 'theme-signup-form',
  signup_name_field: 'theme-signup-form-name',
  signup_email_field: 'theme-signup-form-email',
  signup_password_field: 'theme-signup-form-pass',
  signup_response_field: 'theme-signup-form-response',
  signup_error_handler: function (t) {
    e.ui.errorMsg.text(t),
    e.ui.errorMsg.show(),
    e.ui.signupName.addClass('input-error'),
    e.ui.signupEmail.addClass('input-error'),
    e.ui.signupPass.addClass('input-error')
  },
  onLoadingStart: function () {
    e.ui.errorMsg.hide(),
    e.ui.signupName.removeClass('input-error'),
    e.ui.signupEmail.removeClass('input-error'),
    e.ui.signupPass.removeClass('input-error')
  },
  onSignupSuccess: function () {
    window.bootstrapData && 'signup' === window.bootstrapData.showPricing ? i.vent.trigger('plans:select')  : window.location.href = '/weebly/userHome.php?'
  },
  onLoginInstead: function () {
    e.fadeOutOverlay();
    var t = {
      message: _W.tl('You already have an account. Please log in.'),
      username: e.ui.signupEmail.val(),
      password: e.ui.signupPass.val()
    };
    i.vent.trigger('login:open:suggestion', t)
  }
})),
e.signup.params.ajax_signup_params = {
  preselected_theme_version: e.model.get('theme_version')
}
},
fadeOutOverlay: function (e) {
e && e.preventDefault();
var t = this;
t.$el.fadeOut(400, function () {
  i.vent.off('key:escape'),
  i.vent.trigger('overlay:close')
})
},
goBack: function (e) {
e && e.preventDefault(),
i.vent.trigger('themes:open')
}
});
return s
}), _wAMD.define('public/header/app', [
'backbone-all'
], function (e) {
var t = new e.Marionette.Application;
return t.addRegions({
overlayRegion: '#overlay-region',
fixturesRegion: '#fixtures-region'
}),
t
}), !function (e) {
e(function () {
e.support.transition = function () {
var e = function () {
  var e,
  t = document.createElement('bootstrap'),
  i = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend'
  };
  for (e in i) if (void 0 !== t.style[e]) return i[e]
}();
return e && {
  end: e
}
}()
})
}(window.jQuery), !function (e) {
var t = function (t, i) {
this.options = i,
this.$element = e(t).delegate('[data-dismiss="modal"]', 'click.dismiss.modal', e.proxy(this.hide, this)),
this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
};
t.prototype = {
constructor: t,
toggle: function () {
return this[this.isShown ? 'hide' : 'show']()
},
show: function () {
var t = this,
i = e.Event('show');
this.$element.trigger(i),
this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.backdrop(function () {
  var i = e.support.transition && t.$element.hasClass('fade');
  t.$element.parent().length || t.$element.appendTo(document.body),
  t.$element.show(),
  i && t.$element[0].offsetWidth,
  t.$element.addClass('in').attr('aria-hidden', !1),
  t.enforceFocus(),
  i ? t.$element.one(e.support.transition.end, function () {
    t.$element.focus().trigger('shown')
  })  : t.$element.focus().trigger('shown')
}))
},
hide: function (t) {
t && t.preventDefault(),
t = e.Event('tooltiphide'),
this.$element.trigger(t),
this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), e(document).off('focusin.modal'), this.$element.removeClass('in').attr('aria-hidden', !0), e.support.transition && this.$element.hasClass('fade') ? this.hideWithTransition()  : this.hideModal())
},
enforceFocus: function () {
var t = this;
e(document).on('focusin.modal', function (e) {
  t.$element[0] === e.target || t.$element.has(e.target).length || t.$element.focus()
})
},
escape: function () {
var e = this;
this.isShown && this.options.keyboard ? this.$element.on('keyup.dismiss.modal', function (t) {
  27 == t.which && e.hide()
})  : this.isShown || this.$element.off('keyup.dismiss.modal')
},
hideWithTransition: function () {
var t = this,
i = setTimeout(function () {
  t.$element.off(e.support.transition.end),
  t.hideModal()
}, 500);
this.$element.one(e.support.transition.end, function () {
  clearTimeout(i),
  t.hideModal()
})
},
hideModal: function () {
var e = this;
this.$element.hide(),
this.backdrop(function () {
  e.removeBackdrop(),
  e.$element.trigger('hidden')
})
},
removeBackdrop: function () {
this.$backdrop && this.$backdrop.remove(),
this.$backdrop = null
},
backdrop: function (t) {
var i = this.$element.hasClass('fade') ? 'fade' : '';
if (this.isShown && this.options.backdrop) {
  var n = e.support.transition && i;
  if (this.$backdrop = e('<div class="modal-backdrop ' + i + '" />').appendTo(document.body), this.$backdrop.click('static' == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0])  : e.proxy(this.hide, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in'), !t) return;
  n ? this.$backdrop.one(e.support.transition.end, t)  : t()
} else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass('in'), e.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one(e.support.transition.end, t)  : t())  : t && t()
}
};
var i = e.fn.modal;
e.fn.modal = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('modal'),
s = e.extend({
}, e.fn.modal.defaults, n.data(), 'object' == typeof i && i);
o || n.data('modal', o = new t(this, s)),
'string' == typeof i ? o[i]()  : s.show && o.show()
})
},
e.fn.modal.defaults = {
backdrop: !0,
keyboard: !0,
show: !0
},
e.fn.modal.Constructor = t,
e.fn.modal.noConflict = function () {
return e.fn.modal = i,
this
},
e(document).on('click.modal.data-api', '[data-toggle="modal"]', function (t) {
var i = e(this),
n = i.attr('href'),
o = e(i.attr('data-target') || n && n.replace(/.*(?=#[^\s]+$)/, '')),
s = o.data('modal') ? 'toggle' : e.extend({
remote: !/#/.test(n) && n
}, o.data(), i.data());
t.preventDefault(),
o.modal(s).one('hide', function () {
i.focus()
})
})
}(window.jQuery), !function (e) {
function t() {
e(n).each(function () {
i(e(this)).removeClass('open')
})
}
function i(t) {
var i,
n = t.attr('data-target');
return n || (n = t.attr('href'), n = n && /#/.test(n) && n.replace(/.*(?=#[^\s]*$)/, '')),
i = n && e(n),
i && i.length || (i = t.parent()),
i
}
var n = '[data-toggle=dropdown]',
o = function (t) {
var i = e(t).on('click.dropdown.data-api', this.toggle);
e('html').on('click.dropdown.data-api', function () {
i.parent().removeClass('open')
})
};
o.prototype = {
constructor: o,
toggle: function () {
var n,
o,
s = e(this);
if (!s.is('.disabled, :disabled')) {
  if (n = i(s), o = n.hasClass('open'), t(), !o) {
    n.toggleClass('open'),
    n.trigger('bootstrapDropdownOpen');
    var r = n.find('.scroll');
    if (r.length) {
      r.weeblyScroll && r.weeblyScroll('destroy');
      var a = n.find('.dropdown-menu');
      a.height('');
      var l = a.offset().top,
      c = e(window).height();
      l + a.outerHeight() > c && (a.height(c - l - 20), r.weeblyScroll && r.weeblyScroll())
    }
  }
  return s.focus(),
  !1
}
},
keydown: function (t) {
var o,
s,
r,
a,
l;
if (/(38|40|27)/.test(t.keyCode) && (o = e(this), t.preventDefault(), t.stopPropagation(), !o.is('.disabled, :disabled'))) {
  if (r = i(o), a = r.hasClass('open'), !a || a && 27 == t.keyCode) return 27 == t.which && r.find(n).focus(),
  o.click();
  s = e('[role=menu] li:not(.divider):visible a', r),
  s.length && (l = s.index(s.filter(':focus')), 38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).focus())
}
}
};
var s = e.fn.dropdown;
e.fn.dropdown = function (t) {
return this.each(function () {
var i = e(this),
n = i.data('dropdown');
n || i.data('dropdown', n = new o(this)),
'string' == typeof t && n[t].call(i)
})
},
e.fn.dropdown.Constructor = o,
e.fn.dropdown.noConflict = function () {
return e.fn.dropdown = s,
this
},
e(document).on('click.dropdown.data-api', t).on('click.dropdown.data-api', '.dropdown form, .disabled, :disabled, .w-scrollbar-handle, .social-toolbar', function (e) {
e.stopPropagation()
}).on('click.dropdown-menu', function (e) {
e.stopPropagation()
}).on('click.dropdown.data-api', n, o.prototype.toggle).on('keydown.dropdown.data-api', n + ', [role=menu]', o.prototype.keydown)
}(window.jQuery), !function (e) {
function t(t, i) {
var n,
o = e.proxy(this.process, this),
s = e(t).is('body') ? e(window)  : e(t);
this.options = e.extend({
}, e.fn.scrollspy.defaults, i),
this.$scrollElement = s.on('scroll.scroll-spy.data-api', o),
this.selector = (this.options.target || (n = e(t).attr('href')) && n.replace(/.*(?=#[^\s]+$)/, '') || '') + ' .nav li > a',
this.$body = e('body'),
this.refresh(),
this.process()
}
t.prototype = {
constructor: t,
refresh: function () {
var t,
i = this;
this.offsets = e([]),
this.targets = e([]),
t = this.$body.find(this.selector).map(function () {
  var t = e(this),
  n = t.data('target') || t.attr('href'),
  o = /^#\w/.test(n) && e(n);
  return o && o.length && [[o.position().top + (!e.isWindow(i.$scrollElement.get(0)) && i.$scrollElement.scrollTop()),
  n]] || null
}).sort(function (e, t) {
  return e[0] - t[0]
}).each(function () {
  i.offsets.push(this[0]),
  i.targets.push(this[1])
})
},
process: function () {
var e,
t = this.$scrollElement.scrollTop() + this.options.offset,
i = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
n = i - this.$scrollElement.height(),
o = this.offsets,
s = this.targets,
r = this.activeTarget;
if (t >= n) return r != (e = s.last() [0]) && this.activate(e);
for (e = o.length; e--; ) r != s[e] && t >= o[e] && (!o[e + 1] || t <= o[e + 1]) && this.activate(s[e])
},
activate: function (t) {
var i,
n;
this.activeTarget = t,
e(this.selector).parent('.active').removeClass('active'),
n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
i = e(n).parent('li').addClass('active'),
i.parent('.dropdown-menu').length && (i = i.closest('li.dropdown').addClass('active')),
i.trigger('activate')
}
};
var i = e.fn.scrollspy;
e.fn.scrollspy = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('scrollspy'),
s = 'object' == typeof i && i;
o || n.data('scrollspy', o = new t(this, s)),
'string' == typeof i && o[i]()
})
},
e.fn.scrollspy.Constructor = t,
e.fn.scrollspy.defaults = {
offset: 10
},
e.fn.scrollspy.noConflict = function () {
return e.fn.scrollspy = i,
this
},
e(window).on('load', function () {
e('[data-spy="scroll"]').each(function () {
var t = e(this);
t.scrollspy(t.data())
})
})
}(window.jQuery), !function (e) {
var t = function (t) {
this.element = e(t)
};
t.prototype = {
constructor: t,
show: function () {
var t,
i,
n,
o = this.element,
s = o.closest('ul:not(.dropdown-menu)'),
r = o.attr('data-target');
r || (r = o.attr('href'), r = r && r.replace(/.*(?=#[^\s]*$)/, '')),
o.parent('li').hasClass('active') || (t = s.find('.active:last a') [0], n = e.Event('show', {
  relatedTarget: t
}), o.trigger(n), n.isDefaultPrevented() || (i = e(r), this.activate(o.parent('li'), s), this.activate(i, i.parent(), function () {
  o.trigger({
    type: 'shown',
    relatedTarget: t
  })
})))
},
activate: function (t, i, n) {
function o() {
  s.removeClass('active').find('> .dropdown-menu > .active').removeClass('active'),
  t.addClass('active'),
  r ? (t[0].offsetWidth, t.addClass('in'))  : t.removeClass('fade'),
  t.parent('.dropdown-menu') && t.closest('li.dropdown').addClass('active'),
  n && n()
}
var s = i.find('> .active'),
r = n && e.support.transition && s.hasClass('fade');
r ? s.one(e.support.transition.end, o)  : o(),
s.removeClass('in')
}
};
var i = e.fn.tab;
e.fn.tab = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('tab');
o || n.data('tab', o = new t(this)),
'string' == typeof i && o[i]()
})
},
e.fn.tab.Constructor = t,
e.fn.tab.noConflict = function () {
return e.fn.tab = i,
this
},
e(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (t) {
t.preventDefault(),
e(this).tab('show')
})
}(window.jQuery), + function (e) {
var t = function (e, t) {
this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
this.init('tooltip', e, t)
};
t.DEFAULTS = {
animation: !0,
placement: 'top',
selector: !1,
template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
trigger: 'hover focus',
title: '',
delay: 0,
html: !1,
container: !1
},
t.prototype.init = function (t, i, n) {
this.enabled = !0,
this.type = t,
this.$element = e(i),
this.options = this.getOptions(n);
for (var o = this.options.trigger.split(' '), s = o.length; s--; ) {
var r = o[s];
if ('click' == r) this.$element.on('click.' + this.type, this.options.selector, e.proxy(this.toggle, this));
 else if ('manual' != r) {
  var a = 'hover' == r ? 'mouseenter' : 'focusin',
  l = 'hover' == r ? 'mouseleave' : 'focusout';
  this.$element.on(a + '.' + this.type, this.options.selector, e.proxy(this.enter, this)),
  this.$element.on(l + '.' + this.type, this.options.selector, e.proxy(this.leave, this))
}
}
this.options.selector ? this._options = e.extend({
}, this.options, {
trigger: 'manual',
selector: ''
})  : this.fixTitle()
},
t.prototype.getDefaults = function () {
return t.DEFAULTS
},
t.prototype.getOptions = function (t) {
return t = e.extend({
}, this.getDefaults(), this.$element.data(), t),
t.delay && 'number' == typeof t.delay && (t.delay = {
show: t.delay,
hide: t.delay
}),
t
},
t.prototype.getDelegateOptions = function () {
var t = {
},
i = this.getDefaults();
return this._options && e.each(this._options, function (e, n) {
i[e] != n && (t[e] = n)
}),
t
},
t.prototype.enter = function (t) {
var i = t instanceof this.constructor ? t : e(t.currentTarget) [this.type](this.getDelegateOptions()).data('bs.' + this.type);
return clearTimeout(i.timeout),
i.hoverState = 'in',
i.options.delay && i.options.delay.show ? (i.timeout = setTimeout(function () {
'in' == i.hoverState && i.show()
}, i.options.delay.show), void 0)  : i.show()
},
t.prototype.leave = function (t) {
var i = t instanceof this.constructor ? t : e(t.currentTarget) [this.type](this.getDelegateOptions()).data('bs.' + this.type);
return clearTimeout(i.timeout),
i.hoverState = 'out',
i.options.delay && i.options.delay.hide ? (i.timeout = setTimeout(function () {
'out' == i.hoverState && i.hide()
}, i.options.delay.hide), void 0)  : i.hide()
},
t.prototype.show = function () {
var t = e.Event('show.bs.' + this.type);
if (this.hasContent() && this.enabled) {
if (this.$element.trigger(t), t.isDefaultPrevented()) return;
var i = this,
n = this.tip();
this.setContent(),
this.options.animation && n.addClass('fade');
var o = 'function' == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0])  : this.options.placement,
s = /\s?auto?\s?/i,
r = s.test(o);
r && (o = o.replace(s, '') || 'top'),
n.detach().css({
  top: 0,
  left: 0,
  display: 'block'
}).addClass(o),
this.options.container ? n.appendTo(this.options.container)  : n.insertAfter(this.$element);
var a = this.getPosition(),
l = n[0].offsetWidth,
c = n[0].offsetHeight;
if (r) {
  var u = this.$element.parent(),
  d = o,
  h = document.documentElement.scrollTop || document.body.scrollTop,
  p = 'body' == this.options.container ? window.innerWidth : u.outerWidth(),
  f = 'body' == this.options.container ? window.innerHeight : u.outerHeight(),
  m = 'body' == this.options.container ? 0 : u.offset().left;
  o = 'bottom' == o && a.top + a.height + c - h > f ? 'top' : 'top' == o && a.top - h - c < 0 ? 'bottom' : 'right' == o && a.right + l > p ? 'left' : 'left' == o && a.left - l < m ? 'right' : o,
  n.removeClass(d).addClass(o)
}
var g = this.getCalculatedOffset(o, a, l, c);
this.applyPlacement(g, o),
this.hoverState = null;
var v = function () {
  i.$element.trigger('shown.bs.' + i.type)
};
e.support.transition && this.$tip.hasClass('fade') ? n.one(e.support.transition.end, v)  : v()
}
},
t.prototype.applyPlacement = function (t, i) {
var n,
o = this.tip(),
s = o[0].offsetWidth,
r = o[0].offsetHeight,
a = parseInt(o.css('margin-top'), 10),
l = parseInt(o.css('margin-left'), 10);
isNaN(a) && (a = 0),
isNaN(l) && (l = 0),
t.top = t.top + a,
t.left = t.left + l,
e.offset.setOffset(o[0], e.extend({
using: function (e) {
  o.css({
    top: Math.round(e.top),
    left: Math.round(e.left)
  })
}
}, t), 0),
o.addClass('in');
var c = o[0].offsetWidth,
u = o[0].offsetHeight;
if ('top' == i && u != r && (n = !0, t.top = t.top + r - u), /bottom|top/.test(i)) {
var d = 0;
t.left < 0 && (d = - 2 * t.left, t.left = 0, o.offset(t), c = o[0].offsetWidth, u = o[0].offsetHeight),
this.replaceArrow(d - s + c, c, 'left')
} else this.replaceArrow(u - r, u, 'top');
n && o.offset(t)
},
t.prototype.replaceArrow = function (e, t, i) {
this.arrow().css(i, e ? 50 * (1 - e / t) + '%' : '')
},
t.prototype.setContent = function () {
var e = this.tip(),
t = this.getTitle();
e.find('.tooltip-inner') [this.options.html ? 'html' : 'text'](t),
e.removeClass('fade in top bottom left right')
},
t.prototype.hide = function () {
function t() {
'in' != i.hoverState && n.detach(),
i.$element.trigger('hidden.bs.' + i.type)
}
var i = this,
n = this.tip(),
o = e.Event('hide.bs.' + this.type);
return this.$element.trigger(o),
o.isDefaultPrevented() ? void 0 : (n.removeClass('in'), e.support.transition && this.$tip.hasClass('fade') ? n.one(e.support.transition.end, t)  : t(), this.hoverState = null, this)
},
t.prototype.fixTitle = function () {
var e = this.$element;
(e.attr('title') || 'string' != typeof e.attr('data-original-title')) && e.attr('data-original-title', e.attr('title') || '').attr('title', '')
},
t.prototype.hasContent = function () {
return this.getTitle()
},
t.prototype.getPosition = function () {
var t = this.$element[0];
return e.extend({
}, 'function' == typeof t.getBoundingClientRect ? t.getBoundingClientRect()  : {
width: t.offsetWidth,
height: t.offsetHeight
}, this.$element.offset())
},
t.prototype.getCalculatedOffset = function (e, t, i, n) {
return 'bottom' == e ? {
top: t.top + t.height,
left: t.left + t.width / 2 - i / 2
}
 : 'top' == e ? {
top: t.top - n,
left: t.left + t.width / 2 - i / 2
}
 : 'left' == e ? {
top: t.top + t.height / 2 - n / 2,
left: t.left - i
}
 : {
top: t.top + t.height / 2 - n / 2,
left: t.left + t.width
}
},
t.prototype.getTitle = function () {
var e,
t = this.$element,
i = this.options;
return e = t.attr('data-original-title') || ('function' == typeof i.title ? i.title.call(t[0])  : i.title)
},
t.prototype.tip = function () {
return this.$tip = this.$tip || e(this.options.template)
},
t.prototype.arrow = function () {
return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
},
t.prototype.validate = function () {
this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
},
t.prototype.enable = function () {
this.enabled = !0
},
t.prototype.disable = function () {
this.enabled = !1
},
t.prototype.toggleEnabled = function () {
this.enabled = !this.enabled
},
t.prototype.toggle = function (t) {
var i = t ? e(t.currentTarget) [this.type](this.getDelegateOptions()).data('bs.' + this.type)  : this;
i.tip().hasClass('in') ? i.leave(i)  : i.enter(i)
},
t.prototype.destroy = function () {
clearTimeout(this.timeout),
this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
};
var i = e.fn.tooltip;
e.fn.tooltip = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('bs.tooltip'),
s = 'object' == typeof i && i;
(o || 'destroy' != i) && (o || n.data('bs.tooltip', o = new t(this, s)), 'string' == typeof i && o[i]())
})
},
e.fn.tooltip.Constructor = t,
e.fn.tooltip.noConflict = function () {
return e.fn.tooltip = i,
this
}
}(jQuery), !function (e) {
var t = function (e, t) {
this.init('popover', e, t)
};
t.prototype = e.extend({
}, e.fn.tooltip.Constructor.prototype, {
constructor: t,
setContent: function () {
var e = this.tip(),
t = this.getTitle(),
i = this.getContent();
e.find('.popover-title') [this.options.html ? 'html' : 'text'](t),
e.find('.popover-content') [this.options.html ? 'html' : 'text'](i),
e.removeClass('fade top bottom left right in')
},
hasContent: function () {
return this.getTitle() || this.getContent()
},
getContent: function () {
var e,
t = this.$element,
i = this.options;
return e = ('function' == typeof i.content ? i.content.call(t[0])  : i.content) || t.attr('data-content')
},
tip: function () {
return this.$tip || (this.$tip = e(this.options.template)),
this.$tip
},
destroy: function () {
this.hide().$element.off('.' + this.type).removeData(this.type)
}
});
var i = e.fn.popover;
e.fn.popover = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('popover'),
s = 'object' == typeof i && i;
o || n.data('popover', o = new t(this, s)),
'string' == typeof i && o[i]()
})
},
e.fn.popover.Constructor = t,
e.fn.popover.defaults = e.extend({
}, e.fn.tooltip.defaults, {
placement: 'right',
trigger: 'click',
content: '',
template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}),
e.fn.popover.noConflict = function () {
return e.fn.popover = i,
this
}
}(window.jQuery), !function (e) {
var t = function (t, i) {
this.options = e.extend({
}, e.fn.affix.defaults, i),
this.$window = e(window).on('scroll.affix.data-api', e.proxy(this.checkPosition, this)).on('click.affix.data-api', e.proxy(function () {
setTimeout(e.proxy(this.checkPosition, this), 1)
}, this)),
this.$element = e(t),
this.checkPosition()
};
t.prototype.checkPosition = function () {
if (this.$element.is(':visible')) {
var t,
i = e(document).height(),
n = this.$window.scrollTop(),
o = this.$element.offset(),
s = this.options.offset,
r = s.bottom,
a = s.top,
l = 'affix affix-top affix-bottom';
'object' != typeof s && (r = a = s),
'function' == typeof a && (a = s.top()),
'function' == typeof r && (r = s.bottom()),
t = null != this.unpin && n + this.unpin <= o.top ? !1 : null != r && o.top + this.$element.height() >= i - r ? 'bottom' : null != a && a >= n ? 'top' : !1,
this.affixed !== t && (this.affixed = t, this.unpin = 'bottom' == t ? o.top - n : null, this.$element.removeClass(l).addClass('affix' + (t ? '-' + t : '')))
}
};
var i = e.fn.affix;
e.fn.affix = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('affix'),
s = 'object' == typeof i && i;
o || n.data('affix', o = new t(this, s)),
'string' == typeof i && o[i]()
})
},
e.fn.affix.Constructor = t,
e.fn.affix.defaults = {
offset: 0
},
e.fn.affix.noConflict = function () {
return e.fn.affix = i,
this
},
e(window).on('load', function () {
e('[data-spy="affix"]').each(function () {
var t = e(this),
i = t.data();
i.offset = i.offset || {
},
i.offsetBottom && (i.offset.bottom = i.offsetBottom),
i.offsetTop && (i.offset.top = i.offsetTop),
t.affix(i)
})
})
}(window.jQuery), !function (e) {
var t = '[data-dismiss="alert"]',
i = function (i) {
e(i).on('click', t, this.close)
};
i.prototype.close = function (t) {
function i() {
n.trigger('closed').remove()
}
var n,
o = e(this),
s = o.attr('data-target');
s || (s = o.attr('href'), s = s && s.replace(/.*(?=#[^\s]*$)/, '')),
n = e(s),
t && t.preventDefault(),
n.length || (n = o.hasClass('alert') ? o : o.parent()),
n.trigger(t = e.Event('close')),
t.isDefaultPrevented() || (n.removeClass('in'), e.support.transition && n.hasClass('fade') ? n.on(e.support.transition.end, i)  : i())
};
var n = e.fn.alert;
e.fn.alert = function (t) {
return this.each(function () {
var n = e(this),
o = n.data('alert');
o || n.data('alert', o = new i(this)),
'string' == typeof t && o[t].call(n)
})
},
e.fn.alert.Constructor = i,
e.fn.alert.noConflict = function () {
return e.fn.alert = n,
this
},
e(document).on('click.alert.data-api', t, i.prototype.close)
}(window.jQuery), !function (e) {
var t = function (t, i) {
this.$element = e(t),
this.options = e.extend({
}, e.fn.button.defaults, i)
};
t.prototype.setState = function (e) {
var t = 'disabled',
i = this.$element,
n = i.data(),
o = i.is('input') ? 'val' : 'html';
e += 'Text',
n.resetText || i.data('resetText', i[o]()),
i[o](n[e] || this.options[e]),
setTimeout(function () {
'loadingText' == e ? i.addClass(t).attr(t, t)  : i.removeClass(t).removeAttr(t)
}, 0)
},
t.prototype.toggle = function () {
var e = this.$element.closest('[data-toggle="buttons-radio"]');
e && e.find('.active').removeClass('active'),
this.$element.toggleClass('active')
};
var i = e.fn.button;
e.fn.button = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('button'),
s = 'object' == typeof i && i;
o || n.data('button', o = new t(this, s)),
'toggle' == i ? o.toggle()  : i && o.setState(i)
})
},
e.fn.button.defaults = {
loadingText: 'loading...'
},
e.fn.button.Constructor = t,
e.fn.button.noConflict = function () {
return e.fn.button = i,
this
},
e(document).on('click.button.data-api', '[data-toggle^=button]', function (t) {
var i = e(t.target);
i.hasClass('btn') || (i = i.closest('.btn')),
i.button('toggle')
})
}(window.jQuery), !function (e) {
var t = function (t, i) {
this.$element = e(t),
this.options = e.extend({
}, e.fn.collapse.defaults, i),
this.options.parent && (this.$parent = e(this.options.parent)),
this.options.toggle && this.toggle()
};
t.prototype = {
constructor: t,
dimension: function () {
var e = this.$element.hasClass('width');
return e ? 'width' : 'height'
},
show: function () {
var t,
i,
n,
o;
if (!this.transitioning && !this.$element.hasClass('in')) {
  if (t = this.dimension(), i = e.camelCase(['scroll',
  t].join('-')), n = this.$parent && this.$parent.find('> .accordion-group > .in'), n && n.length) {
    if (o = n.data('collapse'), o && o.transitioning) return;
    n.collapse('hide'),
    o || n.data('collapse', null)
  }
  this.$element[t](0),
  this.transition('addClass', e.Event('show'), 'shown'),
  e.support.transition && this.$element[t](this.$element[0][i])
}
},
hide: function () {
var t;
!this.transitioning && this.$element.hasClass('in') && (t = this.dimension(), this.reset(this.$element[t]()), this.transition('removeClass', e.Event('hide'), 'hidden'), this.$element[t](0))
},
reset: function (e) {
var t = this.dimension();
return this.$element.removeClass('collapse') [t](e || 'auto') [0].offsetWidth,
this.$element[null !== e ? 'addClass' : 'removeClass']('collapse'),
this
},
transition: function (t, i, n) {
var o = this,
s = function () {
  'show' == i.type && o.reset(),
  o.transitioning = 0,
  o.$element.trigger(n)
};
this.$element.trigger(i),
i.isDefaultPrevented() || (this.transitioning = 1, this.$element[t]('in'), e.support.transition && this.$element.hasClass('collapse') ? this.$element.one(e.support.transition.end, s)  : s())
},
toggle: function () {
this[this.$element.hasClass('in') ? 'hide' : 'show']()
}
};
var i = e.fn.collapse;
e.fn.collapse = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('collapse'),
s = e.extend({
}, e.fn.collapse.defaults, n.data(), 'object' == typeof i && i);
o || n.data('collapse', o = new t(this, s)),
'string' == typeof i && o[i]()
})
},
e.fn.collapse.defaults = {
toggle: !0
},
e.fn.collapse.Constructor = t,
e.fn.collapse.noConflict = function () {
return e.fn.collapse = i,
this
},
e(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (t) {
var i,
n = e(this),
o = n.attr('data-target') || t.preventDefault() || (i = n.attr('href')) && i.replace(/.*(?=#[^\s]+$)/, ''),
s = e(o).data('collapse') ? 'toggle' : n.data();
n[e(o).hasClass('in') ? 'addClass' : 'removeClass']('collapsed'),
e(o).collapse(s)
})
}(window.jQuery), !function (e) {
var t = function (t, i) {
this.$element = e(t),
this.$indicators = this.$element.find('.carousel-indicators'),
this.options = i,
'hover' == this.options.pause && this.$element.on('mouseenter', e.proxy(this.pause, this)).on('mouseleave', e.proxy(this.cycle, this))
};
t.prototype = {
cycle: function (t) {
return t || (this.paused = !1),
this.interval && clearInterval(this.interval),
this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
this
},
getActiveIndex: function () {
return this.$active = this.$element.find('.item.active'),
this.$items = this.$active.parent().children(),
this.$items.index(this.$active)
},
to: function (t) {
var i = this.getActiveIndex(),
n = this;
if (!(t > this.$items.length - 1 || 0 > t)) return this.sliding ? this.$element.one('slid', function () {
  n.to(t)
})  : i == t ? this.pause().cycle()  : this.slide(t > i ? 'next' : 'prev', e(this.$items[t]))
},
pause: function (t) {
return t || (this.paused = !0),
this.$element.find('.next, .prev').length && e.support.transition.end && (this.$element.trigger(e.support.transition.end), this.cycle(!0)),
clearInterval(this.interval),
this.interval = null,
this
},
next: function () {
return this.sliding ? void 0 : this.slide('next')
},
prev: function () {
return this.sliding ? void 0 : this.slide('prev')
},
slide: function (t, i) {
var n,
o = this.$element.find('.item.active'),
s = i || o[t](),
r = this.interval,
a = 'next' == t ? 'left' : 'right',
l = 'next' == t ? 'first' : 'last',
c = this;
if (this.sliding = !0, r && this.pause(), s = s.length ? s : this.$element.find('.item') [l](), n = e.Event('slide', {
  relatedTarget: s[0],
  direction: a
}), !s.hasClass('active')) {
  if (this.$indicators.length && (this.$indicators.find('.active').removeClass('active'), this.$element.one('slid', function () {
    var t = e(c.$indicators.children() [c.getActiveIndex()]);
    t && t.addClass('active')
  })), e.support.transition && this.$element.hasClass('slide')) {
    if (this.$element.trigger(n), n.isDefaultPrevented()) return;
    s.addClass(t),
    s[0].offsetWidth,
    o.addClass(a),
    s.addClass(a),
    this.$element.one(e.support.transition.end, function () {
      s.removeClass([t,
      a].join(' ')).addClass('active'),
      o.removeClass(['active',
      a].join(' ')),
      c.sliding = !1,
      setTimeout(function () {
        c.$element.trigger('slid')
      }, 0)
    })
  } else {
    if (this.$element.trigger(n), n.isDefaultPrevented()) return;
    o.removeClass('active'),
    s.addClass('active'),
    this.sliding = !1,
    this.$element.trigger('slid')
  }
  return r && this.cycle(),
  this
}
}
};
var i = e.fn.carousel;
e.fn.carousel = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('carousel'),
s = e.extend({
}, e.fn.carousel.defaults, 'object' == typeof i && i),
r = 'string' == typeof i ? i : s.slide;
o || n.data('carousel', o = new t(this, s)),
'number' == typeof i ? o.to(i)  : r ? o[r]()  : s.interval && o.pause().cycle()
})
},
e.fn.carousel.defaults = {
interval: 5000,
pause: 'hover'
},
e.fn.carousel.Constructor = t,
e.fn.carousel.noConflict = function () {
return e.fn.carousel = i,
this
},
e(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (t) {
var i,
n,
o = e(this),
s = e(o.attr('data-target') || (i = o.attr('href')) && i.replace(/.*(?=#[^\s]+$)/, '')),
r = e.extend({
}, s.data(), o.data());
s.carousel(r),
(n = o.attr('data-slide-to')) && s.data('carousel').pause().to(n).cycle(),
t.preventDefault()
})
}(window.jQuery), !function (e) {
var t = function (t, i) {
this.$element = e(t),
this.options = e.extend({
}, e.fn.typeahead.defaults, i),
this.matcher = this.options.matcher || this.matcher,
this.sorter = this.options.sorter || this.sorter,
this.highlighter = this.options.highlighter || this.highlighter,
this.updater = this.options.updater || this.updater,
this.source = this.options.source,
this.$menu = e(this.options.menu),
this.shown = !1,
this.listen()
};
t.prototype = {
constructor: t,
select: function () {
var e = this.$menu.find('.active').attr('data-value');
return this.$element.val(this.updater(e)).change(),
this.hide()
},
updater: function (e) {
return e
},
show: function () {
var t = e.extend({
}, this.$element.position(), {
  height: this.$element[0].offsetHeight
});
return this.$menu.insertAfter(this.$element).css({
  top: t.top + t.height,
  left: t.left
}).show(),
this.shown = !0,
this
},
hide: function () {
return this.$menu.hide(),
this.shown = !1,
this
},
lookup: function () {
var t;
return this.query = this.$element.val(),
!this.query || this.query.length < this.options.minLength ? this.shown ? this.hide()  : this : (t = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this))  : this.source, t ? this.process(t)  : this)
},
process: function (t) {
var i = this;
return t = e.grep(t, function (e) {
  return i.matcher(e)
}),
t = this.sorter(t),
t.length ? this.render(t.slice(0, this.options.items)).show()  : this.shown ? this.hide()  : this
},
matcher: function (e) {
return ~e.toLowerCase().indexOf(this.query.toLowerCase())
},
sorter: function (e) {
for (var t, i = [
], n = [
], o = [
]; t = e.shift(); ) t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? n.push(t)  : o.push(t)  : i.push(t);
return i.concat(n, o)
},
highlighter: function (e) {
var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
return e.replace(new RegExp('(' + t + ')', 'ig'), function (e, t) {
  return '<strong>' + t + '</strong>'
})
},
render: function (t) {
var i = this;
return t = e(t).map(function (t, n) {
  return t = e(i.options.item).attr('data-value', n),
  t.find('a').html(i.highlighter(n)),
  t[0]
}),
t.first().addClass('active'),
this.$menu.html(t),
this
},
next: function () {
var t = this.$menu.find('.active').removeClass('active'),
i = t.next();
i.length || (i = e(this.$menu.find('li') [0])),
i.addClass('active')
},
prev: function () {
var e = this.$menu.find('.active').removeClass('active'),
t = e.prev();
t.length || (t = this.$menu.find('li').last()),
t.addClass('active')
},
listen: function () {
this.$element.on('focus', e.proxy(this.focus, this)).on('blur', e.proxy(this.blur, this)).on('keypress', e.proxy(this.keypress, this)).on('keyup', e.proxy(this.keyup, this)),
this.eventSupported('keydown') && this.$element.on('keydown', e.proxy(this.keydown, this)),
this.$menu.on('click', e.proxy(this.click, this)).on('mouseenter', 'li', e.proxy(this.mouseenter, this)).on('mouseleave', 'li', e.proxy(this.mouseleave, this))
},
eventSupported: function (e) {
var t = e in this.$element;
return t || (this.$element.setAttribute(e, 'return;'), t = 'function' == typeof this.$element[e]),
t
},
move: function (e) {
if (this.shown) {
  switch (e.keyCode) {
    case 9:
    case 13:
    case 27:
      e.preventDefault();
      break;
    case 38:
      e.preventDefault(),
      this.prev();
      break;
    case 40:
      e.preventDefault(),
      this.next()
  }
  e.stopPropagation()
}
},
keydown: function (t) {
this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [
  40,
  38,
  9,
  13,
  27
]),
this.move(t)
},
keypress: function (e) {
this.suppressKeyPressRepeat || this.move(e)
},
keyup: function (e) {
switch (e.keyCode) {
  case 40:
  case 38:
  case 16:
  case 17:
  case 18:
    break;
  case 9:
  case 13:
    if (!this.shown) return;
    this.select();
    break;
  case 27:
    if (!this.shown) return;
    this.hide();
    break;
  default:
    this.lookup()
}
e.stopPropagation(),
e.preventDefault()
},
focus: function () {
this.focused = !0
},
blur: function () {
this.focused = !1,
!this.mousedover && this.shown && this.hide()
},
click: function (e) {
e.stopPropagation(),
e.preventDefault(),
this.select(),
this.$element.focus()
},
mouseenter: function (t) {
this.mousedover = !0,
this.$menu.find('.active').removeClass('active'),
e(t.currentTarget).addClass('active')
},
mouseleave: function () {
this.mousedover = !1,
!this.focused && this.shown && this.hide()
}
};
var i = e.fn.typeahead;
e.fn.typeahead = function (i) {
return this.each(function () {
var n = e(this),
o = n.data('typeahead'),
s = 'object' == typeof i && i;
o || n.data('typeahead', o = new t(this, s)),
'string' == typeof i && o[i]()
})
},
e.fn.typeahead.defaults = {
source: [
],
items: 8,
menu: '<ul class="typeahead dropdown-menu"></ul>',
item: '<li><a href="#"></a></li>',
minLength: 1
},
e.fn.typeahead.Constructor = t,
e.fn.typeahead.noConflict = function () {
return e.fn.typeahead = i,
this
},
e(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function () {
var t = e(this);
t.data('typeahead') || t.typeahead(t.data())
})
}(window.jQuery),
_wAMD.define('vendor/bootstrap', function () {
}),
_wAMD.define('tpl!components/plan-comparison/plan-item', [
], function () {
return '<h2 class="plan-choice-header">{{planName}}</h2>\n<p id="plan-choice-{{planType}}-description" class="plan-choice-content">{{planDescription}}</p>\n<h2 class="plan-choice-price">${{planPrice}}{{#paidPlan}}<span class=\'price-plus\'>+</span>{{/paidPlan}}</h2>\n<p class="plan-choice-subtext">{{#tl}}per month{{/tl}}</p>\n{{#planLink}}\n\t<a href="#{{planLink}}" class="btn-flat plan-button">{{linkText}}</a>\n{{/planLink}}\n'
}),
_wAMD.define('components/plan-comparison/PlanItem', [
'backbone-all',
'mustache',
'jquery',
'vendor/bootstrap',
'tpl!components/plan-comparison/plan-item'
], function (e, t, i, n, o) {
var s = e.Marionette.ItemView.extend({
template: t.compile(o),
className: 'plan-choice',
onRender: function () {
this.$el.data({
  'plan-type': this.model.get('planType')
})
},
onShow: function () {

'no' == bootstrapData.freeTrial ? this.$el.find('.plan-button').hide()  : this.$el.addClass('abtest')
}
});
return s
}),
_wAMD.define('tpl!public/vertical/components/plan-details', [
], function () {
return '<div id="plan-details-overlay">\n\t<span class="btn-x">&times;</span>\n\t<div class="weebly-overlay-logo w-icon-li-weebly-logo"></div>\n\t<div class="plan-details">\n\t\t<div class="plans-header">\n\t\t\t<div class="content">\n\t\t\t\t<h1>{{#tl}}Compare Plans{{/tl}}</h1>\n\t\t\t\t<h3>{{#tl}}100% Happiness Guarantee{{/tl}} \n\t\t\t\t<span class="w-icon-question tip-icon" data-toggle="tooltip" data-placement="bottom" title="{{#esc_attr}}{{#tl}}If you are not 100% happy, request a refund through live chat or email within 30 days and we\'ll gladly refund you in full, no questions asked.{{/tl}}{{/esc_attr}}"></span>\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="plans-footer">\n\n\t\t\t<div id="floating-plan-header">\n\t\t\t\t<table cellspacing="0" cellpadding="0" class="plan-comparison">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t\t<h2>{{#tl}}Free{{/tl}}</h2>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t\t<h2>{{#tl}}Starter{{/tl}}</h2>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t\t<h2>{{#tl}}Pro{{/tl}}</h2>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t\t<h2>{{#tl}}Business{{/tl}}</h2>\n\t\t\t\t\t\t</th>\n\t\t\t\t\t</tr>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<table cellspacing="0" cellpadding="0" class="plan-comparison" id="plans-table">\n\t\t\t\t<tr>\n\t\t\t\t\t<th></th>\n\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t<h2>{{#tl}}Free{{/tl}}</h2>\n\t\t\t\t\t\t<h3 class="subtitle">$0/{{#tl}}mo{{/tl}}</h3>\n\t\t\t\t\t\t<a href="#plans/free" data-plan="free" class="btn-flat btn-flat-outline btn-flat-light">{{#tl}}Choose{{/tl}}</a>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t<h2>{{#tl}}Starter{{/tl}}</h2>\n\t\t\t\t\t\t<h3 class="subtitle">$4/{{#tl}}mo{{/tl}}</h3>\n\t\t\t\t\t\t<a href="#plans/starter" data-plan="starter" class="btn-flat btn-flat-outline btn-flat-light">{{#tl}}Free Trial{{/tl}}</a>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t<h2>{{#tl}}Pro{{/tl}}</h2>\n\t\t\t\t\t\t<h3 class="subtitle">$8/{{#tl}}mo{{/tl}}</h3>\n\t\t\t\t\t\t<a href="#plans/pro" data-plan="pro" class="btn-flat btn-flat-outline btn-flat-light">{{#tl}}Free Trial{{/tl}}</a>\n\t\t\t\t\t</th>\n\t\t\t\t\t<th class="plan-header">\n\t\t\t\t\t\t<h2>{{#tl}}Business{{/tl}}</h2>\n\t\t\t\t\t\t<h3 class="subtitle">$25/{{#tl}}mo{{/tl}}</h3>\n\t\t\t\t\t\t<a href="#plans/business" data-plan="business" class="btn-flat btn-flat-outline btn-flat-light">{{#tl}}Free Trial{{/tl}}</a>\n\t\t\t\t\t</th>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Create powerful, professional sites with dynamic and easy to use drag & drop tools. With nothing to install or upgrade you\'re free to focus on the important stuff.{{/tl}}{{/esc_attr}}">{{#tl}}Drag & drop builder{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Never worry about hosting again. Whether you have 10 or 10 million visitors, enjoy exceptional site speed and reliability with a data redundant, cloud based hosting infrastructure backing you up at all times.{{/tl}}{{/esc_attr}}">{{#tl}}Free hosting{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr id="plan-detail-tr-unlimited-pages">\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Create as many pages as you need. Unlimited pages means you have zero restrictions on content volume and can build what you want without a page cap.{{/tl}}{{/esc_attr}}">{{#tl}}Unlimited pages{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr id="plan-detail-tr-page-limit">\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Create as many pages as you need with the Pro and Business plans. Unlimited pages means you have zero restrictions on content volume and can build what you want without a page cap.{{/tl}}{{/esc_attr}}">{{#tl}}Number of pages{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td>{{#tl}}Up to 5{{/tl}}</td>\n\t\t\t\t\t<td>{{#tl}}Up to 10{{/tl}}</td>\n\t\t\t\t\t<td>{{#tl}}Unlimited{{/tl}}</td>\n\t\t\t\t\t<td>{{#tl}}Unlimited{{/tl}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Connect a domain to publish your site to a domain you already own (example.com) instead of a free subdomain of weebly.com.{{/tl}}{{/esc_attr}}">{{#tl}}Connect your domain{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Learn more about your site visitors with expanded stats. Understand which pages are most popular, how people find your site, and which sites refer you traffic.{{/tl}}{{/esc_attr}}">{{#tl}}Expanded stats{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}We aim to provide everyone with amazing support, but Premium users receive the fastest responses from the most qualified members of our team.{{/tl}}{{/esc_attr}}">{{#tl}}Premium support{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr id="plan-detail-customized-footer">\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}With the customizable footer, you have the flexibility to include your site menu, social icons, a contact form, logo, and more at the bottom of your site.{{/tl}}{{/esc_attr}}">{{#tl}}Customizable footer{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr id="plan-detail-no-weebly-link">\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Remove the \'Create a free website with Weebly\' footer link from the bottom of your site with one click.{{/tl}}{{/esc_attr}}">{{#tl}}Remove Weebly link{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr id="plan-detail-own-favicon">\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Give your site a more professional look by uploading your own favicon. Visitors will see this icon in their address bar and browser tab.{{/tl}}{{/esc_attr}}">{{#tl}}Your own favicon{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Add a header slideshow to showcase what’s important in an interactive and professional way. Supports various transition effects, captions, and linking.{{/tl}}{{/esc_attr}}">{{#tl}}Header slideshow{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Display your videos with stunning clarity in our unbranded HD video player. Our HTML5 players ensure smooth viewing on web, mobile, and iPad.{{/tl}}{{/esc_attr}}">{{#tl}}HD video &amp; audio players{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Enable password protection to keep specified areas of your website hidden from view. Only those with the password are able to gain access.{{/tl}}{{/esc_attr}}">{{#tl}}Password protect pages{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Site search helps your visitors quickly find the information they need. Search results display beautifully right within the theme of your site.{{/tl}}{{/esc_attr}}">{{#tl}}Site search{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr id="plan-detail-ssl-security">\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}The Business plan includes a free SSL certificate for your domain (normally $69/year). SSL ensures that visitors navigate your site over a secured 128-bit encrypted connection, displaying a lock in the address bar. If using eCommerce, it enables customers to checkout directly on your domain.{{/tl}}{{/esc_attr}}">{{#tl}}SSL security{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Build a membership website that lets people log in to access special content. You can add members, manage them in groups and control which pages they have access to.{{/tl}}{{/esc_attr}}">{{#tl}}Membership{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td>{{#up_to}}20{{/up_to}}</td>\n\t\t\t\t\t<td>{{#tl}}Unlimited{{/tl}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Add a Register button to your website and allow site visitors to sign up to become members. You can automatically approve new members or manually review each one, and get alerted when a new member joins.{{/tl}}{{/esc_attr}}">{{#tl}}Member registration{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}We\'ve partnered with Google to provide $100 of free advertising (after spending $25) to new Google Adwords customers. Coupon will be emailed after purchase and is only available to customers in the U.S. and Canada.{{/tl}}{{/esc_attr}}">{{#tl}}Google Advertising credit{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td>$100</td>\n\t\t\t\t\t<td>$100</td>\n\t\t\t\t\t<td>$100</td>\n\t\t\t\t\t<td>$100</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr class="breaker">\n\t\t\t\t\t<td>{{#tl}}eCommerce{{/tl}} <span class="w-icon-question tip-icon"></span></td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Sell an unlimited number of products with the Business plan.{{/tl}}{{/esc_attr}}">{{#tl}}Number of products{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td>{{#up_to}}5{{/up_to}}</td>\n\t\t\t\t\t<td>{{#up_to}}10{{/up_to}}</td>\n\t\t\t\t\t<td>{{#up_to}}25{{/up_to}}</td>\n\t\t\t\t\t<td>{{#tl}}Unlimited{{/tl}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}The Weebly transaction fee is charged on top of the standard processing fees charged by PayPal, Stripe, etc. Choose the Business plan to remove the Weebly transaction fee.{{/tl}}{{/esc_attr}}">{{#tl}}Weebly transaction fee{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td>3%</td>\n\t\t\t\t\t<td>3%</td>\n\t\t\t\t\t<td>3%</td>\n\t\t\t\t\t<td>0%</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}The shopping cart integrates directly within your site and theme, providing a seamless checkout experience that works everywhere -- including mobile and tablets. With the Business plan, customers checkout on your domain instead of checkout.weebly.com.{{/tl}}{{/esc_attr}}">{{#tl}}Integrated shopping cart{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td>checkout.weebly.com</td>\n\t\t\t\t\t<td>checkout.weebly.com</td>\n\t\t\t\t\t<td>checkout.weebly.com</td>\n\t\t\t\t\t<td>{{#tl}}On your domain{{/tl}}</td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Sell digital goods like ZIP files, songs, and eBooks. Customers receive a secure link to download the files immediately after purchase and by email. You control how many times files can be downloaded or how many days they are available for download.{{/tl}}{{/esc_attr}}">{{#tl}}Digital goods{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Track your inventory so that you always know how many items are left in stock. Customers are automatically shown when a product is \'out of stock\'.{{/tl}}{{/esc_attr}}">{{#tl}}Inventory management{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Flexible shipping options allow you to offer \'free shipping\', set rates based on price or weight, and define carriers and delivery speed. Fine-grained tax controls calculate and add taxes to orders with full international capabilities.{{/tl}}{{/esc_attr}}">{{#tl}}Shipping &amp; tax calculator{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t\t<tr>\n\t\t\t\t\t<td><div data-toggle="tooltip" data-placement="right" title="{{#esc_attr}}{{#tl}}Offer coupon codes to drive sales, encourage repeat buying behavior, and attract new customers to your store. Flexible options including $ discount, % discount, and the ability to define which products are eligible by offer.{{/tl}}{{/esc_attr}}">{{#tl}}Coupon codes{{/tl}} <span class="w-icon-question tip-icon"></span></div></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td></td>\n\t\t\t\t\t<td><span class="w-icon-check-mark"></span></td>\n\t\t\t\t</tr>\n\t\t\t</table>\n\t\t\t{{#showPhone}}\n\t\t\t\t<div class="plans-phone-number">\n\t\t\t\t\t{{#tl}}Questions? Call us: {{phoneNumber}}{{/tl}}\n\t\t\t\t</div>\n\t\t\t{{/showPhone}}\n\t\t</div>\n\t</div>\n\n\t<div class="plan-form">\n\t\t<h1>{{#tl}}Sign Up to Continue{{/tl}}</h1>\n\t\t<div class="preview">\n\t\t\t<div class="selected-plan"></div>\n\t\t</div>\n\n\t\t<div class="form">\n\t\t\t<form class="signup-form" id="plan-signup-form">\n\t\t\t\t<input type="text" name="full_name" placeholder="{{#esc_attr}}{{#tl}}Full Name{{/tl}}{{/esc_attr}}" autocomplete="off" class="full-name" id="plan-signup-form-name">\n\t\t\t\t<input type="text" name="email" placeholder="{{#esc_attr}}{{#tl}}Email{{/tl}}{{/esc_attr}}" autocomplete="off" id="plan-signup-form-email">\n\t\t\t\t<input type="password" name="password" placeholder="{{#esc_attr}}{{#tl}}Password{{/tl}}{{/esc_attr}}" autocomplete="off" id="plan-signup-form-pass">\n\t\t\t\t<input type="hidden" name="selected-plan" id="plan-signup-form-plan">\n\t\t\t\t<input type="hidden" name="response" id="plan-signup-form-response">\n\t\t\t\t<p id="plan-signup-form-error"></p>\n\t\t\t\t<input type="submit" value="{{#esc_attr}}{{#tl}}Sign Up{{/tl}}{{/esc_attr}}" class="button" id="plan-signup-form-submit">\n\t\t\t\t<p class="signup-note">{{#tl}}We will collect billing information in the next step.{{/tl}}</p>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>'
}),
_wAMD.define('public/vertical/shared/views/ComparePlansView', [
'backbone',
'jquery',
'mustache',
'public/vertical/shared/app',
'public/header/app',
'components/plan-comparison/PlanItem',
'tpl!public/vertical/components/plan-details',
'util/general-utils',
'jquery-ui/core',
'legacy/weebly_ensure_account'
], function (e, t, i, n, o, s, r) {
var a = e.Marionette.ItemView.extend({
template: i.compile(r),
ui: {
selectedPlan: '.selected-plan',
signupButtons: '.plan-header .btn-flat',
floatingHeader: '.floating-plan-header',
form: '.plan-form',
details: '.plan-details',
preview: '.plan-form',
filterTag: '.filter-tag',
closeButton: '.btn-x',
backButton: '.btn-back',
signupNote: '.signup-note',
selector: '#plan-details-overlay',
errorMsg: '#plan-signup-form-error',
signupName: '#plan-signup-form-name',
signupPlan: '#plan-signup-form-plan',
signupEmail: '#plan-signup-form-email',
signupPass: '#plan-signup-form-pass',
signupSubmit: '#plan-signup-form-submit',
overlayInputs: '#plan-signup-form input'
},
templateHelpers: function () {
return {
  showPhone: window.phone && 'yes' == window.phone.showPhoneNumber,
  phoneNumber: window.phone ? window.phone.phoneNumber : '',
  up_to: function () {
    return function (e, t) {
      return _W.tl('Up to %i').replace('%i', t(e))
    }
  }
}
},
events: {
'click @ui.closeButton': 'fadeOutOverlay',
'click @ui.backButton': 'goBack',
'click @ui.signupButtons': 'showSelectedPlan'
},
initialize: function (e) {
var t = this;
t.bindUIElements(),
e = e || {
},
this.plans = e.plans,
this.selected_plan = e.selected_plan
},
onRender: function () {
this.$el.find('[data-toggle=tooltip]').tooltip().on('hide.bs.tooltip', function (e) {
  e.preventDefault(),
  t('div.tooltip.in').removeClass('in').hide()
}),
this.$el.find('.plans-footer').on('scroll', _.throttle(this.showScrollHeader, 50, this)),
this.setupColumnHover(),
this.ui.overlayInputs.placeholder()
},
initSignup: function () {
var e = this;
e.signup || (e.signup = new Weebly.login({
  signup_only: !0,
  require_tos_check: !1,
  signup_form: 'plan-signup-form',
  signup_name_field: 'plan-signup-form-name',
  signup_email_field: 'plan-signup-form-email',
  signup_password_field: 'plan-signup-form-pass',
  signup_response_field: 'plan-signup-form-response',
  signup_error_handler: function (t) {
    e.ui.errorMsg.text(t),
    e.ui.errorMsg.show(),
    e.ui.signupName.addClass('input-error'),
    e.ui.signupEmail.addClass('input-error'),
    e.ui.signupPass.addClass('input-error')
  },
  onLoadingStart: function () {
    e.ui.errorMsg.hide(),
    e.ui.signupName.removeClass('input-error'),
    e.ui.signupEmail.removeClass('input-error'),
    e.ui.signupPass.removeClass('input-error')
  },
  onSignupSuccess: function () {
    window.location.href = '/weebly/userHome.php?preselected_plan_type=' + this.selected_plan
  },
  onLoginInstead: function () {
    e.fadeOutOverlay();
    var t = {
      message: _W.tl('You already have an account. Please log in.'),
      username: e.ui.signupEmail.val(),
      password: e.ui.signupPass.val()
    };
    n.vent.trigger('login:open:suggestion', t)
  }
}))
},
showScrollHeader: function (e) {
var i = t(e.currentTarget).scrollTop();
i > 180 ? t('#floating-plan-header').fadeIn(400)  : t('#floating-plan-header').fadeOut(200)
},
onShow: function () {
var e = this;
this.$el.find('#plan-details-overlay').fadeIn(300),
e.initSignup(),
'no' == bootstrapData.freeTrial ? this.$el.find('.btn-flat-outline').text('Sign up')  : this.$el.find('.plans-header h3').hide(),
this.selected_plan && this.showSelectedPlan(),
n.vent.on('key:escape', function () {
  e.fadeOutOverlay()
}),
n.vent.trigger('overlay:shown'),
'yes' == window.bootstrapData.starterProComparison && (t('#plan-detail-customized-footer').find('.w-icon-check-mark').eq(0).hide(), t('#plan-detail-no-weebly-link').find('.w-icon-check-mark').eq(0).hide(), t('#plan-detail-own-favicon').find('.w-icon-check-mark').eq(0).hide()),
'yes' == window.bootstrapData.sitePageLimits ? t('#plan-detail-tr-unlimited-pages').hide()  : t('#plan-detail-tr-page-limit').hide()
},
showSelectedPlan: function (e) {
var i = this;
e && (e.preventDefault(), i.selected_plan = t(e.currentTarget).data('plan'), n.vent.trigger('plans:open', null, i.selected_plan));
var o = this.plans.find(function (e) {
  return e.get('planType') == i.selected_plan
});
o.set('planLink', '');
var r = new s({
  model: o
});
window.alreadySignedUp ? window.location.href = '/weebly/userHome.php?preselected_plan_type=' + i.selected_plan : (i.ui.selectedPlan.html(r.render().el), i.ui.details.hide(), i.ui.form.show(), ('free' == i.selected_plan || 'without_credit_card' == bootstrapData.freeTrial) && i.ui.signupNote.hide()),
i.setSignupPlan(i.selected_plan)
},
setSignupPlan: function (e) {
this.signup.params.ajax_signup_params = {
  preselected_plan_type: e
}
},
goBack: function () {
evt && evt.preventDefault(),
n.vent.trigger('plans:compare')
},
setupColumnHover: function () {
var e = this;
$plansTable = this.$el.find('#plans-table'),
$tableCells = $plansTable.find('td, th'),
$tableCells.hover(function () {
  var e = parseInt(t(this).index()) + 1;
  $plansTable.find('tr td:nth-child(' + e + ')').addClass('highlight'),
  $plansTable.find('tr th:nth-child(' + e + ')').addClass('highlight')
}, function () {
  var e = parseInt(t(this).index()) + 1;
  $plansTable.find('tr td:nth-child(' + e + ')').removeClass('highlight'),
  $plansTable.find('tr th:nth-child(' + e + ')').removeClass('highlight')
}).on('click', function () {
  var i = parseInt(t(this).index()) + 1;
  e.selected_plan = $plansTable.find('tr th:nth-child(' + i + ') a').data('plan'),
  e.showSelectedPlan()
})
},
fadeOutOverlay: function () {
var e = this;
e.ui.selector.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close')
})
}
});
return a
}),
_wAMD.define('tpl!public/vertical/components/plan-selector', [
], function () {
return '<div id="plan-selector-overlay">\n\t<div class="weebly-overlay-logo w-icon-li-weebly-logo"></div>\n\t<div class="plan-details">\n\t\t<div class="plans-header">\n\t\t\t<div class="content">\n\t\t\t\t<h1>{{#tl}}Perfect Pricing{{/tl}}</h1>\n\t\t\t\t<h3>{{#tl}}100% Happiness Guarantee{{/tl}} \n\t\t\t\t<span class="w-icon-question tip-icon" data-toggle="tooltip" data-placement="bottom" title="{{#esc_attr}}{{#tl}}If you are not 100% happy, request a refund through live chat or email within 30 days and we\'ll gladly refund you in full, no questions asked.{{/tl}}{{/esc_attr}}"></span>\n\t\t\t\t</h3>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="plans-footer">\n\t\t\t<div class="content-wrap">\n\t\t\t\t<h1>{{#tl}}Choose a Plan{{/tl}}</h1>\n\t\t\t\t<div class="plan-items">\n\t\t\t\t  <!-- plan items added in PlansView.js -->\n\t\t\t\t</div>\n\t\t\t\t<div class="actions">\n\t\t\t\t\t<h2>{{#tl}}Start a free trial to experience any premium plan for 15 days, no credit card required.{{/tl}}</h2>\n\t\t\t\t\t<a href="#plans/compare" class="button compare-plans">{{#tl}}Compare Plans{{/tl}}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>'
}),
_wAMD.define('public/vertical/shared/views/PlanSelectorView', [
'backbone',
'jquery',
'vendor/bootstrap',
'public/vertical/shared/app',
'components/plan-comparison/PlanItem',
'tpl!public/vertical/components/plan-selector'
], function (e, t, i, n, o, s) {
var r = e.Marionette.CompositeView.extend({
template: Mustache.compile(s),
plans: [
{
  planType: 'free',
  planName: _W.tl('Free'),
  planDescription: _W.tl('Everything you need for a high quality site. Create unlimited pages and host your site for free.'),
  planPrice: '0',
  planLink: 'plans/type/free',
  linkText: 'Choose'
},
{
  planType: 'starter',
  planName: _W.tl('Starter'),
  planDescription: _W.tl('Connect your own domain, remove Weebly branding, expanded site stats, and premium support.'),
  planPrice: '4',
  planLink: 'plans/type/starter',
  linkText: 'Free Trial'
},
{
  planType: 'pro',
  planName: _W.tl('Pro'),
  planDescription: _W.tl('Professional multimedia features, powerful site search, and password protection.'),
  planPrice: '8',
  planLink: 'plans/type/pro',
  linkText: 'Free Trial'
},
{
  planType: 'business',
  planName: _W.tl('Business'),
  planDescription: _W.tl('Fully integrated eCommerce and all available features. The complete package.'),
  planPrice: '25',
  planLink: 'plans/type/business',
  linkText: 'Free Trial'
}
],
ui: {
comparePlans: '.compare-plans',
closeButton: '.btn-x',
selector: '#plan-selector-overlay'
},
events: {
'click @ui.closeButton': 'fadeOutOverlay',
'click @ui.comparePlans': 'openComparePlans',
'click .plan-choice': 'signupWithPlan'
},
itemView: o,
itemViewContainer: '.plan-items',
initialize: function () {
'yes' == window.bootstrapData.sitePageLimits && (this.plans[0].planDescription = _W.tl('Everything you need for a high quality site. Create up to five pages and host your site for free.')),
this.collection = new e.Collection(this.plans)
},
onRender: function () {
this.$el.find('[data-toggle=tooltip]').tooltip().on('hide.bs.tooltip', function (e) {
  e.preventDefault(),
  t('div.tooltip.in').removeClass('in').hide()
})
},
onShow: function () {
this.$el.find('#plan-selector-overlay').fadeIn(300),
'yes' == window.bootstrapData.starterProComparison && (t('#plan-choice-starter-description').text('Make your site standout with a custom domain, expanded site stats, and premium support.'), t('#plan-choice-pro-description').text('Remove Weebly branding to give your site a unique look and add professional multimedia features.')),
'without_credit_card' == bootstrapData.freeTrial || 'with_credit_card' == bootstrapData.freeTrial ? (this.$el.find('.w-icon-question').hide(), this.$el.find('.plans-header h3').text(' '), this.$el.find('.plans-footer h1').hide(), 'with_credit_card' == bootstrapData.freeTrial && this.$el.find('.actions h2').text(_W.tl('Start a free trial to experience any premium plan for 15 days.')))  : this.$el.find('.actions h2').hide()
},
appendHtml: function (e, t) {
e.$(this.itemViewContainer).append(t.el)
},
openComparePlans: function (e) {
e.preventDefault(),
window.alreadySignedUp = !0,
n.vent.trigger('plans:open', this.collection)
},
signupWithPlan: function (e) {
e.preventDefault();
var t = jQuery(e.currentTarget).data('plan-type');
window.location.href = '/weebly/userHome.php?preselected_plan_type=' + t
},
fadeOutOverlay: function () {
var e = this;
window.location.hash = '',
e.ui.selector.fadeOut(400, function () {
  n.vent.off('key:escape'),
  n.vent.trigger('overlay:close')
})
}
});
return r
}),
_wAMD.define('public/vertical/shared/views/google-domains/GoogleDomainsThemeSelectItemView', [
'../ThemeSelectItemView'
], function (e) {
var t = e.extend({
route: 'google-domains-theme'
});
return t
}),
_wAMD.define('public/vertical/shared/views/google-domains/GoogleDomainsThemeSelectView', [
'../ThemeSelectView',
'./GoogleDomainsThemeSelectItemView',
'public/vertical/shared/app'
], function (e, t, i) {
var n = e.extend({
standalone: !0,
itemView: t,
goBack: function (e) {
e && e.preventDefault(),
i.vent.trigger('google-domains-themes:open')
}
});
return n
}),
_wAMD.define('tpl!public/vertical/components/google-domains/google-domains-theme-signup', [
], function () {
return '<span class="btn-back">\n\t<i class="w-icon-chevron-left-light"></i>\n</span>\n<div class="weebly-overlay-logo w-icon-li-weebly-logo"></div>\n\n<div class="theme-form">\n\t<div class="preview">\n\t\t<div class="theme" data-id="{{theme_id}}" class="theme" style="background-image: url({{screenshots.image}})"></div>\n\t\t<div class="theme-meta">\n\t\t\t<span class="theme-name">{{theme_name}}</span>\n\t\t\t{{#theme_demo}}\n\t\t\t\t<span class="theme-separator">|</span>\n\t\t\t\t<a href="{{theme_demo}}" target="_blank" rel="nofollow" class="theme-demo">{{#tl}}Live Demo{{/tl}}</a>\n\t\t\t{{/theme_demo}}\n\t\t</div>\n\t</div>\n\n\t<div class="form">\n\t\t<h2>{{#tl}}Your domain needs a great website.{{/tl}}</h2>\n\t\t<p>{{#tl}}It\'s surprisingly easy to create a unique website, blog or online store.{{/tl}}</p>\n\t\t<a id="theme-signup-form-submit" class="button" href="/google-domains/start?domain={{domain}}&theme={{theme}}">{{#tl}}Get Started{{/tl}}</a>\n\t</div>\n</div>\n'
}),
_wAMD.define('public/vertical/shared/views/google-domains/GoogleDomainsThemeSignupView', [
'underscore',
'mustache',
'../ThemeSignupView',
'public/vertical/shared/app',
'tpl!public/vertical/components/google-domains/google-domains-theme-signup'
], function (e, t, i, n, o) {
var s = i.extend({
standalone: !0,
className: 'theme-selector google-domains',
events: function () {
var t = e.result(i.prototype, 'events');
return e.omit(t, 'click @ui.weeblyLogo')
},
template: t.compile(o),
templateHelpers: function () {
var e = this;
return {
  theme: e.theme,
  domain: e.domain
}
},
initialize: function (e) {
var t = this;
t.theme = e.theme,
t.domain = e.domain,
i.prototype.initialize.apply(t, arguments)
},
initSignup: function () {
},
goBack: function (e) {
e && e.preventDefault(),
n.vent.trigger('google-domains-themes:open')
}
});
return s
}),
_wAMD.define('public/vertical/shared/navigation/module', [
'backbone',
'jquery',
'public/vertical/shared/app',
'public/vertical/shared/views/FloatingMenu',
'public/vertical/shared/views/LoginView',
'public/vertical/shared/views/SignupView',
'public/vertical/shared/views/VideoDialogView',
'public/vertical/shared/views/ResetPasswordOverlayView',
'public/vertical/shared/views/ThemeSelectView',
'public/vertical/shared/views/ThemeSignupView',
'public/vertical/shared/views/ComparePlansView',
'public/vertical/shared/views/PlanSelectorView',
'public/vertical/shared/views/google-domains/GoogleDomainsThemeSelectView',
'public/vertical/shared/views/google-domains/GoogleDomainsThemeSignupView'
], function (e, t, i, n, o, s, r, a, l, c, u, d, h, p) {
i.module('navigation', function (f) {
var m = new n,
g = new e.Collection,
v = {
showMenu: function () {
  y.navigate('menu'),
  m.onShow()
},
showLogin: function (e) {
  y.navigate('login'),
  i.overlayRegion.show(new o({
    fromRouter: e
  }))
},
showSignup: function () {
  y.navigate('signup'),
  i.overlayRegion.show(new s)
},
openLoginSuggestion: function (e) {
  y.navigate('login'),
  i.overlayRegion.show(new o({
    suggestion: e
  }))
},
showVideo: function () {
  y.navigate('video'),
  i.overlayRegion.show(new r)
},
showResetPassword: function () {
  y.navigate('reset'),
  i.overlayRegion.show(new a)
},
showThemes: function () {
  y.navigate('themes'),
  i.overlayRegion.show(new l({
    collection: g
  }))
},
showComparePlans: function (e) {
  y.navigate('plans/compare'),
  i.overlayRegion.show(new u({
    plans: e
  }))
},
showPlansSelect: function () {
  y.navigate('plans/select'),
  i.overlayRegion.close(),
  i.overlayBaseRegion.show(new d)
},
showPlansSignup: function (e, t) {
  y.navigate('plans/type/' + t),
  e && i.overlayRegion.show(new u({
    plans: e,
    selected_plan: t
  }))
},
showThemeSignup: function (e, t) {
  var n = g.findWhere({
    url_theme_name: e
  });
  n ? (y.navigate('themes/' + n.get('url_theme_name')), i.overlayRegion.show(new c({
    model: n,
    allow_back: t
  })))  : this.showThemes()
},
showSpecificFeature: function (e) {
  v.fadeOutOverlays(),
  y.navigate(e),
  i.vent.trigger('features:show'),
  i.vent.trigger('features:select:show', e)
},
overlayShown: function () {
  t(document).data('pauseEvents', !0),
  i.mainRegion.currentView && i.mainRegion.currentView.hideFixtures(0)
},
closeOverlay: function () {
  y.navigate(''),
  i.overlayRegion.currentView && (i.overlayRegion.currentView.remove(), i.overlayRegion.reset()),
  i.mainRegion.currentView && i.mainRegion.currentView.showFixtures(400),
  t(document).data('pauseEvents', !1)
},
menuClosed: function () {
  y.navigate(''),
  i.mainRegion.currentView && i.mainRegion.currentView.showFixtures(400),
  t(document).data('pauseEvents', !1)
},
fadeOutOverlays: function () {
  m.$el.is(':visible') && m.closeMenu(),
  i.overlayRegion.currentView && i.overlayRegion.currentView.fadeOutOverlay()
},
showGoogleDomainsThemes: function () {
  y.navigate('google-domains-themes'),
  i.overlayRegion.show(new h({
    collection: g,
    domain: bootstrapData.domain
  }))
},
showGoogleDomainsThemeSignup: function (e, t) {
  var n = g.findWhere({
    url_theme_name: e
  });
  n ? (y.navigate('google-domains-themes/' + n.get('url_theme_name')), i.overlayRegion.show(new p({
    model: n,
    theme: n.get('theme_version'),
    domain: bootstrapData.domain,
    allow_back: t
  })))  : this.showGoogleDomainsThemes()
},
defaultRoute: function () {
  var e = window.location.href.match(/show_login=1|login_email|login=1|session-expired=1|oauth_associate=|oauth_fail=|oauth_email=/);
  e ? v.showLogin(!0)  : v.fadeOutOverlays()
}
},
b = e.Router.extend({
routes: {
  menu: 'menu',
  login: 'login',
  signup: 'signup',
  video: 'video',
  reset: 'reset',
  themes: 'themes',
  'plans/compare': 'plans',
  'plans/select': 'plansSelect',
  pricing: 'plans',
  'plans/type/:plan_type': 'plansSignup',
  'themes/:url_theme_name': 'themeSignup',
  'choose-theme': 'featureChooseTheme',
  'drag-drop': 'featureDragDrop',
  apps: 'featureApps',
  blogging: 'featureBlogging',
  ecommerce: 'featureEcommerce',
  'google-domains-themes': 'googleDomainsThemes',
  'google-domains-themes/:merchandised_name': 'googleDomainsThemeSignup',
  '*path': 'defaultRoute'
},
menu: function () {
  v.showMenu()
},
login: function () {
  var e = window.location.href.match(/show_login=1|login_email|login=1|session-expired=1|oauth_associate=|oauth_fail=|oauth_email=/);
  v.showLogin(e)
},
themeSignup: function (e) {
  v.showThemeSignup(e, !1)
},
signup: function () {
  v.showSignup()
},
video: function () {
  v.showVideo()
},
reset: function () {
  v.showResetPassword()
},
themes: function () {
  v.showThemes()
},
plans: function () {
  v.showComparePlans(i.plansRegion.currentView.collection)
},
plansSelect: function () {
  v.showPlansSelect()
},
plansSignup: function (e) {
  v.showPlansSignup(i.plansRegion.currentView.collection, e)
},
featureChooseTheme: function () {
  v.showSpecificFeature('choose-theme')
},
featureDragDrop: function () {
  v.showSpecificFeature('drag-drop')
},
featureApps: function () {
  v.showSpecificFeature('apps')
},
featureBlogging: function () {
  v.showSpecificFeature('blogging')
},
featureEcommerce: function () {
  v.showSpecificFeature('ecommerce')
},
googleDomainsThemes: function () {
  v.showGoogleDomainsThemes()
},
googleDomainsThemeSignup: function (e) {
  v.showGoogleDomainsThemeSignup(e, !1)
},
defaultRoute: function () {
  v.defaultRoute()
}
}),
y = new b;
f.on('start', function () {
g = i.themes.getThemes(),
i.vent.on({
  'menu:open': function () {
    v.showMenu()
  },
  'login:open': function () {
    v.showLogin()
  },
  'login:open:suggestion': function (e) {
    v.openLoginSuggestion(e)
  },
  'signup:open': function () {
    v.showSignup()
  },
  'video:open': function () {
    v.showVideo()
  },
  'reset:open': function () {
    v.showResetPassword()
  },
  'themes:open': function () {
    v.showThemes()
  },
  'plans:compare': function (e) {
    v.showComparePlans(e)
  },
  'plans:select': function () {
    v.showPlansSelect()
  },
  'plans:open': function (e, t) {
    v.showPlansSignup(e, t)
  },
  'overlay:shown': function () {
    v.overlayShown()
  },
  'overlay:close': function () {
    v.closeOverlay()
  },
  'menu:closed': function () {
    v.menuClosed()
  },
  'theme:open': function (e, t) {
    v.showThemeSignup(e, t)
  },
  'features:select': function (e) {
    v.showSpecificFeature(e)
  },
  'google-domains-themes:open': function () {
    v.showGoogleDomainsThemes()
  },
  'google-domains-theme:open': function (e, t) {
    v.showGoogleDomainsThemeSignup(e, t)
  }
})
})
})
}),
_wAMD.define('public/vertical/shared/tracking/module', [
'backbone',
'jquery',
'public/vertical/shared/app'
], function (e, t, i) {
i.module('tracking', function (e) {
e.on('start', function () {
var e = 1,
t = function (e) {
  _gaq && _gaq.push('_trackPageview', e)
},
n = function (o) {
  i.vent.off('scrollView:afterMove', n),
  t('/#' + o),
  e = o,
  setTimeout(function () {
    i.vent.on('scrollView:afterMove', n)
  }, 500)
};
i.vent.on('scrollView:afterMove', n),
i.vent.on('overlay:shown', function () {
  t('/' + window.location.hash)
}),
i.vent.on('overlay:close', function () {
  t('/#' + e)
})
})
})
}),
_wAMD.define('public/vertical/shared/themes/module', [
'backbone',
'public/vertical/shared/app'
], function (e, t) {
t.module('themes', function (t) {
t.startWithParent = !1;
var i = new e.Collection;
t.getThemes = function () {
return i
},
t.on('before:start', function () {
i.set(bootstrapData.themes.All),
i.each(function (e) {
  var t = e.get('merchandised_name') || e.get('theme_name');
  t = t.toLowerCase(),
  t = t.replace(/\W+/g, ''),
  e.set('url_theme_name', t)
})
})
})
}),
_wAMD.define('jquery-ui/effect', [
'jquery'
], function (e) {
!function (t, i) {
var n = 'ui-effects-';
t.effects = {
effect: {
}
},
function (e, t) {
function i(e, t, i) {
  var n = d[t.type] || {
  };
  return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
}
function n(t) {
  var i = c(),
  n = i._rgba = [
  ];
  return t = t.toLowerCase(),
  f(l, function (e, o) {
    var s,
    r = o.re.exec(t),
    a = r && o.parse(r),
    l = o.space || 'rgba';
    return a ? (s = i[l](a), i[u[l].cache] = s[u[l].cache], n = i._rgba = s._rgba, !1)  : void 0
  }),
  n.length ? ('0,0,0,0' === n.join() && e.extend(n, s.transparent), i)  : s[t]
}
function o(e, t, i) {
  return i = (i + 1) % 1,
  1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i)  : e
}
var s,
r = 'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
a = /^([\-+])=\s*(\d+\.?\d*)/,
l = [
  {
    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function (e) {
      return [e[1],
      e[2],
      e[3],
      e[4]]
    }
  },
  {
    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    parse: function (e) {
      return [2.55 * e[1],
      2.55 * e[2],
      2.55 * e[3],
      e[4]]
    }
  },
  {
    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
    parse: function (e) {
      return [parseInt(e[1], 16),
      parseInt(e[2], 16),
      parseInt(e[3], 16)]
    }
  },
  {
    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
    parse: function (e) {
      return [parseInt(e[1] + e[1], 16),
      parseInt(e[2] + e[2], 16),
      parseInt(e[3] + e[3], 16)]
    }
  },
  {
    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
    space: 'hsla',
    parse: function (e) {
      return [e[1],
      e[2] / 100,
      e[3] / 100,
      e[4]]
    }
  }
],
c = e.Color = function (t, i, n, o) {
  return new e.Color.fn.parse(t, i, n, o)
},
u = {
  rgba: {
    props: {
      red: {
        idx: 0,
        type: 'byte'
      },
      green: {
        idx: 1,
        type: 'byte'
      },
      blue: {
        idx: 2,
        type: 'byte'
      }
    }
  },
  hsla: {
    props: {
      hue: {
        idx: 0,
        type: 'degrees'
      },
      saturation: {
        idx: 1,
        type: 'percent'
      },
      lightness: {
        idx: 2,
        type: 'percent'
      }
    }
  }
},
d = {
  'byte': {
    floor: !0,
    max: 255
  },
  percent: {
    max: 1
  },
  degrees: {
    mod: 360,
    floor: !0
  }
},
h = c.support = {
},
p = e('<p>') [0],
f = e.each;
p.style.cssText = 'background-color:rgba(1,1,1,.5)',
h.rgba = p.style.backgroundColor.indexOf('rgba') > - 1,
f(u, function (e, t) {
  t.cache = '_' + e,
  t.props.alpha = {
    idx: 3,
    type: 'percent',
    def: 1
  }
}),
c.fn = e.extend(c.prototype, {
  parse: function (o, r, a, l) {
    if (o === t) return this._rgba = [
      null,
      null,
      null,
      null
    ],
    this;
    (o.jquery || o.nodeType) && (o = e(o).css(r), r = t);
    var d = this,
    h = e.type(o),
    p = this._rgba = [
    ];
    return r !== t && (o = [
      o,
      r,
      a,
      l
    ], h = 'array'),
    'string' === h ? this.parse(n(o) || s._default)  : 'array' === h ? (f(u.rgba.props, function (e, t) {
      p[t.idx] = i(o[t.idx], t)
    }), this)  : 'object' === h ? (o instanceof c ? f(u, function (e, t) {
      o[t.cache] && (d[t.cache] = o[t.cache].slice())
    })  : f(u, function (t, n) {
      var s = n.cache;
      f(n.props, function (e, t) {
        if (!d[s] && n.to) {
          if ('alpha' === e || null == o[e]) return;
          d[s] = n.to(d._rgba)
        }
        d[s][t.idx] = i(o[e], t, !0)
      }),
      d[s] && e.inArray(null, d[s].slice(0, 3)) < 0 && (d[s][3] = 1, n.from && (d._rgba = n.from(d[s])))
    }), this)  : void 0
  },
  is: function (e) {
    var t = c(e),
    i = !0,
    n = this;
    return f(u, function (e, o) {
      var s,
      r = t[o.cache];
      return r && (s = n[o.cache] || o.to && o.to(n._rgba) || [], f(o.props, function (e, t) {
        return null != r[t.idx] ? i = r[t.idx] === s[t.idx] : void 0
      })),
      i
    }),
    i
  },
  _space: function () {
    var e = [
    ],
    t = this;
    return f(u, function (i, n) {
      t[n.cache] && e.push(i)
    }),
    e.pop()
  },
  transition: function (e, t) {
    var n = c(e),
    o = n._space(),
    s = u[o],
    r = 0 === this.alpha() ? c('transparent')  : this,
    a = r[s.cache] || s.to(r._rgba),
    l = a.slice();
    return n = n[s.cache],
    f(s.props, function (e, o) {
      var s = o.idx,
      r = a[s],
      c = n[s],
      u = d[o.type] || {
      };
      null !== c && (null === r ? l[s] = c : (u.mod && (c - r > u.mod / 2 ? r += u.mod : r - c > u.mod / 2 && (r -= u.mod)), l[s] = i((c - r) * t + r, o)))
    }),
    this[o](l)
  },
  blend: function (t) {
    if (1 === this._rgba[3]) return this;
    var i = this._rgba.slice(),
    n = i.pop(),
    o = c(t)._rgba;
    return c(e.map(i, function (e, t) {
      return (1 - n) * o[t] + n * e
    }))
  },
  toRgbaString: function () {
    var t = 'rgba(',
    i = e.map(this._rgba, function (e, t) {
      return null == e ? t > 2 ? 1 : 0 : e
    });
    return 1 === i[3] && (i.pop(), t = 'rgb('),
    t + i.join() + ')'
  },
  toHslaString: function () {
    var t = 'hsla(',
    i = e.map(this.hsla(), function (e, t) {
      return null == e && (e = t > 2 ? 1 : 0),
      t && 3 > t && (e = Math.round(100 * e) + '%'),
      e
    });
    return 1 === i[3] && (i.pop(), t = 'hsl('),
    t + i.join() + ')'
  },
  toHexString: function (t) {
    var i = this._rgba.slice(),
    n = i.pop();
    return t && i.push(~~(255 * n)),
    '#' + e.map(i, function (e) {
      return e = (e || 0).toString(16),
      1 === e.length ? '0' + e : e
    }).join('')
  },
  toString: function () {
    return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString()
  }
}),
c.fn.parse.prototype = c.fn,
u.hsla.to = function (e) {
  if (null == e[0] || null == e[1] || null == e[2]) return [null,
  null,
  null,
  e[3]];
  var t,
  i,
  n = e[0] / 255,
  o = e[1] / 255,
  s = e[2] / 255,
  r = e[3],
  a = Math.max(n, o, s),
  l = Math.min(n, o, s),
  c = a - l,
  u = a + l,
  d = 0.5 * u;
  return t = l === a ? 0 : n === a ? 60 * (o - s) / c + 360 : o === a ? 60 * (s - n) / c + 120 : 60 * (n - o) / c + 240,
  i = 0 === c ? 0 : 0.5 >= d ? c / u : c / (2 - u),
  [
    Math.round(t) % 360,
    i,
    d,
    null == r ? 1 : r
  ]
},
u.hsla.from = function (e) {
  if (null == e[0] || null == e[1] || null == e[2]) return [null,
  null,
  null,
  e[3]];
  var t = e[0] / 360,
  i = e[1],
  n = e[2],
  s = e[3],
  r = 0.5 >= n ? n * (1 + i)  : n + i - n * i,
  a = 2 * n - r;
  return [Math.round(255 * o(a, r, t + 1 / 3)),
  Math.round(255 * o(a, r, t)),
  Math.round(255 * o(a, r, t - 1 / 3)),
  s]
},
f(u, function (n, o) {
  var s = o.props,
  r = o.cache,
  l = o.to,
  u = o.from;
  c.fn[n] = function (n) {
    if (l && !this[r] && (this[r] = l(this._rgba)), n === t) return this[r].slice();
    var o,
    a = e.type(n),
    d = 'array' === a || 'object' === a ? n : arguments,
    h = this[r].slice();
    return f(s, function (e, t) {
      var n = d['object' === a ? e : t.idx];
      null == n && (n = h[t.idx]),
      h[t.idx] = i(n, t)
    }),
    u ? (o = c(u(h)), o[r] = h, o)  : c(h)
  },
  f(s, function (t, i) {
    c.fn[t] || (c.fn[t] = function (o) {
      var s,
      r = e.type(o),
      l = 'alpha' === t ? this._hsla ? 'hsla' : 'rgba' : n,
      c = this[l](),
      u = c[i.idx];
      return 'undefined' === r ? u : ('function' === r && (o = o.call(this, u), r = e.type(o)), null == o && i.empty ? this : ('string' === r && (s = a.exec(o), s && (o = u + parseFloat(s[2]) * ('+' === s[1] ? 1 : - 1))), c[i.idx] = o, this[l](c)))
    })
  })
}),
c.hook = function (t) {
  var i = t.split(' ');
  f(i, function (t, i) {
    e.cssHooks[i] = {
      set: function (t, o) {
        var s,
        r,
        a = '';
        if ('transparent' !== o && ('string' !== e.type(o) || (s = n(o)))) {
          if (o = c(s || o), !h.rgba && 1 !== o._rgba[3]) {
            for (r = 'backgroundColor' === i ? t.parentNode : t; ('' === a || 'transparent' === a) && r && r.style; ) try {
              a = e.css(r, 'backgroundColor'),
              r = r.parentNode
            } catch (l) {
            }
            o = o.blend(a && 'transparent' !== a ? a : '_default')
          }
          o = o.toRgbaString()
        }
        try {
          t.style[i] = o
        } catch (l) {
        }
      }
    },
    e.fx.step[i] = function (t) {
      t.colorInit || (t.start = c(t.elem, i), t.end = c(t.end), t.colorInit = !0),
      e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
    }
  })
},
c.hook(r),
e.cssHooks.borderColor = {
  expand: function (e) {
    var t = {
    };
    return f(['Top',
    'Right',
    'Bottom',
    'Left'], function (i, n) {
      t['border' + n + 'Color'] = e
    }),
    t
  }
},
s = e.Color.names = {
  aqua: '#00ffff',
  black: '#000000',
  blue: '#0000ff',
  fuchsia: '#ff00ff',
  gray: '#808080',
  green: '#008000',
  lime: '#00ff00',
  maroon: '#800000',
  navy: '#000080',
  olive: '#808000',
  purple: '#800080',
  red: '#ff0000',
  silver: '#c0c0c0',
  teal: '#008080',
  white: '#ffffff',
  yellow: '#ffff00',
  transparent: [
    null,
    null,
    null,
    0
  ],
  _default: '#ffffff'
}
}(e),
function () {
function n(e) {
  var i,
  n,
  o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null)  : e.currentStyle,
  s = {
  };
  if (o && o.length && o[0] && o[o[0]]) for (n = o.length; n--; ) i = o[n],
  'string' == typeof o[i] && (s[t.camelCase(i)] = o[i]);
   else for (i in o) 'string' == typeof o[i] && (s[i] = o[i]);
  return s
}
function o(e, i) {
  var n,
  o,
  s = {
  };
  for (n in i) o = i[n],
  e[n] !== o && (r[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (s[n] = o));
  return s
}
var s = [
  'add',
  'remove',
  'toggle'
],
r = {
  border: 1,
  borderBottom: 1,
  borderColor: 1,
  borderLeft: 1,
  borderRight: 1,
  borderTop: 1,
  borderWidth: 1,
  margin: 1,
  padding: 1
};
t.each(['borderLeftStyle',
'borderRightStyle',
'borderBottomStyle',
'borderTopStyle'], function (i, n) {
  t.fx.step[n] = function (t) {
    ('none' !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (e.style(t.elem, n, t.end), t.setAttr = !0)
  }
}),
t.fn.addBack || (t.fn.addBack = function (e) {
  return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
}),
t.effects.animateClass = function (e, i, r, a) {
  var l = t.speed(i, r, a);
  return this.queue(function () {
    var i,
    r = t(this),
    a = r.attr('class') || '',
    c = l.children ? r.find('*').addBack()  : r;
    c = c.map(function () {
      var e = t(this);
      return {
        el: e,
        start: n(this)
      }
    }),
    i = function () {
      t.each(s, function (t, i) {
        e[i] && r[i + 'Class'](e[i])
      })
    },
    i(),
    c = c.map(function () {
      return this.end = n(this.el[0]),
      this.diff = o(this.start, this.end),
      this
    }),
    r.attr('class', a),
    c = c.map(function () {
      var e = this,
      i = t.Deferred(),
      n = t.extend({
      }, l, {
        queue: !1,
        complete: function () {
          i.resolve(e)
        }
      });
      return this.el.animate(this.diff, n),
      i.promise()
    }),
    t.when.apply(t, c.get()).done(function () {
      i(),
      t.each(arguments, function () {
        var e = this.el;
        t.each(this.diff, function (t) {
          e.css(t, '')
        })
      }),
      l.complete.call(r[0])
    })
  })
},
t.fn.extend({
  addClass: function (e) {
    return function (i, n, o, s) {
      return n ? t.effects.animateClass.call(this, {
        add: i
      }, n, o, s)  : e.apply(this, arguments)
    }
  }(t.fn.addClass),
  removeClass: function (e) {
    return function (i, n, o, s) {
      return arguments.length > 1 ? t.effects.animateClass.call(this, {
        remove: i
      }, n, o, s)  : e.apply(this, arguments)
    }
  }(t.fn.removeClass),
  toggleClass: function (e) {
    return function (n, o, s, r, a) {
      return 'boolean' == typeof o || o === i ? s ? t.effects.animateClass.call(this, o ? {
        add: n
      }
       : {
        remove: n
      }, s, r, a)  : e.apply(this, arguments)  : t.effects.animateClass.call(this, {
        toggle: n
      }, o, s, r)
    }
  }(t.fn.toggleClass),
  switchClass: function (e, i, n, o, s) {
    return t.effects.animateClass.call(this, {
      add: i,
      remove: e
    }, n, o, s)
  }
})
}(),
function () {
function e(e, i, n, o) {
  return t.isPlainObject(e) && (i = e, e = e.effect),
  e = {
    effect: e
  },
  null == i && (i = {
  }),
  t.isFunction(i) && (o = i, n = null, i = {
  }),
  ('number' == typeof i || t.fx.speeds[i]) && (o = n, n = i, i = {
  }),
  t.isFunction(n) && (o = n, n = null),
  i && t.extend(e, i),
  n = n || i.duration,
  e.duration = t.fx.off ? 0 : 'number' == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default,
  e.complete = o || i.complete,
  e
}
function o(e) {
  return !e || 'number' == typeof e || t.fx.speeds[e] ? !0 : 'string' != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : 'object' != typeof e || e.effect ? !1 : !0 : !0
}
t.extend(t.effects, {
  version: '1.10.2',
  save: function (e, t) {
    for (var i = 0; i < t.length; i++) null !== t[i] && e.data(n + t[i], e[0].style[t[i]])
  },
  restore: function (e, t) {
    var o,
    s;
    for (s = 0; s < t.length; s++) null !== t[s] && (o = e.data(n + t[s]), o === i && (o = ''), e.css(t[s], o))
  },
  setMode: function (e, t) {
    return 'toggle' === t && (t = e.is(':hidden') ? 'show' : 'hide'),
    t
  },
  getBaseline: function (e, t) {
    var i,
    n;
    switch (e[0]) {
      case 'top':
        i = 0;
        break;
      case 'middle':
        i = 0.5;
        break;
      case 'bottom':
        i = 1;
        break;
      default:
        i = e[0] / t.height
    }
    switch (e[1]) {
      case 'left':
        n = 0;
        break;
      case 'center':
        n = 0.5;
        break;
      case 'right':
        n = 1;
        break;
      default:
        n = e[1] / t.width
    }
    return {
      x: n,
      y: i
  }
},
createWrapper: function (e) {
if (e.parent().is('.ui-effects-wrapper')) return e.parent();
var i = {
  width: e.outerWidth(!0),
  height: e.outerHeight(!0),
  'float': e.css('float')
},
n = t('<div></div>').addClass('ui-effects-wrapper').css({
  fontSize: '100%',
  background: 'transparent',
  border: 'none',
  margin: 0,
  padding: 0
}),
o = {
  width: e.width(),
  height: e.height()
},
s = document.activeElement;
try {
  s.id
} catch (r) {
  s = document.body
}
return e.wrap(n),
(e[0] === s || t.contains(e[0], s)) && t(s).focus(),
n = e.parent(),
'static' === e.css('position') ? (n.css({
  position: 'relative'
}), e.css({
  position: 'relative'
}))  : (t.extend(i, {
  position: e.css('position'),
  zIndex: e.css('z-index')
}), t.each(['top',
'left',
'bottom',
'right'], function (t, n) {
  i[n] = e.css(n),
  isNaN(parseInt(i[n], 10)) && (i[n] = 'auto')
}), e.css({
  position: 'relative',
  top: 0,
  left: 0,
  right: 'auto',
  bottom: 'auto'
})),
e.css(o),
n.css(i).show()
},
removeWrapper: function (e) {
var i = document.activeElement;
return e.parent().is('.ui-effects-wrapper') && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
e
},
setTransition: function (e, i, n, o) {
return o = o || {
},
t.each(i, function (t, i) {
var s = e.cssUnit(i);
s[0] > 0 && (o[i] = s[0] * n + s[1])
}),
o
}
}),
t.fn.extend({
effect: function () {
function i(e) {
function i() {
t.isFunction(s) && s.call(o[0]),
t.isFunction(e) && e()
}
var o = t(this),
s = n.complete,
a = n.mode;
(o.is(':hidden') ? 'hide' === a : 'show' === a) ? (o[a](), i())  : r.call(o[0], n, i)
}
var n = e.apply(this, arguments),
o = n.mode,
s = n.queue,
r = t.effects.effect[n.effect];
return t.fx.off || !r ? o ? this[o](n.duration, n.complete)  : this.each(function () {
n.complete && n.complete.call(this)
})  : s === !1 ? this.each(i)  : this.queue(s || 'fx', i)
},
show: function (t) {
return function (i) {
if (o(i)) return t.apply(this, arguments);
var n = e.apply(this, arguments);
return n.mode = 'show',
this.effect.call(this, n)
}
}(t.fn.show),
hide: function (t) {
return function (i) {
if (o(i)) return t.apply(this, arguments);
var n = e.apply(this, arguments);
return n.mode = 'hide',
this.effect.call(this, n)
}
}(t.fn.hide),
toggle: function (t) {
return function (i) {
if (o(i) || 'boolean' == typeof i) return t.apply(this, arguments);
var n = e.apply(this, arguments);
return n.mode = 'toggle',
this.effect.call(this, n)
}
}(t.fn.toggle),
cssUnit: function (e) {
var i = this.css(e),
n = [
];
return t.each(['em',
'px',
'%',
'pt'], function (e, t) {
i.indexOf(t) > 0 && (n = [
parseFloat(i),
t
])
}),
n
}
})
}(), function () {
var e = {
};
t.each(['Quad',
'Cubic',
'Quart',
'Quint',
'Expo'], function (t, i) {
e[i] = function (e) {
return Math.pow(e, t + 2)
}
}),
t.extend(e, {
Sine: function (e) {
return 1 - Math.cos(e * Math.PI / 2)
},
Circ: function (e) {
return 1 - Math.sqrt(1 - e * e)
},
Elastic: function (e) {
return 0 === e || 1 === e ? e : - Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
},
Back: function (e) {
return e * e * (3 * e - 2)
},
Bounce: function (e) {
for (var t, i = 4; e < ((t = Math.pow(2, --i)) - 1) / 11; );
return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
}
}),
t.each(e, function (e, i) {
t.easing['easeIn' + e] = i,
t.easing['easeOut' + e] = function (e) {
return 1 - i(1 - e)
},
t.easing['easeInOut' + e] = function (e) {
return 0.5 > e ? i(2 * e) / 2 : 1 - i( - 2 * e + 2) / 2
}
})
}()
}(e)
}),
_wAMD.define('jquery-ui/effect-fade', [
'jquery',
'./effect'
], function (e) {
!function (e) {
e.effects.effect.fade = function (t, i) {
var n = e(this),
o = e.effects.setMode(n, t.mode || 'toggle');
n.animate({
opacity: o
}, {
queue: !1,
duration: t.duration,
easing: t.easing,
complete: i
})
}
}(e)
}),
_wAMD.define('jquery-ui/effect-scale', [
'jquery',
'./effect'
], function (e) {
!function (e) {
e.effects.effect.puff = function (t, i) {
var n = e(this),
o = e.effects.setMode(n, t.mode || 'hide'),
s = 'hide' === o,
r = parseInt(t.percent, 10) || 150,
a = r / 100,
l = {
height: n.height(),
width: n.width(),
outerHeight: n.outerHeight(),
outerWidth: n.outerWidth()
};
e.extend(t, {
effect: 'scale',
queue: !1,
fade: !0,
mode: o,
complete: i,
percent: s ? r : 100,
from: s ? l : {
height: l.height * a,
width: l.width * a,
outerHeight: l.outerHeight * a,
outerWidth: l.outerWidth * a
}
}),
n.effect(t)
},
e.effects.effect.scale = function (t, i) {
var n = e(this),
o = e.extend(!0, {
}, t),
s = e.effects.setMode(n, t.mode || 'effect'),
r = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : 'hide' === s ? 0 : 100),
a = t.direction || 'both',
l = t.origin,
c = {
height: n.height(),
width: n.width(),
outerHeight: n.outerHeight(),
outerWidth: n.outerWidth()
},
u = {
y: 'horizontal' !== a ? r / 100 : 1,
x: 'vertical' !== a ? r / 100 : 1
};
o.effect = 'size',
o.queue = !1,
o.complete = i,
'effect' !== s && (o.origin = l || ['middle',
'center'], o.restore = !0),
o.from = t.from || ('show' === s ? {
height: 0,
width: 0,
outerHeight: 0,
outerWidth: 0
}
 : c),
o.to = {
height: c.height * u.y,
width: c.width * u.x,
outerHeight: c.outerHeight * u.y,
outerWidth: c.outerWidth * u.x
},
o.fade && ('show' === s && (o.from.opacity = 0, o.to.opacity = 1), 'hide' === s && (o.from.opacity = 1, o.to.opacity = 0)),
n.effect(o)
},
e.effects.effect.size = function (t, i) {
var n,
o,
s,
r = e(this),
a = [
'position',
'top',
'bottom',
'left',
'right',
'width',
'height',
'overflow',
'opacity'
],
l = [
'position',
'top',
'bottom',
'left',
'right',
'overflow',
'opacity'
],
c = [
'width',
'height',
'overflow'
],
u = [
'fontSize'
],
d = [
'borderTopWidth',
'borderBottomWidth',
'paddingTop',
'paddingBottom'
],
h = [
'borderLeftWidth',
'borderRightWidth',
'paddingLeft',
'paddingRight'
],
p = e.effects.setMode(r, t.mode || 'effect'),
f = t.restore || 'effect' !== p,
m = t.scale || 'both',
g = t.origin || ['middle',
'center'],
v = r.css('position'),
b = f ? a : l,
y = {
height: 0,
width: 0,
outerHeight: 0,
outerWidth: 0
};
'show' === p && r.show(),
n = {
height: r.height(),
width: r.width(),
outerHeight: r.outerHeight(),
outerWidth: r.outerWidth()
},
'toggle' === t.mode && 'show' === p ? (r.from = t.to || y, r.to = t.from || n)  : (r.from = t.from || ('show' === p ? y : n), r.to = t.to || ('hide' === p ? y : n)),
s = {
from: {
y: r.from.height / n.height,
x: r.from.width / n.width
},
to: {
y: r.to.height / n.height,
x: r.to.width / n.width
}
},
('box' === m || 'both' === m) && (s.from.y !== s.to.y && (b = b.concat(d), r.from = e.effects.setTransition(r, d, s.from.y, r.from), r.to = e.effects.setTransition(r, d, s.to.y, r.to)), s.from.x !== s.to.x && (b = b.concat(h), r.from = e.effects.setTransition(r, h, s.from.x, r.from), r.to = e.effects.setTransition(r, h, s.to.x, r.to))),
('content' === m || 'both' === m) && s.from.y !== s.to.y && (b = b.concat(u).concat(c), r.from = e.effects.setTransition(r, u, s.from.y, r.from), r.to = e.effects.setTransition(r, u, s.to.y, r.to)),
e.effects.save(r, b),
r.show(),
e.effects.createWrapper(r),
r.css('overflow', 'hidden').css(r.from),
g && (o = e.effects.getBaseline(g, n), r.from.top = (n.outerHeight - r.outerHeight()) * o.y, r.from.left = (n.outerWidth - r.outerWidth()) * o.x, r.to.top = (n.outerHeight - r.to.outerHeight) * o.y, r.to.left = (n.outerWidth - r.to.outerWidth) * o.x),
r.css(r.from),
('content' === m || 'both' === m) && (d = d.concat(['marginTop',
'marginBottom']).concat(u), h = h.concat(['marginLeft',
'marginRight']), c = a.concat(d).concat(h), r.find('*[width]').each(function () {
var i = e(this),
n = {
height: i.height(),
width: i.width(),
outerHeight: i.outerHeight(),
outerWidth: i.outerWidth()
};
f && e.effects.save(i, c),
i.from = {
height: n.height * s.from.y,
width: n.width * s.from.x,
outerHeight: n.outerHeight * s.from.y,
outerWidth: n.outerWidth * s.from.x
},
i.to = {
height: n.height * s.to.y,
width: n.width * s.to.x,
outerHeight: n.height * s.to.y,
outerWidth: n.width * s.to.x
},
s.from.y !== s.to.y && (i.from = e.effects.setTransition(i, d, s.from.y, i.from), i.to = e.effects.setTransition(i, d, s.to.y, i.to)),
s.from.x !== s.to.x && (i.from = e.effects.setTransition(i, h, s.from.x, i.from), i.to = e.effects.setTransition(i, h, s.to.x, i.to)),
i.css(i.from),
i.animate(i.to, t.duration, t.easing, function () {
f && e.effects.restore(i, c)
})
})),
r.animate(r.to, {
queue: !1,
duration: t.duration,
easing: t.easing,
complete: function () {
0 === r.to.opacity && r.css('opacity', r.from.opacity),
'hide' === p && r.hide(),
e.effects.restore(r, b),
f || ('static' === v ? r.css({
position: 'relative',
top: r.to.top,
left: r.to.left
})  : e.each(['top',
'left'], function (e, t) {
r.css(t, function (t, i) {
var n = parseInt(i, 10),
o = e ? r.to.left : r.to.top;
return 'auto' === i ? o + 'px' : n + o + 'px'
})
})),
e.effects.removeWrapper(r),
i()
}
})
}
}(e)
}),
_wAMD.define('public/vertical/shared/views/SinglePageScrollView', [
'backbone',
'jquery',
'public/vertical/shared/app',
'public/vertical/shared/views/FloatingMenu',
'public/vertical/shared/views/LoginView',
'public/vertical/shared/views/SignupView',
'jquery-ui/core',
'jquery-ui/effect',
'jquery-ui/effect-fade',
'jquery-ui/effect-scale',
'vendor/jquery.onepage-scroll'
], function (e, t, i) {
var n = e.Marionette.ItemView.extend({
duration: 600,
easing: 'ease',
currentIndex: 1,
ui: {
panels: '#panels',
scrollNav: '.onepage-pagination',
scrollNavElements: '.onepage-pagination li',
activeSection: '#panels .section.active',
fixtures: '#fixtures .fixture'
},
events: {
'mouseenter .onepage-pagination li': 'toggleTip',
'mouseout .onepage-pagination li': 'toggleTip'
},
nav: [
['menu',
'login'],
[
'menu',
'signup'
],
[
'menu',
'signup'
],
[
'menu',
'login'
]
],
initialize: function (e) {
if (this.bindUIElements(), e) for (var t in e) this[t] = e[t];
var n = this;
i.vent.on('features:show', function () {
n.showFeatures()
})
},
render: function () {
this.$el.hasClass('standard-scroll') || (this.custom_scroll = !0, this.initializeScrolling(), this.initializeScrollNav(), this.setNavColor(this.ui.activeSection.data('index'))),
this.$el.removeClass('loading')
},
showFeatures: function () {
if (this.custom_scroll) this.scrollTo(2);
 else {
var e = t('#features_panel').offset().top;
this.ui.panels.animate({
scrollTop: e
}, 400)
}
},
initializeScrolling: function () {
var e = this;
e.ui.panels.onepage_scroll({
sectionContainer: '#panels div.section',
easing: e.easing,
animationTime: e.duration,
beforeMove: e.beforeMove.bind(e),
afterMove: e.afterMove.bind(e),
keyboard: !1
}),
e.bindUIElements()
},
initializeScrollNav: function () {
this.ui.scrollNavElements.each(function (e, i) {
var n = '<table class="page-tooltip"><tr><td class="page-tooltip-left"></td><td class="page-tooltip-middle">' + t('.section').slice(e, e + 1).attr('data-title') + '</td><td class="page-tooltip-right"></td></tr></div>';
t(i).append(n)
})
},
toggleTip: function (e) {
$tt = t(e.currentTarget).find('.page-tooltip'),
'mouseenter' == e.type ? $tt.show()  : $tt.hide()
},
showFixtures: function (e) {
var t = 'undefined' == typeof e ? 400 : e;
this.handleNavContents(this.currentIndex, t)
},
hideFixtures: function (e) {
var t = 'undefined' == typeof e ? 400 : e;
this.ui.fixtures.fadeOut(t)
},
beforeMove: function (e) {
this.currentIndex = e,
i.vent.trigger('scrollView:beforeMove', e),
this.handleNavContents(e),
this.setNavColor(e)
},
afterMove: function (e) {
i.vent.trigger('scrollView:afterMove', e)
},
nextPage: function () {
this.ui.panels.moveDown()
},
prevPage: function () {
this.ui.panels.moveUp()
},
scrollTo: function (e) {
this.ui.panels.moveTo(e)
},
handleNavContents: function (e, t) {
for (var i = this.nav[e - 1], n = [
], o = 'undefined' == typeof t ? 200 : t, s = 0; s < i.length; s++) {
var r = i[s];
n.push('[data-type=' + r + ']')
}
var a = this.ui.fixtures.filter(n.join(',')),
l = this.ui.fixtures.not(n.join(','));
l.fadeOut(o, function () {
a.fadeIn(o)
})
},
setNavColor: function (e) {
var t = this.$el.find('.section[data-index=' + e + ']').data('theme'),
i = {
light: '#AAAEB2',
dark: '#FFFFFF'
},
n = t ? i[t] : '#FFF';
this.ui.fixtures.animate({
color: n
}, 600)
}
});
return n
}),
_wAMD.define('public/vertical/carbon/views/HeaderView', [
'backbone',
'jquery',
'public/vertical/shared/app',
'public/vertical/shared/views/VideoDialogView',
'legacy/weebly_ensure_account',
'util/general-utils'
], function (e, t, i, n, o, s) {
var r = e.Marionette.ItemView.extend({
ui: {
content: '.content',
signupName: '#header-signup-form-name',
signupEmail: '#header-signup-form-email',
signupPass: '#header-signup-form-pass',
errorMsg: '#header-signup-form-error',
backgroundSlides: '.slideshow-bg'
},
events: {
'click #videolink': 'onVideoLinkClicked',
'click .show-features': 'showFeatures'
},
initialize: function () {
this.bindUIElements()
},
render: function () {
this.setupBackgroundSlideshow()
},
onShow: function () {
var e = this;
new Weebly.login({
signup_only: !0,
require_tos_check: !1,
signup_form: 'header-signup-form',
signup_name_field: 'header-signup-form-name',
signup_email_field: 'header-signup-form-email',
signup_password_field: 'header-signup-form-pass',
signup_response_field: 'header-signup-form-response',
signup_error_handler: function (t) {
e.ui.errorMsg.text(t),
e.ui.errorMsg.show(),
e.ui.signupName.addClass('input-error'),
e.ui.signupEmail.addClass('input-error'),
e.ui.signupPass.addClass('input-error')
},
onLoadingStart: function () {
e.ui.errorMsg.hide(),
e.ui.signupName.removeClass('input-error'),
e.ui.signupEmail.removeClass('input-error'),
e.ui.signupPass.removeClass('input-error')
},
onSignupSuccess: function () {
window.bootstrapData && 'signup' === window.bootstrapData.showPricing ? i.vent.trigger('plans:select')  : window.location.href = '/weebly/userHome.php?'
},
onLoginInstead: function () {
var t = {
message: _W.tl('You already have an account. Please log in.'),
username: e.ui.signupEmail.val(),
password: e.ui.signupPass.val()
};
i.vent.trigger('login:open:suggestion', t)
}
});
var t = s.isIE();
t || setTimeout(function () {
e.ui.signupName.focus()
}, 200),
i.vent.on('scrollView:afterMove', function (i) {
1 != i || t || e.ui.signupName.focus()
})
},
showFeatures: function () {
i.vent.trigger('features:show')
},
onVideoLinkClicked: function (e) {
e && e.preventDefault(),
i.vent.trigger('video:open')
},
setupBackgroundSlideshow: function () {
var e = Math.floor(3 * Math.random()) + 1;
t('.bg-image').addClass('bg' + e)
}
});
return r
}),
_wAMD.define('public/vertical/shared/views/FeaturesView', [
'backbone',
'jquery',
'public/vertical/shared/views/ThemeSelectItemView',
'public/vertical/shared/app'
], function (e, t, i, n) {
var o = e.Marionette.CompositeView.extend({
itemView: i,
itemViewContainer: '.feature-themes .themes',
itemViewOptions: {
allowBack: !1
},
ui: {
tag: '.feature-tag',
features: '.feature-header .feature',
chooseTheme: '.feature-themes',
themes: '.feature-themes .themes',
dragDrop: '.feature-drag',
apps: '.feature-apps',
blog: '.feature-blog',
ecommerce: '.feature-commerce'
},
events: {
'click @ui.features': 'featureClicked',
'click .choose-theme': 'openThemeSelector'
},
initialize: function () {
var e = this;
e.bindUIElements()
},
render: function () {
var e = this;
e.setDefaultFeatureTag(),
e.isRendered = !0,
e._renderChildren(),
n.vent.on({
'features:select:show': function (t) {
e.showFeature(e.ui.features.filter('[data-feature=' + t + ']'))
}
})
},
featureClicked: function (e) {
n.vent.trigger('features:select', t(e.currentTarget).data('feature'))
},
showFeature: function (e) {
var t = this.$el.find('.section-footer .' + e.data('target')),
i = this.$el.find('.section-footer .feature:visible');
this.$el.find('.feature-header .active').removeClass('active'),
e.addClass('active'),
i.fadeOut(200, function () {
t.fadeIn(400)
}),
this.ui.tag.css({
left: e.position().left
})
},
setDefaultFeatureTag: function () {
this.ui.tag.css({
left: this.$el.find('.feature.active').position().left
})
},
togglePhoneIndex: function (e) {
e.preventDefault(),
this.$el.find('.phone-icon.active').removeClass('active'),
t(e.target).addClass('active')
},
openThemeSelector: function (e) {
_.isUndefined(e) || e.preventDefault(),
n.vent.trigger('themes:open')
}
});
return o
}),
_wAMD.define('public/vertical/shared/views/PlansView', [
'backbone',
'jquery',
'vendor/bootstrap',
'public/vertical/shared/app',
'components/plan-comparison/PlanItem'
], function (e, t, i, n, o) {
var s = e.Marionette.CollectionView.extend({
plans: [
{
planType: 'free',
planName: _W.tl('Free'),
planDescription: _W.tl('Everything you need for a high quality site. Create unlimited pages and host your site for free.'),
planPrice: '0',
planLink: 'plans/type/free',
linkText: 'Choose'
},
{
planType: 'starter',
planName: _W.tl('Starter'),
planDescription: _W.tl('Connect your own domain, remove Weebly branding, expanded site stats, and premium support.'),
planPrice: '4',
planLink: 'plans/type/starter',
linkText: 'Free Trial'
},
{
planType: 'pro',
planName: _W.tl('Pro'),
planDescription: _W.tl('Professional multimedia features, powerful site search, and password protection.'),
planPrice: '8',
planLink: 'plans/type/pro',
linkText: 'Free Trial'
},
{
planType: 'business',
planName: _W.tl('Business'),
planDescription: _W.tl('Fully integrated eCommerce and all available features. The complete package.'),
planPrice: '25',
planLink: 'plans/type/business',
linkText: 'Free Trial'
}
],
ui: {
comparePlans: '.compare-plans'
},
events: {
'click @ui.comparePlans': 'openComparePlans',
'click .plan-choice': 'signupWithPlan'
},
itemView: o,
itemViewContainer: '.plan-items',
initialize: function () {
'yes' == window.bootstrapData.sitePageLimits && (this.plans[0].planDescription = _W.tl('Everything you need for a high quality site. Create up to five pages and host your site for free.')),
this.collection = new e.Collection(this.plans)
},
onRender: function () {
this.$el.find('[data-toggle=tooltip]').tooltip().on('hide.bs.tooltip', function (e) {
e.preventDefault(),
t('div.tooltip.in').removeClass('in').hide()
}),
'yes' == window.bootstrapData.starterProComparison && (t('#plan-choice-starter-description').text('Make your site standout with a custom domain, expanded site stats, and premium support.'), t('#plan-choice-pro-description').text('Remove Weebly branding to give your site a unique look and add professional multimedia features.'))
},
onShow: function () {
'without_credit_card' == bootstrapData.freeTrial || 'with_credit_card' == bootstrapData.freeTrial ? (this.$el.find('.w-icon-question').hide(), this.$el.find('.section-header h3').hide(), this.$el.find('.section-footer h1').text(' '), 'with_credit_card' == bootstrapData.freeTrial && this.$el.find('.actions h2').text(_W.tl('Start a free trial to experience any premium plan for 15 days.')))  : this.$el.find('.actions h2').hide()
},
appendHtml: function (e, t) {
e.$(this.itemViewContainer).append(t.el)
},
openComparePlans: function (e) {
e.preventDefault(),
n.vent.trigger('plans:compare', this.collection)
},
signupWithPlan: function (e) {
e.preventDefault();
var t = jQuery(e.currentTarget).data('plan-type');
n.vent.trigger('plans:open', this.collection, t)
}
});
return s
}),
function (e) {
var t = e.jCarousel = {
};
t.version = '0.3.0';
var i = /^([+\-]=)?(.+)$/;
t.parseTarget = function (e) {
var t = !1,
n = 'object' != typeof e ? i.exec(e)  : null;
return n ? (e = parseInt(n[2], 10) || 0, n[1] && (t = !0, '-=' === n[1] && (e *= - 1)))  : 'object' != typeof e && (e = parseInt(e, 10) || 0),
{
target: e,
relative: t
}
},
t.detectCarousel = function (e) {
for (var t; e.length > 0; ) {
if (t = e.filter('[data-jcarousel]'), t.length > 0) return t;
if (t = e.find('[data-jcarousel]'), t.length > 0) return t;
e = e.parent()
}
return null
},
t.base = function (i) {
return {
version: t.version,
_options: {
},
_element: null,
_carousel: null,
_init: e.noop,
_create: e.noop,
_destroy: e.noop,
_reload: e.noop,
create: function () {
return this._element.attr('data-' + i.toLowerCase(), !0).data(i, this),
!1 === this._trigger('create') ? this : (this._create(), this._trigger('createend'), this)
},
destroy: function () {
return !1 === this._trigger('destroy') ? this : (this._destroy(), this._trigger('destroyend'), this._element.removeData(i).removeAttr('data-' + i.toLowerCase()), this)
},
reload: function (e) {
return !1 === this._trigger('reload') ? this : (e && this.options(e), this._reload(), this._trigger('reloadend'), this)
},
element: function () {
return this._element
},
options: function (t, i) {
if (0 === arguments.length) return e.extend({
}, this._options);
if ('string' == typeof t) {
if ('undefined' == typeof i) return 'undefined' == typeof this._options[t] ? null : this._options[t];
this._options[t] = i
} else this._options = e.extend({
}, this._options, t);
return this
},
carousel: function () {
return this._carousel || (this._carousel = t.detectCarousel(this.options('carousel') || this._element), this._carousel || e.error('Could not detect carousel for plugin "' + i + '"')),
this._carousel
},
_trigger: function (t, n, o) {
var s,
r = !1;
return o = [
this
].concat(o || []),
(n || this._element).each(function () {
s = e.Event((i + ':' + t).toLowerCase()),
e(this).trigger(s, o),
s.isDefaultPrevented() && (r = !0)
}),
!r
}
}
},
t.plugin = function (i, n) {
var o = e[i] = function (t, i) {
this._element = e(t),
this.options(i),
this._init(),
this.create()
};
return o.fn = o.prototype = e.extend({
}, t.base(i), n),
e.fn[i] = function (t) {
var n = Array.prototype.slice.call(arguments, 1),
s = this;
return 'string' == typeof t ? this.each(function () {
var o = e(this).data(i);
if (!o) return e.error('Cannot call methods on ' + i + ' prior to initialization; ' + 'attempted to call method "' + t + '"');
if (!e.isFunction(o[t]) || '_' === t.charAt(0)) return e.error('No such method "' + t + '" for ' + i + ' instance');
var r = o[t].apply(o, n);
return r !== o && 'undefined' != typeof r ? (s = r, !1)  : void 0
})  : this.each(function () {
var n = e(this).data(i);
n instanceof o ? n.reload(t)  : new o(this, t)
}),
s
},
o
}
}(jQuery),
function (e, t) {
var i = function (e) {
return parseFloat(e) || 0
};
e.jCarousel.plugin('jcarousel', {
animating: !1,
tail: 0,
inTail: !1,
resizeTimer: null,
lt: null,
vertical: !1,
rtl: !1,
circular: !1,
underflow: !1,
relative: !1,
_options: {
list: function () {
return this.element().children().eq(0)
},
items: function () {
return this.list().children()
},
animation: 400,
transitions: !1,
wrap: null,
vertical: null,
rtl: null,
center: !1
},
_list: null,
_items: null,
_target: null,
_first: null,
_last: null,
_visible: null,
_fullyvisible: null,
_init: function () {
var e = this;
return this.onWindowResize = function () {
e.resizeTimer && clearTimeout(e.resizeTimer),
e.resizeTimer = setTimeout(function () {
e.reload()
}, 100)
},
this
},
_create: function () {
this._reload(),
e(t).on('resize.jcarousel', this.onWindowResize)
},
_destroy: function () {
e(t).off('resize.jcarousel', this.onWindowResize)
},
_reload: function () {
this.vertical = this.options('vertical'),
null == this.vertical && (this.vertical = this.list().height() > this.list().width()),
this.rtl = this.options('rtl'),
null == this.rtl && (this.rtl = function (t) {
if ('rtl' === ('' + t.attr('dir')).toLowerCase()) return !0;
var i = !1;
return t.parents('[dir]').each(function () {
return /rtl/i.test(e(this).attr('dir')) ? (i = !0, !1)  : void 0
}),
i
}(this._element)),
this.lt = this.vertical ? 'top' : 'left',
this.relative = 'relative' === this.list().css('position'),
this._list = null,
this._items = null;
var t = this._target && this.index(this._target) >= 0 ? this._target : this.closest();
this.circular = 'circular' === this.options('wrap'),
this.underflow = !1;
var i = {
left: 0,
top: 0
};
return t.length > 0 && (this._prepare(t), this.list().find('[data-jcarousel-clone]').remove(), this._items = null, this.underflow = this._fullyvisible.length >= this.items().length, this.circular = this.circular && !this.underflow, i[this.lt] = this._position(t) + 'px'),
this.move(i),
this
},
list: function () {
if (null === this._list) {
var t = this.options('list');
this._list = e.isFunction(t) ? t.call(this)  : this._element.find(t)
}
return this._list
},
items: function () {
if (null === this._items) {
var t = this.options('items');
this._items = (e.isFunction(t) ? t.call(this)  : this.list().find(t)).not('[data-jcarousel-clone]')
}
return this._items
},
index: function (e) {
return this.items().index(e)
},
closest: function () {
var t,
n = this,
o = this.list().position() [this.lt],
s = e(),
r = !1,
a = this.vertical ? 'bottom' : this.rtl && !this.relative ? 'left' : 'right';
return this.rtl && this.relative && !this.vertical && (o += this.list().width() - this.clipping()),
this.items().each(function () {
if (s = e(this), r) return !1;
var l = n.dimension(s);
if (o += l, o >= 0) {
if (t = l - i(s.css('margin-' + a)), !(Math.abs(o) - l + t / 2 <= 0)) return !1;
r = !0
}
}),
s
},
target: function () {
return this._target
},
first: function () {
return this._first
},
last: function () {
return this._last
},
visible: function () {
return this._visible
},
fullyvisible: function () {
return this._fullyvisible
},
hasNext: function () {
if (!1 === this._trigger('hasnext')) return !0;
var e = this.options('wrap'),
t = this.items().length - 1;
return t >= 0 && (e && 'first' !== e || this.index(this._last) < t || this.tail && !this.inTail) ? !0 : !1
},
hasPrev: function () {
if (!1 === this._trigger('hasprev')) return !0;
var e = this.options('wrap');
return this.items().length > 0 && (e && 'last' !== e || this.index(this._first) > 0 || this.tail && this.inTail) ? !0 : !1
},
clipping: function () {
return this._element['inner' + (this.vertical ? 'Height' : 'Width')]()
},
dimension: function (e) {
return e['outer' + (this.vertical ? 'Height' : 'Width')](!0)
},
scroll: function (t, i, n) {
if (this.animating) return this;
if (!1 === this._trigger('scroll', null, [
t,
i
])) return this;
e.isFunction(i) && (n = i, i = !0);
var o = e.jCarousel.parseTarget(t);
if (o.relative) {
var s,
r,
a,
l,
c,
u,
d,
h,
p = this.items().length - 1,
f = Math.abs(o.target),
m = this.options('wrap');
if (o.target > 0) {
var g = this.index(this._last);
if (g >= p && this.tail) this.inTail ? 'both' === m || 'last' === m ? this._scroll(0, i, n)  : e.isFunction(n) && n.call(this, !1)  : this._scrollTail(i, n);
 else if (s = this.index(this._target), this.underflow && s === p && ('circular' === m || 'both' === m || 'last' === m) || !this.underflow && g === p && ('both' === m || 'last' === m)) this._scroll(0, i, n);
 else if (a = s + f, this.circular && a > p) {
for (h = p, c = this.items().get( - 1); h++ < a; ) c = this.items().eq(0),
u = this._visible.index(c) >= 0,
u && c.after(c.clone(!0).attr('data-jcarousel-clone', !0)),
this.list().append(c),
u || (d = {
}, d[this.lt] = this.dimension(c), this.moveBy(d)),
this._items = null;
this._scroll(c, i, n)
} else this._scroll(Math.min(a, p), i, n)
} else if (this.inTail) this._scroll(Math.max(this.index(this._first) - f + 1, 0), i, n);
 else if (r = this.index(this._first), s = this.index(this._target), l = this.underflow ? s : r, a = l - f, 0 >= l && (this.underflow && 'circular' === m || 'both' === m || 'first' === m)) this._scroll(p, i, n);
 else if (this.circular && 0 > a) {
for (h = a, c = this.items().get(0); h++ < 0; ) {
c = this.items().eq( - 1),
u = this._visible.index(c) >= 0,
u && c.after(c.clone(!0).attr('data-jcarousel-clone', !0)),
this.list().prepend(c),
this._items = null;
var v = this.dimension(c);
d = {
},
d[this.lt] = - v,
this.moveBy(d)
}
this._scroll(c, i, n)
} else this._scroll(Math.max(a, 0), i, n)
} else this._scroll(o.target, i, n);
return this._trigger('scrollend'),
this
},
moveBy: function (e, t) {
var n = this.list().position(),
o = 1,
s = 0;
return this.rtl && !this.vertical && (o = - 1, this.relative && (s = this.list().width() - this.clipping())),
e.left && (e.left = n.left + s + i(e.left) * o + 'px'),
e.top && (e.top = n.top + s + i(e.top) * o + 'px'),
this.move(e, t)
},
move: function (t, i) {
i = i || {
};
var n = this.options('transitions'),
o = !!n,
s = !!n.transforms,
r = !!n.transforms3d,
a = i.duration || 0,
l = this.list();
if (!o && a > 0) return l.animate(t, i),
void 0;
var c = i.complete || e.noop,
u = {
};
if (o) {
var d = l.css(['transitionDuration',
'transitionTimingFunction',
'transitionProperty']),
h = c;
c = function () {
e(this).css(d),
h.call(this)
},
u = {
transitionDuration: (a > 0 ? a / 1000 : 0) + 's',
transitionTimingFunction: n.easing || i.easing,
transitionProperty: a > 0 ? function () {
return s || r ? 'all' : t.left ? 'left' : 'top'
}()  : 'none',
transform: 'none'
}
}
r ? u.transform = 'translate3d(' + (t.left || 0) + ',' + (t.top || 0) + ',0)' : s ? u.transform = 'translate(' + (t.left || 0) + ',' + (t.top || 0) + ')' : e.extend(u, t),
o && a > 0 && l.one('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd', c),
l.css(u),
0 >= a && l.each(function () {
c.call(this)
})
},
_scroll: function (t, i, n) {
if (this.animating) return e.isFunction(n) && n.call(this, !1),
this;
if ('object' != typeof t ? t = this.items().eq(t)  : 'undefined' == typeof t.jquery && (t = e(t)), 0 === t.length) return e.isFunction(n) && n.call(this, !1),
this;
this.inTail = !1,
this._prepare(t);
var o = this._position(t),
s = this.list().position() [this.lt];
if (o === s) return e.isFunction(n) && n.call(this, !1),
this;
var r = {
};
return r[this.lt] = o + 'px',
this._animate(r, i, n),
this
},
_scrollTail: function (t, i) {
if (this.animating || !this.tail) return e.isFunction(i) && i.call(this, !1),
this;
var n = this.list().position() [this.lt];
this.rtl && this.relative && !this.vertical && (n += this.list().width() - this.clipping()),
this.rtl && !this.vertical ? n += this.tail : n -= this.tail,
this.inTail = !0;
var o = {
};
return o[this.lt] = n + 'px',
this._update({
target: this._target.next(),
fullyvisible: this._fullyvisible.slice(1).add(this._visible.last())
}),
this._animate(o, t, i),
this
},
_animate: function (t, i, n) {
if (n = n || e.noop, !1 === this._trigger('animate')) return n.call(this, !1),
this;
this.animating = !0;
var o = this.options('animation'),
s = e.proxy(function () {
this.animating = !1;
var e = this.list().find('[data-jcarousel-clone]');
e.length > 0 && (e.remove(), this._reload()),
this._trigger('animateend'),
n.call(this, !0)
}, this),
r = 'object' == typeof o ? e.extend({
}, o)  : {
duration: o
},
a = r.complete || e.noop;
return i === !1 ? r.duration = 0 : 'undefined' != typeof e.fx.speeds[r.duration] && (r.duration = e.fx.speeds[r.duration]),
r.complete = function () {
s(),
a.call(this)
},
this.move(t, r),
this
},
_prepare: function (t) {
var n,
o,
s,
r,
a = this.index(t),
l = a,
c = this.dimension(t),
u = this.clipping(),
d = this.vertical ? 'bottom' : this.rtl ? 'left' : 'right',
h = this.options('center'),
p = {
target: t,
first: t,
last: t,
visible: t,
fullyvisible: u >= c ? t : e()
};
if (h && (c /= 2, u /= 2), u > c) for (; ; ) {
if (n = this.items().eq(++l), 0 === n.length) {
if (!this.circular) break;
if (n = this.items().eq(0), t.get(0) === n.get(0)) break;
if (o = this._visible.index(n) >= 0, o && n.after(n.clone(!0).attr('data-jcarousel-clone', !0)), this.list().append(n), !o) {
var f = {
};
f[this.lt] = this.dimension(n),
this.moveBy(f)
}
this._items = null
}
if (r = this.dimension(n), 0 === r) break;
if (c += r, p.last = n, p.visible = p.visible.add(n), s = i(n.css('margin-' + d)), u >= c - s && (p.fullyvisible = p.fullyvisible.add(n)), c >= u) break
}
if (!this.circular && !h && u > c) for (l = a; ; ) {
if (--l < 0) break;
if (n = this.items().eq(l), 0 === n.length) break;
if (r = this.dimension(n), 0 === r) break;
if (c += r, p.first = n, p.visible = p.visible.add(n), s = i(n.css('margin-' + d)), u >= c - s && (p.fullyvisible = p.fullyvisible.add(n)), c >= u) break
}
return this._update(p),
this.tail = 0,
h || 'circular' === this.options('wrap') || 'custom' === this.options('wrap') || this.index(p.last) !== this.items().length - 1 || (c -= i(p.last.css('margin-' + d)), c > u && (this.tail = c - u)),
this
},
_position: function (e) {
var t = this._first,
i = t.position() [this.lt],
n = this.options('center'),
o = n ? this.clipping() / 2 - this.dimension(t) / 2 : 0;
return this.rtl && !this.vertical ? (i -= this.relative ? this.list().width() - this.dimension(t)  : this.clipping() - this.dimension(t), i += o)  : i -= o,
!n && (this.index(e) > this.index(t) || this.inTail) && this.tail ? (i = this.rtl && !this.vertical ? i - this.tail : i + this.tail, this.inTail = !0)  : this.inTail = !1,
- i
},
_update: function (t) {
var i,
n = this,
o = {
target: this._target || e(),
first: this._first || e(),
last: this._last || e(),
visible: this._visible || e(),
fullyvisible: this._fullyvisible || e()
},
s = this.index(t.first || o.first) < this.index(o.first),
r = function (i) {
var r = [
],
a = [
];
t[i].each(function () {
o[i].index(this) < 0 && r.push(this)
}),
o[i].each(function () {
t[i].index(this) < 0 && a.push(this)
}),
s ? r = r.reverse()  : a = a.reverse(),
n._trigger(i + 'in', e(r)),
n._trigger(i + 'out', e(a)),
n['_' + i] = t[i]
};
for (i in t) r(i);
return this
}
})
}(jQuery, window),
function (e) {
e.jcarousel.fn.scrollIntoView = function (t, i, n) {
var o,
s = e.jCarousel.parseTarget(t),
r = this.index(this._fullyvisible.first()),
a = this.index(this._fullyvisible.last());
if (o = s.relative ? s.target < 0 ? Math.max(0, r + s.target)  : a + s.target : 'object' != typeof s.target ? s.target : this.index(s.target), r > o) return this.scroll(o, i, n);
if (o >= r && a >= o) return e.isFunction(n) && n.call(this, !1),
this;
for (var l, c = this.items(), u = this.clipping(), d = this.vertical ? 'bottom' : this.rtl ? 'left' : 'right', h = 0; ; ) {
if (l = c.eq(o), 0 === l.length) break;
if (h += this.dimension(l), h >= u) {
var p = parseFloat(l.css('margin-' + d)) || 0;
h - p !== u && o++;
break
}
if (0 >= o) break;
o--
}
return this.scroll(o, i, n)
}
}(jQuery),
function (e) {
e.jCarousel.plugin('jcarouselControl', {
_options: {
target: '+=1',
event: 'click',
method: 'scroll'
},
_active: null,
_init: function () {
this.onDestroy = e.proxy(function () {
this._destroy(),
this.carousel().one('jcarousel:createend', e.proxy(this._create, this))
}, this),
this.onReload = e.proxy(this._reload, this),
this.onEvent = e.proxy(function (t) {
t.preventDefault();
var i = this.options('method');
e.isFunction(i) ? i.call(this)  : this.carousel().jcarousel(this.options('method'), this.options('target'))
}, this)
},
_create: function () {
this.carousel().one('jcarousel:destroy', this.onDestroy).on('jcarousel:reloadend jcarousel:scrollend', this.onReload),
this._element.on(this.options('event') + '.jcarouselcontrol', this.onEvent),
this._reload()
},
_destroy: function () {
this._element.off('.jcarouselcontrol', this.onEvent),
this.carousel().off('jcarousel:destroy', this.onDestroy).off('jcarousel:reloadend jcarousel:scrollend', this.onReload)
},
_reload: function () {
var t,
i = e.jCarousel.parseTarget(this.options('target')),
n = this.carousel();
if (i.relative) t = n.jcarousel(i.target > 0 ? 'hasNext' : 'hasPrev');
 else {
var o = 'object' != typeof i.target ? n.jcarousel('items').eq(i.target)  : i.target;
t = n.jcarousel('target').index(o) >= 0
}
return this._active !== t && (this._trigger(t ? 'active' : 'inactive'), this._active = t),
this
}
})
}(jQuery),
function (e) {
e.jCarousel.plugin('jcarouselPagination', {
_options: {
perPage: null,
item: function (e) {
return '<a href="#' + e + '">' + e + '</a>'
},
event: 'click',
method: 'scroll'
},
_pages: {
},
_items: {
},
_currentPage: null,
_init: function () {
this.onDestroy = e.proxy(function () {
this._destroy(),
this.carousel().one('jcarousel:createend', e.proxy(this._create, this))
}, this),
this.onReload = e.proxy(this._reload, this),
this.onScroll = e.proxy(this._update, this)
},
_create: function () {
this.carousel().one('jcarousel:destroy', this.onDestroy).on('jcarousel:reloadend', this.onReload).on('jcarousel:scrollend', this.onScroll),
this._reload()
},
_destroy: function () {
this._clear(),
this.carousel().off('jcarousel:destroy', this.onDestroy).off('jcarousel:reloadend', this.onReload).off('jcarousel:scrollend', this.onScroll)
},
_reload: function () {
var t = this.options('perPage');
if (this._pages = {
}, this._items = {
}, e.isFunction(t) && (t = t.call(this)), null == t) this._pages = this._calculatePages();
 else for (var i, n = parseInt(t, 10) || 0, o = this.carousel().jcarousel('items'), s = 1, r = 0; ; ) {
if (i = o.eq(r++), 0 === i.length) break;
this._pages[s] = this._pages[s] ? this._pages[s].add(i)  : i,
0 === r % n && s++
}
this._clear();
var a = this,
l = this.carousel().data('jcarousel'),
c = this._element,
u = this.options('item');
e.each(this._pages, function (t, i) {
var n = a._items[t] = e(u.call(a, t, i));
n.on(a.options('event') + '.jcarouselpagination', e.proxy(function () {
var e = i.eq(0);
if (l.circular) {
var n = l.index(l.target()),
o = l.index(e);
parseFloat(t) > parseFloat(a._currentPage) ? n > o && (e = '+=' + (l.items().length - n + o))  : o > n && (e = '-=' + (n + (l.items().length - o)))
}
l[this.options('method')](e)
}, a)),
c.append(n)
}),
this._update()
},
_update: function () {
var t,
i = this.carousel().jcarousel('target');
e.each(this._pages, function (e, n) {
return n.each(function () {
return i.is(this) ? (t = e, !1)  : void 0
}),
t ? !1 : void 0
}),
this._currentPage !== t && (this._trigger('inactive', this._items[this._currentPage]), this._trigger('active', this._items[t])),
this._currentPage = t
},
items: function () {
return this._items
},
_clear: function () {
this._element.empty(),
this._currentPage = null
},
_calculatePages: function () {
for (var e, t = this.carousel().data('jcarousel'), i = t.items(), n = t.clipping(), o = 0, s = 0, r = 1, a = {
}; ; ) {
if (e = i.eq(s++), 0 === e.length) break;
a[r] = a[r] ? a[r].add(e)  : e,
o += t.dimension(e),
o >= n && (r++, o = 0)
}
return a
}
})
}(jQuery),
function (e) {
e.jCarousel.plugin('jcarouselAutoscroll', {
_options: {
target: '+=1',
interval: 3000,
autostart: !0
},
_timer: null,
_init: function () {
this.onDestroy = e.proxy(function () {
this._destroy(),
this.carousel().one('jcarousel:createend', e.proxy(this._create, this))
}, this),
this.onAnimateEnd = e.proxy(this.start, this)
},
_create: function () {
this.carousel().one('jcarousel:destroy', this.onDestroy),
this.options('autostart') && this.start()
},
_destroy: function () {
this.stop(),
this.carousel().off('jcarousel:destroy', this.onDestroy)
},
start: function () {
return this.stop(),
this.carousel().one('jcarousel:animateend', this.onAnimateEnd),
this._timer = setTimeout(e.proxy(function () {
this.carousel().jcarousel('scroll', this.options('target'))
}, this), this.options('interval')),
this
},
stop: function () {
return this._timer && (this._timer = clearTimeout(this._timer)),
this.carousel().off('jcarousel:animateend', this.onAnimateEnd),
this
}
})
}(jQuery),
_wAMD.define('vendor/jquery.jcarousel', function () {
}),
_wAMD.define('public/vertical/shared/views/FooterView', [
'backbone',
'jquery',
'public/vertical/shared/app',
'vendor/jquery.jcarousel',
'legacy/weebly_ensure_account',
'util/general-utils'
], function (e, t, i, n, o, s) {
var r = e.Marionette.ItemView.extend({
initialize: function () {
this.bindUIElements()
},
ui: {
signupName: '#footer-signup-form-name',
signupEmail: '#footer-signup-form-email',
signupPass: '#footer-signup-form-pass',
errorMsg: '#footer-signup-form-error'
},
render: function () {
var e = this;
this.$el.find('.quote-container').jcarousel({
wrap: 'circular',
animation: 400
}).jcarouselAutoscroll({
interval: 7000,
target: '+=1',
autostart: !0
}),
this.$el.find('.prev-quote').jcarouselControl({
target: '-=1'
}),
this.$el.find('.next-quote').jcarouselControl({
target: '+=1'
});
var t = s.isIE();
this.$el.on('isActive', function () {
t || e.ui.signupName.focus()
}),
i.vent.on('overlay:closed', function (i) {
3 != i || t || e.ui.signupName.focus()
})
},
onShow: function () {
var e = this;
new Weebly.login({
signup_only: !0,
require_tos_check: !1,
signup_form: 'footer-signup-form',
signup_name_field: 'footer-signup-form-name',
signup_email_field: 'footer-signup-form-email',
signup_password_field: 'footer-signup-form-pass',
signup_response_field: 'footer-signup-form-response',
signup_error_handler: function (t) {
e.ui.errorMsg.text(t),
e.ui.errorMsg.show(),
e.ui.signupName.addClass('input-error'),
e.ui.signupEmail.addClass('input-error'),
e.ui.signupPass.addClass('input-error')
},
onLoadingStart: function () {
e.ui.errorMsg.hide(),
e.ui.signupName.removeClass('input-error'),
e.ui.signupEmail.removeClass('input-error'),
e.ui.signupPass.removeClass('input-error')
},
onSignupSuccess: function () {
window.bootstrapData && 'signup' === window.bootstrapData.showPricing ? i.vent.trigger('plans:select')  : window.location.href = '/weebly/userHome.php?'
},
onLoginInstead: function () {
var t = {
message: _W.tl('You already have an account. Please log in.'),
username: e.ui.signupEmail.val(),
password: e.ui.signupPass.val()
};
i.vent.trigger('login:open:suggestion', t)
}
})
}
});
return r
}),
_wAMD.define('public/vertical/shared/views/FixturesView', [
'backbone',
'jquery',
'public/vertical/shared/app',
'public/vertical/shared/views/FloatingMenu',
'public/vertical/shared/views/LoginView',
'public/vertical/shared/views/SignupView',
'jquery-ui/core',
'jquery-ui/effect',
'jquery-ui/effect-fade',
'jquery-ui/effect-scale'
], function (e, t, i) {
var n = e.Marionette.ItemView.extend({
events: {
'click .open-menu': 'menuClicked',
'click .open-login': 'loginClicked',
'click .open-signup': 'signupClicked'
},
ui: {
fixtures: '#fixtures .fixture'
},
initialize: function () {
},
render: function () {
this.bindUIElements()
},
menuClicked: function (e) {
e && e.preventDefault(),
i.vent.trigger('menu:open')
},
loginClicked: function (e) {
e && e.preventDefault(),
i.vent.trigger('login:open')
},
signupClicked: function (e) {
e && e.preventDefault(),
i.vent.trigger('signup:open')
}
});
return n
}),
_wAMD.define('public/vertical/shared/views/InternalFooterView', [
'backbone',
'jquery',
'public/vertical/shared/app',
'public/vertical/shared/views/FloatingMenu',
'public/vertical/shared/views/LoginView',
'public/vertical/shared/views/SignupView',
'jquery-ui/core',
'jquery-ui/effect',
'jquery-ui/effect-fade',
'jquery-ui/effect-scale'
], function (e, t, i) {
var n = e.Marionette.ItemView.extend({
events: {
'click .signup-button': 'openSignup'
},
initialize: function () {
},
render: function () {
},
openSignup: function (e) {
e && e.preventDefault(),
i.vent.trigger('signup:open')
}
});
return n
}),
_wAMD.require(['jquery',
'public/vertical/shared/app',
'public/vertical/shared/navigation/module',
'public/vertical/shared/tracking/module',
'public/vertical/shared/themes/module',
'public/vertical/shared/views/SinglePageScrollView',
'public/vertical/shared/views/FloatingMenu',
'public/vertical/shared/views/LoginView',
'public/vertical/shared/views/VideoDialogView',
'public/vertical/carbon/views/HeaderView',
'public/vertical/shared/views/FeaturesView',
'public/vertical/shared/views/PlansView',
'public/vertical/shared/views/FooterView',
'public/vertical/shared/views/FixturesView',
'public/vertical/shared/views/InternalFooterView',
'public/vertical/shared/oauth_flow',
'vendor/jquery.placeholder'], function (e, t, i, n, o, s, r, a, l, c, u, d, h, p, f, m) {
e(document).ready(function () {
var i = e(this);
t.addInitializer(function () {
if (e('body').hasClass('public')) var i = {
fixtures: {
view: new p({
el: '#header'
}),
region: 'fixturesRegion'
},
footer: {
view: new f({
el: '#footer'
}),
region: 'internalFooter'
}
};
 else {
this.themes.start();
var n = this.themes.getThemes(),
o = new Backbone.Collection(n.where({
featured: !0
})),
i = {
main: {
view: new s({
el: 'body'
}),
region: 'mainRegion'
},
fixtures: {
view: new p({
el: '#fixture_region'
}),
region: 'fixturesRegion'
},
features: {
view: new u({
el: '#features_panel',
collection: o
}),
region: 'featuresRegion'
},
plans: {
view: new d({
el: '#plans_panel'
}),
region: 'plansRegion'
},
footer: {
view: new h({
el: '#footer_panel'
}),
region: 'footerRegion'
},
header: {
view: new c({
el: '#header_panel'
}),
region: 'headerRegion'
}
}
}
_.each(i, function (e) {
t.getRegion(e.region).show(e.view)
})
}),
t.addInitializer(function () {
i.on('keyup', function (e) {
27 == e.keyCode && t.vent.trigger('key:escape')
})
}),
t.addInitializer(function () {
m.init()
}),
t.addInitializer(function () {
e('input, textarea').placeholder()
}),
t.on('start', function () {
Backbone.history.start()
}),
t.start()
})
}),
window.location.hash.match('^#google-domains-themes')) {
var head = document.head || document.getElementsByTagName('head') [0],
style = document.createElement('style'),
css = '';
css = '#panels { display: none }',
style.styleSheet ? style.styleSheet.cssText = css : style.appendChild(document.createTextNode(css)),
head.appendChild(style)
}
_wAMD.define('public/vertical/carbon/main', function () {
});
