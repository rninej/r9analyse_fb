"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [696],
  {
    199: (e, t, r) => {
      r.d(t, { A: () => o });
      let o = r(14232).createContext({});
    },
    3034: (e, t, r) => {
      r.d(t, { A: () => b });
      var o = r(14232),
        a = r(69241),
        n = r(4697),
        l = r(54773),
        i = r(82987),
        s = r(52196),
        c = r(47951),
        d = r(45879);
      function p(e) {
        return (0, d.Ay)("MuiDialogContent", e);
      }
      (0, c.A)("MuiDialogContent", ["root", "dividers"]);
      var u = r(12526),
        m = r(37876);
      let v = (e) => {
          let { classes: t, dividers: r } = e;
          return (0, n.A)({ root: ["root", r && "dividers"] }, p, t);
        },
        g = (0, l.Ay)("div", {
          name: "MuiDialogContent",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [t.root, r.dividers && t.dividers];
          },
        })(
          (0, i.A)((e) => {
            let { theme: t } = e;
            return {
              flex: "1 1 auto",
              WebkitOverflowScrolling: "touch",
              overflowY: "auto",
              padding: "20px 24px",
              variants: [
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.dividers;
                  },
                  style: {
                    padding: "16px 24px",
                    borderTop: "1px solid ".concat(
                      (t.vars || t).palette.divider
                    ),
                    borderBottom: "1px solid ".concat(
                      (t.vars || t).palette.divider
                    ),
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.dividers;
                  },
                  style: { [".".concat(u.A.root, " + &")]: { paddingTop: 0 } },
                },
              ],
            };
          })
        ),
        b = o.forwardRef(function (e, t) {
          let r = (0, s.b)({ props: e, name: "MuiDialogContent" }),
            { className: o, dividers: n = !1, ...l } = r,
            i = { ...r, dividers: n },
            c = v(i);
          return (0, m.jsx)(g, {
            className: (0, a.A)(c.root, o),
            ownerState: i,
            ref: t,
            ...l,
          });
        });
    },
    6003: (e, t, r) => {
      r.d(t, { A: () => M });
      var o = r(14232),
        a = r(69241),
        n = r(4697),
        l = r(54843),
        i = r(68275),
        s = r(54773),
        c = r(82987),
        d = r(52196),
        p = r(99003),
        u = r(68197),
        m = r(91411),
        v = r(66313),
        g = r(78630),
        b = r(23368),
        A = r(632),
        h = r(47951),
        f = r(45879);
      function y(e) {
        return (0, f.Ay)("MuiMenuItem", e);
      }
      let x = (0, h.A)("MuiMenuItem", [
        "root",
        "focusVisible",
        "dense",
        "disabled",
        "divider",
        "gutters",
        "selected",
      ]);
      var k = r(37876);
      let w = (e) => {
          let {
              disabled: t,
              dense: r,
              divider: o,
              disableGutters: a,
              selected: l,
              classes: i,
            } = e,
            s = (0, n.A)(
              {
                root: [
                  "root",
                  r && "dense",
                  t && "disabled",
                  !a && "gutters",
                  o && "divider",
                  l && "selected",
                ],
              },
              y,
              i
            );
          return { ...i, ...s };
        },
        C = (0, s.Ay)(u.A, {
          shouldForwardProp: (e) => (0, i.A)(e) || "classes" === e,
          name: "MuiMenuItem",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.root,
              r.dense && t.dense,
              r.divider && t.divider,
              !r.disableGutters && t.gutters,
            ];
          },
        })(
          (0, c.A)((e) => {
            let { theme: t } = e;
            return {
              ...t.typography.body1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              textDecoration: "none",
              minHeight: 48,
              paddingTop: 6,
              paddingBottom: 6,
              boxSizing: "border-box",
              whiteSpace: "nowrap",
              "&:hover": {
                textDecoration: "none",
                backgroundColor: (t.vars || t).palette.action.hover,
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
              ["&.".concat(x.selected)]: {
                backgroundColor: t.vars
                  ? "rgba("
                      .concat(t.vars.palette.primary.mainChannel, " / ")
                      .concat(t.vars.palette.action.selectedOpacity, ")")
                  : (0, l.X4)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity
                    ),
                ["&.".concat(x.focusVisible)]: {
                  backgroundColor: t.vars
                    ? "rgba("
                        .concat(t.vars.palette.primary.mainChannel, " / calc(")
                        .concat(t.vars.palette.action.selectedOpacity, " + ")
                        .concat(t.vars.palette.action.focusOpacity, "))")
                    : (0, l.X4)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity +
                          t.palette.action.focusOpacity
                      ),
                },
              },
              ["&.".concat(x.selected, ":hover")]: {
                backgroundColor: t.vars
                  ? "rgba("
                      .concat(t.vars.palette.primary.mainChannel, " / calc(")
                      .concat(t.vars.palette.action.selectedOpacity, " + ")
                      .concat(t.vars.palette.action.hoverOpacity, "))")
                  : (0, l.X4)(
                      t.palette.primary.main,
                      t.palette.action.selectedOpacity +
                        t.palette.action.hoverOpacity
                    ),
                "@media (hover: none)": {
                  backgroundColor: t.vars
                    ? "rgba("
                        .concat(t.vars.palette.primary.mainChannel, " / ")
                        .concat(t.vars.palette.action.selectedOpacity, ")")
                    : (0, l.X4)(
                        t.palette.primary.main,
                        t.palette.action.selectedOpacity
                      ),
                },
              },
              ["&.".concat(x.focusVisible)]: {
                backgroundColor: (t.vars || t).palette.action.focus,
              },
              ["&.".concat(x.disabled)]: {
                opacity: (t.vars || t).palette.action.disabledOpacity,
              },
              ["& + .".concat(g.A.root)]: {
                marginTop: t.spacing(1),
                marginBottom: t.spacing(1),
              },
              ["& + .".concat(g.A.inset)]: { marginLeft: 52 },
              ["& .".concat(A.A.root)]: { marginTop: 0, marginBottom: 0 },
              ["& .".concat(A.A.inset)]: { paddingLeft: 36 },
              ["& .".concat(b.A.root)]: { minWidth: 36 },
              variants: [
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.disableGutters;
                  },
                  style: { paddingLeft: 16, paddingRight: 16 },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.divider;
                  },
                  style: {
                    borderBottom: "1px solid ".concat(
                      (t.vars || t).palette.divider
                    ),
                    backgroundClip: "padding-box",
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.dense;
                  },
                  style: { [t.breakpoints.up("sm")]: { minHeight: "auto" } },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.dense;
                  },
                  style: {
                    minHeight: 32,
                    paddingTop: 4,
                    paddingBottom: 4,
                    ...t.typography.body2,
                    ["& .".concat(b.A.root, " svg")]: { fontSize: "1.25rem" },
                  },
                },
              ],
            };
          })
        ),
        M = o.forwardRef(function (e, t) {
          let r;
          let n = (0, d.b)({ props: e, name: "MuiMenuItem" }),
            {
              autoFocus: l = !1,
              component: i = "li",
              dense: s = !1,
              divider: c = !1,
              disableGutters: u = !1,
              focusVisibleClassName: g,
              role: b = "menuitem",
              tabIndex: A,
              className: h,
              ...f
            } = n,
            y = o.useContext(p.A),
            x = o.useMemo(
              () => ({ dense: s || y.dense || !1, disableGutters: u }),
              [y.dense, s, u]
            ),
            M = o.useRef(null);
          (0, m.A)(() => {
            l && M.current && M.current.focus();
          }, [l]);
          let R = { ...n, dense: x.dense, divider: c, disableGutters: u },
            P = w(n),
            S = (0, v.A)(M, t);
          return (
            n.disabled || (r = void 0 !== A ? A : -1),
            (0, k.jsx)(p.A.Provider, {
              value: x,
              children: (0, k.jsx)(C, {
                ref: S,
                role: b,
                tabIndex: r,
                component: i,
                focusVisibleClassName: (0, a.A)(P.focusVisible, g),
                className: (0, a.A)(P.root, h),
                ...f,
                ownerState: R,
                classes: P,
              }),
            })
          );
        });
    },
    12526: (e, t, r) => {
      r.d(t, { A: () => l, t: () => n });
      var o = r(47951),
        a = r(45879);
      function n(e) {
        return (0, a.Ay)("MuiDialogTitle", e);
      }
      let l = (0, o.A)("MuiDialogTitle", ["root"]);
    },
    26872: (e, t, r) => {
      r.d(t, { A: () => f });
      var o = r(14232),
        a = r(4697),
        n = r(80027),
        l = r(68275),
        i = r(54773),
        s = r(1154),
        c = r(74073),
        d = r(68197),
        p = r(47951),
        u = r(45879);
      function m(e) {
        return (0, u.Ay)("PrivateSwitchBase", e);
      }
      (0, p.A)("PrivateSwitchBase", [
        "root",
        "checked",
        "disabled",
        "input",
        "edgeStart",
        "edgeEnd",
      ]);
      var v = r(67360),
        g = r(37876);
      let b = (e) => {
          let { classes: t, checked: r, disabled: o, edge: l } = e,
            i = {
              root: [
                "root",
                r && "checked",
                o && "disabled",
                l && "edge".concat((0, n.A)(l)),
              ],
              input: ["input"],
            };
          return (0, a.A)(i, m, t);
        },
        A = (0, i.Ay)(d.A)({
          padding: 9,
          borderRadius: "50%",
          variants: [
            {
              props: { edge: "start", size: "small" },
              style: { marginLeft: -3 },
            },
            {
              props: (e) => {
                let { edge: t, ownerState: r } = e;
                return "start" === t && "small" !== r.size;
              },
              style: { marginLeft: -12 },
            },
            {
              props: { edge: "end", size: "small" },
              style: { marginRight: -3 },
            },
            {
              props: (e) => {
                let { edge: t, ownerState: r } = e;
                return "end" === t && "small" !== r.size;
              },
              style: { marginRight: -12 },
            },
          ],
        }),
        h = (0, i.Ay)("input", { shouldForwardProp: l.A })({
          cursor: "inherit",
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        f = o.forwardRef(function (e, t) {
          let {
              autoFocus: r,
              checked: o,
              checkedIcon: a,
              defaultChecked: n,
              disabled: l,
              disableFocusRipple: i = !1,
              edge: d = !1,
              icon: p,
              id: u,
              inputProps: m,
              inputRef: f,
              name: y,
              onBlur: x,
              onChange: k,
              onFocus: w,
              readOnly: C,
              required: M = !1,
              tabIndex: R,
              type: P,
              value: S,
              slots: D = {},
              slotProps: W = {},
              ...T
            } = e,
            [F, L] = (0, s.A)({
              controlled: o,
              default: !!n,
              name: "SwitchBase",
              state: "checked",
            }),
            E = (0, c.A)(),
            j = (e) => {
              w && w(e), E && E.onFocus && E.onFocus(e);
            },
            B = (e) => {
              x && x(e), E && E.onBlur && E.onBlur(e);
            },
            N = (e) => {
              if (e.nativeEvent.defaultPrevented) return;
              let t = e.target.checked;
              L(t), k && k(e, t);
            },
            I = l;
          E && void 0 === I && (I = E.disabled);
          let O = "checkbox" === P || "radio" === P,
            X = {
              ...e,
              checked: F,
              disabled: I,
              disableFocusRipple: i,
              edge: d,
            },
            z = b(X),
            H = { slots: D, slotProps: { input: m, ...W } },
            [V, Y] = (0, v.A)("root", {
              ref: t,
              elementType: A,
              className: z.root,
              shouldForwardComponentProp: !0,
              externalForwardedProps: { ...H, component: "span", ...T },
              getSlotProps: (e) => ({
                ...e,
                onFocus: (t) => {
                  var r;
                  null === (r = e.onFocus) || void 0 === r || r.call(e, t),
                    j(t);
                },
                onBlur: (t) => {
                  var r;
                  null === (r = e.onBlur) || void 0 === r || r.call(e, t), B(t);
                },
              }),
              ownerState: X,
              additionalProps: {
                centerRipple: !0,
                focusRipple: !i,
                disabled: I,
                role: void 0,
                tabIndex: null,
              },
            }),
            [q, _] = (0, v.A)("input", {
              ref: f,
              elementType: h,
              className: z.input,
              externalForwardedProps: H,
              getSlotProps: (e) => ({
                onChange: (t) => {
                  var r;
                  null === (r = e.onChange) || void 0 === r || r.call(e, t),
                    N(t);
                },
              }),
              ownerState: X,
              additionalProps: {
                autoFocus: r,
                checked: o,
                defaultChecked: n,
                disabled: I,
                id: O ? u : void 0,
                name: y,
                readOnly: C,
                required: M,
                tabIndex: R,
                type: P,
                ...("checkbox" === P && void 0 === S ? {} : { value: S }),
              },
            });
          return (0, g.jsxs)(V, {
            ...Y,
            children: [(0, g.jsx)(q, { ..._ }), F ? a : p],
          });
        });
    },
    35656: (e, t, r) => {
      r.d(t, { A: () => k });
      var o = r(14232),
        a = r(69241),
        n = r(4697),
        l = r(74073),
        i = r(54773),
        s = r(82987),
        c = r(52196),
        d = r(77018),
        p = r(80027),
        u = r(47951),
        m = r(45879);
      function v(e) {
        return (0, m.Ay)("MuiFormControlLabel", e);
      }
      let g = (0, u.A)("MuiFormControlLabel", [
        "root",
        "labelPlacementStart",
        "labelPlacementTop",
        "labelPlacementBottom",
        "disabled",
        "label",
        "error",
        "required",
        "asterisk",
      ]);
      var b = r(27367),
        A = r(67360),
        h = r(37876);
      let f = (e) => {
          let {
              classes: t,
              disabled: r,
              labelPlacement: o,
              error: a,
              required: l,
            } = e,
            i = {
              root: [
                "root",
                r && "disabled",
                "labelPlacement".concat((0, p.A)(o)),
                a && "error",
                l && "required",
              ],
              label: ["label", r && "disabled"],
              asterisk: ["asterisk", a && "error"],
            };
          return (0, n.A)(i, v, t);
        },
        y = (0, i.Ay)("label", {
          name: "MuiFormControlLabel",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              { ["& .".concat(g.label)]: t.label },
              t.root,
              t["labelPlacement".concat((0, p.A)(r.labelPlacement))],
            ];
          },
        })(
          (0, s.A)((e) => {
            let { theme: t } = e;
            return {
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
              verticalAlign: "middle",
              WebkitTapHighlightColor: "transparent",
              marginLeft: -11,
              marginRight: 16,
              ["&.".concat(g.disabled)]: { cursor: "default" },
              ["& .".concat(g.label)]: {
                ["&.".concat(g.disabled)]: {
                  color: (t.vars || t).palette.text.disabled,
                },
              },
              variants: [
                {
                  props: { labelPlacement: "start" },
                  style: { flexDirection: "row-reverse", marginRight: -11 },
                },
                {
                  props: { labelPlacement: "top" },
                  style: { flexDirection: "column-reverse" },
                },
                {
                  props: { labelPlacement: "bottom" },
                  style: { flexDirection: "column" },
                },
                {
                  props: (e) => {
                    let { labelPlacement: t } = e;
                    return "start" === t || "top" === t || "bottom" === t;
                  },
                  style: { marginLeft: 16 },
                },
              ],
            };
          })
        ),
        x = (0, i.Ay)("span", {
          name: "MuiFormControlLabel",
          slot: "Asterisk",
          overridesResolver: (e, t) => t.asterisk,
        })(
          (0, s.A)((e) => {
            let { theme: t } = e;
            return {
              ["&.".concat(g.error)]: {
                color: (t.vars || t).palette.error.main,
              },
            };
          })
        ),
        k = o.forwardRef(function (e, t) {
          var r;
          let n = (0, c.b)({ props: e, name: "MuiFormControlLabel" }),
            {
              checked: i,
              className: s,
              componentsProps: p = {},
              control: u,
              disabled: m,
              disableTypography: v,
              inputRef: g,
              label: k,
              labelPlacement: w = "end",
              name: C,
              onChange: M,
              required: R,
              slots: P = {},
              slotProps: S = {},
              value: D,
              ...W
            } = n,
            T = (0, l.A)(),
            F =
              null !== (r = null != m ? m : u.props.disabled) && void 0 !== r
                ? r
                : null == T
                  ? void 0
                  : T.disabled,
            L = null != R ? R : u.props.required,
            E = { disabled: F, required: L };
          ["checked", "name", "onChange", "value", "inputRef"].forEach((e) => {
            void 0 === u.props[e] && void 0 !== n[e] && (E[e] = n[e]);
          });
          let j = (0, b.A)({ props: n, muiFormControl: T, states: ["error"] }),
            B = {
              ...n,
              disabled: F,
              labelPlacement: w,
              required: L,
              error: j.error,
            },
            N = f(B),
            I = { slots: P, slotProps: { ...p, ...S } },
            [O, X] = (0, A.A)("typography", {
              elementType: d.A,
              externalForwardedProps: I,
              ownerState: B,
            }),
            z = k;
          return (
            null == z ||
              z.type === d.A ||
              v ||
              (z = (0, h.jsx)(O, {
                component: "span",
                ...X,
                className: (0, a.A)(N.label, null == X ? void 0 : X.className),
                children: z,
              })),
            (0, h.jsxs)(y, {
              className: (0, a.A)(N.root, s),
              ownerState: B,
              ref: t,
              ...W,
              children: [
                o.cloneElement(u, E),
                L
                  ? (0, h.jsxs)("div", {
                      children: [
                        z,
                        (0, h.jsxs)(x, {
                          ownerState: B,
                          "aria-hidden": !0,
                          className: N.asterisk,
                          children: [" ", "*"],
                        }),
                      ],
                    })
                  : z,
              ],
            })
          );
        });
    },
    47866: (e, t, r) => {
      r.d(t, { A: () => v });
      var o = r(14232),
        a = r(69241),
        n = r(4697),
        l = r(77018),
        i = r(54773),
        s = r(52196),
        c = r(12526),
        d = r(199),
        p = r(37876);
      let u = (e) => {
          let { classes: t } = e;
          return (0, n.A)({ root: ["root"] }, c.t, t);
        },
        m = (0, i.Ay)(l.A, {
          name: "MuiDialogTitle",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })({ padding: "16px 24px", flex: "0 0 auto" }),
        v = o.forwardRef(function (e, t) {
          let r = (0, s.b)({ props: e, name: "MuiDialogTitle" }),
            { className: n, id: l, ...i } = r,
            c = u(r),
            { titleId: v = l } = o.useContext(d.A);
          return (0, p.jsx)(m, {
            component: "h2",
            className: (0, a.A)(c.root, n),
            ownerState: r,
            ref: t,
            variant: "h6",
            id: null != l ? l : v,
            ...i,
          });
        });
    },
    58862: (e, t, r) => {
      r.d(t, { x: () => c });
      var o = r(14232),
        a = r(61637),
        n = r(7061),
        l = r(44471),
        i = r(43165);
      function s(e) {
        return e.substring(2).toLowerCase();
      }
      function c(e) {
        let {
            children: t,
            disableReactTree: r = !1,
            mouseEvent: c = "onClick",
            onClickAway: d,
            touchEvent: p = "onTouchEnd",
          } = e,
          u = o.useRef(!1),
          m = o.useRef(null),
          v = o.useRef(!1),
          g = o.useRef(!1);
        o.useEffect(
          () => (
            setTimeout(() => {
              v.current = !0;
            }, 0),
            () => {
              v.current = !1;
            }
          ),
          []
        );
        let b = (0, a.A)((0, i.A)(t), m),
          A = (0, n.A)((e) => {
            let t;
            let o = g.current;
            g.current = !1;
            let a = (0, l.A)(m.current);
            if (
              v.current &&
              m.current &&
              (!("clientX" in e) ||
                (!(a.documentElement.clientWidth < e.clientX) &&
                  !(a.documentElement.clientHeight < e.clientY)))
            ) {
              if (u.current) {
                u.current = !1;
                return;
              }
              (e.composedPath
                ? e.composedPath().includes(m.current)
                : !a.documentElement.contains(e.target) ||
                  m.current.contains(e.target)) ||
                (!r && o) ||
                d(e);
            }
          }),
          h = (e) => (r) => {
            g.current = !0;
            let o = t.props[e];
            o && o(r);
          },
          f = { ref: b };
        return (
          !1 !== p && (f[p] = h(p)),
          o.useEffect(() => {
            if (!1 !== p) {
              let e = s(p),
                t = (0, l.A)(m.current),
                r = () => {
                  u.current = !0;
                };
              return (
                t.addEventListener(e, A),
                t.addEventListener("touchmove", r),
                () => {
                  t.removeEventListener(e, A),
                    t.removeEventListener("touchmove", r);
                }
              );
            }
          }, [A, p]),
          !1 !== c && (f[c] = h(c)),
          o.useEffect(() => {
            if (!1 !== c) {
              let e = s(c),
                t = (0, l.A)(m.current);
              return (
                t.addEventListener(e, A),
                () => {
                  t.removeEventListener(e, A);
                }
              );
            }
          }, [A, c]),
          o.cloneElement(t, f)
        );
      }
    },
    78523: (e, t, r) => {
      r.d(t, { A: () => v });
      var o = r(14232),
        a = r(69241),
        n = r(4697),
        l = r(54773),
        i = r(52196),
        s = r(47951),
        c = r(45879);
      function d(e) {
        return (0, c.Ay)("MuiDialogActions", e);
      }
      (0, s.A)("MuiDialogActions", ["root", "spacing"]);
      var p = r(37876);
      let u = (e) => {
          let { classes: t, disableSpacing: r } = e;
          return (0, n.A)({ root: ["root", !r && "spacing"] }, d, t);
        },
        m = (0, l.Ay)("div", {
          name: "MuiDialogActions",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [t.root, !r.disableSpacing && t.spacing];
          },
        })({
          display: "flex",
          alignItems: "center",
          padding: 8,
          justifyContent: "flex-end",
          flex: "0 0 auto",
          variants: [
            {
              props: (e) => {
                let { ownerState: t } = e;
                return !t.disableSpacing;
              },
              style: { "& > :not(style) ~ :not(style)": { marginLeft: 8 } },
            },
          ],
        }),
        v = o.forwardRef(function (e, t) {
          let r = (0, i.b)({ props: e, name: "MuiDialogActions" }),
            { className: o, disableSpacing: n = !1, ...l } = r,
            s = { ...r, disableSpacing: n },
            c = u(s);
          return (0, p.jsx)(m, {
            className: (0, a.A)(c.root, o),
            ownerState: s,
            ref: t,
            ...l,
          });
        });
    },
    78630: (e, t, r) => {
      r.d(t, { A: () => l, K: () => n });
      var o = r(47951),
        a = r(45879);
      function n(e) {
        return (0, a.Ay)("MuiDivider", e);
      }
      let l = (0, o.A)("MuiDivider", [
        "root",
        "absolute",
        "fullWidth",
        "inset",
        "middle",
        "flexItem",
        "light",
        "vertical",
        "withChildren",
        "withChildrenVertical",
        "textAlignRight",
        "textAlignLeft",
        "wrapper",
        "wrapperVertical",
      ]);
    },
    84147: (e, t, r) => {
      r.d(t, { A: () => S });
      var o = r(14232),
        a = r(69241),
        n = r(4697),
        l = r(53855),
        i = r(80027),
        s = r(40053),
        c = r(36540),
        d = r(11951),
        p = r(47951),
        u = r(45879);
      function m(e) {
        return (0, u.Ay)("MuiDialog", e);
      }
      let v = (0, p.A)("MuiDialog", [
        "root",
        "scrollPaper",
        "scrollBody",
        "container",
        "paper",
        "paperScrollPaper",
        "paperScrollBody",
        "paperWidthFalse",
        "paperWidthXs",
        "paperWidthSm",
        "paperWidthMd",
        "paperWidthLg",
        "paperWidthXl",
        "paperFullWidth",
        "paperFullScreen",
      ]);
      var g = r(199),
        b = r(30929),
        A = r(54773),
        h = r(30566),
        f = r(82987),
        y = r(52196),
        x = r(67360),
        k = r(37876);
      let w = (0, A.Ay)(b.A, {
          name: "MuiDialog",
          slot: "Backdrop",
          overrides: (e, t) => t.backdrop,
        })({ zIndex: -1 }),
        C = (e) => {
          let {
              classes: t,
              scroll: r,
              maxWidth: o,
              fullWidth: a,
              fullScreen: l,
            } = e,
            s = {
              root: ["root"],
              container: ["container", "scroll".concat((0, i.A)(r))],
              paper: [
                "paper",
                "paperScroll".concat((0, i.A)(r)),
                "paperWidth".concat((0, i.A)(String(o))),
                a && "paperFullWidth",
                l && "paperFullScreen",
              ],
            };
          return (0, n.A)(s, m, t);
        },
        M = (0, A.Ay)(s.A, {
          name: "MuiDialog",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })({ "@media print": { position: "absolute !important" } }),
        R = (0, A.Ay)("div", {
          name: "MuiDialog",
          slot: "Container",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [t.container, t["scroll".concat((0, i.A)(r.scroll))]];
          },
        })({
          height: "100%",
          "@media print": { height: "auto" },
          outline: 0,
          variants: [
            {
              props: { scroll: "paper" },
              style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            },
            {
              props: { scroll: "body" },
              style: {
                overflowY: "auto",
                overflowX: "hidden",
                textAlign: "center",
                "&::after": {
                  content: '""',
                  display: "inline-block",
                  verticalAlign: "middle",
                  height: "100%",
                  width: "0",
                },
              },
            },
          ],
        }),
        P = (0, A.Ay)(d.A, {
          name: "MuiDialog",
          slot: "Paper",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.paper,
              t["scrollPaper".concat((0, i.A)(r.scroll))],
              t["paperWidth".concat((0, i.A)(String(r.maxWidth)))],
              r.fullWidth && t.paperFullWidth,
              r.fullScreen && t.paperFullScreen,
            ];
          },
        })(
          (0, f.A)((e) => {
            let { theme: t } = e;
            return {
              margin: 32,
              position: "relative",
              overflowY: "auto",
              "@media print": { overflowY: "visible", boxShadow: "none" },
              variants: [
                {
                  props: { scroll: "paper" },
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    maxHeight: "calc(100% - 64px)",
                  },
                },
                {
                  props: { scroll: "body" },
                  style: {
                    display: "inline-block",
                    verticalAlign: "middle",
                    textAlign: "initial",
                  },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return !t.maxWidth;
                  },
                  style: { maxWidth: "calc(100% - 64px)" },
                },
                {
                  props: { maxWidth: "xs" },
                  style: {
                    maxWidth:
                      "px" === t.breakpoints.unit
                        ? Math.max(t.breakpoints.values.xs, 444)
                        : "max("
                            .concat(t.breakpoints.values.xs)
                            .concat(t.breakpoints.unit, ", 444px)"),
                    ["&.".concat(v.paperScrollBody)]: {
                      [t.breakpoints.down(
                        Math.max(t.breakpoints.values.xs, 444) + 64
                      )]: { maxWidth: "calc(100% - 64px)" },
                    },
                  },
                },
                ...Object.keys(t.breakpoints.values)
                  .filter((e) => "xs" !== e)
                  .map((e) => ({
                    props: { maxWidth: e },
                    style: {
                      maxWidth: ""
                        .concat(t.breakpoints.values[e])
                        .concat(t.breakpoints.unit),
                      ["&.".concat(v.paperScrollBody)]: {
                        [t.breakpoints.down(t.breakpoints.values[e] + 64)]: {
                          maxWidth: "calc(100% - 64px)",
                        },
                      },
                    },
                  })),
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.fullWidth;
                  },
                  style: { width: "calc(100% - 64px)" },
                },
                {
                  props: (e) => {
                    let { ownerState: t } = e;
                    return t.fullScreen;
                  },
                  style: {
                    margin: 0,
                    width: "100%",
                    maxWidth: "100%",
                    height: "100%",
                    maxHeight: "none",
                    borderRadius: 0,
                    ["&.".concat(v.paperScrollBody)]: {
                      margin: 0,
                      maxWidth: "100%",
                    },
                  },
                },
              ],
            };
          })
        ),
        S = o.forwardRef(function (e, t) {
          let r = (0, y.b)({ props: e, name: "MuiDialog" }),
            n = (0, h.A)(),
            i = {
              enter: n.transitions.duration.enteringScreen,
              exit: n.transitions.duration.leavingScreen,
            },
            {
              "aria-describedby": s,
              "aria-labelledby": p,
              "aria-modal": u = !0,
              BackdropComponent: m,
              BackdropProps: v,
              children: b,
              className: A,
              disableEscapeKeyDown: f = !1,
              fullScreen: S = !1,
              fullWidth: D = !1,
              maxWidth: W = "sm",
              onBackdropClick: T,
              onClick: F,
              onClose: L,
              open: E,
              PaperComponent: j = d.A,
              PaperProps: B = {},
              scroll: N = "paper",
              slots: I = {},
              slotProps: O = {},
              TransitionComponent: X = c.A,
              transitionDuration: z = i,
              TransitionProps: H,
              ...V
            } = r,
            Y = {
              ...r,
              disableEscapeKeyDown: f,
              fullScreen: S,
              fullWidth: D,
              maxWidth: W,
              scroll: N,
            },
            q = C(Y),
            _ = o.useRef(),
            G = (0, l.A)(p),
            K = o.useMemo(() => ({ titleId: G }), [G]),
            J = {
              slots: { transition: X, ...I },
              slotProps: { transition: H, paper: B, backdrop: v, ...O },
            },
            [Q, U] = (0, x.A)("root", {
              elementType: M,
              shouldForwardComponentProp: !0,
              externalForwardedProps: J,
              ownerState: Y,
              className: (0, a.A)(q.root, A),
              ref: t,
            }),
            [Z, $] = (0, x.A)("backdrop", {
              elementType: w,
              shouldForwardComponentProp: !0,
              externalForwardedProps: J,
              ownerState: Y,
            }),
            [ee, et] = (0, x.A)("paper", {
              elementType: P,
              shouldForwardComponentProp: !0,
              externalForwardedProps: J,
              ownerState: Y,
              className: (0, a.A)(q.paper, B.className),
            }),
            [er, eo] = (0, x.A)("container", {
              elementType: R,
              externalForwardedProps: J,
              ownerState: Y,
              className: (0, a.A)(q.container),
            }),
            [ea, en] = (0, x.A)("transition", {
              elementType: c.A,
              externalForwardedProps: J,
              ownerState: Y,
              additionalProps: {
                appear: !0,
                in: E,
                timeout: z,
                role: "presentation",
              },
            });
          return (0, k.jsx)(Q, {
            closeAfterTransition: !0,
            slots: { backdrop: Z },
            slotProps: { backdrop: { transitionDuration: z, as: m, ...$ } },
            disableEscapeKeyDown: f,
            onClose: L,
            open: E,
            onClick: (e) => {
              F && F(e),
                _.current &&
                  ((_.current = null), T && T(e), L && L(e, "backdropClick"));
            },
            ...U,
            ...V,
            children: (0, k.jsx)(ea, {
              ...en,
              children: (0, k.jsx)(er, {
                onMouseDown: (e) => {
                  _.current = e.target === e.currentTarget;
                },
                ...eo,
                children: (0, k.jsx)(ee, {
                  as: j,
                  elevation: 24,
                  role: "dialog",
                  "aria-describedby": s,
                  "aria-labelledby": G,
                  "aria-modal": u,
                  ...et,
                  children: (0, k.jsx)(g.A.Provider, { value: K, children: b }),
                }),
              }),
            }),
          });
        });
    },
  },
]);
