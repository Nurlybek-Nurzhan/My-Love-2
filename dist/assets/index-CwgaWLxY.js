(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) e(r);
  new MutationObserver((r) => {
    for (const n of r)
      if (n.type === "childList")
        for (const o of n.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && e(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(r) {
    const n = {};
    return (
      r.integrity && (n.integrity = r.integrity),
      r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (n.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (n.credentials = "omit")
        : (n.credentials = "same-origin"),
      n
    );
  }
  function e(r) {
    if (r.ep) return;
    r.ep = !0;
    const n = i(r);
    fetch(r.href, n);
  }
})();
const ke = document.body.querySelector("#mail"),
  U = document.body.querySelector(".bx-envelope"),
  Y = document.getElementById("modal");
ke.addEventListener("click", () => {
  U.classList.remove("bx-envelope"),
    U.classList.add("bx-envelope-open"),
    Y.classList.add("open");
});
function me(s) {
  return (
    s !== null &&
    typeof s == "object" &&
    "constructor" in s &&
    s.constructor === Object
  );
}
function pe(s, t) {
  s === void 0 && (s = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((i) => {
      typeof s[i] > "u"
        ? (s[i] = t[i])
        : me(t[i]) &&
          me(s[i]) &&
          Object.keys(t[i]).length > 0 &&
          pe(s[i], t[i]);
    });
}
const Ee = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function N() {
  const s = typeof document < "u" ? document : {};
  return pe(s, Ee), s;
}
const Ce = {
  document: Ee,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(s) {
    return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout > "u" || clearTimeout(s);
  },
};
function D() {
  const s = typeof window < "u" ? window : {};
  return pe(s, Ce), s;
}
function ze(s) {
  return (
    s === void 0 && (s = ""),
    s
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function Ae(s) {
  const t = s;
  Object.keys(t).forEach((i) => {
    try {
      t[i] = null;
    } catch {}
    try {
      delete t[i];
    } catch {}
  });
}
function de(s, t) {
  return t === void 0 && (t = 0), setTimeout(s, t);
}
function K() {
  return Date.now();
}
function Oe(s) {
  const t = D();
  let i;
  return (
    t.getComputedStyle && (i = t.getComputedStyle(s, null)),
    !i && s.currentStyle && (i = s.currentStyle),
    i || (i = s.style),
    i
  );
}
function De(s, t) {
  t === void 0 && (t = "x");
  const i = D();
  let e, r, n;
  const o = Oe(s);
  return (
    i.WebKitCSSMatrix
      ? ((r = o.transform || o.webkitTransform),
        r.split(",").length > 6 &&
          (r = r
            .split(", ")
            .map((l) => l.replace(",", "."))
            .join(", ")),
        (n = new i.WebKitCSSMatrix(r === "none" ? "" : r)))
      : ((n =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (e = n.toString().split(","))),
    t === "x" &&
      (i.WebKitCSSMatrix
        ? (r = n.m41)
        : e.length === 16
        ? (r = parseFloat(e[12]))
        : (r = parseFloat(e[4]))),
    t === "y" &&
      (i.WebKitCSSMatrix
        ? (r = n.m42)
        : e.length === 16
        ? (r = parseFloat(e[13]))
        : (r = parseFloat(e[5]))),
    r || 0
  );
}
function W(s) {
  return (
    typeof s == "object" &&
    s !== null &&
    s.constructor &&
    Object.prototype.toString.call(s).slice(8, -1) === "Object"
  );
}
function Fe(s) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? s instanceof HTMLElement
    : s && (s.nodeType === 1 || s.nodeType === 11);
}
function O() {
  const s = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (e != null && !Fe(e)) {
      const r = Object.keys(Object(e)).filter((n) => t.indexOf(n) < 0);
      for (let n = 0, o = r.length; n < o; n += 1) {
        const l = r[n],
          a = Object.getOwnPropertyDescriptor(e, l);
        a !== void 0 &&
          a.enumerable &&
          (W(s[l]) && W(e[l])
            ? e[l].__swiper__
              ? (s[l] = e[l])
              : O(s[l], e[l])
            : !W(s[l]) && W(e[l])
            ? ((s[l] = {}), e[l].__swiper__ ? (s[l] = e[l]) : O(s[l], e[l]))
            : (s[l] = e[l]));
      }
    }
  }
  return s;
}
function X(s, t, i) {
  s.style.setProperty(t, i);
}
function Me(s) {
  let { swiper: t, targetPosition: i, side: e } = s;
  const r = D(),
    n = -t.translate;
  let o = null,
    l;
  const a = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    r.cancelAnimationFrame(t.cssModeFrameID);
  const d = i > n ? "next" : "prev",
    c = (f, p) => (d === "next" && f >= p) || (d === "prev" && f <= p),
    u = () => {
      (l = new Date().getTime()), o === null && (o = l);
      const f = Math.max(Math.min((l - o) / a, 1), 0),
        p = 0.5 - Math.cos(f * Math.PI) / 2;
      let m = n + p * (i - n);
      if ((c(m, i) && (m = i), t.wrapperEl.scrollTo({ [e]: m }), c(m, i))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [e]: m });
          }),
          r.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = r.requestAnimationFrame(u);
    };
  u();
}
function B(s, t) {
  t === void 0 && (t = "");
  const i = [...s.children];
  return (
    s instanceof HTMLSlotElement && i.push(...s.assignedElements()),
    t ? i.filter((e) => e.matches(t)) : i
  );
}
function Ge(s, t) {
  const i = t.contains(s);
  return !i && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(s)
    : i;
}
function Q(s) {
  try {
    console.warn(s);
    return;
  } catch {}
}
function ce(s, t) {
  t === void 0 && (t = []);
  const i = document.createElement(s);
  return i.classList.add(...(Array.isArray(t) ? t : ze(t))), i;
}
function Ve(s, t) {
  const i = [];
  for (; s.previousElementSibling; ) {
    const e = s.previousElementSibling;
    t ? e.matches(t) && i.push(e) : i.push(e), (s = e);
  }
  return i;
}
function Re(s, t) {
  const i = [];
  for (; s.nextElementSibling; ) {
    const e = s.nextElementSibling;
    t ? e.matches(t) && i.push(e) : i.push(e), (s = e);
  }
  return i;
}
function q(s, t) {
  return D().getComputedStyle(s, null).getPropertyValue(t);
}
function ve(s) {
  let t = s,
    i;
  if (t) {
    for (i = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (i += 1);
    return i;
  }
}
function Be(s, t) {
  const i = [];
  let e = s.parentElement;
  for (; e; ) i.push(e), (e = e.parentElement);
  return i;
}
function he(s, t, i) {
  const e = D();
  return (
    s[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      e
        .getComputedStyle(s, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      e
        .getComputedStyle(s, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
let ee;
function Ne() {
  const s = D(),
    t = N();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in s ||
      (s.DocumentTouch && t instanceof s.DocumentTouch)
    ),
  };
}
function Pe() {
  return ee || (ee = Ne()), ee;
}
let te;
function qe(s) {
  let { userAgent: t } = s === void 0 ? {} : s;
  const i = Pe(),
    e = D(),
    r = e.navigator.platform,
    n = t || e.navigator.userAgent,
    o = { ios: !1, android: !1 },
    l = e.screen.width,
    a = e.screen.height,
    d = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let c = n.match(/(iPad).*OS\s([\d_]+)/);
  const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    p = r === "Win32";
  let m = r === "MacIntel";
  const v = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !c &&
      m &&
      i.touch &&
      v.indexOf(`${l}x${a}`) >= 0 &&
      ((c = n.match(/(Version)\/([\d.]+)/)),
      c || (c = [0, 1, "13_0_0"]),
      (m = !1)),
    d && !p && ((o.os = "android"), (o.android = !0)),
    (c || f || u) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function _e(s) {
  return s === void 0 && (s = {}), te || (te = qe(s)), te;
}
let ie;
function He() {
  const s = D(),
    t = _e();
  let i = !1;
  function e() {
    const l = s.navigator.userAgent.toLowerCase();
    return (
      l.indexOf("safari") >= 0 &&
      l.indexOf("chrome") < 0 &&
      l.indexOf("android") < 0
    );
  }
  if (e()) {
    const l = String(s.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, d] = l
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((c) => Number(c));
      i = a < 16 || (a === 16 && d < 2);
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      s.navigator.userAgent
    ),
    n = e(),
    o = n || (r && t.ios);
  return {
    isSafari: i || n,
    needPerspectiveFix: i,
    need3dFix: o,
    isWebView: r,
  };
}
function $e() {
  return ie || (ie = He()), ie;
}
function je(s) {
  let { swiper: t, on: i, emit: e } = s;
  const r = D();
  let n = null,
    o = null;
  const l = () => {
      !t || t.destroyed || !t.initialized || (e("beforeResize"), e("resize"));
    },
    a = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((n = new ResizeObserver((u) => {
          o = r.requestAnimationFrame(() => {
            const { width: f, height: p } = t;
            let m = f,
              v = p;
            u.forEach((b) => {
              let { contentBoxSize: h, contentRect: S, target: g } = b;
              (g && g !== t.el) ||
                ((m = S ? S.width : (h[0] || h).inlineSize),
                (v = S ? S.height : (h[0] || h).blockSize));
            }),
              (m !== f || v !== p) && l();
          });
        })),
        n.observe(t.el));
    },
    d = () => {
      o && r.cancelAnimationFrame(o),
        n && n.unobserve && t.el && (n.unobserve(t.el), (n = null));
    },
    c = () => {
      !t || t.destroyed || !t.initialized || e("orientationchange");
    };
  i("init", () => {
    if (t.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", l), r.addEventListener("orientationchange", c);
  }),
    i("destroy", () => {
      d(),
        r.removeEventListener("resize", l),
        r.removeEventListener("orientationchange", c);
    });
}
function We(s) {
  let { swiper: t, extendParams: i, on: e, emit: r } = s;
  const n = [],
    o = D(),
    l = function (c, u) {
      u === void 0 && (u = {});
      const f = o.MutationObserver || o.WebkitMutationObserver,
        p = new f((m) => {
          if (t.__preventObserver__) return;
          if (m.length === 1) {
            r("observerUpdate", m[0]);
            return;
          }
          const v = function () {
            r("observerUpdate", m[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(v)
            : o.setTimeout(v, 0);
        });
      p.observe(c, {
        attributes: typeof u.attributes > "u" ? !0 : u.attributes,
        childList: t.isElement || (typeof u.childList > "u" ? !0 : u).childList,
        characterData: typeof u.characterData > "u" ? !0 : u.characterData,
      }),
        n.push(p);
    },
    a = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const c = Be(t.hostEl);
          for (let u = 0; u < c.length; u += 1) l(c[u]);
        }
        l(t.hostEl, { childList: t.params.observeSlideChildren }),
          l(t.wrapperEl, { attributes: !1 });
      }
    },
    d = () => {
      n.forEach((c) => {
        c.disconnect();
      }),
        n.splice(0, n.length);
    };
  i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    e("init", a),
    e("destroy", d);
}
var Xe = {
  on(s, t, i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || typeof t != "function") return e;
    const r = i ? "unshift" : "push";
    return (
      s.split(" ").forEach((n) => {
        e.eventsListeners[n] || (e.eventsListeners[n] = []),
          e.eventsListeners[n][r](t);
      }),
      e
    );
  },
  once(s, t, i) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || typeof t != "function") return e;
    function r() {
      e.off(s, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
        o[l] = arguments[l];
      t.apply(e, o);
    }
    return (r.__emitterProxy = t), e.on(s, r, i);
  },
  onAny(s, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof s != "function") return i;
    const e = t ? "unshift" : "push";
    return i.eventsAnyListeners.indexOf(s) < 0 && i.eventsAnyListeners[e](s), i;
  },
  offAny(s) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const i = t.eventsAnyListeners.indexOf(s);
    return i >= 0 && t.eventsAnyListeners.splice(i, 1), t;
  },
  off(s, t) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        s.split(" ").forEach((e) => {
          typeof t > "u"
            ? (i.eventsListeners[e] = [])
            : i.eventsListeners[e] &&
              i.eventsListeners[e].forEach((r, n) => {
                (r === t || (r.__emitterProxy && r.__emitterProxy === t)) &&
                  i.eventsListeners[e].splice(n, 1);
              });
        }),
      i
    );
  },
  emit() {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
    let t, i, e;
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return (
      typeof n[0] == "string" || Array.isArray(n[0])
        ? ((t = n[0]), (i = n.slice(1, n.length)), (e = s))
        : ((t = n[0].events), (i = n[0].data), (e = n[0].context || s)),
      i.unshift(e),
      (Array.isArray(t) ? t : t.split(" ")).forEach((a) => {
        s.eventsAnyListeners &&
          s.eventsAnyListeners.length &&
          s.eventsAnyListeners.forEach((d) => {
            d.apply(e, [a, ...i]);
          }),
          s.eventsListeners &&
            s.eventsListeners[a] &&
            s.eventsListeners[a].forEach((d) => {
              d.apply(e, i);
            });
      }),
      s
    );
  },
};
function Ye() {
  const s = this;
  let t, i;
  const e = s.el;
  typeof s.params.width < "u" && s.params.width !== null
    ? (t = s.params.width)
    : (t = e.clientWidth),
    typeof s.params.height < "u" && s.params.height !== null
      ? (i = s.params.height)
      : (i = e.clientHeight),
    !((t === 0 && s.isHorizontal()) || (i === 0 && s.isVertical())) &&
      ((t =
        t -
        parseInt(q(e, "padding-left") || 0, 10) -
        parseInt(q(e, "padding-right") || 0, 10)),
      (i =
        i -
        parseInt(q(e, "padding-top") || 0, 10) -
        parseInt(q(e, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(s, {
        width: t,
        height: i,
        size: s.isHorizontal() ? t : i,
      }));
}
function Je() {
  const s = this;
  function t(y, M) {
    return parseFloat(y.getPropertyValue(s.getDirectionLabel(M)) || 0);
  }
  const i = s.params,
    { wrapperEl: e, slidesEl: r, size: n, rtlTranslate: o, wrongRTL: l } = s,
    a = s.virtual && i.virtual.enabled,
    d = a ? s.virtual.slides.length : s.slides.length,
    c = B(r, `.${s.params.slideClass}, swiper-slide`),
    u = a ? s.virtual.slides.length : c.length;
  let f = [];
  const p = [],
    m = [];
  let v = i.slidesOffsetBefore;
  typeof v == "function" && (v = i.slidesOffsetBefore.call(s));
  let b = i.slidesOffsetAfter;
  typeof b == "function" && (b = i.slidesOffsetAfter.call(s));
  const h = s.snapGrid.length,
    S = s.slidesGrid.length;
  let g = i.spaceBetween,
    x = -v,
    w = 0,
    E = 0;
  if (typeof n > "u") return;
  typeof g == "string" && g.indexOf("%") >= 0
    ? (g = (parseFloat(g.replace("%", "")) / 100) * n)
    : typeof g == "string" && (g = parseFloat(g)),
    (s.virtualSize = -g),
    c.forEach((y) => {
      o ? (y.style.marginLeft = "") : (y.style.marginRight = ""),
        (y.style.marginBottom = ""),
        (y.style.marginTop = "");
    }),
    i.centeredSlides &&
      i.cssMode &&
      (X(e, "--swiper-centered-offset-before", ""),
      X(e, "--swiper-centered-offset-after", ""));
  const k = i.grid && i.grid.rows > 1 && s.grid;
  k ? s.grid.initSlides(c) : s.grid && s.grid.unsetSlides();
  let _;
  const A =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (y) => typeof i.breakpoints[y].slidesPerView < "u"
    ).length > 0;
  for (let y = 0; y < u; y += 1) {
    _ = 0;
    let M;
    if (
      (c[y] && (M = c[y]),
      k && s.grid.updateSlide(y, M, c),
      !(c[y] && q(M, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        A && (c[y].style[s.getDirectionLabel("width")] = "");
        const P = getComputedStyle(M),
          T = M.style.transform,
          L = M.style.webkitTransform;
        if (
          (T && (M.style.transform = "none"),
          L && (M.style.webkitTransform = "none"),
          i.roundLengths)
        )
          _ = s.isHorizontal() ? he(M, "width") : he(M, "height");
        else {
          const C = t(P, "width"),
            V = t(P, "padding-left"),
            Z = t(P, "padding-right"),
            I = t(P, "margin-left"),
            F = t(P, "margin-right"),
            z = P.getPropertyValue("box-sizing");
          if (z && z === "border-box") _ = C + I + F;
          else {
            const { clientWidth: H, offsetWidth: j } = M;
            _ = C + V + Z + I + F + (j - H);
          }
        }
        T && (M.style.transform = T),
          L && (M.style.webkitTransform = L),
          i.roundLengths && (_ = Math.floor(_));
      } else
        (_ = (n - (i.slidesPerView - 1) * g) / i.slidesPerView),
          i.roundLengths && (_ = Math.floor(_)),
          c[y] && (c[y].style[s.getDirectionLabel("width")] = `${_}px`);
      c[y] && (c[y].swiperSlideSize = _),
        m.push(_),
        i.centeredSlides
          ? ((x = x + _ / 2 + w / 2 + g),
            w === 0 && y !== 0 && (x = x - n / 2 - g),
            y === 0 && (x = x - n / 2 - g),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            i.roundLengths && (x = Math.floor(x)),
            E % i.slidesPerGroup === 0 && f.push(x),
            p.push(x))
          : (i.roundLengths && (x = Math.floor(x)),
            (E - Math.min(s.params.slidesPerGroupSkip, E)) %
              s.params.slidesPerGroup ===
              0 && f.push(x),
            p.push(x),
            (x = x + _ + g)),
        (s.virtualSize += _ + g),
        (w = _),
        (E += 1);
    }
  }
  if (
    ((s.virtualSize = Math.max(s.virtualSize, n) + b),
    o &&
      l &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (e.style.width = `${s.virtualSize + g}px`),
    i.setWrapperSize &&
      (e.style[s.getDirectionLabel("width")] = `${s.virtualSize + g}px`),
    k && s.grid.updateWrapperSize(_, f),
    !i.centeredSlides)
  ) {
    const y = [];
    for (let M = 0; M < f.length; M += 1) {
      let P = f[M];
      i.roundLengths && (P = Math.floor(P)),
        f[M] <= s.virtualSize - n && y.push(P);
    }
    (f = y),
      Math.floor(s.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(s.virtualSize - n);
  }
  if (a && i.loop) {
    const y = m[0] + g;
    if (i.slidesPerGroup > 1) {
      const M = Math.ceil(
          (s.virtual.slidesBefore + s.virtual.slidesAfter) / i.slidesPerGroup
        ),
        P = y * i.slidesPerGroup;
      for (let T = 0; T < M; T += 1) f.push(f[f.length - 1] + P);
    }
    for (let M = 0; M < s.virtual.slidesBefore + s.virtual.slidesAfter; M += 1)
      i.slidesPerGroup === 1 && f.push(f[f.length - 1] + y),
        p.push(p[p.length - 1] + y),
        (s.virtualSize += y);
  }
  if ((f.length === 0 && (f = [0]), g !== 0)) {
    const y =
      s.isHorizontal() && o ? "marginLeft" : s.getDirectionLabel("marginRight");
    c.filter((M, P) =>
      !i.cssMode || i.loop ? !0 : P !== c.length - 1
    ).forEach((M) => {
      M.style[y] = `${g}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let y = 0;
    m.forEach((P) => {
      y += P + (g || 0);
    }),
      (y -= g);
    const M = y > n ? y - n : 0;
    f = f.map((P) => (P <= 0 ? -v : P > M ? M + b : P));
  }
  if (i.centerInsufficientSlides) {
    let y = 0;
    m.forEach((P) => {
      y += P + (g || 0);
    }),
      (y -= g);
    const M = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
    if (y + M < n) {
      const P = (n - y - M) / 2;
      f.forEach((T, L) => {
        f[L] = T - P;
      }),
        p.forEach((T, L) => {
          p[L] = T + P;
        });
    }
  }
  if (
    (Object.assign(s, {
      slides: c,
      snapGrid: f,
      slidesGrid: p,
      slidesSizesGrid: m,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    X(e, "--swiper-centered-offset-before", `${-f[0]}px`),
      X(
        e,
        "--swiper-centered-offset-after",
        `${s.size / 2 - m[m.length - 1] / 2}px`
      );
    const y = -s.snapGrid[0],
      M = -s.slidesGrid[0];
    (s.snapGrid = s.snapGrid.map((P) => P + y)),
      (s.slidesGrid = s.slidesGrid.map((P) => P + M));
  }
  if (
    (u !== d && s.emit("slidesLengthChange"),
    f.length !== h &&
      (s.params.watchOverflow && s.checkOverflow(),
      s.emit("snapGridLengthChange")),
    p.length !== S && s.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && s.updateSlidesOffset(),
    s.emit("slidesUpdated"),
    !a && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const y = `${i.containerModifierClass}backface-hidden`,
      M = s.el.classList.contains(y);
    u <= i.maxBackfaceHiddenSlides
      ? M || s.el.classList.add(y)
      : M && s.el.classList.remove(y);
  }
}
function Ue(s) {
  const t = this,
    i = [],
    e = t.virtual && t.params.virtual.enabled;
  let r = 0,
    n;
  typeof s == "number"
    ? t.setTransition(s)
    : s === !0 && t.setTransition(t.params.speed);
  const o = (l) => (e ? t.slides[t.getSlideIndexByData(l)] : t.slides[l]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        i.push(l);
      });
    else
      for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
        const l = t.activeIndex + n;
        if (l > t.slides.length && !e) break;
        i.push(o(l));
      }
  else i.push(o(t.activeIndex));
  for (n = 0; n < i.length; n += 1)
    if (typeof i[n] < "u") {
      const l = i[n].offsetHeight;
      r = l > r ? l : r;
    }
  (r || r === 0) && (t.wrapperEl.style.height = `${r}px`);
}
function Ke() {
  const s = this,
    t = s.slides,
    i = s.isElement
      ? s.isHorizontal()
        ? s.wrapperEl.offsetLeft
        : s.wrapperEl.offsetTop
      : 0;
  for (let e = 0; e < t.length; e += 1)
    t[e].swiperSlideOffset =
      (s.isHorizontal() ? t[e].offsetLeft : t[e].offsetTop) -
      i -
      s.cssOverflowAdjustment();
}
const ge = (s, t, i) => {
  t && !s.classList.contains(i)
    ? s.classList.add(i)
    : !t && s.classList.contains(i) && s.classList.remove(i);
};
function Qe(s) {
  s === void 0 && (s = (this && this.translate) || 0);
  const t = this,
    i = t.params,
    { slides: e, rtlTranslate: r, snapGrid: n } = t;
  if (e.length === 0) return;
  typeof e[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -s;
  r && (o = s), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let l = i.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0
    ? (l = (parseFloat(l.replace("%", "")) / 100) * t.size)
    : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < e.length; a += 1) {
    const d = e[a];
    let c = d.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (c -= e[0].swiperSlideOffset);
    const u =
        (o + (i.centeredSlides ? t.minTranslate() : 0) - c) /
        (d.swiperSlideSize + l),
      f =
        (o - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) /
        (d.swiperSlideSize + l),
      p = -(o - c),
      m = p + t.slidesSizesGrid[a],
      v = p >= 0 && p <= t.size - t.slidesSizesGrid[a],
      b =
        (p >= 0 && p < t.size - 1) ||
        (m > 1 && m <= t.size) ||
        (p <= 0 && m >= t.size);
    b && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(a)),
      ge(d, b, i.slideVisibleClass),
      ge(d, v, i.slideFullyVisibleClass),
      (d.progress = r ? -u : u),
      (d.originalProgress = r ? -f : f);
  }
}
function Ze(s) {
  const t = this;
  if (typeof s > "u") {
    const c = t.rtlTranslate ? -1 : 1;
    s = (t && t.translate && t.translate * c) || 0;
  }
  const i = t.params,
    e = t.maxTranslate() - t.minTranslate();
  let { progress: r, isBeginning: n, isEnd: o, progressLoop: l } = t;
  const a = n,
    d = o;
  if (e === 0) (r = 0), (n = !0), (o = !0);
  else {
    r = (s - t.minTranslate()) / e;
    const c = Math.abs(s - t.minTranslate()) < 1,
      u = Math.abs(s - t.maxTranslate()) < 1;
    (n = c || r <= 0), (o = u || r >= 1), c && (r = 0), u && (r = 1);
  }
  if (i.loop) {
    const c = t.getSlideIndexByData(0),
      u = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[c],
      p = t.slidesGrid[u],
      m = t.slidesGrid[t.slidesGrid.length - 1],
      v = Math.abs(s);
    v >= f ? (l = (v - f) / m) : (l = (v + m - p) / m), l > 1 && (l -= 1);
  }
  Object.assign(t, { progress: r, progressLoop: l, isBeginning: n, isEnd: o }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      t.updateSlidesProgress(s),
    n && !a && t.emit("reachBeginning toEdge"),
    o && !d && t.emit("reachEnd toEdge"),
    ((a && !n) || (d && !o)) && t.emit("fromEdge"),
    t.emit("progress", r);
}
const se = (s, t, i) => {
  t && !s.classList.contains(i)
    ? s.classList.add(i)
    : !t && s.classList.contains(i) && s.classList.remove(i);
};
function et() {
  const s = this,
    { slides: t, params: i, slidesEl: e, activeIndex: r } = s,
    n = s.virtual && i.virtual.enabled,
    o = s.grid && i.grid && i.grid.rows > 1,
    l = (u) => B(e, `.${i.slideClass}${u}, swiper-slide${u}`)[0];
  let a, d, c;
  if (n)
    if (i.loop) {
      let u = r - s.virtual.slidesBefore;
      u < 0 && (u = s.virtual.slides.length + u),
        u >= s.virtual.slides.length && (u -= s.virtual.slides.length),
        (a = l(`[data-swiper-slide-index="${u}"]`));
    } else a = l(`[data-swiper-slide-index="${r}"]`);
  else
    o
      ? ((a = t.filter((u) => u.column === r)[0]),
        (c = t.filter((u) => u.column === r + 1)[0]),
        (d = t.filter((u) => u.column === r - 1)[0]))
      : (a = t[r]);
  a &&
    (o ||
      ((c = Re(a, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !c && (c = t[0]),
      (d = Ve(a, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !d === 0 && (d = t[t.length - 1]))),
    t.forEach((u) => {
      se(u, u === a, i.slideActiveClass),
        se(u, u === c, i.slideNextClass),
        se(u, u === d, i.slidePrevClass);
    }),
    s.emitSlidesClasses();
}
const J = (s, t) => {
    if (!s || s.destroyed || !s.params) return;
    const i = () => (s.isElement ? "swiper-slide" : `.${s.params.slideClass}`),
      e = t.closest(i());
    if (e) {
      let r = e.querySelector(`.${s.params.lazyPreloaderClass}`);
      !r &&
        s.isElement &&
        (e.shadowRoot
          ? (r = e.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              e.shadowRoot &&
                ((r = e.shadowRoot.querySelector(
                  `.${s.params.lazyPreloaderClass}`
                )),
                r && r.remove());
            })),
        r && r.remove();
    }
  },
  re = (s, t) => {
    if (!s.slides[t]) return;
    const i = s.slides[t].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading");
  },
  ue = (s) => {
    if (!s || s.destroyed || !s.params) return;
    let t = s.params.lazyPreloadPrevNext;
    const i = s.slides.length;
    if (!i || !t || t < 0) return;
    t = Math.min(t, i);
    const e =
        s.params.slidesPerView === "auto"
          ? s.slidesPerViewDynamic()
          : Math.ceil(s.params.slidesPerView),
      r = s.activeIndex;
    if (s.params.grid && s.params.grid.rows > 1) {
      const o = r,
        l = [o - t];
      l.push(...Array.from({ length: t }).map((a, d) => o + e + d)),
        s.slides.forEach((a, d) => {
          l.includes(a.column) && re(s, d);
        });
      return;
    }
    const n = r + e - 1;
    if (s.params.rewind || s.params.loop)
      for (let o = r - t; o <= n + t; o += 1) {
        const l = ((o % i) + i) % i;
        (l < r || l > n) && re(s, l);
      }
    else
      for (let o = Math.max(r - t, 0); o <= Math.min(n + t, i - 1); o += 1)
        o !== r && (o > n || o < r) && re(s, o);
  };
function tt(s) {
  const { slidesGrid: t, params: i } = s,
    e = s.rtlTranslate ? s.translate : -s.translate;
  let r;
  for (let n = 0; n < t.length; n += 1)
    typeof t[n + 1] < "u"
      ? e >= t[n] && e < t[n + 1] - (t[n + 1] - t[n]) / 2
        ? (r = n)
        : e >= t[n] && e < t[n + 1] && (r = n + 1)
      : e >= t[n] && (r = n);
  return i.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function it(s) {
  const t = this,
    i = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: e, params: r, activeIndex: n, realIndex: o, snapIndex: l } = t;
  let a = s,
    d;
  const c = (p) => {
    let m = p - t.virtual.slidesBefore;
    return (
      m < 0 && (m = t.virtual.slides.length + m),
      m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
      m
    );
  };
  if ((typeof a > "u" && (a = tt(t)), e.indexOf(i) >= 0)) d = e.indexOf(i);
  else {
    const p = Math.min(r.slidesPerGroupSkip, a);
    d = p + Math.floor((a - p) / r.slidesPerGroup);
  }
  if ((d >= e.length && (d = e.length - 1), a === n && !t.params.loop)) {
    d !== l && ((t.snapIndex = d), t.emit("snapIndexChange"));
    return;
  }
  if (a === n && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = c(a);
    return;
  }
  const u = t.grid && r.grid && r.grid.rows > 1;
  let f;
  if (t.virtual && r.virtual.enabled && r.loop) f = c(a);
  else if (u) {
    const p = t.slides.filter((v) => v.column === a)[0];
    let m = parseInt(p.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(m) && (m = Math.max(t.slides.indexOf(p), 0)),
      (f = Math.floor(m / r.grid.rows));
  } else if (t.slides[a]) {
    const p = t.slides[a].getAttribute("data-swiper-slide-index");
    p ? (f = parseInt(p, 10)) : (f = a);
  } else f = a;
  Object.assign(t, {
    previousSnapIndex: l,
    snapIndex: d,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: n,
    activeIndex: a,
  }),
    t.initialized && ue(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== f && t.emit("realIndexChange"), t.emit("slideChange"));
}
function st(s, t) {
  const i = this,
    e = i.params;
  let r = s.closest(`.${e.slideClass}, swiper-slide`);
  !r &&
    i.isElement &&
    t &&
    t.length > 1 &&
    t.includes(s) &&
    [...t.slice(t.indexOf(s) + 1, t.length)].forEach((l) => {
      !r && l.matches && l.matches(`.${e.slideClass}, swiper-slide`) && (r = l);
    });
  let n = !1,
    o;
  if (r) {
    for (let l = 0; l < i.slides.length; l += 1)
      if (i.slides[l] === r) {
        (n = !0), (o = l);
        break;
      }
  }
  if (r && n)
    (i.clickedSlide = r),
      i.virtual && i.params.virtual.enabled
        ? (i.clickedIndex = parseInt(
            r.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (i.clickedIndex = o);
  else {
    (i.clickedSlide = void 0), (i.clickedIndex = void 0);
    return;
  }
  e.slideToClickedSlide &&
    i.clickedIndex !== void 0 &&
    i.clickedIndex !== i.activeIndex &&
    i.slideToClickedSlide();
}
var rt = {
  updateSize: Ye,
  updateSlides: Je,
  updateAutoHeight: Ue,
  updateSlidesOffset: Ke,
  updateSlidesProgress: Qe,
  updateProgress: Ze,
  updateSlidesClasses: et,
  updateActiveIndex: it,
  updateClickedSlide: st,
};
function nt(s) {
  s === void 0 && (s = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: i, rtlTranslate: e, translate: r, wrapperEl: n } = t;
  if (i.virtualTranslate) return e ? -r : r;
  if (i.cssMode) return r;
  let o = De(n, s);
  return (o += t.cssOverflowAdjustment()), e && (o = -o), o || 0;
}
function at(s, t) {
  const i = this,
    { rtlTranslate: e, params: r, wrapperEl: n, progress: o } = i;
  let l = 0,
    a = 0;
  const d = 0;
  i.isHorizontal() ? (l = e ? -s : s) : (a = s),
    r.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? l : a),
    r.cssMode
      ? (n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -l
          : -a)
      : r.virtualTranslate ||
        (i.isHorizontal()
          ? (l -= i.cssOverflowAdjustment())
          : (a -= i.cssOverflowAdjustment()),
        (n.style.transform = `translate3d(${l}px, ${a}px, ${d}px)`));
  let c;
  const u = i.maxTranslate() - i.minTranslate();
  u === 0 ? (c = 0) : (c = (s - i.minTranslate()) / u),
    c !== o && i.updateProgress(s),
    i.emit("setTranslate", i.translate, t);
}
function ot() {
  return -this.snapGrid[0];
}
function lt() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function dt(s, t, i, e, r) {
  s === void 0 && (s = 0),
    t === void 0 && (t = this.params.speed),
    i === void 0 && (i = !0),
    e === void 0 && (e = !0);
  const n = this,
    { params: o, wrapperEl: l } = n;
  if (n.animating && o.preventInteractionOnTransition) return !1;
  const a = n.minTranslate(),
    d = n.maxTranslate();
  let c;
  if (
    (e && s > a ? (c = a) : e && s < d ? (c = d) : (c = s),
    n.updateProgress(c),
    o.cssMode)
  ) {
    const u = n.isHorizontal();
    if (t === 0) l[u ? "scrollLeft" : "scrollTop"] = -c;
    else {
      if (!n.support.smoothScroll)
        return (
          Me({ swiper: n, targetPosition: -c, side: u ? "left" : "top" }), !0
        );
      l.scrollTo({ [u ? "left" : "top"]: -c, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (n.setTransition(0),
        n.setTranslate(c),
        i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionEnd")))
      : (n.setTransition(t),
        n.setTranslate(c),
        i && (n.emit("beforeTransitionStart", t, r), n.emit("transitionStart")),
        n.animating ||
          ((n.animating = !0),
          n.onTranslateToWrapperTransitionEnd ||
            (n.onTranslateToWrapperTransitionEnd = function (f) {
              !n ||
                n.destroyed ||
                (f.target === this &&
                  (n.wrapperEl.removeEventListener(
                    "transitionend",
                    n.onTranslateToWrapperTransitionEnd
                  ),
                  (n.onTranslateToWrapperTransitionEnd = null),
                  delete n.onTranslateToWrapperTransitionEnd,
                  (n.animating = !1),
                  i && n.emit("transitionEnd")));
            }),
          n.wrapperEl.addEventListener(
            "transitionend",
            n.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var ct = {
  getTranslate: nt,
  setTranslate: at,
  minTranslate: ot,
  maxTranslate: lt,
  translateTo: dt,
};
function ut(s, t) {
  const i = this;
  i.params.cssMode ||
    ((i.wrapperEl.style.transitionDuration = `${s}ms`),
    (i.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : "")),
    i.emit("setTransition", s, t);
}
function Ie(s) {
  let { swiper: t, runCallbacks: i, direction: e, step: r } = s;
  const { activeIndex: n, previousIndex: o } = t;
  let l = e;
  if (
    (l || (n > o ? (l = "next") : n < o ? (l = "prev") : (l = "reset")),
    t.emit(`transition${r}`),
    i && n !== o)
  ) {
    if (l === "reset") {
      t.emit(`slideResetTransition${r}`);
      return;
    }
    t.emit(`slideChangeTransition${r}`),
      l === "next"
        ? t.emit(`slideNextTransition${r}`)
        : t.emit(`slidePrevTransition${r}`);
  }
}
function ft(s, t) {
  s === void 0 && (s = !0);
  const i = this,
    { params: e } = i;
  e.cssMode ||
    (e.autoHeight && i.updateAutoHeight(),
    Ie({ swiper: i, runCallbacks: s, direction: t, step: "Start" }));
}
function pt(s, t) {
  s === void 0 && (s = !0);
  const i = this,
    { params: e } = i;
  (i.animating = !1),
    !e.cssMode &&
      (i.setTransition(0),
      Ie({ swiper: i, runCallbacks: s, direction: t, step: "End" }));
}
var mt = { setTransition: ut, transitionStart: ft, transitionEnd: pt };
function vt(s, t, i, e, r) {
  s === void 0 && (s = 0),
    i === void 0 && (i = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const n = this;
  let o = s;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: d,
    previousIndex: c,
    activeIndex: u,
    rtlTranslate: f,
    wrapperEl: p,
    enabled: m,
  } = n;
  if (
    (!m && !e && !r) ||
    n.destroyed ||
    (n.animating && l.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = n.params.speed);
  const v = Math.min(n.params.slidesPerGroupSkip, o);
  let b = v + Math.floor((o - v) / n.params.slidesPerGroup);
  b >= a.length && (b = a.length - 1);
  const h = -a[b];
  if (l.normalizeSlideIndex)
    for (let w = 0; w < d.length; w += 1) {
      const E = -Math.floor(h * 100),
        k = Math.floor(d[w] * 100),
        _ = Math.floor(d[w + 1] * 100);
      typeof d[w + 1] < "u"
        ? E >= k && E < _ - (_ - k) / 2
          ? (o = w)
          : E >= k && E < _ && (o = w + 1)
        : E >= k && (o = w);
    }
  if (
    n.initialized &&
    o !== u &&
    ((!n.allowSlideNext &&
      (f
        ? h > n.translate && h > n.minTranslate()
        : h < n.translate && h < n.minTranslate())) ||
      (!n.allowSlidePrev &&
        h > n.translate &&
        h > n.maxTranslate() &&
        (u || 0) !== o))
  )
    return !1;
  o !== (c || 0) && i && n.emit("beforeSlideChangeStart"), n.updateProgress(h);
  let S;
  o > u ? (S = "next") : o < u ? (S = "prev") : (S = "reset");
  const g = n.virtual && n.params.virtual.enabled;
  if (!(g && r) && ((f && -h === n.translate) || (!f && h === n.translate)))
    return (
      n.updateActiveIndex(o),
      l.autoHeight && n.updateAutoHeight(),
      n.updateSlidesClasses(),
      l.effect !== "slide" && n.setTranslate(h),
      S !== "reset" && (n.transitionStart(i, S), n.transitionEnd(i, S)),
      !1
    );
  if (l.cssMode) {
    const w = n.isHorizontal(),
      E = f ? h : -h;
    if (t === 0)
      g &&
        ((n.wrapperEl.style.scrollSnapType = "none"),
        (n._immediateVirtual = !0)),
        g && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0
          ? ((n._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              p[w ? "scrollLeft" : "scrollTop"] = E;
            }))
          : (p[w ? "scrollLeft" : "scrollTop"] = E),
        g &&
          requestAnimationFrame(() => {
            (n.wrapperEl.style.scrollSnapType = ""), (n._immediateVirtual = !1);
          });
    else {
      if (!n.support.smoothScroll)
        return (
          Me({ swiper: n, targetPosition: E, side: w ? "left" : "top" }), !0
        );
      p.scrollTo({ [w ? "left" : "top"]: E, behavior: "smooth" });
    }
    return !0;
  }
  return (
    n.setTransition(t),
    n.setTranslate(h),
    n.updateActiveIndex(o),
    n.updateSlidesClasses(),
    n.emit("beforeTransitionStart", t, e),
    n.transitionStart(i, S),
    t === 0
      ? n.transitionEnd(i, S)
      : n.animating ||
        ((n.animating = !0),
        n.onSlideToWrapperTransitionEnd ||
          (n.onSlideToWrapperTransitionEnd = function (E) {
            !n ||
              n.destroyed ||
              (E.target === this &&
                (n.wrapperEl.removeEventListener(
                  "transitionend",
                  n.onSlideToWrapperTransitionEnd
                ),
                (n.onSlideToWrapperTransitionEnd = null),
                delete n.onSlideToWrapperTransitionEnd,
                n.transitionEnd(i, S)));
          }),
        n.wrapperEl.addEventListener(
          "transitionend",
          n.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function ht(s, t, i, e) {
  s === void 0 && (s = 0),
    i === void 0 && (i = !0),
    typeof s == "string" && (s = parseInt(s, 10));
  const r = this;
  if (r.destroyed) return;
  typeof t > "u" && (t = r.params.speed);
  const n = r.grid && r.params.grid && r.params.grid.rows > 1;
  let o = s;
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled) o = o + r.virtual.slidesBefore;
    else {
      let l;
      if (n) {
        const f = o * r.params.grid.rows;
        l = r.slides.filter(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else l = r.getSlideIndexByData(o);
      const a = n
          ? Math.ceil(r.slides.length / r.params.grid.rows)
          : r.slides.length,
        { centeredSlides: d } = r.params;
      let c = r.params.slidesPerView;
      c === "auto"
        ? (c = r.slidesPerViewDynamic())
        : ((c = Math.ceil(parseFloat(r.params.slidesPerView, 10))),
          d && c % 2 === 0 && (c = c + 1));
      let u = a - l < c;
      if (
        (d && (u = u || l < Math.ceil(c / 2)),
        e && d && r.params.slidesPerView !== "auto" && !n && (u = !1),
        u)
      ) {
        const f = d
          ? l < r.activeIndex
            ? "prev"
            : "next"
          : l - r.activeIndex - 1 < r.params.slidesPerView
          ? "next"
          : "prev";
        r.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? l + 1 : l - a + 1,
          slideRealIndex: f === "next" ? r.realIndex : void 0,
        });
      }
      if (n) {
        const f = o * r.params.grid.rows;
        o = r.slides.filter(
          (p) => p.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else o = r.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      r.slideTo(o, t, i, e);
    }),
    r
  );
}
function gt(s, t, i) {
  t === void 0 && (t = !0);
  const e = this,
    { enabled: r, params: n, animating: o } = e;
  if (!r || e.destroyed) return e;
  typeof s > "u" && (s = e.params.speed);
  let l = n.slidesPerGroup;
  n.slidesPerView === "auto" &&
    n.slidesPerGroup === 1 &&
    n.slidesPerGroupAuto &&
    (l = Math.max(e.slidesPerViewDynamic("current", !0), 1));
  const a = e.activeIndex < n.slidesPerGroupSkip ? 1 : l,
    d = e.virtual && n.virtual.enabled;
  if (n.loop) {
    if (o && !d && n.loopPreventsSliding) return !1;
    if (
      (e.loopFix({ direction: "next" }),
      (e._clientLeft = e.wrapperEl.clientLeft),
      e.activeIndex === e.slides.length - 1 && n.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          e.slideTo(e.activeIndex + a, s, t, i);
        }),
        !0
      );
  }
  return n.rewind && e.isEnd
    ? e.slideTo(0, s, t, i)
    : e.slideTo(e.activeIndex + a, s, t, i);
}
function yt(s, t, i) {
  t === void 0 && (t = !0);
  const e = this,
    {
      params: r,
      snapGrid: n,
      slidesGrid: o,
      rtlTranslate: l,
      enabled: a,
      animating: d,
    } = e;
  if (!a || e.destroyed) return e;
  typeof s > "u" && (s = e.params.speed);
  const c = e.virtual && r.virtual.enabled;
  if (r.loop) {
    if (d && !c && r.loopPreventsSliding) return !1;
    e.loopFix({ direction: "prev" }), (e._clientLeft = e.wrapperEl.clientLeft);
  }
  const u = l ? e.translate : -e.translate;
  function f(h) {
    return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h);
  }
  const p = f(u),
    m = n.map((h) => f(h));
  let v = n[m.indexOf(p) - 1];
  if (typeof v > "u" && r.cssMode) {
    let h;
    n.forEach((S, g) => {
      p >= S && (h = g);
    }),
      typeof h < "u" && (v = n[h > 0 ? h - 1 : h]);
  }
  let b = 0;
  if (
    (typeof v < "u" &&
      ((b = o.indexOf(v)),
      b < 0 && (b = e.activeIndex - 1),
      r.slidesPerView === "auto" &&
        r.slidesPerGroup === 1 &&
        r.slidesPerGroupAuto &&
        ((b = b - e.slidesPerViewDynamic("previous", !0) + 1),
        (b = Math.max(b, 0)))),
    r.rewind && e.isBeginning)
  ) {
    const h =
      e.params.virtual && e.params.virtual.enabled && e.virtual
        ? e.virtual.slides.length - 1
        : e.slides.length - 1;
    return e.slideTo(h, s, t, i);
  } else if (r.loop && e.activeIndex === 0 && r.cssMode)
    return (
      requestAnimationFrame(() => {
        e.slideTo(b, s, t, i);
      }),
      !0
    );
  return e.slideTo(b, s, t, i);
}
function wt(s, t, i) {
  t === void 0 && (t = !0);
  const e = this;
  if (!e.destroyed)
    return (
      typeof s > "u" && (s = e.params.speed), e.slideTo(e.activeIndex, s, t, i)
    );
}
function bt(s, t, i, e) {
  t === void 0 && (t = !0), e === void 0 && (e = 0.5);
  const r = this;
  if (r.destroyed) return;
  typeof s > "u" && (s = r.params.speed);
  let n = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, n),
    l = o + Math.floor((n - o) / r.params.slidesPerGroup),
    a = r.rtlTranslate ? r.translate : -r.translate;
  if (a >= r.snapGrid[l]) {
    const d = r.snapGrid[l],
      c = r.snapGrid[l + 1];
    a - d > (c - d) * e && (n += r.params.slidesPerGroup);
  } else {
    const d = r.snapGrid[l - 1],
      c = r.snapGrid[l];
    a - d <= (c - d) * e && (n -= r.params.slidesPerGroup);
  }
  return (
    (n = Math.max(n, 0)),
    (n = Math.min(n, r.slidesGrid.length - 1)),
    r.slideTo(n, s, t, i)
  );
}
function xt() {
  const s = this;
  if (s.destroyed) return;
  const { params: t, slidesEl: i } = s,
    e = t.slidesPerView === "auto" ? s.slidesPerViewDynamic() : t.slidesPerView;
  let r = s.clickedIndex,
    n;
  const o = s.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (s.animating) return;
    (n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? r < s.loopedSlides - e / 2 ||
          r > s.slides.length - s.loopedSlides + e / 2
          ? (s.loopFix(),
            (r = s.getSlideIndex(
              B(i, `${o}[data-swiper-slide-index="${n}"]`)[0]
            )),
            de(() => {
              s.slideTo(r);
            }))
          : s.slideTo(r)
        : r > s.slides.length - e
        ? (s.loopFix(),
          (r = s.getSlideIndex(
            B(i, `${o}[data-swiper-slide-index="${n}"]`)[0]
          )),
          de(() => {
            s.slideTo(r);
          }))
        : s.slideTo(r);
  } else s.slideTo(r);
}
var St = {
  slideTo: vt,
  slideToLoop: ht,
  slideNext: gt,
  slidePrev: yt,
  slideReset: wt,
  slideToClosest: bt,
  slideToClickedSlide: xt,
};
function Tt(s) {
  const t = this,
    { params: i, slidesEl: e } = t;
  if (!i.loop || (t.virtual && t.params.virtual.enabled)) return;
  const r = () => {
      B(e, `.${i.slideClass}, swiper-slide`).forEach((u, f) => {
        u.setAttribute("data-swiper-slide-index", f);
      });
    },
    n = t.grid && i.grid && i.grid.rows > 1,
    o = i.slidesPerGroup * (n ? i.grid.rows : 1),
    l = t.slides.length % o !== 0,
    a = n && t.slides.length % i.grid.rows !== 0,
    d = (c) => {
      for (let u = 0; u < c; u += 1) {
        const f = t.isElement
          ? ce("swiper-slide", [i.slideBlankClass])
          : ce("div", [i.slideClass, i.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (l) {
    if (i.loopAddBlankSlides) {
      const c = o - (t.slides.length % o);
      d(c), t.recalcSlides(), t.updateSlides();
    } else
      Q(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    r();
  } else if (a) {
    if (i.loopAddBlankSlides) {
      const c = i.grid.rows - (t.slides.length % i.grid.rows);
      d(c), t.recalcSlides(), t.updateSlides();
    } else
      Q(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    r();
  } else r();
  t.loopFix({
    slideRealIndex: s,
    direction: i.centeredSlides ? void 0 : "next",
  });
}
function Et(s) {
  let {
    slideRealIndex: t,
    slideTo: i = !0,
    direction: e,
    setTranslate: r,
    activeSlideIndex: n,
    byController: o,
    byMousewheel: l,
  } = s === void 0 ? {} : s;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
      slides: d,
      allowSlidePrev: c,
      allowSlideNext: u,
      slidesEl: f,
      params: p,
    } = a,
    { centeredSlides: m } = p;
  if (
    ((a.allowSlidePrev = !0),
    (a.allowSlideNext = !0),
    a.virtual && p.virtual.enabled)
  ) {
    i &&
      (!p.centeredSlides && a.snapIndex === 0
        ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
        : p.centeredSlides && a.snapIndex < p.slidesPerView
        ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
        : a.snapIndex === a.snapGrid.length - 1 &&
          a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
      (a.allowSlidePrev = c),
      (a.allowSlideNext = u),
      a.emit("loopFix");
    return;
  }
  let v = p.slidesPerView;
  v === "auto"
    ? (v = a.slidesPerViewDynamic())
    : ((v = Math.ceil(parseFloat(p.slidesPerView, 10))),
      m && v % 2 === 0 && (v = v + 1));
  const b = p.slidesPerGroupAuto ? v : p.slidesPerGroup;
  let h = b;
  h % b !== 0 && (h += b - (h % b)),
    (h += p.loopAdditionalSlides),
    (a.loopedSlides = h);
  const S = a.grid && p.grid && p.grid.rows > 1;
  d.length < v + h
    ? Q(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : S &&
      p.grid.fill === "row" &&
      Q(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const g = [],
    x = [];
  let w = a.activeIndex;
  typeof n > "u"
    ? (n = a.getSlideIndex(
        d.filter((T) => T.classList.contains(p.slideActiveClass))[0]
      ))
    : (w = n);
  const E = e === "next" || !e,
    k = e === "prev" || !e;
  let _ = 0,
    A = 0;
  const y = S ? Math.ceil(d.length / p.grid.rows) : d.length,
    P = (S ? d[n].column : n) + (m && typeof r > "u" ? -v / 2 + 0.5 : 0);
  if (P < h) {
    _ = Math.max(h - P, b);
    for (let T = 0; T < h - P; T += 1) {
      const L = T - Math.floor(T / y) * y;
      if (S) {
        const C = y - L - 1;
        for (let V = d.length - 1; V >= 0; V -= 1)
          d[V].column === C && g.push(V);
      } else g.push(y - L - 1);
    }
  } else if (P + v > y - h) {
    A = Math.max(P - (y - h * 2), b);
    for (let T = 0; T < A; T += 1) {
      const L = T - Math.floor(T / y) * y;
      S
        ? d.forEach((C, V) => {
            C.column === L && x.push(V);
          })
        : x.push(L);
    }
  }
  if (
    ((a.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      a.__preventObserver__ = !1;
    }),
    k &&
      g.forEach((T) => {
        (d[T].swiperLoopMoveDOM = !0),
          f.prepend(d[T]),
          (d[T].swiperLoopMoveDOM = !1);
      }),
    E &&
      x.forEach((T) => {
        (d[T].swiperLoopMoveDOM = !0),
          f.append(d[T]),
          (d[T].swiperLoopMoveDOM = !1);
      }),
    a.recalcSlides(),
    p.slidesPerView === "auto"
      ? a.updateSlides()
      : S &&
        ((g.length > 0 && k) || (x.length > 0 && E)) &&
        a.slides.forEach((T, L) => {
          a.grid.updateSlide(L, T, a.slides);
        }),
    p.watchSlidesProgress && a.updateSlidesOffset(),
    i)
  ) {
    if (g.length > 0 && k) {
      if (typeof t > "u") {
        const T = a.slidesGrid[w],
          C = a.slidesGrid[w + _] - T;
        l
          ? a.setTranslate(a.translate - C)
          : (a.slideTo(w + Math.ceil(_), 0, !1, !0),
            r &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - C),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - C)));
      } else if (r) {
        const T = S ? g.length / p.grid.rows : g.length;
        a.slideTo(a.activeIndex + T, 0, !1, !0),
          (a.touchEventsData.currentTranslate = a.translate);
      }
    } else if (x.length > 0 && E)
      if (typeof t > "u") {
        const T = a.slidesGrid[w],
          C = a.slidesGrid[w - A] - T;
        l
          ? a.setTranslate(a.translate - C)
          : (a.slideTo(w - A, 0, !1, !0),
            r &&
              ((a.touchEventsData.startTranslate =
                a.touchEventsData.startTranslate - C),
              (a.touchEventsData.currentTranslate =
                a.touchEventsData.currentTranslate - C)));
      } else {
        const T = S ? x.length / p.grid.rows : x.length;
        a.slideTo(a.activeIndex - T, 0, !1, !0);
      }
  }
  if (
    ((a.allowSlidePrev = c),
    (a.allowSlideNext = u),
    a.controller && a.controller.control && !o)
  ) {
    const T = {
      slideRealIndex: t,
      direction: e,
      setTranslate: r,
      activeSlideIndex: n,
      byController: !0,
    };
    Array.isArray(a.controller.control)
      ? a.controller.control.forEach((L) => {
          !L.destroyed &&
            L.params.loop &&
            L.loopFix({
              ...T,
              slideTo: L.params.slidesPerView === p.slidesPerView ? i : !1,
            });
        })
      : a.controller.control instanceof a.constructor &&
        a.controller.control.params.loop &&
        a.controller.control.loopFix({
          ...T,
          slideTo:
            a.controller.control.params.slidesPerView === p.slidesPerView
              ? i
              : !1,
        });
  }
  a.emit("loopFix");
}
function Mt() {
  const s = this,
    { params: t, slidesEl: i } = s;
  if (!t.loop || (s.virtual && s.params.virtual.enabled)) return;
  s.recalcSlides();
  const e = [];
  s.slides.forEach((r) => {
    const n =
      typeof r.swiperSlideIndex > "u"
        ? r.getAttribute("data-swiper-slide-index") * 1
        : r.swiperSlideIndex;
    e[n] = r;
  }),
    s.slides.forEach((r) => {
      r.removeAttribute("data-swiper-slide-index");
    }),
    e.forEach((r) => {
      i.append(r);
    }),
    s.recalcSlides(),
    s.slideTo(s.realIndex, 0);
}
var Pt = { loopCreate: Tt, loopFix: Et, loopDestroy: Mt };
function _t(s) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const i = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (i.style.cursor = "move"),
    (i.style.cursor = s ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function It() {
  const s = this;
  (s.params.watchOverflow && s.isLocked) ||
    s.params.cssMode ||
    (s.isElement && (s.__preventObserver__ = !0),
    (s[
      s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    s.isElement &&
      requestAnimationFrame(() => {
        s.__preventObserver__ = !1;
      }));
}
var Lt = { setGrabCursor: _t, unsetGrabCursor: It };
function kt(s, t) {
  t === void 0 && (t = this);
  function i(e) {
    if (!e || e === N() || e === D()) return null;
    e.assignedSlot && (e = e.assignedSlot);
    const r = e.closest(s);
    return !r && !e.getRootNode ? null : r || i(e.getRootNode().host);
  }
  return i(t);
}
function ye(s, t, i) {
  const e = D(),
    { params: r } = s,
    n = r.edgeSwipeDetection,
    o = r.edgeSwipeThreshold;
  return n && (i <= o || i >= e.innerWidth - o)
    ? n === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function Ct(s) {
  const t = this,
    i = N();
  let e = s;
  e.originalEvent && (e = e.originalEvent);
  const r = t.touchEventsData;
  if (e.type === "pointerdown") {
    if (r.pointerId !== null && r.pointerId !== e.pointerId) return;
    r.pointerId = e.pointerId;
  } else
    e.type === "touchstart" &&
      e.targetTouches.length === 1 &&
      (r.touchId = e.targetTouches[0].identifier);
  if (e.type === "touchstart") {
    ye(t, e, e.targetTouches[0].pageX);
    return;
  }
  const { params: n, touches: o, enabled: l } = t;
  if (
    !l ||
    (!n.simulateTouch && e.pointerType === "mouse") ||
    (t.animating && n.preventInteractionOnTransition)
  )
    return;
  !t.animating && n.cssMode && n.loop && t.loopFix();
  let a = e.target;
  if (
    (n.touchEventsTarget === "wrapper" && !Ge(a, t.wrapperEl)) ||
    ("which" in e && e.which === 3) ||
    ("button" in e && e.button > 0) ||
    (r.isTouched && r.isMoved)
  )
    return;
  const d = !!n.noSwipingClass && n.noSwipingClass !== "",
    c = e.composedPath ? e.composedPath() : e.path;
  d && e.target && e.target.shadowRoot && c && (a = c[0]);
  const u = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`,
    f = !!(e.target && e.target.shadowRoot);
  if (n.noSwiping && (f ? kt(u, a) : a.closest(u))) {
    t.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !a.closest(n.swipeHandler)) return;
  (o.currentX = e.pageX), (o.currentY = e.pageY);
  const p = o.currentX,
    m = o.currentY;
  if (!ye(t, e, p)) return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = p),
    (o.startY = m),
    (r.touchStartTime = K()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    n.threshold > 0 && (r.allowThresholdMove = !1);
  let v = !0;
  a.matches(r.focusableElements) &&
    ((v = !1), a.nodeName === "SELECT" && (r.isTouched = !1)),
    i.activeElement &&
      i.activeElement.matches(r.focusableElements) &&
      i.activeElement !== a &&
      (e.pointerType === "mouse" ||
        (e.pointerType !== "mouse" && !a.matches(r.focusableElements))) &&
      i.activeElement.blur();
  const b = v && t.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || b) &&
    !a.isContentEditable &&
    e.preventDefault(),
    n.freeMode &&
      n.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !n.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", e);
}
function zt(s) {
  const t = N(),
    i = this,
    e = i.touchEventsData,
    { params: r, touches: n, rtlTranslate: o, enabled: l } = i;
  if (!l || (!r.simulateTouch && s.pointerType === "mouse")) return;
  let a = s;
  if (
    (a.originalEvent && (a = a.originalEvent),
    a.type === "pointermove" &&
      (e.touchId !== null || a.pointerId !== e.pointerId))
  )
    return;
  let d;
  if (a.type === "touchmove") {
    if (
      ((d = [...a.changedTouches].filter((E) => E.identifier === e.touchId)[0]),
      !d || d.identifier !== e.touchId)
    )
      return;
  } else d = a;
  if (!e.isTouched) {
    e.startMoving && e.isScrolling && i.emit("touchMoveOpposite", a);
    return;
  }
  const c = d.pageX,
    u = d.pageY;
  if (a.preventedByNestedSwiper) {
    (n.startX = c), (n.startY = u);
    return;
  }
  if (!i.allowTouchMove) {
    a.target.matches(e.focusableElements) || (i.allowClick = !1),
      e.isTouched &&
        (Object.assign(n, { startX: c, startY: u, currentX: c, currentY: u }),
        (e.touchStartTime = K()));
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (i.isVertical()) {
      if (
        (u < n.startY && i.translate <= i.maxTranslate()) ||
        (u > n.startY && i.translate >= i.minTranslate())
      ) {
        (e.isTouched = !1), (e.isMoved = !1);
        return;
      }
    } else if (
      (c < n.startX && i.translate <= i.maxTranslate()) ||
      (c > n.startX && i.translate >= i.minTranslate())
    )
      return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(e.focusableElements) &&
      t.activeElement !== a.target &&
      a.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      a.target === t.activeElement &&
      a.target.matches(e.focusableElements))
  ) {
    (e.isMoved = !0), (i.allowClick = !1);
    return;
  }
  e.allowTouchCallbacks && i.emit("touchMove", a),
    (n.previousX = n.currentX),
    (n.previousY = n.currentY),
    (n.currentX = c),
    (n.currentY = u);
  const f = n.currentX - n.startX,
    p = n.currentY - n.startY;
  if (i.params.threshold && Math.sqrt(f ** 2 + p ** 2) < i.params.threshold)
    return;
  if (typeof e.isScrolling > "u") {
    let E;
    (i.isHorizontal() && n.currentY === n.startY) ||
    (i.isVertical() && n.currentX === n.startX)
      ? (e.isScrolling = !1)
      : f * f + p * p >= 25 &&
        ((E = (Math.atan2(Math.abs(p), Math.abs(f)) * 180) / Math.PI),
        (e.isScrolling = i.isHorizontal()
          ? E > r.touchAngle
          : 90 - E > r.touchAngle));
  }
  if (
    (e.isScrolling && i.emit("touchMoveOpposite", a),
    typeof e.startMoving > "u" &&
      (n.currentX !== n.startX || n.currentY !== n.startY) &&
      (e.startMoving = !0),
    e.isScrolling ||
      (a.type === "touchmove" && e.preventTouchMoveFromPointerMove))
  ) {
    e.isTouched = !1;
    return;
  }
  if (!e.startMoving) return;
  (i.allowClick = !1),
    !r.cssMode && a.cancelable && a.preventDefault(),
    r.touchMoveStopPropagation && !r.nested && a.stopPropagation();
  let m = i.isHorizontal() ? f : p,
    v = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  r.oneWayMovement &&
    ((m = Math.abs(m) * (o ? 1 : -1)), (v = Math.abs(v) * (o ? 1 : -1))),
    (n.diff = m),
    (m *= r.touchRatio),
    o && ((m = -m), (v = -v));
  const b = i.touchesDirection;
  (i.swipeDirection = m > 0 ? "prev" : "next"),
    (i.touchesDirection = v > 0 ? "prev" : "next");
  const h = i.params.loop && !r.cssMode,
    S =
      (i.touchesDirection === "next" && i.allowSlideNext) ||
      (i.touchesDirection === "prev" && i.allowSlidePrev);
  if (!e.isMoved) {
    if (
      (h && S && i.loopFix({ direction: i.swipeDirection }),
      (e.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating)
    ) {
      const E = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      i.wrapperEl.dispatchEvent(E);
    }
    (e.allowMomentumBounce = !1),
      r.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", a);
  }
  let g;
  if (
    (new Date().getTime(),
    e.isMoved &&
      e.allowThresholdMove &&
      b !== i.touchesDirection &&
      h &&
      S &&
      Math.abs(m) >= 1)
  ) {
    Object.assign(n, {
      startX: c,
      startY: u,
      currentX: c,
      currentY: u,
      startTranslate: e.currentTranslate,
    }),
      (e.loopSwapReset = !0),
      (e.startTranslate = e.currentTranslate);
    return;
  }
  i.emit("sliderMove", a),
    (e.isMoved = !0),
    (e.currentTranslate = m + e.startTranslate);
  let x = !0,
    w = r.resistanceRatio;
  if (
    (r.touchReleaseOnEdges && (w = 0),
    m > 0
      ? (h &&
          S &&
          !g &&
          e.allowThresholdMove &&
          e.currentTranslate >
            (r.centeredSlides
              ? i.minTranslate() -
                i.slidesSizesGrid[i.activeIndex + 1] -
                (r.slidesPerView !== "auto" &&
                i.slides.length - r.slidesPerView >= 2
                  ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween
                  : 0) -
                i.params.spaceBetween
              : i.minTranslate()) &&
          i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        e.currentTranslate > i.minTranslate() &&
          ((x = !1),
          r.resistance &&
            (e.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + e.startTranslate + m) ** w)))
      : m < 0 &&
        (h &&
          S &&
          !g &&
          e.allowThresholdMove &&
          e.currentTranslate <
            (r.centeredSlides
              ? i.maxTranslate() +
                i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                i.params.spaceBetween +
                (r.slidesPerView !== "auto" &&
                i.slides.length - r.slidesPerView >= 2
                  ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                    i.params.spaceBetween
                  : 0)
              : i.maxTranslate()) &&
          i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              i.slides.length -
              (r.slidesPerView === "auto"
                ? i.slidesPerViewDynamic()
                : Math.ceil(parseFloat(r.slidesPerView, 10))),
          }),
        e.currentTranslate < i.maxTranslate() &&
          ((x = !1),
          r.resistance &&
            (e.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - e.startTranslate - m) ** w))),
    x && (a.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === "next" &&
      e.currentTranslate < e.startTranslate &&
      (e.currentTranslate = e.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === "prev" &&
      e.currentTranslate > e.startTranslate &&
      (e.currentTranslate = e.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (e.currentTranslate = e.startTranslate),
    r.threshold > 0)
  )
    if (Math.abs(m) > r.threshold || e.allowThresholdMove) {
      if (!e.allowThresholdMove) {
        (e.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (e.currentTranslate = e.startTranslate),
          (n.diff = i.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY);
        return;
      }
    } else {
      e.currentTranslate = e.startTranslate;
      return;
    }
  !r.followFinger ||
    r.cssMode ||
    (((r.freeMode && r.freeMode.enabled && i.freeMode) ||
      r.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    r.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(e.currentTranslate),
    i.setTranslate(e.currentTranslate));
}
function At(s) {
  const t = this,
    i = t.touchEventsData;
  let e = s;
  e.originalEvent && (e = e.originalEvent);
  let r;
  if (e.type === "touchend" || e.type === "touchcancel") {
    if (
      ((r = [...e.changedTouches].filter((w) => w.identifier === i.touchId)[0]),
      !r || r.identifier !== i.touchId)
    )
      return;
  } else {
    if (i.touchId !== null || e.pointerId !== i.pointerId) return;
    r = e;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      e.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(e.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (i.pointerId = null), (i.touchId = null);
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: d,
    enabled: c,
  } = t;
  if (!c || (!o.simulateTouch && e.pointerType === "mouse")) return;
  if (
    (i.allowTouchCallbacks && t.emit("touchEnd", e),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    i.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1);
    return;
  }
  o.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const u = K(),
    f = u - i.touchStartTime;
  if (t.allowClick) {
    const w = e.path || (e.composedPath && e.composedPath());
    t.updateClickedSlide((w && w[0]) || e.target, w),
      t.emit("tap click", e),
      f < 300 &&
        u - i.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", e);
  }
  if (
    ((i.lastClickTime = K()),
    de(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !t.swipeDirection ||
      (l.diff === 0 && !i.loopSwapReset) ||
      (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
  ) {
    (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
    return;
  }
  (i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1);
  let p;
  if (
    (o.followFinger
      ? (p = a ? t.translate : -t.translate)
      : (p = -i.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: p });
    return;
  }
  const m = p >= -t.maxTranslate() && !t.params.loop;
  let v = 0,
    b = t.slidesSizesGrid[0];
  for (
    let w = 0;
    w < d.length;
    w += w < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const E = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof d[w + E] < "u"
      ? (m || (p >= d[w] && p < d[w + E])) && ((v = w), (b = d[w + E] - d[w]))
      : (m || p >= d[w]) && ((v = w), (b = d[d.length - 1] - d[d.length - 2]));
  }
  let h = null,
    S = null;
  o.rewind &&
    (t.isBeginning
      ? (S =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (h = 0));
  const g = (p - d[v]) / b,
    x = v < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (g >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? h : v + x)
        : t.slideTo(v)),
      t.swipeDirection === "prev" &&
        (g > 1 - o.longSwipesRatio
          ? t.slideTo(v + x)
          : S !== null && g < 0 && Math.abs(g) > o.longSwipesRatio
          ? t.slideTo(S)
          : t.slideTo(v));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (e.target === t.navigation.nextEl || e.target === t.navigation.prevEl)
      ? e.target === t.navigation.nextEl
        ? t.slideTo(v + x)
        : t.slideTo(v)
      : (t.swipeDirection === "next" && t.slideTo(h !== null ? h : v + x),
        t.swipeDirection === "prev" && t.slideTo(S !== null ? S : v));
  }
}
function we() {
  const s = this,
    { params: t, el: i } = s;
  if (i && i.offsetWidth === 0) return;
  t.breakpoints && s.setBreakpoint();
  const { allowSlideNext: e, allowSlidePrev: r, snapGrid: n } = s,
    o = s.virtual && s.params.virtual.enabled;
  (s.allowSlideNext = !0),
    (s.allowSlidePrev = !0),
    s.updateSize(),
    s.updateSlides(),
    s.updateSlidesClasses();
  const l = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  s.isEnd &&
  !s.isBeginning &&
  !s.params.centeredSlides &&
  !l
    ? s.slideTo(s.slides.length - 1, 0, !1, !0)
    : s.params.loop && !o
    ? s.slideToLoop(s.realIndex, 0, !1, !0)
    : s.slideTo(s.activeIndex, 0, !1, !0),
    s.autoplay &&
      s.autoplay.running &&
      s.autoplay.paused &&
      (clearTimeout(s.autoplay.resizeTimeout),
      (s.autoplay.resizeTimeout = setTimeout(() => {
        s.autoplay &&
          s.autoplay.running &&
          s.autoplay.paused &&
          s.autoplay.resume();
      }, 500))),
    (s.allowSlidePrev = r),
    (s.allowSlideNext = e),
    s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow();
}
function Ot(s) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && s.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (s.stopPropagation(), s.stopImmediatePropagation())));
}
function Dt() {
  const s = this,
    { wrapperEl: t, rtlTranslate: i, enabled: e } = s;
  if (!e) return;
  (s.previousTranslate = s.translate),
    s.isHorizontal()
      ? (s.translate = -t.scrollLeft)
      : (s.translate = -t.scrollTop),
    s.translate === 0 && (s.translate = 0),
    s.updateActiveIndex(),
    s.updateSlidesClasses();
  let r;
  const n = s.maxTranslate() - s.minTranslate();
  n === 0 ? (r = 0) : (r = (s.translate - s.minTranslate()) / n),
    r !== s.progress && s.updateProgress(i ? -s.translate : s.translate),
    s.emit("setTranslate", s.translate, !1);
}
function Ft(s) {
  const t = this;
  J(t, s.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function Gt() {
  const s = this;
  s.documentTouchHandlerProceeded ||
    ((s.documentTouchHandlerProceeded = !0),
    s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
}
const Le = (s, t) => {
  const i = N(),
    { params: e, el: r, wrapperEl: n, device: o } = s,
    l = !!e.nested,
    a = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  !r ||
    typeof r == "string" ||
    (i[a]("touchstart", s.onDocumentTouchStart, { passive: !1, capture: l }),
    r[a]("touchstart", s.onTouchStart, { passive: !1 }),
    r[a]("pointerdown", s.onTouchStart, { passive: !1 }),
    i[a]("touchmove", s.onTouchMove, { passive: !1, capture: l }),
    i[a]("pointermove", s.onTouchMove, { passive: !1, capture: l }),
    i[a]("touchend", s.onTouchEnd, { passive: !0 }),
    i[a]("pointerup", s.onTouchEnd, { passive: !0 }),
    i[a]("pointercancel", s.onTouchEnd, { passive: !0 }),
    i[a]("touchcancel", s.onTouchEnd, { passive: !0 }),
    i[a]("pointerout", s.onTouchEnd, { passive: !0 }),
    i[a]("pointerleave", s.onTouchEnd, { passive: !0 }),
    i[a]("contextmenu", s.onTouchEnd, { passive: !0 }),
    (e.preventClicks || e.preventClicksPropagation) &&
      r[a]("click", s.onClick, !0),
    e.cssMode && n[a]("scroll", s.onScroll),
    e.updateOnWindowResize
      ? s[d](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          we,
          !0
        )
      : s[d]("observerUpdate", we, !0),
    r[a]("load", s.onLoad, { capture: !0 }));
};
function Vt() {
  const s = this,
    { params: t } = s;
  (s.onTouchStart = Ct.bind(s)),
    (s.onTouchMove = zt.bind(s)),
    (s.onTouchEnd = At.bind(s)),
    (s.onDocumentTouchStart = Gt.bind(s)),
    t.cssMode && (s.onScroll = Dt.bind(s)),
    (s.onClick = Ot.bind(s)),
    (s.onLoad = Ft.bind(s)),
    Le(s, "on");
}
function Rt() {
  Le(this, "off");
}
var Bt = { attachEvents: Vt, detachEvents: Rt };
const be = (s, t) => s.grid && t.grid && t.grid.rows > 1;
function Nt() {
  const s = this,
    { realIndex: t, initialized: i, params: e, el: r } = s,
    n = e.breakpoints;
  if (!n || (n && Object.keys(n).length === 0)) return;
  const o = s.getBreakpoint(n, s.params.breakpointsBase, s.el);
  if (!o || s.currentBreakpoint === o) return;
  const a = (o in n ? n[o] : void 0) || s.originalParams,
    d = be(s, e),
    c = be(s, a),
    u = s.params.grabCursor,
    f = a.grabCursor,
    p = e.enabled;
  d && !c
    ? (r.classList.remove(
        `${e.containerModifierClass}grid`,
        `${e.containerModifierClass}grid-column`
      ),
      s.emitContainerClasses())
    : !d &&
      c &&
      (r.classList.add(`${e.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === "column") ||
        (!a.grid.fill && e.grid.fill === "column")) &&
        r.classList.add(`${e.containerModifierClass}grid-column`),
      s.emitContainerClasses()),
    u && !f ? s.unsetGrabCursor() : !u && f && s.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((g) => {
      if (typeof a[g] > "u") return;
      const x = e[g] && e[g].enabled,
        w = a[g] && a[g].enabled;
      x && !w && s[g].disable(), !x && w && s[g].enable();
    });
  const m = a.direction && a.direction !== e.direction,
    v = e.loop && (a.slidesPerView !== e.slidesPerView || m),
    b = e.loop;
  m && i && s.changeDirection(), O(s.params, a);
  const h = s.params.enabled,
    S = s.params.loop;
  Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev,
  }),
    p && !h ? s.disable() : !p && h && s.enable(),
    (s.currentBreakpoint = o),
    s.emit("_beforeBreakpoint", a),
    i &&
      (v
        ? (s.loopDestroy(), s.loopCreate(t), s.updateSlides())
        : !b && S
        ? (s.loopCreate(t), s.updateSlides())
        : b && !S && s.loopDestroy()),
    s.emit("breakpoint", a);
}
function qt(s, t, i) {
  if ((t === void 0 && (t = "window"), !s || (t === "container" && !i))) return;
  let e = !1;
  const r = D(),
    n = t === "window" ? r.innerHeight : i.clientHeight,
    o = Object.keys(s).map((l) => {
      if (typeof l == "string" && l.indexOf("@") === 0) {
        const a = parseFloat(l.substr(1));
        return { value: n * a, point: l };
      }
      return { value: l, point: l };
    });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: d } = o[l];
    t === "window"
      ? r.matchMedia(`(min-width: ${d}px)`).matches && (e = a)
      : d <= i.clientWidth && (e = a);
  }
  return e || "max";
}
var Ht = { setBreakpoint: Nt, getBreakpoint: qt };
function $t(s, t) {
  const i = [];
  return (
    s.forEach((e) => {
      typeof e == "object"
        ? Object.keys(e).forEach((r) => {
            e[r] && i.push(t + r);
          })
        : typeof e == "string" && i.push(t + e);
    }),
    i
  );
}
function jt() {
  const s = this,
    { classNames: t, params: i, rtl: e, el: r, device: n } = s,
    o = $t(
      [
        "initialized",
        i.direction,
        { "free-mode": s.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: e },
        { grid: i.grid && i.grid.rows > 1 },
        {
          "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column",
        },
        { android: n.android },
        { ios: n.ios },
        { "css-mode": i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { "watch-progress": i.watchSlidesProgress },
      ],
      i.containerModifierClass
    );
  t.push(...o), r.classList.add(...t), s.emitContainerClasses();
}
function Wt() {
  const s = this,
    { el: t, classNames: i } = s;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...i), s.emitContainerClasses());
}
var Xt = { addClasses: jt, removeClasses: Wt };
function Yt() {
  const s = this,
    { isLocked: t, params: i } = s,
    { slidesOffsetBefore: e } = i;
  if (e) {
    const r = s.slides.length - 1,
      n = s.slidesGrid[r] + s.slidesSizesGrid[r] + e * 2;
    s.isLocked = s.size > n;
  } else s.isLocked = s.snapGrid.length === 1;
  i.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked),
    i.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked),
    t && t !== s.isLocked && (s.isEnd = !1),
    t !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
}
var Jt = { checkOverflow: Yt },
  xe = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
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
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Ut(s, t) {
  return function (e) {
    e === void 0 && (e = {});
    const r = Object.keys(e)[0],
      n = e[r];
    if (typeof n != "object" || n === null) {
      O(t, e);
      return;
    }
    if (
      (s[r] === !0 && (s[r] = { enabled: !0 }),
      r === "navigation" &&
        s[r] &&
        s[r].enabled &&
        !s[r].prevEl &&
        !s[r].nextEl &&
        (s[r].auto = !0),
      ["pagination", "scrollbar"].indexOf(r) >= 0 &&
        s[r] &&
        s[r].enabled &&
        !s[r].el &&
        (s[r].auto = !0),
      !(r in s && "enabled" in n))
    ) {
      O(t, e);
      return;
    }
    typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0),
      s[r] || (s[r] = { enabled: !1 }),
      O(t, e);
  };
}
const ne = {
    eventsEmitter: Xe,
    update: rt,
    translate: ct,
    transition: mt,
    slide: St,
    loop: Pt,
    grabCursor: Lt,
    events: Bt,
    breakpoints: Ht,
    checkOverflow: Jt,
    classes: Xt,
  },
  ae = {};
class G {
  constructor() {
    let t, i;
    for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++)
      r[n] = arguments[n];
    r.length === 1 &&
    r[0].constructor &&
    Object.prototype.toString.call(r[0]).slice(8, -1) === "Object"
      ? (i = r[0])
      : ([t, i] = r),
      i || (i = {}),
      (i = O({}, i)),
      t && !i.el && (i.el = t);
    const o = N();
    if (
      i.el &&
      typeof i.el == "string" &&
      o.querySelectorAll(i.el).length > 1
    ) {
      const c = [];
      return (
        o.querySelectorAll(i.el).forEach((u) => {
          const f = O({}, i, { el: u });
          c.push(new G(f));
        }),
        c
      );
    }
    const l = this;
    (l.__swiper__ = !0),
      (l.support = Pe()),
      (l.device = _e({ userAgent: i.userAgent })),
      (l.browser = $e()),
      (l.eventsListeners = {}),
      (l.eventsAnyListeners = []),
      (l.modules = [...l.__modules__]),
      i.modules && Array.isArray(i.modules) && l.modules.push(...i.modules);
    const a = {};
    l.modules.forEach((c) => {
      c({
        params: i,
        swiper: l,
        extendParams: Ut(i, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l),
      });
    });
    const d = O({}, xe, a);
    return (
      (l.params = O({}, d, ae, i)),
      (l.originalParams = O({}, l.params)),
      (l.passedParams = O({}, i)),
      l.params &&
        l.params.on &&
        Object.keys(l.params.on).forEach((c) => {
          l.on(c, l.params.on[c]);
        }),
      l.params && l.params.onAny && l.onAny(l.params.onAny),
      Object.assign(l, {
        enabled: l.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return l.params.direction === "horizontal";
        },
        isVertical() {
          return l.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: l.params.allowSlideNext,
        allowSlidePrev: l.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: l.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: l.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      l.emit("_swiper"),
      l.params.init && l.init(),
      l
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: i, params: e } = this,
      r = B(i, `.${e.slideClass}, swiper-slide`),
      n = ve(r[0]);
    return ve(t) - n;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (i) => i.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: i, params: e } = t;
    t.slides = B(i, `.${e.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, i) {
    const e = this;
    t = Math.min(Math.max(t, 0), 1);
    const r = e.minTranslate(),
      o = (e.maxTranslate() - r) * t + r;
    e.translateTo(o, typeof i > "u" ? 0 : i),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = t.el.className
      .split(" ")
      .filter(
        (e) =>
          e.indexOf("swiper") === 0 ||
          e.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(t) {
    const i = this;
    return i.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (e) =>
              e.indexOf("swiper-slide") === 0 ||
              e.indexOf(i.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = [];
    t.slides.forEach((e) => {
      const r = t.getSlideClasses(e);
      i.push({ slideEl: e, classNames: r }), t.emit("_slideClass", e, r);
    }),
      t.emit("_slideClasses", i);
  }
  slidesPerViewDynamic(t, i) {
    t === void 0 && (t = "current"), i === void 0 && (i = !1);
    const e = this,
      {
        params: r,
        slides: n,
        slidesGrid: o,
        slidesSizesGrid: l,
        size: a,
        activeIndex: d,
      } = e;
    let c = 1;
    if (typeof r.slidesPerView == "number") return r.slidesPerView;
    if (r.centeredSlides) {
      let u = n[d] ? Math.ceil(n[d].swiperSlideSize) : 0,
        f;
      for (let p = d + 1; p < n.length; p += 1)
        n[p] &&
          !f &&
          ((u += Math.ceil(n[p].swiperSlideSize)), (c += 1), u > a && (f = !0));
      for (let p = d - 1; p >= 0; p -= 1)
        n[p] &&
          !f &&
          ((u += n[p].swiperSlideSize), (c += 1), u > a && (f = !0));
    } else if (t === "current")
      for (let u = d + 1; u < n.length; u += 1)
        (i ? o[u] + l[u] - o[d] < a : o[u] - o[d] < a) && (c += 1);
    else for (let u = d - 1; u >= 0; u -= 1) o[d] - o[u] < a && (c += 1);
    return c;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: i, params: e } = t;
    e.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && J(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function r() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let n;
    if (e.freeMode && e.freeMode.enabled && !e.cssMode)
      r(), e.autoHeight && t.updateAutoHeight();
    else {
      if (
        (e.slidesPerView === "auto" || e.slidesPerView > 1) &&
        t.isEnd &&
        !e.centeredSlides
      ) {
        const o = t.virtual && e.virtual.enabled ? t.virtual.slides : t.slides;
        n = t.slideTo(o.length - 1, 0, !1, !0);
      } else n = t.slideTo(t.activeIndex, 0, !1, !0);
      n || r();
    }
    e.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, i) {
    i === void 0 && (i = !0);
    const e = this,
      r = e.params.direction;
    return (
      t || (t = r === "horizontal" ? "vertical" : "horizontal"),
      t === r ||
        (t !== "horizontal" && t !== "vertical") ||
        (e.el.classList.remove(`${e.params.containerModifierClass}${r}`),
        e.el.classList.add(`${e.params.containerModifierClass}${t}`),
        e.emitContainerClasses(),
        (e.params.direction = t),
        e.slides.forEach((n) => {
          t === "vertical" ? (n.style.width = "") : (n.style.height = "");
        }),
        e.emit("changeDirection"),
        i && e.update()),
      e
    );
  }
  changeLanguageDirection(t) {
    const i = this;
    (i.rtl && t === "rtl") ||
      (!i.rtl && t === "ltr") ||
      ((i.rtl = t === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(t) {
    const i = this;
    if (i.mounted) return !0;
    let e = t || i.params.el;
    if ((typeof e == "string" && (e = document.querySelector(e)), !e))
      return !1;
    (e.swiper = i),
      e.parentNode &&
        e.parentNode.host &&
        e.parentNode.host.nodeName ===
          i.params.swiperElementNodeName.toUpperCase() &&
        (i.isElement = !0);
    const r = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      e && e.shadowRoot && e.shadowRoot.querySelector
        ? e.shadowRoot.querySelector(r())
        : B(e, r())[0];
    return (
      !o &&
        i.params.createElements &&
        ((o = ce("div", i.params.wrapperClass)),
        e.append(o),
        B(e, `.${i.params.slideClass}`).forEach((l) => {
          o.append(l);
        })),
      Object.assign(i, {
        el: e,
        wrapperEl: o,
        slidesEl:
          i.isElement && !e.parentNode.host.slideSlots ? e.parentNode.host : o,
        hostEl: i.isElement ? e.parentNode.host : e,
        mounted: !0,
        rtl: e.dir.toLowerCase() === "rtl" || q(e, "direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (e.dir.toLowerCase() === "rtl" || q(e, "direction") === "rtl"),
        wrongRTL: q(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const i = this;
    if (i.initialized || i.mount(t) === !1) return i;
    i.emit("beforeInit"),
      i.params.breakpoints && i.setBreakpoint(),
      i.addClasses(),
      i.updateSize(),
      i.updateSlides(),
      i.params.watchOverflow && i.checkOverflow(),
      i.params.grabCursor && i.enabled && i.setGrabCursor(),
      i.params.loop && i.virtual && i.params.virtual.enabled
        ? i.slideTo(
            i.params.initialSlide + i.virtual.slidesBefore,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0
          )
        : i.slideTo(
            i.params.initialSlide,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0
          ),
      i.params.loop && i.loopCreate(),
      i.attachEvents();
    const r = [...i.el.querySelectorAll('[loading="lazy"]')];
    return (
      i.isElement && r.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
      r.forEach((n) => {
        n.complete
          ? J(i, n)
          : n.addEventListener("load", (o) => {
              J(i, o.target);
            });
      }),
      ue(i),
      (i.initialized = !0),
      ue(i),
      i.emit("init"),
      i.emit("afterInit"),
      i
    );
  }
  destroy(t, i) {
    t === void 0 && (t = !0), i === void 0 && (i = !0);
    const e = this,
      { params: r, el: n, wrapperEl: o, slides: l } = e;
    return (
      typeof e.params > "u" ||
        e.destroyed ||
        (e.emit("beforeDestroy"),
        (e.initialized = !1),
        e.detachEvents(),
        r.loop && e.loopDestroy(),
        i &&
          (e.removeClasses(),
          n && typeof n != "string" && n.removeAttribute("style"),
          o && o.removeAttribute("style"),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                r.slideVisibleClass,
                r.slideFullyVisibleClass,
                r.slideActiveClass,
                r.slideNextClass,
                r.slidePrevClass
              ),
                a.removeAttribute("style"),
                a.removeAttribute("data-swiper-slide-index");
            })),
        e.emit("destroy"),
        Object.keys(e.eventsListeners).forEach((a) => {
          e.off(a);
        }),
        t !== !1 &&
          (e.el && typeof e.el != "string" && (e.el.swiper = null), Ae(e)),
        (e.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    O(ae, t);
  }
  static get extendedDefaults() {
    return ae;
  }
  static get defaults() {
    return xe;
  }
  static installModule(t) {
    G.prototype.__modules__ || (G.prototype.__modules__ = []);
    const i = G.prototype.__modules__;
    typeof t == "function" && i.indexOf(t) < 0 && i.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((i) => G.installModule(i)), G)
      : (G.installModule(t), G);
  }
}
Object.keys(ne).forEach((s) => {
  Object.keys(ne[s]).forEach((t) => {
    G.prototype[t] = ne[s][t];
  });
});
G.use([je, We]);
function Kt(s) {
  let { swiper: t, extendParams: i, on: e, emit: r, params: n } = s;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    i({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    l,
    a = n && n.autoplay ? n.autoplay.delay : 3e3,
    d = n && n.autoplay ? n.autoplay.delay : 3e3,
    c,
    u = new Date().getTime(),
    f,
    p,
    m,
    v,
    b,
    h,
    S;
  function g(I) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (I.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", g),
        !(S || (I.detail && I.detail.bySwiperTouchMove)) && y()));
  }
  const x = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (f = !0) : f && ((d = c), (f = !1));
      const I = t.autoplay.paused ? c : u + d - new Date().getTime();
      (t.autoplay.timeLeft = I),
        r("autoplayTimeLeft", I, I / a),
        (l = requestAnimationFrame(() => {
          x();
        }));
    },
    w = () => {
      let I;
      return (
        t.virtual && t.params.virtual.enabled
          ? (I = t.slides.filter((z) =>
              z.classList.contains("swiper-slide-active")
            )[0])
          : (I = t.slides[t.activeIndex]),
        I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    E = (I) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(l), x();
      let F = typeof I > "u" ? t.params.autoplay.delay : I;
      (a = t.params.autoplay.delay), (d = t.params.autoplay.delay);
      const z = w();
      !Number.isNaN(z) &&
        z > 0 &&
        typeof I > "u" &&
        ((F = z), (a = z), (d = z)),
        (c = F);
      const H = t.params.speed,
        j = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(H, !0, !0), r("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, H, !0, !0), r("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(H, !0, !0), r("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, H, !0, !0), r("autoplay")),
            t.params.cssMode &&
              ((u = new Date().getTime()),
              requestAnimationFrame(() => {
                E();
              })));
        };
      return (
        F > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              j();
            }, F)))
          : requestAnimationFrame(() => {
              j();
            }),
        F
      );
    },
    k = () => {
      (u = new Date().getTime()),
        (t.autoplay.running = !0),
        E(),
        r("autoplayStart");
    },
    _ = () => {
      (t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(l),
        r("autoplayStop");
    },
    A = (I, F) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(o), I || (h = !0);
      const z = () => {
        r("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", g)
            : y();
      };
      if (((t.autoplay.paused = !0), F)) {
        b && (c = t.params.autoplay.delay), (b = !1), z();
        return;
      }
      (c = (c || t.params.autoplay.delay) - (new Date().getTime() - u)),
        !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), z());
    },
    y = () => {
      (t.isEnd && c < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((u = new Date().getTime()),
        h ? ((h = !1), E(c)) : E(),
        (t.autoplay.paused = !1),
        r("autoplayResume"));
    },
    M = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const I = N();
      I.visibilityState === "hidden" && ((h = !0), A(!0)),
        I.visibilityState === "visible" && y();
    },
    P = (I) => {
      I.pointerType === "mouse" &&
        ((h = !0), (S = !0), !(t.animating || t.autoplay.paused) && A(!0));
    },
    T = (I) => {
      I.pointerType === "mouse" && ((S = !1), t.autoplay.paused && y());
    },
    L = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", P),
        t.el.addEventListener("pointerleave", T));
    },
    C = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", P),
        t.el.removeEventListener("pointerleave", T));
    },
    V = () => {
      N().addEventListener("visibilitychange", M);
    },
    Z = () => {
      N().removeEventListener("visibilitychange", M);
    };
  e("init", () => {
    t.params.autoplay.enabled && (L(), V(), k());
  }),
    e("destroy", () => {
      C(), Z(), t.autoplay.running && _();
    }),
    e("_freeModeStaticRelease", () => {
      (m || h) && y();
    }),
    e("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? _() : A(!0, !0);
    }),
    e("beforeTransitionStart", (I, F, z) => {
      t.destroyed ||
        !t.autoplay.running ||
        (z || !t.params.autoplay.disableOnInteraction ? A(!0, !0) : _());
    }),
    e("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          _();
          return;
        }
        (p = !0),
          (m = !1),
          (h = !1),
          (v = setTimeout(() => {
            (h = !0), (m = !0), A(!0);
          }, 200));
      }
    }),
    e("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !p)) {
        if (
          (clearTimeout(v),
          clearTimeout(o),
          t.params.autoplay.disableOnInteraction)
        ) {
          (m = !1), (p = !1);
          return;
        }
        m && t.params.cssMode && y(), (m = !1), (p = !1);
      }
    }),
    e("slideChange", () => {
      t.destroyed || !t.autoplay.running || (b = !0);
    }),
    Object.assign(t.autoplay, { start: k, stop: _, pause: A, resume: y });
}
const Qt = document.body.querySelector("#play"),
  oe = document.body.querySelector(".bx-pause-circle"),
  Se = new G(".swiper", {
    modules: [Kt],
    direction: "horizontal",
    loop: !0,
    autoplay: { delay: 1500 },
  });
Qt.addEventListener("click", () => {
  oe.classList.toggle("bx-play-circle"),
    oe.classList.toggle("bx-pause-circle"),
    oe.classList.contains("bx-pause-circle")
      ? Se.autoplay.start()
      : Se.autoplay.stop();
});
const fe = document.body.querySelector("#sound"),
  Te = document.body.querySelector(".bx-volume-mute"),
  $ = document.querySelector(".audio");
fe.addEventListener("click", () => {
  Te.classList.toggle("bx-volume-full"),
    Te.classList.toggle("bx-volume-mute"),
    fe.classList.toggle("paused"),
    $.paused ? $.play() : $.pause();
});
window.onfocus = function () {
  fe.classList.contains("paused") ? $.pause() : $.play();
};
window.onblur = function () {
  $.pause();
};
var Zt = function (s, t) {
  var i = document.querySelector("#" + s + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: i, w: i.offsetWidth, h: i.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 100, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var e = this.pJS;
  t && Object.deepExtend(e, t),
    (e.tmp.obj = {
      size_value: e.particles.size.value,
      size_anim_speed: e.particles.size.anim.speed,
      move_speed: e.particles.move.speed,
      line_linked_distance: e.particles.line_linked.distance,
      line_linked_width: e.particles.line_linked.width,
      mode_grab_distance: e.interactivity.modes.grab.distance,
      mode_bubble_distance: e.interactivity.modes.bubble.distance,
      mode_bubble_size: e.interactivity.modes.bubble.size,
      mode_repulse_distance: e.interactivity.modes.repulse.distance,
    }),
    (e.fn.retinaInit = function () {
      e.retina_detect && window.devicePixelRatio > 1
        ? ((e.canvas.pxratio = window.devicePixelRatio), (e.tmp.retina = !0))
        : ((e.canvas.pxratio = 1), (e.tmp.retina = !1)),
        (e.canvas.w = e.canvas.el.offsetWidth * e.canvas.pxratio),
        (e.canvas.h = e.canvas.el.offsetHeight * e.canvas.pxratio),
        (e.particles.size.value = e.tmp.obj.size_value * e.canvas.pxratio),
        (e.particles.size.anim.speed =
          e.tmp.obj.size_anim_speed * e.canvas.pxratio),
        (e.particles.move.speed = e.tmp.obj.move_speed * e.canvas.pxratio),
        (e.particles.line_linked.distance =
          e.tmp.obj.line_linked_distance * e.canvas.pxratio),
        (e.interactivity.modes.grab.distance =
          e.tmp.obj.mode_grab_distance * e.canvas.pxratio),
        (e.interactivity.modes.bubble.distance =
          e.tmp.obj.mode_bubble_distance * e.canvas.pxratio),
        (e.particles.line_linked.width =
          e.tmp.obj.line_linked_width * e.canvas.pxratio),
        (e.interactivity.modes.bubble.size =
          e.tmp.obj.mode_bubble_size * e.canvas.pxratio),
        (e.interactivity.modes.repulse.distance =
          e.tmp.obj.mode_repulse_distance * e.canvas.pxratio);
    }),
    (e.fn.canvasInit = function () {
      e.canvas.ctx = e.canvas.el.getContext("2d");
    }),
    (e.fn.canvasSize = function () {
      (e.canvas.el.width = e.canvas.w),
        (e.canvas.el.height = e.canvas.h),
        e &&
          e.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (e.canvas.w = e.canvas.el.offsetWidth),
              (e.canvas.h = e.canvas.el.offsetHeight),
              e.tmp.retina &&
                ((e.canvas.w *= e.canvas.pxratio),
                (e.canvas.h *= e.canvas.pxratio)),
              (e.canvas.el.width = e.canvas.w),
              (e.canvas.el.height = e.canvas.h),
              e.particles.move.enable ||
                (e.fn.particlesEmpty(),
                e.fn.particlesCreate(),
                e.fn.particlesDraw(),
                e.fn.vendors.densityAutoParticles()),
              e.fn.vendors.densityAutoParticles();
          });
    }),
    (e.fn.canvasPaint = function () {
      e.canvas.ctx.fillRect(0, 0, e.canvas.w, e.canvas.h);
    }),
    (e.fn.canvasClear = function () {
      e.canvas.ctx.clearRect(0, 0, e.canvas.w, e.canvas.h);
    }),
    (e.fn.particle = function (r, n, o) {
      if (
        ((this.radius =
          (e.particles.size.random ? Math.random() : 1) *
          e.particles.size.value),
        e.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = e.particles.size.anim.speed / 100),
          e.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = o ? o.x : Math.random() * e.canvas.w),
        (this.y = o ? o.y : Math.random() * e.canvas.h),
        this.x > e.canvas.w - this.radius * 2
          ? (this.x = this.x - this.radius)
          : this.x < this.radius * 2 && (this.x = this.x + this.radius),
        this.y > e.canvas.h - this.radius * 2
          ? (this.y = this.y - this.radius)
          : this.y < this.radius * 2 && (this.y = this.y + this.radius),
        e.particles.move.bounce && e.fn.vendors.checkOverlap(this, o),
        (this.color = {}),
        typeof r.value == "object")
      )
        if (r.value instanceof Array) {
          var l =
            r.value[Math.floor(Math.random() * e.particles.color.value.length)];
          this.color.rgb = le(l);
        } else
          r.value.r != null &&
            r.value.g != null &&
            r.value.b != null &&
            (this.color.rgb = { r: r.value.r, g: r.value.g, b: r.value.b }),
            r.value.h != null &&
              r.value.s != null &&
              r.value.l != null &&
              (this.color.hsl = { h: r.value.h, s: r.value.s, l: r.value.l });
      else
        r.value == "random"
          ? (this.color.rgb = {
              r: Math.floor(Math.random() * 256) + 0,
              g: Math.floor(Math.random() * 256) + 0,
              b: Math.floor(Math.random() * 256) + 0,
            })
          : typeof r.value == "string" &&
            ((this.color = r), (this.color.rgb = le(this.color.value)));
      (this.opacity =
        (e.particles.opacity.random ? Math.random() : 1) *
        e.particles.opacity.value),
        e.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = e.particles.opacity.anim.speed / 100),
          e.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var a = {};
      switch (e.particles.move.direction) {
        case "top":
          a = { x: 0, y: -1 };
          break;
        case "top-right":
          a = { x: 0.5, y: -0.5 };
          break;
        case "right":
          a = { x: 1, y: -0 };
          break;
        case "bottom-right":
          a = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          a = { x: 0, y: 1 };
          break;
        case "bottom-left":
          a = { x: -0.5, y: 1 };
          break;
        case "left":
          a = { x: -1, y: 0 };
          break;
        case "top-left":
          a = { x: -0.5, y: -0.5 };
          break;
        default:
          a = { x: 0, y: 0 };
          break;
      }
      e.particles.move.straight
        ? ((this.vx = a.x),
          (this.vy = a.y),
          e.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = a.x + Math.random() - 0.5),
          (this.vy = a.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var d = e.particles.shape.type;
      if (typeof d == "object") {
        if (d instanceof Array) {
          var c = d[Math.floor(Math.random() * d.length)];
          this.shape = c;
        }
      } else this.shape = d;
      if (this.shape == "image") {
        var u = e.particles.shape;
        (this.img = {
          src: u.image.src,
          ratio: u.image.width / u.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          e.tmp.img_type == "svg" &&
            e.tmp.source_svg != null &&
            (e.fn.vendors.createSvgImg(this),
            e.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (e.fn.particle.prototype.draw = function () {
      var r = this;
      if (r.radius_bubble != null) var n = r.radius_bubble;
      else var n = r.radius;
      if (r.opacity_bubble != null) var o = r.opacity_bubble;
      else var o = r.opacity;
      if (r.color.rgb)
        var l =
          "rgba(" +
          r.color.rgb.r +
          "," +
          r.color.rgb.g +
          "," +
          r.color.rgb.b +
          "," +
          o +
          ")";
      else
        var l =
          "hsla(" +
          r.color.hsl.h +
          "," +
          r.color.hsl.s +
          "%," +
          r.color.hsl.l +
          "%," +
          o +
          ")";
      switch (
        ((e.canvas.ctx.fillStyle = l), e.canvas.ctx.beginPath(), r.shape)
      ) {
        case "circle":
          e.canvas.ctx.arc(r.x, r.y, n, 0, Math.PI * 2, !1);
          break;
        case "edge":
          e.canvas.ctx.rect(r.x - n, r.y - n, n * 2, n * 2);
          break;
        case "triangle":
          e.fn.vendors.drawShape(
            e.canvas.ctx,
            r.x - n,
            r.y + n / 1.66,
            n * 2,
            3,
            2
          );
          break;
        case "polygon":
          e.fn.vendors.drawShape(
            e.canvas.ctx,
            r.x - n / (e.particles.shape.polygon.nb_sides / 3.5),
            r.y - n / (2.66 / 3.5),
            (n * 2.66) / (e.particles.shape.polygon.nb_sides / 3),
            e.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          e.fn.vendors.drawShape(
            e.canvas.ctx,
            r.x - (n * 2) / (e.particles.shape.polygon.nb_sides / 4),
            r.y - n / ((2 * 2.66) / 3.5),
            (n * 2 * 2.66) / (e.particles.shape.polygon.nb_sides / 3),
            e.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          let c = function () {
            e.canvas.ctx.drawImage(
              a,
              r.x - n,
              r.y - n,
              n * 2,
              (n * 2) / r.img.ratio
            );
          };
          var d = c;
          if (e.tmp.img_type == "svg") var a = r.img.obj;
          else var a = e.tmp.img_obj;
          a && c();
          break;
      }
      e.canvas.ctx.closePath(),
        e.particles.shape.stroke.width > 0 &&
          ((e.canvas.ctx.strokeStyle = e.particles.shape.stroke.color),
          (e.canvas.ctx.lineWidth = e.particles.shape.stroke.width),
          e.canvas.ctx.stroke()),
        e.canvas.ctx.fill();
    }),
    (e.fn.particlesCreate = function () {
      for (var r = 0; r < e.particles.number.value; r++)
        e.particles.array.push(
          new e.fn.particle(e.particles.color, e.particles.opacity.value)
        );
    }),
    (e.fn.particlesUpdate = function () {
      for (var r = 0; r < e.particles.array.length; r++) {
        var n = e.particles.array[r];
        if (e.particles.move.enable) {
          var o = e.particles.move.speed / 2;
          (n.x += n.vx * o), (n.y += n.vy * o);
        }
        if (
          (e.particles.opacity.anim.enable &&
            (n.opacity_status == !0
              ? (n.opacity >= e.particles.opacity.value &&
                  (n.opacity_status = !1),
                (n.opacity += n.vo))
              : (n.opacity <= e.particles.opacity.anim.opacity_min &&
                  (n.opacity_status = !0),
                (n.opacity -= n.vo)),
            n.opacity < 0 && (n.opacity = 0)),
          e.particles.size.anim.enable &&
            (n.size_status == !0
              ? (n.radius >= e.particles.size.value && (n.size_status = !1),
                (n.radius += n.vs))
              : (n.radius <= e.particles.size.anim.size_min &&
                  (n.size_status = !0),
                (n.radius -= n.vs)),
            n.radius < 0 && (n.radius = 0)),
          e.particles.move.out_mode == "bounce")
        )
          var l = {
            x_left: n.radius,
            x_right: e.canvas.w,
            y_top: n.radius,
            y_bottom: e.canvas.h,
          };
        else
          var l = {
            x_left: -n.radius,
            x_right: e.canvas.w + n.radius,
            y_top: -n.radius,
            y_bottom: e.canvas.h + n.radius,
          };
        switch (
          (n.x - n.radius > e.canvas.w
            ? ((n.x = l.x_left), (n.y = Math.random() * e.canvas.h))
            : n.x + n.radius < 0 &&
              ((n.x = l.x_right), (n.y = Math.random() * e.canvas.h)),
          n.y - n.radius > e.canvas.h
            ? ((n.y = l.y_top), (n.x = Math.random() * e.canvas.w))
            : n.y + n.radius < 0 &&
              ((n.y = l.y_bottom), (n.x = Math.random() * e.canvas.w)),
          e.particles.move.out_mode)
        ) {
          case "bounce":
            (n.x + n.radius > e.canvas.w || n.x - n.radius < 0) &&
              (n.vx = -n.vx),
              (n.y + n.radius > e.canvas.h || n.y - n.radius < 0) &&
                (n.vy = -n.vy);
            break;
        }
        if (
          (R("grab", e.interactivity.events.onhover.mode) &&
            e.fn.modes.grabParticle(n),
          (R("bubble", e.interactivity.events.onhover.mode) ||
            R("bubble", e.interactivity.events.onclick.mode)) &&
            e.fn.modes.bubbleParticle(n),
          (R("repulse", e.interactivity.events.onhover.mode) ||
            R("repulse", e.interactivity.events.onclick.mode)) &&
            e.fn.modes.repulseParticle(n),
          e.particles.line_linked.enable || e.particles.move.attract.enable)
        )
          for (var a = r + 1; a < e.particles.array.length; a++) {
            var d = e.particles.array[a];
            e.particles.line_linked.enable && e.fn.interact.linkParticles(n, d),
              e.particles.move.attract.enable &&
                e.fn.interact.attractParticles(n, d),
              e.particles.move.bounce && e.fn.interact.bounceParticles(n, d);
          }
      }
    }),
    (e.fn.particlesDraw = function () {
      e.canvas.ctx.clearRect(0, 0, e.canvas.w, e.canvas.h),
        e.fn.particlesUpdate();
      for (var r = 0; r < e.particles.array.length; r++) {
        var n = e.particles.array[r];
        n.draw();
      }
    }),
    (e.fn.particlesEmpty = function () {
      e.particles.array = [];
    }),
    (e.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(e.fn.checkAnimFrame),
        cancelRequestAnimFrame(e.fn.drawAnimFrame),
        (e.tmp.source_svg = void 0),
        (e.tmp.img_obj = void 0),
        (e.tmp.count_svg = 0),
        e.fn.particlesEmpty(),
        e.fn.canvasClear(),
        e.fn.vendors.start();
    }),
    (e.fn.interact.linkParticles = function (r, n) {
      var o = r.x - n.x,
        l = r.y - n.y,
        a = Math.sqrt(o * o + l * l);
      if (a <= e.particles.line_linked.distance) {
        var d =
          e.particles.line_linked.opacity -
          a /
            (1 / e.particles.line_linked.opacity) /
            e.particles.line_linked.distance;
        if (d > 0) {
          var c = e.particles.line_linked.color_rgb_line;
          (e.canvas.ctx.strokeStyle =
            "rgba(" + c.r + "," + c.g + "," + c.b + "," + d + ")"),
            (e.canvas.ctx.lineWidth = e.particles.line_linked.width),
            e.canvas.ctx.beginPath(),
            e.canvas.ctx.moveTo(r.x, r.y),
            e.canvas.ctx.lineTo(n.x, n.y),
            e.canvas.ctx.stroke(),
            e.canvas.ctx.closePath();
        }
      }
    }),
    (e.fn.interact.attractParticles = function (r, n) {
      var o = r.x - n.x,
        l = r.y - n.y,
        a = Math.sqrt(o * o + l * l);
      if (a <= e.particles.line_linked.distance) {
        var d = o / (e.particles.move.attract.rotateX * 1e3),
          c = l / (e.particles.move.attract.rotateY * 1e3);
        (r.vx -= d), (r.vy -= c), (n.vx += d), (n.vy += c);
      }
    }),
    (e.fn.interact.bounceParticles = function (r, n) {
      var o = r.x - n.x,
        l = r.y - n.y,
        a = Math.sqrt(o * o + l * l),
        d = r.radius + n.radius;
      a <= d &&
        ((r.vx = -r.vx), (r.vy = -r.vy), (n.vx = -n.vx), (n.vy = -n.vy));
    }),
    (e.fn.modes.pushParticles = function (r, n) {
      e.tmp.pushing = !0;
      for (var o = 0; o < r; o++)
        e.particles.array.push(
          new e.fn.particle(e.particles.color, e.particles.opacity.value, {
            x: n ? n.pos_x : Math.random() * e.canvas.w,
            y: n ? n.pos_y : Math.random() * e.canvas.h,
          })
        ),
          o == r - 1 &&
            (e.particles.move.enable || e.fn.particlesDraw(),
            (e.tmp.pushing = !1));
    }),
    (e.fn.modes.removeParticles = function (r) {
      e.particles.array.splice(0, r),
        e.particles.move.enable || e.fn.particlesDraw();
    }),
    (e.fn.modes.bubbleParticle = function (r) {
      if (
        e.interactivity.events.onhover.enable &&
        R("bubble", e.interactivity.events.onhover.mode)
      ) {
        let v = function () {
          (r.opacity_bubble = r.opacity), (r.radius_bubble = r.radius);
        };
        var p = v,
          n = r.x - e.interactivity.mouse.pos_x,
          o = r.y - e.interactivity.mouse.pos_y,
          l = Math.sqrt(n * n + o * o),
          a = 1 - l / e.interactivity.modes.bubble.distance;
        if (l <= e.interactivity.modes.bubble.distance) {
          if (a >= 0 && e.interactivity.status == "mousemove") {
            if (e.interactivity.modes.bubble.size != e.particles.size.value)
              if (e.interactivity.modes.bubble.size > e.particles.size.value) {
                var d = r.radius + e.interactivity.modes.bubble.size * a;
                d >= 0 && (r.radius_bubble = d);
              } else {
                var c = r.radius - e.interactivity.modes.bubble.size,
                  d = r.radius - c * a;
                d > 0 ? (r.radius_bubble = d) : (r.radius_bubble = 0);
              }
            if (
              e.interactivity.modes.bubble.opacity != e.particles.opacity.value
            )
              if (
                e.interactivity.modes.bubble.opacity > e.particles.opacity.value
              ) {
                var u = e.interactivity.modes.bubble.opacity * a;
                u > r.opacity &&
                  u <= e.interactivity.modes.bubble.opacity &&
                  (r.opacity_bubble = u);
              } else {
                var u =
                  r.opacity -
                  (e.particles.opacity.value -
                    e.interactivity.modes.bubble.opacity) *
                    a;
                u < r.opacity &&
                  u >= e.interactivity.modes.bubble.opacity &&
                  (r.opacity_bubble = u);
              }
          }
        } else v();
        e.interactivity.status == "mouseleave" && v();
      } else if (
        e.interactivity.events.onclick.enable &&
        R("bubble", e.interactivity.events.onclick.mode)
      ) {
        let v = function (b, h, S, g, x) {
          if (b != h)
            if (e.tmp.bubble_duration_end) {
              if (S != null) {
                var k =
                    g - (f * (g - b)) / e.interactivity.modes.bubble.duration,
                  _ = b - k;
                (E = b + _),
                  x == "size" && (r.radius_bubble = E),
                  x == "opacity" && (r.opacity_bubble = E);
              }
            } else if (l <= e.interactivity.modes.bubble.distance) {
              if (S != null) var w = S;
              else var w = g;
              if (w != b) {
                var E =
                  g - (f * (g - b)) / e.interactivity.modes.bubble.duration;
                x == "size" && (r.radius_bubble = E),
                  x == "opacity" && (r.opacity_bubble = E);
              }
            } else
              x == "size" && (r.radius_bubble = void 0),
                x == "opacity" && (r.opacity_bubble = void 0);
        };
        var m = v;
        if (e.tmp.bubble_clicking) {
          var n = r.x - e.interactivity.mouse.click_pos_x,
            o = r.y - e.interactivity.mouse.click_pos_y,
            l = Math.sqrt(n * n + o * o),
            f = (new Date().getTime() - e.interactivity.mouse.click_time) / 1e3;
          f > e.interactivity.modes.bubble.duration &&
            (e.tmp.bubble_duration_end = !0),
            f > e.interactivity.modes.bubble.duration * 2 &&
              ((e.tmp.bubble_clicking = !1), (e.tmp.bubble_duration_end = !1));
        }
        e.tmp.bubble_clicking &&
          (v(
            e.interactivity.modes.bubble.size,
            e.particles.size.value,
            r.radius_bubble,
            r.radius,
            "size"
          ),
          v(
            e.interactivity.modes.bubble.opacity,
            e.particles.opacity.value,
            r.opacity_bubble,
            r.opacity,
            "opacity"
          ));
      }
    }),
    (e.fn.modes.repulseParticle = function (r) {
      if (
        e.interactivity.events.onhover.enable &&
        R("repulse", e.interactivity.events.onhover.mode) &&
        e.interactivity.status == "mousemove"
      ) {
        var n = r.x - e.interactivity.mouse.pos_x,
          o = r.y - e.interactivity.mouse.pos_y,
          l = Math.sqrt(n * n + o * o),
          a = { x: n / l, y: o / l },
          d = e.interactivity.modes.repulse.distance,
          c = 100,
          u = ei((1 / d) * (-1 * Math.pow(l / d, 2) + 1) * d * c, 0, 50),
          f = { x: r.x + a.x * u, y: r.y + a.y * u };
        e.particles.move.out_mode == "bounce"
          ? (f.x - r.radius > 0 && f.x + r.radius < e.canvas.w && (r.x = f.x),
            f.y - r.radius > 0 && f.y + r.radius < e.canvas.h && (r.y = f.y))
          : ((r.x = f.x), (r.y = f.y));
      } else if (
        e.interactivity.events.onclick.enable &&
        R("repulse", e.interactivity.events.onclick.mode)
      )
        if (
          (e.tmp.repulse_finish ||
            (e.tmp.repulse_count++,
            e.tmp.repulse_count == e.particles.array.length &&
              (e.tmp.repulse_finish = !0)),
          e.tmp.repulse_clicking)
        ) {
          let g = function () {
            var x = Math.atan2(m, p);
            if (
              ((r.vx = b * Math.cos(x)),
              (r.vy = b * Math.sin(x)),
              e.particles.move.out_mode == "bounce")
            ) {
              var w = { x: r.x + r.vx, y: r.y + r.vy };
              (w.x + r.radius > e.canvas.w || w.x - r.radius < 0) &&
                (r.vx = -r.vx),
                (w.y + r.radius > e.canvas.h || w.y - r.radius < 0) &&
                  (r.vy = -r.vy);
            }
          };
          var h = g,
            d = Math.pow(e.interactivity.modes.repulse.distance / 6, 3),
            p = e.interactivity.mouse.click_pos_x - r.x,
            m = e.interactivity.mouse.click_pos_y - r.y,
            v = p * p + m * m,
            b = (-d / v) * 1;
          v <= d && g();
        } else
          e.tmp.repulse_clicking == !1 && ((r.vx = r.vx_i), (r.vy = r.vy_i));
    }),
    (e.fn.modes.grabParticle = function (r) {
      if (
        e.interactivity.events.onhover.enable &&
        e.interactivity.status == "mousemove"
      ) {
        var n = r.x - e.interactivity.mouse.pos_x,
          o = r.y - e.interactivity.mouse.pos_y,
          l = Math.sqrt(n * n + o * o);
        if (l <= e.interactivity.modes.grab.distance) {
          var a =
            e.interactivity.modes.grab.line_linked.opacity -
            l /
              (1 / e.interactivity.modes.grab.line_linked.opacity) /
              e.interactivity.modes.grab.distance;
          if (a > 0) {
            var d = e.particles.line_linked.color_rgb_line;
            (e.canvas.ctx.strokeStyle =
              "rgba(" + d.r + "," + d.g + "," + d.b + "," + a + ")"),
              (e.canvas.ctx.lineWidth = e.particles.line_linked.width),
              e.canvas.ctx.beginPath(),
              e.canvas.ctx.moveTo(r.x, r.y),
              e.canvas.ctx.lineTo(
                e.interactivity.mouse.pos_x,
                e.interactivity.mouse.pos_y
              ),
              e.canvas.ctx.stroke(),
              e.canvas.ctx.closePath();
          }
        }
      }
    }),
    (e.fn.vendors.eventsListeners = function () {
      e.interactivity.detect_on == "window"
        ? (e.interactivity.el = window)
        : (e.interactivity.el = e.canvas.el),
        (e.interactivity.events.onhover.enable ||
          e.interactivity.events.onclick.enable) &&
          (e.interactivity.el.addEventListener("mousemove", function (r) {
            if (e.interactivity.el == window)
              var n = r.clientX,
                o = r.clientY;
            else
              var n = r.offsetX || r.clientX,
                o = r.offsetY || r.clientY;
            (e.interactivity.mouse.pos_x = n),
              (e.interactivity.mouse.pos_y = o),
              e.tmp.retina &&
                ((e.interactivity.mouse.pos_x *= e.canvas.pxratio),
                (e.interactivity.mouse.pos_y *= e.canvas.pxratio)),
              (e.interactivity.status = "mousemove");
          }),
          e.interactivity.el.addEventListener("mouseleave", function (r) {
            (e.interactivity.mouse.pos_x = null),
              (e.interactivity.mouse.pos_y = null),
              (e.interactivity.status = "mouseleave");
          })),
        e.interactivity.events.onclick.enable &&
          e.interactivity.el.addEventListener("click", function () {
            if (
              ((e.interactivity.mouse.click_pos_x =
                e.interactivity.mouse.pos_x),
              (e.interactivity.mouse.click_pos_y = e.interactivity.mouse.pos_y),
              (e.interactivity.mouse.click_time = new Date().getTime()),
              e.interactivity.events.onclick.enable)
            )
              switch (e.interactivity.events.onclick.mode) {
                case "push":
                  e.particles.move.enable ||
                  e.interactivity.modes.push.particles_nb == 1
                    ? e.fn.modes.pushParticles(
                        e.interactivity.modes.push.particles_nb,
                        e.interactivity.mouse
                      )
                    : e.interactivity.modes.push.particles_nb > 1 &&
                      e.fn.modes.pushParticles(
                        e.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  e.fn.modes.removeParticles(
                    e.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  e.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (e.tmp.repulse_clicking = !0),
                    (e.tmp.repulse_count = 0),
                    (e.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      e.tmp.repulse_clicking = !1;
                    }, e.interactivity.modes.repulse.duration * 1e3);
                  break;
              }
          });
    }),
    (e.fn.vendors.densityAutoParticles = function () {
      if (e.particles.number.density.enable) {
        var r = (e.canvas.el.width * e.canvas.el.height) / 1e3;
        e.tmp.retina && (r = r / (e.canvas.pxratio * 2));
        var n =
            (r * e.particles.number.value) /
            e.particles.number.density.value_area,
          o = e.particles.array.length - n;
        o < 0
          ? e.fn.modes.pushParticles(Math.abs(o))
          : e.fn.modes.removeParticles(o);
      }
    }),
    (e.fn.vendors.checkOverlap = function (r, n) {
      for (var o = 0; o < e.particles.array.length; o++) {
        var l = e.particles.array[o],
          a = r.x - l.x,
          d = r.y - l.y,
          c = Math.sqrt(a * a + d * d);
        c <= r.radius + l.radius &&
          ((r.x = n ? n.x : Math.random() * e.canvas.w),
          (r.y = n ? n.y : Math.random() * e.canvas.h),
          e.fn.vendors.checkOverlap(r));
      }
    }),
    (e.fn.vendors.createSvgImg = function (r) {
      var n = e.tmp.source_svg,
        o = /#([0-9A-F]{3,6})/gi,
        l = n.replace(o, function (f, p, m, v) {
          if (r.color.rgb)
            var b =
              "rgba(" +
              r.color.rgb.r +
              "," +
              r.color.rgb.g +
              "," +
              r.color.rgb.b +
              "," +
              r.opacity +
              ")";
          else
            var b =
              "hsla(" +
              r.color.hsl.h +
              "," +
              r.color.hsl.s +
              "%," +
              r.color.hsl.l +
              "%," +
              r.opacity +
              ")";
          return b;
        }),
        a = new Blob([l], { type: "image/svg+xml;charset=utf-8" }),
        d = window.URL || window.webkitURL || window,
        c = d.createObjectURL(a),
        u = new Image();
      u.addEventListener("load", function () {
        (r.img.obj = u),
          (r.img.loaded = !0),
          d.revokeObjectURL(c),
          e.tmp.count_svg++;
      }),
        (u.src = c);
    }),
    (e.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(e.fn.drawAnimFrame), i.remove(), (pJSDom = null);
    }),
    (e.fn.vendors.drawShape = function (r, n, o, l, a, d) {
      var c = a * d,
        u = a / d,
        f = (180 * (u - 2)) / u,
        p = Math.PI - (Math.PI * f) / 180;
      r.save(), r.beginPath(), r.translate(n, o), r.moveTo(0, 0);
      for (var m = 0; m < c; m++)
        r.lineTo(l, 0), r.translate(l, 0), r.rotate(p);
      r.fill(), r.restore();
    }),
    (e.fn.vendors.exportImg = function () {
      window.open(e.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (e.fn.vendors.loadImg = function (r) {
      if (((e.tmp.img_error = void 0), e.particles.shape.image.src != ""))
        if (r == "svg") {
          var n = new XMLHttpRequest();
          n.open("GET", e.particles.shape.image.src),
            (n.onreadystatechange = function (l) {
              n.readyState == 4 &&
                (n.status == 200
                  ? ((e.tmp.source_svg = l.currentTarget.response),
                    e.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (e.tmp.img_error = !0)));
            }),
            n.send();
        } else {
          var o = new Image();
          o.addEventListener("load", function () {
            (e.tmp.img_obj = o), e.fn.vendors.checkBeforeDraw();
          }),
            (o.src = e.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (e.tmp.img_error = !0);
    }),
    (e.fn.vendors.draw = function () {
      e.particles.shape.type == "image"
        ? e.tmp.img_type == "svg"
          ? e.tmp.count_svg >= e.particles.number.value
            ? (e.fn.particlesDraw(),
              e.particles.move.enable
                ? (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
                : cancelRequestAnimFrame(e.fn.drawAnimFrame))
            : e.tmp.img_error ||
              (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
          : e.tmp.img_obj != null
          ? (e.fn.particlesDraw(),
            e.particles.move.enable
              ? (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
              : cancelRequestAnimFrame(e.fn.drawAnimFrame))
          : e.tmp.img_error ||
            (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
        : (e.fn.particlesDraw(),
          e.particles.move.enable
            ? (e.fn.drawAnimFrame = requestAnimFrame(e.fn.vendors.draw))
            : cancelRequestAnimFrame(e.fn.drawAnimFrame));
    }),
    (e.fn.vendors.checkBeforeDraw = function () {
      e.particles.shape.type == "image"
        ? e.tmp.img_type == "svg" && e.tmp.source_svg == null
          ? (e.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(e.tmp.checkAnimFrame),
            e.tmp.img_error || (e.fn.vendors.init(), e.fn.vendors.draw()))
        : (e.fn.vendors.init(), e.fn.vendors.draw());
    }),
    (e.fn.vendors.init = function () {
      e.fn.retinaInit(),
        e.fn.canvasInit(),
        e.fn.canvasSize(),
        e.fn.canvasPaint(),
        e.fn.particlesCreate(),
        e.fn.vendors.densityAutoParticles(),
        (e.particles.line_linked.color_rgb_line = le(
          e.particles.line_linked.color
        ));
    }),
    (e.fn.vendors.start = function () {
      R("image", e.particles.shape.type)
        ? ((e.tmp.img_type = e.particles.shape.image.src.substr(
            e.particles.shape.image.src.length - 3
          )),
          e.fn.vendors.loadImg(e.tmp.img_type))
        : e.fn.vendors.checkBeforeDraw();
    }),
    e.fn.vendors.eventsListeners(),
    e.fn.vendors.start();
};
Object.deepExtend = function s(t, i) {
  for (var e in i)
    i[e] && i[e].constructor && i[e].constructor === Object
      ? ((t[e] = t[e] || {}), s(t[e], i[e]))
      : (t[e] = i[e]);
  return t;
};
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (s) {
      window.setTimeout(s, 1e3 / 60);
    }
  );
})();
window.cancelRequestAnimFrame = (function () {
  return (
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout
  );
})();
function le(s) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  s = s.replace(t, function (e, r, n, o) {
    return r + r + n + n + o + o;
  });
  var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(s);
  return i
    ? { r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16) }
    : null;
}
function ei(s, t, i) {
  return Math.min(Math.max(s, t), i);
}
function R(s, t) {
  return t.indexOf(s) > -1;
}
window.pJSDom = [];
window.particlesJS = function (s, t) {
  typeof s != "string" && ((t = s), (s = "particles-js")),
    s || (s = "particles-js");
  var i = document.getElementById(s),
    e = "particles-js-canvas-el",
    r = i.getElementsByClassName(e);
  if (r.length) for (; r.length > 0; ) i.removeChild(r[0]);
  var n = document.createElement("canvas");
  (n.className = e), (n.style.width = "100%"), (n.style.height = "100%");
  var o = document.getElementById(s).appendChild(n);
  o != null && pJSDom.push(new Zt(s, t));
};
window.particlesJS.load = function (s, t, i) {
  var e = new XMLHttpRequest();
  e.open("GET", t),
    (e.onreadystatechange = function (r) {
      if (e.readyState == 4)
        if (e.status == 200) {
          var n = JSON.parse(r.currentTarget.response);
          window.particlesJS(s, n), i && i();
        } else
          console.log("Error pJS - XMLHttpRequest status: " + e.status),
            console.log("Error pJS - File config not found");
    }),
    e.send();
};
particlesJS("particles-js", {
  particles: {
    number: { value: 50, density: { enable: !1, value_area: 800 } },
    shape: {
      type: "image",
      image: {
        src: "./assets/public/images/heart.png",
        width: 100,
        height: 100,
      },
    },
    size: {
      value: 30,
      random: !0,
      anim: { enable: !1, speed: 30, size_min: 30, sync: !1 },
    },
    line_linked: { enable: !1 },
    opacity: {
      value: 0.5,
      random: !1,
      anim: { enable: !1, speed: 1, opacity_min: 0.1, sync: !1 },
    },
    move: {
      enable: !0,
      speed: 6,
      direction: "none",
      random: !1,
      straight: !1,
      out_mode: "out",
      attract: { enable: !1, rotateX: 600, rotateY: 1200 },
    },
  },
});
const ti = document.querySelector("#bg_heart");
function ii(s, t) {
  const i = document.createDocumentFragment();
  for (let e = 0; e < 20; e++) {
    const r = document.createElement("div");
    (r.className = "heart heart_tiny"),
      (r.style.cssText = `
      --x-offset: ${(Math.random() - 0.5) * 2e3}px;
      --y-offset: ${(Math.random() - 0.5) * 2e3}px;
      left: ${s}px;
      top: ${t}px;
    `),
      i.appendChild(r),
      setTimeout(() => r.remove(), 1500);
  }
  ti.appendChild(i);
}
document.body.addEventListener("click", (s) => {
  const { clientX: t, clientY: i } = s;
  ii(t, i),
    Y.classList.contains("open") &&
      s.target === Y &&
      (Y.classList.remove("open"),
      U.classList.remove("bx-envelope-open"),
      U.classList.add("bx-envelope"));
});
