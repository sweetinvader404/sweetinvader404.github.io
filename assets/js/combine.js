/******************************Hamburger****************************** */

/******************************End Hamburger****************************** */
/******************************Neural****************************** */

/******************************End Neural****************************** */
/****************************** TypeWriter****************************** */

/******************************End TypeWriter****************************** */
/******************************Skills****************************** */
if (typeof RocketLoader === "undefined") {
  window.addEventListener("DOMContentLoaded", function () {
    var e = document.querySelector(".skills");
    e.getBoundingClientRect().top;
    var t = window.innerHeight,
      r = !1;
    function n(e) {
      e.forEach(function (e) {
        e.isIntersecting &&
          !r &&
          (document.querySelectorAll(".progress-bar").forEach(function (e) {
            var t = e.querySelector(".progress-fill"),
              r = e.querySelector(".progress-text");
            (t.style.width = e.getAttribute("data-progress") + "%"),
              (r.textContent = e.getAttribute("data-progress") + "%");
          }),
          (r = !0));
      });
    }
    window.addEventListener("scroll", function o() {
      e.getBoundingClientRect().top < t &&
        !r &&
        new IntersectionObserver(n, {
          root: null,
          rootMargin: "0px",
          threshold: 0
        }).observe(e);
    });
  });
}

/******************************End Skills****************************** */
/******************************Portfolio****************************** */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".button").forEach(function (e) {
    e.addEventListener("click", function () {
      this.classList.add("active"),
        Array.from(this.parentNode.children)
          .filter(function (e) {
            return e !== this;
          }, this)
          .forEach(function (e) {
            e.classList.remove("active");
          });
      var e = this.getAttribute("data-filter");
      document.querySelectorAll(".gallery .image").forEach(function (t) {
        "all" === e
          ? (t.style.display = "block")
          : t.classList.contains(e)
          ? (t.style.display = "block")
          : (t.style.display = "none");
      });
    });
  });
  var e = document.querySelector(".gallery");
  e &&
    e.addEventListener("click", function (e) {
      var t = e.target;
      if ("A" === t.tagName) {
        e.preventDefault();
        var a = {
          type: "image",
          removalDelay: 500,
          gallery: { enabled: !0 },
          callbacks: {
            beforeOpen: function () {
              (this.st.image.markup = this.st.image.markup.replace(
                "mfp-figure",
                "mfp-figure mfp-with-anim"
              )),
                (this.st.mainClass = this.st.el.getAttribute("data-effect"));
            }
          },
          closeOnContentClick: !0,
          midClick: !0
        };
        void 0 !== t.dataset.magnificPopup &&
          Object.assign(a, JSON.parse(t.dataset.magnificPopup)),
          new MagnificPopup(t, a).open();
      }
    });
});

