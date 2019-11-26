import {Injectable, isDevMode} from '@angular/core';

export enum ELogType {
  log= 'log',
  table= 'table',
  error= 'error',
  info= 'info',
  trace= 'trace',
  group= 'group',
  warn= 'warn',
}
@Injectable()
export class LoggingService {

  constructor() { }

  static log(item: any, logType= ELogType.log) {
    if (!isDevMode()) { return; }
    console.info(item);
    // if (!isDevMode()) { return; }
    // (<any>console)[logType](item);
    // console.groupEnd();
  }

  static logMultiple(...items: any[]) {
    if (!isDevMode()) { return; }
    // console.log(items);
  }

  static error(item: any) {
    if (!isDevMode()) { return; }
    console.error('LOGGING SERVICE::', item);
  }

  static group(items: any[]) {
    console.group();
    items.forEach((item) => LoggingService.log(item));
    console.groupEnd();
  }

}
