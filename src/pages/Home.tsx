import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Player } from "../model/Player";
import { fetchData } from "../services/BaseFile";
import PlayerList from "../components/PlayerList";

export default function Home() {
  const [playerData, setPlayerData] = useState<Player[]>([]);
  useEffect(() => {
    // Fetch currencies automatically when the page loads
    fetchData()
      .then((players) => {
        setPlayerData(players.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <Stack>
      <Typography textAlign={"center"}>Star War Blasters Tournament</Typography>
      <Typography>Points Table</Typography>

      <ul>
        {playerData.map((player) => (
          //   <li key={player.id}>
          //     <img src={player.icon} alt={player.name} />
          //     <span>{player.name}</span>
          //   </li>
          <PlayerList data={player} />
        ))}
      </ul>
    </Stack>
  );
}
