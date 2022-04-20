import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {shortURLConstant} from "../formConstants";
import {UserFormControlService} from "../user-form-control.service";
import {HttpApiService} from "../http-api.service";
import {Select, Store} from '@ngxs/store';
import {
  GetShortCodeAction,
  GetUrlAction,
  ListShortCodeAction,
  SetShortCodeAction
} from '../../store/short-code/short-code.actions';
import {ShortCodeState} from "../../store/short-code/short-code.state";

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private fs: UserFormControlService,
    private api: HttpApiService,
    private _store: Store
  ) { }
  fg: FormGroup;
  controlConstant = shortURLConstant.controls;

  @Select(ShortCodeState.getItems) getItems$: any;
  @Select(ShortCodeState.getUrl) getUrl$: any;

  ngOnInit(): void {
    this.fg = this.fs.getURL();
  }

  get shortCodeFormControl() {
    return this.fg.controls;
  }

  post() {
    if(this.fg.valid) {
      this._store.dispatch(new SetShortCodeAction(this.fg.value));
    } else {
      this.fg.markAllAsTouched();
    }
  }

  List() {
      this._store.dispatch(new ListShortCodeAction());
  }

  getShortCode() {
    console.log(this.fg.value.shortCode);
    this._store.dispatch(new GetShortCodeAction(this.fg.value.shortCode));
  }

  getUrl() {
    console.log(this.fg.value.shortCode);

    if(this.fg.valid) {
      this._store.dispatch(new GetUrlAction(this.fg.value.shortCode));
    } else {
      this.fg.markAllAsTouched();
    }

  }


}
