import { ModuleMetadata, Type } from '@nestjs/common';
import { ActivisionOptionFactory } from './activision-option-factory';
import { ActivisionModuleOption } from './activision-module-option';

export interface ActivisionModuleAsyncOption extends Pick<ModuleMetadata, 'imports'> {
  useExisting?: Type<ActivisionOptionFactory>;
  useClass?: Type<ActivisionOptionFactory>;
  useFactory?: (...args: any[]) => Promise<ActivisionModuleOption> | ActivisionModuleOption;
  inject?: any[];
}
