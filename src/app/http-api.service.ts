import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shortCode} from "./httpApi.interface";
import {FormBuilder, FormControl} from "@angular/forms";


const postUrl = "https://procom-interview-api.herokuapp.com/api/v1/docs/#/default/post_shortCode";
@Injectable({
  providedIn: 'root'
})
export class HttpApiService {


  constructor(private _http: HttpClient) { }

  postShortCode(fg: FormControl) {
    //fg
    //return this._http.post(postUrl, )
  }

}
