import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild,
  ElementRef,
  QueryList, ViewChildren
} from '@angular/core';
import {ConstantsService} from 'src/app/constants.service';
import {ServerService} from 'src/app/server.service';
import {UtilityService} from 'src/app/utility.service';
import {IBot} from 'src/app/core/interfaces/IBot';
import {IHeaderData} from 'src/interfaces/header-data';
import {ActivatedRoute, Router} from '@angular/router';
import {IArticleItem, ICategoryMappingItem, ICorpus} from 'src/app/core/interfaces/faqbots';
import {MatDialog} from '@angular/material';
import {DomService} from '../../../../dom.service';
import {EAllActions, ERoleName} from 'src/app/typings/enum';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';
import {IUser} from 'src/app/core/interfaces/user';
import {IAuthState} from 'src/app/auth/ngxs/auth.state';
import { PermissionService } from 'src/app/permission.service';

@Component({
  selector: 'app-edit-and-view-articles',
  templateUrl: './edit-and-view-articles.component.html',
  styleUrls: ['./edit-and-view-articles.component.scss']
})
export class EditAndViewArticlesComponent implements OnInit {

  @ViewChild('questionListContainer') questionListContainer: ElementRef;
  @ViewChildren('questionTextArea') questionTextArea: QueryList<ElementRef>;

  constructor(
    private constantsService: ConstantsService,
    private serverService: ServerService,
    private utilityService: UtilityService,
    private permissionService: PermissionService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private matDialog: MatDialog,
  ) {
  }

  @Input() bot: IBot;
  _article:IArticleItem;
  @Input() set article(value: IArticleItem){

    this.articleData = this.utilityService.createDeepClone(value);
    this._article = value;
  };
  @Input() category_mapping: ICategoryMappingItem[];
  @Input() corpus: ICorpus;
  articleData: IArticleItem;
  @Select() loggeduser$: Observable<{ user: IUser }>;
  @Output() goBack = new EventEmitter();
  @Output() corpusNeedsReload = new EventEmitter();
  @Output() saveAndTrain = new EventEmitter();
  @Output() updateArticle = new EventEmitter();
  @Output() deleteArticle = new EventEmitter();
  @Output() trainAndUpdate = new EventEmitter();
  userRole;
  myEAllActions = EAllActions;
  myERoleName = ERoleName;
  article_id: number;
  currentModal: string;
  JSON = JSON;
  dialogRefWrapper = {ref: null};

