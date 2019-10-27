import { Injectable } from '@angular/core';
import {IEntitiesItem} from '../../interfaces/mlBots';

@Injectable({
  providedIn: 'root'
})
export class MlService {

  static entityList: IEntitiesItem[];
  constructor() { }
}
