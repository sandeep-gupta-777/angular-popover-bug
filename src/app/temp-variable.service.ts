import { Injectable } from '@angular/core';

@Injectable()
export class TempVariableService {
  public reportRowClicked;
  static firstQuestionListForNewArticle:string[];
  static curationIds:number[];
  constructor() { }
}