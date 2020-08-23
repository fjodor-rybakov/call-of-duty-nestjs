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
    const {login, password, ratelimit} = this.options;
    await ActivisionAPI({ ratelimit }).login(login, password);
  }

  /**
   * Get combat multiplayer data
   */
  public MWcombatmp(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<CombatDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWcombatmp(playerName);
  }

  /**
   * Get combat warzone data
   */
  public MWcombatwz(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<CombatDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWcombatwz(playerName);
  }

  /**
   * Get multiplayer stats
   */
  public MWmp(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<MwDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWmp(playerName);
  }

  /**
   * Get all stats
   */
  public MWstats(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<MwDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWstats(playerName);
  }

  /**
   * Get battle data
   */
  public MWBattleData(
    activisionMwDataOptions: ActivisionMwDataOptions
  ): Promise<BattleDataResponse> {
    const {platform, playerName} = activisionMwDataOptions;
    return ActivisionAPI({platform}).MWBattleData(playerName);
  }
}
