import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import {UserFormControlService} from '../user-form-control.service';
import {HttpApiService} from '../http-api.service';
import {Store} from '@ngxs/store';
import {shortURLConstant} from '../formConstants';
import {
  GetShortCodeAction,
  GetUrlAction,
  ListShortCodeAction,
  SetShortCodeAction
} from '../../store/short-code/short-code.actions';

@Component({
  selector: 'app-short-code',
  templateUrl: './short-code.component.html',
  styleUrls: ['./short-code.component.scss']
})
export class ShortCodeComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    private fs: UserFormControlService,
    private api: HttpApiService,
    private _store: Store
  ) { }
  fg: FormGroup;
  controlConstant = shortURLConstant.controls;

  ngOnInit(): void {
    this.fg = this.fs.getCode();
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

    if(this.fg.valid) {
      this._store.dispatch(new GetShortCodeAction(this.fg.value.shortCode));
    } else {
      this.fg.markAllAsTouched();
    }

  }

  getUrl() {
    console.log(this.fg.value.url);
    this._store.dispatch(new GetUrlAction(this.fg.value.url));
  }




}
