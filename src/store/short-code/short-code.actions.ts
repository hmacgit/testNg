import {ShortCodeStateModel} from './short-code.state';

const SET_SHORT_CODE = '[ShortCode] Set item';


export class SetShortCodeAction {
  public static readonly type = SET_SHORT_CODE;
  constructor(public payload: ShortCodeStateModel) { }
}