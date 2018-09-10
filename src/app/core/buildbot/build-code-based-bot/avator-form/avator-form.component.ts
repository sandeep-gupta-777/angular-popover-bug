import {AfterViewInit, Component, EventEmitter, Input, IterableDiffers, OnInit, Output, ViewChild} from '@angular/core';
import {IAvatar, IAvatarList} from '../../../../../interfaces/bot-creation';
import {ObjectArrayCrudService} from '../../../../object-array-crud.service';
import {IBot} from '../../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {SaveAvatorInfo} from '../../ngxs/buildbot.action';
import {NgForm} from '@angular/forms';
import {UtilityService} from '../../../../utility.service';

@Component({
  selector: 'app-avator-form',
  templateUrl: './avator-form.component.html',
  styleUrls: ['./avator-form.component.scss']
})
export class AvatorFormComponent implements OnInit, AfterViewInit {

  _bot: IBot;
  @Input() set bot(_bot: IBot) {

    this._bot = _bot;
    // if(_bot) this.loadAvatorList();
  }

  @ViewChild('form') f: NgForm;
  @Output() datachanged$ = new EventEmitter<Partial<IBot>>();
  iterableDiffer;

  constructor(private _iterableDiffers: IterableDiffers, private store: Store, private utilityService: UtilityService) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }

  newAvator: IAvatar = {
    imageUrl: '',
    name: '',
    id: 0
  };

  avatorList: { avator: IAvatar, editMode: boolean }[] = [];
;

  ngOnInit() {
    this.loadAvatorList();
    debugger;
  }

  loadAvatorList() {
    this.avatorList = this._bot.avatars.map((value) => {
      return {avator: value, editMode: false};
    });
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.avatorList);
    if (changes) {
      // this.saveChangesInStore();
    }
  }

  saveChangesInStore() {
    let avatorListToBeSaved: IAvatar[] = this.avatorList.map((value) => {
      return {...value.avator};
    });
    let avatarValidationObj = {};
    avatarValidationObj['form_validation_avator'] = true;
    // avatarValidationObj['form_validation_avator'] = this.f && this.f.valid;//TODO: doesn't work
    for (let obj of avatorListToBeSaved) {
      if (!this.utilityService.areAllValesDefined(obj)) {
        avatarValidationObj['form_validation_avator'] = false;
      }
    }
    if (this.avatorList.length < 1) {
      avatarValidationObj['form_validation_avator'] = false;
    }
    this.datachanged$.emit({avatars: avatorListToBeSaved, ...avatarValidationObj});
  }


  //
  addNewAvatorRow() {
    this.avatorList.push({
      editMode: true,
      avator: {
        imageUrl: '',
        name: '',
        id: 0
      }
    });
  }

  createPrebuiltAvatarRow(empty?: boolean) {
    let newAvator;
    if (empty) {
      newAvator = {
        editMode: false,
        avator: {
          imageUrl: '',
          name: '',
          id: 0
        }
      };
    }
    else {

      newAvator = {
        editMode: false,
        avator: {
          imageUrl: this.utilityService.getRandomAvatorUrl(),
          name: 'StarBot',
          id: 0
        }
      };
    }
    this.avatorList.push(newAvator);
    this.avatorList = [...this.avatorList];
  }

  saveAvatorRow(index: string) {
    this.avatorList[index].editMode = false;
    /*toggle edit mode*/
    /*make req to server*/
  }

  editRow(index: number) {
    this.avatorList[index].editMode = true;
  }

  deleteAvator(index: number) {
    this.newAvator = {
      imageUrl: '',
      name: '',
      id: 0
    };
    this.avatorList.splice(index, 1);
    /*make request to server*/
  }

  ngAfterViewInit(): void {
    this.f.valueChanges.debounceTime(1000).subscribe((data: any) => {
      debugger;
      this.saveChangesInStore();
    });
  }

}
