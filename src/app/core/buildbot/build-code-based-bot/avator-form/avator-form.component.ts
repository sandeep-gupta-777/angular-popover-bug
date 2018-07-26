import {Component, Input, IterableDiffers, OnInit} from '@angular/core';
import {IAvatar, IAvatarList} from '../../../../../interfaces/bot-creation';
import {ObjectArrayCrudService} from '../../../../object-array-crud.service';
import {IBot} from '../../../interfaces/IBot';
import {Store} from '@ngxs/store';
import {SaveAvatorInfo} from '../../ngxs/buildbot.action';

@Component({
  selector: 'app-avator-form',
  templateUrl: './avator-form.component.html',
  styleUrls: ['./avator-form.component.scss']
})
export class AvatorFormComponent implements OnInit {

  @Input() bot:IBot;
  iterableDiffer;
  constructor(private _iterableDiffers: IterableDiffers, private store:Store) {
    this.iterableDiffer = this._iterableDiffers.find([]).create(null);
  }
  newAvator: IAvatar = {
    imageUrl:"",
    name:"",
    id:0
  };

  avatorList:{avator:IAvatar, editMode:boolean}[] = [];

  ngOnInit() {
    console.log(this.bot.avatars);
    this.avatorList = this.bot.avatars.map((value)=>{
      return {avator:value,editMode:false }
    });
    console.log(this.avatorList);
  }

  ngDoCheck() {
    let changes = this.iterableDiffer.diff(this.avatorList);
    if (changes) {
      let avatorListToBeSaved:IAvatar[] = this.avatorList.map((value)=>{
        return {...value.avator}
      });
      this.store.dispatch(new SaveAvatorInfo({data:{avatars:avatorListToBeSaved}}));
    }
  }



  addNewAvatorRow(){
    this.avatorList.push({
      editMode:true,
      avator:{
        imageUrl:'',
        name:'',
        id:0
      }
    })
  }

  createPrebuiltAvatarRow(){
    this.avatorList.push({
      editMode:false,
      avator:{
        imageUrl:'https://robohash.org/StarBot.png',
        name:'StarBot',
        id:0
      }
    })
  }

  saveAvatorRow(index:string){
    console.log(this.avatorList);
    this.avatorList[index].editMode =false;
    /*toggle edit mode*/
    /*make req to server*/
  }

  editRow(index:number){
    this.avatorList[index].editMode =true;
  }

    deleteAvatorRow(index:number){
    this.newAvator = {
      imageUrl:"",
      name:"",
      id:0
    };
    this.avatorList.splice(index,1);
    /*make request to server*/
  }

}
