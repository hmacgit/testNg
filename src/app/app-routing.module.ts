import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShortCodeListComponent} from './short-code-list/short-code-list.component';

const routes: Routes = [

  {
    path: 'list',
    component: ShortCodeListComponent,
  },
  {
    path: 'add',
    loadChildren: () => import('./short-url/short-url.module').then(m => m.ShortUrlModule),
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '**',
    redirectTo: 'login'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
