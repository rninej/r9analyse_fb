import {
  Avatar,
  Box,
  Button,
  Paper,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import StarIcon from "@mui/icons-material/Star";
import { useAtomValue } from "jotai";
import { gameAtom, gameEvalAtom } from "@/sections/analysis/states";
import { usePlayersData } from "@/hooks/usePlayersData";
import { useMemo } from "react";
import { MoveClassification } from "@/types/enums";
import { CompactClassificationRow } from "@/sections/analysis/CompactClassificationRow";
import GraphTab from "./panelBody/graphTab";

const sortedMoveClassfications = [
  MoveClassification.Splendid,
  MoveClassification.Perfect,
  MoveClassification.Best,
  MoveClassification.Excellent,
  MoveClassification.Okay,
  MoveClassification.Opening,
  MoveClassification.Inaccuracy,
  MoveClassification.Mistake,
  MoveClassification.Blunder,
];

export function GameReviewPanel() {
  const gameEval = useAtomValue(gameEvalAtom);
  const { white, black } = usePlayersData(gameAtom);

  const whiteAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.accuracy.white;
  }, [gameEval]);

  const blackAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.accuracy.black;
  }, [gameEval]);

  const getClassificationCount = (
    color: "white" | "black",
    classification: MoveClassification
  ) => {
    if (!gameEval) return 0;
    return gameEval.positions.filter(
      (position, idx) =>
        (color === "white" ? idx % 2 !== 0 : idx % 2 === 0) &&
        position.moveClassification === classification
    ).length;
  };

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: "#262522",
        color: "white",
        p: 2,
        borderRadius: "8px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <StarIcon sx={{ color: "#a5a3a1", mr: 1 }} />
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Game Review
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Avatar src="/avatars/mine.png" sx={{ width: 48, height: 48, mr: 2 }} />
        <Box sx={{ p: 1.5, backgroundColor: "#3d3b38", borderRadius: "4px" }}>
          <Typography variant="body2">
            There are some great moves to review in an otherwise tough game.
            Let's take a look!
          </Typography>
        </Box>
      </Box>

      <GraphTab />

      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Grid container sx={{ width: "41.66%" }} alignItems="center" direction="column">
          <Avatar src={white.avatarUrl} sx={{ width: 48, height: 48 }} />
          <Typography>{white.name}</Typography>
          <Paper sx={{ p: 1, bgcolor: "#424242" }}>
            <Typography>{whiteAccuracy}%</Typography>
          </Paper>
        </Grid>
        <Grid sx={{ width: "16.66%", textAlign: "center" }}>
          <Typography>Accuracy</Typography>
        </Grid>
        <Grid container sx={{ width: "41.66%" }} alignItems="center" direction="column">
          <Avatar src={black.avatarUrl} sx={{ width: 48, height: 48 }} />
          <Typography>{black.name}</Typography>
          <Paper sx={{ p: 1, bgcolor: "#424242" }}>
            <Typography>{blackAccuracy}%</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box>
        {sortedMoveClassfications.map((classification) => (
          <CompactClassificationRow
            key={classification}
            classification={classification}
            whiteNb={getClassificationCount("white", classification)}
            blackNb={getClassificationCount("black", classification)}
          />
        ))}
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: "auto",
          backgroundColor: "#739552",
          "&:hover": { backgroundColor: "#8ab468" },
          py: 1.5,
          fontWeight: "bold",
          borderRadius: "8px",
          textTransform: "none",
        }}
      >
        Start Review
      </Button>
    </Paper>
  );
}
