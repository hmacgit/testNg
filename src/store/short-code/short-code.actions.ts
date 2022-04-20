import {ShortCodeStateModel} from './short-code.state';

const SET_SHORT_CODE = '[ShortCode] Set item';
const LIST_SHORT_CODE = '[ShortCode] List item';
const GET_SHORT_CODE = '[ShortCode] Get Short Code';
const GET_URL = '[ShortCode] Get URL';


export class SetShortCodeAction {
  public static readonly type = SET_SHORT_CODE;
  constructor(public payload: ShortCodeStateModel) {}
}

export class ListShortCodeAction {
  public static readonly type = LIST_SHORT_CODE;
}

export class GetShortCodeAction {
  public static readonly type = GET_SHORT_CODE;
  constructor(public payload: string) {}
}

export class GetUrlAction {
  public static readonly type = GET_URL;
  constructor(public payload: string) {}
}