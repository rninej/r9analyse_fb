import { Avatar, Box, Button, Container, Grid, Typography, Paper } from "@mui/material";
import { PageTitle } from "@/components/pageTitle";
import { usePlayersData } from "@/hooks/usePlayersData";
import { gameAtom, gameEvalAtom } from "@/sections/analysis/states";
import { useAtomValue } from "jotai";
import { MoveClassification } from "@/types/enums";
import ClassificationRow from "@/sections/analysis/panelBody/classificationTab/movesClassificationsRecap/classificationRow";
import PlayersMetric from "@/sections/analysis/panelBody/analysisTab/playersMetric";
import { useMemo } from "react";
import GraphTab from "@/sections/analysis/panelBody/graphTab";
import { useRouter } from "next/router";

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

export default function ReviewPage() {
  const { white, black } = usePlayersData(gameAtom);
  const gameEval = useAtomValue(gameEvalAtom);
  const router = useRouter();

  const whiteAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    const whitePositions = gameEval.positions.filter((p, i) => i % 2 !== 0);
    if (whitePositions.length === 0) return 0;
    return Math.round(whitePositions.reduce((acc, p) => acc + (p.accuracy ?? 0), 0) / whitePositions.length);
  }, [gameEval]);

  const blackAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    const blackPositions = gameEval.positions.filter((p, i) => i % 2 === 0);
    if (blackPositions.length === 0) return 0;
    return Math.round(blackPositions.reduce((acc, p) => acc + (p.accuracy ?? 0), 0) / blackPositions.length);
  }, [gameEval]);

  const handleContinueReview = () => {
    router.push('/analysis');
  };

  if (!gameEval?.positions.length) return (
    <Container maxWidth="sm">
        <PageTitle title="Game Review" />
        <Paper elevation={3} sx={{ my: 4, p: 2, backgroundColor: "#5C3B28", color: 'white' }}>
            <Typography>No game evaluation found. Please analyze a game first.</Typography>
        </Paper>
    </Container>
  )

  return (
    <Container maxWidth="sm">
      <PageTitle title="Game Review" />
      <Paper elevation={3} sx={{ my: 4, p: 2, backgroundColor: "#5C3B28", color: 'white' }}>
        {/* User message */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar src="/icons/best.png" sx={{ width: 56, height: 56, mr: 2 }}/>
            <Box sx={{ p: 1.5, bgcolor: 'rgba(255, 255, 255, 0.9)', borderRadius: '10px', color: 'black' }}>
                <Typography variant="body1">Well done pouncing on that free piece.</Typography>
            </Box>
        </Box>

        <GraphTab />

        {/* Scorecard */}
        <Grid container alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <Grid item>
                <Typography variant="h6">{white.name}</Typography>
                <Avatar src="/piece/merida/wK.svg" variant="square" sx={{ width: 80, height: 80, border: '2px solid green' }}/>
            </Grid>
            <Grid item>
                <Typography variant="h6" align="right">{black.name}</Typography>
                <Avatar src="/piece/merida/bK.svg" variant="square" sx={{ width: 80, height: 80 }}/>
            </Grid>
        </Grid>

        <PlayersMetric title="Accuracy" whiteValue={whiteAccuracy} blackValue={blackAccuracy} />

        <Box my={2}>
            {sortedMoveClassfications.map((classification) => (
                <ClassificationRow
                    key={classification}
                    classification={classification}
                />
            ))}
        </Box>

        {/* Continue Review Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" size="large" onClick={handleContinueReview}>
            Continue Review
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
