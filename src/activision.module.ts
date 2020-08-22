import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ActivisionModuleAsyncOption } from './interface/activision-module-async-option';
import { ACTIVISION_MODULE_OPTIONS } from './constant/activision.constant';
import { ActivisionOptionFactory } from './interface/activision-option-factory';
import { ActivisionModuleOption } from './interface/activision-module-option';
import { ActivisionService } from './activision.service';

@Module({})
export class ActivisionModule {
  static forRoot(options: ActivisionModuleOption): DynamicModule {
    return {
      module: ActivisionModule,
      providers: [
        ...ActivisionModule.createDiscordProvider(options)
      ],
      exports: [ActivisionService]
    };
  }

  static forRootAsync(options: ActivisionModuleAsyncOption): DynamicModule {
    const connectionProvider = {
      provide: ActivisionService,
      useFactory: async (
        ActivisionModuleOption: ActivisionModuleOption,
      ): Promise<ActivisionService> => {
        return new ActivisionService(ActivisionModuleOption);
      },
      inject: [ACTIVISION_MODULE_OPTIONS],
    };
    return {
      module: ActivisionModule,
      imports: options.imports || [],
      providers: [
        ActivisionService,
        this.createConfigAsyncProviders(options),
        connectionProvider
      ],
      exports: [ActivisionService]
    };
  }

  private static createDiscordProvider(
    options: ActivisionModuleOption,
  ): Provider[] {
    return [
      {
        provide: ACTIVISION_MODULE_OPTIONS,
        useValue: options || {},
      },
      {
        provide: ActivisionService,
        useValue: new ActivisionService(options)
      },
    ];
  }

  private static createConfigAsyncProviders(
    options: ActivisionModuleAsyncOption,
  ): Provider {
    if (options) {
      if (options.useFactory) {
        return {
          provide: ACTIVISION_MODULE_OPTIONS,
          useFactory: options.useFactory,
          inject: options.inject || [],
        };
      } else {
        // For useClass and useExisting...
        return {
          provide: ACTIVISION_MODULE_OPTIONS,
          useFactory: async (optionsFactory: ActivisionOptionFactory): Promise<ActivisionModuleOption> =>
            await optionsFactory.createActivisionOptions(),
          inject: [options.useExisting || options.useClass],
        };
      }
    } else {
      return {
        provide: ACTIVISION_MODULE_OPTIONS,
        useValue: {},
      };
    }
  }
}
