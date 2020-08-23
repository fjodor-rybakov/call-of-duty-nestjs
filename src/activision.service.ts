import * as ActivisionAPI from 'call-of-duty-api';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ActivisionModuleOption } from './interface/activision-module-option';
import { ActivisionMwDataOptions } from './interface/activision-mw-data-options';
import { MwDataResponse } from './interface/response/mw-data.response';
import { CombatDataResponse } from './interface/response/combat-data.response';
import { BattleDataResponse } from './interface/response/battle-data.response';

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
  ): Promise<CombatDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWcombatmp(playerName);
  }

  public MWcombatwz(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<CombatDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWcombatwz(playerName);
  }

  public MWmp(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<MwDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWmp(playerName);
  }

  public MWstats(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<MwDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWstats(playerName);
  }

  public MWBattleData(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<BattleDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWBattleData(playerName);
  }
}
