// import { Stack, Typography } from "@mui/material";
import { Match, Player } from "../model/Player";
import { useEffect, useState } from "react";
import axios from "axios";
import PlayerDetails from "./PlayerDetails";
import { Stack, Typography } from "@mui/material";

interface DataProps {
  data: Player;
}

export default function Home({ data }: DataProps) {
  const [selectedPlayerId, setSelectedPlayerId] = useState<number>();
  const [data1, setData1] = useState<Match[]>([]);

  const handlePlayerClick = (event: number) => {
    setSelectedPlayerId(event);
  };

  useEffect(() => {
    axios
      .get(`https://api.npoint.io/bc3f07c7442e85446788`)
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.error("Error fetching player matches:", error);
      });
  }, [selectedPlayerId]);

  return (
    <>
      <>
        <Stack
          direction={"row"}
          p={2}
          onClick={() => handlePlayerClick(data.id)}
          style={{ cursor: "pointer" }}
        >
          <img src={data.icon} alt={data.name} />
          <Typography p={5}>{data.name}</Typography>
        </Stack>
        <hr style={{ width: "100%" }} />
      </>
      {selectedPlayerId && (
        <PlayerDetails playerId={selectedPlayerId} matches={data1} />
      )}
    </>
  );
}
