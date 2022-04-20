import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ShortUrlComponent} from '../short-url/short-url.component';
import {ShortCodeComponent} from './short-code.component';



const routes: Routes = [
  {
    path: '',
    component: ShortCodeComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortCodeModule { }
