function gT(Y) {
  return Y && Y.__esModule && Object.prototype.hasOwnProperty.call(Y, "default") ? Y.default : Y;
}
var Qg = { exports: {} }, pp = {};
var U2;
function ST() {
  if (U2) return pp;
  U2 = 1;
  var Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.fragment");
  function Se(M, Ae, de) {
    var $e = null;
    if (de !== void 0 && ($e = "" + de), Ae.key !== void 0 && ($e = "" + Ae.key), "key" in Ae) {
      de = {};
      for (var I in Ae)
        I !== "key" && (de[I] = Ae[I]);
    } else de = Ae;
    return Ae = de.ref, {
      $$typeof: Y,
      type: M,
      key: $e,
      ref: Ae !== void 0 ? Ae : null,
      props: de
    };
  }
  return pp.Fragment = te, pp.jsx = Se, pp.jsxs = Se, pp;
}
var vp = {}, Vg = { exports: {} }, We = {};
var H2;
function bT() {
  if (H2) return We;
  H2 = 1;
  var Y = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.portal"), Se = /* @__PURE__ */ Symbol.for("react.fragment"), M = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ae = /* @__PURE__ */ Symbol.for("react.profiler"), de = /* @__PURE__ */ Symbol.for("react.consumer"), $e = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), ae = /* @__PURE__ */ Symbol.for("react.suspense"), J = /* @__PURE__ */ Symbol.for("react.memo"), Ue = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), H = Symbol.iterator;
  function ie(S) {
    return S === null || typeof S != "object" ? null : (S = H && S[H] || S["@@iterator"], typeof S == "function" ? S : null);
  }
  var je = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, gt = Object.assign, ut = {};
  function Je(S, N, F) {
    this.props = S, this.context = N, this.refs = ut, this.updater = F || je;
  }
  Je.prototype.isReactComponent = {}, Je.prototype.setState = function(S, N) {
    if (typeof S != "object" && typeof S != "function" && S != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, S, N, "setState");
  }, Je.prototype.forceUpdate = function(S) {
    this.updater.enqueueForceUpdate(this, S, "forceUpdate");
  };
  function hl() {
  }
  hl.prototype = Je.prototype;
  function Tt(S, N, F) {
    this.props = S, this.context = N, this.refs = ut, this.updater = F || je;
  }
  var Ot = Tt.prototype = new hl();
  Ot.constructor = Tt, gt(Ot, Je.prototype), Ot.isPureReactComponent = !0;
  var Yt = Array.isArray;
  function Gt() {
  }
  var De = { H: null, A: null, T: null, S: null }, Qe = Object.prototype.hasOwnProperty;
  function st(S, N, F) {
    var W = F.ref;
    return {
      $$typeof: Y,
      type: S,
      key: N,
      ref: W !== void 0 ? W : null,
      props: F
    };
  }
  function re(S, N) {
    return st(S.type, N, S.props);
  }
  function Bt(S) {
    return typeof S == "object" && S !== null && S.$$typeof === Y;
  }
  function he(S) {
    var N = { "=": "=0", ":": "=2" };
    return "$" + S.replace(/[=:]/g, function(F) {
      return N[F];
    });
  }
  var Be = /\/+/g;
  function wt(S, N) {
    return typeof S == "object" && S !== null && S.key != null ? he("" + S.key) : N.toString(36);
  }
  function Rt(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (typeof S.status == "string" ? S.then(Gt, Gt) : (S.status = "pending", S.then(
          function(N) {
            S.status === "pending" && (S.status = "fulfilled", S.value = N);
          },
          function(N) {
            S.status === "pending" && (S.status = "rejected", S.reason = N);
          }
        )), S.status) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function z(S, N, F, W, Te) {
    var Ye = typeof S;
    (Ye === "undefined" || Ye === "boolean") && (S = null);
    var ze = !1;
    if (S === null) ze = !0;
    else
      switch (Ye) {
        case "bigint":
        case "string":
        case "number":
          ze = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case Y:
            case te:
              ze = !0;
              break;
            case Ue:
              return ze = S._init, z(
                ze(S._payload),
                N,
                F,
                W,
                Te
              );
          }
      }
    if (ze)
      return Te = Te(S), ze = W === "" ? "." + wt(S, 0) : W, Yt(Te) ? (F = "", ze != null && (F = ze.replace(Be, "$&/") + "/"), z(Te, N, F, "", function(Kt) {
        return Kt;
      })) : Te != null && (Bt(Te) && (Te = re(
        Te,
        F + (Te.key == null || S && S.key === Te.key ? "" : ("" + Te.key).replace(
          Be,
          "$&/"
        ) + "/") + ze
      )), N.push(Te)), 1;
    ze = 0;
    var $t = W === "" ? "." : W + ":";
    if (Yt(S))
      for (var rt = 0; rt < S.length; rt++)
        W = S[rt], Ye = $t + wt(W, rt), ze += z(
          W,
          N,
          F,
          Ye,
          Te
        );
    else if (rt = ie(S), typeof rt == "function")
      for (S = rt.call(S), rt = 0; !(W = S.next()).done; )
        W = W.value, Ye = $t + wt(W, rt++), ze += z(
          W,
          N,
          F,
          Ye,
          Te
        );
    else if (Ye === "object") {
      if (typeof S.then == "function")
        return z(
          Rt(S),
          N,
          F,
          W,
          Te
        );
      throw N = String(S), Error(
        "Objects are not valid as a React child (found: " + (N === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : N) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ze;
  }
  function Q(S, N, F) {
    if (S == null) return S;
    var W = [], Te = 0;
    return z(S, W, "", "", function(Ye) {
      return N.call(F, Ye, Te++);
    }), W;
  }
  function ee(S) {
    if (S._status === -1) {
      var N = S._result;
      N = N(), N.then(
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 1, S._result = F);
        },
        function(F) {
          (S._status === 0 || S._status === -1) && (S._status = 2, S._result = F);
        }
      ), S._status === -1 && (S._status = 0, S._result = N);
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var pe = typeof reportError == "function" ? reportError : function(S) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var N = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof S == "object" && S !== null && typeof S.message == "string" ? String(S.message) : String(S),
        error: S
      });
      if (!window.dispatchEvent(N)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", S);
      return;
    }
    console.error(S);
  }, Ee = {
    map: Q,
    forEach: function(S, N, F) {
      Q(
        S,
        function() {
          N.apply(this, arguments);
        },
        F
      );
    },
    count: function(S) {
      var N = 0;
      return Q(S, function() {
        N++;
      }), N;
    },
    toArray: function(S) {
      return Q(S, function(N) {
        return N;
      }) || [];
    },
    only: function(S) {
      if (!Bt(S))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return S;
    }
  };
  return We.Activity = G, We.Children = Ee, We.Component = Je, We.Fragment = Se, We.Profiler = Ae, We.PureComponent = Tt, We.StrictMode = M, We.Suspense = ae, We.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = De, We.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(S) {
      return De.H.useMemoCache(S);
    }
  }, We.cache = function(S) {
    return function() {
      return S.apply(null, arguments);
    };
  }, We.cacheSignal = function() {
    return null;
  }, We.cloneElement = function(S, N, F) {
    if (S == null)
      throw Error(
        "The argument must be a React element, but you passed " + S + "."
      );
    var W = gt({}, S.props), Te = S.key;
    if (N != null)
      for (Ye in N.key !== void 0 && (Te = "" + N.key), N)
        !Qe.call(N, Ye) || Ye === "key" || Ye === "__self" || Ye === "__source" || Ye === "ref" && N.ref === void 0 || (W[Ye] = N[Ye]);
    var Ye = arguments.length - 2;
    if (Ye === 1) W.children = F;
    else if (1 < Ye) {
      for (var ze = Array(Ye), $t = 0; $t < Ye; $t++)
        ze[$t] = arguments[$t + 2];
      W.children = ze;
    }
    return st(S.type, Te, W);
  }, We.createContext = function(S) {
    return S = {
      $$typeof: $e,
      _currentValue: S,
      _currentValue2: S,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, S.Provider = S, S.Consumer = {
      $$typeof: de,
      _context: S
    }, S;
  }, We.createElement = function(S, N, F) {
    var W, Te = {}, Ye = null;
    if (N != null)
      for (W in N.key !== void 0 && (Ye = "" + N.key), N)
        Qe.call(N, W) && W !== "key" && W !== "__self" && W !== "__source" && (Te[W] = N[W]);
    var ze = arguments.length - 2;
    if (ze === 1) Te.children = F;
    else if (1 < ze) {
      for (var $t = Array(ze), rt = 0; rt < ze; rt++)
        $t[rt] = arguments[rt + 2];
      Te.children = $t;
    }
    if (S && S.defaultProps)
      for (W in ze = S.defaultProps, ze)
        Te[W] === void 0 && (Te[W] = ze[W]);
    return st(S, Ye, Te);
  }, We.createRef = function() {
    return { current: null };
  }, We.forwardRef = function(S) {
    return { $$typeof: I, render: S };
  }, We.isValidElement = Bt, We.lazy = function(S) {
    return {
      $$typeof: Ue,
      _payload: { _status: -1, _result: S },
      _init: ee
    };
  }, We.memo = function(S, N) {
    return {
      $$typeof: J,
      type: S,
      compare: N === void 0 ? null : N
    };
  }, We.startTransition = function(S) {
    var N = De.T, F = {};
    De.T = F;
    try {
      var W = S(), Te = De.S;
      Te !== null && Te(F, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(Gt, pe);
    } catch (Ye) {
      pe(Ye);
    } finally {
      N !== null && F.types !== null && (N.types = F.types), De.T = N;
    }
  }, We.unstable_useCacheRefresh = function() {
    return De.H.useCacheRefresh();
  }, We.use = function(S) {
    return De.H.use(S);
  }, We.useActionState = function(S, N, F) {
    return De.H.useActionState(S, N, F);
  }, We.useCallback = function(S, N) {
    return De.H.useCallback(S, N);
  }, We.useContext = function(S) {
    return De.H.useContext(S);
  }, We.useDebugValue = function() {
  }, We.useDeferredValue = function(S, N) {
    return De.H.useDeferredValue(S, N);
  }, We.useEffect = function(S, N) {
    return De.H.useEffect(S, N);
  }, We.useEffectEvent = function(S) {
    return De.H.useEffectEvent(S);
  }, We.useId = function() {
    return De.H.useId();
  }, We.useImperativeHandle = function(S, N, F) {
    return De.H.useImperativeHandle(S, N, F);
  }, We.useInsertionEffect = function(S, N) {
    return De.H.useInsertionEffect(S, N);
  }, We.useLayoutEffect = function(S, N) {
    return De.H.useLayoutEffect(S, N);
  }, We.useMemo = function(S, N) {
    return De.H.useMemo(S, N);
  }, We.useOptimistic = function(S, N) {
    return De.H.useOptimistic(S, N);
  }, We.useReducer = function(S, N, F) {
    return De.H.useReducer(S, N, F);
  }, We.useRef = function(S) {
    return De.H.useRef(S);
  }, We.useState = function(S) {
    return De.H.useState(S);
  }, We.useSyncExternalStore = function(S, N, F) {
    return De.H.useSyncExternalStore(
      S,
      N,
      F
    );
  }, We.useTransition = function() {
    return De.H.useTransition();
  }, We.version = "19.2.3", We;
}
var Ep = { exports: {} };
Ep.exports;
var N2;
function ET() {
  return N2 || (N2 = 1, (function(Y, te) {
    process.env.NODE_ENV !== "production" && (function() {
      function Se(v, C) {
        Object.defineProperty(de.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              C[0],
              C[1]
            );
          }
        });
      }
      function M(v) {
        return v === null || typeof v != "object" ? null : (v = ul && v[ul] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function Ae(v, C) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var P = v + "." + C;
        Al[P] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          C,
          v
        ), Al[P] = !0);
      }
      function de(v, C, P) {
        this.props = v, this.context = C, this.refs = Oe, this.updater = P || yt;
      }
      function $e() {
      }
      function I(v, C, P) {
        this.props = v, this.context = C, this.refs = Oe, this.updater = P || yt;
      }
      function ae() {
      }
      function J(v) {
        return "" + v;
      }
      function Ue(v) {
        try {
          J(v);
          var C = !1;
        } catch {
          C = !0;
        }
        if (C) {
          C = console;
          var P = C.error, le = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return P.call(
            C,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            le
          ), J(v);
        }
      }
      function G(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === Wt ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case S:
            return "Fragment";
          case F:
            return "Profiler";
          case N:
            return "StrictMode";
          case ze:
            return "Suspense";
          case $t:
            return "SuspenseList";
          case fe:
            return "Activity";
        }
        if (typeof v == "object")
          switch (typeof v.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), v.$$typeof) {
            case Ee:
              return "Portal";
            case Te:
              return v.displayName || "Context";
            case W:
              return (v._context.displayName || "Context") + ".Consumer";
            case Ye:
              var C = v.render;
              return v = v.displayName, v || (v = C.displayName || C.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case rt:
              return C = v.displayName || null, C !== null ? C : G(v.type) || "Memo";
            case Kt:
              C = v._payload, v = v._init;
              try {
                return G(v(C));
              } catch {
              }
          }
        return null;
      }
      function H(v) {
        if (v === S) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === Kt)
          return "<...>";
        try {
          var C = G(v);
          return C ? "<" + C + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ie() {
        var v = ce.A;
        return v === null ? null : v.getOwner();
      }
      function je() {
        return Error("react-stack-top-frame");
      }
      function gt(v) {
        if (ua.call(v, "key")) {
          var C = Object.getOwnPropertyDescriptor(v, "key").get;
          if (C && C.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function ut(v, C) {
        function P() {
          ll || (ll = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            C
          ));
        }
        P.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: P,
          configurable: !0
        });
      }
      function Je() {
        var v = G(this.type);
        return Xa[v] || (Xa[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function hl(v, C, P, le, ye, He) {
        var ve = P.ref;
        return v = {
          $$typeof: pe,
          type: v,
          key: C,
          props: P,
          _owner: le
        }, (ve !== void 0 ? ve : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: Je
        }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0
        }), Object.defineProperty(v, "_debugInfo", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null
        }), Object.defineProperty(v, "_debugStack", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: ye
        }), Object.defineProperty(v, "_debugTask", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: He
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function Tt(v, C) {
        return C = hl(
          v.type,
          C,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (C._store.validated = v._store.validated), C;
      }
      function Ot(v) {
        Yt(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === Kt && (v._payload.status === "fulfilled" ? Yt(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function Yt(v) {
        return typeof v == "object" && v !== null && v.$$typeof === pe;
      }
      function Gt(v) {
        var C = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(P) {
          return C[P];
        });
      }
      function De(v, C) {
        return typeof v == "object" && v !== null && v.key != null ? (Ue(v.key), Gt("" + v.key)) : C.toString(36);
      }
      function Qe(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(ae, ae) : (v.status = "pending", v.then(
              function(C) {
                v.status === "pending" && (v.status = "fulfilled", v.value = C);
              },
              function(C) {
                v.status === "pending" && (v.status = "rejected", v.reason = C);
              }
            )), v.status) {
              case "fulfilled":
                return v.value;
              case "rejected":
                throw v.reason;
            }
        }
        throw v;
      }
      function st(v, C, P, le, ye) {
        var He = typeof v;
        (He === "undefined" || He === "boolean") && (v = null);
        var ve = !1;
        if (v === null) ve = !0;
        else
          switch (He) {
            case "bigint":
            case "string":
            case "number":
              ve = !0;
              break;
            case "object":
              switch (v.$$typeof) {
                case pe:
                case Ee:
                  ve = !0;
                  break;
                case Kt:
                  return ve = v._init, st(
                    ve(v._payload),
                    C,
                    P,
                    le,
                    ye
                  );
              }
          }
        if (ve) {
          ve = v, ye = ye(ve);
          var it = le === "" ? "." + De(ve, 0) : le;
          return da(ye) ? (P = "", it != null && (P = it.replace(Rn, "$&/") + "/"), st(ye, C, P, "", function(ma) {
            return ma;
          })) : ye != null && (Yt(ye) && (ye.key != null && (ve && ve.key === ye.key || Ue(ye.key)), P = Tt(
            ye,
            P + (ye.key == null || ve && ve.key === ye.key ? "" : ("" + ye.key).replace(
              Rn,
              "$&/"
            ) + "/") + it
          ), le !== "" && ve != null && Yt(ve) && ve.key == null && ve._store && !ve._store.validated && (P._store.validated = 2), ye = P), C.push(ye)), 1;
        }
        if (ve = 0, it = le === "" ? "." : le + ":", da(v))
          for (var Ve = 0; Ve < v.length; Ve++)
            le = v[Ve], He = it + De(le, Ve), ve += st(
              le,
              C,
              P,
              He,
              ye
            );
        else if (Ve = M(v), typeof Ve == "function")
          for (Ve === v.entries && (qt || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), qt = !0), v = Ve.call(v), Ve = 0; !(le = v.next()).done; )
            le = le.value, He = it + De(le, Ve++), ve += st(
              le,
              C,
              P,
              He,
              ye
            );
        else if (He === "object") {
          if (typeof v.then == "function")
            return st(
              Qe(v),
              C,
              P,
              le,
              ye
            );
          throw C = String(v), Error(
            "Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return ve;
      }
      function re(v, C, P) {
        if (v == null) return v;
        var le = [], ye = 0;
        return st(v, le, "", "", function(He) {
          return C.call(P, He, ye++);
        }), le;
      }
      function Bt(v) {
        if (v._status === -1) {
          var C = v._ioInfo;
          C != null && (C.start = C.end = performance.now()), C = v._result;
          var P = C();
          if (P.then(
            function(ye) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = ye;
                var He = v._ioInfo;
                He != null && (He.end = performance.now()), P.status === void 0 && (P.status = "fulfilled", P.value = ye);
              }
            },
            function(ye) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = ye;
                var He = v._ioInfo;
                He != null && (He.end = performance.now()), P.status === void 0 && (P.status = "rejected", P.reason = ye);
              }
            }
          ), C = v._ioInfo, C != null) {
            C.value = P;
            var le = P.displayName;
            typeof le == "string" && (C.name = le);
          }
          v._status === -1 && (v._status = 0, v._result = P);
        }
        if (v._status === 1)
          return C = v._result, C === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            C
          ), "default" in C || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            C
          ), C.default;
        throw v._result;
      }
      function he() {
        var v = ce.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function Be() {
        ce.asyncTransitions--;
      }
      function wt(v) {
        if (fi === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7);
            fi = (Y && Y[C]).call(
              Y,
              "timers"
            ).setImmediate;
          } catch {
            fi = function(le) {
              _c === !1 && (_c = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = le, ye.port2.postMessage(void 0);
            };
          }
        return fi(v);
      }
      function Rt(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function z(v, C) {
        C !== La - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), La = C;
      }
      function Q(v, C, P) {
        var le = ce.actQueue;
        if (le !== null)
          if (le.length !== 0)
            try {
              ee(le), wt(function() {
                return Q(v, C, P);
              });
              return;
            } catch (ye) {
              ce.thrownErrors.push(ye);
            }
          else ce.actQueue = null;
        0 < ce.thrownErrors.length ? (le = Rt(ce.thrownErrors), ce.thrownErrors.length = 0, P(le)) : C(v);
      }
      function ee(v) {
        if (!Aa) {
          Aa = !0;
          var C = 0;
          try {
            for (; C < v.length; C++) {
              var P = v[C];
              do {
                ce.didUsePromise = !1;
                var le = P(!1);
                if (le !== null) {
                  if (ce.didUsePromise) {
                    v[C] = P, v.splice(0, C);
                    return;
                  }
                  P = le;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (ye) {
            v.splice(0, C + 1), ce.thrownErrors.push(ye);
          } finally {
            Aa = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var pe = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ee = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), N = /* @__PURE__ */ Symbol.for("react.strict_mode"), F = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), Te = /* @__PURE__ */ Symbol.for("react.context"), Ye = /* @__PURE__ */ Symbol.for("react.forward_ref"), ze = /* @__PURE__ */ Symbol.for("react.suspense"), $t = /* @__PURE__ */ Symbol.for("react.suspense_list"), rt = /* @__PURE__ */ Symbol.for("react.memo"), Kt = /* @__PURE__ */ Symbol.for("react.lazy"), fe = /* @__PURE__ */ Symbol.for("react.activity"), ul = Symbol.iterator, Al = {}, yt = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          Ae(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          Ae(v, "replaceState");
        },
        enqueueSetState: function(v) {
          Ae(v, "setState");
        }
      }, kt = Object.assign, Oe = {};
      Object.freeze(Oe), de.prototype.isReactComponent = {}, de.prototype.setState = function(v, C) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, C, "setState");
      }, de.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var Dt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (wi in Dt)
        Dt.hasOwnProperty(wi) && Se(wi, Dt[wi]);
      $e.prototype = de.prototype, Dt = I.prototype = new $e(), Dt.constructor = I, kt(Dt, de.prototype), Dt.isPureReactComponent = !0;
      var da = Array.isArray, Wt = /* @__PURE__ */ Symbol.for("react.client.reference"), ce = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        asyncTransitions: 0,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null,
        recentlyCreatedOwnerStacks: 0
      }, ua = Object.prototype.hasOwnProperty, Ll = console.createTask ? console.createTask : function() {
        return null;
      };
      Dt = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var ll, ke, Xa = {}, On = Dt.react_stack_bottom_frame.bind(
        Dt,
        je
      )(), ha = Ll(H(je)), qt = !1, Rn = /\/+/g, Gi = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var C = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
            error: v
          });
          if (!window.dispatchEvent(C)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, _c = !1, fi = null, La = 0, zl = !1, Aa = !1, Ql = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : wt;
      Dt = Object.freeze({
        __proto__: null,
        c: function(v) {
          return he().useMemoCache(v);
        }
      });
      var wi = {
        map: re,
        forEach: function(v, C, P) {
          re(
            v,
            function() {
              C.apply(this, arguments);
            },
            P
          );
        },
        count: function(v) {
          var C = 0;
          return re(v, function() {
            C++;
          }), C;
        },
        toArray: function(v) {
          return re(v, function(C) {
            return C;
          }) || [];
        },
        only: function(v) {
          if (!Yt(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      te.Activity = fe, te.Children = wi, te.Component = de, te.Fragment = S, te.Profiler = F, te.PureComponent = I, te.StrictMode = N, te.Suspense = ze, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ce, te.__COMPILER_RUNTIME = Dt, te.act = function(v) {
        var C = ce.actQueue, P = La;
        La++;
        var le = ce.actQueue = C !== null ? C : [], ye = !1;
        try {
          var He = v();
        } catch (Ve) {
          ce.thrownErrors.push(Ve);
        }
        if (0 < ce.thrownErrors.length)
          throw z(C, P), v = Rt(ce.thrownErrors), ce.thrownErrors.length = 0, v;
        if (He !== null && typeof He == "object" && typeof He.then == "function") {
          var ve = He;
          return Ql(function() {
            ye || zl || (zl = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ve, ma) {
              ye = !0, ve.then(
                function(Dn) {
                  if (z(C, P), P === 0) {
                    try {
                      ee(le), wt(function() {
                        return Q(
                          Dn,
                          Ve,
                          ma
                        );
                      });
                    } catch (Yo) {
                      ce.thrownErrors.push(Yo);
                    }
                    if (0 < ce.thrownErrors.length) {
                      var Xi = Rt(
                        ce.thrownErrors
                      );
                      ce.thrownErrors.length = 0, ma(Xi);
                    }
                  } else Ve(Dn);
                },
                function(Dn) {
                  z(C, P), 0 < ce.thrownErrors.length && (Dn = Rt(
                    ce.thrownErrors
                  ), ce.thrownErrors.length = 0), ma(Dn);
                }
              );
            }
          };
        }
        var it = He;
        if (z(C, P), P === 0 && (ee(le), le.length !== 0 && Ql(function() {
          ye || zl || (zl = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), ce.actQueue = null), 0 < ce.thrownErrors.length)
          throw v = Rt(ce.thrownErrors), ce.thrownErrors.length = 0, v;
        return {
          then: function(Ve, ma) {
            ye = !0, P === 0 ? (ce.actQueue = le, wt(function() {
              return Q(
                it,
                Ve,
                ma
              );
            })) : Ve(it);
          }
        };
      }, te.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, te.cacheSignal = function() {
        return null;
      }, te.captureOwnerStack = function() {
        var v = ce.getCurrentStack;
        return v === null ? null : v();
      }, te.cloneElement = function(v, C, P) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var le = kt({}, v.props), ye = v.key, He = v._owner;
        if (C != null) {
          var ve;
          e: {
            if (ua.call(C, "ref") && (ve = Object.getOwnPropertyDescriptor(
              C,
              "ref"
            ).get) && ve.isReactWarning) {
              ve = !1;
              break e;
            }
            ve = C.ref !== void 0;
          }
          ve && (He = ie()), gt(C) && (Ue(C.key), ye = "" + C.key);
          for (it in C)
            !ua.call(C, it) || it === "key" || it === "__self" || it === "__source" || it === "ref" && C.ref === void 0 || (le[it] = C[it]);
        }
        var it = arguments.length - 2;
        if (it === 1) le.children = P;
        else if (1 < it) {
          ve = Array(it);
          for (var Ve = 0; Ve < it; Ve++)
            ve[Ve] = arguments[Ve + 2];
          le.children = ve;
        }
        for (le = hl(
          v.type,
          ye,
          le,
          He,
          v._debugStack,
          v._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          Ot(arguments[ye]);
        return le;
      }, te.createContext = function(v) {
        return v = {
          $$typeof: Te,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, v.Provider = v, v.Consumer = {
          $$typeof: W,
          _context: v
        }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, te.createElement = function(v, C, P) {
        for (var le = 2; le < arguments.length; le++)
          Ot(arguments[le]);
        le = {};
        var ye = null;
        if (C != null)
          for (Ve in ke || !("__self" in C) || "key" in C || (ke = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), gt(C) && (Ue(C.key), ye = "" + C.key), C)
            ua.call(C, Ve) && Ve !== "key" && Ve !== "__self" && Ve !== "__source" && (le[Ve] = C[Ve]);
        var He = arguments.length - 2;
        if (He === 1) le.children = P;
        else if (1 < He) {
          for (var ve = Array(He), it = 0; it < He; it++)
            ve[it] = arguments[it + 2];
          Object.freeze && Object.freeze(ve), le.children = ve;
        }
        if (v && v.defaultProps)
          for (Ve in He = v.defaultProps, He)
            le[Ve] === void 0 && (le[Ve] = He[Ve]);
        ye && ut(
          le,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var Ve = 1e4 > ce.recentlyCreatedOwnerStacks++;
        return hl(
          v,
          ye,
          le,
          ie(),
          Ve ? Error("react-stack-top-frame") : On,
          Ve ? Ll(H(v)) : ha
        );
      }, te.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, te.forwardRef = function(v) {
        v != null && v.$$typeof === rt ? console.error(
          "forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."
        ) : typeof v != "function" ? console.error(
          "forwardRef requires a render function but was given %s.",
          v === null ? "null" : typeof v
        ) : v.length !== 0 && v.length !== 2 && console.error(
          "forwardRef render functions accept exactly two parameters: props and ref. %s",
          v.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."
        ), v != null && v.defaultProps != null && console.error(
          "forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?"
        );
        var C = { $$typeof: Ye, render: v }, P;
        return Object.defineProperty(C, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(le) {
            P = le, v.name || v.displayName || (Object.defineProperty(v, "name", { value: le }), v.displayName = le);
          }
        }), C;
      }, te.isValidElement = Yt, te.lazy = function(v) {
        v = { _status: -1, _result: v };
        var C = {
          $$typeof: Kt,
          _payload: v,
          _init: Bt
        }, P = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return v._ioInfo = P, C._debugInfo = [{ awaited: P }], C;
      }, te.memo = function(v, C) {
        v == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          v === null ? "null" : typeof v
        ), C = {
          $$typeof: rt,
          type: v,
          compare: C === void 0 ? null : C
        };
        var P;
        return Object.defineProperty(C, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return P;
          },
          set: function(le) {
            P = le, v.name || v.displayName || (Object.defineProperty(v, "name", { value: le }), v.displayName = le);
          }
        }), C;
      }, te.startTransition = function(v) {
        var C = ce.T, P = {};
        P._updatedFibers = /* @__PURE__ */ new Set(), ce.T = P;
        try {
          var le = v(), ye = ce.S;
          ye !== null && ye(P, le), typeof le == "object" && le !== null && typeof le.then == "function" && (ce.asyncTransitions++, le.then(Be, Be), le.then(ae, Gi));
        } catch (He) {
          Gi(He);
        } finally {
          C === null && P._updatedFibers && (v = P._updatedFibers.size, P._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), C !== null && P.types !== null && (C.types !== null && C.types !== P.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), C.types = P.types), ce.T = C;
        }
      }, te.unstable_useCacheRefresh = function() {
        return he().useCacheRefresh();
      }, te.use = function(v) {
        return he().use(v);
      }, te.useActionState = function(v, C, P) {
        return he().useActionState(
          v,
          C,
          P
        );
      }, te.useCallback = function(v, C) {
        return he().useCallback(v, C);
      }, te.useContext = function(v) {
        var C = he();
        return v.$$typeof === W && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), C.useContext(v);
      }, te.useDebugValue = function(v, C) {
        return he().useDebugValue(v, C);
      }, te.useDeferredValue = function(v, C) {
        return he().useDeferredValue(v, C);
      }, te.useEffect = function(v, C) {
        return v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), he().useEffect(v, C);
      }, te.useEffectEvent = function(v) {
        return he().useEffectEvent(v);
      }, te.useId = function() {
        return he().useId();
      }, te.useImperativeHandle = function(v, C, P) {
        return he().useImperativeHandle(v, C, P);
      }, te.useInsertionEffect = function(v, C) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), he().useInsertionEffect(v, C);
      }, te.useLayoutEffect = function(v, C) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), he().useLayoutEffect(v, C);
      }, te.useMemo = function(v, C) {
        return he().useMemo(v, C);
      }, te.useOptimistic = function(v, C) {
        return he().useOptimistic(v, C);
      }, te.useReducer = function(v, C, P) {
        return he().useReducer(v, C, P);
      }, te.useRef = function(v) {
        return he().useRef(v);
      }, te.useState = function(v) {
        return he().useState(v);
      }, te.useSyncExternalStore = function(v, C, P) {
        return he().useSyncExternalStore(
          v,
          C,
          P
        );
      }, te.useTransition = function() {
        return he().useTransition();
      }, te.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(Ep, Ep.exports)), Ep.exports;
}
var x2;
function bm() {
  return x2 || (x2 = 1, process.env.NODE_ENV === "production" ? Vg.exports = bT() : Vg.exports = ET()), Vg.exports;
}
var j2;
function TT() {
  return j2 || (j2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function Y(S) {
      if (S == null) return null;
      if (typeof S == "function")
        return S.$$typeof === Bt ? null : S.displayName || S.name || null;
      if (typeof S == "string") return S;
      switch (S) {
        case ut:
          return "Fragment";
        case hl:
          return "Profiler";
        case Je:
          return "StrictMode";
        case Gt:
          return "Suspense";
        case De:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof S == "object")
        switch (typeof S.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), S.$$typeof) {
          case gt:
            return "Portal";
          case Ot:
            return S.displayName || "Context";
          case Tt:
            return (S._context.displayName || "Context") + ".Consumer";
          case Yt:
            var N = S.render;
            return S = S.displayName, S || (S = N.displayName || N.name || "", S = S !== "" ? "ForwardRef(" + S + ")" : "ForwardRef"), S;
          case Qe:
            return N = S.displayName || null, N !== null ? N : Y(S.type) || "Memo";
          case st:
            N = S._payload, S = S._init;
            try {
              return Y(S(N));
            } catch {
            }
        }
      return null;
    }
    function te(S) {
      return "" + S;
    }
    function Se(S) {
      try {
        te(S);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var F = N.error, W = typeof Symbol == "function" && Symbol.toStringTag && S[Symbol.toStringTag] || S.constructor.name || "Object";
        return F.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), te(S);
      }
    }
    function M(S) {
      if (S === ut) return "<>";
      if (typeof S == "object" && S !== null && S.$$typeof === st)
        return "<...>";
      try {
        var N = Y(S);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function Ae() {
      var S = he.A;
      return S === null ? null : S.getOwner();
    }
    function de() {
      return Error("react-stack-top-frame");
    }
    function $e(S) {
      if (Be.call(S, "key")) {
        var N = Object.getOwnPropertyDescriptor(S, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return S.key !== void 0;
    }
    function I(S, N) {
      function F() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      F.isReactWarning = !0, Object.defineProperty(S, "key", {
        get: F,
        configurable: !0
      });
    }
    function ae() {
      var S = Y(this.type);
      return Q[S] || (Q[S] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), S = this.props.ref, S !== void 0 ? S : null;
    }
    function J(S, N, F, W, Te, Ye) {
      var ze = F.ref;
      return S = {
        $$typeof: je,
        type: S,
        key: N,
        props: F,
        _owner: W
      }, (ze !== void 0 ? ze : null) !== null ? Object.defineProperty(S, "ref", {
        enumerable: !1,
        get: ae
      }) : Object.defineProperty(S, "ref", { enumerable: !1, value: null }), S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(S, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(S, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Te
      }), Object.defineProperty(S, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Ye
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    }
    function Ue(S, N, F, W, Te, Ye) {
      var ze = N.children;
      if (ze !== void 0)
        if (W)
          if (wt(ze)) {
            for (W = 0; W < ze.length; W++)
              G(ze[W]);
            Object.freeze && Object.freeze(ze);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else G(ze);
      if (Be.call(N, "key")) {
        ze = Y(S);
        var $t = Object.keys(N).filter(function(Kt) {
          return Kt !== "key";
        });
        W = 0 < $t.length ? "{key: someKey, " + $t.join(": ..., ") + ": ...}" : "{key: someKey}", Ee[ze + W] || ($t = 0 < $t.length ? "{" + $t.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          ze,
          $t,
          ze
        ), Ee[ze + W] = !0);
      }
      if (ze = null, F !== void 0 && (Se(F), ze = "" + F), $e(N) && (Se(N.key), ze = "" + N.key), "key" in N) {
        F = {};
        for (var rt in N)
          rt !== "key" && (F[rt] = N[rt]);
      } else F = N;
      return ze && I(
        F,
        typeof S == "function" ? S.displayName || S.name || "Unknown" : S
      ), J(
        S,
        ze,
        F,
        Ae(),
        Te,
        Ye
      );
    }
    function G(S) {
      H(S) ? S._store && (S._store.validated = 1) : typeof S == "object" && S !== null && S.$$typeof === st && (S._payload.status === "fulfilled" ? H(S._payload.value) && S._payload.value._store && (S._payload.value._store.validated = 1) : S._store && (S._store.validated = 1));
    }
    function H(S) {
      return typeof S == "object" && S !== null && S.$$typeof === je;
    }
    var ie = bm(), je = /* @__PURE__ */ Symbol.for("react.transitional.element"), gt = /* @__PURE__ */ Symbol.for("react.portal"), ut = /* @__PURE__ */ Symbol.for("react.fragment"), Je = /* @__PURE__ */ Symbol.for("react.strict_mode"), hl = /* @__PURE__ */ Symbol.for("react.profiler"), Tt = /* @__PURE__ */ Symbol.for("react.consumer"), Ot = /* @__PURE__ */ Symbol.for("react.context"), Yt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Gt = /* @__PURE__ */ Symbol.for("react.suspense"), De = /* @__PURE__ */ Symbol.for("react.suspense_list"), Qe = /* @__PURE__ */ Symbol.for("react.memo"), st = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), Bt = /* @__PURE__ */ Symbol.for("react.client.reference"), he = ie.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Be = Object.prototype.hasOwnProperty, wt = Array.isArray, Rt = console.createTask ? console.createTask : function() {
      return null;
    };
    ie = {
      react_stack_bottom_frame: function(S) {
        return S();
      }
    };
    var z, Q = {}, ee = ie.react_stack_bottom_frame.bind(
      ie,
      de
    )(), pe = Rt(M(de)), Ee = {};
    vp.Fragment = ut, vp.jsx = function(S, N, F) {
      var W = 1e4 > he.recentlyCreatedOwnerStacks++;
      return Ue(
        S,
        N,
        F,
        !1,
        W ? Error("react-stack-top-frame") : ee,
        W ? Rt(M(S)) : pe
      );
    }, vp.jsxs = function(S, N, F) {
      var W = 1e4 > he.recentlyCreatedOwnerStacks++;
      return Ue(
        S,
        N,
        F,
        !0,
        W ? Error("react-stack-top-frame") : ee,
        W ? Rt(M(S)) : pe
      );
    };
  })()), vp;
}
var B2;
function AT() {
  return B2 || (B2 = 1, process.env.NODE_ENV === "production" ? Qg.exports = ST() : Qg.exports = TT()), Qg.exports;
}
var ne = AT(), nt = bm(), Zg = { exports: {} }, gp = {}, Jg = { exports: {} }, S1 = {};
var q2;
function zT() {
  return q2 || (q2 = 1, (function(Y) {
    function te(z, Q) {
      var ee = z.length;
      z.push(Q);
      e: for (; 0 < ee; ) {
        var pe = ee - 1 >>> 1, Ee = z[pe];
        if (0 < Ae(Ee, Q))
          z[pe] = Q, z[ee] = Ee, ee = pe;
        else break e;
      }
    }
    function Se(z) {
      return z.length === 0 ? null : z[0];
    }
    function M(z) {
      if (z.length === 0) return null;
      var Q = z[0], ee = z.pop();
      if (ee !== Q) {
        z[0] = ee;
        e: for (var pe = 0, Ee = z.length, S = Ee >>> 1; pe < S; ) {
          var N = 2 * (pe + 1) - 1, F = z[N], W = N + 1, Te = z[W];
          if (0 > Ae(F, ee))
            W < Ee && 0 > Ae(Te, F) ? (z[pe] = Te, z[W] = ee, pe = W) : (z[pe] = F, z[N] = ee, pe = N);
          else if (W < Ee && 0 > Ae(Te, ee))
            z[pe] = Te, z[W] = ee, pe = W;
          else break e;
        }
      }
      return Q;
    }
    function Ae(z, Q) {
      var ee = z.sortIndex - Q.sortIndex;
      return ee !== 0 ? ee : z.id - Q.id;
    }
    if (Y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var de = performance;
      Y.unstable_now = function() {
        return de.now();
      };
    } else {
      var $e = Date, I = $e.now();
      Y.unstable_now = function() {
        return $e.now() - I;
      };
    }
    var ae = [], J = [], Ue = 1, G = null, H = 3, ie = !1, je = !1, gt = !1, ut = !1, Je = typeof setTimeout == "function" ? setTimeout : null, hl = typeof clearTimeout == "function" ? clearTimeout : null, Tt = typeof setImmediate < "u" ? setImmediate : null;
    function Ot(z) {
      for (var Q = Se(J); Q !== null; ) {
        if (Q.callback === null) M(J);
        else if (Q.startTime <= z)
          M(J), Q.sortIndex = Q.expirationTime, te(ae, Q);
        else break;
        Q = Se(J);
      }
    }
    function Yt(z) {
      if (gt = !1, Ot(z), !je)
        if (Se(ae) !== null)
          je = !0, Gt || (Gt = !0, he());
        else {
          var Q = Se(J);
          Q !== null && Rt(Yt, Q.startTime - z);
        }
    }
    var Gt = !1, De = -1, Qe = 5, st = -1;
    function re() {
      return ut ? !0 : !(Y.unstable_now() - st < Qe);
    }
    function Bt() {
      if (ut = !1, Gt) {
        var z = Y.unstable_now();
        st = z;
        var Q = !0;
        try {
          e: {
            je = !1, gt && (gt = !1, hl(De), De = -1), ie = !0;
            var ee = H;
            try {
              t: {
                for (Ot(z), G = Se(ae); G !== null && !(G.expirationTime > z && re()); ) {
                  var pe = G.callback;
                  if (typeof pe == "function") {
                    G.callback = null, H = G.priorityLevel;
                    var Ee = pe(
                      G.expirationTime <= z
                    );
                    if (z = Y.unstable_now(), typeof Ee == "function") {
                      G.callback = Ee, Ot(z), Q = !0;
                      break t;
                    }
                    G === Se(ae) && M(ae), Ot(z);
                  } else M(ae);
                  G = Se(ae);
                }
                if (G !== null) Q = !0;
                else {
                  var S = Se(J);
                  S !== null && Rt(
                    Yt,
                    S.startTime - z
                  ), Q = !1;
                }
              }
              break e;
            } finally {
              G = null, H = ee, ie = !1;
            }
            Q = void 0;
          }
        } finally {
          Q ? he() : Gt = !1;
        }
      }
    }
    var he;
    if (typeof Tt == "function")
      he = function() {
        Tt(Bt);
      };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), wt = Be.port2;
      Be.port1.onmessage = Bt, he = function() {
        wt.postMessage(null);
      };
    } else
      he = function() {
        Je(Bt, 0);
      };
    function Rt(z, Q) {
      De = Je(function() {
        z(Y.unstable_now());
      }, Q);
    }
    Y.unstable_IdlePriority = 5, Y.unstable_ImmediatePriority = 1, Y.unstable_LowPriority = 4, Y.unstable_NormalPriority = 3, Y.unstable_Profiling = null, Y.unstable_UserBlockingPriority = 2, Y.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, Y.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Qe = 0 < z ? Math.floor(1e3 / z) : 5;
    }, Y.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, Y.unstable_next = function(z) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var Q = 3;
          break;
        default:
          Q = H;
      }
      var ee = H;
      H = Q;
      try {
        return z();
      } finally {
        H = ee;
      }
    }, Y.unstable_requestPaint = function() {
      ut = !0;
    }, Y.unstable_runWithPriority = function(z, Q) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var ee = H;
      H = z;
      try {
        return Q();
      } finally {
        H = ee;
      }
    }, Y.unstable_scheduleCallback = function(z, Q, ee) {
      var pe = Y.unstable_now();
      switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? pe + ee : pe) : ee = pe, z) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return Ee = ee + Ee, z = {
        id: Ue++,
        callback: Q,
        priorityLevel: z,
        startTime: ee,
        expirationTime: Ee,
        sortIndex: -1
      }, ee > pe ? (z.sortIndex = ee, te(J, z), Se(ae) === null && z === Se(J) && (gt ? (hl(De), De = -1) : gt = !0, Rt(Yt, ee - pe))) : (z.sortIndex = Ee, te(ae, z), je || ie || (je = !0, Gt || (Gt = !0, he()))), z;
    }, Y.unstable_shouldYield = re, Y.unstable_wrapCallback = function(z) {
      var Q = H;
      return function() {
        var ee = H;
        H = Q;
        try {
          return z.apply(this, arguments);
        } finally {
          H = ee;
        }
      };
    };
  })(S1)), S1;
}
var b1 = {};
var Y2;
function OT() {
  return Y2 || (Y2 = 1, (function(Y) {
    process.env.NODE_ENV !== "production" && (function() {
      function te() {
        if (Yt = !1, st) {
          var z = Y.unstable_now();
          he = z;
          var Q = !0;
          try {
            e: {
              Tt = !1, Ot && (Ot = !1, De(re), re = -1), hl = !0;
              var ee = Je;
              try {
                t: {
                  for ($e(z), ut = M(ie); ut !== null && !(ut.expirationTime > z && ae()); ) {
                    var pe = ut.callback;
                    if (typeof pe == "function") {
                      ut.callback = null, Je = ut.priorityLevel;
                      var Ee = pe(
                        ut.expirationTime <= z
                      );
                      if (z = Y.unstable_now(), typeof Ee == "function") {
                        ut.callback = Ee, $e(z), Q = !0;
                        break t;
                      }
                      ut === M(ie) && Ae(ie), $e(z);
                    } else Ae(ie);
                    ut = M(ie);
                  }
                  if (ut !== null) Q = !0;
                  else {
                    var S = M(je);
                    S !== null && J(
                      I,
                      S.startTime - z
                    ), Q = !1;
                  }
                }
                break e;
              } finally {
                ut = null, Je = ee, hl = !1;
              }
              Q = void 0;
            }
          } finally {
            Q ? Be() : st = !1;
          }
        }
      }
      function Se(z, Q) {
        var ee = z.length;
        z.push(Q);
        e: for (; 0 < ee; ) {
          var pe = ee - 1 >>> 1, Ee = z[pe];
          if (0 < de(Ee, Q))
            z[pe] = Q, z[ee] = Ee, ee = pe;
          else break e;
        }
      }
      function M(z) {
        return z.length === 0 ? null : z[0];
      }
      function Ae(z) {
        if (z.length === 0) return null;
        var Q = z[0], ee = z.pop();
        if (ee !== Q) {
          z[0] = ee;
          e: for (var pe = 0, Ee = z.length, S = Ee >>> 1; pe < S; ) {
            var N = 2 * (pe + 1) - 1, F = z[N], W = N + 1, Te = z[W];
            if (0 > de(F, ee))
              W < Ee && 0 > de(Te, F) ? (z[pe] = Te, z[W] = ee, pe = W) : (z[pe] = F, z[N] = ee, pe = N);
            else if (W < Ee && 0 > de(Te, ee))
              z[pe] = Te, z[W] = ee, pe = W;
            else break e;
          }
        }
        return Q;
      }
      function de(z, Q) {
        var ee = z.sortIndex - Q.sortIndex;
        return ee !== 0 ? ee : z.id - Q.id;
      }
      function $e(z) {
        for (var Q = M(je); Q !== null; ) {
          if (Q.callback === null) Ae(je);
          else if (Q.startTime <= z)
            Ae(je), Q.sortIndex = Q.expirationTime, Se(ie, Q);
          else break;
          Q = M(je);
        }
      }
      function I(z) {
        if (Ot = !1, $e(z), !Tt)
          if (M(ie) !== null)
            Tt = !0, st || (st = !0, Be());
          else {
            var Q = M(je);
            Q !== null && J(
              I,
              Q.startTime - z
            );
          }
      }
      function ae() {
        return Yt ? !0 : !(Y.unstable_now() - he < Bt);
      }
      function J(z, Q) {
        re = Gt(function() {
          z(Y.unstable_now());
        }, Q);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), Y.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var Ue = performance;
        Y.unstable_now = function() {
          return Ue.now();
        };
      } else {
        var G = Date, H = G.now();
        Y.unstable_now = function() {
          return G.now() - H;
        };
      }
      var ie = [], je = [], gt = 1, ut = null, Je = 3, hl = !1, Tt = !1, Ot = !1, Yt = !1, Gt = typeof setTimeout == "function" ? setTimeout : null, De = typeof clearTimeout == "function" ? clearTimeout : null, Qe = typeof setImmediate < "u" ? setImmediate : null, st = !1, re = -1, Bt = 5, he = -1;
      if (typeof Qe == "function")
        var Be = function() {
          Qe(te);
        };
      else if (typeof MessageChannel < "u") {
        var wt = new MessageChannel(), Rt = wt.port2;
        wt.port1.onmessage = te, Be = function() {
          Rt.postMessage(null);
        };
      } else
        Be = function() {
          Gt(te, 0);
        };
      Y.unstable_IdlePriority = 5, Y.unstable_ImmediatePriority = 1, Y.unstable_LowPriority = 4, Y.unstable_NormalPriority = 3, Y.unstable_Profiling = null, Y.unstable_UserBlockingPriority = 2, Y.unstable_cancelCallback = function(z) {
        z.callback = null;
      }, Y.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : Bt = 0 < z ? Math.floor(1e3 / z) : 5;
      }, Y.unstable_getCurrentPriorityLevel = function() {
        return Je;
      }, Y.unstable_next = function(z) {
        switch (Je) {
          case 1:
          case 2:
          case 3:
            var Q = 3;
            break;
          default:
            Q = Je;
        }
        var ee = Je;
        Je = Q;
        try {
          return z();
        } finally {
          Je = ee;
        }
      }, Y.unstable_requestPaint = function() {
        Yt = !0;
      }, Y.unstable_runWithPriority = function(z, Q) {
        switch (z) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            z = 3;
        }
        var ee = Je;
        Je = z;
        try {
          return Q();
        } finally {
          Je = ee;
        }
      }, Y.unstable_scheduleCallback = function(z, Q, ee) {
        var pe = Y.unstable_now();
        switch (typeof ee == "object" && ee !== null ? (ee = ee.delay, ee = typeof ee == "number" && 0 < ee ? pe + ee : pe) : ee = pe, z) {
          case 1:
            var Ee = -1;
            break;
          case 2:
            Ee = 250;
            break;
          case 5:
            Ee = 1073741823;
            break;
          case 4:
            Ee = 1e4;
            break;
          default:
            Ee = 5e3;
        }
        return Ee = ee + Ee, z = {
          id: gt++,
          callback: Q,
          priorityLevel: z,
          startTime: ee,
          expirationTime: Ee,
          sortIndex: -1
        }, ee > pe ? (z.sortIndex = ee, Se(je, z), M(ie) === null && z === M(je) && (Ot ? (De(re), re = -1) : Ot = !0, J(I, ee - pe))) : (z.sortIndex = Ee, Se(ie, z), Tt || hl || (Tt = !0, st || (st = !0, Be()))), z;
      }, Y.unstable_shouldYield = ae, Y.unstable_wrapCallback = function(z) {
        var Q = Je;
        return function() {
          var ee = Je;
          Je = Q;
          try {
            return z.apply(this, arguments);
          } finally {
            Je = ee;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(b1)), b1;
}
var G2;
function $2() {
  return G2 || (G2 = 1, process.env.NODE_ENV === "production" ? Jg.exports = zT() : Jg.exports = OT()), Jg.exports;
}
var Kg = { exports: {} }, Ia = {};
var w2;
function RT() {
  if (w2) return Ia;
  w2 = 1;
  var Y = bm();
  function te(ae) {
    var J = "https://react.dev/errors/" + ae;
    if (1 < arguments.length) {
      J += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Ue = 2; Ue < arguments.length; Ue++)
        J += "&args[]=" + encodeURIComponent(arguments[Ue]);
    }
    return "Minified React error #" + ae + "; visit " + J + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Se() {
  }
  var M = {
    d: {
      f: Se,
      r: function() {
        throw Error(te(522));
      },
      D: Se,
      C: Se,
      L: Se,
      m: Se,
      X: Se,
      S: Se,
      M: Se
    },
    p: 0,
    findDOMNode: null
  }, Ae = /* @__PURE__ */ Symbol.for("react.portal");
  function de(ae, J, Ue) {
    var G = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Ae,
      key: G == null ? null : "" + G,
      children: ae,
      containerInfo: J,
      implementation: Ue
    };
  }
  var $e = Y.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function I(ae, J) {
    if (ae === "font") return "";
    if (typeof J == "string")
      return J === "use-credentials" ? J : "";
  }
  return Ia.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M, Ia.createPortal = function(ae, J) {
    var Ue = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!J || J.nodeType !== 1 && J.nodeType !== 9 && J.nodeType !== 11)
      throw Error(te(299));
    return de(ae, J, null, Ue);
  }, Ia.flushSync = function(ae) {
    var J = $e.T, Ue = M.p;
    try {
      if ($e.T = null, M.p = 2, ae) return ae();
    } finally {
      $e.T = J, M.p = Ue, M.d.f();
    }
  }, Ia.preconnect = function(ae, J) {
    typeof ae == "string" && (J ? (J = J.crossOrigin, J = typeof J == "string" ? J === "use-credentials" ? J : "" : void 0) : J = null, M.d.C(ae, J));
  }, Ia.prefetchDNS = function(ae) {
    typeof ae == "string" && M.d.D(ae);
  }, Ia.preinit = function(ae, J) {
    if (typeof ae == "string" && J && typeof J.as == "string") {
      var Ue = J.as, G = I(Ue, J.crossOrigin), H = typeof J.integrity == "string" ? J.integrity : void 0, ie = typeof J.fetchPriority == "string" ? J.fetchPriority : void 0;
      Ue === "style" ? M.d.S(
        ae,
        typeof J.precedence == "string" ? J.precedence : void 0,
        {
          crossOrigin: G,
          integrity: H,
          fetchPriority: ie
        }
      ) : Ue === "script" && M.d.X(ae, {
        crossOrigin: G,
        integrity: H,
        fetchPriority: ie,
        nonce: typeof J.nonce == "string" ? J.nonce : void 0
      });
    }
  }, Ia.preinitModule = function(ae, J) {
    if (typeof ae == "string")
      if (typeof J == "object" && J !== null) {
        if (J.as == null || J.as === "script") {
          var Ue = I(
            J.as,
            J.crossOrigin
          );
          M.d.M(ae, {
            crossOrigin: Ue,
            integrity: typeof J.integrity == "string" ? J.integrity : void 0,
            nonce: typeof J.nonce == "string" ? J.nonce : void 0
          });
        }
      } else J == null && M.d.M(ae);
  }, Ia.preload = function(ae, J) {
    if (typeof ae == "string" && typeof J == "object" && J !== null && typeof J.as == "string") {
      var Ue = J.as, G = I(Ue, J.crossOrigin);
      M.d.L(ae, Ue, {
        crossOrigin: G,
        integrity: typeof J.integrity == "string" ? J.integrity : void 0,
        nonce: typeof J.nonce == "string" ? J.nonce : void 0,
        type: typeof J.type == "string" ? J.type : void 0,
        fetchPriority: typeof J.fetchPriority == "string" ? J.fetchPriority : void 0,
        referrerPolicy: typeof J.referrerPolicy == "string" ? J.referrerPolicy : void 0,
        imageSrcSet: typeof J.imageSrcSet == "string" ? J.imageSrcSet : void 0,
        imageSizes: typeof J.imageSizes == "string" ? J.imageSizes : void 0,
        media: typeof J.media == "string" ? J.media : void 0
      });
    }
  }, Ia.preloadModule = function(ae, J) {
    if (typeof ae == "string")
      if (J) {
        var Ue = I(J.as, J.crossOrigin);
        M.d.m(ae, {
          as: typeof J.as == "string" && J.as !== "script" ? J.as : void 0,
          crossOrigin: Ue,
          integrity: typeof J.integrity == "string" ? J.integrity : void 0
        });
      } else M.d.m(ae);
  }, Ia.requestFormReset = function(ae) {
    M.d.r(ae);
  }, Ia.unstable_batchedUpdates = function(ae, J) {
    return ae(J);
  }, Ia.useFormState = function(ae, J, Ue) {
    return $e.H.useFormState(ae, J, Ue);
  }, Ia.useFormStatus = function() {
    return $e.H.useHostTransitionStatus();
  }, Ia.version = "19.2.3", Ia;
}
var Pa = {};
var X2;
function DT() {
  return X2 || (X2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function Y() {
    }
    function te(G) {
      return "" + G;
    }
    function Se(G, H, ie) {
      var je = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        te(je);
        var gt = !1;
      } catch {
        gt = !0;
      }
      return gt && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && je[Symbol.toStringTag] || je.constructor.name || "Object"
      ), te(je)), {
        $$typeof: J,
        key: je == null ? null : "" + je,
        children: G,
        containerInfo: H,
        implementation: ie
      };
    }
    function M(G, H) {
      if (G === "font") return "";
      if (typeof H == "string")
        return H === "use-credentials" ? H : "";
    }
    function Ae(G) {
      return G === null ? "`null`" : G === void 0 ? "`undefined`" : G === "" ? "an empty string" : 'something with type "' + typeof G + '"';
    }
    function de(G) {
      return G === null ? "`null`" : G === void 0 ? "`undefined`" : G === "" ? "an empty string" : typeof G == "string" ? JSON.stringify(G) : typeof G == "number" ? "`" + G + "`" : 'something with type "' + typeof G + '"';
    }
    function $e() {
      var G = Ue.H;
      return G === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), G;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var I = bm(), ae = {
      d: {
        f: Y,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: Y,
        C: Y,
        L: Y,
        m: Y,
        X: Y,
        S: Y,
        M: Y
      },
      p: 0,
      findDOMNode: null
    }, J = /* @__PURE__ */ Symbol.for("react.portal"), Ue = I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), Pa.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ae, Pa.createPortal = function(G, H) {
      var ie = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!H || H.nodeType !== 1 && H.nodeType !== 9 && H.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return Se(G, H, null, ie);
    }, Pa.flushSync = function(G) {
      var H = Ue.T, ie = ae.p;
      try {
        if (Ue.T = null, ae.p = 2, G)
          return G();
      } finally {
        Ue.T = H, ae.p = ie, ae.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, Pa.preconnect = function(G, H) {
      typeof G == "string" && G ? H != null && typeof H != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        de(H)
      ) : H != null && typeof H.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        Ae(H.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ae(G)
      ), typeof G == "string" && (H ? (H = H.crossOrigin, H = typeof H == "string" ? H === "use-credentials" ? H : "" : void 0) : H = null, ae.d.C(G, H));
    }, Pa.prefetchDNS = function(G) {
      if (typeof G != "string" || !G)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          Ae(G)
        );
      else if (1 < arguments.length) {
        var H = arguments[1];
        typeof H == "object" && H.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          de(H)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          de(H)
        );
      }
      typeof G == "string" && ae.d.D(G);
    }, Pa.preinit = function(G, H) {
      if (typeof G == "string" && G ? H == null || typeof H != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        de(H)
      ) : H.as !== "style" && H.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        de(H.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        Ae(G)
      ), typeof G == "string" && H && typeof H.as == "string") {
        var ie = H.as, je = M(ie, H.crossOrigin), gt = typeof H.integrity == "string" ? H.integrity : void 0, ut = typeof H.fetchPriority == "string" ? H.fetchPriority : void 0;
        ie === "style" ? ae.d.S(
          G,
          typeof H.precedence == "string" ? H.precedence : void 0,
          {
            crossOrigin: je,
            integrity: gt,
            fetchPriority: ut
          }
        ) : ie === "script" && ae.d.X(G, {
          crossOrigin: je,
          integrity: gt,
          fetchPriority: ut,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0
        });
      }
    }, Pa.preinitModule = function(G, H) {
      var ie = "";
      typeof G == "string" && G || (ie += " The `href` argument encountered was " + Ae(G) + "."), H !== void 0 && typeof H != "object" ? ie += " The `options` argument encountered was " + Ae(H) + "." : H && "as" in H && H.as !== "script" && (ie += " The `as` option encountered was " + de(H.as) + "."), ie ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ie
      ) : (ie = H && typeof H.as == "string" ? H.as : "script", ie) === "script" || (ie = de(ie), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ie,
        G
      )), typeof G == "string" && (typeof H == "object" && H !== null ? (H.as == null || H.as === "script") && (ie = M(
        H.as,
        H.crossOrigin
      ), ae.d.M(G, {
        crossOrigin: ie,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0,
        nonce: typeof H.nonce == "string" ? H.nonce : void 0
      })) : H == null && ae.d.M(G));
    }, Pa.preload = function(G, H) {
      var ie = "";
      if (typeof G == "string" && G || (ie += " The `href` argument encountered was " + Ae(G) + "."), H == null || typeof H != "object" ? ie += " The `options` argument encountered was " + Ae(H) + "." : typeof H.as == "string" && H.as || (ie += " The `as` option encountered was " + Ae(H.as) + "."), ie && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ie
      ), typeof G == "string" && typeof H == "object" && H !== null && typeof H.as == "string") {
        ie = H.as;
        var je = M(
          ie,
          H.crossOrigin
        );
        ae.d.L(G, ie, {
          crossOrigin: je,
          integrity: typeof H.integrity == "string" ? H.integrity : void 0,
          nonce: typeof H.nonce == "string" ? H.nonce : void 0,
          type: typeof H.type == "string" ? H.type : void 0,
          fetchPriority: typeof H.fetchPriority == "string" ? H.fetchPriority : void 0,
          referrerPolicy: typeof H.referrerPolicy == "string" ? H.referrerPolicy : void 0,
          imageSrcSet: typeof H.imageSrcSet == "string" ? H.imageSrcSet : void 0,
          imageSizes: typeof H.imageSizes == "string" ? H.imageSizes : void 0,
          media: typeof H.media == "string" ? H.media : void 0
        });
      }
    }, Pa.preloadModule = function(G, H) {
      var ie = "";
      typeof G == "string" && G || (ie += " The `href` argument encountered was " + Ae(G) + "."), H !== void 0 && typeof H != "object" ? ie += " The `options` argument encountered was " + Ae(H) + "." : H && "as" in H && typeof H.as != "string" && (ie += " The `as` option encountered was " + Ae(H.as) + "."), ie && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ie
      ), typeof G == "string" && (H ? (ie = M(
        H.as,
        H.crossOrigin
      ), ae.d.m(G, {
        as: typeof H.as == "string" && H.as !== "script" ? H.as : void 0,
        crossOrigin: ie,
        integrity: typeof H.integrity == "string" ? H.integrity : void 0
      })) : ae.d.m(G));
    }, Pa.requestFormReset = function(G) {
      ae.d.r(G);
    }, Pa.unstable_batchedUpdates = function(G, H) {
      return G(H);
    }, Pa.useFormState = function(G, H, ie) {
      return $e().useFormState(G, H, ie);
    }, Pa.useFormStatus = function() {
      return $e().useHostTransitionStatus();
    }, Pa.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Pa;
}
var L2;
function k2() {
  if (L2) return Kg.exports;
  L2 = 1;
  function Y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y);
      } catch (te) {
        console.error(te);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (Y(), Kg.exports = RT()) : Kg.exports = DT(), Kg.exports;
}
var Q2;
function _T() {
  if (Q2) return gp;
  Q2 = 1;
  var Y = $2(), te = bm(), Se = k2();
  function M(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Ae(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function de(l) {
    var n = l, u = l;
    if (l.alternate) for (; n.return; ) n = n.return;
    else {
      l = n;
      do
        n = l, (n.flags & 4098) !== 0 && (u = n.return), l = n.return;
      while (l);
    }
    return n.tag === 3 ? u : null;
  }
  function $e(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function I(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function ae(l) {
    if (de(l) !== l)
      throw Error(M(188));
  }
  function J(l) {
    var n = l.alternate;
    if (!n) {
      if (n = de(l), n === null) throw Error(M(188));
      return n !== l ? null : l;
    }
    for (var u = l, c = n; ; ) {
      var s = u.return;
      if (s === null) break;
      var r = s.alternate;
      if (r === null) {
        if (c = s.return, c !== null) {
          u = c;
          continue;
        }
        break;
      }
      if (s.child === r.child) {
        for (r = s.child; r; ) {
          if (r === u) return ae(s), l;
          if (r === c) return ae(s), n;
          r = r.sibling;
        }
        throw Error(M(188));
      }
      if (u.return !== c.return) u = s, c = r;
      else {
        for (var m = !1, g = s.child; g; ) {
          if (g === u) {
            m = !0, u = s, c = r;
            break;
          }
          if (g === c) {
            m = !0, c = s, u = r;
            break;
          }
          g = g.sibling;
        }
        if (!m) {
          for (g = r.child; g; ) {
            if (g === u) {
              m = !0, u = r, c = s;
              break;
            }
            if (g === c) {
              m = !0, c = r, u = s;
              break;
            }
            g = g.sibling;
          }
          if (!m) throw Error(M(189));
        }
      }
      if (u.alternate !== c) throw Error(M(190));
    }
    if (u.tag !== 3) throw Error(M(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ue(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ue(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var G = Object.assign, H = /* @__PURE__ */ Symbol.for("react.element"), ie = /* @__PURE__ */ Symbol.for("react.transitional.element"), je = /* @__PURE__ */ Symbol.for("react.portal"), gt = /* @__PURE__ */ Symbol.for("react.fragment"), ut = /* @__PURE__ */ Symbol.for("react.strict_mode"), Je = /* @__PURE__ */ Symbol.for("react.profiler"), hl = /* @__PURE__ */ Symbol.for("react.consumer"), Tt = /* @__PURE__ */ Symbol.for("react.context"), Ot = /* @__PURE__ */ Symbol.for("react.forward_ref"), Yt = /* @__PURE__ */ Symbol.for("react.suspense"), Gt = /* @__PURE__ */ Symbol.for("react.suspense_list"), De = /* @__PURE__ */ Symbol.for("react.memo"), Qe = /* @__PURE__ */ Symbol.for("react.lazy"), st = /* @__PURE__ */ Symbol.for("react.activity"), re = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Bt = Symbol.iterator;
  function he(l) {
    return l === null || typeof l != "object" ? null : (l = Bt && l[Bt] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Be = /* @__PURE__ */ Symbol.for("react.client.reference");
  function wt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Be ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case gt:
        return "Fragment";
      case Je:
        return "Profiler";
      case ut:
        return "StrictMode";
      case Yt:
        return "Suspense";
      case Gt:
        return "SuspenseList";
      case st:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case je:
          return "Portal";
        case Tt:
          return l.displayName || "Context";
        case hl:
          return (l._context.displayName || "Context") + ".Consumer";
        case Ot:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case De:
          return n = l.displayName || null, n !== null ? n : wt(l.type) || "Memo";
        case Qe:
          n = l._payload, l = l._init;
          try {
            return wt(l(n));
          } catch {
          }
      }
    return null;
  }
  var Rt = Array.isArray, z = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, pe = [], Ee = -1;
  function S(l) {
    return { current: l };
  }
  function N(l) {
    0 > Ee || (l.current = pe[Ee], pe[Ee] = null, Ee--);
  }
  function F(l, n) {
    Ee++, pe[Ee] = l.current, l.current = n;
  }
  var W = S(null), Te = S(null), Ye = S(null), ze = S(null);
  function $t(l, n) {
    switch (F(Ye, n), F(Te, l), F(W, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? xv(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = xv(n), l = r0(n, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    N(W), F(W, l);
  }
  function rt() {
    N(W), N(Te), N(Ye);
  }
  function Kt(l) {
    l.memoizedState !== null && F(ze, l);
    var n = W.current, u = r0(n, l.type);
    n !== u && (F(Te, l), F(W, u));
  }
  function fe(l) {
    Te.current === l && (N(W), N(Te)), ze.current === l && (N(ze), _r._currentValue = ee);
  }
  var ul, Al;
  function yt(l) {
    if (ul === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        ul = n && n[1] || "", Al = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ul + l + Al;
  }
  var kt = !1;
  function Oe(l, n) {
    if (!l || kt) return "";
    kt = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (L) {
                  var B = L;
                }
                Reflect.construct(l, [], $);
              } else {
                try {
                  $.call();
                } catch (L) {
                  B = L;
                }
                l.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                B = L;
              }
              ($ = l()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (L) {
            if (L && B && typeof L.stack == "string")
              return [L.stack, B.stack];
          }
          return [null, null];
        }
      };
      c.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        c.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        c.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var r = c.DetermineComponentFrameRoot(), m = r[0], g = r[1];
      if (m && g) {
        var A = m.split(`
`), j = g.split(`
`);
        for (s = c = 0; c < A.length && !A[c].includes("DetermineComponentFrameRoot"); )
          c++;
        for (; s < j.length && !j[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (c === A.length || s === j.length)
          for (c = A.length - 1, s = j.length - 1; 1 <= c && 0 <= s && A[c] !== j[s]; )
            s--;
        for (; 1 <= c && 0 <= s; c--, s--)
          if (A[c] !== j[s]) {
            if (c !== 1 || s !== 1)
              do
                if (c--, s--, 0 > s || A[c] !== j[s]) {
                  var V = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", l.displayName)), V;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      kt = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? yt(u) : "";
  }
  function Dt(l, n) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return yt(l.type);
      case 16:
        return yt("Lazy");
      case 13:
        return l.child !== n && n !== null ? yt("Suspense Fallback") : yt("Suspense");
      case 19:
        return yt("SuspenseList");
      case 0:
      case 15:
        return Oe(l.type, !1);
      case 11:
        return Oe(l.type.render, !1);
      case 1:
        return Oe(l.type, !0);
      case 31:
        return yt("Activity");
      default:
        return "";
    }
  }
  function da(l) {
    try {
      var n = "", u = null;
      do
        n += Dt(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var Wt = Object.prototype.hasOwnProperty, ce = Y.unstable_scheduleCallback, ua = Y.unstable_cancelCallback, Ll = Y.unstable_shouldYield, ll = Y.unstable_requestPaint, ke = Y.unstable_now, Xa = Y.unstable_getCurrentPriorityLevel, On = Y.unstable_ImmediatePriority, ha = Y.unstable_UserBlockingPriority, qt = Y.unstable_NormalPriority, Rn = Y.unstable_LowPriority, Gi = Y.unstable_IdlePriority, _c = Y.log, fi = Y.unstable_setDisableYieldValue, La = null, zl = null;
  function Aa(l) {
    if (typeof _c == "function" && fi(l), zl && typeof zl.setStrictMode == "function")
      try {
        zl.setStrictMode(La, l);
      } catch {
      }
  }
  var Ql = Math.clz32 ? Math.clz32 : C, wi = Math.log, v = Math.LN2;
  function C(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (wi(l) / v | 0) | 0;
  }
  var P = 256, le = 262144, ye = 4194304;
  function He(l) {
    var n = l & 42;
    if (n !== 0) return n;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function ve(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~r, c !== 0 ? s = He(c) : (m &= g, m !== 0 ? s = He(m) : u || (u = g & ~l, u !== 0 && (s = He(u))))) : (g = c & ~r, g !== 0 ? s = He(g) : m !== 0 ? s = He(m) : u || (u = c & ~l, u !== 0 && (s = He(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function it(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function Ve(l, n) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function ma() {
    var l = ye;
    return ye <<= 1, (ye & 62914560) === 0 && (ye = 4194304), l;
  }
  function Dn(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Xi(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Yo(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, A = l.expirationTimes, j = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var V = 31 - Ql(u), $ = 1 << V;
      g[V] = 0, A[V] = -1;
      var B = j[V];
      if (B !== null)
        for (j[V] = null, V = 0; V < B.length; V++) {
          var L = B[V];
          L !== null && (L.lane &= -536870913);
        }
      u &= ~$;
    }
    c !== 0 && ps(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function ps(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Ql(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function Su(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Ql(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function en(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : td(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function td(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function Em(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ld() {
    var l = Q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Mr(l.type));
  }
  function Tm(l, n) {
    var u = Q.p;
    try {
      return Q.p = l, n();
    } finally {
      Q.p = u;
    }
  }
  var Vn = Math.random().toString(36).slice(2), Xt = "__reactFiber$" + Vn, za = "__reactProps$" + Vn, Li = "__reactContainer$" + Vn, ad = "__reactEvents$" + Vn, Am = "__reactListeners$" + Vn, Tp = "__reactHandles$" + Vn, zm = "__reactResources$" + Vn, bu = "__reactMarker$" + Vn;
  function nd(l) {
    delete l[Xt], delete l[za], delete l[ad], delete l[Am], delete l[Tp];
  }
  function Mc(l) {
    var n = l[Xt];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[Li] || u[Xt]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = ru(l); l !== null; ) {
            if (u = l[Xt]) return u;
            l = ru(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Cc(l) {
    if (l = l[Xt] || l[Li]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function Go(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(M(33));
  }
  function Uc(l) {
    var n = l[zm];
    return n || (n = l[zm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ut(l) {
    l[bu] = !0;
  }
  var Hc = /* @__PURE__ */ new Set(), Qi = {};
  function Vi(l, n) {
    Eu(l, n), Eu(l + "Capture", n);
  }
  function Eu(l, n) {
    for (Qi[l] = n, l = 0; l < n.length; l++)
      Hc.add(n[l]);
  }
  var ud = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), id = {}, wo = {};
  function Xo(l) {
    return Wt.call(wo, l) ? !0 : Wt.call(id, l) ? !1 : ud.test(l) ? wo[l] = !0 : (id[l] = !0, !1);
  }
  function Lo(l, n, u) {
    if (Xo(n))
      if (u === null) l.removeAttribute(n);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(n);
            return;
          case "boolean":
            var c = n.toLowerCase().slice(0, 5);
            if (c !== "data-" && c !== "aria-") {
              l.removeAttribute(n);
              return;
            }
        }
        l.setAttribute(n, "" + u);
      }
  }
  function cd(l, n, u) {
    if (u === null) l.removeAttribute(n);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(n);
          return;
      }
      l.setAttribute(n, "" + u);
    }
  }
  function si(l, n, u, c) {
    if (c === null) l.removeAttribute(u);
    else {
      switch (typeof c) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(n, u, "" + c);
    }
  }
  function tn(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function od(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Om(l, n, u) {
    var c = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      n
    );
    if (!l.hasOwnProperty(n) && typeof c < "u" && typeof c.get == "function" && typeof c.set == "function") {
      var s = c.get, r = c.set;
      return Object.defineProperty(l, n, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(m) {
          u = "" + m, r.call(this, m);
        }
      }), Object.defineProperty(l, n, {
        enumerable: c.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(m) {
          u = "" + m;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[n];
        }
      };
    }
  }
  function fd(l) {
    if (!l._valueTracker) {
      var n = od(l) ? "checked" : "value";
      l._valueTracker = Om(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function Rm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = od(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function vs(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var $g = /[\n"\\]/g;
  function ln(l) {
    return l.replace(
      $g,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function gs(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + tn(n)) : l.value !== "" + tn(n) && (l.value = "" + tn(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Nc(l, m, tn(n)) : u != null ? Nc(l, m, tn(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + tn(g) : l.removeAttribute("name");
  }
  function Ss(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        fd(l);
        return;
      }
      u = u != null ? "" + tn(u) : "", n = n != null ? "" + tn(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), fd(l);
  }
  function Nc(l, n, u) {
    n === "number" && vs(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Qo(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + tn(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Dm(l, n, u) {
    if (n != null && (n = "" + tn(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + tn(u) : "";
  }
  function _m(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(M(92));
        if (Rt(c)) {
          if (1 < c.length) throw Error(M(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = tn(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), fd(l);
  }
  function Tu(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var Ap = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function zp(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || Ap.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function Op(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(M(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && zp(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && zp(l, r, n[r]);
  }
  function Mm(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var kg = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), bs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function _n(l) {
    return bs.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Zn() {
  }
  var sd = null;
  function rd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Au = null, xc = null;
  function Es(l) {
    var n = Cc(l);
    if (n && (l = n.stateNode)) {
      var u = l[za] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (gs(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), n = u.name, u.type === "radio" && n != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + ln(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[za] || null;
                if (!s) throw Error(M(90));
                gs(
                  c,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (n = 0; n < u.length; n++)
              c = u[n], c.form === l.form && Rm(c);
          }
          break e;
        case "textarea":
          Dm(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Qo(l, !!u.multiple, n, !1);
      }
    }
  }
  var Vo = !1;
  function Cm(l, n, u) {
    if (Vo) return l(n, u);
    Vo = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Vo = !1, (Au !== null || xc !== null) && (Df(), Au && (n = Au, l = xc, xc = Au = null, Es(n), l)))
        for (n = 0; n < l.length; n++) Es(l[n]);
    }
  }
  function Vl(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[za] || null;
    if (c === null) return null;
    u = c[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (c = !c.disabled) || (l = l.type, c = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !c;
        break e;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        M(231, n, typeof u)
      );
    return u;
  }
  var ri = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ts = !1;
  if (ri)
    try {
      var Zo = {};
      Object.defineProperty(Zo, "passive", {
        get: function() {
          Ts = !0;
        }
      }), window.addEventListener("test", Zo, Zo), window.removeEventListener("test", Zo, Zo);
    } catch {
      Ts = !1;
    }
  var di = null, Um = null, dd = null;
  function Hm() {
    if (dd) return dd;
    var l, n = Um, u = n.length, c, s = "value" in di ? di.value : di.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return dd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function hd(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function As() {
    return !0;
  }
  function Rp() {
    return !1;
  }
  function ia(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? As : Rp, this.isPropagationStopped = Rp, this;
    }
    return G(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = As);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = As);
      },
      persist: function() {
      },
      isPersistent: As
    }), n;
  }
  var Zi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zs = ia(Zi), Jo = G({}, Zi, { view: 0, detail: 0 }), Wg = ia(Jo), Nm, xm, Os, md = G({}, Jo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Mn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Os && (Os && l.type === "mousemove" ? (Nm = l.screenX - Os.screenX, xm = l.screenY - Os.screenY) : xm = Nm = 0, Os = l), Nm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : xm;
    }
  }), Ko = ia(md), Dp = G({}, md, { dataTransfer: 0 }), _p = ia(Dp), Mp = G({}, Jo, { relatedTarget: 0 }), yd = ia(Mp), jm = G({}, Zi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Cp = ia(jm), jc = G({}, Zi, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Bc = ia(jc), Jn = G({}, Zi, { data: 0 }), Up = ia(Jn), Bm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, zu = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Hp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Kn(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Hp[l]) ? !!n[l] : !1;
  }
  function Mn() {
    return Kn;
  }
  var pd = G({}, Jo, {
    key: function(l) {
      if (l.key) {
        var n = Bm[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = hd(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? zu[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Mn,
    charCode: function(l) {
      return l.type === "keypress" ? hd(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? hd(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), vd = ia(pd), qm = G({}, md, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), $n = ia(qm), Fg = G({}, Jo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Mn
  }), Np = ia(Fg), xp = G({}, Zi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ig = ia(xp), Ym = G({}, md, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pg = ia(Ym), jp = G({}, Zi, {
    newState: 0,
    oldState: 0
  }), Gm = ia(jp), gd = [9, 13, 27, 32], $o = ri && "CompositionEvent" in window, qc = null;
  ri && "documentMode" in document && (qc = document.documentMode);
  var ya = ri && "TextEvent" in window && !qc, wm = ri && (!$o || qc && 8 < qc && 11 >= qc), Rs = " ", Ji = !1;
  function Sd(l, n) {
    switch (l) {
      case "keyup":
        return gd.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Xm(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Yc = !1;
  function Bp(l, n) {
    switch (l) {
      case "compositionend":
        return Xm(n);
      case "keypress":
        return n.which !== 32 ? null : (Ji = !0, Rs);
      case "textInput":
        return l = n.data, l === Rs && Ji ? null : l;
      default:
        return null;
    }
  }
  function eS(l, n) {
    if (Yc)
      return l === "compositionend" || !$o && Sd(l, n) ? (l = Hm(), dd = Um = di = null, Yc = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return wm && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Lm = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Ou(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Lm[l.type] : n === "textarea";
  }
  function Qm(l, n, u, c) {
    Au ? xc ? xc.push(c) : xc = [c] : Au = c, n = Tr(n, "onChange"), 0 < n.length && (u = new zs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Gc = null, Ki = null;
  function wc(l) {
    Uv(l, 0);
  }
  function ko(l) {
    var n = Go(l);
    if (Rm(n)) return l;
  }
  function Vm(l, n) {
    if (l === "change") return n;
  }
  var bd = !1;
  if (ri) {
    var Oa;
    if (ri) {
      var kn = "oninput" in document;
      if (!kn) {
        var Zm = document.createElement("div");
        Zm.setAttribute("oninput", "return;"), kn = typeof Zm.oninput == "function";
      }
      Oa = kn;
    } else Oa = !1;
    bd = Oa && (!document.documentMode || 9 < document.documentMode);
  }
  function Ed() {
    Gc && (Gc.detachEvent("onpropertychange", Td), Ki = Gc = null);
  }
  function Td(l) {
    if (l.propertyName === "value" && ko(Ki)) {
      var n = [];
      Qm(
        n,
        Ki,
        l,
        rd(l)
      ), Cm(wc, n);
    }
  }
  function qp(l, n, u) {
    l === "focusin" ? (Ed(), Gc = n, Ki = u, Gc.attachEvent("onpropertychange", Td)) : l === "focusout" && Ed();
  }
  function Yp(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return ko(Ki);
  }
  function $i(l, n) {
    if (l === "click") return ko(n);
  }
  function Xc(l, n) {
    if (l === "input" || l === "change")
      return ko(n);
  }
  function Gp(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var pa = typeof Object.is == "function" ? Object.is : Gp;
  function Cn(l, n) {
    if (pa(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Wt.call(n, s) || !pa(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function Jm(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Km(l, n) {
    var u = Jm(l);
    l = 0;
    for (var c; u; ) {
      if (u.nodeType === 3) {
        if (c = l + u.textContent.length, l <= n && c >= n)
          return { node: u, offset: n - l };
        l = c;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Jm(u);
    }
  }
  function Lc(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Lc(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function ki(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = vs(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = vs(l.document);
    }
    return n;
  }
  function Ds(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var _s = ri && "documentMode" in document && 11 >= document.documentMode, Wi = null, Wo = null, Un = null, Wn = !1;
  function Ad(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Wn || Wi == null || Wi !== vs(c) || (c = Wi, "selectionStart" in c && Ds(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), Un && Cn(Un, c) || (Un = c, c = Tr(Wo, "onSelect"), 0 < c.length && (n = new zs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Wi)));
  }
  function hi(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var Fn = {
    animationend: hi("Animation", "AnimationEnd"),
    animationiteration: hi("Animation", "AnimationIteration"),
    animationstart: hi("Animation", "AnimationStart"),
    transitionrun: hi("Transition", "TransitionRun"),
    transitionstart: hi("Transition", "TransitionStart"),
    transitioncancel: hi("Transition", "TransitionCancel"),
    transitionend: hi("Transition", "TransitionEnd")
  }, Fo = {}, Fi = {};
  ri && (Fi = document.createElement("div").style, "AnimationEvent" in window || (delete Fn.animationend.animation, delete Fn.animationiteration.animation, delete Fn.animationstart.animation), "TransitionEvent" in window || delete Fn.transitionend.transition);
  function _t(l) {
    if (Fo[l]) return Fo[l];
    if (!Fn[l]) return l;
    var n = Fn[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in Fi)
        return Fo[l] = n[u];
    return l;
  }
  var Ms = _t("animationend"), $m = _t("animationiteration"), zd = _t("animationstart"), Qc = _t("transitionrun"), Cs = _t("transitionstart"), Ru = _t("transitioncancel"), wp = _t("transitionend"), Du = /* @__PURE__ */ new Map(), Io = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Io.push("scrollEnd");
  function Ra(l, n) {
    Du.set(l, n), Vi(n, [l]);
  }
  var Vc = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, il = [], Zl = 0, Hn = 0;
  function an() {
    for (var l = Zl, n = Hn = Zl = 0; n < l; ) {
      var u = il[n];
      il[n++] = null;
      var c = il[n];
      il[n++] = null;
      var s = il[n];
      il[n++] = null;
      var r = il[n];
      if (il[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Od(u, s, r);
    }
  }
  function nn(l, n, u, c) {
    il[Zl++] = l, il[Zl++] = n, il[Zl++] = u, il[Zl++] = c, Hn |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Nn(l, n, u, c) {
    return nn(l, n, u, c), Us(l);
  }
  function mi(l, n) {
    return nn(l, null, null, n), Us(l);
  }
  function Od(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Ql(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Us(l) {
    if (50 < Rf)
      throw Rf = 0, hr = null, Error(M(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var Da = {};
  function Xp(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function gl(l, n, u, c) {
    return new Xp(l, n, u, c);
  }
  function Zc(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function yi(l, n) {
    var u = l.alternate;
    return u === null ? (u = gl(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function km(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Rd(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") Zc(l) && (m = 1);
    else if (typeof l == "string")
      m = g0(
        l,
        u,
        W.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case st:
          return l = gl(31, u, n, s), l.elementType = st, l.lanes = r, l;
        case gt:
          return pi(u.children, s, r, n);
        case ut:
          m = 8, s |= 24;
          break;
        case Je:
          return l = gl(12, u, n, s | 2), l.elementType = Je, l.lanes = r, l;
        case Yt:
          return l = gl(13, u, n, s), l.elementType = Yt, l.lanes = r, l;
        case Gt:
          return l = gl(19, u, n, s), l.elementType = Gt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Tt:
                m = 10;
                break e;
              case hl:
                m = 9;
                break e;
              case Ot:
                m = 11;
                break e;
              case De:
                m = 14;
                break e;
              case Qe:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            M(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = gl(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function pi(l, n, u, c) {
    return l = gl(7, l, c, n), l.lanes = u, l;
  }
  function Po(l, n, u) {
    return l = gl(6, l, null, n), l.lanes = u, l;
  }
  function Wm(l) {
    var n = gl(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Dd(l, n, u) {
    return n = gl(
      4,
      l.children !== null ? l.children : [],
      l.key,
      n
    ), n.lanes = u, n.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, n;
  }
  var Fm = /* @__PURE__ */ new WeakMap();
  function un(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = Fm.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: da(n)
      }, Fm.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: da(n)
    };
  }
  var cn = [], Jc = 0, Hs = null, Ol = 0, Qa = [], _a = 0, In = null, Va = 1, Pn = "";
  function xn(l, n) {
    cn[Jc++] = Ol, cn[Jc++] = Hs, Hs = l, Ol = n;
  }
  function Im(l, n, u) {
    Qa[_a++] = Va, Qa[_a++] = Pn, Qa[_a++] = In, In = l;
    var c = Va;
    l = Pn;
    var s = 32 - Ql(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Ql(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, Va = 1 << 32 - Ql(n) + s | u << s | c, Pn = r + l;
    } else
      Va = 1 << r | u << s | c, Pn = l;
  }
  function ef(l) {
    l.return !== null && (xn(l, 1), Im(l, 1, 0));
  }
  function _d(l) {
    for (; l === Hs; )
      Hs = cn[--Jc], cn[Jc] = null, Ol = cn[--Jc], cn[Jc] = null;
    for (; l === In; )
      In = Qa[--_a], Qa[_a] = null, Pn = Qa[--_a], Qa[_a] = null, Va = Qa[--_a], Qa[_a] = null;
  }
  function Ns(l, n) {
    Qa[_a++] = Va, Qa[_a++] = Pn, Qa[_a++] = In, Va = n.id, Pn = n.overflow, In = l;
  }
  var Jl = null, Ft = null, dt = !1, _u = null, jl = !1, Mu = Error(M(519));
  function jn(l) {
    var n = Error(
      M(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw lf(un(n, l)), Mu;
  }
  function xs(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Xt] = l, n[za] = c, u) {
      case "dialog":
        ft("cancel", n), ft("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ft("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Hf.length; u++)
          ft(Hf[u], n);
        break;
      case "source":
        ft("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ft("error", n), ft("load", n);
        break;
      case "details":
        ft("toggle", n);
        break;
      case "input":
        ft("invalid", n), Ss(
          n,
          c.value,
          c.defaultValue,
          c.checked,
          c.defaultChecked,
          c.type,
          c.name,
          !0
        );
        break;
      case "select":
        ft("invalid", n);
        break;
      case "textarea":
        ft("invalid", n), _m(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || c0(n.textContent, u) ? (c.popover != null && (ft("beforetoggle", n), ft("toggle", n)), c.onScroll != null && ft("scroll", n), c.onScrollEnd != null && ft("scrollend", n), c.onClick != null && (n.onclick = Zn), n = !0) : n = !1, n || jn(l, !0);
  }
  function tf(l) {
    for (Jl = l.return; Jl; )
      switch (Jl.tag) {
        case 5:
        case 31:
        case 13:
          jl = !1;
          return;
        case 27:
        case 3:
          jl = !0;
          return;
        default:
          Jl = Jl.return;
      }
  }
  function Cu(l) {
    if (l !== Jl) return !1;
    if (!dt) return tf(l), dt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || xf(l.type, l.memoizedProps)), u = !u), u && Ft && jn(l), tf(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(317));
      Ft = Uh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(317));
      Ft = Uh(l);
    } else
      n === 27 ? (n = Ft, su(l.type) ? (l = Or, Or = null, Ft = l) : Ft = n) : Ft = Jl ? Ya(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ii() {
    Ft = Jl = null, dt = !1;
  }
  function Pm() {
    var l = _u;
    return l !== null && (pl === null ? pl = l : pl.push.apply(
      pl,
      l
    ), _u = null), l;
  }
  function lf(l) {
    _u === null ? _u = [l] : _u.push(l);
  }
  var Md = S(null), vi = null, eu = null;
  function Ma(l, n, u) {
    F(Md, n._currentValue), n._currentValue = u;
  }
  function tu(l) {
    l._currentValue = Md.current, N(Md);
  }
  function Cd(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function Uu(l, n, u, c) {
    var s = l.child;
    for (s !== null && (s.return = l); s !== null; ) {
      var r = s.dependencies;
      if (r !== null) {
        var m = s.child;
        r = r.firstContext;
        e: for (; r !== null; ) {
          var g = r;
          r = s;
          for (var A = 0; A < n.length; A++)
            if (g.context === n[A]) {
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Cd(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(M(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Cd(m, u, l), m = null;
      } else m = s.child;
      if (m !== null) m.return = s;
      else
        for (m = s; m !== null; ) {
          if (m === l) {
            m = null;
            break;
          }
          if (s = m.sibling, s !== null) {
            s.return = m.return, m = s;
            break;
          }
          m = m.return;
        }
      s = m;
    }
  }
  function Kl(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(M(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          pa(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === ze.current) {
        if (m = s.alternate, m === null) throw Error(M(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(_r) : l = [_r]);
      }
      s = s.return;
    }
    l !== null && Uu(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function Kc(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!pa(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function we(l) {
    vi = l, eu = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function k(l) {
    return js(vi, l);
  }
  function gi(l, n) {
    return vi === null && we(l), js(l, n);
  }
  function js(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, eu === null) {
      if (l === null) throw Error(M(308));
      eu = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else eu = eu.next = n;
    return u;
  }
  var Sl = typeof AbortController < "u" ? AbortController : function() {
    var l = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(u, c) {
        l.push(c);
      }
    };
    this.abort = function() {
      n.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, ey = Y.unstable_scheduleCallback, ty = Y.unstable_NormalPriority, Rl = {
    $$typeof: Tt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bs() {
    return {
      controller: new Sl(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function qs(l) {
    l.refCount--, l.refCount === 0 && ey(ty, function() {
      l.controller.abort();
    });
  }
  var $c = null, Ys = 0, Pi = 0, Ul = null;
  function Ht(l, n) {
    if ($c === null) {
      var u = $c = [];
      Ys = 0, Pi = Ah(), Ul = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return Ys++, n.then(Gs, Gs), n;
  }
  function Gs() {
    if (--Ys === 0 && $c !== null) {
      Ul !== null && (Ul.status = "fulfilled");
      var l = $c;
      $c = null, Pi = 0, Ul = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function ws(l, n) {
    var u = [], c = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        u.push(s);
      }
    };
    return l.then(
      function() {
        c.status = "fulfilled", c.value = n;
        for (var s = 0; s < u.length; s++) (0, u[s])(n);
      },
      function(s) {
        for (c.status = "rejected", c.reason = s, s = 0; s < u.length; s++)
          (0, u[s])(void 0);
      }
    ), c;
  }
  var Si = z.S;
  z.S = function(l, n) {
    $y = ke(), typeof n == "object" && n !== null && typeof n.then == "function" && Ht(l, n), Si !== null && Si(l, n);
  };
  var on = S(null);
  function fn() {
    var l = on.current;
    return l !== null ? l : Qt.pooledCache;
  }
  function af(l, n) {
    n === null ? F(on, on.current) : F(on, n.pool);
  }
  function kc() {
    var l = fn();
    return l === null ? null : { parent: Rl._currentValue, pool: l };
  }
  var ec = Error(M(460)), Wc = Error(M(474)), nf = Error(M(542)), Fc = { then: function() {
  } };
  function ly(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function ay(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Zn, Zn), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, Ud(l), l;
      default:
        if (typeof n.status == "string") n.then(Zn, Zn);
        else {
          if (l = Qt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(M(482));
          l = n, l.status = "pending", l.then(
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "fulfilled", s.value = c;
              }
            },
            function(c) {
              if (n.status === "pending") {
                var s = n;
                s.status = "rejected", s.reason = c;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw l = n.reason, Ud(l), l;
        }
        throw lc = n, ec;
    }
  }
  function tc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (lc = u, ec) : u;
    }
  }
  var lc = null;
  function ny() {
    if (lc === null) throw Error(M(459));
    var l = lc;
    return lc = null, l;
  }
  function Ud(l) {
    if (l === ec || l === nf)
      throw Error(M(483));
  }
  var ac = null, Ic = 0;
  function Xs(l) {
    var n = Ic;
    return Ic += 1, ac === null && (ac = []), ay(ac, l, n);
  }
  function uf(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Ls(l, n) {
    throw n.$$typeof === H ? Error(M(525)) : (l = Object.prototype.toString.call(n), Error(
      M(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function Lp(l) {
    function n(U, D) {
      if (l) {
        var x = U.deletions;
        x === null ? (U.deletions = [D], U.flags |= 16) : x.push(D);
      }
    }
    function u(U, D) {
      if (!l) return null;
      for (; D !== null; )
        n(U, D), D = D.sibling;
      return null;
    }
    function c(U) {
      for (var D = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? D.set(U.key, U) : D.set(U.index, U), U = U.sibling;
      return D;
    }
    function s(U, D) {
      return U = yi(U, D), U.index = 0, U.sibling = null, U;
    }
    function r(U, D, x) {
      return U.index = x, l ? (x = U.alternate, x !== null ? (x = x.index, x < D ? (U.flags |= 67108866, D) : x) : (U.flags |= 67108866, D)) : (U.flags |= 1048576, D);
    }
    function m(U) {
      return l && U.alternate === null && (U.flags |= 67108866), U;
    }
    function g(U, D, x, K) {
      return D === null || D.tag !== 6 ? (D = Po(x, U.mode, K), D.return = U, D) : (D = s(D, x), D.return = U, D);
    }
    function A(U, D, x, K) {
      var Re = x.type;
      return Re === gt ? V(
        U,
        D,
        x.props.children,
        K,
        x.key
      ) : D !== null && (D.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Qe && tc(Re) === D.type) ? (D = s(D, x.props), uf(D, x), D.return = U, D) : (D = Rd(
        x.type,
        x.key,
        x.props,
        null,
        U.mode,
        K
      ), uf(D, x), D.return = U, D);
    }
    function j(U, D, x, K) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== x.containerInfo || D.stateNode.implementation !== x.implementation ? (D = Dd(x, U.mode, K), D.return = U, D) : (D = s(D, x.children || []), D.return = U, D);
    }
    function V(U, D, x, K, Re) {
      return D === null || D.tag !== 7 ? (D = pi(
        x,
        U.mode,
        K,
        Re
      ), D.return = U, D) : (D = s(D, x), D.return = U, D);
    }
    function $(U, D, x) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = Po(
          "" + D,
          U.mode,
          x
        ), D.return = U, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case ie:
            return x = Rd(
              D.type,
              D.key,
              D.props,
              null,
              U.mode,
              x
            ), uf(x, D), x.return = U, x;
          case je:
            return D = Dd(
              D,
              U.mode,
              x
            ), D.return = U, D;
          case Qe:
            return D = tc(D), $(U, D, x);
        }
        if (Rt(D) || he(D))
          return D = pi(
            D,
            U.mode,
            x,
            null
          ), D.return = U, D;
        if (typeof D.then == "function")
          return $(U, Xs(D), x);
        if (D.$$typeof === Tt)
          return $(
            U,
            gi(U, D),
            x
          );
        Ls(U, D);
      }
      return null;
    }
    function B(U, D, x, K) {
      var Re = D !== null ? D.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return Re !== null ? null : g(U, D, "" + x, K);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ie:
            return x.key === Re ? A(U, D, x, K) : null;
          case je:
            return x.key === Re ? j(U, D, x, K) : null;
          case Qe:
            return x = tc(x), B(U, D, x, K);
        }
        if (Rt(x) || he(x))
          return Re !== null ? null : V(U, D, x, K, null);
        if (typeof x.then == "function")
          return B(
            U,
            D,
            Xs(x),
            K
          );
        if (x.$$typeof === Tt)
          return B(
            U,
            D,
            gi(U, x),
            K
          );
        Ls(U, x);
      }
      return null;
    }
    function L(U, D, x, K, Re) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return U = U.get(x) || null, g(D, U, "" + K, Re);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case ie:
            return U = U.get(
              K.key === null ? x : K.key
            ) || null, A(D, U, K, Re);
          case je:
            return U = U.get(
              K.key === null ? x : K.key
            ) || null, j(D, U, K, Re);
          case Qe:
            return K = tc(K), L(
              U,
              D,
              x,
              K,
              Re
            );
        }
        if (Rt(K) || he(K))
          return U = U.get(x) || null, V(D, U, K, Re, null);
        if (typeof K.then == "function")
          return L(
            U,
            D,
            x,
            Xs(K),
            Re
          );
        if (K.$$typeof === Tt)
          return L(
            U,
            D,
            x,
            gi(D, K),
            Re
          );
        Ls(D, K);
      }
      return null;
    }
    function me(U, D, x, K) {
      for (var Re = null, bt = null, ge = D, Ze = D = 0, Ie = null; ge !== null && Ze < x.length; Ze++) {
        ge.index > Ze ? (Ie = ge, ge = null) : Ie = ge.sibling;
        var zt = B(
          U,
          ge,
          x[Ze],
          K
        );
        if (zt === null) {
          ge === null && (ge = Ie);
          break;
        }
        l && ge && zt.alternate === null && n(U, ge), D = r(zt, D, Ze), bt === null ? Re = zt : bt.sibling = zt, bt = zt, ge = Ie;
      }
      if (Ze === x.length)
        return u(U, ge), dt && xn(U, Ze), Re;
      if (ge === null) {
        for (; Ze < x.length; Ze++)
          ge = $(U, x[Ze], K), ge !== null && (D = r(
            ge,
            D,
            Ze
          ), bt === null ? Re = ge : bt.sibling = ge, bt = ge);
        return dt && xn(U, Ze), Re;
      }
      for (ge = c(ge); Ze < x.length; Ze++)
        Ie = L(
          ge,
          U,
          Ze,
          x[Ze],
          K
        ), Ie !== null && (l && Ie.alternate !== null && ge.delete(
          Ie.key === null ? Ze : Ie.key
        ), D = r(
          Ie,
          D,
          Ze
        ), bt === null ? Re = Ie : bt.sibling = Ie, bt = Ie);
      return l && ge.forEach(function(hu) {
        return n(U, hu);
      }), dt && xn(U, Ze), Re;
    }
    function Ce(U, D, x, K) {
      if (x == null) throw Error(M(151));
      for (var Re = null, bt = null, ge = D, Ze = D = 0, Ie = null, zt = x.next(); ge !== null && !zt.done; Ze++, zt = x.next()) {
        ge.index > Ze ? (Ie = ge, ge = null) : Ie = ge.sibling;
        var hu = B(U, ge, zt.value, K);
        if (hu === null) {
          ge === null && (ge = Ie);
          break;
        }
        l && ge && hu.alternate === null && n(U, ge), D = r(hu, D, Ze), bt === null ? Re = hu : bt.sibling = hu, bt = hu, ge = Ie;
      }
      if (zt.done)
        return u(U, ge), dt && xn(U, Ze), Re;
      if (ge === null) {
        for (; !zt.done; Ze++, zt = x.next())
          zt = $(U, zt.value, K), zt !== null && (D = r(zt, D, Ze), bt === null ? Re = zt : bt.sibling = zt, bt = zt);
        return dt && xn(U, Ze), Re;
      }
      for (ge = c(ge); !zt.done; Ze++, zt = x.next())
        zt = L(ge, U, Ze, zt.value, K), zt !== null && (l && zt.alternate !== null && ge.delete(zt.key === null ? Ze : zt.key), D = r(zt, D, Ze), bt === null ? Re = zt : bt.sibling = zt, bt = zt);
      return l && ge.forEach(function(Jv) {
        return n(U, Jv);
      }), dt && xn(U, Ze), Re;
    }
    function Zt(U, D, x, K) {
      if (typeof x == "object" && x !== null && x.type === gt && x.key === null && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ie:
            e: {
              for (var Re = x.key; D !== null; ) {
                if (D.key === Re) {
                  if (Re = x.type, Re === gt) {
                    if (D.tag === 7) {
                      u(
                        U,
                        D.sibling
                      ), K = s(
                        D,
                        x.props.children
                      ), K.return = U, U = K;
                      break e;
                    }
                  } else if (D.elementType === Re || typeof Re == "object" && Re !== null && Re.$$typeof === Qe && tc(Re) === D.type) {
                    u(
                      U,
                      D.sibling
                    ), K = s(D, x.props), uf(K, x), K.return = U, U = K;
                    break e;
                  }
                  u(U, D);
                  break;
                } else n(U, D);
                D = D.sibling;
              }
              x.type === gt ? (K = pi(
                x.props.children,
                U.mode,
                K,
                x.key
              ), K.return = U, U = K) : (K = Rd(
                x.type,
                x.key,
                x.props,
                null,
                U.mode,
                K
              ), uf(K, x), K.return = U, U = K);
            }
            return m(U);
          case je:
            e: {
              for (Re = x.key; D !== null; ) {
                if (D.key === Re)
                  if (D.tag === 4 && D.stateNode.containerInfo === x.containerInfo && D.stateNode.implementation === x.implementation) {
                    u(
                      U,
                      D.sibling
                    ), K = s(D, x.children || []), K.return = U, U = K;
                    break e;
                  } else {
                    u(U, D);
                    break;
                  }
                else n(U, D);
                D = D.sibling;
              }
              K = Dd(x, U.mode, K), K.return = U, U = K;
            }
            return m(U);
          case Qe:
            return x = tc(x), Zt(
              U,
              D,
              x,
              K
            );
        }
        if (Rt(x))
          return me(
            U,
            D,
            x,
            K
          );
        if (he(x)) {
          if (Re = he(x), typeof Re != "function") throw Error(M(150));
          return x = Re.call(x), Ce(
            U,
            D,
            x,
            K
          );
        }
        if (typeof x.then == "function")
          return Zt(
            U,
            D,
            Xs(x),
            K
          );
        if (x.$$typeof === Tt)
          return Zt(
            U,
            D,
            gi(U, x),
            K
          );
        Ls(U, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, D !== null && D.tag === 6 ? (u(U, D.sibling), K = s(D, x), K.return = U, U = K) : (u(U, D), K = Po(x, U.mode, K), K.return = U, U = K), m(U)) : u(U, D);
    }
    return function(U, D, x, K) {
      try {
        Ic = 0;
        var Re = Zt(
          U,
          D,
          x,
          K
        );
        return ac = null, Re;
      } catch (ge) {
        if (ge === ec || ge === nf) throw ge;
        var bt = gl(29, ge, null, U.mode);
        return bt.lanes = K, bt.return = U, bt;
      }
    };
  }
  var nc = Lp(!0), uy = Lp(!1), bi = !1;
  function Qs(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hd(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ei(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function sn(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (At & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Us(l), Od(l, null, u), n;
    }
    return nn(l, c, n, u), Us(l);
  }
  function uc(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Su(l, u);
    }
  }
  function Nd(l, n) {
    var u = l.updateQueue, c = l.alternate;
    if (c !== null && (c = c.updateQueue, u === c)) {
      var s = null, r = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var m = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          r === null ? s = r = m : r = r.next = m, u = u.next;
        } while (u !== null);
        r === null ? s = r = n : r = r.next = n;
      } else s = r = n;
      u = {
        baseState: c.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: r,
        shared: c.shared,
        callbacks: c.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = n : l.next = n, u.lastBaseUpdate = n;
  }
  var iy = !1;
  function ic() {
    if (iy) {
      var l = Ul;
      if (l !== null) throw l;
    }
  }
  function Hu(l, n, u, c) {
    iy = !1;
    var s = l.updateQueue;
    bi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var A = g, j = A.next;
      A.next = null, m === null ? r = j : m.next = j, m = A;
      var V = l.alternate;
      V !== null && (V = V.updateQueue, g = V.lastBaseUpdate, g !== m && (g === null ? V.firstBaseUpdate = j : g.next = j, V.lastBaseUpdate = A));
    }
    if (r !== null) {
      var $ = s.baseState;
      m = 0, V = j = A = null, g = r;
      do {
        var B = g.lane & -536870913, L = B !== g.lane;
        if (L ? (ct & B) === B : (c & B) === B) {
          B !== 0 && B === Pi && (iy = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var me = l, Ce = g;
            B = n;
            var Zt = u;
            switch (Ce.tag) {
              case 1:
                if (me = Ce.payload, typeof me == "function") {
                  $ = me.call(Zt, $, B);
                  break e;
                }
                $ = me;
                break e;
              case 3:
                me.flags = me.flags & -65537 | 128;
              case 0:
                if (me = Ce.payload, B = typeof me == "function" ? me.call(Zt, $, B) : me, B == null) break e;
                $ = G({}, $, B);
                break e;
              case 2:
                bi = !0;
            }
          }
          B = g.callback, B !== null && (l.flags |= 64, L && (l.flags |= 8192), L = s.callbacks, L === null ? s.callbacks = [B] : L.push(B));
        } else
          L = {
            lane: B,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, V === null ? (j = V = L, A = $) : V = V.next = L, m |= B;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          L = g, g = L.next, L.next = null, s.lastBaseUpdate = L, s.shared.pending = null;
        }
      } while (!0);
      V === null && (A = $), s.baseState = A, s.firstBaseUpdate = j, s.lastBaseUpdate = V, r === null && (s.shared.lanes = 0), ou |= m, l.lanes = m, l.memoizedState = $;
    }
  }
  function xd(l, n) {
    if (typeof l != "function")
      throw Error(M(191, l));
    l.call(n);
  }
  function cc(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        xd(u[l], n);
  }
  var Bl = S(null), Pc = S(0);
  function Qp(l, n) {
    l = cu, F(Pc, l), F(Bl, n), cu = l | n.baseLanes;
  }
  function Vs() {
    F(Pc, cu), F(Bl, Bl.current);
  }
  function cf() {
    cu = Pc.current, N(Bl), N(Pc);
  }
  var Ca = S(null), rn = null;
  function Nu(l) {
    var n = l.alternate;
    F(cl, cl.current & 1), F(Ca, l), rn === null && (n === null || Bl.current !== null || n.memoizedState !== null) && (rn = l);
  }
  function of(l) {
    F(cl, cl.current), F(Ca, l), rn === null && (rn = l);
  }
  function jd(l) {
    l.tag === 22 ? (F(cl, cl.current), F(Ca, l), rn === null && (rn = l)) : lu();
  }
  function lu() {
    F(cl, cl.current), F(Ca, Ca.current);
  }
  function Ua(l) {
    N(Ca), rn === l && (rn = null), N(cl);
  }
  var cl = S(0);
  function ff(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Gn(u) || Sc(u)))
          return n;
      } else if (n.tag === 19 && (n.memoizedProps.revealOrder === "forwards" || n.memoizedProps.revealOrder === "backwards" || n.memoizedProps.revealOrder === "unstable_legacy-backwards" || n.memoizedProps.revealOrder === "together")) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === l) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === l) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var xu = 0, Ke = null, Nt = null, Dl = null, eo = !1, to = !1, Ti = !1, Zs = 0, sf = 0, oc = null, Vp = 0;
  function ml() {
    throw Error(M(321));
  }
  function Ai(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!pa(l[u], n[u])) return !1;
    return !0;
  }
  function Js(l, n, u, c, s, r) {
    return xu = r, Ke = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, z.H = l === null || l.memoizedState === null ? Ip : Id, Ti = !1, r = u(c, s), Ti = !1, to && (r = Zp(
      n,
      u,
      c,
      s
    )), Bd(l), r;
  }
  function Bd(l) {
    z.H = tr;
    var n = Nt !== null && Nt.next !== null;
    if (xu = 0, Dl = Nt = Ke = null, eo = !1, sf = 0, oc = null, n) throw Error(M(300));
    l === null || _l || (l = l.dependencies, l !== null && Kc(l) && (_l = !0));
  }
  function Zp(l, n, u, c) {
    Ke = l;
    var s = 0;
    do {
      if (to && (oc = null), sf = 0, to = !1, 25 <= s) throw Error(M(301));
      if (s += 1, Dl = Nt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      z.H = Pp, r = n(u, c);
    } while (to);
    return r;
  }
  function tS() {
    var l = z.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? ao(n) : n, l = l.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== l && (Ke.flags |= 1024), n;
  }
  function qd() {
    var l = Zs !== 0;
    return Zs = 0, l;
  }
  function lo(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function Ks(l) {
    if (eo) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      eo = !1;
    }
    xu = 0, Dl = Nt = Ke = null, to = !1, sf = Zs = 0, oc = null;
  }
  function $l() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Dl === null ? Ke.memoizedState = Dl = l : Dl = Dl.next = l, Dl;
  }
  function bl() {
    if (Nt === null) {
      var l = Ke.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Nt.next;
    var n = Dl === null ? Ke.memoizedState : Dl.next;
    if (n !== null)
      Dl = n, Nt = l;
    else {
      if (l === null)
        throw Ke.alternate === null ? Error(M(467)) : Error(M(310));
      Nt = l, l = {
        memoizedState: Nt.memoizedState,
        baseState: Nt.baseState,
        baseQueue: Nt.baseQueue,
        queue: Nt.queue,
        next: null
      }, Dl === null ? Ke.memoizedState = Dl = l : Dl = Dl.next = l;
    }
    return Dl;
  }
  function $s() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ao(l) {
    var n = sf;
    return sf += 1, oc === null && (oc = []), l = ay(oc, l, n), n = Ke, (Dl === null ? n.memoizedState : Dl.next) === null && (n = n.alternate, z.H = n === null || n.memoizedState === null ? Ip : Id), l;
  }
  function rf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ao(l);
      if (l.$$typeof === Tt) return k(l);
    }
    throw Error(M(438, String(l)));
  }
  function Yd(l) {
    var n = null, u = Ke.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Ke.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = $s(), Ke.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = re;
    return n.index++, u;
  }
  function ju(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function Bu(l) {
    var n = bl();
    return Gd(n, Nt, l);
  }
  function Gd(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(M(311));
    c.lastRenderedReducer = u;
    var s = l.baseQueue, r = c.pending;
    if (r !== null) {
      if (s !== null) {
        var m = s.next;
        s.next = r.next, r.next = m;
      }
      n.baseQueue = s = r, c.pending = null;
    }
    if (r = l.baseState, s === null) l.memoizedState = r;
    else {
      n = s.next;
      var g = m = null, A = null, j = n, V = !1;
      do {
        var $ = j.lane & -536870913;
        if ($ !== j.lane ? (ct & $) === $ : (xu & $) === $) {
          var B = j.revertLane;
          if (B === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), $ === Pi && (V = !0);
          else if ((xu & B) === B) {
            j = j.next, B === Pi && (V = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, A === null ? (g = A = $, m = r) : A = A.next = $, Ke.lanes |= B, ou |= B;
          $ = j.action, Ti && u(r, $), r = j.hasEagerState ? j.eagerState : u(r, $);
        } else
          B = {
            lane: $,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, A === null ? (g = A = B, m = r) : A = A.next = B, Ke.lanes |= $, ou |= $;
        j = j.next;
      } while (j !== null && j !== n);
      if (A === null ? m = r : A.next = g, !pa(r, l.memoizedState) && (_l = !0, V && (u = Ul, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function wd(l) {
    var n = bl(), u = n.queue;
    if (u === null) throw Error(M(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      pa(r, n.memoizedState) || (_l = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function cy(l, n, u) {
    var c = Ke, s = bl(), r = dt;
    if (r) {
      if (u === void 0) throw Error(M(407));
      u = u();
    } else u = n();
    var m = !pa(
      (Nt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, _l = !0), s = s.queue, Zd(Xd.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || Dl !== null && Dl.memoizedState.tag & 1) {
      if (c.flags |= 2048, uo(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Qt === null) throw Error(M(349));
      r || (xu & 127) !== 0 || ks(c, n, u);
    }
    return u;
  }
  function ks(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Ke.updateQueue, n === null ? (n = $s(), Ke.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function oy(l, n, u, c) {
    n.value = u, n.getSnapshot = c, Ld(n) && Qd(l);
  }
  function Xd(l, n, u) {
    return u(function() {
      Ld(n) && Qd(l);
    });
  }
  function Ld(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !pa(l, u);
    } catch {
      return !0;
    }
  }
  function Qd(l) {
    var n = mi(l, 2);
    n !== null && qa(n, l, 2);
  }
  function fy(l) {
    var n = $l();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), Ti) {
        Aa(!0);
        try {
          u();
        } finally {
          Aa(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ju,
      lastRenderedState: l
    }, n;
  }
  function kl(l, n, u, c) {
    return l.baseState = u, Gd(
      l,
      Nt,
      typeof c == "function" ? c : ju
    );
  }
  function Jp(l, n, u, c, s) {
    if (er(l)) throw Error(M(485));
    if (l = n.action, l !== null) {
      var r = {
        payload: s,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(m) {
          r.listeners.push(m);
        }
      };
      z.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, sy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function sy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = z.T, m = {};
      z.T = m;
      try {
        var g = u(s, c), A = z.S;
        A !== null && A(m, g), ry(l, n, g);
      } catch (j) {
        no(l, n, j);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), z.T = r;
      }
    } else
      try {
        r = u(s, c), ry(l, n, r);
      } catch (j) {
        no(l, n, j);
      }
  }
  function ry(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        dy(l, n, c);
      },
      function(c) {
        return no(l, n, c);
      }
    ) : dy(l, n, u);
  }
  function dy(l, n, u) {
    n.status = "fulfilled", n.value = u, hy(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, sy(l, u)));
  }
  function no(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, hy(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function hy(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ws(l, n) {
    return n;
  }
  function my(l, n) {
    if (dt) {
      var u = Qt.formState;
      if (u !== null) {
        e: {
          var c = Ke;
          if (dt) {
            if (Ft) {
              t: {
                for (var s = Ft, r = jl; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = Ya(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                Ft = Ya(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            jn(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = $l(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ws,
      lastRenderedState: n
    }, u.queue = c, u = Wd.bind(
      null,
      Ke,
      c
    ), c.dispatch = u, c = fy(!1), r = fc.bind(
      null,
      Ke,
      !1,
      c.queue
    ), c = $l(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = Jp.bind(
      null,
      Ke,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Kp(l) {
    var n = bl();
    return Fs(n, Nt, l);
  }
  function Fs(l, n, u) {
    if (n = Gd(
      l,
      n,
      Ws
    )[0], l = Bu(ju)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = ao(n);
      } catch (m) {
        throw m === ec ? nf : m;
      }
    else c = n;
    n = bl();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Ke.flags |= 2048, uo(
      9,
      { destroy: void 0 },
      yy.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function yy(l, n) {
    l.action = n;
  }
  function py(l) {
    var n = bl(), u = Nt;
    if (u !== null)
      return Fs(n, u, l);
    bl(), n = n.memoizedState, u = bl();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function uo(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Ke.updateQueue, n === null && (n = $s(), Ke.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function vy() {
    return bl().memoizedState;
  }
  function df(l, n, u, c) {
    var s = $l();
    Ke.flags |= l, s.memoizedState = uo(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function hf(l, n, u, c) {
    var s = bl();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Nt !== null && c !== null && Ai(c, Nt.memoizedState.deps) ? s.memoizedState = uo(n, r, u, c) : (Ke.flags |= l, s.memoizedState = uo(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Vd(l, n) {
    df(8390656, 8, l, n);
  }
  function Zd(l, n) {
    hf(2048, 8, l, n);
  }
  function gy(l) {
    Ke.flags |= 4;
    var n = Ke.updateQueue;
    if (n === null)
      n = $s(), Ke.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function Is(l) {
    var n = bl().memoizedState;
    return gy({ ref: n, nextImpl: l }), function() {
      if ((At & 2) !== 0) throw Error(M(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Jd(l, n) {
    return hf(4, 2, l, n);
  }
  function Sy(l, n) {
    return hf(4, 4, l, n);
  }
  function Kd(l, n) {
    if (typeof n == "function") {
      l = l();
      var u = n(l);
      return function() {
        typeof u == "function" ? u() : n(null);
      };
    }
    if (n != null)
      return l = l(), n.current = l, function() {
        n.current = null;
      };
  }
  function by(l, n, u) {
    u = u != null ? u.concat([l]) : null, hf(4, 4, Kd.bind(null, n, l), u);
  }
  function au() {
  }
  function $d(l, n) {
    var u = bl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Ai(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function $p(l, n) {
    var u = bl();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Ai(n, c[1]))
      return c[0];
    if (c = l(), Ti) {
      Aa(!0);
      try {
        l();
      } finally {
        Aa(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Ps(l, n, u) {
    return u === void 0 || (xu & 1073741824) !== 0 && (ct & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = fv(), Ke.lanes |= l, ou |= l, u);
  }
  function qu(l, n, u, c) {
    return pa(u, n) ? u : Bl.current !== null ? (l = Ps(l, u, c), pa(l, n) || (_l = !0), l) : (xu & 42) === 0 || (xu & 1073741824) !== 0 && (ct & 261930) === 0 ? (_l = !0, l.memoizedState = u) : (l = fv(), Ke.lanes |= l, ou |= l, n);
  }
  function kd(l, n, u, c, s) {
    var r = Q.p;
    Q.p = r !== 0 && 8 > r ? r : 8;
    var m = z.T, g = {};
    z.T = g, fc(l, !1, n, u);
    try {
      var A = s(), j = z.S;
      if (j !== null && j(g, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var V = ws(
          A,
          c
        );
        zi(
          l,
          n,
          V,
          $a(l)
        );
      } else
        zi(
          l,
          n,
          c,
          $a(l)
        );
    } catch ($) {
      zi(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: $ },
        $a()
      );
    } finally {
      Q.p = r, m !== null && g.types !== null && (m.types = g.types), z.T = m;
    }
  }
  function kp() {
  }
  function mf(l, n, u, c) {
    if (l.tag !== 5) throw Error(M(476));
    var s = yf(l).queue;
    kd(
      l,
      s,
      n,
      ee,
      u === null ? kp : function() {
        return Lt(l), u(c);
      }
    );
  }
  function yf(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ju,
        lastRenderedState: ee
      },
      next: null
    };
    var u = {};
    return n.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ju,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function Lt(l) {
    var n = yf(l);
    n.next === null && (n = l.alternate.memoizedState), zi(
      l,
      n.next.queue,
      {},
      $a()
    );
  }
  function Ey() {
    return k(_r);
  }
  function Wp() {
    return bl().memoizedState;
  }
  function Ty() {
    return bl().memoizedState;
  }
  function Yu(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = $a();
          l = Ei(u);
          var c = sn(n, l, u);
          c !== null && (qa(c, n, u), uc(c, n, u)), n = { cache: Bs() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Fp(l, n, u) {
    var c = $a();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, er(l) ? Fd(n, u) : (u = Nn(l, n, u, c), u !== null && (qa(u, l, c), Ay(u, n, c)));
  }
  function Wd(l, n, u) {
    var c = $a();
    zi(l, n, u, c);
  }
  function zi(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (er(l)) Fd(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, pa(g, m))
            return nn(l, n, s, 0), Qt === null && an(), !1;
        } catch {
        }
      if (u = Nn(l, n, s, c), u !== null)
        return qa(u, l, c), Ay(u, n, c), !0;
    }
    return !1;
  }
  function fc(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: Ah(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, er(l)) {
      if (n) throw Error(M(479));
    } else
      n = Nn(
        l,
        u,
        c,
        2
      ), n !== null && qa(n, l, 2);
  }
  function er(l) {
    var n = l.alternate;
    return l === Ke || n !== null && n === Ke;
  }
  function Fd(l, n) {
    to = eo = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function Ay(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, Su(l, u);
    }
  }
  var tr = {
    readContext: k,
    use: rf,
    useCallback: ml,
    useContext: ml,
    useEffect: ml,
    useImperativeHandle: ml,
    useLayoutEffect: ml,
    useInsertionEffect: ml,
    useMemo: ml,
    useReducer: ml,
    useRef: ml,
    useState: ml,
    useDebugValue: ml,
    useDeferredValue: ml,
    useTransition: ml,
    useSyncExternalStore: ml,
    useId: ml,
    useHostTransitionStatus: ml,
    useFormState: ml,
    useActionState: ml,
    useOptimistic: ml,
    useMemoCache: ml,
    useCacheRefresh: ml
  };
  tr.useEffectEvent = ml;
  var Ip = {
    readContext: k,
    use: rf,
    useCallback: function(l, n) {
      return $l().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: k,
    useEffect: Vd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, df(
        4194308,
        4,
        Kd.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return df(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      df(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = $l();
      n = n === void 0 ? null : n;
      var c = l();
      if (Ti) {
        Aa(!0);
        try {
          l();
        } finally {
          Aa(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = $l();
      if (u !== void 0) {
        var s = u(n);
        if (Ti) {
          Aa(!0);
          try {
            u(n);
          } finally {
            Aa(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Fp.bind(
        null,
        Ke,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = $l();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = fy(l);
      var n = l.queue, u = Wd.bind(null, Ke, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: au,
    useDeferredValue: function(l, n) {
      var u = $l();
      return Ps(u, l, n);
    },
    useTransition: function() {
      var l = fy(!1);
      return l = kd.bind(
        null,
        Ke,
        l.queue,
        !0,
        !1
      ), $l().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Ke, s = $l();
      if (dt) {
        if (u === void 0)
          throw Error(M(407));
        u = u();
      } else {
        if (u = n(), Qt === null)
          throw Error(M(349));
        (ct & 127) !== 0 || ks(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Vd(Xd.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, uo(
        9,
        { destroy: void 0 },
        oy.bind(
          null,
          c,
          r,
          u,
          n
        ),
        null
      ), u;
    },
    useId: function() {
      var l = $l(), n = Qt.identifierPrefix;
      if (dt) {
        var u = Pn, c = Va;
        u = (c & ~(1 << 32 - Ql(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = Zs++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = Vp++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: Ey,
    useFormState: my,
    useActionState: my,
    useOptimistic: function(l) {
      var n = $l();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = fc.bind(
        null,
        Ke,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Yd,
    useCacheRefresh: function() {
      return $l().memoizedState = Yu.bind(
        null,
        Ke
      );
    },
    useEffectEvent: function(l) {
      var n = $l(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((At & 2) !== 0)
          throw Error(M(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Id = {
    readContext: k,
    use: rf,
    useCallback: $d,
    useContext: k,
    useEffect: Zd,
    useImperativeHandle: by,
    useInsertionEffect: Jd,
    useLayoutEffect: Sy,
    useMemo: $p,
    useReducer: Bu,
    useRef: vy,
    useState: function() {
      return Bu(ju);
    },
    useDebugValue: au,
    useDeferredValue: function(l, n) {
      var u = bl();
      return qu(
        u,
        Nt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Bu(ju)[0], n = bl().memoizedState;
      return [
        typeof l == "boolean" ? l : ao(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: Wp,
    useHostTransitionStatus: Ey,
    useFormState: Kp,
    useActionState: Kp,
    useOptimistic: function(l, n) {
      var u = bl();
      return kl(u, Nt, l, n);
    },
    useMemoCache: Yd,
    useCacheRefresh: Ty
  };
  Id.useEffectEvent = Is;
  var Pp = {
    readContext: k,
    use: rf,
    useCallback: $d,
    useContext: k,
    useEffect: Zd,
    useImperativeHandle: by,
    useInsertionEffect: Jd,
    useLayoutEffect: Sy,
    useMemo: $p,
    useReducer: wd,
    useRef: vy,
    useState: function() {
      return wd(ju);
    },
    useDebugValue: au,
    useDeferredValue: function(l, n) {
      var u = bl();
      return Nt === null ? Ps(u, l, n) : qu(
        u,
        Nt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = wd(ju)[0], n = bl().memoizedState;
      return [
        typeof l == "boolean" ? l : ao(l),
        n
      ];
    },
    useSyncExternalStore: cy,
    useId: Wp,
    useHostTransitionStatus: Ey,
    useFormState: py,
    useActionState: py,
    useOptimistic: function(l, n) {
      var u = bl();
      return Nt !== null ? kl(u, Nt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Yd,
    useCacheRefresh: Ty
  };
  Pp.useEffectEvent = Is;
  function io(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : G({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var Bn = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = $a(), s = Ei(c);
      s.payload = n, u != null && (s.callback = u), n = sn(l, s, c), n !== null && (qa(n, l, c), uc(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = $a(), s = Ei(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = sn(l, s, c), n !== null && (qa(n, l, c), uc(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = $a(), c = Ei(u);
      c.tag = 2, n != null && (c.callback = n), n = sn(l, c, u), n !== null && (qa(n, l, u), uc(n, l, u));
    }
  };
  function zy(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Cn(u, c) || !Cn(s, r) : !0;
  }
  function ev(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && Bn.enqueueReplaceState(n, n.state, null);
  }
  function sc(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = G({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Pd(l) {
    Vc(l);
  }
  function Oy(l) {
    console.error(l);
  }
  function eh(l) {
    Vc(l);
  }
  function pf(l, n) {
    try {
      var u = l.onUncaughtError;
      u(n.value, { componentStack: n.stack });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function lr(l, n, u) {
    try {
      var c = l.onCaughtError;
      c(u.value, {
        componentStack: u.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function Ry(l, n, u) {
    return u = Ei(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      pf(l, n);
    }, u;
  }
  function Dy(l) {
    return l = Ei(l), l.tag = 3, l;
  }
  function _y(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        lr(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      lr(n, u, c), typeof s != "function" && (ol === null ? ol = /* @__PURE__ */ new Set([this]) : ol.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function lS(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && Kl(
        n,
        u,
        s,
        !0
      ), u = Ca.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return rn === null ? Sh() : u.alternate === null && Pt === 0 && (Pt = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === Fc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), pr(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === Fc ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), pr(l, c, s)), !1;
        }
        throw Error(M(435, u.tag));
      }
      return pr(l, c, s), Sh(), !1;
    }
    if (dt)
      return n = Ca.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Mu && (l = Error(M(422), { cause: c }), lf(un(l, u)))) : (c !== Mu && (n = Error(M(423), {
        cause: c
      }), lf(
        un(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = un(c, u), s = Ry(
        l.stateNode,
        c,
        s
      ), Nd(l, s), Pt !== 4 && (Pt = 2)), !1;
    var r = Error(M(520), { cause: c });
    if (r = un(r, u), dr === null ? dr = [r] : dr.push(r), Pt !== 4 && (Pt = 2), n === null) return !0;
    c = un(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = Ry(u.stateNode, c, l), Nd(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (ol === null || !ol.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = Dy(s), _y(
              s,
              l,
              u,
              c
            ), Nd(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var th = Error(M(461)), _l = !1;
  function al(l, n, u, c) {
    n.child = l === null ? uy(n, null, u, c) : nc(
      n,
      l.child,
      u,
      c
    );
  }
  function My(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return we(n), c = Js(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = qd(), l !== null && !_l ? (lo(l, n, s), mn(l, n, s)) : (dt && g && ef(n), n.flags |= 1, al(l, n, c, s), n.child);
  }
  function Cy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !Zc(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Uy(
        l,
        n,
        r,
        c,
        s
      )) : (l = Rd(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !nh(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Cn, u(m, c) && l.ref === n.ref)
        return mn(l, n, s);
    }
    return n.flags |= 1, l = yi(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Uy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Cn(r, c) && l.ref === n.ref)
        if (_l = !1, n.pendingProps = c = r, nh(l, s))
          (l.flags & 131072) !== 0 && (_l = !0);
        else
          return n.lanes = l.lanes, mn(l, n, s);
    }
    return lh(
      l,
      n,
      u,
      c,
      s
    );
  }
  function tv(l, n, u, c) {
    var s = c.children, r = l !== null ? l.memoizedState : null;
    if (l === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), c.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (r = r !== null ? r.baseLanes | u : u, l !== null) {
          for (c = n.child = l.child, s = 0; c !== null; )
            s = s | c.lanes | c.childLanes, c = c.sibling;
          c = s & ~r;
        } else c = 0, n.child = null;
        return Ha(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && af(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Qp(n, r) : Vs(), jd(n);
      else
        return c = n.lanes = 536870912, Ha(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (af(n, r.cachePool), Qp(n, r), lu(), n.memoizedState = null) : (l !== null && af(n, null), Vs(), lu());
    return al(l, n, s, u), n.child;
  }
  function rc(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function Ha(l, n, u, c, s) {
    var r = fn();
    return r = r === null ? null : { parent: Rl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && af(n, null), Vs(), jd(n), l !== null && Kl(l, n, c, !0), n.childLanes = s, null;
  }
  function ar(l, n) {
    return n = ir(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Na(l, n, u) {
    return nc(n, l.child, null, u), l = ar(n, n.pendingProps), l.flags |= 2, Ua(n), n.memoizedState = null, l;
  }
  function lv(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (dt) {
        if (c.mode === "hidden")
          return l = ar(n, c), n.lanes = 536870912, rc(null, l);
        if (of(n), (l = Ft) ? (l = qv(
          l,
          jl
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: In !== null ? { id: Va, overflow: Pn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, Jl = n, Ft = null)) : l = null, l === null) throw jn(n);
        return n.lanes = 536870912, null;
      }
      return ar(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (of(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Na(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(M(558));
      else if (_l || Kl(l, n, u, !1), s = (u & l.childLanes) !== 0, _l || s) {
        if (c = Qt, c !== null && (m = en(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, mi(l, m), qa(c, l, m), th;
        Sh(), n = Na(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, Ft = Ya(m.nextSibling), Jl = n, dt = !0, _u = null, jl = !1, l !== null && Ns(n, l), n = ar(n, c), n.flags |= 4096;
      return n;
    }
    return l = yi(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function dn(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(M(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function lh(l, n, u, c, s) {
    return we(n), u = Js(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = qd(), l !== null && !_l ? (lo(l, n, s), mn(l, n, s)) : (dt && c && ef(n), n.flags |= 1, al(l, n, u, s), n.child);
  }
  function dc(l, n, u, c, s, r) {
    return we(n), n.updateQueue = null, u = Zp(
      n,
      c,
      u,
      s
    ), Bd(l), c = qd(), l !== null && !_l ? (lo(l, n, r), mn(l, n, r)) : (dt && c && ef(n), n.flags |= 1, al(l, n, u, r), n.child);
  }
  function Hy(l, n, u, c, s) {
    if (we(n), n.stateNode === null) {
      var r = Da, m = u.contextType;
      typeof m == "object" && m !== null && (r = k(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Bn, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, Qs(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? k(m) : Da, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (io(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && Bn.enqueueReplaceState(r, r.state, null), Hu(n, c, r, s), ic(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, A = sc(u, g);
      r.props = A;
      var j = r.context, V = u.contextType;
      m = Da, typeof V == "object" && V !== null && (m = k(V));
      var $ = u.getDerivedStateFromProps;
      V = typeof $ == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, V || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || j !== m) && ev(
        n,
        r,
        c,
        m
      ), bi = !1;
      var B = n.memoizedState;
      r.state = B, Hu(n, c, r, s), ic(), j = n.memoizedState, g || B !== j || bi ? (typeof $ == "function" && (io(
        n,
        u,
        $,
        c
      ), j = n.memoizedState), (A = bi || zy(
        n,
        u,
        A,
        c,
        B,
        j,
        m
      )) ? (V || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = j), r.props = c, r.state = j, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Hd(l, n), m = n.memoizedProps, V = sc(u, m), r.props = V, $ = n.pendingProps, B = r.context, j = u.contextType, A = Da, typeof j == "object" && j !== null && (A = k(j)), g = u.getDerivedStateFromProps, (j = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== $ || B !== A) && ev(
        n,
        r,
        c,
        A
      ), bi = !1, B = n.memoizedState, r.state = B, Hu(n, c, r, s), ic();
      var L = n.memoizedState;
      m !== $ || B !== L || bi || l !== null && l.dependencies !== null && Kc(l.dependencies) ? (typeof g == "function" && (io(
        n,
        u,
        g,
        c
      ), L = n.memoizedState), (V = bi || zy(
        n,
        u,
        V,
        c,
        B,
        L,
        A
      ) || l !== null && l.dependencies !== null && Kc(l.dependencies)) ? (j || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, L, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        L,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = L), r.props = c, r.state = L, r.context = A, c = V) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, dn(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = nc(
      n,
      l.child,
      null,
      s
    ), n.child = nc(
      n,
      null,
      u,
      s
    )) : al(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = mn(
      l,
      n,
      s
    ), l;
  }
  function nu(l, n, u, c) {
    return Ii(), n.flags |= 256, al(l, n, u, c), n.child;
  }
  var nr = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ur(l) {
    return { baseLanes: l, cachePool: kc() };
  }
  function hn(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= Ba), l;
  }
  function Ny(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (cl.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (dt) {
        if (s ? Nu(n) : lu(), (l = Ft) ? (l = qv(
          l,
          jl
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: In !== null ? { id: Va, overflow: Pn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Wm(l), u.return = n, n.child = u, Jl = n, Ft = null)) : l = null, l === null) throw jn(n);
        return Sc(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, s ? (lu(), s = n.mode, g = ir(
        { mode: "hidden", children: g },
        s
      ), c = pi(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = ur(u), c.childLanes = hn(
        l,
        m,
        u
      ), n.memoizedState = nr, rc(null, c)) : (Nu(n), hc(n, g));
    }
    var A = l.memoizedState;
    if (A !== null && (g = A.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (Nu(n), n.flags &= -257, n = co(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (lu(), n.child = l.child, n.flags |= 128, n = null) : (lu(), g = c.fallback, s = n.mode, c = ir(
          { mode: "visible", children: c.children },
          s
        ), g = pi(
          g,
          s,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, nc(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = ur(u), c.childLanes = hn(
          l,
          m,
          u
        ), n.memoizedState = nr, n = rc(null, c));
      else if (Nu(n), Sc(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var j = m.dgst;
        m = j, c = Error(M(419)), c.stack = "", c.digest = m, lf({ value: c, source: null, stack: null }), n = co(
          l,
          n,
          u
        );
      } else if (_l || Kl(l, n, u, !1), m = (u & l.childLanes) !== 0, _l || m) {
        if (m = Qt, m !== null && (c = en(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, mi(l, c), qa(m, l, c), th;
        Gn(g) || Sh(), n = co(
          l,
          n,
          u
        );
      } else
        Gn(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, Ft = Ya(
          g.nextSibling
        ), Jl = n, dt = !0, _u = null, jl = !1, l !== null && Ns(n, l), n = hc(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (lu(), g = c.fallback, s = n.mode, A = l.child, j = A.sibling, c = yi(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, j !== null ? g = yi(
      j,
      g
    ) : (g = pi(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, rc(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = ur(u) : (s = g.cachePool, s !== null ? (A = Rl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = kc(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), c.memoizedState = g, c.childLanes = hn(
      l,
      m,
      u
    ), n.memoizedState = nr, rc(l.child, c)) : (Nu(n), u = l.child, l = u.sibling, u = yi(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function hc(l, n) {
    return n = ir(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function ir(l, n) {
    return l = gl(22, l, null, n), l.lanes = 0, l;
  }
  function co(l, n, u) {
    return nc(n, l.child, null, u), l = hc(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function oo(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Cd(l.return, n, u);
  }
  function ah(l, n, u, c, s, r) {
    var m = l.memoizedState;
    m === null ? l.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: c,
      tail: u,
      tailMode: s,
      treeForkCount: r
    } : (m.isBackwards = n, m.rendering = null, m.renderingStartTime = 0, m.last = c, m.tail = u, m.tailMode = s, m.treeForkCount = r);
  }
  function xy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = cl.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, F(cl, m), al(l, n, c, u), c = dt ? Ol : 0, !g && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && oo(l, u, n);
        else if (l.tag === 19)
          oo(l, u, n);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === n) break e;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === n)
            break e;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (s) {
      case "forwards":
        for (u = n.child, s = null; u !== null; )
          l = u.alternate, l !== null && ff(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), ah(
          n,
          !1,
          s,
          u,
          r,
          c
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, s = n.child, n.child = null; s !== null; ) {
          if (l = s.alternate, l !== null && ff(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        ah(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        ah(
          n,
          !1,
          null,
          null,
          void 0,
          c
        );
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function mn(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), ou |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (Kl(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(M(153));
    if (n.child !== null) {
      for (l = n.child, u = yi(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = yi(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function nh(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Kc(l)));
  }
  function uh(l, n, u) {
    switch (n.tag) {
      case 3:
        $t(n, n.stateNode.containerInfo), Ma(n, Rl, l.memoizedState.cache), Ii();
        break;
      case 27:
      case 5:
        Kt(n);
        break;
      case 4:
        $t(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ma(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, of(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (Nu(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Ny(l, n, u) : (Nu(n), l = mn(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        Nu(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (Kl(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return xy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), F(cl, cl.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, tv(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        Ma(n, Rl, l.memoizedState.cache);
    }
    return mn(l, n, u);
  }
  function jy(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        _l = !0;
      else {
        if (!nh(l, u) && (n.flags & 128) === 0)
          return _l = !1, uh(
            l,
            n,
            u
          );
        _l = (l.flags & 131072) !== 0;
      }
    else
      _l = !1, dt && (n.flags & 1048576) !== 0 && Im(n, Ol, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = tc(n.elementType), n.type = l, typeof l == "function")
            Zc(l) ? (c = sc(l, c), n.tag = 1, n = Hy(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = lh(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === Ot) {
                n.tag = 11, n = My(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === De) {
                n.tag = 14, n = Cy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = wt(l) || l, Error(M(306, n, ""));
          }
        }
        return n;
      case 0:
        return lh(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = sc(
          c,
          n.pendingProps
        ), Hy(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if ($t(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(M(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Hd(l, n), Hu(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, Ma(n, Rl, c), c !== r.cache && Uu(
            n,
            [Rl],
            u,
            !0
          ), ic(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = nu(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = un(
                Error(M(424)),
                n
              ), lf(s), n = nu(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, Ft = Ya(l.firstChild), Jl = n, dt = !0, _u = null, jl = !0, u = uy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (Ii(), c === s) {
              n = mn(
                l,
                n,
                u
              );
              break e;
            }
            al(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return dn(l, n), l === null ? (u = Yf(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : dt || (u = n.type, l = n.pendingProps, c = gc(
          Ye.current
        ).createElement(u), c[Xt] = n, c[za] = l, ca(c, u, l), Ut(c), n.stateNode = c) : n.memoizedState = Yf(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Kt(n), l === null && dt && (c = n.stateNode = Bf(
          n.type,
          n.pendingProps,
          Ye.current
        ), Jl = n, jl = !0, s = Ft, su(n.type) ? (Or = s, Ft = Ya(c.firstChild)) : Ft = s), al(
          l,
          n,
          n.pendingProps.children,
          u
        ), dn(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && dt && ((s = c = Ft) && (c = uS(
          c,
          n.type,
          n.pendingProps,
          jl
        ), c !== null ? (n.stateNode = c, Jl = n, Ft = Ya(c.firstChild), jl = !1, s = !0) : s = !1), s || jn(n)), Kt(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, xf(s, r) ? c = null : m !== null && xf(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Js(
          l,
          n,
          tS,
          null,
          null,
          u
        ), _r._currentValue = s), dn(l, n), al(l, n, c, u), n.child;
      case 6:
        return l === null && dt && ((l = u = Ft) && (u = et(
          u,
          n.pendingProps,
          jl
        ), u !== null ? (n.stateNode = u, Jl = n, Ft = null, l = !0) : l = !1), l || jn(n)), null;
      case 13:
        return Ny(l, n, u);
      case 4:
        return $t(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = nc(
          n,
          null,
          c,
          u
        ) : al(l, n, c, u), n.child;
      case 11:
        return My(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return al(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return al(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return al(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, Ma(n, n.type, c.value), al(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, we(n), s = k(s), c = c(s), n.flags |= 1, al(l, n, c, u), n.child;
      case 14:
        return Cy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Uy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return xy(l, n, u);
      case 31:
        return lv(l, n, u);
      case 22:
        return tv(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return we(n), c = k(Rl), l === null ? (s = fn(), s === null && (s = Qt, r = Bs(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, Qs(n), Ma(n, Rl, s)) : ((l.lanes & u) !== 0 && (Hd(l, n), Hu(n, null, null, u), ic()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), Ma(n, Rl, c)) : (c = r.cache, Ma(n, Rl, c), c !== s.cache && Uu(
          n,
          [Rl],
          u,
          !0
        ))), al(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(M(156, n.tag));
  }
  function Gu(l) {
    l.flags |= 4;
  }
  function By(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (dv()) l.flags |= 8192;
        else
          throw lc = Fc, Wc;
    } else l.flags &= -16777217;
  }
  function qy(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Wa(n))
      if (dv()) l.flags |= 8192;
      else
        throw lc = Fc, Wc;
  }
  function va(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? ma() : 536870912, l.lanes |= n, yl |= n);
  }
  function vf(l, n) {
    if (!dt)
      switch (l.tailMode) {
        case "hidden":
          n = l.tail;
          for (var u = null; n !== null; )
            n.alternate !== null && (u = n), n = n.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var c = null; u !== null; )
            u.alternate !== null && (c = u), u = u.sibling;
          c === null ? n || l.tail === null ? l.tail = null : l.tail.sibling = null : c.sibling = null;
      }
  }
  function Ge(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function av(l, n, u) {
    var c = n.pendingProps;
    switch (_d(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ge(n), null;
      case 1:
        return Ge(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), tu(Rl), rt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (Cu(n) ? Gu(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Pm())), Ge(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Gu(n), r !== null ? (Ge(n), qy(n, r)) : (Ge(n), By(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Gu(n), Ge(n), qy(n, r)) : (Ge(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Gu(n), Ge(n), By(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (fe(n), u = Ye.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Gu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(M(166));
            return Ge(n), null;
          }
          l = W.current, Cu(n) ? xs(n) : (l = Bf(s, c, u), n.stateNode = l, Gu(n));
        }
        return Ge(n), null;
      case 5:
        if (fe(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Gu(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(M(166));
            return Ge(n), null;
          }
          if (r = W.current, Cu(n))
            xs(n);
          else {
            var m = gc(
              Ye.current
            );
            switch (r) {
              case 1:
                r = m.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                r = m.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    r = m.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    r = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    r = m.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(
                      r.firstChild
                    );
                    break;
                  case "select":
                    r = typeof c.is == "string" ? m.createElement("select", {
                      is: c.is
                    }) : m.createElement("select"), c.multiple ? r.multiple = !0 : c.size && (r.size = c.size);
                    break;
                  default:
                    r = typeof c.is == "string" ? m.createElement(s, { is: c.is }) : m.createElement(s);
                }
            }
            r[Xt] = n, r[za] = c;
            e: for (m = n.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6)
                r.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                m.child.return = m, m = m.child;
                continue;
              }
              if (m === n) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === n)
                  break e;
                m = m.return;
              }
              m.sibling.return = m.return, m = m.sibling;
            }
            n.stateNode = r;
            e: switch (ca(r, s, c), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                c = !!c.autoFocus;
                break e;
              case "img":
                c = !0;
                break e;
              default:
                c = !1;
            }
            c && Gu(n);
          }
        }
        return Ge(n), By(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Gu(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(M(166));
          if (l = Ye.current, Cu(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Jl, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Xt] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || c0(l.nodeValue, u)), l || jn(n, !0);
          } else
            l = gc(l).createTextNode(
              c
            ), l[Xt] = n, n.stateNode = l;
        }
        return Ge(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = Cu(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(M(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(M(557));
              l[Xt] = n;
            } else
              Ii(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ge(n), l = !1;
          } else
            u = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (Ua(n), n) : (Ua(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(M(558));
        }
        return Ge(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = Cu(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(M(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(M(317));
              s[Xt] = n;
            } else
              Ii(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Ge(n), s = !1;
          } else
            s = Pm(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Ua(n), n) : (Ua(n), null);
        }
        return Ua(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), va(n, n.updateQueue), Ge(n), null);
      case 4:
        return rt(), l === null && Nf(n.stateNode.containerInfo), Ge(n), null;
      case 10:
        return tu(n.type), Ge(n), null;
      case 19:
        if (N(cl), c = n.memoizedState, c === null) return Ge(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) vf(c, !1);
          else {
            if (Pt !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = ff(l), r !== null) {
                  for (n.flags |= 128, vf(c, !1), l = r.updateQueue, n.updateQueue = l, va(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    km(u, l), u = u.sibling;
                  return F(
                    cl,
                    cl.current & 1 | 2
                  ), dt && xn(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && ke() > Mt && (n.flags |= 128, s = !0, vf(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = ff(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, va(n, l), vf(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !dt)
                return Ge(n), null;
            } else
              2 * ke() - c.renderingStartTime > Mt && u !== 536870912 && (n.flags |= 128, s = !0, vf(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = ke(), l.sibling = null, u = cl.current, F(
          cl,
          s ? u & 1 | 2 : u & 1
        ), dt && xn(n, c.treeForkCount), l) : (Ge(n), null);
      case 22:
      case 23:
        return Ua(n), cf(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Ge(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ge(n), u = n.updateQueue, u !== null && va(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && N(on), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), tu(Rl), Ge(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(M(156, n.tag));
  }
  function nv(l, n) {
    switch (_d(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return tu(Rl), rt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return fe(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Ua(n), n.alternate === null)
            throw Error(M(340));
          Ii();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (Ua(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(M(340));
          Ii();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return N(cl), null;
      case 4:
        return rt(), null;
      case 10:
        return tu(n.type), null;
      case 22:
      case 23:
        return Ua(n), cf(), l !== null && N(on), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return tu(Rl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function uv(l, n) {
    switch (_d(n), n.tag) {
      case 3:
        tu(Rl), rt();
        break;
      case 26:
      case 27:
      case 5:
        fe(n);
        break;
      case 4:
        rt();
        break;
      case 31:
        n.memoizedState !== null && Ua(n);
        break;
      case 13:
        Ua(n);
        break;
      case 19:
        N(cl);
        break;
      case 10:
        tu(n.type);
        break;
      case 22:
      case 23:
        Ua(n), cf(), l !== null && N(on);
        break;
      case 24:
        tu(Rl);
    }
  }
  function qn(l, n) {
    try {
      var u = n.updateQueue, c = u !== null ? u.lastEffect : null;
      if (c !== null) {
        var s = c.next;
        u = s;
        do {
          if ((u.tag & l) === l) {
            c = void 0;
            var r = u.create, m = u.inst;
            c = r(), m.destroy = c;
          }
          u = u.next;
        } while (u !== s);
      }
    } catch (g) {
      jt(n, n.return, g);
    }
  }
  function yn(l, n, u) {
    try {
      var c = n.updateQueue, s = c !== null ? c.lastEffect : null;
      if (s !== null) {
        var r = s.next;
        c = r;
        do {
          if ((c.tag & l) === l) {
            var m = c.inst, g = m.destroy;
            if (g !== void 0) {
              m.destroy = void 0, s = n;
              var A = u, j = g;
              try {
                j();
              } catch (V) {
                jt(
                  s,
                  A,
                  V
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (V) {
      jt(n, n.return, V);
    }
  }
  function ih(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        cc(n, u);
      } catch (c) {
        jt(l, l.return, c);
      }
    }
  }
  function mc(l, n, u) {
    u.props = sc(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      jt(l, n, c);
    }
  }
  function wu(l, n) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var c = l.stateNode;
            break;
          case 30:
            c = l.stateNode;
            break;
          default:
            c = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(c) : u.current = c;
      }
    } catch (s) {
      jt(l, n, s);
    }
  }
  function uu(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          jt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          jt(l, n, s);
        }
      else u.current = null;
  }
  function Yy(l) {
    var n = l.type, u = l.memoizedProps, c = l.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && c.focus();
          break e;
        case "img":
          u.src ? c.src = u.src : u.srcSet && (c.srcset = u.srcSet);
      }
    } catch (s) {
      jt(l, l.return, s);
    }
  }
  function ch(l, n, u) {
    try {
      var c = l.stateNode;
      f0(c, l.type, u, n), c[za] = n;
    } catch (s) {
      jt(l, l.return, s);
    }
  }
  function Gy(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && su(l.type) || l.tag === 4;
  }
  function gf(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Gy(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && su(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Zn));
    else if (c !== 4 && (c === 27 && su(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Sf(l, n, u), l = l.sibling; l !== null; )
        Sf(l, n, u), l = l.sibling;
  }
  function bf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && su(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (bf(l, n, u), l = l.sibling; l !== null; )
        bf(l, n, u), l = l.sibling;
  }
  function wy(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      ca(n, c, u), n[Xt] = l, n[za] = u;
    } catch (r) {
      jt(l, l.return, r);
    }
  }
  var Oi = !1, Hl = !1, oh = !1, Xy = typeof WeakSet == "function" ? WeakSet : Set, Wl = null;
  function Ef(l, n) {
    if (l = l.containerInfo, _h = Yl, l = ki(l), Ds(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        e: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var c = u.getSelection && u.getSelection();
          if (c && c.rangeCount !== 0) {
            u = c.anchorNode;
            var s = c.anchorOffset, r = c.focusNode;
            c = c.focusOffset;
            try {
              u.nodeType, r.nodeType;
            } catch {
              u = null;
              break e;
            }
            var m = 0, g = -1, A = -1, j = 0, V = 0, $ = l, B = null;
            t: for (; ; ) {
              for (var L; $ !== u || s !== 0 && $.nodeType !== 3 || (g = m + s), $ !== r || c !== 0 && $.nodeType !== 3 || (A = m + c), $.nodeType === 3 && (m += $.nodeValue.length), (L = $.firstChild) !== null; )
                B = $, $ = L;
              for (; ; ) {
                if ($ === l) break t;
                if (B === u && ++j === s && (g = m), B === r && ++V === c && (A = m), (L = $.nextSibling) !== null) break;
                $ = B, B = $.parentNode;
              }
              $ = L;
            }
            u = g === -1 || A === -1 ? null : { start: g, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Mh = { focusedElem: l, selectionRange: u }, Yl = !1, Wl = n; Wl !== null; )
      if (n = Wl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, Wl = l;
      else
        for (; Wl !== null; ) {
          switch (n = Wl, r = n.alternate, l = n.flags, n.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = n.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  s = l[u], s.ref.impl = s.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && r !== null) {
                l = void 0, u = n, s = r.memoizedProps, r = r.memoizedState, c = u.stateNode;
                try {
                  var me = sc(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    me,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Ce) {
                  jt(
                    u,
                    u.return,
                    Ce
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  zr(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      zr(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(M(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, Wl = l;
            break;
          }
          Wl = n.return;
        }
  }
  function cr(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Ri(l, u), c & 4 && qn(5, u);
        break;
      case 1:
        if (Ri(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              jt(u, u.return, m);
            }
          else {
            var s = sc(
              u.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              l.componentDidUpdate(
                s,
                n,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (m) {
              jt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && ih(u), c & 512 && wu(u, u.return);
        break;
      case 3:
        if (Ri(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          try {
            cc(l, n);
          } catch (m) {
            jt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && wy(u);
      case 26:
      case 5:
        Ri(l, u), n === null && c & 4 && Yy(u), c & 512 && wu(u, u.return);
        break;
      case 12:
        Ri(l, u);
        break;
      case 31:
        Ri(l, u), c & 4 && iv(l, u);
        break;
      case 13:
        Ri(l, u), c & 4 && Vy(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = pn.bind(
          null,
          u
        ), jf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Oi, !c) {
          n = n !== null && n.memoizedState !== null || Hl, s = Oi;
          var r = Hl;
          Oi = c, (Hl = n) && !r ? iu(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Ri(l, u), Oi = s, Hl = r;
        }
        break;
      case 30:
        break;
      default:
        Ri(l, u);
    }
  }
  function Ly(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, Ly(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && nd(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var It = null, xa = !1;
  function Xu(l, n, u) {
    for (u = u.child; u !== null; )
      Qy(l, n, u), u = u.sibling;
  }
  function Qy(l, n, u) {
    if (zl && typeof zl.onCommitFiberUnmount == "function")
      try {
        zl.onCommitFiberUnmount(La, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Hl || uu(u, n), Xu(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Hl || uu(u, n);
        var c = It, s = xa;
        su(u.type) && (It = u.stateNode, xa = !1), Xu(
          l,
          n,
          u
        ), vo(u.stateNode), It = c, xa = s;
        break;
      case 5:
        Hl || uu(u, n);
      case 6:
        if (c = It, s = xa, It = null, Xu(
          l,
          n,
          u
        ), It = c, xa = s, It !== null)
          if (xa)
            try {
              (It.nodeType === 9 ? It.body : It.nodeName === "HTML" ? It.ownerDocument.body : It).removeChild(u.stateNode);
            } catch (r) {
              jt(
                u,
                n,
                r
              );
            }
          else
            try {
              It.removeChild(u.stateNode);
            } catch (r) {
              jt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        It !== null && (xa ? (l = It, h0(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Jf(l)) : h0(It, u.stateNode));
        break;
      case 4:
        c = It, s = xa, It = u.stateNode.containerInfo, xa = !0, Xu(
          l,
          n,
          u
        ), It = c, xa = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yn(2, u, n), Hl || yn(4, u, n), Xu(
          l,
          n,
          u
        );
        break;
      case 1:
        Hl || (uu(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && mc(
          u,
          n,
          c
        )), Xu(
          l,
          n,
          u
        );
        break;
      case 21:
        Xu(
          l,
          n,
          u
        );
        break;
      case 22:
        Hl = (c = Hl) || u.memoizedState !== null, Xu(
          l,
          n,
          u
        ), Hl = c;
        break;
      default:
        Xu(
          l,
          n,
          u
        );
    }
  }
  function iv(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Jf(l);
      } catch (u) {
        jt(n, n.return, u);
      }
    }
  }
  function Vy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Jf(l);
      } catch (u) {
        jt(n, n.return, u);
      }
  }
  function or(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new Xy()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new Xy()), n;
      default:
        throw Error(M(435, l.tag));
    }
  }
  function fr(l, n) {
    var u = or(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Dv.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function ja(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (su(g.type)) {
                It = g.stateNode, xa = !1;
                break e;
              }
              break;
            case 5:
              It = g.stateNode, xa = !1;
              break e;
            case 3:
            case 4:
              It = g.stateNode.containerInfo, xa = !0;
              break e;
          }
          g = g.return;
        }
        if (It === null) throw Error(M(160));
        Qy(r, m, s), It = null, xa = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        fh(n, l), n = n.sibling;
  }
  var Fe = null;
  function fh(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ja(n, l), Za(l), c & 4 && (yn(3, l, l.return), qn(3, l), yn(5, l, l.return));
        break;
      case 1:
        ja(n, l), Za(l), c & 512 && (Hl || u === null || uu(u, u.return)), c & 64 && Oi && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = Fe;
        if (ja(n, l), Za(l), c & 512 && (Hl || u === null || uu(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[bu] || r[Xt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), ca(r, c, u), r[Xt] = l, Ut(r), c = r;
                      break e;
                    case "link":
                      var m = v0(
                        "link",
                        "href",
                        s
                      ).get(c + (u.href || ""));
                      if (m) {
                        for (var g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && r.getAttribute("rel") === (u.rel == null ? null : u.rel) && r.getAttribute("title") === (u.title == null ? null : u.title) && r.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), ca(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = v0(
                        "meta",
                        "content",
                        s
                      ).get(c + (u.content || ""))) {
                        for (g = 0; g < m.length; g++)
                          if (r = m[g], r.getAttribute("content") === (u.content == null ? null : "" + u.content) && r.getAttribute("name") === (u.name == null ? null : u.name) && r.getAttribute("property") === (u.property == null ? null : u.property) && r.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && r.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            m.splice(g, 1);
                            break t;
                          }
                      }
                      r = s.createElement(c), ca(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(M(468, c));
                  }
                  r[Xt] = l, Ut(r), c = r;
                }
                l.stateNode = c;
              } else
                xh(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = p0(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? xh(
              s,
              l.type,
              l.stateNode
            ) : p0(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && ch(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        ja(n, l), Za(l), c & 512 && (Hl || u === null || uu(u, u.return)), u !== null && c & 4 && ch(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (ja(n, l), Za(l), c & 512 && (Hl || u === null || uu(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Tu(s, "");
          } catch (me) {
            jt(l, l.return, me);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, ch(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && (oh = !0);
        break;
      case 6:
        if (ja(n, l), Za(l), c & 4) {
          if (l.stateNode === null)
            throw Error(M(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (me) {
            jt(l, l.return, me);
          }
        }
        break;
      case 3:
        if (Xf = null, s = Fe, Fe = ga(n.containerInfo), ja(n, l), Fe = s, Za(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Jf(n.containerInfo);
          } catch (me) {
            jt(l, l.return, me);
          }
        oh && (oh = !1, Zy(l));
        break;
      case 4:
        c = Fe, Fe = ga(
          l.stateNode.containerInfo
        ), ja(n, l), Za(l), Fe = c;
        break;
      case 12:
        ja(n, l), Za(l);
        break;
      case 31:
        ja(n, l), Za(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fr(l, c)));
        break;
      case 13:
        ja(n, l), Za(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (fu = ke()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fr(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, j = Oi, V = Hl;
        if (Oi = j || s, Hl = V || A, ja(n, l), Hl = V, Oi = j, Za(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || Oi || Hl || fo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = A.stateNode;
                    var $ = A.memoizedProps.style, B = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    g.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (me) {
                  jt(A, A.return, me);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (me) {
                  jt(A, A.return, me);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var L = A.stateNode;
                  s ? Ml(L, !0) : Ml(A.stateNode, !1);
                } catch (me) {
                  jt(A, A.return, me);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === l) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === l) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === l) break e;
              u === n && (u = null), n = n.return;
            }
            u === n && (u = null), n.sibling.return = n.return, n = n.sibling;
          }
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, fr(l, u))));
        break;
      case 19:
        ja(n, l), Za(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, fr(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ja(n, l), Za(l);
    }
  }
  function Za(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Gy(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(M(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = gf(l);
            bf(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Tu(m, ""), u.flags &= -33);
            var g = gf(l);
            bf(l, g, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, j = gf(l);
            Sf(
              l,
              j,
              A
            );
            break;
          default:
            throw Error(M(161));
        }
      } catch (V) {
        jt(l, l.return, V);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function Zy(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        Zy(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function Ri(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        cr(l, n.alternate, n), n = n.sibling;
  }
  function fo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yn(4, n, n.return), fo(n);
          break;
        case 1:
          uu(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && mc(
            n,
            n.return,
            u
          ), fo(n);
          break;
        case 27:
          vo(n.stateNode);
        case 26:
        case 5:
          uu(n, n.return), fo(n);
          break;
        case 22:
          n.memoizedState === null && fo(n);
          break;
        case 30:
          fo(n);
          break;
        default:
          fo(n);
      }
      l = l.sibling;
    }
  }
  function iu(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          iu(
            s,
            r,
            u
          ), qn(4, r);
          break;
        case 1:
          if (iu(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (j) {
              jt(c, c.return, j);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  xd(A[s], g);
            } catch (j) {
              jt(c, c.return, j);
            }
          }
          u && m & 64 && ih(r), wu(r, r.return);
          break;
        case 27:
          wy(r);
        case 26:
        case 5:
          iu(
            s,
            r,
            u
          ), u && c === null && m & 4 && Yy(r), wu(r, r.return);
          break;
        case 12:
          iu(
            s,
            r,
            u
          );
          break;
        case 31:
          iu(
            s,
            r,
            u
          ), u && m & 4 && iv(s, r);
          break;
        case 13:
          iu(
            s,
            r,
            u
          ), u && m & 4 && Vy(s, r);
          break;
        case 22:
          r.memoizedState === null && iu(
            s,
            r,
            u
          ), wu(r, r.return);
          break;
        case 30:
          break;
        default:
          iu(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function sh(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && qs(u));
  }
  function rh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && qs(l));
  }
  function Yn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Tf(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Tf(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Yn(
          l,
          n,
          u,
          c
        ), s & 2048 && qn(9, n);
        break;
      case 1:
        Yn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Yn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && qs(l)));
        break;
      case 12:
        if (s & 2048) {
          Yn(
            l,
            n,
            u,
            c
          ), l = n.stateNode;
          try {
            var r = n.memoizedProps, m = r.id, g = r.onPostCommit;
            typeof g == "function" && g(
              m,
              n.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (A) {
            jt(n, n.return, A);
          }
        } else
          Yn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        Yn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        Yn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? Yn(
          l,
          n,
          u,
          c
        ) : sr(l, n) : r._visibility & 2 ? Yn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Af(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && sh(m, n);
        break;
      case 24:
        Yn(
          l,
          n,
          u,
          c
        ), s & 2048 && rh(n.alternate, n);
        break;
      default:
        Yn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Af(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, A = c, j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Af(
            r,
            m,
            g,
            A,
            s
          ), qn(8, m);
          break;
        case 23:
          break;
        case 22:
          var V = m.stateNode;
          m.memoizedState !== null ? V._visibility & 2 ? Af(
            r,
            m,
            g,
            A,
            s
          ) : sr(
            r,
            m
          ) : (V._visibility |= 2, Af(
            r,
            m,
            g,
            A,
            s
          )), s && j & 2048 && sh(
            m.alternate,
            m
          );
          break;
        case 24:
          Af(
            r,
            m,
            g,
            A,
            s
          ), s && j & 2048 && rh(m.alternate, m);
          break;
        default:
          Af(
            r,
            m,
            g,
            A,
            s
          );
      }
      n = n.sibling;
    }
  }
  function sr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            sr(u, c), s & 2048 && sh(
              c.alternate,
              c
            );
            break;
          case 24:
            sr(u, c), s & 2048 && rh(c.alternate, c);
            break;
          default:
            sr(u, c);
        }
        n = n.sibling;
      }
  }
  var Ja = 8192;
  function Lu(l, n, u) {
    if (l.subtreeFlags & Ja)
      for (l = l.child; l !== null; )
        cv(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function cv(l, n, u) {
    switch (l.tag) {
      case 26:
        Lu(
          l,
          n,
          u
        ), l.flags & Ja && l.memoizedState !== null && Ku(
          u,
          Fe,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Lu(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = Fe;
        Fe = ga(l.stateNode.containerInfo), Lu(
          l,
          n,
          u
        ), Fe = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = Ja, Ja = 16777216, Lu(
          l,
          n,
          u
        ), Ja = c) : Lu(
          l,
          n,
          u
        ));
        break;
      default:
        Lu(
          l,
          n,
          u
        );
    }
  }
  function dh(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function zf(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Wl = c, hh(
            c,
            l
          );
        }
      dh(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Jy(l), l = l.sibling;
  }
  function Jy(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        zf(l), l.flags & 2048 && yn(9, l, l.return);
        break;
      case 3:
        zf(l);
        break;
      case 12:
        zf(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, rr(l)) : zf(l);
        break;
      default:
        zf(l);
    }
  }
  function rr(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          Wl = c, hh(
            c,
            l
          );
        }
      dh(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          yn(8, n, n.return), rr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, rr(n));
          break;
        default:
          rr(n);
      }
      l = l.sibling;
    }
  }
  function hh(l, n) {
    for (; Wl !== null; ) {
      var u = Wl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          yn(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          qs(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, Wl = c;
      else
        e: for (u = l; Wl !== null; ) {
          c = Wl;
          var s = c.sibling, r = c.return;
          if (Ly(c), c === u) {
            Wl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, Wl = s;
            break e;
          }
          Wl = r;
        }
    }
  }
  var ov = {
    getCacheForType: function(l) {
      var n = k(Rl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return k(Rl).controller.signal;
    }
  }, Ky = typeof WeakMap == "function" ? WeakMap : Map, At = 0, Qt = null, ht = null, ct = 0, xt = 0, xe = null, Qu = !1, yc = !1, mh = !1, cu = 0, Pt = 0, ou = 0, so = 0, yh = 0, Ba = 0, yl = 0, dr = null, pl = null, ph = !1, fu = 0, $y = 0, Mt = 1 / 0, Of = null, ol = null, ql = 0, Di = null, pc = null, Vu = 0, Ka = 0, vh = null, gh = null, Rf = 0, hr = null;
  function $a() {
    return (At & 2) !== 0 && ct !== 0 ? ct & -ct : z.T !== null ? Ah() : ld();
  }
  function fv() {
    if (Ba === 0)
      if ((ct & 536870912) === 0 || dt) {
        var l = le;
        le <<= 1, (le & 3932160) === 0 && (le = 262144), Ba = l;
      } else Ba = 536870912;
    return l = Ca.current, l !== null && (l.flags |= 32), Ba;
  }
  function qa(l, n, u) {
    (l === Qt && (xt === 2 || xt === 9) || l.cancelPendingCommit !== null) && (Zu(l, 0), _i(
      l,
      ct,
      Ba,
      !1
    )), Xi(l, u), ((At & 2) === 0 || l !== Qt) && (l === Qt && ((At & 2) === 0 && (so |= u), Pt === 4 && _i(
      l,
      ct,
      Ba,
      !1
    )), Ju(l));
  }
  function sv(l, n, u) {
    if ((At & 6) !== 0) throw Error(M(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || it(l, n), s = c ? yv(l, n) : bh(l, n, !0), r = c;
    do {
      if (s === 0) {
        yc && !c && _i(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !rv(u)) {
          s = bh(l, n, !1), r = !1;
          continue;
        }
        if (s === 2) {
          if (r = n, l.errorRecoveryDisabledLanes & r)
            var m = 0;
          else
            m = l.pendingLanes & -536870913, m = m !== 0 ? m : m & 536870912 ? 536870912 : 0;
          if (m !== 0) {
            n = m;
            e: {
              var g = l;
              s = dr;
              var A = g.current.memoizedState.isDehydrated;
              if (A && (Zu(g, m).flags |= 256), m = bh(
                g,
                m,
                !1
              ), m !== 2) {
                if (mh && !A) {
                  g.errorRecoveryDisabledLanes |= r, so |= r, s = 4;
                  break e;
                }
                r = pl, pl = s, r !== null && (pl === null ? pl = r : pl.push.apply(
                  pl,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Zu(l, 0), _i(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(M(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              _i(
                c,
                n,
                Ba,
                !Qu
              );
              break e;
            case 2:
              pl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(M(329));
          }
          if ((n & 62914560) === n && (s = fu + 300 - ke(), 10 < s)) {
            if (_i(
              c,
              n,
              Ba,
              !Qu
            ), ve(c, 0, !0) !== 0) break e;
            Vu = n, c.timeoutHandle = Ar(
              mr.bind(
                null,
                c,
                u,
                pl,
                Of,
                ph,
                n,
                Ba,
                so,
                yl,
                Qu,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          mr(
            c,
            u,
            pl,
            Of,
            ph,
            n,
            Ba,
            so,
            yl,
            Qu,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ju(l);
  }
  function mr(l, n, u, c, s, r, m, g, A, j, V, $, B, L) {
    if (l.timeoutHandle = -1, $ = n.subtreeFlags, $ & 8192 || ($ & 16785408) === 16785408) {
      $ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zn
      }, cv(
        n,
        r,
        $
      );
      var me = (r & 62914560) === r ? fu - ke() : (r & 4194048) === r ? $y - ke() : 0;
      if (me = S0(
        $,
        me
      ), me !== null) {
        Vu = r, l.cancelPendingCommit = me(
          Sv.bind(
            null,
            l,
            n,
            r,
            u,
            c,
            s,
            m,
            g,
            A,
            V,
            $,
            null,
            B,
            L
          )
        ), _i(l, r, m, !j);
        return;
      }
    }
    Sv(
      l,
      n,
      r,
      u,
      c,
      s,
      m,
      g,
      A
    );
  }
  function rv(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!pa(r(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = n.child, n.subtreeFlags & 16384 && u !== null)
        u.return = n, n = u;
      else {
        if (n === l) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === l) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function _i(l, n, u, c) {
    n &= ~yh, n &= ~so, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Ql(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && ps(l, u, n);
  }
  function Df() {
    return (At & 6) === 0 ? (Ci(0), !1) : !0;
  }
  function ky() {
    if (ht !== null) {
      if (xt === 0)
        var l = ht.return;
      else
        l = ht, eu = vi = null, Ks(l), ac = null, Ic = 0, l = ht;
      for (; l !== null; )
        uv(l.alternate, l), l = l.return;
      ht = null;
    }
  }
  function Zu(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, jv(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Vu = 0, ky(), Qt = l, ht = u = yi(l.current, null), ct = n, xt = 0, xe = null, Qu = !1, yc = it(l, n), mh = !1, yl = Ba = yh = so = ou = Pt = 0, pl = dr = null, ph = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Ql(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return cu = n, an(), u;
  }
  function _f(l, n) {
    Ke = null, z.H = tr, n === ec || n === nf ? (n = ny(), xt = 3) : n === Wc ? (n = ny(), xt = 4) : xt = n === th ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, xe = n, ht === null && (Pt = 1, pf(
      l,
      un(n, l.current)
    ));
  }
  function dv() {
    var l = Ca.current;
    return l === null ? !0 : (ct & 4194048) === ct ? rn === null : (ct & 62914560) === ct || (ct & 536870912) !== 0 ? l === rn : !1;
  }
  function hv() {
    var l = z.H;
    return z.H = tr, l === null ? tr : l;
  }
  function mv() {
    var l = z.A;
    return z.A = ov, l;
  }
  function Sh() {
    Pt = 4, Qu || (ct & 4194048) !== ct && Ca.current !== null || (yc = !0), (ou & 134217727) === 0 && (so & 134217727) === 0 || Qt === null || _i(
      Qt,
      ct,
      Ba,
      !1
    );
  }
  function bh(l, n, u) {
    var c = At;
    At |= 2;
    var s = hv(), r = mv();
    (Qt !== l || ct !== n) && (Of = null, Zu(l, n)), n = !1;
    var m = Pt;
    e: do
      try {
        if (xt !== 0 && ht !== null) {
          var g = ht, A = xe;
          switch (xt) {
            case 8:
              ky(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ca.current === null && (n = !0);
              var j = xt;
              if (xt = 0, xe = null, ro(l, g, A, j), u && yc) {
                m = 0;
                break e;
              }
              break;
            default:
              j = xt, xt = 0, xe = null, ro(l, g, A, j);
          }
        }
        aS(), m = Pt;
        break;
      } catch (V) {
        _f(l, V);
      }
    while (!0);
    return n && l.shellSuspendCounter++, eu = vi = null, At = c, z.H = s, z.A = r, ht === null && (Qt = null, ct = 0, an()), m;
  }
  function aS() {
    for (; ht !== null; ) pv(ht);
  }
  function yv(l, n) {
    var u = At;
    At |= 2;
    var c = hv(), s = mv();
    Qt !== l || ct !== n ? (Of = null, Mt = ke() + 500, Zu(l, n)) : yc = it(
      l,
      n
    );
    e: do
      try {
        if (xt !== 0 && ht !== null) {
          n = ht;
          var r = xe;
          t: switch (xt) {
            case 1:
              xt = 0, xe = null, ro(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (ly(r)) {
                xt = 0, xe = null, vv(n);
                break;
              }
              n = function() {
                xt !== 2 && xt !== 9 || Qt !== l || (xt = 7), Ju(l);
              }, r.then(n, n);
              break e;
            case 3:
              xt = 7;
              break e;
            case 4:
              xt = 5;
              break e;
            case 7:
              ly(r) ? (xt = 0, xe = null, vv(n)) : (xt = 0, xe = null, ro(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (ht.tag) {
                case 26:
                  m = ht.memoizedState;
                case 5:
                case 27:
                  var g = ht;
                  if (m ? Wa(m) : g.stateNode.complete) {
                    xt = 0, xe = null;
                    var A = g.sibling;
                    if (A !== null) ht = A;
                    else {
                      var j = g.return;
                      j !== null ? (ht = j, yr(j)) : ht = null;
                    }
                    break t;
                  }
              }
              xt = 0, xe = null, ro(l, n, r, 5);
              break;
            case 6:
              xt = 0, xe = null, ro(l, n, r, 6);
              break;
            case 8:
              ky(), Pt = 6;
              break e;
            default:
              throw Error(M(462));
          }
        }
        vc();
        break;
      } catch (V) {
        _f(l, V);
      }
    while (!0);
    return eu = vi = null, z.H = c, z.A = s, At = u, ht !== null ? 0 : (Qt = null, ct = 0, an(), Pt);
  }
  function vc() {
    for (; ht !== null && !Ll(); )
      pv(ht);
  }
  function pv(l) {
    var n = jy(l.alternate, l, cu);
    l.memoizedProps = l.pendingProps, n === null ? yr(l) : ht = n;
  }
  function vv(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = dc(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ct
        );
        break;
      case 11:
        n = dc(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ct
        );
        break;
      case 5:
        Ks(n);
      default:
        uv(u, n), n = ht = km(n, cu), n = jy(u, n, cu);
    }
    l.memoizedProps = l.pendingProps, n === null ? yr(l) : ht = n;
  }
  function ro(l, n, u, c) {
    eu = vi = null, Ks(n), ac = null, Ic = 0;
    var s = n.return;
    try {
      if (lS(
        l,
        s,
        n,
        u,
        ct
      )) {
        Pt = 1, pf(
          l,
          un(u, l.current)
        ), ht = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw ht = s, r;
      Pt = 1, pf(
        l,
        un(u, l.current)
      ), ht = null;
      return;
    }
    n.flags & 32768 ? (dt || c === 1 ? l = !0 : yc || (ct & 536870912) !== 0 ? l = !1 : (Qu = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = Ca.current, c !== null && c.tag === 13 && (c.flags |= 16384))), gv(n, l)) : yr(n);
  }
  function yr(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        gv(
          n,
          Qu
        );
        return;
      }
      l = n.return;
      var u = av(
        n.alternate,
        n,
        cu
      );
      if (u !== null) {
        ht = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        ht = n;
        return;
      }
      ht = n = l;
    } while (n !== null);
    Pt === 0 && (Pt = 5);
  }
  function gv(l, n) {
    do {
      var u = nv(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, ht = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        ht = l;
        return;
      }
      ht = l = u;
    } while (l !== null);
    Pt = 6, ht = null;
  }
  function Sv(l, n, u, c, s, r, m, g, A) {
    l.cancelPendingCommit = null;
    do
      Mf();
    while (ql !== 0);
    if ((At & 6) !== 0) throw Error(M(327));
    if (n !== null) {
      if (n === l.current) throw Error(M(177));
      if (r = n.lanes | n.childLanes, r |= Hn, Yo(
        l,
        u,
        r,
        m,
        g,
        A
      ), l === Qt && (ht = Qt = null, ct = 0), pc = n, Di = l, Vu = u, Ka = r, vh = s, gh = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, _v(qt, function() {
        return zv(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = z.T, z.T = null, s = Q.p, Q.p = 2, m = At, At |= 4;
        try {
          Ef(l, n, u);
        } finally {
          At = m, Q.p = s, z.T = c;
        }
      }
      ql = 1, bv(), Ev(), Tv();
    }
  }
  function bv() {
    if (ql === 1) {
      ql = 0;
      var l = Di, n = pc, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = z.T, z.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = At;
        At |= 4;
        try {
          fh(n, l);
          var r = Mh, m = ki(l.containerInfo), g = r.focusedElem, A = r.selectionRange;
          if (m !== g && g && g.ownerDocument && Lc(
            g.ownerDocument.documentElement,
            g
          )) {
            if (A !== null && Ds(g)) {
              var j = A.start, V = A.end;
              if (V === void 0 && (V = j), "selectionStart" in g)
                g.selectionStart = j, g.selectionEnd = Math.min(
                  V,
                  g.value.length
                );
              else {
                var $ = g.ownerDocument || document, B = $ && $.defaultView || window;
                if (B.getSelection) {
                  var L = B.getSelection(), me = g.textContent.length, Ce = Math.min(A.start, me), Zt = A.end === void 0 ? Ce : Math.min(A.end, me);
                  !L.extend && Ce > Zt && (m = Zt, Zt = Ce, Ce = m);
                  var U = Km(
                    g,
                    Ce
                  ), D = Km(
                    g,
                    Zt
                  );
                  if (U && D && (L.rangeCount !== 1 || L.anchorNode !== U.node || L.anchorOffset !== U.offset || L.focusNode !== D.node || L.focusOffset !== D.offset)) {
                    var x = $.createRange();
                    x.setStart(U.node, U.offset), L.removeAllRanges(), Ce > Zt ? (L.addRange(x), L.extend(D.node, D.offset)) : (x.setEnd(D.node, D.offset), L.addRange(x));
                  }
                }
              }
            }
            for ($ = [], L = g; L = L.parentNode; )
              L.nodeType === 1 && $.push({
                element: L,
                left: L.scrollLeft,
                top: L.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < $.length; g++) {
              var K = $[g];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Yl = !!_h, Mh = _h = null;
        } finally {
          At = s, Q.p = c, z.T = u;
        }
      }
      l.current = n, ql = 2;
    }
  }
  function Ev() {
    if (ql === 2) {
      ql = 0;
      var l = Di, n = pc, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = z.T, z.T = null;
        var c = Q.p;
        Q.p = 2;
        var s = At;
        At |= 4;
        try {
          cr(l, n.alternate, n);
        } finally {
          At = s, Q.p = c, z.T = u;
        }
      }
      ql = 3;
    }
  }
  function Tv() {
    if (ql === 4 || ql === 3) {
      ql = 0, ll();
      var l = Di, n = pc, u = Vu, c = gh;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? ql = 5 : (ql = 0, pc = Di = null, Av(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (ol = null), Em(u), n = n.stateNode, zl && typeof zl.onCommitFiberRoot == "function")
        try {
          zl.onCommitFiberRoot(
            La,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = z.T, s = Q.p, Q.p = 2, z.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          z.T = n, Q.p = s;
        }
      }
      (Vu & 3) !== 0 && Mf(), Ju(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === hr ? Rf++ : (Rf = 0, hr = l) : Rf = 0, Ci(0);
    }
  }
  function Av(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, qs(n)));
  }
  function Mf() {
    return bv(), Ev(), Tv(), zv();
  }
  function zv() {
    if (ql !== 5) return !1;
    var l = Di, n = Ka;
    Ka = 0;
    var u = Em(Vu), c = z.T, s = Q.p;
    try {
      Q.p = 32 > u ? 32 : u, z.T = null, u = vh, vh = null;
      var r = Di, m = Vu;
      if (ql = 0, pc = Di = null, Vu = 0, (At & 6) !== 0) throw Error(M(331));
      var g = At;
      if (At |= 4, Jy(r.current), Tf(
        r,
        r.current,
        m,
        u
      ), At = g, Ci(0, !1), zl && typeof zl.onPostCommitFiberRoot == "function")
        try {
          zl.onPostCommitFiberRoot(La, r);
        } catch {
        }
      return !0;
    } finally {
      Q.p = s, z.T = c, Av(l, n);
    }
  }
  function Ov(l, n, u) {
    n = un(u, n), n = Ry(l.stateNode, n, 2), l = sn(l, n, 2), l !== null && (Xi(l, 2), Ju(l));
  }
  function jt(l, n, u) {
    if (l.tag === 3)
      Ov(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          Ov(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (ol === null || !ol.has(c))) {
            l = un(u, l), u = Dy(2), c = sn(n, u, 2), c !== null && (_y(
              u,
              c,
              n,
              l
            ), Xi(c, 2), Ju(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function pr(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new Ky();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (mh = !0, s.add(u), l = Wy.bind(null, l, n, u), n.then(l, l));
  }
  function Wy(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Qt === l && (ct & u) === u && (Pt === 4 || Pt === 3 && (ct & 62914560) === ct && 300 > ke() - fu ? (At & 2) === 0 && Zu(l, 0) : yh |= u, yl === ct && (yl = 0)), Ju(l);
  }
  function Rv(l, n) {
    n === 0 && (n = ma()), l = mi(l, n), l !== null && (Xi(l, n), Ju(l));
  }
  function pn(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Rv(l, u);
  }
  function Dv(l, n) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var c = l.stateNode, s = l.memoizedState;
        s !== null && (u = s.retryLane);
        break;
      case 19:
        c = l.stateNode;
        break;
      case 22:
        c = l.stateNode._retryCache;
        break;
      default:
        throw Error(M(314));
    }
    c !== null && c.delete(n), Rv(l, u);
  }
  function _v(l, n) {
    return ce(l, n);
  }
  var Cf = null, ho = null, Fy = !1, Eh = !1, Iy = !1, Mi = 0;
  function Ju(l) {
    l !== ho && l.next === null && (ho === null ? Cf = ho = l : ho = ho.next = l), Eh = !0, Fy || (Fy = !0, gr());
  }
  function Ci(l, n) {
    if (!Iy && Eh) {
      Iy = !0;
      do
        for (var u = !1, c = Cf; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Ql(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, mo(c, r));
          } else
            r = ct, r = ve(
              c,
              c === Qt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || it(c, r) || (u = !0, mo(c, r));
          c = c.next;
        }
      while (u);
      Iy = !1;
    }
  }
  function Th() {
    Py();
  }
  function Py() {
    Eh = Fy = !1;
    var l = 0;
    Mi !== 0 && nS() && (l = Mi);
    for (var n = ke(), u = null, c = Cf; c !== null; ) {
      var s = c.next, r = e0(c, n);
      r === 0 ? (c.next = null, u === null ? Cf = s : u.next = s, s === null && (ho = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (Eh = !0)), c = s;
    }
    ql !== 0 && ql !== 5 || Ci(l), Mi !== 0 && (Mi = 0);
  }
  function e0(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Ql(r), g = 1 << m, A = s[m];
      A === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = Ve(g, n)) : A <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Qt, u = ct, u = ve(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (xt === 2 || xt === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && ua(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || it(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && ua(c), Em(u)) {
        case 2:
        case 8:
          u = ha;
          break;
        case 32:
          u = qt;
          break;
        case 268435456:
          u = Gi;
          break;
        default:
          u = qt;
      }
      return c = vr.bind(null, l), u = ce(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && ua(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function vr(l, n) {
    if (ql !== 0 && ql !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Mf() && l.callbackNode !== u)
      return null;
    var c = ct;
    return c = ve(
      l,
      l === Qt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (sv(l, c, n), e0(l, ke()), l.callbackNode != null && l.callbackNode === u ? vr.bind(null, l) : null);
  }
  function mo(l, n) {
    if (Mf()) return null;
    sv(l, n, !0);
  }
  function gr() {
    Bv(function() {
      (At & 6) !== 0 ? ce(
        On,
        Th
      ) : Py();
    });
  }
  function Ah() {
    if (Mi === 0) {
      var l = Pi;
      l === 0 && (l = P, P <<= 1, (P & 261888) === 0 && (P = 256)), Mi = l;
    }
    return Mi;
  }
  function Mv(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : _n("" + l);
  }
  function yo(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Sr(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = Mv(
        (s[za] || null).action
      ), m = c.submitter;
      m && (n = (n = m[za] || null) ? Mv(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new zs(
        "action",
        "action",
        null,
        c,
        s
      );
      l.push({
        event: g,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (c.defaultPrevented) {
                if (Mi !== 0) {
                  var A = m ? yo(s, m) : new FormData(s);
                  mf(
                    u,
                    {
                      pending: !0,
                      data: A,
                      method: s.method,
                      action: r
                    },
                    null,
                    A
                  );
                }
              } else
                typeof r == "function" && (g.preventDefault(), A = m ? yo(s, m) : new FormData(s), mf(
                  u,
                  {
                    pending: !0,
                    data: A,
                    method: s.method,
                    action: r
                  },
                  r,
                  A
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var zh = 0; zh < Io.length; zh++) {
    var Uf = Io[zh], t0 = Uf.toLowerCase(), l0 = Uf[0].toUpperCase() + Uf.slice(1);
    Ra(
      t0,
      "on" + l0
    );
  }
  Ra(Ms, "onAnimationEnd"), Ra($m, "onAnimationIteration"), Ra(zd, "onAnimationStart"), Ra("dblclick", "onDoubleClick"), Ra("focusin", "onFocus"), Ra("focusout", "onBlur"), Ra(Qc, "onTransitionRun"), Ra(Cs, "onTransitionStart"), Ra(Ru, "onTransitionCancel"), Ra(wp, "onTransitionEnd"), Eu("onMouseEnter", ["mouseout", "mouseover"]), Eu("onMouseLeave", ["mouseout", "mouseover"]), Eu("onPointerEnter", ["pointerout", "pointerover"]), Eu("onPointerLeave", ["pointerout", "pointerover"]), Vi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Vi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Vi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Vi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Vi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Vi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Hf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Cv = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hf)
  );
  function Uv(l, n) {
    n = (n & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var c = l[u], s = c.event;
      c = c.listeners;
      e: {
        var r = void 0;
        if (n)
          for (var m = c.length - 1; 0 <= m; m--) {
            var g = c[m], A = g.instance, j = g.currentTarget;
            if (g = g.listener, A !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = j;
            try {
              r(s);
            } catch (V) {
              Vc(V);
            }
            s.currentTarget = null, r = A;
          }
        else
          for (m = 0; m < c.length; m++) {
            if (g = c[m], A = g.instance, j = g.currentTarget, g = g.listener, A !== r && s.isPropagationStopped())
              break e;
            r = g, s.currentTarget = j;
            try {
              r(s);
            } catch (V) {
              Vc(V);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function ft(l, n) {
    var u = n[ad];
    u === void 0 && (u = n[ad] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (br(n, l, 2, !1), u.add(c));
  }
  function a0(l, n, u) {
    var c = 0;
    n && (c |= 4), br(
      u,
      l,
      c,
      n
    );
  }
  var Oh = "_reactListening" + Math.random().toString(36).slice(2);
  function Nf(l) {
    if (!l[Oh]) {
      l[Oh] = !0, Hc.forEach(function(u) {
        u !== "selectionchange" && (Cv.has(u) || a0(u, !1, l), a0(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Oh] || (n[Oh] = !0, a0("selectionchange", !1, n));
    }
  }
  function br(l, n, u, c) {
    switch (Mr(n)) {
      case 2:
        var s = $u;
        break;
      case 8:
        s = ku;
        break;
      default:
        s = oa;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Ts || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function n0(l, n, u, c, s) {
    var r = c;
    if ((n & 1) === 0 && (n & 2) === 0 && c !== null)
      e: for (; ; ) {
        if (c === null) return;
        var m = c.tag;
        if (m === 3 || m === 4) {
          var g = c.stateNode.containerInfo;
          if (g === s) break;
          if (m === 4)
            for (m = c.return; m !== null; ) {
              var A = m.tag;
              if ((A === 3 || A === 4) && m.stateNode.containerInfo === s)
                return;
              m = m.return;
            }
          for (; g !== null; ) {
            if (m = Mc(g), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    Cm(function() {
      var j = r, V = rd(u), $ = [];
      e: {
        var B = Du.get(l);
        if (B !== void 0) {
          var L = zs, me = l;
          switch (l) {
            case "keypress":
              if (hd(u) === 0) break e;
            case "keydown":
            case "keyup":
              L = vd;
              break;
            case "focusin":
              me = "focus", L = yd;
              break;
            case "focusout":
              me = "blur", L = yd;
              break;
            case "beforeblur":
            case "afterblur":
              L = yd;
              break;
            case "click":
              if (u.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = Ko;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = _p;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = Np;
              break;
            case Ms:
            case $m:
            case zd:
              L = Cp;
              break;
            case wp:
              L = Ig;
              break;
            case "scroll":
            case "scrollend":
              L = Wg;
              break;
            case "wheel":
              L = Pg;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = Bc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = $n;
              break;
            case "toggle":
            case "beforetoggle":
              L = Gm;
          }
          var Ce = (n & 4) !== 0, Zt = !Ce && (l === "scroll" || l === "scrollend"), U = Ce ? B !== null ? B + "Capture" : null : B;
          Ce = [];
          for (var D = j, x; D !== null; ) {
            var K = D;
            if (x = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || x === null || U === null || (K = Vl(D, U), K != null && Ce.push(
              Er(D, K, x)
            )), Zt) break;
            D = D.return;
          }
          0 < Ce.length && (B = new L(
            B,
            me,
            null,
            u,
            V
          ), $.push({ event: B, listeners: Ce }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (B = l === "mouseover" || l === "pointerover", L = l === "mouseout" || l === "pointerout", B && u !== sd && (me = u.relatedTarget || u.fromElement) && (Mc(me) || me[Li]))
            break e;
          if ((L || B) && (B = V.window === V ? V : (B = V.ownerDocument) ? B.defaultView || B.parentWindow : window, L ? (me = u.relatedTarget || u.toElement, L = j, me = me ? Mc(me) : null, me !== null && (Zt = de(me), Ce = me.tag, me !== Zt || Ce !== 5 && Ce !== 27 && Ce !== 6) && (me = null)) : (L = null, me = j), L !== me)) {
            if (Ce = Ko, K = "onMouseLeave", U = "onMouseEnter", D = "mouse", (l === "pointerout" || l === "pointerover") && (Ce = $n, K = "onPointerLeave", U = "onPointerEnter", D = "pointer"), Zt = L == null ? B : Go(L), x = me == null ? B : Go(me), B = new Ce(
              K,
              D + "leave",
              L,
              u,
              V
            ), B.target = Zt, B.relatedTarget = x, K = null, Mc(V) === j && (Ce = new Ce(
              U,
              D + "enter",
              me,
              u,
              V
            ), Ce.target = x, Ce.relatedTarget = Zt, K = Ce), Zt = K, L && me)
              t: {
                for (Ce = Hv, U = L, D = me, x = 0, K = U; K; K = Ce(K))
                  x++;
                K = 0;
                for (var Re = D; Re; Re = Ce(Re))
                  K++;
                for (; 0 < x - K; )
                  U = Ce(U), x--;
                for (; 0 < K - x; )
                  D = Ce(D), K--;
                for (; x--; ) {
                  if (U === D || D !== null && U === D.alternate) {
                    Ce = U;
                    break t;
                  }
                  U = Ce(U), D = Ce(D);
                }
                Ce = null;
              }
            else Ce = null;
            L !== null && Rh(
              $,
              B,
              L,
              Ce,
              !1
            ), me !== null && Zt !== null && Rh(
              $,
              Zt,
              me,
              Ce,
              !0
            );
          }
        }
        e: {
          if (B = j ? Go(j) : window, L = B.nodeName && B.nodeName.toLowerCase(), L === "select" || L === "input" && B.type === "file")
            var bt = Vm;
          else if (Ou(B))
            if (bd)
              bt = Xc;
            else {
              bt = Yp;
              var ge = qp;
            }
          else
            L = B.nodeName, !L || L.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? j && Mm(j.elementType) && (bt = Vm) : bt = $i;
          if (bt && (bt = bt(l, j))) {
            Qm(
              $,
              bt,
              u,
              V
            );
            break e;
          }
          ge && ge(l, B, j), l === "focusout" && j && B.type === "number" && j.memoizedProps.value != null && Nc(B, "number", B.value);
        }
        switch (ge = j ? Go(j) : window, l) {
          case "focusin":
            (Ou(ge) || ge.contentEditable === "true") && (Wi = ge, Wo = j, Un = null);
            break;
          case "focusout":
            Un = Wo = Wi = null;
            break;
          case "mousedown":
            Wn = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wn = !1, Ad($, u, V);
            break;
          case "selectionchange":
            if (_s) break;
          case "keydown":
          case "keyup":
            Ad($, u, V);
        }
        var Ze;
        if ($o)
          e: {
            switch (l) {
              case "compositionstart":
                var Ie = "onCompositionStart";
                break e;
              case "compositionend":
                Ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ie = "onCompositionUpdate";
                break e;
            }
            Ie = void 0;
          }
        else
          Yc ? Sd(l, u) && (Ie = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (Ie = "onCompositionStart");
        Ie && (wm && u.locale !== "ko" && (Yc || Ie !== "onCompositionStart" ? Ie === "onCompositionEnd" && Yc && (Ze = Hm()) : (di = V, Um = "value" in di ? di.value : di.textContent, Yc = !0)), ge = Tr(j, Ie), 0 < ge.length && (Ie = new Up(
          Ie,
          l,
          null,
          u,
          V
        ), $.push({ event: Ie, listeners: ge }), Ze ? Ie.data = Ze : (Ze = Xm(u), Ze !== null && (Ie.data = Ze)))), (Ze = ya ? Bp(l, u) : eS(l, u)) && (Ie = Tr(j, "onBeforeInput"), 0 < Ie.length && (ge = new Up(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          V
        ), $.push({
          event: ge,
          listeners: Ie
        }), ge.data = Ze)), Sr(
          $,
          l,
          j,
          u,
          V
        );
      }
      Uv($, n);
    });
  }
  function Er(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function Tr(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Vl(l, u), s != null && c.unshift(
        Er(l, s, r)
      ), s = Vl(l, n), s != null && c.push(
        Er(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function Hv(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Rh(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, A = g.alternate, j = g.stateNode;
      if (g = g.tag, A !== null && A === c) break;
      g !== 5 && g !== 26 && g !== 27 || j === null || (A = j, s ? (j = Vl(u, r), j != null && m.unshift(
        Er(u, j, A)
      )) : s || (j = Vl(u, r), j != null && m.push(
        Er(u, j, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var Nv = /\r\n?/g, u0 = /\u0000|\uFFFD/g;
  function i0(l) {
    return (typeof l == "string" ? l : "" + l).replace(Nv, `
`).replace(u0, "");
  }
  function c0(l, n) {
    return n = i0(n), i0(l) === n;
  }
  function Vt(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Tu(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Tu(l, "" + c);
        break;
      case "className":
        cd(l, "class", c);
        break;
      case "tabIndex":
        cd(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cd(l, u, c);
        break;
      case "style":
        Op(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          cd(l, "data", c);
          break;
        }
      case "src":
      case "href":
        if (c === "" && (n !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (c == null || typeof c == "function" || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = _n("" + c), l.setAttribute(u, c);
        break;
      case "action":
      case "formAction":
        if (typeof c == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof r == "function" && (u === "formAction" ? (n !== "input" && Vt(l, n, "name", s.name, s, null), Vt(
            l,
            n,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Vt(
            l,
            n,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Vt(
            l,
            n,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Vt(l, n, "encType", s.encType, s, null), Vt(l, n, "method", s.method, s, null), Vt(l, n, "target", s.target, s, null)));
        if (c == null || typeof c == "symbol" || typeof c == "boolean") {
          l.removeAttribute(u);
          break;
        }
        c = _n("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Zn);
        break;
      case "onScroll":
        c != null && ft("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ft("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(M(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(M(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "muted":
        l.muted = c && typeof c != "function" && typeof c != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (c == null || typeof c == "function" || typeof c == "boolean" || typeof c == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = _n("" + c), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "" + c) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        c && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        c === !0 ? l.setAttribute(u, "") : c !== !1 && c != null && typeof c != "function" && typeof c != "symbol" ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        c != null && typeof c != "function" && typeof c != "symbol" && !isNaN(c) && 1 <= c ? l.setAttribute(u, c) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        c == null || typeof c == "function" || typeof c == "symbol" || isNaN(c) ? l.removeAttribute(u) : l.setAttribute(u, c);
        break;
      case "popover":
        ft("beforetoggle", l), ft("toggle", l), Lo(l, "popover", c);
        break;
      case "xlinkActuate":
        si(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        si(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        si(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        si(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        si(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        si(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        si(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        si(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        si(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        Lo(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = kg.get(u) || u, Lo(l, u, c));
    }
  }
  function o0(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        Op(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(M(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(M(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Tu(l, c) : (typeof c == "number" || typeof c == "bigint") && Tu(l, "" + c);
        break;
      case "onScroll":
        c != null && ft("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ft("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Zn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Qi.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[za] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : Lo(l, u, c);
          }
    }
  }
  function ca(l, n, u) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ft("error", l), ft("load", l);
        var c = !1, s = !1, r;
        for (r in u)
          if (u.hasOwnProperty(r)) {
            var m = u[r];
            if (m != null)
              switch (r) {
                case "src":
                  c = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(M(137, n));
                default:
                  Vt(l, n, r, m, u, null);
              }
          }
        s && Vt(l, n, "srcSet", u.srcSet, u, null), c && Vt(l, n, "src", u.src, u, null);
        return;
      case "input":
        ft("invalid", l);
        var g = r = m = s = null, A = null, j = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var V = u[c];
            if (V != null)
              switch (c) {
                case "name":
                  s = V;
                  break;
                case "type":
                  m = V;
                  break;
                case "checked":
                  A = V;
                  break;
                case "defaultChecked":
                  j = V;
                  break;
                case "value":
                  r = V;
                  break;
                case "defaultValue":
                  g = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(M(137, n));
                  break;
                default:
                  Vt(l, n, c, V, u, null);
              }
          }
        Ss(
          l,
          r,
          g,
          A,
          j,
          m,
          s,
          !1
        );
        return;
      case "select":
        ft("invalid", l), c = m = r = null;
        for (s in u)
          if (u.hasOwnProperty(s) && (g = u[s], g != null))
            switch (s) {
              case "value":
                r = g;
                break;
              case "defaultValue":
                m = g;
                break;
              case "multiple":
                c = g;
              default:
                Vt(l, n, s, g, u, null);
            }
        n = r, u = m, l.multiple = !!c, n != null ? Qo(l, !!c, n, !1) : u != null && Qo(l, !!c, u, !0);
        return;
      case "textarea":
        ft("invalid", l), r = s = c = null;
        for (m in u)
          if (u.hasOwnProperty(m) && (g = u[m], g != null))
            switch (m) {
              case "value":
                c = g;
                break;
              case "defaultValue":
                s = g;
                break;
              case "children":
                r = g;
                break;
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(M(91));
                break;
              default:
                Vt(l, n, m, g, u, null);
            }
        _m(l, c, s, r);
        return;
      case "option":
        for (A in u)
          u.hasOwnProperty(A) && (c = u[A], c != null) && (A === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Vt(l, n, A, c, u, null));
        return;
      case "dialog":
        ft("beforetoggle", l), ft("toggle", l), ft("cancel", l), ft("close", l);
        break;
      case "iframe":
      case "object":
        ft("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Hf.length; c++)
          ft(Hf[c], l);
        break;
      case "image":
        ft("error", l), ft("load", l);
        break;
      case "details":
        ft("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ft("error", l), ft("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in u)
          if (u.hasOwnProperty(j) && (c = u[j], c != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(M(137, n));
              default:
                Vt(l, n, j, c, u, null);
            }
        return;
      default:
        if (Mm(n)) {
          for (V in u)
            u.hasOwnProperty(V) && (c = u[V], c !== void 0 && o0(
              l,
              n,
              V,
              c,
              u,
              void 0
            ));
          return;
        }
    }
    for (g in u)
      u.hasOwnProperty(g) && (c = u[g], c != null && Vt(l, n, g, c, u, null));
  }
  function f0(l, n, u, c) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, r = null, m = null, g = null, A = null, j = null, V = null;
        for (L in u) {
          var $ = u[L];
          if (u.hasOwnProperty(L) && $ != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = $;
              default:
                c.hasOwnProperty(L) || Vt(l, n, L, null, c, $);
            }
        }
        for (var B in c) {
          var L = c[B];
          if ($ = u[B], c.hasOwnProperty(B) && (L != null || $ != null))
            switch (B) {
              case "type":
                r = L;
                break;
              case "name":
                s = L;
                break;
              case "checked":
                j = L;
                break;
              case "defaultChecked":
                V = L;
                break;
              case "value":
                m = L;
                break;
              case "defaultValue":
                g = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null)
                  throw Error(M(137, n));
                break;
              default:
                L !== $ && Vt(
                  l,
                  n,
                  B,
                  L,
                  c,
                  $
                );
            }
        }
        gs(
          l,
          m,
          g,
          A,
          j,
          V,
          r,
          s
        );
        return;
      case "select":
        L = m = g = B = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                L = A;
              default:
                c.hasOwnProperty(r) || Vt(
                  l,
                  n,
                  r,
                  null,
                  c,
                  A
                );
            }
        for (s in c)
          if (r = c[s], A = u[s], c.hasOwnProperty(s) && (r != null || A != null))
            switch (s) {
              case "value":
                B = r;
                break;
              case "defaultValue":
                g = r;
                break;
              case "multiple":
                m = r;
              default:
                r !== A && Vt(
                  l,
                  n,
                  s,
                  r,
                  c,
                  A
                );
            }
        n = g, u = m, c = L, B != null ? Qo(l, !!u, B, !1) : !!c != !!u && (n != null ? Qo(l, !!u, n, !0) : Qo(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        L = B = null;
        for (g in u)
          if (s = u[g], u.hasOwnProperty(g) && s != null && !c.hasOwnProperty(g))
            switch (g) {
              case "value":
                break;
              case "children":
                break;
              default:
                Vt(l, n, g, null, c, s);
            }
        for (m in c)
          if (s = c[m], r = u[m], c.hasOwnProperty(m) && (s != null || r != null))
            switch (m) {
              case "value":
                B = s;
                break;
              case "defaultValue":
                L = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(M(91));
                break;
              default:
                s !== r && Vt(l, n, m, s, c, r);
            }
        Dm(l, B, L);
        return;
      case "option":
        for (var me in u)
          B = u[me], u.hasOwnProperty(me) && B != null && !c.hasOwnProperty(me) && (me === "selected" ? l.selected = !1 : Vt(
            l,
            n,
            me,
            null,
            c,
            B
          ));
        for (A in c)
          B = c[A], L = u[A], c.hasOwnProperty(A) && B !== L && (B != null || L != null) && (A === "selected" ? l.selected = B && typeof B != "function" && typeof B != "symbol" : Vt(
            l,
            n,
            A,
            B,
            c,
            L
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var Ce in u)
          B = u[Ce], u.hasOwnProperty(Ce) && B != null && !c.hasOwnProperty(Ce) && Vt(l, n, Ce, null, c, B);
        for (j in c)
          if (B = c[j], L = u[j], c.hasOwnProperty(j) && B !== L && (B != null || L != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(M(137, n));
                break;
              default:
                Vt(
                  l,
                  n,
                  j,
                  B,
                  c,
                  L
                );
            }
        return;
      default:
        if (Mm(n)) {
          for (var Zt in u)
            B = u[Zt], u.hasOwnProperty(Zt) && B !== void 0 && !c.hasOwnProperty(Zt) && o0(
              l,
              n,
              Zt,
              void 0,
              c,
              B
            );
          for (V in c)
            B = c[V], L = u[V], !c.hasOwnProperty(V) || B === L || B === void 0 && L === void 0 || o0(
              l,
              n,
              V,
              B,
              c,
              L
            );
          return;
        }
    }
    for (var U in u)
      B = u[U], u.hasOwnProperty(U) && B != null && !c.hasOwnProperty(U) && Vt(l, n, U, null, c, B);
    for ($ in c)
      B = c[$], L = u[$], !c.hasOwnProperty($) || B === L || B == null && L == null || Vt(l, n, $, B, c, L);
  }
  function Dh(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function s0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && Dh(m)) {
          for (m = 0, g = s.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], j = A.startTime;
            if (j > g) break;
            var V = A.transferSize, $ = A.initiatorType;
            V && Dh($) && (A = A.responseEnd, m += V * (A < g ? 1 : (g - j) / (A - j)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var _h = null, Mh = null;
  function gc(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function xv(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function r0(l, n) {
    if (l === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && n === "foreignObject" ? 0 : l;
  }
  function xf(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Ch = null;
  function nS() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Ch ? !1 : (Ch = l, !0) : (Ch = null, !1);
  }
  var Ar = typeof setTimeout == "function" ? setTimeout : void 0, jv = typeof clearTimeout == "function" ? clearTimeout : void 0, po = typeof Promise == "function" ? Promise : void 0, Bv = typeof queueMicrotask == "function" ? queueMicrotask : typeof po < "u" ? function(l) {
    return po.resolve(null).then(l).catch(d0);
  } : Ar;
  function d0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function su(l) {
    return l === "head";
  }
  function h0(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), Jf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          vo(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, vo(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[bu] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && vo(l.ownerDocument.body);
      u = s;
    } while (u);
    Jf(n);
  }
  function Ml(l, n) {
    var u = l;
    l = 0;
    do {
      var c = u.nextSibling;
      if (u.nodeType === 1 ? n ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (n ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), c && c.nodeType === 8)
        if (u = c.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = c;
    } while (u);
  }
  function zr(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          zr(u), nd(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function uS(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[bu])
          switch (n) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (r = l.getAttribute("rel"), r === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (r !== s.rel || l.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || l.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (r = l.getAttribute("src"), (r !== (s.src == null ? null : s.src) || l.getAttribute("type") !== (s.type == null ? null : s.type) || l.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (n === "input" && l.type === "hidden") {
        var r = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && l.getAttribute("name") === r)
          return l;
      } else return l;
      if (l = Ya(l.nextSibling), l === null) break;
    }
    return null;
  }
  function et(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = Ya(l.nextSibling), l === null)) return null;
    return l;
  }
  function qv(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = Ya(l.nextSibling), l === null)) return null;
    return l;
  }
  function Gn(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Sc(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function jf(l, n) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = n;
    else if (l.data !== "$?" || u.readyState !== "loading")
      n();
    else {
      var c = function() {
        n(), u.removeEventListener("DOMContentLoaded", c);
      };
      u.addEventListener("DOMContentLoaded", c), l._reactRetry = c;
    }
  }
  function Ya(l) {
    for (; l != null; l = l.nextSibling) {
      var n = l.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = l.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return l;
  }
  var Or = null;
  function Uh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return Ya(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function ru(l) {
    l = l.previousSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (n === 0) return l;
          n--;
        } else u !== "/$" && u !== "/&" || n++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Bf(l, n, u) {
    switch (n = gc(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(M(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(M(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(M(454));
        return l;
      default:
        throw Error(M(451));
    }
  }
  function vo(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    nd(l);
  }
  var ka = /* @__PURE__ */ new Map(), Rr = /* @__PURE__ */ new Set();
  function ga(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var du = Q.d;
  Q.d = {
    f: iS,
    r: Yv,
    D: X,
    C: Ct,
    L: cS,
    m: m0,
    X: Ui,
    S: y0,
    M: bc
  };
  function iS() {
    var l = du.f(), n = Df();
    return l || n;
  }
  function Yv(l) {
    var n = Cc(l);
    n !== null && n.tag === 5 && n.type === "form" ? Lt(n) : du.r(l);
  }
  var qf = typeof document > "u" ? null : document;
  function Nl(l, n, u) {
    var c = qf;
    if (c && typeof n == "string" && n) {
      var s = ln(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), Rr.has(s) || (Rr.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), ca(n, "link", l), Ut(n), c.head.appendChild(n)));
    }
  }
  function X(l) {
    du.D(l), Nl("dns-prefetch", l, null);
  }
  function Ct(l, n) {
    du.C(l, n), Nl("preconnect", l, n);
  }
  function cS(l, n, u) {
    du.L(l, n, u);
    var c = qf;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + ln(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + ln(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + ln(
        u.imageSizes
      ) + '"]')) : s += '[href="' + ln(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = vn(l);
          break;
        case "script":
          r = go(l);
      }
      ka.has(r) || (l = G(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), ka.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Ec(r)) || n === "script" && c.querySelector(wf(r)) || (n = c.createElement("link"), ca(n, "link", l), Ut(n), c.head.appendChild(n)));
    }
  }
  function m0(l, n) {
    du.m(l, n);
    var u = qf;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + ln(c) + '"][href="' + ln(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = go(l);
      }
      if (!ka.has(r) && (l = G({ rel: "modulepreload", href: l }, n), ka.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(wf(r)))
              return;
        }
        c = u.createElement("link"), ca(c, "link", l), Ut(c), u.head.appendChild(c);
      }
    }
  }
  function y0(l, n, u) {
    du.S(l, n, u);
    var c = qf;
    if (c && l) {
      var s = Uc(c).hoistableStyles, r = vn(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          Ec(r)
        ))
          g.loading = 5;
        else {
          l = G(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = ka.get(r)) && Hh(l, u);
          var A = m = c.createElement("link");
          Ut(A), ca(A, "link", l), A._p = new Promise(function(j, V) {
            A.onload = j, A.onerror = V;
          }), A.addEventListener("load", function() {
            g.loading |= 1;
          }), A.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Dr(m, n, c);
        }
        m = {
          type: "stylesheet",
          instance: m,
          count: 1,
          state: g
        }, s.set(r, m);
      }
    }
  }
  function Ui(l, n) {
    du.X(l, n);
    var u = qf;
    if (u && l) {
      var c = Uc(u).hoistableScripts, s = go(l), r = c.get(s);
      r || (r = u.querySelector(wf(s)), r || (l = G({ src: l, async: !0 }, n), (n = ka.get(s)) && Nh(l, n), r = u.createElement("script"), Ut(r), ca(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function bc(l, n) {
    du.M(l, n);
    var u = qf;
    if (u && l) {
      var c = Uc(u).hoistableScripts, s = go(l), r = c.get(s);
      r || (r = u.querySelector(wf(s)), r || (l = G({ src: l, async: !0, type: "module" }, n), (n = ka.get(s)) && Nh(l, n), r = u.createElement("script"), Ut(r), ca(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Yf(l, n, u, c) {
    var s = (s = Ye.current) ? ga(s) : null;
    if (!s) throw Error(M(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = vn(u.href), u = Uc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = vn(u.href);
          var r = Uc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Ec(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), ka.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, ka.set(l, u), r || Gv(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(M(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(M(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = go(u), u = Uc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(M(444, l));
    }
  }
  function vn(l) {
    return 'href="' + ln(l) + '"';
  }
  function Ec(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Gf(l) {
    return G({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Gv(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), ca(n, "link", u), Ut(n), l.head.appendChild(n));
  }
  function go(l) {
    return '[src="' + ln(l) + '"]';
  }
  function wf(l) {
    return "script[async]" + l;
  }
  function p0(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + ln(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Ut(c), c;
          var s = G({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Ut(c), ca(c, "style", s), Dr(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = vn(u.href);
          var r = l.querySelector(
            Ec(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Ut(r), r;
          c = Gf(u), (s = ka.get(s)) && Hh(c, s), r = (l.ownerDocument || l).createElement("link"), Ut(r);
          var m = r;
          return m._p = new Promise(function(g, A) {
            m.onload = g, m.onerror = A;
          }), ca(r, "link", c), n.state.loading |= 4, Dr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = go(u.src), (s = l.querySelector(
            wf(r)
          )) ? (n.instance = s, Ut(s), s) : (c = u, (s = ka.get(r)) && (c = G({}, u), Nh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Ut(s), ca(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(M(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Dr(c, u.precedence, l));
    return n.instance;
  }
  function Dr(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Hh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Nh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Xf = null;
  function v0(l, n, u) {
    if (Xf === null) {
      var c = /* @__PURE__ */ new Map(), s = Xf = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Xf, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[bu] || r[Xt] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function xh(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function g0(l, n, u) {
    if (u === 1 || n.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (l = n.disabled, typeof n.precedence == "string" && l == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Wa(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ku(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = vn(c.href), r = n.querySelector(
          Ec(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = jh.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Ut(r);
          return;
        }
        r = n.ownerDocument || n, c = Gf(c), (s = ka.get(s)) && Hh(c, s), r = r.createElement("link"), Ut(r);
        var m = r;
        m._p = new Promise(function(g, A) {
          m.onload = g, m.onerror = A;
        }), ca(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = jh.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var gn = 0;
  function S0(l, n) {
    return l.stylesheets && l.count === 0 && qh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && qh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && gn === 0 && (gn = 62500 * s0());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && qh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > gn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function jh() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) qh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Bh = null;
  function qh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Bh = /* @__PURE__ */ new Map(), n.forEach(Fl, l), Bh = null, jh.call(l));
  }
  function Fl(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Bh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Bh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = jh.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var _r = {
    $$typeof: Tt,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0
  };
  function b0(l, n, u, c, s, r, m, g, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Dn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Dn(0), this.hiddenUpdates = Dn(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Yh(l, n, u, c, s, r, m, g, A, j, V, $) {
    return l = new b0(
      l,
      n,
      u,
      m,
      A,
      j,
      V,
      $,
      g
    ), n = 1, r === !0 && (n |= 24), r = gl(3, null, null, n), l.current = r, r.stateNode = l, n = Bs(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, Qs(r), l;
  }
  function So(l) {
    return l ? (l = Da, l) : Da;
  }
  function wv(l, n, u, c, s, r) {
    s = So(s), c.context === null ? c.context = s : c.pendingContext = s, c = Ei(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = sn(l, c, n), u !== null && (qa(u, l, n), uc(u, l, n));
  }
  function Gh(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function E0(l, n) {
    Gh(l, n), (l = l.alternate) && Gh(l, n);
  }
  function Xv(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = mi(l, 67108864);
      n !== null && qa(n, l, 67108864), E0(l, 67108864);
    }
  }
  function bo(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = $a();
      n = td(n);
      var u = mi(l, n);
      u !== null && qa(u, l, n), E0(l, n);
    }
  }
  var Yl = !0;
  function $u(l, n, u, c) {
    var s = z.T;
    z.T = null;
    var r = Q.p;
    try {
      Q.p = 2, oa(l, n, u, c);
    } finally {
      Q.p = r, z.T = s;
    }
  }
  function ku(l, n, u, c) {
    var s = z.T;
    z.T = null;
    var r = Q.p;
    try {
      Q.p = 8, oa(l, n, u, c);
    } finally {
      Q.p = r, z.T = s;
    }
  }
  function oa(l, n, u, c) {
    if (Yl) {
      var s = T0(c);
      if (s === null)
        n0(
          l,
          n,
          c,
          wh,
          u
        ), Hi(l, c);
      else if (oS(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Hi(l, c), n & 4 && -1 < Ga.indexOf(l)) {
        for (; s !== null; ) {
          var r = Cc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = He(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Ql(m);
                      g.entanglements[1] |= A, m &= ~A;
                    }
                    Ju(r), (At & 6) === 0 && (Mt = ke() + 500, Ci(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = mi(r, 2), g !== null && qa(g, r, 2), Df(), E0(r, 2);
            }
          if (r = T0(c), r === null && n0(
            l,
            n,
            c,
            wh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        n0(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function T0(l) {
    return l = rd(l), Lf(l);
  }
  var wh = null;
  function Lf(l) {
    if (wh = null, l = Mc(l), l !== null) {
      var n = de(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = $e(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = I(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return wh = l, null;
  }
  function Mr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Xa()) {
          case On:
            return 2;
          case ha:
            return 8;
          case qt:
          case Rn:
            return 32;
          case Gi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Qf = !1, Gl = null, fa = null, Sa = null, Tc = /* @__PURE__ */ new Map(), wn = /* @__PURE__ */ new Map(), fl = [], Ga = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Hi(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        Gl = null;
        break;
      case "dragenter":
      case "dragleave":
        fa = null;
        break;
      case "mouseover":
      case "mouseout":
        Sa = null;
        break;
      case "pointerover":
      case "pointerout":
        Tc.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        wn.delete(n.pointerId);
    }
  }
  function Eo(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Cc(n), n !== null && Xv(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function oS(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return Gl = Eo(
          Gl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return fa = Eo(
          fa,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return Sa = Eo(
          Sa,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return Tc.set(
          r,
          Eo(
            Tc.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, wn.set(
          r,
          Eo(
            wn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
    }
    return !1;
  }
  function Lv(l) {
    var n = Mc(l.target);
    if (n !== null) {
      var u = de(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = $e(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              bo(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = I(u), n !== null) {
            l.blockedOn = n, Tm(l.priority, function() {
              bo(u);
            });
            return;
          }
        } else if (n === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Cr(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = T0(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        sd = c, u.target.dispatchEvent(c), sd = null;
      } else
        return n = Cc(u), n !== null && Xv(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Vf(l, n, u) {
    Cr(l) && u.delete(n);
  }
  function Qv() {
    Qf = !1, Gl !== null && Cr(Gl) && (Gl = null), fa !== null && Cr(fa) && (fa = null), Sa !== null && Cr(Sa) && (Sa = null), Tc.forEach(Vf), wn.forEach(Vf);
  }
  function Wu(l, n) {
    l.blockedOn === n && (l.blockedOn = null, Qf || (Qf = !0, Y.unstable_scheduleCallback(
      Y.unstable_NormalPriority,
      Qv
    )));
  }
  var Zf = null;
  function Vv(l) {
    Zf !== l && (Zf = l, Y.unstable_scheduleCallback(
      Y.unstable_NormalPriority,
      function() {
        Zf === l && (Zf = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Lf(c || u) === null)
              continue;
            break;
          }
          var r = Cc(u);
          r !== null && (l.splice(n, 3), n -= 3, mf(
            r,
            {
              pending: !0,
              data: s,
              method: u.method,
              action: c
            },
            c,
            s
          ));
        }
      }
    ));
  }
  function Jf(l) {
    function n(A) {
      return Wu(A, l);
    }
    Gl !== null && Wu(Gl, l), fa !== null && Wu(fa, l), Sa !== null && Wu(Sa, l), Tc.forEach(n), wn.forEach(n);
    for (var u = 0; u < fl.length; u++) {
      var c = fl[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < fl.length && (u = fl[0], u.blockedOn === null); )
      Lv(u), u.blockedOn === null && fl.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[za] || null;
        if (typeof r == "function")
          m || Vv(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[za] || null)
              g = m.formAction;
            else if (Lf(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), Vv(u);
        }
      }
  }
  function A0() {
    function l(r) {
      r.canIntercept && r.info === "react-transition" && r.intercept({
        handler: function() {
          return new Promise(function(m) {
            return s = m;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      s !== null && (s(), s = null), c || setTimeout(u, 20);
    }
    function u() {
      if (!c && !navigation.transition) {
        var r = navigation.currentEntry;
        r && r.url != null && navigation.navigate(r.url, {
          state: r.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var c = !1, s = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(u, 100), function() {
        c = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), s !== null && (s(), s = null);
      };
    }
  }
  function Xh(l) {
    this._internalRoot = l;
  }
  Lh.prototype.render = Xh.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(M(409));
    var u = n.current, c = $a();
    wv(u, c, l, n, null, null);
  }, Lh.prototype.unmount = Xh.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      wv(l.current, 2, null, l, null, null), Df(), n[Li] = null;
    }
  };
  function Lh(l) {
    this._internalRoot = l;
  }
  Lh.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = ld();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < fl.length && n !== 0 && n < fl[u].priority; u++) ;
      fl.splice(u, 0, l), u === 0 && Lv(l);
    }
  };
  var z0 = te.version;
  if (z0 !== "19.2.3")
    throw Error(
      M(
        527,
        z0,
        "19.2.3"
      )
    );
  Q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(M(188)) : (l = Object.keys(l).join(","), Error(M(268, l)));
    return l = J(n), l = l !== null ? Ue(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Zv = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ur.isDisabled && Ur.supportsFiber)
      try {
        La = Ur.inject(
          Zv
        ), zl = Ur;
      } catch {
      }
  }
  return gp.createRoot = function(l, n) {
    if (!Ae(l)) throw Error(M(299));
    var u = !1, c = "", s = Pd, r = Oy, m = eh;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Yh(
      l,
      1,
      !1,
      null,
      null,
      u,
      c,
      null,
      s,
      r,
      m,
      A0
    ), l[Li] = n.current, Nf(l), new Xh(n);
  }, gp.hydrateRoot = function(l, n, u) {
    if (!Ae(l)) throw Error(M(299));
    var c = !1, s = "", r = Pd, m = Oy, g = eh, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = Yh(
      l,
      1,
      !0,
      n,
      u ?? null,
      c,
      s,
      A,
      r,
      m,
      g,
      A0
    ), n.context = So(null), u = n.current, c = $a(), c = td(c), s = Ei(c), s.callback = null, sn(u, s, c), u = c, n.current.lanes = u, Xi(n, u), Ju(n), l[Li] = n.current, Nf(l), new Lh(n);
  }, gp.version = "19.2.3", gp;
}
var Sp = {};
var V2;
function MT() {
  return V2 || (V2 = 1, process.env.NODE_ENV !== "production" && (function() {
    function Y(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function te(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = Nl(e) ? e.slice() : et({}, e);
      return f[o] = te(e[o], t, a + 1, i), f;
    }
    function Se(e, t, a) {
      if (t.length !== a.length)
        console.warn("copyWithRename() expects paths of the same length");
      else {
        for (var i = 0; i < a.length - 1; i++)
          if (t[i] !== a[i]) {
            console.warn(
              "copyWithRename() expects paths to be the same except for the deepest key"
            );
            return;
          }
        return M(e, t, a, 0);
      }
    }
    function M(e, t, a, i) {
      var o = t[i], f = Nl(e) ? e.slice() : et({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], Nl(f) ? f.splice(o, 1) : delete f[o]) : f[o] = M(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function Ae(e, t, a) {
      var i = t[a], o = Nl(e) ? e.slice() : et({}, e);
      return a + 1 === t.length ? (Nl(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = Ae(e[i], t, a + 1), o);
    }
    function de() {
      return !1;
    }
    function $e() {
      return null;
    }
    function I() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function ae() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function J() {
    }
    function Ue() {
    }
    function G(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function H(e, t, a, i) {
      return new eS(e, t, a, i);
    }
    function ie(e, t) {
      e.context === Wf && (Rh(e.current, 2, t, e, null, null), yn());
    }
    function je(e, t) {
      if (Pu !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, or(), Bp(
          e.current,
          t,
          a
        ), yn();
      }
    }
    function gt(e) {
      Pu = e;
    }
    function ut(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function Je(e) {
      var t = e, a = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (a = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? a : null;
    }
    function hl(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Tt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Ot(e) {
      if (Je(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Yt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = Je(e), t === null)
          throw Error("Unable to find node on an unmounted component.");
        return t !== e ? null : e;
      }
      for (var a = e, i = t; ; ) {
        var o = a.return;
        if (o === null) break;
        var f = o.alternate;
        if (f === null) {
          if (i = o.return, i !== null) {
            a = i;
            continue;
          }
          break;
        }
        if (o.child === f.child) {
          for (f = o.child; f; ) {
            if (f === a) return Ot(o), e;
            if (f === i) return Ot(o), t;
            f = f.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (a.return !== i.return) a = o, i = f;
        else {
          for (var d = !1, h = o.child; h; ) {
            if (h === a) {
              d = !0, a = o, i = f;
              break;
            }
            if (h === i) {
              d = !0, i = o, a = f;
              break;
            }
            h = h.sibling;
          }
          if (!d) {
            for (h = f.child; h; ) {
              if (h === a) {
                d = !0, a = f, i = o;
                break;
              }
              if (h === i) {
                d = !0, i = f, a = o;
                break;
              }
              h = h.sibling;
            }
            if (!d)
              throw Error(
                "Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue."
              );
          }
        }
        if (a.alternate !== i)
          throw Error(
            "Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue."
          );
      }
      if (a.tag !== 3)
        throw Error("Unable to find node on an unmounted component.");
      return a.stateNode.current === a ? e : t;
    }
    function Gt(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = Gt(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function De(e) {
      return e === null || typeof e != "object" ? null : (e = Yv && e[Yv] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function Qe(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === qf ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case jf:
          return "Fragment";
        case Or:
          return "Profiler";
        case Ya:
          return "StrictMode";
        case vo:
          return "Suspense";
        case ka:
          return "SuspenseList";
        case du:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Sc:
            return "Portal";
          case ru:
            return e.displayName || "Context";
          case Uh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Bf:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Rr:
            return t = e.displayName || null, t !== null ? t : Qe(e.type) || "Memo";
          case ga:
            t = e._payload, e = e._init;
            try {
              return Qe(e(t));
            } catch {
            }
        }
      return null;
    }
    function st(e) {
      return typeof e.tag == "number" ? re(e) : typeof e.name == "string" ? e.name : null;
    }
    function re(e) {
      var t = e.type;
      switch (e.tag) {
        case 31:
          return "Activity";
        case 24:
          return "Cache";
        case 9:
          return (t._context.displayName || "Context") + ".Consumer";
        case 10:
          return t.displayName || "Context";
        case 18:
          return "DehydratedFragment";
        case 11:
          return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
          return "Fragment";
        case 26:
        case 27:
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Qe(t);
        case 8:
          return t === Ya ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 14:
        case 15:
          if (typeof t == "function")
            return t.displayName || t.name || null;
          if (typeof t == "string") return t;
          break;
        case 29:
          if (t = e._debugInfo, t != null) {
            for (var a = t.length - 1; 0 <= a; a--)
              if (typeof t[a].name == "string") return t[a].name;
          }
          if (e.return !== null)
            return re(e.return);
      }
      return null;
    }
    function Bt(e) {
      return { current: e };
    }
    function he(e, t) {
      0 > Ui ? console.error("Unexpected pop.") : (t !== y0[Ui] && console.error("Unexpected Fiber popped."), e.current = m0[Ui], m0[Ui] = null, y0[Ui] = null, Ui--);
    }
    function Be(e, t, a) {
      Ui++, m0[Ui] = e.current, y0[Ui] = a, e.current = t;
    }
    function wt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function Rt(e, t) {
      Be(vn, t, e), Be(Yf, e, e), Be(bc, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? rv(t) : jo;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = rv(t), t = _i(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = gm;
                break;
              case "math":
                t = Bg;
                break;
              default:
                t = jo;
            }
      }
      a = a.toLowerCase(), a = Rm(null, a), a = {
        context: t,
        ancestorInfo: a
      }, he(bc, e), Be(bc, a, e);
    }
    function z(e) {
      he(bc, e), he(Yf, e), he(vn, e);
    }
    function Q() {
      return wt(bc.current);
    }
    function ee(e) {
      e.memoizedState !== null && Be(Ec, e, e);
      var t = wt(bc.current), a = e.type, i = _i(t.context, a);
      a = Rm(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Be(Yf, e, e), Be(bc, i, e));
    }
    function pe(e) {
      Yf.current === e && (he(bc, e), he(Yf, e)), Ec.current === e && (he(Ec, e), hp._currentValue = ed);
    }
    function Ee() {
    }
    function S() {
      if (Gf === 0) {
        Gv = console.log, go = console.info, wf = console.warn, p0 = console.error, Dr = console.group, Hh = console.groupCollapsed, Nh = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: Ee,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      Gf++;
    }
    function N() {
      if (Gf--, Gf === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: et({}, e, { value: Gv }),
          info: et({}, e, { value: go }),
          warn: et({}, e, { value: wf }),
          error: et({}, e, { value: p0 }),
          group: et({}, e, { value: Dr }),
          groupCollapsed: et({}, e, { value: Hh }),
          groupEnd: et({}, e, { value: Nh })
        });
      }
      0 > Gf && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function F(e) {
      var t = Error.prepareStackTrace;
      if (Error.prepareStackTrace = void 0, e = e.stack, Error.prepareStackTrace = t, e.startsWith(`Error: react-stack-top-frame
`) && (e = e.slice(29)), t = e.indexOf(`
`), t !== -1 && (e = e.slice(t + 1)), t = e.indexOf("react_stack_bottom_frame"), t !== -1 && (t = e.lastIndexOf(
        `
`,
        t
      )), t !== -1)
        e = e.slice(0, t);
      else return "";
      return e;
    }
    function W(e) {
      if (Xf === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Xf = t && t[1] || "", v0 = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Xf + e + v0;
    }
    function Te(e, t) {
      if (!e || xh) return "";
      var a = g0.get(e);
      if (a !== void 0) return a;
      xh = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = X.H, X.H = null, S();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var E = function() {
                  throw Error();
                };
                if (Object.defineProperty(E.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(E, []);
                  } catch (ue) {
                    var q = ue;
                  }
                  Reflect.construct(e, [], E);
                } else {
                  try {
                    E.call();
                  } catch (ue) {
                    q = ue;
                  }
                  e.call(E.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (ue) {
                  q = ue;
                }
                (E = e()) && typeof E.catch == "function" && E.catch(function() {
                });
              }
            } catch (ue) {
              if (ue && q && typeof ue.stack == "string")
                return [ue.stack, q.stack];
            }
            return [null, null];
          }
        };
        o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var f = Object.getOwnPropertyDescriptor(
          o.DetermineComponentFrameRoot,
          "name"
        );
        f && f.configurable && Object.defineProperty(
          o.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var d = o.DetermineComponentFrameRoot(), h = d[0], y = d[1];
        if (h && y) {
          var p = h.split(`
`), R = y.split(`
`);
          for (d = f = 0; f < p.length && !p[f].includes(
            "DetermineComponentFrameRoot"
          ); )
            f++;
          for (; d < R.length && !R[d].includes(
            "DetermineComponentFrameRoot"
          ); )
            d++;
          if (f === p.length || d === R.length)
            for (f = p.length - 1, d = R.length - 1; 1 <= f && 0 <= d && p[f] !== R[d]; )
              d--;
          for (; 1 <= f && 0 <= d; f--, d--)
            if (p[f] !== R[d]) {
              if (f !== 1 || d !== 1)
                do
                  if (f--, d--, 0 > d || p[f] !== R[d]) {
                    var _ = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && g0.set(e, _), _;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        xh = !1, X.H = i, N(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? W(p) : "", typeof e == "function" && g0.set(e, p), p;
    }
    function Ye(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return W(e.type);
        case 16:
          return W("Lazy");
        case 13:
          return e.child !== t && t !== null ? W("Suspense Fallback") : W("Suspense");
        case 19:
          return W("SuspenseList");
        case 0:
        case 15:
          return Te(e.type, !1);
        case 11:
          return Te(e.type.render, !1);
        case 1:
          return Te(e.type, !0);
        case 31:
          return W("Activity");
        default:
          return "";
      }
    }
    function ze(e) {
      try {
        var t = "", a = null;
        do {
          t += Ye(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var R = F(p), _ = R.lastIndexOf(`
`), E = _ === -1 ? R : R.slice(_ + 1);
                    if (E.indexOf(h) !== -1) {
                      var q = `
` + E;
                      break e;
                    }
                  }
                  q = W(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + q;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (ue) {
        return `
Error generating stack: ` + ue.message + `
` + ue.stack;
      }
    }
    function $t(e) {
      return (e = e ? e.displayName || e.name : "") ? W(e) : "";
    }
    function rt() {
      if (Wa === null) return null;
      var e = Wa._debugOwner;
      return e != null ? st(e) : null;
    }
    function Kt() {
      if (Wa === null) return "";
      var e = Wa;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += W(e.type);
            break;
          case 13:
            t += W("Suspense");
            break;
          case 19:
            t += W("SuspenseList");
            break;
          case 31:
            t += W("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += $t(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += $t(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = F(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + F(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function fe(e, t, a, i, o, f, d) {
      var h = Wa;
      ul(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        ul(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function ul(e) {
      X.getCurrentStack = e === null ? null : Kt, Ku = !1, Wa = e;
    }
    function Al(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function yt(e) {
      try {
        return kt(e), !1;
      } catch {
        return !0;
      }
    }
    function kt(e) {
      return "" + e;
    }
    function Oe(e, t) {
      if (yt(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Al(e)
        ), kt(e);
    }
    function Dt(e, t) {
      if (yt(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          Al(e)
        ), kt(e);
    }
    function da(e) {
      if (yt(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          Al(e)
        ), kt(e);
    }
    function Wt(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        bo = t.inject(e), Yl = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function ce(e) {
      if (typeof E0 == "function" && Xv(e), Yl && typeof Yl.setStrictMode == "function")
        try {
          Yl.setStrictMode(bo, e);
        } catch (t) {
          $u || ($u = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function ua(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (T0(e) / wh | 0) | 0;
    }
    function Ll(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), e;
      }
    }
    function ll(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Ll(i) : (d &= h, d !== 0 ? o = Ll(d) : a || (a = h & ~e, a !== 0 && (o = Ll(a))))) : (h = i & ~f, h !== 0 ? o = Ll(h) : d !== 0 ? o = Ll(d) : a || (a = i & ~e, a !== 0 && (o = Ll(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function ke(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Xa(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return console.error(
            "Should have found matching lanes. This is a bug in React."
          ), -1;
      }
    }
    function On() {
      var e = Qf;
      return Qf <<= 1, (Qf & 62914560) === 0 && (Qf = 4194304), e;
    }
    function ha(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function qt(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Rn(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var R = 31 - oa(a), _ = 1 << R;
        h[R] = 0, y[R] = -1;
        var E = p[R];
        if (E !== null)
          for (p[R] = null, R = 0; R < E.length; R++) {
            var q = E[R];
            q !== null && (q.lane &= -536870913);
          }
        a &= ~_;
      }
      i !== 0 && Gi(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Gi(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - oa(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function _c(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - oa(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function fi(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : La(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function La(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function zl(e, t, a) {
      if (ku)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - oa(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Aa(e, t) {
      if (ku)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - oa(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Ql(e) {
      return e &= -e, Gl < e ? fa < e ? (e & 134217727) !== 0 ? Sa : Tc : fa : Gl;
    }
    function wi() {
      var e = Ct.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? Sa : _h(e.type));
    }
    function v(e, t) {
      var a = Ct.p;
      try {
        return Ct.p = e, t();
      } finally {
        Ct.p = a;
      }
    }
    function C(e) {
      delete e[fl], delete e[Ga], delete e[Eo], delete e[oS], delete e[Lv];
    }
    function P(e) {
      var t = e[fl];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Hi] || a[fl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = ho(e); e !== null; ) {
              if (a = e[fl])
                return a;
              e = ho(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function le(e) {
      if (e = e[fl] || e[Hi]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
          return e;
      }
      return null;
    }
    function ye(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function He(e) {
      var t = e[Cr];
      return t || (t = e[Cr] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function ve(e) {
      e[Vf] = !0;
    }
    function it(e, t) {
      Ve(e, t), Ve(e + "Capture", t);
    }
    function Ve(e, t) {
      Wu[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), Wu[e] = t;
      var a = e.toLowerCase();
      for (Zf[a] = e, e === "onDoubleClick" && (Zf.ondblclick = e), e = 0; e < t.length; e++)
        Qv.add(t[e]);
    }
    function ma(e, t) {
      Vv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Dn(e) {
      return gn.call(Xh, e) ? !0 : gn.call(A0, e) ? !1 : Jf.test(e) ? Xh[e] = !0 : (A0[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function Xi(e, t, a) {
      if (Dn(t)) {
        if (!e.hasAttribute(t)) {
          switch (typeof a) {
            case "symbol":
            case "object":
              return a;
            case "function":
              return a;
            case "boolean":
              if (a === !1) return a;
          }
          return a === void 0 ? void 0 : null;
        }
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Oe(a, t), e === "" + a ? a : e);
      }
    }
    function Yo(e, t, a) {
      if (Dn(t))
        if (a === null) e.removeAttribute(t);
        else {
          switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
              e.removeAttribute(t);
              return;
            case "boolean":
              var i = t.toLowerCase().slice(0, 5);
              if (i !== "data-" && i !== "aria-") {
                e.removeAttribute(t);
                return;
              }
          }
          Oe(a, t), e.setAttribute(t, "" + a);
        }
    }
    function ps(e, t, a) {
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        Oe(a, t), e.setAttribute(t, "" + a);
      }
    }
    function Su(e, t, a, i) {
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(a);
            return;
        }
        Oe(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function en(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return da(e), e;
        default:
          return "";
      }
    }
    function td(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Em(e, t, a) {
      var i = Object.getOwnPropertyDescriptor(
        e.constructor.prototype,
        t
      );
      if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
        var o = i.get, f = i.set;
        return Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return o.call(this);
          },
          set: function(d) {
            da(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            da(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function ld(e) {
      if (!e._valueTracker) {
        var t = td(e) ? "checked" : "value";
        e._valueTracker = Em(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function Tm(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = td(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Vn(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Xt(e) {
      return e.replace(
        Lh,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function za(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || Zv || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        rt() || "A component",
        t.type
      ), Zv = !0), t.value === void 0 || t.defaultValue === void 0 || z0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        rt() || "A component",
        t.type
      ), z0 = !0);
    }
    function Li(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Oe(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + en(t)) : e.value !== "" + en(t) && (e.value = "" + en(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? Am(e, d, en(t)) : a != null ? Am(e, d, en(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Oe(h, "name"), e.name = "" + en(h)) : e.removeAttribute("name");
    }
    function ad(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Oe(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          ld(e);
          return;
        }
        a = a != null ? "" + en(a) : "", t = t != null ? "" + en(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Oe(d, "name"), e.name = d), ld(e);
    }
    function Am(e, t, a) {
      t === "number" && Vn(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Tp(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? zr.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || l || (l = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || n || (n = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || Ur || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), Ur = !0);
    }
    function zm() {
      var e = rt();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function bu(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + en(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function nd(e, t) {
      for (e = 0; e < c.length; e++) {
        var a = c[e];
        if (t[a] != null) {
          var i = Nl(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            zm()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            zm()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || u || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), u = !0);
    }
    function Mc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || s || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        rt() || "A component"
      ), s = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Cc(e, t, a) {
      if (t != null && (t = "" + en(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + en(a) : "";
    }
    function Go(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (Nl(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = en(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), ld(e);
    }
    function Uc(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Uc(e.children[0], t) : e;
    }
    function Ut(e) {
      return "  " + "  ".repeat(e);
    }
    function Hc(e) {
      return "+ " + "  ".repeat(e);
    }
    function Qi(e) {
      return "- " + "  ".repeat(e);
    }
    function Vi(e) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return e.type;
        case 16:
          return "Lazy";
        case 31:
          return "Activity";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 0:
        case 15:
          return e = e.type, e.displayName || e.name || null;
        case 11:
          return e = e.type.render, e.displayName || e.name || null;
        case 1:
          return e = e.type, e.displayName || e.name || null;
        default:
          return null;
      }
    }
    function Eu(e, t) {
      return r.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function ud(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return Hc(a) + Eu(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), Hc(a) + Eu(e, i) + `
` + Qi(a) + Eu(t, i) + `
`;
      }
      return Ut(a) + Eu(e, i) + `
`;
    }
    function id(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function wo(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (Nl(e)) return "[...]";
          if (e.$$typeof === Gn)
            return (t = Qe(e.type)) ? "<" + t + ">" : "<...>";
          var a = id(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = wo(
                  e[i],
                  15 > t ? t : 15
                ), t -= o.length, 0 > t) {
                  a += a === "" ? "..." : ", ...";
                  break;
                }
                a += (a === "" ? "" : ",") + i + ":" + o;
              }
            return "{" + a + "}";
          }
          return a;
        case "function":
          return (t = e.displayName || e.name) ? "function " + t : "function";
        default:
          return String(e);
      }
    }
    function Xo(e, t) {
      return typeof e != "string" || r.test(e) ? "{" + wo(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Lo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = Xo(
            t[f],
            120 - a.length - f.length - 1
          );
          i -= f.length + d.length + 2, o.push(f + "=" + d);
        }
      return o.length === 0 ? a + "<" + e + `>
` : 0 < i ? a + "<" + e + " " + o.join(" ") + `>
` : a + "<" + e + `
` + a + "  " + o.join(`
` + a + "  ") + `
` + a + `>
`;
    }
    function cd(e, t, a) {
      var i = "", o = et({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = wo(e[f], d);
          t.hasOwnProperty(f) ? (d = wo(t[f], d), i += Hc(a) + f + ": " + h + `
`, i += Qi(a) + f + ": " + d + `
`) : i += Hc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = wo(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += Qi(a) + y + ": " + e + `
`);
      return i;
    }
    function si(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Lo(
          e,
          t,
          Ut(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var R = Xo(
                p,
                h
              );
              h = Xo(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && id(p) === "Object" && id(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < R.indexOf("...") || -1 < h.indexOf("...")) ? o += Ut(i + 1) + d + `={{
` + cd(
                p,
                y,
                i + 2
              ) + Ut(i + 1) + `}}
` : (o += Hc(i + 1) + d + "=" + R + `
`, o += Qi(i + 1) + d + "=" + h + `
`);
            } else
              o += Ut(i + 1) + d + "=" + Xo(t[d], h) + `
`;
          }
        f.forEach(function(_) {
          if (_ !== "children") {
            var E = 120 - 2 * (i + 1) - _.length - 1;
            o += Qi(i + 1) + _ + "=" + Xo(a[_], E) + `
`;
          }
        }), o = o === "" ? Ut(i) + "<" + e + `>
` : Ut(i) + "<" + e + `
` + o + Ut(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += ud(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + ud("" + t, null, i + 1) : o + ud("" + t, void 0, i + 1)), o;
    }
    function tn(e, t) {
      var a = Vi(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += tn(e, t), e = e.sibling;
        return a;
      }
      return Ut(t) + "<" + a + `>
`;
    }
    function od(e, t) {
      var a = Uc(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return Ut(t) + `...
` + od(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += Ut(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = ud(o, e.serverProps, t), t++;
      else if (f = Vi(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = Xo(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = Ut(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Lo(
            f,
            o,
            Hc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = si(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += od(d, t), f++) : p += tn(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += Ut(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (Qi(t) + Eu(f, 120 - 2 * t) + `
`) : p + Lo(
          f.type,
          f.props,
          Qi(t)
        );
      return a + i + p;
    }
    function Om(e) {
      try {
        return `

` + od(e, 0);
      } catch {
        return "";
      }
    }
    function fd(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? Om(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function Rm(e, t) {
      var a = et({}, e || V), i = { tag: t };
      return g.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A.indexOf(t) !== -1 && (a.pTagInButtonScope = null), m.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function vs(e, t, a) {
      switch (t) {
        case "select":
          return e === "hr" || e === "option" || e === "optgroup" || e === "script" || e === "template" || e === "#text";
        case "optgroup":
          return e === "option" || e === "#text";
        case "option":
          return e === "#text";
        case "tr":
          return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
        case "tbody":
        case "thead":
        case "tfoot":
          return e === "tr" || e === "style" || e === "script" || e === "template";
        case "colgroup":
          return e === "col" || e === "template";
        case "table":
          return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
        case "head":
          return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
        case "html":
          if (a) break;
          return e === "head" || e === "body" || e === "frameset";
        case "frameset":
          return e === "frame";
        case "#document":
          if (!a) return e === "html";
      }
      switch (e) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
        case "rp":
        case "rt":
          return j.indexOf(t) === -1;
        case "caption":
        case "col":
        case "colgroup":
        case "frameset":
        case "frame":
        case "tbody":
        case "td":
        case "tfoot":
        case "th":
        case "thead":
        case "tr":
          return t == null;
        case "head":
          return a || t === null;
        case "html":
          return a && t === "#document" || t === null;
        case "body":
          return a && (t === "#document" || t === "html") || t === null;
      }
      return !0;
    }
    function $g(e, t) {
      switch (e) {
        case "address":
        case "article":
        case "aside":
        case "blockquote":
        case "center":
        case "details":
        case "dialog":
        case "dir":
        case "div":
        case "dl":
        case "fieldset":
        case "figcaption":
        case "figure":
        case "footer":
        case "header":
        case "hgroup":
        case "main":
        case "menu":
        case "nav":
        case "ol":
        case "p":
        case "section":
        case "summary":
        case "ul":
        case "pre":
        case "listing":
        case "table":
        case "hr":
        case "xmp":
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
        case "h6":
          return t.pTagInButtonScope;
        case "form":
          return t.formTag || t.pTagInButtonScope;
        case "li":
          return t.listItemTagAutoclosing;
        case "dd":
        case "dt":
          return t.dlItemTagAutoclosing;
        case "button":
          return t.buttonTagInScope;
        case "a":
          return t.aTagInScope;
        case "nobr":
          return t.nobrTagInScope;
      }
      return null;
    }
    function ln(e, t) {
      for (; e; ) {
        switch (e.tag) {
          case 5:
          case 26:
          case 27:
            if (e.type === t) return e;
        }
        e = e.return;
      }
      return null;
    }
    function gs(e, t) {
      t = t || V;
      var a = t.current;
      if (t = (a = vs(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : $g(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, $[t]) return !1;
      $[t] = !0;
      var o = (t = Wa) ? ln(t.return, i) : null, f = t !== null && o !== null ? fd(o, t, null) : "", d = "<" + e + ">";
      return a ? (a = "", i === "table" && e === "tr" && (a += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), console.error(
        `In HTML, %s cannot be a child of <%s>.%s
This will cause a hydration error.%s`,
        d,
        i,
        a,
        f
      )) : console.error(
        `In HTML, %s cannot be a descendant of <%s>.
This will cause a hydration error.%s`,
        d,
        i,
        f
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || fe(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Ss(e, t, a) {
      if (a || vs("#text", t, !1))
        return !0;
      if (a = "#text|" + t, $[a]) return !1;
      $[a] = !0;
      var i = (a = Wa) ? ln(a, t) : null;
      return a = a !== null && i !== null ? fd(
        i,
        a,
        a.tag !== 6 ? { children: null } : null
      ) : "", /\S/.test(e) ? console.error(
        `In HTML, text nodes cannot be a child of <%s>.
This will cause a hydration error.%s`,
        t,
        a
      ) : console.error(
        `In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.
This will cause a hydration error.%s`,
        t,
        a
      ), !1;
    }
    function Nc(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Qo(e) {
      return e.replace(U, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Dm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? x.hasOwnProperty(t) && x[t] || (x[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Qo(t.replace(Zt, "ms-"))
      )) : Ce.test(t) ? x.hasOwnProperty(t) && x[t] || (x[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !D.test(a) || K.hasOwnProperty(a) && K[a] || (K[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(D, "")
      )), typeof a == "number" && (isNaN(a) ? Re || (Re = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || bt || (bt = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || ge.has(t) ? t === "float" ? e.cssFloat = a : (Dt(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function _m(e, t, a) {
      if (t != null && typeof t != "object")
        throw Error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      if (t && Object.freeze(t), e = e.style, a != null) {
        if (t) {
          var i = {};
          if (a) {
            for (var o in a)
              if (a.hasOwnProperty(o) && !t.hasOwnProperty(o))
                for (var f = B[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = B[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = B[y] || [y], f = 0; f < o.length; f++)
              h[o[f]] = y;
          y = {};
          for (var p in i)
            if (o = i[p], (f = h[p]) && o !== f && (d = o + "," + f, !y[d])) {
              y[d] = !0, d = console;
              var R = t[o];
              d.error.call(
                d,
                "%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.",
                R == null || typeof R == "boolean" || R === "" ? "Removing" : "Updating",
                o,
                f
              );
            }
        }
        for (var _ in a)
          !a.hasOwnProperty(_) || t != null && t.hasOwnProperty(_) || (_.indexOf("--") === 0 ? e.setProperty(_, "") : _ === "float" ? e.cssFloat = "" : e[_] = "");
        for (var E in t)
          p = t[E], t.hasOwnProperty(E) && a[E] !== p && Dm(e, E, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Dm(e, i, t[i]);
    }
    function Tu(e) {
      if (e.indexOf("-") === -1) return !1;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    function Ap(e) {
      return zt.get(e) || e;
    }
    function zp(e, t) {
      if (gn.call(Qh, t) && Qh[t])
        return !0;
      if (F2.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = Jv.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), Qh[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), Qh[t] = !0;
      }
      if (W2.test(t)) {
        if (e = t.toLowerCase(), e = Jv.hasOwnProperty(e) ? e : null, e == null) return Qh[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), Qh[t] = !0);
      }
      return !0;
    }
    function Op(e, t) {
      var a = [], i;
      for (i in t)
        zp(e, i) || a.push(i);
      t = a.map(function(o) {
        return "`" + o + "`";
      }).join(", "), a.length === 1 ? console.error(
        "Invalid aria prop %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      ) : 1 < a.length && console.error(
        "Invalid aria props %s on <%s> tag. For details, see https://react.dev/link/invalid-aria-props",
        t,
        e
      );
    }
    function Mm(e, t, a, i) {
      if (gn.call(Sn, t) && Sn[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), Sn[t] = !0;
      if (typeof a == "function" && (e === "form" && t === "action" || e === "input" && t === "formAction" || e === "button" && t === "formAction"))
        return !0;
      if (i != null) {
        if (e = i.possibleRegistrationNames, i.registrationNameDependencies.hasOwnProperty(t))
          return !0;
        if (i = e.hasOwnProperty(o) ? e[o] : null, i != null)
          return console.error(
            "Invalid event handler property `%s`. Did you mean `%s`?",
            t,
            i
          ), Sn[t] = !0;
        if (T1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), Sn[t] = !0;
      } else if (T1.test(t))
        return I2.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), Sn[t] = !0;
      if (P2.test(t) || eE.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), Sn[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), Sn[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), Sn[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), Sn[t] = !0;
      if (hu.hasOwnProperty(o)) {
        if (o = hu[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), Sn[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), Sn[t] = !0;
      switch (t) {
        case "dangerouslySetInnerHTML":
        case "children":
        case "style":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          return !0;
        case "innerText":
        case "textContent":
          return !0;
      }
      switch (typeof a) {
        case "boolean":
          switch (t) {
            case "autoFocus":
            case "checked":
            case "multiple":
            case "muted":
            case "selected":
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
            case "capture":
            case "download":
            case "inert":
              return !0;
            default:
              return o = t.toLowerCase().slice(0, 5), o === "data-" || o === "aria-" ? !0 : (a ? console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.',
                a,
                t,
                t,
                a,
                t
              ) : console.error(
                'Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.',
                a,
                t,
                t,
                a,
                t,
                t,
                t
              ), Sn[t] = !0);
          }
        case "function":
        case "symbol":
          return Sn[t] = !0, !1;
        case "string":
          if (a === "false" || a === "true") {
            switch (t) {
              case "checked":
              case "selected":
              case "multiple":
              case "muted":
              case "allowFullScreen":
              case "async":
              case "autoPlay":
              case "controls":
              case "default":
              case "defer":
              case "disabled":
              case "disablePictureInPicture":
              case "disableRemotePlayback":
              case "formNoValidate":
              case "hidden":
              case "loop":
              case "noModule":
              case "noValidate":
              case "open":
              case "playsInline":
              case "readOnly":
              case "required":
              case "reversed":
              case "scoped":
              case "seamless":
              case "itemScope":
              case "inert":
                break;
              default:
                return !0;
            }
            console.error(
              "Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?",
              a,
              t,
              a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".',
              t,
              a
            ), Sn[t] = !0;
          }
      }
      return !0;
    }
    function kg(e, t, a) {
      var i = [], o;
      for (o in t)
        Mm(e, o, t[o], a) || i.push(o);
      t = i.map(function(f) {
        return "`" + f + "`";
      }).join(", "), i.length === 1 ? console.error(
        "Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      ) : 1 < i.length && console.error(
        "Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://react.dev/link/attribute-behavior ",
        t,
        e
      );
    }
    function bs(e) {
      return tE.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function _n() {
    }
    function Zn(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function sd(e) {
      var t = le(e);
      if (t && (e = t.stateNode)) {
        var a = e[Ga] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Li(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ), t = a.name, a.type === "radio" && t != null) {
              for (a = e; a.parentNode; ) a = a.parentNode;
              for (Oe(t, "name"), a = a.querySelectorAll(
                'input[name="' + Xt(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Ga] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  Li(
                    i,
                    o.value,
                    o.defaultValue,
                    o.defaultValue,
                    o.checked,
                    o.defaultChecked,
                    o.type,
                    o.name
                  );
                }
              }
              for (t = 0; t < a.length; t++)
                i = a[t], i.form === e.form && Tm(i);
            }
            break e;
          case "textarea":
            Cc(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && bu(e, !!a.multiple, t, !1);
        }
      }
    }
    function rd(e, t, a) {
      if (fS) return e(t, a);
      fS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (fS = !1, (Vh !== null || Zh !== null) && (yn(), Vh && (t = Vh, e = Zh, Zh = Vh = null, sd(t), e)))
          for (t = 0; t < e.length; t++) sd(e[t]);
      }
    }
    function Au(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Ga] || null;
      if (i === null) return null;
      a = i[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (a && typeof a != "function")
        throw Error(
          "Expected `" + t + "` listener to be a function, instead got a value of `" + typeof a + "` type."
        );
      return a;
    }
    function xc() {
      if (Kv) return Kv;
      var e, t = rS, a = t.length, i, o = "value" in Kf ? Kf.value : Kf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Kv = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Es(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function Vo() {
      return !0;
    }
    function Cm() {
      return !1;
    }
    function Vl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Vo : Cm, this.isPropagationStopped = Cm, this;
      }
      return et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Vo);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Vo);
        },
        persist: function() {
        },
        isPersistent: Vo
      }), t;
    }
    function ri(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = mE[e]) ? !!t[e] : !1;
    }
    function Ts() {
      return ri;
    }
    function Zo(e, t) {
      switch (e) {
        case "keyup":
          return RE.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== R1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function di(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function Um(e, t) {
      switch (e) {
        case "compositionend":
          return di(t);
        case "keypress":
          return t.which !== _1 ? null : (C1 = !0, M1);
        case "textInput":
          return e = t.data, e === M1 && C1 ? null : e;
        default:
          return null;
      }
    }
    function dd(e, t) {
      if (Jh)
        return e === "compositionend" || !yS && Zo(e, t) ? (e = xc(), Kv = rS = Kf = null, Jh = !1, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return D1 && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    function Hm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!_E[e.type] : t === "textarea";
    }
    function hd(e) {
      if (!Ac) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function As(e, t, a, i) {
      Vh ? Zh ? Zh.push(i) : Zh = [i] : Vh = i, t = ou(t, "onChange"), 0 < t.length && (a = new $v(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Rp(e) {
      xt(e, 0);
    }
    function ia(e) {
      var t = ye(e);
      if (Tm(t)) return e;
    }
    function Zi(e, t) {
      if (e === "change") return t;
    }
    function zs() {
      C0 && (C0.detachEvent("onpropertychange", Jo), U0 = C0 = null);
    }
    function Jo(e) {
      if (e.propertyName === "value" && ia(U0)) {
        var t = [];
        As(
          t,
          U0,
          e,
          Zn(e)
        ), rd(Rp, t);
      }
    }
    function Wg(e, t, a) {
      e === "focusin" ? (zs(), C0 = t, U0 = a, C0.attachEvent("onpropertychange", Jo)) : e === "focusout" && zs();
    }
    function Nm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return ia(U0);
    }
    function xm(e, t) {
      if (e === "click") return ia(t);
    }
    function Os(e, t) {
      if (e === "input" || e === "change")
        return ia(t);
    }
    function md(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Ko(e, t) {
      if (bn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!gn.call(t, o) || !bn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Dp(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function _p(e, t) {
      var a = Dp(e);
      e = 0;
      for (var i; a; ) {
        if (a.nodeType === 3) {
          if (i = e + a.textContent.length, e <= t && i >= t)
            return { node: a, offset: t - e };
          e = i;
        }
        e: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break e;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = Dp(a);
      }
    }
    function Mp(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mp(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function yd(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Vn(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Vn(e.document);
      }
      return t;
    }
    function jm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Cp(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      vS || Kh == null || Kh !== Vn(i) || (i = Kh, "selectionStart" in i && jm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), H0 && Ko(H0, i) || (H0 = i, i = ou(pS, "onSelect"), 0 < i.length && (t = new $v(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = Kh)));
    }
    function jc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Bc(e) {
      if (gS[e]) return gS[e];
      if (!$h[e]) return e;
      var t = $h[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in H1)
          return gS[e] = t[a];
      return e;
    }
    function Jn(e, t) {
      q1.set(e, t), it(t, [e]);
    }
    function Up(e) {
      for (var t = Wv, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (Nl(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== Wv && t !== AS)
              return ES;
            t = AS;
          } else return ES;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== Wv && t !== TS)
            return ES;
          t = TS;
        }
      }
      return t;
    }
    function Bm(e, t, a, i) {
      for (var o in e)
        gn.call(e, o) && o[0] !== "_" && zu(o, e[o], t, a, i);
    }
    function zu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Gn) {
              var f = Qe(t.type) || "…", d = t.key;
              t = t.props;
              var h = Object.keys(t), y = h.length;
              if (d == null && y === 0) {
                t = "<" + f + " />";
                break;
              }
              if (3 > i || y === 1 && h[0] === "children" && d == null) {
                t = "<" + f + " … />";
                break;
              }
              a.push([
                o + "  ".repeat(i) + e,
                "<" + f
              ]), d !== null && zu(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!Nl(t.children) || 0 < t.children.length) && (e = !0) : gn.call(t, p) && p[0] !== "_" && zu(
                  p,
                  t[p],
                  a,
                  i + 1,
                  o
                );
              a.push([
                "",
                e ? ">…</" + f + ">" : "/>"
              ]);
              return;
            }
            if (f = Object.prototype.toString.call(t), f = f.slice(8, f.length - 1), f === "Array") {
              if (p = Up(t), p === TS || p === Wv) {
                t = JSON.stringify(t);
                break;
              } else if (p === AS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], zu(
                    f[0],
                    f[1],
                    a,
                    i + 1,
                    o
                  );
                return;
              }
            }
            if (f === "Promise") {
              if (t.status === "fulfilled") {
                if (f = a.length, zu(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, zu(
                e,
                t.reason,
                a,
                i,
                o
              ), a.length > f)) {
                a = a[f], a[1] = "Rejected Promise<" + a[1] + ">";
                return;
              }
              a.push([
                "  ".repeat(i) + e,
                "Promise"
              ]);
              return;
            }
            f === "Object" && (p = Object.getPrototypeOf(t)) && typeof p.constructor == "function" && (f = p.constructor.name), a.push([
              o + "  ".repeat(i) + e,
              f === "Object" ? 3 > i ? "" : "…" : f
            ]), 3 > i && Bm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === jE ? "…" : JSON.stringify(t);
          break;
        case "undefined":
          t = "undefined";
          break;
        case "boolean":
          t = t ? "true" : "false";
          break;
        default:
          t = String(t);
      }
      a.push([
        o + "  ".repeat(i) + e,
        t
      ]);
    }
    function Hp(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          Fv + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [Fv + o, "…"],
                [Iv + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Gn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = Qe(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [Fv + o, d],
                        [Iv + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        w1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Hp(
                        d,
                        h,
                        a,
                        i + 1
                      ) ? p === a.length && (y[1] = "Referentially unequal but deeply equal objects. Consider memoization.") : o = !1;
                      continue;
                    }
                  }
                else if (typeof d == "function" && typeof h == "function" && d.name === h.name && d.length === h.length && (y = Function.prototype.toString.call(d), p = Function.prototype.toString.call(h), y === p)) {
                  d = h.name === "" ? "() => {}" : h.name + "() {}", a.push([
                    w1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              zu(f, d, a, i, Fv), zu(f, h, a, i, Iv);
            }
            o = !1;
          }
        } else
          a.push([
            Iv + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function Kn(e) {
      St = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function Mn(e, t, a, i) {
      sl && (kf.start = t, kf.end = a, To.color = "warning", To.tooltipText = i, To.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          kf
        )
      ) : performance.measure(i, kf));
    }
    function pd(e, t, a) {
      Mn(e, t, a, "Reconnect");
    }
    function vd(e, t, a, i, o) {
      var f = re(e);
      if (f !== null && sl) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [BE], p = Hp(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !$f && (d.lanes & o) === 0 && 100 < e.actualDuration ? ($f = !0, y[0] = qE, To.color = "warning", To.tooltipText = X1) : (To.color = i, To.tooltipText = f), To.properties = y, kf.start = t, kf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            kf
          )
        ) : performance.measure(
          "​" + f,
          kf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Fu,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Fu,
          void 0,
          i
        );
      }
    }
    function qm(e, t, a, i) {
      if (sl) {
        var o = re(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && zu("key", e.key, d, 0, ""), e.memoizedProps !== null && Bm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: Fu,
                tooltipText: e.tag === 13 ? "Hydration failed" : "Error boundary caught an error",
                properties: d
              }
            }
          }, f ? f.run(
            performance.measure.bind(performance, "​" + o, e)
          ) : performance.measure("​" + o, e);
        }
      }
    }
    function $n(e, t, a, i, o) {
      if (o !== null) {
        if (sl) {
          var f = re(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && zu("key", e.key, i, 0, ""), e.memoizedProps !== null && Bm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: Fu,
                  tooltipText: "A lifecycle or effect errored",
                  properties: i
                }
              }
            }, (e = e._debugTask) ? e.run(
              performance.measure.bind(
                performance,
                "​" + f,
                t
              )
            ) : performance.measure("​" + f, t);
          }
        }
      } else
        f = re(e), f !== null && sl && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            Fu,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          Fu,
          void 0,
          o
        ));
    }
    function Fg(e, t, a, i) {
      if (sl && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            St,
            pt,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          St,
          pt,
          o
        );
      }
    }
    function Np(e, t, a, i) {
      !sl || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          St,
          pt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        St,
        pt,
        a
      ));
    }
    function xp(e, t, a, i) {
      !sl || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          St,
          pt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        St,
        pt,
        a
      ));
    }
    function Ig(e, t, a, i, o, f) {
      if (sl && !(t <= e)) {
        a = [];
        for (var d = 0; d < i.length; d++) {
          var h = i[d].value;
          a.push([
            "Recoverable Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "primary-dark",
              track: St,
              trackGroup: pt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Ym(e, t, a, i) {
      !sl || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          St,
          pt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        St,
        pt,
        "error"
      ));
    }
    function Pg(e, t, a, i) {
      !sl || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          St,
          pt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        St,
        pt,
        "secondary-light"
      ));
    }
    function jp(e, t, a, i, o) {
      if (sl && !(t <= e)) {
        for (var f = [], d = 0; d < a.length; d++) {
          var h = a[d].value;
          f.push([
            "Error",
            typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
          ]);
        }
        e = {
          start: e,
          end: t,
          detail: {
            devtools: {
              color: "error",
              track: St,
              trackGroup: pt,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function Gm(e, t, a) {
      !sl || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        St,
        pt,
        "secondary-dark"
      );
    }
    function gd() {
      for (var e = kh, t = zS = kh = 0; t < e; ) {
        var a = Iu[t];
        Iu[t++] = null;
        var i = Iu[t];
        Iu[t++] = null;
        var o = Iu[t];
        Iu[t++] = null;
        var f = Iu[t];
        if (Iu[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && wm(a, o, f);
      }
    }
    function $o(e, t, a, i) {
      Iu[kh++] = e, Iu[kh++] = t, Iu[kh++] = a, Iu[kh++] = i, zS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function qc(e, t, a, i) {
      return $o(e, t, a, i), Rs(e);
    }
    function ya(e, t) {
      return $o(e, null, null, t), Rs(e);
    }
    function wm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & N0 || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - oa(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function Rs(e) {
      if (ip > PE)
        throw $r = ip = 0, cp = a1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      $r > eT && ($r = 0, cp = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Yn(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Yn(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Ji(e) {
      if (Pu === null) return e;
      var t = Pu(e);
      return t === void 0 ? e : t.current;
    }
    function Sd(e) {
      if (Pu === null) return e;
      var t = Pu(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Ji(e.render), e.render !== t) ? (t = { $$typeof: Bf, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Xm(e, t) {
      if (Pu === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === ga) && (i = !0);
          break;
        case 11:
          (o === Bf || o === ga) && (i = !0);
          break;
        case 14:
        case 15:
          (o === Rr || o === ga) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = Pu(a), e !== void 0 && e === Pu(t)));
    }
    function Yc(e) {
      Pu !== null && typeof WeakSet == "function" && (Wh === null && (Wh = /* @__PURE__ */ new WeakSet()), Wh.add(e));
    }
    function Bp(e, t, a) {
      do {
        var i = e, o = i.alternate, f = i.child, d = i.sibling, h = i.tag;
        i = i.type;
        var y = null;
        switch (h) {
          case 0:
          case 15:
          case 1:
            y = i;
            break;
          case 11:
            y = i.render;
        }
        if (Pu === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = Pu(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), Wh !== null && (Wh.has(e) || o !== null && Wh.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = ya(e, 2), o !== null && Ge(o, e, 2)), f === null || i || Bp(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function eS(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, L1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Lm(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Ou(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = H(
        e.tag,
        t,
        e.key,
        e.mode
      ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugOwner = e._debugOwner, a._debugStack = e._debugStack, a._debugTask = e._debugTask, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null, a.actualDuration = -0, a.actualStartTime = -1.1), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, t = e.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugInfo = e._debugInfo, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case 0:
        case 15:
          a.type = Ji(e.type);
          break;
        case 1:
          a.type = Ji(e.type);
          break;
        case 11:
          a.type = Sd(e.type);
      }
      return a;
    }
    function Qm(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Gc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Lm(e) && (d = 1), h = Ji(h);
      else if (typeof e == "string")
        d = Q(), d = Uv(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case du:
            return t = H(31, a, t, o), t.elementType = du, t.lanes = f, t;
          case jf:
            return wc(
              a.children,
              o,
              f,
              t
            );
          case Ya:
            d = 8, o |= Fa, o |= Ni;
            break;
          case Or:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = H(12, e, t, i | tt), t.elementType = Or, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case vo:
            return t = H(13, a, t, o), t.elementType = vo, t.lanes = f, t;
          case ka:
            return t = H(19, a, t, o), t.elementType = ka, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ru:
                  d = 10;
                  break e;
                case Uh:
                  d = 9;
                  break e;
                case Bf:
                  d = 11, h = Sd(h);
                  break e;
                case Rr:
                  d = 14;
                  break e;
                case ga:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : Nl(e) ? a = "array" : e !== void 0 && e.$$typeof === Gn ? (a = "<" + (Qe(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? st(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = H(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function Ki(e, t, a) {
      return t = Gc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function wc(e, t, a, i) {
      return e = H(7, e, i, t), e.lanes = a, e;
    }
    function ko(e, t, a) {
      return e = H(6, e, null, t), e.lanes = a, e;
    }
    function Vm(e) {
      var t = H(18, null, null, qe);
      return t.stateNode = e, t;
    }
    function bd(e, t, a) {
      return t = H(
        4,
        e.children !== null ? e.children : [],
        e.key,
        t
      ), t.lanes = a, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    function Oa(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = OS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: ze(t)
        }, OS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: ze(t)
      };
    }
    function kn(e, t) {
      $i(), Fh[Ih++] = x0, Fh[Ih++] = Pv, Pv = e, x0 = t;
    }
    function Zm(e, t, a) {
      $i(), ei[ti++] = zo, ei[ti++] = Oo, ei[ti++] = Nr, Nr = e;
      var i = zo;
      e = Oo;
      var o = 32 - oa(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - oa(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, zo = 1 << 32 - oa(t) + o | a << o | i, Oo = f + e;
      } else
        zo = 1 << f | a << o | i, Oo = e;
    }
    function Ed(e) {
      $i(), e.return !== null && (kn(e, 1), Zm(e, 1, 0));
    }
    function Td(e) {
      for (; e === Pv; )
        Pv = Fh[--Ih], Fh[Ih] = null, x0 = Fh[--Ih], Fh[Ih] = null;
      for (; e === Nr; )
        Nr = ei[--ti], ei[ti] = null, Oo = ei[--ti], ei[ti] = null, zo = ei[--ti], ei[ti] = null;
    }
    function qp() {
      return $i(), Nr !== null ? { id: zo, overflow: Oo } : null;
    }
    function Yp(e, t) {
      $i(), ei[ti++] = zo, ei[ti++] = Oo, ei[ti++] = Nr, zo = t.id, Oo = t.overflow, Nr = e;
    }
    function $i() {
      mt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Xc(e, t) {
      if (e.return === null) {
        if (mu === null)
          mu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (mu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          mu.distanceFromLeaf > t && (mu.distanceFromLeaf = t);
        }
        return mu;
      }
      var a = Xc(
        e.return,
        t + 1
      ).children;
      return 0 < a.length && a[a.length - 1].fiber === e ? (a = a[a.length - 1], a.distanceFromLeaf > t && (a.distanceFromLeaf = t), a) : (t = {
        fiber: e,
        children: [],
        serverProps: void 0,
        serverTail: [],
        distanceFromLeaf: t
      }, a.push(t), t);
    }
    function Gp() {
      mt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function pa(e, t) {
      zc || (e = Xc(e, 0), e.serverProps = null, t !== null && (t = Dv(t), e.serverTail.push(t)));
    }
    function Cn(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = mu;
      throw i !== null && (mu = null, a = Om(i)), _s(
        Oa(
          Error(
            "Hydration failed because the server rendered " + (t ? "text" : "HTML") + ` didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch` + a
          ),
          e
        )
      ), RS;
    }
    function Jm(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[fl] = e, t[Ga] = i, Ba(a, i), a) {
        case "dialog":
          xe("cancel", t), xe("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          xe("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < op.length; a++)
            xe(op[a], t);
          break;
        case "source":
          xe("error", t);
          break;
        case "img":
        case "image":
        case "link":
          xe("error", t), xe("load", t);
          break;
        case "details":
          xe("toggle", t);
          break;
        case "input":
          ma("input", i), xe("invalid", t), za(t, i), ad(
            t,
            i.value,
            i.defaultValue,
            i.checked,
            i.defaultChecked,
            i.type,
            i.name,
            !0
          );
          break;
        case "option":
          Tp(t, i);
          break;
        case "select":
          ma("select", i), xe("invalid", t), nd(t, i);
          break;
        case "textarea":
          ma("textarea", i), xe("invalid", t), Mc(t, i), Go(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || $y(t.textContent, a) ? (i.popover != null && (xe("beforetoggle", t), xe("toggle", t)), i.onScroll != null && xe("scroll", t), i.onScrollEnd != null && xe("scrollend", t), i.onClick != null && (t.onclick = _n), t = !0) : t = !1, t || Cn(e, !0);
    }
    function Km(e) {
      for (wa = e.return; wa; )
        switch (wa.tag) {
          case 5:
          case 31:
          case 13:
            li = !1;
            return;
          case 27:
          case 3:
            li = !0;
            return;
          default:
            wa = wa.return;
        }
    }
    function Lc(e) {
      if (e !== wa) return !1;
      if (!mt)
        return Km(e), mt = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Df(e.type, e.memoizedProps)), a = !a), a && rl) {
        for (a = rl; a; ) {
          var i = Xc(e, 0), o = Dv(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Cf(a) : pn(a.nextSibling);
        }
        Cn(e);
      }
      if (Km(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        rl = Cf(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        rl = Cf(e);
      } else
        t === 27 ? (t = rl, vc(e.type) ? (e = y1, y1 = null, rl = e) : rl = t) : rl = wa ? pn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function ki() {
      rl = wa = null, zc = mt = !1;
    }
    function Ds() {
      var e = Ff;
      return e !== null && (zn === null ? zn = e : zn.push.apply(
        zn,
        e
      ), Ff = null), e;
    }
    function _s(e) {
      Ff === null ? Ff = [e] : Ff.push(e);
    }
    function Wi() {
      var e = mu;
      if (e !== null) {
        mu = null;
        for (var t = Om(e); 0 < e.children.length; )
          e = e.children[0];
        fe(e.fiber, function() {
          console.error(
            `A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:

- A server/client branch \`if (typeof window !== 'undefined')\`.
- Variable input such as \`Date.now()\` or \`Math.random()\` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

%s%s`,
            "https://react.dev/link/hydration-mismatch",
            t
          );
        });
      }
    }
    function Wo() {
      Ph = eg = null, em = !1;
    }
    function Un(e, t, a) {
      Be(DS, t._currentValue, e), t._currentValue = a, Be(_S, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== V1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = V1;
    }
    function Wn(e, t) {
      e._currentValue = DS.current;
      var a = _S.current;
      he(_S, t), e._currentRenderer = a, he(DS, t);
    }
    function Ad(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function hi(e, t, a, i) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var f = o.dependencies;
        if (f !== null) {
          var d = o.child;
          f = f.firstContext;
          e: for (; f !== null; ) {
            var h = f;
            f = o;
            for (var y = 0; y < t.length; y++)
              if (h.context === t[y]) {
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Ad(
                  f.return,
                  a,
                  e
                ), i || (d = null);
                break e;
              }
            f = h.next;
          }
        } else if (o.tag === 18) {
          if (d = o.return, d === null)
            throw Error(
              "We just came from a parent so we must have had a parent. This is a bug in React."
            );
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Ad(
            d,
            a,
            e
          ), d = null;
        } else d = o.child;
        if (d !== null) d.return = o;
        else
          for (d = o; d !== null; ) {
            if (d === e) {
              d = null;
              break;
            }
            if (o = d.sibling, o !== null) {
              o.return = d.return, d = o;
              break;
            }
            d = d.return;
          }
        o = d;
      }
    }
    function Fn(e, t, a, i) {
      e = null;
      for (var o = t, f = !1; o !== null; ) {
        if (!f) {
          if ((o.flags & 524288) !== 0) f = !0;
          else if ((o.flags & 262144) !== 0) break;
        }
        if (o.tag === 10) {
          var d = o.alternate;
          if (d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          if (d = d.memoizedProps, d !== null) {
            var h = o.type;
            bn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Ec.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(hp) : e = [hp]);
        }
        o = o.return;
      }
      e !== null && hi(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function Fo(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!bn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function Fi(e) {
      eg = e, Ph = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function _t(e) {
      return em && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), $m(eg, e);
    }
    function Ms(e, t) {
      return eg === null && Fi(e), $m(e, t);
    }
    function $m(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, Ph === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        Ph = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else Ph = Ph.next = t;
      return a;
    }
    function zd() {
      return {
        controller: new wE(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Qc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Cs(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && XE(LE, function() {
        e.controller.abort();
      });
    }
    function Ru(e, t, a) {
      (e & 127) !== 0 ? 0 > Oc && (Oc = Pl(), B0 = tg(t), MS = t, a != null && (CS = re(a)), (Et & (ra | vu)) !== Ta && (Cl = !0, Pf = j0), e = _f(), t = Zu(), e !== tm || t !== q0 ? tm = -1.1 : t !== null && (Pf = j0), Br = e, q0 = t) : (e & 4194048) !== 0 && 0 > ai && (ai = Pl(), Y0 = tg(t), Z1 = t, a != null && (J1 = re(a)), 0 > Mo) && (e = _f(), t = Zu(), (e !== ts || t !== qr) && (ts = -1.1), es = e, qr = t);
    }
    function wp(e) {
      if (0 > Oc) {
        Oc = Pl(), B0 = e._debugTask != null ? e._debugTask : null, (Et & (ra | vu)) !== Ta && (Pf = j0);
        var t = _f(), a = Zu();
        t !== tm || a !== q0 ? tm = -1.1 : a !== null && (Pf = j0), Br = t, q0 = a;
      }
      0 > ai && (ai = Pl(), Y0 = e._debugTask != null ? e._debugTask : null, 0 > Mo) && (e = _f(), t = Zu(), (e !== ts || t !== qr) && (ts = -1.1), es = e, qr = t);
    }
    function Du() {
      var e = xr;
      return xr = 0, e;
    }
    function Io(e) {
      var t = xr;
      return xr = e, t;
    }
    function Ra(e) {
      var t = xr;
      return xr += e, t;
    }
    function Vc() {
      Ne = Me = -1.1;
    }
    function il() {
      var e = Me;
      return Me = -1.1, e;
    }
    function Zl(e) {
      0 <= e && (Me = e);
    }
    function Hn() {
      var e = El;
      return El = -0, e;
    }
    function an(e) {
      0 <= e && (El = e);
    }
    function nn() {
      var e = vl;
      return vl = null, e;
    }
    function Nn() {
      var e = Cl;
      return Cl = !1, e;
    }
    function mi(e) {
      En = Pl(), 0 > e.actualStartTime && (e.actualStartTime = En);
    }
    function Od(e) {
      if (0 <= En) {
        var t = Pl() - En;
        e.actualDuration += t, e.selfBaseDuration = t, En = -1;
      }
    }
    function Us(e) {
      if (0 <= En) {
        var t = Pl() - En;
        e.actualDuration += t, En = -1;
      }
    }
    function Da() {
      if (0 <= En) {
        var e = Pl(), t = e - En;
        En = -1, xr += t, El += t, Ne = e;
      }
    }
    function Xp(e) {
      vl === null && (vl = []), vl.push(e), Do === null && (Do = []), Do.push(e);
    }
    function gl() {
      En = Pl(), 0 > Me && (Me = En);
    }
    function Zc(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function yi(e, t) {
      if (w0 === null) {
        var a = w0 = [];
        HS = 0, Yr = Ky(), lm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return HS++, t.then(km, km), t;
    }
    function km() {
      if (--HS === 0 && (-1 < ai || (Mo = -1.1), w0 !== null)) {
        lm !== null && (lm.status = "fulfilled");
        var e = w0;
        w0 = null, Yr = 0, lm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function Rd(e, t) {
      var a = [], i = {
        status: "pending",
        value: null,
        reason: null,
        then: function(o) {
          a.push(o);
        }
      };
      return e.then(
        function() {
          i.status = "fulfilled", i.value = t;
          for (var o = 0; o < a.length; o++) (0, a[o])(t);
        },
        function(o) {
          for (i.status = "rejected", i.reason = o, o = 0; o < a.length; o++)
            (0, a[o])(void 0);
        }
      ), i;
    }
    function pi() {
      var e = Gr.current;
      return e !== null ? e : tl.pooledCache;
    }
    function Po(e, t) {
      t === null ? Be(Gr, Gr.current, e) : Be(Gr, t.pool, e);
    }
    function Wm() {
      var e = pi();
      return e === null ? null : { parent: Il._currentValue, pool: e };
    }
    function Dd() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function Fm(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function un(e, t, a) {
      X.actQueue !== null && (X.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(_n, _n), t = a), t._debugInfo === void 0) {
        e = performance.now(), i = t.displayName;
        var o = {
          name: typeof i == "string" ? i : "Promise",
          start: e,
          end: e,
          value: t
        };
        t._debugInfo = [{ awaited: o }], t.status !== "fulfilled" && t.status !== "rejected" && (e = function() {
          o.end = performance.now();
        }, t.then(e, e));
      }
      switch (t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, Hs(e), e;
        default:
          if (typeof t.status == "string")
            t.then(_n, _n);
          else {
            if (e = tl, e !== null && 100 < e.shellSuspendCounter)
              throw Error(
                "An unknown Component is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
              );
            e = t, e.status = "pending", e.then(
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "fulfilled", d.value = f;
                }
              },
              function(f) {
                if (t.status === "pending") {
                  var d = t;
                  d.status = "rejected", d.reason = f;
                }
              }
            );
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, Hs(e), e;
          }
          throw Xr = t, K0 = !0, am;
      }
    }
    function cn(e) {
      try {
        return KE(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Xr = t, K0 = !0, am) : t;
      }
    }
    function Jc() {
      if (Xr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Xr;
      return Xr = null, K0 = !1, e;
    }
    function Hs(e) {
      if (e === am || e === fg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Ol(e) {
      var t = lt;
      return e != null && (lt = t === null ? e : t.concat(e)), t;
    }
    function Qa() {
      var e = lt;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function _a(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = Ki(e, a.mode, 0), t._debugInfo = lt, t.return = a), fe(
            t,
            function(d) {
              console.error(
                "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                d
              );
            },
            f
          );
          break;
        }
      }
    }
    function In(e) {
      var t = $0;
      return $0 += 1, nm === null && (nm = Dd()), un(nm, e, t);
    }
    function Va(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function Pn(e, t) {
      throw t.$$typeof === qv ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function xn(e, t) {
      var a = Qa();
      a !== null ? a.run(
        Pn.bind(null, e, t)
      ) : Pn(e, t);
    }
    function Im(e, t) {
      var a = re(e) || "Component";
      db[a] || (db[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  root.render(%s)`,
        t,
        t,
        t
      ) : console.error(
        `Functions are not valid as a React child. This may happen if you return %s instead of <%s /> from render. Or maybe you meant to call this function rather than return it.
  <%s>{%s}</%s>`,
        t,
        t,
        a,
        t,
        a
      ));
    }
    function ef(e, t) {
      var a = Qa();
      a !== null ? a.run(
        Im.bind(null, e, t)
      ) : Im(e, t);
    }
    function _d(e, t) {
      var a = re(e) || "Component";
      hb[a] || (hb[a] = !0, t = String(t), e.tag === 3 ? console.error(
        `Symbols are not valid as a React child.
  root.render(%s)`,
        t
      ) : console.error(
        `Symbols are not valid as a React child.
  <%s>%s</%s>`,
        a,
        t,
        a
      ));
    }
    function Ns(e, t) {
      var a = Qa();
      a !== null ? a.run(
        _d.bind(null, e, t)
      ) : _d(e, t);
    }
    function Jl(e) {
      function t(b, T) {
        if (e) {
          var O = b.deletions;
          O === null ? (b.deletions = [T], b.flags |= 16) : O.push(T);
        }
      }
      function a(b, T) {
        if (!e) return null;
        for (; T !== null; )
          t(b, T), T = T.sibling;
        return null;
      }
      function i(b) {
        for (var T = /* @__PURE__ */ new Map(); b !== null; )
          b.key !== null ? T.set(b.key, b) : T.set(b.index, b), b = b.sibling;
        return T;
      }
      function o(b, T) {
        return b = Ou(b, T), b.index = 0, b.sibling = null, b;
      }
      function f(b, T, O) {
        return b.index = O, e ? (O = b.alternate, O !== null ? (O = O.index, O < T ? (b.flags |= 67108866, T) : O) : (b.flags |= 67108866, T)) : (b.flags |= 1048576, T);
      }
      function d(b) {
        return e && b.alternate === null && (b.flags |= 67108866), b;
      }
      function h(b, T, O, Z) {
        return T === null || T.tag !== 6 ? (T = ko(
          O,
          b.mode,
          Z
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = lt, T) : (T = o(T, O), T.return = b, T._debugInfo = lt, T);
      }
      function y(b, T, O, Z) {
        var oe = O.type;
        return oe === jf ? (T = R(
          b,
          T,
          O.props.children,
          Z,
          O.key
        ), _a(O, T, b), T) : T !== null && (T.elementType === oe || Xm(T, O) || typeof oe == "object" && oe !== null && oe.$$typeof === ga && cn(oe) === T.type) ? (T = o(T, O.props), Va(T, O), T.return = b, T._debugOwner = O._owner, T._debugInfo = lt, T) : (T = Ki(O, b.mode, Z), Va(T, O), T.return = b, T._debugInfo = lt, T);
      }
      function p(b, T, O, Z) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = bd(O, b.mode, Z), T.return = b, T._debugInfo = lt, T) : (T = o(T, O.children || []), T.return = b, T._debugInfo = lt, T);
      }
      function R(b, T, O, Z, oe) {
        return T === null || T.tag !== 7 ? (T = wc(
          O,
          b.mode,
          Z,
          oe
        ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = lt, T) : (T = o(T, O), T.return = b, T._debugInfo = lt, T);
      }
      function _(b, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = ko(
            "" + T,
            b.mode,
            O
          ), T.return = b, T._debugOwner = b, T._debugTask = b._debugTask, T._debugInfo = lt, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case Gn:
              return O = Ki(
                T,
                b.mode,
                O
              ), Va(O, T), O.return = b, b = Ol(T._debugInfo), O._debugInfo = lt, lt = b, O;
            case Sc:
              return T = bd(
                T,
                b.mode,
                O
              ), T.return = b, T._debugInfo = lt, T;
            case ga:
              var Z = Ol(T._debugInfo);
              return T = cn(T), b = _(b, T, O), lt = Z, b;
          }
          if (Nl(T) || De(T))
            return O = wc(
              T,
              b.mode,
              O,
              null
            ), O.return = b, O._debugOwner = b, O._debugTask = b._debugTask, b = Ol(T._debugInfo), O._debugInfo = lt, lt = b, O;
          if (typeof T.then == "function")
            return Z = Ol(T._debugInfo), b = _(
              b,
              In(T),
              O
            ), lt = Z, b;
          if (T.$$typeof === ru)
            return _(
              b,
              Ms(b, T),
              O
            );
          xn(b, T);
        }
        return typeof T == "function" && ef(b, T), typeof T == "symbol" && Ns(b, T), null;
      }
      function E(b, T, O, Z) {
        var oe = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return oe !== null ? null : h(b, T, "" + O, Z);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Gn:
              return O.key === oe ? (oe = Ol(O._debugInfo), b = y(
                b,
                T,
                O,
                Z
              ), lt = oe, b) : null;
            case Sc:
              return O.key === oe ? p(b, T, O, Z) : null;
            case ga:
              return oe = Ol(O._debugInfo), O = cn(O), b = E(
                b,
                T,
                O,
                Z
              ), lt = oe, b;
          }
          if (Nl(O) || De(O))
            return oe !== null ? null : (oe = Ol(O._debugInfo), b = R(
              b,
              T,
              O,
              Z,
              null
            ), lt = oe, b);
          if (typeof O.then == "function")
            return oe = Ol(O._debugInfo), b = E(
              b,
              T,
              In(O),
              Z
            ), lt = oe, b;
          if (O.$$typeof === ru)
            return E(
              b,
              T,
              Ms(b, O),
              Z
            );
          xn(b, O);
        }
        return typeof O == "function" && ef(b, O), typeof O == "symbol" && Ns(b, O), null;
      }
      function q(b, T, O, Z, oe) {
        if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
          return b = b.get(O) || null, h(T, b, "" + Z, oe);
        if (typeof Z == "object" && Z !== null) {
          switch (Z.$$typeof) {
            case Gn:
              return O = b.get(
                Z.key === null ? O : Z.key
              ) || null, b = Ol(Z._debugInfo), T = y(
                T,
                O,
                Z,
                oe
              ), lt = b, T;
            case Sc:
              return b = b.get(
                Z.key === null ? O : Z.key
              ) || null, p(T, b, Z, oe);
            case ga:
              var Le = Ol(Z._debugInfo);
              return Z = cn(Z), T = q(
                b,
                T,
                O,
                Z,
                oe
              ), lt = Le, T;
          }
          if (Nl(Z) || De(Z))
            return O = b.get(O) || null, b = Ol(Z._debugInfo), T = R(
              T,
              O,
              Z,
              oe,
              null
            ), lt = b, T;
          if (typeof Z.then == "function")
            return Le = Ol(Z._debugInfo), T = q(
              b,
              T,
              O,
              In(Z),
              oe
            ), lt = Le, T;
          if (Z.$$typeof === ru)
            return q(
              b,
              T,
              O,
              Ms(T, Z),
              oe
            );
          xn(T, Z);
        }
        return typeof Z == "function" && ef(T, Z), typeof Z == "symbol" && Ns(T, Z), null;
      }
      function ue(b, T, O, Z) {
        if (typeof O != "object" || O === null) return Z;
        switch (O.$$typeof) {
          case Gn:
          case Sc:
            Ue(b, T, O);
            var oe = O.key;
            if (typeof oe != "string") break;
            if (Z === null) {
              Z = /* @__PURE__ */ new Set(), Z.add(oe);
              break;
            }
            if (!Z.has(oe)) {
              Z.add(oe);
              break;
            }
            fe(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                oe
              );
            });
            break;
          case ga:
            O = cn(O), ue(b, T, O, Z);
        }
        return Z;
      }
      function se(b, T, O, Z) {
        for (var oe = null, Le = null, _e = null, be = T, Pe = T = 0, dl = null; be !== null && Pe < O.length; Pe++) {
          be.index > Pe ? (dl = be, be = null) : dl = be.sibling;
          var Xl = E(
            b,
            be,
            O[Pe],
            Z
          );
          if (Xl === null) {
            be === null && (be = dl);
            break;
          }
          oe = ue(
            b,
            Xl,
            O[Pe],
            oe
          ), e && be && Xl.alternate === null && t(b, be), T = f(Xl, T, Pe), _e === null ? Le = Xl : _e.sibling = Xl, _e = Xl, be = dl;
        }
        if (Pe === O.length)
          return a(b, be), mt && kn(b, Pe), Le;
        if (be === null) {
          for (; Pe < O.length; Pe++)
            be = _(b, O[Pe], Z), be !== null && (oe = ue(
              b,
              be,
              O[Pe],
              oe
            ), T = f(
              be,
              T,
              Pe
            ), _e === null ? Le = be : _e.sibling = be, _e = be);
          return mt && kn(b, Pe), Le;
        }
        for (be = i(be); Pe < O.length; Pe++)
          dl = q(
            be,
            b,
            Pe,
            O[Pe],
            Z
          ), dl !== null && (oe = ue(
            b,
            dl,
            O[Pe],
            oe
          ), e && dl.alternate !== null && be.delete(
            dl.key === null ? Pe : dl.key
          ), T = f(
            dl,
            T,
            Pe
          ), _e === null ? Le = dl : _e.sibling = dl, _e = dl);
        return e && be.forEach(function(qo) {
          return t(b, qo);
        }), mt && kn(b, Pe), Le;
      }
      function nl(b, T, O, Z) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var oe = null, Le = null, _e = T, be = T = 0, Pe = null, dl = null, Xl = O.next(); _e !== null && !Xl.done; be++, Xl = O.next()) {
          _e.index > be ? (Pe = _e, _e = null) : Pe = _e.sibling;
          var qo = E(b, _e, Xl.value, Z);
          if (qo === null) {
            _e === null && (_e = Pe);
            break;
          }
          dl = ue(
            b,
            qo,
            Xl.value,
            dl
          ), e && _e && qo.alternate === null && t(b, _e), T = f(qo, T, be), Le === null ? oe = qo : Le.sibling = qo, Le = qo, _e = Pe;
        }
        if (Xl.done)
          return a(b, _e), mt && kn(b, be), oe;
        if (_e === null) {
          for (; !Xl.done; be++, Xl = O.next())
            _e = _(b, Xl.value, Z), _e !== null && (dl = ue(
              b,
              _e,
              Xl.value,
              dl
            ), T = f(
              _e,
              T,
              be
            ), Le === null ? oe = _e : Le.sibling = _e, Le = _e);
          return mt && kn(b, be), oe;
        }
        for (_e = i(_e); !Xl.done; be++, Xl = O.next())
          Pe = q(
            _e,
            b,
            be,
            Xl.value,
            Z
          ), Pe !== null && (dl = ue(
            b,
            Pe,
            Xl.value,
            dl
          ), e && Pe.alternate !== null && _e.delete(
            Pe.key === null ? be : Pe.key
          ), T = f(
            Pe,
            T,
            be
          ), Le === null ? oe = Pe : Le.sibling = Pe, Le = Pe);
        return e && _e.forEach(function(vT) {
          return t(b, vT);
        }), mt && kn(b, be), oe;
      }
      function vt(b, T, O, Z) {
        if (typeof O == "object" && O !== null && O.type === jf && O.key === null && (_a(O, null, b), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Gn:
              var oe = Ol(O._debugInfo);
              e: {
                for (var Le = O.key; T !== null; ) {
                  if (T.key === Le) {
                    if (Le = O.type, Le === jf) {
                      if (T.tag === 7) {
                        a(
                          b,
                          T.sibling
                        ), Z = o(
                          T,
                          O.props.children
                        ), Z.return = b, Z._debugOwner = O._owner, Z._debugInfo = lt, _a(O, Z, b), b = Z;
                        break e;
                      }
                    } else if (T.elementType === Le || Xm(
                      T,
                      O
                    ) || typeof Le == "object" && Le !== null && Le.$$typeof === ga && cn(Le) === T.type) {
                      a(
                        b,
                        T.sibling
                      ), Z = o(T, O.props), Va(Z, O), Z.return = b, Z._debugOwner = O._owner, Z._debugInfo = lt, b = Z;
                      break e;
                    }
                    a(b, T);
                    break;
                  } else t(b, T);
                  T = T.sibling;
                }
                O.type === jf ? (Z = wc(
                  O.props.children,
                  b.mode,
                  Z,
                  O.key
                ), Z.return = b, Z._debugOwner = b, Z._debugTask = b._debugTask, Z._debugInfo = lt, _a(O, Z, b), b = Z) : (Z = Ki(
                  O,
                  b.mode,
                  Z
                ), Va(Z, O), Z.return = b, Z._debugInfo = lt, b = Z);
              }
              return b = d(b), lt = oe, b;
            case Sc:
              e: {
                for (oe = O, O = oe.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === oe.containerInfo && T.stateNode.implementation === oe.implementation) {
                      a(
                        b,
                        T.sibling
                      ), Z = o(
                        T,
                        oe.children || []
                      ), Z.return = b, b = Z;
                      break e;
                    } else {
                      a(b, T);
                      break;
                    }
                  else t(b, T);
                  T = T.sibling;
                }
                Z = bd(
                  oe,
                  b.mode,
                  Z
                ), Z.return = b, b = Z;
              }
              return d(b);
            case ga:
              return oe = Ol(O._debugInfo), O = cn(O), b = vt(
                b,
                T,
                O,
                Z
              ), lt = oe, b;
          }
          if (Nl(O))
            return oe = Ol(O._debugInfo), b = se(
              b,
              T,
              O,
              Z
            ), lt = oe, b;
          if (De(O)) {
            if (oe = Ol(O._debugInfo), Le = De(O), typeof Le != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var _e = Le.call(O);
            return _e === O ? (b.tag !== 0 || Object.prototype.toString.call(b.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(_e) !== "[object Generator]") && (sb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), sb = !0) : O.entries !== Le || BS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), BS = !0), b = nl(
              b,
              T,
              _e,
              Z
            ), lt = oe, b;
          }
          if (typeof O.then == "function")
            return oe = Ol(O._debugInfo), b = vt(
              b,
              T,
              In(O),
              Z
            ), lt = oe, b;
          if (O.$$typeof === ru)
            return vt(
              b,
              T,
              Ms(b, O),
              Z
            );
          xn(b, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (oe = "" + O, T !== null && T.tag === 6 ? (a(
          b,
          T.sibling
        ), Z = o(T, oe), Z.return = b, b = Z) : (a(b, T), Z = ko(
          oe,
          b.mode,
          Z
        ), Z.return = b, Z._debugOwner = b, Z._debugTask = b._debugTask, Z._debugInfo = lt, b = Z), d(b)) : (typeof O == "function" && ef(b, O), typeof O == "symbol" && Ns(b, O), a(b, T));
      }
      return function(b, T, O, Z) {
        var oe = lt;
        lt = null;
        try {
          $0 = 0;
          var Le = vt(
            b,
            T,
            O,
            Z
          );
          return nm = null, Le;
        } catch (dl) {
          if (dl === am || dl === fg) throw dl;
          var _e = H(29, dl, null, b.mode);
          _e.lanes = Z, _e.return = b;
          var be = _e._debugInfo = lt;
          if (_e._debugOwner = b._debugOwner, _e._debugTask = b._debugTask, be != null) {
            for (var Pe = be.length - 1; 0 <= Pe; Pe--)
              if (typeof be[Pe].stack == "string") {
                _e._debugOwner = be[Pe], _e._debugTask = be[Pe].debugTask;
                break;
              }
          }
          return _e;
        } finally {
          lt = oe;
        }
      };
    }
    function Ft(e, t) {
      var a = Nl(e);
      return e = !a && typeof De(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function dt(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function _u(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function jl(e) {
      return {
        lane: e,
        tag: yb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Mu(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, YS === i && !gb) {
        var o = re(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), gb = !0;
      }
      return (Et & ra) !== Ta ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = Rs(e), wm(e, null, a), t) : ($o(e, i, t, a), Rs(e));
    }
    function jn(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, _c(e, a);
      }
    }
    function xs(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null && (i = i.updateQueue, a === i)) {
        var o = null, f = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var d = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            f === null ? o = f = d : f = f.next = d, a = a.next;
          } while (a !== null);
          f === null ? o = f = t : f = f.next = t;
        } else o = f = t;
        a = {
          baseState: i.baseState,
          firstBaseUpdate: o,
          lastBaseUpdate: f,
          shared: i.shared,
          callbacks: i.callbacks
        }, e.updateQueue = a;
        return;
      }
      e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = t : e.next = t, a.lastBaseUpdate = t;
    }
    function tf() {
      if (GS) {
        var e = lm;
        if (e !== null) throw e;
      }
    }
    function Cu(e, t, a, i) {
      GS = !1;
      var o = e.updateQueue;
      ls = !1, YS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var R = e.alternate;
        R !== null && (R = R.updateQueue, h = R.lastBaseUpdate, h !== d && (h === null ? R.firstBaseUpdate = p : h.next = p, R.lastBaseUpdate = y));
      }
      if (f !== null) {
        var _ = o.baseState;
        d = 0, R = p = y = null, h = f;
        do {
          var E = h.lane & -536870913, q = E !== h.lane;
          if (q ? (at & E) === E : (i & E) === E) {
            E !== 0 && E === Yr && (GS = !0), R !== null && (R = R.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              E = e;
              var ue = h, se = t, nl = a;
              switch (ue.tag) {
                case pb:
                  if (ue = ue.payload, typeof ue == "function") {
                    em = !0;
                    var vt = ue.call(
                      nl,
                      _,
                      se
                    );
                    if (E.mode & Fa) {
                      ce(!0);
                      try {
                        ue.call(nl, _, se);
                      } finally {
                        ce(!1);
                      }
                    }
                    em = !1, _ = vt;
                    break e;
                  }
                  _ = ue;
                  break e;
                case qS:
                  E.flags = E.flags & -65537 | 128;
                case yb:
                  if (vt = ue.payload, typeof vt == "function") {
                    if (em = !0, ue = vt.call(
                      nl,
                      _,
                      se
                    ), E.mode & Fa) {
                      ce(!0);
                      try {
                        vt.call(nl, _, se);
                      } finally {
                        ce(!1);
                      }
                    }
                    em = !1;
                  } else ue = vt;
                  if (ue == null) break e;
                  _ = et({}, _, ue);
                  break e;
                case vb:
                  ls = !0;
              }
            }
            E = h.callback, E !== null && (e.flags |= 64, q && (e.flags |= 8192), q = o.callbacks, q === null ? o.callbacks = [E] : q.push(E));
          } else
            q = {
              lane: E,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, R === null ? (p = R = q, y = _) : R = R.next = q, d |= E;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            q = h, h = q.next, q.next = null, o.lastBaseUpdate = q, o.shared.pending = null;
          }
        } while (!0);
        R === null && (y = _), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = R, f === null && (o.shared.lanes = 0), us |= d, e.lanes = d, e.memoizedState = _;
      }
      YS = null;
    }
    function Ii(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function Pm(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Ii(a[e], t);
    }
    function lf(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Ii(a[e], t);
    }
    function Md(e, t) {
      var a = Dc;
      Be(rg, a, e), Be(um, t, e), Dc = a | t.baseLanes;
    }
    function vi(e) {
      Be(rg, Dc, e), Be(
        um,
        um.current,
        e
      );
    }
    function eu(e) {
      Dc = rg.current, he(um, e), he(rg, e);
    }
    function Ma(e) {
      var t = e.alternate;
      Be(
        wl,
        wl.current & im,
        e
      ), Be(yu, e, e), ni === null && (t === null || um.current !== null || t.memoizedState !== null) && (ni = e);
    }
    function tu(e) {
      Be(wl, wl.current, e), Be(yu, e, e), ni === null && (ni = e);
    }
    function Cd(e) {
      e.tag === 22 ? (Be(wl, wl.current, e), Be(yu, e, e), ni === null && (ni = e)) : Uu(e);
    }
    function Uu(e) {
      Be(wl, wl.current, e), Be(
        yu,
        yu.current,
        e
      );
    }
    function Kl(e) {
      he(yu, e), ni === e && (ni = null), he(wl, e);
    }
    function Kc(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || pr(a) || Wy(a)))
            return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    function we() {
      var e = w;
      ii === null ? ii = [e] : ii.push(e);
    }
    function k() {
      var e = w;
      if (ii !== null && (Ho++, ii[Ho] !== e)) {
        var t = re(Xe);
        if (!Sb.has(t) && (Sb.add(t), ii !== null)) {
          for (var a = "", i = 0; i <= Ho; i++) {
            var o = ii[i], f = i === Ho ? e : o;
            for (o = i + 1 + ". " + o; 30 > o.length; )
              o += " ";
            o += f + `
`, a += o;
          }
          console.error(
            `React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://react.dev/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`,
            t,
            a
          );
        }
      }
    }
    function gi(e) {
      e == null || Nl(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        w,
        typeof e
      );
    }
    function js() {
      var e = re(Xe);
      Eb.has(e) || (Eb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function Sl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function ey(e, t) {
      if (F0) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          w
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        w,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!bn(e[a], t[a])) return !1;
      return !0;
    }
    function ty(e, t, a, i, o, f) {
      Co = f, Xe = t, ii = e !== null ? e._debugHookTypes : null, Ho = -1, F0 = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = re(Xe), wS.has(f) || (wS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, X.H = e !== null && e.memoizedState !== null ? LS : ii !== null ? Tb : XS, Qr = f = (t.mode & Fa) !== qe;
      var d = NS(a, i, o);
      if (Qr = !1, om && (d = Bs(
        t,
        a,
        i,
        o
      )), f) {
        ce(!0);
        try {
          d = Bs(
            t,
            a,
            i,
            o
          );
        } finally {
          ce(!1);
        }
      }
      return Rl(e, t), d;
    }
    function Rl(e, t) {
      t._debugHookTypes = ii, t.dependencies === null ? Uo !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: Uo
      }) : t.dependencies._debugThenableState = Uo, X.H = I0;
      var a = el !== null && el.next !== null;
      if (Co = 0, ii = w = ea = el = Xe = null, Ho = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), hg = !1, W0 = 0, Uo = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || ta || (e = e.dependencies, e !== null && Fo(e) && (ta = !0)), K0 ? (K0 = !1, e = !0) : e = !1, e && (t = re(t) || "Unknown", bb.has(t) || wS.has(t) || (bb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Bs(e, t, a, i) {
      Xe = e;
      var o = 0;
      do {
        if (om && (Uo = null), W0 = 0, om = !1, o >= kE)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, F0 = !1, ea = el = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        Ho = -1, X.H = Ab, f = NS(t, a, i);
      } while (om);
      return f;
    }
    function qs() {
      var e = X.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? ws(t) : t, e = e.useState()[0], (el !== null ? el.memoizedState : null) !== e && (Xe.flags |= 1024), t;
    }
    function $c() {
      var e = mg !== 0;
      return mg = 0, e;
    }
    function Ys(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Ni) !== qe ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function Pi(e) {
      if (hg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        hg = !1;
      }
      Co = 0, ii = ea = el = Xe = null, Ho = -1, w = null, om = !1, W0 = mg = 0, Uo = null;
    }
    function Ul() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return ea === null ? Xe.memoizedState = ea = e : ea = ea.next = e, ea;
    }
    function Ht() {
      if (el === null) {
        var e = Xe.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = el.next;
      var t = ea === null ? Xe.memoizedState : ea.next;
      if (t !== null)
        ea = t, el = e;
      else {
        if (e === null)
          throw Xe.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        el = e, e = {
          memoizedState: el.memoizedState,
          baseState: el.baseState,
          baseQueue: el.baseQueue,
          queue: el.queue,
          next: null
        }, ea === null ? Xe.memoizedState = ea = e : ea = ea.next = e;
      }
      return ea;
    }
    function Gs() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function ws(e) {
      var t = W0;
      return W0 += 1, Uo === null && (Uo = Dd()), e = un(Uo, e, t), t = Xe, (ea === null ? t.memoizedState : ea.next) === null && (t = t.alternate, X.H = t !== null && t.memoizedState !== null ? LS : XS), e;
    }
    function Si(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return ws(e);
        if (e.$$typeof === ru) return _t(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function on(e) {
      var t = null, a = Xe.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Xe.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Gs(), Xe.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || F0)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = iS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function fn(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function af(e, t, a) {
      var i = Ul();
      if (a !== void 0) {
        var o = a(t);
        if (Qr) {
          ce(!0);
          try {
            a(t);
          } finally {
            ce(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = tS.bind(
        null,
        Xe,
        e
      ), [i.memoizedState, e];
    }
    function kc(e) {
      var t = Ht();
      return ec(t, el, e);
    }
    function ec(e, t, a) {
      var i = e.queue;
      if (i === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      i.lastRenderedReducer = a;
      var o = e.baseQueue, f = i.pending;
      if (f !== null) {
        if (o !== null) {
          var d = o.next;
          o.next = f.next, f.next = d;
        }
        t.baseQueue !== o && console.error(
          "Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."
        ), t.baseQueue = o = f, i.pending = null;
      }
      if (f = e.baseState, o === null) e.memoizedState = f;
      else {
        t = o.next;
        var h = d = null, y = null, p = t, R = !1;
        do {
          var _ = p.lane & -536870913;
          if (_ !== p.lane ? (at & _) === _ : (Co & _) === _) {
            var E = p.revertLane;
            if (E === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), _ === Yr && (R = !0);
            else if ((Co & E) === E) {
              p = p.next, E === Yr && (R = !0);
              continue;
            } else
              _ = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = _, d = f) : y = y.next = _, Xe.lanes |= E, us |= E;
            _ = p.action, Qr && a(f, _), f = p.hasEagerState ? p.eagerState : a(f, _);
          } else
            E = {
              lane: _,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = E, d = f) : y = y.next = E, Xe.lanes |= _, us |= _;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !bn(f, e.memoizedState) && (ta = !0, R && (a = lm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function Wc(e) {
      var t = Ht(), a = t.queue;
      if (a === null)
        throw Error(
          "Should have a queue. You are likely calling Hooks conditionally, which is not allowed. (https://react.dev/link/invalid-hook-call)"
        );
      a.lastRenderedReducer = e;
      var i = a.dispatch, o = a.pending, f = t.memoizedState;
      if (o !== null) {
        a.pending = null;
        var d = o = o.next;
        do
          f = e(f, d.action), d = d.next;
        while (d !== o);
        bn(f, t.memoizedState) || (ta = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function nf(e, t, a) {
      var i = Xe, o = Ul();
      if (mt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        cm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), cm = !0);
      } else {
        if (f = t(), cm || (a = t(), bn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0)), tl === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (at & 127) !== 0 || ly(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Pc(
        tc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, Hu(
        ui | An,
        { destroy: void 0 },
        ay.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Fc(e, t, a) {
      var i = Xe, o = Ht(), f = mt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !cm) {
        var d = t();
        bn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), cm = !0);
      }
      (d = !bn(
        (el || o).memoizedState,
        a
      )) && (o.memoizedState = a, ta = !0), o = o.queue;
      var h = tc.bind(null, i, o, e);
      if (Bl(2048, An, h, [e]), o.getSnapshot !== t || d || ea !== null && ea.memoizedState.tag & ui) {
        if (i.flags |= 2048, Hu(
          ui | An,
          { destroy: void 0 },
          ay.bind(
            null,
            i,
            o,
            a,
            t
          ),
          null
        ), tl === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        f || (Co & 127) !== 0 || ly(i, t, a);
      }
      return a;
    }
    function ly(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Xe.updateQueue, t === null ? (t = Gs(), Xe.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function ay(e, t, a, i) {
      t.value = a, t.getSnapshot = i, lc(t) && ny(e);
    }
    function tc(e, t, a) {
      return a(function() {
        lc(t) && (Ru(2, "updateSyncExternalStore()", e), ny(e));
      });
    }
    function lc(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !bn(e, a);
      } catch {
        return !0;
      }
    }
    function ny(e) {
      var t = ya(e, 2);
      t !== null && Ge(t, e, 2);
    }
    function Ud(e) {
      var t = Ul();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Qr) {
          ce(!0);
          try {
            a();
          } finally {
            ce(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fn,
        lastRenderedState: e
      }, t;
    }
    function ac(e) {
      e = Ud(e);
      var t = e.queue, a = qd.bind(null, Xe, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function Ic(e) {
      var t = Ul();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Ks.bind(
        null,
        Xe,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function Xs(e, t) {
      var a = Ht();
      return uf(a, el, e, t);
    }
    function uf(e, t, a, i) {
      return e.baseState = a, ec(
        e,
        el,
        typeof i == "function" ? i : fn
      );
    }
    function Ls(e, t) {
      var a = Ht();
      return el !== null ? uf(a, el, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function Lp(e, t, a, i, o) {
      if ($l(e))
        throw Error("Cannot update form state while rendering.");
      if (e = t.action, e !== null) {
        var f = {
          payload: o,
          action: e,
          next: null,
          isTransition: !0,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(d) {
            f.listeners.push(d);
          }
        };
        X.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, nc(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function nc(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = X.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), X.T = d;
        try {
          var h = a(o, i), y = X.S;
          y !== null && y(d, h), uy(e, t, h);
        } catch (p) {
          Qs(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), X.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), uy(e, t, d);
        } catch (p) {
          Qs(e, t, p);
        }
    }
    function uy(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (X.asyncTransitions++, a.then(eo, eo), a.then(
        function(i) {
          bi(e, t, i);
        },
        function(i) {
          return Qs(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : bi(e, t, a);
    }
    function bi(e, t, a) {
      t.status = "fulfilled", t.value = a, Hd(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, nc(e, a)));
    }
    function Qs(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Hd(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Hd(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ei(e, t) {
      return t;
    }
    function sn(e, t) {
      if (mt) {
        var a = tl.formState;
        if (a !== null) {
          e: {
            var i = Xe;
            if (mt) {
              if (rl) {
                t: {
                  for (var o = rl, f = li; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = pn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === r1 || f === o2 ? o : null;
                }
                if (o) {
                  rl = pn(
                    o.nextSibling
                  ), i = o.data === r1;
                  break e;
                }
              }
              Cn(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Ul(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ei,
        lastRenderedState: t
      }, a.queue = i, a = qd.bind(
        null,
        Xe,
        i
      ), i.dispatch = a, i = Ud(!1), f = Ks.bind(
        null,
        Xe,
        !1,
        i.queue
      ), i = Ul(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = Lp.bind(
        null,
        Xe,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function uc(e) {
      var t = Ht();
      return Nd(t, el, e);
    }
    function Nd(e, t, a) {
      if (t = ec(
        e,
        t,
        Ei
      )[0], e = kc(fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = ws(t);
        } catch (d) {
          throw d === am ? fg : d;
        }
      else i = t;
      t = Ht();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Xe.flags |= 2048, Hu(
        ui | An,
        { destroy: void 0 },
        iy.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function iy(e, t) {
      e.action = t;
    }
    function ic(e) {
      var t = Ht(), a = el;
      if (a !== null)
        return Nd(t, a, e);
      Ht(), t = t.memoizedState, a = Ht();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function Hu(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Xe.updateQueue, t === null && (t = Gs(), Xe.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function xd(e) {
      var t = Ul();
      return e = { current: e }, t.memoizedState = e;
    }
    function cc(e, t, a, i) {
      var o = Ul();
      Xe.flags |= e, o.memoizedState = Hu(
        ui | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function Bl(e, t, a, i) {
      var o = Ht();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      el !== null && i !== null && ey(i, el.memoizedState.deps) ? o.memoizedState = Hu(t, f, a, i) : (Xe.flags |= e, o.memoizedState = Hu(
        ui | t,
        f,
        a,
        i
      ));
    }
    function Pc(e, t) {
      (Xe.mode & Ni) !== qe ? cc(276826112, An, e, t) : cc(8390656, An, e, t);
    }
    function Qp(e) {
      Xe.flags |= 4;
      var t = Xe.updateQueue;
      if (t === null)
        t = Gs(), Xe.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Vs(e) {
      var t = Ul(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((Et & ra) !== Ta)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function cf(e) {
      var t = Ht().memoizedState;
      return Qp({ ref: t, nextImpl: e }), function() {
        if ((Et & ra) !== Ta)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function Ca(e, t) {
      var a = 4194308;
      return (Xe.mode & Ni) !== qe && (a |= 134217728), cc(a, pu, e, t);
    }
    function rn(e, t) {
      if (typeof t == "function") {
        e = e();
        var a = t(e);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null)
        return t.hasOwnProperty("current") || console.error(
          "Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.",
          "an object with keys {" + Object.keys(t).join(", ") + "}"
        ), e = e(), t.current = e, function() {
          t.current = null;
        };
    }
    function Nu(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Xe.mode & Ni) !== qe && (i |= 134217728), cc(
        i,
        pu,
        rn.bind(null, t, e),
        a
      );
    }
    function of(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, Bl(
        4,
        pu,
        rn.bind(null, t, e),
        a
      );
    }
    function jd(e, t) {
      return Ul().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function lu(e, t) {
      var a = Ht();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && ey(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function Ua(e, t) {
      var a = Ul();
      t = t === void 0 ? null : t;
      var i = e();
      if (Qr) {
        ce(!0);
        try {
          e();
        } finally {
          ce(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function cl(e, t) {
      var a = Ht();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && ey(t, i[1]))
        return i[0];
      if (i = e(), Qr) {
        ce(!0);
        try {
          e();
        } finally {
          ce(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function ff(e, t) {
      var a = Ul();
      return Nt(a, e, t);
    }
    function xu(e, t) {
      var a = Ht();
      return Dl(
        a,
        el.memoizedState,
        e,
        t
      );
    }
    function Ke(e, t) {
      var a = Ht();
      return el === null ? Nt(a, e, t) : Dl(
        a,
        el.memoizedState,
        e,
        t
      );
    }
    function Nt(e, t, a) {
      return a === void 0 || (Co & 1073741824) !== 0 && (at & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = vf(), Xe.lanes |= e, us |= e, a);
    }
    function Dl(e, t, a, i) {
      return bn(a, t) ? a : um.current !== null ? (e = Nt(e, a, i), bn(e, t) || (ta = !0), e) : (Co & 42) === 0 || (Co & 1073741824) !== 0 && (at & 261930) === 0 ? (ta = !0, e.memoizedState = a) : (e = vf(), Xe.lanes |= e, us |= e, t);
    }
    function eo() {
      X.asyncTransitions--;
    }
    function to(e, t, a, i, o) {
      var f = Ct.p;
      Ct.p = f !== 0 && f < fa ? f : fa;
      var d = X.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), X.T = h, Ks(e, !1, t, a);
      try {
        var y = o(), p = X.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          X.asyncTransitions++, y.then(eo, eo);
          var R = Rd(
            y,
            i
          );
          lo(
            e,
            t,
            R,
            va(e)
          );
        } else
          lo(
            e,
            t,
            i,
            va(e)
          );
      } catch (_) {
        lo(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: _ },
          va(e)
        );
      } finally {
        Ct.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), X.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function Ti(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = Zs(e).queue;
      wp(e), to(
        e,
        o,
        t,
        ed,
        a === null ? J : function() {
          return sf(e), a(i);
        }
      );
    }
    function Zs(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: ed,
        baseState: ed,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: ed
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: fn,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function sf(e) {
      X.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = Zs(e);
      t.next === null && (t = e.alternate.memoizedState), lo(
        e,
        t.next.queue,
        {},
        va(e)
      );
    }
    function oc() {
      var e = Ud(!1);
      return e = to.bind(
        null,
        Xe,
        e.queue,
        !0,
        !1
      ), Ul().memoizedState = e, [!1, e];
    }
    function Vp() {
      var e = kc(fn)[0], t = Ht().memoizedState;
      return [
        typeof e == "boolean" ? e : ws(e),
        t
      ];
    }
    function ml() {
      var e = Wc(fn)[0], t = Ht().memoizedState;
      return [
        typeof e == "boolean" ? e : ws(e),
        t
      ];
    }
    function Ai() {
      return _t(hp);
    }
    function Js() {
      var e = Ul(), t = tl.identifierPrefix;
      if (mt) {
        var a = Oo, i = zo;
        a = (i & ~(1 << 32 - oa(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = mg++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = $E++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Bd() {
      return Ul().memoizedState = Zp.bind(
        null,
        Xe
      );
    }
    function Zp(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = va(a), o = jl(i), f = Mu(a, o, i);
            f !== null && (Ru(i, "refresh()", e), Ge(f, a, i), jn(f, a, i)), e = zd(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function tS(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = va(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      $l(e) ? bl(t, o) : (o = qc(e, t, o, i), o !== null && (Ru(i, "dispatch()", e), Ge(o, e, i), $s(o, t, i)));
    }
    function qd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = va(e), lo(e, t, a, i) && Ru(i, "setState()", e);
    }
    function lo(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($l(e)) bl(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = X.H;
          X.H = ji;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, bn(y, h))
              return $o(e, t, o, 0), tl === null && gd(), !1;
          } catch {
          } finally {
            X.H = d;
          }
        }
        if (a = qc(e, t, o, i), a !== null)
          return Ge(a, e, i), $s(a, t, i), !0;
      }
      return !1;
    }
    function Ks(e, t, a, i) {
      if (X.T === null && Yr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ky(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, $l(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = qc(
          e,
          a,
          i,
          2
        ), t !== null && (Ru(2, "setOptimistic()", e), Ge(t, e, 2));
    }
    function $l(e) {
      var t = e.alternate;
      return e === Xe || t !== null && t === Xe;
    }
    function bl(e, t) {
      om = hg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function $s(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, _c(e, a);
      }
    }
    function ao(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        xb.has(t) || (xb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function rf(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & Fa) {
        ce(!0);
        try {
          f = a(i, o);
        } finally {
          ce(!1);
        }
      }
      f === void 0 && (t = Qe(t) || "Component", Cb.has(t) || (Cb.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : et({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function Yd(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & Fa) {
          ce(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            ce(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          Qe(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ko(a, i) || !Ko(o, f) : !0;
    }
    function ju(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = re(e) || "Component", Ob.has(e) || (Ob.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), QS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Bu(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = et({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Gd(e) {
      bS(e), console.warn(
        `%s

%s
`,
        fm ? "An error occurred in the <" + fm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function wd(e) {
      var t = fm ? "The above error occurred in the <" + fm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((VS || "Anonymous") + ".");
      if (typeof e == "object" && e !== null && typeof e.environmentName == "string") {
        var i = e.environmentName;
        e = [
          `%o

%s

%s
`,
          e,
          t,
          a
        ].slice(0), typeof e[0] == "string" ? e.splice(
          0,
          1,
          p2 + " " + e[0],
          v2,
          Gg + i + Gg,
          g2
        ) : e.splice(
          0,
          0,
          p2,
          v2,
          Gg + i + Gg,
          g2
        ), e.unshift(console), i = yT.apply(console.error, e), i();
      } else
        console.error(
          `%o

%s

%s
`,
          e,
          t,
          a
        );
    }
    function cy(e) {
      bS(e);
    }
    function ks(e, t) {
      try {
        fm = t.source ? re(t.source) : null, VS = null;
        var a = t.value;
        if (X.actQueue !== null)
          X.thrownErrors.push(a);
        else {
          var i = e.onUncaughtError;
          i(a, { componentStack: t.stack });
        }
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function oy(e, t, a) {
      try {
        fm = a.source ? re(a.source) : null, VS = re(t);
        var i = e.onCaughtError;
        i(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (o) {
        setTimeout(function() {
          throw o;
        });
      }
    }
    function Xd(e, t, a) {
      return a = jl(a), a.tag = qS, a.payload = { element: null }, a.callback = function() {
        fe(t.source, ks, e, t);
      }, a;
    }
    function Ld(e) {
      return e = jl(e), e.tag = qS, e;
    }
    function Qd(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Yc(a), fe(
            i.source,
            oy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Yc(a), fe(
          i.source,
          oy,
          t,
          a,
          i
        ), typeof o != "function" && (cs === null ? cs = /* @__PURE__ */ new Set([this]) : cs.add(this)), VE(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          re(a) || "Unknown"
        );
      });
    }
    function fy(e, t, a, i, o) {
      if (a.flags |= 32768, ku && Tf(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && Fn(
          t,
          a,
          o,
          !0
        ), mt && (zc = !0), a = yu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return ni === null ? Sf() : a.alternate === null && Tl === xo && (Tl = vg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === sg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), fh(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === sg ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), fh(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return fh(e, i, o), Sf(), !1;
      }
      if (mt)
        return zc = !0, t = yu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== RS && _s(
          Oa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== RS && _s(
          Oa(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = Oa(i, a), o = Xd(
          e.stateNode,
          i,
          o
        ), xs(e, o), Tl !== as && (Tl = Vr)), !1;
      var f = Oa(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (np === null ? np = [f] : np.push(f), Tl !== as && (Tl = Vr), t === null) return !0;
      i = Oa(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = Xd(
              a.stateNode,
              i,
              e
            ), xs(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (cs === null || !cs.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = Ld(o), Qd(
                o,
                e,
                a,
                i
              ), xs(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function kl(e, t, a, i) {
      t.child = e === null ? mb(t, null, a, i) : Lr(
        t,
        e.child,
        a,
        i
      );
    }
    function Jp(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return Fi(t), i = ty(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = $c(), e !== null && !ta ? (Ys(e, t, o), au(e, t, o)) : (mt && h && Ed(t), t.flags |= 1, kl(e, t, i, o), t.child);
    }
    function sy(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Lm(f) && f.defaultProps === void 0 && a.compare === null ? (a = Ji(f), t.tag = 15, t.type = a, df(t, f), ry(
          e,
          t,
          a,
          i,
          o
        )) : (e = Gc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !$d(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Ko, a(d, i) && e.ref === t.ref)
          return au(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Ou(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function ry(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Ko(f, i) && e.ref === t.ref && t.type === e.type)
          if (ta = !1, t.pendingProps = i = f, $d(e, o))
            (e.flags & 131072) !== 0 && (ta = !0);
          else
            return t.lanes = e.lanes, au(e, t, o);
      }
      return yy(
        e,
        t,
        a,
        i,
        o
      );
    }
    function dy(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: N0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), i.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (f = f !== null ? f.baseLanes | a : a, e !== null) {
            for (i = t.child = e.child, o = 0; i !== null; )
              o = o | i.lanes | i.childLanes, i = i.sibling;
            i = o & ~f;
          } else i = 0, t.child = null;
          return hy(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Po(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? Md(t, f) : vi(t), Cd(t);
        else
          return i = t.lanes = 536870912, hy(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Po(t, f.cachePool), Md(t, f), Uu(t), t.memoizedState = null) : (e !== null && Po(t, null), vi(t), Uu(t));
      return kl(e, t, o, a), t.child;
    }
    function no(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: N0,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function hy(e, t, a, i, o) {
      var f = pi();
      return f = f === null ? null : {
        parent: Il._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Po(t, null), vi(t), Cd(t), e !== null && Fn(e, t, i, !0), t.childLanes = o, null;
    }
    function Ws(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = Is(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function my(e, t, a) {
      return Lr(t, e.child, null, a), e = Ws(
        t,
        t.pendingProps
      ), e.flags |= 2, Kl(t), t.memoizedState = null, e;
    }
    function Kp(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (mt) {
          if (i.mode === "hidden")
            return e = Ws(t, i), t.lanes = 536870912, no(null, e);
          if (tu(t), (e = rl) ? (a = jt(
            e,
            li
          ), a = a !== null && a.data === Wr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: qp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Vm(a), i.return = t, t.child = i, wa = t, rl = null)) : a = null, a === null)
            throw pa(t, e), Cn(t);
          return t.lanes = 536870912, null;
        }
        return Ws(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (tu(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = my(
              e,
              t,
              a
            );
          else if (t.memoizedState !== null)
            t.child = e.child, t.flags |= 128, t = null;
          else
            throw Error(
              "Client rendering an Activity suspended it again. This is a bug in React."
            );
        else if (Gp(), (a & 536870912) !== 0 && gf(t), ta || Fn(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, ta || o) {
          if (i = tl, i !== null && (d = fi(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, ya(e, d), Ge(i, e, d), ZS;
          Sf(), t = my(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, rl = pn(
            d.nextSibling
          ), wa = t, mt = !0, Ff = null, zc = !1, mu = null, li = !1, e !== null && Yp(t, e), t = Ws(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && gf(t), e = Ou(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Fs(e, t) {
      var a = t.ref;
      if (a === null)
        e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object")
          throw Error(
            "Expected ref to be a function, an object returned by React.createRef(), or undefined/null."
          );
        (e === null || e.ref !== a) && (t.flags |= 4194816);
      }
    }
    function yy(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = Qe(a) || "Unknown";
        jb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), jb[f] = !0);
      }
      return t.mode & Fa && xi.recordLegacyContextWarning(
        t,
        null
      ), e === null && (df(t, t.type), a.contextTypes && (f = Qe(a) || "Unknown", qb[f] || (qb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), Fi(t), a = ty(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = $c(), e !== null && !ta ? (Ys(e, t, o), au(e, t, o)) : (mt && i && Ed(t), t.flags |= 1, kl(e, t, a, o), t.child);
    }
    function py(e, t, a, i, o, f) {
      return Fi(t), Ho = -1, F0 = e !== null && e.type !== t.type, t.updateQueue = null, a = Bs(
        t,
        i,
        a,
        o
      ), Rl(e, t), i = $c(), e !== null && !ta ? (Ys(e, t, f), au(e, t, f)) : (mt && i && Ed(t), t.flags |= 1, kl(e, t, a, f), t.child);
    }
    function uo(e, t, a, i, o) {
      switch ($e(t)) {
        case !1:
          var f = t.stateNode, d = new t.type(
            t.memoizedProps,
            f.context
          ).state;
          f.updater.enqueueSetState(f, d, null);
          break;
        case !0:
          t.flags |= 128, t.flags |= 65536, f = Error("Simulated error coming from DevTools");
          var h = o & -o;
          if (t.lanes |= h, d = tl, d === null)
            throw Error(
              "Expected a work-in-progress root. This is a bug in React. Please file an issue."
            );
          h = Ld(h), Qd(
            h,
            d,
            t,
            Oa(f, t)
          ), xs(t, h);
      }
      if (Fi(t), t.stateNode === null) {
        if (d = Wf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== ru) && !Nb.has(a) && (Nb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Uh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          Qe(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = _t(f)), f = new a(i, d), t.mode & Fa) {
          ce(!0);
          try {
            f = new a(i, d);
          } finally {
            ce(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = QS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = zb, typeof a.getDerivedStateFromProps == "function" && d === null && (d = Qe(a) || "Component", Rb.has(d) || (Rb.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = Qe(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            _b.has(f) || (_b.add(f), console.error(
              `Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://react.dev/link/unsafe-component-lifecycles`,
              f,
              p,
              d !== null ? `
  ` + d : "",
              h !== null ? `
  ` + h : "",
              y !== null ? `
  ` + y : ""
            ));
          }
        }
        f = t.stateNode, d = Qe(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
          "No `render` method found on the %s instance: did you accidentally return an object from the constructor?",
          d
        ) : console.error(
          "No `render` method found on the %s instance: you may have forgotten to define `render`.",
          d
        )), !f.getInitialState || f.getInitialState.isReactClassApproved || f.state || console.error(
          "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",
          d
        ), f.getDefaultProps && !f.getDefaultProps.isReactClassApproved && console.error(
          "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",
          d
        ), f.contextType && console.error(
          "contextType was defined as an instance property on %s. Use a static property to define contextType instead.",
          d
        ), a.childContextTypes && !Hb.has(a) && (Hb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !Ub.has(a) && (Ub.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          Qe(a) || "A pure component"
        ), typeof f.componentDidUnmount == "function" && console.error(
          "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?",
          d
        ), typeof f.componentDidReceiveProps == "function" && console.error(
          "%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().",
          d
        ), typeof f.componentWillRecieveProps == "function" && console.error(
          "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
          d
        ), typeof f.UNSAFE_componentWillRecieveProps == "function" && console.error(
          "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
          d
        ), h = f.props !== i, f.props !== void 0 && h && console.error(
          "When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.",
          d
        ), f.defaultProps && console.error(
          "Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.",
          d,
          d
        ), typeof f.getSnapshotBeforeUpdate != "function" || typeof f.componentDidUpdate == "function" || Db.has(a) || (Db.add(a), console.error(
          "%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.",
          Qe(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || Nl(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, dt(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? _t(d) : Wf, f.state === i && (d = Qe(a) || "Component", Mb.has(d) || (Mb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & Fa && xi.recordLegacyContextWarning(
          t,
          f
        ), xi.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (rf(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          re(t) || "Component"
        ), QS.enqueueReplaceState(
          f,
          f.state,
          null
        )), Cu(t, i, f, o), tf(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ni) !== qe && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var R = t.memoizedProps;
        h = Bu(a, R), f.props = h;
        var _ = f.context;
        y = a.contextType, d = Wf, typeof y == "object" && y !== null && (d = _t(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", R = t.pendingProps !== R, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (R || _ !== d) && ju(
          t,
          f,
          i,
          d
        ), ls = !1;
        var E = t.memoizedState;
        f.state = E, Cu(t, i, f, o), tf(), _ = t.memoizedState, R || E !== _ || ls ? (typeof p == "function" && (rf(
          t,
          a,
          p,
          i
        ), _ = t.memoizedState), (h = ls || Yd(
          t,
          a,
          h,
          i,
          E,
          _,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ni) !== qe && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ni) !== qe && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = _), f.props = i, f.state = _, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Ni) !== qe && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, _u(e, t), d = t.memoizedProps, y = Bu(a, d), f.props = y, p = t.pendingProps, E = f.context, _ = a.contextType, h = Wf, typeof _ == "object" && _ !== null && (h = _t(_)), R = a.getDerivedStateFromProps, (_ = typeof R == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || E !== h) && ju(
          t,
          f,
          i,
          h
        ), ls = !1, E = t.memoizedState, f.state = E, Cu(t, i, f, o), tf();
        var q = t.memoizedState;
        d !== p || E !== q || ls || e !== null && e.dependencies !== null && Fo(e.dependencies) ? (typeof R == "function" && (rf(
          t,
          a,
          R,
          i
        ), q = t.memoizedState), (y = ls || Yd(
          t,
          a,
          y,
          i,
          E,
          q,
          h
        ) || e !== null && e.dependencies !== null && Fo(e.dependencies)) ? (_ || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, q, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          q,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && E === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Fs(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, ul(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, En = -1;
        else if (a = eb(h), t.mode & Fa) {
          ce(!0);
          try {
            eb(h);
          } finally {
            ce(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Lr(
          t,
          e.child,
          null,
          o
        ), t.child = Lr(
          t,
          null,
          a,
          o
        )) : kl(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = au(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (sm || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        re(t) || "a component"
      ), sm = !0), e;
    }
    function vy(e, t, a, i) {
      return ki(), t.flags |= 256, kl(e, t, a, i), t.child;
    }
    function df(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = Qe(t) || "Unknown", Yb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Yb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = Qe(t) || "Unknown", Bb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Bb[t] = !0));
    }
    function hf(e) {
      return { baseLanes: e, cachePool: Wm() };
    }
    function Vd(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Qn), e;
    }
    function Zd(e, t, a) {
      var i, o = t.pendingProps;
      de(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (wl.current & k0) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (mt) {
          if (f ? Ma(t) : Uu(t), (e = rl) ? (a = jt(
            e,
            li
          ), a = a !== null && a.data !== Wr ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: qp(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Vm(a), i.return = t, t.child = i, wa = t, rl = null)) : a = null, a === null)
            throw pa(t, e), Cn(t);
          return Wy(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          Uu(t);
          var y = t.mode;
          return h = Is(
            { mode: "hidden", children: h },
            y
          ), o = wc(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = hf(a), o.childLanes = Vd(
            e,
            i,
            a
          ), t.memoizedState = JS, no(
            null,
            o
          );
        }
        return Ma(t), gy(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var R = p.dehydrated;
        if (R !== null) {
          if (d)
            t.flags & 256 ? (Ma(t), t.flags &= -257, t = Jd(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (Uu(t), t.child = e.child, t.flags |= 128, t = null) : (Uu(t), h = o.fallback, y = t.mode, o = Is(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = wc(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Lr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = hf(a), o.childLanes = Vd(
              e,
              i,
              a
            ), t.memoizedState = JS, t = no(
              null,
              o
            ));
          else if (Ma(t), Gp(), (a & 536870912) !== 0 && gf(t), Wy(
            R
          )) {
            if (i = R.nextSibling && R.nextSibling.dataset, i) {
              h = i.dgst;
              var _ = i.msg;
              y = i.stck;
              var E = i.cstck;
            }
            f = _, i = h, o = y, R = E, h = f, y = R, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && OS.set(
              h,
              o
            ), _s(o), t = Jd(
              e,
              t,
              a
            );
          } else if (ta || Fn(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, ta || i) {
            if (i = tl, i !== null && (o = fi(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, ya(
                e,
                o
              ), Ge(
                i,
                e,
                o
              ), ZS;
            pr(
              R
            ) || Sf(), t = Jd(
              e,
              t,
              a
            );
          } else
            pr(
              R
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, rl = pn(
              R.nextSibling
            ), wa = t, mt = !0, Ff = null, zc = !1, mu = null, li = !1, e !== null && Yp(t, e), t = gy(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (Uu(t), h = o.fallback, y = t.mode, E = e.child, R = E.sibling, o = Ou(
        E,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = E.subtreeFlags & 65011712, R !== null ? h = Ou(
        R,
        h
      ) : (h = wc(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, no(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = hf(a) : (y = h.cachePool, y !== null ? (E = Il._currentValue, y = y.parent !== E ? { parent: E, pool: E } : y) : y = Wm(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Vd(
        e,
        i,
        a
      ), t.memoizedState = JS, no(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && gf(t), Ma(t), a = e.child, e = a.sibling, a = Ou(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function gy(e, t) {
      return t = Is(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function Is(e, t) {
      return e = H(22, e, null, t), e.lanes = 0, e;
    }
    function Jd(e, t, a) {
      return Lr(t, e.child, null, a), e = gy(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Sy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ad(
        e.return,
        t,
        a
      );
    }
    function Kd(e, t, a, i, o, f) {
      var d = e.memoizedState;
      d === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: o,
        treeForkCount: f
      } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = i, d.tail = a, d.tailMode = o, d.treeForkCount = f);
    }
    function by(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = wl.current;
      if ((i = (h & k0) !== 0) ? (h = h & im | k0, t.flags |= 128) : h &= im, Be(wl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !Gb[h])
        if (Gb[h] = !0, o == null)
          console.error(
            'The default for the <SuspenseList revealOrder="..."> prop is changing. To be future compatible you must explictly specify either "independent" (the current default), "together", "forwards" or "legacy_unstable-backwards".'
          );
        else if (o === "backwards")
          console.error(
            'The rendering order of <SuspenseList revealOrder="backwards"> is changing. To be future compatible you must specify revealOrder="legacy_unstable-backwards" instead.'
          );
        else if (typeof o == "string")
          switch (o.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards":
            case "independent":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.',
                o,
                o.toLowerCase()
              );
              break;
            case "forward":
            case "backward":
              console.error(
                '"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.',
                o,
                o.toLowerCase()
              );
              break;
            default:
              console.error(
                '"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
                o
              );
          }
        else
          console.error(
            '%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "independent", "together", "forwards" or "backwards"?',
            o
          );
      h = f ?? "null", pg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (pg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (pg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (pg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (Nl(d)) {
          for (h = 0; h < d.length; h++)
            if (!Ft(
              d[h],
              h
            ))
              break e;
        } else if (h = De(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!Ft(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (kl(e, t, d, a), mt ? ($i(), d = x0) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Sy(e, a, t);
          else if (e.tag === 19)
            Sy(e, a, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      switch (o) {
        case "forwards":
          for (a = t.child, o = null; a !== null; )
            e = a.alternate, e !== null && Kc(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), Kd(
            t,
            !1,
            o,
            a,
            f,
            d
          );
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, o = t.child, t.child = null; o !== null; ) {
            if (e = o.alternate, e !== null && Kc(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          Kd(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          Kd(
            t,
            !1,
            null,
            null,
            void 0,
            d
          );
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function au(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), En = -1, us |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (Fn(
            e,
            t,
            a,
            !1
          ), (a & t.childLanes) === 0)
            return null;
        } else return null;
      if (e !== null && t.child !== e.child)
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        for (e = t.child, a = Ou(e, e.pendingProps), t.child = a, a.return = t; e.sibling !== null; )
          e = e.sibling, a = a.sibling = Ou(e, e.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function $d(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Fo(e)));
    }
    function $p(e, t, a) {
      switch (t.tag) {
        case 3:
          Rt(
            t,
            t.stateNode.containerInfo
          ), Un(
            t,
            Il,
            e.memoizedState.cache
          ), ki();
          break;
        case 27:
        case 5:
          ee(t);
          break;
        case 4:
          Rt(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Un(
            t,
            t.type,
            t.memoizedProps.value
          );
          break;
        case 12:
          (a & t.childLanes) !== 0 && (t.flags |= 4), t.flags |= 2048;
          var i = t.stateNode;
          i.effectDuration = -0, i.passiveEffectDuration = -0;
          break;
        case 31:
          if (t.memoizedState !== null)
            return t.flags |= 128, tu(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (Ma(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? Zd(
              e,
              t,
              a
            ) : (Ma(t), e = au(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          Ma(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (Fn(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return by(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Be(
            wl,
            wl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, dy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          Un(
            t,
            Il,
            e.memoizedState.cache
          );
      }
      return au(e, t, a);
    }
    function Ps(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Gc(
          t.type,
          t.key,
          t.pendingProps,
          t._debugOwner || null,
          t.mode,
          t.lanes
        ), a._debugStack = t._debugStack, a._debugTask = t._debugTask;
        var i = t.return;
        if (i === null) throw Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, a._debugInfo = t._debugInfo, t === i.child)
          i.child = a;
        else {
          var o = i.child;
          if (o === null)
            throw Error("Expected parent to have a child.");
          for (; o.sibling !== t; )
            if (o = o.sibling, o === null)
              throw Error("Expected to find the previous sibling.");
          o.sibling = a;
        }
        return t = i.deletions, t === null ? (i.deletions = [e], i.flags |= 16) : t.push(e), a.flags |= 2, a;
      }
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || t.type !== e.type)
          ta = !0;
        else {
          if (!$d(e, a) && (t.flags & 128) === 0)
            return ta = !1, $p(
              e,
              t,
              a
            );
          ta = (e.flags & 131072) !== 0;
        }
      else
        ta = !1, (i = mt) && ($i(), i = (t.flags & 1048576) !== 0), i && (i = t.index, $i(), Zm(t, x0, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = cn(t.elementType), t.type = e, typeof e == "function")
            Lm(e) ? (i = Bu(
              e,
              i
            ), t.tag = 1, t.type = e = Ji(e), t = uo(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, df(t, e), t.type = e = Ji(e), t = yy(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Bf) {
                t.tag = 11, t.type = e = Sd(e), t = Jp(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === Rr) {
                t.tag = 14, t = sy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === ga && (t = " Did you wrap a component in React.lazy() more than once?"), a = Qe(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return yy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Bu(
            i,
            t.pendingProps
          ), uo(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (Rt(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, _u(e, t), Cu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Un(t, Il, i), i !== f.cache && hi(
              t,
              [Il],
              a,
              !0
            ), tf(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = vy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = Oa(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), _s(o), t = vy(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, rl = pn(e.firstChild), wa = t, mt = !0, Ff = null, zc = !1, mu = null, li = !0, a = mb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (ki(), i === o) {
                t = au(
                  e,
                  t,
                  a
                );
                break e;
              }
              kl(
                e,
                t,
                i,
                a
              );
            }
            t = t.child;
          }
          return t;
        case 26:
          return Fs(e, t), e === null ? (a = e0(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : mt || (a = t.type, e = t.pendingProps, i = wt(
            vn.current
          ), i = mr(
            i
          ).createElement(a), i[fl] = t, i[Ga] = e, ol(i, a, e), ve(i), t.stateNode = i) : t.memoizedState = e0(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return ee(t), e === null && mt && (i = wt(vn.current), o = Q(), i = t.stateNode = Mi(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), zc || (o = $a(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Xc(t, 0).serverProps = o)), wa = t, li = !0, o = rl, vc(t.type) ? (y1 = o, rl = pn(
            i.firstChild
          )) : rl = o), kl(
            e,
            t,
            t.pendingProps.children,
            a
          ), Fs(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && mt && (f = Q(), i = gs(
            t.type,
            f.ancestorInfo
          ), o = rl, (d = !o) || (d = zv(
            o,
            t.type,
            t.pendingProps,
            li
          ), d !== null ? (t.stateNode = d, zc || (f = $a(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Xc(t, 0).serverProps = f)), wa = t, rl = pn(
            d.firstChild
          ), li = !1, f = !0) : f = !1, d = !f), d && (i && pa(t, o), Cn(t))), ee(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Df(o, f) ? i = null : d !== null && Df(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = ty(
            e,
            t,
            qs,
            null,
            null,
            a
          ), hp._currentValue = o), Fs(e, t), kl(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && mt && (a = t.pendingProps, e = Q(), i = e.ancestorInfo.current, a = i != null ? Ss(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = rl, (i = !e) || (i = Ov(
            e,
            t.pendingProps,
            li
          ), i !== null ? (t.stateNode = i, wa = t, rl = null, i = !0) : i = !1, i = !i), i && (a && pa(t, e), Cn(t))), null;
        case 13:
          return Zd(e, t, a);
        case 4:
          return Rt(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Lr(
            t,
            null,
            i,
            a
          ) : kl(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Jp(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return kl(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return kl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, kl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || wb || (wb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Un(t, i, f), kl(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), Fi(t), o = _t(o), i = NS(
            i,
            o,
            void 0
          ), t.flags |= 1, kl(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return ry(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return by(
            e,
            t,
            a
          );
        case 31:
          return Kp(e, t, a);
        case 22:
          return dy(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return Fi(t), i = _t(Il), e === null ? (o = pi(), o === null && (o = tl, f = zd(), o.pooledCache = f, Qc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, dt(t), Un(t, Il, o)) : ((e.lanes & a) !== 0 && (_u(e, t), Cu(t, null, null, a), tf()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Un(t, Il, i)) : (i = f.cache, Un(t, Il, i), i !== o.cache && hi(
            t,
            [Il],
            a,
            !0
          ))), kl(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function qu(e) {
      e.flags |= 4;
    }
    function kd(e, t, a, i, o) {
      if ((t = (e.mode & GE) !== qe) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (Yy()) e.flags |= 8192;
          else
            throw Xr = sg, jS;
      } else e.flags &= -16777217;
    }
    function kp(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & ci) !== Pr)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !ft(t))
        if (Yy()) e.flags |= 8192;
        else
          throw Xr = sg, jS;
    }
    function mf(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? On() : 536870912, e.lanes |= t, Kr |= t);
    }
    function yf(e, t) {
      if (!mt)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var a = null; t !== null; )
              t.alternate !== null && (a = t), t = t.sibling;
            a === null ? e.tail = null : a.sibling = null;
            break;
          case "collapsed":
            a = e.tail;
            for (var i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
        }
    }
    function Lt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & tt) !== qe) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & tt) !== qe) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function Ey(e, t, a) {
      var i = t.pendingProps;
      switch (Td(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Lt(t), null;
        case 1:
          return Lt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Wn(Il, t), z(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Lc(t) ? (Wi(), qu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ds())), Lt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (qu(t), f !== null ? (Lt(t), kp(
            t,
            f
          )) : (Lt(t), kd(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (qu(t), Lt(t), kp(
            t,
            f
          )) : (Lt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && qu(t), Lt(t), kd(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (pe(t), a = wt(vn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && qu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Lt(t), null;
            }
            e = Q(), Lc(t) ? Jm(t) : (e = Mi(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, qu(t));
          }
          return Lt(t), null;
        case 5:
          if (pe(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && qu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return Lt(t), null;
            }
            var d = Q();
            if (Lc(t))
              Jm(t);
            else {
              switch (f = wt(vn.current), gs(o, d.ancestorInfo), d = d.context, f = mr(f), d) {
                case gm:
                  f = f.createElementNS(
                    Ie,
                    o
                  );
                  break;
                case Bg:
                  f = f.createElementNS(
                    Ze,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        Ie,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        Ze,
                        o
                      );
                      break;
                    case "script":
                      f = f.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                        f.firstChild
                      );
                      break;
                    case "select":
                      f = typeof i.is == "string" ? f.createElement("select", {
                        is: i.is
                      }) : f.createElement("select"), i.multiple ? f.multiple = !0 : i.size && (f.size = i.size);
                      break;
                    default:
                      f = typeof i.is == "string" ? f.createElement(o, {
                        is: i.is
                      }) : f.createElement(o), o.indexOf("-") === -1 && (o !== o.toLowerCase() && console.error(
                        "<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.",
                        o
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || gn.call(s2, o) || (s2[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[fl] = t, f[Ga] = i;
              e: for (d = t.child; d !== null; ) {
                if (d.tag === 5 || d.tag === 6)
                  f.appendChild(d.stateNode);
                else if (d.tag !== 4 && d.tag !== 27 && d.child !== null) {
                  d.child.return = d, d = d.child;
                  continue;
                }
                if (d === t) break e;
                for (; d.sibling === null; ) {
                  if (d.return === null || d.return === t)
                    break e;
                  d = d.return;
                }
                d.sibling.return = d.return, d = d.sibling;
              }
              t.stateNode = f;
              e: switch (ol(f, o, i), o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  i = !!i.autoFocus;
                  break e;
                case "img":
                  i = !0;
                  break e;
                default:
                  i = !1;
              }
              i && qu(t);
            }
          }
          return Lt(t), kd(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && qu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = wt(vn.current), a = Q(), Lc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !zc, i = null, f = wa, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = _v(
                      e,
                      a,
                      i
                    ), o !== null && (Xc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = _v(
                      e,
                      a,
                      i
                    ), o !== null && (Xc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[fl] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || $y(e.nodeValue, a)), e || Cn(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && Ss(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = mr(e).createTextNode(
                i
              ), e[fl] = t, t.stateNode = e;
          }
          return Lt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = Lc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[fl] = t, Lt(t), (t.mode & tt) !== qe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Wi(), ki(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, Lt(t), (t.mode & tt) !== qe && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = Ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (Kl(t), t) : (Kl(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return Lt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = Lc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[fl] = t, Lt(t), (t.mode & tt) !== qe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Wi(), ki(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, Lt(t), (t.mode & tt) !== qe && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = Ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (Kl(t), t) : (Kl(t), null);
          }
          return Kl(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & tt) !== qe && Zc(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), mf(t, t.updateQueue), Lt(t), (t.mode & tt) !== qe && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return z(t), e === null && yc(
            t.stateNode.containerInfo
          ), Lt(t), null;
        case 10:
          return Wn(t.type, t), Lt(t), null;
        case 19:
          if (he(wl, t), i = t.memoizedState, i === null) return Lt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) yf(i, !1);
            else {
              if (Tl !== xo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Kc(e), f !== null) {
                    for (t.flags |= 128, yf(i, !1), e = f.updateQueue, t.updateQueue = e, mf(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Qm(a, e), a = a.sibling;
                    return Be(
                      wl,
                      wl.current & im | k0,
                      t
                    ), mt && kn(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Fl() > Ag && (t.flags |= 128, o = !0, yf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Kc(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, mf(t, e), yf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !mt)
                  return Lt(t), null;
              } else
                2 * Fl() - i.renderingStartTime > Ag && a !== 536870912 && (t.flags |= 128, o = !0, yf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Fl(), e.sibling = null, a = wl.current, a = o ? a & im | k0 : a & im, Be(wl, a, t), mt && kn(t, i.treeForkCount), e) : (Lt(t), null);
        case 22:
        case 23:
          return Kl(t), eu(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (Lt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Lt(t), a = t.updateQueue, a !== null && mf(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && he(Gr, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Wn(Il, t), Lt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function Wp(e, t) {
      switch (Td(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & tt) !== qe && Zc(t), t) : null;
        case 3:
          return Wn(Il, t), z(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return pe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (Kl(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ki();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & tt) !== qe && Zc(t), t) : null;
        case 13:
          if (Kl(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            ki();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & tt) !== qe && Zc(t), t) : null;
        case 19:
          return he(wl, t), null;
        case 4:
          return z(t), null;
        case 10:
          return Wn(t.type, t), null;
        case 22:
        case 23:
          return Kl(t), eu(t), e !== null && he(Gr, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & tt) !== qe && Zc(t), t) : null;
        case 24:
          return Wn(Il, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function Ty(e, t) {
      switch (Td(t), t.tag) {
        case 3:
          Wn(Il, t), z(t);
          break;
        case 26:
        case 27:
        case 5:
          pe(t);
          break;
        case 4:
          z(t);
          break;
        case 31:
          t.memoizedState !== null && Kl(t);
          break;
        case 13:
          Kl(t);
          break;
        case 19:
          he(wl, t);
          break;
        case 10:
          Wn(t.type, t);
          break;
        case 22:
        case 23:
          Kl(t), eu(t), e !== null && he(Gr, t);
          break;
        case 24:
          Wn(Il, t);
      }
    }
    function Yu(e) {
      return (e.mode & tt) !== qe;
    }
    function Fp(e, t) {
      Yu(e) ? (gl(), zi(t, e), Da()) : zi(t, e);
    }
    function Wd(e, t, a) {
      Yu(e) ? (gl(), fc(
        a,
        e,
        t
      ), Da()) : fc(
        a,
        e,
        t
      );
    }
    function zi(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & Tn) !== dg && (ym = !0), i = fe(
              t,
              ZE,
              a
            ), (e & Tn) !== dg && (ym = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & pu) !== 0 ? "useLayoutEffect" : (a.tag & Tn) !== 0 ? "useInsertionEffect" : "useEffect";
              var d = void 0;
              d = i === null ? " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof i.then == "function" ? `

It looks like you wrote ` + f + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + f + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, fe(
                t,
                function(h, y) {
                  console.error(
                    "%s must not return anything besides a function, which is used for clean-up.%s",
                    h,
                    y
                  );
                },
                f,
                d
              );
            }
            a = a.next;
          } while (a !== o);
        }
      } catch (h) {
        Fe(t, t.return, h);
      }
    }
    function fc(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Tn) !== dg && (ym = !0), o = t, fe(
                o,
                JE,
                o,
                a,
                h
              ), (e & Tn) !== dg && (ym = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Fe(t, t.return, y);
      }
    }
    function er(e, t) {
      Yu(e) ? (gl(), zi(t, e), Da()) : zi(t, e);
    }
    function Fd(e, t, a) {
      Yu(e) ? (gl(), fc(
        a,
        e,
        t
      ), Da()) : fc(
        a,
        e,
        t
      );
    }
    function Ay(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || sm || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          re(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          re(e) || "instance"
        ));
        try {
          fe(
            e,
            lf,
            t,
            a
          );
        } catch (i) {
          Fe(e, e.return, i);
        }
      }
    }
    function tr(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Ip(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || sm || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        re(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        re(e) || "instance"
      ));
      try {
        var o = Bu(
          e.type,
          a
        ), f = fe(
          e,
          tr,
          t,
          o,
          i
        );
        a = Xb, f !== void 0 || a.has(e.type) || (a.add(e.type), fe(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            re(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Fe(e, e.return, d);
      }
    }
    function Id(e, t, a) {
      a.props = Bu(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Yu(e) ? (gl(), fe(
        e,
        ib,
        e,
        t,
        a
      ), Da()) : fe(
        e,
        ib,
        e,
        t,
        a
      );
    }
    function Pp(e) {
      var t = e.ref;
      if (t !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        if (typeof t == "function")
          if (Yu(e))
            try {
              gl(), e.refCleanup = t(a);
            } finally {
              Da();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            re(e)
          ), t.current = a;
      }
    }
    function io(e, t) {
      try {
        fe(e, Pp, e);
      } catch (a) {
        Fe(e, t, a);
      }
    }
    function Bn(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Yu(e))
              try {
                gl(), fe(e, i);
              } finally {
                Da(e);
              }
            else fe(e, i);
          } catch (o) {
            Fe(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Yu(e))
              try {
                gl(), fe(e, a, null);
              } finally {
                Da(e);
              }
            else fe(e, a, null);
          } catch (o) {
            Fe(e, t, o);
          }
        else a.current = null;
    }
    function zy(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", ig && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function ev(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", ig && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function sc(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        fe(
          e,
          hv,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Fe(e, e.return, o);
      }
    }
    function Pd(e, t, a) {
      try {
        fe(
          e,
          Sh,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Fe(e, e.return, i);
      }
    }
    function Oy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && vc(e.type) || e.tag === 4;
    }
    function eh(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Oy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && vc(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function pf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (yv(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (yv(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = _n));
      else if (i !== 4 && (i === 27 && vc(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (pf(e, t, a), e = e.sibling; e !== null; )
          pf(e, t, a), e = e.sibling;
    }
    function lr(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && vc(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (lr(e, t, a), e = e.sibling; e !== null; )
          lr(e, t, a), e = e.sibling;
    }
    function Ry(e) {
      for (var t, a = e.return; a !== null; ) {
        if (Oy(a)) {
          t = a;
          break;
        }
        a = a.return;
      }
      if (t == null)
        throw Error(
          "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
        );
      switch (t.tag) {
        case 27:
          t = t.stateNode, a = eh(e), lr(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (bh(a), t.flags &= -33), t = eh(e), lr(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = eh(e), pf(
            e,
            a,
            t
          );
          break;
        default:
          throw Error(
            "Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue."
          );
      }
    }
    function Dy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        fe(
          e,
          Ju,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Fe(e, e.return, i);
      }
    }
    function _y(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function lS(e, t) {
      if (e = e.containerInfo, d1 = wg, e = yd(e), jm(e)) {
        if ("selectionStart" in e)
          var a = {
            start: e.selectionStart,
            end: e.selectionEnd
          };
        else
          e: {
            a = (a = e.ownerDocument) && a.defaultView || window;
            var i = a.getSelection && a.getSelection();
            if (i && i.rangeCount !== 0) {
              a = i.anchorNode;
              var o = i.anchorOffset, f = i.focusNode;
              i = i.focusOffset;
              try {
                a.nodeType, f.nodeType;
              } catch {
                a = null;
                break e;
              }
              var d = 0, h = -1, y = -1, p = 0, R = 0, _ = e, E = null;
              t: for (; ; ) {
                for (var q; _ !== a || o !== 0 && _.nodeType !== 3 || (h = d + o), _ !== f || i !== 0 && _.nodeType !== 3 || (y = d + i), _.nodeType === 3 && (d += _.nodeValue.length), (q = _.firstChild) !== null; )
                  E = _, _ = q;
                for (; ; ) {
                  if (_ === e) break t;
                  if (E === a && ++p === o && (h = d), E === f && ++R === i && (y = d), (q = _.nextSibling) !== null) break;
                  _ = E, E = _.parentNode;
                }
                _ = q;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (h1 = {
        focusedElem: e,
        selectionRange: a
      }, wg = !1, Ea = t; Ea !== null; )
        if (t = Ea, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, Ea = e;
        else
          for (; Ea !== null; ) {
            switch (e = t = Ea, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Ip(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Mf(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Mf(e);
                        break;
                      default:
                        e.textContent = "";
                    }
                }
                break;
              case 5:
              case 26:
              case 27:
              case 6:
              case 4:
              case 17:
                break;
              default:
                if ((o & 1024) !== 0)
                  throw Error(
                    "This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue."
                  );
            }
            if (e = t.sibling, e !== null) {
              e.return = t.return, Ea = e;
              break;
            }
            Ea = t.return;
          }
    }
    function th(e, t, a) {
      var i = il(), o = Hn(), f = nn(), d = Nn(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          dn(e, a), h & 4 && Fp(a, pu | ui);
          break;
        case 1:
          if (dn(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), Yu(a) ? (gl(), fe(
                a,
                xS,
                a,
                e
              ), Da()) : fe(
                a,
                xS,
                a,
                e
              );
            else {
              var y = Bu(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || sm || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                re(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                re(a) || "instance"
              )), Yu(a) ? (gl(), fe(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Da()) : fe(
                a,
                ab,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && Ay(a), h & 512 && io(a, a.return);
          break;
        case 3:
          if (t = Du(), dn(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
            if (y = null, a.child !== null)
              switch (a.child.tag) {
                case 27:
                case 5:
                  y = a.child.stateNode;
                  break;
                case 1:
                  y = a.child.stateNode;
              }
            try {
              fe(
                a,
                lf,
                h,
                y
              );
            } catch (R) {
              Fe(a, a.return, R);
            }
          }
          e.effectDuration += Io(t);
          break;
        case 27:
          t === null && h & 4 && Dy(a);
        case 26:
        case 5:
          if (dn(e, a), t === null) {
            if (h & 4) sc(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                fe(
                  a,
                  mv,
                  y,
                  e,
                  t,
                  a
                );
              } catch (R) {
                Fe(
                  a,
                  a.return,
                  R
                );
              }
            }
          }
          h & 512 && io(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = Du(), dn(e, a), e = a.stateNode, e.effectDuration += Ra(h);
            try {
              fe(
                a,
                zy,
                a,
                t,
                If,
                e.effectDuration
              );
            } catch (R) {
              Fe(a, a.return, R);
            }
          } else dn(e, a);
          break;
        case 31:
          dn(e, a), h & 4 && Cy(e, a);
          break;
        case 13:
          dn(e, a), h & 4 && Uy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = Ri.bind(
            null,
            a
          ), Rv(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || No, !h) {
            t = t !== null && t.memoizedState !== null || la, y = No;
            var p = la;
            No = h, (la = t) && !p ? (nu(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & tt) !== qe && 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && pd(
              a,
              Me,
              Ne
            )) : dn(e, a), No = y, la = p;
          }
          break;
        case 30:
          break;
        default:
          dn(e, a);
      }
      (a.mode & tt) !== qe && 0 <= Me && 0 <= Ne && ((Cl || 0.05 < El) && $n(
        a,
        Me,
        Ne,
        El,
        vl
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < Ne - Me && (_y(
        a.return.alternate,
        a.return
      ) || Mn(
        a,
        Me,
        Ne,
        "Mount"
      ))), Zl(i), an(o), vl = f, Cl = d;
    }
    function _l(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, _l(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && C(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function al(e, t, a) {
      for (a = a.child; a !== null; )
        My(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function My(e, t, a) {
      if (Yl && typeof Yl.onCommitFiberUnmount == "function")
        try {
          Yl.onCommitFiberUnmount(bo, a);
        } catch (p) {
          $u || ($u = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = il(), o = Hn(), f = nn(), d = Nn();
      switch (a.tag) {
        case 26:
          la || Bn(a, t), al(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          la || Bn(a, t);
          var h = aa, y = Xn;
          vc(a.type) && (aa = a.stateNode, Xn = !1), al(
            e,
            t,
            a
          ), fe(
            a,
            Ci,
            a.stateNode
          ), aa = h, Xn = y;
          break;
        case 5:
          la || Bn(a, t);
        case 6:
          if (h = aa, y = Xn, aa = null, al(
            e,
            t,
            a
          ), aa = h, Xn = y, aa !== null)
            if (Xn)
              try {
                fe(
                  a,
                  vv,
                  aa,
                  a.stateNode
                );
              } catch (p) {
                Fe(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                fe(
                  a,
                  pv,
                  aa,
                  a.stateNode
                );
              } catch (p) {
                Fe(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          aa !== null && (Xn ? (e = aa, ro(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), po(e)) : ro(aa, a.stateNode));
          break;
        case 4:
          h = aa, y = Xn, aa = a.stateNode.containerInfo, Xn = !0, al(
            e,
            t,
            a
          ), aa = h, Xn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          fc(
            Tn,
            a,
            t
          ), la || Wd(
            a,
            t,
            pu
          ), al(
            e,
            t,
            a
          );
          break;
        case 1:
          la || (Bn(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Id(
            a,
            t,
            h
          )), al(
            e,
            t,
            a
          );
          break;
        case 21:
          al(
            e,
            t,
            a
          );
          break;
        case 22:
          la = (h = la) || a.memoizedState !== null, al(
            e,
            t,
            a
          ), la = h;
          break;
        default:
          al(
            e,
            t,
            a
          );
      }
      (a.mode & tt) !== qe && 0 <= Me && 0 <= Ne && (Cl || 0.05 < El) && $n(
        a,
        Me,
        Ne,
        El,
        vl
      ), Zl(i), an(o), vl = f, Cl = d;
    }
    function Cy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          fe(
            t,
            Eh,
            e
          );
        } catch (a) {
          Fe(t, t.return, a);
        }
      }
    }
    function Uy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          fe(
            t,
            Iy,
            e
          );
        } catch (a) {
          Fe(t, t.return, a);
        }
    }
    function tv(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Lb()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Lb()), t;
        default:
          throw Error(
            "Unexpected Suspense handler tag (" + e.tag + "). This is a bug in React."
          );
      }
    }
    function rc(e, t) {
      var a = tv(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), ku)
            if (rm !== null && dm !== null)
              Tf(dm, rm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = fo.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function Ha(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = il(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (vc(y.type)) {
                  aa = y.stateNode, Xn = !1;
                  break e;
                }
                break;
              case 5:
                aa = y.stateNode, Xn = !1;
                break e;
              case 3:
              case 4:
                aa = y.stateNode.containerInfo, Xn = !0;
                break e;
            }
            y = y.return;
          }
          if (aa === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          My(o, f, d), aa = null, Xn = !1, (d.mode & tt) !== qe && 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && Mn(
            d,
            Me,
            Ne,
            "Unmount"
          ), Zl(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          ar(t, e), t = t.sibling;
    }
    function ar(e, t) {
      var a = il(), i = Hn(), o = nn(), f = Nn(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ha(t, e), Na(e), h & 4 && (fc(
            Tn | ui,
            e,
            e.return
          ), zi(Tn | ui, e), Wd(
            e,
            e.return,
            pu | ui
          ));
          break;
        case 1:
          if (Ha(t, e), Na(e), h & 512 && (la || d === null || Bn(d, d.return)), h & 64 && No && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Bi, Ha(t, e), Na(e), h & 512 && (la || d === null || Bn(d, d.return)), h & 4) {
            var p = d !== null ? d.memoizedState : null;
            if (h = e.memoizedState, d === null)
              if (h === null)
                if (e.stateNode === null) {
                  e: {
                    h = e.type, d = e.memoizedProps, y = y.ownerDocument || y;
                    t: switch (h) {
                      case "title":
                        p = y.getElementsByTagName(
                          "title"
                        )[0], (!p || p[Vf] || p[fl] || p.namespaceURI === Ie || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), ol(p, h, d), p[fl] = e, ve(p), h = p;
                        break e;
                      case "link":
                        var R = Hf(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (R) {
                          for (var _ = 0; _ < R.length; _++)
                            if (p = R[_], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              R.splice(_, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ol(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (R = Hf(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (_ = 0; _ < R.length; _++)
                            if (p = R[_], Oe(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              R.splice(_, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), ol(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[fl] = e, ve(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  Cv(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = zh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? Cv(
                y,
                e.type,
                e.stateNode
              ) : zh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && Pd(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          Ha(t, e), Na(e), h & 512 && (la || d === null || Bn(d, d.return)), d !== null && h & 4 && Pd(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (Ha(t, e), Na(e), h & 512 && (la || d === null || Bn(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              fe(
                e,
                bh,
                y
              );
            } catch (se) {
              Fe(e, e.return, se);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, Pd(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (KS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (Ha(t, e), Na(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              fe(
                e,
                aS,
                y,
                d,
                h
              );
            } catch (se) {
              Fe(e, e.return, se);
            }
          }
          break;
        case 3:
          if (y = Du(), qg = null, p = Bi, Bi = Th(t.containerInfo), Ha(t, e), Bi = p, Na(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              fe(
                e,
                Fy,
                t.containerInfo
              );
            } catch (se) {
              Fe(e, e.return, se);
            }
          KS && (KS = !1, lv(e)), t.effectDuration += Io(
            y
          );
          break;
        case 4:
          h = Bi, Bi = Th(
            e.stateNode.containerInfo
          ), Ha(t, e), Na(e), Bi = h;
          break;
        case 12:
          h = Du(), Ha(t, e), Na(e), e.stateNode.effectDuration += Ra(h);
          break;
        case 31:
          Ha(t, e), Na(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, rc(e, h)));
          break;
        case 13:
          Ha(t, e), Na(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (Tg = Fl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, rc(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var E = d !== null && d.memoizedState !== null, q = No, ue = la;
          if (No = q || y, la = ue || E, Ha(t, e), la = ue, No = q, E && !y && !q && !ue && (e.mode & tt) !== qe && 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && pd(
            e,
            Me,
            Ne
          ), Na(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~N0 : t._visibility | N0, !y || d === null || E || No || la || (dc(e), (e.mode & tt) !== qe && 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && Mn(
              e,
              Me,
              Ne,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  E = d = t;
                  try {
                    p = E.stateNode, y ? fe(
                      E,
                      Sv,
                      p
                    ) : fe(
                      E,
                      Tv,
                      E.stateNode,
                      E.memoizedProps
                    );
                  } catch (se) {
                    Fe(E, E.return, se);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  E = t;
                  try {
                    R = E.stateNode, y ? fe(
                      E,
                      bv,
                      R
                    ) : fe(
                      E,
                      Av,
                      R,
                      E.memoizedProps
                    );
                  } catch (se) {
                    Fe(E, E.return, se);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  E = t;
                  try {
                    _ = E.stateNode, y ? fe(
                      E,
                      gv,
                      _
                    ) : fe(
                      E,
                      Ev,
                      E.stateNode
                    );
                  } catch (se) {
                    Fe(E, E.return, se);
                  }
                }
              } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                t.child.return = t, t = t.child;
                continue;
              }
              if (t === e) break e;
              for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                  break e;
                d === t && (d = null), t = t.return;
              }
              d === t && (d = null), t.sibling.return = t.return, t = t.sibling;
            }
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, rc(e, d))));
          break;
        case 19:
          Ha(t, e), Na(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, rc(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          Ha(t, e), Na(e);
      }
      (e.mode & tt) !== qe && 0 <= Me && 0 <= Ne && ((Cl || 0.05 < El) && $n(
        e,
        Me,
        Ne,
        El,
        vl
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < Ne - Me && (_y(
        e.return.alternate,
        e.return
      ) || Mn(
        e,
        Me,
        Ne,
        "Mount"
      ))), Zl(a), an(i), vl = o, Cl = f;
    }
    function Na(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          fe(e, Ry, e);
        } catch (a) {
          Fe(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function lv(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          lv(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function dn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          th(e, t.alternate, t), t = t.sibling;
    }
    function lh(e) {
      var t = il(), a = Hn(), i = nn(), o = Nn();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wd(
            e,
            e.return,
            pu
          ), dc(e);
          break;
        case 1:
          Bn(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Id(
            e,
            e.return,
            f
          ), dc(e);
          break;
        case 27:
          fe(
            e,
            Ci,
            e.stateNode
          );
        case 26:
        case 5:
          Bn(e, e.return), dc(e);
          break;
        case 22:
          e.memoizedState === null && dc(e);
          break;
        case 30:
          dc(e);
          break;
        default:
          dc(e);
      }
      (e.mode & tt) !== qe && 0 <= Me && 0 <= Ne && (Cl || 0.05 < El) && $n(
        e,
        Me,
        Ne,
        El,
        vl
      ), Zl(t), an(a), vl = i, Cl = o;
    }
    function dc(e) {
      for (e = e.child; e !== null; )
        lh(e), e = e.sibling;
    }
    function Hy(e, t, a, i) {
      var o = il(), f = Hn(), d = nn(), h = Nn(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          nu(
            e,
            a,
            i
          ), Fp(a, pu);
          break;
        case 1:
          if (nu(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && fe(
            a,
            xS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              fe(
                a,
                Pm,
                t,
                e
              );
            } catch (p) {
              Fe(a, a.return, p);
            }
          }
          i && y & 64 && Ay(a), io(a, a.return);
          break;
        case 27:
          Dy(a);
        case 26:
        case 5:
          nu(
            e,
            a,
            i
          ), i && t === null && y & 4 && sc(a), io(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = Du(), nu(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += Ra(y);
            try {
              fe(
                a,
                zy,
                a,
                t,
                If,
                i.effectDuration
              );
            } catch (p) {
              Fe(a, a.return, p);
            }
          } else
            nu(
              e,
              a,
              i
            );
          break;
        case 31:
          nu(
            e,
            a,
            i
          ), i && y & 4 && Cy(e, a);
          break;
        case 13:
          nu(
            e,
            a,
            i
          ), i && y & 4 && Uy(e, a);
          break;
        case 22:
          a.memoizedState === null && nu(
            e,
            a,
            i
          ), io(a, a.return);
          break;
        case 30:
          break;
        default:
          nu(
            e,
            a,
            i
          );
      }
      (a.mode & tt) !== qe && 0 <= Me && 0 <= Ne && (Cl || 0.05 < El) && $n(
        a,
        Me,
        Ne,
        El,
        vl
      ), Zl(o), an(f), vl = d, Cl = h;
    }
    function nu(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Hy(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function nr(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Qc(e), a != null && Cs(a));
    }
    function ur(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Qc(t), e != null && Cs(e));
    }
    function hn(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          Ny(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function Ny(e, t, a, i, o) {
      var f = il(), d = Hn(), h = nn(), y = Nn(), p = $f, R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & tt) !== qe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && vd(
            t,
            t.actualStartTime,
            o,
            sa,
            a
          ), hn(
            e,
            t,
            a,
            i,
            o
          ), R & 2048 && er(t, An | ui);
          break;
        case 1:
          (t.mode & tt) !== qe && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? qm(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && vd(
            t,
            t.actualStartTime,
            o,
            sa,
            a
          )), hn(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var _ = Du(), E = sa;
          sa = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, hn(
            e,
            t,
            a,
            i,
            o
          ), sa = E, R & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Qc(i), a != null && Cs(a))), e.passiveEffectDuration += Io(
            _
          );
          break;
        case 12:
          if (R & 2048) {
            R = Du(), hn(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += Ra(R);
            try {
              fe(
                t,
                ev,
                t,
                t.alternate,
                If,
                e.passiveEffectDuration
              );
            } catch (q) {
              Fe(t, t.return, q);
            }
          } else
            hn(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          R = sa, _ = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, _ !== null && E === null ? (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (sa = !1, _ = _.hydrationErrors, _ !== null && qm(
            t,
            t.actualStartTime,
            o,
            _
          )) : sa = !0) : sa = !1, hn(
            e,
            t,
            a,
            i,
            o
          ), sa = R;
          break;
        case 13:
          R = sa, _ = t.alternate !== null ? t.alternate.memoizedState : null, E = t.memoizedState, _ === null || _.dehydrated === null || E !== null && E.dehydrated !== null ? sa = !1 : (E = t.deletions, E !== null && 0 < E.length && E[0].tag === 18 ? (sa = !1, _ = _.hydrationErrors, _ !== null && qm(
            t,
            t.actualStartTime,
            o,
            _
          )) : sa = !0), hn(
            e,
            t,
            a,
            i,
            o
          ), sa = R;
          break;
        case 23:
          break;
        case 22:
          E = t.stateNode, _ = t.alternate, t.memoizedState !== null ? E._visibility & Ao ? hn(
            e,
            t,
            a,
            i,
            o
          ) : co(
            e,
            t,
            a,
            i,
            o
          ) : E._visibility & Ao ? hn(
            e,
            t,
            a,
            i,
            o
          ) : (E._visibility |= Ao, hc(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & tt) === qe || sa || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && pd(t, e, o), 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && pd(
            t,
            Me,
            Ne
          ))), R & 2048 && nr(
            _,
            t
          );
          break;
        case 24:
          hn(
            e,
            t,
            a,
            i,
            o
          ), R & 2048 && ur(t.alternate, t);
          break;
        default:
          hn(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & tt) !== qe && ((e = !sa && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && Mn(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Me && 0 <= Ne && ((Cl || 0.05 < El) && $n(
        t,
        Me,
        Ne,
        El,
        vl
      ), e && 0.05 < Ne - Me && Mn(
        t,
        Me,
        Ne,
        "Mount"
      ))), Zl(f), an(d), vl = h, Cl = y, $f = p;
    }
    function hc(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        ir(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function ir(e, t, a, i, o, f) {
      var d = il(), h = Hn(), y = nn(), p = Nn(), R = $f;
      o && (t.mode & tt) !== qe && 0 < t.actualStartTime && (t.flags & 1) !== 0 && vd(
        t,
        t.actualStartTime,
        f,
        sa,
        a
      );
      var _ = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          hc(
            e,
            t,
            a,
            i,
            o,
            f
          ), er(t, An);
          break;
        case 23:
          break;
        case 22:
          var E = t.stateNode;
          t.memoizedState !== null ? E._visibility & Ao ? hc(
            e,
            t,
            a,
            i,
            o,
            f
          ) : co(
            e,
            t,
            a,
            i,
            f
          ) : (E._visibility |= Ao, hc(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && _ & 2048 && nr(
            t.alternate,
            t
          );
          break;
        case 24:
          hc(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && _ & 2048 && ur(t.alternate, t);
          break;
        default:
          hc(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & tt) !== qe && 0 <= Me && 0 <= Ne && (Cl || 0.05 < El) && $n(
        t,
        Me,
        Ne,
        El,
        vl
      ), Zl(d), an(h), vl = y, Cl = p, $f = R;
    }
    function co(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, R = $f;
          (f.mode & tt) !== qe && 0 < f.actualStartTime && (f.flags & 1) !== 0 && vd(
            f,
            f.actualStartTime,
            p,
            sa,
            h
          );
          var _ = f.flags;
          switch (f.tag) {
            case 22:
              co(
                d,
                f,
                h,
                y,
                p
              ), _ & 2048 && nr(f.alternate, f);
              break;
            case 24:
              co(
                d,
                f,
                h,
                y,
                p
              ), _ & 2048 && ur(f.alternate, f);
              break;
            default:
              co(
                d,
                f,
                h,
                y,
                p
              );
          }
          $f = R, f = t;
        }
    }
    function oo(e, t, a) {
      if (e.subtreeFlags & P0)
        for (e = e.child; e !== null; )
          ah(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function ah(e, t, a) {
      switch (e.tag) {
        case 26:
          oo(
            e,
            t,
            a
          ), e.flags & P0 && e.memoizedState !== null && a0(
            a,
            Bi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          oo(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Bi;
          Bi = Th(
            e.stateNode.containerInfo
          ), oo(
            e,
            t,
            a
          ), Bi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = P0, P0 = 16777216, oo(
            e,
            t,
            a
          ), P0 = i) : oo(
            e,
            t,
            a
          ));
          break;
        default:
          oo(
            e,
            t,
            a
          );
      }
    }
    function xy(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function mn(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = il();
            Ea = i, Gu(
              i,
              e
            ), (i.mode & tt) !== qe && 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && Mn(
              i,
              Me,
              Ne,
              "Unmount"
            ), Zl(o);
          }
        xy(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          nh(e), e = e.sibling;
    }
    function nh(e) {
      var t = il(), a = Hn(), i = nn(), o = Nn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          mn(e), e.flags & 2048 && Fd(
            e,
            e.return,
            An | ui
          );
          break;
        case 3:
          var f = Du();
          mn(e), e.stateNode.passiveEffectDuration += Io(f);
          break;
        case 12:
          f = Du(), mn(e), e.stateNode.passiveEffectDuration += Ra(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & Ao && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~Ao, uh(e), (e.mode & tt) !== qe && 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && Mn(
            e,
            Me,
            Ne,
            "Disconnect"
          )) : mn(e);
          break;
        default:
          mn(e);
      }
      (e.mode & tt) !== qe && 0 <= Me && 0 <= Ne && (Cl || 0.05 < El) && $n(
        e,
        Me,
        Ne,
        El,
        vl
      ), Zl(t), an(a), Cl = o, vl = i;
    }
    function uh(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = il();
            Ea = i, Gu(
              i,
              e
            ), (i.mode & tt) !== qe && 0 <= Me && 0 <= Ne && 0.05 < Ne - Me && Mn(
              i,
              Me,
              Ne,
              "Unmount"
            ), Zl(o);
          }
        xy(e);
      }
      for (e = e.child; e !== null; )
        jy(e), e = e.sibling;
    }
    function jy(e) {
      var t = il(), a = Hn(), i = nn(), o = Nn();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Fd(
            e,
            e.return,
            An
          ), uh(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & Ao && (f._visibility &= ~Ao, uh(e));
          break;
        default:
          uh(e);
      }
      (e.mode & tt) !== qe && 0 <= Me && 0 <= Ne && (Cl || 0.05 < El) && $n(
        e,
        Me,
        Ne,
        El,
        vl
      ), Zl(t), an(a), Cl = o, vl = i;
    }
    function Gu(e, t) {
      for (; Ea !== null; ) {
        var a = Ea, i = a, o = t, f = il(), d = Hn(), h = nn(), y = Nn();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Fd(
              i,
              o,
              An
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Qc(o));
            break;
          case 24:
            Cs(i.memoizedState.cache);
        }
        if ((i.mode & tt) !== qe && 0 <= Me && 0 <= Ne && (Cl || 0.05 < El) && $n(
          i,
          Me,
          Ne,
          El,
          vl
        ), Zl(f), an(d), Cl = y, vl = h, i = a.child, i !== null) i.return = a, Ea = i;
        else
          e: for (a = e; Ea !== null; ) {
            if (i = Ea, f = i.sibling, d = i.return, _l(i), i === a) {
              Ea = null;
              break e;
            }
            if (f !== null) {
              f.return = d, Ea = f;
              break e;
            }
            Ea = d;
          }
      }
    }
    function By() {
      FE.forEach(function(e) {
        return e();
      });
    }
    function qy() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || X.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function va(e) {
      if ((Et & ra) !== Ta && at !== 0)
        return at & -at;
      var t = X.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Ky()) : wi();
    }
    function vf() {
      if (Qn === 0)
        if ((at & 536870912) === 0 || mt) {
          var e = Mr;
          Mr <<= 1, (Mr & 3932160) === 0 && (Mr = 262144), Qn = e;
        } else Qn = 536870912;
      return e = yu.current, e !== null && (e.flags |= 32), Qn;
    }
    function Ge(e, t, a) {
      if (ym && console.error("useInsertionEffect must not schedule updates."), n1 && (Rg = !0), (e === tl && (Jt === Zr || Jt === Jr) || e.cancelPendingCommit !== null) && (wu(e, 0), qn(
        e,
        at,
        Qn,
        !1
      )), qt(e, a), (Et & ra) !== Ta && e === tl) {
        if (Ku)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = ot && re(ot) || "Unknown", a2.has(e) || (a2.add(e), t = re(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              l2 || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), l2 = !0);
          }
      } else
        ku && zl(e, t, a), sr(t), e === tl && ((Et & ra) === Ta && (is |= a), Tl === as && qn(
          e,
          at,
          Qn,
          !1
        )), Ja(e);
    }
    function av(e, t, a) {
      if ((Et & (ra | vu)) !== Ta)
        throw Error("Should not already be working.");
      if (at !== 0 && ot !== null) {
        var i = ot, o = Fl();
        switch (k1) {
          case lp:
          case Zr:
            var f = G0;
            sl && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                Fu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              Fu,
              void 0,
              "primary-light"
            ));
            break;
          case Jr:
            f = G0, sl && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                Fu,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              Fu,
              void 0,
              "primary-light"
            ));
            break;
          default:
            sl && (i = o - G0, 3 > i || console.timeStamp(
              "Blocked",
              G0,
              o,
              Fu,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ke(e, t)) ? Oi(e, t) : bf(e, t, !0);
      var d = a;
      do {
        if (f === xo) {
          hm && !a && qn(e, t, 0, !1), t = Jt, G0 = Pl(), k1 = t;
          break;
        } else {
          if (i = Fl(), o = e.current.alternate, d && !uv(o)) {
            Kn(t), o = ba, f = i, !sl || f <= o || (xl ? xl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                St,
                pt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              St,
              pt,
              "error"
            )), mc(t, i), f = bf(e, t, !1), d = !1;
            continue;
          }
          if (f === Vr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              Kn(t), Ym(
                ba,
                i,
                t,
                xl
              ), mc(t, i), t = h;
              e: {
                i = e, f = d, d = np;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (wu(i, h).flags |= 256), h = bf(
                  i,
                  h,
                  !1
                ), h !== Vr) {
                  if (WS && !y) {
                    i.errorRecoveryDisabledLanes |= f, is |= f, f = as;
                    break e;
                  }
                  i = zn, zn = d, i !== null && (zn === null ? zn = i : zn.push.apply(
                    zn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Vr) continue;
              i = Fl();
            }
          }
          if (f === tp) {
            Kn(t), Ym(
              ba,
              i,
              t,
              xl
            ), mc(t, i), wu(e, 0), qn(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case xo:
              case tp:
                throw Error("Root did not complete. This is a bug in React.");
              case as:
                if ((t & 4194048) !== t) break;
              case gg:
                Kn(t), Np(
                  ba,
                  i,
                  t,
                  xl
                ), mc(t, i), o = t, (o & 127) !== 0 ? ag = i : (o & 4194048) !== 0 && (ng = i), qn(
                  a,
                  t,
                  Qn,
                  !ns
                );
                break e;
              case Vr:
                zn = null;
                break;
              case vg:
              case Qb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (X.actQueue !== null)
              It(
                a,
                o,
                t,
                zn,
                up,
                Eg,
                Qn,
                is,
                Kr,
                f,
                null,
                null,
                ba,
                i
              );
            else {
              if ((t & 62914560) === t && (d = Tg + Jb - Fl(), 10 < d)) {
                if (qn(
                  a,
                  t,
                  Qn,
                  !ns
                ), ll(a, 0, !0) !== 0) break e;
                qi = t, a.timeoutHandle = r2(
                  nv.bind(
                    null,
                    a,
                    o,
                    zn,
                    up,
                    Eg,
                    t,
                    Qn,
                    is,
                    Kr,
                    ns,
                    f,
                    "Throttled",
                    ba,
                    i
                  ),
                  d
                );
                break e;
              }
              nv(
                a,
                o,
                zn,
                up,
                Eg,
                t,
                Qn,
                is,
                Kr,
                ns,
                f,
                null,
                ba,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      Ja(e);
    }
    function nv(e, t, a, i, o, f, d, h, y, p, R, _, E, q) {
      e.timeoutHandle = Ir;
      var ue = t.subtreeFlags, se = null;
      if ((ue & 8192 || (ue & 16785408) === 16785408) && (se = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: _n
      }, ah(t, f, se), ue = (f & 62914560) === f ? Tg - Fl() : (f & 4194048) === f ? Zb - Fl() : 0, ue = Oh(se, ue), ue !== null)) {
        qi = f, e.cancelPendingCommit = ue(
          It.bind(
            null,
            e,
            t,
            f,
            a,
            i,
            o,
            d,
            h,
            y,
            R,
            se,
            se.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < se.count ? 0 < se.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : se.imgCount === 1 ? "Suspended on an Image" : 0 < se.imgCount ? "Suspended on Images" : null,
            E,
            q
          )
        ), qn(
          e,
          f,
          d,
          !p
        );
        return;
      }
      It(
        e,
        t,
        f,
        a,
        i,
        o,
        d,
        h,
        y,
        R,
        se,
        _,
        E,
        q
      );
    }
    function uv(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!bn(f(), o)) return !1;
            } catch {
              return !1;
            }
          }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null)
          a.return = t, t = a;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return !0;
    }
    function qn(e, t, a, i) {
      t &= ~FS, t &= ~is, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - oa(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Gi(e, a, t);
    }
    function yn() {
      return (Et & (ra | vu)) === Ta ? (Lu(0), !1) : !0;
    }
    function ih() {
      if (ot !== null) {
        if (Jt === Ln)
          var e = ot.return;
        else
          e = ot, Wo(), Pi(e), nm = null, $0 = 0, e = ot;
        for (; e !== null; )
          Ty(e.alternate, e), e = e.return;
        ot = null;
      }
    }
    function mc(e, t) {
      (e & 127) !== 0 && (jr = t), (e & 4194048) !== 0 && (_o = t), (e & 62914560) !== 0 && (K1 = t), (e & 2080374784) !== 0 && ($1 = t);
    }
    function wu(e, t) {
      sl && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        pt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        pt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        pt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        pt,
        "primary-light"
      ));
      var a = ba;
      if (ba = Pl(), at !== 0 && 0 < a) {
        if (Kn(at), Tl === vg || Tl === as)
          Np(
            a,
            ba,
            t,
            xl
          );
        else {
          var i = ba, o = xl;
          if (sl && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                St,
                pt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              St,
              pt,
              f
            );
          }
        }
        mc(at, ba);
      }
      if (a = xl, xl = null, (t & 127) !== 0) {
        xl = B0, o = 0 <= Oc && Oc < jr ? jr : Oc, i = 0 <= Br && Br < jr ? jr : Br, f = 0 <= i ? i : 0 <= o ? o : ba, 0 <= ag ? (Kn(2), xp(
          ag,
          f,
          t,
          a
        )) : ug & 127, a = o;
        var h = i, y = q0, p = 0 < tm, R = Pf === j0, _ = Pf === lg;
        if (o = ba, i = B0, f = MS, d = CS, sl) {
          if (St = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var E = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                St,
                pt,
                E
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              St,
              pt,
              E
            );
          }
          o > a && (h = R ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", R = _ ? "Promise Resolved" : R ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", _ = [], d != null && _.push(["Component name", d]), f != null && _.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: _,
                track: St,
                trackGroup: pt,
                color: h
              }
            }
          }, i ? i.run(
            performance.measure.bind(
              performance,
              R,
              a
            )
          ) : performance.measure(R, a));
        }
        Oc = -1.1, Pf = 0, CS = MS = null, ag = -1.1, tm = Br, Br = -1.1, jr = Pl();
      }
      if ((t & 4194048) !== 0 && (xl = Y0, o = 0 <= Mo && Mo < _o ? _o : Mo, a = 0 <= ai && ai < _o ? _o : ai, i = 0 <= es && es < _o ? _o : es, f = 0 <= i ? i : 0 <= a ? a : ba, 0 <= ng ? (Kn(256), xp(
        ng,
        f,
        t,
        xl
      )) : ug & 4194048, _ = i, h = qr, y = 0 < ts, p = US === lg, f = ba, i = Y0, d = Z1, R = J1, sl && (St = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < _ ? _ > o && (_ = o) : _ = o, o > _ && h !== null && (E = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          _,
          o,
          St,
          pt,
          E
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        _,
        o,
        St,
        pt,
        E
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          St,
          pt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        St,
        pt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", _ = [], R != null && _.push(["Component name", R]), d != null && _.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: _,
            track: St,
            trackGroup: pt,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), ai = Mo = -1.1, US = 0, ng = -1.1, ts = es, es = -1.1, _o = Pl()), (t & 62914560) !== 0 && (ug & 62914560) !== 0 && (Kn(4194304), Gm(K1, ba)), (t & 2080374784) !== 0 && (ug & 2080374784) !== 0 && (Kn(268435456), Gm($1, ba)), a = e.timeoutHandle, a !== Ir && (e.timeoutHandle = Ir, sT(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), qi = 0, ih(), tl = e, ot = a = Ou(
        e.current,
        null
      ), at = t, Jt = Ln, gu = null, ns = !1, hm = ke(e, t), WS = !1, Tl = xo, Kr = Qn = FS = is = us = 0, zn = np = null, Eg = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - oa(i), f = 1 << o, t |= e[o], i &= ~f;
      return Dc = t, gd(), e = G1(), 1e3 < e - Y1 && (X.recentlyCreatedOwnerStacks = 0, Y1 = e), xi.discardPendingWarnings(), a;
    }
    function uu(e, t) {
      Xe = null, X.H = I0, X.getCurrentStack = null, Ku = !1, Wa = null, t === am || t === fg ? (t = Jc(), Jt = lp) : t === jS ? (t = Jc(), Jt = Vb) : Jt = t === ZS ? kS : t !== null && typeof t == "object" && typeof t.then == "function" ? ap : Sg, gu = t;
      var a = ot;
      a === null ? (Tl = tp, ks(
        e,
        Oa(t, e.current)
      )) : a.mode & tt && Od(a);
    }
    function Yy() {
      var e = yu.current;
      return e === null ? !0 : (at & 4194048) === at ? ni === null : (at & 62914560) === at || (at & 536870912) !== 0 ? e === ni : !1;
    }
    function ch() {
      var e = X.H;
      return X.H = I0, e === null ? I0 : e;
    }
    function Gy() {
      var e = X.A;
      return X.A = WE, e;
    }
    function gf(e) {
      xl === null && (xl = e._debugTask == null ? null : e._debugTask);
    }
    function Sf() {
      Tl = as, ns || (at & 4194048) !== at && yu.current !== null || (hm = !0), (us & 134217727) === 0 && (is & 134217727) === 0 || tl === null || qn(
        tl,
        at,
        Qn,
        !1
      );
    }
    function bf(e, t, a) {
      var i = Et;
      Et |= ra;
      var o = ch(), f = Gy();
      if (tl !== e || at !== t) {
        if (ku) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Tf(e, at), d.clear()), Aa(e, t);
        }
        up = null, wu(e, t);
      }
      t = !1, d = Tl;
      e: do
        try {
          if (Jt !== Ln && ot !== null) {
            var h = ot, y = gu;
            switch (Jt) {
              case kS:
                ih(), d = gg;
                break e;
              case lp:
              case Zr:
              case Jr:
              case ap:
                yu.current === null && (t = !0);
                var p = Jt;
                if (Jt = Ln, gu = null, Ef(e, h, y, p), a && hm) {
                  d = xo;
                  break e;
                }
                break;
              default:
                p = Jt, Jt = Ln, gu = null, Ef(e, h, y, p);
            }
          }
          wy(), d = Tl;
          break;
        } catch (R) {
          uu(e, R);
        }
      while (!0);
      return t && e.shellSuspendCounter++, Wo(), Et = i, X.H = o, X.A = f, ot === null && (tl = null, at = 0, gd()), d;
    }
    function wy() {
      for (; ot !== null; ) oh(ot);
    }
    function Oi(e, t) {
      var a = Et;
      Et |= ra;
      var i = ch(), o = Gy();
      if (tl !== e || at !== t) {
        if (ku) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Tf(e, at), f.clear()), Aa(e, t);
        }
        up = null, Ag = Fl() + Kb, wu(e, t);
      } else
        hm = ke(
          e,
          t
        );
      e: do
        try {
          if (Jt !== Ln && ot !== null)
            t: switch (t = ot, f = gu, Jt) {
              case Sg:
                Jt = Ln, gu = null, Ef(
                  e,
                  t,
                  f,
                  Sg
                );
                break;
              case Zr:
              case Jr:
                if (Fm(f)) {
                  Jt = Ln, gu = null, Xy(t);
                  break;
                }
                t = function() {
                  Jt !== Zr && Jt !== Jr || tl !== e || (Jt = bg), Ja(e);
                }, f.then(t, t);
                break e;
              case lp:
                Jt = bg;
                break e;
              case Vb:
                Jt = $S;
                break e;
              case bg:
                Fm(f) ? (Jt = Ln, gu = null, Xy(t)) : (Jt = Ln, gu = null, Ef(
                  e,
                  t,
                  f,
                  bg
                ));
                break;
              case $S:
                var d = null;
                switch (ot.tag) {
                  case 26:
                    d = ot.memoizedState;
                  case 5:
                  case 27:
                    var h = ot;
                    if (d ? ft(d) : h.stateNode.complete) {
                      Jt = Ln, gu = null;
                      var y = h.sibling;
                      if (y !== null) ot = y;
                      else {
                        var p = h.return;
                        p !== null ? (ot = p, cr(p)) : ot = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Jt = Ln, gu = null, Ef(
                  e,
                  t,
                  f,
                  $S
                );
                break;
              case ap:
                Jt = Ln, gu = null, Ef(
                  e,
                  t,
                  f,
                  ap
                );
                break;
              case kS:
                ih(), Tl = gg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          X.actQueue !== null ? wy() : Hl();
          break;
        } catch (R) {
          uu(e, R);
        }
      while (!0);
      return Wo(), X.H = i, X.A = o, Et = a, ot !== null ? xo : (tl = null, at = 0, gd(), Tl);
    }
    function Hl() {
      for (; ot !== null && !Bh(); )
        oh(ot);
    }
    function oh(e) {
      var t = e.alternate;
      (e.mode & tt) !== qe ? (mi(e), t = fe(
        e,
        Ps,
        t,
        e,
        Dc
      ), Od(e)) : t = fe(
        e,
        Ps,
        t,
        e,
        Dc
      ), e.memoizedProps = e.pendingProps, t === null ? cr(e) : ot = t;
    }
    function Xy(e) {
      var t = fe(e, Wl, e);
      e.memoizedProps = e.pendingProps, t === null ? cr(e) : ot = t;
    }
    function Wl(e) {
      var t = e.alternate, a = (e.mode & tt) !== qe;
      switch (a && mi(e), e.tag) {
        case 15:
        case 0:
          t = py(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            at
          );
          break;
        case 11:
          t = py(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            at
          );
          break;
        case 5:
          Pi(e);
        default:
          Ty(t, e), e = ot = Qm(e, Dc), t = Ps(t, e, Dc);
      }
      return a && Od(e), t;
    }
    function Ef(e, t, a, i) {
      Wo(), Pi(t), nm = null, $0 = 0;
      var o = t.return;
      try {
        if (fy(
          e,
          o,
          t,
          a,
          at
        )) {
          Tl = tp, ks(
            e,
            Oa(a, e.current)
          ), ot = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw ot = o, f;
        Tl = tp, ks(
          e,
          Oa(a, e.current)
        ), ot = null;
        return;
      }
      t.flags & 32768 ? (mt || i === Sg ? e = !0 : hm || (at & 536870912) !== 0 ? e = !1 : (ns = e = !0, (i === Zr || i === Jr || i === lp || i === ap) && (i = yu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), Ly(t, e)) : cr(t);
    }
    function cr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Ly(
            t,
            ns
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, mi(t), a = fe(
          t,
          Ey,
          a,
          t,
          Dc
        ), (t.mode & tt) !== qe && Us(t), a !== null) {
          ot = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          ot = t;
          return;
        }
        ot = t = e;
      } while (t !== null);
      Tl === xo && (Tl = Qb);
    }
    function Ly(e, t) {
      do {
        var a = Wp(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, ot = a;
          return;
        }
        if ((e.mode & tt) !== qe) {
          Us(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          ot = e;
          return;
        }
        ot = e = a;
      } while (e !== null);
      Tl = gg, ot = null;
    }
    function It(e, t, a, i, o, f, d, h, y, p, R, _, E, q) {
      e.cancelPendingCommit = null;
      do
        or();
      while (na !== os);
      if (xi.flushLegacyContextWarning(), xi.flushPendingUnsafeLifecycleWarnings(), (Et & (ra | vu)) !== Ta)
        throw Error("Should not already be working.");
      if (Kn(a), p === Vr ? Ym(
        E,
        q,
        a,
        xl
      ) : i !== null ? Ig(
        E,
        q,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        xl
      ) : Fg(
        E,
        q,
        a,
        xl
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= zS, Rn(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === tl && (ot = tl = null, at = 0), mm = t, fs = e, qi = a, e1 = f, l1 = o, Pb = i, t1 = q, e2 = _, Yi = zg, t2 = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Af(So, function() {
          return rp = window.event, Yi === zg && (Yi = PS), fr(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Do = null, If = Pl(), _ !== null && Pg(
          q,
          If,
          _,
          xl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null, o = Ct.p, Ct.p = Gl, d = Et, Et |= vu;
          try {
            lS(e, t, a);
          } finally {
            Et = d, Ct.p = o, X.T = i;
          }
        }
        na = kb, xa(), Xu(), Qy();
      }
    }
    function xa() {
      if (na === kb) {
        na = os;
        var e = fs, t = mm, a = qi, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ct.p;
          Ct.p = Gl;
          var f = Et;
          Et |= vu;
          try {
            rm = a, dm = e, Vc(), ar(t, e), dm = rm = null, a = h1;
            var d = yd(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Mp(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && jm(h)) {
                var p = y.start, R = y.end;
                if (R === void 0 && (R = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    R,
                    h.value.length
                  );
                else {
                  var _ = h.ownerDocument || document, E = _ && _.defaultView || window;
                  if (E.getSelection) {
                    var q = E.getSelection(), ue = h.textContent.length, se = Math.min(
                      y.start,
                      ue
                    ), nl = y.end === void 0 ? se : Math.min(y.end, ue);
                    !q.extend && se > nl && (d = nl, nl = se, se = d);
                    var vt = _p(
                      h,
                      se
                    ), b = _p(
                      h,
                      nl
                    );
                    if (vt && b && (q.rangeCount !== 1 || q.anchorNode !== vt.node || q.anchorOffset !== vt.offset || q.focusNode !== b.node || q.focusOffset !== b.offset)) {
                      var T = _.createRange();
                      T.setStart(vt.node, vt.offset), q.removeAllRanges(), se > nl ? (q.addRange(T), q.extend(b.node, b.offset)) : (T.setEnd(b.node, b.offset), q.addRange(T));
                    }
                  }
                }
              }
              for (_ = [], q = h; q = q.parentNode; )
                q.nodeType === 1 && _.push({
                  element: q,
                  left: q.scrollLeft,
                  top: q.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < _.length; h++) {
                var O = _[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            wg = !!d1, h1 = d1 = null;
          } finally {
            Et = f, Ct.p = o, X.T = i;
          }
        }
        e.current = t, na = Wb;
      }
    }
    function Xu() {
      if (na === Wb) {
        na = os;
        var e = t2;
        if (e !== null) {
          If = Pl();
          var t = Ro, a = If;
          !sl || a <= t || console.timeStamp(
            e,
            t,
            a,
            St,
            pt,
            "secondary-light"
          );
        }
        e = fs, t = mm, a = qi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = X.T, X.T = null;
          var o = Ct.p;
          Ct.p = Gl;
          var f = Et;
          Et |= vu;
          try {
            rm = a, dm = e, Vc(), th(
              e,
              t.alternate,
              t
            ), dm = rm = null;
          } finally {
            Et = f, Ct.p = o, X.T = i;
          }
        }
        e = t1, t = e2, Ro = Pl(), e = t === null ? e : If, t = Ro, a = Yi === IS, i = xl, Do !== null ? jp(
          e,
          t,
          Do,
          !1,
          i
        ) : !sl || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            St,
            pt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          St,
          pt,
          a ? "error" : "secondary-dark"
        )), na = Fb;
      }
    }
    function Qy() {
      if (na === Ib || na === Fb) {
        if (na === Ib) {
          var e = Ro;
          Ro = Pl();
          var t = Ro, a = Yi === IS;
          !sl || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            St,
            pt,
            a ? " error" : "secondary-light"
          ), Yi !== IS && (Yi = $b);
        }
        na = os, qh(), e = fs;
        var i = mm;
        t = qi, a = Pb;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? na = Og : (na = os, mm = fs = null, Vy(
          e,
          e.pendingLanes
        ), $r = 0, cp = null);
        var f = e.pendingLanes;
        if (f === 0 && (cs = null), o || rh(e), f = Ql(t), i = i.stateNode, Yl && typeof Yl.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Gl:
                var h = b0;
                break;
              case fa:
                h = Yh;
                break;
              case Sa:
                h = So;
                break;
              case Tc:
                h = Gh;
                break;
              default:
                h = So;
            }
            Yl.onCommitFiberRoot(
              bo,
              i,
              h,
              d
            );
          } catch (_) {
            $u || ($u = !0, console.error(
              "React instrumentation encountered an error: %o",
              _
            ));
          }
        if (ku && e.memoizedUpdaters.clear(), By(), a !== null) {
          d = X.T, h = Ct.p, Ct.p = Gl, X.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], R = iv(p.stack);
              fe(
                p.source,
                y,
                p.value,
                R
              );
            }
          } finally {
            X.T = d, Ct.p = h;
          }
        }
        (qi & 3) !== 0 && or(), Ja(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (cg = !0, e === a1 ? ip++ : (ip = 0, a1 = e)) : ip = 0, o || mc(t, Ro), Lu(0);
      }
    }
    function iv(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function Vy(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Cs(t)));
    }
    function or() {
      return xa(), Xu(), Qy(), fr();
    }
    function fr() {
      if (na !== Og) return !1;
      var e = fs, t = e1;
      e1 = 0;
      var a = Ql(qi), i = Sa > a ? Sa : a;
      a = X.T;
      var o = Ct.p;
      try {
        Ct.p = i, X.T = null;
        var f = l1;
        l1 = null, i = fs;
        var d = qi;
        if (na = os, mm = fs = null, qi = 0, (Et & (ra | vu)) !== Ta)
          throw Error("Cannot flush passive effects while already rendering.");
        Kn(d), n1 = !0, Rg = !1;
        var h = 0;
        if (Do = null, h = Fl(), Yi === $b)
          Gm(
            Ro,
            h,
            QE
          );
        else {
          var y = Ro, p = h, R = Yi === PS;
          !sl || p <= y || (xl ? xl.run(
            console.timeStamp.bind(
              console,
              R ? "Waiting for Paint" : "Waiting",
              y,
              p,
              St,
              pt,
              "secondary-light"
            )
          ) : console.timeStamp(
            R ? "Waiting for Paint" : "Waiting",
            y,
            p,
            St,
            pt,
            "secondary-light"
          ));
        }
        y = Et, Et |= vu;
        var _ = i.current;
        Vc(), nh(_);
        var E = i.current;
        _ = t1, Vc(), Ny(
          i,
          E,
          d,
          f,
          _
        ), rh(i), Et = y;
        var q = Fl();
        if (E = h, _ = xl, Do !== null ? jp(
          E,
          q,
          Do,
          !0,
          _
        ) : !sl || q <= E || (_ ? _.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            E,
            q,
            St,
            pt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          E,
          q,
          St,
          pt,
          "secondary-dark"
        )), mc(d, q), Lu(0, !1), Rg ? i === cp ? $r++ : ($r = 0, cp = i) : $r = 0, Rg = n1 = !1, Yl && typeof Yl.onPostCommitFiberRoot == "function")
          try {
            Yl.onPostCommitFiberRoot(bo, i);
          } catch (se) {
            $u || ($u = !0, console.error(
              "React instrumentation encountered an error: %o",
              se
            ));
          }
        var ue = i.current.stateNode;
        return ue.effectDuration = 0, ue.passiveEffectDuration = 0, !0;
      } finally {
        Ct.p = o, X.T = a, Vy(e, t);
      }
    }
    function ja(e, t, a) {
      t = Oa(a, t), Xp(t), t = Xd(e.stateNode, t, 2), e = Mu(e, t, 2), e !== null && (qt(e, 2), Ja(e));
    }
    function Fe(e, t, a) {
      if (ym = !1, e.tag === 3)
        ja(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            ja(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (cs === null || !cs.has(i))) {
              e = Oa(a, e), Xp(e), a = Ld(2), i = Mu(t, a, 2), i !== null && (Qd(
                a,
                i,
                t,
                e
              ), qt(i, 2), Ja(i));
              return;
            }
          }
          t = t.return;
        }
        console.error(
          `Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Potential causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`,
          a
        );
      }
    }
    function fh(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new IE();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (WS = !0, o.add(a), i = Za.bind(null, e, t, a), ku && Tf(e, a), t.then(i, i));
    }
    function Za(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Oc && (jr = Oc = Pl(), B0 = tg("Promise Resolved"), Pf = lg) : (a & 4194048) !== 0 && 0 > ai && (_o = ai = Pl(), Y0 = tg("Promise Resolved"), US = lg), qy() && X.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), tl === e && (at & a) === a && (Tl === as || Tl === vg && (at & 62914560) === at && Fl() - Tg < Jb ? (Et & ra) === Ta && wu(e, 0) : FS |= a, Kr === at && (Kr = 0)), Ja(e);
    }
    function Zy(e, t) {
      t === 0 && (t = On()), e = ya(e, t), e !== null && (qt(e, t), Ja(e));
    }
    function Ri(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), Zy(e, a);
    }
    function fo(e, t) {
      var a = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var i = e.stateNode, o = e.memoizedState;
          o !== null && (a = o.retryLane);
          break;
        case 19:
          i = e.stateNode;
          break;
        case 22:
          i = e.stateNode._retryCache;
          break;
        default:
          throw Error(
            "Pinged unknown suspense boundary type. This is probably a bug in React."
          );
      }
      i !== null && i.delete(t), Zy(e, a);
    }
    function iu(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === Ya;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && fe(
            o,
            sh,
            i,
            o
          ) : iu(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? fe(
            o,
            sh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && fe(
            o,
            iu,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function sh(e, t) {
      ce(!0);
      try {
        lh(t), jy(t), Hy(e, t.alternate, t, !1), ir(e, t, 0, null, !1, 0);
      } finally {
        ce(!1);
      }
    }
    function rh(e) {
      var t = !0;
      e.current.mode & (Fa | Ni) || (t = !1), iu(
        e,
        e.current,
        t
      );
    }
    function Yn(e) {
      if ((Et & ra) === Ta) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = re(e) || "ReactComponent", Dg !== null) {
            if (Dg.has(t)) return;
            Dg.add(t);
          } else Dg = /* @__PURE__ */ new Set([t]);
          fe(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Tf(e, t) {
      ku && e.memoizedUpdaters.forEach(function(a) {
        zl(e, a, t);
      });
    }
    function Af(e, t) {
      var a = X.actQueue;
      return a !== null ? (a.push(t), tT) : S0(e, t);
    }
    function sr(e) {
      qy() && X.actQueue === null && fe(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          re(e)
        );
      });
    }
    function Ja(e) {
      e !== pm && e.next === null && (pm === null ? _g = pm = e : pm = pm.next = e), Mg = !0, X.actQueue !== null ? i1 || (i1 = !0, ov()) : u1 || (u1 = !0, ov());
    }
    function Lu(e, t) {
      if (!c1 && Mg) {
        c1 = !0;
        do
          for (var a = !1, i = _g; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - oa(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, rr(i, f));
            } else
              f = at, f = ll(
                i,
                i === tl ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== Ir
              ), (f & 3) === 0 || ke(i, f) || (a = !0, rr(i, f));
            i = i.next;
          }
        while (a);
        c1 = !1;
      }
    }
    function cv() {
      rp = window.event, dh();
    }
    function dh() {
      Mg = i1 = u1 = !1;
      var e = 0;
      ss !== 0 && ky() && (e = ss);
      for (var t = Fl(), a = null, i = _g; i !== null; ) {
        var o = i.next, f = zf(i, t);
        f === 0 ? (i.next = null, a === null ? _g = o : a.next = o, o === null && (pm = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (Mg = !0)), i = o;
      }
      na !== os && na !== Og || Lu(e), ss !== 0 && (ss = 0);
    }
    function zf(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - oa(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = Xa(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = tl, a = at, a = ll(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ir
      ), i = e.callbackNode, a === 0 || e === t && (Jt === Zr || Jt === Jr) || e.cancelPendingCommit !== null)
        return i !== null && hh(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || ke(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || X.actQueue !== null && i !== o1)
          hh(i);
        else return t;
        switch (Ql(a)) {
          case Gl:
          case fa:
            a = Yh;
            break;
          case Sa:
            a = So;
            break;
          case Tc:
            a = Gh;
            break;
          default:
            a = So;
        }
        return i = Jy.bind(null, e), X.actQueue !== null ? (X.actQueue.push(i), a = o1) : a = S0(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && hh(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function Jy(e, t) {
      if (cg = ig = !1, rp = window.event, na !== os && na !== Og)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Yi === zg && (Yi = PS), or() && e.callbackNode !== a)
        return null;
      var i = at;
      return i = ll(
        e,
        e === tl ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== Ir
      ), i === 0 ? null : (av(
        e,
        i,
        t
      ), zf(e, Fl()), e.callbackNode != null && e.callbackNode === a ? Jy.bind(null, e) : null);
    }
    function rr(e, t) {
      if (or()) return null;
      ig = cg, cg = !1, av(e, t, !0);
    }
    function hh(e) {
      e !== o1 && e !== null && jh(e);
    }
    function ov() {
      X.actQueue !== null && X.actQueue.push(function() {
        return dh(), null;
      }), rT(function() {
        (Et & (ra | vu)) !== Ta ? S0(
          b0,
          cv
        ) : dh();
      });
    }
    function Ky() {
      if (ss === 0) {
        var e = Yr;
        e === 0 && (e = Lf, Lf <<= 1, (Lf & 261888) === 0 && (Lf = 256)), ss = e;
      }
      return ss;
    }
    function At(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Oe(e, "action"), bs("" + e));
    }
    function Qt(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ht(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = At(
          (o[Ga] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Ga] || null) ? At(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new $v(
          "action",
          "action",
          null,
          i,
          o
        );
        e.push({
          event: h,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (i.defaultPrevented) {
                  if (ss !== 0) {
                    var y = d ? Qt(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), Ti(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? Qt(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), Ti(
                    a,
                    p,
                    f,
                    y
                  ));
              },
              currentTarget: o
            }
          ]
        });
      }
    }
    function ct(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        bS(i);
      }
      e.currentTarget = null;
    }
    function xt(e, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        e: {
          var o = void 0, f = i.event;
          if (i = i.listeners, t)
            for (var d = i.length - 1; 0 <= d; d--) {
              var h = i[d], y = h.instance, p = h.currentTarget;
              if (h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? fe(
                y,
                ct,
                f,
                h,
                p
              ) : ct(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? fe(
                y,
                ct,
                f,
                h,
                p
              ) : ct(f, h, p), o = y;
            }
        }
      }
    }
    function xe(e, t) {
      f1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[Eo];
      a === void 0 && (a = t[Eo] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (mh(t, e, 2, !1), a.add(i));
    }
    function Qu(e, t, a) {
      f1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), mh(
        a,
        e,
        i,
        t
      );
    }
    function yc(e) {
      if (!e[Cg]) {
        e[Cg] = !0, Qv.forEach(function(a) {
          a !== "selectionchange" && (f1.has(a) || Qu(a, !1, e), Qu(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Cg] || (t[Cg] = !0, Qu("selectionchange", !1, t));
      }
    }
    function mh(e, t, a, i) {
      switch (_h(t)) {
        case Gl:
          var o = o0;
          break;
        case fa:
          o = ca;
          break;
        default:
          o = f0;
      }
      a = o.bind(
        null,
        t,
        a,
        e
      ), o = void 0, !sS || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }) : e.addEventListener(t, a, !0) : o !== void 0 ? e.addEventListener(t, a, {
        passive: o
      }) : e.addEventListener(
        t,
        a,
        !1
      );
    }
    function cu(e, t, a, i, o) {
      var f = i;
      if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
        e: for (; ; ) {
          if (i === null) return;
          var d = i.tag;
          if (d === 3 || d === 4) {
            var h = i.stateNode.containerInfo;
            if (h === o) break;
            if (d === 4)
              for (d = i.return; d !== null; ) {
                var y = d.tag;
                if ((y === 3 || y === 4) && d.stateNode.containerInfo === o)
                  return;
                d = d.return;
              }
            for (; h !== null; ) {
              if (d = P(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      rd(function() {
        var p = f, R = Zn(a), _ = [];
        e: {
          var E = q1.get(e);
          if (E !== void 0) {
            var q = $v, ue = e;
            switch (e) {
              case "keypress":
                if (Es(a) === 0) break e;
              case "keydown":
              case "keyup":
                q = pE;
                break;
              case "focusin":
                ue = "focus", q = mS;
                break;
              case "focusout":
                ue = "blur", q = mS;
                break;
              case "beforeblur":
              case "afterblur":
                q = mS;
                break;
              case "click":
                if (a.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                q = A1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                q = nE;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                q = SE;
                break;
              case N1:
              case x1:
              case j1:
                q = cE;
                break;
              case B1:
                q = EE;
                break;
              case "scroll":
              case "scrollend":
                q = lE;
                break;
              case "wheel":
                q = AE;
                break;
              case "copy":
              case "cut":
              case "paste":
                q = fE;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                q = O1;
                break;
              case "toggle":
              case "beforetoggle":
                q = OE;
            }
            var se = (t & 4) !== 0, nl = !se && (e === "scroll" || e === "scrollend"), vt = se ? E !== null ? E + "Capture" : null : E;
            se = [];
            for (var b = p, T; b !== null; ) {
              var O = b;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || vt === null || (O = Au(b, vt), O != null && se.push(
                Pt(
                  b,
                  O,
                  T
                )
              )), nl) break;
              b = b.return;
            }
            0 < se.length && (E = new q(
              E,
              ue,
              null,
              a,
              R
            ), _.push({
              event: E,
              listeners: se
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (E = e === "mouseover" || e === "pointerover", q = e === "mouseout" || e === "pointerout", E && a !== O0 && (ue = a.relatedTarget || a.fromElement) && (P(ue) || ue[Hi]))
              break e;
            if ((q || E) && (E = R.window === R ? R : (E = R.ownerDocument) ? E.defaultView || E.parentWindow : window, q ? (ue = a.relatedTarget || a.toElement, q = p, ue = ue ? P(ue) : null, ue !== null && (nl = Je(ue), se = ue.tag, ue !== nl || se !== 5 && se !== 27 && se !== 6) && (ue = null)) : (q = null, ue = p), q !== ue)) {
              if (se = A1, O = "onMouseLeave", vt = "onMouseEnter", b = "mouse", (e === "pointerout" || e === "pointerover") && (se = O1, O = "onPointerLeave", vt = "onPointerEnter", b = "pointer"), nl = q == null ? E : ye(q), T = ue == null ? E : ye(ue), E = new se(
                O,
                b + "leave",
                q,
                a,
                R
              ), E.target = nl, E.relatedTarget = T, O = null, P(R) === p && (se = new se(
                vt,
                b + "enter",
                ue,
                a,
                R
              ), se.target = T, se.relatedTarget = nl, O = se), nl = O, q && ue)
                t: {
                  for (se = so, vt = q, b = ue, T = 0, O = vt; O; O = se(O))
                    T++;
                  O = 0;
                  for (var Z = b; Z; Z = se(Z))
                    O++;
                  for (; 0 < T - O; )
                    vt = se(vt), T--;
                  for (; 0 < O - T; )
                    b = se(b), O--;
                  for (; T--; ) {
                    if (vt === b || b !== null && vt === b.alternate) {
                      se = vt;
                      break t;
                    }
                    vt = se(vt), b = se(b);
                  }
                  se = null;
                }
              else se = null;
              q !== null && yh(
                _,
                E,
                q,
                se,
                !1
              ), ue !== null && nl !== null && yh(
                _,
                nl,
                ue,
                se,
                !0
              );
            }
          }
          e: {
            if (E = p ? ye(p) : window, q = E.nodeName && E.nodeName.toLowerCase(), q === "select" || q === "input" && E.type === "file")
              var oe = Zi;
            else if (Hm(E))
              if (U1)
                oe = Os;
              else {
                oe = Nm;
                var Le = Wg;
              }
            else
              q = E.nodeName, !q || q.toLowerCase() !== "input" || E.type !== "checkbox" && E.type !== "radio" ? p && Tu(p.elementType) && (oe = Zi) : oe = xm;
            if (oe && (oe = oe(e, p))) {
              As(
                _,
                oe,
                a,
                R
              );
              break e;
            }
            Le && Le(e, E, p), e === "focusout" && p && E.type === "number" && p.memoizedProps.value != null && Am(E, "number", E.value);
          }
          switch (Le = p ? ye(p) : window, e) {
            case "focusin":
              (Hm(Le) || Le.contentEditable === "true") && (Kh = Le, pS = p, H0 = null);
              break;
            case "focusout":
              H0 = pS = Kh = null;
              break;
            case "mousedown":
              vS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              vS = !1, Cp(
                _,
                a,
                R
              );
              break;
            case "selectionchange":
              if (ME) break;
            case "keydown":
            case "keyup":
              Cp(
                _,
                a,
                R
              );
          }
          var _e;
          if (yS)
            e: {
              switch (e) {
                case "compositionstart":
                  var be = "onCompositionStart";
                  break e;
                case "compositionend":
                  be = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  be = "onCompositionUpdate";
                  break e;
              }
              be = void 0;
            }
          else
            Jh ? Zo(e, a) && (be = "onCompositionEnd") : e === "keydown" && a.keyCode === R1 && (be = "onCompositionStart");
          be && (D1 && a.locale !== "ko" && (Jh || be !== "onCompositionStart" ? be === "onCompositionEnd" && Jh && (_e = xc()) : (Kf = R, rS = "value" in Kf ? Kf.value : Kf.textContent, Jh = !0)), Le = ou(
            p,
            be
          ), 0 < Le.length && (be = new z1(
            be,
            e,
            null,
            a,
            R
          ), _.push({
            event: be,
            listeners: Le
          }), _e ? be.data = _e : (_e = di(a), _e !== null && (be.data = _e)))), (_e = DE ? Um(e, a) : dd(e, a)) && (be = ou(
            p,
            "onBeforeInput"
          ), 0 < be.length && (Le = new rE(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            R
          ), _.push({
            event: Le,
            listeners: be
          }), Le.data = _e)), ht(
            _,
            e,
            p,
            a,
            R
          );
        }
        xt(_, t);
      });
    }
    function Pt(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function ou(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = Au(e, a), o != null && i.unshift(
          Pt(e, o, f)
        ), o = Au(e, t), o != null && i.push(
          Pt(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function so(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function yh(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = Au(a, f), p != null && d.unshift(
          Pt(a, p, y)
        )) : o || (p = Au(a, f), p != null && d.push(
          Pt(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function Ba(e, t) {
      Op(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || E1 || (E1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: Wu,
        possibleRegistrationNames: Zf
      };
      Tu(e) || typeof t.is == "string" || kg(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function yl(e, t, a, i) {
      t !== a && (a = fu(a), fu(t) !== a && (i[e] = t));
    }
    function dr(e, t, a) {
      t.forEach(function(i) {
        a[Di(i)] = i === "style" ? pc(e) : e.getAttribute(i);
      });
    }
    function pl(e, t) {
      t === !1 ? console.error(
        "Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.",
        e,
        e,
        e
      ) : console.error(
        "Expected `%s` listener to be a function, instead got a value of `%s` type.",
        e,
        typeof t
      );
    }
    function ph(e, t) {
      return e = e.namespaceURI === Ze || e.namespaceURI === Ie ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function fu(e) {
      return yt(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        Al(e)
      ), kt(e)), (typeof e == "string" ? e : "" + e).replace(lT, `
`).replace(aT, "");
    }
    function $y(e, t) {
      return t = fu(t), fu(e) === t;
    }
    function Mt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Ss(i, t, !1), t === "body" || t === "textarea" && i === "" || Nc(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Ss("" + i, t, !1), t !== "body" && Nc(e, "" + i));
          break;
        case "className":
          ps(e, "class", i);
          break;
        case "tabIndex":
          ps(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          ps(e, a, i);
          break;
        case "style":
          _m(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            ps(e, "data", i);
            break;
          }
        case "src":
        case "href":
          if (i === "" && (t !== "a" || a !== "href")) {
            console.error(
              a === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
              a,
              a
            ), e.removeAttribute(a);
            break;
          }
          if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Oe(i, a), i = bs("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Ng || (Ng = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Hg || (Hg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Ug ? t !== "button" || o.type == null || o.type === "submit" || Ug ? typeof i == "function" && (o.name == null || i2 || (i2 = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Ng || (Ng = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Hg || (Hg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Ug = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Ug = !0, console.error(
            'An input can only specify a formAction along with type="submit" or type="image".'
          )) : console.error(
            a === "action" ? "You can only pass the action prop to <form>." : "You can only pass the formAction prop to <input> or <button>."
          )), typeof i == "function") {
            e.setAttribute(
              a,
              "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
            );
            break;
          } else
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Mt(e, t, "name", o.name, o, null), Mt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Mt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Mt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Mt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Mt(e, t, "method", o.method, o, null), Mt(
              e,
              t,
              "target",
              o.target,
              o,
              null
            )));
          if (i == null || typeof i == "symbol" || typeof i == "boolean") {
            e.removeAttribute(a);
            break;
          }
          Oe(i, a), i = bs("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && pl(a, i), e.onclick = _n);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && pl(a, i), xe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && pl(a, i), xe("scrollend", e));
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "multiple":
          e.multiple = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "muted":
          e.muted = i && typeof i != "function" && typeof i != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          Oe(i, a), a = bs("" + i), e.setAttributeNS(kr, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Oe(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
          break;
        case "inert":
          i !== "" || xg[a] || (xg[a] = !0, console.error(
            "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
            a
          ));
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
          break;
        case "capture":
        case "download":
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Oe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Oe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Oe(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          xe("beforetoggle", e), xe("toggle", e), Yo(e, "popover", i);
          break;
        case "xlinkActuate":
          Su(
            e,
            kr,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          Su(
            e,
            kr,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          Su(
            e,
            kr,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          Su(
            e,
            kr,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          Su(
            e,
            kr,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          Su(
            e,
            kr,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          Su(
            e,
            s1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          Su(
            e,
            s1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          Su(
            e,
            s1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Yo(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          c2 || i == null || typeof i != "object" || (c2 = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Ap(a), Yo(e, a, i)) : Wu.hasOwnProperty(a) && i != null && typeof i != "function" && pl(a, i);
      }
    }
    function Of(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          _m(e, i, f);
          break;
        case "dangerouslySetInnerHTML":
          if (i != null) {
            if (typeof i != "object" || !("__html" in i))
              throw Error(
                "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://react.dev/link/dangerously-set-inner-html for more information."
              );
            if (a = i.__html, a != null) {
              if (o.children != null)
                throw Error(
                  "Can only set one of `children` or `props.dangerouslySetInnerHTML`."
                );
              e.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof i == "string" ? Nc(e, i) : (typeof i == "number" || typeof i == "bigint") && Nc(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && pl(a, i), xe("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && pl(a, i), xe("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && pl(a, i), e.onclick = _n);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (Wu.hasOwnProperty(a))
            i != null && typeof i != "function" && pl(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Ga] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Yo(e, a, i);
            }
      }
    }
    function ol(e, t, a) {
      switch (Ba(t, a), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          xe("error", e), xe("load", e);
          var i = !1, o = !1, f;
          for (f in a)
            if (a.hasOwnProperty(f)) {
              var d = a[f];
              if (d != null)
                switch (f) {
                  case "src":
                    i = !0;
                    break;
                  case "srcSet":
                    o = !0;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  default:
                    Mt(e, t, f, d, a, null);
                }
            }
          o && Mt(e, t, "srcSet", a.srcSet, a, null), i && Mt(e, t, "src", a.src, a, null);
          return;
        case "input":
          ma("input", a), xe("invalid", e);
          var h = f = d = o = null, y = null, p = null;
          for (i in a)
            if (a.hasOwnProperty(i)) {
              var R = a[i];
              if (R != null)
                switch (i) {
                  case "name":
                    o = R;
                    break;
                  case "type":
                    d = R;
                    break;
                  case "checked":
                    y = R;
                    break;
                  case "defaultChecked":
                    p = R;
                    break;
                  case "value":
                    f = R;
                    break;
                  case "defaultValue":
                    h = R;
                    break;
                  case "children":
                  case "dangerouslySetInnerHTML":
                    if (R != null)
                      throw Error(
                        t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                      );
                    break;
                  default:
                    Mt(e, t, i, R, a, null);
                }
            }
          za(e, a), ad(
            e,
            f,
            h,
            y,
            p,
            d,
            o,
            !1
          );
          return;
        case "select":
          ma("select", a), xe("invalid", e), i = d = f = null;
          for (o in a)
            if (a.hasOwnProperty(o) && (h = a[o], h != null))
              switch (o) {
                case "value":
                  f = h;
                  break;
                case "defaultValue":
                  d = h;
                  break;
                case "multiple":
                  i = h;
                default:
                  Mt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          nd(e, a), t = f, a = d, e.multiple = !!i, t != null ? bu(e, !!i, t, !1) : a != null && bu(e, !!i, a, !0);
          return;
        case "textarea":
          ma("textarea", a), xe("invalid", e), f = o = i = null;
          for (d in a)
            if (a.hasOwnProperty(d) && (h = a[d], h != null))
              switch (d) {
                case "value":
                  i = h;
                  break;
                case "defaultValue":
                  o = h;
                  break;
                case "children":
                  f = h;
                  break;
                case "dangerouslySetInnerHTML":
                  if (h != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  Mt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Mc(e, a), Go(e, i, o, f);
          return;
        case "option":
          Tp(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Mt(e, t, y, i, a, null));
          return;
        case "dialog":
          xe("beforetoggle", e), xe("toggle", e), xe("cancel", e), xe("close", e);
          break;
        case "iframe":
        case "object":
          xe("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < op.length; i++)
            xe(op[i], e);
          break;
        case "image":
          xe("error", e), xe("load", e);
          break;
        case "details":
          xe("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          xe("error", e), xe("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (p in a)
            if (a.hasOwnProperty(p) && (i = a[p], i != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(
                    t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                  );
                default:
                  Mt(e, t, p, i, a, null);
              }
          return;
        default:
          if (Tu(t)) {
            for (R in a)
              a.hasOwnProperty(R) && (i = a[R], i !== void 0 && Of(
                e,
                t,
                R,
                i,
                a,
                void 0
              ));
            return;
          }
      }
      for (h in a)
        a.hasOwnProperty(h) && (i = a[h], i != null && Mt(e, t, h, i, a, null));
    }
    function ql(e, t, a, i) {
      switch (Ba(t, i), t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var o = null, f = null, d = null, h = null, y = null, p = null, R = null;
          for (q in a) {
            var _ = a[q];
            if (a.hasOwnProperty(q) && _ != null)
              switch (q) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = _;
                default:
                  i.hasOwnProperty(q) || Mt(
                    e,
                    t,
                    q,
                    null,
                    i,
                    _
                  );
              }
          }
          for (var E in i) {
            var q = i[E];
            if (_ = a[E], i.hasOwnProperty(E) && (q != null || _ != null))
              switch (E) {
                case "type":
                  f = q;
                  break;
                case "name":
                  o = q;
                  break;
                case "checked":
                  p = q;
                  break;
                case "defaultChecked":
                  R = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  h = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  q !== _ && Mt(
                    e,
                    t,
                    E,
                    q,
                    i,
                    _
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || u2 || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), u2 = !0), !t || i || n2 || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), n2 = !0), Li(
            e,
            d,
            h,
            y,
            p,
            R,
            f,
            o
          );
          return;
        case "select":
          q = d = h = E = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  q = y;
                default:
                  i.hasOwnProperty(f) || Mt(
                    e,
                    t,
                    f,
                    null,
                    i,
                    y
                  );
              }
          for (o in i)
            if (f = i[o], y = a[o], i.hasOwnProperty(o) && (f != null || y != null))
              switch (o) {
                case "value":
                  E = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Mt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = q, E != null ? bu(e, !!t, E, !1) : !!a != !!t && (i != null ? bu(e, !!t, i, !0) : bu(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          q = E = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Mt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  E = o;
                  break;
                case "defaultValue":
                  q = o;
                  break;
                case "children":
                  break;
                case "dangerouslySetInnerHTML":
                  if (o != null)
                    throw Error(
                      "`dangerouslySetInnerHTML` does not make sense on <textarea>."
                    );
                  break;
                default:
                  o !== f && Mt(e, t, d, o, i, f);
              }
          Cc(e, E, q);
          return;
        case "option":
          for (var ue in a)
            E = a[ue], a.hasOwnProperty(ue) && E != null && !i.hasOwnProperty(ue) && (ue === "selected" ? e.selected = !1 : Mt(
              e,
              t,
              ue,
              null,
              i,
              E
            ));
          for (y in i)
            E = i[y], q = a[y], i.hasOwnProperty(y) && E !== q && (E != null || q != null) && (y === "selected" ? e.selected = E && typeof E != "function" && typeof E != "symbol" : Mt(
              e,
              t,
              y,
              E,
              i,
              q
            ));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var se in a)
            E = a[se], a.hasOwnProperty(se) && E != null && !i.hasOwnProperty(se) && Mt(
              e,
              t,
              se,
              null,
              i,
              E
            );
          for (p in i)
            if (E = i[p], q = a[p], i.hasOwnProperty(p) && E !== q && (E != null || q != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (E != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Mt(
                    e,
                    t,
                    p,
                    E,
                    i,
                    q
                  );
              }
          return;
        default:
          if (Tu(t)) {
            for (var nl in a)
              E = a[nl], a.hasOwnProperty(nl) && E !== void 0 && !i.hasOwnProperty(nl) && Of(
                e,
                t,
                nl,
                void 0,
                i,
                E
              );
            for (R in i)
              E = i[R], q = a[R], !i.hasOwnProperty(R) || E === q || E === void 0 && q === void 0 || Of(
                e,
                t,
                R,
                E,
                i,
                q
              );
            return;
          }
      }
      for (var vt in a)
        E = a[vt], a.hasOwnProperty(vt) && E != null && !i.hasOwnProperty(vt) && Mt(e, t, vt, null, i, E);
      for (_ in i)
        E = i[_], q = a[_], !i.hasOwnProperty(_) || E === q || E == null && q == null || Mt(e, t, _, E, i, q);
    }
    function Di(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function pc(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function Vu(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (Dt(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || ge.has(f) ? (Dt(d, f), i += o + f.replace(L, "-$1").toLowerCase().replace(me, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(L, "-$1").toLowerCase().replace(me, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = fu(i), fu(t) !== i && (a.style = pc(e)));
      }
    }
    function Ka(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Oe(i, t), e === "" + i)
              return;
        }
      yl(t, e, i, f);
    }
    function vh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null) {
        switch (typeof i) {
          case "function":
          case "symbol":
            return;
        }
        if (!i) return;
      } else
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (i) return;
        }
      yl(t, e, i, f);
    }
    function gh(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
            break;
          default:
            if (Oe(i, a), e === "" + i)
              return;
        }
      yl(t, e, i, f);
    }
    function Rf(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
          default:
            if (isNaN(i)) return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (!isNaN(i) && (Oe(i, t), e === "" + i))
              return;
        }
      yl(t, e, i, f);
    }
    function hr(e, t, a, i, o, f) {
      if (o.delete(a), e = e.getAttribute(a), e === null)
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            return;
        }
      else if (i != null)
        switch (typeof i) {
          case "function":
          case "symbol":
          case "boolean":
            break;
          default:
            if (Oe(i, t), a = bs("" + i), e === a)
              return;
        }
      yl(t, e, i, f);
    }
    function $a(e, t, a, i) {
      for (var o = {}, f = /* @__PURE__ */ new Set(), d = e.attributes, h = 0; h < d.length; h++)
        switch (d[h].name.toLowerCase()) {
          case "value":
            break;
          case "checked":
            break;
          case "selected":
            break;
          default:
            f.add(d[h].name);
        }
      if (Tu(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (Wu.hasOwnProperty(y))
                typeof p != "function" && pl(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || yl(
                      "children",
                      e.textContent,
                      p,
                      o
                    );
                    continue;
                  case "suppressContentEditableWarning":
                  case "suppressHydrationWarning":
                  case "defaultValue":
                  case "defaultChecked":
                  case "innerHTML":
                  case "ref":
                    continue;
                  case "dangerouslySetInnerHTML":
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = ph(e, p), yl(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), Vu(e, p, o);
                    continue;
                  case "offsetParent":
                  case "offsetTop":
                  case "offsetLeft":
                  case "offsetWidth":
                  case "offsetHeight":
                  case "isContentEditable":
                  case "outerText":
                  case "outerHTML":
                    f.delete(y.toLowerCase()), console.error(
                      "Assignment to read-only property will result in a no-op: `%s`",
                      y
                    );
                    continue;
                  case "className":
                    f.delete("class"), d = Xi(
                      e,
                      "class",
                      p
                    ), yl(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === jo && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = Xi(
                      e,
                      y,
                      p
                    ), yl(
                      y,
                      d,
                      p,
                      o
                    );
                }
            }
          }
      } else
        for (p in a)
          if (a.hasOwnProperty(p) && (y = a[p], y != null)) {
            if (Wu.hasOwnProperty(p))
              typeof y != "function" && pl(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || yl(
                    "children",
                    e.textContent,
                    y,
                    o
                  );
                  continue;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "value":
                case "checked":
                case "selected":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                  continue;
                case "dangerouslySetInnerHTML":
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = ph(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  Ka(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  Ka(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), Vu(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), yl(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), yl(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), yl(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), yl(
                      p,
                      d,
                      y,
                      o
                    );
                    continue;
                  }
                case "src":
                case "href":
                  if (!(y !== "" || t === "a" && p === "href" || t === "object" && p === "data")) {
                    console.error(
                      p === "src" ? 'An empty string ("") was passed to the %s attribute. This may cause the browser to download the whole page again over the network. To fix this, either do not render the element at all or pass null to %s instead of an empty string.' : 'An empty string ("") was passed to the %s attribute. To fix this, either do not render the element at all or pass null to %s instead of an empty string.',
                      p,
                      p
                    );
                    continue;
                  }
                  hr(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "action":
                case "formAction":
                  if (d = e.getAttribute(p), typeof y == "function") {
                    f.delete(p.toLowerCase()), p === "formAction" ? (f.delete("name"), f.delete("formenctype"), f.delete("formmethod"), f.delete("formtarget")) : (f.delete("enctype"), f.delete("method"), f.delete("target"));
                    continue;
                  } else if (d === nT) {
                    f.delete(p.toLowerCase()), yl(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  hr(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  hr(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  gh(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  gh(
                    e,
                    p,
                    "spellcheck",
                    y,
                    f,
                    o
                  );
                  continue;
                case "draggable":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                  gh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                  vh(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "capture":
                case "download":
                  e: {
                    h = e;
                    var R = d = p, _ = o;
                    if (f.delete(R), h = h.getAttribute(R), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                          break e;
                        default:
                          if (y === !1) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                          break;
                        case "boolean":
                          if (y === !0 && h === "") break e;
                          break;
                        default:
                          if (Oe(y, d), h === "" + y)
                            break e;
                      }
                    yl(
                      d,
                      h,
                      y,
                      _
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, R = d = p, _ = o, f.delete(R), h = h.getAttribute(R), h === null)
                      switch (typeof y) {
                        case "undefined":
                        case "function":
                        case "symbol":
                        case "boolean":
                          break e;
                        default:
                          if (isNaN(y) || 1 > y) break e;
                      }
                    else if (y != null)
                      switch (typeof y) {
                        case "function":
                        case "symbol":
                        case "boolean":
                          break;
                        default:
                          if (!(isNaN(y) || 1 > y) && (Oe(y, d), h === "" + y))
                            break e;
                      }
                    yl(
                      d,
                      h,
                      y,
                      _
                    );
                  }
                  continue;
                case "rowSpan":
                  Rf(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Rf(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  Ka(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  Ka(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  Ka(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  Ka(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  Ka(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  Ka(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  Ka(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  Ka(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  Ka(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  Ka(
                    e,
                    p,
                    "xml:space",
                    y,
                    f,
                    o
                  );
                  continue;
                case "inert":
                  y !== "" || xg[p] || (xg[p] = !0, console.error(
                    "Received an empty string for a boolean attribute `%s`. This will treat the attribute as if it were false. Either pass `false` to silence this warning, or pass `true` if you used an empty string in earlier versions of React to indicate this attribute is true.",
                    p
                  )), vh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                default:
                  if (!(2 < p.length) || p[0] !== "o" && p[0] !== "O" || p[1] !== "n" && p[1] !== "N") {
                    h = Ap(p), d = !1, i.context === jo && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (R = p.toLowerCase(), R = hu.hasOwnProperty(
                      R
                    ) && hu[R] || null, R !== null && R !== p && (d = !0, f.delete(R)), f.delete(h));
                    e: if (R = e, _ = h, h = y, Dn(_))
                      if (R.hasAttribute(_))
                        R = R.getAttribute(
                          _
                        ), Oe(
                          h,
                          _
                        ), h = R === "" + h ? h : R;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (R = _.toLowerCase().slice(0, 5), R !== "data-" && R !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || yl(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && dr(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function fv(e, t) {
      switch (e.length) {
        case 0:
          return "";
        case 1:
          return e[0];
        case 2:
          return e[0] + " " + t + " " + e[1];
        default:
          return e.slice(0, -1).join(", ") + ", " + t + " " + e[e.length - 1];
      }
    }
    function qa(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return !0;
        default:
          return !1;
      }
    }
    function sv() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && qa(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var R = y.transferSize, _ = y.initiatorType;
              R && qa(_) && (y = y.responseEnd, d += R * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function mr(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function rv(e) {
      switch (e) {
        case Ie:
          return gm;
        case Ze:
          return Bg;
        default:
          return jo;
      }
    }
    function _i(e, t) {
      if (e === jo)
        switch (t) {
          case "svg":
            return gm;
          case "math":
            return Bg;
          default:
            return jo;
        }
      return e === gm && t === "foreignObject" ? jo : e;
    }
    function Df(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ky() {
      var e = window.event;
      return e && e.type === "popstate" ? e === m1 ? !1 : (m1 = e, !0) : (m1 = null, !1);
    }
    function Zu() {
      var e = window.event;
      return e && e !== rp ? e.type : null;
    }
    function _f() {
      var e = window.event;
      return e && e !== rp ? e.timeStamp : -1.1;
    }
    function dv(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hv(e, t, a) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    }
    function mv() {
    }
    function Sh(e, t, a, i) {
      ql(e, t, a, i), e[Ga] = i;
    }
    function bh(e) {
      Nc(e, "");
    }
    function aS(e, t, a) {
      e.nodeValue = a;
    }
    function yv(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Ga] || null;
        if (t !== null) {
          var a = le(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, fe(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, fe(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function vc(e) {
      return e === "head";
    }
    function pv(e, t) {
      e.removeChild(t);
    }
    function vv(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function ro(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === sp || a === jg) {
            if (i === 0) {
              e.removeChild(o), po(t);
              return;
            }
            i--;
          } else if (a === fp || a === rs || a === Fr || a === vm || a === Wr)
            i++;
          else if (a === iT)
            Ci(
              e.ownerDocument.documentElement
            );
          else if (a === oT) {
            a = e.ownerDocument.head, Ci(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Vf] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === cT && Ci(e.ownerDocument.body);
        a = o;
      } while (a);
      po(t);
    }
    function yr(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === sp) {
            if (e === 0) break;
            e--;
          } else
            a !== fp && a !== rs && a !== Fr && a !== vm || e++;
        a = i;
      } while (a);
    }
    function gv(e) {
      yr(e, !0);
    }
    function Sv(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function bv(e) {
      e.nodeValue = "";
    }
    function Ev(e) {
      yr(e, !1);
    }
    function Tv(e, t) {
      t = t[fT], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Av(e, t) {
      e.nodeValue = t;
    }
    function Mf(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Mf(a), C(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(a);
      }
    }
    function zv(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Vf])
            switch (t) {
              case "meta":
                if (!e.hasAttribute("itemprop")) break;
                return e;
              case "link":
                if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                  break;
                if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                  break;
                return e;
              case "style":
                if (e.hasAttribute("data-precedence")) break;
                return e;
              case "script":
                if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                  break;
                return e;
              default:
                return e;
            }
        } else if (t === "input" && e.type === "hidden") {
          Oe(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = pn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Ov(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = pn(e.nextSibling), e === null)) return null;
      return e;
    }
    function jt(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = pn(e.nextSibling), e === null)) return null;
      return e;
    }
    function pr(e) {
      return e.data === rs || e.data === Fr;
    }
    function Wy(e) {
      return e.data === vm || e.data === rs && e.ownerDocument.readyState !== f2;
    }
    function Rv(e, t) {
      var a = e.ownerDocument;
      if (e.data === Fr)
        e._reactRetry = t;
      else if (e.data !== rs || a.readyState !== f2)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function pn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === fp || t === vm || t === rs || t === Fr || t === Wr || t === r1 || t === o2)
            break;
          if (t === sp || t === jg)
            return null;
        }
      }
      return e;
    }
    function Dv(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[Di(f.name)] = f.name.toLowerCase() === "style" ? pc(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === Wr ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function _v(e, t, a) {
      return a === null || a[uT] !== !0 ? (e.nodeValue === t ? e = null : (t = fu(t), e = fu(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Cf(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === sp || a === jg) {
            if (t === 0)
              return pn(e.nextSibling);
            t--;
          } else
            a !== fp && a !== vm && a !== rs && a !== Fr && a !== Wr || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function ho(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === fp || a === vm || a === rs || a === Fr || a === Wr) {
            if (t === 0) return e;
            t--;
          } else
            a !== sp && a !== jg || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function Fy(e) {
      po(e);
    }
    function Eh(e) {
      po(e);
    }
    function Iy(e) {
      po(e);
    }
    function Mi(e, t, a, i, o) {
      switch (o && gs(e, i.ancestorInfo), t = mr(a), e) {
        case "html":
          if (e = t.documentElement, !e)
            throw Error(
              "React expected an <html> element (document.documentElement) to exist in the Document but one was not found. React never removes the documentElement for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "head":
          if (e = t.head, !e)
            throw Error(
              "React expected a <head> element (document.head) to exist in the Document but one was not found. React never removes the head for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        case "body":
          if (e = t.body, !e)
            throw Error(
              "React expected a <body> element (document.body) to exist in the Document but one was not found. React never removes the body for any Document it renders into so the cause is likely in some other script running on this page."
            );
          return e;
        default:
          throw Error(
            "resolveSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
    }
    function Ju(e, t, a, i) {
      if (!a[Hi] && le(a)) {
        var o = a.tagName.toLowerCase();
        console.error(
          "You are mounting a new %s component when a previous one has not first unmounted. It is an error to render more than one %s component at a time and attributes and children of these components will likely fail in unpredictable ways. Please only render a single instance of <%s> and if you need to mount a new one, ensure any previous ones have unmounted first.",
          o,
          o,
          o
        );
      }
      switch (e) {
        case "html":
        case "head":
        case "body":
          break;
        default:
          console.error(
            "acquireSingletonInstance was called with an element type that is not supported. This is a bug in React."
          );
      }
      for (o = a.attributes; o.length; )
        a.removeAttributeNode(o[0]);
      ol(a, e, t), a[fl] = i, a[Ga] = t;
    }
    function Ci(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      C(e);
    }
    function Th(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function Py(e, t, a) {
      var i = Sm;
      if (i && typeof t == "string" && t) {
        var o = Xt(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), y2.has(o) || (y2.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), ol(t, "link", e), ve(t), i.head.appendChild(t)));
      }
    }
    function e0(e, t, a, i) {
      var o = (o = vn.current) ? Th(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = mo(a.href), t = He(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = mo(a.href);
            var f = He(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: Pr, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              gr(e)
            )) && !f._p && (d.instance = f, d.state.loading = dp | ci), !oi.has(e))) {
              var h = {
                rel: "preload",
                as: "style",
                href: a.href,
                crossOrigin: a.crossOrigin,
                integrity: a.integrity,
                media: a.media,
                hrefLang: a.hrefLang,
                referrerPolicy: a.referrerPolicy
              };
              oi.set(e, h), f || Mv(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + vr(t) + `
  + ` + vr(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + vr(t) + `
  + ` + vr(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = yo(a), t = He(o).hoistableScripts, i = t.get(a), i || (i = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        default:
          throw Error(
            'getResource encountered a type it did not expect: "' + e + '". this is a bug in React.'
          );
      }
    }
    function vr(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : gn.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : gn.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : gn.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function mo(e) {
      return 'href="' + Xt(e) + '"';
    }
    function gr(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Ah(e) {
      return et({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Mv(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = dp : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= dp;
      }), t.addEventListener("error", function() {
        return i.loading |= h2;
      }), ol(t, "link", a), ve(t), e.head.appendChild(t));
    }
    function yo(e) {
      return '[src="' + Xt(e) + '"]';
    }
    function Sr(e) {
      return "script[async]" + e;
    }
    function zh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + Xt(a.href) + '"]'
            );
            if (i)
              return t.instance = i, ve(i), i;
            var o = et({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), ve(i), ol(i, "style", o), Uf(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = mo(a.href);
            var f = e.querySelector(
              gr(o)
            );
            if (f)
              return t.state.loading |= ci, t.instance = f, ve(f), f;
            i = Ah(a), (o = oi.get(o)) && t0(i, o), f = (e.ownerDocument || e).createElement("link"), ve(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), ol(f, "link", i), t.state.loading |= ci, Uf(f, a.precedence, e), t.instance = f;
          case "script":
            return f = yo(a.src), (o = e.querySelector(
              Sr(f)
            )) ? (t.instance = o, ve(o), o) : (i = a, (o = oi.get(f)) && (i = et({}, a), l0(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), ve(o), ol(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & ci) === Pr && (i = t.instance, t.state.loading |= ci, Uf(i, a.precedence, e));
      return t.instance;
    }
    function Uf(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function t0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function l0(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function Hf(e, t, a) {
      if (qg === null) {
        var i = /* @__PURE__ */ new Map(), o = qg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = qg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Vf] || f[fl] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== Ie) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function Cv(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function Uv(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === gm || t.itemProp != null)
        return !i || t.itemProp == null || e !== "meta" && e !== "title" && e !== "style" && e !== "link" && e !== "script" || console.error(
          "Cannot render a <%s> outside the main document if it has an `itemProp` prop. `itemProp` suggests the tag belongs to an `itemScope` which can appear anywhere in the DOM. If you were intending for React to hoist this <%s> remove the `itemProp` prop. Otherwise, try moving this tag into the <head> or <body> of the Document.",
          e,
          e
        ), !1;
      switch (e) {
        case "meta":
        case "title":
          return !0;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") {
            i && console.error(
              'Cannot render a <style> outside the main document without knowing its precedence and a unique href key. React can hoist and deduplicate <style> tags if you provide a `precedence` prop along with an `href` prop that does not conflict with the `href` values used in any other hoisted <style> or <link rel="stylesheet" ...> tags.  Note that hoisting <style> tags is considered an advanced feature that most will not use directly. Consider moving the <style> tag to the <head> or consider adding a `precedence="default"` and `href="some unique resource identifier"`.'
            );
            break;
          }
          return !0;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) {
            if (t.rel === "stylesheet" && typeof t.precedence == "string") {
              e = t.href;
              var o = t.onError, f = t.disabled;
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = fv(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
                'React encountered a <link rel="stylesheet" href="%s" ... /> with a `precedence` prop that also included %s. The presence of loading and error handlers indicates an intent to manage the stylesheet loading state from your from your Component code and React will not hoist or deduplicate this stylesheet. If your intent was to have React hoist and deduplciate this stylesheet using the `precedence` prop remove the %s, otherwise remove the `precedence` prop.',
                e,
                f,
                o
              );
            }
            i && (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" ? console.error(
              "Cannot render a <link> outside the main document without a `rel` and `href` prop. Try adding a `rel` and/or `href` prop to this <link> or moving the link into the <head> tag"
            ) : (t.onError || t.onLoad) && console.error(
              "Cannot render a <link> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ));
            break;
          }
          return t.rel === "stylesheet" ? (e = t.precedence, t = t.disabled, typeof e != "string" && i && console.error(
            'Cannot render a <link rel="stylesheet" /> outside the main document without knowing its precedence. Consider adding precedence="default" or moving it into the root <head> tag.'
          ), typeof e == "string" && t == null) : !0;
        case "script":
          if (e = t.async && typeof t.async != "function" && typeof t.async != "symbol", !e || t.onLoad || t.onError || !t.src || typeof t.src != "string") {
            i && (e ? t.onLoad || t.onError ? console.error(
              "Cannot render a <script> with onLoad or onError listeners outside the main document. Try removing onLoad={...} and onError={...} or moving it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              "Cannot render a <script> outside the main document without `async={true}` and a non-empty `src` prop. Ensure there is a valid `src` and either make the script async or move it into the root <head> tag or somewhere in the <body>."
            ) : console.error(
              'Cannot render a sync or defer <script> outside the main document without knowing its order. Try adding async="" or moving it into the root <head> tag.'
            ));
            break;
          }
          return !0;
        case "noscript":
        case "template":
          i && console.error(
            "Cannot render <%s> outside the main document. Try moving it into the root <head> tag.",
            e
          );
      }
      return !1;
    }
    function ft(e) {
      return !(e.type === "stylesheet" && (e.state.loading & m2) === Pr);
    }
    function a0(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & ci) === Pr) {
        if (a.instance === null) {
          var o = mo(i.href), f = t.querySelector(
            gr(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Nf.bind(e), t.then(e, e)), a.state.loading |= ci, a.instance = f, ve(f);
            return;
          }
          f = t.ownerDocument || t, i = Ah(i), (o = oi.get(o)) && t0(i, o), f = f.createElement("link"), ve(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), ol(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & m2) === Pr && (e.count++, a = Nf.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function Oh(e, t) {
      return e.stylesheets && e.count === 0 && br(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && br(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, dT + t);
        0 < e.imgBytes && p1 === 0 && (p1 = 125 * sv() * mT);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && br(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > p1 ? 50 : hT) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Nf() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          br(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function br(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Yg = /* @__PURE__ */ new Map(), t.forEach(n0, e), Yg = null, Nf.call(e));
    }
    function n0(e, t) {
      if (!(t.state.loading & ci)) {
        var a = Yg.get(e);
        if (a) var i = a.get(v1);
        else {
          a = /* @__PURE__ */ new Map(), Yg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(v1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(v1, o), a.set(d, o), this.count++, i = Nf.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= ci;
      }
    }
    function Er(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = Ir, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ha(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ha(0), this.hiddenUpdates = ha(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function Tr(e, t, a, i, o, f, d, h, y, p, R, _) {
      return e = new Er(
        e,
        t,
        a,
        d,
        y,
        p,
        R,
        _,
        h
      ), t = YE, f === !0 && (t |= Fa | Ni), t |= tt, f = H(3, null, null, t), e.current = f, f.stateNode = e, t = zd(), Qc(t), e.pooledCache = t, Qc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, dt(f), e;
    }
    function Hv(e) {
      return e ? (e = Wf, e) : Wf;
    }
    function Rh(e, t, a, i, o, f) {
      if (Yl && typeof Yl.onScheduleFiberRoot == "function")
        try {
          Yl.onScheduleFiberRoot(bo, i, a);
        } catch (d) {
          $u || ($u = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = Hv(o), i.context === null ? i.context = o : i.pendingContext = o, Ku && Wa !== null && !S2 && (S2 = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        re(Wa) || "Unknown"
      )), i = jl(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Mu(e, i, t), a !== null && (Ru(t, "root.render()", null), Ge(a, e, t), jn(a, e, t));
    }
    function Nv(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function u0(e, t) {
      Nv(e, t), (e = e.alternate) && Nv(e, t);
    }
    function i0(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = ya(e, 67108864);
        t !== null && Ge(t, e, 67108864), u0(e, 67108864);
      }
    }
    function c0(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = va(e);
        t = La(t);
        var a = ya(e, t);
        a !== null && Ge(a, e, t), u0(e, t);
      }
    }
    function Vt() {
      return Wa;
    }
    function o0(e, t, a, i) {
      var o = X.T;
      X.T = null;
      var f = Ct.p;
      try {
        Ct.p = Gl, f0(e, t, a, i);
      } finally {
        Ct.p = f, X.T = o;
      }
    }
    function ca(e, t, a, i) {
      var o = X.T;
      X.T = null;
      var f = Ct.p;
      try {
        Ct.p = fa, f0(e, t, a, i);
      } finally {
        Ct.p = f, X.T = o;
      }
    }
    function f0(e, t, a, i) {
      if (wg) {
        var o = Dh(i);
        if (o === null)
          cu(
            e,
            t,
            i,
            Xg,
            a
          ), Mh(e, i);
        else if (xv(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Mh(e, i), t & 4 && -1 < pT.indexOf(e)) {
          for (; o !== null; ) {
            var f = le(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Ll(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - oa(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      Ja(f), (Et & (ra | vu)) === Ta && (Ag = Fl() + Kb, Lu(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = ya(f, 2), h !== null && Ge(h, f, 2), yn(), u0(f, 2);
              }
            if (f = Dh(i), f === null && cu(
              e,
              t,
              i,
              Xg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          cu(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function Dh(e) {
      return e = Zn(e), s0(e);
    }
    function s0(e) {
      if (Xg = null, e = P(e), e !== null) {
        var t = Je(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = hl(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = Tt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Xg = e, null;
    }
    function _h(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return Gl;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return fa;
        case "message":
          switch (_r()) {
            case b0:
              return Gl;
            case Yh:
              return fa;
            case So:
            case wv:
              return Sa;
            case Gh:
              return Tc;
            default:
              return Sa;
          }
        default:
          return Sa;
      }
    }
    function Mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ds = null;
          break;
        case "dragenter":
        case "dragleave":
          hs = null;
          break;
        case "mouseover":
        case "mouseout":
          ms = null;
          break;
        case "pointerover":
        case "pointerout":
          mp.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          yp.delete(t.pointerId);
      }
    }
    function gc(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = le(t), t !== null && i0(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function xv(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return ds = gc(
            ds,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return hs = gc(
            hs,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ms = gc(
            ms,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return mp.set(
            f,
            gc(
              mp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, yp.set(
            f,
            gc(
              yp.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
      }
      return !1;
    }
    function r0(e) {
      var t = P(e.target);
      if (t !== null) {
        var a = Je(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = hl(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                c0(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = Tt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                c0(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function xf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = Dh(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          O0 !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), O0 = o, a.target.dispatchEvent(i), O0 === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), O0 = null;
        } else
          return t = le(a), t !== null && i0(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function Ch(e, t, a) {
      xf(e) && a.delete(t);
    }
    function nS() {
      g1 = !1, ds !== null && xf(ds) && (ds = null), hs !== null && xf(hs) && (hs = null), ms !== null && xf(ms) && (ms = null), mp.forEach(Ch), yp.forEach(Ch);
    }
    function Ar(e, t) {
      e.blockedOn === t && (e.blockedOn = null, g1 || (g1 = !0, Ml.unstable_scheduleCallback(
        Ml.unstable_NormalPriority,
        nS
      )));
    }
    function jv(e) {
      Lg !== e && (Lg = e, Ml.unstable_scheduleCallback(
        Ml.unstable_NormalPriority,
        function() {
          Lg === e && (Lg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (s0(i || a) === null)
                continue;
              break;
            }
            var f = le(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), Ti(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function po(e) {
      function t(y) {
        return Ar(y, e);
      }
      ds !== null && Ar(ds, e), hs !== null && Ar(hs, e), ms !== null && Ar(ms, e), mp.forEach(t), yp.forEach(t);
      for (var a = 0; a < ys.length; a++) {
        var i = ys[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < ys.length && (a = ys[0], a.blockedOn === null); )
        r0(a), a.blockedOn === null && ys.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Ga] || null;
          if (typeof f == "function")
            d || jv(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Ga] || null)
                h = d.formAction;
              else if (s0(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), jv(a);
          }
        }
    }
    function Bv() {
      function e(f) {
        f.canIntercept && f.info === "react-transition" && f.intercept({
          handler: function() {
            return new Promise(function(d) {
              return o = d;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        o !== null && (o(), o = null), i || setTimeout(a, 20);
      }
      function a() {
        if (!i && !navigation.transition) {
          var f = navigation.currentEntry;
          f && f.url != null && navigation.navigate(f.url, {
            state: f.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var i = !1, o = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          i = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener(
            "navigatesuccess",
            t
          ), navigation.removeEventListener(
            "navigateerror",
            t
          ), o !== null && (o(), o = null);
        };
      }
    }
    function d0(e) {
      this._internalRoot = e;
    }
    function su(e) {
      this._internalRoot = e;
    }
    function h0(e) {
      e[Hi] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var Ml = $2(), zr = bm(), uS = k2(), et = Object.assign, qv = /* @__PURE__ */ Symbol.for("react.element"), Gn = /* @__PURE__ */ Symbol.for("react.transitional.element"), Sc = /* @__PURE__ */ Symbol.for("react.portal"), jf = /* @__PURE__ */ Symbol.for("react.fragment"), Ya = /* @__PURE__ */ Symbol.for("react.strict_mode"), Or = /* @__PURE__ */ Symbol.for("react.profiler"), Uh = /* @__PURE__ */ Symbol.for("react.consumer"), ru = /* @__PURE__ */ Symbol.for("react.context"), Bf = /* @__PURE__ */ Symbol.for("react.forward_ref"), vo = /* @__PURE__ */ Symbol.for("react.suspense"), ka = /* @__PURE__ */ Symbol.for("react.suspense_list"), Rr = /* @__PURE__ */ Symbol.for("react.memo"), ga = /* @__PURE__ */ Symbol.for("react.lazy"), du = /* @__PURE__ */ Symbol.for("react.activity"), iS = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Yv = Symbol.iterator, qf = /* @__PURE__ */ Symbol.for("react.client.reference"), Nl = Array.isArray, X = zr.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ct = uS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, cS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), m0 = [], y0 = [], Ui = -1, bc = Bt(null), Yf = Bt(null), vn = Bt(null), Ec = Bt(null), Gf = 0, Gv, go, wf, p0, Dr, Hh, Nh;
    Ee.__reactDisabledLog = !0;
    var Xf, v0, xh = !1, g0 = new (typeof WeakMap == "function" ? WeakMap : Map)(), Wa = null, Ku = !1, gn = Object.prototype.hasOwnProperty, S0 = Ml.unstable_scheduleCallback, jh = Ml.unstable_cancelCallback, Bh = Ml.unstable_shouldYield, qh = Ml.unstable_requestPaint, Fl = Ml.unstable_now, _r = Ml.unstable_getCurrentPriorityLevel, b0 = Ml.unstable_ImmediatePriority, Yh = Ml.unstable_UserBlockingPriority, So = Ml.unstable_NormalPriority, wv = Ml.unstable_LowPriority, Gh = Ml.unstable_IdlePriority, E0 = Ml.log, Xv = Ml.unstable_setDisableYieldValue, bo = null, Yl = null, $u = !1, ku = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", oa = Math.clz32 ? Math.clz32 : ua, T0 = Math.log, wh = Math.LN2, Lf = 256, Mr = 262144, Qf = 4194304, Gl = 2, fa = 8, Sa = 32, Tc = 268435456, wn = Math.random().toString(36).slice(2), fl = "__reactFiber$" + wn, Ga = "__reactProps$" + wn, Hi = "__reactContainer$" + wn, Eo = "__reactEvents$" + wn, oS = "__reactListeners$" + wn, Lv = "__reactHandles$" + wn, Cr = "__reactResources$" + wn, Vf = "__reactMarker$" + wn, Qv = /* @__PURE__ */ new Set(), Wu = {}, Zf = {}, Vv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, Jf = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), A0 = {}, Xh = {}, Lh = /[\n"\\]/g, z0 = !1, Zv = !1, Ur = !1, l = !1, n = !1, u = !1, c = ["value", "defaultValue"], s = !1, r = /["'&<>\n\t]|^\s|\s$/, m = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), g = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), A = g.concat(["button"]), j = "dd dt li option optgroup p rp rt".split(" "), V = {
      current: null,
      formTag: null,
      aTagInScope: null,
      buttonTagInScope: null,
      nobrTagInScope: null,
      pTagInButtonScope: null,
      listItemTagAutoclosing: null,
      dlItemTagAutoclosing: null,
      containerTagInScope: null,
      implicitRootScope: !1
    }, $ = {}, B = {
      animation: "animationDelay animationDirection animationDuration animationFillMode animationIterationCount animationName animationPlayState animationTimingFunction".split(
        " "
      ),
      background: "backgroundAttachment backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPositionX backgroundPositionY backgroundRepeat backgroundSize".split(
        " "
      ),
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: "borderBottomColor borderBottomStyle borderBottomWidth borderImageOutset borderImageRepeat borderImageSlice borderImageSource borderImageWidth borderLeftColor borderLeftStyle borderLeftWidth borderRightColor borderRightStyle borderRightWidth borderTopColor borderTopStyle borderTopWidth".split(
        " "
      ),
      borderBlockEnd: [
        "borderBlockEndColor",
        "borderBlockEndStyle",
        "borderBlockEndWidth"
      ],
      borderBlockStart: [
        "borderBlockStartColor",
        "borderBlockStartStyle",
        "borderBlockStartWidth"
      ],
      borderBottom: [
        "borderBottomColor",
        "borderBottomStyle",
        "borderBottomWidth"
      ],
      borderColor: [
        "borderBottomColor",
        "borderLeftColor",
        "borderRightColor",
        "borderTopColor"
      ],
      borderImage: [
        "borderImageOutset",
        "borderImageRepeat",
        "borderImageSlice",
        "borderImageSource",
        "borderImageWidth"
      ],
      borderInlineEnd: [
        "borderInlineEndColor",
        "borderInlineEndStyle",
        "borderInlineEndWidth"
      ],
      borderInlineStart: [
        "borderInlineStartColor",
        "borderInlineStartStyle",
        "borderInlineStartWidth"
      ],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: [
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
        "borderTopLeftRadius",
        "borderTopRightRadius"
      ],
      borderRight: [
        "borderRightColor",
        "borderRightStyle",
        "borderRightWidth"
      ],
      borderStyle: [
        "borderBottomStyle",
        "borderLeftStyle",
        "borderRightStyle",
        "borderTopStyle"
      ],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: [
        "borderBottomWidth",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth"
      ],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: "fontFamily fontFeatureSettings fontKerning fontLanguageOverride fontSize fontSizeAdjust fontStretch fontStyle fontVariant fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition fontWeight lineHeight".split(
        " "
      ),
      fontVariant: "fontVariantAlternates fontVariantCaps fontVariantEastAsian fontVariantLigatures fontVariantNumeric fontVariantPosition".split(
        " "
      ),
      gap: ["columnGap", "rowGap"],
      grid: "gridAutoColumns gridAutoFlow gridAutoRows gridTemplateAreas gridTemplateColumns gridTemplateRows".split(
        " "
      ),
      gridArea: [
        "gridColumnEnd",
        "gridColumnStart",
        "gridRowEnd",
        "gridRowStart"
      ],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: [
        "gridTemplateAreas",
        "gridTemplateColumns",
        "gridTemplateRows"
      ],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: "maskClip maskComposite maskImage maskMode maskOrigin maskPositionX maskPositionY maskRepeat maskSize".split(
        " "
      ),
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: [
        "textDecorationColor",
        "textDecorationLine",
        "textDecorationStyle"
      ],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: [
        "transitionDelay",
        "transitionDuration",
        "transitionProperty",
        "transitionTimingFunction"
      ],
      wordWrap: ["overflowWrap"]
    }, L = /([A-Z])/g, me = /^ms-/, Ce = /^(?:webkit|moz|o)[A-Z]/, Zt = /^-ms-/, U = /-(.)/g, D = /;\s*$/, x = {}, K = {}, Re = !1, bt = !1, ge = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), Ze = "http://www.w3.org/1998/Math/MathML", Ie = "http://www.w3.org/2000/svg", zt = /* @__PURE__ */ new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"]
    ]), hu = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      fetchpriority: "fetchPriority",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      inert: "inert",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      popover: "popover",
      popovertarget: "popoverTarget",
      popovertargetaction: "popoverTargetAction",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      transformorigin: "transformOrigin",
      "transform-origin": "transformOrigin",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Jv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0,
      "aria-braillelabel": 0,
      "aria-brailleroledescription": 0,
      "aria-colindextext": 0,
      "aria-rowindextext": 0
    }, Qh = {}, W2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), F2 = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), E1 = !1, Sn = {}, T1 = /^on./, I2 = /^on[^A-Z]/, P2 = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), eE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), tE = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, O0 = null, Vh = null, Zh = null, fS = !1, Ac = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sS = !1;
    if (Ac)
      try {
        var R0 = {};
        Object.defineProperty(R0, "passive", {
          get: function() {
            sS = !0;
          }
        }), window.addEventListener("test", R0, R0), window.removeEventListener("test", R0, R0);
      } catch {
        sS = !1;
      }
    var Kf = null, rS = null, Kv = null, Hr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, $v = Vl(Hr), D0 = et({}, Hr, { view: 0, detail: 0 }), lE = Vl(D0), dS, hS, _0, kv = et({}, D0, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ts,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== _0 && (_0 && e.type === "mousemove" ? (dS = e.screenX - _0.screenX, hS = e.screenY - _0.screenY) : hS = dS = 0, _0 = e), dS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : hS;
      }
    }), A1 = Vl(kv), aE = et({}, kv, { dataTransfer: 0 }), nE = Vl(aE), uE = et({}, D0, { relatedTarget: 0 }), mS = Vl(uE), iE = et({}, Hr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), cE = Vl(iE), oE = et({}, Hr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), fE = Vl(oE), sE = et({}, Hr, { data: 0 }), z1 = Vl(
      sE
    ), rE = z1, dE = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, hE = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, mE = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, yE = et({}, D0, {
      key: function(e) {
        if (e.key) {
          var t = dE[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Es(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? hE[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ts,
      charCode: function(e) {
        return e.type === "keypress" ? Es(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Es(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), pE = Vl(yE), vE = et({}, kv, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), O1 = Vl(vE), gE = et({}, D0, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ts
    }), SE = Vl(gE), bE = et({}, Hr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), EE = Vl(bE), TE = et({}, kv, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), AE = Vl(TE), zE = et({}, Hr, {
      newState: 0,
      oldState: 0
    }), OE = Vl(zE), RE = [9, 13, 27, 32], R1 = 229, yS = Ac && "CompositionEvent" in window, M0 = null;
    Ac && "documentMode" in document && (M0 = document.documentMode);
    var DE = Ac && "TextEvent" in window && !M0, D1 = Ac && (!yS || M0 && 8 < M0 && 11 >= M0), _1 = 32, M1 = String.fromCharCode(_1), C1 = !1, Jh = !1, _E = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    }, C0 = null, U0 = null, U1 = !1;
    Ac && (U1 = hd("input") && (!document.documentMode || 9 < document.documentMode));
    var bn = typeof Object.is == "function" ? Object.is : md, ME = Ac && "documentMode" in document && 11 >= document.documentMode, Kh = null, pS = null, H0 = null, vS = !1, $h = {
      animationend: jc("Animation", "AnimationEnd"),
      animationiteration: jc("Animation", "AnimationIteration"),
      animationstart: jc("Animation", "AnimationStart"),
      transitionrun: jc("Transition", "TransitionRun"),
      transitionstart: jc("Transition", "TransitionStart"),
      transitioncancel: jc("Transition", "TransitionCancel"),
      transitionend: jc("Transition", "TransitionEnd")
    }, gS = {}, H1 = {};
    Ac && (H1 = document.createElement("div").style, "AnimationEvent" in window || (delete $h.animationend.animation, delete $h.animationiteration.animation, delete $h.animationstart.animation), "TransitionEvent" in window || delete $h.transitionend.transition);
    var N1 = Bc("animationend"), x1 = Bc("animationiteration"), j1 = Bc("animationstart"), CE = Bc("transitionrun"), UE = Bc("transitionstart"), HE = Bc("transitioncancel"), B1 = Bc("transitionend"), q1 = /* @__PURE__ */ new Map(), SS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    SS.push("scrollEnd");
    var Y1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var NE = performance, G1 = function() {
        return NE.now();
      };
    else {
      var xE = Date;
      G1 = function() {
        return xE.now();
      };
    }
    var bS = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: !0,
          cancelable: !0,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, jE = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", Wv = 0, ES = 1, TS = 2, AS = 3, Fv = "– ", Iv = "+ ", w1 = "  ", sl = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", Fu = "Components ⚛", pt = "Scheduler ⚛", St = "Blocking", $f = !1, To = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: Fu
    }, kf = {
      start: -0,
      end: -0,
      detail: { devtools: To }
    }, BE = ["Changed Props", ""], X1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", qE = ["Changed Props", X1], N0 = 1, Ao = 2, Iu = [], kh = 0, zS = 0, Wf = {};
    Object.freeze(Wf);
    var Pu = null, Wh = null, qe = 0, YE = 1, tt = 2, Fa = 8, Ni = 16, GE = 32, L1 = !1;
    try {
      var Q1 = Object.preventExtensions({});
    } catch {
      L1 = !0;
    }
    var OS = /* @__PURE__ */ new WeakMap(), Fh = [], Ih = 0, Pv = null, x0 = 0, ei = [], ti = 0, Nr = null, zo = 1, Oo = "", wa = null, rl = null, mt = !1, zc = !1, mu = null, Ff = null, li = !1, RS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), DS = Bt(null), _S = Bt(null), V1 = {}, eg = null, Ph = null, em = !1, wE = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: !1,
        addEventListener: function(a, i) {
          e.push(i);
        }
      };
      this.abort = function() {
        t.aborted = !0, e.forEach(function(a) {
          return a();
        });
      };
    }, XE = Ml.unstable_scheduleCallback, LE = Ml.unstable_NormalPriority, Il = {
      $$typeof: ru,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Pl = Ml.unstable_now, tg = console.createTask ? console.createTask : function() {
      return null;
    }, j0 = 1, lg = 2, ba = -0, If = -0, Ro = -0, Do = null, En = -1.1, xr = -0, El = -0, Me = -1.1, Ne = -1.1, vl = null, Cl = !1, jr = -0, Oc = -1.1, B0 = null, Pf = 0, MS = null, CS = null, Br = -1.1, q0 = null, tm = -1.1, ag = -1.1, _o = -0, Mo = -1.1, ai = -1.1, US = 0, Y0 = null, Z1 = null, J1 = null, es = -1.1, qr = null, ts = -1.1, ng = -1.1, K1 = -0, $1 = -0, ug = 0, QE = null, k1 = 0, G0 = -1.1, ig = !1, cg = !1, w0 = null, HS = 0, Yr = 0, lm = null, W1 = X.S;
    X.S = function(e, t) {
      if (Zb = Fl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > Mo && 0 > ai) {
          Mo = Pl();
          var a = _f(), i = Zu();
          (a !== ts || i !== qr) && (ts = -1.1), es = a, qr = i;
        }
        yi(e, t);
      }
      W1 !== null && W1(e, t);
    };
    var Gr = Bt(null), xi = {
      recordUnsafeLifecycleWarnings: function() {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function() {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    }, X0 = [], L0 = [], Q0 = [], V0 = [], Z0 = [], J0 = [], wr = /* @__PURE__ */ new Set();
    xi.recordUnsafeLifecycleWarnings = function(e, t) {
      wr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && X0.push(e), e.mode & Fa && typeof t.UNSAFE_componentWillMount == "function" && L0.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Q0.push(e), e.mode & Fa && typeof t.UNSAFE_componentWillReceiveProps == "function" && V0.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Z0.push(e), e.mode & Fa && typeof t.UNSAFE_componentWillUpdate == "function" && J0.push(e));
    }, xi.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < X0.length && (X0.forEach(function(h) {
        e.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), X0 = []);
      var t = /* @__PURE__ */ new Set();
      0 < L0.length && (L0.forEach(function(h) {
        t.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), L0 = []);
      var a = /* @__PURE__ */ new Set();
      0 < Q0.length && (Q0.forEach(function(h) {
        a.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), Q0 = []);
      var i = /* @__PURE__ */ new Set();
      0 < V0.length && (V0.forEach(
        function(h) {
          i.add(
            re(h) || "Component"
          ), wr.add(h.type);
        }
      ), V0 = []);
      var o = /* @__PURE__ */ new Set();
      0 < Z0.length && (Z0.forEach(function(h) {
        o.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), Z0 = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < J0.length && (J0.forEach(function(h) {
        f.add(
          re(h) || "Component"
        ), wr.add(h.type);
      }), J0 = []), 0 < t.size) {
        var d = G(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = G(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = G(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = G(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = G(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = G(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var og = /* @__PURE__ */ new Map(), F1 = /* @__PURE__ */ new Set();
    xi.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & Fa && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !F1.has(e.type) && (i = og.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], og.set(a, i)), i.push(e));
    }, xi.flushLegacyContextWarning = function() {
      og.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(re(o) || "Component"), F1.add(o.type);
          });
          var i = G(a);
          fe(t, function() {
            console.error(
              `Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://react.dev/link/legacy-context`,
              i
            );
          });
        }
      });
    }, xi.discardPendingWarnings = function() {
      X0 = [], L0 = [], Q0 = [], V0 = [], Z0 = [], J0 = [], og = /* @__PURE__ */ new Map();
    };
    var I1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Ku;
        Ku = !0;
        try {
          return e(t, a);
        } finally {
          Ku = i;
        }
      }
    }, NS = I1.react_stack_bottom_frame.bind(I1), P1 = {
      react_stack_bottom_frame: function(e) {
        var t = Ku;
        Ku = !0;
        try {
          return e.render();
        } finally {
          Ku = t;
        }
      }
    }, eb = P1.react_stack_bottom_frame.bind(P1), tb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Fe(e, e.return, a);
        }
      }
    }, xS = tb.react_stack_bottom_frame.bind(
      tb
    ), lb = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Fe(e, e.return, f);
        }
      }
    }, ab = lb.react_stack_bottom_frame.bind(
      lb
    ), nb = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, VE = nb.react_stack_bottom_frame.bind(
      nb
    ), ub = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Fe(e, t, i);
        }
      }
    }, ib = ub.react_stack_bottom_frame.bind(
      ub
    ), cb = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, ZE = cb.react_stack_bottom_frame.bind(cb), ob = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Fe(e, t, i);
        }
      }
    }, JE = ob.react_stack_bottom_frame.bind(ob), fb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, KE = fb.react_stack_bottom_frame.bind(fb), am = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), jS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), fg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), sg = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Xr = null, K0 = !1, nm = null, $0 = 0, lt = null, BS, sb = BS = !1, rb = {}, db = {}, hb = {};
    Ue = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = re(e), o = i || "null";
        if (!rb[o]) {
          rb[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = re(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = re(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), fe(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Lr = Jl(!0), mb = Jl(!1), yb = 0, pb = 1, vb = 2, qS = 3, ls = !1, gb = !1, YS = null, GS = !1, um = Bt(null), rg = Bt(0), yu = Bt(null), ni = null, im = 1, k0 = 2, wl = Bt(0), dg = 0, ui = 1, Tn = 2, pu = 4, An = 8, cm, Sb = /* @__PURE__ */ new Set(), bb = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), Co = 0, Xe = null, el = null, ea = null, hg = !1, om = !1, Qr = !1, mg = 0, W0 = 0, Uo = null, $E = 0, kE = 25, w = null, ii = null, Ho = -1, F0 = !1, I0 = {
      readContext: _t,
      use: Si,
      useCallback: Sl,
      useContext: Sl,
      useEffect: Sl,
      useImperativeHandle: Sl,
      useLayoutEffect: Sl,
      useInsertionEffect: Sl,
      useMemo: Sl,
      useReducer: Sl,
      useRef: Sl,
      useState: Sl,
      useDebugValue: Sl,
      useDeferredValue: Sl,
      useTransition: Sl,
      useSyncExternalStore: Sl,
      useId: Sl,
      useHostTransitionStatus: Sl,
      useFormState: Sl,
      useActionState: Sl,
      useOptimistic: Sl,
      useMemoCache: Sl,
      useCacheRefresh: Sl
    };
    I0.useEffectEvent = Sl;
    var XS = null, Tb = null, LS = null, Ab = null, Rc = null, ji = null, yg = null;
    XS = {
      readContext: function(e) {
        return _t(e);
      },
      use: Si,
      useCallback: function(e, t) {
        return w = "useCallback", we(), gi(t), jd(e, t);
      },
      useContext: function(e) {
        return w = "useContext", we(), _t(e);
      },
      useEffect: function(e, t) {
        return w = "useEffect", we(), gi(t), Pc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", we(), gi(a), Nu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        w = "useInsertionEffect", we(), gi(t), cc(4, Tn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", we(), gi(t), Ca(e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", we(), gi(t);
        var a = X.H;
        X.H = Rc;
        try {
          return Ua(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", we();
        var i = X.H;
        X.H = Rc;
        try {
          return af(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return w = "useRef", we(), xd(e);
      },
      useState: function(e) {
        w = "useState", we();
        var t = X.H;
        X.H = Rc;
        try {
          return ac(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", we();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", we(), ff(e, t);
      },
      useTransition: function() {
        return w = "useTransition", we(), oc();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", we(), nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", we(), Js();
      },
      useFormState: function(e, t) {
        return w = "useFormState", we(), js(), sn(e, t);
      },
      useActionState: function(e, t) {
        return w = "useActionState", we(), sn(e, t);
      },
      useOptimistic: function(e) {
        return w = "useOptimistic", we(), Ic(e);
      },
      useHostTransitionStatus: Ai,
      useMemoCache: on,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", we(), Bd();
      },
      useEffectEvent: function(e) {
        return w = "useEffectEvent", we(), Vs(e);
      }
    }, Tb = {
      readContext: function(e) {
        return _t(e);
      },
      use: Si,
      useCallback: function(e, t) {
        return w = "useCallback", k(), jd(e, t);
      },
      useContext: function(e) {
        return w = "useContext", k(), _t(e);
      },
      useEffect: function(e, t) {
        return w = "useEffect", k(), Pc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", k(), Nu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        w = "useInsertionEffect", k(), cc(4, Tn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", k(), Ca(e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", k();
        var a = X.H;
        X.H = Rc;
        try {
          return Ua(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", k();
        var i = X.H;
        X.H = Rc;
        try {
          return af(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return w = "useRef", k(), xd(e);
      },
      useState: function(e) {
        w = "useState", k();
        var t = X.H;
        X.H = Rc;
        try {
          return ac(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", k(), ff(e, t);
      },
      useTransition: function() {
        return w = "useTransition", k(), oc();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", k(), nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", k(), Js();
      },
      useActionState: function(e, t) {
        return w = "useActionState", k(), sn(e, t);
      },
      useFormState: function(e, t) {
        return w = "useFormState", k(), js(), sn(e, t);
      },
      useOptimistic: function(e) {
        return w = "useOptimistic", k(), Ic(e);
      },
      useHostTransitionStatus: Ai,
      useMemoCache: on,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Bd();
      },
      useEffectEvent: function(e) {
        return w = "useEffectEvent", k(), Vs(e);
      }
    }, LS = {
      readContext: function(e) {
        return _t(e);
      },
      use: Si,
      useCallback: function(e, t) {
        return w = "useCallback", k(), lu(e, t);
      },
      useContext: function(e) {
        return w = "useContext", k(), _t(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", k(), Bl(2048, An, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", k(), of(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", k(), Bl(4, Tn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", k(), Bl(4, pu, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", k();
        var a = X.H;
        X.H = ji;
        try {
          return cl(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", k();
        var i = X.H;
        X.H = ji;
        try {
          return kc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", k(), Ht().memoizedState;
      },
      useState: function() {
        w = "useState", k();
        var e = X.H;
        X.H = ji;
        try {
          return kc(fn);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", k(), xu(e, t);
      },
      useTransition: function() {
        return w = "useTransition", k(), Vp();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", k(), Fc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", k(), Ht().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", k(), js(), uc(e);
      },
      useActionState: function(e) {
        return w = "useActionState", k(), uc(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", k(), Xs(e, t);
      },
      useHostTransitionStatus: Ai,
      useMemoCache: on,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Ht().memoizedState;
      },
      useEffectEvent: function(e) {
        return w = "useEffectEvent", k(), cf(e);
      }
    }, Ab = {
      readContext: function(e) {
        return _t(e);
      },
      use: Si,
      useCallback: function(e, t) {
        return w = "useCallback", k(), lu(e, t);
      },
      useContext: function(e) {
        return w = "useContext", k(), _t(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", k(), Bl(2048, An, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", k(), of(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", k(), Bl(4, Tn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", k(), Bl(4, pu, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", k();
        var a = X.H;
        X.H = yg;
        try {
          return cl(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", k();
        var i = X.H;
        X.H = yg;
        try {
          return Wc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", k(), Ht().memoizedState;
      },
      useState: function() {
        w = "useState", k();
        var e = X.H;
        X.H = yg;
        try {
          return Wc(fn);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", k();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", k(), Ke(e, t);
      },
      useTransition: function() {
        return w = "useTransition", k(), ml();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", k(), Fc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", k(), Ht().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", k(), js(), ic(e);
      },
      useActionState: function(e) {
        return w = "useActionState", k(), ic(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", k(), Ls(e, t);
      },
      useHostTransitionStatus: Ai,
      useMemoCache: on,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Ht().memoizedState;
      },
      useEffectEvent: function(e) {
        return w = "useEffectEvent", k(), cf(e);
      }
    }, Rc = {
      readContext: function(e) {
        return ae(), _t(e);
      },
      use: function(e) {
        return I(), Si(e);
      },
      useCallback: function(e, t) {
        return w = "useCallback", I(), we(), jd(e, t);
      },
      useContext: function(e) {
        return w = "useContext", I(), we(), _t(e);
      },
      useEffect: function(e, t) {
        return w = "useEffect", I(), we(), Pc(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", I(), we(), Nu(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        w = "useInsertionEffect", I(), we(), cc(4, Tn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", I(), we(), Ca(e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", I(), we();
        var a = X.H;
        X.H = Rc;
        try {
          return Ua(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", I(), we();
        var i = X.H;
        X.H = Rc;
        try {
          return af(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function(e) {
        return w = "useRef", I(), we(), xd(e);
      },
      useState: function(e) {
        w = "useState", I(), we();
        var t = X.H;
        X.H = Rc;
        try {
          return ac(e);
        } finally {
          X.H = t;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", I(), we();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", I(), we(), ff(e, t);
      },
      useTransition: function() {
        return w = "useTransition", I(), we(), oc();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", I(), we(), nf(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", I(), we(), Js();
      },
      useFormState: function(e, t) {
        return w = "useFormState", I(), we(), sn(e, t);
      },
      useActionState: function(e, t) {
        return w = "useActionState", I(), we(), sn(e, t);
      },
      useOptimistic: function(e) {
        return w = "useOptimistic", I(), we(), Ic(e);
      },
      useMemoCache: function(e) {
        return I(), on(e);
      },
      useHostTransitionStatus: Ai,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", we(), Bd();
      },
      useEffectEvent: function(e) {
        return w = "useEffectEvent", I(), we(), Vs(e);
      }
    }, ji = {
      readContext: function(e) {
        return ae(), _t(e);
      },
      use: function(e) {
        return I(), Si(e);
      },
      useCallback: function(e, t) {
        return w = "useCallback", I(), k(), lu(e, t);
      },
      useContext: function(e) {
        return w = "useContext", I(), k(), _t(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", I(), k(), Bl(2048, An, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", I(), k(), of(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", I(), k(), Bl(4, Tn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", I(), k(), Bl(4, pu, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", I(), k();
        var a = X.H;
        X.H = ji;
        try {
          return cl(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", I(), k();
        var i = X.H;
        X.H = ji;
        try {
          return kc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", I(), k(), Ht().memoizedState;
      },
      useState: function() {
        w = "useState", I(), k();
        var e = X.H;
        X.H = ji;
        try {
          return kc(fn);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", I(), k();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", I(), k(), xu(e, t);
      },
      useTransition: function() {
        return w = "useTransition", I(), k(), Vp();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", I(), k(), Fc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", I(), k(), Ht().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", I(), k(), uc(e);
      },
      useActionState: function(e) {
        return w = "useActionState", I(), k(), uc(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", I(), k(), Xs(e, t);
      },
      useMemoCache: function(e) {
        return I(), on(e);
      },
      useHostTransitionStatus: Ai,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Ht().memoizedState;
      },
      useEffectEvent: function(e) {
        return w = "useEffectEvent", I(), k(), cf(e);
      }
    }, yg = {
      readContext: function(e) {
        return ae(), _t(e);
      },
      use: function(e) {
        return I(), Si(e);
      },
      useCallback: function(e, t) {
        return w = "useCallback", I(), k(), lu(e, t);
      },
      useContext: function(e) {
        return w = "useContext", I(), k(), _t(e);
      },
      useEffect: function(e, t) {
        w = "useEffect", I(), k(), Bl(2048, An, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return w = "useImperativeHandle", I(), k(), of(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return w = "useInsertionEffect", I(), k(), Bl(4, Tn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return w = "useLayoutEffect", I(), k(), Bl(4, pu, e, t);
      },
      useMemo: function(e, t) {
        w = "useMemo", I(), k();
        var a = X.H;
        X.H = ji;
        try {
          return cl(e, t);
        } finally {
          X.H = a;
        }
      },
      useReducer: function(e, t, a) {
        w = "useReducer", I(), k();
        var i = X.H;
        X.H = ji;
        try {
          return Wc(e, t, a);
        } finally {
          X.H = i;
        }
      },
      useRef: function() {
        return w = "useRef", I(), k(), Ht().memoizedState;
      },
      useState: function() {
        w = "useState", I(), k();
        var e = X.H;
        X.H = ji;
        try {
          return Wc(fn);
        } finally {
          X.H = e;
        }
      },
      useDebugValue: function() {
        w = "useDebugValue", I(), k();
      },
      useDeferredValue: function(e, t) {
        return w = "useDeferredValue", I(), k(), Ke(e, t);
      },
      useTransition: function() {
        return w = "useTransition", I(), k(), ml();
      },
      useSyncExternalStore: function(e, t, a) {
        return w = "useSyncExternalStore", I(), k(), Fc(
          e,
          t,
          a
        );
      },
      useId: function() {
        return w = "useId", I(), k(), Ht().memoizedState;
      },
      useFormState: function(e) {
        return w = "useFormState", I(), k(), ic(e);
      },
      useActionState: function(e) {
        return w = "useActionState", I(), k(), ic(e);
      },
      useOptimistic: function(e, t) {
        return w = "useOptimistic", I(), k(), Ls(e, t);
      },
      useMemoCache: function(e) {
        return I(), on(e);
      },
      useHostTransitionStatus: Ai,
      useCacheRefresh: function() {
        return w = "useCacheRefresh", k(), Ht().memoizedState;
      },
      useEffectEvent: function(e) {
        return w = "useEffectEvent", I(), k(), cf(e);
      }
    };
    var zb = {}, Ob = /* @__PURE__ */ new Set(), Rb = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set();
    Object.freeze(zb);
    var QS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = va(e), o = jl(i);
        o.payload = t, a != null && (ao(a), o.callback = a), t = Mu(e, o, i), t !== null && (Ru(i, "this.setState()", e), Ge(t, e, i), jn(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = va(e), o = jl(i);
        o.tag = pb, o.payload = t, a != null && (ao(a), o.callback = a), t = Mu(e, o, i), t !== null && (Ru(i, "this.replaceState()", e), Ge(t, e, i), jn(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = va(e), i = jl(a);
        i.tag = vb, t != null && (ao(t), i.callback = t), t = Mu(e, i, a), t !== null && (Ru(a, "this.forceUpdate()", e), Ge(t, e, a), jn(t, e, a));
      }
    }, fm = null, VS = null, ZS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), ta = !1, jb = {}, Bb = {}, qb = {}, Yb = {}, sm = !1, Gb = {}, pg = {}, JS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, wb = !1, Xb = null;
    Xb = /* @__PURE__ */ new Set();
    var No = !1, la = !1, KS = !1, Lb = typeof WeakSet == "function" ? WeakSet : Set, Ea = null, rm = null, dm = null, aa = null, Xn = !1, Bi = null, sa = !1, P0 = 8192, WE = {
      getCacheForType: function(e) {
        var t = _t(Il), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return _t(Il).controller.signal;
      },
      getOwner: function() {
        return Wa;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var ep = Symbol.for;
      ep("selector.component"), ep("selector.has_pseudo_class"), ep("selector.role"), ep("selector.test_id"), ep("selector.text");
    }
    var FE = [], IE = typeof WeakMap == "function" ? WeakMap : Map, Ta = 0, ra = 2, vu = 4, xo = 0, tp = 1, Vr = 2, vg = 3, as = 4, gg = 6, Qb = 5, Et = Ta, tl = null, ot = null, at = 0, Ln = 0, Sg = 1, Zr = 2, lp = 3, Vb = 4, $S = 5, ap = 6, bg = 7, kS = 8, Jr = 9, Jt = Ln, gu = null, ns = !1, hm = !1, WS = !1, Dc = 0, Tl = xo, us = 0, is = 0, FS = 0, Qn = 0, Kr = 0, np = null, zn = null, Eg = !1, Tg = 0, Zb = 0, Jb = 300, Ag = 1 / 0, Kb = 500, up = null, xl = null, cs = null, zg = 0, IS = 1, PS = 2, $b = 3, os = 0, kb = 1, Wb = 2, Fb = 3, Ib = 4, Og = 5, na = 0, fs = null, mm = null, qi = 0, e1 = 0, t1 = -0, l1 = null, Pb = null, e2 = null, Yi = zg, t2 = null, PE = 50, ip = 0, a1 = null, n1 = !1, Rg = !1, eT = 50, $r = 0, cp = null, ym = !1, Dg = null, l2 = !1, a2 = /* @__PURE__ */ new Set(), tT = {}, _g = null, pm = null, u1 = !1, i1 = !1, Mg = !1, c1 = !1, ss = 0, o1 = {};
    (function() {
      for (var e = 0; e < SS.length; e++) {
        var t = SS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Jn(a, "on" + t);
      }
      Jn(N1, "onAnimationEnd"), Jn(x1, "onAnimationIteration"), Jn(j1, "onAnimationStart"), Jn("dblclick", "onDoubleClick"), Jn("focusin", "onFocus"), Jn("focusout", "onBlur"), Jn(CE, "onTransitionRun"), Jn(UE, "onTransitionStart"), Jn(HE, "onTransitionCancel"), Jn(B1, "onTransitionEnd");
    })(), Ve("onMouseEnter", ["mouseout", "mouseover"]), Ve("onMouseLeave", ["mouseout", "mouseover"]), Ve("onPointerEnter", ["pointerout", "pointerover"]), Ve("onPointerLeave", ["pointerout", "pointerover"]), it(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), it(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), it("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), it(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), it(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), it(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var op = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), f1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(op)
    ), Cg = "_reactListening" + Math.random().toString(36).slice(2), n2 = !1, u2 = !1, Ug = !1, i2 = !1, Hg = !1, Ng = !1, c2 = !1, xg = {}, lT = /\r\n?/g, aT = /\u0000|\uFFFD/g, kr = "http://www.w3.org/1999/xlink", s1 = "http://www.w3.org/XML/1998/namespace", nT = "javascript:throw new Error('React form unexpectedly submitted.')", uT = "suppressHydrationWarning", Wr = "&", jg = "/&", fp = "$", sp = "/$", rs = "$?", Fr = "$~", vm = "$!", iT = "html", cT = "body", oT = "head", r1 = "F!", o2 = "F", f2 = "loading", fT = "style", jo = 0, gm = 1, Bg = 2, d1 = null, h1 = null, s2 = { dialog: !0, webview: !0 }, m1 = null, rp = void 0, r2 = typeof setTimeout == "function" ? setTimeout : void 0, sT = typeof clearTimeout == "function" ? clearTimeout : void 0, Ir = -1, d2 = typeof Promise == "function" ? Promise : void 0, rT = typeof queueMicrotask == "function" ? queueMicrotask : typeof d2 < "u" ? function(e) {
      return d2.resolve(null).then(e).catch(dv);
    } : r2, y1 = null, Pr = 0, dp = 1, h2 = 2, m2 = 3, ci = 4, oi = /* @__PURE__ */ new Map(), y2 = /* @__PURE__ */ new Set(), Bo = Ct.d;
    Ct.d = {
      f: function() {
        var e = Bo.f(), t = yn();
        return e || t;
      },
      r: function(e) {
        var t = le(e);
        t !== null && t.tag === 5 && t.type === "form" ? sf(t) : Bo.r(e);
      },
      D: function(e) {
        Bo.D(e), Py("dns-prefetch", e, null);
      },
      C: function(e, t) {
        Bo.C(e, t), Py("preconnect", e, t);
      },
      L: function(e, t, a) {
        Bo.L(e, t, a);
        var i = Sm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + Xt(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Xt(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + Xt(
            a.imageSizes
          ) + '"]')) : o += '[href="' + Xt(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = mo(e);
              break;
            case "script":
              f = yo(e);
          }
          oi.has(f) || (e = et(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), oi.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            gr(f)
          ) || t === "script" && i.querySelector(Sr(f)) || (t = i.createElement("link"), ol(t, "link", e), ve(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        Bo.m(e, t);
        var a = Sm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + Xt(i) + '"][href="' + Xt(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = yo(e);
          }
          if (!oi.has(f) && (e = et({ rel: "modulepreload", href: e }, t), oi.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(Sr(f)))
                  return;
            }
            i = a.createElement("link"), ol(i, "link", e), ve(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        Bo.X(e, t);
        var a = Sm;
        if (a && e) {
          var i = He(a).hoistableScripts, o = yo(e), f = i.get(o);
          f || (f = a.querySelector(
            Sr(o)
          ), f || (e = et({ src: e, async: !0 }, t), (t = oi.get(o)) && l0(e, t), f = a.createElement("script"), ve(f), ol(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        Bo.S(e, t, a);
        var i = Sm;
        if (i && e) {
          var o = He(i).hoistableStyles, f = mo(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: Pr, preload: null };
            if (d = i.querySelector(
              gr(f)
            ))
              h.loading = dp | ci;
            else {
              e = et(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = oi.get(f)) && t0(e, a);
              var y = d = i.createElement("link");
              ve(y), ol(y, "link", e), y._p = new Promise(function(p, R) {
                y.onload = p, y.onerror = R;
              }), y.addEventListener("load", function() {
                h.loading |= dp;
              }), y.addEventListener("error", function() {
                h.loading |= h2;
              }), h.loading |= ci, Uf(d, t, i);
            }
            d = {
              type: "stylesheet",
              instance: d,
              count: 1,
              state: h
            }, o.set(f, d);
          }
        }
      },
      M: function(e, t) {
        Bo.M(e, t);
        var a = Sm;
        if (a && e) {
          var i = He(a).hoistableScripts, o = yo(e), f = i.get(o);
          f || (f = a.querySelector(
            Sr(o)
          ), f || (e = et({ src: e, async: !0, type: "module" }, t), (t = oi.get(o)) && l0(e, t), f = a.createElement("script"), ve(f), ol(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Sm = typeof document > "u" ? null : document, qg = null, dT = 6e4, hT = 800, mT = 500, p1 = 0, v1 = null, Yg = null, ed = cS, hp = {
      $$typeof: ru,
      Provider: null,
      Consumer: null,
      _currentValue: ed,
      _currentValue2: ed,
      _threadCount: 0
    }, p2 = "%c%s%c", v2 = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", g2 = "", Gg = " ", yT = Function.prototype.bind, S2 = !1, b2 = null, E2 = null, T2 = null, A2 = null, z2 = null, O2 = null, R2 = null, D2 = null, _2 = null, M2 = null;
    b2 = function(e, t, a, i) {
      t = Y(e, t), t !== null && (a = te(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = et({}, e.memoizedProps), a = ya(e, 2), a !== null && Ge(a, e, 2));
    }, E2 = function(e, t, a) {
      t = Y(e, t), t !== null && (a = Ae(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = et({}, e.memoizedProps), a = ya(e, 2), a !== null && Ge(a, e, 2));
    }, T2 = function(e, t, a, i) {
      t = Y(e, t), t !== null && (a = Se(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = et({}, e.memoizedProps), a = ya(e, 2), a !== null && Ge(a, e, 2));
    }, A2 = function(e, t, a) {
      e.pendingProps = te(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ya(e, 2), t !== null && Ge(t, e, 2);
    }, z2 = function(e, t) {
      e.pendingProps = Ae(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ya(e, 2), t !== null && Ge(t, e, 2);
    }, O2 = function(e, t, a) {
      e.pendingProps = Se(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = ya(e, 2), t !== null && Ge(t, e, 2);
    }, R2 = function(e) {
      var t = ya(e, 2);
      t !== null && Ge(t, e, 2);
    }, D2 = function(e) {
      var t = On(), a = ya(e, t);
      a !== null && Ge(a, e, t);
    }, _2 = function(e) {
      $e = e;
    }, M2 = function(e) {
      de = e;
    };
    var wg = !0, Xg = null, g1 = !1, ds = null, hs = null, ms = null, mp = /* @__PURE__ */ new Map(), yp = /* @__PURE__ */ new Map(), ys = [], pT = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), Lg = null;
    if (su.prototype.render = d0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : ut(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = va(i);
      Rh(i, o, a, t, null, null);
    }, su.prototype.unmount = d0.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Et & (ra | vu)) !== Ta && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), Rh(e.current, 2, null, e, null, null), yn(), t[Hi] = null;
      }
    }, su.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = wi();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < ys.length && t !== 0 && t < ys[a].priority; a++) ;
        ys.splice(a, 0, e), a === 0 && r0(e);
      }
    }, (function() {
      var e = zr.version;
      if (e !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ct.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Yt(t), e = e !== null ? Gt(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: X,
        reconcilerVersion: "19.2.3"
      };
      return e.overrideHookState = b2, e.overrideHookStateDeletePath = E2, e.overrideHookStateRenamePath = T2, e.overrideProps = A2, e.overridePropsDeletePath = z2, e.overridePropsRenamePath = O2, e.scheduleUpdate = R2, e.scheduleRetry = D2, e.setErrorHandler = _2, e.setSuspenseHandler = M2, e.scheduleRefresh = je, e.scheduleRoot = ie, e.setRefreshHandler = gt, e.getCurrentFiber = Vt, Wt(e);
    })() && Ac && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var C2 = window.location.protocol;
      /^(https?|file):$/.test(C2) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (C2 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Sp.createRoot = function(e, t) {
      if (!ut(e))
        throw Error("Target container is not a DOM element.");
      h0(e);
      var a = !1, i = "", o = Gd, f = wd, d = cy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Gn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = Tr(
        e,
        1,
        !1,
        null,
        null,
        a,
        i,
        null,
        o,
        f,
        d,
        Bv
      ), e[Hi] = t.current, yc(e), new d0(t);
    }, Sp.hydrateRoot = function(e, t, a) {
      if (!ut(e))
        throw Error("Target container is not a DOM element.");
      h0(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Gd, d = wd, h = cy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = Tr(
        e,
        1,
        !0,
        t,
        a ?? null,
        i,
        o,
        y,
        f,
        d,
        h,
        Bv
      ), t.context = Hv(null), a = t.current, i = va(a), i = La(i), o = jl(i), o.callback = null, Mu(a, o, i), Ru(i, "hydrateRoot()", null), a = i, t.current.lanes = a, qt(t, a), Ja(t), e[Hi] = t.current, yc(e), new su(t);
    }, Sp.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })()), Sp;
}
var Z2;
function CT() {
  if (Z2) return Zg.exports;
  Z2 = 1;
  function Y() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (process.env.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y);
      } catch (te) {
        console.error(te);
      }
    }
  }
  return process.env.NODE_ENV === "production" ? (Y(), Zg.exports = _T()) : Zg.exports = MT(), Zg.exports;
}
var UT = CT();
const HT = /* @__PURE__ */ gT(UT);
function bp({ label: Y, value: te, color: Se }) {
  return /* @__PURE__ */ ne.jsxs("div", { className: `viz-stat-card ${Se}`, children: [
    /* @__PURE__ */ ne.jsx("div", { className: "viz-stat-label", children: Y }),
    /* @__PURE__ */ ne.jsx("div", { className: "viz-stat-value", children: te })
  ] });
}
function NT({ config: Y, isRunning: te, onStart: Se, onStop: M, onReset: Ae }) {
  return /* @__PURE__ */ ne.jsxs("div", { className: "viz-panel", children: [
    /* @__PURE__ */ ne.jsx("h2", { children: "Configuration" }),
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-controls", children: [
      te ? /* @__PURE__ */ ne.jsx("button", { onClick: M, className: "viz-btn viz-btn-danger", children: "■ Stop" }) : /* @__PURE__ */ ne.jsx("button", { onClick: Se, className: "viz-btn viz-btn-primary", children: "▶ Start" }),
      /* @__PURE__ */ ne.jsx("button", { onClick: Ae, className: "viz-btn viz-btn-secondary", children: "Reset" })
    ] }),
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-section", children: [
      /* @__PURE__ */ ne.jsx("div", { className: "viz-section-title", children: "Environment" }),
      /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-group", children: [
        /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-label", children: [
          /* @__PURE__ */ ne.jsx("span", { children: "Request Rate" }),
          /* @__PURE__ */ ne.jsxs("span", { className: "viz-slider-value", children: [
            Y.requestRate,
            " req/s"
          ] })
        ] }),
        /* @__PURE__ */ ne.jsx(
          "input",
          {
            type: "range",
            min: "1",
            max: "50",
            value: Y.requestRate,
            onChange: (de) => Y.setRequestRate(parseInt(de.target.value)),
            className: "viz-slider"
          }
        )
      ] }),
      /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-group", children: [
        /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-label", children: [
          /* @__PURE__ */ ne.jsx("span", { children: "Continuation %" }),
          /* @__PURE__ */ ne.jsxs("span", { className: "viz-slider-value", children: [
            Y.continuationProbability,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ ne.jsx(
          "input",
          {
            type: "range",
            min: "0",
            max: "100",
            step: "10",
            value: Y.continuationProbability,
            onChange: (de) => Y.setContinuationProbability(parseInt(de.target.value)),
            className: "viz-slider"
          }
        )
      ] }),
      /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-group", children: [
        /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-label", children: [
          /* @__PURE__ */ ne.jsx("span", { children: "GPU Util/Req" }),
          /* @__PURE__ */ ne.jsxs("span", { className: "viz-slider-value", children: [
            Y.gpuUtilization,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ ne.jsx(
          "input",
          {
            type: "range",
            min: "10",
            max: "100",
            step: "10",
            value: Y.gpuUtilization,
            onChange: (de) => Y.setGpuUtilization(parseInt(de.target.value)),
            className: "viz-slider"
          }
        )
      ] }),
      /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-group", children: [
        /* @__PURE__ */ ne.jsxs("div", { className: "viz-slider-label", children: [
          /* @__PURE__ */ ne.jsx("span", { children: "Number of GPUs" }),
          /* @__PURE__ */ ne.jsx("span", { className: "viz-slider-value", children: Y.numGPUs })
        ] }),
        /* @__PURE__ */ ne.jsx(
          "input",
          {
            type: "range",
            min: "1",
            max: "16",
            value: Y.numGPUs,
            onChange: (de) => !te && Y.setNumGPUs(parseInt(de.target.value)),
            disabled: te,
            className: "viz-slider"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-section", children: [
      /* @__PURE__ */ ne.jsx("div", { className: "viz-section-title", children: "Optimizations" }),
      /* @__PURE__ */ ne.jsxs("label", { className: "viz-checkbox", children: [
        /* @__PURE__ */ ne.jsx(
          "input",
          {
            type: "checkbox",
            checked: Y.kvCacheAware,
            onChange: (de) => Y.setKvCacheAware(de.target.checked)
          }
        ),
        /* @__PURE__ */ ne.jsx("span", { className: "viz-checkbox-label", children: "KV-Cache-Aware Routing" })
      ] }),
      /* @__PURE__ */ ne.jsxs("label", { className: "viz-checkbox", children: [
        /* @__PURE__ */ ne.jsx(
          "input",
          {
            type: "checkbox",
            checked: Y.continuousBatching,
            onChange: (de) => Y.setContinuousBatching(de.target.checked)
          }
        ),
        /* @__PURE__ */ ne.jsx("span", { className: "viz-checkbox-label", children: "Continuous Batching" })
      ] }),
      /* @__PURE__ */ ne.jsxs("label", { className: "viz-checkbox", children: [
        /* @__PURE__ */ ne.jsx(
          "input",
          {
            type: "checkbox",
            checked: Y.pagedAttention,
            onChange: (de) => Y.setPagedAttention(de.target.checked)
          }
        ),
        /* @__PURE__ */ ne.jsx("span", { className: "viz-checkbox-label", children: "Paged Attention (vLLM)" })
      ] })
    ] })
  ] });
}
function xT({ queue: Y }) {
  const te = Y.filter((M) => !M.isContinuation).length, Se = Y.length - te;
  return /* @__PURE__ */ ne.jsxs("div", { className: "viz-panel", children: [
    /* @__PURE__ */ ne.jsxs("h2", { children: [
      "Request Queue (",
      Y.length,
      ")"
    ] }),
    /* @__PURE__ */ ne.jsxs("div", { style: { fontSize: "12px", marginBottom: "12px", color: "#9ca3af" }, children: [
      /* @__PURE__ */ ne.jsxs("span", { style: { marginRight: "16px" }, children: [
        "🔵 New (",
        te,
        ")"
      ] }),
      /* @__PURE__ */ ne.jsxs("span", { children: [
        "🟢 Continuation (",
        Se,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-queue", children: [
      Y.length === 0 ? /* @__PURE__ */ ne.jsx("div", { className: "viz-queue-empty", children: "Queue is empty" }) : Y.slice(0, 20).map((M) => /* @__PURE__ */ ne.jsxs(
        "div",
        {
          className: `viz-request ${M.isContinuation ? "continuation" : "new"}`,
          title: `Request ${M.id} - Session ${M.sessionId}`,
          children: [
            /* @__PURE__ */ ne.jsx("div", { className: "viz-request-id", children: M.id }),
            /* @__PURE__ */ ne.jsxs("div", { className: "viz-request-session", children: [
              "S",
              M.sessionId
            ] })
          ]
        },
        M.id
      )),
      Y.length > 20 && /* @__PURE__ */ ne.jsxs("div", { className: "viz-request", style: { background: "#374151" }, children: [
        "+",
        Y.length - 20
      ] })
    ] })
  ] });
}
function jT({ gpuStates: Y, gpuUtilization: te }) {
  return /* @__PURE__ */ ne.jsxs("div", { className: "viz-panel", children: [
    /* @__PURE__ */ ne.jsx("h2", { children: "GPU Cluster" }),
    /* @__PURE__ */ ne.jsx("div", { className: "viz-gpu-grid", children: Y.map((Se) => {
      const M = Math.min(Se.activeRequests.length * te, 100), Ae = Se.activeRequests.some(($e) => $e.hasKVCache), de = Array.from(Se.kvCacheSessions?.values() || []).reduce(($e, I) => $e + I, 0);
      return /* @__PURE__ */ ne.jsxs("div", { className: "viz-gpu", children: [
        /* @__PURE__ */ ne.jsxs("div", { className: "viz-gpu-header", children: [
          /* @__PURE__ */ ne.jsxs("span", { className: "viz-gpu-name", children: [
            "GPU ",
            Se.id
          ] }),
          /* @__PURE__ */ ne.jsxs("div", { className: "viz-gpu-stats", children: [
            Se.activeRequests.length > 0 ? /* @__PURE__ */ ne.jsxs("span", { className: "viz-gpu-requests", children: [
              Se.activeRequests.length,
              " req",
              Se.activeRequests.length > 1 ? "s" : ""
            ] }) : /* @__PURE__ */ ne.jsx("span", { className: "viz-gpu-requests", children: "Idle" }),
            /* @__PURE__ */ ne.jsxs("span", { className: "viz-gpu-util", children: [
              Math.round(M),
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ ne.jsx("div", { className: "viz-progress", children: /* @__PURE__ */ ne.jsx(
          "div",
          {
            className: `viz-progress-bar ${M > 0 ? Ae ? "cache-hit" : M >= 90 ? "high" : "normal" : ""}`,
            style: { width: `${M}%` }
          }
        ) }),
        de > 0 && /* @__PURE__ */ ne.jsxs("div", { style: { fontSize: "10px", color: "#9ca3af", marginTop: "4px", textAlign: "center" }, children: [
          "💾 ",
          de,
          " KV slots"
        ] })
      ] }, Se.id);
    }) }),
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-info-box", children: [
      /* @__PURE__ */ ne.jsx("div", { children: "🟢 Green = KV cache hit (fast)" }),
      /* @__PURE__ */ ne.jsx("div", { children: "🟣 Purple = Normal processing" }),
      /* @__PURE__ */ ne.jsx("div", { children: "🔴 Red = High load (>90%)" })
    ] })
  ] });
}
function BT({
  // Environment config
  requestRate: Y,
  continuationProbability: te,
  contextLength: Se,
  gpuUtilization: M,
  // Routing config
  kvCacheAware: Ae,
  // Engine config
  continuousBatching: de,
  pagedAttention: $e,
  // Compute config
  numGPUs: I,
  gpuType: ae,
  // Control
  isRunning: J,
  slowMode: Ue,
  autoLoadTest: G
}) {
  const [H, ie] = nt.useState([]), [je, gt] = nt.useState([]), [ut, Je] = nt.useState([]), [hl, Tt] = nt.useState(0), [Ot, Yt] = nt.useState(0), [Gt, De] = nt.useState(0), [Qe, st] = nt.useState(0), [re, Bt] = nt.useState(null), he = nt.useRef(0), Be = nt.useRef(0), wt = nt.useRef(0), Rt = nt.useRef(0), z = nt.useRef([]), Q = nt.useRef(0), ee = nt.useRef(0), pe = nt.useRef(0), Ee = nt.useRef(/* @__PURE__ */ new Map()), S = nt.useRef(/* @__PURE__ */ new Map()), N = nt.useRef([]), F = nt.useRef([]), W = nt.useRef([]), Te = nt.useRef([]), Ye = nt.useRef(1), ze = nt.useRef(Date.now()), rt = ((ul, Al) => {
    const Oe = {
      a100: 80,
      // 80 GB
      h100: 80,
      // 80 GB
      l40s: 48,
      // 48 GB
      a10g: 24
      // 24 GB
    }[ul] * 0.5;
    return Math.floor(Oe * (Al ? 1e3 : 1));
  })(ae, $e), Kt = 1;
  nt.useEffect(() => {
    z.current = H;
  }, [H]), nt.useEffect(() => {
    Q.current = je.length;
  }, [je.length]), nt.useEffect(() => {
    ee.current = Ot, pe.current = Gt;
  }, [Ot, Gt]), nt.useEffect(() => {
    const ul = Array(I).fill(null).map((Al, yt) => ({
      id: yt,
      activeRequests: [],
      kvCacheSessions: /* @__PURE__ */ new Map(),
      // Map<sessionId, slotsUsed>
      maxKVSessions: rt
    }));
    ie(ul), z.current = ul, he.current = 0;
  }, [I, rt, $e, ae]), nt.useEffect(() => {
    if (!J) return;
    const ul = setInterval(() => {
      const Al = Date.now(), yt = 3e4 * Kt, kt = [];
      S.current.forEach((Oe, Dt) => {
        Al - Oe > yt && kt.push(Dt);
      }), kt.forEach((Oe) => {
        Ee.current.delete(Oe), S.current.delete(Oe), ie((Dt) => Dt.map((da) => {
          const Wt = new Map(da.kvCacheSessions);
          return Wt.delete(Oe), {
            ...da,
            kvCacheSessions: Wt
          };
        }));
      });
    }, 5e3 * Kt);
    return () => clearInterval(ul);
  }, [J, Kt]), nt.useEffect(() => {
    if (!J) return;
    const ul = setInterval(() => {
      const Al = Be.current++;
      Tt((Oe) => Oe + 1);
      const yt = Math.random() * 100 < te;
      let kt;
      if (yt && Ee.current.size > 0) {
        const Oe = Array.from(Ee.current.keys());
        kt = Oe[Math.floor(Math.random() * Oe.length)], J2 = !0;
      } else
        kt = wt.current++;
      gt((Oe) => [...Oe, {
        id: Al,
        sessionId: kt,
        isContinuation: J2,
        timestamp: Date.now(),
        contextLength: Se
      }]);
    }, 1e3 / Y * Kt);
    return () => clearInterval(ul);
  }, [J, Y, te, Se, Kt]), nt.useEffect(() => {
    if (!J) return;
    const ul = setInterval(() => {
      const Al = Date.now();
      ie((yt) => {
        let kt = 0;
        const Oe = yt.map((Dt) => {
          const da = Dt.activeRequests.filter((Wt) => Al >= Wt.completionTime ? (kt++, !1) : !0);
          return {
            ...Dt,
            activeRequests: da,
            kvCacheSessions: Dt.kvCacheSessions
          };
        });
        return Rt.current += kt, Oe;
      }), gt((yt) => {
        if (yt.length === 0) return yt;
        const kt = de, Oe = [], Dt = z.current.map((Wt) => Wt.activeRequests.length);
        for (let Wt = 0; Wt < yt.length; Wt++) {
          const ce = yt[Wt], { sessionId: ua, isContinuation: Ll, contextLength: ll } = ce;
          let ke = null, Xa = !1;
          const On = Math.ceil(ll / 1e3), ha = [];
          for (let qt = 0; qt < I; qt++) {
            const Rn = z.current[qt], Gi = (Dt[qt] + 1) * M, _c = kt ? Gi <= 100 : Dt[qt] === 0, fi = Array.from(Rn.kvCacheSessions.values()).reduce((zl, Aa) => zl + Aa, 0), La = Rn.kvCacheSessions.has(ua) || fi + On <= Rn.maxKVSessions;
            _c && La && ha.push(qt);
          }
          if (ha.length === 0) break;
          if (Ae && Ll && ha.length > 0) {
            for (const qt of ha)
              if (z.current[qt].kvCacheSessions.has(ua)) {
                ke = qt, Xa = !0;
                break;
              }
          }
          if (ke === null) {
            for (let qt = 0; qt < I; qt++) {
              const Rn = (he.current + qt) % I;
              if (ha.includes(Rn)) {
                ke = Rn, Xa = !1, he.current = (Rn + 1) % I;
                break;
              }
            }
            ke === null && (ke = ha[0], he.current = (ha[0] + 1) % I);
          }
          if (Dt[ke] += 1, Xa ? Yt((qt) => qt + 1) : Ll && De((qt) => qt + 1), Oe.push({ request: ce, gpuIndex: ke, hasKVCache: Xa }), !kt) break;
        }
        if (Oe.length > 0) {
          const Wt = z.current.map((ce) => ({
            ...ce,
            activeRequests: [...ce.activeRequests],
            kvCacheSessions: new Map(ce.kvCacheSessions)
          }));
          Oe.forEach(({ request: ce, gpuIndex: ua, hasKVCache: Ll }) => {
            const ll = Wt[ua], ke = Math.ceil(ce.contextLength / 1e3), Xa = Ll ? 50 * Kt : 100 * ke * Kt, On = Al + Xa;
            ll.kvCacheSessions.has(ce.sessionId) || ll.kvCacheSessions.set(ce.sessionId, ke), ll.activeRequests.push({
              ...ce,
              latency: Xa / Kt,
              hasKVCache: Ll,
              completionTime: On
            }), Ee.current.set(ce.sessionId, ua), S.current.set(ce.sessionId, Date.now());
          }), z.current = Wt, ie(Wt);
        }
        const da = new Set(Oe.map((Wt) => Wt.request.id));
        return yt.filter((Wt) => !da.has(Wt.id));
      });
    }, 50 * Kt);
    return () => clearInterval(ul);
  }, [
    J,
    M,
    de,
    I,
    Kt,
    Ae,
    Se
  ]), nt.useEffect(() => {
    if (!J) return;
    const ul = setInterval(() => {
      const Al = Date.now(), yt = z.current, kt = yt.reduce((ll, ke) => {
        const Xa = ke.activeRequests.reduce((On, ha) => On + (ha.latency || 0), 0) / (ke.activeRequests.length || 1);
        return ll + Xa;
      }, 0) / (yt.length || 1), Oe = Rt.current;
      Rt.current = 0;
      const Dt = yt.reduce((ll, ke) => ll + ke.activeRequests.length * M, 0) / yt.length;
      N.current.push(Oe), N.current.length > 5 && N.current.shift(), F.current.push(kt), F.current.length > 5 && F.current.shift(), W.current.push(Dt), W.current.length > 5 && W.current.shift();
      const da = N.current.reduce((ll, ke) => ll + ke, 0) / N.current.length, Wt = F.current.reduce((ll, ke) => ll + ke, 0) / F.current.length, ce = W.current.reduce((ll, ke) => ll + ke, 0) / W.current.length, ua = ee.current + pe.current, Ll = ua > 0 ? ee.current / ua * 100 : 0;
      Je((ll) => [...ll, {
        timestamp: Al,
        latency: Wt || 0,
        throughput: da || 0,
        queueSize: Q.current,
        gpuUtilization: ce || 0,
        cacheHitRate: Ll || 0
      }].slice(-100));
    }, 1e3 * Kt);
    return () => clearInterval(ul);
  }, [J, Kt, M]), nt.useEffect(() => {
  }, [J, G, Kt]);
  const fe = () => {
    Te.current = [], Ye.current = 1, ze.current = Date.now(), Bt(null), N.current = [], F.current = [], W.current = [], gt([]), Je([]), Tt(0), Yt(0), De(0), st(0), Be.current = 0, wt.current = 0, Rt.current = 0, ee.current = 0, pe.current = 0, Ee.current.clear(), S.current.clear();
    const ul = Array(I).fill(null).map((Al, yt) => ({
      id: yt,
      activeRequests: [],
      kvCacheSessions: /* @__PURE__ */ new Map(),
      maxKVSessions: rt
    }));
    ie(ul), z.current = ul;
  };
  return {
    // State
    gpuStates: H,
    requestQueue: je,
    metrics: ut,
    totalRequests: hl,
    cacheHits: Ot,
    cacheMisses: Gt,
    cacheEvictions: Qe,
    maxSustainableRate: re,
    // Computed
    maxKVSessionsPerGPU: rt,
    currentAutoLoadRate: Ye.current,
    // Actions
    reset: fe
  };
}
let J2 = !1;
function qT() {
  const [Y, te] = nt.useState(5), [Se, M] = nt.useState(60), [Ae, de] = nt.useState(4e3), [$e, I] = nt.useState(30), [ae, J] = nt.useState(2), [Ue, G] = nt.useState(!1), [H, ie] = nt.useState(!1), [je, gt] = nt.useState(!1), [ut, Je] = nt.useState(!1), {
    gpuStates: hl,
    requestQueue: Tt,
    metrics: Ot,
    reset: Yt
  } = BT({
    requestRate: Y,
    continuationProbability: Se,
    contextLength: Ae,
    gpuUtilization: $e,
    kvCacheAware: H,
    continuousBatching: je,
    pagedAttention: ut,
    numGPUs: ae,
    gpuType: "a100",
    isRunning: Ue,
    slowMode: !1,
    autoLoadTest: !1
  }), Gt = () => G(!0), De = () => G(!1), Qe = () => {
    G(!1), Yt();
  }, st = Ot[Ot.length - 1] || {
    latency: 0,
    throughput: 0,
    queueSize: 0,
    gpuUtilization: 0,
    cacheHitRate: 0
  };
  return /* @__PURE__ */ ne.jsxs("div", { className: "viz-container", children: [
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-header", children: [
      /* @__PURE__ */ ne.jsx("h1", { className: "viz-title", children: "LLM Inference Stack Simulator" }),
      /* @__PURE__ */ ne.jsx("p", { className: "viz-subtitle", children: "Interactive visualization of routing, engine, and cache optimizations" })
    ] }),
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-stats", children: [
      /* @__PURE__ */ ne.jsx(bp, { label: "Avg Latency", value: `${Math.round(st.latency)}ms`, color: "blue" }),
      /* @__PURE__ */ ne.jsx(bp, { label: "Throughput", value: `${st.throughput} req/s`, color: "green" }),
      /* @__PURE__ */ ne.jsx(bp, { label: "Queue Size", value: st.queueSize, color: "yellow" }),
      /* @__PURE__ */ ne.jsx(bp, { label: "GPU Load", value: `${Math.round(st.gpuUtilization)}%`, color: "purple" }),
      /* @__PURE__ */ ne.jsx(bp, { label: "Cache Hit Rate", value: `${Math.round(st.cacheHitRate)}%`, color: "cyan" })
    ] }),
    /* @__PURE__ */ ne.jsxs("div", { className: "viz-grid", children: [
      /* @__PURE__ */ ne.jsx(
        NT,
        {
          config: {
            requestRate: Y,
            setRequestRate: te,
            continuationProbability: Se,
            setContinuationProbability: M,
            contextLength: Ae,
            setContextLength: de,
            gpuUtilization: $e,
            setGpuUtilization: I,
            numGPUs: ae,
            setNumGPUs: J,
            kvCacheAware: H,
            setKvCacheAware: ie,
            continuousBatching: je,
            setContinuousBatching: gt,
            pagedAttention: ut,
            setPagedAttention: Je
          },
          isRunning: Ue,
          onStart: Gt,
          onStop: De,
          onReset: Qe
        }
      ),
      /* @__PURE__ */ ne.jsxs("div", { children: [
        /* @__PURE__ */ ne.jsx(xT, { queue: Tt }),
        /* @__PURE__ */ ne.jsx("div", { style: { marginTop: "24px" }, children: /* @__PURE__ */ ne.jsx(jT, { gpuStates: hl, gpuUtilization: $e }) })
      ] })
    ] })
  ] });
}
const YT = "inference-visualizer-root", K2 = document.getElementById(YT) || document.getElementById("root");
K2 && HT.createRoot(K2).render(/* @__PURE__ */ ne.jsx(qT, {}));
