import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {ShortCodeListComponent} from './short-code-list.component';



const routes: Routes = [
  {
    path: '',
    component: ShortCodeListComponent,
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShortCodeListModule { }
