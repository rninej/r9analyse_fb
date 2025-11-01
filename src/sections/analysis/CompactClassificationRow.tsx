import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { MoveClassification } from "@/types/enums";
import Image from "next/image";
import { capitalize } from "@/lib/helpers";

interface CompactClassificationRowProps {
  classification: MoveClassification;
  whiteNb: number;
  blackNb: number;
}

export function CompactClassificationRow({
  classification,
  whiteNb,
  blackNb,
}: CompactClassificationRowProps) {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid sx={{ width: "16.66%", textAlign: "center" }}>
        <Typography sx={{ fontWeight: "bold" }}>{whiteNb}</Typography>
      </Grid>
      <Grid sx={{ width: "16.66%", textAlign: "center" }}>
        <Image
          src={`/icons/${classification}.png`}
          alt={classification}
          width={20}
          height={20}
        />
      </Grid>
      <Grid sx={{ width: "33.33%", textAlign: "center" }}>
        <Typography>{capitalize(classification)}</Typography>
      </Grid>
      <Grid sx={{ width: "16.66%", textAlign: "center" }}>
        <Image
          src={`/icons/${classification}.png`}
          alt={classification}
          width={20}
          height={20}
        />
      </Grid>
      <Grid sx={{ width: "16.66%", textAlign: "center" }}>
        <Typography sx={{ fontWeight: "bold" }}>{blackNb}</Typography>
      </Grid>
    </Grid>
  );
}
