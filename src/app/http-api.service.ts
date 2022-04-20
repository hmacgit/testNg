import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {shortCode} from "./httpApi.interface";
import {FormBuilder, FormControl} from "@angular/forms";
import {ShortCodeStateModel} from '../store/short-code/short-code.state';


const baseUrl = "https://procom-interview-api.herokuapp.com/api/v1";
const postUrl = `${baseUrl}/shortCode`;

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private _http: HttpClient) { }

  postShortCode(fg: ShortCodeStateModel) {
    return this._http.post(postUrl,fg);
  }

}
