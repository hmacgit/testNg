import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortUrlComponent } from './short-url/short-url.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {NgxsStoreModule} from '../store/store.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ShortCodeListComponent } from './short-code-list/short-code-list.component';
import { ShortCodeComponent } from './short-code/short-code.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ShortUrlComponent,
    ShortCodeListComponent,
    ShortCodeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxsStoreModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
