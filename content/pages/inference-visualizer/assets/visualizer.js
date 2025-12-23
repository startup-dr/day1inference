function SA(w) {
  return w && w.__esModule && Object.prototype.hasOwnProperty.call(w, "default") ? w.default : w;
}
var Xg = { exports: {} }, Ov = {};
var xE;
function bA() {
  if (xE) return Ov;
  xE = 1;
  var w = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.fragment");
  function Te(C, he, pe) {
    var Ae = null;
    if (pe !== void 0 && (Ae = "" + pe), he.key !== void 0 && (Ae = "" + he.key), "key" in he) {
      pe = {};
      for (var xe in he)
        xe !== "key" && (pe[xe] = he[xe]);
    } else pe = he;
    return he = pe.ref, {
      $$typeof: w,
      type: C,
      key: Ae,
      ref: he !== void 0 ? he : null,
      props: pe
    };
  }
  return Ov.Fragment = te, Ov.jsx = Te, Ov.jsxs = Te, Ov;
}
var Rv = {}, Vg = { exports: {} }, $e = {};
var NE;
function EA() {
  if (NE) return $e;
  NE = 1;
  var w = /* @__PURE__ */ Symbol.for("react.transitional.element"), te = /* @__PURE__ */ Symbol.for("react.portal"), Te = /* @__PURE__ */ Symbol.for("react.fragment"), C = /* @__PURE__ */ Symbol.for("react.strict_mode"), he = /* @__PURE__ */ Symbol.for("react.profiler"), pe = /* @__PURE__ */ Symbol.for("react.consumer"), Ae = /* @__PURE__ */ Symbol.for("react.context"), xe = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.memo"), Ce = /* @__PURE__ */ Symbol.for("react.lazy"), ae = /* @__PURE__ */ Symbol.for("react.activity"), k = Symbol.iterator;
  function x(z) {
    return z === null || typeof z != "object" ? null : (z = k && z[k] || z["@@iterator"], typeof z == "function" ? z : null);
  }
  var ce = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, je = Object.assign, $t = {};
  function Ze(z, E, J) {
    this.props = z, this.context = E, this.refs = $t, this.updater = J || ce;
  }
  Ze.prototype.isReactComponent = {}, Ze.prototype.setState = function(z, E) {
    if (typeof z != "object" && typeof z != "function" && z != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, z, E, "setState");
  }, Ze.prototype.forceUpdate = function(z) {
    this.updater.enqueueForceUpdate(this, z, "forceUpdate");
  };
  function ct() {
  }
  ct.prototype = Ze.prototype;
  function Dt(z, E, J) {
    this.props = z, this.context = E, this.refs = $t, this.updater = J || ce;
  }
  var jt = Dt.prototype = new ct();
  jt.constructor = Dt, je(jt, Ze.prototype), jt.isPureReactComponent = !0;
  var Bt = Array.isArray;
  function Tt() {
  }
  var qe = { H: null, A: null, T: null, S: null }, At = Object.prototype.hasOwnProperty;
  function ke(z, E, J) {
    var le = J.ref;
    return {
      $$typeof: w,
      type: z,
      key: E,
      ref: le !== void 0 ? le : null,
      props: J
    };
  }
  function zt(z, E) {
    return ke(z.type, E, z.props);
  }
  function de(z) {
    return typeof z == "object" && z !== null && z.$$typeof === w;
  }
  function st(z) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + z.replace(/[=:]/g, function(J) {
      return E[J];
    });
  }
  var ze = /\/+/g;
  function Ne(z, E) {
    return typeof z == "object" && z !== null && z.key != null ? st("" + z.key) : E.toString(36);
  }
  function Mt(z) {
    switch (z.status) {
      case "fulfilled":
        return z.value;
      case "rejected":
        throw z.reason;
      default:
        switch (typeof z.status == "string" ? z.then(Tt, Tt) : (z.status = "pending", z.then(
          function(E) {
            z.status === "pending" && (z.status = "fulfilled", z.value = E);
          },
          function(E) {
            z.status === "pending" && (z.status = "rejected", z.reason = E);
          }
        )), z.status) {
          case "fulfilled":
            return z.value;
          case "rejected":
            throw z.reason;
        }
    }
    throw z;
  }
  function G(z, E, J, le, ne) {
    var _e = typeof z;
    (_e === "undefined" || _e === "boolean") && (z = null);
    var at = !1;
    if (z === null) at = !0;
    else
      switch (_e) {
        case "bigint":
        case "string":
        case "number":
          at = !0;
          break;
        case "object":
          switch (z.$$typeof) {
            case w:
            case te:
              at = !0;
              break;
            case Ce:
              return at = z._init, G(
                at(z._payload),
                E,
                J,
                le,
                ne
              );
          }
      }
    if (at)
      return ne = ne(z), at = le === "" ? "." + Ne(z, 0) : le, Bt(ne) ? (J = "", at != null && (J = at.replace(ze, "$&/") + "/"), G(ne, E, J, "", function(qt) {
        return qt;
      })) : ne != null && (de(ne) && (ne = zt(
        ne,
        J + (ne.key == null || z && z.key === ne.key ? "" : ("" + ne.key).replace(
          ze,
          "$&/"
        ) + "/") + at
      )), E.push(ne)), 1;
    at = 0;
    var Pe = le === "" ? "." : le + ":";
    if (Bt(z))
      for (var rt = 0; rt < z.length; rt++)
        le = z[rt], _e = Pe + Ne(le, rt), at += G(
          le,
          E,
          J,
          _e,
          ne
        );
    else if (rt = x(z), typeof rt == "function")
      for (z = rt.call(z), rt = 0; !(le = z.next()).done; )
        le = le.value, _e = Pe + Ne(le, rt++), at += G(
          le,
          E,
          J,
          _e,
          ne
        );
    else if (_e === "object") {
      if (typeof z.then == "function")
        return G(
          Mt(z),
          E,
          J,
          le,
          ne
        );
      throw E = String(z), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(z).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return at;
  }
  function q(z, E, J) {
    if (z == null) return z;
    var le = [], ne = 0;
    return G(z, le, "", "", function(_e) {
      return E.call(J, _e, ne++);
    }), le;
  }
  function I(z) {
    if (z._status === -1) {
      var E = z._result;
      E = E(), E.then(
        function(J) {
          (z._status === 0 || z._status === -1) && (z._status = 1, z._result = J);
        },
        function(J) {
          (z._status === 0 || z._status === -1) && (z._status = 2, z._result = J);
        }
      ), z._status === -1 && (z._status = 0, z._result = E);
    }
    if (z._status === 1) return z._result.default;
    throw z._result;
  }
  var fe = typeof reportError == "function" ? reportError : function(z) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof z == "object" && z !== null && typeof z.message == "string" ? String(z.message) : String(z),
        error: z
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", z);
      return;
    }
    console.error(z);
  }, ge = {
    map: q,
    forEach: function(z, E, J) {
      q(
        z,
        function() {
          E.apply(this, arguments);
        },
        J
      );
    },
    count: function(z) {
      var E = 0;
      return q(z, function() {
        E++;
      }), E;
    },
    toArray: function(z) {
      return q(z, function(E) {
        return E;
      }) || [];
    },
    only: function(z) {
      if (!de(z))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return z;
    }
  };
  return $e.Activity = ae, $e.Children = ge, $e.Component = Ze, $e.Fragment = Te, $e.Profiler = he, $e.PureComponent = Dt, $e.StrictMode = C, $e.Suspense = L, $e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = qe, $e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(z) {
      return qe.H.useMemoCache(z);
    }
  }, $e.cache = function(z) {
    return function() {
      return z.apply(null, arguments);
    };
  }, $e.cacheSignal = function() {
    return null;
  }, $e.cloneElement = function(z, E, J) {
    if (z == null)
      throw Error(
        "The argument must be a React element, but you passed " + z + "."
      );
    var le = je({}, z.props), ne = z.key;
    if (E != null)
      for (_e in E.key !== void 0 && (ne = "" + E.key), E)
        !At.call(E, _e) || _e === "key" || _e === "__self" || _e === "__source" || _e === "ref" && E.ref === void 0 || (le[_e] = E[_e]);
    var _e = arguments.length - 2;
    if (_e === 1) le.children = J;
    else if (1 < _e) {
      for (var at = Array(_e), Pe = 0; Pe < _e; Pe++)
        at[Pe] = arguments[Pe + 2];
      le.children = at;
    }
    return ke(z.type, ne, le);
  }, $e.createContext = function(z) {
    return z = {
      $$typeof: Ae,
      _currentValue: z,
      _currentValue2: z,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, z.Provider = z, z.Consumer = {
      $$typeof: pe,
      _context: z
    }, z;
  }, $e.createElement = function(z, E, J) {
    var le, ne = {}, _e = null;
    if (E != null)
      for (le in E.key !== void 0 && (_e = "" + E.key), E)
        At.call(E, le) && le !== "key" && le !== "__self" && le !== "__source" && (ne[le] = E[le]);
    var at = arguments.length - 2;
    if (at === 1) ne.children = J;
    else if (1 < at) {
      for (var Pe = Array(at), rt = 0; rt < at; rt++)
        Pe[rt] = arguments[rt + 2];
      ne.children = Pe;
    }
    if (z && z.defaultProps)
      for (le in at = z.defaultProps, at)
        ne[le] === void 0 && (ne[le] = at[le]);
    return ke(z, _e, ne);
  }, $e.createRef = function() {
    return { current: null };
  }, $e.forwardRef = function(z) {
    return { $$typeof: xe, render: z };
  }, $e.isValidElement = de, $e.lazy = function(z) {
    return {
      $$typeof: Ce,
      _payload: { _status: -1, _result: z },
      _init: I
    };
  }, $e.memo = function(z, E) {
    return {
      $$typeof: V,
      type: z,
      compare: E === void 0 ? null : E
    };
  }, $e.startTransition = function(z) {
    var E = qe.T, J = {};
    qe.T = J;
    try {
      var le = z(), ne = qe.S;
      ne !== null && ne(J, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(Tt, fe);
    } catch (_e) {
      fe(_e);
    } finally {
      E !== null && J.types !== null && (E.types = J.types), qe.T = E;
    }
  }, $e.unstable_useCacheRefresh = function() {
    return qe.H.useCacheRefresh();
  }, $e.use = function(z) {
    return qe.H.use(z);
  }, $e.useActionState = function(z, E, J) {
    return qe.H.useActionState(z, E, J);
  }, $e.useCallback = function(z, E) {
    return qe.H.useCallback(z, E);
  }, $e.useContext = function(z) {
    return qe.H.useContext(z);
  }, $e.useDebugValue = function() {
  }, $e.useDeferredValue = function(z, E) {
    return qe.H.useDeferredValue(z, E);
  }, $e.useEffect = function(z, E) {
    return qe.H.useEffect(z, E);
  }, $e.useEffectEvent = function(z) {
    return qe.H.useEffectEvent(z);
  }, $e.useId = function() {
    return qe.H.useId();
  }, $e.useImperativeHandle = function(z, E, J) {
    return qe.H.useImperativeHandle(z, E, J);
  }, $e.useInsertionEffect = function(z, E) {
    return qe.H.useInsertionEffect(z, E);
  }, $e.useLayoutEffect = function(z, E) {
    return qe.H.useLayoutEffect(z, E);
  }, $e.useMemo = function(z, E) {
    return qe.H.useMemo(z, E);
  }, $e.useOptimistic = function(z, E) {
    return qe.H.useOptimistic(z, E);
  }, $e.useReducer = function(z, E, J) {
    return qe.H.useReducer(z, E, J);
  }, $e.useRef = function(z) {
    return qe.H.useRef(z);
  }, $e.useState = function(z) {
    return qe.H.useState(z);
  }, $e.useSyncExternalStore = function(z, E, J) {
    return qe.H.useSyncExternalStore(
      z,
      E,
      J
    );
  }, $e.useTransition = function() {
    return qe.H.useTransition();
  }, $e.version = "19.2.3", $e;
}
var Cv = { exports: {} };
Cv.exports;
var HE;
function TA() {
  return HE || (HE = 1, (function(w, te) {
    var Te = {};
    Te.NODE_ENV !== "production" && (function() {
      function C(v, M) {
        Object.defineProperty(Ae.prototype, v, {
          get: function() {
            console.warn(
              "%s(...) is deprecated in plain JavaScript React classes. %s",
              M[0],
              M[1]
            );
          }
        });
      }
      function he(v) {
        return v === null || typeof v != "object" ? null : (v = Ml && v[Ml] || v["@@iterator"], typeof v == "function" ? v : null);
      }
      function pe(v, M) {
        v = (v = v.constructor) && (v.displayName || v.name) || "ReactClass";
        var ee = v + "." + M;
        yt[ee] || (console.error(
          "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
          M,
          v
        ), yt[ee] = !0);
      }
      function Ae(v, M, ee) {
        this.props = v, this.context = M, this.refs = Xe, this.updater = ee || ll;
      }
      function xe() {
      }
      function L(v, M, ee) {
        this.props = v, this.context = M, this.refs = Xe, this.updater = ee || ll;
      }
      function V() {
      }
      function Ce(v) {
        return "" + v;
      }
      function ae(v) {
        try {
          Ce(v);
          var M = !1;
        } catch {
          M = !0;
        }
        if (M) {
          M = console;
          var ee = M.error, ie = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
          return ee.call(
            M,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            ie
          ), Ce(v);
        }
      }
      function k(v) {
        if (v == null) return null;
        if (typeof v == "function")
          return v.$$typeof === Ol ? null : v.displayName || v.name || null;
        if (typeof v == "string") return v;
        switch (v) {
          case E:
            return "Fragment";
          case le:
            return "Profiler";
          case J:
            return "StrictMode";
          case Pe:
            return "Suspense";
          case rt:
            return "SuspenseList";
          case ue:
            return "Activity";
        }
        if (typeof v == "object")
          switch (typeof v.tag == "number" && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), v.$$typeof) {
            case z:
              return "Portal";
            case _e:
              return v.displayName || "Context";
            case ne:
              return (v._context.displayName || "Context") + ".Consumer";
            case at:
              var M = v.render;
              return v = v.displayName, v || (v = M.displayName || M.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
            case qt:
              return M = v.displayName || null, M !== null ? M : k(v.type) || "Memo";
            case Ga:
              M = v._payload, v = v._init;
              try {
                return k(v(M));
              } catch {
              }
          }
        return null;
      }
      function x(v) {
        if (v === E) return "<>";
        if (typeof v == "object" && v !== null && v.$$typeof === Ga)
          return "<...>";
        try {
          var M = k(v);
          return M ? "<" + M + ">" : "<...>";
        } catch {
          return "<...>";
        }
      }
      function ce() {
        var v = re.A;
        return v === null ? null : v.getOwner();
      }
      function je() {
        return Error("react-stack-top-frame");
      }
      function $t(v) {
        if (wa.call(v, "key")) {
          var M = Object.getOwnPropertyDescriptor(v, "key").get;
          if (M && M.isReactWarning) return !1;
        }
        return v.key !== void 0;
      }
      function Ze(v, M) {
        function ee() {
          We || (We = !0, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            M
          ));
        }
        ee.isReactWarning = !0, Object.defineProperty(v, "key", {
          get: ee,
          configurable: !0
        });
      }
      function ct() {
        var v = k(this.type);
        return In[v] || (In[v] = !0, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        )), v = this.props.ref, v !== void 0 ? v : null;
      }
      function Dt(v, M, ee, ie, ye, Ye) {
        var Se = ee.ref;
        return v = {
          $$typeof: ge,
          type: v,
          key: M,
          props: ee,
          _owner: ie
        }, (Se !== void 0 ? Se : null) !== null ? Object.defineProperty(v, "ref", {
          enumerable: !1,
          get: ct
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
          value: Ye
        }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
      }
      function jt(v, M) {
        return M = Dt(
          v.type,
          M,
          v.props,
          v._owner,
          v._debugStack,
          v._debugTask
        ), v._store && (M._store.validated = v._store.validated), M;
      }
      function Bt(v) {
        Tt(v) ? v._store && (v._store.validated = 1) : typeof v == "object" && v !== null && v.$$typeof === Ga && (v._payload.status === "fulfilled" ? Tt(v._payload.value) && v._payload.value._store && (v._payload.value._store.validated = 1) : v._store && (v._store.validated = 1));
      }
      function Tt(v) {
        return typeof v == "object" && v !== null && v.$$typeof === ge;
      }
      function qe(v) {
        var M = { "=": "=0", ":": "=2" };
        return "$" + v.replace(/[=:]/g, function(ee) {
          return M[ee];
        });
      }
      function At(v, M) {
        return typeof v == "object" && v !== null && v.key != null ? (ae(v.key), qe("" + v.key)) : M.toString(36);
      }
      function ke(v) {
        switch (v.status) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
          default:
            switch (typeof v.status == "string" ? v.then(V, V) : (v.status = "pending", v.then(
              function(M) {
                v.status === "pending" && (v.status = "fulfilled", v.value = M);
              },
              function(M) {
                v.status === "pending" && (v.status = "rejected", v.reason = M);
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
      function zt(v, M, ee, ie, ye) {
        var Ye = typeof v;
        (Ye === "undefined" || Ye === "boolean") && (v = null);
        var Se = !1;
        if (v === null) Se = !0;
        else
          switch (Ye) {
            case "bigint":
            case "string":
            case "number":
              Se = !0;
              break;
            case "object":
              switch (v.$$typeof) {
                case ge:
                case z:
                  Se = !0;
                  break;
                case Ga:
                  return Se = v._init, zt(
                    Se(v._payload),
                    M,
                    ee,
                    ie,
                    ye
                  );
              }
          }
        if (Se) {
          Se = v, ye = ye(Se);
          var pt = ie === "" ? "." + At(Se, 0) : ie;
          return Yt(ye) ? (ee = "", pt != null && (ee = pt.replace(Dc, "$&/") + "/"), zt(ye, M, ee, "", function(Fl) {
            return Fl;
          })) : ye != null && (Tt(ye) && (ye.key != null && (Se && Se.key === ye.key || ae(ye.key)), ee = jt(
            ye,
            ee + (ye.key == null || Se && Se.key === ye.key ? "" : ("" + ye.key).replace(
              Dc,
              "$&/"
            ) + "/") + pt
          ), ie !== "" && Se != null && Tt(Se) && Se.key == null && Se._store && !Se._store.validated && (ee._store.validated = 2), ye = ee), M.push(ye)), 1;
        }
        if (Se = 0, pt = ie === "" ? "." : ie + ":", Yt(v))
          for (var Ve = 0; Ve < v.length; Ve++)
            ie = v[Ve], Ye = pt + At(ie, Ve), Se += zt(
              ie,
              M,
              ee,
              Ye,
              ye
            );
        else if (Ve = he(v), typeof Ve == "function")
          for (Ve === v.entries && (ha || console.warn(
            "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
          ), ha = !0), v = Ve.call(v), Ve = 0; !(ie = v.next()).done; )
            ie = ie.value, Ye = pt + At(ie, Ve++), Se += zt(
              ie,
              M,
              ee,
              Ye,
              ye
            );
        else if (Ye === "object") {
          if (typeof v.then == "function")
            return zt(
              ke(v),
              M,
              ee,
              ie,
              ye
            );
          throw M = String(v), Error(
            "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(v).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
          );
        }
        return Se;
      }
      function de(v, M, ee) {
        if (v == null) return v;
        var ie = [], ye = 0;
        return zt(v, ie, "", "", function(Ye) {
          return M.call(ee, Ye, ye++);
        }), ie;
      }
      function st(v) {
        if (v._status === -1) {
          var M = v._ioInfo;
          M != null && (M.start = M.end = performance.now()), M = v._result;
          var ee = M();
          if (ee.then(
            function(ye) {
              if (v._status === 0 || v._status === -1) {
                v._status = 1, v._result = ye;
                var Ye = v._ioInfo;
                Ye != null && (Ye.end = performance.now()), ee.status === void 0 && (ee.status = "fulfilled", ee.value = ye);
              }
            },
            function(ye) {
              if (v._status === 0 || v._status === -1) {
                v._status = 2, v._result = ye;
                var Ye = v._ioInfo;
                Ye != null && (Ye.end = performance.now()), ee.status === void 0 && (ee.status = "rejected", ee.reason = ye);
              }
            }
          ), M = v._ioInfo, M != null) {
            M.value = ee;
            var ie = ee.displayName;
            typeof ie == "string" && (M.name = ie);
          }
          v._status === -1 && (v._status = 0, v._result = ee);
        }
        if (v._status === 1)
          return M = v._result, M === void 0 && console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`,
            M
          ), "default" in M || console.error(
            `lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`,
            M
          ), M.default;
        throw v._result;
      }
      function ze() {
        var v = re.H;
        return v === null && console.error(
          `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
        ), v;
      }
      function Ne() {
        re.asyncTransitions--;
      }
      function Mt(v) {
        if (rn === null)
          try {
            var M = ("require" + Math.random()).slice(0, 7);
            rn = (w && w[M]).call(
              w,
              "timers"
            ).setImmediate;
          } catch {
            rn = function(ie) {
              Cc === !1 && (Cc = !0, typeof MessageChannel > "u" && console.error(
                "This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."
              ));
              var ye = new MessageChannel();
              ye.port1.onmessage = ie, ye.port2.postMessage(void 0);
            };
          }
        return rn(v);
      }
      function G(v) {
        return 1 < v.length && typeof AggregateError == "function" ? new AggregateError(v) : v[0];
      }
      function q(v, M) {
        M !== yl - 1 && console.error(
          "You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "
        ), yl = M;
      }
      function I(v, M, ee) {
        var ie = re.actQueue;
        if (ie !== null)
          if (ie.length !== 0)
            try {
              fe(ie), Mt(function() {
                return I(v, M, ee);
              });
              return;
            } catch (ye) {
              re.thrownErrors.push(ye);
            }
          else re.actQueue = null;
        0 < re.thrownErrors.length ? (ie = G(re.thrownErrors), re.thrownErrors.length = 0, ee(ie)) : M(v);
      }
      function fe(v) {
        if (!Xl) {
          Xl = !0;
          var M = 0;
          try {
            for (; M < v.length; M++) {
              var ee = v[M];
              do {
                re.didUsePromise = !1;
                var ie = ee(!1);
                if (ie !== null) {
                  if (re.didUsePromise) {
                    v[M] = ee, v.splice(0, M);
                    return;
                  }
                  ee = ie;
                } else break;
              } while (!0);
            }
            v.length = 0;
          } catch (ye) {
            v.splice(0, M + 1), re.thrownErrors.push(ye);
          } finally {
            Xl = !1;
          }
        }
      }
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
      var ge = /* @__PURE__ */ Symbol.for("react.transitional.element"), z = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), le = /* @__PURE__ */ Symbol.for("react.profiler"), ne = /* @__PURE__ */ Symbol.for("react.consumer"), _e = /* @__PURE__ */ Symbol.for("react.context"), at = /* @__PURE__ */ Symbol.for("react.forward_ref"), Pe = /* @__PURE__ */ Symbol.for("react.suspense"), rt = /* @__PURE__ */ Symbol.for("react.suspense_list"), qt = /* @__PURE__ */ Symbol.for("react.memo"), Ga = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.activity"), Ml = Symbol.iterator, yt = {}, ll = {
        isMounted: function() {
          return !1;
        },
        enqueueForceUpdate: function(v) {
          pe(v, "forceUpdate");
        },
        enqueueReplaceState: function(v) {
          pe(v, "replaceState");
        },
        enqueueSetState: function(v) {
          pe(v, "setState");
        }
      }, bt = Object.assign, Xe = {};
      Object.freeze(Xe), Ae.prototype.isReactComponent = {}, Ae.prototype.setState = function(v, M) {
        if (typeof v != "object" && typeof v != "function" && v != null)
          throw Error(
            "takes an object of state variables to update or a function which returns an object of state variables."
          );
        this.updater.enqueueSetState(this, v, M, "setState");
      }, Ae.prototype.forceUpdate = function(v) {
        this.updater.enqueueForceUpdate(this, v, "forceUpdate");
      };
      var kt = {
        isMounted: [
          "isMounted",
          "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
          "replaceState",
          "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
      };
      for (Ki in kt)
        kt.hasOwnProperty(Ki) && C(Ki, kt[Ki]);
      xe.prototype = Ae.prototype, kt = L.prototype = new xe(), kt.constructor = L, bt(kt, Ae.prototype), kt.isPureReactComponent = !0;
      var Yt = Array.isArray, Ol = /* @__PURE__ */ Symbol.for("react.client.reference"), re = {
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
      }, wa = Object.prototype.hasOwnProperty, Lt = console.createTask ? console.createTask : function() {
        return null;
      };
      kt = {
        react_stack_bottom_frame: function(v) {
          return v();
        }
      };
      var We, wl, In = {}, da = kt.react_stack_bottom_frame.bind(
        kt,
        je
      )(), Wt = Lt(x(je)), ha = !1, Dc = /\/+/g, Mc = typeof reportError == "function" ? reportError : function(v) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
          var M = new window.ErrorEvent("error", {
            bubbles: !0,
            cancelable: !0,
            message: typeof v == "object" && v !== null && typeof v.message == "string" ? String(v.message) : String(v),
            error: v
          });
          if (!window.dispatchEvent(M)) return;
        } else if (typeof process == "object" && typeof process.emit == "function") {
          process.emit("uncaughtException", v);
          return;
        }
        console.error(v);
      }, Cc = !1, rn = null, yl = 0, ma = !1, Xl = !1, Vo = typeof queueMicrotask == "function" ? function(v) {
        queueMicrotask(function() {
          return queueMicrotask(v);
        });
      } : Mt;
      kt = Object.freeze({
        __proto__: null,
        c: function(v) {
          return ze().useMemoCache(v);
        }
      });
      var Ki = {
        map: de,
        forEach: function(v, M, ee) {
          de(
            v,
            function() {
              M.apply(this, arguments);
            },
            ee
          );
        },
        count: function(v) {
          var M = 0;
          return de(v, function() {
            M++;
          }), M;
        },
        toArray: function(v) {
          return de(v, function(M) {
            return M;
          }) || [];
        },
        only: function(v) {
          if (!Tt(v))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return v;
        }
      };
      te.Activity = ue, te.Children = Ki, te.Component = Ae, te.Fragment = E, te.Profiler = le, te.PureComponent = L, te.StrictMode = J, te.Suspense = Pe, te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = re, te.__COMPILER_RUNTIME = kt, te.act = function(v) {
        var M = re.actQueue, ee = yl;
        yl++;
        var ie = re.actQueue = M !== null ? M : [], ye = !1;
        try {
          var Ye = v();
        } catch (Ve) {
          re.thrownErrors.push(Ve);
        }
        if (0 < re.thrownErrors.length)
          throw q(M, ee), v = G(re.thrownErrors), re.thrownErrors.length = 0, v;
        if (Ye !== null && typeof Ye == "object" && typeof Ye.then == "function") {
          var Se = Ye;
          return Vo(function() {
            ye || ma || (ma = !0, console.error(
              "You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"
            ));
          }), {
            then: function(Ve, Fl) {
              ye = !0, Se.then(
                function(Xa) {
                  if (q(M, ee), ee === 0) {
                    try {
                      fe(ie), Mt(function() {
                        return I(
                          Xa,
                          Ve,
                          Fl
                        );
                      });
                    } catch (Uc) {
                      re.thrownErrors.push(Uc);
                    }
                    if (0 < re.thrownErrors.length) {
                      var sd = G(
                        re.thrownErrors
                      );
                      re.thrownErrors.length = 0, Fl(sd);
                    }
                  } else Ve(Xa);
                },
                function(Xa) {
                  q(M, ee), 0 < re.thrownErrors.length && (Xa = G(
                    re.thrownErrors
                  ), re.thrownErrors.length = 0), Fl(Xa);
                }
              );
            }
          };
        }
        var pt = Ye;
        if (q(M, ee), ee === 0 && (fe(ie), ie.length !== 0 && Vo(function() {
          ye || ma || (ma = !0, console.error(
            "A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"
          ));
        }), re.actQueue = null), 0 < re.thrownErrors.length)
          throw v = G(re.thrownErrors), re.thrownErrors.length = 0, v;
        return {
          then: function(Ve, Fl) {
            ye = !0, ee === 0 ? (re.actQueue = ie, Mt(function() {
              return I(
                pt,
                Ve,
                Fl
              );
            })) : Ve(pt);
          }
        };
      }, te.cache = function(v) {
        return function() {
          return v.apply(null, arguments);
        };
      }, te.cacheSignal = function() {
        return null;
      }, te.captureOwnerStack = function() {
        var v = re.getCurrentStack;
        return v === null ? null : v();
      }, te.cloneElement = function(v, M, ee) {
        if (v == null)
          throw Error(
            "The argument must be a React element, but you passed " + v + "."
          );
        var ie = bt({}, v.props), ye = v.key, Ye = v._owner;
        if (M != null) {
          var Se;
          e: {
            if (wa.call(M, "ref") && (Se = Object.getOwnPropertyDescriptor(
              M,
              "ref"
            ).get) && Se.isReactWarning) {
              Se = !1;
              break e;
            }
            Se = M.ref !== void 0;
          }
          Se && (Ye = ce()), $t(M) && (ae(M.key), ye = "" + M.key);
          for (pt in M)
            !wa.call(M, pt) || pt === "key" || pt === "__self" || pt === "__source" || pt === "ref" && M.ref === void 0 || (ie[pt] = M[pt]);
        }
        var pt = arguments.length - 2;
        if (pt === 1) ie.children = ee;
        else if (1 < pt) {
          Se = Array(pt);
          for (var Ve = 0; Ve < pt; Ve++)
            Se[Ve] = arguments[Ve + 2];
          ie.children = Se;
        }
        for (ie = Dt(
          v.type,
          ye,
          ie,
          Ye,
          v._debugStack,
          v._debugTask
        ), ye = 2; ye < arguments.length; ye++)
          Bt(arguments[ye]);
        return ie;
      }, te.createContext = function(v) {
        return v = {
          $$typeof: _e,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null
        }, v.Provider = v, v.Consumer = {
          $$typeof: ne,
          _context: v
        }, v._currentRenderer = null, v._currentRenderer2 = null, v;
      }, te.createElement = function(v, M, ee) {
        for (var ie = 2; ie < arguments.length; ie++)
          Bt(arguments[ie]);
        ie = {};
        var ye = null;
        if (M != null)
          for (Ve in wl || !("__self" in M) || "key" in M || (wl = !0, console.warn(
            "Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform"
          )), $t(M) && (ae(M.key), ye = "" + M.key), M)
            wa.call(M, Ve) && Ve !== "key" && Ve !== "__self" && Ve !== "__source" && (ie[Ve] = M[Ve]);
        var Ye = arguments.length - 2;
        if (Ye === 1) ie.children = ee;
        else if (1 < Ye) {
          for (var Se = Array(Ye), pt = 0; pt < Ye; pt++)
            Se[pt] = arguments[pt + 2];
          Object.freeze && Object.freeze(Se), ie.children = Se;
        }
        if (v && v.defaultProps)
          for (Ve in Ye = v.defaultProps, Ye)
            ie[Ve] === void 0 && (ie[Ve] = Ye[Ve]);
        ye && Ze(
          ie,
          typeof v == "function" ? v.displayName || v.name || "Unknown" : v
        );
        var Ve = 1e4 > re.recentlyCreatedOwnerStacks++;
        return Dt(
          v,
          ye,
          ie,
          ce(),
          Ve ? Error("react-stack-top-frame") : da,
          Ve ? Lt(x(v)) : Wt
        );
      }, te.createRef = function() {
        var v = { current: null };
        return Object.seal(v), v;
      }, te.forwardRef = function(v) {
        v != null && v.$$typeof === qt ? console.error(
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
        var M = { $$typeof: at, render: v }, ee;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ie) {
            ee = ie, v.name || v.displayName || (Object.defineProperty(v, "name", { value: ie }), v.displayName = ie);
          }
        }), M;
      }, te.isValidElement = Tt, te.lazy = function(v) {
        v = { _status: -1, _result: v };
        var M = {
          $$typeof: Ga,
          _payload: v,
          _init: st
        }, ee = {
          name: "lazy",
          start: -1,
          end: -1,
          value: null,
          owner: null,
          debugStack: Error("react-stack-top-frame"),
          debugTask: console.createTask ? console.createTask("lazy()") : null
        };
        return v._ioInfo = ee, M._debugInfo = [{ awaited: ee }], M;
      }, te.memo = function(v, M) {
        v == null && console.error(
          "memo: The first argument must be a component. Instead received: %s",
          v === null ? "null" : typeof v
        ), M = {
          $$typeof: qt,
          type: v,
          compare: M === void 0 ? null : M
        };
        var ee;
        return Object.defineProperty(M, "displayName", {
          enumerable: !1,
          configurable: !0,
          get: function() {
            return ee;
          },
          set: function(ie) {
            ee = ie, v.name || v.displayName || (Object.defineProperty(v, "name", { value: ie }), v.displayName = ie);
          }
        }), M;
      }, te.startTransition = function(v) {
        var M = re.T, ee = {};
        ee._updatedFibers = /* @__PURE__ */ new Set(), re.T = ee;
        try {
          var ie = v(), ye = re.S;
          ye !== null && ye(ee, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && (re.asyncTransitions++, ie.then(Ne, Ne), ie.then(V, Mc));
        } catch (Ye) {
          Mc(Ye);
        } finally {
          M === null && ee._updatedFibers && (v = ee._updatedFibers.size, ee._updatedFibers.clear(), 10 < v && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          )), M !== null && ee.types !== null && (M.types !== null && M.types !== ee.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), M.types = ee.types), re.T = M;
        }
      }, te.unstable_useCacheRefresh = function() {
        return ze().useCacheRefresh();
      }, te.use = function(v) {
        return ze().use(v);
      }, te.useActionState = function(v, M, ee) {
        return ze().useActionState(
          v,
          M,
          ee
        );
      }, te.useCallback = function(v, M) {
        return ze().useCallback(v, M);
      }, te.useContext = function(v) {
        var M = ze();
        return v.$$typeof === ne && console.error(
          "Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?"
        ), M.useContext(v);
      }, te.useDebugValue = function(v, M) {
        return ze().useDebugValue(v, M);
      }, te.useDeferredValue = function(v, M) {
        return ze().useDeferredValue(v, M);
      }, te.useEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ze().useEffect(v, M);
      }, te.useEffectEvent = function(v) {
        return ze().useEffectEvent(v);
      }, te.useId = function() {
        return ze().useId();
      }, te.useImperativeHandle = function(v, M, ee) {
        return ze().useImperativeHandle(v, M, ee);
      }, te.useInsertionEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useInsertionEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ze().useInsertionEffect(v, M);
      }, te.useLayoutEffect = function(v, M) {
        return v == null && console.warn(
          "React Hook useLayoutEffect requires an effect callback. Did you forget to pass a callback to the hook?"
        ), ze().useLayoutEffect(v, M);
      }, te.useMemo = function(v, M) {
        return ze().useMemo(v, M);
      }, te.useOptimistic = function(v, M) {
        return ze().useOptimistic(v, M);
      }, te.useReducer = function(v, M, ee) {
        return ze().useReducer(v, M, ee);
      }, te.useRef = function(v) {
        return ze().useRef(v);
      }, te.useState = function(v) {
        return ze().useState(v);
      }, te.useSyncExternalStore = function(v, M, ee) {
        return ze().useSyncExternalStore(
          v,
          M,
          ee
        );
      }, te.useTransition = function() {
        return ze().useTransition();
      }, te.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(Cv, Cv.exports)), Cv.exports;
}
var jE;
function Um() {
  if (jE) return Vg.exports;
  jE = 1;
  var w = {};
  return w.NODE_ENV === "production" ? Vg.exports = EA() : Vg.exports = TA(), Vg.exports;
}
var qE;
function AA() {
  if (qE) return Rv;
  qE = 1;
  var w = {};
  return w.NODE_ENV !== "production" && (function() {
    function te(E) {
      if (E == null) return null;
      if (typeof E == "function")
        return E.$$typeof === st ? null : E.displayName || E.name || null;
      if (typeof E == "string") return E;
      switch (E) {
        case Ze:
          return "Fragment";
        case Dt:
          return "Profiler";
        case ct:
          return "StrictMode";
        case qe:
          return "Suspense";
        case At:
          return "SuspenseList";
        case de:
          return "Activity";
      }
      if (typeof E == "object")
        switch (typeof E.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), E.$$typeof) {
          case $t:
            return "Portal";
          case Bt:
            return E.displayName || "Context";
          case jt:
            return (E._context.displayName || "Context") + ".Consumer";
          case Tt:
            var J = E.render;
            return E = E.displayName, E || (E = J.displayName || J.name || "", E = E !== "" ? "ForwardRef(" + E + ")" : "ForwardRef"), E;
          case ke:
            return J = E.displayName || null, J !== null ? J : te(E.type) || "Memo";
          case zt:
            J = E._payload, E = E._init;
            try {
              return te(E(J));
            } catch {
            }
        }
      return null;
    }
    function Te(E) {
      return "" + E;
    }
    function C(E) {
      try {
        Te(E);
        var J = !1;
      } catch {
        J = !0;
      }
      if (J) {
        J = console;
        var le = J.error, ne = typeof Symbol == "function" && Symbol.toStringTag && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return le.call(
          J,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          ne
        ), Te(E);
      }
    }
    function he(E) {
      if (E === Ze) return "<>";
      if (typeof E == "object" && E !== null && E.$$typeof === zt)
        return "<...>";
      try {
        var J = te(E);
        return J ? "<" + J + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function pe() {
      var E = ze.A;
      return E === null ? null : E.getOwner();
    }
    function Ae() {
      return Error("react-stack-top-frame");
    }
    function xe(E) {
      if (Ne.call(E, "key")) {
        var J = Object.getOwnPropertyDescriptor(E, "key").get;
        if (J && J.isReactWarning) return !1;
      }
      return E.key !== void 0;
    }
    function L(E, J) {
      function le() {
        q || (q = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          J
        ));
      }
      le.isReactWarning = !0, Object.defineProperty(E, "key", {
        get: le,
        configurable: !0
      });
    }
    function V() {
      var E = te(this.type);
      return I[E] || (I[E] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), E = this.props.ref, E !== void 0 ? E : null;
    }
    function Ce(E, J, le, ne, _e, at) {
      var Pe = le.ref;
      return E = {
        $$typeof: je,
        type: E,
        key: J,
        props: le,
        _owner: ne
      }, (Pe !== void 0 ? Pe : null) !== null ? Object.defineProperty(E, "ref", {
        enumerable: !1,
        get: V
      }) : Object.defineProperty(E, "ref", { enumerable: !1, value: null }), E._store = {}, Object.defineProperty(E._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(E, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(E, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _e
      }), Object.defineProperty(E, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: at
      }), Object.freeze && (Object.freeze(E.props), Object.freeze(E)), E;
    }
    function ae(E, J, le, ne, _e, at) {
      var Pe = J.children;
      if (Pe !== void 0)
        if (ne)
          if (Mt(Pe)) {
            for (ne = 0; ne < Pe.length; ne++)
              k(Pe[ne]);
            Object.freeze && Object.freeze(Pe);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else k(Pe);
      if (Ne.call(J, "key")) {
        Pe = te(E);
        var rt = Object.keys(J).filter(function(Ga) {
          return Ga !== "key";
        });
        ne = 0 < rt.length ? "{key: someKey, " + rt.join(": ..., ") + ": ...}" : "{key: someKey}", z[Pe + ne] || (rt = 0 < rt.length ? "{" + rt.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          ne,
          Pe,
          rt,
          Pe
        ), z[Pe + ne] = !0);
      }
      if (Pe = null, le !== void 0 && (C(le), Pe = "" + le), xe(J) && (C(J.key), Pe = "" + J.key), "key" in J) {
        le = {};
        for (var qt in J)
          qt !== "key" && (le[qt] = J[qt]);
      } else le = J;
      return Pe && L(
        le,
        typeof E == "function" ? E.displayName || E.name || "Unknown" : E
      ), Ce(
        E,
        Pe,
        le,
        pe(),
        _e,
        at
      );
    }
    function k(E) {
      x(E) ? E._store && (E._store.validated = 1) : typeof E == "object" && E !== null && E.$$typeof === zt && (E._payload.status === "fulfilled" ? x(E._payload.value) && E._payload.value._store && (E._payload.value._store.validated = 1) : E._store && (E._store.validated = 1));
    }
    function x(E) {
      return typeof E == "object" && E !== null && E.$$typeof === je;
    }
    var ce = Um(), je = /* @__PURE__ */ Symbol.for("react.transitional.element"), $t = /* @__PURE__ */ Symbol.for("react.portal"), Ze = /* @__PURE__ */ Symbol.for("react.fragment"), ct = /* @__PURE__ */ Symbol.for("react.strict_mode"), Dt = /* @__PURE__ */ Symbol.for("react.profiler"), jt = /* @__PURE__ */ Symbol.for("react.consumer"), Bt = /* @__PURE__ */ Symbol.for("react.context"), Tt = /* @__PURE__ */ Symbol.for("react.forward_ref"), qe = /* @__PURE__ */ Symbol.for("react.suspense"), At = /* @__PURE__ */ Symbol.for("react.suspense_list"), ke = /* @__PURE__ */ Symbol.for("react.memo"), zt = /* @__PURE__ */ Symbol.for("react.lazy"), de = /* @__PURE__ */ Symbol.for("react.activity"), st = /* @__PURE__ */ Symbol.for("react.client.reference"), ze = ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ne = Object.prototype.hasOwnProperty, Mt = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    ce = {
      react_stack_bottom_frame: function(E) {
        return E();
      }
    };
    var q, I = {}, fe = ce.react_stack_bottom_frame.bind(
      ce,
      Ae
    )(), ge = G(he(Ae)), z = {};
    Rv.Fragment = Ze, Rv.jsx = function(E, J, le) {
      var ne = 1e4 > ze.recentlyCreatedOwnerStacks++;
      return ae(
        E,
        J,
        le,
        !1,
        ne ? Error("react-stack-top-frame") : fe,
        ne ? G(he(E)) : ge
      );
    }, Rv.jsxs = function(E, J, le) {
      var ne = 1e4 > ze.recentlyCreatedOwnerStacks++;
      return ae(
        E,
        J,
        le,
        !0,
        ne ? Error("react-stack-top-frame") : fe,
        ne ? G(he(E)) : ge
      );
    };
  })(), Rv;
}
var BE;
function zA() {
  if (BE) return Xg.exports;
  BE = 1;
  var w = {};
  return w.NODE_ENV === "production" ? Xg.exports = bA() : Xg.exports = AA(), Xg.exports;
}
var N = zA(), Qe = Um(), Lg = { exports: {} }, _v = {}, Qg = { exports: {} }, S1 = {};
var YE;
function OA() {
  return YE || (YE = 1, (function(w) {
    function te(G, q) {
      var I = G.length;
      G.push(q);
      e: for (; 0 < I; ) {
        var fe = I - 1 >>> 1, ge = G[fe];
        if (0 < he(ge, q))
          G[fe] = q, G[I] = ge, I = fe;
        else break e;
      }
    }
    function Te(G) {
      return G.length === 0 ? null : G[0];
    }
    function C(G) {
      if (G.length === 0) return null;
      var q = G[0], I = G.pop();
      if (I !== q) {
        G[0] = I;
        e: for (var fe = 0, ge = G.length, z = ge >>> 1; fe < z; ) {
          var E = 2 * (fe + 1) - 1, J = G[E], le = E + 1, ne = G[le];
          if (0 > he(J, I))
            le < ge && 0 > he(ne, J) ? (G[fe] = ne, G[le] = I, fe = le) : (G[fe] = J, G[E] = I, fe = E);
          else if (le < ge && 0 > he(ne, I))
            G[fe] = ne, G[le] = I, fe = le;
          else break e;
        }
      }
      return q;
    }
    function he(G, q) {
      var I = G.sortIndex - q.sortIndex;
      return I !== 0 ? I : G.id - q.id;
    }
    if (w.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var pe = performance;
      w.unstable_now = function() {
        return pe.now();
      };
    } else {
      var Ae = Date, xe = Ae.now();
      w.unstable_now = function() {
        return Ae.now() - xe;
      };
    }
    var L = [], V = [], Ce = 1, ae = null, k = 3, x = !1, ce = !1, je = !1, $t = !1, Ze = typeof setTimeout == "function" ? setTimeout : null, ct = typeof clearTimeout == "function" ? clearTimeout : null, Dt = typeof setImmediate < "u" ? setImmediate : null;
    function jt(G) {
      for (var q = Te(V); q !== null; ) {
        if (q.callback === null) C(V);
        else if (q.startTime <= G)
          C(V), q.sortIndex = q.expirationTime, te(L, q);
        else break;
        q = Te(V);
      }
    }
    function Bt(G) {
      if (je = !1, jt(G), !ce)
        if (Te(L) !== null)
          ce = !0, Tt || (Tt = !0, st());
        else {
          var q = Te(V);
          q !== null && Mt(Bt, q.startTime - G);
        }
    }
    var Tt = !1, qe = -1, At = 5, ke = -1;
    function zt() {
      return $t ? !0 : !(w.unstable_now() - ke < At);
    }
    function de() {
      if ($t = !1, Tt) {
        var G = w.unstable_now();
        ke = G;
        var q = !0;
        try {
          e: {
            ce = !1, je && (je = !1, ct(qe), qe = -1), x = !0;
            var I = k;
            try {
              t: {
                for (jt(G), ae = Te(L); ae !== null && !(ae.expirationTime > G && zt()); ) {
                  var fe = ae.callback;
                  if (typeof fe == "function") {
                    ae.callback = null, k = ae.priorityLevel;
                    var ge = fe(
                      ae.expirationTime <= G
                    );
                    if (G = w.unstable_now(), typeof ge == "function") {
                      ae.callback = ge, jt(G), q = !0;
                      break t;
                    }
                    ae === Te(L) && C(L), jt(G);
                  } else C(L);
                  ae = Te(L);
                }
                if (ae !== null) q = !0;
                else {
                  var z = Te(V);
                  z !== null && Mt(
                    Bt,
                    z.startTime - G
                  ), q = !1;
                }
              }
              break e;
            } finally {
              ae = null, k = I, x = !1;
            }
            q = void 0;
          }
        } finally {
          q ? st() : Tt = !1;
        }
      }
    }
    var st;
    if (typeof Dt == "function")
      st = function() {
        Dt(de);
      };
    else if (typeof MessageChannel < "u") {
      var ze = new MessageChannel(), Ne = ze.port2;
      ze.port1.onmessage = de, st = function() {
        Ne.postMessage(null);
      };
    } else
      st = function() {
        Ze(de, 0);
      };
    function Mt(G, q) {
      qe = Ze(function() {
        G(w.unstable_now());
      }, q);
    }
    w.unstable_IdlePriority = 5, w.unstable_ImmediatePriority = 1, w.unstable_LowPriority = 4, w.unstable_NormalPriority = 3, w.unstable_Profiling = null, w.unstable_UserBlockingPriority = 2, w.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, w.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : At = 0 < G ? Math.floor(1e3 / G) : 5;
    }, w.unstable_getCurrentPriorityLevel = function() {
      return k;
    }, w.unstable_next = function(G) {
      switch (k) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = k;
      }
      var I = k;
      k = q;
      try {
        return G();
      } finally {
        k = I;
      }
    }, w.unstable_requestPaint = function() {
      $t = !0;
    }, w.unstable_runWithPriority = function(G, q) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var I = k;
      k = G;
      try {
        return q();
      } finally {
        k = I;
      }
    }, w.unstable_scheduleCallback = function(G, q, I) {
      var fe = w.unstable_now();
      switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? fe + I : fe) : I = fe, G) {
        case 1:
          var ge = -1;
          break;
        case 2:
          ge = 250;
          break;
        case 5:
          ge = 1073741823;
          break;
        case 4:
          ge = 1e4;
          break;
        default:
          ge = 5e3;
      }
      return ge = I + ge, G = {
        id: Ce++,
        callback: q,
        priorityLevel: G,
        startTime: I,
        expirationTime: ge,
        sortIndex: -1
      }, I > fe ? (G.sortIndex = I, te(V, G), Te(L) === null && G === Te(V) && (je ? (ct(qe), qe = -1) : je = !0, Mt(Bt, I - fe))) : (G.sortIndex = ge, te(L, G), ce || x || (ce = !0, Tt || (Tt = !0, st()))), G;
    }, w.unstable_shouldYield = zt, w.unstable_wrapCallback = function(G) {
      var q = k;
      return function() {
        var I = k;
        k = q;
        try {
          return G.apply(this, arguments);
        } finally {
          k = I;
        }
      };
    };
  })(S1)), S1;
}
var b1 = {}, GE;
function RA() {
  return GE || (GE = 1, (function(w) {
    var te = {};
    te.NODE_ENV !== "production" && (function() {
      function Te() {
        if (Tt = !1, zt) {
          var q = w.unstable_now();
          ze = q;
          var I = !0;
          try {
            e: {
              jt = !1, Bt && (Bt = !1, At(de), de = -1), Dt = !0;
              var fe = ct;
              try {
                t: {
                  for (xe(q), Ze = he(ce); Ze !== null && !(Ze.expirationTime > q && V()); ) {
                    var ge = Ze.callback;
                    if (typeof ge == "function") {
                      Ze.callback = null, ct = Ze.priorityLevel;
                      var z = ge(
                        Ze.expirationTime <= q
                      );
                      if (q = w.unstable_now(), typeof z == "function") {
                        Ze.callback = z, xe(q), I = !0;
                        break t;
                      }
                      Ze === he(ce) && pe(ce), xe(q);
                    } else pe(ce);
                    Ze = he(ce);
                  }
                  if (Ze !== null) I = !0;
                  else {
                    var E = he(je);
                    E !== null && Ce(
                      L,
                      E.startTime - q
                    ), I = !1;
                  }
                }
                break e;
              } finally {
                Ze = null, ct = fe, Dt = !1;
              }
              I = void 0;
            }
          } finally {
            I ? Ne() : zt = !1;
          }
        }
      }
      function C(q, I) {
        var fe = q.length;
        q.push(I);
        e: for (; 0 < fe; ) {
          var ge = fe - 1 >>> 1, z = q[ge];
          if (0 < Ae(z, I))
            q[ge] = I, q[fe] = z, fe = ge;
          else break e;
        }
      }
      function he(q) {
        return q.length === 0 ? null : q[0];
      }
      function pe(q) {
        if (q.length === 0) return null;
        var I = q[0], fe = q.pop();
        if (fe !== I) {
          q[0] = fe;
          e: for (var ge = 0, z = q.length, E = z >>> 1; ge < E; ) {
            var J = 2 * (ge + 1) - 1, le = q[J], ne = J + 1, _e = q[ne];
            if (0 > Ae(le, fe))
              ne < z && 0 > Ae(_e, le) ? (q[ge] = _e, q[ne] = fe, ge = ne) : (q[ge] = le, q[J] = fe, ge = J);
            else if (ne < z && 0 > Ae(_e, fe))
              q[ge] = _e, q[ne] = fe, ge = ne;
            else break e;
          }
        }
        return I;
      }
      function Ae(q, I) {
        var fe = q.sortIndex - I.sortIndex;
        return fe !== 0 ? fe : q.id - I.id;
      }
      function xe(q) {
        for (var I = he(je); I !== null; ) {
          if (I.callback === null) pe(je);
          else if (I.startTime <= q)
            pe(je), I.sortIndex = I.expirationTime, C(ce, I);
          else break;
          I = he(je);
        }
      }
      function L(q) {
        if (Bt = !1, xe(q), !jt)
          if (he(ce) !== null)
            jt = !0, zt || (zt = !0, Ne());
          else {
            var I = he(je);
            I !== null && Ce(
              L,
              I.startTime - q
            );
          }
      }
      function V() {
        return Tt ? !0 : !(w.unstable_now() - ze < st);
      }
      function Ce(q, I) {
        de = qe(function() {
          q(w.unstable_now());
        }, I);
      }
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error()), w.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var ae = performance;
        w.unstable_now = function() {
          return ae.now();
        };
      } else {
        var k = Date, x = k.now();
        w.unstable_now = function() {
          return k.now() - x;
        };
      }
      var ce = [], je = [], $t = 1, Ze = null, ct = 3, Dt = !1, jt = !1, Bt = !1, Tt = !1, qe = typeof setTimeout == "function" ? setTimeout : null, At = typeof clearTimeout == "function" ? clearTimeout : null, ke = typeof setImmediate < "u" ? setImmediate : null, zt = !1, de = -1, st = 5, ze = -1;
      if (typeof ke == "function")
        var Ne = function() {
          ke(Te);
        };
      else if (typeof MessageChannel < "u") {
        var Mt = new MessageChannel(), G = Mt.port2;
        Mt.port1.onmessage = Te, Ne = function() {
          G.postMessage(null);
        };
      } else
        Ne = function() {
          qe(Te, 0);
        };
      w.unstable_IdlePriority = 5, w.unstable_ImmediatePriority = 1, w.unstable_LowPriority = 4, w.unstable_NormalPriority = 3, w.unstable_Profiling = null, w.unstable_UserBlockingPriority = 2, w.unstable_cancelCallback = function(q) {
        q.callback = null;
      }, w.unstable_forceFrameRate = function(q) {
        0 > q || 125 < q ? console.error(
          "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
        ) : st = 0 < q ? Math.floor(1e3 / q) : 5;
      }, w.unstable_getCurrentPriorityLevel = function() {
        return ct;
      }, w.unstable_next = function(q) {
        switch (ct) {
          case 1:
          case 2:
          case 3:
            var I = 3;
            break;
          default:
            I = ct;
        }
        var fe = ct;
        ct = I;
        try {
          return q();
        } finally {
          ct = fe;
        }
      }, w.unstable_requestPaint = function() {
        Tt = !0;
      }, w.unstable_runWithPriority = function(q, I) {
        switch (q) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            q = 3;
        }
        var fe = ct;
        ct = q;
        try {
          return I();
        } finally {
          ct = fe;
        }
      }, w.unstable_scheduleCallback = function(q, I, fe) {
        var ge = w.unstable_now();
        switch (typeof fe == "object" && fe !== null ? (fe = fe.delay, fe = typeof fe == "number" && 0 < fe ? ge + fe : ge) : fe = ge, q) {
          case 1:
            var z = -1;
            break;
          case 2:
            z = 250;
            break;
          case 5:
            z = 1073741823;
            break;
          case 4:
            z = 1e4;
            break;
          default:
            z = 5e3;
        }
        return z = fe + z, q = {
          id: $t++,
          callback: I,
          priorityLevel: q,
          startTime: fe,
          expirationTime: z,
          sortIndex: -1
        }, fe > ge ? (q.sortIndex = fe, C(je, q), he(ce) === null && q === he(je) && (Bt ? (At(de), de = -1) : Bt = !0, Ce(L, fe - ge))) : (q.sortIndex = z, C(ce, q), jt || Dt || (jt = !0, zt || (zt = !0, Ne()))), q;
      }, w.unstable_shouldYield = V, w.unstable_wrapCallback = function(q) {
        var I = ct;
        return function() {
          var fe = ct;
          ct = I;
          try {
            return q.apply(this, arguments);
          } finally {
            ct = fe;
          }
        };
      }, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
    })();
  })(b1)), b1;
}
var wE;
function kE() {
  if (wE) return Qg.exports;
  wE = 1;
  var w = {};
  return w.NODE_ENV === "production" ? Qg.exports = OA() : Qg.exports = RA(), Qg.exports;
}
var Zg = { exports: {} }, fn = {};
var XE;
function _A() {
  if (XE) return fn;
  XE = 1;
  var w = Um();
  function te(L) {
    var V = "https://react.dev/errors/" + L;
    if (1 < arguments.length) {
      V += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var Ce = 2; Ce < arguments.length; Ce++)
        V += "&args[]=" + encodeURIComponent(arguments[Ce]);
    }
    return "Minified React error #" + L + "; visit " + V + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function Te() {
  }
  var C = {
    d: {
      f: Te,
      r: function() {
        throw Error(te(522));
      },
      D: Te,
      C: Te,
      L: Te,
      m: Te,
      X: Te,
      S: Te,
      M: Te
    },
    p: 0,
    findDOMNode: null
  }, he = /* @__PURE__ */ Symbol.for("react.portal");
  function pe(L, V, Ce) {
    var ae = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: he,
      key: ae == null ? null : "" + ae,
      children: L,
      containerInfo: V,
      implementation: Ce
    };
  }
  var Ae = w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function xe(L, V) {
    if (L === "font") return "";
    if (typeof V == "string")
      return V === "use-credentials" ? V : "";
  }
  return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = C, fn.createPortal = function(L, V) {
    var Ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!V || V.nodeType !== 1 && V.nodeType !== 9 && V.nodeType !== 11)
      throw Error(te(299));
    return pe(L, V, null, Ce);
  }, fn.flushSync = function(L) {
    var V = Ae.T, Ce = C.p;
    try {
      if (Ae.T = null, C.p = 2, L) return L();
    } finally {
      Ae.T = V, C.p = Ce, C.d.f();
    }
  }, fn.preconnect = function(L, V) {
    typeof L == "string" && (V ? (V = V.crossOrigin, V = typeof V == "string" ? V === "use-credentials" ? V : "" : void 0) : V = null, C.d.C(L, V));
  }, fn.prefetchDNS = function(L) {
    typeof L == "string" && C.d.D(L);
  }, fn.preinit = function(L, V) {
    if (typeof L == "string" && V && typeof V.as == "string") {
      var Ce = V.as, ae = xe(Ce, V.crossOrigin), k = typeof V.integrity == "string" ? V.integrity : void 0, x = typeof V.fetchPriority == "string" ? V.fetchPriority : void 0;
      Ce === "style" ? C.d.S(
        L,
        typeof V.precedence == "string" ? V.precedence : void 0,
        {
          crossOrigin: ae,
          integrity: k,
          fetchPriority: x
        }
      ) : Ce === "script" && C.d.X(L, {
        crossOrigin: ae,
        integrity: k,
        fetchPriority: x,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0
      });
    }
  }, fn.preinitModule = function(L, V) {
    if (typeof L == "string")
      if (typeof V == "object" && V !== null) {
        if (V.as == null || V.as === "script") {
          var Ce = xe(
            V.as,
            V.crossOrigin
          );
          C.d.M(L, {
            crossOrigin: Ce,
            integrity: typeof V.integrity == "string" ? V.integrity : void 0,
            nonce: typeof V.nonce == "string" ? V.nonce : void 0
          });
        }
      } else V == null && C.d.M(L);
  }, fn.preload = function(L, V) {
    if (typeof L == "string" && typeof V == "object" && V !== null && typeof V.as == "string") {
      var Ce = V.as, ae = xe(Ce, V.crossOrigin);
      C.d.L(L, Ce, {
        crossOrigin: ae,
        integrity: typeof V.integrity == "string" ? V.integrity : void 0,
        nonce: typeof V.nonce == "string" ? V.nonce : void 0,
        type: typeof V.type == "string" ? V.type : void 0,
        fetchPriority: typeof V.fetchPriority == "string" ? V.fetchPriority : void 0,
        referrerPolicy: typeof V.referrerPolicy == "string" ? V.referrerPolicy : void 0,
        imageSrcSet: typeof V.imageSrcSet == "string" ? V.imageSrcSet : void 0,
        imageSizes: typeof V.imageSizes == "string" ? V.imageSizes : void 0,
        media: typeof V.media == "string" ? V.media : void 0
      });
    }
  }, fn.preloadModule = function(L, V) {
    if (typeof L == "string")
      if (V) {
        var Ce = xe(V.as, V.crossOrigin);
        C.d.m(L, {
          as: typeof V.as == "string" && V.as !== "script" ? V.as : void 0,
          crossOrigin: Ce,
          integrity: typeof V.integrity == "string" ? V.integrity : void 0
        });
      } else C.d.m(L);
  }, fn.requestFormReset = function(L) {
    C.d.r(L);
  }, fn.unstable_batchedUpdates = function(L, V) {
    return L(V);
  }, fn.useFormState = function(L, V, Ce) {
    return Ae.H.useFormState(L, V, Ce);
  }, fn.useFormStatus = function() {
    return Ae.H.useHostTransitionStatus();
  }, fn.version = "19.2.3", fn;
}
var sn = {}, VE;
function DA() {
  if (VE) return sn;
  VE = 1;
  var w = {};
  return w.NODE_ENV !== "production" && (function() {
    function te() {
    }
    function Te(k) {
      return "" + k;
    }
    function C(k, x, ce) {
      var je = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      try {
        Te(je);
        var $t = !1;
      } catch {
        $t = !0;
      }
      return $t && (console.error(
        "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
        typeof Symbol == "function" && Symbol.toStringTag && je[Symbol.toStringTag] || je.constructor.name || "Object"
      ), Te(je)), {
        $$typeof: Ce,
        key: je == null ? null : "" + je,
        children: k,
        containerInfo: x,
        implementation: ce
      };
    }
    function he(k, x) {
      if (k === "font") return "";
      if (typeof x == "string")
        return x === "use-credentials" ? x : "";
    }
    function pe(k) {
      return k === null ? "`null`" : k === void 0 ? "`undefined`" : k === "" ? "an empty string" : 'something with type "' + typeof k + '"';
    }
    function Ae(k) {
      return k === null ? "`null`" : k === void 0 ? "`undefined`" : k === "" ? "an empty string" : typeof k == "string" ? JSON.stringify(k) : typeof k == "number" ? "`" + k + "`" : 'something with type "' + typeof k + '"';
    }
    function xe() {
      var k = ae.H;
      return k === null && console.error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      ), k;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var L = Um(), V = {
      d: {
        f: te,
        r: function() {
          throw Error(
            "Invalid form element. requestFormReset must be passed a form that was rendered by React."
          );
        },
        D: te,
        C: te,
        L: te,
        m: te,
        X: te,
        S: te,
        M: te
      },
      p: 0,
      findDOMNode: null
    }, Ce = /* @__PURE__ */ Symbol.for("react.portal"), ae = L.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
    ), sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = V, sn.createPortal = function(k, x) {
      var ce = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)
        throw Error("Target container is not a DOM element.");
      return C(k, x, null, ce);
    }, sn.flushSync = function(k) {
      var x = ae.T, ce = V.p;
      try {
        if (ae.T = null, V.p = 2, k)
          return k();
      } finally {
        ae.T = x, V.p = ce, V.d.f() && console.error(
          "flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."
        );
      }
    }, sn.preconnect = function(k, x) {
      typeof k == "string" && k ? x != null && typeof x != "object" ? console.error(
        "ReactDOM.preconnect(): Expected the `options` argument (second) to be an object but encountered %s instead. The only supported option at this time is `crossOrigin` which accepts a string.",
        Ae(x)
      ) : x != null && typeof x.crossOrigin != "string" && console.error(
        "ReactDOM.preconnect(): Expected the `crossOrigin` option (second argument) to be a string but encountered %s instead. Try removing this option or passing a string value instead.",
        pe(x.crossOrigin)
      ) : console.error(
        "ReactDOM.preconnect(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        pe(k)
      ), typeof k == "string" && (x ? (x = x.crossOrigin, x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null, V.d.C(k, x));
    }, sn.prefetchDNS = function(k) {
      if (typeof k != "string" || !k)
        console.error(
          "ReactDOM.prefetchDNS(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
          pe(k)
        );
      else if (1 < arguments.length) {
        var x = arguments[1];
        typeof x == "object" && x.hasOwnProperty("crossOrigin") ? console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. It looks like the you are attempting to set a crossOrigin property for this DNS lookup hint. Browsers do not perform DNS queries using CORS and setting this attribute on the resource hint has no effect. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ae(x)
        ) : console.error(
          "ReactDOM.prefetchDNS(): Expected only one argument, `href`, but encountered %s as a second argument instead. This argument is reserved for future options and is currently disallowed. Try calling ReactDOM.prefetchDNS() with just a single string argument, `href`.",
          Ae(x)
        );
      }
      typeof k == "string" && V.d.D(k);
    }, sn.preinit = function(k, x) {
      if (typeof k == "string" && k ? x == null || typeof x != "object" ? console.error(
        "ReactDOM.preinit(): Expected the `options` argument (second) to be an object with an `as` property describing the type of resource to be preinitialized but encountered %s instead.",
        Ae(x)
      ) : x.as !== "style" && x.as !== "script" && console.error(
        'ReactDOM.preinit(): Expected the `as` property in the `options` argument (second) to contain a valid value describing the type of resource to be preinitialized but encountered %s instead. Valid values for `as` are "style" and "script".',
        Ae(x.as)
      ) : console.error(
        "ReactDOM.preinit(): Expected the `href` argument (first) to be a non-empty string but encountered %s instead.",
        pe(k)
      ), typeof k == "string" && x && typeof x.as == "string") {
        var ce = x.as, je = he(ce, x.crossOrigin), $t = typeof x.integrity == "string" ? x.integrity : void 0, Ze = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
        ce === "style" ? V.d.S(
          k,
          typeof x.precedence == "string" ? x.precedence : void 0,
          {
            crossOrigin: je,
            integrity: $t,
            fetchPriority: Ze
          }
        ) : ce === "script" && V.d.X(k, {
          crossOrigin: je,
          integrity: $t,
          fetchPriority: Ze,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0
        });
      }
    }, sn.preinitModule = function(k, x) {
      var ce = "";
      typeof k == "string" && k || (ce += " The `href` argument encountered was " + pe(k) + "."), x !== void 0 && typeof x != "object" ? ce += " The `options` argument encountered was " + pe(x) + "." : x && "as" in x && x.as !== "script" && (ce += " The `as` option encountered was " + Ae(x.as) + "."), ce ? console.error(
        "ReactDOM.preinitModule(): Expected up to two arguments, a non-empty `href` string and, optionally, an `options` object with a valid `as` property.%s",
        ce
      ) : (ce = x && typeof x.as == "string" ? x.as : "script", ce) === "script" || (ce = Ae(ce), console.error(
        'ReactDOM.preinitModule(): Currently the only supported "as" type for this function is "script" but received "%s" instead. This warning was generated for `href` "%s". In the future other module types will be supported, aligning with the import-attributes proposal. Learn more here: (https://github.com/tc39/proposal-import-attributes)',
        ce,
        k
      )), typeof k == "string" && (typeof x == "object" && x !== null ? (x.as == null || x.as === "script") && (ce = he(
        x.as,
        x.crossOrigin
      ), V.d.M(k, {
        crossOrigin: ce,
        integrity: typeof x.integrity == "string" ? x.integrity : void 0,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0
      })) : x == null && V.d.M(k));
    }, sn.preload = function(k, x) {
      var ce = "";
      if (typeof k == "string" && k || (ce += " The `href` argument encountered was " + pe(k) + "."), x == null || typeof x != "object" ? ce += " The `options` argument encountered was " + pe(x) + "." : typeof x.as == "string" && x.as || (ce += " The `as` option encountered was " + pe(x.as) + "."), ce && console.error(
        'ReactDOM.preload(): Expected two arguments, a non-empty `href` string and an `options` object with an `as` property valid for a `<link rel="preload" as="..." />` tag.%s',
        ce
      ), typeof k == "string" && typeof x == "object" && x !== null && typeof x.as == "string") {
        ce = x.as;
        var je = he(
          ce,
          x.crossOrigin
        );
        V.d.L(k, ce, {
          crossOrigin: je,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          type: typeof x.type == "string" ? x.type : void 0,
          fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
          referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
          imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
          imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
          media: typeof x.media == "string" ? x.media : void 0
        });
      }
    }, sn.preloadModule = function(k, x) {
      var ce = "";
      typeof k == "string" && k || (ce += " The `href` argument encountered was " + pe(k) + "."), x !== void 0 && typeof x != "object" ? ce += " The `options` argument encountered was " + pe(x) + "." : x && "as" in x && typeof x.as != "string" && (ce += " The `as` option encountered was " + pe(x.as) + "."), ce && console.error(
        'ReactDOM.preloadModule(): Expected two arguments, a non-empty `href` string and, optionally, an `options` object with an `as` property valid for a `<link rel="modulepreload" as="..." />` tag.%s',
        ce
      ), typeof k == "string" && (x ? (ce = he(
        x.as,
        x.crossOrigin
      ), V.d.m(k, {
        as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
        crossOrigin: ce,
        integrity: typeof x.integrity == "string" ? x.integrity : void 0
      })) : V.d.m(k));
    }, sn.requestFormReset = function(k) {
      V.d.r(k);
    }, sn.unstable_batchedUpdates = function(k, x) {
      return k(x);
    }, sn.useFormState = function(k, x, ce) {
      return xe().useFormState(k, x, ce);
    }, sn.useFormStatus = function() {
      return xe().useHostTransitionStatus();
    }, sn.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), sn;
}
var LE;
function WE() {
  if (LE) return Zg.exports;
  LE = 1;
  var w = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (w.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Te) {
        console.error(Te);
      }
    }
  }
  return w.NODE_ENV === "production" ? (te(), Zg.exports = _A()) : Zg.exports = DA(), Zg.exports;
}
var QE;
function MA() {
  if (QE) return _v;
  QE = 1;
  var w = kE(), te = Um(), Te = WE();
  function C(l) {
    var n = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        n += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function he(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function pe(l) {
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
  function Ae(l) {
    if (l.tag === 13) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function xe(l) {
    if (l.tag === 31) {
      var n = l.memoizedState;
      if (n === null && (l = l.alternate, l !== null && (n = l.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function L(l) {
    if (pe(l) !== l)
      throw Error(C(188));
  }
  function V(l) {
    var n = l.alternate;
    if (!n) {
      if (n = pe(l), n === null) throw Error(C(188));
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
          if (r === u) return L(s), l;
          if (r === c) return L(s), n;
          r = r.sibling;
        }
        throw Error(C(188));
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
          if (!m) throw Error(C(189));
        }
      }
      if (u.alternate !== c) throw Error(C(190));
    }
    if (u.tag !== 3) throw Error(C(188));
    return u.stateNode.current === u ? l : n;
  }
  function Ce(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l;
    for (l = l.child; l !== null; ) {
      if (n = Ce(l), n !== null) return n;
      l = l.sibling;
    }
    return null;
  }
  var ae = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), x = /* @__PURE__ */ Symbol.for("react.transitional.element"), ce = /* @__PURE__ */ Symbol.for("react.portal"), je = /* @__PURE__ */ Symbol.for("react.fragment"), $t = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ze = /* @__PURE__ */ Symbol.for("react.profiler"), ct = /* @__PURE__ */ Symbol.for("react.consumer"), Dt = /* @__PURE__ */ Symbol.for("react.context"), jt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Bt = /* @__PURE__ */ Symbol.for("react.suspense"), Tt = /* @__PURE__ */ Symbol.for("react.suspense_list"), qe = /* @__PURE__ */ Symbol.for("react.memo"), At = /* @__PURE__ */ Symbol.for("react.lazy"), ke = /* @__PURE__ */ Symbol.for("react.activity"), zt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), de = Symbol.iterator;
  function st(l) {
    return l === null || typeof l != "object" ? null : (l = de && l[de] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var ze = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ne(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === ze ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case je:
        return "Fragment";
      case Ze:
        return "Profiler";
      case $t:
        return "StrictMode";
      case Bt:
        return "Suspense";
      case Tt:
        return "SuspenseList";
      case ke:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case ce:
          return "Portal";
        case Dt:
          return l.displayName || "Context";
        case ct:
          return (l._context.displayName || "Context") + ".Consumer";
        case jt:
          var n = l.render;
          return l = l.displayName, l || (l = n.displayName || n.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case qe:
          return n = l.displayName || null, n !== null ? n : Ne(l.type) || "Memo";
        case At:
          n = l._payload, l = l._init;
          try {
            return Ne(l(n));
          } catch {
          }
      }
    return null;
  }
  var Mt = Array.isArray, G = te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Te.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, fe = [], ge = -1;
  function z(l) {
    return { current: l };
  }
  function E(l) {
    0 > ge || (l.current = fe[ge], fe[ge] = null, ge--);
  }
  function J(l, n) {
    ge++, fe[ge] = l.current, l.current = n;
  }
  var le = z(null), ne = z(null), _e = z(null), at = z(null);
  function Pe(l, n) {
    switch (J(_e, n), J(ne, l), J(le, null), n.nodeType) {
      case 9:
      case 11:
        l = (l = n.documentElement) && (l = l.namespaceURI) ? Df(l) : 0;
        break;
      default:
        if (l = n.tagName, n = n.namespaceURI)
          n = Df(n), l = N0(n, l);
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
    E(le), J(le, l);
  }
  function rt() {
    E(le), E(ne), E(_e);
  }
  function qt(l) {
    l.memoizedState !== null && J(at, l);
    var n = le.current, u = N0(n, l.type);
    n !== u && (J(ne, l), J(le, u));
  }
  function Ga(l) {
    ne.current === l && (E(le), E(ne)), at.current === l && (E(at), Tl._currentValue = I);
  }
  var ue, Ml;
  function yt(l) {
    if (ue === void 0)
      try {
        throw Error();
      } catch (u) {
        var n = u.stack.trim().match(/\n( *(at )?)/);
        ue = n && n[1] || "", Ml = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ue + l + Ml;
  }
  var ll = !1;
  function bt(l, n) {
    if (!l || ll) return "";
    ll = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var c = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (Q) {
                  var B = Q;
                }
                Reflect.construct(l, [], F);
              } else {
                try {
                  F.call();
                } catch (Q) {
                  B = Q;
                }
                l.call(F.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (Q) {
                B = Q;
              }
              (F = l()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (Q) {
            if (Q && B && typeof Q.stack == "string")
              return [Q.stack, B.stack];
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
                  var K = `
` + A[c].replace(" at new ", " at ");
                  return l.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", l.displayName)), K;
                }
              while (1 <= c && 0 <= s);
            break;
          }
      }
    } finally {
      ll = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? yt(u) : "";
  }
  function Xe(l, n) {
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
        return bt(l.type, !1);
      case 11:
        return bt(l.type.render, !1);
      case 1:
        return bt(l.type, !0);
      case 31:
        return yt("Activity");
      default:
        return "";
    }
  }
  function kt(l) {
    try {
      var n = "", u = null;
      do
        n += Xe(l, u), u = l, l = l.return;
      while (l);
      return n;
    } catch (c) {
      return `
Error generating stack: ` + c.message + `
` + c.stack;
    }
  }
  var Yt = Object.prototype.hasOwnProperty, Ol = w.unstable_scheduleCallback, re = w.unstable_cancelCallback, wa = w.unstable_shouldYield, Lt = w.unstable_requestPaint, We = w.unstable_now, wl = w.unstable_getCurrentPriorityLevel, In = w.unstable_ImmediatePriority, da = w.unstable_UserBlockingPriority, Wt = w.unstable_NormalPriority, ha = w.unstable_LowPriority, Dc = w.unstable_IdlePriority, Mc = w.log, Cc = w.unstable_setDisableYieldValue, rn = null, yl = null;
  function ma(l) {
    if (typeof Mc == "function" && Cc(l), yl && typeof yl.setStrictMode == "function")
      try {
        yl.setStrictMode(rn, l);
      } catch {
      }
  }
  var Xl = Math.clz32 ? Math.clz32 : v, Vo = Math.log, Ki = Math.LN2;
  function v(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Vo(l) / Ki | 0) | 0;
  }
  var M = 256, ee = 262144, ie = 4194304;
  function ye(l) {
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
  function Ye(l, n, u) {
    var c = l.pendingLanes;
    if (c === 0) return 0;
    var s = 0, r = l.suspendedLanes, m = l.pingedLanes;
    l = l.warmLanes;
    var g = c & 134217727;
    return g !== 0 ? (c = g & ~r, c !== 0 ? s = ye(c) : (m &= g, m !== 0 ? s = ye(m) : u || (u = g & ~l, u !== 0 && (s = ye(u))))) : (g = c & ~r, g !== 0 ? s = ye(g) : m !== 0 ? s = ye(m) : u || (u = c & ~l, u !== 0 && (s = ye(u)))), s === 0 ? 0 : n !== 0 && n !== s && (n & r) === 0 && (r = s & -s, u = n & -n, r >= u || r === 32 && (u & 4194048) !== 0) ? n : s;
  }
  function Se(l, n) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & n) === 0;
  }
  function pt(l, n) {
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
  function Ve() {
    var l = ie;
    return ie <<= 1, (ie & 62914560) === 0 && (ie = 4194304), l;
  }
  function Fl(l) {
    for (var n = [], u = 0; 31 > u; u++) n.push(l);
    return n;
  }
  function Xa(l, n) {
    l.pendingLanes |= n, n !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function sd(l, n, u, c, s, r) {
    var m = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var g = l.entanglements, A = l.expirationTimes, j = l.hiddenUpdates;
    for (u = m & ~u; 0 < u; ) {
      var K = 31 - Xl(u), F = 1 << K;
      g[K] = 0, A[K] = -1;
      var B = j[K];
      if (B !== null)
        for (j[K] = null, K = 0; K < B.length; K++) {
          var Q = B[K];
          Q !== null && (Q.lane &= -536870913);
        }
      u &= ~F;
    }
    c !== 0 && Uc(l, c, 0), r !== 0 && s === 0 && l.tag !== 0 && (l.suspendedLanes |= r & ~(m & ~n));
  }
  function Uc(l, n, u) {
    l.pendingLanes |= n, l.suspendedLanes &= ~n;
    var c = 31 - Xl(n);
    l.entangledLanes |= n, l.entanglements[c] = l.entanglements[c] | 1073741824 | u & 261930;
  }
  function is(l, n) {
    var u = l.entangledLanes |= n;
    for (l = l.entanglements; u; ) {
      var c = 31 - Xl(u), s = 1 << c;
      s & n | l[c] & n && (l[c] |= n), u &= ~s;
    }
  }
  function gu(l, n) {
    var u = n & -n;
    return u = (u & 42) !== 0 ? 1 : Va(u), (u & (l.suspendedLanes | n)) !== 0 ? 0 : u;
  }
  function Va(l) {
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
  function rd(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Uv() {
    var l = q.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : qr(l.type));
  }
  function dd(l, n) {
    var u = q.p;
    try {
      return q.p = l, n();
    } finally {
      q.p = u;
    }
  }
  var pi = Math.random().toString(36).slice(2), Cl = "__reactFiber$" + pi, al = "__reactProps$" + pi, xc = "__reactContainer$" + pi, cs = "__reactEvents$" + pi, xv = "__reactListeners$" + pi, xm = "__reactHandles$" + pi, Nm = "__reactResources$" + pi, Lo = "__reactMarker$" + pi;
  function $i(l) {
    delete l[Cl], delete l[al], delete l[cs], delete l[xv], delete l[xm];
  }
  function Nc(l) {
    var n = l[Cl];
    if (n) return n;
    for (var u = l.parentNode; u; ) {
      if (n = u[xc] || u[Cl]) {
        if (u = n.alternate, n.child !== null || u !== null && u.child !== null)
          for (l = Gh(l); l !== null; ) {
            if (u = l[Cl]) return u;
            l = Gh(l);
          }
        return n;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Hc(l) {
    if (l = l[Cl] || l[xc]) {
      var n = l.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return l;
    }
    return null;
  }
  function Qo(l) {
    var n = l.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return l.stateNode;
    throw Error(C(33));
  }
  function jc(l) {
    var n = l[Nm];
    return n || (n = l[Nm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Hl(l) {
    l[Lo] = !0;
  }
  var La = /* @__PURE__ */ new Set(), qc = {};
  function dn(l, n) {
    Bc(l, n), Bc(l + "Capture", n);
  }
  function Bc(l, n) {
    for (qc[l] = n, l = 0; l < n.length; l++)
      La.add(n[l]);
  }
  var os = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fs = {}, hd = {};
  function ss(l) {
    return Yt.call(hd, l) ? !0 : Yt.call(fs, l) ? !1 : os.test(l) ? hd[l] = !0 : (fs[l] = !0, !1);
  }
  function vi(l, n, u) {
    if (ss(n))
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
  function Zo(l, n, u) {
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
  function gi(l, n, u, c) {
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
  function Un(l) {
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
  function Hm(l) {
    var n = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function jm(l, n, u) {
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
  function rs(l) {
    if (!l._valueTracker) {
      var n = Hm(l) ? "checked" : "value";
      l._valueTracker = jm(
        l,
        n,
        "" + l[n]
      );
    }
  }
  function qm(l) {
    if (!l) return !1;
    var n = l._valueTracker;
    if (!n) return !0;
    var u = n.getValue(), c = "";
    return l && (c = Hm(l) ? l.checked ? "true" : "false" : l.value), l = c, l !== u ? (n.setValue(l), !0) : !1;
  }
  function ds(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Nv = /[\n"\\]/g;
  function xn(l) {
    return l.replace(
      Nv,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function md(l, n, u, c, s, r, m, g) {
    l.name = "", m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" ? l.type = m : l.removeAttribute("type"), n != null ? m === "number" ? (n === 0 && l.value === "" || l.value != n) && (l.value = "" + Un(n)) : l.value !== "" + Un(n) && (l.value = "" + Un(n)) : m !== "submit" && m !== "reset" || l.removeAttribute("value"), n != null ? Jo(l, m, Un(n)) : u != null ? Jo(l, m, Un(u)) : c != null && l.removeAttribute("value"), s == null && r != null && (l.defaultChecked = !!r), s != null && (l.checked = s && typeof s != "function" && typeof s != "symbol"), g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? l.name = "" + Un(g) : l.removeAttribute("name");
  }
  function yd(l, n, u, c, s, r, m, g) {
    if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (l.type = r), n != null || u != null) {
      if (!(r !== "submit" && r !== "reset" || n != null)) {
        rs(l);
        return;
      }
      u = u != null ? "" + Un(u) : "", n = n != null ? "" + Un(n) : u, g || n === l.value || (l.value = n), l.defaultValue = n;
    }
    c = c ?? s, c = typeof c != "function" && typeof c != "symbol" && !!c, l.checked = g ? l.checked : !!c, l.defaultChecked = !!c, m != null && typeof m != "function" && typeof m != "symbol" && typeof m != "boolean" && (l.name = m), rs(l);
  }
  function Jo(l, n, u) {
    n === "number" && ds(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function Su(l, n, u, c) {
    if (l = l.options, n) {
      n = {};
      for (var s = 0; s < u.length; s++)
        n["$" + u[s]] = !0;
      for (u = 0; u < l.length; u++)
        s = n.hasOwnProperty("$" + l[u].value), l[u].selected !== s && (l[u].selected = s), s && c && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + Un(u), n = null, s = 0; s < l.length; s++) {
        if (l[s].value === u) {
          l[s].selected = !0, c && (l[s].defaultSelected = !0);
          return;
        }
        n !== null || l[s].disabled || (n = l[s]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Hv(l, n, u) {
    if (n != null && (n = "" + Un(n), n !== l.value && (l.value = n), u == null)) {
      l.defaultValue !== n && (l.defaultValue = n);
      return;
    }
    l.defaultValue = u != null ? "" + Un(u) : "";
  }
  function Bm(l, n, u, c) {
    if (n == null) {
      if (c != null) {
        if (u != null) throw Error(C(92));
        if (Mt(c)) {
          if (1 < c.length) throw Error(C(93));
          c = c[0];
        }
        u = c;
      }
      u == null && (u = ""), n = u;
    }
    u = Un(n), l.defaultValue = u, c = l.textContent, c === u && c !== "" && c !== null && (l.value = c), rs(l);
  }
  function Yc(l, n) {
    if (n) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = n;
        return;
      }
    }
    l.textContent = n;
  }
  var hs = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ym(l, n, u) {
    var c = n.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? c ? l.setProperty(n, "") : n === "float" ? l.cssFloat = "" : l[n] = "" : c ? l.setProperty(n, u) : typeof u != "number" || u === 0 || hs.has(n) ? n === "float" ? l.cssFloat = u : l[n] = ("" + u).trim() : l[n] = u + "px";
  }
  function jv(l, n, u) {
    if (n != null && typeof n != "object")
      throw Error(C(62));
    if (l = l.style, u != null) {
      for (var c in u)
        !u.hasOwnProperty(c) || n != null && n.hasOwnProperty(c) || (c.indexOf("--") === 0 ? l.setProperty(c, "") : c === "float" ? l.cssFloat = "" : l[c] = "");
      for (var s in n)
        c = n[s], n.hasOwnProperty(s) && u[s] !== c && Ym(l, s, c);
    } else
      for (var r in n)
        n.hasOwnProperty(r) && Ym(l, r, n[r]);
  }
  function Gm(l) {
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
  var Jg = /* @__PURE__ */ new Map([
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
  ]), Kg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ki(l) {
    return Kg.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Il() {
  }
  var ms = null;
  function pd(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Gc = null, bu = null;
  function wm(l) {
    var n = Hc(l);
    if (n && (l = n.stateNode)) {
      var u = l[al] || null;
      e: switch (l = n.stateNode, n.type) {
        case "input":
          if (md(
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
              'input[name="' + xn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < u.length; n++) {
              var c = u[n];
              if (c !== l && c.form === l.form) {
                var s = c[al] || null;
                if (!s) throw Error(C(90));
                md(
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
              c = u[n], c.form === l.form && qm(c);
          }
          break e;
        case "textarea":
          Hv(l, u.value, u.defaultValue);
          break e;
        case "select":
          n = u.value, n != null && Su(l, !!u.multiple, n, !1);
      }
    }
  }
  var Ko = !1;
  function ys(l, n, u) {
    if (Ko) return l(n, u);
    Ko = !0;
    try {
      var c = l(n);
      return c;
    } finally {
      if (Ko = !1, (Gc !== null || bu !== null) && (gr(), Gc && (n = Gc, l = bu, bu = Gc = null, wm(n), l)))
        for (n = 0; n < l.length; n++) wm(l[n]);
    }
  }
  function $o(l, n) {
    var u = l.stateNode;
    if (u === null) return null;
    var c = u[al] || null;
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
        C(231, n, typeof u)
      );
    return u;
  }
  var pl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xm = !1;
  if (pl)
    try {
      var wc = {};
      Object.defineProperty(wc, "passive", {
        get: function() {
          Xm = !0;
        }
      }), window.addEventListener("test", wc, wc), window.removeEventListener("test", wc, wc);
    } catch {
      Xm = !1;
    }
  var Si = null, vd = null, gd = null;
  function qv() {
    if (gd) return gd;
    var l, n = vd, u = n.length, c, s = "value" in Si ? Si.value : Si.textContent, r = s.length;
    for (l = 0; l < u && n[l] === s[l]; l++) ;
    var m = u - l;
    for (c = 1; c <= m && n[u - c] === s[r - c]; c++) ;
    return gd = s.slice(l, 1 < c ? 1 - c : void 0);
  }
  function ps(l) {
    var n = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && n === 13 && (l = 13)) : l = n, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Sd() {
    return !0;
  }
  function Vm() {
    return !1;
  }
  function Qa(l) {
    function n(u, c, s, r, m) {
      this._reactName = u, this._targetInst = s, this.type = c, this.nativeEvent = r, this.target = m, this.currentTarget = null;
      for (var g in l)
        l.hasOwnProperty(g) && (u = l[g], this[g] = u ? u(r) : r[g]);
      return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Sd : Vm, this.isPropagationStopped = Vm, this;
    }
    return ae(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Sd);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Sd);
      },
      persist: function() {
      },
      isPersistent: Sd
    }), n;
  }
  var Eu = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, vs = Qa(Eu), ko = ae({}, Eu, { view: 0, detail: 0 }), Bv = Qa(ko), Lm, Qm, gs, bd = ae({}, ko, {
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
    getModifierState: hn,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== gs && (gs && l.type === "mousemove" ? (Lm = l.screenX - gs.screenX, Qm = l.screenY - gs.screenY) : Qm = Lm = 0, gs = l), Lm);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Qm;
    }
  }), Yv = Qa(bd), Ss = ae({}, bd, { dataTransfer: 0 }), Gv = Qa(Ss), wv = ae({}, ko, { relatedTarget: 0 }), Ed = Qa(wv), Xv = ae({}, Eu, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zm = Qa(Xv), Vv = ae({}, Eu, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Xc = Qa(Vv), Vc = ae({}, Eu, { data: 0 }), Nn = Qa(Vc), $g = {
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
  }, Jm = {
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
  }, Tu = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Lv(l) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(l) : (l = Tu[l]) ? !!n[l] : !1;
  }
  function hn() {
    return Lv;
  }
  var Au = ae({}, ko, {
    key: function(l) {
      if (l.key) {
        var n = $g[l.key] || l.key;
        if (n !== "Unidentified") return n;
      }
      return l.type === "keypress" ? (l = ps(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Jm[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: hn,
    charCode: function(l) {
      return l.type === "keypress" ? ps(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? ps(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Td = Qa(Au), Ad = ae({}, bd, {
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
  }), zd = Qa(Ad), zu = ae({}, ko, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: hn
  }), kg = Qa(zu), Qv = ae({}, Eu, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Zv = Qa(Qv), Wg = ae({}, bd, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Km = Qa(Wg), Fg = ae({}, Eu, {
    newState: 0,
    oldState: 0
  }), Jv = Qa(Fg), $m = [9, 13, 27, 32], Wo = pl && "CompositionEvent" in window, Wi = null;
  pl && "documentMode" in document && (Wi = document.documentMode);
  var km = pl && "TextEvent" in window && !Wi, Pl = pl && (!Wo || Wi && 8 < Wi && 11 >= Wi), Wm = " ", bs = !1;
  function Fi(l, n) {
    switch (l) {
      case "keyup":
        return $m.indexOf(n.keyCode) !== -1;
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
  function Od(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Lc = !1;
  function Kv(l, n) {
    switch (l) {
      case "compositionend":
        return Od(n);
      case "keypress":
        return n.which !== 32 ? null : (bs = !0, Wm);
      case "textInput":
        return l = n.data, l === Wm && bs ? null : l;
      default:
        return null;
    }
  }
  function $v(l, n) {
    if (Lc)
      return l === "compositionend" || !Wo && Fi(l, n) ? (l = qv(), gd = vd = Si = null, Lc = !1, l) : null;
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
        return Pl && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Ig = {
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
  function Rd(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n === "input" ? !!Ig[l.type] : n === "textarea";
  }
  function Ou(l, n, u, c) {
    Gc ? bu ? bu.push(c) : bu = [c] : Gc = c, n = xh(n, "onChange"), 0 < n.length && (u = new vs(
      "onChange",
      "change",
      null,
      u,
      c
    ), l.push({ event: u, listeners: n }));
  }
  var Fo = null, Qc = null;
  function _d(l) {
    mp(l, 0);
  }
  function Ru(l) {
    var n = Qo(l);
    if (qm(n)) return l;
  }
  function Dd(l, n) {
    if (l === "change") return n;
  }
  var Fm = !1;
  if (pl) {
    var Es;
    if (pl) {
      var _a = "oninput" in document;
      if (!_a) {
        var _u = document.createElement("div");
        _u.setAttribute("oninput", "return;"), _a = typeof _u.oninput == "function";
      }
      Es = _a;
    } else Es = !1;
    Fm = Es && (!document.documentMode || 9 < document.documentMode);
  }
  function Im() {
    Fo && (Fo.detachEvent("onpropertychange", Md), Qc = Fo = null);
  }
  function Md(l) {
    if (l.propertyName === "value" && Ru(Qc)) {
      var n = [];
      Ou(
        n,
        Qc,
        l,
        pd(l)
      ), ys(_d, n);
    }
  }
  function Pm(l, n, u) {
    l === "focusin" ? (Im(), Fo = n, Qc = u, Fo.attachEvent("onpropertychange", Md)) : l === "focusout" && Im();
  }
  function kv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Ru(Qc);
  }
  function Wv(l, n) {
    if (l === "click") return Ru(n);
  }
  function Ii(l, n) {
    if (l === "input" || l === "change")
      return Ru(n);
  }
  function Zc(l, n) {
    return l === n && (l !== 0 || 1 / l === 1 / n) || l !== l && n !== n;
  }
  var Za = typeof Object.is == "function" ? Object.is : Zc;
  function Pi(l, n) {
    if (Za(l, n)) return !0;
    if (typeof l != "object" || l === null || typeof n != "object" || n === null)
      return !1;
    var u = Object.keys(l), c = Object.keys(n);
    if (u.length !== c.length) return !1;
    for (c = 0; c < u.length; c++) {
      var s = u[c];
      if (!Yt.call(n, s) || !Za(l[s], n[s]))
        return !1;
    }
    return !0;
  }
  function bi(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ey(l, n) {
    var u = bi(l);
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
      u = bi(u);
    }
  }
  function ty(l, n) {
    return l && n ? l === n ? !0 : l && l.nodeType === 3 ? !1 : n && n.nodeType === 3 ? ty(l, n.parentNode) : "contains" in l ? l.contains(n) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Jc(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var n = ds(l.document); n instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof n.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = n.contentWindow;
      else break;
      n = ds(l.document);
    }
    return n;
  }
  function Ei(l) {
    var n = l && l.nodeName && l.nodeName.toLowerCase();
    return n && (n === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || n === "textarea" || l.contentEditable === "true");
  }
  var ly = pl && "documentMode" in document && 11 >= document.documentMode, Du = null, Ts = null, ec = null, Mu = !1;
  function Cu(l, n, u) {
    var c = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    Mu || Du == null || Du !== ds(c) || (c = Du, "selectionStart" in c && Ei(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = {
      anchorNode: c.anchorNode,
      anchorOffset: c.anchorOffset,
      focusNode: c.focusNode,
      focusOffset: c.focusOffset
    }), ec && Pi(ec, c) || (ec = c, c = xh(Ts, "onSelect"), 0 < c.length && (n = new vs(
      "onSelect",
      "select",
      null,
      n,
      u
    ), l.push({ event: n, listeners: c }), n.target = Du)));
  }
  function Ti(l, n) {
    var u = {};
    return u[l.toLowerCase()] = n.toLowerCase(), u["Webkit" + l] = "webkit" + n, u["Moz" + l] = "moz" + n, u;
  }
  var tc = {
    animationend: Ti("Animation", "AnimationEnd"),
    animationiteration: Ti("Animation", "AnimationIteration"),
    animationstart: Ti("Animation", "AnimationStart"),
    transitionrun: Ti("Transition", "TransitionRun"),
    transitionstart: Ti("Transition", "TransitionStart"),
    transitioncancel: Ti("Transition", "TransitionCancel"),
    transitionend: Ti("Transition", "TransitionEnd")
  }, lc = {}, As = {};
  pl && (As = document.createElement("div").style, "AnimationEvent" in window || (delete tc.animationend.animation, delete tc.animationiteration.animation, delete tc.animationstart.animation), "TransitionEvent" in window || delete tc.transitionend.transition);
  function mn(l) {
    if (lc[l]) return lc[l];
    if (!tc[l]) return l;
    var n = tc[l], u;
    for (u in n)
      if (n.hasOwnProperty(u) && u in As)
        return lc[l] = n[u];
    return l;
  }
  var Ft = mn("animationend"), zs = mn("animationiteration"), ay = mn("animationstart"), ny = mn("transitionrun"), Kc = mn("transitionstart"), Os = mn("transitioncancel"), Pn = mn("transitionend"), Fv = /* @__PURE__ */ new Map(), eu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  eu.push("scrollEnd");
  function Ja(l, n) {
    Fv.set(l, n), dn(n, [l]);
  }
  var ac = typeof reportError == "function" ? reportError : function(l) {
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
  }, Da = [], Vl = 0, Ma = 0;
  function yn() {
    for (var l = Vl, n = Ma = Vl = 0; n < l; ) {
      var u = Da[n];
      Da[n++] = null;
      var c = Da[n];
      Da[n++] = null;
      var s = Da[n];
      Da[n++] = null;
      var r = Da[n];
      if (Da[n++] = null, c !== null && s !== null) {
        var m = c.pending;
        m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
      }
      r !== 0 && Cd(u, s, r);
    }
  }
  function pn(l, n, u, c) {
    Da[Vl++] = l, Da[Vl++] = n, Da[Vl++] = u, Da[Vl++] = c, Ma |= c, l.lanes |= c, l = l.alternate, l !== null && (l.lanes |= c);
  }
  function Hn(l, n, u, c) {
    return pn(l, n, u, c), Io(l);
  }
  function ya(l, n) {
    return pn(l, null, null, n), Io(l);
  }
  function Cd(l, n, u) {
    l.lanes |= u;
    var c = l.alternate;
    c !== null && (c.lanes |= u);
    for (var s = !1, r = l.return; r !== null; )
      r.childLanes |= u, c = r.alternate, c !== null && (c.childLanes |= u), r.tag === 22 && (l = r.stateNode, l === null || l._visibility & 1 || (s = !0)), l = r, r = r.return;
    return l.tag === 3 ? (r = l.stateNode, s && n !== null && (s = 31 - Xl(u), l = r.hiddenUpdates, c = l[s], c === null ? l[s] = [n] : c.push(n), n.lane = u | 536870912), r) : null;
  }
  function Io(l) {
    if (50 < go)
      throw go = 0, Sh = null, Error(C(185));
    for (var n = l.return; n !== null; )
      l = n, n = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var $c = {};
  function Uu(l, n, u, c) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ka(l, n, u, c) {
    return new Uu(l, n, u, c);
  }
  function jn(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function vn(l, n) {
    var u = l.alternate;
    return u === null ? (u = Ka(
      l.tag,
      n,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = n, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, n = l.dependencies, u.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function Iv(l, n) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = n, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, n = u.dependencies, l.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), l;
  }
  function Rs(l, n, u, c, s, r) {
    var m = 0;
    if (c = l, typeof l == "function") jn(l) && (m = 1);
    else if (typeof l == "string")
      m = Cp(
        l,
        u,
        le.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      e: switch (l) {
        case ke:
          return l = Ka(31, u, n, s), l.elementType = ke, l.lanes = r, l;
        case je:
          return kc(u.children, s, r, n);
        case $t:
          m = 8, s |= 24;
          break;
        case Ze:
          return l = Ka(12, u, n, s | 2), l.elementType = Ze, l.lanes = r, l;
        case Bt:
          return l = Ka(13, u, n, s), l.elementType = Bt, l.lanes = r, l;
        case Tt:
          return l = Ka(19, u, n, s), l.elementType = Tt, l.lanes = r, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Dt:
                m = 10;
                break e;
              case ct:
                m = 9;
                break e;
              case jt:
                m = 11;
                break e;
              case qe:
                m = 14;
                break e;
              case At:
                m = 16, c = null;
                break e;
            }
          m = 29, u = Error(
            C(130, l === null ? "null" : typeof l, "")
          ), c = null;
      }
    return n = Ka(m, u, n, s), n.elementType = l, n.type = c, n.lanes = r, n;
  }
  function kc(l, n, u, c) {
    return l = Ka(7, l, c, n), l.lanes = u, l;
  }
  function _s(l, n, u) {
    return l = Ka(6, l, null, n), l.lanes = u, l;
  }
  function Ds(l) {
    var n = Ka(18, null, null, 0);
    return n.stateNode = l, n;
  }
  function Ud(l, n, u) {
    return n = Ka(
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
  var uy = /* @__PURE__ */ new WeakMap();
  function gn(l, n) {
    if (typeof l == "object" && l !== null) {
      var u = uy.get(l);
      return u !== void 0 ? u : (n = {
        value: l,
        source: n,
        stack: kt(n)
      }, uy.set(l, n), n);
    }
    return {
      value: l,
      source: n,
      stack: kt(n)
    };
  }
  var Wc = [], Sn = 0, Ms = null, Po = 0, Qt = [], $a = 0, tu = null, bn = 1, ka = "";
  function xu(l, n) {
    Wc[Sn++] = Po, Wc[Sn++] = Ms, Ms = l, Po = n;
  }
  function Cs(l, n, u) {
    Qt[$a++] = bn, Qt[$a++] = ka, Qt[$a++] = tu, tu = l;
    var c = bn;
    l = ka;
    var s = 32 - Xl(c) - 1;
    c &= ~(1 << s), u += 1;
    var r = 32 - Xl(n) + s;
    if (30 < r) {
      var m = s - s % 5;
      r = (c & (1 << m) - 1).toString(32), c >>= m, s -= m, bn = 1 << 32 - Xl(n) + s | u << s | c, ka = r + l;
    } else
      bn = 1 << r | u << s | c, ka = l;
  }
  function xd(l) {
    l.return !== null && (xu(l, 1), Cs(l, 1, 0));
  }
  function ef(l) {
    for (; l === Ms; )
      Ms = Wc[--Sn], Wc[Sn] = null, Po = Wc[--Sn], Wc[Sn] = null;
    for (; l === tu; )
      tu = Qt[--$a], Qt[$a] = null, ka = Qt[--$a], Qt[$a] = null, bn = Qt[--$a], Qt[$a] = null;
  }
  function iy(l, n) {
    Qt[$a++] = bn, Qt[$a++] = ka, Qt[$a++] = tu, bn = n.id, ka = n.overflow, tu = l;
  }
  var Ul = null, It = null, dt = !1, Nu = null, Wa = !1, Hu = Error(C(519));
  function Ca(l) {
    var n = Error(
      C(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xs(gn(n, l)), Hu;
  }
  function tf(l) {
    var n = l.stateNode, u = l.type, c = l.memoizedProps;
    switch (n[Cl] = l, n[al] = c, u) {
      case "dialog":
        ot("cancel", n), ot("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ot("load", n);
        break;
      case "video":
      case "audio":
        for (u = 0; u < Eo.length; u++)
          ot(Eo[u], n);
        break;
      case "source":
        ot("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ot("error", n), ot("load", n);
        break;
      case "details":
        ot("toggle", n);
        break;
      case "input":
        ot("invalid", n), yd(
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
        ot("invalid", n);
        break;
      case "textarea":
        ot("invalid", n), Bm(n, c.value, c.defaultValue, c.children);
    }
    u = c.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || n.textContent === "" + u || c.suppressHydrationWarning === !0 || gp(n.textContent, u) ? (c.popover != null && (ot("beforetoggle", n), ot("toggle", n)), c.onScroll != null && ot("scroll", n), c.onScrollEnd != null && ot("scrollend", n), c.onClick != null && (n.onclick = Il), n = !0) : n = !1, n || Ca(l, !0);
  }
  function Us(l) {
    for (Ul = l.return; Ul; )
      switch (Ul.tag) {
        case 5:
        case 31:
        case 13:
          Wa = !1;
          return;
        case 27:
        case 3:
          Wa = !0;
          return;
        default:
          Ul = Ul.return;
      }
  }
  function ju(l) {
    if (l !== Ul) return !1;
    if (!dt) return Us(l), dt = !0, !1;
    var n = l.tag, u;
    if ((u = n !== 3 && n !== 27) && ((u = n === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || qh(l.type, l.memoizedProps)), u = !u), u && It && Ca(l), Us(l), n === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
      It = Yh(l);
    } else if (n === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(317));
      It = Yh(l);
    } else
      n === 27 ? (n = It, ei(l.type) ? (l = xf, xf = null, It = l) : It = n) : It = Ul ? ia(l.stateNode.nextSibling) : null;
    return !0;
  }
  function lu() {
    It = Ul = null, dt = !1;
  }
  function Nd() {
    var l = Nu;
    return l !== null && (an === null ? an = l : an.push.apply(
      an,
      l
    ), Nu = null), l;
  }
  function xs(l) {
    Nu === null ? Nu = [l] : Nu.push(l);
  }
  var Hd = z(null), nc = null, au = null;
  function qu(l, n, u) {
    J(Hd, n._currentValue), n._currentValue = u;
  }
  function pa(l) {
    l._currentValue = Hd.current, E(Hd);
  }
  function Ns(l, n, u) {
    for (; l !== null; ) {
      var c = l.alternate;
      if ((l.childLanes & n) !== n ? (l.childLanes |= n, c !== null && (c.childLanes |= n)) : c !== null && (c.childLanes & n) !== n && (c.childLanes |= n), l === u) break;
      l = l.return;
    }
  }
  function jd(l, n, u, c) {
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
              r.lanes |= u, g = r.alternate, g !== null && (g.lanes |= u), Ns(
                r.return,
                u,
                l
              ), c || (m = null);
              break e;
            }
          r = g.next;
        }
      } else if (s.tag === 18) {
        if (m = s.return, m === null) throw Error(C(341));
        m.lanes |= u, r = m.alternate, r !== null && (r.lanes |= u), Ns(m, u, l), m = null;
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
  function En(l, n, u, c) {
    l = null;
    for (var s = n, r = !1; s !== null; ) {
      if (!r) {
        if ((s.flags & 524288) !== 0) r = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var m = s.alternate;
        if (m === null) throw Error(C(387));
        if (m = m.memoizedProps, m !== null) {
          var g = s.type;
          Za(s.pendingProps.value, m.value) || (l !== null ? l.push(g) : l = [g]);
        }
      } else if (s === at.current) {
        if (m = s.alternate, m === null) throw Error(C(387));
        m.memoizedState.memoizedState !== s.memoizedState.memoizedState && (l !== null ? l.push(Tl) : l = [Tl]);
      }
      s = s.return;
    }
    l !== null && jd(
      n,
      l,
      u,
      c
    ), n.flags |= 262144;
  }
  function va(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Za(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Bu(l) {
    nc = l, au = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Re(l) {
    return Fc(nc, l);
  }
  function P(l, n) {
    return nc === null && Bu(l), Fc(l, n);
  }
  function Fc(l, n) {
    var u = n._currentValue;
    if (n = { context: n, memoizedValue: u, next: null }, au === null) {
      if (l === null) throw Error(C(308));
      au = n, l.dependencies = { lanes: 0, firstContext: n }, l.flags |= 524288;
    } else au = au.next = n;
    return u;
  }
  var qd = typeof AbortController < "u" ? AbortController : function() {
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
  }, vl = w.unstable_scheduleCallback, cy = w.unstable_NormalPriority, gl = {
    $$typeof: Dt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Bd() {
    return {
      controller: new qd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Ic(l) {
    l.refCount--, l.refCount === 0 && vl(cy, function() {
      l.controller.abort();
    });
  }
  var Hs = null, js = 0, uc = 0, ic = null;
  function Ua(l, n) {
    if (Hs === null) {
      var u = Hs = [];
      js = 0, uc = So(), ic = {
        status: "pending",
        value: void 0,
        then: function(c) {
          u.push(c);
        }
      };
    }
    return js++, n.then(xt, xt), n;
  }
  function xt() {
    if (--js === 0 && Hs !== null) {
      ic !== null && (ic.status = "fulfilled");
      var l = Hs;
      Hs = null, uc = 0, ic = null;
      for (var n = 0; n < l.length; n++) (0, l[n])();
    }
  }
  function Yd(l, n) {
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
  var lf = G.S;
  G.S = function(l, n) {
    Hi = We(), typeof n == "object" && n !== null && typeof n.then == "function" && Ua(l, n), lf !== null && lf(l, n);
  };
  var Fa = z(null);
  function Ai() {
    var l = Fa.current;
    return l !== null ? l : Zt.pooledCache;
  }
  function Ia(l, n) {
    n === null ? J(Fa, Fa.current) : J(Fa, n.pool);
  }
  function Gd() {
    var l = Ai();
    return l === null ? null : { parent: gl._currentValue, pool: l };
  }
  var nu = Error(C(460)), qs = Error(C(474)), cc = Error(C(542)), af = { then: function() {
  } };
  function Bs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function oy(l, n, u) {
    switch (u = l[u], u === void 0 ? l.push(n) : u !== n && (n.then(Il, Il), n = u), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw l = n.reason, sy(l), l;
      default:
        if (typeof n.status == "string") n.then(Il, Il);
        else {
          if (l = Zt, l !== null && 100 < l.shellSuspendCounter)
            throw Error(C(482));
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
            throw l = n.reason, sy(l), l;
        }
        throw fc = n, nu;
    }
  }
  function oc(l) {
    try {
      var n = l._init;
      return n(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (fc = u, nu) : u;
    }
  }
  var fc = null;
  function fy() {
    if (fc === null) throw Error(C(459));
    var l = fc;
    return fc = null, l;
  }
  function sy(l) {
    if (l === nu || l === cc)
      throw Error(C(483));
  }
  var sc = null, Pc = 0;
  function nf(l) {
    var n = Pc;
    return Pc += 1, sc === null && (sc = []), oy(sc, l, n);
  }
  function uf(l, n) {
    n = n.props.ref, l.ref = n !== void 0 ? n : null;
  }
  function Ys(l, n) {
    throw n.$$typeof === k ? Error(C(525)) : (l = Object.prototype.toString.call(n), Error(
      C(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : l
      )
    ));
  }
  function ry(l) {
    function n(U, _) {
      if (l) {
        var H = U.deletions;
        H === null ? (U.deletions = [_], U.flags |= 16) : H.push(_);
      }
    }
    function u(U, _) {
      if (!l) return null;
      for (; _ !== null; )
        n(U, _), _ = _.sibling;
      return null;
    }
    function c(U) {
      for (var _ = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? _.set(U.key, U) : _.set(U.index, U), U = U.sibling;
      return _;
    }
    function s(U, _) {
      return U = vn(U, _), U.index = 0, U.sibling = null, U;
    }
    function r(U, _, H) {
      return U.index = H, l ? (H = U.alternate, H !== null ? (H = H.index, H < _ ? (U.flags |= 67108866, _) : H) : (U.flags |= 67108866, _)) : (U.flags |= 1048576, _);
    }
    function m(U) {
      return l && U.alternate === null && (U.flags |= 67108866), U;
    }
    function g(U, _, H, W) {
      return _ === null || _.tag !== 6 ? (_ = _s(H, U.mode, W), _.return = U, _) : (_ = s(_, H), _.return = U, _);
    }
    function A(U, _, H, W) {
      var Oe = H.type;
      return Oe === je ? K(
        U,
        _,
        H.props.children,
        W,
        H.key
      ) : _ !== null && (_.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === At && oc(Oe) === _.type) ? (_ = s(_, H.props), uf(_, H), _.return = U, _) : (_ = Rs(
        H.type,
        H.key,
        H.props,
        null,
        U.mode,
        W
      ), uf(_, H), _.return = U, _);
    }
    function j(U, _, H, W) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== H.containerInfo || _.stateNode.implementation !== H.implementation ? (_ = Ud(H, U.mode, W), _.return = U, _) : (_ = s(_, H.children || []), _.return = U, _);
    }
    function K(U, _, H, W, Oe) {
      return _ === null || _.tag !== 7 ? (_ = kc(
        H,
        U.mode,
        W,
        Oe
      ), _.return = U, _) : (_ = s(_, H), _.return = U, _);
    }
    function F(U, _, H) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number" || typeof _ == "bigint")
        return _ = _s(
          "" + _,
          U.mode,
          H
        ), _.return = U, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case x:
            return H = Rs(
              _.type,
              _.key,
              _.props,
              null,
              U.mode,
              H
            ), uf(H, _), H.return = U, H;
          case ce:
            return _ = Ud(
              _,
              U.mode,
              H
            ), _.return = U, _;
          case At:
            return _ = oc(_), F(U, _, H);
        }
        if (Mt(_) || st(_))
          return _ = kc(
            _,
            U.mode,
            H,
            null
          ), _.return = U, _;
        if (typeof _.then == "function")
          return F(U, nf(_), H);
        if (_.$$typeof === Dt)
          return F(
            U,
            P(U, _),
            H
          );
        Ys(U, _);
      }
      return null;
    }
    function B(U, _, H, W) {
      var Oe = _ !== null ? _.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return Oe !== null ? null : g(U, _, "" + H, W);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case x:
            return H.key === Oe ? A(U, _, H, W) : null;
          case ce:
            return H.key === Oe ? j(U, _, H, W) : null;
          case At:
            return H = oc(H), B(U, _, H, W);
        }
        if (Mt(H) || st(H))
          return Oe !== null ? null : K(U, _, H, W, null);
        if (typeof H.then == "function")
          return B(
            U,
            _,
            nf(H),
            W
          );
        if (H.$$typeof === Dt)
          return B(
            U,
            _,
            P(U, H),
            W
          );
        Ys(U, H);
      }
      return null;
    }
    function Q(U, _, H, W, Oe) {
      if (typeof W == "string" && W !== "" || typeof W == "number" || typeof W == "bigint")
        return U = U.get(H) || null, g(_, U, "" + W, Oe);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case x:
            return U = U.get(
              W.key === null ? H : W.key
            ) || null, A(_, U, W, Oe);
          case ce:
            return U = U.get(
              W.key === null ? H : W.key
            ) || null, j(_, U, W, Oe);
          case At:
            return W = oc(W), Q(
              U,
              _,
              H,
              W,
              Oe
            );
        }
        if (Mt(W) || st(W))
          return U = U.get(H) || null, K(_, U, W, Oe, null);
        if (typeof W.then == "function")
          return Q(
            U,
            _,
            H,
            nf(W),
            Oe
          );
        if (W.$$typeof === Dt)
          return Q(
            U,
            _,
            H,
            P(_, W),
            Oe
          );
        Ys(_, W);
      }
      return null;
    }
    function ve(U, _, H, W) {
      for (var Oe = null, Rt = null, be = _, Ke = _ = 0, nt = null; be !== null && Ke < H.length; Ke++) {
        be.index > Ke ? (nt = be, be = null) : nt = be.sibling;
        var ft = B(
          U,
          be,
          H[Ke],
          W
        );
        if (ft === null) {
          be === null && (be = nt);
          break;
        }
        l && be && ft.alternate === null && n(U, be), _ = r(ft, _, Ke), Rt === null ? Oe = ft : Rt.sibling = ft, Rt = ft, be = nt;
      }
      if (Ke === H.length)
        return u(U, be), dt && xu(U, Ke), Oe;
      if (be === null) {
        for (; Ke < H.length; Ke++)
          be = F(U, H[Ke], W), be !== null && (_ = r(
            be,
            _,
            Ke
          ), Rt === null ? Oe = be : Rt.sibling = be, Rt = be);
        return dt && xu(U, Ke), Oe;
      }
      for (be = c(be); Ke < H.length; Ke++)
        nt = Q(
          be,
          U,
          Ke,
          H[Ke],
          W
        ), nt !== null && (l && nt.alternate !== null && be.delete(
          nt.key === null ? Ke : nt.key
        ), _ = r(
          nt,
          _,
          Ke
        ), Rt === null ? Oe = nt : Rt.sibling = nt, Rt = nt);
      return l && be.forEach(function(Tc) {
        return n(U, Tc);
      }), dt && xu(U, Ke), Oe;
    }
    function Ue(U, _, H, W) {
      if (H == null) throw Error(C(151));
      for (var Oe = null, Rt = null, be = _, Ke = _ = 0, nt = null, ft = H.next(); be !== null && !ft.done; Ke++, ft = H.next()) {
        be.index > Ke ? (nt = be, be = null) : nt = be.sibling;
        var Tc = B(U, be, ft.value, W);
        if (Tc === null) {
          be === null && (be = nt);
          break;
        }
        l && be && Tc.alternate === null && n(U, be), _ = r(Tc, _, Ke), Rt === null ? Oe = Tc : Rt.sibling = Tc, Rt = Tc, be = nt;
      }
      if (ft.done)
        return u(U, be), dt && xu(U, Ke), Oe;
      if (be === null) {
        for (; !ft.done; Ke++, ft = H.next())
          ft = F(U, ft.value, W), ft !== null && (_ = r(ft, _, Ke), Rt === null ? Oe = ft : Rt.sibling = ft, Rt = ft);
        return dt && xu(U, Ke), Oe;
      }
      for (be = c(be); !ft.done; Ke++, ft = H.next())
        ft = Q(be, U, Ke, ft.value, W), ft !== null && (l && ft.alternate !== null && be.delete(ft.key === null ? Ke : ft.key), _ = r(ft, _, Ke), Rt === null ? Oe = ft : Rt.sibling = ft, Rt = ft);
      return l && be.forEach(function(Ph) {
        return n(U, Ph);
      }), dt && xu(U, Ke), Oe;
    }
    function Jt(U, _, H, W) {
      if (typeof H == "object" && H !== null && H.type === je && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case x:
            e: {
              for (var Oe = H.key; _ !== null; ) {
                if (_.key === Oe) {
                  if (Oe = H.type, Oe === je) {
                    if (_.tag === 7) {
                      u(
                        U,
                        _.sibling
                      ), W = s(
                        _,
                        H.props.children
                      ), W.return = U, U = W;
                      break e;
                    }
                  } else if (_.elementType === Oe || typeof Oe == "object" && Oe !== null && Oe.$$typeof === At && oc(Oe) === _.type) {
                    u(
                      U,
                      _.sibling
                    ), W = s(_, H.props), uf(W, H), W.return = U, U = W;
                    break e;
                  }
                  u(U, _);
                  break;
                } else n(U, _);
                _ = _.sibling;
              }
              H.type === je ? (W = kc(
                H.props.children,
                U.mode,
                W,
                H.key
              ), W.return = U, U = W) : (W = Rs(
                H.type,
                H.key,
                H.props,
                null,
                U.mode,
                W
              ), uf(W, H), W.return = U, U = W);
            }
            return m(U);
          case ce:
            e: {
              for (Oe = H.key; _ !== null; ) {
                if (_.key === Oe)
                  if (_.tag === 4 && _.stateNode.containerInfo === H.containerInfo && _.stateNode.implementation === H.implementation) {
                    u(
                      U,
                      _.sibling
                    ), W = s(_, H.children || []), W.return = U, U = W;
                    break e;
                  } else {
                    u(U, _);
                    break;
                  }
                else n(U, _);
                _ = _.sibling;
              }
              W = Ud(H, U.mode, W), W.return = U, U = W;
            }
            return m(U);
          case At:
            return H = oc(H), Jt(
              U,
              _,
              H,
              W
            );
        }
        if (Mt(H))
          return ve(
            U,
            _,
            H,
            W
          );
        if (st(H)) {
          if (Oe = st(H), typeof Oe != "function") throw Error(C(150));
          return H = Oe.call(H), Ue(
            U,
            _,
            H,
            W
          );
        }
        if (typeof H.then == "function")
          return Jt(
            U,
            _,
            nf(H),
            W
          );
        if (H.$$typeof === Dt)
          return Jt(
            U,
            _,
            P(U, H),
            W
          );
        Ys(U, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, _ !== null && _.tag === 6 ? (u(U, _.sibling), W = s(_, H), W.return = U, U = W) : (u(U, _), W = _s(H, U.mode, W), W.return = U, U = W), m(U)) : u(U, _);
    }
    return function(U, _, H, W) {
      try {
        Pc = 0;
        var Oe = Jt(
          U,
          _,
          H,
          W
        );
        return sc = null, Oe;
      } catch (be) {
        if (be === nu || be === cc) throw be;
        var Rt = Ka(29, be, null, U.mode);
        return Rt.lanes = W, Rt.return = U, Rt;
      }
    };
  }
  var eo = ry(!0), dy = ry(!1), zi = !1;
  function wd(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Gs(l, n) {
    l = l.updateQueue, n.updateQueue === l && (n.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Oi(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function Ri(l, n, u) {
    var c = l.updateQueue;
    if (c === null) return null;
    if (c = c.shared, (Ot & 2) !== 0) {
      var s = c.pending;
      return s === null ? n.next = n : (n.next = s.next, s.next = n), c.pending = n, n = Io(l), Cd(l, null, u), n;
    }
    return pn(l, c, n, u), Io(l);
  }
  function Yu(l, n, u) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (u & 4194048) !== 0)) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, is(l, u);
    }
  }
  function cf(l, n) {
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
  var Xd = !1;
  function ws() {
    if (Xd) {
      var l = ic;
      if (l !== null) throw l;
    }
  }
  function rc(l, n, u, c) {
    Xd = !1;
    var s = l.updateQueue;
    zi = !1;
    var r = s.firstBaseUpdate, m = s.lastBaseUpdate, g = s.shared.pending;
    if (g !== null) {
      s.shared.pending = null;
      var A = g, j = A.next;
      A.next = null, m === null ? r = j : m.next = j, m = A;
      var K = l.alternate;
      K !== null && (K = K.updateQueue, g = K.lastBaseUpdate, g !== m && (g === null ? K.firstBaseUpdate = j : g.next = j, K.lastBaseUpdate = A));
    }
    if (r !== null) {
      var F = s.baseState;
      m = 0, K = j = A = null, g = r;
      do {
        var B = g.lane & -536870913, Q = B !== g.lane;
        if (Q ? (ht & B) === B : (c & B) === B) {
          B !== 0 && B === uc && (Xd = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: g.tag,
            payload: g.payload,
            callback: null,
            next: null
          });
          e: {
            var ve = l, Ue = g;
            B = n;
            var Jt = u;
            switch (Ue.tag) {
              case 1:
                if (ve = Ue.payload, typeof ve == "function") {
                  F = ve.call(Jt, F, B);
                  break e;
                }
                F = ve;
                break e;
              case 3:
                ve.flags = ve.flags & -65537 | 128;
              case 0:
                if (ve = Ue.payload, B = typeof ve == "function" ? ve.call(Jt, F, B) : ve, B == null) break e;
                F = ae({}, F, B);
                break e;
              case 2:
                zi = !0;
            }
          }
          B = g.callback, B !== null && (l.flags |= 64, Q && (l.flags |= 8192), Q = s.callbacks, Q === null ? s.callbacks = [B] : Q.push(B));
        } else
          Q = {
            lane: B,
            tag: g.tag,
            payload: g.payload,
            callback: g.callback,
            next: null
          }, K === null ? (j = K = Q, A = F) : K = K.next = Q, m |= B;
        if (g = g.next, g === null) {
          if (g = s.shared.pending, g === null)
            break;
          Q = g, g = Q.next, Q.next = null, s.lastBaseUpdate = Q, s.shared.pending = null;
        }
      } while (!0);
      K === null && (A = F), s.baseState = A, s.firstBaseUpdate = j, s.lastBaseUpdate = K, r === null && (s.shared.lanes = 0), Vn |= m, l.lanes = m, l.memoizedState = F;
    }
  }
  function to(l, n) {
    if (typeof l != "function")
      throw Error(C(191, l));
    l.call(n);
  }
  function Vd(l, n) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        to(u[l], n);
  }
  var qn = z(null), ea = z(0);
  function Xs(l, n) {
    l = Fu, J(ea, l), J(qn, n), Fu = l | n.baseLanes;
  }
  function hy() {
    J(ea, Fu), J(qn, qn.current);
  }
  function Vs() {
    Fu = ea.current, E(qn), E(ea);
  }
  var ga = z(null), Pa = null;
  function _i(l) {
    var n = l.alternate;
    J(rl, rl.current & 1), J(ga, l), Pa === null && (n === null || qn.current !== null || n.memoizedState !== null) && (Pa = l);
  }
  function Ls(l) {
    J(rl, rl.current), J(ga, l), Pa === null && (Pa = l);
  }
  function Qs(l) {
    l.tag === 22 ? (J(rl, rl.current), J(ga, l), Pa === null && (Pa = l)) : Gu();
  }
  function Gu() {
    J(rl, rl.current), J(ga, ga.current);
  }
  function Sa(l) {
    E(ga), Pa === l && (Pa = null), E(rl);
  }
  var rl = z(0);
  function lo(l) {
    for (var n = l; n !== null; ) {
      if (n.tag === 13) {
        var u = n.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || zp(u) || Qn(u)))
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
  var uu = 0, Je = null, Gt = null, Sl = null, Zs = !1, Di = !1, dc = !1, of = 0, ff = 0, ao = null, my = 0;
  function dl() {
    throw Error(C(321));
  }
  function Ld(l, n) {
    if (n === null) return !1;
    for (var u = 0; u < n.length && u < l.length; u++)
      if (!Za(l[u], n[u])) return !1;
    return !0;
  }
  function Mi(l, n, u, c, s, r) {
    return uu = r, Je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, G.H = l === null || l.memoizedState === null ? u0 : Cy, dc = !1, r = u(c, s), dc = !1, Di && (r = Zd(
      n,
      u,
      c,
      s
    )), Qd(l), r;
  }
  function Qd(l) {
    G.H = yf;
    var n = Gt !== null && Gt.next !== null;
    if (uu = 0, Sl = Gt = Je = null, Zs = !1, ff = 0, ao = null, n) throw Error(C(300));
    l === null || Rl || (l = l.dependencies, l !== null && va(l) && (Rl = !0));
  }
  function Zd(l, n, u, c) {
    Je = l;
    var s = 0;
    do {
      if (Di && (ao = null), ff = 0, Di = !1, 25 <= s) throw Error(C(301));
      if (s += 1, Sl = Gt = null, l.updateQueue != null) {
        var r = l.updateQueue;
        r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
      }
      G.H = Uy, r = n(u, c);
    } while (Di);
    return r;
  }
  function Pg() {
    var l = G.H, n = l.useState()[0];
    return n = typeof n.then == "function" ? sf(n) : n, l = l.useState()[0], (Gt !== null ? Gt.memoizedState : null) !== l && (Je.flags |= 1024), n;
  }
  function yy() {
    var l = of !== 0;
    return of = 0, l;
  }
  function Jd(l, n, u) {
    n.updateQueue = l.updateQueue, n.flags &= -2053, l.lanes &= ~u;
  }
  function no(l) {
    if (Zs) {
      for (l = l.memoizedState; l !== null; ) {
        var n = l.queue;
        n !== null && (n.pending = null), l = l.next;
      }
      Zs = !1;
    }
    uu = 0, Sl = Gt = Je = null, Di = !1, ff = of = 0, ao = null;
  }
  function ta() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Sl === null ? Je.memoizedState = Sl = l : Sl = Sl.next = l, Sl;
  }
  function il() {
    if (Gt === null) {
      var l = Je.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = Gt.next;
    var n = Sl === null ? Je.memoizedState : Sl.next;
    if (n !== null)
      Sl = n, Gt = l;
    else {
      if (l === null)
        throw Je.alternate === null ? Error(C(467)) : Error(C(310));
      Gt = l, l = {
        memoizedState: Gt.memoizedState,
        baseState: Gt.baseState,
        baseQueue: Gt.baseQueue,
        queue: Gt.queue,
        next: null
      }, Sl === null ? Je.memoizedState = Sl = l : Sl = Sl.next = l;
    }
    return Sl;
  }
  function Js() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sf(l) {
    var n = ff;
    return ff += 1, ao === null && (ao = []), l = oy(ao, l, n), n = Je, (Sl === null ? n.memoizedState : Sl.next) === null && (n = n.alternate, G.H = n === null || n.memoizedState === null ? u0 : Cy), l;
  }
  function rf(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return sf(l);
      if (l.$$typeof === Dt) return Re(l);
    }
    throw Error(C(438, String(l)));
  }
  function Ks(l) {
    var n = null, u = Je.updateQueue;
    if (u !== null && (n = u.memoCache), n == null) {
      var c = Je.alternate;
      c !== null && (c = c.updateQueue, c !== null && (c = c.memoCache, c != null && (n = {
        data: c.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), u === null && (u = Js(), Je.updateQueue = u), u.memoCache = n, u = n.data[n.index], u === void 0)
      for (u = n.data[n.index] = Array(l), c = 0; c < l; c++)
        u[c] = zt;
    return n.index++, u;
  }
  function wu(l, n) {
    return typeof n == "function" ? n(l) : n;
  }
  function $s(l) {
    var n = il();
    return Ci(n, Gt, l);
  }
  function Ci(l, n, u) {
    var c = l.queue;
    if (c === null) throw Error(C(311));
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
      var g = m = null, A = null, j = n, K = !1;
      do {
        var F = j.lane & -536870913;
        if (F !== j.lane ? (ht & F) === F : (uu & F) === F) {
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
            }), F === uc && (K = !0);
          else if ((uu & B) === B) {
            j = j.next, B === uc && (K = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, A === null ? (g = A = F, m = r) : A = A.next = F, Je.lanes |= B, Vn |= B;
          F = j.action, dc && u(r, F), r = j.hasEagerState ? j.eagerState : u(r, F);
        } else
          B = {
            lane: F,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, A === null ? (g = A = B, m = r) : A = A.next = B, Je.lanes |= F, Vn |= F;
        j = j.next;
      } while (j !== null && j !== n);
      if (A === null ? m = r : A.next = g, !Za(r, l.memoizedState) && (Rl = !0, K && (u = ic, u !== null)))
        throw u;
      l.memoizedState = r, l.baseState = m, l.baseQueue = A, c.lastRenderedState = r;
    }
    return s === null && (c.lanes = 0), [l.memoizedState, c.dispatch];
  }
  function Kd(l) {
    var n = il(), u = n.queue;
    if (u === null) throw Error(C(311));
    u.lastRenderedReducer = l;
    var c = u.dispatch, s = u.pending, r = n.memoizedState;
    if (s !== null) {
      u.pending = null;
      var m = s = s.next;
      do
        r = l(r, m.action), m = m.next;
      while (m !== s);
      Za(r, n.memoizedState) || (Rl = !0), n.memoizedState = r, n.baseQueue === null && (n.baseState = r), u.lastRenderedState = r;
    }
    return [r, c];
  }
  function py(l, n, u) {
    var c = Je, s = il(), r = dt;
    if (r) {
      if (u === void 0) throw Error(C(407));
      u = u();
    } else u = n();
    var m = !Za(
      (Gt || s).memoizedState,
      u
    );
    if (m && (s.memoizedState = u, Rl = !0), s = s.queue, Ps(gy.bind(null, c, s, l), [
      l
    ]), s.getSnapshot !== n || m || Sl !== null && Sl.memoizedState.tag & 1) {
      if (c.flags |= 2048, uo(
        9,
        { destroy: void 0 },
        ks.bind(
          null,
          c,
          s,
          u,
          n
        ),
        null
      ), Zt === null) throw Error(C(349));
      r || (uu & 127) !== 0 || vy(c, n, u);
    }
    return u;
  }
  function vy(l, n, u) {
    l.flags |= 16384, l = { getSnapshot: n, value: u }, n = Je.updateQueue, n === null ? (n = Js(), Je.updateQueue = n, n.stores = [l]) : (u = n.stores, u === null ? n.stores = [l] : u.push(l));
  }
  function ks(l, n, u, c) {
    n.value = u, n.getSnapshot = c, $d(n) && kd(l);
  }
  function gy(l, n, u) {
    return u(function() {
      $d(n) && kd(l);
    });
  }
  function $d(l) {
    var n = l.getSnapshot;
    l = l.value;
    try {
      var u = n();
      return !Za(l, u);
    } catch {
      return !0;
    }
  }
  function kd(l) {
    var n = ya(l, 2);
    n !== null && un(n, l, 2);
  }
  function Ws(l) {
    var n = ta();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), dc) {
        ma(!0);
        try {
          u();
        } finally {
          ma(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = l, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wu,
      lastRenderedState: l
    }, n;
  }
  function Pv(l, n, u, c) {
    return l.baseState = u, Ci(
      l,
      Gt,
      typeof c == "function" ? c : wu
    );
  }
  function la(l, n, u, c, s) {
    if (Ui(l)) throw Error(C(485));
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
      G.T !== null ? u(!0) : r.isTransition = !1, c(r), u = n.pending, u === null ? (r.next = n.pending = r, Sy(n, r)) : (r.next = u.next, n.pending = u.next = r);
    }
  }
  function Sy(l, n) {
    var u = n.action, c = n.payload, s = l.state;
    if (n.isTransition) {
      var r = G.T, m = {};
      G.T = m;
      try {
        var g = u(s, c), A = G.S;
        A !== null && A(m, g), by(l, n, g);
      } catch (j) {
        Wd(l, n, j);
      } finally {
        r !== null && m.types !== null && (r.types = m.types), G.T = r;
      }
    } else
      try {
        r = u(s, c), by(l, n, r);
      } catch (j) {
        Wd(l, n, j);
      }
  }
  function by(l, n, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(c) {
        Ey(l, n, c);
      },
      function(c) {
        return Wd(l, n, c);
      }
    ) : Ey(l, n, u);
  }
  function Ey(l, n, u) {
    n.status = "fulfilled", n.value = u, df(n), l.state = u, n = l.pending, n !== null && (u = n.next, u === n ? l.pending = null : (u = u.next, n.next = u, Sy(l, u)));
  }
  function Wd(l, n, u) {
    var c = l.pending;
    if (l.pending = null, c !== null) {
      c = c.next;
      do
        n.status = "rejected", n.reason = u, df(n), n = n.next;
      while (n !== c);
    }
    l.action = null;
  }
  function df(l) {
    l = l.listeners;
    for (var n = 0; n < l.length; n++) (0, l[n])();
  }
  function Ty(l, n) {
    return n;
  }
  function Fs(l, n) {
    if (dt) {
      var u = Zt.formState;
      if (u !== null) {
        e: {
          var c = Je;
          if (dt) {
            if (It) {
              t: {
                for (var s = It, r = Wa; s.nodeType !== 8; ) {
                  if (!r) {
                    s = null;
                    break t;
                  }
                  if (s = ia(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break t;
                  }
                }
                r = s.data, s = r === "F!" || r === "F" ? s : null;
              }
              if (s) {
                It = ia(
                  s.nextSibling
                ), c = s.data === "F!";
                break e;
              }
            }
            Ca(c);
          }
          c = !1;
        }
        c && (n = u[0]);
      }
    }
    return u = ta(), u.memoizedState = u.baseState = n, c = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ty,
      lastRenderedState: n
    }, u.queue = c, u = Dy.bind(
      null,
      Je,
      c
    ), c.dispatch = u, c = Ws(!1), r = co.bind(
      null,
      Je,
      !1,
      c.queue
    ), c = ta(), s = {
      state: n,
      dispatch: null,
      action: l,
      pending: null
    }, c.queue = s, u = la.bind(
      null,
      Je,
      s,
      r,
      u
    ), s.dispatch = u, c.memoizedState = l, [n, u, !1];
  }
  function Ay(l) {
    var n = il();
    return e0(n, Gt, l);
  }
  function e0(l, n, u) {
    if (n = Ci(
      l,
      n,
      Ty
    )[0], l = $s(wu)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var c = sf(n);
      } catch (m) {
        throw m === nu ? cc : m;
      }
    else c = n;
    n = il();
    var s = n.queue, r = s.dispatch;
    return u !== n.memoizedState && (Je.flags |= 2048, uo(
      9,
      { destroy: void 0 },
      Fd.bind(null, s, u),
      null
    )), [c, r, l];
  }
  function Fd(l, n) {
    l.action = n;
  }
  function Id(l) {
    var n = il(), u = Gt;
    if (u !== null)
      return e0(n, u, l);
    il(), n = n.memoizedState, u = il();
    var c = u.queue.dispatch;
    return u.memoizedState = l, [n, c, !1];
  }
  function uo(l, n, u, c) {
    return l = { tag: l, create: u, deps: c, inst: n, next: null }, n = Je.updateQueue, n === null && (n = Js(), Je.updateQueue = n), u = n.lastEffect, u === null ? n.lastEffect = l.next = l : (c = u.next, u.next = l, l.next = c, n.lastEffect = l), l;
  }
  function zy() {
    return il().memoizedState;
  }
  function Is(l, n, u, c) {
    var s = ta();
    Je.flags |= l, s.memoizedState = uo(
      1 | n,
      { destroy: void 0 },
      u,
      c === void 0 ? null : c
    );
  }
  function hf(l, n, u, c) {
    var s = il();
    c = c === void 0 ? null : c;
    var r = s.memoizedState.inst;
    Gt !== null && c !== null && Ld(c, Gt.memoizedState.deps) ? s.memoizedState = uo(n, r, u, c) : (Je.flags |= l, s.memoizedState = uo(
      1 | n,
      r,
      u,
      c
    ));
  }
  function Pd(l, n) {
    Is(8390656, 8, l, n);
  }
  function Ps(l, n) {
    hf(2048, 8, l, n);
  }
  function t0(l) {
    Je.flags |= 4;
    var n = Je.updateQueue;
    if (n === null)
      n = Js(), Je.updateQueue = n, n.events = [l];
    else {
      var u = n.events;
      u === null ? n.events = [l] : u.push(l);
    }
  }
  function eh(l) {
    var n = il().memoizedState;
    return t0({ ref: n, nextImpl: l }), function() {
      if ((Ot & 2) !== 0) throw Error(C(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function er(l, n) {
    return hf(4, 2, l, n);
  }
  function th(l, n) {
    return hf(4, 4, l, n);
  }
  function Oy(l, n) {
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
  function lh(l, n, u) {
    u = u != null ? u.concat([l]) : null, hf(4, 4, Oy.bind(null, n, l), u);
  }
  function ah() {
  }
  function Xu(l, n) {
    var u = il();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    return n !== null && Ld(n, c[1]) ? c[0] : (u.memoizedState = [l, n], l);
  }
  function nh(l, n) {
    var u = il();
    n = n === void 0 ? null : n;
    var c = u.memoizedState;
    if (n !== null && Ld(n, c[1]))
      return c[0];
    if (c = l(), dc) {
      ma(!0);
      try {
        l();
      } finally {
        ma(!1);
      }
    }
    return u.memoizedState = [c, n], c;
  }
  function Ry(l, n, u) {
    return u === void 0 || (uu & 1073741824) !== 0 && (ht & 261930) === 0 ? l.memoizedState = n : (l.memoizedState = u, l = np(), Je.lanes |= l, Vn |= l, u);
  }
  function uh(l, n, u, c) {
    return Za(u, n) ? u : qn.current !== null ? (l = Ry(l, u, c), Za(l, n) || (Rl = !0), l) : (uu & 42) === 0 || (uu & 1073741824) !== 0 && (ht & 261930) === 0 ? (Rl = !0, l.memoizedState = u) : (l = np(), Je.lanes |= l, Vn |= l, n);
  }
  function Vu(l, n, u, c, s) {
    var r = q.p;
    q.p = r !== 0 && 8 > r ? r : 8;
    var m = G.T, g = {};
    G.T = g, co(l, !1, n, u);
    try {
      var A = s(), j = G.S;
      if (j !== null && j(g, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var K = Yd(
          A,
          c
        );
        io(
          l,
          n,
          K,
          qa(l)
        );
      } else
        io(
          l,
          n,
          c,
          qa(l)
        );
    } catch (F) {
      io(
        l,
        n,
        { then: function() {
        }, status: "rejected", reason: F },
        qa()
      );
    } finally {
      q.p = r, m !== null && g.types !== null && (m.types = g.types), G.T = m;
    }
  }
  function _y() {
  }
  function ih(l, n, u, c) {
    if (l.tag !== 5) throw Error(C(476));
    var s = tr(l).queue;
    Vu(
      l,
      s,
      n,
      I,
      u === null ? _y : function() {
        return mf(l), u(c);
      }
    );
  }
  function tr(l) {
    var n = l.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: I,
      baseState: I,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wu,
        lastRenderedState: I
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
        lastRenderedReducer: wu,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = n, l = l.alternate, l !== null && (l.memoizedState = n), n;
  }
  function mf(l) {
    var n = tr(l);
    n.next === null && (n = l.alternate.memoizedState), io(
      l,
      n.next.queue,
      {},
      qa()
    );
  }
  function wt() {
    return Re(Tl);
  }
  function l0() {
    return il().memoizedState;
  }
  function a0() {
    return il().memoizedState;
  }
  function n0(l) {
    for (var n = l.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var u = qa();
          l = Oi(u);
          var c = Ri(n, l, u);
          c !== null && (un(c, n, u), Yu(c, n, u)), n = { cache: Bd() }, l.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function Lu(l, n, u) {
    var c = qa();
    u = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ui(l) ? My(n, u) : (u = Hn(l, n, u, c), u !== null && (un(u, l, c), ch(u, n, c)));
  }
  function Dy(l, n, u) {
    var c = qa();
    io(l, n, u, c);
  }
  function io(l, n, u, c) {
    var s = {
      lane: c,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ui(l)) My(n, s);
    else {
      var r = l.alternate;
      if (l.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer, r !== null))
        try {
          var m = n.lastRenderedState, g = r(m, u);
          if (s.hasEagerState = !0, s.eagerState = g, Za(g, m))
            return pn(l, n, s, 0), Zt === null && yn(), !1;
        } catch {
        }
      if (u = Hn(l, n, s, c), u !== null)
        return un(u, l, c), ch(u, n, c), !0;
    }
    return !1;
  }
  function co(l, n, u, c) {
    if (c = {
      lane: 2,
      revertLane: So(),
      gesture: null,
      action: c,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ui(l)) {
      if (n) throw Error(C(479));
    } else
      n = Hn(
        l,
        u,
        c,
        2
      ), n !== null && un(n, l, 2);
  }
  function Ui(l) {
    var n = l.alternate;
    return l === Je || n !== null && n === Je;
  }
  function My(l, n) {
    Di = Zs = !0;
    var u = l.pending;
    u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n;
  }
  function ch(l, n, u) {
    if ((u & 4194048) !== 0) {
      var c = n.lanes;
      c &= l.pendingLanes, u |= c, n.lanes = u, is(l, u);
    }
  }
  var yf = {
    readContext: Re,
    use: rf,
    useCallback: dl,
    useContext: dl,
    useEffect: dl,
    useImperativeHandle: dl,
    useLayoutEffect: dl,
    useInsertionEffect: dl,
    useMemo: dl,
    useReducer: dl,
    useRef: dl,
    useState: dl,
    useDebugValue: dl,
    useDeferredValue: dl,
    useTransition: dl,
    useSyncExternalStore: dl,
    useId: dl,
    useHostTransitionStatus: dl,
    useFormState: dl,
    useActionState: dl,
    useOptimistic: dl,
    useMemoCache: dl,
    useCacheRefresh: dl
  };
  yf.useEffectEvent = dl;
  var u0 = {
    readContext: Re,
    use: rf,
    useCallback: function(l, n) {
      return ta().memoizedState = [
        l,
        n === void 0 ? null : n
      ], l;
    },
    useContext: Re,
    useEffect: Pd,
    useImperativeHandle: function(l, n, u) {
      u = u != null ? u.concat([l]) : null, Is(
        4194308,
        4,
        Oy.bind(null, n, l),
        u
      );
    },
    useLayoutEffect: function(l, n) {
      return Is(4194308, 4, l, n);
    },
    useInsertionEffect: function(l, n) {
      Is(4, 2, l, n);
    },
    useMemo: function(l, n) {
      var u = ta();
      n = n === void 0 ? null : n;
      var c = l();
      if (dc) {
        ma(!0);
        try {
          l();
        } finally {
          ma(!1);
        }
      }
      return u.memoizedState = [c, n], c;
    },
    useReducer: function(l, n, u) {
      var c = ta();
      if (u !== void 0) {
        var s = u(n);
        if (dc) {
          ma(!0);
          try {
            u(n);
          } finally {
            ma(!1);
          }
        }
      } else s = n;
      return c.memoizedState = c.baseState = s, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: s
      }, c.queue = l, l = l.dispatch = Lu.bind(
        null,
        Je,
        l
      ), [c.memoizedState, l];
    },
    useRef: function(l) {
      var n = ta();
      return l = { current: l }, n.memoizedState = l;
    },
    useState: function(l) {
      l = Ws(l);
      var n = l.queue, u = Dy.bind(null, Je, n);
      return n.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = ta();
      return Ry(u, l, n);
    },
    useTransition: function() {
      var l = Ws(!1);
      return l = Vu.bind(
        null,
        Je,
        l.queue,
        !0,
        !1
      ), ta().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, n, u) {
      var c = Je, s = ta();
      if (dt) {
        if (u === void 0)
          throw Error(C(407));
        u = u();
      } else {
        if (u = n(), Zt === null)
          throw Error(C(349));
        (ht & 127) !== 0 || vy(c, n, u);
      }
      s.memoizedState = u;
      var r = { value: u, getSnapshot: n };
      return s.queue = r, Pd(gy.bind(null, c, r, l), [
        l
      ]), c.flags |= 2048, uo(
        9,
        { destroy: void 0 },
        ks.bind(
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
      var l = ta(), n = Zt.identifierPrefix;
      if (dt) {
        var u = ka, c = bn;
        u = (c & ~(1 << 32 - Xl(c) - 1)).toString(32) + u, n = "_" + n + "R_" + u, u = of++, 0 < u && (n += "H" + u.toString(32)), n += "_";
      } else
        u = my++, n = "_" + n + "r_" + u.toString(32) + "_";
      return l.memoizedState = n;
    },
    useHostTransitionStatus: wt,
    useFormState: Fs,
    useActionState: Fs,
    useOptimistic: function(l) {
      var n = ta();
      n.memoizedState = n.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = u, n = co.bind(
        null,
        Je,
        !0,
        u
      ), u.dispatch = n, [l, n];
    },
    useMemoCache: Ks,
    useCacheRefresh: function() {
      return ta().memoizedState = n0.bind(
        null,
        Je
      );
    },
    useEffectEvent: function(l) {
      var n = ta(), u = { impl: l };
      return n.memoizedState = u, function() {
        if ((Ot & 2) !== 0)
          throw Error(C(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, Cy = {
    readContext: Re,
    use: rf,
    useCallback: Xu,
    useContext: Re,
    useEffect: Ps,
    useImperativeHandle: lh,
    useInsertionEffect: er,
    useLayoutEffect: th,
    useMemo: nh,
    useReducer: $s,
    useRef: zy,
    useState: function() {
      return $s(wu);
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = il();
      return uh(
        u,
        Gt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = $s(wu)[0], n = il().memoizedState;
      return [
        typeof l == "boolean" ? l : sf(l),
        n
      ];
    },
    useSyncExternalStore: py,
    useId: l0,
    useHostTransitionStatus: wt,
    useFormState: Ay,
    useActionState: Ay,
    useOptimistic: function(l, n) {
      var u = il();
      return Pv(u, Gt, l, n);
    },
    useMemoCache: Ks,
    useCacheRefresh: a0
  };
  Cy.useEffectEvent = eh;
  var Uy = {
    readContext: Re,
    use: rf,
    useCallback: Xu,
    useContext: Re,
    useEffect: Ps,
    useImperativeHandle: lh,
    useInsertionEffect: er,
    useLayoutEffect: th,
    useMemo: nh,
    useReducer: Kd,
    useRef: zy,
    useState: function() {
      return Kd(wu);
    },
    useDebugValue: ah,
    useDeferredValue: function(l, n) {
      var u = il();
      return Gt === null ? Ry(u, l, n) : uh(
        u,
        Gt.memoizedState,
        l,
        n
      );
    },
    useTransition: function() {
      var l = Kd(wu)[0], n = il().memoizedState;
      return [
        typeof l == "boolean" ? l : sf(l),
        n
      ];
    },
    useSyncExternalStore: py,
    useId: l0,
    useHostTransitionStatus: wt,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(l, n) {
      var u = il();
      return Gt !== null ? Pv(u, Gt, l, n) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Ks,
    useCacheRefresh: a0
  };
  Uy.useEffectEvent = eh;
  function xy(l, n, u, c) {
    n = l.memoizedState, u = u(c, n), u = u == null ? n : ae({}, n, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var oo = {
    enqueueSetState: function(l, n, u) {
      l = l._reactInternals;
      var c = qa(), s = Oi(c);
      s.payload = n, u != null && (s.callback = u), n = Ri(l, s, c), n !== null && (un(n, l, c), Yu(n, l, c));
    },
    enqueueReplaceState: function(l, n, u) {
      l = l._reactInternals;
      var c = qa(), s = Oi(c);
      s.tag = 1, s.payload = n, u != null && (s.callback = u), n = Ri(l, s, c), n !== null && (un(n, l, c), Yu(n, l, c));
    },
    enqueueForceUpdate: function(l, n) {
      l = l._reactInternals;
      var u = qa(), c = Oi(u);
      c.tag = 2, n != null && (c.callback = n), n = Ri(l, c, u), n !== null && (un(n, l, u), Yu(n, l, u));
    }
  };
  function iu(l, n, u, c, s, r, m) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(c, r, m) : n.prototype && n.prototype.isPureReactComponent ? !Pi(u, c) || !Pi(s, r) : !0;
  }
  function Ny(l, n, u, c) {
    l = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(u, c), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(u, c), n.state !== l && oo.enqueueReplaceState(n, n.state, null);
  }
  function fo(l, n) {
    var u = n;
    if ("ref" in n) {
      u = {};
      for (var c in n)
        c !== "ref" && (u[c] = n[c]);
    }
    if (l = l.defaultProps) {
      u === n && (u = ae({}, u));
      for (var s in l)
        u[s] === void 0 && (u[s] = l[s]);
    }
    return u;
  }
  function Hy(l) {
    ac(l);
  }
  function oh(l) {
    console.error(l);
  }
  function jy(l) {
    ac(l);
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
  function fh(l, n, u) {
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
  function vf(l, n, u) {
    return u = Oi(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      pf(l, n);
    }, u;
  }
  function i0(l) {
    return l = Oi(l), l.tag = 3, l;
  }
  function qy(l, n, u, c) {
    var s = u.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var r = c.value;
      l.payload = function() {
        return s(r);
      }, l.callback = function() {
        fh(n, u, c);
      };
    }
    var m = u.stateNode;
    m !== null && typeof m.componentDidCatch == "function" && (l.callback = function() {
      fh(n, u, c), typeof s != "function" && (Pu === null ? Pu = /* @__PURE__ */ new Set([this]) : Pu.add(this));
      var g = c.stack;
      this.componentDidCatch(c.value, {
        componentStack: g !== null ? g : ""
      });
    });
  }
  function c0(l, n, u, c, s) {
    if (u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
      if (n = u.alternate, n !== null && En(
        n,
        u,
        s,
        !0
      ), u = ga.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return Pa === null ? Eh() : u.alternate === null && cl === 0 && (cl = 3), u.flags &= -257, u.flags |= 65536, u.lanes = s, c === af ? u.flags |= 16384 : (n = u.updateQueue, n === null ? u.updateQueue = /* @__PURE__ */ new Set([c]) : n.add(c), zh(l, c, s)), !1;
          case 22:
            return u.flags |= 65536, c === af ? u.flags |= 16384 : (n = u.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([c])
            }, u.updateQueue = n) : (u = n.retryQueue, u === null ? n.retryQueue = /* @__PURE__ */ new Set([c]) : u.add(c)), zh(l, c, s)), !1;
        }
        throw Error(C(435, u.tag));
      }
      return zh(l, c, s), Eh(), !1;
    }
    if (dt)
      return n = ga.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = s, c !== Hu && (l = Error(C(422), { cause: c }), xs(gn(l, u)))) : (c !== Hu && (n = Error(C(423), {
        cause: c
      }), xs(
        gn(n, u)
      )), l = l.current.alternate, l.flags |= 65536, s &= -s, l.lanes |= s, c = gn(c, u), s = vf(
        l.stateNode,
        c,
        s
      ), cf(l, s), cl !== 4 && (cl = 2)), !1;
    var r = Error(C(520), { cause: c });
    if (r = gn(r, u), bl === null ? bl = [r] : bl.push(r), cl !== 4 && (cl = 2), n === null) return !0;
    c = gn(c, u), u = n;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = s & -s, u.lanes |= l, l = vf(u.stateNode, c, l), cf(u, l), !1;
        case 1:
          if (n = u.type, r = u.stateNode, (u.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (Pu === null || !Pu.has(r))))
            return u.flags |= 65536, s &= -s, u.lanes |= s, s = i0(s), qy(
              s,
              l,
              u,
              c
            ), cf(u, s), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var By = Error(C(461)), Rl = !1;
  function Ll(l, n, u, c) {
    n.child = l === null ? dy(n, null, u, c) : eo(
      n,
      l.child,
      u,
      c
    );
  }
  function Qu(l, n, u, c, s) {
    u = u.render;
    var r = n.ref;
    if ("ref" in c) {
      var m = {};
      for (var g in c)
        g !== "ref" && (m[g] = c[g]);
    } else m = c;
    return Bu(n), c = Mi(
      l,
      n,
      u,
      m,
      r,
      s
    ), g = yy(), l !== null && !Rl ? (Jd(l, n, s), Zu(l, n, s)) : (dt && g && xd(n), n.flags |= 1, Ll(l, n, c, s), n.child);
  }
  function Yy(l, n, u, c, s) {
    if (l === null) {
      var r = u.type;
      return typeof r == "function" && !jn(r) && r.defaultProps === void 0 && u.compare === null ? (n.tag = 15, n.type = r, Gy(
        l,
        n,
        r,
        c,
        s
      )) : (l = Rs(
        u.type,
        null,
        c,
        n,
        n.mode,
        s
      ), l.ref = n.ref, l.return = n, n.child = l);
    }
    if (r = l.child, !so(l, s)) {
      var m = r.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Pi, u(m, c) && l.ref === n.ref)
        return Zu(l, n, s);
    }
    return n.flags |= 1, l = vn(r, c), l.ref = n.ref, l.return = n, n.child = l;
  }
  function Gy(l, n, u, c, s) {
    if (l !== null) {
      var r = l.memoizedProps;
      if (Pi(r, c) && l.ref === n.ref)
        if (Rl = !1, n.pendingProps = c = r, so(l, s))
          (l.flags & 131072) !== 0 && (Rl = !0);
        else
          return n.lanes = l.lanes, Zu(l, n, s);
    }
    return Bn(
      l,
      n,
      u,
      c,
      s
    );
  }
  function wy(l, n, u, c) {
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
        return ar(
          l,
          n,
          r,
          u,
          c
        );
      }
      if ((u & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ia(
          n,
          r !== null ? r.cachePool : null
        ), r !== null ? Xs(n, r) : hy(), Qs(n);
      else
        return c = n.lanes = 536870912, ar(
          l,
          n,
          r !== null ? r.baseLanes | u : u,
          u,
          c
        );
    } else
      r !== null ? (Ia(n, r.cachePool), Xs(n, r), Gu(), n.memoizedState = null) : (l !== null && Ia(n, null), hy(), Gu());
    return Ll(l, n, s, u), n.child;
  }
  function lr(l, n) {
    return l !== null && l.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function ar(l, n, u, c, s) {
    var r = Ai();
    return r = r === null ? null : { parent: gl._currentValue, pool: r }, n.memoizedState = {
      baseLanes: u,
      cachePool: r
    }, l !== null && Ia(n, null), hy(), Qs(n), l !== null && En(l, n, c, !0), n.childLanes = s, null;
  }
  function aa(l, n) {
    return n = xi(
      { mode: n.mode, children: n.children },
      l.mode
    ), n.ref = l.ref, l.child = n, n.return = l, n;
  }
  function Xy(l, n, u) {
    return eo(n, l.child, null, u), l = aa(n, n.pendingProps), l.flags |= 2, Sa(n), n.memoizedState = null, l;
  }
  function en(l, n, u) {
    var c = n.pendingProps, s = (n.flags & 128) !== 0;
    if (n.flags &= -129, l === null) {
      if (dt) {
        if (c.mode === "hidden")
          return l = aa(n, c), n.lanes = 536870912, lr(null, l);
        if (Ls(n), (l = It) ? (l = Fe(
          l,
          Wa
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: tu !== null ? { id: bn, overflow: ka } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Ds(l), u.return = n, n.child = u, Ul = n, It = null)) : l = null, l === null) throw Ca(n);
        return n.lanes = 536870912, null;
      }
      return aa(n, c);
    }
    var r = l.memoizedState;
    if (r !== null) {
      var m = r.dehydrated;
      if (Ls(n), s)
        if (n.flags & 256)
          n.flags &= -257, n = Xy(
            l,
            n,
            u
          );
        else if (n.memoizedState !== null)
          n.child = l.child, n.flags |= 128, n = null;
        else throw Error(C(558));
      else if (Rl || En(l, n, u, !1), s = (u & l.childLanes) !== 0, Rl || s) {
        if (c = Zt, c !== null && (m = gu(c, u), m !== 0 && m !== r.retryLane))
          throw r.retryLane = m, ya(l, m), un(c, l, m), By;
        Eh(), n = Xy(
          l,
          n,
          u
        );
      } else
        l = r.treeContext, It = ia(m.nextSibling), Ul = n, dt = !0, Nu = null, Wa = !1, l !== null && iy(n, l), n = aa(n, c), n.flags |= 4096;
      return n;
    }
    return l = vn(l.child, {
      mode: c.mode,
      children: c.children
    }), l.ref = n.ref, n.child = l, l.return = n, l;
  }
  function nr(l, n) {
    var u = n.ref;
    if (u === null)
      l !== null && l.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(C(284));
      (l === null || l.ref !== u) && (n.flags |= 4194816);
    }
  }
  function Bn(l, n, u, c, s) {
    return Bu(n), u = Mi(
      l,
      n,
      u,
      c,
      void 0,
      s
    ), c = yy(), l !== null && !Rl ? (Jd(l, n, s), Zu(l, n, s)) : (dt && c && xd(n), n.flags |= 1, Ll(l, n, u, s), n.child);
  }
  function Vy(l, n, u, c, s, r) {
    return Bu(n), n.updateQueue = null, u = Zd(
      n,
      c,
      u,
      s
    ), Qd(l), c = yy(), l !== null && !Rl ? (Jd(l, n, r), Zu(l, n, r)) : (dt && c && xd(n), n.flags |= 1, Ll(l, n, u, r), n.child);
  }
  function hc(l, n, u, c, s) {
    if (Bu(n), n.stateNode === null) {
      var r = $c, m = u.contextType;
      typeof m == "object" && m !== null && (r = Re(m)), r = new u(c, r), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = oo, n.stateNode = r, r._reactInternals = n, r = n.stateNode, r.props = c, r.state = n.memoizedState, r.refs = {}, wd(n), m = u.contextType, r.context = typeof m == "object" && m !== null ? Re(m) : $c, r.state = n.memoizedState, m = u.getDerivedStateFromProps, typeof m == "function" && (xy(
        n,
        u,
        m,
        c
      ), r.state = n.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (m = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), m !== r.state && oo.enqueueReplaceState(r, r.state, null), rc(n, c, r, s), ws(), r.state = n.memoizedState), typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !0;
    } else if (l === null) {
      r = n.stateNode;
      var g = n.memoizedProps, A = fo(u, g);
      r.props = A;
      var j = r.context, K = u.contextType;
      m = $c, typeof K == "object" && K !== null && (m = Re(K));
      var F = u.getDerivedStateFromProps;
      K = typeof F == "function" || typeof r.getSnapshotBeforeUpdate == "function", g = n.pendingProps !== g, K || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (g || j !== m) && Ny(
        n,
        r,
        c,
        m
      ), zi = !1;
      var B = n.memoizedState;
      r.state = B, rc(n, c, r, s), ws(), j = n.memoizedState, g || B !== j || zi ? (typeof F == "function" && (xy(
        n,
        u,
        F,
        c
      ), j = n.memoizedState), (A = zi || iu(
        n,
        u,
        A,
        c,
        B,
        j,
        m
      )) ? (K || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = c, n.memoizedState = j), r.props = c, r.state = j, r.context = m, c = A) : (typeof r.componentDidMount == "function" && (n.flags |= 4194308), c = !1);
    } else {
      r = n.stateNode, Gs(l, n), m = n.memoizedProps, K = fo(u, m), r.props = K, F = n.pendingProps, B = r.context, j = u.contextType, A = $c, typeof j == "object" && j !== null && (A = Re(j)), g = u.getDerivedStateFromProps, (j = typeof g == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (m !== F || B !== A) && Ny(
        n,
        r,
        c,
        A
      ), zi = !1, B = n.memoizedState, r.state = B, rc(n, c, r, s), ws();
      var Q = n.memoizedState;
      m !== F || B !== Q || zi || l !== null && l.dependencies !== null && va(l.dependencies) ? (typeof g == "function" && (xy(
        n,
        u,
        g,
        c
      ), Q = n.memoizedState), (K = zi || iu(
        n,
        u,
        K,
        c,
        B,
        Q,
        A
      ) || l !== null && l.dependencies !== null && va(l.dependencies)) ? (j || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(c, Q, A), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(
        c,
        Q,
        A
      )), typeof r.componentDidUpdate == "function" && (n.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), n.memoizedProps = c, n.memoizedState = Q), r.props = c, r.state = Q, r.context = A, c = K) : (typeof r.componentDidUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || m === l.memoizedProps && B === l.memoizedState || (n.flags |= 1024), c = !1);
    }
    return r = c, nr(l, n), c = (n.flags & 128) !== 0, r || c ? (r = n.stateNode, u = c && typeof u.getDerivedStateFromError != "function" ? null : r.render(), n.flags |= 1, l !== null && c ? (n.child = eo(
      n,
      l.child,
      null,
      s
    ), n.child = eo(
      n,
      null,
      u,
      s
    )) : Ll(l, n, u, s), n.memoizedState = r.state, l = n.child) : l = Zu(
      l,
      n,
      s
    ), l;
  }
  function Ly(l, n, u, c) {
    return lu(), n.flags |= 256, Ll(l, n, u, c), n.child;
  }
  var Yn = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ur(l) {
    return { baseLanes: l, cachePool: Gd() };
  }
  function ir(l, n, u) {
    return l = l !== null ? l.childLanes & ~u : 0, n && (l |= ln), l;
  }
  function Gn(l, n, u) {
    var c = n.pendingProps, s = !1, r = (n.flags & 128) !== 0, m;
    if ((m = r) || (m = l !== null && l.memoizedState === null ? !1 : (rl.current & 2) !== 0), m && (s = !0, n.flags &= -129), m = (n.flags & 32) !== 0, n.flags &= -33, l === null) {
      if (dt) {
        if (s ? _i(n) : Gu(), (l = It) ? (l = Fe(
          l,
          Wa
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (n.memoizedState = {
          dehydrated: l,
          treeContext: tu !== null ? { id: bn, overflow: ka } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = Ds(l), u.return = n, n.child = u, Ul = n, It = null)) : l = null, l === null) throw Ca(n);
        return Qn(l) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      var g = c.children;
      return c = c.fallback, s ? (Gu(), s = n.mode, g = xi(
        { mode: "hidden", children: g },
        s
      ), c = kc(
        c,
        s,
        u,
        null
      ), g.return = n, c.return = n, g.sibling = c, n.child = g, c = n.child, c.memoizedState = ur(u), c.childLanes = ir(
        l,
        m,
        u
      ), n.memoizedState = Yn, lr(null, c)) : (_i(n), sh(n, g));
    }
    var A = l.memoizedState;
    if (A !== null && (g = A.dehydrated, g !== null)) {
      if (r)
        n.flags & 256 ? (_i(n), n.flags &= -257, n = rh(
          l,
          n,
          u
        )) : n.memoizedState !== null ? (Gu(), n.child = l.child, n.flags |= 128, n = null) : (Gu(), g = c.fallback, s = n.mode, c = xi(
          { mode: "visible", children: c.children },
          s
        ), g = kc(
          g,
          s,
          u,
          null
        ), g.flags |= 2, c.return = n, g.return = n, c.sibling = g, n.child = c, eo(
          n,
          l.child,
          null,
          u
        ), c = n.child, c.memoizedState = ur(u), c.childLanes = ir(
          l,
          m,
          u
        ), n.memoizedState = Yn, n = lr(null, c));
      else if (_i(n), Qn(g)) {
        if (m = g.nextSibling && g.nextSibling.dataset, m) var j = m.dgst;
        m = j, c = Error(C(419)), c.stack = "", c.digest = m, xs({ value: c, source: null, stack: null }), n = rh(
          l,
          n,
          u
        );
      } else if (Rl || En(l, n, u, !1), m = (u & l.childLanes) !== 0, Rl || m) {
        if (m = Zt, m !== null && (c = gu(m, u), c !== 0 && c !== A.retryLane))
          throw A.retryLane = c, ya(l, c), un(m, l, c), By;
        zp(g) || Eh(), n = rh(
          l,
          n,
          u
        );
      } else
        zp(g) ? (n.flags |= 192, n.child = l.child, n = null) : (l = A.treeContext, It = ia(
          g.nextSibling
        ), Ul = n, dt = !0, Nu = null, Wa = !1, l !== null && iy(n, l), n = sh(
          n,
          c.children
        ), n.flags |= 4096);
      return n;
    }
    return s ? (Gu(), g = c.fallback, s = n.mode, A = l.child, j = A.sibling, c = vn(A, {
      mode: "hidden",
      children: c.children
    }), c.subtreeFlags = A.subtreeFlags & 65011712, j !== null ? g = vn(
      j,
      g
    ) : (g = kc(
      g,
      s,
      u,
      null
    ), g.flags |= 2), g.return = n, c.return = n, c.sibling = g, n.child = c, lr(null, c), c = n.child, g = l.child.memoizedState, g === null ? g = ur(u) : (s = g.cachePool, s !== null ? (A = gl._currentValue, s = s.parent !== A ? { parent: A, pool: A } : s) : s = Gd(), g = {
      baseLanes: g.baseLanes | u,
      cachePool: s
    }), c.memoizedState = g, c.childLanes = ir(
      l,
      m,
      u
    ), n.memoizedState = Yn, lr(l.child, c)) : (_i(n), u = l.child, l = u.sibling, u = vn(u, {
      mode: "visible",
      children: c.children
    }), u.return = n, u.sibling = null, l !== null && (m = n.deletions, m === null ? (n.deletions = [l], n.flags |= 16) : m.push(l)), n.child = u, n.memoizedState = null, u);
  }
  function sh(l, n) {
    return n = xi(
      { mode: "visible", children: n },
      l.mode
    ), n.return = l, l.child = n;
  }
  function xi(l, n) {
    return l = Ka(22, l, null, n), l.lanes = 0, l;
  }
  function rh(l, n, u) {
    return eo(n, l.child, null, u), l = sh(
      n,
      n.pendingProps.children
    ), l.flags |= 2, n.memoizedState = null, l;
  }
  function gf(l, n, u) {
    l.lanes |= n;
    var c = l.alternate;
    c !== null && (c.lanes |= n), Ns(l.return, n, u);
  }
  function mc(l, n, u, c, s, r) {
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
  function Qy(l, n, u) {
    var c = n.pendingProps, s = c.revealOrder, r = c.tail;
    c = c.children;
    var m = rl.current, g = (m & 2) !== 0;
    if (g ? (m = m & 1 | 2, n.flags |= 128) : m &= 1, J(rl, m), Ll(l, n, c, u), c = dt ? Po : 0, !g && l !== null && (l.flags & 128) !== 0)
      e: for (l = n.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && gf(l, u, n);
        else if (l.tag === 19)
          gf(l, u, n);
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
          l = u.alternate, l !== null && lo(l) === null && (s = u), u = u.sibling;
        u = s, u === null ? (s = n.child, n.child = null) : (s = u.sibling, u.sibling = null), mc(
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
          if (l = s.alternate, l !== null && lo(l) === null) {
            n.child = s;
            break;
          }
          l = s.sibling, s.sibling = u, u = s, s = l;
        }
        mc(
          n,
          !0,
          u,
          null,
          r,
          c
        );
        break;
      case "together":
        mc(
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
  function Zu(l, n, u) {
    if (l !== null && (n.dependencies = l.dependencies), Vn |= n.lanes, (u & n.childLanes) === 0)
      if (l !== null) {
        if (En(
          l,
          n,
          u,
          !1
        ), (u & n.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && n.child !== l.child)
      throw Error(C(153));
    if (n.child !== null) {
      for (l = n.child, u = vn(l, l.pendingProps), n.child = u, u.return = n; l.sibling !== null; )
        l = l.sibling, u = u.sibling = vn(l, l.pendingProps), u.return = n;
      u.sibling = null;
    }
    return n.child;
  }
  function so(l, n) {
    return (l.lanes & n) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && va(l)));
  }
  function o0(l, n, u) {
    switch (n.tag) {
      case 3:
        Pe(n, n.stateNode.containerInfo), qu(n, gl, l.memoizedState.cache), lu();
        break;
      case 27:
      case 5:
        qt(n);
        break;
      case 4:
        Pe(n, n.stateNode.containerInfo);
        break;
      case 10:
        qu(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Ls(n), null;
        break;
      case 13:
        var c = n.memoizedState;
        if (c !== null)
          return c.dehydrated !== null ? (_i(n), n.flags |= 128, null) : (u & n.child.childLanes) !== 0 ? Gn(l, n, u) : (_i(n), l = Zu(
            l,
            n,
            u
          ), l !== null ? l.sibling : null);
        _i(n);
        break;
      case 19:
        var s = (l.flags & 128) !== 0;
        if (c = (u & n.childLanes) !== 0, c || (En(
          l,
          n,
          u,
          !1
        ), c = (u & n.childLanes) !== 0), s) {
          if (c)
            return Qy(
              l,
              n,
              u
            );
          n.flags |= 128;
        }
        if (s = n.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), J(rl, rl.current), c) break;
        return null;
      case 22:
        return n.lanes = 0, wy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        qu(n, gl, l.memoizedState.cache);
    }
    return Zu(l, n, u);
  }
  function cr(l, n, u) {
    if (l !== null)
      if (l.memoizedProps !== n.pendingProps)
        Rl = !0;
      else {
        if (!so(l, u) && (n.flags & 128) === 0)
          return Rl = !1, o0(
            l,
            n,
            u
          );
        Rl = (l.flags & 131072) !== 0;
      }
    else
      Rl = !1, dt && (n.flags & 1048576) !== 0 && Cs(n, Po, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var c = n.pendingProps;
          if (l = oc(n.elementType), n.type = l, typeof l == "function")
            jn(l) ? (c = fo(l, c), n.tag = 1, n = hc(
              null,
              n,
              l,
              c,
              u
            )) : (n.tag = 0, n = Bn(
              null,
              n,
              l,
              c,
              u
            ));
          else {
            if (l != null) {
              var s = l.$$typeof;
              if (s === jt) {
                n.tag = 11, n = Qu(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              } else if (s === qe) {
                n.tag = 14, n = Yy(
                  null,
                  n,
                  l,
                  c,
                  u
                );
                break e;
              }
            }
            throw n = Ne(l) || l, Error(C(306, n, ""));
          }
        }
        return n;
      case 0:
        return Bn(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 1:
        return c = n.type, s = fo(
          c,
          n.pendingProps
        ), hc(
          l,
          n,
          c,
          s,
          u
        );
      case 3:
        e: {
          if (Pe(
            n,
            n.stateNode.containerInfo
          ), l === null) throw Error(C(387));
          c = n.pendingProps;
          var r = n.memoizedState;
          s = r.element, Gs(l, n), rc(n, c, null, u);
          var m = n.memoizedState;
          if (c = m.cache, qu(n, gl, c), c !== r.cache && jd(
            n,
            [gl],
            u,
            !0
          ), ws(), c = m.element, r.isDehydrated)
            if (r = {
              element: c,
              isDehydrated: !1,
              cache: m.cache
            }, n.updateQueue.baseState = r, n.memoizedState = r, n.flags & 256) {
              n = Ly(
                l,
                n,
                c,
                u
              );
              break e;
            } else if (c !== s) {
              s = gn(
                Error(C(424)),
                n
              ), xs(s), n = Ly(
                l,
                n,
                c,
                u
              );
              break e;
            } else
              for (l = n.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, It = ia(l.firstChild), Ul = n, dt = !0, Nu = null, Wa = !0, u = dy(
                n,
                null,
                c,
                u
              ), n.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
          else {
            if (lu(), c === s) {
              n = Zu(
                l,
                n,
                u
              );
              break e;
            }
            Ll(l, n, c, u);
          }
          n = n.child;
        }
        return n;
      case 26:
        return nr(l, n), l === null ? (u = Gi(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = u : dt || (u = n.type, l = n.pendingProps, c = Mr(
          _e.current
        ).createElement(u), c[Cl] = n, c[al] = l, ua(c, u, l), Hl(c), n.stateNode = c) : n.memoizedState = Gi(
          n.type,
          l.memoizedProps,
          n.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return qt(n), l === null && dt && (c = n.stateNode = su(
          n.type,
          n.pendingProps,
          _e.current
        ), Ul = n, Wa = !0, s = It, ei(n.type) ? (xf = s, It = ia(c.firstChild)) : It = s), Ll(
          l,
          n,
          n.pendingProps.children,
          u
        ), nr(l, n), l === null && (n.flags |= 4194304), n.child;
      case 5:
        return l === null && dt && ((s = c = It) && (c = Ap(
          c,
          n.type,
          n.pendingProps,
          Wa
        ), c !== null ? (n.stateNode = c, Ul = n, It = ia(c.firstChild), Wa = !1, s = !0) : s = !1), s || Ca(n)), qt(n), s = n.type, r = n.pendingProps, m = l !== null ? l.memoizedProps : null, c = r.children, qh(s, r) ? c = null : m !== null && qh(s, m) && (n.flags |= 32), n.memoizedState !== null && (s = Mi(
          l,
          n,
          Pg,
          null,
          null,
          u
        ), Tl._currentValue = s), nr(l, n), Ll(l, n, c, u), n.child;
      case 6:
        return l === null && dt && ((l = u = It) && (u = nS(
          u,
          n.pendingProps,
          Wa
        ), u !== null ? (n.stateNode = u, Ul = n, It = null, l = !0) : l = !1), l || Ca(n)), null;
      case 13:
        return Gn(l, n, u);
      case 4:
        return Pe(
          n,
          n.stateNode.containerInfo
        ), c = n.pendingProps, l === null ? n.child = eo(
          n,
          null,
          c,
          u
        ) : Ll(l, n, c, u), n.child;
      case 11:
        return Qu(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 7:
        return Ll(
          l,
          n,
          n.pendingProps,
          u
        ), n.child;
      case 8:
        return Ll(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 12:
        return Ll(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 10:
        return c = n.pendingProps, qu(n, n.type, c.value), Ll(l, n, c.children, u), n.child;
      case 9:
        return s = n.type._context, c = n.pendingProps.children, Bu(n), s = Re(s), c = c(s), n.flags |= 1, Ll(l, n, c, u), n.child;
      case 14:
        return Yy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 15:
        return Gy(
          l,
          n,
          n.type,
          n.pendingProps,
          u
        );
      case 19:
        return Qy(l, n, u);
      case 31:
        return en(l, n, u);
      case 22:
        return wy(
          l,
          n,
          u,
          n.pendingProps
        );
      case 24:
        return Bu(n), c = Re(gl), l === null ? (s = Ai(), s === null && (s = Zt, r = Bd(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= u), s = r), n.memoizedState = { parent: c, cache: s }, wd(n), qu(n, gl, s)) : ((l.lanes & u) !== 0 && (Gs(l, n), rc(n, null, null, u), ws()), s = l.memoizedState, r = n.memoizedState, s.parent !== c ? (s = { parent: c, cache: c }, n.memoizedState = s, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = s), qu(n, gl, c)) : (c = r.cache, qu(n, gl, c), c !== s.cache && jd(
          n,
          [gl],
          u,
          !0
        ))), Ll(
          l,
          n,
          n.pendingProps.children,
          u
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(C(156, n.tag));
  }
  function Ju(l) {
    l.flags |= 4;
  }
  function dh(l, n, u, c, s) {
    if ((n = (l.mode & 32) !== 0) && (n = !1), n) {
      if (l.flags |= 16777216, (s & 335544128) === s)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Af()) l.flags |= 8192;
        else
          throw fc = af, qs;
    } else l.flags &= -16777217;
  }
  function f0(l, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Qh(n))
      if (Af()) l.flags |= 8192;
      else
        throw fc = af, qs;
  }
  function or(l, n) {
    n !== null && (l.flags |= 4), l.flags & 16384 && (n = l.tag !== 22 ? Ve() : 536870912, l.lanes |= n, vc |= n);
  }
  function na(l, n) {
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
  function Pt(l) {
    var n = l.alternate !== null && l.alternate.child === l.child, u = 0, c = 0;
    if (n)
      for (var s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags & 65011712, c |= s.flags & 65011712, s.return = l, s = s.sibling;
    else
      for (s = l.child; s !== null; )
        u |= s.lanes | s.childLanes, c |= s.subtreeFlags, c |= s.flags, s.return = l, s = s.sibling;
    return l.subtreeFlags |= c, l.childLanes = u, n;
  }
  function hl(l, n, u) {
    var c = n.pendingProps;
    switch (ef(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Pt(n), null;
      case 1:
        return Pt(n), null;
      case 3:
        return u = n.stateNode, c = null, l !== null && (c = l.memoizedState.cache), n.memoizedState.cache !== c && (n.flags |= 2048), pa(gl), rt(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ju(n) ? Ju(n) : l === null || l.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, Nd())), Pt(n), null;
      case 26:
        var s = n.type, r = n.memoizedState;
        return l === null ? (Ju(n), r !== null ? (Pt(n), f0(n, r)) : (Pt(n), dh(
          n,
          s,
          null,
          c,
          u
        ))) : r ? r !== l.memoizedState ? (Ju(n), Pt(n), f0(n, r)) : (Pt(n), n.flags &= -16777217) : (l = l.memoizedProps, l !== c && Ju(n), Pt(n), dh(
          n,
          s,
          l,
          c,
          u
        )), null;
      case 27:
        if (Ga(n), u = _e.current, s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ju(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return Pt(n), null;
          }
          l = le.current, ju(n) ? tf(n) : (l = su(s, c, u), n.stateNode = l, Ju(n));
        }
        return Pt(n), null;
      case 5:
        if (Ga(n), s = n.type, l !== null && n.stateNode != null)
          l.memoizedProps !== c && Ju(n);
        else {
          if (!c) {
            if (n.stateNode === null)
              throw Error(C(166));
            return Pt(n), null;
          }
          if (r = le.current, ju(n))
            tf(n);
          else {
            var m = Mr(
              _e.current
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
            r[Cl] = n, r[al] = c;
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
            e: switch (ua(r, s, c), s) {
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
            c && Ju(n);
          }
        }
        return Pt(n), dh(
          n,
          n.type,
          l === null ? null : l.memoizedProps,
          n.pendingProps,
          u
        ), null;
      case 6:
        if (l && n.stateNode != null)
          l.memoizedProps !== c && Ju(n);
        else {
          if (typeof c != "string" && n.stateNode === null)
            throw Error(C(166));
          if (l = _e.current, ju(n)) {
            if (l = n.stateNode, u = n.memoizedProps, c = null, s = Ul, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  c = s.memoizedProps;
              }
            l[Cl] = n, l = !!(l.nodeValue === u || c !== null && c.suppressHydrationWarning === !0 || gp(l.nodeValue, u)), l || Ca(n, !0);
          } else
            l = Mr(l).createTextNode(
              c
            ), l[Cl] = n, n.stateNode = l;
        }
        return Pt(n), null;
      case 31:
        if (u = n.memoizedState, l === null || l.memoizedState !== null) {
          if (c = ju(n), u !== null) {
            if (l === null) {
              if (!c) throw Error(C(318));
              if (l = n.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(C(557));
              l[Cl] = n;
            } else
              lu(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Pt(n), l = !1;
          } else
            u = Nd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return n.flags & 256 ? (Sa(n), n) : (Sa(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(C(558));
        }
        return Pt(n), null;
      case 13:
        if (c = n.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (s = ju(n), c !== null && c.dehydrated !== null) {
            if (l === null) {
              if (!s) throw Error(C(318));
              if (s = n.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(C(317));
              s[Cl] = n;
            } else
              lu(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            Pt(n), s = !1;
          } else
            s = Nd(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return n.flags & 256 ? (Sa(n), n) : (Sa(n), null);
        }
        return Sa(n), (n.flags & 128) !== 0 ? (n.lanes = u, n) : (u = c !== null, l = l !== null && l.memoizedState !== null, u && (c = n.child, s = null, c.alternate !== null && c.alternate.memoizedState !== null && c.alternate.memoizedState.cachePool !== null && (s = c.alternate.memoizedState.cachePool.pool), r = null, c.memoizedState !== null && c.memoizedState.cachePool !== null && (r = c.memoizedState.cachePool.pool), r !== s && (c.flags |= 2048)), u !== l && u && (n.child.flags |= 8192), or(n, n.updateQueue), Pt(n), null);
      case 4:
        return rt(), l === null && yp(n.stateNode.containerInfo), Pt(n), null;
      case 10:
        return pa(n.type), Pt(n), null;
      case 19:
        if (E(rl), c = n.memoizedState, c === null) return Pt(n), null;
        if (s = (n.flags & 128) !== 0, r = c.rendering, r === null)
          if (s) na(c, !1);
          else {
            if (cl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = n.child; l !== null; ) {
                if (r = lo(l), r !== null) {
                  for (n.flags |= 128, na(c, !1), l = r.updateQueue, n.updateQueue = l, or(n, l), n.subtreeFlags = 0, l = u, u = n.child; u !== null; )
                    Iv(u, l), u = u.sibling;
                  return J(
                    rl,
                    rl.current & 1 | 2
                  ), dt && xu(n, c.treeForkCount), n.child;
                }
                l = l.sibling;
              }
            c.tail !== null && We() > vr && (n.flags |= 128, s = !0, na(c, !1), n.lanes = 4194304);
          }
        else {
          if (!s)
            if (l = lo(r), l !== null) {
              if (n.flags |= 128, s = !0, l = l.updateQueue, n.updateQueue = l, or(n, l), na(c, !0), c.tail === null && c.tailMode === "hidden" && !r.alternate && !dt)
                return Pt(n), null;
            } else
              2 * We() - c.renderingStartTime > vr && u !== 536870912 && (n.flags |= 128, s = !0, na(c, !1), n.lanes = 4194304);
          c.isBackwards ? (r.sibling = n.child, n.child = r) : (l = c.last, l !== null ? l.sibling = r : n.child = r, c.last = r);
        }
        return c.tail !== null ? (l = c.tail, c.rendering = l, c.tail = l.sibling, c.renderingStartTime = We(), l.sibling = null, u = rl.current, J(
          rl,
          s ? u & 1 | 2 : u & 1
        ), dt && xu(n, c.treeForkCount), l) : (Pt(n), null);
      case 22:
      case 23:
        return Sa(n), Vs(), c = n.memoizedState !== null, l !== null ? l.memoizedState !== null !== c && (n.flags |= 8192) : c && (n.flags |= 8192), c ? (u & 536870912) !== 0 && (n.flags & 128) === 0 && (Pt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Pt(n), u = n.updateQueue, u !== null && or(n, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), c = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (c = n.memoizedState.cachePool.pool), c !== u && (n.flags |= 2048), l !== null && E(Fa), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), n.memoizedState.cache !== u && (n.flags |= 2048), pa(gl), Pt(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(C(156, n.tag));
  }
  function s0(l, n) {
    switch (ef(n), n.tag) {
      case 1:
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 3:
        return pa(gl), rt(), l = n.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (n.flags = l & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Ga(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Sa(n), n.alternate === null)
            throw Error(C(340));
          lu();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 13:
        if (Sa(n), l = n.memoizedState, l !== null && l.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(C(340));
          lu();
        }
        return l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 19:
        return E(rl), null;
      case 4:
        return rt(), null;
      case 10:
        return pa(n.type), null;
      case 22:
      case 23:
        return Sa(n), Vs(), l !== null && E(Fa), l = n.flags, l & 65536 ? (n.flags = l & -65537 | 128, n) : null;
      case 24:
        return pa(gl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Zy(l, n) {
    switch (ef(n), n.tag) {
      case 3:
        pa(gl), rt();
        break;
      case 26:
      case 27:
      case 5:
        Ga(n);
        break;
      case 4:
        rt();
        break;
      case 31:
        n.memoizedState !== null && Sa(n);
        break;
      case 13:
        Sa(n);
        break;
      case 19:
        E(rl);
        break;
      case 10:
        pa(n.type);
        break;
      case 22:
      case 23:
        Sa(n), Vs(), l !== null && E(Fa);
        break;
      case 24:
        pa(gl);
    }
  }
  function fr(l, n) {
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
      Xt(n, n.return, g);
    }
  }
  function xa(l, n, u) {
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
              } catch (K) {
                Xt(
                  s,
                  A,
                  K
                );
              }
            }
          }
          c = c.next;
        } while (c !== r);
      }
    } catch (K) {
      Xt(n, n.return, K);
    }
  }
  function ro(l) {
    var n = l.updateQueue;
    if (n !== null) {
      var u = l.stateNode;
      try {
        Vd(n, u);
      } catch (c) {
        Xt(l, l.return, c);
      }
    }
  }
  function hh(l, n, u) {
    u.props = fo(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (c) {
      Xt(l, n, c);
    }
  }
  function cu(l, n) {
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
      Xt(l, n, s);
    }
  }
  function Na(l, n) {
    var u = l.ref, c = l.refCleanup;
    if (u !== null)
      if (typeof c == "function")
        try {
          c();
        } catch (s) {
          Xt(l, n, s);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (s) {
          Xt(l, n, s);
        }
      else u.current = null;
  }
  function Jy(l) {
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
      Xt(l, l.return, s);
    }
  }
  function mh(l, n, u) {
    try {
      var c = l.stateNode;
      aS(c, l.type, u, n), c[al] = n;
    } catch (s) {
      Xt(l, l.return, s);
    }
  }
  function Ky(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && ei(l.type) || l.tag === 4;
  }
  function yh(l) {
    e: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Ky(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && ei(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue e;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sf(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, n) : (n = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, n.appendChild(l), u = u._reactRootContainer, u != null || n.onclick !== null || (n.onclick = Il));
    else if (c !== 4 && (c === 27 && ei(l.type) && (u = l.stateNode, n = null), l = l.child, l !== null))
      for (Sf(l, n, u), l = l.sibling; l !== null; )
        Sf(l, n, u), l = l.sibling;
  }
  function ho(l, n, u) {
    var c = l.tag;
    if (c === 5 || c === 6)
      l = l.stateNode, n ? u.insertBefore(l, n) : u.appendChild(l);
    else if (c !== 4 && (c === 27 && ei(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (ho(l, n, u), l = l.sibling; l !== null; )
        ho(l, n, u), l = l.sibling;
  }
  function ph(l) {
    var n = l.stateNode, u = l.memoizedProps;
    try {
      for (var c = l.type, s = n.attributes; s.length; )
        n.removeAttributeNode(s[0]);
      ua(n, c, u), n[Cl] = l, n[al] = u;
    } catch (r) {
      Xt(l, l.return, r);
    }
  }
  var Ku = !1, xl = !1, $y = !1, ky = typeof WeakSet == "function" ? WeakSet : Set, jl = null;
  function eS(l, n) {
    if (l = l.containerInfo, Dr = wi, l = Jc(l), Ei(l)) {
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
            var m = 0, g = -1, A = -1, j = 0, K = 0, F = l, B = null;
            t: for (; ; ) {
              for (var Q; F !== u || s !== 0 && F.nodeType !== 3 || (g = m + s), F !== r || c !== 0 && F.nodeType !== 3 || (A = m + c), F.nodeType === 3 && (m += F.nodeValue.length), (Q = F.firstChild) !== null; )
                B = F, F = Q;
              for (; ; ) {
                if (F === l) break t;
                if (B === u && ++j === s && (g = m), B === r && ++K === c && (A = m), (Q = F.nextSibling) !== null) break;
                F = B, B = F.parentNode;
              }
              F = Q;
            }
            u = g === -1 || A === -1 ? null : { start: g, end: A };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (jh = { focusedElem: l, selectionRange: u }, wi = !1, jl = n; jl !== null; )
      if (n = jl, l = n.child, (n.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = n, jl = l;
      else
        for (; jl !== null; ) {
          switch (n = jl, r = n.alternate, l = n.flags, n.tag) {
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
                  var ve = fo(
                    u.type,
                    s
                  );
                  l = c.getSnapshotBeforeUpdate(
                    ve,
                    r
                  ), c.__reactInternalSnapshotBeforeUpdate = l;
                } catch (Ue) {
                  Xt(
                    u,
                    u.return,
                    Ue
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = n.stateNode.containerInfo, u = l.nodeType, u === 9)
                  El(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      El(l);
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
              if ((l & 1024) !== 0) throw Error(C(163));
          }
          if (l = n.sibling, l !== null) {
            l.return = n.return, jl = l;
            break;
          }
          jl = n.return;
        }
  }
  function mo(l, n, u) {
    var c = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        ku(l, u), c & 4 && fr(5, u);
        break;
      case 1:
        if (ku(l, u), c & 4)
          if (l = u.stateNode, n === null)
            try {
              l.componentDidMount();
            } catch (m) {
              Xt(u, u.return, m);
            }
          else {
            var s = fo(
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
              Xt(
                u,
                u.return,
                m
              );
            }
          }
        c & 64 && ro(u), c & 512 && cu(u, u.return);
        break;
      case 3:
        if (ku(l, u), c & 64 && (l = u.updateQueue, l !== null)) {
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
            Vd(l, n);
          } catch (m) {
            Xt(u, u.return, m);
          }
        }
        break;
      case 27:
        n === null && c & 4 && ph(u);
      case 26:
      case 5:
        ku(l, u), n === null && c & 4 && Jy(u), c & 512 && cu(u, u.return);
        break;
      case 12:
        ku(l, u);
        break;
      case 31:
        ku(l, u), c & 4 && Fy(l, u);
        break;
      case 13:
        ku(l, u), c & 4 && r0(l, u), c & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = lS.bind(
          null,
          u
        ), Uf(l, u))));
        break;
      case 22:
        if (c = u.memoizedState !== null || Ku, !c) {
          n = n !== null && n.memoizedState !== null || xl, s = Ku;
          var r = xl;
          Ku = c, (xl = n) && !r ? Ni(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : ku(l, u), Ku = s, xl = r;
        }
        break;
      case 30:
        break;
      default:
        ku(l, u);
    }
  }
  function sr(l) {
    var n = l.alternate;
    n !== null && (l.alternate = null, sr(n)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (n = l.stateNode, n !== null && $i(n)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var nl = null, ba = !1;
  function $u(l, n, u) {
    for (u = u.child; u !== null; )
      Wy(l, n, u), u = u.sibling;
  }
  function Wy(l, n, u) {
    if (yl && typeof yl.onCommitFiberUnmount == "function")
      try {
        yl.onCommitFiberUnmount(rn, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        xl || Na(u, n), $u(
          l,
          n,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        xl || Na(u, n);
        var c = nl, s = ba;
        ei(u.type) && (nl = u.stateNode, ba = !1), $u(
          l,
          n,
          u
        ), Bi(u.stateNode), nl = c, ba = s;
        break;
      case 5:
        xl || Na(u, n);
      case 6:
        if (c = nl, s = ba, nl = null, $u(
          l,
          n,
          u
        ), nl = c, ba = s, nl !== null)
          if (ba)
            try {
              (nl.nodeType === 9 ? nl.body : nl.nodeName === "HTML" ? nl.ownerDocument.body : nl).removeChild(u.stateNode);
            } catch (r) {
              Xt(
                u,
                n,
                r
              );
            }
          else
            try {
              nl.removeChild(u.stateNode);
            } catch (r) {
              Xt(
                u,
                n,
                r
              );
            }
        break;
      case 18:
        nl !== null && (ba ? (l = nl, Cr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), qf(l)) : Cr(nl, u.stateNode));
        break;
      case 4:
        c = nl, s = ba, nl = u.stateNode.containerInfo, ba = !0, $u(
          l,
          n,
          u
        ), nl = c, ba = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xa(2, u, n), xl || xa(4, u, n), $u(
          l,
          n,
          u
        );
        break;
      case 1:
        xl || (Na(u, n), c = u.stateNode, typeof c.componentWillUnmount == "function" && hh(
          u,
          n,
          c
        )), $u(
          l,
          n,
          u
        );
        break;
      case 21:
        $u(
          l,
          n,
          u
        );
        break;
      case 22:
        xl = (c = xl) || u.memoizedState !== null, $u(
          l,
          n,
          u
        ), xl = c;
        break;
      default:
        $u(
          l,
          n,
          u
        );
    }
  }
  function Fy(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        qf(l);
      } catch (u) {
        Xt(n, n.return, u);
      }
    }
  }
  function r0(l, n) {
    if (n.memoizedState === null && (l = n.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        qf(l);
      } catch (u) {
        Xt(n, n.return, u);
      }
  }
  function d0(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var n = l.stateNode;
        return n === null && (n = l.stateNode = new ky()), n;
      case 22:
        return l = l.stateNode, n = l._retryCache, n === null && (n = l._retryCache = new ky()), n;
      default:
        throw Error(C(435, l.tag));
    }
  }
  function yc(l, n) {
    var u = d0(l);
    n.forEach(function(c) {
      if (!u.has(c)) {
        u.add(c);
        var s = Tn.bind(null, l, c);
        c.then(s, s);
      }
    });
  }
  function Ha(l, n) {
    var u = n.deletions;
    if (u !== null)
      for (var c = 0; c < u.length; c++) {
        var s = u[c], r = l, m = n, g = m;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (ei(g.type)) {
                nl = g.stateNode, ba = !1;
                break e;
              }
              break;
            case 5:
              nl = g.stateNode, ba = !1;
              break e;
            case 3:
            case 4:
              nl = g.stateNode.containerInfo, ba = !0;
              break e;
          }
          g = g.return;
        }
        if (nl === null) throw Error(C(160));
        Wy(r, m, s), nl = null, ba = !1, r = s.alternate, r !== null && (r.return = null), s.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Ct(n, l), n = n.sibling;
  }
  var wn = null;
  function Ct(l, n) {
    var u = l.alternate, c = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ha(n, l), Ea(l), c & 4 && (xa(3, l, l.return), fr(3, l), xa(5, l, l.return));
        break;
      case 1:
        Ha(n, l), Ea(l), c & 512 && (xl || u === null || Na(u, u.return)), c & 64 && Ku && (l = l.updateQueue, l !== null && (c = l.callbacks, c !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? c : u.concat(c))));
        break;
      case 26:
        var s = wn;
        if (Ha(n, l), Ea(l), c & 512 && (xl || u === null || Na(u, u.return)), c & 4) {
          var r = u !== null ? u.memoizedState : null;
          if (c = l.memoizedState, u === null)
            if (c === null)
              if (l.stateNode === null) {
                e: {
                  c = l.type, u = l.memoizedProps, s = s.ownerDocument || s;
                  t: switch (c) {
                    case "title":
                      r = s.getElementsByTagName("title")[0], (!r || r[Lo] || r[Cl] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(c), s.head.insertBefore(
                        r,
                        s.querySelector("head > title")
                      )), ua(r, c, u), r[Cl] = l, Hl(r), c = r;
                      break e;
                    case "link":
                      var m = Lh(
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
                      r = s.createElement(c), ua(r, c, u), s.head.appendChild(r);
                      break;
                    case "meta":
                      if (m = Lh(
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
                      r = s.createElement(c), ua(r, c, u), s.head.appendChild(r);
                      break;
                    default:
                      throw Error(C(468, c));
                  }
                  r[Cl] = l, Hl(r), c = r;
                }
                l.stateNode = c;
              } else
                Mp(
                  s,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = Dp(
                s,
                c,
                l.memoizedProps
              );
          else
            r !== c ? (r === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : r.count--, c === null ? Mp(
              s,
              l.type,
              l.stateNode
            ) : Dp(
              s,
              c,
              l.memoizedProps
            )) : c === null && l.stateNode !== null && mh(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ha(n, l), Ea(l), c & 512 && (xl || u === null || Na(u, u.return)), u !== null && c & 4 && mh(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ha(n, l), Ea(l), c & 512 && (xl || u === null || Na(u, u.return)), l.flags & 32) {
          s = l.stateNode;
          try {
            Yc(s, "");
          } catch (ve) {
            Xt(l, l.return, ve);
          }
        }
        c & 4 && l.stateNode != null && (s = l.memoizedProps, mh(
          l,
          s,
          u !== null ? u.memoizedProps : s
        )), c & 1024 && ($y = !0);
        break;
      case 6:
        if (Ha(n, l), Ea(l), c & 4) {
          if (l.stateNode === null)
            throw Error(C(162));
          c = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = c;
          } catch (ve) {
            Xt(l, l.return, ve);
          }
        }
        break;
      case 3:
        if (Hr = null, s = wn, wn = To(n.containerInfo), Ha(n, l), wn = s, Ea(l), c & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            qf(n.containerInfo);
          } catch (ve) {
            Xt(l, l.return, ve);
          }
        $y && ($y = !1, h0(l));
        break;
      case 4:
        c = wn, wn = To(
          l.stateNode.containerInfo
        ), Ha(n, l), Ea(l), wn = c;
        break;
      case 12:
        Ha(n, l), Ea(l);
        break;
      case 31:
        Ha(n, l), Ea(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, yc(l, c)));
        break;
      case 13:
        Ha(n, l), Ea(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (pr = We()), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, yc(l, c)));
        break;
      case 22:
        s = l.memoizedState !== null;
        var A = u !== null && u.memoizedState !== null, j = Ku, K = xl;
        if (Ku = j || s, xl = K || A, Ha(n, l), xl = K, Ku = j, Ea(l), c & 8192)
          e: for (n = l.stateNode, n._visibility = s ? n._visibility & -2 : n._visibility | 1, s && (u === null || A || Ku || xl || yo(l)), u = null, n = l; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (u === null) {
                A = u = n;
                try {
                  if (r = A.stateNode, s)
                    m = r.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none";
                  else {
                    g = A.stateNode;
                    var F = A.memoizedProps.style, B = F != null && F.hasOwnProperty("display") ? F.display : null;
                    g.style.display = B == null || typeof B == "boolean" ? "" : ("" + B).trim();
                  }
                } catch (ve) {
                  Xt(A, A.return, ve);
                }
              }
            } else if (n.tag === 6) {
              if (u === null) {
                A = n;
                try {
                  A.stateNode.nodeValue = s ? "" : A.memoizedProps;
                } catch (ve) {
                  Xt(A, A.return, ve);
                }
              }
            } else if (n.tag === 18) {
              if (u === null) {
                A = n;
                try {
                  var Q = A.stateNode;
                  s ? Tp(Q, !0) : Tp(A.stateNode, !1);
                } catch (ve) {
                  Xt(A, A.return, ve);
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
        c & 4 && (c = l.updateQueue, c !== null && (u = c.retryQueue, u !== null && (c.retryQueue = null, yc(l, u))));
        break;
      case 19:
        Ha(n, l), Ea(l), c & 4 && (c = l.updateQueue, c !== null && (l.updateQueue = null, yc(l, c)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ha(n, l), Ea(l);
    }
  }
  function Ea(l) {
    var n = l.flags;
    if (n & 2) {
      try {
        for (var u, c = l.return; c !== null; ) {
          if (Ky(c)) {
            u = c;
            break;
          }
          c = c.return;
        }
        if (u == null) throw Error(C(160));
        switch (u.tag) {
          case 27:
            var s = u.stateNode, r = yh(l);
            ho(l, r, s);
            break;
          case 5:
            var m = u.stateNode;
            u.flags & 32 && (Yc(m, ""), u.flags &= -33);
            var g = yh(l);
            ho(l, g, m);
            break;
          case 3:
          case 4:
            var A = u.stateNode.containerInfo, j = yh(l);
            Sf(
              l,
              j,
              A
            );
            break;
          default:
            throw Error(C(161));
        }
      } catch (K) {
        Xt(l, l.return, K);
      }
      l.flags &= -3;
    }
    n & 4096 && (l.flags &= -4097);
  }
  function h0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var n = l;
        h0(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), l = l.sibling;
      }
  }
  function ku(l, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        mo(l, n.alternate, n), n = n.sibling;
  }
  function yo(l) {
    for (l = l.child; l !== null; ) {
      var n = l;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xa(4, n, n.return), yo(n);
          break;
        case 1:
          Na(n, n.return);
          var u = n.stateNode;
          typeof u.componentWillUnmount == "function" && hh(
            n,
            n.return,
            u
          ), yo(n);
          break;
        case 27:
          Bi(n.stateNode);
        case 26:
        case 5:
          Na(n, n.return), yo(n);
          break;
        case 22:
          n.memoizedState === null && yo(n);
          break;
        case 30:
          yo(n);
          break;
        default:
          yo(n);
      }
      l = l.sibling;
    }
  }
  function Ni(l, n, u) {
    for (u = u && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var c = n.alternate, s = l, r = n, m = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          Ni(
            s,
            r,
            u
          ), fr(4, r);
          break;
        case 1:
          if (Ni(
            s,
            r,
            u
          ), c = r, s = c.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (j) {
              Xt(c, c.return, j);
            }
          if (c = r, s = c.updateQueue, s !== null) {
            var g = c.stateNode;
            try {
              var A = s.shared.hiddenCallbacks;
              if (A !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < A.length; s++)
                  to(A[s], g);
            } catch (j) {
              Xt(c, c.return, j);
            }
          }
          u && m & 64 && ro(r), cu(r, r.return);
          break;
        case 27:
          ph(r);
        case 26:
        case 5:
          Ni(
            s,
            r,
            u
          ), u && c === null && m & 4 && Jy(r), cu(r, r.return);
          break;
        case 12:
          Ni(
            s,
            r,
            u
          );
          break;
        case 31:
          Ni(
            s,
            r,
            u
          ), u && m & 4 && Fy(s, r);
          break;
        case 13:
          Ni(
            s,
            r,
            u
          ), u && m & 4 && r0(s, r);
          break;
        case 22:
          r.memoizedState === null && Ni(
            s,
            r,
            u
          ), cu(r, r.return);
          break;
        case 30:
          break;
        default:
          Ni(
            s,
            r,
            u
          );
      }
      n = n.sibling;
    }
  }
  function rr(l, n) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Ic(u));
  }
  function vh(l, n) {
    l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Ic(l));
  }
  function Xn(l, n, u, c) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Iy(
          l,
          n,
          u,
          c
        ), n = n.sibling;
  }
  function Iy(l, n, u, c) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Xn(
          l,
          n,
          u,
          c
        ), s & 2048 && fr(9, n);
        break;
      case 1:
        Xn(
          l,
          n,
          u,
          c
        );
        break;
      case 3:
        Xn(
          l,
          n,
          u,
          c
        ), s & 2048 && (l = null, n.alternate !== null && (l = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== l && (n.refCount++, l != null && Ic(l)));
        break;
      case 12:
        if (s & 2048) {
          Xn(
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
            Xt(n, n.return, A);
          }
        } else
          Xn(
            l,
            n,
            u,
            c
          );
        break;
      case 31:
        Xn(
          l,
          n,
          u,
          c
        );
        break;
      case 13:
        Xn(
          l,
          n,
          u,
          c
        );
        break;
      case 23:
        break;
      case 22:
        r = n.stateNode, m = n.alternate, n.memoizedState !== null ? r._visibility & 2 ? Xn(
          l,
          n,
          u,
          c
        ) : dr(l, n) : r._visibility & 2 ? Xn(
          l,
          n,
          u,
          c
        ) : (r._visibility |= 2, Wu(
          l,
          n,
          u,
          c,
          (n.subtreeFlags & 10256) !== 0 || !1
        )), s & 2048 && rr(m, n);
        break;
      case 24:
        Xn(
          l,
          n,
          u,
          c
        ), s & 2048 && vh(n.alternate, n);
        break;
      default:
        Xn(
          l,
          n,
          u,
          c
        );
    }
  }
  function Wu(l, n, u, c, s) {
    for (s = s && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var r = l, m = n, g = u, A = c, j = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          Wu(
            r,
            m,
            g,
            A,
            s
          ), fr(8, m);
          break;
        case 23:
          break;
        case 22:
          var K = m.stateNode;
          m.memoizedState !== null ? K._visibility & 2 ? Wu(
            r,
            m,
            g,
            A,
            s
          ) : dr(
            r,
            m
          ) : (K._visibility |= 2, Wu(
            r,
            m,
            g,
            A,
            s
          )), s && j & 2048 && rr(
            m.alternate,
            m
          );
          break;
        case 24:
          Wu(
            r,
            m,
            g,
            A,
            s
          ), s && j & 2048 && vh(m.alternate, m);
          break;
        default:
          Wu(
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
  function dr(l, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var u = l, c = n, s = c.flags;
        switch (c.tag) {
          case 22:
            dr(u, c), s & 2048 && rr(
              c.alternate,
              c
            );
            break;
          case 24:
            dr(u, c), s & 2048 && vh(c.alternate, c);
            break;
          default:
            dr(u, c);
        }
        n = n.sibling;
      }
  }
  var hr = 8192;
  function ja(l, n, u) {
    if (l.subtreeFlags & hr)
      for (l = l.child; l !== null; )
        bf(
          l,
          n,
          u
        ), l = l.sibling;
  }
  function bf(l, n, u) {
    switch (l.tag) {
      case 26:
        ja(
          l,
          n,
          u
        ), l.flags & hr && l.memoizedState !== null && An(
          u,
          wn,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        ja(
          l,
          n,
          u
        );
        break;
      case 3:
      case 4:
        var c = wn;
        wn = To(l.stateNode.containerInfo), ja(
          l,
          n,
          u
        ), wn = c;
        break;
      case 22:
        l.memoizedState === null && (c = l.alternate, c !== null && c.memoizedState !== null ? (c = hr, hr = 16777216, ja(
          l,
          n,
          u
        ), hr = c) : ja(
          l,
          n,
          u
        ));
        break;
      default:
        ja(
          l,
          n,
          u
        );
    }
  }
  function m0(l) {
    var n = l.alternate;
    if (n !== null && (l = n.child, l !== null)) {
      n.child = null;
      do
        n = l.sibling, l.sibling = null, l = n;
      while (l !== null);
    }
  }
  function po(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          jl = c, ep(
            c,
            l
          );
        }
      m0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Py(l), l = l.sibling;
  }
  function Py(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        po(l), l.flags & 2048 && xa(9, l, l.return);
        break;
      case 3:
        po(l);
        break;
      case 12:
        po(l);
        break;
      case 22:
        var n = l.stateNode;
        l.memoizedState !== null && n._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (n._visibility &= -3, mr(l)) : po(l);
        break;
      default:
        po(l);
    }
  }
  function mr(l) {
    var n = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (n !== null)
        for (var u = 0; u < n.length; u++) {
          var c = n[u];
          jl = c, ep(
            c,
            l
          );
        }
      m0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (n = l, n.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, n, n.return), mr(n);
          break;
        case 22:
          u = n.stateNode, u._visibility & 2 && (u._visibility &= -3, mr(n));
          break;
        default:
          mr(n);
      }
      l = l.sibling;
    }
  }
  function ep(l, n) {
    for (; jl !== null; ) {
      var u = jl;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          xa(8, u, n);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var c = u.memoizedState.cachePool.pool;
            c != null && c.refCount++;
          }
          break;
        case 24:
          Ic(u.memoizedState.cache);
      }
      if (c = u.child, c !== null) c.return = u, jl = c;
      else
        e: for (u = l; jl !== null; ) {
          c = jl;
          var s = c.sibling, r = c.return;
          if (sr(c), c === u) {
            jl = null;
            break e;
          }
          if (s !== null) {
            s.return = r, jl = s;
            break e;
          }
          jl = r;
        }
    }
  }
  var tp = {
    getCacheForType: function(l) {
      var n = Re(gl), u = n.data.get(l);
      return u === void 0 && (u = l(), n.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return Re(gl).controller.signal;
    }
  }, y0 = typeof WeakMap == "function" ? WeakMap : Map, Ot = 0, Zt = null, it = null, ht = 0, Ut = 0, tn = null, Le = !1, pc = !1, yr = !1, Fu = 0, cl = 0, Vn = 0, Iu = 0, lp = 0, ln = 0, vc = 0, bl = null, an = null, Ln = !1, pr = 0, Hi = 0, vr = 1 / 0, Nt = null, Pu = null, vt = 0, gc = null, vo = null, ou = 0, gh = 0, nn = null, ap = null, go = 0, Sh = null;
  function qa() {
    return (Ot & 2) !== 0 && ht !== 0 ? ht & -ht : G.T !== null ? So() : Uv();
  }
  function np() {
    if (ln === 0)
      if ((ht & 536870912) === 0 || dt) {
        var l = ee;
        ee <<= 1, (ee & 3932160) === 0 && (ee = 262144), ln = l;
      } else ln = 536870912;
    return l = ga.current, l !== null && (l.flags |= 32), ln;
  }
  function un(l, n, u) {
    (l === Zt && (Ut === 2 || Ut === 9) || l.cancelPendingCommit !== null) && (Ef(l, 0), ji(
      l,
      ht,
      ln,
      !1
    )), Xa(l, u), ((Ot & 2) === 0 || l !== Zt) && (l === Zt && ((Ot & 2) === 0 && (Iu |= u), cl === 4 && ji(
      l,
      ht,
      ln,
      !1
    )), fu(l));
  }
  function up(l, n, u) {
    if ((Ot & 6) !== 0) throw Error(C(327));
    var c = !u && (n & 127) === 0 && (n & l.expiredLanes) === 0 || Se(l, n), s = c ? tS(l, n) : ip(l, n, !0), r = c;
    do {
      if (s === 0) {
        pc && !c && ji(l, n, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, r && !bh(u)) {
          s = ip(l, n, !1), r = !1;
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
              s = bl;
              var A = g.current.memoizedState.isDehydrated;
              if (A && (Ef(g, m).flags |= 256), m = ip(
                g,
                m,
                !1
              ), m !== 2) {
                if (yr && !A) {
                  g.errorRecoveryDisabledLanes |= r, Iu |= r, s = 4;
                  break e;
                }
                r = an, an = s, r !== null && (an === null ? an = r : an.push.apply(
                  an,
                  r
                ));
              }
              s = m;
            }
            if (r = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Ef(l, 0), ji(l, n, 0, !0);
          break;
        }
        e: {
          switch (c = l, r = s, r) {
            case 0:
            case 1:
              throw Error(C(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              ji(
                c,
                n,
                ln,
                !Le
              );
              break e;
            case 2:
              an = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(C(329));
          }
          if ((n & 62914560) === n && (s = pr + 300 - We(), 10 < s)) {
            if (ji(
              c,
              n,
              ln,
              !Le
            ), Ye(c, 0, !0) !== 0) break e;
            ou = n, c.timeoutHandle = j0(
              p0.bind(
                null,
                c,
                u,
                an,
                Nt,
                Ln,
                n,
                ln,
                Iu,
                vc,
                Le,
                r,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break e;
          }
          p0(
            c,
            u,
            an,
            Nt,
            Ln,
            n,
            ln,
            Iu,
            vc,
            Le,
            r,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    fu(l);
  }
  function p0(l, n, u, c, s, r, m, g, A, j, K, F, B, Q) {
    if (l.timeoutHandle = -1, F = n.subtreeFlags, F & 8192 || (F & 16785408) === 16785408) {
      F = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Il
      }, bf(
        n,
        r,
        F
      );
      var ve = (r & 62914560) === r ? pr - We() : (r & 4194048) === r ? Hi - We() : 0;
      if (ve = ru(
        F,
        ve
      ), ve !== null) {
        ou = r, l.cancelPendingCommit = ve(
          T0.bind(
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
            K,
            F,
            null,
            B,
            Q
          )
        ), ji(l, r, m, !j);
        return;
      }
    }
    T0(
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
  function bh(l) {
    for (var n = l; ; ) {
      var u = n.tag;
      if ((u === 0 || u === 11 || u === 15) && n.flags & 16384 && (u = n.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var c = 0; c < u.length; c++) {
          var s = u[c], r = s.getSnapshot;
          s = s.value;
          try {
            if (!Za(r(), s)) return !1;
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
  function ji(l, n, u, c) {
    n &= ~lp, n &= ~Iu, l.suspendedLanes |= n, l.pingedLanes &= ~n, c && (l.warmLanes |= n), c = l.expirationTimes;
    for (var s = n; 0 < s; ) {
      var r = 31 - Xl(s), m = 1 << r;
      c[r] = -1, s &= ~m;
    }
    u !== 0 && Uc(l, u, n);
  }
  function gr() {
    return (Ot & 6) === 0 ? (Tr(0), !1) : !0;
  }
  function Sr() {
    if (it !== null) {
      if (Ut === 0)
        var l = it.return;
      else
        l = it, au = nc = null, no(l), sc = null, Pc = 0, l = it;
      for (; l !== null; )
        Zy(l.alternate, l), l = l.return;
      it = null;
    }
  }
  function Ef(l, n) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Bh(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), ou = 0, Sr(), Zt = l, it = u = vn(l.current, null), ht = n, Ut = 0, tn = null, Le = !1, pc = Se(l, n), yr = !1, vc = ln = lp = Iu = Vn = cl = 0, an = bl = null, Ln = !1, (n & 8) !== 0 && (n |= n & 32);
    var c = l.entangledLanes;
    if (c !== 0)
      for (l = l.entanglements, c &= n; 0 < c; ) {
        var s = 31 - Xl(c), r = 1 << s;
        n |= l[s], c &= ~r;
      }
    return Fu = n, yn(), u;
  }
  function Tf(l, n) {
    Je = null, G.H = yf, n === nu || n === cc ? (n = fy(), Ut = 3) : n === qs ? (n = fy(), Ut = 4) : Ut = n === By ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, tn = n, it === null && (cl = 1, pf(
      l,
      gn(n, l.current)
    ));
  }
  function Af() {
    var l = ga.current;
    return l === null ? !0 : (ht & 4194048) === ht ? Pa === null : (ht & 62914560) === ht || (ht & 536870912) !== 0 ? l === Pa : !1;
  }
  function v0() {
    var l = G.H;
    return G.H = yf, l === null ? yf : l;
  }
  function g0() {
    var l = G.A;
    return G.A = tp, l;
  }
  function Eh() {
    cl = 4, Le || (ht & 4194048) !== ht && ga.current !== null || (pc = !0), (Vn & 134217727) === 0 && (Iu & 134217727) === 0 || Zt === null || ji(
      Zt,
      ht,
      ln,
      !1
    );
  }
  function ip(l, n, u) {
    var c = Ot;
    Ot |= 2;
    var s = v0(), r = g0();
    (Zt !== l || ht !== n) && (Nt = null, Ef(l, n)), n = !1;
    var m = cl;
    e: do
      try {
        if (Ut !== 0 && it !== null) {
          var g = it, A = tn;
          switch (Ut) {
            case 8:
              Sr(), m = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              ga.current === null && (n = !0);
              var j = Ut;
              if (Ut = 0, tn = null, zf(l, g, A, j), u && pc) {
                m = 0;
                break e;
              }
              break;
            default:
              j = Ut, Ut = 0, tn = null, zf(l, g, A, j);
          }
        }
        S0(), m = cl;
        break;
      } catch (K) {
        Tf(l, K);
      }
    while (!0);
    return n && l.shellSuspendCounter++, au = nc = null, Ot = c, G.H = s, G.A = r, it === null && (Zt = null, ht = 0, yn()), m;
  }
  function S0() {
    for (; it !== null; ) qi(it);
  }
  function tS(l, n) {
    var u = Ot;
    Ot |= 2;
    var c = v0(), s = g0();
    Zt !== l || ht !== n ? (Nt = null, vr = We() + 500, Ef(l, n)) : pc = Se(
      l,
      n
    );
    e: do
      try {
        if (Ut !== 0 && it !== null) {
          n = it;
          var r = tn;
          t: switch (Ut) {
            case 1:
              Ut = 0, tn = null, zf(l, n, r, 1);
              break;
            case 2:
            case 9:
              if (Bs(r)) {
                Ut = 0, tn = null, E0(n);
                break;
              }
              n = function() {
                Ut !== 2 && Ut !== 9 || Zt !== l || (Ut = 7), fu(l);
              }, r.then(n, n);
              break e;
            case 3:
              Ut = 7;
              break e;
            case 4:
              Ut = 5;
              break e;
            case 7:
              Bs(r) ? (Ut = 0, tn = null, E0(n)) : (Ut = 0, tn = null, zf(l, n, r, 7));
              break;
            case 5:
              var m = null;
              switch (it.tag) {
                case 26:
                  m = it.memoizedState;
                case 5:
                case 27:
                  var g = it;
                  if (m ? Qh(m) : g.stateNode.complete) {
                    Ut = 0, tn = null;
                    var A = g.sibling;
                    if (A !== null) it = A;
                    else {
                      var j = g.return;
                      j !== null ? (it = j, br(j)) : it = null;
                    }
                    break t;
                  }
              }
              Ut = 0, tn = null, zf(l, n, r, 5);
              break;
            case 6:
              Ut = 0, tn = null, zf(l, n, r, 6);
              break;
            case 8:
              Sr(), cl = 6;
              break e;
            default:
              throw Error(C(462));
          }
        }
        b0();
        break;
      } catch (K) {
        Tf(l, K);
      }
    while (!0);
    return au = nc = null, G.H = c, G.A = s, Ot = u, it !== null ? 0 : (Zt = null, ht = 0, yn(), cl);
  }
  function b0() {
    for (; it !== null && !wa(); )
      qi(it);
  }
  function qi(l) {
    var n = cr(l.alternate, l, Fu);
    l.memoizedProps = l.pendingProps, n === null ? br(l) : it = n;
  }
  function E0(l) {
    var n = l, u = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Vy(
          u,
          n,
          n.pendingProps,
          n.type,
          void 0,
          ht
        );
        break;
      case 11:
        n = Vy(
          u,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          ht
        );
        break;
      case 5:
        no(n);
      default:
        Zy(u, n), n = it = Iv(n, Fu), n = cr(u, n, Fu);
    }
    l.memoizedProps = l.pendingProps, n === null ? br(l) : it = n;
  }
  function zf(l, n, u, c) {
    au = nc = null, no(n), sc = null, Pc = 0;
    var s = n.return;
    try {
      if (c0(
        l,
        s,
        n,
        u,
        ht
      )) {
        cl = 1, pf(
          l,
          gn(u, l.current)
        ), it = null;
        return;
      }
    } catch (r) {
      if (s !== null) throw it = s, r;
      cl = 1, pf(
        l,
        gn(u, l.current)
      ), it = null;
      return;
    }
    n.flags & 32768 ? (dt || c === 1 ? l = !0 : pc || (ht & 536870912) !== 0 ? l = !1 : (Le = l = !0, (c === 2 || c === 9 || c === 3 || c === 6) && (c = ga.current, c !== null && c.tag === 13 && (c.flags |= 16384))), cp(n, l)) : br(n);
  }
  function br(l) {
    var n = l;
    do {
      if ((n.flags & 32768) !== 0) {
        cp(
          n,
          Le
        );
        return;
      }
      l = n.return;
      var u = hl(
        n.alternate,
        n,
        Fu
      );
      if (u !== null) {
        it = u;
        return;
      }
      if (n = n.sibling, n !== null) {
        it = n;
        return;
      }
      it = n = l;
    } while (n !== null);
    cl === 0 && (cl = 5);
  }
  function cp(l, n) {
    do {
      var u = s0(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, it = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !n && (l = l.sibling, l !== null)) {
        it = l;
        return;
      }
      it = l = u;
    } while (l !== null);
    cl = 6, it = null;
  }
  function T0(l, n, u, c, s, r, m, g, A) {
    l.cancelPendingCommit = null;
    do
      Th();
    while (vt !== 0);
    if ((Ot & 6) !== 0) throw Error(C(327));
    if (n !== null) {
      if (n === l.current) throw Error(C(177));
      if (r = n.lanes | n.childLanes, r |= Ma, sd(
        l,
        u,
        r,
        m,
        g,
        A
      ), l === Zt && (it = Zt = null, ht = 0), vo = n, gc = l, ou = u, gh = r, nn = s, ap = c, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, D0(Wt, function() {
        return Ah(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), c = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || c) {
        c = G.T, G.T = null, s = q.p, q.p = 2, m = Ot, Ot |= 4;
        try {
          eS(l, n, u);
        } finally {
          Ot = m, q.p = s, G.T = c;
        }
      }
      vt = 1, A0(), z0(), O0();
    }
  }
  function A0() {
    if (vt === 1) {
      vt = 0;
      var l = gc, n = vo, u = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || u) {
        u = G.T, G.T = null;
        var c = q.p;
        q.p = 2;
        var s = Ot;
        Ot |= 4;
        try {
          Ct(n, l);
          var r = jh, m = Jc(l.containerInfo), g = r.focusedElem, A = r.selectionRange;
          if (m !== g && g && g.ownerDocument && ty(
            g.ownerDocument.documentElement,
            g
          )) {
            if (A !== null && Ei(g)) {
              var j = A.start, K = A.end;
              if (K === void 0 && (K = j), "selectionStart" in g)
                g.selectionStart = j, g.selectionEnd = Math.min(
                  K,
                  g.value.length
                );
              else {
                var F = g.ownerDocument || document, B = F && F.defaultView || window;
                if (B.getSelection) {
                  var Q = B.getSelection(), ve = g.textContent.length, Ue = Math.min(A.start, ve), Jt = A.end === void 0 ? Ue : Math.min(A.end, ve);
                  !Q.extend && Ue > Jt && (m = Jt, Jt = Ue, Ue = m);
                  var U = ey(
                    g,
                    Ue
                  ), _ = ey(
                    g,
                    Jt
                  );
                  if (U && _ && (Q.rangeCount !== 1 || Q.anchorNode !== U.node || Q.anchorOffset !== U.offset || Q.focusNode !== _.node || Q.focusOffset !== _.offset)) {
                    var H = F.createRange();
                    H.setStart(U.node, U.offset), Q.removeAllRanges(), Ue > Jt ? (Q.addRange(H), Q.extend(_.node, _.offset)) : (H.setEnd(_.node, _.offset), Q.addRange(H));
                  }
                }
              }
            }
            for (F = [], Q = g; Q = Q.parentNode; )
              Q.nodeType === 1 && F.push({
                element: Q,
                left: Q.scrollLeft,
                top: Q.scrollTop
              });
            for (typeof g.focus == "function" && g.focus(), g = 0; g < F.length; g++) {
              var W = F[g];
              W.element.scrollLeft = W.left, W.element.scrollTop = W.top;
            }
          }
          wi = !!Dr, jh = Dr = null;
        } finally {
          Ot = s, q.p = c, G.T = u;
        }
      }
      l.current = n, vt = 2;
    }
  }
  function z0() {
    if (vt === 2) {
      vt = 0;
      var l = gc, n = vo, u = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || u) {
        u = G.T, G.T = null;
        var c = q.p;
        q.p = 2;
        var s = Ot;
        Ot |= 4;
        try {
          mo(l, n.alternate, n);
        } finally {
          Ot = s, q.p = c, G.T = u;
        }
      }
      vt = 3;
    }
  }
  function O0() {
    if (vt === 4 || vt === 3) {
      vt = 0, Lt();
      var l = gc, n = vo, u = ou, c = ap;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? vt = 5 : (vt = 0, vo = gc = null, R0(l, l.pendingLanes));
      var s = l.pendingLanes;
      if (s === 0 && (Pu = null), rd(u), n = n.stateNode, yl && typeof yl.onCommitFiberRoot == "function")
        try {
          yl.onCommitFiberRoot(
            rn,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (c !== null) {
        n = G.T, s = q.p, q.p = 2, G.T = null;
        try {
          for (var r = l.onRecoverableError, m = 0; m < c.length; m++) {
            var g = c[m];
            r(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          G.T = n, q.p = s;
        }
      }
      (ou & 3) !== 0 && Th(), fu(l), s = l.pendingLanes, (u & 261930) !== 0 && (s & 42) !== 0 ? l === Sh ? go++ : (go = 0, Sh = l) : go = 0, Tr(0);
    }
  }
  function R0(l, n) {
    (l.pooledCacheLanes &= n) === 0 && (n = l.pooledCache, n != null && (l.pooledCache = null, Ic(n)));
  }
  function Th() {
    return A0(), z0(), O0(), Ah();
  }
  function Ah() {
    if (vt !== 5) return !1;
    var l = gc, n = gh;
    gh = 0;
    var u = rd(ou), c = G.T, s = q.p;
    try {
      q.p = 32 > u ? 32 : u, G.T = null, u = nn, nn = null;
      var r = gc, m = ou;
      if (vt = 0, vo = gc = null, ou = 0, (Ot & 6) !== 0) throw Error(C(331));
      var g = Ot;
      if (Ot |= 4, Py(r.current), Iy(
        r,
        r.current,
        m,
        u
      ), Ot = g, Tr(0, !1), yl && typeof yl.onPostCommitFiberRoot == "function")
        try {
          yl.onPostCommitFiberRoot(rn, r);
        } catch {
        }
      return !0;
    } finally {
      q.p = s, G.T = c, R0(l, n);
    }
  }
  function _0(l, n, u) {
    n = gn(u, n), n = vf(l.stateNode, n, 2), l = Ri(l, n, 2), l !== null && (Xa(l, 2), fu(l));
  }
  function Xt(l, n, u) {
    if (l.tag === 3)
      _0(l, l, u);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          _0(
            n,
            l,
            u
          );
          break;
        } else if (n.tag === 1) {
          var c = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Pu === null || !Pu.has(c))) {
            l = gn(u, l), u = i0(2), c = Ri(n, u, 2), c !== null && (qy(
              u,
              c,
              n,
              l
            ), Xa(c, 2), fu(c));
            break;
          }
        }
        n = n.return;
      }
  }
  function zh(l, n, u) {
    var c = l.pingCache;
    if (c === null) {
      c = l.pingCache = new y0();
      var s = /* @__PURE__ */ new Set();
      c.set(n, s);
    } else
      s = c.get(n), s === void 0 && (s = /* @__PURE__ */ new Set(), c.set(n, s));
    s.has(u) || (yr = !0, s.add(u), l = op.bind(null, l, n, u), n.then(l, l));
  }
  function op(l, n, u) {
    var c = l.pingCache;
    c !== null && c.delete(n), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, Zt === l && (ht & u) === u && (cl === 4 || cl === 3 && (ht & 62914560) === ht && 300 > We() - pr ? (Ot & 2) === 0 && Ef(l, 0) : lp |= u, vc === ht && (vc = 0)), fu(l);
  }
  function Oh(l, n) {
    n === 0 && (n = Ve()), l = ya(l, n), l !== null && (Xa(l, n), fu(l));
  }
  function lS(l) {
    var n = l.memoizedState, u = 0;
    n !== null && (u = n.retryLane), Oh(l, u);
  }
  function Tn(l, n) {
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
        throw Error(C(314));
    }
    c !== null && c.delete(n), Oh(l, u);
  }
  function D0(l, n) {
    return Ol(l, n);
  }
  var Er = null, Sc = null, Rh = !1, _h = !1, fp = !1, bc = 0;
  function fu(l) {
    l !== Sc && l.next === null && (Sc === null ? Er = Sc = l : Sc = Sc.next = l), _h = !0, Rh || (Rh = !0, Of());
  }
  function Tr(l, n) {
    if (!fp && _h) {
      fp = !0;
      do
        for (var u = !1, c = Er; c !== null; ) {
          if (l !== 0) {
            var s = c.pendingLanes;
            if (s === 0) var r = 0;
            else {
              var m = c.suspendedLanes, g = c.pingedLanes;
              r = (1 << 31 - Xl(42 | l) + 1) - 1, r &= s & ~(m & ~g), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
            }
            r !== 0 && (u = !0, Or(c, r));
          } else
            r = ht, r = Ye(
              c,
              c === Zt ? r : 0,
              c.cancelPendingCommit !== null || c.timeoutHandle !== -1
            ), (r & 3) === 0 || Se(c, r) || (u = !0, Or(c, r));
          c = c.next;
        }
      while (u);
      fp = !1;
    }
  }
  function Ar() {
    zr();
  }
  function zr() {
    _h = Rh = !1;
    var l = 0;
    bc !== 0 && H0() && (l = bc);
    for (var n = We(), u = null, c = Er; c !== null; ) {
      var s = c.next, r = sp(c, n);
      r === 0 ? (c.next = null, u === null ? Er = s : u.next = s, s === null && (Sc = u)) : (u = c, (l !== 0 || (r & 3) !== 0) && (_h = !0)), c = s;
    }
    vt !== 0 && vt !== 5 || Tr(l), bc !== 0 && (bc = 0);
  }
  function sp(l, n) {
    for (var u = l.suspendedLanes, c = l.pingedLanes, s = l.expirationTimes, r = l.pendingLanes & -62914561; 0 < r; ) {
      var m = 31 - Xl(r), g = 1 << m, A = s[m];
      A === -1 ? ((g & u) === 0 || (g & c) !== 0) && (s[m] = pt(g, n)) : A <= n && (l.expiredLanes |= g), r &= ~g;
    }
    if (n = Zt, u = ht, u = Ye(
      l,
      l === n ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c = l.callbackNode, u === 0 || l === n && (Ut === 2 || Ut === 9) || l.cancelPendingCommit !== null)
      return c !== null && c !== null && re(c), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Se(l, u)) {
      if (n = u & -u, n === l.callbackPriority) return n;
      switch (c !== null && re(c), rd(u)) {
        case 2:
        case 8:
          u = da;
          break;
        case 32:
          u = Wt;
          break;
        case 268435456:
          u = Dc;
          break;
        default:
          u = Wt;
      }
      return c = rp.bind(null, l), u = Ol(u, c), l.callbackPriority = n, l.callbackNode = u, n;
    }
    return c !== null && c !== null && re(c), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function rp(l, n) {
    if (vt !== 0 && vt !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (Th() && l.callbackNode !== u)
      return null;
    var c = ht;
    return c = Ye(
      l,
      l === Zt ? c : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), c === 0 ? null : (up(l, c, n), sp(l, We()), l.callbackNode != null && l.callbackNode === u ? rp.bind(null, l) : null);
  }
  function Or(l, n) {
    if (Th()) return null;
    up(l, n, !0);
  }
  function Of() {
    Cf(function() {
      (Ot & 6) !== 0 ? Ol(
        In,
        Ar
      ) : zr();
    });
  }
  function So() {
    if (bc === 0) {
      var l = uc;
      l === 0 && (l = M, M <<= 1, (M & 261888) === 0 && (M = 256)), bc = l;
    }
    return bc;
  }
  function dp(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : ki("" + l);
  }
  function M0(l, n) {
    var u = n.ownerDocument.createElement("input");
    return u.name = n.name, u.value = n.value, l.id && u.setAttribute("form", l.id), n.parentNode.insertBefore(u, n), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function Rf(l, n, u, c, s) {
    if (n === "submit" && u && u.stateNode === s) {
      var r = dp(
        (s[al] || null).action
      ), m = c.submitter;
      m && (n = (n = m[al] || null) ? dp(n.formAction) : m.getAttribute("formAction"), n !== null && (r = n, m = null));
      var g = new vs(
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
                if (bc !== 0) {
                  var A = m ? M0(s, m) : new FormData(s);
                  ih(
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
                typeof r == "function" && (g.preventDefault(), A = m ? M0(s, m) : new FormData(s), ih(
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
  for (var bo = 0; bo < eu.length; bo++) {
    var Dh = eu[bo], Mh = Dh.toLowerCase(), hp = Dh[0].toUpperCase() + Dh.slice(1);
    Ja(
      Mh,
      "on" + hp
    );
  }
  Ja(Ft, "onAnimationEnd"), Ja(zs, "onAnimationIteration"), Ja(ay, "onAnimationStart"), Ja("dblclick", "onDoubleClick"), Ja("focusin", "onFocus"), Ja("focusout", "onBlur"), Ja(ny, "onTransitionRun"), Ja(Kc, "onTransitionStart"), Ja(Os, "onTransitionCancel"), Ja(Pn, "onTransitionEnd"), Bc("onMouseEnter", ["mouseout", "mouseover"]), Bc("onMouseLeave", ["mouseout", "mouseover"]), Bc("onPointerEnter", ["pointerout", "pointerover"]), Bc("onPointerLeave", ["pointerout", "pointerover"]), dn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), dn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), dn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), dn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), dn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), dn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Eo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), C0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Eo)
  );
  function mp(l, n) {
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
            } catch (K) {
              ac(K);
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
            } catch (K) {
              ac(K);
            }
            s.currentTarget = null, r = A;
          }
      }
    }
  }
  function ot(l, n) {
    var u = n[cs];
    u === void 0 && (u = n[cs] = /* @__PURE__ */ new Set());
    var c = l + "__bubble";
    u.has(c) || (Rr(n, l, 2, !1), u.add(c));
  }
  function Ch(l, n, u) {
    var c = 0;
    n && (c |= 4), Rr(
      u,
      l,
      c,
      n
    );
  }
  var Uh = "_reactListening" + Math.random().toString(36).slice(2);
  function yp(l) {
    if (!l[Uh]) {
      l[Uh] = !0, La.forEach(function(u) {
        u !== "selectionchange" && (C0.has(u) || Ch(u, !1, l), Ch(u, !0, l));
      });
      var n = l.nodeType === 9 ? l : l.ownerDocument;
      n === null || n[Uh] || (n[Uh] = !0, Ch("selectionchange", !1, n));
    }
  }
  function Rr(l, n, u, c) {
    switch (qr(n)) {
      case 2:
        var s = Ta;
        break;
      case 8:
        s = li;
        break;
      default:
        s = Kn;
    }
    u = s.bind(
      null,
      n,
      u,
      l
    ), s = void 0, !Xm || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (s = !0), c ? s !== void 0 ? l.addEventListener(n, u, {
      capture: !0,
      passive: s
    }) : l.addEventListener(n, u, !0) : s !== void 0 ? l.addEventListener(n, u, {
      passive: s
    }) : l.addEventListener(n, u, !1);
  }
  function _f(l, n, u, c, s) {
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
            if (m = Nc(g), m === null) return;
            if (A = m.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              c = r = m;
              continue e;
            }
            g = g.parentNode;
          }
        }
        c = c.return;
      }
    ys(function() {
      var j = r, K = pd(u), F = [];
      e: {
        var B = Fv.get(l);
        if (B !== void 0) {
          var Q = vs, ve = l;
          switch (l) {
            case "keypress":
              if (ps(u) === 0) break e;
            case "keydown":
            case "keyup":
              Q = Td;
              break;
            case "focusin":
              ve = "focus", Q = Ed;
              break;
            case "focusout":
              ve = "blur", Q = Ed;
              break;
            case "beforeblur":
            case "afterblur":
              Q = Ed;
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
              Q = Yv;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Gv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = kg;
              break;
            case Ft:
            case zs:
            case ay:
              Q = Zm;
              break;
            case Pn:
              Q = Zv;
              break;
            case "scroll":
            case "scrollend":
              Q = Bv;
              break;
            case "wheel":
              Q = Km;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Xc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = zd;
              break;
            case "toggle":
            case "beforetoggle":
              Q = Jv;
          }
          var Ue = (n & 4) !== 0, Jt = !Ue && (l === "scroll" || l === "scrollend"), U = Ue ? B !== null ? B + "Capture" : null : B;
          Ue = [];
          for (var _ = j, H; _ !== null; ) {
            var W = _;
            if (H = W.stateNode, W = W.tag, W !== 5 && W !== 26 && W !== 27 || H === null || U === null || (W = $o(_, U), W != null && Ue.push(
              _r(_, W, H)
            )), Jt) break;
            _ = _.return;
          }
          0 < Ue.length && (B = new Q(
            B,
            ve,
            null,
            u,
            K
          ), F.push({ event: B, listeners: Ue }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (B = l === "mouseover" || l === "pointerover", Q = l === "mouseout" || l === "pointerout", B && u !== ms && (ve = u.relatedTarget || u.fromElement) && (Nc(ve) || ve[xc]))
            break e;
          if ((Q || B) && (B = K.window === K ? K : (B = K.ownerDocument) ? B.defaultView || B.parentWindow : window, Q ? (ve = u.relatedTarget || u.toElement, Q = j, ve = ve ? Nc(ve) : null, ve !== null && (Jt = pe(ve), Ue = ve.tag, ve !== Jt || Ue !== 5 && Ue !== 27 && Ue !== 6) && (ve = null)) : (Q = null, ve = j), Q !== ve)) {
            if (Ue = Yv, W = "onMouseLeave", U = "onMouseEnter", _ = "mouse", (l === "pointerout" || l === "pointerover") && (Ue = zd, W = "onPointerLeave", U = "onPointerEnter", _ = "pointer"), Jt = Q == null ? B : Qo(Q), H = ve == null ? B : Qo(ve), B = new Ue(
              W,
              _ + "leave",
              Q,
              u,
              K
            ), B.target = Jt, B.relatedTarget = H, W = null, Nc(K) === j && (Ue = new Ue(
              U,
              _ + "enter",
              ve,
              u,
              K
            ), Ue.target = H, Ue.relatedTarget = Jt, W = Ue), Jt = W, Q && ve)
              t: {
                for (Ue = U0, U = Q, _ = ve, H = 0, W = U; W; W = Ue(W))
                  H++;
                W = 0;
                for (var Oe = _; Oe; Oe = Ue(Oe))
                  W++;
                for (; 0 < H - W; )
                  U = Ue(U), H--;
                for (; 0 < W - H; )
                  _ = Ue(_), W--;
                for (; H--; ) {
                  if (U === _ || _ !== null && U === _.alternate) {
                    Ue = U;
                    break t;
                  }
                  U = Ue(U), _ = Ue(_);
                }
                Ue = null;
              }
            else Ue = null;
            Q !== null && pp(
              F,
              B,
              Q,
              Ue,
              !1
            ), ve !== null && Jt !== null && pp(
              F,
              Jt,
              ve,
              Ue,
              !0
            );
          }
        }
        e: {
          if (B = j ? Qo(j) : window, Q = B.nodeName && B.nodeName.toLowerCase(), Q === "select" || Q === "input" && B.type === "file")
            var Rt = Dd;
          else if (Rd(B))
            if (Fm)
              Rt = Ii;
            else {
              Rt = kv;
              var be = Pm;
            }
          else
            Q = B.nodeName, !Q || Q.toLowerCase() !== "input" || B.type !== "checkbox" && B.type !== "radio" ? j && Gm(j.elementType) && (Rt = Dd) : Rt = Wv;
          if (Rt && (Rt = Rt(l, j))) {
            Ou(
              F,
              Rt,
              u,
              K
            );
            break e;
          }
          be && be(l, B, j), l === "focusout" && j && B.type === "number" && j.memoizedProps.value != null && Jo(B, "number", B.value);
        }
        switch (be = j ? Qo(j) : window, l) {
          case "focusin":
            (Rd(be) || be.contentEditable === "true") && (Du = be, Ts = j, ec = null);
            break;
          case "focusout":
            ec = Ts = Du = null;
            break;
          case "mousedown":
            Mu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Mu = !1, Cu(F, u, K);
            break;
          case "selectionchange":
            if (ly) break;
          case "keydown":
          case "keyup":
            Cu(F, u, K);
        }
        var Ke;
        if (Wo)
          e: {
            switch (l) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break e;
              case "compositionend":
                nt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break e;
            }
            nt = void 0;
          }
        else
          Lc ? Fi(l, u) && (nt = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (nt = "onCompositionStart");
        nt && (Pl && u.locale !== "ko" && (Lc || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && Lc && (Ke = qv()) : (Si = K, vd = "value" in Si ? Si.value : Si.textContent, Lc = !0)), be = xh(j, nt), 0 < be.length && (nt = new Nn(
          nt,
          l,
          null,
          u,
          K
        ), F.push({ event: nt, listeners: be }), Ke ? nt.data = Ke : (Ke = Od(u), Ke !== null && (nt.data = Ke)))), (Ke = km ? Kv(l, u) : $v(l, u)) && (nt = xh(j, "onBeforeInput"), 0 < nt.length && (be = new Nn(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          K
        ), F.push({
          event: be,
          listeners: nt
        }), be.data = Ke)), Rf(
          F,
          l,
          j,
          u,
          K
        );
      }
      mp(F, n);
    });
  }
  function _r(l, n, u) {
    return {
      instance: l,
      listener: n,
      currentTarget: u
    };
  }
  function xh(l, n) {
    for (var u = n + "Capture", c = []; l !== null; ) {
      var s = l, r = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = $o(l, u), s != null && c.unshift(
        _r(l, s, r)
      ), s = $o(l, n), s != null && c.push(
        _r(l, s, r)
      )), l.tag === 3) return c;
      l = l.return;
    }
    return [];
  }
  function U0(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function pp(l, n, u, c, s) {
    for (var r = n._reactName, m = []; u !== null && u !== c; ) {
      var g = u, A = g.alternate, j = g.stateNode;
      if (g = g.tag, A !== null && A === c) break;
      g !== 5 && g !== 26 && g !== 27 || j === null || (A = j, s ? (j = $o(u, r), j != null && m.unshift(
        _r(u, j, A)
      )) : s || (j = $o(u, r), j != null && m.push(
        _r(u, j, A)
      ))), u = u.return;
    }
    m.length !== 0 && l.push({ event: n, listeners: m });
  }
  var vp = /\r\n?/g, x0 = /\u0000|\uFFFD/g;
  function Nh(l) {
    return (typeof l == "string" ? l : "" + l).replace(vp, `
`).replace(x0, "");
  }
  function gp(l, n) {
    return n = Nh(n), Nh(l) === n;
  }
  function Vt(l, n, u, c, s, r) {
    switch (u) {
      case "children":
        typeof c == "string" ? n === "body" || n === "textarea" && c === "" || Yc(l, c) : (typeof c == "number" || typeof c == "bigint") && n !== "body" && Yc(l, "" + c);
        break;
      case "className":
        Zo(l, "class", c);
        break;
      case "tabIndex":
        Zo(l, "tabindex", c);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zo(l, u, c);
        break;
      case "style":
        jv(l, c, r);
        break;
      case "data":
        if (n !== "object") {
          Zo(l, "data", c);
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
        c = ki("" + c), l.setAttribute(u, c);
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
        c = ki("" + c), l.setAttribute(u, c);
        break;
      case "onClick":
        c != null && (l.onclick = Il);
        break;
      case "onScroll":
        c != null && ot("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ot("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(C(60));
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
        u = ki("" + c), l.setAttributeNS(
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
        ot("beforetoggle", l), ot("toggle", l), vi(l, "popover", c);
        break;
      case "xlinkActuate":
        gi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          c
        );
        break;
      case "xlinkArcrole":
        gi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          c
        );
        break;
      case "xlinkRole":
        gi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          c
        );
        break;
      case "xlinkShow":
        gi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          c
        );
        break;
      case "xlinkTitle":
        gi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          c
        );
        break;
      case "xlinkType":
        gi(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          c
        );
        break;
      case "xmlBase":
        gi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          c
        );
        break;
      case "xmlLang":
        gi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          c
        );
        break;
      case "xmlSpace":
        gi(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          c
        );
        break;
      case "is":
        vi(l, "is", c);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Jg.get(u) || u, vi(l, u, c));
    }
  }
  function Sp(l, n, u, c, s, r) {
    switch (u) {
      case "style":
        jv(l, c, r);
        break;
      case "dangerouslySetInnerHTML":
        if (c != null) {
          if (typeof c != "object" || !("__html" in c))
            throw Error(C(61));
          if (u = c.__html, u != null) {
            if (s.children != null) throw Error(C(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof c == "string" ? Yc(l, c) : (typeof c == "number" || typeof c == "bigint") && Yc(l, "" + c);
        break;
      case "onScroll":
        c != null && ot("scroll", l);
        break;
      case "onScrollEnd":
        c != null && ot("scrollend", l);
        break;
      case "onClick":
        c != null && (l.onclick = Il);
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
        if (!qc.hasOwnProperty(u))
          e: {
            if (u[0] === "o" && u[1] === "n" && (s = u.endsWith("Capture"), n = u.slice(2, s ? u.length - 7 : void 0), r = l[al] || null, r = r != null ? r[u] : null, typeof r == "function" && l.removeEventListener(n, r, s), typeof c == "function")) {
              typeof r != "function" && r !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(n, c, s);
              break e;
            }
            u in l ? l[u] = c : c === !0 ? l.setAttribute(u, "") : vi(l, u, c);
          }
    }
  }
  function ua(l, n, u) {
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
        ot("error", l), ot("load", l);
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
                  throw Error(C(137, n));
                default:
                  Vt(l, n, r, m, u, null);
              }
          }
        s && Vt(l, n, "srcSet", u.srcSet, u, null), c && Vt(l, n, "src", u.src, u, null);
        return;
      case "input":
        ot("invalid", l);
        var g = r = m = s = null, A = null, j = null;
        for (c in u)
          if (u.hasOwnProperty(c)) {
            var K = u[c];
            if (K != null)
              switch (c) {
                case "name":
                  s = K;
                  break;
                case "type":
                  m = K;
                  break;
                case "checked":
                  A = K;
                  break;
                case "defaultChecked":
                  j = K;
                  break;
                case "value":
                  r = K;
                  break;
                case "defaultValue":
                  g = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null)
                    throw Error(C(137, n));
                  break;
                default:
                  Vt(l, n, c, K, u, null);
              }
          }
        yd(
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
        ot("invalid", l), c = m = r = null;
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
        n = r, u = m, l.multiple = !!c, n != null ? Su(l, !!c, n, !1) : u != null && Su(l, !!c, u, !0);
        return;
      case "textarea":
        ot("invalid", l), r = s = c = null;
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
                if (g != null) throw Error(C(91));
                break;
              default:
                Vt(l, n, m, g, u, null);
            }
        Bm(l, c, s, r);
        return;
      case "option":
        for (A in u)
          u.hasOwnProperty(A) && (c = u[A], c != null) && (A === "selected" ? l.selected = c && typeof c != "function" && typeof c != "symbol" : Vt(l, n, A, c, u, null));
        return;
      case "dialog":
        ot("beforetoggle", l), ot("toggle", l), ot("cancel", l), ot("close", l);
        break;
      case "iframe":
      case "object":
        ot("load", l);
        break;
      case "video":
      case "audio":
        for (c = 0; c < Eo.length; c++)
          ot(Eo[c], l);
        break;
      case "image":
        ot("error", l), ot("load", l);
        break;
      case "details":
        ot("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        ot("error", l), ot("load", l);
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
                throw Error(C(137, n));
              default:
                Vt(l, n, j, c, u, null);
            }
        return;
      default:
        if (Gm(n)) {
          for (K in u)
            u.hasOwnProperty(K) && (c = u[K], c !== void 0 && Sp(
              l,
              n,
              K,
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
  function aS(l, n, u, c) {
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
        var s = null, r = null, m = null, g = null, A = null, j = null, K = null;
        for (Q in u) {
          var F = u[Q];
          if (u.hasOwnProperty(Q) && F != null)
            switch (Q) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = F;
              default:
                c.hasOwnProperty(Q) || Vt(l, n, Q, null, c, F);
            }
        }
        for (var B in c) {
          var Q = c[B];
          if (F = u[B], c.hasOwnProperty(B) && (Q != null || F != null))
            switch (B) {
              case "type":
                r = Q;
                break;
              case "name":
                s = Q;
                break;
              case "checked":
                j = Q;
                break;
              case "defaultChecked":
                K = Q;
                break;
              case "value":
                m = Q;
                break;
              case "defaultValue":
                g = Q;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (Q != null)
                  throw Error(C(137, n));
                break;
              default:
                Q !== F && Vt(
                  l,
                  n,
                  B,
                  Q,
                  c,
                  F
                );
            }
        }
        md(
          l,
          m,
          g,
          A,
          j,
          K,
          r,
          s
        );
        return;
      case "select":
        Q = m = g = B = null;
        for (r in u)
          if (A = u[r], u.hasOwnProperty(r) && A != null)
            switch (r) {
              case "value":
                break;
              case "multiple":
                Q = A;
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
        n = g, u = m, c = Q, B != null ? Su(l, !!u, B, !1) : !!c != !!u && (n != null ? Su(l, !!u, n, !0) : Su(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        Q = B = null;
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
                Q = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(C(91));
                break;
              default:
                s !== r && Vt(l, n, m, s, c, r);
            }
        Hv(l, B, Q);
        return;
      case "option":
        for (var ve in u)
          B = u[ve], u.hasOwnProperty(ve) && B != null && !c.hasOwnProperty(ve) && (ve === "selected" ? l.selected = !1 : Vt(
            l,
            n,
            ve,
            null,
            c,
            B
          ));
        for (A in c)
          B = c[A], Q = u[A], c.hasOwnProperty(A) && B !== Q && (B != null || Q != null) && (A === "selected" ? l.selected = B && typeof B != "function" && typeof B != "symbol" : Vt(
            l,
            n,
            A,
            B,
            c,
            Q
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
        for (var Ue in u)
          B = u[Ue], u.hasOwnProperty(Ue) && B != null && !c.hasOwnProperty(Ue) && Vt(l, n, Ue, null, c, B);
        for (j in c)
          if (B = c[j], Q = u[j], c.hasOwnProperty(j) && B !== Q && (B != null || Q != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(C(137, n));
                break;
              default:
                Vt(
                  l,
                  n,
                  j,
                  B,
                  c,
                  Q
                );
            }
        return;
      default:
        if (Gm(n)) {
          for (var Jt in u)
            B = u[Jt], u.hasOwnProperty(Jt) && B !== void 0 && !c.hasOwnProperty(Jt) && Sp(
              l,
              n,
              Jt,
              void 0,
              c,
              B
            );
          for (K in c)
            B = c[K], Q = u[K], !c.hasOwnProperty(K) || B === Q || B === void 0 && Q === void 0 || Sp(
              l,
              n,
              K,
              B,
              c,
              Q
            );
          return;
        }
    }
    for (var U in u)
      B = u[U], u.hasOwnProperty(U) && B != null && !c.hasOwnProperty(U) && Vt(l, n, U, null, c, B);
    for (F in c)
      B = c[F], Q = u[F], !c.hasOwnProperty(F) || B === Q || B == null && Q == null || Vt(l, n, F, B, c, Q);
  }
  function Hh(l) {
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
  function bp() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, n = 0, u = performance.getEntriesByType("resource"), c = 0; c < u.length; c++) {
        var s = u[c], r = s.transferSize, m = s.initiatorType, g = s.duration;
        if (r && g && Hh(m)) {
          for (m = 0, g = s.responseEnd, c += 1; c < u.length; c++) {
            var A = u[c], j = A.startTime;
            if (j > g) break;
            var K = A.transferSize, F = A.initiatorType;
            K && Hh(F) && (A = A.responseEnd, m += K * (A < g ? 1 : (g - j) / (A - j)));
          }
          if (--c, n += 8 * (r + m) / (s.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return n / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Dr = null, jh = null;
  function Mr(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Df(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function N0(l, n) {
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
  function qh(l, n) {
    return l === "textarea" || l === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Mf = null;
  function H0() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Mf ? !1 : (Mf = l, !0) : (Mf = null, !1);
  }
  var j0 = typeof setTimeout == "function" ? setTimeout : void 0, Bh = typeof clearTimeout == "function" ? clearTimeout : void 0, Ep = typeof Promise == "function" ? Promise : void 0, Cf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ep < "u" ? function(l) {
    return Ep.resolve(null).then(l).catch(q0);
  } : j0;
  function q0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function ei(l) {
    return l === "head";
  }
  function Cr(l, n) {
    var u = n, c = 0;
    do {
      var s = u.nextSibling;
      if (l.removeChild(u), s && s.nodeType === 8)
        if (u = s.data, u === "/$" || u === "/&") {
          if (c === 0) {
            l.removeChild(s), qf(n);
            return;
          }
          c--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          c++;
        else if (u === "html")
          Bi(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, Bi(u);
          for (var r = u.firstChild; r; ) {
            var m = r.nextSibling, g = r.nodeName;
            r[Lo] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && r.rel.toLowerCase() === "stylesheet" || u.removeChild(r), r = m;
          }
        } else
          u === "body" && Bi(l.ownerDocument.body);
      u = s;
    } while (u);
    qf(n);
  }
  function Tp(l, n) {
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
  function El(l) {
    var n = l.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var u = n;
      switch (n = n.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          El(u), $i(u);
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
  function Ap(l, n, u, c) {
    for (; l.nodeType === 1; ) {
      var s = u;
      if (l.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!c && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (c) {
        if (!l[Lo])
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
      if (l = ia(l.nextSibling), l === null) break;
    }
    return null;
  }
  function nS(l, n, u) {
    if (n === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ia(l.nextSibling), l === null)) return null;
    return l;
  }
  function Fe(l, n) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !n || (l = ia(l.nextSibling), l === null)) return null;
    return l;
  }
  function zp(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Qn(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Uf(l, n) {
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
  function ia(l) {
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
  var xf = null;
  function Yh(l) {
    l = l.nextSibling;
    for (var n = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (n === 0)
            return ia(l.nextSibling);
          n--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || n++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Gh(l) {
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
  function su(l, n, u) {
    switch (n = Mr(u), l) {
      case "html":
        if (l = n.documentElement, !l) throw Error(C(452));
        return l;
      case "head":
        if (l = n.head, !l) throw Error(C(453));
        return l;
      case "body":
        if (l = n.body, !l) throw Error(C(454));
        return l;
      default:
        throw Error(C(451));
    }
  }
  function Bi(l) {
    for (var n = l.attributes; n.length; )
      l.removeAttributeNode(n[0]);
    $i(l);
  }
  var cn = /* @__PURE__ */ new Map(), wh = /* @__PURE__ */ new Set();
  function To(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var _l = q.d;
  q.d = {
    f: Op,
    r: uS,
    D: ql,
    C: Z,
    L: Ht,
    m: iS,
    X: _p,
    S: Rp,
    M: Yi
  };
  function Op() {
    var l = _l.f(), n = gr();
    return l || n;
  }
  function uS(l) {
    var n = Hc(l);
    n !== null && n.tag === 5 && n.type === "form" ? mf(n) : _l.r(l);
  }
  var Ao = typeof document > "u" ? null : document;
  function B0(l, n, u) {
    var c = Ao;
    if (c && typeof n == "string" && n) {
      var s = xn(n);
      s = 'link[rel="' + l + '"][href="' + s + '"]', typeof u == "string" && (s += '[crossorigin="' + u + '"]'), wh.has(s) || (wh.add(s), l = { rel: l, crossOrigin: u, href: n }, c.querySelector(s) === null && (n = c.createElement("link"), ua(n, "link", l), Hl(n), c.head.appendChild(n)));
    }
  }
  function ql(l) {
    _l.D(l), B0("dns-prefetch", l, null);
  }
  function Z(l, n) {
    _l.C(l, n), B0("preconnect", l, n);
  }
  function Ht(l, n, u) {
    _l.L(l, n, u);
    var c = Ao;
    if (c && l && n) {
      var s = 'link[rel="preload"][as="' + xn(n) + '"]';
      n === "image" && u && u.imageSrcSet ? (s += '[imagesrcset="' + xn(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (s += '[imagesizes="' + xn(
        u.imageSizes
      ) + '"]')) : s += '[href="' + xn(l) + '"]';
      var r = s;
      switch (n) {
        case "style":
          r = ti(l);
          break;
        case "script":
          r = zo(l);
      }
      cn.has(r) || (l = ae(
        {
          rel: "preload",
          href: n === "image" && u && u.imageSrcSet ? void 0 : l,
          as: n
        },
        u
      ), cn.set(r, l), c.querySelector(s) !== null || n === "style" && c.querySelector(Zn(r)) || n === "script" && c.querySelector(Nf(r)) || (n = c.createElement("link"), ua(n, "link", l), Hl(n), c.head.appendChild(n)));
    }
  }
  function iS(l, n) {
    _l.m(l, n);
    var u = Ao;
    if (u && l) {
      var c = n && typeof n.as == "string" ? n.as : "script", s = 'link[rel="modulepreload"][as="' + xn(c) + '"][href="' + xn(l) + '"]', r = s;
      switch (c) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = zo(l);
      }
      if (!cn.has(r) && (l = ae({ rel: "modulepreload", href: l }, n), cn.set(r, l), u.querySelector(s) === null)) {
        switch (c) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(Nf(r)))
              return;
        }
        c = u.createElement("link"), ua(c, "link", l), Hl(c), u.head.appendChild(c);
      }
    }
  }
  function Rp(l, n, u) {
    _l.S(l, n, u);
    var c = Ao;
    if (c && l) {
      var s = jc(c).hoistableStyles, r = ti(l);
      n = n || "default";
      var m = s.get(r);
      if (!m) {
        var g = { loading: 0, preload: null };
        if (m = c.querySelector(
          Zn(r)
        ))
          g.loading = 5;
        else {
          l = ae(
            { rel: "stylesheet", href: l, "data-precedence": n },
            u
          ), (u = cn.get(r)) && Xh(l, u);
          var A = m = c.createElement("link");
          Hl(A), ua(A, "link", l), A._p = new Promise(function(j, K) {
            A.onload = j, A.onerror = K;
          }), A.addEventListener("load", function() {
            g.loading |= 1;
          }), A.addEventListener("error", function() {
            g.loading |= 2;
          }), g.loading |= 4, Nr(m, n, c);
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
  function _p(l, n) {
    _l.X(l, n);
    var u = Ao;
    if (u && l) {
      var c = jc(u).hoistableScripts, s = zo(l), r = c.get(s);
      r || (r = u.querySelector(Nf(s)), r || (l = ae({ src: l, async: !0 }, n), (n = cn.get(s)) && Vh(l, n), r = u.createElement("script"), Hl(r), ua(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Yi(l, n) {
    _l.M(l, n);
    var u = Ao;
    if (u && l) {
      var c = jc(u).hoistableScripts, s = zo(l), r = c.get(s);
      r || (r = u.querySelector(Nf(s)), r || (l = ae({ src: l, async: !0, type: "module" }, n), (n = cn.get(s)) && Vh(l, n), r = u.createElement("script"), Hl(r), ua(r, "link", l), u.head.appendChild(r)), r = {
        type: "script",
        instance: r,
        count: 1,
        state: null
      }, c.set(s, r));
    }
  }
  function Gi(l, n, u, c) {
    var s = (s = _e.current) ? To(s) : null;
    if (!s) throw Error(C(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (n = ti(u.href), u = jc(
          s
        ).hoistableStyles, c = u.get(n), c || (c = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = ti(u.href);
          var r = jc(
            s
          ).hoistableStyles, m = r.get(l);
          if (m || (s = s.ownerDocument || s, m = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, r.set(l, m), (r = s.querySelector(
            Zn(l)
          )) && !r._p && (m.instance = r, m.state.loading = 5), cn.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, cn.set(l, u), r || xr(
            s,
            l,
            u,
            m.state
          ))), n && c === null)
            throw Error(C(528, ""));
          return m;
        }
        if (n && c !== null)
          throw Error(C(529, ""));
        return null;
      case "script":
        return n = u.async, u = u.src, typeof u == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = zo(u), u = jc(
          s
        ).hoistableScripts, c = u.get(n), c || (c = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(n, c)), c) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(C(444, l));
    }
  }
  function ti(l) {
    return 'href="' + xn(l) + '"';
  }
  function Zn(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Ur(l) {
    return ae({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function xr(l, n, u, c) {
    l.querySelector('link[rel="preload"][as="style"][' + n + "]") ? c.loading = 1 : (n = l.createElement("link"), c.preload = n, n.addEventListener("load", function() {
      return c.loading |= 1;
    }), n.addEventListener("error", function() {
      return c.loading |= 2;
    }), ua(n, "link", u), Hl(n), l.head.appendChild(n));
  }
  function zo(l) {
    return '[src="' + xn(l) + '"]';
  }
  function Nf(l) {
    return "script[async]" + l;
  }
  function Dp(l, n, u) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var c = l.querySelector(
            'style[data-href~="' + xn(u.href) + '"]'
          );
          if (c)
            return n.instance = c, Hl(c), c;
          var s = ae({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return c = (l.ownerDocument || l).createElement(
            "style"
          ), Hl(c), ua(c, "style", s), Nr(c, u.precedence, l), n.instance = c;
        case "stylesheet":
          s = ti(u.href);
          var r = l.querySelector(
            Zn(s)
          );
          if (r)
            return n.state.loading |= 4, n.instance = r, Hl(r), r;
          c = Ur(u), (s = cn.get(s)) && Xh(c, s), r = (l.ownerDocument || l).createElement("link"), Hl(r);
          var m = r;
          return m._p = new Promise(function(g, A) {
            m.onload = g, m.onerror = A;
          }), ua(r, "link", c), n.state.loading |= 4, Nr(r, u.precedence, l), n.instance = r;
        case "script":
          return r = zo(u.src), (s = l.querySelector(
            Nf(r)
          )) ? (n.instance = s, Hl(s), s) : (c = u, (s = cn.get(r)) && (c = ae({}, u), Vh(c, s)), l = l.ownerDocument || l, s = l.createElement("script"), Hl(s), ua(s, "link", c), l.head.appendChild(s), n.instance = s);
        case "void":
          return null;
        default:
          throw Error(C(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (c = n.instance, n.state.loading |= 4, Nr(c, u.precedence, l));
    return n.instance;
  }
  function Nr(l, n, u) {
    for (var c = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = c.length ? c[c.length - 1] : null, r = s, m = 0; m < c.length; m++) {
      var g = c[m];
      if (g.dataset.precedence === n) r = g;
      else if (r !== s) break;
    }
    r ? r.parentNode.insertBefore(l, r.nextSibling) : (n = u.nodeType === 9 ? u.head : u, n.insertBefore(l, n.firstChild));
  }
  function Xh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.title == null && (l.title = n.title);
  }
  function Vh(l, n) {
    l.crossOrigin == null && (l.crossOrigin = n.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = n.referrerPolicy), l.integrity == null && (l.integrity = n.integrity);
  }
  var Hr = null;
  function Lh(l, n, u) {
    if (Hr === null) {
      var c = /* @__PURE__ */ new Map(), s = Hr = /* @__PURE__ */ new Map();
      s.set(u, c);
    } else
      s = Hr, c = s.get(u), c || (c = /* @__PURE__ */ new Map(), s.set(u, c));
    if (c.has(l)) return c;
    for (c.set(l, null), u = u.getElementsByTagName(l), s = 0; s < u.length; s++) {
      var r = u[s];
      if (!(r[Lo] || r[Cl] || l === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
        var m = r.getAttribute(n) || "";
        m = l + m;
        var g = c.get(m);
        g ? g.push(r) : c.set(m, [r]);
      }
    }
    return c;
  }
  function Mp(l, n, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      n === "title" ? l.querySelector("head > title") : null
    );
  }
  function Cp(l, n, u) {
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
  function Qh(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function An(l, n, u, c) {
    if (u.type === "stylesheet" && (typeof c.media != "string" || matchMedia(c.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var s = ti(c.href), r = n.querySelector(
          Zn(s)
        );
        if (r) {
          n = r._p, n !== null && typeof n == "object" && typeof n.then == "function" && (l.count++, l = Hf.bind(l), n.then(l, l)), u.state.loading |= 4, u.instance = r, Hl(r);
          return;
        }
        r = n.ownerDocument || n, c = Ur(c), (s = cn.get(s)) && Xh(c, s), r = r.createElement("link"), Hl(r);
        var m = r;
        m._p = new Promise(function(g, A) {
          m.onload = g, m.onerror = A;
        }), ua(r, "link", c), u.instance = r;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, n), (n = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Hf.bind(l), n.addEventListener("load", u), n.addEventListener("error", u));
    }
  }
  var Jn = 0;
  function ru(l, n) {
    return l.stylesheets && l.count === 0 && Jh(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var c = setTimeout(function() {
        if (l.stylesheets && Jh(l, l.stylesheets), l.unsuspend) {
          var r = l.unsuspend;
          l.unsuspend = null, r();
        }
      }, 6e4 + n);
      0 < l.imgBytes && Jn === 0 && (Jn = 62500 * bp());
      var s = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Jh(l, l.stylesheets), l.unsuspend)) {
            var r = l.unsuspend;
            l.unsuspend = null, r();
          }
        },
        (l.imgBytes > Jn ? 50 : 800) + n
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(c), clearTimeout(s);
      };
    } : null;
  }
  function Hf() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Jh(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Zh = null;
  function Jh(l, n) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Zh = /* @__PURE__ */ new Map(), n.forEach(cS, l), Zh = null, Hf.call(l));
  }
  function cS(l, n) {
    if (!(n.state.loading & 4)) {
      var u = Zh.get(l);
      if (u) var c = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Zh.set(l, u);
        for (var s = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), r = 0; r < s.length; r++) {
          var m = s[r];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") && (u.set(m.dataset.precedence, m), c = m);
        }
        c && u.set(null, c);
      }
      s = n.instance, m = s.getAttribute("data-precedence"), r = u.get(m) || c, r === c && u.set(null, s), u.set(m, s), this.count++, c = Hf.bind(this), s.addEventListener("load", c), s.addEventListener("error", c), r ? r.parentNode.insertBefore(s, r.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(s, l.firstChild)), n.state.loading |= 4;
    }
  }
  var Tl = {
    $$typeof: Dt,
    Provider: null,
    Consumer: null,
    _currentValue: I,
    _currentValue2: I,
    _threadCount: 0
  };
  function oS(l, n, u, c, s, r, m, g, A) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Fl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.hiddenUpdates = Fl(null), this.identifierPrefix = c, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = m, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Kh(l, n, u, c, s, r, m, g, A, j, K, F) {
    return l = new oS(
      l,
      n,
      u,
      m,
      A,
      j,
      K,
      F,
      g
    ), n = 1, r === !0 && (n |= 24), r = Ka(3, null, null, n), l.current = r, r.stateNode = l, n = Bd(), n.refCount++, l.pooledCache = n, n.refCount++, r.memoizedState = {
      element: c,
      isDehydrated: u,
      cache: n
    }, wd(r), l;
  }
  function $h(l) {
    return l ? (l = $c, l) : $c;
  }
  function Oo(l, n, u, c, s, r) {
    s = $h(s), c.context === null ? c.context = s : c.pendingContext = s, c = Oi(n), c.payload = { element: u }, r = r === void 0 ? null : r, r !== null && (c.callback = r), u = Ri(l, c, n), u !== null && (un(u, l, n), Yu(u, l, n));
  }
  function Y0(l, n) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < n ? u : n;
    }
  }
  function jr(l, n) {
    Y0(l, n), (l = l.alternate) && Y0(l, n);
  }
  function G0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = ya(l, 67108864);
      n !== null && un(n, l, 67108864), jr(l, 67108864);
    }
  }
  function w0(l) {
    if (l.tag === 13 || l.tag === 31) {
      var n = qa();
      n = Va(n);
      var u = ya(l, n);
      u !== null && un(u, l, n), jr(l, n);
    }
  }
  var wi = !0;
  function Ta(l, n, u, c) {
    var s = G.T;
    G.T = null;
    var r = q.p;
    try {
      q.p = 2, Kn(l, n, u, c);
    } finally {
      q.p = r, G.T = s;
    }
  }
  function li(l, n, u, c) {
    var s = G.T;
    G.T = null;
    var r = q.p;
    try {
      q.p = 8, Kn(l, n, u, c);
    } finally {
      q.p = r, G.T = s;
    }
  }
  function Kn(l, n, u, c) {
    if (wi) {
      var s = ca(c);
      if (s === null)
        _f(
          l,
          n,
          c,
          kh,
          u
        ), Aa(l, c);
      else if (xp(
        s,
        l,
        n,
        u,
        c
      ))
        c.stopPropagation();
      else if (Aa(l, c), n & 4 && -1 < fa.indexOf(l)) {
        for (; s !== null; ) {
          var r = Hc(s);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                  var m = ye(r.pendingLanes);
                  if (m !== 0) {
                    var g = r;
                    for (g.pendingLanes |= 2, g.entangledLanes |= 2; m; ) {
                      var A = 1 << 31 - Xl(m);
                      g.entanglements[1] |= A, m &= ~A;
                    }
                    fu(r), (Ot & 6) === 0 && (vr = We() + 500, Tr(0));
                  }
                }
                break;
              case 31:
              case 13:
                g = ya(r, 2), g !== null && un(g, r, 2), gr(), jr(r, 2);
            }
          if (r = ca(c), r === null && _f(
            l,
            n,
            c,
            kh,
            u
          ), r === s) break;
          s = r;
        }
        s !== null && c.stopPropagation();
      } else
        _f(
          l,
          n,
          c,
          null,
          u
        );
    }
  }
  function ca(l) {
    return l = pd(l), Up(l);
  }
  var kh = null;
  function Up(l) {
    if (kh = null, l = Nc(l), l !== null) {
      var n = pe(l);
      if (n === null) l = null;
      else {
        var u = n.tag;
        if (u === 13) {
          if (l = Ae(n), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = xe(n), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          l = null;
        } else n !== l && (l = null);
      }
    }
    return kh = l, null;
  }
  function qr(l) {
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
        switch (wl()) {
          case In:
            return 2;
          case da:
            return 8;
          case Wt:
          case ha:
            return 32;
          case Dc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var jf = !1, du = null, Bl = null, oa = null, zn = /* @__PURE__ */ new Map(), Ec = /* @__PURE__ */ new Map(), Ba = [], fa = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Aa(l, n) {
    switch (l) {
      case "focusin":
      case "focusout":
        du = null;
        break;
      case "dragenter":
      case "dragleave":
        Bl = null;
        break;
      case "mouseover":
      case "mouseout":
        oa = null;
        break;
      case "pointerover":
      case "pointerout":
        zn.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ec.delete(n.pointerId);
    }
  }
  function $n(l, n, u, c, s, r) {
    return l === null || l.nativeEvent !== r ? (l = {
      blockedOn: n,
      domEventName: u,
      eventSystemFlags: c,
      nativeEvent: r,
      targetContainers: [s]
    }, n !== null && (n = Hc(n), n !== null && G0(n)), l) : (l.eventSystemFlags |= c, n = l.targetContainers, s !== null && n.indexOf(s) === -1 && n.push(s), l);
  }
  function xp(l, n, u, c, s) {
    switch (n) {
      case "focusin":
        return du = $n(
          du,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "dragenter":
        return Bl = $n(
          Bl,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "mouseover":
        return oa = $n(
          oa,
          l,
          n,
          u,
          c,
          s
        ), !0;
      case "pointerover":
        var r = s.pointerId;
        return zn.set(
          r,
          $n(
            zn.get(r) || null,
            l,
            n,
            u,
            c,
            s
          )
        ), !0;
      case "gotpointercapture":
        return r = s.pointerId, Ec.set(
          r,
          $n(
            Ec.get(r) || null,
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
  function X0(l) {
    var n = Nc(l.target);
    if (n !== null) {
      var u = pe(n);
      if (u !== null) {
        if (n = u.tag, n === 13) {
          if (n = Ae(u), n !== null) {
            l.blockedOn = n, dd(l.priority, function() {
              w0(u);
            });
            return;
          }
        } else if (n === 31) {
          if (n = xe(u), n !== null) {
            l.blockedOn = n, dd(l.priority, function() {
              w0(u);
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
  function Wh(l) {
    if (l.blockedOn !== null) return !1;
    for (var n = l.targetContainers; 0 < n.length; ) {
      var u = ca(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var c = new u.constructor(
          u.type,
          u
        );
        ms = c, u.target.dispatchEvent(c), ms = null;
      } else
        return n = Hc(u), n !== null && G0(n), l.blockedOn = u, !1;
      n.shift();
    }
    return !0;
  }
  function Np(l, n, u) {
    Wh(l) && u.delete(n);
  }
  function Br() {
    jf = !1, du !== null && Wh(du) && (du = null), Bl !== null && Wh(Bl) && (Bl = null), oa !== null && Wh(oa) && (oa = null), zn.forEach(Np), Ec.forEach(Np);
  }
  function Yr(l, n) {
    l.blockedOn === n && (l.blockedOn = null, jf || (jf = !0, w.unstable_scheduleCallback(
      w.unstable_NormalPriority,
      Br
    )));
  }
  var ai = null;
  function Fh(l) {
    ai !== l && (ai = l, w.unstable_scheduleCallback(
      w.unstable_NormalPriority,
      function() {
        ai === l && (ai = null);
        for (var n = 0; n < l.length; n += 3) {
          var u = l[n], c = l[n + 1], s = l[n + 2];
          if (typeof c != "function") {
            if (Up(c || u) === null)
              continue;
            break;
          }
          var r = Hc(u);
          r !== null && (l.splice(n, 3), n -= 3, ih(
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
  function qf(l) {
    function n(A) {
      return Yr(A, l);
    }
    du !== null && Yr(du, l), Bl !== null && Yr(Bl, l), oa !== null && Yr(oa, l), zn.forEach(n), Ec.forEach(n);
    for (var u = 0; u < Ba.length; u++) {
      var c = Ba[u];
      c.blockedOn === l && (c.blockedOn = null);
    }
    for (; 0 < Ba.length && (u = Ba[0], u.blockedOn === null); )
      X0(u), u.blockedOn === null && Ba.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (c = 0; c < u.length; c += 3) {
        var s = u[c], r = u[c + 1], m = s[al] || null;
        if (typeof r == "function")
          m || Fh(u);
        else if (m) {
          var g = null;
          if (r && r.hasAttribute("formAction")) {
            if (s = r, m = r[al] || null)
              g = m.formAction;
            else if (Up(s) !== null) continue;
          } else g = m.action;
          typeof g == "function" ? u[c + 1] = g : (u.splice(c, 3), c -= 3), Fh(u);
        }
      }
  }
  function V0() {
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
  function Ih(l) {
    this._internalRoot = l;
  }
  Gr.prototype.render = Ih.prototype.render = function(l) {
    var n = this._internalRoot;
    if (n === null) throw Error(C(409));
    var u = n.current, c = qa();
    Oo(u, c, l, n, null, null);
  }, Gr.prototype.unmount = Ih.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var n = l.containerInfo;
      Oo(l.current, 2, null, l, null, null), gr(), n[xc] = null;
    }
  };
  function Gr(l) {
    this._internalRoot = l;
  }
  Gr.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var n = Uv();
      l = { blockedOn: null, target: l, priority: n };
      for (var u = 0; u < Ba.length && n !== 0 && n < Ba[u].priority; u++) ;
      Ba.splice(u, 0, l), u === 0 && X0(l);
    }
  };
  var L0 = te.version;
  if (L0 !== "19.2.3")
    throw Error(
      C(
        527,
        L0,
        "19.2.3"
      )
    );
  q.findDOMNode = function(l) {
    var n = l._reactInternals;
    if (n === void 0)
      throw typeof l.render == "function" ? Error(C(188)) : (l = Object.keys(l).join(","), Error(C(268, l)));
    return l = V(n), l = l !== null ? Ce(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Q0 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: G,
    reconcilerVersion: "19.2.3"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var wr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!wr.isDisabled && wr.supportsFiber)
      try {
        rn = wr.inject(
          Q0
        ), yl = wr;
      } catch {
      }
  }
  return _v.createRoot = function(l, n) {
    if (!he(l)) throw Error(C(299));
    var u = !1, c = "", s = Hy, r = oh, m = jy;
    return n != null && (n.unstable_strictMode === !0 && (u = !0), n.identifierPrefix !== void 0 && (c = n.identifierPrefix), n.onUncaughtError !== void 0 && (s = n.onUncaughtError), n.onCaughtError !== void 0 && (r = n.onCaughtError), n.onRecoverableError !== void 0 && (m = n.onRecoverableError)), n = Kh(
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
      V0
    ), l[xc] = n.current, yp(l), new Ih(n);
  }, _v.hydrateRoot = function(l, n, u) {
    if (!he(l)) throw Error(C(299));
    var c = !1, s = "", r = Hy, m = oh, g = jy, A = null;
    return u != null && (u.unstable_strictMode === !0 && (c = !0), u.identifierPrefix !== void 0 && (s = u.identifierPrefix), u.onUncaughtError !== void 0 && (r = u.onUncaughtError), u.onCaughtError !== void 0 && (m = u.onCaughtError), u.onRecoverableError !== void 0 && (g = u.onRecoverableError), u.formState !== void 0 && (A = u.formState)), n = Kh(
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
      V0
    ), n.context = $h(null), u = n.current, c = qa(), c = Va(c), s = Oi(c), s.callback = null, Ri(u, s, c), u = c, n.current.lanes = u, Xa(n, u), fu(n), l[xc] = n.current, yp(l), new Gr(n);
  }, _v.version = "19.2.3", _v;
}
var Dv = {}, ZE;
function CA() {
  if (ZE) return Dv;
  ZE = 1;
  var w = {};
  return w.NODE_ENV !== "production" && (function() {
    function te(e, t) {
      for (e = e.memoizedState; e !== null && 0 < t; )
        e = e.next, t--;
      return e;
    }
    function Te(e, t, a, i) {
      if (a >= t.length) return i;
      var o = t[a], f = ql(e) ? e.slice() : Fe({}, e);
      return f[o] = Te(e[o], t, a + 1, i), f;
    }
    function C(e, t, a) {
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
        return he(e, t, a, 0);
      }
    }
    function he(e, t, a, i) {
      var o = t[i], f = ql(e) ? e.slice() : Fe({}, e);
      return i + 1 === t.length ? (f[a[i]] = f[o], ql(f) ? f.splice(o, 1) : delete f[o]) : f[o] = he(
        e[o],
        t,
        a,
        i + 1
      ), f;
    }
    function pe(e, t, a) {
      var i = t[a], o = ql(e) ? e.slice() : Fe({}, e);
      return a + 1 === t.length ? (ql(o) ? o.splice(i, 1) : delete o[i], o) : (o[i] = pe(e[i], t, a + 1), o);
    }
    function Ae() {
      return !1;
    }
    function xe() {
      return null;
    }
    function L() {
      console.error(
        "Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://react.dev/link/rules-of-hooks"
      );
    }
    function V() {
      console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      );
    }
    function Ce() {
    }
    function ae() {
    }
    function k(e) {
      var t = [];
      return e.forEach(function(a) {
        t.push(a);
      }), t.sort().join(", ");
    }
    function x(e, t, a, i) {
      return new Ig(e, t, a, i);
    }
    function ce(e, t) {
      e.context === wf && (vp(e.current, 2, t, e, null, null), ro());
    }
    function je(e, t) {
      if (ii !== null) {
        var a = t.staleFamilies;
        t = t.updatedFamilies, yc(), $v(
          e.current,
          t,
          a
        ), ro();
      }
    }
    function $t(e) {
      ii = e;
    }
    function Ze(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function ct(e) {
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
    function Dt(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function jt(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function Bt(e) {
      if (ct(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function Tt(e) {
      var t = e.alternate;
      if (!t) {
        if (t = ct(e), t === null)
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
            if (f === a) return Bt(o), e;
            if (f === i) return Bt(o), t;
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
    function qe(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = qe(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    function At(e) {
      return e === null || typeof e != "object" ? null : (e = Ao && e[Ao] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    function ke(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === B0 ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case ia:
          return "Fragment";
        case Yh:
          return "Profiler";
        case xf:
          return "StrictMode";
        case cn:
          return "Suspense";
        case wh:
          return "SuspenseList";
        case Op:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case Uf:
            return "Portal";
          case su:
            return e.displayName || "Context";
          case Gh:
            return (e._context.displayName || "Context") + ".Consumer";
          case Bi:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case To:
            return t = e.displayName || null, t !== null ? t : ke(e.type) || "Memo";
          case _l:
            t = e._payload, e = e._init;
            try {
              return ke(e(t));
            } catch {
            }
        }
      return null;
    }
    function zt(e) {
      return typeof e.tag == "number" ? de(e) : typeof e.name == "string" ? e.name : null;
    }
    function de(e) {
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
          return ke(t);
        case 8:
          return t === xf ? "StrictMode" : "Mode";
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
            return de(e.return);
      }
      return null;
    }
    function st(e) {
      return { current: e };
    }
    function ze(e, t) {
      0 > Yi ? console.error("Unexpected pop.") : (t !== _p[Yi] && console.error("Unexpected Fiber popped."), e.current = Rp[Yi], Rp[Yi] = null, _p[Yi] = null, Yi--);
    }
    function Ne(e, t, a) {
      Yi++, Rp[Yi] = e.current, _p[Yi] = a, e.current = t;
    }
    function Mt(e) {
      return e === null && console.error(
        "Expected host context to exist. This error is likely caused by a bug in React. Please file an issue."
      ), e;
    }
    function G(e, t) {
      Ne(Zn, t, e), Ne(ti, e, e), Ne(Gi, null, e);
      var a = t.nodeType;
      switch (a) {
        case 9:
        case 11:
          a = a === 9 ? "#document" : "#fragment", t = (t = t.documentElement) && (t = t.namespaceURI) ? ji(t) : Go;
          break;
        default:
          if (a = t.tagName, t = t.namespaceURI)
            t = ji(t), t = gr(
              t,
              a
            );
          else
            switch (a) {
              case "svg":
                t = Mm;
                break;
              case "math":
                t = Hg;
                break;
              default:
                t = Go;
            }
      }
      a = a.toLowerCase(), a = ds(null, a), a = {
        context: t,
        ancestorInfo: a
      }, ze(Gi, e), Ne(Gi, a, e);
    }
    function q(e) {
      ze(Gi, e), ze(ti, e), ze(Zn, e);
    }
    function I() {
      return Mt(Gi.current);
    }
    function fe(e) {
      e.memoizedState !== null && Ne(Ur, e, e);
      var t = Mt(Gi.current), a = e.type, i = gr(t.context, a);
      a = ds(t.ancestorInfo, a), i = { context: i, ancestorInfo: a }, t !== i && (Ne(ti, e, e), Ne(Gi, i, e));
    }
    function ge(e) {
      ti.current === e && (ze(Gi, e), ze(ti, e)), Ur.current === e && (ze(Ur, e), Tv._currentValue = fd);
    }
    function z() {
    }
    function E() {
      if (xr === 0) {
        zo = console.log, Nf = console.info, Dp = console.warn, Nr = console.error, Xh = console.group, Vh = console.groupCollapsed, Hr = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: z,
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
      xr++;
    }
    function J() {
      if (xr--, xr === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: Fe({}, e, { value: zo }),
          info: Fe({}, e, { value: Nf }),
          warn: Fe({}, e, { value: Dp }),
          error: Fe({}, e, { value: Nr }),
          group: Fe({}, e, { value: Xh }),
          groupCollapsed: Fe({}, e, { value: Vh }),
          groupEnd: Fe({}, e, { value: Hr })
        });
      }
      0 > xr && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function le(e) {
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
    function ne(e) {
      if (Lh === void 0)
        try {
          throw Error();
        } catch (a) {
          var t = a.stack.trim().match(/\n( *(at )?)/);
          Lh = t && t[1] || "", Mp = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + Lh + e + Mp;
    }
    function _e(e, t) {
      if (!e || Cp) return "";
      var a = Qh.get(e);
      if (a !== void 0) return a;
      Cp = !0, a = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var i = null;
      i = Z.H, Z.H = null, E();
      try {
        var o = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var b = function() {
                  throw Error();
                };
                if (Object.defineProperty(b.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(b, []);
                  } catch (oe) {
                    var Y = oe;
                  }
                  Reflect.construct(e, [], b);
                } else {
                  try {
                    b.call();
                  } catch (oe) {
                    Y = oe;
                  }
                  e.call(b.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (oe) {
                  Y = oe;
                }
                (b = e()) && typeof b.catch == "function" && b.catch(function() {
                });
              }
            } catch (oe) {
              if (oe && Y && typeof oe.stack == "string")
                return [oe.stack, Y.stack];
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
                    var D = `
` + p[f].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), typeof e == "function" && Qh.set(e, D), D;
                  }
                while (1 <= f && 0 <= d);
              break;
            }
        }
      } finally {
        Cp = !1, Z.H = i, J(), Error.prepareStackTrace = a;
      }
      return p = (p = e ? e.displayName || e.name : "") ? ne(p) : "", typeof e == "function" && Qh.set(e, p), p;
    }
    function at(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return ne(e.type);
        case 16:
          return ne("Lazy");
        case 13:
          return e.child !== t && t !== null ? ne("Suspense Fallback") : ne("Suspense");
        case 19:
          return ne("SuspenseList");
        case 0:
        case 15:
          return _e(e.type, !1);
        case 11:
          return _e(e.type.render, !1);
        case 1:
          return _e(e.type, !0);
        case 31:
          return ne("Activity");
        default:
          return "";
      }
    }
    function Pe(e) {
      try {
        var t = "", a = null;
        do {
          t += at(e, a);
          var i = e._debugInfo;
          if (i)
            for (var o = i.length - 1; 0 <= o; o--) {
              var f = i[o];
              if (typeof f.name == "string") {
                var d = t;
                e: {
                  var h = f.name, y = f.env, p = f.debugLocation;
                  if (p != null) {
                    var R = le(p), D = R.lastIndexOf(`
`), b = D === -1 ? R : R.slice(D + 1);
                    if (b.indexOf(h) !== -1) {
                      var Y = `
` + b;
                      break e;
                    }
                  }
                  Y = ne(
                    h + (y ? " [" + y + "]" : "")
                  );
                }
                t = d + Y;
              }
            }
          a = e, e = e.return;
        } while (e);
        return t;
      } catch (oe) {
        return `
Error generating stack: ` + oe.message + `
` + oe.stack;
      }
    }
    function rt(e) {
      return (e = e ? e.displayName || e.name : "") ? ne(e) : "";
    }
    function qt() {
      if (An === null) return null;
      var e = An._debugOwner;
      return e != null ? zt(e) : null;
    }
    function Ga() {
      if (An === null) return "";
      var e = An;
      try {
        var t = "";
        switch (e.tag === 6 && (e = e.return), e.tag) {
          case 26:
          case 27:
          case 5:
            t += ne(e.type);
            break;
          case 13:
            t += ne("Suspense");
            break;
          case 19:
            t += ne("SuspenseList");
            break;
          case 31:
            t += ne("Activity");
            break;
          case 30:
          case 0:
          case 15:
          case 1:
            e._debugOwner || t !== "" || (t += rt(
              e.type
            ));
            break;
          case 11:
            e._debugOwner || t !== "" || (t += rt(
              e.type.render
            ));
        }
        for (; e; )
          if (typeof e.tag == "number") {
            var a = e;
            e = a._debugOwner;
            var i = a._debugStack;
            if (e && i) {
              var o = le(i);
              o !== "" && (t += `
` + o);
            }
          } else if (e.debugStack != null) {
            var f = e.debugStack;
            (e = e.owner) && f && (t += `
` + le(f));
          } else break;
        var d = t;
      } catch (h) {
        d = `
Error generating stack: ` + h.message + `
` + h.stack;
      }
      return d;
    }
    function ue(e, t, a, i, o, f, d) {
      var h = An;
      Ml(e);
      try {
        return e !== null && e._debugTask ? e._debugTask.run(
          t.bind(null, a, i, o, f, d)
        ) : t(a, i, o, f, d);
      } finally {
        Ml(h);
      }
      throw Error(
        "runWithFiberInDEV should never be called in production. This is a bug in React."
      );
    }
    function Ml(e) {
      Z.getCurrentStack = e === null ? null : Ga, Jn = !1, An = e;
    }
    function yt(e) {
      return typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
    }
    function ll(e) {
      try {
        return bt(e), !1;
      } catch {
        return !0;
      }
    }
    function bt(e) {
      return "" + e;
    }
    function Xe(e, t) {
      if (ll(e))
        return console.error(
          "The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          yt(e)
        ), bt(e);
    }
    function kt(e, t) {
      if (ll(e))
        return console.error(
          "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before using it here.",
          t,
          yt(e)
        ), bt(e);
    }
    function Yt(e) {
      if (ll(e))
        return console.error(
          "Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before using it here.",
          yt(e)
        ), bt(e);
    }
    function Ol(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u") return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled) return !0;
      if (!t.supportsFiber)
        return console.error(
          "The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://react.dev/link/react-devtools"
        ), !0;
      try {
        wi = t.inject(e), Ta = t;
      } catch (a) {
        console.error("React instrumentation encountered an error: %o.", a);
      }
      return !!t.checkDCE;
    }
    function re(e) {
      if (typeof G0 == "function" && w0(e), Ta && typeof Ta.setStrictMode == "function")
        try {
          Ta.setStrictMode(wi, e);
        } catch (t) {
          li || (li = !0, console.error(
            "React instrumentation encountered an error: %o",
            t
          ));
        }
    }
    function wa(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (kh(e) / Up | 0) | 0;
    }
    function Lt(e) {
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
    function We(e, t, a) {
      var i = e.pendingLanes;
      if (i === 0) return 0;
      var o = 0, f = e.suspendedLanes, d = e.pingedLanes;
      e = e.warmLanes;
      var h = i & 134217727;
      return h !== 0 ? (i = h & ~f, i !== 0 ? o = Lt(i) : (d &= h, d !== 0 ? o = Lt(d) : a || (a = h & ~e, a !== 0 && (o = Lt(a))))) : (h = i & ~f, h !== 0 ? o = Lt(h) : d !== 0 ? o = Lt(d) : a || (a = i & ~e, a !== 0 && (o = Lt(a)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, a = t & -t, f >= a || f === 32 && (a & 4194048) !== 0) ? t : o;
    }
    function wl(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function In(e, t) {
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
    function da() {
      var e = du;
      return du <<= 1, (du & 62914560) === 0 && (du = 4194304), e;
    }
    function Wt(e) {
      for (var t = [], a = 0; 31 > a; a++) t.push(e);
      return t;
    }
    function ha(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function Dc(e, t, a, i, o, f) {
      var d = e.pendingLanes;
      e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
      var h = e.entanglements, y = e.expirationTimes, p = e.hiddenUpdates;
      for (a = d & ~a; 0 < a; ) {
        var R = 31 - ca(a), D = 1 << R;
        h[R] = 0, y[R] = -1;
        var b = p[R];
        if (b !== null)
          for (p[R] = null, R = 0; R < b.length; R++) {
            var Y = b[R];
            Y !== null && (Y.lane &= -536870913);
          }
        a &= ~D;
      }
      i !== 0 && Mc(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(d & ~t));
    }
    function Mc(e, t, a) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var i = 31 - ca(t);
      e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | a & 261930;
    }
    function Cc(e, t) {
      var a = e.entangledLanes |= t;
      for (e = e.entanglements; a; ) {
        var i = 31 - ca(a), o = 1 << i;
        o & t | e[i] & t && (e[i] |= t), a &= ~o;
      }
    }
    function rn(e, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : yl(a), (a & (e.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function yl(e) {
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
    function ma(e, t, a) {
      if (Kn)
        for (e = e.pendingUpdatersLaneMap; 0 < a; ) {
          var i = 31 - ca(a), o = 1 << i;
          e[i].add(t), a &= ~o;
        }
    }
    function Xl(e, t) {
      if (Kn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; 0 < t; ) {
          var o = 31 - ca(t);
          e = 1 << o, o = a[o], 0 < o.size && (o.forEach(function(f) {
            var d = f.alternate;
            d !== null && i.has(d) || i.add(f);
          }), o.clear()), t &= ~e;
        }
    }
    function Vo(e) {
      return e &= -e, Bl < e ? oa < e ? (e & 134217727) !== 0 ? zn : Ec : oa : Bl;
    }
    function Ki() {
      var e = Ht.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? zn : jh(e.type));
    }
    function v(e, t) {
      var a = Ht.p;
      try {
        return Ht.p = e, t();
      } finally {
        Ht.p = a;
      }
    }
    function M(e) {
      delete e[fa], delete e[Aa], delete e[xp], delete e[X0], delete e[Wh];
    }
    function ee(e) {
      var t = e[fa];
      if (t) return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[$n] || a[fa]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
            for (e = Rh(e); e !== null; ) {
              if (a = e[fa])
                return a;
              e = Rh(e);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ie(e) {
      if (e = e[fa] || e[$n]) {
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
    function Ye(e) {
      var t = e[Np];
      return t || (t = e[Np] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
    }
    function Se(e) {
      e[Br] = !0;
    }
    function pt(e, t) {
      Ve(e, t), Ve(e + "Capture", t);
    }
    function Ve(e, t) {
      ai[e] && console.error(
        "EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.",
        e
      ), ai[e] = t;
      var a = e.toLowerCase();
      for (Fh[a] = e, e === "onDoubleClick" && (Fh.ondblclick = e), e = 0; e < t.length; e++)
        Yr.add(t[e]);
    }
    function Fl(e, t) {
      qf[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || console.error(
        e === "select" ? "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`." : "You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."
      ), t.onChange || t.readOnly || t.disabled || t.checked == null || console.error(
        "You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`."
      );
    }
    function Xa(e) {
      return ru.call(Gr, e) ? !0 : ru.call(Ih, e) ? !1 : V0.test(e) ? Gr[e] = !0 : (Ih[e] = !0, console.error("Invalid attribute name: `%s`", e), !1);
    }
    function sd(e, t, a) {
      if (Xa(t)) {
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
        return e = e.getAttribute(t), e === "" && a === !0 ? !0 : (Xe(a, t), e === "" + a ? a : e);
      }
    }
    function Uc(e, t, a) {
      if (Xa(t))
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
          Xe(a, t), e.setAttribute(t, "" + a);
        }
    }
    function is(e, t, a) {
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
        Xe(a, t), e.setAttribute(t, "" + a);
      }
    }
    function gu(e, t, a, i) {
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
        Xe(i, a), e.setAttributeNS(t, a, "" + i);
      }
    }
    function Va(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Yt(e), e;
        default:
          return "";
      }
    }
    function rd(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Uv(e, t, a) {
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
            Yt(d), a = "" + d, f.call(this, d);
          }
        }), Object.defineProperty(e, t, {
          enumerable: i.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(d) {
            Yt(d), a = "" + d;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function dd(e) {
      if (!e._valueTracker) {
        var t = rd(e) ? "checked" : "value";
        e._valueTracker = Uv(
          e,
          t,
          "" + e[t]
        );
      }
    }
    function pi(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var a = t.getValue(), i = "";
      return e && (i = rd(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== a ? (t.setValue(e), !0) : !1;
    }
    function Cl(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function al(e) {
      return e.replace(
        L0,
        function(t) {
          return "\\" + t.charCodeAt(0).toString(16) + " ";
        }
      );
    }
    function xc(e, t) {
      t.checked === void 0 || t.defaultChecked === void 0 || wr || (console.error(
        "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        qt() || "A component",
        t.type
      ), wr = !0), t.value === void 0 || t.defaultValue === void 0 || Q0 || (console.error(
        "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://react.dev/link/controlled-components",
        qt() || "A component",
        t.type
      ), Q0 = !0);
    }
    function cs(e, t, a, i, o, f, d, h) {
      e.name = "", d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" ? (Xe(d, "type"), e.type = d) : e.removeAttribute("type"), t != null ? d === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Va(t)) : e.value !== "" + Va(t) && (e.value = "" + Va(t)) : d !== "submit" && d !== "reset" || e.removeAttribute("value"), t != null ? xm(e, d, Va(t)) : a != null ? xm(e, d, Va(a)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? (Xe(h, "name"), e.name = "" + Va(h)) : e.removeAttribute("name");
    }
    function xv(e, t, a, i, o, f, d, h) {
      if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (Xe(f, "type"), e.type = f), t != null || a != null) {
        if (!(f !== "submit" && f !== "reset" || t != null)) {
          dd(e);
          return;
        }
        a = a != null ? "" + Va(a) : "", t = t != null ? "" + Va(t) : a, h || t === e.value || (e.value = t), e.defaultValue = t;
      }
      i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = h ? e.checked : !!i, e.defaultChecked = !!i, d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (Xe(d, "name"), e.name = d), dd(e);
    }
    function xm(e, t, a) {
      t === "number" && Cl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
    }
    function Nm(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Ap.Children.forEach(t.children, function(a) {
        a == null || typeof a == "string" || typeof a == "number" || typeof a == "bigint" || n || (n = !0, console.error(
          "Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>."
        ));
      }) : t.dangerouslySetInnerHTML == null || u || (u = !0, console.error(
        "Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected."
      ))), t.selected == null || l || (console.error(
        "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."
      ), l = !0);
    }
    function Lo() {
      var e = qt();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    function $i(e, t, a, i) {
      if (e = e.options, t) {
        t = {};
        for (var o = 0; o < a.length; o++)
          t["$" + a[o]] = !0;
        for (a = 0; a < e.length; a++)
          o = t.hasOwnProperty("$" + e[a].value), e[a].selected !== o && (e[a].selected = o), o && i && (e[a].defaultSelected = !0);
      } else {
        for (a = "" + Va(a), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === a) {
            e[o].selected = !0, i && (e[o].defaultSelected = !0);
            return;
          }
          t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Nc(e, t) {
      for (e = 0; e < s.length; e++) {
        var a = s[e];
        if (t[a] != null) {
          var i = ql(t[a]);
          t.multiple && !i ? console.error(
            "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s",
            a,
            Lo()
          ) : !t.multiple && i && console.error(
            "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s",
            a,
            Lo()
          );
        }
      }
      t.value === void 0 || t.defaultValue === void 0 || c || (console.error(
        "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://react.dev/link/controlled-components"
      ), c = !0);
    }
    function Hc(e, t) {
      t.value === void 0 || t.defaultValue === void 0 || r || (console.error(
        "%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://react.dev/link/controlled-components",
        qt() || "A component"
      ), r = !0), t.children != null && t.value == null && console.error(
        "Use the `defaultValue` or `value` props instead of setting children on <textarea>."
      );
    }
    function Qo(e, t, a) {
      if (t != null && (t = "" + Va(t), t !== e.value && (e.value = t), a == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = a != null ? "" + Va(a) : "";
    }
    function jc(e, t, a, i) {
      if (t == null) {
        if (i != null) {
          if (a != null)
            throw Error(
              "If you supply `defaultValue` on a <textarea>, do not pass children."
            );
          if (ql(i)) {
            if (1 < i.length)
              throw Error("<textarea> can only have at most one child.");
            i = i[0];
          }
          a = i;
        }
        a == null && (a = ""), t = a;
      }
      a = Va(t), e.defaultValue = a, i = e.textContent, i === a && i !== "" && i !== null && (e.value = i), dd(e);
    }
    function Hl(e, t) {
      return e.serverProps === void 0 && e.serverTail.length === 0 && e.children.length === 1 && 3 < e.distanceFromLeaf && e.distanceFromLeaf > 15 - t ? Hl(e.children[0], t) : e;
    }
    function La(e) {
      return "  " + "  ".repeat(e);
    }
    function qc(e) {
      return "+ " + "  ".repeat(e);
    }
    function dn(e) {
      return "- " + "  ".repeat(e);
    }
    function Bc(e) {
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
    function os(e, t) {
      return m.test(e) ? (e = JSON.stringify(e), e.length > t - 2 ? 8 > t ? '{"..."}' : "{" + e.slice(0, t - 7) + '..."}' : "{" + e + "}") : e.length > t ? 5 > t ? '{"..."}' : e.slice(0, t - 3) + "..." : e;
    }
    function fs(e, t, a) {
      var i = 120 - 2 * a;
      if (t === null)
        return qc(a) + os(e, i) + `
`;
      if (typeof t == "string") {
        for (var o = 0; o < t.length && o < e.length && t.charCodeAt(o) === e.charCodeAt(o); o++) ;
        return o > i - 8 && 10 < o && (e = "..." + e.slice(o - 8), t = "..." + t.slice(o - 8)), qc(a) + os(e, i) + `
` + dn(a) + os(t, i) + `
`;
      }
      return La(a) + os(e, i) + `
`;
    }
    function hd(e) {
      return Object.prototype.toString.call(e).replace(/^\[object (.*)\]$/, function(t, a) {
        return a;
      });
    }
    function ss(e, t) {
      switch (typeof e) {
        case "string":
          return e = JSON.stringify(e), e.length > t ? 5 > t ? '"..."' : e.slice(0, t - 4) + '..."' : e;
        case "object":
          if (e === null) return "null";
          if (ql(e)) return "[...]";
          if (e.$$typeof === Qn)
            return (t = ke(e.type)) ? "<" + t + ">" : "<...>";
          var a = hd(e);
          if (a === "Object") {
            a = "", t -= 2;
            for (var i in e)
              if (e.hasOwnProperty(i)) {
                var o = JSON.stringify(i);
                if (o !== '"' + i + '"' && (i = o), t -= i.length - 2, o = ss(
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
    function vi(e, t) {
      return typeof e != "string" || m.test(e) ? "{" + ss(e, t - 2) + "}" : e.length > t - 2 ? 5 > t ? '"..."' : '"' + e.slice(0, t - 5) + '..."' : '"' + e + '"';
    }
    function Zo(e, t, a) {
      var i = 120 - a.length - e.length, o = [], f;
      for (f in t)
        if (t.hasOwnProperty(f) && f !== "children") {
          var d = vi(
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
    function gi(e, t, a) {
      var i = "", o = Fe({}, t), f;
      for (f in e)
        if (e.hasOwnProperty(f)) {
          delete o[f];
          var d = 120 - 2 * a - f.length - 2, h = ss(e[f], d);
          t.hasOwnProperty(f) ? (d = ss(t[f], d), i += qc(a) + f + ": " + h + `
`, i += dn(a) + f + ": " + d + `
`) : i += qc(a) + f + ": " + h + `
`;
        }
      for (var y in o)
        o.hasOwnProperty(y) && (e = ss(
          o[y],
          120 - 2 * a - y.length - 2
        ), i += dn(a) + y + ": " + e + `
`);
      return i;
    }
    function Un(e, t, a, i) {
      var o = "", f = /* @__PURE__ */ new Map();
      for (p in a)
        a.hasOwnProperty(p) && f.set(
          p.toLowerCase(),
          p
        );
      if (f.size === 1 && f.has("children"))
        o += Zo(
          e,
          t,
          La(i)
        );
      else {
        for (var d in t)
          if (t.hasOwnProperty(d) && d !== "children") {
            var h = 120 - 2 * (i + 1) - d.length - 1, y = f.get(d.toLowerCase());
            if (y !== void 0) {
              f.delete(d.toLowerCase());
              var p = t[d];
              y = a[y];
              var R = vi(
                p,
                h
              );
              h = vi(
                y,
                h
              ), typeof p == "object" && p !== null && typeof y == "object" && y !== null && hd(p) === "Object" && hd(y) === "Object" && (2 < Object.keys(p).length || 2 < Object.keys(y).length || -1 < R.indexOf("...") || -1 < h.indexOf("...")) ? o += La(i + 1) + d + `={{
` + gi(
                p,
                y,
                i + 2
              ) + La(i + 1) + `}}
` : (o += qc(i + 1) + d + "=" + R + `
`, o += dn(i + 1) + d + "=" + h + `
`);
            } else
              o += La(i + 1) + d + "=" + vi(t[d], h) + `
`;
          }
        f.forEach(function(D) {
          if (D !== "children") {
            var b = 120 - 2 * (i + 1) - D.length - 1;
            o += dn(i + 1) + D + "=" + vi(a[D], b) + `
`;
          }
        }), o = o === "" ? La(i) + "<" + e + `>
` : La(i) + "<" + e + `
` + o + La(i) + `>
`;
      }
      return e = a.children, t = t.children, typeof e == "string" || typeof e == "number" || typeof e == "bigint" ? (f = "", (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (f = "" + t), o += fs(f, "" + e, i + 1)) : (typeof t == "string" || typeof t == "number" || typeof t == "bigint") && (o = e == null ? o + fs("" + t, null, i + 1) : o + fs("" + t, void 0, i + 1)), o;
    }
    function Hm(e, t) {
      var a = Bc(e);
      if (a === null) {
        for (a = "", e = e.child; e; )
          a += Hm(e, t), e = e.sibling;
        return a;
      }
      return La(t) + "<" + a + `>
`;
    }
    function jm(e, t) {
      var a = Hl(e, t);
      if (a !== e && (e.children.length !== 1 || e.children[0] !== a))
        return La(t) + `...
` + jm(a, t + 1);
      a = "";
      var i = e.fiber._debugInfo;
      if (i)
        for (var o = 0; o < i.length; o++) {
          var f = i[o].name;
          typeof f == "string" && (a += La(t) + "<" + f + `>
`, t++);
        }
      if (i = "", o = e.fiber.pendingProps, e.fiber.tag === 6)
        i = fs(o, e.serverProps, t), t++;
      else if (f = Bc(e.fiber), f !== null)
        if (e.serverProps === void 0) {
          i = t;
          var d = 120 - 2 * i - f.length - 2, h = "";
          for (p in o)
            if (o.hasOwnProperty(p) && p !== "children") {
              var y = vi(o[p], 15);
              if (d -= p.length + y.length + 2, 0 > d) {
                h += " ...";
                break;
              }
              h += " " + p + "=" + y;
            }
          i = La(i) + "<" + f + h + `>
`, t++;
        } else
          e.serverProps === null ? (i = Zo(
            f,
            o,
            qc(t)
          ), t++) : typeof e.serverProps == "string" ? console.error(
            "Should not have matched a non HostText fiber to a Text node. This is a bug in React."
          ) : (i = Un(
            f,
            o,
            e.serverProps,
            t
          ), t++);
      var p = "";
      for (o = e.fiber.child, f = 0; o && f < e.children.length; )
        d = e.children[f], d.fiber === o ? (p += jm(d, t), f++) : p += Hm(o, t), o = o.sibling;
      for (o && 0 < e.children.length && (p += La(t) + `...
`), o = e.serverTail, e.serverProps === null && t--, e = 0; e < o.length; e++)
        f = o[e], p = typeof f == "string" ? p + (dn(t) + os(f, 120 - 2 * t) + `
`) : p + Zo(
          f.type,
          f.props,
          dn(t)
        );
      return a + i + p;
    }
    function rs(e) {
      try {
        return `

` + jm(e, 0);
      } catch {
        return "";
      }
    }
    function qm(e, t, a) {
      for (var i = t, o = null, f = 0; i; )
        i === e && (f = 0), o = {
          fiber: i,
          children: o !== null ? [o] : [],
          serverProps: i === t ? a : i === e ? null : void 0,
          serverTail: [],
          distanceFromLeaf: f
        }, f++, i = i.return;
      return o !== null ? rs(o).replaceAll(/^[+-]/gm, ">") : "";
    }
    function ds(e, t) {
      var a = Fe({}, e || F), i = { tag: t };
      return A.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), j.indexOf(t) !== -1 && (a.pTagInButtonScope = null), g.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), t === "#document" || t === "html" ? a.containerTagInScope = null : a.containerTagInScope || (a.containerTagInScope = i), e !== null || t !== "#document" && t !== "html" && t !== "body" ? a.implicitRootScope === !0 && (a.implicitRootScope = !1) : a.implicitRootScope = !0, a;
    }
    function Nv(e, t, a) {
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
          return K.indexOf(t) === -1;
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
    function xn(e, t) {
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
    function md(e, t) {
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
    function yd(e, t) {
      t = t || F;
      var a = t.current;
      if (t = (a = Nv(
        e,
        a && a.tag,
        t.implicitRootScope
      ) ? null : a) ? null : xn(e, t), t = a || t, !t) return !0;
      var i = t.tag;
      if (t = String(!!a) + "|" + e + "|" + i, B[t]) return !1;
      B[t] = !0;
      var o = (t = An) ? md(t.return, i) : null, f = t !== null && o !== null ? qm(o, t, null) : "", d = "<" + e + ">";
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
      ), t && (e = t.return, o === null || e === null || o === e && e._debugOwner === t._debugOwner || ue(o, function() {
        console.error(
          `<%s> cannot contain a nested %s.
See this log for the ancestor stack trace.`,
          i,
          d
        );
      })), !1;
    }
    function Jo(e, t, a) {
      if (a || Nv("#text", t, !1))
        return !0;
      if (a = "#text|" + t, B[a]) return !1;
      B[a] = !0;
      var i = (a = An) ? md(a, t) : null;
      return a = a !== null && i !== null ? qm(
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
    function Su(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    function Hv(e) {
      return e.replace(_, function(t, a) {
        return a.toUpperCase();
      });
    }
    function Bm(e, t, a) {
      var i = t.indexOf("--") === 0;
      i || (-1 < t.indexOf("-") ? W.hasOwnProperty(t) && W[t] || (W[t] = !0, console.error(
        "Unsupported style property %s. Did you mean %s?",
        t,
        Hv(t.replace(U, "ms-"))
      )) : Jt.test(t) ? W.hasOwnProperty(t) && W[t] || (W[t] = !0, console.error(
        "Unsupported vendor-prefixed style property %s. Did you mean %s?",
        t,
        t.charAt(0).toUpperCase() + t.slice(1)
      )) : !H.test(a) || Oe.hasOwnProperty(a) && Oe[a] || (Oe[a] = !0, console.error(
        `Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`,
        t,
        a.replace(H, "")
      )), typeof a == "number" && (isNaN(a) ? Rt || (Rt = !0, console.error(
        "`NaN` is an invalid value for the `%s` css style property.",
        t
      )) : isFinite(a) || be || (be = !0, console.error(
        "`Infinity` is an invalid value for the `%s` css style property.",
        t
      )))), a == null || typeof a == "boolean" || a === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Ke.has(t) ? t === "float" ? e.cssFloat = a : (kt(a, t), e[t] = ("" + a).trim()) : e[t] = a + "px";
    }
    function Yc(e, t, a) {
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
                for (var f = Q[o] || [o], d = 0; d < f.length; d++)
                  i[f[d]] = o;
          }
          for (var h in t)
            if (t.hasOwnProperty(h) && (!a || a[h] !== t[h]))
              for (o = Q[h] || [h], f = 0; f < o.length; f++)
                i[o[f]] = h;
          h = {};
          for (var y in t)
            for (o = Q[y] || [y], f = 0; f < o.length; f++)
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
        for (var D in a)
          !a.hasOwnProperty(D) || t != null && t.hasOwnProperty(D) || (D.indexOf("--") === 0 ? e.setProperty(D, "") : D === "float" ? e.cssFloat = "" : e[D] = "");
        for (var b in t)
          p = t[b], t.hasOwnProperty(b) && a[b] !== p && Bm(e, b, p);
      } else
        for (i in t)
          t.hasOwnProperty(i) && Bm(e, i, t[i]);
    }
    function hs(e) {
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
    function Ym(e) {
      return Tc.get(e) || e;
    }
    function jv(e, t) {
      if (ru.call(em, t) && em[t])
        return !0;
      if (IE.test(t)) {
        if (e = "aria-" + t.slice(4).toLowerCase(), e = E1.hasOwnProperty(e) ? e : null, e == null)
          return console.error(
            "Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.",
            t
          ), em[t] = !0;
        if (t !== e)
          return console.error(
            "Invalid ARIA attribute `%s`. Did you mean `%s`?",
            t,
            e
          ), em[t] = !0;
      }
      if (FE.test(t)) {
        if (e = t.toLowerCase(), e = E1.hasOwnProperty(e) ? e : null, e == null) return em[t] = !0, !1;
        t !== e && (console.error(
          "Unknown ARIA attribute `%s`. Did you mean `%s`?",
          t,
          e
        ), em[t] = !0);
      }
      return !0;
    }
    function Gm(e, t) {
      var a = [], i;
      for (i in t)
        jv(e, i) || a.push(i);
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
    function Jg(e, t, a, i) {
      if (ru.call(On, t) && On[t])
        return !0;
      var o = t.toLowerCase();
      if (o === "onfocusin" || o === "onfocusout")
        return console.error(
          "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."
        ), On[t] = !0;
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
          ), On[t] = !0;
        if (A1.test(t))
          return console.error(
            "Unknown event handler property `%s`. It will be ignored.",
            t
          ), On[t] = !0;
      } else if (A1.test(t))
        return PE.test(t) && console.error(
          "Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.",
          t
        ), On[t] = !0;
      if (eT.test(t) || tT.test(t)) return !0;
      if (o === "innerhtml")
        return console.error(
          "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."
        ), On[t] = !0;
      if (o === "aria")
        return console.error(
          "The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."
        ), On[t] = !0;
      if (o === "is" && a !== null && a !== void 0 && typeof a != "string")
        return console.error(
          "Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.",
          typeof a
        ), On[t] = !0;
      if (typeof a == "number" && isNaN(a))
        return console.error(
          "Received NaN for the `%s` attribute. If this is expected, cast the value to a string.",
          t
        ), On[t] = !0;
      if (Ph.hasOwnProperty(o)) {
        if (o = Ph[o], o !== t)
          return console.error(
            "Invalid DOM property `%s`. Did you mean `%s`?",
            t,
            o
          ), On[t] = !0;
      } else if (t !== o)
        return console.error(
          "React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.",
          t,
          o
        ), On[t] = !0;
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
              ), On[t] = !0);
          }
        case "function":
        case "symbol":
          return On[t] = !0, !1;
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
            ), On[t] = !0;
          }
      }
      return !0;
    }
    function Kg(e, t, a) {
      var i = [], o;
      for (o in t)
        Jg(e, o, t[o], a) || i.push(o);
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
    function ki(e) {
      return lT.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Il() {
    }
    function ms(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    function pd(e) {
      var t = ie(e);
      if (t && (e = t.stateNode)) {
        var a = e[Aa] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (cs(
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
              for (Xe(t, "name"), a = a.querySelectorAll(
                'input[name="' + al(
                  "" + t
                ) + '"][type="radio"]'
              ), t = 0; t < a.length; t++) {
                var i = a[t];
                if (i !== e && i.form === e.form) {
                  var o = i[Aa] || null;
                  if (!o)
                    throw Error(
                      "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported."
                    );
                  cs(
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
                i = a[t], i.form === e.form && pi(i);
            }
            break e;
          case "textarea":
            Qo(e, a.value, a.defaultValue);
            break e;
          case "select":
            t = a.value, t != null && $i(e, !!a.multiple, t, !1);
        }
      }
    }
    function Gc(e, t, a) {
      if (fS) return e(t, a);
      fS = !0;
      try {
        var i = e(t);
        return i;
      } finally {
        if (fS = !1, (tm !== null || lm !== null) && (ro(), tm && (t = tm, e = lm, lm = tm = null, pd(t), e)))
          for (t = 0; t < e.length; t++) pd(e[t]);
      }
    }
    function bu(e, t) {
      var a = e.stateNode;
      if (a === null) return null;
      var i = a[Aa] || null;
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
    function wm() {
      if (Z0) return Z0;
      var e, t = rS, a = t.length, i, o = "value" in Bf ? Bf.value : Bf.textContent, f = o.length;
      for (e = 0; e < a && t[e] === o[e]; e++) ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === o[f - i]; i++) ;
      return Z0 = o.slice(e, 1 < i ? 1 - i : void 0);
    }
    function Ko(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function ys() {
      return !0;
    }
    function $o() {
      return !1;
    }
    function pl(e) {
      function t(a, i, o, f, d) {
        this._reactName = a, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = d, this.currentTarget = null;
        for (var h in e)
          e.hasOwnProperty(h) && (a = e[h], this[h] = a ? a(f) : f[h]);
        return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? ys : $o, this.isPropagationStopped = $o, this;
      }
      return Fe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = ys);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = ys);
        },
        persist: function() {
        },
        isPersistent: ys
      }), t;
    }
    function Xm(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = yT[e]) ? !!t[e] : !1;
    }
    function wc() {
      return Xm;
    }
    function Si(e, t) {
      switch (e) {
        case "keyup":
          return _T.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== _1;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function vd(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    function gd(e, t) {
      switch (e) {
        case "compositionend":
          return vd(t);
        case "keypress":
          return t.which !== M1 ? null : (U1 = !0, C1);
        case "textInput":
          return e = t.data, e === C1 && U1 ? null : e;
        default:
          return null;
      }
    }
    function qv(e, t) {
      if (am)
        return e === "compositionend" || !yS && Si(e, t) ? (e = wm(), Z0 = rS = Bf = null, am = !1, e) : null;
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
    function ps(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!MT[e.type] : t === "textarea";
    }
    function Sd(e) {
      if (!Ac) return !1;
      e = "on" + e;
      var t = e in document;
      return t || (t = document.createElement("div"), t.setAttribute(e, "return;"), t = typeof t[e] == "function"), t;
    }
    function Vm(e, t, a, i) {
      tm ? lm ? lm.push(i) : lm = [i] : tm = i, t = Iu(t, "onChange"), 0 < t.length && (a = new J0(
        "onChange",
        "change",
        null,
        a,
        i
      ), e.push({ event: a, listeners: t }));
    }
    function Qa(e) {
      tn(e, 0);
    }
    function Eu(e) {
      var t = ye(e);
      if (pi(t)) return e;
    }
    function vs(e, t) {
      if (e === "change") return t;
    }
    function ko() {
      Gp && (Gp.detachEvent("onpropertychange", Bv), wp = Gp = null);
    }
    function Bv(e) {
      if (e.propertyName === "value" && Eu(wp)) {
        var t = [];
        Vm(
          t,
          wp,
          e,
          ms(e)
        ), Gc(Qa, t);
      }
    }
    function Lm(e, t, a) {
      e === "focusin" ? (ko(), Gp = t, wp = a, Gp.attachEvent("onpropertychange", Bv)) : e === "focusout" && ko();
    }
    function Qm(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Eu(wp);
    }
    function gs(e, t) {
      if (e === "click") return Eu(t);
    }
    function bd(e, t) {
      if (e === "input" || e === "change")
        return Eu(t);
    }
    function Yv(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    function Ss(e, t) {
      if (Rn(e, t)) return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length) return !1;
      for (i = 0; i < a.length; i++) {
        var o = a[i];
        if (!ru.call(t, o) || !Rn(e[o], t[o]))
          return !1;
      }
      return !0;
    }
    function Gv(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function wv(e, t) {
      var a = Gv(e);
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
        a = Gv(a);
      }
    }
    function Ed(e, t) {
      return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ed(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
    }
    function Xv(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = Cl(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = !1;
        }
        if (a) e = t.contentWindow;
        else break;
        t = Cl(e.document);
      }
      return t;
    }
    function Zm(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Vv(e, t, a) {
      var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      vS || nm == null || nm !== Cl(i) || (i = nm, "selectionStart" in i && Zm(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
        anchorNode: i.anchorNode,
        anchorOffset: i.anchorOffset,
        focusNode: i.focusNode,
        focusOffset: i.focusOffset
      }), Xp && Ss(Xp, i) || (Xp = i, i = Iu(pS, "onSelect"), 0 < i.length && (t = new J0(
        "onSelect",
        "select",
        null,
        t,
        a
      ), e.push({ event: t, listeners: i }), t.target = nm)));
    }
    function Xc(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    function Vc(e) {
      if (gS[e]) return gS[e];
      if (!um[e]) return e;
      var t = um[e], a;
      for (a in t)
        if (t.hasOwnProperty(a) && a in N1)
          return gS[e] = t[a];
      return e;
    }
    function Nn(e, t) {
      Y1.set(e, t), pt(t, [e]);
    }
    function $g(e) {
      for (var t = $0, a = 0; a < e.length; a++) {
        var i = e[a];
        if (typeof i == "object" && i !== null)
          if (ql(i) && i.length === 2 && typeof i[0] == "string") {
            if (t !== $0 && t !== AS)
              return ES;
            t = AS;
          } else return ES;
        else {
          if (typeof i == "function" || typeof i == "string" && 50 < i.length || t !== $0 && t !== TS)
            return ES;
          t = TS;
        }
      }
      return t;
    }
    function Jm(e, t, a, i) {
      for (var o in e)
        ru.call(e, o) && o[0] !== "_" && Tu(o, e[o], t, a, i);
    }
    function Tu(e, t, a, i, o) {
      switch (typeof t) {
        case "object":
          if (t === null) {
            t = "null";
            break;
          } else {
            if (t.$$typeof === Qn) {
              var f = ke(t.type) || "…", d = t.key;
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
              ]), d !== null && Tu(
                "key",
                d,
                a,
                i + 1,
                o
              ), e = !1;
              for (var p in t)
                p === "children" ? t.children != null && (!ql(t.children) || 0 < t.children.length) && (e = !0) : ru.call(t, p) && p[0] !== "_" && Tu(
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
              if (p = $g(t), p === TS || p === $0) {
                t = JSON.stringify(t);
                break;
              } else if (p === AS) {
                for (a.push([
                  o + "  ".repeat(i) + e,
                  ""
                ]), e = 0; e < t.length; e++)
                  f = t[e], Tu(
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
                if (f = a.length, Tu(
                  e,
                  t.value,
                  a,
                  i,
                  o
                ), a.length > f) {
                  a = a[f], a[1] = "Promise<" + (a[1] || "Object") + ">";
                  return;
                }
              } else if (t.status === "rejected" && (f = a.length, Tu(
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
            ]), 3 > i && Jm(t, a, i + 1, o);
            return;
          }
        case "function":
          t = t.name === "" ? "() => {}" : t.name + "() {}";
          break;
        case "string":
          t = t === qT ? "…" : JSON.stringify(t);
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
    function Lv(e, t, a, i) {
      var o = !0;
      for (d in e)
        d in t || (a.push([
          k0 + "  ".repeat(i) + d,
          "…"
        ]), o = !1);
      for (var f in t)
        if (f in e) {
          var d = e[f], h = t[f];
          if (d !== h) {
            if (i === 0 && f === "children")
              o = "  ".repeat(i) + f, a.push(
                [k0 + o, "…"],
                [W0 + o, "…"]
              );
            else {
              if (!(3 <= i)) {
                if (typeof d == "object" && typeof h == "object" && d !== null && h !== null && d.$$typeof === h.$$typeof)
                  if (h.$$typeof === Qn) {
                    if (d.type === h.type && d.key === h.key) {
                      d = ke(h.type) || "…", o = "  ".repeat(i) + f, d = "<" + d + " … />", a.push(
                        [k0 + o, d],
                        [W0 + o, d]
                      ), o = !1;
                      continue;
                    }
                  } else {
                    var y = Object.prototype.toString.call(d), p = Object.prototype.toString.call(h);
                    if (y === p && (p === "[object Object]" || p === "[object Array]")) {
                      y = [
                        X1 + "  ".repeat(i) + f,
                        p === "[object Array]" ? "Array" : ""
                      ], a.push(y), p = a.length, Lv(
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
                    X1 + "  ".repeat(i) + f,
                    d + " Referentially unequal function closure. Consider memoization."
                  ]);
                  continue;
                }
              }
              Tu(f, d, a, i, k0), Tu(f, h, a, i, W0);
            }
            o = !1;
          }
        } else
          a.push([
            W0 + "  ".repeat(i) + f,
            "…"
          ]), o = !1;
      return o;
    }
    function hn(e) {
      Et = e & 63 ? "Blocking" : e & 64 ? "Gesture" : e & 4194176 ? "Transition" : e & 62914560 ? "Suspense" : e & 2080374784 ? "Idle" : "Other";
    }
    function Au(e, t, a, i) {
      ol && (Gf.start = t, Gf.end = a, Ro.color = "warning", Ro.tooltipText = i, Ro.properties = null, (e = e._debugTask) ? e.run(
        performance.measure.bind(
          performance,
          i,
          Gf
        )
      ) : performance.measure(i, Gf));
    }
    function Td(e, t, a) {
      Au(e, t, a, "Reconnect");
    }
    function Ad(e, t, a, i, o) {
      var f = de(e);
      if (f !== null && ol) {
        var d = e.alternate, h = e.actualDuration;
        if (d === null || d.child !== e.child)
          for (var y = e.child; y !== null; y = y.sibling)
            h -= y.actualDuration;
        i = 0.5 > h ? i ? "tertiary-light" : "primary-light" : 10 > h ? i ? "tertiary" : "primary" : 100 > h ? i ? "tertiary-dark" : "primary-dark" : "error";
        var p = e.memoizedProps;
        h = e._debugTask, p !== null && d !== null && d.memoizedProps !== p ? (y = [BT], p = Lv(
          d.memoizedProps,
          p,
          y,
          0
        ), 1 < y.length && (p && !Yf && (d.lanes & o) === 0 && 100 < e.actualDuration ? (Yf = !0, y[0] = YT, Ro.color = "warning", Ro.tooltipText = V1) : (Ro.color = i, Ro.tooltipText = f), Ro.properties = y, Gf.start = t, Gf.end = a, h != null ? h.run(
          performance.measure.bind(
            performance,
            "​" + f,
            Gf
          )
        ) : performance.measure(
          "​" + f,
          Gf
        ))) : h != null ? h.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            ni,
            void 0,
            i
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          ni,
          void 0,
          i
        );
      }
    }
    function zd(e, t, a, i) {
      if (ol) {
        var o = de(e);
        if (o !== null) {
          for (var f = null, d = [], h = 0; h < i.length; h++) {
            var y = i[h];
            f == null && y.source !== null && (f = y.source._debugTask), y = y.value, d.push([
              "Error",
              typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y)
            ]);
          }
          e.key !== null && Tu("key", e.key, d, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, d, 0, ""), f == null && (f = e._debugTask), e = {
            start: t,
            end: a,
            detail: {
              devtools: {
                color: "error",
                track: ni,
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
    function zu(e, t, a, i, o) {
      if (o !== null) {
        if (ol) {
          var f = de(e);
          if (f !== null) {
            i = [];
            for (var d = 0; d < o.length; d++) {
              var h = o[d].value;
              i.push([
                "Error",
                typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h)
              ]);
            }
            e.key !== null && Tu("key", e.key, i, 0, ""), e.memoizedProps !== null && Jm(e.memoizedProps, i, 0, ""), t = {
              start: t,
              end: a,
              detail: {
                devtools: {
                  color: "error",
                  track: ni,
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
        f = de(e), f !== null && ol && (o = 1 > i ? "secondary-light" : 100 > i ? "secondary" : 500 > i ? "secondary-dark" : "error", (e = e._debugTask) ? e.run(
          console.timeStamp.bind(
            console,
            f,
            t,
            a,
            ni,
            void 0,
            o
          )
        ) : console.timeStamp(
          f,
          t,
          a,
          ni,
          void 0,
          o
        ));
    }
    function kg(e, t, a, i) {
      if (ol && !(t <= e)) {
        var o = (a & 738197653) === a ? "tertiary-dark" : "primary-dark";
        a = (a & 536870912) === a ? "Prepared" : (a & 201326741) === a ? "Hydrated" : "Render", i ? i.run(
          console.timeStamp.bind(
            console,
            a,
            e,
            t,
            Et,
            gt,
            o
          )
        ) : console.timeStamp(
          a,
          e,
          t,
          Et,
          gt,
          o
        );
      }
    }
    function Qv(e, t, a, i) {
      !ol || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Prewarm",
          e,
          t,
          Et,
          gt,
          a
        )
      ) : console.timeStamp(
        "Prewarm",
        e,
        t,
        Et,
        gt,
        a
      ));
    }
    function Zv(e, t, a, i) {
      !ol || t <= e || (a = (a & 738197653) === a ? "tertiary-dark" : "primary-dark", i ? i.run(
        console.timeStamp.bind(
          console,
          "Suspended",
          e,
          t,
          Et,
          gt,
          a
        )
      ) : console.timeStamp(
        "Suspended",
        e,
        t,
        Et,
        gt,
        a
      ));
    }
    function Wg(e, t, a, i, o, f) {
      if (ol && !(t <= e)) {
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
              track: Et,
              trackGroup: gt,
              tooltipText: o ? "Hydration Failed" : "Recovered after Error",
              properties: a
            }
          }
        }, f ? f.run(
          performance.measure.bind(performance, "Recovered", e)
        ) : performance.measure("Recovered", e);
      }
    }
    function Km(e, t, a, i) {
      !ol || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          "Errored",
          e,
          t,
          Et,
          gt,
          "error"
        )
      ) : console.timeStamp(
        "Errored",
        e,
        t,
        Et,
        gt,
        "error"
      ));
    }
    function Fg(e, t, a, i) {
      !ol || t <= e || (i ? i.run(
        console.timeStamp.bind(
          console,
          a,
          e,
          t,
          Et,
          gt,
          "secondary-light"
        )
      ) : console.timeStamp(
        a,
        e,
        t,
        Et,
        gt,
        "secondary-light"
      ));
    }
    function Jv(e, t, a, i, o) {
      if (ol && !(t <= e)) {
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
              track: Et,
              trackGroup: gt,
              tooltipText: i ? "Remaining Effects Errored" : "Commit Errored",
              properties: f
            }
          }
        }, o ? o.run(
          performance.measure.bind(performance, "Errored", e)
        ) : performance.measure("Errored", e);
      }
    }
    function $m(e, t, a) {
      !ol || t <= e || console.timeStamp(
        "Animating",
        e,
        t,
        Et,
        gt,
        "secondary-dark"
      );
    }
    function Wo() {
      for (var e = im, t = zS = im = 0; t < e; ) {
        var a = ui[t];
        ui[t++] = null;
        var i = ui[t];
        ui[t++] = null;
        var o = ui[t];
        ui[t++] = null;
        var f = ui[t];
        if (ui[t++] = null, i !== null && o !== null) {
          var d = i.pending;
          d === null ? o.next = o : (o.next = d.next, d.next = o), i.pending = o;
        }
        f !== 0 && Wm(a, o, f);
      }
    }
    function Wi(e, t, a, i) {
      ui[im++] = e, ui[im++] = t, ui[im++] = a, ui[im++] = i, zS |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
    }
    function km(e, t, a, i) {
      return Wi(e, t, a, i), bs(e);
    }
    function Pl(e, t) {
      return Wi(e, null, null, t), bs(e);
    }
    function Wm(e, t, a) {
      e.lanes |= a;
      var i = e.alternate;
      i !== null && (i.lanes |= a);
      for (var o = !1, f = e.return; f !== null; )
        f.childLanes |= a, i = f.alternate, i !== null && (i.childLanes |= a), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & Vp || (o = !0)), e = f, f = f.return;
      return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - ca(a), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = a | 536870912), f) : null;
    }
    function bs(e) {
      if (yv > eA)
        throw ad = yv = 0, pv = a1 = null, Error(
          "Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops."
        );
      ad > tA && (ad = 0, pv = null, console.error(
        "Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."
      )), e.alternate === null && (e.flags & 4098) !== 0 && Iy(e);
      for (var t = e, a = t.return; a !== null; )
        t.alternate === null && (t.flags & 4098) !== 0 && Iy(e), t = a, a = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    function Fi(e) {
      if (ii === null) return e;
      var t = ii(e);
      return t === void 0 ? e : t.current;
    }
    function Od(e) {
      if (ii === null) return e;
      var t = ii(e);
      return t === void 0 ? e != null && typeof e.render == "function" && (t = Fi(e.render), e.render !== t) ? (t = { $$typeof: Bi, render: t }, e.displayName !== void 0 && (t.displayName = e.displayName), t) : e : t.current;
    }
    function Lc(e, t) {
      if (ii === null) return !1;
      var a = e.elementType;
      t = t.type;
      var i = !1, o = typeof t == "object" && t !== null ? t.$$typeof : null;
      switch (e.tag) {
        case 1:
          typeof t == "function" && (i = !0);
          break;
        case 0:
          (typeof t == "function" || o === _l) && (i = !0);
          break;
        case 11:
          (o === Bi || o === _l) && (i = !0);
          break;
        case 14:
        case 15:
          (o === To || o === _l) && (i = !0);
          break;
        default:
          return !1;
      }
      return !!(i && (e = ii(a), e !== void 0 && e === ii(t)));
    }
    function Kv(e) {
      ii !== null && typeof WeakSet == "function" && (cm === null && (cm = /* @__PURE__ */ new WeakSet()), cm.add(e));
    }
    function $v(e, t, a) {
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
        if (ii === null)
          throw Error("Expected resolveFamily to be set during hot reload.");
        var p = !1;
        if (i = !1, y !== null && (y = ii(y), y !== void 0 && (a.has(y) ? i = !0 : t.has(y) && (h === 1 ? i = !0 : p = !0))), cm !== null && (cm.has(e) || o !== null && cm.has(o)) && (i = !0), i && (e._debugNeedsRemount = !0), (i || p) && (o = Pl(e, 2), o !== null && hl(o, e, 2)), f === null || i || $v(
          f,
          t,
          a
        ), d === null) break;
        e = d;
      } while (!0);
    }
    function Ig(e, t, a, i) {
      this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null, this.actualDuration = -0, this.actualStartTime = -1.1, this.treeBaseDuration = this.selfBaseDuration = -0, this._debugTask = this._debugStack = this._debugOwner = this._debugInfo = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, L1 || typeof Object.preventExtensions != "function" || Object.preventExtensions(this);
    }
    function Rd(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function Ou(e, t) {
      var a = e.alternate;
      switch (a === null ? (a = x(
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
          a.type = Fi(e.type);
          break;
        case 1:
          a.type = Fi(e.type);
          break;
        case 11:
          a.type = Od(e.type);
      }
      return a;
    }
    function Fo(e, t) {
      e.flags &= 65011714;
      var a = e.alternate;
      return a === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, t = a.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext,
        _debugThenableState: t._debugThenableState
      }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration), e;
    }
    function Qc(e, t, a, i, o, f) {
      var d = 0, h = e;
      if (typeof e == "function")
        Rd(e) && (d = 1), h = Fi(h);
      else if (typeof e == "string")
        d = I(), d = ot(e, a, d) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else
        e: switch (e) {
          case Op:
            return t = x(31, a, t, o), t.elementType = Op, t.lanes = f, t;
          case ia:
            return Ru(
              a.children,
              o,
              f,
              t
            );
          case xf:
            d = 8, o |= on, o |= Xi;
            break;
          case Yh:
            return e = a, i = o, typeof e.id != "string" && console.error(
              'Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.',
              typeof e.id
            ), t = x(12, e, t, i | et), t.elementType = Yh, t.lanes = f, t.stateNode = { effectDuration: 0, passiveEffectDuration: 0 }, t;
          case cn:
            return t = x(13, a, t, o), t.elementType = cn, t.lanes = f, t;
          case wh:
            return t = x(19, a, t, o), t.elementType = wh, t.lanes = f, t;
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case su:
                  d = 10;
                  break e;
                case Gh:
                  d = 9;
                  break e;
                case Bi:
                  d = 11, h = Od(h);
                  break e;
                case To:
                  d = 14;
                  break e;
                case _l:
                  d = 16, h = null;
                  break e;
              }
            h = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? a = "null" : ql(e) ? a = "array" : e !== void 0 && e.$$typeof === Qn ? (a = "<" + (ke(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : a = typeof e, (d = i ? zt(i) : null) && (h += `

Check the render method of \`` + d + "`."), d = 29, a = Error(
              "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (a + "." + h)
            ), h = null;
        }
      return t = x(d, a, t, o), t.elementType = e, t.type = h, t.lanes = f, t._debugOwner = i, t;
    }
    function _d(e, t, a) {
      return t = Qc(
        e.type,
        e.key,
        e.props,
        e._owner,
        t,
        a
      ), t._debugOwner = e._owner, t._debugStack = e._debugStack, t._debugTask = e._debugTask, t;
    }
    function Ru(e, t, a, i) {
      return e = x(7, e, i, t), e.lanes = a, e;
    }
    function Dd(e, t, a) {
      return e = x(6, e, null, t), e.lanes = a, e;
    }
    function Fm(e) {
      var t = x(18, null, null, Be);
      return t.stateNode = e, t;
    }
    function Es(e, t, a) {
      return t = x(
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
    function _a(e, t) {
      if (typeof e == "object" && e !== null) {
        var a = OS.get(e);
        return a !== void 0 ? a : (t = {
          value: e,
          source: t,
          stack: Pe(t)
        }, OS.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Pe(t)
      };
    }
    function _u(e, t) {
      Ii(), om[fm++] = Lp, om[fm++] = F0, F0 = e, Lp = t;
    }
    function Im(e, t, a) {
      Ii(), ci[oi++] = Do, ci[oi++] = Mo, ci[oi++] = Vr, Vr = e;
      var i = Do;
      e = Mo;
      var o = 32 - ca(i) - 1;
      i &= ~(1 << o), a += 1;
      var f = 32 - ca(t) + o;
      if (30 < f) {
        var d = o - o % 5;
        f = (i & (1 << d) - 1).toString(32), i >>= d, o -= d, Do = 1 << 32 - ca(t) + o | a << o | i, Mo = f + e;
      } else
        Do = 1 << f | a << o | i, Mo = e;
    }
    function Md(e) {
      Ii(), e.return !== null && (_u(e, 1), Im(e, 1, 0));
    }
    function Pm(e) {
      for (; e === F0; )
        F0 = om[--fm], om[fm] = null, Lp = om[--fm], om[fm] = null;
      for (; e === Vr; )
        Vr = ci[--oi], ci[oi] = null, Mo = ci[--oi], ci[oi] = null, Do = ci[--oi], ci[oi] = null;
    }
    function kv() {
      return Ii(), Vr !== null ? { id: Do, overflow: Mo } : null;
    }
    function Wv(e, t) {
      Ii(), ci[oi++] = Do, ci[oi++] = Mo, ci[oi++] = Vr, Do = t.id, Mo = t.overflow, Vr = e;
    }
    function Ii() {
      mt || console.error(
        "Expected to be hydrating. This is a bug in React. Please file an issue."
      );
    }
    function Zc(e, t) {
      if (e.return === null) {
        if (hu === null)
          hu = {
            fiber: e,
            children: [],
            serverProps: void 0,
            serverTail: [],
            distanceFromLeaf: t
          };
        else {
          if (hu.fiber !== e)
            throw Error(
              "Saw multiple hydration diff roots in a pass. This is a bug in React."
            );
          hu.distanceFromLeaf > t && (hu.distanceFromLeaf = t);
        }
        return hu;
      }
      var a = Zc(
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
    function Za() {
      mt && console.error(
        "We should not be hydrating here. This is a bug in React. Please file a bug."
      );
    }
    function Pi(e, t) {
      zc || (e = Zc(e, 0), e.serverProps = null, t !== null && (t = D0(t), e.serverTail.push(t)));
    }
    function bi(e) {
      var t = 1 < arguments.length && arguments[1] !== void 0 ? arguments[1] : !1, a = "", i = hu;
      throw i !== null && (hu = null, a = rs(i)), Du(
        _a(
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
    function ey(e) {
      var t = e.stateNode, a = e.type, i = e.memoizedProps;
      switch (t[fa] = e, t[Aa] = i, vc(a, i), a) {
        case "dialog":
          Le("cancel", t), Le("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          Le("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < vv.length; a++)
            Le(vv[a], t);
          break;
        case "source":
          Le("error", t);
          break;
        case "img":
        case "image":
        case "link":
          Le("error", t), Le("load", t);
          break;
        case "details":
          Le("toggle", t);
          break;
        case "input":
          Fl("input", i), Le("invalid", t), xc(t, i), xv(
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
          Nm(t, i);
          break;
        case "select":
          Fl("select", i), Le("invalid", t), Nc(t, i);
          break;
        case "textarea":
          Fl("textarea", i), Le("invalid", t), Hc(t, i), jc(
            t,
            i.value,
            i.defaultValue,
            i.children
          );
      }
      a = i.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || i.suppressHydrationWarning === !0 || vr(t.textContent, a) ? (i.popover != null && (Le("beforetoggle", t), Le("toggle", t)), i.onScroll != null && Le("scroll", t), i.onScrollEnd != null && Le("scrollend", t), i.onClick != null && (t.onclick = Il), t = !0) : t = !1, t || bi(e, !0);
    }
    function ty(e) {
      for (Ya = e.return; Ya; )
        switch (Ya.tag) {
          case 5:
          case 31:
          case 13:
            fi = !1;
            return;
          case 27:
          case 3:
            fi = !0;
            return;
          default:
            Ya = Ya.return;
        }
    }
    function Jc(e) {
      if (e !== Ya) return !1;
      if (!mt)
        return ty(e), mt = !0, !1;
      var t = e.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Sr(e.type, e.memoizedProps)), a = !a), a && fl) {
        for (a = fl; a; ) {
          var i = Zc(e, 0), o = D0(a);
          i.serverTail.push(o), a = o.type === "Suspense" ? Sc(a) : Tn(a.nextSibling);
        }
        bi(e);
      }
      if (ty(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        fl = Sc(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
          throw Error(
            "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
          );
        fl = Sc(e);
      } else
        t === 27 ? (t = fl, qi(e.type) ? (e = y1, y1 = null, fl = e) : fl = t) : fl = Ya ? Tn(e.stateNode.nextSibling) : null;
      return !0;
    }
    function Ei() {
      fl = Ya = null, zc = mt = !1;
    }
    function ly() {
      var e = Xf;
      return e !== null && (Cn === null ? Cn = e : Cn.push.apply(
        Cn,
        e
      ), Xf = null), e;
    }
    function Du(e) {
      Xf === null ? Xf = [e] : Xf.push(e);
    }
    function Ts() {
      var e = hu;
      if (e !== null) {
        hu = null;
        for (var t = rs(e); 0 < e.children.length; )
          e = e.children[0];
        ue(e.fiber, function() {
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
    function ec() {
      sm = I0 = null, rm = !1;
    }
    function Mu(e, t, a) {
      Ne(_S, t._currentValue, e), t._currentValue = a, Ne(DS, t._currentRenderer, e), t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Z1 && console.error(
        "Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."
      ), t._currentRenderer = Z1;
    }
    function Cu(e, t) {
      e._currentValue = _S.current;
      var a = DS.current;
      ze(DS, t), e._currentRenderer = a, ze(_S, t);
    }
    function Ti(e, t, a) {
      for (; e !== null; ) {
        var i = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === a) break;
        e = e.return;
      }
      e !== a && console.error(
        "Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function tc(e, t, a, i) {
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
                f.lanes |= a, h = f.alternate, h !== null && (h.lanes |= a), Ti(
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
          d.lanes |= a, f = d.alternate, f !== null && (f.lanes |= a), Ti(
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
    function lc(e, t, a, i) {
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
            Rn(o.pendingProps.value, d.value) || (e !== null ? e.push(h) : e = [h]);
          }
        } else if (o === Ur.current) {
          if (d = o.alternate, d === null)
            throw Error("Should have a current fiber. This is a bug in React.");
          d.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(Tv) : e = [Tv]);
        }
        o = o.return;
      }
      e !== null && tc(
        t,
        e,
        a,
        i
      ), t.flags |= 262144;
    }
    function As(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!Rn(
          e.context._currentValue,
          e.memoizedValue
        ))
          return !0;
        e = e.next;
      }
      return !1;
    }
    function mn(e) {
      I0 = e, sm = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ft(e) {
      return rm && console.error(
        "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
      ), ay(I0, e);
    }
    function zs(e, t) {
      return I0 === null && mn(e), ay(e, t);
    }
    function ay(e, t) {
      var a = t._currentValue;
      if (t = { context: t, memoizedValue: a, next: null }, sm === null) {
        if (e === null)
          throw Error(
            "Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."
          );
        sm = t, e.dependencies = {
          lanes: 0,
          firstContext: t,
          _debugThenableState: null
        }, e.flags |= 524288;
      } else sm = sm.next = t;
      return a;
    }
    function ny() {
      return {
        controller: new XT(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Kc(e) {
      e.controller.signal.aborted && console.warn(
        "A cache instance was retained after it was already freed. This likely indicates a bug in React."
      ), e.refCount++;
    }
    function Os(e) {
      e.refCount--, 0 > e.refCount && console.warn(
        "A cache instance was released after it was already freed. This likely indicates a bug in React."
      ), e.refCount === 0 && VT(LT, function() {
        e.controller.abort();
      });
    }
    function Pn(e, t, a) {
      (e & 127) !== 0 ? 0 > Oc && (Oc = Zl(), Zp = P0(t), MS = t, a != null && (CS = de(a)), (_t & (ra | pu)) !== Ra && (Dl = !0, Lf = Qp), e = Af(), t = Tf(), e !== dm || t !== Jp ? dm = -1.1 : t !== null && (Lf = Qp), Zr = e, Jp = t) : (e & 4194048) !== 0 && 0 > si && (si = Zl(), Kp = P0(t), J1 = t, a != null && (K1 = de(a)), 0 > No) && (e = Af(), t = Tf(), (e !== Zf || t !== Jr) && (Zf = -1.1), Qf = e, Jr = t);
    }
    function Fv(e) {
      if (0 > Oc) {
        Oc = Zl(), Zp = e._debugTask != null ? e._debugTask : null, (_t & (ra | pu)) !== Ra && (Lf = Qp);
        var t = Af(), a = Tf();
        t !== dm || a !== Jp ? dm = -1.1 : a !== null && (Lf = Qp), Zr = t, Jp = a;
      }
      0 > si && (si = Zl(), Kp = e._debugTask != null ? e._debugTask : null, 0 > No) && (e = Af(), t = Tf(), (e !== Zf || t !== Jr) && (Zf = -1.1), Qf = e, Jr = t);
    }
    function eu() {
      var e = Lr;
      return Lr = 0, e;
    }
    function Ja(e) {
      var t = Lr;
      return Lr = e, t;
    }
    function ac(e) {
      var t = Lr;
      return Lr += e, t;
    }
    function Da() {
      He = Me = -1.1;
    }
    function Vl() {
      var e = Me;
      return Me = -1.1, e;
    }
    function Ma(e) {
      0 <= e && (Me = e);
    }
    function yn() {
      var e = Al;
      return Al = -0, e;
    }
    function pn(e) {
      0 <= e && (Al = e);
    }
    function Hn() {
      var e = ml;
      return ml = null, e;
    }
    function ya() {
      var e = Dl;
      return Dl = !1, e;
    }
    function Cd(e) {
      _n = Zl(), 0 > e.actualStartTime && (e.actualStartTime = _n);
    }
    function Io(e) {
      if (0 <= _n) {
        var t = Zl() - _n;
        e.actualDuration += t, e.selfBaseDuration = t, _n = -1;
      }
    }
    function $c(e) {
      if (0 <= _n) {
        var t = Zl() - _n;
        e.actualDuration += t, _n = -1;
      }
    }
    function Uu() {
      if (0 <= _n) {
        var e = Zl(), t = e - _n;
        _n = -1, Lr += t, Al += t, He = e;
      }
    }
    function Ka(e) {
      ml === null && (ml = []), ml.push(e), Uo === null && (Uo = []), Uo.push(e);
    }
    function jn() {
      _n = Zl(), 0 > Me && (Me = _n);
    }
    function vn(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Iv(e, t) {
      if (kp === null) {
        var a = kp = [];
        xS = 0, Kr = Ot(), hm = {
          status: "pending",
          value: void 0,
          then: function(i) {
            a.push(i);
          }
        };
      }
      return xS++, t.then(Rs, Rs), t;
    }
    function Rs() {
      if (--xS === 0 && (-1 < si || (No = -1.1), kp !== null)) {
        hm !== null && (hm.status = "fulfilled");
        var e = kp;
        kp = null, Kr = 0, hm = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function kc(e, t) {
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
    function _s() {
      var e = $r.current;
      return e !== null ? e : tl.pooledCache;
    }
    function Ds(e, t) {
      t === null ? Ne($r, $r.current, e) : Ne($r, t.pool, e);
    }
    function Ud() {
      var e = _s();
      return e === null ? null : { parent: Ql._currentValue, pool: e };
    }
    function uy() {
      return { didWarnAboutUncachedPromise: !1, thenables: [] };
    }
    function gn(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function Wc(e, t, a) {
      Z.actQueue !== null && (Z.didUsePromise = !0);
      var i = e.thenables;
      if (a = i[a], a === void 0 ? i.push(t) : a !== t && (e.didWarnAboutUncachedPromise || (e.didWarnAboutUncachedPromise = !0, console.error(
        "A component was suspended by an uncached promise. Creating promises inside a Client Component or hook is not yet supported, except via a Suspense-compatible library or framework."
      )), t.then(Il, Il), t = a), t._debugInfo === void 0) {
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
          throw e = t.reason, Po(e), e;
        default:
          if (typeof t.status == "string")
            t.then(Il, Il);
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
              throw e = t.reason, Po(e), e;
          }
          throw Wr = t, lv = !0, mm;
      }
    }
    function Sn(e) {
      try {
        return $T(e);
      } catch (t) {
        throw t !== null && typeof t == "object" && typeof t.then == "function" ? (Wr = t, lv = !0, mm) : t;
      }
    }
    function Ms() {
      if (Wr === null)
        throw Error(
          "Expected a suspended thenable. This is a bug in React. Please file an issue."
        );
      var e = Wr;
      return Wr = null, lv = !1, e;
    }
    function Po(e) {
      if (e === mm || e === cg)
        throw Error(
          "Hooks are not supported inside an async component. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server."
        );
    }
    function Qt(e) {
      var t = tt;
      return e != null && (tt = t === null ? e : t.concat(e)), t;
    }
    function $a() {
      var e = tt;
      if (e != null) {
        for (var t = e.length - 1; 0 <= t; t--)
          if (e[t].name != null) {
            var a = e[t].debugTask;
            if (a != null) return a;
          }
      }
      return null;
    }
    function tu(e, t, a) {
      for (var i = Object.keys(e.props), o = 0; o < i.length; o++) {
        var f = i[o];
        if (f !== "children" && f !== "key") {
          t === null && (t = _d(e, a.mode, 0), t._debugInfo = tt, t.return = a), ue(
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
    function bn(e) {
      var t = av;
      return av += 1, ym === null && (ym = uy()), Wc(ym, e, t);
    }
    function ka(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function xu(e, t) {
      throw t.$$typeof === zp ? Error(
        `A React Element from an older version of React was rendered. This is not supported. It can happen if:
- Multiple copies of the "react" package is used.
- A library pre-bundled an old copy of "react" or "react/jsx-runtime".
- A compiler tries to "inline" JSX instead of using the runtime.`
      ) : (e = Object.prototype.toString.call(t), Error(
        "Objects are not valid as a React child (found: " + (e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e) + "). If you meant to render a collection of children, use an array instead."
      ));
    }
    function Cs(e, t) {
      var a = $a();
      a !== null ? a.run(
        xu.bind(null, e, t)
      ) : xu(e, t);
    }
    function xd(e, t) {
      var a = de(e) || "Component";
      hb[a] || (hb[a] = !0, t = t.displayName || t.name || "Component", e.tag === 3 ? console.error(
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
      var a = $a();
      a !== null ? a.run(
        xd.bind(null, e, t)
      ) : xd(e, t);
    }
    function iy(e, t) {
      var a = de(e) || "Component";
      mb[a] || (mb[a] = !0, t = String(t), e.tag === 3 ? console.error(
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
    function Ul(e, t) {
      var a = $a();
      a !== null ? a.run(
        iy.bind(null, e, t)
      ) : iy(e, t);
    }
    function It(e) {
      function t(S, T) {
        if (e) {
          var O = S.deletions;
          O === null ? (S.deletions = [T], S.flags |= 16) : O.push(T);
        }
      }
      function a(S, T) {
        if (!e) return null;
        for (; T !== null; )
          t(S, T), T = T.sibling;
        return null;
      }
      function i(S) {
        for (var T = /* @__PURE__ */ new Map(); S !== null; )
          S.key !== null ? T.set(S.key, S) : T.set(S.index, S), S = S.sibling;
        return T;
      }
      function o(S, T) {
        return S = Ou(S, T), S.index = 0, S.sibling = null, S;
      }
      function f(S, T, O) {
        return S.index = O, e ? (O = S.alternate, O !== null ? (O = O.index, O < T ? (S.flags |= 67108866, T) : O) : (S.flags |= 67108866, T)) : (S.flags |= 1048576, T);
      }
      function d(S) {
        return e && S.alternate === null && (S.flags |= 67108866), S;
      }
      function h(S, T, O, $) {
        return T === null || T.tag !== 6 ? (T = Dd(
          O,
          S.mode,
          $
        ), T.return = S, T._debugOwner = S, T._debugTask = S._debugTask, T._debugInfo = tt, T) : (T = o(T, O), T.return = S, T._debugInfo = tt, T);
      }
      function y(S, T, O, $) {
        var se = O.type;
        return se === ia ? (T = R(
          S,
          T,
          O.props.children,
          $,
          O.key
        ), tu(O, T, S), T) : T !== null && (T.elementType === se || Lc(T, O) || typeof se == "object" && se !== null && se.$$typeof === _l && Sn(se) === T.type) ? (T = o(T, O.props), ka(T, O), T.return = S, T._debugOwner = O._owner, T._debugInfo = tt, T) : (T = _d(O, S.mode, $), ka(T, O), T.return = S, T._debugInfo = tt, T);
      }
      function p(S, T, O, $) {
        return T === null || T.tag !== 4 || T.stateNode.containerInfo !== O.containerInfo || T.stateNode.implementation !== O.implementation ? (T = Es(O, S.mode, $), T.return = S, T._debugInfo = tt, T) : (T = o(T, O.children || []), T.return = S, T._debugInfo = tt, T);
      }
      function R(S, T, O, $, se) {
        return T === null || T.tag !== 7 ? (T = Ru(
          O,
          S.mode,
          $,
          se
        ), T.return = S, T._debugOwner = S, T._debugTask = S._debugTask, T._debugInfo = tt, T) : (T = o(T, O), T.return = S, T._debugInfo = tt, T);
      }
      function D(S, T, O) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
          return T = Dd(
            "" + T,
            S.mode,
            O
          ), T.return = S, T._debugOwner = S, T._debugTask = S._debugTask, T._debugInfo = tt, T;
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case Qn:
              return O = _d(
                T,
                S.mode,
                O
              ), ka(O, T), O.return = S, S = Qt(T._debugInfo), O._debugInfo = tt, tt = S, O;
            case Uf:
              return T = Es(
                T,
                S.mode,
                O
              ), T.return = S, T._debugInfo = tt, T;
            case _l:
              var $ = Qt(T._debugInfo);
              return T = Sn(T), S = D(S, T, O), tt = $, S;
          }
          if (ql(T) || At(T))
            return O = Ru(
              T,
              S.mode,
              O,
              null
            ), O.return = S, O._debugOwner = S, O._debugTask = S._debugTask, S = Qt(T._debugInfo), O._debugInfo = tt, tt = S, O;
          if (typeof T.then == "function")
            return $ = Qt(T._debugInfo), S = D(
              S,
              bn(T),
              O
            ), tt = $, S;
          if (T.$$typeof === su)
            return D(
              S,
              zs(S, T),
              O
            );
          Cs(S, T);
        }
        return typeof T == "function" && ef(S, T), typeof T == "symbol" && Ul(S, T), null;
      }
      function b(S, T, O, $) {
        var se = T !== null ? T.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
          return se !== null ? null : h(S, T, "" + O, $);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Qn:
              return O.key === se ? (se = Qt(O._debugInfo), S = y(
                S,
                T,
                O,
                $
              ), tt = se, S) : null;
            case Uf:
              return O.key === se ? p(S, T, O, $) : null;
            case _l:
              return se = Qt(O._debugInfo), O = Sn(O), S = b(
                S,
                T,
                O,
                $
              ), tt = se, S;
          }
          if (ql(O) || At(O))
            return se !== null ? null : (se = Qt(O._debugInfo), S = R(
              S,
              T,
              O,
              $,
              null
            ), tt = se, S);
          if (typeof O.then == "function")
            return se = Qt(O._debugInfo), S = b(
              S,
              T,
              bn(O),
              $
            ), tt = se, S;
          if (O.$$typeof === su)
            return b(
              S,
              T,
              zs(S, O),
              $
            );
          Cs(S, O);
        }
        return typeof O == "function" && ef(S, O), typeof O == "symbol" && Ul(S, O), null;
      }
      function Y(S, T, O, $, se) {
        if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
          return S = S.get(O) || null, h(T, S, "" + $, se);
        if (typeof $ == "object" && $ !== null) {
          switch ($.$$typeof) {
            case Qn:
              return O = S.get(
                $.key === null ? O : $.key
              ) || null, S = Qt($._debugInfo), T = y(
                T,
                O,
                $,
                se
              ), tt = S, T;
            case Uf:
              return S = S.get(
                $.key === null ? O : $.key
              ) || null, p(T, S, $, se);
            case _l:
              var we = Qt($._debugInfo);
              return $ = Sn($), T = Y(
                S,
                T,
                O,
                $,
                se
              ), tt = we, T;
          }
          if (ql($) || At($))
            return O = S.get(O) || null, S = Qt($._debugInfo), T = R(
              T,
              O,
              $,
              se,
              null
            ), tt = S, T;
          if (typeof $.then == "function")
            return we = Qt($._debugInfo), T = Y(
              S,
              T,
              O,
              bn($),
              se
            ), tt = we, T;
          if ($.$$typeof === su)
            return Y(
              S,
              T,
              O,
              zs(T, $),
              se
            );
          Cs(T, $);
        }
        return typeof $ == "function" && ef(T, $), typeof $ == "symbol" && Ul(T, $), null;
      }
      function oe(S, T, O, $) {
        if (typeof O != "object" || O === null) return $;
        switch (O.$$typeof) {
          case Qn:
          case Uf:
            ae(S, T, O);
            var se = O.key;
            if (typeof se != "string") break;
            if ($ === null) {
              $ = /* @__PURE__ */ new Set(), $.add(se);
              break;
            }
            if (!$.has(se)) {
              $.add(se);
              break;
            }
            ue(T, function() {
              console.error(
                "Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.",
                se
              );
            });
            break;
          case _l:
            O = Sn(O), oe(S, T, O, $);
        }
        return $;
      }
      function me(S, T, O, $) {
        for (var se = null, we = null, De = null, Ee = T, Ie = T = 0, sl = null; Ee !== null && Ie < O.length; Ie++) {
          Ee.index > Ie ? (sl = Ee, Ee = null) : sl = Ee.sibling;
          var Gl = b(
            S,
            Ee,
            O[Ie],
            $
          );
          if (Gl === null) {
            Ee === null && (Ee = sl);
            break;
          }
          se = oe(
            S,
            Gl,
            O[Ie],
            se
          ), e && Ee && Gl.alternate === null && t(S, Ee), T = f(Gl, T, Ie), De === null ? we = Gl : De.sibling = Gl, De = Gl, Ee = sl;
        }
        if (Ie === O.length)
          return a(S, Ee), mt && _u(S, Ie), we;
        if (Ee === null) {
          for (; Ie < O.length; Ie++)
            Ee = D(S, O[Ie], $), Ee !== null && (se = oe(
              S,
              Ee,
              O[Ie],
              se
            ), T = f(
              Ee,
              T,
              Ie
            ), De === null ? we = Ee : De.sibling = Ee, De = Ee);
          return mt && _u(S, Ie), we;
        }
        for (Ee = i(Ee); Ie < O.length; Ie++)
          sl = Y(
            Ee,
            S,
            Ie,
            O[Ie],
            $
          ), sl !== null && (se = oe(
            S,
            sl,
            O[Ie],
            se
          ), e && sl.alternate !== null && Ee.delete(
            sl.key === null ? Ie : sl.key
          ), T = f(
            sl,
            T,
            Ie
          ), De === null ? we = sl : De.sibling = sl, De = sl);
        return e && Ee.forEach(function(Xo) {
          return t(S, Xo);
        }), mt && _u(S, Ie), we;
      }
      function ul(S, T, O, $) {
        if (O == null)
          throw Error("An iterable object provided no iterator.");
        for (var se = null, we = null, De = T, Ee = T = 0, Ie = null, sl = null, Gl = O.next(); De !== null && !Gl.done; Ee++, Gl = O.next()) {
          De.index > Ee ? (Ie = De, De = null) : Ie = De.sibling;
          var Xo = b(S, De, Gl.value, $);
          if (Xo === null) {
            De === null && (De = Ie);
            break;
          }
          sl = oe(
            S,
            Xo,
            Gl.value,
            sl
          ), e && De && Xo.alternate === null && t(S, De), T = f(Xo, T, Ee), we === null ? se = Xo : we.sibling = Xo, we = Xo, De = Ie;
        }
        if (Gl.done)
          return a(S, De), mt && _u(S, Ee), se;
        if (De === null) {
          for (; !Gl.done; Ee++, Gl = O.next())
            De = D(S, Gl.value, $), De !== null && (sl = oe(
              S,
              De,
              Gl.value,
              sl
            ), T = f(
              De,
              T,
              Ee
            ), we === null ? se = De : we.sibling = De, we = De);
          return mt && _u(S, Ee), se;
        }
        for (De = i(De); !Gl.done; Ee++, Gl = O.next())
          Ie = Y(
            De,
            S,
            Ee,
            Gl.value,
            $
          ), Ie !== null && (sl = oe(
            S,
            Ie,
            Gl.value,
            sl
          ), e && Ie.alternate !== null && De.delete(
            Ie.key === null ? Ee : Ie.key
          ), T = f(
            Ie,
            T,
            Ee
          ), we === null ? se = Ie : we.sibling = Ie, we = Ie);
        return e && De.forEach(function(gA) {
          return t(S, gA);
        }), mt && _u(S, Ee), se;
      }
      function St(S, T, O, $) {
        if (typeof O == "object" && O !== null && O.type === ia && O.key === null && (tu(O, null, S), O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case Qn:
              var se = Qt(O._debugInfo);
              e: {
                for (var we = O.key; T !== null; ) {
                  if (T.key === we) {
                    if (we = O.type, we === ia) {
                      if (T.tag === 7) {
                        a(
                          S,
                          T.sibling
                        ), $ = o(
                          T,
                          O.props.children
                        ), $.return = S, $._debugOwner = O._owner, $._debugInfo = tt, tu(O, $, S), S = $;
                        break e;
                      }
                    } else if (T.elementType === we || Lc(
                      T,
                      O
                    ) || typeof we == "object" && we !== null && we.$$typeof === _l && Sn(we) === T.type) {
                      a(
                        S,
                        T.sibling
                      ), $ = o(T, O.props), ka($, O), $.return = S, $._debugOwner = O._owner, $._debugInfo = tt, S = $;
                      break e;
                    }
                    a(S, T);
                    break;
                  } else t(S, T);
                  T = T.sibling;
                }
                O.type === ia ? ($ = Ru(
                  O.props.children,
                  S.mode,
                  $,
                  O.key
                ), $.return = S, $._debugOwner = S, $._debugTask = S._debugTask, $._debugInfo = tt, tu(O, $, S), S = $) : ($ = _d(
                  O,
                  S.mode,
                  $
                ), ka($, O), $.return = S, $._debugInfo = tt, S = $);
              }
              return S = d(S), tt = se, S;
            case Uf:
              e: {
                for (se = O, O = se.key; T !== null; ) {
                  if (T.key === O)
                    if (T.tag === 4 && T.stateNode.containerInfo === se.containerInfo && T.stateNode.implementation === se.implementation) {
                      a(
                        S,
                        T.sibling
                      ), $ = o(
                        T,
                        se.children || []
                      ), $.return = S, S = $;
                      break e;
                    } else {
                      a(S, T);
                      break;
                    }
                  else t(S, T);
                  T = T.sibling;
                }
                $ = Es(
                  se,
                  S.mode,
                  $
                ), $.return = S, S = $;
              }
              return d(S);
            case _l:
              return se = Qt(O._debugInfo), O = Sn(O), S = St(
                S,
                T,
                O,
                $
              ), tt = se, S;
          }
          if (ql(O))
            return se = Qt(O._debugInfo), S = me(
              S,
              T,
              O,
              $
            ), tt = se, S;
          if (At(O)) {
            if (se = Qt(O._debugInfo), we = At(O), typeof we != "function")
              throw Error(
                "An object is not an iterable. This error is likely caused by a bug in React. Please file an issue."
              );
            var De = we.call(O);
            return De === O ? (S.tag !== 0 || Object.prototype.toString.call(S.type) !== "[object GeneratorFunction]" || Object.prototype.toString.call(De) !== "[object Generator]") && (rb || console.error(
              "Using Iterators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. You can also use an Iterable that can iterate multiple times over the same items."
            ), rb = !0) : O.entries !== we || qS || (console.error(
              "Using Maps as children is not supported. Use an array of keyed ReactElements instead."
            ), qS = !0), S = ul(
              S,
              T,
              De,
              $
            ), tt = se, S;
          }
          if (typeof O.then == "function")
            return se = Qt(O._debugInfo), S = St(
              S,
              T,
              bn(O),
              $
            ), tt = se, S;
          if (O.$$typeof === su)
            return St(
              S,
              T,
              zs(S, O),
              $
            );
          Cs(S, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (se = "" + O, T !== null && T.tag === 6 ? (a(
          S,
          T.sibling
        ), $ = o(T, se), $.return = S, S = $) : (a(S, T), $ = Dd(
          se,
          S.mode,
          $
        ), $.return = S, $._debugOwner = S, $._debugTask = S._debugTask, $._debugInfo = tt, S = $), d(S)) : (typeof O == "function" && ef(S, O), typeof O == "symbol" && Ul(S, O), a(S, T));
      }
      return function(S, T, O, $) {
        var se = tt;
        tt = null;
        try {
          av = 0;
          var we = St(
            S,
            T,
            O,
            $
          );
          return ym = null, we;
        } catch (sl) {
          if (sl === mm || sl === cg) throw sl;
          var De = x(29, sl, null, S.mode);
          De.lanes = $, De.return = S;
          var Ee = De._debugInfo = tt;
          if (De._debugOwner = S._debugOwner, De._debugTask = S._debugTask, Ee != null) {
            for (var Ie = Ee.length - 1; 0 <= Ie; Ie--)
              if (typeof Ee[Ie].stack == "string") {
                De._debugOwner = Ee[Ie], De._debugTask = Ee[Ie].debugTask;
                break;
              }
          }
          return De;
        } finally {
          tt = se;
        }
      };
    }
    function dt(e, t) {
      var a = ql(e);
      return e = !a && typeof At(e) == "function", a || e ? (a = a ? "array" : "iterable", console.error(
        "A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>",
        a,
        t,
        a
      ), !1) : !0;
    }
    function Nu(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, lanes: 0, hiddenCallbacks: null },
        callbacks: null
      };
    }
    function Wa(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Hu(e) {
      return {
        lane: e,
        tag: pb,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Ca(e, t, a) {
      var i = e.updateQueue;
      if (i === null) return null;
      if (i = i.shared, YS === i && !Sb) {
        var o = de(e);
        console.error(
          `An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback.

Please update the following component: %s`,
          o
        ), Sb = !0;
      }
      return (_t & ra) !== Ra ? (o = i.pending, o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = bs(e), Wm(e, null, a), t) : (Wi(e, i, t, a), bs(e));
    }
    function tf(e, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Cc(e, a);
      }
    }
    function Us(e, t) {
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
    function ju() {
      if (GS) {
        var e = hm;
        if (e !== null) throw e;
      }
    }
    function lu(e, t, a, i) {
      GS = !1;
      var o = e.updateQueue;
      Jf = !1, YS = o.shared;
      var f = o.firstBaseUpdate, d = o.lastBaseUpdate, h = o.shared.pending;
      if (h !== null) {
        o.shared.pending = null;
        var y = h, p = y.next;
        y.next = null, d === null ? f = p : d.next = p, d = y;
        var R = e.alternate;
        R !== null && (R = R.updateQueue, h = R.lastBaseUpdate, h !== d && (h === null ? R.firstBaseUpdate = p : h.next = p, R.lastBaseUpdate = y));
      }
      if (f !== null) {
        var D = o.baseState;
        d = 0, R = p = y = null, h = f;
        do {
          var b = h.lane & -536870913, Y = b !== h.lane;
          if (Y ? (lt & b) === b : (i & b) === b) {
            b !== 0 && b === Kr && (GS = !0), R !== null && (R = R.next = {
              lane: 0,
              tag: h.tag,
              payload: h.payload,
              callback: null,
              next: null
            });
            e: {
              b = e;
              var oe = h, me = t, ul = a;
              switch (oe.tag) {
                case vb:
                  if (oe = oe.payload, typeof oe == "function") {
                    rm = !0;
                    var St = oe.call(
                      ul,
                      D,
                      me
                    );
                    if (b.mode & on) {
                      re(!0);
                      try {
                        oe.call(ul, D, me);
                      } finally {
                        re(!1);
                      }
                    }
                    rm = !1, D = St;
                    break e;
                  }
                  D = oe;
                  break e;
                case BS:
                  b.flags = b.flags & -65537 | 128;
                case pb:
                  if (St = oe.payload, typeof St == "function") {
                    if (rm = !0, oe = St.call(
                      ul,
                      D,
                      me
                    ), b.mode & on) {
                      re(!0);
                      try {
                        St.call(ul, D, me);
                      } finally {
                        re(!1);
                      }
                    }
                    rm = !1;
                  } else oe = St;
                  if (oe == null) break e;
                  D = Fe({}, D, oe);
                  break e;
                case gb:
                  Jf = !0;
              }
            }
            b = h.callback, b !== null && (e.flags |= 64, Y && (e.flags |= 8192), Y = o.callbacks, Y === null ? o.callbacks = [b] : Y.push(b));
          } else
            Y = {
              lane: b,
              tag: h.tag,
              payload: h.payload,
              callback: h.callback,
              next: null
            }, R === null ? (p = R = Y, y = D) : R = R.next = Y, d |= b;
          if (h = h.next, h === null) {
            if (h = o.shared.pending, h === null)
              break;
            Y = h, h = Y.next, Y.next = null, o.lastBaseUpdate = Y, o.shared.pending = null;
          }
        } while (!0);
        R === null && (y = D), o.baseState = y, o.firstBaseUpdate = p, o.lastBaseUpdate = R, f === null && (o.shared.lanes = 0), kf |= d, e.lanes = d, e.memoizedState = D;
      }
      YS = null;
    }
    function Nd(e, t) {
      if (typeof e != "function")
        throw Error(
          "Invalid argument passed as callback. Expected a function. Instead received: " + e
        );
      e.call(t);
    }
    function xs(e, t) {
      var a = e.shared.hiddenCallbacks;
      if (a !== null)
        for (e.shared.hiddenCallbacks = null, e = 0; e < a.length; e++)
          Nd(a[e], t);
    }
    function Hd(e, t) {
      var a = e.callbacks;
      if (a !== null)
        for (e.callbacks = null, e = 0; e < a.length; e++)
          Nd(a[e], t);
    }
    function nc(e, t) {
      var a = _c;
      Ne(fg, a, e), Ne(pm, t, e), _c = a | t.baseLanes;
    }
    function au(e) {
      Ne(fg, _c, e), Ne(
        pm,
        pm.current,
        e
      );
    }
    function qu(e) {
      _c = fg.current, ze(pm, e), ze(fg, e);
    }
    function pa(e) {
      var t = e.alternate;
      Ne(
        Yl,
        Yl.current & vm,
        e
      ), Ne(mu, e, e), ri === null && (t === null || pm.current !== null || t.memoizedState !== null) && (ri = e);
    }
    function Ns(e) {
      Ne(Yl, Yl.current, e), Ne(mu, e, e), ri === null && (ri = e);
    }
    function jd(e) {
      e.tag === 22 ? (Ne(Yl, Yl.current, e), Ne(mu, e, e), ri === null && (ri = e)) : En(e);
    }
    function En(e) {
      Ne(Yl, Yl.current, e), Ne(
        mu,
        mu.current,
        e
      );
    }
    function va(e) {
      ze(mu, e), ri === e && (ri = null), ze(Yl, e);
    }
    function Bu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || op(a) || Oh(a)))
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
    function Re() {
      var e = X;
      hi === null ? hi = [e] : hi.push(e);
    }
    function P() {
      var e = X;
      if (hi !== null && (qo++, hi[qo] !== e)) {
        var t = de(Ge);
        if (!bb.has(t) && (bb.add(t), hi !== null)) {
          for (var a = "", i = 0; i <= qo; i++) {
            var o = hi[i], f = i === qo ? e : o;
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
    function Fc(e) {
      e == null || ql(e) || console.error(
        "%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.",
        X,
        typeof e
      );
    }
    function qd() {
      var e = de(Ge);
      Tb.has(e) || (Tb.add(e), console.error(
        "ReactDOM.useFormState has been renamed to React.useActionState. Please update %s to use React.useActionState.",
        e
      ));
    }
    function vl() {
      throw Error(
        `Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.`
      );
    }
    function cy(e, t) {
      if (iv) return !1;
      if (t === null)
        return console.error(
          "%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.",
          X
        ), !1;
      e.length !== t.length && console.error(
        `The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`,
        X,
        "[" + t.join(", ") + "]",
        "[" + e.join(", ") + "]"
      );
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Rn(e[a], t[a])) return !1;
      return !0;
    }
    function gl(e, t, a, i, o, f) {
      Ho = f, Ge = t, hi = e !== null ? e._debugHookTypes : null, qo = -1, iv = e !== null && e.type !== t.type, (Object.prototype.toString.call(a) === "[object AsyncFunction]" || Object.prototype.toString.call(a) === "[object AsyncGeneratorFunction]") && (f = de(Ge), wS.has(f) || (wS.add(f), console.error(
        "%s is an async Client Component. Only Server Components can be async at the moment. This error is often caused by accidentally adding `'use client'` to a module that was originally written for the server.",
        f === null ? "An unknown Component" : "<" + f + ">"
      ))), t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Z.H = e !== null && e.memoizedState !== null ? VS : hi !== null ? Ab : XS, Ir = f = (t.mode & on) !== Be;
      var d = NS(a, i, o);
      if (Ir = !1, Sm && (d = Ic(
        t,
        a,
        i,
        o
      )), f) {
        re(!0);
        try {
          d = Ic(
            t,
            a,
            i,
            o
          );
        } finally {
          re(!1);
        }
      }
      return Bd(e, t), d;
    }
    function Bd(e, t) {
      t._debugHookTypes = hi, t.dependencies === null ? jo !== null && (t.dependencies = {
        lanes: 0,
        firstContext: null,
        _debugThenableState: jo
      }) : t.dependencies._debugThenableState = jo, Z.H = cv;
      var a = el !== null && el.next !== null;
      if (Ho = 0, hi = X = Jl = el = Ge = null, qo = -1, e !== null && (e.flags & 65011712) !== (t.flags & 65011712) && console.error(
        "Internal React error: Expected static flag was missing. Please notify the React team."
      ), rg = !1, uv = 0, jo = null, a)
        throw Error(
          "Rendered fewer hooks than expected. This may be caused by an accidental early return statement."
        );
      e === null || Kl || (e = e.dependencies, e !== null && As(e) && (Kl = !0)), lv ? (lv = !1, e = !0) : e = !1, e && (t = de(t) || "Unknown", Eb.has(t) || wS.has(t) || (Eb.add(t), console.error(
        "`use` was called from inside a try/catch block. This is not allowed and can lead to unexpected behavior. To handle errors triggered by `use`, wrap your component in a error boundary."
      )));
    }
    function Ic(e, t, a, i) {
      Ge = e;
      var o = 0;
      do {
        if (Sm && (jo = null), uv = 0, Sm = !1, o >= WT)
          throw Error(
            "Too many re-renders. React limits the number of renders to prevent an infinite loop."
          );
        if (o += 1, iv = !1, Jl = el = null, e.updateQueue != null) {
          var f = e.updateQueue;
          f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
        }
        qo = -1, Z.H = zb, f = NS(t, a, i);
      } while (Sm);
      return f;
    }
    function Hs() {
      var e = Z.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? lf(t) : t, e = e.useState()[0], (el !== null ? el.memoizedState : null) !== e && (Ge.flags |= 1024), t;
    }
    function js() {
      var e = dg !== 0;
      return dg = 0, e;
    }
    function uc(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags = (t.mode & Xi) !== Be ? t.flags & -402655237 : t.flags & -2053, e.lanes &= ~a;
    }
    function ic(e) {
      if (rg) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rg = !1;
      }
      Ho = 0, hi = Jl = el = Ge = null, qo = -1, X = null, Sm = !1, uv = dg = 0, jo = null;
    }
    function Ua() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Jl === null ? Ge.memoizedState = Jl = e : Jl = Jl.next = e, Jl;
    }
    function xt() {
      if (el === null) {
        var e = Ge.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = el.next;
      var t = Jl === null ? Ge.memoizedState : Jl.next;
      if (t !== null)
        Jl = t, el = e;
      else {
        if (e === null)
          throw Ge.alternate === null ? Error(
            "Update hook called on initial render. This is likely a bug in React. Please file an issue."
          ) : Error("Rendered more hooks than during the previous render.");
        el = e, e = {
          memoizedState: el.memoizedState,
          baseState: el.baseState,
          baseQueue: el.baseQueue,
          queue: el.queue,
          next: null
        }, Jl === null ? Ge.memoizedState = Jl = e : Jl = Jl.next = e;
      }
      return Jl;
    }
    function Yd() {
      return { lastEffect: null, events: null, stores: null, memoCache: null };
    }
    function lf(e) {
      var t = uv;
      return uv += 1, jo === null && (jo = uy()), e = Wc(jo, e, t), t = Ge, (Jl === null ? t.memoizedState : Jl.next) === null && (t = t.alternate, Z.H = t !== null && t.memoizedState !== null ? VS : XS), e;
    }
    function Fa(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return lf(e);
        if (e.$$typeof === su) return Ft(e);
      }
      throw Error("An unsupported type was passed to use(): " + String(e));
    }
    function Ai(e) {
      var t = null, a = Ge.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var i = Ge.alternate;
        i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
          data: i.data.map(function(o) {
            return o.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = { data: [], index: 0 }), a === null && (a = Yd(), Ge.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0 || iv)
        for (a = t.data[t.index] = Array(e), i = 0; i < e; i++)
          a[i] = uS;
      else
        a.length !== e && console.error(
          "Expected a constant size argument for each invocation of useMemoCache. The previous cache was allocated with size %s but size %s was requested.",
          a.length,
          e
        );
      return t.index++, a;
    }
    function Ia(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Gd(e, t, a) {
      var i = Ua();
      if (a !== void 0) {
        var o = a(t);
        if (Ir) {
          re(!0);
          try {
            a(t);
          } finally {
            re(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = yy.bind(
        null,
        Ge,
        e
      ), [i.memoizedState, e];
    }
    function nu(e) {
      var t = xt();
      return qs(t, el, e);
    }
    function qs(e, t, a) {
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
          var D = p.lane & -536870913;
          if (D !== p.lane ? (lt & D) === D : (Ho & D) === D) {
            var b = p.revertLane;
            if (b === 0)
              y !== null && (y = y.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }), D === Kr && (R = !0);
            else if ((Ho & b) === b) {
              p = p.next, b === Kr && (R = !0);
              continue;
            } else
              D = {
                lane: 0,
                revertLane: p.revertLane,
                gesture: null,
                action: p.action,
                hasEagerState: p.hasEagerState,
                eagerState: p.eagerState,
                next: null
              }, y === null ? (h = y = D, d = f) : y = y.next = D, Ge.lanes |= b, kf |= b;
            D = p.action, Ir && a(f, D), f = p.hasEagerState ? p.eagerState : a(f, D);
          } else
            b = {
              lane: D,
              revertLane: p.revertLane,
              gesture: p.gesture,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null
            }, y === null ? (h = y = b, d = f) : y = y.next = b, Ge.lanes |= D, kf |= D;
          p = p.next;
        } while (p !== null && p !== t);
        if (y === null ? d = f : y.next = h, !Rn(f, e.memoizedState) && (Kl = !0, R && (a = hm, a !== null)))
          throw a;
        e.memoizedState = f, e.baseState = d, e.baseQueue = y, i.lastRenderedState = f;
      }
      return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
    }
    function cc(e) {
      var t = xt(), a = t.queue;
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
        Rn(f, t.memoizedState) || (Kl = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), a.lastRenderedState = f;
      }
      return [f, i];
    }
    function af(e, t, a) {
      var i = Ge, o = Ua();
      if (mt) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        var f = a();
        gm || f === a() || (console.error(
          "The result of getServerSnapshot should be cached to avoid an infinite loop"
        ), gm = !0);
      } else {
        if (f = t(), gm || (a = t(), Rn(f, a) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), gm = !0)), tl === null)
          throw Error(
            "Expected a work-in-progress root. This is a bug in React. Please file an issue."
          );
        (lt & 127) !== 0 || oy(i, t, f);
      }
      return o.memoizedState = f, a = { value: f, getSnapshot: t }, o.queue = a, Xs(
        fc.bind(null, i, a, e),
        [e]
      ), i.flags |= 2048, to(
        di | Mn,
        { destroy: void 0 },
        oc.bind(
          null,
          i,
          a,
          f,
          t
        ),
        null
      ), f;
    }
    function Bs(e, t, a) {
      var i = Ge, o = xt(), f = mt;
      if (f) {
        if (a === void 0)
          throw Error(
            "Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering."
          );
        a = a();
      } else if (a = t(), !gm) {
        var d = t();
        Rn(a, d) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), gm = !0);
      }
      (d = !Rn(
        (el || o).memoizedState,
        a
      )) && (o.memoizedState = a, Kl = !0), o = o.queue;
      var h = fc.bind(null, i, o, e);
      if (ea(2048, Mn, h, [e]), o.getSnapshot !== t || d || Jl !== null && Jl.memoizedState.tag & di) {
        if (i.flags |= 2048, to(
          di | Mn,
          { destroy: void 0 },
          oc.bind(
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
        f || (Ho & 127) !== 0 || oy(i, t, a);
      }
      return a;
    }
    function oy(e, t, a) {
      e.flags |= 16384, e = { getSnapshot: t, value: a }, t = Ge.updateQueue, t === null ? (t = Yd(), Ge.updateQueue = t, t.stores = [e]) : (a = t.stores, a === null ? t.stores = [e] : a.push(e));
    }
    function oc(e, t, a, i) {
      t.value = a, t.getSnapshot = i, fy(t) && sy(e);
    }
    function fc(e, t, a) {
      return a(function() {
        fy(t) && (Pn(2, "updateSyncExternalStore()", e), sy(e));
      });
    }
    function fy(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var a = t();
        return !Rn(e, a);
      } catch {
        return !0;
      }
    }
    function sy(e) {
      var t = Pl(e, 2);
      t !== null && hl(t, e, 2);
    }
    function sc(e) {
      var t = Ua();
      if (typeof e == "function") {
        var a = e;
        if (e = a(), Ir) {
          re(!0);
          try {
            a();
          } finally {
            re(!1);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ia,
        lastRenderedState: e
      }, t;
    }
    function Pc(e) {
      e = sc(e);
      var t = e.queue, a = Jd.bind(null, Ge, t);
      return t.dispatch = a, [e.memoizedState, a];
    }
    function nf(e) {
      var t = Ua();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = ta.bind(
        null,
        Ge,
        !0,
        a
      ), a.dispatch = t, [e, t];
    }
    function uf(e, t) {
      var a = xt();
      return Ys(a, el, e, t);
    }
    function Ys(e, t, a, i) {
      return e.baseState = a, qs(
        e,
        el,
        typeof i == "function" ? i : Ia
      );
    }
    function ry(e, t) {
      var a = xt();
      return el !== null ? Ys(a, el, e, t) : (a.baseState = e, [e, a.queue.dispatch]);
    }
    function eo(e, t, a, i, o) {
      if (il(e))
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
        Z.T !== null ? a(!0) : f.isTransition = !1, i(f), a = t.pending, a === null ? (f.next = t.pending = f, dy(t, f)) : (f.next = a.next, t.pending = a.next = f);
      }
    }
    function dy(e, t) {
      var a = t.action, i = t.payload, o = e.state;
      if (t.isTransition) {
        var f = Z.T, d = {};
        d._updatedFibers = /* @__PURE__ */ new Set(), Z.T = d;
        try {
          var h = a(o, i), y = Z.S;
          y !== null && y(d, h), zi(e, t, h);
        } catch (p) {
          Gs(e, t, p);
        } finally {
          f !== null && d.types !== null && (f.types !== null && f.types !== d.types && console.error(
            "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
          ), f.types = d.types), Z.T = f, f === null && d._updatedFibers && (e = d._updatedFibers.size, d._updatedFibers.clear(), 10 < e && console.warn(
            "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
          ));
        }
      } else
        try {
          d = a(o, i), zi(e, t, d);
        } catch (p) {
          Gs(e, t, p);
        }
    }
    function zi(e, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? (Z.asyncTransitions++, a.then(Di, Di), a.then(
        function(i) {
          wd(e, t, i);
        },
        function(i) {
          return Gs(e, t, i);
        }
      ), t.isTransition || console.error(
        "An async function with useActionState was called outside of a transition. This is likely not what you intended (for example, isPending will not update correctly). Either call the returned function inside startTransition, or pass it to an `action` or `formAction` prop."
      )) : wd(e, t, a);
    }
    function wd(e, t, a) {
      t.status = "fulfilled", t.value = a, Oi(t), e.state = a, t = e.pending, t !== null && (a = t.next, a === t ? e.pending = null : (a = a.next, t.next = a, dy(e, a)));
    }
    function Gs(e, t, a) {
      var i = e.pending;
      if (e.pending = null, i !== null) {
        i = i.next;
        do
          t.status = "rejected", t.reason = a, Oi(t), t = t.next;
        while (t !== i);
      }
      e.action = null;
    }
    function Oi(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ri(e, t) {
      return t;
    }
    function Yu(e, t) {
      if (mt) {
        var a = tl.formState;
        if (a !== null) {
          e: {
            var i = Ge;
            if (mt) {
              if (fl) {
                t: {
                  for (var o = fl, f = fi; o.nodeType !== 8; ) {
                    if (!f) {
                      o = null;
                      break t;
                    }
                    if (o = Tn(
                      o.nextSibling
                    ), o === null) {
                      o = null;
                      break t;
                    }
                  }
                  f = o.data, o = f === r1 || f === fE ? o : null;
                }
                if (o) {
                  fl = Tn(
                    o.nextSibling
                  ), i = o.data === r1;
                  break e;
                }
              }
              bi(i);
            }
            i = !1;
          }
          i && (t = a[0]);
        }
      }
      return a = Ua(), a.memoizedState = a.baseState = t, i = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ri,
        lastRenderedState: t
      }, a.queue = i, a = Jd.bind(
        null,
        Ge,
        i
      ), i.dispatch = a, i = sc(!1), f = ta.bind(
        null,
        Ge,
        !1,
        i.queue
      ), i = Ua(), o = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, i.queue = o, a = eo.bind(
        null,
        Ge,
        o,
        f,
        a
      ), o.dispatch = a, i.memoizedState = e, [t, a, !1];
    }
    function cf(e) {
      var t = xt();
      return Xd(t, el, e);
    }
    function Xd(e, t, a) {
      if (t = qs(
        e,
        t,
        Ri
      )[0], e = nu(Ia)[0], typeof t == "object" && t !== null && typeof t.then == "function")
        try {
          var i = lf(t);
        } catch (d) {
          throw d === mm ? cg : d;
        }
      else i = t;
      t = xt();
      var o = t.queue, f = o.dispatch;
      return a !== t.memoizedState && (Ge.flags |= 2048, to(
        di | Mn,
        { destroy: void 0 },
        ws.bind(null, o, a),
        null
      )), [i, f, e];
    }
    function ws(e, t) {
      e.action = t;
    }
    function rc(e) {
      var t = xt(), a = el;
      if (a !== null)
        return Xd(t, a, e);
      xt(), t = t.memoizedState, a = xt();
      var i = a.queue.dispatch;
      return a.memoizedState = e, [t, i, !1];
    }
    function to(e, t, a, i) {
      return e = { tag: e, create: a, deps: i, inst: t, next: null }, t = Ge.updateQueue, t === null && (t = Yd(), Ge.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = e.next = e : (i = a.next, a.next = e, e.next = i, t.lastEffect = e), e;
    }
    function Vd(e) {
      var t = Ua();
      return e = { current: e }, t.memoizedState = e;
    }
    function qn(e, t, a, i) {
      var o = Ua();
      Ge.flags |= e, o.memoizedState = to(
        di | t,
        { destroy: void 0 },
        a,
        i === void 0 ? null : i
      );
    }
    function ea(e, t, a, i) {
      var o = xt();
      i = i === void 0 ? null : i;
      var f = o.memoizedState.inst;
      el !== null && i !== null && cy(i, el.memoizedState.deps) ? o.memoizedState = to(t, f, a, i) : (Ge.flags |= e, o.memoizedState = to(
        di | t,
        f,
        a,
        i
      ));
    }
    function Xs(e, t) {
      (Ge.mode & Xi) !== Be ? qn(276826112, Mn, e, t) : qn(8390656, Mn, e, t);
    }
    function hy(e) {
      Ge.flags |= 4;
      var t = Ge.updateQueue;
      if (t === null)
        t = Yd(), Ge.updateQueue = t, t.events = [e];
      else {
        var a = t.events;
        a === null ? t.events = [e] : a.push(e);
      }
    }
    function Vs(e) {
      var t = Ua(), a = { impl: e };
      return t.memoizedState = a, function() {
        if ((_t & ra) !== Ra)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return a.impl.apply(void 0, arguments);
      };
    }
    function ga(e) {
      var t = xt().memoizedState;
      return hy({ ref: t, nextImpl: e }), function() {
        if ((_t & ra) !== Ra)
          throw Error(
            "A function wrapped in useEffectEvent can't be called during rendering."
          );
        return t.impl.apply(void 0, arguments);
      };
    }
    function Pa(e, t) {
      var a = 4194308;
      return (Ge.mode & Xi) !== Be && (a |= 134217728), qn(a, yu, e, t);
    }
    function _i(e, t) {
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
    function Ls(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null;
      var i = 4194308;
      (Ge.mode & Xi) !== Be && (i |= 134217728), qn(
        i,
        yu,
        _i.bind(null, t, e),
        a
      );
    }
    function Qs(e, t, a) {
      typeof t != "function" && console.error(
        "Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.",
        t !== null ? typeof t : "null"
      ), a = a != null ? a.concat([e]) : null, ea(
        4,
        yu,
        _i.bind(null, t, e),
        a
      );
    }
    function Gu(e, t) {
      return Ua().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    }
    function Sa(e, t) {
      var a = xt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      return t !== null && cy(t, i[1]) ? i[0] : (a.memoizedState = [e, t], e);
    }
    function rl(e, t) {
      var a = Ua();
      t = t === void 0 ? null : t;
      var i = e();
      if (Ir) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function lo(e, t) {
      var a = xt();
      t = t === void 0 ? null : t;
      var i = a.memoizedState;
      if (t !== null && cy(t, i[1]))
        return i[0];
      if (i = e(), Ir) {
        re(!0);
        try {
          e();
        } finally {
          re(!1);
        }
      }
      return a.memoizedState = [i, t], i;
    }
    function uu(e, t) {
      var a = Ua();
      return Sl(a, e, t);
    }
    function Je(e, t) {
      var a = xt();
      return Zs(
        a,
        el.memoizedState,
        e,
        t
      );
    }
    function Gt(e, t) {
      var a = xt();
      return el === null ? Sl(a, e, t) : Zs(
        a,
        el.memoizedState,
        e,
        t
      );
    }
    function Sl(e, t, a) {
      return a === void 0 || (Ho & 1073741824) !== 0 && (lt & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = a, e = Pt(), Ge.lanes |= e, kf |= e, a);
    }
    function Zs(e, t, a, i) {
      return Rn(a, t) ? a : pm.current !== null ? (e = Sl(e, a, i), Rn(e, t) || (Kl = !0), e) : (Ho & 42) === 0 || (Ho & 1073741824) !== 0 && (lt & 261930) === 0 ? (Kl = !0, e.memoizedState = a) : (e = Pt(), Ge.lanes |= e, kf |= e, t);
    }
    function Di() {
      Z.asyncTransitions--;
    }
    function dc(e, t, a, i, o) {
      var f = Ht.p;
      Ht.p = f !== 0 && f < oa ? f : oa;
      var d = Z.T, h = {};
      h._updatedFibers = /* @__PURE__ */ new Set(), Z.T = h, ta(e, !1, t, a);
      try {
        var y = o(), p = Z.S;
        if (p !== null && p(h, y), y !== null && typeof y == "object" && typeof y.then == "function") {
          Z.asyncTransitions++, y.then(Di, Di);
          var R = kc(
            y,
            i
          );
          no(
            e,
            t,
            R,
            na(e)
          );
        } else
          no(
            e,
            t,
            i,
            na(e)
          );
      } catch (D) {
        no(
          e,
          t,
          { then: function() {
          }, status: "rejected", reason: D },
          na(e)
        );
      } finally {
        Ht.p = f, d !== null && h.types !== null && (d.types !== null && d.types !== h.types && console.error(
          "We expected inner Transitions to have transferred the outer types set and that you cannot add to the outer Transition while inside the inner.This is a bug in React."
        ), d.types = h.types), Z.T = d, d === null && h._updatedFibers && (e = h._updatedFibers.size, h._updatedFibers.clear(), 10 < e && console.warn(
          "Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."
        ));
      }
    }
    function of(e, t, a, i) {
      if (e.tag !== 5)
        throw Error(
          "Expected the form instance to be a HostComponent. This is a bug in React."
        );
      var o = ff(e).queue;
      Fv(e), dc(
        e,
        o,
        t,
        fd,
        a === null ? Ce : function() {
          return ao(e), a(i);
        }
      );
    }
    function ff(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: fd,
        baseState: fd,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ia,
          lastRenderedState: fd
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
          lastRenderedReducer: Ia,
          lastRenderedState: a
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function ao(e) {
      Z.T === null && console.error(
        "requestFormReset was called outside a transition or action. To fix, move to an action, or wrap with startTransition."
      );
      var t = ff(e);
      t.next === null && (t = e.alternate.memoizedState), no(
        e,
        t.next.queue,
        {},
        na(e)
      );
    }
    function my() {
      var e = sc(!1);
      return e = dc.bind(
        null,
        Ge,
        e.queue,
        !0,
        !1
      ), Ua().memoizedState = e, [!1, e];
    }
    function dl() {
      var e = nu(Ia)[0], t = xt().memoizedState;
      return [
        typeof e == "boolean" ? e : lf(e),
        t
      ];
    }
    function Ld() {
      var e = cc(Ia)[0], t = xt().memoizedState;
      return [
        typeof e == "boolean" ? e : lf(e),
        t
      ];
    }
    function Mi() {
      return Ft(Tv);
    }
    function Qd() {
      var e = Ua(), t = tl.identifierPrefix;
      if (mt) {
        var a = Mo, i = Do;
        a = (i & ~(1 << 32 - ca(i) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = dg++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = kT++, t = "_" + t + "r_" + a.toString(32) + "_";
      return e.memoizedState = t;
    }
    function Zd() {
      return Ua().memoizedState = Pg.bind(
        null,
        Ge
      );
    }
    function Pg(e, t) {
      for (var a = e.return; a !== null; ) {
        switch (a.tag) {
          case 24:
          case 3:
            var i = na(a), o = Hu(i), f = Ca(a, o, i);
            f !== null && (Pn(i, "refresh()", e), hl(f, a, i), tf(f, a, i)), e = ny(), t != null && f !== null && console.error(
              "The seed argument is not enabled outside experimental channels."
            ), o.payload = { cache: e };
            return;
        }
        a = a.return;
      }
    }
    function yy(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e);
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      il(e) ? Js(t, o) : (o = km(e, t, o, i), o !== null && (Pn(i, "dispatch()", e), hl(o, e, i), sf(o, t, i)));
    }
    function Jd(e, t, a) {
      var i = arguments;
      typeof i[3] == "function" && console.error(
        "State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect()."
      ), i = na(e), no(e, t, a, i) && Pn(i, "setState()", e);
    }
    function no(e, t, a, i) {
      var o = {
        lane: i,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (il(e)) Js(t, o);
      else {
        var f = e.alternate;
        if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) {
          var d = Z.H;
          Z.H = Li;
          try {
            var h = t.lastRenderedState, y = f(h, a);
            if (o.hasEagerState = !0, o.eagerState = y, Rn(y, h))
              return Wi(e, t, o, 0), tl === null && Wo(), !1;
          } catch {
          } finally {
            Z.H = d;
          }
        }
        if (a = km(e, t, o, i), a !== null)
          return hl(a, e, i), sf(a, t, i), !0;
      }
      return !1;
    }
    function ta(e, t, a, i) {
      if (Z.T === null && Kr === 0 && console.error(
        "An optimistic state update occurred outside a transition or action. To fix, move the update to an action, or wrap with startTransition."
      ), i = {
        lane: 2,
        revertLane: Ot(),
        gesture: null,
        action: i,
        hasEagerState: !1,
        eagerState: null,
        next: null
      }, il(e)) {
        if (t)
          throw Error("Cannot update optimistic state while rendering.");
        console.error("Cannot call startTransition while rendering.");
      } else
        t = km(
          e,
          a,
          i,
          2
        ), t !== null && (Pn(2, "setOptimistic()", e), hl(t, e, 2));
    }
    function il(e) {
      var t = e.alternate;
      return e === Ge || t !== null && t === Ge;
    }
    function Js(e, t) {
      Sm = rg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function sf(e, t, a) {
      if ((a & 4194048) !== 0) {
        var i = t.lanes;
        i &= e.pendingLanes, a |= i, t.lanes = a, Cc(e, a);
      }
    }
    function rf(e) {
      if (e !== null && typeof e != "function") {
        var t = String(e);
        jb.has(t) || (jb.add(t), console.error(
          "Expected the last optional `callback` argument to be a function. Instead received: %s.",
          e
        ));
      }
    }
    function Ks(e, t, a, i) {
      var o = e.memoizedState, f = a(i, o);
      if (e.mode & on) {
        re(!0);
        try {
          f = a(i, o);
        } finally {
          re(!1);
        }
      }
      f === void 0 && (t = ke(t) || "Component", Ub.has(t) || (Ub.add(t), console.error(
        "%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.",
        t
      ))), o = f == null ? o : Fe({}, o, f), e.memoizedState = o, e.lanes === 0 && (e.updateQueue.baseState = o);
    }
    function wu(e, t, a, i, o, f, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        if (a = h.shouldComponentUpdate(
          i,
          f,
          d
        ), e.mode & on) {
          re(!0);
          try {
            a = h.shouldComponentUpdate(
              i,
              f,
              d
            );
          } finally {
            re(!1);
          }
        }
        return a === void 0 && console.error(
          "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",
          ke(t) || "Component"
        ), a;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Ss(a, i) || !Ss(o, f) : !0;
    }
    function $s(e, t, a, i) {
      var o = t.state;
      typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== o && (e = de(e) || "Component", Rb.has(e) || (Rb.add(e), console.error(
        "%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
        e
      )), LS.enqueueReplaceState(
        t,
        t.state,
        null
      ));
    }
    function Ci(e, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var i in t)
          i !== "ref" && (a[i] = t[i]);
      }
      if (e = e.defaultProps) {
        a === t && (a = Fe({}, a));
        for (var o in e)
          a[o] === void 0 && (a[o] = e[o]);
      }
      return a;
    }
    function Kd(e) {
      bS(e), console.warn(
        `%s

%s
`,
        bm ? "An error occurred in the <" + bm + "> component." : "An error occurred in one of your React components.",
        `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://react.dev/link/error-boundaries to learn more about error boundaries.`
      );
    }
    function py(e) {
      var t = bm ? "The above error occurred in the <" + bm + "> component." : "The above error occurred in one of your React components.", a = "React will try to recreate this component tree from scratch using the error boundary you provided, " + ((QS || "Anonymous") + ".");
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
          vE + " " + e[0],
          gE,
          Bg + i + Bg,
          SE
        ) : e.splice(
          0,
          0,
          vE,
          gE,
          Bg + i + Bg,
          SE
        ), e.unshift(console), i = pA.apply(console.error, e), i();
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
    function vy(e) {
      bS(e);
    }
    function ks(e, t) {
      try {
        bm = t.source ? de(t.source) : null, QS = null;
        var a = t.value;
        if (Z.actQueue !== null)
          Z.thrownErrors.push(a);
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
    function gy(e, t, a) {
      try {
        bm = a.source ? de(a.source) : null, QS = de(t);
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
    function $d(e, t, a) {
      return a = Hu(a), a.tag = BS, a.payload = { element: null }, a.callback = function() {
        ue(t.source, ks, e, t);
      }, a;
    }
    function kd(e) {
      return e = Hu(e), e.tag = BS, e;
    }
    function Ws(e, t, a, i) {
      var o = a.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var f = i.value;
        e.payload = function() {
          return o(f);
        }, e.callback = function() {
          Kv(a), ue(
            i.source,
            gy,
            t,
            a,
            i
          );
        };
      }
      var d = a.stateNode;
      d !== null && typeof d.componentDidCatch == "function" && (e.callback = function() {
        Kv(a), ue(
          i.source,
          gy,
          t,
          a,
          i
        ), typeof o != "function" && (Ff === null ? Ff = /* @__PURE__ */ new Set([this]) : Ff.add(this)), ZT(this, i), typeof o == "function" || (a.lanes & 2) === 0 && console.error(
          "%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.",
          de(a) || "Unknown"
        );
      });
    }
    function Pv(e, t, a, i, o) {
      if (a.flags |= 32768, Kn && Wu(e, o), i !== null && typeof i == "object" && typeof i.then == "function") {
        if (t = a.alternate, t !== null && lc(
          t,
          a,
          o,
          !0
        ), mt && (zc = !0), a = mu.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return ri === null ? ho() : a.alternate === null && zl === Yo && (zl = yg), a.flags &= -257, a.flags |= 65536, a.lanes = o, i === og ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), Ea(e, i, o)), !1;
            case 22:
              return a.flags |= 65536, i === og ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([i])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : a.add(i)), Ea(e, i, o)), !1;
          }
          throw Error(
            "Unexpected Suspense handler tag (" + a.tag + "). This is a bug in React."
          );
        }
        return Ea(e, i, o), ho(), !1;
      }
      if (mt)
        return zc = !0, t = mu.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== RS && Du(
          _a(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering from the nearest Suspense boundary.",
              { cause: i }
            ),
            a
          )
        )) : (i !== RS && Du(
          _a(
            Error(
              "There was an error while hydrating but React was able to recover by instead client rendering the entire root.",
              { cause: i }
            ),
            a
          )
        ), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = _a(i, a), o = $d(
          e.stateNode,
          i,
          o
        ), Us(e, o), zl !== Kf && (zl = Pr)), !1;
      var f = _a(
        Error(
          "There was an error during concurrent rendering but React was able to recover by instead synchronously rendering the entire root.",
          { cause: i }
        ),
        a
      );
      if (hv === null ? hv = [f] : hv.push(f), zl !== Kf && (zl = Pr), t === null) return !0;
      i = _a(i, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, e = o & -o, a.lanes |= e, e = $d(
              a.stateNode,
              i,
              e
            ), Us(a, e), !1;
          case 1:
            if (t = a.type, f = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Ff === null || !Ff.has(f))))
              return a.flags |= 65536, o &= -o, a.lanes |= o, o = kd(o), Ws(
                o,
                e,
                a,
                i
              ), Us(a, o), !1;
        }
        a = a.return;
      } while (a !== null);
      return !1;
    }
    function la(e, t, a, i) {
      t.child = e === null ? yb(t, null, a, i) : Fr(
        t,
        e.child,
        a,
        i
      );
    }
    function Sy(e, t, a, i, o) {
      a = a.render;
      var f = t.ref;
      if ("ref" in i) {
        var d = {};
        for (var h in i)
          h !== "ref" && (d[h] = i[h]);
      } else d = i;
      return mn(t), i = gl(
        e,
        t,
        a,
        d,
        f,
        o
      ), h = js(), e !== null && !Kl ? (uc(e, t, o), Xu(e, t, o)) : (mt && h && Md(t), t.flags |= 1, la(e, t, i, o), t.child);
    }
    function by(e, t, a, i, o) {
      if (e === null) {
        var f = a.type;
        return typeof f == "function" && !Rd(f) && f.defaultProps === void 0 && a.compare === null ? (a = Fi(f), t.tag = 15, t.type = a, hf(t, f), Ey(
          e,
          t,
          a,
          i,
          o
        )) : (e = Qc(
          a.type,
          null,
          i,
          t,
          t.mode,
          o
        ), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (f = e.child, !nh(e, o)) {
        var d = f.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Ss, a(d, i) && e.ref === t.ref)
          return Xu(
            e,
            t,
            o
          );
      }
      return t.flags |= 1, e = Ou(f, i), e.ref = t.ref, e.return = t, t.child = e;
    }
    function Ey(e, t, a, i, o) {
      if (e !== null) {
        var f = e.memoizedProps;
        if (Ss(f, i) && e.ref === t.ref && t.type === e.type)
          if (Kl = !1, t.pendingProps = i = f, nh(e, o))
            (e.flags & 131072) !== 0 && (Kl = !0);
          else
            return t.lanes = e.lanes, Xu(e, t, o);
      }
      return Id(
        e,
        t,
        a,
        i,
        o
      );
    }
    function Wd(e, t, a, i) {
      var o = i.children, f = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: Vp,
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
          return Ty(
            e,
            t,
            f,
            a,
            i
          );
        }
        if ((a & 536870912) !== 0)
          t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ds(
            t,
            f !== null ? f.cachePool : null
          ), f !== null ? nc(t, f) : au(t), jd(t);
        else
          return i = t.lanes = 536870912, Ty(
            e,
            t,
            f !== null ? f.baseLanes | a : a,
            a,
            i
          );
      } else
        f !== null ? (Ds(t, f.cachePool), nc(t, f), En(t), t.memoizedState = null) : (e !== null && Ds(t, null), au(t), En(t));
      return la(e, t, o, a), t.child;
    }
    function df(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: Vp,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function Ty(e, t, a, i, o) {
      var f = _s();
      return f = f === null ? null : {
        parent: Ql._currentValue,
        pool: f
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: f
      }, e !== null && Ds(t, null), au(t), jd(t), e !== null && lc(e, t, i, !0), t.childLanes = o, null;
    }
    function Fs(e, t) {
      var a = t.hidden;
      return a !== void 0 && console.error(
        `<Activity> doesn't accept a hidden prop. Use mode="hidden" instead.
- <Activity %s>
+ <Activity %s>`,
        a === !0 ? "hidden" : a === !1 ? "hidden={false}" : "hidden={...}",
        a ? 'mode="hidden"' : 'mode="visible"'
      ), t = er(
        { mode: t.mode, children: t.children },
        e.mode
      ), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ay(e, t, a) {
      return Fr(t, e.child, null, a), e = Fs(
        t,
        t.pendingProps
      ), e.flags |= 2, va(t), t.memoizedState = null, e;
    }
    function e0(e, t, a) {
      var i = t.pendingProps, o = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (mt) {
          if (i.mode === "hidden")
            return e = Fs(t, i), t.lanes = 536870912, df(null, e);
          if (Ns(t), (e = fl) ? (a = zh(
            e,
            fi
          ), a = a !== null && a.data === ud ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: kv(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, Ya = t, fl = null)) : a = null, a === null)
            throw Pi(t, e), bi(t);
          return t.lanes = 536870912, null;
        }
        return Fs(t, i);
      }
      var f = e.memoizedState;
      if (f !== null) {
        var d = f.dehydrated;
        if (Ns(t), o)
          if (t.flags & 256)
            t.flags &= -257, t = Ay(
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
        else if (Za(), (a & 536870912) !== 0 && Sf(t), Kl || lc(
          e,
          t,
          a,
          !1
        ), o = (a & e.childLanes) !== 0, Kl || o) {
          if (i = tl, i !== null && (d = rn(
            i,
            a
          ), d !== 0 && d !== f.retryLane))
            throw f.retryLane = d, Pl(e, d), hl(i, e, d), ZS;
          ho(), t = Ay(
            e,
            t,
            a
          );
        } else
          e = f.treeContext, fl = Tn(
            d.nextSibling
          ), Ya = t, mt = !0, Xf = null, zc = !1, hu = null, fi = !1, e !== null && Wv(t, e), t = Fs(t, i), t.flags |= 4096;
        return t;
      }
      return f = e.child, i = { mode: i.mode, children: i.children }, (a & 536870912) !== 0 && (a & e.lanes) !== 0 && Sf(t), e = Ou(f, i), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Fd(e, t) {
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
    function Id(e, t, a, i, o) {
      if (a.prototype && typeof a.prototype.render == "function") {
        var f = ke(a) || "Unknown";
        qb[f] || (console.error(
          "The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.",
          f,
          f
        ), qb[f] = !0);
      }
      return t.mode & on && Vi.recordLegacyContextWarning(
        t,
        null
      ), e === null && (hf(t, t.type), a.contextTypes && (f = ke(a) || "Unknown", Yb[f] || (Yb[f] = !0, console.error(
        "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with React.useContext() instead. (https://react.dev/link/legacy-context)",
        f
      )))), mn(t), a = gl(
        e,
        t,
        a,
        i,
        void 0,
        o
      ), i = js(), e !== null && !Kl ? (uc(e, t, o), Xu(e, t, o)) : (mt && i && Md(t), t.flags |= 1, la(e, t, a, o), t.child);
    }
    function uo(e, t, a, i, o, f) {
      return mn(t), qo = -1, iv = e !== null && e.type !== t.type, t.updateQueue = null, a = Ic(
        t,
        i,
        a,
        o
      ), Bd(e, t), i = js(), e !== null && !Kl ? (uc(e, t, f), Xu(e, t, f)) : (mt && i && Md(t), t.flags |= 1, la(e, t, a, f), t.child);
    }
    function zy(e, t, a, i, o) {
      switch (xe(t)) {
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
          h = kd(h), Ws(
            h,
            d,
            t,
            _a(f, t)
          ), Us(t, h);
      }
      if (mn(t), t.stateNode === null) {
        if (d = wf, f = a.contextType, "contextType" in a && f !== null && (f === void 0 || f.$$typeof !== su) && !Hb.has(a) && (Hb.add(a), h = f === void 0 ? " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? " However, it is set to a " + typeof f + "." : f.$$typeof === Gh ? " Did you accidentally pass the Context.Consumer instead?" : " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", console.error(
          "%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s",
          ke(a) || "Component",
          h
        )), typeof f == "object" && f !== null && (d = Ft(f)), f = new a(i, d), t.mode & on) {
          re(!0);
          try {
            f = new a(i, d);
          } finally {
            re(!1);
          }
        }
        if (d = t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = LS, t.stateNode = f, f._reactInternals = t, f._reactInternalInstance = Ob, typeof a.getDerivedStateFromProps == "function" && d === null && (d = ke(a) || "Component", _b.has(d) || (_b.add(d), console.error(
          "`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.",
          d,
          f.state === null ? "null" : "undefined",
          d
        ))), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function") {
          var y = h = d = null;
          if (typeof f.componentWillMount == "function" && f.componentWillMount.__suppressDeprecationWarning !== !0 ? d = "componentWillMount" : typeof f.UNSAFE_componentWillMount == "function" && (d = "UNSAFE_componentWillMount"), typeof f.componentWillReceiveProps == "function" && f.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? h = "componentWillReceiveProps" : typeof f.UNSAFE_componentWillReceiveProps == "function" && (h = "UNSAFE_componentWillReceiveProps"), typeof f.componentWillUpdate == "function" && f.componentWillUpdate.__suppressDeprecationWarning !== !0 ? y = "componentWillUpdate" : typeof f.UNSAFE_componentWillUpdate == "function" && (y = "UNSAFE_componentWillUpdate"), d !== null || h !== null || y !== null) {
            f = ke(a) || "Component";
            var p = typeof a.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Mb.has(f) || (Mb.add(f), console.error(
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
        f = t.stateNode, d = ke(a) || "Component", f.render || (a.prototype && typeof a.prototype.render == "function" ? console.error(
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
        ), a.childContextTypes && !Nb.has(a) && (Nb.add(a), console.error(
          "%s uses the legacy childContextTypes API which was removed in React 19. Use React.createContext() instead. (https://react.dev/link/legacy-context)",
          d
        )), a.contextTypes && !xb.has(a) && (xb.add(a), console.error(
          "%s uses the legacy contextTypes API which was removed in React 19. Use React.createContext() with static contextType instead. (https://react.dev/link/legacy-context)",
          d
        )), typeof f.componentShouldUpdate == "function" && console.error(
          "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
          d
        ), a.prototype && a.prototype.isPureReactComponent && typeof f.shouldComponentUpdate < "u" && console.error(
          "%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.",
          ke(a) || "A pure component"
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
          ke(a)
        )), typeof f.getDerivedStateFromProps == "function" && console.error(
          "%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof f.getDerivedStateFromError == "function" && console.error(
          "%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.",
          d
        ), typeof a.getSnapshotBeforeUpdate == "function" && console.error(
          "%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.",
          d
        ), (h = f.state) && (typeof h != "object" || ql(h)) && console.error("%s.state: must be set to an object or null", d), typeof f.getChildContext == "function" && typeof a.childContextTypes != "object" && console.error(
          "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",
          d
        ), f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Nu(t), d = a.contextType, f.context = typeof d == "object" && d !== null ? Ft(d) : wf, f.state === i && (d = ke(a) || "Component", Cb.has(d) || (Cb.add(d), console.error(
          "%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.",
          d
        ))), t.mode & on && Vi.recordLegacyContextWarning(
          t,
          f
        ), Vi.recordUnsafeLifecycleWarnings(
          t,
          f
        ), f.state = t.memoizedState, d = a.getDerivedStateFromProps, typeof d == "function" && (Ks(
          t,
          a,
          d,
          i
        ), f.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (d = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), d !== f.state && (console.error(
          "%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.",
          de(t) || "Component"
        ), LS.enqueueReplaceState(
          f,
          f.state,
          null
        )), lu(t, i, f, o), ju(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xi) !== Be && (t.flags |= 134217728), f = !0;
      } else if (e === null) {
        f = t.stateNode;
        var R = t.memoizedProps;
        h = Ci(a, R), f.props = h;
        var D = f.context;
        y = a.contextType, d = wf, typeof y == "object" && y !== null && (d = Ft(y)), p = a.getDerivedStateFromProps, y = typeof p == "function" || typeof f.getSnapshotBeforeUpdate == "function", R = t.pendingProps !== R, y || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (R || D !== d) && $s(
          t,
          f,
          i,
          d
        ), Jf = !1;
        var b = t.memoizedState;
        f.state = b, lu(t, i, f, o), ju(), D = t.memoizedState, R || b !== D || Jf ? (typeof p == "function" && (Ks(
          t,
          a,
          p,
          i
        ), D = t.memoizedState), (h = Jf || wu(
          t,
          a,
          h,
          i,
          b,
          D,
          d
        )) ? (y || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xi) !== Be && (t.flags |= 134217728)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xi) !== Be && (t.flags |= 134217728), t.memoizedProps = i, t.memoizedState = D), f.props = i, f.state = D, f.context = d, f = h) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), (t.mode & Xi) !== Be && (t.flags |= 134217728), f = !1);
      } else {
        f = t.stateNode, Wa(e, t), d = t.memoizedProps, y = Ci(a, d), f.props = y, p = t.pendingProps, b = f.context, D = a.contextType, h = wf, typeof D == "object" && D !== null && (h = Ft(D)), R = a.getDerivedStateFromProps, (D = typeof R == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (d !== p || b !== h) && $s(
          t,
          f,
          i,
          h
        ), Jf = !1, b = t.memoizedState, f.state = b, lu(t, i, f, o), ju();
        var Y = t.memoizedState;
        d !== p || b !== Y || Jf || e !== null && e.dependencies !== null && As(e.dependencies) ? (typeof R == "function" && (Ks(
          t,
          a,
          R,
          i
        ), Y = t.memoizedState), (y = Jf || wu(
          t,
          a,
          y,
          i,
          b,
          Y,
          h
        ) || e !== null && e.dependencies !== null && As(e.dependencies)) ? (D || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, Y, h), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
          i,
          Y,
          h
        )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = Y), f.props = i, f.state = Y, f.context = h, f = y) : (typeof f.componentDidUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || d === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), f = !1);
      }
      if (h = f, Fd(e, t), d = (t.flags & 128) !== 0, h || d) {
        if (h = t.stateNode, Ml(t), d && typeof a.getDerivedStateFromError != "function")
          a = null, _n = -1;
        else if (a = tb(h), t.mode & on) {
          re(!0);
          try {
            tb(h);
          } finally {
            re(!1);
          }
        }
        t.flags |= 1, e !== null && d ? (t.child = Fr(
          t,
          e.child,
          null,
          o
        ), t.child = Fr(
          t,
          null,
          a,
          o
        )) : la(e, t, a, o), t.memoizedState = h.state, e = t.child;
      } else
        e = Xu(
          e,
          t,
          o
        );
      return o = t.stateNode, f && o.props !== i && (Em || console.error(
        "It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.",
        de(t) || "a component"
      ), Em = !0), e;
    }
    function Is(e, t, a, i) {
      return Ei(), t.flags |= 256, la(e, t, a, i), t.child;
    }
    function hf(e, t) {
      t && t.childContextTypes && console.error(
        `childContextTypes cannot be defined on a function component.
  %s.childContextTypes = ...`,
        t.displayName || t.name || "Component"
      ), typeof t.getDerivedStateFromProps == "function" && (e = ke(t) || "Unknown", Gb[e] || (console.error(
        "%s: Function components do not support getDerivedStateFromProps.",
        e
      ), Gb[e] = !0)), typeof t.contextType == "object" && t.contextType !== null && (t = ke(t) || "Unknown", Bb[t] || (console.error(
        "%s: Function components do not support contextType.",
        t
      ), Bb[t] = !0));
    }
    function Pd(e) {
      return { baseLanes: e, cachePool: Ud() };
    }
    function Ps(e, t, a) {
      return e = e !== null ? e.childLanes & ~a : 0, t && (e |= Fn), e;
    }
    function t0(e, t, a) {
      var i, o = t.pendingProps;
      Ae(t) && (t.flags |= 128);
      var f = !1, d = (t.flags & 128) !== 0;
      if ((i = d) || (i = e !== null && e.memoizedState === null ? !1 : (Yl.current & nv) !== 0), i && (f = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (mt) {
          if (f ? pa(t) : En(t), (e = fl) ? (a = zh(
            e,
            fi
          ), a = a !== null && a.data !== ud ? a : null, a !== null && (i = {
            dehydrated: a,
            treeContext: kv(),
            retryLane: 536870912,
            hydrationErrors: null
          }, t.memoizedState = i, i = Fm(a), i.return = t, t.child = i, Ya = t, fl = null)) : a = null, a === null)
            throw Pi(t, e), bi(t);
          return Oh(a) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var h = o.children;
        if (o = o.fallback, f) {
          En(t);
          var y = t.mode;
          return h = er(
            { mode: "hidden", children: h },
            y
          ), o = Ru(
            o,
            y,
            a,
            null
          ), h.return = t, o.return = t, h.sibling = o, t.child = h, o = t.child, o.memoizedState = Pd(a), o.childLanes = Ps(
            e,
            i,
            a
          ), t.memoizedState = JS, df(
            null,
            o
          );
        }
        return pa(t), eh(
          t,
          h
        );
      }
      var p = e.memoizedState;
      if (p !== null) {
        var R = p.dehydrated;
        if (R !== null) {
          if (d)
            t.flags & 256 ? (pa(t), t.flags &= -257, t = th(
              e,
              t,
              a
            )) : t.memoizedState !== null ? (En(t), t.child = e.child, t.flags |= 128, t = null) : (En(t), h = o.fallback, y = t.mode, o = er(
              {
                mode: "visible",
                children: o.children
              },
              y
            ), h = Ru(
              h,
              y,
              a,
              null
            ), h.flags |= 2, o.return = t, h.return = t, o.sibling = h, t.child = o, Fr(
              t,
              e.child,
              null,
              a
            ), o = t.child, o.memoizedState = Pd(a), o.childLanes = Ps(
              e,
              i,
              a
            ), t.memoizedState = JS, t = df(
              null,
              o
            ));
          else if (pa(t), Za(), (a & 536870912) !== 0 && Sf(t), Oh(
            R
          )) {
            if (i = R.nextSibling && R.nextSibling.dataset, i) {
              h = i.dgst;
              var D = i.msg;
              y = i.stck;
              var b = i.cstck;
            }
            f = D, i = h, o = y, R = b, h = f, y = R, h = Error(h || "The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering."), h.stack = o || "", h.digest = i, i = y === void 0 ? null : y, o = {
              value: h,
              source: null,
              stack: i
            }, typeof i == "string" && OS.set(
              h,
              o
            ), Du(o), t = th(
              e,
              t,
              a
            );
          } else if (Kl || lc(
            e,
            t,
            a,
            !1
          ), i = (a & e.childLanes) !== 0, Kl || i) {
            if (i = tl, i !== null && (o = rn(
              i,
              a
            ), o !== 0 && o !== p.retryLane))
              throw p.retryLane = o, Pl(
                e,
                o
              ), hl(
                i,
                e,
                o
              ), ZS;
            op(
              R
            ) || ho(), t = th(
              e,
              t,
              a
            );
          } else
            op(
              R
            ) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, fl = Tn(
              R.nextSibling
            ), Ya = t, mt = !0, Xf = null, zc = !1, hu = null, fi = !1, e !== null && Wv(t, e), t = eh(
              t,
              o.children
            ), t.flags |= 4096);
          return t;
        }
      }
      return f ? (En(t), h = o.fallback, y = t.mode, b = e.child, R = b.sibling, o = Ou(
        b,
        {
          mode: "hidden",
          children: o.children
        }
      ), o.subtreeFlags = b.subtreeFlags & 65011712, R !== null ? h = Ou(
        R,
        h
      ) : (h = Ru(
        h,
        y,
        a,
        null
      ), h.flags |= 2), h.return = t, o.return = t, o.sibling = h, t.child = o, df(null, o), o = t.child, h = e.child.memoizedState, h === null ? h = Pd(a) : (y = h.cachePool, y !== null ? (b = Ql._currentValue, y = y.parent !== b ? { parent: b, pool: b } : y) : y = Ud(), h = {
        baseLanes: h.baseLanes | a,
        cachePool: y
      }), o.memoizedState = h, o.childLanes = Ps(
        e,
        i,
        a
      ), t.memoizedState = JS, df(
        e.child,
        o
      )) : (p !== null && (a & 62914560) === a && (a & e.lanes) !== 0 && Sf(t), pa(t), a = e.child, e = a.sibling, a = Ou(a, {
        mode: "visible",
        children: o.children
      }), a.return = t, a.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = a, t.memoizedState = null, a);
    }
    function eh(e, t) {
      return t = er(
        { mode: "visible", children: t },
        e.mode
      ), t.return = e, e.child = t;
    }
    function er(e, t) {
      return e = x(22, e, null, t), e.lanes = 0, e;
    }
    function th(e, t, a) {
      return Fr(t, e.child, null, a), e = eh(
        t,
        t.pendingProps.children
      ), e.flags |= 2, t.memoizedState = null, e;
    }
    function Oy(e, t, a) {
      e.lanes |= t;
      var i = e.alternate;
      i !== null && (i.lanes |= t), Ti(
        e.return,
        t,
        a
      );
    }
    function lh(e, t, a, i, o, f) {
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
    function ah(e, t, a) {
      var i = t.pendingProps, o = i.revealOrder, f = i.tail, d = i.children, h = Yl.current;
      if ((i = (h & nv) !== 0) ? (h = h & vm | nv, t.flags |= 128) : h &= vm, Ne(Yl, h, t), h = o ?? "null", o !== "forwards" && o !== "unstable_legacy-backwards" && o !== "together" && o !== "independent" && !wb[h])
        if (wb[h] = !0, o == null)
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
      h = f ?? "null", mg[h] || (f == null ? (o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && (mg[h] = !0, console.error(
        'The default for the <SuspenseList tail="..."> prop is changing. To be future compatible you must explictly specify either "visible" (the current default), "collapsed" or "hidden".'
      )) : f !== "visible" && f !== "collapsed" && f !== "hidden" ? (mg[h] = !0, console.error(
        '"%s" is not a supported value for tail on <SuspenseList />. Did you mean "visible", "collapsed" or "hidden"?',
        f
      )) : o !== "forwards" && o !== "backwards" && o !== "unstable_legacy-backwards" && (mg[h] = !0, console.error(
        '<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?',
        f
      )));
      e: if ((o === "forwards" || o === "backwards" || o === "unstable_legacy-backwards") && d !== void 0 && d !== null && d !== !1)
        if (ql(d)) {
          for (h = 0; h < d.length; h++)
            if (!dt(
              d[h],
              h
            ))
              break e;
        } else if (h = At(d), typeof h == "function") {
          if (h = h.call(d))
            for (var y = h.next(), p = 0; !y.done; y = h.next()) {
              if (!dt(y.value, p)) break e;
              p++;
            }
        } else
          console.error(
            'A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?',
            o
          );
      if (la(e, t, d, a), mt ? (Ii(), d = Lp) : d = 0, !i && e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Oy(e, a, t);
          else if (e.tag === 19)
            Oy(e, a, t);
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
            e = a.alternate, e !== null && Bu(e) === null && (o = a), a = a.sibling;
          a = o, a === null ? (o = t.child, t.child = null) : (o = a.sibling, a.sibling = null), lh(
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
            if (e = o.alternate, e !== null && Bu(e) === null) {
              t.child = o;
              break;
            }
            e = o.sibling, o.sibling = a, a = o, o = e;
          }
          lh(
            t,
            !0,
            a,
            null,
            f,
            d
          );
          break;
        case "together":
          lh(
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
    function Xu(e, t, a) {
      if (e !== null && (t.dependencies = e.dependencies), _n = -1, kf |= t.lanes, (a & t.childLanes) === 0)
        if (e !== null) {
          if (lc(
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
    function nh(e, t) {
      return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && As(e)));
    }
    function Ry(e, t, a) {
      switch (t.tag) {
        case 3:
          G(
            t,
            t.stateNode.containerInfo
          ), Mu(
            t,
            Ql,
            e.memoizedState.cache
          ), Ei();
          break;
        case 27:
        case 5:
          fe(t);
          break;
        case 4:
          G(
            t,
            t.stateNode.containerInfo
          );
          break;
        case 10:
          Mu(
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
            return t.flags |= 128, Ns(t), null;
          break;
        case 13:
          if (i = t.memoizedState, i !== null)
            return i.dehydrated !== null ? (pa(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? t0(
              e,
              t,
              a
            ) : (pa(t), e = Xu(
              e,
              t,
              a
            ), e !== null ? e.sibling : null);
          pa(t);
          break;
        case 19:
          var o = (e.flags & 128) !== 0;
          if (i = (a & t.childLanes) !== 0, i || (lc(
            e,
            t,
            a,
            !1
          ), i = (a & t.childLanes) !== 0), o) {
            if (i)
              return ah(
                e,
                t,
                a
              );
            t.flags |= 128;
          }
          if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), Ne(
            Yl,
            Yl.current,
            t
          ), i) break;
          return null;
        case 22:
          return t.lanes = 0, Wd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          Mu(
            t,
            Ql,
            e.memoizedState.cache
          );
      }
      return Xu(e, t, a);
    }
    function uh(e, t, a) {
      if (t._debugNeedsRemount && e !== null) {
        a = Qc(
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
          Kl = !0;
        else {
          if (!nh(e, a) && (t.flags & 128) === 0)
            return Kl = !1, Ry(
              e,
              t,
              a
            );
          Kl = (e.flags & 131072) !== 0;
        }
      else
        Kl = !1, (i = mt) && (Ii(), i = (t.flags & 1048576) !== 0), i && (i = t.index, Ii(), Im(t, Lp, i));
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: if (i = t.pendingProps, e = Sn(t.elementType), t.type = e, typeof e == "function")
            Rd(e) ? (i = Ci(
              e,
              i
            ), t.tag = 1, t.type = e = Fi(e), t = zy(
              null,
              t,
              e,
              i,
              a
            )) : (t.tag = 0, hf(t, e), t.type = e = Fi(e), t = Id(
              null,
              t,
              e,
              i,
              a
            ));
          else {
            if (e != null) {
              if (o = e.$$typeof, o === Bi) {
                t.tag = 11, t.type = e = Od(e), t = Sy(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              } else if (o === To) {
                t.tag = 14, t = by(
                  null,
                  t,
                  e,
                  i,
                  a
                );
                break e;
              }
            }
            throw t = "", e !== null && typeof e == "object" && e.$$typeof === _l && (t = " Did you wrap a component in React.lazy() more than once?"), a = ke(e) || e, Error(
              "Element type is invalid. Received a promise that resolves to: " + a + ". Lazy element type must resolve to a class or function." + t
            );
          }
          return t;
        case 0:
          return Id(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 1:
          return i = t.type, o = Ci(
            i,
            t.pendingProps
          ), zy(
            e,
            t,
            i,
            o,
            a
          );
        case 3:
          e: {
            if (G(
              t,
              t.stateNode.containerInfo
            ), e === null)
              throw Error(
                "Should have a current fiber. This is a bug in React."
              );
            i = t.pendingProps;
            var f = t.memoizedState;
            o = f.element, Wa(e, t), lu(t, i, null, a);
            var d = t.memoizedState;
            if (i = d.cache, Mu(t, Ql, i), i !== f.cache && tc(
              t,
              [Ql],
              a,
              !0
            ), ju(), i = d.element, f.isDehydrated)
              if (f = {
                element: i,
                isDehydrated: !1,
                cache: d.cache
              }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
                t = Is(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else if (i !== o) {
                o = _a(
                  Error(
                    "This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."
                  ),
                  t
                ), Du(o), t = Is(
                  e,
                  t,
                  i,
                  a
                );
                break e;
              } else
                for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, fl = Tn(e.firstChild), Ya = t, mt = !0, Xf = null, zc = !1, hu = null, fi = !0, a = yb(
                  t,
                  null,
                  i,
                  a
                ), t.child = a; a; )
                  a.flags = a.flags & -3 | 4096, a = a.sibling;
            else {
              if (Ei(), i === o) {
                t = Xu(
                  e,
                  t,
                  a
                );
                break e;
              }
              la(
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
          return Fd(e, t), e === null ? (a = rp(
            t.type,
            null,
            t.pendingProps,
            null
          )) ? t.memoizedState = a : mt || (a = t.type, e = t.pendingProps, i = Mt(
            Zn.current
          ), i = bh(
            i
          ).createElement(a), i[fa] = t, i[Aa] = e, vt(i, a, e), Se(i), t.stateNode = i) : t.memoizedState = rp(
            t.type,
            e.memoizedProps,
            t.pendingProps,
            e.memoizedState
          ), null;
        case 27:
          return fe(t), e === null && mt && (i = Mt(Zn.current), o = I(), i = t.stateNode = fu(
            t.type,
            t.pendingProps,
            i,
            o,
            !1
          ), zc || (o = np(
            i,
            t.type,
            t.pendingProps,
            o
          ), o !== null && (Zc(t, 0).serverProps = o)), Ya = t, fi = !0, o = fl, qi(t.type) ? (y1 = o, fl = Tn(
            i.firstChild
          )) : fl = o), la(
            e,
            t,
            t.pendingProps.children,
            a
          ), Fd(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && mt && (f = I(), i = yd(
            t.type,
            f.ancestorInfo
          ), o = fl, (d = !o) || (d = _0(
            o,
            t.type,
            t.pendingProps,
            fi
          ), d !== null ? (t.stateNode = d, zc || (f = np(
            d,
            t.type,
            t.pendingProps,
            f
          ), f !== null && (Zc(t, 0).serverProps = f)), Ya = t, fl = Tn(
            d.firstChild
          ), fi = !1, f = !0) : f = !1, d = !f), d && (i && Pi(t, o), bi(t))), fe(t), o = t.type, f = t.pendingProps, d = e !== null ? e.memoizedProps : null, i = f.children, Sr(o, f) ? i = null : d !== null && Sr(o, d) && (t.flags |= 32), t.memoizedState !== null && (o = gl(
            e,
            t,
            Hs,
            null,
            null,
            a
          ), Tv._currentValue = o), Fd(e, t), la(
            e,
            t,
            i,
            a
          ), t.child;
        case 6:
          return e === null && mt && (a = t.pendingProps, e = I(), i = e.ancestorInfo.current, a = i != null ? Jo(
            a,
            i.tag,
            e.ancestorInfo.implicitRootScope
          ) : !0, e = fl, (i = !e) || (i = Xt(
            e,
            t.pendingProps,
            fi
          ), i !== null ? (t.stateNode = i, Ya = t, fl = null, i = !0) : i = !1, i = !i), i && (a && Pi(t, e), bi(t))), null;
        case 13:
          return t0(e, t, a);
        case 4:
          return G(
            t,
            t.stateNode.containerInfo
          ), i = t.pendingProps, e === null ? t.child = Fr(
            t,
            null,
            i,
            a
          ) : la(
            e,
            t,
            i,
            a
          ), t.child;
        case 11:
          return Sy(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 7:
          return la(
            e,
            t,
            t.pendingProps,
            a
          ), t.child;
        case 8:
          return la(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 12:
          return t.flags |= 4, t.flags |= 2048, i = t.stateNode, i.effectDuration = -0, i.passiveEffectDuration = -0, la(
            e,
            t,
            t.pendingProps.children,
            a
          ), t.child;
        case 10:
          return i = t.type, o = t.pendingProps, f = o.value, "value" in o || Xb || (Xb = !0, console.error(
            "The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"
          )), Mu(t, i, f), la(
            e,
            t,
            o.children,
            a
          ), t.child;
        case 9:
          return o = t.type._context, i = t.pendingProps.children, typeof i != "function" && console.error(
            "A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."
          ), mn(t), o = Ft(o), i = NS(
            i,
            o,
            void 0
          ), t.flags |= 1, la(
            e,
            t,
            i,
            a
          ), t.child;
        case 14:
          return by(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 15:
          return Ey(
            e,
            t,
            t.type,
            t.pendingProps,
            a
          );
        case 19:
          return ah(
            e,
            t,
            a
          );
        case 31:
          return e0(e, t, a);
        case 22:
          return Wd(
            e,
            t,
            a,
            t.pendingProps
          );
        case 24:
          return mn(t), i = Ft(Ql), e === null ? (o = _s(), o === null && (o = tl, f = ny(), o.pooledCache = f, Kc(f), f !== null && (o.pooledCacheLanes |= a), o = f), t.memoizedState = {
            parent: i,
            cache: o
          }, Nu(t), Mu(t, Ql, o)) : ((e.lanes & a) !== 0 && (Wa(e, t), lu(t, null, null, a), ju()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = {
            parent: i,
            cache: i
          }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), Mu(t, Ql, i)) : (i = f.cache, Mu(t, Ql, i), i !== o.cache && tc(
            t,
            [Ql],
            a,
            !0
          ))), la(
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
    function Vu(e) {
      e.flags |= 4;
    }
    function _y(e, t, a, i, o) {
      if ((t = (e.mode & wT) !== Be) && (t = !1), t) {
        if (e.flags |= 16777216, (o & 335544128) === o)
          if (e.stateNode.complete) e.flags |= 8192;
          else if (mh()) e.flags |= 8192;
          else
            throw Wr = og, jS;
      } else e.flags &= -16777217;
    }
    function ih(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & mi) !== od)
        e.flags &= -16777217;
      else if (e.flags |= 16777216, !Ch(t))
        if (mh()) e.flags |= 8192;
        else
          throw Wr = og, jS;
    }
    function tr(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? da() : 536870912, e.lanes |= t, ld |= t);
    }
    function mf(e, t) {
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
    function wt(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = 0, i = 0;
      if (t)
        if ((e.mode & et) !== Be) {
          for (var o = e.selfBaseDuration, f = e.child; f !== null; )
            a |= f.lanes | f.childLanes, i |= f.subtreeFlags & 65011712, i |= f.flags & 65011712, o += f.treeBaseDuration, f = f.sibling;
          e.treeBaseDuration = o;
        } else
          for (o = e.child; o !== null; )
            a |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
      else if ((e.mode & et) !== Be) {
        o = e.actualDuration, f = e.selfBaseDuration;
        for (var d = e.child; d !== null; )
          a |= d.lanes | d.childLanes, i |= d.subtreeFlags, i |= d.flags, o += d.actualDuration, f += d.treeBaseDuration, d = d.sibling;
        e.actualDuration = o, e.treeBaseDuration = f;
      } else
        for (o = e.child; o !== null; )
          a |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
      return e.subtreeFlags |= i, e.childLanes = a, t;
    }
    function l0(e, t, a) {
      var i = t.pendingProps;
      switch (Pm(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return wt(t), null;
        case 1:
          return wt(t), null;
        case 3:
          return a = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Cu(Ql, t), q(t), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Jc(t) ? (Ts(), Vu(t)) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ly())), wt(t), null;
        case 26:
          var o = t.type, f = t.memoizedState;
          return e === null ? (Vu(t), f !== null ? (wt(t), ih(
            t,
            f
          )) : (wt(t), _y(
            t,
            o,
            null,
            i,
            a
          ))) : f ? f !== e.memoizedState ? (Vu(t), wt(t), ih(
            t,
            f
          )) : (wt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== i && Vu(t), wt(t), _y(
            t,
            o,
            e,
            i,
            a
          )), null;
        case 27:
          if (ge(t), a = Mt(Zn.current), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Vu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return wt(t), null;
            }
            e = I(), Jc(t) ? ey(t) : (e = fu(
              o,
              i,
              a,
              e,
              !0
            ), t.stateNode = e, Vu(t));
          }
          return wt(t), null;
        case 5:
          if (ge(t), o = t.type, e !== null && t.stateNode != null)
            e.memoizedProps !== i && Vu(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw Error(
                  "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
                );
              return wt(t), null;
            }
            var d = I();
            if (Jc(t))
              ey(t);
            else {
              switch (f = Mt(Zn.current), yd(o, d.ancestorInfo), d = d.context, f = bh(f), d) {
                case Mm:
                  f = f.createElementNS(
                    ft,
                    o
                  );
                  break;
                case Hg:
                  f = f.createElementNS(
                    nt,
                    o
                  );
                  break;
                default:
                  switch (o) {
                    case "svg":
                      f = f.createElementNS(
                        ft,
                        o
                      );
                      break;
                    case "math":
                      f = f.createElementNS(
                        nt,
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
                      ), Object.prototype.toString.call(f) !== "[object HTMLUnknownElement]" || ru.call(rE, o) || (rE[o] = !0, console.error(
                        "The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.",
                        o
                      )));
                  }
              }
              f[fa] = t, f[Aa] = i;
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
              e: switch (vt(f, o, i), o) {
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
              i && Vu(t);
            }
          }
          return wt(t), _y(
            t,
            t.type,
            e === null ? null : e.memoizedProps,
            t.pendingProps,
            a
          ), null;
        case 6:
          if (e && t.stateNode != null)
            e.memoizedProps !== i && Vu(t);
          else {
            if (typeof i != "string" && t.stateNode === null)
              throw Error(
                "We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue."
              );
            if (e = Mt(Zn.current), a = I(), Jc(t)) {
              if (e = t.stateNode, a = t.memoizedProps, o = !zc, i = null, f = Ya, f !== null)
                switch (f.tag) {
                  case 3:
                    o && (o = Er(
                      e,
                      a,
                      i
                    ), o !== null && (Zc(t, 0).serverProps = o));
                    break;
                  case 27:
                  case 5:
                    i = f.memoizedProps, o && (o = Er(
                      e,
                      a,
                      i
                    ), o !== null && (Zc(
                      t,
                      0
                    ).serverProps = o));
                }
              e[fa] = t, e = !!(e.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || vr(e.nodeValue, a)), e || bi(t, !0);
            } else
              o = a.ancestorInfo.current, o != null && Jo(
                i,
                o.tag,
                a.ancestorInfo.implicitRootScope
              ), e = bh(e).createTextNode(
                i
              ), e[fa] = t, t.stateNode = e;
          }
          return wt(t), null;
        case 31:
          if (a = t.memoizedState, e === null || e.memoizedState !== null) {
            if (i = Jc(t), a !== null) {
              if (e === null) {
                if (!i)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e)
                  throw Error(
                    "Expected to have a hydrated activity instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                e[fa] = t, wt(t), (t.mode & et) !== Be && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              } else
                Ts(), Ei(), (t.flags & 128) === 0 && (a = t.memoizedState = null), t.flags |= 4, wt(t), (t.mode & et) !== Be && a !== null && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration));
              e = !1;
            } else
              a = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), e = !0;
            if (!e)
              return t.flags & 256 ? (va(t), t) : (va(t), null);
            if ((t.flags & 128) !== 0)
              throw Error(
                "Client rendering an Activity suspended it again. This is a bug in React."
              );
          }
          return wt(t), null;
        case 13:
          if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (o = i, f = Jc(t), o !== null && o.dehydrated !== null) {
              if (e === null) {
                if (!f)
                  throw Error(
                    "A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React."
                  );
                if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f)
                  throw Error(
                    "Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue."
                  );
                f[fa] = t, wt(t), (t.mode & et) !== Be && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              } else
                Ts(), Ei(), (t.flags & 128) === 0 && (o = t.memoizedState = null), t.flags |= 4, wt(t), (t.mode & et) !== Be && o !== null && (o = t.child, o !== null && (t.treeBaseDuration -= o.treeBaseDuration));
              o = !1;
            } else
              o = ly(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
            if (!o)
              return t.flags & 256 ? (va(t), t) : (va(t), null);
          }
          return va(t), (t.flags & 128) !== 0 ? (t.lanes = a, (t.mode & et) !== Be && vn(t), t) : (a = i !== null, e = e !== null && e.memoizedState !== null, a && (i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool), f = null, i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048)), a !== e && a && (t.child.flags |= 8192), tr(t, t.updateQueue), wt(t), (t.mode & et) !== Be && a && (e = t.child, e !== null && (t.treeBaseDuration -= e.treeBaseDuration)), null);
        case 4:
          return q(t), e === null && yr(
            t.stateNode.containerInfo
          ), wt(t), null;
        case 10:
          return Cu(t.type, t), wt(t), null;
        case 19:
          if (ze(Yl, t), i = t.memoizedState, i === null) return wt(t), null;
          if (o = (t.flags & 128) !== 0, f = i.rendering, f === null)
            if (o) mf(i, !1);
            else {
              if (zl !== Yo || e !== null && (e.flags & 128) !== 0)
                for (e = t.child; e !== null; ) {
                  if (f = Bu(e), f !== null) {
                    for (t.flags |= 128, mf(i, !1), e = f.updateQueue, t.updateQueue = e, tr(t, e), t.subtreeFlags = 0, e = a, a = t.child; a !== null; )
                      Fo(a, e), a = a.sibling;
                    return Ne(
                      Yl,
                      Yl.current & vm | nv,
                      t
                    ), mt && _u(t, i.treeForkCount), t.child;
                  }
                  e = e.sibling;
                }
              i.tail !== null && Tl() > Eg && (t.flags |= 128, o = !0, mf(i, !1), t.lanes = 4194304);
            }
          else {
            if (!o)
              if (e = Bu(f), e !== null) {
                if (t.flags |= 128, o = !0, e = e.updateQueue, t.updateQueue = e, tr(t, e), mf(i, !0), i.tail === null && i.tailMode === "hidden" && !f.alternate && !mt)
                  return wt(t), null;
              } else
                2 * Tl() - i.renderingStartTime > Eg && a !== 536870912 && (t.flags |= 128, o = !0, mf(i, !1), t.lanes = 4194304);
            i.isBackwards ? (f.sibling = t.child, t.child = f) : (e = i.last, e !== null ? e.sibling = f : t.child = f, i.last = f);
          }
          return i.tail !== null ? (e = i.tail, i.rendering = e, i.tail = e.sibling, i.renderingStartTime = Tl(), e.sibling = null, a = Yl.current, a = o ? a & vm | nv : a & vm, Ne(Yl, a, t), mt && _u(t, i.treeForkCount), e) : (wt(t), null);
        case 22:
        case 23:
          return va(t), qu(t), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (wt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : wt(t), a = t.updateQueue, a !== null && tr(t, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== a && (t.flags |= 2048), e !== null && ze($r, t), null;
        case 24:
          return a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Cu(Ql, t), wt(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(
        "Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue."
      );
    }
    function a0(e, t) {
      switch (Pm(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== Be && vn(t), t) : null;
        case 3:
          return Cu(Ql, t), q(t), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return ge(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (va(t), t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Ei();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== Be && vn(t), t) : null;
        case 13:
          if (va(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
              throw Error(
                "Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue."
              );
            Ei();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== Be && vn(t), t) : null;
        case 19:
          return ze(Yl, t), null;
        case 4:
          return q(t), null;
        case 10:
          return Cu(t.type, t), null;
        case 22:
        case 23:
          return va(t), qu(t), e !== null && ze($r, t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, (t.mode & et) !== Be && vn(t), t) : null;
        case 24:
          return Cu(Ql, t), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function n0(e, t) {
      switch (Pm(t), t.tag) {
        case 3:
          Cu(Ql, t), q(t);
          break;
        case 26:
        case 27:
        case 5:
          ge(t);
          break;
        case 4:
          q(t);
          break;
        case 31:
          t.memoizedState !== null && va(t);
          break;
        case 13:
          va(t);
          break;
        case 19:
          ze(Yl, t);
          break;
        case 10:
          Cu(t.type, t);
          break;
        case 22:
        case 23:
          va(t), qu(t), e !== null && ze($r, t);
          break;
        case 24:
          Cu(Ql, t);
      }
    }
    function Lu(e) {
      return (e.mode & et) !== Be;
    }
    function Dy(e, t) {
      Lu(e) ? (jn(), co(t, e), Uu()) : co(t, e);
    }
    function io(e, t, a) {
      Lu(e) ? (jn(), Ui(
        a,
        e,
        t
      ), Uu()) : Ui(
        a,
        e,
        t
      );
    }
    function co(e, t) {
      try {
        var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
        if (i !== null) {
          var o = i.next;
          a = o;
          do {
            if ((a.tag & e) === e && (i = void 0, (e & Dn) !== sg && (Rm = !0), i = ue(
              t,
              JT,
              a
            ), (e & Dn) !== sg && (Rm = !1), i !== void 0 && typeof i != "function")) {
              var f = void 0;
              f = (a.tag & yu) !== 0 ? "useLayoutEffect" : (a.tag & Dn) !== 0 ? "useInsertionEffect" : "useEffect";
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

Learn more about data fetching with Hooks: https://react.dev/link/hooks-data-fetching` : " You returned: " + i, ue(
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
        Ct(t, t.return, h);
      }
    }
    function Ui(e, t, a) {
      try {
        var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
        if (o !== null) {
          var f = o.next;
          i = f;
          do {
            if ((i.tag & e) === e) {
              var d = i.inst, h = d.destroy;
              h !== void 0 && (d.destroy = void 0, (e & Dn) !== sg && (Rm = !0), o = t, ue(
                o,
                KT,
                o,
                a,
                h
              ), (e & Dn) !== sg && (Rm = !1));
            }
            i = i.next;
          } while (i !== f);
        }
      } catch (y) {
        Ct(t, t.return, y);
      }
    }
    function My(e, t) {
      Lu(e) ? (jn(), co(t, e), Uu()) : co(t, e);
    }
    function ch(e, t, a) {
      Lu(e) ? (jn(), Ui(
        a,
        e,
        t
      ), Uu()) : Ui(
        a,
        e,
        t
      );
    }
    function yf(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var a = e.stateNode;
        e.type.defaultProps || "ref" in e.memoizedProps || Em || (a.props !== e.memoizedProps && console.error(
          "Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
          de(e) || "instance"
        ), a.state !== e.memoizedState && console.error(
          "Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
          de(e) || "instance"
        ));
        try {
          ue(
            e,
            Hd,
            t,
            a
          );
        } catch (i) {
          Ct(e, e.return, i);
        }
      }
    }
    function u0(e, t, a) {
      return e.getSnapshotBeforeUpdate(t, a);
    }
    function Cy(e, t) {
      var a = t.memoizedProps, i = t.memoizedState;
      t = e.stateNode, e.type.defaultProps || "ref" in e.memoizedProps || Em || (t.props !== e.memoizedProps && console.error(
        "Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
        de(e) || "instance"
      ), t.state !== e.memoizedState && console.error(
        "Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
        de(e) || "instance"
      ));
      try {
        var o = Ci(
          e.type,
          a
        ), f = ue(
          e,
          u0,
          t,
          o,
          i
        );
        a = Vb, f !== void 0 || a.has(e.type) || (a.add(e.type), ue(e, function() {
          console.error(
            "%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.",
            de(e)
          );
        })), t.__reactInternalSnapshotBeforeUpdate = f;
      } catch (d) {
        Ct(e, e.return, d);
      }
    }
    function Uy(e, t, a) {
      a.props = Ci(
        e.type,
        e.memoizedProps
      ), a.state = e.memoizedState, Lu(e) ? (jn(), ue(
        e,
        cb,
        e,
        t,
        a
      ), Uu()) : ue(
        e,
        cb,
        e,
        t,
        a
      );
    }
    function xy(e) {
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
          if (Lu(e))
            try {
              jn(), e.refCleanup = t(a);
            } finally {
              Uu();
            }
          else e.refCleanup = t(a);
        else
          typeof t == "string" ? console.error("String refs are no longer supported.") : t.hasOwnProperty("current") || console.error(
            "Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().",
            de(e)
          ), t.current = a;
      }
    }
    function oo(e, t) {
      try {
        ue(e, xy, e);
      } catch (a) {
        Ct(e, t, a);
      }
    }
    function iu(e, t) {
      var a = e.ref, i = e.refCleanup;
      if (a !== null)
        if (typeof i == "function")
          try {
            if (Lu(e))
              try {
                jn(), ue(e, i);
              } finally {
                Uu(e);
              }
            else ue(e, i);
          } catch (o) {
            Ct(e, t, o);
          } finally {
            e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
          }
        else if (typeof a == "function")
          try {
            if (Lu(e))
              try {
                jn(), ue(e, a, null);
              } finally {
                Uu(e);
              }
            else ue(e, a, null);
          } catch (o) {
            Ct(e, t, o);
          }
        else a.current = null;
    }
    function Ny(e, t, a, i) {
      var o = e.memoizedProps, f = o.id, d = o.onCommit;
      o = o.onRender, t = t === null ? "mount" : "update", ng && (t = "nested-update"), typeof o == "function" && o(
        f,
        t,
        e.actualDuration,
        e.treeBaseDuration,
        e.actualStartTime,
        a
      ), typeof d == "function" && d(f, t, i, a);
    }
    function fo(e, t, a, i) {
      var o = e.memoizedProps;
      e = o.id, o = o.onPostCommit, t = t === null ? "mount" : "update", ng && (t = "nested-update"), typeof o == "function" && o(
        e,
        t,
        i,
        a
      );
    }
    function Hy(e) {
      var t = e.type, a = e.memoizedProps, i = e.stateNode;
      try {
        ue(
          e,
          g0,
          i,
          t,
          a,
          e
        );
      } catch (o) {
        Ct(e, e.return, o);
      }
    }
    function oh(e, t, a) {
      try {
        ue(
          e,
          ip,
          e.stateNode,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ct(e, e.return, i);
      }
    }
    function jy(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && qi(e.type) || e.tag === 4;
    }
    function pf(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || jy(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && qi(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function fh(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? (b0(a), (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, t)) : (b0(a), t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(e), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Il));
      else if (i !== 4 && (i === 27 && qi(e.type) && (a = e.stateNode, t = null), e = e.child, e !== null))
        for (fh(e, t, a), e = e.sibling; e !== null; )
          fh(e, t, a), e = e.sibling;
    }
    function vf(e, t, a) {
      var i = e.tag;
      if (i === 5 || i === 6)
        e = e.stateNode, t ? a.insertBefore(e, t) : a.appendChild(e);
      else if (i !== 4 && (i === 27 && qi(e.type) && (a = e.stateNode), e = e.child, e !== null))
        for (vf(e, t, a), e = e.sibling; e !== null; )
          vf(e, t, a), e = e.sibling;
    }
    function i0(e) {
      for (var t, a = e.return; a !== null; ) {
        if (jy(a)) {
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
          t = t.stateNode, a = pf(e), vf(
            e,
            a,
            t
          );
          break;
        case 5:
          a = t.stateNode, t.flags & 32 && (S0(a), t.flags &= -33), t = pf(e), vf(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          t = t.stateNode.containerInfo, a = pf(e), fh(
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
    function qy(e) {
      var t = e.stateNode, a = e.memoizedProps;
      try {
        ue(
          e,
          Tr,
          e.type,
          a,
          t,
          e
        );
      } catch (i) {
        Ct(e, e.return, i);
      }
    }
    function c0(e, t) {
      return t.tag === 31 ? (t = t.memoizedState, e.memoizedState !== null && t === null) : t.tag === 13 ? (e = e.memoizedState, t = t.memoizedState, e !== null && e.dehydrated !== null && (t === null || t.dehydrated === null)) : t.tag === 3 ? e.memoizedState.isDehydrated && (t.flags & 256) === 0 : !1;
    }
    function By(e, t) {
      if (e = e.containerInfo, d1 = Yg, e = Xv(e), Zm(e)) {
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
              var d = 0, h = -1, y = -1, p = 0, R = 0, D = e, b = null;
              t: for (; ; ) {
                for (var Y; D !== a || o !== 0 && D.nodeType !== 3 || (h = d + o), D !== f || i !== 0 && D.nodeType !== 3 || (y = d + i), D.nodeType === 3 && (d += D.nodeValue.length), (Y = D.firstChild) !== null; )
                  b = D, D = Y;
                for (; ; ) {
                  if (D === e) break t;
                  if (b === a && ++p === o && (h = d), b === f && ++R === i && (y = d), (Y = D.nextSibling) !== null) break;
                  D = b, b = D.parentNode;
                }
                D = Y;
              }
              a = h === -1 || y === -1 ? null : { start: h, end: y };
            } else a = null;
          }
        a = a || { start: 0, end: 0 };
      } else a = null;
      for (h1 = {
        focusedElem: e,
        selectionRange: a
      }, Yg = !1, Oa = t; Oa !== null; )
        if (t = Oa, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
          e.return = t, Oa = e;
        else
          for (; Oa !== null; ) {
            switch (e = t = Oa, a = e.alternate, o = e.flags, e.tag) {
              case 0:
                if ((o & 4) !== 0 && (e = e.updateQueue, e = e !== null ? e.events : null, e !== null))
                  for (a = 0; a < e.length; a++)
                    o = e[a], o.ref.impl = o.nextImpl;
                break;
              case 11:
              case 15:
                break;
              case 1:
                (o & 1024) !== 0 && a !== null && Cy(e, a);
                break;
              case 3:
                if ((o & 1024) !== 0) {
                  if (e = e.stateNode.containerInfo, a = e.nodeType, a === 9)
                    Ah(e);
                  else if (a === 1)
                    switch (e.nodeName) {
                      case "HEAD":
                      case "HTML":
                      case "BODY":
                        Ah(e);
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
              e.return = t.return, Oa = e;
              break;
            }
            Oa = t.return;
          }
    }
    function Rl(e, t, a) {
      var i = Vl(), o = yn(), f = Hn(), d = ya(), h = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Bn(e, a), h & 4 && Dy(a, yu | di);
          break;
        case 1:
          if (Bn(e, a), h & 4)
            if (e = a.stateNode, t === null)
              a.type.defaultProps || "ref" in a.memoizedProps || Em || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                de(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                de(a) || "instance"
              )), Lu(a) ? (jn(), ue(
                a,
                HS,
                a,
                e
              ), Uu()) : ue(
                a,
                HS,
                a,
                e
              );
            else {
              var y = Ci(
                a.type,
                t.memoizedProps
              );
              t = t.memoizedState, a.type.defaultProps || "ref" in a.memoizedProps || Em || (e.props !== a.memoizedProps && console.error(
                "Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.",
                de(a) || "instance"
              ), e.state !== a.memoizedState && console.error(
                "Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.",
                de(a) || "instance"
              )), Lu(a) ? (jn(), ue(
                a,
                nb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              ), Uu()) : ue(
                a,
                nb,
                a,
                e,
                y,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            }
          h & 64 && yf(a), h & 512 && oo(a, a.return);
          break;
        case 3:
          if (t = eu(), Bn(e, a), h & 64 && (h = a.updateQueue, h !== null)) {
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
              ue(
                a,
                Hd,
                h,
                y
              );
            } catch (R) {
              Ct(a, a.return, R);
            }
          }
          e.effectDuration += Ja(t);
          break;
        case 27:
          t === null && h & 4 && qy(a);
        case 26:
        case 5:
          if (Bn(e, a), t === null) {
            if (h & 4) Hy(a);
            else if (h & 64) {
              e = a.type, t = a.memoizedProps, y = a.stateNode;
              try {
                ue(
                  a,
                  Eh,
                  y,
                  e,
                  t,
                  a
                );
              } catch (R) {
                Ct(
                  a,
                  a.return,
                  R
                );
              }
            }
          }
          h & 512 && oo(a, a.return);
          break;
        case 12:
          if (h & 4) {
            h = eu(), Bn(e, a), e = a.stateNode, e.effectDuration += ac(h);
            try {
              ue(
                a,
                Ny,
                a,
                t,
                Vf,
                e.effectDuration
              );
            } catch (R) {
              Ct(a, a.return, R);
            }
          } else Bn(e, a);
          break;
        case 31:
          Bn(e, a), h & 4 && Gy(e, a);
          break;
        case 13:
          Bn(e, a), h & 4 && wy(e, a), h & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (h = yo.bind(
            null,
            a
          ), lS(e, h))));
          break;
        case 22:
          if (h = a.memoizedState !== null || Bo, !h) {
            t = t !== null && t.memoizedState !== null || $l, y = Bo;
            var p = $l;
            Bo = h, ($l = t) && !p ? (Yn(
              e,
              a,
              (a.subtreeFlags & 8772) !== 0
            ), (a.mode & et) !== Be && 0 <= Me && 0 <= He && 0.05 < He - Me && Td(
              a,
              Me,
              He
            )) : Bn(e, a), Bo = y, $l = p;
          }
          break;
        case 30:
          break;
        default:
          Bn(e, a);
      }
      (a.mode & et) !== Be && 0 <= Me && 0 <= He && ((Dl || 0.05 < Al) && zu(
        a,
        Me,
        He,
        Al,
        ml
      ), a.alternate === null && a.return !== null && a.return.alternate !== null && 0.05 < He - Me && (c0(
        a.return.alternate,
        a.return
      ) || Au(
        a,
        Me,
        He,
        "Mount"
      ))), Ma(i), pn(o), ml = f, Dl = d;
    }
    function Ll(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Ll(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && M(t)), e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    function Qu(e, t, a) {
      for (a = a.child; a !== null; )
        Yy(
          e,
          t,
          a
        ), a = a.sibling;
    }
    function Yy(e, t, a) {
      if (Ta && typeof Ta.onCommitFiberUnmount == "function")
        try {
          Ta.onCommitFiberUnmount(wi, a);
        } catch (p) {
          li || (li = !0, console.error(
            "React instrumentation encountered an error: %o",
            p
          ));
        }
      var i = Vl(), o = yn(), f = Hn(), d = ya();
      switch (a.tag) {
        case 26:
          $l || iu(a, t), Qu(
            e,
            t,
            a
          ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (e = a.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          $l || iu(a, t);
          var h = kl, y = kn;
          qi(a.type) && (kl = a.stateNode, kn = !1), Qu(
            e,
            t,
            a
          ), ue(
            a,
            Ar,
            a.stateNode
          ), kl = h, kn = y;
          break;
        case 5:
          $l || iu(a, t);
        case 6:
          if (h = kl, y = kn, kl = null, Qu(
            e,
            t,
            a
          ), kl = h, kn = y, kl !== null)
            if (kn)
              try {
                ue(
                  a,
                  zf,
                  kl,
                  a.stateNode
                );
              } catch (p) {
                Ct(
                  a,
                  t,
                  p
                );
              }
            else
              try {
                ue(
                  a,
                  E0,
                  kl,
                  a.stateNode
                );
              } catch (p) {
                Ct(
                  a,
                  t,
                  p
                );
              }
          break;
        case 18:
          kl !== null && (kn ? (e = kl, br(
            e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
            a.stateNode
          ), Cf(e)) : br(kl, a.stateNode));
          break;
        case 4:
          h = kl, y = kn, kl = a.stateNode.containerInfo, kn = !0, Qu(
            e,
            t,
            a
          ), kl = h, kn = y;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Ui(
            Dn,
            a,
            t
          ), $l || io(
            a,
            t,
            yu
          ), Qu(
            e,
            t,
            a
          );
          break;
        case 1:
          $l || (iu(a, t), h = a.stateNode, typeof h.componentWillUnmount == "function" && Uy(
            a,
            t,
            h
          )), Qu(
            e,
            t,
            a
          );
          break;
        case 21:
          Qu(
            e,
            t,
            a
          );
          break;
        case 22:
          $l = (h = $l) || a.memoizedState !== null, Qu(
            e,
            t,
            a
          ), $l = h;
          break;
        default:
          Qu(
            e,
            t,
            a
          );
      }
      (a.mode & et) !== Be && 0 <= Me && 0 <= He && (Dl || 0.05 < Al) && zu(
        a,
        Me,
        He,
        Al,
        ml
      ), Ma(i), pn(o), ml = f, Dl = d;
    }
    function Gy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          ue(
            t,
            fp,
            e
          );
        } catch (a) {
          Ct(t, t.return, a);
        }
      }
    }
    function wy(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
        try {
          ue(
            t,
            bc,
            e
          );
        } catch (a) {
          Ct(t, t.return, a);
        }
    }
    function lr(e) {
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
    function ar(e, t) {
      var a = lr(e);
      t.forEach(function(i) {
        if (!a.has(i)) {
          if (a.add(i), Kn)
            if (Tm !== null && Am !== null)
              Wu(Am, Tm);
            else
              throw Error(
                "Expected finished root and lanes to be set. This is a bug in React."
              );
          var o = Ni.bind(null, e, i);
          i.then(o, o);
        }
      });
    }
    function aa(e, t) {
      var a = t.deletions;
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var o = e, f = t, d = a[i], h = Vl(), y = f;
          e: for (; y !== null; ) {
            switch (y.tag) {
              case 27:
                if (qi(y.type)) {
                  kl = y.stateNode, kn = !1;
                  break e;
                }
                break;
              case 5:
                kl = y.stateNode, kn = !1;
                break e;
              case 3:
              case 4:
                kl = y.stateNode.containerInfo, kn = !0;
                break e;
            }
            y = y.return;
          }
          if (kl === null)
            throw Error(
              "Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue."
            );
          Yy(o, f, d), kl = null, kn = !1, (d.mode & et) !== Be && 0 <= Me && 0 <= He && 0.05 < He - Me && Au(
            d,
            Me,
            He,
            "Unmount"
          ), Ma(h), o = d, f = o.alternate, f !== null && (f.return = null), o.return = null;
        }
      if (t.subtreeFlags & 13886)
        for (t = t.child; t !== null; )
          Xy(t, e), t = t.sibling;
    }
    function Xy(e, t) {
      var a = Vl(), i = yn(), o = Hn(), f = ya(), d = e.alternate, h = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          aa(t, e), en(e), h & 4 && (Ui(
            Dn | di,
            e,
            e.return
          ), co(Dn | di, e), io(
            e,
            e.return,
            yu | di
          ));
          break;
        case 1:
          if (aa(t, e), en(e), h & 512 && ($l || d === null || iu(d, d.return)), h & 64 && Bo && (h = e.updateQueue, h !== null && (d = h.callbacks, d !== null))) {
            var y = h.shared.hiddenCallbacks;
            h.shared.hiddenCallbacks = y === null ? d : y.concat(d);
          }
          break;
        case 26:
          if (y = Qi, aa(t, e), en(e), h & 512 && ($l || d === null || iu(d, d.return)), h & 4) {
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
                        )[0], (!p || p[Br] || p[fa] || p.namespaceURI === ft || p.hasAttribute("itemprop")) && (p = y.createElement(h), y.head.insertBefore(
                          p,
                          y.querySelector(
                            "head > title"
                          )
                        )), vt(p, h, d), p[fa] = e, Se(p), h = p;
                        break e;
                      case "link":
                        var R = C0(
                          "link",
                          "href",
                          y
                        ).get(h + (d.href || ""));
                        if (R) {
                          for (var D = 0; D < R.length; D++)
                            if (p = R[D], p.getAttribute("href") === (d.href == null || d.href === "" ? null : d.href) && p.getAttribute("rel") === (d.rel == null ? null : d.rel) && p.getAttribute("title") === (d.title == null ? null : d.title) && p.getAttribute("crossorigin") === (d.crossOrigin == null ? null : d.crossOrigin)) {
                              R.splice(D, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), vt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      case "meta":
                        if (R = C0(
                          "meta",
                          "content",
                          y
                        ).get(h + (d.content || ""))) {
                          for (D = 0; D < R.length; D++)
                            if (p = R[D], Xe(
                              d.content,
                              "content"
                            ), p.getAttribute("content") === (d.content == null ? null : "" + d.content) && p.getAttribute("name") === (d.name == null ? null : d.name) && p.getAttribute("property") === (d.property == null ? null : d.property) && p.getAttribute("http-equiv") === (d.httpEquiv == null ? null : d.httpEquiv) && p.getAttribute("charset") === (d.charSet == null ? null : d.charSet)) {
                              R.splice(D, 1);
                              break t;
                            }
                        }
                        p = y.createElement(h), vt(p, h, d), y.head.appendChild(
                          p
                        );
                        break;
                      default:
                        throw Error(
                          'getNodesForType encountered a type it did not expect: "' + h + '". This is a bug in React.'
                        );
                    }
                    p[fa] = e, Se(p), h = p;
                  }
                  e.stateNode = h;
                } else
                  mp(
                    y,
                    e.type,
                    e.stateNode
                  );
              else
                e.stateNode = Dh(
                  y,
                  h,
                  e.memoizedProps
                );
            else
              p !== h ? (p === null ? d.stateNode !== null && (d = d.stateNode, d.parentNode.removeChild(d)) : p.count--, h === null ? mp(
                y,
                e.type,
                e.stateNode
              ) : Dh(
                y,
                h,
                e.memoizedProps
              )) : h === null && e.stateNode !== null && oh(
                e,
                e.memoizedProps,
                d.memoizedProps
              );
          }
          break;
        case 27:
          aa(t, e), en(e), h & 512 && ($l || d === null || iu(d, d.return)), d !== null && h & 4 && oh(
            e,
            e.memoizedProps,
            d.memoizedProps
          );
          break;
        case 5:
          if (aa(t, e), en(e), h & 512 && ($l || d === null || iu(d, d.return)), e.flags & 32) {
            y = e.stateNode;
            try {
              ue(
                e,
                S0,
                y
              );
            } catch (me) {
              Ct(e, e.return, me);
            }
          }
          h & 4 && e.stateNode != null && (y = e.memoizedProps, oh(
            e,
            y,
            d !== null ? d.memoizedProps : y
          )), h & 1024 && (KS = !0, e.type !== "form" && console.error(
            "Unexpected host component type. Expected a form. This is a bug in React."
          ));
          break;
        case 6:
          if (aa(t, e), en(e), h & 4) {
            if (e.stateNode === null)
              throw Error(
                "This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue."
              );
            h = e.memoizedProps, d = d !== null ? d.memoizedProps : h, y = e.stateNode;
            try {
              ue(
                e,
                tS,
                y,
                d,
                h
              );
            } catch (me) {
              Ct(e, e.return, me);
            }
          }
          break;
        case 3:
          if (y = eu(), jg = null, p = Qi, Qi = zr(t.containerInfo), aa(t, e), Qi = p, en(e), h & 4 && d !== null && d.memoizedState.isDehydrated)
            try {
              ue(
                e,
                _h,
                t.containerInfo
              );
            } catch (me) {
              Ct(e, e.return, me);
            }
          KS && (KS = !1, nr(e)), t.effectDuration += Ja(
            y
          );
          break;
        case 4:
          h = Qi, Qi = zr(
            e.stateNode.containerInfo
          ), aa(t, e), en(e), Qi = h;
          break;
        case 12:
          h = eu(), aa(t, e), en(e), e.stateNode.effectDuration += ac(h);
          break;
        case 31:
          aa(t, e), en(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ar(e, h)));
          break;
        case 13:
          aa(t, e), en(e), e.child.flags & 8192 && e.memoizedState !== null != (d !== null && d.memoizedState !== null) && (bg = Tl()), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ar(e, h)));
          break;
        case 22:
          y = e.memoizedState !== null;
          var b = d !== null && d.memoizedState !== null, Y = Bo, oe = $l;
          if (Bo = Y || y, $l = oe || b, aa(t, e), $l = oe, Bo = Y, b && !y && !Y && !oe && (e.mode & et) !== Be && 0 <= Me && 0 <= He && 0.05 < He - Me && Td(
            e,
            Me,
            He
          ), en(e), h & 8192)
            e: for (t = e.stateNode, t._visibility = y ? t._visibility & ~Vp : t._visibility | Vp, !y || d === null || b || Bo || $l || (hc(e), (e.mode & et) !== Be && 0 <= Me && 0 <= He && 0.05 < He - Me && Au(
              e,
              Me,
              He,
              "Disconnect"
            )), d = null, t = e; ; ) {
              if (t.tag === 5 || t.tag === 26) {
                if (d === null) {
                  b = d = t;
                  try {
                    p = b.stateNode, y ? ue(
                      b,
                      A0,
                      p
                    ) : ue(
                      b,
                      R0,
                      b.stateNode,
                      b.memoizedProps
                    );
                  } catch (me) {
                    Ct(b, b.return, me);
                  }
                }
              } else if (t.tag === 6) {
                if (d === null) {
                  b = t;
                  try {
                    R = b.stateNode, y ? ue(
                      b,
                      z0,
                      R
                    ) : ue(
                      b,
                      Th,
                      R,
                      b.memoizedProps
                    );
                  } catch (me) {
                    Ct(b, b.return, me);
                  }
                }
              } else if (t.tag === 18) {
                if (d === null) {
                  b = t;
                  try {
                    D = b.stateNode, y ? ue(
                      b,
                      T0,
                      D
                    ) : ue(
                      b,
                      O0,
                      b.stateNode
                    );
                  } catch (me) {
                    Ct(b, b.return, me);
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
          h & 4 && (h = e.updateQueue, h !== null && (d = h.retryQueue, d !== null && (h.retryQueue = null, ar(e, d))));
          break;
        case 19:
          aa(t, e), en(e), h & 4 && (h = e.updateQueue, h !== null && (e.updateQueue = null, ar(e, h)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          aa(t, e), en(e);
      }
      (e.mode & et) !== Be && 0 <= Me && 0 <= He && ((Dl || 0.05 < Al) && zu(
        e,
        Me,
        He,
        Al,
        ml
      ), e.alternate === null && e.return !== null && e.return.alternate !== null && 0.05 < He - Me && (c0(
        e.return.alternate,
        e.return
      ) || Au(
        e,
        Me,
        He,
        "Mount"
      ))), Ma(a), pn(i), ml = o, Dl = f;
    }
    function en(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          ue(e, i0, e);
        } catch (a) {
          Ct(e, e.return, a);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function nr(e) {
      if (e.subtreeFlags & 1024)
        for (e = e.child; e !== null; ) {
          var t = e;
          nr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
        }
    }
    function Bn(e, t) {
      if (t.subtreeFlags & 8772)
        for (t = t.child; t !== null; )
          Rl(e, t.alternate, t), t = t.sibling;
    }
    function Vy(e) {
      var t = Vl(), a = yn(), i = Hn(), o = ya();
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          io(
            e,
            e.return,
            yu
          ), hc(e);
          break;
        case 1:
          iu(e, e.return);
          var f = e.stateNode;
          typeof f.componentWillUnmount == "function" && Uy(
            e,
            e.return,
            f
          ), hc(e);
          break;
        case 27:
          ue(
            e,
            Ar,
            e.stateNode
          );
        case 26:
        case 5:
          iu(e, e.return), hc(e);
          break;
        case 22:
          e.memoizedState === null && hc(e);
          break;
        case 30:
          hc(e);
          break;
        default:
          hc(e);
      }
      (e.mode & et) !== Be && 0 <= Me && 0 <= He && (Dl || 0.05 < Al) && zu(
        e,
        Me,
        He,
        Al,
        ml
      ), Ma(t), pn(a), ml = i, Dl = o;
    }
    function hc(e) {
      for (e = e.child; e !== null; )
        Vy(e), e = e.sibling;
    }
    function Ly(e, t, a, i) {
      var o = Vl(), f = yn(), d = Hn(), h = ya(), y = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Yn(
            e,
            a,
            i
          ), Dy(a, yu);
          break;
        case 1:
          if (Yn(
            e,
            a,
            i
          ), t = a.stateNode, typeof t.componentDidMount == "function" && ue(
            a,
            HS,
            a,
            t
          ), t = a.updateQueue, t !== null) {
            e = a.stateNode;
            try {
              ue(
                a,
                xs,
                t,
                e
              );
            } catch (p) {
              Ct(a, a.return, p);
            }
          }
          i && y & 64 && yf(a), oo(a, a.return);
          break;
        case 27:
          qy(a);
        case 26:
        case 5:
          Yn(
            e,
            a,
            i
          ), i && t === null && y & 4 && Hy(a), oo(a, a.return);
          break;
        case 12:
          if (i && y & 4) {
            y = eu(), Yn(
              e,
              a,
              i
            ), i = a.stateNode, i.effectDuration += ac(y);
            try {
              ue(
                a,
                Ny,
                a,
                t,
                Vf,
                i.effectDuration
              );
            } catch (p) {
              Ct(a, a.return, p);
            }
          } else
            Yn(
              e,
              a,
              i
            );
          break;
        case 31:
          Yn(
            e,
            a,
            i
          ), i && y & 4 && Gy(e, a);
          break;
        case 13:
          Yn(
            e,
            a,
            i
          ), i && y & 4 && wy(e, a);
          break;
        case 22:
          a.memoizedState === null && Yn(
            e,
            a,
            i
          ), oo(a, a.return);
          break;
        case 30:
          break;
        default:
          Yn(
            e,
            a,
            i
          );
      }
      (a.mode & et) !== Be && 0 <= Me && 0 <= He && (Dl || 0.05 < Al) && zu(
        a,
        Me,
        He,
        Al,
        ml
      ), Ma(o), pn(f), ml = d, Dl = h;
    }
    function Yn(e, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; )
        Ly(
          e,
          t.alternate,
          t,
          a
        ), t = t.sibling;
    }
    function ur(e, t) {
      var a = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (e != null && Kc(e), a != null && Os(a));
    }
    function ir(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (Kc(t), e != null && Os(e));
    }
    function Gn(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (t = t.child; t !== null; ) {
          var f = t.sibling;
          sh(
            e,
            t,
            a,
            i,
            f !== null ? f.actualStartTime : o
          ), t = f;
        }
    }
    function sh(e, t, a, i, o) {
      var f = Vl(), d = yn(), h = Hn(), y = ya(), p = Yf, R = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (t.mode & et) !== Be && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            sa,
            a
          ), Gn(
            e,
            t,
            a,
            i,
            o
          ), R & 2048 && My(t, Mn | di);
          break;
        case 1:
          (t.mode & et) !== Be && 0 < t.actualStartTime && ((t.flags & 128) !== 0 ? zd(
            t,
            t.actualStartTime,
            o,
            []
          ) : (t.flags & 1) !== 0 && Ad(
            t,
            t.actualStartTime,
            o,
            sa,
            a
          )), Gn(
            e,
            t,
            a,
            i,
            o
          );
          break;
        case 3:
          var D = eu(), b = sa;
          sa = t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) === 0, Gn(
            e,
            t,
            a,
            i,
            o
          ), sa = b, R & 2048 && (a = null, t.alternate !== null && (a = t.alternate.memoizedState.cache), i = t.memoizedState.cache, i !== a && (Kc(i), a != null && Os(a))), e.passiveEffectDuration += Ja(
            D
          );
          break;
        case 12:
          if (R & 2048) {
            R = eu(), Gn(
              e,
              t,
              a,
              i,
              o
            ), e = t.stateNode, e.passiveEffectDuration += ac(R);
            try {
              ue(
                t,
                fo,
                t,
                t.alternate,
                Vf,
                e.passiveEffectDuration
              );
            } catch (Y) {
              Ct(t, t.return, Y);
            }
          } else
            Gn(
              e,
              t,
              a,
              i,
              o
            );
          break;
        case 31:
          R = sa, D = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, D !== null && b === null ? (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (sa = !1, D = D.hydrationErrors, D !== null && zd(
            t,
            t.actualStartTime,
            o,
            D
          )) : sa = !0) : sa = !1, Gn(
            e,
            t,
            a,
            i,
            o
          ), sa = R;
          break;
        case 13:
          R = sa, D = t.alternate !== null ? t.alternate.memoizedState : null, b = t.memoizedState, D === null || D.dehydrated === null || b !== null && b.dehydrated !== null ? sa = !1 : (b = t.deletions, b !== null && 0 < b.length && b[0].tag === 18 ? (sa = !1, D = D.hydrationErrors, D !== null && zd(
            t,
            t.actualStartTime,
            o,
            D
          )) : sa = !0), Gn(
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
          b = t.stateNode, D = t.alternate, t.memoizedState !== null ? b._visibility & _o ? Gn(
            e,
            t,
            a,
            i,
            o
          ) : gf(
            e,
            t,
            a,
            i,
            o
          ) : b._visibility & _o ? Gn(
            e,
            t,
            a,
            i,
            o
          ) : (b._visibility |= _o, xi(
            e,
            t,
            a,
            i,
            (t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child),
            o
          ), (t.mode & et) === Be || sa || (e = t.actualStartTime, 0 <= e && 0.05 < o - e && Td(t, e, o), 0 <= Me && 0 <= He && 0.05 < He - Me && Td(
            t,
            Me,
            He
          ))), R & 2048 && ur(
            D,
            t
          );
          break;
        case 24:
          Gn(
            e,
            t,
            a,
            i,
            o
          ), R & 2048 && ir(t.alternate, t);
          break;
        default:
          Gn(
            e,
            t,
            a,
            i,
            o
          );
      }
      (t.mode & et) !== Be && ((e = !sa && t.alternate === null && t.return !== null && t.return.alternate !== null) && (a = t.actualStartTime, 0 <= a && 0.05 < o - a && Au(
        t,
        a,
        o,
        "Mount"
      )), 0 <= Me && 0 <= He && ((Dl || 0.05 < Al) && zu(
        t,
        Me,
        He,
        Al,
        ml
      ), e && 0.05 < He - Me && Au(
        t,
        Me,
        He,
        "Mount"
      ))), Ma(f), pn(d), ml = h, Dl = y, Yf = p;
    }
    function xi(e, t, a, i, o, f) {
      for (o = o && ((t.subtreeFlags & 10256) !== 0 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child)), t = t.child; t !== null; ) {
        var d = t.sibling;
        rh(
          e,
          t,
          a,
          i,
          o,
          d !== null ? d.actualStartTime : f
        ), t = d;
      }
    }
    function rh(e, t, a, i, o, f) {
      var d = Vl(), h = yn(), y = Hn(), p = ya(), R = Yf;
      o && (t.mode & et) !== Be && 0 < t.actualStartTime && (t.flags & 1) !== 0 && Ad(
        t,
        t.actualStartTime,
        f,
        sa,
        a
      );
      var D = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          xi(
            e,
            t,
            a,
            i,
            o,
            f
          ), My(t, Mn);
          break;
        case 23:
          break;
        case 22:
          var b = t.stateNode;
          t.memoizedState !== null ? b._visibility & _o ? xi(
            e,
            t,
            a,
            i,
            o,
            f
          ) : gf(
            e,
            t,
            a,
            i,
            f
          ) : (b._visibility |= _o, xi(
            e,
            t,
            a,
            i,
            o,
            f
          )), o && D & 2048 && ur(
            t.alternate,
            t
          );
          break;
        case 24:
          xi(
            e,
            t,
            a,
            i,
            o,
            f
          ), o && D & 2048 && ir(t.alternate, t);
          break;
        default:
          xi(
            e,
            t,
            a,
            i,
            o,
            f
          );
      }
      (t.mode & et) !== Be && 0 <= Me && 0 <= He && (Dl || 0.05 < Al) && zu(
        t,
        Me,
        He,
        Al,
        ml
      ), Ma(d), pn(h), ml = y, Dl = p, Yf = R;
    }
    function gf(e, t, a, i, o) {
      if (t.subtreeFlags & 10256 || t.actualDuration !== 0 && (t.alternate === null || t.alternate.child !== t.child))
        for (var f = t.child; f !== null; ) {
          t = f.sibling;
          var d = e, h = a, y = i, p = t !== null ? t.actualStartTime : o, R = Yf;
          (f.mode & et) !== Be && 0 < f.actualStartTime && (f.flags & 1) !== 0 && Ad(
            f,
            f.actualStartTime,
            p,
            sa,
            h
          );
          var D = f.flags;
          switch (f.tag) {
            case 22:
              gf(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && ur(f.alternate, f);
              break;
            case 24:
              gf(
                d,
                f,
                h,
                y,
                p
              ), D & 2048 && ir(f.alternate, f);
              break;
            default:
              gf(
                d,
                f,
                h,
                y,
                p
              );
          }
          Yf = R, f = t;
        }
    }
    function mc(e, t, a) {
      if (e.subtreeFlags & ov)
        for (e = e.child; e !== null; )
          Qy(
            e,
            t,
            a
          ), e = e.sibling;
    }
    function Qy(e, t, a) {
      switch (e.tag) {
        case 26:
          mc(
            e,
            t,
            a
          ), e.flags & ov && e.memoizedState !== null && Uh(
            a,
            Qi,
            e.memoizedState,
            e.memoizedProps
          );
          break;
        case 5:
          mc(
            e,
            t,
            a
          );
          break;
        case 3:
        case 4:
          var i = Qi;
          Qi = zr(
            e.stateNode.containerInfo
          ), mc(
            e,
            t,
            a
          ), Qi = i;
          break;
        case 22:
          e.memoizedState === null && (i = e.alternate, i !== null && i.memoizedState !== null ? (i = ov, ov = 16777216, mc(
            e,
            t,
            a
          ), ov = i) : mc(
            e,
            t,
            a
          ));
          break;
        default:
          mc(
            e,
            t,
            a
          );
      }
    }
    function Zu(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function so(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Vl();
            Oa = i, dh(
              i,
              e
            ), (i.mode & et) !== Be && 0 <= Me && 0 <= He && 0.05 < He - Me && Au(
              i,
              Me,
              He,
              "Unmount"
            ), Ma(o);
          }
        Zu(e);
      }
      if (e.subtreeFlags & 10256)
        for (e = e.child; e !== null; )
          o0(e), e = e.sibling;
    }
    function o0(e) {
      var t = Vl(), a = yn(), i = Hn(), o = ya();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          so(e), e.flags & 2048 && ch(
            e,
            e.return,
            Mn | di
          );
          break;
        case 3:
          var f = eu();
          so(e), e.stateNode.passiveEffectDuration += Ja(f);
          break;
        case 12:
          f = eu(), so(e), e.stateNode.passiveEffectDuration += ac(f);
          break;
        case 22:
          f = e.stateNode, e.memoizedState !== null && f._visibility & _o && (e.return === null || e.return.tag !== 13) ? (f._visibility &= ~_o, cr(e), (e.mode & et) !== Be && 0 <= Me && 0 <= He && 0.05 < He - Me && Au(
            e,
            Me,
            He,
            "Disconnect"
          )) : so(e);
          break;
        default:
          so(e);
      }
      (e.mode & et) !== Be && 0 <= Me && 0 <= He && (Dl || 0.05 < Al) && zu(
        e,
        Me,
        He,
        Al,
        ml
      ), Ma(t), pn(a), Dl = o, ml = i;
    }
    function cr(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null)
          for (var a = 0; a < t.length; a++) {
            var i = t[a], o = Vl();
            Oa = i, dh(
              i,
              e
            ), (i.mode & et) !== Be && 0 <= Me && 0 <= He && 0.05 < He - Me && Au(
              i,
              Me,
              He,
              "Unmount"
            ), Ma(o);
          }
        Zu(e);
      }
      for (e = e.child; e !== null; )
        Ju(e), e = e.sibling;
    }
    function Ju(e) {
      var t = Vl(), a = yn(), i = Hn(), o = ya();
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          ch(
            e,
            e.return,
            Mn
          ), cr(e);
          break;
        case 22:
          var f = e.stateNode;
          f._visibility & _o && (f._visibility &= ~_o, cr(e));
          break;
        default:
          cr(e);
      }
      (e.mode & et) !== Be && 0 <= Me && 0 <= He && (Dl || 0.05 < Al) && zu(
        e,
        Me,
        He,
        Al,
        ml
      ), Ma(t), pn(a), Dl = o, ml = i;
    }
    function dh(e, t) {
      for (; Oa !== null; ) {
        var a = Oa, i = a, o = t, f = Vl(), d = yn(), h = Hn(), y = ya();
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            ch(
              i,
              o,
              Mn
            );
            break;
          case 23:
          case 22:
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (o = i.memoizedState.cachePool.pool, o != null && Kc(o));
            break;
          case 24:
            Os(i.memoizedState.cache);
        }
        if ((i.mode & et) !== Be && 0 <= Me && 0 <= He && (Dl || 0.05 < Al) && zu(
          i,
          Me,
          He,
          Al,
          ml
        ), Ma(f), pn(d), Dl = y, ml = h, i = a.child, i !== null) i.return = a, Oa = i;
        else
          e: for (a = e; Oa !== null; ) {
            if (i = Oa, f = i.sibling, d = i.return, Ll(i), i === a) {
              Oa = null;
              break e;
            }
            if (f !== null) {
              f.return = d, Oa = f;
              break e;
            }
            Oa = d;
          }
      }
    }
    function f0() {
      IT.forEach(function(e) {
        return e();
      });
    }
    function or() {
      var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
      return e || Z.actQueue === null || console.error(
        "The current testing environment is not configured to support act(...)"
      ), e;
    }
    function na(e) {
      if ((_t & ra) !== Ra && lt !== 0)
        return lt & -lt;
      var t = Z.T;
      return t !== null ? (t._updatedFibers || (t._updatedFibers = /* @__PURE__ */ new Set()), t._updatedFibers.add(e), Ot()) : Ki();
    }
    function Pt() {
      if (Fn === 0)
        if ((lt & 536870912) === 0 || mt) {
          var e = jf;
          jf <<= 1, (jf & 3932160) === 0 && (jf = 262144), Fn = e;
        } else Fn = 536870912;
      return e = mu.current, e !== null && (e.flags |= 32), Fn;
    }
    function hl(e, t, a) {
      if (Rm && console.error("useInsertionEffect must not schedule updates."), n1 && (zg = !0), (e === tl && (Kt === ed || Kt === td) || e.cancelPendingCommit !== null) && (Na(e, 0), xa(
        e,
        lt,
        Fn,
        !1
      )), ha(e, a), (_t & ra) !== Ra && e === tl) {
        if (Jn)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              e = ut && de(ut) || "Unknown", nE.has(e) || (nE.add(e), t = de(t) || "Unknown", console.error(
                "Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://react.dev/link/setstate-in-render",
                t,
                e,
                e
              ));
              break;
            case 1:
              aE || (console.error(
                "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."
              ), aE = !0);
          }
      } else
        Kn && ma(e, t, a), hr(t), e === tl && ((_t & ra) === Ra && (Wf |= a), zl === Kf && xa(
          e,
          lt,
          Fn,
          !1
        )), ja(e);
    }
    function s0(e, t, a) {
      if ((_t & (ra | pu)) !== Ra)
        throw Error("Should not already be working.");
      if (lt !== 0 && ut !== null) {
        var i = ut, o = Tl();
        switch (W1) {
          case rv:
          case ed:
            var f = $p;
            ol && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Suspended",
                f,
                o,
                ni,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Suspended",
              f,
              o,
              ni,
              void 0,
              "primary-light"
            ));
            break;
          case td:
            f = $p, ol && ((i = i._debugTask) ? i.run(
              console.timeStamp.bind(
                console,
                "Action",
                f,
                o,
                ni,
                void 0,
                "primary-light"
              )
            ) : console.timeStamp(
              "Action",
              f,
              o,
              ni,
              void 0,
              "primary-light"
            ));
            break;
          default:
            ol && (i = o - $p, 3 > i || console.timeStamp(
              "Blocked",
              $p,
              o,
              ni,
              void 0,
              5 > i ? "primary-light" : 10 > i ? "primary" : 100 > i ? "primary-dark" : "error"
            ));
        }
      }
      f = (a = !a && (t & 127) === 0 && (t & e.expiredLanes) === 0 || wl(e, t)) ? xl(e, t) : ph(e, t, !0);
      var d = a;
      do {
        if (f === Yo) {
          zm && !a && xa(e, t, 0, !1), t = Kt, $p = Zl(), W1 = t;
          break;
        } else {
          if (i = Tl(), o = e.current.alternate, d && !fr(o)) {
            hn(t), o = za, f = i, !ol || f <= o || (Nl ? Nl.run(
              console.timeStamp.bind(
                console,
                "Teared Render",
                o,
                f,
                Et,
                gt,
                "error"
              )
            ) : console.timeStamp(
              "Teared Render",
              o,
              f,
              Et,
              gt,
              "error"
            )), cu(t, i), f = ph(e, t, !1), d = !1;
            continue;
          }
          if (f === Pr) {
            if (d = t, e.errorRecoveryDisabledLanes & d)
              var h = 0;
            else
              h = e.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
            if (h !== 0) {
              hn(t), Km(
                za,
                i,
                t,
                Nl
              ), cu(t, i), t = h;
              e: {
                i = e, f = d, d = hv;
                var y = i.current.memoizedState.isDehydrated;
                if (y && (Na(i, h).flags |= 256), h = ph(
                  i,
                  h,
                  !1
                ), h !== Pr) {
                  if (WS && !y) {
                    i.errorRecoveryDisabledLanes |= f, Wf |= f, f = Kf;
                    break e;
                  }
                  i = Cn, Cn = d, i !== null && (Cn === null ? Cn = i : Cn.push.apply(
                    Cn,
                    i
                  ));
                }
                f = h;
              }
              if (d = !1, f !== Pr) continue;
              i = Tl();
            }
          }
          if (f === sv) {
            hn(t), Km(
              za,
              i,
              t,
              Nl
            ), cu(t, i), Na(e, 0), xa(e, t, 0, !0);
            break;
          }
          e: {
            switch (a = e, f) {
              case Yo:
              case sv:
                throw Error("Root did not complete. This is a bug in React.");
              case Kf:
                if ((t & 4194048) !== t) break;
              case pg:
                hn(t), Qv(
                  za,
                  i,
                  t,
                  Nl
                ), cu(t, i), o = t, (o & 127) !== 0 ? tg = i : (o & 4194048) !== 0 && (lg = i), xa(
                  a,
                  t,
                  Fn,
                  !$f
                );
                break e;
              case Pr:
                Cn = null;
                break;
              case yg:
              case Qb:
                break;
              default:
                throw Error("Unknown root exit status.");
            }
            if (Z.actQueue !== null)
              ba(
                a,
                o,
                t,
                Cn,
                mv,
                Sg,
                Fn,
                Wf,
                ld,
                f,
                null,
                null,
                za,
                i
              );
            else {
              if ((t & 62914560) === t && (d = bg + Kb - Tl(), 10 < d)) {
                if (xa(
                  a,
                  t,
                  Fn,
                  !$f
                ), We(a, 0, !0) !== 0) break e;
                Zi = t, a.timeoutHandle = dE(
                  Zy.bind(
                    null,
                    a,
                    o,
                    Cn,
                    mv,
                    Sg,
                    t,
                    Fn,
                    Wf,
                    ld,
                    $f,
                    f,
                    "Throttled",
                    za,
                    i
                  ),
                  d
                );
                break e;
              }
              Zy(
                a,
                o,
                Cn,
                mv,
                Sg,
                t,
                Fn,
                Wf,
                ld,
                $f,
                f,
                null,
                za,
                i
              );
            }
          }
        }
        break;
      } while (!0);
      ja(e);
    }
    function Zy(e, t, a, i, o, f, d, h, y, p, R, D, b, Y) {
      e.timeoutHandle = cd;
      var oe = t.subtreeFlags, me = null;
      if ((oe & 8192 || (oe & 16785408) === 16785408) && (me = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Il
      }, Qy(t, f, me), oe = (f & 62914560) === f ? bg - Tl() : (f & 4194048) === f ? Jb - Tl() : 0, oe = yp(me, oe), oe !== null)) {
        Zi = f, e.cancelPendingCommit = oe(
          ba.bind(
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
            me,
            me.waitingForViewTransition ? "Waiting for the previous Animation" : 0 < me.count ? 0 < me.imgCount ? "Suspended on CSS and Images" : "Suspended on CSS" : me.imgCount === 1 ? "Suspended on an Image" : 0 < me.imgCount ? "Suspended on Images" : null,
            b,
            Y
          )
        ), xa(
          e,
          f,
          d,
          !p
        );
        return;
      }
      ba(
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
        me,
        D,
        b,
        Y
      );
    }
    function fr(e) {
      for (var t = e; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
          for (var i = 0; i < a.length; i++) {
            var o = a[i], f = o.getSnapshot;
            o = o.value;
            try {
              if (!Rn(f(), o)) return !1;
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
    function xa(e, t, a, i) {
      t &= ~FS, t &= ~Wf, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
      for (var o = t; 0 < o; ) {
        var f = 31 - ca(o), d = 1 << f;
        i[f] = -1, o &= ~d;
      }
      a !== 0 && Mc(e, a, t);
    }
    function ro() {
      return (_t & (ra | pu)) === Ra ? (bf(0), !1) : !0;
    }
    function hh() {
      if (ut !== null) {
        if (Kt === Wn)
          var e = ut.return;
        else
          e = ut, ec(), ic(e), ym = null, av = 0, e = ut;
        for (; e !== null; )
          n0(e.alternate, e), e = e.return;
        ut = null;
      }
    }
    function cu(e, t) {
      (e & 127) !== 0 && (Qr = t), (e & 4194048) !== 0 && (xo = t), (e & 62914560) !== 0 && ($1 = t), (e & 2080374784) !== 0 && (k1 = t);
    }
    function Na(e, t) {
      ol && (console.timeStamp(
        "Blocking Track",
        3e-3,
        3e-3,
        "Blocking",
        gt,
        "primary-light"
      ), console.timeStamp(
        "Transition Track",
        3e-3,
        3e-3,
        "Transition",
        gt,
        "primary-light"
      ), console.timeStamp(
        "Suspense Track",
        3e-3,
        3e-3,
        "Suspense",
        gt,
        "primary-light"
      ), console.timeStamp(
        "Idle Track",
        3e-3,
        3e-3,
        "Idle",
        gt,
        "primary-light"
      ));
      var a = za;
      if (za = Zl(), lt !== 0 && 0 < a) {
        if (hn(lt), zl === yg || zl === Kf)
          Qv(
            a,
            za,
            t,
            Nl
          );
        else {
          var i = za, o = Nl;
          if (ol && !(i <= a)) {
            var f = (t & 738197653) === t ? "tertiary-dark" : "primary-dark", d = (t & 536870912) === t ? "Prewarm" : (t & 201326741) === t ? "Interrupted Hydration" : "Interrupted Render";
            o ? o.run(
              console.timeStamp.bind(
                console,
                d,
                a,
                i,
                Et,
                gt,
                f
              )
            ) : console.timeStamp(
              d,
              a,
              i,
              Et,
              gt,
              f
            );
          }
        }
        cu(lt, za);
      }
      if (a = Nl, Nl = null, (t & 127) !== 0) {
        Nl = Zp, o = 0 <= Oc && Oc < Qr ? Qr : Oc, i = 0 <= Zr && Zr < Qr ? Qr : Zr, f = 0 <= i ? i : 0 <= o ? o : za, 0 <= tg ? (hn(2), Zv(
          tg,
          f,
          t,
          a
        )) : ag & 127, a = o;
        var h = i, y = Jp, p = 0 < dm, R = Lf === Qp, D = Lf === eg;
        if (o = za, i = Zp, f = MS, d = CS, ol) {
          if (Et = "Blocking", 0 < a ? a > o && (a = o) : a = o, 0 < h ? h > a && (h = a) : h = a, y !== null && a > h) {
            var b = p ? "secondary-light" : "warning";
            i ? i.run(
              console.timeStamp.bind(
                console,
                p ? "Consecutive" : "Event: " + y,
                h,
                a,
                Et,
                gt,
                b
              )
            ) : console.timeStamp(
              p ? "Consecutive" : "Event: " + y,
              h,
              a,
              Et,
              gt,
              b
            );
          }
          o > a && (h = R ? "error" : (t & 738197653) === t ? "tertiary-light" : "primary-light", R = D ? "Promise Resolved" : R ? "Cascading Update" : 5 < o - a ? "Update Blocked" : "Update", D = [], d != null && D.push(["Component name", d]), f != null && D.push(["Method name", f]), a = {
            start: a,
            end: o,
            detail: {
              devtools: {
                properties: D,
                track: Et,
                trackGroup: gt,
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
        Oc = -1.1, Lf = 0, CS = MS = null, tg = -1.1, dm = Zr, Zr = -1.1, Qr = Zl();
      }
      if ((t & 4194048) !== 0 && (Nl = Kp, o = 0 <= No && No < xo ? xo : No, a = 0 <= si && si < xo ? xo : si, i = 0 <= Qf && Qf < xo ? xo : Qf, f = 0 <= i ? i : 0 <= a ? a : za, 0 <= lg ? (hn(256), Zv(
        lg,
        f,
        t,
        Nl
      )) : ag & 4194048, D = i, h = Jr, y = 0 < Zf, p = US === eg, f = za, i = Kp, d = J1, R = K1, ol && (Et = "Transition", 0 < a ? a > f && (a = f) : a = f, 0 < o ? o > a && (o = a) : o = a, 0 < D ? D > o && (D = o) : D = o, o > D && h !== null && (b = y ? "secondary-light" : "warning", i ? i.run(
        console.timeStamp.bind(
          console,
          y ? "Consecutive" : "Event: " + h,
          D,
          o,
          Et,
          gt,
          b
        )
      ) : console.timeStamp(
        y ? "Consecutive" : "Event: " + h,
        D,
        o,
        Et,
        gt,
        b
      )), a > o && (i ? i.run(
        console.timeStamp.bind(
          console,
          "Action",
          o,
          a,
          Et,
          gt,
          "primary-dark"
        )
      ) : console.timeStamp(
        "Action",
        o,
        a,
        Et,
        gt,
        "primary-dark"
      )), f > a && (o = p ? "Promise Resolved" : 5 < f - a ? "Update Blocked" : "Update", D = [], R != null && D.push(["Component name", R]), d != null && D.push(["Method name", d]), a = {
        start: a,
        end: f,
        detail: {
          devtools: {
            properties: D,
            track: Et,
            trackGroup: gt,
            color: "primary-light"
          }
        }
      }, i ? i.run(
        performance.measure.bind(
          performance,
          o,
          a
        )
      ) : performance.measure(o, a))), si = No = -1.1, US = 0, lg = -1.1, Zf = Qf, Qf = -1.1, xo = Zl()), (t & 62914560) !== 0 && (ag & 62914560) !== 0 && (hn(4194304), $m($1, za)), (t & 2080374784) !== 0 && (ag & 2080374784) !== 0 && (hn(268435456), $m(k1, za)), a = e.timeoutHandle, a !== cd && (e.timeoutHandle = cd, rA(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), Zi = 0, hh(), tl = e, ut = a = Ou(
        e.current,
        null
      ), lt = t, Kt = Wn, vu = null, $f = !1, zm = wl(e, t), WS = !1, zl = Yo, ld = Fn = FS = Wf = kf = 0, Cn = hv = null, Sg = !1, (t & 8) !== 0 && (t |= t & 32), i = e.entangledLanes, i !== 0)
        for (e = e.entanglements, i &= t; 0 < i; )
          o = 31 - ca(i), f = 1 << o, t |= e[o], i &= ~f;
      return _c = t, Wo(), e = w1(), 1e3 < e - G1 && (Z.recentlyCreatedOwnerStacks = 0, G1 = e), Vi.discardPendingWarnings(), a;
    }
    function Jy(e, t) {
      Ge = null, Z.H = cv, Z.getCurrentStack = null, Jn = !1, An = null, t === mm || t === cg ? (t = Ms(), Kt = rv) : t === jS ? (t = Ms(), Kt = Zb) : Kt = t === ZS ? kS : t !== null && typeof t == "object" && typeof t.then == "function" ? dv : vg, vu = t;
      var a = ut;
      a === null ? (zl = sv, ks(
        e,
        _a(t, e.current)
      )) : a.mode & et && Io(a);
    }
    function mh() {
      var e = mu.current;
      return e === null ? !0 : (lt & 4194048) === lt ? ri === null : (lt & 62914560) === lt || (lt & 536870912) !== 0 ? e === ri : !1;
    }
    function Ky() {
      var e = Z.H;
      return Z.H = cv, e === null ? cv : e;
    }
    function yh() {
      var e = Z.A;
      return Z.A = FT, e;
    }
    function Sf(e) {
      Nl === null && (Nl = e._debugTask == null ? null : e._debugTask);
    }
    function ho() {
      zl = Kf, $f || (lt & 4194048) !== lt && mu.current !== null || (zm = !0), (kf & 134217727) === 0 && (Wf & 134217727) === 0 || tl === null || xa(
        tl,
        lt,
        Fn,
        !1
      );
    }
    function ph(e, t, a) {
      var i = _t;
      _t |= ra;
      var o = Ky(), f = yh();
      if (tl !== e || lt !== t) {
        if (Kn) {
          var d = e.memoizedUpdaters;
          0 < d.size && (Wu(e, lt), d.clear()), Xl(e, t);
        }
        mv = null, Na(e, t);
      }
      t = !1, d = zl;
      e: do
        try {
          if (Kt !== Wn && ut !== null) {
            var h = ut, y = vu;
            switch (Kt) {
              case kS:
                hh(), d = pg;
                break e;
              case rv:
              case ed:
              case td:
              case dv:
                mu.current === null && (t = !0);
                var p = Kt;
                if (Kt = Wn, vu = null, mo(e, h, y, p), a && zm) {
                  d = Yo;
                  break e;
                }
                break;
              default:
                p = Kt, Kt = Wn, vu = null, mo(e, h, y, p);
            }
          }
          Ku(), d = zl;
          break;
        } catch (R) {
          Jy(e, R);
        }
      while (!0);
      return t && e.shellSuspendCounter++, ec(), _t = i, Z.H = o, Z.A = f, ut === null && (tl = null, lt = 0, Wo()), d;
    }
    function Ku() {
      for (; ut !== null; ) ky(ut);
    }
    function xl(e, t) {
      var a = _t;
      _t |= ra;
      var i = Ky(), o = yh();
      if (tl !== e || lt !== t) {
        if (Kn) {
          var f = e.memoizedUpdaters;
          0 < f.size && (Wu(e, lt), f.clear()), Xl(e, t);
        }
        mv = null, Eg = Tl() + $b, Na(e, t);
      } else
        zm = wl(
          e,
          t
        );
      e: do
        try {
          if (Kt !== Wn && ut !== null)
            t: switch (t = ut, f = vu, Kt) {
              case vg:
                Kt = Wn, vu = null, mo(
                  e,
                  t,
                  f,
                  vg
                );
                break;
              case ed:
              case td:
                if (gn(f)) {
                  Kt = Wn, vu = null, jl(t);
                  break;
                }
                t = function() {
                  Kt !== ed && Kt !== td || tl !== e || (Kt = gg), ja(e);
                }, f.then(t, t);
                break e;
              case rv:
                Kt = gg;
                break e;
              case Zb:
                Kt = $S;
                break e;
              case gg:
                gn(f) ? (Kt = Wn, vu = null, jl(t)) : (Kt = Wn, vu = null, mo(
                  e,
                  t,
                  f,
                  gg
                ));
                break;
              case $S:
                var d = null;
                switch (ut.tag) {
                  case 26:
                    d = ut.memoizedState;
                  case 5:
                  case 27:
                    var h = ut;
                    if (d ? Ch(d) : h.stateNode.complete) {
                      Kt = Wn, vu = null;
                      var y = h.sibling;
                      if (y !== null) ut = y;
                      else {
                        var p = h.return;
                        p !== null ? (ut = p, sr(p)) : ut = null;
                      }
                      break t;
                    }
                    break;
                  default:
                    console.error(
                      "Unexpected type of fiber triggered a suspensey commit. This is a bug in React."
                    );
                }
                Kt = Wn, vu = null, mo(
                  e,
                  t,
                  f,
                  $S
                );
                break;
              case dv:
                Kt = Wn, vu = null, mo(
                  e,
                  t,
                  f,
                  dv
                );
                break;
              case kS:
                hh(), zl = pg;
                break e;
              default:
                throw Error(
                  "Unexpected SuspendedReason. This is a bug in React."
                );
            }
          Z.actQueue !== null ? Ku() : $y();
          break;
        } catch (R) {
          Jy(e, R);
        }
      while (!0);
      return ec(), Z.H = i, Z.A = o, _t = a, ut !== null ? Yo : (tl = null, lt = 0, Wo(), zl);
    }
    function $y() {
      for (; ut !== null && !Jh(); )
        ky(ut);
    }
    function ky(e) {
      var t = e.alternate;
      (e.mode & et) !== Be ? (Cd(e), t = ue(
        e,
        uh,
        t,
        e,
        _c
      ), Io(e)) : t = ue(
        e,
        uh,
        t,
        e,
        _c
      ), e.memoizedProps = e.pendingProps, t === null ? sr(e) : ut = t;
    }
    function jl(e) {
      var t = ue(e, eS, e);
      e.memoizedProps = e.pendingProps, t === null ? sr(e) : ut = t;
    }
    function eS(e) {
      var t = e.alternate, a = (e.mode & et) !== Be;
      switch (a && Cd(e), e.tag) {
        case 15:
        case 0:
          t = uo(
            t,
            e,
            e.pendingProps,
            e.type,
            void 0,
            lt
          );
          break;
        case 11:
          t = uo(
            t,
            e,
            e.pendingProps,
            e.type.render,
            e.ref,
            lt
          );
          break;
        case 5:
          ic(e);
        default:
          n0(t, e), e = ut = Fo(e, _c), t = uh(t, e, _c);
      }
      return a && Io(e), t;
    }
    function mo(e, t, a, i) {
      ec(), ic(t), ym = null, av = 0;
      var o = t.return;
      try {
        if (Pv(
          e,
          o,
          t,
          a,
          lt
        )) {
          zl = sv, ks(
            e,
            _a(a, e.current)
          ), ut = null;
          return;
        }
      } catch (f) {
        if (o !== null) throw ut = o, f;
        zl = sv, ks(
          e,
          _a(a, e.current)
        ), ut = null;
        return;
      }
      t.flags & 32768 ? (mt || i === vg ? e = !0 : zm || (lt & 536870912) !== 0 ? e = !1 : ($f = e = !0, (i === ed || i === td || i === rv || i === dv) && (i = mu.current, i !== null && i.tag === 13 && (i.flags |= 16384))), nl(t, e)) : sr(t);
    }
    function sr(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          nl(
            t,
            $f
          );
          return;
        }
        var a = t.alternate;
        if (e = t.return, Cd(t), a = ue(
          t,
          l0,
          a,
          t,
          _c
        ), (t.mode & et) !== Be && $c(t), a !== null) {
          ut = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          ut = t;
          return;
        }
        ut = t = e;
      } while (t !== null);
      zl === Yo && (zl = Qb);
    }
    function nl(e, t) {
      do {
        var a = a0(e.alternate, e);
        if (a !== null) {
          a.flags &= 32767, ut = a;
          return;
        }
        if ((e.mode & et) !== Be) {
          $c(e), a = e.actualDuration;
          for (var i = e.child; i !== null; )
            a += i.actualDuration, i = i.sibling;
          e.actualDuration = a;
        }
        if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (e = e.sibling, e !== null)) {
          ut = e;
          return;
        }
        ut = e = a;
      } while (e !== null);
      zl = pg, ut = null;
    }
    function ba(e, t, a, i, o, f, d, h, y, p, R, D, b, Y) {
      e.cancelPendingCommit = null;
      do
        yc();
      while (Wl !== If);
      if (Vi.flushLegacyContextWarning(), Vi.flushPendingUnsafeLifecycleWarnings(), (_t & (ra | pu)) !== Ra)
        throw Error("Should not already be working.");
      if (hn(a), p === Pr ? Km(
        b,
        Y,
        a,
        Nl
      ) : i !== null ? Wg(
        b,
        Y,
        a,
        i,
        t !== null && t.alternate !== null && t.alternate.memoizedState.isDehydrated && (t.flags & 256) !== 0,
        Nl
      ) : kg(
        b,
        Y,
        a,
        Nl
      ), t !== null) {
        if (a === 0 && console.error(
          "finishedLanes should not be empty during a commit. This is a bug in React."
        ), t === e.current)
          throw Error(
            "Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue."
          );
        if (f = t.lanes | t.childLanes, f |= zS, Dc(
          e,
          a,
          f,
          d,
          h,
          y
        ), e === tl && (ut = tl = null, lt = 0), Om = t, Pf = e, Zi = a, e1 = f, l1 = o, eE = i, t1 = Y, tE = D, Ji = Tg, lE = null, t.actualDuration !== 0 || (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, dr(Oo, function() {
          return bv = window.event, Ji === Tg && (Ji = PS), Ha(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), Uo = null, Vf = Zl(), D !== null && Fg(
          Y,
          Vf,
          D,
          Nl
        ), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
          i = Z.T, Z.T = null, o = Ht.p, Ht.p = Bl, d = _t, _t |= pu;
          try {
            By(e, t, a);
          } finally {
            _t = d, Ht.p = o, Z.T = i;
          }
        }
        Wl = Wb, $u(), Wy(), Fy();
      }
    }
    function $u() {
      if (Wl === Wb) {
        Wl = If;
        var e = Pf, t = Om, a = Zi, i = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || i) {
          i = Z.T, Z.T = null;
          var o = Ht.p;
          Ht.p = Bl;
          var f = _t;
          _t |= pu;
          try {
            Tm = a, Am = e, Da(), Xy(t, e), Am = Tm = null, a = h1;
            var d = Xv(e.containerInfo), h = a.focusedElem, y = a.selectionRange;
            if (d !== h && h && h.ownerDocument && Ed(
              h.ownerDocument.documentElement,
              h
            )) {
              if (y !== null && Zm(h)) {
                var p = y.start, R = y.end;
                if (R === void 0 && (R = p), "selectionStart" in h)
                  h.selectionStart = p, h.selectionEnd = Math.min(
                    R,
                    h.value.length
                  );
                else {
                  var D = h.ownerDocument || document, b = D && D.defaultView || window;
                  if (b.getSelection) {
                    var Y = b.getSelection(), oe = h.textContent.length, me = Math.min(
                      y.start,
                      oe
                    ), ul = y.end === void 0 ? me : Math.min(y.end, oe);
                    !Y.extend && me > ul && (d = ul, ul = me, me = d);
                    var St = wv(
                      h,
                      me
                    ), S = wv(
                      h,
                      ul
                    );
                    if (St && S && (Y.rangeCount !== 1 || Y.anchorNode !== St.node || Y.anchorOffset !== St.offset || Y.focusNode !== S.node || Y.focusOffset !== S.offset)) {
                      var T = D.createRange();
                      T.setStart(St.node, St.offset), Y.removeAllRanges(), me > ul ? (Y.addRange(T), Y.extend(S.node, S.offset)) : (T.setEnd(S.node, S.offset), Y.addRange(T));
                    }
                  }
                }
              }
              for (D = [], Y = h; Y = Y.parentNode; )
                Y.nodeType === 1 && D.push({
                  element: Y,
                  left: Y.scrollLeft,
                  top: Y.scrollTop
                });
              for (typeof h.focus == "function" && h.focus(), h = 0; h < D.length; h++) {
                var O = D[h];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            Yg = !!d1, h1 = d1 = null;
          } finally {
            _t = f, Ht.p = o, Z.T = i;
          }
        }
        e.current = t, Wl = Fb;
      }
    }
    function Wy() {
      if (Wl === Fb) {
        Wl = If;
        var e = lE;
        if (e !== null) {
          Vf = Zl();
          var t = Co, a = Vf;
          !ol || a <= t || console.timeStamp(
            e,
            t,
            a,
            Et,
            gt,
            "secondary-light"
          );
        }
        e = Pf, t = Om, a = Zi;
        var i = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || i) {
          i = Z.T, Z.T = null;
          var o = Ht.p;
          Ht.p = Bl;
          var f = _t;
          _t |= pu;
          try {
            Tm = a, Am = e, Da(), Rl(
              e,
              t.alternate,
              t
            ), Am = Tm = null;
          } finally {
            _t = f, Ht.p = o, Z.T = i;
          }
        }
        e = t1, t = tE, Co = Zl(), e = t === null ? e : Vf, t = Co, a = Ji === IS, i = Nl, Uo !== null ? Jv(
          e,
          t,
          Uo,
          !1,
          i
        ) : !ol || t <= e || (i ? i.run(
          console.timeStamp.bind(
            console,
            a ? "Commit Interrupted View Transition" : "Commit",
            e,
            t,
            Et,
            gt,
            a ? "error" : "secondary-dark"
          )
        ) : console.timeStamp(
          a ? "Commit Interrupted View Transition" : "Commit",
          e,
          t,
          Et,
          gt,
          a ? "error" : "secondary-dark"
        )), Wl = Ib;
      }
    }
    function Fy() {
      if (Wl === Pb || Wl === Ib) {
        if (Wl === Pb) {
          var e = Co;
          Co = Zl();
          var t = Co, a = Ji === IS;
          !ol || t <= e || console.timeStamp(
            a ? "Interrupted View Transition" : "Starting Animation",
            e,
            t,
            Et,
            gt,
            a ? " error" : "secondary-light"
          ), Ji !== IS && (Ji = kb);
        }
        Wl = If, cS(), e = Pf;
        var i = Om;
        t = Zi, a = eE;
        var o = i.actualDuration !== 0 || (i.subtreeFlags & 10256) !== 0 || (i.flags & 10256) !== 0;
        o ? Wl = Ag : (Wl = If, Om = Pf = null, d0(
          e,
          e.pendingLanes
        ), ad = 0, pv = null);
        var f = e.pendingLanes;
        if (f === 0 && (Ff = null), o || Xn(e), f = Vo(t), i = i.stateNode, Ta && typeof Ta.onCommitFiberRoot == "function")
          try {
            var d = (i.current.flags & 128) === 128;
            switch (f) {
              case Bl:
                var h = Kh;
                break;
              case oa:
                h = $h;
                break;
              case zn:
                h = Oo;
                break;
              case Ec:
                h = jr;
                break;
              default:
                h = Oo;
            }
            Ta.onCommitFiberRoot(
              wi,
              i,
              h,
              d
            );
          } catch (D) {
            li || (li = !0, console.error(
              "React instrumentation encountered an error: %o",
              D
            ));
          }
        if (Kn && e.memoizedUpdaters.clear(), f0(), a !== null) {
          d = Z.T, h = Ht.p, Ht.p = Bl, Z.T = null;
          try {
            var y = e.onRecoverableError;
            for (i = 0; i < a.length; i++) {
              var p = a[i], R = r0(p.stack);
              ue(
                p.source,
                y,
                p.value,
                R
              );
            }
          } finally {
            Z.T = d, Ht.p = h;
          }
        }
        (Zi & 3) !== 0 && yc(), ja(e), f = e.pendingLanes, (t & 261930) !== 0 && (f & 42) !== 0 ? (ug = !0, e === a1 ? yv++ : (yv = 0, a1 = e)) : yv = 0, o || cu(t, Co), bf(0);
      }
    }
    function r0(e) {
      return e = { componentStack: e }, Object.defineProperty(e, "digest", {
        get: function() {
          console.error(
            'You are accessing "digest" from the errorInfo object passed to onRecoverableError. This property is no longer provided as part of errorInfo but can be accessed as a property of the Error instance itself.'
          );
        }
      }), e;
    }
    function d0(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Os(t)));
    }
    function yc() {
      return $u(), Wy(), Fy(), Ha();
    }
    function Ha() {
      if (Wl !== Ag) return !1;
      var e = Pf, t = e1;
      e1 = 0;
      var a = Vo(Zi), i = zn > a ? zn : a;
      a = Z.T;
      var o = Ht.p;
      try {
        Ht.p = i, Z.T = null;
        var f = l1;
        l1 = null, i = Pf;
        var d = Zi;
        if (Wl = If, Om = Pf = null, Zi = 0, (_t & (ra | pu)) !== Ra)
          throw Error("Cannot flush passive effects while already rendering.");
        hn(d), n1 = !0, zg = !1;
        var h = 0;
        if (Uo = null, h = Tl(), Ji === kb)
          $m(
            Co,
            h,
            QT
          );
        else {
          var y = Co, p = h, R = Ji === PS;
          !ol || p <= y || (Nl ? Nl.run(
            console.timeStamp.bind(
              console,
              R ? "Waiting for Paint" : "Waiting",
              y,
              p,
              Et,
              gt,
              "secondary-light"
            )
          ) : console.timeStamp(
            R ? "Waiting for Paint" : "Waiting",
            y,
            p,
            Et,
            gt,
            "secondary-light"
          ));
        }
        y = _t, _t |= pu;
        var D = i.current;
        Da(), o0(D);
        var b = i.current;
        D = t1, Da(), sh(
          i,
          b,
          d,
          f,
          D
        ), Xn(i), _t = y;
        var Y = Tl();
        if (b = h, D = Nl, Uo !== null ? Jv(
          b,
          Y,
          Uo,
          !0,
          D
        ) : !ol || Y <= b || (D ? D.run(
          console.timeStamp.bind(
            console,
            "Remaining Effects",
            b,
            Y,
            Et,
            gt,
            "secondary-dark"
          )
        ) : console.timeStamp(
          "Remaining Effects",
          b,
          Y,
          Et,
          gt,
          "secondary-dark"
        )), cu(d, Y), bf(0, !1), zg ? i === pv ? ad++ : (ad = 0, pv = i) : ad = 0, zg = n1 = !1, Ta && typeof Ta.onPostCommitFiberRoot == "function")
          try {
            Ta.onPostCommitFiberRoot(wi, i);
          } catch (me) {
            li || (li = !0, console.error(
              "React instrumentation encountered an error: %o",
              me
            ));
          }
        var oe = i.current.stateNode;
        return oe.effectDuration = 0, oe.passiveEffectDuration = 0, !0;
      } finally {
        Ht.p = o, Z.T = a, d0(e, t);
      }
    }
    function wn(e, t, a) {
      t = _a(a, t), Ka(t), t = $d(e.stateNode, t, 2), e = Ca(e, t, 2), e !== null && (ha(e, 2), ja(e));
    }
    function Ct(e, t, a) {
      if (Rm = !1, e.tag === 3)
        wn(e, e, a);
      else {
        for (; t !== null; ) {
          if (t.tag === 3) {
            wn(
              t,
              e,
              a
            );
            return;
          }
          if (t.tag === 1) {
            var i = t.stateNode;
            if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Ff === null || !Ff.has(i))) {
              e = _a(a, e), Ka(e), a = kd(2), i = Ca(t, a, 2), i !== null && (Ws(
                a,
                i,
                t,
                e
              ), ha(i, 2), ja(i));
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
    function Ea(e, t, a) {
      var i = e.pingCache;
      if (i === null) {
        i = e.pingCache = new PT();
        var o = /* @__PURE__ */ new Set();
        i.set(t, o);
      } else
        o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
      o.has(a) || (WS = !0, o.add(a), i = h0.bind(null, e, t, a), Kn && Wu(e, a), t.then(i, i));
    }
    function h0(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, (a & 127) !== 0 ? 0 > Oc && (Qr = Oc = Zl(), Zp = P0("Promise Resolved"), Lf = eg) : (a & 4194048) !== 0 && 0 > si && (xo = si = Zl(), Kp = P0("Promise Resolved"), US = eg), or() && Z.actQueue === null && console.error(
        `A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`
      ), tl === e && (lt & a) === a && (zl === Kf || zl === yg && (lt & 62914560) === lt && Tl() - bg < Kb ? (_t & ra) === Ra && Na(e, 0) : FS |= a, ld === lt && (ld = 0)), ja(e);
    }
    function ku(e, t) {
      t === 0 && (t = da()), e = Pl(e, t), e !== null && (ha(e, t), ja(e));
    }
    function yo(e) {
      var t = e.memoizedState, a = 0;
      t !== null && (a = t.retryLane), ku(e, a);
    }
    function Ni(e, t) {
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
      i !== null && i.delete(t), ku(e, a);
    }
    function rr(e, t, a) {
      if ((t.subtreeFlags & 67117056) !== 0)
        for (t = t.child; t !== null; ) {
          var i = e, o = t, f = o.type === xf;
          f = a || f, o.tag !== 22 ? o.flags & 67108864 ? f && ue(
            o,
            vh,
            i,
            o
          ) : rr(
            i,
            o,
            f
          ) : o.memoizedState === null && (f && o.flags & 8192 ? ue(
            o,
            vh,
            i,
            o
          ) : o.subtreeFlags & 67108864 && ue(
            o,
            rr,
            i,
            o,
            f
          )), t = t.sibling;
        }
    }
    function vh(e, t) {
      re(!0);
      try {
        Vy(t), Ju(t), Ly(e, t.alternate, t, !1), rh(e, t, 0, null, !1, 0);
      } finally {
        re(!1);
      }
    }
    function Xn(e) {
      var t = !0;
      e.current.mode & (on | Xi) || (t = !1), rr(
        e,
        e.current,
        t
      );
    }
    function Iy(e) {
      if ((_t & ra) === Ra) {
        var t = e.tag;
        if (t === 3 || t === 1 || t === 0 || t === 11 || t === 14 || t === 15) {
          if (t = de(e) || "ReactComponent", Og !== null) {
            if (Og.has(t)) return;
            Og.add(t);
          } else Og = /* @__PURE__ */ new Set([t]);
          ue(e, function() {
            console.error(
              "Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously tries to update the component. Move this work to useEffect instead."
            );
          });
        }
      }
    }
    function Wu(e, t) {
      Kn && e.memoizedUpdaters.forEach(function(a) {
        ma(e, a, t);
      });
    }
    function dr(e, t) {
      var a = Z.actQueue;
      return a !== null ? (a.push(t), lA) : Hf(e, t);
    }
    function hr(e) {
      or() && Z.actQueue === null && ue(e, function() {
        console.error(
          `An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://react.dev/link/wrap-tests-with-act`,
          de(e)
        );
      });
    }
    function ja(e) {
      e !== _m && e.next === null && (_m === null ? Rg = _m = e : _m = _m.next = e), _g = !0, Z.actQueue !== null ? i1 || (i1 = !0, y0()) : u1 || (u1 = !0, y0());
    }
    function bf(e, t) {
      if (!c1 && _g) {
        c1 = !0;
        do
          for (var a = !1, i = Rg; i !== null; ) {
            if (e !== 0) {
              var o = i.pendingLanes;
              if (o === 0) var f = 0;
              else {
                var d = i.suspendedLanes, h = i.pingedLanes;
                f = (1 << 31 - ca(42 | e) + 1) - 1, f &= o & ~(d & ~h), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
              }
              f !== 0 && (a = !0, ep(i, f));
            } else
              f = lt, f = We(
                i,
                i === tl ? f : 0,
                i.cancelPendingCommit !== null || i.timeoutHandle !== cd
              ), (f & 3) === 0 || wl(i, f) || (a = !0, ep(i, f));
            i = i.next;
          }
        while (a);
        c1 = !1;
      }
    }
    function m0() {
      bv = window.event, po();
    }
    function po() {
      _g = i1 = u1 = !1;
      var e = 0;
      es !== 0 && Ef() && (e = es);
      for (var t = Tl(), a = null, i = Rg; i !== null; ) {
        var o = i.next, f = Py(i, t);
        f === 0 ? (i.next = null, a === null ? Rg = o : a.next = o, o === null && (_m = a)) : (a = i, (e !== 0 || (f & 3) !== 0) && (_g = !0)), i = o;
      }
      Wl !== If && Wl !== Ag || bf(e), es !== 0 && (es = 0);
    }
    function Py(e, t) {
      for (var a = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
        var d = 31 - ca(f), h = 1 << d, y = o[d];
        y === -1 ? ((h & a) === 0 || (h & i) !== 0) && (o[d] = In(h, t)) : y <= t && (e.expiredLanes |= h), f &= ~h;
      }
      if (t = tl, a = lt, a = We(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cd
      ), i = e.callbackNode, a === 0 || e === t && (Kt === ed || Kt === td) || e.cancelPendingCommit !== null)
        return i !== null && tp(i), e.callbackNode = null, e.callbackPriority = 0;
      if ((a & 3) === 0 || wl(e, a)) {
        if (t = a & -a, t !== e.callbackPriority || Z.actQueue !== null && i !== o1)
          tp(i);
        else return t;
        switch (Vo(a)) {
          case Bl:
          case oa:
            a = $h;
            break;
          case zn:
            a = Oo;
            break;
          case Ec:
            a = jr;
            break;
          default:
            a = Oo;
        }
        return i = mr.bind(null, e), Z.actQueue !== null ? (Z.actQueue.push(i), a = o1) : a = Hf(a, i), e.callbackPriority = t, e.callbackNode = a, t;
      }
      return i !== null && tp(i), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function mr(e, t) {
      if (ug = ng = !1, bv = window.event, Wl !== If && Wl !== Ag)
        return e.callbackNode = null, e.callbackPriority = 0, null;
      var a = e.callbackNode;
      if (Ji === Tg && (Ji = PS), yc() && e.callbackNode !== a)
        return null;
      var i = lt;
      return i = We(
        e,
        e === tl ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== cd
      ), i === 0 ? null : (s0(
        e,
        i,
        t
      ), Py(e, Tl()), e.callbackNode != null && e.callbackNode === a ? mr.bind(null, e) : null);
    }
    function ep(e, t) {
      if (yc()) return null;
      ng = ug, ug = !1, s0(e, t, !0);
    }
    function tp(e) {
      e !== o1 && e !== null && Zh(e);
    }
    function y0() {
      Z.actQueue !== null && Z.actQueue.push(function() {
        return po(), null;
      }), dA(function() {
        (_t & (ra | pu)) !== Ra ? Hf(
          Kh,
          m0
        ) : po();
      });
    }
    function Ot() {
      if (es === 0) {
        var e = Kr;
        e === 0 && (e = qr, qr <<= 1, (qr & 261888) === 0 && (qr = 256)), es = e;
      }
      return es;
    }
    function Zt(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : (Xe(e, "action"), ki("" + e));
    }
    function it(e, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, e.id && a.setAttribute("form", e.id), t.parentNode.insertBefore(a, t), e = new FormData(e), a.parentNode.removeChild(a), e;
    }
    function ht(e, t, a, i, o) {
      if (t === "submit" && a && a.stateNode === o) {
        var f = Zt(
          (o[Aa] || null).action
        ), d = i.submitter;
        d && (t = (t = d[Aa] || null) ? Zt(t.formAction) : d.getAttribute("formAction"), t !== null && (f = t, d = null));
        var h = new J0(
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
                  if (es !== 0) {
                    var y = d ? it(
                      o,
                      d
                    ) : new FormData(o), p = {
                      pending: !0,
                      data: y,
                      method: o.method,
                      action: f
                    };
                    Object.freeze(p), of(
                      a,
                      p,
                      null,
                      y
                    );
                  }
                } else
                  typeof f == "function" && (h.preventDefault(), y = d ? it(
                    o,
                    d
                  ) : new FormData(o), p = {
                    pending: !0,
                    data: y,
                    method: o.method,
                    action: f
                  }, Object.freeze(p), of(
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
    function Ut(e, t, a) {
      e.currentTarget = a;
      try {
        t(e);
      } catch (i) {
        bS(i);
      }
      e.currentTarget = null;
    }
    function tn(e, t) {
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
              y !== null ? ue(
                y,
                Ut,
                f,
                h,
                p
              ) : Ut(f, h, p), o = y;
            }
          else
            for (d = 0; d < i.length; d++) {
              if (h = i[d], y = h.instance, p = h.currentTarget, h = h.listener, y !== o && f.isPropagationStopped())
                break e;
              y !== null ? ue(
                y,
                Ut,
                f,
                h,
                p
              ) : Ut(f, h, p), o = y;
            }
        }
      }
    }
    function Le(e, t) {
      f1.has(e) || console.error(
        'Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.',
        e
      );
      var a = t[xp];
      a === void 0 && (a = t[xp] = /* @__PURE__ */ new Set());
      var i = e + "__bubble";
      a.has(i) || (Fu(t, e, 2, !1), a.add(i));
    }
    function pc(e, t, a) {
      f1.has(e) && !t && console.error(
        'Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.',
        e
      );
      var i = 0;
      t && (i |= 4), Fu(
        a,
        e,
        i,
        t
      );
    }
    function yr(e) {
      if (!e[Dg]) {
        e[Dg] = !0, Yr.forEach(function(a) {
          a !== "selectionchange" && (f1.has(a) || pc(a, !1, e), pc(a, !0, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Dg] || (t[Dg] = !0, pc("selectionchange", !1, t));
      }
    }
    function Fu(e, t, a, i) {
      switch (jh(t)) {
        case Bl:
          var o = ua;
          break;
        case oa:
          o = aS;
          break;
        default:
          o = Hh;
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
    function cl(e, t, a, i, o) {
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
              if (d = ee(h), d === null) return;
              if (y = d.tag, y === 5 || y === 6 || y === 26 || y === 27) {
                i = f = d;
                continue e;
              }
              h = h.parentNode;
            }
          }
          i = i.return;
        }
      Gc(function() {
        var p = f, R = ms(a), D = [];
        e: {
          var b = Y1.get(e);
          if (b !== void 0) {
            var Y = J0, oe = e;
            switch (e) {
              case "keypress":
                if (Ko(a) === 0) break e;
              case "keydown":
              case "keyup":
                Y = vT;
                break;
              case "focusin":
                oe = "focus", Y = mS;
                break;
              case "focusout":
                oe = "blur", Y = mS;
                break;
              case "beforeblur":
              case "afterblur":
                Y = mS;
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
                Y = z1;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                Y = uT;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                Y = bT;
                break;
              case H1:
              case j1:
              case q1:
                Y = oT;
                break;
              case B1:
                Y = TT;
                break;
              case "scroll":
              case "scrollend":
                Y = aT;
                break;
              case "wheel":
                Y = zT;
                break;
              case "copy":
              case "cut":
              case "paste":
                Y = sT;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                Y = R1;
                break;
              case "toggle":
              case "beforetoggle":
                Y = RT;
            }
            var me = (t & 4) !== 0, ul = !me && (e === "scroll" || e === "scrollend"), St = me ? b !== null ? b + "Capture" : null : b;
            me = [];
            for (var S = p, T; S !== null; ) {
              var O = S;
              if (T = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || T === null || St === null || (O = bu(S, St), O != null && me.push(
                Vn(
                  S,
                  O,
                  T
                )
              )), ul) break;
              S = S.return;
            }
            0 < me.length && (b = new Y(
              b,
              oe,
              null,
              a,
              R
            ), D.push({
              event: b,
              listeners: me
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (b = e === "mouseover" || e === "pointerover", Y = e === "mouseout" || e === "pointerout", b && a !== Hp && (oe = a.relatedTarget || a.fromElement) && (ee(oe) || oe[$n]))
              break e;
            if ((Y || b) && (b = R.window === R ? R : (b = R.ownerDocument) ? b.defaultView || b.parentWindow : window, Y ? (oe = a.relatedTarget || a.toElement, Y = p, oe = oe ? ee(oe) : null, oe !== null && (ul = ct(oe), me = oe.tag, oe !== ul || me !== 5 && me !== 27 && me !== 6) && (oe = null)) : (Y = null, oe = p), Y !== oe)) {
              if (me = z1, O = "onMouseLeave", St = "onMouseEnter", S = "mouse", (e === "pointerout" || e === "pointerover") && (me = R1, O = "onPointerLeave", St = "onPointerEnter", S = "pointer"), ul = Y == null ? b : ye(Y), T = oe == null ? b : ye(oe), b = new me(
                O,
                S + "leave",
                Y,
                a,
                R
              ), b.target = ul, b.relatedTarget = T, O = null, ee(R) === p && (me = new me(
                St,
                S + "enter",
                oe,
                a,
                R
              ), me.target = T, me.relatedTarget = ul, O = me), ul = O, Y && oe)
                t: {
                  for (me = lp, St = Y, S = oe, T = 0, O = St; O; O = me(O))
                    T++;
                  O = 0;
                  for (var $ = S; $; $ = me($))
                    O++;
                  for (; 0 < T - O; )
                    St = me(St), T--;
                  for (; 0 < O - T; )
                    S = me(S), O--;
                  for (; T--; ) {
                    if (St === S || S !== null && St === S.alternate) {
                      me = St;
                      break t;
                    }
                    St = me(St), S = me(S);
                  }
                  me = null;
                }
              else me = null;
              Y !== null && ln(
                D,
                b,
                Y,
                me,
                !1
              ), oe !== null && ul !== null && ln(
                D,
                ul,
                oe,
                me,
                !0
              );
            }
          }
          e: {
            if (b = p ? ye(p) : window, Y = b.nodeName && b.nodeName.toLowerCase(), Y === "select" || Y === "input" && b.type === "file")
              var se = vs;
            else if (ps(b))
              if (x1)
                se = bd;
              else {
                se = Qm;
                var we = Lm;
              }
            else
              Y = b.nodeName, !Y || Y.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? p && hs(p.elementType) && (se = vs) : se = gs;
            if (se && (se = se(e, p))) {
              Vm(
                D,
                se,
                a,
                R
              );
              break e;
            }
            we && we(e, b, p), e === "focusout" && p && b.type === "number" && p.memoizedProps.value != null && xm(b, "number", b.value);
          }
          switch (we = p ? ye(p) : window, e) {
            case "focusin":
              (ps(we) || we.contentEditable === "true") && (nm = we, pS = p, Xp = null);
              break;
            case "focusout":
              Xp = pS = nm = null;
              break;
            case "mousedown":
              vS = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              vS = !1, Vv(
                D,
                a,
                R
              );
              break;
            case "selectionchange":
              if (CT) break;
            case "keydown":
            case "keyup":
              Vv(
                D,
                a,
                R
              );
          }
          var De;
          if (yS)
            e: {
              switch (e) {
                case "compositionstart":
                  var Ee = "onCompositionStart";
                  break e;
                case "compositionend":
                  Ee = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  Ee = "onCompositionUpdate";
                  break e;
              }
              Ee = void 0;
            }
          else
            am ? Si(e, a) && (Ee = "onCompositionEnd") : e === "keydown" && a.keyCode === _1 && (Ee = "onCompositionStart");
          Ee && (D1 && a.locale !== "ko" && (am || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && am && (De = wm()) : (Bf = R, rS = "value" in Bf ? Bf.value : Bf.textContent, am = !0)), we = Iu(
            p,
            Ee
          ), 0 < we.length && (Ee = new O1(
            Ee,
            e,
            null,
            a,
            R
          ), D.push({
            event: Ee,
            listeners: we
          }), De ? Ee.data = De : (De = vd(a), De !== null && (Ee.data = De)))), (De = DT ? gd(e, a) : qv(e, a)) && (Ee = Iu(
            p,
            "onBeforeInput"
          ), 0 < Ee.length && (we = new dT(
            "onBeforeInput",
            "beforeinput",
            null,
            a,
            R
          ), D.push({
            event: we,
            listeners: Ee
          }), we.data = De)), ht(
            D,
            e,
            p,
            a,
            R
          );
        }
        tn(D, t);
      });
    }
    function Vn(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Iu(e, t) {
      for (var a = t + "Capture", i = []; e !== null; ) {
        var o = e, f = o.stateNode;
        if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = bu(e, a), o != null && i.unshift(
          Vn(e, o, f)
        ), o = bu(e, t), o != null && i.push(
          Vn(e, o, f)
        )), e.tag === 3) return i;
        e = e.return;
      }
      return [];
    }
    function lp(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function ln(e, t, a, i, o) {
      for (var f = t._reactName, d = []; a !== null && a !== i; ) {
        var h = a, y = h.alternate, p = h.stateNode;
        if (h = h.tag, y !== null && y === i) break;
        h !== 5 && h !== 26 && h !== 27 || p === null || (y = p, o ? (p = bu(a, f), p != null && d.unshift(
          Vn(a, p, y)
        )) : o || (p = bu(a, f), p != null && d.push(
          Vn(a, p, y)
        ))), a = a.return;
      }
      d.length !== 0 && e.push({ event: t, listeners: d });
    }
    function vc(e, t) {
      Gm(e, t), e !== "input" && e !== "textarea" && e !== "select" || t == null || t.value !== null || T1 || (T1 = !0, e === "select" && t.multiple ? console.error(
        "`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.",
        e
      ) : console.error(
        "`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.",
        e
      ));
      var a = {
        registrationNameDependencies: ai,
        possibleRegistrationNames: Fh
      };
      hs(e) || typeof t.is == "string" || Kg(e, t, a), t.contentEditable && !t.suppressContentEditableWarning && t.children != null && console.error(
        "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."
      );
    }
    function bl(e, t, a, i) {
      t !== a && (a = Hi(a), Hi(t) !== a && (i[e] = t));
    }
    function an(e, t, a) {
      t.forEach(function(i) {
        a[vo(i)] = i === "style" ? ou(e) : e.getAttribute(i);
      });
    }
    function Ln(e, t) {
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
    function pr(e, t) {
      return e = e.namespaceURI === nt || e.namespaceURI === ft ? e.ownerDocument.createElementNS(
        e.namespaceURI,
        e.tagName
      ) : e.ownerDocument.createElement(e.tagName), e.innerHTML = t, e.innerHTML;
    }
    function Hi(e) {
      return ll(e) && (console.error(
        "The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before using it here.",
        yt(e)
      ), bt(e)), (typeof e == "string" ? e : "" + e).replace(aA, `
`).replace(nA, "");
    }
    function vr(e, t) {
      return t = Hi(t), Hi(e) === t;
    }
    function Nt(e, t, a, i, o, f) {
      switch (a) {
        case "children":
          typeof i == "string" ? (Jo(i, t, !1), t === "body" || t === "textarea" && i === "" || Su(e, i)) : (typeof i == "number" || typeof i == "bigint") && (Jo("" + i, t, !1), t !== "body" && Su(e, "" + i));
          break;
        case "className":
          is(e, "class", i);
          break;
        case "tabIndex":
          is(e, "tabindex", i);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          is(e, a, i);
          break;
        case "style":
          Yc(e, i, f);
          break;
        case "data":
          if (t !== "object") {
            is(e, "data", i);
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
          Xe(i, a), i = ki("" + i), e.setAttribute(a, i);
          break;
        case "action":
        case "formAction":
          if (i != null && (t === "form" ? a === "formAction" ? console.error(
            "You can only pass the formAction prop to <input> or <button>. Use the action prop on <form>."
          ) : typeof i == "function" && (o.encType == null && o.method == null || Ug || (Ug = !0, console.error(
            "Cannot specify a encType or method for a form that specifies a function as the action. React provides those automatically. They will get overridden."
          )), o.target == null || Cg || (Cg = !0, console.error(
            "Cannot specify a target for a form that specifies a function as the action. The function will always be executed in the same window."
          ))) : t === "input" || t === "button" ? a === "action" ? console.error(
            "You can only pass the action prop to <form>. Use the formAction prop on <input> or <button>."
          ) : t !== "input" || o.type === "submit" || o.type === "image" || Mg ? t !== "button" || o.type == null || o.type === "submit" || Mg ? typeof i == "function" && (o.name == null || cE || (cE = !0, console.error(
            'Cannot specify a "name" prop for a button that specifies a function as a formAction. React needs it to encode which action should be invoked. It will get overridden.'
          )), o.formEncType == null && o.formMethod == null || Ug || (Ug = !0, console.error(
            "Cannot specify a formEncType or formMethod for a button that specifies a function as a formAction. React provides those automatically. They will get overridden."
          )), o.formTarget == null || Cg || (Cg = !0, console.error(
            "Cannot specify a formTarget for a button that specifies a function as a formAction. The function will always be executed in the same window."
          ))) : (Mg = !0, console.error(
            'A button can only specify a formAction along with type="submit" or no type.'
          )) : (Mg = !0, console.error(
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
            typeof f == "function" && (a === "formAction" ? (t !== "input" && Nt(e, t, "name", o.name, o, null), Nt(
              e,
              t,
              "formEncType",
              o.formEncType,
              o,
              null
            ), Nt(
              e,
              t,
              "formMethod",
              o.formMethod,
              o,
              null
            ), Nt(
              e,
              t,
              "formTarget",
              o.formTarget,
              o,
              null
            )) : (Nt(
              e,
              t,
              "encType",
              o.encType,
              o,
              null
            ), Nt(e, t, "method", o.method, o, null), Nt(
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
          Xe(i, a), i = ki("" + i), e.setAttribute(a, i);
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ln(a, i), e.onclick = Il);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ln(a, i), Le("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ln(a, i), Le("scrollend", e));
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
          Xe(i, a), a = ki("" + i), e.setAttributeNS(nd, "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          i != null && typeof i != "function" && typeof i != "symbol" ? (Xe(i, a), e.setAttribute(a, "" + i)) : e.removeAttribute(a);
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
          i === !0 ? e.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? (Xe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? (Xe(i, a), e.setAttribute(a, i)) : e.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(a) : (Xe(i, a), e.setAttribute(a, i));
          break;
        case "popover":
          Le("beforetoggle", e), Le("toggle", e), Uc(e, "popover", i);
          break;
        case "xlinkActuate":
          gu(
            e,
            nd,
            "xlink:actuate",
            i
          );
          break;
        case "xlinkArcrole":
          gu(
            e,
            nd,
            "xlink:arcrole",
            i
          );
          break;
        case "xlinkRole":
          gu(
            e,
            nd,
            "xlink:role",
            i
          );
          break;
        case "xlinkShow":
          gu(
            e,
            nd,
            "xlink:show",
            i
          );
          break;
        case "xlinkTitle":
          gu(
            e,
            nd,
            "xlink:title",
            i
          );
          break;
        case "xlinkType":
          gu(
            e,
            nd,
            "xlink:type",
            i
          );
          break;
        case "xmlBase":
          gu(
            e,
            s1,
            "xml:base",
            i
          );
          break;
        case "xmlLang":
          gu(
            e,
            s1,
            "xml:lang",
            i
          );
          break;
        case "xmlSpace":
          gu(
            e,
            s1,
            "xml:space",
            i
          );
          break;
        case "is":
          f != null && console.error(
            'Cannot update the "is" prop after it has been initialized.'
          ), Uc(e, "is", i);
          break;
        case "innerText":
        case "textContent":
          break;
        case "popoverTarget":
          oE || i == null || typeof i != "object" || (oE = !0, console.error(
            "The `popoverTarget` prop expects the ID of an Element as a string. Received %s instead.",
            i
          ));
        default:
          !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N" ? (a = Ym(a), Uc(e, a, i)) : ai.hasOwnProperty(a) && i != null && typeof i != "function" && Ln(a, i);
      }
    }
    function Pu(e, t, a, i, o, f) {
      switch (a) {
        case "style":
          Yc(e, i, f);
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
          typeof i == "string" ? Su(e, i) : (typeof i == "number" || typeof i == "bigint") && Su(e, "" + i);
          break;
        case "onScroll":
          i != null && (typeof i != "function" && Ln(a, i), Le("scroll", e));
          break;
        case "onScrollEnd":
          i != null && (typeof i != "function" && Ln(a, i), Le("scrollend", e));
          break;
        case "onClick":
          i != null && (typeof i != "function" && Ln(a, i), e.onclick = Il);
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
          if (ai.hasOwnProperty(a))
            i != null && typeof i != "function" && Ln(a, i);
          else
            e: {
              if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"), t = a.slice(2, o ? a.length - 7 : void 0), f = e[Aa] || null, f = f != null ? f[a] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
                typeof f != "function" && f !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(t, i, o);
                break e;
              }
              a in e ? e[a] = i : i === !0 ? e.setAttribute(a, "") : Uc(e, a, i);
            }
      }
    }
    function vt(e, t, a) {
      switch (vc(t, a), t) {
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
          Le("error", e), Le("load", e);
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
                    Nt(e, t, f, d, a, null);
                }
            }
          o && Nt(e, t, "srcSet", a.srcSet, a, null), i && Nt(e, t, "src", a.src, a, null);
          return;
        case "input":
          Fl("input", a), Le("invalid", e);
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
                    Nt(e, t, i, R, a, null);
                }
            }
          xc(e, a), xv(
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
          Fl("select", a), Le("invalid", e), i = d = f = null;
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
                  Nt(
                    e,
                    t,
                    o,
                    h,
                    a,
                    null
                  );
              }
          Nc(e, a), t = f, a = d, e.multiple = !!i, t != null ? $i(e, !!i, t, !1) : a != null && $i(e, !!i, a, !0);
          return;
        case "textarea":
          Fl("textarea", a), Le("invalid", e), f = o = i = null;
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
                  Nt(
                    e,
                    t,
                    d,
                    h,
                    a,
                    null
                  );
              }
          Hc(e, a), jc(e, i, o, f);
          return;
        case "option":
          Nm(e, a);
          for (y in a)
            a.hasOwnProperty(y) && (i = a[y], i != null) && (y === "selected" ? e.selected = i && typeof i != "function" && typeof i != "symbol" : Nt(e, t, y, i, a, null));
          return;
        case "dialog":
          Le("beforetoggle", e), Le("toggle", e), Le("cancel", e), Le("close", e);
          break;
        case "iframe":
        case "object":
          Le("load", e);
          break;
        case "video":
        case "audio":
          for (i = 0; i < vv.length; i++)
            Le(vv[i], e);
          break;
        case "image":
          Le("error", e), Le("load", e);
          break;
        case "details":
          Le("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          Le("error", e), Le("load", e);
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
                  Nt(e, t, p, i, a, null);
              }
          return;
        default:
          if (hs(t)) {
            for (R in a)
              a.hasOwnProperty(R) && (i = a[R], i !== void 0 && Pu(
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
        a.hasOwnProperty(h) && (i = a[h], i != null && Nt(e, t, h, i, a, null));
    }
    function gc(e, t, a, i) {
      switch (vc(t, i), t) {
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
          for (Y in a) {
            var D = a[Y];
            if (a.hasOwnProperty(Y) && D != null)
              switch (Y) {
                case "checked":
                  break;
                case "value":
                  break;
                case "defaultValue":
                  y = D;
                default:
                  i.hasOwnProperty(Y) || Nt(
                    e,
                    t,
                    Y,
                    null,
                    i,
                    D
                  );
              }
          }
          for (var b in i) {
            var Y = i[b];
            if (D = a[b], i.hasOwnProperty(b) && (Y != null || D != null))
              switch (b) {
                case "type":
                  f = Y;
                  break;
                case "name":
                  o = Y;
                  break;
                case "checked":
                  p = Y;
                  break;
                case "defaultChecked":
                  R = Y;
                  break;
                case "value":
                  d = Y;
                  break;
                case "defaultValue":
                  h = Y;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Y != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Y !== D && Nt(
                    e,
                    t,
                    b,
                    Y,
                    i,
                    D
                  );
              }
          }
          t = a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null, i = i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null, t || !i || iE || (console.error(
            "A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), iE = !0), !t || i || uE || (console.error(
            "A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://react.dev/link/controlled-components"
          ), uE = !0), cs(
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
          Y = d = h = b = null;
          for (f in a)
            if (y = a[f], a.hasOwnProperty(f) && y != null)
              switch (f) {
                case "value":
                  break;
                case "multiple":
                  Y = y;
                default:
                  i.hasOwnProperty(f) || Nt(
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
                  b = f;
                  break;
                case "defaultValue":
                  h = f;
                  break;
                case "multiple":
                  d = f;
                default:
                  f !== y && Nt(
                    e,
                    t,
                    o,
                    f,
                    i,
                    y
                  );
              }
          i = h, t = d, a = Y, b != null ? $i(e, !!t, b, !1) : !!a != !!t && (i != null ? $i(e, !!t, i, !0) : $i(e, !!t, t ? [] : "", !1));
          return;
        case "textarea":
          Y = b = null;
          for (h in a)
            if (o = a[h], a.hasOwnProperty(h) && o != null && !i.hasOwnProperty(h))
              switch (h) {
                case "value":
                  break;
                case "children":
                  break;
                default:
                  Nt(e, t, h, null, i, o);
              }
          for (d in i)
            if (o = i[d], f = a[d], i.hasOwnProperty(d) && (o != null || f != null))
              switch (d) {
                case "value":
                  b = o;
                  break;
                case "defaultValue":
                  Y = o;
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
                  o !== f && Nt(e, t, d, o, i, f);
              }
          Qo(e, b, Y);
          return;
        case "option":
          for (var oe in a)
            b = a[oe], a.hasOwnProperty(oe) && b != null && !i.hasOwnProperty(oe) && (oe === "selected" ? e.selected = !1 : Nt(
              e,
              t,
              oe,
              null,
              i,
              b
            ));
          for (y in i)
            b = i[y], Y = a[y], i.hasOwnProperty(y) && b !== Y && (b != null || Y != null) && (y === "selected" ? e.selected = b && typeof b != "function" && typeof b != "symbol" : Nt(
              e,
              t,
              y,
              b,
              i,
              Y
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
          for (var me in a)
            b = a[me], a.hasOwnProperty(me) && b != null && !i.hasOwnProperty(me) && Nt(
              e,
              t,
              me,
              null,
              i,
              b
            );
          for (p in i)
            if (b = i[p], Y = a[p], i.hasOwnProperty(p) && b !== Y && (b != null || Y != null))
              switch (p) {
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null)
                    throw Error(
                      t + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`."
                    );
                  break;
                default:
                  Nt(
                    e,
                    t,
                    p,
                    b,
                    i,
                    Y
                  );
              }
          return;
        default:
          if (hs(t)) {
            for (var ul in a)
              b = a[ul], a.hasOwnProperty(ul) && b !== void 0 && !i.hasOwnProperty(ul) && Pu(
                e,
                t,
                ul,
                void 0,
                i,
                b
              );
            for (R in i)
              b = i[R], Y = a[R], !i.hasOwnProperty(R) || b === Y || b === void 0 && Y === void 0 || Pu(
                e,
                t,
                R,
                b,
                i,
                Y
              );
            return;
          }
      }
      for (var St in a)
        b = a[St], a.hasOwnProperty(St) && b != null && !i.hasOwnProperty(St) && Nt(e, t, St, null, i, b);
      for (D in i)
        b = i[D], Y = a[D], !i.hasOwnProperty(D) || b === Y || b == null && Y == null || Nt(e, t, D, b, i, Y);
    }
    function vo(e) {
      switch (e) {
        case "class":
          return "className";
        case "for":
          return "htmlFor";
        default:
          return e;
      }
    }
    function ou(e) {
      var t = {};
      e = e.style;
      for (var a = 0; a < e.length; a++) {
        var i = e[a];
        t[i] = e.getPropertyValue(i);
      }
      return t;
    }
    function gh(e, t, a) {
      if (t != null && typeof t != "object")
        console.error(
          "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."
        );
      else {
        var i, o = i = "", f;
        for (f in t)
          if (t.hasOwnProperty(f)) {
            var d = t[f];
            d != null && typeof d != "boolean" && d !== "" && (f.indexOf("--") === 0 ? (kt(d, f), i += o + f + ":" + ("" + d).trim()) : typeof d != "number" || d === 0 || Ke.has(f) ? (kt(d, f), i += o + f.replace(ve, "-$1").toLowerCase().replace(Ue, "-ms-") + ":" + ("" + d).trim()) : i += o + f.replace(ve, "-$1").toLowerCase().replace(Ue, "-ms-") + ":" + d + "px", o = ";");
          }
        i = i || null, t = e.getAttribute("style"), t !== i && (i = Hi(i), Hi(t) !== i && (a.style = ou(e)));
      }
    }
    function nn(e, t, a, i, o, f) {
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
            if (Xe(i, t), e === "" + i)
              return;
        }
      bl(t, e, i, f);
    }
    function ap(e, t, a, i, o, f) {
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
      bl(t, e, i, f);
    }
    function go(e, t, a, i, o, f) {
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
            if (Xe(i, a), e === "" + i)
              return;
        }
      bl(t, e, i, f);
    }
    function Sh(e, t, a, i, o, f) {
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
            if (!isNaN(i) && (Xe(i, t), e === "" + i))
              return;
        }
      bl(t, e, i, f);
    }
    function qa(e, t, a, i, o, f) {
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
            if (Xe(i, t), a = ki("" + i), e === a)
              return;
        }
      bl(t, e, i, f);
    }
    function np(e, t, a, i) {
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
      if (hs(t)) {
        for (var y in a)
          if (a.hasOwnProperty(y)) {
            var p = a[y];
            if (p != null) {
              if (ai.hasOwnProperty(y))
                typeof p != "function" && Ln(y, p);
              else if (a.suppressHydrationWarning !== !0)
                switch (y) {
                  case "children":
                    typeof p != "string" && typeof p != "number" || bl(
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
                    d = e.innerHTML, p = p ? p.__html : void 0, p != null && (p = pr(e, p), bl(
                      y,
                      d,
                      p,
                      o
                    ));
                    continue;
                  case "style":
                    f.delete(y), gh(e, p, o);
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
                    f.delete("class"), d = sd(
                      e,
                      "class",
                      p
                    ), bl(
                      "className",
                      d,
                      p,
                      o
                    );
                    continue;
                  default:
                    i.context === Go && t !== "svg" && t !== "math" ? f.delete(y.toLowerCase()) : f.delete(y), d = sd(
                      e,
                      y,
                      p
                    ), bl(
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
            if (ai.hasOwnProperty(p))
              typeof y != "function" && Ln(p, y);
            else if (a.suppressHydrationWarning !== !0)
              switch (p) {
                case "children":
                  typeof y != "string" && typeof y != "number" || bl(
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
                  d = e.innerHTML, y = y ? y.__html : void 0, y != null && (y = pr(e, y), d !== y && (o[p] = { __html: d }));
                  continue;
                case "className":
                  nn(
                    e,
                    p,
                    "class",
                    y,
                    f,
                    o
                  );
                  continue;
                case "tabIndex":
                  nn(
                    e,
                    p,
                    "tabindex",
                    y,
                    f,
                    o
                  );
                  continue;
                case "style":
                  f.delete(p), gh(e, y, o);
                  continue;
                case "multiple":
                  f.delete(p), bl(
                    p,
                    e.multiple,
                    y,
                    o
                  );
                  continue;
                case "muted":
                  f.delete(p), bl(
                    p,
                    e.muted,
                    y,
                    o
                  );
                  continue;
                case "autoFocus":
                  f.delete("autofocus"), bl(
                    p,
                    e.autofocus,
                    y,
                    o
                  );
                  continue;
                case "data":
                  if (t !== "object") {
                    f.delete(p), d = e.getAttribute("data"), bl(
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
                  qa(
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
                  } else if (d === uA) {
                    f.delete(p.toLowerCase()), bl(
                      p,
                      "function",
                      y,
                      o
                    );
                    continue;
                  }
                  qa(
                    e,
                    p,
                    p.toLowerCase(),
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkHref":
                  qa(
                    e,
                    p,
                    "xlink:href",
                    y,
                    f,
                    o
                  );
                  continue;
                case "contentEditable":
                  go(
                    e,
                    p,
                    "contenteditable",
                    y,
                    f,
                    o
                  );
                  continue;
                case "spellCheck":
                  go(
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
                  go(
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
                  ap(
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
                    var R = d = p, D = o;
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
                          if (Xe(y, d), h === "" + y)
                            break e;
                      }
                    bl(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "cols":
                case "rows":
                case "size":
                case "span":
                  e: {
                    if (h = e, R = d = p, D = o, f.delete(R), h = h.getAttribute(R), h === null)
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
                          if (!(isNaN(y) || 1 > y) && (Xe(y, d), h === "" + y))
                            break e;
                      }
                    bl(
                      d,
                      h,
                      y,
                      D
                    );
                  }
                  continue;
                case "rowSpan":
                  Sh(
                    e,
                    p,
                    "rowspan",
                    y,
                    f,
                    o
                  );
                  continue;
                case "start":
                  Sh(
                    e,
                    p,
                    p,
                    y,
                    f,
                    o
                  );
                  continue;
                case "xHeight":
                  nn(
                    e,
                    p,
                    "x-height",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkActuate":
                  nn(
                    e,
                    p,
                    "xlink:actuate",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkArcrole":
                  nn(
                    e,
                    p,
                    "xlink:arcrole",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkRole":
                  nn(
                    e,
                    p,
                    "xlink:role",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkShow":
                  nn(
                    e,
                    p,
                    "xlink:show",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkTitle":
                  nn(
                    e,
                    p,
                    "xlink:title",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xlinkType":
                  nn(
                    e,
                    p,
                    "xlink:type",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlBase":
                  nn(
                    e,
                    p,
                    "xml:base",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlLang":
                  nn(
                    e,
                    p,
                    "xml:lang",
                    y,
                    f,
                    o
                  );
                  continue;
                case "xmlSpace":
                  nn(
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
                  )), ap(
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
                    h = Ym(p), d = !1, i.context === Go && t !== "svg" && t !== "math" ? f.delete(h.toLowerCase()) : (R = p.toLowerCase(), R = Ph.hasOwnProperty(
                      R
                    ) && Ph[R] || null, R !== null && R !== p && (d = !0, f.delete(R)), f.delete(h));
                    e: if (R = e, D = h, h = y, Xa(D))
                      if (R.hasAttribute(D))
                        R = R.getAttribute(
                          D
                        ), Xe(
                          h,
                          D
                        ), h = R === "" + h ? h : R;
                      else {
                        switch (typeof h) {
                          case "function":
                          case "symbol":
                            break e;
                          case "boolean":
                            if (R = D.toLowerCase().slice(0, 5), R !== "data-" && R !== "aria-")
                              break e;
                        }
                        h = h === void 0 ? void 0 : null;
                      }
                    else h = void 0;
                    d || bl(
                      p,
                      h,
                      y,
                      o
                    );
                  }
              }
          }
      return 0 < f.size && a.suppressHydrationWarning !== !0 && an(e, f, o), Object.keys(o).length === 0 ? null : o;
    }
    function un(e, t) {
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
    function up(e) {
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
    function p0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
          var o = a[i], f = o.transferSize, d = o.initiatorType, h = o.duration;
          if (f && h && up(d)) {
            for (d = 0, h = o.responseEnd, i += 1; i < a.length; i++) {
              var y = a[i], p = y.startTime;
              if (p > h) break;
              var R = y.transferSize, D = y.initiatorType;
              R && up(D) && (y = y.responseEnd, d += R * (y < h ? 1 : (h - p) / (y - p)));
            }
            if (--i, t += 8 * (f + d) / (o.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    function bh(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function ji(e) {
      switch (e) {
        case ft:
          return Mm;
        case nt:
          return Hg;
        default:
          return Go;
      }
    }
    function gr(e, t) {
      if (e === Go)
        switch (t) {
          case "svg":
            return Mm;
          case "math":
            return Hg;
          default:
            return Go;
        }
      return e === Mm && t === "foreignObject" ? Go : e;
    }
    function Sr(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Ef() {
      var e = window.event;
      return e && e.type === "popstate" ? e === m1 ? !1 : (m1 = e, !0) : (m1 = null, !1);
    }
    function Tf() {
      var e = window.event;
      return e && e !== bv ? e.type : null;
    }
    function Af() {
      var e = window.event;
      return e && e !== bv ? e.timeStamp : -1.1;
    }
    function v0(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function g0(e, t, a) {
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
    function Eh() {
    }
    function ip(e, t, a, i) {
      gc(e, t, a, i), e[Aa] = i;
    }
    function S0(e) {
      Su(e, "");
    }
    function tS(e, t, a) {
      e.nodeValue = a;
    }
    function b0(e) {
      if (!e.__reactWarnedAboutChildrenConflict) {
        var t = e[Aa] || null;
        if (t !== null) {
          var a = ie(e);
          a !== null && (typeof t.children == "string" || typeof t.children == "number" ? (e.__reactWarnedAboutChildrenConflict = !0, ue(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "children" text content using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })) : t.dangerouslySetInnerHTML != null && (e.__reactWarnedAboutChildrenConflict = !0, ue(a, function() {
            console.error(
              'Cannot use a ref on a React element as a container to `createRoot` or `createPortal` if that element also sets "dangerouslySetInnerHTML" using React. It should be a leaf with no children. Otherwise it\'s ambiguous which children should be used.'
            );
          })));
        }
      }
    }
    function qi(e) {
      return e === "head";
    }
    function E0(e, t) {
      e.removeChild(t);
    }
    function zf(e, t) {
      (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).removeChild(t);
    }
    function br(e, t) {
      var a = t, i = 0;
      do {
        var o = a.nextSibling;
        if (e.removeChild(a), o && o.nodeType === 8)
          if (a = o.data, a === Sv || a === Ng) {
            if (i === 0) {
              e.removeChild(o), Cf(t);
              return;
            }
            i--;
          } else if (a === gv || a === ts || a === id || a === Dm || a === ud)
            i++;
          else if (a === cA)
            Ar(
              e.ownerDocument.documentElement
            );
          else if (a === fA) {
            a = e.ownerDocument.head, Ar(a);
            for (var f = a.firstChild; f; ) {
              var d = f.nextSibling, h = f.nodeName;
              f[Br] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && f.rel.toLowerCase() === "stylesheet" || a.removeChild(f), f = d;
            }
          } else
            a === oA && Ar(e.ownerDocument.body);
        a = o;
      } while (a);
      Cf(t);
    }
    function cp(e, t) {
      var a = e;
      e = 0;
      do {
        var i = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), i && i.nodeType === 8)
          if (a = i.data, a === Sv) {
            if (e === 0) break;
            e--;
          } else
            a !== gv && a !== ts && a !== id && a !== Dm || e++;
        a = i;
      } while (a);
    }
    function T0(e) {
      cp(e, !0);
    }
    function A0(e) {
      e = e.style, typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
    }
    function z0(e) {
      e.nodeValue = "";
    }
    function O0(e) {
      cp(e, !1);
    }
    function R0(e, t) {
      t = t[sA], t = t != null && t.hasOwnProperty("display") ? t.display : null, e.style.display = t == null || typeof t == "boolean" ? "" : ("" + t).trim();
    }
    function Th(e, t) {
      e.nodeValue = t;
    }
    function Ah(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            Ah(a), M(a);
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
    function _0(e, t, a, i) {
      for (; e.nodeType === 1; ) {
        var o = a;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
            break;
        } else if (i) {
          if (!e[Br])
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
          Xe(o.name, "name");
          var f = o.name == null ? null : "" + o.name;
          if (o.type === "hidden" && e.getAttribute("name") === f)
            return e;
        } else return e;
        if (e = Tn(e.nextSibling), e === null) break;
      }
      return null;
    }
    function Xt(e, t, a) {
      if (t === "") return null;
      for (; e.nodeType !== 3; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function zh(e, t) {
      for (; e.nodeType !== 8; )
        if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Tn(e.nextSibling), e === null)) return null;
      return e;
    }
    function op(e) {
      return e.data === ts || e.data === id;
    }
    function Oh(e) {
      return e.data === Dm || e.data === ts && e.ownerDocument.readyState !== sE;
    }
    function lS(e, t) {
      var a = e.ownerDocument;
      if (e.data === id)
        e._reactRetry = t;
      else if (e.data !== ts || a.readyState !== sE)
        t();
      else {
        var i = function() {
          t(), a.removeEventListener("DOMContentLoaded", i);
        };
        a.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
      }
    }
    function Tn(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === gv || t === Dm || t === ts || t === id || t === ud || t === r1 || t === fE)
            break;
          if (t === Sv || t === Ng)
            return null;
        }
      }
      return e;
    }
    function D0(e) {
      if (e.nodeType === 1) {
        for (var t = e.nodeName.toLowerCase(), a = {}, i = e.attributes, o = 0; o < i.length; o++) {
          var f = i[o];
          a[vo(f.name)] = f.name.toLowerCase() === "style" ? ou(e) : f.value;
        }
        return { type: t, props: a };
      }
      return e.nodeType === 8 ? e.data === ud ? { type: "Activity", props: {} } : { type: "Suspense", props: {} } : e.nodeValue;
    }
    function Er(e, t, a) {
      return a === null || a[iA] !== !0 ? (e.nodeValue === t ? e = null : (t = Hi(t), e = Hi(e.nodeValue) === t ? null : e.nodeValue), e) : null;
    }
    function Sc(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === Sv || a === Ng) {
            if (t === 0)
              return Tn(e.nextSibling);
            t--;
          } else
            a !== gv && a !== Dm && a !== ts && a !== id && a !== ud || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Rh(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var a = e.data;
          if (a === gv || a === Dm || a === ts || a === id || a === ud) {
            if (t === 0) return e;
            t--;
          } else
            a !== Sv && a !== Ng || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function _h(e) {
      Cf(e);
    }
    function fp(e) {
      Cf(e);
    }
    function bc(e) {
      Cf(e);
    }
    function fu(e, t, a, i, o) {
      switch (o && yd(e, i.ancestorInfo), t = bh(a), e) {
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
    function Tr(e, t, a, i) {
      if (!a[$n] && ie(a)) {
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
      vt(a, e, t), a[fa] = i, a[Aa] = t;
    }
    function Ar(e) {
      for (var t = e.attributes; t.length; )
        e.removeAttributeNode(t[0]);
      M(e);
    }
    function zr(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    function sp(e, t, a) {
      var i = Cm;
      if (i && typeof t == "string" && t) {
        var o = al(t);
        o = 'link[rel="' + e + '"][href="' + o + '"]', typeof a == "string" && (o += '[crossorigin="' + a + '"]'), pE.has(o) || (pE.add(o), e = { rel: e, crossOrigin: a, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), vt(t, "link", e), Se(t), i.head.appendChild(t)));
      }
    }
    function rp(e, t, a, i) {
      var o = (o = Zn.current) ? zr(o) : null;
      if (!o)
        throw Error(
          '"resourceRoot" was expected to exist. This is a bug in React.'
        );
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (a = Of(a.href), t = Ye(o).hoistableStyles, i = t.get(a), i || (i = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, t.set(a, i)), i) : { type: "void", instance: null, count: 0, state: null };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            e = Of(a.href);
            var f = Ye(o).hoistableStyles, d = f.get(e);
            if (!d && (o = o.ownerDocument || o, d = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: { loading: od, preload: null }
            }, f.set(e, d), (f = o.querySelector(
              So(e)
            )) && !f._p && (d.instance = f, d.state.loading = Ev | mi), !yi.has(e))) {
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
              yi.set(e, h), f || M0(
                o,
                e,
                h,
                d.state
              );
            }
            if (t && i === null)
              throw a = `

  - ` + Or(t) + `
  + ` + Or(a), Error(
                "Expected <link> not to update to be updated to a stylesheet with precedence. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
              );
            return d;
          }
          if (t && i !== null)
            throw a = `

  - ` + Or(t) + `
  + ` + Or(a), Error(
              "Expected stylesheet with precedence to not be updated to a different kind of <link>. Check the `rel`, `href`, and `precedence` props of this component. Alternatively, check whether two different <link> components render in the same slot or share the same key." + a
            );
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = Rf(a), t = Ye(o).hoistableScripts, i = t.get(a), i || (i = {
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
    function Or(e) {
      var t = 0, a = "<link";
      return typeof e.rel == "string" ? (t++, a += ' rel="' + e.rel + '"') : ru.call(e, "rel") && (t++, a += ' rel="' + (e.rel === null ? "null" : "invalid type " + typeof e.rel) + '"'), typeof e.href == "string" ? (t++, a += ' href="' + e.href + '"') : ru.call(e, "href") && (t++, a += ' href="' + (e.href === null ? "null" : "invalid type " + typeof e.href) + '"'), typeof e.precedence == "string" ? (t++, a += ' precedence="' + e.precedence + '"') : ru.call(e, "precedence") && (t++, a += " precedence={" + (e.precedence === null ? "null" : "invalid type " + typeof e.precedence) + "}"), Object.getOwnPropertyNames(e).length > t && (a += " ..."), a + " />";
    }
    function Of(e) {
      return 'href="' + al(e) + '"';
    }
    function So(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function dp(e) {
      return Fe({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function M0(e, t, a, i) {
      e.querySelector(
        'link[rel="preload"][as="style"][' + t + "]"
      ) ? i.loading = Ev : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
        return i.loading |= Ev;
      }), t.addEventListener("error", function() {
        return i.loading |= mE;
      }), vt(t, "link", a), Se(t), e.head.appendChild(t));
    }
    function Rf(e) {
      return '[src="' + al(e) + '"]';
    }
    function bo(e) {
      return "script[async]" + e;
    }
    function Dh(e, t, a) {
      if (t.count++, t.instance === null)
        switch (t.type) {
          case "style":
            var i = e.querySelector(
              'style[data-href~="' + al(a.href) + '"]'
            );
            if (i)
              return t.instance = i, Se(i), i;
            var o = Fe({}, a, {
              "data-href": a.href,
              "data-precedence": a.precedence,
              href: null,
              precedence: null
            });
            return i = (e.ownerDocument || e).createElement("style"), Se(i), vt(i, "style", o), Mh(i, a.precedence, e), t.instance = i;
          case "stylesheet":
            o = Of(a.href);
            var f = e.querySelector(
              So(o)
            );
            if (f)
              return t.state.loading |= mi, t.instance = f, Se(f), f;
            i = dp(a), (o = yi.get(o)) && hp(i, o), f = (e.ownerDocument || e).createElement("link"), Se(f);
            var d = f;
            return d._p = new Promise(function(h, y) {
              d.onload = h, d.onerror = y;
            }), vt(f, "link", i), t.state.loading |= mi, Mh(f, a.precedence, e), t.instance = f;
          case "script":
            return f = Rf(a.src), (o = e.querySelector(
              bo(f)
            )) ? (t.instance = o, Se(o), o) : (i = a, (o = yi.get(f)) && (i = Fe({}, a), Eo(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), Se(o), vt(o, "link", i), e.head.appendChild(o), t.instance = o);
          case "void":
            return null;
          default:
            throw Error(
              'acquireResource encountered a resource type it did not expect: "' + t.type + '". this is a bug in React.'
            );
        }
      else
        t.type === "stylesheet" && (t.state.loading & mi) === od && (i = t.instance, t.state.loading |= mi, Mh(i, a.precedence, e));
      return t.instance;
    }
    function Mh(e, t, a) {
      for (var i = a.querySelectorAll(
        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
      ), o = i.length ? i[i.length - 1] : null, f = o, d = 0; d < i.length; d++) {
        var h = i[d];
        if (h.dataset.precedence === t) f = h;
        else if (f !== o) break;
      }
      f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(e, t.firstChild));
    }
    function hp(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function Eo(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    function C0(e, t, a) {
      if (jg === null) {
        var i = /* @__PURE__ */ new Map(), o = jg = /* @__PURE__ */ new Map();
        o.set(a, i);
      } else
        o = jg, i = o.get(a), i || (i = /* @__PURE__ */ new Map(), o.set(a, i));
      if (i.has(e)) return i;
      for (i.set(e, null), a = a.getElementsByTagName(e), o = 0; o < a.length; o++) {
        var f = a[o];
        if (!(f[Br] || f[fa] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== ft) {
          var d = f.getAttribute(t) || "";
          d = e + d;
          var h = i.get(d);
          h ? h.push(f) : i.set(d, [f]);
        }
      }
      return i;
    }
    function mp(e, t, a) {
      e = e.ownerDocument || e, e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
    }
    function ot(e, t, a) {
      var i = !a.ancestorInfo.containerTagInScope;
      if (a.context === Mm || t.itemProp != null)
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
              a = [], t.onLoad && a.push("`onLoad`"), o && a.push("`onError`"), f != null && a.push("`disabled`"), o = un(a, "and"), o += a.length === 1 ? " prop" : " props", f = a.length === 1 ? "an " + o : "the " + o, a.length && console.error(
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
    function Ch(e) {
      return !(e.type === "stylesheet" && (e.state.loading & yE) === od);
    }
    function Uh(e, t, a, i) {
      if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & mi) === od) {
        if (a.instance === null) {
          var o = Of(i.href), f = t.querySelector(
            So(o)
          );
          if (f) {
            t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Rr.bind(e), t.then(e, e)), a.state.loading |= mi, a.instance = f, Se(f);
            return;
          }
          f = t.ownerDocument || t, i = dp(i), (o = yi.get(o)) && hp(i, o), f = f.createElement("link"), Se(f);
          var d = f;
          d._p = new Promise(function(h, y) {
            d.onload = h, d.onerror = y;
          }), vt(f, "link", i), a.instance = f;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & yE) === od && (e.count++, a = Rr.bind(e), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    function yp(e, t) {
      return e.stylesheets && e.count === 0 && _f(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(a) {
        var i = setTimeout(function() {
          if (e.stylesheets && _f(e, e.stylesheets), e.unsuspend) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        }, hA + t);
        0 < e.imgBytes && p1 === 0 && (p1 = 125 * p0() * yA);
        var o = setTimeout(
          function() {
            if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && _f(e, e.stylesheets), e.unsuspend)) {
              var f = e.unsuspend;
              e.unsuspend = null, f();
            }
          },
          (e.imgBytes > p1 ? 50 : mA) + t
        );
        return e.unsuspend = a, function() {
          e.unsuspend = null, clearTimeout(i), clearTimeout(o);
        };
      } : null;
    }
    function Rr() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets)
          _f(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    function _f(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, qg = /* @__PURE__ */ new Map(), t.forEach(_r, e), qg = null, Rr.call(e));
    }
    function _r(e, t) {
      if (!(t.state.loading & mi)) {
        var a = qg.get(e);
        if (a) var i = a.get(v1);
        else {
          a = /* @__PURE__ */ new Map(), qg.set(e, a);
          for (var o = e.querySelectorAll(
            "link[data-precedence],style[data-precedence]"
          ), f = 0; f < o.length; f++) {
            var d = o[f];
            (d.nodeName === "LINK" || d.getAttribute("media") !== "not all") && (a.set(d.dataset.precedence, d), i = d);
          }
          i && a.set(v1, i);
        }
        o = t.instance, d = o.getAttribute("data-precedence"), f = a.get(d) || i, f === i && a.set(v1, o), a.set(d, o), this.count++, i = Rr.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= mi;
      }
    }
    function xh(e, t, a, i, o, f, d, h, y) {
      for (this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = cd, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Wt(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wt(0), this.hiddenUpdates = Wt(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = d, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.incompleteTransitions = /* @__PURE__ */ new Map(), this.passiveEffectDuration = this.effectDuration = -0, this.memoizedUpdaters = /* @__PURE__ */ new Set(), e = this.pendingUpdatersLaneMap = [], t = 0; 31 > t; t++) e.push(/* @__PURE__ */ new Set());
      this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
    }
    function U0(e, t, a, i, o, f, d, h, y, p, R, D) {
      return e = new xh(
        e,
        t,
        a,
        d,
        y,
        p,
        R,
        D,
        h
      ), t = GT, f === !0 && (t |= on | Xi), t |= et, f = x(3, null, null, t), e.current = f, f.stateNode = e, t = ny(), Kc(t), e.pooledCache = t, Kc(t), f.memoizedState = {
        element: i,
        isDehydrated: a,
        cache: t
      }, Nu(f), e;
    }
    function pp(e) {
      return e ? (e = wf, e) : wf;
    }
    function vp(e, t, a, i, o, f) {
      if (Ta && typeof Ta.onScheduleFiberRoot == "function")
        try {
          Ta.onScheduleFiberRoot(wi, i, a);
        } catch (d) {
          li || (li = !0, console.error(
            "React instrumentation encountered an error: %o",
            d
          ));
        }
      o = pp(o), i.context === null ? i.context = o : i.pendingContext = o, Jn && An !== null && !bE && (bE = !0, console.error(
        `Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`,
        de(An) || "Unknown"
      )), i = Hu(t), i.payload = { element: a }, f = f === void 0 ? null : f, f !== null && (typeof f != "function" && console.error(
        "Expected the last optional `callback` argument to be a function. Instead received: %s.",
        f
      ), i.callback = f), a = Ca(e, i, t), a !== null && (Pn(t, "root.render()", null), hl(a, e, t), tf(a, e, t));
    }
    function x0(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var a = e.retryLane;
        e.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function Nh(e, t) {
      x0(e, t), (e = e.alternate) && x0(e, t);
    }
    function gp(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Pl(e, 67108864);
        t !== null && hl(t, e, 67108864), Nh(e, 67108864);
      }
    }
    function Vt(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = na(e);
        t = yl(t);
        var a = Pl(e, t);
        a !== null && hl(a, e, t), Nh(e, t);
      }
    }
    function Sp() {
      return An;
    }
    function ua(e, t, a, i) {
      var o = Z.T;
      Z.T = null;
      var f = Ht.p;
      try {
        Ht.p = Bl, Hh(e, t, a, i);
      } finally {
        Ht.p = f, Z.T = o;
      }
    }
    function aS(e, t, a, i) {
      var o = Z.T;
      Z.T = null;
      var f = Ht.p;
      try {
        Ht.p = oa, Hh(e, t, a, i);
      } finally {
        Ht.p = f, Z.T = o;
      }
    }
    function Hh(e, t, a, i) {
      if (Yg) {
        var o = bp(i);
        if (o === null)
          cl(
            e,
            t,
            i,
            Gg,
            a
          ), Mr(e, i);
        else if (N0(
          o,
          e,
          t,
          a,
          i
        ))
          i.stopPropagation();
        else if (Mr(e, i), t & 4 && -1 < vA.indexOf(e)) {
          for (; o !== null; ) {
            var f = ie(o);
            if (f !== null)
              switch (f.tag) {
                case 3:
                  if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                    var d = Lt(f.pendingLanes);
                    if (d !== 0) {
                      var h = f;
                      for (h.pendingLanes |= 2, h.entangledLanes |= 2; d; ) {
                        var y = 1 << 31 - ca(d);
                        h.entanglements[1] |= y, d &= ~y;
                      }
                      ja(f), (_t & (ra | pu)) === Ra && (Eg = Tl() + $b, bf(0));
                    }
                  }
                  break;
                case 31:
                case 13:
                  h = Pl(f, 2), h !== null && hl(h, f, 2), ro(), Nh(f, 2);
              }
            if (f = bp(i), f === null && cl(
              e,
              t,
              i,
              Gg,
              a
            ), f === o) break;
            o = f;
          }
          o !== null && i.stopPropagation();
        } else
          cl(
            e,
            t,
            i,
            null,
            a
          );
      }
    }
    function bp(e) {
      return e = ms(e), Dr(e);
    }
    function Dr(e) {
      if (Gg = null, e = ee(e), e !== null) {
        var t = ct(e);
        if (t === null) e = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (e = Dt(t), e !== null) return e;
            e = null;
          } else if (a === 31) {
            if (e = jt(t), e !== null) return e;
            e = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return Gg = e, null;
    }
    function jh(e) {
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
          return Bl;
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
          return oa;
        case "message":
          switch (oS()) {
            case Kh:
              return Bl;
            case $h:
              return oa;
            case Oo:
            case Y0:
              return zn;
            case jr:
              return Ec;
            default:
              return zn;
          }
        default:
          return zn;
      }
    }
    function Mr(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ls = null;
          break;
        case "dragenter":
        case "dragleave":
          as = null;
          break;
        case "mouseover":
        case "mouseout":
          ns = null;
          break;
        case "pointerover":
        case "pointerout":
          Av.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          zv.delete(t.pointerId);
      }
    }
    function Df(e, t, a, i, o, f) {
      return e === null || e.nativeEvent !== f ? (e = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: i,
        nativeEvent: f,
        targetContainers: [o]
      }, t !== null && (t = ie(t), t !== null && gp(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
    }
    function N0(e, t, a, i, o) {
      switch (t) {
        case "focusin":
          return ls = Df(
            ls,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "dragenter":
          return as = Df(
            as,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "mouseover":
          return ns = Df(
            ns,
            e,
            t,
            a,
            i,
            o
          ), !0;
        case "pointerover":
          var f = o.pointerId;
          return Av.set(
            f,
            Df(
              Av.get(f) || null,
              e,
              t,
              a,
              i,
              o
            )
          ), !0;
        case "gotpointercapture":
          return f = o.pointerId, zv.set(
            f,
            Df(
              zv.get(f) || null,
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
    function qh(e) {
      var t = ee(e.target);
      if (t !== null) {
        var a = ct(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = Dt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Vt(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = jt(a), t !== null) {
              e.blockedOn = t, v(e.priority, function() {
                Vt(a);
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
    function Mf(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var a = bp(e.nativeEvent);
        if (a === null) {
          a = e.nativeEvent;
          var i = new a.constructor(
            a.type,
            a
          ), o = i;
          Hp !== null && console.error(
            "Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."
          ), Hp = o, a.target.dispatchEvent(i), Hp === null && console.error(
            "Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."
          ), Hp = null;
        } else
          return t = ie(a), t !== null && gp(t), e.blockedOn = a, !1;
        t.shift();
      }
      return !0;
    }
    function H0(e, t, a) {
      Mf(e) && a.delete(t);
    }
    function j0() {
      g1 = !1, ls !== null && Mf(ls) && (ls = null), as !== null && Mf(as) && (as = null), ns !== null && Mf(ns) && (ns = null), Av.forEach(H0), zv.forEach(H0);
    }
    function Bh(e, t) {
      e.blockedOn === t && (e.blockedOn = null, g1 || (g1 = !0, El.unstable_scheduleCallback(
        El.unstable_NormalPriority,
        j0
      )));
    }
    function Ep(e) {
      wg !== e && (wg = e, El.unstable_scheduleCallback(
        El.unstable_NormalPriority,
        function() {
          wg === e && (wg = null);
          for (var t = 0; t < e.length; t += 3) {
            var a = e[t], i = e[t + 1], o = e[t + 2];
            if (typeof i != "function") {
              if (Dr(i || a) === null)
                continue;
              break;
            }
            var f = ie(a);
            f !== null && (e.splice(t, 3), t -= 3, a = {
              pending: !0,
              data: o,
              method: a.method,
              action: i
            }, Object.freeze(a), of(
              f,
              a,
              i,
              o
            ));
          }
        }
      ));
    }
    function Cf(e) {
      function t(y) {
        return Bh(y, e);
      }
      ls !== null && Bh(ls, e), as !== null && Bh(as, e), ns !== null && Bh(ns, e), Av.forEach(t), zv.forEach(t);
      for (var a = 0; a < us.length; a++) {
        var i = us[a];
        i.blockedOn === e && (i.blockedOn = null);
      }
      for (; 0 < us.length && (a = us[0], a.blockedOn === null); )
        qh(a), a.blockedOn === null && us.shift();
      if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
        for (i = 0; i < a.length; i += 3) {
          var o = a[i], f = a[i + 1], d = o[Aa] || null;
          if (typeof f == "function")
            d || Ep(a);
          else if (d) {
            var h = null;
            if (f && f.hasAttribute("formAction")) {
              if (o = f, d = f[Aa] || null)
                h = d.formAction;
              else if (Dr(o) !== null) continue;
            } else h = d.action;
            typeof h == "function" ? a[i + 1] = h : (a.splice(i, 3), i -= 3), Ep(a);
          }
        }
    }
    function q0() {
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
    function ei(e) {
      this._internalRoot = e;
    }
    function Cr(e) {
      this._internalRoot = e;
    }
    function Tp(e) {
      e[$n] && (e._reactRootContainer ? console.error(
        "You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported."
      ) : console.error(
        "You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."
      ));
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var El = kE(), Ap = Um(), nS = WE(), Fe = Object.assign, zp = /* @__PURE__ */ Symbol.for("react.element"), Qn = /* @__PURE__ */ Symbol.for("react.transitional.element"), Uf = /* @__PURE__ */ Symbol.for("react.portal"), ia = /* @__PURE__ */ Symbol.for("react.fragment"), xf = /* @__PURE__ */ Symbol.for("react.strict_mode"), Yh = /* @__PURE__ */ Symbol.for("react.profiler"), Gh = /* @__PURE__ */ Symbol.for("react.consumer"), su = /* @__PURE__ */ Symbol.for("react.context"), Bi = /* @__PURE__ */ Symbol.for("react.forward_ref"), cn = /* @__PURE__ */ Symbol.for("react.suspense"), wh = /* @__PURE__ */ Symbol.for("react.suspense_list"), To = /* @__PURE__ */ Symbol.for("react.memo"), _l = /* @__PURE__ */ Symbol.for("react.lazy"), Op = /* @__PURE__ */ Symbol.for("react.activity"), uS = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Ao = Symbol.iterator, B0 = /* @__PURE__ */ Symbol.for("react.client.reference"), ql = Array.isArray, Z = Ap.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ht = nS.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, iS = Object.freeze({
      pending: !1,
      data: null,
      method: null,
      action: null
    }), Rp = [], _p = [], Yi = -1, Gi = st(null), ti = st(null), Zn = st(null), Ur = st(null), xr = 0, zo, Nf, Dp, Nr, Xh, Vh, Hr;
    z.__reactDisabledLog = !0;
    var Lh, Mp, Cp = !1, Qh = new (typeof WeakMap == "function" ? WeakMap : Map)(), An = null, Jn = !1, ru = Object.prototype.hasOwnProperty, Hf = El.unstable_scheduleCallback, Zh = El.unstable_cancelCallback, Jh = El.unstable_shouldYield, cS = El.unstable_requestPaint, Tl = El.unstable_now, oS = El.unstable_getCurrentPriorityLevel, Kh = El.unstable_ImmediatePriority, $h = El.unstable_UserBlockingPriority, Oo = El.unstable_NormalPriority, Y0 = El.unstable_LowPriority, jr = El.unstable_IdlePriority, G0 = El.log, w0 = El.unstable_setDisableYieldValue, wi = null, Ta = null, li = !1, Kn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u", ca = Math.clz32 ? Math.clz32 : wa, kh = Math.log, Up = Math.LN2, qr = 256, jf = 262144, du = 4194304, Bl = 2, oa = 8, zn = 32, Ec = 268435456, Ba = Math.random().toString(36).slice(2), fa = "__reactFiber$" + Ba, Aa = "__reactProps$" + Ba, $n = "__reactContainer$" + Ba, xp = "__reactEvents$" + Ba, X0 = "__reactListeners$" + Ba, Wh = "__reactHandles$" + Ba, Np = "__reactResources$" + Ba, Br = "__reactMarker$" + Ba, Yr = /* @__PURE__ */ new Set(), ai = {}, Fh = {}, qf = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    }, V0 = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), Ih = {}, Gr = {}, L0 = /[\n"\\]/g, Q0 = !1, wr = !1, l = !1, n = !1, u = !1, c = !1, s = ["value", "defaultValue"], r = !1, m = /["'&<>\n\t]|^\s|\s$/, g = "address applet area article aside base basefont bgsound blockquote body br button caption center col colgroup dd details dir div dl dt embed fieldset figcaption figure footer form frame frameset h1 h2 h3 h4 h5 h6 head header hgroup hr html iframe img input isindex li link listing main marquee menu menuitem meta nav noembed noframes noscript object ol p param plaintext pre script section select source style summary table tbody td template textarea tfoot th thead title tr track ul wbr xmp".split(
      " "
    ), A = "applet caption html table td th marquee object template foreignObject desc title".split(
      " "
    ), j = A.concat(["button"]), K = "dd dt li option optgroup p rp rt".split(" "), F = {
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
    }, B = {}, Q = {
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
    }, ve = /([A-Z])/g, Ue = /^ms-/, Jt = /^(?:webkit|moz|o)[A-Z]/, U = /^-ms-/, _ = /-(.)/g, H = /;\s*$/, W = {}, Oe = {}, Rt = !1, be = !1, Ke = new Set(
      "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
        " "
      )
    ), nt = "http://www.w3.org/1998/Math/MathML", ft = "http://www.w3.org/2000/svg", Tc = /* @__PURE__ */ new Map([
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
    ]), Ph = {
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
    }, E1 = {
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
    }, em = {}, FE = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), IE = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), T1 = !1, On = {}, A1 = /^on./, PE = /^on[^A-Z]/, eT = RegExp(
      "^(aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), tT = RegExp(
      "^(aria)[A-Z][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ), lT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i, Hp = null, tm = null, lm = null, fS = !1, Ac = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), sS = !1;
    if (Ac)
      try {
        var jp = {};
        Object.defineProperty(jp, "passive", {
          get: function() {
            sS = !0;
          }
        }), window.addEventListener("test", jp, jp), window.removeEventListener("test", jp, jp);
      } catch {
        sS = !1;
      }
    var Bf = null, rS = null, Z0 = null, Xr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, J0 = pl(Xr), qp = Fe({}, Xr, { view: 0, detail: 0 }), aT = pl(qp), dS, hS, Bp, K0 = Fe({}, qp, {
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
      getModifierState: wc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== Bp && (Bp && e.type === "mousemove" ? (dS = e.screenX - Bp.screenX, hS = e.screenY - Bp.screenY) : hS = dS = 0, Bp = e), dS);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : hS;
      }
    }), z1 = pl(K0), nT = Fe({}, K0, { dataTransfer: 0 }), uT = pl(nT), iT = Fe({}, qp, { relatedTarget: 0 }), mS = pl(iT), cT = Fe({}, Xr, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oT = pl(cT), fT = Fe({}, Xr, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), sT = pl(fT), rT = Fe({}, Xr, { data: 0 }), O1 = pl(
      rT
    ), dT = O1, hT = {
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
    }, mT = {
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
    }, yT = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    }, pT = Fe({}, qp, {
      key: function(e) {
        if (e.key) {
          var t = hT[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = Ko(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? mT[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: wc,
      charCode: function(e) {
        return e.type === "keypress" ? Ko(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ko(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), vT = pl(pT), gT = Fe({}, K0, {
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
    }), R1 = pl(gT), ST = Fe({}, qp, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: wc
    }), bT = pl(ST), ET = Fe({}, Xr, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), TT = pl(ET), AT = Fe({}, K0, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), zT = pl(AT), OT = Fe({}, Xr, {
      newState: 0,
      oldState: 0
    }), RT = pl(OT), _T = [9, 13, 27, 32], _1 = 229, yS = Ac && "CompositionEvent" in window, Yp = null;
    Ac && "documentMode" in document && (Yp = document.documentMode);
    var DT = Ac && "TextEvent" in window && !Yp, D1 = Ac && (!yS || Yp && 8 < Yp && 11 >= Yp), M1 = 32, C1 = String.fromCharCode(M1), U1 = !1, am = !1, MT = {
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
    }, Gp = null, wp = null, x1 = !1;
    Ac && (x1 = Sd("input") && (!document.documentMode || 9 < document.documentMode));
    var Rn = typeof Object.is == "function" ? Object.is : Yv, CT = Ac && "documentMode" in document && 11 >= document.documentMode, nm = null, pS = null, Xp = null, vS = !1, um = {
      animationend: Xc("Animation", "AnimationEnd"),
      animationiteration: Xc("Animation", "AnimationIteration"),
      animationstart: Xc("Animation", "AnimationStart"),
      transitionrun: Xc("Transition", "TransitionRun"),
      transitionstart: Xc("Transition", "TransitionStart"),
      transitioncancel: Xc("Transition", "TransitionCancel"),
      transitionend: Xc("Transition", "TransitionEnd")
    }, gS = {}, N1 = {};
    Ac && (N1 = document.createElement("div").style, "AnimationEvent" in window || (delete um.animationend.animation, delete um.animationiteration.animation, delete um.animationstart.animation), "TransitionEvent" in window || delete um.transitionend.transition);
    var H1 = Vc("animationend"), j1 = Vc("animationiteration"), q1 = Vc("animationstart"), UT = Vc("transitionrun"), xT = Vc("transitionstart"), NT = Vc("transitioncancel"), B1 = Vc("transitionend"), Y1 = /* @__PURE__ */ new Map(), SS = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
    SS.push("scrollEnd");
    var G1 = 0;
    if (typeof performance == "object" && typeof performance.now == "function")
      var HT = performance, w1 = function() {
        return HT.now();
      };
    else {
      var jT = Date;
      w1 = function() {
        return jT.now();
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
    }, qT = "This object has been omitted by React in the console log to avoid sending too much data from the server. Try logging smaller or more specific objects.", $0 = 0, ES = 1, TS = 2, AS = 3, k0 = "– ", W0 = "+ ", X1 = "  ", ol = typeof console < "u" && typeof console.timeStamp == "function" && typeof performance < "u" && typeof performance.measure == "function", ni = "Components ⚛", gt = "Scheduler ⚛", Et = "Blocking", Yf = !1, Ro = {
      color: "primary",
      properties: null,
      tooltipText: "",
      track: ni
    }, Gf = {
      start: -0,
      end: -0,
      detail: { devtools: Ro }
    }, BT = ["Changed Props", ""], V1 = "This component received deeply equal props. It might benefit from useMemo or the React Compiler in its owner.", YT = ["Changed Props", V1], Vp = 1, _o = 2, ui = [], im = 0, zS = 0, wf = {};
    Object.freeze(wf);
    var ii = null, cm = null, Be = 0, GT = 1, et = 2, on = 8, Xi = 16, wT = 32, L1 = !1;
    try {
      var Q1 = Object.preventExtensions({});
    } catch {
      L1 = !0;
    }
    var OS = /* @__PURE__ */ new WeakMap(), om = [], fm = 0, F0 = null, Lp = 0, ci = [], oi = 0, Vr = null, Do = 1, Mo = "", Ya = null, fl = null, mt = !1, zc = !1, hu = null, Xf = null, fi = !1, RS = Error(
      "Hydration Mismatch Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), _S = st(null), DS = st(null), Z1 = {}, I0 = null, sm = null, rm = !1, XT = typeof AbortController < "u" ? AbortController : function() {
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
    }, VT = El.unstable_scheduleCallback, LT = El.unstable_NormalPriority, Ql = {
      $$typeof: su,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
      _currentRenderer: null,
      _currentRenderer2: null
    }, Zl = El.unstable_now, P0 = console.createTask ? console.createTask : function() {
      return null;
    }, Qp = 1, eg = 2, za = -0, Vf = -0, Co = -0, Uo = null, _n = -1.1, Lr = -0, Al = -0, Me = -1.1, He = -1.1, ml = null, Dl = !1, Qr = -0, Oc = -1.1, Zp = null, Lf = 0, MS = null, CS = null, Zr = -1.1, Jp = null, dm = -1.1, tg = -1.1, xo = -0, No = -1.1, si = -1.1, US = 0, Kp = null, J1 = null, K1 = null, Qf = -1.1, Jr = null, Zf = -1.1, lg = -1.1, $1 = -0, k1 = -0, ag = 0, QT = null, W1 = 0, $p = -1.1, ng = !1, ug = !1, kp = null, xS = 0, Kr = 0, hm = null, F1 = Z.S;
    Z.S = function(e, t) {
      if (Jb = Tl(), typeof t == "object" && t !== null && typeof t.then == "function") {
        if (0 > No && 0 > si) {
          No = Zl();
          var a = Af(), i = Tf();
          (a !== Zf || i !== Jr) && (Zf = -1.1), Qf = a, Jr = i;
        }
        Iv(e, t);
      }
      F1 !== null && F1(e, t);
    };
    var $r = st(null), Vi = {
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
    }, Wp = [], Fp = [], Ip = [], Pp = [], ev = [], tv = [], kr = /* @__PURE__ */ new Set();
    Vi.recordUnsafeLifecycleWarnings = function(e, t) {
      kr.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && Wp.push(e), e.mode & on && typeof t.UNSAFE_componentWillMount == "function" && Fp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ip.push(e), e.mode & on && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ev.push(e), e.mode & on && typeof t.UNSAFE_componentWillUpdate == "function" && tv.push(e));
    }, Vi.flushPendingUnsafeLifecycleWarnings = function() {
      var e = /* @__PURE__ */ new Set();
      0 < Wp.length && (Wp.forEach(function(h) {
        e.add(
          de(h) || "Component"
        ), kr.add(h.type);
      }), Wp = []);
      var t = /* @__PURE__ */ new Set();
      0 < Fp.length && (Fp.forEach(function(h) {
        t.add(
          de(h) || "Component"
        ), kr.add(h.type);
      }), Fp = []);
      var a = /* @__PURE__ */ new Set();
      0 < Ip.length && (Ip.forEach(function(h) {
        a.add(
          de(h) || "Component"
        ), kr.add(h.type);
      }), Ip = []);
      var i = /* @__PURE__ */ new Set();
      0 < Pp.length && (Pp.forEach(
        function(h) {
          i.add(
            de(h) || "Component"
          ), kr.add(h.type);
        }
      ), Pp = []);
      var o = /* @__PURE__ */ new Set();
      0 < ev.length && (ev.forEach(function(h) {
        o.add(
          de(h) || "Component"
        ), kr.add(h.type);
      }), ev = []);
      var f = /* @__PURE__ */ new Set();
      if (0 < tv.length && (tv.forEach(function(h) {
        f.add(
          de(h) || "Component"
        ), kr.add(h.type);
      }), tv = []), 0 < t.size) {
        var d = k(
          t
        );
        console.error(
          `Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`,
          d
        );
      }
      0 < i.size && (d = k(
        i
      ), console.error(
        `Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state

Please update the following components: %s`,
        d
      )), 0 < f.size && (d = k(
        f
      ), console.error(
        `Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`,
        d
      )), 0 < e.size && (d = k(e), console.warn(
        `componentWillMount has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < a.size && (d = k(
        a
      ), console.warn(
        `componentWillReceiveProps has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://react.dev/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      )), 0 < o.size && (d = k(o), console.warn(
        `componentWillUpdate has been renamed, and is not recommended for use. See https://react.dev/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`,
        d
      ));
    };
    var ig = /* @__PURE__ */ new Map(), I1 = /* @__PURE__ */ new Set();
    Vi.recordLegacyContextWarning = function(e, t) {
      for (var a = null, i = e; i !== null; )
        i.mode & on && (a = i), i = i.return;
      a === null ? console.error(
        "Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue."
      ) : !I1.has(e.type) && (i = ig.get(a), e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], ig.set(a, i)), i.push(e));
    }, Vi.flushLegacyContextWarning = function() {
      ig.forEach(function(e) {
        if (e.length !== 0) {
          var t = e[0], a = /* @__PURE__ */ new Set();
          e.forEach(function(o) {
            a.add(de(o) || "Component"), I1.add(o.type);
          });
          var i = k(a);
          ue(t, function() {
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
    }, Vi.discardPendingWarnings = function() {
      Wp = [], Fp = [], Ip = [], Pp = [], ev = [], tv = [], ig = /* @__PURE__ */ new Map();
    };
    var P1 = {
      react_stack_bottom_frame: function(e, t, a) {
        var i = Jn;
        Jn = !0;
        try {
          return e(t, a);
        } finally {
          Jn = i;
        }
      }
    }, NS = P1.react_stack_bottom_frame.bind(P1), eb = {
      react_stack_bottom_frame: function(e) {
        var t = Jn;
        Jn = !0;
        try {
          return e.render();
        } finally {
          Jn = t;
        }
      }
    }, tb = eb.react_stack_bottom_frame.bind(eb), lb = {
      react_stack_bottom_frame: function(e, t) {
        try {
          t.componentDidMount();
        } catch (a) {
          Ct(e, e.return, a);
        }
      }
    }, HS = lb.react_stack_bottom_frame.bind(
      lb
    ), ab = {
      react_stack_bottom_frame: function(e, t, a, i, o) {
        try {
          t.componentDidUpdate(a, i, o);
        } catch (f) {
          Ct(e, e.return, f);
        }
      }
    }, nb = ab.react_stack_bottom_frame.bind(
      ab
    ), ub = {
      react_stack_bottom_frame: function(e, t) {
        var a = t.stack;
        e.componentDidCatch(t.value, {
          componentStack: a !== null ? a : ""
        });
      }
    }, ZT = ub.react_stack_bottom_frame.bind(
      ub
    ), ib = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a.componentWillUnmount();
        } catch (i) {
          Ct(e, t, i);
        }
      }
    }, cb = ib.react_stack_bottom_frame.bind(
      ib
    ), ob = {
      react_stack_bottom_frame: function(e) {
        var t = e.create;
        return e = e.inst, t = t(), e.destroy = t;
      }
    }, JT = ob.react_stack_bottom_frame.bind(ob), fb = {
      react_stack_bottom_frame: function(e, t, a) {
        try {
          a();
        } catch (i) {
          Ct(e, t, i);
        }
      }
    }, KT = fb.react_stack_bottom_frame.bind(fb), sb = {
      react_stack_bottom_frame: function(e) {
        var t = e._init;
        return t(e._payload);
      }
    }, $T = sb.react_stack_bottom_frame.bind(sb), mm = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`."
    ), jS = Error(
      "Suspense Exception: This is not a real error, and should not leak into userspace. If you're seeing this, it's likely a bug in React."
    ), cg = Error(
      "Suspense Exception: This is not a real error! It's an implementation detail of `useActionState` to interrupt the current render. You must either rethrow it immediately, or move the `useActionState` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary."
    ), og = {
      then: function() {
        console.error(
          'Internal React error: A listener was unexpectedly attached to a "noop" thenable. This is a bug in React. Please file an issue.'
        );
      }
    }, Wr = null, lv = !1, ym = null, av = 0, tt = null, qS, rb = qS = !1, db = {}, hb = {}, mb = {};
    ae = function(e, t, a) {
      if (a !== null && typeof a == "object" && a._store && (!a._store.validated && a.key == null || a._store.validated === 2)) {
        if (typeof a._store != "object")
          throw Error(
            "React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue."
          );
        a._store.validated = 1;
        var i = de(e), o = i || "null";
        if (!db[o]) {
          db[o] = !0, a = a._owner, e = e._debugOwner;
          var f = "";
          e && typeof e.tag == "number" && (o = de(e)) && (f = `

Check the render method of \`` + o + "`."), f || i && (f = `

Check the top-level render call using <` + i + ">.");
          var d = "";
          a != null && e !== a && (i = null, typeof a.tag == "number" ? i = de(a) : typeof a.name == "string" && (i = a.name), i && (d = " It was passed a child from " + i + ".")), ue(t, function() {
            console.error(
              'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
              f,
              d
            );
          });
        }
      }
    };
    var Fr = It(!0), yb = It(!1), pb = 0, vb = 1, gb = 2, BS = 3, Jf = !1, Sb = !1, YS = null, GS = !1, pm = st(null), fg = st(0), mu = st(null), ri = null, vm = 1, nv = 2, Yl = st(0), sg = 0, di = 1, Dn = 2, yu = 4, Mn = 8, gm, bb = /* @__PURE__ */ new Set(), Eb = /* @__PURE__ */ new Set(), wS = /* @__PURE__ */ new Set(), Tb = /* @__PURE__ */ new Set(), Ho = 0, Ge = null, el = null, Jl = null, rg = !1, Sm = !1, Ir = !1, dg = 0, uv = 0, jo = null, kT = 0, WT = 25, X = null, hi = null, qo = -1, iv = !1, cv = {
      readContext: Ft,
      use: Fa,
      useCallback: vl,
      useContext: vl,
      useEffect: vl,
      useImperativeHandle: vl,
      useLayoutEffect: vl,
      useInsertionEffect: vl,
      useMemo: vl,
      useReducer: vl,
      useRef: vl,
      useState: vl,
      useDebugValue: vl,
      useDeferredValue: vl,
      useTransition: vl,
      useSyncExternalStore: vl,
      useId: vl,
      useHostTransitionStatus: vl,
      useFormState: vl,
      useActionState: vl,
      useOptimistic: vl,
      useMemoCache: vl,
      useCacheRefresh: vl
    };
    cv.useEffectEvent = vl;
    var XS = null, Ab = null, VS = null, zb = null, Rc = null, Li = null, hg = null;
    XS = {
      readContext: function(e) {
        return Ft(e);
      },
      use: Fa,
      useCallback: function(e, t) {
        return X = "useCallback", Re(), Fc(t), Gu(e, t);
      },
      useContext: function(e) {
        return X = "useContext", Re(), Ft(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", Re(), Fc(t), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", Re(), Fc(a), Ls(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        X = "useInsertionEffect", Re(), Fc(t), qn(4, Dn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", Re(), Fc(t), Pa(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", Re(), Fc(t);
        var a = Z.H;
        Z.H = Rc;
        try {
          return rl(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", Re();
        var i = Z.H;
        Z.H = Rc;
        try {
          return Gd(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function(e) {
        return X = "useRef", Re(), Vd(e);
      },
      useState: function(e) {
        X = "useState", Re();
        var t = Z.H;
        Z.H = Rc;
        try {
          return Pc(e);
        } finally {
          Z.H = t;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", Re();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", Re(), uu(e, t);
      },
      useTransition: function() {
        return X = "useTransition", Re(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", Re(), af(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", Re(), Qd();
      },
      useFormState: function(e, t) {
        return X = "useFormState", Re(), qd(), Yu(e, t);
      },
      useActionState: function(e, t) {
        return X = "useActionState", Re(), Yu(e, t);
      },
      useOptimistic: function(e) {
        return X = "useOptimistic", Re(), nf(e);
      },
      useHostTransitionStatus: Mi,
      useMemoCache: Ai,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", Re(), Zd();
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", Re(), Vs(e);
      }
    }, Ab = {
      readContext: function(e) {
        return Ft(e);
      },
      use: Fa,
      useCallback: function(e, t) {
        return X = "useCallback", P(), Gu(e, t);
      },
      useContext: function(e) {
        return X = "useContext", P(), Ft(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", P(), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", P(), Ls(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        X = "useInsertionEffect", P(), qn(4, Dn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", P(), Pa(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", P();
        var a = Z.H;
        Z.H = Rc;
        try {
          return rl(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", P();
        var i = Z.H;
        Z.H = Rc;
        try {
          return Gd(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function(e) {
        return X = "useRef", P(), Vd(e);
      },
      useState: function(e) {
        X = "useState", P();
        var t = Z.H;
        Z.H = Rc;
        try {
          return Pc(e);
        } finally {
          Z.H = t;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", P(), uu(e, t);
      },
      useTransition: function() {
        return X = "useTransition", P(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", P(), af(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", P(), Qd();
      },
      useActionState: function(e, t) {
        return X = "useActionState", P(), Yu(e, t);
      },
      useFormState: function(e, t) {
        return X = "useFormState", P(), qd(), Yu(e, t);
      },
      useOptimistic: function(e) {
        return X = "useOptimistic", P(), nf(e);
      },
      useHostTransitionStatus: Mi,
      useMemoCache: Ai,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), Zd();
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", P(), Vs(e);
      }
    }, VS = {
      readContext: function(e) {
        return Ft(e);
      },
      use: Fa,
      useCallback: function(e, t) {
        return X = "useCallback", P(), Sa(e, t);
      },
      useContext: function(e) {
        return X = "useContext", P(), Ft(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", P(), ea(2048, Mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", P(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", P(), ea(4, Dn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", P(), ea(4, yu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", P();
        var a = Z.H;
        Z.H = Li;
        try {
          return lo(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", P();
        var i = Z.H;
        Z.H = Li;
        try {
          return nu(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", P(), xt().memoizedState;
      },
      useState: function() {
        X = "useState", P();
        var e = Z.H;
        Z.H = Li;
        try {
          return nu(Ia);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", P(), Je(e, t);
      },
      useTransition: function() {
        return X = "useTransition", P(), dl();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", P(), Bs(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", P(), xt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", P(), qd(), cf(e);
      },
      useActionState: function(e) {
        return X = "useActionState", P(), cf(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", P(), uf(e, t);
      },
      useHostTransitionStatus: Mi,
      useMemoCache: Ai,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), xt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", P(), ga(e);
      }
    }, zb = {
      readContext: function(e) {
        return Ft(e);
      },
      use: Fa,
      useCallback: function(e, t) {
        return X = "useCallback", P(), Sa(e, t);
      },
      useContext: function(e) {
        return X = "useContext", P(), Ft(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", P(), ea(2048, Mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", P(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", P(), ea(4, Dn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", P(), ea(4, yu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", P();
        var a = Z.H;
        Z.H = hg;
        try {
          return lo(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", P();
        var i = Z.H;
        Z.H = hg;
        try {
          return cc(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", P(), xt().memoizedState;
      },
      useState: function() {
        X = "useState", P();
        var e = Z.H;
        Z.H = hg;
        try {
          return cc(Ia);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", P(), Gt(e, t);
      },
      useTransition: function() {
        return X = "useTransition", P(), Ld();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", P(), Bs(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", P(), xt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", P(), qd(), rc(e);
      },
      useActionState: function(e) {
        return X = "useActionState", P(), rc(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", P(), ry(e, t);
      },
      useHostTransitionStatus: Mi,
      useMemoCache: Ai,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), xt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", P(), ga(e);
      }
    }, Rc = {
      readContext: function(e) {
        return V(), Ft(e);
      },
      use: function(e) {
        return L(), Fa(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", L(), Re(), Gu(e, t);
      },
      useContext: function(e) {
        return X = "useContext", L(), Re(), Ft(e);
      },
      useEffect: function(e, t) {
        return X = "useEffect", L(), Re(), Xs(e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", L(), Re(), Ls(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        X = "useInsertionEffect", L(), Re(), qn(4, Dn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", L(), Re(), Pa(e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", L(), Re();
        var a = Z.H;
        Z.H = Rc;
        try {
          return rl(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", L(), Re();
        var i = Z.H;
        Z.H = Rc;
        try {
          return Gd(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function(e) {
        return X = "useRef", L(), Re(), Vd(e);
      },
      useState: function(e) {
        X = "useState", L(), Re();
        var t = Z.H;
        Z.H = Rc;
        try {
          return Pc(e);
        } finally {
          Z.H = t;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", L(), Re();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", L(), Re(), uu(e, t);
      },
      useTransition: function() {
        return X = "useTransition", L(), Re(), my();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", L(), Re(), af(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", L(), Re(), Qd();
      },
      useFormState: function(e, t) {
        return X = "useFormState", L(), Re(), Yu(e, t);
      },
      useActionState: function(e, t) {
        return X = "useActionState", L(), Re(), Yu(e, t);
      },
      useOptimistic: function(e) {
        return X = "useOptimistic", L(), Re(), nf(e);
      },
      useMemoCache: function(e) {
        return L(), Ai(e);
      },
      useHostTransitionStatus: Mi,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", Re(), Zd();
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", L(), Re(), Vs(e);
      }
    }, Li = {
      readContext: function(e) {
        return V(), Ft(e);
      },
      use: function(e) {
        return L(), Fa(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", L(), P(), Sa(e, t);
      },
      useContext: function(e) {
        return X = "useContext", L(), P(), Ft(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", L(), P(), ea(2048, Mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", L(), P(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", L(), P(), ea(4, Dn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", L(), P(), ea(4, yu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", L(), P();
        var a = Z.H;
        Z.H = Li;
        try {
          return lo(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", L(), P();
        var i = Z.H;
        Z.H = Li;
        try {
          return nu(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", L(), P(), xt().memoizedState;
      },
      useState: function() {
        X = "useState", L(), P();
        var e = Z.H;
        Z.H = Li;
        try {
          return nu(Ia);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", L(), P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", L(), P(), Je(e, t);
      },
      useTransition: function() {
        return X = "useTransition", L(), P(), dl();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", L(), P(), Bs(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", L(), P(), xt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", L(), P(), cf(e);
      },
      useActionState: function(e) {
        return X = "useActionState", L(), P(), cf(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", L(), P(), uf(e, t);
      },
      useMemoCache: function(e) {
        return L(), Ai(e);
      },
      useHostTransitionStatus: Mi,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), xt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", L(), P(), ga(e);
      }
    }, hg = {
      readContext: function(e) {
        return V(), Ft(e);
      },
      use: function(e) {
        return L(), Fa(e);
      },
      useCallback: function(e, t) {
        return X = "useCallback", L(), P(), Sa(e, t);
      },
      useContext: function(e) {
        return X = "useContext", L(), P(), Ft(e);
      },
      useEffect: function(e, t) {
        X = "useEffect", L(), P(), ea(2048, Mn, e, t);
      },
      useImperativeHandle: function(e, t, a) {
        return X = "useImperativeHandle", L(), P(), Qs(e, t, a);
      },
      useInsertionEffect: function(e, t) {
        return X = "useInsertionEffect", L(), P(), ea(4, Dn, e, t);
      },
      useLayoutEffect: function(e, t) {
        return X = "useLayoutEffect", L(), P(), ea(4, yu, e, t);
      },
      useMemo: function(e, t) {
        X = "useMemo", L(), P();
        var a = Z.H;
        Z.H = Li;
        try {
          return lo(e, t);
        } finally {
          Z.H = a;
        }
      },
      useReducer: function(e, t, a) {
        X = "useReducer", L(), P();
        var i = Z.H;
        Z.H = Li;
        try {
          return cc(e, t, a);
        } finally {
          Z.H = i;
        }
      },
      useRef: function() {
        return X = "useRef", L(), P(), xt().memoizedState;
      },
      useState: function() {
        X = "useState", L(), P();
        var e = Z.H;
        Z.H = Li;
        try {
          return cc(Ia);
        } finally {
          Z.H = e;
        }
      },
      useDebugValue: function() {
        X = "useDebugValue", L(), P();
      },
      useDeferredValue: function(e, t) {
        return X = "useDeferredValue", L(), P(), Gt(e, t);
      },
      useTransition: function() {
        return X = "useTransition", L(), P(), Ld();
      },
      useSyncExternalStore: function(e, t, a) {
        return X = "useSyncExternalStore", L(), P(), Bs(
          e,
          t,
          a
        );
      },
      useId: function() {
        return X = "useId", L(), P(), xt().memoizedState;
      },
      useFormState: function(e) {
        return X = "useFormState", L(), P(), rc(e);
      },
      useActionState: function(e) {
        return X = "useActionState", L(), P(), rc(e);
      },
      useOptimistic: function(e, t) {
        return X = "useOptimistic", L(), P(), ry(e, t);
      },
      useMemoCache: function(e) {
        return L(), Ai(e);
      },
      useHostTransitionStatus: Mi,
      useCacheRefresh: function() {
        return X = "useCacheRefresh", P(), xt().memoizedState;
      },
      useEffectEvent: function(e) {
        return X = "useEffectEvent", L(), P(), ga(e);
      }
    };
    var Ob = {}, Rb = /* @__PURE__ */ new Set(), _b = /* @__PURE__ */ new Set(), Db = /* @__PURE__ */ new Set(), Mb = /* @__PURE__ */ new Set(), Cb = /* @__PURE__ */ new Set(), Ub = /* @__PURE__ */ new Set(), xb = /* @__PURE__ */ new Set(), Nb = /* @__PURE__ */ new Set(), Hb = /* @__PURE__ */ new Set(), jb = /* @__PURE__ */ new Set();
    Object.freeze(Ob);
    var LS = {
      enqueueSetState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = Hu(i);
        o.payload = t, a != null && (rf(a), o.callback = a), t = Ca(e, o, i), t !== null && (Pn(i, "this.setState()", e), hl(t, e, i), tf(t, e, i));
      },
      enqueueReplaceState: function(e, t, a) {
        e = e._reactInternals;
        var i = na(e), o = Hu(i);
        o.tag = vb, o.payload = t, a != null && (rf(a), o.callback = a), t = Ca(e, o, i), t !== null && (Pn(i, "this.replaceState()", e), hl(t, e, i), tf(t, e, i));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var a = na(e), i = Hu(a);
        i.tag = gb, t != null && (rf(t), i.callback = t), t = Ca(e, i, a), t !== null && (Pn(a, "this.forceUpdate()", e), hl(t, e, a), tf(t, e, a));
      }
    }, bm = null, QS = null, ZS = Error(
      "This is not a real error. It's an implementation detail of React's selective hydration feature. If this leaks into userspace, it's a bug in React. Please file an issue."
    ), Kl = !1, qb = {}, Bb = {}, Yb = {}, Gb = {}, Em = !1, wb = {}, mg = {}, JS = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    }, Xb = !1, Vb = null;
    Vb = /* @__PURE__ */ new Set();
    var Bo = !1, $l = !1, KS = !1, Lb = typeof WeakSet == "function" ? WeakSet : Set, Oa = null, Tm = null, Am = null, kl = null, kn = !1, Qi = null, sa = !1, ov = 8192, FT = {
      getCacheForType: function(e) {
        var t = Ft(Ql), a = t.data.get(e);
        return a === void 0 && (a = e(), t.data.set(e, a)), a;
      },
      cacheSignal: function() {
        return Ft(Ql).controller.signal;
      },
      getOwner: function() {
        return An;
      }
    };
    if (typeof Symbol == "function" && Symbol.for) {
      var fv = Symbol.for;
      fv("selector.component"), fv("selector.has_pseudo_class"), fv("selector.role"), fv("selector.test_id"), fv("selector.text");
    }
    var IT = [], PT = typeof WeakMap == "function" ? WeakMap : Map, Ra = 0, ra = 2, pu = 4, Yo = 0, sv = 1, Pr = 2, yg = 3, Kf = 4, pg = 6, Qb = 5, _t = Ra, tl = null, ut = null, lt = 0, Wn = 0, vg = 1, ed = 2, rv = 3, Zb = 4, $S = 5, dv = 6, gg = 7, kS = 8, td = 9, Kt = Wn, vu = null, $f = !1, zm = !1, WS = !1, _c = 0, zl = Yo, kf = 0, Wf = 0, FS = 0, Fn = 0, ld = 0, hv = null, Cn = null, Sg = !1, bg = 0, Jb = 0, Kb = 300, Eg = 1 / 0, $b = 500, mv = null, Nl = null, Ff = null, Tg = 0, IS = 1, PS = 2, kb = 3, If = 0, Wb = 1, Fb = 2, Ib = 3, Pb = 4, Ag = 5, Wl = 0, Pf = null, Om = null, Zi = 0, e1 = 0, t1 = -0, l1 = null, eE = null, tE = null, Ji = Tg, lE = null, eA = 50, yv = 0, a1 = null, n1 = !1, zg = !1, tA = 50, ad = 0, pv = null, Rm = !1, Og = null, aE = !1, nE = /* @__PURE__ */ new Set(), lA = {}, Rg = null, _m = null, u1 = !1, i1 = !1, _g = !1, c1 = !1, es = 0, o1 = {};
    (function() {
      for (var e = 0; e < SS.length; e++) {
        var t = SS[e], a = t.toLowerCase();
        t = t[0].toUpperCase() + t.slice(1), Nn(a, "on" + t);
      }
      Nn(H1, "onAnimationEnd"), Nn(j1, "onAnimationIteration"), Nn(q1, "onAnimationStart"), Nn("dblclick", "onDoubleClick"), Nn("focusin", "onFocus"), Nn("focusout", "onBlur"), Nn(UT, "onTransitionRun"), Nn(xT, "onTransitionStart"), Nn(NT, "onTransitionCancel"), Nn(B1, "onTransitionEnd");
    })(), Ve("onMouseEnter", ["mouseout", "mouseover"]), Ve("onMouseLeave", ["mouseout", "mouseover"]), Ve("onPointerEnter", ["pointerout", "pointerover"]), Ve("onPointerLeave", ["pointerout", "pointerover"]), pt(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ), pt(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ), pt("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), pt(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ), pt(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ), pt(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
    var vv = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ), f1 = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vv)
    ), Dg = "_reactListening" + Math.random().toString(36).slice(2), uE = !1, iE = !1, Mg = !1, cE = !1, Cg = !1, Ug = !1, oE = !1, xg = {}, aA = /\r\n?/g, nA = /\u0000|\uFFFD/g, nd = "http://www.w3.org/1999/xlink", s1 = "http://www.w3.org/XML/1998/namespace", uA = "javascript:throw new Error('React form unexpectedly submitted.')", iA = "suppressHydrationWarning", ud = "&", Ng = "/&", gv = "$", Sv = "/$", ts = "$?", id = "$~", Dm = "$!", cA = "html", oA = "body", fA = "head", r1 = "F!", fE = "F", sE = "loading", sA = "style", Go = 0, Mm = 1, Hg = 2, d1 = null, h1 = null, rE = { dialog: !0, webview: !0 }, m1 = null, bv = void 0, dE = typeof setTimeout == "function" ? setTimeout : void 0, rA = typeof clearTimeout == "function" ? clearTimeout : void 0, cd = -1, hE = typeof Promise == "function" ? Promise : void 0, dA = typeof queueMicrotask == "function" ? queueMicrotask : typeof hE < "u" ? function(e) {
      return hE.resolve(null).then(e).catch(v0);
    } : dE, y1 = null, od = 0, Ev = 1, mE = 2, yE = 3, mi = 4, yi = /* @__PURE__ */ new Map(), pE = /* @__PURE__ */ new Set(), wo = Ht.d;
    Ht.d = {
      f: function() {
        var e = wo.f(), t = ro();
        return e || t;
      },
      r: function(e) {
        var t = ie(e);
        t !== null && t.tag === 5 && t.type === "form" ? ao(t) : wo.r(e);
      },
      D: function(e) {
        wo.D(e), sp("dns-prefetch", e, null);
      },
      C: function(e, t) {
        wo.C(e, t), sp("preconnect", e, t);
      },
      L: function(e, t, a) {
        wo.L(e, t, a);
        var i = Cm;
        if (i && e && t) {
          var o = 'link[rel="preload"][as="' + al(t) + '"]';
          t === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + al(
            a.imageSrcSet
          ) + '"]', typeof a.imageSizes == "string" && (o += '[imagesizes="' + al(
            a.imageSizes
          ) + '"]')) : o += '[href="' + al(e) + '"]';
          var f = o;
          switch (t) {
            case "style":
              f = Of(e);
              break;
            case "script":
              f = Rf(e);
          }
          yi.has(f) || (e = Fe(
            {
              rel: "preload",
              href: t === "image" && a && a.imageSrcSet ? void 0 : e,
              as: t
            },
            a
          ), yi.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(
            So(f)
          ) || t === "script" && i.querySelector(bo(f)) || (t = i.createElement("link"), vt(t, "link", e), Se(t), i.head.appendChild(t)));
        }
      },
      m: function(e, t) {
        wo.m(e, t);
        var a = Cm;
        if (a && e) {
          var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + al(i) + '"][href="' + al(e) + '"]', f = o;
          switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              f = Rf(e);
          }
          if (!yi.has(f) && (e = Fe({ rel: "modulepreload", href: e }, t), yi.set(f, e), a.querySelector(o) === null)) {
            switch (i) {
              case "audioworklet":
              case "paintworklet":
              case "serviceworker":
              case "sharedworker":
              case "worker":
              case "script":
                if (a.querySelector(bo(f)))
                  return;
            }
            i = a.createElement("link"), vt(i, "link", e), Se(i), a.head.appendChild(i);
          }
        }
      },
      X: function(e, t) {
        wo.X(e, t);
        var a = Cm;
        if (a && e) {
          var i = Ye(a).hoistableScripts, o = Rf(e), f = i.get(o);
          f || (f = a.querySelector(
            bo(o)
          ), f || (e = Fe({ src: e, async: !0 }, t), (t = yi.get(o)) && Eo(e, t), f = a.createElement("script"), Se(f), vt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      },
      S: function(e, t, a) {
        wo.S(e, t, a);
        var i = Cm;
        if (i && e) {
          var o = Ye(i).hoistableStyles, f = Of(e);
          t = t || "default";
          var d = o.get(f);
          if (!d) {
            var h = { loading: od, preload: null };
            if (d = i.querySelector(
              So(f)
            ))
              h.loading = Ev | mi;
            else {
              e = Fe(
                {
                  rel: "stylesheet",
                  href: e,
                  "data-precedence": t
                },
                a
              ), (a = yi.get(f)) && hp(e, a);
              var y = d = i.createElement("link");
              Se(y), vt(y, "link", e), y._p = new Promise(function(p, R) {
                y.onload = p, y.onerror = R;
              }), y.addEventListener("load", function() {
                h.loading |= Ev;
              }), y.addEventListener("error", function() {
                h.loading |= mE;
              }), h.loading |= mi, Mh(d, t, i);
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
        wo.M(e, t);
        var a = Cm;
        if (a && e) {
          var i = Ye(a).hoistableScripts, o = Rf(e), f = i.get(o);
          f || (f = a.querySelector(
            bo(o)
          ), f || (e = Fe({ src: e, async: !0, type: "module" }, t), (t = yi.get(o)) && Eo(e, t), f = a.createElement("script"), Se(f), vt(f, "link", e), a.head.appendChild(f)), f = {
            type: "script",
            instance: f,
            count: 1,
            state: null
          }, i.set(o, f));
        }
      }
    };
    var Cm = typeof document > "u" ? null : document, jg = null, hA = 6e4, mA = 800, yA = 500, p1 = 0, v1 = null, qg = null, fd = iS, Tv = {
      $$typeof: su,
      Provider: null,
      Consumer: null,
      _currentValue: fd,
      _currentValue2: fd,
      _threadCount: 0
    }, vE = "%c%s%c", gE = "background: #e6e6e6;background: light-dark(rgba(0,0,0,0.1), rgba(255,255,255,0.25));color: #000000;color: light-dark(#000000, #ffffff);border-radius: 2px", SE = "", Bg = " ", pA = Function.prototype.bind, bE = !1, EE = null, TE = null, AE = null, zE = null, OE = null, RE = null, _E = null, DE = null, ME = null, CE = null;
    EE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = Te(t.memoizedState, a, 0, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Fe({}, e.memoizedProps), a = Pl(e, 2), a !== null && hl(a, e, 2));
    }, TE = function(e, t, a) {
      t = te(e, t), t !== null && (a = pe(t.memoizedState, a, 0), t.memoizedState = a, t.baseState = a, e.memoizedProps = Fe({}, e.memoizedProps), a = Pl(e, 2), a !== null && hl(a, e, 2));
    }, AE = function(e, t, a, i) {
      t = te(e, t), t !== null && (a = C(t.memoizedState, a, i), t.memoizedState = a, t.baseState = a, e.memoizedProps = Fe({}, e.memoizedProps), a = Pl(e, 2), a !== null && hl(a, e, 2));
    }, zE = function(e, t, a) {
      e.pendingProps = Te(e.memoizedProps, t, 0, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Pl(e, 2), t !== null && hl(t, e, 2);
    }, OE = function(e, t) {
      e.pendingProps = pe(e.memoizedProps, t, 0), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Pl(e, 2), t !== null && hl(t, e, 2);
    }, RE = function(e, t, a) {
      e.pendingProps = C(
        e.memoizedProps,
        t,
        a
      ), e.alternate && (e.alternate.pendingProps = e.pendingProps), t = Pl(e, 2), t !== null && hl(t, e, 2);
    }, _E = function(e) {
      var t = Pl(e, 2);
      t !== null && hl(t, e, 2);
    }, DE = function(e) {
      var t = da(), a = Pl(e, t);
      a !== null && hl(a, e, t);
    }, ME = function(e) {
      xe = e;
    }, CE = function(e) {
      Ae = e;
    };
    var Yg = !0, Gg = null, g1 = !1, ls = null, as = null, ns = null, Av = /* @__PURE__ */ new Map(), zv = /* @__PURE__ */ new Map(), us = [], vA = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
      " "
    ), wg = null;
    if (Cr.prototype.render = ei.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error("Cannot update an unmounted root.");
      var a = arguments;
      typeof a[1] == "function" ? console.error(
        "does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ) : Ze(a[1]) ? console.error(
        "You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root."
      ) : typeof a[1] < "u" && console.error(
        "You passed a second argument to root.render(...) but it only accepts one argument."
      ), a = e;
      var i = t.current, o = na(i);
      vp(i, o, a, t, null, null);
    }, Cr.prototype.unmount = ei.prototype.unmount = function() {
      var e = arguments;
      if (typeof e[0] == "function" && console.error(
        "does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect()."
      ), e = this._internalRoot, e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (_t & (ra | pu)) !== Ra && console.error(
          "Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."
        ), vp(e.current, 2, null, e, null, null), ro(), t[$n] = null;
      }
    }, Cr.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Ki();
        e = { blockedOn: null, target: e, priority: t };
        for (var a = 0; a < us.length && t !== 0 && t < us[a].priority; a++) ;
        us.splice(a, 0, e), a === 0 && qh(e);
      }
    }, (function() {
      var e = Ap.version;
      if (e !== "19.2.3")
        throw Error(
          `Incompatible React versions: The "react" and "react-dom" packages must have the exact same version. Instead got:
  - react:      ` + (e + `
  - react-dom:  19.2.3
Learn more: https://react.dev/warnings/version-mismatch`)
        );
    })(), typeof Map == "function" && Map.prototype != null && typeof Map.prototype.forEach == "function" && typeof Set == "function" && Set.prototype != null && typeof Set.prototype.clear == "function" && typeof Set.prototype.forEach == "function" || console.error(
      "React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://react.dev/link/react-polyfills"
    ), Ht.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : (e = Object.keys(e).join(","), Error(
          "Argument appears to not be a ReactComponent. Keys: " + e
        ));
      return e = Tt(t), e = e !== null ? qe(e) : null, e = e === null ? null : e.stateNode, e;
    }, !(function() {
      var e = {
        bundleType: 1,
        version: "19.2.3",
        rendererPackageName: "react-dom",
        currentDispatcherRef: Z,
        reconcilerVersion: "19.2.3"
      };
      return e.overrideHookState = EE, e.overrideHookStateDeletePath = TE, e.overrideHookStateRenamePath = AE, e.overrideProps = zE, e.overridePropsDeletePath = OE, e.overridePropsRenamePath = RE, e.scheduleUpdate = _E, e.scheduleRetry = DE, e.setErrorHandler = ME, e.setSuspenseHandler = CE, e.scheduleRefresh = je, e.scheduleRoot = ce, e.setRefreshHandler = $t, e.getCurrentFiber = Sp, Ol(e);
    })() && Ac && window.top === window.self && (-1 < navigator.userAgent.indexOf("Chrome") && navigator.userAgent.indexOf("Edge") === -1 || -1 < navigator.userAgent.indexOf("Firefox"))) {
      var UE = window.location.protocol;
      /^(https?|file):$/.test(UE) && console.info(
        "%cDownload the React DevTools for a better development experience: https://react.dev/link/react-devtools" + (UE === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://react.dev/link/react-devtools-faq` : ""),
        "font-weight:bold"
      );
    }
    Dv.createRoot = function(e, t) {
      if (!Ze(e))
        throw Error("Target container is not a DOM element.");
      Tp(e);
      var a = !1, i = "", o = Kd, f = py, d = vy;
      return t != null && (t.hydrate ? console.warn(
        "hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead."
      ) : typeof t == "object" && t !== null && t.$$typeof === Qn && console.error(
        `You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`
      ), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (d = t.onRecoverableError)), t = U0(
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
        q0
      ), e[$n] = t.current, yr(e), new ei(t);
    }, Dv.hydrateRoot = function(e, t, a) {
      if (!Ze(e))
        throw Error("Target container is not a DOM element.");
      Tp(e), t === void 0 && console.error(
        "Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)"
      );
      var i = !1, o = "", f = Kd, d = py, h = vy, y = null;
      return a != null && (a.unstable_strictMode === !0 && (i = !0), a.identifierPrefix !== void 0 && (o = a.identifierPrefix), a.onUncaughtError !== void 0 && (f = a.onUncaughtError), a.onCaughtError !== void 0 && (d = a.onCaughtError), a.onRecoverableError !== void 0 && (h = a.onRecoverableError), a.formState !== void 0 && (y = a.formState)), t = U0(
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
        q0
      ), t.context = pp(null), a = t.current, i = na(a), i = yl(i), o = Hu(i), o.callback = null, Ca(a, o, i), Pn(i, "hydrateRoot()", null), a = i, t.current.lanes = a, ha(t, a), ja(t), e[$n] = t.current, yr(e), new Cr(t);
    }, Dv.version = "19.2.3", typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })(), Dv;
}
var JE;
function UA() {
  if (JE) return Lg.exports;
  JE = 1;
  var w = {};
  function te() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if (w.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(te);
      } catch (Te) {
        console.error(Te);
      }
    }
  }
  return w.NODE_ENV === "production" ? (te(), Lg.exports = MA()) : Lg.exports = CA(), Lg.exports;
}
var xA = UA();
const NA = /* @__PURE__ */ SA(xA);
function Mv({ label: w, value: te, color: Te }) {
  return /* @__PURE__ */ N.jsxs("div", { className: `viz-stat-card ${Te}`, children: [
    /* @__PURE__ */ N.jsx("div", { className: "viz-stat-label", children: w }),
    /* @__PURE__ */ N.jsx("div", { className: "viz-stat-value", children: te })
  ] });
}
function HA({ config: w, isRunning: te, maxKVSessionsPerGPU: Te, contextLength: C }) {
  const [he, pe] = Qe.useState("routing"), [Ae, xe] = Qe.useState(!0), [L, V] = Qe.useState(!0), Ce = [
    { id: "routing", label: "🔀 Routing", desc: "Request distribution" },
    { id: "engine", label: "⚙️ Engine", desc: "Inference optimizations" },
    { id: "cache", label: "💾 Cache", desc: "TBD" },
    { id: "orchestrator", label: "🏗️ Orchestrator", desc: "TBD" },
    { id: "nodes", label: "🖥️ Nodes", desc: "Hardware resources" }
  ];
  return w.continuousBatching && Math.floor(100 / w.gpuUtilization), /* @__PURE__ */ N.jsxs("div", { className: "viz-panel", children: [
    /* @__PURE__ */ N.jsx("div", { className: "viz-panel-header", children: /* @__PURE__ */ N.jsx("h2", { children: "⚙️ Configuration" }) }),
    /* @__PURE__ */ N.jsxs("div", { children: [
      /* @__PURE__ */ N.jsxs("div", { className: "viz-environment-section", children: [
        /* @__PURE__ */ N.jsxs(
          "button",
          {
            onClick: () => V(!L),
            className: "viz-environment-header",
            children: [
              /* @__PURE__ */ N.jsxs("div", { children: [
                /* @__PURE__ */ N.jsx("span", { className: "viz-environment-title", children: "🌍 Environment" }),
                /* @__PURE__ */ N.jsx("span", { className: "viz-environment-desc", children: "Workload characteristics" })
              ] }),
              /* @__PURE__ */ N.jsx("span", { className: "viz-collapse-icon", children: L ? "▼" : "▶" })
            ]
          }
        ),
        L && /* @__PURE__ */ N.jsxs("div", { className: "viz-environment-content", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-group", children: [
            /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-label", children: [
              /* @__PURE__ */ N.jsx("span", { children: "Request Rate" }),
              /* @__PURE__ */ N.jsxs("span", { className: "viz-slider-value", children: [
                w.requestRate,
                " req/s"
              ] })
            ] }),
            /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "range",
                min: "1",
                max: "200",
                value: w.requestRate,
                onChange: (ae) => w.setRequestRate(parseInt(ae.target.value)),
                className: "viz-slider"
              }
            ),
            /* @__PURE__ */ N.jsx("div", { className: "viz-hint", children: "1-200 req/s" })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-group", children: [
            /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-label", children: [
              /* @__PURE__ */ N.jsx("span", { children: "Continuation Probability" }),
              /* @__PURE__ */ N.jsxs("span", { className: "viz-slider-value", children: [
                w.continuationProbability,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "100",
                step: "10",
                value: w.continuationProbability,
                onChange: (ae) => w.setContinuationProbability(parseInt(ae.target.value)),
                className: "viz-slider"
              }
            ),
            /* @__PURE__ */ N.jsx("div", { className: "viz-hint", children: "Chat: 80% | API: 20% | Code: 70%" })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-group", children: [
            /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-label", children: [
              /* @__PURE__ */ N.jsx("span", { children: "Context Length" }),
              /* @__PURE__ */ N.jsxs("span", { className: "viz-slider-value", children: [
                w.contextLength / 1e3,
                "k tokens"
              ] })
            ] }),
            /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "range",
                min: "1000",
                max: "8000",
                step: "1000",
                value: w.contextLength,
                onChange: (ae) => w.setContextLength(parseInt(ae.target.value)),
                className: "viz-slider"
              }
            )
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-group", children: [
            /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-label", children: [
              /* @__PURE__ */ N.jsx("span", { children: "GPU Utilization per Request" }),
              /* @__PURE__ */ N.jsxs("span", { className: "viz-slider-value", children: [
                w.gpuUtilization,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "range",
                min: "10",
                max: "100",
                step: "10",
                value: w.gpuUtilization,
                onChange: (ae) => w.setGpuUtilization(parseInt(ae.target.value)),
                className: "viz-slider"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "viz-tabs", children: Ce.map((ae) => /* @__PURE__ */ N.jsxs(
        "button",
        {
          onClick: () => pe(ae.id),
          className: `viz-tab ${he === ae.id ? "active" : ""}`,
          children: [
            /* @__PURE__ */ N.jsx("div", { className: "viz-tab-label", children: ae.label }),
            /* @__PURE__ */ N.jsx("div", { className: "viz-tab-desc", children: ae.desc })
          ]
        },
        ae.id
      )) }),
      /* @__PURE__ */ N.jsxs("div", { className: "viz-tab-content", children: [
        he === "routing" && /* @__PURE__ */ N.jsxs("div", { className: "viz-section", children: [
          /* @__PURE__ */ N.jsxs("label", { className: "viz-checkbox", children: [
            /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "checkbox",
                checked: w.kvCacheAware,
                onChange: (ae) => w.setKvCacheAware(ae.target.checked)
              }
            ),
            /* @__PURE__ */ N.jsxs("span", { className: "viz-checkbox-label", children: [
              /* @__PURE__ */ N.jsx("strong", { children: "KV-Cache-Aware Routing" }),
              /* @__PURE__ */ N.jsx("div", { className: "viz-checkbox-desc", children: "Route continuations to GPUs with cached KV states (75% latency reduction)" })
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "viz-info-box", children: [
            /* @__PURE__ */ N.jsx("strong", { children: "💡 How it works:" }),
            " Continuations route to GPUs with KV cache (50ms). When GPU is at capacity, oldest session is evicted (LRU) requiring prefill (200ms)."
          ] })
        ] }),
        he === "engine" && /* @__PURE__ */ N.jsxs("div", { className: "viz-section", children: [
          /* @__PURE__ */ N.jsxs("label", { className: "viz-checkbox", children: [
            /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "checkbox",
                checked: w.continuousBatching,
                onChange: (ae) => w.setContinuousBatching(ae.target.checked)
              }
            ),
            /* @__PURE__ */ N.jsxs("span", { className: "viz-checkbox-label", children: [
              /* @__PURE__ */ N.jsx("strong", { children: "Continuous Batching" }),
              /* @__PURE__ */ N.jsx("div", { className: "viz-checkbox-desc", children: "Process multiple requests concurrently (up to 100% GPU utilization)" })
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("label", { className: "viz-checkbox", children: [
            /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "checkbox",
                checked: w.pagedAttention,
                onChange: (ae) => w.setPagedAttention(ae.target.checked)
              }
            ),
            /* @__PURE__ */ N.jsxs("span", { className: "viz-checkbox-label", children: [
              /* @__PURE__ */ N.jsx("strong", { children: "Paged Attention (vLLM)" }),
              /* @__PURE__ */ N.jsx("div", { className: "viz-checkbox-desc", children: "1000x more KV sessions (40 → 40,000) - prevents evictions" })
            ] })
          ] }),
          !w.continuousBatching && /* @__PURE__ */ N.jsx("div", { className: "viz-warning-box warning", children: "⚠️ No batching enabled - GPUs handle 1 request at a time!" })
        ] }),
        he === "cache" && /* @__PURE__ */ N.jsx("div", { className: "viz-section", children: /* @__PURE__ */ N.jsxs("div", { className: "viz-info-box", children: [
          /* @__PURE__ */ N.jsx("strong", { children: "Coming Soon:" }),
          " Cache layer configuration"
        ] }) }),
        he === "orchestrator" && /* @__PURE__ */ N.jsx("div", { className: "viz-section", children: /* @__PURE__ */ N.jsxs("div", { className: "viz-info-box", children: [
          /* @__PURE__ */ N.jsx("strong", { children: "Coming Soon:" }),
          " Orchestration and infrastructure features"
        ] }) }),
        he === "nodes" && /* @__PURE__ */ N.jsx("div", { className: "viz-section", children: /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-group", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "viz-slider-label", children: [
            /* @__PURE__ */ N.jsx("span", { children: "Number of GPUs" }),
            /* @__PURE__ */ N.jsx("span", { className: "viz-slider-value", children: w.numGPUs })
          ] }),
          /* @__PURE__ */ N.jsx(
            "input",
            {
              type: "range",
              min: "1",
              max: "32",
              value: w.numGPUs,
              onChange: (ae) => !te && w.setNumGPUs(parseInt(ae.target.value)),
              disabled: te,
              className: "viz-slider"
            }
          ),
          te && /* @__PURE__ */ N.jsx("div", { className: "viz-hint warning", children: "⚠️ Stop simulation to change GPU count" }),
          /* @__PURE__ */ N.jsx("div", { className: "viz-hint", children: "1-32 GPUs" })
        ] }) })
      ] })
    ] })
  ] });
}
function jA({ queue: w }) {
  const [te, Te] = Qe.useState(!0), C = w.filter((pe) => !pe.isContinuation).length, he = w.length - C;
  return /* @__PURE__ */ N.jsxs("div", { className: "viz-panel", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "viz-panel-header", onClick: () => Te(!te), children: [
      /* @__PURE__ */ N.jsxs("div", { children: [
        /* @__PURE__ */ N.jsxs("h2", { children: [
          "📋 Request Queue (",
          w.length,
          ")"
        ] }),
        /* @__PURE__ */ N.jsxs("div", { style: { fontSize: "12px", color: "#6b7280" }, children: [
          /* @__PURE__ */ N.jsxs("span", { style: { marginRight: "16px" }, children: [
            "🔵 New (",
            C,
            ")"
          ] }),
          /* @__PURE__ */ N.jsxs("span", { children: [
            "🟢 Continuation (",
            he,
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ N.jsx("button", { className: "viz-collapse-btn", children: te ? "▼" : "▶" })
    ] }),
    te && /* @__PURE__ */ N.jsxs("div", { className: "viz-queue", children: [
      w.length === 0 ? /* @__PURE__ */ N.jsx("div", { className: "viz-queue-empty", children: "Queue is empty" }) : w.slice(0, 20).map((pe) => /* @__PURE__ */ N.jsxs(
        "div",
        {
          className: `viz-request ${pe.isContinuation ? "continuation" : "new"}`,
          title: `Request ${pe.id} - Session ${pe.sessionId}`,
          children: [
            /* @__PURE__ */ N.jsx("div", { className: "viz-request-id", children: pe.id }),
            /* @__PURE__ */ N.jsxs("div", { className: "viz-request-session", children: [
              "S",
              pe.sessionId
            ] })
          ]
        },
        pe.id
      )),
      w.length > 20 && /* @__PURE__ */ N.jsxs("div", { className: "viz-request", style: { background: "linear-gradient(135deg, #d1d5db, #9ca3af)", color: "#1f2937" }, children: [
        "+",
        w.length - 20
      ] })
    ] })
  ] });
}
function qA({ gpuStates: w, gpuUtilization: te, maxKVSessionsPerGPU: Te }) {
  return w.length > 8 ? /* @__PURE__ */ N.jsxs("div", { className: "viz-panel", children: [
    /* @__PURE__ */ N.jsx("h2", { children: "GPU Cluster" }),
    /* @__PURE__ */ N.jsx("div", { className: "viz-gpu-grid-compact", children: w.map((C) => {
      const he = Math.min(C.activeRequests.length * te, 100), pe = Array.from(C.kvCacheSessions?.values() || []).reduce((xe, L) => xe + L, 0), Ae = C.activeRequests.some((xe) => xe.hasKVCache);
      return /* @__PURE__ */ N.jsxs("div", { className: "viz-gpu-compact", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "viz-gpu-compact-name", children: [
          "GPU ",
          C.id
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "viz-gpu-compact-stats", children: [
          /* @__PURE__ */ N.jsxs("span", { className: "viz-gpu-compact-util", children: [
            Math.round(he),
            "%"
          ] }),
          /* @__PURE__ */ N.jsxs("span", { className: "viz-gpu-compact-reqs", children: [
            C.activeRequests.length,
            " req"
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "viz-progress-compact", children: /* @__PURE__ */ N.jsx(
          "div",
          {
            className: `viz-progress-bar ${he > 0 ? Ae ? "cache-hit" : he >= 90 ? "high" : "normal" : ""}`,
            style: { width: `${he}%` }
          }
        ) }),
        pe > 0 && /* @__PURE__ */ N.jsxs("div", { className: "viz-kv-compact", children: [
          "💾 ",
          pe
        ] })
      ] }, C.id);
    }) }),
    /* @__PURE__ */ N.jsx("div", { className: "viz-info-box", children: /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", gap: "16px", flexWrap: "wrap" }, children: [
      /* @__PURE__ */ N.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
        /* @__PURE__ */ N.jsx("span", { style: { width: "8px", height: "8px", background: "#10b981", borderRadius: "2px" } }),
        "KV cache hit"
      ] }),
      /* @__PURE__ */ N.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
        /* @__PURE__ */ N.jsx("span", { style: { width: "8px", height: "8px", background: "#a855f7", borderRadius: "2px" } }),
        "Normal"
      ] }),
      /* @__PURE__ */ N.jsxs("span", { style: { display: "flex", alignItems: "center", gap: "4px" }, children: [
        /* @__PURE__ */ N.jsx("span", { style: { width: "8px", height: "8px", background: "#ef4444", borderRadius: "2px" } }),
        "High load"
      ] }),
      /* @__PURE__ */ N.jsx("span", { children: "💾 = KV slots used" })
    ] }) })
  ] }) : /* @__PURE__ */ N.jsxs("div", { className: "viz-panel", children: [
    /* @__PURE__ */ N.jsx("h2", { children: "GPU Cluster" }),
    /* @__PURE__ */ N.jsx("div", { className: "viz-gpu-grid", children: w.map((C) => {
      const he = Math.min(C.activeRequests.length * te, 100), pe = C.activeRequests.some((ae) => ae.hasKVCache), Ae = Array.from(C.kvCacheSessions?.values() || []).reduce((ae, k) => ae + k, 0), xe = Te || 40, L = Ae / xe * 100, V = L >= 80, Ce = L >= 100;
      return /* @__PURE__ */ N.jsxs("div", { className: "viz-gpu", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "viz-gpu-header", children: [
          /* @__PURE__ */ N.jsxs("div", { className: "viz-gpu-header-left", children: [
            /* @__PURE__ */ N.jsxs("span", { className: "viz-gpu-name", children: [
              "GPU ",
              C.id
            ] }),
            Ae > 0 && /* @__PURE__ */ N.jsxs("span", { className: `viz-kv-badge ${Ce ? "critical" : V ? "warning" : "normal"}`, children: [
              "💾 ",
              Ae,
              "/",
              xe,
              " KV slots"
            ] })
          ] }),
          /* @__PURE__ */ N.jsxs("div", { className: "viz-gpu-stats", children: [
            C.activeRequests.length > 0 ? /* @__PURE__ */ N.jsxs("span", { className: "viz-badge-success", children: [
              C.activeRequests.length,
              " req",
              C.activeRequests.length > 1 ? "s" : ""
            ] }) : /* @__PURE__ */ N.jsx("span", { className: "viz-badge-idle", children: "Idle" }),
            /* @__PURE__ */ N.jsxs("span", { className: "viz-gpu-util", children: [
              Math.round(he),
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "viz-progress", children: /* @__PURE__ */ N.jsx(
          "div",
          {
            className: `viz-progress-bar ${he > 0 ? pe ? "cache-hit" : he >= 90 ? "high" : "normal" : ""}`,
            style: { width: `${he}%` }
          }
        ) }),
        Ce && /* @__PURE__ */ N.jsx("div", { className: "viz-warning-box critical", children: "⚠️ KV cache at capacity - evictions will occur" }),
        V && !Ce && /* @__PURE__ */ N.jsxs("div", { className: "viz-warning-box warning", children: [
          "⚠️ KV cache near capacity (",
          Ae,
          "/",
          xe,
          ")"
        ] })
      ] }, C.id);
    }) }),
    /* @__PURE__ */ N.jsx("div", { className: "viz-info-box", children: /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "8px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", gap: "16px" }, children: [
        /* @__PURE__ */ N.jsx("span", { children: "⚡ = KV cache hit (fast)" }),
        /* @__PURE__ */ N.jsx("span", { children: "🔄 = KV cache miss (requires prefill)" })
      ] }),
      /* @__PURE__ */ N.jsx("div", { children: "🔄⚠ = Eviction occurred (cache was full)" })
    ] }) })
  ] });
}
function BA({
  // Environment config
  requestRate: w,
  continuationProbability: te,
  contextLength: Te,
  gpuUtilization: C,
  // Routing config
  kvCacheAware: he,
  // Engine config
  continuousBatching: pe,
  pagedAttention: Ae,
  // Compute config
  numGPUs: xe,
  gpuType: L,
  // Control
  isRunning: V,
  slowMode: Ce,
  autoLoadTest: ae
}) {
  const [k, x] = Qe.useState([]), [ce, je] = Qe.useState([]), [$t, Ze] = Qe.useState([]), [ct, Dt] = Qe.useState(0), [jt, Bt] = Qe.useState(0), [Tt, qe] = Qe.useState(0), [At, ke] = Qe.useState(0), [zt, de] = Qe.useState(null), st = Qe.useRef(0), ze = Qe.useRef(0), Ne = Qe.useRef(0), Mt = Qe.useRef(0), G = Qe.useRef([]), q = Qe.useRef(0), I = Qe.useRef(0), fe = Qe.useRef(0), ge = Qe.useRef(/* @__PURE__ */ new Map()), z = Qe.useRef(/* @__PURE__ */ new Map()), E = Qe.useRef([]), J = Qe.useRef([]), le = Qe.useRef([]), ne = Qe.useRef([]), _e = Qe.useRef(1), at = Qe.useRef(Date.now()), rt = ((ue, Ml) => {
    const bt = {
      a100: 80,
      // 80 GB
      h100: 80,
      // 80 GB
      l40s: 48,
      // 48 GB
      a10g: 24
      // 24 GB
    }[ue] * 0.5;
    return Math.floor(bt * (Ml ? 1e3 : 1));
  })(L, Ae), qt = 1;
  Qe.useEffect(() => {
    G.current = k;
  }, [k]), Qe.useEffect(() => {
    q.current = ce.length;
  }, [ce.length]), Qe.useEffect(() => {
    I.current = jt, fe.current = Tt;
  }, [jt, Tt]), Qe.useEffect(() => {
    const ue = Array(xe).fill(null).map((Ml, yt) => ({
      id: yt,
      activeRequests: [],
      kvCacheSessions: /* @__PURE__ */ new Map(),
      // Map<sessionId, slotsUsed>
      maxKVSessions: rt
    }));
    x(ue), G.current = ue, st.current = 0;
  }, [xe, rt, Ae, L]), Qe.useEffect(() => {
    if (!V) return;
    const ue = setInterval(() => {
      const Ml = Date.now(), yt = 3e4 * qt, ll = [];
      z.current.forEach((bt, Xe) => {
        Ml - bt > yt && ll.push(Xe);
      }), ll.forEach((bt) => {
        ge.current.delete(bt), z.current.delete(bt), x((Xe) => Xe.map((kt) => {
          const Yt = new Map(kt.kvCacheSessions);
          return Yt.delete(bt), {
            ...kt,
            kvCacheSessions: Yt
          };
        }));
      });
    }, 5e3 * qt);
    return () => clearInterval(ue);
  }, [V, qt]), Qe.useEffect(() => {
    if (!V) return;
    const ue = setInterval(() => {
      const Ml = ze.current++;
      Dt((bt) => bt + 1);
      const yt = Math.random() * 100 < te;
      let ll;
      if (yt && ge.current.size > 0) {
        const bt = Array.from(ge.current.keys());
        ll = bt[Math.floor(Math.random() * bt.length)], KE = !0;
      } else
        ll = Ne.current++;
      je((bt) => [...bt, {
        id: Ml,
        sessionId: ll,
        isContinuation: KE,
        timestamp: Date.now(),
        contextLength: Te
      }]);
    }, 1e3 / w * qt);
    return () => clearInterval(ue);
  }, [V, w, te, Te, qt]), Qe.useEffect(() => {
    if (!V) return;
    const ue = setInterval(() => {
      const Ml = Date.now();
      x((yt) => {
        let ll = 0;
        const bt = yt.map((Xe) => {
          const kt = Xe.activeRequests.filter((Yt) => Ml >= Yt.completionTime ? (ll++, !1) : !0);
          return {
            ...Xe,
            activeRequests: kt,
            kvCacheSessions: Xe.kvCacheSessions
          };
        });
        return Mt.current += ll, bt;
      }), je((yt) => {
        if (yt.length === 0) return yt;
        const ll = pe, bt = [], Xe = G.current.map((Yt) => Yt.activeRequests.length);
        for (let Yt = 0; Yt < yt.length; Yt++) {
          const Ol = yt[Yt], { sessionId: re, isContinuation: wa, contextLength: Lt } = Ol;
          let We = null, wl = !1;
          const In = Math.ceil(Lt / 1e3), da = [];
          for (let Wt = 0; Wt < xe; Wt++) {
            const ha = G.current[Wt], Dc = (Xe[Wt] + 1) * C, Mc = ll ? Dc <= 100 : Xe[Wt] === 0, Cc = Array.from(ha.kvCacheSessions.values()).reduce((yl, ma) => yl + ma, 0), rn = ha.kvCacheSessions.has(re) || Cc + In <= ha.maxKVSessions;
            Mc && rn && da.push(Wt);
          }
          if (da.length === 0) break;
          if (he && wa && da.length > 0) {
            for (const Wt of da)
              if (G.current[Wt].kvCacheSessions.has(re)) {
                We = Wt, wl = !0;
                break;
              }
          }
          if (We === null) {
            for (let Wt = 0; Wt < xe; Wt++) {
              const ha = (st.current + Wt) % xe;
              if (da.includes(ha)) {
                We = ha, wl = !1, st.current = (ha + 1) % xe;
                break;
              }
            }
            We === null && (We = da[0], st.current = (da[0] + 1) % xe);
          }
          if (Xe[We] += 1, wl ? Bt((Wt) => Wt + 1) : wa && qe((Wt) => Wt + 1), bt.push({ request: Ol, gpuIndex: We, hasKVCache: wl }), !ll) break;
        }
        if (bt.length > 0) {
          const Yt = G.current.map((Ol) => ({
            ...Ol,
            activeRequests: [...Ol.activeRequests],
            kvCacheSessions: new Map(Ol.kvCacheSessions)
          }));
          bt.forEach(({ request: Ol, gpuIndex: re, hasKVCache: wa }) => {
            const Lt = Yt[re], We = Math.ceil(Ol.contextLength / 1e3), wl = wa ? 50 * qt : 100 * We * qt, In = Ml + wl;
            Lt.kvCacheSessions.has(Ol.sessionId) || Lt.kvCacheSessions.set(Ol.sessionId, We), Lt.activeRequests.push({
              ...Ol,
              latency: wl / qt,
              hasKVCache: wa,
              completionTime: In
            }), ge.current.set(Ol.sessionId, re), z.current.set(Ol.sessionId, Date.now());
          }), G.current = Yt, x(Yt);
        }
        const kt = new Set(bt.map((Yt) => Yt.request.id));
        return yt.filter((Yt) => !kt.has(Yt.id));
      });
    }, 50 * qt);
    return () => clearInterval(ue);
  }, [
    V,
    C,
    pe,
    xe,
    qt,
    he,
    Te
  ]), Qe.useEffect(() => {
    if (!V) return;
    const ue = setInterval(() => {
      const Ml = Date.now(), yt = G.current, ll = yt.reduce((Lt, We) => {
        const wl = We.activeRequests.reduce((In, da) => In + (da.latency || 0), 0) / (We.activeRequests.length || 1);
        return Lt + wl;
      }, 0) / (yt.length || 1), bt = Mt.current;
      Mt.current = 0;
      const Xe = yt.reduce((Lt, We) => Lt + We.activeRequests.length * C, 0) / yt.length;
      E.current.push(bt), E.current.length > 5 && E.current.shift(), J.current.push(ll), J.current.length > 5 && J.current.shift(), le.current.push(Xe), le.current.length > 5 && le.current.shift();
      const kt = E.current.reduce((Lt, We) => Lt + We, 0) / E.current.length, Yt = J.current.reduce((Lt, We) => Lt + We, 0) / J.current.length, Ol = le.current.reduce((Lt, We) => Lt + We, 0) / le.current.length, re = I.current + fe.current, wa = re > 0 ? I.current / re * 100 : 0;
      Ze((Lt) => [...Lt, {
        timestamp: Ml,
        latency: Yt || 0,
        throughput: kt || 0,
        queueSize: q.current,
        gpuUtilization: Ol || 0,
        cacheHitRate: wa || 0
      }].slice(-100));
    }, 1e3 * qt);
    return () => clearInterval(ue);
  }, [V, qt, C]), Qe.useEffect(() => {
  }, [V, ae, qt]);
  const Ga = () => {
    ne.current = [], _e.current = 1, at.current = Date.now(), de(null), E.current = [], J.current = [], le.current = [], je([]), Ze([]), Dt(0), Bt(0), qe(0), ke(0), ze.current = 0, Ne.current = 0, Mt.current = 0, I.current = 0, fe.current = 0, ge.current.clear(), z.current.clear();
    const ue = Array(xe).fill(null).map((Ml, yt) => ({
      id: yt,
      activeRequests: [],
      kvCacheSessions: /* @__PURE__ */ new Map(),
      maxKVSessions: rt
    }));
    x(ue), G.current = ue;
  };
  return {
    // State
    gpuStates: k,
    requestQueue: ce,
    metrics: $t,
    totalRequests: ct,
    cacheHits: jt,
    cacheMisses: Tt,
    cacheEvictions: At,
    maxSustainableRate: zt,
    // Computed
    maxKVSessionsPerGPU: rt,
    currentAutoLoadRate: _e.current,
    // Actions
    reset: Ga
  };
}
let KE = !1;
function YA() {
  const [w, te] = Qe.useState(5), [Te, C] = Qe.useState(60), [he, pe] = Qe.useState(4e3), [Ae, xe] = Qe.useState(30), [L, V] = Qe.useState(2), [Ce, ae] = Qe.useState(!1), [k, x] = Qe.useState(!1), [ce, je] = Qe.useState(!1), [$t, Ze] = Qe.useState(!1), {
    gpuStates: ct,
    requestQueue: Dt,
    metrics: jt,
    maxKVSessionsPerGPU: Bt,
    reset: Tt
  } = BA({
    requestRate: w,
    continuationProbability: Te,
    contextLength: he,
    gpuUtilization: Ae,
    kvCacheAware: k,
    continuousBatching: ce,
    pagedAttention: $t,
    numGPUs: L,
    gpuType: "a100",
    isRunning: Ce,
    slowMode: !1,
    autoLoadTest: !1
  }), qe = () => ae(!0), At = () => ae(!1), ke = () => {
    ae(!1), Tt();
  }, zt = jt[jt.length - 1] || {
    latency: 0,
    throughput: 0,
    queueSize: 0,
    gpuUtilization: 0,
    cacheHitRate: 0
  }, de = ce ? Math.floor(100 / Ae) : 1;
  return /* @__PURE__ */ N.jsxs("div", { children: [
    /* @__PURE__ */ N.jsxs("div", { className: "viz-stats", children: [
      /* @__PURE__ */ N.jsx(Mv, { label: "Avg Latency", value: `${Math.round(zt.latency)}ms`, color: "blue" }),
      /* @__PURE__ */ N.jsx(Mv, { label: "Throughput", value: `${zt.throughput} req/s`, color: "green" }),
      /* @__PURE__ */ N.jsx(Mv, { label: "Queue Size", value: zt.queueSize, color: "yellow" }),
      /* @__PURE__ */ N.jsx(Mv, { label: "GPU Load", value: `${Math.round(zt.gpuUtilization)}%`, color: "purple" }),
      /* @__PURE__ */ N.jsx(Mv, { label: "Cache Hit Rate", value: `${Math.round(zt.cacheHitRate)}%`, color: "cyan" })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "viz-controls", style: { marginBottom: "20px" }, children: [
      Ce ? /* @__PURE__ */ N.jsx("button", { onClick: At, className: "viz-btn viz-btn-danger", children: "■ Stop" }) : /* @__PURE__ */ N.jsx("button", { onClick: qe, className: "viz-btn viz-btn-primary", children: "▶ Start" }),
      /* @__PURE__ */ N.jsx("button", { onClick: ke, className: "viz-btn viz-btn-secondary", children: "Reset" })
    ] }),
    /* @__PURE__ */ N.jsx(
      HA,
      {
        config: {
          requestRate: w,
          setRequestRate: te,
          continuationProbability: Te,
          setContinuationProbability: C,
          contextLength: he,
          setContextLength: pe,
          gpuUtilization: Ae,
          setGpuUtilization: xe,
          numGPUs: L,
          setNumGPUs: V,
          kvCacheAware: k,
          setKvCacheAware: x,
          continuousBatching: ce,
          setContinuousBatching: je,
          pagedAttention: $t,
          setPagedAttention: Ze
        },
        isRunning: Ce,
        maxKVSessionsPerGPU: Bt,
        contextLength: he
      }
    ),
    /* @__PURE__ */ N.jsxs("div", { className: "viz-viz-grid", children: [
      /* @__PURE__ */ N.jsx(jA, { queue: Dt }),
      /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "20px" }, children: [
        /* @__PURE__ */ N.jsx(
          qA,
          {
            gpuStates: ct,
            gpuUtilization: Ae,
            maxKVSessionsPerGPU: Bt
          }
        ),
        /* @__PURE__ */ N.jsxs("div", { className: "viz-panel", style: { marginTop: "20px" }, children: [
          /* @__PURE__ */ N.jsx("h2", { children: "📊 Performance Metrics" }),
          /* @__PURE__ */ N.jsxs("div", { style: { display: "grid", gap: "8px", fontSize: "13px" }, children: [
            /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "8px", background: "#f9fafb", borderRadius: "6px" }, children: [
              /* @__PURE__ */ N.jsx("span", { style: { color: "#6b7280" }, children: "Decode (Cache Hit):" }),
              /* @__PURE__ */ N.jsx("span", { style: { fontWeight: "bold", color: "#3b82f6" }, children: "50ms" })
            ] }),
            /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "8px", background: "#f9fafb", borderRadius: "6px" }, children: [
              /* @__PURE__ */ N.jsx("span", { style: { color: "#6b7280" }, children: "Prefill (Cache Miss):" }),
              /* @__PURE__ */ N.jsxs("span", { style: { fontWeight: "bold", color: "#f59e0b" }, children: [
                he / 1e3 * 100,
                "ms"
              ] })
            ] }),
            /* @__PURE__ */ N.jsxs("div", { style: { fontSize: "11px", color: "#6b7280", padding: "4px 8px" }, children: [
              "Prefill scales with context: ",
              he / 1e3,
              "K tokens × 100ms"
            ] }),
            /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "8px", background: "#f9fafb", borderRadius: "6px", borderTop: "2px solid #e5e7eb" }, children: [
              /* @__PURE__ */ N.jsx("span", { style: { color: "#6b7280" }, children: "Concurrent Reqs per GPU:" }),
              /* @__PURE__ */ N.jsxs("span", { style: { fontWeight: "bold", color: ce ? "#10b981" : "#ef4444" }, children: [
                de,
                " ",
                !ce && "(1 at a time!)"
              ] })
            ] }),
            /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", justifyContent: "space-between", padding: "8px", background: "#f9fafb", borderRadius: "6px" }, children: [
              /* @__PURE__ */ N.jsx("span", { style: { color: "#6b7280" }, children: "KV Sessions per GPU:" }),
              /* @__PURE__ */ N.jsxs("span", { style: { fontWeight: "bold", color: "#06b6d4" }, children: [
                Bt,
                " max"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
const GA = "inference-visualizer-root", $E = document.getElementById(GA) || document.getElementById("root");
$E && NA.createRoot($E).render(/* @__PURE__ */ N.jsx(YA, {}));
