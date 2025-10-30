(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [588],
  {
    2780: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, { default: () => I });
      var n = i(37876),
        a = i(14232),
        r = i(69241),
        l = i(45879),
        o = i(4697),
        s = i(93725),
        d = i(2407),
        c = i(20035);
      let u = (0, i(89856).A)(),
        m = (0, c.A)("div", {
          name: "MuiContainer",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: i } = e;
            return [
              t.root,
              t[`maxWidth${(0, s.A)(String(i.maxWidth))}`],
              i.fixed && t.fixed,
              i.disableGutters && t.disableGutters,
            ];
          },
        }),
        h = (e) =>
          (0, d.A)({ props: e, name: "MuiContainer", defaultTheme: u }),
        v = (e, t) => {
          let { classes: i, fixed: n, disableGutters: a, maxWidth: r } = e,
            d = {
              root: [
                "root",
                r && `maxWidth${(0, s.A)(String(r))}`,
                n && "fixed",
                a && "disableGutters",
              ],
            };
          return (0, o.A)(d, (e) => (0, l.Ay)(t, e), i);
        };
      var x = i(80027),
        p = i(54773),
        f = i(52196);
      let g = (function (e = {}) {
        let {
            createStyledComponent: t = m,
            useThemeProps: i = h,
            componentName: l = "MuiContainer",
          } = e,
          o = t(
            ({ theme: e, ownerState: t }) => ({
              width: "100%",
              marginLeft: "auto",
              boxSizing: "border-box",
              marginRight: "auto",
              ...(!t.disableGutters && {
                paddingLeft: e.spacing(2),
                paddingRight: e.spacing(2),
                [e.breakpoints.up("sm")]: {
                  paddingLeft: e.spacing(3),
                  paddingRight: e.spacing(3),
                },
              }),
            }),
            ({ theme: e, ownerState: t }) =>
              t.fixed &&
              Object.keys(e.breakpoints.values).reduce((t, i) => {
                let n = e.breakpoints.values[i];
                return (
                  0 !== n &&
                    (t[e.breakpoints.up(i)] = {
                      maxWidth: `${n}${e.breakpoints.unit}`,
                    }),
                  t
                );
              }, {}),
            ({ theme: e, ownerState: t }) => ({
              ...("xs" === t.maxWidth && {
                [e.breakpoints.up("xs")]: {
                  maxWidth: Math.max(e.breakpoints.values.xs, 444),
                },
              }),
              ...(t.maxWidth &&
                "xs" !== t.maxWidth && {
                  [e.breakpoints.up(t.maxWidth)]: {
                    maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
                  },
                }),
            })
          );
        return a.forwardRef(function (e, t) {
          let a = i(e),
            {
              className: s,
              component: d = "div",
              disableGutters: c = !1,
              fixed: u = !1,
              maxWidth: m = "lg",
              classes: h,
              ...x
            } = a,
            p = {
              ...a,
              component: d,
              disableGutters: c,
              fixed: u,
              maxWidth: m,
            },
            f = v(p, l);
          return (0, n.jsx)(o, {
            as: d,
            ownerState: p,
            className: (0, r.A)(f.root, s),
            ref: t,
            ...x,
          });
        });
      })({
        createStyledComponent: (0, p.Ay)("div", {
          name: "MuiContainer",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: i } = e;
            return [
              t.root,
              t["maxWidth".concat((0, x.A)(String(i.maxWidth)))],
              i.fixed && t.fixed,
              i.disableGutters && t.disableGutters,
            ];
          },
        }),
        useThemeProps: (e) => (0, f.b)({ props: e, name: "MuiContainer" }),
      });
      var k = i(11951),
        b = i(77018),
        y = i(11494),
        j = i(24422),
        w = i(31084),
        C = i(24705),
        A = i(97121),
        W = i(82831),
        M = i(52547),
        K = i(85278),
        S = i(19271),
        B = i(45175),
        _ = i(34428),
        N = i(89243),
        R = i(89099);
      let U = [
        S.eK.Splendid,
        S.eK.Perfect,
        S.eK.Best,
        S.eK.Excellent,
        S.eK.Okay,
        S.eK.Opening,
        S.eK.Inaccuracy,
        S.eK.Mistake,
        S.eK.Blunder,
      ];
      function I() {
        let { white: e, black: t } = (0, W.K)(M._X),
          i = (0, K.md)(M.Mx),
          r = (0, R.useRouter)(),
          l = (0, a.useMemo)(() => (i ? i.accuracy.white : 0), [i]),
          o = (0, a.useMemo)(() => (i ? i.accuracy.black : 0), [i]);
        return (null == i ? void 0 : i.positions.length)
          ? (0, n.jsxs)(g, {
              maxWidth: "sm",
              children: [
                (0, n.jsx)(A.s, { title: "Game Review" }),
                (0, n.jsxs)(k.A, {
                  elevation: 3,
                  sx: {
                    my: 4,
                    p: 2,
                    backgroundColor: "#5C3B28",
                    color: "white",
                  },
                  children: [
                    (0, n.jsxs)(y.A, {
                      sx: { display: "flex", alignItems: "center", mb: 2 },
                      children: [
                        (0, n.jsx)(j.A, {
                          src: "/icons/best.png",
                          sx: { width: 56, height: 56, mr: 2 },
                        }),
                        (0, n.jsx)(y.A, {
                          sx: {
                            p: 1.5,
                            bgcolor: "rgba(255, 255, 255, 0.9)",
                            borderRadius: "10px",
                            color: "black",
                          },
                          children: (0, n.jsx)(b.A, {
                            variant: "body1",
                            children: "Well done pouncing on that free piece.",
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(N.A, {}),
                    (0, n.jsxs)(w.A, {
                      container: !0,
                      alignItems: "center",
                      justifyContent: "space-between",
                      sx: { my: 2 },
                      children: [
                        (0, n.jsxs)(w.A, {
                          children: [
                            (0, n.jsx)(b.A, {
                              variant: "h6",
                              children: e.name,
                            }),
                            (0, n.jsx)(j.A, {
                              src: "/piece/merida/wK.svg",
                              variant: "square",
                              sx: {
                                width: 80,
                                height: 80,
                                border: "2px solid green",
                              },
                            }),
                          ],
                        }),
                        (0, n.jsxs)(w.A, {
                          children: [
                            (0, n.jsx)(b.A, {
                              variant: "h6",
                              align: "right",
                              children: t.name,
                            }),
                            (0, n.jsx)(j.A, {
                              src: "/piece/merida/bK.svg",
                              variant: "square",
                              sx: { width: 80, height: 80 },
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, n.jsx)(_.A, {
                      title: "Accuracy",
                      whiteValue: l,
                      blackValue: o,
                    }),
                    (0, n.jsx)(y.A, {
                      my: 2,
                      children: U.map((e) =>
                        (0, n.jsx)(B.A, { classification: e }, e)
                      ),
                    }),
                    (0, n.jsx)(y.A, {
                      sx: { display: "flex", justifyContent: "center", mt: 4 },
                      children: (0, n.jsx)(C.A, {
                        variant: "contained",
                        size: "large",
                        onClick: () => {
                          r.push("/analysis");
                        },
                        children: "Continue Review",
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, n.jsxs)(g, {
              maxWidth: "sm",
              children: [
                (0, n.jsx)(A.s, { title: "Game Review" }),
                (0, n.jsx)(k.A, {
                  elevation: 3,
                  sx: {
                    my: 4,
                    p: 2,
                    backgroundColor: "#5C3B28",
                    color: "white",
                  },
                  children: (0, n.jsx)(b.A, {
                    children:
                      "No game evaluation found. Please analyze a game first.",
                  }),
                }),
              ],
            });
      }
    },
    34428: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => l });
      var n = i(37876),
        a = i(9227),
        r = i(77018);
      function l(e) {
        let { title: t, whiteValue: i, blackValue: l } = e;
        return (0, n.jsxs)(a.A, {
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          columnGap: { xs: "8vw", md: 10 },
          children: [
            (0, n.jsx)(o, { value: i, color: "white" }),
            (0, n.jsx)(r.A, {
              align: "center",
              fontSize: "0.8em",
              noWrap: !0,
              children: t,
            }),
            (0, n.jsx)(o, { value: l, color: "black" }),
          ],
        });
      }
      let o = (e) => {
        let { value: t, color: i } = e;
        return (0, n.jsx)(r.A, {
          align: "center",
          sx: { backgroundColor: i, color: "white" === i ? "black" : "white" },
          borderRadius: "5px",
          lineHeight: "1em",
          fontSize: "0.9em",
          padding: 0.8,
          fontWeight: "500",
          border: "1px solid #424242",
          noWrap: !0,
          children: t,
        });
      };
    },
    38716: (e, t, i) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/review",
        function () {
          return i(2780);
        },
      ]);
    },
    45175: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => x });
      var n = i(37876),
        a = i(19271),
        r = i(31084),
        l = i(77018),
        o = i(85278),
        s = i(52547),
        d = i(14232),
        c = i(54587),
        u = i.n(c),
        m = i(658),
        h = i(65897),
        v = i(92094);
      function x(e) {
        let { classification: t } = e,
          i = (0, o.md)(s.Mx),
          c = (0, o.md)(s.Sd),
          x = (0, o.md)(s._X),
          { goToMove: p } = (0, h.j)(s.Sd),
          f = (0, d.useMemo)(
            () =>
              i
                ? i.positions.filter(
                    (e, i) => i % 2 != 0 && e.moveClassification === t
                  ).length
                : 0,
            [i, t]
          ),
          g = (0, d.useMemo)(
            () =>
              i
                ? i.positions.filter(
                    (e, i) => i % 2 == 0 && e.moveClassification === t
                  ).length
                : 0,
            [i, t]
          ),
          k = (e) => {
            if (!i || (e === a.Q1.White && !f) || (e === a.Q1.Black && !g))
              return;
            let n = (t) =>
                (t % 2 != 0 && e === a.Q1.White) ||
                (t % 2 == 0 && e === a.Q1.Black),
              r = c.history().length,
              l = i.positions.findIndex(
                (e, i) => n(i) && e.moveClassification === t && i > r
              );
            if (l > 0) p(l, x);
            else {
              let e = i.positions.findIndex(
                (e, i) => n(i) && e.moveClassification === t
              );
              e > 0 && e !== r && p(e, x);
            }
          };
        return (0, n.jsxs)(r.A, {
          container: !0,
          justifyContent: "space-evenly",
          alignItems: "center",
          wrap: "nowrap",
          color: v.k_[t],
          size: 12,
          children: [
            (0, n.jsx)(r.A, {
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              width: "3rem",
              style: { cursor: f ? "pointer" : "default" },
              onClick: () => k(a.Q1.White),
              fontSize: "0.9rem",
              children: f,
            }),
            (0, n.jsxs)(r.A, {
              container: !0,
              justifyContent: "start",
              alignItems: "center",
              width: "10rem",
              gap: 1,
              wrap: "nowrap",
              children: [
                (0, n.jsx)(u(), {
                  src: "/icons/".concat(t, ".png"),
                  alt: "move-icon",
                  width: 18,
                  height: 18,
                  style: { maxWidth: "3.5vw", maxHeight: "3.5vw" },
                }),
                (0, n.jsx)(l.A, {
                  align: "center",
                  fontSize: "0.9rem",
                  children: (0, m.ZH)(t),
                }),
              ],
            }),
            (0, n.jsx)(r.A, {
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              width: "3rem",
              style: { cursor: g ? "pointer" : "default" },
              onClick: () => k(a.Q1.Black),
              fontSize: "0.9rem",
              children: g,
            }),
          ],
        });
      }
    },
    52547: (e, t, i) => {
      "use strict";
      i.d(t, {
        B2: () => p,
        FR: () => f,
        Ju: () => x,
        MA: () => m,
        Mx: () => s,
        Sd: () => c,
        Sp: () => b,
        XL: () => h,
        _X: () => d,
        a2: () => v,
        eU: () => u,
        pN: () => g,
        xg: () => k,
      });
      var n = i(92094),
        a = i(92634),
        r = i(22277),
        l = i(99542),
        o = i(42200);
      let s = (0, l.eU)(void 0),
        d = (0, l.eU)(new r.d$()),
        c = (0, l.eU)(new r.d$()),
        u = (0, l.eU)({}),
        m = (0, l.eU)(!0),
        h = (0, l.eU)(!0),
        v = (0, l.eU)(!0),
        x = (0, l.eU)(n.T3),
        p = (0, l.eU)(14),
        f = (0, l.eU)(3),
        g = (0, o.tG)("engineWorkersNb", (0, a.PN)()),
        k = (0, l.eU)(0),
        b = (0, l.eU)({});
    },
    65897: (e, t, i) => {
      "use strict";
      i.d(t, { j: () => p });
      var n = i(24307);
      let a = null,
        r = null,
        l = new Map(),
        o = {
          move: "/sounds/move.mp3",
          capture: "/sounds/capture.mp3",
          illegalMove: "/sounds/error.mp3",
        },
        s = async (e) => {
          r && clearTimeout(r),
            (r = setTimeout(async () => {
              a || (a = new AudioContext()),
                "suspended" === a.state && (await a.resume());
              let t = l.get(o[e]);
              if (!t) {
                let i = await fetch(o[e]),
                  n = await a.decodeAudioData(await i.arrayBuffer());
                (t = n), l.set(o[e], n);
              }
              let i = a.createBufferSource();
              i.buffer = t;
              let n = a.createGain();
              (n.gain.value = 0.3),
                i.connect(n),
                n.connect(a.destination),
                i.start();
            }, 1));
        },
        d = () => s("capture"),
        c = () => s("illegalMove"),
        u = () => s("move"),
        m = (e) => (e ? (e.captured ? d() : u()) : c());
      var h = i(22277),
        v = i(85278),
        x = i(14232);
      let p = (e) => {
        let [t, i] = (0, v.fp)(e),
          a = (0, x.useCallback)(
            (e) => {
              let t = new h.d$();
              t.loadPgn(e), i(t);
            },
            [i]
          ),
          r = (0, x.useCallback)(
            (e) => {
              let t = new h.d$(null == e ? void 0 : e.fen);
              (null == e ? void 0 : e.noHeaders) || (0, n.nt)(t, e), i(t);
            },
            [i]
          ),
          l = (0, x.useCallback)(() => {
            let e = new h.d$();
            if (0 === t.history().length) {
              var i, n;
              let a = t.pgn().split("]");
              if (
                ["1-0", "0-1", "1/2-1/2", "*"].includes(
                  null !==
                    (n =
                      null === (i = a.at(-1)) || void 0 === i
                        ? void 0
                        : i.trim()) && void 0 !== n
                    ? n
                    : ""
                )
              )
                return e.loadPgn(a.slice(0, -1).join("]") + "]"), e;
            }
            return e.loadPgn(t.pgn()), e;
          }, [t]),
          o = (0, x.useCallback)(
            (e) => {
              let t = e ? (0, n.w0)(e) : l();
              t.load(t.getHeaders().FEN || h.OS, { preserveHeaders: !0 }), i(t);
            },
            [l, i]
          ),
          s = (0, x.useCallback)(
            (e) => {
              let t = l();
              try {
                let { comment: n, ...a } = e,
                  r = t.move(a);
                return n && t.setComment(n), i(t), m(r), r;
              } catch (e) {
                return c(), null;
              }
            },
            [l, i]
          ),
          d = (0, x.useCallback)(
            (e) => {
              let t = l(),
                n = null;
              for (let i of e) n = t.move(i);
              i(t), n && m(n);
            },
            [l, i]
          );
        return {
          setPgn: a,
          reset: r,
          playMove: s,
          undoMove: (0, x.useCallback)(() => {
            let e = l(),
              t = e.undo();
            t && m(t), i(e);
          }, [l, i]),
          goToMove: (0, x.useCallback)(
            (e, t) => {
              if (e < 0) return;
              let n = new h.d$();
              n.loadPgn(t.pgn());
              let a = t.history().length;
              if (e > a) return;
              let r = {};
              for (let t = a; t > e; t--) r = n.undo();
              i(n), m(r);
            },
            [i]
          ),
          resetToStartingPosition: o,
          addMoves: d,
        };
      };
    },
    82831: (e, t, i) => {
      "use strict";
      i.d(t, { K: () => o });
      var n = i(85278),
        a = i(27064),
        r = i(41615),
        l = i(3816);
      let o = (e) => {
          var t, i, r, l;
          let o = (0, n.md)(e),
            { gameFromUrl: d } = (0, a.R)(),
            c = o.getHeaders(),
            u = c.White && "?" !== c.White ? c.White : void 0,
            m = c.Black && "?" !== c.Black ? c.Black : void 0,
            h =
              (null == d
                ? void 0
                : null === (t = d.white) || void 0 === t
                  ? void 0
                  : t.name) ||
              u ||
              "White",
            v =
              (null == d
                ? void 0
                : null === (i = d.black) || void 0 === i
                  ? void 0
                  : i.name) ||
              m ||
              "Black",
            x =
              (null == d
                ? void 0
                : null === (r = d.white) || void 0 === r
                  ? void 0
                  : r.rating) ||
              Number(c.WhiteElo) ||
              void 0,
            p =
              (null == d
                ? void 0
                : null === (l = d.black) || void 0 === l
                  ? void 0
                  : l.rating) ||
              Number(c.BlackElo) ||
              void 0,
            f = ((null == d ? void 0 : d.site) || c.Site || "unknown")
              .toLowerCase()
              .includes("chess.com"),
            g = s(h, f && !!h && "White" !== h),
            k = s(v, f && !!v && "Black" !== v);
          return {
            white: { name: h, rating: x, avatarUrl: null != g ? g : void 0 },
            black: { name: v, rating: p, avatarUrl: null != k ? k : void 0 },
          };
        },
        s = (e, t) => {
          let { data: i } = (0, r.I)({
            queryKey: ["CCAvatar", e],
            enabled: t,
            queryFn: () => (0, l.e)(e),
            staleTime: 36e5,
            gcTime: 864e5,
          });
          return i;
        };
    },
    89243: (e, t, i) => {
      "use strict";
      i.d(t, { A: () => j });
      var n = i(37876),
        a = i(14232),
        r = i(31084),
        l = i(11494),
        o = i(85278),
        s = i(80252),
        d = i(57377),
        c = i(22333),
        u = i(24354),
        m = i(1874),
        h = i(56321),
        v = i(75271),
        x = i(52547),
        p = i(24307);
      function f(e) {
        let { active: t, payload: i } = e;
        if (!t || !(null == i ? void 0 : i.length)) return null;
        let a = i[0].payload;
        return (0, n.jsx)("div", {
          style: {
            backgroundColor: "#f0f0f0",
            padding: 5,
            color: "black",
            opacity: 0.9,
            border: "1px solid black",
            borderRadius: 3,
          },
          children: (0, p.l3)(a),
        });
      }
      var g = i(92094);
      function k(e) {
        let { cx: t, cy: i, r: a, payload: r } = e,
          l = (null == r ? void 0 : r.moveClassification)
            ? g.k_[r.moveClassification]
            : "grey";
        return (0, n.jsx)("circle", {
          cx: t,
          cy: i,
          r: a,
          stroke: l,
          strokeWidth: 5,
          fill: l,
          fillOpacity: 1,
        });
      }
      var b = i(19271),
        y = i(65897);
      function j(e) {
        var t;
        let i = (0, o.md)(x.Mx),
          p = (0, o.md)(x.eU),
          { goToMove: j } = (0, y.j)(x.Sd),
          C = (0, o.md)(x._X),
          A = (0, a.useMemo)(() => {
            var e;
            return null !== (e = null == i ? void 0 : i.positions.map(w)) &&
              void 0 !== e
              ? e
              : [];
          }, [i]),
          W = (0, a.useMemo)(() => {
            let e = A.filter((e) => e.moveClassification === b.eK.Best),
              t = Math.ceil(0.15 * e.length),
              i = e.map((e) => e.moveNb);
            for (let e = i.length - 1; e > 0; e--) {
              let t = Math.floor(Math.random() * (e + 1));
              [i[e], i[t]] = [i[t], i[e]];
            }
            return new Set(i.slice(0, t));
          }, [A]),
          M = (
            null === (t = p.eval) || void 0 === t
              ? void 0
              : t.moveClassification
          )
            ? g.k_[p.eval.moveClassification]
            : "grey",
          K = (0, a.useCallback)(
            (e) => {
              let t = e.payload,
                i = null == t ? void 0 : t.moveClassification;
              return i &&
                ([
                  b.eK.Splendid,
                  b.eK.Perfect,
                  b.eK.Blunder,
                  b.eK.Mistake,
                ].includes(i) ||
                  (i === b.eK.Best && W.has(t.moveNb)))
                ? (0, a.createElement)(k, { ...e, key: e.key, payload: t })
                : (0, n.jsx)("svg", {}, e.key);
            },
            [W]
          );
        return i
          ? (0, n.jsx)(r.A, {
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              minHeight: "min(10rem, 8vh)",
              height: { xs: "8rem", lg: "none" },
              maxHeight: "10rem",
              ...e,
              sx: e.hidden ? { display: "none" } : e.sx,
              size: 12,
              children: (0, n.jsx)(l.A, {
                height: "100%",
                width: { xs: "100%", lg: "90%" },
                sx: {
                  backgroundColor: "#2e2e2e",
                  borderRadius: "15px",
                  overflow: "hidden",
                },
                children: (0, n.jsx)(s.u, {
                  width: "100%",
                  height: "100%",
                  children: (0, n.jsxs)(d.Q, {
                    width: 500,
                    height: 400,
                    data: A,
                    margin: { top: 0, left: 0, right: 0, bottom: 0 },
                    onClick: (e) => {
                      var t, i;
                      let n =
                        null == e
                          ? void 0
                          : null === (i = e.activePayload) || void 0 === i
                            ? void 0
                            : null === (t = i[0]) || void 0 === t
                              ? void 0
                              : t.payload;
                      n && j(n.moveNb, C);
                    },
                    style: { cursor: "pointer" },
                    children: [
                      (0, n.jsx)(c.W, {
                        dataKey: "moveNb",
                        hide: !0,
                        stroke: "red",
                      }),
                      (0, n.jsx)(u.h, { domain: [0, 20], hide: !0 }),
                      (0, n.jsx)(m.m, {
                        content: (0, n.jsx)(f, {}),
                        isAnimationActive: !1,
                        cursor: {
                          stroke: "grey",
                          strokeWidth: 2,
                          strokeOpacity: 0.3,
                        },
                      }),
                      (0, n.jsx)(h.G, {
                        type: "monotone",
                        dataKey: "value",
                        stroke: "none",
                        fill: "#ffffff",
                        fillOpacity: 1,
                        dot: K,
                        activeDot: (0, n.jsx)(k, {}),
                        isAnimationActive: !1,
                      }),
                      (0, n.jsx)(v.e, {
                        y: 10,
                        stroke: "grey",
                        strokeWidth: 2,
                        strokeOpacity: 0.4,
                      }),
                      (0, n.jsx)(v.e, {
                        x: p.currentMoveIdx,
                        stroke: M,
                        strokeWidth: 4,
                        strokeOpacity: 0.6,
                      }),
                    ],
                  }),
                }),
              }),
            })
          : null;
      }
      let w = (e, t) => {
        let i = e.lines[0],
          n = {
            moveNb: t,
            value: 10,
            cp: i.cp,
            mate: i.mate,
            moveClassification: e.moveClassification,
          };
        return i.mate
          ? { ...n, value: 20 * (i.mate > 0) }
          : i.cp
            ? { ...n, value: Math.max(Math.min(i.cp / 100, 10), -10) + 10 }
            : n;
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [453, 927, 703, 636, 593, 792], () => t(38716)), (_N_E = e.O());
  },
]);
