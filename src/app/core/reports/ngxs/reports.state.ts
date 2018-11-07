import {Action, Selector, State, StateContext} from '@ngxs/store';
import {SetCurrentEditedReportAction, SetReportFormAction, } from './reports.action';
import {IReportItem} from '../../../../interfaces/report';


export interface ReportStateModel {
  formData?: IReportItem;
  currentEditedReport: IReportItem;
}

@State<ReportStateModel>({
  name: 'reportItem',
  defaults: {
    formData: null,
    currentEditedReport: null
  }
})

//same as reducer
export class ReportsStateReducer {

  @Action(SetCurrentEditedReportAction)
  setCodebasedBotList({patchState, setState, getState, dispatch}: StateContext<ReportStateModel>, {payload}: SetCurrentEditedReportAction) {
    patchState({formData: payload.reportItem});
  }

  @Action(SetCurrentEditedReportAction)
  setCurrentEditedReportAction({patchState, setState, getState, dispatch}: StateContext<ReportStateModel>, {payload}: SetCurrentEditedReportAction) {
    patchState({currentEditedReport: payload.reportItem});
  }

}

