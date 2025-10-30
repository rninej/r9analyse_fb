(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [174],
  {
    23876: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/play",
        function () {
          return n(50266);
        },
      ]);
    },
    50266: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => et });
      var i = n(37876),
        r = n(97121),
        a = n(85278),
        s = n(92094),
        l = n(19271),
        o = n(22277),
        c = n(99542);
      let d = (0, c.eU)(new o.d$()),
        u = (0, c.eU)({}),
        h = (0, c.eU)(l.Q1.White),
        m = (0, c.eU)(s.T3),
        g = (0, c.eU)(1320),
        f = (0, c.eU)(!1);
      var x = n(65897),
        j = n(14232),
        p = n(69846),
        y = n(32253),
        v = n(24307),
        A = n(19410);
      let b = (e, t) => {
        let n = (0, a.md)(e),
          [i, r] = (0, a.fp)(t);
        return (
          (0, j.useEffect)(() => {
            r({ lastMove: n.history({ verbose: !0 }).at(-1) });
          }, [n]),
          i
        );
      };
      var w = n(82831),
        k = n(658);
      function C() {
        let e = (0, p.l)(),
          t = (0, a.md)(m),
          n = (0, y.K)(t),
          r = (0, a.md)(d),
          { white: s, black: l } = (0, w.K)(d),
          o = (0, a.md)(h),
          { playMove: c } = (0, x.j)(d),
          C = (0, a.md)(g),
          W = (0, a.md)(f),
          Q = r.fen(),
          S = r.isGameOver();
        (0, j.useEffect)(
          () => (
            (async () => {
              if (
                !(null == n ? void 0 : n.getIsReady()) ||
                r.turn() === o ||
                S ||
                !W
              )
                return;
              let e = (0, k.yy)(1e3),
                t = await n.getEngineNextMove(Q, C);
              await e, t && c((0, v.vc)(t));
            })(),
            () => {
              null == n || n.stopAllCurrentJobs();
            }
          ),
          [Q, W]
        );
        let E = (0, j.useMemo)(() => {
          var t;
          let n = e.width,
            i = e.height;
          return (null === (t = window) || void 0 === t
            ? void 0
            : t.innerWidth) < 900
            ? Math.min(n, i - 150)
            : Math.min(n - 300, 0.83 * i);
        }, [e]);
        return (
          b(d, u),
          (0, i.jsx)(A.h, {
            id: "PlayBoard",
            canPlay: !!W && o,
            gameAtom: d,
            boardSize: E,
            whitePlayer: s,
            blackPlayer: l,
            boardOrientation: o,
            currentPositionAtom: u,
          })
        );
      }
      var W = n(31084),
        Q = n(77018),
        S = n(7957),
        E = n(24705);
      function z() {
        let e = (0, a.md)(d),
          { goToMove: t, undoMove: n } = (0, x.j)(d),
          r = (0, a.md)(h);
        return (0, i.jsx)(E.A, {
          variant: "outlined",
          onClick: () => {
            let i = e.history(),
              a = e.turn();
            if (
              ("w" === a && r === l.Q1.White) ||
              ("b" === a && r === l.Q1.Black)
            ) {
              if (i.length < 2) return;
              t(i.length - 2, e);
            } else {
              if (!i.length) return;
              n();
            }
          },
          children: "Undo your last move",
        });
      }
      function _() {
        let e = (0, a.md)(d),
          [t, n] = (0, a.fp)(f);
        return ((0, j.useEffect)(() => {
          e.isGameOver() && n(!1);
        }, [e, n]),
        t)
          ? (0, i.jsxs)(W.A, {
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              size: 12,
              children: [
                (0, i.jsxs)(W.A, {
                  container: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 2,
                  size: 12,
                  children: [
                    (0, i.jsx)(Q.A, { children: "Game in progress" }),
                    (0, i.jsx)(S.A, { size: 20, color: "info" }),
                  ],
                }),
                (0, i.jsx)(W.A, {
                  container: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  size: 12,
                  children: (0, i.jsx)(z, {}),
                }),
                (0, i.jsx)(W.A, {
                  container: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  size: 12,
                  children: (0, i.jsx)(E.A, {
                    variant: "outlined",
                    onClick: () => {
                      n(!1);
                    },
                    children: "Resign",
                  }),
                }),
              ],
            })
          : null;
      }
      var I = n(27064),
        B = n(89099);
      function N() {
        let e = (0, a.md)(d),
          t = (0, a.md)(h),
          n = (0, a.md)(f),
          { addGame: r } = (0, I.R)(),
          s = (0, B.useRouter)();
        if (n || !e.history().length) return null;
        let o = async () => {
          let n = (0, v.nt)(e, { resigned: e.isGameOver() ? void 0 : t }),
            i = await r(n);
          s.push({ pathname: "/", query: { gameId: i } });
        };
        return (0, i.jsxs)(W.A, {
          container: !0,
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          size: 12,
          children: [
            (0, i.jsx)(W.A, {
              container: !0,
              justifyContent: "center",
              size: 12,
              children: (0, i.jsx)(Q.A, {
                children: (() => {
                  if (e.isCheckmate()) {
                    let n =
                      ("w" === e.turn() ? l.Q1.Black : l.Q1.White) === t
                        ? "You"
                        : "Stockfish";
                    return "".concat(n, " won by checkmate !");
                  }
                  return e.isInsufficientMaterial()
                    ? "Draw by insufficient material"
                    : e.isStalemate()
                      ? "Draw by stalemate"
                      : e.isThreefoldRepetition()
                        ? "Draw by threefold repetition"
                        : e.isDraw()
                          ? "Draw by fifty-move rule"
                          : "You resigned";
                })(),
              }),
            }),
            (0, i.jsx)(E.A, {
              variant: "outlined",
              onClick: o,
              children: "Open game analysis",
            }),
          ],
        });
      }
      var O = n(18259),
        P = n(84147),
        R = n(47866),
        T = n(3034),
        U = n(88713),
        G = n(90405),
        M = n(35779),
        Y = n(83290),
        D = n(6003),
        H = n(36085),
        q = n(35656),
        F = n(81104),
        X = n(77935),
        K = n(78523),
        $ = n(37242),
        J = n(9320),
        L = n(47713),
        V = n(43699);
      function Z(e) {
        let { open: t, onClose: n } = e,
          [r, o] = (0, $.v)("engine-elo", g),
          [c, u] = (0, $.v)("engine-play-name", m),
          [p, y] = (0, a.fp)(h),
          A = (0, a.Xr)(f),
          { reset: b } = (0, x.j)(d),
          [w, k] = (0, j.useState)(""),
          [C, S] = (0, j.useState)("");
        (0, j.useEffect)(() => {
          (0, L.N9)(c) ||
            (V.m.isSupported()
              ? u(l.Qz.Stockfish16_1Lite)
              : u(l.Qz.Stockfish11));
        }, [u, c]);
        let z = () => {
          n(), k(""), S("");
        };
        return (0, i.jsxs)(P.A, {
          open: t,
          onClose: z,
          maxWidth: "md",
          fullWidth: !0,
          children: [
            (0, i.jsx)(R.A, {
              marginY: 1,
              variant: "h5",
              children: "Set game parameters",
            }),
            (0, i.jsxs)(T.A, {
              sx: { paddingBottom: 0 },
              children: [
                (0, i.jsxs)(Q.A, {
                  children: [
                    s.H[s.T3].small,
                    " is the default engine if your device support its requirements. It offers the best balance between speed and strength. ",
                    s.H[s.RS].small,
                    " is the strongest engine available, note that it requires a one time download of 75MB.",
                  ],
                }),
                (0, i.jsxs)(W.A, {
                  marginTop: 4,
                  container: !0,
                  justifyContent: "center",
                  alignItems: "center",
                  rowGap: 3,
                  size: 12,
                  children: [
                    (0, i.jsx)(W.A, {
                      container: !0,
                      justifyContent: "center",
                      size: 12,
                      children: (0, i.jsxs)(U.A, {
                        variant: "outlined",
                        children: [
                          (0, i.jsx)(G.A, {
                            id: "dialog-select-label",
                            children: "Bot's engine",
                          }),
                          (0, i.jsx)(M.A, {
                            labelId: "dialog-select-label",
                            id: "dialog-select",
                            displayEmpty: !0,
                            input: (0, i.jsx)(Y.A, { label: "Engine" }),
                            value: c,
                            onChange: (e) => u(e.target.value),
                            sx: { width: 280, maxWidth: "100%" },
                            children: Object.values(l.Qz).map((e) =>
                              (0, i.jsx)(
                                D.A,
                                {
                                  value: e,
                                  disabled: !(0, L.N9)(e),
                                  children: s.H[e].full,
                                },
                                e
                              )
                            ),
                          }),
                        ],
                      }),
                    }),
                    (0, i.jsx)(O.A, {
                      label: "Bot Elo rating",
                      value: r,
                      setValue: o,
                      min: 1320,
                      max: 3190,
                      step: 10,
                      marksFilter: 374,
                    }),
                    (0, i.jsx)(H.A, {
                      children: (0, i.jsx)(q.A, {
                        control: (0, i.jsx)(F.A, {
                          color: "default",
                          checked: p === l.Q1.White,
                          onChange: (e) => {
                            y(e.target.checked ? l.Q1.White : l.Q1.Black);
                          },
                        }),
                        label:
                          p === l.Q1.White
                            ? "You play as White"
                            : "You play as Black",
                      }),
                    }),
                    (0, i.jsx)(U.A, {
                      fullWidth: !0,
                      children: (0, i.jsx)(X.A, {
                        label: "Optional starting position (FEN or PGN)",
                        variant: "outlined",
                        multiline: !0,
                        value: w,
                        onChange: (e) => k(e.target.value),
                      }),
                    }),
                    C &&
                      (0, i.jsx)(U.A, {
                        fullWidth: !0,
                        children: (0, i.jsx)(Q.A, {
                          color: "salmon",
                          textAlign: "center",
                          marginTop: 1,
                          children: C,
                        }),
                      }),
                  ],
                }),
              ],
            }),
            (0, i.jsxs)(K.A, {
              sx: { m: 2 },
              children: [
                (0, i.jsx)(E.A, {
                  variant: "outlined",
                  sx: { marginRight: 2 },
                  onClick: z,
                  children: "Cancel",
                }),
                (0, i.jsx)(E.A, {
                  variant: "contained",
                  onClick: () => {
                    S("");
                    try {
                      let e = w.trim(),
                        t = e.startsWith("[")
                          ? (0, v.w0)(e).fen()
                          : e || void 0;
                      b({
                        white: {
                          name: p === l.Q1.White ? "You" : s.H[c].small,
                          rating: p === l.Q1.White ? void 0 : r,
                        },
                        black: {
                          name: p === l.Q1.Black ? "You" : s.H[c].small,
                          rating: p === l.Q1.Black ? void 0 : r,
                        },
                        fen: t,
                      });
                    } catch (e) {
                      console.error(e),
                        S(
                          e instanceof Error
                            ? "".concat(e.message, " !")
                            : "Unknown error while parsing input !"
                        );
                      return;
                    }
                    A(!0),
                      z(),
                      (0, J.$)("play_game", {
                        engine: c,
                        engineElo: r,
                        playerColor: p,
                      });
                  },
                  children: "Start game",
                }),
              ],
            }),
          ],
        });
      }
      function ee() {
        let [e, t] = (0, j.useState)(!1),
          n = (0, a.md)(d);
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(E.A, {
              variant: "contained",
              onClick: () => t(!0),
              children: n.history().length ? "Start new game" : "Start game",
            }),
            (0, i.jsx)(Z, { open: e, onClose: () => t(!1) }),
          ],
        });
      }
      function et() {
        let e = (0, a.md)(f);
        return (0, i.jsxs)(W.A, {
          container: !0,
          gap: 4,
          justifyContent: "space-evenly",
          alignItems: "start",
          children: [
            (0, i.jsx)(r.s, { title: "Chesskit Play vs Stockfish" }),
            (0, i.jsx)(C, {}),
            (0, i.jsxs)(W.A, {
              container: !0,
              marginTop: { xs: 0, md: "2.5em" },
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 2,
              border: 1,
              borderColor: "secondary.main",
              size: { xs: 12, md: "grow" },
              sx: {
                backgroundColor: "secondary.main",
                borderColor: "primary.main",
                borderWidth: 2,
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              },
              padding: 3,
              rowGap: 3,
              style: { maxWidth: "400px" },
              children: [
                (0, i.jsx)(_, {}),
                !e && (0, i.jsx)(ee, {}),
                (0, i.jsx)(N, {}),
              ],
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [774, 969, 696, 358, 649, 859, 636, 593, 792], () => t(23876)),
      (_N_E = e.O());
  },
]);
