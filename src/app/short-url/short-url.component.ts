import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {shortURLConstant} from "../formConstants";
import {UserFormControlService} from "../user-form-control.service";
import {HttpApiService} from "../http-api.service";

@Component({
  selector: 'app-short-url',
  templateUrl: './short-url.component.html',
  styleUrls: ['./short-url.component.scss']
})
export class ShortUrlComponent implements OnInit {

  constructor(private _fb: FormBuilder,
              private fs: UserFormControlService,
              private api: HttpApiService,
              ) { }
  fg: FormGroup;
  controlConstant = shortURLConstant.controls;

  ngOnInit(): void {
    this.fg = this.fs.shortURL();
  }

  submit() {
    if(this.fg.valid) {

      //this.api.postShortCode(this.fg)
    }

  }


}