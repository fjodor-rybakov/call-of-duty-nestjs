import { LifetimeResponse } from './lifetime.response';

export interface MwDataResponse {
  title: string;
  platform: string;
  username: string;
  type: string;
  level: number;
  maxLevel: number;
  levelXpRemainder: number;
  levelXpGained: number;
  prestige: number;
  prestigeId: number;
  maxPrestige: number;
  totalXp: number;
  paragonRank: number;
  paragonId: number;
  s: number;
  p: number;
  lifetime: LifetimeResponse;
  weekly: {
    all: {
      properties: any
    };
    mode: any;
    map: any
  };
  engagement: any
}

