import { ActivisionMwMpResponse } from './activision-mw-mp-response';

export interface ActivisionMwStatsResponse {
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
  lifetime: ActivisionMwMpResponse;
  weekly: {
    all: {
      properties: any
    };
    mode: Record<string, any> | any;
    map: Record<string, any> | any
  };
  engagement: any
}

