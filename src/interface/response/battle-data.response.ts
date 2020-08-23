export interface Br {
  wins: number;
  kills: number;
  kdRatio: number;
  downs: number;
  topTwentyFive: number;
  topTen: number;
  contracts: number;
  revives: number;
  topFive: number;
  score: number;
  timePlayed: number;
  gamesPlayed: number;
  tokens: number;
  scorePerMinute: number;
  cash: number;
  deaths: number;
  title: string;
}

export interface Br_dmz {
  wins: number;
  kills: number;
  kdRatio: number;
  downs: number;
  topTwentyFive: number;
  topTen: number;
  contracts: number;
  revives: number;
  topFive: number;
  score: number;
  timePlayed: number;
  gamesPlayed: number;
  tokens: number;
  scorePerMinute: number;
  cash: number;
  deaths: number;
  title: string;
}

export interface Br_all {
  wins: number;
  kills: number;
  kdRatio: number;
  downs: number;
  topTwentyFive: number;
  topTen: number;
  contracts: number;
  revives: number;
  topFive: number;
  score: number;
  timePlayed: number;
  gamesPlayed: number;
  tokens: number;
  scorePerMinute: number;
  cash: number;
  deaths: number;
  title: string;
}

export interface BattleDataResponse {
  br: Br;
  br_dmz: Br_dmz;
  br_all: Br_all;
}
