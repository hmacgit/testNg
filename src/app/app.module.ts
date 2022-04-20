import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortUrlComponent } from './short-url/short-url.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {NgxsStoreModule} from '../store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    ShortUrlComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgxsStoreModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
