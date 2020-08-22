import * as ActivisionAPI from 'call-of-duty-api';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ActivisionModuleOption } from './interface/activision-module-option';
import { ActivisionMwDataOptions } from './interface/activision-mw-data-options';
import { ActivisionMwBattleDataResponse } from './interface/response/activision-mw-battle-data-response';
import { ActivisionMwStatsResponse } from './interface/response/activision-mw-stats-response';
import { ActivisionMwCombatDataResponse } from './interface/response/activision-mw-combat-data-response';

@Injectable()
export class ActivisionService implements OnApplicationBootstrap {
  constructor(
    private readonly options: ActivisionModuleOption
  ) {
  }

  async onApplicationBootstrap(): Promise<void> {
    const {login, password} = this.options;
    await ActivisionAPI().login(login, password);
  }

  public MWcombatmp(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<ActivisionMwCombatDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWcombatmp(playerName);
  }

  public MWcombatwz(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<ActivisionMwCombatDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWcombatwz(playerName);
  }

  public MWmp(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<ActivisionMwStatsResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWmp(playerName);
  }

  public MWstats(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<ActivisionMwStatsResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWstats(playerName);
  }

  public MWBattleData(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<ActivisionMwBattleDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWBattleData(playerName);
  }
}
