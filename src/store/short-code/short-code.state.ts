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
import {MatSnackBar} from '@angular/material/snack-bar';
import {ShortUrlComponent} from '../../app/short-url/short-url.component';

export interface ShortCodeUrl {
  url?: string,
  shortCode: string
}

export interface ShortCodeStateModel {
  url?: string,
  shortCode: string
  items?: ShortCodeUrl[]
}

@State<ShortCodeStateModel>({
  name: 'shortCode',
  defaults: {
    url: '',
    shortCode: '',
    items: []
  }
})

@Injectable()
export class ShortCodeState {

  durationInSeconds = 5;
  constructor(
    private _apiService: HttpApiService,
    private _snackBar: MatSnackBar) {
  }


  @Selector()
  public static getState(state: ShortCodeStateModel) {
    return state;
  }


  @Selector()
  public static getItems(state: ShortCodeStateModel) {
    return state.items;
  }

  @Selector()
  public static getShortCode(state: ShortCodeUrl) {
    return state.shortCode;
  }

  @Selector()
  public static getUrl(state: ShortCodeStateModel) {
    return state.url;
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
        this._snackBar.open(err.statusText, err.status);
        return of(err);
      })
    );
  }

  @Action(ListShortCodeAction)
  public list({ setState, patchState, dispatch }: StateContext<ShortCodeStateModel>, {}: ListShortCodeAction) {
    return this._apiService.listShortCode().pipe(
      tap(( data ) => {
        console.log(data);
        setState(
          produce((draft: ShortCodeStateModel) => {
            draft.items = data;
          })
        );
      }),

      catchError(err => {
        console.log(err.statusText, err.status);
        this._snackBar.open(err.statusText, err.status);
        return of(err);
      })
    );
  }

  @Action(GetShortCodeAction)
  public getShortCode({ setState, patchState, dispatch }: StateContext<ShortCodeStateModel>, {payload}: GetShortCodeAction) {
    console.log(payload);
    return this._apiService.sendUrl(payload).pipe(
      tap(( data ) => {
        console.log(data);
        setState(
          produce((draft: ShortCodeUrl) => {
            draft.shortCode = data.shortCode;
          })
        );
      }),
      catchError(err => {
        console.log(err.statusText, err.status);

        this._snackBar.open(err.statusText, err.status);
        return of(err);

      })
    );
  }



  @Action(GetUrlAction)
  public getUrl({ setState, patchState, dispatch }: StateContext<ShortCodeStateModel>, {payload}: GetUrlAction) {
    return this._apiService.sendShortCode(payload).pipe(
      tap(( data ) => {
        console.log(data);
        setState(
          produce((draft: ShortCodeUrl) => {
            draft.url = data.url;
          })
        );
      }),
      catchError(err => {
        console.log(err.statusText, err.status);
        this._snackBar.open(err.statusText, err.status);
        return of(err);
      })
    );
  }



}
