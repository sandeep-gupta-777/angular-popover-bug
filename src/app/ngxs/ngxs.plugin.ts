// import {getActionTypeFromInstance} from '@ngxs/store';
// import {ConstantsService} from '../constants.service';
// import {tap} from 'rxjs/operators';

// /*
// * This plugin will
// * 1. Store the state in localstorage, after every action
// * 2. After page is refreshed, read from localstorage data and write that into state
// * */
// export function persistPlugin(state, action, next) {

//   LoggingService.log('entering plugin=================');
//   // After every refresh first action fired will be @@INIT
//   if (getActionTypeFromInstance(action) === '@@INIT') {

//     // reading from local storage and writing into state, when app is refreshed
//     let storedStateStr = localStorage.getItem('LOCALSTORAGE_APP_STATE');
//     LoggingService.log('ngxs init');
//     let storedState = JSON.parse(storedStateStr);
//     state = {...state, ...storedState};
//     ConstantsService.state = state;
//     return next(state, action);
//   }

//   return next(state, action).pipe(tap(result => {
//     ConstantsService.state = state;
//     LoggingService.log('Action happened!', result);
//     localStorage.setItem('LOCALSTORAGE_APP_STATE', JSON.stringify(result));
//   }));
// }
