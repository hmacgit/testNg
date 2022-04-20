import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {shortURLConstant} from "./formConstants";

@Injectable({
  providedIn: 'root'
})
export class UserFormControlService {

  constructor(private _fb: FormBuilder) { }

  shortURL() {
   return this._fb.group( {
     [shortURLConstant.controls.url]: [
       '',
       Validators.required
     ],
      [shortURLConstant.controls.shortCode] : null,
    });

  }


}