  ngOnInit() {

    this.loggeduser$
      .subscribe((value: IAuthState) => {
        if (value && value.user != null) {
          this.userRole = value.user.role.name;
        }
      });

  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  deleteQustionWithId(index: number) {
    if (!(this.userRole === ERoleName.Analyst || this.userRole === ERoleName.Tester)) {
      if (index > -1) {
        if (this.articleData.questions.length == 1) {
          this.utilityService.showErrorToaster('Atleast one question is needed for an article');
        } else {
          this.articleData.questions.splice(index, 1);
        }
      }
    }
  }

  addNewQuestion() {
    this.articleData.questions.push('');
    setTimeout(() => {
      let textareaArr = this.questionTextArea.toArray();
      let lastChild = textareaArr[textareaArr.length - 1];
      lastChild.nativeElement.focus();
      DomService.scrollToTop(this.questionListContainer.nativeElement);
    });
  }

  goBackToArticle() {
    this.goBack.emit();
  }

  updateArticleClicked() {
    if (this.corpus.state == 'training') {
      this.trainingIsGoingOn();
    }
    else {
      this.updateArticle.emit(this.articleData);
    }
  }


  deleteArticleClicked() {
    if (this.corpus.state == 'training') {
      this.trainingIsGoingOn();
    }
    else {


      this.deleteArticle.emit(this.articleData);
    }
  }

  updateAndTrain() {
    if (this.corpus.state == 'training') {
      this.trainingIsGoingOn();
    }
    else {

      this.trainAndUpdate.emit(this.articleData);
    }
  }

  changeArticalCategory(formValue) {
    return new Promise((resolve) => {
      const headerData: IHeaderData = {
        'bot-access-token': this.bot.bot_access_token
      };
      if (this.articleData.section_id) {
        let body = {
          'old_category': this._article.category_id,
          'section_id': [this.articleData.section_id]
        };
        if (formValue.inputType == 'existing') {
          body['new_category'] = formValue.existingCategoryName;
          const headerData: IHeaderData = {
            'bot-access-token': this.bot.bot_access_token
          };
          const url = this.constantsService.changeSectionCategoryUrl();
          this.serverService.makePostReq<any>({headerData, body, url})
            .subscribe((value) => {
              this.category_mapping = value.category_mapping;
              this.category_mapping = [...this.category_mapping];
              this._article.category_id = value.new_category;
              this.articleData.category_id = value.new_category;
              this.utilityService.showSuccessToaster('Category succesfully updated');
              resolve(value);
            });
        }
        if (formValue.inputType == 'new') {
          body['category_name'] = formValue.newCategoryName;
          const headerData: IHeaderData = {
            'bot-access-token': this.bot.bot_access_token
          };
          const url = this.constantsService.changeSectionCategoryWithNewCategoryUrl();
          this.serverService.makePostReq<any>({headerData, body, url})
            .subscribe((value) => {
              this.category_mapping = value.category_mapping;
              this.category_mapping = [...this.category_mapping];
              this._article.category_id = value.new_category;
              this.articleData.category_id = value.new_category;
              this.utilityService.showSuccessToaster('Category succesfully updated');
              resolve(value);
            });

        }
      } else {
        if (formValue.inputType == 'existing') {
          this.articleData['category_id'] = formValue.existingCategoryName;
          resolve();
        }
        if (formValue.inputType == 'new') {
          const body = {
            'category_name': formValue.newCategoryName
          };
          const url = this.constantsService.createCategoryUrl();
          this.serverService.makePostReq<any>({headerData, body, url})
            .subscribe((value) => {
              this.articleData['category_id'] = value.new_category.category_id;
              this.category_mapping.push(value.new_category);
              resolve(value);
            });
        }
      }
    });

  }

  openCategoryModifyModal(template: TemplateRef<any>) {
    if (this.corpus.state == 'training') {
      this.trainingIsGoingOn();
    }
    else {
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    }
  }

  trainingIsGoingOn() {
    this.utilityService.showErrorToaster('Bot is training so the action can not be performed.');
  }

  skipConformationModalSubmitted() {
    if (this.currentModal == 'saveNTrain') {
      this.updateAndTrain();
    }
    if (this.currentModal == 'save') {
      this.updateArticleClicked();
    }
  }

  globalConformationModalSubmitted(formValue) {

    if (this.currentModal == 'saveNTrain') {
      this.updateAndTrainModalSubmitted(formValue);
    }
    if (this.currentModal == 'save') {
      this.updateArticleClickedModalsubmitted(formValue);
    }
  }

  updateArticleClickedModal(template: TemplateRef<any>) {

    if (this.corpus.state == 'training') {
      this.trainingIsGoingOn();
    }
    else if (this.articleData.category_id == 'unassigned' && !this.articleData.section_id) {
      this.currentModal = 'save';
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    }
    else {
      this.updateArticleClicked();
    }
  }

  updateArticleClickedModalsubmitted(formValue) {

    this.changeArticalCategory(formValue)
      .then(() => {
        this.updateArticleClicked();
      });

  }

  updateAndTrainModal(template: TemplateRef<any>) {
    if (this.corpus.state == 'training') {
      this.trainingIsGoingOn();
    }
    else if (this.articleData.category_id == 'unassigned' && !this.articleData.section_id) {
      this.currentModal = 'saveNTrain';
      this.utilityService.openPrimaryModal(template, this.matDialog, this.dialogRefWrapper);
    }
    else {
      this.updateAndTrain();
    }
  }

  updateAndTrainModalSubmitted(formValue) {
    this.changeArticalCategory(formValue)
      .then(() => {
        this.updateAndTrain();
      });

  }

  isThisPermissionGiven(tabNameInfo){
    let isDenied = true;
    // ;


    if (Array.isArray(tabNameInfo)) {
      tabNameInfo.forEach((tab) => {
        isDenied = isDenied && this.permissionService.isTabAccessDenied(tab);
      });
    } else {
      isDenied = this.permissionService.isTabAccessDenied(tabNameInfo); //false;//this.constantsService.isTabAccessDenied(tabName);

    }
    if (!isDenied) {
      return true;
    } else {
      return false;
    }
  
  }
}
