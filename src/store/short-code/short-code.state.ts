import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  SetShortCodeAction,
} from './short-code.actions';
import {Injectable} from '@angular/core';
import {tap} from 'rxjs';
import {HttpApiService} from '../../app/http-api.service';
import produce from 'immer';

export interface ShortCodeStateModel {
  url: string,
  shortCode: string
}

@State<ShortCodeStateModel>({
  name: 'shortCode',
  defaults: {
    url: '',
    shortCode: '',
  }
})

@Injectable()
export class ShortCodeState {

  constructor(private _apiService: HttpApiService) {
  }


  @Selector()
  public static getState(state: ShortCodeStateModel) {
    return state;
  }


  private static setInstanceState(state: ShortCodeStateModel): ShortCodeStateModel {
    return { ...state };
  }

  @Action(SetShortCodeAction)
  public add({ setState, dispatch }: StateContext<ShortCodeStateModel>, { payload }: SetShortCodeAction) {
    setState(ShortCodeState.setInstanceState(payload));


    return this._apiService.postShortCode(payload).pipe(
      tap(( code ) => {

      }),

    );


  }


}
