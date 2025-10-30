import { Color, MoveClassification } from "@/types/enums";
import { Grid2 as Grid, Typography, Paper } from "@mui/material";
import { useAtomValue } from "jotai";
import { boardAtom, gameAtom, gameEvalAtom } from "../../../states";
import { useMemo } from "react";
import Image from "next/image";
import { capitalize } from "@/lib/helpers";
import { useChessActions } from "@/hooks/useChessActions";
import { CLASSIFICATION_COLORS } from "@/constants";

interface Props {
  classification: MoveClassification;
}

export default function ClassificationRow({ classification }: Props) {
  const gameEval = useAtomValue(gameEvalAtom);
  const board = useAtomValue(boardAtom);
  const game = useAtomValue(gameAtom);
  const { goToMove } = useChessActions(boardAtom);

  const whiteNb = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.positions.filter(
      (position, idx) =>
        idx % 2 !== 0 && position.moveClassification === classification
    ).length;
  }, [gameEval, classification]);

  const blackNb = useMemo(() => {
    if (!gameEval) return 0;
    return gameEval.positions.filter(
      (position, idx) =>
        idx % 2 === 0 && position.moveClassification === classification
    ).length;
  }, [gameEval, classification]);

  const handleClick = (color: Color) => {
    if (
      !gameEval ||
      (color === Color.White && !whiteNb) ||
      (color === Color.Black && !blackNb)
    ) {
      return;
    }

    const filterColor = (idx: number) =>
      (idx % 2 !== 0 && color === Color.White) ||
      (idx % 2 === 0 && color === Color.Black);
    const moveIdx = board.history().length;

    const nextPositionIdx = gameEval.positions.findIndex(
      (position, idx) =>
        filterColor(idx) &&
        position.moveClassification === classification &&
        idx > moveIdx
    );

    if (nextPositionIdx > 0) {
      goToMove(nextPositionIdx, game);
    } else {
      const firstPositionIdx = gameEval.positions.findIndex(
        (position, idx) =>
          filterColor(idx) && position.moveClassification === classification
      );
      if (firstPositionIdx > 0 && firstPositionIdx !== moveIdx) {
        goToMove(firstPositionIdx, game);
      }
    }
  };

  return (
    <Paper
      elevation={2}
      sx={{
        my: 0.5,
        p: 1,
        backgroundColor: "#3a3a3a",
        borderRadius: "8px",
        "&:hover": {
          backgroundColor: "#4a4a4a",
        },
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        color={CLASSIFICATION_COLORS[classification]}
        size={12}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            cursor: whiteNb ? "pointer" : "default",
            width: "4rem",
            p: 1,
            borderRadius: "6px",
            "&:hover": { bgcolor: whiteNb ? "#5a5a5a" : "transparent" },
          }}
          onClick={() => handleClick(Color.White)}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
            {whiteNb}
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent="start"
          alignItems="center"
          gap={1.5}
          wrap="nowrap"
          sx={{ flexGrow: 1, mx: 1 }}
        >
          <Image
            src={`/icons/${classification}.png`}
            alt="move-icon"
            width={24}
            height={24}
          />
          <Typography
            sx={{ fontWeight: 500, fontSize: "1.1rem", color: "#ffffff" }}
          >
            {capitalize(classification)}
          </Typography>
        </Grid>

        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            cursor: blackNb ? "pointer" : "default",
            width: "4rem",
            p: 1,
            borderRadius: "6px",
            "&:hover": { bgcolor: blackNb ? "#5a5a5a" : "transparent" },
          }}
          onClick={() => handleClick(Color.Black)}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
            {blackNb}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}
