import React from "react";
import Scoreboard from "./Scoreboard";
import data from "./schedule";

export default {
  title: "Scoreboard"
};

export const idle = () => <Scoreboard />;

const formatSeasonRecord = team =>
  `${team.leagueRecord.wins}-${team.leagueRecord.losses}-${team.leagueRecord.ot}`;

const formatGameStatus = game =>
  `${game.status.abstractGameState}${game.linescore.hasShootout ? "/SO" : ""}`;

export const stack = () => (
  <div>
    {data.dates[0].games.map(game => (
      <Scoreboard
        homeTeamName={game.teams.home.team.teamName}
        homeTeamScore={game.teams.home.score}
        homeTeamSeasonRecord={formatSeasonRecord(game.teams.home)}
        homeTeamLogo="https://via.placeholder.com/57"
        awayTeamName={game.teams.away.team.teamName}
        awayTeamScore={game.teams.away.score}
        awayTeamSeasonRecord={formatSeasonRecord(game.teams.away)}
        awayTeamLogo="https://via.placeholder.com/57"
        gameStatus={formatGameStatus(game)}
      />
    ))}
  </div>
);
