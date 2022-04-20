import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShortCodeListComponent} from './short-code-list/short-code-list.component';
import {ShortCodeModule} from './short-code/short-code.module';

const routes: Routes = [

  {
    path: 'add',
    component: ShortCodeListComponent,
  },
  {
    path: 'short-code',
    loadChildren: () => import('./short-code/short-code.module').then(m => m.ShortCodeModule),
  },
  {
    path: 'short-url',
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
