import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShortUrlComponent} from './short-url.component';
import {
  RouterModule,
  Routes
} from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ShortUrlComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortUrlModule { }
