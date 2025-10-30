"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [546],
  {
    88546: (e, t, n) => {
      n.d(t, { A: () => $ });
      var r = n(37876),
        l = n(24705),
        s = n(77018),
        o = n(14232),
        i = n(27064),
        a = n(24307),
        c = n(19271),
        d = n(84147),
        u = n(47866),
        m = n(3034),
        h = n(31084),
        x = n(88713),
        p = n(90405),
        g = n(35779),
        j = n(83290),
        y = n(6003),
        C = n(49516),
        f = n(46061),
        A = n(78523),
        b = n(80703),
        v = n(77935),
        w = n(98594);
      function k(e) {
        let { pgn: t, setPgn: n } = e;
        return (0, r.jsxs)(x.A, {
          fullWidth: !0,
          children: [
            (0, r.jsx)(v.A, {
              label: "Enter PGN here...",
              variant: "outlined",
              multiline: !0,
              value: t,
              onChange: (e) => n(e.target.value),
              rows: 8,
              sx: { mb: 2 },
            }),
            (0, r.jsxs)(l.A, {
              variant: "contained",
              component: "label",
              startIcon: (0, r.jsx)(w.In, { icon: "material-symbols:upload" }),
              children: [
                "Upload PGN File",
                (0, r.jsx)("input", {
                  type: "file",
                  hidden: !0,
                  accept: ".pgn",
                  onChange: (e) => {
                    var t;
                    let r =
                      null === (t = e.target.files) || void 0 === t
                        ? void 0
                        : t[0];
                    if (!r) return;
                    let l = new FileReader();
                    (l.onload = (e) => {
                      var t;
                      n(
                        null === (t = e.target) || void 0 === t
                          ? void 0
                          : t.result
                      );
                    }),
                      l.readAsText(r);
                  },
                }),
              ],
            }),
          ],
        });
      }
      var L = n(82851),
        I = n(3816),
        P = n(76635),
        S = n(7957),
        B = n(63009);
      function G(e, t) {
        let [n, r] = (0, o.useState)(e);
        return (
          (0, o.useEffect)(() => {
            if (e === n) return;
            if (!n) {
              r(e);
              return;
            }
            let l = setTimeout(() => {
              r(e);
            }, t);
            return () => {
              clearTimeout(l);
            };
          }, [e, t, n]),
          n
        );
      }
      var W = n(41615),
        N = n(30566),
        M = n(12572),
        T = n(93256),
        z = n(11494),
        E = n(22430),
        U = n(59017);
      function F(e) {
        let { timeControl: t } = e;
        return t
          ? (0, r.jsx)(E.A, {
              title: "Time Control",
              children: (0, r.jsx)(U.A, {
                icon: (0, r.jsx)(w.In, {
                  icon: "material-symbols:timer-outline",
                }),
                label: t,
                size: "small",
              }),
            })
          : null;
      }
      function R(e) {
        let { movesNb: t } = e;
        return t
          ? (0, r.jsx)(E.A, {
              title: "Number of Moves",
              sx: { overflow: "hidden" },
              children: (0, r.jsx)(U.A, {
                icon: (0, r.jsx)(w.In, { icon: "heroicons:hashtag-20-solid" }),
                label: "".concat(Math.ceil(t / 2), " moves"),
                size: "small",
              }),
            })
          : null;
      }
      function q(e) {
        let { date: t } = e;
        return t
          ? (0, r.jsx)(E.A, {
              title: "Date Played",
              children: (0, r.jsx)(U.A, {
                icon: (0, r.jsx)(w.In, {
                  icon: "material-symbols:calendar-today",
                }),
                label: t,
                size: "small",
              }),
            })
          : null;
      }
      function H(e) {
        let { result: t, perspectiveUserColor: n } = e,
          { label: l, color: s, bgColor: o } = _((0, N.A)(), n, t);
        return (0, r.jsx)(E.A, {
          title: l,
          children: (0, r.jsx)(U.A, {
            label: t,
            size: "small",
            sx: {
              color: s,
              backgroundColor: o,
              fontWeight: "600",
              minWidth: { sm: 40 },
              border: "1px solid ".concat(s, "20"),
              "& .MuiChip-icon": { color: s },
            },
          }),
        });
      }
      let _ = (e, t, n) =>
          ("1-0" === n && "white" === t) || ("0-1" === n && "black" === t)
            ? {
                label: "1-0" === n ? "White won" : "Black won",
                color: e.palette.success.main,
                bgColor: "".concat(e.palette.success.main, "1A"),
              }
            : ("1-0" === n && "black" === t) || ("0-1" === n && "white" === t)
              ? {
                  label: "1-0" === n ? "White won" : "Black won",
                  color: e.palette.error.main,
                  bgColor: "".concat(e.palette.error.main, "1A"),
                }
              : "1/2-1/2" === n
                ? {
                    label: "Draw",
                    color: e.palette.info.main,
                    bgColor: "".concat(e.palette.info.main, "1A"),
                  }
                : {
                    label: "Game in Progress",
                    color: e.palette.text.secondary,
                    bgColor: e.palette.action.hover,
                  },
        O = (e) => {
          let { game: t, onClick: n, perspectiveUserColor: l } = e,
            o = (0, N.A)(),
            {
              white: i,
              black: a,
              result: c,
              timeControl: d,
              date: u,
              movesNb: m,
            } = t,
            h = "1-0" === c,
            x = "0-1" === c;
          return (0, r.jsx)(M.Ay, {
            alignItems: "flex-start",
            sx: {
              borderRadius: 2,
              mb: 1.5,
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                backgroundColor: o.palette.action.hover,
                boxShadow: o.shadows[3],
              },
              border: "1px solid ".concat(o.palette.divider),
              cursor: "pointer",
            },
            onClick: n,
            children: (0, r.jsx)(T.A, {
              disableTypography: !0,
              primary: (0, r.jsxs)(z.A, {
                sx: {
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1.5 },
                  mb: 1,
                },
                children: [
                  (0, r.jsxs)(s.A, {
                    variant: "subtitle1",
                    component: "span",
                    noWrap: !0,
                    sx: {
                      fontWeight: "700",
                      color: h
                        ? o.palette.success.main
                        : o.palette.text.primary,
                      opacity: h ? 1 : x ? 0.7 : 0.8,
                    },
                    children: [V(i), " (", i.rating, ")"],
                  }),
                  (0, r.jsx)(s.A, {
                    variant: "body2",
                    component: "span",
                    sx: { color: o.palette.text.secondary, fontWeight: "500" },
                    children: "vs",
                  }),
                  (0, r.jsxs)(s.A, {
                    variant: "subtitle1",
                    component: "span",
                    noWrap: !0,
                    sx: {
                      fontWeight: "700",
                      color: x
                        ? o.palette.success.main
                        : o.palette.text.primary,
                      opacity: x ? 1 : h ? 0.7 : 0.8,
                    },
                    children: [V(a), " (", a.rating, ")"],
                  }),
                  (0, r.jsx)(H, { result: c, perspectiveUserColor: l }),
                ],
              }),
              secondary: (0, r.jsxs)(z.A, {
                sx: { display: "flex", gap: 1, alignItems: "center" },
                children: [
                  (0, r.jsx)(F, { timeControl: d }),
                  (0, r.jsx)(R, { movesNb: m }),
                  (0, r.jsx)(q, { date: u }),
                ],
              }),
            }),
          });
        },
        V = (e) => (e.title ? "".concat(e.title, " ").concat(e.name) : e.name);
      function D(e) {
        let { onSelect: t } = e,
          [n, l] = (0, L.M)("chesscom-username", ""),
          [s, i] = (0, o.useState)(""),
          [a, c] = (0, o.useState)(!1),
          d = (0, o.useMemo)(
            () =>
              "string" == typeof n
                ? n
                    .split(",")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [],
            [n]
          );
        !a &&
          d.length &&
          s.trim().toLowerCase() != d[0].trim().toLowerCase() &&
          i(d[0].trim());
        let u = (e) => {
            let t = e.trim();
            if (!t) return;
            let n = t.toLowerCase();
            l(
              [t, ...d.filter((e) => e.toLowerCase() !== n)]
                .slice(0, 8)
                .join(",")
            );
          },
          m = (e) => {
            l(d.filter((t) => t !== e).join(","));
          },
          p = (e, t) => {
            i((null != t ? t : "").trim()), c(!0);
          },
          g = G(s, 300),
          {
            data: j,
            isFetching: y,
            isError: C,
          } = (0, W.I)({
            queryKey: ["CCUserGames", g],
            enabled: !!g,
            queryFn: (e) => {
              let { signal: t } = e;
              return (0, I.V)(null != g ? g : "", t);
            },
            retry: 1,
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(x.A, {
              sx: { my: 1, width: 300 },
              children: (0, r.jsx)(P.A, {
                freeSolo: !0,
                options: d,
                inputValue: s,
                onInputChange: p,
                onChange: p,
                renderOption: (e, t) => {
                  let { key: n, ...l } = e;
                  return (0, r.jsxs)(
                    "li",
                    {
                      ...l,
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingRight: 8,
                      },
                      children: [
                        (0, r.jsx)("span", { children: t }),
                        (0, r.jsx)(w.In, {
                          icon: "mdi:close",
                          style: { cursor: "pointer" },
                          onClick: (e) => {
                            e.stopPropagation(), m(t);
                          },
                        }),
                      ],
                    },
                    n
                  );
                },
                renderInput: (e) =>
                  (0, r.jsx)(v.A, {
                    ...e,
                    label: "Enter your Chess.com username...",
                    variant: "outlined",
                  }),
              }),
            }),
            g &&
              (0, r.jsx)(h.A, {
                container: !0,
                gap: 2,
                justifyContent: "center",
                alignContent: "center",
                minHeight: 100,
                size: 12,
                children: y
                  ? (0, r.jsx)(S.A, {})
                  : C
                    ? (0, r.jsx)("span", {
                        style: { color: "salmon" },
                        children: "User not found. Please check your username.",
                      })
                    : (null == j ? void 0 : j.length)
                      ? (0, r.jsx)(B.A, {
                          sx: { width: "100%" },
                          children: j.map((e) => {
                            let n =
                              e.white.name.toLowerCase() === g.toLowerCase()
                                ? "white"
                                : "black";
                            return (0, r.jsx)(
                              O,
                              {
                                game: e,
                                perspectiveUserColor: n,
                                onClick: () => {
                                  var n, r;
                                  let l =
                                    g.toLowerCase() !==
                                    (null === (r = e.black) || void 0 === r
                                      ? void 0
                                      : null === (n = r.name) || void 0 === n
                                        ? void 0
                                        : n.toLowerCase());
                                  t(e.pgn, l), u(g);
                                },
                              },
                              e.id
                            );
                          }),
                        })
                      : (0, r.jsx)("span", {
                          style: { color: "salmon" },
                          children:
                            "No games found. Please check your username.",
                        }),
              }),
          ],
        });
      }
      var K = n(3242);
      function Y(e) {
        let { onSelect: t } = e,
          [n, l] = (0, L.M)("lichess-username", ""),
          [s, i] = (0, o.useState)(""),
          [a, c] = (0, o.useState)(!1),
          d = (0, o.useMemo)(
            () =>
              "string" == typeof n
                ? n
                    .split(",")
                    .map((e) => e.trim())
                    .filter(Boolean)
                : [],
            [n]
          );
        !a &&
          d.length &&
          s.trim().toLowerCase() != d[0].trim().toLowerCase() &&
          i(d[0].trim());
        let u = (e) => {
            let t = e.trim();
            if (!t) return;
            let n = t.toLowerCase();
            l(
              [t, ...d.filter((e) => e.toLowerCase() !== n)]
                .slice(0, 8)
                .join(",")
            );
          },
          m = (e) => {
            l(d.filter((t) => t !== e).join(","));
          },
          p = (e, t) => {
            i((null != t ? t : "").trim()), c(!0);
          },
          g = G(s, 500),
          {
            data: j,
            isFetching: y,
            isError: C,
          } = (0, W.I)({
            queryKey: ["LichessUserGames", g],
            enabled: !!g,
            queryFn: (e) => {
              let { signal: t } = e;
              return (0, K.vc)(null != g ? g : "", t);
            },
            retry: 1,
          });
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(x.A, {
              sx: { my: 1, width: 300 },
              children: (0, r.jsx)(P.A, {
                freeSolo: !0,
                options: d,
                inputValue: s,
                onInputChange: p,
                onChange: p,
                renderOption: (e, t) => {
                  let { key: n, ...l } = e;
                  return (0, r.jsxs)(
                    "li",
                    {
                      ...l,
                      style: {
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingRight: 8,
                      },
                      children: [
                        (0, r.jsx)("span", { children: t }),
                        (0, r.jsx)(w.In, {
                          icon: "mdi:close",
                          style: { cursor: "pointer" },
                          onClick: (e) => {
                            e.stopPropagation(), m(t);
                          },
                        }),
                      ],
                    },
                    n
                  );
                },
                renderInput: (e) =>
                  (0, r.jsx)(v.A, {
                    ...e,
                    label: "Enter your Lichess username...",
                    variant: "outlined",
                  }),
              }),
            }),
            g &&
              (0, r.jsx)(h.A, {
                container: !0,
                gap: 2,
                justifyContent: "center",
                alignContent: "center",
                minHeight: 100,
                size: 12,
                children: y
                  ? (0, r.jsx)(S.A, {})
                  : C
                    ? (0, r.jsx)("span", {
                        style: { color: "salmon" },
                        children: "User not found. Please check your username.",
                      })
                    : (null == j ? void 0 : j.length)
                      ? (0, r.jsx)(B.A, {
                          sx: { width: "100%" },
                          children: j.map((e) => {
                            let n =
                              e.white.name.toLowerCase() === g.toLowerCase()
                                ? "white"
                                : "black";
                            return (0, r.jsx)(
                              O,
                              {
                                game: e,
                                perspectiveUserColor: n,
                                onClick: () => {
                                  let n =
                                    g.toLowerCase() !==
                                    e.black.name.toLowerCase();
                                  t(e.pgn, n), u(g);
                                },
                              },
                              e.id
                            );
                          }),
                        })
                      : (0, r.jsx)("span", {
                          style: { color: "salmon" },
                          children:
                            "No games found. Please check your username.",
                        }),
              }),
          ],
        });
      }
      var X = n(85278),
        J = n(52547);
      function Q(e) {
        let { open: t, onClose: n, setGame: s } = e,
          [v, w] = (0, o.useState)(""),
          [I, P] = (0, L.M)("preferred-game-origin", c.By.ChessCom),
          [S, B] = (0, o.useState)(""),
          G = (0, o.useRef)(null),
          W = (0, X.Xr)(J.MA),
          { addGame: N } = (0, i.R)(),
          M = async (e, t) => {
            if (e)
              try {
                let n = (0, a.w0)(e);
                (0, b.o)("loadedGame", { pgn: e }),
                  s ? await s(n) : await N(n),
                  W(null == t || t),
                  T();
              } catch (e) {
                console.error(e),
                  G.current && clearTimeout(G.current),
                  B(
                    e instanceof Error
                      ? "".concat(e.message, " !")
                      : "Invalid PGN: unknown error !"
                  ),
                  (G.current = setTimeout(() => {
                    B("");
                  }, 3e3));
              }
          },
          T = () => {
            w(""), B(""), G.current && clearTimeout(G.current), n();
          };
        return (0, r.jsxs)(d.A, {
          open: t,
          onClose: T,
          maxWidth: "md",
          slotProps: {
            paper: {
              sx: {
                position: "fixed",
                top: 0,
                width: "calc(100% - 10px)",
                marginY: { xs: "3vh", sm: 5 },
                maxHeight: { xs: "calc(100% - 5vh)", sm: "calc(100% - 64px)" },
              },
            },
          },
          children: [
            (0, r.jsx)(u.A, {
              marginY: 1,
              variant: "h5",
              children: s ? "Load a game" : "Add a game to your database",
            }),
            (0, r.jsx)(m.A, {
              sx: { padding: { xs: 2, md: 3 } },
              children: (0, r.jsxs)(h.A, {
                container: !0,
                marginTop: 1,
                alignItems: "center",
                justifyContent: "start",
                rowGap: 2,
                children: [
                  (0, r.jsxs)(x.A, {
                    sx: { my: 1, mr: 2, width: 150 },
                    children: [
                      (0, r.jsx)(p.A, {
                        id: "dialog-select-label",
                        children: "Game origin",
                      }),
                      (0, r.jsx)(g.A, {
                        labelId: "dialog-select-label",
                        id: "dialog-select",
                        displayEmpty: !0,
                        input: (0, r.jsx)(j.A, { label: "Game origin" }),
                        value: null != I ? I : "",
                        onChange: (e) => {
                          P(e.target.value), B("");
                        },
                        children: Object.entries(Z).map((e) => {
                          let [t, n] = e;
                          return (0, r.jsx)(y.A, { value: t, children: n }, t);
                        }),
                      }),
                    ],
                  }),
                  I === c.By.Pgn && (0, r.jsx)(k, { pgn: v, setPgn: w }),
                  I === c.By.ChessCom && (0, r.jsx)(D, { onSelect: M }),
                  I === c.By.Lichess && (0, r.jsx)(Y, { onSelect: M }),
                  (0, r.jsx)(C.A, {
                    open: !!S,
                    children: (0, r.jsx)(f.A, {
                      onClose: () => B(""),
                      severity: "error",
                      variant: "filled",
                      sx: { width: "100%" },
                      children: S,
                    }),
                  }),
                ],
              }),
            }),
            (0, r.jsxs)(A.A, {
              sx: { m: 2 },
              children: [
                (0, r.jsx)(l.A, {
                  variant: "outlined",
                  onClick: T,
                  children: "Cancel",
                }),
                I === c.By.Pgn &&
                  (0, r.jsx)(l.A, {
                    variant: "contained",
                    sx: { marginLeft: 2 },
                    onClick: () => {
                      M(v);
                    },
                    children: "Add",
                  }),
              ],
            }),
          ],
        });
      }
      let Z = {
        [c.By.ChessCom]: "Chess.com",
        [c.By.Lichess]: "Lichess.org",
        [c.By.Pgn]: "PGN",
      };
      function $(e) {
        let { setGame: t, label: n, size: i } = e,
          [a, c] = (0, o.useState)(!1);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(l.A, {
              variant: "contained",
              onClick: () => c(!0),
              size: i,
              children: (0, r.jsx)(s.A, {
                fontSize: "0.9em",
                fontWeight: "500",
                lineHeight: "1.4em",
                children: n || "Add game",
              }),
            }),
            (0, r.jsx)(Q, { open: a, onClose: () => c(!1), setGame: t }),
          ],
        });
      }
    },
  },
]);
