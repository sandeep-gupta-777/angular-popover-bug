import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SetReportFormAction, } from './reports.action';
import {IReportItem} from '../../../../interfaces/report';


export interface ReportStateModel {
  formData?: IReportItem;
}

@State<ReportStateModel>({
  name:'reportItem',
  defaults:{
    formData:null
  }
})

//same as reducer
export class ReportsStateReducer{

  @Action(SetReportFormAction)
  setCodebasedBotList({patchState, setState, getState,dispatch}:StateContext<ReportStateModel>, {payload} : SetReportFormAction){
    console.log("SetCodeBasedBotListAction");
    patchState({formData:payload.reportItem});
  }

}

