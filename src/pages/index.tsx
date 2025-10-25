import {
  boardAtom,
  chessComUsernameSearchAtom,
  gameAtom,
  gameEvalAtom,
} from "@/sections/analysis/states";
import {
  Alert,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Grid2 as Grid,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import EngineSettingsButton from "@/sections/engineSettings/engineSettingsButton";
import GraphTab from "@/sections/analysis/panelBody/graphTab";
import { PageTitle } from "@/components/pageTitle";
import ChessComWatcher from "@/services/chessComWatcher";
import { LoadedGame } from "@/types/game";
import { Chess } from "chess.js";
import { useRouter } from "next/router";
import Board from "@/sections/analysis/board";
import PanelHeader from "@/sections/analysis/panelHeader";
import PanelToolBar from "@/sections/analysis/panelToolbar";
import AnalysisTab from "@/sections/analysis/panelBody/analysisTab";
import ClassificationTab from "@/sections/analysis/panelBody/classificationTab";
import ChessComSearch from "@/components/ChessComSearch";

export default function GameAnalysis() {
  const theme = useTheme();
  const isLgOrGreater = useMediaQuery(theme.breakpoints.up("lg"));
  const router = useRouter();
  const { chessComUsername: chessComUsernameFromUrl } = router.query;
  const chessComUsernameFromSearch = useAtomValue(chessComUsernameSearchAtom);
  const chessComUsername =
    chessComUsernameFromSearch || (chessComUsernameFromUrl as string);

  const gameEval = useAtomValue(gameEvalAtom);
  const game = useAtomValue(gameAtom);
  const board = useAtomValue(boardAtom);
  const setGame = useSetAtom(gameAtom);

  const showMovesTab = game.history().length > 0 || board.history().length > 0;

  const [watcher, setWatcher] = useState<ChessComWatcher | null>(null);
  const [newGame, setNewGame] = useState<LoadedGame | null>(null);
  const [isAutoAnalyzing, setIsAutoAnalyzing] = useState(false);

  useEffect(() => {
    if (newGame) {
      const chessGame = new Chess();
      chessGame.loadPgn(newGame.pgn);
      setGame(chessGame);
      setIsAutoAnalyzing(true);
    }
  }, [newGame, setGame]);

  useEffect(() => {
    if (gameEval && isAutoAnalyzing) {
      new Notification("Game Analysis Complete", {
        body: "Your new game has been automatically analyzed.",
      });
      setIsAutoAnalyzing(false);
    }
  }, [gameEval, isAutoAnalyzing]);

  useEffect(() => {
    if (typeof chessComUsername === "string" && chessComUsername) {
      const startWatcher = () => {
        const newWatcher = new ChessComWatcher(chessComUsername);
        newWatcher.startWatching((game) => {
          setNewGame(game);
        });
        setWatcher(newWatcher);
      };

      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            startWatcher();
          }
        });
      } else {
        startWatcher();
      }
    }

    return () => {
      watcher?.stopWatching();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chessComUsername]);

  return (
    <Grid container gap={4} justifyContent="space-evenly" alignItems="start">
      <PageTitle title="MrAnalyse Game Analysis" />

      <Board />

      <Grid
        container
        justifyContent="start"
        alignItems="center"
        borderRadius={2}
        border={1}
        borderColor={"secondary.main"}
        sx={{
          backgroundColor: "secondary.main",
          borderColor: "primary.main",
          borderWidth: 2,
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
        }}
        padding={2}
        style={{
          maxWidth: "1200px",
        }}
        rowGap={2}
        height={{ xs: "auto", lg: "calc(95vh - 60px)" }}
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        size={{
          xs: 12,
          lg: "grow",
        }}
      >
        {isLgOrGreater ? (
          <Box width="100%">
            <PanelHeader key="analysis-panel-header" />
            <Divider sx={{ marginX: "5%", marginTop: 2.5 }} />
          </Box>
        ) : (
          <PanelToolBar key="review-panel-toolbar" />
        )}

        {!isLgOrGreater && !gameEval && <Divider sx={{ marginX: "5%" }} />}
        {!isLgOrGreater && !gameEval && (
          <PanelHeader key="analysis-panel-header" />
        )}

        {isLgOrGreater ? (
          <>
            <GraphTab id="tabContent2" />
            <AnalysisTab id="tabContent0" />
            <ClassificationTab id="tabContent1" />
          </>
        ) : (
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <AnalysisTab id="tabContent0" />
            {gameEval && <Divider sx={{ width: "90%", my: 2 }} />}
            {gameEval && <GraphTab id="tabContent2" />}
            {showMovesTab && <Divider sx={{ width: "90%", my: 2 }} />}
            {showMovesTab && <ClassificationTab id="tabContent1" />}
          </Box>
        )}

        {isLgOrGreater && (
          <Box width="100%">
            <Divider sx={{ marginX: "5%", marginBottom: 1.5 }} />
            <PanelToolBar key="review-panel-toolbar" />
          </Box>
        )}

        {!isLgOrGreater && gameEval && (
          <Box width="100%">
            <Divider sx={{ marginX: "5%", marginBottom: 2.5 }} />
            <PanelHeader key="analysis-panel-header" />
          </Box>
        )}
      </Grid>

      <EngineSettingsButton />
      <Snackbar
        open={!!newGame}
        autoHideDuration={6000}
        onClose={() => setNewGame(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setNewGame(null)}
          severity="success"
          sx={{ width: "100%" }}
        >
          New game found: {newGame?.white.name} vs {newGame?.black.name}
        </Alert>
      </Snackbar>

      <Dialog open={!chessComUsername} fullWidth maxWidth="sm">
        <DialogTitle>Welcome to MrAnalyse</DialogTitle>
        <DialogContent>
          <p>
            To get started, please enter your Chess.com username below. This
            will allow MrAnalyse to automatically fetch and analyze your games
            as you play them.
          </p>
          <ChessComSearch />
        </DialogContent>
      </Dialog>
    </Grid>
  );
}
