import { useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FullReview from "@/sections/analysis/FullReview";

export default function ReviewPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  useEffect(() => {
    if (isMobile) {
      router.replace("/review/summary");
    }
  }, [isMobile, router]);

  // Render the full review for desktop or when coming back from summary
  return <FullReview />;
}
