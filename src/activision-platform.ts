import * as ActivisionAPI from 'call-of-duty-api';
import { ActivisionPlatformList } from './interface/activision-platform-list';

export const platform: ActivisionPlatformList = ActivisionAPI().platforms;
