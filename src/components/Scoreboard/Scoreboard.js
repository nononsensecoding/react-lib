import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 114px;
  border: 1px solid #eee;
  box-sizing: border-box;
  padding: 0;
  display: flex;
  color: #262525;
  font-family: Helvetica, Arial, sans-serif;
  max-width: 960px;
`;

const Teams = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Team = styled.div`
  display: flex;
`;

const Logo = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
`;

const NameAndSeasonRecord = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const Name = styled.div`
  color: #999;
  padding-left: 10px;
`;

const SeasonRecord = styled.div`
  padding-left: 10px;
`;

const Score = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: ${({ isLosingTeam }) => (isLosingTeam ? "#999" : "#262525")};
  width: 50px;
`;

const GameStatus = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  font-size: 14px;
`;

const Scoreboard = ({
  homeTeamLogo,
  homeTeamName,
  homeTeamSeasonRecord,
  homeTeamScore,
  awayTeamLogo,
  awayTeamName,
  awayTeamSeasonRecord,
  awayTeamScore,
  gameStatus
}) => (
  <Container>
    <Teams>
      <Team>
        <Logo>
          <LogoImage src={awayTeamLogo} alt={`${awayTeamName} logo`} />
        </Logo>
        <NameAndSeasonRecord>
          <Name>{awayTeamName}</Name>
          <SeasonRecord>{awayTeamSeasonRecord}</SeasonRecord>
        </NameAndSeasonRecord>
        <Score isLosingTeam={homeTeamScore > awayTeamScore}>
          {awayTeamScore}
        </Score>
      </Team>
      <Team>
        <Logo>
          <LogoImage src={homeTeamLogo} alt={`${homeTeamName} logo`} />
        </Logo>
        <NameAndSeasonRecord>
          <Name>{homeTeamName}</Name>
          <SeasonRecord>{homeTeamSeasonRecord}</SeasonRecord>
        </NameAndSeasonRecord>
        <Score isLosingTeam={homeTeamScore < awayTeamScore}>
          {homeTeamScore}
        </Score>
      </Team>
    </Teams>
    <GameStatus>{gameStatus}</GameStatus>
  </Container>
);

export default Scoreboard;
