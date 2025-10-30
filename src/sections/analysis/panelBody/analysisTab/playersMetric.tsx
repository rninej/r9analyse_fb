import { Box, Stack, Typography } from "@mui/material";

interface Props {
  title: string;
  whiteValue: string | number;
  blackValue: string | number;
}

export default function PlayersMetric({
  title,
  whiteValue,
  blackValue,
}: Props) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        my: 2,
        px: 2,
        py: 1,
        backgroundColor: "#3a3a3a",
        borderRadius: "8px",
      }}
    >
      <ValueBlock value={whiteValue} />
      <Typography sx={{ fontWeight: 500, fontSize: "1rem", color: "#ffffff" }}>
        {title}
      </Typography>
      <ValueBlock value={blackValue} />
    </Stack>
  );
}

const ValueBlock = ({ value }: { value: string | number }) => {
  return (
    <Box
      sx={{
        p: 1.5,
        borderRadius: "6px",
        backgroundColor: "#4a4a4a",
        minWidth: "80px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", fontSize: "1.1rem", color: "#ffffff" }}
      >
        {value}
      </Typography>
    </Box>
  );
};
