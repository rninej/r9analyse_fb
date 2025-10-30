(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [271],
  {
    36329: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => v });
      var a = n(37876),
        i = n(31084),
        l = n(77018),
        o = n(98594),
        r = n(22999),
        c = n(82277),
        d = n(38679),
        s = n(14232),
        h = n(98291),
        u = n(90932),
        m = n(88546),
        g = n(27064),
        p = n(89099),
        w = n(97121);
      let b = { ...r._, noRowsLabel: "No games found" };
      function v() {
        let { games: e, deleteGame: t } = (0, g.R)(!0),
          n = (0, p.useRouter)();
        console.log(e);
        let r = (0, s.useCallback)(
            (e) => async () => {
              if ("number" != typeof e) throw Error("Unable to remove game");
              await t(e);
            },
            [t]
          ),
          v = (0, s.useCallback)(
            (t) => async () => {
              var n, a;
              if ("number" != typeof t) throw Error("Unable to copy game");
              await (null === (a = navigator.clipboard) || void 0 === a
                ? void 0
                : null === (n = a.writeText) || void 0 === n
                  ? void 0
                  : n.call(a, e[t - 1].pgn));
            },
            [e]
          ),
          f = (0, s.useMemo)(
            () => [
              { field: "event", headerName: "Event", width: 150 },
              { field: "site", headerName: "Site", width: 150 },
              { field: "date", headerName: "Date", width: 150 },
              {
                field: "round",
                headerName: "Round",
                headerAlign: "center",
                align: "center",
                width: 150,
              },
              {
                field: "whiteLabel",
                headerName: "White",
                width: 200,
                headerAlign: "center",
                align: "center",
                valueGetter: (e, t) => {
                  var n, a;
                  return ""
                    .concat(
                      null !== (n = t.white.name) && void 0 !== n
                        ? n
                        : "Unknown",
                      " ("
                    )
                    .concat(
                      null !== (a = t.white.rating) && void 0 !== a ? a : "?",
                      ")"
                    );
                },
              },
              {
                field: "result",
                headerName: "Result",
                headerAlign: "center",
                align: "center",
                width: 100,
              },
              {
                field: "blackLabel",
                headerName: "Black",
                width: 200,
                headerAlign: "center",
                align: "center",
                valueGetter: (e, t) => {
                  var n, a;
                  return ""
                    .concat(
                      null !== (n = t.black.name) && void 0 !== n
                        ? n
                        : "Unknown",
                      " ("
                    )
                    .concat(
                      null !== (a = t.black.rating) && void 0 !== a ? a : "?",
                      ")"
                    );
                },
              },
              {
                field: "eval",
                headerName: "Evaluation",
                type: "boolean",
                headerAlign: "center",
                align: "center",
                width: 100,
                valueGetter: (e, t) => !!t.eval,
              },
              {
                field: "openEvaluation",
                type: "actions",
                headerName: "Analyze",
                width: 100,
                cellClassName: "actions",
                getActions: (e) => {
                  let { id: t } = e;
                  return [
                    (0, a.jsx)(
                      c.Z,
                      {
                        icon: (0, a.jsx)(o.In, {
                          icon: "streamline:magnifying-glass-solid",
                          width: "20px",
                        }),
                        label: "Open Evaluation",
                        onClick: () =>
                          n.push({ pathname: "/", query: { gameId: t } }),
                        color: "inherit",
                      },
                      "".concat(t, "-open-eval-button")
                    ),
                  ];
                },
              },
              {
                field: "delete",
                type: "actions",
                headerName: "Delete",
                width: 100,
                cellClassName: "actions",
                getActions: (e) => {
                  let { id: t } = e;
                  return [
                    (0, a.jsx)(
                      c.Z,
                      {
                        icon: (0, a.jsx)(o.In, {
                          icon: "mdi:delete-outline",
                          color: h.A[400],
                          width: "20px",
                        }),
                        label: "Delete",
                        onClick: r(t),
                        color: "inherit",
                      },
                      "".concat(t, "-delete-button")
                    ),
                  ];
                },
              },
              {
                field: "copy pgn",
                type: "actions",
                headerName: "Copy pgn",
                width: 100,
                cellClassName: "actions",
                getActions: (e) => {
                  let { id: t } = e;
                  return [
                    (0, a.jsx)(
                      c.Z,
                      {
                        icon: (0, a.jsx)(o.In, {
                          icon: "ri:clipboard-line",
                          color: u.A[400],
                          width: "20px",
                        }),
                        label: "Copy pgn",
                        onClick: v(t),
                        color: "inherit",
                      },
                      "".concat(t, "-copy-button")
                    ),
                  ];
                },
              },
            ],
            [r, v, n]
          );
        return (0, a.jsxs)(i.A, {
          container: !0,
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          marginTop: 6,
          children: [
            (0, a.jsx)(w.s, { title: "Chesskit Game Database" }),
            (0, a.jsx)(i.A, {
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              size: 12,
              children: (0, a.jsx)(m.A, {}),
            }),
            (0, a.jsx)(i.A, {
              container: !0,
              justifyContent: "center",
              alignItems: "center",
              size: 12,
              children: (0, a.jsxs)(l.A, {
                variant: "subtitle2",
                children: [
                  "You have ",
                  e.length,
                  " game",
                  1 !== e.length && "s",
                  " in your database",
                ],
              }),
            }),
            (0, a.jsx)(i.A, {
              maxWidth: "100%",
              minWidth: "50px",
              children: (0, a.jsx)(d.z, {
                "aria-label": "Games list",
                rows: e,
                columns: f,
                disableColumnMenu: !0,
                hideFooter: !0,
                localeText: b,
                initialState: {
                  sorting: { sortModel: [{ field: "date", sort: "desc" }] },
                },
              }),
            }),
          ],
        });
      }
    },
    94186: (e, t, n) => {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/database",
        function () {
          return n(36329);
        },
      ]);
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [453, 696, 986, 539, 259, 546, 636, 593, 792], () => t(94186)),
      (_N_E = e.O());
  },
]);
