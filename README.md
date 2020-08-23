<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

NestJS package for Call Of Duty API

## Installation

```bash
$ npm install call-of-duty-nestjs
```
OR
```bash
$ yarn add call-of-duty-nestjs
```

## Overview
Configuration
```typescript
/*app.module.ts*/
import { ActivisionModule } from 'call-of-duty-nestjs';

@Module({
  imports: [ActivisionModule.forRoot({
    login: '<Activision account login>',
    password: '<Password for your account>',
    ratelimit: { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 } // Optional
  })]
})
export class AppModule {
}
```
Or async
```typescript
/*app.module.ts*/
import { ActivisionModule } from 'call-of-duty-nestjs';

@Module({
  imports: [ActivisionModule.forRootAsync({
    useFactory: () => ({
      login: '<Activision account login>',
      password: '<Password for your account>',
      ratelimit: { maxRequests: 2, perMilliseconds: 1000, maxRPS: 2 } // Optional
    })
  })]
})
export class AppModule {
}
```
Usage
```typescript
/*app.controller.ts*/

import { Injectable, Logger } from '@nestjs/common';
import { 
  ActivisionService,
  BattleDataResponse,
  MwDataResponse,
  CombatDataResponse
} from 'call-of-duty-nestjs';

@Injectable()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly activisionService: ActivisionService
  ) {
  }

  /**
   * Get combat multiplayer data
   */
  getMWBattleData(): Promise<BattleDataResponse> {
    return this.activisionService.MWBattleData({
      platform: '<Player platform>',
      playerName: '<Player name>'
    });
  }

  /**
   * Get combat warzone data
   */
  getMWstats(): Promise<MwDataResponse> {
    return this.activisionService.MWstats({
      platform: '<Player platform>',
      playerName: '<Player name>'
    });
  }
  
  /**
   * Get multiplayer stats
   */
  getMWmp(): Promise<MwDataResponse> {
    return this.activisionService.MWmp({
      platform: '<Player platform>',
      playerName: '<Player name>'
    });
  }
  
  /**
   * Get all stats
   */
  getMWcombatwz(): Promise<CombatDataResponse> {
    return this.activisionService.MWcombatwz({
      platform: '<Player platform>',
      playerName: '<Player name>'
    });
  }

  /**
   * Get battle data
   */
  getMWcombatmp(): Promise<CombatDataResponse> {
    return this.activisionService.MWcombatmp({
      platform: '<Player platform>',
      playerName: '<Player name>'
    });
  }
}
```

## License

  Nest is [MIT licensed](LICENSE).
