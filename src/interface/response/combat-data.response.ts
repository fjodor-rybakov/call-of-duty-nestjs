export interface All {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  objectiveDestroyedVehicleMedium: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveMunitionsBoxTeammateUsed: number;
  objectiveBrDownEnemyCircle4: number;
  objectiveBrDownEnemyCircle3: number;
  objectiveBrDownEnemyCircle2: number;
  objectiveDestroyedVehicleHeavy: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  objectiveMedalScoreSsKillTomaStrike: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface Br_mini_miniroyale {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveBrDownEnemyCircle4: number;
  objectiveBrDownEnemyCircle3: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface Br_brtrio {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  objectiveDestroyedVehicleMedium: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveMunitionsBoxTeammateUsed: number;
  objectiveBrDownEnemyCircle4: number;
  objectiveBrDownEnemyCircle3: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface Br_dmz_plnbld {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  objectiveDestroyedVehicleMedium: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  kdRatio: number;
  objectiveBrMissionPickupTablet: number;
  scorePerGame: number;
  timePlayed: number;
  objectiveMedalScoreSsKillTomaStrike: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface Br_brquad {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveMunitionsBoxTeammateUsed: number;
  objectiveBrDownEnemyCircle3: number;
  objectiveBrDownEnemyCircle2: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  objectiveReviver: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface Br_brduo {
  kills: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  wallBangs: number;
  avgLifeTime: number;
  score: number;
  headshots: number;
  assists: number;
  killsPerGame: number;
  objectiveDestroyedVehicleMedium: number;
  scorePerMinute: number;
  distanceTraveled: number;
  deaths: number;
  objectiveDestroyedVehicleHeavy: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveReviver: number;
  scorePerGame: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  headshotPercentage: number;
  executions: number;
  matchesPlayed: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  damageDone: number;
  damageTaken: number;
}

export interface Summary {
  all: All;
  br_mini_miniroyale: Br_mini_miniroyale;
  br_brtrios: Br_brtrio;
  br_dmz_plnbld: Br_dmz_plnbld;
  br_brquads: Br_brquad;
  br_brduos: Br_brduo;
}

export interface PlayerStat {
  kills: number;
  medalXp: number;
  objectiveTeamWiped: number;
  objectiveLastStandKill: number;
  matchXp: number;
  scoreXp: number;
  wallBangs: number;
  score: number;
  totalXp: number;
  headshots: number;
  assists: number;
  challengeXp: number;
  rank: number;
  scorePerMinute: number;
  distanceTraveled: number;
  teamSurvivalTime: number;
  deaths: number;
  objectiveBrDownEnemyCircle3: number;
  kdRatio: number;
  objectiveBrDownEnemyCircle2: number;
  objectiveBrDownEnemyCircle1: number;
  objectiveBrMissionPickupTablet: number;
  bonusXp: number;
  objectiveReviver: number;
  objectiveBrKioskBuy: number;
  gulagDeaths: number;
  timePlayed: number;
  executions: number;
  gulagKills: number;
  nearmisses: number;
  objectiveBrCacheOpen: number;
  percentTimeMoving: number;
  miscXp: number;
  longestStreak: number;
  teamPlacement: number;
  damageDone: number;
  damageTaken: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Award {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MissionStatsByType {}

export interface BrMissionStat {
  missionsComplete: number;
  totalMissionXpEarned: number;
  totalMissionWeaponXpEarned: number;
  missionStatsByType: MissionStatsByType | any;
}

export interface Attachment {
  name: string;
  label?: any;
  image?: any;
  category?: any;
}

export interface PrimaryWeapon {
  name: string;
  label?: any;
  imageLoot?: any;
  imageIcon?: any;
  variant: string;
  attachments: Attachment[];
}

export interface SecondaryWeapon {
  name: string;
  label?: any;
  imageLoot?: any;
  imageIcon?: any;
  variant: string;
  attachments: Attachment[];
}

export interface Perk {
  name: string;
  label?: any;
  image?: any;
  imageMainUi?: any;
  imageProgression?: any;
}

export interface ExtraPerk {
  name: string;
  label?: any;
  image?: any;
  imageMainUi?: any;
  imageProgression?: any;
}

export interface Killstreak {
  name: string;
  label?: any;
}

export interface Tactical {
  name: string;
  label?: any;
  image?: any;
  imageLarge?: any;
  progressionImage?: any;
}

export interface Lethal {
  name: string;
  label?: any;
  image?: any;
  imageLarge?: any;
  progressionImage?: any;
}

export interface Loadout {
  primaryWeapon: PrimaryWeapon;
  secondaryWeapon: SecondaryWeapon;
  perks: Perk[];
  extraPerks: ExtraPerk[];
  killstreaks: Killstreak[];
  tactical: Tactical;
  lethal: Lethal;
}

export interface Player {
  team: string;
  rank: number;
  awards: Award | any;
  username: string;
  uno: string;
  clantag: string;
  brMissionStats: BrMissionStat;
  loadout: Loadout[];
}

export interface Matche {
  utcStartSeconds: number;
  utcEndSeconds: number;
  map: string;
  mode: string;
  matchID: string;
  duration: number;
  playlistName?: any;
  version: number;
  gameType: string;
  playerCount: number;
  playerStats: PlayerStat;
  player: Player;
  teamCount: number;
  rankedTeams?: any;
  draw: boolean;
  privateMatch: boolean;
}

export interface CombatDataResponse {
  summary: Summary;
  matches: Matche[];
}
