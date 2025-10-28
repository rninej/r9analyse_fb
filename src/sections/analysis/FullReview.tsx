import {
  Avatar,
  Box,
  Container,
  Grid2 as Grid,
  Typography,
  Paper,
} from "@mui/material";
import { PageTitle } from "@/components/pageTitle";
import { usePlayersData } from "@/hooks/usePlayersData";
import { gameAtom, gameEvalAtom } from "@/sections/analysis/states";
import { useAtomValue } from "jotai";
import { MoveClassification } from "@/types/enums";
import ClassificationRow from "@/sections/analysis/panelBody/classificationTab/movesClassificationsRecap/classificationRow";
import PlayersMetric from "@/sections/analysis/panelBody/analysisTab/playersMetric";
import { useMemo } from "react";
import GraphTab from "@/sections/analysis/panelBody/graphTab";

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

export default function FullReview() {
  const { white, black } = usePlayersData(gameAtom);
  const gameEval = useAtomValue(gameEvalAtom);

  const whiteAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.accuracy.white;
  }, [gameEval]);

  const blackAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.accuracy.black;
  }, [gameEval]);

  if (!gameEval?.positions.length) {
    return (
      <Container maxWidth="sm">
        <PageTitle title="Game Review" />
        <Paper
          elevation={3}
          sx={{ my: 4, p: 2, backgroundColor: "#5C3B28", color: "white" }}
        >
          <Typography>
            No game evaluation found. Please analyze a game first.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <PageTitle title="Game Review" />
      <Paper
        elevation={3}
        sx={{ my: 4, p: 2, backgroundColor: "#5C3B28", color: "white" }}
      >
        {/* User message */}
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar src="/icons/best.png" sx={{ width: 56, height: 56, mr: 2 }} />
          <Box
            sx={{
              p: 1.5,
              bgcolor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "10px",
              color: "black",
            }}
          >
            <Typography variant="body1">
              Well done pouncing on that free piece.
            </Typography>
          </Box>
        </Box>

        <GraphTab />

        {/* Scorecard */}
        <Grid
          container
          alignItems="center"
          justifyContent="space-between"
          sx={{ my: 2 }}
        >
          <Grid>
            <Typography variant="h6">{white.name}</Typography>
            <Avatar
              src="/piece/merida/wK.svg"
              variant="square"
              sx={{ width: 80, height: 80, border: "2px solid green" }}
            />
          </Grid>
          <Grid>
            <Typography variant="h6" align="right">
              {black.name}
            </Typography>
            <Avatar
              src="/piece/merida/bK.svg"
              variant="square"
              sx={{ width: 80, height: 80 }}
            />
          </Grid>
        </Grid>

        <PlayersMetric
          title="Accuracy"
          whiteValue={whiteAccuracy}
          blackValue={blackAccuracy}
        />

        <Box my={2}>
          {sortedMoveClassfications.map((classification) => (
            <ClassificationRow
              key={classification}
              classification={classification}
            />
          ))}
        </Box>
      </Paper>
    </Container>
  );
}
