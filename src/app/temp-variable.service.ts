import { Injectable } from '@angular/core';

@Injectable()
export class TempVariableService {
  static firstQuestionListForNewArticle: string[];
  static curationIds: number[];
  public reportRowClicked;
  constructor() { }
}
