import {
  Avatar,
  Box,
  Button,
  Container,
  Grid2 as Grid,
  Paper,
  Typography,
  useTheme,
  useMediaQuery,
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

export default function ReviewSummaryPage() {
  const { white, black } = usePlayersData(gameAtom);
  const gameEval = useAtomValue(gameEvalAtom);
  const router = useRouter();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const whiteAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.accuracy.white;
  }, [gameEval]);

  const blackAccuracy = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.accuracy.black;
  }, [gameEval]);

  const handleContinueReview = () => {
    router.push("/review");
  };

  if (!gameEval?.positions.length) {
    return (
      <Container maxWidth="sm">
        <PageTitle title="Game Review" />
        <Paper
          elevation={3}
          sx={{ my: 4, p: 2, backgroundColor: "#2e2e2e", color: "white" }}
        >
          <Typography>
            No game evaluation found. Please analyze a game first.
          </Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <PageTitle title="Game Review" />
      <Paper
        elevation={3}
        sx={{
          my: 4,
          p: { xs: 2, md: 4 },
          backgroundColor: "#2e2e2e",
          color: "white",
          borderRadius: "16px",
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns={isDesktop ? "1fr 1fr" : "1fr"}
          gap={{ xs: 4, md: 8 }}
        >
          {/* Left Column */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <Avatar
                src="/icons/best.png"
                sx={{ width: 64, height: 64, mr: 2 }}
              />
              <Box
                sx={{
                  p: 2,
                  bgcolor: "#424242",
                  borderRadius: "12px",
                  color: "white",
                  flexGrow: 1,
                }}
              >
                <Typography variant="body1">
                  Well done pouncing on that free piece.
                </Typography>
              </Box>
            </Box>

            <GraphTab />

            <Grid
              container
              alignItems="center"
              justifyContent="space-around"
              sx={{ my: 3 }}
            >
              <Grid textAlign="center">
                <Typography variant="h6">{white.name}</Typography>
                <Avatar
                  src="/piece/merida/wK.svg"
                  variant="square"
                  sx={{
                    width: { xs: 100, md: 120 },
                    height: { xs: 100, md: 120 },
                    border: "3px solid #4caf50",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
              <Grid textAlign="center">
                <Typography variant="h6" align="right">
                  {black.name}
                </Typography>
                <Avatar
                  src="/piece/merida/bK.svg"
                  variant="square"
                  sx={{
                    width: { xs: 100, md: 120 },
                    height: { xs: 100, md: 120 },
                    border: "3px solid #f44336",
                    borderRadius: "8px",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          {/* Right Column */}
          <Box>
            <PlayersMetric
              title="Accuracy"
              whiteValue={whiteAccuracy}
              blackValue={blackAccuracy}
            />

            <Grid container spacing={1} my={3}>
              {sortedMoveClassfications.map((classification) => (
                <Grid size={{ xs: 12, sm: 6 }} key={classification}>
                  <ClassificationRow classification={classification} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

        {/* Continue Review Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            size="large"
            onClick={handleContinueReview}
            sx={{
              borderRadius: "24px",
              px: 4,
              py: 1.5,
              textTransform: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
              boxShadow: "0 4px 12px 0 rgba(0,0,0,0.3)",
            }}
          >
            Continue to Full Review
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
