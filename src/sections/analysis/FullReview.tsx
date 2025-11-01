import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Board from "@/components/board";
import { GameReviewPanel } from "@/sections/analysis/GameReviewPanel";
import { gameAtom } from "@/sections/analysis/states";
import { usePlayersData } from "@/hooks/usePlayersData";
import { Color } from "@/types/enums";

export default function FullReview() {
  const { white, black } = usePlayersData(gameAtom);

  return (
    <Box
      sx={{
        backgroundColor: "#312e2b",
        minHeight: "100vh",
        py: 4,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid sx={{ width: { xs: "100%", md: "66.66%" } }}>
            <Board
              id="review-board"
              gameAtom={gameAtom}
              whitePlayer={white}
              blackPlayer={black}
              boardOrientation={Color.White}
              showEvaluationBar={false}
              canPlay={false}
            />
          </Grid>
          <Grid sx={{ width: { xs: "100%", md: "33.33%" } }}>
            <GameReviewPanel />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
