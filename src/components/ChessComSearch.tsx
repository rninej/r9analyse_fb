import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useAtom } from "jotai";
import { chessComUsernameSearchAtom } from "@/sections/analysis/states";

export default function ChessComSearch() {
  const [username, setUsername] = useState("");
  const [watchingUsername, setWatchingUsername] = useAtom(
    chessComUsernameSearchAtom
  );

  const handleSearch = () => {
    if (username.trim()) {
      setWatchingUsername(username.trim());
    }
  };

  const handleStop = () => {
    setWatchingUsername("");
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {watchingUsername ? (
        <Button variant="contained" onClick={handleStop} sx={{ height: "35px" }}>
          Watching {watchingUsername}
        </Button>
      ) : (
        <>
          <TextField
            label="Chess.com Username"
            variant="outlined"
            size="small"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mr: 1, ".MuiInputBase-root": { height: "35px" } }}
          />
          <Button
            variant="contained"
            onClick={handleSearch}
            sx={{ height: "35px" }}
          >
            Watch
          </Button>
        </>
      )}
    </Box>
  );
}