/******************************End Portfolio****************************** */
/******************************Swiper****************************** */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).Swiper = t());
})(this, function () {
  "use strict";
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
    var e,
      t = this,
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
    (e = 0 === a ? 0 : (t.translate - t.minTranslate()) / a) !== t.progress &&
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
          var s,
            a = this,
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
          (s = 0 === c ? 0 : (t - a.minTranslate()) / c) !== d &&
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
          var t,
            i = this;
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
                : (t =
                    ("auto" === i.params.slidesPerView ||
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
        var i,
          s = t.targetTouches[0].pageX,
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
        var i,
          s = t.location.pathname
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

/******************************End Swiper****************************** */
/******************************Testimonials****************************** */
var swiper = new Swiper(".testimonial-slider", {
  spaceBetween: 20,
  loop: !0,
  autoplay: { delay: 3e3, disableOnInteraction: !1 },
  pagination: { el: ".swiper-pagination1", clickable: !0 },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/******************************End Testimonial****************************** */
/******************************Blog****************************** */
var swiper = new Swiper(".blog-slider", {
  spaceBetween: 20,
  loop: !0,
  autoplay: { display: 2500, disableOnInteraction: !1 },
  pagination: { el: ".swiper-pagination2", clickable: !0 },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/******************************End Blog****************************** */
/******************************Worker****************************** */
addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

const VERIFY_TOKEN = "6f138653b4276842863935f2a97f0aacsssfdss";

async function handleRequest(request) {
  // Verify the request method
  if (request.method === "GET") {
    const url = new URL(request.url);
    const mode = url.searchParams.get("hub.mode");
    const token = url.searchParams.get("hub.verify_token");
    const challenge = url.searchParams.get("hub.challenge");

    // Verify the token
    if (mode === "subscribe" && token === VERIFY_TOKEN) {
      return new Response(challenge, { status: 200 });
    } else {
      return new Response("Verification Failed", { status: 403 });
    }
  } else if (request.method === "POST") {
    // Verify the request headers
    const contentType = request.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      return new Response("Invalid Content Type", { status: 400 });
    }

    // Verify the request body
    const body = await request.json();
    if (!body || !body.entry || !body.entry.length) {
      return new Response("Invalid Request Body", { status: 400 });
    }

    // Process the request body
    for (const entry of body.entry) {
      if (entry.messaging) {
        for (const event of entry.messaging) {
          // Handle each event in the entry.messaging array
          // Add your custom logic here to process each Facebook Messenger event
          // You can access the event data from the `event` object
        }
      }
    }

    // Return a response
    return new Response("OK", { status: 200 });
  } else {
    return new Response("Method Not Allowed", { status: 405 });
  }
}

/******************************End Worker****************************** */
/******************************Script****************************** */
function updateActiveLink(e) {
  e.forEach(e => {
    let t = e.target.getAttribute("id"),
      a = document.querySelector(`.navbar a[href="#${t}"]`);
    a &&
      (e.isIntersecting
        ? a.classList.add("active")
        : a.classList.remove("active"));
  });
}
document.addEventListener("DOMContentLoaded", function () {
  let e = document.querySelector(".rounded-image"),
    t = e.dataset.src,
    a = new Image();
  (a.src = t),
    (a.onload = function () {
      e.src = t;
    });
});
const observer = new IntersectionObserver(updateActiveLink, { threshold: 0.5 }),
  sections = document.querySelectorAll("section");
function updateNavigationStyle() {
  var e = document.querySelector(".header");
  window.scrollY > 0 ? e.classList.add("active") : e.classList.remove("active");
}
sections.forEach(e => {
  observer.observe(e);
}),
  window.addEventListener("scroll", updateNavigationStyle),
  updateNavigationStyle();

/***************************Facebook live chat************ */
/****************Official FACEBOOK SDK****************** */
window.fbAsyncInit = function () {
  FB.init({
    appId: "591873306363263",
    autoLogAppEvents: true,
    xfbml: true,
    version: "v13.0"
  });
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
/******************************End Script****************************** */
/******************************Leaflet****************************** */
/* @preserve
 * Leaflet 1.7.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2019 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!(function (t, i) {
  "object" == typeof exports && "undefined" != typeof module
    ? i(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], i)
    : i((t.L = {}));
})(this, function (t) {
  "use strict";
  function h(t) {
    for (var i, e, n = 1, o = arguments.length; n < o; n++)
      for (i in (e = arguments[n])) t[i] = e[i];
    return t;
  }
  var s =
    Object.create ||
    function (t) {
      return (i.prototype = t), new i();
    };
  function i() {}
  function p(t, i) {
    var e = Array.prototype.slice;
    if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
    var n = e.call(arguments, 2);
    return function () {
      return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments);
    };
  }
  var e = 0;
  function m(t) {
    return (t._leaflet_id = t._leaflet_id || ++e), t._leaflet_id;
  }
  function n(t, i, e) {
    var n,
      o,
      s = function () {
        (n = !1), o && (r.apply(e, o), (o = !1));
      },
      r = function () {
        n
          ? (o = arguments)
          : (t.apply(e, arguments), setTimeout(s, i), (n = !0));
      };
    return r;
  }
  function o(t, i, e) {
    var n = i[1],
      o = i[0],
      s = n - o;
    return t === n && e ? t : ((((t - o) % s) + s) % s) + o;
  }
  function a() {
    return !1;
  }
  function r(t, i) {
    var e = Math.pow(10, void 0 === i ? 6 : i);
    return Math.round(t * e) / e;
  }
  function u(t) {
    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
  }
  function l(t) {
    return u(t).split(/\s+/);
  }
  function c(t, i) {
    for (var e in (Object.prototype.hasOwnProperty.call(t, "options") ||
      (t.options = t.options ? s(t.options) : {}),
    i))
      t.options[e] = i[e];
    return t.options;
  }
  function _(t, i, e) {
    var n = [];
    for (var o in t)
      n.push(
        encodeURIComponent(e ? o.toUpperCase() : o) +
          "=" +
          encodeURIComponent(t[o])
      );
    return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&");
  }
  var d = /\{ *([\w_-]+) *\}/g;
  function f(t, n) {
    return t.replace(d, function (t, i) {
      var e = n[i];
      if (void 0 === e) throw new Error("No value provided for variable " + t);
      return "function" == typeof e && (e = e(n)), e;
    });
  }
  var g =
    Array.isArray ||
    function (t) {
      return "[object Array]" === Object.prototype.toString.call(t);
    };
  function v(t, i) {
    for (var e = 0; e < t.length; e++) if (t[e] === i) return e;
    return -1;
  }
  var y = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
  function x(t) {
    return window["webkit" + t] || window["moz" + t] || window["ms" + t];
  }
  var w = 0;
  function P(t) {
    var i = +new Date(),
      e = Math.max(0, 16 - (i - w));
    return (w = i + e), window.setTimeout(t, e);
  }
  var b = window.requestAnimationFrame || x("RequestAnimationFrame") || P,
    T =
      window.cancelAnimationFrame ||
      x("CancelAnimationFrame") ||
      x("CancelRequestAnimationFrame") ||
      function (t) {
        window.clearTimeout(t);
      };
  function M(t, i, e) {
    if (!e || b !== P) return b.call(window, p(t, i));
    t.call(i);
  }
  function z(t) {
    t && T.call(window, t);
  }
  var C = {
    extend: h,
    create: s,
    bind: p,
    lastId: e,
    stamp: m,
    throttle: n,
    wrapNum: o,
    falseFn: a,
    formatNum: r,
    trim: u,
    splitWords: l,
    setOptions: c,
    getParamString: _,
    template: f,
    isArray: g,
    indexOf: v,
    emptyImageUrl: y,
    requestFn: b,
    cancelFn: T,
    requestAnimFrame: M,
    cancelAnimFrame: z
  };
  function S() {}
  (S.extend = function (t) {
    function i() {
      this.initialize && this.initialize.apply(this, arguments),
        this.callInitHooks();
    }
    var e = (i.__super__ = this.prototype),
      n = s(e);
    for (var o in (((n.constructor = i).prototype = n), this))
      Object.prototype.hasOwnProperty.call(this, o) &&
        "prototype" !== o &&
        "__super__" !== o &&
        (i[o] = this[o]);
    return (
      t.statics && (h(i, t.statics), delete t.statics),
      t.includes &&
        ((function (t) {
          if ("undefined" == typeof L || !L || !L.Mixin) return;
          t = g(t) ? t : [t];
          for (var i = 0; i < t.length; i++)
            t[i] === L.Mixin.Events &&
              console.warn(
                "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                new Error().stack
              );
        })(t.includes),
        h.apply(null, [n].concat(t.includes)),
        delete t.includes),
      n.options && (t.options = h(s(n.options), t.options)),
      h(n, t),
      (n._initHooks = []),
      (n.callInitHooks = function () {
        if (!this._initHooksCalled) {
          e.callInitHooks && e.callInitHooks.call(this),
            (this._initHooksCalled = !0);
          for (var t = 0, i = n._initHooks.length; t < i; t++)
            n._initHooks[t].call(this);
        }
      }),
      i
    );
  }),
    (S.include = function (t) {
      return h(this.prototype, t), this;
    }),
    (S.mergeOptions = function (t) {
      return h(this.prototype.options, t), this;
    }),
    (S.addInitHook = function (t) {
      var i = Array.prototype.slice.call(arguments, 1),
        e =
          "function" == typeof t
            ? t
            : function () {
                this[t].apply(this, i);
              };
      return (
        (this.prototype._initHooks = this.prototype._initHooks || []),
        this.prototype._initHooks.push(e),
        this
      );
    });
  var Z = {
    on: function (t, i, e) {
      if ("object" == typeof t) for (var n in t) this._on(n, t[n], i);
      else
        for (var o = 0, s = (t = l(t)).length; o < s; o++) this._on(t[o], i, e);
      return this;
    },
    off: function (t, i, e) {
      if (t)
        if ("object" == typeof t) for (var n in t) this._off(n, t[n], i);
        else
          for (var o = 0, s = (t = l(t)).length; o < s; o++)
            this._off(t[o], i, e);
      else delete this._events;
      return this;
    },
    _on: function (t, i, e) {
      this._events = this._events || {};
      var n = this._events[t];
      n || ((n = []), (this._events[t] = n)), e === this && (e = void 0);
      for (var o = { fn: i, ctx: e }, s = n, r = 0, a = s.length; r < a; r++)
        if (s[r].fn === i && s[r].ctx === e) return;
      s.push(o);
    },
    _off: function (t, i, e) {
      var n, o, s;
      if (this._events && (n = this._events[t]))
        if (i) {
          if ((e === this && (e = void 0), n))
            for (o = 0, s = n.length; o < s; o++) {
              var r = n[o];
              if (r.ctx === e && r.fn === i)
                return (
                  (r.fn = a),
                  this._firingCount && (this._events[t] = n = n.slice()),
                  void n.splice(o, 1)
                );
            }
        } else {
          for (o = 0, s = n.length; o < s; o++) n[o].fn = a;
          delete this._events[t];
        }
    },
    fire: function (t, i, e) {
      if (!this.listens(t, e)) return this;
      var n = h({}, i, {
        type: t,
        target: this,
        sourceTarget: (i && i.sourceTarget) || this
      });
      if (this._events) {
        var o = this._events[t];
        if (o) {
          this._firingCount = this._firingCount + 1 || 1;
          for (var s = 0, r = o.length; s < r; s++) {
            var a = o[s];
            a.fn.call(a.ctx || this, n);
          }
          this._firingCount--;
        }
      }
      return e && this._propagateEvent(n), this;
    },
    listens: function (t, i) {
      var e = this._events && this._events[t];
      if (e && e.length) return !0;
      if (i)
        for (var n in this._eventParents)
          if (this._eventParents[n].listens(t, i)) return !0;
      return !1;
    },
    once: function (t, i, e) {
      if ("object" == typeof t) {
        for (var n in t) this.once(n, t[n], i);
        return this;
      }
      var o = p(function () {
        this.off(t, i, e).off(t, o, e);
      }, this);
      return this.on(t, i, e).on(t, o, e);
    },
    addEventParent: function (t) {
      return (
        (this._eventParents = this._eventParents || {}),
        (this._eventParents[m(t)] = t),
        this
      );
    },
    removeEventParent: function (t) {
      return this._eventParents && delete this._eventParents[m(t)], this;
    },
    _propagateEvent: function (t) {
      for (var i in this._eventParents)
        this._eventParents[i].fire(
          t.type,
          h({ layer: t.target, propagatedFrom: t.target }, t),
          !0
        );
    }
  };
  (Z.addEventListener = Z.on),
    (Z.removeEventListener = Z.clearAllEventListeners = Z.off),
    (Z.addOneTimeEventListener = Z.once),
    (Z.fireEvent = Z.fire),
    (Z.hasEventListeners = Z.listens);
  var E = S.extend(Z);
  function k(t, i, e) {
    (this.x = e ? Math.round(t) : t), (this.y = e ? Math.round(i) : i);
  }
  var B =
    Math.trunc ||
    function (t) {
      return 0 < t ? Math.floor(t) : Math.ceil(t);
    };
  function A(t, i, e) {
    return t instanceof k
      ? t
      : g(t)
      ? new k(t[0], t[1])
      : null == t
      ? t
      : "object" == typeof t && "x" in t && "y" in t
      ? new k(t.x, t.y)
      : new k(t, i, e);
  }
  function I(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function O(t, i) {
    return !t || t instanceof I ? t : new I(t, i);
  }
  function R(t, i) {
    if (t)
      for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++)
        this.extend(e[n]);
  }
  function N(t, i) {
    return t instanceof R ? t : new R(t, i);
  }
  function D(t, i, e) {
    if (isNaN(t) || isNaN(i))
      throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
    (this.lat = +t), (this.lng = +i), void 0 !== e && (this.alt = +e);
  }
  function j(t, i, e) {
    return t instanceof D
      ? t
      : g(t) && "object" != typeof t[0]
      ? 3 === t.length
        ? new D(t[0], t[1], t[2])
        : 2 === t.length
        ? new D(t[0], t[1])
        : null
      : null == t
      ? t
      : "object" == typeof t && "lat" in t
      ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
      : void 0 === i
      ? null
      : new D(t, i, e);
  }
  (k.prototype = {
    clone: function () {
      return new k(this.x, this.y);
    },
    add: function (t) {
      return this.clone()._add(A(t));
    },
    _add: function (t) {
      return (this.x += t.x), (this.y += t.y), this;
    },
    subtract: function (t) {
      return this.clone()._subtract(A(t));
    },
    _subtract: function (t) {
      return (this.x -= t.x), (this.y -= t.y), this;
    },
    divideBy: function (t) {
      return this.clone()._divideBy(t);
    },
    _divideBy: function (t) {
      return (this.x /= t), (this.y /= t), this;
    },
    multiplyBy: function (t) {
      return this.clone()._multiplyBy(t);
    },
    _multiplyBy: function (t) {
      return (this.x *= t), (this.y *= t), this;
    },
    scaleBy: function (t) {
      return new k(this.x * t.x, this.y * t.y);
    },
    unscaleBy: function (t) {
      return new k(this.x / t.x, this.y / t.y);
    },
    round: function () {
      return this.clone()._round();
    },
    _round: function () {
      return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
    },
    floor: function () {
      return this.clone()._floor();
    },
    _floor: function () {
      return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
    },
    ceil: function () {
      return this.clone()._ceil();
    },
    _ceil: function () {
      return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
    },
    trunc: function () {
      return this.clone()._trunc();
    },
    _trunc: function () {
      return (this.x = B(this.x)), (this.y = B(this.y)), this;
    },
    distanceTo: function (t) {
      var i = (t = A(t)).x - this.x,
        e = t.y - this.y;
      return Math.sqrt(i * i + e * e);
    },
    equals: function (t) {
      return (t = A(t)).x === this.x && t.y === this.y;
    },
    contains: function (t) {
      return (
        (t = A(t)),
        Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
      );
    },
    toString: function () {
      return "Point(" + r(this.x) + ", " + r(this.y) + ")";
    }
  }),
    (I.prototype = {
      extend: function (t) {
        return (
          (t = A(t)),
          this.min || this.max
            ? ((this.min.x = Math.min(t.x, this.min.x)),
              (this.max.x = Math.max(t.x, this.max.x)),
              (this.min.y = Math.min(t.y, this.min.y)),
              (this.max.y = Math.max(t.y, this.max.y)))
            : ((this.min = t.clone()), (this.max = t.clone())),
          this
        );
      },
      getCenter: function (t) {
        return new k(
          (this.min.x + this.max.x) / 2,
          (this.min.y + this.max.y) / 2,
          t
        );
      },
      getBottomLeft: function () {
        return new k(this.min.x, this.max.y);
      },
      getTopRight: function () {
        return new k(this.max.x, this.min.y);
      },
      getTopLeft: function () {
        return this.min;
      },
      getBottomRight: function () {
        return this.max;
      },
      getSize: function () {
        return this.max.subtract(this.min);
      },
      contains: function (t) {
        var i, e;
        return (
          (t = ("number" == typeof t[0] || t instanceof k ? A : O)(
            t
          )) instanceof I
            ? ((i = t.min), (e = t.max))
            : (i = e = t),
          i.x >= this.min.x &&
            e.x <= this.max.x &&
            i.y >= this.min.y &&
            e.y <= this.max.y
        );
      },
      intersects: function (t) {
        t = O(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x >= i.x && n.x <= e.x,
          r = o.y >= i.y && n.y <= e.y;
        return s && r;
      },
      overlaps: function (t) {
        t = O(t);
        var i = this.min,
          e = this.max,
          n = t.min,
          o = t.max,
          s = o.x > i.x && n.x < e.x,
          r = o.y > i.y && n.y < e.y;
        return s && r;
      },
      isValid: function () {
        return !(!this.min || !this.max);
      }
    }),
    (R.prototype = {
      extend: function (t) {
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        if (t instanceof D) e = i = t;
        else {
          if (!(t instanceof R)) return t ? this.extend(j(t) || N(t)) : this;
          if (((i = t._southWest), (e = t._northEast), !i || !e)) return this;
        }
        return (
          n || o
            ? ((n.lat = Math.min(i.lat, n.lat)),
              (n.lng = Math.min(i.lng, n.lng)),
              (o.lat = Math.max(e.lat, o.lat)),
              (o.lng = Math.max(e.lng, o.lng)))
            : ((this._southWest = new D(i.lat, i.lng)),
              (this._northEast = new D(e.lat, e.lng))),
          this
        );
      },
      pad: function (t) {
        var i = this._southWest,
          e = this._northEast,
          n = Math.abs(i.lat - e.lat) * t,
          o = Math.abs(i.lng - e.lng) * t;
        return new R(new D(i.lat - n, i.lng - o), new D(e.lat + n, e.lng + o));
      },
      getCenter: function () {
        return new D(
          (this._southWest.lat + this._northEast.lat) / 2,
          (this._southWest.lng + this._northEast.lng) / 2
        );
      },
      getSouthWest: function () {
        return this._southWest;
      },
      getNorthEast: function () {
        return this._northEast;
      },
      getNorthWest: function () {
        return new D(this.getNorth(), this.getWest());
      },
      getSouthEast: function () {
        return new D(this.getSouth(), this.getEast());
      },
      getWest: function () {
        return this._southWest.lng;
      },
      getSouth: function () {
        return this._southWest.lat;
      },
      getEast: function () {
        return this._northEast.lng;
      },
      getNorth: function () {
        return this._northEast.lat;
      },
      contains: function (t) {
        t = ("number" == typeof t[0] || t instanceof D || "lat" in t ? j : N)(
          t
        );
        var i,
          e,
          n = this._southWest,
          o = this._northEast;
        return (
          t instanceof R
            ? ((i = t.getSouthWest()), (e = t.getNorthEast()))
            : (i = e = t),
          i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        );
      },
      intersects: function (t) {
        t = N(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat >= i.lat && n.lat <= e.lat,
          r = o.lng >= i.lng && n.lng <= e.lng;
        return s && r;
      },
      overlaps: function (t) {
        t = N(t);
        var i = this._southWest,
          e = this._northEast,
          n = t.getSouthWest(),
          o = t.getNorthEast(),
          s = o.lat > i.lat && n.lat < e.lat,
          r = o.lng > i.lng && n.lng < e.lng;
        return s && r;
      },
      toBBoxString: function () {
        return [
          this.getWest(),
          this.getSouth(),
          this.getEast(),
          this.getNorth()
        ].join(",");
      },
      equals: function (t, i) {
        return (
          !!t &&
          ((t = N(t)),
          this._southWest.equals(t.getSouthWest(), i) &&
            this._northEast.equals(t.getNorthEast(), i))
        );
      },
      isValid: function () {
        return !(!this._southWest || !this._northEast);
      }
    });
  var W,
    H = {
      latLngToPoint: function (t, i) {
        var e = this.projection.project(t),
          n = this.scale(i);
        return this.transformation._transform(e, n);
      },
      pointToLatLng: function (t, i) {
        var e = this.scale(i),
          n = this.transformation.untransform(t, e);
        return this.projection.unproject(n);
      },
      project: function (t) {
        return this.projection.project(t);
      },
      unproject: function (t) {
        return this.projection.unproject(t);
      },
      scale: function (t) {
        return 256 * Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t / 256) / Math.LN2;
      },
      getProjectedBounds: function (t) {
        if (this.infinite) return null;
        var i = this.projection.bounds,
          e = this.scale(t);
        return new I(
          this.transformation.transform(i.min, e),
          this.transformation.transform(i.max, e)
        );
      },
      infinite: !(D.prototype = {
        equals: function (t, i) {
          return (
            !!t &&
            ((t = j(t)),
            Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <=
              (void 0 === i ? 1e-9 : i))
          );
        },
        toString: function (t) {
          return "LatLng(" + r(this.lat, t) + ", " + r(this.lng, t) + ")";
        },
        distanceTo: function (t) {
          return F.distance(this, j(t));
        },
        wrap: function () {
          return F.wrapLatLng(this);
        },
        toBounds: function (t) {
          var i = (180 * t) / 40075017,
            e = i / Math.cos((Math.PI / 180) * this.lat);
          return N([this.lat - i, this.lng - e], [this.lat + i, this.lng + e]);
        },
        clone: function () {
          return new D(this.lat, this.lng, this.alt);
        }
      }),
      wrapLatLng: function (t) {
        var i = this.wrapLng ? o(t.lng, this.wrapLng, !0) : t.lng;
        return new D(
          this.wrapLat ? o(t.lat, this.wrapLat, !0) : t.lat,
          i,
          t.alt
        );
      },
      wrapLatLngBounds: function (t) {
        var i = t.getCenter(),
          e = this.wrapLatLng(i),
          n = i.lat - e.lat,
          o = i.lng - e.lng;
        if (0 == n && 0 == o) return t;
        var s = t.getSouthWest(),
          r = t.getNorthEast();
        return new R(new D(s.lat - n, s.lng - o), new D(r.lat - n, r.lng - o));
      }
    },
    F = h({}, H, {
      wrapLng: [-180, 180],
      R: 6371e3,
      distance: function (t, i) {
        var e = Math.PI / 180,
          n = t.lat * e,
          o = i.lat * e,
          s = Math.sin(((i.lat - t.lat) * e) / 2),
          r = Math.sin(((i.lng - t.lng) * e) / 2),
          a = s * s + Math.cos(n) * Math.cos(o) * r * r,
          h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return this.R * h;
      }
    }),
    U = 6378137,
    V = {
      R: U,
      MAX_LATITUDE: 85.0511287798,
      project: function (t) {
        var i = Math.PI / 180,
          e = this.MAX_LATITUDE,
          n = Math.max(Math.min(e, t.lat), -e),
          o = Math.sin(n * i);
        return new k(
          this.R * t.lng * i,
          (this.R * Math.log((1 + o) / (1 - o))) / 2
        );
      },
      unproject: function (t) {
        var i = 180 / Math.PI;
        return new D(
          (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i,
          (t.x * i) / this.R
        );
      },
      bounds: new I([-(W = U * Math.PI), -W], [W, W])
    };
  function q(t, i, e, n) {
    if (g(t))
      return (
        (this._a = t[0]),
        (this._b = t[1]),
        (this._c = t[2]),
        void (this._d = t[3])
      );
    (this._a = t), (this._b = i), (this._c = e), (this._d = n);
  }
  function G(t, i, e, n) {
    return new q(t, i, e, n);
  }
  q.prototype = {
    transform: function (t, i) {
      return this._transform(t.clone(), i);
    },
    _transform: function (t, i) {
      return (
        (i = i || 1),
        (t.x = i * (this._a * t.x + this._b)),
        (t.y = i * (this._c * t.y + this._d)),
        t
      );
    },
    untransform: function (t, i) {
      return (
        (i = i || 1),
        new k((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
      );
    }
  };
  var K,
    Y = h({}, F, {
      code: "EPSG:3857",
      projection: V,
      transformation: G((K = 0.5 / (Math.PI * V.R)), 0.5, -K, 0.5)
    }),
    X = h({}, Y, { code: "EPSG:900913" });
  function J(t) {
    return document.createElementNS("http://www.w3.org/2000/svg", t);
  }
  function $(t, i) {
    for (var e, n, o, s, r = "", a = 0, h = t.length; a < h; a++) {
      for (e = 0, n = (o = t[a]).length; e < n; e++)
        r += (e ? "L" : "M") + (s = o[e]).x + " " + s.y;
      r += i ? (Zt ? "z" : "x") : "";
    }
    return r || "M0 0";
  }
  var Q = document.documentElement.style,
    tt = "ActiveXObject" in window,
    it = tt && !document.addEventListener,
    et = "msLaunchUri" in navigator && !("documentMode" in document),
    nt = kt("webkit"),
    ot = kt("android"),
    st = kt("android 2") || kt("android 3"),
    rt = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
    at = ot && kt("Google") && rt < 537 && !("AudioNode" in window),
    ht = !!window.opera,
    ut = !et && kt("chrome"),
    lt = kt("gecko") && !nt && !ht && !tt,
    ct = !ut && kt("safari"),
    _t = kt("phantom"),
    dt = "OTransition" in Q,
    pt = 0 === navigator.platform.indexOf("Win"),
    mt = tt && "transition" in Q,
    ft =
      "WebKitCSSMatrix" in window &&
      "m11" in new window.WebKitCSSMatrix() &&
      !st,
    gt = "MozPerspective" in Q,
    vt = !window.L_DISABLE_3D && (mt || ft || gt) && !dt && !_t,
    yt = "undefined" != typeof orientation || kt("mobile"),
    xt = yt && nt,
    wt = yt && ft,
    Pt = !window.PointerEvent && window.MSPointerEvent,
    Lt = !(!window.PointerEvent && !Pt),
    bt =
      !window.L_NO_TOUCH &&
      (Lt ||
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)),
    Tt = yt && ht,
    Mt = yt && lt,
    zt =
      1 <
      (window.devicePixelRatio ||
        window.screen.deviceXDPI / window.screen.logicalXDPI),
    Ct = (function () {
      var t = !1;
      try {
        var i = Object.defineProperty({}, "passive", {
          get: function () {
            t = !0;
          }
        });
        window.addEventListener("testPassiveEventSupport", a, i),
          window.removeEventListener("testPassiveEventSupport", a, i);
      } catch (t) {}
      return t;
    })(),
    St = !!document.createElement("canvas").getContext,
    Zt = !(!document.createElementNS || !J("svg").createSVGRect),
    Et =
      !Zt &&
      (function () {
        try {
          var t = document.createElement("div");
          t.innerHTML = '<v:shape adj="1"/>';
          var i = t.firstChild;
          return (
            (i.style.behavior = "url(#default#VML)"),
            i && "object" == typeof i.adj
          );
        } catch (t) {
          return !1;
        }
      })();
  function kt(t) {
    return 0 <= navigator.userAgent.toLowerCase().indexOf(t);
  }
  var Bt = {
      ie: tt,
      ielt9: it,
      edge: et,
      webkit: nt,
      android: ot,
      android23: st,
      androidStock: at,
      opera: ht,
      chrome: ut,
      gecko: lt,
      safari: ct,
      phantom: _t,
      opera12: dt,
      win: pt,
      ie3d: mt,
      webkit3d: ft,
      gecko3d: gt,
      any3d: vt,
      mobile: yt,
      mobileWebkit: xt,
      mobileWebkit3d: wt,
      msPointer: Pt,
      pointer: Lt,
      touch: bt,
      mobileOpera: Tt,
      mobileGecko: Mt,
      retina: zt,
      passiveEvents: Ct,
      canvas: St,
      svg: Zt,
      vml: Et
    },
    At = Pt ? "MSPointerDown" : "pointerdown",
    It = Pt ? "MSPointerMove" : "pointermove",
    Ot = Pt ? "MSPointerUp" : "pointerup",
    Rt = Pt ? "MSPointerCancel" : "pointercancel",
    Nt = {},
    Dt = !1;
  function jt(t, i, e, n) {
    function o(t) {
      Ut(t, r);
    }
    var s, r, a, h, u, l, c, _;
    function d(t) {
      (t.pointerType === (t.MSPOINTER_TYPE_MOUSE || "mouse") &&
        0 === t.buttons) ||
        Ut(t, h);
    }
    return (
      "touchstart" === i
        ? ((u = t),
          (l = e),
          (c = n),
          (_ = p(function (t) {
            t.MSPOINTER_TYPE_TOUCH &&
              t.pointerType === t.MSPOINTER_TYPE_TOUCH &&
              Ri(t),
              Ut(t, l);
          })),
          (u["_leaflet_touchstart" + c] = _),
          u.addEventListener(At, _, !1),
          Dt ||
            (document.addEventListener(At, Wt, !0),
            document.addEventListener(It, Ht, !0),
            document.addEventListener(Ot, Ft, !0),
            document.addEventListener(Rt, Ft, !0),
            (Dt = !0)))
        : "touchmove" === i
        ? ((h = e),
          ((a = t)["_leaflet_touchmove" + n] = d),
          a.addEventListener(It, d, !1))
        : "touchend" === i &&
          ((r = e),
          ((s = t)["_leaflet_touchend" + n] = o),
          s.addEventListener(Ot, o, !1),
          s.addEventListener(Rt, o, !1)),
      this
    );
  }
  function Wt(t) {
    Nt[t.pointerId] = t;
  }
  function Ht(t) {
    Nt[t.pointerId] && (Nt[t.pointerId] = t);
  }
  function Ft(t) {
    delete Nt[t.pointerId];
  }
  function Ut(t, i) {
    for (var e in ((t.touches = []), Nt)) t.touches.push(Nt[e]);
    (t.changedTouches = [t]), i(t);
  }
  var Vt = Pt ? "MSPointerDown" : Lt ? "pointerdown" : "touchstart",
    qt = Pt ? "MSPointerUp" : Lt ? "pointerup" : "touchend",
    Gt = "_leaflet_";
  var Kt,
    Yt,
    Xt,
    Jt,
    $t,
    Qt,
    ti = fi([
      "transform",
      "webkitTransform",
      "OTransform",
      "MozTransform",
      "msTransform"
    ]),
    ii = fi([
      "webkitTransition",
      "transition",
      "OTransition",
      "MozTransition",
      "msTransition"
    ]),
    ei =
      "webkitTransition" === ii || "OTransition" === ii
        ? ii + "End"
        : "transitionend";
  function ni(t) {
    return "string" == typeof t ? document.getElementById(t) : t;
  }
  function oi(t, i) {
    var e,
      n = t.style[i] || (t.currentStyle && t.currentStyle[i]);
    return (
      (n && "auto" !== n) ||
        !document.defaultView ||
        (n = (e = document.defaultView.getComputedStyle(t, null))
          ? e[i]
          : null),
      "auto" === n ? null : n
    );
  }
  function si(t, i, e) {
    var n = document.createElement(t);
    return (n.className = i || ""), e && e.appendChild(n), n;
  }
  function ri(t) {
    var i = t.parentNode;
    i && i.removeChild(t);
  }
  function ai(t) {
    for (; t.firstChild; ) t.removeChild(t.firstChild);
  }
  function hi(t) {
    var i = t.parentNode;
    i && i.lastChild !== t && i.appendChild(t);
  }
  function ui(t) {
    var i = t.parentNode;
    i && i.firstChild !== t && i.insertBefore(t, i.firstChild);
  }
  function li(t, i) {
    if (void 0 !== t.classList) return t.classList.contains(i);
    var e = pi(t);
    return 0 < e.length && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e);
  }
  function ci(t, i) {
    var e;
    if (void 0 !== t.classList)
      for (var n = l(i), o = 0, s = n.length; o < s; o++) t.classList.add(n[o]);
    else li(t, i) || di(t, ((e = pi(t)) ? e + " " : "") + i);
  }
  function _i(t, i) {
    void 0 !== t.classList
      ? t.classList.remove(i)
      : di(t, u((" " + pi(t) + " ").replace(" " + i + " ", " ")));
  }
  function di(t, i) {
    void 0 === t.className.baseVal
      ? (t.className = i)
      : (t.className.baseVal = i);
  }
  function pi(t) {
    return (
      t.correspondingElement && (t = t.correspondingElement),
      void 0 === t.className.baseVal ? t.className : t.className.baseVal
    );
  }
  function mi(t, i) {
    "opacity" in t.style
      ? (t.style.opacity = i)
      : "filter" in t.style &&
        (function (t, i) {
          var e = !1,
            n = "DXImageTransform.Microsoft.Alpha";
          try {
            e = t.filters.item(n);
          } catch (t) {
            if (1 === i) return;
          }
          (i = Math.round(100 * i)),
            e
              ? ((e.Enabled = 100 !== i), (e.Opacity = i))
              : (t.style.filter += " progid:" + n + "(opacity=" + i + ")");
        })(t, i);
  }
  function fi(t) {
    for (var i = document.documentElement.style, e = 0; e < t.length; e++)
      if (t[e] in i) return t[e];
    return !1;
  }
  function gi(t, i, e) {
    var n = i || new k(0, 0);
    t.style[ti] =
      (mt
        ? "translate(" + n.x + "px," + n.y + "px)"
        : "translate3d(" + n.x + "px," + n.y + "px,0)") +
      (e ? " scale(" + e + ")" : "");
  }
  function vi(t, i) {
    (t._leaflet_pos = i),
      vt ? gi(t, i) : ((t.style.left = i.x + "px"), (t.style.top = i.y + "px"));
  }
  function yi(t) {
    return t._leaflet_pos || new k(0, 0);
  }
  function xi() {
    zi(window, "dragstart", Ri);
  }
  function wi() {
    Si(window, "dragstart", Ri);
  }
  function Pi(t) {
    for (; -1 === t.tabIndex; ) t = t.parentNode;
    t.style &&
      (Li(),
      (Qt = ($t = t).style.outline),
      (t.style.outline = "none"),
      zi(window, "keydown", Li));
  }
  function Li() {
    $t &&
      (($t.style.outline = Qt), (Qt = $t = void 0), Si(window, "keydown", Li));
  }
  function bi(t) {
    for (
      ;
      !(
        ((t = t.parentNode).offsetWidth && t.offsetHeight) ||
        t === document.body
      );

    );
    return t;
  }
  function Ti(t) {
    var i = t.getBoundingClientRect();
    return {
      x: i.width / t.offsetWidth || 1,
      y: i.height / t.offsetHeight || 1,
      boundingClientRect: i
    };
  }
  Jt =
    "onselectstart" in document
      ? ((Xt = function () {
          zi(window, "selectstart", Ri);
        }),
        function () {
          Si(window, "selectstart", Ri);
        })
      : ((Yt = fi([
          "userSelect",
          "WebkitUserSelect",
          "OUserSelect",
          "MozUserSelect",
          "msUserSelect"
        ])),
        (Xt = function () {
          var t;
          Yt &&
            ((t = document.documentElement.style),
            (Kt = t[Yt]),
            (t[Yt] = "none"));
        }),
        function () {
          Yt && ((document.documentElement.style[Yt] = Kt), (Kt = void 0));
        });
  var Mi = {
    TRANSFORM: ti,
    TRANSITION: ii,
    TRANSITION_END: ei,
    get: ni,
    getStyle: oi,
    create: si,
    remove: ri,
    empty: ai,
    toFront: hi,
    toBack: ui,
    hasClass: li,
    addClass: ci,
    removeClass: _i,
    setClass: di,
    getClass: pi,
    setOpacity: mi,
    testProp: fi,
    setTransform: gi,
    setPosition: vi,
    getPosition: yi,
    disableTextSelection: Xt,
    enableTextSelection: Jt,
    disableImageDrag: xi,
    enableImageDrag: wi,
    preventOutline: Pi,
    restoreOutline: Li,
    getSizedParentNode: bi,
    getScale: Ti
  };
  function zi(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) ki(t, o, i[o], e);
    else for (var s = 0, r = (i = l(i)).length; s < r; s++) ki(t, i[s], e, n);
    return this;
  }
  var Ci = "_leaflet_events";
  function Si(t, i, e, n) {
    if ("object" == typeof i) for (var o in i) Bi(t, o, i[o], e);
    else if (i)
      for (var s = 0, r = (i = l(i)).length; s < r; s++) Bi(t, i[s], e, n);
    else {
      for (var a in t[Ci]) Bi(t, a, t[Ci][a]);
      delete t[Ci];
    }
    return this;
  }
  function Zi() {
    return Lt && !et && !ct;
  }
  var Ei = {
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    wheel: !("onwheel" in window) && "mousewheel"
  };
  function ki(i, t, e, n) {
    var o = t + m(e) + (n ? "_" + m(n) : "");
    if (i[Ci] && i[Ci][o]) return this;
    var s,
      r,
      a,
      h,
      u,
      l,
      c = function (t) {
        return e.call(n || i, t || window.event);
      },
      _ = c;
    function d(t) {
      if (Lt) {
        if (!t.isPrimary) return;
        if ("mouse" === t.pointerType) return;
      } else if (1 < t.touches.length) return;
      var i = Date.now(),
        e = i - (h || i);
      (u = t.touches ? t.touches[0] : t), (l = 0 < e && e <= 250), (h = i);
    }
    function p(t) {
      if (l && !u.cancelBubble) {
        if (Lt) {
          if ("mouse" === t.pointerType) return;
          var i,
            e,
            n = {};
          for (e in u) (i = u[e]), (n[e] = i && i.bind ? i.bind(u) : i);
          u = n;
        }
        (u.type = "dblclick"), (u.button = 0), r(u), (h = null);
      }
    }
    Lt && 0 === t.indexOf("touch")
      ? jt(i, t, c, o)
      : bt && "dblclick" === t && !Zi()
      ? ((r = c),
        (l = !1),
        ((s = i)[Gt + Vt + (a = o)] = d),
        (s[Gt + qt + a] = p),
        (s[Gt + "dblclick" + a] = r),
        s.addEventListener(Vt, d, !!Ct && { passive: !1 }),
        s.addEventListener(qt, p, !!Ct && { passive: !1 }),
        s.addEventListener("dblclick", r, !1))
      : "addEventListener" in i
      ? "touchstart" === t ||
        "touchmove" === t ||
        "wheel" === t ||
        "mousewheel" === t
        ? i.addEventListener(Ei[t] || t, c, !!Ct && { passive: !1 })
        : "mouseenter" === t || "mouseleave" === t
        ? ((c = function (t) {
            (t = t || window.event), Vi(i, t) && _(t);
          }),
          i.addEventListener(Ei[t], c, !1))
        : i.addEventListener(t, _, !1)
      : "attachEvent" in i && i.attachEvent("on" + t, c),
      (i[Ci] = i[Ci] || {}),
      (i[Ci][o] = c);
  }
  function Bi(t, i, e, n) {
    var o,
      s,
      r,
      a,
      h,
      u,
      l,
      c,
      _ = i + m(e) + (n ? "_" + m(n) : ""),
      d = t[Ci] && t[Ci][_];
    if (!d) return this;
    Lt && 0 === i.indexOf("touch")
      ? ((c = (u = t)["_leaflet_" + (l = i) + _]),
        "touchstart" === l
          ? u.removeEventListener(At, c, !1)
          : "touchmove" === l
          ? u.removeEventListener(It, c, !1)
          : "touchend" === l &&
            (u.removeEventListener(Ot, c, !1),
            u.removeEventListener(Rt, c, !1)))
      : bt && "dblclick" === i && !Zi()
      ? ((r = (o = t)[Gt + Vt + (s = _)]),
        (a = o[Gt + qt + s]),
        (h = o[Gt + "dblclick" + s]),
        o.removeEventListener(Vt, r, !!Ct && { passive: !1 }),
        o.removeEventListener(qt, a, !!Ct && { passive: !1 }),
        o.removeEventListener("dblclick", h, !1))
      : "removeEventListener" in t
      ? t.removeEventListener(Ei[i] || i, d, !1)
      : "detachEvent" in t && t.detachEvent("on" + i, d),
      (t[Ci][_] = null);
  }
  function Ai(t) {
    return (
      t.stopPropagation
        ? t.stopPropagation()
        : t.originalEvent
        ? (t.originalEvent._stopped = !0)
        : (t.cancelBubble = !0),
      Ui(t),
      this
    );
  }
  function Ii(t) {
    return ki(t, "wheel", Ai), this;
  }
  function Oi(t) {
    return zi(t, "mousedown touchstart dblclick", Ai), ki(t, "click", Fi), this;
  }
  function Ri(t) {
    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this;
  }
  function Ni(t) {
    return Ri(t), Ai(t), this;
  }
  function Di(t, i) {
    if (!i) return new k(t.clientX, t.clientY);
    var e = Ti(i),
      n = e.boundingClientRect;
    return new k(
      (t.clientX - n.left) / e.x - i.clientLeft,
      (t.clientY - n.top) / e.y - i.clientTop
    );
  }
  var ji =
    pt && ut ? 2 * window.devicePixelRatio : lt ? window.devicePixelRatio : 1;
  function Wi(t) {
    return et
      ? t.wheelDeltaY / 2
      : t.deltaY && 0 === t.deltaMode
      ? -t.deltaY / ji
      : t.deltaY && 1 === t.deltaMode
      ? 20 * -t.deltaY
      : t.deltaY && 2 === t.deltaMode
      ? 60 * -t.deltaY
      : t.deltaX || t.deltaZ
      ? 0
      : t.wheelDelta
      ? (t.wheelDeltaY || t.wheelDelta) / 2
      : t.detail && Math.abs(t.detail) < 32765
      ? 20 * -t.detail
      : t.detail
      ? (t.detail / -32765) * 60
      : 0;
  }
  var Hi = {};
  function Fi(t) {
    Hi[t.type] = !0;
  }
  function Ui(t) {
    var i = Hi[t.type];
    return (Hi[t.type] = !1), i;
  }
  function Vi(t, i) {
    var e = i.relatedTarget;
    if (!e) return !0;
    try {
      for (; e && e !== t; ) e = e.parentNode;
    } catch (t) {
      return !1;
    }
    return e !== t;
  }
  var qi = {
      on: zi,
      off: Si,
      stopPropagation: Ai,
      disableScrollPropagation: Ii,
      disableClickPropagation: Oi,
      preventDefault: Ri,
      stop: Ni,
      getMousePosition: Di,
      getWheelDelta: Wi,
      fakeStop: Fi,
      skipped: Ui,
      isExternalTarget: Vi,
      addListener: zi,
      removeListener: Si
    },
    Gi = E.extend({
      run: function (t, i, e, n) {
        this.stop(),
          (this._el = t),
          (this._inProgress = !0),
          (this._duration = e || 0.25),
          (this._easeOutPower = 1 / Math.max(n || 0.5, 0.2)),
          (this._startPos = yi(t)),
          (this._offset = i.subtract(this._startPos)),
          (this._startTime = +new Date()),
          this.fire("start"),
          this._animate();
      },
      stop: function () {
        this._inProgress && (this._step(!0), this._complete());
      },
      _animate: function () {
        (this._animId = M(this._animate, this)), this._step();
      },
      _step: function (t) {
        var i = new Date() - this._startTime,
          e = 1e3 * this._duration;
        i < e
          ? this._runFrame(this._easeOut(i / e), t)
          : (this._runFrame(1), this._complete());
      },
      _runFrame: function (t, i) {
        var e = this._startPos.add(this._offset.multiplyBy(t));
        i && e._round(), vi(this._el, e), this.fire("step");
      },
      _complete: function () {
        z(this._animId), (this._inProgress = !1), this.fire("end");
      },
      _easeOut: function (t) {
        return 1 - Math.pow(1 - t, this._easeOutPower);
      }
    }),
    Ki = E.extend({
      options: {
        crs: Y,
        center: void 0,
        zoom: void 0,
        minZoom: void 0,
        maxZoom: void 0,
        layers: [],
        maxBounds: void 0,
        renderer: void 0,
        zoomAnimation: !0,
        zoomAnimationThreshold: 4,
        fadeAnimation: !0,
        markerZoomAnimation: !0,
        transform3DLimit: 8388608,
        zoomSnap: 1,
        zoomDelta: 1,
        trackResize: !0
      },
      initialize: function (t, i) {
        (i = c(this, i)),
          (this._handlers = []),
          (this._layers = {}),
          (this._zoomBoundLayers = {}),
          (this._sizeChanged = !0),
          this._initContainer(t),
          this._initLayout(),
          (this._onResize = p(this._onResize, this)),
          this._initEvents(),
          i.maxBounds && this.setMaxBounds(i.maxBounds),
          void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)),
          i.center &&
            void 0 !== i.zoom &&
            this.setView(j(i.center), i.zoom, { reset: !0 }),
          this.callInitHooks(),
          (this._zoomAnimated = ii && vt && !Tt && this.options.zoomAnimation),
          this._zoomAnimated &&
            (this._createAnimProxy(),
            zi(this._proxy, ei, this._catchTransitionEnd, this)),
          this._addLayers(this.options.layers);
      },
      setView: function (t, i, e) {
        if (
          ((i = void 0 === i ? this._zoom : this._limitZoom(i)),
          (t = this._limitCenter(j(t), i, this.options.maxBounds)),
          (e = e || {}),
          this._stop(),
          this._loaded && !e.reset && !0 !== e) &&
          (void 0 !== e.animate &&
            ((e.zoom = h({ animate: e.animate }, e.zoom)),
            (e.pan = h({ animate: e.animate, duration: e.duration }, e.pan))),
          this._zoom !== i
            ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom)
            : this._tryAnimatedPan(t, e.pan))
        )
          return clearTimeout(this._sizeTimer), this;
        return this._resetView(t, i), this;
      },
      setZoom: function (t, i) {
        return this._loaded
          ? this.setView(this.getCenter(), t, { zoom: i })
          : ((this._zoom = t), this);
      },
      zoomIn: function (t, i) {
        return (
          (t = t || (vt ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom + t, i)
        );
      },
      zoomOut: function (t, i) {
        return (
          (t = t || (vt ? this.options.zoomDelta : 1)),
          this.setZoom(this._zoom - t, i)
        );
      },
      setZoomAround: function (t, i, e) {
        var n = this.getZoomScale(i),
          o = this.getSize().divideBy(2),
          s = (t instanceof k ? t : this.latLngToContainerPoint(t))
            .subtract(o)
            .multiplyBy(1 - 1 / n),
          r = this.containerPointToLatLng(o.add(s));
        return this.setView(r, i, { zoom: e });
      },
      _getBoundsCenterZoom: function (t, i) {
        (i = i || {}), (t = t.getBounds ? t.getBounds() : N(t));
        var e = A(i.paddingTopLeft || i.padding || [0, 0]),
          n = A(i.paddingBottomRight || i.padding || [0, 0]),
          o = this.getBoundsZoom(t, !1, e.add(n));
        if (
          (o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) ===
          1 / 0
        )
          return { center: t.getCenter(), zoom: o };
        var s = n.subtract(e).divideBy(2),
          r = this.project(t.getSouthWest(), o),
          a = this.project(t.getNorthEast(), o);
        return {
          center: this.unproject(r.add(a).divideBy(2).add(s), o),
          zoom: o
        };
      },
      fitBounds: function (t, i) {
        if (!(t = N(t)).isValid()) throw new Error("Bounds are not valid.");
        var e = this._getBoundsCenterZoom(t, i);
        return this.setView(e.center, e.zoom, i);
      },
      fitWorld: function (t) {
        return this.fitBounds(
          [
            [-90, -180],
            [90, 180]
          ],
          t
        );
      },
      panTo: function (t, i) {
        return this.setView(t, this._zoom, { pan: i });
      },
      panBy: function (t, i) {
        return (
          (i = i || {}),
          (t = A(t).round()).x || t.y
            ? (!0 === i.animate || this.getSize().contains(t)
                ? (this._panAnim ||
                    ((this._panAnim = new Gi()),
                    this._panAnim.on(
                      {
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd
                      },
                      this
                    )),
                  i.noMoveStart || this.fire("movestart"),
                  !1 !== i.animate
                    ? (ci(this._mapPane, "leaflet-pan-anim"),
                      (e = this._getMapPanePos().subtract(t).round()),
                      this._panAnim.run(
                        this._mapPane,
                        e,
                        i.duration || 0.25,
                        i.easeLinearity
                      ))
                    : (this._rawPanBy(t), this.fire("move").fire("moveend")))
                : this._resetView(
                    this.unproject(this.project(this.getCenter()).add(t)),
                    this.getZoom()
                  ),
              this)
            : this.fire("moveend")
        );
        var e;
      },
      flyTo: function (s, r, t) {
        if (!1 === (t = t || {}).animate || !vt) return this.setView(s, r, t);
        this._stop();
        var a = this.project(this.getCenter()),
          h = this.project(s),
          i = this.getSize(),
          u = this._zoom;
        (s = j(s)), (r = void 0 === r ? u : r);
        var l = Math.max(i.x, i.y),
          n = l * this.getZoomScale(u, r),
          c = h.distanceTo(a) || 1,
          _ = 1.42,
          o = _ * _;
        function e(t) {
          var i =
              (n * n - l * l + (t ? -1 : 1) * o * o * c * c) /
              (2 * (t ? n : l) * o * c),
            e = Math.sqrt(i * i + 1) - i;
          return e < 1e-9 ? -18 : Math.log(e);
        }
        function d(t) {
          return (Math.exp(t) - Math.exp(-t)) / 2;
        }
        function p(t) {
          return (Math.exp(t) + Math.exp(-t)) / 2;
        }
        var m = e(0);
        function f(t) {
          return (l * (p(m) * (d((i = m + _ * t)) / p(i)) - d(m))) / o;
          var i;
        }
        var g = Date.now(),
          v = (e(1) - m) / _,
          y = t.duration ? 1e3 * t.duration : 1e3 * v * 0.8;
        return (
          this._moveStart(!0, t.noMoveStart),
          function t() {
            var i,
              e,
              n = (Date.now() - g) / y,
              o = ((i = n), (1 - Math.pow(1 - i, 1.5)) * v);
            n <= 1
              ? ((this._flyToFrame = M(t, this)),
                this._move(
                  this.unproject(a.add(h.subtract(a).multiplyBy(f(o) / c)), u),
                  this.getScaleZoom(
                    l / ((e = o), l * (p(m) / p(m + _ * e))),
                    u
                  ),
                  { flyTo: !0 }
                ))
              : this._move(s, r)._moveEnd(!0);
          }.call(this),
          this
        );
      },
      flyToBounds: function (t, i) {
        var e = this._getBoundsCenterZoom(t, i);
        return this.flyTo(e.center, e.zoom, i);
      },
      setMaxBounds: function (t) {
        return (t = N(t)).isValid()
          ? (this.options.maxBounds &&
              this.off("moveend", this._panInsideMaxBounds),
            (this.options.maxBounds = t),
            this._loaded && this._panInsideMaxBounds(),
            this.on("moveend", this._panInsideMaxBounds))
          : ((this.options.maxBounds = null),
            this.off("moveend", this._panInsideMaxBounds));
      },
      setMinZoom: function (t) {
        var i = this.options.minZoom;
        return (
          (this.options.minZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom)
            ? this.setZoom(t)
            : this
        );
      },
      setMaxZoom: function (t) {
        var i = this.options.maxZoom;
        return (
          (this.options.maxZoom = t),
          this._loaded &&
          i !== t &&
          (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom)
            ? this.setZoom(t)
            : this
        );
      },
      panInsideBounds: function (t, i) {
        this._enforcingBounds = !0;
        var e = this.getCenter(),
          n = this._limitCenter(e, this._zoom, N(t));
        return (
          e.equals(n) || this.panTo(n, i), (this._enforcingBounds = !1), this
        );
      },
      panInside: function (t, i) {
        var e,
          n,
          o = A((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
          s = A(i.paddingBottomRight || i.padding || [0, 0]),
          r = this.getCenter(),
          a = this.project(r),
          h = this.project(t),
          u = this.getPixelBounds(),
          l = u.getSize().divideBy(2),
          c = O([u.min.add(o), u.max.subtract(s)]);
        return (
          c.contains(h) ||
            ((this._enforcingBounds = !0),
            (e = a.subtract(h)),
            (n = A(h.x + e.x, h.y + e.y)),
            (h.x < c.min.x || h.x > c.max.x) &&
              ((n.x = a.x - e.x),
              0 < e.x ? (n.x += l.x - o.x) : (n.x -= l.x - s.x)),
            (h.y < c.min.y || h.y > c.max.y) &&
              ((n.y = a.y - e.y),
              0 < e.y ? (n.y += l.y - o.y) : (n.y -= l.y - s.y)),
            this.panTo(this.unproject(n), i),
            (this._enforcingBounds = !1)),
          this
        );
      },
      invalidateSize: function (t) {
        if (!this._loaded) return this;
        t = h({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
        var i = this.getSize();
        (this._sizeChanged = !0), (this._lastCenter = null);
        var e = this.getSize(),
          n = i.divideBy(2).round(),
          o = e.divideBy(2).round(),
          s = n.subtract(o);
        return s.x || s.y
          ? (t.animate && t.pan
              ? this.panBy(s)
              : (t.pan && this._rawPanBy(s),
                this.fire("move"),
                t.debounceMoveend
                  ? (clearTimeout(this._sizeTimer),
                    (this._sizeTimer = setTimeout(
                      p(this.fire, this, "moveend"),
                      200
                    )))
                  : this.fire("moveend")),
            this.fire("resize", { oldSize: i, newSize: e }))
          : this;
      },
      stop: function () {
        return (
          this.setZoom(this._limitZoom(this._zoom)),
          this.options.zoomSnap || this.fire("viewreset"),
          this._stop()
        );
      },
      locate: function (t) {
        if (
          ((t = this._locateOptions = h({ timeout: 1e4, watch: !1 }, t)),
          !("geolocation" in navigator))
        )
          return (
            this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }),
            this
          );
        var i = p(this._handleGeolocationResponse, this),
          e = p(this._handleGeolocationError, this);
        return (
          t.watch
            ? (this._locationWatchId = navigator.geolocation.watchPosition(
                i,
                e,
                t
              ))
            : navigator.geolocation.getCurrentPosition(i, e, t),
          this
        );
      },
      stopLocate: function () {
        return (
          navigator.geolocation &&
            navigator.geolocation.clearWatch &&
            navigator.geolocation.clearWatch(this._locationWatchId),
          this._locateOptions && (this._locateOptions.setView = !1),
          this
        );
      },
      _handleGeolocationError: function (t) {
        var i = t.code,
          e =
            t.message ||
            (1 === i
              ? "permission denied"
              : 2 === i
              ? "position unavailable"
              : "timeout");
        this._locateOptions.setView && !this._loaded && this.fitWorld(),
          this.fire("locationerror", {
            code: i,
            message: "Geolocation error: " + e + "."
          });
      },
      _handleGeolocationResponse: function (t) {
        var i,
          e = new D(t.coords.latitude, t.coords.longitude),
          n = e.toBounds(2 * t.coords.accuracy),
          o = this._locateOptions;
        o.setView &&
          ((i = this.getBoundsZoom(n)),
          this.setView(e, o.maxZoom ? Math.min(i, o.maxZoom) : i));
        var s = { latlng: e, bounds: n, timestamp: t.timestamp };
        for (var r in t.coords)
          "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
        this.fire("locationfound", s);
      },
      addHandler: function (t, i) {
        if (!i) return this;
        var e = (this[t] = new i(this));
        return this._handlers.push(e), this.options[t] && e.enable(), this;
      },
      remove: function () {
        if (
          (this._initEvents(!0),
          this.off("moveend", this._panInsideMaxBounds),
          this._containerId !== this._container._leaflet_id)
        )
          throw new Error("Map container is being reused by another instance");
        try {
          delete this._container._leaflet_id, delete this._containerId;
        } catch (t) {
          (this._container._leaflet_id = void 0), (this._containerId = void 0);
        }
        var t;
        for (t in (void 0 !== this._locationWatchId && this.stopLocate(),
        this._stop(),
        ri(this._mapPane),
        this._clearControlPos && this._clearControlPos(),
        this._resizeRequest &&
          (z(this._resizeRequest), (this._resizeRequest = null)),
        this._clearHandlers(),
        this._loaded && this.fire("unload"),
        this._layers))
          this._layers[t].remove();
        for (t in this._panes) ri(this._panes[t]);
        return (
          (this._layers = []),
          (this._panes = []),
          delete this._mapPane,
          delete this._renderer,
          this
        );
      },
      createPane: function (t, i) {
        var e = si(
          "div",
          "leaflet-pane" +
            (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
          i || this._mapPane
        );
        return t && (this._panes[t] = e), e;
      },
      getCenter: function () {
        return (
          this._checkIfLoaded(),
          this._lastCenter && !this._moved()
            ? this._lastCenter
            : this.layerPointToLatLng(this._getCenterLayerPoint())
        );
      },
      getZoom: function () {
        return this._zoom;
      },
      getBounds: function () {
        var t = this.getPixelBounds();
        return new R(
          this.unproject(t.getBottomLeft()),
          this.unproject(t.getTopRight())
        );
      },
      getMinZoom: function () {
        return void 0 === this.options.minZoom
          ? this._layersMinZoom || 0
          : this.options.minZoom;
      },
      getMaxZoom: function () {
        return void 0 === this.options.maxZoom
          ? void 0 === this._layersMaxZoom
            ? 1 / 0
            : this._layersMaxZoom
          : this.options.maxZoom;
      },
      getBoundsZoom: function (t, i, e) {
        (t = N(t)), (e = A(e || [0, 0]));
        var n = this.getZoom() || 0,
          o = this.getMinZoom(),
          s = this.getMaxZoom(),
          r = t.getNorthWest(),
          a = t.getSouthEast(),
          h = this.getSize().subtract(e),
          u = O(this.project(a, n), this.project(r, n)).getSize(),
          l = vt ? this.options.zoomSnap : 1,
          c = h.x / u.x,
          _ = h.y / u.y,
          d = i ? Math.max(c, _) : Math.min(c, _),
          n = this.getScaleZoom(d, n);
        return (
          l &&
            ((n = Math.round(n / (l / 100)) * (l / 100)),
            (n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l)),
          Math.max(o, Math.min(s, n))
        );
      },
      getSize: function () {
        return (
          (this._size && !this._sizeChanged) ||
            ((this._size = new k(
              this._container.clientWidth || 0,
              this._container.clientHeight || 0
            )),
            (this._sizeChanged = !1)),
          this._size.clone()
        );
      },
      getPixelBounds: function (t, i) {
        var e = this._getTopLeftPoint(t, i);
        return new I(e, e.add(this.getSize()));
      },
      getPixelOrigin: function () {
        return this._checkIfLoaded(), this._pixelOrigin;
      },
      getPixelWorldBounds: function (t) {
        return this.options.crs.getProjectedBounds(
          void 0 === t ? this.getZoom() : t
        );
      },
      getPane: function (t) {
        return "string" == typeof t ? this._panes[t] : t;
      },
      getPanes: function () {
        return this._panes;
      },
      getContainer: function () {
        return this._container;
      },
      getZoomScale: function (t, i) {
        var e = this.options.crs;
        return (i = void 0 === i ? this._zoom : i), e.scale(t) / e.scale(i);
      },
      getScaleZoom: function (t, i) {
        var e = this.options.crs;
        i = void 0 === i ? this._zoom : i;
        var n = e.zoom(t * e.scale(i));
        return isNaN(n) ? 1 / 0 : n;
      },
      project: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.latLngToPoint(j(t), i)
        );
      },
      unproject: function (t, i) {
        return (
          (i = void 0 === i ? this._zoom : i),
          this.options.crs.pointToLatLng(A(t), i)
        );
      },
      layerPointToLatLng: function (t) {
        var i = A(t).add(this.getPixelOrigin());
        return this.unproject(i);
      },
      latLngToLayerPoint: function (t) {
        return this.project(j(t))._round()._subtract(this.getPixelOrigin());
      },
      wrapLatLng: function (t) {
        return this.options.crs.wrapLatLng(j(t));
      },
      wrapLatLngBounds: function (t) {
        return this.options.crs.wrapLatLngBounds(N(t));
      },
      distance: function (t, i) {
        return this.options.crs.distance(j(t), j(i));
      },
      containerPointToLayerPoint: function (t) {
        return A(t).subtract(this._getMapPanePos());
      },
      layerPointToContainerPoint: function (t) {
        return A(t).add(this._getMapPanePos());
      },
      containerPointToLatLng: function (t) {
        var i = this.containerPointToLayerPoint(A(t));
        return this.layerPointToLatLng(i);
      },
      latLngToContainerPoint: function (t) {
        return this.layerPointToContainerPoint(this.latLngToLayerPoint(j(t)));
      },
      mouseEventToContainerPoint: function (t) {
        return Di(t, this._container);
      },
      mouseEventToLayerPoint: function (t) {
        return this.containerPointToLayerPoint(
          this.mouseEventToContainerPoint(t)
        );
      },
      mouseEventToLatLng: function (t) {
        return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
      },
      _initContainer: function (t) {
        var i = (this._container = ni(t));
        if (!i) throw new Error("Map container not found.");
        if (i._leaflet_id)
          throw new Error("Map container is already initialized.");
        zi(i, "scroll", this._onScroll, this), (this._containerId = m(i));
      },
      _initLayout: function () {
        var t = this._container;
        (this._fadeAnimated = this.options.fadeAnimation && vt),
          ci(
            t,
            "leaflet-container" +
              (bt ? " leaflet-touch" : "") +
              (zt ? " leaflet-retina" : "") +
              (it ? " leaflet-oldie" : "") +
              (ct ? " leaflet-safari" : "") +
              (this._fadeAnimated ? " leaflet-fade-anim" : "")
          );
        var i = oi(t, "position");
        "absolute" !== i &&
          "relative" !== i &&
          "fixed" !== i &&
          (t.style.position = "relative"),
          this._initPanes(),
          this._initControlPos && this._initControlPos();
      },
      _initPanes: function () {
        var t = (this._panes = {});
        (this._paneRenderers = {}),
          (this._mapPane = this.createPane("mapPane", this._container)),
          vi(this._mapPane, new k(0, 0)),
          this.createPane("tilePane"),
          this.createPane("shadowPane"),
          this.createPane("overlayPane"),
          this.createPane("markerPane"),
          this.createPane("tooltipPane"),
          this.createPane("popupPane"),
          this.options.markerZoomAnimation ||
            (ci(t.markerPane, "leaflet-zoom-hide"),
            ci(t.shadowPane, "leaflet-zoom-hide"));
      },
      _resetView: function (t, i) {
        vi(this._mapPane, new k(0, 0));
        var e = !this._loaded;
        (this._loaded = !0),
          (i = this._limitZoom(i)),
          this.fire("viewprereset");
        var n = this._zoom !== i;
        this._moveStart(n, !1)._move(t, i)._moveEnd(n),
          this.fire("viewreset"),
          e && this.fire("load");
      },
      _moveStart: function (t, i) {
        return t && this.fire("zoomstart"), i || this.fire("movestart"), this;
      },
      _move: function (t, i, e) {
        void 0 === i && (i = this._zoom);
        var n = this._zoom !== i;
        return (
          (this._zoom = i),
          (this._lastCenter = t),
          (this._pixelOrigin = this._getNewPixelOrigin(t)),
          (n || (e && e.pinch)) && this.fire("zoom", e),
          this.fire("move", e)
        );
      },
      _moveEnd: function (t) {
        return t && this.fire("zoomend"), this.fire("moveend");
      },
      _stop: function () {
        return z(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
      },
      _rawPanBy: function (t) {
        vi(this._mapPane, this._getMapPanePos().subtract(t));
      },
      _getZoomSpan: function () {
        return this.getMaxZoom() - this.getMinZoom();
      },
      _panInsideMaxBounds: function () {
        this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
      },
      _checkIfLoaded: function () {
        if (!this._loaded) throw new Error("Set map center and zoom first.");
      },
      _initEvents: function (t) {
        this._targets = {};
        var i = t ? Si : zi;
        i(
          (this._targets[m(this._container)] = this)._container,
          "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
          this._handleDOMEvent,
          this
        ),
          this.options.trackResize && i(window, "resize", this._onResize, this),
          vt &&
            this.options.transform3DLimit &&
            (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
      },
      _onResize: function () {
        z(this._resizeRequest),
          (this._resizeRequest = M(function () {
            this.invalidateSize({ debounceMoveend: !0 });
          }, this));
      },
      _onScroll: function () {
        (this._container.scrollTop = 0), (this._container.scrollLeft = 0);
      },
      _onMoveEnd: function () {
        var t = this._getMapPanePos();
        Math.max(Math.abs(t.x), Math.abs(t.y)) >=
          this.options.transform3DLimit &&
          this._resetView(this.getCenter(), this.getZoom());
      },
      _findEventTargets: function (t, i) {
        for (
          var e,
            n = [],
            o = "mouseout" === i || "mouseover" === i,
            s = t.target || t.srcElement,
            r = !1;
          s;

        ) {
          if (
            (e = this._targets[m(s)]) &&
            ("click" === i || "preclick" === i) &&
            !t._simulated &&
            this._draggableMoved(e)
          ) {
            r = !0;
            break;
          }
          if (e && e.listens(i, !0)) {
            if (o && !Vi(s, t)) break;
            if ((n.push(e), o)) break;
          }
          if (s === this._container) break;
          s = s.parentNode;
        }
        return n.length || r || o || !Vi(s, t) || (n = [this]), n;
      },
      _handleDOMEvent: function (t) {
        var i;
        this._loaded &&
          !Ui(t) &&
          (("mousedown" !== (i = t.type) &&
            "keypress" !== i &&
            "keyup" !== i &&
            "keydown" !== i) ||
            Pi(t.target || t.srcElement),
          this._fireDOMEvent(t, i));
      },
      _mouseEvents: [
        "click",
        "dblclick",
        "mouseover",
        "mouseout",
        "contextmenu"
      ],
      _fireDOMEvent: function (t, i, e) {
        var n;
        if (
          ("click" === t.type &&
            (((n = h({}, t)).type = "preclick"),
            this._fireDOMEvent(n, n.type, e)),
          !t._stopped &&
            (e = (e || []).concat(this._findEventTargets(t, i))).length)
        ) {
          var o = e[0];
          "contextmenu" === i && o.listens(i, !0) && Ri(t);
          var s,
            r = { originalEvent: t };
          "keypress" !== t.type &&
            "keydown" !== t.type &&
            "keyup" !== t.type &&
            ((s = o.getLatLng && (!o._radius || o._radius <= 10)),
            (r.containerPoint = s
              ? this.latLngToContainerPoint(o.getLatLng())
              : this.mouseEventToContainerPoint(t)),
            (r.layerPoint = this.containerPointToLayerPoint(r.containerPoint)),
            (r.latlng = s
              ? o.getLatLng()
              : this.layerPointToLatLng(r.layerPoint)));
          for (var a = 0; a < e.length; a++)
            if (
              (e[a].fire(i, r, !0),
              r.originalEvent._stopped ||
                (!1 === e[a].options.bubblingMouseEvents &&
                  -1 !== v(this._mouseEvents, i)))
            )
              return;
        }
      },
      _draggableMoved: function (t) {
        return (
          ((t = t.dragging && t.dragging.enabled() ? t : this).dragging &&
            t.dragging.moved()) ||
          (this.boxZoom && this.boxZoom.moved())
        );
      },
      _clearHandlers: function () {
        for (var t = 0, i = this._handlers.length; t < i; t++)
          this._handlers[t].disable();
      },
      whenReady: function (t, i) {
        return (
          this._loaded
            ? t.call(i || this, { target: this })
            : this.on("load", t, i),
          this
        );
      },
      _getMapPanePos: function () {
        return yi(this._mapPane) || new k(0, 0);
      },
      _moved: function () {
        var t = this._getMapPanePos();
        return t && !t.equals([0, 0]);
      },
      _getTopLeftPoint: function (t, i) {
        return (
          t && void 0 !== i
            ? this._getNewPixelOrigin(t, i)
            : this.getPixelOrigin()
        ).subtract(this._getMapPanePos());
      },
      _getNewPixelOrigin: function (t, i) {
        var e = this.getSize()._divideBy(2);
        return this.project(t, i)
          ._subtract(e)
          ._add(this._getMapPanePos())
          ._round();
      },
      _latLngToNewLayerPoint: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return this.project(t, i)._subtract(n);
      },
      _latLngBoundsToNewLayerBounds: function (t, i, e) {
        var n = this._getNewPixelOrigin(e, i);
        return O([
          this.project(t.getSouthWest(), i)._subtract(n),
          this.project(t.getNorthWest(), i)._subtract(n),
          this.project(t.getSouthEast(), i)._subtract(n),
          this.project(t.getNorthEast(), i)._subtract(n)
        ]);
      },
      _getCenterLayerPoint: function () {
        return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
      },
      _getCenterOffset: function (t) {
        return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint());
      },
      _limitCenter: function (t, i, e) {
        if (!e) return t;
        var n = this.project(t, i),
          o = this.getSize().divideBy(2),
          s = new I(n.subtract(o), n.add(o)),
          r = this._getBoundsOffset(s, e, i);
        return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i);
      },
      _limitOffset: function (t, i) {
        if (!i) return t;
        var e = this.getPixelBounds(),
          n = new I(e.min.add(t), e.max.add(t));
        return t.add(this._getBoundsOffset(n, i));
      },
      _getBoundsOffset: function (t, i, e) {
        var n = O(
            this.project(i.getNorthEast(), e),
            this.project(i.getSouthWest(), e)
          ),
          o = n.min.subtract(t.min),
          s = n.max.subtract(t.max);
        return new k(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y));
      },
      _rebound: function (t, i) {
        return 0 < t + i
          ? Math.round(t - i) / 2
          : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i));
      },
      _limitZoom: function (t) {
        var i = this.getMinZoom(),
          e = this.getMaxZoom(),
          n = vt ? this.options.zoomSnap : 1;
        return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t));
      },
      _onPanTransitionStep: function () {
        this.fire("move");
      },
      _onPanTransitionEnd: function () {
        _i(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
      },
      _tryAnimatedPan: function (t, i) {
        var e = this._getCenterOffset(t)._trunc();
        return (
          !(!0 !== (i && i.animate) && !this.getSize().contains(e)) &&
          (this.panBy(e, i), !0)
        );
      },
      _createAnimProxy: function () {
        var t = (this._proxy = si(
          "div",
          "leaflet-proxy leaflet-zoom-animated"
        ));
        this._panes.mapPane.appendChild(t),
          this.on(
            "zoomanim",
            function (t) {
              var i = ti,
                e = this._proxy.style[i];
              gi(
                this._proxy,
                this.project(t.center, t.zoom),
                this.getZoomScale(t.zoom, 1)
              ),
                e === this._proxy.style[i] &&
                  this._animatingZoom &&
                  this._onZoomTransitionEnd();
            },
            this
          ),
          this.on("load moveend", this._animMoveEnd, this),
          this._on("unload", this._destroyAnimProxy, this);
      },
      _destroyAnimProxy: function () {
        ri(this._proxy),
          this.off("load moveend", this._animMoveEnd, this),
          delete this._proxy;
      },
      _animMoveEnd: function () {
        var t = this.getCenter(),
          i = this.getZoom();
        gi(this._proxy, this.project(t, i), this.getZoomScale(i, 1));
      },
      _catchTransitionEnd: function (t) {
        this._animatingZoom &&
          0 <= t.propertyName.indexOf("transform") &&
          this._onZoomTransitionEnd();
      },
      _nothingToAnimate: function () {
        return !this._container.getElementsByClassName("leaflet-zoom-animated")
          .length;
      },
      _tryAnimatedZoom: function (t, i, e) {
        if (this._animatingZoom) return !0;
        if (
          ((e = e || {}),
          !this._zoomAnimated ||
            !1 === e.animate ||
            this._nothingToAnimate() ||
            Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold)
        )
          return !1;
        var n = this.getZoomScale(i),
          o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
        return (
          !(!0 !== e.animate && !this.getSize().contains(o)) &&
          (M(function () {
            this._moveStart(!0, !1)._animateZoom(t, i, !0);
          }, this),
          !0)
        );
      },
      _animateZoom: function (t, i, e, n) {
        this._mapPane &&
          (e &&
            ((this._animatingZoom = !0),
            (this._animateToCenter = t),
            (this._animateToZoom = i),
            ci(this._mapPane, "leaflet-zoom-anim")),
          this.fire("zoomanim", { center: t, zoom: i, noUpdate: n }),
          setTimeout(p(this._onZoomTransitionEnd, this), 250));
      },
      _onZoomTransitionEnd: function () {
        this._animatingZoom &&
          (this._mapPane && _i(this._mapPane, "leaflet-zoom-anim"),
          (this._animatingZoom = !1),
          this._move(this._animateToCenter, this._animateToZoom),
          M(function () {
            this._moveEnd(!0);
          }, this));
      }
    });
  function Yi(t) {
    return new Xi(t);
  }
  var Xi = S.extend({
    options: { position: "topright" },
    initialize: function (t) {
      c(this, t);
    },
    getPosition: function () {
      return this.options.position;
    },
    setPosition: function (t) {
      var i = this._map;
      return (
        i && i.removeControl(this),
        (this.options.position = t),
        i && i.addControl(this),
        this
      );
    },
    getContainer: function () {
      return this._container;
    },
    addTo: function (t) {
      this.remove(), (this._map = t);
      var i = (this._container = this.onAdd(t)),
        e = this.getPosition(),
        n = t._controlCorners[e];
      return (
        ci(i, "leaflet-control"),
        -1 !== e.indexOf("bottom")
          ? n.insertBefore(i, n.firstChild)
          : n.appendChild(i),
        this._map.on("unload", this.remove, this),
        this
      );
    },
    remove: function () {
      return (
        this._map &&
          (ri(this._container),
          this.onRemove && this.onRemove(this._map),
          this._map.off("unload", this.remove, this),
          (this._map = null)),
        this
      );
    },
    _refocusOnMap: function (t) {
      this._map &&
        t &&
        0 < t.screenX &&
        0 < t.screenY &&
        this._map.getContainer().focus();
    }
  });
  Ki.include({
    addControl: function (t) {
      return t.addTo(this), this;
    },
    removeControl: function (t) {
      return t.remove(), this;
    },
    _initControlPos: function () {
      var n = (this._controlCorners = {}),
        o = "leaflet-",
        s = (this._controlContainer = si(
          "div",
          o + "control-container",
          this._container
        ));
      function t(t, i) {
        var e = o + t + " " + o + i;
        n[t + i] = si("div", e, s);
      }
      t("top", "left"),
        t("top", "right"),
        t("bottom", "left"),
        t("bottom", "right");
    },
    _clearControlPos: function () {
      for (var t in this._controlCorners) ri(this._controlCorners[t]);
      ri(this._controlContainer),
        delete this._controlCorners,
        delete this._controlContainer;
    }
  });
  var Ji = Xi.extend({
      options: {
        collapsed: !0,
        position: "topright",
        autoZIndex: !0,
        hideSingleBase: !1,
        sortLayers: !1,
        sortFunction: function (t, i, e, n) {
          return e < n ? -1 : n < e ? 1 : 0;
        }
      },
      initialize: function (t, i, e) {
        for (var n in (c(this, e),
        (this._layerControlInputs = []),
        (this._layers = []),
        (this._lastZIndex = 0),
        (this._handlingClick = !1),
        t))
          this._addLayer(t[n], n);
        for (n in i) this._addLayer(i[n], n, !0);
      },
      onAdd: function (t) {
        this._initLayout(),
          this._update(),
          (this._map = t).on("zoomend", this._checkDisabledLayers, this);
        for (var i = 0; i < this._layers.length; i++)
          this._layers[i].layer.on("add remove", this._onLayerChange, this);
        return this._container;
      },
      addTo: function (t) {
        return Xi.prototype.addTo.call(this, t), this._expandIfNotCollapsed();
      },
      onRemove: function () {
        this._map.off("zoomend", this._checkDisabledLayers, this);
        for (var t = 0; t < this._layers.length; t++)
          this._layers[t].layer.off("add remove", this._onLayerChange, this);
      },
      addBaseLayer: function (t, i) {
        return this._addLayer(t, i), this._map ? this._update() : this;
      },
      addOverlay: function (t, i) {
        return this._addLayer(t, i, !0), this._map ? this._update() : this;
      },
      removeLayer: function (t) {
        t.off("add remove", this._onLayerChange, this);
        var i = this._getLayer(m(t));
        return (
          i && this._layers.splice(this._layers.indexOf(i), 1),
          this._map ? this._update() : this
        );
      },
      expand: function () {
        ci(this._container, "leaflet-control-layers-expanded"),
          (this._section.style.height = null);
        var t = this._map.getSize().y - (this._container.offsetTop + 50);
        return (
          t < this._section.clientHeight
            ? (ci(this._section, "leaflet-control-layers-scrollbar"),
              (this._section.style.height = t + "px"))
            : _i(this._section, "leaflet-control-layers-scrollbar"),
          this._checkDisabledLayers(),
          this
        );
      },
      collapse: function () {
        return _i(this._container, "leaflet-control-layers-expanded"), this;
      },
      _initLayout: function () {
        var t = "leaflet-control-layers",
          i = (this._container = si("div", t)),
          e = this.options.collapsed;
        i.setAttribute("aria-haspopup", !0), Oi(i), Ii(i);
        var n = (this._section = si("section", t + "-list"));
        e &&
          (this._map.on("click", this.collapse, this),
          ot ||
            zi(
              i,
              { mouseenter: this.expand, mouseleave: this.collapse },
              this
            ));
        var o = (this._layersLink = si("a", t + "-toggle", i));
        (o.href = "#"),
          (o.title = "Layers"),
          bt
            ? (zi(o, "click", Ni), zi(o, "click", this.expand, this))
            : zi(o, "focus", this.expand, this),
          e || this.expand(),
          (this._baseLayersList = si("div", t + "-base", n)),
          (this._separator = si("div", t + "-separator", n)),
          (this._overlaysList = si("div", t + "-overlays", n)),
          i.appendChild(n);
      },
      _getLayer: function (t) {
        for (var i = 0; i < this._layers.length; i++)
          if (this._layers[i] && m(this._layers[i].layer) === t)
            return this._layers[i];
      },
      _addLayer: function (t, i, e) {
        this._map && t.on("add remove", this._onLayerChange, this),
          this._layers.push({ layer: t, name: i, overlay: e }),
          this.options.sortLayers &&
            this._layers.sort(
              p(function (t, i) {
                return this.options.sortFunction(
                  t.layer,
                  i.layer,
                  t.name,
                  i.name
                );
              }, this)
            ),
          this.options.autoZIndex &&
            t.setZIndex &&
            (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
          this._expandIfNotCollapsed();
      },
      _update: function () {
        if (!this._container) return this;
        ai(this._baseLayersList),
          ai(this._overlaysList),
          (this._layerControlInputs = []);
        for (var t, i, e, n = 0, o = 0; o < this._layers.length; o++)
          (e = this._layers[o]),
            this._addItem(e),
            (i = i || e.overlay),
            (t = t || !e.overlay),
            (n += e.overlay ? 0 : 1);
        return (
          this.options.hideSingleBase &&
            ((t = t && 1 < n),
            (this._baseLayersList.style.display = t ? "" : "none")),
          (this._separator.style.display = i && t ? "" : "none"),
          this
        );
      },
      _onLayerChange: function (t) {
        this._handlingClick || this._update();
        var i = this._getLayer(m(t.target)),
          e = i.overlay
            ? "add" === t.type
              ? "overlayadd"
              : "overlayremove"
            : "add" === t.type
            ? "baselayerchange"
            : null;
        e && this._map.fire(e, i);
      },
      _createRadioElement: function (t, i) {
        var e =
            '<input type="radio" class="leaflet-control-layers-selector" name="' +
            t +
            '"' +
            (i ? ' checked="checked"' : "") +
            "/>",
          n = document.createElement("div");
        return (n.innerHTML = e), n.firstChild;
      },
      _addItem: function (t) {
        var i,
          e = document.createElement("label"),
          n = this._map.hasLayer(t.layer);
        t.overlay
          ? (((i = document.createElement("input")).type = "checkbox"),
            (i.className = "leaflet-control-layers-selector"),
            (i.defaultChecked = n))
          : (i = this._createRadioElement("leaflet-base-layers_" + m(this), n)),
          this._layerControlInputs.push(i),
          (i.layerId = m(t.layer)),
          zi(i, "click", this._onInputClick, this);
        var o = document.createElement("span");
        o.innerHTML = " " + t.name;
        var s = document.createElement("div");
        return (
          e.appendChild(s),
          s.appendChild(i),
          s.appendChild(o),
          (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(
            e
          ),
          this._checkDisabledLayers(),
          e
        );
      },
      _onInputClick: function () {
        var t,
          i,
          e = this._layerControlInputs,
          n = [],
          o = [];
        this._handlingClick = !0;
        for (var s = e.length - 1; 0 <= s; s--)
          (t = e[s]),
            (i = this._getLayer(t.layerId).layer),
            t.checked ? n.push(i) : t.checked || o.push(i);
        for (s = 0; s < o.length; s++)
          this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
        for (s = 0; s < n.length; s++)
          this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
        (this._handlingClick = !1), this._refocusOnMap();
      },
      _checkDisabledLayers: function () {
        for (
          var t,
            i,
            e = this._layerControlInputs,
            n = this._map.getZoom(),
            o = e.length - 1;
          0 <= o;
          o--
        )
          (t = e[o]),
            (i = this._getLayer(t.layerId).layer),
            (t.disabled =
              (void 0 !== i.options.minZoom && n < i.options.minZoom) ||
              (void 0 !== i.options.maxZoom && n > i.options.maxZoom));
      },
      _expandIfNotCollapsed: function () {
        return this._map && !this.options.collapsed && this.expand(), this;
      },
      _expand: function () {
        return this.expand();
      },
      _collapse: function () {
        return this.collapse();
      }
    }),
    $i = Xi.extend({
      options: {
        position: "topleft",
        zoomInText: "+",
        zoomInTitle: "Zoom in",
        zoomOutText: "&#x2212;",
        zoomOutTitle: "Zoom out"
      },
      onAdd: function (t) {
        var i = "leaflet-control-zoom",
          e = si("div", i + " leaflet-bar"),
          n = this.options;
        return (
          (this._zoomInButton = this._createButton(
            n.zoomInText,
            n.zoomInTitle,
            i + "-in",
            e,
            this._zoomIn
          )),
          (this._zoomOutButton = this._createButton(
            n.zoomOutText,
            n.zoomOutTitle,
            i + "-out",
            e,
            this._zoomOut
          )),
          this._updateDisabled(),
          t.on("zoomend zoomlevelschange", this._updateDisabled, this),
          e
        );
      },
      onRemove: function (t) {
        t.off("zoomend zoomlevelschange", this._updateDisabled, this);
      },
      disable: function () {
        return (this._disabled = !0), this._updateDisabled(), this;
      },
      enable: function () {
        return (this._disabled = !1), this._updateDisabled(), this;
      },
      _zoomIn: function (t) {
        !this._disabled &&
          this._map._zoom < this._map.getMaxZoom() &&
          this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _zoomOut: function (t) {
        !this._disabled &&
          this._map._zoom > this._map.getMinZoom() &&
          this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1));
      },
      _createButton: function (t, i, e, n, o) {
        var s = si("a", e, n);
        return (
          (s.innerHTML = t),
          (s.href = "#"),
          (s.title = i),
          s.setAttribute("role", "button"),
          s.setAttribute("aria-label", i),
          Oi(s),
          zi(s, "click", Ni),
          zi(s, "click", o, this),
          zi(s, "click", this._refocusOnMap, this),
          s
        );
      },
      _updateDisabled: function () {
        var t = this._map,
          i = "leaflet-disabled";
        _i(this._zoomInButton, i),
          _i(this._zoomOutButton, i),
          (!this._disabled && t._zoom !== t.getMinZoom()) ||
            ci(this._zoomOutButton, i),
          (!this._disabled && t._zoom !== t.getMaxZoom()) ||
            ci(this._zoomInButton, i);
      }
    });
  Ki.mergeOptions({ zoomControl: !0 }),
    Ki.addInitHook(function () {
      this.options.zoomControl &&
        ((this.zoomControl = new $i()), this.addControl(this.zoomControl));
    });
  var Qi = Xi.extend({
      options: {
        position: "bottomleft",
        maxWidth: 100,
        metric: !0,
        imperial: !0
      },
      onAdd: function (t) {
        var i = "leaflet-control-scale",
          e = si("div", i),
          n = this.options;
        return (
          this._addScales(n, i + "-line", e),
          t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this),
          t.whenReady(this._update, this),
          e
        );
      },
      onRemove: function (t) {
        t.off(
          this.options.updateWhenIdle ? "moveend" : "move",
          this._update,
          this
        );
      },
      _addScales: function (t, i, e) {
        t.metric && (this._mScale = si("div", i, e)),
          t.imperial && (this._iScale = si("div", i, e));
      },
      _update: function () {
        var t = this._map,
          i = t.getSize().y / 2,
          e = t.distance(
            t.containerPointToLatLng([0, i]),
            t.containerPointToLatLng([this.options.maxWidth, i])
          );
        this._updateScales(e);
      },
      _updateScales: function (t) {
        this.options.metric && t && this._updateMetric(t),
          this.options.imperial && t && this._updateImperial(t);
      },
      _updateMetric: function (t) {
        var i = this._getRoundNum(t),
          e = i < 1e3 ? i + " m" : i / 1e3 + " km";
        this._updateScale(this._mScale, e, i / t);
      },
      _updateImperial: function (t) {
        var i,
          e,
          n,
          o = 3.2808399 * t;
        5280 < o
          ? ((i = o / 5280),
            (e = this._getRoundNum(i)),
            this._updateScale(this._iScale, e + " mi", e / i))
          : ((n = this._getRoundNum(o)),
            this._updateScale(this._iScale, n + " ft", n / o));
      },
      _updateScale: function (t, i, e) {
        (t.style.width = Math.round(this.options.maxWidth * e) + "px"),
          (t.innerHTML = i);
      },
      _getRoundNum: function (t) {
        var i = Math.pow(10, (Math.floor(t) + "").length - 1),
          e = t / i;
        return (
          i * (e = 10 <= e ? 10 : 5 <= e ? 5 : 3 <= e ? 3 : 2 <= e ? 2 : 1)
        );
      }
    }),
    te = Xi.extend({
      options: {
        position: "bottomright",
        prefix:
          '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
      },
      initialize: function (t) {
        c(this, t), (this._attributions = {});
      },
      onAdd: function (t) {
        for (var i in (((t.attributionControl = this)._container = si(
          "div",
          "leaflet-control-attribution"
        )),
        Oi(this._container),
        t._layers))
          t._layers[i].getAttribution &&
            this.addAttribution(t._layers[i].getAttribution());
        return this._update(), this._container;
      },
      setPrefix: function (t) {
        return (this.options.prefix = t), this._update(), this;
      },
      addAttribution: function (t) {
        return (
          t &&
            (this._attributions[t] || (this._attributions[t] = 0),
            this._attributions[t]++,
            this._update()),
          this
        );
      },
      removeAttribution: function (t) {
        return (
          t &&
            this._attributions[t] &&
            (this._attributions[t]--, this._update()),
          this
        );
      },
      _update: function () {
        if (this._map) {
          var t = [];
          for (var i in this._attributions) this._attributions[i] && t.push(i);
          var e = [];
          this.options.prefix && e.push(this.options.prefix),
            t.length && e.push(t.join(", ")),
            (this._container.innerHTML = e.join(" | "));
        }
      }
    });
  Ki.mergeOptions({ attributionControl: !0 }),
    Ki.addInitHook(function () {
      this.options.attributionControl && new te().addTo(this);
    });
  (Xi.Layers = Ji),
    (Xi.Zoom = $i),
    (Xi.Scale = Qi),
    (Xi.Attribution = te),
    (Yi.layers = function (t, i, e) {
      return new Ji(t, i, e);
    }),
    (Yi.zoom = function (t) {
      return new $i(t);
    }),
    (Yi.scale = function (t) {
      return new Qi(t);
    }),
    (Yi.attribution = function (t) {
      return new te(t);
    });
  var ie = S.extend({
    initialize: function (t) {
      this._map = t;
    },
    enable: function () {
      return this._enabled || ((this._enabled = !0), this.addHooks()), this;
    },
    disable: function () {
      return this._enabled && ((this._enabled = !1), this.removeHooks()), this;
    },
    enabled: function () {
      return !!this._enabled;
    }
  });
  ie.addTo = function (t, i) {
    return t.addHandler(i, this), this;
  };
  var ee,
    ne = { Events: Z },
    oe = bt ? "touchstart mousedown" : "mousedown",
    se = {
      mousedown: "mouseup",
      touchstart: "touchend",
      pointerdown: "touchend",
      MSPointerDown: "touchend"
    },
    re = {
      mousedown: "mousemove",
      touchstart: "touchmove",
      pointerdown: "touchmove",
      MSPointerDown: "touchmove"
    },
    ae = E.extend({
      options: { clickTolerance: 3 },
      initialize: function (t, i, e, n) {
        c(this, n),
          (this._element = t),
          (this._dragStartTarget = i || t),
          (this._preventOutline = e);
      },
      enable: function () {
        this._enabled ||
          (zi(this._dragStartTarget, oe, this._onDown, this),
          (this._enabled = !0));
      },
      disable: function () {
        this._enabled &&
          (ae._dragging === this && this.finishDrag(),
          Si(this._dragStartTarget, oe, this._onDown, this),
          (this._enabled = !1),
          (this._moved = !1));
      },
      _onDown: function (t) {
        var i, e;
        !t._simulated &&
          this._enabled &&
          ((this._moved = !1),
          li(this._element, "leaflet-zoom-anim") ||
            ae._dragging ||
            t.shiftKey ||
            (1 !== t.which && 1 !== t.button && !t.touches) ||
            ((ae._dragging = this)._preventOutline && Pi(this._element),
            xi(),
            Xt(),
            this._moving ||
              (this.fire("down"),
              (i = t.touches ? t.touches[0] : t),
              (e = bi(this._element)),
              (this._startPoint = new k(i.clientX, i.clientY)),
              (this._parentScale = Ti(e)),
              zi(document, re[t.type], this._onMove, this),
              zi(document, se[t.type], this._onUp, this))));
      },
      _onMove: function (t) {
        var i, e;
        !t._simulated &&
          this._enabled &&
          (t.touches && 1 < t.touches.length
            ? (this._moved = !0)
            : ((e = new k(
                (i =
                  t.touches && 1 === t.touches.length
                    ? t.touches[0]
                    : t).clientX,
                i.clientY
              )._subtract(this._startPoint)).x ||
                e.y) &&
              (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance ||
                ((e.x /= this._parentScale.x),
                (e.y /= this._parentScale.y),
                Ri(t),
                this._moved ||
                  (this.fire("dragstart"),
                  (this._moved = !0),
                  (this._startPos = yi(this._element).subtract(e)),
                  ci(document.body, "leaflet-dragging"),
                  (this._lastTarget = t.target || t.srcElement),
                  window.SVGElementInstance &&
                    this._lastTarget instanceof window.SVGElementInstance &&
                    (this._lastTarget =
                      this._lastTarget.correspondingUseElement),
                  ci(this._lastTarget, "leaflet-drag-target")),
                (this._newPos = this._startPos.add(e)),
                (this._moving = !0),
                z(this._animRequest),
                (this._lastEvent = t),
                (this._animRequest = M(this._updatePosition, this, !0)))));
      },
      _updatePosition: function () {
        var t = { originalEvent: this._lastEvent };
        this.fire("predrag", t),
          vi(this._element, this._newPos),
          this.fire("drag", t);
      },
      _onUp: function (t) {
        !t._simulated && this._enabled && this.finishDrag();
      },
      finishDrag: function () {
        for (var t in (_i(document.body, "leaflet-dragging"),
        this._lastTarget &&
          (_i(this._lastTarget, "leaflet-drag-target"),
          (this._lastTarget = null)),
        re))
          Si(document, re[t], this._onMove, this),
            Si(document, se[t], this._onUp, this);
        wi(),
          Jt(),
          this._moved &&
            this._moving &&
            (z(this._animRequest),
            this.fire("dragend", {
              distance: this._newPos.distanceTo(this._startPos)
            })),
          (this._moving = !1),
          (ae._dragging = !1);
      }
    });
  function he(t, i) {
    if (!i || !t.length) return t.slice();
    var e = i * i;
    return (t = (function (t, i) {
      var e = t.length,
        n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
      (n[0] = n[e - 1] = 1),
        (function t(i, e, n, o, s) {
          var r,
            a,
            h,
            u = 0;
          for (a = o + 1; a <= s - 1; a++)
            (h = de(i[a], i[o], i[s], !0)), u < h && ((r = a), (u = h));
          n < u && ((e[r] = 1), t(i, e, n, o, r), t(i, e, n, r, s));
        })(t, n, i, 0, e - 1);
      var o,
        s = [];
      for (o = 0; o < e; o++) n[o] && s.push(t[o]);
      return s;
    })(
      (t = (function (t, i) {
        for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++)
          (function (t, i) {
            var e = i.x - t.x,
              n = i.y - t.y;
            return e * e + n * n;
          })(t[n], t[o]) > i && (e.push(t[n]), (o = n));
        o < s - 1 && e.push(t[s - 1]);
        return e;
      })(t, e)),
      e
    ));
  }
  function ue(t, i, e) {
    return Math.sqrt(de(t, i, e, !0));
  }
  function le(t, i, e, n, o) {
    var s,
      r,
      a,
      h = n ? ee : _e(t, e),
      u = _e(i, e);
    for (ee = u; ; ) {
      if (!(h | u)) return [t, i];
      if (h & u) return !1;
      (a = _e((r = ce(t, i, (s = h || u), e, o)), e)),
        s === h ? ((t = r), (h = a)) : ((i = r), (u = a));
    }
  }
  function ce(t, i, e, n, o) {
    var s,
      r,
      a = i.x - t.x,
      h = i.y - t.y,
      u = n.min,
      l = n.max;
    return (
      8 & e
        ? ((s = t.x + (a * (l.y - t.y)) / h), (r = l.y))
        : 4 & e
        ? ((s = t.x + (a * (u.y - t.y)) / h), (r = u.y))
        : 2 & e
        ? ((s = l.x), (r = t.y + (h * (l.x - t.x)) / a))
        : 1 & e && ((s = u.x), (r = t.y + (h * (u.x - t.x)) / a)),
      new k(s, r, o)
    );
  }
  function _e(t, i) {
    var e = 0;
    return (
      t.x < i.min.x ? (e |= 1) : t.x > i.max.x && (e |= 2),
      t.y < i.min.y ? (e |= 4) : t.y > i.max.y && (e |= 8),
      e
    );
  }
  function de(t, i, e, n) {
    var o,
      s = i.x,
      r = i.y,
      a = e.x - s,
      h = e.y - r,
      u = a * a + h * h;
    return (
      0 < u &&
        (1 < (o = ((t.x - s) * a + (t.y - r) * h) / u)
          ? ((s = e.x), (r = e.y))
          : 0 < o && ((s += a * o), (r += h * o))),
      (a = t.x - s),
      (h = t.y - r),
      n ? a * a + h * h : new k(s, r)
    );
  }
  function pe(t) {
    return !g(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0]);
  }
  function me(t) {
    return (
      console.warn(
        "Deprecated use of _flat, please use L.LineUtil.isFlat instead."
      ),
      pe(t)
    );
  }
  var fe = {
    simplify: he,
    pointToSegmentDistance: ue,
    closestPointOnSegment: function (t, i, e) {
      return de(t, i, e);
    },
    clipSegment: le,
    _getEdgeIntersection: ce,
    _getBitCode: _e,
    _sqClosestPointOnSegment: de,
    isFlat: pe,
    _flat: me
  };
  function ge(t, i, e) {
    for (
      var n, o, s, r, a, h, u, l = [1, 4, 2, 8], c = 0, _ = t.length;
      c < _;
      c++
    )
      t[c]._code = _e(t[c], i);
    for (s = 0; s < 4; s++) {
      for (h = l[s], n = [], c = 0, o = (_ = t.length) - 1; c < _; o = c++)
        (r = t[c]),
          (a = t[o]),
          r._code & h
            ? a._code & h ||
              (((u = ce(a, r, h, i, e))._code = _e(u, i)), n.push(u))
            : (a._code & h &&
                (((u = ce(a, r, h, i, e))._code = _e(u, i)), n.push(u)),
              n.push(r));
      t = n;
    }
    return t;
  }
  var ve,
    ye = { clipPolygon: ge },
    xe = {
      project: function (t) {
        return new k(t.lng, t.lat);
      },
      unproject: function (t) {
        return new D(t.y, t.x);
      },
      bounds: new I([-180, -90], [180, 90])
    },
    we = {
      R: 6378137,
      R_MINOR: 6356752.314245179,
      bounds: new I(
        [-20037508.34279, -15496570.73972],
        [20037508.34279, 18764656.23138]
      ),
      project: function (t) {
        var i = Math.PI / 180,
          e = this.R,
          n = t.lat * i,
          o = this.R_MINOR / e,
          s = Math.sqrt(1 - o * o),
          r = s * Math.sin(n),
          a =
            Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2),
          n = -e * Math.log(Math.max(a, 1e-10));
        return new k(t.lng * i * e, n);
      },
      unproject: function (t) {
        for (
          var i,
            e = 180 / Math.PI,
            n = this.R,
            o = this.R_MINOR / n,
            s = Math.sqrt(1 - o * o),
            r = Math.exp(-t.y / n),
            a = Math.PI / 2 - 2 * Math.atan(r),
            h = 0,
            u = 0.1;
          h < 15 && 1e-7 < Math.abs(u);
          h++
        )
          (i = s * Math.sin(a)),
            (i = Math.pow((1 - i) / (1 + i), s / 2)),
            (a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a);
        return new D(a * e, (t.x * e) / n);
      }
    },
    Pe = { LonLat: xe, Mercator: we, SphericalMercator: V },
    Le = h({}, F, {
      code: "EPSG:3395",
      projection: we,
      transformation: G((ve = 0.5 / (Math.PI * we.R)), 0.5, -ve, 0.5)
    }),
    be = h({}, F, {
      code: "EPSG:4326",
      projection: xe,
      transformation: G(1 / 180, 1, -1 / 180, 0.5)
    }),
    Te = h({}, H, {
      projection: xe,
      transformation: G(1, 0, -1, 0),
      scale: function (t) {
        return Math.pow(2, t);
      },
      zoom: function (t) {
        return Math.log(t) / Math.LN2;
      },
      distance: function (t, i) {
        var e = i.lng - t.lng,
          n = i.lat - t.lat;
        return Math.sqrt(e * e + n * n);
      },
      infinite: !0
    });
  (H.Earth = F),
    (H.EPSG3395 = Le),
    (H.EPSG3857 = Y),
    (H.EPSG900913 = X),
    (H.EPSG4326 = be),
    (H.Simple = Te);
  var Me = E.extend({
    options: {
      pane: "overlayPane",
      attribution: null,
      bubblingMouseEvents: !0
    },
    addTo: function (t) {
      return t.addLayer(this), this;
    },
    remove: function () {
      return this.removeFrom(this._map || this._mapToAdd);
    },
    removeFrom: function (t) {
      return t && t.removeLayer(this), this;
    },
    getPane: function (t) {
      return this._map.getPane(t ? this.options[t] || t : this.options.pane);
    },
    addInteractiveTarget: function (t) {
      return (this._map._targets[m(t)] = this);
    },
    removeInteractiveTarget: function (t) {
      return delete this._map._targets[m(t)], this;
    },
    getAttribution: function () {
      return this.options.attribution;
    },
    _layerAdd: function (t) {
      var i,
        e = t.target;
      e.hasLayer(this) &&
        ((this._map = e),
        (this._zoomAnimated = e._zoomAnimated),
        this.getEvents &&
          ((i = this.getEvents()),
          e.on(i, this),
          this.once(
            "remove",
            function () {
              e.off(i, this);
            },
            this
          )),
        this.onAdd(e),
        this.getAttribution &&
          e.attributionControl &&
          e.attributionControl.addAttribution(this.getAttribution()),
        this.fire("add"),
        e.fire("layeradd", { layer: this }));
    }
  });
  Ki.include({
    addLayer: function (t) {
      if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
      var i = m(t);
      return (
        this._layers[i] ||
          (((this._layers[i] = t)._mapToAdd = this),
          t.beforeAdd && t.beforeAdd(this),
          this.whenReady(t._layerAdd, t)),
        this
      );
    },
    removeLayer: function (t) {
      var i = m(t);
      return (
        this._layers[i] &&
          (this._loaded && t.onRemove(this),
          t.getAttribution &&
            this.attributionControl &&
            this.attributionControl.removeAttribution(t.getAttribution()),
          delete this._layers[i],
          this._loaded &&
            (this.fire("layerremove", { layer: t }), t.fire("remove")),
          (t._map = t._mapToAdd = null)),
        this
      );
    },
    hasLayer: function (t) {
      return !!t && m(t) in this._layers;
    },
    eachLayer: function (t, i) {
      for (var e in this._layers) t.call(i, this._layers[e]);
      return this;
    },
    _addLayers: function (t) {
      for (var i = 0, e = (t = t ? (g(t) ? t : [t]) : []).length; i < e; i++)
        this.addLayer(t[i]);
    },
    _addZoomLimit: function (t) {
      (!isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
        ((this._zoomBoundLayers[m(t)] = t), this._updateZoomLevels());
    },
    _removeZoomLimit: function (t) {
      var i = m(t);
      this._zoomBoundLayers[i] &&
        (delete this._zoomBoundLayers[i], this._updateZoomLevels());
    },
    _updateZoomLevels: function () {
      var t = 1 / 0,
        i = -1 / 0,
        e = this._getZoomSpan();
      for (var n in this._zoomBoundLayers)
        var o = this._zoomBoundLayers[n].options,
          t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom),
          i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom);
      (this._layersMaxZoom = i === -1 / 0 ? void 0 : i),
        (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
        e !== this._getZoomSpan() && this.fire("zoomlevelschange"),
        void 0 === this.options.maxZoom &&
          this._layersMaxZoom &&
          this.getZoom() > this._layersMaxZoom &&
          this.setZoom(this._layersMaxZoom),
        void 0 === this.options.minZoom &&
          this._layersMinZoom &&
          this.getZoom() < this._layersMinZoom &&
          this.setZoom(this._layersMinZoom);
    }
  });
  var ze = Me.extend({
      initialize: function (t, i) {
        var e, n;
        if ((c(this, i), (this._layers = {}), t))
          for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e]);
      },
      addLayer: function (t) {
        var i = this.getLayerId(t);
        return (this._layers[i] = t), this._map && this._map.addLayer(t), this;
      },
      removeLayer: function (t) {
        var i = t in this._layers ? t : this.getLayerId(t);
        return (
          this._map &&
            this._layers[i] &&
            this._map.removeLayer(this._layers[i]),
          delete this._layers[i],
          this
        );
      },
      hasLayer: function (t) {
        return (
          !!t && ("number" == typeof t ? t : this.getLayerId(t)) in this._layers
        );
      },
      clearLayers: function () {
        return this.eachLayer(this.removeLayer, this);
      },
      invoke: function (t) {
        var i,
          e,
          n = Array.prototype.slice.call(arguments, 1);
        for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
        return this;
      },
      onAdd: function (t) {
        this.eachLayer(t.addLayer, t);
      },
      onRemove: function (t) {
        this.eachLayer(t.removeLayer, t);
      },
      eachLayer: function (t, i) {
        for (var e in this._layers) t.call(i, this._layers[e]);
        return this;
      },
      getLayer: function (t) {
        return this._layers[t];
      },
      getLayers: function () {
        var t = [];
        return this.eachLayer(t.push, t), t;
      },
      setZIndex: function (t) {
        return this.invoke("setZIndex", t);
      },
      getLayerId: m
    }),
    Ce = ze.extend({
      addLayer: function (t) {
        return this.hasLayer(t)
          ? this
          : (t.addEventParent(this),
            ze.prototype.addLayer.call(this, t),
            this.fire("layeradd", { layer: t }));
      },
      removeLayer: function (t) {
        return this.hasLayer(t)
          ? (t in this._layers && (t = this._layers[t]),
            t.removeEventParent(this),
            ze.prototype.removeLayer.call(this, t),
            this.fire("layerremove", { layer: t }))
          : this;
      },
      setStyle: function (t) {
        return this.invoke("setStyle", t);
      },
      bringToFront: function () {
        return this.invoke("bringToFront");
      },
      bringToBack: function () {
        return this.invoke("bringToBack");
      },
      getBounds: function () {
        var t = new R();
        for (var i in this._layers) {
          var e = this._layers[i];
          t.extend(e.getBounds ? e.getBounds() : e.getLatLng());
        }
        return t;
      }
    }),
    Se = S.extend({
      options: { popupAnchor: [0, 0], tooltipAnchor: [0, 0] },
      initialize: function (t) {
        c(this, t);
      },
      createIcon: function (t) {
        return this._createIcon("icon", t);
      },
      createShadow: function (t) {
        return this._createIcon("shadow", t);
      },
      _createIcon: function (t, i) {
        var e = this._getIconUrl(t);
        if (!e) {
          if ("icon" === t)
            throw new Error("iconUrl not set in Icon options (see the docs).");
          return null;
        }
        var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
        return this._setIconStyles(n, t), n;
      },
      _setIconStyles: function (t, i) {
        var e = this.options,
          n = e[i + "Size"];
        "number" == typeof n && (n = [n, n]);
        var o = A(n),
          s = A(
            ("shadow" === i && e.shadowAnchor) ||
              e.iconAnchor ||
              (o && o.divideBy(2, !0))
          );
        (t.className = "leaflet-marker-" + i + " " + (e.className || "")),
          s &&
            ((t.style.marginLeft = -s.x + "px"),
            (t.style.marginTop = -s.y + "px")),
          o && ((t.style.width = o.x + "px"), (t.style.height = o.y + "px"));
      },
      _createImg: function (t, i) {
        return ((i = i || document.createElement("img")).src = t), i;
      },
      _getIconUrl: function (t) {
        return (zt && this.options[t + "RetinaUrl"]) || this.options[t + "Url"];
      }
    });
  var Ze = Se.extend({
      options: {
        iconUrl: "marker-icon.png",
        iconRetinaUrl: "marker-icon-2x.png",
        shadowUrl: "marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        tooltipAnchor: [16, -28],
        shadowSize: [41, 41]
      },
      _getIconUrl: function (t) {
        return (
          Ze.imagePath || (Ze.imagePath = this._detectIconPath()),
          (this.options.imagePath || Ze.imagePath) +
            Se.prototype._getIconUrl.call(this, t)
        );
      },
      _detectIconPath: function () {
        var t = si("div", "leaflet-default-icon-path", document.body),
          i = oi(t, "background-image") || oi(t, "backgroundImage");
        return (
          document.body.removeChild(t),
          (i =
            null === i || 0 !== i.indexOf("url")
              ? ""
              : i
                  .replace(/^url\(["']?/, "")
                  .replace(/marker-icon\.png["']?\)$/, ""))
        );
      }
    }),
    Ee = ie.extend({
      initialize: function (t) {
        this._marker = t;
      },
      addHooks: function () {
        var t = this._marker._icon;
        this._draggable || (this._draggable = new ae(t, t, !0)),
          this._draggable
            .on(
              {
                dragstart: this._onDragStart,
                predrag: this._onPreDrag,
                drag: this._onDrag,
                dragend: this._onDragEnd
              },
              this
            )
            .enable(),
          ci(t, "leaflet-marker-draggable");
      },
      removeHooks: function () {
        this._draggable
          .off(
            {
              dragstart: this._onDragStart,
              predrag: this._onPreDrag,
              drag: this._onDrag,
              dragend: this._onDragEnd
            },
            this
          )
          .disable(),
          this._marker._icon &&
            _i(this._marker._icon, "leaflet-marker-draggable");
      },
      moved: function () {
        return this._draggable && this._draggable._moved;
      },
      _adjustPan: function (t) {
        var i,
          e = this._marker,
          n = e._map,
          o = this._marker.options.autoPanSpeed,
          s = this._marker.options.autoPanPadding,
          r = yi(e._icon),
          a = n.getPixelBounds(),
          h = n.getPixelOrigin(),
          u = O(a.min._subtract(h).add(s), a.max._subtract(h).subtract(s));
        u.contains(r) ||
          ((i = A(
            (Math.max(u.max.x, r.x) - u.max.x) / (a.max.x - u.max.x) -
              (Math.min(u.min.x, r.x) - u.min.x) / (a.min.x - u.min.x),
            (Math.max(u.max.y, r.y) - u.max.y) / (a.max.y - u.max.y) -
              (Math.min(u.min.y, r.y) - u.min.y) / (a.min.y - u.min.y)
          ).multiplyBy(o)),
          n.panBy(i, { animate: !1 }),
          this._draggable._newPos._add(i),
          this._draggable._startPos._add(i),
          vi(e._icon, this._draggable._newPos),
          this._onDrag(t),
          (this._panRequest = M(this._adjustPan.bind(this, t))));
      },
      _onDragStart: function () {
        (this._oldLatLng = this._marker.getLatLng()),
          this._marker.closePopup && this._marker.closePopup(),
          this._marker.fire("movestart").fire("dragstart");
      },
      _onPreDrag: function (t) {
        this._marker.options.autoPan &&
          (z(this._panRequest),
          (this._panRequest = M(this._adjustPan.bind(this, t))));
      },
      _onDrag: function (t) {
        var i = this._marker,
          e = i._shadow,
          n = yi(i._icon),
          o = i._map.layerPointToLatLng(n);
        e && vi(e, n),
          (i._latlng = o),
          (t.latlng = o),
          (t.oldLatLng = this._oldLatLng),
          i.fire("move", t).fire("drag", t);
      },
      _onDragEnd: function (t) {
        z(this._panRequest),
          delete this._oldLatLng,
          this._marker.fire("moveend").fire("dragend", t);
      }
    }),
    ke = Me.extend({
      options: {
        icon: new Ze(),
        interactive: !0,
        keyboard: !0,
        title: "",
        alt: "",
        zIndexOffset: 0,
        opacity: 1,
        riseOnHover: !1,
        riseOffset: 250,
        pane: "markerPane",
        shadowPane: "shadowPane",
        bubblingMouseEvents: !1,
        draggable: !1,
        autoPan: !1,
        autoPanPadding: [50, 50],
        autoPanSpeed: 10
      },
      initialize: function (t, i) {
        c(this, i), (this._latlng = j(t));
      },
      onAdd: function (t) {
        (this._zoomAnimated =
          this._zoomAnimated && t.options.markerZoomAnimation),
          this._zoomAnimated && t.on("zoomanim", this._animateZoom, this),
          this._initIcon(),
          this.update();
      },
      onRemove: function (t) {
        this.dragging &&
          this.dragging.enabled() &&
          ((this.options.draggable = !0), this.dragging.removeHooks()),
          delete this.dragging,
          this._zoomAnimated && t.off("zoomanim", this._animateZoom, this),
          this._removeIcon(),
          this._removeShadow();
      },
      getEvents: function () {
        return { zoom: this.update, viewreset: this.update };
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = j(t)),
          this.update(),
          this.fire("move", { oldLatLng: i, latlng: this._latlng })
        );
      },
      setZIndexOffset: function (t) {
        return (this.options.zIndexOffset = t), this.update();
      },
      getIcon: function () {
        return this.options.icon;
      },
      setIcon: function (t) {
        return (
          (this.options.icon = t),
          this._map && (this._initIcon(), this.update()),
          this._popup && this.bindPopup(this._popup, this._popup.options),
          this
        );
      },
      getElement: function () {
        return this._icon;
      },
      update: function () {
        var t;
        return (
          this._icon &&
            this._map &&
            ((t = this._map.latLngToLayerPoint(this._latlng).round()),
            this._setPos(t)),
          this
        );
      },
      _initIcon: function () {
        var t = this.options,
          i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
          e = t.icon.createIcon(this._icon),
          n = !1;
        e !== this._icon &&
          (this._icon && this._removeIcon(),
          (n = !0),
          t.title && (e.title = t.title),
          "IMG" === e.tagName && (e.alt = t.alt || "")),
          ci(e, i),
          t.keyboard && (e.tabIndex = "0"),
          (this._icon = e),
          t.riseOnHover &&
            this.on({
              mouseover: this._bringToFront,
              mouseout: this._resetZIndex
            });
        var o = t.icon.createShadow(this._shadow),
          s = !1;
        o !== this._shadow && (this._removeShadow(), (s = !0)),
          o && (ci(o, i), (o.alt = "")),
          (this._shadow = o),
          t.opacity < 1 && this._updateOpacity(),
          n && this.getPane().appendChild(this._icon),
          this._initInteraction(),
          o && s && this.getPane(t.shadowPane).appendChild(this._shadow);
      },
      _removeIcon: function () {
        this.options.riseOnHover &&
          this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }),
          ri(this._icon),
          this.removeInteractiveTarget(this._icon),
          (this._icon = null);
      },
      _removeShadow: function () {
        this._shadow && ri(this._shadow), (this._shadow = null);
      },
      _setPos: function (t) {
        this._icon && vi(this._icon, t),
          this._shadow && vi(this._shadow, t),
          (this._zIndex = t.y + this.options.zIndexOffset),
          this._resetZIndex();
      },
      _updateZIndex: function (t) {
        this._icon && (this._icon.style.zIndex = this._zIndex + t);
      },
      _animateZoom: function (t) {
        var i = this._map
          ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
          .round();
        this._setPos(i);
      },
      _initInteraction: function () {
        var t;
        this.options.interactive &&
          (ci(this._icon, "leaflet-interactive"),
          this.addInteractiveTarget(this._icon),
          Ee &&
            ((t = this.options.draggable),
            this.dragging &&
              ((t = this.dragging.enabled()), this.dragging.disable()),
            (this.dragging = new Ee(this)),
            t && this.dragging.enable()));
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._map && this._updateOpacity(), this
        );
      },
      _updateOpacity: function () {
        var t = this.options.opacity;
        this._icon && mi(this._icon, t), this._shadow && mi(this._shadow, t);
      },
      _bringToFront: function () {
        this._updateZIndex(this.options.riseOffset);
      },
      _resetZIndex: function () {
        this._updateZIndex(0);
      },
      _getPopupAnchor: function () {
        return this.options.icon.options.popupAnchor;
      },
      _getTooltipAnchor: function () {
        return this.options.icon.options.tooltipAnchor;
      }
    });
  var Be = Me.extend({
      options: {
        stroke: !0,
        color: "#3388ff",
        weight: 3,
        opacity: 1,
        lineCap: "round",
        lineJoin: "round",
        dashArray: null,
        dashOffset: null,
        fill: !1,
        fillColor: null,
        fillOpacity: 0.2,
        fillRule: "evenodd",
        interactive: !0,
        bubblingMouseEvents: !0
      },
      beforeAdd: function (t) {
        this._renderer = t.getRenderer(this);
      },
      onAdd: function () {
        this._renderer._initPath(this),
          this._reset(),
          this._renderer._addPath(this);
      },
      onRemove: function () {
        this._renderer._removePath(this);
      },
      redraw: function () {
        return this._map && this._renderer._updatePath(this), this;
      },
      setStyle: function (t) {
        return (
          c(this, t),
          this._renderer &&
            (this._renderer._updateStyle(this),
            this.options.stroke &&
              t &&
              Object.prototype.hasOwnProperty.call(t, "weight") &&
              this._updateBounds()),
          this
        );
      },
      bringToFront: function () {
        return this._renderer && this._renderer._bringToFront(this), this;
      },
      bringToBack: function () {
        return this._renderer && this._renderer._bringToBack(this), this;
      },
      getElement: function () {
        return this._path;
      },
      _reset: function () {
        this._project(), this._update();
      },
      _clickTolerance: function () {
        return (
          (this.options.stroke ? this.options.weight / 2 : 0) +
          this._renderer.options.tolerance
        );
      }
    }),
    Ae = Be.extend({
      options: { fill: !0, radius: 10 },
      initialize: function (t, i) {
        c(this, i), (this._latlng = j(t)), (this._radius = this.options.radius);
      },
      setLatLng: function (t) {
        var i = this._latlng;
        return (
          (this._latlng = j(t)),
          this.redraw(),
          this.fire("move", { oldLatLng: i, latlng: this._latlng })
        );
      },
      getLatLng: function () {
        return this._latlng;
      },
      setRadius: function (t) {
        return (this.options.radius = this._radius = t), this.redraw();
      },
      getRadius: function () {
        return this._radius;
      },
      setStyle: function (t) {
        var i = (t && t.radius) || this._radius;
        return Be.prototype.setStyle.call(this, t), this.setRadius(i), this;
      },
      _project: function () {
        (this._point = this._map.latLngToLayerPoint(this._latlng)),
          this._updateBounds();
      },
      _updateBounds: function () {
        var t = this._radius,
          i = this._radiusY || t,
          e = this._clickTolerance(),
          n = [t + e, i + e];
        this._pxBounds = new I(this._point.subtract(n), this._point.add(n));
      },
      _update: function () {
        this._map && this._updatePath();
      },
      _updatePath: function () {
        this._renderer._updateCircle(this);
      },
      _empty: function () {
        return (
          this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        );
      },
      _containsPoint: function (t) {
        return (
          t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        );
      }
    });
  var Ie = Ae.extend({
    initialize: function (t, i, e) {
      if (
        ("number" == typeof i && (i = h({}, e, { radius: i })),
        c(this, i),
        (this._latlng = j(t)),
        isNaN(this.options.radius))
      )
        throw new Error("Circle radius cannot be NaN");
      this._mRadius = this.options.radius;
    },
    setRadius: function (t) {
      return (this._mRadius = t), this.redraw();
    },
    getRadius: function () {
      return this._mRadius;
    },
    getBounds: function () {
      var t = [this._radius, this._radiusY || this._radius];
      return new R(
        this._map.layerPointToLatLng(this._point.subtract(t)),
        this._map.layerPointToLatLng(this._point.add(t))
      );
    },
    setStyle: Be.prototype.setStyle,
    _project: function () {
      var t,
        i,
        e,
        n,
        o,
        s,
        r,
        a,
        h = this._latlng.lng,
        u = this._latlng.lat,
        l = this._map,
        c = l.options.crs;
      c.distance === F.distance
        ? ((t = Math.PI / 180),
          (i = this._mRadius / F.R / t),
          (e = l.project([u + i, h])),
          (n = l.project([u - i, h])),
          (o = e.add(n).divideBy(2)),
          (s = l.unproject(o).lat),
          (r =
            Math.acos(
              (Math.cos(i * t) - Math.sin(u * t) * Math.sin(s * t)) /
                (Math.cos(u * t) * Math.cos(s * t))
            ) / t),
          (!isNaN(r) && 0 !== r) || (r = i / Math.cos((Math.PI / 180) * u)),
          (this._point = o.subtract(l.getPixelOrigin())),
          (this._radius = isNaN(r) ? 0 : o.x - l.project([s, h - r]).x),
          (this._radiusY = o.y - e.y))
        : ((a = c.unproject(
            c.project(this._latlng).subtract([this._mRadius, 0])
          )),
          (this._point = l.latLngToLayerPoint(this._latlng)),
          (this._radius = this._point.x - l.latLngToLayerPoint(a).x)),
        this._updateBounds();
    }
  });
  var Oe = Be.extend({
    options: { smoothFactor: 1, noClip: !1 },
    initialize: function (t, i) {
      c(this, i), this._setLatLngs(t);
    },
    getLatLngs: function () {
      return this._latlngs;
    },
    setLatLngs: function (t) {
      return this._setLatLngs(t), this.redraw();
    },
    isEmpty: function () {
      return !this._latlngs.length;
    },
    closestLayerPoint: function (t) {
      for (
        var i, e, n = 1 / 0, o = null, s = de, r = 0, a = this._parts.length;
        r < a;
        r++
      )
        for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
          var c = s(t, (i = h[u - 1]), (e = h[u]), !0);
          c < n && ((n = c), (o = s(t, i, e)));
        }
      return o && (o.distance = Math.sqrt(n)), o;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error("Must add layer to map before using getCenter()");
      var t,
        i,
        e,
        n,
        o,
        s,
        r,
        a = this._rings[0],
        h = a.length;
      if (!h) return null;
      for (i = t = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
      if (0 === i) return this._map.layerPointToLatLng(a[0]);
      for (n = t = 0; t < h - 1; t++)
        if (((o = a[t]), (s = a[t + 1]), i < (n += e = o.distanceTo(s))))
          return (
            (r = (n - i) / e),
            this._map.layerPointToLatLng([
              s.x - r * (s.x - o.x),
              s.y - r * (s.y - o.y)
            ])
          );
    },
    getBounds: function () {
      return this._bounds;
    },
    addLatLng: function (t, i) {
      return (
        (i = i || this._defaultShape()),
        (t = j(t)),
        i.push(t),
        this._bounds.extend(t),
        this.redraw()
      );
    },
    _setLatLngs: function (t) {
      (this._bounds = new R()), (this._latlngs = this._convertLatLngs(t));
    },
    _defaultShape: function () {
      return pe(this._latlngs) ? this._latlngs : this._latlngs[0];
    },
    _convertLatLngs: function (t) {
      for (var i = [], e = pe(t), n = 0, o = t.length; n < o; n++)
        e
          ? ((i[n] = j(t[n])), this._bounds.extend(i[n]))
          : (i[n] = this._convertLatLngs(t[n]));
      return i;
    },
    _project: function () {
      var t = new I();
      (this._rings = []),
        this._projectLatlngs(this._latlngs, this._rings, t),
        this._bounds.isValid() &&
          t.isValid() &&
          ((this._rawPxBounds = t), this._updateBounds());
    },
    _updateBounds: function () {
      var t = this._clickTolerance(),
        i = new k(t, t);
      this._pxBounds = new I([
        this._rawPxBounds.min.subtract(i),
        this._rawPxBounds.max.add(i)
      ]);
    },
    _projectLatlngs: function (t, i, e) {
      var n,
        o,
        s = t[0] instanceof D,
        r = t.length;
      if (s) {
        for (o = [], n = 0; n < r; n++)
          (o[n] = this._map.latLngToLayerPoint(t[n])), e.extend(o[n]);
        i.push(o);
      } else for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e);
    },
    _clipPoints: function () {
      var t = this._renderer._bounds;
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
        if (this.options.noClip) this._parts = this._rings;
        else
          for (
            var i,
              e,
              n,
              o,
              s = this._parts,
              r = 0,
              a = 0,
              h = this._rings.length;
            r < h;
            r++
          )
            for (i = 0, e = (o = this._rings[r]).length; i < e - 1; i++)
              (n = le(o[i], o[i + 1], t, i, !0)) &&
                ((s[a] = s[a] || []),
                s[a].push(n[0]),
                (n[1] === o[i + 1] && i !== e - 2) || (s[a].push(n[1]), a++));
    },
    _simplifyPoints: function () {
      for (
        var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length;
        e < n;
        e++
      )
        t[e] = he(t[e], i);
    },
    _update: function () {
      this._map &&
        (this._clipPoints(), this._simplifyPoints(), this._updatePath());
    },
    _updatePath: function () {
      this._renderer._updatePoly(this);
    },
    _containsPoint: function (t, i) {
      var e,
        n,
        o,
        s,
        r,
        a,
        h = this._clickTolerance();
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (e = 0, s = this._parts.length; e < s; e++)
        for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
          if ((i || 0 !== n) && ue(t, a[o], a[n]) <= h) return !0;
      return !1;
    }
  });
  Oe._flat = me;
  var Re = Oe.extend({
    options: { fill: !0 },
    isEmpty: function () {
      return !this._latlngs.length || !this._latlngs[0].length;
    },
    getCenter: function () {
      if (!this._map)
        throw new Error("Must add layer to map before using getCenter()");
      var t,
        i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u = this._rings[0],
        l = u.length;
      if (!l) return null;
      for (t = s = r = a = 0, i = l - 1; t < l; i = t++)
        (e = u[t]),
          (n = u[i]),
          (o = e.y * n.x - n.y * e.x),
          (r += (e.x + n.x) * o),
          (a += (e.y + n.y) * o),
          (s += 3 * o);
      return (
        (h = 0 === s ? u[0] : [r / s, a / s]), this._map.layerPointToLatLng(h)
      );
    },
    _convertLatLngs: function (t) {
      var i = Oe.prototype._convertLatLngs.call(this, t),
        e = i.length;
      return 2 <= e && i[0] instanceof D && i[0].equals(i[e - 1]) && i.pop(), i;
    },
    _setLatLngs: function (t) {
      Oe.prototype._setLatLngs.call(this, t),
        pe(this._latlngs) && (this._latlngs = [this._latlngs]);
    },
    _defaultShape: function () {
      return pe(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
    },
    _clipPoints: function () {
      var t = this._renderer._bounds,
        i = this.options.weight,
        e = new k(i, i),
        t = new I(t.min.subtract(e), t.max.add(e));
      if (((this._parts = []), this._pxBounds && this._pxBounds.intersects(t)))
        if (this.options.noClip) this._parts = this._rings;
        else
          for (var n, o = 0, s = this._rings.length; o < s; o++)
            (n = ge(this._rings[o], t, !0)).length && this._parts.push(n);
    },
    _updatePath: function () {
      this._renderer._updatePoly(this, !0);
    },
    _containsPoint: function (t) {
      var i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u = !1;
      if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
      for (o = 0, a = this._parts.length; o < a; o++)
        for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++)
          (e = i[s]),
            (n = i[r]),
            e.y > t.y != n.y > t.y &&
              t.x < ((n.x - e.x) * (t.y - e.y)) / (n.y - e.y) + e.x &&
              (u = !u);
      return u || Oe.prototype._containsPoint.call(this, t, !0);
    }
  });
  var Ne = Ce.extend({
    initialize: function (t, i) {
      c(this, i), (this._layers = {}), t && this.addData(t);
    },
    addData: function (t) {
      var i,
        e,
        n,
        o = g(t) ? t : t.features;
      if (o) {
        for (i = 0, e = o.length; i < e; i++)
          ((n = o[i]).geometries ||
            n.geometry ||
            n.features ||
            n.coordinates) &&
            this.addData(n);
        return this;
      }
      var s = this.options;
      if (s.filter && !s.filter(t)) return this;
      var r = De(t, s);
      return r
        ? ((r.feature = qe(t)),
          (r.defaultOptions = r.options),
          this.resetStyle(r),
          s.onEachFeature && s.onEachFeature(t, r),
          this.addLayer(r))
        : this;
    },
    resetStyle: function (t) {
      return void 0 === t
        ? this.eachLayer(this.resetStyle, this)
        : ((t.options = h({}, t.defaultOptions)),
          this._setLayerStyle(t, this.options.style),
          this);
    },
    setStyle: function (i) {
      return this.eachLayer(function (t) {
        this._setLayerStyle(t, i);
      }, this);
    },
    _setLayerStyle: function (t, i) {
      t.setStyle &&
        ("function" == typeof i && (i = i(t.feature)), t.setStyle(i));
    }
  });
  function De(t, i) {
    var e,
      n,
      o,
      s,
      r = "Feature" === t.type ? t.geometry : t,
      a = r ? r.coordinates : null,
      h = [],
      u = i && i.pointToLayer,
      l = (i && i.coordsToLatLng) || We;
    if (!a && !r) return null;
    switch (r.type) {
      case "Point":
        return je(u, t, (e = l(a)), i);
      case "MultiPoint":
        for (o = 0, s = a.length; o < s; o++)
          (e = l(a[o])), h.push(je(u, t, e, i));
        return new Ce(h);
      case "LineString":
      case "MultiLineString":
        return (n = He(a, "LineString" === r.type ? 0 : 1, l)), new Oe(n, i);
      case "Polygon":
      case "MultiPolygon":
        return (n = He(a, "Polygon" === r.type ? 1 : 2, l)), new Re(n, i);
      case "GeometryCollection":
        for (o = 0, s = r.geometries.length; o < s; o++) {
          var c = De(
            {
              geometry: r.geometries[o],
              type: "Feature",
              properties: t.properties
            },
            i
          );
          c && h.push(c);
        }
        return new Ce(h);
      default:
        throw new Error("Invalid GeoJSON object.");
    }
  }
  function je(t, i, e, n) {
    return t ? t(i, e) : new ke(e, n && n.markersInheritOptions && n);
  }
  function We(t) {
    return new D(t[1], t[0], t[2]);
  }
  function He(t, i, e) {
    for (var n, o = [], s = 0, r = t.length; s < r; s++)
      (n = i ? He(t[s], i - 1, e) : (e || We)(t[s])), o.push(n);
    return o;
  }
  function Fe(t, i) {
    return (
      (i = "number" == typeof i ? i : 6),
      void 0 !== t.alt
        ? [r(t.lng, i), r(t.lat, i), r(t.alt, i)]
        : [r(t.lng, i), r(t.lat, i)]
    );
  }
  function Ue(t, i, e, n) {
    for (var o = [], s = 0, r = t.length; s < r; s++)
      o.push(i ? Ue(t[s], i - 1, e, n) : Fe(t[s], n));
    return !i && e && o.push(o[0]), o;
  }
  function Ve(t, i) {
    return t.feature ? h({}, t.feature, { geometry: i }) : qe(i);
  }
  function qe(t) {
    return "Feature" === t.type || "FeatureCollection" === t.type
      ? t
      : { type: "Feature", properties: {}, geometry: t };
  }
  var Ge = {
    toGeoJSON: function (t) {
      return Ve(this, { type: "Point", coordinates: Fe(this.getLatLng(), t) });
    }
  };
  function Ke(t, i) {
    return new Ne(t, i);
  }
  ke.include(Ge),
    Ie.include(Ge),
    Ae.include(Ge),
    Oe.include({
      toGeoJSON: function (t) {
        var i = !pe(this._latlngs);
        return Ve(this, {
          type: (i ? "Multi" : "") + "LineString",
          coordinates: Ue(this._latlngs, i ? 1 : 0, !1, t)
        });
      }
    }),
    Re.include({
      toGeoJSON: function (t) {
        var i = !pe(this._latlngs),
          e = i && !pe(this._latlngs[0]),
          n = Ue(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
        return (
          i || (n = [n]),
          Ve(this, { type: (e ? "Multi" : "") + "Polygon", coordinates: n })
        );
      }
    }),
    ze.include({
      toMultiPoint: function (i) {
        var e = [];
        return (
          this.eachLayer(function (t) {
            e.push(t.toGeoJSON(i).geometry.coordinates);
          }),
          Ve(this, { type: "MultiPoint", coordinates: e })
        );
      },
      toGeoJSON: function (n) {
        var t =
          this.feature && this.feature.geometry && this.feature.geometry.type;
        if ("MultiPoint" === t) return this.toMultiPoint(n);
        var o = "GeometryCollection" === t,
          s = [];
        return (
          this.eachLayer(function (t) {
            var i, e;
            t.toGeoJSON &&
              ((i = t.toGeoJSON(n)),
              o
                ? s.push(i.geometry)
                : "FeatureCollection" === (e = qe(i)).type
                ? s.push.apply(s, e.features)
                : s.push(e));
          }),
          o
            ? Ve(this, { geometries: s, type: "GeometryCollection" })
            : { type: "FeatureCollection", features: s }
        );
      }
    });
  var Ye = Ke,
    Xe = Me.extend({
      options: {
        opacity: 1,
        alt: "",
        interactive: !1,
        crossOrigin: !1,
        errorOverlayUrl: "",
        zIndex: 1,
        className: ""
      },
      initialize: function (t, i, e) {
        (this._url = t), (this._bounds = N(i)), c(this, e);
      },
      onAdd: function () {
        this._image ||
          (this._initImage(),
          this.options.opacity < 1 && this._updateOpacity()),
          this.options.interactive &&
            (ci(this._image, "leaflet-interactive"),
            this.addInteractiveTarget(this._image)),
          this.getPane().appendChild(this._image),
          this._reset();
      },
      onRemove: function () {
        ri(this._image),
          this.options.interactive && this.removeInteractiveTarget(this._image);
      },
      setOpacity: function (t) {
        return (
          (this.options.opacity = t), this._image && this._updateOpacity(), this
        );
      },
      setStyle: function (t) {
        return t.opacity && this.setOpacity(t.opacity), this;
      },
      bringToFront: function () {
        return this._map && hi(this._image), this;
      },
      bringToBack: function () {
        return this._map && ui(this._image), this;
      },
      setUrl: function (t) {
        return (this._url = t), this._image && (this._image.src = t), this;
      },
      setBounds: function (t) {
        return (this._bounds = N(t)), this._map && this._reset(), this;
      },
      getEvents: function () {
        var t = { zoom: this._reset, viewreset: this._reset };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      setZIndex: function (t) {
        return (this.options.zIndex = t), this._updateZIndex(), this;
      },
      getBounds: function () {
        return this._bounds;
      },
      getElement: function () {
        return this._image;
      },
      _initImage: function () {
        var t = "IMG" === this._url.tagName,
          i = (this._image = t ? this._url : si("img"));
        ci(i, "leaflet-image-layer"),
          this._zoomAnimated && ci(i, "leaflet-zoom-animated"),
          this.options.className && ci(i, this.options.className),
          (i.onselectstart = a),
          (i.onmousemove = a),
          (i.onload = p(this.fire, this, "load")),
          (i.onerror = p(this._overlayOnError, this, "error")),
          (!this.options.crossOrigin && "" !== this.options.crossOrigin) ||
            (i.crossOrigin =
              !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
          this.options.zIndex && this._updateZIndex(),
          t
            ? (this._url = i.src)
            : ((i.src = this._url), (i.alt = this.options.alt));
      },
      _animateZoom: function (t) {
        var i = this._map.getZoomScale(t.zoom),
          e = this._map._latLngBoundsToNewLayerBounds(
            this._bounds,
            t.zoom,
            t.center
          ).min;
        gi(this._image, e, i);
      },
      _reset: function () {
        var t = this._image,
          i = new I(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ),
          e = i.getSize();
        vi(t, i.min),
          (t.style.width = e.x + "px"),
          (t.style.height = e.y + "px");
      },
      _updateOpacity: function () {
        mi(this._image, this.options.opacity);
      },
      _updateZIndex: function () {
        this._image &&
          void 0 !== this.options.zIndex &&
          null !== this.options.zIndex &&
          (this._image.style.zIndex = this.options.zIndex);
      },
      _overlayOnError: function () {
        this.fire("error");
        var t = this.options.errorOverlayUrl;
        t && this._url !== t && ((this._url = t), (this._image.src = t));
      }
    }),
    Je = Xe.extend({
      options: { autoplay: !0, loop: !0, keepAspectRatio: !0, muted: !1 },
      _initImage: function () {
        var t = "VIDEO" === this._url.tagName,
          i = (this._image = t ? this._url : si("video"));
        if (
          (ci(i, "leaflet-image-layer"),
          this._zoomAnimated && ci(i, "leaflet-zoom-animated"),
          this.options.className && ci(i, this.options.className),
          (i.onselectstart = a),
          (i.onmousemove = a),
          (i.onloadeddata = p(this.fire, this, "load")),
          t)
        ) {
          for (
            var e = i.getElementsByTagName("source"), n = [], o = 0;
            o < e.length;
            o++
          )
            n.push(e[o].src);
          this._url = 0 < e.length ? n : [i.src];
        } else {
          g(this._url) || (this._url = [this._url]),
            !this.options.keepAspectRatio &&
              Object.prototype.hasOwnProperty.call(i.style, "objectFit") &&
              (i.style.objectFit = "fill"),
            (i.autoplay = !!this.options.autoplay),
            (i.loop = !!this.options.loop),
            (i.muted = !!this.options.muted);
          for (var s = 0; s < this._url.length; s++) {
            var r = si("source");
            (r.src = this._url[s]), i.appendChild(r);
          }
        }
      }
    });
  var $e = Xe.extend({
    _initImage: function () {
      var t = (this._image = this._url);
      ci(t, "leaflet-image-layer"),
        this._zoomAnimated && ci(t, "leaflet-zoom-animated"),
        this.options.className && ci(t, this.options.className),
        (t.onselectstart = a),
        (t.onmousemove = a);
    }
  });
  var Qe = Me.extend({
      options: { offset: [0, 7], className: "", pane: "popupPane" },
      initialize: function (t, i) {
        c(this, t), (this._source = i);
      },
      onAdd: function (t) {
        (this._zoomAnimated = t._zoomAnimated),
          this._container || this._initLayout(),
          t._fadeAnimated && mi(this._container, 0),
          clearTimeout(this._removeTimeout),
          this.getPane().appendChild(this._container),
          this.update(),
          t._fadeAnimated && mi(this._container, 1),
          this.bringToFront();
      },
      onRemove: function (t) {
        t._fadeAnimated
          ? (mi(this._container, 0),
            (this._removeTimeout = setTimeout(
              p(ri, void 0, this._container),
              200
            )))
          : ri(this._container);
      },
      getLatLng: function () {
        return this._latlng;
      },
      setLatLng: function (t) {
        return (
          (this._latlng = j(t)),
          this._map && (this._updatePosition(), this._adjustPan()),
          this
        );
      },
      getContent: function () {
        return this._content;
      },
      setContent: function (t) {
        return (this._content = t), this.update(), this;
      },
      getElement: function () {
        return this._container;
      },
      update: function () {
        this._map &&
          ((this._container.style.visibility = "hidden"),
          this._updateContent(),
          this._updateLayout(),
          this._updatePosition(),
          (this._container.style.visibility = ""),
          this._adjustPan());
      },
      getEvents: function () {
        var t = { zoom: this._updatePosition, viewreset: this._updatePosition };
        return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
      },
      isOpen: function () {
        return !!this._map && this._map.hasLayer(this);
      },
      bringToFront: function () {
        return this._map && hi(this._container), this;
      },
      bringToBack: function () {
        return this._map && ui(this._container), this;
      },
      _prepareOpen: function (t, i, e) {
        if ((i instanceof Me || ((e = i), (i = t)), i instanceof Ce))
          for (var n in t._layers) {
            i = t._layers[n];
            break;
          }
        if (!e)
          if (i.getCenter) e = i.getCenter();
          else {
            if (!i.getLatLng)
              throw new Error("Unable to get source layer LatLng.");
            e = i.getLatLng();
          }
        return (this._source = i), this.update(), e;
      },
      _updateContent: function () {
        if (this._content) {
          var t = this._contentNode,
            i =
              "function" == typeof this._content
                ? this._content(this._source || this)
                : this._content;
          if ("string" == typeof i) t.innerHTML = i;
          else {
            for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
            t.appendChild(i);
          }
          this.fire("contentupdate");
        }
      },
      _updatePosition: function () {
        var t, i, e, n, o;
        this._map &&
          ((t = this._map.latLngToLayerPoint(this._latlng)),
          (i = A(this.options.offset)),
          (e = this._getAnchor()),
          this._zoomAnimated
            ? vi(this._container, t.add(e))
            : (i = i.add(t).add(e)),
          (n = this._containerBottom = -i.y),
          (o = this._containerLeft =
            -Math.round(this._containerWidth / 2) + i.x),
          (this._container.style.bottom = n + "px"),
          (this._container.style.left = o + "px"));
      },
      _getAnchor: function () {
        return [0, 0];
      }
    }),
    tn = Qe.extend({
      options: {
        maxWidth: 300,
        minWidth: 50,
        maxHeight: null,
        autoPan: !0,
        autoPanPaddingTopLeft: null,
        autoPanPaddingBottomRight: null,
        autoPanPadding: [5, 5],
        keepInView: !1,
        closeButton: !0,
        autoClose: !0,
        closeOnEscapeKey: !0,
        className: ""
      },
      openOn: function (t) {
        return t.openPopup(this), this;
      },
      onAdd: function (t) {
        Qe.prototype.onAdd.call(this, t),
          t.fire("popupopen", { popup: this }),
          this._source &&
            (this._source.fire("popupopen", { popup: this }, !0),
            this._source instanceof Be || this._source.on("preclick", Ai));
      },
      onRemove: function (t) {
        Qe.prototype.onRemove.call(this, t),
          t.fire("popupclose", { popup: this }),
          this._source &&
            (this._source.fire("popupclose", { popup: this }, !0),
            this._source instanceof Be || this._source.off("preclick", Ai));
      },
      getEvents: function () {
        var t = Qe.prototype.getEvents.call(this);
        return (
          (void 0 !== this.options.closeOnClick
            ? this.options.closeOnClick
            : this._map.options.closePopupOnClick) &&
            (t.preclick = this._close),
          this.options.keepInView && (t.moveend = this._adjustPan),
          t
        );
      },
      _close: function () {
        this._map && this._map.closePopup(this);
      },
      _initLayout: function () {
        var t,
          i = "leaflet-popup",
          e = (this._container = si(
            "div",
            i + " " + (this.options.className || "") + " leaflet-zoom-animated"
          )),
          n = (this._wrapper = si("div", i + "-content-wrapper", e));
        (this._contentNode = si("div", i + "-content", n)),
          Oi(e),
          Ii(this._contentNode),
          zi(e, "contextmenu", Ai),
          (this._tipContainer = si("div", i + "-tip-container", e)),
          (this._tip = si("div", i + "-tip", this._tipContainer)),
          this.options.closeButton &&
            (((t = this._closeButton = si("a", i + "-close-button", e)).href =
              "#close"),
            (t.innerHTML = "&#215;"),
            zi(t, "click", this._onCloseButtonClick, this));
      },
      _updateLayout: function () {
        var t = this._contentNode,
          i = t.style;
        (i.width = ""), (i.whiteSpace = "nowrap");
        var e = t.offsetWidth,
          e = Math.min(e, this.options.maxWidth);
        (e = Math.max(e, this.options.minWidth)),
          (i.width = e + 1 + "px"),
          (i.whiteSpace = ""),
          (i.height = "");
        var n = t.offsetHeight,
          o = this.options.maxHeight,
          s = "leaflet-popup-scrolled";
        o && o < n ? ((i.height = o + "px"), ci(t, s)) : _i(t, s),
          (this._containerWidth = this._container.offsetWidth);
      },
      _animateZoom: function (t) {
        var i = this._map._latLngToNewLayerPoint(
            this._latlng,
            t.zoom,
            t.center
          ),
          e = this._getAnchor();
        vi(this._container, i.add(e));
      },
      _adjustPan: function () {
        var t, i, e, n, o, s, r, a, h, u, l, c;
        this.options.autoPan &&
          (this._map._panAnim && this._map._panAnim.stop(),
          (t = this._map),
          (i = parseInt(oi(this._container, "marginBottom"), 10) || 0),
          (e = this._container.offsetHeight + i),
          (n = this._containerWidth),
          (o = new k(this._containerLeft, -e - this._containerBottom))._add(
            yi(this._container)
          ),
          (s = t.layerPointToContainerPoint(o)),
          (r = A(this.options.autoPanPadding)),
          (a = A(this.options.autoPanPaddingTopLeft || r)),
          (h = A(this.options.autoPanPaddingBottomRight || r)),
          (u = t.getSize()),
          (c = l = 0),
          s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x),
          s.x - l - a.x < 0 && (l = s.x - a.x),
          s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y),
          s.y - c - a.y < 0 && (c = s.y - a.y),
          (l || c) && t.fire("autopanstart").panBy([l, c]));
      },
      _onCloseButtonClick: function (t) {
        this._close(), Ni(t);
      },
      _getAnchor: function () {
        return A(
          this._source && this._source._getPopupAnchor
            ? this._source._getPopupAnchor()
            : [0, 0]
        );
      }
    });
  Ki.mergeOptions({ closePopupOnClick: !0 }),
    Ki.include({
      openPopup: function (t, i, e) {
        return (
          t instanceof tn || (t = new tn(e).setContent(t)),
          i && t.setLatLng(i),
          this.hasLayer(t)
            ? this
            : (this._popup &&
                this._popup.options.autoClose &&
                this.closePopup(),
              (this._popup = t),
              this.addLayer(t))
        );
      },
      closePopup: function (t) {
        return (
          (t && t !== this._popup) || ((t = this._popup), (this._popup = null)),
          t && this.removeLayer(t),
          this
        );
      }
    }),
    Me.include({
      bindPopup: function (t, i) {
        return (
          t instanceof tn
            ? (c(t, i), ((this._popup = t)._source = this))
            : ((this._popup && !i) || (this._popup = new tn(i, this)),
              this._popup.setContent(t)),
          this._popupHandlersAdded ||
            (this.on({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup
            }),
            (this._popupHandlersAdded = !0)),
          this
        );
      },
      unbindPopup: function () {
        return (
          this._popup &&
            (this.off({
              click: this._openPopup,
              keypress: this._onKeyPress,
              remove: this.closePopup,
              move: this._movePopup
            }),
            (this._popupHandlersAdded = !1),
            (this._popup = null)),
          this
        );
      },
      openPopup: function (t, i) {
        return (
          this._popup &&
            this._map &&
            ((i = this._popup._prepareOpen(this, t, i)),
            this._map.openPopup(this._popup, i)),
          this
        );
      },
      closePopup: function () {
        return this._popup && this._popup._close(), this;
      },
      togglePopup: function (t) {
        return (
          this._popup &&
            (this._popup._map ? this.closePopup() : this.openPopup(t)),
          this
        );
      },
      isPopupOpen: function () {
        return !!this._popup && this._popup.isOpen();
      },
      setPopupContent: function (t) {
        return this._popup && this._popup.setContent(t), this;
      },
      getPopup: function () {
        return this._popup;
      },
      _openPopup: function (t) {
        var i = t.layer || t.target;
        this._popup &&
          this._map &&
          (Ni(t),
          i instanceof Be
            ? this.openPopup(t.layer || t.target, t.latlng)
            : this._map.hasLayer(this._popup) && this._popup._source === i
            ? this.closePopup()
            : this.openPopup(i, t.latlng));
      },
      _movePopup: function (t) {
        this._popup.setLatLng(t.latlng);
      },
      _onKeyPress: function (t) {
        13 === t.originalEvent.keyCode && this._openPopup(t);
      }
    });
  var en = Qe.extend({
    options: {
      pane: "tooltipPane",
      offset: [0, 0],
      direction: "auto",
      permanent: !1,
      sticky: !1,
      interactive: !1,
      opacity: 0.9
    },
    onAdd: function (t) {
      Qe.prototype.onAdd.call(this, t),
        this.setOpacity(this.options.opacity),
        t.fire("tooltipopen", { tooltip: this }),
        this._source && this._source.fire("tooltipopen", { tooltip: this }, !0);
    },
    onRemove: function (t) {
      Qe.prototype.onRemove.call(this, t),
        t.fire("tooltipclose", { tooltip: this }),
        this._source &&
          this._source.fire("tooltipclose", { tooltip: this }, !0);
    },
    getEvents: function () {
      var t = Qe.prototype.getEvents.call(this);
      return bt && !this.options.permanent && (t.preclick = this._close), t;
    },
    _close: function () {
      this._map && this._map.closeTooltip(this);
    },
    _initLayout: function () {
      var t =
        "leaflet-tooltip " +
        (this.options.className || "") +
        " leaflet-zoom-" +
        (this._zoomAnimated ? "animated" : "hide");
      this._contentNode = this._container = si("div", t);
    },
    _updateLayout: function () {},
    _adjustPan: function () {},
    _setPosition: function (t) {
      var i,
        e = this._map,
        n = this._container,
        o = e.latLngToContainerPoint(e.getCenter()),
        s = e.layerPointToContainerPoint(t),
        r = this.options.direction,
        a = n.offsetWidth,
        h = n.offsetHeight,
        u = A(this.options.offset),
        l = this._getAnchor(),
        c =
          "top" === r
            ? ((i = a / 2), h)
            : "bottom" === r
            ? ((i = a / 2), 0)
            : ((i =
                "center" === r
                  ? a / 2
                  : "right" === r
                  ? 0
                  : "left" === r
                  ? a
                  : s.x < o.x
                  ? ((r = "right"), 0)
                  : ((r = "left"), a + 2 * (u.x + l.x))),
              h / 2);
      (t = t.subtract(A(i, c, !0)).add(u).add(l)),
        _i(n, "leaflet-tooltip-right"),
        _i(n, "leaflet-tooltip-left"),
        _i(n, "leaflet-tooltip-top"),
        _i(n, "leaflet-tooltip-bottom"),
        ci(n, "leaflet-tooltip-" + r),
        vi(n, t);
    },
    _updatePosition: function () {
      var t = this._map.latLngToLayerPoint(this._latlng);
      this._setPosition(t);
    },
    setOpacity: function (t) {
      (this.options.opacity = t), this._container && mi(this._container, t);
    },
    _animateZoom: function (t) {
      var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
      this._setPosition(i);
    },
    _getAnchor: function () {
      return A(
        this._source && this._source._getTooltipAnchor && !this.options.sticky
          ? this._source._getTooltipAnchor()
          : [0, 0]
      );
    }
  });
  Ki.include({
    openTooltip: function (t, i, e) {
      return (
        t instanceof en || (t = new en(e).setContent(t)),
        i && t.setLatLng(i),
        this.hasLayer(t) ? this : this.addLayer(t)
      );
    },
    closeTooltip: function (t) {
      return t && this.removeLayer(t), this;
    }
  }),
    Me.include({
      bindTooltip: function (t, i) {
        return (
          t instanceof en
            ? (c(t, i), ((this._tooltip = t)._source = this))
            : ((this._tooltip && !i) || (this._tooltip = new en(i, this)),
              this._tooltip.setContent(t)),
          this._initTooltipInteractions(),
          this._tooltip.options.permanent &&
            this._map &&
            this._map.hasLayer(this) &&
            this.openTooltip(),
          this
        );
      },
      unbindTooltip: function () {
        return (
          this._tooltip &&
            (this._initTooltipInteractions(!0),
            this.closeTooltip(),
            (this._tooltip = null)),
          this
        );
      },
      _initTooltipInteractions: function (t) {
        var i, e;
        (!t && this._tooltipHandlersAdded) ||
          ((i = t ? "off" : "on"),
          (e = { remove: this.closeTooltip, move: this._moveTooltip }),
          this._tooltip.options.permanent
            ? (e.add = this._openTooltip)
            : ((e.mouseover = this._openTooltip),
              (e.mouseout = this.closeTooltip),
              this._tooltip.options.sticky && (e.mousemove = this._moveTooltip),
              bt && (e.click = this._openTooltip)),
          this[i](e),
          (this._tooltipHandlersAdded = !t));
      },
      openTooltip: function (t, i) {
        return (
          this._tooltip &&
            this._map &&
            ((i = this._tooltip._prepareOpen(this, t, i)),
            this._map.openTooltip(this._tooltip, i),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (ci(this._tooltip._container, "leaflet-clickable"),
              this.addInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      closeTooltip: function () {
        return (
          this._tooltip &&
            (this._tooltip._close(),
            this._tooltip.options.interactive &&
              this._tooltip._container &&
              (_i(this._tooltip._container, "leaflet-clickable"),
              this.removeInteractiveTarget(this._tooltip._container))),
          this
        );
      },
      toggleTooltip: function (t) {
        return (
          this._tooltip &&
            (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)),
          this
        );
      },
      isTooltipOpen: function () {
        return this._tooltip.isOpen();
      },
      setTooltipContent: function (t) {
        return this._tooltip && this._tooltip.setContent(t), this;
      },
      getTooltip: function () {
        return this._tooltip;
      },
      _openTooltip: function (t) {
        var i = t.layer || t.target;
        this._tooltip &&
          this._map &&
          this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0);
      },
      _moveTooltip: function (t) {
        var i,
          e,
          n = t.latlng;
        this._tooltip.options.sticky &&
          t.originalEvent &&
          ((i = this._map.mouseEventToContainerPoint(t.originalEvent)),
          (e = this._map.containerPointToLayerPoint(i)),
          (n = this._map.layerPointToLatLng(e))),
          this._tooltip.setLatLng(n);
      }
    });
  var nn = Se.extend({
    options: {
      iconSize: [12, 12],
      html: !1,
      bgPos: null,
      className: "leaflet-div-icon"
    },
    createIcon: function (t) {
      var i,
        e = t && "DIV" === t.tagName ? t : document.createElement("div"),
        n = this.options;
      return (
        n.html instanceof Element
          ? (ai(e), e.appendChild(n.html))
          : (e.innerHTML = !1 !== n.html ? n.html : ""),
        n.bgPos &&
          ((i = A(n.bgPos)),
          (e.style.backgroundPosition = -i.x + "px " + -i.y + "px")),
        this._setIconStyles(e, "icon"),
        e
      );
    },
    createShadow: function () {
      return null;
    }
  });
  Se.Default = Ze;
  var on = Me.extend({
    options: {
      tileSize: 256,
      opacity: 1,
      updateWhenIdle: yt,
      updateWhenZooming: !0,
      updateInterval: 200,
      zIndex: 1,
      bounds: null,
      minZoom: 0,
      maxZoom: void 0,
      maxNativeZoom: void 0,
      minNativeZoom: void 0,
      noWrap: !1,
      pane: "tilePane",
      className: "",
      keepBuffer: 2
    },
    initialize: function (t) {
      c(this, t);
    },
    onAdd: function () {
      this._initContainer(),
        (this._levels = {}),
        (this._tiles = {}),
        this._resetView(),
        this._update();
    },
    beforeAdd: function (t) {
      t._addZoomLimit(this);
    },
    onRemove: function (t) {
      this._removeAllTiles(),
        ri(this._container),
        t._removeZoomLimit(this),
        (this._container = null),
        (this._tileZoom = void 0);
    },
    bringToFront: function () {
      return (
        this._map && (hi(this._container), this._setAutoZIndex(Math.max)), this
      );
    },
    bringToBack: function () {
      return (
        this._map && (ui(this._container), this._setAutoZIndex(Math.min)), this
      );
    },
    getContainer: function () {
      return this._container;
    },
    setOpacity: function (t) {
      return (this.options.opacity = t), this._updateOpacity(), this;
    },
    setZIndex: function (t) {
      return (this.options.zIndex = t), this._updateZIndex(), this;
    },
    isLoading: function () {
      return this._loading;
    },
    redraw: function () {
      return this._map && (this._removeAllTiles(), this._update()), this;
    },
    getEvents: function () {
      var t = {
        viewprereset: this._invalidateAll,
        viewreset: this._resetView,
        zoom: this._resetView,
        moveend: this._onMoveEnd
      };
      return (
        this.options.updateWhenIdle ||
          (this._onMove ||
            (this._onMove = n(
              this._onMoveEnd,
              this.options.updateInterval,
              this
            )),
          (t.move = this._onMove)),
        this._zoomAnimated && (t.zoomanim = this._animateZoom),
        t
      );
    },
    createTile: function () {
      return document.createElement("div");
    },
    getTileSize: function () {
      var t = this.options.tileSize;
      return t instanceof k ? t : new k(t, t);
    },
    _updateZIndex: function () {
      this._container &&
        void 0 !== this.options.zIndex &&
        null !== this.options.zIndex &&
        (this._container.style.zIndex = this.options.zIndex);
    },
    _setAutoZIndex: function (t) {
      for (
        var i,
          e = this.getPane().children,
          n = -t(-1 / 0, 1 / 0),
          o = 0,
          s = e.length;
        o < s;
        o++
      )
        (i = e[o].style.zIndex),
          e[o] !== this._container && i && (n = t(n, +i));
      isFinite(n) &&
        ((this.options.zIndex = n + t(-1, 1)), this._updateZIndex());
    },
    _updateOpacity: function () {
      if (this._map && !it) {
        mi(this._container, this.options.opacity);
        var t = +new Date(),
          i = !1,
          e = !1;
        for (var n in this._tiles) {
          var o,
            s = this._tiles[n];
          s.current &&
            s.loaded &&
            ((o = Math.min(1, (t - s.loaded) / 200)),
            mi(s.el, o),
            o < 1
              ? (i = !0)
              : (s.active ? (e = !0) : this._onOpaqueTile(s), (s.active = !0)));
        }
        e && !this._noPrune && this._pruneTiles(),
          i &&
            (z(this._fadeFrame),
            (this._fadeFrame = M(this._updateOpacity, this)));
      }
    },
    _onOpaqueTile: a,
    _initContainer: function () {
      this._container ||
        ((this._container = si(
          "div",
          "leaflet-layer " + (this.options.className || "")
        )),
        this._updateZIndex(),
        this.options.opacity < 1 && this._updateOpacity(),
        this.getPane().appendChild(this._container));
    },
    _updateLevels: function () {
      var t = this._tileZoom,
        i = this.options.maxZoom;
      if (void 0 !== t) {
        for (var e in this._levels)
          (e = Number(e)),
            this._levels[e].el.children.length || e === t
              ? ((this._levels[e].el.style.zIndex = i - Math.abs(t - e)),
                this._onUpdateLevel(e))
              : (ri(this._levels[e].el),
                this._removeTilesAtZoom(e),
                this._onRemoveLevel(e),
                delete this._levels[e]);
        var n = this._levels[t],
          o = this._map;
        return (
          n ||
            (((n = this._levels[t] = {}).el = si(
              "div",
              "leaflet-tile-container leaflet-zoom-animated",
              this._container
            )),
            (n.el.style.zIndex = i),
            (n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round()),
            (n.zoom = t),
            this._setZoomTransform(n, o.getCenter(), o.getZoom()),
            a(n.el.offsetWidth),
            this._onCreateLevel(n)),
          (this._level = n)
        );
      }
    },
    _onUpdateLevel: a,
    _onRemoveLevel: a,
    _onCreateLevel: a,
    _pruneTiles: function () {
      if (this._map) {
        var t,
          i,
          e,
          n = this._map.getZoom();
        if (n > this.options.maxZoom || n < this.options.minZoom)
          this._removeAllTiles();
        else {
          for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
          for (t in this._tiles) {
            (e = this._tiles[t]).current &&
              !e.active &&
              ((i = e.coords),
              this._retainParent(i.x, i.y, i.z, i.z - 5) ||
                this._retainChildren(i.x, i.y, i.z, i.z + 2));
          }
          for (t in this._tiles) this._tiles[t].retain || this._removeTile(t);
        }
      }
    },
    _removeTilesAtZoom: function (t) {
      for (var i in this._tiles)
        this._tiles[i].coords.z === t && this._removeTile(i);
    },
    _removeAllTiles: function () {
      for (var t in this._tiles) this._removeTile(t);
    },
    _invalidateAll: function () {
      for (var t in this._levels)
        ri(this._levels[t].el),
          this._onRemoveLevel(Number(t)),
          delete this._levels[t];
      this._removeAllTiles(), (this._tileZoom = void 0);
    },
    _retainParent: function (t, i, e, n) {
      var o = Math.floor(t / 2),
        s = Math.floor(i / 2),
        r = e - 1,
        a = new k(+o, +s);
      a.z = +r;
      var h = this._tileCoordsToKey(a),
        u = this._tiles[h];
      return u && u.active
        ? (u.retain = !0)
        : (u && u.loaded && (u.retain = !0),
          n < r && this._retainParent(o, s, r, n));
    },
    _retainChildren: function (t, i, e, n) {
      for (var o = 2 * t; o < 2 * t + 2; o++)
        for (var s = 2 * i; s < 2 * i + 2; s++) {
          var r = new k(o, s);
          r.z = e + 1;
          var a = this._tileCoordsToKey(r),
            h = this._tiles[a];
          h && h.active
            ? (h.retain = !0)
            : (h && h.loaded && (h.retain = !0),
              e + 1 < n && this._retainChildren(o, s, e + 1, n));
        }
    },
    _resetView: function (t) {
      var i = t && (t.pinch || t.flyTo);
      this._setView(this._map.getCenter(), this._map.getZoom(), i, i);
    },
    _animateZoom: function (t) {
      this._setView(t.center, t.zoom, !0, t.noUpdate);
    },
    _clampZoom: function (t) {
      var i = this.options;
      return void 0 !== i.minNativeZoom && t < i.minNativeZoom
        ? i.minNativeZoom
        : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t
        ? i.maxNativeZoom
        : t;
    },
    _setView: function (t, i, e, n) {
      var o = Math.round(i),
        o =
          (void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
          (void 0 !== this.options.minZoom && o < this.options.minZoom)
            ? void 0
            : this._clampZoom(o),
        s = this.options.updateWhenZooming && o !== this._tileZoom;
      (n && !s) ||
        ((this._tileZoom = o),
        this._abortLoading && this._abortLoading(),
        this._updateLevels(),
        this._resetGrid(),
        void 0 !== o && this._update(t),
        e || this._pruneTiles(),
        (this._noPrune = !!e)),
        this._setZoomTransforms(t, i);
    },
    _setZoomTransforms: function (t, i) {
      for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i);
    },
    _setZoomTransform: function (t, i, e) {
      var n = this._map.getZoomScale(e, t.zoom),
        o = t.origin
          .multiplyBy(n)
          .subtract(this._map._getNewPixelOrigin(i, e))
          .round();
      vt ? gi(t.el, o, n) : vi(t.el, o);
    },
    _resetGrid: function () {
      var t = this._map,
        i = t.options.crs,
        e = (this._tileSize = this.getTileSize()),
        n = this._tileZoom,
        o = this._map.getPixelWorldBounds(this._tileZoom);
      o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
        (this._wrapX = i.wrapLng &&
          !this.options.noWrap && [
            Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x),
            Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)
          ]),
        (this._wrapY = i.wrapLat &&
          !this.options.noWrap && [
            Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x),
            Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)
          ]);
    },
    _onMoveEnd: function () {
      this._map && !this._map._animatingZoom && this._update();
    },
    _getTiledPixelBounds: function (t) {
      var i = this._map,
        e = i._animatingZoom
          ? Math.max(i._animateToZoom, i.getZoom())
          : i.getZoom(),
        n = i.getZoomScale(e, this._tileZoom),
        o = i.project(t, this._tileZoom).floor(),
        s = i.getSize().divideBy(2 * n);
      return new I(o.subtract(s), o.add(s));
    },
    _update: function (t) {
      var i = this._map;
      if (i) {
        var e = this._clampZoom(i.getZoom());
        if ((void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom)) {
          var n = this._getTiledPixelBounds(t),
            o = this._pxBoundsToTileRange(n),
            s = o.getCenter(),
            r = [],
            a = this.options.keepBuffer,
            h = new I(
              o.getBottomLeft().subtract([a, -a]),
              o.getTopRight().add([a, -a])
            );
          if (
            !(
              isFinite(o.min.x) &&
              isFinite(o.min.y) &&
              isFinite(o.max.x) &&
              isFinite(o.max.y)
            )
          )
            throw new Error("Attempted to load an infinite number of tiles");
          for (var u in this._tiles) {
            var l = this._tiles[u].coords;
            (l.z === this._tileZoom && h.contains(new k(l.x, l.y))) ||
              (this._tiles[u].current = !1);
          }
          if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);
          else {
            for (var c = o.min.y; c <= o.max.y; c++)
              for (var _ = o.min.x; _ <= o.max.x; _++) {
                var d,
                  p = new k(_, c);
                (p.z = this._tileZoom),
                  this._isValidTile(p) &&
                    ((d = this._tiles[this._tileCoordsToKey(p)])
                      ? (d.current = !0)
                      : r.push(p));
              }
            if (
              (r.sort(function (t, i) {
                return t.distanceTo(s) - i.distanceTo(s);
              }),
              0 !== r.length)
            ) {
              this._loading || ((this._loading = !0), this.fire("loading"));
              for (
                var m = document.createDocumentFragment(), _ = 0;
                _ < r.length;
                _++
              )
                this._addTile(r[_], m);
              this._level.el.appendChild(m);
            }
          }
        }
      }
    },
    _isValidTile: function (t) {
      var i = this._map.options.crs;
      if (!i.infinite) {
        var e = this._globalTileRange;
        if (
          (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x)) ||
          (!i.wrapLat && (t.y < e.min.y || t.y > e.max.y))
        )
          return !1;
      }
      if (!this.options.bounds) return !0;
      var n = this._tileCoordsToBounds(t);
      return N(this.options.bounds).overlaps(n);
    },
    _keyToBounds: function (t) {
      return this._tileCoordsToBounds(this._keyToTileCoords(t));
    },
    _tileCoordsToNwSe: function (t) {
      var i = this._map,
        e = this.getTileSize(),
        n = t.scaleBy(e),
        o = n.add(e);
      return [i.unproject(n, t.z), i.unproject(o, t.z)];
    },
    _tileCoordsToBounds: function (t) {
      var i = this._tileCoordsToNwSe(t),
        e = new R(i[0], i[1]);
      return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e;
    },
    _tileCoordsToKey: function (t) {
      return t.x + ":" + t.y + ":" + t.z;
    },
    _keyToTileCoords: function (t) {
      var i = t.split(":"),
        e = new k(+i[0], +i[1]);
      return (e.z = +i[2]), e;
    },
    _removeTile: function (t) {
      var i = this._tiles[t];
      i &&
        (ri(i.el),
        delete this._tiles[t],
        this.fire("tileunload", {
          tile: i.el,
          coords: this._keyToTileCoords(t)
        }));
    },
    _initTile: function (t) {
      ci(t, "leaflet-tile");
      var i = this.getTileSize();
      (t.style.width = i.x + "px"),
        (t.style.height = i.y + "px"),
        (t.onselectstart = a),
        (t.onmousemove = a),
        it && this.options.opacity < 1 && mi(t, this.options.opacity),
        ot && !st && (t.style.WebkitBackfaceVisibility = "hidden");
    },
    _addTile: function (t, i) {
      var e = this._getTilePos(t),
        n = this._tileCoordsToKey(t),
        o = this.createTile(this._wrapCoords(t), p(this._tileReady, this, t));
      this._initTile(o),
        this.createTile.length < 2 && M(p(this._tileReady, this, t, null, o)),
        vi(o, e),
        (this._tiles[n] = { el: o, coords: t, current: !0 }),
        i.appendChild(o),
        this.fire("tileloadstart", { tile: o, coords: t });
    },
    _tileReady: function (t, i, e) {
      i && this.fire("tileerror", { error: i, tile: e, coords: t });
      var n = this._tileCoordsToKey(t);
      (e = this._tiles[n]) &&
        ((e.loaded = +new Date()),
        this._map._fadeAnimated
          ? (mi(e.el, 0),
            z(this._fadeFrame),
            (this._fadeFrame = M(this._updateOpacity, this)))
          : ((e.active = !0), this._pruneTiles()),
        i ||
          (ci(e.el, "leaflet-tile-loaded"),
          this.fire("tileload", { tile: e.el, coords: t })),
        this._noTilesToLoad() &&
          ((this._loading = !1),
          this.fire("load"),
          it || !this._map._fadeAnimated
            ? M(this._pruneTiles, this)
            : setTimeout(p(this._pruneTiles, this), 250)));
    },
    _getTilePos: function (t) {
      return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
    },
    _wrapCoords: function (t) {
      var i = new k(
        this._wrapX ? o(t.x, this._wrapX) : t.x,
        this._wrapY ? o(t.y, this._wrapY) : t.y
      );
      return (i.z = t.z), i;
    },
    _pxBoundsToTileRange: function (t) {
      var i = this.getTileSize();
      return new I(
        t.min.unscaleBy(i).floor(),
        t.max.unscaleBy(i).ceil().subtract([1, 1])
      );
    },
    _noTilesToLoad: function () {
      for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
      return !0;
    }
  });
  var sn = on.extend({
    options: {
      minZoom: 0,
      maxZoom: 18,
      subdomains: "abc",
      errorTileUrl: "",
      zoomOffset: 0,
      tms: !1,
      zoomReverse: !1,
      detectRetina: !1,
      crossOrigin: !1
    },
    initialize: function (t, i) {
      (this._url = t),
        (i = c(this, i)).detectRetina &&
          zt &&
          0 < i.maxZoom &&
          ((i.tileSize = Math.floor(i.tileSize / 2)),
          i.zoomReverse
            ? (i.zoomOffset--, i.minZoom++)
            : (i.zoomOffset++, i.maxZoom--),
          (i.minZoom = Math.max(0, i.minZoom))),
        "string" == typeof i.subdomains &&
          (i.subdomains = i.subdomains.split("")),
        ot || this.on("tileunload", this._onTileRemove);
    },
    setUrl: function (t, i) {
      return (
        this._url === t && void 0 === i && (i = !0),
        (this._url = t),
        i || this.redraw(),
        this
      );
    },
    createTile: function (t, i) {
      var e = document.createElement("img");
      return (
        zi(e, "load", p(this._tileOnLoad, this, i, e)),
        zi(e, "error", p(this._tileOnError, this, i, e)),
        (!this.options.crossOrigin && "" !== this.options.crossOrigin) ||
          (e.crossOrigin =
            !0 === this.options.crossOrigin ? "" : this.options.crossOrigin),
        (e.alt = ""),
        e.setAttribute("role", "presentation"),
        (e.src = this.getTileUrl(t)),
        e
      );
    },
    getTileUrl: function (t) {
      var i,
        e = {
          r: zt ? "@2x" : "",
          s: this._getSubdomain(t),
          x: t.x,
          y: t.y,
          z: this._getZoomForUrl()
        };
      return (
        this._map &&
          !this._map.options.crs.infinite &&
          ((i = this._globalTileRange.max.y - t.y),
          this.options.tms && (e.y = i),
          (e["-y"] = i)),
        f(this._url, h(e, this.options))
      );
    },
    _tileOnLoad: function (t, i) {
      it ? setTimeout(p(t, this, null, i), 0) : t(null, i);
    },
    _tileOnError: function (t, i, e) {
      var n = this.options.errorTileUrl;
      n && i.getAttribute("src") !== n && (i.src = n), t(e, i);
    },
    _onTileRemove: function (t) {
      t.tile.onload = null;
    },
    _getZoomForUrl: function () {
      var t = this._tileZoom,
        i = this.options.maxZoom;
      return (
        this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset
      );
    },
    _getSubdomain: function (t) {
      var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
      return this.options.subdomains[i];
    },
    _abortLoading: function () {
      var t, i;
      for (t in this._tiles)
        this._tiles[t].coords.z !== this._tileZoom &&
          (((i = this._tiles[t].el).onload = a),
          (i.onerror = a),
          i.complete || ((i.src = y), ri(i), delete this._tiles[t]));
    },
    _removeTile: function (t) {
      var i = this._tiles[t];
      if (i)
        return (
          at || i.el.setAttribute("src", y),
          on.prototype._removeTile.call(this, t)
        );
    },
    _tileReady: function (t, i, e) {
      if (this._map && (!e || e.getAttribute("src") !== y))
        return on.prototype._tileReady.call(this, t, i, e);
    }
  });
  function rn(t, i) {
    return new sn(t, i);
  }
  var an = sn.extend({
    defaultWmsParams: {
      service: "WMS",
      request: "GetMap",
      layers: "",
      styles: "",
      format: "image/jpeg",
      transparent: !1,
      version: "1.1.1"
    },
    options: { crs: null, uppercase: !1 },
    initialize: function (t, i) {
      this._url = t;
      var e = h({}, this.defaultWmsParams);
      for (var n in i) n in this.options || (e[n] = i[n]);
      var o = (i = c(this, i)).detectRetina && zt ? 2 : 1,
        s = this.getTileSize();
      (e.width = s.x * o), (e.height = s.y * o), (this.wmsParams = e);
    },
    onAdd: function (t) {
      (this._crs = this.options.crs || t.options.crs),
        (this._wmsVersion = parseFloat(this.wmsParams.version));
      var i = 1.3 <= this._wmsVersion ? "crs" : "srs";
      (this.wmsParams[i] = this._crs.code), sn.prototype.onAdd.call(this, t);
    },
    getTileUrl: function (t) {
      var i = this._tileCoordsToNwSe(t),
        e = this._crs,
        n = O(e.project(i[0]), e.project(i[1])),
        o = n.min,
        s = n.max,
        r = (
          1.3 <= this._wmsVersion && this._crs === be
            ? [o.y, o.x, s.y, s.x]
            : [o.x, o.y, s.x, s.y]
        ).join(","),
        a = sn.prototype.getTileUrl.call(this, t);
      return (
        a +
        _(this.wmsParams, a, this.options.uppercase) +
        (this.options.uppercase ? "&BBOX=" : "&bbox=") +
        r
      );
    },
    setParams: function (t, i) {
      return h(this.wmsParams, t), i || this.redraw(), this;
    }
  });
  (sn.WMS = an),
    (rn.wms = function (t, i) {
      return new an(t, i);
    });
  var hn = Me.extend({
      options: { padding: 0.1, tolerance: 0 },
      initialize: function (t) {
        c(this, t), m(this), (this._layers = this._layers || {});
      },
      onAdd: function () {
        this._container ||
          (this._initContainer(),
          this._zoomAnimated && ci(this._container, "leaflet-zoom-animated")),
          this.getPane().appendChild(this._container),
          this._update(),
          this.on("update", this._updatePaths, this);
      },
      onRemove: function () {
        this.off("update", this._updatePaths, this), this._destroyContainer();
      },
      getEvents: function () {
        var t = {
          viewreset: this._reset,
          zoom: this._onZoom,
          moveend: this._update,
          zoomend: this._onZoomEnd
        };
        return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
      },
      _onAnimZoom: function (t) {
        this._updateTransform(t.center, t.zoom);
      },
      _onZoom: function () {
        this._updateTransform(this._map.getCenter(), this._map.getZoom());
      },
      _updateTransform: function (t, i) {
        var e = this._map.getZoomScale(i, this._zoom),
          n = yi(this._container),
          o = this._map.getSize().multiplyBy(0.5 + this.options.padding),
          s = this._map.project(this._center, i),
          r = this._map.project(t, i).subtract(s),
          a = o.multiplyBy(-e).add(n).add(o).subtract(r);
        vt ? gi(this._container, a, e) : vi(this._container, a);
      },
      _reset: function () {
        for (var t in (this._update(),
        this._updateTransform(this._center, this._zoom),
        this._layers))
          this._layers[t]._reset();
      },
      _onZoomEnd: function () {
        for (var t in this._layers) this._layers[t]._project();
      },
      _updatePaths: function () {
        for (var t in this._layers) this._layers[t]._update();
      },
      _update: function () {
        var t = this.options.padding,
          i = this._map.getSize(),
          e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
        (this._bounds = new I(e, e.add(i.multiplyBy(1 + 2 * t)).round())),
          (this._center = this._map.getCenter()),
          (this._zoom = this._map.getZoom());
      }
    }),
    un = hn.extend({
      getEvents: function () {
        var t = hn.prototype.getEvents.call(this);
        return (t.viewprereset = this._onViewPreReset), t;
      },
      _onViewPreReset: function () {
        this._postponeUpdatePaths = !0;
      },
      onAdd: function () {
        hn.prototype.onAdd.call(this), this._draw();
      },
      _initContainer: function () {
        var t = (this._container = document.createElement("canvas"));
        zi(t, "mousemove", this._onMouseMove, this),
          zi(
            t,
            "click dblclick mousedown mouseup contextmenu",
            this._onClick,
            this
          ),
          zi(t, "mouseout", this._handleMouseOut, this),
          (this._ctx = t.getContext("2d"));
      },
      _destroyContainer: function () {
        z(this._redrawRequest),
          delete this._ctx,
          ri(this._container),
          Si(this._container),
          delete this._container;
      },
      _updatePaths: function () {
        if (!this._postponeUpdatePaths) {
          for (var t in ((this._redrawBounds = null), this._layers))
            this._layers[t]._update();
          this._redraw();
        }
      },
      _update: function () {
        var t, i, e, n;
        (this._map._animatingZoom && this._bounds) ||
          (hn.prototype._update.call(this),
          (t = this._bounds),
          (i = this._container),
          (e = t.getSize()),
          (n = zt ? 2 : 1),
          vi(i, t.min),
          (i.width = n * e.x),
          (i.height = n * e.y),
          (i.style.width = e.x + "px"),
          (i.style.height = e.y + "px"),
          zt && this._ctx.scale(2, 2),
          this._ctx.translate(-t.min.x, -t.min.y),
          this.fire("update"));
      },
      _reset: function () {
        hn.prototype._reset.call(this),
          this._postponeUpdatePaths &&
            ((this._postponeUpdatePaths = !1), this._updatePaths());
      },
      _initPath: function (t) {
        this._updateDashArray(t);
        var i = ((this._layers[m(t)] = t)._order = {
          layer: t,
          prev: this._drawLast,
          next: null
        });
        this._drawLast && (this._drawLast.next = i),
          (this._drawLast = i),
          (this._drawFirst = this._drawFirst || this._drawLast);
      },
      _addPath: function (t) {
        this._requestRedraw(t);
      },
      _removePath: function (t) {
        var i = t._order,
          e = i.next,
          n = i.prev;
        e ? (e.prev = n) : (this._drawLast = n),
          n ? (n.next = e) : (this._drawFirst = e),
          delete t._order,
          delete this._layers[m(t)],
          this._requestRedraw(t);
      },
      _updatePath: function (t) {
        this._extendRedrawBounds(t),
          t._project(),
          t._update(),
          this._requestRedraw(t);
      },
      _updateStyle: function (t) {
        this._updateDashArray(t), this._requestRedraw(t);
      },
      _updateDashArray: function (t) {
        if ("string" == typeof t.options.dashArray) {
          for (
            var i, e = t.options.dashArray.split(/[, ]+/), n = [], o = 0;
            o < e.length;
            o++
          ) {
            if (((i = Number(e[o])), isNaN(i))) return;
            n.push(i);
          }
          t.options._dashArray = n;
        } else t.options._dashArray = t.options.dashArray;
      },
      _requestRedraw: function (t) {
        this._map &&
          (this._extendRedrawBounds(t),
          (this._redrawRequest = this._redrawRequest || M(this._redraw, this)));
      },
      _extendRedrawBounds: function (t) {
        var i;
        t._pxBounds &&
          ((i = (t.options.weight || 0) + 1),
          (this._redrawBounds = this._redrawBounds || new I()),
          this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])),
          this._redrawBounds.extend(t._pxBounds.max.add([i, i])));
      },
      _redraw: function () {
        (this._redrawRequest = null),
          this._redrawBounds &&
            (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()),
          this._clear(),
          this._draw(),
          (this._redrawBounds = null);
      },
      _clear: function () {
        var t,
          i = this._redrawBounds;
        i
          ? ((t = i.getSize()), this._ctx.clearRect(i.min.x, i.min.y, t.x, t.y))
          : (this._ctx.save(),
            this._ctx.setTransform(1, 0, 0, 1, 0, 0),
            this._ctx.clearRect(
              0,
              0,
              this._container.width,
              this._container.height
            ),
            this._ctx.restore());
      },
      _draw: function () {
        var t,
          i,
          e = this._redrawBounds;
        this._ctx.save(),
          e &&
            ((i = e.getSize()),
            this._ctx.beginPath(),
            this._ctx.rect(e.min.x, e.min.y, i.x, i.y),
            this._ctx.clip()),
          (this._drawing = !0);
        for (var n = this._drawFirst; n; n = n.next)
          (t = n.layer),
            (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
              t._updatePath();
        (this._drawing = !1), this._ctx.restore();
      },
      _updatePoly: function (t, i) {
        if (this._drawing) {
          var e,
            n,
            o,
            s,
            r = t._parts,
            a = r.length,
            h = this._ctx;
          if (a) {
            for (h.beginPath(), e = 0; e < a; e++) {
              for (n = 0, o = r[e].length; n < o; n++)
                (s = r[e][n]), h[n ? "lineTo" : "moveTo"](s.x, s.y);
              i && h.closePath();
            }
            this._fillStroke(h, t);
          }
        }
      },
      _updateCircle: function (t) {
        var i, e, n, o;
        this._drawing &&
          !t._empty() &&
          ((i = t._point),
          (e = this._ctx),
          (n = Math.max(Math.round(t._radius), 1)),
          1 != (o = (Math.max(Math.round(t._radiusY), 1) || n) / n) &&
            (e.save(), e.scale(1, o)),
          e.beginPath(),
          e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1),
          1 != o && e.restore(),
          this._fillStroke(e, t));
      },
      _fillStroke: function (t, i) {
        var e = i.options;
        e.fill &&
          ((t.globalAlpha = e.fillOpacity),
          (t.fillStyle = e.fillColor || e.color),
          t.fill(e.fillRule || "evenodd")),
          e.stroke &&
            0 !== e.weight &&
            (t.setLineDash &&
              t.setLineDash((i.options && i.options._dashArray) || []),
            (t.globalAlpha = e.opacity),
            (t.lineWidth = e.weight),
            (t.strokeStyle = e.color),
            (t.lineCap = e.lineCap),
            (t.lineJoin = e.lineJoin),
            t.stroke());
      },
      _onClick: function (t) {
        for (
          var i,
            e,
            n = this._map.mouseEventToLayerPoint(t),
            o = this._drawFirst;
          o;
          o = o.next
        )
          (i = o.layer).options.interactive &&
            i._containsPoint(n) &&
            ((("click" === t.type || "preclick" !== t.type) &&
              this._map._draggableMoved(i)) ||
              (e = i));
        e && (Fi(t), this._fireEvent([e], t));
      },
      _onMouseMove: function (t) {
        var i;
        !this._map ||
          this._map.dragging.moving() ||
          this._map._animatingZoom ||
          ((i = this._map.mouseEventToLayerPoint(t)),
          this._handleMouseHover(t, i));
      },
      _handleMouseOut: function (t) {
        var i = this._hoveredLayer;
        i &&
          (_i(this._container, "leaflet-interactive"),
          this._fireEvent([i], t, "mouseout"),
          (this._hoveredLayer = null),
          (this._mouseHoverThrottled = !1));
      },
      _handleMouseHover: function (t, i) {
        if (!this._mouseHoverThrottled) {
          for (var e, n, o = this._drawFirst; o; o = o.next)
            (e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
          n !== this._hoveredLayer &&
            (this._handleMouseOut(t),
            n &&
              (ci(this._container, "leaflet-interactive"),
              this._fireEvent([n], t, "mouseover"),
              (this._hoveredLayer = n))),
            this._hoveredLayer && this._fireEvent([this._hoveredLayer], t),
            (this._mouseHoverThrottled = !0),
            setTimeout(
              p(function () {
                this._mouseHoverThrottled = !1;
              }, this),
              32
            );
        }
      },
      _fireEvent: function (t, i, e) {
        this._map._fireDOMEvent(i, e || i.type, t);
      },
      _bringToFront: function (t) {
        var i,
          e,
          n = t._order;
        n &&
          ((i = n.next),
          (e = n.prev),
          i &&
            ((i.prev = e) ? (e.next = i) : i && (this._drawFirst = i),
            (n.prev = this._drawLast),
            ((this._drawLast.next = n).next = null),
            (this._drawLast = n),
            this._requestRedraw(t)));
      },
      _bringToBack: function (t) {
        var i,
          e,
          n = t._order;
        n &&
          ((i = n.next),
          (e = n.prev) &&
            ((e.next = i) ? (i.prev = e) : e && (this._drawLast = e),
            (n.prev = null),
            (n.next = this._drawFirst),
            (this._drawFirst.prev = n),
            (this._drawFirst = n),
            this._requestRedraw(t)));
      }
    });
  function ln(t) {
    return St ? new un(t) : null;
  }
  var cn = (function () {
      try {
        return (
          document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
          function (t) {
            return document.createElement("<lvml:" + t + ' class="lvml">');
          }
        );
      } catch (t) {
        return function (t) {
          return document.createElement(
            "<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">'
          );
        };
      }
    })(),
    _n = {
      _initContainer: function () {
        this._container = si("div", "leaflet-vml-container");
      },
      _update: function () {
        this._map._animatingZoom ||
          (hn.prototype._update.call(this), this.fire("update"));
      },
      _initPath: function (t) {
        var i = (t._container = cn("shape"));
        ci(i, "leaflet-vml-shape " + (this.options.className || "")),
          (i.coordsize = "1 1"),
          (t._path = cn("path")),
          i.appendChild(t._path),
          this._updateStyle(t),
          (this._layers[m(t)] = t);
      },
      _addPath: function (t) {
        var i = t._container;
        this._container.appendChild(i),
          t.options.interactive && t.addInteractiveTarget(i);
      },
      _removePath: function (t) {
        var i = t._container;
        ri(i), t.removeInteractiveTarget(i), delete this._layers[m(t)];
      },
      _updateStyle: function (t) {
        var i = t._stroke,
          e = t._fill,
          n = t.options,
          o = t._container;
        (o.stroked = !!n.stroke),
          (o.filled = !!n.fill),
          n.stroke
            ? ((i = i || (t._stroke = cn("stroke"))),
              o.appendChild(i),
              (i.weight = n.weight + "px"),
              (i.color = n.color),
              (i.opacity = n.opacity),
              n.dashArray
                ? (i.dashStyle = g(n.dashArray)
                    ? n.dashArray.join(" ")
                    : n.dashArray.replace(/( *, *)/g, " "))
                : (i.dashStyle = ""),
              (i.endcap = n.lineCap.replace("butt", "flat")),
              (i.joinstyle = n.lineJoin))
            : i && (o.removeChild(i), (t._stroke = null)),
          n.fill
            ? ((e = e || (t._fill = cn("fill"))),
              o.appendChild(e),
              (e.color = n.fillColor || n.color),
              (e.opacity = n.fillOpacity))
            : e && (o.removeChild(e), (t._fill = null));
      },
      _updateCircle: function (t) {
        var i = t._point.round(),
          e = Math.round(t._radius),
          n = Math.round(t._radiusY || e);
        this._setPath(
          t,
          t._empty()
            ? "M0 0"
            : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600"
        );
      },
      _setPath: function (t, i) {
        t._path.v = i;
      },
      _bringToFront: function (t) {
        hi(t._container);
      },
      _bringToBack: function (t) {
        ui(t._container);
      }
    },
    dn = Et ? cn : J,
    pn = hn.extend({
      getEvents: function () {
        var t = hn.prototype.getEvents.call(this);
        return (t.zoomstart = this._onZoomStart), t;
      },
      _initContainer: function () {
        (this._container = dn("svg")),
          this._container.setAttribute("pointer-events", "none"),
          (this._rootGroup = dn("g")),
          this._container.appendChild(this._rootGroup);
      },
      _destroyContainer: function () {
        ri(this._container),
          Si(this._container),
          delete this._container,
          delete this._rootGroup,
          delete this._svgSize;
      },
      _onZoomStart: function () {
        this._update();
      },
      _update: function () {
        var t, i, e;
        (this._map._animatingZoom && this._bounds) ||
          (hn.prototype._update.call(this),
          (i = (t = this._bounds).getSize()),
          (e = this._container),
          (this._svgSize && this._svgSize.equals(i)) ||
            ((this._svgSize = i),
            e.setAttribute("width", i.x),
            e.setAttribute("height", i.y)),
          vi(e, t.min),
          e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")),
          this.fire("update"));
      },
      _initPath: function (t) {
        var i = (t._path = dn("path"));
        t.options.className && ci(i, t.options.className),
          t.options.interactive && ci(i, "leaflet-interactive"),
          this._updateStyle(t),
          (this._layers[m(t)] = t);
      },
      _addPath: function (t) {
        this._rootGroup || this._initContainer(),
          this._rootGroup.appendChild(t._path),
          t.addInteractiveTarget(t._path);
      },
      _removePath: function (t) {
        ri(t._path),
          t.removeInteractiveTarget(t._path),
          delete this._layers[m(t)];
      },
      _updatePath: function (t) {
        t._project(), t._update();
      },
      _updateStyle: function (t) {
        var i = t._path,
          e = t.options;
        i &&
          (e.stroke
            ? (i.setAttribute("stroke", e.color),
              i.setAttribute("stroke-opacity", e.opacity),
              i.setAttribute("stroke-width", e.weight),
              i.setAttribute("stroke-linecap", e.lineCap),
              i.setAttribute("stroke-linejoin", e.lineJoin),
              e.dashArray
                ? i.setAttribute("stroke-dasharray", e.dashArray)
                : i.removeAttribute("stroke-dasharray"),
              e.dashOffset
                ? i.setAttribute("stroke-dashoffset", e.dashOffset)
                : i.removeAttribute("stroke-dashoffset"))
            : i.setAttribute("stroke", "none"),
          e.fill
            ? (i.setAttribute("fill", e.fillColor || e.color),
              i.setAttribute("fill-opacity", e.fillOpacity),
              i.setAttribute("fill-rule", e.fillRule || "evenodd"))
            : i.setAttribute("fill", "none"));
      },
      _updatePoly: function (t, i) {
        this._setPath(t, $(t._parts, i));
      },
      _updateCircle: function (t) {
        var i = t._point,
          e = Math.max(Math.round(t._radius), 1),
          n =
            "a" +
            e +
            "," +
            (Math.max(Math.round(t._radiusY), 1) || e) +
            " 0 1,0 ",
          o = t._empty()
            ? "M0 0"
            : "M" +
              (i.x - e) +
              "," +
              i.y +
              n +
              2 * e +
              ",0 " +
              n +
              2 * -e +
              ",0 ";
        this._setPath(t, o);
      },
      _setPath: function (t, i) {
        t._path.setAttribute("d", i);
      },
      _bringToFront: function (t) {
        hi(t._path);
      },
      _bringToBack: function (t) {
        ui(t._path);
      }
    });
  function mn(t) {
    return Zt || Et ? new pn(t) : null;
  }
  Et && pn.include(_n),
    Ki.include({
      getRenderer: function (t) {
        var i =
          (i =
            t.options.renderer ||
            this._getPaneRenderer(t.options.pane) ||
            this.options.renderer ||
            this._renderer) || (this._renderer = this._createRenderer());
        return this.hasLayer(i) || this.addLayer(i), i;
      },
      _getPaneRenderer: function (t) {
        if ("overlayPane" === t || void 0 === t) return !1;
        var i = this._paneRenderers[t];
        return (
          void 0 === i &&
            ((i = this._createRenderer({ pane: t })),
            (this._paneRenderers[t] = i)),
          i
        );
      },
      _createRenderer: function (t) {
        return (this.options.preferCanvas && ln(t)) || mn(t);
      }
    });
  var fn = Re.extend({
    initialize: function (t, i) {
      Re.prototype.initialize.call(this, this._boundsToLatLngs(t), i);
    },
    setBounds: function (t) {
      return this.setLatLngs(this._boundsToLatLngs(t));
    },
    _boundsToLatLngs: function (t) {
      return [
        (t = N(t)).getSouthWest(),
        t.getNorthWest(),
        t.getNorthEast(),
        t.getSouthEast()
      ];
    }
  });
  (pn.create = dn),
    (pn.pointsToPath = $),
    (Ne.geometryToLayer = De),
    (Ne.coordsToLatLng = We),
    (Ne.coordsToLatLngs = He),
    (Ne.latLngToCoords = Fe),
    (Ne.latLngsToCoords = Ue),
    (Ne.getFeature = Ve),
    (Ne.asFeature = qe),
    Ki.mergeOptions({ boxZoom: !0 });
  var gn = ie.extend({
    initialize: function (t) {
      (this._map = t),
        (this._container = t._container),
        (this._pane = t._panes.overlayPane),
        (this._resetStateTimeout = 0),
        t.on("unload", this._destroy, this);
    },
    addHooks: function () {
      zi(this._container, "mousedown", this._onMouseDown, this);
    },
    removeHooks: function () {
      Si(this._container, "mousedown", this._onMouseDown, this);
    },
    moved: function () {
      return this._moved;
    },
    _destroy: function () {
      ri(this._pane), delete this._pane;
    },
    _resetState: function () {
      (this._resetStateTimeout = 0), (this._moved = !1);
    },
    _clearDeferredResetState: function () {
      0 !== this._resetStateTimeout &&
        (clearTimeout(this._resetStateTimeout), (this._resetStateTimeout = 0));
    },
    _onMouseDown: function (t) {
      if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
      this._clearDeferredResetState(),
        this._resetState(),
        Xt(),
        xi(),
        (this._startPoint = this._map.mouseEventToContainerPoint(t)),
        zi(
          document,
          {
            contextmenu: Ni,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          },
          this
        );
    },
    _onMouseMove: function (t) {
      this._moved ||
        ((this._moved = !0),
        (this._box = si("div", "leaflet-zoom-box", this._container)),
        ci(this._container, "leaflet-crosshair"),
        this._map.fire("boxzoomstart")),
        (this._point = this._map.mouseEventToContainerPoint(t));
      var i = new I(this._point, this._startPoint),
        e = i.getSize();
      vi(this._box, i.min),
        (this._box.style.width = e.x + "px"),
        (this._box.style.height = e.y + "px");
    },
    _finish: function () {
      this._moved && (ri(this._box), _i(this._container, "leaflet-crosshair")),
        Jt(),
        wi(),
        Si(
          document,
          {
            contextmenu: Ni,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          },
          this
        );
    },
    _onMouseUp: function (t) {
      var i;
      (1 !== t.which && 1 !== t.button) ||
        (this._finish(),
        this._moved &&
          (this._clearDeferredResetState(),
          (this._resetStateTimeout = setTimeout(p(this._resetState, this), 0)),
          (i = new R(
            this._map.containerPointToLatLng(this._startPoint),
            this._map.containerPointToLatLng(this._point)
          )),
          this._map.fitBounds(i).fire("boxzoomend", { boxZoomBounds: i })));
    },
    _onKeyDown: function (t) {
      27 === t.keyCode && this._finish();
    }
  });
  Ki.addInitHook("addHandler", "boxZoom", gn),
    Ki.mergeOptions({ doubleClickZoom: !0 });
  var vn = ie.extend({
    addHooks: function () {
      this._map.on("dblclick", this._onDoubleClick, this);
    },
    removeHooks: function () {
      this._map.off("dblclick", this._onDoubleClick, this);
    },
    _onDoubleClick: function (t) {
      var i = this._map,
        e = i.getZoom(),
        n = i.options.zoomDelta,
        o = t.originalEvent.shiftKey ? e - n : e + n;
      "center" === i.options.doubleClickZoom
        ? i.setZoom(o)
        : i.setZoomAround(t.containerPoint, o);
    }
  });
  Ki.addInitHook("addHandler", "doubleClickZoom", vn),
    Ki.mergeOptions({
      dragging: !0,
      inertia: !st,
      inertiaDeceleration: 3400,
      inertiaMaxSpeed: 1 / 0,
      easeLinearity: 0.2,
      worldCopyJump: !1,
      maxBoundsViscosity: 0
    });
  var yn = ie.extend({
    addHooks: function () {
      var t;
      this._draggable ||
        ((t = this._map),
        (this._draggable = new ae(t._mapPane, t._container)),
        this._draggable.on(
          {
            dragstart: this._onDragStart,
            drag: this._onDrag,
            dragend: this._onDragEnd
          },
          this
        ),
        this._draggable.on("predrag", this._onPreDragLimit, this),
        t.options.worldCopyJump &&
          (this._draggable.on("predrag", this._onPreDragWrap, this),
          t.on("zoomend", this._onZoomEnd, this),
          t.whenReady(this._onZoomEnd, this))),
        ci(this._map._container, "leaflet-grab leaflet-touch-drag"),
        this._draggable.enable(),
        (this._positions = []),
        (this._times = []);
    },
    removeHooks: function () {
      _i(this._map._container, "leaflet-grab"),
        _i(this._map._container, "leaflet-touch-drag"),
        this._draggable.disable();
    },
    moved: function () {
      return this._draggable && this._draggable._moved;
    },
    moving: function () {
      return this._draggable && this._draggable._moving;
    },
    _onDragStart: function () {
      var t,
        i = this._map;
      i._stop(),
        this._map.options.maxBounds && this._map.options.maxBoundsViscosity
          ? ((t = N(this._map.options.maxBounds)),
            (this._offsetLimit = O(
              this._map.latLngToContainerPoint(t.getNorthWest()).multiplyBy(-1),
              this._map
                .latLngToContainerPoint(t.getSouthEast())
                .multiplyBy(-1)
                .add(this._map.getSize())
            )),
            (this._viscosity = Math.min(
              1,
              Math.max(0, this._map.options.maxBoundsViscosity)
            )))
          : (this._offsetLimit = null),
        i.fire("movestart").fire("dragstart"),
        i.options.inertia && ((this._positions = []), (this._times = []));
    },
    _onDrag: function (t) {
      var i, e;
      this._map.options.inertia &&
        ((i = this._lastTime = +new Date()),
        (e = this._lastPos =
          this._draggable._absPos || this._draggable._newPos),
        this._positions.push(e),
        this._times.push(i),
        this._prunePositions(i)),
        this._map.fire("move", t).fire("drag", t);
    },
    _prunePositions: function (t) {
      for (; 1 < this._positions.length && 50 < t - this._times[0]; )
        this._positions.shift(), this._times.shift();
    },
    _onZoomEnd: function () {
      var t = this._map.getSize().divideBy(2),
        i = this._map.latLngToLayerPoint([0, 0]);
      (this._initialWorldOffset = i.subtract(t).x),
        (this._worldWidth = this._map.getPixelWorldBounds().getSize().x);
    },
    _viscousLimit: function (t, i) {
      return t - (t - i) * this._viscosity;
    },
    _onPreDragLimit: function () {
      var t, i;
      this._viscosity &&
        this._offsetLimit &&
        ((t = this._draggable._newPos.subtract(this._draggable._startPos)),
        (i = this._offsetLimit),
        t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)),
        t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)),
        t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)),
        t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)),
        (this._draggable._newPos = this._draggable._startPos.add(t)));
    },
    _onPreDragWrap: function () {
      var t = this._worldWidth,
        i = Math.round(t / 2),
        e = this._initialWorldOffset,
        n = this._draggable._newPos.x,
        o = ((n - i + e) % t) + i - e,
        s = ((n + i + e) % t) - i - e,
        r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
      (this._draggable._absPos = this._draggable._newPos.clone()),
        (this._draggable._newPos.x = r);
    },
    _onDragEnd: function (t) {
      var i,
        e,
        n,
        o,
        s,
        r,
        a,
        h,
        u,
        l = this._map,
        c = l.options,
        _ = !c.inertia || this._times.length < 2;
      l.fire("dragend", t),
        _
          ? l.fire("moveend")
          : (this._prunePositions(+new Date()),
            (i = this._lastPos.subtract(this._positions[0])),
            (e = (this._lastTime - this._times[0]) / 1e3),
            (n = c.easeLinearity),
            (s = (o = i.multiplyBy(n / e)).distanceTo([0, 0])),
            (r = Math.min(c.inertiaMaxSpeed, s)),
            (a = o.multiplyBy(r / s)),
            (h = r / (c.inertiaDeceleration * n)),
            (u = a.multiplyBy(-h / 2).round()).x || u.y
              ? ((u = l._limitOffset(u, l.options.maxBounds)),
                M(function () {
                  l.panBy(u, {
                    duration: h,
                    easeLinearity: n,
                    noMoveStart: !0,
                    animate: !0
                  });
                }))
              : l.fire("moveend"));
    }
  });
  Ki.addInitHook("addHandler", "dragging", yn),
    Ki.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
  var xn = ie.extend({
    keyCodes: {
      left: [37],
      right: [39],
      down: [40],
      up: [38],
      zoomIn: [187, 107, 61, 171],
      zoomOut: [189, 109, 54, 173]
    },
    initialize: function (t) {
      (this._map = t),
        this._setPanDelta(t.options.keyboardPanDelta),
        this._setZoomDelta(t.options.zoomDelta);
    },
    addHooks: function () {
      var t = this._map._container;
      t.tabIndex <= 0 && (t.tabIndex = "0"),
        zi(
          t,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          },
          this
        ),
        this._map.on({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    removeHooks: function () {
      this._removeHooks(),
        Si(
          this._map._container,
          {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          },
          this
        ),
        this._map.off({ focus: this._addHooks, blur: this._removeHooks }, this);
    },
    _onMouseDown: function () {
      var t, i, e, n;
      this._focused ||
        ((t = document.body),
        (i = document.documentElement),
        (e = t.scrollTop || i.scrollTop),
        (n = t.scrollLeft || i.scrollLeft),
        this._map._container.focus(),
        window.scrollTo(n, e));
    },
    _onFocus: function () {
      (this._focused = !0), this._map.fire("focus");
    },
    _onBlur: function () {
      (this._focused = !1), this._map.fire("blur");
    },
    _setPanDelta: function (t) {
      for (
        var i = (this._panKeys = {}),
          e = this.keyCodes,
          n = 0,
          o = e.left.length;
        n < o;
        n++
      )
        i[e.left[n]] = [-1 * t, 0];
      for (n = 0, o = e.right.length; n < o; n++) i[e.right[n]] = [t, 0];
      for (n = 0, o = e.down.length; n < o; n++) i[e.down[n]] = [0, t];
      for (n = 0, o = e.up.length; n < o; n++) i[e.up[n]] = [0, -1 * t];
    },
    _setZoomDelta: function (t) {
      for (
        var i = (this._zoomKeys = {}),
          e = this.keyCodes,
          n = 0,
          o = e.zoomIn.length;
        n < o;
        n++
      )
        i[e.zoomIn[n]] = t;
      for (n = 0, o = e.zoomOut.length; n < o; n++) i[e.zoomOut[n]] = -t;
    },
    _addHooks: function () {
      zi(document, "keydown", this._onKeyDown, this);
    },
    _removeHooks: function () {
      Si(document, "keydown", this._onKeyDown, this);
    },
    _onKeyDown: function (t) {
      if (!(t.altKey || t.ctrlKey || t.metaKey)) {
        var i,
          e = t.keyCode,
          n = this._map;
        if (e in this._panKeys)
          (n._panAnim && n._panAnim._inProgress) ||
            ((i = this._panKeys[e]),
            t.shiftKey && (i = A(i).multiplyBy(3)),
            n.panBy(i),
            n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
        else if (e in this._zoomKeys)
          n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
        else {
          if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey)
            return;
          n.closePopup();
        }
        Ni(t);
      }
    }
  });
  Ki.addInitHook("addHandler", "keyboard", xn),
    Ki.mergeOptions({
      scrollWheelZoom: !0,
      wheelDebounceTime: 40,
      wheelPxPerZoomLevel: 60
    });
  var wn = ie.extend({
    addHooks: function () {
      zi(this._map._container, "wheel", this._onWheelScroll, this),
        (this._delta = 0);
    },
    removeHooks: function () {
      Si(this._map._container, "wheel", this._onWheelScroll, this);
    },
    _onWheelScroll: function (t) {
      var i = Wi(t),
        e = this._map.options.wheelDebounceTime;
      (this._delta += i),
        (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
        this._startTime || (this._startTime = +new Date());
      var n = Math.max(e - (new Date() - this._startTime), 0);
      clearTimeout(this._timer),
        (this._timer = setTimeout(p(this._performZoom, this), n)),
        Ni(t);
    },
    _performZoom: function () {
      var t = this._map,
        i = t.getZoom(),
        e = this._map.options.zoomSnap || 0;
      t._stop();
      var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
        o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(n))))) / Math.LN2,
        s = e ? Math.ceil(o / e) * e : o,
        r = t._limitZoom(i + (0 < this._delta ? s : -s)) - i;
      (this._delta = 0),
        (this._startTime = null),
        r &&
          ("center" === t.options.scrollWheelZoom
            ? t.setZoom(i + r)
            : t.setZoomAround(this._lastMousePos, i + r));
    }
  });
  Ki.addInitHook("addHandler", "scrollWheelZoom", wn),
    Ki.mergeOptions({ tap: !0, tapTolerance: 15 });
  var Pn = ie.extend({
    addHooks: function () {
      zi(this._map._container, "touchstart", this._onDown, this);
    },
    removeHooks: function () {
      Si(this._map._container, "touchstart", this._onDown, this);
    },
    _onDown: function (t) {
      if (t.touches) {
        if ((Ri(t), (this._fireClick = !0), 1 < t.touches.length))
          return (this._fireClick = !1), void clearTimeout(this._holdTimeout);
        var i = t.touches[0],
          e = i.target;
        (this._startPos = this._newPos = new k(i.clientX, i.clientY)),
          e.tagName &&
            "a" === e.tagName.toLowerCase() &&
            ci(e, "leaflet-active"),
          (this._holdTimeout = setTimeout(
            p(function () {
              this._isTapValid() &&
                ((this._fireClick = !1),
                this._onUp(),
                this._simulateEvent("contextmenu", i));
            }, this),
            1e3
          )),
          this._simulateEvent("mousedown", i),
          zi(document, { touchmove: this._onMove, touchend: this._onUp }, this);
      }
    },
    _onUp: function (t) {
      var i, e;
      clearTimeout(this._holdTimeout),
        Si(document, { touchmove: this._onMove, touchend: this._onUp }, this),
        this._fireClick &&
          t &&
          t.changedTouches &&
          ((e = (i = t.changedTouches[0]).target) &&
            e.tagName &&
            "a" === e.tagName.toLowerCase() &&
            _i(e, "leaflet-active"),
          this._simulateEvent("mouseup", i),
          this._isTapValid() && this._simulateEvent("click", i));
    },
    _isTapValid: function () {
      return (
        this._newPos.distanceTo(this._startPos) <=
        this._map.options.tapTolerance
      );
    },
    _onMove: function (t) {
      var i = t.touches[0];
      (this._newPos = new k(i.clientX, i.clientY)),
        this._simulateEvent("mousemove", i);
    },
    _simulateEvent: function (t, i) {
      var e = document.createEvent("MouseEvents");
      (e._simulated = !0),
        (i.target._simulatedClick = !0),
        e.initMouseEvent(
          t,
          !0,
          !0,
          window,
          1,
          i.screenX,
          i.screenY,
          i.clientX,
          i.clientY,
          !1,
          !1,
          !1,
          !1,
          0,
          null
        ),
        i.target.dispatchEvent(e);
    }
  });
  !bt || (Lt && !ct) || Ki.addInitHook("addHandler", "tap", Pn),
    Ki.mergeOptions({ touchZoom: bt && !st, bounceAtZoomLimits: !0 });
  var Ln = ie.extend({
    addHooks: function () {
      ci(this._map._container, "leaflet-touch-zoom"),
        zi(this._map._container, "touchstart", this._onTouchStart, this);
    },
    removeHooks: function () {
      _i(this._map._container, "leaflet-touch-zoom"),
        Si(this._map._container, "touchstart", this._onTouchStart, this);
    },
    _onTouchStart: function (t) {
      var i,
        e,
        n = this._map;
      !t.touches ||
        2 !== t.touches.length ||
        n._animatingZoom ||
        this._zooming ||
        ((i = n.mouseEventToContainerPoint(t.touches[0])),
        (e = n.mouseEventToContainerPoint(t.touches[1])),
        (this._centerPoint = n.getSize()._divideBy(2)),
        (this._startLatLng = n.containerPointToLatLng(this._centerPoint)),
        "center" !== n.options.touchZoom &&
          (this._pinchStartLatLng = n.containerPointToLatLng(
            i.add(e)._divideBy(2)
          )),
        (this._startDist = i.distanceTo(e)),
        (this._startZoom = n.getZoom()),
        (this._moved = !1),
        (this._zooming = !0),
        n._stop(),
        zi(document, "touchmove", this._onTouchMove, this),
        zi(document, "touchend", this._onTouchEnd, this),
        Ri(t));
    },
    _onTouchMove: function (t) {
      if (t.touches && 2 === t.touches.length && this._zooming) {
        var i = this._map,
          e = i.mouseEventToContainerPoint(t.touches[0]),
          n = i.mouseEventToContainerPoint(t.touches[1]),
          o = e.distanceTo(n) / this._startDist;
        if (
          ((this._zoom = i.getScaleZoom(o, this._startZoom)),
          !i.options.bounceAtZoomLimits &&
            ((this._zoom < i.getMinZoom() && o < 1) ||
              (this._zoom > i.getMaxZoom() && 1 < o)) &&
            (this._zoom = i._limitZoom(this._zoom)),
          "center" === i.options.touchZoom)
        ) {
          if (((this._center = this._startLatLng), 1 == o)) return;
        } else {
          var s = e._add(n)._divideBy(2)._subtract(this._centerPoint);
          if (1 == o && 0 === s.x && 0 === s.y) return;
          this._center = i.unproject(
            i.project(this._pinchStartLatLng, this._zoom).subtract(s),
            this._zoom
          );
        }
        this._moved || (i._moveStart(!0, !1), (this._moved = !0)),
          z(this._animRequest);
        var r = p(i._move, i, this._center, this._zoom, {
          pinch: !0,
          round: !1
        });
        (this._animRequest = M(r, this, !0)), Ri(t);
      }
    },
    _onTouchEnd: function () {
      this._moved && this._zooming
        ? ((this._zooming = !1),
          z(this._animRequest),
          Si(document, "touchmove", this._onTouchMove, this),
          Si(document, "touchend", this._onTouchEnd, this),
          this._map.options.zoomAnimation
            ? this._map._animateZoom(
                this._center,
                this._map._limitZoom(this._zoom),
                !0,
                this._map.options.zoomSnap
              )
            : this._map._resetView(
                this._center,
                this._map._limitZoom(this._zoom)
              ))
        : (this._zooming = !1);
    }
  });
  Ki.addInitHook("addHandler", "touchZoom", Ln),
    (Ki.BoxZoom = gn),
    (Ki.DoubleClickZoom = vn),
    (Ki.Drag = yn),
    (Ki.Keyboard = xn),
    (Ki.ScrollWheelZoom = wn),
    (Ki.Tap = Pn),
    (Ki.TouchZoom = Ln),
    (t.version = "1.7.1"),
    (t.Control = Xi),
    (t.control = Yi),
    (t.Browser = Bt),
    (t.Evented = E),
    (t.Mixin = ne),
    (t.Util = C),
    (t.Class = S),
    (t.Handler = ie),
    (t.extend = h),
    (t.bind = p),
    (t.stamp = m),
    (t.setOptions = c),
    (t.DomEvent = qi),
    (t.DomUtil = Mi),
    (t.PosAnimation = Gi),
    (t.Draggable = ae),
    (t.LineUtil = fe),
    (t.PolyUtil = ye),
    (t.Point = k),
    (t.point = A),
    (t.Bounds = I),
    (t.bounds = O),
    (t.Transformation = q),
    (t.transformation = G),
    (t.Projection = Pe),
    (t.LatLng = D),
    (t.latLng = j),
    (t.LatLngBounds = R),
    (t.latLngBounds = N),
    (t.CRS = H),
    (t.GeoJSON = Ne),
    (t.geoJSON = Ke),
    (t.geoJson = Ye),
    (t.Layer = Me),
    (t.LayerGroup = ze),
    (t.layerGroup = function (t, i) {
      return new ze(t, i);
    }),
    (t.FeatureGroup = Ce),
    (t.featureGroup = function (t, i) {
      return new Ce(t, i);
    }),
    (t.ImageOverlay = Xe),
    (t.imageOverlay = function (t, i, e) {
      return new Xe(t, i, e);
    }),
    (t.VideoOverlay = Je),
    (t.videoOverlay = function (t, i, e) {
      return new Je(t, i, e);
    }),
    (t.SVGOverlay = $e),
    (t.svgOverlay = function (t, i, e) {
      return new $e(t, i, e);
    }),
    (t.DivOverlay = Qe),
    (t.Popup = tn),
    (t.popup = function (t, i) {
      return new tn(t, i);
    }),
    (t.Tooltip = en),
    (t.tooltip = function (t, i) {
      return new en(t, i);
    }),
    (t.Icon = Se),
    (t.icon = function (t) {
      return new Se(t);
    }),
    (t.DivIcon = nn),
    (t.divIcon = function (t) {
      return new nn(t);
    }),
    (t.Marker = ke),
    (t.marker = function (t, i) {
      return new ke(t, i);
    }),
    (t.TileLayer = sn),
    (t.tileLayer = rn),
    (t.GridLayer = on),
    (t.gridLayer = function (t) {
      return new on(t);
    }),
    (t.SVG = pn),
    (t.svg = mn),
    (t.Renderer = hn),
    (t.Canvas = un),
    (t.canvas = ln),
    (t.Path = Be),
    (t.CircleMarker = Ae),
    (t.circleMarker = function (t, i) {
      return new Ae(t, i);
    }),
    (t.Circle = Ie),
    (t.circle = function (t, i, e) {
      return new Ie(t, i, e);
    }),
    (t.Polyline = Oe),
    (t.polyline = function (t, i) {
      return new Oe(t, i);
    }),
    (t.Polygon = Re),
    (t.polygon = function (t, i) {
      return new Re(t, i);
    }),
    (t.Rectangle = fn),
    (t.rectangle = function (t, i) {
      return new fn(t, i);
    }),
    (t.Map = Ki),
    (t.map = function (t, i) {
      return new Ki(t, i);
    });
  var bn = window.L;
  (t.noConflict = function () {
    return (window.L = bn), this;
  }),
    (window.L = t);
});
//# sourceMappingURL=leaflet.js.map
/******************************End Leaflet****************************** */
/******************************Map****************************** */
function initMap() {
  var latitude = 17.5911091;
  var longitude = 120.4328791;

  var map = L.map("map").setView([latitude, longitude], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
    maxZoom: 18
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map);
}

initMap();

/******************************End Map****************************** */
