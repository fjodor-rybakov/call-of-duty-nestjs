import { ActivisionModuleOption } from './activision-module-option';

export interface ActivisionOptionFactory {
  createActivisionOptions(): Promise<ActivisionModuleOption> | ActivisionModuleOption;
}
