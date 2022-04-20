import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpParams
} from "@angular/common/http";
import {shortCode} from "./httpApi.interface";
import {FormBuilder, FormControl} from "@angular/forms";
import {ShortCodeStateModel} from '../store/short-code/short-code.state';


const baseUrl = "https://procom-interview-api.herokuapp.com/api/v1";
const postUrl = `${baseUrl}/shortCode`;
const listUrl = `${baseUrl}/url`;
const getUrl = `${baseUrl}/shortCode`;

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private _http: HttpClient) { }

  postShortCode(fg: ShortCodeStateModel) {
    return this._http.post(postUrl,fg);
  }

  listShortCode() {
    return this._http.get(listUrl);
  }

  getShortCode(shortCode: string) {
    return this._http.get(`${listUrl}/${shortCode}`);
  }

  getUrl(url: string) {
    const encodeURI = encodeURIComponent(url);
    console.log(encodeURI);
    return this._http.get(`${getUrl}/${encodeURI}`);
  }

}
