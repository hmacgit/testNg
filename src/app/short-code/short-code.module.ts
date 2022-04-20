import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ShortCodeComponent} from './short-code.component';

const routes: Routes = [
  {
    path: '',
    component: ShortCodeComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShortCodeModule { }
