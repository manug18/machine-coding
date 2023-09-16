import { useEffect, useState } from "react";
import axios from "axios";
import { Match, Player } from "../model/Player";
import { fetchData } from "../services/BaseFile";
import { Stack, Typography } from "@mui/material";
interface DataProps {
  playerId: number;
  matches: Match[];
}

function PlayerDetails({ playerId, matches }: DataProps) {
  const [playerData, setPlayerData] = useState<Player[]>([]);
  useEffect(() => {
    fetchData()
      .then((players) => {
        setPlayerData(players.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const playerMatches = matches.filter(
    (match) => match.player1.id === playerId || match.player2.id === playerId
  );
  const getPlayerName = (playerId: number) => {
    const player = playerData.find((player) => player.id === playerId);
    return player ? player.name : "Unknown Player";
  };
  const getRowBackgroundColor = (match: Match) => {
    const sameScore = match.player1.score === match.player2.score;

    if (sameScore) {
      return "white";
    } else {
      const player1Won =
        match.player1.id === playerId &&
        match.player1.score > match.player2.score;
      const player2Won =
        match.player2.id === playerId &&
        match.player2.score > match.player1.score;

      if (player1Won || player2Won) {
        return "green";
      } else {
        return "red";
      }
    }
  };
  return (
    <div>
      <h2>Player Matches</h2>
      <ul>
        {playerMatches.map((match) => (
          <li key={match.match}>
            <ul>
              <Stack
                direction={"row"}
                style={{
                  backgroundColor: getRowBackgroundColor(match),
                  padding: "10px",
                  color: "black",
                }}
                m={1}
              >
                <Typography p={2}>{getPlayerName(match.player1.id)}</Typography>
                <Typography p={2}>
                  {match.player1.score}- {match.player2.score}
                </Typography>
                <Typography p={2}>{getPlayerName(match.player2.id)}</Typography>
              </Stack>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerDetails;
