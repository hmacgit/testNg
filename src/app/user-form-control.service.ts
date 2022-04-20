import { Injectable } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {shortURLConstant} from "./formConstants";

@Injectable({
  providedIn: 'root'
})
export class UserFormControlService {

  constructor(private _fb: FormBuilder) { }

  getURL() {
   return this._fb.group( {
     [shortURLConstant.controls.url]: null,
     [shortURLConstant.controls.shortCode] : [
      '',
      Validators.required
     ]
    });
  }

  getCode() {
   return this._fb.group( {
     [shortURLConstant.controls.url]: [
       '',
       Validators.required
     ],
      [shortURLConstant.controls.shortCode] : null,
    });

  }

  postShortCode() {
   return this._fb.group( {
     [shortURLConstant.controls.url]: [
       '',
       Validators.required
     ],
      [shortURLConstant.controls.shortCode] : [
        '',
        Validators.required
      ],
    });

  }


}
