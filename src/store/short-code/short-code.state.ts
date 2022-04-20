import { State, Action, Selector, StateContext } from '@ngxs/store';
import {
  GetShortCodeAction,
  GetUrlAction,
  ListShortCodeAction,
  SetShortCodeAction,
} from './short-code.actions';
import {Injectable} from '@angular/core';
import {
  catchError,
  of,
  tap
} from 'rxjs';
import {HttpApiService} from '../../app/http-api.service';
import produce from 'immer';

export interface ShortCodeStateModel {
  url?: string,
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
        console.log(code);
      }),
      catchError(err => {
        console.log('shortcode error', err.toString());
        return of(err);
      })
    );
  }

  @Action(ListShortCodeAction)
  public list({ setState, patchState, dispatch }: StateContext<ShortCodeStateModel>, {}: ListShortCodeAction) {
    //patchState(ShortCodeState.setInstanceState(payload));
    return this._apiService.listShortCode().pipe(
      tap(( data ) => {
        console.log(data);
      }),
      catchError(err => {
        console.log(err.statusText, err.status);
        return of(err);
      })
    );
  }

  @Action(GetShortCodeAction)
  public getShortCode({ setState, patchState, dispatch }: StateContext<ShortCodeStateModel>, {payload}: GetShortCodeAction) {
    //patchState(ShortCodeState.setInstanceState(payload));
    return this._apiService.getShortCode(payload).pipe(
      tap(( data ) => {
        console.log(data);
      }),
      catchError(err => {
        console.log(err.statusText, err.status);
        return of(err);
      })
    );
  }



  @Action(GetUrlAction)
  public getUrl({ setState, patchState, dispatch }: StateContext<ShortCodeStateModel>, {payload}: GetUrlAction) {
    //patchState(ShortCodeState.setInstanceState(payload));
    return this._apiService.getUrl(payload).pipe(
      tap(( data ) => {
        console.log(data);
      }),
      catchError(err => {
        console.log(err.statusText, err.status);
        return of(err);
      })
    );
  }




}
