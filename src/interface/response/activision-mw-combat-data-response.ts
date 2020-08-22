import { ActivisionBattleTypeData } from './activision-battle-type-data';
import { ActivisionMatch } from './activision-match';

export class ActivisionMwCombatDataResponse {
  summary: {
    all: ActivisionBattleTypeData;
    br_mini_miniroyale: ActivisionBattleTypeData;
    br_brtrios: ActivisionBattleTypeData;
    br_dmz_plnbld: ActivisionBattleTypeData;
    br_brquads: ActivisionBattleTypeData;
    br_brduos: ActivisionBattleTypeData;
  };
  matches: ActivisionMatch[];
}
