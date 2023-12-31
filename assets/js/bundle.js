!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(undefined, function () {
  var e =
      "undefined" == typeof document
        ? {
            body: {},
            addEventListener: function e() {},
            removeEventListener: function e() {},
            activeElement: { blur: function e() {}, nodeName: "" },
            querySelector: function e() {
              return null;
            },
            querySelectorAll: function e() {
              return [];
            },
            getElementById: function e() {
              return null;
            },
            createEvent: function e() {
              return { initEvent: function e() {} };
            },
            createElement: function e() {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function e() {},
                getElementsByTagName: function e() {
                  return [];
                }
              };
            },
            location: { hash: "" }
          }
        : document,
    t =
      "undefined" == typeof window
        ? {
            document: e,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function e() {
              return this;
            },
            addEventListener: function e() {},
            removeEventListener: function e() {},
            getComputedStyle: function e() {
              return {
                getPropertyValue: function e() {
                  return "";
                }
              };
            },
            Image: function e() {},
            Date: function e() {},
            screen: {},
            setTimeout: function e() {},
            clearTimeout: function e() {}
          }
        : window,
    i = function e(t) {
      for (var i = this, s = 0; s < t.length; s += 1) i[s] = t[s];
      return (i.length = t.length), this;
    };
  function s(s, a) {
    var r = [],
      n = 0;
    if (s && !a && s instanceof i) return s;
    if (s) {
      if ("string" == typeof s) {
        var l,
          o,
          d = s.trim();
        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
          var p = "div";
          for (
            0 === d.indexOf("<li") && (p = "ul"),
              0 === d.indexOf("<tr") && (p = "tbody"),
              (0 === d.indexOf("<td") || 0 === d.indexOf("<th")) && (p = "tr"),
              0 === d.indexOf("<tbody") && (p = "table"),
              0 === d.indexOf("<option") && (p = "select"),
              (o = e.createElement(p)).innerHTML = d,
              n = 0;
            n < o.childNodes.length;
            n += 1
          )
            r.push(o.childNodes[n]);
        } else
          for (
            n = 0,
              l =
                a || "#" !== s[0] || s.match(/[ .<>:~]/)
                  ? (a || e).querySelectorAll(s.trim())
                  : [e.getElementById(s.trim().split("#")[1])];
            n < l.length;
            n += 1
          )
            l[n] && r.push(l[n]);
      } else if (s.nodeType || s === t || s === e) r.push(s);
      else if (s.length > 0 && s[0].nodeType)
        for (n = 0; n < s.length; n += 1) r.push(s[n]);
    }
    return new i(r);
  }
  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1)
      -1 === t.indexOf(e[i]) && t.push(e[i]);
    return t;
  }
  (s.fn = i.prototype), (s.Class = i), (s.Dom7 = i);
  var r = {
    addClass: function e(t) {
      if (void 0 === t) return this;
      for (var i = t.split(" "), s = 0; s < i.length; s += 1)
        for (var a = 0; a < this.length; a += 1)
          void 0 !== this[a] &&
            void 0 !== this[a].classList &&
            this[a].classList.add(i[s]);
      return this;
    },
    removeClass: function e(t) {
      for (var i = t.split(" "), s = 0; s < i.length; s += 1)
        for (var a = 0; a < this.length; a += 1)
          void 0 !== this[a] &&
            void 0 !== this[a].classList &&
            this[a].classList.remove(i[s]);
      return this;
    },
    hasClass: function e(t) {
      return !!this[0] && this[0].classList.contains(t);
    },
    toggleClass: function e(t) {
      for (var i = t.split(" "), s = 0; s < i.length; s += 1)
        for (var a = 0; a < this.length; a += 1)
          void 0 !== this[a] &&
            void 0 !== this[a].classList &&
            this[a].classList.toggle(i[s]);
      return this;
    },
    attr: function e(t, i) {
      var s = arguments;
      if (1 === arguments.length && "string" == typeof t)
        return this[0] ? this[0].getAttribute(t) : void 0;
      for (var a = 0; a < this.length; a += 1)
        if (2 === s.length) this[a].setAttribute(t, i);
        else
          for (var r in t) (this[a][r] = t[r]), this[a].setAttribute(r, t[r]);
      return this;
    },
    removeAttr: function e(t) {
      for (var i = 0; i < this.length; i += 1) this[i].removeAttribute(t);
      return this;
    },
    data: function e(t, i) {
      var s;
      if (void 0 === i) {
        if ((s = this[0])) {
          if (s.dom7ElementDataStorage && t in s.dom7ElementDataStorage)
            return s.dom7ElementDataStorage[t];
          var a = s.getAttribute("data-" + t);
          if (a) return a;
        }
        return;
      }
      for (var r = 0; r < this.length; r += 1)
        (s = this[r]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
          (s.dom7ElementDataStorage[t] = i);
      return this;
    },
    transform: function e(t) {
      for (var i = 0; i < this.length; i += 1) {
        var s = this[i].style;
        (s.webkitTransform = t), (s.transform = t);
      }
      return this;
    },
    transition: function e(t) {
      "string" != typeof t && (t += "ms");
      for (var i = 0; i < this.length; i += 1) {
        var s = this[i].style;
        (s.webkitTransitionDuration = t), (s.transitionDuration = t);
      }
      return this;
    },
    on: function e() {
      for (var t, i, a = [], r = arguments.length; r--; ) a[r] = arguments[r];
      var n = a[0],
        l = a[1],
        o = a[2],
        d = a[3];
      function p(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if ((0 > i.indexOf(e) && i.unshift(e), s(t).is(l))) o.apply(t, i);
          else
            for (var a = s(t).parents(), r = 0; r < a.length; r += 1)
              s(a[r]).is(l) && o.apply(a[r], i);
        }
      }
      function h(e) {
        var t = (e && e.target && e.target.dom7EventData) || [];
        0 > t.indexOf(e) && t.unshift(e), o.apply(this, t);
      }
      "function" == typeof a[1] &&
        ((n = (t = a)[0]), (o = t[1]), (d = t[2]), (l = void 0)),
        d || (d = !1);
      for (var c = n.split(" "), u = 0; u < this.length; u += 1) {
        var v = this[u];
        if (l)
          for (i = 0; i < c.length; i += 1) {
            var f = c[i];
            v.dom7LiveListeners || (v.dom7LiveListeners = {}),
              v.dom7LiveListeners[f] || (v.dom7LiveListeners[f] = []),
              v.dom7LiveListeners[f].push({ listener: o, proxyListener: p }),
              v.addEventListener(f, p, d);
          }
        else
          for (i = 0; i < c.length; i += 1) {
            var m = c[i];
            v.dom7Listeners || (v.dom7Listeners = {}),
              v.dom7Listeners[m] || (v.dom7Listeners[m] = []),
              v.dom7Listeners[m].push({ listener: o, proxyListener: h }),
              v.addEventListener(m, h, d);
          }
      }
      return this;
    },
    off: function e() {
      for (var t, i = [], s = arguments.length; s--; ) i[s] = arguments[s];
      var a = i[0],
        r = i[1],
        n = i[2],
        l = i[3];
      "function" == typeof i[1] &&
        ((a = (t = i)[0]), (n = t[1]), (l = t[2]), (r = void 0)),
        l || (l = !1);
      for (var o = a.split(" "), d = 0; d < o.length; d += 1)
        for (var p = o[d], h = 0; h < this.length; h += 1) {
          var c = this[h],
            u = void 0;
          if (
            (!r && c.dom7Listeners
              ? (u = c.dom7Listeners[p])
              : r && c.dom7LiveListeners && (u = c.dom7LiveListeners[p]),
            u && u.length)
          )
            for (var v = u.length - 1; v >= 0; v -= 1) {
              var f = u[v];
              n && f.listener === n
                ? (c.removeEventListener(p, f.proxyListener, l), u.splice(v, 1))
                : n &&
                  f.listener &&
                  f.listener.dom7proxy &&
                  f.listener.dom7proxy === n
                ? (c.removeEventListener(p, f.proxyListener, l), u.splice(v, 1))
                : n ||
                  (c.removeEventListener(p, f.proxyListener, l),
                  u.splice(v, 1));
            }
        }
      return this;
    },
    trigger: function i() {
      for (var s = [], a = arguments.length; a--; ) s[a] = arguments[a];
      for (var r = s[0].split(" "), n = s[1], l = 0; l < r.length; l += 1)
        for (var o = r[l], d = 0; d < this.length; d += 1) {
          var p = this[d],
            h = void 0;
          try {
            h = new t.CustomEvent(o, {
              detail: n,
              bubbles: !0,
              cancelable: !0
            });
          } catch (c) {
            (h = e.createEvent("Event")).initEvent(o, !0, !0), (h.detail = n);
          }
          (p.dom7EventData = s.filter(function (e, t) {
            return t > 0;
          })),
            p.dispatchEvent(h),
            (p.dom7EventData = []),
            delete p.dom7EventData;
        }
      return this;
    },
    transitionEnd: function e(t) {
      var i,
        s = ["webkitTransitionEnd", "transitionend"],
        a = this;
      function r(e) {
        if (e.target === this)
          for (t.call(this, e), i = 0; i < s.length; i += 1) a.off(s[i], r);
      }
      if (t) for (i = 0; i < s.length; i += 1) a.on(s[i], r);
      return this;
    },
    outerWidth: function e(t) {
      if (this.length > 0) {
        if (t) {
          var i = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(i.getPropertyValue("margin-right")) +
            parseFloat(i.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function e(t) {
      if (this.length > 0) {
        if (t) {
          var i = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(i.getPropertyValue("margin-top")) +
            parseFloat(i.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function i() {
      if (this.length > 0) {
        var s = this[0],
          a = s.getBoundingClientRect(),
          r = e.body,
          n = s.clientTop || r.clientTop || 0,
          l = s.clientLeft || r.clientLeft || 0,
          o = s === t ? t.scrollY : s.scrollTop,
          d = s === t ? t.scrollX : s.scrollLeft;
        return { top: a.top + o - n, left: a.left + d - l };
      }
      return null;
    },
    css: function e(i, s) {
      var a;
      if (1 === arguments.length) {
        if ("string" == typeof i) {
          if (this[0])
            return t.getComputedStyle(this[0], null).getPropertyValue(i);
        } else {
          for (a = 0; a < this.length; a += 1)
            for (var r in i) this[a].style[r] = i[r];
          return this;
        }
      }
      if (2 === arguments.length && "string" == typeof i)
        for (a = 0; a < this.length; a += 1) this[a].style[i] = s;
      return this;
    },
    each: function e(t) {
      if (!t) return this;
      for (
        var i = 0;
        i < this.length && !1 !== t.call(this[i], i, this[i]);
        i += 1
      );
      return this;
    },
    html: function e(t) {
      if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
      for (var i = 0; i < this.length; i += 1) this[i].innerHTML = t;
      return this;
    },
    text: function e(t) {
      if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
      for (var i = 0; i < this.length; i += 1) this[i].textContent = t;
      return this;
    },
    is: function a(r) {
      var n,
        l,
        o = this[0];
      if (!o || void 0 === r) return !1;
      if ("string" == typeof r) {
        if (o.matches) return o.matches(r);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(r);
        if (o.msMatchesSelector) return o.msMatchesSelector(r);
        for (l = 0, n = s(r); l < n.length; l += 1) if (n[l] === o) return !0;
        return !1;
      }
      if (r === e) return o === e;
      if (r === t) return o === t;
      if (r.nodeType || r instanceof i) {
        for (l = 0, n = r.nodeType ? [r] : r; l < n.length; l += 1)
          if (n[l] === o) return !0;
      }
      return !1;
    },
    index: function e() {
      var t,
        i = this[0];
      if (i) {
        for (t = 0; null !== (i = i.previousSibling); )
          1 === i.nodeType && (t += 1);
        return t;
      }
    },
    eq: function e(t) {
      if (void 0 === t) return this;
      var s,
        a = this.length;
      return t > a - 1
        ? new i([])
        : t < 0
        ? new i((s = a + t) < 0 ? [] : [this[s]])
        : new i([this[t]]);
    },
    append: function t() {
      for (var s, a = [], r = arguments.length; r--; ) a[r] = arguments[r];
      for (var n = 0; n < a.length; n += 1) {
        s = a[n];
        for (var l = 0; l < this.length; l += 1)
          if ("string" == typeof s) {
            var o = e.createElement("div");
            for (o.innerHTML = s; o.firstChild; )
              this[l].appendChild(o.firstChild);
          } else if (s instanceof i)
            for (var d = 0; d < s.length; d += 1) this[l].appendChild(s[d]);
          else this[l].appendChild(s);
      }
      return this;
    },
    prepend: function t(s) {
      for (a = 0; a < this.length; a += 1)
        if ("string" == typeof s) {
          var a,
            r,
            n = e.createElement("div");
          for (n.innerHTML = s, r = n.childNodes.length - 1; r >= 0; r -= 1)
            this[a].insertBefore(n.childNodes[r], this[a].childNodes[0]);
        } else if (s instanceof i)
          for (r = 0; r < s.length; r += 1)
            this[a].insertBefore(s[r], this[a].childNodes[0]);
        else this[a].insertBefore(s, this[a].childNodes[0]);
      return this;
    },
    next: function e(t) {
      if (this.length > 0) {
        if (t)
          return new i(
            this[0].nextElementSibling && s(this[0].nextElementSibling).is(t)
              ? [this[0].nextElementSibling]
              : []
          );
        if (this[0].nextElementSibling)
          return new i([this[0].nextElementSibling]);
      }
      return new i([]);
    },
    nextAll: function e(t) {
      var a = [],
        r = this[0];
      if (!r) return new i([]);
      for (; r.nextElementSibling; ) {
        var n = r.nextElementSibling;
        t ? s(n).is(t) && a.push(n) : a.push(n), (r = n);
      }
      return new i(a);
    },
    prev: function e(t) {
      if (this.length > 0) {
        var a = this[0];
        if (t)
          return new i(
            a.previousElementSibling && s(a.previousElementSibling).is(t)
              ? [a.previousElementSibling]
              : []
          );
        if (a.previousElementSibling) return new i([a.previousElementSibling]);
      }
      return new i([]);
    },
    prevAll: function e(t) {
      var a = [],
        r = this[0];
      if (!r) return new i([]);
      for (; r.previousElementSibling; ) {
        var n = r.previousElementSibling;
        t ? s(n).is(t) && a.push(n) : a.push(n), (r = n);
      }
      return new i(a);
    },
    parent: function e(t) {
      for (var i = [], r = 0; r < this.length; r += 1)
        null !== this[r].parentNode &&
          (t
            ? s(this[r].parentNode).is(t) && i.push(this[r].parentNode)
            : i.push(this[r].parentNode));
      return s(a(i));
    },
    parents: function e(t) {
      for (var i = [], r = 0; r < this.length; r += 1)
        for (var n = this[r].parentNode; n; )
          t ? s(n).is(t) && i.push(n) : i.push(n), (n = n.parentNode);
      return s(a(i));
    },
    closest: function e(t) {
      var s = this;
      return void 0 === t
        ? new i([])
        : (s.is(t) || (s = s.parents(t).eq(0)), s);
    },
    find: function e(t) {
      for (var s = [], a = 0; a < this.length; a += 1)
        for (var r = this[a].querySelectorAll(t), n = 0; n < r.length; n += 1)
          s.push(r[n]);
      return new i(s);
    },
    children: function e(t) {
      for (var r = [], n = 0; n < this.length; n += 1)
        for (var l = this[n].childNodes, o = 0; o < l.length; o += 1)
          t
            ? 1 === l[o].nodeType && s(l[o]).is(t) && r.push(l[o])
            : 1 === l[o].nodeType && r.push(l[o]);
      return new i(a(r));
    },
    filter: function e(t) {
      for (var s = [], a = 0; a < this.length; a += 1)
        t.call(this[a], a, this[a]) && s.push(this[a]);
      return new i(s);
    },
    remove: function e() {
      for (var t = 0; t < this.length; t += 1)
        this[t].parentNode && this[t].parentNode.removeChild(this[t]);
      return this;
    },
    add: function e() {
      for (var t, i, a = [], r = arguments.length; r--; ) a[r] = arguments[r];
      var n = this;
      for (t = 0; t < a.length; t += 1) {
        var l = s(a[t]);
        for (i = 0; i < l.length; i += 1) (n[n.length] = l[i]), (n.length += 1);
      }
      return n;
    },
    styles: function e() {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = s.fn[e] || r[e];
  });
  var n = {
      deleteProps: function e(t) {
        var i = t;
        Object.keys(i).forEach(function (e) {
          try {
            i[e] = null;
          } catch (t) {}
          try {
            delete i[e];
          } catch (s) {}
        });
      },
      nextTick: function e(t, i) {
        return void 0 === i && (i = 0), setTimeout(t, i);
      },
      now: function e() {
        return Date.now();
      },
      getTranslate: function e(i, s) {
        void 0 === s && (s = "x");
        var a,
          r,
          n,
          l = t.getComputedStyle(i, null);
        return (
          t.WebKitCSSMatrix
            ? ((r = l.transform || l.webkitTransform).split(",").length > 6 &&
                (r = r
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (n = new t.WebKitCSSMatrix("none" === r ? "" : r)))
            : (a = (n =
                l.MozTransform ||
                l.OTransform ||
                l.MsTransform ||
                l.msTransform ||
                l.transform ||
                l
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === s &&
            (r = t.WebKitCSSMatrix
              ? n.m41
              : 16 === a.length
              ? parseFloat(a[12])
              : parseFloat(a[4])),
          "y" === s &&
            (r = t.WebKitCSSMatrix
              ? n.m42
              : 16 === a.length
              ? parseFloat(a[13])
              : parseFloat(a[5])),
          r || 0
        );
      },
      parseUrlQuery: function e(i) {
        var s,
          a,
          r,
          n,
          l = {},
          o = i || t.location.href;
        if ("string" == typeof o && o.length)
          for (
            s = 0,
              n = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "")
                .split("&")
                .filter(function (e) {
                  return "" !== e;
                })).length;
            s < n;
            s += 1
          )
            l[
              decodeURIComponent((r = a[s].replace(/#\S+/g, "").split("="))[0])
            ] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
        return l;
      },
      isObject: function e(t) {
        return (
          "object" == typeof t &&
          null !== t &&
          t.constructor &&
          t.constructor === Object
        );
      },
      extend: function e() {
        for (var t = [], i = arguments.length; i--; ) t[i] = arguments[i];
        for (var s = Object(t[0]), a = 1; a < t.length; a += 1) {
          var r = t[a];
          if (null != r)
            for (
              var l = Object.keys(Object(r)), o = 0, d = l.length;
              o < d;
              o += 1
            ) {
              var p = l[o],
                h = Object.getOwnPropertyDescriptor(r, p);
              void 0 !== h &&
                h.enumerable &&
                (n.isObject(s[p]) && n.isObject(r[p])
                  ? n.extend(s[p], r[p])
                  : !n.isObject(s[p]) && n.isObject(r[p])
                  ? ((s[p] = {}), n.extend(s[p], r[p]))
                  : (s[p] = r[p]));
            }
        }
        return s;
      }
    },
    l = {
      touch:
        (t.Modernizr && !0 === t.Modernizr.touch) ||
        !!(
          t.navigator.maxTouchPoints > 0 ||
          "ontouchstart" in t ||
          (t.DocumentTouch && e instanceof t.DocumentTouch)
        ),
      pointerEvents:
        !!t.PointerEvent &&
        "maxTouchPoints" in t.navigator &&
        t.navigator.maxTouchPoints > 0,
      observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
      passiveListener: (function e() {
        var i = !1;
        try {
          var s = Object.defineProperty({}, "passive", {
            get: function e() {
              i = !0;
            }
          });
          t.addEventListener("testPassiveListener", null, s);
        } catch (a) {}
        return i;
      })(),
      gestures: "ongesturestart" in t
    },
    o = function e(t) {
      void 0 === t && (t = {});
      var i = this;
      (i.params = t),
        (i.eventsListeners = {}),
        i.params &&
          i.params.on &&
          Object.keys(i.params.on).forEach(function (e) {
            i.on(e, i.params.on[e]);
          });
    },
    d = { components: { configurable: !0 } };
  (o.prototype.on = function e(t, i, s) {
    var a = this;
    if ("function" != typeof i) return a;
    var r = s ? "unshift" : "push";
    return (
      t.split(" ").forEach(function (e) {
        a.eventsListeners[e] || (a.eventsListeners[e] = []),
          a.eventsListeners[e][r](i);
      }),
      a
    );
  }),
    (o.prototype.once = function e(t, i, s) {
      var a = this;
      if ("function" != typeof i) return a;
      function r() {
        for (var e = [], s = arguments.length; s--; ) e[s] = arguments[s];
        a.off(t, r), r.f7proxy && delete r.f7proxy, i.apply(a, e);
      }
      return (r.f7proxy = i), a.on(t, r, s);
    }),
    (o.prototype.off = function e(t, i) {
      var s = this;
      return (
        s.eventsListeners &&
          t.split(" ").forEach(function (e) {
            void 0 === i
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].length &&
                s.eventsListeners[e].forEach(function (t, a) {
                  (t === i || (t.f7proxy && t.f7proxy === i)) &&
                    s.eventsListeners[e].splice(a, 1);
                });
          }),
        s
      );
    }),
    (o.prototype.emit = function e() {
      for (var t, i, s, a = [], r = arguments.length; r--; )
        a[r] = arguments[r];
      var n = this;
      return n.eventsListeners
        ? ("string" == typeof a[0] || Array.isArray(a[0])
            ? ((t = a[0]), (i = a.slice(1, a.length)), (s = n))
            : ((t = a[0].events), (i = a[0].data), (s = a[0].context || n)),
          (Array.isArray(t) ? t : t.split(" ")).forEach(function (e) {
            if (n.eventsListeners && n.eventsListeners[e]) {
              var t = [];
              n.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }),
                t.forEach(function (e) {
                  e.apply(s, i);
                });
            }
          }),
          n)
        : n;
    }),
    (o.prototype.useModulesParams = function e(t) {
      var i = this;
      i.modules &&
        Object.keys(i.modules).forEach(function (e) {
          var s = i.modules[e];
          s.params && n.extend(t, s.params);
        });
    }),
    (o.prototype.useModules = function e(t) {
      void 0 === t && (t = {});
      var i = this;
      i.modules &&
        Object.keys(i.modules).forEach(function (e) {
          var s = i.modules[e],
            a = t[e] || {};
          s.instance &&
            Object.keys(s.instance).forEach(function (e) {
              var t = s.instance[e];
              "function" == typeof t ? (i[e] = t.bind(i)) : (i[e] = t);
            }),
            s.on &&
              i.on &&
              Object.keys(s.on).forEach(function (e) {
                i.on(e, s.on[e]);
              }),
            s.create && s.create.bind(i)(a);
        });
    }),
    (d.components.set = function (e) {
      this.use && this.use(e);
    }),
    (o.installModule = function e(t) {
      for (var i = [], s = arguments.length - 1; s-- > 0; )
        i[s] = arguments[s + 1];
      var a = this;
      a.prototype.modules || (a.prototype.modules = {});
      var r = t.name || Object.keys(a.prototype.modules).length + "_" + n.now();
      return (
        (a.prototype.modules[r] = t),
        t.proto &&
          Object.keys(t.proto).forEach(function (e) {
            a.prototype[e] = t.proto[e];
          }),
        t.static &&
          Object.keys(t.static).forEach(function (e) {
            a[e] = t.static[e];
          }),
        t.install && t.install.apply(a, i),
        a
      );
    }),
    (o.use = function e(t) {
      for (var i = [], s = arguments.length - 1; s-- > 0; )
        i[s] = arguments[s + 1];
      var a = this;
      return Array.isArray(t)
        ? (t.forEach(function (e) {
            return a.installModule(e);
          }),
          a)
        : a.installModule.apply(a, [t].concat(i));
    }),
    Object.defineProperties(o, d);
  var p,
    h,
    c,
    u,
    v,
    f,
    m,
    g,
    $,
    b,
    w,
    y,
    _,
    x,
    E,
    T =
      ((p = t.navigator.platform),
      (h = t.navigator.userAgent),
      (c = {
        ios: !1,
        android: !1,
        androidChrome: !1,
        desktop: !1,
        iphone: !1,
        ipod: !1,
        ipad: !1,
        edge: !1,
        ie: !1,
        firefox: !1,
        macos: !1,
        windows: !1,
        cordova: !!(t.cordova || t.phonegap),
        phonegap: !!(t.cordova || t.phonegap),
        electron: !1
      }),
      (u = t.screen.width),
      (v = t.screen.height),
      (f = h.match(/(Android);?[\s\/]+([\d.]+)?/)),
      (m = h.match(/(iPad).*OS\s([\d_]+)/)),
      (g = h.match(/(iPod)(.*OS\s([\d_]+))?/)),
      ($ = !m && h.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
      (b = h.indexOf("MSIE ") >= 0 || h.indexOf("Trident/") >= 0),
      (w = h.indexOf("Edge/") >= 0),
      (y = h.indexOf("Gecko/") >= 0 && h.indexOf("Firefox/") >= 0),
      (_ = "Win32" === p),
      (x = h.toLowerCase().indexOf("electron") >= 0),
      (E = "MacIntel" === p),
      !m &&
        E &&
        l.touch &&
        ((1024 === u && 1366 === v) ||
          (834 === u && 1194 === v) ||
          (834 === u && 1112 === v) ||
          (768 === u && 1024 === v)) &&
        ((m = h.match(/(Version)\/([\d.]+)/)), (E = !1)),
      (c.ie = b),
      (c.edge = w),
      (c.firefox = y),
      f &&
        !_ &&
        ((c.os = "android"),
        (c.osVersion = f[2]),
        (c.android = !0),
        (c.androidChrome = h.toLowerCase().indexOf("chrome") >= 0)),
      (m || $ || g) && ((c.os = "ios"), (c.ios = !0)),
      $ && !g && ((c.osVersion = $[2].replace(/_/g, ".")), (c.iphone = !0)),
      m && ((c.osVersion = m[2].replace(/_/g, ".")), (c.ipad = !0)),
      g &&
        ((c.osVersion = g[3] ? g[3].replace(/_/g, ".") : null), (c.ipod = !0)),
      c.ios &&
        c.osVersion &&
        h.indexOf("Version/") >= 0 &&
        "10" === c.osVersion.split(".")[0] &&
        (c.osVersion = h.toLowerCase().split("version/")[1].split(" ")[0]),
      (c.webView =
        !!(
          ($ || m || g) &&
          (h.match(/.*AppleWebKit(?!.*Safari)/i) || t.navigator.standalone)
        ) ||
        (t.matchMedia && t.matchMedia("(display-mode: standalone)").matches)),
      (c.webview = c.webView),
      (c.standalone = c.webView),
      (c.desktop = !(c.ios || c.android) || x),
      c.desktop &&
        ((c.electron = x),
        (c.macos = E),
        (c.windows = _),
        c.macos && (c.os = "macos"),
        c.windows && (c.os = "windows")),
      (c.pixelRatio = t.devicePixelRatio || 1),
      c);
  function S(i) {
    var a = this,
      r = a.touchEventsData,
      l = a.params,
      o = a.touches;
    if (!a.animating || !l.preventInteractionOnTransition) {
      var d = i;
      d.originalEvent && (d = d.originalEvent);
      var p = s(d.target);
      if (
        ("wrapper" !== l.touchEventsTarget || p.closest(a.wrapperEl).length) &&
        ((r.isTouchEvent = "touchstart" === d.type),
        (r.isTouchEvent || !("which" in d) || 3 !== d.which) &&
          (r.isTouchEvent || !("button" in d) || !(d.button > 0)) &&
          (!r.isTouched || !r.isMoved))
      ) {
        if (
          l.noSwiping &&
          p.closest(
            l.noSwipingSelector ? l.noSwipingSelector : "." + l.noSwipingClass
          )[0]
        ) {
          a.allowClick = !0;
          return;
        }
        if (!l.swipeHandler || p.closest(l.swipeHandler)[0]) {
          (o.currentX =
            "touchstart" === d.type ? d.targetTouches[0].pageX : d.pageX),
            (o.currentY =
              "touchstart" === d.type ? d.targetTouches[0].pageY : d.pageY);
          var h = o.currentX,
            c = o.currentY,
            u = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
            v = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
          if (!u || (!(h <= v) && !(h >= t.screen.width - v))) {
            if (
              (n.extend(r, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0
              }),
              (o.startX = h),
              (o.startY = c),
              (r.touchStartTime = n.now()),
              (a.allowClick = !0),
              a.updateSize(),
              (a.swipeDirection = void 0),
              l.threshold > 0 && (r.allowThresholdMove = !1),
              "touchstart" !== d.type)
            ) {
              var f = !0;
              p.is(r.formElements) && (f = !1),
                e.activeElement &&
                  s(e.activeElement).is(r.formElements) &&
                  e.activeElement !== p[0] &&
                  e.activeElement.blur();
              var m = f && a.allowTouchMove && l.touchStartPreventDefault;
              (l.touchStartForcePreventDefault || m) && d.preventDefault();
            }
            a.emit("touchStart", d);
          }
        }
      }
    }
  }
  function C(t) {
    var i,
      a = this,
      r = a.touchEventsData,
      l = a.params,
      o = a.touches,
      d = a.rtlTranslate,
      p = t;
    if ((p.originalEvent && (p = p.originalEvent), !r.isTouched)) {
      r.startMoving && r.isScrolling && a.emit("touchMoveOpposite", p);
      return;
    }
    if (!r.isTouchEvent || "mousemove" !== p.type) {
      var h =
          "touchmove" === p.type &&
          p.targetTouches &&
          (p.targetTouches[0] || p.changedTouches[0]),
        c = "touchmove" === p.type ? h.pageX : p.pageX,
        u = "touchmove" === p.type ? h.pageY : p.pageY;
      if (p.preventedByNestedSwiper) {
        (o.startX = c), (o.startY = u);
        return;
      }
      if (!a.allowTouchMove) {
        (a.allowClick = !1),
          r.isTouched &&
            (n.extend(o, { startX: c, startY: u, currentX: c, currentY: u }),
            (r.touchStartTime = n.now()));
        return;
      }
      if (r.isTouchEvent && l.touchReleaseOnEdges && !l.loop) {
        if (a.isVertical()) {
          if (
            (u < o.startY && a.translate <= a.maxTranslate()) ||
            (u > o.startY && a.translate >= a.minTranslate())
          ) {
            (r.isTouched = !1), (r.isMoved = !1);
            return;
          }
        } else if (
          (c < o.startX && a.translate <= a.maxTranslate()) ||
          (c > o.startX && a.translate >= a.minTranslate())
        )
          return;
      }
      if (
        r.isTouchEvent &&
        e.activeElement &&
        p.target === e.activeElement &&
        s(p.target).is(r.formElements)
      ) {
        (r.isMoved = !0), (a.allowClick = !1);
        return;
      }
      if (
        (r.allowTouchCallbacks && a.emit("touchMove", p),
        !p.targetTouches || !(p.targetTouches.length > 1))
      ) {
        (o.currentX = c), (o.currentY = u);
        var v = o.currentX - o.startX,
          f = o.currentY - o.startY;
        if (
          !(
            a.params.threshold &&
            Math.sqrt(Math.pow(v, 2) + Math.pow(f, 2)) < a.params.threshold
          )
        ) {
          if (
            (void 0 === r.isScrolling &&
              ((a.isHorizontal() && o.currentY === o.startY) ||
              (a.isVertical() && o.currentX === o.startX)
                ? (r.isScrolling = !1)
                : v * v + f * f >= 25 &&
                  ((i = (180 * Math.atan2(Math.abs(f), Math.abs(v))) / Math.PI),
                  (r.isScrolling = a.isHorizontal()
                    ? i > l.touchAngle
                    : 90 - i > l.touchAngle))),
            r.isScrolling && a.emit("touchMoveOpposite", p),
            void 0 === r.startMoving &&
              (o.currentX !== o.startX || o.currentY !== o.startY) &&
              (r.startMoving = !0),
            r.isScrolling)
          ) {
            r.isTouched = !1;
            return;
          }
          if (r.startMoving) {
            (a.allowClick = !1),
              l.cssMode || p.preventDefault(),
              l.touchMoveStopPropagation && !l.nested && p.stopPropagation(),
              r.isMoved ||
                (l.loop && a.loopFix(),
                (r.startTranslate = a.getTranslate()),
                a.setTransition(0),
                a.animating &&
                  a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                (r.allowMomentumBounce = !1),
                l.grabCursor &&
                  (!0 === a.allowSlideNext || !0 === a.allowSlidePrev) &&
                  a.setGrabCursor(!0),
                a.emit("sliderFirstMove", p)),
              a.emit("sliderMove", p),
              (r.isMoved = !0);
            var m = a.isHorizontal() ? v : f;
            (o.diff = m),
              (m *= l.touchRatio),
              d && (m = -m),
              (a.swipeDirection = m > 0 ? "prev" : "next"),
              (r.currentTranslate = m + r.startTranslate);
            var g = !0,
              $ = l.resistanceRatio;
            if (
              (l.touchReleaseOnEdges && ($ = 0),
              m > 0 && r.currentTranslate > a.minTranslate()
                ? ((g = !1),
                  l.resistance &&
                    (r.currentTranslate =
                      a.minTranslate() -
                      1 +
                      Math.pow(-a.minTranslate() + r.startTranslate + m, $)))
                : m < 0 &&
                  r.currentTranslate < a.maxTranslate() &&
                  ((g = !1),
                  l.resistance &&
                    (r.currentTranslate =
                      a.maxTranslate() +
                      1 -
                      Math.pow(a.maxTranslate() - r.startTranslate - m, $))),
              g && (p.preventedByNestedSwiper = !0),
              !a.allowSlideNext &&
                "next" === a.swipeDirection &&
                r.currentTranslate < r.startTranslate &&
                (r.currentTranslate = r.startTranslate),
              !a.allowSlidePrev &&
                "prev" === a.swipeDirection &&
                r.currentTranslate > r.startTranslate &&
                (r.currentTranslate = r.startTranslate),
              l.threshold > 0)
            ) {
              if (Math.abs(m) > l.threshold || r.allowThresholdMove) {
                if (!r.allowThresholdMove) {
                  (r.allowThresholdMove = !0),
                    (o.startX = o.currentX),
                    (o.startY = o.currentY),
                    (r.currentTranslate = r.startTranslate),
                    (o.diff = a.isHorizontal()
                      ? o.currentX - o.startX
                      : o.currentY - o.startY);
                  return;
                }
              } else {
                r.currentTranslate = r.startTranslate;
                return;
              }
            }
            l.followFinger &&
              !l.cssMode &&
              ((l.freeMode ||
                l.watchSlidesProgress ||
                l.watchSlidesVisibility) &&
                (a.updateActiveIndex(), a.updateSlidesClasses()),
              l.freeMode &&
                (0 === r.velocities.length &&
                  r.velocities.push({
                    position: o[a.isHorizontal() ? "startX" : "startY"],
                    time: r.touchStartTime
                  }),
                r.velocities.push({
                  position: o[a.isHorizontal() ? "currentX" : "currentY"],
                  time: n.now()
                })),
              a.updateProgress(r.currentTranslate),
              a.setTranslate(r.currentTranslate));
          }
        }
      }
    }
  }
  function P(e) {
    var t = this,
      i = t.touchEventsData,
      s = t.params,
      a = t.touches,
      r = t.rtlTranslate,
      l = t.$wrapperEl,
      o = t.slidesGrid,
      d = t.snapGrid,
      p = e;
    if (
      (p.originalEvent && (p = p.originalEvent),
      i.allowTouchCallbacks && t.emit("touchEnd", p),
      (i.allowTouchCallbacks = !1),
      !i.isTouched)
    ) {
      i.isMoved && s.grabCursor && t.setGrabCursor(!1),
        (i.isMoved = !1),
        (i.startMoving = !1);
      return;
    }
    s.grabCursor &&
      i.isMoved &&
      i.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    var h = n.now(),
      c = h - i.touchStartTime;
    if (
      (t.allowClick &&
        (t.updateClickedSlide(p),
        t.emit("tap click", p),
        c < 300 &&
          h - i.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", p)),
      (i.lastClickTime = n.now()),
      n.nextTick(function () {
        t.destroyed || (t.allowClick = !0);
      }),
      !i.isTouched ||
        !i.isMoved ||
        !t.swipeDirection ||
        0 === a.diff ||
        i.currentTranslate === i.startTranslate)
    ) {
      (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
      return;
    }
    if (
      ((i.isTouched = !1),
      (i.isMoved = !1),
      (i.startMoving = !1),
      (u = s.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -i.currentTranslate),
      !s.cssMode)
    ) {
      if (s.freeMode) {
        if (u < -t.minTranslate()) {
          t.slideTo(t.activeIndex);
          return;
        }
        if (u > -t.maxTranslate()) {
          t.slides.length < d.length
            ? t.slideTo(d.length - 1)
            : t.slideTo(t.slides.length - 1);
          return;
        }
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var u,
              v,
              f,
              m,
              g = i.velocities.pop(),
              $ = i.velocities.pop(),
              b = g.position - $.position,
              w = g.time - $.time;
            (t.velocity = b / w),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity &&
                (t.velocity = 0),
              (w > 150 || n.now() - g.time > 300) && (t.velocity = 0);
          } else t.velocity = 0;
          (t.velocity *= s.freeModeMomentumVelocityRatio),
            (i.velocities.length = 0);
          var y = 1e3 * s.freeModeMomentumRatio,
            _ = t.velocity * y,
            x = t.translate + _;
          r && (x = -x);
          var E = !1,
            T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (x < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (x + t.maxTranslate() < -T && (x = t.maxTranslate() - T),
                (v = t.maxTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (x = t.maxTranslate()),
              s.loop && s.centeredSlides && (f = !0);
          else if (x > t.minTranslate())
            s.freeModeMomentumBounce
              ? (x - t.minTranslate() > T && (x = t.minTranslate() + T),
                (v = t.minTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (x = t.minTranslate()),
              s.loop && s.centeredSlides && (f = !0);
          else if (s.freeModeSticky) {
            for (var S = 0; S < d.length; S += 1)
              if (d[S] > -x) {
                m = S;
                break;
              }
            x = -(x =
              Math.abs(d[m] - x) < Math.abs(d[m - 1] - x) ||
              "next" === t.swipeDirection
                ? d[m]
                : d[m - 1]);
          }
          if (
            (f &&
              t.once("transitionEnd", function () {
                t.loopFix();
              }),
            0 !== t.velocity)
          ) {
            if (
              ((y = r
                ? Math.abs((-x - t.translate) / t.velocity)
                : Math.abs((x - t.translate) / t.velocity)),
              s.freeModeSticky)
            ) {
              var C = Math.abs((r ? -x : x) - t.translate),
                P = t.slidesSizesGrid[t.activeIndex];
              y = C < P ? s.speed : C < 2 * P ? 1.5 * s.speed : 2.5 * s.speed;
            }
          } else if (s.freeModeSticky) {
            t.slideToClosest();
            return;
          }
          s.freeModeMomentumBounce && E
            ? (t.updateProgress(v),
              t.setTransition(y),
              t.setTranslate(x),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              l.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(s.speed),
                  t.setTranslate(v),
                  l.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }));
              }))
            : t.velocity
            ? (t.updateProgress(x),
              t.setTransition(y),
              t.setTranslate(x),
              t.transitionStart(!0, t.swipeDirection),
              t.animating ||
                ((t.animating = !0),
                l.transitionEnd(function () {
                  t && !t.destroyed && t.transitionEnd();
                })))
            : t.updateProgress(x),
            t.updateActiveIndex(),
            t.updateSlidesClasses();
        } else if (s.freeModeSticky) {
          t.slideToClosest();
          return;
        }
        (!s.freeModeMomentum || c >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
        return;
      }
      for (
        var z = 0, k = t.slidesSizesGrid[0], M = 0;
        M < o.length;
        M += M < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup
      ) {
        var L = M < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        void 0 !== o[M + L]
          ? u >= o[M] && u < o[M + L] && ((z = M), (k = o[M + L] - o[M]))
          : u >= o[M] && ((z = M), (k = o[o.length - 1] - o[o.length - 2]));
      }
      var I = (u - o[z]) / k,
        D = z < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
      if (c > s.longSwipesMs) {
        if (!s.longSwipes) {
          t.slideTo(t.activeIndex);
          return;
        }
        "next" === t.swipeDirection &&
          (I >= s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z)),
          "prev" === t.swipeDirection &&
            (I > 1 - s.longSwipesRatio ? t.slideTo(z + D) : t.slideTo(z));
      } else {
        if (!s.shortSwipes) {
          t.slideTo(t.activeIndex);
          return;
        }
        t.navigation &&
        (p.target === t.navigation.nextEl || p.target === t.navigation.prevEl)
          ? p.target === t.navigation.nextEl
            ? t.slideTo(z + D)
            : t.slideTo(z)
          : ("next" === t.swipeDirection && t.slideTo(z + D),
            "prev" === t.swipeDirection && t.slideTo(z));
      }
    }
  }
  function z() {
    var e = this,
      t = e.params,
      i = e.el;
    if (!i || 0 !== i.offsetWidth) {
      t.breakpoints && e.setBreakpoint();
      var s = e.allowSlideNext,
        a = e.allowSlidePrev,
        r = e.snapGrid;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = a),
        (e.allowSlideNext = s),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
  }
  function k(e) {
    !this.allowClick &&
      (this.params.preventClicks && e.preventDefault(),
      this.params.preventClicksPropagation &&
        this.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation()));
  }
  function M() {
    var t = this,
      i = t.wrapperEl,
      s = t.rtlTranslate;
    (t.previousTranslate = t.translate),
      t.isHorizontal()
        ? s
          ? (t.translate = i.scrollWidth - i.offsetWidth - i.scrollLeft)
          : (t.translate = -i.scrollLeft)
        : (t.translate = -i.scrollTop),
      -0 === t.translate && (t.translate = 0),
      t.updateActiveIndex(),
      t.updateSlidesClasses();
    var a = t.maxTranslate() - t.minTranslate();
    (0 === a ? 0 : (t.translate - t.minTranslate()) / a) !== t.progress &&
      t.updateProgress(s ? -t.translate : t.translate),
      t.emit("setTranslate", t.translate, !1);
  }
  var L = !1;
  function I() {}
  var D,
    O = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      preventInteractionOnTransition: !1,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0
    },
    A = {
      update: {
        updateSize: function e() {
          var t,
            i,
            s = this.$el;
          (t =
            void 0 !== this.params.width
              ? this.params.width
              : s[0].clientWidth),
            (i =
              void 0 !== this.params.height
                ? this.params.height
                : s[0].clientHeight),
            !(
              (0 === t && this.isHorizontal()) ||
              (0 === i && this.isVertical())
            ) &&
              ((t =
                t -
                parseInt(s.css("padding-left"), 10) -
                parseInt(s.css("padding-right"), 10)),
              (i =
                i -
                parseInt(s.css("padding-top"), 10) -
                parseInt(s.css("padding-bottom"), 10)),
              n.extend(this, {
                width: t,
                height: i,
                size: this.isHorizontal() ? t : i
              }));
        },
        updateSlides: function e() {
          var i,
            s,
            a,
            r = this,
            l = r.params,
            o = r.$wrapperEl,
            d = r.size,
            p = r.rtlTranslate,
            h = r.wrongRTL,
            c = r.virtual && l.virtual.enabled,
            u = c ? r.virtual.slides.length : r.slides.length,
            v = o.children("." + r.params.slideClass),
            f = c ? r.virtual.slides.length : v.length,
            m = [],
            g = [],
            $ = [];
          function b(e) {
            return !l.cssMode || e !== v.length - 1;
          }
          var w = l.slidesOffsetBefore;
          "function" == typeof w && (w = l.slidesOffsetBefore.call(r));
          var y = l.slidesOffsetAfter;
          "function" == typeof y && (y = l.slidesOffsetAfter.call(r));
          var _ = r.snapGrid.length,
            x = r.snapGrid.length,
            E = l.spaceBetween,
            T = -w,
            S = 0,
            C = 0;
          if (void 0 !== d) {
            "string" == typeof E &&
              E.indexOf("%") >= 0 &&
              (E = (parseFloat(E.replace("%", "")) / 100) * d),
              (r.virtualSize = -E),
              p
                ? v.css({ marginLeft: "", marginTop: "" })
                : v.css({ marginRight: "", marginBottom: "" }),
              l.slidesPerColumn > 1 &&
                ((i =
                  Math.floor(f / l.slidesPerColumn) ===
                  f / r.params.slidesPerColumn
                    ? f
                    : Math.ceil(f / l.slidesPerColumn) * l.slidesPerColumn),
                "auto" !== l.slidesPerView &&
                  "row" === l.slidesPerColumnFill &&
                  (i = Math.max(i, l.slidesPerView * l.slidesPerColumn)));
            for (
              var P = l.slidesPerColumn,
                z = i / P,
                k = Math.floor(f / l.slidesPerColumn),
                M = 0;
              M < f;
              M += 1
            ) {
              s = 0;
              var L = v.eq(M);
              if (l.slidesPerColumn > 1) {
                var I = void 0,
                  D = void 0,
                  O = void 0;
                if ("row" === l.slidesPerColumnFill && l.slidesPerGroup > 1) {
                  var A = Math.floor(
                      M / (l.slidesPerGroup * l.slidesPerColumn)
                    ),
                    G = M - l.slidesPerColumn * l.slidesPerGroup * A,
                    H =
                      0 === A
                        ? l.slidesPerGroup
                        : Math.min(
                            Math.ceil((f - A * P * l.slidesPerGroup) / P),
                            l.slidesPerGroup
                          );
                  (O = Math.floor(G / H)),
                    (I = (D = G - O * H + A * l.slidesPerGroup) + (O * i) / P),
                    L.css({
                      "-webkit-box-ordinal-group": I,
                      "-moz-box-ordinal-group": I,
                      "-ms-flex-order": I,
                      "-webkit-order": I,
                      order: I
                    });
                } else
                  "column" === l.slidesPerColumnFill
                    ? ((D = Math.floor(M / P)),
                      (O = M - D * P),
                      (D > k || (D === k && O === P - 1)) &&
                        (O += 1) >= P &&
                        ((O = 0), (D += 1)))
                    : ((O = Math.floor(M / z)), (D = M - O * z));
                L.css(
                  "margin-" + (r.isHorizontal() ? "top" : "left"),
                  0 !== O && l.spaceBetween && l.spaceBetween + "px"
                );
              }
              if ("none" !== L.css("display")) {
                if ("auto" === l.slidesPerView) {
                  var B = t.getComputedStyle(L[0], null),
                    N = L[0].style.transform,
                    X = L[0].style.webkitTransform;
                  if (
                    (N && (L[0].style.transform = "none"),
                    X && (L[0].style.webkitTransform = "none"),
                    l.roundLengths)
                  )
                    s = r.isHorizontal() ? L.outerWidth(!0) : L.outerHeight(!0);
                  else if (r.isHorizontal()) {
                    var V = parseFloat(B.getPropertyValue("width")),
                      Y = parseFloat(B.getPropertyValue("padding-left")),
                      W = parseFloat(B.getPropertyValue("padding-right")),
                      R = parseFloat(B.getPropertyValue("margin-left")),
                      q = parseFloat(B.getPropertyValue("margin-right")),
                      F = B.getPropertyValue("box-sizing");
                    s = F && "border-box" === F ? V + R + q : V + Y + W + R + q;
                  } else {
                    var j = parseFloat(B.getPropertyValue("height")),
                      K = parseFloat(B.getPropertyValue("padding-top")),
                      U = parseFloat(B.getPropertyValue("padding-bottom")),
                      Z = parseFloat(B.getPropertyValue("margin-top")),
                      Q = parseFloat(B.getPropertyValue("margin-bottom")),
                      J = B.getPropertyValue("box-sizing");
                    s = J && "border-box" === J ? j + Z + Q : j + K + U + Z + Q;
                  }
                  N && (L[0].style.transform = N),
                    X && (L[0].style.webkitTransform = X),
                    l.roundLengths && (s = Math.floor(s));
                } else
                  (s = (d - (l.slidesPerView - 1) * E) / l.slidesPerView),
                    l.roundLengths && (s = Math.floor(s)),
                    v[M] &&
                      (r.isHorizontal()
                        ? (v[M].style.width = s + "px")
                        : (v[M].style.height = s + "px"));
                v[M] && (v[M].swiperSlideSize = s),
                  $.push(s),
                  l.centeredSlides
                    ? ((T = T + s / 2 + S / 2 + E),
                      0 === S && 0 !== M && (T = T - d / 2 - E),
                      0 === M && (T = T - d / 2 - E),
                      0.001 > Math.abs(T) && (T = 0),
                      l.roundLengths && (T = Math.floor(T)),
                      C % l.slidesPerGroup == 0 && m.push(T),
                      g.push(T))
                    : (l.roundLengths && (T = Math.floor(T)),
                      (C - Math.min(r.params.slidesPerGroupSkip, C)) %
                        r.params.slidesPerGroup ==
                        0 && m.push(T),
                      g.push(T),
                      (T = T + s + E)),
                  (r.virtualSize += s + E),
                  (S = s),
                  (C += 1);
              }
            }
            if (
              ((r.virtualSize = Math.max(r.virtualSize, d) + y),
              p &&
                h &&
                ("slide" === l.effect || "coverflow" === l.effect) &&
                o.css({ width: r.virtualSize + l.spaceBetween + "px" }),
              l.setWrapperSize &&
                (r.isHorizontal()
                  ? o.css({ width: r.virtualSize + l.spaceBetween + "px" })
                  : o.css({ height: r.virtualSize + l.spaceBetween + "px" })),
              l.slidesPerColumn > 1 &&
                ((r.virtualSize = (s + l.spaceBetween) * i),
                (r.virtualSize =
                  Math.ceil(r.virtualSize / l.slidesPerColumn) -
                  l.spaceBetween),
                r.isHorizontal()
                  ? o.css({ width: r.virtualSize + l.spaceBetween + "px" })
                  : o.css({ height: r.virtualSize + l.spaceBetween + "px" }),
                l.centeredSlides))
            ) {
              a = [];
              for (var ee = 0; ee < m.length; ee += 1) {
                var et = m[ee];
                l.roundLengths && (et = Math.floor(et)),
                  m[ee] < r.virtualSize + m[0] && a.push(et);
              }
              m = a;
            }
            if (!l.centeredSlides) {
              a = [];
              for (var ei = 0; ei < m.length; ei += 1) {
                var es = m[ei];
                l.roundLengths && (es = Math.floor(es)),
                  m[ei] <= r.virtualSize - d && a.push(es);
              }
              (m = a),
                Math.floor(r.virtualSize - d) - Math.floor(m[m.length - 1]) >
                  1 && m.push(r.virtualSize - d);
            }
            if (
              (0 === m.length && (m = [0]),
              0 !== l.spaceBetween &&
                (r.isHorizontal()
                  ? p
                    ? v.filter(b).css({ marginLeft: E + "px" })
                    : v.filter(b).css({ marginRight: E + "px" })
                  : v.filter(b).css({ marginBottom: E + "px" })),
              l.centeredSlides && l.centeredSlidesBounds)
            ) {
              var ea = 0;
              $.forEach(function (e) {
                ea += e + (l.spaceBetween ? l.spaceBetween : 0);
              });
              var er = (ea -= l.spaceBetween) - d;
              m = m.map(function (e) {
                return e < 0 ? -w : e > er ? er + y : e;
              });
            }
            if (l.centerInsufficientSlides) {
              var en = 0;
              if (
                ($.forEach(function (e) {
                  en += e + (l.spaceBetween ? l.spaceBetween : 0);
                }),
                (en -= l.spaceBetween) < d)
              ) {
                var el = (d - en) / 2;
                m.forEach(function (e, t) {
                  m[t] = e - el;
                }),
                  g.forEach(function (e, t) {
                    g[t] = e + el;
                  });
              }
            }
            n.extend(r, {
              slides: v,
              snapGrid: m,
              slidesGrid: g,
              slidesSizesGrid: $
            }),
              f !== u && r.emit("slidesLengthChange"),
              m.length !== _ &&
                (r.params.watchOverflow && r.checkOverflow(),
                r.emit("snapGridLengthChange")),
              g.length !== x && r.emit("slidesGridLengthChange"),
              (l.watchSlidesProgress || l.watchSlidesVisibility) &&
                r.updateSlidesOffset();
          }
        },
        updateAutoHeight: function e(t) {
          var i,
            s = [],
            a = 0;
          if (
            ("number" == typeof t
              ? this.setTransition(t)
              : !0 === t && this.setTransition(this.params.speed),
            "auto" !== this.params.slidesPerView &&
              this.params.slidesPerView > 1)
          ) {
            if (this.params.centeredSlides)
              this.visibleSlides.each(function (e, t) {
                s.push(t);
              });
            else
              for (i = 0; i < Math.ceil(this.params.slidesPerView); i += 1) {
                var r = this.activeIndex + i;
                if (r > this.slides.length) break;
                s.push(this.slides.eq(r)[0]);
              }
          } else s.push(this.slides.eq(this.activeIndex)[0]);
          for (i = 0; i < s.length; i += 1)
            if (void 0 !== s[i]) {
              var n = s[i].offsetHeight;
              a = n > a ? n : a;
            }
          a && this.$wrapperEl.css("height", a + "px");
        },
        updateSlidesOffset: function e() {
          for (var t = this.slides, i = 0; i < t.length; i += 1)
            t[i].swiperSlideOffset = this.isHorizontal()
              ? t[i].offsetLeft
              : t[i].offsetTop;
        },
        updateSlidesProgress: function e(t) {
          void 0 === t && (t = (this && this.translate) || 0);
          var i = this,
            a = i.params,
            r = i.slides,
            n = i.rtlTranslate;
          if (0 !== r.length) {
            void 0 === r[0].swiperSlideOffset && i.updateSlidesOffset();
            var l = -t;
            n && (l = t),
              r.removeClass(a.slideVisibleClass),
              (i.visibleSlidesIndexes = []),
              (i.visibleSlides = []);
            for (var o = 0; o < r.length; o += 1) {
              var d = r[o],
                p =
                  (l +
                    (a.centeredSlides ? i.minTranslate() : 0) -
                    d.swiperSlideOffset) /
                  (d.swiperSlideSize + a.spaceBetween);
              if (
                a.watchSlidesVisibility ||
                (a.centeredSlides && a.autoHeight)
              ) {
                var h = -(l - d.swiperSlideOffset),
                  c = h + i.slidesSizesGrid[o];
                ((h >= 0 && h < i.size - 1) ||
                  (c > 1 && c <= i.size) ||
                  (h <= 0 && c >= i.size)) &&
                  (i.visibleSlides.push(d),
                  i.visibleSlidesIndexes.push(o),
                  r.eq(o).addClass(a.slideVisibleClass));
              }
              d.progress = n ? -p : p;
            }
            i.visibleSlides = s(i.visibleSlides);
          }
        },
        updateProgress: function e(t) {
          if (void 0 === t) {
            var i = this.rtlTranslate ? -1 : 1;
            t = (this && this.translate && this.translate * i) || 0;
          }
          var s = this.params,
            a = this.maxTranslate() - this.minTranslate(),
            r = this.progress,
            l = this.isBeginning,
            o = this.isEnd,
            d = l,
            p = o;
          0 === a
            ? ((r = 0), (l = !0), (o = !0))
            : ((l = (r = (t - this.minTranslate()) / a) <= 0), (o = r >= 1)),
            n.extend(this, { progress: r, isBeginning: l, isEnd: o }),
            (s.watchSlidesProgress ||
              s.watchSlidesVisibility ||
              (s.centeredSlides && s.autoHeight)) &&
              this.updateSlidesProgress(t),
            l && !d && this.emit("reachBeginning toEdge"),
            o && !p && this.emit("reachEnd toEdge"),
            ((d && !l) || (p && !o)) && this.emit("fromEdge"),
            this.emit("progress", r);
        },
        updateSlidesClasses: function e() {
          var t,
            i = this.slides,
            s = this.params,
            a = this.$wrapperEl,
            r = this.activeIndex,
            n = this.realIndex,
            l = this.virtual && s.virtual.enabled;
          i.removeClass(
            s.slideActiveClass +
              " " +
              s.slideNextClass +
              " " +
              s.slidePrevClass +
              " " +
              s.slideDuplicateActiveClass +
              " " +
              s.slideDuplicateNextClass +
              " " +
              s.slideDuplicatePrevClass
          ),
            (t = l
              ? this.$wrapperEl.find(
                  "." + s.slideClass + '[data-swiper-slide-index="' + r + '"]'
                )
              : i.eq(r)).addClass(s.slideActiveClass),
            s.loop &&
              (t.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      "." +
                        s.slideClass +
                        ":not(." +
                        s.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : a
                    .children(
                      "." +
                        s.slideClass +
                        "." +
                        s.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        n +
                        '"]'
                    )
                    .addClass(s.slideDuplicateActiveClass));
          var o = t
            .nextAll("." + s.slideClass)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop && 0 === o.length && (o = i.eq(0)).addClass(s.slideNextClass);
          var d = t
            .prevAll("." + s.slideClass)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop && 0 === d.length && (d = i.eq(-1)).addClass(s.slidePrevClass),
            s.loop &&
              (o.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      "." +
                        s.slideClass +
                        ":not(." +
                        s.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(s.slideDuplicateNextClass)
                : a
                    .children(
                      "." +
                        s.slideClass +
                        "." +
                        s.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        o.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(s.slideDuplicateNextClass),
              d.hasClass(s.slideDuplicateClass)
                ? a
                    .children(
                      "." +
                        s.slideClass +
                        ":not(." +
                        s.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : a
                    .children(
                      "." +
                        s.slideClass +
                        "." +
                        s.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        d.attr("data-swiper-slide-index") +
                        '"]'
                    )
                    .addClass(s.slideDuplicatePrevClass));
        },
        updateActiveIndex: function e(t) {
          var i,
            s = this,
            a = s.rtlTranslate ? s.translate : -s.translate,
            r = s.slidesGrid,
            l = s.snapGrid,
            o = s.params,
            d = s.activeIndex,
            p = s.realIndex,
            h = s.snapIndex,
            c = t;
          if (void 0 === c) {
            for (var u = 0; u < r.length; u += 1)
              void 0 !== r[u + 1]
                ? a >= r[u] && a < r[u + 1] - (r[u + 1] - r[u]) / 2
                  ? (c = u)
                  : a >= r[u] && a < r[u + 1] && (c = u + 1)
                : a >= r[u] && (c = u);
            o.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
          }
          if (l.indexOf(a) >= 0) i = l.indexOf(a);
          else {
            var v = Math.min(o.slidesPerGroupSkip, c);
            i = v + Math.floor((c - v) / o.slidesPerGroup);
          }
          if ((i >= l.length && (i = l.length - 1), c === d)) {
            i !== h && ((s.snapIndex = i), s.emit("snapIndexChange"));
            return;
          }
          var f = parseInt(
            s.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          n.extend(s, {
            snapIndex: i,
            realIndex: f,
            previousIndex: d,
            activeIndex: c
          }),
            s.emit("activeIndexChange"),
            s.emit("snapIndexChange"),
            p !== f && s.emit("realIndexChange"),
            (s.initialized || s.params.runCallbacksOnInit) &&
              s.emit("slideChange");
        },
        updateClickedSlide: function e(t) {
          var i = this,
            a = i.params,
            r = s(t.target).closest("." + a.slideClass)[0],
            n = !1;
          if (r)
            for (var l = 0; l < i.slides.length; l += 1)
              i.slides[l] === r && (n = !0);
          if (r && n)
            (i.clickedSlide = r),
              i.virtual && i.params.virtual.enabled
                ? (i.clickedIndex = parseInt(
                    s(r).attr("data-swiper-slide-index"),
                    10
                  ))
                : (i.clickedIndex = s(r).index());
          else {
            (i.clickedSlide = void 0), (i.clickedIndex = void 0);
            return;
          }
          a.slideToClickedSlide &&
            void 0 !== i.clickedIndex &&
            i.clickedIndex !== i.activeIndex &&
            i.slideToClickedSlide();
        }
      },
      translate: {
        getTranslate: function e(t) {
          void 0 === t && (t = this.isHorizontal() ? "x" : "y");
          var i = this.params,
            s = this.rtlTranslate,
            a = this.translate,
            r = this.$wrapperEl;
          if (i.virtualTranslate) return s ? -a : a;
          if (i.cssMode) return a;
          var l = n.getTranslate(r[0], t);
          return s && (l = -l), l || 0;
        },
        setTranslate: function e(t, i) {
          var a = this,
            r = a.rtlTranslate,
            n = a.params,
            l = a.$wrapperEl,
            o = a.wrapperEl,
            d = a.progress,
            p = 0,
            h = 0;
          a.isHorizontal() ? (p = r ? -t : t) : (h = t),
            n.roundLengths && ((p = Math.floor(p)), (h = Math.floor(h))),
            n.cssMode
              ? (o[a.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  a.isHorizontal() ? -p : -h)
              : n.virtualTranslate ||
                l.transform("translate3d(" + p + "px, " + h + "px, 0px)"),
            (a.previousTranslate = a.translate),
            (a.translate = a.isHorizontal() ? p : h);
          var c = a.maxTranslate() - a.minTranslate();
          (0 === c ? 0 : (t - a.minTranslate()) / c) !== d &&
            a.updateProgress(t),
            a.emit("setTranslate", a.translate, i);
        },
        minTranslate: function e() {
          return -this.snapGrid[0];
        },
        maxTranslate: function e() {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function e(t, i, s, a, r) {
          void 0 === t && (t = 0),
            void 0 === i && (i = this.params.speed),
            void 0 === s && (s = !0),
            void 0 === a && (a = !0);
          var n,
            l,
            o = this,
            d = o.params,
            p = o.wrapperEl;
          if (o.animating && d.preventInteractionOnTransition) return !1;
          var h = o.minTranslate(),
            c = o.maxTranslate();
          if (
            ((l = a && t > h ? h : a && t < c ? c : t),
            o.updateProgress(l),
            d.cssMode)
          ) {
            var u = o.isHorizontal();
            return (
              0 === i
                ? (p[u ? "scrollLeft" : "scrollTop"] = -l)
                : p.scrollTo
                ? p.scrollTo(
                    (((n = {})[u ? "left" : "top"] = -l),
                    (n.behavior = "smooth"),
                    n)
                  )
                : (p[u ? "scrollLeft" : "scrollTop"] = -l),
              !0
            );
          }
          return (
            0 === i
              ? (o.setTransition(0),
                o.setTranslate(l),
                s &&
                  (o.emit("beforeTransitionStart", i, r),
                  o.emit("transitionEnd")))
              : (o.setTransition(i),
                o.setTranslate(l),
                s &&
                  (o.emit("beforeTransitionStart", i, r),
                  o.emit("transitionStart")),
                o.animating ||
                  ((o.animating = !0),
                  o.onTranslateToWrapperTransitionEnd ||
                    (o.onTranslateToWrapperTransitionEnd = function e(t) {
                      o &&
                        !o.destroyed &&
                        t.target === this &&
                        (o.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        o.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          o.onTranslateToWrapperTransitionEnd
                        ),
                        (o.onTranslateToWrapperTransitionEnd = null),
                        delete o.onTranslateToWrapperTransitionEnd,
                        s && o.emit("transitionEnd"));
                    }),
                  o.$wrapperEl[0].addEventListener(
                    "transitionend",
                    o.onTranslateToWrapperTransitionEnd
                  ),
                  o.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    o.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        }
      },
      transition: {
        setTransition: function e(t, i) {
          this.params.cssMode || this.$wrapperEl.transition(t),
            this.emit("setTransition", t, i);
        },
        transitionStart: function e(t, i) {
          void 0 === t && (t = !0);
          var s = this.activeIndex,
            a = this.params,
            r = this.previousIndex;
          if (!a.cssMode) {
            a.autoHeight && this.updateAutoHeight();
            var n = i;
            if (
              (n || (n = s > r ? "next" : s < r ? "prev" : "reset"),
              this.emit("transitionStart"),
              t && s !== r)
            ) {
              if ("reset" === n) {
                this.emit("slideResetTransitionStart");
                return;
              }
              this.emit("slideChangeTransitionStart"),
                "next" === n
                  ? this.emit("slideNextTransitionStart")
                  : this.emit("slidePrevTransitionStart");
            }
          }
        },
        transitionEnd: function e(t, i) {
          void 0 === t && (t = !0);
          var s = this,
            a = s.activeIndex,
            r = s.previousIndex,
            n = s.params;
          if (((s.animating = !1), !n.cssMode)) {
            s.setTransition(0);
            var l = i;
            if (
              (l || (l = a > r ? "next" : a < r ? "prev" : "reset"),
              s.emit("transitionEnd"),
              t && a !== r)
            ) {
              if ("reset" === l) {
                s.emit("slideResetTransitionEnd");
                return;
              }
              s.emit("slideChangeTransitionEnd"),
                "next" === l
                  ? s.emit("slideNextTransitionEnd")
                  : s.emit("slidePrevTransitionEnd");
            }
          }
        }
      },
      slide: {
        slideTo: function e(t, i, s, a) {
          void 0 === t && (t = 0),
            void 0 === i && (i = this.params.speed),
            void 0 === s && (s = !0);
          var r,
            n,
            l = this,
            o = t;
          o < 0 && (o = 0);
          var d = l.params,
            p = l.snapGrid,
            h = l.slidesGrid,
            c = l.previousIndex,
            u = l.activeIndex,
            v = l.rtlTranslate,
            f = l.wrapperEl;
          if (l.animating && d.preventInteractionOnTransition) return !1;
          var m = Math.min(l.params.slidesPerGroupSkip, o),
            g = m + Math.floor((o - m) / l.params.slidesPerGroup);
          g >= p.length && (g = p.length - 1),
            (u || d.initialSlide || 0) === (c || 0) &&
              s &&
              l.emit("beforeSlideChangeStart");
          var $ = -p[g];
          if ((l.updateProgress($), d.normalizeSlideIndex))
            for (var b = 0; b < h.length; b += 1)
              -Math.floor(100 * $) >= Math.floor(100 * h[b]) && (o = b);
          if (
            l.initialized &&
            o !== u &&
            ((!l.allowSlideNext && $ < l.translate && $ < l.minTranslate()) ||
              (!l.allowSlidePrev &&
                $ > l.translate &&
                $ > l.maxTranslate() &&
                (u || 0) !== o))
          )
            return !1;
          if (
            ((n = o > u ? "next" : o < u ? "prev" : "reset"),
            (v && -$ === l.translate) || (!v && $ === l.translate))
          )
            return (
              l.updateActiveIndex(o),
              d.autoHeight && l.updateAutoHeight(),
              l.updateSlidesClasses(),
              "slide" !== d.effect && l.setTranslate($),
              "reset" !== n && (l.transitionStart(s, n), l.transitionEnd(s, n)),
              !1
            );
          if (d.cssMode) {
            var w = l.isHorizontal(),
              y = -$;
            return (
              v && (y = f.scrollWidth - f.offsetWidth - y),
              0 === i
                ? (f[w ? "scrollLeft" : "scrollTop"] = y)
                : f.scrollTo
                ? f.scrollTo(
                    (((r = {})[w ? "left" : "top"] = y),
                    (r.behavior = "smooth"),
                    r)
                  )
                : (f[w ? "scrollLeft" : "scrollTop"] = y),
              !0
            );
          }
          return (
            0 === i
              ? (l.setTransition(0),
                l.setTranslate($),
                l.updateActiveIndex(o),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", i, a),
                l.transitionStart(s, n),
                l.transitionEnd(s, n))
              : (l.setTransition(i),
                l.setTranslate($),
                l.updateActiveIndex(o),
                l.updateSlidesClasses(),
                l.emit("beforeTransitionStart", i, a),
                l.transitionStart(s, n),
                l.animating ||
                  ((l.animating = !0),
                  l.onSlideToWrapperTransitionEnd ||
                    (l.onSlideToWrapperTransitionEnd = function e(t) {
                      l &&
                        !l.destroyed &&
                        t.target === this &&
                        (l.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          l.onSlideToWrapperTransitionEnd
                        ),
                        l.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          l.onSlideToWrapperTransitionEnd
                        ),
                        (l.onSlideToWrapperTransitionEnd = null),
                        delete l.onSlideToWrapperTransitionEnd,
                        l.transitionEnd(s, n));
                    }),
                  l.$wrapperEl[0].addEventListener(
                    "transitionend",
                    l.onSlideToWrapperTransitionEnd
                  ),
                  l.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    l.onSlideToWrapperTransitionEnd
                  ))),
            !0
          );
        },
        slideToLoop: function e(t, i, s, a) {
          void 0 === t && (t = 0),
            void 0 === i && (i = this.params.speed),
            void 0 === s && (s = !0);
          var r = t;
          return (
            this.params.loop && (r += this.loopedSlides),
            this.slideTo(r, i, s, a)
          );
        },
        slideNext: function e(t, i, s) {
          void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var a = this,
            r = a.params,
            n = a.animating,
            l = a.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
          if (r.loop) {
            if (n) return !1;
            a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
          }
          return a.slideTo(a.activeIndex + l, t, i, s);
        },
        slidePrev: function e(t, i, s) {
          void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
          var a,
            r = this,
            n = r.params,
            l = r.animating,
            o = r.snapGrid,
            d = r.slidesGrid,
            p = r.rtlTranslate;
          if (n.loop) {
            if (l) return !1;
            r.loopFix(), (r._clientLeft = r.$wrapperEl[0].clientLeft);
          }
          var h = p ? r.translate : -r.translate;
          function c(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          var u = c(h),
            v = o.map(function (e) {
              return c(e);
            });
          d.map(function (e) {
            return c(e);
          }),
            o[v.indexOf(u)];
          var f = o[v.indexOf(u) - 1];
          return (
            void 0 === f &&
              n.cssMode &&
              o.forEach(function (e) {
                !f && u >= e && (f = e);
              }),
            void 0 !== f && (a = d.indexOf(f)) < 0 && (a = r.activeIndex - 1),
            r.slideTo(a, t, i, s)
          );
        },
        slideReset: function e(t, i, s) {
          return (
            void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            this.slideTo(this.activeIndex, t, i, s)
          );
        },
        slideToClosest: function e(t, i, s, a) {
          void 0 === t && (t = this.params.speed),
            void 0 === i && (i = !0),
            void 0 === a && (a = 0.5);
          var r = this.activeIndex,
            n = Math.min(this.params.slidesPerGroupSkip, r),
            l = n + Math.floor((r - n) / this.params.slidesPerGroup),
            o = this.rtlTranslate ? this.translate : -this.translate;
          if (o >= this.snapGrid[l]) {
            var d = this.snapGrid[l];
            o - d > (this.snapGrid[l + 1] - d) * a &&
              (r += this.params.slidesPerGroup);
          } else {
            var p = this.snapGrid[l - 1];
            o - p <= (this.snapGrid[l] - p) * a &&
              (r -= this.params.slidesPerGroup);
          }
          return (
            (r = Math.min((r = Math.max(r, 0)), this.slidesGrid.length - 1)),
            this.slideTo(r, t, i, s)
          );
        },
        slideToClickedSlide: function e() {
          var t,
            i = this,
            a = i.params,
            r = i.$wrapperEl,
            l =
              "auto" === a.slidesPerView
                ? i.slidesPerViewDynamic()
                : a.slidesPerView,
            o = i.clickedIndex;
          if (a.loop) {
            if (i.animating) return;
            (t = parseInt(
              s(i.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              a.centeredSlides
                ? o < i.loopedSlides - l / 2 ||
                  o > i.slides.length - i.loopedSlides + l / 2
                  ? (i.loopFix(),
                    (o = r
                      .children(
                        "." +
                          a.slideClass +
                          '[data-swiper-slide-index="' +
                          t +
                          '"]:not(.' +
                          a.slideDuplicateClass +
                          ")"
                      )
                      .eq(0)
                      .index()),
                    n.nextTick(function () {
                      i.slideTo(o);
                    }))
                  : i.slideTo(o)
                : o > i.slides.length - l
                ? (i.loopFix(),
                  (o = r
                    .children(
                      "." +
                        a.slideClass +
                        '[data-swiper-slide-index="' +
                        t +
                        '"]:not(.' +
                        a.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  n.nextTick(function () {
                    i.slideTo(o);
                  }))
                : i.slideTo(o);
          } else i.slideTo(o);
        }
      },
      loop: {
        loopCreate: function t() {
          var i = this,
            a = i.params,
            r = i.$wrapperEl;
          r.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
          var n = r.children("." + a.slideClass);
          if (a.loopFillGroupWithBlank) {
            var l = a.slidesPerGroup - (n.length % a.slidesPerGroup);
            if (l !== a.slidesPerGroup) {
              for (var o = 0; o < l; o += 1) {
                var d = s(e.createElement("div")).addClass(
                  a.slideClass + " " + a.slideBlankClass
                );
                r.append(d);
              }
              n = r.children("." + a.slideClass);
            }
          }
          "auto" !== a.slidesPerView ||
            a.loopedSlides ||
            (a.loopedSlides = n.length),
            (i.loopedSlides = Math.ceil(
              parseFloat(a.loopedSlides || a.slidesPerView, 10)
            )),
            (i.loopedSlides += a.loopAdditionalSlides),
            i.loopedSlides > n.length && (i.loopedSlides = n.length);
          var p = [],
            h = [];
          n.each(function (e, t) {
            var a = s(t);
            e < i.loopedSlides && h.push(t),
              e < n.length && e >= n.length - i.loopedSlides && p.push(t),
              a.attr("data-swiper-slide-index", e);
          });
          for (var c = 0; c < h.length; c += 1)
            r.append(s(h[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
          for (var u = p.length - 1; u >= 0; u -= 1)
            r.prepend(s(p[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
        },
        loopFix: function e() {
          var t,
            i = this;
          i.emit("beforeLoopFix");
          var s = i.activeIndex,
            a = i.slides,
            r = i.loopedSlides,
            n = i.allowSlidePrev,
            l = i.allowSlideNext,
            o = i.snapGrid,
            d = i.rtlTranslate;
          (i.allowSlidePrev = !0), (i.allowSlideNext = !0);
          var p = -o[s] - i.getTranslate();
          s < r
            ? ((t = a.length - 3 * r + s),
              (t += r),
              i.slideTo(t, 0, !1, !0) &&
                0 !== p &&
                i.setTranslate((d ? -i.translate : i.translate) - p))
            : s >= a.length - r &&
              ((t = -a.length + s + r),
              (t += r),
              i.slideTo(t, 0, !1, !0) &&
                0 !== p &&
                i.setTranslate((d ? -i.translate : i.translate) - p)),
            (i.allowSlidePrev = n),
            (i.allowSlideNext = l),
            i.emit("loopFix");
        },
        loopDestroy: function e() {
          var t = this.$wrapperEl,
            i = this.params,
            s = this.slides;
          t
            .children(
              "." +
                i.slideClass +
                "." +
                i.slideDuplicateClass +
                ",." +
                i.slideClass +
                "." +
                i.slideBlankClass
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        }
      },
      grabCursor: {
        setGrabCursor: function e(t) {
          if (
            !l.touch &&
            this.params.simulateTouch &&
            (!this.params.watchOverflow || !this.isLocked) &&
            !this.params.cssMode
          ) {
            var i = this.el;
            (i.style.cursor = "move"),
              (i.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab"),
              (i.style.cursor = t ? "-moz-grabbin" : "-moz-grab"),
              (i.style.cursor = t ? "grabbing" : "grab");
          }
        },
        unsetGrabCursor: function e() {
          var t = this;
          !l.touch &&
            (!t.params.watchOverflow || !t.isLocked) &&
            !t.params.cssMode &&
            (t.el.style.cursor = "");
        }
      },
      manipulation: {
        appendSlide: function e(t) {
          var i = this.$wrapperEl,
            s = this.params;
          if (
            (s.loop && this.loopDestroy(),
            "object" == typeof t && "length" in t)
          )
            for (var a = 0; a < t.length; a += 1) t[a] && i.append(t[a]);
          else i.append(t);
          s.loop && this.loopCreate(),
            (s.observer && l.observer) || this.update();
        },
        prependSlide: function e(t) {
          var i = this.params,
            s = this.$wrapperEl,
            a = this.activeIndex;
          i.loop && this.loopDestroy();
          var r = a + 1;
          if ("object" == typeof t && "length" in t) {
            for (var n = 0; n < t.length; n += 1) t[n] && s.prepend(t[n]);
            r = a + t.length;
          } else s.prepend(t);
          i.loop && this.loopCreate(),
            (i.observer && l.observer) || this.update(),
            this.slideTo(r, 0, !1);
        },
        addSlide: function e(t, i) {
          var s = this,
            a = s.$wrapperEl,
            r = s.params,
            n = s.activeIndex;
          r.loop &&
            ((n -= s.loopedSlides),
            s.loopDestroy(),
            (s.slides = a.children("." + r.slideClass)));
          var o = s.slides.length;
          if (t <= 0) {
            s.prependSlide(i);
            return;
          }
          if (t >= o) {
            s.appendSlide(i);
            return;
          }
          for (var d = n > t ? n + 1 : n, p = [], h = o - 1; h >= t; h -= 1) {
            var c = s.slides.eq(h);
            c.remove(), p.unshift(c);
          }
          if ("object" == typeof i && "length" in i) {
            for (var u = 0; u < i.length; u += 1) i[u] && a.append(i[u]);
            d = n > t ? n + i.length : n;
          } else a.append(i);
          for (var v = 0; v < p.length; v += 1) a.append(p[v]);
          r.loop && s.loopCreate(),
            (r.observer && l.observer) || s.update(),
            r.loop ? s.slideTo(d + s.loopedSlides, 0, !1) : s.slideTo(d, 0, !1);
        },
        removeSlide: function e(t) {
          var i,
            s = this,
            a = s.params,
            r = s.$wrapperEl,
            n = s.activeIndex;
          a.loop &&
            ((n -= s.loopedSlides),
            s.loopDestroy(),
            (s.slides = r.children("." + a.slideClass)));
          var o = n;
          if ("object" == typeof t && "length" in t) {
            for (var d = 0; d < t.length; d += 1)
              (i = t[d]),
                s.slides[i] && s.slides.eq(i).remove(),
                i < o && (o -= 1);
            o = Math.max(o, 0);
          } else
            (i = t),
              s.slides[i] && s.slides.eq(i).remove(),
              i < o && (o -= 1),
              (o = Math.max(o, 0));
          a.loop && s.loopCreate(),
            (a.observer && l.observer) || s.update(),
            a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
        },
        removeAllSlides: function e() {
          for (var t = [], i = 0; i < this.slides.length; i += 1) t.push(i);
          this.removeSlide(t);
        }
      },
      events: {
        attachEvents: function t() {
          var i = this,
            s = i.params,
            a = i.touchEvents,
            r = i.el,
            n = i.wrapperEl;
          (i.onTouchStart = S.bind(i)),
            (i.onTouchMove = C.bind(i)),
            (i.onTouchEnd = P.bind(i)),
            s.cssMode && (i.onScroll = M.bind(i)),
            (i.onClick = k.bind(i));
          var o = !!s.nested;
          if (!l.touch && l.pointerEvents)
            r.addEventListener(a.start, i.onTouchStart, !1),
              e.addEventListener(a.move, i.onTouchMove, o),
              e.addEventListener(a.end, i.onTouchEnd, !1);
          else {
            if (l.touch) {
              var d = "touchstart" === a.start &&
                !!l.passiveListener &&
                !!s.passiveListeners && { passive: !0, capture: !1 };
              r.addEventListener(a.start, i.onTouchStart, d),
                r.addEventListener(
                  a.move,
                  i.onTouchMove,
                  l.passiveListener ? { passive: !1, capture: o } : o
                ),
                r.addEventListener(a.end, i.onTouchEnd, d),
                a.cancel && r.addEventListener(a.cancel, i.onTouchEnd, d),
                L || (e.addEventListener("touchstart", I), (L = !0));
            }
            ((s.simulateTouch && !T.ios && !T.android) ||
              (s.simulateTouch && !l.touch && T.ios)) &&
              (r.addEventListener("mousedown", i.onTouchStart, !1),
              e.addEventListener("mousemove", i.onTouchMove, o),
              e.addEventListener("mouseup", i.onTouchEnd, !1));
          }
          (s.preventClicks || s.preventClicksPropagation) &&
            r.addEventListener("click", i.onClick, !0),
            s.cssMode && n.addEventListener("scroll", i.onScroll),
            s.updateOnWindowResize
              ? i.on(
                  T.ios || T.android
                    ? "resize orientationchange observerUpdate"
                    : "resize observerUpdate",
                  z,
                  !0
                )
              : i.on("observerUpdate", z, !0);
        },
        detachEvents: function t() {
          var i = this.params,
            s = this.touchEvents,
            a = this.el,
            r = this.wrapperEl,
            n = !!i.nested;
          if (!l.touch && l.pointerEvents)
            a.removeEventListener(s.start, this.onTouchStart, !1),
              e.removeEventListener(s.move, this.onTouchMove, n),
              e.removeEventListener(s.end, this.onTouchEnd, !1);
          else {
            if (l.touch) {
              var o = "onTouchStart" === s.start &&
                !!l.passiveListener &&
                !!i.passiveListeners && { passive: !0, capture: !1 };
              a.removeEventListener(s.start, this.onTouchStart, o),
                a.removeEventListener(s.move, this.onTouchMove, n),
                a.removeEventListener(s.end, this.onTouchEnd, o),
                s.cancel && a.removeEventListener(s.cancel, this.onTouchEnd, o);
            }
            ((i.simulateTouch && !T.ios && !T.android) ||
              (i.simulateTouch && !l.touch && T.ios)) &&
              (a.removeEventListener("mousedown", this.onTouchStart, !1),
              e.removeEventListener("mousemove", this.onTouchMove, n),
              e.removeEventListener("mouseup", this.onTouchEnd, !1));
          }
          (i.preventClicks || i.preventClicksPropagation) &&
            a.removeEventListener("click", this.onClick, !0),
            i.cssMode && r.removeEventListener("scroll", this.onScroll),
            this.off(
              T.ios || T.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              z
            );
        }
      },
      breakpoints: {
        setBreakpoint: function e() {
          var t = this,
            i = t.activeIndex,
            s = t.initialized,
            a = t.loopedSlides;
          void 0 === a && (a = 0);
          var r = t.params,
            l = t.$el,
            o = r.breakpoints;
          if (o && (!o || 0 !== Object.keys(o).length)) {
            var d = t.getBreakpoint(o);
            if (d && t.currentBreakpoint !== d) {
              var p = d in o ? o[d] : void 0;
              p &&
                [
                  "slidesPerView",
                  "spaceBetween",
                  "slidesPerGroup",
                  "slidesPerGroupSkip",
                  "slidesPerColumn"
                ].forEach(function (e) {
                  var t = p[e];
                  void 0 !== t &&
                    ("slidesPerView" === e && ("AUTO" === t || "auto" === t)
                      ? (p[e] = "auto")
                      : "slidesPerView" === e
                      ? (p[e] = parseFloat(t))
                      : (p[e] = parseInt(t, 10)));
                });
              var h = p || t.originalParams,
                c = r.slidesPerColumn > 1,
                u = h.slidesPerColumn > 1;
              c && !u
                ? l.removeClass(
                    r.containerModifierClass +
                      "multirow " +
                      r.containerModifierClass +
                      "multirow-column"
                  )
                : !c &&
                  u &&
                  (l.addClass(r.containerModifierClass + "multirow"),
                  "column" === h.slidesPerColumnFill &&
                    l.addClass(r.containerModifierClass + "multirow-column"));
              var v = h.direction && h.direction !== r.direction,
                f = r.loop && (h.slidesPerView !== r.slidesPerView || v);
              v && s && t.changeDirection(),
                n.extend(t.params, h),
                n.extend(t, {
                  allowTouchMove: t.params.allowTouchMove,
                  allowSlideNext: t.params.allowSlideNext,
                  allowSlidePrev: t.params.allowSlidePrev
                }),
                (t.currentBreakpoint = d),
                f &&
                  s &&
                  (t.loopDestroy(),
                  t.loopCreate(),
                  t.updateSlides(),
                  t.slideTo(i - a + t.loopedSlides, 0, !1)),
                t.emit("breakpoint", h);
            }
          }
        },
        getBreakpoint: function e(i) {
          if (i) {
            var s = !1,
              a = Object.keys(i).map(function (e) {
                if ("string" == typeof e && 0 === e.indexOf("@")) {
                  var i = parseFloat(e.substr(1));
                  return { value: t.innerHeight * i, point: e };
                }
                return { value: e, point: e };
              });
            a.sort(function (e, t) {
              return parseInt(e.value, 10) - parseInt(t.value, 10);
            });
            for (var r = 0; r < a.length; r += 1) {
              var n = a[r],
                l = n.point;
              n.value <= t.innerWidth && (s = l);
            }
            return s || "max";
          }
        }
      },
      checkOverflow: {
        checkOverflow: function e() {
          var t = this,
            i = t.params,
            s = t.isLocked,
            a =
              t.slides.length > 0 &&
              i.slidesOffsetBefore +
                i.spaceBetween * (t.slides.length - 1) +
                t.slides[0].offsetWidth * t.slides.length;
          i.slidesOffsetBefore && i.slidesOffsetAfter && a
            ? (t.isLocked = a <= t.size)
            : (t.isLocked = 1 === t.snapGrid.length),
            (t.allowSlideNext = !t.isLocked),
            (t.allowSlidePrev = !t.isLocked),
            s !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"),
            s && s !== t.isLocked && ((t.isEnd = !1), t.navigation.update());
        }
      },
      classes: {
        addClasses: function e() {
          var t = this.classNames,
            i = this.params,
            s = this.rtl,
            a = this.$el,
            r = [];
          r.push("initialized"),
            r.push(i.direction),
            i.freeMode && r.push("free-mode"),
            i.autoHeight && r.push("autoheight"),
            s && r.push("rtl"),
            i.slidesPerColumn > 1 &&
              (r.push("multirow"),
              "column" === i.slidesPerColumnFill && r.push("multirow-column")),
            T.android && r.push("android"),
            T.ios && r.push("ios"),
            i.cssMode && r.push("css-mode"),
            r.forEach(function (e) {
              t.push(i.containerModifierClass + e);
            }),
            a.addClass(t.join(" "));
        },
        removeClasses: function e() {
          var t = this.$el,
            i = this.classNames;
          t.removeClass(i.join(" "));
        }
      },
      images: {
        loadImage: function e(i, s, a, r, n, l) {
          var o;
          function d() {
            l && l();
          }
          i.complete && n
            ? d()
            : s
            ? (((o = new t.Image()).onload = d),
              (o.onerror = d),
              r && (o.sizes = r),
              a && (o.srcset = a),
              s && (o.src = s))
            : d();
        },
        preloadImages: function e() {
          var t = this;
          function i() {
            null != t &&
              t &&
              !t.destroyed &&
              (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1),
              t.imagesLoaded === t.imagesToLoad.length &&
                (t.params.updateOnImagesReady && t.update(),
                t.emit("imagesReady")));
          }
          t.imagesToLoad = t.$el.find("img");
          for (var s = 0; s < t.imagesToLoad.length; s += 1) {
            var a = t.imagesToLoad[s];
            t.loadImage(
              a,
              a.currentSrc || a.getAttribute("src"),
              a.srcset || a.getAttribute("srcset"),
              a.sizes || a.getAttribute("sizes"),
              !0,
              i
            );
          }
        }
      }
    },
    G = {},
    H = (function (e) {
      function t() {
        for (var i, a, r, o, d, p, h = [], c = arguments.length; c--; )
          h[c] = arguments[c];
        1 === h.length && h[0].constructor && h[0].constructor === Object
          ? (d = h[0])
          : ((o = (r = h)[0]), (d = r[1])),
          d || (d = {}),
          (d = n.extend({}, d)),
          o && !d.el && (d.el = o),
          e.call(this, d),
          Object.keys(A).forEach(function (e) {
            Object.keys(A[e]).forEach(function (i) {
              t.prototype[i] || (t.prototype[i] = A[e][i]);
            });
          });
        var u = this;
        void 0 === u.modules && (u.modules = {}),
          Object.keys(u.modules).forEach(function (e) {
            var t = u.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if (
                "object" != typeof s ||
                null === s ||
                !(i in d && "enabled" in s)
              )
                return;
              !0 === d[i] && (d[i] = { enabled: !0 }),
                "object" != typeof d[i] ||
                  "enabled" in d[i] ||
                  (d[i].enabled = !0),
                d[i] || (d[i] = { enabled: !1 });
            }
          });
        var v = n.extend({}, O);
        u.useModulesParams(v),
          (u.params = n.extend({}, v, G, d)),
          (u.originalParams = n.extend({}, u.params)),
          (u.passedParams = n.extend({}, d)),
          (u.$ = s);
        var f = s(u.params.el);
        if ((o = f[0])) {
          if (f.length > 1) {
            var m = [];
            return (
              f.each(function (e, i) {
                var s = n.extend({}, d, { el: i });
                m.push(new t(s));
              }),
              m
            );
          }
          return (
            (o.swiper = u),
            f.data("swiper", u),
            o && o.shadowRoot && o.shadowRoot.querySelector
              ? ((p = s(
                  o.shadowRoot.querySelector("." + u.params.wrapperClass)
                )).children = function (e) {
                  return f.children(e);
                })
              : (p = f.children("." + u.params.wrapperClass)),
            n.extend(u, {
              $el: f,
              el: o,
              $wrapperEl: p,
              wrapperEl: p[0],
              classNames: [],
              slides: s(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function e() {
                return "horizontal" === u.params.direction;
              },
              isVertical: function e() {
                return "vertical" === u.params.direction;
              },
              rtl:
                "rtl" === o.dir.toLowerCase() || "rtl" === f.css("direction"),
              rtlTranslate:
                "horizontal" === u.params.direction &&
                ("rtl" === o.dir.toLowerCase() || "rtl" === f.css("direction")),
              wrongRTL: "-webkit-box" === p.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: u.params.allowSlideNext,
              allowSlidePrev: u.params.allowSlidePrev,
              touchEvents:
                ((i = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                (a = ["mousedown", "mousemove", "mouseup"]),
                l.pointerEvents &&
                  (a = ["pointerdown", "pointermove", "pointerup"]),
                (u.touchEventsTouch = {
                  start: i[0],
                  move: i[1],
                  end: i[2],
                  cancel: i[3]
                }),
                (u.touchEventsDesktop = { start: a[0], move: a[1], end: a[2] }),
                l.touch || !u.params.simulateTouch
                  ? u.touchEventsTouch
                  : u.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements:
                  "input, select, option, textarea, button, video, label",
                lastClickTime: n.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: u.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
            }),
            u.useModules(),
            u.params.init && u.init(),
            u
          );
        }
      }
      e && (t.__proto__ = e),
        (t.prototype = Object.create(e && e.prototype)),
        (t.prototype.constructor = t);
      var i = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 }
      };
      return (
        (t.prototype.slidesPerViewDynamic = function e() {
          var t = this.params,
            i = this.slides,
            s = this.slidesGrid,
            a = this.size,
            r = this.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var l, o = i[r].swiperSlideSize, d = r + 1;
              d < i.length;
              d += 1
            )
              i[d] &&
                !l &&
                ((o += i[d].swiperSlideSize), (n += 1), o > a && (l = !0));
            for (var p = r - 1; p >= 0; p -= 1)
              i[p] &&
                !l &&
                ((o += i[p].swiperSlideSize), (n += 1), o > a && (l = !0));
          } else
            for (var h = r + 1; h < i.length; h += 1)
              s[h] - s[r] < a && (n += 1);
          return n;
        }),
        (t.prototype.update = function e() {
          var i = this;
          if (i && !i.destroyed) {
            var s = i.snapGrid,
              a = i.params;
            a.breakpoints && i.setBreakpoint(),
              i.updateSize(),
              i.updateSlides(),
              i.updateProgress(),
              i.updateSlidesClasses(),
              i.params.freeMode
                ? (r(), i.params.autoHeight && i.updateAutoHeight())
                : (("auto" === i.params.slidesPerView ||
                      i.params.slidesPerView > 1) &&
                    i.isEnd &&
                    !i.params.centeredSlides
                      ? i.slideTo(i.slides.length - 1, 0, !1, !0)
                      : i.slideTo(i.activeIndex, 0, !1, !0)) || r(),
              a.watchOverflow && s !== i.snapGrid && i.checkOverflow(),
              i.emit("update");
          }
          function r() {
            var e = Math.min(
              Math.max(
                i.rtlTranslate ? -1 * i.translate : i.translate,
                i.maxTranslate()
              ),
              i.minTranslate()
            );
            i.setTranslate(e), i.updateActiveIndex(), i.updateSlidesClasses();
          }
        }),
        (t.prototype.changeDirection = function e(t, i) {
          void 0 === i && (i = !0);
          var s = this,
            a = s.params.direction;
          return (
            t || (t = "horizontal" === a ? "vertical" : "horizontal"),
            t === a ||
              ("horizontal" !== t && "vertical" !== t) ||
              (s.$el
                .removeClass("" + s.params.containerModifierClass + a)
                .addClass("" + s.params.containerModifierClass + t),
              (s.params.direction = t),
              s.slides.each(function (e, i) {
                "vertical" === t ? (i.style.width = "") : (i.style.height = "");
              }),
              s.emit("changeDirection"),
              i && s.update()),
            s
          );
        }),
        (t.prototype.init = function e() {
          var t = this;
          !t.initialized &&
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"));
        }),
        (t.prototype.destroy = function e(t, i) {
          void 0 === t && (t = !0), void 0 === i && (i = !0);
          var s = this,
            a = s.params,
            r = s.$el,
            l = s.$wrapperEl,
            o = s.slides;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              a.loop && s.loopDestroy(),
              i &&
                (s.removeClasses(),
                r.removeAttr("style"),
                l.removeAttr("style"),
                o &&
                  o.length &&
                  o
                    .removeClass(
                      [
                        a.slideVisibleClass,
                        a.slideActiveClass,
                        a.slideNextClass,
                        a.slidePrevClass
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach(function (e) {
                s.off(e);
              }),
              !1 !== t &&
                ((s.$el[0].swiper = null),
                s.$el.data("swiper", null),
                n.deleteProps(s)),
              (s.destroyed = !0)),
            null
          );
        }),
        (t.extendDefaults = function e(t) {
          n.extend(G, t);
        }),
        (i.extendedDefaults.get = function () {
          return G;
        }),
        (i.defaults.get = function () {
          return O;
        }),
        (i.Class.get = function () {
          return e;
        }),
        (i.$.get = function () {
          return s;
        }),
        Object.defineProperties(t, i),
        t
      );
    })(o),
    B = {
      isEdge: !!t.navigator.userAgent.match(/Edge/g),
      isSafari:
        (D = t.navigator.userAgent.toLowerCase()).indexOf("safari") >= 0 &&
        0 > D.indexOf("chrome") &&
        0 > D.indexOf("android"),
      isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
        t.navigator.userAgent
      )
    },
    N = {
      func: t.MutationObserver || t.WebkitMutationObserver,
      attach: function e(i, s) {
        void 0 === s && (s = {});
        var a = this,
          r = new N.func(function (e) {
            if (1 === e.length) {
              a.emit("observerUpdate", e[0]);
              return;
            }
            var i = function t() {
              a.emit("observerUpdate", e[0]);
            };
            t.requestAnimationFrame
              ? t.requestAnimationFrame(i)
              : t.setTimeout(i, 0);
          });
        r.observe(i, {
          attributes: void 0 === s.attributes || s.attributes,
          childList: void 0 === s.childList || s.childList,
          characterData: void 0 === s.characterData || s.characterData
        }),
          a.observer.observers.push(r);
      },
      init: function e() {
        if (l.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var t = this.$el.parents(), i = 0; i < t.length; i += 1)
              this.observer.attach(t[i]);
          this.observer.attach(this.$el[0], {
            childList: this.params.observeSlideChildren
          }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function e() {
        var t = this;
        t.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (t.observer.observers = []);
      }
    },
    X = {
      update: function e(t) {
        var i,
          s,
          a,
          r = this,
          l = r.params,
          o = l.slidesPerView,
          d = l.slidesPerGroup,
          p = l.centeredSlides,
          h = r.params.virtual,
          c = h.addSlidesBefore,
          u = h.addSlidesAfter,
          v = r.virtual,
          f = v.from,
          m = v.to,
          g = v.slides,
          $ = v.slidesGrid,
          b = v.renderSlide,
          w = v.offset;
        r.updateActiveIndex();
        var y = r.activeIndex || 0;
        (i = r.rtlTranslate ? "right" : r.isHorizontal() ? "left" : "top"),
          p
            ? ((s = Math.floor(o / 2) + d + c), (a = Math.floor(o / 2) + d + u))
            : ((s = o + (d - 1) + c), (a = d + u));
        var _ = Math.max((y || 0) - a, 0),
          x = Math.min((y || 0) + s, g.length - 1),
          E = (r.slidesGrid[_] || 0) - (r.slidesGrid[0] || 0);
        function T() {
          r.updateSlides(),
            r.updateProgress(),
            r.updateSlidesClasses(),
            r.lazy && r.params.lazy.enabled && r.lazy.load();
        }
        if (
          (n.extend(r.virtual, {
            from: _,
            to: x,
            offset: E,
            slidesGrid: r.slidesGrid
          }),
          f === _ && m === x && !t)
        ) {
          r.slidesGrid !== $ && E !== w && r.slides.css(i, E + "px"),
            r.updateProgress();
          return;
        }
        if (r.params.virtual.renderExternal) {
          r.params.virtual.renderExternal.call(r, {
            offset: E,
            from: _,
            to: x,
            slides: (function e() {
              for (var t = [], i = _; i <= x; i += 1) t.push(g[i]);
              return t;
            })()
          }),
            T();
          return;
        }
        var S = [],
          C = [];
        if (t) r.$wrapperEl.find("." + r.params.slideClass).remove();
        else
          for (var P = f; P <= m; P += 1)
            (P < _ || P > x) &&
              r.$wrapperEl
                .find(
                  "." +
                    r.params.slideClass +
                    '[data-swiper-slide-index="' +
                    P +
                    '"]'
                )
                .remove();
        for (var z = 0; z < g.length; z += 1)
          z >= _ &&
            z <= x &&
            (void 0 === m || t
              ? C.push(z)
              : (z > m && C.push(z), z < f && S.push(z)));
        C.forEach(function (e) {
          r.$wrapperEl.append(b(g[e], e));
        }),
          S.sort(function (e, t) {
            return t - e;
          }).forEach(function (e) {
            r.$wrapperEl.prepend(b(g[e], e));
          }),
          r.$wrapperEl.children(".swiper-slide").css(i, E + "px"),
          T();
      },
      renderSlide: function e(t, i) {
        var a = this,
          r = a.params.virtual;
        if (r.cache && a.virtual.cache[i]) return a.virtual.cache[i];
        var n = r.renderSlide
          ? s(r.renderSlide.call(a, t, i))
          : s(
              '<div class="' +
                a.params.slideClass +
                '" data-swiper-slide-index="' +
                i +
                '">' +
                t +
                "</div>"
            );
        return (
          n.attr("data-swiper-slide-index") ||
            n.attr("data-swiper-slide-index", i),
          r.cache && (a.virtual.cache[i] = n),
          n
        );
      },
      appendSlide: function e(t) {
        if ("object" == typeof t && "length" in t)
          for (var i = 0; i < t.length; i += 1)
            t[i] && this.virtual.slides.push(t[i]);
        else this.virtual.slides.push(t);
        this.virtual.update(!0);
      },
      prependSlide: function e(t) {
        var i = this,
          s = i.activeIndex,
          a = s + 1,
          r = 1;
        if (Array.isArray(t)) {
          for (var n = 0; n < t.length; n += 1)
            t[n] && i.virtual.slides.unshift(t[n]);
          (a = s + t.length), (r = t.length);
        } else i.virtual.slides.unshift(t);
        if (i.params.virtual.cache) {
          var l = i.virtual.cache,
            o = {};
          Object.keys(l).forEach(function (e) {
            var t = l[e],
              i = t.attr("data-swiper-slide-index");
            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1),
              (o[parseInt(e, 10) + r] = t);
          }),
            (i.virtual.cache = o);
        }
        i.virtual.update(!0), i.slideTo(a, 0);
      },
      removeSlide: function e(t) {
        if (null != t) {
          var i = this.activeIndex;
          if (Array.isArray(t))
            for (var s = t.length - 1; s >= 0; s -= 1)
              this.virtual.slides.splice(t[s], 1),
                this.params.virtual.cache && delete this.virtual.cache[t[s]],
                t[s] < i && (i -= 1),
                (i = Math.max(i, 0));
          else
            this.virtual.slides.splice(t, 1),
              this.params.virtual.cache && delete this.virtual.cache[t],
              t < i && (i -= 1),
              (i = Math.max(i, 0));
          this.virtual.update(!0), this.slideTo(i, 0);
        }
      },
      removeAllSlides: function e() {
        var t = this;
        (t.virtual.slides = []),
          t.params.virtual.cache && (t.virtual.cache = {}),
          t.virtual.update(!0),
          t.slideTo(0, 0);
      }
    },
    V = {
      handle: function i(s) {
        var a = this.rtlTranslate,
          r = s;
        r.originalEvent && (r = r.originalEvent);
        var n = r.keyCode || r.charCode;
        if (
          (!this.allowSlideNext &&
            ((this.isHorizontal() && 39 === n) ||
              (this.isVertical() && 40 === n) ||
              34 === n)) ||
          (!this.allowSlidePrev &&
            ((this.isHorizontal() && 37 === n) ||
              (this.isVertical() && 38 === n) ||
              33 === n))
        )
          return !1;
        if (
          !r.shiftKey &&
          !r.altKey &&
          !r.ctrlKey &&
          !r.metaKey &&
          (!e.activeElement ||
            !e.activeElement.nodeName ||
            ("input" !== e.activeElement.nodeName.toLowerCase() &&
              "textarea" !== e.activeElement.nodeName.toLowerCase()))
        ) {
          if (
            this.params.keyboard.onlyInViewport &&
            (33 === n ||
              34 === n ||
              37 === n ||
              39 === n ||
              38 === n ||
              40 === n)
          ) {
            var l = !1;
            if (
              this.$el.parents("." + this.params.slideClass).length > 0 &&
              0 === this.$el.parents("." + this.params.slideActiveClass).length
            )
              return;
            var o = t.innerWidth,
              d = t.innerHeight,
              p = this.$el.offset();
            a && (p.left -= this.$el[0].scrollLeft);
            for (
              var h = [
                  [p.left, p.top],
                  [p.left + this.width, p.top],
                  [p.left, p.top + this.height],
                  [p.left + this.width, p.top + this.height]
                ],
                c = 0;
              c < h.length;
              c += 1
            ) {
              var u = h[c];
              u[0] >= 0 && u[0] <= o && u[1] >= 0 && u[1] <= d && (l = !0);
            }
            if (!l) return;
          }
          this.isHorizontal()
            ? ((33 === n || 34 === n || 37 === n || 39 === n) &&
                (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)),
              (((34 === n || 39 === n) && !a) ||
                ((33 === n || 37 === n) && a)) &&
                this.slideNext(),
              (((33 === n || 37 === n) && !a) ||
                ((34 === n || 39 === n) && a)) &&
                this.slidePrev())
            : ((33 === n || 34 === n || 38 === n || 40 === n) &&
                (r.preventDefault ? r.preventDefault() : (r.returnValue = !1)),
              (34 === n || 40 === n) && this.slideNext(),
              (33 === n || 38 === n) && this.slidePrev()),
            this.emit("keyPress", n);
        }
      },
      enable: function t() {
        var i = this;
        !i.keyboard.enabled &&
          (s(e).on("keydown", i.keyboard.handle), (i.keyboard.enabled = !0));
      },
      disable: function t() {
        var i = this;
        i.keyboard.enabled &&
          (s(e).off("keydown", i.keyboard.handle), (i.keyboard.enabled = !1));
      }
    },
    Y = {
      lastScrollTime: n.now(),
      lastEventBeforeSnap: void 0,
      recentWheelEvents: [],
      event: function i() {
        return t.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : !(function t() {
              var i = "onwheel",
                s = i in e;
              if (!s) {
                var a = e.createElement("div");
                a.setAttribute(i, "return;"), (s = "function" == typeof a[i]);
              }
              return (
                !s &&
                  e.implementation &&
                  e.implementation.hasFeature &&
                  !0 !== e.implementation.hasFeature("", "") &&
                  (s = e.implementation.hasFeature("Events.wheel", "3.0")),
                s
              );
            })()
          ? "mousewheel"
          : "wheel";
      },
      normalize: function e(t) {
        var i = 0,
          s = 0,
          a = 0,
          r = 0;
        return (
          "detail" in t && (s = t.detail),
          "wheelDelta" in t && (s = -t.wheelDelta / 120),
          "wheelDeltaY" in t && (s = -t.wheelDeltaY / 120),
          "wheelDeltaX" in t && (i = -t.wheelDeltaX / 120),
          "axis" in t && t.axis === t.HORIZONTAL_AXIS && ((i = s), (s = 0)),
          (a = 10 * i),
          (r = 10 * s),
          "deltaY" in t && (r = t.deltaY),
          "deltaX" in t && (a = t.deltaX),
          t.shiftKey && !a && ((a = r), (r = 0)),
          (a || r) &&
            t.deltaMode &&
            (1 === t.deltaMode
              ? ((a *= 40), (r *= 40))
              : ((a *= 800), (r *= 800))),
          a && !i && (i = a < 1 ? -1 : 1),
          r && !s && (s = r < 1 ? -1 : 1),
          { spinX: i, spinY: s, pixelX: a, pixelY: r }
        );
      },
      handleMouseEnter: function e() {
        var t = this;
        t.mouseEntered = !0;
      },
      handleMouseLeave: function e() {
        var t = this;
        t.mouseEntered = !1;
      },
      handle: function e(t) {
        var i = t,
          a = this,
          r = a.params.mousewheel;
        a.params.cssMode && i.preventDefault();
        var l = a.$el;
        if (
          ("container" !== a.params.mousewheel.eventsTarged &&
            (l = s(a.params.mousewheel.eventsTarged)),
          !a.mouseEntered && !l[0].contains(i.target) && !r.releaseOnEdges)
        )
          return !0;
        i.originalEvent && (i = i.originalEvent);
        var o = 0,
          d = a.rtlTranslate ? -1 : 1,
          p = Y.normalize(i);
        if (r.forceToAxis) {
          if (a.isHorizontal()) {
            if (!(Math.abs(p.pixelX) > Math.abs(p.pixelY))) return !0;
            o = p.pixelX * d;
          } else {
            if (!(Math.abs(p.pixelY) > Math.abs(p.pixelX))) return !0;
            o = p.pixelY;
          }
        } else
          o =
            Math.abs(p.pixelX) > Math.abs(p.pixelY) ? -p.pixelX * d : -p.pixelY;
        if (0 === o) return !0;
        if ((r.invert && (o = -o), a.params.freeMode)) {
          var h = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o)
            },
            c = a.mousewheel.lastEventBeforeSnap,
            u =
              c &&
              h.time < c.time + 500 &&
              h.delta <= c.delta &&
              h.direction === c.direction;
          if (!u) {
            (a.mousewheel.lastEventBeforeSnap = void 0),
              a.params.loop && a.loopFix();
            var v = a.getTranslate() + o * r.sensitivity,
              f = a.isBeginning,
              m = a.isEnd;
            if (
              (v >= a.minTranslate() && (v = a.minTranslate()),
              v <= a.maxTranslate() && (v = a.maxTranslate()),
              a.setTransition(0),
              a.setTranslate(v),
              a.updateProgress(),
              a.updateActiveIndex(),
              a.updateSlidesClasses(),
              ((!f && a.isBeginning) || (!m && a.isEnd)) &&
                a.updateSlidesClasses(),
              a.params.freeModeSticky)
            ) {
              clearTimeout(a.mousewheel.timeout),
                (a.mousewheel.timeout = void 0);
              var g = a.mousewheel.recentWheelEvents;
              g.length >= 15 && g.shift();
              var $ = g.length ? g[g.length - 1] : void 0,
                b = g[0];
              if (
                (g.push(h),
                $ && (h.delta > $.delta || h.direction !== $.direction))
              )
                g.splice(0);
              else if (
                g.length >= 15 &&
                h.time - b.time < 500 &&
                b.delta - h.delta >= 1 &&
                h.delta <= 6
              ) {
                var w = o > 0 ? 0.8 : 0.2;
                (a.mousewheel.lastEventBeforeSnap = h),
                  g.splice(0),
                  (a.mousewheel.timeout = n.nextTick(function () {
                    a.slideToClosest(a.params.speed, !0, void 0, w);
                  }, 0));
              }
              a.mousewheel.timeout ||
                (a.mousewheel.timeout = n.nextTick(function () {
                  (a.mousewheel.lastEventBeforeSnap = h),
                    g.splice(0),
                    a.slideToClosest(a.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (u || a.emit("scroll", i),
              a.params.autoplay &&
                a.params.autoplayDisableOnInteraction &&
                a.autoplay.stop(),
              v === a.minTranslate() || v === a.maxTranslate())
            )
              return !0;
          }
        } else {
          var y = {
              time: n.now(),
              delta: Math.abs(o),
              direction: Math.sign(o),
              raw: t
            },
            _ = a.mousewheel.recentWheelEvents;
          _.length >= 2 && _.shift();
          var x = _.length ? _[_.length - 1] : void 0;
          if (
            (_.push(y),
            x
              ? (y.direction !== x.direction || y.delta > x.delta) &&
                a.mousewheel.animateSlider(y)
              : a.mousewheel.animateSlider(y),
            a.mousewheel.releaseScroll(y))
          )
            return !0;
        }
        return i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1;
      },
      animateSlider: function e(i) {
        var s = this;
        return (
          !!(i.delta >= 6 && n.now() - s.mousewheel.lastScrollTime < 60) ||
          (i.direction < 0
            ? (s.isEnd && !s.params.loop) ||
              s.animating ||
              (s.slideNext(), s.emit("scroll", i.raw))
            : (s.isBeginning && !s.params.loop) ||
              s.animating ||
              (s.slidePrev(), s.emit("scroll", i.raw)),
          (s.mousewheel.lastScrollTime = new t.Date().getTime()),
          !1)
        );
      },
      releaseScroll: function e(t) {
        var i = this.params.mousewheel;
        if (t.direction < 0) {
          if (this.isEnd && !this.params.loop && i.releaseOnEdges) return !0;
        } else if (this.isBeginning && !this.params.loop && i.releaseOnEdges)
          return !0;
        return !1;
      },
      enable: function e() {
        var t = this,
          i = Y.event();
        if (t.params.cssMode)
          return t.wrapperEl.removeEventListener(i, t.mousewheel.handle), !0;
        if (!i || t.mousewheel.enabled) return !1;
        var a = t.$el;
        return (
          "container" !== t.params.mousewheel.eventsTarged &&
            (a = s(t.params.mousewheel.eventsTarged)),
          a.on("mouseenter", t.mousewheel.handleMouseEnter),
          a.on("mouseleave", t.mousewheel.handleMouseLeave),
          a.on(i, t.mousewheel.handle),
          (t.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function e() {
        var t = this,
          i = Y.event();
        if (t.params.cssMode)
          return t.wrapperEl.addEventListener(i, t.mousewheel.handle), !0;
        if (!i || !t.mousewheel.enabled) return !1;
        var a = t.$el;
        return (
          "container" !== t.params.mousewheel.eventsTarged &&
            (a = s(t.params.mousewheel.eventsTarged)),
          a.off(i, t.mousewheel.handle),
          (t.mousewheel.enabled = !1),
          !0
        );
      }
    },
    W = {
      update: function e() {
        var t = this.params.navigation;
        if (!this.params.loop) {
          var i = this.navigation,
            s = i.$nextEl,
            a = i.$prevEl;
          a &&
            a.length > 0 &&
            (this.isBeginning
              ? a.addClass(t.disabledClass)
              : a.removeClass(t.disabledClass),
            a[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](t.lockClass)),
            s &&
              s.length > 0 &&
              (this.isEnd
                ? s.addClass(t.disabledClass)
                : s.removeClass(t.disabledClass),
              s[
                this.params.watchOverflow && this.isLocked
                  ? "addClass"
                  : "removeClass"
              ](t.lockClass));
        }
      },
      onPrevClick: function e(t) {
        t.preventDefault(),
          (!this.isBeginning || this.params.loop) && this.slidePrev();
      },
      onNextClick: function e(t) {
        t.preventDefault(),
          (!this.isEnd || this.params.loop) && this.slideNext();
      },
      init: function e() {
        var t,
          i,
          a = this.params.navigation;
        (a.nextEl || a.prevEl) &&
          (a.nextEl &&
            ((t = s(a.nextEl)),
            this.params.uniqueNavElements &&
              "string" == typeof a.nextEl &&
              t.length > 1 &&
              1 === this.$el.find(a.nextEl).length &&
              (t = this.$el.find(a.nextEl))),
          a.prevEl &&
            ((i = s(a.prevEl)),
            this.params.uniqueNavElements &&
              "string" == typeof a.prevEl &&
              i.length > 1 &&
              1 === this.$el.find(a.prevEl).length &&
              (i = this.$el.find(a.prevEl))),
          t && t.length > 0 && t.on("click", this.navigation.onNextClick),
          i && i.length > 0 && i.on("click", this.navigation.onPrevClick),
          n.extend(this.navigation, {
            $nextEl: t,
            nextEl: t && t[0],
            $prevEl: i,
            prevEl: i && i[0]
          }));
      },
      destroy: function e() {
        var t = this.navigation,
          i = t.$nextEl,
          s = t.$prevEl;
        i &&
          i.length &&
          (i.off("click", this.navigation.onNextClick),
          i.removeClass(this.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", this.navigation.onPrevClick),
            s.removeClass(this.params.navigation.disabledClass));
      }
    },
    R = {
      update: function e() {
        var t = this,
          i = t.rtl,
          a = t.params.pagination;
        if (
          a.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length
        ) {
          var r =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            n = t.pagination.$el,
            l = t.params.loop
              ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((o = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )) >
                  r - 1 - 2 * t.loopedSlides && (o -= r - 2 * t.loopedSlides),
                o > l - 1 && (o -= l),
                o < 0 && "bullets" !== t.params.paginationType && (o = l + o))
              : (o = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === a.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            var o,
              d,
              p,
              h,
              c = t.pagination.bullets;
            if (
              (a.dynamicBullets &&
                ((t.pagination.bulletSize = c
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                n.css(
                  t.isHorizontal() ? "width" : "height",
                  t.pagination.bulletSize * (a.dynamicMainBullets + 4) + "px"
                ),
                a.dynamicMainBullets > 1 &&
                  void 0 !== t.previousIndex &&
                  ((t.pagination.dynamicBulletIndex += o - t.previousIndex),
                  t.pagination.dynamicBulletIndex > a.dynamicMainBullets - 1
                    ? (t.pagination.dynamicBulletIndex =
                        a.dynamicMainBullets - 1)
                    : t.pagination.dynamicBulletIndex < 0 &&
                      (t.pagination.dynamicBulletIndex = 0)),
                (h =
                  ((p =
                    (d = o - t.pagination.dynamicBulletIndex) +
                    (Math.min(c.length, a.dynamicMainBullets) - 1)) +
                    d) /
                  2)),
              c.removeClass(
                a.bulletActiveClass +
                  " " +
                  a.bulletActiveClass +
                  "-next " +
                  a.bulletActiveClass +
                  "-next-next " +
                  a.bulletActiveClass +
                  "-prev " +
                  a.bulletActiveClass +
                  "-prev-prev " +
                  a.bulletActiveClass +
                  "-main"
              ),
              n.length > 1)
            )
              c.each(function (e, t) {
                var i = s(t),
                  r = i.index();
                r === o && i.addClass(a.bulletActiveClass),
                  a.dynamicBullets &&
                    (r >= d &&
                      r <= p &&
                      i.addClass(a.bulletActiveClass + "-main"),
                    r === d &&
                      i
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(a.bulletActiveClass + "-prev-prev"),
                    r === p &&
                      i
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next"));
              });
            else {
              var u = c.eq(o),
                v = u.index();
              if ((u.addClass(a.bulletActiveClass), a.dynamicBullets)) {
                for (var f = c.eq(d), m = c.eq(p), g = d; g <= p; g += 1)
                  c.eq(g).addClass(a.bulletActiveClass + "-main");
                if (t.params.loop) {
                  if (v >= c.length - a.dynamicMainBullets) {
                    for (var $ = a.dynamicMainBullets; $ >= 0; $ -= 1)
                      c.eq(c.length - $).addClass(
                        a.bulletActiveClass + "-main"
                      );
                    c.eq(c.length - a.dynamicMainBullets - 1).addClass(
                      a.bulletActiveClass + "-prev"
                    );
                  } else
                    f
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(a.bulletActiveClass + "-prev-prev"),
                      m
                        .next()
                        .addClass(a.bulletActiveClass + "-next")
                        .next()
                        .addClass(a.bulletActiveClass + "-next-next");
                } else
                  f
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(a.bulletActiveClass + "-prev-prev"),
                    m
                      .next()
                      .addClass(a.bulletActiveClass + "-next")
                      .next()
                      .addClass(a.bulletActiveClass + "-next-next");
              }
            }
            if (a.dynamicBullets) {
              var b = Math.min(c.length, a.dynamicMainBullets + 4),
                w =
                  (t.pagination.bulletSize * b - t.pagination.bulletSize) / 2 -
                  h * t.pagination.bulletSize;
              c.css(
                t.isHorizontal() ? (i ? "right" : "left") : "top",
                w + "px"
              );
            }
          }
          if (
            ("fraction" === a.type &&
              (n
                .find("." + a.currentClass)
                .text(a.formatFractionCurrent(o + 1)),
              n.find("." + a.totalClass).text(a.formatFractionTotal(l))),
            "progressbar" === a.type)
          ) {
            y = a.progressbarOpposite
              ? t.isHorizontal()
                ? "vertical"
                : "horizontal"
              : t.isHorizontal()
              ? "horizontal"
              : "vertical";
            var y,
              _ = (o + 1) / l,
              x = 1,
              E = 1;
            "horizontal" === y ? (x = _) : (E = _),
              n
                .find("." + a.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + x + ") scaleY(" + E + ")"
                )
                .transition(t.params.speed);
          }
          "custom" === a.type && a.renderCustom
            ? (n.html(a.renderCustom(t, o + 1, l)),
              t.emit("paginationRender", t, n[0]))
            : t.emit("paginationUpdate", t, n[0]),
            n[
              t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"
            ](a.lockClass);
        }
      },
      render: function e() {
        var t = this,
          i = t.params.pagination;
        if (
          i.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length
        ) {
          var s =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            a = t.pagination.$el,
            r = "";
          if ("bullets" === i.type) {
            for (
              var n = t.params.loop
                  ? Math.ceil(
                      (s - 2 * t.loopedSlides) / t.params.slidesPerGroup
                    )
                  : t.snapGrid.length,
                l = 0;
              l < n;
              l += 1
            )
              i.renderBullet
                ? (r += i.renderBullet.call(t, l, i.bulletClass))
                : (r +=
                    "<" +
                    i.bulletElement +
                    ' class="' +
                    i.bulletClass +
                    '"></' +
                    i.bulletElement +
                    ">");
            a.html(r), (t.pagination.bullets = a.find("." + i.bulletClass));
          }
          "fraction" === i.type &&
            ((r = i.renderFraction
              ? i.renderFraction.call(t, i.currentClass, i.totalClass)
              : '<span class="' +
                i.currentClass +
                '"></span> / <span class="' +
                i.totalClass +
                '"></span>'),
            a.html(r)),
            "progressbar" === i.type &&
              ((r = i.renderProgressbar
                ? i.renderProgressbar.call(t, i.progressbarFillClass)
                : '<span class="' + i.progressbarFillClass + '"></span>'),
              a.html(r)),
            "custom" !== i.type &&
              t.emit("paginationRender", t.pagination.$el[0]);
        }
      },
      init: function e() {
        var t = this,
          i = t.params.pagination;
        if (i.el) {
          var a = s(i.el);
          0 !== a.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof i.el &&
              a.length > 1 &&
              1 === t.$el.find(i.el).length &&
              (a = t.$el.find(i.el)),
            "bullets" === i.type && i.clickable && a.addClass(i.clickableClass),
            a.addClass(i.modifierClass + i.type),
            "bullets" === i.type &&
              i.dynamicBullets &&
              (a.addClass("" + i.modifierClass + i.type + "-dynamic"),
              (t.pagination.dynamicBulletIndex = 0),
              i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)),
            "progressbar" === i.type &&
              i.progressbarOpposite &&
              a.addClass(i.progressbarOppositeClass),
            i.clickable &&
              a.on("click", "." + i.bulletClass, function e(i) {
                i.preventDefault();
                var a = s(this).index() * t.params.slidesPerGroup;
                t.params.loop && (a += t.loopedSlides), t.slideTo(a);
              }),
            n.extend(t.pagination, { $el: a, el: a[0] }));
        }
      },
      destroy: function e() {
        var t = this.params.pagination;
        if (
          t.el &&
          this.pagination.el &&
          this.pagination.$el &&
          0 !== this.pagination.$el.length
        ) {
          var i = this.pagination.$el;
          i.removeClass(t.hiddenClass),
            i.removeClass(t.modifierClass + t.type),
            this.pagination.bullets &&
              this.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && i.off("click", "." + t.bulletClass);
        }
      }
    },
    q = {
      setTranslate: function e() {
        var t = this;
        if (t.params.scrollbar.el && t.scrollbar.el) {
          var i = t.scrollbar,
            s = t.rtlTranslate,
            a = t.progress,
            r = i.dragSize,
            n = i.trackSize,
            l = i.$dragEl,
            o = i.$el,
            d = t.params.scrollbar,
            p = r,
            h = (n - r) * a;
          s
            ? (h = -h) > 0
              ? ((p = r - h), (h = 0))
              : -h + r > n && (p = n + h)
            : h < 0
            ? ((p = r + h), (h = 0))
            : h + r > n && (p = n - h),
            t.isHorizontal()
              ? (l.transform("translate3d(" + h + "px, 0, 0)"),
                (l[0].style.width = p + "px"))
              : (l.transform("translate3d(0px, " + h + "px, 0)"),
                (l[0].style.height = p + "px")),
            d.hide &&
              (clearTimeout(t.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (t.scrollbar.timeout = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function e(t) {
        this.params.scrollbar.el &&
          this.scrollbar.el &&
          this.scrollbar.$dragEl.transition(t);
      },
      updateSize: function e() {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var t,
            i = this.scrollbar,
            s = i.$dragEl,
            a = i.$el;
          (s[0].style.width = ""), (s[0].style.height = "");
          var r = this.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight,
            l = this.size / this.virtualSize,
            o = l * (r / this.size);
          (t =
            "auto" === this.params.scrollbar.dragSize
              ? r * l
              : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal()
              ? (s[0].style.width = t + "px")
              : (s[0].style.height = t + "px"),
            l >= 1 ? (a[0].style.display = "none") : (a[0].style.display = ""),
            this.params.scrollbar.hide && (a[0].style.opacity = 0),
            n.extend(i, {
              trackSize: r,
              divider: l,
              moveDivider: o,
              dragSize: t
            }),
            i.$el[
              this.params.watchOverflow && this.isLocked
                ? "addClass"
                : "removeClass"
            ](this.params.scrollbar.lockClass);
        }
      },
      getPointerPosition: function e(t) {
        return this.isHorizontal()
          ? "touchstart" === t.type || "touchmove" === t.type
            ? t.targetTouches[0].clientX
            : t.clientX
          : "touchstart" === t.type || "touchmove" === t.type
          ? t.targetTouches[0].clientY
          : t.clientY;
      },
      setDragPosition: function e(t) {
        var i,
          s = this.scrollbar,
          a = this.rtlTranslate,
          r = s.$el,
          n = s.dragSize,
          l = s.trackSize,
          o = s.dragStartPos;
        (i = Math.max(
          Math.min(
            (i =
              (s.getPointerPosition(t) -
                r.offset()[this.isHorizontal() ? "left" : "top"] -
                (null !== o ? o : n / 2)) /
              (l - n)),
            1
          ),
          0
        )),
          a && (i = 1 - i);
        var d =
          this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * i;
        this.updateProgress(d),
          this.setTranslate(d),
          this.updateActiveIndex(),
          this.updateSlidesClasses();
      },
      onDragStart: function e(t) {
        var i = this,
          s = i.params.scrollbar,
          a = i.scrollbar,
          r = i.$wrapperEl,
          n = a.$el,
          l = a.$dragEl;
        (i.scrollbar.isTouched = !0),
          (i.scrollbar.dragStartPos =
            t.target === l[0] || t.target === l
              ? a.getPointerPosition(t) -
                t.target.getBoundingClientRect()[
                  i.isHorizontal() ? "left" : "top"
                ]
              : null),
          t.preventDefault(),
          t.stopPropagation(),
          r.transition(100),
          l.transition(100),
          a.setDragPosition(t),
          clearTimeout(i.scrollbar.dragTimeout),
          n.transition(0),
          s.hide && n.css("opacity", 1),
          i.params.cssMode && i.$wrapperEl.css("scroll-snap-type", "none"),
          i.emit("scrollbarDragStart", t);
      },
      onDragMove: function e(t) {
        var i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        this.scrollbar.isTouched &&
          (t.preventDefault ? t.preventDefault() : (t.returnValue = !1),
          i.setDragPosition(t),
          s.transition(0),
          a.transition(0),
          r.transition(0),
          this.emit("scrollbarDragMove", t));
      },
      onDragEnd: function e(t) {
        var i = this,
          s = i.params.scrollbar,
          a = i.scrollbar,
          r = i.$wrapperEl,
          l = a.$el;
        i.scrollbar.isTouched &&
          ((i.scrollbar.isTouched = !1),
          i.params.cssMode &&
            (i.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
          s.hide &&
            (clearTimeout(i.scrollbar.dragTimeout),
            (i.scrollbar.dragTimeout = n.nextTick(function () {
              l.css("opacity", 0), l.transition(400);
            }, 1e3))),
          i.emit("scrollbarDragEnd", t),
          s.snapOnRelease && i.slideToClosest());
      },
      enableDraggable: function t() {
        if (this.params.scrollbar.el) {
          var i = this.scrollbar,
            s = this.touchEventsTouch,
            a = this.touchEventsDesktop,
            r = this.params,
            n = i.$el[0],
            o = !!l.passiveListener &&
              !!r.passiveListeners && { passive: !1, capture: !1 },
            d = !!l.passiveListener &&
              !!r.passiveListeners && { passive: !0, capture: !1 };
          l.touch
            ? (n.addEventListener(s.start, this.scrollbar.onDragStart, o),
              n.addEventListener(s.move, this.scrollbar.onDragMove, o),
              n.addEventListener(s.end, this.scrollbar.onDragEnd, d))
            : (n.addEventListener(a.start, this.scrollbar.onDragStart, o),
              e.addEventListener(a.move, this.scrollbar.onDragMove, o),
              e.addEventListener(a.end, this.scrollbar.onDragEnd, d));
        }
      },
      disableDraggable: function t() {
        if (this.params.scrollbar.el) {
          var i = this.scrollbar,
            s = this.touchEventsTouch,
            a = this.touchEventsDesktop,
            r = this.params,
            n = i.$el[0],
            o = !!l.passiveListener &&
              !!r.passiveListeners && { passive: !1, capture: !1 },
            d = !!l.passiveListener &&
              !!r.passiveListeners && { passive: !0, capture: !1 };
          l.touch
            ? (n.removeEventListener(s.start, this.scrollbar.onDragStart, o),
              n.removeEventListener(s.move, this.scrollbar.onDragMove, o),
              n.removeEventListener(s.end, this.scrollbar.onDragEnd, d))
            : (n.removeEventListener(a.start, this.scrollbar.onDragStart, o),
              e.removeEventListener(a.move, this.scrollbar.onDragMove, o),
              e.removeEventListener(a.end, this.scrollbar.onDragEnd, d));
        }
      },
      init: function e() {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.$el,
            a = this.params.scrollbar,
            r = s(a.el);
          this.params.uniqueNavElements &&
            "string" == typeof a.el &&
            r.length > 1 &&
            1 === i.find(a.el).length &&
            (r = i.find(a.el));
          var l = r.find("." + this.params.scrollbar.dragClass);
          0 === l.length &&
            ((l = s(
              '<div class="' + this.params.scrollbar.dragClass + '"></div>'
            )),
            r.append(l)),
            n.extend(t, { $el: r, el: r[0], $dragEl: l, dragEl: l[0] }),
            a.draggable && t.enableDraggable();
        }
      },
      destroy: function e() {
        this.scrollbar.disableDraggable();
      }
    },
    F = {
      setTransform: function e(t, i) {
        var a = this.rtl,
          r = s(t),
          n = a ? -1 : 1,
          l = r.attr("data-swiper-parallax") || "0",
          o = r.attr("data-swiper-parallax-x"),
          d = r.attr("data-swiper-parallax-y"),
          p = r.attr("data-swiper-parallax-scale"),
          h = r.attr("data-swiper-parallax-opacity");
        o || d
          ? ((o = o || "0"), (d = d || "0"))
          : this.isHorizontal()
          ? ((o = l), (d = "0"))
          : ((d = l), (o = "0")),
          (o =
            o.indexOf("%") >= 0
              ? parseInt(o, 10) * i * n + "%"
              : o * i * n + "px"),
          (d = d.indexOf("%") >= 0 ? parseInt(d, 10) * i + "%" : d * i + "px"),
          null != h && (r[0].style.opacity = h - (h - 1) * (1 - Math.abs(i))),
          null == p
            ? r.transform("translate3d(" + o + ", " + d + ", 0px)")
            : r.transform(
                "translate3d(" +
                  o +
                  ", " +
                  d +
                  ", 0px) scale(" +
                  (p - (p - 1) * (1 - Math.abs(i))) +
                  ")"
              );
      },
      setTranslate: function e() {
        var t = this,
          i = t.$el,
          a = t.slides,
          r = t.progress,
          n = t.snapGrid;
        i
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
          )
          .each(function (e, i) {
            t.parallax.setTransform(i, r);
          }),
          a.each(function (e, i) {
            var a = i.progress;
            t.params.slidesPerGroup > 1 &&
              "auto" !== t.params.slidesPerView &&
              (a += Math.ceil(e / 2) - r * (n.length - 1)),
              (a = Math.min(Math.max(a, -1), 1)),
              s(i)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                )
                .each(function (e, i) {
                  t.parallax.setTransform(i, a);
                });
          });
      },
      setTransition: function e(t) {
        void 0 === t && (t = this.params.speed),
          this.$el
            .find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each(function (e, i) {
              var a = s(i),
                r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || t;
              0 === t && (r = 0), a.transition(r);
            });
      }
    },
    j = {
      getDistanceBetweenTouches: function e(t) {
        if (t.targetTouches.length < 2) return 1;
        var s = t.targetTouches[0].pageX,
          a = t.targetTouches[0].pageY,
          r = t.targetTouches[1].pageX;
        return Math.sqrt(
          Math.pow(r - s, 2) + Math.pow(t.targetTouches[1].pageY - a, 2)
        );
      },
      onGestureStart: function e(t) {
        var i = this,
          a = i.params.zoom,
          r = i.zoom,
          n = r.gesture;
        if (
          ((r.fakeGestureTouched = !1), (r.fakeGestureMoved = !1), !l.gestures)
        ) {
          if (
            "touchstart" !== t.type ||
            ("touchstart" === t.type && t.targetTouches.length < 2)
          )
            return;
          (r.fakeGestureTouched = !0),
            (n.scaleStart = j.getDistanceBetweenTouches(t));
        }
        if (
          (!n.$slideEl || !n.$slideEl.length) &&
          ((n.$slideEl = s(t.target).closest("." + i.params.slideClass)),
          0 === n.$slideEl.length && (n.$slideEl = i.slides.eq(i.activeIndex)),
          (n.$imageEl = n.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (n.$imageWrapEl = n.$imageEl.parent("." + a.containerClass)),
          (n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
          0 === n.$imageWrapEl.length)
        ) {
          n.$imageEl = void 0;
          return;
        }
        n.$imageEl && n.$imageEl.transition(0), (i.zoom.isScaling = !0);
      },
      onGestureChange: function e(t) {
        var i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (!l.gestures) {
          if (
            "touchmove" !== t.type ||
            ("touchmove" === t.type && t.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureMoved = !0),
            (a.scaleMove = j.getDistanceBetweenTouches(t));
        }
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (l.gestures
            ? (s.scale = t.scale * s.currentScale)
            : (s.scale = (a.scaleMove / a.scaleStart) * s.currentScale),
          s.scale > a.maxRatio &&
            (s.scale =
              a.maxRatio - 1 + Math.pow(s.scale - a.maxRatio + 1, 0.5)),
          s.scale < i.minRatio &&
            (s.scale =
              i.minRatio + 1 - Math.pow(i.minRatio - s.scale + 1, 0.5)),
          a.$imageEl.transform("translate3d(0,0,0) scale(" + s.scale + ")"));
      },
      onGestureEnd: function e(t) {
        var i = this.params.zoom,
          s = this.zoom,
          a = s.gesture;
        if (!l.gestures) {
          if (
            !s.fakeGestureTouched ||
            !s.fakeGestureMoved ||
            "touchend" !== t.type ||
            ("touchend" === t.type && t.changedTouches.length < 2 && !T.android)
          )
            return;
          (s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1);
        }
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          ((s.scale = Math.max(Math.min(s.scale, a.maxRatio), i.minRatio)),
          a.$imageEl
            .transition(this.params.speed)
            .transform("translate3d(0,0,0) scale(" + s.scale + ")"),
          (s.currentScale = s.scale),
          (s.isScaling = !1),
          1 === s.scale && (a.$slideEl = void 0));
      },
      onTouchStart: function e(t) {
        var i = this.zoom,
          s = i.gesture,
          a = i.image;
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          !a.isTouched &&
          (T.android && t.preventDefault(),
          (a.isTouched = !0),
          (a.touchesStart.x =
            "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX),
          (a.touchesStart.y =
            "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY));
      },
      onTouchMove: function e(t) {
        var i = this,
          s = i.zoom,
          a = s.gesture,
          r = s.image,
          l = s.velocity;
        if (
          a.$imageEl &&
          0 !== a.$imageEl.length &&
          ((i.allowClick = !1), r.isTouched && a.$slideEl)
        ) {
          !r.isMoved &&
            ((r.width = a.$imageEl[0].offsetWidth),
            (r.height = a.$imageEl[0].offsetHeight),
            (r.startX = n.getTranslate(a.$imageWrapEl[0], "x") || 0),
            (r.startY = n.getTranslate(a.$imageWrapEl[0], "y") || 0),
            (a.slideWidth = a.$slideEl[0].offsetWidth),
            (a.slideHeight = a.$slideEl[0].offsetHeight),
            a.$imageWrapEl.transition(0),
            i.rtl && ((r.startX = -r.startX), (r.startY = -r.startY)));
          var o = r.width * s.scale,
            d = r.height * s.scale;
          if (!(o < a.slideWidth) || !(d < a.slideHeight)) {
            if (
              ((r.minX = Math.min(a.slideWidth / 2 - o / 2, 0)),
              (r.maxX = -r.minX),
              (r.minY = Math.min(a.slideHeight / 2 - d / 2, 0)),
              (r.maxY = -r.minY),
              (r.touchesCurrent.x =
                "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX),
              (r.touchesCurrent.y =
                "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY),
              !r.isMoved &&
                !s.isScaling &&
                ((i.isHorizontal() &&
                  ((Math.floor(r.minX) === Math.floor(r.startX) &&
                    r.touchesCurrent.x < r.touchesStart.x) ||
                    (Math.floor(r.maxX) === Math.floor(r.startX) &&
                      r.touchesCurrent.x > r.touchesStart.x))) ||
                  (!i.isHorizontal() &&
                    ((Math.floor(r.minY) === Math.floor(r.startY) &&
                      r.touchesCurrent.y < r.touchesStart.y) ||
                      (Math.floor(r.maxY) === Math.floor(r.startY) &&
                        r.touchesCurrent.y > r.touchesStart.y)))))
            ) {
              r.isTouched = !1;
              return;
            }
            t.preventDefault(),
              t.stopPropagation(),
              (r.isMoved = !0),
              (r.currentX = r.touchesCurrent.x - r.touchesStart.x + r.startX),
              (r.currentY = r.touchesCurrent.y - r.touchesStart.y + r.startY),
              r.currentX < r.minX &&
                (r.currentX =
                  r.minX + 1 - Math.pow(r.minX - r.currentX + 1, 0.8)),
              r.currentX > r.maxX &&
                (r.currentX =
                  r.maxX - 1 + Math.pow(r.currentX - r.maxX + 1, 0.8)),
              r.currentY < r.minY &&
                (r.currentY =
                  r.minY + 1 - Math.pow(r.minY - r.currentY + 1, 0.8)),
              r.currentY > r.maxY &&
                (r.currentY =
                  r.maxY - 1 + Math.pow(r.currentY - r.maxY + 1, 0.8)),
              l.prevPositionX || (l.prevPositionX = r.touchesCurrent.x),
              l.prevPositionY || (l.prevPositionY = r.touchesCurrent.y),
              l.prevTime || (l.prevTime = Date.now()),
              (l.x =
                (r.touchesCurrent.x - l.prevPositionX) /
                (Date.now() - l.prevTime) /
                2),
              (l.y =
                (r.touchesCurrent.y - l.prevPositionY) /
                (Date.now() - l.prevTime) /
                2),
              2 > Math.abs(r.touchesCurrent.x - l.prevPositionX) && (l.x = 0),
              2 > Math.abs(r.touchesCurrent.y - l.prevPositionY) && (l.y = 0),
              (l.prevPositionX = r.touchesCurrent.x),
              (l.prevPositionY = r.touchesCurrent.y),
              (l.prevTime = Date.now()),
              a.$imageWrapEl.transform(
                "translate3d(" + r.currentX + "px, " + r.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function e() {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length) {
          if (!s.isTouched || !s.isMoved) {
            (s.isTouched = !1), (s.isMoved = !1);
            return;
          }
          (s.isTouched = !1), (s.isMoved = !1);
          var r = 300,
            n = 300,
            l = a.x * r,
            o = s.currentX + l,
            d = a.y * n,
            p = s.currentY + d;
          0 !== a.x && (r = Math.abs((o - s.currentX) / a.x)),
            0 !== a.y && (n = Math.abs((p - s.currentY) / a.y));
          var h = Math.max(r, n);
          (s.currentX = o), (s.currentY = p);
          var c = s.width * t.scale,
            u = s.height * t.scale;
          (s.minX = Math.min(i.slideWidth / 2 - c / 2, 0)),
            (s.maxX = -s.minX),
            (s.minY = Math.min(i.slideHeight / 2 - u / 2, 0)),
            (s.maxY = -s.minY),
            (s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX)),
            (s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY)),
            i.$imageWrapEl
              .transition(h)
              .transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function e() {
        var t = this.zoom,
          i = t.gesture;
        i.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (i.$imageEl && i.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          i.$imageWrapEl && i.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.scale = 1),
          (t.currentScale = 1),
          (i.$slideEl = void 0),
          (i.$imageEl = void 0),
          (i.$imageWrapEl = void 0));
      },
      toggle: function e(t) {
        var i = this.zoom;
        i.scale && 1 !== i.scale ? i.out() : i.in(t);
      },
      in: function e(t) {
        var i,
          s,
          a,
          r,
          n,
          l,
          o,
          d,
          p,
          h,
          c,
          u,
          v,
          f,
          m,
          g,
          $,
          b,
          w = this.zoom,
          y = this.params.zoom,
          _ = w.gesture,
          x = w.image;
        _.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (_.$slideEl = this.$wrapperEl.children(
                "." + this.params.slideActiveClass
              ))
            : (_.$slideEl = this.slides.eq(this.activeIndex)),
          (_.$imageEl = _.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (_.$imageWrapEl = _.$imageEl.parent("." + y.containerClass))),
          _.$imageEl &&
            0 !== _.$imageEl.length &&
            (_.$slideEl.addClass("" + y.zoomedSlideClass),
            void 0 === x.touchesStart.x && t
              ? ((i =
                  "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX),
                (s =
                  "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
              : ((i = x.touchesStart.x), (s = x.touchesStart.y)),
            (w.scale = _.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
            (w.currentScale =
              _.$imageWrapEl.attr("data-swiper-zoom") || y.maxRatio),
            t
              ? (($ = _.$slideEl[0].offsetWidth),
                (b = _.$slideEl[0].offsetHeight),
                (a = _.$slideEl.offset().left),
                (r = _.$slideEl.offset().top),
                (n = a + $ / 2 - i),
                (l = r + b / 2 - s),
                (p = _.$imageEl[0].offsetWidth),
                (h = _.$imageEl[0].offsetHeight),
                (c = p * w.scale),
                (u = h * w.scale),
                (v = Math.min($ / 2 - c / 2, 0)),
                (f = Math.min(b / 2 - u / 2, 0)),
                (m = -v),
                (g = -f),
                (o = n * w.scale),
                (d = l * w.scale),
                o < v && (o = v),
                o > m && (o = m),
                d < f && (d = f),
                d > g && (d = g))
              : ((o = 0), (d = 0)),
            _.$imageWrapEl
              .transition(300)
              .transform("translate3d(" + o + "px, " + d + "px,0)"),
            _.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(" + w.scale + ")"));
      },
      out: function e() {
        var t = this.zoom,
          i = this.params.zoom,
          s = t.gesture;
        s.$slideEl ||
          (this.params.virtual && this.params.virtual.enabled && this.virtual
            ? (s.$slideEl = this.$wrapperEl.children(
                "." + this.params.slideActiveClass
              ))
            : (s.$slideEl = this.slides.eq(this.activeIndex)),
          (s.$imageEl = s.$slideEl.find(
            "img, svg, canvas, picture, .swiper-zoom-target"
          )),
          (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((t.scale = 1),
            (t.currentScale = 1),
            s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            s.$slideEl.removeClass("" + i.zoomedSlideClass),
            (s.$slideEl = void 0));
      },
      enable: function e() {
        var t = this.zoom;
        if (!t.enabled) {
          t.enabled = !0;
          var i = "touchstart" === this.touchEvents.start &&
              !!l.passiveListener &&
              !!this.params.passiveListeners && { passive: !0, capture: !1 },
            s = !l.passiveListener || { passive: !1, capture: !0 },
            a = "." + this.params.slideClass;
          l.gestures
            ? (this.$wrapperEl.on("gesturestart", a, t.onGestureStart, i),
              this.$wrapperEl.on("gesturechange", a, t.onGestureChange, i),
              this.$wrapperEl.on("gestureend", a, t.onGestureEnd, i))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.on(
                this.touchEvents.start,
                a,
                t.onGestureStart,
                i
              ),
              this.$wrapperEl.on(
                this.touchEvents.move,
                a,
                t.onGestureChange,
                s
              ),
              this.$wrapperEl.on(this.touchEvents.end, a, t.onGestureEnd, i),
              this.touchEvents.cancel &&
                this.$wrapperEl.on(
                  this.touchEvents.cancel,
                  a,
                  t.onGestureEnd,
                  i
                )),
            this.$wrapperEl.on(
              this.touchEvents.move,
              "." + this.params.zoom.containerClass,
              t.onTouchMove,
              s
            );
        }
      },
      disable: function e() {
        var t = this,
          i = t.zoom;
        if (i.enabled) {
          t.zoom.enabled = !1;
          var s = "touchstart" === t.touchEvents.start &&
              !!l.passiveListener &&
              !!t.params.passiveListeners && { passive: !0, capture: !1 },
            a = !l.passiveListener || { passive: !1, capture: !0 },
            r = "." + t.params.slideClass;
          l.gestures
            ? (t.$wrapperEl.off("gesturestart", r, i.onGestureStart, s),
              t.$wrapperEl.off("gesturechange", r, i.onGestureChange, s),
              t.$wrapperEl.off("gestureend", r, i.onGestureEnd, s))
            : "touchstart" === t.touchEvents.start &&
              (t.$wrapperEl.off(t.touchEvents.start, r, i.onGestureStart, s),
              t.$wrapperEl.off(t.touchEvents.move, r, i.onGestureChange, a),
              t.$wrapperEl.off(t.touchEvents.end, r, i.onGestureEnd, s),
              t.touchEvents.cancel &&
                t.$wrapperEl.off(t.touchEvents.cancel, r, i.onGestureEnd, s)),
            t.$wrapperEl.off(
              t.touchEvents.move,
              "." + t.params.zoom.containerClass,
              i.onTouchMove,
              a
            );
        }
      }
    },
    K = {
      loadInSlide: function e(t, i) {
        void 0 === i && (i = !0);
        var a = this,
          r = a.params.lazy;
        if (void 0 !== t && 0 !== a.slides.length) {
          var n =
              a.virtual && a.params.virtual.enabled
                ? a.$wrapperEl.children(
                    "." +
                      a.params.slideClass +
                      '[data-swiper-slide-index="' +
                      t +
                      '"]'
                  )
                : a.slides.eq(t),
            l = n.find(
              "." +
                r.elementClass +
                ":not(." +
                r.loadedClass +
                "):not(." +
                r.loadingClass +
                ")"
            );
          !n.hasClass(r.elementClass) ||
            n.hasClass(r.loadedClass) ||
            n.hasClass(r.loadingClass) ||
            (l = l.add(n[0])),
            0 !== l.length &&
              l.each(function (e, t) {
                var l = s(t);
                l.addClass(r.loadingClass);
                var o = l.attr("data-background"),
                  d = l.attr("data-src"),
                  p = l.attr("data-srcset"),
                  h = l.attr("data-sizes");
                a.loadImage(l[0], d || o, p, h, !1, function () {
                  if (null != a && a && (!a || a.params) && !a.destroyed) {
                    if (
                      (o
                        ? (l.css("background-image", 'url("' + o + '")'),
                          l.removeAttr("data-background"))
                        : (p &&
                            (l.attr("srcset", p), l.removeAttr("data-srcset")),
                          h && (l.attr("sizes", h), l.removeAttr("data-sizes")),
                          d && (l.attr("src", d), l.removeAttr("data-src"))),
                      l.addClass(r.loadedClass).removeClass(r.loadingClass),
                      n.find("." + r.preloaderClass).remove(),
                      a.params.loop && i)
                    ) {
                      var e = n.attr("data-swiper-slide-index");
                      if (n.hasClass(a.params.slideDuplicateClass)) {
                        var t = a.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            a.params.slideDuplicateClass +
                            ")"
                        );
                        a.lazy.loadInSlide(t.index(), !1);
                      } else {
                        var s = a.$wrapperEl.children(
                          "." +
                            a.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        a.lazy.loadInSlide(s.index(), !1);
                      }
                    }
                    a.emit("lazyImageReady", n[0], l[0]),
                      a.params.autoHeight && a.updateAutoHeight();
                  }
                }),
                  a.emit("lazyImageLoad", n[0], l[0]);
              });
        }
      },
      load: function e() {
        var t = this,
          i = t.$wrapperEl,
          a = t.params,
          r = t.slides,
          n = t.activeIndex,
          l = t.virtual && a.virtual.enabled,
          o = a.lazy,
          d = a.slidesPerView;
        function p(e) {
          if (l) {
            if (
              i.children(
                "." + a.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (r[e]) return !0;
          return !1;
        }
        function h(e) {
          return l ? s(e).attr("data-swiper-slide-index") : s(e).index();
        }
        if (
          ("auto" === d && (d = 0),
          t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0),
          t.params.watchSlidesVisibility)
        )
          i.children("." + a.slideVisibleClass).each(function (e, i) {
            var a = l ? s(i).attr("data-swiper-slide-index") : s(i).index();
            t.lazy.loadInSlide(a);
          });
        else if (d > 1)
          for (var c = n; c < n + d; c += 1) p(c) && t.lazy.loadInSlide(c);
        else t.lazy.loadInSlide(n);
        if (o.loadPrevNext) {
          if (d > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            for (
              var u = o.loadPrevNextAmount,
                v = d,
                f = Math.min(n + v + Math.max(u, v), r.length),
                m = Math.max(n - Math.max(v, u), 0),
                g = n + d;
              g < f;
              g += 1
            )
              p(g) && t.lazy.loadInSlide(g);
            for (var $ = m; $ < n; $ += 1) p($) && t.lazy.loadInSlide($);
          } else {
            var b = i.children("." + a.slideNextClass);
            b.length > 0 && t.lazy.loadInSlide(h(b));
            var w = i.children("." + a.slidePrevClass);
            w.length > 0 && t.lazy.loadInSlide(h(w));
          }
        }
      }
    },
    U = {
      LinearSpline: function e(t, i) {
        var s,
          a,
          r,
          n,
          l,
          o = function (e, t) {
            for (a = -1, s = e.length; s - a > 1; )
              e[(r = (s + a) >> 1)] <= t ? (a = r) : (s = r);
            return s;
          };
        return (
          (this.x = t),
          (this.y = i),
          (this.lastIndex = t.length - 1),
          (this.interpolate = function e(t) {
            return t
              ? ((n = (l = o(this.x, t)) - 1),
                ((t - this.x[n]) * (this.y[l] - this.y[n])) /
                  (this.x[l] - this.x[n]) +
                  this.y[n])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function e(t) {
        var i = this;
        i.controller.spline ||
          (i.controller.spline = i.params.loop
            ? new U.LinearSpline(i.slidesGrid, t.slidesGrid)
            : new U.LinearSpline(i.snapGrid, t.snapGrid));
      },
      setTranslate: function e(t, i) {
        var s,
          a,
          r = this,
          n = r.controller.control;
        function l(e) {
          var t = r.rtlTranslate ? -r.translate : r.translate;
          "slide" === r.params.controller.by &&
            (r.controller.getInterpolateFunction(e),
            (a = -r.controller.spline.interpolate(-t))),
            (a && "container" !== r.params.controller.by) ||
              ((s =
                (e.maxTranslate() - e.minTranslate()) /
                (r.maxTranslate() - r.minTranslate())),
              (a = (t - r.minTranslate()) * s + e.minTranslate())),
            r.params.controller.inverse && (a = e.maxTranslate() - a),
            e.updateProgress(a),
            e.setTranslate(a, r),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        if (Array.isArray(n))
          for (var o = 0; o < n.length; o += 1)
            n[o] !== i && n[o] instanceof H && l(n[o]);
        else n instanceof H && i !== n && l(n);
      },
      setTransition: function e(t, i) {
        var s,
          a = this,
          r = a.controller.control;
        function l(e) {
          e.setTransition(t, a),
            0 !== t &&
              (e.transitionStart(),
              e.params.autoHeight &&
                n.nextTick(function () {
                  e.updateAutoHeight();
                }),
              e.$wrapperEl.transitionEnd(function () {
                r &&
                  (e.params.loop &&
                    "slide" === a.params.controller.by &&
                    e.loopFix(),
                  e.transitionEnd());
              }));
        }
        if (Array.isArray(r))
          for (s = 0; s < r.length; s += 1)
            r[s] !== i && r[s] instanceof H && l(r[s]);
        else r instanceof H && i !== r && l(r);
      }
    },
    Z = {
      makeElFocusable: function e(t) {
        return t.attr("tabIndex", "0"), t;
      },
      addElRole: function e(t, i) {
        return t.attr("role", i), t;
      },
      addElLabel: function e(t, i) {
        return t.attr("aria-label", i), t;
      },
      disableEl: function e(t) {
        return t.attr("aria-disabled", !0), t;
      },
      enableEl: function e(t) {
        return t.attr("aria-disabled", !1), t;
      },
      onEnterKey: function e(t) {
        var i = this.params.a11y;
        if (13 === t.keyCode) {
          var a = s(t.target);
          this.navigation &&
            this.navigation.$nextEl &&
            a.is(this.navigation.$nextEl) &&
            ((this.isEnd && !this.params.loop) || this.slideNext(),
            this.isEnd
              ? this.a11y.notify(i.lastSlideMessage)
              : this.a11y.notify(i.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              a.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning
                ? this.a11y.notify(i.firstSlideMessage)
                : this.a11y.notify(i.prevSlideMessage)),
            this.pagination &&
              a.is("." + this.params.pagination.bulletClass) &&
              a[0].click();
        }
      },
      notify: function e(t) {
        var i = this.a11y.liveRegion;
        0 !== i.length && (i.html(""), i.html(t));
      },
      updateNavigation: function e() {
        if (!this.params.loop && this.navigation) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          s &&
            s.length > 0 &&
            (this.isBeginning ? this.a11y.disableEl(s) : this.a11y.enableEl(s)),
            i &&
              i.length > 0 &&
              (this.isEnd ? this.a11y.disableEl(i) : this.a11y.enableEl(i));
        }
      },
      updatePagination: function e() {
        var t = this,
          i = t.params.a11y;
        t.pagination &&
          t.params.pagination.clickable &&
          t.pagination.bullets &&
          t.pagination.bullets.length &&
          t.pagination.bullets.each(function (e, a) {
            var r = s(a);
            t.a11y.makeElFocusable(r),
              t.a11y.addElRole(r, "button"),
              t.a11y.addElLabel(
                r,
                i.paginationBulletMessage.replace(/{{index}}/, r.index() + 1)
              );
          });
      },
      init: function e() {
        this.$el.append(this.a11y.liveRegion);
        var t,
          i,
          s = this.params.a11y;
        this.navigation &&
          this.navigation.$nextEl &&
          (t = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (i = this.navigation.$prevEl),
          t &&
            (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, s.nextSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
          i &&
            (this.a11y.makeElFocusable(i),
            this.a11y.addElRole(i, "button"),
            this.a11y.addElLabel(i, s.prevSlideMessage),
            i.on("keydown", this.a11y.onEnterKey)),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.on(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      },
      destroy: function e() {
        var t, i;
        this.a11y.liveRegion &&
          this.a11y.liveRegion.length > 0 &&
          this.a11y.liveRegion.remove(),
          this.navigation &&
            this.navigation.$nextEl &&
            (t = this.navigation.$nextEl),
          this.navigation &&
            this.navigation.$prevEl &&
            (i = this.navigation.$prevEl),
          t && t.off("keydown", this.a11y.onEnterKey),
          i && i.off("keydown", this.a11y.onEnterKey),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.off(
              "keydown",
              "." + this.params.pagination.bulletClass,
              this.a11y.onEnterKey
            );
      }
    },
    Q = {
      init: function e() {
        var i = this;
        if (i.params.history) {
          if (!t.history || !t.history.pushState) {
            (i.params.history.enabled = !1),
              (i.params.hashNavigation.enabled = !0);
            return;
          }
          var s = i.history;
          (s.initialized = !0),
            (s.paths = Q.getPathValues()),
            (s.paths.key || s.paths.value) &&
              (s.scrollToSlide(0, s.paths.value, i.params.runCallbacksOnInit),
              i.params.history.replaceState ||
                t.addEventListener("popstate", i.history.setHistoryPopState));
        }
      },
      destroy: function e() {
        this.params.history.replaceState ||
          t.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function e() {
        var t = this;
        (t.history.paths = Q.getPathValues()),
          t.history.scrollToSlide(t.params.speed, t.history.paths.value, !1);
      },
      getPathValues: function e() {
        var s = t.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          a = s.length;
        return { key: s[a - 2], value: s[a - 1] };
      },
      setHistory: function e(i, s) {
        if (this.history.initialized && this.params.history.enabled) {
          var a = this.slides.eq(s),
            r = Q.slugify(a.attr("data-history"));
          t.location.pathname.includes(i) || (r = i + "/" + r);
          var n = t.history.state;
          (!n || n.value !== r) &&
            (this.params.history.replaceState
              ? t.history.replaceState({ value: r }, null, r)
              : t.history.pushState({ value: r }, null, r));
        }
      },
      slugify: function e(t) {
        return t
          .toString()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function e(t, i, s) {
        if (i)
          for (var a = 0, r = this.slides.length; a < r; a += 1) {
            var n = this.slides.eq(a);
            if (
              Q.slugify(n.attr("data-history")) === i &&
              !n.hasClass(this.params.slideDuplicateClass)
            ) {
              var l = n.index();
              this.slideTo(l, t, s);
            }
          }
        else this.slideTo(0, t, s);
      }
    },
    J = {
      onHashCange: function t() {
        var i = e.location.hash.replace("#", "");
        if (i !== this.slides.eq(this.activeIndex).attr("data-hash")) {
          var s = this.$wrapperEl
            .children("." + this.params.slideClass + '[data-hash="' + i + '"]')
            .index();
          if (void 0 === s) return;
          this.slideTo(s);
        }
      },
      setHash: function i() {
        if (
          this.hashNavigation.initialized &&
          this.params.hashNavigation.enabled
        ) {
          if (
            this.params.hashNavigation.replaceState &&
            t.history &&
            t.history.replaceState
          )
            t.history.replaceState(
              null,
              null,
              "#" + this.slides.eq(this.activeIndex).attr("data-hash")
            );
          else {
            var s = this.slides.eq(this.activeIndex),
              a = s.attr("data-hash") || s.attr("data-history");
            e.location.hash = a || "";
          }
        }
      },
      init: function i() {
        var a = this;
        if (
          a.params.hashNavigation.enabled &&
          (!a.params.history || !a.params.history.enabled)
        ) {
          a.hashNavigation.initialized = !0;
          var r = e.location.hash.replace("#", "");
          if (r)
            for (var n = 0, l = a.slides.length; n < l; n += 1) {
              var o = a.slides.eq(n);
              if (
                (o.attr("data-hash") || o.attr("data-history")) === r &&
                !o.hasClass(a.params.slideDuplicateClass)
              ) {
                var d = o.index();
                a.slideTo(d, 0, a.params.runCallbacksOnInit, !0);
              }
            }
          a.params.hashNavigation.watchState &&
            s(t).on("hashchange", a.hashNavigation.onHashCange);
        }
      },
      destroy: function e() {
        this.params.hashNavigation.watchState &&
          s(t).off("hashchange", this.hashNavigation.onHashCange);
      }
    },
    ee = {
      run: function e() {
        var t = this,
          i = t.slides.eq(t.activeIndex),
          s = t.params.autoplay.delay;
        i.attr("data-swiper-autoplay") &&
          (s = i.attr("data-swiper-autoplay") || t.params.autoplay.delay),
          clearTimeout(t.autoplay.timeout),
          (t.autoplay.timeout = n.nextTick(function () {
            t.params.autoplay.reverseDirection
              ? t.params.loop
                ? (t.loopFix(),
                  t.slidePrev(t.params.speed, !0, !0),
                  t.emit("autoplay"))
                : t.isBeginning
                ? t.params.autoplay.stopOnLastSlide
                  ? t.autoplay.stop()
                  : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0),
                    t.emit("autoplay"))
                : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay"))
              : t.params.loop
              ? (t.loopFix(),
                t.slideNext(t.params.speed, !0, !0),
                t.emit("autoplay"))
              : t.isEnd
              ? t.params.autoplay.stopOnLastSlide
                ? t.autoplay.stop()
                : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay"))
              : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")),
              t.params.cssMode && t.autoplay.running && t.autoplay.run();
          }, s));
      },
      start: function e() {
        var t = this;
        return (
          void 0 === t.autoplay.timeout &&
          !t.autoplay.running &&
          ((t.autoplay.running = !0),
          t.emit("autoplayStart"),
          t.autoplay.run(),
          !0)
        );
      },
      stop: function e() {
        var t = this;
        return (
          !!t.autoplay.running &&
          void 0 !== t.autoplay.timeout &&
          (t.autoplay.timeout &&
            (clearTimeout(t.autoplay.timeout), (t.autoplay.timeout = void 0)),
          (t.autoplay.running = !1),
          t.emit("autoplayStop"),
          !0)
        );
      },
      pause: function e(t) {
        var i = this;
        i.autoplay.running &&
          !i.autoplay.paused &&
          (i.autoplay.timeout && clearTimeout(i.autoplay.timeout),
          (i.autoplay.paused = !0),
          0 !== t && i.params.autoplay.waitForTransition
            ? (i.$wrapperEl[0].addEventListener(
                "transitionend",
                i.autoplay.onTransitionEnd
              ),
              i.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                i.autoplay.onTransitionEnd
              ))
            : ((i.autoplay.paused = !1), i.autoplay.run()));
      }
    },
    et = {
      setTranslate: function e() {
        for (var t = this.slides, i = 0; i < t.length; i += 1) {
          var s = this.slides.eq(i),
            a = -s[0].swiperSlideOffset;
          this.params.virtualTranslate || (a -= this.translate);
          var r = 0;
          this.isHorizontal() || ((r = a), (a = 0));
          var n = this.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(s[0].progress), 0)
            : 1 + Math.min(Math.max(s[0].progress, -1), 0);
          s.css({ opacity: n }).transform(
            "translate3d(" + a + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function e(t) {
        var i = this,
          s = i.slides,
          a = i.$wrapperEl;
        if ((s.transition(t), i.params.virtualTranslate && 0 !== t)) {
          var r = !1;
          s.transitionEnd(function () {
            if (!r && i && !i.destroyed) {
              (r = !0), (i.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], t = 0;
                t < e.length;
                t += 1
              )
                a.trigger(e[t]);
            }
          });
        }
      }
    },
    ei = {
      setTranslate: function e() {
        var t,
          i = this.$el,
          a = this.$wrapperEl,
          r = this.slides,
          n = this.width,
          l = this.height,
          o = this.rtlTranslate,
          d = this.size,
          p = this.params.cubeEffect,
          h = this.isHorizontal(),
          c = this.virtual && this.params.virtual.enabled,
          u = 0;
        p.shadow &&
          (h
            ? (0 === (t = a.find(".swiper-cube-shadow")).length &&
                ((t = s('<div class="swiper-cube-shadow"></div>')),
                a.append(t)),
              t.css({ height: n + "px" }))
            : 0 === (t = i.find(".swiper-cube-shadow")).length &&
              ((t = s('<div class="swiper-cube-shadow"></div>')), i.append(t)));
        for (var v = 0; v < r.length; v += 1) {
          var f = r.eq(v),
            m = v;
          c && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
          var g = 90 * m,
            $ = Math.floor(g / 360);
          o && ($ = Math.floor(-(g = -g) / 360));
          var b = Math.max(Math.min(f[0].progress, 1), -1),
            w = 0,
            y = 0,
            _ = 0;
          m % 4 == 0
            ? ((w = -(4 * $) * d), (_ = 0))
            : (m - 1) % 4 == 0
            ? ((w = 0), (_ = -(4 * $) * d))
            : (m - 2) % 4 == 0
            ? ((w = d + 4 * $ * d), (_ = d))
            : (m - 3) % 4 == 0 && ((w = -d), (_ = 3 * d + 4 * d * $)),
            o && (w = -w),
            h || ((y = w), (w = 0));
          var x =
            "rotateX(" +
            (h ? 0 : -g) +
            "deg) rotateY(" +
            (h ? g : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            _ +
            "px)";
          if (
            (b <= 1 &&
              b > -1 &&
              ((u = 90 * m + 90 * b), o && (u = -(90 * m) - 90 * b)),
            f.transform(x),
            p.slideShadows)
          ) {
            var E = h
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              T = h
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === E.length &&
              ((E = s(
                '<div class="swiper-slide-shadow-' +
                  (h ? "left" : "top") +
                  '"></div>'
              )),
              f.append(E)),
              0 === T.length &&
                ((T = s(
                  '<div class="swiper-slide-shadow-' +
                    (h ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(T)),
              E.length && (E[0].style.opacity = Math.max(-b, 0)),
              T.length && (T[0].style.opacity = Math.max(b, 0));
          }
        }
        if (
          (a.css({
            "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
            "transform-origin": "50% 50% -" + d / 2 + "px"
          }),
          p.shadow)
        ) {
          if (h)
            t.transform(
              "translate3d(0px, " +
                (n / 2 + p.shadowOffset) +
                "px, " +
                -n / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                p.shadowScale +
                ")"
            );
          else {
            var S = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
              C = p.shadowScale,
              P =
                p.shadowScale /
                (1.5 -
                  (Math.sin((2 * S * Math.PI) / 360) / 2 +
                    Math.cos((2 * S * Math.PI) / 360) / 2)),
              z = p.shadowOffset;
            t.transform(
              "scale3d(" +
                C +
                ", 1, " +
                P +
                ") translate3d(0px, " +
                (l / 2 + z) +
                "px, " +
                -l / 2 / P +
                "px) rotateX(-90deg)"
            );
          }
        }
        var k = B.isSafari || B.isUiWebView ? -d / 2 : 0;
        a.transform(
          "translate3d(0px,0," +
            k +
            "px) rotateX(" +
            (this.isHorizontal() ? 0 : u) +
            "deg) rotateY(" +
            (this.isHorizontal() ? -u : 0) +
            "deg)"
        );
      },
      setTransition: function e(t) {
        var i = this.$el;
        this.slides
          .transition(t)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(t),
          this.params.cubeEffect.shadow &&
            !this.isHorizontal() &&
            i.find(".swiper-cube-shadow").transition(t);
      }
    },
    es = {
      setTranslate: function e() {
        for (
          var t = this.slides, i = this.rtlTranslate, a = 0;
          a < t.length;
          a += 1
        ) {
          var r = t.eq(a),
            n = r[0].progress;
          this.params.flipEffect.limitRotation &&
            (n = Math.max(Math.min(r[0].progress, 1), -1));
          var l = r[0].swiperSlideOffset,
            o = -180 * n,
            d = 0,
            p = -l,
            h = 0;
          if (
            (this.isHorizontal()
              ? i && (o = -o)
              : ((h = p), (p = 0), (d = -o), (o = 0)),
            (r[0].style.zIndex = -Math.abs(Math.round(n)) + t.length),
            this.params.flipEffect.slideShadows)
          ) {
            var c = this.isHorizontal()
                ? r.find(".swiper-slide-shadow-left")
                : r.find(".swiper-slide-shadow-top"),
              u = this.isHorizontal()
                ? r.find(".swiper-slide-shadow-right")
                : r.find(".swiper-slide-shadow-bottom");
            0 === c.length &&
              ((c = s(
                '<div class="swiper-slide-shadow-' +
                  (this.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              r.append(c)),
              0 === u.length &&
                ((u = s(
                  '<div class="swiper-slide-shadow-' +
                    (this.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                r.append(u)),
              c.length && (c[0].style.opacity = Math.max(-n, 0)),
              u.length && (u[0].style.opacity = Math.max(n, 0));
          }
          r.transform(
            "translate3d(" +
              p +
              "px, " +
              h +
              "px, 0px) rotateX(" +
              d +
              "deg) rotateY(" +
              o +
              "deg)"
          );
        }
      },
      setTransition: function e(t) {
        var i = this,
          s = i.slides,
          a = i.activeIndex,
          r = i.$wrapperEl;
        if (
          (s
            .transition(t)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(t),
          i.params.virtualTranslate && 0 !== t)
        ) {
          var n = !1;
          s.eq(a).transitionEnd(function e() {
            if (!n && i && !i.destroyed) {
              (n = !0), (i.animating = !1);
              for (
                var t = ["webkitTransitionEnd", "transitionend"], s = 0;
                s < t.length;
                s += 1
              )
                r.trigger(t[s]);
            }
          });
        }
      }
    },
    ea = {
      setTranslate: function e() {
        for (
          var t = this.width,
            i = this.height,
            a = this.slides,
            r = this.$wrapperEl,
            n = this.slidesSizesGrid,
            o = this.params.coverflowEffect,
            d = this.isHorizontal(),
            p = this.translate,
            h = d ? -p + t / 2 : -p + i / 2,
            c = d ? o.rotate : -o.rotate,
            u = o.depth,
            v = 0,
            f = a.length;
          v < f;
          v += 1
        ) {
          var m = a.eq(v),
            g = n[v],
            $ = ((h - m[0].swiperSlideOffset - g / 2) / g) * o.modifier,
            b = d ? c * $ : 0,
            w = d ? 0 : c * $,
            y = -u * Math.abs($),
            _ = o.stretch;
          "string" == typeof _ &&
            -1 !== _.indexOf("%") &&
            (_ = (parseFloat(o.stretch) / 100) * g);
          var x = d ? 0 : _ * $,
            E = d ? _ * $ : 0;
          0.001 > Math.abs(E) && (E = 0),
            0.001 > Math.abs(x) && (x = 0),
            0.001 > Math.abs(y) && (y = 0),
            0.001 > Math.abs(b) && (b = 0),
            0.001 > Math.abs(w) && (w = 0);
          var T =
            "translate3d(" +
            E +
            "px," +
            x +
            "px," +
            y +
            "px)  rotateX(" +
            w +
            "deg) rotateY(" +
            b +
            "deg)";
          if (
            (m.transform(T),
            (m[0].style.zIndex = -Math.abs(Math.round($)) + 1),
            o.slideShadows)
          ) {
            var S = d
                ? m.find(".swiper-slide-shadow-left")
                : m.find(".swiper-slide-shadow-top"),
              C = d
                ? m.find(".swiper-slide-shadow-right")
                : m.find(".swiper-slide-shadow-bottom");
            0 === S.length &&
              ((S = s(
                '<div class="swiper-slide-shadow-' +
                  (d ? "left" : "top") +
                  '"></div>'
              )),
              m.append(S)),
              0 === C.length &&
                ((C = s(
                  '<div class="swiper-slide-shadow-' +
                    (d ? "right" : "bottom") +
                    '"></div>'
                )),
                m.append(C)),
              S.length && (S[0].style.opacity = $ > 0 ? $ : 0),
              C.length && (C[0].style.opacity = -$ > 0 ? -$ : 0);
          }
        }
        (l.pointerEvents || l.prefixedPointerEvents) &&
          (r[0].style.perspectiveOrigin = h + "px 50%");
      },
      setTransition: function e(t) {
        this.slides
          .transition(t)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(t);
      }
    },
    er = {
      init: function e() {
        var t = this,
          i = t.params.thumbs,
          s = t.constructor;
        i.swiper instanceof s
          ? ((t.thumbs.swiper = i.swiper),
            n.extend(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }),
            n.extend(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1
            }))
          : n.isObject(i.swiper) &&
            ((t.thumbs.swiper = new s(
              n.extend({}, i.swiper, {
                watchSlidesVisibility: !0,
                watchSlidesProgress: !0,
                slideToClickedSlide: !1
              })
            )),
            (t.thumbs.swiperCreated = !0)),
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on("tap", t.thumbs.onThumbClick);
      },
      onThumbClick: function e() {
        var t,
          i = this,
          a = i.thumbs.swiper;
        if (a) {
          var r = a.clickedIndex,
            n = a.clickedSlide;
          if (
            !(n && s(n).hasClass(i.params.thumbs.slideThumbActiveClass)) &&
            null != r
          ) {
            if (
              ((t = a.params.loop
                ? parseInt(
                    s(a.clickedSlide).attr("data-swiper-slide-index"),
                    10
                  )
                : r),
              i.params.loop)
            ) {
              var l = i.activeIndex;
              i.slides.eq(l).hasClass(i.params.slideDuplicateClass) &&
                (i.loopFix(),
                (i._clientLeft = i.$wrapperEl[0].clientLeft),
                (l = i.activeIndex));
              var o = i.slides
                  .eq(l)
                  .prevAll('[data-swiper-slide-index="' + t + '"]')
                  .eq(0)
                  .index(),
                d = i.slides
                  .eq(l)
                  .nextAll('[data-swiper-slide-index="' + t + '"]')
                  .eq(0)
                  .index();
              t = void 0 === o ? d : void 0 === d ? o : d - l < l - o ? d : o;
            }
            i.slideTo(t);
          }
        }
      },
      update: function e(t) {
        var i = this.thumbs.swiper;
        if (i) {
          var s =
            "auto" === i.params.slidesPerView
              ? i.slidesPerViewDynamic()
              : i.params.slidesPerView;
          if (this.realIndex !== i.realIndex) {
            var a,
              r = i.activeIndex;
            if (i.params.loop) {
              i.slides.eq(r).hasClass(i.params.slideDuplicateClass) &&
                (i.loopFix(),
                (i._clientLeft = i.$wrapperEl[0].clientLeft),
                (r = i.activeIndex));
              var n = i.slides
                  .eq(r)
                  .prevAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index(),
                l = i.slides
                  .eq(r)
                  .nextAll('[data-swiper-slide-index="' + this.realIndex + '"]')
                  .eq(0)
                  .index();
              a =
                void 0 === n
                  ? l
                  : void 0 === l
                  ? n
                  : l - r == r - n
                  ? r
                  : l - r < r - n
                  ? l
                  : n;
            } else a = this.realIndex;
            i.visibleSlidesIndexes &&
              0 > i.visibleSlidesIndexes.indexOf(a) &&
              (i.params.centeredSlides
                ? (a =
                    a > r
                      ? a - Math.floor(s / 2) + 1
                      : a + Math.floor(s / 2) - 1)
                : a > r && (a = a - s + 1),
              i.slideTo(a, t ? 0 : void 0));
          }
          var o = 1,
            d = this.params.thumbs.slideThumbActiveClass;
          if (
            (this.params.slidesPerView > 1 &&
              !this.params.centeredSlides &&
              (o = this.params.slidesPerView),
            this.params.thumbs.multipleActiveThumbs || (o = 1),
            (o = Math.floor(o)),
            i.slides.removeClass(d),
            i.params.loop || (i.params.virtual && i.params.virtual.enabled))
          )
            for (var p = 0; p < o; p += 1)
              i.$wrapperEl
                .children(
                  '[data-swiper-slide-index="' + (this.realIndex + p) + '"]'
                )
                .addClass(d);
          else
            for (var h = 0; h < o; h += 1)
              i.slides.eq(this.realIndex + h).addClass(d);
        }
      }
    },
    en = [
      { name: "device", proto: { device: T }, static: { device: T } },
      { name: "support", proto: { support: l }, static: { support: l } },
      { name: "browser", proto: { browser: B }, static: { browser: B } },
      {
        name: "resize",
        create: function e() {
          var t = this;
          n.extend(t, {
            resize: {
              resizeHandler: function e() {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  (t.emit("beforeResize"), t.emit("resize"));
              },
              orientationChangeHandler: function e() {
                t &&
                  !t.destroyed &&
                  t.initialized &&
                  t.emit("orientationchange");
              }
            }
          });
        },
        on: {
          init: function e() {
            t.addEventListener("resize", this.resize.resizeHandler),
              t.addEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          },
          destroy: function e() {
            t.removeEventListener("resize", this.resize.resizeHandler),
              t.removeEventListener(
                "orientationchange",
                this.resize.orientationChangeHandler
              );
          }
        }
      },
      {
        name: "observer",
        params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
        create: function e() {
          n.extend(this, {
            observer: {
              init: N.init.bind(this),
              attach: N.attach.bind(this),
              destroy: N.destroy.bind(this),
              observers: []
            }
          });
        },
        on: {
          init: function e() {
            this.observer.init();
          },
          destroy: function e() {
            this.observer.destroy();
          }
        }
      },
      {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        },
        create: function e() {
          n.extend(this, {
            virtual: {
              update: X.update.bind(this),
              appendSlide: X.appendSlide.bind(this),
              prependSlide: X.prependSlide.bind(this),
              removeSlide: X.removeSlide.bind(this),
              removeAllSlides: X.removeAllSlides.bind(this),
              renderSlide: X.renderSlide.bind(this),
              slides: this.params.virtual.slides,
              cache: {}
            }
          });
        },
        on: {
          beforeInit: function e() {
            if (this.params.virtual.enabled) {
              this.classNames.push(
                this.params.containerModifierClass + "virtual"
              );
              var t = { watchSlidesProgress: !0 };
              n.extend(this.params, t),
                n.extend(this.originalParams, t),
                this.params.initialSlide || this.virtual.update();
            }
          },
          setTranslate: function e() {
            this.params.virtual.enabled && this.virtual.update();
          }
        }
      },
      {
        name: "keyboard",
        params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
        create: function e() {
          n.extend(this, {
            keyboard: {
              enabled: !1,
              enable: V.enable.bind(this),
              disable: V.disable.bind(this),
              handle: V.handle.bind(this)
            }
          });
        },
        on: {
          init: function e() {
            this.params.keyboard.enabled && this.keyboard.enable();
          },
          destroy: function e() {
            this.keyboard.enabled && this.keyboard.disable();
          }
        }
      },
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create: function e() {
          n.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: Y.enable.bind(this),
              disable: Y.disable.bind(this),
              handle: Y.handle.bind(this),
              handleMouseEnter: Y.handleMouseEnter.bind(this),
              handleMouseLeave: Y.handleMouseLeave.bind(this),
              animateSlider: Y.animateSlider.bind(this),
              releaseScroll: Y.releaseScroll.bind(this),
              lastScrollTime: n.now(),
              lastEventBeforeSnap: void 0,
              recentWheelEvents: []
            }
          });
        },
        on: {
          init: function e() {
            !this.params.mousewheel.enabled &&
              this.params.cssMode &&
              this.mousewheel.disable(),
              this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function e() {
            this.params.cssMode && this.mousewheel.enable(),
              this.mousewheel.enabled && this.mousewheel.disable();
          }
        }
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function e() {
          n.extend(this, {
            navigation: {
              init: W.init.bind(this),
              update: W.update.bind(this),
              destroy: W.destroy.bind(this),
              onNextClick: W.onNextClick.bind(this),
              onPrevClick: W.onPrevClick.bind(this)
            }
          });
        },
        on: {
          init: function e() {
            this.navigation.init(), this.navigation.update();
          },
          toEdge: function e() {
            this.navigation.update();
          },
          fromEdge: function e() {
            this.navigation.update();
          },
          destroy: function e() {
            this.navigation.destroy();
          },
          click: function e(t) {
            var i,
              a = this.navigation,
              r = a.$nextEl,
              n = a.$prevEl;
            this.params.navigation.hideOnClick &&
              !s(t.target).is(n) &&
              !s(t.target).is(r) &&
              (r
                ? (i = r.hasClass(this.params.navigation.hiddenClass))
                : n && (i = n.hasClass(this.params.navigation.hiddenClass)),
              !0 === i
                ? this.emit("navigationShow", this)
                : this.emit("navigationHide", this),
              r && r.toggleClass(this.params.navigation.hiddenClass),
              n && n.toggleClass(this.params.navigation.hiddenClass));
          }
        }
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (e) {
              return e;
            },
            formatFractionTotal: function (e) {
              return e;
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function e() {
          n.extend(this, {
            pagination: {
              init: R.init.bind(this),
              render: R.render.bind(this),
              update: R.update.bind(this),
              destroy: R.destroy.bind(this),
              dynamicBulletIndex: 0
            }
          });
        },
        on: {
          init: function e() {
            this.pagination.init(),
              this.pagination.render(),
              this.pagination.update();
          },
          activeIndexChange: function e() {
            this.params.loop
              ? this.pagination.update()
              : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function e() {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function e() {
            this.params.loop &&
              (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function e() {
            this.params.loop ||
              (this.pagination.render(), this.pagination.update());
          },
          destroy: function e() {
            this.pagination.destroy();
          },
          click: function e(t) {
            this.params.pagination.el &&
              this.params.pagination.hideOnClick &&
              this.pagination.$el.length > 0 &&
              !s(t.target).hasClass(this.params.pagination.bulletClass) &&
              (!0 ===
              this.pagination.$el.hasClass(this.params.pagination.hiddenClass)
                ? this.emit("paginationShow", this)
                : this.emit("paginationHide", this),
              this.pagination.$el.toggleClass(
                this.params.pagination.hiddenClass
              ));
          }
        }
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function e() {
          n.extend(this, {
            scrollbar: {
              init: q.init.bind(this),
              destroy: q.destroy.bind(this),
              updateSize: q.updateSize.bind(this),
              setTranslate: q.setTranslate.bind(this),
              setTransition: q.setTransition.bind(this),
              enableDraggable: q.enableDraggable.bind(this),
              disableDraggable: q.disableDraggable.bind(this),
              setDragPosition: q.setDragPosition.bind(this),
              getPointerPosition: q.getPointerPosition.bind(this),
              onDragStart: q.onDragStart.bind(this),
              onDragMove: q.onDragMove.bind(this),
              onDragEnd: q.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          });
        },
        on: {
          init: function e() {
            this.scrollbar.init(),
              this.scrollbar.updateSize(),
              this.scrollbar.setTranslate();
          },
          update: function e() {
            this.scrollbar.updateSize();
          },
          resize: function e() {
            this.scrollbar.updateSize();
          },
          observerUpdate: function e() {
            this.scrollbar.updateSize();
          },
          setTranslate: function e() {
            this.scrollbar.setTranslate();
          },
          setTransition: function e(t) {
            this.scrollbar.setTransition(t);
          },
          destroy: function e() {
            this.scrollbar.destroy();
          }
        }
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function e() {
          n.extend(this, {
            parallax: {
              setTransform: F.setTransform.bind(this),
              setTranslate: F.setTranslate.bind(this),
              setTransition: F.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit: function e() {
            var t = this;
            t.params.parallax.enabled &&
              ((t.params.watchSlidesProgress = !0),
              (t.originalParams.watchSlidesProgress = !0));
          },
          init: function e() {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTranslate: function e() {
            this.params.parallax.enabled && this.parallax.setTranslate();
          },
          setTransition: function e(t) {
            this.params.parallax.enabled && this.parallax.setTransition(t);
          }
        }
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function e() {
          var t = this,
            i = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (e) {
              i[e] = j[e].bind(t);
            }),
            n.extend(t, { zoom: i });
          var s = 1;
          Object.defineProperty(t.zoom, "scale", {
            get: function e() {
              return s;
            },
            set: function e(i) {
              if (s !== i) {
                var a = t.zoom.gesture.$imageEl
                    ? t.zoom.gesture.$imageEl[0]
                    : void 0,
                  r = t.zoom.gesture.$slideEl
                    ? t.zoom.gesture.$slideEl[0]
                    : void 0;
                t.emit("zoomChange", i, a, r);
              }
              s = i;
            }
          });
        },
        on: {
          init: function e() {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function e() {
            this.zoom.disable();
          },
          touchStart: function e(t) {
            this.zoom.enabled && this.zoom.onTouchStart(t);
          },
          touchEnd: function e(t) {
            this.zoom.enabled && this.zoom.onTouchEnd(t);
          },
          doubleTap: function e(t) {
            this.params.zoom.enabled &&
              this.zoom.enabled &&
              this.params.zoom.toggle &&
              this.zoom.toggle(t);
          },
          transitionEnd: function e() {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.zoom.onTransitionEnd();
          },
          slideChange: function e() {
            this.zoom.enabled &&
              this.params.zoom.enabled &&
              this.params.cssMode &&
              this.zoom.onTransitionEnd();
          }
        }
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function e() {
          n.extend(this, {
            lazy: {
              initialImageLoaded: !1,
              load: K.load.bind(this),
              loadInSlide: K.loadInSlide.bind(this)
            }
          });
        },
        on: {
          beforeInit: function e() {
            var t = this;
            t.params.lazy.enabled &&
              t.params.preloadImages &&
              (t.params.preloadImages = !1);
          },
          init: function e() {
            this.params.lazy.enabled &&
              !this.params.loop &&
              0 === this.params.initialSlide &&
              this.lazy.load();
          },
          scroll: function e() {
            this.params.freeMode &&
              !this.params.freeModeSticky &&
              this.lazy.load();
          },
          resize: function e() {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function e() {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function e() {
            this.params.lazy.enabled &&
              (this.params.lazy.loadOnTransitionStart ||
                (!this.params.lazy.loadOnTransitionStart &&
                  !this.lazy.initialImageLoaded)) &&
              this.lazy.load();
          },
          transitionEnd: function e() {
            this.params.lazy.enabled &&
              !this.params.lazy.loadOnTransitionStart &&
              this.lazy.load();
          },
          slideChange: function e() {
            this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
          }
        }
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function e() {
          n.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: U.getInterpolateFunction.bind(this),
              setTranslate: U.setTranslate.bind(this),
              setTransition: U.setTransition.bind(this)
            }
          });
        },
        on: {
          update: function e() {
            var t = this;
            t.controller.control &&
              t.controller.spline &&
              ((t.controller.spline = void 0), delete t.controller.spline);
          },
          resize: function e() {
            var t = this;
            t.controller.control &&
              t.controller.spline &&
              ((t.controller.spline = void 0), delete t.controller.spline);
          },
          observerUpdate: function e() {
            var t = this;
            t.controller.control &&
              t.controller.spline &&
              ((t.controller.spline = void 0), delete t.controller.spline);
          },
          setTranslate: function e(t, i) {
            this.controller.control && this.controller.setTranslate(t, i);
          },
          setTransition: function e(t, i) {
            this.controller.control && this.controller.setTransition(t, i);
          }
        }
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create: function e() {
          var t = this;
          n.extend(t, {
            a11y: {
              liveRegion: s(
                '<span class="' +
                  t.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>'
              )
            }
          }),
            Object.keys(Z).forEach(function (e) {
              t.a11y[e] = Z[e].bind(t);
            });
        },
        on: {
          init: function e() {
            this.params.a11y.enabled &&
              (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function e() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function e() {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function e() {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function e() {
            this.params.a11y.enabled && this.a11y.destroy();
          }
        }
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function e() {
          n.extend(this, {
            history: {
              init: Q.init.bind(this),
              setHistory: Q.setHistory.bind(this),
              setHistoryPopState: Q.setHistoryPopState.bind(this),
              scrollToSlide: Q.scrollToSlide.bind(this),
              destroy: Q.destroy.bind(this)
            }
          });
        },
        on: {
          init: function e() {
            this.params.history.enabled && this.history.init();
          },
          destroy: function e() {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function e() {
            this.history.initialized &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          },
          slideChange: function e() {
            this.history.initialized &&
              this.params.cssMode &&
              this.history.setHistory(
                this.params.history.key,
                this.activeIndex
              );
          }
        }
      },
      {
        name: "hash-navigation",
        params: {
          hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 }
        },
        create: function e() {
          n.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: J.init.bind(this),
              destroy: J.destroy.bind(this),
              setHash: J.setHash.bind(this),
              onHashCange: J.onHashCange.bind(this)
            }
          });
        },
        on: {
          init: function e() {
            this.params.hashNavigation.enabled && this.hashNavigation.init();
          },
          destroy: function e() {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
          },
          transitionEnd: function e() {
            this.hashNavigation.initialized && this.hashNavigation.setHash();
          },
          slideChange: function e() {
            this.hashNavigation.initialized &&
              this.params.cssMode &&
              this.hashNavigation.setHash();
          }
        }
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create: function e() {
          var t = this;
          n.extend(t, {
            autoplay: {
              running: !1,
              paused: !1,
              run: ee.run.bind(t),
              start: ee.start.bind(t),
              stop: ee.stop.bind(t),
              pause: ee.pause.bind(t),
              onVisibilityChange: function e() {
                "hidden" === document.visibilityState &&
                  t.autoplay.running &&
                  t.autoplay.pause(),
                  "visible" === document.visibilityState &&
                    t.autoplay.paused &&
                    (t.autoplay.run(), (t.autoplay.paused = !1));
              },
              onTransitionEnd: function e(i) {
                t &&
                  !t.destroyed &&
                  t.$wrapperEl &&
                  i.target === this &&
                  (t.$wrapperEl[0].removeEventListener(
                    "transitionend",
                    t.autoplay.onTransitionEnd
                  ),
                  t.$wrapperEl[0].removeEventListener(
                    "webkitTransitionEnd",
                    t.autoplay.onTransitionEnd
                  ),
                  (t.autoplay.paused = !1),
                  t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
              }
            }
          });
        },
        on: {
          init: function e() {
            this.params.autoplay.enabled &&
              (this.autoplay.start(),
              document.addEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              ));
          },
          beforeTransitionStart: function e(t, i) {
            this.autoplay.running &&
              (i || !this.params.autoplay.disableOnInteraction
                ? this.autoplay.pause(t)
                : this.autoplay.stop());
          },
          sliderFirstMove: function e() {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction
                ? this.autoplay.stop()
                : this.autoplay.pause());
          },
          touchEnd: function e() {
            this.params.cssMode &&
              this.autoplay.paused &&
              !this.params.autoplay.disableOnInteraction &&
              this.autoplay.run();
          },
          destroy: function e() {
            this.autoplay.running && this.autoplay.stop(),
              document.removeEventListener(
                "visibilitychange",
                this.autoplay.onVisibilityChange
              );
          }
        }
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function e() {
          n.extend(this, {
            fadeEffect: {
              setTranslate: et.setTranslate.bind(this),
              setTransition: et.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit: function e() {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              n.extend(this.params, t), n.extend(this.originalParams, t);
            }
          },
          setTranslate: function e() {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition: function e(t) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(t);
          }
        }
      },
      {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94
          }
        },
        create: function e() {
          n.extend(this, {
            cubeEffect: {
              setTranslate: ei.setTranslate.bind(this),
              setTransition: ei.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit: function e() {
            if ("cube" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "cube"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              n.extend(this.params, t), n.extend(this.originalParams, t);
            }
          },
          setTranslate: function e() {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition: function e(t) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(t);
          }
        }
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function e() {
          n.extend(this, {
            flipEffect: {
              setTranslate: es.setTranslate.bind(this),
              setTransition: es.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit: function e() {
            if ("flip" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "flip"),
                this.classNames.push(this.params.containerModifierClass + "3d");
              var t = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              n.extend(this.params, t), n.extend(this.originalParams, t);
            }
          },
          setTranslate: function e() {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition: function e(t) {
            "flip" === this.params.effect && this.flipEffect.setTransition(t);
          }
        }
      },
      {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function e() {
          n.extend(this, {
            coverflowEffect: {
              setTranslate: ea.setTranslate.bind(this),
              setTransition: ea.setTransition.bind(this)
            }
          });
        },
        on: {
          beforeInit: function e() {
            var t = this;
            "coverflow" === t.params.effect &&
              (t.classNames.push(t.params.containerModifierClass + "coverflow"),
              t.classNames.push(t.params.containerModifierClass + "3d"),
              (t.params.watchSlidesProgress = !0),
              (t.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function e() {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTranslate();
          },
          setTransition: function e(t) {
            "coverflow" === this.params.effect &&
              this.coverflowEffect.setTransition(t);
          }
        }
      },
      {
        name: "thumbs",
        params: {
          thumbs: {
            multipleActiveThumbs: !0,
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
          }
        },
        create: function e() {
          n.extend(this, {
            thumbs: {
              swiper: null,
              init: er.init.bind(this),
              update: er.update.bind(this),
              onThumbClick: er.onThumbClick.bind(this)
            }
          });
        },
        on: {
          beforeInit: function e() {
            var t = this.params.thumbs;
            t && t.swiper && (this.thumbs.init(), this.thumbs.update(!0));
          },
          slideChange: function e() {
            this.thumbs.swiper && this.thumbs.update();
          },
          update: function e() {
            this.thumbs.swiper && this.thumbs.update();
          },
          resize: function e() {
            this.thumbs.swiper && this.thumbs.update();
          },
          observerUpdate: function e() {
            this.thumbs.swiper && this.thumbs.update();
          },
          setTransition: function e(t) {
            var i = this.thumbs.swiper;
            i && i.setTransition(t);
          },
          beforeDestroy: function e() {
            var t = this.thumbs.swiper;
            t && this.thumbs.swiperCreated && t && t.destroy();
          }
        }
      }
    ];
  return (
    void 0 === H.use &&
      ((H.use = H.Class.use), (H.installModule = H.Class.installModule)),
    H.use(en),
    H
  );
});
//# sourceMappingURL=bundle.js.map
